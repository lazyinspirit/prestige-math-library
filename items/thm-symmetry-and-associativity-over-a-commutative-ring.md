---
id: thm-symmetry-and-associativity-over-a-commutative-ring
kind: theorem
title: "Symmetry and associativity isomorphisms for tensor products over a commutative ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-commutative-ring-module-structure-on-a-tensor-product, thm-associativity-of-balanced-tensor-products, thm-universal-property-of-module-tensor-products, prop-functoriality-of-module-tensor-products]
aliases: []
landmark: true
short: "Symmetry and associativity"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $L,M,N$ be $R$-modules. There are natural $R$-module isomorphisms

$$\sigma_{M,N}:M\otimes_RN\longrightarrow N\otimes_RM,\qquad \sigma_{M,N}(m\otimes n)=n\otimes m,$$

and

$$\alpha_{L,M,N}:(L\otimes_RM)\otimes_RN\longrightarrow L\otimes_R(M\otimes_RN),\qquad \alpha((l\otimes m)\otimes n)=l\otimes(m\otimes n).$$

Moreover $\sigma_{N,M}\sigma_{M,N}$ is the identity.

## Facts & Assumptions

**Given:** A commutative ring $R$ and $R$-modules $L,M,N$.

[L1] The tensor product has the $R$-module structure $r(m\otimes n)=(rm)\otimes n=m\otimes(rn)$ ([[thm-commutative-ring-module-structure-on-a-tensor-product]]).

[L2] Compatible bimodules have the canonical associativity isomorphism carrying $(l\otimes m)\otimes n$ to $l\otimes(m\otimes n)$ ([[thm-associativity-of-balanced-tensor-products]]).

[L3] Balanced pairings induce unique homomorphisms from tensor products ([[thm-universal-property-of-module-tensor-products]]).

[L4] Tensor maps induced by module homomorphisms preserve identities and compositions ([[prop-functoriality-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 The pairing $(m,n)\mapsto n\otimes m$ is balanced because $(rm,n)$ maps to $n\otimes(rm)=(rn)\otimes m$, which is also the image of $(m,rn)$; hence [L3] induces $\sigma_{M,N}$. [given, L1, L3]

1.2 Regard all three modules as $(R,R)$-bimodules. Then [L2] supplies the displayed associativity isomorphism, and [L1] shows it is $R$-linear on elementary tensors. [given, L1, L2]

2.1 Applying the same construction in the opposite order gives $\sigma_{N,M}$, and their composite fixes every $m\otimes n$; uniqueness in [L3] makes the composite the identity, so $\sigma_{M,N}$ is an isomorphism. [step 1.1, L3]

2.2 The map $\sigma_{M,N}$ is $R$-linear because $\sigma(r(m\otimes n))=\sigma((rm)\otimes n)=n\otimes(rm)=r(n\otimes m)$. [step 1.1, L1]

2.3 Naturality of both maps follows by applying [L4]: after replacing the variables by their images under module homomorphisms, the two candidate composites agree on every elementary tensor, hence agree by [L3]. [L3, L4, step 1.1, step 1.2]

3.1 Steps 1.1 through 2.3 prove the two natural $R$-linear isomorphisms and the involutivity of symmetry. [step 1.1, step 2.1, step 2.2, step 1.2, step 2.3] ∎
