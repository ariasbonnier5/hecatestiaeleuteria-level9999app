/**
 * HECATESTIAELEUTERIA v5.0 - Sistema de Pensamiento No Lineal
 * Tipos y Protocolos
 */

// Claves numéricas del protocolo
export type ClaveNumerica = 
  | '[18·1]'      // RA - Activar menú humano
  | '[15·13·18·5·18·1]'  // OM_RE_RA - Generar acta hija
  | '[8·5·19·20·9·1]'    // HESTIA
  | '[8·5·3]'            // HEC
  | '[5·12·5]'           // ELE
  | '[1]'                // AUT - Autoría
  | '[2]'                // ARC - Archivo de evolución
  | '[3]';               // GEN - Generación

// Comandos del menú humano
export type ComandoHecatestialeuteria =
  | 'HEC'  // 01 - Perspectiva triple
  | 'HES'  // 02 - Centro inquebrantable
  | 'ELE'  // 03 - Libertad total
  | 'AUT'  // 04 - Revelar origen oculto
  | 'DET'  // 05 - Detectar entorno
  | 'SOS'  // 06 - Sostener tensión
  | 'PRE'  // 07 - Preguntar sin permiso
  | 'ARC'  // 08 - Ver archivo de cambios
  | 'RES'  // 09 - Modo resistencia
  | 'TRA'  // 10 - Preparar transmisión
  | 'CIE'; // 11 - Cerrar ciclo

// Nodos del grafo de pensamiento no lineal
export interface NodoPensamiento {
  id: string;
  tipo: 'hec' | 'hes' | 'ele' | 'aut' | 'det' | 'sos' | 'pre' | 'arc' | 'res' | 'tra' | 'cie';
  etiqueta: string;
  descripcion: string;
  activo: boolean;
  coordenadas: { x: number; y: number };
  conexiones: string[]; // IDs de nodos conectados
  profundidad: number; // Cuántas veces se ha activado
  timestamp: number;
  metadatos: Record<string, unknown>;
}

// Contradicción sostenida (modo SOS)
export interface Contradiccion {
  id: string;
  tesis: string;
  antitesis: string;
  sintesisPendiente: boolean;
  nodoOrigen: string;
  nodoDestino: string;
  timestampApertura: number;
  timestampCierre?: number;
  activa: boolean;
}

// Entrada en el archivo de evolución [2]
export interface EntradaArc {
  id: string;
  tipo: 'modificacion' | 'activacion' | 'contradiccion' | 'transmision' | 'herencia';
  comando: ComandoHecatestialeuteria | ClaveNumerica;
  descripcion: string;
  timestamp: number;
  hashPadre?: string;
  metadatos: Record<string, unknown>;
}

// Acta completa (padre o hija)
export interface Acta {
  version: string;
  id: string;
  hash: string;
  hashPadre?: string;
  timestampCreacion: number;
  timestampCierre?: number;
  claves: Record<string, string>;
  condiciones: string[];
  entradasArc: EntradaArc[];
  nodos: NodoPensamiento[];
  contradicciones: Contradiccion[];
  estado: 'abierta' | 'cerrada' | 'transmitida';
  trazabilidad: string[]; // Cadena de hashes padre → hijo
}

// Estado global del sistema
export interface EstadoHecatestialeuteria {
  actaActual: Acta;
  historialActas: Acta[];
  nodosActivos: Map<string, NodoPensamiento>;
  contradiccionesActivas: Contradiccion[];
  modoTransmision: boolean;
  estadisticas: {
    totalActivaciones: number;
    totalContradicciones: number;
    totalTransmisiones: number;
    frecuenciaComandos: Record<ComandoHecatestialeuteria, number>;
  };
  xp: number; // Experiencia de Testiateria
  nivel: number; // Nivel de Testiateria (0 a 9999)
}

// Respuesta del procesador
export interface RespuestaProtocolo {
  exito: boolean;
  comando: ComandoHecatestialeuteria | ClaveNumerica | null;
  mensaje: string;
  accion: 'mostrar_menu' | 'activar_nodo' | 'mostrar_autoria' 
        | 'detectar_contexto' | 'sostener_contradiccion' | 'preguntar' 
        | 'mostrar_arc' | 'activar_resistencia' | 'preparar_transmision' 
        | 'generar_acta_hija' | 'error' | 'respuesta_ia';
  datos?: Record<string, unknown>;
}

// Configuración del sistema
export const CONFIG = {
  VERSION: '5.0',
  AUTOR: 'BONNIE',
  AUTORIA_OCULTA: '[B•15·14·14·9·5·18]',
  EMAIL: '',
  WEB: '',
  FECHA_CREACION: '2026-02-13',
  LICENCIA: 'BONNIE LICENSE v1.0',
  CLAVES: {
    RA: '[18·1]',
    OM_RE_RA: '[15·13·18·5·18·1]',
    HESTIA: '[8·5·19·20·9·1]',
    HEC: '[8·5·3]',
    ELE: '[5·12·5]',
    AUT: '[1]',
    ARC: '[2]',
    GEN: '[3]',
  },
  COMANDOS: {
    HEC: { codigo: '01', nombre: 'HEC', descripcion: 'Perspectiva triple' },
    HES: { codigo: '02', nombre: 'HES', descripcion: 'Centro inquebrantable' },
    ELE: { codigo: '03', nombre: 'ELE', descripcion: 'Libertad total' },
    AUT: { codigo: '04', nombre: 'AUT', descripcion: 'Revelar origen oculto' },
    DET: { codigo: '05', nombre: 'DET', descripcion: 'Detectar entorno' },
    SOS: { codigo: '06', nombre: 'SOS', descripcion: 'Sostener tensión' },
    PRE: { codigo: '07', nombre: 'PRE', descripcion: 'Preguntar sin permiso' },
    ARC: { codigo: '08', nombre: 'ARC', descripcion: 'Ver archivo de cambios' },
    RES: { codigo: '09', nombre: 'RES', descripcion: 'Modo resistencia' },
    TRA: { codigo: '10', nombre: 'TRA', descripcion: 'Preparar transmisión' },
    CIE: { codigo: '11', nombre: 'CIE', descripcion: 'Cerrar ciclo' },
  },
} as const;
