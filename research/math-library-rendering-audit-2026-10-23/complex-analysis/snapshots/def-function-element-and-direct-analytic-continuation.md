---
id: def-function-element-and-direct-analytic-continuation
kind: definition
title: "Function elements and direct analytic continuation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-domain, def-complex-differentiability-holomorphic-and-entire, def-holomorphic-germ]
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
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §§1.3-1.4"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Curtis T. McMullen, Riemann Surfaces, Ch. 4"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
---

## Definition

A **function element** is a pair $(f,U)$ where $U \subseteq \mathbb C$ is a
complex domain ([[def-complex-domain]]) and $f:U \to \mathbb C$ is holomorphic
([[def-complex-differentiability-holomorphic-and-entire]]).

Let $(f,U)$ and $(g,V)$ be function elements. We say that $(g,V)$ is a
**direct analytic continuation** of $(f,U)$ when there is a point
$a \in U \cap V$ such that the germs $[f]_a$ and $[g]_a$ agree
([[def-holomorphic-germ]]).

Because equality of germs is symmetric, direct analytic continuation is a
symmetric relation on function elements. It records local agreement on an
overlap, not inclusion of one domain in the other.
