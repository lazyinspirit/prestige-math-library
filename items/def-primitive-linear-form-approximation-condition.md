---
id: def-primitive-linear-form-approximation-condition
kind: definition
title: "Primitive integer data in linear-forms approximation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-khintchine-groshev-matrix-approximation-set
  - def-gcd-of-finite-integer-tuple
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, §3"
      url: "https://arxiv.org/pdf/0811.0809v3"
    - title: "Glyn Harman, Metric Number Theory, Chapter 4"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Definition

Let $n,m\ge1$, $q=(q_1,\ldots,q_n)\in\mathbb Z^n\setminus\{0\}$, and $p=(p_1,\ldots,p_m)\in\mathbb Z^m$. The pair $(q,p)$ is primitive if $\gcd(q_1,\ldots,q_n,p_1,\ldots,p_m)=1$, where the greatest common divisor of a finite tuple is the nonnegative common divisor defined by the left-associated fold convention. For any fixed matrix $X$ and $q$, only finitely many $p$ satisfy a bounded inequality $\|qX+p\|_\infty<c$ with finite $c$, so primitivity is a condition on each integer pair counted in the approximation set.

## Definition references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, §3](https://arxiv.org/pdf/0811.0809v3)

[Harman, *Metric Number Theory*, Chapter 4](https://djvu.online/file/DZdHsCBaK3OrN)
