---
id: def-model-space-radial-area-and-ball-volume
kind: definition
title: Model space radial area and ball volume
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-polar-surface-measure-on-the-unit-sphere
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§27.2 and 28.1, pp.200–209: the model density sn_k^(n-1) and the model ball volume"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, pp.15–20: the model radial density and its integral"
---

## Definition

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]) for the polar surface-measure supplier. Let $n\ge2$ and $k\in\mathbb R$, and let $\omega_{n-1}$ be the total surface
measure of the unit sphere $S^{n-1}\subseteq\mathbb R^n$, that is, its polar
surface measure [[def-polar-surface-measure-on-the-unit-sphere]], whose
finite Borel-measure property is supplied by
[[thm-polar-coordinates-formula-for-lebesgue-measure]]. The
**model radial area function** is
$$A_k(r):=\omega_{n-1}\operatorname{sn}_k(r)^{n-1},$$
defined on the positive domain of the comparison sine, for $0<r<\pi/\sqrt k$
when $k>0$ and for every $r>0$ when $k\le0$. Set $A_k(0):=0$; when $k>0$
also set $A_k(\pi/\sqrt k):=0$, the continuous endpoint value. Thus for
$k\le0$ the formula extends to all $r\ge0$ and is positive for $r>0$.

The **model ball volume function** is the integral
$$V_k(r):=\int_0^rA_k(t)\,dt,$$
for $0\le r\le\pi/\sqrt k$ when $k>0$ and for all $r\ge0$ when $k\le0$.
The endpoint integral exists because $A_k$ extends continuously there. It is
computed with the one-dimensional Lebesgue integral of the continuous nonnegative function $A_k$
([[def-polar-surface-measure-on-the-unit-sphere]]); the value at the left
endpoint is $V_k(0)=0$. When $k<0$ the substituted formulas
$A_k(r)=\omega_{n-1}\sinh^{n-1}(\sqrt{-k}\,r)/(\sqrt{-k})^{n-1}$ and
$V_k(r)=\omega_{n-1}\sqrt{-k}^{\,1-n}\int_0^r\sinh^{n-1}(\sqrt{-k}\,t)\,dt$
and the spherical formulas for $k>0$ express these functions through the
displayed comparison-sine data only.

The **saturated model volume** is
$$V^\star_k(r):=\begin{cases}V_k\bigl(\min\{r,\pi/\sqrt k\}\bigr),&k>0,\\[2pt] V_k(r),&k\le0,\end{cases}$$
for every $r\ge0$. Thus for $k>0$ the saturated volume is constant for
$r\ge\pi/\sqrt k$, at the value $V_k(\pi/\sqrt k)$ of the whole model sphere
configuration, while for $k\le0$ no saturation occurs. The saturation is a
convention of this page, used by Bishop–Gromov comparison, and it is stated
here once and for all.

These functions are the radial area and the volume of the model space of
constant curvature $k$; that geometric identification is proved by the
comparison items of this page together with the model-space examples, and is
not part of this definition. Only the displayed formulas, their domains, the
positivity of $\operatorname{sn}_k$ on the positive domain, and the saturation
convention are asserted here. For $n=2$ the exponent is $1$, so
$A_k(r)=\omega_1\operatorname{sn}_k(r)=2\pi\operatorname{sn}_k(r)$; in the
zero-dimensional case $n=0$ no spherical factor and no radial formula occur,
and the notation is not used.
