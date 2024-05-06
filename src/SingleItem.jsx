const SingleItem = ({ item, removeItem, editItem }) => {
    return (
        <article className="single-item">
            <input type="checkbox" checked={item.completed} onChange={() => editItem(item.id)}/>
            <p style={{textTransform:'capitalize', textDecoration: item.completed && 'line-through'}}>{item.name}</p>
            <button onClick={() => removeItem(item.id)} className='btn remove-btn'>Delete</button>
        </article>
    );
}
export default SingleItem;