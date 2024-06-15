import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import loader from "../essentials/loader.gif";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Header } from '../Components/Header';
import { toast } from 'react-toastify';

let b1 = {
    border : "5px solid red"
}

let b2 = {
    border : "5px solid blue"
}

let b3 = {
    border : "5px solid green"
}

let b4 = {
    border : "5px solid purple"
}
const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'transparent',
    borderRadius : "10px",
    p: 4,
  };


function AddHotel() {
    let [userInput, setUserInput] = useState({
        hotel_name : "",
        hotel_contact_no: "",
        hotel_email: "",
        hotel_password : "",
        hotel_city: "",
        hotel_add: "",
        hotel_des :""

    });
    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    let navigate = useNavigate();

    function handleInput(e){
        let name = e.target.name;
        let value = e.target.value;
        setUserInput({
            ...userInput,
            [name] : value
        })
    }

    async function handleSubmit(e){
        try{
            e.preventDefault();
            handleOpen3();
            console.log(userInput);
            const formData = new FormData();
            formData.append("hotel_name", userInput.hotel_name);
            formData.append("hotel_contact_no", userInput.hotel_contact_no);
            formData.append("hotel_email", userInput.hotel_email);
            formData.append("hotel_password", userInput.hotel_password);
            formData.append("hotel_city", userInput.hotel_city);
            formData.append("hotel_add", userInput.hotel_add);
            formData.append("hotel_des", userInput.hotel_des);
            formData.append("hotel_logo", e.target.hotel_logo.files[0]);

            let data = await fetch("https://paradise-super-admin-panel-backend.vercel.app/createhotel", {
                method: "POST",
                body: formData,
              })
              const res = await data.json();
              console.log("Success:", res);
              if(res.status === true || res.status){
                handleClose3();
                // alert(res.msg);
                toast.success(res.msg, {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                navigate("/find/hotels");
              }
              else{
                handleClose3();
                // alert(res.msg);
                toast.error(res.msg, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                navigate("/add/hotel");
              }
        }
        catch(e){
            console.log("Error, while adding hotel data",e);
        }
    }
  return (
        <>
        <Header />
            <div>
                <div className='min-h-[90vh] md:px-[20%] px-[10%] py-[5%]'>
                    <div className='p-[10px] shadow-black shadow-md'>
                        <form onSubmit={handleSubmit}>
                        {/* style={{border: "2px solid gray"}} */}
                            <div>
                                <div className=''>
                                    <p className='text-blue-500 md:text-[2rem] text-[2rem] font-bold text-center'>Add New Hotel</p>
                                </div>
                                <div className='my-[15px]'>
                                    <label htmlFor="hotel_logo"> Upload Hotel Logo:
                                        <input type="file" name="hotel_log" id='hotel_logo' className='md:h-[50px] h-[40px]  px-[10px] outline-none text-custom_black w-[100%]' onChange={handleInput} value={userInput.hotel_logo} autoComplete='off' required />
                                     </label>
                                </div>
                                <div className='my-[15px]'>
                                    <label htmlFor="hotel_name">Enter Hotel Name:
                                        <input type="text" name="hotel_name" id='hotel_name' placeholder='Hotel Name' className='md:h-[50px] h-[40px]  px-[10px] outline-none text-custom_black w-[100%]'  onChange={handleInput} value={userInput.hotel_name}  autoComplete='off' style={{border: "2px solid gray"}} required />
                                     </label>
                                </div>
                                <div className='my-[15px]'>
                                    <label htmlFor="hotel_contact_no">Enter Hotel Contact No:
                                        <input type="number" name="hotel_contact_no" id='hotel_contact_no' placeholder='Hotel Contact No' className='md:h-[50px] h-[40px]  px-[10px] outline-none text-custom_black w-[100%]'  onChange={handleInput} value={userInput.hotel_contact_no}  autoComplete='off' style={{border: "2px solid gray"}} required />
                                     </label>
                                </div>
                                <div className='my-[15px]'>
                                    <label htmlFor="hotel_email">Enter Hotel Email:
                                        <input type="email" name="hotel_email" id='hotel_email' placeholder='Hotel Account Email' className='md:h-[50px] h-[40px]  px-[10px] outline-none text-custom_black w-[100%]'  onChange={handleInput} value={userInput.hotel_email}  autoComplete='off' style={{border: "2px solid gray"}} required />
                                     </label>
                                </div>
                                <div className='my-[15px]'>
                                    <label htmlFor="hotel_password">Enter Hotel Password:
                                        <input type="text" name="hotel_password" id='hotel_password' placeholder='Hotel Account Password' className='md:h-[50px] h-[40px]  px-[10px] outline-none text-custom_black w-[100%]'  onChange={handleInput} value={userInput.hotel_password}  autoComplete='off' style={{border: "2px solid gray"}} required />
                                     </label>
                                </div>
                                <div className='my-[15px]'>
                                    <label htmlFor="hotel_city">Enter Hotel City:
                                        <input type="text" name="hotel_city" id='hotel_city' placeholder='Hotel Name' className='md:h-[50px] h-[40px]  px-[10px] outline-none text-custom_black w-[100%]'  onChange={handleInput} value={userInput.hotel_city}  autoComplete='off' style={{border: "2px solid gray"}} required />
                                     </label>
                                </div>
                                <div className='my-[15px]'>
                                    <label htmlFor="hotel_add">Enter Hotel Address:
                                        <input type="text" name="hotel_add" id='hotel_add' placeholder='Hotel Address' className='md:h-[50px] h-[40px]  px-[10px] outline-none text-custom_black w-[100%]'  onChange={handleInput} value={userInput.hotel_add}  autoComplete='off' style={{border: "2px solid gray"}} required />
                                     </label>
                                </div>
                                <div className='my-[15px]'>
                                    <label htmlFor="hotel_des">Enter Hotel Description:
                                        <input type="text" name="hotel_des" id='hotel_des' placeholder='Hotel Description' className='md:h-[150px] h-[100px]  px-[10px] outline-none text-custom_black w-[100%]' onChange={handleInput} value={userInput.hotel_des} autoComplete='off' style={{border: "2px solid gray"}} required />
                                     </label>
                                </div>

                                <div>
                                    <Stack spacing={2} direction="row">
                                        <Button variant="contained" type="submit" className="text-blue-500 w-[100%] my-[2%] bg-blue-500" style={{margin: "4%", backgroundColor : "#3B82F6"}} ><AddIcon style={{marginRight: "5px"}} /> Add New Hotel</Button>
                                    </Stack>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                        <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style2}>
                <img src={loader} alt="" />
                </Box>
            </Modal>
            </div>
        </>
  )
}

export {AddHotel}