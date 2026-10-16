---
id: thm-qa-20-first-order-resource-bound
kind: theorem
title: First-order query and gate cost
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - alg-qa-20-first-order-term-list-simulation
  - thm-qa-20-first-order-commutator-error
  - def-qa-20-term-list-access-model
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §27.3, printed pp. 134–135: first-order step and gate scaling."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §9.2, printed pp. 72–74: first-order simulation and error accumulation."
---

## Statement

For the term-list input $H=\sum_{j=1}^mH_j$ in [[def-qa-20-term-list-access-model]], let $t$ be a finite time code in its expression language, let $0<\epsilon<1$ be rational, and let $C_2\ge0$ be a certified rational satisfying $C_2\ge\sum_{1\le j<\ell\le m}\|[H_j,H_\ell]\|$. Supply a certified rational upper bound $R\ge t^2C_2/\epsilon$ and put $r=\max\{1,\lceil R\rceil\}$ and $h=t/r$. When $t\ne0$, suppose each term call at the exact signed code $h$ is supported and declared, directly or through separately declared inverse or time-reversed access, with at most $q_j$ named queries and $g_j$ gate occurrences. Let $Q_{\rm wrap}$ and $G_{\rm wrap}$ be the separately declared query and gate costs of uniform circuit composition and generation. For $t\ne0$, the algorithm [[alg-qa-20-first-order-term-list-simulation]] uses at most $r\sum_jq_j+Q_{\rm wrap}$ queries and $r\sum_jg_j+G_{\rm wrap}$ gates. Its exact term product has error at most $\epsilon/2$. If, when $t\ne0$, implemented calls are unitary and their total operator-norm error over all $rm$ calls is at most $\epsilon/2$, the returned unitary is within $\epsilon$ of $U_H(t)$. When $t=0$, the algorithm returns the identity with no term calls. Coefficient, description-bit, ancilla, and classical-generation resources remain separate coordinates.

## Facts & Assumptions

**Given:** A finite term-list input, finite time code $t$ in its expression language, rational $0<\epsilon<1$, certified rational $C_2$, certified rational upper bound $R\ge t^2C_2/\epsilon$, the resulting integer $r=\max\{1,\lceil R\rceil\}$, and the declared costs for calls at $h=t/r$ when $t\ne0$.

[F1] [[alg-qa-20-first-order-term-list-simulation]] returns the identity with no term calls when $t=0$; otherwise it makes exactly $r$ repetitions of $m$ term calls, where $r=\max\{1,\lceil R\rceil\}$ and $R\ge t^2C_2/\epsilon$.

[F2] [[thm-qa-20-first-order-commutator-error]] bounds the exact product-formula error by $\frac{t^2}{2r}\sum_{1\le j<\ell\le m}\|[H_j,H_\ell]\|$.

[F3] [[def-qa-20-term-list-access-model]] records per-call query and gate costs, implementation errors, and composition/generation overhead as separate charges.

[F4] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]] gives submultiplicativity.

[F5] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] defines the operator norm as the maximum over unit vectors.

## Proof


1.1 If $t=0$, the algorithm returns the identity and the exact evolution is also the identity. Otherwise $r=\max\{1,\lceil R\rceil\}\ge R\ge t^2C_2/\epsilon$. Since $C_2$ bounds the commutator sum, [F2] gives exact product error at most $t^2C_2/(2r)\le\epsilon/2$. [given, F1, F2, algebra]

2.1 Replace the exact term calls one at a time by their supplied unitary implementations. For unitaries, the definition [F5] and submultiplicativity [F4] show that left and right multiplication preserve operator norm. Thus a telescoping expansion of the two products bounds the operator-norm change by the sum of the individual call errors. The input certificate in [F1] makes this total at most $\epsilon/2$. The triangle inequality with step 1.1 gives total error at most $\epsilon$. [F1, step 1.1, F3, F4, F5, algebra]

3.1 For $t\ne0$, each of the $m$ term circuits occurs once in each of $r$ repetitions, so their query and gate totals are $r\sum_jq_j$ and $r\sum_jg_j$. For $t=0$ there are no term calls, and hence zero term-call query and gate costs. Adding the separately declared composition/generation overhead gives the stated bounds in either branch; the other resource coordinates are charged separately by [F3]. [F1, F3, algebra] ∎
