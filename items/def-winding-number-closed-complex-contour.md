---
id: def-winding-number-closed-complex-contour
kind: definition
title: "The winding number of a closed contour about a point off its trace"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-contours-reversal-concatenation-and-closedness, def-complex-line-integral-over-a-rectifiable-path, thm-existence-of-complex-line-integrals-on-rectifiable-paths, thm-algebra-of-complex-derivatives, cor-complex-differentiability-implies-continuity, def-complex-domain]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Definition

Let $\gamma:[a,b]\to\mathbb C$ be a **closed** complex contour, that is a
rectifiable path with $\gamma(a)=\gamma(b)$
([[def-complex-contours-reversal-concatenation-and-closedness]]), with trace
$\gamma^\ast$, and let $p\in\mathbb C$ with $p\notin\gamma^\ast$. The **winding
number**, or **index**, of $\gamma$ about $p$ is

$$n(\gamma,p):=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-p},$$

the complex line integral of
[[def-complex-line-integral-over-a-rectifiable-path]].

The integral exists: $z\mapsto1/(z-p)$ is complex differentiable, hence
continuous, on $\mathbb C\setminus\{p\}$ by
[[thm-algebra-of-complex-derivatives]] and
[[cor-complex-differentiability-implies-continuity]], the trace $\gamma^\ast$ is
contained in that set, and $\gamma$ is rectifiable, so
[[thm-existence-of-complex-line-integrals-on-rectifiable-paths]] applies.

## Remarks

The index is attached to the **parametrised** contour and not to its trace. Two
closed contours with the same trace can have different indices about the same
point, because the parametrisation records how many times, and in which
direction, the trace is traversed; the definition above reads $\gamma$ as a map
and the integral depends on that map.

The point $p$ is required to lie off the trace. On the trace the integrand
$1/(z-p)$ is undefined at $z=p$, so no value $n(\gamma,p)$ is defined there and
none is asserted anywhere below.

No connectedness is assumed of the set $\mathbb C\setminus\gamma^\ast$ where the
index lives; when a **complex domain** ([[def-complex-domain]]) is wanted it is
said so explicitly.
