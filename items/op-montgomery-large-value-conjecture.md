---
id: op-montgomery-large-value-conjecture
kind: open-problem
title: "Montgomery's Large-Value Conjecture for Dirichlet Polynomials"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-natural-logarithm
  - def-real-power
  - def-complex-exponential
  - def-complex-numbers-and-arithmetic
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
    - title: "Guth and Maynard, New Large Value Estimates for Dirichlet Polynomials, Conjecture 1.5"
      url: "https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v"
    - title: "Turnage-Butterbaugh, A Decades-Long Breakthrough in Zero-Density Estimates and Primes in Short Intervals"
      url: "https://arxiv.org/pdf/2607.04632v1"
---

## Open problem

For every fixed real $\sigma>1/2$, let $N$ be a positive integer, let $T\ge2$, and let $b_n\in\mathbb C$ for the integers $N<n\le2N$ with $|b_n|\le1$. Define
$$D(t):=\sum_{N<n\le2N}b_n e^{it\log n},\qquad e^{it\log n}:=\exp(it\log n).$$
If $\mathcal W\subseteq[0,T]$ is a finite set whose distinct points have distance at least $1$ and $|D(t)|>N^\sigma$ for every $t\in\mathcal W$, then the Montgomery large-value conjecture predicts
$$|\mathcal W|\le C(\sigma)T^{o(1)}N^{2-2\sigma}.$$
Here $T^{o(1)}$ means a factor bounded by $C_\varepsilon T^\varepsilon$ for each $\varepsilon>0$ and all sufficiently large $T$.

## Open problem references

[Guth and Maynard, Conjecture 1.5](https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v)

## Status

Guth and Maynard state this estimate as Conjecture 1.5 in their 2026 paper. The primary source and the current literature search did not locate a proof by 2026-10-26; this is a dated status check, not an exhaustive survey.

## Status references

[Guth and Maynard, Conjecture 1.5 and §1.1](https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v)
