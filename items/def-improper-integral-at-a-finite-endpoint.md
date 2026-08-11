---
id: def-improper-integral-at-a-finite-endpoint
kind: definition
title: "Improper integrals at a finite singular endpoint"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-one-sided-limits, def-oriented-integral,
       def-darboux-integral, def-interval]
justified_by: []
aliases: []
landmark: false
proof_strategy: n/a
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Suppose $f$ is Riemann integrable on every $[c,b]$ with $a<c<b$. Its improper integral at the left endpoint is
$$\int_a^b f(x)\,dx:=\lim_{c\downarrow a}\int_c^b f(x)\,dx,$$
provided the one-sided limit is a finite real number.

If instead $f$ is integrable on every $[a,c]$ with $a<c<b$, define
$$\int_a^b f(x)\,dx:=\lim_{c\uparrow b}\int_a^c f(x)\,dx.$$
Convergence always means existence of the displayed finite limit. The value assigned to $f$ at the singular endpoint, if any, is irrelevant because changing one endpoint value does not change any proper truncation integral.
