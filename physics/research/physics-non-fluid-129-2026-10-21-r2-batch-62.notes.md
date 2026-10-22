# Batch 62 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Pair: `qftx-bv-brst` / `qftx-bv-brst-examples`  
Output manifest: `research/physics-non-fluid-129-2026-10-21-r2-batch-62.pages.json`

## Plan and design reconciliation

The assigned design section and `plan-spec.json` agree on the A/B page IDs, titles, order (821/822), category, mathematics library, companion relationship, and prerequisites `qftx-causal-renormalization` and `qft-mg01`. The plan specification still has empty item arrays as a scaffold; the detailed design lists three A items and one B example. I retained that scope and added one A-page definition, `def-qftx-brst-relative-local-cohomology`, because the anomaly proof needs a local-form complex and relative cohomology interface that has no earlier supplier. This yields four A items and one B example; no plan or published page was changed.

No `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` file was present at the final inventory check.

The design writes the matter transformation as `s psi = i q c psi` and uses `c` for the ghost while also writing `x^0 = c t`. The inspected `def-qft-qed-gauge-data` supplier fixes a normalized real potential `a` and dimensionless `g = q sqrt(mu_0 c_light / hbar)`, with `a' = a + d alpha` and `psi' = exp(i g alpha) psi`. The local definition uses that exact normalized convention and writes the ghost as `c_gh` and light speed as `c_light`. It records `x^0 = c_light t` in SI coordinates and the scalar time-ordering convention `c_light = 1`. This resolves the notation collision without changing the gauge action. The scope remains an off-shell Abelian jet differential, the polynomial doublet contraction, and a conditional local anomaly obstruction; it does not assert a quantum action principle, a positive physical Hilbert quotient, or a non-Abelian result.

## Inventory and dependency levels

The level is zero without an in-run supplier and otherwise one plus the maximum in-run supplier level.

| Item | Page | In-run dependencies | Level |
|---|---|---|---:|
| `def-qftx-abelian-local-brst` | A | none | 0 |
| `lem-qftx-brst-nilpotence-doublets` | A | Abelian jet definition | 1 |
| `def-qftx-brst-relative-local-cohomology` | A | Abelian jet definition; nilpotence lemma | 2 |
| `prop-qftx-anomaly-obstruction` | A | relative cohomology definition; nilpotence lemma; `thm-qftx-scalar-eg-induction` (level 8) | 9 |
| `ex-qftx-doublet-removal` | B | Abelian jet definition; nilpotence lemma | 2 |

The scoped dependency closure check passed for 20 items across five pages with no errors and these levels. The two page dependencies are retained. The published `qft-mg01` gauge-data page and its exact `def-qft-qed-gauge-data` convention were inspected and match the local definition.

## Current cross-batch prerequisite audit

The current scalar theorem statement was read with its full proof and relevant current support statements/proofs. It assumes AC, Countable Choice, admissible flat scalar data, and a local scalar polynomial class; its current statement has **no PB hypothesis**. The proposition uses precisely that conditional interface and assumes the Ward differential, locality of the anomaly, and the admissible counterterm complex separately.

The theorem's `loadStep1Record` / `step1Decision` result is still the old escalated row: stored SHA256 `e799940288c1235a77e7037090f1ed7360c98a7bdb5962b1ca6193d3c3a0eeee`, versus current item hash `a7eae2d1eca62b76a8ae512d7b8c3bbd5e534c462041d68aa0b07cc271ed8510`. Its PB rationale no longer matches the current proof. I re-read the full current theorem proof after its latest edit; the current Given line now includes `[F1]`–`[F11]`. The earlier proof-format omission is corrected in the live carrier. I left my already-recorded escalation immutable as instructed. The finite-graph supplier's current statement and proof use the transverse-center estimate and have no PB hypothesis, but its old escalated row still describes a PB-dependent proof (stored SHA256 `6808d39e47679b89daec74e0b2ff43c5a2f3298b180f7e41a7166bc4acc1e6a3`, current item hash `5df27c0fc5accf35de0719c13a82c932a46b4359e8cc2aa7b09a56d72201d935`). Current Step 1 records for `lem-qftx-transverse-center-scaling-bound` and `lem-qftx-balanced-local-functional-representatives` are missing. These current readiness-record gaps keep the direct prerequisite open; draft status and independent approval are not treated as blockers. No unowned supplier or readiness record was edited.

Accordingly, both direct in-run edges remain open in `research/physics-non-fluid-129-2026-10-21-r2-batch-62.cross-batch-dependencies.json`: the A-page requirement on `qftx-causal-renormalization`, and the proposition's dependency on `thm-qftx-scalar-eg-induction`. The consumer proof is complete conditionally and its Step 1 status is `escalated` pending current upstream readiness. The immutable escalation row retains the earlier live hash `a27c185d2d21795f944c4b5a47c7bd2d642b4e532bba453506b0df4ce84dc6c6`; the current upstream hash is `a7eae2d1eca62b76a8ae512d7b8c3bbd5e534c462041d68aa0b07cc271ed8510`. This records neither a PB hypothesis in the live statement nor independent proof approval.

## Sources and retrieval evidence

Full texts were retrieved and the complete relevant arguments/passages were inspected. All harvested results in the coverage file are marked `included`; it records each item, locator, support, limitation, and retrieval stamp.

| Source | Full-text locator used | Supported items |
|---|---|---|
| Barnich, Brandt, Henneaux, [*Local BRST cohomology in gauge theories*](https://arxiv.org/pdf/hep-th/0002245) | §§2.2–2.3, Appendix 2.B (2.48)–(2.50), §§4.1–4.4, §12.3 | Abelian BRST algebra, doublet contraction, local forms and anomaly classes; the finite `B^2` example |
| Dragon, Brandt, [*BRST Symmetry and Cohomology*](https://arxiv.org/pdf/1205.3293) | §§2.1, 2.4 (2.62)–(2.66), §§3.1–3.3 | Graded differential, doublet homotopy, relative cohomology and first-breaking/counterterm argument; independent treatment of the example |
| Schmid, [*Local cohomology in gauge theories, BRST transformations and anomalies*](https://deferentialgeometry.org/papers/localbrst.pdf) | §2, PDF pp. 2–5; §3, PDF pp. 9–12 | Infinite-jet local forms, horizontal differential, BRST cohomology and Wess–Zumino class |

The coverage has 12 harvested results and five source-record stamps across the two pages. `source-fetch-check --coverage ... --stamp` completed after retrieval; the final `source-fetch-check --coverage ...` passed 5/5 fetch verifications and 5/5 source resolutions. No retrieval failed, so no source-resolution recovery or drop record was needed.

## Checks and readiness

- `proof-layout` on the five owned items: 16 steps, 0 defects.
- `precheck.mts` on owned items: 3 proof-bearing items checked, 0 failing.
- Strict proof contracts: 3/3 proof-bearing items, 0 errors and 0 warnings.
- Authored manifest content policy: 5 items, 0 errors and 0 warnings; manifest dependency declarations: 5 items, 0 errors.
- Focused `depcheck`: 5 selected items passed; prerequisite cycle checks covered 1,439 items and 397 pages.
- `rendercheck`: five items and two pages passed.
- Coverage checklist: two pages, 12 harvested results, 0 errors and 0 warnings.
- Scoped `physics-check`: 0 errors across five items and both selected pages.
- Whole-run dependency-level audit (`item-dependency-levels.mjs check --run ...`): 700 items / 258 pages, exit 1 with 67 errors: 47 empty scaffold inventories, 11 bare-ID entries on the two `csm-frontier-critical-gaussian-rg` pages, and nine level mismatches. The nine mismatches are outside this pair: `post-nrqmx-finite-mode-light-matter-model` (5/1), `def-nrqmx-finite-mode-g2-statistic` (6/2), `pthm-nrqmx-jaynes-cummings-blocks` (6/2), `pthm-nrqmx-beam-splitter-count-statistics` (6/2), `pthm-nrqmx-finite-mode-loss-channel` (7/2), `ex-nrqmx-jc-vacuum-rabi` (7/3), `ex-nrqmx-single-photon-antibunching` (7/3), `thm-qsmx-finite-mazur-bound` (1/2), and `cex-qsmx-dc-order-of-limits` (2/3). These other batches were left untouched.

Final Step 1 records are hash-current and `ready` for `def-qftx-abelian-local-brst`, `lem-qftx-brst-nilpotence-doublets`, `def-qftx-brst-relative-local-cohomology`, and `ex-qftx-doublet-removal`. `prop-qftx-anomaly-obstruction` is `escalated` for the current supplier readiness/input-record gap documented above. No tests were run.
