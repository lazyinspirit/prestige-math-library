# Batch 39 notes — `em-action-and-variational-formulation` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **357**, B page order **358**, category
`classical-electromagnetism`, library `physics`. Final inventory: **5 A items + 2 B items**,
all seven recorded `ready` with current dependency hashes. Written only: the batch manifest,
the batch coverage file, the consumer-batch cross-dependency input (33 rows), the seven
`step1-*` readiness records, the tool-refreshed unified ledger and this note. No item file,
page, shared plan, published item, engine state or verdict was edited.

Read first: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding),
the design section `research/plan-classical-electromagnetism-track.md` L2197-L2235 and the
full required sources it names, the reservation in
`research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`
(items 2927-3052), `definition-contracts.md#def-em-field-action-definition` and
`#post-em-stationary-action-model`, `completed-expansion-arguments.md` V1-V2,
`worked-example-verifications.md#X8`, `research/plan-spec.json` entries 357/358, and the
current native manifests of every supplier batch (1, 3, 14, 15, 16, 23, 24, 37). The further
owner reconciliations (reconciliation2-7) contain no correction that names this pair; the
fifth reconciliation's EM dictionary (`F_0i=-E_i/c`, `F_ij=eps_ijk B_k`, future covariant
Maxwell `d_mu F^{mu nu} = -mu0 j^nu`) is applied throughout.

## Design vs plan, and recorded conflicts

1. **Page metadata: no conflict.** The design reservation (L2197 ff.) and the current
   `research/plan-spec.json` entries 357/358 agree exactly on page ids, kind, orders,
   category, library `physics`, titles, companion links and the declared `requires`
   (`em-lorentz-covariant-formulation`). Every added item dependency is homed in the
   transitive closure of that declaration (`em-primitives-and-postulates`,
   `em-maxwell-integral-and-constraints`, `em-variational-mathematical-prerequisites`,
   `em-expanded-analysis-prerequisites`, `em-minkowski-mathematical-prerequisites` are all
   reached), so no page-prerequisite repair was needed and `validate-plan --run` reports no
   `undeclared-prereq` for either page.
2. **A/B counts preserved.** Design A=5 / B=2; scaffolded A=5 / B=2; cap 100 each, so no
   split. The promised items and IDs are unchanged.
3. **Recorded label enrichments (no content change).** The definition title was extended to
   "Smooth finite-region Maxwell action, compact variations and the fixed-endpoint particle
   functional" because the contract assigns the item both functionals; the field theorem
   title reads "Action stationarity implies the inhomogeneous Maxwell equations" (design:
   "...inhomogeneous Maxwell"). No claim was added, narrowed or dropped.
4. **Design dep arrays kept as the core; only actually used suppliers added.** Every added
   entry is consumed by the statement, the well-definedness or the recorded proof strategy
   (per item below). The design's role value `physical-result` on definitional suppliers
   (`def-em-field-action-definition` inside the gauge theorem, `def-em-relativistic-worldlines-frames`
   inside the particle theorem) was normalised to `formulation-prerequisite`, following the
   run's convention for definitions (batch 37 does the same); the roles of all other design
   entries are unchanged.
5. **The design's declared dependency levels are superseded by the tool's whole-run labels.**
   Computed with all current manifests: definition 14, postulate 15, gauge theorem 17,
   Maxwell-variation theorem 16, particle theorem 19, examples 16 and 18. Declared labels
   equal computed labels (checked with `item-dependency-levels`).
6. **B-page closure correction (one substituted family, recorded).** The research example
   `worked-example-verifications.md#X8` constructs the negative-action direction with the
   compact variation `h_2 = eta(x^0)psi(x)cos(N x^1)`. Its exact lower bound needs
   `sin^2` power-reduction whose published home is `sine-cosine-and-the-definition-of-pi`,
   a page outside the B page's declared prerequisite closure (`validate-plan --run` flagged
   exactly one `undeclared-prereq` row for this). Rather than relax the check, the family was
   replaced by the polynomial variation `h^(N)_2 = eta(x^0)psi(x)(x^1)^N` with a bump equal
   to one on a subbox: its exact lower bound uses only the power rule, monotonicity of powers,
   the product and chain rules, the one-variable fundamental theorem and Fubini, whose
   published homes all lie in the declared closure. Every promised conclusion of X8 is
   preserved: the electric norm stays bounded, the curl norm grows like `N`, `S[h^(N)]<0`
   for large `N`, exact rescaling gives both signs arbitrarily close to zero, and the
   stationary point `A=0` is not a minimum. The substitution and its reason are recorded in
   the item's statement and strategy and in this note; the historical `cos` family remains
   research context, and the coverage rows for the source treatments are unaffected.
7. **Sibling observation carried for the canonical ledger.** Batch 16's manifest of
   `lem-em-particle-curve-variation` does not declare the Countable Choice assumption that
   its recorded proof inherits from `lem-em-fundamental-variation-lemma` (the lemma's
   statement immediately follows the fundamental lemma's `AC_omega` in the recorded route).
   The statements and hypotheses this batch consumes are unaffected; the consumer
   `pthm-em-particle-action-coupling` declares the assumption and identifies its exact use,
   and the observation is recorded in the cross-batch input and in the readiness record of
   the batch-16 item's prospective author.

## Inventory decisions (recorded, not silent)

- `def-em-field-action-definition` (definition, level 14). Contract preserved: bounded open
  `U subset I x Omega` with `closure(U)` compact in `I x Omega`, smooth `A,j` on an open
  neighbourhood `N` of the closure, `S[A]=c^{-1} int[-(4 mu0)^{-1}F_{mu nu}F^{mu nu}+j^nu A_nu] dlambda`
  in J s, compactly supported smooth field variations with the quadratic expansion, and the
  V1 particle functional with fixed-endpoint `C^2` variations cited rather than redefined.
  Design deps kept; added `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-sources`,
  `def-em-relativistic-worldlines-frames`, `lem-em-particle-curve-variation`,
  `def-ck-euclidean-maps-and-diffeomorphisms`, `def-integral-over-a-measurable-set`,
  `def-directional-and-partial-derivatives`, `def-test-function-space-d-of-an-open-set` and
  `def-countable-choice`, each named by the statement or the well-definedness argument. The
  unit count (density J m^{-3}, `dlambda` m^4, `c^{-1}` s m^{-1}) is recorded explicitly.
- `post-em-stationary-action-model` (postulate, level 15). Contract preserved: stationarity
  of the precisely defined field and particle functionals under the specified variations is
  adopted as an alternative Maxwell/force formulation; not a minimum, not uniquely forced by
  symmetry, no Noether machinery, no coupled saddle/existence claim, no empirical claim.
  Single design dep kept. The source row (Landau-Lifshitz 16 footnote) recording that the
  interaction form is not fixed by general considerations alone supports the non-derivation
  scope.
- `pthm-em-action-gauge-source-compatibility` (physics-theorem, level 17). V2 gauge part
  preserved with **both directions**: the exact gauge difference
  `S[A+dchi]-S[A] = c^{-1} int j^mu d_mu chi = -c^{-1} int (d_mu j^mu) chi` with no boundary
  term; equivalence with conservation for smooth `j` via the fundamental variation lemma;
  the Maxwell-compatible instantiation through the smooth branch of charge continuity and
  the chart identity `d_mu j^mu = d_t rho + div J`; and the distributional reading of the
  pairing from the signed definition of the distributional derivative. Design deps kept;
  added `lem-em-fundamental-variation-lemma` (the converse), `pthm-em-tensor-maxwell-equivalence`
  (the restatement of the Maxwell-compatible hypothesis), `def-em-electromagnetic-tensor`,
  `def-em-sources`, `def-regular-distribution-from-a-locally-integrable-function`,
  `thm-distributional-differentiation-is-continuous-and-commutes`,
  `def-test-function-space-d-of-an-open-set`, `thm-clairaut-schwarz-mixed-partials`,
  `def-divergence-and-curl-of-a-c1-vector-field`, `thm-linearity-of-the-lebesgue-integral-on-l-one`,
  `def-directional-and-partial-derivatives`, `def-ck-euclidean-maps-and-diffeomorphisms`,
  `def-integral-over-a-measurable-set` and `def-countable-choice`.
- `pthm-em-action-maxwell-variation` (physics-theorem, level 16). V2 field part preserved:
  `(i)` stationarity of `S` under all compactly supported smooth variations iff
  `(ii)` `d_mu F^{mu nu} = -mu0 j^nu`, by instantiating the compact-field lemma at
  `kappa = mu0`, `J = j` after multiplying by the positive constant `c^{-1}`; consequent full
  smooth-branch Maxwell equations for the represented pair (inhomogeneous pair from
  stationarity, cyclic identity from `F=dA` for smooth `A`). Design deps kept; added
  `def-em-field-action-definition` (the functional), `pthm-em-tensor-maxwell-equivalence`
  (the component equivalence used in the direction TM1 and TM2 imply the four equations),
  `def-em-electromagnetic-tensor`, `def-em-si-conventions`, `def-em-sources`,
  `thm-clairaut-schwarz-mixed-partials`, `def-directional-and-partial-derivatives`,
  `def-ck-euclidean-maps-and-diffeomorphisms` and `def-countable-choice`. No existence,
  boundary, weak or singular branch is claimed.
- `pthm-em-particle-action-coupling` (physics-theorem, level 19). V1 physics consumer
  preserved: for a `C^2` future timelike massive worldline in a prescribed `C^2` external
  potential, fixed-endpoint stationarity of the particle functional is equivalent to
  `m dU_nu/dtau = qF_{nu mu}U^mu` and to the framework's adopted four-force equation
  `m dU/dtau = q Phi(U)`, with the coordinate force and power laws following from the
  covariant theorem's clause (a). Design deps kept; added `def-em-field-action-definition`
  (clause (c) functional pointer), `def-em-electromagnetic-tensor` (the `F=dA` dictionary),
  `def-em-sources` (the charge and rest-mass parameters),
  `lem-em-antisymmetric-tensor-contraction` (index lowering of `Phi`),
  `thm-sr-proper-time-and-observer-decomposition` (`U`, `tau` identification) and
  `def-countable-choice`.
- `ex-em-stationary-not-minimum` (example, level 16). X8 content preserved with the
  substituted polynomial family described above: physical form of the source-free functional,
  degree-two homogeneity, `A=0` stationary, explicit compact variations of both signs
  arbitrarily close to zero, hence stationarity is not a minimum. Design dep
  (`post-em-stationary-action-model`) kept; added `def-em-field-action-definition`,
  `lem-em-compact-field-variation`, `def-em-lab-geometry`, `def-em-electromagnetic-tensor`,
  `def-em-si-conventions`, `lem-test-function-cutoffs-and-euclidean-localization`,
  `lem-derivative-of-a-power`, `lem-power-monotone`, `lem-power-laws`,
  `thm-algebra-of-derivatives`, `thm-newton-leibniz-with-interior-derivative`,
  `thm-chain-rule`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-integral-over-a-measurable-set`,
  `def-ck-euclidean-maps-and-diffeomorphisms` and `def-countable-choice`.
- `ex-em-compact-variation-example` (example, level 18). X8 compact-variation and
  gauge-source sign checks preserved and made exact: source-free `A=0` stationary by
  pointwise vanishing of the first-variation integrand; the linear potential `A_0=x^1`
  (`F_01=-1`, `F^{01}=+1`, `F^{10}=-1`, represented `E=(c,0,0)`, `B=0`) stationary with the
  explicit boundary-free cancellation of the first variation; and the gauge-source sign
  check with `j^0=c rho(x^0)` and a product bump gauge, exhibiting both signs of
  `S[A+dchi]-S[A]` and the conserved case. Design deps kept; added
  `def-em-field-action-definition`, `lem-em-compact-field-variation`,
  `pthm-em-action-maxwell-variation`, `def-em-electromagnetic-tensor`, `def-em-si-conventions`,
  `def-em-sources`, `lem-test-function-cutoffs-and-euclidean-localization`,
  `thm-newton-leibniz-with-interior-derivative`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-integral-over-a-measurable-set`,
  `def-directional-and-partial-derivatives` and `def-countable-choice`.

## Dependency verification, levels and cross-batch input

Every `deps` entry was checked against the current statement of its supplier: hypotheses,
direction, conventions and axiom strength. All in-run suppliers are scaffolded in batches
1, 3, 14, 15, 16, 23, 24 and 37; all out-of-run suppliers are published items whose homes
lie inside the declared prerequisite closure (verified by `validate-plan --run`, which now
reports no `undeclared-prereq` row for either page). Tool-computed levels equal the declared
labels: 14, 15, 17, 16, 19, 16, 18. `research/physics-em-sr-40-2026-10-08-batch-39.cross-batch-dependencies.json`
contains 33 rows: one page row (`em-action-and-variational-formulation <- em-lorentz-covariant-formulation`)
and 32 item rows, one per declared cross-batch edge (7 for the definition, 5 for the gauge
theorem, 5 for the Maxwell-variation theorem, 7 for the particle theorem, 4 and 4 for the two
examples). After the refresh the unified ledger shows no batch-39 edge without a review row
and no orphaned review; all rows are `open` because the suppliers are scaffolded but not yet
authored.

Key uses examined in detail: `lem-em-compact-field-variation` (bounded open `U`, smooth
fields on a neighbourhood of the closure, compactly supported smooth variations, `kappa>0`;
clauses (a) and (c) instantiated at `kappa=mu0`, `J=j`); `pthm-em-tensor-maxwell-equivalence`
clause (a) used only as the component equivalence on the smooth class in the direction
TM1 and TM2 imply the four laboratory equations (no equation assumed; the theorem's
regularity hypotheses are satisfied by the smooth objects); `pthm-em-charge-continuity`
clause (a) as a pointwise conclusion restricted to the open subregion `U`;
`lem-em-fundamental-variation-lemma` (open `U`, continuity of `d_mu j^mu`, all compactly
supported smooth tests); `lem-em-particle-curve-variation` (exact functional and
fixed-endpoint equivalence); `lem-em-antisymmetric-tensor-contraction`
(`Phi(u)^mu = eta^{mu alpha}F_{alpha beta}u^beta`, index lowering); and the published
analysis, distribution, integration and power suppliers for the exact computations. The
manifest's wikilinks were checked to lie in the corresponding `deps` arrays.

## Axiom-of-choice declarations and exact uses

- `def-em-field-action-definition`, `pthm-em-action-maxwell-variation`,
  `pthm-em-action-gauge-source-compatibility`, `pthm-em-particle-action-coupling` and both
  examples state Countable Choice (`AC_omega`) and list `def-countable-choice`, each with the
  exact use: the finiteness and expansion statements of `lem-em-compact-field-variation`
  (definition and Maxwell-variation theorem); the componentwise fundamental-variation step
  and the classical/distributional compatibility conversions (gauge theorem); the
  componentwise fundamental-variation step of the curve lemma (particle theorem); and
  inheritance through those suppliers (examples). `post-em-stationary-action-model` uses no
  choice principle and says so. No item uses the full Axiom of Choice, and no proof or
  prerequisite path reaches `deferred-set-theory-beyond-choice`.
- Sibling observation for its author: batch 16's `lem-em-particle-curve-variation` manifest
  does not declare the `AC_omega` assumption of its recorded fundamental-lemma step; this
  batch's consumer declares it rather than assuming the supplier's record is complete.

## Source harvest

Three complete independent treatments were fetched and read in their retained full texts;
all three are stamped in the coverage file.

| source | kind | locator |
|---|---|---|
| D. Tong, Electromagnetism (Cambridge Part II), chapter 5 | lecture-notes | §5.5 complete: §5.5.1 printed pp. 118-119; §5.5.2 including "The Covariant Action" pp. 120-124; §5.5.3 including the "Theta Term" pp. 124-127; §5.4.1-§5.4.2 inspected |
| J. Binney, Classical Fields (Oxford 2006-2007, 95 pp.) | lecture-notes | Chapter 3 §§3.1-3.2 and §§3.6-3.8, printed pp. 22-36 (PDF pp. 23-37), read in the repository OCR text of this exact PDF because the embedded fonts defeat direct extraction |
| L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields (387 pp.) | monograph | §16 printed pp. 44-46; §27 printed pp. 67-68; §28 printed pp. 69-71; §29 printed pp. 71-73; §30 printed pp. 73-75; Gaussian units converted to the SI dictionary |

Fetch stamps: Tong `https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf`
612 508 bytes, 39 pages, sha256_16 `47798362fe073b50`; Binney
`https://www-thphys.physics.ox.ac.uk/people/JamesBinney/classf.pdf` 797 472 bytes, 95 pages,
sha256_16 `3fbfc6bdcd827adf`; Landau-Lifshitz
`http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf` 11 900 733
bytes, 387 pages, sha256_16 `57de03326f8ebe4a`. All three were fetched on the first attempt
(recorded in `recovery_attempts`); no source drop was needed.

Harvest dispositions (33 rows): 13 `included` (definition, Maxwell-variation theorem, gauge
theorem, particle theorem, both examples), 7 `inline` (definition, postulate, gauge theorem,
Maxwell-variation theorem, stationary-not-minimum example), 8 `deferred` with valid planned
destinations (`em-lorentz-covariant-formulation`, `cm07-stationary-action-and-lagrangian-dynamics`,
`rpm-geometry-actions`, `rpm-external-charge`) and 5 `out-of-scope` with specific reasons.
The convention dictionary (Tong/Binney `(+,-,-,-)` and their normalisations; Landau-Lifshitz
Gaussian units) is recorded in the coverage `note`; every sign and constant was rederived in
the framework's dictionary.

## Checks run (actual results, 2026-10-09)

- `manifest-deps.mjs` on the batch file: 7 items, 0 errors.
- `content-policy.mjs --manifest-only` over all run manifests: 452 scoped items, 0 errors,
  0 warnings.
- `item-dependency-levels.mjs check --run`: no error names any batch-39 item; stored labels
  equal computed labels; the remaining 4 errors are `empty scaffold inventory` rows for
  sibling batches 38 and 40 still in flight.
- `coverage-checklist.mjs ... --require-destination`: 1 page, 33 harvested results, 0 errors,
  1 warning (`coverage-low-yield`: 13/33 scaffolded — the declines are the deferred and
  out-of-scope rows recorded above, to be confirmed by Alpha).
- `source-fetch-check.mjs --coverage ... --stamp`: 3/3 fetch-verified (stamps above); check
  mode 3/3 resolved, 0 drops.
- `url-sweep.mjs --coverage ... --out /tmp/...`: 3/3 live, 0 failed, 0 suspect.
- `validate-plan.mjs research/plan-spec.json --run ...`: exit 0 — the pair shows 5/2 items
  and the run reports OK with no `undeclared-prereq`, no forward or cyclic item edge. (An
  earlier pass in this dispatch flagged exactly one `undeclared-prereq` row for the B page
  via the trigonometric home; that was cleared by the recorded family substitution.)
- `manifest-integrity.mjs --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `physics-check.mjs --plan research/plan-spec.json --run ...`: exit 0, 0 errors, 452 items
  checked (the import drift seen by an earlier batch is no longer present).
- `extcheck.mjs`: 26 654 items, 0 recorded-not-proved, 0 resting on them — the batch declares
  no `proved_here: false`, `external_refs` or `forward_refs`, so this scope is vacuous.
- `frontier-dependency-ledger.mjs refresh --run ...`: refreshed and deduplicated; 33/33
  batch-39 consumer edges carry review rows, 0 orphaned reviews; batch 39 is a reviewed
  batch (38 and 40 remain unreviewed).
- `step1-decisions.mjs check --run`: 452 items, 432 ready; the only work rows are other
  batches (empty inventories for 38 and 40, readiness records pending for their items).
  All seven batch-39 items are closed `ready` on the current hashes; the
  `ex-em-stationary-not-minimum` record was re-recorded after the family substitution.

## Unresolved findings

- **Sibling-batch readiness (outside this batch).** Batches 38 and 40 still carry empty
  scaffold inventories; the whole-run `item-dependency-levels` and `step1-decisions` checks
  cannot close until they land. Reported, not repaired.
- **Batch 16 Countable Choice declaration.** `lem-em-particle-curve-variation` does not
  declare the `AC_omega` assumption of its recorded fundamental-lemma step; its Step-3
  author should reconcile the supplier's contract, and this batch's consumer declares the
  assumption in the meantime. No statement or hypothesis consumed here is affected.
- **Research family substitution.** The `cos(N x^1)` variation of `worked-example-verifications.md#X8`
  is not scaffolded; the polynomial `(x^1)^N` family preserves every promised conclusion and
  keeps the example inside the declared prerequisite closure. Recorded for the ordinary
  review stages, not certified as an authored proof.
- No published defect was found in any supplier examined. Owner/operator reconciliation and
  the full engine gate follow construction, and Step 3 provides the independent mathematical
  review.
