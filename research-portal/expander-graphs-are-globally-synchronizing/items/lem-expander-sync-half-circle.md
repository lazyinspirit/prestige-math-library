---
id: lem-expander-sync-half-circle
title: Half-circle lemma — Lemma 2.9
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-expander-sync-kernel-stability
  - prop-expander-sync-equilibrium-identities
  - def-expander-sync-graph-notation
  - def-expander-sync-states
  - def-expander-sync-daido
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - math:thm-fermat-for-euclidean-local-extrema
  - math:cor-pi-is-the-first-positive-sine-zero
  - math:def-countable-choice
dependency_roles:
  lem-expander-sync-kernel-stability: mathematical-premise
  prop-expander-sync-equilibrium-identities: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:thm-fermat-for-euclidean-local-extrema: mathematical-premise
  math:cor-pi-is-the-first-positive-sine-zero: mathematical-premise
  math:def-countable-choice: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 17–18, Lemma 2.9 and proof
      statement: A stable state on a connected graph with real nonnegative first order
        parameter and all representatives strictly between minus pi over two and
        pi over two has every representative equal to zero.
      hypotheses: The article's finite connected graph, stable state, real nonnegative
        first order parameter, and strict half-circle condition.
      reading_limits: The lemma and its proof in the supplied article text were
        inspected. This reference attributes the claim and proof method; the
        proof below uses the declared mathematical suppliers.
provenance:
  statement: ai-altered
  proof: ai-generated
formulation_deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-states
  - def-expander-sync-daido
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - math:def-countable-choice
argument_deps:
  - lem-expander-sync-kernel-stability
  - prop-expander-sync-equilibrium-identities
  - def-expander-sync-graph-notation
  - def-expander-sync-states
  - def-expander-sync-daido
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - math:thm-fermat-for-euclidean-local-extrema
  - math:cor-pi-is-the-first-positive-sine-zero
  - math:def-countable-choice
dependency_level: 10
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph with nonempty vertex set and possible self-loops. Connected means that any two vertices are joined by a finite path of edges. Let $A$ be its binary adjacency matrix, and let $\theta$ be a stable state: a local minimum on $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ of $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$. Choose real representatives $\theta_x\in(-\pi/2,\pi/2)$, and put $\rho_1=|V|^{-1}\sum_{x\in V}e^{i\theta_x}$. If $\rho_1\in[0,1]$, then $\theta_x=0$ for every $x\in V$.

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-prereq-phase-torus]]

[[def-expander-sync-states]]

[[def-expander-sync-daido]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] The adjacency matrix is symmetric and has entries $0$ or $1$; $A_{x,y}=1$ exactly when $x$ and $y$ are joined by an edge. A self-loop is allowed ([[def-expander-sync-graph-notation]]).

[F2] The phase torus has angular charts with open Euclidean coordinate domains, and a stable state is a local minimum of the displayed smooth energy. A differentiable function at an interior Euclidean local minimum has zero gradient ([[def-expander-prereq-phase-torus]], [[def-expander-sync-states]], [[math:thm-fermat-for-euclidean-local-extrema]]).

[F3] Under countable choice, an energy critical point satisfies $\sum_{x\in V}A_{x,y}\sin(\theta_x-\theta_y)=0$ for every $y$ ([[math:def-countable-choice]], [[prop-expander-sync-equilibrium-identities]]).

[F4] Under the hypotheses in the Statement, for every vertex $y$, $\sum_{x\in V}A_{x,y}K(\theta_x,\theta_y)\ge0$, where $K(a,b)=\sin(|a|-\min\{|b|,\pi/2\})$ ([[lem-expander-sync-kernel-stability]]).

[F5] Sine is positive on $(0,\pi)$. For real $t$, $e^{it}=\cos t+i\sin t$, $e^{it}e^{-it}=1$, and $\sin(-t)=-\sin t$ ([[math:cor-pi-is-the-first-positive-sine-zero]], [[def-expander-prereq-phasor-calculus]]).

## Proof

**Given:** The graph, state, representatives, order parameter and countable choice in the Statement.

**Goal:** Prove that every representative is zero.

1.1 Because $V$ is finite and nonempty, choose $z$ maximizing $|\theta_z|$ and put $c=|\theta_z|$. Then $0\le c<\pi/2$. At any vertex $y$ with $|\theta_y|=c$, [F4] gives $0\le\sum_x A_{x,y}\sin(|\theta_x|-c)$. Every difference $|\theta_x|-c$ lies in $(-\pi,0]$; by [F5] its sine is nonpositive and is strictly negative unless $|\theta_x|=c$. Since the coefficients are nonnegative, every neighbor $x$ of $y$ has $|\theta_x|=c$. Repeating this along a finite path from $z$ to any vertex shows $|\theta_x|=c$ for all $x\in V$. Self-loops cause no exception. [F1, F4, F5, given, algebra]

2.1 By [F2], the local minimum is a critical point: apply the Euclidean extremum theorem in an angular chart. Thus [F3] gives the sine equilibrium identity at every vertex. If $c>0$ and both $S=\{x:\theta_x=c\}$ and $V\setminus S=\{x:\theta_x=-c\}$ are nonempty, connectedness gives an edge between them: a path between the two sets has a first crossing edge. Summing the equilibrium identities over $y\in V\setminus S$, terms with $x\in V\setminus S$ vanish and the remaining terms give $0=\sin(2c)\sum_{y\in V\setminus S}\sum_{x\in S}A_{x,y}$. The double sum is positive and $0<2c<\pi$, contradicting [F5]. Hence, if $c>0$, all representatives have one common value $t\in\{c,-c\}$. [F1, F2, F3, F5, step 1.1, algebra]

3.1 In the common-value case, the definition of $\rho_1$ gives $\rho_1=e^{it}$. Its being real makes $\sin t=0$ by [F5]. If $t\ne0$, then $0<|t|<\pi/2$, so [F5] gives $\sin|t|>0$ and oddness gives $\sin t\ne0$, a contradiction. Therefore $c>0$ is impossible. With $c=0$, step 1.1 gives $\theta_x=0$ for every vertex, as required. [F5, step 1.1, step 2.1, algebra] ∎

## Source notes

Lemma 2.9 and its maximal-absolute-phase argument are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pages 17–18. The proof above separately handles the case in which one of the two phase classes is empty.
