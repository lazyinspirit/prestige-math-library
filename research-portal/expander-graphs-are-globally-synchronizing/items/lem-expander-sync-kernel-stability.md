---
id: lem-expander-sync-kernel-stability
title: Kernel stability condition — Lemma 2.8
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-prereq-phase-torus
  - def-expander-sync-energy
  - def-expander-sync-states
  - def-expander-sync-daido
  - def-expander-sync-kernel
  - lem-expander-sync-kernel-comparison-cases
  - prop-expander-sync-equilibrium-identities
  - math:def-countable-choice
  - prop-expander-prereq-second-variation-test
  - def-expander-prereq-phasor-calculus
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-sync-energy: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  def-expander-sync-kernel: mathematical-premise
  lem-expander-sync-kernel-comparison-cases: mathematical-premise
  prop-expander-sync-equilibrium-identities: mathematical-premise
  math:def-countable-choice: mathematical-premise
  prop-expander-prereq-second-variation-test: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 16–17, Lemma 2.8, equation (2.14) and proof
      statement: For a stable configuration with the stated phase convention, each
        vertex has a nonnegative adjacency-weighted sum of the kernel.
      hypotheses: The article's finite undirected graph and stable phase
        configuration, with representatives in $(-\pi,\pi]$ and real nonnegative
        first order parameter.
      reading_limits: The supplied article extraction and the cited proof passage were
        inspected for attribution and the case structure. The proof below uses
        the separately stated mathematical suppliers, not the article's claim as
        a premise.
provenance:
  statement: ai-altered
  proof: ai-generated
formulation_deps:
  - def-expander-sync-graph-notation
  - def-expander-prereq-phase-torus
  - def-expander-sync-energy
  - def-expander-sync-states
  - def-expander-sync-daido
  - def-expander-sync-kernel
  - math:def-countable-choice
argument_deps:
  - def-expander-sync-graph-notation
  - def-expander-prereq-phase-torus
  - def-expander-sync-energy
  - def-expander-sync-states
  - def-expander-sync-kernel
  - lem-expander-sync-kernel-comparison-cases
  - prop-expander-sync-equilibrium-identities
  - math:def-countable-choice
  - prop-expander-prereq-second-variation-test
  - def-expander-prereq-phasor-calculus
dependency_level: 9
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, self-loops allowed, and symmetric binary adjacency matrix $A$. A phase state assigns a real angle modulo $2\pi$ to each vertex. Let $\theta$ be stable, meaning a local minimum on the phase torus of $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$, and choose representatives $\theta_x\in(-\pi,\pi]$. Put $n=|V|$ and $\rho_1=n^{-1}\sum_x e^{i\theta_x}$, and suppose $\rho_1\in[0,1]$. Define $K(\alpha,\beta)=\sin(|\alpha|-\min\{|\beta|,\pi/2\})$. Then, for every $y\in V$,

$$\sum_{x\in V}A_{x,y}K(\theta_x,\theta_y)\ge0.$$

## Facts & Assumptions

[F1] The adjacency entries are nonnegative, and the phase torus, energy and stable-state convention are as in the Statement ([[def-expander-sync-graph-notation]], [[def-expander-prereq-phase-torus]], [[def-expander-sync-energy]], [[def-expander-sync-states]]).

[F2] The first Daido order parameter and kernel are the functions displayed in the Statement ([[def-expander-sync-daido]], [[def-expander-sync-kernel]]).

[F3] A real-valued $C^2$ function on an open Euclidean set has zero gradient at a local minimum ([[prop-expander-prereq-second-variation-test]]).

[F4] Under the stated graph, stability and representative hypotheses, if $0\le\theta_y\le\pi/2$ then $K(\theta_x,\theta_y)\ge\sin(\theta_x-\theta_y)$ for every $x$; if $-\pi/2\le\theta_y\le0$ then $K(\theta_x,\theta_y)\ge-\sin(\theta_x-\theta_y)$ for every $x$. If $|\theta_y|\ge\pi/2$, the entire kernel sum is nonnegative ([[lem-expander-sync-kernel-comparison-cases]]).


[F5] Under countable choice, an equilibrium is a critical point of the energy, and at an equilibrium $\sum_x A_{x,y}\sin(\theta_x-\theta_y)=0$ for every $y$ ([[math:def-countable-choice]], [[def-expander-sync-states]], [[prop-expander-sync-equilibrium-identities]]).

[F6] Sine and cosine are continuously differentiable, with $\sin'=\cos$ and $\cos'=-\sin$; finite sums may be differentiated termwise ([[def-expander-prereq-phasor-calculus]]).

## Proof

**Given:** The graph, stable state, representatives, kernel and countable choice in the Statement.

**Goal:** Prove the displayed inequality for every vertex $y$.

1.1 Choose a local angular chart around $\theta$ as in [F1]. In this chart the energy is the finite cosine sum in the Statement, so it is a real-valued $C^2$ function on an open Euclidean box by [F6]. The local minimum $\theta$ is an interior local minimum of this coordinate function. By [F3] its gradient vanishes; the flat angular coordinates in [F1] identify this with vanishing of the energy gradient. Thus $\theta$ is an equilibrium by [F5], and [F5] gives $\sum_x A_{x,y}\sin(\theta_x-\theta_y)=0$ for every $y$. [F1, F3, F5, F6]

2.1 Fix $y\in V$. If $0\le\theta_y\le\pi/2$, multiply the first pointwise comparison in [F4] by the nonnegative $A_{x,y}$ and sum over $x$. The right-hand side is zero by step 1.1, so the kernel sum is nonnegative. [F1, F4, step 1.1, algebra]

3.1 If $-\pi/2\le\theta_y\le0$, the second comparison in [F4], nonnegativity of the adjacency entries and step 1.1 similarly bound the kernel sum below by zero. If $|\theta_y|\ge\pi/2$, its nonnegativity follows directly from [F4]. These cases together with step 2.1 cover $(-\pi,\pi]$, including the endpoints, proving the claim. The stated condition on $\rho_1$ is retained from the article but is not needed for this deduction. [F1, F4, step 1.1, step 2.1, algebra] ∎

## Source notes

Lemma 2.8, equation (2.14), of [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pages 16–17, attributes the claim. The deduction above uses the stated suppliers.
