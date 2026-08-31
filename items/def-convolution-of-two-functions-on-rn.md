---
id: def-convolution-of-two-functions-on-rn
kind: definition
title: "Convolution of two functions on $\\mathbb{R}^n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-l-one-of-a-measure]
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Definition

Let $f,g : \mathbb{R}^n \to \mathbb{C}$ be measurable functions. When, for a
given $x \in \mathbb{R}^n$, the function

$$
y \longmapsto f(x-y)g(y)
$$

is measurable and integrable on $\mathbb{R}^n$, the **convolution** of $f$ and
$g$ at $x$ is

$$
(f*g)(x) := \int_{\mathbb{R}^n} f(x-y)g(y)\,dy.
$$

For $L^1$ classes, later items make the representative convention explicit.
