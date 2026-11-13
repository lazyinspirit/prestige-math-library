---
title: Degree bounds from two-sided expansion — Lemma 3.1
status: draft
research_item: lem-expander-sync-lem-3-1
dependency_level: 5
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 18, Lemma 3.1
      statement: An $(n,d^*,\alpha,c^-,c^+)$-expander has degrees bounded below by
        $(1+c^-)d^*-d^*/n$ and above by $(1+c^+)d^*+1-d^*/n$.
      hypotheses: The graph satisfies the article's two-sided expander definition;
        adjacency entries are binary and a self-loop contributes once to degree.
      reading_limits: The supplied article text at Lemma 3.1 and its proof was
        inspected. This reference attributes the claim; the proof below uses the
        stated definitions and diagonal test.
---

PDF p. 18: ` Lemma 3.1 `

## Prerequisites

- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)


## Statement

If $G$ is an $(n,d^*,\alpha,c^-,c^+)$-expander, then $(1+c^-)d^*-d^*/n\le d_{\min}(G)\le d_{\max}(G)\le(1+c^+)d^*+1-d^*/n$.

Here the expander predicate, including its centered Laplacian inequalities, is as in [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander); degrees and their extrema use [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation). In particular, $n>0$, the adjacency matrix is binary, and a loop contributes once to its vertex's degree.

## Facts & Assumptions

[F1] For the expander, $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$, where $\Delta_L=L-d^*I+(d^*/n)J$ and $L=D-A$ ([def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)). The order is the quadratic-form order on Hermitian matrices ([def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)).

[F2] The graph has a nonempty finite vertex set $V$, $D_{xx}=d(x)$, $A_{xx}\in\{0,1\}$, and $d_{\min}(G)$ and $d_{\max}(G)$ are the minimum and maximum of the degrees ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F3] If a Hermitian matrix $B$ satisfies $aI\preceq B\preceq bI$, then $a\le B_{xx}\le b$ for every vertex $x$ ([prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)).

## Proof

**Given:** An $(n,d^*,\alpha,c^-,c^+)$-expander $G$.

**Goal:** Establish the stated chain of degree bounds.

1.1 The matrices in [F1] are real symmetric and hence Hermitian. Applying the diagonal test [F3] to the two inequalities in [F1] gives $c^-d^*\le(\Delta_L)_{xx}\le c^+d^*$ for each $x\in V$. Since $J_{xx}=I_{xx}=1$, [F1] and [F2] give $(\Delta_L)_{xx}=d(x)-A_{xx}-d^*+d^*/n$. Thus $(1+c^-)d^*-d^*/n+A_{xx}\le d(x)\le(1+c^+)d^*-d^*/n+A_{xx}$. [F1, F2, F3, algebra]

2.1 By [F2], $0\le A_{xx}\le1$, so every degree lies between $(1+c^-)d^*-d^*/n$ and $(1+c^+)d^*+1-d^*/n$. Taking the minimum and maximum over the nonempty finite set $V$ yields the outer bounds, while the minimum is at most the maximum. This proves the displayed chain. [F2, step 1.1, algebra] ∎

## Source notes

The statement is attributed to Lemma 3.1 of [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf); the argument above rests on the stated mathematical suppliers.
