---
id: def-ip-x0-minimum-norm-solution-on-weak-domain
kind: definition
title: $x_0$-minimum-norm solutions on weakly closed domains
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-weakly-closed-nonlinear-forward-map
  - def-hilbert-space
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 10"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Benedikt Wirth, Inverse Problems, Definition 83 and Theorem 85"
      url: "https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $X,Y$ be real Hilbert spaces, let $D\subseteq X$ be nonempty and weakly closed, meaning closed in the coarsest topology making every bounded real-linear functional continuous, and let $F:D\to Y$ satisfy this graph condition: whenever $x_n\in D$, $x_n\rightharpoonup x$, and $F(x_n)\rightharpoonup z$, one has $x\in D$ and $F(x)=z$; weak convergence means convergence under every bounded real-linear functional. For $x_0\in X$ and $y\in Y$, a point $x^\dagger\in D$ is an **$x_0$-minimum-norm solution** of $F(x)=y$ when $F(x^\dagger)=y$ and

$$
\|x^\dagger-x_0\|_X\le\|x-x_0\|_X\qquad\text{for every }x\in D\text{ with }F(x)=y.
$$

This definition asserts neither existence nor uniqueness. The minimum is global over the exact solution set in $D$ and uses distance from the specified reference point $x_0$.

## Definition references

[[def-ip-weakly-closed-nonlinear-forward-map|Weakly closed forward maps and their domains]]

[[def-ip-x0-minimum-norm-solution|The open-domain version of the same distance condition]]

[Christian Clason, *Regularization of Inverse Problems*, Chapter 10](https://arxiv.org/pdf/2001.00617v2)

[Benedikt Wirth, *Inverse Problems*, Definition 83 and Theorem 85](https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf)
