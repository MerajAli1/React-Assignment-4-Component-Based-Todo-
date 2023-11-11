import AllButtons from './AllButtons'
import { Box } from '@mui/material'
import MainTxt from './MainTxt'
const UL = ({ todoData, setTodoData }) => {
    const editTodoHandler = (i) => {
        let updatedValue = prompt("Enter Updated Value");
        todoData[i] = updatedValue;
        setTodoData([...todoData]);
    };
    const deleteTodoHandler = (index) => {
        console.log(index);
        let data = todoData.filter((e, i) => i !== index);
        setTodoData(data);
    };
    return (
        <ul>
            {todoData.length
                ? todoData.map((e, i) => (
                    <li key={i}>
                        {e}
                        <Box gap={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <AllButtons value={'Edit'} className="editBtn" onClick={() => editTodoHandler(i)} />
                            <AllButtons value={"Delete"} className="delBtn" onClick={() => deleteTodoHandler(i)} />
                        </Box>
                    </li>
                ))
                : <MainTxt textAlign={'center'} fontWeight="bold" value={"All caught up"} />}
        </ul>
    )
}

export default UL