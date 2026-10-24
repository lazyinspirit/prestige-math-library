---
id: lem-energy-identity-on-a-truncated-wave-cone
kind: lemma
title: "The energy identity on a truncated wave cone"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-countable-choice, lem-local-wave-energy-conservation-law, def-wave-energy-and-energy-flux, lem-truncated-wave-cone-geometry-and-frustum-presentation, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, lem-surface-integral-is-independent-of-c-one-boundary-charts, def-wave-equation-cauchy-data-and-wave-speed, def-ck-and-multi-index-notation-in-several-variables, def-euclidean-inner-product, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.1, printed pp. 289-290, (9.2.3): the integrated flux form with exterior normal; §9.2.2, printed p. 290, (9.2.4) and Proposition 9.2.1: the quadratic form on space-like, characteristic and time-like surfaces"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed pp. 176-178, the proof of Theorem 7.12: the cone energy inequality"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #13-14: Geometric Energy Estimates (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ad3a71c522df2396b6248cf9b35aedea_MIT18_152F11_lec_13_14.pdf"
      locator: "§2, printed/PDF pp. 3-4, Theorem 2.1: the energy identity in a truncated backwards light cone with flat base, flat top and mantle"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$,
$c>0$, $x_0\in\mathbb R^n$, $t_0>0$ and $0<t_1<t_2<t_0$; let
$K=K(t_1,t_2)$ be the space-time frustum of
[[lem-truncated-wave-cone-geometry-and-frustum-presentation]] and let
$u\in C^2$ solve $\Box_cu=f$ on a neighbourhood of $\overline K$
([[def-wave-equation-cauchy-data-and-wave-speed]]). With $e,q$ as in
[[def-wave-energy-and-energy-flux]], $Du$ the spatial gradient and

$$E(t):=\int_{B_{c(t_0-t)}(x_0)}e(x,t)\,dx\qquad(t_1\le t\le t_2),$$

write $\partial_ru:=Du\cdot\frac{x-x_0}{|x-x_0|}$ and $D_{\mathrm{tan}}u:=Du-(\partial_ru)\frac{x-x_0}{|x-x_0|}$
for the radial and tangential parts of $Du$ on a sphere centred at $x_0$. Then

$$\int_Kf\,u_t\,dx\,dt=E(t_2)-E(t_1)+\int_{t_1}^{t_2}\!\int_{\partial B_{c(t_0-t)}(x_0)}\ell\,dS\,dt,$$

where the **lateral flux density** $\ell:=c\,e-c^2u_t\,\partial_ru=q\cdot\frac{x-x_0}{|x-x_0|}+c\,e$
satisfies

$$\ell=\frac{c}{2}\Bigl((u_t-c\,\partial_ru)^2+c^2|D_{\mathrm{tan}}u|^2\Bigr)\ \ge\ 0 .$$

Thus the lateral term is a sum of squares, vanishing identically exactly when
$u_t=c\,\partial_ru$ and $D_{\mathrm{tan}}u=0$ on the lateral surface.
In the homogeneous case $f=0$, the identity gives $E(t_2)\le E(t_1)$ for $t_1<t_2$. **Normalisation note.**
The density $\ell$ above is the one for which the sphere surface measure $dS$
makes the displayed identity an identity: the lateral area element of $K$
carries the graph factor $\sqrt{1+c^2}$, which cancels the
$1/\sqrt{1+c^2}$ in $V\cdot\nu$, where $V=(q,e)$, when $dS$ is measured on the sphere
$\partial B_{c(t_0-t)}(x_0)$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the frustum $K=K(t_1,t_2)$ with its faces $D_b=\overline B_{c(t_0-t_1)}(x_0)\times\{t_1\}$, $D_t=\overline B_{c(t_0-t_2)}(x_0)\times\{t_2\}$ and lateral frustum $L$, edge set $E$ the two rim spheres; a $C^2$ function $u$ solving $\Box_cu=f$ on a neighbourhood of $\overline K$; the fields $e=\tfrac12(u_t^2+c^2|Du|^2)$, $q=-c^2u_tDu$ of [[def-wave-energy-and-energy-flux]]; the space-time field $V:=(q,e)$ on $\mathbb R^n\times\mathbb R$.

[F1] Local conservation: $\partial_te+\operatorname{div}q=fu_t$ pointwise. ([[lem-local-wave-energy-conservation-law]])

[F2] Piecewise divergence theorem: if $\Omega$ has a specified finite piecewise $C^1$ presentation and $F\in C^1(\overline\Omega;\mathbb R^n)$, then $\int_\Omega\operatorname{div}F=\sum_j\int_{S_j}F\cdot\nu_j\,dS$, the faces counted once off the edge set $E$. ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]])

[F3] The frustum $K$ has the finite piecewise $C^1$ presentation with faces $D_b,D_t,L$ and edge set the two rim spheres, with outward unit normals $(0,-1)$ on $D_b$, $(0,1)$ on $D_t$, and $\nu=((x-x_0)/|x-x_0|,c)/\sqrt{1+c^2}$ on $L$. ([[lem-truncated-wave-cone-geometry-and-frustum-presentation]])

[F4] On a compact embedded $C^1$ hypersurface the chart integral is a finite Borel measure independent of charts; in graph coordinates $X(y)=(y,h(y))$ its density is $\sqrt{1+|Dh(y)|^2}$, and on a one-sided boundary the outward unit normal agrees on chart overlaps. ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[F5] The Euclidean inner product is symmetric and the orthogonal decomposition $Du=(\partial_ru)\,\widehat{x-x_0}+D_{\mathrm{tan}}u$ on a sphere centred at $x_0$ gives $|Du|^2=(\partial_ru)^2+|D_{\mathrm{tan}}u|^2$. ([[def-euclidean-inner-product]])

[F6] Polar integration has radial density $r^{n-1}dr\,d\sigma$; for $n\ge2$ the polar measure equals chart surface measure and radius-$r$ sphere integrals have factor $r^{n-1}$. In $n=1$ each point of $S^0$ has mass one and each lateral segment has length element $\sqrt{1+c^2}\,dt$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

## Proof

1.1 The divergence theorem applies to $V=(q,e)$ on the frustum: $u$ is $C^2$ on a neighbourhood of $\overline K$, so $q$ and $e$ are $C^1$ there, and by [F1] the space-time divergence of $V$ is $\operatorname{div}_{(x,t)}V=\operatorname{div}q+\partial_te=fu_t$; since $K$ has the finite piecewise $C^1$ presentation [F3] with edge set of surface measure zero, [F2] gives $\int_Kf\,u_t\,dx\,dt=\int_{D_b}V\cdot\nu\,dS+\int_{D_t}V\cdot\nu\,dS+\int_LV\cdot\nu\,dS$. [given, F1, F2, F3]

2.1 The caps: with the outward normals $(0,-1)$ on $D_b$ and $(0,1)$ on $D_t$ from [F3], the flux density on the bottom face is $V\cdot(0,-1)=-e$ and on the top face $V\cdot(0,1)=e$, and the chart integral on a face contained in a coordinate hyperplane reduces to the $n$-dimensional Lebesgue integral of the trace by [F4]; hence $\int_{D_b}V\cdot\nu\,dS=-\int_{B_{c(t_0-t_1)}(x_0)}e(x,t_1)\,dx=-E(t_1)$ and $\int_{D_t}V\cdot\nu\,dS=E(t_2)$, so the two caps contribute $E(t_2)-E(t_1)$. [given, F3, F4, step 1.1, algebra]

2.2 The lateral face: by [F3] the outward unit normal on $L$ is $\nu=(\widehat{x-x_0},c)/\sqrt{1+c^2}$, so $V\cdot\nu=(q\cdot\widehat{x-x_0}+ce)/\sqrt{1+c^2}=\ell/\sqrt{1+c^2}$ with $\ell:=q\cdot\widehat{x-x_0}+ce$; parametrizing the lateral frustum by $(\omega,t)\mapsto(x_0+c(t_0-t)\omega,t)$ over $S^{n-1}\times[t_1,t_2]$, or equivalently using the graph density $\sqrt{1+1/c^2}$ of [F4] for the graph $t=t_0-|x-x_0|/c$, the graph density and polar integration [F6], with $r=c(t_0-t)$ and $|dr|=c\,dt$, give area element $\sqrt{1+c^2}\,[c(t_0-t)]^{n-1}d\omega\,dt$, so $\int_LV\cdot\nu\,dS=\int_{t_1}^{t_2}\int_{S^{n-1}}\ell\,[c(t_0-t)]^{n-1}d\omega\,dt=\int_{t_1}^{t_2}\int_{\partial B_{c(t_0-t)}(x_0)}\ell\,dS\,dt$; and, since $q\cdot\widehat{x-x_0}=-c^2u_t\partial_ru$, the density is $\ell=ce-c^2u_t\partial_ru=\tfrac c2(u_t^2+c^2|Du|^2)-c^2u_t\partial_ru=\tfrac c2\bigl((u_t-c\partial_ru)^2+c^2(|Du|^2-(\partial_ru)^2)\bigr)=\tfrac c2\bigl((u_t-c\partial_ru)^2+c^2|D_{\mathrm{tan}}u|^2\bigr)\ge0$ by [F5], with equality exactly when both squares vanish. [given, F3, F4, F5, F6, step 1.1, algebra]

3.1 Substituting steps 2.1 and 2.2 into the identity of step 1.1 gives $\int_Kf\,u_t\,dx\,dt=E(t_2)-E(t_1)+\int_{t_1}^{t_2}\int_{\partial B_{c(t_0-t)}(x_0)}\ell\,dS\,dt$ with $\ell=\tfrac c2\bigl((u_t-c\partial_ru)^2+c^2|D_{\mathrm{tan}}u|^2\bigr)\ge0$, $\ell$ vanishing identically on $L$ exactly when $u_t=c\partial_ru$ and $D_{\mathrm{tan}}u=0$ there; this is the displayed identity and the sum-of-squares form. [step 1.1, step 2.1, step 2.2, algebra] ∎ 