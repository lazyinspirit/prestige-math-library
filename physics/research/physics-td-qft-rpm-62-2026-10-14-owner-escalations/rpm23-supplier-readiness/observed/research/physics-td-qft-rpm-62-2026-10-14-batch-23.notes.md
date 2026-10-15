# Batch 23 authoring notes — rpm-momentum-collisions

## Assignment, design, and plan comparison

This batch owns only `rpm-momentum-collisions` / `rpm-momentum-collisions-examples` (orders 415–416) in `relativistic-particle-mechanics`, library `physics`. The A page requires `rpm-geometry-actions`; the B page requires the A page. The A page carries the nine reserved design items in their reserved order. The B page carries the two reserved thought experiments as examples. Both pages remain draft and are below the 100-item cap.

The current `plan-spec.json` rows agree with the complete track-design section on page IDs, titles, category, library, companion, order, and page prerequisites. Their `items` arrays are empty planning placeholders, so there is no item-inventory conflict. The research inventory's coarse item dependencies were refined to the exact suppliers used by the complete local arguments; no reserved claim was removed or weakened. The variable-mass identity remains a separate differentiated ansatz with no force law. Fusion and decay remain stipulated kinematic constructions, not claims that a channel occurs.

## Current dependency order and levels

The run dependency file places batch 23 at level 1 because it requires batch 22. After batch 22's item inventory appeared, the current item-level graph was recomputed. These labels reflect in-run item suppliers, not the page-level priority:

| Item | Current dependency level | Principal in-run prerequisite |
|---|---:|---|
| `thm-rpm-finite-future-momentum-sum` | 0 | none |
| `def-rpm-collision-objects` | 6 | batch-22 mechanical momentum definition |
| `pthm-rpm-inverse-momentum-and-work` | 6 | batch-22 mechanical momentum definition |
| `post-rpm-isolated-collision-balance` | 7 | local collision definition |
| `pthm-rpm-system-mass-threshold` | 8 | local balance, finite-sum theorem, inverse theorem |
| `texp-rpm-ideal-fusion-mass` | 8 | local collision/balance and inverse theorem |
| `pthm-rpm-fixed-target-threshold` | 9 | system threshold and inverse theorem |
| `pthm-rpm-two-body-com-kinematics` | 9 | collision/balance, system threshold, inverse theorem |
| `pthm-rpm-two-null-invariant-energy` | 9 | collision definition/system threshold |
| `pthm-rpm-kinematic-elastic-channel` | 10 | two-body theorem and local collision/balance |
| `texp-rpm-one-null-decay-recoil` | 10 | two-body theorem and local collision/balance |

No dependency cycle was found in the assigned graph. The finite-sum theorem is mathematical and uses only mathematical suppliers. The remaining physical items keep their recorded `dependency_roles`, `physical_scope`, units, and empirical qualifications.

## Batch-22 interfaces and open readiness

Batch 22 now has a registered manifest with 13 A-page items and four B-page items (manifest SHA-256 `2755819c28d79f66c08a0564cac070372d39d146c1bf6c5b445372cc1f064955`). I re-read the two direct definitions against their consumers:

- `def-rpm-spacetime-observer-and-worldline` (carrier SHA-256 `7965bc93bd24e966647e87d42de9d80e040ecde3146099962f130b87cdacd5b1`) defines the flat affine Minkowski model, signature `(-,+,+,+)`, C² future-timelike worldlines, observers/rest spaces, and the SI `x^0=ct` convention. The collision definition and inverse theorem use the flat branch and those exact curve/frame conventions.
- `def-rpm-mechanical-momentum-and-observer-energy` (carrier SHA-256 `883a14ff152de8d96fbe13d2e8735ecbacfe0689cf1724217e85bc3451be44db`) defines massive `P=mU`, a separately specified nonzero future-null momentum, observer energy `E_n=-c g(P,n)`, spatial projection `q_n(P)`, and SI units. The consumers use those clauses and never identify a null momentum with `mU` at `m=0`.

The batch-22 carriers are registered and their statements match the recorded uses. Their Step-1 records say `ready`, but their stored input hashes are stale after the batch-22 manifest refresh. A current-input check of the batch-22 page returns “Item or dependency changed; record current readiness” for all 17 A/B items. The A-page edge and direct item edges therefore remain `open` in `batch-23.cross-batch-dependencies.json`; dependent items remain escalated until the owner re-records current batch-22 readiness and the exact inputs are checked again.

I also inspected `pthm-rpm-mass-shell-and-force-work` (carrier SHA-256 `ca0a0b413fb1ff09edb6352cffcb7c7b898a46ddc649b52d792bf3cf33c004f7`). Its statement requires `post-rpm-prescribed-force-law`, which D0 expressly does not adopt, and its proof step 2.1 cites undeclared `[F5]`. It is recorded as `removed` from the inverse theorem's candidate inputs and is not used as a supplier. The assigned theorem proves the required mass-shell and work identities directly from the massive momentum convention.

## Sources and retrieval history

Two independent treatments were read for the A page: David Tong's complete *Dynamics and Relativity* lecture notes and Taylor–Wheeler's complete Chapter 7, “Momenergy,” from *Spacetime Physics*, 2nd edition. The local proofs carry the complete reasoning and qualifications; source prose is not used as proof of a physical postulate.

- Tong's original 166-page PDF was read in the full-text reader. Its delivery URL did not receive a mechanical stamp because the PDF uses compressed objects and this environment has no `mutool` page counter. The author-hosted, complete 54-page Special Relativity Chapter 7 PDF is the active verified route (790,437 bytes; 54 pages; SHA-256 prefix `8a2e846b96c32f7e`). It contains the cited 4-momentum, massless-particle, decay, and collision sections.
- Taylor–Wheeler's complete 32-page Chapter 7 was read. The old publisher-hosted PDF URL failed TLS validation (`CERT_HAS_EXPIRED`). The active full-text routes are the book's §7.3 and §7.6 pages on Physics LibreTexts (25,225 and 25,061 extracted text characters; SHA-256 prefixes `79296808100c513e` and `0c71e9170597594c`). Section 7.3 supports the component/invariant-mass context; §7.6 supports total momenergy balance and recoil/collision context.
- Searches also found a LibreTexts print-PDF URL that returned 404, a second Taylor hostname with the same expired certificate, and a 104 MB Wikimedia full-book mirror whose web-reader transfer exceeded its content limit and whose local fetch did not return a stamp before it was stopped. These candidates were not used. The original failed delivery URLs are preserved as dropped source rows in coverage; their per-item alternative arguments and dependency lists are recorded in `source_resolution`. No source content, claim, or proof obligation was dropped.

Coverage records 17 harvested results across both pages. The strict source-fetch check resolves five active URLs and two documented delivery-URL drops. The complete local proofs supply the exact thresholds, null endpoints, angle formula, direction freedom, and hypothetical-channel calculations; no empirical measurements or reaction probabilities are claimed.

## Scoped checks and current blockers

The first format pass proposed canonical phase numbering for eight proofs. Those proposed proof bodies were adopted without changing claims, facts, or justifications. The subsequent precheck covered 11 files, checked 10 proof-bearing/nonproof structures, and reported zero failures; the collision definition was not applicable to phase formatting.

The strict proof-contract check passes 10 proof-bearing/postulate items with no warnings. Coverage passes for two pages and 17 harvested results. Source-fetch check passes five stamped sources and validates two documented drops. Content policy passes 11 items with no errors or warnings; manifest-only authored containment passes; manifest dependency shape passes all 11 item rows. Rendercheck passes 13 changed item/page files.

The whole-run `item-dependency-levels.mjs check` exits with 75 errors outside batch 23: 62 empty inventories, seven malformed item rows in batch 42, and six stale labels in the RPM Hamiltonian page group. It reports no batch-23 level mismatch. The initial proof-layout invocation could not resolve the app's `@/components` alias; a temporary loader under `/private/tmp` mapped that alias and extensionless TypeScript imports without modifying the app checkout. The final explicit-item proof-layout check passed all 11 items and 27 steps with zero defects.

The live run-wide `step1-decisions.mjs check` is blocked by `research/physics-td-qft-rpm-62-2026-10-14-batch-42.pages.json`: `qft-mf03` lists six IDs and its examples page lists one ID as strings, so `loadStep3` throws `Duplicate item undefined`. `physics-check --run` independently exits on `Invalid or empty current page in physics-td-qft-rpm-62-2026-10-14-batch-10.pages.json`. The autopilot status command reports “Workflow revision differs: use a fresh run and state directory” and “no run configured and no status.md yet”; no run state was changed.

All 11 batch-23 Step-1 records are `escalated`. The two batch-22 definitions and all 17 geometry-page items have registered carriers and stored `ready` decisions, but current-input hash checks say “Item or dependency changed; record current readiness” for every geometry item after its manifest refresh. The finite-sum theorem has no in-run supplier, but its live run-wide readiness hash could not be authenticated while batch 42 is malformed, so it is also escalated pending a valid run manifest. To create the required batch-23 records without editing batch 42, the `step1-decisions.mjs record` command ran in a temporary manifest mirror with only the seven malformed string entries represented as ID objects; all batch-23 records remain escalated and their `dependencies` lists contain the direct inspected prerequisites. No `--owner` flag was used, and no upstream manifest or engine state was changed.
