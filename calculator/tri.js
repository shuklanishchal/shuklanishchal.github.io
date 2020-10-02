class Triangle extends React.Component {
    componentDidMount() {
        document.getElementById('length').focus();
    }
    solution() {
        var length = document.getElementById('length').value;
        document.getElementById('length').value = '';
        var width = document.getElementById('width').value;
        document.getElementById('width').value = '';
        var height = document.getElementById('height').value;
        document.getElementById('height').value = '';
        var hyp = Math.sqrt((length * width) + (length * width));
        var areaofbase = (length * width) / 2;
        var surarea = ((hyp * height) + (length * height) + (width * height) + (areaofbase * 2)).toFixed(2);
        var volume = areaofbase * height;
        var solution = document.getElementById('solution');
        solution.innerHTML = '<p><b>Length</b>: ' + length + ' units</p><p><b>Width</b>: ' + width + ' units</p><p><b>Height</b>: ' + height + ' units</p><br/><p><b>Surface Area</b>: ' + surarea + ' units<sup>2</sup></p><p><b>Volume</b>: ' + volume + ' units<sup>3</sup></p>';
        document.getElementById('goto').scrollIntoView({behavior: 'smooth'});
    }
    clear() {
        document.getElementById('solution').innerHTML = '';
        document.getElementById('length').value = '';
        document.getElementById('length').focus();
        document.getElementById('width').value = '';
        document.getElementById('height').value = '';
        window.scrollTo(500,0);
    }
    handleKeyPress(e) {
        if(e.keyCode == '13') {
          var length = document.getElementById('length').value;
          document.getElementById('length').value = '';
          var width = document.getElementById('width').value;
          document.getElementById('width').value = '';
          var height = document.getElementById('height').value;
          document.getElementById('height').value = '';
          var hyp = Math.sqrt((length * width) + (length * width));
          var areaofbase = (length * width) / 2;
          var surarea = ((hyp * height) + (length * height) + (width * height) + (areaofbase * 2)).toFixed(2);
          var volume = areaofbase * height;
          var solution = document.getElementById('solution');
          solution.innerHTML = '<p><b>Length</b>: ' + length + ' units</p><p><b>Width</b>: ' + width + ' units</p><p><b>Height</b>: ' + height + ' units</p><br/><p><b>Surface Area</b>: ' + surarea + ' units<sup>2</sup></p><p><b>Volume</b>: ' + volume + ' units<sup>3</sup></p>';
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
            <div>
              <table align='center'>
                <tr>
                  <td Style='float: left'>
                    <p><b>Length</b>:</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><input onKeyPress={this.onChange} Style='border: 1px solid black; background-color: white; padding-top: 6.25px; padding-bottom: 6.25px; font-size: 16px;' type='number' pattern='[0-9]*' id='length' placeholder=" Ex. 1, 2, 3 (No Units)"/></p>
                  </td>
                </tr>
                <tr>
                  <td Style='float: left'>
                    <p><b>Width</b>:</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><input onKeyPress={this.onChange} Style='border: 1px solid black; background-color: white; padding-top: 6.25px; padding-bottom: 6.25px; font-size: 16px;' type='number' pattern='[0-9]*' id='width' placeholder=" Ex. 1, 2, 3 (No Units)" onKeyDown={this.handleKeyPress}/></p>
                  </td>
                </tr>
                <tr>
                  <td Style='float: left'>
                    <p><b>Height</b>:</p>
                  </td>
                </tr>
                <tr>
                  <td id='goto'>
                    <p><input onKeyPress={this.onChange} Style='border: 1px solid black; background-color: white; padding-top: 6.25px; padding-bottom: 6.25px; font-size: 16px;' type='number' pattern='[0-9]*' id='height' placeholder=" Ex. 1, 2, 3 (No Units)" onKeyDown={this.handleKeyPress}/></p>
                  </td>
                </tr><br/>
                <tr>
                  <td Style='float: right'>
                    <p><input Style='background-color: white; border: 2px solid black; padding-left: 15px; padding-right: 15px; padding-top: 6.25px; padding-bottom: 6.25px; background-color: white; color: black' type='button' value='Clear' onClick={this.clear} /> <input Style='background-color: white; border: 2px solid black; padding-left: 15px; padding-right: 15px; padding-top: 6.25px; padding-bottom: 6.25px; background-color: black; color: white' type='button' value='Calculate' onClick={this.solution} /></p>
                  </td>
                </tr><br/>
              </table>
              <table align='center'>
                <tr>
                  <td Style='text-align: center'>
                    <div id='solution'></div>
                  </td>
                </tr>
              </table>
            </div>
        );
    }
}
