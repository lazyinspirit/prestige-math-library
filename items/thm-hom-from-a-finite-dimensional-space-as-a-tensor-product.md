---
id: thm-hom-from-a-finite-dimensional-space-as-a-tensor-product
kind: theorem
title: "For finite-dimensional $V$, the canonical map $V^*\\otimes_FW\\to\\operatorname{Hom}_F(V,W)$ is an isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-module-tensor-products, thm-tensor-product-basis-from-bases, def-internal-hom-module-over-a-commutative-ring, def-algebraic-dual-and-linear-functional, thm-dual-family-is-a-basis-in-finite-dimension]
aliases: []
landmark: true
short: "$V^*\\otimes W\\cong\\operatorname{Hom}(V,W)$"
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

Let $V$ be a finite-dimensional vector space over a field $F$, and let $W$ be any $F$-vector space. The bilinear map

$$(\phi,w)\longmapsto\bigl[v\mapsto\phi(v)w\bigr]$$

induces a natural isomorphism

$$\Phi:V^*\otimes_FW\longrightarrow\operatorname{Hom}_F(V,W).$$

For a basis $(v_1,\ldots,v_n)$ of $V$ with dual basis $(v_1^*,\ldots,v_n^*)$, its inverse is

$$\Psi(T)=\sum_{i=1}^n v_i^*\otimes T(v_i).$$

The empty sum gives the assertion when $V=0$.

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$, an $F$-vector space $W$, and a basis $(v_i)_{1\le i\le n}$ of $V$ with dual family $(v_i^*)$.

[L1] Bilinear maps from $V^*\times W$ induce unique homomorphisms from $V^*\otimes_FW$ ([[thm-universal-property-of-module-tensor-products]]).

[L2] Tensor products of bases have product basis ([[thm-tensor-product-basis-from-bases]]).

[L3] Over the commutative field $F$, $\operatorname{Hom}_F(V,W)$ is an $F$-module under pointwise scalar multiplication ([[def-internal-hom-module-over-a-commutative-ring]]).

[L4] The algebraic dual is $V^*=\mathcal L(V,F)$ ([[def-algebraic-dual-and-linear-functional]]).

[L5] The dual family of a finite basis is a basis of $V^*$ ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

## Proof

**Proof technique:** direct.

1.1 The map $(\phi,w)\mapsto[v\mapsto\phi(v)w]$ is bilinear, so [L1] gives an $F$-linear map $\Phi:V^*\otimes_FW\to\operatorname{Hom}_F(V,W)$. [given, L1, L3, L4]

1.2 Define $\Psi(T)=\sum_i v_i^*\otimes T(v_i)$. This is an $F$-linear map because evaluation and the finite sum are linear in $T$. [given, L3, L5, construct]

2.1 For $T\in\operatorname{Hom}_F(V,W)$ and $v=\sum_i v_i^*(v)v_i$, one has $(\Phi\Psi(T))(v)=\sum_i v_i^*(v)T(v_i)=T(v)$, so $\Phi\Psi$ is the identity. [step 1.1, step 1.2, L5, algebra]

2.2 For an elementary tensor $\phi\otimes w$, one has $\Psi\Phi(\phi\otimes w)=\sum_i v_i^*\otimes\phi(v_i)w=(\sum_i\phi(v_i)v_i^*)\otimes w=\phi\otimes w$, because $(v_i^*)$ is the dual basis; elementary tensors generate, so $\Psi\Phi$ is the identity. [step 1.1, step 1.2, L2, L5, algebra]

2.3 The map $\Phi$ is natural in $W$: for $h:W\to W'$, both routes send $\phi\otimes w$ to the map $v\mapsto\phi(v)h(w)$. It is contravariantly natural in $V$: for $a:V'\to V$, both routes send $\phi\otimes w$ to $[v'\mapsto\phi(a(v'))w]$. Equality on elementary tensors gives both naturality squares. [step 1.1, L1, algebra]

3.1 Thus $\Phi$ is a natural isomorphism with inverse $\Psi$. If $V=0$, its basis and dual basis are empty, both $V^*\otimes_FW$ and $\operatorname{Hom}_F(V,W)$ are zero, and the same formulas are the unique inverse maps. [step 2.1, step 2.2, step 2.3, L2, L5] ∎
