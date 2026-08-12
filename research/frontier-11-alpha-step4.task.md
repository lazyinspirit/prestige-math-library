# frontier-11 — Alpha step 4: propagate approved amendments into the prose scaffolds

You are **Alpha on run `frontier-11`**. The splice is applied and both step-4
gates pass (`validate-plan` OK, `content-policy` 239 scoped items / 0 errors).
This is your Stage 1: **you are the single writer of `research/plan-*.md`**, so
parallel batches cannot overwrite one another.

## State you can rely on

- `research/plan-spec.json` now carries all 239 items across the 9 pairs.
- **D1 is executed in plan-spec**: order 54 homes the four ℂ items (ids
  unchanged) plus the new `thm-complex-numbers-are-the-real-coordinate-plane`;
  order 189 is down to 28 items and requires `field-extensions-and-the-complex-numbers`.
  Receipt: `research/frontier-11-rehomed.json`. Disk still homes the four on 189
  until the step-10 publish commit — that is the intended, receipted state you
  described in §4.6 S4.
- Baseline snapshot `pre-d1-rewrite` exists in `research/frontier-11-touches.json`.
- Your B2 prediction was right: `content-policy --manifest-only --rehomed` on
  batch 1 is clean.

## Task — apply the approved amendments

Working from `research/frontier-11-step3-decisions.md` and your own two reports.

**D9, batch 5, `research/plan-combinatorics-and-categories.md` §CT-2.** Apply the
amendments the Beta proposed and the orchestrator approved. The substantive one:
the clause asserting that `Nat(F,G)` is a set for arbitrary functors between
locally small categories is **false as written**. Replace it with the Remark
formulation — local smallness alone does not give sethood; the explicit Yoneda
bijection proves it when the source functor is representable — and do **not**
assert a global counterexample, whose proper-class calculation the library cannot
currently prove. Also apply the size-convention clause (state the objectwise
Yoneda assignment for a locally small `C` without silently forming a large-source
functor category) and the "full embedding" terminology clause.

Note the §CT-2 heading still reads order 289 while `plan-spec.json` has 361/362.
**`plan-spec.json` is the machine authority**; correct the stale heading only if
you are confident, and never quote a remembered `order` — recompute from the
spec.

**Every other batch.** Read each `research/frontier-11-batch-<i>.notes.md`
"amendments" / "prose-scaffold" section and propagate what the orchestrator
approved into the owning `research/plan-*.md`. Do not invent amendments no Beta
proposed, and do not propagate anything marked declined.

**RA-27b.** `research/plan-realanalysis-pages.md` §RA-27b is an owner design and
you do not rewrite it. One thing must be recorded there or in the run record: D8
approved citing `thm-log-one-plus-x-power-series` on the A page instead of the
published B-page example `ex-alternating-harmonic-series-sums-to-log-two`,
because a B page may not be a formal dependency. That is a deviation from the
letter of the owner's design, forced by a structural rule the design did not
anticipate, and it is flagged for the step-10 report.

## Boundaries

- You write `research/plan-*.md` only. Do **not** touch `plan-spec.json`,
  `items/`, `library/`, any batch artifact, or any normative doc.
- **Do not begin the D1 item rewrites.** Those are step-5 authoring, done by the
  batch-1 Beta in `items/`, per your own S5. Your S2 baseline is already taken.
- The no-permission-prompt rule binds you and anything you dispatch. You now have
  web access; `WebFetch` works.

## Output

Append to `research/frontier-11-alpha-report.md` (create it): what you changed in
which plan file and why, anything a Beta proposed that you declined and the
reason, and any blocker — recorded, never prompted.

Then state whether you consider the run ready for **step 5 authoring**, and name
anything the authoring Betas must be told that is not already in their scaffolds
— especially for the four rewritten ℂ items, where `verification.audited` must be
deleted, any `verification.judge` deleted, and `precheck` re-run.
