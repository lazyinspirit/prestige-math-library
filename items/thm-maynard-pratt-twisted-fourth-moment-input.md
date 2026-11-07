---
id: thm-maynard-pratt-twisted-fourth-moment-input
kind: theorem
title: "Twisted Fourth-Moment Input for the Maynard–Pratt Type II Detector"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-countable-choice
  - def-natural-logarithm
  - def-real-power
  - def-complex-exponential
  - def-number-theoretic-mobius-function
  - thm-riemann-zeta-meromorphic-continuation
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Maynard and Pratt, Half-Isolated Zeros and Zero-Density Estimates, Appendix C, proof of Lemma 24"
      url: "https://arxiv.org/pdf/2206.11729v2"
---

## Statement

For sufficiently large real $T$, define
$$M_T(s):=\sum_{m\le2T^{1/100}}\mu(m)m^{-s},$$
where $\mu$ is the number-theoretic Möbius function and $\zeta$ is the meromorphic continuation of the Riemann zeta function. There are absolute constants $A,B>0$ such that, for all sufficiently large $T$,
$$\int_{T/2}^{3T}\left|M_T\!\left(\tfrac12+it\right)\zeta\!\left(\tfrac12+it\right)\right|^4\,dt\le A T(\log T)^B.$$

## Statement references

[Maynard and Pratt, Appendix C, proof of Lemma 24](https://arxiv.org/pdf/2206.11729v2)
