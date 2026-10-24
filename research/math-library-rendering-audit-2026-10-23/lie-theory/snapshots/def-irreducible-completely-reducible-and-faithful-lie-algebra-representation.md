---
id: def-irreducible-completely-reducible-and-faithful-lie-algebra-representation
kind: definition
title: Irreducible, completely reducible, and faithful representations
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-subrepresentation-quotient-representation-and-intertwiner, def-direct-sum-of-a-family-of-modules]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §11.1, printed pp. 61–62"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §4.3, printed pp. 52–53"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Definition

A nonzero representation $V$ is **irreducible** if its only stable linear
subspaces are $0$ and $V$.

A representation is **completely reducible** if it is isomorphic, as a
representation, to an algebraic direct sum

$$\bigoplus_{i\in I}V_i$$

of irreducible representations, where elements have finite support. This is a
definition, not an assertion that every representation has such a
decomposition. The zero representation is the empty direct sum and is
therefore completely reducible under this convention.

A representation $\rho:\mathfrak g\to\mathfrak{gl}(V)$ is **faithful** if
$\rho$ is injective.
