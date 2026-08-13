---
id: def-radian-angle-by-unit-circle-arc-length
kind: definition
title: "Radian angle by unit-circle arc length"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-circular-arcs-circumference-and-diameter, thm-c1-paths-have-length-equal-to-the-integral-of-speed, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-circle-circumference-diameter-ratio-is-pi]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, §11.4.3, The unit circle and polar coordinates"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
    - title: "OpenStax, Algebra and Trigonometry 2e, §7.3, The Unit Circle"
      url: "https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-3-unit-circle"
pipeline_run: null
---

## Definition

Let

$$\gamma(t)=(\cos t,\sin t),\qquad 0\le t\le2\pi.$$

For such a $t$, the counterclockwise angle swept from
$\gamma(0)=(1,0)$ to $\gamma(t)$ is defined to have **radian measure**

$$L\bigl(\gamma\!\upharpoonright_{[0,t]}\bigr),$$

the length of that unit-circle arc
([[def-circular-arcs-circumference-and-diameter]]). The sine and cosine
derivative formulas give
$\gamma'(u)=(-\sin u,\cos u)$, while the Pythagorean identity gives
$\lVert\gamma'(u)\rVert_2=1$
([[thm-sine-and-cosine-derivatives]],
[[cor-trigonometric-parity-and-pythagorean-identity]]). Therefore

$$L\bigl(\gamma\!\upharpoonright_{[0,t]}\bigr)
=\int_0^t\lVert\gamma'(u)\rVert_2\,du=t$$

([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]); this includes
$t=0$, when the arc is a singleton. Thus the analytic parameter $t$ is the
geometric radian measure of the swept angle. At $t=2\pi$ the path makes one
full turn, so a full turn has radian measure $2\pi$, agreeing with the
circumference of the unit circle
([[thm-circle-circumference-diameter-ratio-is-pi]]).
