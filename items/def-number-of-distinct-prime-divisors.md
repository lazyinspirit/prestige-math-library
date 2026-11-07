---
dependency_level: 0
id: def-number-of-distinct-prime-divisors
kind: definition
title: "Number of distinct prime divisors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-prime
  - thm-fundamental-theorem-of-arithmetic
  - def-finite-cardinality
verification:
  precheck: n/a
sources:
  references:
    - title: "Manuel Hauke-Treuer, James Maynard, and Andrew Pollington, Counterexamples to the Inhomogeneous Duffin–Schaeffer Conjecture, §2"
      url: "https://arxiv.org/pdf/2609.30921v1"
---

## Definition

For a positive integer $n$, let

$$
\omega(n):=\bigl|\{p\in\mathbb N:p\text{ is prime and }p\mid n\}\bigr|.
$$

Thus $\omega(n)$ counts distinct prime divisors without multiplicity; in particular $\omega(1)=0$.

## Definition references

[[def-prime|Prime integers]]

[[thm-fundamental-theorem-of-arithmetic|Unique prime factorization]]

[Harman, *Metric Number Theory*, Chapter 3, §3.1](https://djvu.online/file/DZdHsCBaK3OrN)

[Vaughan, *The Hardy–Littlewood Method*, Appendix A](https://www.cambridge.org/core/books/hardylittlewood-method/)
