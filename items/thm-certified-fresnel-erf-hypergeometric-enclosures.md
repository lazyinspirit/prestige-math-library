---
id: thm-certified-fresnel-erf-hypergeometric-enclosures
kind: theorem
title: Soundness of the finite Fresnel, erf, and Gauss-series enclosures
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [alg-certified-fresnel-erf-hypergeometric-series, alg-certified-elementary-range-evaluation, def-certified-evaluation-result-contract, def-fresnel-erf-and-hypergeometric-series, def-outward-rounded-interval-and-ball-operations, lem-fresnel-series-geometric-tail, lem-erf-series-geometric-tail, lem-gauss-hypergeometric-series-geometric-tail, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §15.2(i), Gauss series
      url: https://dlmf.nist.gov/15.2
    - title: DLMF, §§7.6(i) and 15.2(i)
      url: https://dlmf.nist.gov/7.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 3
---

## Statement

If [[alg-certified-fresnel-erf-hypergeometric-series]] returns `success` for
$C,S,\operatorname{erf}$, or a Gauss-series value on its stated domain, its
returned interval or rectangle contains that exact function value and passes
the requested absolute-radius test. A relative certificate is valid only when
the enclosure excludes zero and the contract's relative-radius test passes.
Every execution with finite caps terminates. The theorem makes no claim of success for every valid input.

## Facts & Assumptions

**Given:** A successful return of the procedure in
[[alg-certified-fresnel-erf-hypergeometric-series]] with a sound outward
interval backend.

[A1] [[def-outward-rounded-interval-and-ball-operations]] and
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite
interval operation encloses its exact rational or interval result.

[A2] [[alg-certified-elementary-range-evaluation]] is the finite subroutine used for sqrt-pi range evaluation; its finite real and complex outputs are sound by [[thm-real-elementary-range-enclosures]] and [[thm-complex-elementary-range-enclosures]].

[F1] [[alg-certified-fresnel-erf-hypergeometric-series]]: a successful
series branch encloses its finite partial sum and enlarges it by the applicable
geometric tail bound before applying the radius test.

[F2] [[def-fresnel-erf-and-hypergeometric-series]]: the four functions on
the stated branches are represented by the specified series.

[F3] [[lem-fresnel-series-geometric-tail]]: the Fresnel tail bound contains
the exact omitted series tail when the tested ratio is below $1$.

[F4] [[lem-erf-series-geometric-tail]]: the $\operatorname{erf}$ tail bound
contains the exact omitted series tail when the tested ratio is below $1$.

[F5] [[lem-gauss-hypergeometric-series-geometric-tail]]: the Gauss tail bound
contains the exact omitted series tail when $N>|c|$ and $q_N<1$; terminating
parameter cases have zero tail after their last nonzero term.

[F6] [[def-certified-evaluation-result-contract]]: the radius and relative
tests specify exactly which claims accompany `success`.

## Proof
1.1 In each nonterminating success branch, the exact value is the sum of the partial series and its omitted tail by the series definitions in the algorithm contract. The relevant lemma among [F3], [F4], and [F5] bounds the modulus of that tail by the radius used to enlarge the partial-sum enclosure. In a terminating Gauss branch [F5] makes the tail exactly zero. [F1, F2, F3, F4, F5]

2.1 The outward interval backend encloses the exact arithmetic partial sums by [A1]. Every elementary-range subcall used for constants or interval images is sound by [A2]. Adding the symmetric tail enlargement therefore gives an interval or rectangle containing the exact full value. [A1, A2, F1, step 1.1]

3.1 The procedure reports success only after the containing enclosure passes the absolute-radius test; its relative flag is set only under the stated zero-exclusion and relative-radius conditions. These are exactly the certificate claims in [F6]. If no candidate passes, the procedure returns inconclusive; no universal success is asserted. [A1, A2, F1, F6, step 2.1]

4.1 The outer stage count is finite, each partial sum has at most the capped number of terms, and each elementary-range call has a finite DAG, format, and truncation index. Thus every capped execution terminates. [given, A2, step 3.1, algebra] ∎
