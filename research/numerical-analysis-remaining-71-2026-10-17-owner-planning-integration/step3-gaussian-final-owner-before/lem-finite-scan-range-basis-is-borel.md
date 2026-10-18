---
id: lem-finite-scan-range-basis-is-borel
kind: lemma
title: Borel measurability and range correctness of the finite scan
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [alg-gaussian-randomized-range-finder, cor-continuous-functions-are-borel-measurable]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Algorithms 4.1 and 4.4 and Gaussian conventions in section 10.1; local prerequisite proof"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
---

## Statement

Assume Countable Choice. Apply the column scan specified in
[[alg-gaussian-randomized-range-finder]] to any $Y\in F^{m\times s}$,
$F\in\{\mathbb R,\mathbb C\}$, allowing $s=0$. It terminates and returns an
orthonormal basis $Q$ of $\operatorname{Ran}(Y)$. On each output-rank stratum
$Q$ is Borel measurable, with the variable-size output interpreted in the
finite disjoint union of the matrix spaces $F^{m\times r}$. The projector
$QQ^*$ is a Borel function of $Y$. Consequently the range-finder projector
and $\|(I-QQ^*)A\|_2$ are Borel functions of the sketch for fixed $A$.

## Facts & Assumptions

**Given:** Countable Choice and a finite real or complex input matrix, including an empty column list.

[F1] The scan subtracts projections onto previously retained vectors, skips zero residuals, and normalizes nonzero residuals; in the complex case it fixes the phase by the first nonzero coordinate. [[alg-gaussian-randomized-range-finder]]

[F2] Continuous maps of finite real coordinate spaces are Borel measurable under Countable Choice. [[cor-continuous-functions-are-borel-measurable]]

## Proof

1.1 After each scanned column, the retained vectors are orthonormal and span the scanned columns: subtracting their projections gives an orthogonal residual; a zero residual adds no span, while normalizing and multiplying a nonzero residual by a unit complex scalar adds exactly its line. This proves the invariant by finite induction. There are exactly $s$ scan steps, with no division on a zero branch, so the scan terminates with the asserted basis. If $s=0$ or $Y=0$, it returns the empty basis and zero projector. [given, F1, algebra]

2.1 Record all skip/retain branches and, in the complex case, the first nonzero coordinate at each retain branch. There are finitely many such records. Inductively on a fixed record, residuals are continuous relative to its input stratum; zero and nonzero tests have Borel preimages by [F2]. Normalization is continuous where the norm is positive. If the first nonzero coordinate of the normalized residual is $w_j$, its phase multiplier is $\overline{w_j}/|w_j|$, continuous where $w_j\ne0$; the conditions $w_1=\cdots=w_{j-1}=0$, $w_j\ne0$ are Borel. Thus every record gives a Borel stratum and a relatively continuous output map. Combining finitely many strata gives the claimed Borel basis map. Multiplication $Q\mapsto QQ^*$ is continuous for each rank, so the fixed-size projector is Borel as well. [step 1.1, F1, F2, algebra]

3.1 For fixed $A$, the map $\Omega\mapsto A\Omega$ is continuous. Composing it with step 2.1 gives a Borel projector for the range finder. The matrix norm is continuous, since $|\|X\|_2-\|Z\|_2|\le\|X-Z\|_2\le\|X-Z\|_F$, so the asserted error is Borel too. [step 2.1, F2, algebra] ∎
