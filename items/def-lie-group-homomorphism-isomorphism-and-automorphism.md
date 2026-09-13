---
id: def-lie-group-homomorphism-isomorphism-and-automorphism
kind: definition
title: Lie-group homomorphism, isomorphism, and automorphism
status: draft
origin: pipeline
deps: ["def-lie-group", "def-group-homomorphism", "lem-inverse-of-bijective-group-homomorphism"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, especially printed pages 72–73
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Text immediately after Definition 2.1, printed page 14
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $G$ and $H$ be Lie groups in the sense of [[def-lie-group]]. A
**Lie-group homomorphism** $F:G\to H$ is a group homomorphism in the sense of
[[def-group-homomorphism]] that is also smooth. Thus

$$F(gh)=F(g)F(h)$$

for all $g,h\in G$, while preservation of identity and inverses follows from
the group-homomorphism laws.

A **Lie-group isomorphism** is a bijective Lie-group homomorphism whose inverse
is smooth. Its set-theoretic inverse is automatically a group homomorphism by
[[lem-inverse-of-bijective-group-homomorphism]], so the smoothness clause makes
that inverse a Lie-group homomorphism as well. A Lie-group
**automorphism** is a Lie-group isomorphism from $G$ to itself.

Smoothness is part of the homomorphism definition on this page. The separate
automatic-regularity theorem for merely continuous group homomorphisms is not
being assumed. These definitions apply without alteration in dimensions zero
and one. Their Lie-group inputs are nonempty and boundaryless by the page
convention, and the definitions use neither nondegeneracy nor any choice
principle.
