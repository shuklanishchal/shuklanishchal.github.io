ReactDOM.render(<h1>Calculators</h1>, document.getElementById('info'));
class Intro extends React.Component {
    render() {
        return <div><p><h3><b>What does this do?</b></h3></p><p>It looks obvious, but it does a lot more than just calculate. It calculates specific things, such as the surface area and volume of a cylinder and the area and circumference of a circle. This may help best in a geometry class, or maybe even an advanced trigonometry class.</p></div>;
    }
}
ReactDOM.render(<Intro />, document.getElementById('app'));
document.getElementById('app').style="background-color: #cdcdcd; border: 2px solid #e6e6e6";
