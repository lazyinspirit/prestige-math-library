---
id: def-spherical-bessel-evaluation-contract
kind: definition
title: Scaled spherical Bessel evaluation on positive real arguments
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-spherical-bessel-and-hankel-functions, def-certified-evaluation-result-contract]
justified_by: [thm-certified-scaled-spherical-bessel-enclosures]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: NIST DLMF, spherical Bessel functions, explicit formulas
      url: https://dlmf.nist.gov/10.49
---

## Definition

Let $\ell\ge0$ be an integer, $z>0$, $c_\ell=(2\ell+1)!!$, and $d_\ell=(2\ell-1)!!$, with $(-1)!!=1$. In the outgoing convention of [[def-spherical-bessel-and-hankel-functions]], put
$$J_\ell^{\rm sc}(z)=c_\ell z^{-\ell}j_\ell(z),\qquad D J_\ell^{\rm sc}(z)=c_\ell z^{-\ell}j_\ell'(z),$$
$$H_\ell^{\rm sc}(z)=d_\ell^{-1}z^{\ell+1}e^{-iz}h_\ell^{(1)}(z),\qquad D H_\ell^{\rm sc}(z)=d_\ell^{-1}z^{\ell+1}e^{-iz}(h_\ell^{(1)})'(z).$$
The symbols $D J^{\rm sc}$ and $D H^{\rm sc}$ denote scaled derivatives of the original functions, not derivatives of the scaled functions. Each of these four targets, or its unscaled counterpart $j_\ell,j_\ell',h_\ell^{(1)},(h_\ell^{(1)})'$, can be requested. All derivatives are with respect to $z$.

An input is either a closed dyadic interval $I=[a,b]\subset(0,\infty)$, requesting an enclosure of the target's entire image on $I$, or a positive real $z$ supplied by a certified enclosure interface: for each integer $n\ge1$ a terminating subroutine supplies a closed dyadic interval $I_n$ containing $z$, of width at most $2^{-n}$. Nestedness is not required. The interface is a representation hypothesis, not an assertion that every real number is computable. An exact positive dyadic point is the special case $I_n=[z,z]$.

Outputs and optional relative tests follow [[def-certified-evaluation-result-contract]]. Each requested component has absolute tolerance $\varepsilon_a>0$; $\varepsilon_r>0$ is optional. The complex radius is half the Euclidean diagonal; all tests can be performed by squaring rational nonnegative quantities. Success for a box input encloses every point of that box. Success for a real interface encloses the represented real value. No relative certificate is issued for an enclosure containing zero.

Exact rational intermediate intervals are allowed; final endpoints are rounded outward to multiples of $2^{-p}$ for a chosen integer $p$. There is no fixed hardware exponent limit in this mathematical procedure. A concrete implementation with bounded exponent or memory must return `range` or `inconclusive` instead of an unsound finite result. Finite caps bound interface calls, arithmetic work, Taylor degree and endpoint precision. Guaranteed eventual absolute success under increasing caps is a separate theorem for the represented-point mode; a fixed nondegenerate input interval need not admit arbitrarily small output radius.
