---
id: lem-singular-chain-cross-product-boundary-formula
kind: lemma
title: "The singular chain cross product satisfies the boundary formula"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-singular-chain-cross-product-on-generators, def-singular-boundary-operator]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Haynes Miller, Algebraic Topology I, Lecture 7"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/9e7c0386b3c2febaa2cf58e75d9c7c32_MIT18_905F16_lec7.pdf"
pipeline_run: frontier-30
---

## Statement

For singular chains $a\in C_p(X;\mathbb Z)$ and $b\in C_q(Y;\mathbb Z)$,
$$\partial(a\times b)=\partial a\times b+(-1)^p a\times\partial b.$$
When $p=0$, the first term is omitted; when $q=0$, the second term is omitted.

## Facts & Assumptions

**Given:** Singular chains $a\in C_p(X;\mathbb Z)$ and $b\in C_q(Y;\mathbb Z)$.

[L1] The chain cross product is the alternating shuffle sum on singular simplex generators ([[def-singular-chain-cross-product-on-generators]]).

[L2] The singular boundary is the alternating sum of codimension-one faces ([[def-singular-boundary-operator]]).

## Proof

**Proof technique:** direct.

1.1 By bilinearity from [L1], it is enough to prove the formula for generators $a=\sigma$ and $b=\tau$, where $\sigma:\Delta^p\to X$ and $\tau:\Delta^q\to Y$ are singular simplices. [L1, given]

2.1 If $p=0$, there is one $(0,q)$-shuffle, and the cross product is the evident product of the point simplex $\sigma$ with $\tau$. Restricting it to any face of $\Delta^q$ gives the product of $\sigma$ with the corresponding face of $\tau$, so $\partial(\sigma\times\tau)=\sigma\times\partial\tau$. The same argument with the factors reversed gives $\partial(\sigma\times\tau)=\partial\sigma\times\tau$ when $q=0$. These are the stated formulas in the two boundary cases. Hence it remains to assume $p,q>0$. [L1, L2, step 1.1, algebra]

2.2 Expand $\partial(\sigma\times\tau)$ with [L1] and [L2]. A face deletes a vertex of a shuffle path. If the deleted vertex is internal and its two adjacent steps have different directions, the resulting diagonal face is shared by the shuffle obtained by interchanging those two steps. The two shuffles have opposite permutation signs, while the face occurs in the same boundary position, so these internal faces cancel in pairs. [L1, L2, step 1.1, algebra]

3.1 Under the remaining assumption $p,q>0$, the uncancelled faces lie on the boundary of $\Delta^p\times\Delta^q$. For the face in $\partial_i\Delta^p\times\Delta^q$, deleting the corresponding horizontal coordinate gives the shuffle chain for $(p-1,q)$ with boundary sign $(-1)^i$. For the face in $\Delta^p\times\partial_j\Delta^q$, the $p$ horizontal directions precede the boundary sign $(-1)^j$, giving the total sign $(-1)^{p+j}$. Consequently the universal shuffle chain satisfies $$\partial\operatorname{EZ}_{p,q}=\sum_{i=0}^p(-1)^i(\delta_i\times1)_\#\operatorname{EZ}_{p-1,q}+(-1)^p\sum_{j=0}^q(-1)^j(1\times\delta_j)_\#\operatorname{EZ}_{p,q-1}.$$ Postcomposing with $\sigma\times\tau$ gives $$\partial(\sigma\times\tau)=\partial\sigma\times\tau+(-1)^p\sigma\times\partial\tau.$$ [L1, L2, step 2.1, step 2.2, algebra]

4.1 Step 3.1 extends by bilinearity to the stated formula for arbitrary integral chains $a$ and $b$. [step 1.1, step 3.1] ∎
