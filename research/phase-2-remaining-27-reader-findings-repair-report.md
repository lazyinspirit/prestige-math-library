# Reader findings repair — batches 5, 11, 14, 15

Run `phase-2-remaining-27`, stage `5a-split`. Dispatch role: alpha, label
`step5a-reader-findings-repair`, covers: all.

## What was wrong

`tools/step5-scope.mjs split` matches every finding's `id` against the routed
scope: batch items, batch pages, or published dependencies reachable from an
assigned consumer. All eight findings in the four batches carried placeholder
labels the reader invented (`reader-5-examples-page-nilpotent-i-over-2`,
`reader-11-f1..f3`, `reader14-N1..N3`, `F-1-shelah-union-level-homogeneity`)
instead of the real subject id, so `normalizeFindings` reported `names
unopened or out-of-scope item …` and the follow-on `must use subject_type …` /
`must name an assigned consumer …` complaints (defaulting the unknown subject
to a published-dependency) followed from the same cause.

## What changed

Metadata only. Only the `id` field of each finding was rewritten to the real
subject. `subject_type` and `consumer_id` already held the values the routing
check requires (recorded in the mapping table below), and `location`,
`defect`, `evidence`, and `severity` are the reader's own text unchanged. No
finding was added, deleted, merged, or re-severitied; no mathematical verdict
was altered. Files edited (only these):

- `research/phase-2-remaining-27-reader-findings-5.json`
- `research/phase-2-remaining-27-reader-findings-11.json`
- `research/phase-2-remaining-27-reader-findings-14.json`
- `research/phase-2-remaining-27-reader-findings-15.json`

No item, page, manifest, coverage, contract, ledger, or other batch artifact
was touched. No escalation entry was needed: every placeholder resolved to a
real subject named in the finding's own `location`/evidence and in the
reader's report.

## Mapping

| Batch | Reader's label | Real subject mapped to | `subject_type` | `consumer_id` |
|---|---|---|---|---|
| 5 | `reader-5-examples-page-nilpotent-i-over-2` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` (B page, `library/functional-analysis/continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples.md`) | `page` | `null` |
| 11 | `reader-11-f1` | `lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching` | `in-flight-item` | `null` |
| 11 | `reader-11-f2` | `thm-serre-presentation-theorem` | `in-flight-item` | `null` |
| 11 | `reader-11-f3` | `thm-additive-jordan-chevalley-decomposition` (published) | `published-dependency` | `lem-jordan-chevalley-parts-agree-under-adjoint-representation` |
| 14 | `reader14-N1` | `thm-fleissner-normal-moore-space-construction` | `in-flight-item` | `null` |
| 14 | `reader14-N2` | `thm-fleissner-normal-moore-space-construction` | `in-flight-item` | `null` |
| 14 | `reader14-N3` | `lem-ladder-separation-from-hyp` | `in-flight-item` | `null` |
| 15 | `F-1-shelah-union-level-homogeneity` | `thm-shelah-ch-omega-one-sweet-construction` | `in-flight-item` | `null` |

## Basis for each mapping

- **Batch 5.** The finding's `location` names the exact B-page file and its
  closing paragraph; the reader report returns it under "Uneditable defect
  (reported, not repaired)" and states the two items it discusses
  (`ex-square-root-and-absolute-value-of-a-matrix`,
  `cex-self-adjointness-cannot-be-dropped-from-the-order-calculus`) are
  themselves correct. The defect is the page prose, so the page is the
  subject; the page is untouched by the reader (0 pages touched), so the page
  route stays open. Severity `nonfatal`, defect `false-claim` are unchanged.
- **Batch 11, f1/f2.** The findings' `location` fields name
  `items/lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching.md`
  and `items/thm-serre-presentation-theorem.md`; the reader report lists them
  as "Defects found but not edited" 1 and 2 and confirms both were left
  unrepaired (they are in the untouched set).
- **Batch 11, f3.** The finding is about the published item's frontmatter
  (`Statement` assumes AC; `deps` omit `def-axiom-of-choice`), so the subject
  is the supplier `thm-additive-jordan-chevalley-decomposition`. The consumer
  named by the reader, `lem-jordan-chevalley-parts-agree-under-adjoint-representation`,
  is a batch-11 manifest item whose `deps` include that published item; the
  split's published-dependency closure confirmed the edge and the finding was
  routed as `reader:11:3` with a valid `pre_sha256`.
- **Batch 14, N1/N2.** The report sections "N1. … — ill-formed step" and
  "N2. … — citation-inaccurate" both name
  `thm-fleissner-normal-moore-space-construction`; the two findings are kept
  separate with their original defects.
- **Batch 14, N3.** The report section "N3. `lem-ladder-separation-from-hyp`
  — unlicensed inference in step 2.3".
- **Batch 15, F-1.** The finding's `location` names
  `items/thm-shelah-ch-omega-one-sweet-construction.md` step 3.2 as the
  defective carrier, so the subject is that in-flight item, not a published
  dependency; the consumer quoted in the evidence
  (`thm-shelah-homogeneous-truth-has-baire-representatives`) is another
  in-run batch-15 item and stays in the evidence text. Severity `fatal` is
  unchanged, and the item is untouched by the reader, so the route is valid.

## Final tool output

`node tools/step5-scope.mjs post-reader --run phase-2-remaining-27 --batch <b>`
for each batch (all exit 0, each writing
`research/phase-2-remaining-27-step5-scope-<b>.json`):

```
=== batch 5 ===
step5-scope: hashed 62 item(s) of batch 5 as post
step5-scope: batch 5 — 62 current item(s), 8 touched, 54 untouched, 0 added, 0 removed, 0 page(s) touched, 59 high-risk
step5-scope: batch 5 post-reader hash and split complete
exit=0
=== batch 11 ===
step5-scope: hashed 115 item(s) of batch 11 as post
step5-scope: batch 11 — 115 current item(s), 7 touched, 108 untouched, 0 added, 0 removed, 0 page(s) touched, 71 high-risk
step5-scope: batch 11 post-reader hash and split complete
exit=0
=== batch 14 ===
step5-scope: hashed 80 item(s) of batch 14 as post
step5-scope: batch 14 — 80 current item(s), 7 touched, 73 untouched, 0 added, 0 removed, 0 page(s) touched, 58 high-risk
step5-scope: batch 14 post-reader hash and split complete
exit=0
=== batch 15 ===
step5-scope: hashed 34 item(s) of batch 15 as post
step5-scope: batch 15 — 34 current item(s), 6 touched, 28 untouched, 0 added, 0 removed, 1 page(s) touched, 27 high-risk
step5-scope: batch 15 post-reader hash and split complete
exit=0
```

Independent read-only confirmation of the routed files
(`node tools/step5-scope.mjs check --run phase-2-remaining-27 --batch <b> --phase split`):

```
batch 5 : step5-scope: 62 item(s) routed, 9 adjudication obligation(s), 0 error(s)
batch 11: step5-scope: 115 item(s) routed, 10 adjudication obligation(s), 0 error(s)
batch 14: step5-scope: 80 item(s) routed, 10 adjudication obligation(s), 0 error(s)
batch 15: step5-scope: 34 item(s) routed, 8 adjudication obligation(s), 0 error(s)
```

The scope files record the repaired subjects exactly: batch 5 routes one
`page` finding; batch 11 routes two `in-flight-item` findings and one
`published-dependency` finding bound to consumer
`lem-jordan-chevalley-parts-agree-under-adjoint-representation` (with its
`pre_sha256`); batch 14 routes two findings on
`thm-fleissner-normal-moore-space-construction` and one on
`lem-ladder-separation-from-hyp`; batch 15 routes one `fatal`,
`unlicensed-inference` finding on
`thm-shelah-ch-omega-one-sweet-construction`.

## Unresolved and next action

- The repair changed subjects only. Batch 15's `F-1` stays `fatal`; the
  reader's recorded open obligation (Shelah Main Lemma 7.14(b)–(c) union-level
  extension not reconstructed) is exactly as the reader left it. The engine
  routes it to group Alpha at 5a adjudication; this dispatch did not judge,
  repair, or downgrade it.
- Next action for the run: stage 5a continues with the refuter pass over the
  routed scope; the group adjudicators own the obligations recorded in
  `research/phase-2-remaining-27-step5-scope-{5,11,14,15}.json`.
