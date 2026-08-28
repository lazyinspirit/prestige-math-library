---
id: lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular
kind: lemma
title: "After a linear coordinate change, every nonzero germ is regular in the last variable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-holomorphic-germ, thm-power-series-expansion-in-several-complex-variables, cor-uniqueness-of-multivariable-power-series-coefficients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Exercise 6.2.5"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.1"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $m\ge1$ and let $f\in\mathcal O_{m,0}$ be nonzero. Then there is an
invertible complex-linear map $T:\mathbb C^m\to\mathbb C^m$ and an integer
$d\ge0$ such that the pulled-back germ $f\circ T$ is regular in the last
variable of order $d$.

## Facts & Assumptions

**Given:** A nonzero germ $f\in\mathcal O_{m,0}$.

[L1] On a sufficiently small polydisc around $0$, a holomorphic representative of $f$ has an absolutely convergent power-series expansion ([[thm-power-series-expansion-in-several-complex-variables]]).

[L2] Such a multivariable power-series expansion has uniquely determined coefficients ([[cor-uniqueness-of-multivariable-power-series-coefficients]]).

[L3] Regularity in the last variable is the one-variable exact-order condition of [[def-regular-holomorphic-germ]].

## Proof

**Proof technique:** direct.

1.1 Choose a holomorphic representative of $f$ on a small polydisc, and expand it by [L1] as $$f(z)=\sum_{\alpha\in\mathbb N^m} c_\alpha z^\alpha.$$ Because $f$ is nonzero, some coefficient is nonzero. Let $d$ be the smallest total degree $|\alpha|$ for which $c_\alpha\ne0$, and put $$P_d(z):=\sum_{|\alpha|=d} c_\alpha z^\alpha.$$ Then $P_d$ is a nonzero homogeneous polynomial of degree $d$. [given, L1, L2]

2.1 If $P_d(v)=0$ for every $v\in\mathbb C^m$, then the polynomial function $P_d$ vanishes identically on all of $\mathbb C^m$; applying [L2] to that finite power series would force every coefficient $c_\alpha$ with $|\alpha|=d$ to be $0$, contradicting step 1.1. Therefore choose $v\in\mathbb C^m$ with $P_d(v)\ne0$. [step 1.1, L2, choose]

3.1 Choose an invertible complex-linear map $T$ sending the last basis vector $e_m$ to $v$. Along the last axis one then has $$f\circ T(0,\dots,0,\zeta)=P_d(v)\zeta^d+\sum_{n>d} b_n\zeta^n =\zeta^d\left(P_d(v)+\sum_{n>d} b_n\zeta^{n-d}\right).$$ The bracketed factor is holomorphic and nonzero at $0$ because $P_d(v)\ne0$. Hence [L3] makes $f\circ T$ regular in the last variable of order $d$. [step 2.1, L3, construct, algebra] ∎
