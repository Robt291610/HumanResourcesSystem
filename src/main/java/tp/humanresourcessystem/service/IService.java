package tp.humanresourcessystem.service;

import tp.humanresourcessystem.data.Employee;

import java.util.List;
import java.util.Optional;

public interface IService {
    List<Employee> getEmployees();
    Employee getEmployeeById(Integer id);
    Employee addEmployee(Employee employee);
    void deleteEmployee(Integer id);
}
