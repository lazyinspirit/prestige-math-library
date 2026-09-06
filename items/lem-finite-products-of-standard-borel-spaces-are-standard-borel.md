---
id: lem-finite-products-of-standard-borel-spaces-are-standard-borel
kind: lemma
title: "Finite products of standard Borel spaces are standard Borel"
status: published
origin: pipeline
deps: [def-standard-borel-space, def-product-sigma-algebra-and-finite-product-sigma-algebras]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Lemma 2.8"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Statement

Every finite product of standard Borel spaces, with its finite product sigma-algebra, is standard Borel.

## Facts & Assumptions

**Given:** Standard-Borel spaces $(E_j,\mathcal E_j)$ for $j<n$.

[F1] Each $E_j$ is measurably isomorphic to the Borel space of a Polish space. ([[def-standard-borel-space]])

## Proof

1.1 Choose Polish presentations $h_j:E_j\to P_j$ from [F1]. The product map $h=\prod_{j<n}h_j$ is a bijection from $\prod E_j$ to $\prod P_j$. [F1]

2.1 A finite product of Polish spaces is Polish, and inverse images under $h$ of its Borel rectangles are exactly the finite product measurable rectangles. Therefore $h$ transports its Borel sigma-algebra to $\bigotimes_{j<n}\mathcal E_j$, proving the claim. [step 1.1] ∎
