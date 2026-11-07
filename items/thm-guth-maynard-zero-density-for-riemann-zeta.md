---
id: thm-guth-maynard-zero-density-for-riemann-zeta
kind: theorem
title: "Guth–Maynard Zero-Density Estimate for the Riemann Zeta Function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - def-countable-choice
  - def-real-power
  - thm-guth-maynard-large-values-for-dirichlet-polynomials
  - def-riemann-zeta-zero-counting
  - cor-zeta-zero-count-unit-interval
  - lem-maynard-pratt-type-ii-zero-count
  - thm-montgomery-vaughan-zero-density-n1-and-n2
  - thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Guth and Maynard, New Large Value Estimates for Dirichlet Polynomials, Theorem 1.2 and §13.1"
      url: "https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v"
    - title: "Montgomery–Vaughan, Multiplicative Number Theory III, Chapters 28–29"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
    - title: "Turnage-Butterbaugh, §§4 and 7"
      url: "https://arxiv.org/pdf/2607.04632v1"
---

## Statement

Assume $1/2\le\sigma\le1$ and $T\ge2$. Let $N_\zeta(\sigma,T)$ be the number, counted with multiplicity, of nontrivial zeros $\rho=\beta+i\gamma$ of the meromorphic Riemann zeta function with $\beta\ge\sigma$ and $|\gamma|\le T$. For each fixed $\sigma\in[1/2,1]$ and every $\varepsilon>0$, there are constants $C_{\sigma,\varepsilon},T_{\sigma,\varepsilon}>0$ such that, for $T\ge T_{\sigma,\varepsilon}$,
$$N_\zeta(\sigma,T)\le C_{\sigma,\varepsilon} T^{15(1-\sigma)/(3+5\sigma)+\varepsilon}.$$

## Statement references

[Guth and Maynard, Theorem 1.2 and §13.1](https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v)

[Turnage-Butterbaugh, §7.3.1](https://arxiv.org/pdf/2607.04632v1)
