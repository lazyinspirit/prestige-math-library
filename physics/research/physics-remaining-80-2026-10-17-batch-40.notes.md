# Batch 40 notes — qsm-spin-thermodynamic-limits

Run `physics-remaining-80-2026-10-17`, beta batch 40. This assignment owns
`qsm-spin-thermodynamic-limits` (A, order 577),
`qsm-spin-thermodynamic-limits-examples` (B), their six item carriers and this
batch's evidence only.

## Plan, design and inventory

The binding owner direction and the complete assigned section of
`research/plan-quantum-statistical-mechanics-track.md` at line 151 control the
scope and proof route. `research/plan-spec.json` agrees with the page titles,
companion, order and page prerequisite `qsm-finite-range-spin-dynamics`; its A
and B item arrays are empty planning placeholders. The design reserves four A
results: quantum lattice pressure, differentiable-point energy concentration,
stationary entropy/energy densities, and the stationary variational pressure
principle. It does not reserve the local definition of the translation action
and anchored interaction shapes needed to state those results precisely. I
added `def-qsm-translation-invariant-spin-interaction` to the A inventory and
marked `inventory_expansion_required: true`; the design omission is recorded,
not treated as a conflicting theorem claim. The finished A page has five items
and the B page has one, below the 100-item cap. The shared plan files were left
unchanged.

The page-level dynamics prerequisite was inspected at its current statement,
hypotheses and proof. Its Step 1 record is ready. The assigned claims use the
spatial translation action and do not use time evolution.

## Inventory, direct dependencies and levels

The manifest dependency graph and the current item carriers were recomputed
after authoring. Every displayed level agrees across carrier and manifest;
in-run suppliers were authored before their consumers.

| Item | Direct dependencies | Level |
|---|---|---:|
| `def-qsm-translation-invariant-spin-interaction` | `def-qsm-bounded-finite-range-interaction`, `def-qsm-local-spin-algebras`, `def-qsm-quasilocal-spin-algebra`, `def-countable-choice` | 5 |
| `thm-qsm-quantum-lattice-pressure` | translation-invariant interaction definition, local spin algebras, matrix-exponential response, finite-dimensional spectral theorem | 6 |
| `lem-qsm-energy-density-concentration` | translation-invariant interaction definition, pressure theorem, matrix-exponential response, finite-dimensional spectral theorem | 7 |
| `lem-qsm-stationary-spin-entropy-density` | translation-invariant interaction definition, infinite algebraic state, quasi-local completion, matrix-state calculus, finite-matrix C-star/state duality, Countable Choice, Axiom of Choice, finite-entropy composition, spin-state compactness, finite-dimensional spectral theorem | 9 |
| `thm-qsm-spin-pressure-variational-principle` | bounded finite-range interaction, translation-invariant interaction definition, infinite algebraic state, quasi-local completion, matrix-state calculus, Countable Choice, Axiom of Choice, pressure theorem, stationary entropy-density lemma, finite Gibbs variational theorem, finite-entropy composition, finite-matrix C-star/state duality, consistent local states, three finite partial-trace inputs, finite-dimensional spectral theorem | 10 |
| `ex-qsm-uniform-onsite-pressure` | none | 0 |

The full exact dependency and role arrays are in the item carriers and batch
manifest. The new direct bounded-interaction edge on the variational theorem is
required for the explicit per-site $\kappa$ boundary estimate. Its resulting
level remains 10.

## Mathematical review

- The pressure proof uses the finite-matrix trace and the first-derivative
  response identity to obtain a log-trace Lipschitz estimate. For arbitrary
  van Hove sets it uses one fixed cube-grid offset, retains only full cubes,
  places every partial cube in the residual shell
  $E_n\subseteq\partial_\ell\Lambda_n$, charges interactions meeting that
  shell to $\partial_{\ell+r}\Lambda_n$, and counts internal-cut anchors in
  retained cube face layers. No offset averaging is used. The proof yields an
  $O(1/\ell)$ comparison and then sends $\ell\to\infty$.
- The energy-concentration lemma defines the finite spectral probability law,
  proves mean convergence by convex secants, and derives upper and lower tails
  from finite exponential moments. The only differentiability assumption is
  the stated differentiability of $p_\Phi$ at the fixed $\beta>0$.
- The entropy-density lemma proves finite entropy bounds and the cube
  infimum by finite subadditivity. Its finite-range energy count, entropy
  semicontinuity and state compactness arguments state their choice assumptions
  and finite-dimensional scopes explicitly.
- The variational proof keeps the current finite Gibbs inequality as a
  conditional supplier. It constructs consistent block marginals, averages
  all $\ell^d$ phases, counts full and partial block entropies, and bounds the
  energy error by the number of boundary anchors times the per-site $\kappa$
  bound. The proof establishes attainment but makes no KMS identification.
- The B example evaluates the onsite trace exactly, including $c=0$ and $q=1$.
  All claims are mathematical model deductions; no measurements are reported.

## Source reading and dispositions

Two independent full texts were inspected for the A page: Naaijkens's complete
157-page lecture notes and the complete 12-page Lanford–Robinson paper. The
raw-PDF pagination and full-text inspection record is
`research/physics-remaining-80-2026-10-17-batch-40-sources/source-reading.md`.
The actual/printed page mapping for Lanford–Robinson was verified directly.
The coverage file records all 11 harvested source results: eight are included
in the assigned carriers and three are out of scope with item-specific reasons.
No retrieval failed, so no retry, source-resolution drop or alternative-source
search was needed. The final `source-fetch-check --stamp` reports 2/2
fetch-verified and 2/2 resolved, with no new stamps.

## Scoped checks and readiness

- Precheck: all five proof-bearing items pass.
- Proof layout: 6 items, 26 steps, 0 defects.
- Rendercheck: 8 explicitly changed item/page files, 0 errors or warnings.
- Focused depcheck: all 6 assigned items and their prerequisite cycle checks
  pass. Content policy: 6 scoped items, 0 errors or warnings.
- Strict proof contracts: 5/5 proof-bearing items, 0 errors or warnings.
- Coverage checklist: 1 A page, 11 harvested results, 0 errors or warnings.
- Assigned item levels: all six match their in-run supplier calculation.
  Batch 40 has 21 current cross-batch page/item edges; all are covered by
  verified rows in the 33-row batch input.
- Step 1 records: all six assigned items are ready with exact examined direct
  dependencies. These are authoring-readiness records, not independent proof
  approval.

## Run-wide owner blockers

The run-wide item-level check still reports 55 errors outside this assignment:
54 empty scaffold inventories and the EMG level mismatch
`pthm-emg-matter-symmetry-charges` (recorded 5, computed 7). No batch-40 item
has a level error. The full proof-contract-coverage command stops at the
unowned empty inventory `emg-mm03`; the strict batch-40 contract gate passes.

Recomputing the run-level batch graph leaves batch 40 at level 3 with
`requires: [36, 38, 39]`, matching its recorded row. Its shared input digest is
stale after the manifest edits (current
`b9ea2b7acf5a26d5bffc8a21dd382094bef997b9805798566f6a1817144720e6`, recorded
`2f4f39f4278dc89c3f6aab6d0ba61a1790e3bce6a0483da898fe467f7249c977`). The
run-level dependency artifact was left untouched for the owner to refresh.

The run-wide Step 1 check reports 422/475 ready, with 53 missing records and
54 empty inventories; all six batch-40 items are closed. Draft completion and
readiness do not imply independent approval or publication.

The read-only run-wide frontier dependency-ledger collector also stops on an
invalid row in the unowned batch-11 input: it has `kind: batch`, while that
ledger accepts only page/item consumer rows. Batch 40 was checked separately;
all 21 of its current cross-batch page/item edges have verified evidence. The
batch-11 input was left untouched.
