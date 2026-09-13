---
id: thm-ma-small-unions-of-meagre-sets
kind: theorem
title: MA makes unions of fewer than continuum many meagre sets meagre
status: draft
origin: pipeline
deps: [def-martins-axiom, def-nowhere-dense-meagre-and-residual-subsets, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Kunen, Set Theory, Martin's Axiom consequences", url: "https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf"}
---

## Statement

In ZFC+MA, the union of fewer than $2^{\aleph_0}$ meagre subsets of the real line is meagre. In particular every set of reals of cardinality below the continuum is meagre.

## Facts & Assumptions

**Given:** AC, MA, and $\{M_\alpha:\alpha<\kappa\}$ with $\kappa<\mathfrak c$.

[F1] [[def-nowhere-dense-meagre-and-residual-subsets]] gives nowhere-dense covers.

[F2] [[def-martins-axiom]] supplies filters for ccc coding orders.

## Proof

1.1 By AC choose increasing closed nowhere-dense covers $M_\alpha\subseteq\bigcup_nF_{\alpha n}$. Fix a countable base $(B_j)$ of rational intervals. A condition is $(m,F,w)$, where $m<\omega$, $F\subseteq\kappa$ is finite, and $w(n,j)$ for $n,j<m$ is a nonempty rational interval with closure inside $B_j$. A condition $(m',F',w')$ extends $(m,F,w)$ when $m'\ge m$, $F'\supseteq F$, it preserves old $w$, and **every newly assigned cell** $(n,j)\in[0,m')^2\setminus[0,m)^2$ has closure disjoint from $F_{\alpha n}$ for all $\alpha\in F$, the old side set. This includes the new columns of old rows. The relation is transitive: cells added at the first extension avoid the original side set, and cells added later avoid the larger intermediate side set. Finite unions of closed nowhere-dense sets leave the required subintervals in every $B_j$. [F1]

2.1 Conditions with the same $m,w$ are compatible: take the union of their finite side sets without adding a new row. There are only countably many finite rational arrays $w$, so the order is ccc. For each $\alpha$, the set requiring $\alpha\in F$ is dense. For every $r$, the set requiring $m>r$ is dense by filling the finitely many new cells inside the complements prescribed in step 1.1. These are only $\kappa+\aleph_0<\mathfrak c$ requirements, so MA supplies a filter $G$. [F2, step 1.1]

3.1 Coherence of the filter defines $I_{nj}=w(n,j)$ for every $n,j$. Put $V_n=\bigcup_j I_{nj}$ and $W_r=\bigcup_{n\ge r}V_n$. Each $V_n$, hence each $W_r$, is open dense because $I_{nj}\subseteq B_j$ exists for every basic interval. Fix $\alpha$ and a filter condition that first has $\alpha$ in its side set at length $m$. For every $n\ge m$ and every $j$, the cell $(n,j)$ is assigned only in an extension of that condition and its closure avoids $F_{\alpha n}$ by step 1.1, even if it is a new column of an earlier row. Thus $V_n\cap F_{\alpha n}=\varnothing$. If $x\in M_\alpha$, choose $k$ with $x\in F_{\alpha k}$; since the cover is increasing, $x\notin V_n$ for all $n\ge\max(m,k)$. Thus $x\notin W_{\max(m,k)}$ and $x\notin\bigcap_rW_r$. Therefore the union of the $M_\alpha$ is covered by the meagre set $\bigcup_r(\mathbb R\setminus W_r)$. Singletons are nowhere dense, proving the final clause. The simultaneous cover choice is the exact AC use; the defective published sigma-ideal proposition is not used. [F1, step 1.1, step 2.1] ∎
