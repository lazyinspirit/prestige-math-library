---
id: thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
kind: theorem
title: "Smooth partitions of unity exist on manifolds with boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-smooth-function-on-a-relatively-open-subset-of-a-half-space, def-smooth-partition-of-unity-on-a-manifold-with-boundary, lem-relatively-compact-boundary-coordinate-half-balls-form-a-basis, thm-second-countable-implies-lindelof, lem-countable-boundary-coordinate-cover-has-locally-finite-shrinking, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, prop-chain-rule-for-smooth-half-space-maps]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Every open cover of a smooth manifold with boundary admits a smooth partition of unity subordinate to it.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth manifold with boundary, and an open cover.

[L1] Relatively compact coordinate balls and half-balls form a basis at interior and boundary points ([[lem-relatively-compact-boundary-coordinate-half-balls-form-a-basis]]).

[L2] Under $\mathrm{AC}_\omega$ ([[def-countable-choice]]), second countability gives a countable subcover of every open cover ([[thm-second-countable-implies-lindelof]]).

[L3] Under $\mathrm{AC}_\omega$, a countable relatively compact boundary coordinate cover has an at-most-countable locally finite shrinking $\overline{W_k}\subseteq V_k\subseteq\overline{V_k}\subseteq B_{n(k)}$ ([[lem-countable-boundary-coordinate-cover-has-locally-finite-shrinking]]).

[L4] A compact set inside an open Euclidean set has a smooth $[0,1]$-valued bump equal to one near it and supported inside the open set ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]). Its proof constructs the support inside a finite union of bounded closed balls, so that support is compact.

[L5] Smoothness in half-space charts uses local smooth extension and is preserved by smooth composition ([[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]], [[prop-chain-rule-for-smooth-half-space-maps]]).

[L6] The boundary partition contract requires smoothness in half-space charts, locally finite supports subordinate to the indexed cover, and sum one ([[def-smooth-partition-of-unity-on-a-manifold-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 Form the set of all pairs $(B,j)$ where $j$ indexes a member $U_j$ of the given cover, $B$ is a coordinate ball or half-ball with compact closure, and $\overline B\subseteq U_j$. By [L1] the balls in these pairs cover $M$, without choosing one pair for every point. By [L2], their projection to balls has an at-most-countable subcover $(B_n)$. Use $\mathrm{AC}_\omega$ to choose for each listed $B_n$ an index $j(n)$ witnessing $\overline{B_n}\subseteq U_{j(n)}$. If $M=\varnothing$, the empty partition already satisfies [L6]; henceforth assume it is nonempty, repeating one selected pair if the subcover is finite. [L1, L2, L6, given, construct]

2.1 Apply [L3] to $(B_n)$, obtaining an at-most-countable family $(W_k,V_k)_{k\in I}$ with $\bigcup_k W_k=M$, $\overline{W_k}\subseteq V_k\subseteq\overline{V_k}\subseteq B_{n(k)}$, and $(V_k)$ locally finite. Assign each $k$ to the original cover index $j(n(k))$ from step 1.1. [L3, step 1.1]

3.1 Fix $k$. A chart for $V_k$ identifies the compact set $\overline{W_k}\subseteq V_k$ with a compact subset $K_k$ of a relatively open set $Q_k\subseteq\mathbb H^n$. Choose an open $O_k\subseteq\mathbb R^n$ with $O_k\cap\mathbb H^n=Q_k$. For $n>0$, [L4] gives a smooth Euclidean bump equal to one near $K_k$ and supported inside $O_k$. Its support is compact by the finite-ball construction in [L4], so its intersection with the closed half-space is compact and lies inside $Q_k$. Restrict the bump to $\mathbb H^n$, pull it back through the chart, and extend by zero outside $V_k$. Its support is a compact subset of $V_k$, so this extension is smooth both at the manifold boundary and across the edge of $V_k$ by [L5]. It is a $[0,1]$-valued smooth function $b_k$, equal to one on $\overline{W_k}$ and supported inside $V_k$. For $n=0$, use the constant-one function on the singleton chart $V_k$, extended by zero outside it. [L4, L5, step 2.1, construct]

4.1 The nonempty set of valid bumps in step 3.1 is specified independently for each $k$ in an at-most-countable family. Use $\mathrm{AC}_\omega$ once to select all $b_k$ (finite choice if $I$ is finite). Because $\operatorname{supp}b_k\subseteq V_k$ and $(V_k)$ is locally finite, $a:=\sum_{k\in I}b_k$ is locally a finite smooth sum. It is positive everywhere because the $W_k$ cover $M$ and $b_k=1$ on $W_k$. By [L5], $1/a$ is smooth in boundary charts: near each point a smooth local extension of $a$ stays positive after shrinking the chart, so the ordinary reciprocal composes smoothly. Set $c_k=b_k/a$. [L5, step 2.1, step 3.1, choose]

5.1 For each original cover index $j$, put $\phi_j=\sum_{k:j(n(k))=j}c_k$, taking the zero function when there are no such $k$. The family is locally finite because the $V_k$ are, and every $\phi_j$ is smooth and nonnegative. The union of the locally finite closed supports assigned to $j$ is closed and lies in $U_j$, so $\operatorname{supp}\phi_j\subseteq U_j$. Also $\sum_j\phi_j=\sum_kc_k=1$, and each $\phi_j\le1$. By [L6], this is a smooth partition subordinate to the original cover. The empty case was handled in step 1.1. [L6, step 1.1, step 2.1, step 4.1] ∎
