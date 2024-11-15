import {User} from './user';
import {Vehicle} from './vehicle';
import {Maintenance} from './maintenance';

export type RootStackParamList = {
  RegisterUser: {user: User};
  Login: undefined;
  CreateUpdateVehicle: {vehicleId?: string; vehicle: Vehicle};
  VehicleList: {query?: string};
  MaintenanceList: {query?: string; vehicleId: string};
  RegisterMaintenance: {maintenance: Maintenance; vehicleId: string};
};
