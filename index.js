class MonsterGame {
    constructor(root, noRows = 8, noCols = 8) {
        this.noCols = noCols;
        this.noRows = noRows;
        this.root = root;
        this.table = [];
        for(let i = 0;  i<noRows; i++ ){
            this.table[i] = [];
            for(let j = 0; j<noCols; j++) {
                this.table[i][j] = '&nbsp;';
            }
        }
        this.statueGenerator();
        this.playerGenerator();
        this.addEvents();
    }
    playerGenerator() {
        this.playerRow = Math.floor(Math.random() * this.noRows);
        this.playerCol = Math.floor(Math.random() * this.noCols);
        this.table[this.playerRow][this.playerCol] = 'P';  
    }
    statueGenerator() {
        const noStatue = Math.floor(Math.random() * (10 - 4) + 4);
        for(let i = 0; i< noStatue; i++) {
            const row = Math.floor(Math.random() * this.noRows);
            const col = Math.floor(Math.random() * this.noCols);
            console.log(row, col);
            this.table[row][col] = 'S'
        }
    }
    drawGame() {
        const root = document.querySelector(this.root);
        if (!root) {
            return;
        }
        root.innerHTML = '';
        this.table.forEach( (rows) => {
            const container = document.createElement('div');
            root.appendChild(container);
            rows.forEach((value) => {
                const el = document.createElement('div');
                el.classList.add('cell')
                el.innerHTML = value;
                container.appendChild(el);
            });
        })

    }
    addEvents() {
        document.addEventListener('keypress', (event) => {
            if ( event.code === 'KeyA') {
                console.log('Stanga');
                if ((this.table[this.playerRow ][this.playerCol - 1] !== 'S') && (this.playerCol - 1 >= 0)) {
                    this.table[this.playerRow][this.playerCol] =  '&nbsp;';
                    this.playerCol = this.playerCol - 1;
                    this.table[this.playerRow][this.playerCol] = 'P';
                    this.drawGame();
                }
             }
            if ( event.code === 'KeyD') {
                console.log('Dreapta');
                if ((this.table[this.playerRow ][this.playerCol + 1] !== 'S') && (this.playerCol + 1 < this.noCols)) {
                    this.table[this.playerRow][this.playerCol] =  '&nbsp;';
                    this.playerCol = this.playerCol + 1;
                    this.table[this.playerRow][this.playerCol] = 'P';
                    this.drawGame();
                }
            }

            if ( event.code === 'KeyW') {
                console.log('Sus');
                if ((this.table[this.playerRow - 1][this.playerCol] !== 'S') && (this.playerRow - 1 >= 0)) {
                    this.table[this.playerRow][this.playerCol] =  '&nbsp;';
                    this.playerRow = this.playerRow - 1;
                    this.table[this.playerRow][this.playerCol] = 'P';
                    this.drawGame();
                }
            }
            if ( event.code === 'KeyS') {
                console.log('Jos');
                if ((this.table[this.playerRow + 1][this.playerCol] !== 'S') && (this.playerRow + 1 < this.noRows)) {
                    this.table[this.playerRow][this.playerCol] =  '&nbsp;';
                    this.playerRow = this.playerRow + 1;
                    this.table[this.playerRow][this.playerCol] = 'P';
                    this.drawGame();
                }
            }
        })
    }
}


const monsterGame = new MonsterGame('#main');
monsterGame.drawGame();