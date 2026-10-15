---
id: def-fixed-interval-gaussian-smoothing-law
kind: definition
title: Fixed-interval smoothing law in a linear-Gaussian model
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-state-space-filtering-laws
justified_by: []
axiom_use: Assume AC through the finite-horizon Gaussian model and the state-space conditional-law conventions. This definition makes no additional choice and asserts no existence.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 8, §§8.1–8.2"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Kody Law, Andrew M. Stuart, and Konstantinos Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 3, §3.1"
      url: "https://arxiv.org/pdf/1506.07825"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Assume AC and fix a finite-horizon linear-Gaussian state-space model
([[def-linear-gaussian-state-space-model-with-independent-noises]]) with
states $X_0,\ldots,X_T$, observations $Y_1,\ldots,Y_T$, and Borel observation
space $\mathsf Y_{1:T}=\mathbb R^{p_1}\times\cdots\times\mathbb R^{p_T}$,
with the empty product a singleton when $T=0$.
For $0\le k\le T$, a **fixed-interval smoothing kernel for $X_k$** is an
everywhere-defined probability kernel
$$\psi_{k|T}:\mathsf Y_{1:T}\longrightarrow\mathbb R^{d_k}$$
whose composition with the full observation vector $Y_{1:T}$ is a regular
conditional distribution of $X_k$ given $\sigma(Y_{1:T})$. Thus it is the
single-time marginal smoothing law after all observations through time $T$
are supplied. The full-path smoothing kernel and its version convention are
defined in [[def-state-space-filtering-laws]].

This definition does not assert that such a kernel exists or is unique at
observation values in a null set. The theorem on this page constructs a
Gaussian version under its explicit forecast and innovation assumptions.
