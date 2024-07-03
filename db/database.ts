import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('digitalizou.db');

type Texto = {
    conteudo: string,
  
}


export const insetTexto = async (textoCap: Texto) => {
    try {
        if (!textoCap || textoCap == null) {
            throw new Error('Nenhum texto para inserir');
        }

        const sql = `
            INSERT INTO textoCapturado (texto, )
            VALUES (?)
        `;
        const values = [ textoCap.conteudo];
        await db.runAsync(sql, values);
        console.log('Texto inserido com sucesso')
    } catch (error) {
        console.log(error, ' erro ao inserir texto' )
    }
}
export const getTexto = async () => {
    try {
        let result;
        await db.withExclusiveTransactionAsync ( async ()=> {
            result = await db.getAllAsync(`SELECT * FROM texto`)
        });

        return result ? result : [];
    }catch( error ){
        console.log('Erro ao buscar textos do db', error)
        return []
    }
}

export const setupDatabase = async () => {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS textoCapturado (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          conteudo TEXT NOT NULL
        );
      `);

}