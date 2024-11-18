function FindProxyForURL(url, host) {
    if (isPlainHostName(host) || dnsDomainIs(host, "ocp4.example.com")) {
        return "SOCKS5 127.0.0.1:8280";
    } else {
        return "DIRECT";
    }
}
