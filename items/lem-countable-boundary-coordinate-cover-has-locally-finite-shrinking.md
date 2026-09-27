---
id: lem-countable-boundary-coordinate-cover-has-locally-finite-shrinking
kind: lemma
title: "A countable boundary coordinate cover has a locally finite shrinking"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice,
       def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary,
       lem-relatively-compact-boundary-coordinate-half-balls-form-a-basis,
       thm-n-cross-n-countable,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: locally-reviewed
    date: 2026-09-23
    scope: "Owner-authorized new repair prerequisite; bounded mathematical reading and local checks, no independent judge or whole-closure certification"
    delegated_by: owner
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1; background for boundary charts and paracompact refinements"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $(U_n)_{n\ge1}$ be a countable cover of a smooth manifold with boundary $M$ by relatively compact coordinate balls or half-balls. Then there is an at-most-countable index set $I$ and families of open sets $(W_k)_{k\in I}$ and relatively compact coordinate balls or half-balls $(V_k)_{k\in I}$ such that $M=\bigcup_{k\in I}W_k$, each $\overline{W_k}\subseteq V_k\subseteq\overline{V_k}\subseteq U_{n(k)}$ for some $n(k)$, and $(V_k)_{k\in I}$ is locally finite. The index set may be finite or empty.

## Facts & Assumptions

**Given:** Countable Choice and a countable relatively compact coordinate ball or half-ball cover $(U_n)$ of $M$.

[L1] At every point of a boundary manifold, relatively compact coordinate balls or half-balls form a basis subordinate to any open neighbourhood ([[lem-relatively-compact-boundary-coordinate-half-balls-form-a-basis]]).

[L3] Compact subsets of Hausdorff spaces are closed, and closed subspaces of compact spaces are compact ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L4] Subsets of $\mathbb N^2$ are at most countable ([[thm-n-cross-n-countable]]).

[A1] Smooth manifolds with boundary are Hausdorff.

[A2] Countable Choice selects one finite covering list for each compact annulus from the nonempty set of all eligible finite lists ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Put $H_r=\bigcup_{i=1}^{r}\overline{U_i}$ for $r\ge1$. Every $H_r$ is compact: an open cover of this finite union restricts to an open cover of each compact $\overline{U_i}$, and the union of finitely many finite subcovers is finite. Also $U_r\subseteq\operatorname{int}H_r$, so the interiors of the $H_r$ cover $M$. [given, L3]

2.1 Set $r_1=1$. Given $r_m$, compactness of $H_{r_m}$ and the increasing open cover $(\operatorname{int}H_r)_{r\ge1}$ give an integer $r_{m+1}>r_m$ with $H_{r_m}\subseteq\operatorname{int}H_{r_{m+1}}$; take the least such integer, so this recursion uses no additional choice. Put $K_m=H_{r_m}$ and $K_{-1}=K_0=\varnothing$. Then $K_m\subseteq\operatorname{int}K_{m+1}$ and the interiors of the $K_m$ cover $M$. [step 1.1, construct]

3.1 Let $A_1=K_1$ and $A_m=K_m\setminus\operatorname{int}K_{m-1}$ for $m\ge2$. Each $A_m$ is compact by [L3]. For each $m$, consider every tuple $(n,W,V)$ with $V$ a coordinate ball or half-ball, $W$ open, and $$\overline W\subseteq V\subseteq\overline V\subseteq U_n\cap\operatorname{int}K_{m+1}\setminus K_{m-2}.$$ Their $W$-sets cover $A_m$: given $x\in A_m$, the displayed open neighbourhood contains $x$ for some $n$; use [L1] to take a relatively compact coordinate ball or half-ball $V$ with compact closure inside it, then apply [L1] again inside $V$ to take a ball or half-ball $W$ with $x\in W\subseteq\overline W\subseteq V$. This proves pointwise existence without selecting witnesses at every point. Compactness makes the set of finite ordered tuple lists whose $W$-sets cover $A_m$ nonempty; for an empty annulus, the empty list is eligible. [L1, L3, step 2.1]

4.1 By [A2], choose one eligible finite ordered list for each $m$. If its length is $s_m$, index its tuples by pairs $(m,j)$ with $1\le j\le s_m$; thus $I=\{(m,j):m\ge1,1\le j\le s_m\}\subseteq\mathbb N^2$ is at most countable by [L4], and is empty when all lists are empty. Write these tuples as $(n(k),W_k,V_k)$. Since the annuli cover $M$, so do the $W_k$. For $y\in M$, choose $m$ with $y\in\operatorname{int}K_m$. Any $V_k$ from annulus $A_j$ with $j\ge m+3$ misses this neighbourhood because it lies outside $K_{j-2}\supseteq K_m$. Only finitely many tuples come from the finitely many earlier lists. Thus $(V_k)$ is locally finite. [A2, L4, step 2.1, step 3.1]

5.1 The constructed $W_k,V_k$ have the required nesting and cover, and $V_k$ is subordinate to an original $U_{n(k)}$ by its defining tuple. [step 3.1, step 4.1] ∎
