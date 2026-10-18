---
id: thm-affine-clifford-hopf-maps-are-highly-connected
kind: theorem
title: "Affine Clifford–Hopf maps are highly connected"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 5
deps: [lem-iterated-suspension-and-winding-control-for-clifford-families, thm-real-complex-clifford-algebra-classification, lem-relative-path-shortening-connectivity]
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

Let k=4m−1, d≥1, and ρ:C_k→SO(p) be positive in the convention of [[lem-iterated-suspension-and-winding-control-for-clifford-families]]. Let s_k be the real dimension of an irreducible C_k-module and let η be the stable winding label. The Clifford Hopf map is μ_ρ:S^k=S(ℝ⊕ℝ^k)→SO(p), μ_ρ(x₀,…,x_k)=x₀I+∑_(i=1)^k x_iJ_i. Let i=J₁⋯J_(k−2), the specified complex structure on the invariant blocks, and write ℂ-dimension with respect to i. An affine Hopf map of winding η is the block map I on an invariant complement L₀ and μ_(ρ|L₁) on an invariant C_k-submodule L₁ with dim_ℂ(L₁)=η. For p≥p₀(d) and s_k d≤η≤p/4, the inclusion of these affine Hopf maps into the stable-winding-η component Map_*(S^k,SO(p))_η is d-connected in the finite-CW relative sense defined in [[lem-relative-path-shortening-connectivity]].

## Authoring status

Depends on unresolved item lem-iterated-suspension-and-winding-control-for-clifford-families and on batch-35 classification supplier thm-real-complex-clifford-algebra-classification. The batch-35 Statement/Proof was read, but its cross-batch readiness is not established here. Keep p0(d), s_k and the positive-representation hypotheses explicit.
