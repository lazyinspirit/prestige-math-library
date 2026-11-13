---
title: Regular-graph numerical contradiction threshold
status: published
research_item: lem-expander-sync-regular-numeric-contradiction
dependency_level: 14
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 29, proof of Theorem 1.4, equation (5.1)
      statement: The article states that the displayed threshold |C_xi| at least
        0.00832 n divided by sin squared xi yields a contradiction for the
        regular-graph argument at alpha 0.0816.
      hypotheses: A stable state on a regular expander, normalized by common rotation,
        and an angle strictly between zero and pi/2.
      reading_limits: The extracted text of PDF page 29 was inspected for attribution.
        The local proof uses the stated mathematical suppliers, not the
        article's assertion as a premise.
---

PDF p. 29: ` Proof of Theorem 1.4, equation (5.1) `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [def-expander-sync-h](item-def-expander-sync-h)
- [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)
- [prop-expander-sync-h-properties](item-prop-expander-sync-h-properties)
- [rem-expander-sync-regular-order-bounds](item-rem-expander-sync-regular-order-bounds)
- [lem-author-73027818342b-regular-h-refinement](item-lem-author-73027818342b-regular-h-refinement)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)
- [def-expander-sync-rotation](item-def-expander-sync-rotation)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph with $n=|V|>0$, symmetric binary adjacency matrix $A$, and self-loops allowed and counted once in the degree. Suppose every row sum is $d\ge0$ and $\|A-(d/n)J\|\le\alpha d$, where $J$ is the all-ones matrix, the norm is the Euclidean operator norm, and $\alpha=0.0816$. Let $\theta$ be a stable state: a local minimum on the phase torus of $\frac12\sum_{x,y\in V}A_{xy}(1-\cos(\theta_x-\theta_y))$. Rotate all phases together so that $\rho_1=n^{-1}\sum_x e^{i\theta_x}$ is real and nonnegative, and use representatives $\theta_x\in(-\pi,\pi]$. For $0<\xi<\pi/2$, put $\mathcal C_\xi=\{x\in V:|\theta_x|\ge\xi\}$. Then the condition $|\mathcal C_\xi|\ge0.00832n/\sin^2\xi$ is impossible.

## Statement references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)

[def-expander-sync-states](item-def-expander-sync-states)

[def-expander-sync-daido](item-def-expander-sync-daido)

[prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)

[def-expander-sync-rotation](item-def-expander-sync-rotation)

[def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[F1] For these graph and normalized stability hypotheses, $X=\rho_1^2\ge1-2\alpha$, since $\alpha\le0.1$ ([rem-expander-sync-regular-order-bounds](item-rem-expander-sync-regular-order-bounds)).

[F2] Define $H(t)=\sin^2|t|$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$, and put $M=n^{-1}\sum_x H(\theta_x)$. If $d>0$ and $X>0$, then $M\le\alpha^2(1-X)/X$; if $d=0$, then $M=0$ ([def-expander-sync-h](item-def-expander-sync-h), [lem-author-73027818342b-regular-h-refinement](item-lem-author-73027818342b-regular-h-refinement)).

[F3] The function $H$ is nonnegative and is nondecreasing on $[0,\pi]$ ([prop-expander-sync-h-properties](item-prop-expander-sync-h-properties)).

[F4] The phase-tail definition identifies $\mathcal C_\xi$ with the vertices whose principal representatives have absolute value at least $\xi$ ([def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)).

[F5] A common rotation can make $\rho_1$ real and nonnegative, including when $\rho_1=0$; each resulting phase has a unique representative in $(-\pi,\pi]$ ([prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)).

[F6] A common rotation $R_c$ adds the same phase $c$ to every coordinate and preserves the energy ([def-expander-sync-rotation](item-def-expander-sync-rotation)). A stable state is a local minimum in the phase-torus topology; common rotations preserve such local minima ([def-expander-sync-states](item-def-expander-sync-states), Justification).

## Proof

**Given:** The graph, stable state before normalization, and angle in the Statement, with countable choice as assumed there.

**Goal:** Prove that the stated lower bound on $|\mathcal C_\xi|$ cannot hold.

1.1 By [F5], choose a common rotation $R_c$ making the first order parameter real and nonnegative; when the original $\rho_1=0$, take $c=0$. Addition of a fixed phase is continuous in the torus coordinates and has the continuous inverse $R_{-c}$, so $R_c$ is a homeomorphism. If $U$ is a neighborhood witnessing local minimality at the original state, then $R_cU$ is a neighborhood of the rotated state. For every $\phi\in R_cU$, energy invariance in [F6] gives $\mathcal E_G(\phi)=\mathcal E_G(R_{-c}\phi)\ge\mathcal E_G(\theta)=\mathcal E_G(R_c\theta)$. Thus the rotated state is stable. Choose its principal representatives using [F5] and denote this normalized stable state again by $\theta$. Consequently the hypotheses of [F1] and [F2], including countable choice, apply to this state. [F5, F6, given, construct]

2.1 By [F1], $X\ge1-2\alpha=0.8368>0$. If $d>0$, [F2] gives $M\le\alpha^2(1-X)/X\le\alpha^2(2\alpha)/(1-2\alpha)<\alpha^2/4$, because $4(2\alpha)=0.6528<0.8368=1-2\alpha$. If $d=0$, [F2] gives $M=0<\alpha^2/4$. Thus in either case $M<\alpha^2/4=0.00166464<0.00832$. [F1, F2, step 1.1, given, algebra]

3.1 For each $x\in\mathcal C_\xi$, [F4] gives $\xi\le|\theta_x|\le\pi$. By [F3] and the definition of $H$, $H(\theta_x)=H(|\theta_x|)\ge H(\xi)=\sin^2\xi$; all other summands are nonnegative. Hence $nM\ge|\mathcal C_\xi|\sin^2\xi$. If the asserted threshold held, this would give $M\ge0.00832$, contradicting step 2.1. The condition is therefore impossible. [F2, F3, F4, step 2.1, given, algebra] ∎

## Source notes

Equation (5.1) on the cited original PDF page gives the rounded threshold retained in the Statement. The preceding prose prints a related expression without a factor of $n$. The proof above establishes the displayed threshold directly using the sharper refined mass estimate; it does not infer it merely by rounding $5\alpha^2/4=0.0083232$ downward to $0.00832$.
