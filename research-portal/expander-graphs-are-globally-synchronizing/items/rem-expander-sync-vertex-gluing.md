---
id: rem-expander-sync-vertex-gluing
title: Synchronization landscape preserved by vertex gluing
kind: remark
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - def-expander-sync-energy
  - def-expander-sync-states
  - def-expander-sync-strict-saddles
  - prop-expander-prereq-one-vertex-landscape-composition
  - math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - math:def-countable-choice
  - def-expander-prereq-loop-compatible-networks
  - math:def-connected-graph-and-connected-component
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  def-expander-sync-energy: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-strict-saddles: mathematical-premise
  prop-expander-prereq-one-vertex-landscape-composition: mathematical-premise
  math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  math:def-countable-choice: mathematical-premise
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 7, Remark 1.7, gluing assertion
      statement: If the energies of two graphs have no spurious local minima and all
        their saddle points are strict, the same properties hold after gluing
        one vertex of each graph.
      hypotheses: The two graph energies have no spurious local minima and all their
        saddle points are strict.
      reading_limits: The supplied article text at Remark 1.7 and the introductory
        terminology was inspected. The article attributes the gluing assertion
        to Canale and Monzon; that underlying source was not independently read.
        This reference attributes the assertion and is not used as its proof.
dependency_level: 6
---

## Statement

Assume countable choice. Let $H$ and $H'$ be finite undirected graphs with nonempty vertex sets, with homogeneous Kuramoto energies $\mathcal E_H$ and $\mathcal E_{H'}$. Identify one vertex of $H$ with one vertex of $H'$ and otherwise keep their vertex sets disjoint, obtaining $G$. Suppose each component energy has no spurious local minima and every critical point that is not a local minimum is a strict saddle. Then $\mathcal E_G$ has no spurious local minima and every critical point that is not a local minimum is a strict saddle.

A phase state assigns an angle modulo $2\pi$ to each vertex. A local minimum is a state whose energy is no greater than that of every state in some neighborhood; it is spurious if its vertex phases are not all equal. A critical point has all first angular partial derivatives zero, and it is a strict saddle if its Hessian has a strictly negative eigenvalue. Here the saddle condition is stated explicitly for all non-minimum critical points.

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-prereq-phase-torus]]

[[def-expander-sync-energy]]

[[def-expander-sync-states]]

[[def-expander-sync-strict-saddles]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] For a finite graph, $\mathcal E(\theta)=\frac12\sum_{x,y}A_{x,y}(1-\cos(\theta_x-\theta_y))$. Its adjacency matrix is symmetric and binary, and the phase space is the finite phase torus ([[def-expander-sync-graph-notation]], [[def-expander-prereq-phase-torus]], [[def-expander-sync-energy]]).

[F2] For real $t$, $e^{it}=\cos t+i\sin t$ and $|e^{it}|=1$; sine and cosine have the stated periodic derivatives and finite sums may be differentiated termwise ([[def-expander-prereq-phasor-calculus]]).

[F3] For two finite connected networks meeting at exactly one vertex, the sum of two $C^2$ phase-difference energies inherits synchronized local minima and a negative Hessian direction at every non-minimum critical point, provided each component has those properties ([[prop-expander-prereq-one-vertex-landscape-composition]]).

[F4] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis ([[math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F5] A symmetric nonnegative adjacency matrix is a finite network. Its loop-free support graph has the same vertices and an edge $\{x,y\}$ exactly when $x\ne y$ and $A_{xy}>0$ ([[def-expander-prereq-loop-compatible-networks]]). Connected components are induced by reachability via paths, equivalently walks; a graph is connected when it is nonempty and every two vertices are reachable. A one-vertex graph is connected ([[math:def-connected-graph-and-connected-component]]). Connectedness of a network here means connectedness of this support graph.

[A1] The graphs and their energies satisfy the hypotheses of the Statement.

## Proof

**Given:** The graphs, identified vertices, and energy hypotheses in the Statement.

**Goal:** Establish both asserted landscape properties for the glued energy.

1.1 For either graph, consider its loop-free support graph from [F5]. Every energy summand is nonnegative: by [F2], $\cos t$ is the real part of a complex number of modulus one, so $\cos t\leq1$. If the support graph were disconnected, fix a vertex $v$ and let $C$ be its connected component. By [F5], $C$ is nonempty and proper. No support edge joins $C$ to its complement: such an edge would extend a walk from $v$ to its other endpoint, contradicting the definition of $C$. Assign phase $0$ on $C$ and phase $\pi$ on its complement. The endpoints of every nonloop edge lie on the same side, and every loop has identical endpoints. Thus every edge has equal endpoint phases and [F1] gives energy zero. This state is a global, hence local, minimum but is not synchronized, contradicting [A1]. Thus both support graphs are connected, which is the connectedness required by [F3]; loops affect neither this support graph nor the energy. [A1, F1, F2, F5]

1.2 By [F1] and [F2], each component energy is a real $C^2$ function of phase differences. Its Hessian in angular coordinates is real symmetric: differentiating an edge term twice gives symmetric mixed coefficients. A negative eigenvalue supplies a negative quadratic-form direction. Thus [A1] gives the component hypotheses of [F3], including a negative Hessian direction at every non-minimum critical point. [A1, F1, F2, algebra]

2.1 The vertex sets of the two component copies meet only at the identified vertex. Their edge sets are disjoint as edge sets except possibly for a loop at that vertex; such a loop contributes zero to the energy. Consequently the glued energy is the sum of the two restricted component energies. Applying [F3] with steps 1.1 and 1.2, every local minimum of $\mathcal E_G$ is synchronized, and every non-minimum critical point has a negative Hessian direction. [F1, F3, step 1.1, step 1.2]

3.1 The glued energy is also a finite sum of the edge terms in [F1], so its angular Hessian is real symmetric as in step 1.2. By [F4], it has an orthonormal eigenbasis. If its quadratic form is negative on a vector, the eigenbasis expansion expresses that value as a weighted sum of eigenvalues with nonnegative squared coefficients; at least one eigenvalue must therefore be negative. The non-minimum critical points in step 2.1 are strict saddles, and its synchronized minima are precisely the non-spurious minima required. [F1, F2, F4, step 1.2, step 2.1, algebra] ∎

## Source notes

The gluing assertion is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF p. 7, Remark 1.7. The proof above uses the declared mathematical suppliers; the article attributes the assertion to Canale and Monzon.
