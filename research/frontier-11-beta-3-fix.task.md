# frontier-11, batch 3 — step-3 fixes

You are **Beta-frontier-11-3**. Artifacts: `research/frontier-11-batch-3.*`.

Read `research/frontier-11-alpha-step3-scaffold-review.md` **§5** and **§6**.

## `formal-power-series` (193) — SUFFICIENT, 2 required corrections — §5

- **C1 — restate the "field of fractions" claim.** Your
  `thm-formal-power-laurent-dictionary` is titled "…**whose field of fractions
  is** $K((x))$". Alpha's §0 verified from disk that **no field-of-fractions or
  localisation construction exists anywhere in the library or the plan** — and
  that two *published* items already assume one, which is a plan gap recorded for
  the owner, not something to fix here. You may not build the construction in
  this run: it belongs with orders 46–50. So restate the theorem in terms you can
  actually prove from what exists — say exactly what the dictionary gives (units,
  inverses, embedding, the valuation) without asserting a fraction-field
  characterisation the library cannot support. Retag the coverage row to match.
- **C2** — add a second substantial treatment to the harvest, per §5. Record the
  exact range read and enumerate that source's own headings with dispositions.

Alpha flagged that your Flajolet–Sedgewick leg could not be verified against the
source because its runtime had no web access. Expect that harvest to be
re-checked; make sure the enumerated headings really are that source's own.

## `extremal-graph-theory` (219) — INSUFFICIENT — §6

- **E1** — add two B-page boundary items. §6 names them. A B page's purpose is
  the boundary of each theorem, and yours is the lightest in the run at 7.
- **E2** — add a `deferred` coverage row for the KST lower-bound constructions,
  pointing at orders 221 and 225 with a result-specific reason.

Your decline of Zhao's Conjecture 1.4.4 was right and is not reopened: it is an
open problem and a page must not turn a conjecture into a theorem.
