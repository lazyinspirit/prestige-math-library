---
id: thm-certified-erfcx-enclosures
kind: theorem
title: Soundness of finite erfcx enclosures
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [alg-certified-erfcx-evaluation, alg-certified-elementary-range-evaluation, def-certified-evaluation-result-contract, def-outward-rounded-interval-and-ball-operations, lem-erfcx-continued-fraction-enclosure, lem-erfcx-asymptotic-remainder, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §7.9, continued fractions
      url: https://dlmf.nist.gov/7.9
    - title: DLMF, §7.12(i), equation 7.12.1
      url: https://dlmf.nist.gov/7.12
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§3 and 5
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 5
---

## Statement

If [[alg-certified-erfcx-evaluation]] returns `success` for $x>0$, the
returned interval contains $\operatorname{erfcx}(x)$ and passes the requested
absolute-radius test. A relative certificate is valid only if zero is outside
the interval and the required relative-radius test passes. Every execution
with finite caps terminates. The theorem makes no success claim for every
$x$ or finite cap.

## Facts & Assumptions

**Given:** A successful return of [[alg-certified-erfcx-evaluation]] using a
sound outward interval backend.

[A1] [[alg-certified-elementary-range-evaluation]] supplies the finite
square-root range call for $\sqrt\pi$; soundness of that real output is given
by [[thm-real-elementary-range-enclosures]].

[A2] [[def-outward-rounded-interval-and-ball-operations]] and
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite
arithmetic interval operation encloses its exact result.

[F1] [[lem-erfcx-continued-fraction-enclosure]]: each finite-depth continued-
fraction interval contains the exact value.

[F2] [[lem-erfcx-asymptotic-remainder]]: the signed remainder interval formed
from $S_N$ and $B_N$ contains the exact value for every $N\ge1$.

[F3] [[def-certified-evaluation-result-contract]]: success requires a
containing interval with the stated radius, and relative certification
requires zero exclusion.

[F4] [[alg-certified-erfcx-evaluation]]: the procedure returns only a
continued-fraction or signed-asymptotic candidate, or a non-success status.

## Proof
1.1 A continued-fraction candidate contains $\operatorname{erfcx}(x)$ by [F1]. A signed-asymptotic candidate contains it by [F2]. The interval evaluation of each candidate is sound by [A1] and [A2]. If the procedure intersects both candidates, their common exact value lies in the intersection; otherwise the selected candidate remains an enclosure. [A1, A2, F1, F2, F4]


2.1 Thus every interval eligible for a success return contains the exact value. The finite arithmetic and intersection preserve inclusion by [A2] and the algorithm definition. [A2, F4, step 1.1]


3.1 The procedure reports success only after the absolute-radius test in [F3] and sets a relative flag only when the interval excludes zero and the relative-radius test passes. No width decrease or universal success is asserted. [F3, F4, step 2.1]


4.1 The stage loop is finite; every continued-fraction recurrence, asymptotic sum, and elementary-range call has finite depth, terms, format, and truncation index. Every branch has an explicit return or proceeds to the next bounded stage. Therefore every capped execution terminates. [given, A1, step 2.1, step 3.1, algebra] ∎

