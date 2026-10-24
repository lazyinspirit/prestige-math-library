---
id: lem-newman-damped-contour-estimates
title: "Newman damped contour estimates"
kind: lemma
status: published
origin: pipeline
deps: [thm-cauchy-integral-formula-circle]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a71.4, proof of Theorem 1.8, right and left semicircle estimates"
      url: https://kskedlaya.org/ant/chap-pnt.html
proof_strategy: direct argument
---

## Statement

Let $f:[0,\infty)\to\mathbb C$ be locally integrable with $|f|\le B$, let $g(z)=\int_0^\infty f(t)e^{-zt}\,dt$ for $\operatorname{Re}z>0$, and $g_T(z)=\int_0^T f(t)e^{-zt}\,dt$. For $R>0,T\ge0$, set $K_R(z)=(1+z^2/R^2)/z$. On the right and left semicircles $C_+,C_-$ of radius R,
$$\left|\int_{C_+}(g-g_T)e^{Tz}K_R(z)\,dz\right|\le\frac{2\pi B}{R},\qquad\left|\int_{C_-}g_Te^{Tz}K_R(z)\,dz\right|\le\frac{2\pi B}{R}.$$
Integrals at the imaginary endpoints are interpreted as improper limits when needed.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.



## Proof

1.1 For $u=\operatorname{Re}z>0$, $|g-g_T|\le Be^{-Tu}/u$. For $u<0$, $|g_T|\le B(e^{-Tu}-1)/(-u)$, including the zero value at T=0. These inequalities follow by integrating the absolute values on the respective tail and finite interval. [given, algebra]

2.1 On $|z|=R$, $K_R(z)=2\operatorname{Re}z/R^2$, since $1/z=\overline z/R^2$. Multiplication by $|e^{Tz}|$ therefore bounds either integrand by $2B/R^2$. The semicircle length is $\pi R$, giving both estimates. The same uniform bound makes integrals on arcs tending to either endpoint Cauchy, so the improper endpoint interpretation exists. [step 1.1, algebra] ∎
