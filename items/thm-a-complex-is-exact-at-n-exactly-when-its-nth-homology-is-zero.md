---
id: thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero
kind: theorem
title: "A complex is exact at n exactly when its nth homology is zero"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homology-object-of-a-chain-complex,
       def-exactness-of-a-complex-at-a-degree-and-acyclic-complex,
       cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero,
       thm-an-abelian-category-is-balanced]
proof_strategy: direct
verification:
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
    - title: "Romyar Sharifi, Homological Algebra, §2.7"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Statement

Let $C_\bullet$ be a chain complex in an abelian category and let
$n\in\mathbb Z$. Then $C$ is exact at degree $n$ if and only if $H_n(C)$ is a
zero object.

## Facts & Assumptions

**Given:** A chain complex $C_\bullet$ and an integer $n$.

[L1] Exactness at degree $n$ means that the canonical map $\beta_n:B_n(C)\to Z_n(C)$ is an isomorphism ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[L2] The homology object $H_n(C)$ is the cokernel of $\beta_n$ ([[def-homology-object-of-a-chain-complex]]).

[L3] In an abelian category, a morphism is epic exactly when its cokernel is zero ([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]]).

[L4] In an abelian category, a morphism that is both monic and epic is an isomorphism ([[thm-an-abelian-category-is-balanced]]).

## Proof

**Proof technique:** direct.

1.1 Assume $C$ is exact at degree $n$. Then [L1] says $\beta_n$ is an isomorphism, hence in particular epic. By [L2] and [L3], the cokernel of $\beta_n$, namely $H_n(C)$, is therefore zero. [L1, L2, L3]

2.1 Conversely, assume $H_n(C)$ is zero. By [L2], the cokernel of $\beta_n$ is zero, so [L3] makes $\beta_n$ epic. The map $\beta_n$ is monic because it factors the monic image inclusion of $B_n(C)$ through the monic cycle inclusion. Hence [L4] makes $\beta_n$ an isomorphism, and [L1] says that $C$ is exact at degree $n$. [L1, L2, L3, L4, algebra] ∎
