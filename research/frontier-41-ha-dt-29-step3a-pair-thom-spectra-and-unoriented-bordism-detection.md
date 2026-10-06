# Step 3a scope review — thom-spectra-and-unoriented-bordism-detection

- Run: `frontier-41-ha-dt-29` (batch 30), role alpha, label
  `step3a-pair-thom-spectra-and-unoriented-bordism-detection-6e90a30aa2aedceb`.
- A page: `thom-spectra-and-unoriented-bordism-detection` (order 548.5,
  algebraic-topology, 55 manifest items: 54 new local items + one moved
  combined definition).
- B page: `thom-spectra-and-unoriented-bordism-detection-examples`
  (order 548.6, 4 examples). Companion pointers agree A↔B; the B page
  `requires` only its A companion.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs
  record-scope`, non-owner review, at the current pair scope hash). Scope
  only: no item approval, no owner record, no scaffold, plan, manifest or
  page edit. The pair owns all of batch 30, so no other pair's shared batch
  content was touched.

## Evidence read

- `research/frontier-41-ha-dt-29-batch-30.pages.json` (55 A + 4 B items, all
  with `statement`, `strategy`, `deps`; A `requires` =
  `["thom-spaces-normal-data-and-collapse-maps"]`, B `requires` = [A]);
  `.coverage.json`, `.notes.md`, `.cross-batch-dependencies.json` (owned
  consumer input `[]`, verified empty against all run manifests and
  plan-spec), `.url-liveness.json`, `.source-fetch-receipt.md`,
  `.manifest-preservation-baseline.json`.
- `research/frontier-41-ha-dt-29-scope-ledger.json` (pages 548.5/548.6 listed
  as batch 30; 60 pages = 30 owed pairs) and
  `research/frontier-41-ha-dt-29-drift-evidence.json` entry for the A page
  (`declaredRequires` = manifest `requires` = plan-spec `requires`, with the
  284-page prerequisite closure).
- `research/plan-spec.json` rows 548.5/548.6 (empty pre-splice item arrays,
  A→B companion edge, A requires 547) and the DT-19 row (requires includes the
  A page).
- Prose design: `research/plan-algebraic-topology-track.md` lines 2978–2990,
  section "Frontier 41 Algebraic Topology support pair (approved 2026-10-04)"
  (the section that creates the pair, fixes the sole prerequisite, the 54+1/4
  inventory, the proof content and the DT-19 edge), and
  `research/plan-differential-topology-track.md` line 2235 (§12.4 `requires`
  row for DT-19) and lines 2280–2290 (DT-19 must add the support page, move
  the shared definition, and give DT-9 no edge).
- `research/frontier-41-ha-dt-29-owner-authoring-direction.md` (owner approval
  of the single support pair at 548.5/548.6; sole prerequisite 547; register
  54 new A items and four B examples; move
  `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles` and merge
  the temporary MO-only definition; DT-19 the only downstream consumer, DT-9
  no edge; preserve the strict endpoints; no represented-spectrum comparison,
  spectrification or Omega condition; definitions need local justification or
  an inventoried justification lemma; binding full-AC contract).
- `research/frontier-41-ha-dt-29-at-support-thom-detection-integration-draft.md`
  (847 lines; scope/supplier boundary, the 16 integration-core items, the
  complete 54-item supplier inventory with the merge map, the four B-example
  designs, and §11 "Consumer seam and the remaining Pontryagin–Thom
  translation").
- `research/third-frontier-ha-dt-preflight.md` (support-pair row: sole
  published prerequisite 547; no proof item depends on DT-9 or DT-19; DT-19
  the downstream consumer) and
  `research/frontier-41-ha-dt-29-planning-notes.md` line 42.
- Dependency records: `research/frontier-41-ha-dt-29-batch-11.cross-batch-dependencies.json`
  (DT-19 consumer rows, all `open`, naming the exact A-page suppliers) and
  `research/frontier-41-ha-dt-29-cross-batch-dependencies.json` (682 edges;
  exactly 11 item edges + 1 page edge into this A page, all from DT-19; all
  30 batches reviewed).
- Six supplier proof drafts in the same research namespace
  (Steenrod/EM, Hopf-freeness, Thom prespectrum, odd-primary, finite-range,
  rational-Hurewicz) were used at the level of the batch-30 notes' audit
  record and the integration draft's citations; I did not re-derive their
  proofs (see "Uncertainty").

## Checks run independently in this review

| Check | Command / method | Result |
|---|---|---|
| Manifest dependencies | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-30.pages.json` | 59 items, 0 errors |
| Coverage | `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-30.coverage.json --require-destination` | 1 page, 89 harvested, 0 errors, 0 warnings |
| Source backing | `node tools/source-backing.mjs --coverage …batch-30.coverage.json --liveness …batch-30-url-liveness.json` | 59 authored results, every one still backed |
| URL liveness | `.url-liveness.json` summary | 14/14 live, 0 failed |
| Dependency levels (run) | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | 883 items, 60 pages, no errors |
| Step-1 readiness (run) | `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` | 883/883 ready, closed, `work` empty |
| Out-of-batch suppliers | script over all 219 dep ids of the pair | 165 out-of-batch ids, 165/165 `items/<id>.md` `status: published`, 0 `proved_here: false`, 0 remark/example/counterexample kinds |
| Published-closure fit | item→library-page map from all published pages vs the A page's 284-page drift closure | 165/165 out-of-batch homes inside the closure of page 547 |
| Referenced-id resolution | all ID-shaped tokens in the 59 statements/strategies | 221 ids, all resolve (two apparent misses are the prose fragments "simplex-wise", "vertex-based") |
| Consumer isolation | all 30 run manifests + plan-spec | only DT-19 and the B companion require the A page; DT-9 has no edge; no other item or page consumes any of the 4 B examples |
| Inventory vs design | design text vs manifest | every one of the 55 A and 4 B ids is named in the design; the design's only non-manifest ids are published suppliers, the 4 B examples, and the 4 intentionally merged setup-draft components |
| Endpoints in statements | statement text | `k<2r` (no `2r` claim), `i<2r−1` + surjection at `2r−1` (no endpoint injectivity), homotopy iso through `2r−2`, stable tail `r≥n+2`, rational `c≤i≤2c−2` (no `2c−1` injectivity) all present verbatim |
| AC contract (owner list) | 20 A-page items + the two named B examples | every one states AC and depends on `def-axiom-of-choice`; the moved definition states AC |
| Page caps | manifest counts | A 55 ≤ 100, B 4 ≤ 100 |

## Scope against the prose design

The pair is the owner-approved Algebraic Topology support pair for DT-19
(`characteristic-numbers-and-cobordism-obstructions`, batch 11, order 553)
and is not a published page. The plan fixes its role precisely: the A page
locally constructs the shared MO/MSO fixed-coordinate Thom prespectrum, the
mod-two Steenrod/Thom coalgebra and freeness input, the finite-range Thom
detector with its integral and homotopy comparisons, and the rational
Hurewicz theorem consumed by DT-19's rational oriented-bordism branch; the B
page carries the four worked examples and is a leaf.

The live manifest matches that design item for item:

- 14 Steenrod/Eilenberg–Mac Lane rows (`def-mod-two-square-algebra-admissible-sequences-and-excess`
  through `lem-metastable-cohomology-of-eilenberg-maclane-spaces`);
- the generic freeness theorem
  `thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free`;
- three stable-Thom-cohomology rows
  (`def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum`,
  `lem-stable-thom-cohomology-is-degreewise-eventually-constant`,
  `lem-stable-squares-on-universal-thom-classes`);
- the seven odd-primary/integral rows (`lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants`
  through `thm-finite-generation-cohomological-uct-gives-integral-cone-comparison`);
- the two finite-range rows
  (`thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison`,
  `cor-finite-range-comparison-for-arbitrary-target`);
- the rational-Hurewicz branch (11 rows, `lem-rationalization-is-exact-and-commutes-with-singular-homology`
  through `thm-rational-hurewicz-for-highly-connected-cw-complexes`);
- the integration core, including the two separately inventoried definition
  justifications `lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology`
  and `lem-finite-thom-classifying-detector-map-exists-and-is-continuous`;
- the moved combined definition
  `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles`, homed
  only on this A page (batch 11 no longer hosts it in any run manifest).

Design merges are the four documented ones only, and none is a dropped row:
the temporary MO-only id `def-real-universal-thom-prespectrum` and the setup
lemmas `lem-fixed-coordinate-stabilization-of-universal-real-bundles`,
`lem-pullback-bundle-maps-induce-based-thom-maps`,
`lem-universal-thom-spaces-are-well-pointed-cw-spaces` are proof components of
the moved definition, exactly as the plan and owner direction require. Six of
the 55 A items are definitions. Three of them name a separate local
well-definedness lemma through `justified_by`
(`lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology`,
`lem-finite-thom-classifying-detector-map-exists-and-is-continuous`,
`lem-stable-thom-cohomology-is-degreewise-eventually-constant` for the
degreewise cohomology definition); the moved prespectrum definition carries
its fixed maps, CW/well-pointedness and construction proof in its own
strategy; and the weak-join and square-algebra definitions are explicit
quotient/free-algebra constructions in their statements.

The owner's deliberate scope boundary is also visible and coherent: the page
uses fixed-coordinate prespectra, stable homotopy colimits and an
inverse-limit degreewise cohomology invariant, and imports no
represented-spectrum comparison, no spectrification and no Omega condition.
Every consuming use recorded by DT-19 in
`…batch-11.cross-batch-dependencies.json` is stated against exactly those
objects (levels, fixed first-coordinate structure maps, the stable colimit,
the finite detector, the degreewise constancy lemma), so the narrower object
still supports the intended role.

The B page's four examples match the design statements: the low-degree
admissible monomial table, the strict metastable Eilenberg–Mac Lane range with
the `i<3` endpoint excluded, `Sq³(U)=w₃U` at stable and finite ranks, and the
rational Hurewicz range for `S⁴` (`4≤i≤6`). Each example depends only on
A-page items or published closure items; no example depends on another
example; no page or item consumes any example.

## Source coverage

The page coverage block has 14 fetch-verified sources and 89 canonical rows,
all dispositioned `included`, each mapped to one of the 59 pair items: Hatcher
*Algebraic Topology* (24 rows: §4.L admissible basis and Adem, the Steenrod
algebra and EM inputs), Weston *An Introduction to Cobordism Theory* (24),
Hatcher *Vector Bundles & K-Theory* (1), Hatcher *Spectral Sequences* (9: the
Borel/transgression block), May *A Concise Course* (4: prespectra, lim¹
caveat), Milnor–Stasheff *Characteristic Classes* (11: Thom identity, §18
universal Thom spaces), Weibel Chapters 1 and 3 (4: mapping cones, UCT),
Miller 18.906 notes (1: BO/BSO away from two), Hatcher Chapter 2 (1), Hatcher
Chapter 4 (3: relative Hurewicz/finite-range comparison), Altman–Kleiman
(1: localization), Milnor *Construction of Universal Bundles II* (2: weak-join
K(G,1)), and Freed *Bordism: Old and New* (4: prespectrum stabilization,
stable detection, the sphere example). Every one of the 59 items has at least
one coverage row and no row names an unknown item.

I re-ran `coverage-checklist`, `source-backing` and the liveness summary: all
pass, and the fetch receipt records full-text (not abstract-only) fetches with
bytes/sha256 for the 14 URLs, including the recovered MIT OCW fetch. The
batch-30 notes record the honest source-gap handling that this review does not
re-derive: Weston's Lemma 12.2 disjoint-support claim is false and is replaced
locally by a leading-monomial proof; Hatcher's polynomial EM theorem is
completed from his *Spectral Sequences* chapter; and the odd-primary twisted
Thom calculation is proved locally rather than attributed to Weston. I did not
re-read the fetched PDFs line by line (see "Uncertainty").

## Role in the library

The A page's only page prerequisite is the published differential-topology
page `thom-spaces-normal-data-and-collapse-maps` (547); the B page requires
only its A companion. Its only page consumers in the current library are its B
companion and DT-19 (plan-spec, all 30 manifests, and the run-level
cross-batch ledger agree). DT-9 `pontryagin-thom-and-framed-cobordism` has no
edge, as the owner directs. The moved definition has exactly four DT-19 item
consumers in the live batch-11 manifest
(`lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum`,
`thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism`,
`thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism`,
`prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`),
plus the additional A-page supplier edges for the rational branch, the
oriented-Grassmannian CW lemma, the degreewise-constancy lemma, the finite
detector definition and the stable injective-detection theorem — 11 item
edges and 1 page edge in total, all recorded `open` until the batch-30 proofs
close. `research/published-consumer-supplier-ledger.md` contains no entry
naming this pair or its items, so no published defect, rehome or consumer
repair attaches to it.

## Prerequisite audit (unmet prerequisites)

No unmet prerequisite was found, confirmed or uncertain, at the
published-library/scaffold interface:

- all 165 out-of-batch dependency ids of the 59 items are published item files
  (0 missing, 0 not-published, 0 `proved_here: false`, 0 remarks used as
  suppliers);
- every one of their home pages lies inside the 284-page declared prerequisite
  closure of page 547, so the plan's claim that the whole published
  dependency set lies in that closure holds at page granularity;
- the sole page prerequisite 547 is published with a nonempty inventory;
- no batch-30 item depends on any batch-11 (DT-19) id, and the B page's only
  in-run dependency is the A page;
- the page-547 inventory itself contains the published Thom-quotient,
  Thom-class and stabilization items the moved definition and the detector
  branch cite (`lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology`,
  `lem-stabilizing-a-normal-bundle-suspends-its-thom-space`, …);
- the AC item `def-axiom-of-choice` is published, and every owner-listed
  AC-carrying item declares it.

The only prerequisite-adjacent asymmetry I found is a contract (hypothesis
exposure) matter, not an absent prerequisite, and is recorded as observation 3
below.

## Uncertainty and observations for the owner

1. **The pair is a support pair, not a self-contained bordism-detection
   theorem.** The A page proves injective detection of stable Thom homotopy
   (`thm-stable-unoriented-thom-homotopy-is-injectively-detected`) and every
   algebraic input, but the identification of unoriented bordism with
   `π_*(MO)` and the Stiefel–Whitney-number detection statement remain DT-19
   obligations (integration draft §11; preflight support row). This is the
   approved design, so it is not an omission here. Stated uncertainty
   honestly: if the owner intends the pair's title to be read
   self-containedly (a reader who never opens DT-19 should see the bordism
   detection theorem), the pair would need enrichment or a merger with DT-19;
   no current plan text suggests that, and I do not recommend it.
2. **B-example coverage is branch-level, not detector-level.** The four
   examples illustrate the Steenrod-algebra basis, the strict EM range, the
   stable Thom-class squares and the rational range; none exhibits the finite
   detector map or the odd-primary/integral comparison directly, and none
   mentions bordism groups. The design commissions exactly these four
   examples, so this is design-consistent; a fifth example (for instance the
   rank-3 detector in low degrees) would make the detector branch visible, but
   it is not required by the approved scope.
3. **One AC contract asymmetry (candidate Step-3b repair).** The B example
   `ex-rational-hurewicz-range-for-the-four-sphere` depends on
   `thm-rational-hurewicz-for-highly-connected-cw-complexes` and
   `lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree` (both
   of which state "Assume AC") but its own statement does not state AC and its
   `deps` do not include `def-axiom-of-choice`. SCHEMA.md lines 23–25 require
   carrying the assumption to consumers that use the result. The owner's
   2026-10-05 full-AC repair list named 22 items and did not include this
   example, so I flag rather than direct: the Step-3b author should either
   state AC and add the dependency, or record an explicit choice-free route to
   the `S⁴` instance. The other three B examples and all 20 owner-listed
   A-page items are consistent (`ex-universal-thom-class-steenrod-operation`'s
   supplier `lem-stable-squares-on-universal-thom-classes` is AC-free).
4. **Authoring-side obligations carried by the scaffold (not scope gaps).**
   The rational-Hurewicz draft states that its rows require independent
   mathematical review before incorporation; the odd-primary branch carries
   reviewer-owned repairs (lifted BSO orientation-cover CW construction,
   relative Thom chain-filtration/collar/excision convergence, monodromy-sign
   correction); the finite-range endpoints must stay explicit in every
   consumer. These are Step-3b/Step-5 obligations, recorded in the batch-30
   notes §6 and repeated here so nothing is lost.
5. **Shared-artifact note reference mismatch.** `…owner-authoring-direction.md`
   lines 41–47 contain a "Superseding F41 inventory note" that speaks of
   "the current batch-24 inventory … 43 A items and 5 B examples"; that
   matches the live batch-24 manifest (`exotic-smooth-structures-and-milnor-spheres`),
   not this pair. The live batch-30 manifest has 55 A (54 new + the moved
   definition) and 4 B, matching the owner paragraph's "54 new A items and
   four B examples" and the AT plan. I read the note as having been written
   for batch 24; it changes nothing here, but it lives in the binding owner
   file and should be reconciled when that file is next touched.
6. **Plan-vs-manifest consumer count.** The AT plan (line 2990) and the DT
   plan (line 2287) say "the three DT-19 item consumers" of the moved
   definition; the live batch-11 manifest has four `deps` references
   (the four items named above). The batch-30 notes and the run-level ledger
   already use the live four; the stale count is a plan-text drift with no
   scope consequence.
7. **Stale refresh sentence in the batch-30 notes.** Notes §7 says 27
   batch-30 and one batch-11 Step-1 records still require refresh after the
   AC edit; the current run-wide `step1-decisions check` recomputes 883/883
   ready with empty work. Reports and receipts I inspected are consistent with
   the clean recomputation.
8. **Verification limits of this review.** I checked scope, inventory,
   dependency resolution, coverage/backing metadata and the exact endpoint
   sentences. I did not re-derive any proof, did not independently re-read the
   fetched full texts against every locator, and did not certify mathematical
   correctness or statement-level source fidelity; those belong to Step 3b
   authoring and Step 5 review, and the batch-30 records themselves describe
   the rational and odd-primary branches as still requiring that independent
   review.

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject at design breadth: the shared MO/MSO fixed-coordinate Thom
prespectrum (single home, local construction), the mod-two square-algebra
machinery and the free-module structure of stable unoriented Thom cohomology,
the finite Thom detector with the strict `k<2r`, `i<2r−1`/surjection,
`2r−2` and `r≥n+2` endpoints, the odd-primary/integral comparison, and the
rational Hurewicz branch DT-19 consumes — with four examples on the B leaf,
14 fetch-verified sources disposing all 89 harvested rows, 165/165 published
suppliers inside the page-547 closure, and no confirmed or uncertain unmet
prerequisite. The open items recorded above are contract/authoring
obligations and shared-file housekeeping, not scope omissions. Recorded:
**sufficient**.
