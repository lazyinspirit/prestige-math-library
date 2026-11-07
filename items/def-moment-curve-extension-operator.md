---
id: def-moment-curve-extension-operator
kind: definition
title: Moment-Curve Extension Operator
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- def-moment-curve
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§1, pp. 634–635: the extension operator E_J^{(n)} for the moment curve
      and intervals J⊂[0,1].'
  - title: Shaoming Guo, Zane Kun Li, Po-Lam Yung, and Pavel Zorin-Kranich, A short
      proof of ℓ² decoupling for the moment curve
    url: https://arxiv.org/pdf/1912.09798
    locator: '§1, p. 1: the moment-curve extension setup and its Fourier-support formulation.'
---

## Definition

For an integer $n\ge1$, a Lebesgue-measurable $g:[0,1]\to\mathbb C$ with $\int_0^1|g(t)|\,dt<\infty$, and an interval $J\subseteq[0,1]$, define
$$E_J^{(n)}g(x)=\int_J g(t)e^{2\pi i\,x\cdot\Gamma_n(t)}\,dt,\qquad x\in\mathbb R^n.$$
The integral is absolutely convergent at every $x$, since the exponential has modulus one. Write $E^{(n)}g=E_{[0,1]}^{(n)}g$ and $e(u)=e^{2\pi iu}$.

## Definition references

[[def-moment-curve]]
