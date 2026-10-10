# Step 3a scope report — pair `em-expanded-analysis-prerequisites`

- Run: `physics-em-sr-40-2026-10-08` (role alpha, Step 3a scope review)
- A page: `em-expanded-analysis-prerequisites` (order 310, category
  `classical-electromagnetism-mathematics`, library `mathematics`)
- B page: `em-expanded-analysis-prerequisites-examples` (order 320)
- Batch: 16. Current inventory: **29 A items + 1 B item** (30 items; the run
  holds 471 items across 80 pages).
- Scope decision: **sufficient** (recorded with `step3-decisions.mjs record-scope`;
  this report is the cited evidence path).
- Date of review: 2026-10-09.

## 1. Design, plan and manifest congruence

Compared the current manifest
(`research/physics-em-sr-40-2026-10-08-batch-16.pages.json`) with the prose
design `research/plan-classical-electromagnetism-track.md` §"Em Expanded
Analysis Prerequisites" (header L946; the reservation JSON occupies L954–L1507
and quotes the `mathematical_pages` entry of
`research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`),
the plan (`research/plan-spec.json` orders 310/320), the batch notes
(`research/physics-em-sr-40-2026-10-08-batch-16.notes.md`) and the coverage file
(`research/physics-em-sr-40-2026-10-08-batch-16.coverage.json`).

- Page metadata agrees exactly: ids, kind A/B, orders 310/320, companion links,
  category, `library: mathematics`, titles, and `requires` (41 entries for the
  A page, byte-identical between plan and manifest; the B page's single entry
  is the A page). The design's originally declared 18-entry prerequisite list
  had already been extended by the recorded published-supplier-home repair
  (`…-external-prerequisite-repair.json`, `…-reconciliation2.plan.json`); the
  current plan and manifest are the repaired state.
- Design A inventory: **27 items**. All 25 non-relocated design ids are present
  in the manifest with their design `reference` and `design_state` retained
  (U1, H1, R1, D2, D3, S1, S2, S3, V1, B1–B7, G2, G3, P3, W1, H2, H3, F1, F2,
  F6). Difference 1: the two exterior-scattering items
  `lem-em-exterior-outgoing-scalar-uniqueness` (F3) and
  `lem-em-exterior-vector-helmholtz-mixed-boundary-existence` (F4) are homed
  elsewhere. This is the binding owner relocation to
  `em-boundary-and-spectral-prerequisites` (order 313) recorded in
  `…-owner-authoring-direction.md` §"Exact missing mathematical supplier found
  during preflight" and in the Step-1 drift report
  `…-alpha-step1-drift.md` (verdict `no-drift` for this pair). I verified the
  relocation is applied, not dangling: the current batch-18 manifest contains
  F3, F4 and their UCP/Carleman suppliers
  (`thm-bounded-potential-weak-unique-continuation-in-three-dimensions`,
  `lem-three-dimensional-radial-carleman-integer-weight`), and page 313
  requires this page. No promised claim was dropped.
- Difference 2: four owner-authorized additions, each traced to a current
  owner/reconciliation record, none replacing promised content:
  (i) `lem-em-dirichlet-resolvent-h-two-and-smooth-test-density` — directed by
  the owner direction §"Further verified scaffold corrections" ("Fully author
  … on the existing expanded-analysis A page before its consumers");
  (ii) `lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain` and
  (iii) `lem-em-parameter-dependent-smooth-poisson-boundary-solvers` — the
  `new_items` of `…-reconciliation6.integration.json` ("the two necessary
  lemmas" of the owner direction);
  (iv) `lem-em-pec-cavity-eigenfield-boundary-regularity` — the accepted
  round-one pages of `…-pec-regularity-round1.pages.json` with root acceptance
  `…-pec-regularity-root-acceptance.json`, consistent with the owner direction
  §"Reconciliations8–10". These four additions are pure mathematics on this
  mathematics page (domain check below).
- B page: the design reserves exactly one B item
  (`ex-em-outgoing-dtn-and-pec-zero-mode-boundaries`,
  `mathematical-example-verifications.md#outgoing-dtn`); the manifest contains
  exactly that example, with the design's two dependencies plus the four
  published suppliers its two explicit computations use (curl-of-gradient,
  harmonicity of the fundamental solution, algebra of derivatives, entire
  exponential). It is a B leaf: no A item depends on it, and the B-leaf rule is
  satisfied.
- Stale-record caveat: the batch-16 notes file says "25 A items"; that count
  predates later owner reconciliations. The current manifest and the receipts
  above are authoritative; no scope evidence here depends on the note.

## 2. Coverage of the intended subject

The pair is the mathematical analysis toolkit of the EM track (order 310),
feeding the wave, boundary/spectral, scattering, magnetostatic, multipole,
response and gauge developments. Coverage check at statement level:

- *Coercivity and solvability*: zero-boundary coercivity (B1), symmetric
  coercive variational solver (B2), specified Dirichlet lift (B3), prescribed
  fractional Dirichlet existence (B4), mean-zero coercivity on a $C^1$ domain
  (B5), weak Neumann/transmission existence (B6), smooth-domain elliptic
  regularity (B7), and the owner-directed $L^2$ Dirichlet resolvent with $H^2$
  estimate and smooth zero-boundary $H^2\cap H^1_0$ density for the curl/div
  graph test space.
- *Harmonic/spherical machinery*: convergent Legendre/zonal kernel (H1),
  spherical-harmonic basis and addition theorem (H2), ball Poisson series
  boundary convergence (H3); plus the exterior spherical suppliers F1
  (spherical Hankel functions with exact DtN bounds) and F2 (sphere outgoing
  DtN map; finite local energy means $H^1$ on bounded exterior annuli, with no
  global $H^1$ or $L^2$ condition at infinity, per the owner correction).
- *Wave and cavity representation*: spherical mean wave identity (W1),
  Helmholtz boundary representation (F6, with the justified weaker
  classical-trace branch and the explicit trace-hypothesis warning), outgoing
  source Helmholtz and diffraction error bounds (P3), rectangular PEC energy
  completeness (G2), smooth PEC cavity spectral closure (G3), and the
  owner-directed PEC cavity eigenfield boundary regularity retaining zero and
  topological modes.
- *Retarded and causal analysis*: global retarded root with the all-time
  uniformly subluminal $C^1$ branch and $C^k$ matching (R1), integrable causal
  dispersion (D2, retained in the promised matrix form), finitely subtracted
  analytic dispersion (D3), and the bounded-error model comparison (U1), whose
  statement explicitly disclaims sampling/statistical content.
- *Static-source limits and parameter regularity*: smooth Newtonian upgrade
  (S1), thin-current limit (S2, distributional $\operatorname{div} j=0$,
  mollified convergence away from the curve, no self-energy claim), magnetic
  dipole remainder (S3), a fixed smooth-domain extension preserving smooth
  parameters, and smooth parameter-dependent Dirichlet/compatible-Neumann
  Poisson solvers.
- *Example (B)*: the degree-zero outgoing DtN coefficient $t_0=ik-1/R$ and the
  explicit PEC topology zero mode $\nabla(1/|x|)=-x/|x|^3$, exactly as the
  design's example section states.

All statements that were spot-read (S2/S3, F1/F2/F6, the owner-corrected items)
carry the design's conclusions and qualifications; no claim narrowing was
found at scope level.

Source coverage (`…-batch-16.coverage.json`): 7 independently fetched sources
(Hunter PDE notes; Dyatlov 18.155; NIST DLMF §18.12, §14.30, §10.47; Tong
Kinetic Theory ch. 4; Hanusch $C^k$-Seeley extension, arXiv:2002.05125v2) with
locators and 31 harvested results disposed as 14 `included`, 7 `inline`,
5 `already-published`, 5 reasoned `out-of-scope` (each naming the owning later
page or the missing consumer). `coverage-checklist --require-destination`
reports 1 page, 31 harvested results, 0 errors, 0 warnings;
`source-fetch-check` reports 7/7 sources fetch-verified.

## 3. Prerequisites and unmet-prerequisite assessment

- Direct dependencies: the 30 items declare **178 unique dependency targets**;
  every one resolves — 158 to published on-disk suppliers under `items/`
  (including the pinned read-only mathematical imports) and 20 to current-run
  scaffolds: 15 own-pair items plus 5 cross-batch mathematical suppliers
  (`def-sr-affine-minkowski-model` batch 1; `def-sr-regular-causal-curve-and-worldline`,
  `thm-sr-proper-time-and-observer-decomposition` batch 3;
  `lem-em-coulomb-dipole-remainder`, `lem-em-parameter-integrals` batch 13).
  All five live inside the transitive `requires` closure of order 310 through
  `sr-worldlines-and-clocks` and `em-variational-mathematical-prerequisites`
  (whose own closure carries `em-elementary-mathematical-prerequisites`).
- Transitive closure: 250 items (201 published + 49 run-scaffold), zero
  unresolved members, and **no non-mathematics member anywhere in the
  closure** — the mathematics boundary (`domain: mathematics`, no physical
  dependencies) holds at scaffold level. No closure path reaches
  `thm-hilbert-basis-theorem`, the run's pre-existing pinned-import drift
  finding, which is therefore unrelated to this pair.
- Cross-batch ledger: `…-batch-16.cross-batch-dependencies.json` carries its 9
  rows (2 page context, 6 open item edges, 1 correctly marked `removed` for the
  superseded `lem-em-fundamental-variation-lemma` edge); global ledger
  `…-cross-batch-dependencies.json` lists batch 16 among the reviewed batches
  with 0 orphaned reviews, and its 57 rows touching this pair match the current
  deps.
- Mechanical checks on current inputs (2026-10-09): `manifest-deps` on batch 16
  — 30 items, 0 errors; `validate-plan.mjs research/plan-spec.json --repo .
  --run physics-em-sr-40-2026-10-08` exits 0 ("declared page order is acyclic
  and consistent; no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among the 80 page(s) with item lists";
  its `redundant-prereq` warnings name no item of this pair);
  `item-dependency-levels check --run` — 471 items, no shape or cycle error;
  `step1-decisions check --run` — 471/471 ready, including the four additions;
  no `step1-blockers` entry names this pair.
- Additional resolution scan: 0 unresolved `[[…]]` links across the 30
  statements/strategies, and every wikilink target is listed in that item's
  `deps`; no undeclared citation.

**Finding: no unmet prerequisite.** No item or result consumes a prerequisite
absent from both the published library and the current scaffold, so no owner
action is requested. (The one design-level dependency promise of this subject —
the F3/F4 chain — is relocated by owner decision and is present in batch 18;
it is a consumer of this page, not a missing supplier of it.)

## 4. Intended role and consumer fit

Per the current manifests, this pair is consumed by 23 placements; edges by
consumer page: `em-boundary-and-spectral-prerequisites` (313) 15,
`em-scattering-and-scalar-diffraction` (359) 4,
`em-magnetostatics-in-vacuum` (335) 4,
`em-electrostatic-multipoles` (333) 3,
`em-electrostatic-boundaries-and-conductors` (331) 3, and single or double
edges to the wave-equation, causal-wave-kernel, retarded-point, retarded-field,
waveguide, potential/gauge, action, material-response, induction, vacuum-wave,
experiment-analysis and causal-response pages and their example companions.
Representative exact ledger uses: `pthm-em-biot-savart` ← thin-current limit;
`pthm-em-electric-general-multipoles` ← Legendre kernel, spherical harmonics,
ball Poisson convergence; `thm-em-waveguide-spectral-completeness` ← PEC
cavity items; `lem-em-exterior-*` (313) ← DtN map, fractional Dirichlet,
smooth-domain regularity; `pthm-em-gauge-reachability` ← parameter-dependent
Poisson solvers and zero-boundary coercivity; `thm-em-uncertainty-analysis` ←
bounded-error model comparison; `pthm-em-particle-action-coupling` ←
particle-curve variation. 24 of the 29 A items have consumers outside the pair;
every A item has at least one consumer, and the B example is a leaf by design.
The pair sits before all listed consumers in the plan's acyclic order.

## 5. Residual uncertainty (honest)

- This is a scope review, not a proof audit; it used the design reservation,
  research-reference mappings, statement-level reads and mechanical
  resolution/consistency checks. I did not verify the proof bodies or the full
  research arguments line by line; correctness of the 30 statements and their
  proofs remains owed to Step 3b and the later gates, and the design's own
  closure line says "no independent/engine certification".
- The batch-16 notes file is stale on the item count (25 vs the current 29);
  the later owner reconciliation receipts are treated as authoritative. If the
  owner requires the note as a live record it should be refreshed, but no
  scope conclusion here depends on it.
- Coverage rows marked `inline` are local derivations not attributed to a
  source theorem (expected for the locally completed arguments); I did not
  re-derive them here.
- The relocated F3/F4 chain and its UCP/Carleman suppliers are scaffolded in
  batch 18 but remain unaudited proofs; this report only records that the
  relocation is applied consistently, not that the chain is proved.

## 6. Decision

`sufficient` — the planned definitions, results and example adequately cover
the intended subject; the design's claims are preserved with the recorded
owner relocations/additions; source coverage is documented and disposed; and
no prerequisite is absent from both the published library and the current
scaffold. Recorded via
`node tools/physics-support/step3-decisions.mjs record-scope --run
physics-em-sr-40-2026-10-08 --page em-expanded-analysis-prerequisites
--decision sufficient` with this report as the evidence path.
