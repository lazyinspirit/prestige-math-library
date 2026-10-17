---
id: def-spatial-global-optimization-problem
kind: definition
title: Compact-box global minimization problems
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 0
deps: [def-metric-continuity, def-infimum, thm-heine-borel-rn]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §12"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "Thomas Hübner, Akshay Gupte, and Steffen Rebennack, Spatial branch-and-bound for nonconvex separable piecewise linear optimization, §2.1"
      url: "https://optimization-online.org/wp-content/uploads/2024/05/Spatial-branch-and-bound-Piecewise-Linear-IJOC-revisions.pdf"
---

## Definition

A **box** in $\mathbb R^n$ is $D_0=\prod_{j=1}^n[a_j,b_j]$ with finite real endpoints $a_j\le b_j$. Here $n\ge1$. The box is closed and bounded, hence compact by [[thm-heine-borel-rn]]. An **optimization instance on a compact box** consists of this $D_0$, a continuous objective $f:D_0\to\mathbb R$ (continuity in the inherited Euclidean metric, as in [[def-metric-continuity]]), and a feasible set $C\subseteq D_0$. The unconstrained instance has $C=D_0$. A constrained instance may specify $C=\{x\in D_0:g_i(x)\le0,\ 1\le i\le m\}$ for a finite list of real functions $g_i$.

When $C\ne\emptyset$, its global infimum is $f^*=\inf_{x\in C}f(x)$, using [[def-infimum]]. No attainment is assumed for a general $C$. Statements about finite empty-set detection require a separate constraint certificate or a stated separation margin; objective continuity alone does not certify infeasibility.

