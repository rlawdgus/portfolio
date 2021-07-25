import "../stylesheets/Contact.scss";

const Contact = () => {
    return (
        <ul className="contact">
            <li>
                <h1>Contact</h1>
            </li>
            <li>
                <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="" />
            </li>
            <li>TEL : 010-7205-5570</li>
            <li>Mail : k557330@naver.com</li>
        </ul>
    );
};

export default Contact;
