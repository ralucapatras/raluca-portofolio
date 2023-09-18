import "./Footer.css";

const date=new Date();
const year = date.getFullYear();

function Footer(){
    return(
        <>
        <div class="footer">
            <p>Copyright &copy; {year} RALUCA PATRAS</p>
        </div>
        </>
    )
}
export default Footer;