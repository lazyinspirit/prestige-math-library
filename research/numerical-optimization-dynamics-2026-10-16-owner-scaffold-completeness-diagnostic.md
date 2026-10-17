# Completed-batch scaffold completeness diagnostic

Run: `numerical-optimization-dynamics-2026-10-16`. Read-only diagnosis at 2026-10-15T23:36:42.712705+00:00. No gates, tests, run controls, readiness recording, metadata repair, source edits or commits were performed.

## Finding

The three completed authors have all their required physical files and current readiness. Their incomplete-artifact sentinel is caused by a dependency cycle in the manifest of still-running batch 29. This is a global scaffold validation effect, not missing author output in batches 3, 6 or 21.

`research/RUN-step1-blockers.json`, timestamp `2026-10-15T23:35:23.597Z`, names units `3,6,21` as covered but artifact-incomplete. Native state records successful attempt 1 for each: batch 3 ended `23:34:43.687Z`, batch 6 ended `23:29:25.472Z`, batch 21 ended `23:27:13.007Z`.

A read-only import of exported `scaffoldSnapshot` and `authorArtifacts`, together with individual `step1Decision` calls, established:

| Batch | Authored files missing | Coverage file | Current readiness | Manifest item levels |
| --- | --- | --- | --- | --- |
| 3 | none | present | all 11 closed | all match computed levels |
| 6 | none | present | all 21 closed | all match computed levels |
| 21 | none | present | all 7 closed | all match computed levels |

The snapshot loaded all 214 pages successfully. It reported this actual manifest dependency cycle:

`alg-pseudo-arclength-continuation-with-certified-local-corrector -> thm-pseudo-arclength-local-newton-correction -> alg-pseudo-arclength-continuation-with-certified-local-corrector`.

Both nodes belong to batch 29, A page `pseudo-arclength-continuation-and-fold-certificates`. Native state still has batch 29 attempt 1 running (`endedAt: null`). At inspection, the batch-29 manifest includes the algorithm among the theorem's logical `deps`, while the current theorem source already excludes that algorithm from `deps`; the algorithm source and manifest both include the theorem. This source/manifest discrepancy is consistent with ongoing author repair. It is not evidence that either completed batch needs reauthoring.

## Source mechanism and disposition

In `tools/autopilot/stages/mathlib.mts`, `scaffoldArtifacts` calls `scaffoldSnapshot(ctx)`, which loads the entire run and computes `dependencyLevels(snapshot.pages)`. Any global error beginning `dependency cycle:` sets each inspected batch's `complete` flag false. The function then appends the intentionally absent `RUN-batch-N.scaffold-incomplete` sentinel. Thus live batch 29's invalid manifest graph makes unrelated completed batches appear artifact-incomplete even though their own 39 readiness decisions close and all their labels match.

No bypass or speculative scheduler edit is justified by this diagnostic. Batch 29's existing author owns reconciliation of its actual declared dependencies with its source, followed by current metadata/readiness under the ordinary workflow. Do not overwrite that live author's files. Once its manifest graph is reconciled, the native snapshot and sentinel evaluation can recheck completed batches; later changes may independently stale readiness and must be handled honestly. Full strict post-drain metadata checks, dependency levels, readiness and all gates remain mandatory. Root owns any subsequent owner rehash or recertification.


## Follow-up: batch 19 stale readiness; batch 33 cleared

Read-only follow-up to native stalemate `2026-10-16T00:38:35.362Z`, listing batches 11, 19 and 33. Batch 11 belongs to a separate active owner repair and was not examined here.

A fresh native snapshot loaded 214 pages with **no dependency cycles**. Batch 19 has all authored files and its coverage file; all ten manifest dependency labels match computed values. Its ten readiness files are present with `decision: ready`, `owner: false`, but every current `step1Decision` returns `closed: false`, reason `Item or dependency changed; record current readiness`. Batch 33 now has all files and coverage, all 21 readiness decisions closed, and every dependency label matches.

Batch 19's genuine native attempt 1 ended successfully at `2026-10-15T23:58:32.260Z`. Process inspection found no live own-run batch-19 author. Its manifest mtime is `23:49:05.237Z`; its ten own source mtimes precede the readiness records at `23:52:45.495Z` through `23:52:54.078Z`.

For **every** batch-19 item, native `itemInputPaths(snapshot, item, record.dependencies)` includes the following consumed inputs modified after its readiness record:

| Consumed input | Current modification time, UTC |
| --- | --- |
| `items/def-cardinal-polynomial-interpolation.md` | 2026-10-16 00:01:55.605 |
| `items/lem-cardinal-basis-degree-and-values.md` | 2026-10-16 00:06:22.772 |
| `items/lem-finite-double-sum-interchange.md` | 2026-10-16 00:07:28.942 |
| `items/lem-finite-product-of-quotients.md` | 2026-10-16 00:07:28.982 |
| `research/numerical-optimization-dynamics-2026-10-16-batch-4.pages.json` | 2026-10-16 00:13:47.215 |

The native hash comparison establishes actual stale readiness. These common later supplier timestamps explain the current consumer context and distinguish it from missing batch-19 outputs; without historical input preimages this diagnostic does not attribute the hash difference to one particular byte or claim every timestamp corresponds to a mathematical change.

Minimal disposition: the existing batch-4 supplier reviewer checks affected batch-19 consumers under CLAUDE section 6, then the owner records current readiness for all ten against the accepted current inputs. Root reported routing that consumer check to the existing linear supplier owner and retains record rebind ownership. No reauthoring or completion-predicate bypass is indicated. No independent mathematical review, source/content edits, readiness mutation, tests, gates, run control or commits were performed for this follow-up.
