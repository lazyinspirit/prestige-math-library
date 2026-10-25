---
id: thm-floating-filter-sign-is-exact
kind: theorem
title: A certified floating determinant filter returns only the exact sign
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 3
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [alg-floating-filter-for-geometric-determinants, lem-leibniz-determinant-forward-error-bound, thm-outward-rounded-operations-are-isotone-and-dag-sound, lem-directed-dyadic-rounding-enclosure-and-error]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §§4.2–4.4"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "CGAL Developer Manual, Robustness Issues, §11.1"
      url: "https://cgal.geometryfactory.com/CGAL/doc/main/Manual/devman_robustness.html"
---

## Statement

Whenever [[alg-floating-filter-for-geometric-determinants]] returns
`positive` or `negative`, the exact determinant has that same sign. An
`inconclusive` or nonfinite result carries no sign claim.

## Facts & Assumptions

**Given:** A finite matrix $M$ and a completed filter evaluation satisfying the stated model and range hypotheses in [[alg-floating-filter-for-geometric-determinants]].

[F1] [[alg-floating-filter-for-geometric-determinants]], step 4: the filter returns `positive` only when $\widehat D-E>0$, and `negative` only when $\widehat D+E<0$; otherwise it returns `inconclusive`. These tests compare exact dyadic rationals.

[F2] [[lem-leibniz-determinant-forward-error-bound]]: under the filter's operation hypotheses, $|\widehat D-\det M|\le\gamma_q S$.

[F3] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every exact node value of a finite expression DAG with finite operation results belongs to its computed interval enclosure.

[F4] [[lem-directed-dyadic-rounding-enclosure-and-error]]: directed upward rounding encloses each finite exact endpoint from above.

## Proof

1.1 The filter's absolute-term DAG evaluates $S$ from [F2]. Its returned upper endpoint $U$ satisfies $S\le U$ by [F3]. The definition of $E$ and [F4] give $E\ge\gamma_qU$, hence $E\ge\gamma_qS$. [given, F2, F3, F4, algebra]

2.1 Combining [F2] with [step 1.1] yields $|\widehat D-\det M|\le E$, so $\det M\in[\widehat D-E,\widehat D+E]$. [step 1.1, F2, algebra]

3.1 If the algorithm returns positive, [F1] says $\widehat D-E>0$; by [step 2.1], $\det M\ge\widehat D-E>0$. If it returns negative, then $\widehat D+E<0$ and [step 2.1] gives $\det M\le\widehat D+E<0$. In all other cases it returns no sign. [F1, step 2.1, algebra] ∎

