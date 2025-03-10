export enum Opperation {
  VOID_DOCUMENT,
  COMMERCIAL_APPROVAL,
}
export interface Mensaje {
  valor: string;
  codigo: number;
}
export type TrackStatusCode = 0 | 1 | 2 | 3 | 4; //No encontrado, Aceptado, Rechazado, En Proceso, Aceptado Condicional
export interface TrackingStatusResponse {
  trackId: string;
  codigo: TrackStatusCode;
  estado: TrackStatusEnum;
  rnc: string;
  encf: string;
  secuenciaUtilizada: boolean;
  fechaRecepcion: string;
  mensajes?: Mensaje[];
}

export type StatusCode = 0 | 1 | 2; //'No encontrado' | 'Aceptado' | 'Rechazado';
export type Status = 'No encontrado' | 'Aceptado' | 'Rechazado';
export interface InquiryStatusResponse {
  codigo: StatusCode;
  estado: Status;
  rncEmisor?: string;
  ncfElectronico?: string;
  montoTotal?: number;
  totalITBIS?: number;
  fechaEmision?: string;
  fechaFirma?: string;
  rncComprador?: string;
  codigoSeguridad?: string;
  idExtranjero?: string;
}

export interface SummaryTrackingStatusResponse {
  trackId: string;
  estado: string;
  fechaRecepcion: string;
}

export interface AuthToken {
  token: string;
  expira: string;
  expedido: string;
}

export interface InvoiceResponse {
  trackId?: string;
  error?: string;
  mensajes?: Mensaje[];
}

export interface InvoiceSummaryResponse {
  codigo: number;
  estado: 'Aceptado' | 'Rechazado' | 'Aceptado Condicional';
  mensajes?: Mensaje[];
  encf: string;
  secuenciaUtilizada: boolean;
}

export enum TrackStatusEnum {
  NOT_FOUND = 'No encontrado',
  ACCEPTED = 'Aceptado',
  REJECTED = 'Rechazado',
  IN_PROCESS = 'En Proceso',
  CONDITIONAL_ACCEPTED = 'Aceptado Condicional',
}
export enum CustomTrackStatusEnum {
  IN_QUEUE = 'En Cola',
  SENT_TO_DGII = 'Enviado a la DGII',
  ERROR = 'Error',
}

export type ExtendedTrackStatusEnum = TrackStatusEnum | CustomTrackStatusEnum;

export interface ServiceDirectoryResponse {
  nombre: string;
  rnc: string;
  urlRecepcion: string;
  urlAceptacion: string;
  urlOpcional: string;
}

export interface InquiryInvoiceSummary {
  rnc: string;
  encf: string;
  secuenciaUtilizada: boolean;
  codigo: StatusCode;
  estado: Status;
  mensajes?: Mensaje[];
}

export interface CommercialApprovalResponse {
  codigo: '01' | '02';
  estado: 'Aprobación Comercial Aprobada.' | 'Aprobacion Comercial Rechazada.';
  mensaje: string[];
}

export interface VoidNCFResponse {
  rnc: string;
  codigo: string;
  nombre: string;
  mensajes: string[];
}

export type ServicesStatusName =
  | 'Autenticación'
  | 'Recepción'
  | 'Consulta Resultado'
  | 'Consulta Estado'
  | 'Consulta Directorio'
  | 'Consulta TrackIds'
  | 'Aprobación Comercial'
  | 'Anulación Rangos'
  | 'Recepción FC';

export type ServiceStatusResponse = ServiceStatus[];
export interface ServiceStatus {
  servicio: ServicesStatusName;
  estatus: 'Disponible' | 'No Disponible';
  ambiente: string;
}

export interface MaintenanceResponse {
  ventanaMantenimientos: MaintenanceWindow[];
}

export interface MaintenanceWindow {
  ambiente: string;
  horaInicio: string;
  horaFin: string;
  dias: string[];
}

export interface VerificationResponse {
  estado: 'Disponible' | 'No Disponible';
}

export enum StatusOperation {
  SERVICES_STATUS,
  SERVICE_MAINTENANCE_WINDOW,
  SERVICE_VERIFICATION,
}
