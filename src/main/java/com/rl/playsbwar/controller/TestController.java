package com.rl.playsbwar.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rl.playsbwar.entity.TestParams;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@Slf4j
@RestController
@RequestMapping("/api")
public class TestController {

    @RequestMapping("/test")
    public Object test(TestParams params,
                       @RequestParam(required = false, defaultValue = "~") String ps1,
                       @RequestParam(required = false) Integer pi1,
                       @RequestParam(required = false) Integer pIn1,
                       @RequestBody TestParams body) {


        TestParams testParams = new TestParams();

        ArrayList<Object> result = new ArrayList<>();
        result.add(ps1);
        result.add(pi1);
        result.add(pIn1);
        result.add(params);
//        result.add(testParams);
        result.add(body);

        try {
            String s = new ObjectMapper().writeValueAsString(body);
            log.info(s);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }


        return result;
    }
}
