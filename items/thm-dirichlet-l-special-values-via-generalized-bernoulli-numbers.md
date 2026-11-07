---
id: thm-dirichlet-l-special-values-via-generalized-bernoulli-numbers
kind: theorem
title: "Dirichlet L-values at nonpositive integers from generalized Bernoulli numbers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-dirichlet-l-function
  - def-euler-gamma-function
  - def-generalized-bernoulli-number
  - thm-gamma-meromorphic-continuation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions"
      url: "https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf"
      locator: "§§2.1 and 5.1, printed pp. 105–106 and 139–144"
verification: {}
---

## Statement

For every Dirichlet character $\chi$ modulo $f\ge1$ and integer $k\ge1$, the analytic continuation of its Dirichlet $L$-function satisfies
$$L(1-k,\chi)=-\frac{B_{k,\chi}}{k}.$$

## Statement references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §2.1 and §5.1, pp. 105–106 and 139–144](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

## Facts & Assumptions

**Given:** A Dirichlet character $\chi$ modulo $f$ and an integer $k\ge1$.

[F1] $B_{k,\chi}=f^{k-1}\sum_{a=1}^f\chi(a)B_k(a/f)$. [[def-generalized-bernoulli-number]]

[F2] The Dirichlet $L$-series is $\sum_{n\ge1}\chi(n)n^{-s}$ for $\operatorname{Re}s>1$. [[def-dirichlet-l-function]]

[F3] Gamma has simple poles at nonpositive integers with $\operatorname{Res}(\Gamma,-m)=(-1)^m/m!$. [[thm-gamma-meromorphic-continuation]]

[F4] On the right half-plane, $\Gamma(s)=\int_0^\infty e^{-t}t^{s-1}\,dt$. [[def-euler-gamma-function]]


## Proof

**Given:** The data above.

1.1 For $0<x\le1$, define $\zeta(s,x)=\sum_{n\ge0}(n+x)^{-s}$ for $\operatorname{Re}s>1$. By the Euler integral [F4], each term is the Mellin integral of $e^{-(n+x)t}$. If $\sigma=\operatorname{Re}s>1$, the partial geometric sums are dominated by $e^{-xt}t^{\sigma-1}/(1-e^{-t})$, which is integrable near zero because it is $O(t^{\sigma-2})$ and at infinity by exponential decay. Dominated convergence therefore permits summing under the integral and yields $\Gamma(s)\zeta(s,x)=\int_0^\infty\frac{e^{-xt}}{1-e^{-t}}t^{s-1}\,dt$. The Bernoulli-polynomial generating series gives $e^{-xt}/(1-e^{-t})=\sum_{m\ge0}B_m(1-x)t^{m-1}/m!$ near zero. [F1, F4, algebra]

1.2 Subtract the terms with $0\le m<M$ in that expansion from the integrand on $(0,1)$. The remainder is $O(t^{M-1})$, so its Mellin integral is holomorphic for $\operatorname{Re}s>1-M$; each subtracted term integrates to $B_m(1-x)/(m!(s+m-1))$. Taking $M>k$ continues $H(s)=\Gamma(s)\zeta(s,x)$ to a neighborhood of $s=1-k$, where its residue is $B_k(1-x)/k!$. By [F3], $\Gamma$ has residue $(-1)^{k-1}/(k-1)!$ there, so the removable quotient $H(s)/\Gamma(s)$ takes the value $(-1)^{k-1}B_k(1-x)/k$. Replacing $t$ by $-t$ in the Bernoulli generating series gives $B_k(1-x)=(-1)^kB_k(x)$, hence $\zeta(1-k,x)=-B_k(x)/k$. [F1, F3, step 1.1, algebra]

2.1 For $\operatorname{Re}s>1$, split the series in [F2] into residue classes modulo $f$ to get
$$L(s,\chi)=f^{-s}\sum_{a=1}^{f}\chi(a)\zeta(s,a/f).$$
The finite Hurwitz-zeta expression in step 1.2 supplies an analytic continuation of this finite sum to a neighborhood of $s=1-k$. Substitution gives
$$L(1-k,\chi)=f^{k-1}\sum_{a=1}^{f}\chi(a)\zeta(1-k,a/f)=-B_{k,\chi}/k,$$
including $f=1$ and $k=1$. [F1, F2, step 1.2, algebra] ∎
