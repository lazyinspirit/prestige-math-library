---
id: def-radian-angle-by-unit-circle-arc-length
kind: definition
title: "Radian angle by unit-circle arc length"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-circular-arcs-circumference-and-diameter, def-path-polygonal-length-and-rectifiability-in-rn, thm-c1-paths-have-length-equal-to-the-integral-of-speed, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, def-vector-valued-derivative-and-integral, cor-trigonometric-parity-and-pythagorean-identity, lem-integral-elementary-bounds, thm-circle-circumference-diameter-ratio-is-pi]
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

For $0<t\le2\pi$ the restriction $\gamma\!\upharpoonright_{[0,t]}$ is a
circular arc of the unit circle
([[def-circular-arcs-circumference-and-diameter]]), and the counterclockwise
angle swept from $\gamma(0)=(1,0)$ to $\gamma(t)$ is defined to have
**radian measure**

$$L\bigl(\gamma\!\upharpoonright_{[0,t]}\bigr),$$

the length of that arc. At $t=0$ nothing is swept, and
$\gamma\!\upharpoonright_{[0,0]}$ is not a circular arc, that definition
admitting only parameter intervals $[\alpha,\beta]$ with $\alpha<\beta$; it is
the one-point path at $(1,0)$, whose length is $0$ by the singleton convention
for path length
([[def-path-polygonal-length-and-rectifiability-in-rn]]), and the degenerate
angle at $t=0$ is defined to have radian measure $0$. In every case, then, the
radian measure of the swept angle is $L(\gamma\!\upharpoonright_{[0,t]})$.

That measure is $t$. Sine and cosine are differentiable on $\mathbb R$ with
$(\sin u)'=\cos u$ and $(\cos u)'=-\sin u$
([[thm-sine-and-cosine-derivatives]]), hence continuous on $\mathbb R$
([[cor-differentiable-implies-continuous]]). Differentiation of a
vector-valued function being componentwise
([[def-vector-valued-derivative-and-integral]]), $\gamma'(u)=(-\sin u,\cos u)$;
so for $0<t\le2\pi$ the path $\gamma\!\upharpoonright_{[0,t]}$ is continuous on
$[0,t]$, differentiable on $(0,t)$, and its derivative is continuous on
$[0,t]$. The Pythagorean identity gives
$\lVert\gamma'(u)\rVert_2=1$
([[cor-trigonometric-parity-and-pythagorean-identity]]), and the integral of a
constant over $[0,t]$ is that constant times $t$
([[lem-integral-elementary-bounds]]). Therefore

$$L\bigl(\gamma\!\upharpoonright_{[0,t]}\bigr)=\int_0^t\lVert\gamma'(u)\rVert_2\,du=\int_0^t1\,du=t$$

([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]), while at $t=0$
both the length and the parameter are $0$.

Thus the analytic parameter $t$ is the geometric radian measure of the swept
angle. At $t=2\pi$ the path makes one full turn, so a full turn has radian
measure $2\pi$, agreeing with the circumference of the unit circle
([[thm-circle-circumference-diameter-ratio-is-pi]]).
