---
id: def-spatial-global-optimization-problem
kind: definition
title: Compact-box global minimization problems
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 0
deps: [def-metric-continuity, def-infimum, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, thm-infimum-property, lem-real-line-is-a-metric-space, def-metric-bounded-diameter]
justified_by: [thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, thm-infimum-property]
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

When $C\ne\emptyset$, the set $f[C]$ is nonempty and bounded below: $D_0$ is compact by [[thm-heine-borel-rn]], its continuous image $f[D_0]$ is compact in the usual metric on $\mathbb R$ by [[thm-continuous-image-of-a-compact-space-is-compact]] and therefore bounded by [[thm-compact-subset-is-closed-and-bounded]]. Thus $f[D_0]$ lies in a real interval $(c-r,c+r)$ for some $c\in\mathbb R$ and $r>0$, by [[def-metric-bounded-diameter]] and [[lem-real-line-is-a-metric-space]]; hence $c-r$ is a lower bound of $f[C]\subseteq f[D_0]$. Therefore [[thm-infimum-property]] gives the real number $f^*=\inf f[C]$, using [[def-infimum]]. No attainment is assumed for a general $C$. Statements about finite empty-set detection require a separate constraint certificate or a stated separation margin; objective continuity alone does not certify infeasibility.

