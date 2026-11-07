---
id: def-idele-group-of-a-global-field
kind: definition
title: "Idele group of a global field with restricted-product topology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-adele-ring-of-a-global-field
  - def-local-field-valuation-ring-uniformizer-and-residue-field
dependency_level: 5
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: >-
  The place and completion assumptions are inherited from the adele
  definition. The idelic restricted-product construction itself is choice-free.
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §4, printed pp.169–171, restricted-product definition and idelic topology."
verification:
  precheck: n/a

---

## Definition

Let $F$ be a global field with finite-place completions $F_v$ and valuation rings $\mathcal O_v$. The **idele group** of $F$ is the restricted product
$$
\mathbb A_F^\times=\left\{(x_v)_v\in\prod_v F_v^\times:\ x_v\in\mathcal O_v^\times\text{ for all but finitely many finite places }v\right\}.
$$
Its topology is the restricted-product topology whose basic open neighborhoods are products $\prod_v U_v$ with $U_v$ open in $F_v^\times$ and $U_v=\mathcal O_v^\times$ at all but finitely many finite places; archimedean factors are unrestricted. Multiplication and inversion are coordinatewise. This topology is specified independently of the topology that the adele ring induces on its subset of units.

## Definition references

[[def-adele-ring-of-a-global-field|Adele completions and place indexing]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field|Finite-place valuation rings and units]]

[J. S. Milne, Chapter V §4, “Ideles”](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
