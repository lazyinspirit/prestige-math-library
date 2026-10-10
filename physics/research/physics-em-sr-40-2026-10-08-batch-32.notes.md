# Batch 32 notes — `em-energy-momentum-and-angular-balance` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **343**, B page order **344**, category
`classical-electromagnetism`, library `physics`. Final inventory: **6 A items + 1 B item**,
all seven recorded `ready` with current dependency hashes.
No item file, page, plan, published item, engine state or verdict was edited.
Files written: the batch manifest, the batch coverage file, the consumer-batch
cross-dependency input, the seven `step1-*` readiness records, the tool-refreshed
unified ledger, and this note.
Read first: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding),
the Step-1 drift report `research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md`
(this page: **no-drift**), the design section `research/plan-classical-electromagnetism-track.md`
L1970–L2000, and the design sources `proposed-inventory.json`, `definition-contracts.md`,
`core-conditional-proofs.md` (K7), `worked-example-verifications.md` (X6),
`mathematical-prerequisites.md` (M01, M04).

## Design vs plan, and recorded conflicts

1. **Page metadata: no conflict.** The design reservation (L1970 ff.) and the current
   `research/plan-spec.json` entries 343/344 agree exactly on page ids, kind, orders,
   category, library `physics`, titles, companion links and declared `requires`
   (`em-elementary-mathematical-prerequisites`, `em-primitives-and-postulates`). The
   plan's item arrays are empty by construction; the batch manifest is the scaffold record.
2. **A/B counts preserved.** Design A=6/B=1; scaffolded A=6/B=1; cap 100 each, far below.
3. **`dependency_level` labels.** The design's labels (3, 4, 4, 5, 6, 7 and 5 for the
   example, computed under the design's own dep arrays) are not the whole-run labels
   this run records. The tool's whole-run in-run labels are
   **9, 10, 18, 18, 19, 20 and 19** (order of the inventory below); they include the
   in-run levels of the batch-13 and batch-23 suppliers and are the labels stored in the
   manifest. Recomputation recorded, not hidden (same practice as batch 18).
4. **Dep-array additions.** The design's dep arrays were kept as the core; each item adds
   only suppliers actually used by the stated claim, its well-definedness or its proof
   (listed per item below): chart/units/source/class notions, the multivariate
   derivative algebra, the fixed-volume integration suppliers, and the AC_ω hypothesis of
   the divergence theorem. Roles: the two object definitions supplied to the theorems are
   labelled `formulation-prerequisite` (they fix the objects being balanced), while the
   design's table used `physical-result` for `def-em-vacuum-energy-flux`; this is the role
   vocabulary used consistently across the run (cf. batch 23) and the change is recorded,
   not silent.
5. **Sign convention cross-check.** The scaffolded `sigma_ij = eps0(E_iE_j - (1/2)delta_ij|E|^2)
   + mu0^-1(B_iB_j - (1/2)delta_ij|B|^2)` with `Pi := -sigma` is exactly Griffiths (8.19)
   with (8.21) `f = div T - eps0mu0 dS/dt`, and equals Tong's (5.48) up to the overall sign
   with (5.47) `dP/dt + div sigma_Tong = -f`. The scaffolded identity
   `dt g - div sigma = -f` (equivalently `dt g + div Pi = -f`) was re-derived by hand from
   the two coefficient applications of M04 and the Maxwell substitutions; no formula in
   the historical design was altered.
6. **B item content.** The reservation's title ("crossed external fields with finite-volume
   accounting") and the X6 completed argument (the travelling plane-wave ledger
   `E = E0 cos(kz-wt) e1`, `B = (E0/c) cos(kz-wt) e2`, `w = ck`) agree: "crossed" is
   `E` perpendicular to `B` perpendicular to `e3`, and the finite-box accounting is added
   exactly as the title promises (the X6 text already integrates the one-dimensional
   ledger). No conflict.
7. **Deferred covariant content.** The design's note that the covariant stress tensor C5
   "belongs" to the later Lorentz-covariant formulation is honoured: no covariant
   identification is made on this page, and the coverage disposes the covariant
   energy-momentum-tensor material of Tong §5.6.2 and Landau–Lifshitz §32–§33 to
   `em-lorentz-covariant-formulation`. The design's promise for
   `pthm-em-coupled-total-conservation` ("vanishing/included boundary terms") is retained
   as clause (b)'s boundary-flux statement.
8. **Plan warning (pre-existing, not edited).** `validate-plan` warns that this page
   requires `em-elementary-mathematical-prerequisites` directly while already reaching it
   through `em-primitives-and-postulates`. This is a plan-level transitive-reduction
   warning written by the owner's metadata reconciliation; the plan is read-only for this
   dispatch and the warning is recorded, not repaired.

## Inventory decisions (recorded, not silent)

- `def-em-vacuum-energy-flux` (definition, physics): `u = (eps0|E|^2 + |B|^2/mu0)/2`,
  `S = (1/mu0) E x B`, with domain, C^k regularity, SI units, the pointwise reading, the
  quadratic-product and singular-support exclusions, non-additivity under field
  decompositions, and the statement that the physical interpretation is supplied by
  `pthm-em-poynting-balance`. Deps: `def-em-fields`, `def-em-si-conventions`,
  `def-euclidean-inner-product`, `def-cross-product-in-r3`,
  `def-ck-euclidean-maps-and-diffeomorphisms`,
  `thm-chain-sum-product-and-composition-rules-for-banach-derivatives` (the last two for
  the C^k claim; the design's dep `def-em-fields` is the core).
- `def-em-vacuum-stress-momentum` (definition, physics): `g = S/c^2 = eps0 E x B`,
  `sigma` (symmetric, by inspection), `Pi = -sigma` with the tensor-divergence
  convention, and the origin-relative `ell = x x g` and `x x Pi` with the explicit
  `eps_ijk` convention; units for each object (the `x x Pi` components are
  `kg s^-2 = N m^-1`); exact origin-shift behaviour (`x -> x+a` gives `ell + a x g`,
  `x x Pi + a x Pi`); quadratic-product exclusion; no covariant identification.
- `pthm-em-poynting-balance` (physics-theorem): local identity `dt u + div S = -J.E`
  and the fixed-volume identity with the boundary term, both conditional on the smooth
  branch of the Maxwell postulate, with the `J.E` work reading referenced to clause (ii)
  of the Lorentz coupling, and scope exclusions (weak branch, singular sources,
  non-integrable products, no conservation without the boundary term). Proof route: dot
  Faraday with `B/mu0` and Ampère with `E`, use
  `div(E x B) = <curl E,B> - <E,curl B>` (published supplier), then
  `lem-em-parameter-integrals` and the published piecewise-C^1 divergence theorem for the
  fixed-volume form. AC_ω declared for the divergence theorem only.
- `pthm-em-momentum-balance` (physics-theorem): local identity `dt g - div sigma = -f`
  (equivalently `dt g + div Pi = -f`) and the fixed-volume traction form
  `d/dt int g_i = surface integral sigma_ij n_j - int f_i`; `f = rho E + J x B` is the
  clause-(ii) force density; scope as above. Proof route: the two applications of
  `lem-em-quadratic-stress-identity` (coefficients `eps0` and `1/mu0`), the four smooth
  Maxwell equations, the product rule for `dt(E x B)`, `eps0 = 1/(mu0c^2)`, and the same
  fixed-volume suppliers; AC_ω declared.
- `pthm-em-angular-balance` (physics-theorem): local and fixed-volume orbital identities
  `dt ell + div(x x Pi) = -x x f` /
  `d/dt int ell_i = -surface integral (x x Pi)_{i j} n_j - int (x x f)_i`; symmetry of
  `Pi` checked from the definition; origin dependence recorded; no spin/intrinsic content.
  Proof route: the second part of `lem-em-quadratic-stress-identity` applied to the
  momentum balance, then the same integration suppliers; AC_ω declared.
- `pthm-em-coupled-total-conservation` (physics-theorem): explicit matter fields with
  `dt u_m + div S_m = J.E`, `dt g_m + div Pi_m = f` and symmetric `Pi_m`; conclusions are
  the local zero-source identities for `u_tot`, `g_tot`, `ell_tot` and the fixed-volume
  boundary-flux forms, hence constant totals exactly while the fluxes vanish; the matter
  balances are assumptions, not derivations, and "closed system" is a modelling choice.
  Proof route: add the field identities to the assumed matter ones; for the angular line
  apply `lem-em-quadratic-stress-identity` to `(g_m, Pi_m)` (right-hand side `-f`) to get
  `+x x f`, cancelling the field torque; integration as above; AC_ω declared.
- `ex-em-vacuum-energy-flow-example` (example, B page): the declared ideal source-free
  travelling wave, its verification against the four smooth-branch equations, the exact
  `u` and `S`, the pointwise balance `dt u + dz S3 = 0` (no double-angle identity needed),
  and the finite-box accounting
  `d/dt int_B u = L1L2(S3(a,t) - S3(b,t)) = -surface flux`. The oscillatory derivatives are
  taken through the complex-exponential encoding `def-em-complex-plane-wave` using the
  in-closure suppliers `thm-complex-exponential-is-entire-with-derivative-itself`,
  `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`,
  `thm-chain-rule-for-total-derivatives` and `thm-eulers-formula`; the direct
  real sine/cosine-derivative item is homed on a page outside this page's declared
  `requires` closure, so it was deliberately not consumed, and the chosen route stays
  inside the closure. The box reduction uses `thm-riemann-fubini-on-product-rectangles`,
  the time differentiation `lem-em-parameter-integrals`, and `thm-ftc-second-part`.
  Scope: ideal plane wave, no claim about total energy over all space, no empirical
  realization.

## AC_ω declarations and exact uses

Four items state the Axiom of Countable Choice and list `def-countable-choice` with role
`mathematical-premise`:

- `pthm-em-poynting-balance`, `pthm-em-momentum-balance`, `pthm-em-angular-balance`,
  `pthm-em-coupled-total-conservation`: exactly the hypothesis under which the published
  `thm-divergence-theorem-for-bounded-piecewise-c-one-domains` is stated, used only for
  the fixed-volume clauses. The definitions and the example are choice-free;
  `lem-em-parameter-integrals`'s own AC_ω surface convention is not inherited because only
  its volume clause (compact `K` with Lebesgue measure) is consumed.

## Sources (two-treatment rule, dispositions, fetch evidence)

Three complete independent treatments were read and fetched; all are primary kinds:

1. **D. Tong, Electromagnetism (Cambridge lecture notes, 236 pp.)**, §4.4 pp. 92–94,
   §5.6.1–5.6.2 pp. 127–131. URL `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`;
   stamp: 1 882 418 bytes, sha256_16 `b99b41156dfe6cd9`, 236 pages (2026-10-08T19:26:43Z).
2. **D. J. Griffiths, Introduction to Electrodynamics, 3rd ed. (1999, 596 pp. scan)**,
   §8.1.2 pp. 345–348, §8.2.1–8.2.4 pp. 349–360. URL
   `https://www.hlevkin.com/.../David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf`;
   stamp: 13 484 424 bytes, sha256_16 `ab7b67a3f6d60049`, 596 pages (19:26:46Z).
3. **L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, 3rd rev. English ed.
   (1971, 387 pp.)**, §31 pp. 75–76, §32 pp. 77–80, §33 pp. 80–83, §34 pp. 84–85
   (Gaussian units, re-expressed in SI). URL
   `http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf`; stamp:
   11 900 733 bytes, sha256_16 `57de03326f8ebe4a`, 387 pages (19:26:51Z).

`url-sweep` (scratch output) reports 3/3 live; `source-backing` reports all 7 authored
results backed. The coverage harvest gives every section heading and named result in the
claimed ranges a disposition (24 rows): included for the definitions, the three balances
and the example; inline for the continuity-equation reading, Newton's-third-law motivation
and the symmetry-requirement material absorbed into proofs; deferred to
`em-lorentz-covariant-formulation` (Tong §5.6.2 four-tensor material, LL §32–§33 covariant
content) and to `em-vacuum-waves-and-polarization` (period-averaged plane-wave flux); out of
scope with specific reasons for the Feynman-disk/exercise material, hidden momentum,
Tong/LL particle-tensor matter models and the LL virial theorem.

**Recorded source deviation.** The historical design's source legend names T (Tong),
F (Fitzpatrick nodes 89–91), E (Beisert, ETH) and O (Binney, Oxford) for this core pair.
This dispatch re-used the run's already-verified complete treatments Tong + Griffiths +
Landau–Lifshitz (each stamped in this batch's coverage) and did not retrieve Beisert,
Binney or Fitzpatrick node 89–91. The two-independent-treatment rule is satisfied by three
complete primary treatments whose relevant arguments were read; no claim rests on a source
that was not fetched. The deviation is recorded here for the owner.

## Dependency verification, levels and cross-batch input

Every `deps` entry was checked against the current statement of the supplier: hypotheses,
direction, conventions and axiom strength. All in-run suppliers are scaffolded
(batches 13, 23 and this page); all out-of-run suppliers are published items homed on pages
inside the transitive closure of this page's declared `requires`, verified against
`research/plan-spec.json` and the library pages. Computed whole-run labels (tool, not
design):

| item | level | in-run deps |
|---|---|---|
| `def-em-vacuum-energy-flux` | 9 | `def-em-fields` (8), `def-em-si-conventions` (7) |
| `def-em-vacuum-stress-momentum` | 10 | `def-em-vacuum-energy-flux` (9), `def-em-fields`, `def-em-si-conventions` |
| `pthm-em-poynting-balance` | 18 | `def-em-vacuum-energy-flux`, `post-em-vacuum-maxwell` (13), `post-em-lorentz-coupling` (17), `lem-em-parameter-integrals` (0) |
| `pthm-em-momentum-balance` | 18 | `def-em-vacuum-stress-momentum`, `post-em-vacuum-maxwell`, `post-em-lorentz-coupling`, `lem-em-quadratic-stress-identity` (0) |
| `pthm-em-angular-balance` | 19 | `pthm-em-momentum-balance`, `lem-em-quadratic-stress-identity` |
| `pthm-em-coupled-total-conservation` | 20 | the three balance theorems, `lem-em-quadratic-stress-identity`, `post-em-lorentz-coupling` |
| `ex-em-vacuum-energy-flow-example` | 19 | `pthm-em-poynting-balance`, `def-em-complex-plane-wave` (0), `def-em-vacuum-energy-flux`, batch-23 definitions, `lem-em-parameter-integrals` |

The consumer-batch input `research/physics-em-sr-40-2026-10-08-batch-32.cross-batch-dependencies.json`
contains 32 rows: two page rows (to `em-elementary-mathematical-prerequisites` and
`em-primitives-and-postulates`) and one item row for each declared cross-batch edge
(26 to batch 23, 6 to batch 13); after adding the three
`lem-em-parameter-integrals` rows required for the fixed-volume clauses, the refreshed
unified ledger shows **no batch-32 consumer edge without a review row and no orphaned
reviews**. All rows are `open`: suppliers are scaffolded, not authored, and this review is
not a production audit.

## Checks actually run (2026-10-09, this dispatch)

- `item-dependency-levels.mjs check --run …`: **no error names any batch-32 item** (no
  cycle, no label mismatch; the seven stored labels equal the computed ones). The only
  errors are `empty scaffold inventory` rows for batches whose manifests are still empty
  (24–30 and 33–40 at the first pass; 25–30 and 33–40 at the last observation — sibling
  workers are landing batches concurrently) — a run-wide condition, not a batch-32 finding.
- `step1-decisions.mjs check --run …`: every item present at each pass was closed (307 at
  the first pass); later sibling landings add items faster than their own workers record
  them, so run-wide totals move (325 items, 18 of batch 24's awaiting its worker, at the
  last observation). No batch-32 item is ever open.
- `content-policy.mjs --manifest-only` over **all** run manifests: **0 errors, 0 warnings**
  in every pass (307 scoped items at the first pass, 315 after batch 31 landed, 325 after
  batch 24 landed); run on batch 32 alone it reports the cross-batch deps as
  `batch-dependency-missing`, which is expected — the gate passes every manifest at once.
- `manifest-deps.mjs` over all manifests: 0 errors (every item has an explicit `deps`).
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and deduplicated; 0 orphaned
  reviews, 0 unreviewed batch-32 edges. `--require-reviewed` still fails with
  "Cross-batch review incomplete" because batches 24–31 and 33–40 have no inputs yet.
- `coverage-checklist.mjs …batch-32.coverage.json --require-destination`: 1 page,
  **24 harvested results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs --coverage …batch-32.coverage.json --stamp`: **3/3 fetch-verified**
  (stamps recorded above); check mode resolves 3/3.
- `url-sweep.mjs` on batch 32 (scratch output under `/tmp`, run artifact untouched):
  **3/3 live**, no recoverable or suspect URLs.
- `source-backing.mjs` with the batch-32 liveness file: **7/7 authored results backed**.
- `manifest-integrity.mjs --run …`: 80 pages owed, 80 in the manifests, no scope drift.
- `drift-review-check.mjs --run …`: 40 pages reviewed, no blocked edges.
- `validate-plan.mjs research/plan-spec.json --run …`: **FAIL — errors on sibling batches
  only**: batch 31 (`em-potentials-and-gauge` / `-examples`: `undeclared-prereq` edges to
  `em-causal-wave-kernel-prerequisites`, `sobolev-poincare-and-morrey-inequalities`,
  `the-divergence-theorem-and-classical-stokes-examples`, `sine-cosine-and-the-definition-of-pi`,
  `the-seifert-van-kampen-theorem`, `categories-functors-and-natural-transformations-examples`,
  and `b-leaf` edges into published examples pages) and batch 24
  (`em-maxwell-integral-and-constraints`: two `undeclared-prereq` edges). **No error names a
  batch-32 page or item**; the only batch-32 line is the pre-existing plan-level
  `redundant-prereq` warning on its `requires`. Those findings belong to the batch-24/31
  owners.
- `frontier-item-gate.mjs --run … --tool extcheck -- --manifest-only`: cannot run to
  completion while any run manifest is still empty — `readRunManifestPages` fails on the
  lowest empty inventory (batch 24 at the first attempt; batch 25 at the last), a run-wide
  condition that clears as sibling workers land. The manifest-only external-reference check
  will be meaningful once every inventory exists; batch-32 items themselves declare no
  `proved_here: false`, `external_refs` or `forward_refs` content.

## Published defects and unresolved findings

No published defect was found in any supplier examined; the imported suppliers used
(`lem-the-divergence-and-curl-of-a-cross-product`,
`thm-divergence-theorem-for-bounded-piecewise-c-one-domains`, `def-countable-choice`, the
derivative and complex-exponential items) are published with statements matching their
uses, and the AC_ω hypothesis of the divergence theorem is carried into the consuming
statements. Unresolved findings, all outside batch 32's authority: (i) the run-wide gates
held by the still-empty inventories (batches 25–30 and 33–40 at the last observation);
(ii) the batch-31 and batch-24 `validate-plan` errors above; (iii) the pre-existing
plan-level `redundant-prereq` warning on this page's `requires` (owner metadata, not
edited). The run-wide counts and empty-batch set move while sibling workers are active;
this note records the observations at the time of writing, and the engine's stage gate
re-evaluates the whole run on the frozen inputs.

Status: **scaffold-complete; Step-3 authoring and independent review pending.** Owner/engine
reconciliation and the full engine gates follow construction; the readiness records are not
independent mathematical approval.


## Step-3b authoring addendum (2026-10-09, alpha-high, dispatch 54780bb6c69f0368)

All seven scaffolded item files and both page carriers are now authored (status
draft): `def-em-vacuum-energy-flux`, `def-em-vacuum-stress-momentum`,
`pthm-em-poynting-balance`, `pthm-em-momentum-balance`,
`pthm-em-angular-balance`, `pthm-em-coupled-total-conservation`,
`ex-em-vacuum-energy-flow-example`, plus
`library/classical-electromagnetism/em-energy-momentum-and-angular-balance.md`
and its `-examples` companion. Every scaffolded claim, convention and source
disposition above is preserved; no pair, item, page or source was added or
dropped.

Recorded authoring changes (dep arrays updated in the batch manifest and in the
item frontmatter, dependency levels recomputed and unchanged):

- `def-em-vacuum-energy-flux`: replaced the out-of-closure supplier
  `thm-chain-sum-product-and-composition-rules-for-banach-derivatives` (home
  `functional-analysis/...`, not in the page's declared requires closure) by
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition` (home
  `the-inverse-function-theorem-completed`), and added `def-em-lab-geometry` to
  deps/roles; level stays 9.
- `def-em-vacuum-stress-momentum`: added `def-em-lab-geometry`,
  `lem-cross-product-is-bilinear-alternating-and-orthogonal` and
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition`; level 10.
- `pthm-em-poynting-balance`, `pthm-em-momentum-balance`,
  `pthm-em-angular-balance`: added
  `thm-graphs-of-continuous-functions-have-content-zero` and
  `cor-integral-over-a-null-set-vanishes` for the Lebesgue-nullity of the
  admissible boundary in the fixed-volume clauses; momentum adds
  `def-em-vacuum-energy-flux` for the exclusion cross-reference; angular adds
  `def-em-fields`, `post-em-lorentz-coupling` and `post-em-vacuum-maxwell` for
  its explicitly inherited hypotheses; levels 18/18/19.
- `pthm-em-coupled-total-conservation`: added `thm-algebra-of-derivatives`,
  `cor-zero-derivative-implies-constant`, the two null-set suppliers, plus
  `def-em-fields` and `post-em-vacuum-maxwell`; the matter fields are stated to
  be $C^1$ so that every displayed derivative exists; level 20.
- `ex-em-vacuum-energy-flow-example`: added
  `def-ck-euclidean-maps-and-diffeomorphisms`,
  `thm-continuous-partial-derivatives-imply-total-differentiability`,
  `thm-total-derivative-computes-directional-and-partial-derivatives`,
  `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`,
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition`,
  `def-bounded-piecewise-c-one-euclidean-domain`,
  `def-oriented-unit-normal-and-flux-of-a-surface-patch`,
  `def-multidimensional-rectangle-and-volume` and
  `thm-multidimensional-integral-properties`; level 19. The $C^\infty$
  regularity of the encoded fields is proved by an explicit induction on
  derivative order, and the face fluxes are computed through the patch-flux
  definition and the constant-integral rule.

Cross-batch inputs: seven new `open` rows were added to
`research/physics-em-sr-40-2026-10-08-batch-32.cross-batch-dependencies.json`
(the two new `def-em-lab-geometry` edges, three inherited-hypothesis edges of
`pthm-em-angular-balance`, and two of
`pthm-em-coupled-total-conservation`); `frontier-dependency-ledger.mjs refresh`
ran clean. `research/physics-em-sr-40-2026-10-08-batch-32.proof-contracts.json`
was created (version 1, seven items, 98 citation rows, derivations for every
numbered step, all eight boundary dispositions per item) and passes
`proof-contract.mjs --strict` with 0 errors.

Checks actually run after the final edits (2026-10-09): explicit-path
`precheck.mts` over the seven items (7/7 pass); `rendercheck.mjs` over the seven
items and both pages (clean); `proof-layout.mjs` over the seven items (42 steps,
0 defects); `depcheck.mjs --items-file` on the seven items (OK, no warnings);
`content-policy.mjs` on the batch manifest (7 items, 0 errors, 0 warnings);
`coverage-checklist.mjs` (1 page, 24 results, 0 errors/0 warnings);
`fwdcheck.mjs` and `extcheck.mjs` scoped to the items (OK);
`item-dependency-levels.mjs check` (473 items, all labels consistent);
`validate-plan.mjs` (no error names this pair; the FAIL is the pre-existing
sibling `undeclared-prereq` list, and the recorded `redundant-prereq` warning
on this page's `requires` is owner metadata); scoped `physics-content`
validation (0 errors for the seven items and two pages; the only errors in the
selection belong to the sibling `thm-sr-tensor-and-current-transformation`);
`proof-contract.mjs --strict` (0 errors).

Open obligations carried to Step 4 and Steps 5-8: the in-run suppliers used
here are draft scaffolds, so the seven cross-batch review rows above remain
`open` until their authored carriers are independently verified; the run-wide
`validate-plan` failures and the missing sibling item
`lem-em-ball-poisson-series-boundary-convergence` block the run-wide gates, not
this pair; and the Step-3b item decisions recorded with `step3-decisions.mjs`
are author receipts, not independent audits.
