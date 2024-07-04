import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('digitalizou.db');

export type TextoCapturado = {
    conteudo: string,
}


export const insetTexto = async (textoCap: TextoCapturado) => {
    try {
        if (!textoCap || textoCap == null) {
            throw new Error('Nenhum texto para inserir');
        }

        const sql = `
            INSERT INTO textoCapturado (conteudo )
            VALUES (?)
        `;
        const values = [ textoCap.conteudo];
        await db.runAsync(sql, values);
        console.log('Texto inserido com sucesso')
    } catch (error) {
        console.log(error, ' erro ao inserir texto' )
    }
}
export const getTextosCapturados = async () => {
    try {
        let result;
        await db.withExclusiveTransactionAsync ( async ()=> {
            result = await db.getAllAsync(`SELECT * FROM textoCapturado`)
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

export const setupDatabaseTextoCapturado = async () => {
    let result = [];
    try {
      result = await db.getAllAsync('SELECT * FROM textoCapturado');
  
      if (result.length !== 0) {
        return
      }
  
      await db.execAsync(`
         INSERT INTO textoCapturado (conteudo) VALUES
            ('texto texto  textotexto texto 
            textotextotextotextotextotextotexto
            textotextotextotextotextotextotexto,texto
            texto
            textotextotextotextotextotextotexto')    
        `);
    } catch (error) {
      console.error('Erro ao buscar text:', error);
    }
  };
  