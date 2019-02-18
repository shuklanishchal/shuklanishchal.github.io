class Pythagoras extends React.Component {
    componentDidMount() {
        document.getElementById('leg1').focus();
    }
    solution() {
        var leg1 = document.getElementById('leg1').value;
        document.getElementById('leg1').value = '';
        var leg2 = document.getElementById('leg2').value;
        document.getElementById('leg2').value = '';
        var hyp = Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2));
        var solution = document.getElementById('solution');
        solution.innerHTML = '<p><b>Leg 1</b>: ' + leg1 + ' units</p><p><b>Leg 2</b>: ' + leg2 + ' units</p><br/><p><b>Hypotenuse</b>: ' + hyp + ' units</p>';
        document.getElementById('leg1').focus();
        document.getElementById('goto').scrollIntoView({behavior: 'smooth'});
    }
    clear() {
        document.getElementById('solution').innerHTML = '';
        document.getElementById('leg1').value = '';
        document.getElementById('leg1').focus();
        document.getElementById('leg2').value = '';
        window.scrollTo(500,0);
    }
    handleKeyPress(e) {
        if(e.keyCode == '13') {
            var leg1 = document.getElementById('leg1').value;
            document.getElementById('leg1').value = '';
            var leg2 = document.getElementById('leg2').value;
            document.getElementById('leg2').value = '';
            var hyp = (Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2))).toFixed(2);
            var solution = document.getElementById('solution');
            solution.innerHTML = '<p><b>Leg 1</b>: ' + leg1 + ' units</p><p><b>Leg 2</b>: ' + leg2 + ' units</p><br/><p><b>Hypotenuse</b>: ' + hyp + ' units</p>';
            document.getElementById('leg1').focus();
            document.getElementById('goto').scrollIntoView({behavior: 'smooth'});
        }
    }
    onChange(e){
        const re = /^(0|[1-9]\d*)$/;
        if (!re.test(e.key)) {
           e.preventDefault();
        }
    }
    render() {
        return (
            <div Style='text-align: center'>
            <p Style='margin-right: 140px;'><b>Leg 1</b>:</p>
            <p><input onKeyPress={this.onChange} Style='border: 1px solid black; background-color: white; padding-top: 6.25px; padding-bottom: 6.25px; font-size: 16px;' type='number' pattern='[0-9]*' id='leg1' placeholder=" Ex. 1, 2, 3 (No Units)"/></p>
            <p Style='margin-right: 140px'><b>Leg 2</b>:</p>
            <p id='goto'><input onKeyPress={this.onChange} Style='border: 1px solid black; background-color: white; padding-top: 6.25px; padding-bottom: 6.25px; font-size: 16px;' type='number' pattern='[0-9]*' id='leg2' placeholder=" Ex. 1, 2, 3 (No Units)" onKeyDown={this.handleKeyPress}/></p><br/>
            <p Style='margin-left: 32px'><input Style='background-color: white; border: 2px solid black; padding-left: 15px; padding-right: 15px; padding-top: 6.25px; padding-bottom: 6.25px; background-color: white; color: black' type='button' value='Clear' onClick={this.clear} /> <input Style='background-color: white; border: 2px solid black; padding-left: 15px; padding-right: 15px; padding-top: 6.25px; padding-bottom: 6.25px; background-color: black; color: white' type='button' value='Submit' onClick={this.solution} /></p><br/>
            <div id='solution'></div>
            </div>
        );
    }
}