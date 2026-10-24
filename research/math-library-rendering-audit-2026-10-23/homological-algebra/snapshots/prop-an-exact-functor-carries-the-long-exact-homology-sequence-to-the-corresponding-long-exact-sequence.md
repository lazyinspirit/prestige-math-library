---
id: prop-an-exact-functor-carries-the-long-exact-homology-sequence-to-the-corresponding-long-exact-sequence
kind: proposition
title: "An exact functor carries the long exact homology sequence to the corresponding long exact sequence"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-exact-functor-between-abelian-categories,
       thm-an-exact-functor-commutes-with-homology,
       cor-the-long-exact-homology-sequence-is-natural,
       thm-long-exact-sequence-in-homology]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-27
---

## Statement

Let $F:\mathcal A\to\mathcal B$ be an exact functor between abelian
categories. For every short exact sequence of complexes in $\mathcal A$, the
canonical isomorphisms
$$F(H_n(X))\xrightarrow{\sim}H_n(F(X))$$
identify the image under $F$ of its long exact homology sequence with the long
exact homology sequence of the induced short exact sequence
$$0\to F(A_\bullet)\to F(B_\bullet)\to F(C_\bullet)\to0.$$

## Facts & Assumptions

**Given:** An exact functor $F:\mathcal A\to\mathcal B$ and a short exact sequence $0\to A_\bullet\to B_\bullet\to C_\bullet\to0$ of complexes in $\mathcal A$.

[L1] Exactness means that $F$ preserves the finite limits and colimits relevant to kernels, cokernels, and short exact sequences ([[def-exact-functor-between-abelian-categories]]).

[L2] Exact functors commute with homology by canonical natural isomorphisms ([[thm-an-exact-functor-commutes-with-homology]]).

[L3] The long exact homology sequence is natural for morphisms of short exact sequences ([[cor-the-long-exact-homology-sequence-is-natural]]).

[L4] Every short exact sequence of complexes has a long exact homology sequence ([[thm-long-exact-sequence-in-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applying $F$ degreewise to the given short exact sequence of complexes produces another short exact sequence of complexes in $\mathcal B$. Applying [L4] to both sequences gives two long exact homology sequences. [L1, L4, given, construct]

2.1 The canonical isomorphisms from [L2] identify each term $F(H_n(X))$ with $H_n(F(X))$, and their naturality identifies the ordinary homology maps on the two sequences. [L2, step 1.1, algebra]

3.1 The connecting morphisms are built from kernels and cokernels of the same degreewise diagram, and [L1] preserves those constructions. Therefore the comparison isomorphisms respect the connecting maps as well, so the whole long exact sequence is transported from one side to the other. [L1, L2, L3, step 2.1, algebra] ∎

