# Batch 21 notes — `cm05-two-body-central-forces-and-gravitation` / `…-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-21, covers 21.
Step 1 complete initial authoring only; a readiness record is not independent
mathematical approval (Steps 2–3 review follows). Inputs read before
construction: `CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`,
`WORKFLOW.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
design record `research/plan-non-relativistic-classical-mechanics-track.md`
L556 (“Two-body, central forces and gravitation”), `research/plan-spec.json`,
the first-principles inventory
`research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/proposed-inventory.json`,
and the batch-dependency-levels file
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 21 is dependency level 5, requires batches 5 and 19; batches 1, 2, 9,
17, 18 and 19 are complete).

## Scope built

- A page `cm05-two-body-central-forces-and-gravitation` (order 121, category
  `non-relativistic-classical-mechanics`, `library: physics`), 10 items:
  1 local mathematical lemma (`lem-cm05-radial-potential-gradient`),
  6 physics theorems (`pthm-cm05-relative-reduction`,
  `pthm-cm05-plane-area`, `pthm-cm05-effective-potential`,
  `pthm-cm05-circular-orbit`, `pthm-cm05-conic`,
  `pthm-cm05-kepler-period`), 2 postulates
  (`post-cm05-central-model`, `post-cm05-gravity`) and 1 remark
  (`rem-cm05-collision-scope`).
- B page `cm05-two-body-central-forces-and-gravitation-examples`
  (order 122), 5 leaf items: 4 examples
  (`ex-cm05-gravitational-ellipse-and-period-check`,
  `ex-cm05-parabolic-and-hyperbolic-branch-check`,
  `ex-cm05-barycentric-orbits-check`,
  `ex-cm05-circular-orbit-frequency-check`) and 1 counterexample
  (`cex-cm05-external-force-breaks-relative-reduction`). Nothing outside the
  pair depends on these five.
- Page carriers
  `library/non-relativistic-classical-mechanics/cm05-two-body-central-forces-and-gravitation.md`
  and `…-examples.md` are nonempty and carry the item/`examples` lists,
  `requires`, order, kind, category, library and companion metadata. No
  `_pathway.md` is created here (closeout artifact).
- Design `contract_text` to delivered IDs: `cm05-relative-reduction` →
  `pthm-cm05-relative-reduction`; `cm05-central-model` →
  `post-cm05-central-model`; `cm05-plane-area` → `pthm-cm05-plane-area`;
  `cm05-effective-potential` → `pthm-cm05-effective-potential`;
  `cm05-circular-orbit` → `pthm-cm05-circular-orbit`; `cm05-gravity` →
  `post-cm05-gravity`; `cm05-conic` → `pthm-cm05-conic`;
  `cm05-kepler-period` → `pthm-cm05-kepler-period`; `cm05-collision-scope` →
  `rem-cm05-collision-scope`. Recorded additions relative to the design
  contract: the local lemma `lem-cm05-radial-potential-gradient` (the
  gradient/regularity of the radial potential is used by
  `post-cm05-central-model`, `pthm-cm05-relative-reduction` and every orbit
  item), the B-page barycentric and circular-frequency checks, and the B-page
  external-force counterexample. The design’s `B_and_sources` content
  (ellipse/parabola/hyperbola with nonzero angular momentum; collision and
  finite-size limitations; gravity-parameter uncertainty) is delivered by the
  four examples, the counterexample, `pthm-cm05-conic` and
  `rem-cm05-collision-scope`. The design’s provisional IDs (`cm05-*`) are
  placeholders; the delivered IDs use the run’s kind-prefix conventions, as
  in batches 17–20.

## Dependency graph, levels and construction order

Items were authored in prerequisite order, each item built once. Levels were
computed mechanically by `tools/physics-support/item-dependency-levels.mjs`
over the run manifests and recorded in the batch manifest; the check reports
**no finding for any of these 15 items**. In-run suppliers by batch:

| item | level | in-run supplier batches |
|---|---|---|
| `lem-cm05-radial-potential-gradient` | 0 | none (published mathematical imports only) |
| `pthm-cm05-relative-reduction` | 13 | 17 (worldlines, configuration, units); 18 (force model, interactions, flow); 19 (centre of mass/momenta, momentum balance); 5 (`def-cm-central-force-trajectory`); 2 (`lem-cm-derivative-of-pairings-of-curves`) |
| `post-cm05-central-model` | 14 | 17, 18, 5; plus the local reduction theorem |
| `pthm-cm05-plane-area` | 15 | 5 (angular-momentum conservation, polar reduction, oriented triads, central-force trajectory); 2 |
| `pthm-cm05-effective-potential` | 15 | 5 (polar reduction, oriented triads, central-force trajectory); 2 |
| `pthm-cm05-circular-orbit` | 15 | 5 (circular-orbit/radial-frequency theorem, central-force trajectory, oriented triads, second-order oscillator form) |
| `post-cm05-gravity` | 15 | 17 (units); 18 (force model, interactions) |
| `pthm-cm05-conic` | 16 | 5 (Binet equation, conic/eccentricity, ellipse geometry, orbit period, polar reduction, oriented triads, central-force trajectory) |
| `pthm-cm05-kepler-period` | 17 | 5 (orbit period, ellipse geometry, central-force trajectory) |
| `rem-cm05-collision-scope` | 18 | A-page items; 17, 18, 5 |
| `ex-cm05-gravitational-ellipse-and-period-check` (B) | 18 | A-page items; 5 |
| `ex-cm05-parabolic-and-hyperbolic-branch-check` (B) | 17 | A-page items; 5 |
| `ex-cm05-barycentric-orbits-check` (B) | 18 | A-page items; 5 |
| `ex-cm05-circular-orbit-frequency-check` (B) | 16 | A-page items; 5 |
| `cex-cm05-external-force-breaks-relative-reduction` (B) | 15 | A-page items; 17, 18, 19, 5, 2 |

Every in-run supplier was authored earlier in the run. No cycle, forward edge
or missing supplier was introduced. Published mathematical imports
(`def-interval`, `def-euclidean-inner-product`, `thm-chain-rule-for-total-derivatives`,
`cor-vector-valued-ftc-and-lipschitz-bound`, the ODE/norm/trig/natural-number
suppliers and so on) are read-only and do not raise in-run levels.

## Design versus plan-spec, and conflicts recorded

1. `research/plan-spec.json` records page `requires` for the A page as
   `[cm-math-central, cm03-momentum-work-and-energy-balances]` and for the B
   page as `[cm05-two-body-central-forces-and-gravitation]`. The authored
   carriers and batch manifest keep the B-page entry and declare the A page as
   `[cm-math-central, cm03-momentum-work-and-energy-balances,
   hilbert-space-geometry-and-riesz-representation,
   construction-of-the-natural-numbers]`. The two extra entries are forced by
   the item-level closure of `lem-cm05-radial-potential-gradient`: it depends
   on `cor-inner-product-induces-a-norm` (homed on
   `hilbert-space-geometry-and-riesz-representation`) and
   `thm-induction-principle` (homed on
   `construction-of-the-natural-numbers`). Without them `validate-plan`
   reports `undeclared-prereq` on the A page; with the carrier/manifest record
   no `cm05` finding remains (the run-wide invocation still fails on other
   batches’ unresolved prerequisites, below). The plan files are outside
   worker write scope and were not edited; this is a plan-metadata annotation
   difference, not a dependency defect.
2. The design’s published-supplier list names
   `cor-c-one-change-of-variables-for-l-one-functions`,
   `def-cross-product-in-r3`, `thm-chain-rule-for-total-derivatives` and
   `thm-euclidean-inverse-function-theorem`. Delivered uses:
   `def-cross-product-in-r3` (angular-momentum vector, cross-product rules)
   and `thm-chain-rule-for-total-derivatives` (radial composite and the
   potential gradient). `cor-c-one-change-of-variables-for-l-one-functions`
   is **not consumed**: the area-per-period computation uses the one-dimensional
   substitution theorem `thm-substitution` and the ellipse-area identity of
   `thm-cm-kepler-ellipse-geometry`. `thm-euclidean-inverse-function-theorem`
   is **not consumed**: the local radial lemma proves the derivative directly
   from the difference quotient and the chain rule, and no inverse-map
   argument is made. Disposition: unused planned suppliers, no coverage
   obligation created; the math originals were not edited.
3. The design’s `no_readiness_claim` and source inventories are preserved;
   the delivered page covers the promised orbit classification
   (circular/elliptic/parabolic/hyperbolic with nonzero angular momentum),
   the collision and radial exclusions, finite-size/point-particle limits, the
   measured gravity constant with its uncertainty, and the conditional status
   of the model. No promised claim was narrowed or omitted.

## Axiom-of-choice branches

- Choice-free items: `lem-cm05-radial-potential-gradient`,
  `pthm-cm05-relative-reduction`, `post-cm05-central-model`,
  `pthm-cm05-plane-area`, `pthm-cm05-effective-potential`,
  `pthm-cm05-circular-orbit`, `post-cm05-gravity`,
  `ex-cm05-circular-orbit-frequency-check` and
  `cex-cm05-external-force-breaks-relative-reduction`. Their arguments use
  finite sums, explicit constructions, the ODE/calculus suppliers and no
  arbitrary selection.
- Countable-choice assumption: `pthm-cm05-conic` and
  `pthm-cm05-kepler-period` state “Assume the Axiom of Countable Choice” and
  declare `def-countable-choice` as a `mathematical-premise`; the assumption
  is inherited by `ex-cm05-gravitational-ellipse-and-period-check`,
  `ex-cm05-parabolic-and-hyperbolic-branch-check`,
  `ex-cm05-barycentric-orbits-check` and the scope statements of
  `rem-cm05-collision-scope`, each of which declares the dependency and
  states the inheritance. No item consumes a recorded or unproved
  set-theory-beyond-choice item.

## Local closure, proof routes and recorded decisions

- Every claim is proved or sourced locally; no new cross-batch prerequisite
  pair was needed and no escalation was raised. The mathematical core is
  supplied by the in-run `cm-math-central` page (central-force trajectories,
  angular-momentum conservation, polar reduction, Binet/conic/eccentricity,
  ellipse geometry, orbit period, circular orbits and radial frequency) and
  by published read-only imports; the physical layer (force model,
  interactions, motions) by batches 17/18; the balances and centre-of-mass
  vocabulary by batch 19.
- The local lemma proves `∇(u∘|·|)(x)=u'(|x|)x/|x|` and the $C^k$
  regularity of the radial composite on the annulus by a difference-quotient
  estimate, the chain rule and induction. It is purely mathematical: all its
  dependencies are mathematical.
- `pthm-cm05-relative-reduction` proves the two-body reduction only for a
  force map presented through a static central pair potential with
  $F_i^{\mathrm{ext}}\equiv0$; it establishes the central antisymmetric pair
  forces, the affine centre of mass, the reduced equation with
  $\mu=m_1m_2/M$, and the reconstruction bijection. The B-page
  counterexample shows that vanishing total external force alone does not
  restore the reduction: with $u\equiv0$, $m_1=m_2=1$ and
  $F_1^{\mathrm{ext}}=\gamma=-F_2^{\mathrm{ext}}$, the explicit motion has
  $\mu r''=\gamma\ne0$ while the centre of mass remains affine. The
  counterexample declares `pthm-cm03-momentum-balance` as a
  `physical-result` dependency after `depcheck` flagged the statement’s
  contrast citation; this is the only dependency repair of the batch.
- `pthm-cm05-conic` applies the published Binet/conic theory to the
  gravitational relative trajectory, proves the unique critical point and
  the barrier bound by an explicit monotonicity estimate, and records the
  elliptic completeness/scaled barycentric conics; the parabolic and
  hyperbolic clauses assert only the conic formula and periapsis on the
  actual motion domain, with no asymptotics or scattering. The gravitational
  postulate keeps the coupling parameters $m_i^g$ distinct from the inertial
  masses; the identification $m_i^g=m_i$ is an explicitly adopted empirical
  assumption used only where stated (including the third-law simplification
  of `pthm-cm05-kepler-period` clause 2 and the declared-data examples).
- `post-cm05-gravity` records the CODATA 2022 recommended value
  $G=6.674\,30(15)\times10^{-11}\,\mathrm{m^3\,kg^{-1}\,s^{-2}}$ with
  relative standard uncertainty $2.2\times10^{-5}$, the expansion factor
  $3.9$ and the 16 mutually inconsistent input measurements, exactly as
  reported by the source. The B-page numerical checks use declared decimal
  model data and a declared value of $G_{\mathrm N}$, never the measured
  constant; all arithmetic is exact rational/decimal arithmetic and no
  observation or measurement is asserted.
- Numbered steps are single-line display-safe and use the canonical
  citation-layer scheme; examples use `## Verification`, the counterexample
  `## Counterexample`; all proof-format checks are clean.

## Sources, harvest and fetch verification

- Coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-21.coverage.json`
  records 7 fetch-verified source entries across the two pages (A: Tong
  Classical Dynamics, Likharev Essential Graduate Physics CM, Stewart MIT
  8.09/8.309, CODATA 2022; B: Likharev, Tong, Stewart) with locators and
  per-result dispositions (`included`, `inline`, or `out-of-scope` with a
  reason). Every harvested result has a disposition; two or more independent
  treatments appear on each page, including full book/course-note
  treatments.
- `source-fetch-check.mjs --coverage …` (check mode):
  **7/7 source(s) fetch-verified, 0 documented drops**; the fetch stamps
  (bytes, page counts and sha256-16 values) are recorded in the coverage
  file. No retrieval failure or source-recovery retry was needed, so no
  `source_resolution` drop or owner escalation was required.
- The out-of-scope dispositions include Tong’s Lagrangian substitution
  warning (the page stays in the Newtonian force branch), Likharev’s general
  non-Coulomb precession discussion and the elastic-scattering section
  (scattering belongs to the later cm15 page). The design-named unused
  suppliers are recorded in the conflicts section above.

## Checks actually run (on the final carriers)

- `precheck.mts` on all 15 items: **14 checked, 0 failing** (the remark has
  no phase body).
- `proof-layout.mjs` on all 15 items and 2 page carriers: **17 items,
  52 steps, 0 defects**.
- `rendercheck.mjs` on all 15 items and 2 page carriers: **17 files, OK**
  (YAML, KaTeX, wikilink/math nesting, no multiline display blocks).
- `content-policy.mjs` (batch manifest): **15 scoped items, 0 errors,
  0 warnings**.
- `manifest-deps.mjs`: **15 items, 0 errors**; `manifest-integrity.mjs
  --run …`: **158 pages owed, 158 in the manifests, no scope drift**.
- `coverage-checklist.mjs`: **2 pages, 32 harvested results, 0 errors,
  0 warnings**.
- `proof-contract.mjs --strict`: **15/15 items, 0 errors, 0 warnings**;
  `citation-fidelity.mjs --fail-on-missing-quote`: **142 citations over 15
  authored items, every recorded quote found, no widening candidates**.
  `proof-contract-coverage.mjs` against an overlay root whose only current
  manifest is this batch’s: **15 items, 12/12 supplied arguments covered**.
- `item-dependency-levels.mjs check --run …`: **0 findings for the 15 cm05
  items**; the run-wide report still has empty-scaffold errors for other
  batches (open finding 1 below).
- `validate-plan.mjs research/plan-spec.json --run …`: run-wide exit 1 on
  other batches’ unresolved prerequisites; **no `cm05` finding remains**
  after the two page-`requires` additions (the pages appear at orders 121
  and 122 with the intended requires).
- `depcheck.mjs` (whole repository): **0 findings attributable to batch 21**
  after the recorded dependency repair; `fwdcheck.mjs`: no open forward
  reference, and the 15 cm05 items are marked “inherited” only through
  published mathematical suppliers’ pre-existing forward edges;
  `extcheck.mjs`: **0 recorded-not-proved items, 0 resting on them**.
- Batch-scoped `validatePhysicsContent` (overlay root, 15 items selected,
  import-receipt verification excluded because of the run-level drift in open
  finding 1): **0 errors, 15 items checked**.
- `frontier-dependency-ledger.mjs refresh --run …`: batch-21 input has
  **66 reviewed edges (64 item + 2 page), all status `verified`**, and the
  refreshed unified ledger shows **no unreviewed batch-21 edge**.

## Post-check repairs (before readiness; recorded)

1. `depcheck` reported
   `[cited-not-in-deps] cex-cm05-external-force-breaks-relative-reduction:
   cites "pthm-cm03-momentum-balance" in Statement/Facts but it is not in
   deps`. The counterexample uses the momentum-balance contrast in its
   statement and final step; `pthm-cm03-momentum-balance` was added to
   `deps` with role `physical-result`, the cross-batch edge was regenerated,
   and the finding is gone. No statement or proof step changed.
2. `rendercheck` reported four multiline display blocks in
   `pthm-cm05-relative-reduction` (the tuple definitions and the three
   statement displays). The displays were joined onto single source lines;
   `rendercheck` is clean.
3. Two `nonproof-derivation` findings were fixed in
   `post-cm05-central-model` (`pthm-cm05-relative-reduction`:
   `physical-result` → `formulation-prerequisite`) and `post-cm05-gravity`
   (`post-cm02-interactions`: `physical-assumption` →
   `formulation-prerequisite`), restoring the postulate rule that nonproof
   kinds use operational/formulation prerequisites.
4. `rem-cm05-collision-scope` was reworded to remove a load-bearing mention of
   the batch-5 B-page item `cex-cm-radial-kepler-collision` (a B-page item
   cannot be another page’s dependency); the radial exclusion is now stated
   without that unregistered cross-page citation.
5. Missing countable-choice qualifications were added to the three
   choice-using examples (`ex-cm05-gravitational-ellipse-and-period-check`,
   `ex-cm05-parabolic-and-hyperbolic-branch-check`,
   `ex-cm05-barycentric-orbits-check`) and `rem-cm05-collision-scope`:
   `def-countable-choice` is declared with role `mathematical-premise`, the
   examples state the assumption explicitly and cite it at the step where the
   conic/period formulas are used, and the remark records the inherited
   assumption.
6. `pthm-cm05-kepler-period` clause 1 now says explicitly that the relative
   motion extends to $\mathbb R$ and that $\theta$ is the polar angle of that
   extension, and its area step applies the area law to the extended motion.
   No mathematical claim changed.
7. The manifest was regenerated from the final item frontmatter and page
   carrier after these repairs (statements, deps, roles, sources, levels and
   requires are current); the proof contracts were regenerated from the final
   item bodies.

## Readiness records

All 15 items are recorded `ready` — never `--owner`, no escalation
overwritten — **after** the final item and page carriers, with complete
carriers, met prerequisites examined at statement/proof level, adequate page
placement and the current proof contract in place. Each record carries the
item’s exact frontmatter `deps` array and the engine’s item-hash binding,
which includes the transitive input closure; the manifest was re-emitted
immediately before recording, so the input hashes are current.
`step1-decisions check --run …` reports no work item for any of the 15 cm05
items; the run-wide report still shows other batches’ open work.

## Open findings for the owner (none attributable to batch 21)

1. Run-level `physics-check` aborts before scoping on another batch’s
   pre-authoring empty inventory
   (`physics-cm-qm-gr-79-2026-10-11-batch-23.pages.json`: “Invalid or empty
   current page”). During earlier invocations the import-receipt verification
   also reported a mathematics-source drift for `items/def-integer-power.md`
   and `items/def-finite-sum.md` (the pinned physics snapshots match the
   receipt; the source originals under `../items/` did not at those times).
   Both blockers are outside batch 21’s write scope; the batch-scoped
   content validation excluding import-receipt verification is clean.
   `item-dependency-levels` and `proof-contract-coverage` have the same class
   of run-wide aborts/findings on other batches’ empty inventories
   (`cm07`–`cm17`, several `qm-*` and `gr-*` pages); the batch-21 overlay
   checks are clean.
2. Run-wide `validate-plan` exits 1 on other batches’ unresolved or
   undeclared prerequisites (for example `gr-einstein-and-matter`,
   `qm-math-controlled-dynamics`, `cm04-one-dimensional-conservative-and-dissipative-models`);
   no `cm05` finding remains.
3. Run-wide `depcheck` exits 1 on other batches’ published-unaudited items
   (thousands of repository-wide records) and `fwdcheck` exits 1 with 13,004
   inherited later-material markers; no batch-21 item creates an open
   forward edge, and no batch-21 finding remains.
4. The unified frontier ledger carries 5 orphaned reviews owned by batches
   34 and 43 (page/item consumers outside batch 21’s ownership); batch-21’s
   66 edges are all reviewed and current.
5. No published defect in a batch-21 actual prerequisite was found, and no
   missing local prerequisite remains. This handoff is Step-1 initial
   authoring evidence only; owner/operator reconciliation and the full engine
   gate follow, and Steps 2–3 provide the independent review.
