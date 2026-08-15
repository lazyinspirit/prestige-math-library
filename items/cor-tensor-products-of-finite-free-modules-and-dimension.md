---
id: cor-tensor-products-of-finite-free-modules-and-dimension
kind: corollary
title: "$R^m\\otimes_RR^n\\cong R^{mn}$ with the product basis, and $\\dim_F(V\\otimes_FW)=\\dim_FV\\,\\dim_FW$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-tensor-product-basis-from-bases, def-free-module-on-a-set-and-standard-basis, lem-standard-basis-of-f-n, def-dimension]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Dennis, Week 1 recap on tensor products"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week1a.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and $m,n\in\mathbb N$. The standard finite free modules satisfy

$$R^m\otimes_RR^n\cong R^{mn},$$

with the tensor products of standard basis vectors corresponding to the standard basis indexed by $m\times n$.

If $F$ is a field and $V,W$ are finite-dimensional $F$-vector spaces, then

$$\dim_F(V\otimes_FW)=(\dim_FV)(\dim_FW).$$

Both assertions include a zero rank or zero-dimensional factor.

## Facts & Assumptions

**Given:** Natural numbers $m,n$, a commutative ring $R$, and finite-dimensional vector spaces $V,W$ over a field $F$.

[L1] Tensor products of free modules with bases indexed by $I,J$ have basis indexed by $I\times J$ ([[thm-tensor-product-basis-from-bases]]).

[L2] For any unital ring $R$, the free module $R^{(m)}$ has its standard basis indexed by $m$, including the empty basis at $m=0$ ([[def-free-module-on-a-set-and-standard-basis]]). For a field $F$, this is the usual basis of $F^m$ ([[lem-standard-basis-of-f-n]]).

[L3] The dimension of a finite-dimensional vector space is the unique natural number equinumerous with a basis; the zero space has dimension zero ([[def-dimension]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the standard bases indexed by $m$ and $n$. Their product is indexed by $m\times n$, which has $mn$ elements, giving the first isomorphism and its product basis. [given, L1, algebra]

1.2 Choose bases of $V$ and $W$ with respectively $p=\dim_FV$ and $q=\dim_FW$ elements. By [L1] their elementary tensors form a basis of $V\otimes_FW$ indexed by $p\times q$, hence with $pq$ elements. [L1, L3, choose]

1.3 If $m=0$ or $n=0$, or if $p=0$ or $q=0$, [L2] makes one basis empty and [L1] makes the product basis empty, so both sides are the zero module or have dimension zero as asserted. [L1, L2, L3]

2.1 By [L3], step 1.2 gives $\dim_F(V\otimes_FW)=pq=(\dim_FV)(\dim_FW)$. [step 1.2, L3]

3.1 Steps 1.1 through 2.1 prove both formulas, including their zero boundaries. [step 1.1, step 2.1, step 1.3] ∎
