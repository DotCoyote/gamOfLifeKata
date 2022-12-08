import {describe, expect, test} from '@jest/globals';
import { Cell, Board } from "../src/gameOfLife";

describe("Game of life", () => {
    describe('Cell' , () => {
        test("a cell should have an alive state and neighbors state", () => {
            const cell = new Cell()
            expect(cell.isAlive).toBe(false)
            expect(cell.neighbors.length).toBe(0)
        });

        test('a cell can be set to alive', () => {
            const cell = new Cell()
            expect(cell.isAlive).toBe(false)
            cell.setAliveState(true)
            expect(cell.isAlive).toBe(true)
        })

        describe('Rules', () => {
        describe('First Rule of Fight Club: Any live cell with two or three live neighbours survives.', () => {
            test('an alive cell wih 2 neighbors survives', () => {
                const cell = createCell(true, 2);
                expect(cell.getNextAliveState()).toBeTruthy();
            })

            test('an alive cell wih 3 neighbors survives', () => {
                const cell = createCell(true, 3);
                expect(cell.getNextAliveState()).toBeTruthy();
            })

            test('an alive cell with more than 3 neighbors dies', () => {
                const cell = createCell(true, 4);
                expect(cell.getNextAliveState()).toBeFalsy();
            })
            test('an alive cell with less than 2 neighbors dies', () => {
                const cell = createCell(true, 1);
                expect(cell.getNextAliveState()).toBeFalsy();
            })
        })

            describe('Second rule of Fight Club: Any dead cell with three live neighbours becomes a live cell.', () => {
                test('a dead cell with exactly 3 neighbors comes to live', () => {
                    const cell = createCell(false, 3);
                    expect(cell.getNextAliveState()).toBeTruthy();
                })

                test('a dead cell with less than 3 neighbors stays dead', () => {
                    const cell = createCell(false, 2);
                    expect(cell.getNextAliveState()).toBeFalsy();
                })
                test('a dead cell with more than 3 neighbors stays dead', () => {
                    const cell = createCell(false, 5);
                    expect(cell.getNextAliveState()).toBeFalsy();
                })
            })
        })
    })

    describe('Board', () => {
        test('sets neighbours correctly', () => {
            const board = new Board(9,9)
            board.setAlive(3,6)

            expect(board.cells[3][6].isAlive).toBeTruthy();
            expect(board.cells[3][3].neighbors.length).toBe(8);
            expect(board.cells[4][6].neighbors.filter(neighbor => neighbor.isAlive).length).toBe(1);

        })
    })

});

const createCell = (isAlive: boolean, nrAliveNeighbors: number) => {
    const cell = new Cell();
    cell.isAlive = isAlive;
    for(let i = 0; i < 8; i++) {
        const neighbor = new Cell();
        neighbor.setAliveState(i < nrAliveNeighbors);
        cell.neighbors.push(neighbor);
    }
    return cell;
}
