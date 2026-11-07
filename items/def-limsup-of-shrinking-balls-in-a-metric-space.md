---
id: def-limsup-of-shrinking-balls-in-a-metric-space
kind: definition
title: "Limsup set of a sequence of shrinking metric balls"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-hausdorff-dimension-function-and-gauge-measure
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, §2.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
---

## Definition

Let $(X,d)$ be a metric space and let $B_i=B(x_i,r_i)$ be a sequence of closed balls with $r_i\to0$. Its limsup set is

$$\limsup_{i\to\infty}B_i:=\bigcap_{N=1}^\infty\bigcup_{i\ge N}B_i=\{x\in X:x\in B_i\text{ for infinitely many }i\}.$$

For a sequence of subsets $E_i\subseteq X$, the same limsup notation means $\bigcap_N\bigcup_{i\ge N}E_i$.

## Definition references

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, §2.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)
