# SSL Demo
This project is used to demonstrate a few things.
1. How to secure SpringBoot application with SSL
1. How to generate a `Self Signed Certificate`
1. How to add said certificate to Chrome so that `Cypress` can run tests on it.

## Getting Started
1. Start up the SSL secured api by executing `mvn spring-boot:run` in `api` folder
1. Check that you can access `https://localhost:8443` using Chrome (Warning will be presented)
1. Add `ssl-server.jks` Self Signed Certificate to chrome as Trusted Root Certificate. Chrome > settings > Manage Certificates > Trusted Root Certificate Authorities > import
1. Restart Chrome and Check `https://localhost:8443` again. The warning should be gone.
1. Go to `e2e` folder and execute `npm run open` and select `ssl-demo.spec.js` test.

## Learnings
1. `Java Keytools` and `OpenSSL` are different cli that can be used to generate SSL certificates
1. Self Signed Certificates can be added to Chrome's `Trusted Root Certificate` so that warnings do not occur
1. When generating Self Signed Certs, remember to include Subject Alternative Name (SAN) in order to to prevent `err_cert_common_name_invalid` error. `SAN` in our case would be `localhost`
1. Truststore is used for public certificates while Keystores is used for private ones (JKS stands for Java *KeyStore*)
1. A keystore can store multiple certificates. a `.jks` file is a keystore, not a certificate
1. While it's possible to redirect all `HTTP` requests to `HTTPS` programatically, it can also be done via Domain Provider like GoDaddy.

## Interesting reads
1. [How to secure SpringBoot application with SSL](https://howtodoinjava.com/spring-boot/spring-boot-ssl-https-example/) - `Java Keytool` is used to generate 
1. [Difference between Self-Signed Certificate and CA Signed SSL Certificate](https://cheapsslsecurity.com/blog/self-signed-ssl-versus-trusted-ca-signed-ssl-certificate/)
1. [Difference between Trusted Root and Intermediate CA](https://www.thesslstore.com/blog/root-certificates-intermediate/)

## Command used to generate keystore
```cmd
 -genkey -alias selfsigned_localhost_cert -keyalg RSA -keysize 2048 -validity 3650 -keypass changeit -keystore ssl-server.jks -ext san=dns:localhost
 ```