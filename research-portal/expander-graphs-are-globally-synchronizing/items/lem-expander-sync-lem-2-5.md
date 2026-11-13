---
id: lem-expander-sync-lem-2-5
title: Tractable order parameter inequalities — Lemma 2.5
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
  - lem-expander-sync-order-cubic
  - lem-expander-sync-lem-2-1
  - cor-expander-sync-cor-2-4
  - math:def-countable-choice
formulation_deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-adjacency-expander
  - def-expander-sync-states
  - def-expander-sync-daido
  - prop-expander-sync-daido-properties
  - math:def-countable-choice
argument_deps:
  - lem-expander-sync-order-cubic
  - lem-expander-sync-lem-2-1
  - cor-expander-sync-cor-2-4
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  prop-expander-sync-daido-properties: mathematical-premise
  lem-expander-sync-order-cubic: mathematical-premise
  lem-expander-sync-lem-2-1: mathematical-premise
  cor-expander-sync-cor-2-4: mathematical-premise
  math:def-countable-choice: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 15–16, Lemma 2.5 and proof; p. 11, Section 2.1 standing
        conventions
      statement: For a stable state on an expander with alpha at most 1/5, the
        normalized first order parameter satisfies rho_1 squared at least 1-3
        alpha, and the second satisfies absolute rho_2 at least 1-5 alpha
        squared.
      hypotheses: The article's Section 2.1 uses a connected graph and normalizes the
        first order parameter to be real and nonnegative.
      reading_limits: The supplied extracted article text at the lemma, proof and
        standing conventions was inspected. This reference attributes the
        article claim; the proof below uses the declared mathematical suppliers.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 12
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, possibly with loops, with $n=|V|>0$ and symmetric binary adjacency matrix $A$. Connected means that every two vertices are joined by a finite edge path. Let $d^*\ge0$ and $0\le\alpha\le1/5$, and suppose $G$ is an $(n,d^*,\alpha)$-expander: $\|A-(d^*/n)J\|\le\alpha d^*$, where $J$ is the all-ones matrix and the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of the energy $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{xy}(1-\cos(\theta_x-\theta_y))$. For $k\ge1$ put $\rho_k(\theta)=n^{-1}\sum_{x\in V}e^{ik\theta_x}$, using real representatives of the phases, and choose a common rotation so that $\rho_1$ is real and nonnegative. Then $\rho_1^2\ge1-3\alpha$ and $|\rho_2|\ge1-5\alpha^2$.

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-adjacency-expander]]

[[def-expander-sync-states]]

[[def-expander-sync-daido]]

[[prop-expander-sync-daido-properties]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] Under the stated hypotheses and normalization, $X=\rho_1^2>0.431$ ([[lem-expander-sync-order-cubic]]).

[F2] For the same connected expander and stable state, when $\rho_1$ is real and positive, $|\rho_2|\ge1-2\alpha^2/\rho_1^2$ ([[cor-expander-sync-cor-2-4]]).

[F3] For the same graph and stable state, $\rho_1^2\ge(1+|\rho_2|^2)/2-2\alpha$ ([[lem-expander-sync-lem-2-1]]).

## Proof

**Given:** The connected expander, stable state, normalized order parameters, and parameter range in the Statement, under countable choice.

**Goal:** Prove both stated order-parameter bounds.

1.1 By [F1], $\rho_1$ is positive and $2/\rho_1^2<2000/431<5$. Therefore [F2] gives $|\rho_2|\ge1-5\alpha^2$. Since $0\le\alpha\le1/5$, the right side is at least $4/5$ and in particular is nonnegative. [F1, F2, given, algebra]

2.1 Because both sides of the bound in step 1.1 are nonnegative, squaring preserves it. Substituting into [F3] yields $\rho_1^2\ge1-2\alpha-5\alpha^2+(25/2)\alpha^4$. The assumption $0\le\alpha\le1/5$ gives $5\alpha^2\le\alpha$, while the fourth-power term is nonnegative. Thus $\rho_1^2\ge1-3\alpha$, completing both conclusions. [F3, step 1.1, given, algebra] ∎

## Source notes

The statement is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Lemma 2.5. The cubic supplier treats the endpoint $\alpha=0$ separately; the argument above uses its proved estimate rather than importing the article's claim as a premise.
