---
id: lem-finite-tensor-products-of-smooth-vector-bundles
kind: lemma
title: "Finite tensor products of smooth vector bundles"
status: published
origin: pipeline
deps: ["def-connection-on-a-smooth-vector-bundle"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-12
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

For finite-rank smooth real vector bundles $E_1,\ldots,E_k$ on $M$, define the fibre tensor product to be the vector space of multilinear maps $E_{1,p}^*\times\cdots\times E_{k,p}^*\to\mathbb R$. The elementary tensor $v_1\otimes\cdots\otimes v_k$ evaluates to $\prod_j\alpha_j(v_j)$. These spaces form a canonical smooth bundle, denoted $E_1\otimes\cdots\otimes E_k$, with product frames. Every local section is a finite sum of product-frame tensors with smooth coefficients. The empty product is the trivial real line.

## Facts & Assumptions

**Given:** The specified finite list of smooth bundles and the displayed multilinear model for their fibre product.

[F1] The choice-free construction from supplied bundles gives Hausdorff second-countable smooth dual and Hom bundles with their matrix transition formulas ([[def-connection-on-a-smooth-vector-bundle]]).

## Proof

1.1 In local frames $e_{j,a}$ with dual frames $\epsilon_j^a$, any multilinear functional $T$ has the expansion $T=\sum_{a_1,\ldots,a_k}T(\epsilon_1^{a_1},\ldots,\epsilon_k^{a_k})e_{1,a_1}\otimes\cdots\otimes e_{k,a_k}$. Indeed write each argument $\alpha_j=\sum_a\alpha_j(e_{j,a})\epsilon_j^a$ and expand multilinearly. Evaluation at every tuple of dual basis vectors also proves uniqueness of these coefficients. Hence the elementary product tensors form a basis; they need not individually exhaust all tensors. [F1, given]

2.1 Successive currying identifies the multilinear model with the iterated bundle $\operatorname{Hom}(E_1^*,\operatorname{Hom}(E_2^*,\ldots,\operatorname{Hom}(E_k^*,M\times\mathbb R))\ldots))$: send $T$ to $\alpha_1\mapsto(\alpha_2\mapsto\cdots T(\alpha_1,\ldots,\alpha_k))$, and reverse by evaluation. Each arrow is linear in its displayed argument exactly because $T$ is multilinear. Transport the smooth bundle structure supplied by repeated applications of [F1] through this bijection. In these Hom charts the coordinates are exactly those of step 1.1. A frame change $e'_j=e_jA_j$ changes the product frame by entries $\prod_j(A_j)_{a_jb_j}$, by expanding the elementary tensors. These smooth matrices have inverse obtained from the inverse matrices and satisfy the cocycle law by finite matrix multiplication. Thus the product-frame charts are precisely the canonical smooth atlas just constructed. No countable family of frames is selected. [F1, step 1.1]

3.1 In the resulting atlas smoothness is exactly smoothness of the finite coefficient list. For $k=0$ the single empty tensor is $1$ in the scalar line; for $k=1$ evaluation identifies the model with $E_1$ by step 1.1. A zero-rank factor for $k>0$ makes every multilinear functional zero. Empty base and zero-dimensional base have the same local chart interpretation. All identifications are uniquely determined by evaluations, so this construction needs no AC. [step 1.1, step 2.1] ∎
