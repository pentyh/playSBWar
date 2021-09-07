package com.rl.playsbwar.entity;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class TestParams {

    private String ps1 = "1";
    private String ps2 = "2";
    private String ps3;

    private int pi1 = 10;
    private int pi2;

    @JsonProperty(value = "jrl", access = JsonProperty.Access.READ_ONLY)
    @JsonAlias({"bbb","aaa"})
    private Integer pIn1 = 20;
    private Integer pIn2;

}
