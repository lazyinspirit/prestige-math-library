---
id: cex-bijective-birational-not-isomorphism-cusp-reprise
kind: counterexample
title: The cusp normalization is bijective but not an isomorphism
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 7
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-axiom-of-choice, ex-normalization-cusp, lem-finite-birational-to-normal-is-isomorphism, def-normal-point-and-normal-variety, def-finite-morphism-classical-affine-local, thm-birational-equivalence-function-fields]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 Example 8.6(a): the cusp parametrization is bijective but not an isomorphism"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement refuted

False claim: a finite birational morphism of classical varieties that is
bijective is an isomorphism.

## Facts & Assumptions

Assume the Axiom of Choice.

**Given:** AC, an algebraically closed field $k$ of characteristic not two, the cusp $X=V(y^2-x^3)\subseteq\mathbf A^2$, and its normalization $\nu\colon\mathbf A^1\to X$, $t\mapsto(t^2,t^3)$.

[F1] The normalization $\nu$ is finite and birational, and the cusp is its unique non-normal point; its pullback on coordinate rings is the inclusion $k[t^2,t^3]\hookrightarrow k[t]$, which is injective but not surjective, so $\nu$ is not an isomorphism ([[ex-normalization-cusp]], [[def-finite-morphism-classical-affine-local]], [[thm-birational-equivalence-function-fields]]).

[F2] The same computation records that $\nu$ is a bijection on points: it is the parametrization $t\mapsto(t^2,t^3)$, and every point of the cusp is the image of a unique parameter ([[ex-normalization-cusp]]).

[F3] A finite birational morphism onto a normal target is an isomorphism; normality of the target is a hypothesis, and the cusp is a non-normal target ([[lem-finite-birational-to-normal-is-isomorphism]], [[def-normal-point-and-normal-variety]]).

[F7] AC is inherited through the classical localization, normalization, or finite-morphism suppliers cited above ([[def-axiom-of-choice]]).

## Counterexample

1.1 By [F1] the normalization $\nu$ is finite and birational, and by [F2] it is bijective but not an isomorphism: its pullback $k[t^2,t^3]\hookrightarrow k[t]$ misses $t$, so this pullback is not an isomorphism. [F1, F2, given, F7]

1.2 The target of $\nu$ is the cusp, which is not normal at its singular point by [F1]; the isomorphism criterion [F3] therefore does not apply, exactly because its target-normality hypothesis fails. [F1, F3, given]

2.1 Hence finite plus birational plus bijective does not imply isomorphism: the cusp normalization is a counterexample, and bijectivity cannot replace the normality hypothesis in the finite-birational-to-normal isomorphism lemma. The failure is isolated precisely at the non-normal point of the target. [F1, F2, F3, step 1.1, step 1.2] ∎
