# Batch 21 authoring notes — Noise, Fault Tolerance, Concatenation, and Thresholds

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `noise-fault-tolerance-concatenation-and-thresholds` / `noise-fault-tolerance-concatenation-and-thresholds-examples`  
Batch dependency level: 8; prerequisite batches: 5, 6, 7, 9, 18, 19, 20.  
Scheduling input: `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`.

## Controlling plan, inventory, and conflicts

- Read the owner authoring direction, the complete QC21 roadmap entry at `research/plan-quantum-computing-track.md` L95–106, `research/plan-spec.json`, the assigned task, the current batch evidence, and the QC audit. QC21's plan scope is mathematical noise models, locations/gadgets, concatenation, and a precise threshold route; the planar iid-Z memory estimate remains separate.
- The `plan-spec.json` QC21 page matches the assigned order, title, category, companion, and nine page prerequisites, but has `items: []`. This is a current planning/inventory conflict; it was not repaired in the shared plan.
- The earlier audited export records 11 A-page items and one B example (`research/scaffold-audit-2026-10-14/quantum-computing-coverage.json`, `research/scaffold-audit-2026-10-14/quantum-computing.md`). The assigned scaffold contains 19 A items and one B example. It retains all 11 audited A items and adds these eight support items from the assignment/current dependency graph: `def-qc-local-stochastic-fault-set-law`, `lem-qc-local-stochastic-fault-witness-bound`, `def-qc-finite-channel-location-schedule`, `lem-qc-noise-channel-model-composes-with-circuit-semantics`, `lem-qc-disjoint-fault-location-events-are-independent`, `lem-qc-planar-mw-recovery-failure-yields-half-error-path`, `def-qc-local-stochastic-noise-model`, and `thm-qc-local-stochastic-concatenated-threshold`. None is omitted from the batch manifest or A page.
- The A page's item list and batch manifest were reconciled and ordered by the recomputed item dependency levels. The B page contains the distance-five planar memory arithmetic example.

## Recomputed item levels

The assigned graph is acyclic. Levels below use the current run manifests, including suppliers from other batches in this run.

| Level | Items |
|---:|---|
| 0 | `def-qc-local-stochastic-fault-set-law` |
| 1 | `lem-qc-local-stochastic-fault-witness-bound` |
| 7 | `def-qc-code-deviation-and-spread` |
| 8 | `def-qc-finite-channel-location-schedule` |
| 9 | `def-qc-noise-channel-model`, `lem-qc-noise-channel-model-composes-with-circuit-semantics` |
| 10 | `def-qc-fault-location-path-and-rectangle` |
| 11 | `lem-qc-disjoint-fault-location-events-are-independent` |
| 18 | `def-qc-ft-gadget-and-proper-code-contract`, `lem-qc-planar-mw-recovery-failure-yields-half-error-path` |
| 19 | `def-qc-level-r-good-and-bad-rectangles`, `def-qc-local-stochastic-noise-model`, `thm-qc-explicit-proper-code-and-universal-gadgets`, `thm-qc-planar-surface-code-iid-z-memory-bound` |
| 20 | `lem-qc-recursive-bad-rectangle-probability`, `lem-qc-sparse-fault-path-implies-code-deviation`, `thm-qc-t1-extended-rectangle-threshold`, `ex-qc-surface-memory-bound-hypotheses` |
| 21 | `thm-qc-local-stochastic-concatenated-threshold`, `thm-qc-proper-code-concatenated-threshold` |

A new local interface, `def-qc-finite-channel-location-schedule`, resolves the semantic gap between QC09's current unitary circuit definitions and the general local CPTP gate/preparation/measurement/reset/idle slots needed by the threshold proofs. Its denotation and empty-schedule case are proved from the current finite-channel composition carrier.

## Supplier inspection and unresolved dependencies

- QC05 channel and channel-composition bodies, QC06 trace-distance bodies, QC07 Pauli bodies, QC18 support/deviation bodies, QC19 recovery bodies, and the actual QC09 bodies were inspected. QC09 now has current circuit syntax, unitary denotation, and measurement/branch-control carriers. The syntax/denotation items cover unitary gate circuits; the QC21 channel schedule states the broader CPTP location interface locally.
- The local-stochastic branch was corrected after full-text inspection of Aliferis–Gottesman–Preskill §4.1: the source bounds fault-set probabilities and permits arbitrary operations at each faulty location for each fault path. QC21 permits fault-map selection to depend on the full fault pattern while keeping each CPTP replacement attached to its location. It does not assert an arbitrary joint channel across distinct locations. Aharonov–Ben-Or §2.2 supports the independent special case, not the correlated subset-bound definition.
- The earlier coverage row attributed the correlated subset-bound model to Aharonov–Ben-Or; it is now marked `out-of-scope` with the exact reason. AGP supports the fault-set definition, while the witness-count recurrence and threshold derivation are proved locally. AGP's own postselected threshold proof is not used as a proof of the QC21 correlated-noise theorem.
- Direct QC20 suppliers for the planar and proper-gadget branches are present as raw files but do not currently parse under the renderer. A scoped `rendercheck` of the 24 direct supplier files found nine errors across seven QC20 files:
  - `def-qc-square-planar-surface-code.md`: frontmatter YAML error at line 22.
  - `def-qc-stabilizer-syndrome-and-logical-operators.md`: frontmatter YAML error at line 21 and a multiline display equation.
  - `thm-qc-square-planar-surface-code-distance-and-path-count.md`: frontmatter YAML error at line 24.
  - `def-qc-stabilizer-distance.md`: frontmatter YAML error at line 20.
  - `thm-qc-stabilizer-distance-detection-and-correction.md`: frontmatter YAML error at line 25.
  - `thm-qc-css-syndrome-correction.md`: frontmatter YAML error at line 45 and multiline display math.
  - `alg-qc-stabilizer-encoder-by-symplectic-elimination.md`: frontmatter YAML error at line 32.
- The path-count theorem's transitive dependency walk found 809 current carriers, including 520 proof-bearing items, and no missing filenames. That entire closure has not been reconciled line by line. The planar crossing-path lemma, memory theorem, and example remain escalated. The proper-gadget contract and every downstream threshold item that depends on it also remain escalated while its QC20 carriers are not loadable.
- `thm-qc-explicit-proper-code-and-universal-gadgets` still lacks its full gadget construction proof. `thm-qc-t1-extended-rectangle-threshold` remains conditional on the unproved disjoint-witness truncated-exRec reduction, proposed as `lem-qc-t1-truncated-exrec-witness-reduction` on the A page. These obligations are recorded in the proof contracts and cross-batch dependency evidence.

## Source reading and retrieval

Four complete source URLs are recorded in the batch coverage. The full 18-page Aharonov–Ben-Or paper, the relevant §§7.18.3–7.18.6 of the 92-page Preskill Chapter 7 PDF, the full 25-page Preskill fault-tolerance note, and the introduction plus full relevant §4.1/correlation discussion from the AGP full-text PDF were inspected. Coverage records item-level dispositions and locators. The arXiv HTML endpoint was too large to return; the official arXiv PDF was then retrieved and the relevant full-text reasoning read, so no cited-source retrieval remains unresolved and no `source_resolution` failure record is warranted.

`node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-21.coverage.json --stamp` passed: 4/4 sources verified, 0 newly stamped, 0 drops.

## Final scoped checks

- `proof-layout.mjs` on all 20 explicitly assigned item files: 20 items, 47 steps, 0 defects.
- Scoped normative precheck: 13 proof-bearing items checked, 0 failures.
- Strict proof contracts: 20/20 items, 0 errors, 0 warnings.
- Scoped `rendercheck`: 22 assigned item/page files, 0 errors, 0 warnings.
- Scoped `content-policy`: 20 items, 0 errors, 0 warnings.
- Focused `depcheck`: 20 items, 0 errors, 0 warnings; dependency closure 1,168 items.
- Whole-run `item-dependency-levels.mjs check`: exit 1 on 48 empty scaffold inventories and seven stale labels in unrelated QA19 items; no batch-21 level errors remain.
- Whole-run `batch-dependency-levels.mjs check`: exit 1 because current QC20 supplier frontmatter has the YAML error at line 25 shown above. Shared dependency state was not edited.
- Scoped QC20 supplier `rendercheck`: 9 errors across the seven files listed above. These are outside this batch and were not edited.

## Step 1 readiness records

Eight items are `ready`: `def-qc-local-stochastic-fault-set-law`, `lem-qc-local-stochastic-fault-witness-bound`, `def-qc-code-deviation-and-spread`, `def-qc-finite-channel-location-schedule`, `def-qc-noise-channel-model`, `lem-qc-noise-channel-model-composes-with-circuit-semantics`, `def-qc-fault-location-path-and-rectangle`, and `lem-qc-disjoint-fault-location-events-are-independent`.

Twelve items are `escalated` for the QC20 supplier/loadability issues, the unresolved planar dependency closure, or missing gadget/overlap proofs. The eight ready records were created with `step1-decisions.mjs record` and their hashes rechecked. The same CLI could not create escalation rows because hashing those rows traverses the malformed QC20 YAML and aborts. The twelve escalation JSON records were therefore written in schema-valid form without a hash (escalated rows are not hash-closed) and with `owner:false`; no owner flag was used. A focused `step1Decision` read confirmed all 20 batch-21 records classify as eight ready and twelve escalated.

The run remains active at `1-scaffold` (14/60 covered) with unrelated plan blockers: `Invalid pair undefined`, invalid item identity `def-qc-effective-unitary-matrix-input` in batch 12, a malformed YAML item handoff at line 16, and the owner repair/recertification blocker recorded in `research/quantum-computing-algorithms-60-2026-10-15-step1-blockers.json`. A run-wide Step 1 check also stops on malformed YAML in `items/thm-qa-19-measurement-distribution.md` (line 30), outside this assignment. Run state and other batches were left unchanged.

These authoring and check records do not constitute independent approval.
