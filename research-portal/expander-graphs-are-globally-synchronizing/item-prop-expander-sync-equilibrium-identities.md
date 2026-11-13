---
title: Real and complex equilibrium identities
status: published
research_item: prop-expander-sync-equilibrium-identities
dependency_level: 6
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 10, equations (2.3) and (2.4)
      statement: At a critical point of the energy, the sine sum vanishes at every
        vertex; equivalently, each neighboring phasor sum is a real multiple of
        the phasor at that vertex.
      hypotheses: A finite undirected graph with adjacency matrix A and a phase at
        each vertex; the first assertion assumes a critical point of the graph
        energy.
      reading_limits: The supplied article text at the cited equations and surrounding
        sentences was inspected for attribution. The proof below uses the
        declared mathematical suppliers, not the article's assertion as a
        premise.
---

PDF p. 10: ` Equations (2.3), (2.4) `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)
- [def-expander-sync-states](item-def-expander-sync-states)
- [prop-expander-sync-energy-derivatives](item-prop-expander-sync-energy-derivatives)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, possibly with self-loops, and let $A=(A_{x,y})$ be its symmetric adjacency matrix. Let $\theta\in(S^1)^V$ be a phase state, with real representatives used in the formulas. The homogeneous Kuramoto energy is $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$. An equilibrium is a critical point of this energy, equivalently a zero of the homogeneous system's rotating-frame vector field.

The following conditions are equivalent:

1. $\theta$ is an equilibrium.
2. For every $y\in V$, $\sum_{x\in V}A_{x,y}\sin(\theta_x-\theta_y)=0$.
3. For every $y\in V$ there is a real number $r_y$ such that $\sum_{x\in V}A_{x,y}e^{i\theta_x}=r_ye^{i\theta_y}$.

In condition 3 one may take $r_y=\sum_{x\in V}A_{x,y}\cos(\theta_x-\theta_y)$. The coefficients $r_y$ are real but are not asserted to be nonnegative.

## Statement references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)

[def-expander-sync-energy](item-def-expander-sync-energy)

[def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)

[def-expander-sync-states](item-def-expander-sync-states)

[def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[F1] The adjacency matrix of the finite undirected graph is real and symmetric ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F2] A phase state has real representatives differing coordinatewise by integer multiples of $2\pi$; the stated energy is well defined on the phase torus ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-sync-energy](item-def-expander-sync-energy)).

[F3] Under countable choice, an equilibrium is exactly a critical point of the energy, meaning that its gradient vanishes ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [def-expander-sync-states](item-def-expander-sync-states)).

[F4] The $y$ component of the energy gradient is $\sum_{x\in V}A_{y,x}\sin(\theta_y-\theta_x)$ ([prop-expander-sync-energy-derivatives](item-prop-expander-sync-energy-derivatives)).

[F5] For real $u,v$, $e^{iu}\overline{e^{iv}}=e^{i(u-v)}=\cos(u-v)+i\sin(u-v)$ and $|e^{iv}|=1$. These expressions are unchanged by changing phase representatives by multiples of $2\pi$; real and imaginary parts distribute over finite sums ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

## Proof

**Given:** A graph and phase state as in the Statement, under countable choice.

**Goal:** Prove the equivalence of the three conditions and the displayed formula for $r_y$.

1.1 By [F3] and [F4], equilibrium is equivalent to the vanishing, for every $y$, of $\sum_x A_{y,x}\sin(\theta_y-\theta_x)$. By symmetry of $A$ and the phasor identities in [F5], $\sin(-t)=-\sin t$; hence this sum is the negative of $\sum_x A_{x,y}\sin(\theta_x-\theta_y)$. Thus conditions 1 and 2 are equivalent. [F1, F3, F4, F5, algebra]

2.1 Fix $y$ and set $S_y=\sum_x A_{x,y}e^{i\theta_x}$. By [F5] and the reality of $A$, $S_y e^{-i\theta_y}=\sum_x A_{x,y}\cos(\theta_x-\theta_y)+i\sum_x A_{x,y}\sin(\theta_x-\theta_y)$. Since $e^{i\theta_y}e^{-i\theta_y}=1$, the equation $S_y=r_y e^{i\theta_y}$ for a real $r_y$ holds exactly when the imaginary part of this product vanishes; then $r_y$ is its real part. This proves the equivalence of conditions 2 and 3 and the formula for $r_y$. The formulas are independent of representatives by [F2] and [F5]. Together with step 1.1, this completes the proof. [F1, F2, F5, step 1.1, algebra] ∎

## Source notes

Equations (2.3) and (2.4) and their equivalence are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 10. The argument above derives the identities from the stated mathematical inputs.
