---
id: def-prime-above-and-residue-degree
kind: definition
title: "Primes above and residue degree"
status: published
origin: pipeline
deps: [def-ring-of-integers-of-a-number-field, def-finite-field-and-its-order]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, §3.3"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Definition

For finite $L/K$, a nonzero prime $\mathfrak P\subseteq\mathcal O_L$ lies
**above** $\mathfrak p$ when $\mathfrak P\cap\mathcal O_K=\mathfrak p$.  Its
residue degree is $f(\mathfrak P/\mathfrak p)=[\mathcal O_L/\mathfrak P:\mathcal O_K/\mathfrak p]$.
