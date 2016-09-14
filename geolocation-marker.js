(function() {
    'use strict';
    var b, d = this;

    function g(a, c, e) {
        google.maps.MVCObject.call(this);
        this.a = this.b = null;
        this.g = -1;
        var f = {
            clickable: !1,
            cursor: "pointer",
            draggable: !1,
            flat: !0,
            icon: {
                url: "naruto.gif",
                size: new google.maps.Size(1000, 1000),
                scaledSize: new google.maps.Size(50, 50),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(12, 12)
            },
            optimized: !1,
            position: new google.maps.LatLng(0, 0),
            title: "Current location",
            zIndex: 2
        };
        c && (f = h(f, c));
        c = {
            clickable: !1,
            radius: 0,
            strokeColor: "1bb6ff",
            strokeOpacity: .4,
            fillColor: "61a0bf",
            fillOpacity: .4,
            strokeWeight: 1,
            zIndex: 1
        };
        e && (c = h(c, e));
        this.b = new google.maps.Marker(f);
        this.a = new google.maps.Circle(c);
        google.maps.MVCObject.prototype.set.call(this, "accuracy", null);
        google.maps.MVCObject.prototype.set.call(this, "position", null);
        google.maps.MVCObject.prototype.set.call(this, "map", null);
        this.set("minimum_accuracy", null);
        this.set("position_options", {
            enableHighAccuracy: !0,
            maximumAge: 1E3
        });
        this.a.bindTo("map", this.b);
        a && this.f(a)
    }
    (function() {
        var a = google.maps.MVCObject;

        function c() {}
        c.prototype = a.prototype;
        g.prototype = new c;
        g.prototype.constructor = g;
        for (var e in a)
            if (d.Object.defineProperties) {
                var f = d.Object.getOwnPropertyDescriptor(a, e);
                void 0 !== f && d.Object.defineProperty(g, e, f)
            } else g[e] = a[e]
    })();
    b = g.prototype;
    b.set = function(a, c) {
        if (k.test(a)) throw "'" + a + "' is a read-only property.";
        "map" === a ? this.f(c) : google.maps.MVCObject.prototype.set.call(this, a, c)
    };
    b.i = function() {
        return this.get("map")
    };
    b.l = function() {
        return this.get("position_options")
    };
    b.w = function(a) {
        this.set("position_options", a)
    };
    b.c = function() {
        return this.get("position")
    };
    b.m = function() {
        return this.get("position") ? this.a.getBounds() : null
    };
    b.j = function() {
        return this.get("accuracy")
    };
    b.h = function() {
        return this.get("minimum_accuracy")
    };
    b.v = function(a) {
        this.set("minimum_accuracy", a)
    };
    b.f = function(a) {
        google.maps.MVCObject.prototype.set.call(this, "map", a);
        a ? navigator.geolocation && (this.g = navigator.geolocation.watchPosition(this.A.bind(this), this.o.bind(this), this.l())) : (this.b.unbind("position"), this.a.unbind("center"), this.a.unbind("radius"), google.maps.MVCObject.prototype.set.call(this, "accuracy", null), google.maps.MVCObject.prototype.set.call(this, "position", null), navigator.geolocation.clearWatch(this.g), this.g = -1, this.b.setMap(a))
    };
    b.u = function(a) {
        this.b.setOptions(h({}, a))
    };
    b.s = function(a) {
        this.a.setOptions(h({}, a))
    };
    b.A = function(a) {
        var c = new google.maps.LatLng(a.coords.latitude, a.coords.longitude),
            e = null == this.b.getMap();
        if (e) {
            if (null != this.h() && a.coords.accuracy > this.h()) return;
            this.b.setMap(this.i());
            this.b.bindTo("position", this);
            this.a.bindTo("center", this, "position");
            this.a.bindTo("radius", this, "accuracy")
        }
        this.j() != a.coords.accuracy && google.maps.MVCObject.prototype.set.call(this, "accuracy", a.coords.accuracy);
        !e && null != this.c() && this.c().equals(c) || google.maps.MVCObject.prototype.set.call(this, "position",
            c)
    };
    b.o = function(a) {
        google.maps.event.trigger(this, "geolocation_error", a)
    };

    function h(a, c) {
        for (var e in c) !0 !== l[e] && (a[e] = c[e]);
        return a
    }
    var l = {
            map: !0,
            position: !0,
            radius: !0
        },
        k = /^(?:position|accuracy)$/i;

    function m() {
        g.prototype.getAccuracy = g.prototype.j;
        g.prototype.getBounds = g.prototype.m;
        g.prototype.getMap = g.prototype.i;
        g.prototype.getMinimumAccuracy = g.prototype.h;
        g.prototype.getPosition = g.prototype.c;
        g.prototype.getPositionOptions = g.prototype.l;
        g.prototype.setCircleOptions = g.prototype.s;
        g.prototype.setMap = g.prototype.f;
        g.prototype.setMarkerOptions = g.prototype.u;
        g.prototype.setMinimumAccuracy = g.prototype.v;
        g.prototype.setPositionOptions = g.prototype.w;
        return g
    }
    "function" === typeof this.define && this.define.amd ? this.define([], m) : "object" === typeof this.exports ? this.module.exports = m() : this.GeolocationMarker = m();
}).call(this)
    //# sourceMappingURL=geolocation-marker.js.map