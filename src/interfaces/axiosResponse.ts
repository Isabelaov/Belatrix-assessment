export interface SuccessResponse<T> {
  statusCode: number;
  data: T;
}

interface ErrorResponse {
  message: string;
  error: string;
  statusCode: number;
  timeStamp: string;
  path: string;
}

export type AxiosResponseType<T> = SuccessResponse<T> | ErrorResponse | any;
