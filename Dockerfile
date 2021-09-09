FROM java:8-jre-alpine

MAINTAINER jinrilong1988@hotmail.com

ENV JAVA_OPTS null

WORKDIR /home/rl
#ADD /home/portal/website/app.war /home/portal/website/
COPY target/playSBWar-1.0.0.war /home/rl/webapp.war

EXPOSE 8081

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/home/rl/webapp.war"]
#ENTRYPOINT ["java","-jar","/app.war"]
#ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar website-1.0.0.jar" ]

#VOLUME /home/portal/website:/home/rl