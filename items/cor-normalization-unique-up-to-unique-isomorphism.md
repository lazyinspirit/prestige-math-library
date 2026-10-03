---
id: cor-normalization-unique-up-to-unique-isomorphism
kind: corollary
title: The normalization is unique up to unique isomorphism
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 5
proof_strategy: direct
justified_by: []
aliases: []
deps: [thm-normalization-universal-property, def-normalization-affine-variety, thm-normalization-glues-variety, thm-birational-equivalence-function-fields, def-birational-equivalence-varieties, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a-b: uniqueness of the normalization from its universal property"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a classical variety over an
algebraically closed field and let $\nu_i\colon X_i\to X$, $i=1,2$, be
normalizations. There is a unique isomorphism $X_1\xrightarrow{\sim}X_2$ over
$X$.

## Facts & Assumptions
**Given:** AC, the algebraically closed field $k$, the variety $X$, and the two normalizations $\nu_1\colon X_1\to X$ and $\nu_2\colon X_2\to X$.

[F1] In the irreducible case a normalization is a finite, surjective, birational morphism from a normal variety, and it exists per component in the reduced reducible case ([[thm-normalization-glues-variety]], [[def-normalization-affine-variety]]); birational morphisms between varieties induce isomorphisms of function fields ([[thm-birational-equivalence-function-fields]], [[def-birational-equivalence-varieties]]).

[F2] Universal property: if $\nu\colon X^{\nu}\to X$ is a normalization and $f\colon Y\to X$ is a dominant birational morphism from a normal variety $Y$, there is a unique morphism $g\colon Y\to X^{\nu}$ with $\nu\circ g=f$ ([[thm-normalization-universal-property]]). AC is used there.

## Proof

1.1 First suppose $X$ is irreducible. Each $\nu_i$ is a dominant birational morphism from the normal variety $X_i$ [F1]. Apply the universal property [F2] to the normalization $\nu_1$ and the morphism $\nu_2\colon X_2\to X$: there is a unique morphism $g\colon X_2\to X_1$ over $X$, i.e. with $\nu_1\circ g=\nu_2$. Symmetrically there is a unique morphism $h\colon X_1\to X_2$ with $\nu_2\circ h=\nu_1$. [F1, F2, given]

2.1 The composite $h\circ g\colon X_2\to X_2$ satisfies $\nu_2\circ(h\circ g)=\nu_1\circ g=\nu_2$. Apply [F2] to the normalization $\nu_2:X_2\to X$ and the morphism $\nu_2:X_2\to X$: both $h\circ g$ and $\mathrm{id}_{X_2}$ lift that morphism, so uniqueness gives $h\circ g=\mathrm{id}_{X_2}$. Symmetrically $g\circ h=\mathrm{id}_{X_1}$, so $g$ is an isomorphism with inverse $h$. [F1, F2, step 1.1]

3.1 Any isomorphism $u\colon X_1\to X_2$ over $X$ satisfies $\nu_2\circ u=\nu_1$, so $u$ is a morphism over $X$ lifting the identity of $X$ between the two normalizations; by the uniqueness clause of [F2] applied to the normalization $\nu_2$ and the dominant birational morphism $\nu_1:X_1\to X$, such a $u$ equals $h$ constructed above. Thus the isomorphism is unique in the irreducible case. For reducible $X$, [F1] describes each normalization as the disjoint union over its finitely many irreducible components. Apply the irreducible result to each component and take the disjoint union. Any map over $X$ sends a source component into the target normalization component with the same dense image in $X$, since the target components are disjoint; uniqueness therefore holds componentwise. If $X$ is empty both normalizations are empty. [F1, F2, step 1.1, step 2.1] ∎
