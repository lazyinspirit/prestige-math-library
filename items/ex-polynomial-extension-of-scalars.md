---
id: ex-polynomial-extension-of-scalars
kind: example
title: "$S\\otimes_RR[x]\\cong S[x]$ as $S$-algebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-tensor-product-of-algebras-over-a-commutative-ring, def-restriction-and-extension-of-scalars, def-polynomial-ring-over-a-commutative-ring, thm-universal-property-of-module-tensor-products]
aliases: []
landmark: false
short: "Polynomial rings commute with scalar extension"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wenqi Li, Commutative Algebra, Lecture 9"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Example

Let $f:R\to S$ be a homomorphism of commutative rings. There is an isomorphism of $S$-algebras

$$S\otimes_RR[x]\cong S[x]$$

given on elementary tensors by

$$s\otimes\sum_i r_ix^i\longmapsto\sum_i s f(r_i)x^i.$$

## Facts & Assumptions

**Given:** A homomorphism $f:R\to S$ of commutative rings.

[L1] Restriction along $f$ makes $S$ an $R$-module, and $S\otimes_R-$ is extension of scalars ([[def-restriction-and-extension-of-scalars]]).

[L2] Polynomial rings consist of finitely supported coefficient families, with multiplication given by finite convolution ([[def-polynomial-ring-over-a-commutative-ring]]).

[L3] A balanced map from a product of modules induces a unique homomorphism from their tensor product ([[thm-universal-property-of-module-tensor-products]]).

[L4] The tensor product of two $R$-algebras has multiplication $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ and its canonical $R$-algebra structure ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

## Verification

**Proof technique:** direct.

1.1 The displayed coefficient formula is additive in both variables and satisfies $F(sf(r)\otimes p)=F(s\otimes rp)$, so it is $R$-balanced. It therefore induces an additive map $F:S\otimes_RR[x]\to S[x]$ by [L3]. [given, L1, L2, L3]

1.2 Define $G:S[x]\to S\otimes_RR[x]$ by $G(\sum_i s_ix^i)=\sum_i s_i\otimes x^i$. The sum is finite by [L2]. Coefficientwise addition and convolution multiplication show that $G$ is an $S$-algebra homomorphism, using $(s\otimes x^i)(t\otimes x^j)=st\otimes x^{i+j}$ from [L4]. [L2, L4, algebra]

2.1 The map $F$ is $S$-linear, sends $1\otimes1$ to $1$, and, using [L2] and [L4], satisfies $F((s\otimes p)(t\otimes q))=F(st\otimes pq)=F(s\otimes p)F(t\otimes q)$. Hence it is an $S$-algebra homomorphism. [step 1.1, L2, L4]

2.2 For every polynomial $\sum_i s_ix^i$, one has $F(G(\sum_i s_ix^i))=\sum_i s_ix^i$. For an elementary tensor, balance gives $G(F(s\otimes\sum_i r_ix^i))=\sum_i sf(r_i)\otimes x^i=\sum_i s\otimes r_ix^i=s\otimes\sum_i r_ix^i$. [step 1.1, step 1.2, L1]

3.1 The two maps $GF$ and the identity induce the same balanced pairing by step 2.2, so uniqueness in [L3] makes them equal; step 2.2 already gives $FG=1$ coefficientwise. Thus $F$ and $G$ are inverse $S$-algebra homomorphisms. [step 2.1, step 1.2, step 2.2, L3] ∎
