---
id: lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking
kind: lemma
title: "A countable coordinate-ball cover has a countable locally finite shrinking"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, def-smooth-manifold, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, lem-regularity-via-closed-neighbourhoods, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $(U_n)_{n\ge 1}$ be a countable cover of a smooth manifold $M$ by coordinate balls with compact closures. Then there is an at-most-countable index set $I$ and families of open sets $(W_k)_{k\in I}$ and coordinate balls $(V_k)_{k\in I}$ such that $M=\bigcup_{k\in I} W_k$, each $\overline{W_k}\subseteq V_k\subseteq \overline{V_k}\subseteq U_{n(k)}$ for some index $n(k)$, and the family $(V_k)$ is locally finite. The index set may be finite or empty.

## Facts & Assumptions

**Given:** Countable choice and a countable cover $(U_n)_{n\ge 1}$ of $M$ by coordinate balls with compact closures.

[L1] Coordinate balls form a basis of the underlying topological manifold, and the basis balls supplied there have compact closures ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

[L2] In a regular space, if $x\in U$ with $U$ open, then there is an open set $V$ with $x\in V\subseteq \overline V\subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]]).

[L3] Compact subsets of Hausdorff spaces are closed, and closed subspaces of compact spaces are compact ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]]).

[A1] Smooth manifolds are Hausdorff and regular.

[A2] Countable choice selects one finite covering list for each compact annulus from independently specified nonempty sets of lists ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Put $H_r:=\bigcup_{i=1}^r \overline{U_i}$ for $r\ge 1$. Each $H_r$ is compact, and the interiors of the $H_r$ cover $M$ because $U_r\subseteq\operatorname{int}(H_r)$. [given, L3]

2.1 Set $r_1=1$. Recursively, compactness of $H_{r_m}$ and the open cover $(\operatorname{int}(H_r))_{r\ge 1}$ give an integer $r_{m+1}>r_m$ such that $H_{r_m}\subseteq\operatorname{int}(H_{r_{m+1}})$. Put $K_m:=H_{r_m}$ and $K_{-1}=K_0=\varnothing$. Then $K_m\subseteq\operatorname{int}(K_{m+1})$ and the interiors of the $K_m$ cover $M$. [step 1.1, choose]

3.1 Put $A_1:=K_1$ and $A_m:=K_m\setminus\operatorname{int}(K_{m-1})$ for $m\ge2$; each $A_m$ is compact by [L3]. For each $m$, consider all tuples $(n,W,V)$ with $V$ a coordinate ball, $W$ open, and $$\overline W\subseteq V\subseteq\overline V\subseteq U_n\cap\operatorname{int}(K_{m+1})\setminus K_{m-2}.$$ Their $W$-sets cover $A_m$: for an individual $x\in A_m$, take any $U_n$ containing $x$ and successively use [L2] and [L1] inside the displayed open neighbourhood to construct such $V$ and $W$ around $x$. This proves existence at each point without a simultaneous point-indexed choice. By compactness, the set of finite ordered lists of these tuples whose $W$-sets cover $A_m$ is nonempty (and contains the empty list when $A_m=\varnothing$). [L1, L2, L3, step 2.1, construct]

4.1 Use [A2] once on the countable family of nonempty finite-list sets from step 3.1. Concatenate the chosen lists into an at-most-countable indexed family $(W_k,V_k)_{k\in I}$; take $I=\varnothing$ when every list is empty. They cover $M$ because the annuli $A_m$ cover $M$. Given $y\in M$, choose $m$ with $y\in\operatorname{int}(K_m)$. If $V_k$ came from annulus $A_j$ with $j\ge m+3$, then $V_k\cap\operatorname{int}(K_m)=\varnothing$ because $K_{j-2}\supseteq K_m$. Only finitely many tuples came from the remaining finitely many annuli, so $(V_k)$ is locally finite. [A2, step 2.1, step 3.1, choose]

5.1 Hence $(W_k)$ and $(V_k)$ give the required countable locally finite shrinking. [step 4.1] ∎
