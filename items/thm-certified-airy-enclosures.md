---
id: thm-certified-airy-enclosures
kind: theorem
title: Soundness of finite Airy enclosures
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [alg-certified-airy-evaluation, alg-certified-gamma-loggamma-evaluation, thm-certified-gamma-loggamma-enclosures, alg-certified-elementary-range-evaluation, thm-real-elementary-range-enclosures, def-certified-evaluation-result-contract, def-outward-rounded-interval-and-ball-operations, lem-airy-series-coefficient-recurrence-and-tail, thm-outward-rounded-operations-are-isotone-and-dag-sound]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §9.17(i), numerical evaluation
      url: https://dlmf.nist.gov/9.17
    - title: DLMF, §9.4, Airy Maclaurin series
      url: https://dlmf.nist.gov/9.4
    - title: DLMF, §§9.2(ii), 9.4, and 9.17(i)
      url: https://dlmf.nist.gov/9.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 7
---

## Statement

Whenever [[alg-certified-airy-evaluation]] returns `success`, its interval or
rectangle contains the requested $\operatorname{Ai}(z)$ or
$\operatorname{Bi}(z)$ and passes the requested absolute-radius test. Any
relative certificate is valid only when the enclosure excludes zero. No
success guarantee is made for every input or finite cap. Every execution with finite
caps terminates.

## Facts & Assumptions

**Given:** A successful return of
[[alg-certified-airy-evaluation]] using a sound outward interval backend.

[A1] [[alg-certified-gamma-loggamma-evaluation]] supplies each finite Gamma
call; [[thm-certified-gamma-loggamma-enclosures]] says every successful call
encloses the Gamma range on its dyadic input rectangle.

[A2] [[alg-certified-elementary-range-evaluation]] supplies the finite real
range calls for powers of 3; their finite outputs are sound by
[[thm-real-elementary-range-enclosures]].

[A3] [[def-outward-rounded-interval-and-ball-operations]] and
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite
interval operation encloses its exact result.

[F1] [[def-certified-evaluation-result-contract]]: the success radius test
and zero-exclusion rule have the stated absolute and relative meanings.

[F2] [[lem-airy-series-coefficient-recurrence-and-tail]]: each nonzero Airy
residue-class tail is bounded by its first omitted term divided by $1-q$ when
all later ratios are at most $q<1$.

[F3] [[alg-certified-airy-evaluation]]: the procedure encloses the two
partial sums, adds the two residue-class tail bounds, and uses certified
Gamma initial constants.

## Proof
1.1 The initial coefficients used by the procedure enclose the exact Airy initial values by [F3], with the Gamma calls sound by [A1] and the powers of 3 sound by [A2]. Arithmetic on these intervals is sound by [A3]. The series definition and recurrence determine all later coefficients, so the resulting partial sums enclose their exact finite series sums. [A1, A2, A3, F3]

2.1 By [F2], each nonzero omitted class tail lies within its computed absolute tail bound; the third class is zero because its initial coefficient is zero and the recurrence preserves zero. Therefore the exact Airy value lies in the partial-sum enclosure enlarged by the sum of the two tail bounds. [A3, F2, F3, step 1.1]

3.1 The algorithm reports success only when that containing rectangle passes the requested radius test, and its relative flag obeys [F1]. If its finite caps do not allow that test, the result is inconclusive; no claim of universal success is made. [A1, A2, F1, F3, step 2.1]

4.1 The stage loop is finite; each Gamma and elementary-range subcall has finite caps and truncation index, and the residue-class sums have at most the capped number of terms. Thus every capped execution terminates. [given, A1, A2, step 3.1, algebra] ∎
