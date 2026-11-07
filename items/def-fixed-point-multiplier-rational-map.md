---
id: def-fixed-point-multiplier-rational-map
kind: definition
title: Multiplier of a fixed point of a rational map on the projective line
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-rational-map-on-projective-line-degree
  - def-algebraic-closure
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Laura DeMarco, Bifurcations, intersections, and heights, §2"
      url: "https://msp.org/ant/2016/10-5/ant-v10-n5-p.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a field, let $\overline K$ be an algebraic closure, and let
$\phi:\mathbb P^1_K\to\mathbb P^1_K$ be a rational self-map. At a fixed
point $a\in\mathbb P^1(\overline K)$, choose the coordinate $u=z-a$ if
$a$ is finite and $u=1/z$ if $a=\infty$. Express $\phi$ in this same local
coordinate at its fixed point and write its formal local expansion as
$$u\circ\phi\circ u^{-1}(s)=\lambda s+R(s),$$
where $R(s)$ has no constant or linear term. The coefficient
$\lambda\in\overline K$ is the **multiplier** of $\phi$ at $a$.

## Definition references

[[def-rational-map-on-projective-line-degree]]

[[def-algebraic-closure]]
