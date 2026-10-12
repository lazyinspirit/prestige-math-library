# Batch 53 notes — Qm Symmetries And Conservation

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **53**, covering the
pair `qm-symmetries-and-conservation` (A, order 185) and
`qm-symmetries-and-conservation-examples` (B, order 186), category
`non-relativistic-quantum-mechanics`, library `physics`. Both pages are
`status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 53: level 9, requires batch 48), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3174 (pair
`qm-symmetries-and-conservation`), the reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`,
the prose scaffold
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/prose-scaffold.md`
(lines 27-30, 35, 63), and `research/plan-spec.json`.

## Inventory

A page `qm-symmetries-and-conservation` (12 items; manifest
`dependency_level` in parentheses):

1. `lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus` (0) —
   batch-local mathematics: unitary conjugation, spectral transport and the
   equivalence of flow commutation, strong spectral commutation and domain
   invariance.
2. `lem-nrqm-symmetries-spatial-rotation-action` (5) — batch-local
   mathematics: the rotation action `U(R)f=f∘R^{-1}`, unitarity, strong
   continuity, Schwartz and Sobolev invariance, and the conjugations of
   `Q_j,P_k,H_0,M_V`.
3. `lem-nrqm-symmetries-parity-action` (5) — batch-local mathematics: the
   parity involution `Π`, `Π^{*}=Π`, `ΠQ_jΠ=-Q_j`, `ΠP_kΠ=-P_k` and the
   Hamiltonian conjugation.
4. `lem-nrqm-symmetries-rotation-generators-on-schwartz-classes` (6) —
   batch-local mathematics: the coordinate-rotation generators
   `L_i=Σε_{ijk}Q_jP_k` on Schwartz classes, `L_i S⊂S` and
   `[L_i,L_k]=iħΣε_{ikj}L_j` there. **No graph-norm core property is
   claimed** (see "Deliberate narrowings").
5. `lem-nrqm-symmetries-free-flow-multiplier-form` (5) — batch-local
   mathematics: the free flow as the unimodular multiplier `M_{f_t}` in the
   momentum representation.
6. `def-nrqm-symmetries-framework-symmetry-groups-and-conservation` (8) — the
   page's fixed symmetry and conservation vocabulary (P1/P2/P4 reading).
7. `post-nrqm-symmetries-prescribed-external-coupling` (8) — the P5a
   prescribed-coupling postulate: admissible bounded-coefficient potentials,
   the minimal-coupling energy operator on `W^{2,2}`, units, field
   definitions and the adopted gauge transformation.
8. `pthm-nrqm-symmetries-generator-conservation` (9) — the conservation
   theorem (flow commutation ⇔ spectral commutation ⇔ domain invariance;
   conserved law and moments; self-adjoint unitary symmetries).
9. `pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation`
   (10) — the translation symmetry criterion, constancy of potentials
   invariant under every translation, and momentum conservation.
10. `pthm-nrqm-symmetries-rotational-and-parity-invariance` (10) — rotation
    and parity symmetry criteria, conservation of the `L_i` and of the parity
    law.
11. `pthm-nrqm-symmetries-gauge-covariance` (9) — gauge conjugation of the
    prescribed-coupling operator, the exact criterion under which a gauge
    multiplier is a symmetry of the fixed dynamics, and the transported
    propagator.
12. `rem-nrqm-symmetries-scope-and-empirical-status` (11) — scope, empirical
    status and the recorded supplier note.

B page `qm-symmetries-and-conservation-examples` (5 items):

1. `ex-nrqm-symmetries-parity-selection-rule` (11) — eigenspace invariance,
    definite parity of nondegenerate eigenstates and the vanishing of
    position matrix elements between equal-parity states.
2. `ex-nrqm-symmetries-free-translation-and-momentum` (11) — the free model:
    translation symmetries, multiplier commutation, momentum conservation and
    the invariant modulus of the momentum representative.
3. `cex-nrqm-symmetries-nonconstant-potential-breaks-translation` (11) — the
    indicator of the unit ball has no nonzero translation symmetry.
4. `ex-nrqm-symmetries-central-potential-rotation-invariance` (11) — a
    bounded radial potential: rotational and parity invariance with conserved
    rotation generators.
5. `rem-nrqm-symmetries-examples-scope-limits` (12) — the examples-page
    scope reading. No B item consumes a foreign B-page item; the page remains
    a leaf across pages.

Carriers `library/non-relativistic-quantum-mechanics/qm-symmetries-and-conservation.md`
and `...-examples.md`; manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-53.pages.json`; proof contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-53.proof-contracts.json`
(14 entries: the nine proof-bearing A items, the four proof-bearing B items
and the postulate's physics-review contract; the definition and the two
remarks carry no proof section); coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-53.coverage.json` (44
source-anchored harvest entries); cross-batch input
`research/physics-cm-qm-gr-79-2026-10-11-batch-53.cross-batch-dependencies.json`
(177 rows: 173 item edges into in-run suppliers plus four page edges).

## Design versus plan (conflicts and deviations)

1. **`requires` drift (plan-spec names one page; the manifest names three).**
   `plan-spec.json` declares only `qm-massive-particle-kinematics` for the A
   page. The implementation also consumes suppliers homed on
   `density-separability-and-convolution-in-lp` (the unit-mass smooth bump
   used by `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`) and on
   `harmonic-functions-and-mean-values-in-rn` (the radial mollifier family and
   the Lebesgue-point recovery lemma), both published mathematics pages, in
   `pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation`.
   Following the batch-48 and batch-73 precedents, both carriers and the
   manifest declare
   `["qm-massive-particle-kinematics", "density-separability-and-convolution-in-lp", "harmonic-functions-and-mean-values-in-rn"]`;
   `plan-spec.json` is not edited. The design reservation's second declared
   prerequisite NRQ-A05 (`qm-autonomous-dynamics`) is reached transitively
   through `qm-massive-particle-kinematics` (which requires
   `qm-autonomous-dynamics`), so no additional edge is needed; the conflict
   with the design reservation's `requires_physics` list is recorded here for
   owner reconciliation.
2. **Source-pointer corrections.** The design and the prose scaffold refer to
   Teschl §2.3 for commuting operators; the author-hosted text has the
   commuting-operator material at §4.2 printed pages 115–117, the
   Noether-type conservation statement at Theorem 8.1 printed page 174, and
   the flow/Stone material at Theorems 5.1–5.2 printed pages 123–125 (PDF
   page = printed page + 12). Binney Chapter 4 was verified at printed pages
   58–71: translating kets p. 59, continuous transformations and generators
   pp. 60–62, the rotation operator p. 62, discrete transformations/parity
   pp. 62–64, operator transformations pp. 64–67, symmetries and conservation
   laws pp. 68–70, the Heisenberg picture pp. 70–71 (PDF page = printed page
   + 8). MIT 8.05 Chapter 6 §3.2 is printed pages 20–22; Chapter 9 §1.2–1.3
   is printed pages 6–11. Tong's notes were verified at §2.2–2.3.1 printed
   pages 39–47 (PDF page = printed page + 3) and §4.1.1 printed pages 96–99.
   Every locator used by batch-53 items was checked against the fetched full
   text.
3. **Gauge sourcing.** The design's gauge anchors (Teschl §7.8 pp. 168–171;
   Binney §3.5 pp. 49–54) could not be verified: the author-hosted Teschl PDF
   named by the URL (2009 first edition, 317 pages) has no §7.8 and no
   magnetic/gauge section at all (Chapter 7 has §7.1–7.4; pp. 168–171 are
   §7.2–7.3), and Binney's gauge transformation is §3.3.1 printed pages
   46–47 (PDF 54–55) inside §3.3 "Motion in a magnetic field" pp. 45–47,
   while pp. 49–54 are Landau levels, gyrocentre and Aharonov–Bohm. The
   batch-53 gauge items therefore cite the verified Binney §3.3/§3.3.1
   locator and, as the second independent treatment,
   J. Zinn-Justin and R. Guida, "Gauge invariance", Scholarpedia 3(12):8287
   (2008), Section 2.2 (equations (13)–(19)), whose sign convention
   `A^Ω = A - ∇Ω` with charge `e` is recorded in the citation. The
   corresponding false locators in the consumed batch-42 items are recorded
   below; they are not reproduced.
4. **Rotations act on the spatial factor only.** The page defines `U(R)` and
   `Π` componentwise on `L²(R³;C^r)` and states explicitly that no SU(2)
   lift, no rotation of the internal factor and no spin angular momentum are
   introduced; the intrinsic spin representation belongs to the angular
   momentum and spin development (batch 54).
5. **Deliberate narrowings.** (i) The rotation-generator lemma claims
   `S⊂D(L_i)`, `L_iS⊂S` and the commutators on `S` only; no graph-norm
   density ("core") statement is made or consumed. Two generator-conservation
   steps were corrected during authoring: an assembly sentence that referred
   to nonexistent steps, in `pthm-nrqm-symmetries-generator-conservation` and
   in `lem-nrqm-symmetries-free-flow-multiplier-form`, and the commutator
   computation in `lem-nrqm-symmetries-rotation-generators-on-schwartz-classes`
   where the fourth elementary commutator `[Q_3P_2,Q_1P_3]=iħQ_1P_2` had been
   misprinted as zero (the final bracket `[L_1,L_2]=iħL_3` was already
   correct). (ii) In `ex-nrqm-symmetries-central-potential-rotation-invariance`
   the radial hypothesis is stated as `V(x)=v(|x|)` almost everywhere with a
   bounded measurable `v`; the example then proves rotational and parity
   invariance and does not claim measurability of a composition.
6. **No antiunitary, superselection or time reversal material.** Not promised
   by the design reservation and not authored.

## Upstream supplier defects recorded (not repaired here)

1. **Batch-42 role metadata (repaired upstream during this batch).** At
   handoff, `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator`
   and `thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation`
   declared a mathematics-domain dependency with role
   `formulation-prerequisite` where `physics-content.mjs` requires
   `mathematical-premise` (recorded by batch 48). A scoped
   `validatePhysicsContent` run over the batch-53 dependency closure (2011
   items, 167 pages) now reports **0 errors**, and both edges read
   `mathematical-premise` in their current files; the repair is credited to
   the owning batch.
2. **False Teschl locators in three batch-42 items (open).** The items
   `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator`,
   `thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation` and
   `thm-nrqm-magnetic-and-detection-gauge-transported-propagator` cite
   "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
   Section 7.8 pp. 168-171 (magnetic Schrodinger operators / gauge
   transformations of magnetic Hamiltonians)" with the author-hosted URL
   `https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf`.
   Evidence: the full text fetched and stamped from that URL is the 2009
   first edition (317 pages); its Chapter 7 "The free Schrodinger operator"
   contains only §7.1–7.4, no §7.8, and a full-text search finds no magnetic
   or gauge section; printed pages 168–171 are §7.2–§7.3 (Theorem 7.8 on
   p. 168 is the free operator's self-adjointness, not a magnetic operator).
   The mathematical content of those three items is proved locally by their
   own complete arguments (which batch 53 inspected and consumes); the
   smallest repair is the owning batch's replacement of the locator with a
   verified treatment or an explicit local-proof provenance. Recorded for
   the canonical ledger.
3. **False Binney locators in the same batch-42 items (open).** The same
   items cite "J. Binney and D. Skinner, The Physics of Quantum Mechanics,
   Section 3.5 pp. 49-54 (magnetic coupling and gauge invariance)". Evidence:
   the fetched full text has no §3.5 (Chapter 3 has §3.1–3.3); the gauge
   transformation is §3.3.1 printed pages 46–47 (PDF 54–55), and printed
   pages 49–54 cover Landau levels, gyrocentre displacement and the
   Aharonov–Bohm effect. Same disposition as defect 2.
4. **Batch-42 false locators already recorded by batch 48** (the Galilean
   covariance item's Binney §3.2/Teschl §7.1 and §2.3 citations) remain as
   recorded there; batch 53 does not consume that item, and no batch-53
   closure item reaches it except through the recorded gauge chain above,
   which was inspected.

## Sources and harvest

Full texts fetched and stamped (`source-fetch-check --stamp`): 9/9 sources
fetch-verified across the two coverage pages — Teschl (monograph), Binney and
Skinner (textbook), MIT 8.05 Chapters 6 and 9 (lecture notes), Tong (lecture
notes) and the Scholarpedia gauge article (encyclopedia; secondary, used
alongside two primary treatments). The 44 harvested result entries each carry
a disposition (`included` with the item that proves or consumes the content,
or `inline` where the content is absorbed into another item's argument), and
`coverage-checklist` reports 0 errors. The design's claims are all either
scaffolded as items or absorbed inline; no promised claim was dropped.

## Checks run (actual results)

- `precheck` on the 17 batch items: 14 checked (the three non-proof items are
  excluded by kind), 0 failing; all proof-bearing items use `direct` and the
  canonical citation-depth step numbering.
- `rendercheck` on the 17 items and the two carriers: 19 files, no wikilink in
  math, no delimiter defects, every span parses under KaTeX and every
  frontmatter block parses.
- `proof-layout` on the 17 items: 17 items, 77 steps, 0 defects.
- `proof-contract --strict`: 14/14 items checked, 0 errors, 0 warnings; every
  declared fact has an exact quote from the supplier's own
  statement/definition section and every step is contracted with its inputs.
- `source-fetch-check` (check mode): 9/9 fetch-verified.
- `coverage-checklist`: 2 pages, 44 harvested results, 0 errors, 0 warnings.
- `manifest-deps`: 17 items, 0 normalized, 0 errors.
- `audit-manifest` over all 79 run manifests: 14755 relationships over 1171
  items, 0 defects (the batch-53 items' relationships are classified
  cross-batch in-run, published-backward, or authorized context).
- `depcheck` repo-wide: one batch-53 finding, repaired during authoring —
  `def-nrqm-symmetries-framework-symmetry-groups-and-conservation` cited
  `lem-nrqm-symmetries-rotation-generators-on-schwartz-classes` in its
  statement without declaring it in `deps`; the edge was added with role
  `mathematical-premise`, the manifest regenerated (level unchanged at 8) and
  the 11 items whose transitive closure contains the definition were
  re-recorded ready. `depcheck` now reports no batch-53 finding.
- `item-dependency-levels check --run`: no batch-53 line; the only non-empty
  errors are other batches' empty-scaffold inventories and one other-batch
  label mismatch (`thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness`).
- `validate-plan --run`: 1 remaining error, `qm-math-controlled-dynamics`
  undeclared-prereq (`square-integrable-kernels-and-hilbert-schmidt-compactness`);
  no batch-53 page appears.
- Scoped `validatePhysicsContent` over the batch-53 dependency closure (2011
  items, 167 pages): 0 errors.
- `manifest-integrity`/scope: both pages carry nonempty item inventories and
  no page was dropped.
- `frontier-dependency-ledger refresh --run`: refreshed and deduplicated.
- `citecheck` on the 17 batch items: OK (every recognised elementary move
  cites a home that states it); `extcheck` run-wide: 0 recorded-not-proved
  statements, nothing resting on them.

## Capacity, escalations and status

A page 12/42 items, B page 5/20 items; well inside the 100-item page cap. No
source drop was needed, so no `source_resolution` record exists. No escalation
is filed: every prerequisite of every item is either an in-run supplier
(authored earlier in this run, at a lower dependency level) or a published
root-library item, and the two upstream defects above are metadata/citation
defects in other batches' items whose mathematical content is locally proved
and was inspected. All 17 items are recorded `ready` with their examined
dependency IDs; the records are Step-1 authoring dispositions and not
independent review. Readiness was recorded only after the final carriers,
manifest, coverage and contracts were written, so the recorded input hashes
are current for the batch's own files; concurrent edits by other batches'
owners to upstream items can invalidate the transitive input hashes and would
require re-recording, which only these notes can flag.
