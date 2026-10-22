# Batch 33 authoring notes

## Scope and plan comparison

- Run `physics-non-fluid-129-2026-10-21-r2`, assigned pair `gr-fx05-bondi-news-and-memory` and its examples page only. The batch is dependency level 1 after batch 29.
- The current `plan-spec.json` assigns page orders 763/764 and the task/manifest require `gr-fx01-hypersurface-and-null-geometry`, `gr-linearized-waves`, and `gr-curvature-and-tides`. The retained GR-track design reserves orders 8009/8010. This is the plan conflict: the current plan controls, so the manifest and draft pages use 763/764. The three page prerequisites otherwise match.
- The design/inventory supplies four planned A items and two B examples. Added `def-gr-fx-bms-supertranslation` to A as the local definition needed to use the design's supertranslation action without importing a full BMS representation or charge algebra. It is placed after the Bondi-expansion definition and before the dependent example.
- Page inventories are within capacity: five A items and two B examples. The B page is a frontmatter-only draft. No published page, shared plan, root mathematical original, imported supplier, engine state or verdict was changed.

## Items and dependency levels

Levels use the maximum level of direct suppliers assigned anywhere in this run; external published/imported suppliers do not raise the level. Batch 29's `def-gr-fx-null-screen-geometry` is level 1.

| Item | Direct in-run supplier(s) | Level | Disposition |
|---|---|---:|---|
| `def-gr-fx-bondi-expansion` | `def-gr-fx-null-screen-geometry` (batch 29) | 2 | Smooth formal Bondi end, differentiated expansion, determinant gauge, shear/news/mass definitions and explicit scope. |
| `def-gr-fx-bms-supertranslation` | `def-gr-fx-bondi-expansion` | 3 | Fixed-frame infinitesimal action; full BMS representation, finite action and charges deferred. |
| `lem-gr-fx-bondi-mass-coefficient` | `def-gr-fx-bondi-expansion` | 3 | Radial leading terms authored, but the full subleading `Ric_uu` coefficient calculation remains escalated as [L1]. |
| `prop-gr-fx-memory-integral` | `def-gr-fx-bondi-expansion` | 3 | Component FTC and conditional linear Jacobi displacement, with endpoint velocity and finite-radius error control. |
| `prop-gr-fx-bondi-mass-loss` | expansion and mass-coefficient lemma | 4 | Complete sphere integration conditional on the exact mass-coefficient interface. Readiness escalated while that supplier proof is incomplete. |
| `ex-gr-fx05-1` | expansion, mass-coefficient lemma, mass-loss and memory results | 5 | Explicit smooth compact pulse and trace-free harmonic; formal boundary data only. Readiness escalated through the mass-coefficient supplier. |
| `ex-gr-fx05-2` | expansion, BMS definition, mass-coefficient lemma, mass-loss and memory results | 5 | Static nonzero infinitesimal supertranslation shear with zero news; readiness escalated through the mass-coefficient supplier. |

The scoped dependency calculation over batches 29 and 33 gives levels 2, 3, 3, 3, 4, 5, 5 with no cycles or label mismatches. The run-wide `item-dependency-levels.mjs check` reports many unrelated empty inventories in other batches; the scoped calculation above isolates the assigned graph and batch-29 supplier.

## Scope, conventions and mathematical review

- Use signature `(-,+,+,+)` and the current curvature/Ricci convention from `def-gr-curvature-tensor-and-derived-tensors`. The Bondi coordinates are geometric lengths (`u=ct_ret`, `r`); the sphere metric and coordinates are dimensionless. In SI, `C_AB` and `m_B` have length units, `P_AB` has length-squared units, `N_AB` is dimensionless, and `E_B=(c^4/G_N)m_B` gives `dE_B/dt_ret=-(c^5/(32 pi G_N)) integral N_AB N^AB dOmega`, in watts.
- Mädler–Winicour use `N^MW_AB=(1/2) partial_u C_AB`; all local formulas use `N_AB=partial_u C_AB=2 N^MW_AB`. Their Eq. (58), after this conversion, agrees with the stated `partial_u m=(1/4)D_AD_BN^AB-(1/8)N_ABN^AB`. Strominger uses complex-dyad components and includes matter flux; the local lemma takes the vacuum branch and a real sphere-tensor contraction.
- The coefficient proof starts with the determinant trace and inverse metric, derives the `rr` radial equation and leading `beta`, derives `U_(2)`, and uses the exact radial `V` equation with cancellation of its `r^-1` terms. It does not set the trace-free part of `P_AB` to zero. The final `r^-2` `Ric_uu` contraction must still explicitly reduce the `P_AB`, `U_(3)`, `V_(1)`, and `beta_(3)` contributions. Both full sources state the resulting supplementary coefficient but summarize that insertion; citations alone are not used as proof. This is the remaining local gap [L1].
- Escalation: [L1] is the missing complete expansion/cancellation in `lem-gr-fx-bondi-mass-coefficient`. It affects that local coefficient claim, the integrated `prop-gr-fx-bondi-mass-loss`, and both examples' mass conclusions. Proposed placement is a proved local helper lemma on the A page immediately before the mass-coefficient lemma, with statement `Ric_uu = r^-2(2 partial_u m - (1/2)D_AD_BN^AB + (1/4)N_ABN^AB)+O(r^-3)` under the exact Bondi hypotheses, and dependencies on `def-gr-fx-bondi-expansion`, `def-gr-curvature-tensor-and-derived-tensors`, `thm-gr-curvature-tensoriality-and-coordinate-formula`, and `def-countable-choice`. The helper must retain the determinant-gauge trace and show every subleading cancellation. Until proved, consuming arguments stay conditional and readiness remains escalated.
- `prop-gr-fx-memory-integral` does not identify a finite-radius TT waveform with the limiting news. Its detector statement assumes the explicit `O(r^-2)` screen-TT remainder and its first two retarded-time derivatives, first-order perturbation/separation, initially comoving masses, and zero news at both endpoints. The endpoint velocity estimate is also included.
- `ex-gr-fx05-1` is explicit smooth formal boundary data, not a global vacuum-existence claim or observation. `ex-gr-fx05-2` uses only the infinitesimal supertranslation action and does not assert a finite BMS transformation. Neither example interprets data as experimental evidence or quantized-gravity results.
- The current batch-29 `def-gr-fx-null-screen-geometry` Step 1 record is hash-current and `ready`; its complete definition and the full proofs used from batch 29 were inspected. The relevant published statements/proofs for the flat TT plane-wave screen and curvature, Jacobi equation, curvature coordinate formula, and FTC were read at their current carriers. No genuine supplier gap was found beyond [L1].

## Full-text source review and retrieval evidence

Full PDFs for both independent treatments were retrieved and inspected. Exact URLs, locators, page counts, file hashes, item mappings, per-result dispositions, searches, source resolution arguments and fetch stamps are in `physics-non-fluid-129-2026-10-21-r2-batch-33.coverage.json`.

- Thomas Mädler and Jeffrey Winicour, *Bondi-Sachs Formalism*, arXiv:1609.01731, full 31-page PDF. Read §2 Eqs. (3)-(5); §3 Eqs. (22)-(58), including radial equations (28)-(30), determinant hierarchy (34)-(57), news (42), the supplementary coefficient (58); Eqs. (60)-(61); and §4's BMS shear action.
- Andrew Strominger, *Lectures on the Infrared Structure of Gravity and Gauge Theory*, full 161-page notes, arXiv:1703.05448. Read §5.1 Eqs. (5.1.1)-(5.1.6), §5.2.1 Eqs. (5.2.1)-(5.2.9) and no-preferred-Poincare discussion, and §6 Eqs. (6.0.1)-(6.0.3).
- The sources independently support the conventions and final formula. Neither gives the complete line-by-line two-polarization `Ric_uu` coefficient cancellation; this exact limitation is reflected in [L1], not hidden as a source acceptance.
- Both retrievals succeeded on the first fetch. No recovery retry or source drop was needed. `source-fetch-check --stamp` is to be rerun after final artifact edits; its actual final output will be recorded below.

## Cross-batch dependencies

The cross-batch array records the two direct edges into batch 29: the A-page requirement and `def-gr-fx-bondi-expansion`'s dependency on `def-gr-fx-null-screen-geometry`. Both are `verified` for current scoped interface/readiness checks only, not independent proof approval. The B-to-A edge is within this batch. Published/external mathematical dependencies are not cross-batch rows.

## Scoped checks and Step 1 readiness

- Strict proof-contract validation currently reports 7/7 items, 0 errors and 0 warnings. The contracts contain the actual proof steps, facts, supplier excerpts, inputs and eight boundary dispositions for every item.
- Scoped `item-dependency-levels` over batches 29 and 33: four pages and fourteen items checked; levels 2, 3, 3, 3, 4, 5, 5 for the seven assigned items; zero errors and no cycles. The run-wide CLI reports empty inventories in unrelated batches, including unrelated EM and later GR pages; the scoped assigned graph passes.
- `manifest-deps`: 7 items, 0 missing arrays, 0 errors. Strict proof-contract check: 7/7, 0 errors and 0 warnings. `proof-layout`: 7 changed items, 23 steps, 0 defects. Normative precheck: 5 proof-bearing items checked, 0 failing. `depcheck`: 7 selected items; selected closure/cycle checks cover 1,203 items and 305 pages, all passed.
- `coverage-checklist`: 2 pages, 12 harvested source results, 0 errors and 0 warnings. `source-fetch-check --stamp`: 4/4 source entries fetch-verified, 0 newly stamped; 4/4 resolved, no documented drops. `rendercheck`: 9 item/page files, all parse. `content-policy --manifest-only --authored`: 7 items, 0 errors and 0 warnings.
- Current Step 1 records were verified with `loadStep1Record`, `step1Decision` and `itemHash`: all seven records are hash-current. Expansion, BMS definition and memory proposition are `ready`; the mass-coefficient lemma, mass-loss proposition and both examples are `escalated` on the exact [L1] proof gap and its downstream use. The batch-29 null-screen supplier is hash-current `ready`.
- Completion and readiness records are authoring evidence only; they do not confer independent proof approval.
- No tests were added or run.
