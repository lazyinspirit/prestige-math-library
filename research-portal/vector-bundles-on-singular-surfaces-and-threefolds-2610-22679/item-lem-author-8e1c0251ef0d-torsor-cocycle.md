---
title: Local sections of a torsor give a cocycle
status: draft
research_item: lem-author-8e1c0251ef0d-torsor-cocycle
dependency_level: 6
---

PDF p. 4: Weight one units and Picard identification

## Prerequisites

- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

## Statement
Let $G$ be a sheaf of abelian groups on a site with fibre products. A $G$-torsor is a sheaf of sets with a $G$-action which is locally nonempty and simply transitive on sections whenever nonempty. If $s_i$ are sections over a covering $\{U_i\to U\}$ and $s_j=g_{ij}s_i$ on $U_i\times_U U_j$, then $g_{ij}g_{jk}=g_{ik}$ on triple fibre products. Replacing $s_i$ by $s'_i=h_i s_i$ replaces $g_{ij}$ by $g'_{ij}=h_jg_{ij}h_i^{-1}$.

## Facts & Assumptions

**Given:** A $G$-torsor and the displayed local sections.

**Goal:** Prove the cocycle and change-of-section formulas.

[F1] Restrictions and fibre products are those of the site in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification).

## Proof

1.1 Simple transitivity gives a unique $g_{ij}$ on each double fibre product. On a triple fibre product, $s_k=g_{jk}g_{ij}s_i$ and also $s_k=g_{ik}s_i$; uniqueness and commutativity give the cocycle equation. [F1, given]

2.1 Substitution gives $s'_j=h_jg_{ij}h_i^{-1}s'_i$. Uniqueness gives the stated replacement formula. [step 1.1, algebra] ∎
