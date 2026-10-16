---
id: alg-qa-29-certified-natural-logarithm-enclosure
kind: algorithm
title: "Rational natural-logarithm enclosure search"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: []
justified_by:
  - lem-qa-29-certified-natural-logarithm-series
axiom_use: "No choice axiom is used; each iteration uses exact rational arithmetic."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "J. Lebl, Basic Analysis I, Section 5.4.1 (analytic logarithm interface)"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
verification:
  precheck: n/a
---

## Definition

**Input.** Rational numbers $x>0$ and $\tau>0$. **Output.** A positive integer $N$ and a rational interval $[L,U]$.

Compute $y=(x-1)/(x+1)$ and initialize $N=1$. At each iteration compute, by exact rational arithmetic,
$$S_N=2\sum_{j=0}^{N-1}\frac{y^{2j+1}}{2j+1},\qquad T_N=\frac{2|y|^{2N+1}}{(2N+1)(1-y^2)}.$$
If $T_N\le\tau$, return $N$ and $[L,U]=[S_N-T_N,S_N+T_N]$. Otherwise replace $N$ by $N+1$ and repeat. Each comparison is an exact rational comparison. Arithmetic and integer bit costs are charged separately; no running-time bound is part of this definition.
