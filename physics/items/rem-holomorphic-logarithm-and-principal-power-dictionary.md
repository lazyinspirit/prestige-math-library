---
id: rem-holomorphic-logarithm-and-principal-power-dictionary
kind: remark
title: "Dictionary for holomorphic logarithm branches, the principal logarithm, and principal powers"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-logarithms-principal-logarithm-and-complex-powers, def-continuous-argument-and-holomorphic-logarithm-branches, cor-principal-logarithm-is-holomorphic-on-the-slit-plane]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 2 §3.4 The Logarithm"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Remark

This page keeps two objects distinct and never silently identifies them.

First, the pointwise **principal logarithm** of
[[def-complex-logarithms-principal-logarithm-and-complex-powers]] is defined for
every $z\ne0$ by

$$\operatorname{Log}z=\log r+i\theta,\qquad z=r(\cos\theta+i\sin\theta),\quad -\pi<\theta\le\pi.$$

On the negative real axis the principal polar form uses $\theta=\pi$, so
$\operatorname{Log}(-1)=i\pi$. That value is a boundary datum of the slit plane,
not the value of a holomorphic branch defined across the cut.

Second, [[def-continuous-argument-and-holomorphic-logarithm-branches]] defines a
**holomorphic logarithm branch** of $z$ on an open set $V$ with $0\notin V$: a
holomorphic $L:V\to\mathbb C$ with $\exp(L(z))=z$ for every $z\in V$. On the
slit plane $S=\mathbb C\setminus\{x\in\mathbb R:x\le0\}$ the principal logarithm
is exactly the holomorphic branch normalised by $F(1)=0$, by
[[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]; in particular
$-\pi<\operatorname{Im}\operatorname{Log}z<\pi$ for every $z\in S$.

Consequently "the principal branch of the logarithm" on this page means the
holomorphic function on $S$, while the pointwise principal value on the
negative axis is a separate quantity: as $z$ approaches $-1$ from above or
below, $\operatorname{Im}\operatorname{Log}z$ tends to $\pi$ or $-\pi$,
one-sided limits that assign no value on the cut itself. The branch-defined
powers below take a holomorphic branch as input and inherit this discipline.
