# Step 3b — A/B pair `em-energy-momentum-and-angular-balance` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role alpha-high, batch 32, dispatch
`54780bb6c69f0368`, 2026-10-09. Owned A page order 343
(`em-energy-momentum-and-angular-balance`), B page order 344
(`em-energy-momentum-and-angular-balance-examples`), category
`classical-electromagnetism`, library `physics`.

## Owned item IDs (authoring order)

- Level 9: `def-em-vacuum-energy-flux`
- Level 10: `def-em-vacuum-stress-momentum`
- Level 18: `pthm-em-poynting-balance`, `pthm-em-momentum-balance`
- Level 19: `pthm-em-angular-balance`; B page `ex-em-vacuum-energy-flow-example`
- Level 20: `pthm-em-coupled-total-conservation`

Entry state: an earlier attempt of this dispatch had left this report file and
`def-em-vacuum-energy-flux` only; the other six items had no carriers and the
two page files did not exist. The run was paused with no writer in flight, so
this dispatch continued the pair rather than colliding with a sibling writer.

## Inputs read at entry

`CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`, `README.md`,
`WORKFLOW.md`, the owner authoring direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`,
`batch-32.pages.json` / `.coverage.json` / `.notes.md` /
`.cross-batch-dependencies.json`, the Step-3a review
`research/physics-em-sr-40-2026-10-08-step3a-pair-em-energy-momentum-and-angular-balance.md`
and its receipt, the plan entries 343/344, the design carriers
`definition-contracts.md` (L117-123), `core-conditional-proofs.md` (K7),
`worked-example-verifications.md` (X6), the authored in-run suppliers
`def-em-lab-geometry`, `def-em-si-conventions`, `def-em-fields`,
`def-em-sources`, `post-em-vacuum-maxwell`, `post-em-lorentz-coupling`,
`lem-em-parameter-integrals`, `lem-em-quadratic-stress-identity`,
`def-em-complex-plane-wave`, and the published mathematical suppliers used by
the items (their exact Statements/Definitions were read, not inferred from
titles: `lem-the-divergence-and-curl-of-a-cross-product`,
`thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
`def-bounded-piecewise-c-one-euclidean-domain`,
`thm-ck-euclidean-maps-closed-under-algebra-and-composition`,
`thm-graphs-of-continuous-functions-have-content-zero`,
`cor-integral-over-a-null-set-vanishes`, `cor-zero-derivative-implies-constant`,
the total-derivative page items, the complex-exponential and
complex-differentiability items, `thm-ftc-second-part`,
`thm-riemann-fubini-on-product-rectangles`,
`def-multidimensional-rectangle-and-volume`,
`thm-multidimensional-integral-properties`,
`def-oriented-unit-normal-and-flux-of-a-surface-patch`).

## Scaffold audit and repairs (recorded, not silent)

- **Out-of-closure supplier in the scaffold.** The scaffold of
  `def-em-vacuum-energy-flux` named
  `thm-chain-sum-product-and-composition-rules-for-banach-derivatives` for the
  C^k claim; its home page (`functional-analysis/...`) is not in the page's
  declared `requires` closure. The authored item uses the exact Euclidean
  closure statement
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition` (home
  `the-inverse-function-theorem-completed`), which is in the closure and
  states precisely that finite componentwise sums and products of C^k
  Euclidean maps are C^k and composites of composable C^k maps are C^k.
- **Missing formulation supplier.** Both definitions use the chart, frame
  basis and Euclidean spatial structure of `def-em-lab-geometry` in their
  statements but the scaffold deps omitted it; it was added (level 6, below
  both items, so the recorded levels 9 and 10 are unchanged).
- **Under-specified matter regularity in the coupled theorem.** The scaffold
  statement left the regularity of the matter fields implicit; the authored
  hypothesis states explicitly that u_m, S_m, g_m are of class C^1 and Pi_m
  symmetric C^1, which is what makes every displayed derivative and the
  angular lemma application well posed. The promised conclusions are
  unchanged.
- **Fixed-volume boundary conventions.** The fixed-volume clauses use the
  published divergence theorem on finite piecewise C^1 presentations; the
  authored proofs record the Lebesgue-nullity of the boundary
  (`thm-graphs-of-continuous-functions-have-content-zero` and
  `cor-integral-over-a-null-set-vanishes`) so that the compact-parameter
  differentiation over the closure computes the derivative of the integral
  over the open domain.
- **Example regularity.** The example's C^infinity claim is proved by an
  explicit induction on derivative order using the exponential's complex
  differentiability, the chain rule and the C^k closure, and the face fluxes
  are computed from the patch-flux definition and the constant-integral rule,
  rather than being asserted.

All dep/role changes were made in both the item frontmatter and the batch-32
manifest; `item-dependency-levels.mjs check` passes for all 473 run items, so
the seven recorded levels (9/10/18/18/19/19/20) equal the computed ones.

## Item checkpoints

- **`def-em-vacuum-energy-flux`** (level 9, definition). Claim: the energy
  density and Poynting vector for jointly C^k fields, k >= 1, with units,
  pointwise reading, quadratic character and exclusions. Suppliers:
  `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-fields`,
  `def-euclidean-inner-product`, `def-cross-product-in-r3`,
  `def-ck-euclidean-maps-and-diffeomorphisms`,
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition`. Verification:
  regularity of (u,S) as a composite of a polynomial with (E,B) (steps
  1.1-2.1), units (1.3), homogeneity and nonnegativity (3.1). Checks:
  precheck pass, proof-layout clean, rendercheck clean, depcheck clean.
- **`def-em-vacuum-stress-momentum`** (level 10, definition). Claim:
  g = eps_0 E x B, symmetric sigma, Pi = -sigma, l = x x g and x x Pi with the
  Levi-Civita convention, units kg m^-2 s^-1, N m^-2, kg m^-1 s^-1,
  N m^-1, origin law and quadratic character. Suppliers: the above plus
  `lem-cross-product-is-bilinear-alternating-and-orthogonal`,
  `def-directional-and-partial-derivatives`. Verification steps 1.1-2.1.
- **`pthm-em-poynting-balance`** (level 18). Claim: the local identity
  d_t u + div S = -J.E and the fixed-volume identity with boundary flux.
  Proof: product rule for d_t u (1.1), cross-product divergence identity
  (1.2), fixed-volume setup with boundary-nullity (1.3), substitution of the
  four smooth Maxwell equations with cancellation of the magnetic terms and
  eps_0 mu_0 c^2 = 1 (2.1), integration with the divergence theorem and
  compact-parameter differentiation (3.1). AC_omega declared for clause (b)
  only.
- **`pthm-em-momentum-balance`** (level 18). Claim: d_t g + div Pi = -f and
  the fixed-volume traction form. Proof: the quadratic stress identity
  applied with coefficients eps_0 and mu_0^-1 (1.1), product rule for
  d_t(E x B) (1.2), fixed-volume setup (1.3), substitution producing
  +J x B and eps_0 d_t(E x B) (2.1), integration (3.1).
- **`pthm-em-angular-balance`** (level 19). Claim: d_t l + div(x x Pi) = -x x f
  and its fixed-volume form. Proof: the angular part of the quadratic stress
  lemma applied to the momentum balance (1.1), fixed-volume setup (1.2),
  integration of the component vector fields (2.1); the origin dependence and
  the absence of spin are stated in clause (c).
- **`ex-em-vacuum-energy-flow-example`** (level 19, B page). Claim: the
  crossed plane wave is a smooth source-free solution;
  u = eps_0 E_0^2 cos^2(theta), S = eps_0 c E_0^2 cos^2(theta) e_3; exact
  local balance; finite-box ledger. Proof: real form by Euler (1.1),
  derivatives of exp(i theta) by the chain rule and CR theorem (1.2), box
  presentation (1.3), smoothness induction (2.1), energy identities (2.2),
  field data (3.1), the four Maxwell equations (4.1), local balance (4.2),
  box-energy derivative via Fubini + parameter differentiation + FTC (5.1),
  closed-surface flux from the six face contributions (6.1), scope (7.1).
- **`pthm-em-coupled-total-conservation`** (level 20). Claim: local zero-source
  identities for the totals and their fixed-volume boundary-flux forms, with
  the constancy iff flux-vanishing statement. Proof: energy and momentum by
  adding the assumed matter balances (1.1), angular by adding the field
  angular balance to the lemma applied to the matter momentum balance (1.2),
  fixed-volume setup (1.3), integration and the iff argument via the
  zero-derivative criterion (2.1); the matter balances are marked as
  assumptions in clause (c).

## Checks actually run (2026-10-09, after the final edits)

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts <7 items>` -
  7 checked, 0 failing (all pass `direct`).
- `node tools/physics-support/proof-layout.mjs <7 items>` - 7 items, 42
  steps, 0 defects.
- `node tools/physics-support/rendercheck.mjs <7 items + 2 pages>` - clean
  (YAML, math and diagram rendering).
- `node tools/physics-support/depcheck.mjs --items-file <7 ids>` - OK, no
  errors and no warnings.
- `node tools/physics-support/content-policy.mjs
  research/physics-em-sr-40-2026-10-08-batch-32.pages.json` - 7 scoped items,
  0 errors, 0 warnings.
- `node tools/physics-support/proof-contract.mjs
  research/physics-em-sr-40-2026-10-08-batch-32.proof-contracts.json --strict`
  - 7/7 items checked, 0 errors, 0 warnings (98 citation rows; derivations for
  every numbered step; all eight boundary dispositions per item).
- `node tools/physics-support/item-dependency-levels.mjs check --run
  physics-em-sr-40-2026-10-08` - 473 items across 80 pages, all labels match.
- `node tools/physics-support/coverage-checklist.mjs
  research/physics-em-sr-40-2026-10-08-batch-32.coverage.json
  --require-destination` - 1 page, 24 results, 0 errors, 0 warnings.
- `node tools/physics-support/fwdcheck.mjs` / `extcheck.mjs` scoped to the
  seven items - OK.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run
  physics-em-sr-40-2026-10-08` - **FAIL on sibling batches only** (39
  `undeclared-prereq` errors in `em-elementary-mathematical-prerequisites`,
  `em-expanded-analysis-prerequisites`,
  `em-boundary-and-spectral-prerequisites`,
  `em-experiment-analysis-prerequisites`,
  `em-variational-mathematical-prerequisites`, `em-material-response` and
  their example pages). No error names this pair; the only line naming it is
  the pre-existing plan-level `redundant-prereq` warning on its `requires`
  (owner metadata, not edited).
- Scoped `physics-content` validation over the seven items and two pages -
  0 errors in this scope; the two errors in the loaded selection belong to the
  sibling mathematical item `thm-sr-tensor-and-current-transformation`.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run
  physics-em-sr-40-2026-10-08` - refreshed and deduplicated; the batch-32
  input now has 39 rows (32 scaffold rows plus 7 new `open` rows) and no
  orphaned row.

## Suppliers added by this dispatch

Item suppliers whose use was already scaffolded but whose dep arrays were
completed: `def-em-lab-geometry` (two definitions),
`lem-cross-product-is-bilinear-alternating-and-orthogonal`,
`thm-ck-euclidean-maps-closed-under-algebra-and-composition` (in place of the
out-of-closure Banach theorem), `def-em-fields`, `post-em-lorentz-coupling`,
`post-em-vacuum-maxwell` (inherited hypotheses of the angular and coupled
items), `def-em-vacuum-energy-flux` (momentum scope cross-reference), and for
the fixed-volume clauses
`thm-graphs-of-continuous-functions-have-content-zero`,
`cor-integral-over-a-null-set-vanishes`, `cor-zero-derivative-implies-constant`
and `thm-algebra-of-derivatives`. For the example:
`def-ck-euclidean-maps-and-diffeomorphisms`,
`thm-continuous-partial-derivatives-imply-total-differentiability`,
`thm-total-derivative-computes-directional-and-partial-derivatives`,
`thm-total-differentiability-gives-a-local-linear-bound-and-continuity`,
`thm-ck-euclidean-maps-closed-under-algebra-and-composition`,
`def-bounded-piecewise-c-one-euclidean-domain`,
`def-oriented-unit-normal-and-flux-of-a-surface-patch`,
`def-multidimensional-rectangle-and-volume` and
`thm-multidimensional-integral-properties`. All of them are published
mathematical imports or existing in-run items; none is a new local item, and
every home lies in the page's declared `requires` closure. No mathematical
prerequisite was created because none was missing.

## Open obligations and escalations

- **Unfinished suppliers (flagged, not blocking authoring).** The in-run
  suppliers used by this pair are still draft scaffolds of batches 13 and 23:
  `def-em-lab-geometry` (step 1.1 of `def-em-vacuum-energy-flux`, and clauses
  (a)/(d) plus steps 1.1/1.4 of `def-em-vacuum-stress-momentum`),
  `def-em-si-conventions`, `def-em-fields`, `def-em-sources`,
  `post-em-vacuum-maxwell` (step 2.1 of `pthm-em-poynting-balance`, step 2.1 of
  `pthm-em-momentum-balance`, inherited hypothesis of
  `pthm-em-angular-balance` and `pthm-em-coupled-total-conservation`),
  `post-em-lorentz-coupling` (clause (c) of the balance theorems),
  `lem-em-parameter-integrals`, `lem-em-quadratic-stress-identity` and
  `def-em-complex-plane-wave`. The exact rows recording each consumer step and
  the required supplier claim are in
  `research/physics-em-sr-40-2026-10-08-batch-32.cross-batch-dependencies.json`;
  all remain `open` until those carriers pass independent review, and the
  corresponding item decisions below are accordingly made as author receipts
  only. No item is escalated as unproved: each consumer proof uses the exact
  supplier statement that is present on disk, and no proof step rests on a
  missing carrier.
- **Owner-held items:** none in this pair. The Step-3a review for the pair is
  `sufficient` and the seven item decisions are recorded by this authoring
  role, not by the owner.
- **Run-wide blockers (outside this pair's authority):** the run-wide
  `validate-plan` failures listed above and the missing sibling item
  `lem-em-ball-poisson-series-boundary-convergence` block the run-wide
  physics-content gate; they belong to the owning batches.
- **Observed sibling concern (reported, not repaired).**
  `def-em-plane-wave-definition` states that its C^infinity assertion "is the
  one proved in [[def-em-complex-plane-wave]] for the encoded expressions",
  but `def-em-complex-plane-wave` explicitly says it "asserts no regularity of
  its own beyond well-definedness". Exact consumer/supplier pair:
  `def-em-plane-wave-definition` -> `def-em-complex-plane-wave`, in that
  sibling's well-definedness paragraph. Confidence: high that the two texts
  disagree; the missing regularity can be supplied locally by the same
  induction this pair's example uses, or the sibling statement can be weakened
  to the regularity actually available. This pair neither consumes nor edits
  either item.

## Next actions

Step 4 splice and Steps 5-8 independent review; the seven Step-3b item
receipts are recorded with `step3-decisions.mjs record-item` (`repaired`,
confidence 1, examined dependency IDs, evidence strings). This report and the
batch-32 notes addendum fix the current state; no shared plan, no imported
mathematics and no sibling item was edited.


## Handoff update (re-recorded receipts)

The manifest dep-array sync for `pthm-em-momentum-balance` (adding the
`def-euclidean-inner-product` entry that its frontmatter and [F3] already used)
changed the recorded dependency closures of that item and of its two consumers
`pthm-em-angular-balance` and `pthm-em-coupled-total-conservation`. All three
receipts were re-recorded against the current inputs with the same evidence,
and `step3-decisions.mjs check --phase final` reports no open entry for any of
the seven owned items. Concurrent sibling writers are still landing other
batches in this run (for instance `lem-em-outgoing-source-helmholtz-and-diffraction`
now carries a stale `dependency_level` label in its own manifest); that
sibling state does not touch this pair, but any further edit to a supplier in
this pair's closure will require a fresh receipt at the next gate.
