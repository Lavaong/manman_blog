package com.ltlon.backend.domain;

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
public class Relationship implements Serializable {

    private static final long serialVersionUID=1L;

    private Long postId;

    private Long metaId;


}
