---
id: cor-finite-direct-sums-preserve-chain-conditions
kind: corollary
title: "Finite direct sums preserve and reflect Noetherian and Artinian conditions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chain-conditions-in-short-exact-sequences, def-direct-sum-of-a-family-of-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

A finite direct sum is Noetherian if and only if every summand is Noetherian, and it is Artinian if and only if every summand is Artinian. The empty direct sum is included. See [[thm-chain-conditions-in-short-exact-sequences]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] In a short exact sequence $0\to N\to M\to Q\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”. ([[thm-chain-conditions-in-short-exact-sequences]]).

[L2] Let $R$ be a unital ring and $(M_i)_{i\in I}$ a family of left $R$-modules (def-left-and-right-modules). Their direct product is the module $\prod_{i\in I}M_i$ with coordinatewise operations. The support of $m=(m_i)$ is $\{i\in I:m_i\ne0\}$, and the direct sum is the submodule $$\bigoplus_{i\in I}M_i=\{m\in\prod_{i\in I}M_i:\operatorname{supp}(m)\text{ is finite}\}$$ (def-submodule). ([[def-direct-sum-of-a-family-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 Induct on the number of summands using the split short exact sequence for a binary direct sum. [L1, L2, given, algebra]

2.1 Reflection follows because every summand is a submodule and a quotient. [step 1.1, given, algebra]

3.1 Both extremes of the induction are admitted. The empty direct sum is the zero module, whose only chains of submodules are constant, so it satisfies both conditions while the "every summand" side is vacuously true; a single summand makes the direct sum that summand, so the equivalence is an identity and supplies the base of the induction in step 1.1. This proves the stated claim. [step 1.1, step 2.1, given, algebra] ∎
