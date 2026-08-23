---
id: lem-disjointification-of-an-algebra-cover
kind: lemma
title: "A countable algebra cover disjointifies inside the covered algebra set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-algebra-of-subsets]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., proof of Proposition 1.13(a)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Let $\mathcal A_0$ be an algebra on $X$, let $A\in\mathcal A_0$, and let $(A_k)_{k\in\mathbb N}$ be a sequence in $\mathcal A_0$ with $A\subseteq\bigcup_kA_k$. Then there are pairwise disjoint $B_k\in\mathcal A_0$ such that $A=\bigcup_kB_k$ and $B_k\subseteq A_k$ for every $k$. Equivalently: every countable algebra cover of an algebra set disjointifies inside that set into algebra members subordinate to the original cover.

## Facts & Assumptions

**Given:** The algebra $\mathcal A_0$, the covered set $A$, and the cover $(A_k)$ from the Statement.

[F1] An algebra of subsets of $X$ contains $\varnothing$ and is closed under complements and binary unions; consequently it is closed under finite unions, finite intersections, and differences. ([[def-algebra-of-subsets]])

## Proof

**Proof technique:** constructive.

1.1 Define $B_k:=A\cap\left(A_k\setminus\bigcup_{j<k}A_j\right)$, using the empty preceding union when $k=0$; finite unions, differences, and intersections keep every $B_k$ in $\mathcal A_0$, and $B_k\subseteq A_k$. [F1, construct]

2.1 Distinct pieces are disjoint because a point in $B_k$ belongs to no earlier $A_j$; every $x\in A$ lies in some $A_k$, and at its least such index it belongs to $B_k$, so $A=\bigcup_kB_k$. [step 1.1, algebra, discharge-construct] ∎
