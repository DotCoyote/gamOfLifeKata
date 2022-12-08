export class Cell {
    constructor() {
    }

    public isAlive: boolean = false;

    public neighbors: Cell[] = []


    public setAliveState(value: boolean) {
        this.isAlive = value
    }

    public getVisualAliveState() {
        return this.isAlive ? 'o' : 'x'
    }

    /**
     * These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
     *
     * 1. Any live cell with two or three live neighbours survives.
     * 2. Any dead cell with three live neighbours becomes a live cell.
     * 3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
     */
    public getNextAliveState() {
        const nrNeighbors = this.neighbors.filter(neighbor => neighbor.isAlive).length;
        if (this.isAlive) {
            return nrNeighbors >= 2 && nrNeighbors <= 3;
        }
        return nrNeighbors === 3;
    }
}

export class Board {
    constructor(nrRows: number, nrColumns: number) {
        this.createBoard(nrRows,nrColumns)
    }

    public cells: Cell[][] = []

    public createBoard(nrRows: number, nrColumns: number) {
        for (let i= 0; i < nrRows; i++ ) {
            const row = [];
            for (let j= 0; j < nrColumns; j++ ) {
                const cell = new Cell();
                row.push(cell);
            }
            this.cells.push(row);
        }

        //     j
        //   x x x
        // i x o x
        //   x x x

        for (let i= 0; i < nrRows; i++ ) {
            for (let j= 0; j < nrColumns; j++ ) {
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        const newI = i+x;
                        const newJ = j+y;
                        if ((newI >= 0) && (newJ >= 0) && (newI != i && newJ != j) && this.cells[newI] && this.cells[newI][newJ]) {
                            this.cells[i][j].neighbors.push(this.cells[newI][newJ]);
                        }                    }
                }
            }
        }
    }

    public paint() {
        console.log('Board: ');
        for (let i= 0; i < this.cells.length; i++ ) {
            const rowData = []
            for (let j= 0; j < this.cells[i].length; j++ ) {
                rowData.push(this.cells[i][j].getVisualAliveState());
            }
            console.log(rowData.join(' '));
        }
        console.log('\n');
    }

    public setAlive(locationX: number, locationY: number) {
        if (this.cells[locationX][locationY]) {
            this.cells[locationX][locationY].setAliveState(true)
        }
    }
}

const board = new Board(9,9)
board.paint()
board.setAlive(3,6)
// board.goToNextStep()
board.paint()
