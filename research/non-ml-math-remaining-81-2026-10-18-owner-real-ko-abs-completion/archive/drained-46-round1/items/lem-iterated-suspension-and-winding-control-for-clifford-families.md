---
id: lem-iterated-suspension-and-winding-control-for-clifford-families
kind: lemma
title: "Iterated suspension and winding control"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 4
deps: [lem-relative-path-shortening-connectivity, lem-real-clifford-block-rotation-index-lower-bound]
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

Let k=4m−1 and let ρ:C_k→SO(p) be a negative-square orthogonal representation with generators J₁,…,J_k. Call ρ positive when J_k=J₁⋯J_(k−1). For l=k−1, identify P_l with its unitary image J↦JJ_l⁻¹ in U(p/2). For a based loop ω:S¹→P_l, define its winding η(ω) as the winding number of det_C(ωJ_l⁻¹):S¹→S¹. The geodesic suspension Σ_J maps a based map into P_(j+1) to the map one sphere dimension higher into P_j by using the shortest geodesics from J_j to −J_j along the suspension coordinate. Iterating these maps gives θ:Map_*(S¹,P_(k−1))→Map_*(S^k,SO(p)); define the stable winding label on the image by η_s∘θ=η and extend it over stabilized block sums. Prove that this is well-defined and invariant under stabilization, that prior extendibility forces zero winding in the l=4m−2 residue, and that the terminal winding component is preserved. The positivity convention, suspension connectivity and stabilization-invariance proof are part of the obligation.

## Authoring status

Depends on the unresolved relative connectivity and block-index results. The positivity convention, suspension maps, winding normalization, terminal component and stabilization invariance still need full definitions and a local induction proof.
