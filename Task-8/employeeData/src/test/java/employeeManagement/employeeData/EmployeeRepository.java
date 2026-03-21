package employeeManagement.employeeData;

import java.util.ArrayList;
import java.util.List;
public class EmployeeRepository {
	private List<Employee> employeelist=new ArrayList<>();
	public void addEmployee(Employee employee) {
		employeelist.add(employee);
		
	}
	
}
