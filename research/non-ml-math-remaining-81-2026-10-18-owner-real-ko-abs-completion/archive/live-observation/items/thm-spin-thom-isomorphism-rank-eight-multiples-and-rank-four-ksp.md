---
id: thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp
kind: theorem
title: "Real spin Thom classes in ranks divisible by eight and four"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 9
deps: [thm-real-clifford-thom-isomorphism, lem-real-and-quaternionic-spinor-module-morita-evaluation, def-axiom-of-choice]
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

For a given Spin bundle V over a finite CW base, multiplication by its real spinor Hopf class defines a map KO^0(X)→\widetilde{KO}^0(Th(V)) when rank(V)=8m and a map KSp^0(X)→\widetilde{KO}^0(Th(V)) when rank(V)=8m+4. In the first case the class is represented by the real spinor module; in the second it is represented by the quaternionic spinor module with the right-H convention of [[lem-real-and-quaternionic-spinor-module-morita-evaluation]]. Prove both maps are natural isomorphisms and compatible with direct sums; retain the two source theories as distinct branches.

## Authoring status

Depends on the unresolved Clifford–Thom theorem and Morita evaluation. The rank-8m source KO^0 and rank-8m+4 source KSp^0 must both remain explicit.
