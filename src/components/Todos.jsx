import { useSelector } from 'react-redux'

const Todos = () => {

    const todos = useSelector(state => state.todos);
    // console.log(todos);

    return (
        <>
            <div className='flex flex-col justify-start items-start rounded-[7px] px-2 py-1 text-gray-300 h-fit w-96 bg-gray-800'>
                {todos.map((todo) => (
                    <div className='py-1' key={todo.id} >
                        {todo.text}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Todos