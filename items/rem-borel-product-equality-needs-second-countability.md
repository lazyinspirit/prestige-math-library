---
id: rem-borel-product-equality-needs-second-countability
kind: remark
title: "The equality B(X) tensor B(Y) = B(X x Y) needs second countability"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-borel-products-of-euclidean-spaces-are-euclidean-borel, def-second-countable-space]
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Proposition 5.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

The proof of
[[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]] uses the fact
that every open subset of the product is a countable union of open rectangles.
That countable basis input is exactly where second countability enters. Without
it, $\mathcal B(X)\otimes\mathcal B(Y)$ can be strictly smaller than
$\mathcal B(X \times Y)$.
