---
title: Regular spectral characterization and notation convention
status: published
research_item: prop-expander-sync-regular-spectrum
dependency_level: 4
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 7, continuation of Definition 1.3 and footnote 6
      statement: For a d*-regular graph, the adjacency-expander condition is
        equivalent to the bound on all adjacency eigenvalues except the first.
        The footnote records the (n,d,lambda)-graph naming convention for
        d-regular (n,d,lambda d)-expanders.
      hypotheses: A finite d*-regular graph under the article's adjacency and
        eigenvalue conventions.
      reading_limits: The continuation of Definition 1.3 and footnote 6 were inspected
        in the supplied article text. This reference attributes the claim and
        terminology; the proof below uses the declared mathematical suppliers.
        The underlying literature for the naming convention was not
        independently surveyed.
---

PDF p. 7: ` Definition 1.3 continuation; footnote 6 `

## Prerequisites

- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)


## Statement

Let $G=(V,E)$ be a finite undirected $d^*$-regular graph with $n=|V|\ge1$, binary symmetric adjacency matrix $A$, and possible self-loops counted once in the degree. Let $\alpha\in\mathbb R$. List the eigenvalues with multiplicity in nonincreasing order as $\lambda_1(A)\ge\cdots\ge\lambda_n(A)$. For $n\ge2$, $G$ is an $(n,d^*,\alpha)$-expander if and only if $\max_{i\ne1}|\lambda_i(A)|\le\alpha d^*$. For $n=1$, the same equivalence holds if the maximum over the empty index set is understood as $0$.

The article records the convention that $d$-regular $(n,d,\lambda d)$-expanders are commonly called $(n,d,\lambda)$-graphs.

## Facts & Assumptions

**Given:** The graph and parameters in the statement.

**Goal:** Establish the spectral equivalence, including the stated empty-index convention.

[F1] The graph notation defines degree as the adjacency row sum, counts a loop once, and lists the real adjacency eigenvalues with multiplicity in nonincreasing order ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F2] The $(n,d^*,\alpha)$-expander condition is $\|A-(d^*/n)J\|\le\alpha d^*$, where $J$ is the all-ones matrix and the norm is the Euclidean operator norm ([def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)).

[F3] For a real symmetric nonnegative matrix with constant positive row sum $d^*$, the norm of $A-(d^*/n)J$ equals the largest absolute eigenvalue on the orthogonal complement of the constant vector; for $n=1$ that norm is zero. The eigenvalues on that complement are counted with multiplicity ([prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)).

## Proof

1.1 The row sums of $A$ are $d^*$, so $A\mathbf1=d^*\mathbf1$. Since $A$ is nonnegative, if $Av=\lambda v$ and $|v_x|$ is maximal among the coordinates of a nonzero eigenvector, then $|\lambda||v_x|\le\sum_y A_{xy}|v_y|\le d^*|v_x|$. Thus every eigenvalue has absolute value at most $d^*$, and the eigenvalue belonging to $\mathbf1$ can be placed first in the nonincreasing list. Any additional copies of $d^*$ remain in the list after that first copy. [F1, algebra]

2.1 If $d^*>0$ and $n\ge2$, [F3] gives $\|A-(d^*/n)J\|=\max_{i\ne1}|\lambda_i(A)|$: the constant eigenvector accounts for one occurrence of $d^*$, and all remaining eigenvalues, including repeated copies of $d^*$, occur on its orthogonal complement. If $d^*>0$ and $n=1$, [F3] gives norm zero, agreeing with the stated empty-index convention. [F3, step 1.1]

3.1 If $d^*=0$, nonnegativity and zero row sums force every entry of $A$ to be zero. Both the centered norm and every adjacency eigenvalue are therefore zero, including the stipulated empty maximum when $n=1$. In all cases the centered norm equals the stated maximum; substituting this equality into [F2] proves the equivalence. [F1, F2, step 2.1, algebra] ∎

## Source notes

The article attributes the convention that $d$-regular $(n,d,\lambda d)$-expanders are commonly called $(n,d,\lambda)$-graphs to usage in the literature. This is a notation report, not a premise of the proof.
