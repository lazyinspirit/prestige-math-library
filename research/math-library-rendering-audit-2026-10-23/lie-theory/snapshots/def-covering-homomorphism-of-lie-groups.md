---
id: def-covering-homomorphism-of-lie-groups
kind: definition
title: Covering homomorphisms of Lie groups
status: published
origin: pipeline
deps: [def-lie-group-homomorphism-isomorphism-and-automorphism, def-covering-map-and-evenly-covered-neighbourhoods]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Section 3.2 and Proposition 3.5, printed pages 25–26
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

A **covering homomorphism of Lie groups** is a smooth Lie-group homomorphism
$p:\widetilde G\to G$ whose underlying continuous map is a covering map.
Thus $p$ is surjective and every point of $G$ has an evenly covered
neighborhood. Both the homomorphism and covering conditions are part of the
definition; neither is inferred merely from the other.
