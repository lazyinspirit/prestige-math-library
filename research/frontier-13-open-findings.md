# frontier-13 — open findings carried past publication

Published 2026-08-16 on the owner's instruction, `verification.audited: 2026-08-16`
on all 467 items, 22 pages flipped. The owner supervised the run personally and
confirmed adjudication was complete. Two things were nevertheless open at the
moment of publication and are recorded here so they are not lost.

Neither was visible in `research/frontier-13-step10-report.md`: that report's
verification block lists `coverage 988 results, 0 errors`, which is
`coverage-checklist.mjs` (the source-harvest gate), not `level-coverage.mjs`.
The post-step-7 receipt gate was never run for this level — no
`frontier-13-audit-coverage.json` existed before publication, and there is no
record of an invocation.

## 1. Seven second-round judge rejections with no exact-context adjudication

Each item was rejected in the main sweep, adjudicated `confirmed_fatal`,
repaired, and rejudged in the ~09:52 sweep of 2026-08-15. In that rejudge **one
lane still rejects**, and the second-round rejection was never read. Recomputed
independently from `research/frontier-13-judge.jsonl`: 212 items carry a
rejection on their latest context, 205 have exact-context adjudications, these 7
do not.

| item | lane | allegation |
|---|---|---|
| `thm-triangle-counting-lemma-for-regular-triples` | terra | Statement admits $\varepsilon=0$ via the library's 0-regular convention (`ex-complete-and-empty-pairs-are-zero-regular` on the companion page uses it); step 1.1 applies `[L1]`, whose strict "fewer than $\varepsilon\|X\|$" conclusion cannot hold at $\varepsilon=0$, and no zero-regular case is proved |
| `rem-tower-and-wowzer-bounds-in-regularity` | terra | the wowzer claim is still overstated after the step-8b tower correction: a sequence can depend strictly on the index yet stay bounded below by half its initial parameter, so the displayed proof gives a tower bound |
| `prop-carmichael-function-as-maximal-order` | terra | `[L2]` says the unit group *is* a direct product; the cited structure theorem gives only an isomorphism to an external direct product, so treating the chosen tuple as an actual unit is not licensed as written |
| `ex-symmetric-reduction-in-two-variables` | terra | `[L1]` is stronger than its cited theorem: that statement asserts only existence of $Q(e_1,\ldots,e_n)$, not that lexicographic leading-monomial cancellation produces it; step 1.1 relies on the added algorithmic claim |
| `ex-frobenius-on-f-four` | terra | step 3.1 mis-cites `[L1]`: `[L1]` says the second Frobenius iterate is the fourth-power map, not that the fourth-power map is the identity |
| `ex-gram-determinant-of-two-vectors` | deepseek | `[L2]` restates Cauchy–Schwarz squared; the cited theorem states the unsquared inequality, and squaring is an additional derivation |
| `ex-lifting-a-primitive-root-through-powers-of-five` | deepseek | `[L2]` generalises a generator-only lemma to any element of finite order without citing that the element's cyclic subgroup has that order; step 1.2 uses the stronger form |

Five of the seven are citation-precision complaints about an `[L#]` restatement —
the dominant fatal class on this run, and the class the step-10 report says
accounted for ten of 25 step-8 rows. The first two are the ones that read as
possibly substantive rather than possibly 30-second: both are on the regularity
page, and `rem-tower-and-wowzer-bounds-in-regularity` had already been corrected
once on essentially this ground.

None of the seven carries a `verification.judge` stamp — `apply-judge-stamps.mjs`
cannot upgrade a rejection into a displayed pass, and the extension used for the
byte-identical reading (below) preserved that property.

## 2. Two high-risk items with no `risk_review`

`gates.mjs --step 6` was blocked at publication time by `risk-report.mjs`:

```
ERROR risk-review-missing [cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field]
ERROR risk-review-missing [thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares]
```

Checked against every batch contract file: neither item has a `risk_review` key
in any of them. This is not a disposition that lapsed after a repair — it was
never written. It matches finding 3 of the step-10 report (seven refuter
dispatches produced prompts and no results, leaving 74 `risk_review` dispositions
silently unwritten); these two were never recovered.

`cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field` is the item that
took two repair rounds, carried a false uniqueness claim in both title and
Statement, and had a DeepSeek countermodel ($R=\mathbb{Z}$, $S=\mathbb{Z}/2$,
$f=1$, $P=0$, $Q=2$) reproduced against it. Both lanes pass its final text and it
carries a judge stamp.

## Judge stamps as written

255 of 467 items carry `verification.judge: pass`. Both lanes actually passed
those items' exact text.

- 92 were written by `tools/apply-judge-stamps.mjs`, which implements only
  reading (a): verdicts cast against the **current pair context**.
- 163 more were written under the owner's 2026-08-06 byte-identical amendment —
  reading (b): the item's own text is byte-identical to what the verdicts were
  cast against, only a page-mate moved. `level-coverage.mjs` implements both
  readings and its `judge_coverage` eligibility was the source of truth for the
  extra 163. `apply-judge-stamps.mjs` does not implement (b); that is the whole
  gap between 92 and 255.
- The remaining 212 are the items with a lane rejection on their latest context.
  They are published on owner audit and carry `audited` **without** a judge
  stamp, per WORKFLOW §Publish step 3 and SCHEMA §verification: an adjudication
  that graded a rejection nonfatal or a false positive does not manufacture a
  pass.

## A gate finding: `level-coverage --verify-current-context` cannot survive publication

After the flip it reports 684 `judge-coverage-missing` errors. This is an
artifact, not a regression. `judge.mts` computes `item_sha256` over the whole
file with only the `judge:` block removed:

```js
createHash("sha256").update(readFileSync(file,"utf8").replace(/^ {2}judge:\n(?: {4}.*\n)*/m,""))
```

so writing `audited:` and flipping `status:` moves every item hash, and flipping
the page's `status:` moves every `context_sha256`. Both readings therefore fail
for every item simultaneously. The normalisation deliberately excludes `judge:`
"so that the act of stamping a pass does not invalidate the pass it records" —
the same argument applies to `audited:` and `status:`, which are equally not
mathematics, and `tools/item-hash.mjs` already excludes the entire `verification:`
block for exactly this reason.

The meaningful reading is the pre-flip one. Immediately before publication, with
the receipt template generated, `level-coverage --verify-current-context`
reported `judge_pairs 467/467` and 104 errors: the 7 above, 86
`audit-receipt-plan-reconciliation-reason`, 4 `batch-deps-missing` (the four
items built at step 9 from the overturned declines), 4
`judge-adjudication-shape` (step-8b/8c rows carrying `context_sha256: null`),
and the receipt's own empty `reviewer`/`attestation`.

**Suggested fix:** extend the `item_sha256` normalisation to strip the whole
`verification:` block, matching `tools/item-hash.mjs`. Until then, run
`level-coverage --verify-current-context` before the publish flip, never after.

## Also unfilled at publication

- `research/frontier-13-spine-audit.json` — reviewer empty, all 60 attestations
  `pending`. The work was done: 59 of its 60 entries are byte-identical by
  `content_sha256` to frontier-12's completed attestations, and the 60th,
  `lem-of-q-embeds`, is attested in full in
  `research/frontier-13-reader-spine.md`. Only the transcription is missing.
- `research/frontier-13-audit-coverage.json` — generated from `--template`
  during this session; `reviewer`, `attestation` and 86 `plan_reconciliation`
  reasons are unwritten. The reasons are per-item mathematical statements about
  why authored deps diverged from planned ones, and are Alpha's to write.
