---
id: thm-mprk22-1-positive-conservative
kind: theorem
title: "MPRK22(1) preserves positivity and total mass on positive inputs"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-mprk22-1
  - def-finite-conservative-production-destruction-system
  - lem-strict-column-dominance-implies-nonnegative-inverse
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the argument is finite matrix algebra."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, Lemmas 2.6–2.7"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Sergio Blanes, Arieh Iserles, and Shev Macnamara, Positivity-preserving methods for ordinary differential equations, §3.4"
      url: "https://personales.upv.es/serblaza/2022_M2AN.pdf"
verification:
  precheck: pass
---

## Statement

For every finite conservative PDS [[def-finite-conservative-production-destruction-system]], every strictly positive input $y^n>0$, and every step size $h>0$, the stage and output of [[alg-mprk22-1]] are uniquely defined, strictly positive, and conserve total mass:

$$z>0,\qquad y^{n+1}>0,\qquad \sum_i z_i=\sum_i y_i^n=\sum_i y_i^{n+1}.$$

These preservation properties do not use the smoothness or compact-tube assumptions needed for the separate second-order error theorem.

## Facts & Assumptions

**Given:** A finite conservative PDS, $y^n>0$, and $h>0$.

[F1] [[def-finite-conservative-production-destruction-system]]: $p_{ij}=d_{ji}\ge0$ and the PDS uses only paired internal transfers.

[F2] [[alg-mprk22-1]]: the stage solves $z=y^n+hA(y^n)z$ with $A(y^n)$ having off-diagonal entries $p_{ij}(y^n)/y_j^n$ and diagonal entries that make each column sum zero; the final solve is $(I-hB(y^n,z))y^{n+1}=y^n$, where $B_{ij}=(p_{ij}(y^n)+p_{ij}(z))/(2z_j)$ off the diagonal and each column of $B$ sums to zero.

[F3] [[lem-strict-column-dominance-implies-nonnegative-inverse]]: a matrix with positive diagonal, nonpositive off-diagonal entries, and strict column diagonal dominance is invertible with nonnegative inverse; its inverse maps a positive vector to a positive vector.

## Proof


1.1 For the stage, $M^{(1)}:=I-hA(y^n)$ has off-diagonal entries $-hp_{ij}(y^n)/y_j^n\le0$ and diagonal entries $1+h\sum_{i\ne j}p_{ij}(y^n)/y_j^n>0$ in column $j$. The sum of the absolute off-diagonal entries in that column is $h\sum_{i\ne j}p_{ij}(y^n)/y_j^n$, so its strict column-dominance margin is $1$. By [F3], $z=(M^{(1)})^{-1}y^n>0$. Also $\sum_i M^{(1)}_{ij}=1$ for every column, hence $\sum_i z_i=\sum_i y_i^n$. [F1, F2, F3, algebra]

2.1 Since $z>0$, every denominator in $B(y^n,z)$ is positive. Its off-diagonal entries are nonnegative, its diagonal entries are nonpositive, and its columns sum to zero by [F2]. Thus $M^{(2)}:=I-hB(y^n,z)$ has positive diagonal, nonpositive off-diagonal entries, and column diagonal-dominance margin $1$. Applying [F3] to $M^{(2)}$ gives a unique $y^{n+1}=(M^{(2)})^{-1}y^n>0$. [F2, F3, step 1.1, algebra]

3.1 Every column of $M^{(2)}$ sums to one, so $\sum_i y_i^{n+1}=\sum_i(M^{(2)}y^{n+1})_i=\sum_i y_i^n$. Together with step 1.1, this proves all stated positivity and conservation equalities. [F2, step 1.1, step 2.1, algebra] ∎
