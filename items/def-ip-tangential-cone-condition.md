---
id: def-ip-tangential-cone-condition
kind: definition
title: Local tangential cone condition
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-nonlinear-forward-map
  - def-frechet-derivative-between-banach-spaces
  - cor-inner-product-induces-a-norm
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, equation (9.6)"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Barbara Kaltenbacher, Frank Schöpfer, and Thomas Schuster, Iterative methods for nonlinear ill-posed problems in Banach spaces, §2.3"
      url: "https://www.f08.uni-stuttgart.de/.content/media/downloads/Mathematik/mathematische_berichte/2008/2008-005.pdf"
verification:
  precheck: n/a
---

## Definition

Let $X,Y$ be real Hilbert spaces, let $U\subseteq X$ be open, and let $F:U\to Y$ be Fréchet differentiable at $x\in U$. For $\delta>0$ such that the closed ball

$$\overline B_\delta(x):=\{x+h:h\in X,\ \|h\|_X\le\delta\}$$

is contained in $U$, the **local tangential cone condition at $x$ on radius $\delta$ with constant $\eta$** holds if $0\le\eta<1$ and

$$\|F(x+h)-F(x)-F'(x)h\|_Y\le\eta\,\|F(x+h)-F(x)\|_Y\qquad(\|h\|_X\le\delta).$$

## Definition references

[[def-ip-nonlinear-forward-map|Nonlinear forward maps between real Hilbert spaces]]

[[def-frechet-derivative-between-banach-spaces|Fréchet differentiability on an open real Banach domain]]

[[cor-inner-product-induces-a-norm|The norm triangle inequality for real inner-product spaces]]

[Christian Clason, *Regularization of Inverse Problems*, equation (9.6)](https://arxiv.org/pdf/2001.00617v2)

[Barbara Kaltenbacher, Frank Schöpfer, and Thomas Schuster, *Iterative methods for nonlinear ill-posed problems in Banach spaces*, §2.3](https://www.f08.uni-stuttgart.de/.content/media/downloads/Mathematik/mathematische_berichte/2008/2008-005.pdf)

## Remarks

This is the one-basepoint local condition: the derivative is fixed at $x$ while $h$ varies over the ball. Some treatments impose a stronger two-point condition uniformly for every pair of points in a set. The constant restriction $0\le\eta<1$ is part of this definition. Fréchet differentiability alone does not imply this condition.
