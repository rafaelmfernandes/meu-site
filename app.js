import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarEPolularTabelaUsuarios(nome, sobrenome, email, senha){
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,

    });

    db.run(`CREATE TABLE IF NOT EXISTS login (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT), email TEXT, senha TEXT, telefone NUMBER `);
    db.run(`INSERT INTO login (nome, sobrenome, email, senha) VALUES (?,?,?,?)`, [nome, sobrenome, email, senha]);

}

criarEPolularTabelaUsuarios('Rafael', 'Fernandes', 'rafaelmelo116@gmail.com', 'mae1filho');

console.log(criarEPolularTabelaUsuarios)

