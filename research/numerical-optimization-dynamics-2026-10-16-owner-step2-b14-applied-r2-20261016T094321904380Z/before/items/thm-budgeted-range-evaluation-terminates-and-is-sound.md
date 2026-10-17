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

1.1 There are at most $B$ splits. Each split adds one net box to the queue,
so at most $2B+1$ boxes are processed. Each leaf evaluation has a finite DAG,
uses at most $N+1$ terms per series, and has finitely many fixed domain bins or
quadrant pieces. Thus each evaluation and the whole queue procedure terminate.
[given, L1, algebra]

1.2 The two halves at every split cover their parent by [L1]. Every completed
real or complex leaf enclosure contains its exact range by [L2] or [L3].
Induction upward through the finite split tree shows that the hull of all
completed leaf enclosures contains the range on the union of their boxes,
which is $X$. [step 1.1, L1, L2, L3, induction]

1.3 The algorithm returns `certified` only after the queue is empty, every box
has a finite completed leaf, and the final hull satisfies the width test.
Otherwise it returns a non-finite status or `inconclusive`, retaining the
unresolved box or failed global-width result. Hence no failed branch or wide
hull is silently treated as tolerance success. [given, step 1.2, algebra] ∎
