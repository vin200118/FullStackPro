import AgGridReactDemo from '../view/routes/home/AgGridReactDemo.jsx'
describe('<Add/> rendering',()=>{
	it('should render one <h1>',()=>{
		let wrapper=shallow(<AgGridReactDemo/>);
		expect(wrapper.state().name).toEqual('Make');
	});
});
