package com.ProjectSSE.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="value")
public class Value implements Serializable{
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name="value",nullable = false)
  private String value;

  @Column(name="version")
  @Version
  private Long version;

  public Value() {
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public Long getVersion() {
    return version;
  }

  public void setVersion(Long version) {
    this.version = version;
  }
}
