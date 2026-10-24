# Batch 31 authoring notes — N=2 and N=4 Gauge Actions

## Owner classification repair — 2026-10-23

The two gauge-invariant polynomial lemmas retain their canonical IDs and full
invariant claims, but now have domain mathematics, mathematical superspace
suppliers only, and explicit even-chiral coefficient-ring and matrix-action
hypotheses. Their trace cyclicity and finite conjugation calculations are
proved directly, without physical postulates. The N2/N4 postulate and all four
example consumers still supply those exact matrix actions, so their physical
model premises remain in the physical carriers. No extended invariance or
quantum measure is inferred from either algebraic lemma. All earlier native
readiness rows are archived; root must recertify them after source/manifest
synchronization. Historical authoring observations below are retained.


## Scope, design, and plan comparison

Assigned pair: `qftx-susy-extended-actions` and `qftx-susy-extended-actions-examples`, order 987 in `advanced-qft-and-supersymmetry`. The A/B page IDs, titles, category, library, order, and page requirements match the complete design section at `research/plan-advanced-qft-and-supersymmetry-track.md` §“N=2 and N=4 Gauge Actions” and the current rows in `research/plan-spec.json`.

The proposed inventory's `proposed_deps: []` entries conflict with the assigned contracts and the inspected mathematical interfaces. The authored carriers therefore declare the actual direct suppliers and roles. Two local A-page lemmas were added because the N=1 gauge-matter action requires gauge-invariant superpotential terms: one proves the dual-pairing and hypermultiplet adjoint bilinears invariant for a general finite-dimensional representation; the other proves invariance of the N=4 adjoint cubic. They precede the consuming postulates in the A-page inventory. The A page has four items and the B page has four examples; both page bodies are empty YAML-only carriers with no summaries.

The recorded batch schedule assigns batch 31 level 4 with prerequisites batches 1, 19, and 30. The item levels recomputed from the current in-run item graph are: hypermultiplet invariance lemma 5; adjoint cubic invariance lemma 5; N=2 postulate 6; N=4 postulate 7; the two N=2 examples 7; and the two N=4 examples 8. The focused item-level computation has no errors for these eight items.

## Current prerequisite interfaces

The fresh `loadStep1Record`/`step1Decision` snapshot showed current `ready` records for the direct mathematical definitions, the pure SU(2) Yang–Mills postulate, `def-qftx-n1-vector-superfield`, `post-qftx-n1-wess-zumino-model`, and `post-qftx-n1-gauge-matter-model`. The N=1 gauge-matter postulate is a model premise with no proof obligation; its `verification.precheck: pending` does not make it a missing prerequisite. Its current carrier and its full stated action interface were inspected.

The N=1 vector definition uses the same represented chiral rule, `e^{2gV_R}` transformation, chiral field strength, and connection normalization `A_mu=-i g B_mu` used here, with `g=g_YM`. The N=1 gauge-matter postulate has the same `1/(4g^2)` vector kinetic coefficient and represented matter D-term. Its canonical matter fields and the N=2 connection-normalized vector chiral field match after `Phi_can=Phi/g`; the N=2 hypermultiplet superpotential is the permitted gauge-invariant choice `sqrt(2) tilde(Q) Phi Q + m tilde(Q) Q`, whose bilinear invariance is proved by the local A-page lemma. The N=4 adjoint cubic is separately verified by the local trace-form lemma. The current N=1 A page exists, has its seven current item carriers in its manifest inventory, and retains its requirements on the current supersymmetry and Yang–Mills pages.

The pure Yang–Mills supplier fixes the global group to SU(2), a selected smooth right-principal bundle sector, `eta=(-,+,+,+)`, `kappa(X,Y)=-2 Tr_2(XY)`, dimensionless positive `g_YM`, and the Lorentzian curvature action. Its current ready Step 1 record and full statement match all batch-31 uses. The N=1 vector and gauge-matter carriers depend transitively on this same ready supplier; their current readiness records are also ready. No direct interface remains open. The direct cross-batch edges and scoped checks are recorded as `verified` in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-31.cross-batch-dependencies.json`; verification is not independent proof approval.

The older batch-30 notes state that the N=1 vector and pure Yang–Mills readiness rows were missing. Those entries are stale: the current live snapshot now reports the vector definition, gauge-matter postulate, Wess–Zumino postulate, and Yang–Mills postulate ready with current hashes. The batch-31 checks use the current carriers and records, not those historical notes.

## Conventions and mathematical scope

Both postulates specify the selected SU(2) global form and bundle sector, oriented/time-oriented flat Minkowski space with mostly-plus metric, `c=hbar=1`, the anti-Hermitian basis `T_a=-i sigma_a/2`, and `kappa=-2 Tr_2`. The N=2 postulate defines the N=1 supercovariant derivatives, gauge field strength, vector/hyper field content, dual representation, Hermitian form on the complexified adjoint, quadratic ultraviolet prepotential, local N=1 action, field dimensions, compact-support conventions, and the low-energy electric/magnetic patch limitation. Its eight-supercharge invariance is an adopted physical model premise. The N=4 postulate fixes the one-vector/three-adjoint-chiral action, canonical/connection rescaling, equal gauge/Yukawa normalization, on-shell field content, scalar potential, dimensions, and classical scope. Its sixteen-supercharge invariance and on-shell closure are adopted premises, not claimed proofs.

The generic hypermultiplet gauge-invariance lemma proves the two bilinear cancellations for an arbitrary finite-dimensional representation and its dual. The adjoint cubic lemma derives infinitesimal invariance from the matrix commutator, cyclic trace, and the selected trace form, then proves finite exponential invariance. The N=2 examples verify the fundamental specialization and the constant positive Hessian of the stated quadratic UV prepotential. The N=4 examples prove the massless-adjoint-hyper action and component-count comparison and calculate the explicit noncommuting Pauli-field potential. Experiments, quantum measures, regulators, continuum constructions, low-energy solutions, and empirical conclusions are not claimed.

## Sources and conventions

- Eric D’Hoker and D.H. Phong, *Lectures on Supersymmetric Yang-Mills Theory and Integrable Systems*, full arXiv text: <https://arxiv.org/pdf/hep-th/9912271v1>. Inspected §§2.4 (multiplet contents and subalgebra decomposition), 2.9 (renormalizable N=2/N=4 actions and hypermultiplet coupling), 2.10 (prepotential action), and §§3.5–3.7 (low-energy prepotential and electric/magnetic patching). Coverage records each supported item and its limits.
- Stephen P. Martin, *A Supersymmetry Primer*, version 7, full arXiv text: <https://arxiv.org/pdf/hep-ph/9709356v7>. Inspected §3.4 (canonical gauge/Yukawa interaction), §4.5 (vector superfield), and §4.9 (non-Abelian supergauge transformations, field strength, and action). Coverage records the exact item mapping and local-proof limitations.

D’Hoker–Phong equation (2.60) displays the hypermultiplet superpotential without a displayed `sqrt(2)` and uses `tau=theta/(2 pi)+4 pi i/g^2`. The authored carriers state their own trace, Berezin, and connection/canonical normalizations; the local hyper coupling becomes `sqrt(2) g` in canonical normalization, matching Martin's gauge/Yukawa convention. No equality of D’Hoker–Phong's displayed coefficients with the local coefficients is claimed without a separate field/coupling conversion. This is a recorded source-convention difference, not a missing action input.

The coverage file records both full treatments against the A page and the four B examples, with source section names, item support, limitations, and included dispositions. `source-fetch-check --stamp` passed for 4/4 A/B page-source entries (two distinct full-text URLs reused on both pages), with zero drops and zero newly stamped records. No retrieval failed, so no `source_resolution` failure or drop record applies.

## Item ledger

- `lem-qftx-n2-hypermultiplet-gauge-invariant-couplings` (level 5): pointwise invariance of the dual mass pairing and adjoint-coupled bilinear under the represented chiral supergauge law. Dependency: `def-qftx-n1-vector-superfield` (formulation prerequisite). Proof uses the dual inverse action and conjugation; current vector-definition readiness is ready.
- `lem-qftx-n4-adjoint-cubic-gauge-invariance` (level 5): trace proof of infinitesimal and finite gauge invariance for `kappa_C(Phi_1,[Phi_2,Phi_3])`. Dependencies: `def-qftx-n1-vector-superfield` and `post-qftx-nonabelian-yang-mills-model`. Both current readiness records are ready.
- `post-qftx-n2-vector-hypermultiplet-model` (level 6): adopted classical N=2 SU(2) vector/hyper action with the stated quadratic UV prepotential and canonical hyper fields. Direct dependencies: four superspace/super-Poincare definitions, the local hyper-invariance lemma, the current N=1 gauge-matter action, and pure SU(2) Yang–Mills. All actual carriers and readiness records are current and match the use.
- `post-qftx-n4-super-yang-mills-model` (level 7): adopted classical N=4 SU(2) action with one vector and three connection-normalized adjoint chirals. Direct dependencies: four superspace/super-Poincare definitions, the local adjoint-cubic lemma, current N=1 gauge-matter and N=2 action postulates, and pure SU(2) Yang–Mills. All actual carriers and readiness records are current and match the use.
- `ex-qftx-n2-hypermultiplet-gauge-invariants` (level 7): direct cancellation of the fundamental mass and cubic bilinear transformations.
- `ex-qftx-n2-quadratic-prepotential` (level 7): direct expansion/differentiation of the quadratic prepotential and positivity check, including `Phi=0`.
- `ex-qftx-n4-adjoint-hyper-decomposition` (level 8): canonical-to-connection rescaling, cyclic-trace cubic match, and on-shell field count, conditional on the two adopted model postulates.
- `ex-qftx-n4-su2-noncommuting-scalar-potential` (level 8): Pauli multiplication, normalized commutator, and positive/zero coefficient cases for the adopted canonical scalar potential.

All eight carriers are assigned `ready` only after current Step 1 records are written below. Examples and lemmas pass normative precheck; postulates have `precheck: n/a` because their symmetry claims are adopted. No supplier is treated as proved merely because its carrier is draft.

## Validation and owner follow-up

- `proof-layout.mjs` on the eight explicit items: 8 items, 17 steps, 0 defects.
- `precheck.mts` on the eight items: 8 checked, 0 failing; two postulates pass nonproof structure and the six proof-bearing lemmas/examples pass direct proof format.
- `proof-contract.mjs --strict`: 8/8 contracts, 0 errors, 0 warnings.
- `rendercheck.mjs`: 10 item/page files, 0 errors.
- `depcheck.mjs --items-file /tmp/advanced-qft-batch-31-items.json --json`: 8 focused items and their 1,364-item closure, 0 errors/warnings.
- `content-policy.mjs` on the batch-31 manifest: 8 scoped items, 0 errors/warnings.
- `coverage-checklist.mjs`: 2 pages, 16 harvested results, 0 errors/warnings. `source-fetch-check --stamp`: 4/4 page-source entries verified, 0 drops.
- Scoped in-run item-level recomputation reports stored/computed levels `5/5, 5/5, 6/6, 7/7, 7/7, 7/7, 8/8, 8/8` for the eight items in manifest order. The full-run `item-dependency-levels check` has no batch-31 level errors, but exits on 30 empty inventories in later scaffold pairs: `qftx-susy-breaking-and-phenomenology`, `qftx-susy-scft-and-frontier`, `qftx-thooft-anomalies`, `qftx-global-anomalies-inflow`, `qftx-anomaly-matching-and-frontier`, `aqft-eft-anomalies`, `aqft-susy-effective-theories`, `aqft-eft-experimental-inference`, `qftx-qexact-field-theory-localization`, `qftx-s3-partition-functions`, `qftx-s4-partition-functions`, `qftx-instanton-localization-physics`, `qftx-bps-indices`, `qftx-physical-hall-bps-wall-crossing`, and `qftx-spectral-networks` (each with an examples companion).
- `batch-dependency-levels.mjs check` reports the shared run snapshot stale. The recorded digest is `803782a96354b84620a14b96a81d68b2307d2e0992b48299a49a4d41b161467b`; final recomputation gives `f0270438a376b9cf3cc4d3092451ffe02060179aa168795f3115c271db424015`. The graph rows are unchanged, including batch 31 level 4 with `requires: [1, 19, 30]`. This is shared scheduling metadata; it remains owner-owned and was not rewritten. Owner follow-up: refresh the run-level digest from the current manifests.

## Final Step 1 records

`node tools/physics-support/step1-decisions.mjs record` wrote all eight records with `decision: ready` and `owner: false`, in dependency order. A fresh `loadStep1Record`/`step1Decision` pass reports all eight `ready/closed`, with the exact direct dependency lists shown in the item ledger.

| Item | Current decision | Recorded at | SHA-256 prefix |
|---|---|---|---|
| `lem-qftx-n2-hypermultiplet-gauge-invariant-couplings` | ready/closed | 2026-10-23T10:09:25.159Z | `e96e69a7f8d8580d` |
| `lem-qftx-n4-adjoint-cubic-gauge-invariance` | ready/closed | 2026-10-23T10:09:25.196Z | `0779d32434810f09` |
| `post-qftx-n2-vector-hypermultiplet-model` | ready/closed | 2026-10-23T10:09:42.077Z | `5a0fbcf3023b9307` |
| `post-qftx-n4-super-yang-mills-model` | ready/closed | 2026-10-23T10:09:55.276Z | `c4f49448f2192e5a` |
| `ex-qftx-n2-hypermultiplet-gauge-invariants` | ready/closed | 2026-10-23T10:10:12.291Z | `55ea483652ecf492` |
| `ex-qftx-n2-quadratic-prepotential` | ready/closed | 2026-10-23T10:10:12.213Z | `8eab3ea3942654f8` |
| `ex-qftx-n4-adjoint-hyper-decomposition` | ready/closed | 2026-10-23T10:10:12.478Z | `67e88269e37af5a2` |
| `ex-qftx-n4-su2-noncommuting-scalar-potential` | ready/closed | 2026-10-23T10:10:12.288Z | `9592bf7fe692116f` |

The cross-batch array has 19 direct page/item rows: all 19 are `verified`, none are open or removed. The assigned inventory, statements, proofs/contracts, coverage, page inventories, and readiness records are current. No assigned prerequisite remains unresolved. The only follow-up is the owner-level refresh of the shared batch scheduling digest noted above.
