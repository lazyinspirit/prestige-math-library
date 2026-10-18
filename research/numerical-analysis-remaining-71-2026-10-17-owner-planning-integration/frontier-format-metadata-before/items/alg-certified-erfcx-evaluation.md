---
id: alg-certified-erfcx-evaluation
kind: algorithm
title: Finite certified evaluation of the scaled complementary error function
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-certified-evaluation-result-contract, def-erfcx-moment-sequence, lem-erfcx-moment-recurrence, lem-erfcx-continued-fraction-enclosure, lem-erfcx-asymptotic-remainder, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction]
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
---

## Statement

For an exact dyadic real input $x>0$, this finite procedure encloses
$\operatorname{erfcx}(x)$ using either the finite continued-fraction intervals
of [[lem-erfcx-continued-fraction-enclosure]] or the signed asymptotic
remainder of [[lem-erfcx-asymptotic-remainder]]. It takes positive absolute
tolerance, optional positive relative tolerance, finite depth and precision
caps, and a sound outward interval backend as in [A1]. It returns only
`success`, `inconclusive`, or `range`; $x\le0$ is outside this branch and
returns `domain`. No convergence claim for either depth sequence is made.

## Facts & Assumptions

**Given:** An exact real $x>0$, tolerances, finite caps, and the backend
assumption in [A1].

[A1] [[def-outward-rounded-interval-and-ball-operations]] and
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite
interval arithmetic expression DAG encloses its exact range, and non-finite
statuses make no finite claim. [[thm-real-elementary-range-enclosures]]:
required real elementary-function ranges are enclosed whenever those
evaluations return finite results.

[F1] [[def-certified-evaluation-result-contract]]: `success` requires a
containing enclosure within the absolute-radius tolerance; relative
certification also requires zero exclusion.

[F2] [[lem-erfcx-continued-fraction-enclosure]]: at every finite depth $N$,
the backward interval recurrence encloses the exact $\operatorname{erfcx}(x)$.

[F3] [[lem-erfcx-asymptotic-remainder]]: for each $N\ge1$,
$\operatorname{erfcx}(x)-S_N(x)=(-1)^N R_N(x)$ with
$0\le R_N(x)\le B_N(x)$, where $B_N$ is the displayed explicit bound.

[F4] [[lem-trigonometric-identities-machin-and-range-reduction]]: the
Machin identity and arctangent tail give a finite certified enclosure of
$\pi$; [A1] encloses $\sqrt\pi$ by the real elementary evaluator.

## Proof
1.1 For each permitted continued-fraction depth, the procedure constructs the intervals $I_k$ by the finite endpoint recurrence in [F2] using [A1]. The returned interval from that branch therefore contains the exact value. The construction is finite at every chosen depth. [A1, F2]

1.2 For each permitted asymptotic truncation $N\ge1$, the procedure encloses $S_N(x)$ and $B_N(x)$ with [A1]. It forms $[S_N,S_N+B_N]$ when $N$ is even and $[S_N-B_N,S_N]$ when $N$ is odd. The signed relation and bound in [F3] show that this interval contains $\operatorname{erfcx}(x)$. Constants involving $\pi$ use [F4]. [A1, F3, F4]

2.1 If both methods produce candidates, their intersection is used only when it is nonempty; since each candidate contains the same exact value by steps 1.1 and 1.2, this intersection still contains it. The procedure returns `success` only when a candidate passes [F1]; otherwise its finite cap yields `inconclusive`, and an unrepresentable interval yields `range`. Thus every successful output is sound, without any claim that interval widths shrink as depth grows. [F1, step 1.1, step 1.2] ∎