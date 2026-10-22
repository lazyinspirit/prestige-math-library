---
id: def-ip-nonlinear-forward-map
kind: definition
title: Nonlinear forward maps between Hilbert spaces
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-forward-map-and-solution-classes
  - def-hilbert-space
  - def-frechet-derivative-between-banach-spaces
  - lem-the-frechet-derivative-is-unique
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 9"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Barbara Kaltenbacher, Frank Schöpfer, and Thomas Schuster, Iterative methods for nonlinear ill-posed problems in Banach spaces, §1"
      url: "https://www.f08.uni-stuttgart.de/.content/media/downloads/Mathematik/mathematische_berichte/2008/2008-005.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $X$ and $Y$ be real Hilbert spaces and let $U\subseteq X$ be a nonempty open set in the norm topology. A **nonlinear forward model on Hilbert spaces** is a map $F:U\to Y$; no linearity is assumed, and linear maps are allowed as special cases. For $y\in Y$, its exact solution set is

$$S_F(y):=\{x\in U:F(x)=y\}.$$

A point $x^\dagger\in U$ generates the exact datum $y=F(x^\dagger)$. When $F$ is Fréchet differentiable at $x\in U$, write $F'(x):X\to Y$ for its unique bounded real-linear derivative.

## Definition references

[[def-ip-forward-map-and-solution-classes|General forward-map and exact-solution interface]]

[[def-hilbert-space|Real Hilbert spaces]]

[[def-frechet-derivative-between-banach-spaces|Fréchet derivative on an open real Banach domain]]

[[lem-the-frechet-derivative-is-unique|Uniqueness of the Fréchet derivative]]

[Christian Clason, *Regularization of Inverse Problems*, Chapter 9](https://arxiv.org/pdf/2001.00617v2)

[Barbara Kaltenbacher, Frank Schöpfer, and Thomas Schuster, *Iterative methods for nonlinear ill-posed problems in Banach spaces*, §1](https://www.f08.uni-stuttgart.de/.content/media/downloads/Mathematik/mathematische_berichte/2008/2008-005.pdf)
