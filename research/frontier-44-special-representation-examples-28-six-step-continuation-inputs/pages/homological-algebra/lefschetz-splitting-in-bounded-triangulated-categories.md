---
page: lefschetz-splitting-in-bounded-triangulated-categories
title: "Lefschetz Splitting In Bounded Triangulated Categories"
status: draft
items: [def-truncation-functors-and-cohomology-of-a-t-structure,
        lem-truncation-triangles-are-essentially-unique-and-functorial,
        lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude,
        lem-hard-lefschetz-splits-a-bounded-t-structure-complex,
        lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition,
        lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual]
examples: []
requires:
  - abelian-categories
  - derived-categories
  - triangularisation-and-jordan-canonical-form
  - triangulated-categories
---

**Objective.** This page isolates the abstract Hard Lefschetz splitting
mechanism of a bounded t-structure, the form in which the Lefschetz theorems of
Hodge theory are consumed by perverse-sheaf arguments. The first three items
are local prerequisites: truncation functors, t-cohomology and bounded
t-structures are fixed by convention; truncation triangles are shown to be
essentially unique, to define adjoint truncation functors, and to satisfy the
orthogonality, aisle, extension and direct-sum criteria; and t-cohomology is
shown to be functorial, shift-compatible, additive over finite biproducts, to
detect amplitude, and to be detected on single-degree objects. Everything is
proved from the t-structure axioms and the standard triangulated-category
formalism of the source family (Beilinson–Bernstein–Deligne, Astérisque 100,
§1.3), with no choice principle used.

**Claims.** On that basis the page proves the abstract splitting criterion of
Deligne: if a degree-two endomorphism $L$ of a bounded-amplitude object $K$
induces isomorphisms $H^{-j}_t(L^j):H^{-j}_t(K)\to H^j_t(K)$ for every $j\ge0$,
then $K$ is isomorphic to the finite direct sum of its shifted t-cohomology
objects. The isomorphism is deliberately not asserted to be canonical and
carries no compatibility with primitive lifts, so the lemma serves as the
abstract non-canonical splitting input rather than the stronger
primitive-compatible decomposition of the Hodge theory of projective maps.
The page then records the graded primitive decomposition attached to such a
Lefschetz operator and the canonical, self-dual nilpotent Lefschetz filtration,
together with the descended nondegenerate forms on its graded pieces. The
companion page computes the splitting in the smallest case with two Lefschetz
steps.
