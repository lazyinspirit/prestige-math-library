---
id: prop-author-4f905b3f6478-critical-density-family
kind: proposition
title: A simple nonsynchronizing family approaching eleven sixteenths
domain: mathematics
status: published
origin: pipeline
deps:
  - def-author-4f905b3f6478-spinning
  - lem-author-4f905b3f6478-eight-phase-certificate
  - lem-author-4f905b3f6478-spinning-transverse-certificate
  - lem-author-4f905b3f6478-positive-transverse-basin
  - def-expander-prereq-loop-compatible-networks
  - def-expander-prereq-phase-volume
  - math:def-countable-choice
dependency_roles:
  def-author-4f905b3f6478-spinning: mathematical-premise
  lem-author-4f905b3f6478-eight-phase-certificate: mathematical-premise
  lem-author-4f905b3f6478-spinning-transverse-certificate: mathematical-premise
  lem-author-4f905b3f6478-positive-transverse-basin: mathematical-premise
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  math:def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eduardo A. Canale, From weighted to unweighted graphs in Synchronizing
        Graph Theory, arXiv:2209.06362v3
      url: https://arxiv.org/pdf/2209.06362v3
      locator: Section II.A, printed p. 4 (strong density); Section V, printed pp.
        14–15 (degree, order, parameters and Theorem 2)
      statement: Strong density is minimum degree divided by order minus one. Section
        V gives order 8k and degree a+2b+c+d+k-1, takes
        (a,b,c,d)=(k,k,k,ceil(k/2)-1), and proves a nonsynchronizing family with
        limiting density 11/16; its displayed density formulas divide by 8k.
      hypotheses: Finite simple graphs with positive integer edge weights and an
        integer spinning parameter at least the maximum edge weight; homogeneous
        Kuramoto dynamics. In the local application k is at least 3, so the
        chosen weights are positive and the special stability certificate
        applies.
      reading_limits: Read the PDF text extraction of Section II.A, printed p. 4,
        Proposition 1 on printed p. 7, and the degree and density calculation
        and Theorem 2 on printed pp. 14–15. This citation documents attribution
        and the denominator comparison only; the mathematical argument uses the
        declared local suppliers. No general stability-transfer theorem is
        imported.
proof_strategy: direct
dependency_level: 5
---

## Statement

Assume countable choice. For every integer $k\ge3$, take the explicit eight-vertex weighted graph of the eight-phase certificate with $a=b=c=k$ and $d=\lceil k/2\rceil-1$, and form its spinning graph $F_k$. It is a simple unweighted graph with $8k$ vertices and common degree $5k+\lceil k/2\rceil-2$. It has a nonsynchronous equilibrium whose Hessian is positive transverse to simultaneous rotation, and is not globally synchronizing, where global synchronization means convergence to all-equal phases for almost every initial phase. Its loop-free minimum-degree density is

$$\mu_k=\frac{5k+\lceil k/2\rceil-2}{8k-1}<\frac{11}{16},\qquad\lim_{k\to\infty}\mu_k=\frac{11}{16}.$$

## Facts & Assumptions

[F1] Use the network and spinning definitions of [[def-expander-prereq-loop-compatible-networks]] and [[def-author-4f905b3f6478-spinning]].

[F2] The explicit weighted equilibrium is given by [[lem-author-4f905b3f6478-eight-phase-certificate]], and its lifted strict transverse stability by [[lem-author-4f905b3f6478-spinning-transverse-certificate]].

[F3] Under [[math:def-countable-choice]], positive transverse stability of a nonsynchronous equilibrium obstructs almost-everywhere synchronous convergence, by [[lem-author-4f905b3f6478-positive-transverse-basin]], with the phase measure of [[def-expander-prereq-phase-volume]].

## Proof

**Given:** An integer $k\ge3$ and the construction in the Statement.

**Goal:** Establish size, exact density and the nonsynchronization certificate.

1.1 Each base vertex has weighted degree $a+2b+c+d=4k+d$. The spinning construction has eight clusters of $k$ vertices, and [F1] gives degree $k-1+4k+d=5k+\lceil k/2\rceil-2$. Its simplicity and unit edge weights are part of the justified construction. Therefore division by the number $8k-1$ of other vertices gives the displayed loop-free density. [F1, given, algebra]

2.1 By [F2] the cluster-constant equilibrium is nonsynchronous and its Hessian is positive on the complement of global constants. The potential is a finite sum of smooth functions of phase differences and is therefore smooth and rotation invariant. Apply [F3] to obtain an open set of positive phase volume converging to nonsynchronous rotations. Thus $F_k$ is not globally synchronizing. [F1, F2, F3, step 1.1]

3.1 For even $k$, $11(8k-1)-16(5k+k/2-2)=21$; for odd $k$ it equals $13$. Both are positive, proving the strict upper inequality. Since $\lceil k/2\rceil/k\to1/2$, division of numerator and denominator by $k$ proves the limit $11/16$. Thus the approach is from below under the loop-free density convention as well as under the source's degree-over-order convention. [step 1.1, algebra] ∎

## Source notes

The parameters and special stability argument follow Canale Theorem 2, p. 15. The explicit base edge convention and local Fourier certificate are stated in the earlier helpers. We use degree divided by $8k-1$, required by the loop-free strong-density definition on Canale p. 4; the displayed calculations on pp. 14–15 instead divide by $8k$. Both tend to $11/16$, so this correction preserves the reported limiting bound.
