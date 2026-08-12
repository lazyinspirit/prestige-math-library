---
id: cor-length-of-the-graph-of-a-c1-function
kind: corollary
title: "If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f'$ extends continuously to $[a,b]$, then the graph of $f$ has length $\\int_a^b\\sqrt{1+f'(t)^2}\\,dt$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-c1-paths-have-length-equal-to-the-integral-of-speed, def-vector-valued-derivative-and-integral, def-p-norms-on-rn, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: specialization
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. R. Shastri, Metric Spaces, Section 5"
      url: "https://www.math.iitb.ac.in/~ars/ma403.pdf"
pipeline_run: null
---

## Statement

Let $a<b$, let $f:[a,b]\to\mathbb R$ be continuous and differentiable on $(a,b)$, and suppose $f'$ extends continuously to $q:[a,b]\to\mathbb R$. Then the graph path $\gamma(t)=(t,f(t))$ is rectifiable and

$$L(\gamma)=\int_a^b\sqrt{1+q(t)^2}\,dt.$$

## Facts & Assumptions

**Given:** The scalar function $f$, extension $q$, and graph path $\gamma$.

[L1] Vector differentiation is componentwise ([[def-vector-valued-derivative-and-integral]]).

[L2] In $\mathbb R^2$, $\lVert(x,y)\rVert_2=\sqrt{x^2+y^2}$ ([[def-p-norms-on-rn]], [[thm-of-square-roots]]).

[L3] A path with continuous derivative extension $v$ has length $\int\lVert v\rVert_2$ ([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]).

## Proof

**Proof technique:** specialization.

1.1 By [L1], the graph path has interior derivative $(1,f'(t))$ and continuous extension $v(t)=(1,q(t))$. [given, L1]

2.1 By [L2], $\lVert v(t)\rVert_2=\sqrt{1+q(t)^2}$. [step 1.1, L2]

3.1 Apply [L3] and substitute the speed from step 2.1. [step 1.1, step 2.1, L3] ∎
