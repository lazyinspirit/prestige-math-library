# Batch 28 — EFT Amplitude Interface and Positivity Application

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Owner scope: `aqft-eft-amplitudes` and `aqft-eft-amplitudes-examples` only.

## Scope and plan comparison

The assigned task, the complete pair-specific design at
`research/plan-advanced-qft-and-supersymmetry-track.md` § “EFT Amplitude
Interface and Positivity Application” (lines 387–398), and the current
`research/plan-spec.json` entry agree on page IDs, title, category, library,
order 984, and required pages `aqft-eft-foundations`, `aqft-eft-operators`,
and `qftx-eft-dispersion-and-bootstrap`. The current page manifests also
match these fields. No page-interface conflict was found.

The specialist note `research/advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md`
§ A5 contains a broader, earlier six-item proposal, including the mathematical
dispersion theorem, finite-bootstrap proposition, and a differently named
example. The current pair design and exact assigned contracts in
`scaffold/proposed-inventory.json` supersede that inventory: this batch owns
`def-aqft-eft-scattering-channel`,
`pthm-aqft-forward-positivity-wilson-coefficient`, and
`ex-aqft-eft-positivity-application`. The A5 cautions remain in force: use the
massive gapped scalar channel, do not extend to massless gauge/gravity channels,
and do not state a universal sign for arbitrary off-shell Wilson coefficients.

## Inventory and dependency levels

The pre-authoring run dependency-level file assigned batch 28 level 4, with
page predecessors 18, 24, and 25. After the actual item dependency on the
batch-16 finite-jet operator definition was added to the manifest, the derived
run dependency-level evidence was recomputed with
`node tools/physics-support/batch-dependency-levels.mjs write --run
advanced-qft-supersymmetry-build-2026-10-23`. The current batch-28 row remains
level 4 and now records suppliers 16, 18, 24, and 25. Item levels are computed
from exact in-run item edges:

| Item | In-run suppliers | Level |
|---|---|---:|
| `def-aqft-eft-scattering-channel` | `def-aqft-scattering-amplitude-input` (0); `def-aqft-local-operator-and-dimension` (0) | 1 |
| `pthm-aqft-forward-positivity-wilson-coefficient` | channel definition (1); `thm-aqft-gapped-scalar-forward-positivity` (2) | 3 |
| `ex-aqft-eft-positivity-application` | channel definition (1); physical theorem (3) | 4 |

The batch inventory and canonical plan initially list no local item carriers.
The exact three assigned contracts were read from the proposed inventory before
authoring. Items are written supplier-first on the owned A page; the worked
example remains on the B page and is not a supplier.

## Prerequisite inspection and current blockers

- `def-aqft-scattering-amplitude-input` (batch 18) was read in full. Its exact
  convention is natural units, `eta = diag(-,+,+,+)`, identical scalar mass
  `m > 0`, threshold `s = 4m^2`, `v = s - 2m^2`, crossing `v -> -v`, the
  specified paired real-pole subtraction, the two-cut domain, and continuity
  from each open half-plane to compact cut-bank segments away from thresholds.
  Its optical-theorem sign is an input; it does not construct a state or
  S-matrix.
- `thm-aqft-gapped-scalar-forward-positivity` (batch 18) and its full current
  proof were inspected. Its exact conclusion is
  `B^(2n)(0)/(2n)! = (2/pi) int rho(nu)/nu^(2n+1) dnu >= 0`, under its stated
  crossing, pole, analytic-domain, uniform `o(|v|^2)`, positive-density,
  continuous compact-bank extension, boundary-integral, endpoint, and
  convergence assumptions. Step 3.1 now uses the explicit compact-bank
  continuity assumption and bounds the fixed-contour error by the segment
  length, supremum boundary error, and distance from `v`; no boundary-limit
  gap remains in the inspected proof. It does not infer strict positivity or a
  general operator-basis sign.
- `loadStep1Record` from `tools/physics-support/frontier-snapshot.mjs` and
  `step1Decision` from `tools/physics-support/step1-decisions.mjs` were rerun
  against current carriers. Batch-18 `def-aqft-scattering-amplitude-input`,
  `lem-aqft-crossing-even-forward-amplitude`, and
  `thm-aqft-gapped-scalar-forward-positivity` have current `escalated` records,
  not missing records. Batch-18 `def-aqft-truncated-amplitude-bootstrap-problem`
  and `prop-aqft-finite-truncated-bootstrap-constraints` are also escalated;
  `prop-aqft-quartic-contact-jet-matching` has no current record. Each direct
  supplier reason says its required batch-16
  `qftx-eft-operator-quotients` page has seven supplier items without readiness
  records. The current batch-16 A page and all seven current A-item decisions
  are present and `ready`; therefore that recorded reason is stale and needs
  reevaluation by the owning batch-18 author. Batch 28 keeps both affected
  item edges open until those current supplier records are refreshed. Draft
  status and precheck state are not treated as gaps.
- The batch-16 mathematical definition
  `def-aqft-local-operator-and-dimension` was inspected. Its current Step-1
  record is `ready`; it defines finite-jet local operators and assigns
  engineering weight one to derivatives. With an even real scalar of weight
  one, the Lorentz contraction `(partial phi . partial phi)^2` is a degree-four,
  weight-eight local operator. No general EOM/IBP quotient or field-redefinition
  invariance is inferred.
- The current batch-24 `aqft-eft-foundations` page has its carrier and five A
  items present; all five current `step1Decision` results are `ready`. This
  page edge passes the scoped carrier/readiness check. The channel still does
  not use its finite-regulator data to construct a continuum amplitude.
- The current batch-25 `aqft-eft-operators` page carrier is present with one A
  item, `def-aqft-operator-basis-physical-data`. Its complete statement was
  inspected; it requires full physical/algebraic symmetry maps and explicitly
  says an operator quotient alone supplies no scattering equivalence. Its
  current Step-1 record is `ready` at `2026-10-23T09:22:41.690Z`, so the
  required page edge now passes the scoped carrier/readiness check. The channel
  fixes one scalar representative and makes no general quotient or equivalence
  claim.
- The batch-18 dispersion page declares batch-16
  `qftx-eft-operator-quotients` as a transitive page prerequisite. That page
  carrier is now present with seven A items, all of which currently have
  `ready` Step-1 decisions. The batch-18 escalations that cite this page's
  missing records no longer describe current state. This observation is
  transitive context only, not an added batch-28 dependency row.

The current batch-28 readiness rows are escalated at
`2026-10-23T09:26:40.954Z`, `09:26:49.574Z`, and `09:26:58.479Z`. In the
current snapshot, the operator-definition record is `ready` at
`2026-10-23T09:22:41.690Z`, so the channel-definition and example escalations
retain an outdated clause saying this item had no current record. Those
escalation rows were not overwritten. The channel-definition row still has the
independently unresolved escalated batch-18 amplitude-data supplier; the
positivity row still has the independently unresolved escalated batch-18
theorem supplier. Owner review should refresh the batch-18 records first, then
reconcile the stale operator-readiness clauses in these batch-28 rows.

The theorem's published transitive supplier
`../items/thm-monotonicity-of-the-integral.md` has potentially defective
unrelated prose in its Statement, lines 52–56: the zero-integral equality
discussion includes a contradictory “that is FALSE” fragment and broken
references. The only subclaim used here is its explicit nonnegative-integral
result, proved in its steps 1.1 and 2.1; that limited use is clear. This root
mathematical original is read-only and is not repaired in batch 28.

## Source work

Full relevant text was inspected for Adams et al., *Causality, Analyticity and
an IR Obstruction to UV Completion*, § 4, PDF pp. 14–20; de Rham et al.,
*Positivity Bounds for Scalar Theories*, §§ 2.1–2.2, PDF pp. 1–3; Basile et al.,
*Lectures in Quantum Gravity*, §§ 3.2.1–3.3.1, printed pp. 90–98; and Burgess,
*Introduction to Effective Field Theory*, §§ 2.2.1, 2.2.3–2.2.4, and the opening of § 2.2.5, printed
pp. 20–25. Adams, de Rham, and Basile support the conditional forward-dispersion
route and its mass-gap/high-energy caveats; Burgess supports the EFT matching
and truncation boundary, not amplitude existence. The four A-page PDFs passed
`source-fetch-check --stamp` (4/4 newly stamped). The B page reuses two of those
same stamped PDFs, and the final all-page check passed 6/6 with zero drops. The
source-coverage file records exact per-item support, locators, search results,
actual fetch attempts, and body hashes; no source-resolution/drop record is
needed because no retrieval failed.

## Authoring and checks

### `def-aqft-eft-scattering-channel`

Authored on the A page as a self-contained physical data interface. It fixes
the natural-unit mostly-plus convention, mass `m > 0`, identical stable scalar
states, `s,t,u`, forward variable `v`, crossed pole subtraction, the exact
two-cut domain, real analyticity/crossing, uniform `o(|v|^2)` growth, optical
theorem sign as an input, continuous compact cut-bank extension, boundary and
endpoint integrals, and the finite
`rho/nu^3` moment. It uses the ready math definition
`def-aqft-local-operator-and-dimension` only to identify the chosen dimension-8
local representative; it does not use a general operator quotient. Matching is
explicitly data: `c1 = 4 C8/Lambda^4 + Delta_match`, where Delta contains every
other contribution to the exact `v^2` coefficient. `Delta = 0` is recorded as
an additional condition, not inferred from truncation. It depends on the two
exact math definitions listed in its frontmatter. Its computed item level is 1.

The item and its local verification are complete. Its Step-1 readiness is
`escalated` because the current direct supplier
`def-aqft-scattering-amplitude-input` has a current `escalated` record whose
reason cites batch-16 readiness records that now exist and are ready. The
batch-18 owner must refresh that stale record before this edge can close. The
other direct item supplier is current `ready`. The required foundations and
operator page edges are now verified. The batch-28 readiness row also retains
a stale clause saying the operator A-item record was missing; that item is now
current `ready`, and the row was not overwritten.

### `pthm-aqft-forward-positivity-wilson-coefficient`

Authored on the A page with a complete conditional proof. It uses the exact
batch-18 conclusion at `n=1` only; it independently derives the coefficient
`4 C8/Lambda^4` of the displayed contact interaction with all four momenta
incoming and the mostly-plus Mandelstam conventions. The proof then uses the
exact match `c1 = 4 C8/Lambda^4 + Delta_match` to constrain
`C8 + Lambda^4 Delta_match/4`. It states `C8 >= 0` only under the additional
exact condition `Delta_match = 0`, and does not claim sufficiency or a sign for
an arbitrary off-shell coefficient. Its direct dependencies are the channel
definition and `thm-aqft-gapped-scalar-forward-positivity`; its computed item
level is 3.

The physical deduction is complete relative to these stated inputs, but this
item's Step-1 readiness is `escalated`: its direct batch-18 theorem and its
channel-definition input both have current `escalated` records. The theorem's
recorded reason cites a batch-16 page whose seven A items are now all current
`ready`; the batch-18 owner must reevaluate that escalation. The exact theorem
proof was inspected in full; compact-bank continuity is explicit in both its
definition and step 3.1, so no unsupported boundary-limit step is asserted by
this consumer. The batch-28 theorem record written at 09:26 also retains an
outdated clause about the operator page item being unready; that item is now
ready at 09:22:41.690Z. The escalated record was not overwritten.

### `ex-aqft-eft-positivity-application`

Authored on the B page as a Verification comparing `C8 = +1/2` and `C8 = -1/2`
at the same `Lambda = 4m` and exact `Delta_match = 0`. The corresponding values
are `c1 = +1/(128 m^4)` and `c1 = -1/(128 m^4)`. The Verification shows the
first is not excluded by this necessary inequality and the second violates it;
the text and diagram both state that passing the inequality is not sufficient
for amplitude existence. The example depends only on the A-page definition and
the local physical theorem. Its computed item level is 4. The number-line TikZ
diagram is explanatory; the arithmetic proof stands independently.

Both A/B pages are authored with YAML frontmatter only and empty Markdown bodies.
The A page retains the three exact planned `requires`; the B page requires the A
page and places its item only in `examples`. No page summary was written.

The example's Step-1 row is `escalated` at `2026-10-23T09:26:58.479Z` because
its direct definition and physical-theorem inputs remain escalated. Its reason
also says the operator page item lacks a current record, which is now outdated:
that page's A item is ready at `2026-10-23T09:22:41.690Z`. The escalation row
was left intact and awaits owner reconciliation after the batch-18 records are
reevaluated.

## Final scoped checks

- `proof-layout.mjs` on the three explicit item paths: 3 items, 10 steps, 0
  defects. `precheck.mts`: 3 direct proofs passed, 0 failing. Strict
  `proof-contract.mjs`: 3/3 items checked, 0 errors and 0 warnings.
- `content-policy.mjs` on the batch-28 manifest: 3 scoped items, 0 errors,
  0 warnings. `rendercheck.mjs` on the 3 items and 2 pages: all 5 files pass
  YAML, delimiter, KaTeX, and layout checks. `statement-first` on the 3 owned
  items: 0 defects.
- `coverage-checklist.mjs` on the batch-28 coverage file: 2 pages, 23 harvested
  results, 0 errors, 0 warnings. `source-fetch-check --stamp`: 6/6 references
  fetch-verified, 0 newly stamped, 0 drops. `depcheck.mjs --items-file` on the
  3 owned items passes selected item/page and prerequisite-cycle checks;
  `manifest-deps.mjs` reports 3 items, 0 missing dependencies. Manifest/carrier
  consistency passes for 3/3 items, both page bodies are empty, and the
  cross-batch JSON is a valid 6-edge array with 3 open and 3 verified edges.
- Scoped dependency closure over the 7 in-run supplier/consumer items has no
  errors; owned levels are 1, 3, and 4. The run-wide
  `item-dependency-levels.mjs check` currently fails outside this batch with 34
  empty page inventories and 8 stored-level mismatches. The mismatches are
  `post-qftx-n2-vector-hypermultiplet-model` (3 vs. 6),
  `post-qftx-n4-super-yang-mills-model` (4 vs. 7),
  `ex-qftx-n2-hypermultiplet-gauge-invariants` (4 vs. 7),
  `ex-qftx-n2-quadratic-prepotential` (4 vs. 7),
  `ex-qftx-n4-adjoint-hyper-decomposition` (5 vs. 8),
  `ex-qftx-n4-su2-noncommuting-scalar-potential` (5 vs. 8),
  `post-qftx-rigid-supersymmetric-background` (3 vs. 8), and
  `ex-qftx-susy-round-s4-localization-data` (4 vs. 9). No owned item is named
  in those errors.
- Run-wide `proof-contract-coverage.mjs` and `statement-first-check.mjs` stop at
  empty batch-33 `qftx-susy-moduli-and-dualities` inventory before checking
  Batch 28. Earlier batch-27 `aqft-smeft-heft` is no longer empty in the current
  manifest; Batch 28 did not edit that out-of-scope page.
- `batch-dependency-levels.mjs check` reports a stale shared input digest after
  the required batch-28 manifest refresh. A fresh read-only calculation gives
  the same rows: batches 16=1, 18=2, 24=2, 25=3, 28=4, with requirements
  16←1, 18←16, 24←2/19, 25←2/16/24, and 28←16/18/24/25. The shared
  dependency-level file was left for owner refresh. The batch-28 manifest has
  the correct item levels and edges.

## Owner escalations

1. Batch-18 current Step-1 records for
   `def-aqft-scattering-amplitude-input`,
   `lem-aqft-crossing-even-forward-amplitude`, and
   `thm-aqft-gapped-scalar-forward-positivity` remain `escalated`. Their exact
   recorded reason says all seven A items on `qftx-eft-operator-quotients` lack
   current records, but the current page has all seven items `ready`. The
   mathematical theorem was reread in full: its definition explicitly assumes
   compact cut-bank continuity and step 3.1 supplies the uniform-on-compact
   error bound. The owning batch-18 author should reevaluate these three
  existing records and refresh the page-level evidence. In the current page
  inventory, the other two A items are also escalated and the quartic-contact
  matching item has no record, so the page edge remains open until batch 18
  refreshes its broader readiness state.
2. The required `aqft-eft-foundations` page now has its carrier and all five A
   items with current `ready` records. Its scoped page-edge check is verified;
   batch 28 still does not claim finite-regulator data construct the continuum
   scalar amplitude.
3. The required `aqft-eft-operators` page and its item
   `def-aqft-operator-basis-physical-data` are now current and ready, so the
   page edge is verified. Batch-28 Step-1 records written at 09:26 still say
   this item has no current record; do not overwrite those escalations. The
   recorded reason is stale and needs owner reconciliation after the batch-18
   supplier records are refreshed. The batch-28 channel fixes one
   representative and makes no general operator-quotient or
   scattering-equivalence claim.
4. The run-level dependency-level checker reports a stale input digest after
   the required batch-28 manifest refresh. Recomputing current graph rows gives
   batch levels 16=1, 18=2, 24=2, 25=3, 28=4 with the same supplier edges. The
   batch dependency-levels file is shared planning evidence and was left for
   owner refresh; all three local item levels were independently recomputed as
   1, 3, and 4.
5. Root mathematical original `thm-monotonicity-of-the-integral` has malformed
   contradictory prose in the unrelated equality discussion at source lines
   52–56. The current proof uses only its proved nonnegative-integral subclaim;
   owner review is requested for the source defect, with no edit from this
   batch.

## Same-owner drained matching integration

After genuine native beta-batch-28 completion (ended2026-10-23T09:32:18.881Z, oktrue), Root handed off the source. Re-read all current28 sources; their author had already propagated compact-bank continuity explicitly. Added the actual bounded contact-map supplier in proof1.2 with R8=0 and the single-insertion/common-i normalization; kept exact matching remainder and physical Statement/Definition unchanged. Rechecked the direct example arithmetic and diagram; only its dependency level changes to5, with theorem level4. Preserved fresh full current preimages and prior readiness records. Imported monotonicity Claim1 is sound and is the only portion used; malformed unused equality commentary is recorded without editing original or snapshot. No readiness/native/gate transition performed. See owner-resolution/positivity-matching-repair.md.
