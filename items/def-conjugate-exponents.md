---
id: def-conjugate-exponents
kind: definition
title: "Conjugate exponents, including the endpoint conventions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Definition 7.6"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7A"
      url: "https://measure.axler.net/MIRA.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
---

## Definition

Numbers $p,q \in [1,\infty]$ are **conjugate exponents** when

$$\frac1p+\frac1q=1,$$

with the convention $1/\infty:=0$. Thus the endpoint pairs $(1,\infty)$ and
$(\infty,1)$ are conjugate, and if $1<p<\infty$ then the conjugate of $p$ is

$$q=\frac{p}{p-1}.$$

No other endpoint pair is conjugate: $(1,1)$ gives $2$, while
$(\infty,\infty)$ gives $0$.
