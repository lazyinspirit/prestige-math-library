---
id: def-guth-maynard-large-value-counting-function
kind: definition
title: "Guth–Maynard large-value counting function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-natural-logarithm
  - def-complex-exponential
  - def-complex-numbers-and-arithmetic
  - def-finite-cardinality
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Guth and Maynard, New Large Value Estimates for Dirichlet Polynomials, §1.1"
      url: "https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v"
    - title: "Vaughan, Multiplicative Number Theory III, Chapter 29, §29.1"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
---

## Definition

Let $N$ be a positive integer, let $b_n\in\mathbb C$ for the integers $N<n\le2N$, and define
$$D_N(t):=\sum_{N<n\le2N}b_n e^{it\log n},\qquad e^{it\log n}:=\exp(it\log n).$$
For $T\ge0$, a finite set $\mathcal T\subseteq[0,T]$ is **1-separated** if $|t-u|\ge1$ for every distinct $t,u\in\mathcal T$. For $V>0$, define the large-value count
$$R_N(V;\mathcal T,b):=\#\{t\in\mathcal T:|D_N(t)|\ge V\}.$$
The empty set is allowed, in which case this count is zero.

## Definition references

[Guth and Maynard, §1.1, Dirichlet-polynomial convention](https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v)

[Vaughan, Chapter 29, sampling convention](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)
