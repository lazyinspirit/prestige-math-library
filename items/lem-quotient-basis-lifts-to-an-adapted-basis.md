---
id: lem-quotient-basis-lifts-to-an-adapted-basis
kind: lemma
title: "A quotient basis lifts to a basis adapted to $W$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-quotient-vector-space-operations-and-projection, def-linear-basis, def-dimension]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Result 3.105"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $V$ be finite-dimensional, let $W\le V$, let $(w_1,\ldots,w_r)$ be an ordered basis of $W$, and let $(v_1+W,\ldots,v_s+W)$ be an ordered basis of $V/W$. Then
$$(w_1,\ldots,w_r,v_1,\ldots,v_s)$$
is an ordered basis of $V$. Consequently,
$$\dim(V/W)=\dim V-\dim W.$$

## Facts & Assumptions

**Given:** The spaces, bases, and representatives in the Statement.

[L1] The canonical projection $\pi:V\to V/W$ is linear and surjective with kernel $W$ ([[prop-quotient-vector-space-operations-and-projection]]).

[L2] A basis is a linearly independent spanning family, with the empty family a basis exactly for the zero space ([[def-linear-basis]]).

[L3] The dimension of a finite-dimensional vector space is the size of any finite basis, and the zero space has dimension $0$ ([[def-dimension]]).

## Proof

**Proof technique:** direct.

1.1 If $\sum_i a_iw_i+\sum_j b_jv_j=0$, applying $\pi$ gives $\sum_j b_j(v_j+W)=0$; independence of the quotient basis forces every $b_j=0$, and independence of the basis of $W$ then forces every $a_i=0$. [L1, L2]

2.1 For $v\in V$, expand $\pi(v)=\sum_j b_j(v_j+W)$; then $v-\sum_jb_jv_j\in\ker\pi=W$ and is a combination of the $w_i$, so the displayed independent family spans $V$ and is a basis; counting its $r+s$ members gives $\dim V=\dim W+\dim(V/W)$, including $W=0$, $W=V$, and $V=0$. [step 1.1, L1, L2, L3] ∎
