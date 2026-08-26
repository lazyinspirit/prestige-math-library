---
id: fs-multiset-product-exists-for-every-coefficient-sequence
kind: false-statement
title: "FALSE: the positive-size multiset product always encodes a valid multiset class"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-multiset-product-formula, thm-summable-families-and-rearrangement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
pipeline_run: null
---

## Statement

**False claim:** once one knows the positive-size counts $(a_n)_{n \ge 1}$, the
formal product

$$\prod_{n \ge 1}(1-x^n)^{-a_n}$$

automatically is the ordinary generating function of the multiset construction,
with no further local-finiteness hypothesis on the underlying class.

The formal product itself is coefficientwise well defined. What is false is its
unconditional interpretation as a multiset generating function: omitted size-$0$
behaviour can destroy local finiteness completely while leaving the displayed
positive-size sequence unchanged.

## Facts & Assumptions

**Given:** The multiset product theorem assumes that the underlying class has no size-zero objects ([[thm-multiset-product-formula]]).

[L1] Well-defined locally finite products are the ones licensed by the summability machinery ([[thm-summable-families-and-rearrangement]]).

## Refutation

**Proof technique:** direct.

1.1 Let $\mathcal{A}$ have one object $z$ of size $0$ and one object $u$ of size $1$. Its positive-size counting sequence is $a_1=1$ and $a_n=0$ for $n>1$, so the displayed product is $(1-x)^{-1}$. [given]

2.1 But $\operatorname{MSET}(\mathcal{A})$ has infinitely many size-$0$ objects: the multiplicity functions with $m(z)=0,1,2,\dots$ and $m(u)=0$ are all distinct and all have total size $0$. So the would-be multiset class is not locally finite in degree $0$, and [L1] does not license a generating function for it. [step 1.1, L1, given]

3.1 The displayed product therefore does not automatically encode a valid multiset construction from the bare positive-size sequence alone. The omitted no-size-zero hypothesis matters, so the claim is false. [step 2.1, given] ∎
