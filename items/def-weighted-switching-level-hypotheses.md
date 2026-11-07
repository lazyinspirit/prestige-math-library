---
id: def-weighted-switching-level-hypotheses
kind: definition
title: "Original and switched level-of-distribution hypotheses for weighted sieves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-linear-sieve-level-of-distribution
  - def-prime-factor-count-with-multiplicity
  - def-number-of-distinct-prime-divisors
  - def-number-theoretic-mobius-function
  - def-prime
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kaisa Matomäki and Sebastian Zúñiga-Alterman, Weighted sieves with switching, Definitions 2.4 and Assumption 3.1"
      url: "https://arxiv.org/pdf/2405.19063v3"
    - title: "H.-E. Richert, Lectures on Sieve Methods, Chapters 12–13 (full-text copy hosted by the University of Toledo)"
      url: "https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf"
verification:
  precheck: n/a
---

## Definition

Fix $\delta>0$, an integer $S\ge1$, and real parameters
$v\ge u\ge2$ with $v\ge S+1$. Let $x\ge2$ be sufficiently large in terms
of these fixed parameters and the implied constants below. Fix an integer
$R$ be a fixed positive integer used in A2–A5. Let
$\mathcal A\subseteq([1,x]\cap\mathbb Z)^2$, let
$\theta_1\in[1/u+\delta,1)$, and let
$\theta_2:[1/v,1/(S+1)]\to[\delta,1)$ be Lipschitz. Let
$X_1\ge1$, let $X_2:[1/v,1/(S+1)]\to[1,\infty)$, and let
$g_1,g_2:\mathbb N\to\mathbb R_{\ge0}$ be multiplicative local-density
functions for their respective sequences, with
$0\le g_i(q)<q$ for every prime $q$. Each has the local-product bound

$$\prod_{w_0\le q<z}\left(1-\frac{g_i(q)}q\right)^{-1} \le \left(1+O\!\left(\frac1{\log w_0}\right)\right) \frac{\log z}{\log w_0}\qquad(z>w_0\ge2),$$

with fixed implied constant. A sequence $(v_n)_{n\le x}$ of size $X$ and
density $g$ has level $\theta$ here when

$$\sum_{d\le x^\theta}\mu^2(d) \left|\sum_{n\le x/d}v_{dn}-\frac{g(d)}dX\right| =O\!\left(\frac{X}{(\log x)^{100}}\right),$$

where $g(d)$ is the multiplicative extension of its prime values, and the
local-product bound displayed above holds. Choose a Lipschitz function
$w:\mathbb R_{\ge0}\to[0,1]$ that
vanishes outside $[1/v,1/u]$, and let $C_w$ be a fixed Lipschitz constant for
$w$. For $n\ge1$, put

$$W(n):=1-\sum_{\substack{q\mid n\\q\ {\rm prime}\\x^{1/v}\le q<x^{1/u}}} w\!\left(\frac{\log q}{\log x}\right).$$

Write $P(z)=\prod_{q<z,\ q\text{ prime}}q$,
$a_n:=\#\{p\le x:p\text{ prime},\ (p,n)\in\mathcal A\}$, and let
$1_E$ denote the indicator of a condition $E$. For
$P\in[x^{1/v},x^{1/(S+1)}]$ and $m\ge1$, define

$$W_P(m):=1-w\!\left(\frac{\log P}{\log x}\right) -\sum_{\substack{q\mid m\\q\ {\rm prime}\\x^{1/v}\le q<x^{1/u}}} w\!\left(\frac{\log q}{\log x}\right),\qquad W_P^+(m):=\max\{W_P(m),0\},$$

and define the switched sequence, for each positive integer $\ell$, by

$$b_{P,\ell}:= \sum_{\substack{p_1m\le x\\(\ell,p_1m)\in\mathcal A\\P<p_1\le2P\\ q\mid m\Rightarrow q>p_1\\S\le\Omega(m)\le R-1}} \left(|\mu(m)|W_P^+(m)+\frac{C_w}{\log x}\right),$$

where $p_1$ and $q$ range over primes. In A3 below, $q$ also ranges over
primes, and $\pi(x):=\#\{p\le x:p\text{ prime}\}$.
The original and switched distribution assumptions are the following.

- **A1.** The sequence $(a_n)_{n\le x}$ has level of distribution $\theta_1$, size $X_1$, and density $g_1$.
- **A2.** $W(n)1_{(n,P(x^{1/v}))=1}\le0$ whenever $\omega(n)>R$, where $\omega$ counts distinct prime divisors.
- **A3.** $\displaystyle\sum_{\substack{q\ge x^{1/v}\\q\ {\rm prime}}}\ \sum_{\substack{n\le x/q^2\\(n,P(x^{1/v}))=1}}a_{nq^2}\le X_1/(\log x)^2$.
- **A4.** For every $\alpha\in[1/v,1/(S+1)]$, the switched sequence $(b_{x^\alpha,\ell})_{\ell\le x}$ has level of distribution $\theta_2(\alpha)$, size $X_2(\alpha)$, and density $g_2$.
- **A5.** Uniformly for every such $\alpha$,
  $$X_2(\alpha)=(1+o(1))\frac{X_1}{\pi(x)} \sum_{\substack{p_1m\le x\\x^\alpha<p_1\le2x^\alpha\\ q\mid m\Rightarrow q>p_1\\S\le\Omega(m)\le R-1}} \left(|\mu(m)|W_{x^\alpha}^+(m)+\frac{C_w}{\log x}\right),$$
  where $\pi(x):=\#\{p\le x:p\text{ prime}\}$.

The notation $\Omega(m)$ counts prime factors with multiplicity, whereas
$\omega(n)$ counts distinct prime divisors. Each level-of-distribution
assumption uses the remainder convention of the linear-sieve local-density
model and retains its own main scale and multiplicative density.

## Definition references

[[def-linear-sieve-level-of-distribution|Linear-sieve level and local density]]

[[def-prime-factor-count-with-multiplicity|Prime-factor count with multiplicity]]

[[def-number-of-distinct-prime-divisors|Number of distinct prime divisors]]

[[def-number-theoretic-mobius-function|Möbius function]]

Matomäki and Zúñiga-Alterman, *Weighted sieves with switching*, Definition 2.4 and Assumption 3.1

## Facts & Assumptions

**Given:** The fixed parameters and data in the Definition.

[F1] [[def-linear-sieve-level-of-distribution]]: its multiplicative local-density and remainder notation applies; the fixed $(\log x)^{-100}$ convention and the local-product bound displayed here are the switching paper's own hypotheses, not the all-savings convention of the general linear-sieve definition.

[F2] [[def-prime-factor-count-with-multiplicity]]: $\Omega(m)$ counts all prime factors with multiplicity.

[F3] [[def-number-of-distinct-prime-divisors]]: $\omega(n)$ counts distinct prime divisors without multiplicity.

[F4] [[def-number-theoretic-mobius-function]]: $\mu(m)$ is the number-theoretic Möbius function and vanishes when $m$ is not squarefree.

[F5] [[def-prime]]: every prime variable in the finite sums is a positive prime integer.
