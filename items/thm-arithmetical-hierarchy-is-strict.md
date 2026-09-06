---
id: thm-arithmetical-hierarchy-is-strict
kind: theorem
title: "The arithmetical hierarchy is strict"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sigma-n-pi-n-and-delta-n-sets, thm-posts-theorem, lem-diagonal-set-at-each-level]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Corollary 5.4"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

For every $n\ge1$, $\Sigma_n^0\subsetneq\Sigma_{n+1}^0$ and
$\Pi_n^0\subsetneq\Pi_{n+1}^0$.

## Facts & Assumptions

**Given:** $n\ge1$.

## Proof

**Proof technique:** direct.

1.1 Padding a prefix by a vacuous final quantifier shows $\Sigma_n^0\subseteq\Sigma_{n+1}^0$ and similarly for $\Pi$. [given, construct]

2.1 The level-$n$ diagonal construction supplies a $\Sigma_{n+1}^0$ set outside $\Pi_{n+1}^0$. If it lay in $\Sigma_n^0$, then it would also lie in $\Pi_{n+1}^0$ by padding and complement normalization, a contradiction; the complementary witness gives the $\Pi$ separation. [step 1.1, contradiction] ∎
