# Batch 52 notes — Finite Killing energy current and reference normalization

Run `physics-remaining-80-2026-10-17`; batch `52`; owner role `beta`. This record covers only `tgr-mi03` (A, order 601) and `tgr-mi03-examples` (B, order 602), and the three items assigned to those pages. These are draft authoring records, not proof approval.

## Plan and inventory comparison

The canonical plan and this dispatch agree on category `thermodynamics-and-general-relativity-mathematics`, library `mathematics`, page IDs, titles, order, A/B companion relation, and the A page prerequisite `tgr-mi01`. The plan-spec item lists are empty because they predate authoring. The proposed inventory has one placement discrepancy: its B item record says `page: "TGR-MI03"`, while the canonical B companion is `tgr-mi03-examples`; the example is placed on that companion. No statement or scope was changed to fit page capacity.

Assigned inventory and direct in-run levels, calculated from the current batch-50 item records and batch-52 item dependencies:

| Item | Direct in-run suppliers | Level |
|---|---|---:|
| `lem-tgr-killing-energy-normalization` | `def-tgr-spacelike-current-slab` (1), `thm-tgr-finite-current-production-balance` (3) | 4 |
| `cor-tgr-killing-no-work-support` | lemma (4), slab definition (1), finite-balance theorem (3) | 5 |
| `ex-tgr-reference-wall-normalization` | lemma (4), slab definition (1) | 5 |

Other direct mathematical premises remain in each item's `deps` and `dependency_roles`. The lemma uses the published Lorentzian, tensor-index, Killing-field, Killing-characterization and metric-compatible-connection suppliers, plus `def-countable-choice`. The corollary additionally cites the Killing characterization because it cannot use the conserved-stress conclusion for a sourced stress. The example uses the lemma, `def-countable-choice`, and the slab definition.

The computed batch dependency row is batch 52, level 1, requiring batch 50. The current recorded `physics-remaining-80-2026-10-17-batch-dependency-levels.json` is stale after the batch-50 manifest change; its check reports `Stale batch dependency levels for physics-remaining-80-2026-10-17`. The current page requirements still compute to 52 → 50 at level 1. This shared scheduling snapshot was left for the owner to refresh.

## Actual MI01 supplier interfaces and unresolved status

The MI01 carriers are present in `items/` and in the current batch-50 manifest; they were not omitted or replaced by an assumed planned statement. I inspected the complete current definition and theorem statements and proofs, and checked the exact conditional use in this batch.

- `def-tgr-spacelike-current-slab` is a draft definition. On its actual interface, the chart is positively oriented, the compact product slab is `K=[t0,t1]×Ω`, `h` is positive definite, `g^{00}<0`, the chosen unit normal is future, and the `C¹` current is defined on a neighborhood of `K`. It defines the proper normal slice charge `Q_J(t)` and the net side flux `Φ_J(B)` as upper-minus-lower `wJ^i` face integrals. Its coordinates carry no units in that mathematical definition; the SI length convention is supplied separately in [A3] of the lemma. The local chart domain used here inherits an independent orientation from its positively oriented chart and the stated time orientation.
- `thm-tgr-finite-current-production-balance` is a draft theorem with an AI-generated proof, not an accepted result. Its actual statement is `Q_J(t1)-Q_J(t0)+Φ_J(B)=∫_K (∇_aJ^a) vol_g`, for the slab data and `C¹` current. This exactly supports the conditional substitution `J=j_ξ`, `∇_aJ^a=0` in the lemma and corollary. The endpoint-equality biconditional follows algebraically from that balance and is proved in the consuming items.
- The balance proof depends directly on the draft `lem-tgr-c1-current-density-divergence` and `lem-tgr-normal-flux-coordinate-density`, and on the slab definition. The slab definition depends on draft `lem-tgr-coordinate-boxes-are-compact-jordan`. I read the full local arguments of these relevant items and checked the stated regularity, orientation, density, face-flux, FTC and Jordan-Fubini interfaces. Their draft proof status remains unresolved. The published metric-density, connection, FTC, integrability and Jordan-Fubini suppliers are used at their inspected statements; no source citation substitutes for the conditional local application.

There is also a currentness mismatch in the other batch's shared inputs. The current batch-50 page manifest's statement/dependency snapshots do not match the files for `lem-tgr-coordinate-boxes-are-compact-jordan`, `def-tgr-spacelike-current-slab`, and `thm-tgr-finite-current-production-balance`. Specifically:

- The coordinate-box lemma's file has four dependencies absent from its manifest record: `def-null-and-content-zero-in-rn`, `def-riemann-integral-over-a-jordan-set`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, and `thm-lebesgue-criterion-in-rn`; its manifest statement snapshot differs from the current item statement.
- The slab definition's manifest lists `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, which is absent from the current item frontmatter; its manifest statement snapshot differs from the current definition.
- The balance theorem's current item frontmatter adds `lem-tgr-coordinate-boxes-are-compact-jordan`, absent from its manifest dependencies, while the manifest lists `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, absent from the current item frontmatter; its manifest statement snapshot differs from the current theorem statement.
- The current `lem-tgr-c1-current-density-divergence` and `lem-tgr-normal-flux-coordinate-density` statements and direct dependency lists match their batch-50 records.

These are cross-batch inputs owned by batch 50 and remain unchanged here. **Owner escalation:** reconcile those three batch-50 manifest records against their current item files, then review the draft coordinate-box proof, slab definition interface, C¹ density and normal-flux lemmas, and finite-balance proof. The affected consuming claims are the conditional finite balance and endpoint-charge equivalence in `lem-tgr-killing-energy-normalization` steps 3.1–4.1, `cor-tgr-killing-no-work-support` steps 3.1–4.1, and the finite-charge reference use in `ex-tgr-reference-wall-normalization` step 2.1. The local Killing-current divergence and algebraic normalization arguments are complete; readiness remains escalated until the current supplier snapshots and proof status are resolved.

## Sources and harvest

The A page has three independent full treatments; the B page repeats the relevant sources for its example. All six source instances were fetched and stamped successfully. The URLs, precise locators, complete read extents, support notes and every harvested result's `included`, `inline`, or reasoned `out-of-scope` disposition are recorded in the coverage file. No source retrieval failed, no source was dropped, and no source supplies a deductive proof.

- Harvey Reall, [Part III General Relativity](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf), full PDF: §5.3 Killing/current divergence, §6.3 observer energy density/current, and §8.7 Stokes/flux. The A-page Killing and observer-current results are included in the lemma; the geodesic result and global Stokes proof are out of scope because the local finite balance remains an explicit conditional supplier. On B, the source sections provide context through the lemma; the example's wall scaling is derived locally.
- David Tong, [General Relativity, §4.5.5](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html), complete author-hosted HTML section. Its Killing current and hypersurface-charge result is included in the A lemma; its use for B is contextual through that lemma, with wall normalization proved algebraically here.
- Sean M. Carroll, [Lecture Notes on General Relativity](https://arxiv.org/pdf/gr-qc/9712019), complete arXiv PDF: chapter 4 stress-energy/flux and chapter 5 Killing equation/geodesic quantity. The A page includes the stress-energy and Killing-equation material; the independent geodesic conclusion is not claimed. Both chapter results are out of scope for the B wall-specific calculation.

Recorded searches in the coverage file located the author-hosted Reall and Tong texts and the complete Carroll arXiv PDF. `source_resolution` is empty because all six sources fetched successfully on the first stamp run; no recovery attempts or alternative-source records were needed.

## Scoped checks and blockers

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts <three assigned item paths> --json`: pass, 3/3. The checker proposed phase-layer relabeling; those labels and all proof-contract step references were updated before the passing run.
- `node tools/physics-support/proof-layout.mjs <three assigned item paths>`: pass, 3 items, 15 steps, 0 defects.
- `node tools/physics-support/rendercheck.mjs <three items and two pages> --json`: pass, 5 files, 0 errors/warnings. Unsupported `\(...\)` inline delimiters and wikilinks wrapped in math were repaired to canonical inline math/plain links.
- Strict proof contract: pass, all three assigned items; every actual step is mapped, every linked fact has an exact current supplier excerpt, and all eight boundary cases are disposed. `finite_smoke` is empty because no bounded finite test applies to these arbitrary-field identities.
- `coverage-checklist --require-destination --json`: pass, 2 pages, 14 harvested results, 0 errors/warnings.
- `source-fetch-check --stamp`, followed by check mode: 6/6 source instances fetch-verified; 0 drops.
- Focused `depcheck` on the three assigned items and two pages: pass, 0 errors/warnings.
- Scoped dependency calculation over the nine items in batches 50 and 52, using current item-file dependency lists: no errors; assigned levels are 4, 5, 5.
- Full-run `item-dependency-levels.mjs check --run ...`: fails outside this scope with 112 existing errors (empty inventories and other dependency-level mismatches); no assigned ID is among the errors.
- Full-run `batch-dependency-levels.mjs check --run ...`: stale snapshot. The current graph calculation still places batch 52 at level 1 requiring batch 50. Shared run metadata remains with the owner.
- `frontier-dependency-ledger.mjs refresh --run ...`: blocked by the existing batch-13 input error `invalid review or consumer ownership`. The central ledger was not changed; batch 52's cross-batch input file is complete and records the open edges for its actual MI01 suppliers.

Step-1 decisions for all three items are `escalated`, not `ready`, because the MI01 proof status and current manifest/file reconciliation remain unresolved. No `--owner` override was used.

After those escalation records were written, I made two statement-precision edits: the horizon set is explicitly a codimension-one submanifold with degenerate induced metric, and the example wall is explicitly a codimension-one submanifold with induced signature $(-,+,+)$. The supplier blockers and decisions did not change. Per instruction not to overwrite an escalation, the records were left escalated and intact; their hashes refer to the pre-clarification item snapshots. The final items were rechecked after these edits.
