---
id: def-absolute-galois-group-of-a-field
kind: definition
title: "Absolute Galois group of a field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-separable-closure-in-an-algebraic-extension
  - def-finite-galois-extension-and-galois-group
  - def-profinite-group-by-inverse-limit
  - def-algebraic-closure
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter II, Section 4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IV, Section 8.2"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification:
  precheck: n/a
---

## Definition

Let $F$ be a field, let $\Omega$ be an algebraic closure of $F$, and let
$F_s$ be the relative separable closure of $F$ in $\Omega$. Let
$\mathcal E_F$ be the directed set, ordered by inclusion, of finite Galois
intermediate extensions $F\subseteq E\subseteq F_s$. For $E\subseteq E'$, use
the restriction homomorphism $\operatorname{Gal}(E'/F)\to\operatorname{Gal}(E/F)$.
The **absolute Galois group** of $F$ is
$$G_F:=\varprojlim_{E\in\mathcal E_F}\operatorname{Gal}(E/F),$$
with each finite Galois group discrete and with the inverse-limit topology.
Equivalently, a compatible family of finite-level automorphisms acts on each
element of $F_s$ through any finite Galois subextension containing it; this
identifies $G_F$ with $\operatorname{Aut}(F_s/F)$. In this topology $G_F$ is a
profinite group.

## Definition references

[[def-separable-closure-in-an-algebraic-extension]]

[[def-finite-galois-extension-and-galois-group]]

[[def-profinite-group-by-inverse-limit]]

[[def-algebraic-closure]]

[J. S. Milne, *Class Field Theory*, Chapter II, Section 4, printed pp. 86–88](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter IV, Section 8.2, printed pp. 168–169](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)
