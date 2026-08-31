---
id: def-holomorphic-germ
kind: definition
title: "Holomorphic germs at a point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-differentiability-holomorphic-and-entire]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §1.2"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Curtis T. McMullen, Riemann Surfaces, Ch. 4"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
---

## Definition

Fix a point $a \in \mathbb C$. Two holomorphic functions
$f:U \to \mathbb C$ and $g:V \to \mathbb C$, defined on open neighbourhoods
$U,V$ of $a$ ([[def-complex-differentiability-holomorphic-and-entire]]), are
**equivalent at $a$** when there is an open neighbourhood $W$ of $a$ with
$W \subseteq U \cap V$ and

$$f|_W = g|_W.$$

This is an equivalence relation. An equivalence class is a **holomorphic germ at
$a$** and is written $[f]_a$ when $f$ is one of its representatives.

If $[f]_a = [g]_a$, then $f(a) = g(a)$ because every witnessing neighbourhood
contains $a$. So the value of a germ at its base point is well defined and may
be written $[f]_a(a)$ or simply $f(a)$ when no confusion can occur.
