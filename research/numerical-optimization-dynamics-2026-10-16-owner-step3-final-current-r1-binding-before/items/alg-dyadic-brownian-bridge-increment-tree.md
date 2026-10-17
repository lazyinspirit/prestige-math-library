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
    - title: "Mike Giles, Monte Carlo Methods, Module 4: Monte Carlo path simulation, Brownian bridge, pp. 27–30"
      url: "https://people.maths.ox.ac.uk/~gilesm/mc/module_4/module_4_1.pdf"
---

## Definition

Assume the Axiom of Choice as in the finite-dimensional Gaussian and Brownian
interfaces. Let $m\ge1$ be a finite integer. A node represents an interval
$[u,u+h]$, where $h>0$, and has an already sampled parent increment
$\Delta W\in\mathbb R^m$. Draw a fresh
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

Conditional on a fixed parent, the child sum is fixed and their conditional
cross-covariance is $-(h/4)I_m$, so they are not conditionally independent.
The exact unconditional Brownian increment laws at fixed dyadic depth are
proved separately on the A page; this procedure makes no law claim for a
data-dependent set of requested leaves.
