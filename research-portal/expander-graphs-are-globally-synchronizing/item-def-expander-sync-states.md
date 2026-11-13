---
title: Equilibria, stable states, synchronized states, and spurious minima
status: draft
research_item: def-expander-sync-states
dependency_level: 5
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 3, Section 1, paragraphs preceding Definition 1.1 and footnote 2
      statement: The article calls rotating-frame equilibria the critical points of
        the energy, calls its local minima stable states, calls configurations
        with all phases equal fully synchronized, and calls other local minima
        spurious.
      hypotheses: The homogeneous graph Kuramoto model, in the frame rotating at the
        common intrinsic frequency.
      reading_limits: The supplied article text at the cited passage was inspected for
        terminology and attribution. This citation does not supply the
        justification below or establish a separate Lyapunov-stability
        equivalence.
---

PDF p. 3: ` Section 1 preceding Definition 1.1 `

## Prerequisites

- [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)
- [def-expander-sync-energy](item-def-expander-sync-energy)
- [prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction)
- [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Definition

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, allowing self-loops, and consider its homogeneous Kuramoto system with common intrinsic frequency $\omega$. Its phase states are points of $T_V=(S^1)^V=\mathbb R^V/(2\pi\mathbb Z)^V$, and its energy is $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$. The rotating-frame state is obtained by subtracting $\omega t$ from every phase modulo $2\pi$.

An equilibrium state is a state at which the rotating-frame vector field vanishes, equivalently a critical point of the energy: $\nabla\mathcal E_G(\theta)=0$. In the original frame the corresponding trajectory has every phase moving at frequency $\omega$, with all phase differences constant.

A local minimum of $\mathcal E_G$ is a state $\theta$ having a neighborhood $U$ in $T_V$ such that $\mathcal E_G(\phi)\geq\mathcal E_G(\theta)$ for every $\phi\in U$. Following the article's terminology, a stable equilibrium state, or stable state, is a local minimum of $\mathcal E_G$; strict minimality is not required. This terminology is a definition and does not assert a separate Lyapunov-stability theorem.

A fully synchronized state is a state satisfying $\theta_x=\theta_y$ in $S^1$ for every $x,y\in V$. A spurious local minimum is a local minimum that is not fully synchronized. States differing by one common phase rotation are rotation equivalent.

## Justification

The phase-torus construction makes equality and subtraction of phases modulo $2\pi$ well defined and supplies the topology used in the neighborhood definition. The energy is a well-defined real function on that torus. Thus local minimality, equality of all coordinates, and the spurious-minimum condition are unambiguous ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-sync-energy](item-def-expander-sync-energy), [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction)).

Under countable choice, the rotating-frame formulation identifies the vector field with $-\nabla\mathcal E_G$. It therefore vanishes exactly at the critical points. A constant rotating-frame trajectory at such a point transforms back by adding $\omega t$ to each phase, giving a trajectory of the homogeneous system whose phase differences remain constant ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow), [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system), [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)).

A common rotation preserves every phase difference. Consequently it preserves the energy, local minima, and equality of all phases; it also preserves the critical-point condition because the gradient components depend only on phase differences. Rotation equivalence is well defined by the diagonal-rotation construction ([def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction), [def-expander-sync-energy](item-def-expander-sync-energy), [prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow)).

## Source notes

The terminology is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 3, preceding Definition 1.1 and footnote 2. The justification uses the stated mathematical suppliers.
