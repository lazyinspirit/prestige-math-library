---
title: Disjoint-set lower mixing needs additional hypotheses
status: published
research_item: rem-expander-sync-disjoint-mixing-limitation
dependency_level: 5
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF page 20, paragraph immediately before Lemma 3.7
      statement: The article observes that a lower bound of the form
        $e(X,Y)\geq\varepsilon(d^*/n)|X||Y|$ for disjoint sets requires
        additional assumptions on the sets.
      hypotheses: The discussion concerns disjoint vertex subsets of graphs satisfying
        the article's spectral-expander hypotheses and a positive lower-bound
        coefficient.
      reading_limits: The cited paragraph and the immediately following lemma were
        inspected in the supplied article text. The citation attributes the
        observation; the four-cycle verification below is local.
---

PDF p. 20: ` Paragraph before Lemma 3.7 `

## Prerequisites

- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-edge-count](item-def-expander-sync-edge-count)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)


## Statement

A positive multiplicative lower estimate $e(X,Y)\geq\varepsilon(d^*/n)|X||Y|$ need not hold for every pair of disjoint vertex sets in a two-sided spectral expander. Indeed, the four-cycle is a $(4,2,1,0,1)$-expander and has two disjoint singleton sets $X,Y$ for which $e(X,Y)=0$. Thus every $\varepsilon>0$ fails for these sets. Here the four-cycle has vertices $1,2,3,4$ and edges $\{1,2\},\{2,3\},\{3,4\},\{4,1\}$; its two-sided parameters mean the centered adjacency norm is at most $\alpha d^*$ and the centered Laplacian lies between $c^-d^*I$ and $c^+d^*I$ in quadratic-form order.

## Statement references

[def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)

[def-expander-sync-edge-count](item-def-expander-sync-edge-count)

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

## Facts & Assumptions

[F1] For a graph with adjacency matrix $A$, degree matrix $D$, Laplacian $L=D-A$, and all-ones matrix $J$, the centered matrices are $\Delta_A=A-(d^*/n)J$ and $\Delta_L=L-d^*I+(d^*/n)J$. The expander conditions are the norm and quadratic-form inequalities stated above ([def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander), [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F2] The ordered edge count is $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{xy}$ ([def-expander-sync-edge-count](item-def-expander-sync-edge-count)).

[F3] Cauchy–Schwarz bounds $|v^*z|$ by $\|v\|_2\|z\|_2$, and the operator norm is the maximum of $\|Bz\|_2$ over unit vectors $z$ ([math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces), [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)).

## Proof

**Given:** The four-cycle and its vertex ordering as in the statement.

**Goal:** Verify the expander parameters and exhibit disjoint sets violating the proposed lower estimate.

1.1 Put $v=(1,-1,1,-1)^T$. Direct inspection of the edges gives $A=(J-vv^T)/2$ and $D=2I$. With $n=4$ and $d^*=2$, the centered-matrix formulas give $\Delta_A=-vv^T/2$ and $\Delta_L=vv^T/2$. Also $v^*v=4$. [given, F1, algebra]

2.1 For every complex vector $z$, Cauchy–Schwarz gives $0\leq z^*\Delta_Lz=|v^*z|^2/2\leq 2\|z\|_2^2$, so $0\preceq\Delta_L\preceq2I$. Likewise $\|\Delta_Az\|_2=\|v\|_2|v^*z|/2\leq2\|z\|_2$, giving $\|\Delta_A\|\leq2$. These are the required inequalities for $(n,d^*,\alpha,c^-,c^+)=(4,2,1,0,1)$. [F1, F3, step 1.1]

3.1 Take $X=\{1\}$ and $Y=\{3\}$. They are disjoint and their vertices are not adjacent, so $e(X,Y)=A_{13}=0$. For every $\varepsilon>0$, the proposed right-hand side equals $\varepsilon(2/4)|X||Y|=\varepsilon/2>0$. Hence the estimate fails for these sets, despite the verified expander conditions. [F2, step 2.1, algebra] ∎

## Source notes

The observation that additional set assumptions are needed is attributed to the paragraph immediately before Lemma 3.7 in [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf). The example and its verification above are local.
