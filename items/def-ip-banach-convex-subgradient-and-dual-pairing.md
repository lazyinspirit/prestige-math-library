---
id: def-ip-banach-convex-subgradient-and-dual-pairing
kind: definition
title: Banach-space convex subgradients and dual pairings
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-banach-space
  - def-dual-space-of-a-normed-space
  - def-convex-and-strictly-convex-functionals-on-a-banach-space
  - def-proper-coercive-and-weakly-lower-semicontinuous-functional
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, §1, notation and convex analysis tools"
      url: "https://arxiv.org/pdf/2403.18704"
    - title: "Jonathan M. Borwein and Jon D. Vanderwerff, Convex Functions: Constructions, Characterizations and Counterexamples, §§4.1 and 4.4"
      url: "https://carmamaths.org/jon/Preprints/Books/CUP/cup-final.pdf"
verification:
  precheck: n/a
---

## Definition

Let $X$ be a real Banach space and let $X^*$ be its continuous real dual. The dual pairing is evaluation, written $\langle \xi,x\rangle_{X^*,X}:=\xi(x)$ for $\xi\in X^*$ and $x\in X$. Let $R:X\to(-\infty,+\infty]$ be a proper convex functional: $R$ never takes the value $-\infty$, its effective domain $\operatorname{dom}R:=\{x\in X:R(x)<+\infty\}$ is nonempty, and $R((1-t)x+tz)\le (1-t)R(x)+tR(z)$ for $x,z\in X$ and $t\in[0,1]$, with $0\cdot(+\infty):=0$ for this convex-combination formula. For $x\in\operatorname{dom}R$, its subdifferential is

$$\partial R(x):=\{\xi\in X^*:R(z)\ge R(x)+\langle\xi,z-x\rangle_{X^*,X}\text{ for every }z\in X\}.$$

An element of $\partial R(x)$ is a subgradient of $R$ at $x$. Set $\partial R(x):=\varnothing$ when $x\notin\operatorname{dom}R$. The subdifferential may be empty at a point of $\operatorname{dom}R$; no nonemptiness assertion is part of this definition.

## Definition references

[[def-banach-space|Real Banach spaces]]

[[def-dual-space-of-a-normed-space|The continuous dual and evaluation pairing]]

[[def-convex-and-strictly-convex-functionals-on-a-banach-space|Convex extended-real functionals]]

[[def-proper-coercive-and-weakly-lower-semicontinuous-functional|Properness and effective domain]]

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, §1](https://arxiv.org/pdf/2403.18704)

[Jonathan M. Borwein and Jon D. Vanderwerff, *Convex Functions: Constructions, Characterizations and Counterexamples*, Chapter 4](https://carmamaths.org/jon/Preprints/Books/CUP/cup-final.pdf)
