---
id: def-expander-sync-energy
title: Homogeneous Kuramoto energy
kind: definition
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 3, equation (1.2); PDF p. 10, opening of Section 2
      statement: The homogeneous Kuramoto energy is $\mathcal
        E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$ on
        $(S^1)^V$.
      hypotheses: A finite graph $G=(V,E)$ with symmetric adjacency matrix $A$ and a
        phase at each vertex.
      reading_limits: The extracted article text at the cited passages was inspected
        for the formula and its attribution. The citation is not used as a proof
        of well-definedness.
dependency_level: 2
---

## Definition

Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, allowing self-loops, and let $A=(A_{x,y})_{x,y\in V}$ be its symmetric adjacency matrix: $A_{x,y}=1$ when $\{x,y\}\in E$ and $A_{x,y}=0$ otherwise. A phase state is an element $\theta$ of $(S^1)^V$, identified with $\mathbb R^V/(2\pi\mathbb Z)^V$; a lift of $\theta$ is a real vector representing its equivalence class.

The homogeneous Kuramoto energy is the function $\mathcal E_G:(S^1)^V\to\mathbb R$ defined by

$$\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y)).$$

The sum is over ordered pairs of vertices, and the phase differences in the cosine are evaluated using any real lift of $\theta$.

## Definition references

[[def-expander-sync-graph-notation]]

[[def-expander-prereq-phase-torus]]

[[def-expander-prereq-phasor-calculus]]

## Facts & Assumptions

[F1] Two real vectors represent the same phase state exactly when their coordinate differences are integer multiples of $2\pi$ ([[def-expander-prereq-phase-torus]]).

[F2] Cosine is real-valued on real arguments and is unchanged when its argument is shifted by an integer multiple of $2\pi$ ([[def-expander-prereq-phasor-calculus]]).

[F3] The graph has finitely many vertices and a real symmetric binary adjacency matrix, with a diagonal entry for each self-loop ([[def-expander-sync-graph-notation]]).

## Justification

**Given:** A graph and phase state as in the definition, together with two real lifts of that state.

**Goal:** Show that the displayed formula assigns one real number to the phase state independently of the lift.

1.1 By [F1], the two lifts differ coordinatewise by integer multiples of $2\pi$. For any ordered pair $(x,y)$, the corresponding differences of their $x$ and $y$ coordinates therefore differ by an integer multiple of $2\pi$. By [F2], the two cosine values are equal. [given, F1, F2]

2.1 By [F3], the ordered-pair sum has finitely many terms and each coefficient is real; by [F2], each cosine value is real. Thus the formula is a real number. Step 1.1 shows that every summand is unchanged by replacing the lift, so the resulting real number is independent of the lift. This defines the stated function on $(S^1)^V$. [F2, F3, step 1.1] ∎



The formula and its use for the homogeneous model are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 3, equation (1.2), and page 10. The justification uses the mathematical suppliers above.

## Source notes

The formula and its use for the homogeneous model are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 3, equation (1.2), and page 10. The justification uses the mathematical suppliers above.
