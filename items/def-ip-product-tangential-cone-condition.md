---
id: def-ip-product-tangential-cone-condition
kind: definition
title: Product-type tangential cone condition
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-nonlinear-forward-map
  - def-frechet-derivative-between-banach-spaces
  - def-ip-tangential-cone-condition
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Assumption 11.10 and equation (11.23)"
      url: "https://arxiv.org/pdf/2001.00617v2"
verification:
  precheck: n/a
---

## Definition

Let $X,Y$ be real Hilbert spaces, let $U\subseteq X$ be open, and let
$F:U\to Y$ be continuously Fréchet differentiable, meaning that $F$ is
Fréchet differentiable at each point of $U$ and $x\mapsto F'(x)$ is continuous
in operator norm. For a subset $V\subseteq U$ and a constant $c>0$, the
**product-type tangential cone condition on $V$ with constant $c$** is the
requirement that, for every $x,\tilde x\in V$,

$$\|F(x)-F(\tilde x)-F'(x)(x-\tilde x)\|_Y\le c\|x-\tilde x\|_X\|F(x)-F(\tilde x)\|_Y.$$

## Definition references

[[def-ip-nonlinear-forward-map|Nonlinear forward map between real Hilbert spaces]]

[[def-frechet-derivative-between-banach-spaces|Fréchet derivative on an open real Banach domain]]

[[def-ip-tangential-cone-condition|One-basepoint local tangential cone condition]]

[Christian Clason, *Regularization of Inverse Problems*, Assumption 11.10 and equation (11.23)](https://arxiv.org/pdf/2001.00617v2)

## Remarks

This is an explicit two-point product-remainder hypothesis. The LM stopping proof below assumes this inequality directly; it does not derive it from differentiability or from the one-basepoint local tangential cone condition.
