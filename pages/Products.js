import {Link, useNavigate} from 'react-router-dom'


const Products = () => {
    const navigate = useNavigate();
    // navigate(1) sonraki sayfa
    // navigate(-1) önceki sayfa -2 iki once
    // navigate('/welcome') oto navigate
    // navigate('/welcome', {replace: true}) redirect
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li>
                    <Link to='/products/p1'>A Book</Link>
                </li>
                <li>
                    <Link to='/products/p2'>A Carpet</Link>
                </li>
                <li>
                    <Link to='/products/p3'> An Online Course</Link>
                </li>
            </ul>
        </section>
    )
}

export default Products
