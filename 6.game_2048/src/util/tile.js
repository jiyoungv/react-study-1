import { MAX_POS } from "../constant";
import { assert } from "./assert";
import { getRandomInt } from "./number";

export function getInitialTileList () { // 타일 초기화
    const tileList = [];

    // 처음 2개 타일 생성
    const tile1 = makeTile(tileList);
    tileList.push(tile1);
    const tile2 = makeTile(tileList);
    tileList.push(tile2);

    return tileList;
};

function checkTileCollision (tileList, tile) { // 타일이 충돌되는지 체크

    // some()은 배열의 아이템 중 하나라도 true이면 true를 return
    return tileList.some(item => item.x === tile.x && item.y === tile.y);
}

let currentId = 0;
export function makeTile (tileList) {
    let tile = null;

    while (!tile || (tileList && checkTileCollision(tileList, tile))) {
        tile = {
            id: currentId++,
            x: getRandomInt(1, MAX_POS), // x, y좌표를 랜덤하게
            y: getRandomInt(1, MAX_POS),
            value: 2,
            isNew: undefined,
            isMerged: undefined,
        };
    }

    return tile;
};

export const moveTile = ({ tileList, x, y }) => {
    assert(x === 0 || y === 0, '');

    const isMoveY = y !== 0; // 키보드 위아래 움직이는지 체크
    const isMinus = x + y < 0; // x,y좌표 마이너스 체크

    const sorted = tileList
        .map(item => ({ ...item, isMerged: false, isNew: false }))
        .filter(item => !item.isDisabled)
        .sort((a, b) => {
            const res = isMoveY ? a.x - b.x : a.y - b.y;

            if (res) {
                return res;
            } else {
                if (isMoveY) {
                    return isMinus ? a.y - b.y : b.y - a.y;
                } else {
                    return isMinus ? a.x - b.x : b.x - a.x;
                }
            }
        });

    const initPos = isMinus ? 1 : MAX_POS;
    let pos = initPos;

    for (let i = 0; i < sorted.length; i++) {
        if (isMoveY) {
            sorted[i].y = pos;
            pos = isMinus ? pos + 1 : pos - 1;

            if (sorted[i].x !== sorted[i + 1]?.x) {
                pos = initPos;
            }
        } else {
            sorted[i].x = pos;
            pos = isMinus ? pos + 1 : pos - 1;

            if (sorted[i].y !== sorted[i + 1]?.y) {
                pos = initPos;
            }            
        }
    }

    let nextPos = 0;
    const newTileList = [...sorted];
    
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i].isDisabled) {
            continue;
        }

        if (nextPos && (isMoveY ? sorted[i].x === sorted[i - 1]?.x : sorted[i].y === sorted[i - 1]?.y)) {
            if (isMoveY) {
                sorted[i].y = nextPos;
            } else {
                sorted[i].x = nextPos;
            }

            nextPos += isMinus ? 1 : -1;
        } else {
            nextPos = 0;
        }

        if (
            (isMoveY 
                ? sorted[i].x === sorted[i + 1]?.x
                : sorted[i].y === sorted[i + 1]?.y) &&
            sorted[i].value === sorted[i + 1]?.value) {
            const tile = makeTile();
            tile.x = sorted[i].x;
            tile.y = sorted[i].y;
            tile.isMerged = true;
            tile.value = sorted[i].value * 2;
            newTileList.push(tile);

            sorted[i].isDisabled = true;
            sorted[i + 1].isDisabled = true;

            if (isMoveY) {
                nextPos = sorted[i + 1].y;
                sorted[i + 1].y = sorted[i].y;
            } else {
                nextPos = sorted[i + 1].x;
                sorted[i + 1].x = sorted[i].x;                
            }
        }
    }

    return newTileList;
};

