# Batch 63 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Assigned pages: `qftx-anomaly-cocycles` (A, order 823) and `qftx-anomaly-cocycles-examples` (B, order 824)

## Scope and plan reconciliation

Read the complete assigned section of `research/plan-quantum-field-theory-frontier-expansion-track.md` at the `qftx-anomaly-cocycles` entry (L1179 onward), plus the corresponding records in `research/plan-spec.json`. No `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` was present at authoring time.

The track specifies three A items and one B item, and its page IDs, title, ordering, category, and `qftx-bv-brst` prerequisite agree with plan-spec. Plan-spec has empty `items` arrays for these pages; these are unpopulated inventory placeholders, not conflicting item assignments. Following the run instruction that the plan controls conflicts, the track’s inventory and proof route were used. The four item IDs are `def-qftx-loop-current-cocycle`, `prop-qftx-loop-cocycle-jacobi`, `def-qftx-chiral-anomaly-interface`, and `ex-qftx-vectorlike-charge-cancellation`.

The design’s scope and caveats are preserved: the smooth-loop central cocycle is proved under only finite-dimensional real Lie algebra, symmetric invariant form, and periodic smooth-loop assumptions; the anomaly interface is conditional on the exact local BRST/counterterm hypotheses of its supplier; the cubic chiral trace convention is stated explicitly; mixed gauge-gravitational and global anomalies are not conflated with cubic gauge cancellation; and the vectorlike example is only a trace cancellation, not a claim of full quantum consistency. No diagram is used as a proof.

## Dependency inventory and levels

The batch dependency-level evidence was read before authoring. The stored schedule assigned batch 63 level 3 with batch 62 at level 2; the current full-run recomputation also gives batch 63 level 3 requiring batch 62. Within this batch the recomputed item levels are:

| Item | Supplier(s) in the run dependency closure | Level |
| --- | --- | ---: |
| `def-qftx-loop-current-cocycle` | none | 0 |
| `prop-qftx-loop-cocycle-jacobi` | `def-qftx-loop-current-cocycle` | 1 |
| `def-qftx-chiral-anomaly-interface` | cross-batch `prop-qftx-anomaly-obstruction` (level 9; current carrier, unresolved Step 1 readiness) | 10 |
| `ex-qftx-vectorlike-charge-cancellation` | `def-qftx-chiral-anomaly-interface` | 11 |

The assigned dependency closure check passed with zero errors. Its six pages are the two assigned pages plus `qftx-bv-brst`, `qftx-causal-renormalization`, `qftx-analytic-prerequisites`, and `qftx-microlocal-products`. The loop cocycle pair was authored before its consumer. The anomaly definition and B example were completed conditionally rather than omitted while the independent upstream BRST pair remained unresolved.

The cross-batch JSON contains one open page edge (`qftx-anomaly-cocycles` → `qftx-bv-brst`) and one open item edge (`def-qftx-chiral-anomaly-interface` → `prop-qftx-anomaly-obstruction`). Their evidence and exact current hashes are recorded in `physics-non-fluid-129-2026-10-21-r2-batch-63.cross-batch-dependencies.json`. Both remain open because the current upstream Step 1 decision is escalated and its stored input hash is stale; no independent approval is inferred from draft status.

## Sources, retrieval, and harvested results

The coverage file records seven page/source entries and 25 harvested results, each with a disposition, supported item(s), locator, and limitations. Complete relevant reasoning was inspected in the cited source sections:

| Source | URL and locator | Use / limitation |
| --- | --- | --- |
| Khesin–Wendt, *The Geometry of Infinite-Dimensional Groups* | <https://www.math.utoronto.ca/khesin/papers/Lecture_notes.pdf>, Ch. II §1.1, Definitions 1.1–1.3 and proof through Remark 1.5, printed pp. 48–49 (PDF pp. 58–60) | Smooth-loop cocycle and central extension conventions; complete cited section in the 316-page book inspected. |
| Ana Ros Camacho, *Kac-Moody Algebras* | <https://www.math.uni-hamburg.de/home/wockel/teaching/data/cohomology_of_lie_algebras_ros_camacho.pdf>, §6, Definition 25, equations (50)–(55), Proofs 3–4, PDF pp. 7–9 | Independent seminar treatment; its scope is Laurent-polynomial loops, while the local proof covers smooth loops. |
| Adel Bilal, *Lectures on Anomalies* | <https://arxiv.org/pdf/0802.0634>, §§7.1, 9.1–9.2, 11.3.2, PDF pp. 45–49, 70–72, 92–93 | Chiral trace, Wess–Zumino/BRST consistency and counterterm equivalence, and 4D mixed term; relevant derivations inspected, not unrelated chapters. |
| Barnich–Brandt–Henneaux, *Local BRST cohomology in gauge theories* | <https://arxiv.org/pdf/hep-th/0002245>, §§2.3 and 12.3, PDF pp. 9–10, 119–120 | Local anomaly consistency and counterterm equivalence; relevant sections inspected, not the entire 150-page report. |
| Jean Zinn-Justin, *Chiral Anomalies and Topology* | <https://arxiv.org/pdf/hep-th/0201220>, §1, PDF pp. 2–3 | Explicit local/global anomaly scope distinction; introductory discussion inspected, not the unrelated remainder. |
| UT Austin QFT notes, *Anomalies and Differential Forms* | <https://web2.ph.utexas.edu/~vadim/Classes/2024f-qft/adf.pdf>, “Anomaly Descent” and “Non Abelian Anomaly in 4 Dimensions,” equations (44)–(57), PDF pp. 9–11 | Independent 4D descent and left-minus-right chiral trace treatment; complete cited passages inspected. |

`source-fetch-check --stamp` verified 7/7 source entries, one attempt each, with no retrieval failures, retries, or dropped sources. The final check-mode retrieval verification also passed 7/7. `source_resolution` is empty because no source retrieval failure occurred. The coverage checklist passed for both pages and all 25 harvested results.

## Readiness and unresolved upstream inputs

Current readiness was checked with `loadStep1Record` and `step1Decision` from the required support modules. The two loop items have current `ready` records. The anomaly interface definition and the vectorlike example have final `escalated` records; they were not marked ready because their required anomaly prerequisite is unresolved.

The current `prop-qftx-anomaly-obstruction` carrier was read in full. Its actual result is a conditional Wess–Zumino relative-class/counterterm interface under its explicitly stated scalar-scheme, nilpotent Ward-operator, local-density, and admissible-subcomplex hypotheses. It does not identify the cubic coefficient `d^{abc}` with a descent representative. Its current Step 1 decision is escalated and its stored item-input hash `048ebf908273d14dd2ea75edfda73cfd9763a01335717fa7f22886d35909ba90` differs from current input hash `f4bacf8305b6c17d5721be83d5c0b83cd321cca57f0bdf5f08996455a13fafc4`.

The stale upstream escalation reason includes subclaims that changed since that reason was recorded. The current scalar theorem statement is conditional without the prior PB clause, and its current proof contains F1–F11; its current Step 1 record is itself old/escalated with a hash mismatch. The current finite-graph lemma record also has a stale hash and refers to a missing product-scaling supplier. Current records for `lem-qftx-transverse-center-scaling-bound` and `lem-qftx-balanced-local-functional-representatives` are missing. These are upstream batch-62 facts and were not edited in this assignment. The assigned anomaly interface remains conditional and escalated pending an owner refresh/review of the actual current upstream closure.

The two assigned escalated records were created before the final source-locator clarification and manifest synchronization. Their stored item hashes are consequently stale against the final files: `def-qftx-chiral-anomaly-interface` stores `11356037…` versus current `8d512419…`; `ex-qftx-vectorlike-charge-cancellation` stores `8c7ef801…` versus current `6485aaa2…`. The escalation rows were not overwritten because the workflow expressly prohibits overwriting an escalation. Refreshing them requires owner action. The loop-item ready records remain current.

## Scoped checks and workspace-level blockers

Passed on the assigned evidence: authored-mode `content-policy` (4 items, zero errors/warnings); focused `depcheck` (4 items plus 2 pages, zero errors/warnings); proof precheck (4 files, 2 proof-bearing checked, zero failures); `rendercheck` (4 items plus 2 pages, zero errors/warnings); `proof-layout` (4 items, 6 proof steps, zero defects); strict assigned proof-contract validation (2 proof-bearing items, zero errors/warnings); coverage checklist (2 pages, 25 harvested results, zero errors/warnings); and assigned dependency closure (zero errors). The current full-run batch-level recomputation succeeds and gives batch 63 level 3 requiring batch 62.

The repository-wide batch-level `check` still reports stale stored levels and requests recomputation because this batch’s planned manifest is now populated. That file is shared owner state and was not edited. Repository-wide item-level checks report 37 unrelated empty scaffold inventories outside this batch. Full proof-contract coverage also cannot load the run frontier because unrelated `qsmx-quantum-double` has an empty/invalid inventory. These global checks do not invalidate the clean assigned-batch checks; the owner must refresh shared batch-level evidence and repair/reconcile the unrelated scaffold inventories before claiming whole-run consistency.

Final Step 1 decisions: `def-qftx-loop-current-cocycle` and `prop-qftx-loop-cocycle-jacobi` are `ready`; `def-qftx-chiral-anomaly-interface` and `ex-qftx-vectorlike-charge-cancellation` are `escalated`. No `--owner` override was used, and no escalation was overwritten. Independent review/approval remains a later gate.
