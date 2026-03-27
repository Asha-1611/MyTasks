package com.example.studentcrud1.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.studentcrud1.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}