import { PlayerData, Vector } from "../common/common";

export class ClientFunctions {
    /** QBCore.Functions.GetPlayerData()
   *  @param cb: Optional callback function with PlayerData as the argument
   *  @returns returns PlayerData object if callback is not provided 
   */
     GetPlayerData(cb?: Function): PlayerData

     /** QBCore.Functions.DrawText: Draws 2D Text on the screen at given position
      * @param x: x coordinate
      * @param y: y coordinate
      * @param width
      * @param height
      * @param scale: scale of the text
      * @param r: red color
      * @param g: green color
      * @param b: blue color
      * @param a: alpha value
      * @param text: text to draw
      */
     DrawText(x: number, y: number, width: number, height: number, scale: number, r: number, g: number, b: number, a: number, text: string): void
   
     /** QBCore.Functions.DrawText3D: Draws Floating text at given world cooridinate
      * @param x: x coordinate
      * @param y: y coordinate
      * @param z: z coordinate
      * @param text: text to draw
      */
     DrawText3D(x: number, y: number, z: number, text: string): void
   
     /** QBCore.Functions.GetCoords
      *  @param {number} entity: Entity handle
      *  @returns Vector of entity position in the world
      */
     GetCoords(entity: number): Vector
   
     /** QBCore.Functions.SpawnVehicle: Spawns a vehicle at given position and executes a callback function 
      *  @param {number} model: model hash
      *  @param cb: callback function
      *  @param coords: position vector to spawn the vehicle
      *  @param isnetwored: if true vehicle will be networked
      */
     SpawnVehicle(model: number, cb: Function, coords: Vector, isnetwored: boolean): void
   
     /** QBCore.Functions.DeleteVehicle: Deletes the specified vehicle 
      *  @param vehicle: vehicle entity handle
      */
     DeleteVehicle(vehicle: number): void
   
     /** QBCore.Functions.Notify: Displays a notification on screen 
      *  @param text: notification text
      *  @param textype: type of notification to display
      *  @param length: amount of time to display for 
      */
     Notify(text: string | Notification, textype?: string, length?: number): void
   
     /** QBCore.Functions.TriggerCallback: Triggers a callback function 
      *  @param name: Name of the registered callback
      *  @param cb: callback function
      *  @param args: optional - arguments to pass to the callback function
      */
     TriggerCallback(name: string, cb: Function, ...args: any[]): void
   
     /** QBCore.Functions.GetVehicles
      *  @returns array of entity handles for all vehicles within scope of the client
      */
     GetVehicles(): number[]
   
     /** QBCore.Functions.GetPeds 
      *  @returns array of entity handles for all peds within scope of the client that aren't on the ignore list
      */
     GetPeds(): number[]
   
     /** QBCore.Functions.GetClosestVehicle
      *  @param coords: position vector to find the closest vehicle to, if not specified the player position will be used
      *  @returns tuple of [entity handle, distance]
      */
     GetClosestVehicle(coords: Vector | null): [number, number]
   
     /** QBCore.Functions.GetClosestPed
      *  @param coords: position vector to find the closest ped to, if not specified the player position will be used
      *  @returns tuple of [entity handle, distance]
      */
     GetClosestPed(coords: Vector | null): [number, number]
   
     /** QBCore.Functions.GetClosestPlayer
      *  @param coords: position vector to find the closest player ped to, if not specified the player position will be used
      *  @returns tuple of [entity handle, distance]
      */
     GetClosestPlayer(coords: Vector | null): [number, number]
     
     /** QBCore.Functions.GetPlayersFromCoords
      *  @param coords: position vector to search for players within
      *  @param distance: radius of area to search within
      *  @returns array of entity handles for all players within the specified distance of the given coords
      */
     GetPlayersFromCoords(coords: Vector, distance: number): number[]
   
     /** QBCore.Functions.HasItem 
      *  @param item: Name of item to check for
      *  @returns true if the player has the item, false otherwise
      */
     HasItem(tem: string): boolean
   
     /** QBCore.Functions.ProgressBar: Displays a progress bar on screen
      *  @param name: Name of the progress bar
      *  @param label: Label to be displayed on the progressbar
      *  @param duration: Duration of the progress bar
      *  @param useWhileDead: If true the progress bar will be displayed while the player is dead
      *  @param canCancel: If true the player can cancel the progress bar, onCancel callback will be called
      *  @param disableControls: Controls to be disabled while the progress bar is displayed
      *  @param animation: Animation to be played while the progress bar is displayed
      *  @param prop: Prop to be attatched to player while the progress bar is displayed
      *  @param propTwo: More of the same
      *  @param onFinish: Callback function to be called when the progress bar finishes successfully
      *  @param onCancel: Callback function to be called when the progress bar is cancelled
      */
     Progressbar(name: string, label: string, duration: number, useWhileDead: boolean, canCancel: boolean, disableControls: any, animation: any, prop: any, propTwo: any, onFinish: Function, onCancel: Function): void
   
     /** QBCore.Functions.GetVehicleProperties 
      *  @param vehicle: vehicle entity handle
      *  @returns vehicle properties object or null if the vehicle handle is invalid
      */
     GetVehicleProperties(vehicle: number): VehicleProperties | null
   
     /** QBCore.Functions.SetVehicleProperties: Setter for GetVehicleProperties, applies properties to the vehicle 
      *  @param vehicle: vehicle entity handle
      *  @param properties: vehicle properties object
      */
     SetVehicleProperties(vehicle: number, props: VehicleProperties): void
} 

export declare interface VehicleProperties {
  model: number;
  plate: string;
  plateIndex: number;
  bodyHealth: number;
  engineHealth: number;
  tankHealth: number;
  fuelLevel: number;
  dirtLevel: number;
  color1: number;
  color2: number;
  pearlescentColor: number;
  interiorColor: number;
  dashboardColor: number;
  wheelColor: number;
  wheels: number;
  windowTint: number;
  xenonColor: number;
  neonEnabled: boolean[];
  neonColor: {
    r: number;
    g: number;
    b: number;
  };
  extras: boolean[];
  modSpoilers: number;
  modFrontBumper: number;
  modRearBumper: number;
  modSideSkirt: number;
  modExhaust: number;
  modFrame: number;
  modGrille: number;
  modHood: number;
  modFender: number;
  modRightFender: number;
  modRoof: number;
  modEngine: number;
  modBrakes: number;
  modTransmission: number;
  modHorns: number;
  modSuspension: number;
  modArmour: number;
  modTurbo: boolean;
  modSmokeEnabled: boolean;
  modFrontWheels: number;
  modBackWheels: number;
  modCustomTiresF: boolean;
  modCustomTiresR: boolean;
  modPlateHolder: number;
  modVanityPlate: number;
  modTrimA: number;
  modOrnaments: number;
  modDashboard: number;
  modDial: number;
  modDoorSpeaker: number;
  modSeats: number;
  modSteeringWheel: number;
  modShifterLEavers: number;
  modAPlate: number;
  modSpeakers: number;
  modTrunk: number;
  modHydraulic: number;
  modEngineBlock: number;
  modAirFilter: number;
  modStruts: number;
  modArchCover: number;
  modAerials: number;
  modTrimB: number;
  modTank: number;
  modWindows: number;
  modLivery: number;
}

declare interface Notification {
  text: string;
  caption: string;
}