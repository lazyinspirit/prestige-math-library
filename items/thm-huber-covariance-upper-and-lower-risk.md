---
id: thm-huber-covariance-upper-and-lower-risk
kind: theorem
title: "Dense Gaussian Huber covariance: high-probability upper and capped lower bounds"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-huber-covariance-model
  - def-bounded-spectrum-covariance-class
  - def-matrix-depth-covariance-estimator
  - lem-measurable-matrix-depth-maximizer-selection
  - lem-huber-matrix-depth-estimator-operator-error
  - lem-clean-dense-gaussian-covariance-minimax-lower-bound
  - lem-huber-covariance-contamination-modulus-lower-bound
  - lem-huber-covariance-ambient-action-tail-lower-bound
  - def-axiom-of-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: AC is inherited through the Gaussian covariance model, the clean lower bound's Fano packing theorem in F2 and step 1.2, and the mixture equalization used by F4 in step 2.1. The local error bounds and rate algebra add no further choice.
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, Theorems 3.1, 3.2 and 5.1"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics Lecture Notes, MIT OpenCourseWare, Chapter 5"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
dependency_level: 7
---

## Statement

Assume AC. Fix $M>0$. Let $X_1,\ldots,X_n$ be independent with common law
$P_{\epsilon,\Sigma,Q}$ from [[def-huber-covariance-model]], where
$\Sigma\in\mathcal F_p(M)$ and $Q$ is arbitrary. If $0\le\epsilon<1/5$,
$0<\delta<1/2$, and
$C_1(p+\log(1/\delta))/n<1$ for a sufficiently large universal $C_1$,
then every Borel measurable dense matrix-depth estimator, from either the global positive semidefinite correspondence or the bounded-class correspondence,
$\widehat\Sigma=\widehat\Gamma/\beta$ from
[[def-matrix-depth-covariance-estimator]] satisfies
$$\|\widehat\Sigma-\Sigma\|_{\rm op}^2 \le C_M\left[\left(\frac pn\vee\epsilon^2\right) +\frac{\log(1/\delta)}n\right]$$
with probability at least $1-2\delta$, uniformly over $Q$ and
$\Sigma\in\mathcal F_p(M)$.

Such Borel maximizing selectors exist by [[lem-measurable-matrix-depth-maximizer-selection]].

There are constants $c_M,c_M'>0$ such that for every $p,n\ge1$ and every $0\le\epsilon\le1$,
$$\inf_{\widetilde\Sigma}\sup_{\Sigma\in\mathcal F_p(M)}\sup_Q P_{\epsilon,\Sigma,Q}^{\otimes n}\!\left\{ \|\widetilde\Sigma-\Sigma\|_{\rm op}^2 \ge c_M\min\left\{1,\frac pn\vee\epsilon^2\right\}\right\}\ge c_M'.$$
The infimum is over all Borel maps $(\mathbb R^p)^n\to\mathbb R^{p\times p}$.
The constants may depend on $M$.

## Facts & Assumptions

**Given:** AC, the Gaussian Huber model, $\Sigma\in\mathcal F_p(M)$, arbitrary contaminating law $Q$, and the stated confidence and sample-size conditions.

[F1] [[lem-huber-matrix-depth-estimator-operator-error]] gives the directional operator-error bound for the dense sphere family, for a Borel statistic satisfying the empirical-depth comparison.

[F2] [[lem-clean-dense-gaussian-covariance-minimax-lower-bound]] gives, under AC, the clean tail-risk lower bound of order $\min\{1,p/n\}$ for all $p,n\ge1$, retaining the original small-ratio result.

[F3] [[lem-huber-covariance-contamination-modulus-lower-bound]] gives $\omega(\epsilon,\mathcal F_p(M))\ge d_M\epsilon^2$.

[F4] [[lem-huber-covariance-ambient-action-tail-lower-bound]]: under AC, a clean tail-risk lower bound for all matrix-valued estimators and a finite contamination modulus give the Huber lower bound at threshold $\frac1{16}(M_0\vee\omega)$, for the same unrestricted action space.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: for real symmetric $A$, $\|A\|_{\rm op}=\sup_{\|u\|_2=1}|u^TAu|$.

[F6] [[def-bounded-spectrum-covariance-class]]: every $\Sigma\in\mathcal F_p(M)$ is positive semidefinite and has operator norm at most $M$.

[F7] [[lem-measurable-matrix-depth-maximizer-selection]] supplies Borel maximizers for the global and bounded-class correspondences. A global maximizer dominates $\beta\Sigma$ in depth; in the bounded case $\beta\Sigma$ belongs to the search class by the target spectrum bound.

## Proof

1.1 By [F7], Borel maximizers exist in both versions and every such maximizer satisfies the comparison premise in [F1]. Take $U=S^{p-1}$, one support $S_1=[p]$, and $r=p$ in [F1]. For a real symmetric matrix $A$, [F5] gives $\|A\|_{\rm op}=\sup_{\|u\|_2=1}|u^TAu|$. Thus $\|\widehat\Sigma-\Sigma\|_{\rm op} \le C_M(\epsilon+\sqrt{(p+\log(1/\delta))/n})$. Squaring and using $(a+b)^2\le2a^2+2b^2$ gives the stated upper rate. [F1, F5, F7, algebra]

1.2 The all-regime clean lower bound [F2] supplies constants $a_M,b_0>0$ such that the clean tail-risk premise in [F4] holds for every $p,n\ge1$ with $M_0=a_M\min\{1,p/n\}$ and $c_0=b_0$. By [F3], the contamination modulus is at least $d_M\epsilon^2$. It is finite because $\|\Sigma_0-\Sigma_1\|_{\rm op}^2\le4M^2$ for every pair in the bounded class. [F2, F3, F4, F6, algebra]

2.1 Apply [F4] with the same unrestricted matrix-valued estimator class as in the Statement and the inputs from step 1.2. Its threshold $\frac1{16}(M_0\vee\omega)$ is at least $\frac1{16}\min\{a_M,d_M\}\bigl(\min\{1,p/n\}\vee\epsilon^2\bigr)$. Since $0\le\epsilon\le1$, $\min\{1,p/n\}\vee\epsilon^2=\min\{1,(p/n)\vee\epsilon^2\}$. Lowering to this capped threshold only enlarges the event, and the probability lower bound is $\min(b_0,1/2)$. Renaming the two positive constants proves the all-dimension lower assertion. Its original uncapped rate remains valid whenever $p/n\le1$. [F2, F3, F4, step 1.2, algebra] ∎

## Authoring status

The lower proof uses the current batch-17 and batch-31 supplier bodies. The local measurable-selection proof discharges the selector-existence obligation for both global and bounded-class matrix-depth versions.
