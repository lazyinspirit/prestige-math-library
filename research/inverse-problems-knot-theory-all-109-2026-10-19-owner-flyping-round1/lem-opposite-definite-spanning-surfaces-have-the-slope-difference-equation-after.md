---
id: lem-opposite-definite-spanning-surfaces-have-the-slope-difference-equation
kind: lemma
title: "Opposite definite spanning surfaces have the slope difference equation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-corrected-normal-signature-is-independent-of-spanning-surface
  - lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes
  - def-one-variable-alexander-module-of-an-oriented-link
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the corrected normal-signature invariant and the normal-transfer and linking interfaces. The signature and slope calculation is finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Proposition 1.22, PDF p.9"
      url: "https://arxiv.org/pdf/2008.06490v3"
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), Corollary 8 printed p.62"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume full AC. Let $F_+,F_-\subset S^3$ be compact smooth embedded spanning surfaces for the same nonempty link $L=K_1\cup\cdots\cup K_m$, with no closed components. The surfaces may be disconnected and nonorientable. Suppose the full rational normal-transfer pairing of $F_+$ is positive definite and that of $F_-$ is negative definite. Include cross-component entries in both pairings. Let $b_1(F)=\dim_{\mathbb Q}H_1(F;\mathbb Q)$, and define the total boundary slope by $s(F)=\sum_i\operatorname{lk}(K_i,K_i^F)$, where $K_i^F$ is an inward push in the boundary collar of $F$, oriented compatibly with any orientation of $K_i$. Then
$$s(F_+)-s(F_-)=2\bigl(b_1(F_+)+b_1(F_-)\bigr).$$
The inward pushes can be replaced by surface-normal pushes without changing the slope. No link primeness or connectedness hypothesis is imposed, and a zero-dimensional definite form is allowed.

## Statement references

[[def-axiom-of-choice]]

[[lem-corrected-normal-signature-is-independent-of-spanning-surface]]

## Facts & Assumptions

**Given:** Full AC, the two compact spanning surfaces without closed components for the same nonempty link, and their positive and negative definite full normal-transfer pairings.

[F1] For every such surface the full symmetric normal-transfer pairing has finite rank, including its cross-component entries. ([[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]])

[F2] The quantity $\operatorname{sign}(B_F)+e(F)/2$ is independent of the spanning surface, where $e(F)$ is minus the sum of the boundary-component self-linkings with surface-normal pushes. These self-linkings are independent of the arbitrary component orientations. ([[lem-corrected-normal-signature-is-independent-of-spanning-surface]])

[F3] Positive-meridian linking is a homomorphism on complement homology and is unchanged by a homotopy of the pushed cycle in the complement of the original circle. ([[def-one-variable-alexander-module-of-an-oriented-link]])

## Proof

1.1 Along an oriented component $K_i$, orient its normal disk plane using its tangent and the ambient orientation. The surface's inward conormal is a nowhere-zero vector in that plane. Rotating it by a constant quarter-turn produces a surface-normal vector. Rotating through the intervening angles and using a sufficiently small common radius gives a homotopy of pushed circles in the complement of $K_i$. Thus their self-linkings agree by [F3]. Rescaling a nonunit vector to a unit vector and changing sufficiently small radii also give such homotopies. Consequently $s(F)=-e(F)$ for either surface, and its orientation independence follows from [F2]. This comparison requires an orientation only along the boundary circle, not on the whole surface. [given, F2, F3, construct, algebra]

1.2 By [F1] the pairings are finite-dimensional real symmetric forms after scalar extension. A positive definite form has a basis in which all diagonal entries are positive, by successive completion of squares; its signature is its dimension. Applying this to the negative of a negative definite form gives signature minus its dimension. Hence $\operatorname{sign}(B_{F_+})=b_1(F_+)$ and $\operatorname{sign}(B_{F_-})=-b_1(F_-)$. The empty matrix has signature and dimension zero, so these equalities also cover zero-dimensional homology. [given, F1, algebra]

2.1 Substitute step 1.1 and step 1.2 into [F2], obtaining $b_1(F_+)-s(F_+)/2=-b_1(F_-)-s(F_-)/2$. Rearranging and multiplying by two gives exactly the asserted slope difference. The invariant in [F2] and the full pairings in [F1] allow disconnected surfaces, and no step has required link primeness. Thus the same equality retains all the scope in the Statement. [step 1.1, step 1.2, F1, F2, algebra] ∎
