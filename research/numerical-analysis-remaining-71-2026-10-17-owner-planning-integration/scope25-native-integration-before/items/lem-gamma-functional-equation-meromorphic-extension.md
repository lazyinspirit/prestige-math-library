---
id: lem-gamma-functional-equation-meromorphic-extension
kind: lemma
title: Gamma functional equation away from the poles
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-euler-gamma-function, lem-gamma-integral-converges-locally-uniformly, thm-gamma-functional-equation, lem-archimedean-property-from-completeness, thm-euler-gamma-function-is-holomorphic]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.5, Functional Relations
      url: https://dlmf.nist.gov/5.5
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 0
---

## Statement

For every $z\in\mathbb C\setminus\{0,-1,-2,\ldots\}$,
$$\Gamma(z+1)=z\Gamma(z),$$
where $\Gamma$ is the meromorphic continuation of Euler's Gamma function.

## Facts & Assumptions

**Given:** Euler's Gamma integral on $\operatorname{Re}z>0$ and
$z\in\mathbb C\setminus\{0,-1,-2,\ldots\}$.

[F1] [[def-euler-gamma-function]] and
[[lem-gamma-integral-converges-locally-uniformly]]: Euler's integral defines
$\Gamma(w)$ on $\operatorname{Re}w>0$.

[F2] [[thm-euler-gamma-function-is-holomorphic]]: this integral defines a
holomorphic function on the right half-plane.

[F3] [[thm-gamma-functional-equation]]: if $\operatorname{Re}w>0$, then
$\Gamma(w+1)=w\Gamma(w)$.

[F4] [[lem-archimedean-property-from-completeness]]: for every real $r$,
some integer $m\ge1$ satisfies $r>-m$.

## Proof
1.1 For each integer $m\ge0$, let $V_m=\{w\in\mathbb C:\operatorname{Re}w>-m-1\}$ and define $G_m(w)=\Gamma(w+m+1)/(w(w+1)\cdots(w+m))$ as a meromorphic function on $V_m$. Its numerator is holomorphic on this half-plane by [F1] and [F2], and its denominator is a polynomial. [given, F1, F2, algebra, construct]

2.1 For every $w\in V_m$, $\operatorname{Re}(w+m+1)>0$. Applying [F3] at $w+m+1$ and cancelling the common meromorphic factor $w+m+1$ gives $G_{m+1}(w)=G_m(w)$ on the overlap $V_m\subset V_{m+1}$. By [F4], the union of the $V_m$ is $\mathbb C$, so these compatible meromorphic formulas define a meromorphic continuation of Euler's Gamma function on the whole plane. [given, F3, F4, step 1.1, algebra]

3.1 Choose $m\ge1$ large enough that $z\in V_m$; then $z+1\in V_{m-1}$. Because $z$ is not a nonpositive integer, the denominator factors below are nonzero. The glued formulas give $\Gamma(z)=\Gamma(z+m+1)/(z(z+1)\cdots(z+m))$ and $\Gamma(z+1)=\Gamma(z+m+1)/((z+1)\cdots(z+m))$. Multiplying the first identity by $z$ yields the second. [given, F4, step 2.1, algebra, choose] ∎