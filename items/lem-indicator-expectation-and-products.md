---
id: lem-indicator-expectation-and-products
kind: lemma
title: "Indicators turn event probabilities, intersections, and finite counts into expectations and products"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-indicator-random-variable, def-expectation-on-a-finite-probability-space, def-finite-sum]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Lemma 3.1.3"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "M. Bucic, Probabilistic Method, Section 2.1"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

For every event $A$, $\mathbb E[\mathbf1_A]=\mathbb P(A)$. For every finite family $(A_i)_{i\in I}$,
$$\prod_{i\in I}\mathbf1_{A_i}=\mathbf1_{\cap_{i\in I}A_i},$$
and $\sum_{i\in I}\mathbf1_{A_i}(\omega)$ is the number of events $A_i$ that contain $\omega$. The empty product is $1$ and the empty sum is $0$.

## Facts & Assumptions

**Given:** Events $A$ and $(A_i)_{i\in I}$ in one finite probability space.

[L1] The indicator of an event is $1$ on the event and $0$ off it ([[def-indicator-random-variable]]).

[L2] Expectation is the finite weighted sum over outcomes ([[def-expectation-on-a-finite-probability-space]]).

[L3] Empty finite sums and products are $0$ and $1$ ([[def-finite-sum]]).

## Proof

**Proof technique:** direct.

1.1 Expanding $\mathbb E[\mathbf1_A]$ leaves exactly the weights of outcomes in $A$, hence equals $\mathbb P(A)$. [L1, L2]

1.2 At an outcome $\omega$, the product $\prod_i\mathbf1_{A_i}(\omega)$ is $1$ exactly when $\omega$ belongs to every $A_i$, and is otherwise $0$. [L1]

1.3 At $\omega$, each summand $\mathbf1_{A_i}(\omega)$ contributes one exactly when $\omega\in A_i$, so their sum counts those events. [L1]

2.1 Steps 1.2 and 1.3 also give the stated empty conventions by [L3]. [step 1.1, step 1.2, step 1.3, L3] ∎
