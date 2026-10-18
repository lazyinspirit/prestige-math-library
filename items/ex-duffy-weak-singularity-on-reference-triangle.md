---
id: ex-duffy-weak-singularity-on-reference-triangle
kind: example
title: A 1 over r singularity on the reference triangle
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [def-duffy-reference-triangle-map, thm-duffy-weak-singularity-transform, alg-duffy-weighted-product-gauss-quadrature, cor-duffy-weighted-product-gauss-error, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-chain-rule, thm-real-power-continuity-and-derivatives, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-ftc-second-part]
proof_strategy: direct
axiom_use: Countable Choice is used only to supply the weighted Gauss–Jacobi rule.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Imperial College London, Numerical quadrature, Finite Element course notes, §1.6
      url: https://finite-element.github.io/1_quadrature.html
      locator: §1.6, the reference-triangle Duffy map and Jacobian.
    - title: Christopher J. Bishop, The Riemann Mapping Theorem, Chapter 3 §3, Gauss-Jacobi quadrature lecture notes
      url: https://www.math.stonybrook.edu/~bishop/classes/math401.F09/t.pdf
      locator: Chapter 3 §3, weighted Gauss–Jacobi rules and derivative remainder.
---

## Statement

On $T=\{(x,y):0\le y\le x\le1\}$, the weakly singular integral
$$\int_T\frac{dx\,dy}{\sqrt{x^2+y^2}}=\log(1+\sqrt2).$$
Under [[def-duffy-reference-triangle-map]], its transformed amplitude is $G(r,s)=(1+s^2)^{-1/2}$ with radial weight $r^0$. For every $n\ge1$, [[alg-duffy-weighted-product-gauss-quadrature]] applies with $\alpha=1$, and [[cor-duffy-weighted-product-gauss-error]] bounds its error by $K_0\|\partial_r^{2n}G\|_\infty+K_0\|\partial_s^{2n}G\|_\infty$ with the constants specified there; here $\partial_r^{2n}G=0$.

## Facts & Assumptions

**Given:** The reference triangle $T$ and integrand $(x^2+y^2)^{-1/2}$ away from its vertex.

[F1] [[thm-duffy-weak-singularity-transform]]: for exponent $\alpha=1$ and amplitude $q=1$, the transformed radial weight is $r^0$ and $G(r,s)=(1+s^2)^{-1/2}$.

[F2] [[cor-duffy-weighted-product-gauss-error]]: the weighted product rule error is bounded by the two pure derivative norms with its stated constants.

[F3] [[thm-logarithm-derivative-and-integral]] and [[thm-chain-rule]]: differentiating gives $\frac{d}{ds}\log(s+\sqrt{1+s^2})=(1+s^2)^{-1/2}$ for $s\in[0,1]$. [[thm-ftc-second-part]] evaluates the integral of this continuous derivative by its endpoint increment.

[F4] [[thm-chain-rule]] and [[thm-real-power-continuity-and-derivatives]]: the displayed amplitude is smooth in $s$ because $1+s^2$ is strictly positive.

[F5] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: continuous derivatives on the compact square are bounded.

## Proof

1.1 For $G(r,s)=(1+s^2)^{-1/2}$, the transformed integral in [F1] is $\int_0^1\int_0^1G(r,s)dsdr$. An antiderivative in $s$ is the logarithm in [F3], so the integral equals $\log(1+\sqrt2)-\log1=\log(1+\sqrt2)$. [F1, F3, algebra]

2.1 The function $G$ is smooth on the compact square by [F4], and its derivatives are bounded there by [F5]. The Duffy weighted product rule therefore has the error bound [F2]; since $G$ is independent of $r$, its positive-order $r$ derivative vanishes. [F2, F4, F5, given, algebra] ∎

