---
title: Global rotation equivalence of phase configurations
status: draft
research_item: def-expander-sync-rotation
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 3, footnote 2; PDF p. 11, Section 2.1
      statement: States differing by a common phase rotation are considered
        equivalent; the model is invariant under global rotation, and phases are
        represented in $(-\pi,\pi]$ in the stated convention.
      hypotheses: Phase configurations on the vertices of the graph in the homogeneous
        Kuramoto model.
      reading_limits: The cited passages of the extracted article text were inspected
        for attribution and convention. The article is not used as proof of the
        justification.
---

PDF p. 3: ` Footnote 2 `; PDF p. 11: ` Section 2.1 phase convention `

## Prerequisites

- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)
- [math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Definition

Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set and symmetric adjacency matrix $A$. A phase is a real number modulo $2\pi$, and a configuration is an element $\theta\in T_V=\mathbb R^V/(2\pi\mathbb Z)^V$. For a phase $c$, the global rotation $R_c$ sends $\theta$ to the configuration with coordinates $(R_c\theta)_x=\theta_x+c$ modulo $2\pi$. Configurations $\theta$ and $\theta'$ are equivalent up to global rotation if there is a common real $c$ such that $\theta_x-\theta'_x=c$ modulo $2\pi$ for every $x\in V$. Each phase may be represented by its unique real representative in $(-\pi,\pi]$.

The homogeneous Kuramoto energy $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$ is invariant under $R_c$. Assuming countable choice, the homogeneous Kuramoto dynamics $\dot\theta_x=\omega-\sum_{y\in V}A_{x,y}\sin(\theta_x-\theta_y)$, with common real frequency $\omega$, are equivariant: the trajectory starting at $R_c\theta$ is the rotation by $R_c$ of the trajectory starting at $\theta$.

## Definition references

[def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)

[def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)

[def-expander-sync-energy](item-def-expander-sync-energy)

[def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)

## Facts & Assumptions

[F1] The phase torus identifies real vectors whose corresponding coordinates differ by integer multiples of $2\pi$; diagonal rotation is an action, and its orbit relation is an equivalence relation ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)).

[F2] The integer-part lemma gives a representative of each real number modulo $2\pi$ in $[0,2\pi)$ ([math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)).

[F3] Sine and cosine are $2\pi$-periodic, so their values on phase differences are independent of lifts ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F4] The energy has the displayed finite-sum formula ([def-expander-sync-energy](item-def-expander-sync-energy)).

[F5] Under countable choice, the displayed homogeneous system has a unique trajectory through each initial configuration, defined for all real time; derivatives are taken using local real lifts ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)).

## Justification

**Given:** The graph, configurations and rotation above; for the trajectory assertion assume countable choice and fix a common real frequency $\omega$.

**Goal:** Verify the equivalence relation and representative convention, energy invariance, and equivariance of the dynamics.

1.1 The relation $\theta_x-\theta'_x=c$ for all $x$ says precisely that $\theta=R_c\theta'$; the orbit relation is therefore an equivalence relation by [F1]. For any real lift, [F2] gives a congruent $r\in[0,2\pi)$; use $r$ if $r\le\pi$ and $r-2\pi$ otherwise. This yields a representative in $(-\pi,\pi]$. Two representatives in that interval differ by less than $2\pi$ in absolute value, so if their difference is an integer multiple of $2\pi$ it is zero. Thus the representative is unique. [F1, F2, algebra]

2.1 A common rotation leaves every phase difference unchanged modulo $2\pi$. By [F3], all sine and cosine terms in the displayed formulas are consequently unchanged. The finite energy sum is therefore unchanged by [F4]. If $\theta(t)$ is a trajectory, adding the fixed phase $c$ to each local lift leaves its derivative unchanged and gives the same right-hand side at the rotated configuration. Hence $R_c\theta(t)$ is a trajectory with initial configuration $R_c\theta(0)$. Uniqueness in [F5] identifies it with the trajectory starting there, establishing equivariance. [F3, F4, F5, step 1.1, algebra] ∎

## Source notes

The rotation equivalence and the phase convention are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 3, footnote 2, and page 11, Section 2.1. The justification uses the mathematical inputs above.
