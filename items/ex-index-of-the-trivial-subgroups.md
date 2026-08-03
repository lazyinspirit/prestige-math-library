---
id: ex-index-of-the-trivial-subgroups
kind: example
title: "$[G:G]=1$ and, for finite $G$, $[G:\\{e\\}]=|G|$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-index, def-coset, thm-lagrange, def-order-in-a-group, def-subgroup, lem-group-inverse-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.1: Cosets"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.01%3A_Cosets"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.2: Lagrange's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.02%3A_Lagrange%27s_Theorem"
pipeline_run: null
---

## Example

For every group $G$, $[G:G]=1$. If $G$ is finite with identity $e$, then
$[G:\{e\}]=|G|$.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$; for the second assertion, assume $G$ is finite.

[F1] The cosets are $gH=\{gh:h\in H\}$, and the index is the cardinality of the coset set when finite ([[def-coset]], [[def-index]]).

[L1] Lagrange's theorem gives $|G|=[G:H]|H|$ for a subgroup of a finite group ([[thm-lagrange]], [[def-order-in-a-group]]).

[L2] A subset containing $e$ and closed under products and inverses is a subgroup; moreover $e^{-1}=e$ ([[def-subgroup]], [[lem-group-inverse-laws]]).

## Verification

**Proof technique:** direct.

1.1 For $H=G$, every coset $gG$ equals $G$, so the coset set is $\{G\}$ and $[G:G]=1$. [F1]

1.2 The set $H=\{e\}$ is a subgroup: it contains $e$, while $ee=e$ and $e^{-1}=e$ give closure under products and inverses by [L2]. Every coset is the singleton $g\{e\}=\{g\}$; equivalently, [L1] gives $|G|=[G:\{e\}]\cdot1$. Hence $[G:\{e\}]=|G|$. [F1, L1, L2]

2.1 Steps 1.1 and 1.2 establish the two index formulas. [step 1.1, step 1.2] ∎
