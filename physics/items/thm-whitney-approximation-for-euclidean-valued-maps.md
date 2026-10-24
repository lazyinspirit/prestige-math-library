---
id: thm-whitney-approximation-for-euclidean-valued-maps
kind: theorem
title: "Whitney approximation for Euclidean-valued maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-positive-continuous-error-function-for-strong-approximation, def-countable-choice, def-smooth-manifold, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact, lem-compactness-of-a-subspace-is-ambient, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-a-locally-finite-sum-of-smooth-functions-is-smooth, thm-algebra-of-derivatives, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-09
    scope: "Owner-authorized countable-choice and refinement-indexed approximation repair; local checks only, no independent judge"
    delegated_by: owner
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.21"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $F:M\to\mathbb R^k$ be continuous, where $M$ is a smooth manifold, and let $\varepsilon:M\to(0,\infty)$ be a positive continuous error function. Then there exists a smooth map $\widetilde F:M\to\mathbb R^k$ such that
$$\|\widetilde F(p)-F(p)\|<\varepsilon(p)\qquad\text{for all }p\in M.$$

## Facts & Assumptions

**Given:** Countable choice, a continuous map $F:M\to\mathbb R^k$, and a positive continuous error function $\varepsilon$.

[A1] Countable choice selects countably many coordinate/sample tuples, finite annular covering lists, and bumps ([[def-countable-choice]]).

[F1] The error function is positive and continuous ([[def-positive-continuous-error-function-for-strong-approximation]]).

[F2] Smooth manifolds are Hausdorff and second countable; small balls in smooth charts have compact closures inside prescribed open neighbourhoods ([[def-smooth-manifold]], [[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

[L1] Compact subsets of Hausdorff spaces are closed. Closed subsets and finite unions of compact sets are compact, and compact subsets admit finite subcovers of ambient indexed covers ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[lem-compactness-of-a-subspace-is-ambient]]).

[L2] A compact set inside an open set admits a smooth nonnegative bump equal to one near that compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L3] Locally finite sums of smooth real-valued functions are smooth ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]). Applied to each of the finitely many components, this also handles Euclidean-valued sums.

[L4] Repeated coordinate sum, product and quotient derivative rules give smoothness of finite algebraic combinations, with a nonzero denominator for quotients ([[thm-algebra-of-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 If $M=\varnothing$, the empty map proves the claim. Otherwise form the set of all tuples consisting of a smooth coordinate ball $B$, its chart data, and a point $x\in B$ such that $\overline B$ is compact and $$\|F(y)-F(x)\|<\varepsilon(y)/2\qquad(y\in B).$$ These balls cover $M$: for a fixed $x$, continuity gives a neighbourhood on which $\|F(y)-F(x)\|<\varepsilon(x)/4$ and $\varepsilon(y)>\varepsilon(x)/2$, and [F2] supplies a smaller ball with compact closure. Fix a countable basis and use [A1] to choose one admissible tuple for each nonempty basis member contained in an eligible ball. Their balls cover $M$. Enumerate these tuples as $(B_n,x_n)$, repeating one if there are only finitely many. No choice indexed by all points was used. [A1, F1, F2, given, construct]

2.1 Let $H_r=\bigcup_{n\le r}\overline{B_n}$. By [L1] these are compact and closed, and their interiors cover $M$. Set $r_1=1$ and recursively take the least $r_{m+1}>r_m$ with $H_{r_m}\subseteq\operatorname{int}H_{r_{m+1}}$; compactness supplies such an integer. Put $K_m=H_{r_m}$ and $K_{-1}=K_0=\varnothing$. Then $K_m\subseteq\operatorname{int}K_{m+1}$ and their interiors cover $M$. The compact annuli $C_m=K_m\setminus\operatorname{int}K_{m-1}$ cover $M$. The least-integer recursion spends no dependent choice. [L1, step 1.1, construct]

3.1 For each $m$, take all tuples $(W,V,n)$ of smooth coordinate balls with compact closures such that $$\overline W\subseteq V,\qquad \overline V\subseteq B_n\cap\operatorname{int}K_{m+1}\setminus K_{m-2}.$$ Their $W$-sets cover $C_m$, by applying [F2] twice at a point in a suitable $B_n$. By [L1] the set of finite ordered lists of these tuples covering $C_m$ is nonempty, including the empty list if $C_m=\varnothing$. Use [A1] to choose one list for each $m$. The resulting pairs are indexed by a subset $I$ of $\mathbb N^2$ and cover $M$. Their $V_i$ are locally finite: a neighbourhood $\operatorname{int}K_t$ meets no pair from $m\ge t+2$, while the earlier finitely many annuli supply only finitely many pairs. Retain the integer $n(i)$ from each tuple. [A1, F2, L1, step 2.1]

4.1 By [L2] and [A1] choose for each $i\in I$ a smooth function $g_i:M\to[0,1]$ equal to one near $\overline W_i$ and supported in $V_i$. Their supports are locally finite, and $G=\sum_i g_i$ is smooth and positive because the $W_i$ cover $M$. Thus $\phi_i=g_i/G$ are smooth, nonnegative, have locally finite supports contained in $V_i$, and sum to one. This is a direct normalization calculation, not an invocation of a partition theorem with unaccounted choices or indexing. [A1, L2, L3, L4, step 3.1, choose]

5.1 Define $$\widetilde F(y)=\sum_{i\in I}\phi_i(y)F(x_{n(i)}).$$ Componentwise the summands are smooth and their supports are locally finite, so [L3] and [L4] make $\widetilde F$ smooth. At any $y$, only finitely many terms are nonzero; such indices have $y\in V_i\subseteq B_{n(i)}$ and hence $\|F(x_{n(i)})-F(y)\|<\varepsilon(y)/2$ by step 1.1. Since at least one weight is positive and their sum is one, $$\|\widetilde F(y)-F(y)\|\le\sum_i\phi_i(y)\|F(x_{n(i)})-F(y)\|<\varepsilon(y)/2<\varepsilon(y).$$ This proves the claim, including the empty case. [F1, L3, L4, step 1.1, step 3.1, step 4.1, algebra] ∎
