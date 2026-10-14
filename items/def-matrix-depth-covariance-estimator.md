---
id: def-matrix-depth-covariance-estimator
kind: definition
title: Matrix depth and covariance estimators
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-bounded-spectrum-covariance-class
  - def-block-sparse-covariance-class
  - def-borel-sigma-algebra
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-nonnegative-weighted-sum-of-measures
  - thm-nonnegative-weighted-sums-of-measures
  - def-probability-measure
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - lem-matrix-depth-gaussian-scale-constant-exists-uniquely
  - def-axiom-of-choice
justified_by:
  - lem-matrix-depth-maximizer-exists-on-compact-classes
  - lem-measurable-matrix-depth-maximizer-selection
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: AC is inherited through the Gaussian scale constant beta. The definition returns the full argmax correspondence and selects no matrix.
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, §3.1"
      url: "https://arxiv.org/pdf/1506.00691"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
dependency_level: 3
---

## Definition

For $p\ge1$, write $S^{p-1}:=\{u\in\mathbb R^p:\|u\|_2=1\}$. Let
$U$ be a nonempty subset of this sphere, let $P$ be a probability law on
$\mathbb R^p$, and let $\Gamma\succeq0$. Its **matrix depth relative to
$U$** is
$$D_U(\Gamma,P):=\inf_{u\in U}\min\left\{ P((u^TX)^2\le u^T\Gamma u),P((u^TX)^2\ge u^T\Gamma u)\right\},$$
where $X$ has law $P$. Both weak inequalities include ties.

For observations $x_1,\ldots,x_n$, let
$$P_n:=\frac1n\sum_{i=1}^n\delta_{x_i}$$
on the Borel sigma-algebra of $\mathbb R^p$ ([[def-borel-sigma-algebra]]).
Each Dirac measure is a probability measure by [[def-dirac-measure]] and
[[prop-dirac-measure-is-a-probability-measure]]. Their finite nonnegative
weighted sum is a measure by [[def-nonnegative-weighted-sum-of-measures]]
and [[thm-nonnegative-weighted-sums-of-measures]], and its total mass is
$n^{-1}\sum_i1=1$; hence $P_n$ is a probability law by
[[def-probability-measure]]. Let $\beta>0$ be the constant of
[[lem-matrix-depth-gaussian-scale-constant-exists-uniquely]].
The **global dense** depth correspondence is $\operatorname{Argmax}_{\Gamma\succeq0}D_{S^{p-1}}(\Gamma,P_n)$, over symmetric positive semidefinite matrices. For $1\le s\le p/2$, define the global single-block class $\mathcal F_{p,s}:=\bigcup_{c>0}\mathcal F_{p,s}(c)$ and the **global single-block sparse** correspondence $\operatorname{Argmax}_{\Gamma\in\mathcal F_{p,s}}D_{U_s}(\Gamma,P_n)$. These are the unrestricted-spectrum versions; no known spectral bound is needed to define their selectors.

For known $M>0$, the dense bounded-class depth correspondence is
$$\operatorname{Argmax}_{\Gamma\in\mathcal F_p(\beta M)} D_{S^{p-1}}(\Gamma,P_n).$$
For known integer $1\le s\le p/2$, the single-block sparse version is
$$\operatorname{Argmax}_{\Gamma\in\mathcal F_{p,s}(\beta M)} D_{U_s}(\Gamma,P_n),$$
where the classes and $U_s$ are defined in
[[def-bounded-spectrum-covariance-class]] and
[[def-block-sparse-covariance-class]]. A **measurable matrix-depth estimator**
is a Borel measurable selector $\widehat\Gamma$ from the applicable argmax
correspondence, with covariance output $\widehat\Sigma=\widehat\Gamma/\beta$.
Either global correspondence or the applicable bounded-class correspondence may be used. The compact search restriction contains $\beta\Sigma$ whenever the target
belongs to the corresponding class; it makes no computational feasibility
claim.

## Remarks

Existence of a maximizer and existence of a measurable selector are separate
obligations. Both are proved locally for the bounded classes, and the measurable-selection lemma also proves existence of Borel global maximizers by a data-dependent compact cap. Global argmax fibers are not asserted compact.
