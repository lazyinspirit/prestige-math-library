---
id: fs-semisimple-rings-are-commutative
kind: false-statement
title: "False statement: every semisimple ring is commutative"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-matrix-ring-decomposition-into-minimal-left-ideals, cor-matrix-rings-are-noncommutative-in-dimension-at-least-two]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

**False claim:** every semisimple ring is commutative. See [[ex-matrix-ring-decomposition-into-minimal-left-ideals]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] For every field $F$ and $n\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $$M_n(F)=\bigoplus_{j=1}^n M_n(F)e_{jj}$$ of simple left ideals. ([[ex-matrix-ring-decomposition-into-minimal-left-ideals]]).

[L2] For every field $F$ and every natural $n\ge2$, the ring $M_n(F)$ is not commutative. ([[cor-matrix-rings-are-noncommutative-in-dimension-at-least-two]]).

## Refutation

**Proof technique:** direct.

1.1 For any field $F$, the preceding decomposition makes $M_2(F)$ semisimple, while two matrix units multiply in opposite orders to different results. [L1, L2, given, algebra]

2.1 The witness does not depend on the characteristic: in $M_2(F)$ one has $e_{11}e_{12}=e_{12}$ and $e_{12}e_{11}=0$, and $e_{12}\ne0$ in every field, characteristic two included, so the two products differ there as well. This proves the stated claim. [step 1.1, L2, given, algebra] ∎
