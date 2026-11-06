---
id: ex-heterotic-e8e8-and-spin32-lattice-models
kind: example
title: "Heterotic E8e8 And Spin32 Lattice Models"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 8
domain: physics
physical_scope: "Two specified rank-16 lattice inputs in the ten-dimensional heterotic construction. The lattice properties are checked; the current-algebra and global gauge-group identifications are explicitly source-reported, not derived here."
deps:
  - def-heterotic-string-worldsheet-construction
  - def-e8-and-d16plus-rank16-lattices
  - lem-e8-d16plus-are-even-unimodular
  - lem-st-chiral-lattice-boson-sector-properties
dependency_roles:
  def-heterotic-string-worldsheet-construction: formulation-prerequisite
  def-e8-and-d16plus-rank16-lattices: mathematical-premise
  lem-e8-d16plus-are-even-unimodular: mathematical-premise
  lem-st-chiral-lattice-boson-sector-properties: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapters 6.5–6.9, printed pp. 140–154: RNS spectrum/GSO, Type I projection, and heterotic construction."
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, printed pp. 104–107: chiral fermion bosonization and E8/rank-16 even self-dual lattice sectors."
    - title: "David J. Gross, Jeffrey A. Harvey, Emil Martinec, and Ryan Rohm, Heterotic String, Physical Review Letters 54 (1985), 502–505"
      url: "https://doi.org/10.1103/PhysRevLett.54.502"
      locator: "Abstract: ten-dimensional consistency permits gauge groups Spin(32)/Z2 or E8×E8."
    - title: "Thomas Mohaupt, Selected Topics in String Theory, Liverpool PGR lecture notes (2022)"
      url: "https://pcwww.liv.ac.uk/~mohaupt/Selected_Topics_2022.pdf"
      locator: "§2.4, pp. 21–23: rank-16 lattice constructions and the association of E8×E8 and D16+ with gauge groups E8×E8 and Spin(32)/Z2."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

The specified rank-16 lattice inputs E8 direct-sum E8 and $D16^+$, defined in def-e8-and-d16plus-rank16-lattices, give the two standard ten-dimensional heterotic lattice constructions. The source reports the associated E8 times E8 and Spin(32)/Z2 current-algebra/global-group choices. This is a pair of explicit examples and makes no claim that no other rank-16 lattice or modular invariant exists.

## Example references

[Timo Weigand, Introduction to String Theory, Winter term 2011/12](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures, arXiv:hep-th/9108028v1](https://arxiv.org/pdf/hep-th/9108028v1)

[David J. Gross, Jeffrey A. Harvey, Emil Martinec, and Ryan Rohm, *Heterotic String*, Physical Review Letters 54 (1985), 502–505](https://doi.org/10.1103/PhysRevLett.54.502), abstract.

[Thomas Mohaupt, *Selected Topics in String Theory*, Liverpool PGR lecture notes (2022)](https://pcwww.liv.ac.uk/~mohaupt/Selected_Topics_2022.pdf), §2.4, pp. 21–23.

## Facts & Assumptions

**Given:** The ten-dimensional heterotic construction, the two specified rank-16 lattices, and the source-reported current-algebra/global-group associations.

[F1] [[def-heterotic-string-worldsheet-construction]] pairs the left critical RNS sector with a right bosonic sector whose internal chiral momenta are indexed by a specified positive-definite even self-dual rank-16 lattice.

[F2] [[def-e8-and-d16plus-rank16-lattices]] defines $E_8\oplus E_8$ and $D_{16}^+$ as the displayed rank-16 lattices.

[F3] [[lem-e8-d16plus-are-even-unimodular]] proves that these two displayed lattices are positive-definite even unimodular rank-16 lattices.

[F4] [[lem-st-chiral-lattice-boson-sector-properties]]: the rank-16 internal Heisenberg sector has central charge 16.

[A1] Gross–Harvey–Martinec–Rohm report that the consistent ten-dimensional heterotic gauge-group choices include $E_8\times E_8$ and $\operatorname{Spin}(32)/\mathbb Z_2$; Mohaupt’s §2.4 discussion associates those groups with the $E_8\oplus E_8$ and $D_{16}^+$ lattice constructions, respectively. This example reports rather than reconstructs the current-algebra and global-form derivation.

## Verification

1.1 The product lattice $E_8\oplus E_8$ has rank $8+8=16$ by its definition [F2]; $D_{16}^+$ has rank 16 by its ambient space. By [F3], both satisfy the even self-dual positive lattice hypothesis in [F1], so each is an admissible specified input to the heterotic construction. [given, F1, F2, F3, algebra]

2.1 Substituting $\Lambda=E_8\oplus E_8$ into [F1] gives the first source-reported construction, with current algebra/global group $E_8\times E_8$ by [A1]. Substituting $\Lambda=D_{16}^+$ gives the second, with source-reported global group $\operatorname{Spin}(32)/\mathbb Z_2$. Since the example lists two inputs and makes no exhaustive classification claim, neither substitution depends on uniqueness of rank-16 lattices. [F1, F2, A1, step 1.1]

3.1 The construction uses the rank-16 chiral lattice sector, which contributes $c=16$ by [F4]; adding the ten noncompact Heisenberg bosons gives $c_R=26$. This is consistent with the specified right-moving critical central charge, while the gauge-group labels remain source-reported data. [F1, F4, step 2.1, algebra] ∎
