> **Generic group task.** Your batches are named in the "This dispatch"
> section appended below — work from that, and write your report to the
> `research/frontier-15-alpha-<your-group>-...` path for your own group
> label.

# Group Alpha — step-3 scaffold review, the batches named in your dispatch

Read every pair's `.pages.json`, `.notes.md` and `.coverage.json` together,
against its design section, and return a `sufficient`/`insufficient` verdict
per pair, naming for each `insufficient` the exact results to add and the
source carrying them. You may repair the scaffold yourself where that is
cheaper than routing (owner, 2026-08-16); at this step no proof exists, so
your repair licence is the last two forms only — correct a false
Statement/title, or add intermediate lemmas — inferring the route from
`title`, `strategy` and `deps`.

**Write:** `research/frontier-15-alpha-<your-group>-step3-scaffold-review.md`,
findings numbered `B<batch>-1, B<batch>-2, …`, stable ids, a severity table,
and per-pair verdicts.

## The run at a glance

| batch | category | pairs | Beta task |
|---|---|---|---|
| 1 | number-theory | quadratic-reciprocity-and-the-jacobi-symbol | `research/frontier-15-beta-1.task.md` |
| 2 | abstract-algebra | sylow-theorems… + chain-conditions… | `research/frontier-15-beta-2.task.md` |
| 3 | abstract-algebra | algebraic-closure-embeddings-and-separability | `research/frontier-15-beta-3.task.md` |
| 4 | measure-theory | sigma-algebras-and-borel-sets | `research/frontier-15-beta-4.task.md` |
| 5 | topology | the-fundamental-group-of-the-circle | `research/frontier-15-beta-5.task.md` |
| 6 | complex-analysis | goursat-and-cauchys-theorem… | `research/frontier-15-beta-6.task.md` |
| 7 | category-theory | monads-comonads-and-their-algebras | `research/frontier-15-beta-7.task.md` |

Each Beta task file names the design section with line numbers and the traps
the design itself states. **Check the scaffold against those traps
explicitly** — they are the known defect classes for that specific page, and
a scaffold that trips one is `insufficient` however rich it looks.

## Checks that are specific to this run

- **Batch 2, both pairs:** the base designs are Part I of
  `plan-algebra-track-expansion.md` and §§II.3/II.5 amend them. A scaffold
  that mints anything §II.3.a lists as published is wrong; a scaffold
  missing the index-p **existence** item (§II.3.b) is missing a load-bearing
  result. `chain-conditions…` is the run's split risk — count it, and if it
  exceeds 60 the disposition is a SPLIT, decided now, not after authoring.
- **Batch 3:** the one-step closure route is decided (design, corrected
  2026-08-13) and owner-authorised; a scaffold carrying the ω-iteration, or
  dropping the closure, contradicts decisions already made.
- **Batch 4:** AC_ω must appear in the Statement of |B(R)| = 𝔠; the π–λ
  proof is three lemmas; the seven-generator theorem is one item.
- **Batch 5:** the trig `requires` edge may need re-pinning to the page that
  actually carries periodicity (design trap i). A backward re-pin you verify
  from disk may be applied to `plan-spec.json` directly; run
  `node tools/validate-plan.mjs research/plan-spec.json` after, and record it.
- **Batch 7:** Kleisli associativity (item 11) precedes the Kleisli category
  (item 12); Leinster is not a valid second treatment (seam S-1).

## Also standing (from `briefs/alpha.md`)

Component-provenance labels checked per item; the harvest checked for
faithfulness, not just structure; every published item the scaffold cites
opened on disk; declines named by page id.

**No permission prompts of any kind**, including inside an `&&` chain.
