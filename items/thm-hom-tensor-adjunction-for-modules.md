---
id: thm-hom-tensor-adjunction-for-modules
kind: theorem
title: "Hom-tensor adjunction: $\\operatorname{Hom}_R(M\\otimes_RN,P)\\cong\\operatorname{Hom}_R(M,\\operatorname{Hom}_R(N,P))$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-internal-hom-module-over-a-commutative-ring, thm-universal-property-of-module-tensor-products, thm-commutative-ring-module-structure-on-a-tensor-product]
aliases: []
landmark: true
short: "Hom-tensor adjunction"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
    - title: "M. Barr, Acyclic Models, Chapter 2"
      url: "https://math.mit.edu/~hrm/palestine/barr-acyclic-models.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $M,N,P$ be $R$-modules. There is a natural $R$-module isomorphism

$$\operatorname{Hom}_R(M\otimes_RN,P)\cong\operatorname{Hom}_R\bigl(M,\operatorname{Hom}_R(N,P)\bigr).$$

It sends $F$ to the map $m\mapsto[n\mapsto F(m\otimes n)]$ and sends $u:M\to\operatorname{Hom}_R(N,P)$ to the homomorphism determined by $m\otimes n\mapsto u(m)(n)$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and $R$-modules $M,N,P$.

[L1] The internal Hom is an $R$-module under $(rf)(n)=r f(n)$ ([[def-internal-hom-module-over-a-commutative-ring]]).

[L2] Bilinear maps from $M\times N$ into $P$ correspond uniquely to homomorphisms $M\otimes_RN\to P$ ([[thm-universal-property-of-module-tensor-products]]).

[L3] Scalar multiplication on the tensor product satisfies $r(m\otimes n)=(rm)\otimes n=m\otimes(rn)$ ([[thm-commutative-ring-module-structure-on-a-tensor-product]]).

## Proof

**Proof technique:** direct.

1.1 Given $F:M\otimes_RN\to P$, define $\operatorname{cur}(F)(m)(n)=F(m\otimes n)$. For fixed $m$ this is $R$-linear in $n$ by [L3], and the dependence on $m$ is $R$-linear by the same formula, so $\operatorname{cur}(F):M\to\operatorname{Hom}_R(N,P)$ is an $R$-module homomorphism. [given, L1, L3, algebra]

1.2 Given $u:M\to\operatorname{Hom}_R(N,P)$, the pairing $(m,n)\mapsto u(m)(n)$ is bilinear by $R$-linearity of $u$ and each $u(m)$; [L2] therefore induces a unique $\operatorname{uncur}(u):M\otimes_RN\to P$. [given, L1, L2]

2.1 For every $F,m,n$, $\operatorname{uncur}(\operatorname{cur}(F))(m\otimes n)=F(m\otimes n)$, so uniqueness in [L2] makes $\operatorname{uncur}\operatorname{cur}$ the identity. [step 1.1, step 1.2, L2]

2.2 For every $u,m,n$, $\operatorname{cur}(\operatorname{uncur}(u))(m)(n)=u(m)(n)$, so the two Hom-valued maps are equal and $\operatorname{cur}\operatorname{uncur}$ is the identity. [step 1.1, step 1.2]

2.3 Both assignments are $R$-linear pointwise, and precomposition or postcomposition with homomorphisms commutes with evaluation; hence the bijection is an $R$-module isomorphism natural in all three variables, contravariantly in the Hom source variables and covariantly in $P$. [step 1.1, step 1.2, L1, algebra]

3.1 Steps 2.1 through 2.3 prove the natural Hom-tensor adjunction. [step 2.1, step 2.2, step 2.3] ∎
