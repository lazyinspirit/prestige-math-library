---
id: prop-expander-sync-gradient-flow
title: Rotating-frame gradient formulation
kind: proposition
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-kuramoto-system
  - def-expander-sync-energy
  - prop-expander-sync-energy-derivatives
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - def-expander-prereq-gradient-trajectories
  - def-expander-prereq-rotation-reduction
  - math:def-countable-choice
dependency_roles:
  def-expander-sync-kuramoto-system: mathematical-premise
  def-expander-sync-energy: mathematical-premise
  prop-expander-sync-energy-derivatives: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  def-expander-prereq-gradient-trajectories: mathematical-premise
  def-expander-prereq-rotation-reduction: mathematical-premise
  math:def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 2–3, Section 1, rotating frame and equation (1.2)
      statement: For common intrinsic frequency, the rotating-frame Kuramoto dynamics
        are the downward gradient flow of the graph energy.
      hypotheses: The homogeneous graph Kuramoto system has the same intrinsic
        frequency at every vertex.
      reading_limits: The supplied extracted article text at the cited passage was
        inspected for attribution. The article assertion is not used as a proof.
dependency_level: 4
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set and symmetric adjacency matrix $A$, allowing self-loops. Let $\theta:\mathbb R\to T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ be a trajectory of the graph Kuramoto system with common intrinsic frequency $\omega\in\mathbb R$. Thus, in local real angular lifts, $\dot\theta_x=\omega-\sum_{y\in V}A_{x,y}\sin(\theta_x-\theta_y)$.

Define the rotating-frame state $\phi(t)=R_{-\omega t}\theta(t)$, meaning $\phi_x(t)=\theta_x(t)-\omega t$ modulo $2\pi$ for every $x$. Equip $T_V$ with its flat metric, and define the homogeneous Kuramoto energy by $\mathcal E_G(\phi)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\phi_x-\phi_y))$. Then $\phi$ is a downward gradient trajectory: $\dot\phi=-\nabla\mathcal E_G(\phi)$. Conversely, adding $\omega t$ to every coordinate of such a trajectory gives a trajectory of the homogeneous Kuramoto system.

## Statement references

[[math:def-countable-choice]]

[[def-expander-sync-kuramoto-system]]

[[def-expander-prereq-phase-torus]]

[[def-expander-prereq-rotation-reduction]]

[[def-expander-sync-energy]]

[[def-expander-prereq-gradient-trajectories]]

## Facts & Assumptions

[F1] In local angular lifts the homogeneous system has components $\dot\theta_x=\omega-\sum_y A_{x,y}\sin(\theta_x-\theta_y)$; under countable choice its trajectories are defined for all real time ([[def-expander-sync-kuramoto-system]], [[math:def-countable-choice]]).

[F2] The phase torus is the quotient by coordinatewise integer multiples of $2\pi$; its angular chart transitions are locally translations and its flat metric has Euclidean coefficients ([[def-expander-prereq-phase-torus]]). Diagonal rotation adds one common phase to every coordinate ([[def-expander-prereq-rotation-reduction]]).

[F3] Sine is unchanged by shifting an argument by an integer multiple of $2\pi$, and differentiable real functions satisfy the sum and scalar multiplication rules ([[def-expander-prereq-phasor-calculus]]).

[F4] For this graph and energy, the flat gradient has components $(\nabla\mathcal E_G(\phi))_x=\sum_{y\in V}A_{x,y}\sin(\phi_x-\phi_y)$ ([[def-expander-sync-energy]], [[prop-expander-sync-energy-derivatives]]).

[F5] A downward gradient trajectory is an integral curve of the negative gradient; for a smooth potential on this compact phase torus, countable choice gives a unique such maximal trajectory defined on $\mathbb R$ ([[def-expander-prereq-gradient-trajectories]], [[math:def-countable-choice]]).

## Proof

**Given:** The graph, common frequency, homogeneous trajectory $\theta$ and rotating-frame state $\phi$ in the Statement.

**Goal:** Prove the negative-gradient equation for $\phi$ and the converse transformation.

1.1 Fix a time and choose local real angular lifts $u_x$ of $\theta_x$. By [F2], $v_x(t)=u_x(t)-\omega t$ locally lifts $\phi_x$, and $v_x-v_y=u_x-u_y$. The derivative rules and homogeneous equation give $\dot v_x=\dot u_x-\omega=-\sum_y A_{x,y}\sin(v_x-v_y)$. This calculation is independent of lift choices by the translation transitions and sine periodicity in [F2] and [F3]. [given, F1, F2, F3]

2.1 By [F4], the right side in step 1.1 is $-(\nabla\mathcal E_G(\phi))_x$ in every coordinate. Thus $\phi$ is an integral curve of the negative gradient. It is defined for all real time by [F1], so it is maximal; [F5] identifies it as the downward gradient trajectory through its initial state. Conversely, for a downward gradient trajectory with local lifts $v_x$, put $u_x=v_x+\omega t$. The same derivative and difference identities yield $\dot u_x=\omega-\sum_y A_{x,y}\sin(u_x-u_y)$, which is the homogeneous system. The quotient construction makes these local equations independent of lifts. [F1, F2, F3, F4, F5, step 1.1] ∎

## Source notes

The rotating-frame formulation is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pages 2–3. The proof above uses the stated mathematical suppliers.
