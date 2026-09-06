---
id: def-ip
kind: definition
title: "The class IP"
status: published
origin: session
deps: [def-completeness-and-soundness, def-probabilistic-polynomial-time-machine]
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
    - title: "Arora and Barak, Definition 8.5"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

The class $\mathrm{IP}$ consists of languages having an interactive protocol with a probabilistic polynomial-time verifier ([[def-probabilistic-polynomial-time-machine]]), polynomially bounded interaction, completeness at least $2/3$, and soundness at most $1/3$ in the sense of [[def-completeness-and-soundness]]. Equivalent constant gaps follow by sequential repetition.
