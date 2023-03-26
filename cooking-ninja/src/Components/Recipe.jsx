import { useParams } from 'react-router-dom'


export default function Recipe() {
    const { id } = useParams();
    return <div>List Single Recipe: {id}</div>
}