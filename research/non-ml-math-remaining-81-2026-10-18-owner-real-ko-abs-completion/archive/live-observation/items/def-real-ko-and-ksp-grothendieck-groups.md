---
id: def-real-ko-and-ksp-grothendieck-groups
kind: definition
title: "Real and quaternionic bundle K-groups"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 0
deps: [def-real-and-complex-topological-vector-bundle, def-real-quaternion-matrix-algebra-notation]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
    - title: "Max Karoubi, Lectures on K-theory, ICTP Lecture Notes (2004)"
      url: "https://webusers.imj-prg.fr/~max.karoubi/Publications/71.pdf"
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
---

## Definition

For a finite CW complex X, KO^0(X) is the Grothendieck group of isomorphism classes of finite-rank real vector bundles under direct sum. KSp^0(X) is the Grothendieck group of finite-rank right-H vector bundles and H-linear isomorphisms. Pullback acts on both groups. Tensoring a real bundle with a right-H bundle gives the KO^0(X)-module structure on KSp^0(X); no internal KSp product is needed here.

A finite-rank right-ℍ vector bundle means a locally trivial bundle with finite-dimensional right-ℍ vector fibers and transition maps that are right-ℍ-linear. The Grothendieck group is the group completion of the direct-sum monoid of isomorphism classes. Pullback is defined fiberwise; the KO action uses the real tensor factor.
