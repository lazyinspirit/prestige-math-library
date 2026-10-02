# Step 3b — pair `poisson-problems-and-interior-harmonic-estimates` (batch 9)

Run `frontier-37-owner-30`, alpha-high, dispatch
`step3b-pair-poisson-problems-and-interior-harmonic-estimates-5abc197b008ce4e7`.
Owned pages: A `poisson-problems-and-interior-harmonic-estimates` (order 458.009)
and B `poisson-problems-and-interior-harmonic-estimates-examples` (order 458.010).
Batch 9 contains only this pair, so no sibling rows existed to preserve in the
shared batch files; the manifest still carries exactly those two pages.

## Completed items

All 30 in-scope items are authored, registered in the manifest, page files,
coverage and proof contracts, and checked in the dispatch dependency-level order.

- Level 0: `def-local-holder-and-c-two-alpha-norms-on-euclidean-balls`,
  `lem-euclidean-balls-are-bounded-c-one-domains` (local addition),
  `lem-kelvin-inversion-and-the-laplace-operator`,
  `lem-reflection-green-function-for-the-half-space`,
  `cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control`,
  `cex-poisson-integral-need-not-recover-discontinuous-data-at-the-jump`,
  `cex-poisson-integral-on-the-half-space-is-not-unique-without-growth-control`,
  `cex-smooth-does-not-imply-real-analytic-for-general-pde`.
- Level 1: `thm-green-function-for-a-ball-in-rn`.
- Level 2: `thm-poisson-kernel-for-a-ball-in-rn`.
- Level 3: `lem-ball-poisson-kernel-is-positive-and-normalised`.
- Level 4: `lem-poisson-kernel-boundary-cap-and-complement-estimate`.
- Level 5: `thm-dirichlet-problem-on-a-ball-by-the-poisson-integral`,
  `ex-poisson-kernel-concentrates-at-a-boundary-point`.
- Level 6: `cor-uniform-boundary-convergence-of-ball-poisson-integrals`,
  `thm-interior-derivative-estimates-for-harmonic-functions`,
  `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space`,
  `ex-poisson-extension-of-a-coordinate-function-on-a-ball`.
- Level 7: `cor-harmonic-cauchy-estimates-in-supremum-norm`,
  `thm-interior-estimate-for-poisson-equation-with-holder-data`,
  `ex-half-space-poisson-extension-of-a-plane-wave`.
- Level 8: `cor-entire-harmonic-function-of-sublinear-growth-is-constant`,
  `cor-interior-laplacian-gradient-estimate`,
  `lem-interior-oscillation-controls-harmonic-gradient`,
  `rem-two-dimensional-poisson-disc-theory-is-cited-not-repeated`,
  `thm-harmonic-functions-are-real-analytic`,
  `thm-locally-uniform-harmonic-convergence-is-c-infinity-local`.
- Level 9: `cor-unique-continuation-for-harmonic-functions`,
  `cex-interior-estimates-cannot-use-distance-zero-to-the-boundary`,
  `ex-harmonic-taylor-series-on-a-ball`.

No promised claim was dropped, no pair was added, and no published content was
edited. Unfinished in-run suppliers: none — every one of the 76 external
dependency IDs resolves to a published item on disk, and each cited use was
checked against that item's statement while writing (all published; none
consumed Recorded results). Every in-run prerequisite is proved earlier in this
pair or supplied locally; no consumer cites a later same-run item.

## Scaffold audit, local repairs and additions

- Author-level readiness was checked item by item while writing: hypotheses,
  quantifiers, sign conventions (`−ΔΦ=δ₀`, `ω_{n−1}=|S^{n−1}|`, outward normal
  `ν(y)=(y−a)/R`), direct suppliers and the actual proof route. No scaffold was
  found unready and no promised claim changed.
- Local addition (authored and registered): `lem-euclidean-balls-are-bounded-c-one-domains`
  (A page, level 0). It supplies the chart/outward-normal data for the ball and
  is consumed by `lem-ball-poisson-kernel-is-positive-and-normalised`,
  `lem-poisson-kernel-boundary-cap-and-complement-estimate`,
  `thm-green-function-for-a-ball-in-rn`, `thm-poisson-kernel-for-a-ball-in-rn`
  and `thm-dirichlet-problem-on-a-ball-by-the-poisson-integral`; each consumer
  states the needed obligation plainly. It is in the manifest A `items` array,
  the coverage and the proof contracts. No other new item was created; the
  remaining 29 rows were manifest scaffolds authored to completion here.
- Dependency-declaration repairs: `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space`
  now lists the published `lem-laplace-fundamental-solution-is-harmonic-off-its-pole`
  in both its frontmatter `deps` and its manifest row (proof [F2] uses it).
- Content-shape repairs: the four examples now use the SCHEMA example shape
  (`## Example` + `## Facts & Assumptions` + `## Verification`);
  `cor-unique-continuation-for-harmonic-functions` adopted the precheck canonical
  step renumbering; `cex-smooth-does-not-imply-real-analytic-for-general-pde`
  gained the source URL required by content policy.
- B-leaf repair: the counterexample
  `cex-interior-estimates-cannot-use-distance-zero-to-the-boundary` no longer
  depends on the B-page item `ex-real-parts-of-z-powers-are-harmonic`; its route
  now cites the published holomorphy item and the C²-harmonic-components
  theorem. A fresh scan of all 30 items finds zero dependencies homed on an
  examples page and zero unresolved wikilinks.
- Assumption hygiene: every integration/Green item declares Countable Choice via
  `def-countable-choice` where measure-theoretic machinery is used; the Kelvin
  and distributional arguments state that no choice principle is invoked. No
  incompatible-axiom branch is collapsed.

## Sources

The source audit is recorded in `research/frontier-37-owner-30-batch-9.coverage.json`
(60 harvested results over eight sources; Hunter §2.2; Schmidt §2.8; Schikorra
§§2.4, 2.4.1, 8.1–8.3; Axler–Bourdon–Ramey ch. 4; Oh §§4.2, 4.4; Simon Lecture 4;
Jakobsen §11.1.4; archived Teschl §5.1, 5.4, 5.6 with retrieval hash). The
cap/complement route follows Schmidt and archived Teschl; Oh and Schikorra state
the ball theorem but omit that proof. No source-resolution escalation remains.

## Checks actually run (this dispatch)

- `node tools/tsx-run.mjs tools/precheck.mts` (explicit paths, all 30 items):
  28 phase-bearing items PASS, 0 failing (the definition and the remark carry no
  phase body).
- `node tools/rendercheck.mjs` (30 item files + both page files): OK — no
  wikilink inside math, no nested/unbalanced delimiters, no multiline display
  block, all math spans parse under KaTeX, all frontmatter parses.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-9.proof-contracts.json --strict`:
  0 errors, 5 nonfatal `shotgun-bracket` warnings, 30/30 items checked. The five
  warnings are the heuristic "one step brackets ≥4 facts while ≥2 late steps
  name none"; in each case the bracketing step genuinely uses all named facts
  and the remaining steps are pure algebra/limits, so no citation was moved.
- `node tools/content-policy.mjs research/frontier-37-owner-30-batch-9.pages.json`:
  30 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-9.pages.json`:
  30 items, 0 normalizations, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-9.coverage.json`:
  1 page, 60 harvested results, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30`:
  811 items over 60 pages, maximum level 31, pass (no item-level cycles or
  forward references).
- `node tools/validate-plan.mjs research/plan-spec.json`: OK — acyclic page
  order, no item-level cycles, forward references, B-page dependencies or
  unresolved ids; both pages already carry the required `requires` entries.
- Cross-batch input `research/frontier-37-owner-30-batch-9.cross-batch-dependencies.json`
  is `[]` and remains correct: all 30 items' dependencies are either this
  pair's own rows or published items, so there is no in-run cross-batch edge.
- Ad-hoc: 76 external dep IDs all published; zero examples-page dependencies;
  zero unresolved wikilinks.

## Pre-splice plan findings recheck

`research/frontier-37-owner-30-pre-splice-plan-findings.json` (recorded 09:13Z)
holds four `undeclared-prereq` findings for this pair. All four are resolved in
the current inputs and in `research/plan-spec.json`: the A page requires
`fundamental-solutions-newtonian-potentials-and-green-functions`,
`analytic-majorants-and-the-cauchy-kovalevskaya-theorem` and
`harmonic-functions-and-the-poisson-integral`; the B page requires the A page
and `tempered-distributions-and-the-fourier-transform` (which pulls the
analytic-majorants page into the B closure). No remaining pair-level plan
mismatch for Step 4; the only Step-4 work is the ordinary splice of the manifest
item ids into the two plan pages, whose `items` lists are still empty.

## Concerns and obligations for later stages

1. **Owner action — Step 3a scope refresh (blocks the item receipts).**
   `node tools/step3-decisions.mjs record-item` exits with
   `Step 3a must clear for the item pair before item auditing` for every item of
   this pair. The owner `proceed` receipt sha
   `f1c1d61f77d074a19a7771ed1afb15497204c3130911e8bf1289b7e8f41762e6` was
   recorded for the pre-addition scope; the sanctioned local addition of
   `lem-euclidean-balls-are-bounded-c-one-domains` changed the scope sha to
   `40dfa8be5449cf370c1b16e3e96d4b007f43c1819c4eb9112bc5842aa0dbac5d`.
   Remedy: the owner re-records `proceed` for the current scope (only the owner
   may, since the pair is owner-held), or the engine's post-dispatch
   `step3-auditor-items.mjs certify` pass lands the auditor scope certification
   for the added row (its `baseline_sha256` equals the owner receipt sha, so it
   closes the pair through the certification path). What is owed is 29 ordinary
   item receipts for the original scaffold IDs (every dispatched item except
   `lem-euclidean-balls-are-bounded-c-one-domains`, which is the genuinely new
   ID covered by the engine's certification); each can be written immediately
   afterwards using that item's manifest dependency array as the examined set,
   with no item content change. This dispatch did not use `--owner`, did not
   record any decision, and did not touch another pair's scope or files.
2. **Run-level blocker — sibling YAML defect stops the shared ledger refresh.**
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`
   fails with `Invalid escape sequence \c at line 26, column 170` while parsing
   the frontmatter of `items/def-modular-specht-form-and-radical-quotient.md`
   (a title containing `S^lambda/(S^lambda\cap(S^lambda)^perp)` inside a
   double-quoted YAML scalar). The file belongs to another pair/batch of this
   run, so it was not edited here. Because the tool scans every batch manifest
   before it merges reviews, this defect blocks the ledger refresh for the whole
   run; the owning pair should escape the backslashes (`\\cap`, `\\perp`) or use
   a YAML scalar form that needs no escapes. Batch 9's own input is `[]` and
   needs no row.
3. **Published-item concerns.** None confirmed and none suspected while
   authoring: every external supplier cited by the 30 items is published, and
   each use was checked against the supplier's actual statement (hypotheses and
   conventions included). No published item is reported as defective from this
   dispatch; the sibling frontmatter defect in item 2 is a metadata/rendering
   fault, not a mathematical one, and it is not part of this pair.
4. **Scope decision records.** No `record-item` receipt was written for any of
   the 30 items (blocked as in item 1), so `step3-decisions.mjs check --phase
   final` will still show this pair's items as work until the owner refresh and
   the receipts happen. The scope-decision file on disk was not edited.

Open obligations at handoff: (1) owner scope refresh, then the 29 ordinary item
receipts for the original scaffold IDs with the manifest dependency arrays (the
added `lem-euclidean-balls-are-bounded-c-one-domains` is engine-certified);
(2) the sibling YAML escape repair for the ledger refresh; neither obligation is
a mathematical gap in this pair.
