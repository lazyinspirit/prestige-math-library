---
id: thm-certified-gamma-loggamma-enclosures
kind: theorem
title: Soundness of finite Gamma and log-Gamma enclosures
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [alg-certified-gamma-loggamma-evaluation, alg-certified-elementary-range-evaluation, def-certified-evaluation-result-contract, def-outward-rounded-interval-and-ball-operations, lem-loggamma-shift-independent, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.11, asymptotic expansions
      url: https://dlmf.nist.gov/5.11
    - title: DLMF, §5.5, functional relations
      url: https://dlmf.nist.gov/5.5
    - title: DLMF, §§5.5, 5.8, and 5.11
      url: https://dlmf.nist.gov/5.8
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 5
---

## Statement

For any finite dyadic rectangle $Z\subset\mathbb C\setminus(-\infty,0]$,
whenever [[alg-certified-gamma-loggamma-evaluation]] returns `success`, its
returned enclosure contains the range of $\Gamma$ or the continued log-Gamma
branch on $Z$ and passes the stated absolute-radius test. Any reported
relative certificate obeys the zero-exclusion condition. No assertion
guarantees success for every valid input or finite cap. Every execution with
finite caps terminates.

## Facts & Assumptions

**Given:** A successful return on $Z$ of
[[alg-certified-gamma-loggamma-evaluation]] using a sound outward interval
backend.

[A1] [[alg-certified-elementary-range-evaluation]] supplies every finite real
and complex elementary range used inside the Gamma evaluator; its soundness
is given by [[thm-real-elementary-range-enclosures]] and
[[thm-complex-elementary-range-enclosures]]. Outward interval arithmetic
encloses its exact arithmetic operations.

[F1] [[alg-certified-gamma-loggamma-evaluation]]: the product and Stirling
branches each enclose the same continued log-Gamma value before any requested
exponential is applied.

[F2] [[def-certified-evaluation-result-contract]]: a `success` enclosure
contains the exact value and passes the absolute-radius test; relative
certification also requires zero exclusion.

[F3] [[lem-loggamma-shift-independent]]: $e^{\ell(z)}=\Gamma(z)$ on the
slit plane.

## Proof
1.1 In the product branch, the finite log-Gamma series and its explicit tail enclosure contain $\ell(z)$ by [F1]; every finite elementary subcall is sound by [A1]. In the Stirling branch, the sectorial remainder enlargement contains the same $\ell(z)$ by [F1]. Thus either candidate passed to the output stage contains the exact requested log-Gamma value. [A1, F1]

1.2 If the requested value is $\Gamma(z)$, the algorithm exponentiates the log-Gamma enclosure with outward interval operations. By [F3], its exact exponential is $\Gamma(z)$, so the resulting enclosure contains $\Gamma(z)$. [A1, F1, F3]

2.1 The algorithm reports success only after the enclosure passes the absolute-radius and any applicable relative-radius tests. By [F2] these are sound accuracy claims; zero-containing enclosures carry no relative guarantee. If no finite candidate passes within the caps it returns inconclusive, and representational failure at the final output returns range. [A1, F1, F2, F3, step 1.1, step 1.2]

3.1 The stage, shift, product-series, harmonic-sum, and elementary-range loops are all bounded by the stated finite caps; every elementary-range subcall has a finite DAG and finite truncation index. Therefore every capped execution terminates. [given, A1, step 2.1, algebra] ∎
