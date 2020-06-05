package com.ltlon.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: manman_blog
 * @description: 文章行为：编辑，提交，删除，更改
 * @author: LTL
 * @create: 2020-06-02 15:43
 **/
@RestController
@RequestMapping("/api/post")
public class PostController {

    @GetMapping("hello")
    public String hello(){
        return "hello,Vue!";
    }
}
