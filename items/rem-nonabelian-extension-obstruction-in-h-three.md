---
id: rem-nonabelian-extension-obstruction-in-h-three
kind: remark
title: "Nonabelian extension obstruction in H^3"
status: draft
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action, rem-nonabelian-extension-obstruction-and-h-two-torsor]
external_dependency:
  source_url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
  exact_statement: "The abelian-kernel H^2 classification stops in degree two; for a prescribed nonabelian kernel the obstruction to existence moves to H^3, and realized classes form an H^2-torsor rather than a group."
  local_proof_attempt: "This page proves the abelian-kernel factor-set dictionary and its degree-two consequences, but it does not build the nonabelian cohomology machinery or the H^3 obstruction class."
  necessity: "The remark records the exact boundary between the present H^2 classification and the later nonabelian obstruction theory."
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Remark

The classification theorem on this page is specific to abelian kernels. Once
the kernel is nonabelian, the extension problem is no longer classified by an
honest group of degree-two classes.

The earlier remark [[rem-nonabelian-extension-obstruction-and-h-two-torsor]]
records the right replacement: a prescribed outer action carries an obstruction
in $H^3$, and when that obstruction vanishes the realized extension classes
form a torsor under an $H^2$ built from the center. That is the next boundary,
not a consequence of the present page.
