---
id: def-extended-real-epsilon-subdifferential
kind: definition
title: "Subdifferentials of proper extended-real convex functions"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-proper-closed-convex-function-on-rn
  - def-subgradient-and-subdifferential
  - def-euclidean-inner-product
  - def-extended-reals
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §2.3"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Mark Schmidt, Nicolas Le Roux, and Francis Bach, Convergence Rates of Inexact Proximal-Gradient Methods for Convex Optimization, §3 and Appendix Lemma 2"
      url: "https://arxiv.org/pdf/1109.2415"
---

## Definition

Let $g:\mathbb R^n\to(-\infty,+\infty]$ be proper and convex in the convention of [[def-proper-closed-convex-function-on-rn]]. For $x\in\operatorname{dom}g$ and $\eta\ge0$, define
$$\partial_\eta g(x)=\{p\in\mathbb R^n:g(z)\ge g(x)+\langle p,z-x\rangle-\eta\text{ for every }z\in\mathbb R^n\}.$$
Write $\partial g(x)=\partial_0g(x)$. If $x\notin\operatorname{dom}g$, set $\partial_\eta g(x)=\varnothing$. When $g$ is finite-valued on a convex domain, $\partial g(x)$ agrees with [[def-subgradient-and-subdifferential]].
