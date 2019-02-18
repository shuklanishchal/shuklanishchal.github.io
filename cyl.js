class Cylinder extends React.Component {
    componentDidMount() {
        document.getElementById('radius').focus();
    }
    solution() {
        var radius = document.getElementById('radius').value;
        document.getElementById('radius').value = '';
        var height = document.getElementById('height').value;
        document.getElementById('height').value = '';
        var baseArea = (Math.PI * radius * radius);
        var baseCirc = (Math.PI * radius * 2);
        var surarea = ((baseCirc * height) + (baseArea * 2)).toFixed(2);
        var volume = (baseArea * height).toFixed(2);
        var solution = document.getElementById('solution');
        solution.innerHTML = '<p><b>Radius</b>: ' + radius + ' units</p><p><b>Height</b>: ' + height + ' units</p><br/><p><b>Surface Area</b>: ' + surarea + ' units<sup>2</sup></p><p><b>Volume</b>: ' + volume + ' units<sup>3</sup></p>';
        document.getElementById('goto').scrollIntoView({behavior: 'smooth'});
    }
    clear() {
        document.getElementById('solution').innerHTML = '';
        document.getElementById('radius').value = '';
        document.getElementById('radius').focus();
        document.getElementById('height').value = '';
        window.scrollTo(500,0);
    }
    handleKeyPress(e) {
        if(e.keyCode == '13') {
            var radius = document.getElementById('radius').value;
            document.getElementById('radius').value = '';
            var height = document.getElementById('height').value;
            document.getElementById('height').value = '';
        var baseArea = (Math.PI * radius * radius);
        var baseCirc = (Math.PI * radius * 2);
        var surarea = ((baseCirc * height) + (baseArea * 2)).toFixed(2);
        var volume = (baseArea * height).toFixed(2);
        var solution = document.getElementById('solution');
        solution.innerHTML = '<p><b>Radius</b>: ' + radius + ' units</p><p><b>Height</b>: ' + height + ' units</p><br/><p><b>Surface Area</b>: ' + surarea + ' units<sup>2</sup></p><p><b>Volume</b>: ' + volume + ' units<sup>3</sup></p>';
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
            <p Style='margin-right: 75px;'><b>Radius of Base</b>:</p>
            <p><input onKeyPress={this.onChange} Style='border: 1px solid black; background-color: white; padding-top: 6.25px; padding-bottom: 6.25px; font-size: 16px;' type='number' pattern='[0-9]*' id='radius' placeholder=" Ex. 1, 2, 3 (No Units)"/></p>
            <p Style='margin-right: 55px'><b>Height of Cylinder</b>:</p>
            <p id='goto'><input onKeyPress={this.onChange} Style='border: 1px solid black; background-color: white; padding-top: 6.25px; padding-bottom: 6.25px; font-size: 16px;' type='number' pattern='[0-9]*' id='height' placeholder=" Ex. 1, 2, 3 (No Units)" onKeyDown={this.handleKeyPress}/></p><br/>
            <p Style='margin-left: 32px'><input Style='background-color: white; border: 2px solid black; padding-left: 15px; padding-right: 15px; padding-top: 6.25px; padding-bottom: 6.25px; background-color: white; color: black' type='button' value='Clear' onClick={this.clear} /> <input Style='background-color: white; border: 2px solid black; padding-left: 15px; padding-right: 15px; padding-top: 6.25px; padding-bottom: 6.25px; background-color: black; color: white' type='button' value='Submit' onClick={this.solution} /></p><br/>
            <div id='solution'></div>
            </div>
        );
    }
}