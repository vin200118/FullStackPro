import React,{Component} from 'react'
import {render} from 'react-dom'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

class Home extends Component{
    render(){
        return(
                <div class="container">
               <Form>
                   <FormGroup>
                   <div class="row">
                       <div class="col-1"><Label for="email">Email</Label></div>
                       <div class="col-4"> <Input type="email" name="email" id="email" placeholder="please enter Email"/></div>
                    </div>
                   </FormGroup>
                   <FormGroup>
                    <div class="row">
                       <div class="col-1"><Label for="password">Password</Label></div>
                       <div class="col-4"><Input type="password" name="password" id="password" placeholder="please enter password"/></div>
                       </div>
                   </FormGroup>
                   <FormGroup>
                    <div class="row">
                       <div class="col-1"><Label for="Gender">Gender</Label></div>
                       <div class="col-4"><Input type="select" name="select" id="select">
                       <option>Male</option>
                       <option>Female</option>
                       </Input>
                       </div></div>
                   </FormGroup>
                    <Button>Submit</Button>
               </Form>
               </div>
                );
    }
}
export default Home;