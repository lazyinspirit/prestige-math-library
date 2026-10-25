---
id: lem-regular-lindelof-spaces-are-normal
kind: lemma
title: "Every regular Lindelöf space is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-regularity-via-closed-neighbourhoods, def-compactness-variants, def-normal-and-t4-spaces]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: codex
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local defect repair; no independent judge
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. R. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "MSSC topology text, §16"
      url: "https://www.mssc.mu.edu/~paul/Paper/112042text.pdf"
pipeline_run: null
---

## Statement

Every regular Lindelöf space is normal.

## Facts & Assumptions

**Given:** A regular Lindelöf space $X$ and disjoint closed sets $A,B\subseteq X$.

[L1] If $x\in U$ and $U$ is open in a regular space, there is open $V$ with $x\in V\subseteq\overline V\subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]]).

[F1] Lindelöf means that every open cover has an at most countable subcover ([[def-compactness-variants]]).

[F2] Normality is separation of disjoint closed subsets by disjoint open sets ([[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal V$ be the family of all open $V\subseteq X$ satisfying $\overline V\subseteq X\setminus B$. For every $a\in A$, [L1] supplies a member of $\mathcal V$ containing $a$, so $\mathcal V\cup\{X\setminus A\}$ is an open cover of $X$. [L1]

2.1 By Lindelöfness, an at most countable subfamily of $\mathcal V$ covers $A$. Interchanging $A$ and $B$ gives an at most countable family of open sets covering $B$, each with closure disjoint from $A$. List these families as $(U_n)_{n\ge0}$ and $(V_n)_{n\ge0}$, padding a finite family with empty sets. The countable-listing convention is part of [F1]. Only two subcovers and their listings are selected; no axiom of choice is needed. [F1, step 1.1]

3.1 Set $U=\bigcup_{n\ge0}(U_n\setminus\bigcup_{i\le n}\overline{V_i})$ and $W=\bigcup_{n\ge0}(V_n\setminus\bigcup_{i\le n}\overline{U_i})$. Each summand is open because it removes only finitely many closed sets from an open set. Every point of $A$ lies in some $U_n$ and in none of the $\overline{V_i}$, so $A\subseteq U$. Similarly $B\subseteq W$. [step 2.1]

4.1 A point in the $n$th summand of $U$ and the $m$th summand of $W$ is impossible: if $m\le n$, the first summand excludes $\overline{V_m}$; if $n\le m$, the second excludes $\overline{U_n}$. Thus $U\cap W=\varnothing$, and these open sets prove normality, including empty $A$ or $B$. [F2, step 3.1] ∎
