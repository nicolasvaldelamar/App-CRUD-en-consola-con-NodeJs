import pausa, { inquirerMenu, leerInput, listadoBorrarTareas } from './helpers/inquirer.mjs'
import colors from 'colors'
import { Tareas } from './models/tareas.mjs';
import { guardarDB, leerDB } from './helpers/guardarArchivo.mjs';

const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        // Establecer las tareas
        tareas.cargarTareasFromArray(tareasDB)
    }
    do {
        //imprimir menu
        opt = await inquirerMenu();
        
        switch (opt) {
            case "1": 
                // crear opcion 
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc);
            break;
            case "2": 
                await tareas.listadoCompleto(tareas.listadoArr);
            break;
            case "3":
                await tareas.listarTareasCompletadas(tareas.listadoArr);
            break;
            case "4":
                await tareas.listarTareasPendientes(tareas.listadoArr);
            break;
            case "5":
                await tareas.completarTareas(tareas.listadoArr);
            break;
            case "6": 
                const id = await listadoBorrarTareas(tareas.listadoArr);
                console.log({id})
            break;
        }
        guardarDB(tareas.listadoArr);
        await pausa();
       

    } while (opt !== '0');
}
main();