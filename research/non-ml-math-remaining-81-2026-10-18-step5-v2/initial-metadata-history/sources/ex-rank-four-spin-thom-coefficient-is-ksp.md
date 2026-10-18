---
id: ex-rank-four-spin-thom-coefficient-is-ksp
kind: example
title: Rank four mod eight has KSp as the unshifted source
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations-examples
dependency_level: 14
deps:
- thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp
- def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement
      1 (1964)
    url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf
  - title: Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf
      bundles and Morse theory (2021)
    url: https://arxiv.org/pdf/2011.14368
  - title: M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with
      K-Theory and Reality reprint
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
proof_strategy: direct
---

## Example

Assume AC. For a given Spin bundle of rank $8m+4$, the source of the unshifted real Thom map is $KSp^0(X)$. The real spinor is quaternionic, so the rank-eight $KO^0(X)$ statement cannot be substituted in this residue class.

## Facts & Assumptions

**Given:** AC, a finite CW base and a given Spin bundle of rank $8m+4$.

[F1] The rank-four-residue Spin Thom theorem gives $KSp^0(X)\cong KO_c^0(V)$ by balanced quaternionic spinor tensor, while the rank-eight-residue branch has real source ([[thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp]]).

## Verification

1.1 In this rank the ungraded fiber Clifford algebra is a quaternionic matrix algebra. Its spinor commutant is $\mathbb H^{\mathrm{op}}$, and the multiplicity objects in [F1] are right-quaternionic bundles. Hence its map is $[E]\mapsto\Phi_V(E\otimes_{\mathbb H}\Sigma)$, not the ordinary real tensor product by a real line coefficient. [given, F1, algebra]


2.1 At a point in rank four, a quaternionic line produces the actual quaternionic Hopf generator of $\widetilde{KO}^0(S^4)$. Regarding that multiplicity line merely as a four-dimensional real space changes the balanced tensor operation; it does not turn the theorem into a real-line-source formula. The same Clifford residue and balanced evaluation apply in every rank $8m+4$, proving the stated source distinction. [F1, step 1.1, algebra] ∎
