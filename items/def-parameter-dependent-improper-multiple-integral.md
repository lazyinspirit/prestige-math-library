---
id: def-parameter-dependent-improper-multiple-integral
kind: definition
title: "Parameter-dependent improper multiple integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-improper-multiple-integral-and-absolute-convergence]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Functions Defined by Improper Integrals, §2"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_IMPROPER_FUNCTIONS.PDF"
pipeline_run: null
---

## Definition

Let $D\subseteq\mathbb R^n$ be open, let $I\subseteq\mathbb R$ be an interval, and let $f:D\times I\to\mathbb R$. For $t\in I$, write $f_t(x):=f(x,t)$. If every slice $f_t$ is locally Riemann integrable and absolutely improperly integrable in the sense of [[def-improper-multiple-integral-and-absolute-convergence]], then

$$F(t):=\int_D f(x,t)\,dx$$

defines the **parameter-dependent improper multiple integral** of $f$ on $I$.

Local domination near $t_0\in I$ means that some relative neighborhood $J\subseteq I$ of $t_0$ and some nonnegative improperly integrable $g:D\to\mathbb R$ satisfy $|f(x,t)|\le g(x)$ for all $x\in D$ and $t\in J$.
