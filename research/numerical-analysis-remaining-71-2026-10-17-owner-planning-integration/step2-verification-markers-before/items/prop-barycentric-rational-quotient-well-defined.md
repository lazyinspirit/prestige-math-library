---
id: prop-barycentric-rational-quotient-well-defined
kind: proposition
title: Barycentric rational quotients are defined and interpolate at support nodes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-barycentric-rational-quotient
  - lem-barycentric-denominator-polynomial-nonzero
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Yuji Nakatsukasa, Olivier Sète, and Lloyd N. Trefethen, The AAA algorithm for rational approximation, Section 2
      url: https://people.maths.ox.ac.uk/trefethen/AAAfinal.pdf
    - title: Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation, Section 9.2
      url: https://people.maths.ox.ac.uk/trefethen/barycentric.pdf
---

## Statement

For the data and nonzero weights in [[def-barycentric-rational-quotient]],
$Q$ is not the zero polynomial, the rational function $P/Q$ is well-defined,
and $r(z_j)=f_j$ for each support node $z_j$.

## Facts & Assumptions

**Given:** Distinct complex nodes $z_1,\ldots,z_k$, complex data $f_j$, and nonzero complex weights $w_j$.

[F1] [[def-barycentric-rational-quotient]]: $P(z)=\sum_jw_jf_j\prod_{\ell\ne j}(z-z_\ell)$ and $Q(z)=\sum_jw_j\prod_{\ell\ne j}(z-z_\ell)$.

[F2] [[lem-barycentric-denominator-polynomial-nonzero]]: for distinct nodes and nonzero weights, $Q(z_j)=w_j\prod_{\ell\ne j}(z_j-z_\ell)\ne0$ at each support node, so $Q$ is not the zero polynomial.

## Proof

1.1 By [F2], $Q$ is not the zero polynomial. The definition [F1] therefore forms a rational function $P/Q$ for these data. [given, F1, F2]

2.1 At $z_j$, all summands of $P$ and $Q$ except the $j$th vanish. Thus $P(z_j)=w_jf_j\prod_{\ell\ne j}(z_j-z_\ell)=f_jQ(z_j)$, and [F2] gives $Q(z_j)\ne0$. Hence $r(z_j)=f_j$. Canceling a common polynomial factor cannot introduce a zero into the reduced denominator at $z_j$, since the original $Q(z_j)$ is nonzero. This proves the support convention. [F1, F2, step 1.1, algebra] ∎

