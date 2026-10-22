---
id: lem-heegaard-floer-correction-term-heegaard-invariance
kind: lemma
title: "Heegaard invariance and well-definedness of the correction term"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-heegaard-floer-plus-infinity-absolute-grading
  - def-heegaard-floer-correction-term
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic Disks and Topological Invariants for Closed Three-Manifolds"
      url: "https://arxiv.org/pdf/math/0101206v1"
      locator: "Sections 3–4, generic closed three-manifold Heegaard invariance and absolute grading"
    - title: "Jennifer Hom, Lecture Notes on Heegaard Floer Homology"
      url: "https://arxiv.org/pdf/2008.01836v1"
      locator: "Sections 2.1–2.2; Heegaard Floer groups and the correction-term construction"
---

## Statement

For every closed connected oriented rational homology three-sphere $Y$ and Spin$^c$ structure $\mathfrak t$, the standard Heegaard Floer groups $HF^\infty(Y,\mathfrak t)$ and $HF^+(Y,\mathfrak t)$ constructed from admissible pointed Heegaard diagrams are independent, up to grading-preserving isomorphism, of the diagram and regular auxiliary data. The image of $HF^\infty\to HF^+$ has a non-torsion $U$-tower bounded below in the absolute rational grading, so its minimum grading $d(Y,\mathfrak t)$ exists and is independent of choices. The normalization is $d(S^3,\mathfrak t_0)=0$.

## Statement references

[[def-heegaard-floer-plus-infinity-absolute-grading|The disk-count complex and grading conventions]]

[[def-heegaard-floer-correction-term|The correction-term definition]]

[Ozsvath and Szabo, *Holomorphic Disks and Topological Invariants for Closed Three-Manifolds*, Sections 3–4](https://arxiv.org/pdf/math/0101206v1)

[Hom, *Lecture Notes on Heegaard Floer Homology*, Sections 2.1–2.2](https://arxiv.org/pdf/2008.01836v1)

## Proof status

Escalated: the current knot Floer prerequisites do not supply the generic closed-three-manifold analytic package for arbitrary rational homology spheres. A complete local proof still needs generic admissible Heegaard data, regularity and compactness for the disk counts, proof that the differential squares to zero, Heegaard-move invariance preserving the absolute grading, and the single-tower and bounded-below statement. The cited source's global theorem is not a substitute for those missing arguments. The authoring record leaves this claim unproved.
