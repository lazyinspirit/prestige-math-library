---
id: ex-knot-kt-21-worked-cases
kind: example
title: "A knot and its reverse mirror sum to a slice knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reverse-mirror-of-oriented-knot
  - def-smooth-knot-concordance
  - def-locally-flat-topological-knot-concordance
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-smooth-and-topological-slice-genus
  - lem-smooth-and-topological-slice-genus-minima-exist
  - thm-knot-concordance-is-an-abelian-group
  - lem-general-knot-reverse-mirror-sum-is-ribbon
  - lem-smooth-slice-iff-concordant-to-unknot
  - def-countable-choice
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§1.1, Proposition 1.6/Exercise 6; §3, Proposition 3.6/Exercise 11, pp.4–5, 11–12 and 23"
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.3 and inverse discussion; §9.5, four-ball genus, pp.322–323, 341"
---

## Example

Assume the Axiom of Countable Choice. For every smooth oriented knot $K\subset S^3$, the connected sum $K\#K^\dagger$ bounds a smooth disk in $B^4$ with only radial minima and saddles, is therefore also bounded by a locally flat topological disk, and satisfies $g_4^{\mathrm{sm}}(K\#K^\dagger)=g_4^{\mathrm{top}}(K\#K^\dagger)=0$. Its reverse-mirror summand represents the inverse of $[K]$ in each concordance group.

## Example references

[[def-reverse-mirror-of-oriented-knot|The reverse-mirror knot]]

[[def-smooth-and-topological-slice-genus|The two slice-genus minima]]

[[thm-knot-concordance-is-an-abelian-group|The concordance group operations and inverse convention]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth oriented knot $K\subset S^3$.

[F1] The reverse mirror is formed by applying the fixed orientation-reversing reflection and then reversing the knot orientation. ([[def-reverse-mirror-of-oriented-knot]])

[F2] A smooth proper disk is locally flat as a topological proper surface, and its genus is $0$ because $\chi(D^2)=1$. ([[def-locally-flat-proper-surface-and-concordance-collars]], [[def-smooth-and-topological-slice-genus]])

[F3] The smooth and topological slice genera are the least genera in the respective nonempty surface classes. ([[def-smooth-and-topological-slice-genus]], [[lem-smooth-and-topological-slice-genus-minima-exist]])

[F4] The general reverse-mirror disk construction applies to every smooth oriented knot. ([[lem-general-knot-reverse-mirror-sum-is-ribbon]])

[F5] In the smooth concordance group, the reverse-mirror class is the additive inverse; the current theorem's smooth branch proves this using the disk in [F4]. ([[thm-knot-concordance-is-an-abelian-group]])

[F6] The full TOP group interface likewise gives the reverse-mirror class as the inverse for locally flat concordance, with the same countable-choice hypothesis. Its TOP connected-sum input includes the compact real-code/$L[r]$ specialization in the compatibility supplier at exactly this standard-product annulus scope; the unqualified literature assertion alone is not treated as an AC_omega theorem. No new local normal-neighborhood proof is asserted here. ([[thm-knot-concordance-is-an-abelian-group]])

## Verification

**Proof technique:** direct.

1.1 By [F1], the notation $K^\dagger$ refers to the fixed reverse-mirror operation. Apply [F4] to obtain a smooth disk $D$ bounded by $K\#K^\dagger$ with radial critical indices $0$ or $1$. Since the disk is smooth, [F2] makes it an admissible locally flat surface as well. Its Euler characteristic gives $g(D)=0$. [F1, F2, F4, given, construct]

2.1 Every admissible surface genus is in $\mathbb N_0$, while $D$ contributes genus $0$ to both genus sets. Thus their least elements are $0$ by [F3]. [F2, F3, step 1.1, algebra]

3.1 By [F5], the class of $K^\dagger$ is the inverse of $[K]$ in the smooth group; [F6] gives the same conclusion in the locally flat topological group. The common disk from step1.1 is admissible in both categories, and all input choice hypotheses are $\mathrm{AC}_\omega$. This proves the entire example, including its group-class assertion. [F5, F6, step 1.1] ∎

## Sources

[[lem-general-knot-reverse-mirror-sum-is-ribbon]]

[[thm-knot-concordance-is-an-abelian-group]]
