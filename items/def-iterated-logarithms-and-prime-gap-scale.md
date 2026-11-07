---
id: def-iterated-logarithms-and-prime-gap-scale
kind: definition
title: "Iterated logarithms and the Rankin prime-gap scale"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-natural-logarithm
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers, Chapter 29"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
    - title: "James Maynard, Large gaps between primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf"
verification:
  precheck: n/a
---

## Definition

For $x>0$ set $\log_1 x=\log x$, where $\log$ is the natural logarithm. Recursively, for each integer $j\ge1$, define $\log_{j+1}x=\log(\log_j x)$ whenever $\log_jx>0$. For all sufficiently large real $X$, so that the displayed iterates are defined and positive, define the Rankin scale
$$L_R(X):=\frac{\log X\,\log_2X\,\log_4X}{(\log_3X)^2}.$$

## Definition references

[[def-natural-logarithm]]

[Koukoulopoulos, The Distribution of Prime Numbers, Theorem 29.3](https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf)

[Maynard, Large gaps between primes, Theorem 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf)
