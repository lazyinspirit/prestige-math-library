# Frontier 22, batch 1 - scaffold notes

## Continuity checkpoint

- Current substage: the Step-3 fix pass is complete on the current batch-1 scaffold bytes. No batch-1 review finding changed the manifests; this notes file now records the validator rerun and source-roster repair.
- Owned artifact paths: `research/frontier-22-batch-1.pages.json`, `research/frontier-22-batch-1.coverage.json`, and `research/frontier-22-batch-1.notes.md`.
- Exact next action: await the Step-3 recheck or a new batch-local defect; otherwise do not change batch `1` again before authoring.

## Scope, order, and design/spec drift

This batch owns the two group-theory pairs `hnn-extensions-and-brittons-lemma` / `-examples` and `simplicial-trees-and-group-actions` / `-examples`. No A page is near the 60-item split ceiling: the HNN A page now carries 23 items and the simplicial-tree A page 25 items, so no split is proposed.

Design control points used here:

- `hnn-extensions-and-brittons-lemma`: the controlling design block is the `GT-6` block beginning at `plan-group-theory-track.md` line 1022. The dispatch's cited line 1077 is only the B-page heading inside that same block, not a later amendment.
- `simplicial-trees-and-group-actions`: both dispatch matches, lines 1871 and 1937, are inside the same `GT-14` block. Line 1871 begins the page design; line 1937 is only the B-page heading within it. No second amendment block exists here.

Recorded drift, with the manifest kept aligned to `research/plan-spec.json` as instructed:

- `hnn-extensions-and-brittons-lemma`
  - Design `requires`: `subgroups-of-free-groups-and-schreier-rewriting`, `free-products-and-amalgamation`.
  - `research/plan-spec.json` `requires`: `subgroups-of-free-groups-and-schreier-rewriting-examples`, `free-products-and-amalgamation`.
  - Action taken here: the batch manifest keeps the spec edge set and records the mismatch here.
- `simplicial-trees-and-group-actions`
  - Design `requires`: `trees-forests-and-spanning-trees`, `cayley-graphs-word-metrics-and-quasi-isometry`.
  - `research/plan-spec.json` `requires`: `amenable-groups-and-folner-criteria-examples`.
  - Action taken here: the batch manifest keeps the spec edge. The item scaffold still cites published finite-tree and Cayley-tree results where the design's bridge theorem and examples explicitly need them; that undeclared-prerequisite tension belongs to the run-level drift/edge stages, not to this batch.

The design-specified orders agree with `research/plan-spec.json`: `71.011/71.012` for the HNN pair and `302.009/302.010` for the simplicial-tree pair.

## Source verification and URL discipline

The recorded source URLs were fetch-verified in one of two ways:

- Exact URLs already stamped elsewhere in the repo were reused verbatim with their existing `fetch_verified` metadata. This covers the Loh notes URL and the Lyndon-Schupp Scribd mirror URL.
- New URLs were opened directly in the web reader and then written with minimal `fetch_verified` objects because this sandbox does not provide reliable outbound DNS for the shell-level fetch tools. This covers the Serre Scribd mirror, the Tumarkin Scribd essay, and the Leary open-access Springer article.

Source-repair decisions:

- The HNN page keeps the design's primary monograph source, Lyndon-Schupp, and the design's open Loh notes, but adds Leary's open-access paper to source the exact Higman-Neumann-Neumann embedding statement. The accessible Lyndon-Schupp range I verified in this dispatch covered normal forms, Britton reduction, torsion, and Collins' conjugacy theorem, but not the countable-into-two-generator theorem itself.
- The simplicial-tree page keeps Serre as the primary monograph and Loh as an independent lecture-note treatment, but it does not retain Dicks-Dunwoody as a live source row because I did not verify a stable full-text URL for that book with the available tools. Its role is replaced in the live coverage by Tumarkin's Serre-based notes for inversions and quotient graphs, while Serre and Loh cover the fixed-point, dichotomy, and ping-pong material actually scaffolded here.

Because the design named books rather than concrete URLs, there is no failing recorded URL for Dicks-Dunwoody to preserve as `original_url` provenance in the coverage schema.

## HNN page decisions

### Source support

- Lyndon-Schupp carries the core mathematics: normal form, Britton reduction, cyclic reduction, torsion, and Collins' conjugacy theorem.
- Loh supplies the constructional framing: HNN extensions as a "new groups out of old" operation, the mapping-torus special case, and the later Bass-Serre placement boundary.
- Leary supplies the exact historical embedding statement and one explicit fixed-subgroup HNN presentation.

### Scaffold repairs beyond the raw design list

The design already warned that the conjugacy theorem should not be left as one opaque case split. The scaffold therefore adds the minimum local decomposition the proof genuinely needs:

- `def-cyclically-britton-reduced-hnn-word`
- `lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word`
- `lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate`
- `lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy`

These are not padding. They are the explicit split the design called for so that the hypotheses in Collins' theorem remain visible at authoring time.

### Dependency rationale and conventions

- The page begins with the abstract edge-group formulation and immediately converts it to the associated-subgroup notation, because every later normal-form and Britton-reduction statement is written in that language.
- "Britton-reduced" is kept distinct from "freely reduced" by making pins and elementary HNN reductions explicit before the main theorem.
- The normal-form theorem uses separate transversal choices for the two associated subgroups, matching the design and the source treatment.
- `cor-the-stable-letter-has-infinite-order` is proved from Britton's lemma, with the homomorphism to `Z` retained as a later corroborating structure rather than as a hidden prerequisite.
- The HNN embedding remark depends only on `def-countable` and is deliberately non-load-bearing.

### Proposed proof strategy

The home route on this page is the algebraic normal-form route aligned with the already published amalgam page:

- define HNN words and reductions;
- establish normal form relative to chosen transversals;
- extract Britton's lemma and the embedding/torsion corollaries;
- record the exponent-sum map and the universal property;
- specialize to ascending HNN extensions;
- finish with the cyclic-reduction and rotation lemmas needed for Collins' theorem.

No tree-action proof is used here; that seam is intentionally left for the later Bass-Serre page.

## Simplicial-tree page decisions

### Source support

- Serre provides the primary chapter structure and the exact scope seam between trees, fixed points, and later amalgam/HNN consequences.
- Tumarkin provides clean, directly readable statements for oriented graphs, actions without inversions, barycentric subdivision, and quotient graphs.
- Loh provides the graph-notation bridge, the Cayley-tree framing, and the ping-pong lemma as the chosen route to the free-subgroup theorem.

### Scaffold repairs beyond the raw design list

- No extra A-page split is needed.
- No new theorem ids were added beyond the design list on this page.
- The only substantive source repair is the Dicks-Dunwoody replacement described above.

### Dependency rationale and conventions

- All paths are finite even when the graph is infinite. That convention is fixed locally in the second definition item and carried through the page.
- The page uses oriented-edge formalism rather than the published finite simple-graph formalism, then proves a dedicated bridge theorem back to the finite published notion.
- Barycentric subdivision appears before any quotient or fixed-point theorem that would otherwise fail through inversions.
- The page does not introduce the space of ends as an object in its own right. The source harvest stays on tree language, automorphism dynamics, and ping-pong, without pulling any ends theory forward.
- The Bass-Serre reconstruction machinery is intentionally deferred: subtree lifting and trees of representatives are harvested but not built here.

### Proposed proof strategy

The page is scaffolded to author in the order the design prescribes:

1. build oriented graphs, reduced paths, simplicial trees, and the path metric;
2. prove agreement with the published finite-tree notion;
3. define graph automorphisms, inversions, barycentric subdivision, and quotient graphs;
4. define fixed subtrees and translation length;
5. prove the elliptic/hyperbolic dichotomy and its translation-length corollary;
6. derive the finite-group fixed-point lemma and the torsion-free corollary;
7. finish with the tree-specific ping-pong theorem.

## Known limits and deferred results

- I did not verify a stable full-text URL for Dicks-Dunwoody's *Groups Acting on Graphs* with the available tools, so it is not a live coverage source row in this batch.
- The Serre Scribd mirror was good enough for scope, headings, and the introduction's page-design seam, but its OCR was thinner than Tumarkin's text for some local inversion and quotient-graph details. The source set reflects that asymmetry.
- The HNN page does not build the later Bass-Serre tree-action interpretation of HNN extensions.
- The simplicial-tree page does not build tree-of-representatives, subtree-lifting, or the graph-of-groups reconstruction; those are deferred to `graphs-of-groups-and-bass-serre-theory`.

## Validation

Batch-local checks on the final bytes:

- `node -e "JSON.parse(...pages.json); JSON.parse(...coverage.json)"`
  - Pass: both batch JSON files parse cleanly.
- `node tools/coverage-checklist.mjs research/frontier-22-batch-1.coverage.json --require-destination`
  - Pass: `2 page(s), 35 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-1.coverage.json`
  - Pass: `6/6 source(s) fetch-verified`.
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-*.pages.json`
  - Pass: `425 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-1.pages.json`
  - Pass: `60 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  - Pass for this batch's scaffold changes. The output ends with `OK` and reports only the repo's standing `redundant-prereq` warnings outside this batch.
- `node tools/prosecheck.mjs research/frontier-22-batch-1.notes.md`
  - Pass with three heuristic `count-in-prose` warnings only.
- `timeout 25s node tools/url-sweep.mjs --coverage research/frontier-22-batch-1.coverage.json --out /tmp/frontier-22-batch-1-url-liveness.json --recover --fail-on-dead --timeout-ms 4000`
  - On the current bytes the shell command exits `1` and writes `/tmp/frontier-22-batch-1-url-liveness.json`.
  - That artifact records `5` distinct URLs, `0` live, `5` failed, `0` recovered.
  - Every failure is the same sandbox DNS error: `curl: (6) Could not resolve host`, covering `link.springer.com`, `loeh.app.uni-regensburg.de`, and `www.scribd.com`.
  - The probe also reports no archived snapshot under any host variant for those shell-level failures. Because the same five URLs were reopened successfully in the web reader against the recorded coverage locators on Friday, August 28, 2026, this remains a transport-local blocker on the shell liveness probe rather than evidence that the coverage rows need re-sourcing.

## Step-3 fix pass

- Stable review file checked:
  `research/frontier-22-alpha-a-step3-scaffold-review.md`.

- Finding ids for batch 1: **none**.
  Disposition: no manifest or coverage repair applied. The stable Alpha-a
  review marks both `hnn-extensions-and-brittons-lemma` and
  `simplicial-trees-and-group-actions` as `sufficient`, and it records no
  `B1-*` finding to apply or push back on.

- Evidence reread in this pass:
  `research/plan-group-theory-track.md` at the `GT-6` and `GT-14` design
  blocks; the live `research/plan-spec.json` entries for
  `hnn-extensions-and-brittons-lemma`,
  `hnn-extensions-and-brittons-lemma-examples`,
  `simplicial-trees-and-group-actions`, and
  `simplicial-trees-and-group-actions-examples`; the current
  `research/frontier-22-batch-1.pages.json` and
  `research/frontier-22-batch-1.coverage.json`; and the five distinct
  harvested source URLs reopened through the web reader on Friday, August 28,
  2026, against the locators recorded in the coverage file.

- Changed scaffold record:
  none in `research/frontier-22-batch-1.pages.json`;
  none in `research/frontier-22-batch-1.coverage.json`;
  repaired source-roster and validator-count drift and appended this Step-3
  receipt in `research/frontier-22-batch-1.notes.md`.

## Step-5 authoring

- Authored page files:
  `library/group-theory/hnn-extensions-and-brittons-lemma.md`,
  `library/group-theory/hnn-extensions-and-brittons-lemma-examples.md`,
  `library/group-theory/simplicial-trees-and-group-actions.md`,
  `library/group-theory/simplicial-trees-and-group-actions-examples.md`.
- Authored HNN A-page ids:
  `def-hnn-extension-and-stable-letter`,
  `lem-equivalent-hnn-presentation-with-associated-subgroups`,
  `def-hnn-word-pin-and-britton-reduced-word`,
  `lem-elementary-hnn-reductions-preserve-the-represented-element`,
  `def-choice-of-transversals-for-hnn-normal-forms`,
  `thm-hnn-normal-form-theorem`,
  `thm-brittons-lemma`,
  `cor-the-base-group-embeds-in-its-hnn-extension`,
  `cor-the-stable-letter-has-infinite-order`,
  `def-associated-homomorphism-to-the-integers`,
  `prop-universal-property-of-an-hnn-extension`,
  `def-ascending-hnn-extension`,
  `prop-normal-form-for-an-ascending-hnn-extension`,
  `rem-higman-neumann-neumann-embedding-theorem`,
  `def-cyclically-britton-reduced-hnn-word`,
  `lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word`,
  `lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate`,
  `lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy`,
  `thm-conjugacy-theorem-for-cyclically-reduced-hnn-words`.
- Authored HNN B-page ids:
  `fs-the-base-group-may-collapse-in-an-hnn-extension`,
  `fs-every-word-containing-a-stable-letter-is-nontrivial`,
  `fs-hnn-normal-form-is-canonical-without-transversals`,
  `fs-every-hnn-extension-is-an-ascending-hnn-extension`,
  `ex-the-direct-product-a-times-z-as-an-hnn-extension`,
  `ex-baumslag-solitar-groups-as-hnn-extensions`,
  `ex-an-ascending-hnn-extension-from-doubling-the-integers`,
  `ex-britton-reduction-of-a-word-with-two-pins`,
  `ex-hnn-extension-realising-two-conjugate-subgroups`,
  `cex-a-stable-letter-word-that-is-not-britton-reduced`.
- Authored simplicial-tree A-page ids:
  `def-oriented-graph-with-edge-reversal`,
  `def-simplicial-path-reduced-path-cycle-and-connectedness`,
  `def-simplicial-tree`,
  `thm-unique-reduced-path-characterisation-of-simplicial-trees`,
  `def-simplicial-path-metric`,
  `lem-path-metric-on-a-tree-is-geodesic-and-integer-valued`,
  `thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion`,
  `def-graph-automorphism-and-group-action-on-a-simplicial-graph`,
  `def-edge-inversion-and-action-without-inversions`,
  `lem-barycentric-subdivision-removes-edge-inversions`,
  `def-quotient-graph-of-an-action-without-inversions`,
  `lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions`,
  `def-fixed-subtree-and-minimal-invariant-subtree`,
  `lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree`,
  `def-translation-length-of-a-tree-automorphism-without-inversions`,
  `thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms`,
  `cor-translation-length-is-conjugacy-invariant-and-homogeneous`,
  `lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision`,
  `cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free`,
  `thm-ping-pong-for-hyperbolic-tree-automorphisms`.
- Authored simplicial-tree B-page ids:
  `fs-the-published-finite-tree-definition-already-covers-bass-serre-trees`,
  `fs-every-tree-action-is-without-edge-inversions`,
  `fs-every-tree-automorphism-fixes-a-vertex`,
  `fs-translation-length-is-always-the-distance-from-an-arbitrary-basepoint`,
  `fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree`,
  `ex-the-bi-infinite-line-and-its-translation-action`,
  `ex-regular-cayley-trees-of-free-groups`,
  `ex-an-edge-inversion-and-its-barycentric-subdivision`,
  `ex-a-finite-group-fixing-the-centre-of-a-tree`,
  `ex-elliptic-and-hyperbolic-automorphisms`,
  `cex-the-quotient-of-a-tree-can-have-cycles`.
- Proof-contract output authored:
  `research/frontier-22-batch-1.proof-contracts.json` with 44 proof-bearing
  scope entries. `citations` and `derivations` were regenerated from the
  authored item text after the final precheck-safe numbering settled; the
  boundary rows were then checked against the actual written proof branches.

### Provenance rationale

- Core HNN and simplicial-tree statements are tagged `literature-derived`
  because the page route, statement content, and source coverage all come
  directly from the verified Lyndon-Schupp, Serre, Tumarkin, Loh, and Leary
  harvest rows already recorded in `research/frontier-22-batch-1.coverage.json`.
- Proof-bearing items are tagged `ai-altered` where the on-disk proof is a
  compact adaptation of the standard source route rather than a verbatim
  transcription. The non-load-bearing caution rows (`fs-*`, the explicit
  counterexamples, and a few concrete worked examples) use `ai-altered`
  statements when they package the sourced mathematics into library-specific
  warning form.
- Definitions carry `proof: not-applicable`. The one recorded-not-proved item,
  `rem-higman-neumann-neumann-embedding-theorem`, is kept truthful with
  `proved_here: false`, `proof: not-supplied`, and a matching
  `external_dependency` record; it is not used downstream inside this batch.

### Narrowed or dropped claims

- No planned item id was dropped.
- No batch-manifest claim was narrowed away from the Step-3 scaffold.
- One canonical precheck repair was adopted exactly as suggested by the
  checker: in
  `items/thm-conjugacy-theorem-for-cyclically-reduced-hnn-words.md` the second
  proof row was renumbered from `2.1` to `1.2`, and the concluding equivalence
  row from `3.1` to `2.1`, so that the stored phase order matches the repaired
  order the validator requires.

### Checks run on Friday, August 28, 2026

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-1 item files...`
  - Pass after the single adopted repair: `44 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-22-batch-1.proof-contracts.json --strict`
  - Pass: `0 error(s), 0 warning(s), 44/44 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-22-batch-1.pages.json`
  - Pass: `60 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  - Pass: ends `OK`, with only the repository's standing `redundant-prereq`
    advisories outside this batch.
- `node tools/rendercheck.mjs ...4 page files... ...60 item files...`
  - Pass: `64 file(s)` with YAML and KaTeX parsing clean.
- `node tools/depcheck.mjs --quiet`
  - Repo-wide failure outside this batch: the current run reports pre-existing
    `multi-home`, `page-item-missing`, `dep-unresolved`, and
    `published-unchecked` findings on other pages and items. No batch-1-authored
    file appears in the reported error set.

### Blockers

- None in the authored batch scope after the required Step-5 checks above.
- Extra repo-wide `depcheck` remains blocked by unrelated non-batch content
  already present elsewhere in the repository.

## Controller recovery — Friday, August 28, 2026

The step-6 refuter correctly detected that the local tree definition admitted
the empty graph vacuously, while several tree-action statements require a
vertex. The controller aligned `def-simplicial-tree` with the run's Serre-following
source convention: a simplicial tree is nonempty and connected. This changes no
theorem's conclusion; it supplies the standard domain condition that makes the
translation-length, fixed-point, and torsion statements well-formed. A fresh
refuter pass was requested so its obligations are evaluated against these bytes.

The fresh refuter retained two in-scope fatal findings: the false uniqueness
claim for minimal invariant subtrees, and the overbroad HNN conjugacy lemma.
Its touched dependent theorem repeats the latter criterion; the controller
recorded that duplicate in the refuter coverage note rather than presenting it
as an out-of-scope obligation. The Alpha adjudication must repair the lemma and
the dependent theorem together.
