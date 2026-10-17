---
id: thm-budgeted-range-evaluation-terminates-and-is-sound
kind: theorem
title: Budgeted range evaluation terminates and certifies only sound enclosures
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 12
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [alg-budgeted-validated-range-evaluation, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures]
sources:
  references:
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §§1–2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §8.3"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

For every finite input DAG and finite total split budget $B$, the algorithm
[[alg-budgeted-validated-range-evaluation]] terminates. If it returns
`certified(I,X)`, then $I$ contains the exact function range on all of $X$ and
has width at most the requested $\varepsilon$. If it returns `empty`,
`entire`, `inconclusive`, domain error, split-domain, or overflow, it makes no
unconditional tolerance-success claim.

## Facts & Assumptions

**Given:** The finite queue procedure in
[[alg-budgeted-validated-range-evaluation]], and real/complex elementary
range-enclosure theorems [[thm-real-elementary-range-enclosures]] and
[[thm-complex-elementary-range-enclosures]].

[L1] [[alg-budgeted-validated-range-evaluation]]: one shared counter is
decremented once per split; each split replaces a box by two closed halves
whose union equals the parent.

[L2] [[thm-real-elementary-range-enclosures]]: every finite real leaf result
contains the exact range on that leaf's domain.

[L3] [[thm-complex-elementary-range-enclosures]]: every finite complex leaf
result contains the exact range on that leaf's domain.

## Proof

1.1 The initial admission checks terminate: the format's subnormal index range, exponent range and significand ranges are finite, and each equality comparison of exact dyadics is decided by clearing powers of two and comparing integers. Their enumeration is exactly the selected representable set, so a passing endpoint test establishes membership, including for zero and subnormals. Invalid initial data stop before an evaluator call. For admitted data, every endpoint of the initial box belongs to that format. Inductively, a split enqueues children only after the exact midpoint passes the same membership test; all other endpoints are inherited from the parent. The DAG, output, constants, format and $N$ are unchanged. Hence every queued box satisfies the elementary evaluator's input conditions. Each such call terminates through its finite DAG, finite series, finite bisection and finite bin/cell/quadrant lists, or returns a specified failure. The membership guard also terminates and can stop immediately with `inconclusive`. There are at most $B$ admitted splits and therefore at most $2B+1$ processed boxes. Thus the entire procedure terminates, including every guard-stop branch. [given, L1, algebra, induction]

2.1 Before a box is processed, the completed leaf boxes together with the queued boxes cover $X$. Removing a current box preserves this cover when that box is counted as the current unresolved parent. Completing it transfers it to the completed leaves; an admitted split replaces it by two closed children whose union is the parent by [L1]. A failed midpoint test retains the parent as unresolved and therefore discards no part of the cover. This proves the coverage invariant by induction. By step 1.1, each completed leaf was evaluated on admissible input, so its finite enclosure contains its exact range by [L2] or [L3]. If the queue empties without an early return, all covering leaves are completed; their enclosure hull therefore contains the exact range on all of $X$. On an early return, the completed-leaf hull is not asserted to cover the unresolved parent or remaining queue. [step 1.1, L1, L2, L3, induction]

3.1 A `certified` return occurs only after the queue is empty without an admission, evaluator, split-guard or budget stop, and after the completed-leaf hull passes the final global width test. Step 2.1 then proves enclosure of the whole range, and the exact width comparison proves the requested tolerance. A failed midpoint membership instead returns `inconclusive` with the completed-leaf hull, unresolved parent, remaining queue and actual guard status; that partial hull is not a full-domain certificate. The other non-finite, exhausted-budget, unsplittable-coordinate and failed global-width branches likewise make no tolerance-success claim. Thus the finite guard preserves the stated certified-range, coverage and failure conclusions. [given, step 1.1, step 2.1, algebra] ∎
