export const CHANGEAVTIVE = 'CHANGEAVTIVE'
export  const FETCHDATA = 'FETCHDATA'
export const ADD_DATA = 'ADD_DATA'
export const FILTERDATA = 'FILTERDATA'
export const changeactive_function=(id)=>{
    return (dispatch)=>{
        dispatch({type:CHANGEAVTIVE,payload:id})
    }
}
export const add_data_function= (data)=>{
    return (dispatch)=>{
        dispatch({type:ADD_DATA,payload:data})
    }
}
export const add_filter=(filter_type='')=>{
    return (dispatch)=>{
        dispatch({type:FILTERDATA,payload:filter_type})
    }
}