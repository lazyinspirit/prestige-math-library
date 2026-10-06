---
id: rem-pontryagin-numbers-do-not-detect-integral-oriented-bordism-torsion
kind: remark
title: "Pontryagin numbers do not detect integral oriented bordism torsion"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-pontryagin-number-of-a-closed-oriented-manifold, def-unoriented-and-oriented-bordism-groups, def-null-cobordant-closed-manifold, def-stiefel-whitney-number-of-a-closed-manifold]
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "The remark after Corollary 18.10 crediting Wall's sharp statement, printed p. 217"
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 18, printed pp. 32-34, on the passage from integral to rational oriented bordism"
    - title: "Daniel S. Freed, Bordism: Old and New"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Theorem 2.24(iv), printed p. 19: the combined characteristic-number criterion; (2.28), printed p. 20: the nonzero Dold-manifold degree-five class, whose Pontryagin numbers vanish by degree."
external_dependency:
  source_url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
  exact_statement: "A closed oriented smooth manifold is an oriented boundary if and only if all of its Pontryagin numbers and all of its Stiefel-Whitney numbers vanish (C. T. C. Wall's theorem, Freed Theorem 2.24(iv), printed p. 19)."
  local_proof_attempt: "No local proof is supplied: Wall's refinement of the rational Pontryagin-number criterion requires the integral surgery-theoretic machinery of the classification of oriented bordism, which this pair does not own. The rational theorem of this page proves only the criterion after tensoring with the rationals, and Milnor-Stasheff Corollary 18.10 itself yields only that some positive multiple of the manifold is a boundary."
  necessity: "The remark prevents the false integral reading of the rational Pontryagin-number detection theorem on this page. It is not consumed by any proof here or on the signature page."
dependency_level: 0
---

## Remark

Assume AC as inherited from the characteristic-number definitions.

The Pontryagin numbers detect the rational oriented bordism ring but not the
integral oriented bordism groups: there are closed oriented manifolds that are
not oriented boundaries although all their Pontryagin numbers vanish. The
rational detection theorem of this page is therefore stated after tensoring
with $\mathbb Q$; integral oriented cobordism also carries torsion information,
detected in part by Stiefel-Whitney numbers
([[def-stiefel-whitney-number-of-a-closed-manifold]]), and Wall's theorem states
that a closed oriented manifold is an oriented boundary if and only if all its
Pontryagin numbers and all its Stiefel-Whitney numbers vanish. Since the
Pontryagin numbers are orientation-sensitive integral invariants and the
Stiefel-Whitney numbers are mod-two invariants, neither family alone sees all of
the integral oriented bordism group
([[def-unoriented-and-oriented-bordism-groups]],
[[def-null-cobordant-closed-manifold]]). For an explicit nonzero torsion example, Freed’s Lecture 2, printed p. 20, records $\Omega_5^{SO}\cong\mathbb Z/2$ represented by the Dold manifold $Y^5$; its Pontryagin numbers vanish by degree. This statement is recorded from the
literature and is not proved here; it carries no proof obligation and no
consumer relies on it.
