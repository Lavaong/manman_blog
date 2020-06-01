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
public class Meta implements Serializable {

    private static final long serialVersionUID=1L;

    @TableId(value = "meta_id", type = IdType.AUTO)
    private Long metaId;

    private String name;

    private String slug;

    private String type;

    private String description;

    private Long count;


}
