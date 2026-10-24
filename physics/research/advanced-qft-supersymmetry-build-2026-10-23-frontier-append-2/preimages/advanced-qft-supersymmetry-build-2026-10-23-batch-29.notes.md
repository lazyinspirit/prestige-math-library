# Batch 29 authoring notes — Physical BPS Sectors and Multiplet Interpretation

Run: advanced-qft-supersymmetry-build-2026-10-23  
Pair: qftx-susy-algebra-and-multiplets / qftx-susy-algebra-and-multiplets-examples

## Plan and scope reconciliation

The assigned design section in research/plan-advanced-qft-and-supersymmetry-track.md and the two plan-spec.json rows agree on the A/B IDs, title, category, library physics, order 985, and the A-page requirements aqft-susy-math-foundations and qftx-nonabelian-yang-mills-model. The design scope is retained: fixed four-dimensional metric, epsilon, central-charge and adjoint conventions; mass degeneracy and central-charge positivity are used only in unitary representations.

The plan's empty items arrays are preauthoring placeholders under the owner direction. The integrated inventory assigns def-qftx-bps-state-and-saturation; this batch also adds the required local N=2 saturation/kernel equivalence proof and two B-page examples. No shared plan row, supplier page, or other pair's item was changed. There is no design/plan conflict to record.

The run page-dependency record gives batch 29 level 2 with supplier batches 1 and 19. Item levels follow the actual item graph: the batch-1 central-charge theorem is level 2, the new N=2 equivalence theorem is level 3, the BPS definition is level 4, and each B-page example is level 5. These item levels are distinct from the batch/page scheduling level.

## Authored items

### pthm-qftx-n2-bps-saturation-kernel-equivalence

Claim: in the fixed massive N=2 rest fiber with eta=(-+++), epsilon_12=1, natural units, actual Hilbert adjoints, and the common invariant product domain, the nonzero quadratic form of AA-sharp + A-sharp-A is both ||A psi||^2 + ||A-sharp psi||^2 and 4(M-|z|)||psi||^2. Therefore saturation is equivalent to annihilation by both displayed combinations. The proof expands all cross terms and states the domain/adjoint identities; A-sharp is not promoted to the maximal-domain adjoint of an unbounded sum.

Dependencies: thm-qftx-n-extended-central-charge-bounds, def-qftx-unitary-super-poincare-representation, and def-countable-choice. The theorem supplies the exact N=2 normalization and saturation implication; the representation definition supplies positivity, actual adjoints and the common product domain; AC_omega is carried explicitly.

### def-qftx-bps-state-and-saturation

Claim: for a specified massive rest fiber of a selected unitary N-extended representation, a BPS-saturated state is a nonzero common-domain vector for which M=||Z||op. In N=2 this is M=|z| and, by the local equivalence theorem, is equivalent to annihilation by the stated supercharge pair. The definition explicitly separates algebraic saturation from state existence, stability, and physical realization.

Dependencies: thm-qftx-n-extended-central-charge-bounds, pthm-qftx-n2-bps-saturation-kernel-equivalence, def-qftx-unitary-super-poincare-representation, and def-countable-choice. No dependency on the classical Yang-Mills postulate is added: the assigned definition is representation-theoretic and the classical Yang-Mills model alone does not define a supersymmetric Hilbert representation.

### ex-qftx-n2-short-rest-fiber-algebra

Claim: an explicit four-dimensional graded rest-fiber module uses two CAR modes with z=M>0; all mixed and same-chirality brackets are checked with the fixed epsilon sign, ||Z||=M, and the null combination vanishes. The source description is conditional on a possible full-representation extension and does not assert a particle or QFT exists.

Dependencies: def-qftx-bps-state-and-saturation, def-qftx-super-poincare-algebra-4d, and inherited def-countable-choice.

### ex-qftx-n2-long-rest-fiber-algebra

Claim: an explicit sixteen-dimensional graded rest-fiber module uses four CAR modes with Z=0 and M>0; all mixed brackets equal the rest mass term, same-chirality brackets vanish, and the central-charge bound is strict. It does not assert a full Poincare extension or physical spectrum.

Dependencies: def-qftx-bps-state-and-saturation, def-qftx-super-poincare-algebra-4d, and inherited def-countable-choice.

## Sources and retrieval evidence

Active independent full-text treatments (both inspected by section and stamped):

- Adel Bilal, Introduction to Supersymmetry, <https://arxiv.org/pdf/hep-th/0101055>, §3.4, printed pp. 13–15 (PDF pp. 18–20), equations (3.12)–(3.16). The complete massive central-charge oscillator argument and saturation discussion were read. Bilal's central-charge normalization differs; only the positivity/shortening structure is used as source context. The local proof fixes the exact coefficients and unbounded domains.
- David Tong, Supersymmetric Field Theory, <https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy2.pdf>, §2.4.2, printed pp. 40–41 (PDF pp. 31–32). The full N=2 oscillator-combination, positivity, and saturation argument was read. Its metric/spinor presentation is not silently substituted for the local (-+++) convention.

source-fetch-check --stamp passed 2/2 active full-text PDFs. Both treatments support the BPS representation-theory interface; neither supplies state existence, stability, a Yang-Mills soliton, or a full continuum QFT.

The Jose M. Figueroa-O'Farrill BUSSTEPP notes were read in the browser at Problem 3, PDF pp. 28–30, but the local fetch checker returned ECONNREFUSED on the initial attempt plus five retries. Exact-title and replacement searches were recorded in batch-29-source-coverage.json. That source was removed from active citations and retained in historical_sources with its full attempts/searches and alternative proofs. No mathematical coverage was dropped. Witten–Olive was not read in full and is not cited as a proof source.

## Current suppliers and readiness

Fresh current `loadStep1Record` / `step1Decision` checks now show the three exact batch-1 mathematical item suppliers used by the local proof and definition are ready: `def-qftx-super-poincare-algebra-4d`, `def-qftx-unitary-super-poincare-representation`, and `thm-qftx-n-extended-central-charge-bounds`. Their actual statements, relevant complete proofs, hypotheses, domains, units, and conventions were inspected and match the consuming use. The unrelated `def-countable-choice` input is an imported mathematical original and remains read-only; its definition was inspected and it is carried explicitly as `AC_omega`.

The A page declares the entire `aqft-susy-math-foundations` page as a prerequisite. Four other items on that current page have no Step 1 readiness records: `lem-qftx-n1-chiral-superspace-identities`, `lem-qftx-supercharge-positive-energy-pairing`, `def-qftx-graded-trace-class-index-data`, and `thm-qftx-witten-index-beta-independence`. The scoped item edges to the three actual BPS math suppliers are verified, but the broader declared page edge remains open until its page-level readiness is current.

The required `qftx-nonabelian-yang-mills-model` page supplier has current carriers. Its actual postulate and all three other items (the SU(2) invariant-form lemma, classical gauge-invariance theorem, and Euler–Lagrange theorem) were inspected with their complete relevant proofs. It selects pure SU(2) on oriented, time-oriented flat Minkowski space with eta=(-+++), one bundle sector, no matter, kappa=-2 Tr_2, positive dimensionless g_YM, natural units, and the stated classical action; it does not assert a quantum continuum model. The interface matches the plan. Fresh current readiness checks report missing records for all four items on this page, so the declared page edge remains open. No Yang–Mills premise is inserted into the BPS proof or the algebra-only examples.

The four assigned items have current Step 1 records marked `escalated`, with examined direct dependencies recorded and no `--owner` override. The local N=2 proof and definition have complete conditional arguments; the examples have bounded finite algebra checks. Readiness is escalated because the declared A-page prerequisite pages are not fully Step 1 current, and the B examples depend on the escalated BPS definition. These records do not indicate independent proof rejection or acceptance.

## Finite checks and validation state

A one-off Node matrix check at M=1 verified every mixed and central bracket for the explicit 4x4 short module, its null combination, and every mixed/same-chirality bracket for the explicit 16x16 long module. The first short-module calculation exposed a wrong positive sign in the proposed Q^2_1 assignment; the fixed epsilon/Z convention requires Q^2_1=-sqrt(2M)c_2^dagger. The statement and proof were corrected, and the complete matrix check then passed. It is recorded in the proof contracts as a bounded finite algebra check, not as a general proof, full Poincare representation, or registered finite-smoke gate.

Final scoped validation after the last content and sign edits:

- `proof-layout.mjs` on all four assigned items: 4 items, 12 steps, 0 defects.
- `tsx-run.mjs ... precheck.mts` on the four assigned carriers: all 3 proof-bearing items passed, 0 failing.
- `proof-contract.mjs ... --strict`: 4/4 items, 0 errors, 0 warnings.
- `content-policy.mjs` on the batch-29 manifest (`--manifest-only --authored`): 4 scoped items, 0 errors, 0 warnings.
- Carrier/manifest consistency scan: all 4 manifest statements exactly match the complete carrier statement sections, contain no links, and both authored A/B page bodies are empty.
- `rendercheck.mjs` on the four items and two A/B pages: all 6 parse and render checks passed.
- Focused `depcheck.mjs --items-file /tmp/physics-advanced-qft-batch-29-item-selection.json`: passed for all four items; prerequisite-cycle check covered 549 items and 190 pages.
- `source-fetch-check.mjs --coverage ...batch-29-source-coverage.json --stamp`: 2/2 active full-text sources fetch-verified, 0 newly stamped; 2/2 sources resolved. The historical BUSSTEPP drop has 6 recorded attempts, 4 searches, 4 alternative argument records, and no `sourceResolutionErrors`.
- Scoped item-level recomputation over batches 1, 2, 19, and 29: 34 items across 8 pages, no errors; levels are 0 (super-Poincare algebra), 1 (unitary representation), 2 (central-charge bound), 3 (local kernel equivalence), 4 (BPS definition), and 5 (each example). The batch-29 page scheduling level recomputes to 2 (supplier batches 1 and 19 have levels 0 and 1).
- Cross-batch dependency JSON shape check: valid JSON array, 8 exact rows, all consumers in this batch, nonempty evidence. The six scoped item edges to current batch-1 suppliers are `verified`; both page-level prerequisite edges remain `open` for the readiness gaps documented above.
- Current readiness records were rechecked immediately before recording all four assigned items as `escalated`; each record contains its exact direct dependency IDs and evidence.

Wider-run blockers left with their owner-owned files untouched: `batch-dependency-levels.mjs check --run advanced-qft-supersymmetry-build-2026-10-23` reports the shared run-level JSON stale after manifest changes. The current in-memory batch graph still yields batch 29 level 2; the shared run-level file was not edited. Whole-run item-level checking also reports unrelated empty scaffold inventories and these 12 unrelated declared/computed mismatches: `def-abbv-equivariant-integration-conventions` 1/3; `lem-abbv-equivariant-thom-gysin-identities` 2/4; `lem-abbv-fixed-component-euler-invertibility` 3/5; `thm-atiyah-bott-berline-vergne-integration-formula` 4/6; `ex-abbv-projective-line-standard-circle-action` 5/7; `ex-abbv-positive-dimensional-fixed-components` 5/7; `def-aqft-scheme-and-wilson-coefficients` 2/0; `thm-aqft-truncated-coupled-rge-wellposedness` 3/1; `ex-aqft-coupled-rge-linear-mixing` 4/2; `def-qftx-euclidean-yang-mills-sector` 2/3; `ex-qftx-euclidean-trivial-vacuum-sector` 3/4; `ex-qftx-bpst-instanton-formal-sector-weight` 3/5. Whole-run proof-contract coverage also encounters the unrelated empty frontier page `qftx-equivariant-index`. No outside item, shared plan, dependency-level file, engine state, or verdict was changed.
