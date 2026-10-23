---
id: ex-fd-benchmark-space-time-dimension
kind: example
title: A four-axis benchmark for a two-dimensional transient flow family
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 0
domain: physics
library: physics
physical_scope: "A constructed nonrelativistic Euclidean data-domain example for a family of planar velocity fields; it asserts no numerical result, experiment, or physical prediction."
deps: []
dependency_roles: {}
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
---

## Example

Let $\Omega\subset\mathbb R^2$ be a nonempty open planar spatial region with coordinates $x,y$ in metres, let $I\subset\mathbb R$ be a nonempty open time interval measured in seconds, and let $\Theta\subset(0,\infty)$ be a nonempty open interval of dimensionless Reynolds numbers. Fix a characteristic speed $U>0$ in metres per second and characteristic length $L>0$ in metres. For each $\theta\in\Theta$, set the kinematic viscosity to $\nu(\theta):=UL/\theta$ in square metres per second, so that the Reynolds number $UL/\nu(\theta)$ equals $\theta$. A benchmark family is a continuously differentiable map $u:\Omega\times I\times\Theta\to\mathbb R^2$ whose value is a planar velocity vector in metres per second; no equation or computed value is stipulated. Sampling this family on grids in $x,y,t,\theta$ gives a data array with four independent input axes. For fixed $\theta$, its spatial domain remains $\Omega\subset\mathbb R^2$ and its physical space-time coordinates are $x,y,t$: Reynolds number indexes different simulation settings and is not an additional spatial or time coordinate, and the two output components of $u$ are not input axes.

## Facts & Assumptions

**Given:** The stated nonempty open sets $\Omega$, $I$, and $\Theta$; the fixed positive scales $U$ and $L$; the map $u$; SI units; and the stated interpretation of $\theta$ as Reynolds number.

[A1] The input domain is the product $\Omega\times I\times\Theta\subset\mathbb R^2\times\mathbb R\times\mathbb R$, with coordinates $(x,y,t,\theta)$; $u$ maps this four-coordinate domain to $\mathbb R^2$.

## Verification

1.1 Since $\Omega$, $I$, and $\Theta$ are nonempty open subsets of $\mathbb R^2$, $\mathbb R$, and $\mathbb R$, respectively, their product is open in $\mathbb R^4$ and its independent coordinates are $x,y,t,\theta$. Thus a sample grid that varies all four factors has four input axes. [given, A1, algebra]

2.1 Fixing $\theta$ leaves $\Omega\times I$ with coordinates $x,y,t$, and fixing both $t$ and $\theta$ leaves the spatial slice $\Omega\subset\mathbb R^2$. The codomain $\mathbb R^2$ gives two velocity components but adds no input coordinate. Hence the family has two spatial coordinates, one time coordinate, and one extra dimensionless parameter axis, not four spatial coordinates or four space-time coordinates. [given, A1, step 1.1, algebra] ∎
