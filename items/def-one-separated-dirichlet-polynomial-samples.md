---
id: def-one-separated-dirichlet-polynomial-samples
kind: definition
title: "One-Separated Dirichlet-Polynomial Samples"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
forward_refs: []
dependency_level: 0
verification:
  precheck: n/a
sources:
  references:
    - title: "Montgomery–Vaughan, Multiplicative Number Theory III, §27.1, equations (27.1) and (27.11)"
      url: "https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf"
    - title: "E. Assing, Topics in Analytic Number Theory, Corollary 4 and Proposition 5"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/analytic_nt.pdf"
---

## Definition

Let $N$ be a positive integer, let $T\ge0$, and let $a_1,\ldots,a_N\in\mathbb C$. The associated Dirichlet polynomial is
$$D(s):=\sum_{n=1}^{N}a_n n^{-s},\qquad n^{-s}:=\exp(-s\log n).$$
Let $\mathcal T=\{t_1,\ldots,t_R\}$ be a finite set of distinct real numbers in $[0,T]$. It is **1-separated** if $|t_r-t_q|\ge1$ for every pair of distinct indices $r,q$. Define the coefficient square norm $G:=\sum_{n=1}^{N}|a_n|^2$. For $V>0$, define the large-value count $R_D(V,\mathcal T):=\#\{r:|D(it_r)|\ge V\}$. The empty sample set is allowed and has $R=0$.

## Definition references

[Montgomery–Vaughan, Dirichlet-polynomial and coefficient-norm conventions](https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf)

[Assing, Dirichlet-polynomial and separated-sample conventions](https://www.math.uni-bonn.de/people/assing/lectures/analytic_nt.pdf)
