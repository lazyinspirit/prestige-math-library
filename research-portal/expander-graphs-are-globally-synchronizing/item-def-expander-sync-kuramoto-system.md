---
title: Graph Kuramoto differential equations
status: draft
research_item: def-expander-sync-kuramoto-system
dependency_level: 2
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 2, Section 1, equation (1.1) and the following paragraph
      statement: The graph Kuramoto equations are $d\theta_x/dt=\omega_x-\sum_{y\in
        V}A_{x,y}\sin(\theta_x-\theta_y)$, with circle-valued phases and real
        intrinsic frequencies; the homogeneous case has a common frequency.
      hypotheses: A graph $G=(V,E)$ with symmetric adjacency matrix $A$; the
        homogeneous specialization takes $\omega_x=\omega$ for every vertex.
      reading_limits: The extracted article text at the cited passage was inspected
        for the formulation and attribution. The article is not used as proof of
        the justification below.
---

PDF p. 2: ` Section 1, equation (1.1) `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete](https://alphabetamath.cc/item/cor-every-smooth-vector-field-on-a-compact-manifold-is-complete)
- [math:lem-c1-euclidean-maximal-flow-with-c2-upgrade](https://alphabetamath.cc/item/lem-c1-euclidean-maximal-flow-with-c2-upgrade)
- [math:def-smooth-vector-field-as-a-tangent-bundle-section](https://alphabetamath.cc/item/def-smooth-vector-field-as-a-tangent-bundle-section)
- [math:def-integral-curve-of-a-vector-field](https://alphabetamath.cc/item/def-integral-curve-of-a-vector-field)
- [math:def-complete-vector-field](https://alphabetamath.cc/item/def-complete-vector-field)


## Definition

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, possibly with self-loops, and symmetric adjacency matrix $A=(A_{x,y})_{x,y\in V}$, where $A_{x,y}=1$ when $\{x,y\}\in E$ and is zero otherwise. Put $n=|V|$. The state space is the $n$-torus $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$, identified with $(S^1)^V$, where $S^1=\{(a,b)\in\mathbb R^2:a^2+b^2=1\}$. A phase is a coordinate $\theta_x$ of a state in this quotient, and a lift is a real representative of it.

For prescribed real numbers $\omega_x$, called intrinsic frequencies, the graph Kuramoto system is the autonomous differential equation

$$\dot\theta_x=\omega_x-\sum_{y\in V}A_{x,y}\sin(\theta_x-\theta_y),\qquad x\in V.$$

Here $\dot\theta_x$ means the derivative of a local real lift of the circle-valued curve $\theta_x$, and the sine is evaluated using any real lifts of the phases. A trajectory is a differentiable curve $\theta:\mathbb R\to T_V$ satisfying these equations in local angular lifts. Thus each coordinate is a map $\theta_x:\mathbb R\to S^1$. The homogeneous case is the specialization $\omega_x=\omega$ for every $x\in V$, for one real number $\omega$.

## Definition references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)

[def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[F1] The stated graph convention gives a finite symmetric binary adjacency matrix, including a diagonal entry for each loop ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F2] The phase torus is a compact smooth manifold; its angular chart transitions are locally translations, and it is identified with $(S^1)^V$ ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F3] Sine and cosine are $2\pi$-periodic, with derivatives $\cos$ and $-\sin$, respectively ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F4] Under countable choice every smooth vector field on a compact smooth manifold is complete ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete](https://alphabetamath.cc/item/cor-every-smooth-vector-field-on-a-compact-manifold-is-complete)).

[F5] A $C^1$ vector field on an open Euclidean set has a unique maximal local flow and unique local trajectories through initial points ([math:lem-c1-euclidean-maximal-flow-with-c2-upgrade](https://alphabetamath.cc/item/lem-c1-euclidean-maximal-flow-with-c2-upgrade)).

[F6] Under countable choice, a smooth vector field on a smooth manifold $M$ is a smooth section $X:M\to TM$ of the tangent-bundle projection: its value $X(p)$ is a tangent vector at $p$ and depends smoothly on $p$ ([math:def-smooth-vector-field-as-a-tangent-bundle-section](https://alphabetamath.cc/item/def-smooth-vector-field-as-a-tangent-bundle-section)).

[F7] An integral curve of $X$ is a smooth curve $\gamma:I\to M$ on a real interval satisfying $\gamma'(t)=X(\gamma(t))$; it is through $p$ when $\gamma(0)=p$ ([math:def-integral-curve-of-a-vector-field](https://alphabetamath.cc/item/def-integral-curve-of-a-vector-field)).

[F8] A smooth vector field is complete when the maximal integral curve through every point is defined on all of $\mathbb R$ ([math:def-complete-vector-field](https://alphabetamath.cc/item/def-complete-vector-field)).

## Justification

**Given:** Countable choice, the graph and frequencies in the definition, and an initial phase state in $T_V$.

**Goal:** Show that the displayed equation is independent of lifts and defines a unique trajectory through the initial state for all real time.

1.1 Replacing any lift by another changes it by an integer multiple of $2\pi$. By [F3], every sine in the finite sum is unchanged. The chart transitions in [F2] are locally translations, so their derivatives are the identity and a curve's local lift derivatives agree on overlaps. Regard the displayed right-hand side as the components of a tangent vector in each angular chart. These vectors agree on overlaps and are based at the phase state, so they define a section $X:T_V\to TT_V$ of the tangent-bundle projection. Repeated use of the derivative identities in [F3] shows that sine is smooth; finite sums and composition with the linear coordinate differences give smooth component functions. Thus $X$ is a smooth vector field in the sense of [F6]. A loop term vanishes because its phase difference is zero and $\sin 0=0$. [F1, F2, F3, F6, given]

2.1 In each angular chart, [F5] supplies local existence and uniqueness for the smooth coordinate field. A differentiable coordinate solution is smooth by repeated differentiation of its equation with smooth right-hand side. Its coordinate derivative is the component vector of $X$, so it is an integral curve as defined in [F7]; conversely, that integral-curve identity gives the displayed coordinate equations. The coordinate solutions agree on overlaps by uniqueness and the compatibility established in step 1.1. By [F2] the torus is compact, so [F4] makes $X$ complete. By [F8], its maximal integral curve through the initial state is therefore defined on all of $\mathbb R$ and is a trajectory in the Definition. Local uniqueness along any two curves with the same initial state makes them identical. The homogeneous case is the stated choice of the frequency parameters. [F2, F4, F5, F7, F8, step 1.1] ∎



The equation, phase interpretation, and homogeneous specialization are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 2, Section 1. The justification uses the mathematical suppliers above, not the article as proof.

## Source notes

The equation, phase interpretation, and homogeneous specialization are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 2, Section 1. The justification uses the mathematical suppliers above, not the article as proof.
