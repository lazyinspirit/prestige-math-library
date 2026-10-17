---
id: thm-modified-patankar-euler-positive-conservative
kind: theorem
title: "Modified Patankar Euler preserves positivity and total mass"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-modified-patankar-euler
  - def-finite-conservative-production-destruction-system
  - lem-strict-column-dominance-implies-nonnegative-inverse
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the proof is finite matrix algebra."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, §2"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Sergio Blanes, Arieh Iserles, and Shev Macnamara, Positivity-preserving methods for ordinary differential equations, §3.4"
      url: "https://personales.upv.es/serblaza/2022_M2AN.pdf"
verification:
  precheck: pass
---

## Statement

For a finite conservative PDS [[def-finite-conservative-production-destruction-system]] with domain $\Omega$, an admissible input $y^n\in\Omega_+$, step $h>0$, and any positive denominators $\sigma_i>0$, the step of [[alg-modified-patankar-euler]] is uniquely defined, satisfies $y^{n+1}\ge0$, and conserves total mass:

$$\sum_{i=1}^m y_i^{n+1}=\sum_{i=1}^m y_i^n.$$

If $y^n>0$ coordinatewise, then $y^{n+1}>0$ coordinatewise. These conclusions do not assert order for arbitrary denominators; the first-order choice and its accuracy hypotheses are treated separately.

## Facts & Assumptions

**Given:** The finite conservative PDS identities, $y^n\in\Omega_+$, $h>0$, and $\sigma_i>0$ for every compartment.

[F1] [[def-finite-conservative-production-destruction-system]]: $p_{ij}=d_{ji}\ge0$, $p_{ii}=d_{ii}=0$, and $y_i'=\sum_j(p_{ij}-d_{ij})$.

[F2] [[alg-modified-patankar-euler]]: $My^{n+1}=y^n$, with $M_{ii}=1+h\sum_{k\ne i}d_{ik}(y^n)/\sigma_i$ and $M_{ij}=-h p_{ij}(y^n)/\sigma_j$ for $i\ne j$.

[F3] [[lem-strict-column-dominance-implies-nonnegative-inverse]]: a finite matrix with positive diagonal, nonpositive off-diagonal entries, and strict column diagonal dominance has a nonnegative inverse; the inverse maps positive vectors to positive vectors.

## Proof

1.1 For every $j$, $M_{jj}>0$ and $M_{ij}\le0$ when $i\ne j$ by [F1]–[F2]. Moreover, $M_{jj}-\sum_{i\ne j}|M_{ij}|=1+\frac{h}{\sigma_j}\sum_{k\ne j}d_{jk}(y^n)-\frac{h}{\sigma_j}\sum_{i\ne j}p_{ij}(y^n)=1$, because $p_{ij}=d_{ji}$ makes the two finite sums equal. Thus [F3] applies: $M$ is invertible and $y^{n+1}=M^{-1}y^n\ge0$, with strict positivity when $y^n>0$. [F1, F2, F3, algebra]

2.1 The same identity gives each column sum $\sum_iM_{ij}=1$. Therefore $\sum_i y_i^n=\sum_i(My^{n+1})_i=\sum_j(\sum_iM_{ij})y_j^{n+1}=\sum_jy_j^{n+1}$. This proves exact summed conservation. [F1, F2, step 1.1, algebra] ∎
