import React, { Component } from 'react';
import './CSS/calorie.css'

class caloriecalc extends Component {

  constructor(props) {
     super(props);
     this.state = { name: 'Guest', weight: 90, height: 180, age:18,bmr:'x', message: '',optimalweight: '', time: new Date().toLocaleTimeString() };
     this.submitMe = this.submitMe.bind(this);
     this.heightchange = this.heightchange.bind(this);
     this.weightchange = this.weightchange.bind(this);
     this.genderchange = this.genderchange.bind(this);
     this.activitychange = this.activitychange.bind(this);
     this.agechange = this.agechange.bind(this);
     this.change = this.change.bind(this);  
     this.ticker = this.ticker.bind(this); 
     this.blur = this.blur.bind(this); 
     this.calculate = this.calculate.bind(this); 
  }


  heightchange(e){
    this.setState({height: e.target.value});
    e.preventDefault();
  }

   genderchange(e){
    this.setState({gender: e.target.value});
    e.preventDefault();
  }

  activitychange(e){
    this.setState({activity: e.target.value});
    e.preventDefault();
  }

  agechange(e){
    this.setState({age: e.target.value});
    e.preventDefault();
  }
 
   weightchange(e){
    this.setState({weight: e.target.value});
    e.preventDefault();
  }

  blur(e){
    this.calculate();
   }
   
  calculate() {
      
    function find(id) { return document.getElementById(id) }
    var bmr;var cal=0;
    var message = "";
    if (find("male").checked) 
      bmr = 88.362 + (13.397 * this.state.weight ) + (4.799 * this.state.height) - (5.677 * this.state.age)
    else if (find("female").checked)
      bmr = 447.593 + (9.247 * this.state.weight) + (3.098 * this.state.height) - (4.330 * this.state.age)
    if (find("Sedentary").checked) 
        cal = 1.2*bmr;
    else if(find("Light Activity").checked) 
        cal = 1.375*bmr; 
    else if (find("Moderate Activity").checked)
        cal = 1.55*bmr;
    else
        cal = 1.725*bmr;
    
    this.setState({optimalweight: "To maintain your current weight you'll need " +cal+" calories per day"});    
    
    this.setState({message: message});  
    this.setState({bmr: Math.round(bmr * 100) / 100});

   
      
    
  }

  submitMe(e) {
     e.preventDefault();
     this.calculate();
  }

  ticker() {
    this.setState({time: new Date().toLocaleTimeString()})
  }
 
  componentDidMount(){
    setInterval(this.ticker, 60000);
  }

  change(e){
    e.preventDefault();
    console.log(e.target);
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
            <br/>
            <br/>
            <br/>
          <h2> Calorie Calculator</h2>
        </div>
          <form onSubmit={this.submitMe}>
            <label>
              Please enter your name
            </label>
            <input type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change}   />

            <label>  Male<input id="male" type="radio" name="gender" value={this.state.gender} onBlur={this.blur} onChange={this.genderchange}/>
            Female<input id="female"  type="radio" name="gender" value={this.state.gender}  onBlur={this.blur} onChange={this.genderchange} /> 
            </label>
            <br/>
             <label>
             Enter your height in cm: 
            </label>
            <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange}   />
             <label>
             Enter your weight in kg : 
            </label>
            <input type="text" name="weight" value={this.state.weight} onBlur={this.blur}  onChange={this.weightchange}    />
            <label>
              Enter your Age:
            </label>
            <input type="number" name="age" value={this.state.age} onBlur={this.blur} onChange={this.agechange}   />
            <label>
              Activity:
            </label>
            <br/>
            <select id="activity"  name="activity">
                <option id="Sedentary" name="activity" value={this.state.activity} onBlur={this.blur} onChange={this.activitychange}>Sedentary</option>
                <option id="Light Activity"  name="activity" value={this.state.activity} onBlur={this.blur} onChange={this.activitychange}>Light Activity</option>
                <option id="Moderate Activity" name="activity" value={this.state.activity} onBlur={this.blur} onChange={this.activitychange}>Moderate Activity</option>
                <option id="Highly Activity" name="activity" value={this.state.activity} onBlur={this.blur} onChange={this.activitychange}>Highly Active</option></select>
            <label>{this.state.checked} Hello {this.state.name}, How are you my friend?
             It's currently  {this.state.time} where you are living. Your BMR is  {this.state.bmr}.</label>
              <label>{this.state.message}</label>
              <label>{this.state.optimalweight}</label>
             
            <input type="submit" value="Submit"/>
          </form>
      
      </div>
    );
  }
}

export default caloriecalc;