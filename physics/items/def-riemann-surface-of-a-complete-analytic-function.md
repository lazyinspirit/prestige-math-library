---
id: def-riemann-surface-of-a-complete-analytic-function
kind: definition
title: "The germ space of a complete analytic function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-analytic-function, def-function-element-and-direct-analytic-continuation]
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
    - title: "Curtis T. McMullen, Riemann Surfaces, Theorem 4.3"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §1.3"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Definition

Let $\mathcal A(\xi_0,\Omega)$ be a complete analytic function
([[def-complete-analytic-function]]).

Its **germ space** is the underlying set

$$\mathcal R(\xi_0,\Omega):=\mathcal A(\xi_0,\Omega).$$

If $(f,U)$ is a function element whose germ $[f]_z$ lies in
$\mathcal R(\xi_0,\Omega)$ for every $z \in U$, define the associated subset

$$N(f,U):=\{[f]_z \in \mathcal R(\xi_0,\Omega): z \in U\}.$$

These sets are the intended basic neighbourhoods of the germ space.

The **projection**

$$p:\mathcal R(\xi_0,\Omega)\longrightarrow\Omega$$

is the base-point map

$$p([f]_z)=z.$$

When the neighbourhoods $N(f,U)$ are proved to form a compatible holomorphic
atlas, this germ space is called the **Riemann surface of the complete analytic
function**.
