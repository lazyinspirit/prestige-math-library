# Batch 31 notes — Finite-time comparison of bounded vector fields

Run: physics-td-qft-rpm-62-2026-10-14 · role beta · batch 31 · assigned pair: rpm-controlled-limits / rpm-controlled-limits-examples.

## Inventory and placement

The controlling design reservation is seven A items and one B example, all present in the assigned pages and manifest. The A page is order 431 and the B page is order 432. The A page contains 7/100 items; the B page contains 1/100. No item was omitted to meet capacity.

| Item | Page | In-run dependency level |
|---|---|---:|
| lem-rpm-finite-time-ode-comparison | rpm-controlled-limits | 0 |
| lem-rpm-low-speed-remainders | rpm-controlled-limits | 0 |
| lem-rpm-low-speed-uniform-remainders | rpm-controlled-limits | 1 |
| lem-rpm-shell-force-ivp | rpm-controlled-limits | 2 |
| pthm-rpm-prescribed-em-nr-trajectory-limit | rpm-controlled-limits | 7 |
| pthm-rpm-prescribed-force-local-motion | rpm-controlled-limits | 7 |
| pthm-rpm-controlled-newtonian-reduction | rpm-controlled-limits | 7 |
| ex-rpm-low-speed-energy-bound | rpm-controlled-limits-examples | 7 |

Levels count only suppliers in this run: no in-run supplier gives level zero; otherwise the level is one plus the maximum current supplier level. The scoped recalculation across batches 22, 23 and 31 found no level errors. The level-6 inverse-momentum supplier in batch 23 is used at its actual draft statement and explicit escalated readiness, never as an approved proof.

## Plan and design reconciliation

- The design section in research/plan-relativistic-particle-mechanics-track.md reserves the seven A items and one B example; paired-inventory agrees. The current plan-spec.json page rows have empty item lists. The explicit reservation and assigned design control this batch manifest; the shared plan was left unchanged.
- The controlling plan requires the A page prerequisites em-lorentz-covariant-formulation, gr-flat-and-newtonian-bridges, rpm-momentum-collisions and rpm-geometry-actions. An older source inventory listed only rpm-geometry-actions. The plan controls; all four are retained.
- The controlling plan gives the B page only rpm-controlled-limits as its page prerequisite. An older paired-inventory row also listed rpm-momentum-collisions. The plan controls; the example’s actual item-level inverse-momentum dependency is separately recorded.
- The older dynamics-inventory omits lem-rpm-low-speed-uniform-remainders and pthm-rpm-controlled-newtonian-reduction; both occur in the explicit design reservation and are authored here.
- The stale source-Q4 placeholder maps to the exact published thm-gr-weak-field-scaled-trajectory-limit. Its compact-region H1–H3 and finite scaled-time estimate are used without claiming a metric-family construction. The stale source-gr-local-proofs alias maps to the actual batch-22 lem-rpm-shell-tangent-force-ivp and this batch’s complete compact-continuation proof. The local-force theorem uses the actual post-rpm-prescribed-force-law rather than assuming that the massive-particle postulate selects a force.

The four page prerequisites were inspected for scope: the published EM page supplies the named Lorentz-force theorem under its fixed SI convention and excludes self-field/radiation reaction; the published GR page presents the same scaled weak-field theorem with its H1–H3 limitations; the two draft RPM pages provide the mass-shell inversion and geometry/action carriers used here. The batch-31 consumers preserve these interfaces and distinguish the two flat/curved branches.

## Source harvest and retrieval record

The A-page coverage ledger records 25 harvested results and their included/inline dispositions. Active full-text treatments include the OpenStax University Physics Volume 3 textbook chapters 5.8–5.9, the OpenStax University Physics Volume 2 section 16.1, Tong’s complete General Relativity HTML notes §§1.1.1/1.2.6 and §5.1.2, Carroll’s complete GR chapter 4 and Iyer’s full ODE notes (Theorem 8, Lemma 9, Proposition 17). Eight active source records have fetch stamps; six failed route records are documented as drops with their actual attempts, searches, local alternative arguments and dependencies in the coverage file. Coverage checklist: 2 pages, 25 harvested results, 0 errors, 0 warnings.

Teschl’s complete ODE book and Tong’s complete Dynamics and Relativity notes were fully read at the cited sections, but all six fetch-check attempts on each compressed PDF route failed page-tree verification. The Imperial ODE PDF also failed all six attempts for that reason. Fitzpatrick node126 was fully inspected, but its extracted body was 1,833 characters, below the checker’s 2,048-character threshold; the MIT OCW PDF was fully inspected but its compressed page tree also failed all six attempts. These routes have per-item replacement arguments and exact dependencies; no harvested claim was dropped without a local argument. The directly fetch-stamped CMU ODE HTML, OpenStax textbook pages, Tong GR HTML, Carroll PDF and OpenStax electromagnetism HTML remain active.

## Supplier status and readiness

The flat prescribed-field trajectory proof and curved geodesic proof are complete conditional deductions. The Lorentz force, observer-energy/momentum definitions, draft RPM inverse-momentum theorem, and draft geodesic/force carriers are stated with exact hypotheses and scopes in their facts. No in-run draft label is treated as an approval.

Batch 22’s current carrier statements were inspected. Its existing Step 1 rows say ready, but batch 23’s current cross-batch ledger reports those hashes stale after the batch-22 manifest/content refresh. Batch 23’s pthm-rpm-inverse-momentum-and-work row is explicitly escalated because its batch-22 hashes are stale and loadStep3 cannot load the malformed batch-42 inventory (bare string item IDs cause Duplicate item undefined). The batch-31 cross-batch ledger leaves those exact consumer edges open. Three items with current mathematical prerequisites have ready records; the five consumers of stale or escalated in-run suppliers have escalated records.

The direct root `step1-decisions.mjs record` invocation fails before writing because the run-wide loader encounters the batch-42 bare-string entries and throws `Duplicate item undefined`. To record only this batch without editing other workers’ manifests, the required record command was run against a temporary inventory containing the current batch-22, batch-23 and batch-31 manifests and the shared read-only item corpus; its eight output records were copied into batch-31 research evidence. Escalated records were not overwritten. The full-run readiness check remains blocked by the malformed batch-42 input.

The batch-22/23/31 scoped dependency-level calculation checks 36 items across 6 pages with no errors. The full-run item-dependency-level command reports other empty scaffold inventories and batch-42 entries without item IDs. The batch-31 scoped proof-contract-coverage check covers all 8/8 assigned proof-bearing items; the full-run version is obstructed by the empty batch-10 page inventory td-cycles-and-low-temperature. The local 13-row cross-batch review passes ownership, declaration and evidence checks; the full frontier dependency-ledger collector stops on an invalid consumer review in batch 11. These are outside this batch’s ownership and were not edited. The live autopilot status also shows Step 1 held for owner repair/recertification, with 19/64 batches covered and no worker in flight.

## Scoped checks

- Proof contracts: strict validator passes 8/8 with exact supplier-section excerpts, one derivation contract per numbered step, all eight standard boundary dispositions, and applicable finite checks.
- Physics precheck: 8/8 assigned items pass after canonical phase labels; each item records verification.precheck: pass.
- Rendercheck: all 8 items and 2 pages pass with no TeX or frontmatter errors.
- Proof-layout: 8 items, 23 steps, 0 defects. The default loader could not resolve the web app’s `@/` imports through its global TypeScript fallback; a temporary resolver following the existing web `tsconfig.json` paths let the same renderer complete. No app files were changed.
- Coverage checklist: pass, 25 harvested results, no omissions.
- Source-fetch-check: 14/14 resolved (8 stamped, 6 documented drops).
- Dependency levels: scoped batches 22/23/31 calculation passes.
- Remaining batch-wide mechanical blockers are recorded above; no shared plan, run state, imported math, other batch item, or owner verdict was changed.
