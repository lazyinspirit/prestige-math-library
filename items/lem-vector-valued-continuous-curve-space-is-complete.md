---
id: lem-vector-valued-continuous-curve-space-is-complete
kind: lemma
title: "Continuous $\\mathbb{R}^n$-valued curves on a nonempty compact interval form a complete supremum-metric space"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-c-k-complete-in-the-sup-metric, thm-componentwise-convergence-and-completeness, thm-componentwise-limits-and-continuity, thm-all-norms-on-rn-are-equivalent, def-vector-valued-functions-limits-and-continuity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $J$ be a nonempty compact interval and $n\ge1$. Continuous $\mathbb R^n$-valued curves on $J$ are complete in the supremum metric

$$d_\infty(x,y):=\sup_{t\in J}\|x(t)-y(t)\|_2.$$

## Facts & Assumptions

**Given:** A $d_\infty$-Cauchy sequence $(x_m)$ in $C(J,\mathbb R^n)$.

[L1] For a nonempty compact metric space $K$, $C(K,\mathbb R)$ is complete in the supremum metric ([[thm-c-k-complete-in-the-sup-metric]]).

[L2] Any two norms on $\mathbb R^n$, $n\ge1$, are equivalent ([[thm-all-norms-on-rn-are-equivalent]]).

## Proof

**Proof technique:** direct.

1.1 Each coordinate sequence is supremum-Cauchy, so [L1] gives a continuous coordinate limit; assembling the finitely many coordinate limits defines a continuous curve $x:J\to\mathbb R^n$. [given, L1]

2.1 The maximum-coordinate errors tend uniformly to zero, and [L2] bounds the Euclidean norm by a constant multiple of the maximum norm; hence $d_\infty(x_m,x)\to0$, including when $J$ is a one-point interval. [step 1.1, L2, algebra] ∎
