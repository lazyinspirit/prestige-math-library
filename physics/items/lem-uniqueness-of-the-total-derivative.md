---
id: lem-uniqueness-of-the-total-derivative
kind: lemma
title: "The total derivative at a point is unique"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-total-derivative-in-euclidean-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/numerical-optimization-dynamics-2026-10-16-ROOT-step3-zero-domain/lem-uniqueness-of-the-total-derivative/application/repair.json
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement

If $L,M:\mathbb R^m\to\mathbb R^n$ both satisfy the total-differentiability remainder condition for $f$ at $a$, then $L=M$.

## Facts & Assumptions

**Given:** Linear maps $L,M$ which both satisfy the definition of total derivative at $a$.

[L1] The total-derivative definition supplies the normwise remainder estimate for every $\varepsilon>0$; in positive source dimension this is equivalently the normalized remainder tending to zero as $h$ tends to zero ([[def-total-derivative-in-euclidean-space]]).

## Proof

**Proof technique:** direct.

1.1 If $m=0$ or $n=0$, there is exactly one linear map $\mathbb R^m\to\mathbb R^n$, namely the zero map, so $L=M$ directly. For the remaining argument assume $m,n\ge1$; thus the normalized remainder notation in [L1] is used only on its non-isolated source. [given, L1, algebra]

1.2 Subtracting the two remainder identities gives $\|(L-M)h\|_2/\|h\|_2\to0$ as $h\to0$. [L1]

2.1 For any fixed $v\in\mathbb R^m$ and nonzero real $t$, linearity gives $\|(L-M)(tv)\|_2/\|tv\|_2=\|(L-M)v\|_2/\|v\|_2$ when $v\ne0$. [step 1.2, algebra]

3.1 Letting $t\to0$ in step 2.1 forces $(L-M)v=0$ for every nonzero $v$, and it is also zero at $v=0$; hence $L=M$. [step 1.2, step 2.1] ∎
