---
id: rem-dynkin-diagrams-do-not-classify-global-lie-groups
kind: remark
title: Dynkin diagrams do not classify global Lie groups
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cartan-killing-classification-of-complex-simple-lie-algebras, cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §11, remarks on the scope of the classification, printed pp. 202-203"
landmark: false
verification:
  audited: 2026-09-22
---

## Remark

Assume the Axiom of Choice ([[def-axiom-of-choice]]); it is inherited from the classification theorem cited below.

A connected Dynkin diagram classifies a finite-dimensional complex simple Lie
algebra, and finite disjoint unions of connected Dynkin diagrams classify
finite-dimensional complex semisimple Lie algebras. Neither classifies a real
form or a connected Lie group with that
Lie algebra
([[thm-cartan-killing-classification-of-complex-simple-lie-algebras]],
[[cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams]]).
Global classification of connected Lie groups requires isogeny or lattice
data: connected groups with a given semisimple Lie algebra are classified by
discrete central subgroups of the corresponding simply connected group, and
that covering and lattice information is not visible in the diagram. Real
semisimple Lie algebras require real-form data, namely an involution or a
Satake diagram, because the diagram of the complexification does not
distinguish the real forms. Both points are the subject of the following
false statements and their refutations on this page; the classification of
real forms and of global groups belongs to later pages and is not claimed
here.
