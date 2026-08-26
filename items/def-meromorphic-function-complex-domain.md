---
id: def-meromorphic-function-complex-domain
kind: definition
title: "Meromorphic functions on a plane domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-isolated-singularity-types]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Patrick Brosnan, UMD complex analysis notes, §3.10 Meromorphic functions"
      url: "https://www.math.umd.edu/~pbrosnan/notes/complex/sect0019.html"
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C$ be a nonempty connected open set. A function
$f:\Omega\setminus P\to\mathbb C$, where $P\subseteq\Omega$, is
**meromorphic on $\Omega$** when

1. $f$ is holomorphic on $\Omega\setminus P$, and
2. every point of $P$ is a pole of $f$ in the sense of
   [[def-isolated-singularity-types]].

The set $P$ is the **pole set** of the meromorphic function.

## Remarks

If $P=\varnothing$, the function is simply holomorphic on $\Omega$.

This definition is deliberately local. The later page on the argument principle
adds the quotient and divisor viewpoints, but this page works only with the
isolated-pole description.
