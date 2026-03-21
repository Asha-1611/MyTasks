package employeeManagement.employeeData;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
@Component
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeerespository;
	public void createemployee(int id, String name, String dept) {
		Employee emp=new Employee(id,name,dept);
		employeerespository.addEmployee(emp);
	}
	public List<Employee> fetchAllEmployee(){
		return employeerespository.fectAllEmployee();
		
	}
}
