---
id: rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff
kind: remark
title: "Holonomy and monodromy groupoids need not be Hausdorff"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps:
  - def-monodromy-groupoid-of-a-foliation
  - def-holonomy-groupoid-of-a-foliation
  - def-countable-choice
aliases: []
proved_here: false
provenance:
  statement: literature-derived
  proof: not-applicable
external_dependency:
  source_url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
  exact_statement: "Proposition 2.9: Mon(F) and Hol(F) are (possibly non-Hausdorff) manifolds. Remark 2.10 describes the failure of Hausdorffness: a non-contractible loop gamma in a leaf approached by contractible loops gamma_n in nearby leaves makes the elements g_n converge both to a non-trivial arrow and to a unit, so Mon(F) is not Hausdorff, and similar phenomena appear for Hol(F); Remark 2.10(b) records that there is no simple relationship between the Hausdorff properties of the two groupoids. Exercises 2.2-2.4 give examples (Reeb foliation of S^3, the complement of the central circles, and S^2 x S^1) where both groupoids are non-Hausdorff (Exercise 2.2), or exactly one is Hausdorff (Exercises 2.3-2.4)."
  local_proof_attempt: "Not proved here. The construction of the smooth groupoid topology on the arrow sets would require charts on Mon(F) and Hol(F) built from the transverse diffeomorphism germs, which this page deliberately does not construct: the groupoid definitions of this page are set-theoretic and assert no topology on the arrows. The recorded mechanism (a non-contractible loop approached by contractible loops in nearby leaves, so that arrows converge both to a non-trivial arrow and to a unit) is a qualitative description of the source's proof, not a local verification of the Hausdorff failure."
  necessity: "The remark is needed so that no consumer of the set-theoretic groupoid definitions silently assumes that the arrow spaces are Hausdorff. The definitions on this page assert no topology at all, so the non-Hausdorff phenomenon is compatible with them and must be recorded rather than left to the reader."
sources:
  references:
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
verification:
  precheck: n/a
---

## Remark

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The
monodromy groupoid and the holonomy groupoid of a foliation carry smooth
structures making them Lie groupoids, and they can fail to be Hausdorff
even though the foliated manifold is Hausdorff; the two failures are
independent, in the sense that either groupoid can be Hausdorff while the other
is not. This item **records** the phenomenon without proving it (the frontmatter
records `proved_here: false`); it is not
proved here, and no topology on the groupoid arrow sets is constructed on this
page. The groupoid definitions of this page
([[def-monodromy-groupoid-of-a-foliation]],
[[def-holonomy-groupoid-of-a-foliation]]) are set-theoretic and make no
Hausdorffness assertion.

The recorded mechanism is this: a non-contractible loop in a leaf that is
approached by contractible loops in nearby leaves makes elements of the
monodromy groupoid converge both to a non-trivial arrow and to a unit, which is
incompatible with Hausdorffness; the same phenomenon can occur for the holonomy
groupoid, and the two Hausdorff properties are independent. A self-contained
example would require constructing the smooth groupoid topology on the arrow set, which
this page deliberately does not do.
