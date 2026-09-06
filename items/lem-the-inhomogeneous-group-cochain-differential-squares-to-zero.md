---
id: lem-the-inhomogeneous-group-cochain-differential-squares-to-zero
kind: lemma
title: "The inhomogeneous cochain differential squares to zero"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-inhomogeneous-group-cochains]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Appendix 6.5.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

For every $f\in C^n(G,M)$, one has $d(df)=0$.

## Proof

**Given:** The inhomogeneous coboundary formula.

1.1 Expand $d(df)$; terms correspond to two operations among acting by the first group element, multiplying adjacent elements, and deleting the last element. [given]

2.1 Each pair of operations has two orders with opposite signs; associativity gives the same argument of $f$, and the leading pair agrees because $g_1(g_2m)=(g_1g_2)m$. All terms cancel. [step 1.1] ∎
