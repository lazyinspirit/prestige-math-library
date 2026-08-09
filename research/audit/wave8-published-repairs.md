# Wave 8 published-repair ledger

Audit stage: A6. Reviewer: Audit-Alpha, GPT 5.6 Sol through the Codex
subscription at `xhigh`. Date: 2026-08-09. Item hashes are full SHA-256 values
of normalized text with the complete `verification:` block removed.

## Reading and mechanical reconciliation

Audit-Alpha read all 139 scoped items and all eight containing pages in full,
then read all 166 distinct cited targets outside the source set. No sampling was
used. `wave8-edge-audit.json` records 1,604/1,604 exact relationship
dispositions: 1,226 published-backward, 336 same-batch, and 42 forward. The 48
relationships without a rendered body link were separately reread as declared
semantic prerequisites. The field-aware split was independently checked and is
exactly 124 pure provenance/source retags and 15 material repairs.

## Material item repairs

| item | defect and final disposition | normalized final hash |
|---|---|---|
| `cex-cauchy-product-of-convergent-series-diverges` | Removed unused Facts L2/L5 and the unused absolute-value dependency while retaining the AM–GM/square-root sources directly used by the Remark. | `11d563ad2d6ea1161518a184cd7f4d7c0441fe5c8a04e1db5b429ce9bd6bc9ad` |
| `cex-dense-set-of-measure-zero` | Replaced the false claim that all shrinking cover intervals meet one another; density follows because their union contains the rationals. | `8d3e245eead286fb35f263a7f738461c338ed54ea7b516fcad0859755a2186a3` |
| `cex-irrationals-are-not-f-sigma` | Removed an unused Fact/dependency, made the Baire citation direct, and corrected the reversed countability sentence. | `1221ee7b038126b968b4a6e169b0966e50c202bc7d91470367f2349b8bef3477` |
| `cex-paracompactness-is-not-productive` | Replaced a citation to the false statement being refuted with the nine true prerequisites and the explicit Sorgenfrey-plane contradiction. | `e547b28b1fca86b4873ed305206a33d8fcd17373f7dfa2f5742fc4c73ca0c8fc` |
| `cor-q-is-meager-and-not-g-delta` | Deleted unused L8 and its unused open-set-algebra dependency. | `0c233b550b97c24e0a2260aee6c6a5567188595839a2ca772764d23f3c2b61f5` |
| `ex-cantor-set-in-ternary` | Deleted unused L3 and `def-interval`, retaining the Cantor-set dependency directly used in a Remark. | `e0942bd0775ebeaf72b965f6888b0c305b8aee56876872079bedf7df3aff68fb` |
| `fs-evt-holds-on-every-bounded-domain` | Deleted unused L6/dependencies and replaced the indirect compactness claim with a direct Heine–Borel citation. | `1829393d8ce64fc2bf811c7477473ce2dc37e06020162bed23b74e24dc673ff7` |
| `lem-nondegenerate-interval-is-not-null` | Replaced the incomplete compactness Fact with the exact empty-subfamily/nonempty-listed-subcover disjunction. | `fef19072a284dcbfd3288a8282a7c5043c22a376c20d26dbdb88a098e65d2aaa` |
| `lem-paracompact-hausdorff-cover-shrinking` | Added the closed-neighbourhood equivalence that actually licenses the first shrinking step and cited it at the use. | `51ecae7021ef8d83ac64c6fbdb32a145a4124a6b7642e31de5c76a01d07bf0a8` |
| `rem-sums-proved-to-exist-but-not-evaluated` | A4 narrowed “every known proof needs logarithms.” A6 then confirmed Terra’s refusal of a false exhaustive inventory and made the title/opening/final paragraph expressly selected and non-exhaustive, naming the omitted convergence-test class. | `ea6ceb8ab5d4d3e68d5b18c98359f890986f8266e69e9b6c539e9ae9c1bfaa76` |
| `thm-compact-null-is-content-zero` | Added the exact compactness disjunction and an explicit empty-set branch before the nonempty finite-subcover argument. | `fc7cc68328f220059922c83f7ca4e1f1e9cda330edeec16d2c18630c2efe44bb` |
| `thm-composition-of-continuous-functions` | Deleted unused L4 and only its unused `def-limit-point-r` dependency. | `26057eb404e0c9fdc7b048df8ee3f536336338e5e29fa4c8528a206dbdc74059` |
| `thm-continuous-image-of-a-compact-set-r` | Added the source-exact empty-subfamily compactness clause and a separate empty-domain proof branch. | `a5d7a5f1807ae9e80a7ae3a80a1e03a7dec29925403525323af0e1addf3c9177` |
| `thm-infinite-product-criterion` | Corrected the false assertion that strict `p_k<1` is essential: the tail definition handles finitely many unit terms, while infinitely many force zero tails. | `f06362e6e85a0cdd12ea0ddd951f8eba54914d0c9f43dac3e96d0a669a34f27e` |
| `thm-sequential-criterion-for-continuity` | Removed a Remark item from the licensing Fact while retaining it as a direct prose citation; the actual theorem and countable-choice source remain. | `737b6ef09bf7d7049901ca1210fb1c2db0ae571f43e89897f592fa5ca9621064` |

## A6 source repairs

| item | failed support | final support | normalized final hash |
|---|---|---|---|
| `cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous` | JHU Spring 2019 solutions, HTTP 403 | Rutgers Mathematics 300 examination solutions give exactly `f=g=x`, both uniformly continuous, with product `x^2` not uniformly continuous. The item and provenance ledger both carry the replacement. | `b75c01ceeddc77713337678d82db7a98f0947a4e9bce0d7f16db436f07cff63c` |
| `thm-mertens` | JHU `realanal.pdf`, HTTP 403 | Gardner, *Operations Involving Series*, Theorem 7-17 states the same Mertens theorem. The item and provenance ledger both carry the replacement. | `b9da637df013128b71efb96916b9f99c0fb2cdbeb06cce03c9847161fbe7e5bb` |

The Dartmouth Lecture 25 URL returns 404 in ten topology item source lists, but
is redundant rather than load-bearing: every corresponding provenance row and
proof use has a live alternate source. The exact ten-item disposition is in
`wave8-url-dispositions.json`; no cosmetic source-list edit was made.

## Page repairs

- `library/real-analysis/absolute-convergence-and-rearrangement.md` initially
  narrowed the unsupported claim that the signed infinite-product refinement
  genuinely needs logarithms. A6 additionally replaced the false universal
  claim that every later theorem follows from the absolute/conditional
  dichotomy with an exact division among rearrangement/Cauchy-product results,
  summation-by-parts tests, and the later independently-hypothesised sections.
  Final full-file hash:
  `b9147fe75f23321dfcc5f854dc4f245fd58ebc3de095124081ccb4d07e41e78d`.
- `library/real-analysis/continuity-ivt-evt-and-uniform-continuity.md` now
  distinguishes compactness for EVT/Heine–Cantor from IVT’s
  interval/connectedness hypothesis. Final full-file hash:
  `164f666a1e949c5da4b4be9a626e7a71c74193695055bbd170d3cc32111836dd`.

## Exact Audit-Alpha mathematical/source edit list

- `cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous`
- `rem-sums-proved-to-exist-but-not-evaluated`
- `thm-mertens`

Audit-Alpha also repaired the absolute-convergence home-page prose and corrected
one provenance-ledger rationale for
`ex-locally-finite-versus-point-finite-families`; the latter changed no item
text. Verification stamps are mechanical metadata and do not expand this list.

## Repeated-repair escalation

- `rem-sums-proved-to-exist-but-not-evaluated` was repaired once at A4 and once
  after its independent A6 refusal. It therefore crosses the mandatory
  more-than-once threshold and is escalated for the orchestrator's personal
  audit even after final independent certification.

The absolute-convergence home page likewise received an A4 correction and a
distinct A6 correction; it is reported to the orchestrator as repeated page
work, although the item-specific escalation rule and A7 target mechanism do not
classify pages as item targets.

## Receipts and closure status

The 239-interface/729-consumer combined Waves 8–10 interval is dispositioned in
`wave8-impact-audit.json`; Wave 8 authored no Wave 9/10 mathematical edit.
`wave8-provenance-adjudications.json` covers 139/139 rows and records zero
established-knowledge concurrences or classification escalations. The exact
spine carry-forward covers 59/59 unchanged current hashes.

Final independent-reader coverage is complete.  The append-only Terra archive
contains exact-current `CERTIFIED` results for 19/19 targets: the 15 material
A4 items, both approved A-page repairs, and both additional A6 source repairs.
All 17 item targets carry the owner-delegated `published-audit` verification
stamp; the two pages are covered by the hash-bound certification receipt.

The append-only DeepSeek archive contains exact-current results for 113/113
routed items: 112 `CLEAN` and one `DEFECTS`.  Audit-Alpha adjudicated the sole
finding on `thm-sequential-criterion-for-continuity` `false_positive`: it
conflated the global ZF theorem for an everywhere sequentially continuous map
`R -> R` with the pointwise assertion whose usual proof spends countable
choice.  The item remained unchanged, and the full decision and cited evidence
are in `wave8-refuter-adjudications.json`.  All 109 high/critical contracts now
have exact-current `risk_review` records, and all ten Wave 8 generated seeds
have concrete `verified-generated` dispositions.

## Exact A7 target ids

The machine-readable source is `wave8-rejudge-targets.json`. It contains the 15
material A4 item ids plus the two A6 source-repair ids, for 17 targets. Pages,
the 124 pure retags, siblings, and unchanged impact consumers are excluded.

Plain target-id list:

- `cex-cauchy-product-of-convergent-series-diverges`
- `cex-dense-set-of-measure-zero`
- `cex-irrationals-are-not-f-sigma`
- `cex-paracompactness-is-not-productive`
- `cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous`
- `cor-q-is-meager-and-not-g-delta`
- `ex-cantor-set-in-ternary`
- `fs-evt-holds-on-every-bounded-domain`
- `lem-nondegenerate-interval-is-not-null`
- `lem-paracompact-hausdorff-cover-shrinking`
- `rem-sums-proved-to-exist-but-not-evaluated`
- `thm-compact-null-is-content-zero`
- `thm-composition-of-continuous-functions`
- `thm-continuous-image-of-a-compact-set-r`
- `thm-infinite-product-criterion`
- `thm-mertens`
- `thm-sequential-criterion-for-continuity`

## A8 fatal-only repair — 2026-08-09

Audit-Alpha adjudicated all eight current-context Terra rejections in
`wave8-judge-adjudications.jsonl`: one `confirmed_fatal`, six
`confirmed_nonfatal`, and one `false_positive`. R1 licensed exactly one item
repair.

| item | pre-edit defect and minimal repair | class / support | normalized pre-edit hash | normalized final hash |
|---|---|---|---|---|
| `cor-q-is-meager-and-not-g-delta` | L1 ended with the false general assertion “an at most countable family may be presented as a sequence indexed by N.” The empty family has no function from N into it. The clause was unused because step 1.2 uses the preceding exact bijection `Q approximately N`; Alpha deleted only the false clause, its now-unused `def-countable` dependency, and its stale contract citation. The host Terra reading of the resulting hash `c96ab3f27d07d81e8b0d702d01867c4b868b7739d0e01647af8126cc95975324` then found that the first Remark still falsely generalized claim 1 to “any countable space”; a nonempty countable discrete space refutes that assertion. Alpha replaced only that clause with the exact local explanation that step 1.2 lists `Q_R` and step 1.1 proves real singletons nowhere dense. Every Statement claim and numbered proof step is unchanged. | `other` (two false reader-visible assertions found in successive exact-current reads); elementary empty-function and nonempty discrete-space counterexamples; provenance transition: none (`ai-altered`/`ai-generated` remains exact) | `0c233b550b97c24e0a2260aee6c6a5567188595839a2ca772764d23f3c2b61f5` | `8ccbe550554ceb11584e492815c66fea1521c2d5b8a3383e4b16f4421a6769ba` |

The refreshed namespaced and merged proof contracts remove only the obsolete
`def-countable` citation row and remain strict; the follow-up Remark correction
changes no proof obligation or dependency. The first host exact-final Terra
result against `c96ab3f...` is preserved as a genuine `REFUSED` reading and
cannot certify the corrected text. The subsequent sandbox attempt labelled
`a8-final2-cor-q-is-meager-and-not-g-delta` failed before inference at the
WebSocket/HTTPS `Operation not permitted` boundary and is likewise only
historical transport evidence.

The later read-only host dispatch labelled
`a8-final2-host-cor-q-is-meager-and-not-g-delta` independently read the exact
corrected item, its 14 dependencies, and its current contract at normalized
hash `8ccbe550...`; it returned `CERTIFIED` with `FINDINGS: NONE`. Alpha
recomputed the same current disk hash and recorded the owner-delegated
`published-audit` verification stamp. The verification-only stamp leaves the
normalized hash unchanged; the stamped full-file SHA-256 is
`f278811ea8f0cad9b18ca8692c27b9f5982048429cb35d3f357ada4c5e527cd3`.
No judge stamp was written.

Alpha read all ten current downstream consumers computed from the current
reverse-dependency and direct-citation graph. All ten use only unchanged claims
1--3 (or the category/measure example), never the removed unused clause, and
are `still-licensed`; the concrete per-consumer evidence is in
`wave8-A8-impact-review.json`. The tool-verifiable impact receipt remains
pending the orchestrator-owned `post-a8` snapshot; Alpha did not add a stage
snapshot.

Exact A8 edited-item list and targeted paired-rejudge set:

- `cor-q-is-meager-and-not-g-delta`

No page, sibling, consumer, source, provenance row, id, or reading order was
changed at A8. The repeated repair/refusal makes this item an explicit
orchestrator personal-audit obligation in addition to the existing eight-item
A8 escalation set.
