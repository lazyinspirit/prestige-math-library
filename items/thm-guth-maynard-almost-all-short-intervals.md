---
id: thm-guth-maynard-almost-all-short-intervals
kind: theorem
title: "Guth–Maynard Prime Count in Almost All Short Intervals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-countable-choice
  - def-natural-logarithm
  - def-real-power
  - def-real-exponential-function-and-e
  - thm-guth-maynard-large-values-for-dirichlet-polynomials
  - thm-guth-maynard-zero-density-for-riemann-zeta
  - cor-guth-maynard-zeta-zero-density-exponent-30-over-13
  - thm-montgomery-vaughan-zero-density-n1-and-n2
  - thm-von-mangoldt-explicit-formula-truncated
  - thm-korobov-vinogradov-zero-free-region-for-riemann-zeta
  - def-prime-counting-function
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Guth and Maynard, New Large Value Estimates for Dirichlet Polynomials, Corollary 1.4 and §13.2"
      url: "https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v"
    - title: "Vaughan, Multiplicative Number Theory III, Chapter 29"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
    - title: "Turnage-Butterbaugh, §4"
      url: "https://arxiv.org/pdf/2607.04632v1"
---

## Statement

Let $\pi(u):=\#\{p\le u:p\text{ is prime}\}$. For each fixed $\varepsilon>0$, there are constants $C_\varepsilon,X_\varepsilon>0$ such that for every real $X\ge X_\varepsilon$ and every real $y$ with $X^{2/15+\varepsilon}\le y\le X^{99/100}$, there is a set $E_{X,y}\subseteq\mathbb Z\cap[X,2X]$ with
$$|E_{X,y}|\le C_\varepsilon X\exp\!\left(- (\log X)^{1/4}\right),$$
and every integer $x\in([X,2X]\cap\mathbb Z)\setminus E_{X,y}$ satisfies
$$\left|\pi(x+y)-\pi(x)-\frac{y}{\log x}\right|\le C_\varepsilon y\exp\!\left(- (\log x)^{1/4}\right).$$

## Statement references

[Guth and Maynard, Corollary 1.4 and its proof](https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v)

[Vaughan, Chapter 29, primes in short intervals](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[Turnage-Butterbaugh, §4](https://arxiv.org/pdf/2607.04632v1)
