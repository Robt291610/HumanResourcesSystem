package tp.humanresourcessystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tp.humanresourcessystem.data.Employee;

@Repository
public interface IRepository extends JpaRepository<Employee, Integer> {

}
