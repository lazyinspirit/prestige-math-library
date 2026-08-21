---
id: def-modulus-of-continuity-and-osgood-condition
kind: definition
title: "Moduli of continuity and the Osgood divergence condition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-uniform-continuity, def-improper-integral-at-a-finite-endpoint, def-monotone-function]
justified_by: []
forward_refs: []
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
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Definition

A **modulus of continuity** is a continuous nondecreasing function $\rho:[0,r_0]\to[0,\infty)$ with $\rho(0)=0$ and $\rho(r)>0$ for $r>0$. A vector field has state modulus $\rho$ on a set if

$$\|F(t,x)-F(t,y)\|_2\le\rho(\|x-y\|_2)$$

whenever the two points with the same time lie in that set and $\|x-y\|_2\le r_0$. Equivalently, the phrase is used without that last qualifier only on sets whose state-space diameter is at most $r_0$.

The modulus satisfies the **Osgood divergence condition** when

$$\int_{0^+}^{r_0}\frac{dr}{\rho(r)}=+\infty,$$

meaning that the compact truncation integrals $\int_\varepsilon^{r_0}dr/\rho(r)$ are unbounded as $\varepsilon\downarrow0$. The value at $0$ is never divided by.
