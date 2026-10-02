---
id: cor-volume-doubling-under-a-nonnegative-ricci-lower-bound
kind: corollary
title: Volume doubling under a nonnegative ricci lower bound
status: published
origin: pipeline
deps:
  - thm-bishop-gromov-volume-comparison
  - def-model-space-radial-area-and-ball-volume
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - lem-power-laws
  - def-integer-power
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§27.2 and 28.1, pp.200–209: the Bishop–Gromov ratio and the model volume quotients"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, pp.15–20: volume comparison and the model density"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$ for a real number $k$,
let $p\in M$, and let $V^\star_k$ be the saturated model ball volume of
[[def-model-space-radial-area-and-ball-volume]]. Then for every $r>0$,
$$\operatorname{vol}_g\bigl(B(p,2r)\bigr)\le\frac{V^\star_k(2r)}{V^\star_k(r)}\;\operatorname{vol}_g\bigl(B(p,r)\bigr),$$
so the ball volume is doubled at the cost of the explicit model factor. When
$k=0$ this factor is exactly
$$\frac{V^\star_0(2r)}{V^\star_0(r)}=2^n ,$$
while for $k<0$ it is the scale-dependent model ratio
$$\frac{V^\star_k(2r)}{V^\star_k(r)}=\frac{\int_0^{2r}\sinh^{n-1}\bigl(\sqrt{-k}\,t\bigr)\,dt}{\int_0^{r}\sinh^{n-1}\bigl(\sqrt{-k}\,t\bigr)\,dt} ,$$
a function of the product $\sqrt{-k}\,r$ alone; no uniform bound independent of
$r$ is asserted for $k<0$. For $k>0$ each model volume is saturated once
its own radius reaches the model pole, so the factor is
$\int_0^{\min\{2r,\pi/\sqrt k\}}\operatorname{sn}_k^{n-1}/\int_0^{\min\{r,\pi/\sqrt k\}}\operatorname{sn}_k^{n-1}$.
No compactness of $M$ is assumed, and no choice beyond the inherited
$\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected, boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$; a point $p\in M$; the ball volumes $\operatorname{vol}_g(B(p,\cdot))$; and the saturated model volume $V^\star_k$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the Bishop–Gromov and change-of-variables suppliers below.

[F1] Bishop–Gromov volume comparison ([[thm-bishop-gromov-volume-comparison]]): the ratio $R_p(r)=\operatorname{vol}_g(B(p,r))/V^\star_k(r)$ is well defined, nonincreasing on $(0,\infty)$, tends to $1$ as $r\downarrow0$, and satisfies $\operatorname{vol}_g(B(p,r))\le V^\star_k(r)<+\infty$ for every $r>0$.

[F2] Model volume ([[def-model-space-radial-area-and-ball-volume]], [[def-comparison-sine-cosine-and-cotangent-functions]]): $V^\star_k(r)=V_k(\min\{r,\pi/\sqrt k\})=\omega_{n-1}\int_0^{\min\{r,\pi/\sqrt k\}}\operatorname{sn}_k(t)^{n-1}\,dt$ for $k>0$ and $V^\star_k(r)=V_k(r)=\omega_{n-1}\int_0^r\operatorname{sn}_k(t)^{n-1}\,dt$ for $k\le0$, where $\omega_{n-1}>0$; moreover $\operatorname{sn}_0(t)=t$ and, for $k<0$, $$\operatorname{sn}_k(t)^{n-1}=\frac{\sinh^{n-1}\bigl(\sqrt{-k}\,t\bigr)}{(\sqrt{-k})^{n-1}},\qquad V_k(r)=\frac{\omega_{n-1}}{(\sqrt{-k})^{n-1}}\int_0^r\sinh^{n-1}\bigl(\sqrt{-k}\,t\bigr)\,dt .$$

[F3] Change of variables ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]): for a $C^1$ diffeomorphism $T:U\to V$ of open subsets of $\mathbb R$ and every nonnegative Lebesgue measurable $f:V\to[0,\infty]$, $$\int_Vf(y)\,d\lambda_1(y)=\int_Uf(T(x))\,|T'(x)|\,d\lambda_1(x).$$

[F4] Powers ([[lem-power-laws]], [[def-integer-power]]): for real $a,b$ and natural $m$, $(ab)^m=a^mb^m$, and $a^0=1$.

## Proof

**Proof technique:** direct: the Bishop–Gromov ratio is nonincreasing, and for the two radii $r<2r$ this rearrangement gives the doubling inequality; the model factors are then evaluated from the explicit comparison-sine formulas, with the homogeneous substitution $t\mapsto 2t$ for the Lebesgue integral.

1.1 The doubling inequality. [F1, given]
Fix $r>0$. By monotonicity of the Bishop–Gromov ratio in [F1], $$\frac{\operatorname{vol}_g(B(p,2r))}{V^\star_k(2r)}=R_p(2r)\le R_p(r)=\frac{\operatorname{vol}_g(B(p,r))}{V^\star_k(r)} .$$ Multiplying by the positive number $V^\star_k(r)V^\star_k(2r)$ [F1, F2] gives $$\operatorname{vol}_g\bigl(B(p,2r)\bigr)\le\frac{V^\star_k(2r)}{V^\star_k(r)}\operatorname{vol}_g\bigl(B(p,r)\bigr),$$ the asserted inequality, both volumes being finite by [F1]. [F1, given]

1.2 The factor for $k=0$ is $2^n$. [F2, F3, F4]
By [F2], $V^\star_0(r)=\omega_{n-1}\int_0^rt^{n-1}\,dt$ for every $r>0$. The map $T:(0,r)\to(0,2r)$, $T(x)=2x$, is a $C^1$ diffeomorphism with $T'(x)=2$, and $t\mapsto t^{n-1}$ is nonnegative and continuous, hence Lebesgue measurable; [F3] applied to it gives, using [F4] to expand $(2x)^{n-1}=2^{n-1}x^{n-1}$, $$\int_0^{2r}t^{n-1}\,dt=\int_0^r(2x)^{n-1}\cdot2\,dx=2^{n-1}\cdot2\int_0^rx^{n-1}\,dx=2^n\int_0^rt^{n-1}\,dt .$$ The common factor $\omega_{n-1}$ cancels in the quotient, so $V^\star_0(2r)/V^\star_0(r)=2^n$. [F2, F3, F4]

1.3 The factor for $k<0$. [F2, F3]
Write $\sigma:=\sqrt{-k}>0$. By the substituted formula of [F2], the common factor $\omega_{n-1}\sigma^{1-n}$ cancels in the quotient and $$\frac{V^\star_k(2r)}{V^\star_k(r)}=\frac{\int_0^{2r}\sinh^{n-1}(\sigma t)\,dt}{\int_0^{r}\sinh^{n-1}(\sigma t)\,dt} .$$ Applying the substitution $T(x)=2x$ of [F3] to the numerator, $\int_0^{2r}\sinh^{n-1}(\sigma t)\,dt=2\int_0^r\sinh^{n-1}(2\sigma x)\,dx$; applying it once more with $x=rs$ to both numerator and denominator shows that the quotient is a function of the product $\sigma r=\sqrt{-k}\,r$ alone. [F2, F3]

2.1 Conclusion. [F2, step 1.1, step 1.2, step 1.3]
Step 1.1 is the doubling inequality for every real $k$ and every $r>0$. Its factor is $2^n$ when $k=0$ by step 1.2 and is the displayed function of $\sqrt{-k}\,r$ when $k<0$ by step 1.3; in particular the factor for $k<0$ is scale-dependent and no constant independent of $r$ is asserted. For $k>0$, $V^\star_k(2r)=V_k(\pi/\sqrt k)$ once $2r\ge\pi/\sqrt k$; the denominator reaches this value only when $r\ge\pi/\sqrt k$. In general the saturated formula of [F2] gives the displayed quotient of integrals over $(0,\min\{2r,\pi/\sqrt k\})$ and $(0,\min\{r,\pi/\sqrt k\})$, which is $1$ for $r\ge\pi/\sqrt k$. The case $n=2$ is included with exponent $n-1=1$; the endpoint $r=0$ is excluded. Only the single substitution $t\mapsto2t$ and the inherited [A1] are used, so no additional choice is made. [F2, step 1.1, step 1.2, step 1.3] ∎

## Source locator

Datar §§27.2 and 28.1, pp.200–209, and Eschenburg §§4–5, pp.15–20, record the Bishop–Gromov ratio and its model comparison; the doubling form is the rearrangement of the monotonicity at the two radii $r<2r$. The Euclidean factor $2^n$ is the homogeneity of the model density $t^{n-1}$, and the negative-curvature factor is the corresponding hyperbolic-sine quotient of the model volume definition.
