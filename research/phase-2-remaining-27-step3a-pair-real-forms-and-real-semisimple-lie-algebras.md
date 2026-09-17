# Step 3a scope review — Real Forms and Real Semisimple Lie Algebras

- Run: `phase-2-remaining-27` (role: alpha, this pair only; batch 13)
- A page: `real-forms-and-real-semisimple-lie-algebras` (plan order 509, DG-34)
- B page: `real-forms-and-real-semisimple-lie-algebras-examples` (plan order 510)
- Scope decision: **sufficient**, recorded with
  `node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27 --page <A> --decision sufficient`.
  Receipt `research/phase-2-remaining-27-step3a-review-real-forms-and-real-semisimple-lie-algebras.json`
  (scope hash `6171d6ab2667eba4bbcc3587ff4517bb5c40633e9e3d6bb66ac6cb1f72698470`,
  recorded 2026-09-16T15:28:21.144Z; re-verify with
  `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase scope`).
- This report judges scope only: whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item contract, plan entry or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-13.pages.json` | Current A inventory (51 items, in order) and B inventory (12 items, in order); page `requires`; companion pairing; every item dep, source list, locator, axiom base and proof strategy |
| `research/phase-2-remaining-27-batch-13.coverage.json` | DG-34 source record: 2 fetch-verified treatments, 13 disposition rows (10 `included`, 0 `inline`, 3 `out-of-scope`, none dropped or deferred) |
| `research/phase-2-remaining-27-batch-13.notes.md` | Step-1 construction record: 115 items total, dependency audit, source dispositions, published-defect carry-over, all gate results |
| `research/phase-2-remaining-27-batch-13.cross-batch-dependencies.json` | 28 verified rows; 19 item edges and 4 page edges for this pair (the rest are DG-37's) |
| `research/phase-2-remaining-27-alpha-step1-drift.md` (DG-34 entry) | Drift verdict `no-drift`; controlling prerequisite list |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding direction; it contains no DG-34-specific amendment, and its DG rules (BC_n example only on the DG-34 B page; DG-32/RL-7 non-supplying) are respected |
| `research/plan-differential-geometry-track.md` DG-34, lines 8520–8775 | Prose design: A items 1–45, six `fs-` items, B items 1–12, sources/locators, well-definedness and choice ledgers, scope boundary |
| `research/plan-spec.json` pages 509–510 | Page identity, order, companion, exact `requires`; empty item lists, so no competing inventory |
| Knapp, *Lie Groups Beyond an Introduction*, digital 2nd ed. 2023 (author-hosted PDF, stamped copy) | Re-read: Ch. VI chapter abstract, §§1–11 structure, Thms 6.11, 6.16, 6.31, 6.46, 6.51, 6.57, Prop 6.40, Cor 6.53, Prop 6.59, Thms 6.74, 6.88, 6.94, 6.96, 6.105, §12 Problem 7, Historical Notes pp. 766–767, index |
| Etingof, *Lie Groups and Lie Algebras* (author-hosted PDF, stamped copy) | Re-read: §§39.2–39.4 (forms, split form, antilinear involutions, compact form), §§40.1–40.3 (examples, classification, classical groups), §41.1 (exceptional Vogan diagrams), §§43.1/43.6 (polar/Cartan decomposition); Thms 39.6, 40.1, 43.1, 43.20 |
| `tools/coverage-checklist.mjs --require-destination` on batch 13 | 2 A pages, 27 harvested results, 0 errors, 0 warnings (source-anchored omission gate passes) |

Both PDFs in the repository's fetch cache were hash-checked against the coverage
stamps before use: Knapp `5,060,066` bytes, `sha256_16 bd7e983a2389349b`, 838 pp.;
Etingof `1,510,934` bytes, `sha256_16 80389a10d1f86b37`, 223 pp. The extractions
used for reading match those hashes, so the passages cited below are from the
stamped documents, not from a different edition.

## Role in the library

DG-34 is the finite-dimensional real-structure/classification peak of the
Lie/differential-geometry track. It consumes, by page-level `requires`, the
published DG-25–DG-29 pages (`lie-groups-invariant-fields-and-the-exponential-map`,
`lie-subgroups-actions-and-homogeneous-spaces`,
`lie-algebra-representations-enveloping-algebras-and-pbw`,
`solvable-and-nilpotent-lie-algebras`,
`semisimple-lie-algebras-cohomology-and-levi-theory`), the published
`covering-spaces-and-lifting`, and the run-local DG-30/31/32/33 scaffolds of
batches 11–12 by page edges plus 19 item edges. Every one of those 19 supplier
items exists in the declared batch-11/12 manifests (verified by id, including
`thm-serre-presentation-theorem`, `thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra`,
`cor-opposite-root-spaces-pair-nondegenerately`, `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate`,
`thm-conjugacy-of-maximal-tori`, `prop-classical-types-correspond-to-sl-so-and-sp`).
All publishable direct dependencies that are not in-run resolve to existing
`items/` files; there are no unresolved ids in the pair's manifest.

The pair is a leaf in the current graph: the B page requires only its A companion,
no A item consumes a B item, and no other in-run pair consumes an item of this
pair. No published library page currently requires either page — the published
RL-1 edge to the B page was repaired to `requires: []` by the owner on 2026-09-09
and the RL track records DG-34 as its "physical splice anchor, not an
analytic-representation supplier". This is the intended A/B shape.

## Inventory against the prose design

The design section (lines 8520–8776) lists 63 ids: 45 A items, six `fs-` items
and 12 B items. The manifest carries exactly those 63 ids in design order, with
matching kinds — extraction of the design's item ids in order of appearance is
byte-identical to the manifest order (no added, dropped, reordered or
reclassified item). Invariants:

- A page: 15 definitions, 8 propositions, 20 theorems, 1 corollary, 1 remark,
  6 false statements; 23 items `ZF`, 28 `ZFC`; five landmarks
  (`thm-existence-of-a-compact-real-form`,
  `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group`,
  `thm-global-iwasawa-decomposition`,
  `thm-classification-of-real-forms-by-vogan-diagrams`,
  `thm-classification-of-real-semisimple-lie-algebras`).
- B page: 10 examples, 2 counterexamples; 7 `ZF`, 5 `ZFC`.
- B-page protection: B requires only A; zero A→B item edges.
- Every item has a source list, a source locator and an axiom base; all 12 B
  items and 35 of the 51 A items carry explicit proof strategies (the remaining
  16 are the 15 definitions and one remark, with `proof: not-applicable`).
  Step 1 added nothing to this page (the two design
  clarifications recorded in the batch-13 notes belong to DG-37).

Design choices that determine scope are reproduced exactly: the real-form ↔
conjugate-linear-involution correspondence; compact form existence/conjugacy and
split form existence/uniqueness; Cartan involution existence/conjugacy and both
Cartan decompositions with the finite-center, connected hypotheses kept; the
noncompact symmetric-space metric/curvature items; maximal split abelian
subspaces, real rank, restricted roots with real multiplicities and the explicit
nonreduced case; the restricted Weyl group; Lie-algebra and global Iwasawa with
uniqueness/change of positive system; θ-stable Cartans, Cayley transforms and the
maximally-compact conjugacy statement; Vogan diagrams (well-definedness and
classification, both directions), Satake diagrams and the equivalence statement;
the real-simple complexification dichotomy; the complete real semisimple
classification with the classical table; and the boundary remark deferring
analytic representation theory.

## Source coverage assessment

Two independent, full-text-fetch-verified treatments back the A page, and I
re-read the load-bearing passages rather than relying on the coverage rows:

- Knapp Chapter VI, "Structure Theory of Semisimple Groups" (pp. 348–436):
  §1 existence of a compact real form (Thm 6.11) and the split form via real
  structure constants; §§2–3 Cartan involutions and the Lie-algebra and group
  Cartan decompositions (Thm 6.16, Thm 6.31); §§4–5 Iwasawa decomposition and its
  uniqueness (Thm 6.46, Prop 6.40, Cor 6.53, Thm 6.51, Thm 6.57, including the
  explicit statement that the restricted root system of `su(p,q)`, `p > q`, need
  not be reduced); §§6–7 Cartan subalgebras and Cayley transforms (Prop 6.59);
  §8 Vogan diagrams (Thm 6.74, Thm 6.88); §9 the complexification dichotomy
  (Thm 6.94); §10 the classification of simple real Lie algebras (Thm 6.105,
  including the classical list `su(p,q)`, `so(p,q)`, `sp(p,q)`, `sp(n,R)`,
  `so*(2n)`, `sl(n,R)`, `sl(n,H) = su*(2n)` and the twelve exceptional
  noncomplex noncompact forms); §11 restricted roots in the classification
  (including the `(BC)_p` / `C_p` computation for `su(p,q)`).
  Chapter VI §12 Problem 7 (p. 427) proves the Satake-diagram facts
  (every simple restricted root is the restriction of a simple root; the
  order-2 pairing `α_i ↦ α_i'` of the non-imaginary simple roots; the elements
  `H ∈ a`), and the Historical Notes (p. 767) state that the classification is
  "stated in terms of 'Satake diagrams', which are described by Helgason [1978],
  p. 531", with Problem 7 cited as the justification of the definition.
- Etingof, §§39.2–39.4, 40.1–40.3, 41.1, 43.1/43.6: forms and Galois-cohomology
  classification with the antilinear-involution fixed-point construction and the
  split form (Thm 39.6), the compact real form with negative-definite Killing
  form (Prop 39.8), examples of real forms and the classical-group list
  (Thm 40.1, §§40.1–40.3), exceptional real forms via Vogan diagrams (§41.1),
  and the polar and Cartan decompositions (Thm 43.1, Thm 43.20).

Every disposition row is `included` with an exact consuming item, or
`out-of-scope` with a written boundary reason (Borel–de Siebenthal equal-rank
refinement; infinite-dimensional representation theory of real reductive
groups). No row is dropped, no retrieval failed, and no waiver or owner source
escalation was needed. With the two observations recorded below, the declared
sources cover every planned definition, result and example at the intended
level, and the `coverage-checklist` omission gate passes cleanly.

## Dependency interaction to keep on the owner's radar (not a defect of this pair)

The direct supplier of A item 44
(`prop-classical-real-forms-of-the-classical-complex-lie-algebras`) is DG-31's
`prop-classical-types-correspond-to-sl-so-and-sp`, and DG-31
(`root-systems-dynkin-diagrams-and-cartan-killing-classification`, batch 11)
currently carries an owner-held `insufficient` scope decision whose first named
gap is precisely that proposition (missing scaffolded definitions of the complex
classical matrix algebras/split Cartans/root sets; the supporting Etingof
material lies one lecture outside DG-31's declared reading range). The DG-31
reviewer's recommended enrichments (adding
`def-classical-complex-matrix-lie-algebras`,
`prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras`,
`prop-root-systems-of-the-classical-complex-lie-algebras`) would keep this
interface intact and are compatible with the DG-34 scope; the alternative
(narrowing that proposition) would leave DG-34 item 44's classical
identification without its declared supplier and would need a replacement
supplier inside DG-34. This pair's own scope is unchanged either way — the
classical real-form list is in the DG-34 design and is independently backed by
Knapp §10 and Etingof §40.3 — but the owner should resolve DG-31 with this
consumer in view.

## Recorded observations for authoring (non-blocking)

1. **Satake item locators stop one section short.** Items
   `def-satake-diagram` (40) and
   `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications`
   (41) cite only Knapp with locator "Chapter VI §§1–11". In the stamped Knapp
   PDF the word "Satake" occurs only in the Historical Notes (p. 767, pointing
   to Helgason 1978, p. 531) and in the index; §1–11 do not state the
   black-vertex/arrow convention or the equivalence statement, and the stamped
   Etingof notes contain no Satake material at all. The material that does back
   these two items in the fetched file is Chapter VI §11 (restricted-root
   classification data) together with §12 Problem 7 (p. 427), which Knapp's own
   notes identify as the justification of the definition. Recommended action at
   authoring (a locator/coverage refinement, not new mathematics): extend the
   two locators to "Chapter VI §11 and §12 Problem 7 (with Historical Notes
   p. 767)", and either record an explicit coverage disposition for the Satake
   topic or declare Helgason (1978), Ch. X §6/p. 531 (or another
   fetch-verified treatment) as a third source if the owner wants explicit
   literature backing for the equivalence statement itself.
2. **Item 17's conjugacy half is not proved by Knapp §3.** The statement that
   every maximal compact subgroup is conjugate to `K` (Cartan's theorem) is, by
   Knapp's own Historical Notes (p. 766), omitted from §3 ("having as yet no
   fully Lie-theoretic proof"), with a reference to Borel [1998], pp. 128–133;
   Knapp's Thm 6.31(e)/(f) gives compactness and maximality of `K` only. The
   pair's own strategy (convex displacement function on `p` plus the global
   Cartan decomposition) is a complete local route, so no scope change is
   needed; the author should either cite the notes/Borel pointer or rely on the
   local proof, and should keep the finite-center, connected hypotheses that the
   item already states.
3. **Possible enrichment (not an omission).** The B page exercises the
   classification through the `sl_3(C)` Vogan diagrams and the classical forms,
   but no B item works the Satake side or an exceptional form explicitly; the
   design's B inventory is realized exactly, so this is an optional enrichment
   for the owner, not a scope gap. Likewise the exceptional real forms appear
   through the Vogan/Satake classification theorem rather than as a separate
   table, exactly as designed.

## Honest uncertainty

No scope-level uncertainty remains that would change the verdict. I read the
complete relevant arguments for the passages listed above; I did not re-derive
the proofs, which is Step 3b's obligation, and I did not re-adjudicate any
published defect. The published items carried by the batch-13 notes as
Phase-3 debt (the Jordan–Chevalley AC metadata omission and the three
Cartan/root-system interfaces superseded by planned Batch-11 replacements) are
not suppliers of this pair except through the in-run DG-30/31 scaffolds, which
the manifest uses instead of the defective published interfaces; they remain
canonical-ledger debt and are not re-adjudicated here.

## Verdict

**sufficient** for both pages of the pair. All 63 designed definitions, results,
examples, counterexamples and false statements are manifested in design order
with matching kinds; the intended subject — real forms and real semisimple Lie
algebras from complexification and conjugations through compact/split forms,
Cartan involutions and decompositions, restricted roots and Iwasawa theory,
θ-stable Cartans and Cayley transforms, Vogan/Satake classification, and the
classical/exceptional list — is covered adequately, with two independent
fetch-verified treatments and correct out-of-scope boundaries. The two
non-blocking authoring observations above are locator/coverage refinements, not
omitted topics or results; no enrichment is required for scope and no pair
merger is proposed.
