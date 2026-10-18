---
id: thm-stable-clifford-hopf-decomposition-over-sphere-bundles
kind: theorem
title: "Stable Clifford–Hopf decomposition over sphere bundles"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 6
deps: [cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac, lem-finite-cw-relative-ko-triples-and-homotopy-invariance, lem-reduced-relative-ko-suspension-exactness-and-product, thm-affine-clifford-hopf-maps-are-highly-connected, lem-volume-chirality-and-clifford-hopf-clutching, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Statement

Let X be a finite CW complex and V→X an oriented Euclidean bundle of rank n=4m>0. Put V̂=S(ℝ⊕V), with projection π and pole sections s_±(x)=(±1,0). For a C(V)-module bundle Λ, let H(V,Λ) be the sphere-bundle clutching bundle of [[lem-volume-chirality-and-clifford-hopf-clutching]]. The regular Clifford–Hopf bundle means H(V,C(V)) for the regular graded module. Every real vector bundle over V̂ becomes, after adding finitely many trivial bundles and regular Clifford–Hopf bundles, a direct sum π^*E₀⊕H(V,Λ), where E₀ is a real bundle on X and Λ is a graded C(V)-module bundle. The local proof must preserve the rank, winding, finite-CW and stabilization hypotheses during cell induction.

## Authoring status

Requires the missing finite-CW cell-induction argument, affine Hopf connectivity, KO triple/exactness infrastructure, and complement-under-AC result. State the rank, winding, stabilization and finite-CW conditions in the proof when supplied.
