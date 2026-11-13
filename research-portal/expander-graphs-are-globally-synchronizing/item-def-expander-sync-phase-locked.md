---
title: Phase-locked long-term behavior
status: published
research_item: def-expander-sync-phase-locked
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 2–3, Section 1, homogeneous phase locking and equilibrium
        interpretation
      statement: In the homogeneous system phase differences approach constants; an
        equilibrium in the rotating frame is motionless there and has common
        angular velocity omega in the original frame.
      hypotheses: The graph Kuramoto system has a common intrinsic frequency omega;
        the equilibrium interpretation uses the frame rotating at that
        frequency.
      reading_limits: The cited article text was inspected for attribution. The
        article is not used as proof of the rotating-frame calculation; its
        general convergence assertion is outside this item.
---

PDF p. 2: ` Section 1, homogeneous phase locking and rotating frame `; PDF p. 3: ` Section 1, equilibrium interpretation `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Definition

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set $V$ and at most one edge between each pair of vertices, allowing self-loops. Thus $E$ is a set of unordered pairs $\{x,y\}$ with $x,y\in V$, where $x=y$ represents a self-loop. Write $A=(A_{x,y})_{x,y\in V}$ for its symmetric binary adjacency matrix, with $A_{x,y}=1$ when $\{x,y\}\in E$ and zero otherwise. Let $\theta:\mathbb R\to T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ be a trajectory of the graph Kuramoto system. Each $\theta_x(t)$ is a phase, meaning a real angle modulo $2\pi$. The trajectory has **phase-locked long-term behavior** if, for every $x,y\in V$, the circle-valued difference $\theta_x(t)-\theta_y(t)$ converges to a constant phase as $t\to\infty$. Convergence is in the circle topology: equivalently, the distance modulo $2\pi$ to that phase tends to zero.

In the homogeneous case all intrinsic frequencies equal one real number $\omega$. Its rotating-frame state is $\phi(t)=R_{-\omega t}\theta(t)$, i.e. $\phi_x(t)=\theta_x(t)-\omega t$ modulo $2\pi$. An equilibrium of the rotating-frame equation is a state at which its vector field vanishes. The trajectory starting at such a state is constant in that frame; in the original frame each oscillator has angular velocity $\omega$, and its phase differences are constant.

## Facts & Assumptions

[F1] Under countable choice, the graph Kuramoto system has a unique trajectory through each initial state. In local angular lifts its homogeneous equation is $\dot\theta_x=\omega-\sum_{y\in V}A_{x,y}\sin(\theta_x-\theta_y)$ ([def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F2] A phase is an angle modulo $2\pi$; the phase torus has angular charts with locally translational transitions and the circle distance is the minimum distance between representatives modulo $2\pi$ ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F3] A diagonal rotation adds the same phase to every coordinate and leaves every phase difference unchanged; a frame rotating at angular velocity $\omega$ subtracts $\omega t$ from every coordinate ([def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)).

[F4] Sine is $2\pi$-periodic, so the sine of a phase difference does not depend on the chosen real representatives ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F5] The graph convention allows self-loops and at most one edge for each unordered pair; its adjacency matrix has $A_{x,y}=1$ when $\{x,y\}\in E$ and zero otherwise ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

## Justification

**Given:** The data and trajectory in the definition, and, for the equilibrium assertion, homogeneous frequency $\omega$ and an equilibrium $\phi^*$ of the rotating-frame equation.

**Goal:** Verify that phase locking is well defined and establish the equilibrium interpretation.

1.1 By [F2], changing a representative of either phase changes their real difference by an integer multiple of $2\pi$. Its circle class and its distance to a prescribed limiting phase are therefore unchanged. Thus the convergence condition is independent of representatives. By [F3], diagonal rotation preserves each difference, so the condition is also unchanged by passage to the rotating frame. [F2, F3, algebra]

1.2 With $A$ as in [F5], in local real lifts write $\phi_x=\theta_x-\omega t$. Differentiating and using [F1] gives $\dot\phi_x=-\sum_{y\in V}A_{x,y}\sin(\theta_x-\theta_y)=-\sum_{y\in V}A_{x,y}\sin(\phi_x-\phi_y)$. The last equality uses [F3] and [F4]. Conversely, adding $\omega t$ to a solution of this equation gives a solution of the homogeneous original equation. [F1, F3, F4, F5, algebra]

2.1 Since the rotating-frame vector field vanishes at $\phi^*$, the constant curve $\phi(t)=\phi^*$ solves its equation. Its inverse-frame curve is $\theta_x(t)=\phi_x^*+\omega t$ modulo $2\pi$ and solves the original equation by step 1.2. By uniqueness in [F1], it is the trajectory through $\phi^*$ at time zero. Its local angular velocity is $\omega$ at every vertex and its differences equal $\phi_x^*-\phi_y^*$ for all time. This proves the equilibrium interpretation. [F1, step 1.2, algebra] ∎

## Source notes

The phase-locking terminology and equilibrium interpretation are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 2–3, Section 1. The justification above uses the stated mathematical suppliers. The assertion that every homogeneous trajectory converges is a separate claim.
