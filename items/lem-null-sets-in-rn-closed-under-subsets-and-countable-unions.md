---
id: lem-null-sets-in-rn-closed-under-subsets-and-countable-unions
kind: lemma
title: "Subsets and countable unions of null subsets of $\\mathbb{R}^m$ are null"
status: published
origin: session
deps: [def-null-and-content-zero-in-rn, def-countable-choice, thm-n-cross-n-countable, thm-geometric-series, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-integer-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

Every subset of a null subset of $\mathbb R^m$ is null. Assuming countable choice, every countable union of null subsets of $\mathbb R^m$ is null.

## Facts & Assumptions

**Given:** Null sets $E_j$, $j\in\mathbb N$.

[L1] Nullity is the cube-cover condition of [[def-null-and-content-zero-in-rn]].

[L2] Countable choice selects one cover for each $E_j$ ([[def-countable-choice]]), and $\mathbb N^2$ is countable ([[thm-n-cross-n-countable]]).

[L3] $\sum_{j\ge0}2^{-j-1}=1$ ([[thm-geometric-series]]).

[L4] A nonnegative series converges with sum at most $M$ whenever all of its finite partial sums are at most $M$ ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

## Proof

**Proof technique:** constructive.

1.1 Subset closure follows because any cover of a set covers every subset.  [L1]

1.2 Given $\varepsilon>0$, choose for each $j$ a cube cover of $E_j$ with total volume at most $\varepsilon2^{-j-1}$. This simultaneous selection uses [L2].  [L1, L2, L3, construct]

2.1 Enumerate the doubly indexed cubes through a bijection $\mathbb N\to\mathbb N^2$. Every finite partial sum is contained in a finite rectangle of indices and is at most $\sum_j\varepsilon2^{-j-1}\le\varepsilon$.   [step 1.2, L2, L3, given]

3.1 By [L4], the enumerated nonnegative volume series converges with sum at most $\varepsilon$. The cubes cover $\bigcup_jE_j$, proving nullity.  [step 2.1, L1, L4, discharge-construct] ∎
