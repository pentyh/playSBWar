package com.rl.playsbwar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController extends BaseController {

    @RequestMapping("/api/**")
    @ResponseBody
    public Object api() {
        logger.info("api");
        return "api";
    }

//    @RequestMapping
//    public String index() {
//        logger.debug("index");
//        return "index";
//    }
}
