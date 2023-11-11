import { useState } from "react";
import "../App.css"
import { Box } from "@mui/material";
import MainTxt from "./MainTxt";
import AddBtn from "./AddBtn";
import AllButtons from "./AllButtons";
import UL from "./UL";
import Input from "./Input";
import Navbar from "./Navbar"
const MainContainer = () => {
    const [inpValue, setInpValue] = useState("");
    const [todoData, setTodoData] = useState([]);
    const addTodoHandler = () => {
        if (inpValue) {
            setTodoData((prev) => [inpValue, ...prev]);
            setInpValue("");
        }
    };
    const deleteAllTodoHandler = () => {
        setTodoData([]);
    }
    return (
        <>
        <Navbar className="background-color"/>
            <Box className="mainContainer">
                <MainTxt textAlign={'center'} mt={10} mb={5} value="TODO LIST USING REACT" variant="h4" />
                <Box className="parentDiv">
                    <section  className="container">
                        <MainTxt mb={5} textAlign={'center'} value="TODO LIST" variant="h4" />
                        <Box display={"flex"} justifyContent={'center'}>
                            <Input
                                id="outlined-basic"
                                label="ENTER TODO"
                                variant="outlined"
                                onChange={(e) => setInpValue(e.target.value)}
                                value={inpValue}
                            /><br />
                        </Box>
                        <Box display={"flex"} justifyContent={'center'} gap={2}>
                            <AddBtn mt={4} className="btn-add" onClick={addTodoHandler} />
                            <AllButtons value={"Delete All"} mt={4} className="btn-del" onClick={deleteAllTodoHandler} />
                        </Box>
                        <UL todoData={todoData} setTodoData={setTodoData} />
                    </section>
                </Box>
            </Box>
        </>
    )
}

export default MainContainer