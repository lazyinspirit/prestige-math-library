---
id: thm-spin-ko-thom-orientation-in-all-ranks
kind: theorem
title: "Real Spin KO Thom orientation in all ranks and degrees"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 12
deps: [lem-reduced-relative-ko-suspension-exactness-and-product, thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp, thm-real-bott-periodicity-from-rank-eight-clifford-thom, thm-ko-coefficient-table-and-eightfold-periodicity, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Statement

For a given Spin real vector bundle V of rank r over a finite CW pair (X,A), the real spinor symbol defines a degree-shifted map KO^j(X,A)→KO^(j−r)(Th(V)) in every integer degree j. Construct the map by adding a trivial real bundle to reach rank divisible by eight, applying the local rank-eight Spin Thom theorem, and desuspending. Prove independence of stabilization, naturality and direct-sum/product compatibility. If r≡4 mod 8, use KSp as the unshifted source before applying the degree shift.

## Authoring status

Requires a local arbitrary-rank stabilization/desuspension argument with independence, naturality and product compatibility, including the KSp residue class. No complete proof is supplied.
