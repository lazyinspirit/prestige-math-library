# Batch 51 — Instanton Counting and Ω-Background

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: `51`  
Owned A/B pair: `qftx-instanton-localization-physics` / `qftx-instanton-localization-physics-examples`  
Plan order: `1007`; batch dependency level: `8`, requiring batches `12` and `50`.

## Plan and interface decisions

No design/plan-spec conflict was found. The design section in `research/plan-advanced-qft-and-supersymmetry-track.md` (lines 709–721) and `research/plan-spec.json` agree on the A/B IDs, title, category, library, order, and planned page requirements `qftx-s4-partition-functions` and `qftx-adhm-moduli`. The A-page manifest items are ordered by their computed levels: the N=2* series definition (5), the explicit rank-one supplier (6), and the fixed-point physics theorem (8). The B page holds the rank-one and U(2) examples (levels 7 and 9). Page files remain frontmatter only.

The item graph creates an additional page-level prerequisite on `qftx-noncompact-equivariant-borel-moore-localization`; the cross-batch JSON records that derived edge as verified after inspecting the current batch-61 items and ready records. The planned top-level `requires` metadata remains unchanged. The current S4 item overrides stale generic model descriptions: it is the source-qualified N=2* U(2) model with one adjoint hypermultiplet, real Euclidean mass `m_E`, `q=e^{2πiτ}`, equal pole rotations `ε1=ε2=r⁻¹`, and an assumed but unconstructed noncommutative S4 regulator.

A domain mismatch in upstream inputs was handled locally. `def-framed-u-n-instanton-moduli-and-adhm-data` restricts to `N≥2` (Statement line 35), while `thm-adhm-fixed-point-instanton-count` starts with `N≥1` (Statement line 48). The main series definition and physics theorem therefore use `N≥2`; the existing U(1) example is supported by the new self-contained `lem-qftx-u1-one-instanton-adhm-space`, which proves only the explicit `k=N=1` scalar quotient. I did not edit either upstream item. The owner should align the upstream theorem range with its ADHM definition or supply a general rank-one interface if the broader theorem range is intended.

## Authored items and claims

| Item | Claim and conventions | Direct dependencies | Level / Step 1 |
|---|---|---|---|
| `def-qftx-instanton-equivariant-partition-series` | For positive-FI framed ADHM data with `N≥2`, define the coefficientwise formal N=2* series by the localized Borel–Moore pushforward of the inverse-flavor-line top Chern insertion. A tangent weight `w` contributes `w−m̃`; the complex orientation gives degree `4kN`, matching the normalized fundamental-class degree. Use `m=i m_E`, `m̃=m+(ε1+ε2)/2`; at S4, `m̃=i m_E+r⁻¹`. | `def-framed-u-n-instanton-moduli-and-adhm-data`; `def-qftx-localized-equivariant-borel-moore-data`; `def-qftx-proper-fixed-locus-localized-pushforward`; `post-qftx-s4-n2-localization-model` | 5 / `escalated` |
| `lem-qftx-u1-one-instanton-adhm-space` | For scalar data `ij=0`, `i≠0`, quotienting by `GL1` gives `C²`; the torus rotates its coordinates with weights `ε1,ε2`, and the unique fixed point yields `I₁,₁ᵃᵈʲ=(ε1−m̃)(ε2−m̃)/(ε1ε2)`. Charge zero contributes `1`. This is a finite mathematical example, not the adopted U(2) model. | `def-qftx-localized-equivariant-borel-moore-data`; `def-qftx-proper-fixed-locus-localized-pushforward`; `thm-qftx-proper-fixed-locus-noncompact-localization` | 6 / `ready` |
| `pthm-qftx-omega-background-fixed-point-expansion` | Conditional for the positive-FI quotient, `N≥2`: `Iₖ,ₙᵃᵈʲ=Σ_|Y⃗|=k ∏w(w−m̃)/∏w`, with the sum over finite N-tuples of partitions. The S4 specialization is N=2 and `m̃=i m_E+r⁻¹`. The source’s noncommutative regulator, local factor interpretation, and mass insertion are explicit assumptions; no full path integral or S4 matrix integral is proved. | `def-qftx-instanton-equivariant-partition-series`; `thm-adhm-fixed-point-instanton-count`; `def-qftx-proper-fixed-locus-localized-pushforward`; `thm-qftx-proper-fixed-locus-noncompact-localization`; `post-qftx-s4-n2-localization-model` | 8 / `escalated` |
| `ex-qftx-omega-u1-one-instanton-factor` | The rank-one formal charge-one contribution is `q(ε1−m̃)(ε2−m̃)/(ε1ε2)` for generic rotation weights. It does not instantiate the U(2) S4 postulate. | `lem-qftx-u1-one-instanton-adhm-space` | 7 / `ready` |
| `ex-qftx-omega-u2-one-instanton-factor` | With `s=ε1+ε2`, `d=a2−a1`, `m̃=i m_E+s/2`, the two one-box terms use `E1=ε1ε2d(s−d)`, `N1=(ε1−m̃)(ε2−m̃)(d−m̃)(s−d−m̃)`, `E2=−ε1ε2d(s+d)`, and `N2=(ε1−m̃)(ε2−m̃)(−d−m̃)(s+d−m̃)`. Their generic sum is `2(ε1−m̃)(ε2−m̃)(m̃²−m̃s+s²−d²)/(ε1ε2(s²−d²))`. At `m_E=0` and S4 equal rotations, the degree-one term vanishes. | `def-qftx-instanton-equivariant-partition-series`; `pthm-qftx-omega-background-fixed-point-expansion`; `post-qftx-s4-n2-localization-model` | 9 / `escalated` |

The two U(2) fixed-point terms were combined directly: with `C=m̃²−m̃s−d²`, the shifted cross-color products are `C+sd` and `C−sd`; putting the fractions over `s²−d²` gives numerator `2d(C+s²)`, and cancellation of `d` occurs in the generic rational function field. Resonant specializations with a vanishing fixed-point Euler factor are not assigned by this calculation.

## Current supplier checks and readiness blockers

The current batch-61 manifest is populated. I read the actual statements and proofs for `def-qftx-localized-equivariant-borel-moore-data`, `def-qftx-proper-fixed-locus-localized-pushforward`, and `thm-qftx-proper-fixed-locus-noncompact-localization`, and checked `loadStep1Record` plus `step1Decision`: all three have current `ready` records. The normalized class, proper fixed-locus trace, finite-affine-cover hypotheses, and Euler-denominator formula match the conditional uses here. Their cross-batch item edges and the induced Borel–Moore page edge are `verified`; this records only the scoped interface check.

`def-framed-u-n-instanton-moduli-and-adhm-data` has a stored `ready` row, but `step1Decision` reports “Item or dependency changed; record current readiness”; the row hash is stale. `thm-adhm-fixed-point-instanton-count` has a current `escalated` decision for its upstream readiness chain and separate correspondence/noncompact-pushforward clauses. The consumer proof uses only its inspected positive-FI fixed-point and tangent-character portion, keeps that use conditional, and does not claim the ASD or Gieseker correspondence. The S4 postulate is now present in the populated batch-50 manifest and its actual interface matches, but its own current Step 1 readiness record is missing; its supplied rigid-background definition has a current ready record.

The native Step 1 records for the five batch-51 items are in `research/advanced-qft-supersymmetry-build-2026-10-23-step1-<item-id>.json`. The rank-one lemma and U(1) example are `ready`. The series definition, main physics theorem, and U(2) example are `escalated` because the exact prerequisites above are stale, escalated, or missing a current readiness record. These are authoring-readiness records, not independent proof approvals. No owner escalation was overwritten.

## Sources and harvest

The full-text harvest and per-result dispositions are in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-51.coverage.json`. Five full texts are stamped and inspected:

- Nikita Nekrasov, [Seiberg–Witten Prepotential from Instanton Counting](https://arxiv.org/pdf/hep-th/0206161), §1 equation (1.3), §§3.1–3.6, PDF pp. 12–19. Supports the formal pushforward series, positive-FI regulator, fixed-point and tangent-weight source calculations; contour residues and an unregulated path integral are not used.
- Hiraku Nakajima and Kota Yoshioka, [Lectures on Instanton Counting](https://arxiv.org/pdf/math/0311058), §3.1, PDF pp. 17–19, Theorem 3.2, and Abstract/§4. This is the independent full lecture-note treatment for the partition fixed points, tangent character, and series convention; the cited sheaf/ASD correspondence is not claimed.
- Nikita Nekrasov and Andrei Okounkov, [Seiberg–Witten Theory and Random Partitions](https://arxiv.org/pdf/hep-th/0306238), §§2.2, 2.4, 3.1, and 6.1. Supports the Ω rotations, flat noncommutative deformation context, colored partitions, and adjoint-hypermultiplet series, with its source-specific qualifications.
- Vasily Pestun, [Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops](https://arxiv.org/pdf/0712.2824), §1 equations (1.3)–(1.4) and the regulator caveat, §4.3 equations (4.47)–(4.50), and §5 equations (5.11)–(5.12). Supports the Euclidean mass continuation, `m̃=m+(ε1+ε2)/2`, shifted tangent numerator, U(2) one-instanton cross-check, and unconstructed S4 regulator qualification.
- Dan Edidin and William Graham, [Localization in Equivariant Intersection Theory and the Bott Residue Formula](https://arxiv.org/pdf/alg-geom/9508001), §4, Theorem 2 and full proof, printed pp. 7–8. Read as an Euler-denominator comparison only; it is equivariant Chow theory and is not substituted for the local normalized Borel–Moore proof.

The coverage ledger records 21 named harvest results: 9 `included`, 8 `inline`, and 4 `out-of-scope`, each with its source review and item or reason. `source-fetch-check --stamp` completed with 5/5 full-text sources and no retrieval failures or drops; no source-resolution recovery record was needed. `coverage-checklist` now reports 0 errors and 0 warnings.

## Batch evidence and checks

`research/advanced-qft-supersymmetry-build-2026-10-23-batch-51.pages.json` inventories the five items and matches the two frontmatter-only page files. `research/advanced-qft-supersymmetry-build-2026-10-23-batch-51.proof-contracts.json` contains all five finished contracts with exact supplier excerpts, every phase-step mapping, and boundary worksheets. `research/advanced-qft-supersymmetry-build-2026-10-23-batch-51.cross-batch-dependencies.json` is a JSON array with one row per cross-batch item/page edge (16 rows: 9 verified, 7 open); Borel–Moore checks are verified, and unresolved ADHM/S4 checks remain open.

Scoped results after final item edits:

- `precheck.mts`: 5 items pass, 0 failing.
- `proof-layout.mjs`: 5 items, 18 steps, 0 defects.
- `proof-contract.mjs --strict`: 5/5 checked, 0 errors, 0 warnings.
- `content-policy.mjs`: 5 items, 0 errors, 0 warnings.
- `rendercheck.mjs`: all 5 items and 2 pages pass YAML, formula, and diagram checks.
- `depcheck.mjs --items-file`: selected item/page dependency and cycle checks pass; 4,399 item and 460 page prerequisite context.
- `fwdcheck.mjs --items-file`: selected dependency/forward-reference checks pass; 4,121 item and 467 page context.
- `source-fetch-check.mjs`: 5/5 full texts verified; 0 documented drops.
- `coverage-checklist.mjs`: 1 page, 21 results, 0 errors, 0 warnings.
- `item-dependency-levels.mjs check --run`: fails on 17 unrelated run entries. Six empty inventories are `qftx-s3-partition-functions`, `qftx-s3-partition-functions-examples`, `qftx-spectral-networks`, `qftx-spectral-networks-examples`, `qftx-adhm-zero-fi-asd-correspondence`, and `qftx-adhm-zero-fi-asd-correspondence-examples`. Eleven level mismatches are `lem-aqft-local-counterterm-shift-is-relative-coboundary`, `def-aqft-thooft-anomaly`, `def-aqft-anomaly-matching-data`, `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation`, `ex-aqft-single-chiral-fundamental-polynomial`, `ex-aqft-mixed-background-counterterm-shift`, `ex-aqft-vectorlike-conjugate-chiral-pair`, `pthm-aqft-symmetry-preserving-rg-anomaly-match`, `op-aqft-fusion-two-category-anomaly-classification`, `ex-aqft-local-anomaly-counterterm-transport`, and `ex-aqft-explicit-breaking-endpoint`. No batch-51 item has a dependency-level error.
- `statement-first-check.mjs --run ... --domain physics`: blocked run-wide by the empty item inventory at `batch-49:qftx-s3-partition-functions` (its examples companion is also empty); no other pair was changed.

## Next action

Owner-side readiness repair is required for the stale ADHM definition and escalated ADHM theorem chain, and the batch-50 owner must record the current S4 postulate readiness. Once those current records exist, recheck the exact supplier interfaces and update the batch-51 escalated records through the normal Step 1 workflow. The S3 inventory and unrelated level mismatches block the two run-wide mechanical checks and belong to their owners.
