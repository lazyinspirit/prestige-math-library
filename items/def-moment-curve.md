---
id: def-moment-curve
kind: definition
title: Moment Curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§1, equation (2), p. 635: the moment curve Γ_n(t)=(t,t²,…,tⁿ), 0≤t≤1.'
  - title: Shaoming Guo, Zane Kun Li, Po-Lam Yung, and Pavel Zorin-Kranich, A short
      proof of ℓ² decoupling for the moment curve
    url: https://arxiv.org/pdf/1912.09798
    locator: '§1, p. 1: Γ(ξ)=(ξ,ξ²,…,ξᵏ), 0≤ξ≤1.'
---

## Definition

For an integer $n\ge1$, the **moment curve of degree $n$** is the map
$$\Gamma_n:[0,1]\to\mathbb R^n,\qquad \Gamma_n(t)=(t,t^2,\ldots,t^n).$$
For an interval $J\subseteq[0,1]$, write $\Gamma_n(J)=\{\Gamma_n(t):t\in J\}$. Its $j$th derivative is
$$\Gamma_n^{(j)}(t)=(0,\ldots,0,j!, (j+1)!/(1!)\,t,\ldots,n!/(n-j)!\,t^{n-j})$$
for $1\le j\le n$, with the nonzero coordinates beginning in position $j$.
