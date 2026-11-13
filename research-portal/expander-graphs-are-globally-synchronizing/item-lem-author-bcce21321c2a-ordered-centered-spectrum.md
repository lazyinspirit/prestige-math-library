---
title: Ordered eigenvalues and the centered regular norm
status: draft
research_item: lem-author-bcce21321c2a-ordered-centered-spectrum
dependency_level: 2
---

## Prerequisites

- [prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)
- [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning)
- [math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)


## Statement

Let $A$ be the adjacency matrix of a labelled simple $d$-regular graph on $n\ge2$ vertices, with $d>0$. Order its real eigenvalues with multiplicity as $\lambda_1\ge\cdots\ge\lambda_n$, and let $J$ be the all-ones matrix. Then $\lambda_1=d$ and, with $\rho_0(A)=\|A-(d/n)J\|_{\mathrm{op}}$,

$$\rho_0(A)=\max_{2\le i\le n}|\lambda_i|=\max\{\lambda_2,|\lambda_n|\}.$$

Only one copy of the eigenvalue $d$ is removed; no connectedness or nonbipartiteness assumption is made. For any finite probability space $(\Omega,w)$ and any map $\omega\mapsto G(\omega)$ into labelled simple $d$-regular graphs on the same $n$ vertices, let $A(\omega)$ be the adjacency matrix of $G(\omega)$ and $\lambda_i(\omega)$ its eigenvalues in the order above. For every real $t$, the following subsets of $\Omega$ are equal events:

$$\{\omega\in\Omega:\rho_0(A(\omega))\ge t\}=\{\omega\in\Omega:\max\{\lambda_2(\omega),|\lambda_n(\omega)|\}\ge t\}.$$

## Facts & Assumptions

[F1] [prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum) gives $A\mathbf1=d\mathbf1$, the invariance of $\mathbf1^\perp$, and the identity between the centered norm and the maximum absolute value of all eigenvalues after removing the constant eigenvector.

[F2] [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) defines the finite labelled simple regular graph model.

[F3] [math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph) defines the adjacency matrix in a fixed vertex order: its entry is $1$ precisely for an edge and $0$ otherwise. For a simple graph it is real symmetric and has nonnegative entries.

[F4] [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event) defines a finite probability space $(\Omega,w)$ and makes every subset of $\Omega$ an event.

## Proof

**Given:** The matrix and ordered eigenvalues in the statement; for the event assertion, also the finite probability space and graph-valued map specified there.

**Goal:** Identify the ordered spectral maximum with the centered norm, and their threshold events.

1.1 By [F2] and [F3], $A$ is real symmetric with nonnegative entries and every row sum $d$, so [F1] applies. Choose a nonzero real eigenvector $x$ for any eigenvalue $\lambda$ and a coordinate $v$ maximizing $|x_v|$. The nonnegative adjacency entries and row sum $d$ imply $|\lambda||x_v|=|\sum_w A_{vw}x_w|\le d|x_v|$, whence $|\lambda|\le d$. Since the constant vector has eigenvalue $d$, the first ordered eigenvalue is $d$. Choose that constant vector first in the orthonormal eigenbasis from [F1]. The other eigenvalues, including every remaining copy of $d$, are exactly $\lambda_2,\ldots,\lambda_n$. [F1, F2, F3, given, algebra]

2.1 The largest absolute value of a decreasing finite real list occurs at an endpoint. If $\lambda_2\ge0$, that value is $\max\{\lambda_2,|\lambda_n|\}$. If $\lambda_2<0$, all remaining eigenvalues are negative and $|\lambda_n|\ge|\lambda_2|$, giving the same formula. Apply the norm identity in [F1] to this list to obtain the displayed equality for $\rho_0(A)$. [F1, step 1.1, algebra]

3.1 For each $\omega\in\Omega$, the graph $G(\omega)$ satisfies the same hypotheses, so step 2.1 gives $\rho_0(A(\omega))=\max\{\lambda_2(\omega),|\lambda_n(\omega)|\}$. Thus $\omega$ belongs to the left threshold subset exactly when it belongs to the right threshold subset, for every real $t$. Both subsets are events by [F4], proving the event equality. [F4, given, step 2.1, algebra] ∎
