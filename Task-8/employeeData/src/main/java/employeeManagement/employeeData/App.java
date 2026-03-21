package employeeManagement.employeeData;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import employeeManagement.AppConfig;

public class App {
	public static void main(String[] args)
	{
		BeanFactory factory= new AnnotationConfigApplicationContext(AppConfig.class);
		EmployeeService service=factory.getBean(EmployeeService.class);
		service.createEmployee(101,"raja","cse");
		service.fetehAllEmployees()args.forEach(System.out::println);
	}
}
