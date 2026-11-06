---
id: def-cft-feigin-fuchs-oscillator-data
kind: definition
title: Rank-one Feigin–Fuchs oscillator spaces and long-screening coefficients
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Dražen Adamović and Antun Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: Section 1, printed pp. 4–5, rank-one lattice, conformal vector, and screening conventions
    - title: David Ridout and Simon Wood, From Jack polynomials to minimal model spectra
      url: https://arxiv.org/pdf/1409.4847v2
      locator: Section 2, equations (2.1)–(2.12) and (2.17)–(2.27); their normalized Heisenberg generator is rescaled to the present oscillator convention
---

## Definition

Fix $p\in\mathbb C\setminus\{0\}$. Put $P=\mathbb C[x_1,x_2,\ldots]$, where each polynomial involves only finitely many variables, and assign weighted degree $\deg x_m=m$. For $t\in\mathbb C$, let $\mathcal F_t=P e^{t\alpha}$ be a labelled copy of $P$; the symbol $e^{t\alpha}$ is a label for its constant polynomial, not an analytic exponential. For $m\ge1$, define $\alpha_{-m}$ to be multiplication by $x_m$, $\alpha_m=2pm\,\partial_{x_m}$, and $\alpha_0=2pt I$ on $\mathcal F_t$. Write $P[N]$ for the subspace of weighted degree $N$, with $P[N]=0$ for $N<0$, and set
$$D_t=\sum_{m\ge1}m x_m\partial_{x_m}+pt^2-(p-1)t I.$$

For an integer $r$ and a charge $t$ satisfying $2prt\in\mathbb Z$, define the coefficientwise formal map $\mathcal E_{r,t}(z):\mathcal F_t\to\mathcal F_{t+r}$ by
$$\mathcal E_{r,t}(z)(f e^{t\alpha})=z^{2prt}\exp\!\left(\sum_{m\ge1}\frac{r x_m}{m}z^m\right)f(x_1-2prz^{-1},x_2-2prz^{-2},\ldots)e^{(t+r)\alpha}.$$
Here $\exp$ means its formal power-series expansion, and $\operatorname{Res}_z$ means the coefficient of $z^{-1}$. The annihilation substitution is finite on each polynomial. For every fixed power of $z$, only finitely many creation monomials contribute, so every coefficient map is an algebraic linear map; no analytic convergence is asserted.

When $2pt\in\mathbb Z$, define the long-screening coefficient $Q_t:\mathcal F_t\to\mathcal F_{t+1}$ by $Q_t=\operatorname{Res}_z\mathcal E_{1,t}(z)$. Write $Q^j$ for a composition along successive charges whenever all of its coefficient maps are defined, and put $Q^0=I$. In particular, if $p$ is an integer and $2pt\in\mathbb Z$, every $Q^j$ for $j\ge0$ is defined.

For each $n\in\mathbb Z$, define
$$L_t(n)=\frac{1}{4p}\sum_{m\in\mathbb Z}{:}\alpha_m\alpha_{n-m}{:}-\frac{p-1}{2p}(n+1)\alpha_n.$$
Normal ordering places every negative-index oscillator to the left of every nonnegative-index oscillator. For fixed $n$ and a fixed polynomial input, the sum is finite: terms with two negative indices have only finitely many possible indices, and a positive-index derivative vanishes once its index exceeds the polynomial's finite support and degree.

## Definition references

[Adamović–Milas, Section 1](https://arxiv.org/pdf/0707.1857v2)

[Ridout–Wood, Section 2](https://arxiv.org/pdf/1409.4847v2)

## Remarks

The explicit operators satisfy $[\alpha_m,\alpha_n]=2pm\,\delta_{m+n,0}I$: for $m>0$, $[\alpha_m,\alpha_{-m}]=2pm[\partial_{x_m},x_m]=2pm I$, while same-sign modes and distinct opposite modes commute. Directly normal ordering at $n=0$ gives $L_t(0)=D_t$. The Virasoro relations and the commutation of $Q_t$ with the Virasoro modes are not included in this definition; they are proved separately.
