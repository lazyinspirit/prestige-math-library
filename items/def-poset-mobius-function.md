---
id: def-poset-mobius-function
kind: definition
title: "The integer-valued Möbius function $\\mu_P$ of a locally finite poset"
status: published
origin: session
deps: [thm-incidence-algebra-invertibility-criterion, def-delta-and-zeta-incidence-functions, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
pipeline_run: null
---

## Definition

Let $P$ be a locally finite poset. Take coefficients in the commutative ring $\mathbb Z$ ([[thm-int-comm-ring]]). The zeta incidence function has diagonal value $1$, hence is convolution-invertible by [[thm-incidence-algebra-invertibility-criterion]]. The **Möbius function of $P$** is its unique inverse

$$\mu_P:=\zeta^{-1}\in I(P,\mathbb Z),$$

so

$$\mu_P*\zeta=\delta=\zeta*\mu_P$$

with $\delta$ and $\zeta$ as in [[def-delta-and-zeta-incidence-functions]]. Its value $\mu_P(x,y)$ is therefore an integer for every $x\le y$.

## Remarks

The coefficient ring is fixed as $\mathbb Z$. When a formula takes values in another ring $R$, the integer $\mu_P(x,y)$ acts through its canonical repeated-addition multiple of $1_R$; no characteristic-dependent second Möbius function is introduced.
