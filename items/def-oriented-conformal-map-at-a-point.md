---
id: def-oriented-conformal-map-at-a-point
kind: definition
title: "Orientation-preserving conformality for a real-differentiable complex map at a point"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-total-derivative-in-euclidean-space, def-euclidean-inner-product,
       rem-complex-plane-euclidean-dictionary]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §2.2.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, §9.1"
      url: "https://complexanalysis.org/web/sec_conformal-mappings.html"
pipeline_run: null
---

## Definition

For vectors $p=(p_1,p_2)$ and $q=(q_1,q_2)$ in the oriented Euclidean plane, put

$$ \omega(p,q):=p_1q_2-p_2q_1. $$

A real-linear map $L:\mathbb R^2\to\mathbb R^2$ is a **similarity** of ratio $\lambda>0$ when

$$ \langle Lh,Lk\rangle=\lambda^2\langle h,k\rangle $$

for all $h,k\in\mathbb R^2$, using the inner product of [[def-euclidean-inner-product]]. It is orientation-preserving when $\omega(Le_1,Le_2)>0$ and orientation-reversing when that quantity is negative.

Let $U\subseteq\mathbb C$ be open and let $f:U\to\mathbb C$ be real totally differentiable at $a$. The map $f$ is **orientation-preserving conformal at $a$** when $Df(a)$ is an orientation-preserving similarity. This is a pointwise condition on the real derivative. It asserts neither local nor global injectivity of $f$.
