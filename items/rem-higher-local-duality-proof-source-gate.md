---
id: rem-higher-local-duality-proof-source-gate
kind: remark
title: "Higher local duality theorem statements require a full proof-source pass"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-d-local-field
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
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
    - title: "Matthew Morrow, An Introduction to Higher Dimensional Local Fields and Adeles, §§5.1–5.3"
      url: "https://arxiv.org/pdf/1204.0586v2"
      locator: "Milnor K-groups, higher local class field theory overview, and topology discussion."
verification: {}
---

## Remark

For a $d$-local field $K$ with finite final residue field and $d\ge2$, this
page does not assert a general higher local duality theorem. Such a theorem
requires a specified cohomology theory, coefficient category, pairing,
topology on the relevant groups, trace or invariant map, and explicit
prime-to-residue-characteristic and residue-characteristic hypotheses.
Fesenko–Vostokov VII.5.5 displays a higher-dimensional symbol formula but
does not prove its reciprocity identification; IX.4.13 outlines a higher
local reciprocity construction and refers to separate work. Morrow's notes
summarize higher local theories but do not provide the complete proof chain
for a general local duality pairing. These are source and proof obligations;
this remark makes no claim that the underlying theorems are open problems.

## Remark references

[[def-d-local-field]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[Fesenko–Vostokov, *Local Fields and Their Extensions*, 2nd ed., VII §5.5 and IX §4.13](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[Matthew Morrow, *An Introduction to Higher Dimensional Local Fields and Adeles*, §§5.1–5.3](https://arxiv.org/pdf/1204.0586v2)

## Facts & Assumptions

**Given:** a field tower in the sense of [F1], with $d\ge2$.

[F1] [[def-d-local-field]]: a $d$-local field is equipped with $d$ successive complete discrete valuations and a finite final residue field.

[F2] [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]: continuous cohomology uses the specified profinite group, discrete module, and continuous cochain convention; a duality claim must state these objects.

[L1] Fesenko–Vostokov VII.5.5 displays a higher-dimensional symbol formula; the text says its higher reciprocity interpretation applies once higher local class field theory is defined and proved. [Fesenko–Vostokov, VII §5.5](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[L2] Fesenko–Vostokov IX.4.13 sketches the higher reciprocity map and explicitly refers to Parshin, Kato, and the collection *Invitation to Higher Local Fields* for further approaches; it does not supply the full proof. [Fesenko–Vostokov, IX §4.13](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Proof

**Proof technique:** compare the precise scope of the available source passages with the data required to state a duality theorem.

**Given:** [F1]–[F2] and the inspected source passages [L1]–[L2].

1.1 The phrase “higher local duality” is not a single defined pairing: a mathematical statement must fix the groups, coefficient range, topology, and trace map. The recursive valuation datum [F1] alone supplies none of those cohomological choices, while [F2] specifies only the ordinary continuous cohomology convention for a stated profinite group and module. [F1, F2, given, algebra]

2.1 The cited passages [L1]–[L2] supply a displayed formula and an outline, not a proof of the reciprocity identification or a duality pairing with the required coefficient and topology data. Therefore this page records the bounded proof-source gate and asserts no general higher local duality theorem or open-problem status. [L1, L2, step 1.1, given, algebra] ∎