2
import {Tarea} from "./tarea.mjs"

export class Tareas {
    _listado = {

    };

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        })

        return listado;
    }

    constructor(){
        this._listado = {};
    
    }

    borrarTarea(id = ''){
        if (this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []){
       const res = tareas.map((tarea) => {
            this._listado[tarea.id] = tarea;
        })
        return res;
    }
    crearTarea(desc = ""){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;

    }
    listadoCompleto(listadoArr = []){
        listadoArr.forEach((item, i) => {
            const indice = `${i + 1}.`.green
            const estado = item.completadoEn ? `Completado`.green.bold : `Pendiente`.red.bold
            console.log(`${indice} ${item.desc} ${'::'.white.bold} ${estado}`)
        })
    }
    
    listarTareasCompletadas(list = []){
        this.MostrarSiesPendienteOSiesCompletada(`Completado`.green.bold, list);
    }
    listarTareasPendientes(list = []){
        this.MostrarSiesPendienteOSiesCompletada(`Pendiente`.red.bold, list);
    }
    MostrarSiesPendienteOSiesCompletada(acomparar, list){
        let count = 0;
        list.forEach((item, i) => {
            const estado = item.completadoEn ? `Completado`.green.bold : `Pendiente`.red.bold
            if(estado === acomparar){
                count = count + 1;
                const indice = `${count}.`.green
                console.log(`${indice} ${item.desc} ${'::'.white.bold} ${estado}`)
            }`8`
        })
    }
} 

