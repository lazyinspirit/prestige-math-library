---
id: lem-expander-sync-kernel-three-regions
title: Kernel bounds on three phase regions
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
  - def-expander-sync-phase-arcs
  - lem-expander-sync-kernel-stability
  - def-expander-sync-edge-count
  - math:thm-sine-cosine-signs-monotonicity-and-ranges
  - math:def-countable-choice
  - math:thm-quarter-turn-values-and-shift-formulas
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-sync-energy: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  def-expander-sync-kernel: mathematical-premise
  def-expander-sync-phase-arcs: mathematical-premise
  lem-expander-sync-kernel-stability: mathematical-premise
  def-expander-sync-edge-count: mathematical-premise
  math:thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-quarter-turn-values-and-shift-formulas: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 24, proof of Lemma 4.2, equations (4.3)–(4.4)
      statement: For a vertex in the beta phase tail, the kernel is bounded above on
        the three regions by 1, 0, and sin(gamma-beta), respectively; summing
        gives the displayed edge-count inequality.
      hypotheses: The article's stable configuration and graph conventions, with 0 <
        gamma < beta <= pi/2 and principal phase representatives.
      reading_limits: The extracted text at the cited passage was inspected for
        attribution and the stated case split. This reference is not used as a
        proof premise.
dependency_level: 10
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, possible self-loops and symmetric binary adjacency matrix $A$. Let $\theta$ be a stable phase configuration, meaning a local minimum on $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ of $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$. Choose each $\theta_x\in(-\pi,\pi]$ and suppose $\rho_1=|V|^{-1}\sum_{x\in V}e^{i\theta_x}\in[0,1]$.

For $0<\gamma<\beta\le\pi/2$, let $\mathcal C_\psi=\{x\in V:|\theta_x|\ge\psi\}$, and put $K(\alpha,\eta)=\sin(|\alpha|-\min\{|\eta|,\pi/2\})$. For every $y\in\mathcal C_\beta$, the following bounds hold: $K(\theta_x,\theta_y)\le1$ if $x\in\mathcal C_\beta$; $K(\theta_x,\theta_y)\le0$ if $x\in\mathcal C_\gamma\setminus\mathcal C_\beta$; and $K(\theta_x,\theta_y)\le\sin(\gamma-\beta)$ if $x\in\mathcal C_\gamma^c$.

With $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{x,y}$ and complements relative to $V$, consequently $e(\mathcal C_\beta,\mathcal C_\beta)+\sin(\gamma-\beta)e(\mathcal C_\beta,\mathcal C_\gamma^c)\ge0$.

## Facts & Assumptions

[F1] The graph, phase torus, energy, stability and first order parameter have the meanings stated above; adjacency is symmetric and nonnegative ([[def-expander-sync-graph-notation]], [[def-expander-prereq-phase-torus]], [[def-expander-sync-energy]], [[def-expander-sync-states]], [[def-expander-sync-daido]]).

[F2] The kernel and phase tails are the functions and sets displayed in the Statement. In particular, $\mathcal C_\beta\subseteq\mathcal C_\gamma$ ([[def-expander-sync-kernel]], [[def-expander-sync-phase-arcs]]).

[F3] Sine is increasing on $[-\pi/2,\pi/2]$ and has range contained in $[-1,1]$ ([[math:thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F4] Under the graph, stability, representative, order-parameter and countable-choice hypotheses in the Statement, $\sum_{x\in V}A_{x,y}K(\theta_x,\theta_y)\ge0$ for every $y\in V$ ([[lem-expander-sync-kernel-stability]], [[math:def-countable-choice]]).

[F5] The ordered edge count is $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{x,y}$; symmetry of $A$ gives $e(X,Y)=e(Y,X)$ ([[def-expander-sync-edge-count]], [[def-expander-sync-graph-notation]]).

[F6] For every real $u$, $\sin(u+\pi)=-\sin u$, and $\sin\pi=0$ ([[math:thm-quarter-turn-values-and-shift-formulas]]).

## Proof

**Given:** The graph, stable phase configuration, representatives and angles in the Statement.

**Goal:** Prove the three pointwise kernel bounds and the edge-count inequality.

1.1 From [F6] with $u=0$, $0=\sin\pi=-\sin0$, so $\sin0=0$. Fix $y\in\mathcal C_\beta$ and set $t=\min\{|\theta_y|,\pi/2\}$. Since $|\theta_y|\ge\beta$ and $\beta\le\pi/2$, we have $\beta\le t\le\pi/2$. For every $x$, the kernel is $\sin(|\theta_x|-t)\le1$. If $x\in\mathcal C_\gamma\setminus\mathcal C_\beta$, then $0\le|\theta_x|<\beta\le t$, so $-\pi/2\le|\theta_x|-t\le0$. Sine monotonicity therefore gives $K(\theta_x,\theta_y)\le\sin0=0$. [F2, F3, F6, algebra]

2.1 If $x\in\mathcal C_\gamma^c$, then $0\le|\theta_x|<\gamma$ and $-\pi/2\le|\theta_x|-t<\gamma-\beta<0$. Both $|\theta_x|-t$ and $\gamma-\beta$ lie in $[-\pi/2,\pi/2]$, so sine monotonicity gives $K(\theta_x,\theta_y)\le\sin(\gamma-\beta)$. Together with step 1.1 this proves all three pointwise bounds. [F2, F3, step 1.1, algebra]

3.1 Sum [F4] over $y\in\mathcal C_\beta$. The disjoint sets $\mathcal C_\beta$, $\mathcal C_\gamma\setminus\mathcal C_\beta$ and $\mathcal C_\gamma^c$ partition $V$. Since $A_{x,y}\ge0$, the bounds from steps 1.1 and 2.1 give an upper bound for the resulting sum of $e(\mathcal C_\beta,\mathcal C_\beta)+\sin(\gamma-\beta)e(\mathcal C_\gamma^c,\mathcal C_\beta)$. By [F5] the second count equals $e(\mathcal C_\beta,\mathcal C_\gamma^c)$. The upper bound is therefore nonnegative, as claimed. [F1, F2, F4, F5, step 1.1, step 2.1, algebra] ∎

## Source notes

The three-region bounds and their summed use are attributed to the proof of Lemma 4.2 in [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 24. The proof above uses the stated mathematical suppliers.
