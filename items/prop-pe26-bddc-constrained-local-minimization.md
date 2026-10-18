---
id: prop-pe26-bddc-constrained-local-minimization
kind: proposition
title: BDDC is the constrained partial-energy minimizer
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-pe26-scaled-averaging-and-bddc-preconditioner, thm-pe26-primal-constraints-remove-floating-kernels]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; strict convexity is finite-dimensional positive definiteness."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §3.2"
      url: "https://arxiv.org/pdf/0708.4031"
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, §§87–88"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
---

## Statement

For every assembled residual $f\in\widehat W'$, the unique minimizer over $w\in\widetilde W$ of

$$J_f(w)=\tfrac12\langle\widetilde S w,w\rangle-\langle f,E_0w\rangle$$

is $w_* = \widetilde S^{-1}E_0^T f$. The conforming correction returned by BDDC is $E_0 w_*=E_0\widetilde S^{-1}E_0^T f$.

## Facts & Assumptions

**Given:** The positive definite partial Schur operator $\widetilde S$, the averaging map $E_0$, and an assembled residual $f$.

[F1] [[def-pe26-scaled-averaging-and-bddc-preconditioner]]: $E_0:\widetilde W\to\widehat W$ is linear and $M_{\rm BDDC}^{-1}=E_0\widetilde S^{-1}E_0^T$.

[F2] [[thm-pe26-primal-constraints-remove-floating-kernels]]: under the stated primal anchoring, $\widetilde S$ is positive definite.

## Proof

1.1 Differentiating the finite-dimensional quadratic in a direction $z\in\widetilde W$ gives $J_f'(w)[z]=\langle\widetilde S w,z\rangle-\langle f,E_0z\rangle$. Thus its critical point solves $\widetilde S w=E_0^Tf$, whose unique solution is $w_*=\widetilde S^{-1}E_0^T f$. [given, F1, algebra]

2.1 For any $z\in\widetilde W$, expansion about the critical point yields $J_f(w_*+z)=J_f(w_*)+\tfrac12\langle\widetilde S z,z\rangle$. By [F2] the added term is positive unless $z=0$, so $w_*$ is the unique global minimizer. Applying $E_0$ gives the displayed BDDC correction by [F1]. [given, F1, F2, step 1.1, algebra] ∎
