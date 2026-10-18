---
id: thm-pe26-harmonic-extension-minimizes-energy
kind: theorem
title: Discrete harmonic extension minimizes energy
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-pe26-discrete-harmonic-extension-and-schur-complement, thm-pe26-local-energy-kernel-and-interior-spd]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the proof is a finite-dimensional quadratic identity."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 35–37"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Oliver Rheinbach, Parallel Scalable Iterative Substructuring, Chapter 2, §§2.1–2.3"
      url: "https://d-nb.info/983219192/34"
---

## Statement

For every admissible local trace $g_i$, $H_i g_i$ from [[def-pe26-discrete-harmonic-extension-and-schur-complement]] is the unique finite-element function with trace $g_i$ minimizing $a_i(v,v)$. The minimum is $g_i^TS_i g_i$.

## Facts & Assumptions

**Given:** The local block matrix $K_i$, positive definite interior block $K_{II}^{(i)}$, trace $g_i$, harmonic lift $H_i g_i$, and Schur matrix $S_i$.

[F1] [[def-pe26-discrete-harmonic-extension-and-schur-complement]]: $H_i g_i=(-K_{II}^{-1}K_{I\Gamma}g_i,g_i)^T$ and $S_i=K_{\Gamma\Gamma}-K_{\Gamma I}K_{II}^{-1}K_{I\Gamma}$.

[F2] [[thm-pe26-local-energy-kernel-and-interior-spd]]: $K_{II}^{(i)}$ is positive definite, so its quadratic form is nonnegative and vanishes only at zero.

## Proof

1.1 Any local vector with trace $g_i$ has the form $v=H_i g_i+(z,0)^T$. By [F1], the interior block row of $K_iH_i g_i$ is $K_{II}(-K_{II}^{-1}K_{I\Gamma}g_i)+K_{I\Gamma}g_i=0$. Hence the energy cross term between $H_i g_i$ and $(z,0)$ vanishes, and $v^TK_i v=(H_i g_i)^TK_i(H_i g_i)+z^TK_{II}z$. [given, F1, algebra]

2.1 By [F2], the last term is nonnegative and is zero only for $z=0$. Thus $H_i g_i$ is the unique minimizer. Multiplying the block expression in [F1] gives $(H_i g_i)^TK_i(H_i g_i)=g_i^T(K_{\Gamma\Gamma}-K_{\Gamma I}K_{II}^{-1}K_{I\Gamma})g_i=g_i^TS_i g_i$. [given, F1, F2, step 1.1, algebra] ∎
