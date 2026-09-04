---
id: def-complex-exponential
kind: definition
title: "The complex exponential by its power series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-series-power-series-and-absolute-convergence, def-complex-integer-powers, def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive]
justified_by: [lem-complex-exponential-series-converges-everywhere]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Definition

Let $\iota_{\mathbb R}\colon\mathbb N\to\mathbb R$ be the canonical-natural map
of [[def-canonical-natural]], and let $j\colon\mathbb R\to\mathbb C$ be the real
embedding $j(x)=x+i0$ from [[def-complex-numbers-and-arithmetic]]. For every
$n\in\mathbb N$, the factorial $n!$ is nonzero by
[[def-factorial-and-falling-factorial]], so
$\iota_{\mathbb R}(n!)>0$ by [[lem-of-naturals-positive]] and consequently
$j(\iota_{\mathbb R}(n!))\ne0$ in the complex field
[[thm-complex-numbers-form-a-field]].

For $z\in\mathbb C$, define
$$ \exp z:=\sum_{n=0}^{\infty}\frac{z^n}{j(\iota_{\mathbb R}(n!))}. $$
whenever this complex series converges. Inside a complex expression we
abbreviate the embedded denominator $j(\iota_{\mathbb R}(n!))$ by $n!$, so the
same definition may be written $\exp z=\sum z^n/n!$ without identifying a
natural number with a complex number. Powers and series are those of
[[def-complex-integer-powers]] and
[[def-complex-series-power-series-and-absolute-convergence]]. The convergence
for every $z\in\mathbb C$ is discharged by
[[lem-complex-exponential-series-converges-everywhere]].
