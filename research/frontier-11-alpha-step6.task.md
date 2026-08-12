# frontier-11 — Alpha step 6b: adjudicate, refute, and disposition

You are **Alpha on run `frontier-11`**. Five independent readers have audited all
nine pairs and repaired **73+ item files**. Your Stage 2 job: adjudicate every
finding from disk, dispatch read-only proof-refuters, write the `risk_review`
records only you may write, and disposition the impact queue.

## What happened since your step-4 propagation

- **Step 5**: all 239 items authored. 11 of 12 gates green.
- **Step 6a**: readers 1–5 each audited a batch they did not author.
  - reader-1 → batch 2: **9 fatal, 4 nonfatal**, all repaired. Built the Koch
    nonrectifiability result for **D16** after verifying your three proposed
    reasons against the reading order — Hausdorff dimension and the Schwarz
    lantern confirmed as needing absent machinery. **B3 closed**: it reached the
    Apostol full text you could not and verified all five locators.
  - reader-2 → batch 3: items clean after repair; escalated two fatal artifact
    defects (below).
  - reader-3 → batch 4: **fatal defects in 12 items** repaired. **RA-27b passes
    all three obligations.** Two repairs change literal claim text and it flagged
    both for you explicitly.
  - reader-4 → batch 5: citation/locator/provenance repairs; no Statement changed.
  - reader-5 → batch 1: defects in 20 items, **15 with at least one fatal**.
- **Artifact reconciliation**: all five Betas re-synced contracts and coverage to
  the repaired text. **The vacuous-contract defect is closed** — 0 of 206
  contracts now carry empty citations, down from 49.

Findings files: `research/frontier-11-reader-<1..5>.findings.md`. Decisions
D1–D16: `research/frontier-11-step3-decisions.md`.

## Task 1 — adjudicate every reader finding from disk

For each reported defect and each applied repair: confirm it, refute it with
evidence, or record it as a false positive. **A reader may write, so its repairs
are already in the text — you are checking work that has landed, not proposals.**

Two repairs were flagged to you as changing literal claims. Rule on both:

1. `thm-operator-determinant-is-basis-independent` no longer asserts a
   determinant of a `0 x 0` representing matrix, because the published matrix
   determinant is defined only for `n >= 1`. The matrix-equality claim is now
   explicitly positive-dimensional; the zero-dimensional operator determinant
   remains the separately defined value `1`.
2. `ex-sparse-spikes-ftc-conclusion-at-a-discontinuity` previously set `f(0)=1`
   and claimed `F'(0) != f(0)`, contradicting its own title and scaffold purpose.
   It now spikes only at `2^-n`, `n>=0`, so `f(0)=0`, and proves `F'(0)=f(0)=0`
   at a discontinuity.

Also rule on reader-3's title repair to `ex-doubling-integers-has-nonunit-determinant`
("only over Q" was false — `[2]` is invertible over `R` and `Z/3Z` too).

## Task 2 — proof-refuters, read-only

Dispatch `refuter` subagents (GPT 5.6 Sol, `--sandbox read-only`, enforced by the
runner) held to the paired judges' skeptical standard: report only a concrete
false claim, unlicensed inference, missing hypothesis, or inaccurate citation,
and **inspect the supplied dependency before alleging it is too weak**. A refuter
never writes and never applies a fix — you adjudicate every finding from disk.

Prioritise: the four rewritten ℂ items; RA-27b's L-development; the Yoneda
naturality-in-both-variables theorem; Turán exact-and-unique; Lagrange–Bürmann
inversion; and anything a reader marked fatal-and-repaired, since a repaired
proof is a fresh proof.

## Task 3 — `risk_review` records (only you may write these)

`risk-report.mjs` routes items by risk tier. At **step 6** the contract trio runs
with `--require-reviewed`, so every high/critical item needs your `risk_review`
disposition — that is why this gate cannot pass before you run, and why it is not
demanded at step 5. Write them.

## Task 4 — impact disposition

**A baseline I should have taken was not taken, and I am telling you rather than
papering over it.** No `after-authoring` touchlog snapshot exists; the ledger has
`pre-d1-rewrite` (before step-5 authoring) and `probe-post-step6` (now). Running
`impact-audit --from pre-d1-rewrite` therefore reports **240 changed interfaces /
243 affected items**, which is a superset artifact: every newly authored draft
counts as "changed".

The meaningful question is narrower and I measured it precisely by diffing the
two snapshots' surface hashes: **among items that already existed, exactly 4
changed public surface — the four D1 ℂ items, and nothing else.** No other
published item was disturbed by step 6.

So disposition **those four and their consumers** (D1 measured 20 citing items;
`def-complex-metric-convergence-and-continuity`, `thm-complex-plane-is-complete`
and `lem-complex-polynomial-growth-and-minimum-modulus` rest on the plane model
via the new bridge item `thm-complex-numbers-are-the-real-coordinate-plane`).
Confirm the bridge actually carries them. If you judge the coarse baseline
insufficient for a sound disposition, **say so and name what you need** — do not
manufacture confidence from a superset.

## Boundaries

- Step 6 is **before** the freeze: cosmetic polish and 30-second-gap tidying
  belong here, and are forbidden at step 8. Use that latitude now.
- Do **not** touch `library/real-analysis/the-complex-exponential-and-eulers-formula.md` —
  the D1 split state closes at step 10.
- Do not re-add `verification.audited`; do not add `verification.judge`.
- Two Beta fixes are in flight as you start: batch 3 `rendercheck`
  (`blank-line-in-inline-math`, 8 errors from its labeled-fact insertion) and
  batch 4 one strict `citation-uses` error on
  `thm-operator-determinant-is-multiplicative`. Do not duplicate that work.
- The no-permission-prompt rule binds you and every subagent you dispatch. You
  have web access.

## Output

`research/frontier-11-alpha-step6.md`: per-finding adjudication; refuter
dispatches and their verdicts with your ruling on each; `risk_review` records
written; the impact disposition; anything still unresolved; and an explicit
statement of whether the level is **ready to freeze for the step-7 judge sweep**.
