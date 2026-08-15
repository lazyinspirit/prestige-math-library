---
id: thm-uniform-limit-continuous-complex-functions
kind: theorem
title: "A uniform limit of continuous complex-valued functions is continuous"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-convergence-of-complex-valued-functions, thm-uniform-limit-continuous-real-functions, thm-componentwise-limits-and-continuity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space. If continuous functions $f_n:X\to\mathbb C$ converge uniformly to $f:X\to\mathbb C$ in the sense of [[def-uniform-convergence-of-complex-valued-functions]], then $f$ is continuous.

## Facts & Assumptions

**Given:** Continuous $f_n:X\to\mathbb C$ with $f_n\to f$ uniformly.

[L1] A uniform limit of continuous real-valued functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

[L2] For $m\ge1$, a map into $\mathbb R^m$ is continuous if and only if each component is continuous ([[thm-componentwise-limits-and-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Write $f_n=u_n+iv_n$ and $f=u+iv$. The componentwise dictionary in [[def-uniform-convergence-of-complex-valued-functions]] shows that $u_n\to u$ and $v_n\to v$ uniformly; [L2] shows each $u_n,v_n$ is continuous. [L2]

2.1 By [L1], both $u$ and $v$ are continuous, including when $X$ is empty. [step 1.1, L1]

3.1 The componentwise continuity criterion [L2] now makes $f=u+iv$ continuous. [step 2.1, L2] ∎
