---
id: def-complex-primitive
kind: definition
title: "A primitive of a complex function on an open set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-differentiability-holomorphic-and-entire]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb C$ be open and let $f:U\to\mathbb C$. A **primitive** of $f$ on $U$ is a holomorphic function $F:U\to\mathbb C$ in the sense of [[def-complex-differentiability-holomorphic-and-entire]] such that $F'(z)=f(z)$ for every $z\in U$.
