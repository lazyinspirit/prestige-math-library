---
id: def-analytic-continuation-along-a-path
kind: definition
title: "Analytic continuation along a path by admissible chains"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function-element-and-direct-analytic-continuation, def-homotopy-relative-and-path-homotopy]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §1.4"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Henry Wilton, Riemann Surfaces lecture notes, §9.2"
      url: "https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton"
---

## Definition

Let $\Omega \subseteq \mathbb C$ be a complex domain, let
$\gamma:[0,1] \to \Omega$ be a path, and let $\xi_0$ be a holomorphic germ at
$\gamma(0)$.

An **admissible continuation chain** for $\xi_0$ along $\gamma$ consists of

1. a subdivision
   $$0=t_0<t_1<\cdots<t_m=1,$$
2. function elements $(f_j,U_j)$ for $0 \le j \le m-1$,

such that

$$\gamma([t_j,t_{j+1}]) \subseteq U_j \qquad(0 \le j \le m-1),$$

the initial germ of $(f_0,U_0)$ at $\gamma(0)$ is $\xi_0$, and
for every $j<m-1$ the successive representatives agree at the joining point:
$$[f_j]_{\gamma(t_{j+1})}=[f_{j+1}]_{\gamma(t_{j+1})}.$$
Equivalently, $(f_{j+1},U_{j+1})$ is a direct analytic continuation of
$(f_j,U_j)$ with the overlap point chosen to be $\gamma(t_{j+1})$
([[def-function-element-and-direct-analytic-continuation]]).

If such a chain exists, its **terminal germ** is the germ of $f_{m-1}$ at the
endpoint $\gamma(1)$. We then say that $\xi_0$ **admits analytic continuation
along $\gamma$**.
