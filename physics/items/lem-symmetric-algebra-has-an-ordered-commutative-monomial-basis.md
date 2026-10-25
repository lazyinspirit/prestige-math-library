---
id: lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis
kind: lemma
title: Ordered monomial basis of a symmetric algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-universal-property-of-the-symmetric-algebra, def-linear-basis, def-partial-order]
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §13.1, printed pp. 74–75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement

Let $B$ be a supplied basis of $V$ equipped with a supplied total order. The
commutative monomials

$$b_1\cdots b_n\qquad(b_1\leq\cdots\leq b_n),$$

including the empty monomial $1$, form a basis of $S(V)$.

## Facts & Assumptions

**Given:** A vector space $V$ with a specified basis $B$ and a specified total order on $B$.

[L1] Every vector has a unique finite expansion in $B$ ([[def-linear-basis]]).

[L2] Linear maps $V\to A$ into commutative unital algebras extend uniquely to $S(V)$ ([[thm-universal-property-of-the-symmetric-algebra]]).

## Proof

**Proof technique:** constructive.

1.1 Let $P$ be the vector space freely spanned by the finite weakly increasing words in $B$, including the empty word. Multiply two basis words by sorting their concatenation. Totality of the supplied order makes the sorted word unique; this multiplication is commutative and associative, and the empty word is its unit. [given, construct]

2.1 By [L1], sending $b\in B$ to the one-letter word $b$ extends uniquely to a linear map $j:V\to P$. By [L2], it extends to a unital algebra map $\alpha:S(V)\to P$. [step 1.1, L1, L2, construct]

2.2 Send each ordered word $b_1\cdots b_n$ in the basis of $P$ to the product of the images of its letters in $S(V)$, and send the empty word to $1$. Extending linearly gives an algebra map $\beta:P\to S(V)$ because multiplication in $S(V)$ is commutative and the product of two word images is the image of their sorted concatenation. [step 1.1, construct, algebra]

3.1 The composite $\alpha\beta$ fixes every word-basis element of $P$, while $\beta\alpha$ fixes every generator from $V$ and hence all of $S(V)$ by [L2]. Thus $\alpha$ and $\beta$ are inverse isomorphisms. [step 2.1, step 2.2, L2]

4.1 Consequently the stated ordered words are a basis of $S(V)$. The construction uses only the supplied basis and order, and when $B$ is empty the empty word is the sole basis element. [step 3.1, discharge-construct: step 1.1] ∎
