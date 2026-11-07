---
id: thm-local-unit-herbrand-quotient-one
kind: theorem
title: "The unit group of a finite cyclic local extension has Herbrand quotient one"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-herbrand-quotient-for-finite-cyclic-group-modules
  - lem-herbrand-quotient-multiplicativity-in-exact-sequences
  - lem-cyclic-local-norm-index-from-class-formation
  - thm-hilbert-90-for-finite-galois-extension
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC is inherited through the local class-formation supplier; DC is used
  through the supplied finite-group Tate cohomology convention. The cyclic
  calculation adds no stronger choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter II §3"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Statement

Assume AC and DC. Let $L/K$ be a finite cyclic extension of
finite-residue nonarchimedean local fields, let $G=\operatorname{Gal}(L/K)$,
and let $\mathcal O_L^\times$ have its natural $G$-action. Then its Herbrand
quotient is defined and
$$h_G(\mathcal O_L^\times)=1.$$

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-herbrand-quotient-for-finite-cyclic-group-modules]]

[[lem-herbrand-quotient-multiplicativity-in-exact-sequences]]

[[lem-cyclic-local-norm-index-from-class-formation]]

[[thm-hilbert-90-for-finite-galois-extension]]

[[def-dependent-choice]]

[[def-axiom-of-choice]]

[J. S. Milne, *Class Field Theory*, Chapter II §3, printed pp. 77–80](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** The extension, the cyclic norm-index theorem, Hilbert 90, AC, and DC.

[F1] For a cyclic group, the Herbrand quotient is the order ratio $|\widehat H^0|/|\widehat H^{-1}|$. [[def-herbrand-quotient-for-finite-cyclic-group-modules]]

[F2] Herbrand quotients multiply in a short exact sequence when two are defined. [[lem-herbrand-quotient-multiplicativity-in-exact-sequences]]

[F3] The local norm quotient has order $[L:K]$. [[lem-cyclic-local-norm-index-from-class-formation]]

[F4] Hilbert 90 gives $H^1(G,L^\times)=0$, which is $\widehat H^{-1}(G,L^\times)=0$ for cyclic $G$. [[thm-hilbert-90-for-finite-galois-extension]]

[A1] Dependent Choice supplies the finite-group Tate-cohomology conventions used in [F1]. [[def-dependent-choice]]

[A2] AC is required by the local class-formation and continuous inflation–restriction suppliers used in the cyclic norm-index theorem. [[def-axiom-of-choice]]

## Proof

**Proof technique:** apply Herbrand quotient multiplicativity to the valuation exact sequence.

**Given:** The data above.

1.1 The valuation gives a short exact sequence of $G$-modules $$1\to\mathcal O_L^\times\to L^\times\xrightarrow{v_L}\mathbb Z\to0,$$ where $G$ acts trivially on $\mathbb Z$. It is surjective because $L$ has a uniformizer of valuation one. [given, construct]

2.1 By [F3] and [F4], $\widehat H^0(G,L^\times)=K^\times/N_{L/K}L^\times$ has order $[L:K]$ and $\widehat H^{-1}(G,L^\times)=0$, so $h_G(L^\times)=[L:K]$. For the trivial module $\mathbb Z$, the norm is multiplication by $|G|=[L:K]$, hence $\widehat H^0(G,\mathbb Z)=\mathbb Z/|G|\mathbb Z$ and $\widehat H^{-1}(G,\mathbb Z)=0$; therefore $h_G(\mathbb Z)=|G|$. [A1, A2, F1, F3, F4, step 1.1, algebra]

3.1 Apply multiplicativity [F2] to step 1.1: $h_G(L^\times)=h_G(\mathcal O_L^\times)h_G(\mathbb Z)$. The two outer quotients are finite and equal to $|G|$, so the middle quotient is defined and equals one. [F1, F2, step 1.1, step 2.1, algebra] ∎ 