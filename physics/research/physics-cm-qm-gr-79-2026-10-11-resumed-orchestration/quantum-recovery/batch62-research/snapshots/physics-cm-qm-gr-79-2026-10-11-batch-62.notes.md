# Batch 62 notes — Qm Many Body And Equilibrium Models

Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (Step 1 scaffolding and
complete initial authoring); pairs owned: 1 (`qm-many-body-and-equilibrium-models`
with companion `qm-many-body-and-equilibrium-models-examples`,
orders 203/204, category `non-relativistic-quantum-mechanics`, library
`physics`).

## Checkpoint

- 18 item carriers authored and registered on the two pages:
  - A page (13): `lem-nrqm-many-body-one-body-reduction-trace-law`,
    `lem-nrqm-many-body-two-level-thermal-formulas`,
    `def-nrqm-many-body-framework-declared-fixed-n-model`,
    `def-nrqm-many-body-framework-one-body-reduced-operator`,
    `def-nrqm-many-body-framework-entropy-and-free-energy`,
    `post-nrqm-many-body-canonical-equilibrium-ensemble`,
    `pthm-nrqm-many-body-noninteracting-sector-diagonalization`,
    `pthm-nrqm-many-body-one-body-readout-law`,
    `pthm-nrqm-many-body-exchange-energy-splitting`,
    `pthm-nrqm-many-body-thermal-equilibrium-characterization`,
    `pthm-nrqm-many-body-thermal-occupation-predictions`,
    `pthm-nrqm-many-body-unitary-evolution-preserves-entropy`,
    `rem-nrqm-many-body-scope-and-empirical-status`.
  - B page (5): `ex-nrqm-many-body-two-site-bond-thermal-ensemble`,
    `ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble`,
    `ex-nrqm-many-body-gas-statistics-dilute-limits`,
    `texp-nrqm-many-body-two-site-no-thermalization`,
    `rem-nrqm-many-body-examples-scope-limits`.
- Item dependency levels (computed with the run manifests; labels recorded in
  the carriers, the manifest and the readiness records): lem 3, 3; model and
  reduced-operator, entropy and diagonalisation, readout, exchange and
  bond-example and finite-mode-example levels 9-12; the equilibrium postulate
  and the canonical theorems 11-12; scope remarks and the gas/no-thermalisation
  items 13-14. No item depends on an item homed only on a B page of another
  page; the thought experiment uses only earlier items of its own B page.
- Artifacts: `research/physics-cm-qm-gr-79-2026-10-11-batch-62.pages.json`,
  `.coverage.json`, `.proof-contracts.json`, `.cross-batch-dependencies.json`,
  `library/non-relativistic-quantum-mechanics/qm-many-body-and-equilibrium-models{,-examples}.md`,
  plus one `research/…-step1-<item>.json` readiness record per item.

## Repair after construction (validate-plan undeclared prerequisite)

- `validate-plan.mjs` (run scope) flagged one batch-62 hard error: page
  `qm-many-body-and-equilibrium-models` had an item depending on
  `lem-exponential-dominates-one-plus-x`, whose home page
  `finite-probability-and-the-probabilistic-method` lies outside the transitive
  closure of the pair's declared `requires`. The consumer was
  `lem-nrqm-many-body-two-level-thermal-formulas`, which used the bound
  `exp(t)>=1+t` only to obtain `exp(t)>1` for `t>0` in step 1.1.
- Resolution without editing any shared plan or published item: [F3] now cites
  the in-closure published theorem `thm-exponential-is-strictly-increasing`
  (home page `the-exponential-function`, inside the requires closure of
  `qm-controlled-approximations` and `qm-identical-particles-and-exclusion`),
  and derives the normalization inside the item: the already-cited addition
  formula gives `exp(0)=exp(0)^2` and the already-cited positivity gives
  `exp(0)>0`, so `exp(0)=1` and strict increase gives `exp(t)>exp(0)=1` for
  `t>0`. Step 1.1, the proof-technique line and the first remark were reworded
  accordingly; no claim was weakened and the `1+t` bound was not needed
  anywhere else in the item.
- Regenerated after the change: batch manifest (`pages.json`), proof contracts
  (12 contracts; the F3 citation row now records strict-increase, addition and
  positivity, and the factual quotes were re-read), and cross-batch dependency
  evidence (251 rows; the retired supplier row replaced by the
  strict-increase row).
- Readiness re-recorded for the changed item and for its three transitive
  consumers (`ex-nrqm-many-body-two-site-bond-thermal-ensemble`,
  `texp-nrqm-many-body-two-site-no-thermalization`,
  `rem-nrqm-many-body-examples-scope-limits`), because the readiness hash
  covers transitive inputs; `step1-decisions.mjs check` now reports no open
  work touching any batch-62 item.
- `validate-plan.mjs` re-run: the batch-62 error is gone. The four remaining
  plan errors are the unrelated `gr-gr15-*` pages, outside this batch's scope
  and left for their owner.

## Plan, design and conflicts

The dispatch's plan data (order 203/204, requires
`qm-controlled-approximations`, `qm-identical-particles-and-exclusion`,
design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L3386) agrees with `research/plan-spec.json` for this pair, and both match the
design's budgets (A 42, B 24; delivered 13 + 5 items including local
mathematics, comfortably inside the 100-item page cap).

Recorded conflict (plan controls): the design's original reservation lists
`requires_physics: [NRQ-A13, NRQ-A15, NRQ-A16, NRQ-A17]` (composites, identical
particles, central potentials, controlled approximations), while the current
plan records page-level `requires` as the two pages above. The reservation's
claims are reached transitively (the identical-particles page requires the
composites and math-Fock pages, and the controlled-approximations page requires
central potentials), and the items below consume the composites/permutation and
fixed-$N$ suppliers directly. No claim in the design was dropped or narrowed;
the plan's requires list is transcribed unchanged into the manifest.

## Dependency graph and levels

- In-run suppliers used: batch 35 `qm-math-composites` (tensor, permutation,
  rank-one, density, partial trace, Euclidean product unitary), batch 41
  `qm-math-fock-and-equilibrium` (Fock direct sum, sector projections,
  creation bounds, number operator, one-mode thermal trace, product criterion,
  fermion/dilute formulas, finite Gibbs minimum, bounded fixed-$N$,
  permutation-restricted self-adjointness, fixed-$N$ Coulomb,
  Slater/direct-exchange), batches 43-47 (framework postulates and readings,
  state/observable/evolution/quantities definitions), batch 57
  `qm-identical-particles-and-exclusion` (species sectors and preparations,
  occupation model and counts), and the root mathematical suppliers
  (finite-dimensional spectral theorem, Jensen, exponential/logarithm laws,
  extension-of-bounded-map, trace class and cyclicity).
- `node tools/physics-support/item-dependency-levels.mjs check --run
  physics-cm-qm-gr-79-2026-10-11` reports no error for any batch-62 item; the
  only remaining errors are the empty scaffold inventories of the batches
  still authoring in other pairs (`qm-three-dimensional-scattering`,
  `qm-light-matter-and-spectral-transitions`).
- Cross-batch dependency evidence: 251 records in
  `physics-cm-qm-gr-79-2026-10-11-batch-62.cross-batch-dependencies.json`,
  each naming the role, the supplier batch/page, the inline use and the
  supplier statement inspected.

## Sources and dispositions

Coverage file: `physics-cm-qm-gr-79-2026-10-11-batch-62.coverage.json`
(49 harvested results disposed; 8/8 source slots fetch-verified by
`source-fetch-check --stamp`).

| Source | Locators used | Status |
|---|---|---|
| Binney & Skinner, *The Physics of Quantum Mechanics* (author-hosted PDF) | §5.2 pp. 79-81; §6.3.1-6.3.2 pp. 125-129; §6.4 pp. 129-132; §10.1-10.2 pp. 226-235 | full text read by the track research agent (`reader-binney`); stamped |
| BIPM, *The International System of Units*, 9th ed. 2019 | §2.2 and Table 1, printed pp. 123-124 (Boltzmann constant exact) | local `si.pdf` inspected with a PDF text extractor; stamped |
| Burmistrov & Lunkin, *Lecture Notes on Statistical Mechanics* (HSE 2023) | §1.1.1-1.1.5 pp. 12-15; §1.3.1 pp. 24-27; §1.4.1-1.4.2 pp. 33-34 | full 151-page PDF fetched in this batch and the cited sections read; stamped |
| Essler, *Advanced Quantum Theory* (Oxford notes) | Ch. 1 §1.1-§1.4 pp. 3-13 | full 68-page PDF fetched in this batch; cited sections verified (an earlier draft locator "Sections 1.3/3.1" was wrong and was corrected after inspection) |
| Fitzpatrick, *Quantum Mechanics* (UT Austin) | Ch. 6 §6.4-6.5 printed pp. 88-92 (PDF 87-91) | full 222-page PDF fetched in this batch; chapter inspected; stamped |

Source limits recorded on the page: the thermodynamic identifications in the
textbook sources are heuristic model assumptions, not derivations; the
Burmistrov-Lunkin notes set $k_B=1$ implicitly, so the SI reading
$\beta=1/(k_BT)$ with the exact BIPM value is our convention; Binney's
exchange-integral positivity argument is heuristic, and the page relies on the
local complete proof in the math supplier instead. No experiment or measured
value is used on this pair, and no experiment item is created.

## Checks actually run (all from the workspace root)

- `precheck` on all 18 carriers: 13 proof-bearing items, 0 failing.
- `rendercheck` on all 18 carriers: clean (YAML, KaTeX, no multiline display).
- `proof-layout` on all 18 carriers: 18 items, 54 steps, 0 defects.
- `content-policy` on the batch manifest: 18 items, 0 errors, 0 warnings.
- `manifest-deps` on the batch manifest: 18 items, 0 errors.
- `coverage-checklist` on the coverage file: 2 pages, 49 results, 0 errors.
- `source-fetch-check` (gate mode): 8/8 sources fetch-verified.
- `item-dependency-levels` check: no batch-62 error (other batches' empty
  scaffolds still fail the whole-run command).
- `validate-plan.mjs research/plan-spec.json --repo . --run
  physics-cm-qm-gr-79-2026-10-11`: no batch-62 error after the repair; the
  remaining four errors are the unrelated `gr-gr15-*` pages.
- `extcheck`: clean; `fwdcheck`: 0 open forward references. The whole-repo
  `fwdcheck` run itself exits non-zero on 12678 unrelated
  `forward-undeclared` findings in other (in-flight and legacy) items; no
  batch-62 item appears in any finding, and the batch items correctly show the
  inherited forward marker.
- `depcheck` (whole corpus): no error mentions any batch-62 item. The corpus
  total is non-zero for unrelated existing content (for example the 2803
  `published-unaudited` findings, including
  `thm-zero-divisor-theorem-on-plane-domains`, and one `b-leaf-content` finding
  in `lem-nrqm-scattering-three-dimensional-current-and-flux`, all outside this
  batch's scope and reported here for owner reconciliation only).

## Observations for the ledger (not escalations)

- Minor indexing typo in the in-run draft item
  `thm-nrqm-identical-particles-occupation-number-basis` clause (b): the
  Slater family is indexed as $(e_J^\wedge)_{J\in\{1,\dots,d\}^n}$ whereas the
  intended index set is the $n$-element subsets of $\{1,\dots,d\}$; the
  clause's own content is unambiguous and this batch's uses rely on the
  correct reading ("$N$-element subset $J$"). Repair strategy for the owning
  batch: replace the index set by $\{J\subseteq\{1,\dots,d\}:|J|=n\}$. No
  mathematical consequence in this batch.
- Whole-run gates that join all manifests (for example
  `proof-contract-coverage.mjs --run`) currently cannot start because the
  in-flight batches still have empty scaffold inventories; the batch-62
  contracts file is complete and will be consumed when those inventories
  exist. This is a scheduling condition, not a content blocker for this
  batch.

## Escalations

None. Every prerequisite used by this batch exists as an authored in-run item
or as published canonical mathematics; no cross-batch change, page split or
new prerequisite pair was required. The equilibrium postulate is the only
adopted physical assumption added on this page, with source-backed motivation
and explicit scope; the canonical ensemble is never derived from P1-P4.
