package tp.humanresourcessystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tp.humanresourcessystem.data.Employee;
import tp.humanresourcessystem.service.ServiceEmployee;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*")
public class IndexController {

    @Autowired
    private ServiceEmployee serviceEmployee;

    @GetMapping
    public ResponseEntity<List<Employee>> getEmployees() {
        return ResponseEntity.ok(serviceEmployee.getEmployees());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
        Employee employee = serviceEmployee.getEmployeeById(id);
        if (employee == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(employee);
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        employee.setId(null);
        Employee created = serviceEmployee.addEmployee(employee);
        URI location = URI.create("/api/employees/" + created.getId());
        return ResponseEntity.created(location).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employee) {
        Employee exixt = serviceEmployee.getEmployeeById(id);
        if (exixt == null) {
            return ResponseEntity.notFound().build();
        }
        exixt.setId(id);
        Employee updated = serviceEmployee.addEmployee(employee);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable int id) {
        Employee exixt = serviceEmployee.getEmployeeById(id);
        if (exixt == null) {
            return ResponseEntity.notFound().build();
        }
        serviceEmployee.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }



}
