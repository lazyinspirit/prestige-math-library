---
id: cex-union-of-filters-not-filter
kind: counterexample
title: "The union of the two principal ultrafilters on a two-point set is not a filter"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-principal-ultrafilter, def-filter, lem-union-of-chain-of-filters]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
pipeline_run: null
---

## Statement refuted

The union of any two filters on a set is again a filter.

On $X=\{0,1\}$, let $\mathcal U_0$ and $\mathcal U_1$ be the principal
ultrafilters at $0$ and $1$. Their union is not a filter.

## Facts & Assumptions

**Given:** The set $X=\{0,1\}$ and the principal ultrafilters $\mathcal U_0=\{A\subseteq X:0\in A\}$ and $\mathcal U_1=\{A\subseteq X:1\in A\}$.

[L1] For every $x\in X$, the subsets of $X$ containing $x$ form the principal ultrafilter $\mathcal U_x$ ([[ex-principal-ultrafilter]]).

[F1] A filter is closed under pairwise intersection and omits $\emptyset$ ([[def-filter]]).

[L2] The union of a nonempty inclusion-chain of filters is a filter; comparability is used to place any two members in one filter before intersecting them ([[lem-union-of-chain-of-filters]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], $\mathcal U_0$ and $\mathcal U_1$ are filters on $X$. [given, L1]

1.2 The singleton $\{0\}$ belongs to $\mathcal U_0$ and the singleton $\{1\}$ belongs to $\mathcal U_1$, so both belong to $\mathcal U_0\cup\mathcal U_1$. [given]

1.3 The two filters are not comparable: $\{0\}\in\mathcal U_0\setminus\mathcal U_1$ and $\{1\}\in\mathcal U_1\setminus\mathcal U_0$. Hence [L2] does not apply, and the example shows why its chain hypothesis is essential. [given, L2]

2.1 Neither principal ultrafilter contains $\emptyset$, so $\emptyset\notin\mathcal U_0\cup\mathcal U_1$. [step 1.1, F1]

3.1 If $\mathcal U_0\cup\mathcal U_1$ were a filter, intersection closure applied to $\{0\}$ and $\{1\}$ would put $\emptyset=\{0\}\cap\{1\}$ in the union, contradicting step 2.1. Thus the union is not a filter. [step 1.2, step 2.1, F1]

4.1 Therefore an arbitrary union of two filters, even two principal ultrafilters, need not be a filter. [step 1.1, step 3.1] ∎
