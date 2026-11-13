---
title: Nonnegativity and synchronized global minima
status: published
research_item: prop-expander-sync-energy-minimum
dependency_level: 6
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 3, Section 1, paragraph before Definition 1.1
      statement: The energy is nonnegative and is minimized when all phases are equal;
        those states are called fully synchronized.
      hypotheses: The homogeneous Kuramoto energy on the finite graph described in
        Section 1.
      reading_limits: The extracted article text at the cited passage was inspected
        for attribution. The citation is not used as a proof; the argument below
        uses the stated mathematical suppliers.
---

PDF p. 3: ` Section 1, paragraph before Definition 1.1 `

## Prerequisites

- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, allowing self-loops, and let $A$ be its symmetric binary adjacency matrix. For a phase state $\theta\in T_V=(S^1)^V=\mathbb R^V/(2\pi\mathbb Z)^V$, its homogeneous Kuramoto energy is $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$, evaluated using any real lift. Then $\mathcal E_G(\theta)\geq 0$ for every phase state. Every fully synchronized state, meaning one with $\theta_x=\theta_y$ in $S^1$ for all $x,y\in V$, has energy zero and is a global minimizer: its energy is no greater than that of any phase state.

## Statement references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)

[def-expander-sync-energy](item-def-expander-sync-energy)

[def-expander-sync-states](item-def-expander-sync-states)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[A1] Countable choice is assumed, as in the synchronized-state definition ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [def-expander-sync-states](item-def-expander-sync-states)).

[F1] The graph has finitely many vertices and each adjacency entry $A_{x,y}$ is either zero or one ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F2] Phase states are equivalence classes of real vectors modulo coordinatewise integer multiples of $2\pi$; the energy formula is independent of the chosen lift ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-sync-energy](item-def-expander-sync-energy)).

[F3] For real $u,v$, the phasor $z(u)=e^{iu}$ has modulus one, $z(u-v)=z(u)\overline{z(v)}$, and $\cos(u-v)=\operatorname{Re}z(u-v)$; these values are unchanged by adding integer multiples of $2\pi$ to either angle ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F4] A fully synchronized state has equal phase coordinates in $S^1$ ([def-expander-sync-states](item-def-expander-sync-states)).

## Proof

**Given:** A graph and phase state as in the statement, and a real lift of that state.

**Goal:** Prove nonnegativity of its energy and zero energy, hence global minimality, for each fully synchronized state.

1.1 For any real $t$, write $z(t)=a+ib$ with real $a,b$. By [F3], $a^2+b^2=|z(t)|^2=1$, so $a\leq 1$ and hence $1-\cos t\geq 0$. Each adjacency coefficient is nonnegative by [F1]. Therefore every term in the finite ordered-pair energy sum is nonnegative, and $\mathcal E_G(\theta)\geq 0$. The value is independent of the lift by [F2]. [F1, F2, F3, algebra]

2.1 If the state is fully synchronized, [F4] and [F2] imply that any two lifted coordinates differ by an integer multiple of $2\pi$. By the periodicity in [F3], their phasors are equal; hence $z(\theta_x-\theta_y)=z(\theta_x)\overline{z(\theta_y)}=|z(\theta_x)|^2=1$. Thus every cosine in the energy sum equals one and the energy is zero. Step 1.1 shows that no phase state has smaller energy, so every fully synchronized state is a global minimizer. [F2, F3, F4, step 1.1, algebra] ∎

## Source notes

The claim is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 3, Section 1, paragraph before Definition 1.1. The proof above is a local argument from the listed mathematical suppliers.
