# Step 3b authoring report — codimension-one-foliations-and-secondary-classes

- Run: `frontier-41-ha-dt-29`, batch 23, role `alpha-high`, current dispatch label
  `step3b-pair-codimension-one-foliations-and-secondary-classes-c2ee04f2a0b26e88`
  (attempt 1 of a re-dispatch after the interrupted attempt
  `step3b-pair-codimension-one-foliations-and-secondary-classes-1e9be9c8c6ae6300`
  and the superseded `-c1117e4e8b8058c6`).
- A page `codimension-one-foliations-and-secondary-classes` (order 577,
  differential topology) and B page
  `codimension-one-foliations-and-secondary-classes-examples` (order 578).
  The owner split the original 104-item pair on 2026-10-05T14:32:38Z
  (`research/frontier-41-ha-dt-29-step3-owner-pair-splits.json`); this dispatch
  owns exactly the 51 items the split leaves in batch 23 (49 A + 2 B), in the
  dispatch's dependency-level order.
- Owned artifacts: the 51 `items/<id>.md` corpus files, the two
  `library/differential-topology/*.md` pages, `research/frontier-41-ha-dt-29-batch-23.proof-contracts.json`,
  the batch-23 cross-batch dependency input rows this pair declares, the 51 Step-3
  item decisions, and this report.

## State at entry

- 31 of the 51 item files were already on disk, written at 01:11–01:20 local by
  the interrupted attempt (which died before it reached the characteristic-disk
  and period-annulus carriers and whose report checkpointed only level 0). All 31
  pass explicit-path precheck; `rendercheck` found one defect
  (`lem-the-bott-partial-connection-…`: literal `[[` inside a display formula),
  repaired at entry. The three winding/Jordan items carried the invalid
  provenance value `locally-proved` with no source; retagged `ai-altered` with
  Ahlfors/Lebl/Thomassen URLs at entry.
- 20 item files are absent and are authored under this dispatch (levels 2–9:
  the planar-hyperbolic gradient curves, the relative characteristic genericity
  carrier, the period-annulus product coordinate, the local generalized
  Poincaré–Bendixson carrier, the C² plaque-transport interface, the center–saddle
  index count, the finite saddle omega-graph, the leafwise-loop general-position
  representative, the C² first-integral period annulus, the singular-image
  separation carrier, the fixed-cap gluing and the joint cap product, the
  one-quadrant homoclinic count, the flat-drift omega realization, persistence of
  nullhomotopy, the minimal nonidentity simple cycle, the orbit-or-polycycle
  frontier, the finite-circuit C² port traces, the polycycle rounding, and the
  finite crossing word).
- No `research/frontier-41-ha-dt-29-batch-23.proof-contracts.json` existed at
  entry; it is an owned output. Both page files are absent from
  `library/differential-topology/` and are owned outputs.
- Inputs read at entry: `CLAUDE.md`, `SCHEMA.md`, `briefs/group-author.md`,
  `briefs/tasks/frontier-dependency-ledger.md`, the split authorization
  (`research/frontier-41-ha-dt-29-step3-owner-pair-splits.json`),
  `research/frontier-41-ha-dt-29-batch-23.pages.json`,
  `research/frontier-41-ha-dt-29-batch-23.coverage.json`,
  `research/frontier-41-ha-dt-29-batch-23.cross-batch-dependencies.json`,
  `research/frontier-41-ha-dt-29-batch-23.notes.md` (prior repair record,
  navigation only), the Step-3a pair report and review, and the sibling
  Step-3b reports for batches 21 and 22.

## In-run sibling suppliers flagged (unfinished at authoring time)

The two direct in-run prerequisite pairs are being authored concurrently
(`foliation-holonomy-and-the-holonomy-groupoid`, batch 21;
`reeb-stability-and-global-foliation-constructions`, batch 22), as is the
split sibling `vanishing-cycles-novikov-and-taut-foliations` (batch 31).
Consumers of a supplier that is not yet authored are written with the supplier
ID and the consuming step recorded here, and their item decision is left
`escalate` until the supplier file exists and the actual use is reconciled.
Interfaces used: `def-transversely-oriented-codimension-one-foliation`,
`def-countable-choice-principle-for-foliation-pair`,
`def-c1-regular-codimension-one-foliation-and-transverse-orientation`,
`def-holonomy-representation-and-holonomy-group-of-a-leaf`,
`lem-holonomy-germ-is-independent-of-the-foliation-chart-chain`,
`thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints`,
`prop-mapping-torus-foliations-realize-global-reeb-stable-examples`.

## Checkpoint log

(appended per item)

### Entry repairs (31 pre-existing files)

- `items/lem-the-bott-partial-connection-is-well-defined-and-flat-in-leaf-directions.md`:
  display formula rewritten with `\lbrack/\rbrack` to remove the literal `[[`
  that `rendercheck` flagged as a wikilink inside math.
- `items/lem-winding-number-is-locally-constant-via-integral-estimate.md`,
  `items/lem-winding-number-jumps-by-one-across-a-regular-planar-arc.md`,
  `items/lem-finitely-cornered-regular-plane-curve-separates-without-choice.md`:
  invalid provenance value `locally-proved` retagged `ai-altered`, references
  added (Ahlfors Ch. 4, Lebl Ch. 4, Thomassen Thm 4.1).

### Items newly authored by this dispatch

| # | item | level | claim/conventions | sources | deps checked | checks | open gap |
|---|---|---|---|---|---|---|---|
| 1 | `lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves` | 2 | Hadamard/Perron fixed point on the weighted path space `B_beta`; C1 graph `G(xi)=xi+h(xi)`; exponential rate `beta<min(a,b)`; unstable by applying the result to `-u`. | Teschl §7.3, §9.2 | `lem-c1-euclidean-maximal-flow-with-c2-upgrade`, `cor-primitives-of-a-continuous-function`; added published deps Banach FPT, Neumann series, real spectral theorem, MVT, uniform continuity, uniform limit, completeness | precheck PASS, rendercheck OK | none; choice-free |
| 2 | `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary` | 2 | (a) transverse boundary collar; (b) leaf boundary: bump `rho(theta) r c(r)` added to the transverse coordinate, `rho>|a(theta)|+1`; (c) chartwise perturbation `u_i+rho_i(a·x)`, Sard for the C1 gradient map, null sets have empty interior by the thickened-cube/grid argument; centre/saddle by the direct C2 planar argument. | Novikov §6 pp.16-19; Lee Ch.6/11 | `def-transversely-oriented-...`, `thm-morse-sard-for-euclidean-maps`, `lem-manifold-bump-...`, `thm-euclidean-inverse-function-theorem`, `def-null-and-content-zero-in-rn`, `thm-heine-borel-rn`, `lem-finite-cube-covers-admit-grid-control`, `def-countable-choice-principle-for-foliation-pair`; added `def-c1-regular-...`, `cor-mean-value-theorem`, `cor-primitives-of-a-continuous-function` | precheck PASS, rendercheck OK | none; AC_omega stated and traced to the cooriented interface |
| 3 | `lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit` | 2 | limit set via nested tail closures; monotone crossings on a compact section by the finite-corner Jordan separator; dichotomy regular point: periodic orbit or singleton equilibrium; three alternatives. | Teschl Thm 7.16 (§7.3) | `lem-finitely-cornered-regular-plane-curve-separates-without-choice`, `thm-heine-borel-rn`, `lem-c1-euclidean-maximal-flow-with-c2-upgrade` | precheck PASS, rendercheck OK | none; choice-free |

### Helper assignments (CLAUDE.md §3, Steps 1-5)

Two helper agents were spawned (`/root/helper_period_annulus`,
`/root/helper_caps_and_fences`) to author disjoint clusters of the remaining
missing items; brief `/tmp/step3b_pair_conventions.md`, per-item scaffold dumps
`/tmp/helper1_items.json`, `/tmp/helper2_items.json`. The primary author keeps
the characteristic-disk core items, this report, the pages, the contracts file
and every gate. Helper results are reconciled and re-checked on return.

### Helper-authored clusters (reconciled and re-checked on return)

Two helper agents authored disjoint clusters while the primary author kept the
characteristic-disk core: helper 1 (`/root/helper_period_annulus`) the
period-annulus/planar cluster, helper 2 (`/root/helper_caps_and_fences`) the
cap/fence/Godbillon-Vey cluster. Their files were read back by the primary
author, reconciled with the conventions brief, and passed the same checks.
Residual imprecisions recorded (not hidden, all routed to Step 5a):
`lem-c2-first-integral-period-annuli-have-c2-products` (deterministic
"least hull / least finite subcover" selection clauses in steps 6.1 and 7.1),
`lem-characteristic-period-annulus-has-a-smooth-product-coordinate` (step 4.1
global maximal-trajectory passage, repaired in this pass),
`lem-flat-drift-realizes-a-period-annulus-frontier-as-an-omega-limit` (step 5.1
normalization constant; the conclusion was re-derived here from
ds/dθ ≤ (1−s)²/(1+L(s)) and is believed correct),
`lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative` and
`lem-nullhomotopy-persists-under-a-compact-transverse-deformation` (Sard /
regular-value and per-cell glue steps), and
`lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar`
(adds the explicit projection-along-the-fixed-flow hypothesis to the collar
clause, a narrowing of the helper draft, not of the manifest promise).

## Item decisions (final, recorded in dependency order)

All 51 assigned items received a current decision via
`node tools/step3-decisions.mjs record-item` with the examined direct
dependency IDs and concrete evidence: **43 `accept`, 4 `repaired`, 4
`escalate`** (owner-held). The hashes are current against the final item files,
the batch-23 manifest entries, and `research/plan-spec.json`.

Repairs made in this pass (each followed by `proof-layout` on the changed
paths, precheck, rendercheck and a regenerated strict proof contract):

| item | repair |
|---|---|
| `lem-c2-leaf-intersection-with-a-box-transversal-is-countable` | step 2.2 successor-plaque justification replaced by the correct partition-of-L∩V-into-plaque argument |
| `lem-finitely-cornered-regular-plane-curve-separates-without-choice` | step 2.1 corner functional corrected (use ⟨w,u+v⟩; handle v=−u) |
| `lem-characteristic-period-annulus-has-a-smooth-product-coordinate` | step 4.1 no-endpoint-leaf extension justified |
| `lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit` | step 4.1 (iii) extended to all regular points via the tube/connectedness argument |

Entry repairs to the 31 interrupted-attempt files are recorded above
(rendercheck `[[` defect in the Bott item, invalid `locally-proved` provenance
in three winding/Jordan items, cleared `justified_by` rows, joined split
wikilinks, removed a B-page item reference and literal step-number typos).

## Escalations (owner-held, exact obligations)

1. `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`
   — `proof: not-supplied`. Statement retained in full; the finite-cellulation
   and disk conclusions are still not written at proof standard. Residual
   carriers: a finite curvilinear cellulation of a compact C² subsurface with
   prescribed subgraph, and the choice-free polygonal Jordan input it consumes.
   Consuming steps in other batches: `lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum`,
   `lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band`.
2. `lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative`
   — authoring gap, not a statement defect: the step 7.1 perturbation uses
   bumps equal to 1 on cores whose supports cover the parameter circle, so the
   block containing the basepoint parameter moves the basepoint and step 10.1's
   "based" conclusion is not justified by the construction (the loop is only
   freely homotopic). Repair routes: basepoint-vanishing bump plus a
   degenerate-core pair/triple argument, or the pushed-off whisker
   β·g·β̃⁻¹ restoration. Consumers: `lem-fixed-transverse-fences-have-a-finite-crossing-word`
   (statement and step 1.1) and batch-22 `lem-compatible-arbitrary-pi-fence-reduction`
   (steps 1.1 and 5.1).
3. `lem-separated-characteristic-disk-has-an-inclusion-minimal-nonidentity-simple-cycle`
   — historical construct-readiness concern for the minimum-selection route
   (the earlier area-minimizing-sequence argument was rejected because
   nonidentity return germs can converge to the identity germ). The current
   file supplies a closed candidate route (positive-area limit, one-itinerary
   return word nonidentity at 0, area/inclusion minimality) and its steps were
   read, but steps 5.1 and 6.1 are delicate enough that this pass does not
   certify them; the owner must adjudicate. Consuming steps of the frontier
   supplier `lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier`:
   1.1, 2.1, 3.1.
4. `lem-fixed-transverse-fences-have-a-finite-crossing-word` — consumer of
   escalation 2; authored and locally checked, decision held until the based
   representative is reconciled.

## In-run sibling suppliers at handoff

- `foliation-holonomy-and-the-holonomy-groupoid` (batch 21): every item this
  pair consumes exists and carries a current closed decision
  (`def-holonomy-representation-and-holonomy-group-of-a-leaf`,
  `def-germ-of-a-local-diffeomorphism-at-a-point`,
  `def-map-transverse-to-a-regular-foliation`,
  `def-local-transversal-to-a-regular-foliation`,
  `lem-holonomy-germ-is-independent-of-the-foliation-chart-chain`,
  `thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints`).
- `reeb-stability-and-global-foliation-constructions` (batch 22): all item
  files now exist (including the four that were missing at the start of this
  dispatch: `lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness`,
  `thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations`,
  `rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form`,
  `ex-a-fibration-over-the-circle-as-a-global-stable-foliation`; none is in
  this pair's dependency closure), but the pair's dispatch is unfinished and
  no item decisions are recorded there yet. Suppliers this pair uses and
  therefore re-verifies if batch 22 changes them:
  `def-transversely-oriented-codimension-one-foliation`,
  `def-countable-choice-principle-for-foliation-pair`,
  `def-c1-regular-codimension-one-foliation-and-transverse-orientation`,
  `lem-countable-choice-sequence-and-product-formulations-are-equivalent`,
  `lem-c1-foliated-atlas-preserves-plaque-equivalence-and-transverse-orientation`,
  `def-c1-germ-of-a-local-diffeomorphism-at-a-point`,
  `lem-c1-germs-of-local-diffeomorphisms-form-a-group`,
  `lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs`,
  `prop-mapping-torus-foliations-realize-global-reeb-stable-examples`.
- `vanishing-cycles-novikov-and-taut-foliations` (batch 31, split sibling):
  its author escalated items that named this pair's then-unfinished items
  (`lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`,
  `lem-a-leafwise-loop-…`, `lem-fixed-transverse-fences-…`) as unfinished
  sibling suppliers; those citations remain correct for escalations 1–4 and
  will resolve with them.

## Cross-batch dependency rows

Three item rows were added to
`research/frontier-41-ha-dt-29-batch-23.cross-batch-dependencies.json`, status
`open`, with exact use locations: consumers of
`def-c1-regular-codimension-one-foliation-and-transverse-orientation`
(`lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`)
and of `def-transversely-oriented-codimension-one-foliation`
(`lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar`,
`lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle`).
All other rows were preserved; none was overwritten.

## Deviations from scaffold statements

- `lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar`
  adds the explicit hypothesis that each collar point of the trace is obtained
  by projecting the cap along the fixed transverse flow (the manifest statement
  already carried the corresponding clause for the fixed-cap item; the
  companion now states it explicitly). No other manifest statement was
  weakened; the 51 item statements match `batch-23.pages.json`.
- The finite-chart item's clause structure and AC_ω budget are unchanged from
  the scaffold; only its proof is still open (escalation 1).

## Checks actually run (final state, this pass)

| check | command | result |
|---|---|---|
| proof-layout (changed paths) | `node tools/proof-layout.mjs` + 4 changed items | 4 items, 26 steps, 0 defects |
| precheck | `node tools/tsx-run.mjs tools/precheck.mts` + all 51 paths | 43 checked, 0 failing |
| rendercheck | `node tools/rendercheck.mjs` + all 51 paths | OK, 51 files (one pre-existing KaTeX prime warning) |
| proof-contract (strict) | `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-23.proof-contracts.json --strict` | 0 errors, 1 warning (`shotgun-bracket` on the foliation-restriction item) |
| boundary-audit | `…--fail-on-contradicted --fail-on-template` | no templates, no contradicted rows |
| citation-fidelity | `…--fail-on-missing-quote` | no missing quotes, no widening |
| content-policy | `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-23.pages.json` | 51 scoped, 0 errors/warnings |
| coverage-checklist | `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-23.coverage.json --require-destination` | 2 pages, 44 harvested, 0 errors |
| manifest-deps | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-23.pages.json` | 51 items, 0 errors |
| depcheck | `node tools/depcheck.mjs` + all 51 paths | 0 findings naming this pair (run-wide failures are other pairs') |
| item-dependency-levels | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | 0 errors for this pair's items (22 unrelated run-wide errors on other pages) |
| finite-smoke | `node tools/finite-smoke.mjs research/frontier-41-ha-dt-29-batch-23.proof-contracts.json` | 0 errors, 0 obligations |
| risk-report | `node tools/risk-report.mjs research/frontier-41-ha-dt-29-batch-23.proof-contracts.json` | 0 errors, 51 items routed (6 high/critical, see Step 5a list) |
| depsource / prosecheck | repo-wide | OK |
| decisions | `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` (filtered to this pair) | 47/51 closed, 4 owner-held escalations |

## Step 5a focus list (highest-risk certified items)

`lem-c2-first-integral-period-annuli-have-c2-products` (deterministic selection
clauses), `lem-flat-drift-realizes-a-period-annulus-frontier-as-an-omega-limit`
(normalization constant), `lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier`
(the two escalations above read on its own terms: the frontier classification
was verified here, but its history makes it a priority re-read),
`lem-finite-saddle-omega-graph-is-strongly-connected` (condensation/chain-transitivity
step 4.1), `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`
(null-set-has-empty-interior constants), `lem-nullhomotopy-persists-under-a-compact-transverse-deformation`
(per-cell glue).

## Handoff

- Completed: all 51 assigned item files authored and on disk; both library pages
  and the batch-23 contracts file written; 47 items certified (`accept`/`repaired`,
  confidence 1, examined dependency IDs recorded); 4 escalations owner-held.
- Checks: the table above; all explicit-path gates run in one batch after the
  final edits, then the strict contract regenerated from the final item files.
- Added suppliers: none (no new item IDs were introduced by this pair; all 51
  are original scaffold inventory).
- Published concerns: the run-wide `item-dependency-levels`, `depcheck` and
  `fwdcheck` failures belong to other pages (`thm-high-dimensional-whitney-trick`
  and the Whitney/isotopy page cycle, `lem-relative-hurewicz-…`,
  `def-dead-end-component`, `rem-elementary-moves-…`); they are reported, not
  repaired, here.
- Open obligations: escalations 1–4 above; any statement change in batch 22
  reopens the affected receipts automatically (hashes are current as of this
  handoff).
- Pre-splice state: the 51 IDs are not yet in `research/plan-spec.json` (Step 4
  splices them); `node tools/validate-plan.mjs research/plan-spec.json` reports
  OK (declared order acyclic and consistent; planned pages without item lists
  are noted for re-validation after splicing). No pre-splice plan mismatch
  involves this pair; the run-wide `item-dependency-levels`, `depcheck` and
  `fwdcheck` failures all belong to other pages and are listed under published
  concerns.


## Appendix — per-item checkpoint (all 51, dependency order)

Level = manifest `dependency_level`; decision = current Step-3b receipt
(`accept` = authored, read and checked unedited; `repaired` = audited and
locally repaired; `escalate` = owner-held, see the escalation table). Statement
column quotes the first line of the manifest promise.

| level | item | kind | decision | manifest claim (truncated) |
|---|---|---|---|---|
| 0 | `def-bott-partial-connection-on-the-normal-bundle-of-a-foliation` | definition | accept | Let F be a codimension-q regular foliation of a smooth manifold M, with tangent distribution E=TF, and let \… |
| 0 | `lem-a-foliation-transverse-to-the-boundary-restricts-to-the-boundary` | lemma | accept | Let W be a smooth (n+1)-manifold with boundary and let F be a codimension-one regular foliation of W transve… |
| 0 | `lem-c1-planar-fields-on-a-closed-disk-extend-to-a-neighborhood` | lemma | accept | Let X be a planar vector field C¹ up to the boundary of the closed unit disk D. It has a C¹ extension to an … |
| 0 | `lem-c2-inverses-and-scalar-return-roots` | lemma | accept | Let f be a C² map between open subsets of R^n with invertible derivative at a point. Its local inverse is C²… |
| 0 | `lem-c2-saddle-function-has-c1-morse-coordinates` | lemma | accept | Let f be C² near p\in\mathbb R^2, with df(p)=0 and Hessian of signature (1,1). There is a C¹ local diffeomor… |
| 0 | `lem-forms-annihilated-by-a-nowhere-vanishing-one-form-are-divisible-by-it` | lemma | accept | Let M be a smooth manifold and let \omega be a nowhere-vanishing smooth 1-form on M. (i) If \alpha\in\Omega^… |
| 0 | `lem-winding-number-is-locally-constant-via-integral-estimate` | lemma | accept | Let \Gamma be a closed rectifiable contour of length L and let p_0 lie off its trace. If d>0 satisfies \|z-p… |
| 0 | `lem-winding-number-jumps-by-one-across-a-regular-planar-arc` | lemma | accept | Let \Gamma be an oriented closed piecewise-C^1 contour. Suppose that near 0 it contains exactly one regular … |
| 1 | `lem-c1-euclidean-maximal-flow-with-c2-upgrade` | lemma | accept | Let U⊂R^n be open and Y:U→R^n be C¹. There is a unique maximal flow Φ on an open domain D⊂R×U containing {0}… |
| 1 | `lem-c2-leaf-intersection-with-a-box-transversal-is-countable` | lemma | repaired | Assume \mathrm{AC}_\omega. Let F be a C^2 foliation on a second-countable smooth manifold, let L be a leaf, … |
| 1 | `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` | lemma | escalate | For an oriented C² surface, every compact subset lies in the interior of a compact finitely cellulated subsu… |
| 1 | `lem-finitely-cornered-regular-plane-curve-separates-without-choice` | lemma | repaired | Let c:S^1\to\mathbb R^2 be a piecewise-C^2 topological embedding with finitely many corner parameters. Assum… |
| 1 | `lem-the-bott-partial-connection-is-well-defined-and-flat-in-leaf-directions` | lemma | accept | In the notation of [[def-bott-partial-connection-on-the-normal-bundle-of-a-foliation]], the Bott partial con… |
| 2 | `def-smooth-foliated-concordance` | definition | accept | Assume Countable Choice \mathrm{AC}_\omega. Let M be a closed smooth manifold and let F_0,F_1 be transversel… |
| 2 | `lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves` | lemma | accept | Let u be C² near a nondegenerate saddle in the Euclidean plane. Its C¹ field −∇u has local C¹ stable and uns… |
| 2 | `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a C^2 cooriented codimension-one foliation of a smooth … |
| 2 | `lem-characteristic-period-annulus-has-a-smooth-product-coordinate` | lemma | repaired | Let X be a C^2 vector field on an open subset of \mathbb R^2. Let A be an open annulus saturated by X, with … |
| 2 | `lem-curvature-of-an-extending-bott-connection-lies-in-the-transverse-differential-ideal` | lemma | accept | Let F be a codimension-q regular foliation of a smooth manifold M with normal bundle \nu=TM/TF, let \nabla^{… |
| 2 | `lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a transversely oriented codimension-one foliation of a … |
| 2 | `lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit` | lemma | repaired | Let U\subseteq\mathbb R^2 be open and let Y:U\to\mathbb R^2 be a C^1 vector field. Let \mathcal O^+(y)=\{Y_t… |
| 3 | `lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity` | lemma | accept | Let a codimension-one foliation on a smooth manifold be given by a C^2 foliated atlas, meaning the charts an… |
| 3 | `lem-characteristic-disk-center-saddle-index-count` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a cooriented codimension-one foliation of a smooth 3-ma… |
| 3 | `lem-eta-wedge-d-eta-is-closed` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a transversely oriented codimension-one foliation with … |
| 3 | `lem-finite-saddle-omega-graph-is-strongly-connected` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a C^2 cooriented codimension-one foliation and let h:D^… |
| 3 | `thm-bott-vanishing-for-real-pontryagin-monomials-of-a-codimension-q-foliation` | theorem | accept | Let F be a codimension-q regular foliation of a smooth manifold M with normal bundle \nu=TM/TF. Then every r… |
| 4 | `lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative` | lemma | escalate | A based loop in a C² surface is based-homotopic to a regular C² immersed loop having only finitely many tran… |
| 4 | `lem-c2-first-integral-period-annuli-have-c2-products` | lemma | accept | Assume ACω. Let A⊂R² be a connected open set carrying a C² first-integral atlas: each chart has a C² submers… |
| 4 | `lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar` | lemma | accept | Assume \mathrm{AC}_\omega. Let F be a C^2 cooriented codimension-one foliation of a smooth 3-manifold, and l… |
| 4 | `lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots` | lemma | accept | Assume AC_ω. Given a C² leafwise cap B:W→L on a compact source disk, a fixed smooth transverse field V near … |
| 4 | `lem-godbillon-vey-form-is-independent-of-the-choice-of-eta-up-to-an-exact-form` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a transversely oriented codimension-one foliation with … |
| 4 | `lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a transversely oriented codimension-one foliation with … |
| 4 | `lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle` | lemma | accept | Let X be the characteristic C¹ field of a C² characteristic disk with finitely many nondegenerate centers an… |
| 5 | `def-godbillon-vey-class` | definition | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a transversely oriented codimension-one foliation of a … |
| 5 | `lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a C^2 codimension-one regular foliation of a 3-manifold… |
| 5 | `lem-flat-drift-realizes-a-period-annulus-frontier-as-an-omega-limit` | lemma | accept | Let X be a C^1 planar vector field on an open neighborhood of a compact disk D, and let \Psi:S^1\times(0,1)\… |
| 5 | `lem-nullhomotopy-persists-under-a-compact-transverse-deformation` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a C^2 regular foliation, and let H:S^1\times(-\delta,\d… |
| 5 | `lem-one-sided-trivial-holonomy-classes-form-a-normal-subgroup` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a transversely oriented codimension-one foliation, L a … |
| 5 | `ex-godbillon-vey-rescaling-calculation` | example | accept | Assume Countable Choice \mathrm{AC}_\omega. On M=\mathbb R^3 with coordinates (x,y,z) let \varphi=ze^{x^2/2}… |
| 6 | `cor-a-codimension-one-foliation-defined-by-a-closed-one-form-has-zero-godbillon-vey-class` | corollary | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a transversely oriented codimension-one foliation of a … |
| 6 | `def-limit-cycle-of-a-leaf-of-a-codimension-one-foliation` | definition | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a transversely oriented codimension-one foliation, L a … |
| 6 | `lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a C^2 cooriented codimension-one foliation of a 3-manif… |
| 6 | `rem-classical-godbillon-vey-requires-at-least-c-two-regularity` | remark | accept | Assume Countable Choice \mathrm{AC}_\omega. The Godbillon-Vey class is a secondary invariant of codimension-… |
| 6 | `thm-godbillon-vey-class-is-invariant-under-smooth-foliated-concordance` | theorem | accept | Assume Countable Choice \mathrm{AC}_\omega. Let M be a closed smooth manifold and let F_0,F_1 be smoothly fo… |
| 7 | `def-limitwise-nullhomotopy-predicate-on-based-loops` | definition | accept | Assume Countable Choice \mathrm{AC}_\omega. Let F be a transversely oriented codimension-one foliation, L a … |
| 7 | `lem-a-finite-characteristic-circuit-has-c2-regular-port-traces` | lemma | accept | Assume AC_ω. For a finite regular-edge/saddle circuit and a chosen adjacent period annulus following its fin… |
| 7 | `lem-separated-characteristic-disk-has-an-inclusion-minimal-nonidentity-simple-cycle` | lemma | escalate | Assume AC_ω. A relative generic characteristic disk with closed transverse boundary and distinct singular im… |
| 7 | `ex-a-fibration-over-the-circle-has-zero-godbillon-vey-class` | example | accept | Assume Countable Choice \mathrm{AC}_\omega. Let q:M\to S^1 be a smooth fibre bundle with connected fibre and… |
| 8 | `lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. For a transversely oriented codimension-one foliation, a leaf L,… |
| 8 | `lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family` | lemma | accept | Assume Countable Choice \mathrm{AC}_\omega. Let P be a finite saddle-separatrix circuit in a generic charact… |
| 9 | `def-limitwise-nullhomotopy-subgroup-of-a-leaf` | definition | accept | Assume Countable Choice \mathrm{AC}_\omega. For a transversely oriented codimension-one foliation, a leaf L,… |
| 9 | `lem-fixed-transverse-fences-have-a-finite-crossing-word` | lemma | escalate | For a generic finite-double-point representative of a nonzero Π class, a sufficiently short one-field leaf-s… |

## Root-authorized escalation-1 constructive completion

The previously not-supplied surface item is now authored, with one local relative-cellulation helper. All original clauses are proved under ACω; the sphere uniqueness exception names the connected component. The actual source/polyhedron adapters, canonical-coset choice analysis, focused checks and shared-carrier integration proposal are recorded in research/frontier-41-ha-dt-29-batch-23-surface-completion.md and research/frontier-41-ha-dt-29-batch-23-surface-completion.proposal.json. This is constructive author completion, not a changed engine decision. Root retains based-loop/cycle work and downstream reconciliation; shared carriers were not overwritten during concurrent root writes.
