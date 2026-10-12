# Batch 56 notes — Qm Bell Models And Measurement Limits

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **56**, covering the
pair `qm-bell-models-and-measurement-limits` (A, order 191) and
`qm-bell-models-and-measurement-limits-examples` (B, order 192), category
`non-relativistic-quantum-mechanics`, library `physics`. Both pages are
`status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (no
batch-56-specific override), the batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch
56: level 12, requires batch 55), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3245, the
reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
(order 14) and the prose scaffold row 14, and `research/plan-spec.json`.

## Inventory

A page `qm-bell-models-and-measurement-limits` (11 items; manifest
`dependency_level` in parentheses):

1. `def-nrqm-bell-binary-correlation-models` (0) — mathematics: binary
   correlation models as families of normalized tables on setting sets, their
   marginals, the no-signalling identities, the correlations and the CHSH
   functional.
2. `def-nrqm-bell-local-response-representation` (1) — mathematics: one
   setting-independent specification space with per-station response laws
   satisfying the representation identity, and its deterministic
   response-function form.
3. `prop-nrqm-bell-local-representations-are-no-signalling` (2) — mathematics:
   representable tables have setting-independent marginals; the contrapositive
   excludes non-no-signalling tables.
4. `thm-nrqm-bell-local-representations-satisfy-chsh` (2) — mathematics: the
   CHSH functional of every representable model satisfies $|S|\le2$, proved
   for probabilistic responses via the local means in $[-1,1]$ (the
   deterministic case is noted as the special case of the published
   finite-sampling lemma, not used as a premise).
5. `lem-nrqm-bell-setting-independent-selection-closure` (3) — mathematics:
   conditioning on a selection event of the specification space preserves
   local-response representability and the bound; the change-of-measure
   identity is proved by the indicator–simple–monotone-convergence ladder.
6. `lem-nrqm-bell-singlet-pairings` (2) — mathematics: the Pauli projection
   algebra, the singlet pairings
   $\langle(P_{a,\varepsilon}\otimes P_{b,\delta})\Psi,\Psi\rangle
   =\tfrac14(1-\varepsilon\delta\,a\cdot b)$, the marginals $\tfrac12$ and the
   correlation $-a\cdot b$.
7. `def-nrqm-bell-declared-spin-arrangement` (12) — the framework declaration:
   two spin-half factors, a declared preparation, two unit directions per
   station, the four declared joint sign measurements with outcome laws
   $\nu^{\rho}_{ij}$, the correlation table, its CHSH functional and the
   declared class of local-response models of the table.
8. `texp-nrqm-bell-singlet-arrangement-contrast` (13) — the singlet's four
   tables, correlations and CHSH value, the values $2\sqrt2$ at the displayed
   directions, the resulting failure of local-response representability, the
   setting-independent marginals and the discarded-instrument reading.
9. `pthm-nrqm-bell-tsirelson-bound-for-arrangements` (14) — $|S|\le2\sqrt2$
   for every declared arrangement and every preparation, via the batch-37
   operator Tsirelson theorem, the trace-class ideal bounds and the density
   expansion; attainment by the singlet.
10. `rem-nrqm-bell-boundaries-and-comparison-scope` (15) — what the no-go
    excludes and does not exclude, the framework readings used, the
    measurement, detection, selection, finite-sample and interpretation
    boundaries, and the no-signalling common ground.
11. `rem-nrqm-bell-scope-and-empirical-status` (16) — conditional-model
    status, no experiment and no measured value, the deferred Bell-test
    destination, and the source conclusions that are not imported.

B page `qm-bell-models-and-measurement-limits-examples` (4 items):

1. `ex-nrqm-bell-worked-angles-and-product-mixture` (14) — the worked
   comparison at $a_0=e_3$, $a_1=e_1$, $b_0=(e_3+e_1)/\sqrt2$,
   $b_1=(e_3-e_1)/\sqrt2$: the singlet has $S=-2\sqrt2$ while the EPR product
   mixture has the same marginals and reduced preparations but $S=-\sqrt2$ and
   an explicit two-specification local-response representation.
2. `texp-nrqm-bell-finite-sample-chsh` (13) — the declared i.i.d. sampling
   model: unbiasedness, $\operatorname{Var}(\widehat E_{ij})\le1/n$,
   $\operatorname{Var}(\widehat S)\le4/n$, the Chebyshev bound
   $4/(n\varepsilon^{2})$, threshold bounds on both sides of $2$, and the
   positive failure probability of any criterion that rejects a
   positive-probability sequence.
3. `rem-nrqm-bell-selection-loss-and-fair-sampling` (14) — recorded tables are
   conditional tables; the precise sufficient condition for the bound to
   transfer (setting-independent selection), the explicit non-transfer
   otherwise, and the procedure-level settings-choice caveat.
4. `rem-nrqm-bell-examples-scope-limits` (15) — examples-page scope, the
   deferred experiment destination and the absence of empirical content.

Carriers `library/non-relativistic-quantum-mechanics/qm-bell-models-and-measurement-limits.md`
and `...-examples.md`; manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-56.pages.json`; proof contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-56.proof-contracts.json` (8
proof-bearing items; the three definitions and four remarks carry no proof
section); coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-56.coverage.json` (2 pages, 26
harvested results, 6 fetch-verified source entries); cross-batch input
`research/physics-cm-qm-gr-79-2026-10-11-batch-56.cross-batch-dependencies.json`
(41 rows: 40 item edges plus the A-page edge to batch 55).

## Design versus plan (conflicts and deviations)

1. **No plan conflict.** `research/plan-spec.json` and the design section agree
   on the pair IDs, orders 191/192, the category, the library and the declared
   requirement `qm-composites-entanglement-and-reduced-states`;
   `validate-plan` reports no error and no warning for either page, so no
   additional `requires` entry was needed (unlike batch 55's `compactness`).
2. **Reservation scope versus implementation.** The reservation's
   `a_inventory` ("precise local-response/setting-independent probability
   model; classical CHSH and quantum singlet contrast; measurement-model
   boundaries [M,D,T,H,R], 32") is covered by items 1–11: the model vocabulary
   and the probabilistic CHSH bound are the mathematics items 1–5, the singlet
   pairings are item 6, the arrangement declaration is the idealized setup
   (item 7), the contrast is items 8–9, and the boundaries are items 10–11.
   The `b_inventory` ("specified Bell angles; finite-data selection/loss
   caveats; experiment candidate [H,E pending], 22") is covered by the B-page
   items 1–4. Budgets: A 11/32, B 4/22 items.
3. **The composites pair's singlet item cannot be a dependency.** Batch 55
   homes `texp-nrqm-composites-singlet-correlations` only on the examples page
   `qm-composites-entanglement-and-reduced-states-examples`.
   `tools/physics-support/depcheck.mjs` enforces `b-leaf-content`: an item that
   lives only on a B/examples page may never be a dependency of another page
   (read directly in the current tool and confirmed by the clean scoped
   depcheck run below). Instead of an out-of-batch edit, this batch re-derives
   the exact finite-dimensional singlet facts it needs as the A-page
   mathematics lemma `lem-nrqm-bell-singlet-pairings`, from A-page suppliers
   of batches 35 and 37 (`lem-nrqm-composites-hilbert-tensor-construction`,
   `lem-nrqm-composites-bounded-tensor-maps`,
   `prop-nrqm-orbital-and-spin-finite-spin-matrices`). The duplication is
   deliberate and recorded for the owner: if the owner later rehomes the
   composites singlet thought experiment onto the composites A page, the local
   lemma can remain as the mathematical core or be replaced by a dependency,
   but no such cross-batch change is made here.
4. **Sources.** The design's pair row names "Binney §6.1.4; MIT Ch8 §5;
   statistics/primary report gap". The A/B pages are backed by Binney–Skinner
   §6.1.4 (textbook, printed pages 111–115), Zwiebach MIT 8.05 Chapter 8 §5
   (course notes, chapter pages 16–19) and, as an independent authoritative
   review for the local-model definition and the operator Tsirelson bound,
   Brunner–Cavalcanti–Pironio–Scarani–Wehner, *Bell nonlocality*, Rev. Mod.
   Phys. 86 (2014) 419 (arXiv:1303.2849, §II.A pp. 2–3, §II.B p. 3, §II.C.1.a
   pp. 12–13). Skinner's standalone Chapter 10 §10.6 was additionally read
   from the repository's extracted text, but it is **not cited**: its author
   host cannot be fetch-verified in this container (batch 35 recorded the same
   `UNABLE_TO_VERIFY_LEAF_SIGNATURE` for `chap7.pdf`/`chap10.pdf`), and its
   CHSH derivation contains the reversed variance inequality
   $\langle C^{2}\rangle\le\langle C\rangle^{2}$ that the design explicitly
   replaces. The bound here is proved by the operator-norm route (the Landau
   identity as presented in the review, verified directly in
   `thm-nrqm-orbital-and-spin-tsirelson-bound`), so no reversed inequality is
   used. No `source_resolution` record is needed because no source is claimed
   in the coverage file.
5. **No experiment item.** The reservation's `[E pending]` is honoured by
   building no experiment: neither secondary source supplies trial-level
   preparation, calibration, efficiency, loss, background or uncertainty
   detail, and no primary report was read for this pair. The deferred
   destination and its requirements are recorded in
   `rem-nrqm-bell-examples-scope-limits` and
   `rem-nrqm-bell-scope-and-empirical-status`; no measured value is
   reproduced.
6. **The scaffold's reserved names.** The design's M7/M18 reservations
   (`lem-qm-chsh-classical-bound`, the Tsirelson bound) were already authored
   in this run as `lem-nrqm-composites-chsh-and-finite-sampling-law` (batch
   35, A page `qm-math-composites`) and
   `thm-nrqm-orbital-and-spin-tsirelson-bound` (batch 37, A page
   `qm-math-orbital-and-spin`); both are consumed here as published-track
   mathematics rather than re-authored. The new mathematics of this batch is
   the model-vocabulary layer (binary models, local-response
   representations, the general probabilistic bound and the selection
   closure) and the singlet pairings.
7. **Choice hypotheses.** Of the six new mathematics items, the five of the
   model-vocabulary layer (`def-nrqm-bell-binary-correlation-models`,
   `def-nrqm-bell-local-response-representation`,
   `prop-nrqm-bell-local-representations-are-no-signalling`,
   `thm-nrqm-bell-local-representations-satisfy-chsh`,
   `lem-nrqm-bell-setting-independent-selection-closure`) and the worked
   example use no choice principle; the sixth, `lem-nrqm-bell-singlet-pairings`,
   assumes the Axiom of Countable Choice exactly as its cited completed-tensor
   construction does. The arrangement declaration, the singlet thought
   experiment and the Tsirelson theorem carry the Axiom of Countable Choice
   and (where the spectral theorem is invoked) the Axiom of Choice as they
   are stated by the cited suppliers; each item says so explicitly and the
   finite-sampling item declares its sampling model as a P7 assumption.

## Source harvest and dispositions

Three independent treatments support both pages: Binney–Skinner's full book
(textbook), the complete MIT 8.05 Chapter 8 (course notes) and the Brunner et
al. review (survey); two of the three are full treatments of the Bell
comparison, and the review supplies the standard local-model definition and
the operator bound. Coverage records 26 harvested results: 19 `included` as
items and 7 `out-of-scope` with specific reasons (secondary experimental
remarks without trial-level detail, Tsirelson's correlation-space SDP
characterisation, and the quantitative nonlocality theory). All six source
entries (three per page) were fetched in full and stamped by
`source-fetch-check --stamp` on 2026-10-11 (Binney 3368948 bytes/310 pages, MIT
356188 bytes/20 pages, Brunner 1443854 bytes/65 pages); check mode resolves
6/6 with 0 documented drops.

Locator notes: Binney's PDF page equals the printed page plus 8, so
§6.1.4 printed pages 111–115 are PDF pages 119–123; its Bell inequality is
(6.46) and the correlation is (6.41). The MIT chapter's Section 5 occupies
printed/chapter pages 16–19 of 20 with the Bell inequality (5.12) and the
violating configuration (5.14)–(5.15). The review's local decomposition is
equation (3), the CHSH inequality is (4) and the operator identity
$S^{2}=4+[\hat A_1,\hat A_2][\hat B_1,\hat B_2]$ with $\|S\|\le2\sqrt2$ is in
§II.C.1.a. Source-level qualifications preserved in the items: Binney's
closing claims that experiments rule out hidden variables as such and that
quantum mechanics cannot be superseded by a theory with definite spin
direction are stronger than the conditional no-go proved here and are not
imported; the MIT and Binney experimental remarks are not used as
observations.

## Authoring decisions and corrections

1. **Probabilistic local-response models, not only deterministic ones.** The
   definition of `def-nrqm-bell-local-response-representation` is the standard
   one with response *laws* $\alpha_{i}(\lambda,\cdot)$, $\beta_{j}(\lambda,
   \cdot)$; the CHSH theorem is proved for this general form through the local
   means, so the deterministic response-function form is a special case and no
   Fine-type conversion theorem is needed. The worked example uses a genuine
   probabilistic representation with two specifications for the product
   mixture, which would be impossible with response functions on a single
   specification.
2. **Sign labels versus angular-momentum coordinates.** The arrangement's
   outcome labels are the dimensionless signs $\pm1$ attached to the two
   spectral projections of the local spin observable $S_{n}$, whose physical
   coordinates are $\pm\hbar/2$ in the unit $\mathrm{J\,s}$; this is stated in
   clause (a) of the arrangement definition and in its remarks, and the CHSH
   functional is dimensionless.
3. **Joint measurement declared, not derived.** The four joint sign
   measurements are declared finite families of mutually orthogonal
   projections resolving the identity, so they are declared ideal sharp
   measurements of the composite in the framework's own sense; no claim is
   made that arbitrary pairs of laboratory procedures realize them or that
   arbitrary observables possess joint sharp measurements.
4. **The symmetric top-level directions.** The singlet computations use
   $a_{0}=(0,0,1)$, $a_{1}=(1,0,0)$, $b_{0}=(1,0,1)/\sqrt2$,
   $b_{1}=(-1,0,1)/\sqrt2$, for which the four dot products are
   $1/\sqrt2,1/\sqrt2,1/\sqrt2,-1/\sqrt2$; this is the standard optimal
   configuration and it also keeps the EPR-mixture comparison nondegenerate
   (the mixture's value there is $-\sqrt2$).
5. **Finite-sample honesty.** The concentration bound is the explicit
   Chebyshev bound $4/(n\varepsilon^{2})$ of the declared model; no optimality,
   power, p-value, confidence level or sample-size claim is made, and the
   positive-failure statement is the singleton-probability argument, not a
   universal failure rate.
6. **Format repairs.** Six items needed the canonical phase layering of
   `precheck` (steps ordered and numbered by dependency layer, with the QED
   step terminal); hard-wrapped display formulas in eight items were joined
   with `fix-multiline-display.mjs` (whitespace only, no character of the
   mathematics changed); both were re-verified by precheck, rendercheck and
   proof-layout afterwards.

## Checks run (actual results)

- `author-check.mts physics-cm-qm-gr-79-2026-10-11 56` (through
  `tsx-run.mjs`): ok, all four gates pass; receipt
  `research/physics-cm-qm-gr-79-2026-10-11-author-check-56.json`, fingerprint
  `137414a9131f6565`, results: precheck true, rendercheck true,
  content-policy-items true, proof-contract true.
- `precheck` on the 15 items: 8 checked, 0 failing (the three definitions and
  four remarks have no proof body).
- `proof-layout` on the 15 items: 15 items, 43 steps, 0 defects.
- `rendercheck` on the 15 items and the two carriers: 17 files, no wikilink in
  math, no delimiter or multiline-display defect, every span parses under
  KaTeX and every frontmatter block parses.
- `proof-contract --strict`: 8/8 items checked, 0 errors, 0 warnings; every
  declared fact has an exact quote from the supplier's own
  statement/definition/postulate section, every step is contracted with its
  inputs, and all eight boundary worksheets are present for every
  proof-bearing item.
- `coverage-checklist`: 2 pages, 26 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 6/6 source entries fetch-verified on
  2026-10-11; check mode: 6/6 resolved, 0 documented drops.
- `manifest-deps`: 15 items, 0 normalized, 0 errors.
- `content-policy`: 15 scoped items, 0 errors, 0 warnings.
- `depcheck` scoped to the batch items (`--items-file` with the 15 IDs): OK —
  selected item/page checks and their prerequisite cycle checks passed (page
  depths 57 and 58); no `b-leaf-content` defect, confirming that the batch
  does not depend on the composites examples page.
- `fwdcheck`: OK — selected dependency/forward checks passed; the batch items
  classify as `inherited`.
- `extcheck`: OK — the item-scoped close-out run reports 28551 item(s), 0
  recorded-not-proved, 0 resting on them, no recorded-not-proved statement in
  scope. (The run-wide `--manifest-only` form currently aborts on batch 59's
  empty scaffold — a run-wide abort of the class other batches record — and
  is not this batch's gate.)
- `citecheck` on the 15 items: OK — every recognised elementary move cites a
  home that states it.
- `item-dependency-levels.mjs check --run`: at first pass the findings were
  the empty scaffolds of later batches (57-77) plus pre-existing GR item
  labels of other batches; a close-out re-check reports 14 findings, all
  empty scaffold inventories of other batches' pages (the run's last
  unwritten pages), with **0 batch-56 findings in either pass**.
- `validate-plan --run` (with `research/plan-spec.json`): **no batch-56 error
  or warning in either pass** (the two listing lines for orders 191 and 192
  are plan output, not findings). At first pass the remaining 4 errors were
  in other batches' pages (`cm-math-evidence`, `cm-math-chaos`,
  `qm-math-controlled-dynamics`, `qm-state-geometry-examples`); at close-out
  the run-wide check reports 2 remaining errors, both `undeclared-prereq`
  findings on batch 57's page `qm-identical-particles-and-exclusion`, outside
  this batch.
- `step1-decisions.mjs check --run`: at first pass the run-wide state was
  `items 1407, ready 1261, closed false` with 265 open rows; close-out
  re-checks on 2026-10-11 moved through `ready 1262` and `ready 1377` as
  other batches were authored concurrently. The open rows are other batches'
  unbuilt items and pre-existing stale labels, and **no batch-56 row appears
  in any pass** — all 15 readiness records match the current item and
  transitive dependency hashes.

## Cross-batch dependencies and the ledger refresh finding

The batch input `research/physics-cm-qm-gr-79-2026-10-11-batch-56.cross-batch-dependencies.json`
contains 41 rows (40 `item`, 1 `page`), one per declared cross-batch edge:
mathematics suppliers of batches 35 and 37, the framework postulates of batch
43, the state-geometry, observable and measurement suppliers of batches 44 and
46, the angular-momentum suppliers of batch 54, the composite/readout and
no-signalling suppliers of batch 55, and the A-page requirement
`qm-composites-entanglement-and-reduced-states` (batch 55). Each row states
the dependency role, the supplier's current title and kind, the sentence of
the consumer that uses it, and the date of the Step-1 authoring inspection;
they are authoring dispositions, not independent mathematical review.

`frontier-dependency-ledger.mjs refresh --run` **fails** on an input owned by
another batch: `research/...-batch-69.cross-batch-dependencies.json` still
carries three rows with `status: "pending"` — the three edges
`prop-gr-scalar-field-stress-energy-conservation` →
`def-gr-inverse-metric-and-musical-isomorphisms`,
`prop-gr-scalar-field-stress-energy-conservation` →
`def-gr-smooth-covariant-two-tensor-field` and
`ex-gr-null-gradient-scalar-field-conservation` →
`def-gr-smooth-covariant-two-tensor-field`. `pending` is not one of the
tool's allowed statuses `open`/`verified`/`removed`, so the tool aborts with
`invalid review or consumer ownership` before merging; `refresh` validates
every batch input before any write, so the failed run is side-effect free
(re-confirmed at close-out on 2026-10-11). When these notes were first
written, batch 77's input also carried `pending` rows plus an extra `role`
field; the batch-77 owner has since repaired its input (re-checked at
close-out: all 229 rows `verified`; the extra `role` field alone is tolerated
by the tool). This batch's own input rows all use `status: "verified"` with
nonempty evidence, and a read-only reproduction of the tool's collection loop
over all manifests at close-out covers all 41 declared batch-56 cross-batch
edges with 41 rows: no duplicate consumer/supplier pair and no row without a
declared edge. The defect is in another batch's input, outside this batch's
write scope, and is recorded here for the owner; the unified ledger
`research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json` was
left untouched (never edit the unified ledger by hand).

## Capacity, escalations and status

A page 11/100 items, B page 4/100 items; well inside the page cap. No source
drop was needed, so no `source_resolution` record exists. Every prerequisite
of every item is either an in-run supplier authored earlier at a lower
dependency level or a published root-library item, and every consumed
supplier's statement and hypotheses were inspected against the cited uses.
Two items are recorded for the owner and are not blockers of this batch's
content: (i) the cross-batch ledger refresh failure caused by batch 69's
three `pending` rows (batch 77's input was repaired by its owner after the
first pass; evidence above); (ii) the placement observation that batch
55's singlet thought experiment lives on a B leaf and therefore cannot serve
other pages, which this batch worked around with a complete local
re-derivation. All 15 items carry `ready` records with their exact examined
dependency lists; the records are Step-1 authoring dispositions, not
independent review. Concurrent edits by other batches' owners to upstream
items can invalidate the transitive input hashes; `step1-decisions.mjs check`
is the authority on whether that has happened.

## Readiness records (final pass)

The 15 records were written after the carriers, manifest, proof contracts,
coverage, source stamps and cross-batch input were final, in ascending item
dependency order (levels 0 → 16). Each file
`research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json` is `version: 1`,
`decision: ready`, `owner: false`, carries exactly the dependency set of the
item's manifest `deps` array (the record tool stores it sorted and
deduplicated; the record hash is computed over that sorted set), and carries
a reason naming the carrier, the page placement and the check state. The
table below lists the records in ascending dependency level; because
`lem-nrqm-bell-singlet-pairings` (level 2) was written before
`lem-nrqm-bell-setting-independent-selection-closure` (level 3), their
positions 5 and 6 are reversed relative to the manifest and carrier page
order (where the selection-closure lemma precedes the singlet lemma). Order
and dependency counts:

| # | item | level | deps |
|---|------|-------|------|
| 1 | `def-nrqm-bell-binary-correlation-models` | 0 | 2 |
| 2 | `def-nrqm-bell-local-response-representation` | 1 | 6 |
| 3 | `prop-nrqm-bell-local-representations-are-no-signalling` | 2 | 5 |
| 4 | `thm-nrqm-bell-local-representations-satisfy-chsh` | 2 | 6 |
| 5 | `lem-nrqm-bell-singlet-pairings` | 2 | 11 |
| 6 | `lem-nrqm-bell-setting-independent-selection-closure` | 3 | 13 |
| 7 | `def-nrqm-bell-declared-spin-arrangement` | 12 | 19 |
| 8 | `texp-nrqm-bell-singlet-arrangement-contrast` | 13 | 10 |
| 9 | `texp-nrqm-bell-finite-sample-chsh` | 13 | 13 |
| 10 | `pthm-nrqm-bell-tsirelson-bound-for-arrangements` | 14 | 11 |
| 11 | `ex-nrqm-bell-worked-angles-and-product-mixture` | 14 | 11 |
| 12 | `rem-nrqm-bell-selection-loss-and-fair-sampling` | 14 | 6 |
| 13 | `rem-nrqm-bell-boundaries-and-comparison-scope` | 15 | 11 |
| 14 | `rem-nrqm-bell-examples-scope-limits` | 15 | 8 |
| 15 | `rem-nrqm-bell-scope-and-empirical-status` | 16 | 10 |

After the records were written, `step1-decisions.mjs check --run` reports no
batch-56 row (the remaining open rows are other batches' unbuilt items and
pre-existing stale labels; the run-wide counts move as concurrent batches are
authored), and `author-check 56` still reports fingerprint
`137414a9131f6565` with all four gates passing. No item, page, manifest,
contract, coverage or cross-batch file was edited after the records were
written; this notes file is not an input of the record hash. At close-out
this notes file was corrected only in its own reporting (the readiness-table
ordering note, two dependency counts, the coverage disposition counts, the
choice-hypothesis paragraph, the readiness-table wording, the run-wide
per-check snapshots and the refresh status of batch 77's input); no item- or
gate-bearing artifact was touched, and the readiness records were not
rewritten.
