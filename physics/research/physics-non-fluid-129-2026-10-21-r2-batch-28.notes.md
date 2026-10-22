# Batch 28 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Owner: beta, batch 28  
Assigned pair: `emg-fx13` / `emg-fx13-examples`

## Plan, scope and placement

- The dispatch and `plan-spec.json` agree on page IDs, order 753/754, titles, category, library, companions and page prerequisites. Their empty `items` arrays are scaffold placeholders; the detailed design in `plan-einstein-maxwell-models-frontier-expansion-track.md` and its linked prose scaffold specify the actual interfaces.
- The complete `emg-fx13` design section assigns three physical interfaces to A and `texp-emg-fx-test-to-coupled-error` as the B leaf. The manifest and page files now follow that placement. The `ex-emg-fx-flat-holonomy-circle` example belongs to the separate `emg-fx09` pair; it is not part of this batch. No current `physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` was present.
- The design describes the B thought experiment through `post-emg-fx-test-field-regime` and `prop-emg-test-field-residual-order`. Inspection of the latter's complete statement and proof shows that its residual is for a scaled **source-free Maxwell two-form on a vacuum metric**, using the Maxwell tensor `Q`; it neither concerns the charged scalar nor supplies a solution-distance estimate. The B item therefore directly adopts the published `post-emg-background-maxwell-test`, explicitly states the additional vacuum/source-free premises, and keeps the Maxwell field separate from the A-page scalar model. Its finite-time stability inequality remains an explicit hypothesis. This is a scoped interface correction, not a change to the planned conclusion.
- Page prerequisites remain those in the dispatch. The plan's B leaf is authored; no neighboring page's item was copied into this pair. Both pages remain below the 100-item cap.

## Assigned inventory and dependency levels

Levels were computed from the actual run suppliers before final placement. The thought experiment has no in-run item supplier; external published inputs do not raise its item level.

| Page | Item | Kind / domain | In-run item suppliers | Level |
|---|---|---|---|---:|
| A `emg-fx13` | `def-emg-fx-charged-scalar-stress-tensor` | definition / mathematics | none | 0 |
| A `emg-fx13` | `post-emg-fx-classical-constitutive-adoption` | postulate / physics | `def-emg-fx-nonlinear-lagrangian` (batch 26) | 1 |
| A `emg-fx13` | `post-emg-fx-test-field-regime` | postulate / physics | batch 23 charged-scattering definition; local stress-tensor definition | 3 |
| A `emg-fx13` | `lem-emg-fx-asymptotic-scalar-energy-flux` | lemma / mathematics | batch 23 charged-scattering definition; local stress-tensor definition | 3 |
| A `emg-fx13` | `pthm-emg-fx-conditional-model-flux` | physics theorem / physics | batch 23 scattering definition and Wronskian proposition; local postulate and flux lemma | 5 |
| B `emg-fx13-examples` | `texp-emg-fx-test-to-coupled-error` | thought experiment / physics | none | 0 |

The page requirement edges from this batch to other batches are `emg-fx13` → `emg-fx07` (batch 22), `emg-fx08` (batch 23), and `emg-fx11` (batch 26). Item-level cross-batch edges are the two consumers of `def-emg-fx-charged-radial-scattering`, the theorem's use of that definition and `prop-emg-fx-superradiant-wronskian`, and the constitutive postulate's use of `def-emg-fx-nonlinear-lagrangian`. Each exact edge has one `verified` row in `batch-28.cross-batch-dependencies.json`; those rows record scoped interface checks only, not independent proof approval. External published inputs, `emg-fx13` → B's same-batch page edge, and transitive observations are not misreported as cross-batch rows.

## Supplier inspection and current readiness

- Read the complete current definitions and proofs for the charged radial-scattering interface, the Wronskian proposition, the generic nonlinear-Lagrangian definition and its action-variation inputs, the Maxwell residual proposition, the RN metric definition and horizon proposition, and the other mathematical interfaces cited by the six assigned items. The charged-scattering definition preserves `A_t=-Q/r`, `D_t=∂_t+ieQ/r`, its fixed Coulomb phase and real-frequency asymptotics; the Wronskian result is conditional on an admitted mode. The generic constitutive definition supplies `X,Y`, its independent-orientation Hodge convention and `H^{ab}=L_XF^{ab}+L_Y(⋆F)^{ab}`. No unsupported existence, global extension, hyperbolicity or causality conclusion is imported.
- Before recording, use `loadStep1Record` and `step1Decision` on the run suppliers. Current ready records were confirmed for `def-emg-fx-charged-radial-scattering` (batch 23; hash `f623110b8344c5901d921487acb6b7c536ba0fe6bb667bb97dda141ae3e06ee2`), `prop-emg-fx-superradiant-wronskian` (batch 23; `0bfaaf3366318e48998ddb299be4fca58061fe6dec6acfdee63d5ffa6ba22d57`), and `def-emg-fx-nonlinear-lagrangian` (batch 26; `0fd1902b23e7bdb51f1b0879cf8c0f84c7b5692cdb3d2080cef91865652e607c`). Their draft status or pending independent approval is not treated as a prerequisite gap. The declared `emg-fx07` page inputs were checked against current ready records for `def-emg-fx-extremal-test-scalar`, `thm-emg-fx-aretakis-spherical-charge`, and `prop-emg-fx-conditional-horizon-growth`.
- The exact current external RN suppliers `def-emg-xs-rn-data` and `prop-emg-xs-rn-horizon-data` were inspected, including the full proof of the latter. The published `post-emg-background-maxwell-test` and `prop-emg-test-field-residual-order` were read at their actual interfaces. The residual proposition's only inherited choice premise is `AC_ω`; `def-countable-choice` is read-only and no full Axiom of Choice is asserted.
- The newly authored mathematical definition depends only on `def-emg-lorentzian-forms`; the flux lemma depends only on mathematical premises. Physical postulates and theorem retain their physical and mathematical dependency roles, and the test-field thought experiment cites the distinct Maxwell model. Imported mathematics and root originals remain unchanged.

## Full-text source reading and harvested-result dispositions

The A page has two independent full-text charged-scalar treatments, including complete lecture notes and a full PhD thesis, and two independent full-text nonlinear-electrodynamics/effective-action treatments. The raw PDFs and extracted complete text are archived under `batch-28-sources/`; the exact per-result records, item arguments, dependencies, URLs, locators and dispositions are in `batch-28.coverage.json` and `batch-28-sources/source-reading.md`.

| Full source and URL | Harvested result; locator | Disposition and supported item / reason |
|---|---|---|
| Brito, Cardoso & Pani, *Superradiance -- the 2020 Edition*, complete 281-page lecture-notes volume. <https://arxiv.org/pdf/1501.06570> | Fixed-background charged test fields and radial separation; §4.4 | `included` — `post-emg-fx-test-field-regime` |
| Same | Conserved radial Wronskian and reflection/transmission identity; §4.4, eq. (4.53) | `included` — `pthm-emg-fx-conditional-model-flux` |
| Same | Charged RN threshold and reflectivity identity; §4.6.1, eqs. (4.54)–(4.56) | `included` — `pthm-emg-fx-conditional-model-flux`; exact local gauge is taken from the mathematical supplier |
| Same | Simpler plane-wave infinity asymptotics; §4.4, eqs. (4.50)–(4.53) | `out-of-scope` — local long-range charged radial equation requires the supplier's Coulomb phase |
| Same | Numerically computed amplification percentages; §4.6.1 and Figure 11 | `out-of-scope` — no numerical efficiency, measurement or mode-existence claim |
| Balakumar, *Aspects of quantum charged scalar field theory in curved spacetime*, complete 307-page PhD thesis. <https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0> | Static RN metric and electric gauge; Ch. 3, §3.1, eqs. (3.9)–(3.11) | `included` — `post-emg-fx-test-field-regime` |
| Same | Massless minimally coupled charged scalar and separation; §3.2.2, eqs. (3.36)–(3.49) | `included` — `post-emg-fx-test-field-regime` |
| Same | Wronskian conservation and in-mode relation; §3.3.3, eqs. (3.72)–(3.78) | `included` — `pthm-emg-fx-conditional-model-flux` |
| Same | Classical charged-scalar amplification band; §3.3.4, eqs. (3.83)–(3.84) | `included` — `pthm-emg-fx-conditional-model-flux`; conditional mode and nonzero transmission retained |
| Same | Mode orthonormalization and quantum-state construction; §3.4 and later | `out-of-scope` — this pair adopts a classical test scalar only |
| Sorokin, *Introductory Notes on Non-linear Electrodynamics and its Applications*, complete 26-page review. <https://arxiv.org/pdf/2112.12118> | Two invariants and generic `L(S,P)` family; §3.2, eqs. (3.4)–(3.7) | `included` — `post-emg-fx-classical-constitutive-adoption` |
| Same | Heisenberg–Euler quantum coefficients; §3.1, eqs. (3.1)–(3.3) | `out-of-scope` — coefficients remain arbitrary phenomenological parameters |
| Same | Convexity, causality and model restrictions; §3.2, discussion after eqs. (3.5)–(3.7) | `out-of-scope` — no characteristic, hyperbolicity or causality claim |
| Dunne, *Heisenberg-Euler Effective Lagrangians: Basics and Extensions*, complete 82-page lecture review. <https://arxiv.org/pdf/hep-th/0406216> | Constant-background one-loop QED action; §1.1 | `inline` — `post-emg-fx-classical-constitutive-adoption`, scope boundary only |
| Same | Low-energy EFT and derivative operators; §1.2.4 | `inline` — `post-emg-fx-classical-constitutive-adoption`, distinguishes invariant-only model from derivative EFT |
| Same | Weak-field expansion; §1.3 | `out-of-scope` — no coefficient, threshold or error bound is adopted |

Fetch records: Brito–Cardoso–Pani, 16,222,249 bytes / 281 pages / SHA-256 prefix `1e0663f0ea7d487a`; Balakumar, 1,731,481 bytes / 307 pages / `de751e44335eda8d`; Sorokin, 663,848 bytes / 26 pages / `3683ed39d78f85dd`; Dunne, 751,327 bytes / 82 pages / `39346f65275c3086`. `source-fetch-check --stamp` previously verified all four complete texts, four successes and zero retrieval failures. A search for Plebański's 1970 book found catalog metadata but no inspectable full text; it was not claimed as read or cited. No active source was dropped, and no recovery retry was needed.

## Mathematical and physical limits

- The charged-scalar result is a model deduction for any admitted real-frequency solution. It requires the strict band and nonzero transmission; the proof establishes neither a scattering solution nor its empirical realization. The flux lemma computes the tensor flux from the exact differentiated Coulomb-phase asymptotics, including cancellation of the oscillatory cross terms.
- The nonlinear constitutive item adopts an arbitrary polynomial with fixed coefficients and a stated dimensionless invariant domain. It claims no QED coefficient match, derivative-error control, field solution, hyperbolicity, causality or empirical validity.
- The B thought experiment integrates the exact compact Maxwell residual only after assuming the separate finite-time stability inequality. It makes no `τ→∞` claim and does not convert a small residual into a nearby-solution theorem. Its Maxwell test field is distinct from the charged scalar model.
- The dispatch's page dependencies on `emg-g04`, `emg-pcp01`, `emg-mp03` and `emg-c01` are page-context inputs; their scope was inspected and they do not replace any direct item proof or postulate in this batch.

## Scoped checks and readiness

Final results are from the last item, page, manifest, cross-batch and proof-contract edits. They are authoring and interface evidence only; they do not constitute independent approval.

- `proof-layout.mjs`: 6 assigned items, 7 numbered proof steps, 0 defects. `precheck.mts`: 5 proof-bearing/nonproof items checked, 0 failures; the mathematical definition is not a proof-bearing item.
- Strict `proof-contract.mjs`: 6/6 items, 12 exact supplier citations, 19 supplier excerpts, 0 errors and 0 warnings. All proof steps and eight standard boundary dispositions are mapped for the three proof-bearing items; postulates use their physics review worksheet.
- `rendercheck.mjs`: both pages and six items (8 files), 0 errors. `content-policy.mjs --manifest-only --authored`: 6 items, 0 errors and 0 warnings. `manifest-deps.mjs`: 6 items, 0 missing and 0 errors. `manifest-integrity.mjs`: 258/258 run pages present, no scope drift.
- `coverage-checklist.mjs`: 1 A page, 16 harvested results, 0 errors and 0 warnings. `source-fetch-check.mjs --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-28.coverage.json --stamp`: 4/4 sources fetch-verified, 0 newly stamped on the idempotent final pass, 0 drops.
- Focused `depcheck.mjs`: the six assigned roots and their selected item/page prerequisite closure covered 1,728 items and 406 pages; all selected dependency and cycle checks passed. A batch-local edge reconciliation independently matched the eight exact rows in `batch-28.cross-batch-dependencies.json`; all eight rows parse, name owned consumers, carry nonempty evidence and have `verified` scope-check status.
- `item-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2`: 837 items across 258 pages, maximum level 11, no mismatch. This confirms the six item levels in the inventory table above.
- `batch-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2` reports: “Stale batch dependency levels ... recompute before authoring.” The dispatch input had listed batch 28 at level 4 with prerequisites 22, 23 and 26. The shared batch-level file is owner-managed and was left unchanged; the owner needs to recompute that shared scheduling input. The item-level check and six local readiness hashes are current.

`step1-decisions.mjs record` wrote non-owner `ready` records supplier-first for all six assigned items. A fresh `loadStep1Record` / `step1Decision` pass reports each closed and current:

| Item | Readiness hash |
|---|---|
| `def-emg-fx-charged-scalar-stress-tensor` | `167ea49064d115317b75369484aeb0589651c2315ecc292871e3bcb80d55c6a4` |
| `texp-emg-fx-test-to-coupled-error` | `197c9dd030e3aa2db222fd7b8c06ce02b5292378a7bfabfd4846d0891bc3c62f` |
| `post-emg-fx-classical-constitutive-adoption` | `39d80e4c21691730ded018660e8a4d93b3eb49a02b8c70831a77cd4739ed5d57` |
| `post-emg-fx-test-field-regime` | `d05a98e64b98fe50e22004ee50ba16ece354e25eac98a3456e849e82f767b6fc` |
| `lem-emg-fx-asymptotic-scalar-energy-flux` | `2a5304211f40030c262cf8a4e8b5655ae8c19795c1454b4adf9d94ff9b967b0f` |
| `pthm-emg-fx-conditional-model-flux` | `3bf6a7c60afeeb39f23599c073a796c1fc9c23a13ab602d0b6662ac546f00573` |
