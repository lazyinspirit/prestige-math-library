---
id: thm-volume-integral-scattering-fredholm-stability
kind: theorem
title: Fredholm solvability and residual stability for volume scattering
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-volume-integral-scattering-model, thm-volume-integral-operator-is-compact, thm-fredholm-alternative-for-identity-minus-compact, def-axiom-of-choice, def-countable-choice, thm-complex-lp-completeness-and-almost-everywhere-subsequences, def-banach-space, def-bounded-linear-operator, def-operator-norm, def-compact-linear-operator]
justified_by: []
proof_strategy: direct
axiom_use: "AC is required by the published Fredholm alternative and supplies Countable Choice for completeness of L2(D). The theorem assumes injectivity; it does not prove outgoing-PDE uniqueness for arbitrary contrasts."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, Chapter 3, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Printed pp. 60–65, Fredholm solvability and solution error for compact integral operators."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and Computational Methods in Photonics: Tutorial Notes, §1.3"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Printed pp. 12–13, Fredholm alternative and collectively compact solution stability."
verification:
  precheck: pass
---

## Statement

Assume AC and the hypotheses of [[def-volume-integral-scattering-model]] with $0<|D|<\infty$. If $I-K_k$ is injective, then for every $f\in L^2(D;\mathbb C)$ there is a unique $u\in L^2(D;\mathbb C)$ solving $(I-K_k)u=f$, and $A_k:=I-K_k$ has a bounded inverse. Writing $R_k:=\|A_k^{-1}\|$, every $v\in L^2(D;\mathbb C)$ satisfies
$$\|u-v\|_2\le R_k\|f-(I-K_k)v\|_2.$$
This is an operator-theoretic Fredholm branch; no physical uniqueness statement for the exterior PDE is asserted.

## Facts & Assumptions

**Given:** AC, $D,q,k$, compact $K_k$, and injectivity of $I-K_k$.

[A1] AC supplies Countable Choice; complex $L^2(D)$ is complete under Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]). Thus it is a Banach space ([[def-banach-space]]).

[F1] The operator $K_k$ is compact ([[thm-volume-integral-operator-is-compact]]).

[F2] On a Banach space, if $K$ is compact and $I-K$ is injective, then $I-K$ is surjective with bounded inverse ([[thm-fredholm-alternative-for-identity-minus-compact]]); this result explicitly assumes AC.

[F3] A compact linear operator is bounded, so $A_k=I-K_k$ is bounded ([[def-compact-linear-operator]], [[def-bounded-linear-operator]]).

## Proof

**Given:** AC and the data in the Statement.

1.1 By [A1], $L^2(D;\mathbb C)$ is Banach. By [F1] $K_k$ is compact, and the assumed injectivity permits [F2] to be applied to $A_k=I-K_k$. Therefore $A_k$ is surjective and has a bounded inverse; for each $f$ the unique solution is $u=A_k^{-1}f$. [given, A1, F1, F2]

2.1 For arbitrary $v\in L^2(D;\mathbb C)$, linearity gives $A_k(u-v)=A_ku-A_kv=f-A_kv$. Applying the bounded inverse from step 1.1 yields $u-v=A_k^{-1}(f-A_kv)$, so $\|u-v\|_2\le\|A_k^{-1}\|\,\|f-A_kv\|_2=R_k\|f-(I-K_k)v\|_2$. [given, F3, step 1.1, algebra] ∎
