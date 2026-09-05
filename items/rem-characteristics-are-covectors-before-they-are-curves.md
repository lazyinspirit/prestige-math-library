---
id: rem-characteristics-are-covectors-before-they-are-curves
kind: remark
title: "Characteristics are covectors before they are curves"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-characteristic-covector-hypersurface-and-noncharacteristic-data,
       def-linear-transport-equation-and-its-characteristic-flow]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-pde/"
---

For higher-order equations, characteristic objects are first defined by the
principal symbol acting on covectors, hence on conormals to hypersurfaces. For
first-order transport the transport vector field directly produces familiar
base-space characteristic curves. Higher-order real principal symbols can also
produce curves: their Hamilton vector fields define bicharacteristics in the
cotangent bundle, whose projections are characteristic rays. Thus the transport
curve picture is a special direct construction, while the general
higher-order curve picture retains the covector variable.
