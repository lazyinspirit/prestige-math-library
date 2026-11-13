---
title: Mean-zero projection of the regular phase vector
status: published
research_item: lem-author-73027818342b-regular-phasor-projection
dependency_level: 6
---

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)
- [def-expander-sync-h](item-def-expander-sync-h)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, with $n=|V|>0$, symmetric binary adjacency matrix $A$, and self-loops allowed and counted once in each row sum. Suppose every row sum is $d\ge0$, let $\alpha\ge0$, and assume $\|\Delta\|\le\alpha d$, where $\Delta=A-(d/n)J$ and $J$ is the all-ones matrix; the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of $\mathcal E_G(\theta)=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$. Choose representatives in $(-\pi,\pi]$ after common rotation so that $\rho_1\ge0$ is real, where $\rho_k=n^{-1}\sum_xe^{ik\theta_x}$. Put $X=\rho_1^2$, $r=|\rho_2|$, and $M=n^{-1}\sum_x H(\theta_x)$, where $H(t)=\sin^2|t|$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$.

For $f_x=e^{i\theta_x}$ and $g=f-\rho_1\mathbf1$, one has $\Delta f=\Delta g$, $\|g\|_2^2=n(1-X)$, and $\|\Delta f\|_2^2\le\alpha^2d^2n(1-X)$.

## Facts & Assumptions

[F1] A real symmetric matrix of positive order, with nonnegative entries and constant row sum $d>0$, has centered matrix zero on constants; the centered matrix has equal real and complex Euclidean operator norms ([prop-expander-prereq-regular-mean-zero-spectrum](item-prop-expander-prereq-regular-mean-zero-spectrum)).

[F10] Definition or convention used in the Statement: [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation).

[F11] Definition or convention used in the Statement: [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander).

[F12] Definition or convention used in the Statement: [def-expander-sync-states](item-def-expander-sync-states).

[F13] Definition or convention used in the Statement: [def-expander-sync-daido](item-def-expander-sync-daido).

[F14] Definition or convention used in the Statement: [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties).

[F15] Definition or convention used in the Statement: [def-expander-sync-h](item-def-expander-sync-h).

[F16] Definition or convention used in the Statement: [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices).

[F17] Definition or convention used in the Statement: [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order).

[F18] Definition or convention used in the Statement: [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus).

[F19] Definition or convention used in the Statement: [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice).

## Proof

**Given:** The graph, stable normalized state, parameters and notation in the Statement.

**Goal:** Establish all the asserted estimates.

1.1 For $d>0$, [F1] applies to $A$ because its binary entries are nonnegative, and gives $\Delta\mathbf1=0$. Directly for every $d\ge0$, the row sums give $A\mathbf1=d\mathbf1$ and $J\mathbf1=n\mathbf1$, hence $\Delta\mathbf1=0$, including $d=0$. Therefore $\Delta f=\Delta(f-\rho_1\mathbf1)=\Delta g$. Since $\sum_xf_x=n\rho_1$, $\rho_1$ is real, and $|f_x|=1$, expansion of the squared norm gives $\sum_x|f_x-\rho_1|^2=n-2n\rho_1^2+n\rho_1^2=n(1-X)$. [F1, F10, F13, F14, F16, F17, F18, given, algebra]

2.1 Apply the Euclidean norm inequality to $g$ and square the nonnegative sides: $\|\Delta f\|_2^2=\|\Delta g\|_2^2\le\|\Delta\|^2\|g\|_2^2\le\alpha^2d^2 n(1-X)$. This proves all three claims. [F11, F16, F17, step 1.1, given, algebra] ∎
