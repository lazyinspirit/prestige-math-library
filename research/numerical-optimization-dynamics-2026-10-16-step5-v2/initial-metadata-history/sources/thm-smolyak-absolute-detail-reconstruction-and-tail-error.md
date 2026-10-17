---
id: thm-smolyak-absolute-detail-reconstruction-and-tail-error
kind: theorem
title: Absolute detail reconstruction and omitted-tail error bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 4
deps: [def-smolyak-cubature, def-smolyak-absolute-detail-summability, lem-smolyak-dyadic-tensor-simpson-convergence, lem-smolyak-mixed-simpson-detail-decay, lem-smolyak-rectangular-telescope, lem-triangle-inequality-finite, lem-finite-sum-laws, lem-of-triangle-inequality, def-real-limit, lem-rat-embeds-dense, def-smolyak-univariate-level-hierarchy]
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

Let $d\ge1$, let $f:[0,1]^d\to\mathbb R$ be continuous, and use a level
hierarchy as in [[def-smolyak-univariate-level-hierarchy]]. Suppose its tensor
rules satisfy $Q_L^{\otimes d}(f)\to I_d(f)$ and its detail family is absolutely
summable in the sense of [[def-smolyak-absolute-detail-summability]]. For every
finite downward-closed $\Lambda\subseteq\mathbb N_0^d$ containing $0$,
$$|I_d(f)-Q_\Lambda(f)|\le\sum_{\ell\in\mathbb N_0^d\setminus\Lambda}|\delta_\ell(f)|.$$
In particular, the dyadic composite-Simpson hierarchy satisfies the convergence
hypothesis for continuous $f$ by
[[lem-smolyak-dyadic-tensor-simpson-convergence]], and for the mixed-derivative
class of [[lem-smolyak-mixed-simpson-detail-decay]] the same hierarchy also
satisfies absolute summability.

## Facts & Assumptions

**Given:** A dimension $d\ge1$, continuous $f:[0,1]^d\to\mathbb R$, a level hierarchy whose tensor rules converge on $f$ to $I_d(f)$, absolute summability of its detail family, and a finite downward-closed $\Lambda$ containing $0$.

[F1] [[def-smolyak-cubature]]: $Q_\Lambda(f)$ is the finite sum of the tensor details indexed by $\Lambda$.

[F2] [[def-smolyak-absolute-detail-summability]]: a nonnegative multi-index sum is the supremum of its finite subsums when these are bounded; the omitted tail uses the same definition on the complement of $\Lambda$.

[F3] [[lem-smolyak-rectangular-telescope]]: the sum of details over $R_L=\{\ell:0\le\ell_j\le L\}$ is $Q_L^{\otimes d}$.

[F4] [[lem-smolyak-dyadic-tensor-simpson-convergence]]: $Q_L^{\otimes d}(f)\to I_d(f)$.

[F5] [[lem-triangle-inequality-finite]]: the absolute value of each finite detail sum is at most the sum of its absolute terms.

[F6] [[lem-finite-sum-laws]]: finite sums split over disjoint finite index sets.

[F7] [[def-real-limit]]: convergence of a real sequence is tested using every positive rational tolerance.

[F8] [[lem-of-triangle-inequality]]: $|x+y|\le|x|+|y|$ for real $x,y$.

[F9] [[lem-smolyak-mixed-simpson-detail-decay]]: under its continuous mixed fourth-derivative hypotheses, every finite absolute-detail subsum has the common finite bound $\sum_{S\subseteq[d]}M_S(17/43200)^{|S|}$.

[F10] [[lem-rat-embeds-dense]]: below every positive real lies a positive rational.

## Proof

1.1 Choose $L$ large enough that $\Lambda\subseteq R_L$. By [F1], [F3], and [F6], $Q_L^{\otimes d}(f)-Q_\Lambda(f)=\sum_{\ell\in R_L\setminus\Lambda}\delta_\ell(f)$. The index set on the right is finite and is contained in $\mathbb N_0^d\setminus\Lambda$. [given, F1, F3, F6, choose]

2.1 By [F5] and [F2], the absolute value of the right side in step 1.1 is at most the omitted-detail tail $T_\Lambda:=\sum_{\ell\notin\Lambda}|\delta_\ell(f)|$ for every sufficiently large $L$. Put $x_L:=Q_L^{\otimes d}(f)-Q_\Lambda(f)$ and $z:=I_d(f)-Q_\Lambda(f)$; the convergence hypothesis in **Given** says $|x_L-z|=|Q_L^{\otimes d}(f)-I_d(f)|$ is eventually below every positive rational tolerance. If $|z|>T_\Lambda$, [F10] supplies a positive rational $\varepsilon$ with $2\varepsilon<|z|-T_\Lambda$. For sufficiently large $L$, both $\Lambda\subseteq R_L$ and $|x_L-z|<\varepsilon$ hold by finiteness of $\Lambda$ and [F7]. The triangle inequality [F8] then gives $|x_L|\ge |z|-|x_L-z|>|z|-\varepsilon>T_\Lambda$, contradicting the preceding tail bound. Hence the displayed omitted-tail inequality holds. [given, F2, F5, F7, F8, F10, step 1.1, algebra]

3.1 For the dyadic composite-Simpson hierarchy, [F4] supplies the convergence hypothesis in **Given**. If the mixed-derivative hypotheses of [F9] hold, its common bound makes the finite subsums of $\sum_{\ell\in\mathbb N_0^d}|\delta_\ell(f)|$ bounded above. By the definition [F2], the full absolute-detail sum is therefore defined and finite, so step 2.1 applies and proves the stated particular error case. [given, F2, F4, F9, step 2.1, algebra] ∎
