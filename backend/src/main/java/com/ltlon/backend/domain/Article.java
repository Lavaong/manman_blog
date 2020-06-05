package com.ltlon.backend.domain;

import java.time.LocalDateTime;
import java.io.Serializable;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
 * <p>
 * 
 * </p>
 *
 * @author ltlon
 * @since 2020-06-01
 */
@Data
@Entity
public class Article {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private Integer commentCounts;

    private LocalDateTime createDate;

    private String summary;

    private String title;

    private Integer viewCounts;

    private Integer weight;

    private Long bodyId;

    private Integer categoryId;


}
