---
id: prop-expander-sync-psd-criterion
title: Positive-semidefinite-equilibrium criterion for global synchrony
kind: proposition
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-states
  - def-expander-sync-global-synchrony
  - def-expander-sync-energy
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phase-volume
  - def-expander-sync-matrix-order
  - def-expander-sync-strict-saddles
  - prop-expander-sync-gradient-flow
  - rem-expander-sync-analytic-convergence
  - rem-expander-sync-saddle-null-basin
  - math:def-countable-choice
  - math:thm-clairaut-schwarz-mixed-partials
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-expander-prereq-periodic-analytic-potentials
  - def-expander-prereq-phasor-calculus
dependency_roles:
  def-expander-sync-states: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-sync-energy: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  def-expander-sync-strict-saddles: mathematical-premise
  prop-expander-sync-gradient-flow: mathematical-premise
  rem-expander-sync-analytic-convergence: mathematical-premise
  rem-expander-sync-saddle-null-basin: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-clairaut-schwarz-mixed-partials: mathematical-premise
  math:thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  def-expander-prereq-periodic-analytic-potentials: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 4, Section 1, first paragraph
      statement: If the only equilibrium states of the homogeneous Kuramoto energy
        with positive-semidefinite Hessian are fully synchronized, then the
        graph is globally synchronizing.
      hypotheses: The homogeneous Kuramoto model on the graph, with the article's
        equilibrium and global-synchrony conventions.
      reading_limits: The supplied article text and extracted formulation at the cited
        passage were inspected for attribution. This citation is not used as
        proof of the criterion.
formulation_deps:
  - def-expander-sync-states
  - def-expander-sync-global-synchrony
  - def-expander-sync-energy
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phase-volume
  - def-expander-sync-matrix-order
  - math:def-countable-choice
argument_deps:
  - def-expander-sync-states
  - def-expander-sync-global-synchrony
  - def-expander-sync-energy
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phase-volume
  - def-expander-sync-matrix-order
  - def-expander-sync-strict-saddles
  - prop-expander-sync-gradient-flow
  - rem-expander-sync-analytic-convergence
  - rem-expander-sync-saddle-null-basin
  - math:def-countable-choice
  - math:thm-clairaut-schwarz-mixed-partials
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-expander-prereq-periodic-analytic-potentials
  - def-expander-prereq-phasor-calculus
dependency_level: 9
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, at most one edge between any two vertices, and possible self-loops. Let $A$ be its adjacency matrix and let $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ be the phase torus. The homogeneous Kuramoto energy is $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$. An equilibrium is a critical point of this energy, and it is fully synchronized when all its phase coordinates are equal modulo $2\pi$. For its real symmetric angular Hessian $H=\nabla^2\mathcal E_G(\theta)$, write $H\succeq0$ when $z^*Hz\ge0$ for every $z\in\mathbb C^V$.

If every equilibrium $\theta$ satisfying $\nabla^2\mathcal E_G(\theta)\succeq0$ is fully synchronized, then $G$ is globally synchronizing: for normalized phase-volume almost every initial phase, the rotating-frame homogeneous Kuramoto trajectory converges to a fully synchronized state.

## Statement references

[[math:def-countable-choice]]

[[def-expander-sync-energy]]

[[def-expander-prereq-phase-torus]]

[[def-expander-sync-states]]

[[def-expander-sync-matrix-order]]

[[def-expander-sync-global-synchrony]]

[[def-expander-prereq-phase-volume]]

## Facts & Assumptions

[F1] The energy is a real analytic function on the flat phase torus: it is a finite real linear combination of cosine differences and the constant $1$, itself $\cos(\theta_x-\theta_x)$ for any fixed vertex $x$ ([[def-expander-prereq-periodic-analytic-potentials]]). It is $C^2$ in angular coordinates because the first two derivatives of every cosine term exist and are continuous, and finite sums may be differentiated termwise ([[def-expander-prereq-phasor-calculus]]). Under countable choice, the homogeneous system has a unique all-time trajectory for each initial state, and its rotating-frame trajectory is the downward gradient trajectory of this energy. Equilibria are exactly its critical points ([[def-expander-sync-energy]], [[def-expander-prereq-phase-torus]], [[prop-expander-sync-gradient-flow]], [[def-expander-sync-states]], [[math:def-countable-choice]]).

[F2] Every homogeneous Kuramoto trajectory converges in the rotating frame to a single equilibrium. The set of initial phases whose rotating-frame trajectories converge to any strict saddle is phase-null, even if the strict saddles are not isolated. A strict saddle is a critical point whose angular Hessian has a negative eigenvalue ([[rem-expander-sync-analytic-convergence]], [[rem-expander-sync-saddle-null-basin]], [[def-expander-sync-strict-saddles]]).

[F3] A real symmetric matrix is Hermitian and hence normal. A normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis. The Hessian of a $C^2$ real function is symmetric by equality of mixed partials ([[def-expander-sync-matrix-order]], [[math:thm-complex-spectral-theorem-for-normal-endomorphisms]], [[math:thm-clairaut-schwarz-mixed-partials]]).

[F4] Normalized phase volume is a complete probability measure; phase-null means measurable with volume zero. Global synchrony means convergence in the rotating frame to a fully synchronized point outside such a null set ([[def-expander-prereq-phase-volume]], [[def-expander-sync-global-synchrony]]).

## Proof

**Given:** The graph, countable choice, and the hypothesis that every equilibrium with positive-semidefinite Hessian is fully synchronized.

**Goal:** Prove that $G$ is globally synchronizing.

1.1 Let $p$ be an equilibrium that is not fully synchronized. The given hypothesis implies that its Hessian $H$ is not positive semidefinite. The energy is $C^2$ by [F1], so $H$ is real symmetric by [F3]. Choose an orthonormal complex eigenbasis of $H$ using [F3]. Its eigenvalues are real: for an eigenvector $v$, self-adjointness makes $v^*Hv$ real and it equals the eigenvalue times $v^*v$. If every eigenvalue were nonnegative, expanding any vector in this orthonormal basis would give $z^*Hz\ge0$, contrary to the choice of $p$. Hence $H$ has a negative eigenvalue, and $p$ is a strict saddle by [F2]. [given, F1, F2, F3, choose, algebra]

2.1 Let $N$ be the set of initial phases whose rotating-frame trajectory converges to a strict saddle. It is phase-null by [F2]. For any initial phase outside $N$, [F2] gives convergence to an equilibrium $p$; step 1.1 shows that $p$ must be fully synchronized, since otherwise the initial phase would belong to $N$. Thus convergence to a fully synchronized point holds outside a phase-null set, and [F4] gives global synchrony. [F2, F4, step 1.1] ∎

## Source notes

The criterion is attributed to the cited article, PDF p. 4, Section 1. The argument above uses the stated mathematical suppliers; the article is not used to prove its own criterion.
