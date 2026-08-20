---
id: def-maximal-ode-solution
kind: definition
title: "Extensions, maximal solutions, maximal intervals, and global solutions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-first-order-ode-initial-value-problem-and-solution, def-interval]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Definition

Let $x:I\to\mathbb R^n$ and $y:J\to\mathbb R^n$ solve the same IVP. The solution $y$ is an **extension** of $x$ when $I\subseteq J$ and $y|_I=x$. It is a proper extension when $I\subsetneq J$.

A solution is **maximal** when it has no proper extension. Its domain is its **maximal interval of existence**. A solution is **global** when its domain is the entire time projection allowed by the ODE domain; for a vector field on $\mathbb R\times\mathbb R^n$, this means domain $\mathbb R$.
