---
id: def-preperiodic-point-of-a-self-map
kind: definition
title: Preperiodic point of a self-map
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, §1, printed p. 3"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
---

## Definition

Let $X$ be a set, let $f:X\to X$ be a map, and let $x\in X$. Define $f^0$ to be the identity map on $X$ and, for each integer $n\ge0$, define $f^{n+1}=f\circ f^n$. The **forward orbit** of $x$ is $O_f(x)=\{f^n(x):n\ge0\}$. The point $x$ is **preperiodic** for $f$ if $O_f(x)$ is finite, and is **wandering** for $f$ if $O_f(x)$ is infinite.

## Definition references

[Silverman, §1, orbit and preperiodic-point definitions, printed p. 3](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)
