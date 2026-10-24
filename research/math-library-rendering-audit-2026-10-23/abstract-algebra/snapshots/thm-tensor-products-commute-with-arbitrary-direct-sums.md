---
id: thm-tensor-products-commute-with-arbitrary-direct-sums
kind: theorem
title: "Tensor products commute with arbitrary direct sums"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-module-tensor-products, thm-commutative-ring-module-structure-on-a-tensor-product, def-direct-sum-of-a-family-of-modules, thm-universal-property-of-module-direct-sums, thm-symmetry-and-associativity-over-a-commutative-ring]
aliases: []
landmark: true
short: "Tensor products preserve direct sums"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
    - title: "C. Dennis, Week 4 on tensor products and flatness"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week4b.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $(M_i)_{i\in I}$ be any family of $R$-modules, and let $N$ be an $R$-module. The homomorphism induced by the coordinate inclusions is a natural $R$-module isomorphism

$$\Phi:\bigoplus_{i\in I}(M_i\otimes_RN)\longrightarrow\left(\bigoplus_{i\in I}M_i\right)\otimes_RN,$$

$$\Phi\bigl(\jmath_i(m\otimes n)\bigr)=\jmath_i(m)\otimes n.$$

The same holds with the direct sum in the second variable: there is a natural $R$-module isomorphism

$$\Phi':\bigoplus_{i\in I}(N\otimes_RM_i)\longrightarrow N\otimes_R\left(\bigoplus_{i\in I}M_i\right),\qquad \Phi'\bigl(\jmath_i(n\otimes m)\bigr)=n\otimes\jmath_i(m).$$

The assertion includes $I=\varnothing$, when both sides are zero.

## Facts & Assumptions

**Given:** A commutative ring $R$, a family $(M_i)_{i\in I}$ of $R$-modules, and an $R$-module $N$.

[L1] Balanced pairings induce unique homomorphisms from tensor products ([[thm-universal-property-of-module-tensor-products]]).

[L2] Tensor products over a commutative ring carry their canonical $R$-module structure ([[thm-commutative-ring-module-structure-on-a-tensor-product]]).

[L3] The direct sum consists of finite-support tuples, with coordinate inclusions $\jmath_i$, and the empty direct sum is zero ([[def-direct-sum-of-a-family-of-modules]]).

[L4] Every family of homomorphisms $f_i:M_i\to P$ extends uniquely to a homomorphism $\bigoplus_iM_i\to P$ whose value is the finite sum of the coordinate values ([[thm-universal-property-of-module-direct-sums]]).

[L5] Over a commutative ring there is a natural isomorphism $\sigma_{M,N}:M\otimes_RN\to N\otimes_RM$ with $\sigma_{M,N}(m\otimes n)=n\otimes m$, and $\sigma_{N,M}\sigma_{M,N}$ is the identity ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 For each $i$, the pairing $(m,n)\mapsto\jmath_i(m)\otimes n$ is bilinear, so [L1] gives $\phi_i:M_i\otimes_RN\to(\bigoplus_iM_i)\otimes_RN$. By [L4], the family $(\phi_i)$ induces the displayed map $\Phi$. [given, L1, L2, L4]

1.2 Define $b:(\bigoplus_iM_i)\times N\to\bigoplus_i(M_i\otimes_RN)$ by $b((m_i),n)=(m_i\otimes n)_i$. This tuple has finite support by [L3], and coordinatewise calculation shows that $b$ is bilinear. [L2, L3, algebra]

2.1 By [L1], the pairing in step 1.2 induces $\Psi:(\bigoplus_iM_i)\otimes_RN\to\bigoplus_i(M_i\otimes_RN)$ with $\Psi((m_i)\otimes n)=(m_i\otimes n)_i$. [step 1.2, L1]

3.1 The composite $\Psi\Phi$ fixes every coordinate generator $\jmath_i(m\otimes n)$, so it is the identity by [L4]; the composite $\Phi\Psi$ fixes every elementary tensor $(m_i)\otimes n$, so it is the identity by [L1]. [step 1.1, step 2.1, L1, L4]

4.1 Thus $\Phi$ and $\Psi$ are inverse isomorphisms. They are natural because maps $u_i:M_i\to M_i'$ and $v:N\to N'$ make the two composites send each coordinate generator $\jmath_i(m\otimes n)$ to $\jmath_i(u_i(m)\otimes v(n))$. When $I=\varnothing$, [L3] makes both sides zero and the same construction yields the unique isomorphism. [step 3.1, L1, L4, L3]

5.1 For the second variable, put $\Phi':=\sigma_{\bigoplus_iM_i,N}\circ\Phi\circ\bigl(\bigoplus_i\sigma_{N,M_i}\bigr)$, where the middle direct sum of the symmetries is the map induced by [L4] from the family $\jmath_i\circ\sigma_{N,M_i}$. Each $\sigma$ is an isomorphism by [L5] and $\Phi$ is one by step 4.1, so $\Phi'$ is an isomorphism; it is natural as a composite of natural isomorphisms. Tracing a coordinate generator gives $\Phi'(\jmath_i(n\otimes m))=\sigma(\Phi(\jmath_i(m\otimes n)))=\sigma(\jmath_i(m)\otimes n)=n\otimes\jmath_i(m)$, which is the displayed formula. At $I=\varnothing$ both sides are again zero. [step 4.1, L3, L4, L5] ∎
