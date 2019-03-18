class NavBar extends React.Component {
    cylinder() {
      if(window.innerWidth <= 766) {
        document.getElementById('button').click();
      }
      document.getElementById('nav').scrollIntoView({behavior: 'smooth'});
      document.getElementById('info').innerHTML = '<h1>Cylinder</h1>';
      document.getElementById('title').innerHTML = '<title>Cylinder</title>';
      document.getElementById('cyl').className = 'active';
      document.getElementById('cir').className = '';
      document.getElementById('pyt').className = '';
      document.getElementById('rec').className = '';
      document.getElementById('tri').className = '';
      ReactDOM.render(<Cylinder />, document.getElementById('app'));
      document.getElementById('app').style = '';
    }
    cyl1() {
      document.getElementById('cyl').style.cursor = 'pointer';
    }
    calculator() {
      document.getElementById('info').innerHTML = '<h1>Calculators</h1>';
      document.getElementById('title').innerHTML = '<title>Surface Area/Volume Calculators</title>';
      document.getElementById('pyt').className = '';
      document.getElementById('cir').className = '';
      document.getElementById('cyl').className = '';
      document.getElementById('rec').className = '';
      document.getElementById('tri').className = '';
      ReactDOM.render(<Intro />, document.getElementById('app'));
      document.getElementById('app').style="background-color: #cdcdcd; border: 2px solid #e6e6e6";
    }
    cal() {
      document.getElementById('calc').style.cursor = 'pointer';
    }
    circle() {
      if(window.innerWidth <= 766) {
        document.getElementById('button').click();
      }
      document.getElementById('info').innerHTML = '<h1>Circle</h1>';
      document.getElementById('title').innerHTML = '<title>Circle</title>';
      document.getElementById('cir').className = 'active';
      document.getElementById('cyl').className = '';
      document.getElementById('pyt').className = '';
      document.getElementById('rec').className = '';
      document.getElementById('tri').className = '';
      ReactDOM.render(<Circle />, document.getElementById('app'));
      document.getElementById('app').style = '';
    }
    cir1() {
      document.getElementById('cir').style.cursor = 'pointer';
    }
    pyt() {
      if(window.innerWidth <= 766) {
        document.getElementById('button').click();
      }
      document.getElementById('info').innerHTML = '<h1>Pythagorean Theorem</h1>';
      document.getElementById('title').innerHTML = '<title>Pythagorean</title>';
      document.getElementById('pyt').className = 'active';
      document.getElementById('cir').className = '';
      document.getElementById('cyl').className = '';
      document.getElementById('rec').className = '';
      document.getElementById('tri').className = '';
      ReactDOM.render(<Pythagoras />, document.getElementById('app'));
      document.getElementById('app').style = '';
    }
    pyt1() {
      document.getElementById('pyt').style.cursor = 'pointer';
    }
    rec() {
      if(window.innerWidth <= 766) {
        document.getElementById('button').click();
      }
      document.getElementById('info').innerHTML = '<h1>Rectangular Prism</h1>';
      document.getElementById('title').innerHTML = '<title>Rec. Prism</title>';
      document.getElementById('rec').className = 'active';
      document.getElementById('cir').className = '';
      document.getElementById('pyt').className = '';
      document.getElementById('cyl').className = '';
      document.getElementById('tri').className = '';
      ReactDOM.render(<Rectangle />, document.getElementById('app'));
      document.getElementById('app').style = '';
    }
    rec1() {
      document.getElementById('rec').style.cursor = 'pointer';
    }
    tri() {
      if(window.innerWidth <= 766) {
        document.getElementById('button').click();
      }
      document.getElementById('info').innerHTML = '<h1>Triangular Prism</h1>';
      document.getElementById('title').innerHTML = '<title>Tri. Prism</title>';
      document.getElementById('tri').className = 'active';
      document.getElementById('cir').className = '';
      document.getElementById('pyt').className = '';
      document.getElementById('rec').className = '';
      document.getElementById('cyl').className = '';
      ReactDOM.render(<Triangle />, document.getElementById('app'));
      document.getElementById('app').style = '';
    }
    tri1() {
      document.getElementById('tri').style.cursor = 'pointer';
    }
    render() {
        return (
          <div>
            <nav class="navbar navbar-inverse navbar-fixed-top" id='nav'>
  <div class="container-fluid">
  <div class="navbar-header">
	  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" id='button' data-target="#nav-collapse">
	   <span class="icon-bar"></span>
	   <span class="icon-bar"></span>
	   <span class="icon-bar"></span>
	   <span class="icon-bar"></span>
	  </button>
    <div class="navbar-header">
      <a id='calc' onMouseOver={this.cal} class="navbar-brand" onClick={this.calculator}>Home</a>
    </div>
    </div>
    <div class="collapse navbar-collapse" id="nav-collapse">
    <ul class="nav navbar-nav">
      <li id='cyl'><a onMouseOver={this.cyl1} onClick={this.cylinder}>Cylinder</a></li>
      <li id='cir'><a onMouseOver={this.cir1} onClick={this.circle}>Circle</a></li>
      <li id='pyt'><a onMouseOver={this.pyt1} onClick={this.pyt}>Pythagorean</a></li>
      <li id='rec'><a onMouseOver={this.rec1} onClick={this.rec}>Rec. Prism</a></li>
      <li id='tri'><a onMouseOver={this.tri1} onClick={this.tri}>Tri. Prism</a></li>
    </ul>
    </div>
  </div>
</nav><br/><br/>
</div>
        )
    }
}
ReactDOM.render(<NavBar />, document.getElementById('nav'));
