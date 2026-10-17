# Batch 10 authoring notes — local evolution of the adopted electrovacuum model

Run: `physics-remaining-80-2026-10-17`  
Role: beta  
Assigned pair: `emg-pcp01` / `emg-pcp01-examples`

## Scope, inventory, and order

This batch owns only the assigned A/B pair and six draft items. The A page
contains two local mathematical suppliers followed by the local model theorem,
the on-shell stress-conservation result, and the maximal-development theorem.
The B page contains the exact flat-torus example. Both pages remain draft and
are within the 100-item cap.

| Item | Page | Domain | Dependency level |
|---|---|---:|---:|
| `lem-emg-spacelike-slice-normal-collar` | A | mathematics | 0 |
| `lem-emg-closed-two-form-exact-on-cauchy-product` | A | mathematics | 0 |
| `pthm-emg-local-electrovacuum-model` | A | physics | 8 |
| `pthm-emg-on-shell-electromagnetic-conservation` | A | physics | 8 |
| `pthm-emg-smooth-electrovacuum-maximal-model` | A | physics | 9 |
| `ex-emg-adopted-parallel-field-model` | B | physics | 9 |

The two new mathematical helpers have no in-run suppliers. The local and
conservation results take one plus the highest current in-run supplier level
(batch 7 at level 7); the maximal result takes one plus the batch-7 maximal
supplier at level 8; the example takes one plus its same-run local theorem at
level 8. The run's batch schedule places batch 10 at level 4 and requires
batches 1, 2, 5, 6, and 7. Page/item dependencies are authored supplier-first.

## Plan conflicts and resolutions

- The binding owner direction, current `plan-spec.json`, and current A-page
  inventory require `emg-cp02` and `emg-g04`. The historical track reservation
  lists `emg-g04`, `emg-g01`, `emg-cp02`, and `emg-cp01`. The older extra page
  edges are transitively included by the current CP02/G04 prerequisites; the
  batch uses the current exact pair and does not edit the shared plan.
- An older CP08 design/source dossier and the pre-edit inventory carried full
  Axiom of Choice into the maximal-development route. The inspected current
  `thm-emg-sourcefree-smooth-maximal-development` statement and proof require
  only Countable Choice (`ACω`) and Dependent Choice (DC), as does the inspected
  generic GR maximal-development theorem. The final maximal item and manifest
  therefore declare exactly `def-countable-choice` and `def-dependent-choice`;
  full AC is neither assumed nor declared.
- The page order and assigned titles match the plan. No claim was narrowed to
  fit the page or an old inventory.

## Interfaces and dependency evidence

All direct dependencies are present in the authored item frontmatter and the
batch manifest, with matching dependency roles. The 31 exact in-run cross-page
and cross-batch edges are in
`physics-remaining-80-2026-10-17-batch-10.cross-batch-dependencies.json`.
Their `verified` status records the scoped statement/interface comparison only;
it is not proof approval. External mathematical premises are not misreported
as run-batch edges.

- Batch 1 supplies the SI geometry/unit convention. Its exact field, stress,
  and coupling conventions are retained.
- Batch 2 supplies local potentials and fixed-circle-bundle gluing. The
  consuming proofs use local representatives and global curvature; none
  assumes a global potential.
- Batch 5 supplies the adopted action and its compact-variation field-equation
  interface. The action postulate is a current draft/Step-1-ready adopted
  assumption; the action-equation theorem is a current draft/Step-1-ready
  result with `verification.precheck: pass`. All action deductions remain
  conditional on those inspected suppliers.
- Batch 6 supplies the electrovacuum Cauchy system, the four constrained-data
  equations, the periodic Sobolev definition, and the Maxwell stress identity.
  The definitions and stress identity are current drafts with Step-1-ready
  records and `verification.precheck: pending`; their exact inspected
  statements/proofs are used conditionally. Current Oct. 17 item records are
  ready after the owner's import reconciliation. Older batch-6 notes record an
  earlier stale-import escalation; that is historical evidence, not the current
  interface status.
- Batch 7 supplies local high-Sobolev existence, smooth local geometric
  uniqueness, and the source-free smooth maximal-development theorem. These
  are current draft mathematical interfaces with Step-1-ready records and
  `verification.precheck: pending`; each is used at its exact inspected
  interface conditionally, not as independently accepted proof.
- The published temporal-splitting theorem is present with a complete proof,
  but its current `verification.precheck` is `pending`. The Cauchy-product
  exactness lemma states this exact status and uses only its inspected complete
  flow/product interface conditionally. The local and maximal consumers do the
  same; no claim here upgrades that supplier to independently verified.
- Other external premises include the local geodesic/exponential-map theorem,
  manifold inverse-function theorem, de Rham definition, smooth Lorentzian and
  Cauchy definitions, and the development/isometry definition. Their exact
  statement and hypotheses were checked; the geodesic/exponential and inverse
  function theorems have published proofs and `verification.precheck: pass`.
  The two new local mathematical helpers prove the normal collar and
  Cauchy-product exactness results before their use. Their frontmatter precheck
  fields remain pending for engine recertification even though this batch's
  explicit scoped precheck passed.

The local theorem fixes the SI signature, stress normalization, Cauchy signs,
the zero-matter action, the periodic `s ≥ 5` regularity clause, and the
separate arbitrary-smooth-data local clause. Its magnetic field is compatible
with one explicitly supplied normalized circle-bundle sector, while electric
initial data remain independent. The maximal result asserts only smooth
globally hyperbolic maximality and unique data-fixing isometry; it does not
assert completeness or global-time regularity. The example verifies an exact
nontrivial flux sector and all four constraints, with no later isotropy or
empirical claim.

## Source reading and limits

The six full-text A-page sources are recorded in the coverage file with search
queries, complete-document retrieval stamps, item mappings, locators, and a
disposition and limitation for every harvested result. Two independent
Einstein-Maxwell treatments support the A-page formulation, including complete
lecture notes and a differential-forms book for the local mathematical
arguments.

- Chruściel's complete 132-page notes: all of §1.6. The discussion gives the
  source-free field-strength/Cauchy formulation and constraint propagation;
  its global-potential gauge treatment is not imported as a bundle hypothesis,
  and it does not prove coupled local existence.
- Alcubierre–Degollado–Salgado, complete 20-page paper: all of §§II.1–II.3.
  Gaussian normalization and the opposite extrinsic-curvature sign are not
  copied. Its stated limitation on the coupled Einstein evolution is retained.
- Reall's complete 125-page notes: §§3.3–3.4, §6.2, §6.3, and §10.4. The
  source-free stress-conservation calculation is an exercise, so the item
  proves the local tensor identity from the current Maxwell identity instead.
  Gaussian and `c=1` conventions are not imported.
- Sbierski's complete 25-page paper: the full statement hypotheses and all of
  §§3.1–3.3. It is vacuum-only; the EMG mathematical supplier's exact local
  existence/uniqueness interface supplies the matter-coupled obligation
  conditionally.
- Tong's complete 51-page GR chapter: the full exponential-map and normal
  coordinate passage. It supplies geometric context, not a uniform tube.
- Guillemin–Haine's complete 272-page differential-forms text: §2.6,
  Theorem 2.6.15, the pullback identities, and the product homotopy formula.
  The local lemma proves the global Cauchy-product primitive directly.

The B example additionally maps the full §II constraint calculation in
Alcubierre–Degollado–Salgado and Chruściel's complete §1.6 formulation. No
source is treated as proof authority for physical validity. No source retrieval
failed; `source_resolution` is empty and no source was dropped.

## Proof contracts and readiness

`physics-remaining-80-2026-10-17-batch-10.proof-contracts.json` is generated
from the finished proofs. It maps every fact link to an exact current supplier
statement excerpt and every numbered step to its actual inputs. It includes
the eight standard boundary dispositions for each item and records the exact
symbolic bundle/constraint checks for the B example. No finite check can
replace the analytic PDE or maximal-development premises.

Step-1 readiness is authoring readiness, not independent proof approval. The
temporal-splitting input's pending precheck, the current draft status of the
CP02 and action suppliers, the exact conditional arguments, and the source
proof limitations remain explicit in the items and notes. No prerequisite
carrier is absent; all required current interfaces are available for the
complete conditional proofs. Final item decisions are recorded only after the
scoped checks below.

## Scoped checks

Final command results are recorded here after the item, manifest, page,
contract, coverage, and dependency evidence have reached their final bytes.

- `source-fetch-check --stamp`: 8/8 sources verified, 8/8 resolved, 0 newly
  stamped, 0 dropped. The coverage checklist passes 2 pages / 20 harvested
  results with 0 errors and 0 warnings; `source_resolution` remains empty.
- `content-policy`: 6 scoped items, 0 errors, 0 warnings. Strict proof
  contracts: 6/6, 0 errors, 0 warnings. `precheck`: 6 proof-bearing items, 0
  failures. `proof-layout`: 6 items, 22 steps, 0 defects.
- `rendercheck`: all 6 items and 2 pages pass math, wikilink, and frontmatter
  checks. Focused `depcheck`: 6 selected items, prerequisite closure of 2,471
  items / 395 pages, selected item/page cycle checks pass.
- A direct scoped dependency-level recomputation matches all six manifest
  values (0, 0, 8, 8, 9, 9). The scoped page/item/manifest comparison passes,
  including all 31 exact cross-batch edges. Run-wide
  `item-dependency-levels.mjs check --run` remains blocked by 46 unrelated
  empty scaffold inventories; it reports no recorded-level mismatches, no
  cycles, and no batch-10 level mismatch. Run-wide
  `batch-dependency-levels.mjs check --run` reports the shared scheduling file
  stale. I did not rewrite that owner-controlled run-level file.
- The current items and dependency interfaces passed all scoped authoring
  checks. The run-wide scheduling/checker blockers remain outside this batch;
  they are not treated as independent proof approval or silently repaired here.
- `step1-decisions.mjs record` wrote current `ready` records for all six
  assigned items with `owner: false`, each item's exact direct dependency IDs,
  and evidence describing the scoped authoring checks and conditional supplier
  status. The subsequent run-wide check confirms all six records are current.
  It reports 541 run items, 530 ready, and 57 open item/page work entries
  outside this batch; global closure remains false. No escalation was
  overwritten and no `--owner` override was used.
