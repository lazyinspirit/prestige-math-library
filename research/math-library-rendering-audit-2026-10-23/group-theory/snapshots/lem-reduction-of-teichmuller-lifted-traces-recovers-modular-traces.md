---
id: lem-reduction-of-teichmuller-lifted-traces-recovers-modular-traces
kind: lemma
title: "Reduction of lifted traces recovers modular traces"
status: published
origin: pipeline
deps: [def-lifted-modular-trace-on-p-regular-elements]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Halle, Galois actions on Neron models of Jacobians, Section 5.3, p.875"
      url: "https://aif.centre-mersenne.org/item/10.5802/aif.2541.pdf"
---

## Statement

In the fixed splitting system, $\overline{\varphi_V(g)}=\operatorname{tr}(g|V)$ for every finite-dimensional $V$ and every $p$-regular $g$.

## Facts & Assumptions

**Given:** V,g and the splitting system in the Statement.

[F1] The lifted trace is the sum of the unique lifts of the eigenvalues with multiplicity ([[def-lifted-modular-trace-on-p-regular-elements]]).

## Proof

1.1 Reduction $\mathcal O\to k$ is a ring homomorphism. Therefore $\overline{\varphi_V(g)}=\sum_{j=1}^{\dim V}\overline{\widehat{\lambda_j}}=\sum_j\lambda_j$. This uses additivity of reduction, not additivity of root lifting. [F1, algebra]

2.1 In an eigenbasis of the p-regular operator the diagonal entries are precisely the $\lambda_j$, so their sum is its trace. The definition supplies that eigenbasis decomposition. If $V=0$ both sides are zero; if $g=1$, both reduce to $(\dim V)1_k$. [F1, step 1.1, algebra] ∎
