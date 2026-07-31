---
id: ex-ultrafilter-selects-a-cell-of-a-finite-partition
kind: example
title: "An ultrafilter selects exactly one cell of a finite disjoint list whose union it contains"
status: published
origin: session
deps: [lem-ultrafilter-prime, def-filter, def-natural-numbers]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
pipeline_run: null
---

## Example

Let $\mathcal U$ be an ultrafilter on $X$, let $n\in\mathbb N$, and let
$s:n\to\mathcal P(X)$ be a finite list of pairwise disjoint sets. If

$$\bigcup_{i\in n}s(i)\in\mathcal U,$$

then there is a unique $i\in n$ such that $s(i)\in\mathcal U$. The selected
cell is necessarily nonempty. In particular, for a finite partition of $X$
into nonempty cells, $\mathcal U$ selects exactly one cell.

The empty list causes no exceptional conclusion: its union is $\emptyset$, so
the displayed hypothesis is false for a proper filter.

## Facts & Assumptions

**Given:** An ultrafilter $\mathcal U$ on $X$, a natural number $n$, and a list $s:n\to\mathcal P(X)$ such that $s(i)\cap s(j)=\emptyset$ whenever $i\neq j$, and whose union belongs to $\mathcal U$.

[L1] For every $n\in\mathbb N$ and every list $s:n\to\mathcal P(X)$, if $\bigcup_{i\in n}s(i)\in\mathcal U$, then $s(i)\in\mathcal U$ for some $i\in n$ ([[lem-ultrafilter-prime]]).

[F1] A filter omits $\emptyset$ and is closed under pairwise intersection ([[def-filter]]).

[F2] In the von Neumann natural numbers, $n$ is the set of its predecessors, so a map $s:n\to\mathcal P(X)$ is a finite list indexed by $i\in n$ ([[def-natural-numbers]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], there is an index $i\in n$ with $s(i)\in\mathcal U$. [given, L1]

1.2 If distinct indices $i,j\in n$ both satisfied $s(i),s(j)\in\mathcal U$, then pairwise disjointness and intersection closure would give $\emptyset=s(i)\cap s(j)\in\mathcal U$, contradicting properness. [given, F1]

2.1 This selected cell is nonempty, because $s(i)=\emptyset$ would put $\emptyset$ in the proper filter $\mathcal U$. [step 1.1, F1]

3.1 Step 1.1 gives existence and step 1.2 gives uniqueness, while step 2.1 shows the selected cell is nonempty. [step 1.1, step 2.1, step 1.2]

4.1 When the listed sets are nonempty and partition $X$, their union is $X\in\mathcal U$, so step 3.1 says that exactly one partition cell belongs to $\mathcal U$. [step 3.1, F1, F2] ∎
