---
id: alg-dyadic-brownian-bridge-increment-tree
kind: algorithm
title: Dyadic Brownian bridge increment tree
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-d-dimensional-brownian-motion
  - def-multivariate-normal-law
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, §8.8, Algorithm 8.23"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Definition

Assume the Axiom of Choice as in the finite-dimensional Gaussian and Brownian
interfaces. Let a node represent an interval $[u,u+h]$, where $h>0$, and let
$\Delta W\in\mathbb R^m$ be its already sampled parent increment. Draw a fresh
vector $Z\sim N_m(0,(h/4)I_m)$ independently of the parent and of every
innovation used at another node. Store the two child increments
$$\Delta W_L=\tfrac12\Delta W+Z,\qquad \Delta W_R=\tfrac12\Delta W-Z.$$

For a finite ordered list of $q\in\mathbb N_0$ split requests, each naming an
existing leaf, apply the rule once to each requested leaf and retain every
parent. Process a rejected trial's left child before its right child; if a
child is later refined, draw a new independent innovation for it. Each request
replaces one leaf by two children, so the result is a finite rooted tree with
the sampled increments, interval lengths, and left-to-right order. Never
discard a sampled parent and redraw a replacement for the same interval. The
procedure assigns increments at dyadic tree nodes; it does not by itself
define values at nondyadic times or prove that the node-selection rule is
predictable. In an adaptive run, a finite work budget supplies a finite list
of requests.

The independence assertion for the two children is unconditional before the
parent is revealed. Conditional on a fixed parent, their sum is fixed and their
conditional covariance is $-(h/4)I_m$; they are not conditionally independent.
The exact fixed-depth Brownian increment law is proved separately on the A page.
