---
id: def-invertible-measure-preserving-system
kind: definition
title: Invertible measure-preserving systems
deps: [def-measure-preserving-transformation-and-system]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Einsiedler–Ward Definition 2.1 p.13 and conull restriction convention in Definition 2.7 p.16
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
---

## Definition

A system in [[def-measure-preserving-transformation-and-system]] is **invertible** if $T$ is a bijection and $T^{-1}:X\to X$ is measurable. It is **invertible modulo null sets** if there is a measurable $X_0\subseteq X$ with $\mu(X\setminus X_0)=0$ and $T(X_0)=X_0$, such that $T|_{X_0}$ is a bijection with measurable inverse for the trace sigma-algebra. This is an actual invariant conull restriction, not a choice of arbitrary pointwise inverses on exceptional sets.
