---
requires: ["gr-homogeneous-cosmology","construction-of-r-via-cauchy-sequences"]
page: gr-homogeneous-cosmology-examples
title: "Homogeneous Cosmology — Examples"
status: draft
library: physics
items: []
examples: [ex-gr-flrw-flat-power-law-check,
           ex-gr-flrw-de-sitter-system-check,
           cex-gr-flrw-static-matter-not-a-flat-solution,
           ex-gr-flrw-redshift-conservation-check]
---

This page collects worked checks of the items of
[[gr-homogeneous-cosmology]], all carried out directly in the defining
equations so that they can be read without the physical reductions. The
flat power-law data are differentiated and substituted in all four scalar
equations of [[def-gr-flrw-friedmann-system]], verifying the Friedmann,
acceleration, continuity and spatial-component equations simultaneously
([[ex-gr-flrw-flat-power-law-check]]). The exponential datum with positive
cosmological parameter is verified against the same four equations, and the
square-sign obstruction shows that no flat vacuum datum satisfies the
Friedmann equation when the parameter is negative
([[ex-gr-flrw-de-sitter-system-check]]). A counterexample separates the
equations: the static flat matter datum satisfies the spatial-component and
continuity equations while failing the Friedmann and acceleration equations,
so the Friedmann equation is not redundant in the reduced system
([[cex-gr-flrw-static-matter-not-a-flat-solution]]). Finally, an explicit
radial null geodesic of an exponentially expanding flat model verifies the
conservation of $aV^t$ and the observer-energy ratio
$E_R/E_E=a(t_E)/a(t_R)$ in coordinates
([[ex-gr-flrw-redshift-conservation-check]]). Every item on this page is a
mathematical computation on a specified FLRW model datum; no observation and
no field equation is asserted.
