class Circle extends React.Component {
    componentDidMount() {
        document.getElementById('radius').focus();
    }
    solution() {
        var radius = document.getElementById('radius').value;
        document.getElementById('radius').value = '';
        var circ = (Math.PI * radius * 2).toFixed(2);
        var area = (Math.PI * radius * radius).toFixed(2);
        var solution = document.getElementById('solution');
        solution.innerHTML = '<p><b>Radius</b>: ' + radius + ' units</p><br/><p><b>Circumference</b>: ' + circ + ' units</p><p><b>Area</b>: ' + area + ' units<sup>2</sup></p>';
        document.getElementById('goto').scrollIntoView({behavior: 'smooth'});
    }
    clear() {
        document.getElementById('solution').innerHTML = '';
        document.getElementById('radius').value = '';
        document.getElementById('radius').focus();
        window.scrollTo(500,0);
    }
    handleKeyPress(e) {
        if(e.keyCode == '13') {
        var radius = document.getElementById('radius').value;
        document.getElementById('radius').value = '';
        var circ = (Math.PI * radius * 2).toFixed(2);
        var area = (Math.PI * radius * radius).toFixed(2);
        var solution = document.getElementById('solution');
        solution.innerHTML = '<p><b>Radius</b>: ' + radius + ' units</p><br/><p><b>Circumference</b>: ' + circ + ' units</p><p><b>Area</b>: ' + area + ' units<sup>2</sup></p>';
        document.getElementById('goto').scrollIntoView({behavior: 'smooth'});
        document.getElementById('radius').focus();
        }
    }
    onChange(e){
        const re = /^\d*\.?\d*$/;
        if (!re.test(e.key)) {
           e.preventDefault();
        }
    }
    render() {
        return (
            <div>
            <table align='center'>
            <tr><td Style='float: left'><p><b>Radius</b>:</p></td></tr>
            <tr id='goto'><td><p><input onKeyPress={this.onChange} Style='border: 1px solid black; background-color: white; padding-top: 6.25px; padding-bottom: 6.25px; font-size: 16px;' type='number' pattern='[0-9]*' id='radius' placeholder=" Ex. 1, 2, 3 (No Units)" onKeyDown={this.handleKeyPress}/></p></td></tr><br/>
            <tr><td><p Style='float: right'><input Style='background-color: white; border: 2px solid black; padding-left: 15px; padding-right: 15px; padding-top: 6.25px; padding-bottom: 6.25px; background-color: white; color: black' type='button' value='Clear' onClick={this.clear} /> <input Style='background-color: white; border: 2px solid black; padding-left: 15px; padding-right: 15px; padding-top: 6.25px; padding-bottom: 6.25px; background-color: black; color: white' type='button' value='Calculate' onClick={this.solution} /></p></td></tr><br/>
            </table>
            <table align='center'>
            <tr><td Style='text-align: center'><div id='solution'></div></td></tr>
            </table>
            </div>
        );
    }
}