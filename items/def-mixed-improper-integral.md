---
id: def-mixed-improper-integral
kind: definition
title: "Improper integrals with several singular ends"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint,
       def-oriented-integral, def-interval]
justified_by: []
aliases: []
landmark: false
proof_strategy: n/a
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If $f$ has a possible singularity at $c\in(a,b)$, define
$$\int_a^b f:=\int_a^c f+\int_c^b f$$
only when the two one-sided improper integrals converge separately. Cancellation between divergent sides is not allowed.

Likewise, for any finite split point $s$, define
$$\int_{-\infty}^{\infty}f:=\int_{-\infty}^{s}f+\int_s^\infty f$$
only when both tails converge. More generally, an interval with several singular ends is split into finitely many one-ended pieces, each of which must converge separately. Independence of the permitted split point is a theorem, not part of this definition.
