---
id: thm-classical-erdos-hajnal-bound
kind: theorem
title: "Every $H$-free graph has a homogeneous set of size at least $2^{c\\sqrt{\\log_2 n}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-fox-sudakov-quantitative-induced-density-bound,
       def-h-free-and-family-free-graph,
       def-homogeneous-set-and-homogeneous-number,
       lem-a-weakly-sparse-set-has-a-large-sparse-subset,
       lem-sparsity-depends-only-on-the-induced-subgraph,
       lem-greedy-colouring-bound,
       thm-clique-independence-chromatic-bounds,
       lem-complement-swaps-cliques-and-stable-sets,
       def-logarithm-to-a-base,
       def-edge-density-between-vertex-sets]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture: A Survey, sec. 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Matija Bucić, Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. I. A loglog step towards Erdős-Hajnal, Theorem 1.2"
      url: "https://arxiv.org/html/2301.10147"
---

## Statement

Let $H$ be a finite graph. Then there exists a constant $c_H>0$ such that every
nonnull finite $H$-free graph $G$ with $n:=|V(G)|\ge2$ satisfies
$$\operatorname{hom}(G)\ge 2^{c_H\sqrt{\log_2 n}}.$$
Equivalently, $G$ has a clique or a stable set of size at least
$2^{c_H\sqrt{\log_2 n}}$.

## Facts & Assumptions

**Given:** A finite graph $H$, a nonnull finite $H$-free graph $G$, and $n:=|V(G)|\ge2$.

[L1] The homogeneous number is $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$ ([[def-homogeneous-set-and-homogeneous-number]]).

[L2] For nonempty $H$, the proved quantitative induced-density corollary supplies $C_H>0$ such that every $H$-free $G$ and every $0<x<1/2$ have a nonempty $S\subseteq V(G)$ with $|S|\ge 2^{-C_H(\log_2(1/x))^2}n$ and at most $x\binom{|S|}{2}$ edges in $G[S]$ or $\overline{G}[S]$ ([[cor-fox-sudakov-quantitative-induced-density-bound]]).

[L9] A graph is $H$-free if it has no induced copy of $H$ ([[def-h-free-and-family-free-graph]]).

[L3] If a nonempty vertex set $X$ satisfies $d_G(X,X)\le c$, then some $X'\subseteq X$ has $|X'|\ge |X|/2$ and is $4c$-sparse ([[lem-a-weakly-sparse-set-has-a-large-sparse-subset]]).

[L4] A nonempty set $X$ is $c$-sparse exactly when every vertex of $G[X]$ has degree at most $c|X|$ ([[lem-sparsity-depends-only-on-the-induced-subgraph]]).

[L5] Every nonnull finite graph $F$ satisfies $\chi(F)\le\Delta(F)+1$ ([[lem-greedy-colouring-bound]]).

[L6] Every finite graph $F$ satisfies $|V(F)|\le\chi(F)\alpha(F)$ ([[thm-clique-independence-chromatic-bounds]]).

[L7] A vertex set is a clique in $G$ if and only if it is a stable set in $\overline G$ ([[lem-complement-swaps-cliques-and-stable-sets]]).

[L8] For nonempty $X$, the self-density is $d_G(X,X)=2|E(G[X])|/|X|^2$ ([[def-edge-density-between-vertex-sets]]).

## Proof

**Proof technique:** direct.

1.1 If $H$ is null, every graph has the empty induced copy, so no graph in the stated range is $H$-free and the assertion is vacuous. Hence assume $H$ is nonempty. By [L2], choose $C_H>0$. Write $L:=\log_2 n$ and set $x:=2^{-\sqrt{L/(2C_H)}}$. Choose $N_0$ so large that $L>2C_H$ whenever $n\ge N_0$. For these $n$ one has $0<x<1/2$, as required to apply [L2]. The finitely many smaller $n$ are handled after the large-$n$ argument. [L2, L9, choose]

2.1 For $n\ge N_0$, because $\log_2(1/x)=\sqrt{L/(2C_H)}$, [L2] gives a set $S\subseteq V(G)$ with $|S|\ge 2^{-C_H(\log_2(1/x))^2}n=2^{-L/2}n=\sqrt n$, and one of $G[S]$ and $\overline G[S]$ has at most $x\binom{|S|}{2}$ edges. For that chosen graph $F$ on vertex set $S$, [L8] gives $d_F(S,S)=2|E(F)|/|S|^2\le 2x\binom{|S|}{2}/|S|^2=x(|S|-1)/|S|\le x$. [step 1.1, L2, L8, algebra]

3.1 If $F=G[S]$, then [L3] gives $X\subseteq S$ with $|X|\ge|S|/2$ and $X$ $4x$-sparse in $G$. By [L4] every vertex of $G[X]$ has degree at most $4x|X|$, so [L5] gives $\chi(G[X])\le4x|X|+1$, and then [L6] yields $\alpha(G[X])\ge |X|/(4x|X|+1)$. [step 2.1, L3, L4, L5, L6]

3.2 If $F=\overline G[S]$, then [L3] gives $X\subseteq S$ with $|X|\ge|S|/2$ and $X$ $4x$-sparse in $\overline G$. Applying [L4], [L5], and [L6] inside the complement shows that $\overline G[X]$ has a stable set of size at least $|X|/(4x|X|+1)$, and [L7] turns that stable set into a clique of the same size in $G[X]$. [step 2.1, L3, L4, L5, L6, L7]

4.1 Steps 3.1 and 3.2 show that $G$ has a homogeneous set $Y$ with $|Y|\ge |X|/(4x|X|+1)$ for some $X\subseteq S$ satisfying $|X|\ge|S|/2\ge\sqrt n/2$. [step 3.1, step 3.2, step 2.1, L1]

5.1 Because $x\sqrt n=2^{L/2-\sqrt{L/(2C_H)}}$, choose $N_H\ge N_0$ so that $x\sqrt n\ge1$ whenever $n\ge N_H$. For such $n$, step 4.1 gives $4x|X|\ge 2$, hence $4x|X|+1\le 8x|X|$, so $|Y|\ge 1/(8x)=2^{\sqrt{L/(2C_H)}-3}$. [step 4.1, step 1.1, choose, algebra]

6.1 Set $c_H:=1/(4\sqrt{2C_H})$. Choose $N_H'\ge N_H$ so that $\sqrt{L/(2C_H)}-3\ge c_H\sqrt L$ whenever $n\ge N_H'$. Then step 5.1 gives $|Y|\ge 2^{c_H\sqrt L}$ for all $n\ge N_H'$. For the finitely many integers $2\le n<N_H'$, every graph on at least two vertices has either an adjacent pair or a nonadjacent pair, so $\operatorname{hom}(G)\ge2$. Shrink $c_H>0$ if necessary so that $2^{c_H\sqrt{\log_2 n}}\le2$ for each of these $n$. [step 5.1, L1, choose, algebra]

7.1 Therefore every nonnull finite $H$-free graph $G$ with $|V(G)|=n\ge2$ satisfies $\operatorname{hom}(G)\ge 2^{c_H\sqrt{\log_2 n}}$. [step 6.1, L1] ∎
