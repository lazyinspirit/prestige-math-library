---
id: def-local-inertia-subgroup-of-absolute-galois-group
kind: definition
title: "Inertia subgroup of a local absolute Galois group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-absolute-galois-group-of-a-local-field
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-lower-ramification-groups-of-a-local-galois-extension
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Theorem 7.58"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IV, Section 8.2"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a nonarchimedean local field with finite residue field and fix a
separable closure $K_s$. For each finite Galois subextension $E/K$ in $K_s$,
let $I(E/K)=G_0(E/K)$, the subgroup of $\operatorname{Gal}(E/K)$ acting
trivially on the residue field of $E$. If $E\subseteq E'$ are such
extensions, restriction maps $I(E'/K)$ into $I(E/K)$ because an automorphism
acting trivially on the residue field of $E'$ acts trivially on its subfield
from $E$. The **absolute inertia subgroup** is the inverse limit
$$I_K:=\varprojlim_{E/K} I(E/K),$$
viewed as a closed normal subgroup of
$G_K=\varprojlim_{E/K}\operatorname{Gal}(E/K)$ with the inverse-limit
topology.

## Definition references

[[def-absolute-galois-group-of-a-local-field]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-lower-ramification-groups-of-a-local-galois-extension]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Theorem 7.58, printed p. 131](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter IV, Section 8.2, printed pp. 168–169](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)
