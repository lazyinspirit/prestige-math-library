# Step 3a scope review — pair `em-elementary-mathematical-prerequisites` / `em-elementary-mathematical-prerequisites-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha (Step 3a scope review);
  label `step3a-pair-em-elementary-mathematical-prerequisites-a1fe823238fd4afc`;
  batch 13; 2026-10-09.
- A page: `em-elementary-mathematical-prerequisites` (order 305, category
  `classical-electromagnetism-mathematics`, `library: mathematics`, 13 items).
- B page: `em-elementary-mathematical-prerequisites-examples` (order 306, 1 leaf item).
- Scope decision: **sufficient** for the A page, recorded with
  `tools/physics-support/step3-decisions.mjs record-scope` as
  `research/physics-em-sr-40-2026-10-08-step3a-review-em-elementary-mathematical-prerequisites.json`.
- No omission found; no merger or enrichment recommended; no owner action is
  requested beyond the ordinary owner `proceed` record for the current scope.

## Inputs read

- `research/plan-spec.json` entries 305/306 and every `requires` list naming this
  page (orders 306, 309, 325, 327, 343); `research/plan-classical-electromagnetism-track.md`
  section "Em Elementary Mathematical Prerequisites" (L14–L401, the full
  reservation block).
- Design prose and carriers: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/`
  `mathematical-prerequisites.md` (M01–M08, M17; modules M01–M07 concern this page),
  `proposed-inventory.json` mathematical pair 0, `mathematical-example-verifications.md`
  (the hypothesis-boundaries example), `prose-scaffold.md` (13/1 row), `closure-ledger.json`.
- Run records: batch-13 `.pages.json`, `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json` (empty array); the run cross-batch ledger
  (`research/physics-em-sr-40-2026-10-08-cross-batch-dependencies.json`, 1700 edges);
  all 14 `physics-em-sr-40-2026-10-08-step1-<item>.json` owner readiness records;
  `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (its third
  reconciliation touches `lem-em-point-current-continuity` only);
  `research/physics-em-sr-40-2026-10-08-scope-ledger.json`.
- Published context: the 24 imported mathematical page files named in the A page's
  `requires`; the 58 published supplier items in `items/`; the consumer scaffold
  statements in batches 15–40; `tools/physics-support/step3-decisions.mjs` receipt semantics.

## 1. Design vs scaffold

The reservation (`plan-classical-electromagnetism-track.md` L14–L401, matching
`proposed-inventory.json` pair 0) declares 13 A items and 1 B item. The batch-13
manifest reproduces them exactly — identical IDs, kinds and page metadata
(orders 305/306, category, `library: mathematics`, companion pairing, the same 24
`requires` page IDs) — with no item added, renamed or dropped:
`def-em-complex-plane-wave`, `def-em-moving-patch`, `def-em-surface-distribution`,
`lem-em-continuous-localization`, `lem-em-coulomb-dipole-remainder`,
`lem-em-parameter-integrals`, `lem-em-point-current-continuity`,
`lem-em-quadratic-stress-identity`, `lem-em-interface-derivatives`,
`lem-em-joint-smooth-potentials`, `lem-em-moving-flux`, `lem-em-period-average`,
`lem-em-interface-wave-linear-system`, and the B example
`ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries`.

Module coverage vs design `mathematical-prerequisites.md`: M01 → parameter
integrals + continuous localization; M02 → moving patch + moving flux;
M03 → surface distribution + interface derivatives + point-current continuity;
M04 → quadratic stress/angular-balance identity; M05 → joint smooth potentials;
M06 → Coulomb dipole remainder; M07 → complex plane wave + period average +
interface linear system. M08 (Minkowski algebra) and M17 (variations) are reserved
to the sibling pages `em-minkowski-mathematical-prerequisites` and
`em-variational-mathematical-prerequisites`, not to this page.

Recorded deviations (all inside the reserved scope, as logged in the batch notes):
necessary dependency additions verified against published statements; the
`lem-em-joint-smooth-potentials` statement honestly corrected to joint `C^k`
(spatial gradient `-C`) instead of joint `C^{k+1}`; the
`lem-em-interface-wave-linear-system` generic calculus deps dropped as unused
(only place dep metadata was narrowed). `lem-em-point-current-continuity` follows
the owner's third reconciliation: proper graph map, automatic for `R^3×I` and
whole-history `I=R`, with the endpoint identity
`∂_t ρ + div J = q δ_start − q δ_end` for justified finite endpoints. Computed
levels are 8×0, 4×1, 1×2 and B=3, equal to the design's levels.

## 2. Intended role and consumers

The pair is the elementary mathematical toolkit of the EM track: localization and
parameter differentiation, moving-surface transport, distributional sheets and
point support, stress identities, potential regularity, compact-source
multipoles, and phasor algebra. Its `requires` closure contains only published
imported mathematics.

Declared page-level consumers: `em-variational-mathematical-prerequisites`
(order 309), `em-primitives-and-postulates` (325), `em-maxwell-integral-and-constraints`
(327), `em-energy-momentum-and-angular-balance` (343) and its own B page; the run
ledger records these four cross-batch edges with consumer-owned reviews still
`open`. The current manifests show 64 item-level consumer edges from this page's
13 A items into 53 consumer items on 27 pages across batches
15/16/17/18/19/21/22/23/24/25/26/27/29/30/31/32/33/34/35/36/40 (59 review rows
`open`, 5 `verified`). Every consumer page lies inside the `requires` closure of
this page, so the intended supplier-before-consumer position is consistent; every
module is actually consumed downstream. The B example is a leaf, consumed by no
other page.

## 3. Inventory — current IDs and exact claims (A: 13, B: 1)

- `def-em-complex-plane-wave` (definition, level 0): real vector fields
  `Re[e exp(i(k·x−ωt))]`, `Re[b exp(i(k·x−ωt))]` on `R^3`, componentwise;
  complex notation encodes real fields and real linear equations, with real part,
  imaginary part and conjugation explicit operations.
- `def-em-moving-patch` (definition, level 0): compact finite elementary Green
  region `D`, `C^2` extension of `r:D×I→R^3`, `r_u×r_v≠0` on the interior,
  single-valued `C^1` velocity `v`, embedded images for a material sheet, and the
  parametrized flux `Φ(t)=∫_D ⟨B(r,t), r_u×r_v⟩ du dv`.
- `def-em-surface-distribution` (definition, level 0, AC_ω): compact embedded
  `C^2` hypersurface `S`, chosen unit normal `n`, `δ_S(ψ)=∫_S ψ dS`, densities
  `aδ_S`, finite-order continuity on test functions, locally integrable
  piecewise-`C^1` fields with one-sided traces and jump `[F]=F_+−F_−`.
- `lem-em-continuous-localization` (lemma, level 0, AC_ω): vanishing integral
  over every compactly contained ball forces a continuous function to vanish;
  vanishing flux through every planar disk in the three coordinate planes forces
  a continuous `R^3` field to vanish.
- `lem-em-coulomb-dipole-remainder` (lemma, level 0, AC_ω): for compactly
  supported `L^1` density in `|y|≤a`, the potential splits into
  `Q/r + p·x/r^3 + R(x)` with `|R(x)|≤16a^2‖ρ‖_1/r^3` for `r≥2a`.
- `lem-em-parameter-integrals` (lemma, level 0): differentiation under the
  integral sign over a compact finite-measure `K` (relative endpoint derivatives)
  and, under the surface-measure AC_ω convention, over a fixed compact `C^1`
  hypersurface; no moving sets or crossing singularities.
- `lem-em-point-current-continuity` (lemma, level 0): point-support spacetime
  distributions `ρ=q∫ψ(z(t),t)dt`, `J=q∫z'ψ`, with `∂_tρ+div J=0` under the
  proper-graph hypothesis; endpoint variant with `qδ_start−qδ_end`.
- `lem-em-quadratic-stress-identity` (lemma, level 0): `div Q = F div F − F×curl F`
  for `Q_ij=F_iF_j−½δ_ij|F|^2`, `ε_ijk Q_kj=0` for symmetric tensors, and the
  local orbital angular-balance identity `∂_t(x×g)+div(x×Π)=−x×f`.
- `lem-em-interface-derivatives` (lemma, level 1, AC_ω): away from the edge and
  distributionally, `div F={div F}_piecewise+n·[F]δ_S` and
  `curl F={curl F}_piecewise+n×[F]δ_S` for one-sided `C^1` traces on a two-sided
  compact embedded `C^2` interface.
- `lem-em-joint-smooth-potentials` (lemma, level 1): explicit joint `C^k`
  convention for non-open time intervals; on star-shaped `U` the radial witnesses
  `A=∫_0^1 s B(a+s(x−a),t)×(x−a)ds`, `φ=−∫_0^1⟨C(a+s(x−a),t),x−a⟩ds` are jointly
  `C^k` with `curl A=B`, `∇φ=−C`; no global potential on arbitrary open sets.
- `lem-em-moving-flux` (lemma, level 1, AC_ω): `Φ'(t)=∫_S ∂_tB·n dS −
  ∮_{∂S}(v×B)·dr` under `div B=0`, with the explicit additional term
  `∫_S (v·n) div B dS` without that hypothesis.
- `lem-em-period-average` (lemma, level 1): `T^{-1}∫_0^T Re(ae^{−iωt})Re(de^{−iωt})dt
  = ½Re(a d̄)`, componentwise for vectors; conjugation is not optional.
- `lem-em-interface-wave-linear-system` (lemma, level 2): the assumed normal-incidence
  system `E_i+E_r=E_t`, `(E_i−E_r)/Z_1=E_t/Z_2`, its solution, `R+T=1`; the two
  equations are assumed, not derived, and oblique/complex/anisotropic cases excluded.
- `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries` (example,
  level 3): expanding square patch with `B=e_3`; parametrized flux `a^2`,
  derivative `2aa'`, patch Stokes sign `∮(v×B)·dl=−2aa'`; treating the moving
  patch as fixed wrongly gives zero. Verbatim the design example.

## 4. Source coverage

The batch-13 coverage harvest records 10 fetch-verified sources (all stamped:
Hunter PDE notes §§1.10/1.12/2.7; Lebl *Basic Analysis II* §9.1; Taylor *Analysis
in Several Variables* §§3.2/4.4/5.2; Dyatlov 18.155 §§2.1–2.3/3.1–3.2; CLP-4 §4.1
through Thm 4.1.16 and §4.4; Galili–Kaplan–Lehavi AJP 74, 337 (App. A1–A3);
Teitel PHY 415 Unit 2-4; USD phasor notes; Fitzpatrick "Reflection at a
dielectric boundary" (1210)–(1232)). Verified counts: 32 disposition rows —
8 `included`, 2 `inline`, 11 `already-published`, 11 `out-of-scope` each with a
specific reason; every included/inline row names a scaffolded item.

The `coverage-checklist` advisory `coverage-low-yield` warning (8 included of 32)
is recorded and not a scope failure: the declines are reasoned, and five A items
(`def-em-surface-distribution`, `lem-em-continuous-localization`,
`lem-em-point-current-continuity`, `lem-em-interface-derivatives`,
`lem-em-joint-smooth-potentials`) plus the B example have no dedicated
`included`/`inline` row because they are the design's declared LOCAL ARGUMENT
items assembled from the published suppliers named in their `deps`; their source
fidelity rests on those suppliers and must be checked in Step 3b/5.

## 5. Prerequisite audit (independent pass)

- The 14 items declare 71 distinct `deps` targets: 58 resolve to published
  mathematical items in `items/` (all frontmatter `status: published`; e.g.
  `def-distribution`, `def-distributional-derivative`, `def-dirac-delta-and-its-derivatives`,
  `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`,
  `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
  `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`,
  `lem-the-divergence-and-curl-of-a-cross-product`,
  `thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential`,
  `thm-poincare-lemma-for-star-shaped-domains`, `def-countable-choice`, and the
  Lebesgue-integral/measure suppliers) and 13 resolve to same-page batch-13
  scaffold statements. Zero unresolved targets; no dependency is absent from the
  published library or the current scaffold.
- All 24 page-level `requires` IDs resolve to published imported mathematical
  pages under `library/` (including `distributions-test-functions-and-differentiation`
  and `fundamental-solutions-newtonian-potentials-and-green-functions`, whose
  quoted `page:` frontmatter initially defeated a naive scan and was confirmed
  directly).
- A run-wide scan of all 40 batch manifests finds 0 unresolved dependency edges
  and no duplicate item homes; the B example is homed only on the B page as a
  leaf. No potentially unmet prerequisite was found for this pair or its
  consumers.
- Observations carried, not blockers: (i) three published items state the
  AC_ω convention in their defining text without listing `def-countable-choice`
  directly in `deps` (`thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
  `def-surface-integral-on-a-compact-c-one-hypersurface`,
  `def-bounded-piecewise-c-one-euclidean-domain`); the assumption is explicit
  and transitively reachable, and this page's affected items carry both the
  assumption and the dep — metadata hygiene note only, no repair of read-only
  published content attempted; (ii) the 64 consumer item edges have 59 `open`
  cross-batch review rows owned by the consumer batches.

## 6. Uncertainty and residual obligations

- All in-run suppliers are scaffold statements; no authored item files exist yet
  for this run (checked `items/`: no `em-` items present), so Step 3b must
  reconcile actual proof uses against these interfaces and Steps 3b/5 must
  check the five local-argument items' derivations and the source fidelity of
  their published suppliers. This review is scope-only and asserts no proof
  correctness.
- The harvest's five local-argument items and the single B example are the
  thinnest source-coverage points; the declines and dispositions are recorded and
  reasoned, and Alpha may confirm them at Step 5 as the batch notes state.
- Owner readiness records exist for all 14 items (`step1-*.json`, decision
  `ready`); the owner direction does not otherwise constrain this pair.

## 7. Decision and next action

Decision for the A page `em-elementary-mathematical-prerequisites`: **sufficient**.
The planned definitions, results and example exactly implement the owner-approved
reservation for the page's subject (design modules M01–M07), with explicit
objects, hypotheses, regularity, pure-mathematics scope and exclusions;
source coverage is recorded with quantified dispositions; and no prerequisite is
missing from the published library or the current scaffold. No scaffold, item,
page, plan entry or published content was edited by this review; no item
approvals or owner records were written.

- Review receipt: `research/physics-em-sr-40-2026-10-08-step3a-review-em-elementary-mathematical-prerequisites.json`
  (bound to the tool-computed scope hash of the current pair manifest).
- Owner action: record `proceed` for the current scope (or `merge`/`enrich` with
  amendments) to close Step 3a for this pair; Step 3b authoring may proceed in
  the declared dependency order.
