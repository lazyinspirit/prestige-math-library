---
id: rem-higher-local-class-field-theory-proof-gate
kind: remark
title: "Higher local class field theory requires a separate full-text proof pass"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-d-local-field
  - def-milnor-k-group-of-a-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, 2nd ed., Chapters VII §5 and IX §4"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Printed pp. 264–266, §5.5; pp. 316–317, §4.13."
    - title: "Matthew Morrow, An Introduction to Higher Dimensional Local Fields and Adeles, §5.2"
      url: "https://arxiv.org/pdf/1204.0586v2"
      locator: "Higher local class field theory overview and norm-residue maps."
verification: {}
---

## Remark

For a $d$-local field $K$ with $d\ge2$, this page does not assert a general
higher local class field theory theorem. A complete claim must specify the
Milnor $K$-group and its topology, the target abelian Galois group and its
topology, the reciprocity map, its kernel and image, the coefficient and
residue-characteristic range, and its compatibility with finite extensions.
Fesenko–Vostokov VII.5.5 displays a higher symbol and IX.4.13 outlines a
reciprocity construction, but neither passage proves the general
reciprocity identification. Classical global higher power reciprocity laws
do not supply this local theorem. This is a proof-source boundary, not a
claim that higher local class field theory is an open problem.

## Remark references

[[def-d-local-field]]

[[def-milnor-k-group-of-a-field]]

[Fesenko–Vostokov, *Local Fields and Their Extensions*, 2nd ed., VII §5.5 and IX §4.13](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[Matthew Morrow, *An Introduction to Higher Dimensional Local Fields and Adeles*, §5.2](https://arxiv.org/pdf/1204.0586v2)

## Facts & Assumptions

**Given:** a $d$-local field $K$ with $d\ge2$.

[F1] [[def-d-local-field]] fixes the complete discrete-valuation tower and finite final residue field.

[F2] [[def-milnor-k-group-of-a-field]] defines each group $K_j^M(K)$ by symbols and Steinberg relations, but does not itself specify a higher local topology or a reciprocity map.

[L1] Fesenko–Vostokov IX.4.13 describes a candidate map from the top Milnor group to the abelian Galois group and says the kernel is an infinitely divisible subgroup, while directing the reader to external higher local CFT work for details. [Fesenko–Vostokov, IX §4.13](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[L2] Fesenko–Vostokov VII.5.5 supplies a symbol formula but defers the reciprocity identification to higher local class field theory. [Fesenko–Vostokov, VII §5.5](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Proof

**Proof technique:** separate the one-dimensional Milnor $K$ results from the unproved higher-dimensional reciprocity identification.

**Given:** [F1]–[F2] and source passages [L1]–[L2].

1.1 A reciprocity theorem must provide a specified map between the top Milnor $K$-group and the abelian Galois group, together with its kernel, topology, coefficient range, and functoriality. The field tower [F1] and abstract Milnor groups [F2] do not determine these data by themselves. [F1, F2, given, algebra]

2.1 The inspected higher-dimensional source passages [L1]–[L2] provide an outline and formula but refer elsewhere for the reciprocity proof; they do not verify the full required data in this item. Therefore the pair records this bounded gate and does not infer a higher-local theorem from one-dimensional local results or global power reciprocity. [L1, L2, step 1.1, given, algebra] ∎