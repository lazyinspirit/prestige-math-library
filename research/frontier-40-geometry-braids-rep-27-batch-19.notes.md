# Batch 19 scaffold notes

Run `frontier-40-geometry-braids-rep-27`, batch 19, pair orders 891/892,
category `algebraic-geometry`:

- A page `split-reductive-root-systems-bruhat-cells-and-parabolics` (36 items);
- B page `split-reductive-root-systems-bruhat-cells-and-parabolics-examples` (3 items).

Manifest: `research/frontier-40-geometry-braids-rep-27-batch-19.pages.json`.
Coverage: `research/frontier-40-geometry-braids-rep-27-batch-19.coverage.json`.
Consumer dependency input: `research/frontier-40-geometry-braids-rep-27-batch-19.cross-batch-dependencies.json`.

Outcome: 39 items recorded ready at the scaffold level (36 A + 3 B). No item
Markdown is authored here; Step 3 owns proof writing. The design's item
inventory is preserved verbatim and the design's open second-source gate is
closed over the ranges actually read (Milne, Conrad, Herzig); the residual
reading limitations are recorded in sections 3 and 8.

## 1. Inputs read before construction

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`.
- Binding owner direction `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  (27 selected pairs; lower-order in-run dependencies permitted; publication
  and pushing are owner actions). Batch 19 is one of the selected geometry
  pairs; no conflict with the direction.
- Design `research/plan-algebraic-geometry-expansion-track.md`, section
  **AG-GRP-4** at line 39 of the canonical future-page table, with the prose
  row in "Actions, quotients, and reductive structure" (the row headed
  "AG-GRP-4 — Split reductive root systems, Bruhat cells, and parabolics").
- Plan rows `research/plan-spec.json` orders 891/892 (both with empty item
  lists before this batch).
- Precedents: batch-13, batch-15, batch-16 and batch-18 manifests and notes,
  the batch-18 cross-batch input, and the published page front matter of the
  in-run and published suppliers.

## 2. Design versus plan

The plan row and the design agree on page id, order, kind, category, companion
and the six-entry `requires` list. No design/plan conflict to record.
`manifest-integrity --run` reports "no scope drift".

The design's A inventory is preserved byte-identically:

- `def-root-datum-of-split-reductive-group`,
- `thm-root-subgroups-of-split-reductive-group`,
- `thm-bruhat-decomposition-for-split-reductive-group`,
- `thm-parabolics-and-levi-decomposition`.

The design's B inventory is preserved byte-identically:

- `ex-root-groups-and-bruhat-cells-for-sl2`,
- `ex-standard-parabolics-in-gl-n`,
- `cex-lie-root-system-does-not-record-full-root-datum`.

The design's requirements are honoured: only split reductive groups over a
field are claimed; the rank-one input (Milne 20.22/20.32) is stated as a local
theorem; the positive-root order is built into
`thm-root-subgroups-of-a-split-reductive-group`(f) and the Bruhat cells; and
the root datum lattices are those of the character/cocharacter duality
`X(T)`, `X_*(T)`.

Local prerequisites added (32 A items, all `local_addition: true`):
`def-radical-and-unipotent-radical-of-an-algebraic-group`,
`lem-character-and-cocharacter-lattices-of-a-split-torus`,
`def-split-reductive-algebraic-group`,
`lem-reductive-center-radical-and-semisimple-quotient`,
`lem-lie-functor-exactness-fixed-points-and-generation`,
`def-limit-of-a-gm-orbit-and-concentrator-subscheme`,
`thm-concentrator-subscheme-representability-and-smoothness`,
`lem-graded-nakayama`,
`thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions`,
`lem-fixed-loci-and-centralizers-of-torus-actions-are-connected`,
`lem-nilpotent-group-structure-and-maximal-torus-criterion`,
`thm-cocharacter-limit-subgroups`,
`thm-luna-map-and-bialynicki-birula-decomposition`,
`lem-connected-groups-of-rank-zero-are-unipotent`,
`thm-weight-subgroups-of-a-torus-action`,
`lem-homogeneous-curves-and-automorphisms-of-p1`,
`lem-sl2-structure-and-root-coordinates`,
`thm-rank-one-connected-groups`,
`thm-split-rank-one-reductive-classification`,
`thm-solvable-subgroups-and-the-radical-as-borel-intersection`,
`lem-cartan-subgroups-conjugacy-and-density`,
`thm-chevalley-centralizer-radical-and-reductive-centralizers`,
`lem-maximal-tori-extension-conjugacy-and-derived-group`,
`def-abstract-root-datum-and-its-weyl-group`,
`lem-root-datum-combinatorics`,
`def-roots-and-root-groups-of-a-split-reductive-group`,
`lem-borel-root-group-opposition`,
`thm-weyl-group-borel-chambers`,
`lem-simple-reflection-double-coset-rule`,
`lem-root-coordinate-cells-and-generation`,
`def-parabolic-subgroup-of-an-affine-algebraic-group`,
`lem-standard-levi-subgroup`.

These are the interfaces Milne's proofs of 21.11, 21.68, 21.80 and 21.91
actually use: the characters and cocharacters of a split torus (Ch. 12 and
Appendix C), the cocharacter limit construction and its Lie algebra (Ch. 13),
T-stable weight subgroups and closed unipotent weight sets (Ch. 16), the
structure theory of Cartan subgroups and Chevalley's theorem on the unipotent
radical of a torus centralizer (Ch. 17), the rank-one classification (Ch. 20)
and the split root-datum theory (Ch. 21). None of these prerequisite items is
imported from another batch because no other selected pair covers them.

The design's warning not to duplicate the published AG-LIE complex flag items
is honoured: the AG-LIE page (`smooth-projective-serre-duality-and-flag-variety-line-bundles`)
proves the complex-variety specialization of the Bruhat decomposition; this
page claims only the split algebraic-group statements over a field and cites
the AG-LIE page nowhere as a supplier.

## 3. Sources read, and the design's second-source gate

All coverage sources are fetch-stamped by `tools/source-fetch-check.mjs --stamp`
(6/6 fetch-verified; 3/3 distinct URLs live by `url-sweep.mjs`):

1. J. S. Milne, *Algebraic Groups* (corrected 2022 printing). URL
   `https://www.jmilne.org/math/Books/iAG2022.pdf`;
   2026-10-04T09:03:38.402Z, 4,838,013 bytes, `f2ddd8fa4d263085`, pdf, 659 pp.
   Read (extracted text, statements and proofs) at the ranges recorded in the
   coverage locator: Ch. 6, Ch. 10, Ch. 12, Ch. 13, Ch. 16, Ch. 17, Ch. 19,
   Ch. 20, Ch. 21 and Appendix C. The exact results read are the 75 harvest
   rows for this source in the coverage file.
2. Brian Conrad, *Reductive Group Schemes* (SGA 3 summer school, Luminy).
   `https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf`;
   2026-10-04T09:03:40.598Z, 2,281,869 bytes, `431c4edde77a3a4e`, pdf, 390 pp.
   Read: S1.3, S1.4 (Theorem 1.4.12 and Corollaries 1.4.13-1.4.14 with
   Remark 1.4.6, pp. 30-39), S1.5, S4.1 (Theorems 4.1.4, 4.1.7,
   Proposition 4.1.10, Examples 4.1.5-4.1.9), S4.2 (Lemma 4.2.2,
   Theorems 4.2.6, Propositions 4.2.7, 4.3.1, 4.3.4), S5.1 (Proposition 5.1.6),
   S5.2 (parabolic subgroups, Corollaries 5.2.7-5.2.8), S5.3, S5.4 (Levi
   subgroups).
3. Florian Herzig, *Linear Algebraic Groups* (Toronto 2013).
   `https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf`;
   2026-10-04T09:03:42.428Z, 743,596 bytes, `23e6c6d133264dbe`, pdf, 88 pp.
   Read: S5.2 (Proposition 144), S5.3 (Propositions 125-127, Lemma 128),
   S5.4 (Theorem 136, Proposition 139), S5.5 (Theorem 146, Propositions 147,
   149), S6.1 (Definitions 151, Proposition 153, Definition 155, Theorem 157,
   Corollary 158), S6.2 (Lemma 168), S6.3-S6.4 (Propositions 171, 174,
   Lemma 176), S6.5 (Definitions 177, Theorem 178, Remarks 179, Theorem 180).
   Herzig's notes are written over an algebraically closed base field in
   S5-S6; this limitation is noted in the affected item locators.

The design recorded the second-source gate as open for this pair. It is closed
for the four promised claims and their local prerequisites by Conrad's
independent treatment of the classical Bruhat decomposition (Theorem 1.4.12,
via BN-pairs and [Bo91, 14.12]), the dynamic method (Theorems 4.1.4, 4.1.7,
4.2.6), the root datum of a split reductive group (Proposition 5.1.6) and
parabolic/Levi theory (S5.2-S5.4), and by Herzig's independent redevelopment of
the Borel-Cartan-Chevalley and rank-one theory (Theorems 130, 136, 146, 157,
Corollary 158, Propositions 171, 174, 178, 180).

Residual limitations, recorded honestly (not escalated as a source failure):
- The concentrator-subscheme existence theorem (13.22-13.27, 13.57-13.58) is
  proved in Milne; Conrad's S4.1 cites [CGP, Lemma 2.1.4-2.1.5] for the same
  existence statement rather than reproducing the glueing proof. The second
  treatment is therefore complete for the group-level limit subgroups but not
  for the two glueing lemmas, which remain Milne-only.
- The graded Nakayama/Hesselink regularity lemma 13.25-13.27 is textually
  Milne-only; Conrad's method bypasses it by citing CGP.
- Milne 17.56 is proved in Milne S17h; Herzig's independent Theorem 157 uses a
  different (Luna-map) route, so the Chevalley theorem has two genuine
  treatments, but the auxiliary density Theorem 17.33 has only Milne among the
  read sources.
Under the owner's current source rule these local items carry a complete local
proof chain from the read texts; Step 3 and Step 5 own any further source work
or explicit escalation.
- The classification Milne 20.33 is not needed by any promise of this pair and
  is recorded in the coverage as `deferred` to `owner-decision`, with the
  proposed destination being the integral/classification successor proposed in
  the design as candidate AG-RED-SG-1.

## 4. Dependency structure and readiness

Dependency levels were recomputed with `tools/item-dependency-levels.mjs` after
every dependency change and written into all 39 items. Minimum level 0
(`lem-character-and-cocharacter-lattices-of-a-split-torus`,
`lem-graded-nakayama`); maximum level 32
(`ex-standard-parabolics-in-gl-n`), through the in-run chain
13/14/15/18. No cycle exists in the pair, and no batch-19 error is reported by
`item-dependency-levels.mjs check --run`.

Item construction order on the A page follows the levels: definitions and
lattices, the Lie-functor lemma, limit/concentrator machinery, fixed loci,
cocharacter limit subgroups, Luna/Bialynicki-Birula, rank-zero and weight
subgroups, the rank-one theory, the Cartan/Chevalley theory, maximal tori,
abstract root data, roots and root groups, the Weyl/Borel/chamber theorem, the
root datum, the Tits rule, root coordinates, Bruhat, parabolics and Levi.

Each readiness record lists the examined dependency IDs and a reason naming the
source route. No item was escalated.

Axiom of Choice inventory: 27 items declare "Assume the Axiom of Choice
inherited from the named suppliers" and carry `def-axiom-of-choice`; these are
exactly the non-definition items whose transitive closure reaches a batch-13/14/15/18
supplier that declares Choice (the homogeneous-space, quotient-sheaf,
fixed-point, density, trigonalizable and multiplicative-type suppliers).
Definitions never declare Choice. The four choice-free A items are
`lem-character-and-cocharacter-lattices-of-a-split-torus`,
`lem-lie-functor-exactness-fixed-points-and-generation`,
`lem-graded-nakayama` and `lem-root-datum-combinatorics`.

## 5. Cross-batch dependencies

`research/frontier-40-geometry-braids-rep-27-batch-19.cross-batch-dependencies.json`
contains 89 consumer-owned rows, all status `open`: four page rows (the A page
requires the in-run pages of batches 13, 14, 15 and 18) and 85 item rows
(direct `deps` into those batches). The breakdown is 3 item edges into batch 13,
6 into batch 14, 7 into batch 15, 69 into batch 18, plus the four page rows.
`frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27`
reports "refreshed and deduplicated"; no row is orphaned and every consumer is
owned by batch 19. Batches 13, 14, 15 and 18 must be authored and certified
before this page's Step-3 closure; the page-level `requires` edges are the six
plan-required pages, of which two (`group-schemes-of-finite-type-over-a-field`,
`groups-of-multiplicative-type-and-arithmetic-tori`) are published and need no
in-run edge.

## 6. Checks actually run and their results

- `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-19.pages.json`
  -> `39 item(s), 0 missing, 0 errors`.
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
  -> no batch-19 item appears in the error list (recomputation reports no
  errors touching this batch's ids). Run-wide the check still reports empty
  inventories for other units' pages (`projective-git-...`,
  `highest-weights-...`, `deformation-theory-...`,
  `higher-dimensional-resolution-...`), exactly as batch 18 recorded for its
  own dispatch; those are other units' work, not batch-19 defects.
- `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-19.coverage.json --require-destination`
  -> `2 page(s), 106 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage ... --stamp` -> `6/6 source(s)
  fetch-verified (6 newly stamped)`; check mode -> `6/6 source(s)
  fetch-verified`, `6/6 resolved`.
- `node tools/url-sweep.mjs --coverage ...` -> `3/3 live; 0 failed; 0
  blocking`.
- `node tools/content-policy.mjs --manifest-only research/frontier-40-geometry-braids-rep-27-batch-*.pages.json`
  (whole run) -> `734 scoped item(s), 0 error(s), 0 warning(s)`. Run against
  the batch-19 manifest alone the same checker reports 85
  `batch-dependency-missing` rows, all of the approved in-run class (suppliers
  scaffolded in batches 13/14/15/18 but not yet authored); this is the expected
  scaffold-time state recorded by batches 14-16 and resolves when the suppliers
  are authored.
- `node tools/manifest-integrity.mjs --run frontier-40-geometry-braids-rep-27`
  -> `54 page(s) owed, 54 in the manifests; no scope drift`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> OK; the declared
  page order is acyclic and consistent.
- `node tools/frontier-dependency-ledger.mjs refresh --run ...` -> refreshed,
  all batch-19 edges reviewed.
- `node tools/step1-decisions.mjs check --run frontier-40-geometry-braids-rep-27`
  -> at the time of the check `items 734, ready 731, closed false` (other
  batches were still being scaffolded concurrently, so the run-wide counts
  move); no batch-19 item or page appears in the work list. The 39 batch-19
  readiness records are present and current after the two statement repairs
  recorded below; the remaining rows belong to other units (owner-held source
  dependencies in orders 907/913 and empty inventories in orders 883/893/909/915).
  A later rerun of the same checker still shows zero batch-19 rows (the only
  page-id substring matches are batch 20's empty `highest-weights-...` pages).
- `node tools/extcheck.mjs` (repo-wide) -> OK; only pre-existing
  `unproved-on-published` warnings on unrelated pages.

## 7. Published-material observations

The published items consumed by this batch were read in the plan and library
front matter: `def-group-scheme-over-a-field`,
`def-morphism-and-closed-subgroup-scheme`,
`def-diagonalizable-group-and-character-module`,
`lem-diagonalizable-character-antiequivalence`,
`def-group-of-multiplicative-type-and-torus`,
`thm-multiplicative-type-groups-and-galois-character-modules`,
`cor-tori-correspond-to-torsion-free-character-lattices`, and the published
affine-scheme, smoothness, properness, completeness and root-system items used
as infrastructure. Their statements match the recorded uses, including
hypotheses and direction.

One naming hazard is recorded for the canonical ledger and for later authors:
the published item `def-character-and-cocharacter-lattices-of-a-torus` is about
a **compact Lie group** torus, not an algebraic torus. This batch therefore
uses the published diagonalizable-group anti-equivalence
(`lem-diagonalizable-character-antiequivalence`) and defines the algebraic
lattices locally in `lem-character-and-cocharacter-lattices-of-a-split-torus`;
the published item is deliberately not a dependency. No published item was
found defective in the consumed interfaces.

The published counterexample
`cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two`
is the Lie-group statement that SL_2(C) and PGL_2(C) share a Lie algebra. It is
not duplicated: this batch's counterexample is stated for the algebraic groups
over a general field and distinguishes the **lattice root data**, not the Lie
algebra alone, which is the design's promised claim.

## 8. Repairs made during construction

- The reductive condition in `def-radical-and-unipotent-radical-of-an-algebraic-group`
  was corrected to the geometric form ($R_u(G_{k^{\mathrm a}})=1$) with the
  pseudo-reductive caveat for imperfect fields, matching Milne 6.46-6.47.
- `def-parabolic-subgroup-of-an-affine-algebraic-group` was cut free of the
  split-reductive and radical definitions so that the definition no longer sits
  downstream of the page's later theorems; a dependency cycle
  (`def-radical -> thm-solvable -> def-parabolic -> def-split-reductive -> def-radical`)
  and a second cycle through `lem-reductive-center-radical-...` were removed by
  that restructuring, and `item-dependency-levels.mjs` now reports no cycle.
- `lem-nilpotent-group-structure-and-maximal-torus-criterion` (Milne 16.43-16.48)
  was added because the connectedness proof of 17.38-17.40 and the maximality
  criterion 17.82 genuinely use it; it is not covered by any batch-18 item.
- `lem-connected-groups-of-rank-zero-are-unipotent` was restricted to the route
  actually proved from the read material (Milne 16.60 plus geometric base
  change, with Herzig Props. 125-127), dropping the stronger 17.81 formulation
  whose isogeny–induction proof was not part of the local closure.
- `thm-bruhat-decomposition-...`(d) now says the orbits are in bijection with
  the double cosets (Milne 21.83), and the counterexample's argument was
  rewritten as the explicit divisibility obstruction for the two root data.
  Both affected readiness records, and those of their consumers, were
  re-recorded on the edited content.

## 9. Limitations and open items

- This is a scaffold readiness record, not a proof audit. Step 3, Step 5 and
  the engine gates remain open; the readiness records are not independent
  mathematical approval.
- The in-run suppliers of batches 13, 14, 15 and 18 are scaffolded but not yet
  authored or published; the dependency ledger records 89 open edges.
- The second-source shortfall of section 3 (two Milne-only glueing and
  Nakayama lemmas) is recorded for Step 3/Step 5; it is not a fabricated
  source claim and not a fetch failure.
- The run-wide `1-scaffold` hold belongs to units 16, 22, 23 and 25 (owner
  repair), and other units (11, 17, 20, 24, 26) still lack artifacts. Those are
  outside this batch's write scope.
