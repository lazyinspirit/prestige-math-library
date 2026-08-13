---
id: cor-functor-categories-inherit-completeness-and-cocompleteness
kind: corollary
title: "If A is small, then [A,C] is complete or cocomplete whenever C is respectively complete or cocomplete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-limits-and-colimits-in-functor-categories-are-computed-pointwise, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct-corollary
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Corollary 3.3.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Assume Choice. If $\mathcal A$ is small and $\mathcal C$ is complete, then
$[\mathcal A,\mathcal C]$ is complete. If $\mathcal C$ is cocomplete, then
$[\mathcal A,\mathcal C]$ is cocomplete.

## Facts & Assumptions

**Given:** A small $\mathcal A$ and the indicated completeness or
cocompleteness of $\mathcal C$.

[L1] Functor-category limits and colimits are computed pointwise when the
pointwise choices exist
([[thm-limits-and-colimits-in-functor-categories-are-computed-pointwise]]).

[F1] Completeness and cocompleteness mean existence of every small limit and
colimit ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[F2] Choice permits simultaneous selections from a set-indexed family of
nonempty sets ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct corollary.

1.1 Let $D:\mathcal J\to[\mathcal A,\mathcal C]$ be small. If $\mathcal C$ is complete, [F1] supplies a limit of $j\mapsto D(j)(a)$ for every $a$. Since $\mathcal A$ is small, [F2] selects these pointwise limits simultaneously. [F1, F2]

2.1 By [L1], the selected objects form a limit of $D$. Since $D$ was arbitrary, [F1] says the functor category is complete. [L1, F1, step 1.1]

3.1 If $\mathcal C$ is cocomplete, make the same set-indexed choices of pointwise colimits and apply the colimit clause of [L1]. This proves cocompleteness, with no assertion for a large source $\mathcal A$. [L1, F1, F2] ∎
