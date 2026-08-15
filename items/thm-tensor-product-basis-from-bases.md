---
id: thm-tensor-product-basis-from-bases
kind: theorem
title: "The elementary tensors of two bases form the product basis of the tensor product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-tensor-products-commute-with-arbitrary-direct-sums, thm-unit-isomorphisms-for-module-tensor-products, def-free-module-on-a-set-and-standard-basis, thm-universal-property-of-free-modules]
aliases: []
landmark: true
short: "Product basis of a tensor product"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "C. Dennis, Week 1 recap on tensor products"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week1a.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring. If $M$ is free with basis $(e_i)_{i\in I}$ and $N$ is free with basis $(f_j)_{j\in J}$, then $M\otimes_RN$ is free with basis

$$\bigl(e_i\otimes f_j\bigr)_{(i,j)\in I\times J}.$$

Equivalently, the canonical map $R^{(I\times J)}\to M\otimes_RN$ sending the standard basis vector at $(i,j)$ to $e_i\otimes f_j$ is an isomorphism. This includes an empty basis in either factor.

## Facts & Assumptions

**Given:** A commutative ring $R$ and free modules $M,N$ with bases indexed by $I,J$.

[L1] Tensor products commute with arbitrary direct sums in either variable: $\bigoplus_i(M_i\otimes_RN)\cong(\bigoplus_iM_i)\otimes_RN$ and $\bigoplus_i(N\otimes_RM_i)\cong N\otimes_R(\bigoplus_iM_i)$ ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[L2] The regular module is a tensor unit: $R\otimes_RR\cong R$ via $r\otimes s\mapsto rs$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L3] A free module on $X$ is $R^{(X)}=\bigoplus_{x\in X}R$, with standard basis and unique finite coordinate expressions, including $X=\varnothing$ ([[def-free-module-on-a-set-and-standard-basis]]).

[L4] A map from the basis set of a free module extends uniquely to a module homomorphism ([[thm-universal-property-of-free-modules]]).

## Proof

**Proof technique:** direct.

1.1 The chosen bases identify $M$ with $\bigoplus_{i\in I}R$ and $N$ with $\bigoplus_{j\in J}R$, carrying $e_i,f_j$ to the corresponding standard basis vectors. [given, L3, L4]

2.1 Apply [L1] in each variable and then [L2] to obtain canonical isomorphisms $M\otimes_RN\cong\bigoplus_{i\in I}\bigoplus_{j\in J}(R\otimes_RR)\cong\bigoplus_{(i,j)\in I\times J}R=R^{(I\times J)}$. [step 1.1, L1, L2, L3]

3.1 Tracing a coordinate generator through step 2.1 sends it to $e_i\otimes f_j$; by [L3], those images therefore form a basis and every tensor has a unique finite expansion in them. [step 2.1, L3]

3.2 If $I=\varnothing$ or $J=\varnothing$, then $I\times J=\varnothing$, the corresponding factor and the target free module are zero by [L3], and step 2.1 is the unique isomorphism between zero modules. [step 2.1, L3]

4.1 This proves the product-basis assertion in all cases. [step 3.1, step 3.2] ∎
