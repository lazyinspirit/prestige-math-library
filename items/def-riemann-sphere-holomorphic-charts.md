---
id: def-riemann-sphere-holomorphic-charts
kind: definition
title: "The standard holomorphic charts on the Riemann sphere, with holomorphy and poles at infinity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-riemann-sphere-one-point-compactification, def-complex-domain]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Definition

Let
$$U_0:=\widehat{\mathbb C}\setminus\{\infty\},\qquad U_\infty:=\widehat{\mathbb C}\setminus\{0\}.$$
Define charts
$$\phi_0:U_0\to\mathbb C,\ \phi_0(z)=z,$$
and
$$\phi_\infty:U_\infty\to\mathbb C,\qquad \phi_\infty(z)=\begin{cases}1/z,&z\in\mathbb C^\times,\\ 0,&z=\infty.\end{cases}$$
On the overlap $U_0\cap U_\infty=\mathbb C^\times$ the transition maps are
$$\phi_\infty\circ\phi_0^{-1}(w)=1/w,\qquad \phi_0\circ\phi_\infty^{-1}(w)=1/w,$$
which are holomorphic on $\mathbb C^\times$. These are the standard holomorphic
charts of the Riemann sphere.

If $V\subseteq\widehat{\mathbb C}$ is open and $f:V\to\mathbb C$, then $f$ is
**holomorphic at $\infty$** when $\infty\in V$ and the chart expression
$$F(w):=f(\phi_\infty^{-1}(w))=\begin{cases}f(1/w),&w\neq0,\\ f(\infty),&w=0\end{cases}$$
is holomorphic at $0$. A scalar-valued function defined on a punctured
neighbourhood of $\infty$ has a **pole at $\infty$** when the punctured chart
expression $w\mapsto f(1/w)$ has a pole at $0$ in the sense of
[[def-isolated-singularity-types]].
