---
id: rem-expander-sync-self-loops
title: Self-loops do not affect Kuramoto dynamics
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-energy
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - prop-expander-sync-energy-derivatives
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-energy: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  prop-expander-sync-energy-derivatives: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 18, opening paragraph of Section 3 and footnote 7; pp. 2–3,
        equations (1.1)–(1.2)
      statement: The article counts a self-loop once in the degree and states that
        self-loops do not affect Kuramoto dynamics because diagonal entries
        cancel in the energy gradient.
      hypotheses: A finite undirected graph with the article's symmetric adjacency
        convention and homogeneous Kuramoto dynamics in the rotating frame.
      reading_limits: The cited passages in the extracted article text were inspected
        for attribution and formulation. The proof below uses the stated
        mathematical suppliers, not the article's assertion as a premise.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 4
---

## Statement

Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, symmetric binary adjacency matrix $A$, and possible self-loops. Let $G^\circ$ be the graph obtained by deleting every self-loop and retaining all other edges. A phase state is $\theta\in(S^1)^V$, with each $S^1$ represented by angles modulo $2\pi$. For the homogeneous Kuramoto energy

$$\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y)),$$

the gradient is taken in the flat angular coordinates. The homogeneous Kuramoto dynamics in the rotating frame is the differential equation $d\theta/dt=-\nabla\mathcal E_G(\theta)$. This equation is unchanged when $G$ is replaced by $G^\circ$: self-loops contribute zero to the gradient, so the two equations have the same solutions on every common time interval. In the degree convention $d(x)=\sum_{y\in V}A_{x,y}$, a self-loop at $x$ is counted once.

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-energy]]

[[def-expander-prereq-phase-torus]]

[[prop-expander-sync-energy-derivatives]]

## Facts & Assumptions

[F1] For the stated graph convention, $A_{x,x}=1$ exactly when $x$ has a self-loop, and $d(x)=\sum_y A_{x,y}$ ([[def-expander-sync-graph-notation]]).

[F2] The energy in the Statement is well defined on phase states; angular lifts provide flat local coordinates ([[def-expander-sync-energy]], [[def-expander-prereq-phase-torus]]).

[F3] For any such graph and phase state, $(\nabla\mathcal E_G)_x=\sum_{y\in V}A_{x,y}\sin(\theta_x-\theta_y)$ in these coordinates ([[prop-expander-sync-energy-derivatives]]).

[F4] The sine function satisfies $\sin 0=0$ ([[def-expander-prereq-phasor-calculus]]).

## Proof

**Given:** A graph $G$, its loop-deleted graph $G^\circ$, and a phase state $\theta$ as in the Statement.

**Goal:** Show equality of the two gradient vector fields and the asserted degree count.

1.1 Let $A^\circ$ be the adjacency matrix of $G^\circ$. It agrees with $A$ off the diagonal and has zero diagonal. Apply [F3] to both graphs in the same local angular coordinates. Their $x$-components differ only by $A_{x,x}\sin(\theta_x-\theta_x)=A_{x,x}\sin 0=0$, using [F4]. Thus their gradients agree at every phase state; [F2] identifies these coordinate expressions with the vector fields on the phase space. [given, F2, F3, F4, algebra]

2.1 The two differential equations therefore have identical right-hand sides at every state, so a differentiable phase path satisfies one exactly when it satisfies the other on the same interval. By [F1], a loop contributes the single summand $A_{x,x}=1$ to $d(x)$, establishing the degree convention. [F1, step 1.1, algebra] ∎

## Source notes

The claim and degree convention are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 18, opening paragraph of Section 3 and footnote 7. The argument above derives the claim from the listed mathematical suppliers.
