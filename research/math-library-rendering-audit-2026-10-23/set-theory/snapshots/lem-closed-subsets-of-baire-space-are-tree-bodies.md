---
id: lem-closed-subsets-of-baire-space-are-tree-bodies
kind: lemma
title: "Closed subsets of Baire space are tree bodies"
status: published
origin: pipeline
deps: ["def-baire-sequence-space", "def-trees-and-bodies-on-discrete-alphabets"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lemma 1.14(ii), Definition 1.15"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZF, $F\subseteq\mathcal N=\mathbb N^{\mathbb N}$ is closed if and only if $F=[T]$ for a tree $T$ on $\mathbb N$. When $F$ is closed, its prefix tree

$$T_F=\{s\in\mathbb N^{<\omega}:(\exists y\in F)\ s\subseteq y\}$$

has body $F$. If $F$ is nonempty, $T_F$ is nonempty and pruned; if $F$ is empty, $T_F$ is empty.

## Facts & Assumptions

[F1] Baire cylinders $N_s$ form a basis, including $N_\varnothing=\mathcal N$; see [[def-baire-sequence-space]].

[F2] A tree is prefix closed, and $x\in[T]$ means every finite prefix of $x$ lies in $T$; see [[def-trees-and-bodies-on-discrete-alphabets]].

## Proof

**Given:** A subset $F\subseteq\mathcal N$ and the definitions above.

1.1 For any tree $T$ and $x\notin[T]$, F2 gives $n$ with $x\upharpoonright n\notin T$. If $y\in N_{x\upharpoonright n}$, it has that same excluded prefix, so $y\notin[T]$. Thus each point of the complement has a basic neighbourhood in the complement, which proves $[T]$ closed. This includes $n=0$ and $T=\varnothing$. [F1, F2]

1.2 Suppose $F$ is closed. If $s\in T_F$, one witness $y\in F$ extending $s$ also extends every restriction of $s$. Thus $T_F$ is a tree. Each $y\in F$ has all its prefixes in $T_F$, so $F\subseteq[T_F]$. [given, F2]

2.1 Let $x\in[T_F]$. If $x\notin F$, closedness and F1 give a cylinder $N_{x\upharpoonright n}$ disjoint from $F$. But $x\upharpoonright n\in T_F$ has an extending witness $y\in F$, a contradiction to this disjointness. Therefore $[T_F]\subseteq F$, and equality follows. [given, F1, step 1.2]

3.1 If $F=\varnothing$, no prefix has a witness and $T_F=\varnothing$. If $F\ne\varnothing$, its empty prefix belongs to $T_F$. For each individual $s\in T_F$, a witness $y$ extends it to $y\upharpoonright(|s|+1)\in T_F$, proving pruning. These are separate existential deductions at each node, not a simultaneous choice of witnesses. Together with the closed-body implication this establishes both directions and all additional claims. QED. [F2, step 1.1, step 2.1]
