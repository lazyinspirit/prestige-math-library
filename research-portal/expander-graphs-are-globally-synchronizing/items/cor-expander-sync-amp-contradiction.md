---
id: cor-expander-sync-amp-contradiction
title: Contradiction threshold for amplification
kind: corollary
domain: mathematics
status: draft
origin: pipeline
deps:
  - cor-expander-sync-cor-2-6
  - lem-expander-sync-lem-4-1
  - def-expander-sync-graph-notation
  - def-expander-sync-adjacency-expander
  - def-expander-sync-states
  - def-expander-sync-daido
  - def-expander-sync-h
  - def-expander-sync-amplification-sequences
  - def-expander-sync-phase-arcs
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - math:def-countable-choice
formulation_deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-adjacency-expander
  - def-expander-sync-states
  - def-expander-sync-daido
  - def-expander-sync-h
  - def-expander-sync-amplification-sequences
  - def-expander-sync-phase-arcs
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - math:def-countable-choice
argument_deps:
  - cor-expander-sync-cor-2-6
  - lem-expander-sync-lem-4-1
dependency_roles:
  cor-expander-sync-cor-2-6: mathematical-premise
  lem-expander-sync-lem-4-1: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  def-expander-sync-h: mathematical-premise
  def-expander-sync-amplification-sequences: mathematical-premise
  def-expander-sync-phase-arcs: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:def-countable-choice: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 23, equation (4.2)
      statement: A bound c_M sin²(beta_M) > 5 alpha² n/2 contradicts the upper and
        lower bounds on the total H mass.
      hypotheses: The section's stable-state and amplification-sequence conventions
        and the hypotheses of Corollary 2.6 and Lemma 4.1 apply.
      reading_limits: The supplied article text at Lemma 4.1 and equation (4.2) was
        inspected for attribution. The article is not used as a proof premise.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 14
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, possibly with loops, with $n=|V|>0$ and symmetric binary adjacency matrix $A$. Connected means that every two vertices are joined by a finite edge path. Let $d^*\ge0$ and $\alpha\le1/5$, and suppose $G$ is an $(n,d^*,\alpha)$-expander: $\|A-(d^*/n)J\|\le\alpha d^*$, where $J$ is the all-ones matrix and the norm is the Euclidean operator norm.

Let $\theta$ be a nonsynchronized stable state: the phases are not all equal modulo $2\pi$, and $\theta$ is a local minimum on the phase torus $(\mathbb R/2\pi\mathbb Z)^V$ of $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{xy}(1-\cos(\theta_x-\theta_y))$. Choose representatives $\theta_x\in(-\pi,\pi]$ after a common rotation for which the first order parameter $\rho_1=n^{-1}\sum_x e^{i\theta_x}$ is real and nonnegative. For $0\le\psi\le\pi$, put $\mathcal C_\psi=\{x\in V:|\theta_x|\ge\psi\}$. Let $M\ge0$ be an integer and let $\pi/2=\beta_0>\cdots>\beta_M\ge0$ and $c_0<\cdots<c_M$ be real numbers with $c_0=|\mathcal C_{\pi/2}|$ and $|\mathcal C_{\beta_s}|\ge c_s$ for $0\le s\le M$; these are an amplification sequence.

For $t\in(-\pi,\pi]$, define $H(t)=\sin^2|t|$ when $|t|\le\pi/2$ and $H(t)=1$ when $\pi/2\le|t|\le\pi$. Then $c_M\sin^2\beta_M\le5\alpha^2n/2$. Consequently the additional inequality $c_M\sin^2\beta_M>5\alpha^2n/2$ is incompatible with these hypotheses.

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-adjacency-expander]]

[[def-expander-sync-states]]

[[def-expander-sync-daido]]

[[def-expander-sync-h]]

[[def-expander-sync-amplification-sequences]]

[[def-expander-sync-phase-arcs]]

[[def-expander-prereq-phase-torus]]

[[def-expander-prereq-phasor-calculus]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] For the connected expander and normalized stable state in the statement, the total mass satisfies $\sum_{x\in V}H(\theta_x)\le5\alpha^2n/2$ ([[cor-expander-sync-cor-2-6]]).

[F2] For the nonsynchronized stable state and amplification sequence in the statement, $\sum_{x\in V}H(\theta_x)\ge c_M\sin^2\beta_M$ ([[lem-expander-sync-lem-4-1]]).

## Proof

**Given:** The graph, parameters, normalized nonsynchronized stable state and amplification sequence in the statement, under countable choice.

**Goal:** Establish the threshold inequality and its contradiction consequence.

1.1 The graph is connected and nonempty, the expander condition and $\alpha\le1/5$ hold, and the stable state is normalized as required by [F1]. Hence its total $H$ mass is at most $5\alpha^2n/2$. [F1, given]

2.1 The same state is nonsynchronized and the displayed angles and bounds form the sequence required by [F2], so its total $H$ mass is at least $c_M\sin^2\beta_M$. Combining this with step 1.1 gives $c_M\sin^2\beta_M\le5\alpha^2n/2$. A strict reverse inequality would contradict this bound. [F2, given, step 1.1, algebra] ∎

## Source notes

Equation (4.2) on PDF page 23 of the cited article states the contradiction threshold. The article citation is attribution; the proof above uses the two declared mathematical results.
