---
title: Trees synchronize whereas cycles longer than five do not
status: published
research_item: ex-expander-sync-trees-cycles
dependency_level: 7
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 8–9, Remark 1.8 and Section 1.5
      statement: Every tree is globally synchronizing, while a cycle of length greater
        than five is not globally synchronizing; adding edges need not preserve
        global synchrony.
      hypotheses: Finite graphs in the homogeneous Kuramoto model and the article's
        probability-one definition of global synchrony.
      reading_limits: The supplied article extraction identifies these passages and
        claims. This citation is attribution only; the argument below uses the
        declared mathematical suppliers.
---

PDF p. 8: ` Remark 1.8; Section 1.5 `; PDF p. 9: ` Remark 1.8; Section 1.5 `

## Prerequisites

- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-periodic-analytic-potentials](item-def-expander-prereq-periodic-analytic-potentials)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus)
- [prop-expander-prereq-analytic-periodic-flow-convergence](item-prop-expander-prereq-analytic-periodic-flow-convergence)
- [prop-expander-prereq-strict-saddle-flow-nullity](item-prop-expander-prereq-strict-saddle-flow-nullity)
- [prop-expander-prereq-cycle-twisted-states](item-prop-expander-prereq-cycle-twisted-states)
- [lem-author-4f905b3f6478-positive-transverse-basin](item-lem-author-4f905b3f6478-positive-transverse-basin)
- [prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow)
- [math:def-tree-forest-and-leaf](https://alphabetamath.cc/item/def-tree-forest-and-leaf)
- [math:lem-edge-deletion-in-a-tree](https://alphabetamath.cc/item/lem-edge-deletion-in-a-tree)
- [math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms)
- [math:thm-sine-cosine-zero-sets-and-fundamental-period](https://alphabetamath.cc/item/thm-sine-cosine-zero-sets-and-fundamental-period)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)


## Statement

Assume countable choice. Every finite nonempty tree is globally synchronizing, while an unweighted cycle of length greater than five is not globally synchronizing. Consequently, adding an edge to a globally synchronizing graph need not preserve global synchrony.

A tree is a connected finite simple graph without cycles. A cycle of length $n\ge3$ has vertices $0,\ldots,n-1$ and edges $\{j,j+1\}$ with indices modulo $n$. Global synchrony means that, for normalized uniform phase volume, almost every rotating-frame trajectory converges to an individual state in which all phases agree modulo $2\pi$ ([def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony), [math:def-tree-forest-and-leaf](https://alphabetamath.cc/item/def-tree-forest-and-leaf)).

## Facts & Assumptions

[F1] Countable choice is assumed. The phase space is the finite flat torus $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$; the homogeneous system has a complete flow and its rotating-frame trajectories are downward gradient trajectories of $\mathcal E_G=\sum_{\{x,y\}\in E}(1-\cos(\theta_x-\theta_y))$ for a simple graph ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system), [def-expander-sync-energy](item-def-expander-sync-energy), [prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow)).

[F2] The graph energy is real analytic on the phase torus. Every downward gradient trajectory of a real analytic potential on this torus converges to one critical point. For a $C^2$ potential with complete downward gradient flow, initial states converging to any critical point whose Hessian has a negative eigenvalue form a phase-volume null set ([def-expander-prereq-periodic-analytic-potentials](item-def-expander-prereq-periodic-analytic-potentials), [prop-expander-prereq-analytic-periodic-flow-convergence](item-prop-expander-prereq-analytic-periodic-flow-convergence), [prop-expander-prereq-strict-saddle-flow-nullity](item-prop-expander-prereq-strict-saddle-flow-nullity)).

[F3] For the cosine-difference energy, the gradient at $x$ is $\sum_{y:\{x,y\}\in E}\sin(\theta_x-\theta_y)$, and its Hessian quadratic form at $\theta$ is $\sum_{\{x,y\}\in E}\cos(\theta_x-\theta_y)(h_x-h_y)^2$. Sine is odd; its real zeros are integer multiples of $\pi$, and cosine is $1$ at even and $-1$ at odd multiples of $\pi$ ([prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus), [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus), [math:thm-sine-cosine-zero-sets-and-fundamental-period](https://alphabetamath.cc/item/thm-sine-cosine-zero-sets-and-fundamental-period), [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)).

[F4] Deleting any edge of a finite tree separates it into two tree components. A real symmetric Hessian with a negative quadratic-form direction has a negative eigenvalue ([math:lem-edge-deletion-in-a-tree](https://alphabetamath.cc/item/lem-edge-deletion-in-a-tree), [math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms)).

[F5] On a cycle of length $n\ge5$, the winding-one state $\theta_j^*=2\pi j/n$ is an equilibrium and its Hessian is positive on the subspace of vectors with coordinate sum zero. For a smooth rotation-invariant potential, such an equilibrium whose rotation orbit contains no synchronized state attracts a nonempty open set of positive phase volume; those initial states do not converge to the synchronized set ([prop-expander-prereq-cycle-twisted-states](item-prop-expander-prereq-cycle-twisted-states), [lem-author-4f905b3f6478-positive-transverse-basin](item-lem-author-4f905b3f6478-positive-transverse-basin)).

## Proof

**Given:** A finite nonempty tree, or an unweighted cycle of length greater than five, with the homogeneous Kuramoto dynamics and countable choice.

**Goal:** Prove the stated probability-one synchronization and nonsynchronization claims, and exhibit an edge addition that destroys global synchrony.

1.1 Let $T$ be a tree and $\theta$ a critical point of its energy. Fix an edge $e=\{a,b\}$ and delete it. By [F4], one component has vertex set $S$ with $a\in S$ and $b\notin S$, and $e$ is the only edge crossing from $S$ to its complement. Sum the zero gradient components over $S$. By [F3], contributions of edges internal to $S$ cancel in pairs, leaving $\sin(\theta_a-\theta_b)=0$. Thus every edge difference is an integer multiple of $\pi$. [F3, F4, algebra]

1.2 Let $n>5$. The cycle energy is smooth and invariant under common phase rotation. By [F5], its winding-one state is an equilibrium with positive Hessian on the coordinate-sum-zero subspace. Its neighboring phases differ by $2\pi/n$, which is not zero modulo $2\pi$, so no common rotation of this state is synchronized. The positive-basin assertion in [F5] gives a positive-volume set of initial states that do not converge to the synchronized set. Thus the cycle is not globally synchronizing. [F5, algebra]

2.1 If some edge has odd-multiple difference, delete it and take $h$ to be $1$ on one component and $0$ on the other. All terms in the Hessian form in [F3] vanish except that edge, whose contribution is $-1$. By [F4], the critical point has a negative Hessian eigenvalue. Otherwise every edge joins equal phases modulo $2\pi$; connectedness of the tree makes all phases equal. This also covers the one-vertex tree, for which there are no edges. [F3, F4, step 1.1, algebra]

3.1 By [F1] and [F2], every rotating-frame trajectory converges to one critical point. By step 2.1, a nonsynchronized critical point has a negative Hessian eigenvalue; [F2] makes the set converging to any such point null. Every other trajectory therefore converges to an individual synchronized state, establishing global synchrony as defined in the Statement. [F1, F2, step 2.1]

4.1 Delete one edge from this cycle. The remaining graph is a path on the same vertices, hence a tree: consecutive remaining edges connect all vertices and no cycle remains. By step 3.1 it is globally synchronizing, while restoring the deleted edge produces the nonsynchronizing cycle of step 1.2. This is the required edge-addition example. [step 3.1, step 1.2, algebra] ∎

## Source notes

The tree, cycle and edge-addition assertions are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 8–9, Remark 1.8 and Section 1.5. The article is not used as proof of these assertions.
