---
id: def-reduced-relative-ko-and-ko-compact-support
kind: definition
title: "Reduced and relative real K-theory and compact support"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 1
deps: [def-real-ko-and-ksp-grothendieck-groups, def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]
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

For a based finite CW complex (X,x0), define reduced KO^0 by ker(KO^0(X)→KO^0(x0)). For a finite CW pair A⊂X, define KO^0(X,A)=reduced KO^0(X/A); write KO_c^0(V)=reduced KO^0(Th(V)) for a finite-rank Euclidean bundle V, and define KO^(−j)(X,A)=reduced KO^0(Σ^j(X/A)) for j≥0. The basepoint and quotient conventions are part of the definition.

The quotient X/A is based at the collapsed subspace; when A=∅ use X_+. The suspension Σ^j uses the smash product with S^j and this fixed basepoint.
