---
id: def-strict-and-mod-null-invariant-sigma-algebras
kind: definition
title: Strict and mod-null invariant sigma-algebras
deps: [def-measure-preserving-transformation-and-system, def-sigma-algebra, def-measure-null-set-and-almost-everywhere]
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
    - title: E–W Proposition 2.14; Sarig Proposition 1.1
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
justified_by: [prop-invariant-families-are-sigma-algebras]
---

## Definition

For a system in [[def-measure-preserving-transformation-and-system]], set
$$\mathcal I=\{E\in\mathcal A:T^{-1}E=E\},\qquad \mathcal I'=\{E\in\mathcal A:\mu(T^{-1}E\mathbin\triangle E)=0\}.$$
These are respectively the **strictly invariant** and **invariant modulo null sets** families. All their members are measurable in the original sigma-algebra; the terminology uses [[def-sigma-algebra]] and [[def-measure-null-set-and-almost-everywhere]]. Their sigma-algebra property is proved in [[prop-invariant-families-are-sigma-algebras]].
