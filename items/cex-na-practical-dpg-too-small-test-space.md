---
id: "cex-na-practical-dpg-too-small-test-space"
kind: "counterexample"
title: "A smaller constant test space gives a nontrivial practical DPG kernel"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 6
deps:
  [
    "def-na-ultraweak-poisson-dpg-formulation",
    "alg-na-practical-dpg-finite-riesz-solves"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance: { "statement": "literature-derived", "proof": "ai-altered" }
sources:
  {
    "references":
      [
        {
            "title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG
              method",
            "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf",
            "locator": "Complete 15-page article; §2 Theorem 2.1/proof, §§3.1–3.4 and Lemmas
              3.1–3.3."
          },
        {
            "title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method
              for the Poisson equation",
            "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf",
            "locator": "Complete 22-page article; §§3–4 and Theorem 4.2; simple connectivity
              hypothesis noted."
          },
        {
            "title": "Carstensen, Demkowicz, and Gopalakrishnan, A Posteriori Error Control
              for DPG Methods",
            "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf",
            "locator": "Complete 21-page article; complete §2/Theorem 2.1 proof and §3.1."
          }
      ]
  }
verification:
  precheck: pass
---

## Statement

On one triangle, take a four-dimensional trial subspace of $P_1(K)^2\times P_0(K)$ and the three-dimensional constant test space $P_0(K)^2\times P_0(K)$. The practical trial-to-test map has a nontrivial kernel, so the normal equations cannot have a unique trial solution for any load for which a solution exists.

## Facts & Assumptions

**Given:** A nondegenerate triangle, the ultraweak form, and the finite Riesz construction.

[F1] The cell trial/test form and polynomial setting are specified in the DPG formulation. ([[def-na-ultraweak-poisson-dpg-formulation]])

[F2] The practical trial-to-test map is the finite Riesz representative. ([[alg-na-practical-dpg-finite-riesz-solves]])

## Proof

1.1 Choose $W_h=\operatorname{span}\{(e_1,0),(e_2,0),(x_1e_1,0),(x_2e_2,0)\}$ in the vector/scalar volume trial variables; these four fields are linearly independent as $L^{2}$ pairs. The constant test space has dimension $2+1=3$. [F1, construct, algebra]

2.1 In a fixed basis of the constant test space, the Gram matrix is positive definite, and [F2] returns $G^{-1}g(w)$ in that basis. The right-hand side $g(w)$ is linear in $w$, so the restricted practical trial-to-test map is linear from the four-dimensional trial subspace into the three-dimensional test space. The images of four independent basis vectors are therefore linearly dependent; the corresponding nonzero coefficient vector is in the kernel. The normal matrix is $B_r^*B_r$, so this vector has zero quadratic energy; if a solution exists, adding any multiple produces another trial solution. [F2, step 1.1, algebra] ∎
