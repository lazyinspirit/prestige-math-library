# frontier-11 — Alpha: verify the contract-fidelity round, then rule on the freeze

You are **Alpha on run `frontier-11`**. You required this: *"I would also not
accept the round on a self-report: the same Betas wrote the rows."* This is that
verification.

## What happened

All five Betas ran the artifact-only contract-fidelity round against your §6
findings. **The freeze held: `git status` shows zero `items/` and `library/`
files touched.** Contracts re-merged; `proof-contract --strict` reports 206/206,
0 errors — which, as you established, proves very little on its own.

Their reports are appended to each `research/frontier-11-batch-<i>.notes.md`.

## Task 1 — verify by sampling, not by reading their reports

Their reports are claims. **Check the artifacts against the frozen item text.**
Sample deliberately across the defect classes you identified, and weight toward
the batches and classes where the rot was thickest:

- **Truncated quotes** — the determinant pair (~15), the logarithm pair (6), the
  Yoneda pair. Open the cited source item and confirm each quote now reaches the
  clause its fact uses, and that nothing was "extended" by paraphrase rather than
  by quotation.
- **Prospective boilerplate** — batch 1 had **167** rows whose evidence was an
  instruction, batch 3 had 84 with six outright false. Confirm these are now
  either anchored to a step that does the work, or honestly `not_applicable` with
  a true reason. A row rewritten from "Step 1.1 must isolate…" to "Step 1.1
  isolates…" **without checking that step 1.1 does so** is the failure mode to
  hunt for — it satisfies the letter and changes nothing.
- **Boundary rows naming the wrong step** — the Laplace `zero`/`degenerate` rows,
  the rank-one-update `one` row, `thm-lagrange-burmann-inversion`'s `zero` row
  where `1/n` is undefined, `ex-log-two-from-four-characterisations` and
  `ex-unit-hyperbolic-area-brackets-e` on closed-interval endpoints.
- **`iff` rows** — `thm-turan-exact-and-unique`,
  `cor-chromatic-number-extremal-density`,
  `cor-representable-presheaves-detect-isomorphism-of-objects`,
  `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`.

Dispatch read-only `refuter` subagents if that gets you better coverage — they
are held to the same skeptical standard and never write.

## Task 2 — adjudicate any new mathematical findings

A Beta that found a row it could not make true without editing an item was told
to record it as a finding for you rather than edit the proof. **Collect those and
rule on each.** A confirmed one is a fatal defect in frozen text: it must be
repaired now, at step 6, because at step 8 only a `confirmed_fatal` judge
adjudication licenses an edit, and cosmetic latitude is gone.

## Task 3 — rule on the freeze

State plainly whether the level is **ready to freeze for the step-7 judge sweep**.
If yes, say so without hedging. If a specific batch or item still is not, name it
exactly and say what remains — a partial freeze is fine if you scope it.

If you judge the evidence record now sound, say what changed your mind since §6,
so the record shows this was verified rather than assumed.

## Boundaries

- You may edit `items/` **only** to repair a confirmed fatal defect from Task 2.
  Any such edit must be listed explicitly in your report — it reopens the freeze
  for that item, and I need to know exactly which ones.
- Do not touch `library/real-analysis/the-complex-exponential-and-eulers-formula.md`.
- Do not re-add `verification.audited`; do not add `verification.judge`.
- No permission prompts, for you or any subagent. You have web access.

## Output

`research/frontier-11-alpha-verify.md`: what you sampled and how much of it; per
defect class, whether the repair is real or cosmetic; every new mathematical
finding and your ruling; every item you edited; and the freeze verdict.
