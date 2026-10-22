---
id: def-ip-nonlinear-tikhonov-functional
kind: definition
title: The nonlinear Tikhonov functional
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-forward-map-and-solution-classes
  - def-hilbert-space
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, equation (10.1)"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Benedikt Wirth, Inverse Problems, Definition 83"
      url: "https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $X$ and $Y$ be real Hilbert spaces, let $D\subseteq X$ be a nonempty domain, and let $F:D\to Y$ be a forward map. For a regularization parameter $\alpha>0$, reference element $x_0\in X$, and datum $y\in Y$, the **nonlinear Tikhonov functional** is the map $J_{\alpha,y,x_0}:D\to[0,\infty)$ defined by

$$
J_{\alpha,y,x_0}(x):=\frac12\|F(x)-y\|_Y^2+\frac{\alpha}{2}\|x-x_0\|_X^2\qquad(x\in D).
$$

A **global minimizer** is a point $x_\alpha\in D$ such that $J_{\alpha,y,x_0}(x_\alpha)\le J_{\alpha,y,x_0}(x)$ for every $x\in D$. This definition asserts neither existence nor uniqueness.

## Definition references

[[def-ip-forward-map-and-solution-classes|Forward maps and their domains]]

[[def-hilbert-space|Real Hilbert spaces and their norms]]

[Christian Clason, *Regularization of Inverse Problems*, equation (10.1)](https://arxiv.org/pdf/2001.00617v2)

[Benedikt Wirth, *Inverse Problems*, Definition 83](https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf)
