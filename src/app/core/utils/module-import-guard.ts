export function throwIfALreadyLoaded(parentModule:any, moduleName:string){
    if(parentModule){
        throw new Error(
            `${moduleName} has already been loaded. Import CoreModule in the AppModule only.`
        );
    }
}