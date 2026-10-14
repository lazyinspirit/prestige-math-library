---
page: m-and-z-estimation-and-uniform-laws
title: "M- and Z-Estimators"
status: draft
items:
  - def-m-estimator
  - def-z-estimator
  - thm-m-estimator-consistency
  - thm-z-estimator-consistency
examples: []
---

This page defines M-estimators as measurable empirical criterion extrema and Z-estimators as measurable approximate roots. A nonsmooth M-criterion need not have a score equation, so the two definitions remain distinct. The consistency results prove the uniform criterion-gap and uniform equation-gap arguments under explicit measurability, separation, and approximate-optimization hypotheses. Their uniform-convergence assumptions remain visible: pointwise convergence alone does not supply a uniform law. The examples show quadratic and absolute criteria, a finite-class uniform law, and failure when the population optimum is not separated.

The concrete uniform-law supplier is [[def-glivenko-cantelli-class]] and [[thm-gc-by-bracketing-entropy]] on Chaining and Uniform Limits. For the M theorem, the class $\{m_\theta:\theta\in\Theta\}$ satisfies its uniform-convergence premise when it is pointwise measurable, has a measurable integrable envelope, and has finite $L^1(P)$ bracketing number at every positive scale. A countable pointwise-dense subclass determines the scalar supremum, so that version is measurable; the supplier's outer-probability convention then agrees with ordinary probability. This uses the supplier's convergence-in-probability branch, which requires no Countable Choice assumption.

For the Z theorem, impose those scalar hypotheses on each coordinate class $\{\psi_{\theta,j}:\theta\in\Theta\}$, $1\le j\le q$. If $U_{n,j}=\sup_\theta|(P_n-P)\psi_{\theta,j}|$, the supplier gives $U_{n,j}=o_P(1)$ for each coordinate. For the fixed norm in the theorem and standard basis vectors $e_j$, the triangle inequality gives
$$\sup_\theta\|(P_n-P)\psi_\theta\|\le\sum_{j=1}^q\|e_j\|U_{n,j}=o_P(1).$$
The last conclusion follows from a finite union bound, since $q$ is fixed. Retain the theorem's explicit measurability assumptions on the displayed vector supremum and estimator evaluations. These are sufficient routes to the stated conditional hypotheses; neither pointwise SLLN nor coordinatewise integrability alone supplies a uniform law.
