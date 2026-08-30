---
id: lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking
kind: lemma
title: "A countable coordinate-ball cover has a countable locally finite shrinking"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-manifold, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, lem-regularity-via-closed-neighbourhoods, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
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

Let $(U_n)_{n\ge 1}$ be a countable cover of a smooth manifold $M$ by coordinate balls with compact closures. Then there are countable families of open sets $(W_k)_{k\ge 1}$ and coordinate balls $(V_k)_{k\ge 1}$ such that $M=\bigcup_k W_k$, each $\overline{W_k}\subseteq V_k\subseteq \overline{V_k}\subseteq U_{n(k)}$ for some index $n(k)$, and the family $(V_k)$ is locally finite.

## Facts & Assumptions

**Given:** A countable cover $(U_n)_{n\ge 1}$ of $M$ by coordinate balls with compact closures.

[L1] Coordinate balls form a basis of the underlying topological manifold, and
the basis balls supplied there have compact closures
([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

[L2] In a regular space, if $x\in U$ with $U$ open, then there is an open set $V$ with $x\in V\subseteq \overline V\subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]]).

[L3] Compact subsets of Hausdorff spaces are closed, and closed subspaces of compact spaces are compact ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]]).

[A1] Smooth manifolds are Hausdorff and regular.

## Proof

**Proof technique:** direct.

1.1 Put $H_r:=\bigcup_{i=1}^r \overline{U_i}$ for $r\ge 1$. Each $H_r$ is compact, and the interiors of the $H_r$ cover $M$ because $U_r\subseteq\operatorname{int}(H_r)$. [given, L3]

2.1 Set $r_1=1$. Recursively, compactness of $H_{r_m}$ and the open cover $(\operatorname{int}(H_r))_{r\ge 1}$ give an integer $r_{m+1}>r_m$ such that $H_{r_m}\subseteq\operatorname{int}(H_{r_{m+1}})$. Put $K_m:=H_{r_m}$ and $K_{-1}=K_0=\varnothing$. Then $K_m\subseteq\operatorname{int}(K_{m+1})$ and the interiors of the $K_m$ cover $M$. [step 1.1, choose]

3.1 Put $A_1:=K_1$ and $A_m:=K_m\setminus \operatorname{int}(K_{m-1})$ for $m\ge 2$; each $A_m$ is compact by [L3]. Fix $x\in A_m$, choose some $U_n$ containing $x$, and set $$O_x:=U_n\cap \operatorname{int}(K_{m+1})\setminus K_{m-2}.$$ By step 2.1, this is an open neighbourhood of $x$. Apply [L2] to choose an open $R_x$ with $x\in R_x\subseteq\overline{R_x}\subseteq O_x$, and then [L1] to choose a coordinate ball $V_x$ with $x\in V_x\subseteq R_x$ and compact closure. Thus $\overline{V_x}\subseteq\overline{R_x}\subseteq O_x$. Applying [L2] inside $V_x$, choose an open set $W_x$ with $$x\in W_x\subseteq \overline{W_x}\subseteq V_x.$$ Compactness of $A_m$ gives finitely many such pairs covering $A_m$. [L1, L2, L3, step 2.1, choose]

4.1 Collect the finitely many pairs from each $A_m$ into sequences $(W_k)$ and $(V_k)$. They are countable, and they cover $M$ because the annuli $A_m$ cover $M$. Given $y\in M$, choose $m$ with $y\in\operatorname{int}(K_m)$. If $V_k$ is attached to $A_j$ with $j\ge m+3$, then step 3.1 gives $V_k\cap\operatorname{int}(K_m)=\varnothing$ because $K_{j-2}\supseteq K_m$. Hence the neighbourhood $\operatorname{int}(K_m)$ meets only the finitely many families attached to $A_1,\ldots,A_{m+2}$. Thus $(V_k)$ is locally finite. [step 2.1, step 3.1, algebra]

5.1 Hence $(W_k)$ and $(V_k)$ give the required countable locally finite shrinking. [step 4.1] ∎
