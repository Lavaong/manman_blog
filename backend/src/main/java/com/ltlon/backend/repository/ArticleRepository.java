package com.ltlon.backend.repository;

import com.ltlon.backend.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

/**
 * @program: manman_blog
 * @description:
 * @author: LTL
 * @create: 2020-06-01 17:47
 **/
public interface ArticleRepository extends JpaRepository<Article,Integer> {
}
