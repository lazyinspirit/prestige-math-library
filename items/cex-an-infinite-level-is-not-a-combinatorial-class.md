---
id: cex-an-infinite-level-is-not-a-combinatorial-class
kind: counterexample
title: "A family with infinitely many objects of size $2$ is not a combinatorial class"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-combinatorial-class-and-ordinary-generating-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

Let $\mathcal{A} := \{a_0,a_1,a_2,\dots\}$ and define $|a_j|:=2$ for every
$j \in \mathbb{N}$. Then the level $\mathcal{A}_2$ is infinite, so
$\mathcal{A}$ is not a combinatorial class.

## Facts & Assumptions

**Given:** A combinatorial class is required to have finite size-$n$ levels for every $n$ ([[def-combinatorial-class-and-ordinary-generating-function]]).

## Verification

**Proof technique:** direct.

1.1 The size-$2$ level of the displayed family is $\mathcal{A}_2=\{a_0,a_1,a_2,\dots\}$, which is infinite. [given]

2.1 This violates the defining finiteness condition on levels, so the family is not a combinatorial class. [step 1.1, given] ∎
