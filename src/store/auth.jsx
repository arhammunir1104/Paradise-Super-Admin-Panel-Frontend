import { useContext, createContext, useEffect, useState, Children, } from "react";

export let AuthContext= createContext();
export let AuthProvider = ({children})=>{

    async function admin_verify(token){
        // console.log(token);
        let d = {
            token
        }
        try{
            let data = await fetch("http://localhost:3001/admin_verify", {
                method : "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body : JSON.stringify(d)
        });
        // console.log(data);
        let res = await data.json();
        // console.log(res);
        return(res)
        }
        catch(e){
            console.log("Admin Account Verification Error",e);
        }
    };

    function set_token(token){
            localStorage.setItem("token", token);
    };
    
    function get_token(){
       return( localStorage.getItem("token"));
    };

    async function logout(){
        try{
            let token = get_token();
            // console.log(token);
            let d ={
                token
            }
            // console.log(d);
            if(!token || token === null){
                return({msg: "You are not loggedin , please login First", logout: false});
            }
            else{        
                console.log(token);        
                let data = await fetch("http://localhost:3001/logout", {
                    method : "POST",
                    headers: {
                       "Content-Type": "application/json",
                    },
                    body : JSON.stringify(d)
                });
                let res = await data.json();
                localStorage.removeItem("token");
                return(res);
            }

        }
        catch(e){
            console.log("Logging out Error", e);
        }
    };

    
    async function dashboard_data(token){

        try{
            let data = await fetch("http://localhost:3001/dashboarddata", {
                method : "GET",
                headers: {
                   "Content-Type": "application/json",
                },
        });
        // console.log(data);
        let res = await data.json();
        // console.log(res);
        return(res)
        }
        catch(e){
            console.log("Admin Account Verification Error",e);
        }
    };
    

    async function getHotelData(){
        try{    
            let data = await fetch("http://localhost:3001/find/hotels", {
                method : "GET",
                headers: {
                   "Content-Type": "application/json",
                },
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Hotel Data Fetching Error",e);
        }
    };
    async function getRoomsData(){
        try{    
            let data = await fetch("http://localhost:3001/find/rooms", {
                method : "GET",
                headers: {
                   "Content-Type": "application/json",
                },
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Hotel Data Fetching Error",e);
        }
    };
    async function getUsersData(){
        try{    
            let data = await fetch("http://localhost:3001/find/users", {
                method : "GET",
                headers: {
                   "Content-Type": "application/json",
                },
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Hotel Data Fetching Error",e);
        }
    };

    async function updateHotelAccess(hotel_access, hotel_id){
        let d = {
            admin_access :hotel_access,
            hotel_id: hotel_id
        };
        try{    
            let data = await fetch("http://localhost:3001/hotel/change/", {
                method : "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body: JSON.stringify(d)
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Hotel Status Changin Error",e);
        }
    };
    async function updateRoomAccess(room_access, room_id){
        let d = {
            admin_access :room_access,
            room_id: room_id
        };
        try{    
            let data = await fetch("http://localhost:3001/room/change/", {
                method : "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body: JSON.stringify(d)
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Room Status Changin Error",e);
        }
    };
    async function updateUserAccess(user_access, user_id){
        let d = {
            admin_access :user_access,
            user_id: user_id
        };
        try{    
            let data = await fetch("http://localhost:3001/user/change/", {
                method : "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body: JSON.stringify(d)
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Room Status Changin Error",e);
        }
    };

    async function getHotelListingData(id){
        try{    
            let data = await fetch(`http://localhost:3001/f/hotel/${id}`, {
                method : "GET",
                headers: {
                   "Content-Type": "application/json",
                },
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Hotel Data Fetching Error",e);
        }
    };
    async function getRoomListingData(id){
        try{    
            let data = await fetch(`http://localhost:3001/f/room/${id}`, {
                method : "GET",
                headers: {
                   "Content-Type": "application/json",
                },
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Room Data Fetching Error",e);
        }
    };

    async function search(d){
        // console.log(d);
        try{    
            let data = await fetch("http://localhost:3001/search", {
                method : "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body: JSON.stringify(d)
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Room Status Changin Error",e);
        }
    };

    async function getReservationData(type){
        try{
            if(type === "pending"){
                let data = await fetch(`http://localhost:3001/pendingreservation`, {
                method : "GET",
                headers: {
                   "Content-Type": "application/json",
                },
            });
            // console.log(data);
            let res= await data.json();
            // console.log(res);
            return(res);
            }
            else if(type === "confirm"){

                let data = await fetch(`http://localhost:3001/confirmedreservation`, {
                method : "GET",
                headers: {
                   "Content-Type": "application/json",
                },
            });
            // console.log(data);
            let res= await data.json();
            // console.log(res);
            return(res);

            }
            else if(type === "close"){
                let data = await fetch(`http://localhost:3001/closereservation`, {
                method : "GET",
                headers: {
                   "Content-Type": "application/json",
                },
            });
            // console.log(data);
            let res= await data.json();
            // console.log(res);
            return(res);

            }
            else{
                let data = await fetch(`http://localhost:3001/cancelreservation`, {
                method : "GET",
                headers: {
                   "Content-Type": "application/json",
                },
            });
            // console.log(data);
            let res= await data.json();
            // console.log(res);
            return(res);
            }
        }
        catch(e){
            console.log("Reservation data finding error");
        }
    };

    async function searchReservation(d){
        // console.log(d);
        try{    
            let data = await fetch("http://localhost:3001/search/reservations", {
                method : "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body: JSON.stringify(d)
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Room Status Changin Error",e);
        }
    };

    async function confirmReservation(room_id, reservation_id){
        let d = {
            room_id :room_id,
            reservation_id: reservation_id
        };
        console.log(d);
        try{    
            let data = await fetch("http://localhost:3001/confirmreservation", {
                method : "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body: JSON.stringify(d)
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Room Status Changin Error",e);
        }
    };

    async function cancelReservation(room_id, reservation_id, current_status){
        let d = {
            room_id :room_id,
            reservation_id: reservation_id,
            current_status: current_status
        };
        console.log(d);
        try{    
            let data = await fetch("http://localhost:3001/cancelreservation", {
                method : "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body: JSON.stringify(d)
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Room Status Changin Error",e);
        }
    };

    
    async function closeReservation(room_id, reservation_id){
        let d = {
            room_id :room_id,
            reservation_id: reservation_id
        };
        console.log(d);
        try{    
            let data = await fetch("http://localhost:3001/closereservation", {
                method : "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body: JSON.stringify(d)
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Room Status Changin Error",e);
        }
    };
    async function addHotel(data){
        console.log(data);
        try{    
            let data = await fetch("http://localhost:3001/createhotel", {
                method : "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
        });
        // console.log(data);
        let res= await data.json();
        // console.log(res);
        return(res);
        }
        catch(e){
            console.log("Room Status Changin Error",e);
        }
    };

    return(
        <AuthContext.Provider value={{
            getHotelData,
            set_token,
            get_token,
            logout,
            admin_verify, 
            dashboard_data,
            updateHotelAccess, 
            getRoomsData,
            updateRoomAccess,
            getUsersData,
            updateUserAccess,
            getHotelListingData,
            getRoomListingData,
            search,
            getReservationData,
            searchReservation,
            confirmReservation,
            cancelReservation,
            closeReservation,
            addHotel
                
            
            }}>
            {children}
        </AuthContext.Provider>
    )
};

export let useAuth = function(){
    let authContextValue = useContext(AuthContext);

    if(!authContextValue){
        throw new Error("UseAuth used outside of the provider")
    }
    return(authContextValue);
}