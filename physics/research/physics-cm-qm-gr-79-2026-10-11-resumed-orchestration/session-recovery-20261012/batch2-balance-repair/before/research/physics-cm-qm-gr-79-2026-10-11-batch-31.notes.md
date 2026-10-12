# Batch 31 notes — `cm15-scattering-and-impulse-model-boundaries` / `…-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-31, covers 31.
Step 1 complete initial authoring only; a readiness record is not independent
mathematical approval (Steps 2–3 review follows). Inputs read before
construction: `CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`,
`WORKFLOW.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
design record `research/plan-non-relativistic-classical-mechanics-track.md`
L857 (“Scattering and impulse model boundaries”), `research/plan-spec.json`,
the first-principles inventory
`research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/proposed-inventory.json`,
the batch-dependency-levels file
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 31 is dependency level 6, requires batches 1, 2, 5, 8, 17, 18, 19 and
21, all complete), and the owner-directed CM15 source repair
and the owner-directed CM15 source repair
`research/physics-cm-qm-gr-79-2026-10-11-cm15-source-repair/{report,provenance,claim-map}.md`,
read in full before constructing any item.

## Scope built

- A page `cm15-scattering-and-impulse-model-boundaries` (order 141, category
  `non-relativistic-classical-mechanics`, `library: physics`), 8 items:
  2 physical definitions (`def-cm15-asymptotic-data`, `def-cm15-cross-section`),
  4 physics theorems (`pthm-cm15-central-scattering`,
  `pthm-cm15-rutherford-model`, `pthm-cm15-impact-balance`,
  `pthm-cm15-control-volume-balance`), 1 postulate (`post-cm15-impulse`) and
  1 remark (`rem-cm15-model-boundaries`, carrying
  `forward_refs: [cex-cm15-deflection-need-not-decrease]`).
- B page `cm15-scattering-and-impulse-model-boundaries-examples` (order 142),
  8 leaf items: 5 examples (`ex-cm15-hard-sphere-reflection-check`,
  `ex-cm15-rutherford-cutoff-check`, `ex-cm15-impact-check`,
  `ex-cm15-rocket-check`, `ex-cm15-control-volume-check`) and 3
  counterexamples (`cex-cm15-deflection-need-not-decrease`,
  `cex-cm15-restitution-above-one-increases-energy`,
  `cex-cm15-momentum-alone-does-not-fix-the-impact`). Nothing outside the pair
  depends on these eight.
- Page carriers
  `library/non-relativistic-classical-mechanics/cm15-scattering-and-impulse-model-boundaries.md`
  and `…-examples.md` are nonempty and carry the item/`examples` lists,
  `requires`, order, kind, category, library and companion metadata. No
  `_pathway.md` is created here (closeout artifact).
- Design `contract_text` to delivered IDs: `cm15-asymptotic-data` →
  `def-cm15-asymptotic-data`; `cm15-cross-section` → `def-cm15-cross-section`;
  `cm15-central-scattering` → `pthm-cm15-central-scattering`;
  `cm15-rutherford-model` → `pthm-cm15-rutherford-model`;
  `cm15-impulse` → `post-cm15-impulse`; `cm15-impact-balance` →
  `pthm-cm15-impact-balance`; `cm15-control-volume-balance` →
  `pthm-cm15-control-volume-balance`. The design’s provisional IDs are
  placeholders; the delivered IDs use the run’s kind-prefix conventions.
- The design’s local mathematical proof sections E10, E11 and E13 are
  **already published in this run** and are consumed as mathematical
  suppliers, not re-authored: E10 on `cm-math-central` (batch 5:
  `def-cm-scattering-data`, `thm-cm-scattering-turning-point-and-global-branches`,
  `thm-cm-scattering-asymptotic-velocities-and-impact-parameter`,
  `thm-cm-scattering-angle-advance`, `thm-cm-differential-cross-section-density`,
  `thm-cm-coulomb-scattering`, `thm-cm-rutherford-cross-section`); E11 on
  `cm-math-balances` (batch 2: `thm-cm-impulse-restitution-and-energy-loss`,
  `thm-cm-variable-mass-momentum-balance`); E13 on `cm-math-continuum`
  (batch 8: `thm-cm-local-mass-balance`, `thm-cm-local-momentum-balance`,
  `thm-cm-control-volume-balance`). Batch 31 therefore authors the physics
  reading (definitions, postulate, four physics theorems, remark, examples and
  counterexamples) on top of those carriers; the mathematical core is supplied
  by the published in-run items with their own hypotheses and choice
  assumptions preserved.
- Design `B_and_sources` content delivered: the hard-collision and open-mass
  flow boundaries by the hard-sphere and rocket/control-volume examples and the
  deflection and restitution counterexamples; the “derived area map with
  specified flux/preparation” by `def-cm15-cross-section`,
  `pthm-cm15-central-scattering` and the Rutherford cutoff example.

## Dependency graph, levels and construction order

Items were authored in prerequisite order, suppliers before consumers. Levels
were computed mechanically by `tools/physics-support/item-dependency-levels.mjs`
over the run manifests and recorded in the batch manifest; the check reports
**no finding for any of the 16 cm15 items** (the run-wide report still has
empty-scaffold errors for other batches, below).

| item | level | in-run supplier batches |
|---|---|---|
| `def-cm15-asymptotic-data` | 15 | 5 (scattering data, central trajectory, polar/angular suppliers); 17 (worldlines, units, configuration); 19 (centre of mass); 21 (central model, relative reduction) |
| `def-cm15-cross-section` | 16 | 5 (cross-section density, scattering data); 17 (units) |
| `pthm-cm15-central-scattering` | 17 | 5, 17, 18, 19, 21; plus the local definitions |
| `pthm-cm15-rutherford-model` | 18 | 5, 17, 21; plus the local definitions |
| `post-cm15-impulse` | 11 | 2 (impulse and variable-mass theorems), 17, 18, 19 |
| `pthm-cm15-impact-balance` | 12 | 2, 17, 18, 19; plus `post-cm15-impulse` |
| `pthm-cm15-control-volume-balance` | 12 | 1 (`def-cm-traction-and-stress`), 2, 8, 17, 19 |
| `rem-cm15-model-boundaries` | 19 | 17, 21; plus the A page |
| `ex-cm15-hard-sphere-reflection-check` (B) | 18 | 5, 17; plus the A page |
| `ex-cm15-rutherford-cutoff-check` (B) | 19 | 5, 17; plus the A page |
| `cex-cm15-deflection-need-not-decrease` (B) | 18 | 5, 17; plus the A page |
| `ex-cm15-impact-check` (B) | 13 | 2, 17, 19; plus the A page |
| `ex-cm15-rocket-check` (B) | 13 | 2, 17; plus the A page |
| `cex-cm15-restitution-above-one-increases-energy` (B) | 15 | 2, 17, 19, 21; plus the A page |
| `cex-cm15-momentum-alone-does-not-fix-the-impact` (B) | 13 | 2, 17, 19; plus the A page |
| `ex-cm15-control-volume-check` (B) | 13 | 2, 8, 17; plus the A page |

Every in-run supplier was authored earlier in the run. No cycle, forward edge
or missing supplier was introduced. Published mathematical imports
(`def-interval`, `def-euclidean-inner-product`, the trigonometric, integral,
ODE and surface-integration suppliers, and so on) are read-only and do not
raise in-run levels.

## Design versus plan-spec, and conflicts recorded

1. **Page `requires`.** `research/plan-spec.json` records the A page as
   `requires: [cm-math-continuum, cm05-two-body-central-forces-and-gravitation]`
   and the B page as `requires: [cm15-scattering-and-impulse-model-boundaries]`.
   The carriers and batch manifest initially declared a redundant superset
   (A: seven entries; B: five). `validate-plan` flagged those as
   `redundant-prereq` warnings. The carriers and manifest were trimmed to the
   plan’s transitive reduction; the closure is unchanged, and re-running
   `validate-plan` leaves **no cm15 finding** (the two cm15 table lines carry
   the intended requires; the run-wide exit is other batches’ errors). This
   removes the annotation difference in favour of the plan.
2. **Design published suppliers.** The design names three published canonical
   mathematical suppliers. `def-countable-choice` is consumed: it is declared
   by `pthm-cm15-impact-balance` and `pthm-cm15-control-volume-balance`, whose
   statements assume ACω, and by the control-volume example as [A1].
   `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` is consumed by
   `pthm-cm15-control-volume-balance` (fact L2, cited at steps 2.1, 3.1, 5.1).
   `cor-c-one-change-of-variables-for-l-one-functions` is **not consumed**: the
   scattering and impulse items need no change-of-variables formula at that
   generality (the only Jacobian pushforward is the one-dimensional branch
   substitution supplied by `thm-cm-differential-cross-section-density`).
   Disposition: unused planned supplier, no coverage obligation created; the
   mathematical originals were not edited.
3. **CM15 source-repair integration.** The owner-directed repair closed the
   second-scattering-source hold with the independent complete UT Austin
   Fitzpatrick §§6.4–6.5 treatment. That treatment is the second treatment on
   both pages here; its recorded limitations are preserved: no general
   monotonicity of the scattering angle is attributed to it (the counterexample
   `cex-cm15-deflection-need-not-decrease` exhibits a contact model where
   monotonicity fails), uniform incident flux is an **adopted preparation**,
   the area density is a model pushforward and not measured event data, the
   ideal total cross-section diverges and finite angular acceptance cuts it
   off, hard-wall scattering is a **separate contact rule** outside the C²
   finite-range theorem, Coulomb motion is not claimed to approach a line with
   a finite longitudinal intercept, and laboratory and relative/centre-of-mass
   angular distributions are kept distinct. Fitzpatrick is not claimed as a
   source for the general impulse/restitution or moving-control-volume
   formulation; E11/E13 remain the retained local mathematical suppliers, and
   no measured result is attributed to any of these sources.
4. **Scope preserved.** The delivered page keeps every promised claim: model
   data and reduction; finite-range branch/asymptotic scattering with
   $b=J/\sqrt{2\mu E}$ and $\Delta$ with deflection $\pi-2\Delta$;
   cross-section as derived area map under a specified flux and preparation;
   repulsive Coulomb scattering with the Rutherford density, finite angular
   cutoffs and divergent ideal total; the adopted isolated impulse,
   restitution and open-mass extensions (not smooth-particle laws); the
   smooth moving-control-region balance; and the explicit exclusions
   (attractive/capture, screening, radiation, inelastic, relativistic,
   quantum; no identification of $\kappa$ with an electromagnetic coupling).
   Nothing was narrowed to pass a check.

## Axiom-of-choice branches

- Choice-free items: `def-cm15-asymptotic-data`, `def-cm15-cross-section`,
  `pthm-cm15-central-scattering`, `pthm-cm15-rutherford-model`,
  `post-cm15-impulse`, `rem-cm15-model-boundaries`, all five examples and the
  three counterexamples. Their arguments use fixed data, explicit
  constructions, finite sums and the calculus/trigonometric suppliers, with no
  arbitrary selection; the four impact-family B items use only the algebraic
  clauses that `pthm-cm15-impact-balance` records as “not otherwise using
  choice” (its Statement), so they declare no choice assumption.
- Countable-choice assumption: `pthm-cm15-impact-balance` and
  `pthm-cm15-control-volume-balance` state “Assume the Axiom of Countable
  Choice” and declare `def-countable-choice` as a `mathematical-premise`,
  inherited respectively from the distributional jump lemma of
  `thm-cm-impulse-restitution-and-energy-loss` and from the transport/divergence
  theorems. `ex-cm15-control-volume-check` inherits it explicitly as fact [A1]
  (linked in its Given, declared in `deps`, and carried at step 1.1) because its
  premises include those choice-using control-volume statements; its own
  elementary verifications use no further choice.
- No item consumes a recorded or unproved set-theory-beyond-choice item, and no
  incompatible-axiom branch is created.

## Local closure, proof routes and recorded decisions

- Every claim is proved or sourced locally; no new cross-batch prerequisite
  pair was needed and no escalation was raised.
- `def-cm15-asymptotic-data` fixes the restricted model class, the scattering
  motion, energy and angular momentum, asymptotic velocities, the impact
  parameter as perpendicular distance, the polar advance and deflection
  conventions, the **adopted** uniform-incident preparation with flux and
  units, and the relative-frame reading conventions with explicit exclusions.
  Nothing in it asserts an observation or a measured value.
- `def-cm15-cross-section` fixes the differential cross-section of a
  deflection branch as the area-pushforward density
  $b(\theta)|b'(\theta)|/\sin\theta$, branch sums, truncated totals via
  improper integrals, and the empirical qualifications of the
  uniform-incident reading (not a probability per label, not a count, needs a
  separately specified experiment; finite samples fluctuate).
- `pthm-cm15-central-scattering` transfers the published finite-range
  scattering theorems to the two-label model through the relative-reduction
  bijection, and derives the branch cross-section and expected uniform-incident
  rate; its clause 5 states that no monotonicity, injectivity or completeness
  of the deflection map is claimed. `pthm-cm15-rutherford-model` obtains the
  global non-colliding repulsive-Coulomb motion, the $C^1$ decreasing
  bijection $2\arctan(\kappa/(2Eb))$, the density
  $(\kappa/(4E))^2\csc^4(\theta/2)$, the finite band values and the divergent
  ideal total; $\kappa$ stays a model datum with $[\kappa]=\mathsf M\ell^3\tau^{-2}$
  and is not identified with any electromagnetic quantity.
- `post-cm15-impulse` adopts the isolated reciprocal impulse model, the
  collinear restitution law with $0\le e\le1$, and the open-body material
  accounting, each as an explicit model extension. `pthm-cm15-impact-balance`
  proves momentum continuity, the smooth-force exclusion ($J=0$ on the smooth
  branch, so the jump model is a genuine extension), the restitution solution,
  the dissipative energy formula, the underdetermination of the impact by
  momentum balance alone, and the open-body/rocket laws.
  `pthm-cm15-control-volume-balance` localises the adopted material balances
  and proves the moving-control-region identities (CV1)–(CV2), the material
  and fixed special cases, and the inlet/outlet lumped law; it asserts no
  constitutive law, boundary condition or incompressibility.
- B-page items: the hard-sphere reflection example computes the branch
  $b=a\cos(\theta/2)$, the constant density $a^2/4$ and the finite total
  $\pi a^2$, and records that this is a **contact model** outside the C²
  finite-range theorem (so the finite total neither contradicts nor tests the
  Coulomb forward divergence); the Rutherford cutoff example substitutes
  declared SI data and shows the truncated totals growing without bound as the
  acceptance reaches forward angles; the impact example computes the elastic,
  semi-elastic and sticking outcomes; the rocket example exhibits an open body
  whose closed-system law fails; the control-volume example verifies the
  identities on a fixed and a material ball and works the ideal elbow. The
  counterexamples: a refracting-shell contact rule whose deflection increases
  and then jumps to zero (so smooth $C^2$ hypotheses do real work); a
  superelastic rule with $e=2$ that raises the mechanical energy across the
  impact (so the adopted $0\le e\le1$ restriction is not a theorem of
  momentum); and two admissible impact outcomes with the same momentum data
  and different impulses (so a contact law is independent model data).
- No item reports a measurement, uncertainty or counting of detections; all
  numbers are declared model data. The $\approx$ decimals in the two finite
  checks were replaced by exact rational/surd expressions so that every
  numbered step carries only mathematical content (see post-check repairs).

## Sources, harvest and fetch verification

- Coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-31.coverage.json`
  records 20 fetch-verified source entries over 11 distinct works (A page:
  Fitzpatrick §6.4, §6.5 and “Non-Isolated Systems”; Likharev §3.5; Moore
  §11.4; MIT 16.07 L14; Tong §1.2; Abeyaratne §§3.7/4.4; Barsukow §§1.1–1.3.
  B page: the same set plus Moore §§11.5 and 11.7), every one with a locator
  and per-result dispositions (`included`, `inline`, or `out-of-scope` with a
  written reason). Each page has at least two independent treatments,
  including full book/course-note treatments (Likharev’s textbook and the
  Fitzpatrick sections alongside the other lecture notes).
- `source-fetch-check.mjs --stamp`: **20/20 source(s) fetch-verified, 0
  documented drops** (Likharev 252 pages, Tong 139, Abeyaratne 430, Barsukow
  98, MIT L14 12, plus the HTML sections; stamps with byte counts and
  sha256-16 are recorded in the coverage file). Check mode after stamping:
  **20/20 resolved**. No retrieval failure or source-recovery retry was
  needed, so no `source_resolution` drop or owner escalation was required.
- The out-of-scope dispositions are specific: Fitzpatrick’s shielding-distance
  claim (not justified; the ideal total diverges and the page uses finite
  acceptance), the quantum/inelastic/radiation caveats (outside the mechanical
  model class), and the laboratory-frame special cases (the page claims no
  lab-frame angular distribution). The design-named unused supplier is
  recorded in the conflicts section above.

## Checks actually run (on the final carriers)

- `precheck.mts` on all 16 items: **13 checked, 0 failing — all clean** (the
  definitions, postulate and remark have no phase body).
- `proof-layout.mjs` on all 16 items and 2 page carriers: **18 items, 73 steps,
  0 defects**.
- `rendercheck.mjs` on all 16 items and 2 page carriers: **18 files, OK**
  (re-run on the two page carriers after the `requires` trim: clean).
- `content-policy.mjs` (batch manifest): **16 scoped items, 0 errors,
  0 warnings**.
- `manifest-deps.mjs`: **16 items, 0 normalized, 0 errors**;
  `manifest-integrity.mjs --run …`: **158 pages owed, 158 in the manifests, no
  scope drift**.
- `proof-contract.mjs --strict` on
  `research/physics-cm-qm-gr-79-2026-10-11-batch-31.proof-contracts.json`:
  **0 errors, 0 warnings, 12/12 items checked** (the 12 proof-bearing items;
  every fact-source pair carries a verbatim quote and step mapping, every step
  has a derivation entry with stated inputs, all eight boundary cases are
  dispositioned).
- `citation-fidelity.mjs --fail-on-missing-quote`: **141 citations over 12
  authored items; every recorded quote found; no widening candidates**.
- `proof-contract-coverage.mjs` against an overlay root whose only run
  manifest is this batch’s: **16 items, 12/12 supplied arguments covered**.
- Batch-scoped `physics-check.mjs` (overlay root; import-receipt verification
  runs against the pinned snapshots): **physics-content: 0 errors, 16 items
  checked**.
- `coverage-checklist.mjs`: **2 pages, 50 harvested results, 0 errors,
  0 warnings**.
- `item-dependency-levels.mjs check --run …`: **no cm15 finding**; the
  run-wide report still shows other batches’ empty-scaffold errors (74 in
  total, all outside batch 31).
- `validate-plan.mjs research/plan-spec.json --run …`: run-wide exit 1 on
  other batches’ errors; after the `requires` trim **no cm15 warning or error
  remains**, and the cm15 rows show the intended transitive reduction.
- `depcheck.mjs --items-file /tmp/items31.json`: **OK — selected item/page
  checks and prerequisite cycle checks passed**; the repo-wide invocation
  exits 1 on other items’ findings, none attributable to batch 31.
- `fwdcheck.mjs`: **0 open forward references** (371 closed, 56 load bearing
  repo-wide); the 16 cm15 items are “inherited” through published suppliers’
  pre-existing forward edges, and `rem-cm15-model-boundaries` is “direct” with
  its declared forward reference closed by the B-page companion; the run-wide
  exit 1 is other items’ `forward-undeclared` findings.
- `extcheck.mjs`: **28 003 items, 0 recorded-not-proved, 0 resting on them**;
  no cm15 item rests on unproved material.
- `pathcheck.mjs`: **18 pathway files checked, 3 errors, 22 warnings**, all in
  other categories’ pathway files; the `non-relativistic-classical-mechanics`
  category has no `_pathway.md` finding (correctly not created at Step 1).
- `frontier-dependency-ledger.mjs refresh --run …`: the batch-31 input has
  **97 reviewed edges (95 item + 2 page), all status `verified`**, and the
  refreshed unified ledger lists batch 31 among the reviewed batches with no
  unreviewed or orphaned batch-31 edge.
- Not run at Step 1: `level-coverage.mjs` and the full engine closeout gate,
  which require judge ledgers, audit receipts and owner/operator
  reconciliation that do not exist before Steps 2–3.

## Post-check repairs (before readiness; recorded)

1. `pthm-cm15-rutherford-model` step 6.1 said “steps 1.1-3.2”, but the item’s
   steps are 1.1–6.1; corrected to “steps 1.1-5.1”. The stray token would also
   have made the proof contract’s step mapping unsatisfiable. No mathematical
   claim changed.
2. `ex-cm15-control-volume-check` carried decimal numerals in proof steps
   ($0.4$, $1.25664$, $0.1$, $1.6$, $3.2$, $63.43$, $3.578$). Decimal tokens
   collide with the proof-contract step grammar, and the exact values are
   cleaner: the flux and force magnitudes were rewritten as exact rationals
   and surds ($2/5\ \mathrm{kg\,s^{-1}}$; $\frac{8\sqrt5}{5}\ \mathrm N$ at
   angle $-\arctan 2$), and the redundant decimal restatements were dropped.
   The declared data and all claims are unchanged.
3. `ex-cm15-control-volume-check` consumes the ACω-assuming transport and
   divergence statements; it now states the inherited Axiom of Countable
   Choice as [A1] (linked, declared in `deps` with role
   `mathematical-premise`, carried at step 1.1), and its manifest record was
   updated (dependency list, roles, and the physical scope, which also now
   quotes the exact flux and force values).
4. Page `requires` were trimmed to the plan’s transitive reduction and the
   batch manifest was updated to match (see conflicts section). The cross-batch
   dependency file was regenerated after the trim, and the unified ledger was
   refreshed; all 97 batch-31 edges remain verified.
5. The manifest’s item records were re-checked against every item’s
   frontmatter `deps`/`dependency_roles` after these repairs: **0 mismatches**.
   The proof contracts were generated from the final item bodies, so their
   quotes, step numbers and inputs are current.

## Readiness records

All 16 items are recorded `ready` — never `--owner`, no escalation overwritten
— **after** the final item and page carriers, with complete carriers, met
prerequisites examined at statement/proof level, adequate page placement and
the current proof contract in place. Each record carries the item’s exact
frontmatter `deps` array and the engine’s item-hash binding, which includes the
transitive input closure; no item file was edited after the records were
written, so the hashes are current. `step1-decisions check --run …` reports
**0 work items for the 16 cm15 items** (16 ready of 846 run-wide; the
remaining 113 work rows are other batches’ empty scaffold inventories). The
readiness records are Step-1 authoring dispositions, not independent
mathematical approval.

## Open findings for the owner (none attributable to batch 31)

1. Run-level failures caused by other batches: `item-dependency-levels` (74
   empty-scaffold errors for cm08–cm17 and several `qm-*`/`gr-*` pages),
   `validate-plan` (other pages’ unresolved or undeclared prerequisites, e.g.
   `qm-math-fock-and-equilibrium-examples`), `fwdcheck` (other items’
   `forward-undeclared` links), `depcheck` (repo-wide FAIL on other items), and
   `pathcheck` (3 foreign-page errors in the `abstract-algebra` and
   `combinatorics` pathway files). None names a cm15 item or page.
2. No published defect in a batch-31 actual prerequisite was found. One
   observation for the canonical ledger is recorded without a repair claim:
   the draft in-run mathematics example
   `ex-cm-balances-impulse-and-rocket-checks` (batch 2) cites
   `thm-cm-impulse-restitution-and-energy-loss`, whose statement assumes ACω,
   without restating that assumption. The batch-31 physics items avoid that
   gap explicitly (see the choice section); the batch-2 item is outside this
   batch’s write scope, so it is reported for owner/reviewer awareness only.
   `post-cm15-impulse` similarly points at the distributional rendering
   theorem in a remark without restating ACω; the postulate’s own content is
   choice-free, and the pointer is not load-bearing for any proof step of this
   batch.
3. This handoff is Step-1 initial authoring evidence only; owner/operator
   reconciliation and the full engine gate follow construction, and Steps 2–3
   provide the independent review.
