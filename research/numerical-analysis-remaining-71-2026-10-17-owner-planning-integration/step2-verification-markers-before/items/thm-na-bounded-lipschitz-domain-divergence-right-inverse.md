---
id: thm-na-bounded-lipschitz-domain-divergence-right-inverse
kind: theorem
title: "Divergence right inverse on bounded connected Lipschitz domains"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: ["lem-na-lipschitz-domain-finite-star-shaped-cover", "lem-na-finite-cover-zero-mean-data-decomposition", "thm-na-star-shaped-bogovskii-bounded-right-inverse", "lem-na-zero-mean-of-zero-boundary-divergence", "def-countable-choice"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and 8.7.1."
---

## Statement

Let $D\subset\mathbb R^d$ be nonempty, bounded, connected and Lipschitz, with $d\in\{2,3\}$. Under Countable Choice there is a bounded linear map $B_D:L^2_0(D)\to H^1_0(D;\mathbb R^d)$ such that
$$\operatorname{div}B_Dq=q,\qquad \|\nabla B_Dq\|_2\le C_{\rm div}(D)\|q\|_2.$$
For a chosen finite cover and tree decomposition from [[lem-na-lipschitz-domain-finite-star-shaped-cover]] and [[lem-na-finite-cover-zero-mean-data-decomposition]], one valid bound is $C_{\rm div}(D)=\sum_i C_{U_i}D_i$; it is finite and independent of any finite-element mesh.

## Facts & Assumptions

**Given:** Countable Choice; a bounded connected Lipschitz domain, the finite star-shaped cover, its zero-mean decomposition constants, and the local Bogovskii right inverses.

[A1] Countable Choice is inherited through the local L2 divergence right-inverse extension. ([[def-countable-choice]])

[F1] The cover has finitely many star-shaped $U_i$ and every $q\in L^2_0(D)$ decomposes linearly into $q_i\in L^2_0(U_i)$ with $q=\sum_iq_i$ and $\|q_i\|_2\le D_i\|q\|_2$. ([[lem-na-lipschitz-domain-finite-star-shaped-cover]], [[lem-na-finite-cover-zero-mean-data-decomposition]])

[F2] Each local operator maps $L^2_0(U_i)$ boundedly into $H^1_0(U_i)^d$ with divergence $q_i$ and gradient bound $C_{U_i}$. ([[thm-na-star-shaped-bogovskii-bounded-right-inverse]])

[F3] Zero-boundary fields on bounded open sets have zero-mean divergence. ([[lem-na-zero-mean-of-zero-boundary-divergence]])

## Proof

1.1 For $q\in L^2_0(D)$, form $q_i$ by [F1], apply the local theorem [F2], extend each $B_{U_i}q_i$ by zero to $D$, and define $B_Dq=\sum_i\widetilde{B_{U_i}q_i}$. The extension belongs to $H^1_0(D)^d$: approximate in $H^1(U_i)$ by compactly supported smooth fields and extend those by zero. [A1, F1, F2, construct]

2.1 Zero extension preserves weak derivatives because the approximating functions are compactly supported inside $U_i$; hence $\operatorname{div}\widetilde{B_{U_i}q_i}$ is the zero extension of $q_i$. Summing and using [F1] gives $\operatorname{div}B_Dq=q$. Linearity follows from the linear decomposition and local operators. [A1, F1, F2, step 1.1]

2.2 The triangle inequality and [F1]–[F2] yield $\|\nabla B_Dq\|_2\le\sum_i C_{U_i}\|q_i\|_2\le(\sum_i C_{U_i}D_i)\|q\|_2$. Each sum is finite, and its ingredients depend only on the chosen domain cover, not on a mesh parameter. [A1, F1, F2, algebra, step 1.1]

3.1 Conversely, any $v\in H^1_0(D)^d$ has zero-mean divergence by [F3], so $L^2_0(D)$ is the compatible pressure range. The identity in step 2.1 proves that every such datum is attained by the constructed right inverse. [A1, F3, step 2.1] ∎
