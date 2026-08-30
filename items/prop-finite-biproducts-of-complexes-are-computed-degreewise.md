---
id: prop-finite-biproducts-of-complexes-are-computed-degreewise
kind: proposition
title: "Finite biproducts of complexes are computed degreewise"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-category-of-complexes-in-an-additive-category-is-additive,
       thm-homology-is-an-additive-functor]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

Let $\mathcal A$ be an abelian category. Finite biproducts in
$\operatorname{Ch}(\mathcal A)$ are formed degreewise. In
particular,
$$H_n(C_\bullet\oplus D_\bullet)\cong H_n(C_\bullet)\oplus H_n(D_\bullet)$$
for every $n$.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ and chain complexes $C_\bullet$ and
$D_\bullet$ in $\mathcal A$.

[L1] $\operatorname{Ch}(\mathcal A)$ is additive, so it has finite biproducts ([[thm-the-category-of-complexes-in-an-additive-category-is-additive]]).

[L2] Homology is an additive functor ([[thm-homology-is-an-additive-functor]]).

## Proof

**Proof technique:** direct.

1.1 The proof of [L1] constructs the biproduct $C_\bullet\oplus D_\bullet$ degreewise, with term $C_n\oplus D_n$ and differential $d_n^C\oplus d_n^D$. Thus finite biproducts of complexes are formed degreewise. [L1]

2.1 Since $H_n$ is additive by [L2], it preserves finite biproducts. Applying it to the biproduct from step 1.1 gives $$H_n(C_\bullet\oplus D_\bullet)\cong H_n(C_\bullet)\oplus H_n(D_\bullet).$$ [L2, step 1.1] ∎
