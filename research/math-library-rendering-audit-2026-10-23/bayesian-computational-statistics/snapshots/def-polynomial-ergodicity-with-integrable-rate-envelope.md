---
id: def-polynomial-ergodicity-with-integrable-rate-envelope
kind: definition
title: Polynomial ergodicity with an integrable rate envelope
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-iterated-transition-kernels
  - def-measure-kernel-and-probability-kernel
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-total-variation-distance-for-probability-laws
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §2 and Theorem 9"
      url: "https://arxiv.org/pdf/math/0409112"
verification:
  precheck: n/a
axiom_use: "The time-homogeneous Markov-chain supplier uses conditional-expectation classes under AC; no further choice is used here."
---

## Definition

Let $P$ be a probability kernel with invariant probability $\pi$. For $m>0$, say that $P$ has **polynomial total-variation rate of order $m$ with an integrable envelope** if there is a measurable $M:\mathsf X\to[0,\infty)$ with $\pi(M)<\infty$ such that
$$\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le M(x)n^{-m}\quad(x\in\mathsf X,\ n\ge1).$$

This is the specific envelope condition used with the polynomial-rate CLT cases on this page. It does not claim that every definition of polynomial ergodicity in the literature includes integrability of $M$.
