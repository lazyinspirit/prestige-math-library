# frontier-10, batch 9 — interface repair for batch 5

You are **Beta-frontier-10-9**, returning to add two determinant interfaces that
batch 5 needs and that you currently decline.

## The request

`research/frontier-10-batch-5.notes.md` §"Step-3 B5 repair: determinant
interfaces" is the authoritative statement of what is wanted and why. Read it in
full. Batch 5 verified your `pages.json` on disk and deliberately did **not**
mint these itself, because they are determinant results and belong on your page.

Step 0 currently fails on exactly two edges:

```
thm-linear-images-scale-jordan-content-by-absolute-determinant
    -> thm-real-square-matrix-invertible-iff-determinant-nonzero
thm-change-of-variables-for-compact-jordan-sets
    -> cor-determinant-is-a-polynomial-in-the-matrix-entries
```

Add both to `determinants-of-matrices-over-a-commutative-ring`, with these exact
ids — batch 5 already cites them, so a substitution means another round.

- `thm-real-square-matrix-invertible-iff-determinant-nonzero` — over a field
  (batch 5 needs the real case), invertibility is equivalent to a nonzero
  determinant. Mind the ring/field boundary: over a general commutative ring the
  correct statement is invertible **iff the determinant is a unit**, and the real
  case is the specialisation. State whichever you can prove cleanly from what
  your page already has, and say in your notes which one you chose.
- `cor-determinant-is-a-polynomial-in-the-matrix-entries` — the determinant is a
  polynomial function of the `n²` entries. Batch 5 uses it for a continuity
  argument in the change-of-variables proof, so the statement must be strong
  enough to support that; batch 5's note says which form it needs.

## Your coverage checklist currently DECLINES these

Batch 5's notes record that both currently sit in your `coverage.json` as
`out-of-scope`. **Those dispositions must flip to `included`** with the new item
ids. A harvested heading that is now built and still marked out-of-scope is
precisely the drift the step-6 re-run of `coverage-checklist.mjs` catches.

## Scope

Only your own four `research/frontier-10-batch-9.*` artifacts. Do not edit batch
5's files, `items/`, `library/`, or `plan-spec.json`. Authoring is step 5; this
round changes the scaffold and the harvest only.

Your determinant A page is at 20 items, so two additions are nowhere near the
60-item ceiling.

## Gates before you report

```
node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-10-rehomed.json
node tools/coverage-checklist.mjs research/frontier-10-batch-9.coverage.json
node tools/content-policy.mjs research/frontier-10-batch-9.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox. The
orchestrator runs the wrapper and will confirm both dangling edges are gone.

## Report

The two items as scaffolded, the ring-versus-field choice you made for the
invertibility statement and why, their proof strategies, and the two flipped
dispositions with their sources.
