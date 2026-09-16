---
id: rem-finite-cw-ahss-convergence-does-not-automatically-extend-to-infinite-cw-complexes
kind: remark
title: Finite-CW AHSS convergence does not automatically extend to infinite CW complexes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cohomological-atiyah-hirzebruch-spectral-sequence, thm-homological-atiyah-hirzebruch-spectral-sequence]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "James Davis and Paul Kirk, Lecture Notes in Algebraic Topology, §9.1, printed pp. 237–246"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "§9.1, convergence hypotheses, printed pp. 237–246"
---

## Remark

The convergence theorems of
[[thm-cohomological-atiyah-hirzebruch-spectral-sequence]] and
[[thm-homological-atiyah-hirzebruch-spectral-sequence]] are stated for finite CW
complexes. Their proofs use boundedness of the skeletal filtration: for each
fixed total degree only finitely many filtration stages can differ, so both the
increasing and decreasing families of stable cycles and boundaries stabilize
after finitely many steps. For an infinite CW complex the skeletal filtration is
neither bounded nor in general finite in each total degree, and the same argument
does not apply: one needs separate hypotheses and arguments, such as conditional
or strong convergence together with the derived-limit analysis of the filtration.
No convergence and no failure of convergence is asserted here for infinite
complexes; this is a limitation of the stated theorems, not a counterexample.

## Source notes

Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf),
§9.1, printed pp. 237–246, for the finite skeletal-filtration convergence
statements and the additional hypotheses required in the infinite case.
