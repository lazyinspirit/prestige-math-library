---
id: def-eigenpair-residual-and-normwise-backward-error
kind: definition
title: "The residual $r=Ax-\\mu x$ and the normwise backward error of an approximate eigenpair"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inner-product-norm, def-matrix-product-and-identity-matrix,
       def-operator-norm-on-a-finite-dimensional-inner-product-space]
aliases: []
landmark: true
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Netlib Templates, Numerical Stability and Conditioning"
      url: "https://www.netlib.org/utk/people/JackDongarra/etemplates/node189.html"
---

## Definition

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $A\in M_n(\mathbb F)$, let
$\mu\in\mathbb F$, and let $x\in\mathbb F^n$ be nonzero. Equip
$\mathbb F^n$ with its standard inner product and Euclidean norm $\|\cdot\|_2$.
For a matrix $E\in M_n(\mathbb F)$, write

$$\|E\|_2:=\sup_{\|y\|_2=1}\|Ey\|_2$$

for the induced operator norm of
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]. The
**eigenpair residual** of $(\mu,x)$ for $A$ is

$$
r(A,\mu,x):=Ax-\mu x.
$$

If $\|x\|_2=1$, the **normwise backward error** of the approximate eigenpair
$(\mu,x)$ is

$$
\eta(A,\mu,x):=\inf\{\,\|E\|_2:(A+E)x=\mu x\,\}.
$$

Thus $\eta(A,\mu,x)$ measures the smallest spectral-norm perturbation that makes
$(\mu,x)$ an exact eigenpair.
