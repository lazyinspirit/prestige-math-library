---
id: thm-commutative-ring-module-structure-on-a-tensor-product
kind: theorem
title: "Over a commutative ring, $M\\otimes_RN$ is an $R$-module with $r(m\\otimes n)=(rm)\\otimes n=m\\otimes(rn)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-module-tensor-products, def-commutative-ring, prop-elementary-tensor-formulas-descend-exactly-when-balanced]
aliases: []
landmark: true
short: "$R$-module structure on $M\\otimes_RN$"
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

Let $R$ be a commutative ring and let $M,N$ be $R$-modules. The abelian group $M\otimes_RN$ has a unique $R$-module structure for which

$$r(m\otimes n)=(rm)\otimes n=m\otimes(rn)$$

for every $r\in R$, $m\in M$, and $n\in N$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and $R$-modules $M,N$, each regarded on either side by the common scalar action.

[L1] Balanced pairings induce unique homomorphisms from tensor products ([[thm-universal-property-of-module-tensor-products]]).

[L2] In a commutative ring, $rs=sr$ for all $r,s\in R$ ([[def-commutative-ring]]).

[L3] An elementary-tensor formula descends exactly when its underlying pairing is balanced ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

## Proof

**Proof technique:** direct.

1.1 For fixed $r\in R$, the pairing $(m,n)\mapsto(rm)\otimes n$ is additive in both variables and balanced: $(r(sm))\otimes n=((rs)m)\otimes n=((sr)m)\otimes n=(rm)\otimes(sn)$ by [L2]. [given, L2, algebra]

2.1 By [L1] and [L3], step 1.1 induces an additive endomorphism $x\mapsto rx$ of $M\otimes_RN$ satisfying $r(m\otimes n)=(rm)\otimes n$. The tensor balance relation also gives $(rm)\otimes n=m\otimes(rn)$. [step 1.1, L1, L3]

3.1 On elementary tensors, $(r+s)x=rx+sx$, $r(x+y)=rx+ry$, $(rs)x=r(sx)$, and $1_Rx=x$ follow from the module axioms of $M$. In each identity the two additive maps induce the same balanced pairing, so uniqueness in [L1] makes the identity hold for every tensor. [step 2.1, L1, algebra]

3.2 Any $R$-module structure with the displayed formula has, for each $r$, a scalar-multiplication endomorphism inducing the same balanced pairing as step 2.1. Uniqueness in [L1] therefore makes the structure unique. [step 2.1, L1]

4.1 Steps 2.1, 3.1 and 3.2 give the asserted unique $R$-module structure and both elementary-tensor formulas. [step 2.1, step 3.1, step 3.2] ∎
