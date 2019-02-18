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
            <div Style='text-align: center'>
            <p Style='margin-right: 130px;'><b>Radius</b>:</p>
            <p id='goto'><input onKeyPress={this.onChange} Style='border: 1px solid black; background-color: white; padding-top: 6.25px; padding-bottom: 6.25px; font-size: 16px;' type='number' pattern='[0-9]*' id='radius' placeholder=" Ex. 1, 2, 3 (No Units)" onKeyDown={this.handleKeyPress}/></p><br/>
            <p Style='margin-left: 32px'><input Style='background-color: white; border: 2px solid black; padding-left: 15px; padding-right: 15px; padding-top: 6.25px; padding-bottom: 6.25px; background-color: white; color: black' type='button' value='Clear' onClick={this.clear} /> <input Style='background-color: white; border: 2px solid black; padding-left: 15px; padding-right: 15px; padding-top: 6.25px; padding-bottom: 6.25px; background-color: black; color: white' type='button' value='Submit' onClick={this.solution} /></p><br/>
            <div id='solution'></div>
            </div>
        );
    }
}