---
id: def-complex-differentiability-holomorphic-and-entire
kind: definition
title: "Complex differentiability at a point, the complex derivative, holomorphic functions, and entire functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-complex-plane-euclidean-dictionary, def-complex-metric-convergence-and-continuity, def-metric-topology]
justified_by: [lem-uniqueness-of-the-complex-derivative]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §2.1.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "J. Orloff, MIT 18.04 Topic 2, §2.6"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb C$ be open, let $a\in U$, and let $f:U\to\mathbb C$. The function $f$ is **complex differentiable at $a$** if the limit

$$ \lim_{\substack{h\to0\\ h\ne0,\ a+h\in U}}\frac{f(a+h)-f(a)}{h} $$

exists in the metric of [[def-complex-metric-convergence-and-continuity]]. Its value is the **complex derivative** of $f$ at $a$, denoted $f'(a)$. The increments are nonzero and remain in the domain; because $U$ is open, all sufficiently small increments are allowed.

The function $f$ is **holomorphic on $U$** when it is complex differentiable at every point of $U$. A function holomorphic on all of $\mathbb C$ is **entire**. The word analytic is reserved for the local power-series notion.
