---
id: thm-author-89250b1d710c-smooth-local-geometry-input
kind: theorem
title: External geometric inputs for affine reduction
status: draft
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: The Stacks Project, Schemes smooth over fields
      url: https://stacks.math.columbia.edu/tag/04QM
      locator: Lemmas 33.25.3 and 33.25.4.
      statement: A scheme smooth over a field is regular and geometrically normal,
        hence normal.
      hypotheses: X is smooth over a field k.
      reading_limits: Read both statements and their displayed proofs; the linked
        commutative-algebra inputs were not reconstructed.
    - title: The Stacks Project, Normal schemes
      url: https://stacks.math.columbia.edu/tag/0357
      locator: Lemma 28.7.5.
      statement: A normal scheme whose quasi-compact opens have finitely many
        irreducible components is a disjoint union of normal integral schemes.
      hypotheses: Normality and the stated finiteness condition on quasi-compact opens.
      reading_limits: Read the statement and displayed proof; its affine normal-ring
        input was not reconstructed.
dependency_level: 0
---

## Statement
A scheme smooth over a field is regular and normal. If it is also noetherian, its irreducible components are disjoint normal integral open-and-closed subschemes. Consequently a smooth finite-type scheme over a field admits a cover by integral smooth affine opens, each separated and equidimensional.

## External input
Import the two cited Stacks results with their stated hypotheses. A noetherian space has finitely many irreducible components, so their open complements are finite unions of closed components. Affine opens inside the components give the stated cover: smoothness restricts to opens, affine schemes are separated, and an integral scheme has one irreducible component. This last sentence is the application of the imported results.
