---
id: thm-an-exact-functor-commutes-with-homology
kind: theorem
title: "An exact functor commutes with homology"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-exact-functor-between-abelian-categories,
       thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels,
       prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps,
       def-homology-object-of-a-chain-complex]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Lemma 12.7.2"
      url: "https://stacks.math.columbia.edu/tag/010N"
    - title: "Romyar Sharifi, Homological Algebra, Lemma 2.5.2"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Statement

Let $F:\mathcal A\to\mathcal B$ be an exact functor between abelian categories.
For every chain complex $C_\bullet$ and every $n\in\mathbb Z$, there is a
canonical isomorphism
$$F(H_n(C))\xrightarrow{\;\sim\;}H_n(F(C)).$$
These isomorphisms are natural in chain maps.

## Facts & Assumptions

**Given:** An exact functor $F:\mathcal A\to\mathcal B$, a chain complex $C_\bullet$, and an integer $n$.

[L1] An exact functor preserves kernels and cokernels ([[thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels]]).

[L2] An additive functor applies degreewise to complexes and chain maps ([[prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps]]).

[L3] $H_n(C)$ is the cokernel of the canonical map $\beta_n:B_n(C)\to Z_n(C)$ ([[def-homology-object-of-a-chain-complex]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $F(C)$ is a chain complex. Because $F$ preserves kernels and cokernels by [L1], it carries $\ker(d_n^C)$ to $\ker(d_n^{F(C)})$ and $\operatorname{im}(d_{n+1}^C)$ to $\operatorname{im}(d_{n+1}^{F(C)})$. Thus it identifies $F(Z_n(C))$ with $Z_n(F(C))$ and $F(B_n(C))$ with $B_n(F(C))$. [L1, L2, L3]

2.1 Applying $F$ to the cokernel description in [L3] and using [L1], the object $F(H_n(C))$ is the cokernel of the image of $\beta_n$ under $F$. Under the identifications of step 1.1, that cokernel is exactly $H_n(F(C))$. This gives the canonical isomorphism $F(H_n(C))\cong H_n(F(C))$. [L1, L3, step 1.1]

3.1 Naturality follows because the cycle maps, boundary maps, and quotient maps used in steps 1.1 and 2.1 are all functorial in the chain map input. [L2, step 1.1, step 2.1] ∎
