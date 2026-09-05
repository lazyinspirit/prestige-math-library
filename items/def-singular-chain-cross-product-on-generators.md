---
id: def-singular-chain-cross-product-on-generators
kind: definition
title: "The singular chain cross product on generators"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-simplex-and-singular-chain-group-with-coefficients, def-product-topology]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Haynes Miller, Algebraic Topology I, Lecture 7"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/9e7c0386b3c2febaa2cf58e75d9c7c32_MIT18_905F16_lec7.pdf"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Definition

Let $\sigma:\Delta^p\to X$ and $\tau:\Delta^q\to Y$ be singular simplices. A
$(p,q)$-**shuffle** is a permutation $\theta$ of $\{1,\dots,p+q\}$ such that
$$\theta(1)<\cdots<\theta(p)\qquad\text{and}\qquad \theta(p+1)<\cdots<\theta(p+q).$$
Each shuffle determines a monotone lattice path from $(0,0)$ to $(p,q)$, hence
an affine simplex
$$\lambda_\theta:\Delta^{p+q}\to\Delta^p\times\Delta^q$$
whose vertices are the successive vertices of that path in the product simplex.

The **singular chain cross product on generators** is
$$\sigma\times\tau:=\sum_{\theta\in\operatorname{Sh}(p,q)}\operatorname{sgn}(\theta)\,(\sigma\times\tau)\circ\lambda_\theta\in C_{p+q}(X\times Y;\mathbb Z),$$
where $\sigma\times\tau:\Delta^p\times\Delta^q\to X\times Y$ is the product
map.

Extend bilinearly to
$$\times:C_p(X;\mathbb Z)\times C_q(Y;\mathbb Z)\to C_{p+q}(X\times Y;\mathbb Z).$$
For $p=0$ or $q=0$, this agrees with the evident product of a point simplex and
an arbitrary simplex.
