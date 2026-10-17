---
id: def-nested-rare-event-levels
kind: definition
title: Nested rare-event levels and conditional laws
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-probability-measure
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, §8"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, ``2–3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
---

## Definition

Let $(\Omega,\mathcal F,P)$ be a probability space as in [[def-probability-measure]]. A finite nested event sequence of length $L\ge1$ is a sequence of measurable sets
$
\Omega=A_0\supseteq A_1\supseteq\cdots\supseteq A_L=A
$
such that $P(A_\ell)>0$ for $0\le\ell\le L$. Its **conditional level probabilities** and **level laws** are
$
p_\ell=\frac{P(A_\ell)}{P(A_{\ell-1})}\in(0,1],\qquad
\pi_\ell(B)=\frac{P(B\cap A_\ell)}{P(A_\ell)}
\quad (B\in\mathcal F).
$
The target probability is $p=P(A_L)$. Independence across levels means that the complete sample arrays used at distinct levels are mutually independent; correct marginal laws alone do not imply this condition.
