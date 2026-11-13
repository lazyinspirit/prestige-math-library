---
id: def-expander-sync-global-synchrony
title: Globally synchronizing graph — Definition 1.1
kind: definition
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-prereq-phase-torus
  - def-expander-sync-kuramoto-system
  - def-expander-prereq-rotation-reduction
  - def-expander-sync-states
  - def-expander-prereq-phase-volume
  - math:def-countable-choice
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-sync-kuramoto-system: mathematical-premise
  def-expander-prereq-rotation-reduction: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  math:def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 2–3, rotating-frame discussion and Definition 1.1
      statement: In the rotating-frame homogeneous Kuramoto model, a graph is globally
        synchronizing when a uniformly chosen initial state converges to a fully
        synchronized state with probability one.
      hypotheses: The graph Kuramoto model has a common intrinsic frequency, and the
        initial state is uniform on the finite product of circles.
      reading_limits: The extracted article text at the rotating-frame discussion and
        Definition 1.1 was inspected for formulation and attribution. The
        article is not used as proof of the justification.
dependency_level: 6
---

## Definition

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, at most one edge between any two vertices, and possible self-loops. Its adjacency matrix has $A_{x,y}=1$ if $\{x,y\}\in E$ and $A_{x,y}=0$ otherwise. The phase space is $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$, identified with $(S^1)^V$, with its flat distance $d$. A phase state $q\in T_V$ is fully synchronized if $q_x=q_y$ in $S^1$ for every $x,y\in V$.

For each initial state $u\in T_V$, let $\theta^u$ be the unique trajectory through $u$ of the homogeneous Kuramoto system with common intrinsic frequency $\omega\in\mathbb R$: in local real angular lifts, $\dot\theta_x=\omega-\sum_{y\in V}A_{x,y}\sin(\theta_x-\theta_y)$. Its rotating-frame trajectory is $\phi^u_x(t)=\theta^u_x(t)-\omega t$ modulo $2\pi$. Both trajectories are defined for every real $t$.

Let $\mu$ be normalized phase volume: for $n=|V|$ and the quotient map $q:\mathbb R^V\to T_V$, it assigns a phase-measurable set $B$ the value $(2\pi)^{-n}\lambda_n(q^{-1}(B)\cap(-\pi,\pi]^V)$. A uniformly chosen initial state has law $\mu$. The graph $G$ is globally synchronizing if, outside a phase-measurable set $N$ with $\mu(N)=0$, every initial state $u$ has a fully synchronized state $s=s(u)$ such that $d(\phi^u(t),s)\to0$ as $t\to\infty$. Equivalently, the rotating-frame trajectory from a uniformly chosen initial state converges to a fully synchronized state with probability one. The limiting state may depend on $u$.

## Definition references

[[math:def-countable-choice]]

[[def-expander-sync-graph-notation]]

[[def-expander-prereq-phase-torus]]

[[def-expander-sync-kuramoto-system]]

[[def-expander-prereq-rotation-reduction]]

[[def-expander-sync-states]]

[[def-expander-prereq-phase-volume]]

## Justification

The graph convention gives the stated symmetric adjacency matrix. The quotient construction makes phase equality, the flat distance, and the coordinatewise subtraction used in the rotating frame well defined. Under countable choice, the Kuramoto system supplies a unique trajectory for every initial state, defined for all real time; subtracting the common rotation gives the stated rotating-frame trajectory. Fully synchronized means equality of all phase coordinates, as specified above ([[def-expander-sync-graph-notation]], [[def-expander-prereq-phase-torus]], [[math:def-countable-choice]], [[def-expander-sync-kuramoto-system]], [[def-expander-prereq-rotation-reduction]], [[def-expander-sync-states]]).

Normalized phase volume is a complete probability measure, and the uniform initial-state law is that measure. The displayed null-exception formulation therefore says exactly that the event of convergence to some fully synchronized point has probability one: its complement is a subset of the null set $N$ and is measurable by completeness. Conversely, if that event has probability one, its measurable complement can be taken as $N$. This definition asserts point convergence, not merely that the distance to the set of synchronized states tends to zero ([[def-expander-prereq-phase-volume]]).

## Source notes

The definition and its rotating-frame context are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pages 2–3, Definition 1.1. The justification uses the mathematical suppliers above; the article is cited for attribution.
