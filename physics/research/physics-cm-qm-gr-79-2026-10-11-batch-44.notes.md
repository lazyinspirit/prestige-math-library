# Batch 44 notes — `qm-state-geometry` / `qm-state-geometry-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, label **batch-44**,
covering the single pair `qm-state-geometry` (A, order 167) and
`qm-state-geometry-examples` (B, order 168), category
`non-relativistic-quantum-mechanics`, library `physics`. Step 1 complete
initial authoring only; a readiness record is not independent mathematical
approval (Step 3 review follows).

Read first: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L2972 with the reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`,
`research/scaffold-audit-2026-10-11/quantum-mechanics/supplier-map.json`, and
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 44: requires the completed batch 43 `qm-framework-and-quantities`).

## Scope built

- A page `qm-state-geometry` (order 167), 11 items: 1 mathematics-domain
  definition (`def-nrqm-state-geometry-state-vectors-and-rays`), 4
  mathematics-domain lemmas
  (`lem-nrqm-state-geometry-normalization-and-phase-classes`,
  `lem-nrqm-state-geometry-ray-to-rank-one-projection`,
  `lem-nrqm-state-geometry-density-set-convex-and-complete`,
  `lem-nrqm-state-geometry-purity-criterion`), the mathematics-domain
  definition of pure/mixed states and purity
  (`def-nrqm-state-geometry-pure-mixed-states-and-purity`), the
  mathematics-domain extremality lemma
  (`lem-nrqm-state-geometry-extreme-points-of-the-state-space`), the
  physics-domain reading of the state postulate in geometry vocabulary
  (`def-nrqm-state-geometry-framework-state-space`), the two physics theorems
  `pthm-nrqm-state-geometry-pure-preparation-phase-invariance` and
  `pthm-nrqm-state-geometry-mixtures-and-extremal-preparations` (conditional
  consequences of P1 together with the mathematical layer), and the scope
  remark `rem-nrqm-state-geometry-scope-and-empirical-status`.
- B page `qm-state-geometry-examples` (order 168), 7 leaf items: 5 examples
  (`ex-nrqm-state-geometry-normalization-and-phase-check` in mathematics;
  `ex-nrqm-state-geometry-finite-spin-bloch-ball`,
  `ex-nrqm-state-geometry-fixed-mode-two-level-states`,
  `ex-nrqm-state-geometry-coherent-versus-mixed-preparation`,
  `ex-nrqm-state-geometry-nonunique-preparation-ensembles` in physics),
  1 physics counterexample
  (`cex-nrqm-state-geometry-zero-vector-is-not-a-preparation`), and 1 scope
  remark (`rem-nrqm-state-geometry-examples-scope-limits`). Nothing outside
  the pair depends on them.
- Category `library/non-relativistic-quantum-mechanics/` continues the
  batch-43 pages; no new category member was needed beyond the two carriers.
  Page `requires`, order, kind, category, library, companion and titles are
  unchanged from the plan record; the only edits to the manifest are the two
  `items` arrays and the mechanically computed `dependency_level` labels.
- Delivered scope against the design's contract: the A inventory "Hilbert
  space/ray/normalization/phase/density; mathematical rank-one/convex-mixture
  lemmas; state postulate [M,D,P,T]" is delivered as the ray/normalization/
  phase layer, the rank-one projection lemma, the density-operator
  convexity/completeness lemma, the purity criterion and extremality lemma,
  and the framework state-space reading with the two conditional physics
  theorems; the B inventory "finite spin and fixed-mode photon states;
  coherent versus mixed preparations, zero-vector exclusion, nonunique
  mixture [H,examples]" is delivered as the normalization/phase check, the
  Bloch-ball computation of the finite-spin state space, the abstract
  fixed-mode two-level computation (its photon reading deliberately
  deferred), the coherent-versus-mixed comparison, the non-unique-ensemble
  example, the zero-vector counterexample and the scope remark.

## Design versus plan-spec, and conflicts recorded

- `research/plan-spec.json`, the generated batch manifest and the design
  section agree on page ids, titles, orders 167/168, category, library,
  companion, and the `requires` chain (`qm-state-geometry` requires
  `qm-framework-and-quantities`; the B page requires the A page). No
  page-edge or order conflict.
- **Reservation versus plan conflict (recorded).** The reservation in
  `inventory.json` budgets the A page at 34 items and the B page at 20
  (`"a_budget": 34, "b_budget": 20`), while the actually authored inventory is
  11 A + 7 B items; the reservation names no item ids. The plan controls and
  names no items either, so no reservation id is renamed and no budget is
  treated as a floor. The delivered scope keeps every entry of the
  reservation's qualitative inventories; the item counts are smaller because
  each lemma/theorem here carries its prerequisites and detailed proofs
  locally rather than being split into separate one-line items.
  This conflict is recorded for the owner alongside the reservation's
  `"requires_physics": ["NRQ-A01"]`, a claim identifier rather than a page id;
  the plan's page-level `requires` (`qm-framework-and-quantities`, batch 43)
  is followed.
- **Conventions preserved.** The design's warning that later pages give local
  formulations of the framework assumptions is implemented by homing the
  state postulate P1 on the framework page (batch 43) and having this page
  read it in geometry vocabulary (`def-nrqm-state-geometry-framework-state-space`)
  without restating it. The scaffold's pointer that the photon reading of a
  two-level space belongs to the radiation assumptions is preserved: the
  fixed-mode example states no photon interpretation, and no radiation
  content is introduced.

## Dependency graph, levels and construction order

Authored in prerequisite order; each item built once. In-run levels as
computed by `tools/physics-support/item-dependency-levels.mjs check --run`
(batch 44's suppliers are batches 35, 37 and 43 plus published mathematics):

| item | level |
|---|---|
| `def-nrqm-state-geometry-state-vectors-and-rays` | 0 |
| `lem-nrqm-state-geometry-normalization-and-phase-classes` | 1 |
| `lem-nrqm-state-geometry-ray-to-rank-one-projection` | 2 |
| `def-nrqm-state-geometry-pure-mixed-states-and-purity` | 3 |
| `lem-nrqm-state-geometry-density-set-convex-and-complete` | 4 |
| `lem-nrqm-state-geometry-purity-criterion` | 4 |
| `lem-nrqm-state-geometry-extreme-points-of-the-state-space` | 5 |
| `def-nrqm-state-geometry-framework-state-space` | 5 |
| `pthm-nrqm-state-geometry-pure-preparation-phase-invariance` | 6 |
| `pthm-nrqm-state-geometry-mixtures-and-extremal-preparations` | 6 |
| `rem-nrqm-state-geometry-scope-and-empirical-status` | 7 |
| `ex-nrqm-state-geometry-normalization-and-phase-check` | 4 |
| `ex-nrqm-state-geometry-finite-spin-bloch-ball` | 6 |
| `ex-nrqm-state-geometry-fixed-mode-two-level-states` | 6 |
| `ex-nrqm-state-geometry-coherent-versus-mixed-preparation` | 7 |
| `ex-nrqm-state-geometry-nonunique-preparation-ensembles` | 7 |
| `cex-nrqm-state-geometry-zero-vector-is-not-a-preparation` | 6 |
| `rem-nrqm-state-geometry-examples-scope-limits` | 8 |

`item-dependency-levels.mjs check --run` reports **no finding naming any of
these 18 items**; the 82 run-wide errors are other batches' empty scaffold
inventories. No cycle, forward edge or missing in-run supplier was
introduced; every in-run supplier (batch 35 composites suppliers, batch 37
finite-spin matrices, batch 43 framework postulates and definition) carries a
readiness record (`step1-decisions.mjs check` lists none of them as pending
work).

## Mathematical and physical closure decisions worth surfacing to reviewers

1. **The state postulate is read, not duplicated.** P1
   (`post-nrqm-framework-state-and-composition`) is homed in batch 43. This
   page only fixes the geometry readings of its clauses and proves
   conditional consequences; no new physical assumption is adopted, and the
   scope remark records this explicitly.
2. **Convexity and extremality are defined locally.** The state space is
   given its own definitions of convex combination, extreme point and purity
   inside the state-geometry items instead of importing generic convexity/
   extremality items whose home pages lie outside the plan closure (declaring
   those caused `undeclared-prereq` findings against the page's `requires`).
   The local treatments are self-contained: convexity, trace-norm
   completeness and boundedness of `D(H)` are proved in
   `lem-nrqm-state-geometry-density-set-convex-and-complete`, and the
   extreme-point statement is proved in
   `lem-nrqm-state-geometry-extreme-points-of-the-state-space` from the
   spectral expansion.
3. **Choice assumptions are declared and carried.** Countable Choice is the
   hypothesis of the cited rank-one and spectral suppliers; every consumer
   lists `def-countable-choice` and states the assumption in its Statement
   ("Assume the Axiom of Countable Choice..."). The mathematical items that
   use the rank-one calculus or the spectral expansion are conditional on it.
4. **Mathematics/physics split.** The rays, normalization, rank-one
   projection, density/convexity, purity and extremality items are
   `domain: mathematics` and depend only on mathematics; the state-space
   reading and the two theorems are physics items with nonempty
   `physical_scope`. No mathematical item depends on a physics item.
5. **No empirical claims.** The B page contains worked model-internal
   computations and one refutation; none of the items asserts a measurement
   prediction, a reported observation, a data comparison, or that any
   laboratory procedure prepares a given state. The
   coherent-versus-mixed example is a statement about the model's state
   assignment (states of rank one versus rank two), not an experiment; the
   non-unique-ensemble example uses the standard ensemble-ambiguity
   mathematics in the finite-dimensional case. The closing remarks record
   these qualifications.
6. **Final proof-repair edits.** Two step cross-references in finished
   carriers were corrected at finalization: in
   `lem-nrqm-state-geometry-ray-to-rank-one-projection` step 4.1 the
   reference to a nonexistent "step 1.2" was corrected to steps 2.1 and 3.1
   (the projection identification and its converse), and in
   `lem-nrqm-state-geometry-extreme-points-of-the-state-space` step 5.1 the
   range "Steps 1.1-1.3" was corrected to steps 1.1, 2.1 and 3.1 (the
   three-step pure-extreme argument). The proof contracts were regenerated
   afterwards and pass `--strict`.

## Sources, harvest and fetch status

Six distinct complete treatments back the pair (9 source entries across the
two coverage pages); every page has at least two independent treatments, and
the A page includes book/monograph/lecture-note sources.

- J. Preskill, *Lecture Notes for Ph219/CS219: Quantum Information and
  Computation*, Chapter 2 "Foundations I: States and Ensembles" (updated
  July 2015), `https://preskill.caltech.edu/ph219/chap2_15.pdf` — §2.1
  (rays, normalized representatives, phases), §2.2.1-2.2.2 (spin one-half;
  photon polarization), §2.3 and §2.3.2 (density operators; Bloch ball),
  §2.5.1-2.5.2 (convexity; pure states as extremal; ensemble preparation),
  §2.5.5 (ensemble ambiguity).
- J. Binney and D. Skinner, *The Physics of Quantum Mechanics*, author-hosted
  PDF, `https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf` —
  §1.3.4 (ket and one-dimensional projection), §1.3.6 (two orthonormal basis
  states of a fixed polarization mode; equal-amplitude superposition),
  §7.4.2 (spin one-half operators and matrices).
- G. Teschl, *Mathematical Methods in Quantum Mechanics* (1st ed. 2009),
  `https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf` —
  Hilbert-space states and trace-class operators used by the density and
  spectral results.
- G. Teschl, *Topics in Real and Functional Analysis* (17 November 2017),
  `https://uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf`
  — §3.6 (rank-one operators `T_{u,v}`, their trace and products).
- A. W. Knapp, *Advanced Real Analysis*, Chapter II (Hilbert spaces and
  operators), author-hosted PDF,
  `https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf`
  — projections and compact self-adjoint spectral material.
- B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 "Spin
  One-Half, Bras, Kets, and Operators", MIT OCW chapter PDF
  (`https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/...MIT8_05F13_Chap_02.pdf`)
  — the Pauli matrices, spin states and the density operator of a
  spin-one-half system.

`coverage-checklist.mjs` on the batch coverage file: **2 pages, 58 harvested
results, 0 error(s), 0 warning(s)**; every harvested result has a disposition
(included with an item id, or out of scope with a reason).
`source-fetch-check.mjs --coverage ...` (check mode, existing stamps):
**9/9 source entries fetch-verified, 9/9 resolved, 0 documented drops**.

## Checks actually run on the final carriers

- `precheck.mts` on the 18 items: 13 checkable, **0 failing**.
- `proof-layout.mjs` on the 18 item paths: **18 items, 57 steps, 0 defects**
  (run after the final proof-text edits).
- `rendercheck.mjs` on the 18 items and the 2 library carriers: **20 files
  clean** (KaTeX parse, YAML, wikilink/math nesting).
- `content-policy.mjs` on the batch manifest: **18 scoped item(s), 0
  error(s), 0 warning(s)**; `manifest-deps.mjs`: **18 item(s), 0 error(s)**.
- `proof-contract.mjs --strict` on the batch proof contracts: **13/13 items
  checked, 0 error(s), 0 warning(s)** — exact cited quotes, per-step
  derivations with stated inputs, and the standard boundary dispositions
  (including explicit `nonempty-choice` handling and the iff directions for
  the two equivalences).
- `proof-contract-coverage.mjs` against an overlay root whose only current
  manifest is this batch's: **18 item(s), 13/13 supplied argument(s)
  covered**.
- `depcheck.mjs --items-file` (the 18 items): exit 0, "selected item/page
  checks and their prerequisite cycle checks passed"; `fwdcheck.mjs
  --items-file` and `extcheck.mjs --items-file`: exit 0, no
  forward-undeclared row and no recorded-not-proved consequence for these
  items (the fwdcheck listing marks them "inherited" under published
  suppliers' forward edges, which this batch does not produce and declares no
  `forward_refs` of its own).
- `physics-check.mjs --root <overlay> --run ...`: **not runnable as a whole**
  because `verifyMathematicsImports` aborts on pre-existing mathematics-import
  drift (`items/def-finite-sum.md`) against the read-only source root — a
  run-level condition outside this batch. Equivalent scoped check: a direct
  `validatePhysicsContent` call on the batch's 18 items and 2 pages (overlay
  root, `requireBodies: true`) reports **0 error(s), 18 items checked**
  (domains, dependency roles, physical scope and page membership).
- `item-dependency-levels.mjs check --run`: no finding naming these 18 items
  (82 run-wide errors are other batches' empty scaffold inventories).
- `pathcheck.mjs non-relativistic-quantum-mechanics`: 0 pathway files checked,
  0 errors, 0 warnings (no `_pathway.md` yet; the category overview is
  present).
- `validate-plan.mjs research/plan-spec.json --run ...`: exit 1 run-wide with
  73 findings on **other** pages; the only lines naming `qm-state-geometry`
  are the informational page listings (167: 11 items, 168: 7 items), no
  undeclared-prerequisite, intra-order, prefix or size error on either page.
- Readiness records: one per item, recorded after the final carrier edits
  (see the `*-step1-*.json` records). After recording,
  `node tools/physics-support/step1-decisions.mjs check --run
  physics-cm-qm-gr-79-2026-10-11` reports **no pending work item for any of
  these 18 items** (647 of 774 run items ready at that check; the remaining
  work is other batches' missing records and pre-authoring empty scaffold
  inventories).
- Cross-batch ledger: `research/physics-cm-qm-gr-79-2026-10-11-batch-44.cross-batch-dependencies.json`
  declares the batch's 16 cross-batch edges (15 item edges to batch 35/37/43
  suppliers plus the page edge `qm-state-geometry -> qm-framework-and-quantities`),
  each with the exact required claim and use location (fact label, step or
  clause). After `frontier-dependency-ledger.mjs refresh --run
  physics-cm-qm-gr-79-2026-10-11`, all 16 rows merge with a `verified` review
  and no batch-44 row is orphaned (the orphaned reviews reported belong to
  batches 34 and 43; batch 44 appears in `reviewed_batches`).

## Escalations

None. Every prerequisite is supplied with a `ready` readiness record (batch
35 `lem-nrqm-composites-rank-one-operator-calculus` and
`lem-nrqm-composites-density-and-scalar-spectral-probability`, batch 37
`prop-nrqm-orbital-and-spin-finite-spin-matrices`, batch 43
`post-nrqm-framework-state-and-composition` and
`post-nrqm-framework-identical-particles-and-spin`), every other
mathematical premise is a currently published canonical root item, and no
promised claim of the design was dropped or weakened. The design/reservation
budget conflict above is a bookkeeping conflict, not an unmet prerequisite,
and is recorded for the owner rather than escalated as a blocker.

## Run-level notes for the owner

- `physics-check.mjs --run` (whole run) aborts on pre-existing
  mathematics-import drift (`items/def-finite-sum.md` differs from the
  receipt hash against the read-only source root); this predates and is
  independent of this batch and is not repairable inside it. The scoped
  `validatePhysicsContent` result is reported above.
- `depcheck.mjs` (whole corpus) and `fwdcheck.mjs` (whole corpus) exit
  non-zero only on unrelated published-content findings; no line names a
  batch-44 item or page except the two page dependency summaries.
- `validate-plan.mjs --run` reports 73 findings run-wide, all on other
  pages/batches; none on this pair.
- `item-dependency-levels.mjs check --run` reports 82 errors run-wide, all
  "empty scaffold inventory" for other batches; none on this pair.
- No file outside batch 44's ownership (the two library carriers, the 18
  item files, the batch manifest, coverage, proof contracts, cross-batch
  input and this notes file) was edited by this worker; the unified ledger
  was updated only through `frontier-dependency-ledger.mjs refresh`.
