# Step 3a scope review — Moment Maps and Symplectic Reduction

- Run: `phase-2-remaining-27` (role alpha; this pair only; batch 13)
- A page: `moment-maps-and-symplectic-reduction` (plan order 515, DG-37)
- B page: `moment-maps-and-symplectic-reduction-examples` (plan order 516)
- Scope decision: **sufficient**, recorded for the A page with
  `node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27 --page moment-maps-and-symplectic-reduction --decision sufficient`
  and an evidence reason naming this report. Receipt
  `research/phase-2-remaining-27-step3a-review-moment-maps-and-symplectic-reduction.json`
  (scope hash `89763abffb3ba19a4ab104f94ceb790a9e6c71794bd47da2da5968b5c35bcd3a`,
  recorded `2026-09-16T15:25:23.446Z`; re-verify with
  `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase scope`).
- This report decides scope only: whether the planned definitions, results and
  examples cover the intended subject. It approves no item, verifies no proof,
  and edits no scaffold, item contract, plan entry, coverage row or owner
  record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-13.pages.json` | Current inventory: A page 40 items (3 definitions, 17 propositions, 6 lemmas, 2 corollaries, 4 theorems, 2 remarks, 6 false statements) and B page 12 items (10 examples, 2 counterexamples), in order, with `requires`, companions, all `deps`, provenance and axiom bases |
| `research/phase-2-remaining-27-batch-13.coverage.json` | DG-37 source record: 2 fetch-verified treatments, 14 harvested rows (11 `included`, 1 `inline`, 2 `out-of-scope`) |
| `research/phase-2-remaining-27-batch-13.notes.md` | Step-1 record for both batch-13 pairs: design comparison, the two DG-37 clarifications, sign-verification note, choice ledger, gate results |
| `research/phase-2-remaining-27-batch-13.cross-batch-dependencies.json` | 28 verified rows; the 4 DG-37 item edges and 1 DG-37 page edge to batch 12 are exactly the in-run prerequisites |
| `research/phase-2-remaining-27-alpha-step1-drift.md` (DG-37 entry, line 101) | Drift verdict `no-drift`; the eight declared `requires` edges match the DG-37 design and close regular values, group actions, symplectic geometry, Hamiltonian mechanics, quotients and compactness |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding run direction; contains no DG-37-specific amendment, so its general requirements (complete local proofs, companion-only B requirements, no new pair, explicit choice dependencies) control |
| `research/plan-differential-geometry-track.md` DG-37 (lines 9267–9496; A items 9269–9397, `fs-` items 9401–9412, B items 9414–9440, sources 9442–9470, §10.4 denials line 11279) | Prose design: inventory, conventions, hypotheses, source locators, well-definedness ledger, choice ledger, deliberate boundaries |
| `research/plan-spec.json` pages 515–516 | Page identity, order, category, companion and exact `requires` for both pages; item arrays empty, so no competing inventory |
| Cached full texts `https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf` (SHA-256 prefix `0b1c3a1f303b2fac`) and `https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf` (SHA-256 prefix `b1c8c4143c4ae740`) | Direct locator verification: lecture/section titles, named theorem numbers and the excluded sections |
| `items/` published interfaces (`def-hamiltonian-vector-field-and-hamiltonian-function`, `def-fundamental-vector-field-of-a-left-action`, `thm-free-proper-action-quotient-manifold`, `thm-second-whitehead-lemma`, DG-35/DG-36 items) | Convention and structure check for the page's declared suppliers |
| `tools/step3-decisions.mjs check --phase scope`; `tools/manifest-deps.mjs`; `tools/coverage-checklist.mjs`; `tools/source-fetch-check.mjs` | Track the pair's pending scope row and its closure after recording; current manifests have 1006 items and 0 dependency errors; coverage 2 pages / 27 rows / 0 errors; 4/4 sources fetch-verified |

## Role in the library

DG-37 is the capstone of the track's symplectic strand: DG-35 supplies
Hamiltonian vector fields, the Poisson bracket, first integrals and
Liouville–Arnold theory; DG-36 supplies symplectic/cotangent structures and the
algebraic conventions; DG-26 supplies Lie-group actions, orbit–stabilizer and
the free-proper quotient manifold; DG-29 supplies the Whitehead lemmas;
DG-33 supplies compact-Haar averaging. The pair then packages families of
Hamiltonians into moment maps and performs free regular symplectic reduction —
exactly the forward reference recorded at the end of DG-36.

Interfaces I checked on disk:

- the published convention `\iota_{X_H}\omega=dH` (`def-hamiltonian-vector-field-and-hamiltonian-function`)
  and the published fundamental field `X_M(x)=d/dt|_0\exp(-tX)\cdot x`
  (`def-fundamental-vector-field-of-a-left-action`) are the ones the DG-37
  design and manifest state their equations against. I re-derived both
  load-bearing identities (`d\mu^\xi=-\iota_{\xi_M}\omega \Rightarrow
  X_{\mu^\xi}=-\xi_M`; the cotangent lifted action with
  `\omega_{\mathrm{can}}=-d\lambda` satisfying
  `\langle\mu(q,p),\xi\rangle=-p(\xi_Q(q))`, and
  `\{\mu^\xi,\mu^\eta\}=\mu^{[\xi,\eta]}` under the library's left coadjoint
  action). This is a convention-coherence check, not a proof audit;
  the two published suppliers of the Hamiltonian calculus exist and are the
  ones the manifest declares.
- every external dependency of the 52 items resolves: 62 distinct dep ids,
  26 local to the pair, 34 to published items, and exactly 2 to the batch-12
  DG-33 items `cor-normalized-haar-measure-on-a-compact-lie-group` and
  `prop-integration-against-haar-is-invariant-under-translations-and-conjugation`
  (both stated for compact Lie groups with normalized probability Haar and
  translation/conjugation invariance, matching the averaging uses).
- consumers: no in-run or published item depends on the pair. Only the B companion
  requires the A page at page level; across all 15 current batch manifests and
  the batch-13 cross-batch file there are zero item edges with any of the 52
  items as supplier, and no published page in `library/` or `articles/`
  references either page. DG-38 (order 516.1) and the Morse pair (order 517)
  follow positionally and correctly do not require it.

That shape — a self-contained A page whose only consumer is its own examples
page — matches the design's "leaf" contract for the pair and creates no
library-level gap.

## Inventory against the prose design

The manifest realises the design exactly, in design order and with design
kinds:

- A items 1–34 (design lines 9269–9397) are all present as the first 34
  manifest items; the six designed `fs-` items (lines 9401–9412) are present
  in order; B items 1–12 (lines 9414–9440) are all present in order. Nothing
  was dropped, moved to the other page, or silently reclassified.
- The inventory is inside the track's caps (A 40 ≤ 55 items including `fs-`;
  B 12 ≤ 12) and the B page requires only its A companion.
- The two Step-1 clarifications recorded in the batch notes add no scope:
  `def-moment-map-and-component-hamiltonian` now distinguishes an
  infinitesimal from an equivariant moment map (so the non-equivariance
  cocycle lemma does not presuppose equivariance), and
  `thm-reduction-in-stages-for-free-proper-regular-actions` states the
  zero-level hypotheses and the residual moment map explicitly. Both are
  obligations the design already intended.
- Scope-relevant design choices are preserved: connectedness hypotheses and
  the disconnected-group caveat on the bracket-identity item; uniqueness of
  equivariant moment maps only after normalisation; the cotangent-lift sign
  `-p(\xi_Q)` as the *canonical* negative convention with a matching false
  statement; the regular-reduction chain in the design's order (kernel/radical
  → local freeness → stabiliser invariance → basic-form descent → unique
  symplectic form); the nonzero-level dimension formula separated from the
  zero-level `\dim M-2\dim G` corollary; reduction in stages, products,
  descending Hamiltonians and the shifting trick; compact-group averaging
  limited to the stated affine-obstruction hypothesis; and the two boundary
  remarks (singular/stratified quotients; convexity, toric classification,
  localization and equivariant cohomology) kept as remarks rather than
  uncited consequences.
- Subject coverage is complete for the page's own title. Every cluster has a
  result or a worked example: definitions and basic identities (A 1–5,
  B 1/4), equivariance obstruction and uniqueness (A 6–9, 32), Noether and
  canonical models (A 10–18, B 4–6), regular reduction and its corollaries
  (A 19–30, B 2/3/5/7/9/10), compact consequences (A 31–32) and the singular
  boundary (A 33–34, B 3/11/12/cex 12).

## Source coverage assessment

The A page carries two fetch-verified, independent treatments:

- Cannas da Silva, *Lectures on Symplectic Geometry* (1,127,912 bytes, 225
  pages, SHA-256 prefix `0b1c3a1f303b2fac`), Lectures 21–24 and 26, 7 rows;
- Meinrenken, *Symplectic Geometry* (2,031,350 bytes, 142 pages, SHA-256
  prefix `b1c8c4143c4ae740`), §§7.1–7.5 and 8.1–8.4, 7 rows.

I verified the locators against the cached full texts rather than accepting
the coverage rows:

- the Cannas da Silva table of contents has Lecture 21 "Actions" §§21.1–21.5,
  Lecture 22 "Hamiltonian Actions" §§22.1 "Moment and Comoment Maps"–22.4
  "Classical Examples", Lecture 23 §§23.1–23.3 (the Marsden–Weinstein–Meyer
  statement, ingredients and proof), Lecture 24 §§24.1 "Noether Principle"–
  24.5 "Orbifolds", Lecture 25 "Moment Map in Gauge Theory", and Lecture 26
  "Existence and Uniqueness of Moment Maps" §§26.1 "Lie Algebras of Vector
  Fields"–26.4 "Uniqueness of Moment Maps"; Lectures 27–30 are convexity,
  Delzant/toric classification, as the coverage and design record;
- Meinrenken §7.1–7.5 and §8.1–8.4 exist with the named controls: Theorem 7.25
  (Kirillov–Kostant–Souriau), Theorem 7.29 (coadjoint-orbit inclusion as
  moment map), Theorem 8.2 (regular value iff discrete stabiliser, null
  foliation = `G_\mu`-orbits), Theorem 8.3 (Marsden–Weinstein–Meyer, whose
  "fibration" hypothesis Remark 8.4 shows is satisfied by a free proper
  `G_\mu`-action — the hypothesis the manifest states), and Theorem 8.17
  (cotangent bundle of a Lie group). Meinrenken's excluded sections are
  exactly the denied topics: §7.6 Poisson manifolds, §7.7 gauge theory,
  §8.5 normal forms near the zero level and §8.6 the symplectic slice
  theorem.
- the B examples map onto these sources: the circle action on `\mathbb C^n`
  and its reduction to `\mathbb{CP}^{n-1}` with scaled Fubini–Study data
  (Cannas da Silva Homework 20, Exercise 2, printed there with the
  `\mathbb C^{n+1}\to\mathbb{CP}^n` indexing), the Grassmannian `\mu^{-1}(0)/U(k)=G(k,n)`
  (Homework 20, Exercise 1 — the design's `[AN]` note asks the page to carry
  that matrix-action computation, and the manifest does), angular momentum
  (§22.4; Meinrenken §7.4.1), products and conjugates (Meinrenken §7.4.6),
  projective representations (Meinrenken §7.4.5), weighted projective space
  (Cannas da Silva §24.5, p.151, used only to exhibit failure of freeness),
  and the symplectic-but-not-Hamiltonian torus action (Cannas da Silva
  Lecture 26's "commutative extreme case", which prints the circle-rotation
  variant of the same closed-non-exact obstruction).

Coverage dispositions are honest: 11 `included` rows each name an exact
consuming item, the single `inline` row is the product/shifting argument
supplied locally, and both `out-of-scope` rows (gauge/toric applications;
singular reduction and slice normal forms) correspond to explicit §10.4
denials or design deferrals. `coverage-checklist` reports 2 pages / 27 rows /
0 errors and `source-fetch-check` 4/4 fetch-verified on the current disk
state.

## Honest uncertainty and non-scope observations

No scope-level uncertainty remains that would change the verdict. Five
observations are recorded for the owner; none is a scope gap under the
design:

1. No B-page example exercises the non-equivariance cocycle / affine
   obstruction cluster (A items 6–9 and the averaging item 32): the worked
   examples cover the constructive and reduction clusters instead. This is a
   possible enrichment, not an omission relative to the design, which fixes
   the B inventory at 12 items.
2. The coverage record contains no rows for the B page (the run's
   `coverage-checklist` validates A pages only), and every B item carries the
   same page-level locator pair rather than an item-specific locator. The
   examples' claims are nevertheless anchored in the two sources as listed
   above; Step 3b/5 may wish to record the exact exercise locators.
3. The design names Kirillov, *An Introduction to Lie Groups and Lie
   Algebras*, §3.3–3.4 as an independent backing for items 14–17
   (`plan-differential-geometry-track.md` line 9466), but the coverage file
   records only the two treatments above. Those items remain double-backed
   (Cannas da Silva §21.5/Homework 17 on p.139, Meinrenken §7.5 with Theorems
   7.25 and 7.29), so this is a bookkeeping note, not a coverage deficiency.
4. All 12 B items are recorded `statement: ai-altered / proof: ai-generated`
   whereas the design tags them `[LA]`. The schema admits the combination
   (`SCHEMA.md`, "Sources and provenance") and the design's §4 permits
   directly checkable examples and counterexamples to carry generated proofs;
   nothing depends on any B item. If the provenance policy requires the
   literature-derived statement tag, re-tagging belongs to the owner at
   Step 3b/5.
5. The absent alternative packaging "the equivariant moment map is a Poisson
   map `M\to\mathfrak g^*`" is deliberate: the design denies general Poisson
   geometry (§10.4) and carries the same content as the component bracket
   identity (A item 5). Likewise the deferred topics (singular/stratified
   reduction, orbifolds, slice normal forms, convexity/Delzant/localization,
   equivariant cohomology, gauge theory, Kähler/Kempf–Ness) are recorded in
   A remarks 33–34, in the coverage's out-of-scope rows and in §10.4;
   nothing in the pair assumes them.

Build-risk note (not a scope defect): the proof load concentrates in the
regular-reduction chain (A items 19–26) and the two compact-averaging items
(A 31–32) that consume the batch-12 Haar supplier.

## Verdict

**sufficient** for both pages of the pair. The planned definitions, results,
examples and false statements realise the DG-37 design completely and in
order, the intended subject (Hamiltonian actions, moment maps and their
equivariance theory, cotangent and coadjoint models, Noether, regular
Marsden–Weinstein–Meyer reduction with its dimension/products/stages/shifting
corollaries, compact-group consequences and an explicit singular boundary) is
covered, the fetch-verified source coverage is adequate with locators I
re-checked directly, and the deliberately excluded topics are recorded rather
than silently missing. No omissions are named, no enrichment is required and
no pair merger is proposed; Step 3b may author against this scope.
