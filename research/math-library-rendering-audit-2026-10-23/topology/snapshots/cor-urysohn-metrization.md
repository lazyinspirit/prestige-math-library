---
id: cor-urysohn-metrization
kind: corollary
title: "Under choice, every regular $T_1$ second-countable space is metrizable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-choice, thm-urysohn-lemma, lem-regularity-via-closed-neighbourhoods, def-second-countable-space, def-metrizable-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local defect repair; no independent judge
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Metrizable space"
      url: "https://encyclopediaofmath.org/wiki/Metrizable_space"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every regular $T_1$ second-countable space is metrizable.

## Facts & Assumptions

**Given:** A regular $T_1$ space with a countable basis $(B_n)_{n\in\mathbb N}$, and the Axiom of Choice.

[L1] In a regular space, $x\in O$ with $O$ open admits open $V$ with $x\in V\subseteq\overline V\subseteq O$. ([[lem-regularity-via-closed-neighbourhoods]])

[L2] In a normal space, under DC, disjoint closed sets admit a continuous $[0,1]$-valued separator. ([[thm-urysohn-lemma]])

[L3] AC selects the separators below and implies DC: choose one successor for each point of an entire relation and iterate that function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 First $X$ is normal. Given disjoint closed $A,B$, enumerate the basis members whose closures avoid $B$ as $(U_n)$ and those whose closures avoid $A$ as $(V_n)$, padding by empty sets if necessary. By [L1] and the basis property, the first family covers $A$ and the second covers $B$. Put $U=\bigcup_n(U_n\setminus\bigcup_{i\le n}\overline V_i)$ and $V=\bigcup_n(V_n\setminus\bigcup_{i\le n}\overline U_i)$. Each summand is open because only finitely many closed sets are removed. The sets contain $A,B$ respectively. They are disjoint: a point in the $n$th summand of $U$ and $m$th summand of $V$ would contradict the removal of $\overline V_m$ if $m\le n$, and of $\overline U_n$ if $n\le m$. This proves normality. [L1, given, construct]

2.1 For every pair $(i,j)$ with $\overline B_i\subseteq B_j$, [L2] gives a continuous $f_{ij}:X\to[0,1]$ equal to $1$ on $\overline B_i$ and $0$ on $X\setminus B_j$. Use AC to select all these functions, and list them as a sequence $(f_k)_{k\ge1}$, adding zero functions when necessary. For every point $x$ and open neighbourhood $O$, choose $B_j$ with $x\in B_j\subseteq O$, shrink inside $B_j$ using [L1], and choose $B_i$ containing $x$ inside that shrinking. Then $\overline B_i\subseteq B_j$, so one listed function is $1$ at $x$ and vanishes outside $O$. This also separates distinct points because $T_1$ makes $X\setminus\{y\}$ open. [L1, L2, L3, step 1.1, choose]

3.1 Define $d(x,y)=\sum_{k\ge1}2^{-k}|f_k(x)-f_k(y)|$. Each term is at most $2^{-k}$, so the sum converges. Symmetry and the triangle inequality follow termwise, and step 2.1 gives $d(x,y)>0$ for $x\ne y$. Thus $d$ is a metric (including the empty-space case). [step 2.1, construct, algebra]

4.1 For fixed $x$ and $\varepsilon>0$, choose $N$ with $\sum_{k>N}2^{-k}<\varepsilon/2$. Continuity of the first $N$ functions gives an original open neighbourhood $W$ of $x$ where their weighted differences from their values at $x$ sum to less than $\varepsilon/2$. Hence $W\subseteq B_d(x,\varepsilon)$. Conversely, for an original open $O$ containing $x$, take the index $k$ supplied by step 2.1. If $d(x,y)<2^{-k}$, then $f_k(y)>0$, so $y\in O$. Thus every original neighbourhood contains a metric ball and every metric ball contains an original neighbourhood at its centre; the topologies coincide. Hence $X$ is metrizable. [step 2.1, step 3.1, algebra] ∎
