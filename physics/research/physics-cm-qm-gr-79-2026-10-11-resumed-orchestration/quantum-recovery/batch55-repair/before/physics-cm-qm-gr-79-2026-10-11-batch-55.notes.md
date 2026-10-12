# Batch 55 notes — Qm Composites Entanglement And Reduced States

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **55**, covering the
pair `qm-composites-entanglement-and-reduced-states` (A, order 189) and
`qm-composites-entanglement-and-reduced-states-examples` (B, order 190),
category `non-relativistic-quantum-mechanics`, library `physics`. Both pages
are `status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (no
batch-55-specific override; its crash-recovery paragraph on corrected
tensor-spin, interference, measurement and framework uses was applied), the
batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch
55: level 11, requires batches 46 and 54), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3220, the
reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
(order 13) and the prose scaffold row 13, and `research/plan-spec.json`.

## Inventory

A page `qm-composites-entanglement-and-reduced-states` (11 items; manifest
`dependency_level` in parentheses):

1. `lem-nrqm-composites-local-pvm-tensor-extension` (2) — batch-local
   mathematics: tensoring a PVM with the identity of the other factor gives a
   PVM, identifies the bounded integrals, preserves strong convergence under
   uniform boundedness, and preserves regularity, so that the converse
   spectral theorem supplies a self-adjoint local readout.
2. `def-nrqm-composites-separable-and-entangled-states` (5) — mathematics:
   product vectors and pure product states, separable states as the declared
   trace-norm closed convex hull of the pure product states, entangled states
   as its complement, and the finite-dimensional convention.
3. `def-nrqm-composites-framework-composite-systems-and-local-readouts` (9) —
   the page's fixed readings of P1 clause (iv) and P2/P3: declared composite
   and its state space, product basis convention, local readout of an assigned
   sharp observable through $E_A(\cdot)\otimes I_K$, local effects and local
   instruments, and their scope.
4. `def-nrqm-composites-framework-reduced-preparations` (10) — reduced
   preparations $\rho_A=\operatorname{Tr}_K\rho$, $\rho_B$, affineness,
   continuity, the product case and correlated/uncorrelated vocabulary.
5. `pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement` (11) —
   Schmidt expansion of a pure composite preparation, reduction formulae and
   purity, with the equivalence of a single nonzero coefficient, purity of
   either reduction, product form and $\rho=\rho_A\otimes\rho_B$.
6. `pthm-nrqm-composites-local-readout-laws-and-reduced-preparations` (11) —
   the local readout law equals the factor quantity's law in the reduced
   preparation, the converse determination of the reduced preparation by local
   statistics, and the conditional and discarded reductions of a declared
   ideal sharp measurement of one factor.
7. `pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations`
   (12) — factorization of every local effect pair in a product preparation,
   and an explicit non-factorizing pair of rank-one effects for a non-product
   pure preparation.
8. `pthm-nrqm-composites-local-instruments-and-no-signalling` (12) — a
   declared local instrument of one factor leaves the other factor's reduced
   preparation and local laws unchanged when its record is discarded, and the
   conditional reductions average back to it.
9. `def-nrqm-composites-marker-model-and-fringe-visibility` (11) — the
   declared marked two-component model: path components, marker states, phase
   family, marker-carried which-path preparation, detection weights and the
   fringe visibility of the phase family.
10. `pthm-nrqm-composites-marker-overlap-and-visibility-bound` (12) — the
    detection law with its cross term contracted by the marker overlap, the
    phase-family extremes and the visibility bound
    $V(B)\le|\langle e_1,e_2\rangle|$.
11. `rem-nrqm-composites-scope-and-empirical-status` (13) — scope and
    empirical status of the page.

B page `qm-composites-entanglement-and-reduced-states-examples` (4 items):

1. `texp-nrqm-composites-singlet-correlations` (13) — the internal-factor
   singlet: reduced preparations, directional joint laws, correlation
   $\mathbb E(a,b)=-a\cdot b$, perfect anti-correlation and
   setting-independent marginals.
2. `ex-nrqm-composites-marker-overlap-visibility` (13) — the two-cell flat
   model with $p(\varphi)(B)=\tfrac12(1+\cos\vartheta\cos\varphi)$ and
   $V(B)=\cos\vartheta$, saturating the bound.
3. `ex-nrqm-composites-improper-versus-proper-mixtures` (14) — the singlet
   marginal $\tfrac12I$ versus a fair random mixture of factor preparations
   with the same density operator, distinguished by the joint correlations.
4. `rem-nrqm-composites-examples-scope-limits` (15) — scope of the examples
   page.

Carriers `library/non-relativistic-quantum-mechanics/qm-composites-entanglement-and-reduced-states.md`
and `...-examples.md`; manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-55.pages.json`; proof contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-55.proof-contracts.json` (9
proof-bearing items: the lemma, the five physics theorems, the thought
experiment and the two examples; the four definitions and the two remarks
carry no proof section); coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-55.coverage.json` (2 pages, 22
harvested results, 6 fetch-verified source entries); cross-batch input
`research/physics-cm-qm-gr-79-2026-10-11-batch-55.cross-batch-dependencies.json`
(99 rows after the final readiness pass: 97 item edges into in-run suppliers
of batches 35-54 plus two cross-batch page edges; see "Cross-batch input
cleanup" below).

## Design versus plan (conflicts and deviations)

1. **`requires` drift (dispatch names two pages; the manifest names three).**
   The dispatch, the design section and `plan-spec.json` declare
   `qm-angular-momentum-and-spin` and `qm-measurement-and-instruments` for the
   A page. The local mathematical lemma
   `lem-nrqm-composites-local-pvm-tensor-extension` uses the notion of a
   compact set in the regularity clause, whose home page `compactness` is not
   in the closure of the declared prerequisites; `validate-plan --run` reported
   the `undeclared-prereq` finding, and the page now declares `compactness` as
   a third requirement (as batch 54 declared its own third requirement).
   `plan-spec.json` is not edited; the difference is recorded here for owner
   reconciliation.
2. **Recorded `redundant-prereq` warning.** `validate-plan --run` warns that
   `qm-measurement-and-instruments` is reached transitively through
   `qm-angular-momentum-and-spin` (via `qm-uncertainty-and-compatibility`).
   The direct requirement is retained because the current plan declares it for
   this page; batch 54's notes already recorded the same warning for this
   page.
3. **Reservation scope versus implementation.** The reservation's
   `a_inventory` ("tensor composition postulate, product basis, entanglement,
   Schmidt/reduced density, local observables, finite no-signalling
   [M,D,P,T], 44") is covered as follows: the tensor composition postulate is
   the framework's P1 clause (iv), homed on `qm-framework-and-quantities`; the
   page does not duplicate it but reads it in
   `def-nrqm-composites-framework-composite-systems-and-local-readouts` with
   P1 as a declared formulation prerequisite, and records the reading. The
   product basis is clause (b) of that definition; entanglement is
   `def-nrqm-composites-separable-and-entangled-states`; Schmidt and reduced
   density are `pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement`
   with `def-nrqm-composites-framework-reduced-preparations`; local
   observables are clauses (c)-(e) of the composite reading plus
   `pthm-nrqm-composites-local-readout-laws-and-reduced-preparations`; finite
   no-signalling is `pthm-nrqm-composites-local-instruments-and-no-signalling`.
   The `b_inventory` ("singlet correlations, path-marker
   overlap/visibility, improper versus classical mixtures [H,examples], 24")
   is covered by the three B computations. Budgets: A 11/44, B 4/24 items.
4. **Mixed-state separability (explicit limitation).** The definition of
   separable states is given for general states, but the pair does not prove
   the general theory of mixed-state separability or the equivalence between
   separability and product form on pure states; the pure-state theory of the
   page is proved for product/non-product vectors through the Schmidt purity
   criterion, and the definition states that no equivalence is asserted. A
   future mixed-state separability/entanglement-measure pair is the recorded
   destination; the definition of the closed convex hull is the standard one
   and is used only definitionally.
5. **No experiment item.** The B reservation is `[H,examples]` only and the
   design names no `[E]` candidate for this pair, so no experiment item is
   built and no empirical correlation is reported; the singlet and marker
   comparisons are conditional model computations. The Bach electron
   double-slit experiment is homed on the interference pair (batch 49) and is
   not consumed here.
6. **Choice hypotheses.** Countable Choice is declared where the tensor
   construction, partial trace and Schmidt theorems are used; the local
   readout additionally carries the Axiom of Choice through the spectral
   theorem, and the marker def uses the local readout. The Schmidt reduction
   theorem is Countable-Choice-only.

## Source harvest and dispositions

Two independent treatments support the A page (Binney–Skinner full book;
Zwiebach MIT 8.05 Chapter 8) plus Teschl's monograph for the tensor and
spectral mathematics; the B page uses the same three. Coverage records 22
harvested results, each `included` with an item or `out-of-scope` with a
specific reason; the Bell inequality and its empirical discussion are
`out-of-scope`, reserved to the later Bell-models pair. All six source entries
(two pages, three entries each) were fetched in full and stamped by
`source-fetch-check --stamp`; no `source_resolution` record is needed.

Locator corrections made while reading: Binney's composite and reduced-density
material is Section 6.1 printed pages 105-111 and Sections 6.3/6.3.1 printed
pages 121-127 (PDF page = printed page + 8); the singlet correlation formula is
Binney equation (6.41) in Section 6.1.4; Zwiebach's Chapter 8 sections are
printed chapter pages 1-7, 8-9, 9-12 and 16-19; Teschl's tensor material is
Section 1.4 printed pages 45-47 (PDF pages 57-59) and the PVM/scalar-measure
material Section 3.1 printed pages 87-98 (PDF pages 99-110). Binney's own
composition proof is recorded by the reader report as inadequate, so every
mathematical claim of this batch is proved locally from the cited mathematics
rather than adopting the source's argument.

## Authoring decisions and corrections

1. **Local readout through the spectral measure.** The composite operator
   $A\otimes I_K$ for unbounded $A$ is not defined by the page directly; the
   local readout is defined by its regular spectral measure
   $E_A(\cdot)\otimes I_K$, whose regularity comes from the local-PVM lemma,
   and the converse spectral theorem supplies the self-adjoint operator. The
   bounded case coincides with $A\otimes I_K$; the position and momentum
   observables are covered through their projection-valued measures.
2. **Visibility definition.** Visibility is defined as the sup-inf contrast of
   the declared phase family; the theorem identifies the extremes as
   $p_{\mathrm{mix}}(B)\pm|\gamma(B)|$ and computes
   $V(B)=|\gamma(B)|/p_{\mathrm{mix}}(B)$ for overlap-normalized models. The
   overlap-normalization hypothesis $\langle\psi_1,\psi_2\rangle=0$ is what
   makes the normalization of the phase family phase-independent; without it
   the detection weight carries a phase-dependent normalization denominator,
   which the theorem's remarks state and do not compute.
3. **Separability consistency not claimed.** An attempt to prove that every
   non-product pure state fails to be separable in the general closed-convex-
   hull sense would require a Milman-type extreme-point argument or a
   Hilbert–Schmidt Cauchy–Schwarz bound; neither is available locally at a
   proportionate cost. The definition therefore states explicitly that no
   equivalence on pure states is asserted, and the page's pure-state results
   use product/non-product vocabulary only. This is recorded as the deferred
   destination of item 4 above.
4. **Step renumbering and display joins.** Precheck's canonical layering was
   adopted in `lem-nrqm-composites-local-pvm-tensor-extension`,
   `pthm-nrqm-composites-local-readout-laws-and-reduced-preparations`,
   `pthm-nrqm-composites-local-instruments-and-no-signalling`,
   `pthm-nrqm-composites-marker-overlap-and-visibility-bound`,
   `texp-nrqm-composites-singlet-correlations` and
   `ex-nrqm-composites-marker-overlap-visibility`; hard-wrapped display
   formulas in six items were joined with `fix-multiline-display.mjs`
   (whitespace only, no character of the mathematics changed).
5. **Missing provenance block.** The marker-model definition was written
   without a `provenance` block; `content-policy` caught it and the block
   (`statement: ai-altered`, `proof: not-applicable`) was added.
6. **Role corrections.** The two-spin composition theorem and the finite-spin
   matrices are mathematics-domain items; their roles in the B-page items were
   set to `mathematical-premise` after the scoped physics-content run rejected
   `physical-result` for them. The framework postulates used by the definitions
   carry `formulation-prerequisite` (postulates and definitions do not derive
   from other postulates).

## Checks run (actual results)

- `author-check.mts physics-cm-qm-gr-79-2026-10-11 55`: ok, all four gates
  pass (see below); receipt
  `research/physics-cm-qm-gr-79-2026-10-11-author-check-55.json`.
- `precheck` on the 15 batch items: 9 checked, 0 failing (the four definitions
  and two remarks have no proof body).
- `proof-layout` on the 15 items: 15 items, 43 steps, 0 defects.
- `rendercheck` on the 15 items and the two carriers: 17 files, no wikilink in
  math, no delimiter or multiline-display defect, every span parses under
  KaTeX and every frontmatter block parses.
- `proof-contract --strict`: 9/9 items checked, 0 errors, 0 warnings; every
  declared fact has an exact quote from the supplier's own
  statement/definition/postulate section, every step is contracted with its
  inputs, and all eight boundary worksheets are present for every
  proof-bearing item.
- `coverage-checklist`: 2 pages, 22 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 6/6 source entries fetch-verified (both pages'
  three entries each); check mode: 6/6 resolved, 0 drops.
- `manifest-deps`: 15 items, 0 normalized, 0 errors.
- `content-policy`: 15 scoped items, 0 errors, 0 warnings.
- `depcheck` scoped to the batch items: OK — selected item/page checks and
  their prerequisite cycle checks passed (page depths 55 and 57).
- `fwdcheck`: OK — selected dependency/forward checks passed; the batch items
  classify as `inherited`.
- `extcheck`: OK — no recorded-not-proved statement in scope.
- `citecheck` on the 15 items: OK — every recognised elementary move cites a
  home that states it.
- `item-dependency-levels.mjs check --run`: the only errors are the empty
  scaffolds of later batches (56-64) and the gr15 page; 0 batch-55 findings.
- `validate-plan --run`: 4 remaining errors in other batches' pages
  (`cm-math-evidence`, `cm-math-chaos`, `qm-math-controlled-dynamics`,
  `qm-state-geometry-examples`); no batch-55 error. One `redundant-prereq`
  warning on this batch's A page, recorded in section "Design versus plan"
  above.
- Scoped `validatePhysicsContent` over the batch-55 dependency closure (2428
  items): 0 errors. The whole-run `physics-check --run` cannot complete during
  construction because later batches' scaffolds are still empty; the scoped
  closure run is the batch-level equivalent, and this is expected until the
  later batches are built.
- `frontier-dependency-ledger refresh --run`: refreshed and deduplicated.

## Capacity, escalations and status

A page 11/100 items, B page 4/100 items; well inside the page cap. No source
drop was needed, so no `source_resolution` record exists. No escalation is
filed: every prerequisite of every item is either an in-run supplier authored
earlier at a lower dependency level or a published root-library item, and every
consumed supplier's statement and hypotheses were inspected against the cited
uses. The separability limitation of section "Authoring decisions" item 3 is a
recorded scope decision with a destination, not an unmet prerequisite of any
claim on the page. All 15 items now carry `ready` records with their examined
dependency IDs (see "Readiness records" below). An earlier draft of this
paragraph asserted that the records had already been written when the
carriers were first finished; that assertion was premature and is corrected
here: the records were actually written afterwards, in a dedicated readiness
pass once the final items, manifest, contracts, coverage and ledger input
were stable. The records are Step-1 authoring dispositions and not independent
review. Concurrent edits by other batches' owners to upstream items can
invalidate the transitive input hashes and would require re-recording;
`step1-decisions.mjs check --run` is the authority on whether that has
happened.

## Readiness records (final pass)

The 15 Step-1 records were written in one final pass, after the carriers,
manifest, proof contracts, coverage and dependency inputs were already
final, in ascending item-dependency order (dependency levels 2 -> 15). Each
record file `research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json` is
`version: 1`, `decision: ready`, `owner: false`, uses that item's exact
frontmatter `deps` array as the examined dependency list, and carries a
reason naming the carrier, the page placement and the check state. Recorded
at 11:16 UTC on 2026-10-11 (Sydney 22:16), in this order:

| # | item | level | deps |
|---|------|-------|------|
| 1 | `lem-nrqm-composites-local-pvm-tensor-extension` | 2 | 14 |
| 2 | `def-nrqm-composites-separable-and-entangled-states` | 5 | 8 |
| 3 | `def-nrqm-composites-framework-composite-systems-and-local-readouts` | 9 | 19 |
| 4 | `def-nrqm-composites-framework-reduced-preparations` | 10 | 11 |
| 5 | `pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement` | 11 | 13 |
| 6 | `pthm-nrqm-composites-local-readout-laws-and-reduced-preparations` | 11 | 16 |
| 7 | `def-nrqm-composites-marker-model-and-fringe-visibility` | 11 | 12 |
| 8 | `pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations` | 12 | 14 |
| 9 | `pthm-nrqm-composites-local-instruments-and-no-signalling` | 12 | 13 |
| 10 | `pthm-nrqm-composites-marker-overlap-and-visibility-bound` | 12 | 11 |
| 11 | `rem-nrqm-composites-scope-and-empirical-status` | 13 | 10 |
| 12 | `texp-nrqm-composites-singlet-correlations` | 13 | 16 |
| 13 | `ex-nrqm-composites-marker-overlap-visibility` | 13 | 13 |
| 14 | `ex-nrqm-composites-improper-versus-proper-mixtures` | 14 | 15 |
| 15 | `rem-nrqm-composites-examples-scope-limits` | 15 | 8 |

Every item and every examined dependency carrier was inspected at its current
file before its record was written; the records are Step-1 authoring
dispositions, not independent mathematical review. No item, page, manifest,
contract, coverage or ledger file was edited after the records were written;
only these notes were updated (notes are not an input of the record hash).

Verification after recording (read-only, at the current files):

- `step1-decisions.mjs check --run physics-cm-qm-gr-79-2026-10-11`:
  batch-55 item rows **0** and batch-55 page rows **0** — all 15 records
  match the current item and transitive dependency hashes. Run-wide the
  command reports `items 1364, ready 1286, work 98` (78 item rows and 20
  empty-scaffold pages in other batches), so its exit code is 1 until those
  batches finish; none of the 98 rows is a batch-55 item.
- `author-check.mts ... 55`: ok; fingerprint
  `b4a0b3981e4f343ec27af86e8e58f9395d70b54bdb6dd0fe62f25c3b1cd74a67`,
  identical to the receipt written before the readiness pass, so no carrier
  changed between the two runs. Gates: precheck 9 checked/0 failing,
  rendercheck 17 files OK, content-policy 15 items 0 errors/0 warnings,
  proof-contract `--strict` 9/9 items 0 errors/0 warnings.
- `manifest-deps`: 15 items, 0 normalized, 0 errors.
- `proof-layout` on the nine proof-bearing items: 9 items, 43 steps,
  0 defects.
- `coverage-checklist`: 2 pages, 22 harvested results, 0/0;
  `content-policy` standalone: 15 scoped items, 0/0.
- `source-fetch-check` (check mode): 6/6 fetch-verified, 6/6 resolved,
  0 documented drops.
- `item-dependency-levels.mjs check --run`: the only findings are the empty
  scaffolds of later batches (56-64) and the gr15 page; 0 batch-55 findings.
- `validate-plan --run`: no batch-55 error; the batch's only plan line is
  the recorded `redundant-prereq` warning of section "Design versus plan",
  and the A-page `requires` includes `compactness`; the remaining errors are
  other batches' `undeclared-prereq` findings.
- Whole-run `depcheck`: page depths 55 (A) and 57 (B), no batch-55 defect;
  it fails only on an unrelated published-unaudited root item.
  `fwdcheck`: 0 open forward references run-wide. `extcheck`: 0
  recorded-not-proved. `citecheck`: 346 heuristic warnings run-wide, none on
  a batch-55 item.

### Cross-batch input cleanup

The first version of the batch-55 cross-batch input contained 152 rows (149
item + 3 page), including 53 rows whose consumer and supplier both lie in
batch 55. The ledger's `collect()` records only cross-batch edges
(`consumer_batch !== supplier_batch`) and classifies same-batch rows as
orphaned reviews (before the cleanup the run-wide orphan list held 240 such
rows, 53 of them batch 55's; after it none is batch 55's); sibling batches
46, 52 and 54 carry only cross-batch rows. The input was therefore replaced
atomically with the
99 cross-batch rows (97 item + 2 page: A page -> `qm-angular-momentum-and-spin`
(batch 54) and A page -> `qm-measurement-and-instruments` (batch 46)). After
`frontier-dependency-ledger.mjs refresh --run`: 99 batch-55 consumer edges,
99/99 carrying a `verified` review (0 without), 0 orphaned reviews from the
batch-55 file, batch 55 present in `reviewed_batches`. The same-batch
prerequisites remain covered by the item-level gates (`depcheck`,
`manifest-deps`, `item-dependency-levels`, scoped `physics-content`), and the
ledger is explicitly not a substitute for those checks.
