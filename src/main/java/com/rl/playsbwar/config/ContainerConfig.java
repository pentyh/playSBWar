package com.rl.playsbwar.config;

import org.apache.catalina.valves.rewrite.RewriteValve;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ContainerConfig {

    @Bean
    public TomcatServletWebServerFactory container() {
        TomcatServletWebServerFactory tomcatServletWebServerFactory = new TomcatServletWebServerFactory();
//        tomcatServletWebServerFactory.setPort(8081);
        tomcatServletWebServerFactory.addContextValves(new RewriteValve());
        return tomcatServletWebServerFactory;
    }
}
