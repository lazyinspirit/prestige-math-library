---
id: lem-na-finite-cover-zero-mean-data-decomposition
kind: lemma
title: "Zero-mean L2 decomposition over a finite cover"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: ["lem-na-lipschitz-domain-finite-star-shaped-cover", "thm-holder-inequality-for-integrals"]
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

Let $D=\bigcup_{i=1}^N U_i$ be the finite connected star-shaped cover from [[lem-na-lipschitz-domain-finite-star-shaped-cover]], with measurable partition $E_i$ and normalized tree-edge bumps $\psi_e$. For every $q\in L^2_0(D)$ there are $q_i\in L^2_0(U_i)$, depending linearly on $q$, whose zero extensions satisfy $q=\sum_iq_i$ and
$$\|q_i\|_{L^2(U_i)}\le D_i\|q\|_{L^2(D)},\qquad D_i=1+|D|^{1/2}\sum_{e\text{ incident to }i}\|\psi_e\|_2.$$

## Facts & Assumptions

**Given:** The finite cover, its spanning tree and unit-integral edge bumps; $q\in L^2(D)$ with zero integral.

[F1] The cover has measurable disjoint $E_i\subset U_i$ partitioning $D$ and a connected intersection graph with a spanning tree; each edge bump is supported in the overlap and has integral one. ([[lem-na-lipschitz-domain-finite-star-shaped-cover]])

[F2] $\|q\|_{L^1(D)}\le |D|^{1/2}\|q\|_{L^2(D)}$. ([[thm-holder-inequality-for-integrals]])

## Proof

1.1 Root the finite spanning tree. Set $g_i=\mathbf1_{E_i}q$, $m_i=\int_Dg_i$, and let $M_i$ be the sum of $m_j$ over the subtree rooted at $i$. For a nonroot vertex $i$ with parent-edge bump $\psi_i$, set $q_i=g_i+\sum_{j\text{ child of }i}M_j\psi_j-M_i\psi_i$; at the root omit the final term. Every summand is supported in $U_i$ by [F1]. [given, F1, construct]

2.1 Since each bump integrates to one, a nonroot patch has integral $m_i+\sum_jM_j-M_i=0$ by the subtree identity $M_i=m_i+\sum_jM_j$. At the root, the integral is $m_{\rm root}+\sum_jM_j=M_{\rm root}=\sum_i m_i=\int_Dq=0$. [given, algebra, step 1.1]

2.2 In the sum of all $q_i$, every tree-edge term $-M_i\psi_i$ at a child cancels the $+M_i\psi_i$ term at its parent, leaving $\sum_i g_i=q$ almost everywhere because the $E_i$ partition $D$. All coefficients and operations are linear in $q$. [F1, algebra, step 1.1]

3.1 For every subtree, $|M_i|=|\int_{\cup_{j\text{ in subtree }i}E_j}q|\le\|q\|_1\le|D|^{1/2}\|q\|_2$ by [F2], and $\|g_i\|_2\le\|q\|_2$. The triangle inequality applied to the definition in step 1.1 gives $\|q_i\|_2\le\|q\|_2+|D|^{1/2}\|q\|_2\sum_{e\text{ incident to }i}\|\psi_e\|_2=D_i\|q\|_2$. [F2, algebra, step 1.1] ∎
