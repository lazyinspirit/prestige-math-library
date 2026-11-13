---
title: Degree control implies two-sided expansion — Proposition 3.2
status: draft
research_item: prop-expander-sync-prop-3-2
dependency_level: 5
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 18–19, Proposition 3.2 and proof
      statement: If the centered adjacency norm is at most alpha times the reference
        degree and the minimum and maximum degrees satisfy the displayed bounds,
        then the graph is a two-sided expander with the indicated parameters.
      hypotheses: A graph on n vertices, the stated centered adjacency norm bound, and
        the stated minimum and maximum degree bounds.
      reading_limits: The proposition and proof were inspected in the supplied article
        text. This reference attributes the article claim; the argument below
        uses the declared mathematical suppliers.
---

PDF p. 18: ` Proposition 3.2 `; PDF p. 19: ` Proposition 3.2 and proof `

## Prerequisites

- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)


## Statement

Let $G=(V,E)$ be a finite undirected graph with $n=|V|>0$, allowing self-loops and counting a loop once in the degree. Let $A$ be its adjacency matrix, $D$ its diagonal degree matrix, $L=D-A$, $I$ the identity, and $J$ the all-ones matrix. For real parameters $d^*,\alpha,c^-,c^+$ put $\Delta_A=A-(d^*/n)J$ and $\Delta_L=L-d^*I+(d^*/n)J$. Write $d_{\min}(G)$ and $d_{\max}(G)$ for the minimum and maximum vertex degrees, and use the induced operator norm and Loewner order on the complex vertex space.

If $\|\Delta_A\|\le\alpha d^*$ and $(1+c^-+\alpha)d^*\le d_{\min}(G)\le d_{\max}(G)\le(1+c^+-\alpha)d^*$, then $G$ is an $(n,d^*,\alpha,c^-,c^+)$-expander: it satisfies the stated norm bound and $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$.

## Statement references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)

[def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)

[def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)

## Facts & Assumptions

[F1] The degree matrix is diagonal with entries $D_{xx}=d(x)$, and $d_{\min}(G)\le d(x)\le d_{\max}(G)$ for every vertex. The adjacency matrix is real symmetric ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F2] The centered matrices are real symmetric and obey $\Delta_L=(D-d^*I)-\Delta_A$ ([def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)).

[F3] For real symmetric $B$ and $b\ge0$, $\|B\|\le b$ implies $-bI\preceq B\preceq bI$; Loewner inequalities can be added ([prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)). The order is defined by nonnegative quadratic forms ([def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)).

[F4] A graph is an $(n,d^*,\alpha,c^-,c^+)$-expander exactly when $\|\Delta_A\|\le\alpha d^*$ and $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$ ([def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)).

## Proof

**Given:** The graph, real parameters, norm bound and degree bounds in the statement.

**Goal:** Establish both defining inequalities of the two-sided expander.

1.1 Put $b=\alpha d^*$. The operator norm is nonnegative, so the given bound implies $b\ge0$. By [F1] and the given degree bounds, every diagonal entry of $D-((1+c^-)d^*+b)I$ and of $((1+c^+)d^*-b)I-D$ is nonnegative. Their quadratic forms are sums of these entries times $|f(x)|^2$, so the definition of order in [F3] gives $((1+c^-)d^*+b)I\preceq D\preceq((1+c^+)d^*-b)I$. [given, F1, F3, algebra]

2.1 By [F2], $\Delta_A$ is real symmetric. The norm bound and [F3] therefore give $-bI\preceq\Delta_A\preceq bI$. Adding these inequalities to the two bounds in step 1.1 yields $(1+c^-)d^*I\preceq D-d^*I-\Delta_A+d^*I\preceq(1+c^+)d^*I$. Subtracting $d^*I$ throughout and using [F2] gives $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$. Together with the given norm bound, [F4] proves the asserted expander property. [given, F2, F3, F4, step 1.1, algebra] ∎

## Source notes

Proposition 3.2 and its degree-to-order argument are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 18–19. The proof above derives the claim from the stated suppliers.
