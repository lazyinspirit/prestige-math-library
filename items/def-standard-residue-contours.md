---
id: def-standard-residue-contours
kind: definition
title: "Standard semicircle, rectangle, keyhole, indentation, and sector contours"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cauchy-principal-value,
       def-complex-logarithms-principal-logarithm-and-complex-powers,
       cor-principal-logarithm-is-holomorphic-on-the-slit-plane]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8"
      url: "https://complexanalysis.org/web/ch_residue.html"
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Definition

All contours on this page are positively oriented unless a local direction is
stated explicitly.

- The **upper semicircle contour of radius $R$** is the union of the real
  segment $[-R,R]$ and the arc
  $\gamma_R^+(t)=Re^{it}$ for $0\le t\le\pi$.
- The **lower semicircle contour of radius $R$** traverses the real segment
  from $R$ to $-R$ and then the lower arc
  $\gamma_R^-(t)=Re^{-it}$ with $t$ decreasing from $\pi$ to $0$.
- The **rectangle contour**
  $\partial[-R,R]\times[-T,T]$ is the positively oriented boundary of the
  Euclidean rectangle with vertices $\pm R\pm iT$.
- The **keyhole contour** about the positive real axis with radii
  $0<\varepsilon<R$ is the positively oriented boundary of the slit annulus
  $\{z:\varepsilon<|z|<R,\ z\notin[0,\infty)\}$: it consists of the upper lip
  $x+i0$ from $\varepsilon$ to $R$, the outer circle run counterclockwise, the
  lower lip $x-i0$ from $R$ to $\varepsilon$, and the inner circle run
  clockwise.
- An **upper indentation arc** around a real point $a$ of radius $\varepsilon$
  is the clockwise semicircle $a+\varepsilon e^{it}$ for $\pi\ge t\ge0$; a
  **lower indentation arc** is the counterclockwise semicircle
  $a+\varepsilon e^{it}$ for $\pi\le t\le2\pi$.
- The **sector contour** with opening angles $\alpha<\beta$ and radii
  $0<\varepsilon<R$ is the positively oriented boundary of
  $\{\varepsilon<|z|<R,\ \alpha<\arg z<\beta\}$.

When a keyhole or sector contour is used with a complex power, this page states
the branch explicitly. In the default keyhole convention the slit is the
positive real axis and
$z^{\alpha-1}=\exp((\alpha-1)\operatorname{Log} z)$ is taken with $\operatorname{Arg} z\in(0,2\pi)$; the
principal branch from
[[def-complex-logarithms-principal-logarithm-and-complex-powers]] and
[[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]] is used only when
the slit is the negative real axis.
