---
id: rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally
kind: remark
title: "Not every integral homology class is represented by an embedded submanifold"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-geometric-intersection-equals-the-poincare-dual-cup-pairing, def-geometric-intersection-pairing-on-a-closed-oriented-manifold, def-oriented-intersection-number]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Rene Thom, Quelques proprietes globales des varietes differentiables, Commentarii Mathematici Helvetici 28 (1954), 17-86"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/thomcob.pdf
      locator: "Chapter III, Sections 3-4, Theorems III.2 and III.5 (printed pp. 58-60); Lemma III.8, Theorem III.9 and the lens-space product example (pp. 61-62). Mod-two realization is by maps, not necessarily embeddings; Steenrod operations give necessary integral realization obstructions."
dependency_level: 4
---

## Remark

The geometric pairing and the self-intersection statements of this page apply to closed oriented embedded submanifolds, not to arbitrary homology classes. Not every integral homology class of a closed oriented manifold is the image of the fundamental class of a closed oriented manifold under a continuous map. Steenrod operations give obstructions to such integral realization, as in Thom's Chapter III, Section 4 and its lens-space product example (printed pp. 59-62). With $\mathbb F_2$ coefficients every class is represented by the mod-two fundamental class of a closed manifold under a map (Thom, Theorem III.2; Cohen's remark after Theorem 9.5) ([[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]] requires the geometric representatives to exist before it can be applied). The algebraic pairing of the cup product remains the general object, defined for all classes; where the design uses the geometric model it must either supply embedded representatives or pass to the algebraic statement. Cohen's remark after Theorem 9.5 records the integral and mod-two representability caveat; the Steenrod-operation obstruction is separately sourced to Thom. Realization by a map does not assert realization by an embedding.
