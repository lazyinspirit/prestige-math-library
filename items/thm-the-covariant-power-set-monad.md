---
id: thm-the-covariant-power-set-monad
kind: theorem
title: "Singleton and union define the covariant power-set monad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monad, def-power-set, def-union-of-a-set-and-binary-union, def-image-and-preimage-under-a-relation, def-functor-and-contravariant-functor, def-natural-transformation, prop-sets-and-functions-form-category-set]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.5(i)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The covariant power-set functor $\mathcal P:\mathbf{Set}\to\mathbf{Set}$ carries a monad whose unit is $\eta_X(x)=\{x\}$ and whose multiplication $\mu_X:\mathcal P\mathcal P X\to\mathcal P X$ is union.

## Facts & Assumptions

**Given:** A set $X$ and functions between sets.

[L1] The power set $\mathcal P(X)$ is the set of all subsets of $X$ ([[def-power-set]]).

[L2] Direct image sends a subset $A\subseteq X$ along $f:X\to Y$ to $f[A]\subseteq Y$ ([[def-image-and-preimage-under-a-relation]]).

[L3] A monad requires natural unit and multiplication satisfying two unit laws and associativity ([[def-monad]]).

## Proof

**Proof technique:** direct.

1.1 Define $\mathcal P(f)(A)=f[A]$. Direct images preserve identities and composition, so this is an endofunctor; define $\eta_X(x)=\{x\}$ and $\mu_X(\mathcal A)=\bigcup\mathcal A$. [L1, L2, L3]

2.1 For $f:X\to Y$, one has $f[\bigcup\mathcal A]=\bigcup_{A\in\mathcal A}f[A]$, so union is natural. Also $f[\{x\}]=\{f(x)\}$, which proves naturality of the singleton unit directly. [L2, step 1.1]

3.1 The two unit laws are $\bigcup\{A\}=A$ and $\bigcup_{x\in A}\{x\}=A$. Associativity is the equality obtained by removing either pair of parentheses from a union of families of families. These identities also hold when $X=\varnothing$, so [L3] gives the claimed monad. [L3, step 1.1, step 2.1] ∎
