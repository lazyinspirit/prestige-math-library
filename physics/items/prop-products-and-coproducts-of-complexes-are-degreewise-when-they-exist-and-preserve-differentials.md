---
id: prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials
kind: proposition
title: "Products and coproducts of complexes are degreewise when they exist and preserve differentials"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-complex-in-an-abelian-category,
       def-products-and-coproducts]
proof_strategy: constructive
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

Let $(C^{(i)}_\bullet)_{i\in I}$ be a family of chain complexes in an abelian
category where the termwise products or coproducts exist.

1. If every $\prod_i C_n^{(i)}$ exists, then these products form a chain
   complex with differential characterized by the component differentials, and
   it is the product of the family in $\operatorname{Ch}(\mathcal A)$.
2. If every $\coprod_i C_n^{(i)}$ exists, then these coproducts form a chain
   complex with differential characterized by the component differentials, and
   it is the coproduct of the family in $\operatorname{Ch}(\mathcal A)$.

## Facts & Assumptions

**Given:** A family of chain complexes $(C^{(i)}_\bullet)_{i\in I}$ in an abelian category.

[L1] A chain complex is a graded family with $d_{n-1} d_n=0$ ([[def-chain-complex-in-an-abelian-category]]).

[L2] Products and coproducts are determined by their universal properties ([[def-products-and-coproducts]]).

## Proof

**Proof technique:** constructive.

1.1 Suppose the products exist. For each degree $n$, let $P_n:=\prod_i C_n^{(i)}$. By [L2] there is a unique map $d_n^P:P_n\to P_{n-1}$ such that for every $i$, $$\pi_i^{n-1} d_n^P=d_n^{(i)}\pi_i^n,$$ where $\pi_i^n:P_n\to C_n^{(i)}$ is the $i$th projection. Then $$\pi_i^{n-2} d_{n-1}^P d_n^P=d_{n-1}^{(i)} d_n^{(i)}\pi_i^n=0$$ by [L1], so $d_{n-1}^P d_n^P=0$ because all projections of that composite are zero. Thus $P_\bullet$ is a chain complex and has the required product universal property degreewise. [L1, L2, given, construct]

2.1 The coproduct case is dual. If $Q_n:=\coprod_i C_n^{(i)}$ exists in each degree, [L2] gives a unique $d_n^Q:Q_n\to Q_{n-1}$ such that for every $i$, $$d_n^Q\iota_i^n=\iota_i^{n-1} d_n^{(i)},$$ where $\iota_i^n:C_n^{(i)}\to Q_n$ is the $i$th coproduct injection. By [L1], $$d_{n-1}^Q d_n^Q\iota_i^n=d_{n-1}^Q\iota_i^{n-1} d_n^{(i)}=\iota_i^{n-2} d_{n-1}^{(i)} d_n^{(i)}=0,$$ so $d_{n-1}^Q d_n^Q=0$ because its composites with every injection vanish. Hence $Q_\bullet$ is the coproduct complex. [L1, L2, given, construct, discharge-construct] ∎
