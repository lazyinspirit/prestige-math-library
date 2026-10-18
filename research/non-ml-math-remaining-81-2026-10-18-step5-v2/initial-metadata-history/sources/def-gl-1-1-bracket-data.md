---
id: def-gl-1-1-bracket-data
kind: definition
title: Bracket data for gl(1|1)
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-lie-superalgebra-over-complex-numbers
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §§2.2 and 2.3.1"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 12–14 and 18–20: supercommutator convention and general linear Lie superalgebra matrices."
    - title: "Victor Kac, Classification of Supersymmetries, §2"
      url: https://arxiv.org/pdf/math-ph/0302016
      locator: "ICM 2002 survey, §2: finite-dimensional simple Lie-superalgebra families and conventions."
verification:
  precheck: n/a
---

## Definition

Let $E=\mathbb C h_1\oplus\mathbb C h_2\oplus\mathbb C e\oplus\mathbb C f$, with $h_1,h_2$ even and $e,f$ odd. Define a complex-bilinear bracket on this graded vector space by
$$ [h_1,e]=e,\quad [h_2,e]=-e,\quad [h_1,f]=-f,\quad [h_2,f]=f,\quad [e,f]=[f,e]=h_1+h_2, $$
with $[h_i,h_j]=[e,e]=[f,f]=0$; all reversed even–odd brackets are determined by graded skew symmetry. Denote this bracketed graded vector space by the **gl(1|1) bracket data**. The next item proves that it is a Lie superalgebra; until then this definition is only the specified vector space and bracket table.
