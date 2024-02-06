import { create } from "zustand";
import {
  BuscarMarca,MostrarMarca,EliminarMarca,InsertarMarca,EditarMarca
} from "../index";

export const useMarcaStore = create((set, get) => ({
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  datamarca: [],
  marcaItemSelect: [],
  parametros: {},
  mostrarmarca: async (p) => {
    const response = await MostrarMarca(p);
    set({ parametros: p });
    set({ datamarca: response });
    set({ marcaItemSelect: response[0] });
    return response;
  },
  selectMarca: (p) => {
    set({ marcaItemSelect: p });
  },
  insertarmarca: async (p, file) => {
    await InsertarMarca(p, file);
    const { mostrarmarca } = get();
    const { parametros } = get();
    set(mostrarmarca(parametros));
  },
  eliminarMarca: async (p) => {
    await EliminarMarca(p);
    const { mostrarmarca } = get();
    const { parametros } = get();
    set(mostrarmarca(parametros));
  },
  editarMarca: async (p) => {
    await EditarMarca(p);
    const { mostrarmarca } = get();
    const { parametros } = get();
    set(mostrarmarca(parametros));
  },
  buscarmarca: async (p) => {
    const response = await BuscarMarca(p);
    set({ datamarca: response });
    return response;
  },
}));
