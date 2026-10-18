---
id: lem-bessel-casoratian-invariant-positive
kind: lemma
title: Positive discrete Wronskian for the Bessel recurrence pair
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-order-bessel-series, def-bessel-complementary-recurrence-solution, lem-integer-order-bessel-recurrences-and-ode, lem-bessel-j-zero-data-exclusion]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §3.6, Linear Difference Equations
      url: https://dlmf.nist.gov/3.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 4
---

## Statement

Fix real $x>0$, let $J_j(x)$ be as in
[[def-integer-order-bessel-series]], and let $D_j(x)$ be as in
[[def-bessel-complementary-recurrence-solution]]. Define
$W_j=J_jD_{j+1}-J_{j+1}D_j$. Then

$$W_j=J_0(x)^2+J_1(x)^2>0\qquad(j\ge0).$$

In particular, the two recurrence solutions $J$ and $D$ are linearly
independent.

## Facts & Assumptions

**Given:** A real $x>0$ and the two sequences in the statement.

[F1] [[lem-integer-order-bessel-recurrences-and-ode]]:
$J_{j+1}=2jJ_j/x-J_{j-1}$ for $j\ge1$.

[F2] [[def-bessel-complementary-recurrence-solution]]:
$D_{j+1}=2jD_j/x-D_{j-1}$, with $D_0=-J_1$ and $D_1=J_0$.

[F3] [[lem-bessel-j-zero-data-exclusion]]: $J_0(x)$ and $J_1(x)$ are not both
zero.

## Proof
1.1 Using [F1] and [F2], for $j\ge1$, $$W_j=J_j\left(\frac{2j}{x}D_j-D_{j-1}\right) -\left(\frac{2j}{x}J_j-J_{j-1}\right)D_j =J_{j-1}D_j-J_jD_{j-1}=W_{j-1}.$$ Thus $W_j=W_0$ for every $j\ge0$. [F1, F2, algebra]

2.1 By [F2], $W_0=J_0D_1-J_1D_0=J_0^2+J_1^2$, which is strictly positive by [F3]. A linear dependence of $J,D$ would make every $2\times2$ determinant $W_j$ zero, so they are independent. [F2, F3, step 1.1, algebra] ∎