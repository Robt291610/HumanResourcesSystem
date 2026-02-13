package tp.humanresourcessystem.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tp.humanresourcessystem.data.Employee;
import tp.humanresourcessystem.repository.IRepository;

import java.util.List;

@Service
@Transactional
public class ServiceEmployee implements IService {

    @Autowired
    IRepository repository;

    @Override
    public List<Employee> getEmployees() {
        return repository.findAll();
    }

    @Override
    public Employee getEmployeeById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    @Override
    public void deleteEmployee(Integer id) {
        repository.deleteById(id);
    }
}
