package com.rl.playsbwar.component;

import org.springframework.boot.autoconfigure.web.servlet.error.ErrorViewResolver;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Component
public class NotFoundErrorViewResolver implements ErrorViewResolver {
    @Override
    public ModelAndView resolveErrorView(HttpServletRequest request, HttpStatus status, Map<String, Object> model) {

        if (status == HttpStatus.NOT_FOUND) {
//            return new ModelAndView("", model, HttpStatus.OK);
//            return new ModelAndView("/", model, HttpStatus.OK);
            return new ModelAndView("forward:index.html", model, HttpStatus.OK);
        }

        return new ModelAndView("error", model);
    }
}
