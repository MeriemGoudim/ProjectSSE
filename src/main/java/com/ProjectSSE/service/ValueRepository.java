package com.ProjectSSE.service;


import com.ProjectSSE.model.Value;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface ValueRepository extends CrudRepository<Value, Long> {
  @Override
  List<Value> findAll();
}
