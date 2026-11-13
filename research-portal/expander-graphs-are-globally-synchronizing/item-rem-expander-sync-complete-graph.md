---
title: Complete-graph positive-semidefinite equilibria
status: draft
research_item: rem-expander-sync-complete-graph
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: Remark 1.7, PDF pp. 7–8
      statement: The article states that the only states of a complete graph at which
        the energy Hessian is positive semidefinite are fully synchronized.
      hypotheses: A complete graph and a phase state with positive-semidefinite energy
        Hessian; the displayed claim does not impose stationarity.
      reading_limits: The supplied article text at Remark 1.7 was inspected. This
        reference attributes the original claim and does not supply the proof
        below. Taylor's cited paper was not inspected.
---

PDF p. 7: ` Remark 1.7 continuation `; PDF p. 8: ` Remark 1.7 continuation `

## Prerequisites

- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus)
- [prop-expander-prereq-complete-graph-psd-landscape](item-prop-expander-prereq-complete-graph-psd-landscape)
- [prop-expander-prereq-complex-quadratic-tests](item-prop-expander-prereq-complex-quadratic-tests)


## Statement

Let $K_n$ be the unweighted graph on $n\geq 1$ vertices with one edge between each pair of distinct vertices, and let $\theta\in(\mathbb R/2\pi\mathbb Z)^n$. Its energy is $\mathcal E_{K_n}(\theta)=\sum_{1\leq x<y\leq n}(1-\cos(\theta_x-\theta_y))$. An equilibrium is a state with $\nabla\mathcal E_{K_n}(\theta)=0$ in angular coordinates. Its Hessian is positive semidefinite, written $\nabla^2\mathcal E_{K_n}(\theta)\succeq0$, when its real quadratic form is nonnegative on every real vector. Fully synchronized means that all phases agree modulo $2\pi$.

Every equilibrium of $K_n$ with positive-semidefinite energy Hessian is fully synchronized. The equilibrium hypothesis is necessary: positive semidefiniteness alone does not imply synchronization.

## Statement references

[def-expander-sync-energy](item-def-expander-sync-energy)

[def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)

[prop-expander-prereq-complex-quadratic-tests](item-prop-expander-prereq-complex-quadratic-tests)

[prop-expander-prereq-complete-graph-psd-landscape](item-prop-expander-prereq-complete-graph-psd-landscape)

## Facts & Assumptions

[F1] For the complete graph, the ordered-pair energy in the energy definition equals the sum over unordered distinct pairs displayed above, since the adjacency matrix is symmetric and the diagonal contributions vanish ([def-expander-sync-energy](item-def-expander-sync-energy)).

[F2] For this unordered-pair energy, every equilibrium whose Hessian is positive semidefinite is fully synchronized ([prop-expander-prereq-complete-graph-psd-landscape](item-prop-expander-prereq-complete-graph-psd-landscape)).

[F3] The Hessian quadratic form for a cosine-difference pair potential is the sum over unordered edges of $\cos(\theta_x-\theta_y)(v_x-v_y)^2$; the derivatives of sine and cosine have their usual values ([prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus), [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F4] Positive semidefiniteness means nonnegativity of the quadratic form on real vectors; a real symmetric Hessian satisfying this condition also satisfies the stated Hermitian convention ([def-expander-sync-matrix-order](item-def-expander-sync-matrix-order), [prop-expander-prereq-complex-quadratic-tests](item-prop-expander-prereq-complex-quadratic-tests)).

## Proof

**Given:** A phase state on $K_n$ with vanishing energy gradient and positive-semidefinite Hessian.

**Goal:** Establish synchronization and show that the stationarity hypothesis cannot be omitted.

1.1 By [F1], the energy and angular derivatives are those in [F2]. The given gradient and Hessian hypotheses therefore meet that result's hypotheses, so all phases agree modulo $2\pi$. [given, F1, F2]

2.1 For the necessity of stationarity, take $K_2$ and phases $\theta_1=0$, $\theta_2=\pi/3$. By [F3], the Hessian quadratic form is $\frac12(v_1-v_2)^2\geq0$ for every real vector $v$, hence the Hessian is positive semidefinite by [F4]. The phases are distinct modulo $2\pi$; the gradient is nonzero because its first component is $\sin(-\pi/3)\ne0$. Thus this state is not synchronized and is not an equilibrium. [F3, F4, choose, algebra] ∎

## Source notes

Remark 1.7 of [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 7–8, states the configuration-level claim without the equilibrium hypothesis. The counterexample above addresses that wording; the equilibrium result follows from the local supplier cited in [F2].
