# Batch 14 notes — `quasisymmetry-welding-and-conformal-removability`

Run `frontier-43-complex-representation-15`, role beta (Step 1 scaffold), batch 14, attempt 1.

Pair: A page `quasisymmetry-welding-and-conformal-removability` (order 1622) and B page
`quasisymmetry-welding-and-conformal-removability-examples` (order 1623), category `complex-analysis`.
Outputs: `research/frontier-43-complex-representation-15-batch-14.pages.json` (16 A items + 6 B items),
`research/frontier-43-complex-representation-15-batch-14.coverage.json` (7 sources, 52 harvested rows),
`research/frontier-43-complex-representation-15-batch-14.cross-batch-dependencies.json` (41 rows),
the 22 item-readiness receipts `research/frontier-43-complex-representation-15-step1-<item>.json`, and this file.
A readiness record is not mathematical approval: Step 3 authors the proofs and Step 5 reviews them.

## Inputs read

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, `briefs/tasks/beta-batch.md` and the batch
  task file `research/frontier-43-complex-representation-15-beta-14.task.md`.
- Owner direction `research/frontier-43-complex-representation-15-owner-authoring-direction.md`, read in full; it is
  binding. Its batch-14 paragraph ("downstream CA-QC-3 use") restricts consumption of the CA-QC-2
  regularity/Jacobian interface to the moment its local proofs are authored and reconciled; this page consumes only
  `def-measurable-beltrami-coefficient`, `def-weak-solution-beltrami-equation` and
  `thm-measurable-riemann-mapping-sphere` from CA-QC-2, never the Holder-regularity lemmas or
  `thm-holder-regularity-beltrami-solutions`.
- The design section `research/plan-complex-analysis-track.md` §CA-QC-3 (L4205-4230, the id mention at L4208) and
  `research/plan-spec.json` entries for orders 1622/1623. The plan's `requires` list is the four declared pages.
- Drift review `research/frontier-43-complex-representation-15-alpha-step1-drift.md`: verdict for this page
  `no-drift`, with the explicit warnings that welding uniqueness is asserted only under conformal removability and
  that the Hausdorff claim is limited to zero-length sets and quasicircles, with no dimension-threshold converse.
  Both warnings are honoured literally in the inventory.
- Sources, fetched and read: Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials* vol. I
  (§1.4.1, §8.1-8.2, §13.3, §15.1-15.4, §16.1-16.3); Bishop, *Quasiconformal Mappings* (Ch. 1 §§1,4;
  Ch. 2 §§7-9; Ch. 3 §1); Ahlfors-Beurling, *Conformal invariants and function-theoretic null-sets* (§1, §§5-7);
  Younsi, *On removable sets for holomorphic functions* (§§1-5); Jones-Smirnov, *Removability theorems for
  Sobolev functions and quasiconformal maps* (§§1-2); Gehring, *Characterizations of quasidisks* (§I-II);
  Bishop, *Conformal welding and Koebe's theorem* (§1). URLs, locators and per-result dispositions are in the
  coverage file; stamps were written by `source-fetch-check --stamp`.
- The batch-12 and batch-13 manifests, read in full as the in-run suppliers of the quasiconformal and Beltrami
  interfaces (statement-level reading; their items are scaffolded but not yet authored).

## Design vs plan

- The design's three inputs CA-QC-2/CA-16/CA-PT-1 map onto the plan's `beltrami-equation-and-measurable-riemann-mapping`,
  `the-riemann-mapping-theorem` and `logarithmic-potential-capacity-and-riesz-decomposition`; the plan adds the fourth
  requirement `hausdorff-measure-and-hausdorff-dimension`. No statement or id conflict. **Recorded observation:** the
  declared requirement `logarithmic-potential-capacity-and-riesz-decomposition` is not consumed by any item of this
  pair (it is a reading-order prerequisite); the Hausdorff page is consumed at item level by
  `lem-zero-length-sets-are-removable-for-continuous-analytic-functions` and `ex-snowflake-quasicircle`.
- **Design ambiguity resolved in the plan's favour.** The design's welding one-liner says the welding is unique "only
  up to postcomposition after normalization qualifications", while the drift review requires uniqueness to be stated
  only under conformal removability. The inventory splits the two: `thm-quasiconformal-welding-existence` proves
  existence plus independence of the chosen extension and Möbius invariance (no removability), and
  `thm-welding-uniqueness-under-removability` proves the uniqueness statement with conformal removability of the
  welding curve as an explicit hypothesis. This matches Lyubich Theorem 15.23 and Younsi Proposition 5.23/Corollary
  5.24.
- No other design/plan conflict was found. In particular the design's "existence comes from extending and solving a
  Beltrami coefficient; uniqueness is never stated without removability" is preserved verbatim in the proof routes.
- One item-level placement observation for the owner (not a conflict): the Caratheodory/conformal-Schonflies boundary
  correspondence on a Jordan domain is a general complex-analysis fact that could be homed on CA-16/CA-17; it is
  needed by this pair, so it is scaffolded locally on the same A page as
  `lem-riemann-maps-of-jordan-domains-extend-homeomorphically`.

## Inventory

A page (16 items). The design's eight rows are preserved: `def-quasisymmetric-circle-homeomorphism`,
`thm-beurling-ahlfors-extension`, `def-quasicircle`, `thm-quasicircle-characterizations`,
`thm-quasiconformal-welding-existence`, `def-conformal-removable-compact-set`,
`thm-welding-uniqueness-under-removability`, `thm-zero-length-sets-and-quasicircles-are-conformally-removable`.
Eight further items are prerequisites required for a complete local closure; each is used by at least one design
item and none is padding:

| added item | why it exists |
|---|---|
| `lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps` | the gluing lemma used by the extension, characterisation, welding and removability proofs (Lyubich §13.3 smooth Little Gluing Lemma, Jones-Smirnov Proposition 1) |
| `lem-ahlfors-extension-of-line-quasisymmetric-maps` | the explicit Ahlfors-Beurling formula and its estimates, proved separately before the circle/line extension theorem |
| `lem-riemann-maps-of-jordan-domains-extend-homeomorphically` | the Conformal Schoenflies boundary correspondence, needed to state weldings and to build the conformal maps used in the characterisation theorem |
| `lem-zero-length-sets-are-removable-for-continuous-analytic-functions` | Besicovitch's theorem, the analytic engine of the zero-length removability claim |
| `lem-round-circles-are-conformally-removable` | the base case from which quasicircle removability is obtained by quasiconformal transport |
| `lem-positive-area-compact-sets-are-not-conformally-removable` | the positive-area obstruction, needed for the zero-area consequence used in transport and for the B-page counterexample |
| `lem-conformal-removability-is-quasiconformally-invariant` | Younsi Proposition 5.3, the transport that turns removable circles into removable quasicircles |
| `def-conformal-welding-of-a-jordan-curve` | the welding definitions used by the existence and uniqueness theorems and by three B items |

B page (6 items), one per design companion entry: `ex-quasisymmetric-power-map-on-the-circle` (power-map boundary
distortion, with the circle obstruction), `ex-snowflake-quasicircle`, `ex-conformal-welding-of-the-round-circle`,
`ex-mobius-ambiguity-in-conformal-welding`, `cex-every-compact-set-is-conformally-removable`,
`ex-single-point-conformal-removability`. The ids are exactly the six ids proposed for CA-QC-3 in the plan's
companion list.

Dependency levels were computed by `tools/item-dependency-levels.mjs` from the declared `deps` after the final edit;
the labels run 0-16. The A-page maximum is level 15 (`thm-welding-uniqueness-under-removability`, which consumes the
MRMT-based removability items); the overall maximum, level 16, sits on the two B-page welding examples
(`ex-conformal-welding-of-the-round-circle` and `ex-mobius-ambiguity-in-conformal-welding`), which both consume
`thm-welding-uniqueness-under-removability`. Every same-batch dependency points to an earlier item in reading order.

## Choice record

- **Countable Choice only:** `def-quasisymmetric-circle-homeomorphism`,
  `def-conformal-removable-compact-set`, `lem-zero-length-sets-are-removable-for-continuous-analytic-functions`,
  `ex-single-point-conformal-removability`. These are the definitional, Besicovitch and isolated-singularity
  arguments; none performs an uncountable selection (the square cover is built from a fixed rational grid) and none
  touches a quasiconformal map.
- **Axiom of Choice:** all remaining A items and all B items, each with the exact interface named in `axiom_use`:
  the ACL/Sobolev characterisation behind `def-acl-sobolev-quasiconformal-homeomorphism`, the
  measurable Riemann mapping theorem (existence and uniqueness parts), the Riemann mapping theorem's extremal
  selection, the Jordan-Schonflies theorem, or the composition law for quasiconformal maps. No item drops a
  supplier's choice assumption, and the Countable-Choice-only items stay usable in choice-free contexts.

## Sources and harvest

Seven sources were fetched with `source-fetch-check --stamp` and re-checked by `url-sweep` and `source-backing`:
Lyubich (monograph), Bishop QC notes (course notes), Ahlfors-Beurling 1950 (paper), Younsi 2015 survey,
Jones-Smirnov 2000 (paper), Gehring 1999 survey, Bishop 2007 (paper). 52 harvested results were given explicit
dispositions: **18 included** (13 distinct items), 20 inline, 14 out-of-scope with written reasons (annulus
interpolation and the Cantor-set equivalence; quasi-annulus compactness; the divergence property; holomorphic
motions/Teichmueller; the continuous-coefficient mapping theorem; the projection criterion; the capacity
computations; the absolute-area-zero characterisation; complex-dynamics applications; open problems; quasihyperbolic
and Holder-domain criteria; Gehring's Section III invariant machinery; Gehring's Section IV univalence criteria;
approximate-welding theory). No result was silently dropped, so no `source_resolution` record is
needed. `coverage-checklist --require-destination` accepts the file with one expected warning ("18/52 harvested
results scaffolded"), because the warning counts only `included` rows while the remaining rows are inline uses or
reasoned declines.

## Checks run (actual results)

| check | actual result |
|---|---|
| `node tools/manifest-deps.mjs <batch-14 manifest>` | `22 item(s), 0 normalized, 0 error(s)` |
| `node tools/manifest-deps.mjs <all run manifests>` | `313 item(s), 0 normalized, 0 error(s)` |
| `node tools/content-policy.mjs --manifest-only <batch-14 manifest>` | 22 scoped items, 40 `batch-dependency-missing` errors — the tool cannot see the batch-12/13 manifests when only one manifest is passed |
| `node tools/content-policy.mjs --manifest-only <all run manifests>` | `313 scoped item(s), 0 error(s), 0 warning(s)` |
| `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15` | no dependency-level or cycle error for any batch-14 item; the only errors are `empty scaffold inventory` for the four pages `kazhdans-property-t-and-spectral-gap(-examples)` and `sl2-r-discrete-series-and-unitary-dual(-examples)`, owned by other batches |
| `node tools/coverage-checklist.mjs <batch-14 coverage> --require-destination` | 1 page, 52 harvested results, 0 errors, 1 expected low-yield warning (18/52 included, explained above) |
| `node tools/source-fetch-check.mjs --coverage <batch-14 coverage> --stamp` | 7/7 sources fetch-verified (7 newly stamped) |
| `node tools/source-fetch-check.mjs --coverage <batch-14 coverage>` | 7/7 sources resolved from the stamps |
| `node tools/url-sweep.mjs --coverage <batch-14 coverage> --out /tmp/b14-url-liveness.json` | 7/7 live, 0 failed, 0 suspect |
| `node tools/source-backing.mjs --coverage <batch-14 coverage> --liveness /tmp/b14-url-liveness.json` | the authored (included) results are each still backed by an openable source |
| `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` | exit 0; declared page order acyclic and consistent; the tool reports 0 pages with item lists in its current scope and 30 planned pages without item lists |
| `node tools/frontier-item-gate.mjs --run ... --tool depcheck` | FAIL with one `focus-item-unknown` error per scaffolded item without an authored carrier (313 at recording time; 320 at the final pass). This is the documented Step-1 state; rerun after authoring |
| `node tools/frontier-item-gate.mjs --run ... --tool extcheck` | FAIL with the same shape of `focus-item-unknown` errors (count equals the run's scaffolded item total) |
| `node tools/step1-decisions.mjs check --run frontier-43-complex-representation-15` | 313 run items, 308 ready at recording time (320 items, 308 ready, 16 work rows at the final pass); **zero work rows belong to batch 14**; the remaining rows are the owner-held Glimm branch (batch 1) and four unscaffolded pairs |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-43-complex-representation-15` | refreshed and deduplicated |
| `git status` | this batch modified only `research/frontier-43-complex-representation-15-batch-14.*` and wrote its 22 receipts (plus the shared frontier-dependency-ledger refresh) |

Re-verified in a second pass on 2026-10-07 before closing the dispatch: `manifest-deps` 22/22 batch and 313/313 run,
`content-policy --manifest-only` 313 items 0 error/0 warning (per-batch 40 expected cross-batch errors), 7/7 sources
fetch-verified and resolved, `url-sweep` 7/7 live, `source-backing` 13 authored results backed, `coverage-checklist`
0 errors with the 1 expected low-yield warning, `item-dependency-levels check` clean for batch 14, `step1-decisions
check` 313 items / 308 ready with zero batch-14 work rows, `frontier-item-gate validate-plan` exit 0, and
`frontier-dependency-ledger refresh` clean. That pass corrected the harvest disposition counts (20 inline,
14 out-of-scope) and the level-maximum sentence in this file to match the delivered artifacts; no manifest or record
content changed.

Run-level totals above are snapshots: other batches were still in flight while this dispatch ran. The batch-1 page
was extended during the owner/operator repair of the Glimm branch (seven new items, run total 313 to 320 items; all
seven currently lack a readiness record and are batch-1 work), and batches 4, 5 and 11 were still being scaffolded.
Batch 14's own results do not move with them: 22 items, 0 manifest/policy errors, 22 current `ready` records, zero
batch-14 work rows. Only the owner-held batch-1 branch and the unscaffolded pairs keep the run-level
`step1-decisions check` open.

## Cross-batch record

- Declared edges involving batch 14: one page edge (this page `requires`
  `beltrami-equation-and-measurable-riemann-mapping`, batch 13) and 40 item-level edges into 13 batch-12/13 items
  (`def-acl-sobolev-quasiconformal-homeomorphism`, `def-geometric-quasiconformal-homeomorphism`,
  `def-beltrami-coefficient-and-maximal-dilatation`, `thm-geometric-and-analytic-quasiconformality-equivalent`,
  `lem-analytic-quasiconformality-implies-modulus-distortion`,
  `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality`,
  `thm-composition-and-inverse-quasiconformal`, `thm-one-quasiconformal-is-conformal`,
  `thm-modulus-rectangle-and-annulus`, `thm-extremal-length-conformal-invariance-and-monotonicity`,
  `def-measurable-beltrami-coefficient`, `def-weak-solution-beltrami-equation`,
  `thm-measurable-riemann-mapping-sphere`). All 41 rows are in
  `research/frontier-43-complex-representation-15-batch-14.cross-batch-dependencies.json` with status `open` and
  evidence naming the supplier statement, its declared hypotheses and the exact consumer use. Status is `open`
  deliberately: the supplier items are scaffolded but not yet authored.
- Batch 14 is a consumer of batch 12 and batch 13 and a supplier for no later batch; the design's
  `thm-beurling-ahlfors-extension` and the welding theorem are terminal for this run's frontier.
- The batch-14 section was appended to the canonical cross-batch ledger `briefs/tasks/frontier-dependency-ledger.md`,
  recording the 41-row input, the open statuses, the owner-direction compliance and the absence of any edge from a
  later batch into this pair.
- Assumption propagation: the Axiom of Choice carried by the batch-12/13 quasiconformal and MRMT interfaces is
  carried by every consuming item here through the exact interface named in its `axiom_use`; the four
  Countable-Choice-only items do not consume any AC-carrying supplier.

## Published defects and observations

- No defective published statement was found among the consumed suppliers. The published items examined at
  statement level (Hölder-space and modulus items, the Riemann mapping theorem, Jordan-Brouwer separation,
  Jordan-Schonflies, Weyl's lemma, Morera, Liouville, removable-singularity and Mobius items) state exactly the
  hypotheses used.
- Observation for the canonical ledger (no repair proposed, outside this batch's ownership): the plan's `requires`
  list for order 1622 names `logarithmic-potential-capacity-and-riesz-decomposition`, but no item of this pair
  consumes an item of that page; it is a reading-order declaration only. Impact: none on availability or ordering.

## Unresolved findings and escalations

- None for this pair. No page split is needed: the pair carries 22 items against the hard cap of 100, and the whole
  local closure (extension, boundary correspondence, gluing, transport and welding definitions) lives on the same A
  page as the results it supports.
- The eight added prerequisites are genuine closure work, not inventory padding. If the owner prefers the boundary
  correspondence rehomed to CA-16/CA-17, no statement on this page changes, only the home of one item.

## Decisions (22/22 `ready`)

Every item was recorded with `node tools/step1-decisions.mjs record --run frontier-43-complex-representation-15
--item ID --decision ready --dependencies '<manifest deps>' --reason '<strategy, examined suppliers, source
stamps>'`; the records were re-recorded after the last manifest edit and the checker reports no stale batch-14
record. No item is escalated. Any later manifest change invalidates the affected records and they must be re-recorded
before the Step-3 gate.
