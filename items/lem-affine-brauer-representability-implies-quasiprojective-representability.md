---
id: lem-affine-brauer-representability-implies-quasiprojective-representability
kind: lemma
title: "Affine Brauer representability implies quasi-projective representability over infinite fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-axiom-of-choice
  - lem-affine-azumaya-representatives-give-derived-twisted-local-models
  - lem-derived-twisted-local-models-yield-azumaya-over-infinite-field
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the stated local-model and derived induction suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. J. de Jong, A result of Gabber"
      url: "https://www.math.columbia.edu/~dejong/papers/2-gabber.pdf"
      locator: "§3, affine local models and codimension induction; the scoped reduction below is reconstructed from the stated local suppliers."
verification: {}
---

## Statement

Assume AC. Let $k$ be an infinite field, $X$ an integral quasi-projective finite-type $k$-scheme, and $\alpha\in H^2_{\mathrm{et}}(X,\mathbb G_m)$ torsion. If $\alpha|_V$ is represented by an Azumaya algebra for every affine open $V\subseteq X$, then $\alpha$ is represented by an Azumaya algebra on $X$. The affine representability condition is an explicit hypothesis.

## Facts & Assumptions

**Given:** The infinite field, scheme, torsion class and affine-representability hypothesis in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Supplied Azumaya representatives on affine opens give coherent derived twisted local models near every finite closed-point set. [[lem-affine-azumaya-representatives-give-derived-twisted-local-models]]

[F2] Such local models give an Azumaya algebra with the original actual derived class over an infinite-field quasi-projective integral scheme. [[lem-derived-twisted-local-models-yield-azumaya-over-infinite-field]]

## Proof

**Proof technique:** supply the precise local-model premise of the derived induction.

1.1 By [F1], the affine-representability hypothesis yields, for every finite set of closed points of $X$, a coherent $\alpha$-twisted module of positive generic rank which is locally free near the set. Finite presentation over the integral Noetherian scheme makes each module locally free on a dense open by a nonzero generic minor. The modules use the same actual injective-resolution groupoid of $\alpha$. [A1, F1, given, algebra]

2.1 The torsion class and these local models satisfy every hypothesis of [F2], which gives an Azumaya algebra on $X$ with class $\alpha$. The zero class is included. This proves the stated implication without asserting the affine premise. [F2, step 1.1, algebra] ∎
