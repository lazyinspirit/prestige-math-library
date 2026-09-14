---
id: cor-absolute-and-unconditional-convergence-agree-universally-iff-finite-dimensional
kind: corollary
title: "Universal agreement of absolute and unconditional convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, thm-dvoretzky-rogers, thm-coordinate-map-for-a-finite-dimensional-normed-space, thm-unconditional-convergence-equivalences]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: equivalence
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "A. Dvoretzky and C. A. Rogers, Absolute and Unconditional Convergence in Normed Linear Spaces"
      url: "https://eclass.uoa.gr/modules/document/file.php/MATH195/4.%20%CE%86%CF%81%CE%B8%CF%81%CE%B1%20%CE%95%CF%80%CE%B9%CF%83%CE%BA%CF%8C%CF%80%CE%B7%CF%83%CE%B7%CF%82/8-Dvoretzky_Rogers.pdf"
      locator: "Theorem 1, p.192, and Theorem 2, p.195"
pipeline_run: phase-2-next-18
---

## Statement

Assume Countable Choice. For a Banach space $X$, every unconditionally
convergent series in $X$ is absolutely convergent if and only if $X$ is
finite-dimensional. The zero-dimensional case is included.

## Facts & Assumptions

[A1] Countable Choice holds ([[def-countable-choice]]).

[L1] Every infinite-dimensional Banach space has an unconditional nonabsolute
series under Countable Choice ([[thm-dvoretzky-rogers]]).

[L2] Finite-dimensional coordinate maps and their inverses are continuous
([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[L3] Unconditional convergence is equivalent to convergence under every
bounded scalar multiplier ([[thm-unconditional-convergence-equivalences]]).

## Proof

**Proof technique:** equivalence.

**Given:** The objects and hypotheses in the Statement.

1.1 Suppose $X$ has finite positive dimension with basis $e_1,\ldots,e_d$, [given, L3, L2]
and write $x_n=\sum_ja_{j,n}e_j$. If $\sum_nx_n$ is unconditional, then for
each $j$ choose the bounded phases
$\lambda_n=\overline{a_{j,n}}/|a_{j,n}|$ when $a_{j,n}\ne0$ and zero otherwise.
By [L3], $\sum_n\lambda_nx_n$ converges; applying the continuous $j$th
coordinate from [L2] shows $\sum_n|a_{j,n}|<\infty$. [L2, L3, finite phases]

2.1 The triangle inequality gives [given, step 1.1]
$\|x_n\|\le\sum_j|a_{j,n}|\|e_j\|$. Summing and using step 1.1 over the
finite set of coordinates proves $\sum_n\|x_n\|<\infty$. If $X=\{0\}$ the
claim is immediate. Thus finite dimension implies universal agreement.
[step 1.1, finite sum]

3.1 Conversely, if $X$ is infinite-dimensional, [A1] and [L1] supply an [given, A1, L1, step 2.1]
unconditionally convergent series that is not absolutely convergent. Universal
agreement therefore fails. This proves the reverse implication and the
equivalence. [A1, L1] ∎
