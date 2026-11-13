---
id: lem-author-73027818342b-regular-lemma-extension
title: Both tractable inequalities at the regular endpoint
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-adjacency-expander
  - def-expander-sync-states
  - def-expander-sync-daido
  - prop-expander-sync-daido-properties
  - def-expander-sync-h
  - def-expander-sync-centered-matrices
  - def-expander-sync-matrix-order
  - def-expander-prereq-phasor-calculus
  - math:def-countable-choice
  - lem-author-73027818342b-regular-endpoint-bootstrap
  - cor-expander-sync-cor-2-4
  - lem-expander-sync-lem-2-1
formulation_deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-adjacency-expander
  - def-expander-sync-states
  - def-expander-sync-daido
  - prop-expander-sync-daido-properties
  - def-expander-sync-h
  - def-expander-sync-centered-matrices
  - def-expander-sync-matrix-order
  - def-expander-prereq-phasor-calculus
  - math:def-countable-choice
argument_deps:
  - lem-author-73027818342b-regular-endpoint-bootstrap
  - cor-expander-sync-cor-2-4
  - lem-expander-sync-lem-2-1
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  prop-expander-sync-daido-properties: mathematical-premise
  def-expander-sync-h: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:def-countable-choice: mathematical-premise
  lem-author-73027818342b-regular-endpoint-bootstrap: mathematical-premise
  cor-expander-sync-cor-2-4: mathematical-premise
  lem-expander-sync-lem-2-1: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 11
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, with $n=|V|>0$, symmetric binary adjacency matrix $A$, and self-loops allowed and counted once in each row sum. Suppose every row sum is $d\ge0$, let $\alpha\ge0$, and assume $\|\Delta\|\le\alpha d$, where $\Delta=A-(d/n)J$ and $J$ is the all-ones matrix; the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of $\mathcal E_G(\theta)=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$. Choose representatives in $(-\pi,\pi]$ after common rotation so that $\rho_1\ge0$ is real, where $\rho_k=n^{-1}\sum_xe^{ik\theta_x}$. Put $X=\rho_1^2$, $r=|\rho_2|$, and $M=n^{-1}\sum_x H(\theta_x)$, where $H(t)=\sin^2|t|$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$.

For $0\le\alpha\le0.24585$, one has $X\ge1-3\alpha$ and $r\ge1-5\alpha^2$.

## Facts & Assumptions

[F1] The rational bootstrap gives $X\ge451/1000>2/5$ ([[lem-author-73027818342b-regular-endpoint-bootstrap]]).

[F2] Since $\rho_1>0$, Corollary 2.4 gives $r\ge1-2\alpha^2/X$ ([[cor-expander-sync-cor-2-4]]).

[F3] Regular Lemma 2.1 gives $X\ge(1+r^2)/2-3\alpha/2$ ([[lem-expander-sync-lem-2-1]]).

[F10] Definition or convention used in the Statement: [[def-expander-sync-graph-notation]].

[F11] Definition or convention used in the Statement: [[def-expander-sync-adjacency-expander]].

[F12] Definition or convention used in the Statement: [[def-expander-sync-states]].

[F13] Definition or convention used in the Statement: [[def-expander-sync-daido]].

[F14] Definition or convention used in the Statement: [[prop-expander-sync-daido-properties]].

[F15] Definition or convention used in the Statement: [[def-expander-sync-h]].

[F16] Definition or convention used in the Statement: [[def-expander-sync-centered-matrices]].

[F17] Definition or convention used in the Statement: [[def-expander-sync-matrix-order]].

[F18] Definition or convention used in the Statement: [[def-expander-prereq-phasor-calculus]].

[F19] Definition or convention used in the Statement: [[math:def-countable-choice]].

## Proof

**Given:** The graph, stable normalized state, parameters and notation in the Statement.

**Goal:** Establish all the asserted estimates.

1.1 By [F1], $\rho_1>0$ and $2/X<5$. Thus [F2] gives $r\ge1-5\alpha^2$. Also $5\alpha^2<5(1/4)^2<1$, so the new right side is positive. [F1, F2, given, algebra]

2.1 Square the nonnegative lower bound of step 1.1 and substitute into [F3] to obtain $X\ge1-3\alpha/2-5\alpha^2+(25/2)\alpha^4$. Since $\alpha\le0.24585<3/10$, one has $5\alpha^2\le3\alpha/2$. Discard the nonnegative fourth-power term to conclude $X\ge1-3\alpha$. Together with step 1.1, this proves both original Lemma 2.5 conclusions throughout the stated range. [F3, step 1.1, given, algebra] ∎
