---
id: thm-qa-37-exhaustive-b6-compiler-terminates
kind: theorem
title: "Certified B6 block-pair search terminates"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps:
  - alg-qa-37-exhaustive-b6-block-pair-compiler
  - lem-qc-tqc-b6-joint-su5-su8-density
  - def-countable-choice
  - def-qa-37-certified-matrix-input
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
justified_by: []
axiom_use: "Assumes exactly ACω through joint B6 density; no full Axiom of Choice is used."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, Fibonacci braid density discussion, PDF pp. 53–57."
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: "§4, Theorem 4.1 and proof, printed pp. 17–21; different Jones construction."
---

## Statement

Assume $\mathrm{AC}_\omega$. For every certified Cauchy input pair
$(T_5,T_8)\in SU(5)\times SU(8)$ and every positive rational
$\varepsilon$, the exhaustive compiler of
[[alg-qa-37-exhaustive-b6-block-pair-compiler]] halts with one six-strand
Fibonacci braid word whose normalized total-charge-$1$ and total-charge-$\tau$
matrices are each within operator norm $\varepsilon$ of $T_5,T_8$,
respectively. Density proves termination, but this result gives no useful
joint-block word-length or search-time bound.

## Facts & Assumptions

**Given:** The normalized B6 representation, $\mathrm{AC}_\omega$, certified
Cauchy names for $T_5,T_8$, and rational $\varepsilon>0$.

[F1] The joint closure of the normalized B6 image contains
$SU(5)\times SU(8)$ under ACω. [[lem-qc-tqc-b6-joint-su5-su8-density]]

[F2] Each target name returns rational complex matrices converging entrywise
with the stated certified precision. [[def-qa-37-certified-matrix-input]]

[F3] The compiler enumerates every finite B6 word and dovetails all
precision levels; an accepted certificate implies both operator errors are
strictly below $\varepsilon$.
[[alg-qa-37-exhaustive-b6-block-pair-compiler]]

[F4] For a $d\times d$ matrix, $\|A\|_F\le\sqrt d\|A\|_{\rm op}$, and $\|A\|_{\rm op}\le\|A\|_F$.
[[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]

[A1] Assume exactly $\mathrm{AC}_\omega$ as used by [F1].
[[def-countable-choice]]

## Proof

1.1 The product of open operator-norm $\varepsilon/128$-balls around $T_5,T_8$ is a neighborhood in $SU(5)\times SU(8)$. By [A1] and [F1], it meets the normalized B6 image, so there is one finite braid word $b_*$ with both block operator errors less than $\varepsilon/128$. For dimension $d\le8$, the real-coordinate $\ell^1$ norm of a complex matrix is at most $\sqrt2 d\|A\|_F\le\sqrt2 d^{3/2}\|A\|_{\rm op}\le32\|A\|_{\rm op}$ by [F4]. Hence the exact coordinate-sum distance in either block is strictly less than $\varepsilon/4$. [A1, F1, F4, given, choose, algebra]

2.1 Fix this finite word. Its exact block matrices and the targets have coordinate approximants converging to their entries by [F2]–[F3]. Therefore $s_{d,b_*,p}$ converges to the real-coordinate $\ell^1$ distance between the exact word block and target; by step 1.1 that limit is less than $\varepsilon/4$. Since $4d2^{-p}\to0$, some finite $p$ makes both certificates strictly below $\varepsilon$. Dovetailing eventually examines $(b_*,p)$, and certificate soundness [F3] ensures acceptance. Thus the procedure halts. ACω enters only through [A1] and [F1]; density gives no search-index bound. [F2, F3, A1, step 1.1, algebra, F1] ∎
