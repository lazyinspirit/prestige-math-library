---
id: def-gauge-transformed-ball-in-a-metric-space
kind: definition
title: "Gauge-transformed ball in a metric space"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-limsup-of-shrinking-balls-in-a-metric-space
  - def-doubling-gauge-and-locally-regular-hausdorff-measure
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, §6.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
---

## Definition

Let $B_i=B(x_i,r_i)$ be a sequence of balls in a metric space and let $f,g$ be dimension functions, with $g$ continuous and nondecreasing. For $t>0$ in the range of $g$, define the generalized inverse $g^{-1}(t):=\inf\{u>0:g(u)\ge t\}$. Continuity ensures $g(g^{-1}(t))=t$. If $f(r_i)$ is in the range of $g$, the $f$-transform of $B_i$ relative to $g$ is

$$B_i^{f,g}:=B\bigl(x_i,g^{-1}(f(r_i))\bigr).$$

Its center is unchanged and its radius is the least radius $R_i$ satisfying $g(R_i)=f(r_i)$.

## Definition references

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, §6.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)
