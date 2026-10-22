# Batch 6 — anisotropic waves and reciprocity

Run `physics-non-fluid-129-2026-10-21-r2`; beta-owned batch 6. The assigned pair is `emx-anisotropic-reciprocal-optics` / `emx-anisotropic-reciprocal-optics-examples` (classical electromagnetism, physics library). No current `physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` override was present.

## Plan and design reconciliation

The frontier design and `plan-spec.json` agree on the A/B IDs, titles, category, library, order, companion, and all declared page prerequisites. The design lists three A items and two B examples; the current `plan-spec.json` page rows still have empty `items` arrays, so they provide no conflicting item inventory. The authored manifest contains the three planned A items, both planned B examples, and one additional local A definition required by the stated complex-tensor reciprocity hypotheses. All six items fit the 100-item page cap.

The design's `def-emx-anisotropic-plane-symbol` is a lossless branch with real positive-definite symmetric permittivity and scalar positive permeability. The planned `pthm-emx-lorentz-reciprocity` statement is broader: it permits spatially varying complex tensor coefficients and requires ordinary transpose symmetry. The former cannot supply the latter's full coefficient class. To preserve the planned theorem and its hypotheses, `def-emx-reciprocal-phasor-medium` was added on the A page with the fixed-frequency complex tensor data class, SI units, field regularity, material-rest frame, `e^{-i omega t}` convention, and unconjugated bilinear products. The reciprocity proof uses this exact definition for the general identity and uses the planned lossless symbol definition only to prove the final lossless subcase (step 3.1). No planned claim was weakened or omitted.

The design proof route was retained: derive the anisotropic Maxwell symbol from the source-free Maxwell amplitudes; compute the uniaxial symbol matrix and its determinant, including the repeated polarization spaces; derive reciprocity from the divergence of the cross-product difference and integrate it; give an explicit extraordinary amplitude with `k dot D = 0` but `k dot E != 0`; and compute positive cycle-averaged polarization work in a reciprocal Lorentz oscillator. The theorem labels reciprocity as ordinary-transpose symmetry and does not infer time reversal or losslessness.

## Item inventory and dependency levels

| Item | Direct in-run suppliers | Level |
|---|---|---:|
| `def-emx-anisotropic-plane-symbol` | none | 0 |
| `def-emx-reciprocal-phasor-medium` | none | 0 |
| `pthm-emx-uniaxial-dispersion` | `def-emx-anisotropic-plane-symbol` | 1 |
| `pthm-emx-lorentz-reciprocity` | `def-emx-anisotropic-plane-symbol`, `def-emx-reciprocal-phasor-medium` | 1 |
| `ex-emx-extraordinary-longitudinal-e` | `pthm-emx-uniaxial-dispersion` | 2 |
| `ex-emx-reciprocity-not-time-reversal` | `pthm-emx-lorentz-reciprocity`, `def-emx-reciprocal-phasor-medium`, and batch-5 `pthm-emx-lorentz-susceptibility` | 2 |

`dependencyLevels` on populated batches 4–6 checked 20 items with no errors and returned these six levels. The recomputed batch graph gives batch 6 level 2 with `requires: [5]`, matching the loaded dependency-level evidence. The B page also requires the A page within this batch; that same-batch edge is not a cross-batch row.

The batch-5 `pthm-emx-lorentz-susceptibility` item was inspected at its complete current Statement and Proof and has a current `ready` Step-1 record. This example uses only its pointwise one-oscillator loss clause, with `omega > 0`, `gamma > 0`, and the `e^{-i omega t}` convention. It does not use the supplier's DC-dependent Hilbert-transform clause. The passive-dispersive A page is still a draft carrier; its current item readiness and the actual supplier proof were checked, so its draft label is not treated as missing proof. The cross-batch dependency array contains two verified page edges to that A page and one verified item edge to the susceptibility theorem. Those statuses record scoped interface checks, not independent proof approval.

The two local mathematical prerequisites for the reciprocity proof were read in full: `lem-the-divergence-and-curl-of-a-cross-product` and `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`. The latter states `AC_omega`; the reciprocity theorem explicitly carries that hypothesis and uses the divergence identity first on real and imaginary parts before recombining complex-linearly. The published electromagnetic prerequisite items and definitions were also inspected. Imported mathematical originals remain read-only.

## Source reading and dispositions

All three selected full-text sources were fetched and inspected; the source coverage file records locators, per-result dispositions, support arguments, and verified retrieval metadata.

- Jin Au Kong, *Electromagnetic Wave Theory*, complete 1,032-page PDF, [source](https://piers.org/piers/files/BOOK_ElectromagneticWaveTheory_by_JINAUKONG_FreeRelease2021.pdf). Read §3.2.A, printed pp. 292–294; §3.2.E, pp. 299–300; and §3.3.E, pp. 315–322. Its anisotropic constitutive law, uniaxial sectors, reciprocity identity, and optic-axis geometry support the relevant local items. The gyrotropic, negative-coefficient/energy-flow, slab phase, gradient-normal, and group-velocity results were marked out of scope; the k-surface geometry was inline as a diagram, with the exact equations proved algebraically.
- Weng Cho Chew, *Electromagnetic Field Theory*, complete 624-page lecture book, [source](https://engineering.purdue.edu/wcchew/ece604f23/EMFTEDX032124R.pdf). Read §7.1.2, printed pp. 83–84; Chapter 12 introduction, p. 145; §§12.1–12.1.1, pp. 146–148; §12.1.2, pp. 148–149; and §12.2, p. 150. These notes use `exp(+j omega t)`, opposite to the local convention, which is recorded at each relevant interface. The anisotropic tensor context and transpose-symmetric bilinear reciprocity support the local statements. Spatially nonlocal response, time-reversal wording, far-field reaction limits, and unclaimed related results were marked out of scope.
- Niklas Beisert, *Elektrodynamik*, ETH Zürich 2024 FS, complete 176-page lecture script, [source](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf). Read §12.1, printed pp. 12.1–12.2 (PDF pp. 142–143), equations (12.1)–(12.10). This is an independent Maxwell/phasor and scalar-response treatment, not an anisotropic derivation. Its isotropic plane-wave/energy formulas and universal group-velocity assertion were marked out of scope; only the Maxwell convention and scalar-response context were used inline.

The coverage checklist reports 22 harvested results and 7 included/inline results (one expected low-yield advisory). The other results have explicit out-of-scope reasons in the coverage JSON. All four planned proof-bearing claims have local conditional arguments, and the extra reciprocal-phasor definition is supported by both Kong and Chew. The checklist's request to confirm source declines with Alpha remains an advisory for later independent review; no selected source failed retrieval and no item lacks a proof or prerequisite because of this warning. `source_resolution` is empty because the selected source set resolved without a retrieval failure or a dropped source.

## Validation evidence

- `author-check.mts ... 6`: passed; four proof-bearing items passed precheck, eight item/page files passed rendercheck, six items passed item content policy, and four proof contracts passed.
- `proof-layout.mjs` on the six changed items: 6 items, 10 steps, 0 defects.
- `proof-contract.mjs ... --strict`: 4/4 proof-bearing items, 0 errors, 0 warnings. The contracts record the actual phase.step numbering, supplier excerpts, boundaries, and applicable finite checks.
- Post-authoring `content-policy.mjs` on the batch manifest: 6 scoped items, 0 errors, 0 warnings. `manifest-deps.mjs`: 6 items, 0 missing dependency arrays, 0 errors.
- Focused `depcheck.mjs --items-file ... --json`: 0 errors, 0 warnings; both assigned pages and all six assigned items were in scope.
- Source retrieval: `source-fetch-check --stamp` reports 3/3 fetch-verified, 3/3 resolved, and 0 documented drops. Coverage checklist: 0 errors and the low-yield advisory described above.
- The run-wide `proof-contract-coverage.mjs` could not complete: `Empty or invalid frontier page inventory qsmx-topological-lattice`. This is a different, empty frontier inventory outside batch 6; the scoped strict proof-contract check passes. No shared plan or other batch was changed to bypass that run-wide input error.

## Cross-batch records and readiness

`physics-non-fluid-129-2026-10-21-r2-batch-6.cross-batch-dependencies.json` is a JSON array with exactly three checked edges, each `verified`: two page dependencies on `emx-passive-dispersive-materials` and the susceptibility-item dependency for `ex-emx-reciprocity-not-time-reversal`. Each evidence string describes only the inspected interface.

All six items are placed on their assigned A/B pages. Readiness records are written only after final validation and capture each item's direct dependency IDs. The `ready` records close authoring prerequisites; they do not constitute independent acceptance of the proofs.

After recording, `loadStep1Record` plus `step1Decision` verified all six records as `closed/current ready` against their current item and dependency hashes.
