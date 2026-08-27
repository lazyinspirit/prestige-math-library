---
id: ex-artinian-product-of-local-rings
kind: example
title: "$\\mathbb Z/12\\mathbb Z$ splits as the product of its two local Artinian factors"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-chinese-remainder-theorem-for-comaximal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (1.14)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 16.7"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

The ring $\mathbb Z/12\mathbb Z$ decomposes as
$$
\mathbb Z/12\mathbb Z\cong\mathbb Z/3\mathbb Z\times\mathbb Z/4\mathbb Z.
$$
The two factors are local Artinian rings, and the two prime ideals of $\mathbb Z/12\mathbb Z$ are the pullbacks of the two coordinate prime ideals.

## Facts & Assumptions

**Given:** The ring $\mathbb Z/12\mathbb Z$.

## Verification

**Proof technique:** direct.

1.1 The ideals $(3)$ and $(4)$ of $\mathbb Z$ are comaximal, so [[thm-chinese-remainder-theorem-for-comaximal-ideals]] gives $\mathbb Z/12\mathbb Z\cong\mathbb Z/3\mathbb Z\times\mathbb Z/4\mathbb Z$. The first factor is a field, hence local, and the second has unique proper nonzero ideal $(2)$, so it is also local. [given, algebra]

2.1 Let $P$ be a prime ideal of $\mathbb Z/3\mathbb Z\times\mathbb Z/4\mathbb Z$. Since $(1,0)(0,1)=(0,0)\in P$, primality forces $(1,0)\in P$ or $(0,1)\in P$. In the first case every $(a,0)=(a,0)(1,0)$ lies in $P$, so $P=\mathbb Z/3\mathbb Z\times Q$ for an ideal $Q$ of $\mathbb Z/4\mathbb Z$; primality then forces $Q=(2)$. In the second case $P=0\times\mathbb Z/4\mathbb Z$. Under the inverse of the isomorphism in step 1.1, these two primes pull back to $(2)/(12)$ and $(3)/(12)$ in $\mathbb Z/12\mathbb Z$. [step 1.1, given, cases, algebra]

3.1 So $\mathbb Z/12\mathbb Z$ is exhibited concretely as the product of its two local Artinian factors $\mathbb Z/3\mathbb Z$ and $\mathbb Z/4\mathbb Z$, and its two prime ideals are exactly the two coordinate pullbacks found in step 2.1. [step 1.1, step 2.1] ∎
