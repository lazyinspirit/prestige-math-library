---
id: cor-finite-iterated-tensor-products-represent-multilinear-maps
kind: corollary
title: "Finite iterated tensor products represent multilinear maps independently of parenthesization"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-module-tensor-products, thm-symmetry-and-associativity-over-a-commutative-ring, thm-unit-isomorphisms-for-module-tensor-products]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $M_1,\ldots,M_k$ be a finite list of $R$-modules. Any parenthesized tensor product

$$T=M_1\otimes_R\cdots\otimes_RM_k$$

represents $R$-multilinear maps from $M_1\times\cdots\times M_k$: for every $R$-module $P$, composition with $(m_1,\ldots,m_k)\mapsto m_1\otimes\cdots\otimes m_k$ is a bijection from $\operatorname{Hom}_R(T,P)$ to the set of multilinear maps into $P$. Different parenthesizations are connected by the unique isomorphism preserving pure tensors.

For $k=0$, take $T=R$ and identify zero-variable multilinear maps with chosen elements of $P$. For $k=1$, take $T=M_1$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a finite list of $R$-modules, and an $R$-module $P$.

[L1] The binary tensor product represents balanced, hence over a commutative ring bilinear, maps ([[thm-universal-property-of-module-tensor-products]]).

[L2] Tensor products over a commutative ring have canonical symmetry and associativity isomorphisms preserving elementary tensors ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[L3] The regular module is a tensor unit ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Proof

**Proof technique:** induction.

1.1 For $k=0$, an $R$-linear map $R\to P$ is uniquely determined by the image of $1_R$, and every $p\in P$ defines such a map by $r\mapsto rp$; this is the required representation of maps from the one-point empty product. [base, L3]

1.2 For $k=1$, the identity $M_1\to M_1$ represents linear maps from $M_1$ by composition. [base]

1.3 Assume a parenthesized product $T_k$ represents $k$-linear maps. A $(k+1)$-linear map is equivalently a bilinear map $T_k\times M_{k+1}\to P$: first use the induction bijection with the last variable fixed, and then use multilinearity to see that the resulting dependence on the last variable is linear. [ih, L1]

2.1 By [L1], the bilinear maps in step 1.3 correspond uniquely to linear maps $T_k\otimes_RM_{k+1}\to P$, proving the representing property for $k+1$. [step 1.3, L1]

3.1 By [L2], any two parenthesizations are joined by composites of elementary associativity isomorphisms preserving pure tensors. Any two such comparison maps agree on every pure tensor, so the representing uniqueness proved in step 2.1 makes them equal. [step 2.1, L2]

4.1 The base cases and induction step establish the representation for every finite $k$, including the empty and singleton cases, and step 3.1 proves independence of parenthesization. [step 1.1, step 1.2, step 2.1, step 3.1, discharge-induction] ∎
