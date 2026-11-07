---
id: lem-global-idele-norm-subgroup-is-open
kind: lemma
title: The idelic norm subgroup is open
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
- def-idele-group-of-a-global-field
- thm-local-artin-reciprocity-and-norm-index
- thm-archimedean-local-reciprocity
- def-axiom-of-choice
- def-dependent-choice
- lem-unramified-local-unit-norms-and-cohomology
- lem-finite-separable-local-field-norm-image-is-open
- cor-only-finitely-many-primes-ramify
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: VII §2, Proposition 2.8
  - title: J. Neukirch, Algebraic Number Theory
    url: https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf
    locator: VI §2, local norm images, printed pp. 369–371
verification: {}
---


## Statement

Assume AC and DC. Let $L/K$ be a finite Galois extension of number fields. The image $N_{L/K}(\mathbb A_L^\times)$ of the idele norm is an open subgroup of $\mathbb A_K^\times$.

## Statement references

[[def-idele-group-of-a-global-field]]

[[thm-local-artin-reciprocity-and-norm-index]]

[Milne, *Class Field Theory*, VII §2](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Neukirch, *Algebraic Number Theory*, VI §2](https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf)

## Facts & Assumptions

**Given:** AC and DC; a finite Galois extension $L/K$ of number fields.

[A1] Every finite separable nonarchimedean local extension has an open
norm image by the direct determinant/trace Hensel proof; this does not
require the extension to be abelian. For a finite Galois local extension,
the local norm-index theorem also gives finite index.
[[lem-finite-separable-local-field-norm-image-is-open]]
[[thm-local-artin-reciprocity-and-norm-index]]

[F4] Only finitely many rational primes ramify in the number field $L$;
all relative ramification in $L/K$ lies over this finite set. Thus only
finitely many finite places of $K$ ramify in $L/K$.
[[cor-only-finitely-many-primes-ramify]]

[F1] At a finite unramified local extension, units are norms by the complete unit-norm lemma; the local Artin kernel then identifies those units as trivial under reciprocity. [[lem-unramified-local-unit-norms-and-cohomology]] [[thm-local-artin-reciprocity-and-norm-index]]

[F2] A global idele is a unit at all but finitely many finite places. [[def-idele-group-of-a-global-field]]

[F3] At an archimedean place, the norm image is the full multiplicative group or $\mathbb R_{>0}\le\mathbb R^\times$, hence it is open and has finite index. [[thm-archimedean-local-reciprocity]]

[A2] AC and DC are inherited from the stated local reciprocity interface. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Given:** The data above.

1.1 Let $S$ contain every archimedean place and every finite place ramified in $L/K$; it is finite by [F4]. For each finite $v\in S$, the product of local norm images over $w\mid v$ is an open subgroup $V_v\le K_v^\times$ by [A1]; for each archimedean $v\in S$, this follows from [F3]. For $v\notin S$, the extension is unramified and [F1] gives $\mathcal O_v^\times\subseteq N_{L_w/K_v}(\mathcal O_{L_w}^\times)$. [A1, F1, F3, F4, given, choose, A2]

2.1 The restricted-product subgroup $\prod_{v\in S}V_v\times\prod_{v\notin S}\mathcal O_v^\times$ is open in $\mathbb A_K^\times$. Every element of this subgroup is an idele norm: at the finitely many places in $S$ choose local norm preimages; outside $S$, [F1] gives unit norm preimages for unit components. The selected preimages are units at all but finitely many places, so they form an idele; AC supplies the simultaneous local choices. Hence this open subgroup is contained in $N_{L/K}(\mathbb A_L^\times)$, so the latter is open. [F1, F2, step 1.1, given, construct] ∎
