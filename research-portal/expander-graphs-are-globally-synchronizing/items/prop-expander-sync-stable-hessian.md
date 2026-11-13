---
id: prop-expander-sync-stable-hessian
title: Second-order necessary conditions for stable states
kind: proposition
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-prereq-phase-torus
  - def-expander-sync-energy
  - def-expander-sync-states
  - def-expander-sync-matrix-order
  - prop-expander-sync-energy-derivatives
  - prop-expander-sync-equilibrium-identities
  - prop-expander-prereq-second-variation-test
  - def-expander-prereq-phasor-calculus
  - math:def-countable-choice
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-sync-energy: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  prop-expander-sync-energy-derivatives: mathematical-premise
  prop-expander-sync-equilibrium-identities: mathematical-premise
  prop-expander-prereq-second-variation-test: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:def-countable-choice: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: Section 2, stability condition and equations (2.5)–(2.6), PDF pp. 10–11
      statement: At a stable state the energy Hessian is positive semidefinite;
        testing its quadratic form on the phase phasors and on a coordinate
        indicator gives inequalities (2.5) and (2.6).
      hypotheses: A stable state of the finite undirected graph model, with the
        article's adjacency and energy conventions.
      reading_limits: The supplied article text at the cited passage was inspected for
        attribution. The proof below uses the declared mathematical suppliers;
        the article is not used as proof of its own claim.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 7
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, with self-loops allowed and symmetric binary adjacency matrix $A$. A phase state is a point $\theta\in(S^1)^V$, with real representatives used in the formulas. Its homogeneous Kuramoto energy is $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$. A stable state means a local minimum of this energy on the phase torus.

At a stable state $\theta$, its Hessian $H=\nabla^2\mathcal E_G(\theta)$ in flat angular coordinates satisfies $H\succeq0$: that is, $\langle f,Hf\rangle\ge0$ for every $f\in\mathbb C^V$, where $\langle f,g\rangle=\sum_x\overline{f(x)}g(x)$. In particular,

$$\sum_{x,y\in V}A_{x,y}\cos(\theta_x-\theta_y)(1-\cos(\theta_x-\theta_y))\ge0.$$

For every $y\in V$, the real coefficient $r_y=\sum_{x\in V}A_{x,y}\cos(\theta_x-\theta_y)$ in the equilibrium identity $\sum_x A_{x,y}e^{i\theta_x}=r_ye^{i\theta_y}$ also satisfies $r_y\ge0$.

## Facts & Assumptions

[F1] The adjacency matrix is real, symmetric and binary; in particular $A_{y,y}\ge0$, including when a self-loop is present ([[def-expander-sync-graph-notation]]).

[F2] The phase torus has local real angular charts with Euclidean flat coordinates, and the energy is the stated well-defined finite sum ([[def-expander-prereq-phase-torus]], [[def-expander-sync-energy]]).

[F3] Under countable choice, a stable state is a local energy minimum and is an equilibrium ([[math:def-countable-choice]], [[def-expander-sync-states]]).

[F4] A $C^2$ real function at a local minimum has a real symmetric Hessian with nonnegative complex quadratic form ([[prop-expander-prereq-second-variation-test]]). The notation $H\succeq0$ expresses this nonnegativity ([[def-expander-sync-matrix-order]]).

[F5] For every complex vertex function $f$, the energy Hessian obeys $\langle f,Hf\rangle=\frac12\sum_{x,y}A_{x,y}\cos(\theta_x-\theta_y)|f(x)-f(y)|^2$; its diagonal entry at $y$ is $H_{y,y}=\sum_{x\ne y}A_{x,y}\cos(\theta_x-\theta_y)$ ([[prop-expander-sync-energy-derivatives]]).

[F6] For real angles, $e^{iu}=\cos u+i\sin u$, $|e^{iu}|=1$, and $e^{i(u-v)}=e^{iu}\overline{e^{iv}}$; the expressions are independent of phase representatives ([[def-expander-prereq-phasor-calculus]]).

[F7] At an equilibrium the neighboring phasor sum has the stated form, with $r_y=\sum_x A_{x,y}\cos(\theta_x-\theta_y)$ ([[prop-expander-sync-equilibrium-identities]]).

## Proof

**Given:** The graph and stable state in the Statement, under countable choice.

**Goal:** Prove Hessian positive semidefiniteness and both displayed necessary inequalities.

1.1 By [F2], choose a local angular chart around $\theta$. In that chart the energy is a finite sum of cosine functions and is $C^2$ by [F6]. The local minimum in [F3] is a local minimum of this coordinate function. Applying [F4] gives $\langle f,Hf\rangle\ge0$ for every complex $f$, hence $H\succeq0$. [F2, F3, F4, F6]

2.1 Take $f(x)=e^{i\theta_x}$. By [F6], $|f(x)-f(y)|^2=2-2\cos(\theta_x-\theta_y)$. Substitution into [F5] and the nonnegativity from step 1.1 give the first inequality. Periodicity in [F6] makes the calculation independent of the chosen representatives. [F5, F6, step 1.1, algebra]

3.1 Fix $y$ and take $f$ to be the coordinate indicator: $f(y)=1$ and $f(x)=0$ for $x\ne y$. Step 1.1 gives $H_{y,y}=\langle f,Hf\rangle\ge0$. By [F5] and $\cos0=1$ from [F6], $r_y=H_{y,y}+A_{y,y}\ge0$, using [F1]. By [F3] and [F7], this is also the coefficient in the stated equilibrium identity. The diagonal term is included even when $y$ has a self-loop; it cancels from the Hessian but is nonnegative in $r_y$. This proves the remaining assertion. [F1, F3, F5, F6, F7, step 1.1, algebra] ∎

## Source notes

The stable-state Hessian condition and the two tests are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Section 2, equations (2.5)–(2.6), PDF pp. 10–11. The argument above derives them from the stated mathematical inputs.
