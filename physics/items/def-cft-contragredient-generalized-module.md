---
id: def-cft-contragredient-generalized-module
kind: definition
title: Restricted contragredient of a generalized VOA module
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
  - def-grading-restricted-generalized-vertex-module
justified_by:
  - thm-cft-contragredient-generalized-module
domain: mathematics
library: mathematics
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras I: Propagation and Dual Fusion Products"
      url: https://arxiv.org/pdf/2305.10180v4
      locator: "§1.2, PDF pp. 18–20, on grading-restricted modules and contragredient modules."
    - title: "Yi-Zhi Huang, James Lepowsky, and Hao Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I"
      url: https://arxiv.org/pdf/1012.4193
      locator: "§2, Definition 2.32, Theorem 2.34 and Definition 2.35, PDF pp. 66–68, for the restricted dual, induced action, and asserted module structure."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $U$ be a conformal vertex algebra of CFT type and let $M=\bigoplus_{h\in\mathbb C}M_{[h]}$ be a grading-restricted generalized left $U$-module. Its **restricted contragredient vector space** is
$$M'=\bigoplus_{h\in\mathbb C}M_{[h]}^*,$$
where each algebraic functional is supported on one finite-dimensional generalized weight space and every element of the direct sum has finite support in $h$. The conformal vector defines operators $L_M(n)$ on $M$. The proposed contragredient action is determined, for homogeneous $u\in U$ and $\lambda\in M'$, by
$$\langle Y_{M'}(u,z)\lambda,m\rangle =\left\langle\lambda,\,Y_M\!\left(e^{zL(1)}(-z^{-2})^{L(0)}u,z^{-1}\right)m\right\rangle, \qquad m\in M.$$
For homogeneous $u$ of integer weight $d$, $(-z^{-2})^{L(0)}u=(-1)^d z^{-2d}u$. The formal exponential $e^{zL(1)}u$ is finite on each homogeneous $u$ because positive Virasoro modes lower its nonnegative weight. For the component variant fix a positive integer $k$ and $k$ commuting left $V$-module actions on $M$, with conformal operators $L_j(n)$. For $\lambda=(\lambda_1,\ldots,\lambda_k)\in\mathbb C^k$ define
$$M_{[\lambda]}=\{m\in M:\text{for each }j,\ (L_j(0)-\lambda_j I)^{N_j}m=0\text{ for some integer }N_j\ge1\}.$$
Assume $M=\bigoplus_{\lambda\in\mathbb C^k}M_{[\lambda]}$, each joint space is finite dimensional, and there are real numbers $b_j$ such that $M_{[\lambda]}\ne0$ implies $\operatorname{Re}\lambda_j\ge b_j$. This is an algebraic direct sum, so every vector has finite joint-weight support. Set $M'=\bigoplus_{\lambda\in\mathbb C^k}M_{[\lambda]}^*$, pairing each summand with its matching joint space and with zero on the others. Define each candidate component action by the same opposite-field pairing formula, using the $j$th action on $M$ and the state operators of $V$. No decomposition of $M$ as a tensor product is required. This definition specifies the candidate action; its module axioms and grading-restrictedness are asserted only by the separate theorem item.

## Definition references

[[def-conformal-vertex-algebra]]

[[def-vertex-algebra-module]]

[[def-grading-restricted-generalized-vertex-module]]
