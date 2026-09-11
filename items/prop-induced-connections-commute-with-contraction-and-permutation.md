---
id: prop-induced-connections-commute-with-contraction-and-permutation
kind: proposition
title: "Induced connections commute with contraction and permutation"
status: published
origin: pipeline
deps: ["def-product-connection-on-tensor-and-hom-bundles","def-dual-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

For the induced tensor connections, every fixed permutation $\tau$ of tensor slots intertwines covariant differentiation. So does any contraction $C$ of an $E^*$ slot against an $E$ slot equipped with dual connections:
$$\nabla_X(\tau T)=\tau(\nabla_XT),\qquad \nabla_X(CT)=C(\nabla_XT).$$
A full contraction takes values in scalar functions, with derivative $X$.

## Facts & Assumptions

**Given:** Tensor bundles with the product connections from supplied factor connections; a permutation or a dual/primal contraction.

[F1] The tensor connection differentiates each factor once and local product frames span all sections ([[def-product-connection-on-tensor-and-hom-bundles]]).

[F2] The dual connection differentiates the evaluation pairing by the ordinary product rule ([[def-dual-connection]]).

## Proof

1.1 For an elementary tensor, applying a permutation to the sum of derivatives in [F1] merely moves each differentiated slot to its permuted position. Differentiating the permuted tensor gives exactly this reordered sum, with no sign for ordinary tensor permutation. Thus the first identity holds on elementary tensors. [F1]

1.2 For a tensor with contracted factors $\alpha,s$ and remaining tensor $T$, contraction yields $\alpha(s)T$. Its derivative is $X(\alpha(s))T+\alpha(s)\nabla_XT$. The two terms from differentiating the contracted factors before contraction are $((\nabla_X\alpha)(s)+\alpha(\nabla_Xs))T=X(\alpha(s))T$ by duality. The remaining differentiated slots give $\alpha(s)\nabla_XT$. This proves the contraction identity on elementary tensors, including full contraction where $T=1$. [F1, F2]

2.1 Expand a general local section in finitely many product-frame tensors. Both sides of either identity add the same coefficient-derivative term $X(f)$ on a term $fT$, so the established identities extend to every section. Identity permutations, zero tensors and zero-rank factors are included. With no tensor slots the connection is scalar differentiation and the empty permutation is the identity; contractions require an actual dual/primal pair. The argument is local and uses no AC. [F1, step 1.1, step 1.2] ∎
