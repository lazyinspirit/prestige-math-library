---
id: ex-index-of-the-trivial-subgroups
kind: example
title: "$[G:G]=1$ and, for finite $G$, $[G:\\{e\\}]=|G|$"
status: published
origin: session
deps: [def-index, def-coset, thm-lagrange, def-order-in-a-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Example

For every group $G$, $[G:G]=1$. If $G$ is finite with identity $e$, then
$[G:\{e\}]=|G|$.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$; for the second assertion, assume $G$ is finite.

[F1] The cosets are $gH=\{gh:h\in H\}$, and the index is the cardinality of the coset set when finite ([[def-coset]], [[def-index]]).

[L1] Lagrange's theorem gives $|G|=[G:H]|H|$ for a subgroup of a finite group ([[thm-lagrange]], [[def-order-in-a-group]]).

## Verification

**Proof technique:** direct.

1.1 For $H=G$, every coset $gG$ equals $G$, so the coset set is $\{G\}$ and $[G:G]=1$. [F1]

1.2 For $H=\{e\}$, every coset is the singleton $g\{e\}=\{g\}$; equivalently, [L1] gives $|G|=[G:\{e\}]\cdot1$. Hence $[G:\{e\}]=|G|$. [F1, L1]

2.1 Steps 1.1 and 1.2 establish the two index formulas. [step 1.1, step 1.2] ∎
