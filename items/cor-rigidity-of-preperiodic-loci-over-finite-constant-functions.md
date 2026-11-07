---
id: cor-rigidity-of-preperiodic-loci-over-finite-constant-functions
kind: corollary
title: "Dense common preperiodic locus over a finite constant field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - thm-function-field-rigidity-over-finite-constants
  - thm-function-field-northcott-for-finite-constant-field
  - thm-vector-and-scalar-height-zero-equivalence-over-function-curve
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§5.1, Lemma 5.1"
    - title: "Alexander Carney, Heights and arithmetic dynamics over finitely generated fields"
      url: "https://arxiv.org/pdf/2010.07200v1"
      locator: "§5.2, Theorem 5.10 and Corollary 5.11"
verification: {}
proof_strategy: direct
---

## Statement

Let $K=\mathbb F_q(B)$ be a global function field with finite full constant field, and let $X/K$ be projective. Let $f,g:X\to X$ be polarized endomorphisms. If the set of points that are preperiodic under both $f$ and $g$ is Zariski dense in $X$, where a point is preperiodic when its forward orbit is finite, then the sets of points in $X(\overline K)$ that are preperiodic under $f$ and under $g$ are equal.

## Statement references

[[thm-function-field-rigidity-over-finite-constants]]

[[thm-function-field-northcott-for-finite-constant-field]]

## Facts & Assumptions

**Given:** A global function field $K=\mathbb F_q(B)$; a projective variety $X/K$; polarized endomorphisms $f,g$; and a Zariski-dense common preperiodic set.

[F1] Over a finite constant field, an algebraic point has zero vector-valued canonical height exactly when it is preperiodic. ([[thm-function-field-northcott-for-finite-constant-field]])

[F2] A zero vector-valued canonical height is equivalent to zero scalar canonical height over a function curve. ([[thm-vector-and-scalar-height-zero-equivalence-over-function-curve]])

[F3] The two scalar height-zero loci agree on the closure of their intersection. ([[thm-function-field-rigidity-over-finite-constants]])

## Proof

1.1 By [F1] and [F2], the common preperiodic set is exactly the intersection of the two scalar canonical-height-zero loci. Its Zariski density therefore makes their intersection closure equal to $X_{\overline K}$. [given, F1, F2, algebra]

2.1 Apply [F3] with $Z=X_{\overline K}$; the two scalar height-zero loci agree on all of $X(\overline K)$. Applying [F1] and [F2] again identifies each locus with its corresponding preperiodic set, proving the asserted equality. [given, F1, F2, F3, step 1.1] ∎
