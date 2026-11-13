---
title: Total incident edge bounds — Lemma 3.6
status: draft
research_item: lem-expander-sync-lem-3-6
dependency_level: 6
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 20, Lemma 3.6 and following prose
      statement: For an $(n,d^*,\alpha,c^-,c^+)$-expander and $X\subseteq V$ of
        density $\rho=|X|/n$, the total incident edge count satisfies the
        displayed two-sided bound; the following prose gives
        $d_{\max}(G)\le(1+c^++\alpha)d^*$.
      hypotheses: The graph is an $(n,d^*,\alpha,c^-,c^+)$-expander under the
        article's graph and spectral conventions, and $X$ is a subset of its
        vertex set.
      reading_limits: The extracted article text at Lemma 3.6 and the immediately
        following prose was inspected. This citation attributes the statement
        and method; the proof below uses the declared mathematical suppliers.
---

PDF p. 20: ` Lemma 3.6 and following prose `

## Prerequisites

- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-edge-count](item-def-expander-sync-edge-count)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [lem-expander-sync-lem-3-3](item-lem-expander-sync-lem-3-3)
- [lem-expander-sync-lem-3-4](item-lem-expander-sync-lem-3-4)
- [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule)


## Statement

Let $G=(V,E)$ be an $(n,d^*,\alpha,c^-,c^+)$-expander, and let $X\subseteq V$ have density $\rho=|X|/n$. Here $n=|V|>0$, $X^c=V\setminus X$, and $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{xy}$ counts ordered adjacency entries, including a loop once. Then

$$(1+c^-(1-\rho)-\alpha)d^*|X|\le e(X,V)\le(1+c^+(1-\rho)+\alpha)d^*|X|.$$

In particular, if $d_{\max}(G)=\max_{x\in V}\sum_{y\in V}A_{xy}$, then $d_{\max}(G)\le(1+c^++\alpha)d^*$.

## Facts & Assumptions

[F1] The two-sided expander has a nonempty finite vertex set, is also an $(n,d^*,\alpha)$-expander, and satisfies $\Delta_L\preceq c^+d^*I$, where $\Delta_L=L-d^*I+(d^*/n)J$ and $L=D-A$ ([def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander), [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)).

[F2] The degree is the row sum of $A$, $D$ is the diagonal degree matrix, and $J$ has all entries equal to one; $d_{\max}$ is the maximum degree ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)). The ordered edge count is the stated finite sum ([def-expander-sync-edge-count](item-def-expander-sync-edge-count)).

[F3] For Hermitian matrices, $B\preceq C$ means $f^*(C-B)f\ge0$ for every complex vector $f$ ([def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)).

[F4] The internal-edge bound gives $-\alpha d^*|X|\le e(X,X)-(d^*/n)|X|^2\le\alpha d^*|X|$ ([lem-expander-sync-lem-3-3](item-lem-expander-sync-lem-3-3)).

[F5] The cut bound gives $c^-(d^*/n)|X||X^c|\le e(X,X^c)-(d^*/n)|X||X^c|\le c^+(d^*/n)|X||X^c|$ ([lem-expander-sync-lem-3-4](item-lem-expander-sync-lem-3-4)).

[F6] For disjoint finite sets, cardinality is additive and a finite real-valued sum over their union splits into the sums over the two sets ([math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule), clauses 1 and 3).

## Proof

**Given:** An $(n,d^*,\alpha,c^-,c^+)$-expander $G$ and $X\subseteq V$.

**Goal:** Prove the two incident-edge bounds and the maximum-degree consequence.

1.1 The disjoint partition $V=X\cup X^c$, the finite-sum definition, and [F6] give $e(X,V)=e(X,X)+e(X,X^c)$. Add the respective lower bounds in [F4] and [F5], and then add the respective upper bounds. By [F6], $|X|+|X^c|=n$; hence $|X^c|/n=1-\rho$, and the two sums simplify to the two bounds in the statement. This calculation also covers $X=\varnothing$ and $X=V$. [F1, F2, F4, F5, F6, algebra]

1.2 Let $\mathbf1$ be the vector of ones. The row-sum definition of $D$ gives $L\mathbf1=0$, while $J\mathbf1=n\mathbf1$; hence $\Delta_L\mathbf1=0$. Applying $\Delta_L\preceq c^+d^*I$ to $\mathbf1$ yields $0\le c^+d^*n$, so $c^+d^*\ge0$ because $n>0$. [F1, F2, F3, algebra]

2.1 For any $x\in V$, take $X=\{x\}$ in step 1.1. Then $e(X,V)=d(x)$ and $\rho=1/n$, so $d(x)\le(1+c^++\alpha)d^*-(c^+d^*)/n\le(1+c^++\alpha)d^*$. Taking the maximum over the nonempty finite set $V$ proves the consequence. [F1, F2, step 1.1, step 1.2, algebra] ∎

## Source notes

The statement and the addition of the internal and cut estimates are attributed to Lemma 3.6 and the following prose of [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf). The proof uses the declared mathematical suppliers.
