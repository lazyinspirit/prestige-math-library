---
id: def-complex-annulus
kind: definition
title: "Annuli in the complex plane"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §§1.1-1.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf"
pipeline_run: null
---

## Definition

Let $a\in\mathbb C$ and let $0\le r<R\le\infty$. The **annulus** about $a$
with inner radius $r$ and outer radius $R$ is

$$A(a;r,R):=\{\,z\in\mathbb C:r<|z-a|<R\,\}.$$

When $R=\infty$, the condition $|z-a|<R$ is omitted, so
$A(a;r,\infty)=\{\,z:|z-a|>r\,\}$. When $r=0$ and $R<\infty$, the annulus is the
punctured disc $0<|z-a|<R$.

## Remarks

The boundary circles $|z-a|=r$ and $|z-a|=R$ are not part of the annulus. In
particular $A(a;0,R)$ is not the open disc $|z-a|<R$, because the centre $a$ is
missing.

The finite annulus $A(a;r,R)$ with $0<r<R<\infty$, the punctured disc
$A(a;0,R)$, and the exterior domain $A(a;r,\infty)$ are treated by the same
notation because Laurent expansions on all three have the same local form.
