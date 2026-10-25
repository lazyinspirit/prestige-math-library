---
id: def-radian-angle-by-unit-circle-arc-length
kind: definition
title: "Radian angle by unit-circle arc length"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-circular-arcs-circumference-and-diameter, def-path-polygonal-length-and-rectifiability-in-rn, thm-c1-paths-have-length-equal-to-the-integral-of-speed, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, def-continuity-real, lem-real-and-metric-notions-agree, thm-componentwise-limits-and-continuity, def-vector-valued-functions-limits-and-continuity, def-derivative, def-vector-valued-derivative-and-integral, def-p-norms-on-rn, cor-trigonometric-parity-and-pythagorean-identity, lem-integral-elementary-bounds, thm-circle-circumference-diameter-ratio-is-pi]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-14
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

That measure is $t$. Fix $t$ with $0<t\le2\pi$, and write
$v(u):=(-\sin u,\cos u)$ for $u\in[0,t]$.

Sine and cosine are differentiable on $\mathbb R$ with $(\sin u)'=\cos u$ and
$(\cos u)'=-\sin u$ ([[thm-sine-and-cosine-derivatives]]), hence continuous on
$\mathbb R$ ([[cor-differentiable-implies-continuous]]), and so is $-\sin$, a
scalar multiple of a continuous function
([[thm-algebra-of-continuous-functions]], clause 1). Continuity of a real
function passes to a subset of its domain, the condition on the restriction
quantifying over fewer points ([[def-continuity-real]]), so $\cos$, $\sin$ and
$-\sin$ restricted to $[0,t]$ are continuous at every point of $[0,t]$; and for
a real function on a subset of $\mathbb R$ the $\mathbb R$-native and the
metric-space notions of continuity are the same notion
([[lem-real-and-metric-notions-agree]], clause 1). A function into
$\mathbb R^m$ is continuous at a point of its domain if and only if each of its
components is ([[thm-componentwise-limits-and-continuity]], clause 1;
[[def-vector-valued-functions-limits-and-continuity]]). Hence
$\gamma\!\upharpoonright_{[0,t]}$ is continuous on $[0,t]$, and so is
$v:[0,t]\to\mathbb R^2$.

Every point of a nondegenerate interval is a limit point of it, and if a real
function is differentiable at a point of its domain, so is its restriction to
any subset still having that point as a limit point, with the same derivative
([[def-derivative]]). So $\cos$ and $\sin$ restricted to $[0,t]$ are
differentiable at every $u\in(0,t)$, with derivatives $-\sin u$ and $\cos u$;
and a vector-valued function is differentiable at a limit point of its domain
exactly when each component is, its derivative there being the vector of the
component derivatives
([[def-vector-valued-derivative-and-integral]]). Hence
$\gamma\!\upharpoonright_{[0,t]}$ is differentiable at every $u\in(0,t)$ with
derivative $(-\sin u,\cos u)=v(u)$, and $v$ is a continuous extension of that
derivative to $[0,t]$ — the hypotheses of
[[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]. Since
$\lVert w\rVert_2=\bigl(|w_0|^2+|w_1|^2\bigr)^{1/2}$ ([[def-p-norms-on-rn]])
and $\sin^2u+\cos^2u=1$
([[cor-trigonometric-parity-and-pythagorean-identity]]), we get
$\lVert v(u)\rVert_2=\bigl(|-\sin u|^2+|\cos u|^2\bigr)^{1/2}=(\sin^2u+\cos^2u)^{1/2}=1$
for every $u\in[0,t]$; and the
integral of a constant over $[0,t]$ is that constant times $t$
([[lem-integral-elementary-bounds]]). Therefore

$$L\bigl(\gamma\!\upharpoonright_{[0,t]}\bigr)=\int_0^t\lVert v(u)\rVert_2\,du=\int_0^t1\,du=t$$

([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]), while at $t=0$
both the length and the parameter are $0$.

Thus the analytic parameter $t$ is the geometric radian measure of the swept
angle. At $t=2\pi$ the path makes one full turn, so a full turn has radian
measure $2\pi$, agreeing with the circumference of the unit circle
([[thm-circle-circumference-diameter-ratio-is-pi]]).
