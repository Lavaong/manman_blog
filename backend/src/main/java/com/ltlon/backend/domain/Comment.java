package com.ltlon.backend.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author ltlon
 * @since 2020-06-01
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Comment implements Serializable {

    private static final long serialVersionUID=1L;

    @TableId(value = "comment_id", type = IdType.AUTO)
    private Long commentId;

    private Long postId;

    private String status;

    private String author;

    private String mail;

    private String url;

    private String content;

    private String ip;

    private String useragent;

    private Integer created;


}
