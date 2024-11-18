function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.example.com") || shExpMatch(host, "172.25.250.50")) {
        return "SOCKS5 127.0.0.1:1080";
    } else {
        return "DIRECT";
    }
}
