---
id: thm-loglog-erdos-hajnal-bound
kind: theorem
title: "Every $H$-free graph has a homogeneous set of size at least $2^{c\\sqrt{\\log_2 n\\,\\log_2\\log_2 n}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-loglog-quantitative-induced-density-bound,
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
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Matija Bucić, Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. I. A loglog step towards Erdős-Hajnal, Theorem 1.3"
      url: "https://arxiv.org/html/2301.10147"
---

## Statement

Let $H$ be a finite graph. Then there exists a constant $c_H>0$ such that every
nonnull finite $H$-free graph $G$ with $n:=|V(G)|\ge2$ satisfies
$$\operatorname{hom}(G)\ge 2^{c_H\sqrt{\log_2 n\,\log_2\log_2 n}}.$$

## Facts & Assumptions

**Given:** A finite graph $H$, a nonnull finite $H$-free graph $G$, and $n:=|V(G)|\ge2$.

[L1] The homogeneous number is $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$ ([[def-homogeneous-set-and-homogeneous-number]]).

[L2] For nonempty $H$, the proved quantitative induced-density theorem supplies $C_H>0$ such that every $H$-free $G$ and every $0<x<1/2$ have a nonempty $S\subseteq V(G)$ with $|S|\ge 2^{-C_H(\log_2(1/x))^2/\log_2\log_2(1/x)}n$ and at most $x\binom{|S|}{2}$ edges in $G[S]$ or $\overline{G}[S]$ ([[thm-loglog-quantitative-induced-density-bound]]).

[L9] A graph is $H$-free if it has no induced copy of $H$ ([[def-h-free-and-family-free-graph]]).

[L3] If a nonempty vertex set $X$ satisfies $d_G(X,X)\le c$, then some $X'\subseteq X$ has $|X'|\ge |X|/2$ and is $4c$-sparse ([[lem-a-weakly-sparse-set-has-a-large-sparse-subset]]).

[L4] A nonempty set $X$ is $c$-sparse exactly when every vertex of $G[X]$ has degree at most $c|X|$ ([[lem-sparsity-depends-only-on-the-induced-subgraph]]).

[L5] Every nonnull finite graph $F$ satisfies $\chi(F)\le\Delta(F)+1$ ([[lem-greedy-colouring-bound]]).

[L6] Every finite graph $F$ satisfies $|V(F)|\le\chi(F)\alpha(F)$ ([[thm-clique-independence-chromatic-bounds]]).

[L7] A vertex set is a clique in $G$ if and only if it is a stable set in $\overline G$ ([[lem-complement-swaps-cliques-and-stable-sets]]).

[L8] For nonempty $X$, the self-density is $d_G(X,X)=2|E(G[X])|/|X|^2$ ([[def-edge-density-between-vertex-sets]]).

## Proof

**Proof technique:** direct.

1.1 If $H$ is null, every graph has the empty induced copy, so the stated $H$-free case is vacuous. Hence assume $H$ nonempty and choose $C_H>0$ from [L2]. Every graph on at least two vertices has an adjacent or nonadjacent pair, so $\operatorname{hom}(G)\ge2$; this handles finitely many small $n$ after shrinking the final positive constant (and the target is $1$ at $n=2$). For the large-$n$ argument assume $L:=\log_2 n\ge4$. Set $\beta:=1/(4\sqrt{C_H})$ and $x:=2^{-\beta\sqrt{L\log_2 L}}$. Then $0<x<1/2$ once $n$ is sufficiently large. [L1, L2, L9, choose]

2.1 For large enough $L$, the inequality $\beta\sqrt{L\log_2 L}\ge \sqrt L$ holds, so $\log_2\log_2(1/x)=\log_2(\beta\sqrt{L\log_2 L})\ge \tfrac12\log_2 L$. Therefore $C_H(\log_2(1/x))^2/\log_2\log_2(1/x)\le 2C_H\beta^2L=L/8$. Using [L2], obtain $S\subseteq V(G)$ with $|S|\ge 2^{-L/8}n=2^{7L/8}\ge \sqrt n$, and one of $G[S]$ and $\overline G[S]$ has at most $x\binom{|S|}{2}$ edges. For that chosen graph $F$ on vertex set $S$, [L8] gives $d_F(S,S)\le 2x\binom{|S|}{2}/|S|^2=x(|S|-1)/|S|\le x$. [step 1.1, L2, L8, algebra]

3.1 If $F=G[S]$, then [L3] gives $X\subseteq S$ with $|X|\ge|S|/2$ and $X$ $4x$-sparse in $G$. By [L4], [L5], and [L6], $\alpha(G[X])\ge |X|/(4x|X|+1)$. [step 2.1, L3, L4, L5, L6]

3.2 If $F=\overline G[S]$, then the same argument inside the complement produces a stable set of $\overline G[X]$ of size at least $|X|/(4x|X|+1)$ for some $X\subseteq S$ with $|X|\ge|S|/2$, and [L7] turns it into a clique of $G[X]$. [step 2.1, L3, L4, L5, L6, L7]

4.1 Steps 3.1 and 3.2 show that $G$ has a homogeneous set $Y$ with $|Y|\ge |X|/(4x|X|+1)$ for some $X\subseteq S$ satisfying $|X|\ge|S|/2\ge\sqrt n/2$. [step 3.1, step 3.2, step 2.1, L1]

5.1 Because $x\sqrt n=2^{L/2-\beta\sqrt{L\log_2 L}}$, choose a threshold $N_H\ge2$ so that $x\sqrt n\ge1$ whenever $n\ge N_H$. For those $n$, step 4.1 gives $4x|X|\ge2$, hence $4x|X|+1\le8x|X|$, and therefore $|Y|\ge 1/(8x)=2^{\beta\sqrt{L\log_2 L}-3}$. [step 4.1, step 1.1, choose, algebra]

6.1 Set $c_H:=\beta/2$. For all sufficiently large $n$, the inequality $\beta\sqrt{L\log_2 L}-3\ge c_H\sqrt{L\log_2 L}$ holds, so step 5.1 gives $|Y|\ge 2^{c_H\sqrt{L\log_2 L}}$. For each of the finitely many smaller integers $n\ge3$, the pair argument of step 1.1 gives $\operatorname{hom}(G)\ge2$; shrink $c_H>0$ so that $2^{c_H\sqrt{\log_2 n\,\log_2\log_2 n}}\le2$ for all of them. At $n=2$ the displayed target is $1$. [step 1.1, step 5.1, L1, choose, algebra]

7.1 Hence every nonnull finite $H$-free graph $G$ with $|V(G)|=n\ge2$ satisfies $\operatorname{hom}(G)\ge 2^{c_H\sqrt{\log_2 n\,\log_2\log_2 n}}$. [step 6.1, L1] ∎
