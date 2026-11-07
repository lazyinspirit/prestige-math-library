---
id: thm-guth-maynard-large-values-for-dirichlet-polynomials
kind: theorem
title: "Guth–Maynard Large-Value Estimate for Dirichlet Polynomials"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-guth-maynard-large-value-counting-function
  - def-real-power
  - thm-heath-brown-pairwise-dirichlet-polynomial-moment
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Guth and Maynard, New Large Value Estimates for Dirichlet Polynomials, Theorem 1.1 and §§3–12"
      url: "https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v"
    - title: "Vaughan, Multiplicative Number Theory III, Chapter 29"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
    - title: "Turnage-Butterbaugh, A Decades-Long Breakthrough in Zero-Density Estimates and Primes in Short Intervals"
      url: "https://arxiv.org/pdf/2607.04632v1"
---

## Statement

Let $N\ge1$ be an integer, let $T\ge2$, let $b_n\in\mathbb C$ for $N<n\le2N$ satisfy $|b_n|\le1$, and define $D_N(t)=\sum_{N<n\le2N}b_ne^{it\log n}$, with $e^{it\log n}:=\exp(it\log n)$. Let $t_1,\ldots,t_R$ be distinct points of $[0,T]$ with $|t_r-t_q|\ge1$ for $r\ne q$. If $V>0$ and $|D_N(t_r)|\ge V$ for every $r$, then for each $\varepsilon>0$ there are constants $C_\varepsilon,T_\varepsilon>0$ such that, for $T\ge T_\varepsilon$,
$$R\le C_\varepsilon T^\varepsilon\left(N^2V^{-2}+N^{18/5}V^{-4}+TN^{12/5}V^{-4}\right).$$

## Statement references

[Guth and Maynard, Theorem 1.1](https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v)

[Vaughan, Chapter 29, Guth–Maynard large-value framework](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[Turnage-Butterbaugh, §7.3](https://arxiv.org/pdf/2607.04632v1)
