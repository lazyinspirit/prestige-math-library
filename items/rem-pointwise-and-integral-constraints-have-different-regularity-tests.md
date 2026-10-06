---
id: "rem-pointwise-and-integral-constraints-have-different-regularity-tests"
kind: "remark"
title: "Pointwise and integral constraints have different regularity tests"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 12
deps:
  - "cor-obstacle-complementarity-in-distribution-form"
  - "cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity"
  - "def-closed-convex-obstacle-set-and-variational-inequality"
  - "thm-finite-regular-constraint-lagrange-multiplier-rule"
  - "thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Andersson, The Obstacle Problem, KTH lecture notes, 16 December 2015 (complete 52-page notes)"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf"
      locator: "Chapter 3 Section 3.1, Theorem 3.1, printed pp. 26-28 (the minimiser of the obstacle energy solves a variational inequality, not an equation with a multiplier field); Chapter 4 Section 4.2, Theorem 4.2 with (58), printed pp. 36-38 (complementarity is expressed through the reaction distribution)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (Lemma 13.5 and Theorem 13.6: Lagrange multipliers for regular equality constraints; the obstacle problem is treated through its variational inequality)"
---

## Remark

The multiplier rules of this page apply to equality constraints given by a $C^1$ map with surjective derivative and produce a multiplier equation ([[thm-finite-regular-constraint-lagrange-multiplier-rule]], [[thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint]]), while an obstacle constraint $u\ge\psi$ is a closed convex inequality constraint that does not by itself provide a differentiable multiplier field: its first-order information is the variational inequality $a(u,v-u)\ge F(v-u)$ ([[def-closed-convex-obstacle-set-and-variational-inequality]]), and complementarity is expressed through the reaction distribution, not through a pointwise product ([[cor-obstacle-complementarity-in-distribution-form]]).

Two different regularity tests are therefore in force. The equality rule needs surjectivity of the constraint derivative at the extremum; when that test fails the multiplier equation can fail outright, as [[cex-lagrange-multiplier-rule-needs-a-regular-constraint]] records for the degenerate constraint $x^2+y^2=0$. The obstacle set has no derivative to test and instead needs regularity of the *reaction* if one wants more than the distributional inequality: the function version is stated with an $L^2$ reaction density and continuous representatives, while the measure version uses a Radon representation and continuous representatives ([[cor-obstacle-complementarity-in-distribution-form]], [[cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity]]). Minimality alone supplies neither an $L^2$ density nor continuous representatives; the conditional measure formulation does not assert that a nonnegative distribution can fail to admit a Radon representation. In particular the smooth finite-dimensional Lagrange multiplier theorem must not be applied to the obstacle set.
