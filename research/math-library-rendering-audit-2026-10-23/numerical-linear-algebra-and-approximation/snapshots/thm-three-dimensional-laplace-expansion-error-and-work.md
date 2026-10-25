---
id: thm-three-dimensional-laplace-expansion-error-and-work
kind: theorem
title: Three-dimensional Laplace cluster expansion error and work
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-three-dimensional-spherical-harmonic-space, lem-three-dimensional-laplace-spherical-harmonic-addition-theorem, alg-three-dimensional-laplace-cluster-expansion]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Michael O’Neil, Integral Equations and Fast Algorithms, complete course lecture notes (2017)"
      url: "https://cims.nyu.edu/~oneil/courses/fa17-math2011/int_eq_notes_2017.pdf"
---

## Statement

For the single-cluster evaluator of [[alg-three-dimensional-laplace-cluster-expansion]], let $Q=\sum_{j\in J}|q_j|$. If a target satisfies $r=|x-c|>a$, then its potential error obeys
$$|U(x)-\widetilde U_p(x)|\le\frac{Q}{r}\frac{(a/r)^{p+1}}{1-a/r}.$$
If a target region is contained in a ball of radius $b$ centered at $d$, with $R=|d-c|>a+b$, then every target in the region has error at most
$$\frac{Q}{R-b}\frac{\bigl(a/(R-b)\bigr)^{p+1}}{1-a/(R-b)}.$$
Let $S=|J|$ and let $T_0$ be the number of targets. Under the monomial-coefficient evaluation convention of the algorithm, forming moments and evaluating the truncated field costs $O((S+T_0)(p+1)^4)$ arithmetic operations after the basis coefficient arrays have been prepared. If all basis values at sources and targets are supplied, the coefficient accumulation and expansion evaluation alone cost $O((S+T_0)(p+1)^2)$. This is a single-cluster estimate; it is not a 3D multilevel FMM tree complexity theorem.

## Facts & Assumptions

**Given:** A finite 3D source cluster in a ball $B(c,a)$, an orthonormal basis of each $\mathcal H_\ell$ through degree $p$, and targets strictly outside $B(c,a)$.

[F1] [[def-three-dimensional-spherical-harmonic-space]]: $\mathcal H_\ell$ is the degree-$\ell$ homogeneous harmonic polynomial space restricted to the unit sphere, with the surface-area inner product; its regular solid harmonics are homogeneous degree-$\ell$ polynomials.

[F2] [[lem-three-dimensional-laplace-spherical-harmonic-addition-theorem]]: the normalized spherical-harmonic addition identity and $|P_\ell(t)|\le1$ hold, and $\sum_{\ell\ge0}r^\ell P_\ell(t)=(1-2rt+r^2)^{-1/2}$ for $0\le r<1$.

[F3] [[alg-three-dimensional-laplace-cluster-expansion]]: moments are $M_{\ell m}=\sum_jq_j\overline{H_{\ell m}(y_j-c)}$, and the output sums the corresponding basis expansion through degree $p$.

## Proof

1.1 For a source $y_j$, put $v_j=y_j-c$, $r_j=|v_j|\le a$, and $\omega_j=v_j/r_j$ when $r_j>0$. For a target put $r=|x-c|>a$ and $\omega=(x-c)/r$. Applying the generating identity and then the addition identity in [F2] with ratio $r_j/r<1$ gives $\frac1{|x-y_j|}=\sum_{\ell=0}^{\infty}\frac{r_j^\ell}{r^{\ell+1}}P_\ell(\omega\cdot\omega_j)=4\pi\sum_{\ell=0}^{\infty}\frac{1}{2\ell+1}\frac{r_j^\ell}{r^{\ell+1}}\sum_{m=-\ell}^{\ell}Y_{\ell m}(\omega)\overline{Y_{\ell m}(\omega_j)}$. For $r_j=0$, the same formula follows by the limit: the degree-zero term is $1/r$ and all positive-degree regular solid harmonics vanish at the center. [given, F1, F2, algebra]

1.2 The dimension result in [F2] gives $\sum_{\ell=0}^p(2\ell+1)=(p+1)^2$ coefficients. At degree $\ell$, each homogeneous polynomial has at most $\binom{\ell+2}{2}$ monomials and there are $2\ell+1$ basis polynomials. Evaluating all basis values at one point by the prescribed monomial sums therefore uses at most a constant times $\sum_{\ell=0}^p(2\ell+1)\binom{\ell+2}{2}=O((p+1)^4)$ operations. [given, F1, F2, algebra]

2.1 Summing the finite source set with weights $q_j$ and grouping the finite sums over $m$ produces exactly the moments and the truncated evaluator in [F3]. The remainder magnitude is at most $\sum_j|q_j|\sum_{\ell=p+1}^{\infty}\frac{r_j^\ell}{r^{\ell+1}}|P_\ell(\omega\cdot\omega_j)|\le\frac{Q}{r}\sum_{\ell=p+1}^{\infty}(a/r)^\ell=\frac{Q}{r}\frac{(a/r)^{p+1}}{1-a/r}$, using [F2] and the geometric-series formula. [given, F2, F3, step 1.1, algebra]

3.1 If $|x-d|\le b$, the triangle inequality gives $r=|x-c|\ge R-b>a$. The function $a^{p+1}/(r^{p+1}(r-a))$, equal to $r^{-1}(a/r)^{p+1}/(1-a/r)$, is nonincreasing for $r>a$ because its denominator is nondecreasing; substituting $r=R-b$ in step 2.1 gives the stated uniform target-region bound. [given, step 2.1, algebra]

4.1 Repeating this basis evaluation at $S$ source points and $T_0$ target points costs $O((S+T_0)(p+1)^4)$. The remaining moment and target accumulations use $(p+1)^2$ coefficients per point, hence $O((S+T_0)(p+1)^2)$ additional operations; if basis values are supplied, this latter count is the full coefficient-stage cost. [F3, step 1.2, algebra] ∎
