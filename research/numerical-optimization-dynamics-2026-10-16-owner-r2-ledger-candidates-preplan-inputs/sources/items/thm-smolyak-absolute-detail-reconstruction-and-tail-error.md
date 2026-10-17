---
id: thm-smolyak-absolute-detail-reconstruction-and-tail-error
kind: theorem
title: Absolute detail reconstruction and omitted-tail error bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 4
deps:
  - def-smolyak-cubature
  - def-smolyak-absolute-detail-summability
  - lem-smolyak-dyadic-tensor-simpson-convergence
  - lem-smolyak-mixed-simpson-detail-decay
  - lem-smolyak-rectangular-telescope
  - lem-triangle-inequality-finite
  - lem-finite-sum-laws
  - lem-of-triangle-inequality
  - def-real-limit
justified_by: []
proof_strategy: direct
axiom_use: None. The proof uses countable levels through explicit finite boxes and absolute tail bounds; no choice principle is used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Numerical integration"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §2"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
---

## Statement

Let $d\ge1$, let $f:[0,1]^d\to\mathbb R$ be continuous, and suppose its detail
family is absolutely summable in the sense of
[[def-smolyak-absolute-detail-summability]]. For every finite downward-closed
$\Lambda\subseteq\mathbb N_0^d$ containing $0$,
$$|I_d(f)-Q_\Lambda(f)|\le\sum_{\ell\in\mathbb N_0^d\setminus\Lambda}|\delta_\ell(f)|.$$
In particular, the hypothesis holds for the mixed-derivative class of
[[lem-smolyak-mixed-simpson-detail-decay]].

## Facts & Assumptions

**Given:** A dimension $d\ge1$, continuous $f:[0,1]^d\to\mathbb R$, absolute summability of its detail family, and a finite downward-closed $\Lambda$ containing $0$.

[F1] [[def-smolyak-cubature]]: $Q_\Lambda(f)$ is the finite sum of the tensor details indexed by $\Lambda$.

[F2] [[def-smolyak-absolute-detail-summability]]: a nonnegative multi-index sum is the supremum of its finite subsums when these are bounded; the omitted tail uses the same definition on the complement of $\Lambda$.

[F3] [[lem-smolyak-rectangular-telescope]]: the sum of details over $R_L=\{\ell:0\le\ell_j\le L\}$ is $Q_L^{\otimes d}$.

[F4] [[lem-smolyak-dyadic-tensor-simpson-convergence]]: $Q_L^{\otimes d}(f)\to I_d(f)$.

[F5] [[lem-triangle-inequality-finite]]: the absolute value of each finite detail sum is at most the sum of its absolute terms.

[F6] [[lem-finite-sum-laws]]: finite sums split over disjoint finite index sets.

[F7] [[def-real-limit]]: convergence of a real sequence means that every positive tolerance eventually bounds its distance from the limit.

[F8] [[lem-of-triangle-inequality]]: $|x+y|\le|x|+|y|$ for real $x,y$.

[F9] [[lem-smolyak-mixed-simpson-detail-decay]]: under its continuous mixed fourth-derivative hypotheses, every finite absolute-detail subsum has the common finite bound $\sum_{S\subseteq[d]}M_S(17/43200)^{|S|}$.

## Proof

1.1 Choose $L$ large enough that $\Lambda\subseteq R_L$. By [F1], [F3], and [F6], $Q_L^{\otimes d}(f)-Q_\Lambda(f)=\sum_{\ell\in R_L\setminus\Lambda}\delta_\ell(f)$. The index set on the right is finite and is contained in $\mathbb N_0^d\setminus\Lambda$. [given, F1, F3, F6, choose]

2.1 By [F5] and [F2], the absolute value of the right side in step 1.1 is at most the omitted-detail tail $T_\Lambda:=\sum_{\ell\notin\Lambda}|\delta_\ell(f)|$. By [F4], its left side converges as $L\to\infty$ to $I_d(f)-Q_\Lambda(f)$. If the absolute value of this limit exceeded $T_\Lambda$, choose $\varepsilon$ to be half the positive difference and use [F7] to take $L$ with the left side within $\varepsilon$ of its limit; [F8] would then force the left-side absolute value to exceed $T_\Lambda$, contradicting the preceding bound. Hence the displayed omitted-tail inequality holds. [given, F2, F4, F5, F7, F8, step 1.1, algebra]

3.1 If the mixed-derivative hypotheses of [F9] hold, its common bound makes the finite subsums of $\sum_{\ell\in\mathbb N_0^d}|\delta_\ell(f)|$ bounded above. By the definition [F2], the full absolute-detail sum is therefore defined and finite, so step 2.1 applies to this class and proves the stated particular error case. [given, F2, F9, step 2.1, algebra] ∎
