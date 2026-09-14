---
id: thm-unconditional-convergence-equivalences
kind: theorem
title: "Equivalent forms of unconditional convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-banach-space, def-unconditional-convergence-of-a-banach-space-series]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: equivalence
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Müger, Introduction to Functional Analysis"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
      locator: "Theorem A.4 and complete proof, printed pp.167-169"
pipeline_run: phase-2-next-18
---

## Statement

Let $X$ be a Banach space and let
$x:\mathbb N_{\ge1}\to X$, written $(x_n)_{n\ge1}$, be a positively indexed
family. The following are equivalent.

1. $\sum_nx_n$ is unconditionally convergent.
2. The net $(\sum_{n\in F}x_n)_F$, directed by inclusion over finite subsets of
   $\mathbb N_{\ge1}$, converges.
3. For every $\varepsilon>0$ there is $N$ such that
   $\|\sum_{n\in F}x_n\|<\varepsilon$ for every finite
   $F\subseteq\{N,N+1,\ldots\}$.
4. Every subseries $\sum_kx_{n_k}$, for $n_1<n_2<\cdots$, converges.
5. For every bounded scalar family
   $\lambda:\mathbb N_{\ge1}\to\mathbb K$, the series
   $\sum_n\lambda_nx_n$ converges.

In (1) and (2) the limit is the fixed-order sum.

## Facts & Assumptions

[L1] Every Cauchy sequence in a Banach space converges ([[def-banach-space]]).

[L2] Unconditional convergence means convergence of every permutation to the
same sum ([[def-unconditional-convergence-of-a-banach-space-series]]).

## Proof

**Proof technique:** equivalence.

**Given:** The objects and hypotheses in the Statement.

1.1 Suppose (3) fails, and enumerate finite subsets of
$\mathbb N_{\ge1}$ by their finite codes. [given] Recursively build a listing
as follows. At stage $k$, first append the least positive integer not yet
listed, let $M$ be the greatest integer listed so far, and then take the least
coded finite set $F_k\subseteq\{M+1,M+2,\ldots\}$ with
$\|\sum_{n\in F_k}x_n\|\ge\varepsilon$ and append its members in increasing
order. The negation of (3) supplies such an $F_k$ after every finite stage,
and least codes make the recursion unique. [negation of (3), finite coding]

2.1 No integer is listed twice, because every block $F_k$ lies beyond all [given, L2, step 1.1]
earlier entries. Every positive integer is eventually listed, since each stage
appends the current least omitted integer. Thus the listing is a permutation
of $\mathbb N_{\ge1}$. Each $F_k$ is a consecutive block whose increment has
norm at least $\varepsilon$, so the rearranged partial sums are not Cauchy. By
[L2], (1) therefore implies (3). [step 1.1, L2]

3.1 Assume (3). Given $\varepsilon$, choose $N$ for $\varepsilon/2$. If finite [given, L1, step 2.1]
$E,F$ both contain $\{1,\ldots,N-1\}$, their sums differ by two disjoint finite
tail sums and hence by less than $\varepsilon$. In particular, the ordinary
partial sums are Cauchy, so [L1] gives a limit $s\in X$. Applying (3) once more
to a finite $F$ containing a sufficiently long initial segment shows
$\|\sum_{n\in F}x_n-s\|<\varepsilon$. Thus the finite-subset net converges to
$s$, and (3) implies (2). [L1, (3), triangle]

4.1 Every permutation's initial index sets are cofinal among finite subsets: [given, L2, step 3.1]
each fixed finite set is eventually included. Hence (2) makes every rearranged
partial-sum sequence converge to the net limit. The ordinary initial segments
are also cofinal, so this limit is the fixed-order sum. Thus (2) implies (1).
[L2, (2), cofinality]

5.1 Under (3), any finite tail of any subseries is a finite tail set of the [given, L1, step 1.1, step 4.1]
original series. It satisfies the Cauchy criterion, so [L1] proves (4).
Conversely, if (3) failed, the union of the disjoint blocks $F_k$ from step 1.1,
listed increasingly, would define a subseries having successive block
increments of norm at least $\varepsilon$, hence not Cauchy. Thus (3) and (4)
are equivalent. [step 1.1, L1, (3)]

6.1 Assume (3), let $|\lambda_n|\le M$, and take a finite tail set $F$. A [given, L1, step 5.1]
finite layer-cake decomposition shows that for $0\le t_n\le1$,
$\sum_{n\in F}t_nx_n$ is a convex combination of subset sums of $F$.
Writing a real multiplier as its positive part minus its negative part, and a
complex multiplier as the same decomposition of real and imaginary parts,
gives

$$\left\|\sum_{n\in F}\lambda_nx_n\right\|\le4M \sup_{A\subseteq F}\left\|\sum_{n\in A}x_n\right\|.$$

(The factor is $2M$ over the reals.) Condition (3) and [L1] now prove (5).
Taking $\lambda_n$ to be the indicator of an infinite subset shows that (5)
implies (4). [L1, (3), finite convexity]

7.1 Steps 2.1--6.1 give both directions among all five conditions. The [given, step 4.1, step 6.1]
common-sum identification is the conclusion of step 4.1.
[steps 2.1, 3.1, 4.1, 5.1, 6.1]
∎
