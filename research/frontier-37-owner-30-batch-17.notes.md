# Batch 17 — approximation algorithms and gap reductions

Run `frontier-37-owner-30`; A page order 651 and B companion order 652. Batch 17 owns only this pair and its coverage/proof-route notes. No run-local owner-authoring-direction file exists for `frontier-37-owner-30`.

## Binding scope and repair

Step 3a found that the initial manifest materialised the obsolete 18 A / 3 B TC-36 inventory. The binding inventory is plan §49, which §44 says supersedes conflicting earlier inventories. This repair now carries all **22 A items and 5 B items**, including every previously promised item, and adds no deferrals. The A manifest requires all six pages named in §49:

- `alphabet-reduction-and-the-pcp-theorem`
- `classical-np-completeness-reductions`
- `finite-counting-and-binomial-coefficients`
- `graphs-walks-and-connectivity`
- `trees-forests-and-spanning-trees`
- `eulerian-and-hamiltonian-graphs`

The binding track prose already contains that list. The run's `plan-spec.json` A-page entry still has only the first four prerequisites; the root owner must add the trees and Eulerian page IDs there. No track-prose edit is needed. The B page continues to require only the A page.

The repaired scope is enumerated in `research/frontier-37-owner-30-batch-17.pages.json`. The initial Step3a review receipt remains historical and hashes the old 18/3 scope; root owns stable readiness and a fresh scope decision for this enriched manifest.

## Added proof routes and suppliers

- `def-harmonic-number-for-set-cover-analysis` defines the finite sum and `H_0=0`. The set-cover approximation theorem now directly depends on this definition and sums the charge bounds to `H_n OPT`.
- `lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp` deletes one edge from an optimal Hamiltonian tour. The remaining path is a spanning tree with no greater cost; MST minimality gives `w(T)≤OPT_TSP`. Its exact published prerequisites are `def-metric-tsp` and `def-weighted-graph-and-minimum-spanning-tree`.
- `lem-euler-double-tree-shortcutting-does-not-increase-cost` doubles a spanning tree, invokes published `thm-eulers-euler-circuit-characterisation` to construct an Euler circuit, and partitions that circuit at first visits. The metric triangle inequality bounds each shortcut by its corresponding segment, so the tour costs at most `2w(T)`. Exact prerequisites: `def-metric-tsp`, `def-weighted-graph-and-minimum-spanning-tree`, and `thm-eulers-euler-circuit-characterisation`.
- `thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp` now consumes both local lemmas and published `thm-kruskals-minimum-spanning-tree-algorithm`. The MST lemma gives the lower bound and the Euler-shortcutting lemma gives the upper bound. The tree and Euler suppliers are all published; no new in-run or cross-batch supplier is needed.
- `def-ptas-fptas-and-apx` states the PTAS/FPTAS quantifiers and locally defines APX over the finite-instance optimization model in the preceding item: one polynomial-time fixed-factor algorithm in the problem's objective direction. Its guarantees include `OPT=0` without division and it does not attribute this selected convention to the inaccessible APX article.
- `def-apx-hardness-and-apx-completeness` explicitly selects L-reductions as a local convention: every source in the locally defined APX class must L-reduce to an APX-hard target; APX-completeness additionally requires target membership in APX. It does not claim this is the only literature convention or claim any scaffolded target APX-hard/complete without a reduction theorem.
- `lem-l-reductions-transfer-apx-hardness` states the finite-instance and nonnegative-value assumptions, derives relative error `ab epsilon` when the target optimum is positive, handles either zero optimum explicitly, chooses target accuracy below both the requested error and one, and gives the composed maps and inequalities with product constants `(aa',bb')`. APX-hardness transfer follows by composing each APX source's reduction through the assumed hard source. A PCP gap/no-PTAS result alone is not treated as APX-hardness. Since every FPTAS is a PTAS, the page's no-PTAS results also rule out an FPTAS unless `P=NP`.
- `ex-conditional-expectation-for-a-small-max-cut-instance` works through all choices on `K_3`: initial expectation `3/2`, the two `v_2` expectations `1` and `2`, and final cut size `2`.
- `ex-double-tree-shortcutting-for-a-metric-tsp-instance` uses the four-cycle shortest-path metric. The doubled path walk costs 6, while first-visit shortcutting gives the unit-side tour of cost 4; the deleted return segment costs 3 and its shortcut costs 1. The MST has cost 3 and the optimum tour cost 4.

All new IDs, direct dependencies, statements, strategy routes, and levels are in the batch manifest. Published prerequisites were checked on disk. The consumer-batch input `research/frontier-37-owner-30-batch-17.cross-batch-dependencies.json` remains `[]`: all sources are either published items or this batch's items, and no invented supplier was added.

## Dependency levels

Levels were recomputed from the full run DAG for this batch's local items; published suppliers do not add a batch-local level. The harmonic definition is level 0; the two metric-TSP lemmas are level 2; the double-tree theorem is level 3; APX hardness/completeness is level 3; the L-reduction transfer lemma is level 4. The deepest A item is level 4, and the deepest B item (`ex-l-reductions-transfer-apx-hardness`) is level 5. Each B item depends only on A items.

## Source coverage

The Williamson–Shmoys full text was fetched again and SHA-256 matched the existing 500-page stamp `f890311c5c9f5e6b`. I inspected its FPTAS Definition 3.4 and Theorem 3.5 at §3.1, printed pp. 68–69, and added that exact locator to `def-ptas-fptas-and-apx` and the coverage inventory. The existing full-text stamps remain for Williamson–Shmoys (`f890311c5c9f5e6b`), Arora–Barak (`da0881782a35bde6`), Ghaffari (`622355925629596c`), and Cornell (`7f67c614c8719134`). The full-text harvest now maps the harmonic definition, both TSP lemmas, both new worked examples, and the FPTAS definition to their source headings.

The Papadimitriou–Yannakakis, *Optimization, approximation, and complexity classes*, JCSS 43(3) (1991), pp. 425–440, DOI `10.1016/0022-0000(91)90023-x`, has an exhausted-source disposition. Crossref/OpenAlex verify only bibliographic metadata. The initial retrieval record and two alternate endpoint records were retained; source-fetch-check then made the three remaining DOI retries, each receiving an 11-character HTML body below its full-text threshold. The stamp command returned `4/5 source(s) fetch-verified (0 newly stamped), 1 FAILED`; no source text was read and no stamp was fabricated. Google Scholar searches for the article's full text and for APX-hardness under L-reductions found no authoritative accessible statement of a canonical convention. The author-hosted full text “Structure in Approximation Classes” by Crescenzi, Kann, Silvestri, and Trevisan was inspected as an alternative, but it says L-reductions are not a general completeness notion for computational classes such as APX, so it was rejected as support. The source is marked dropped; the fallback defines APX locally from the finite-instance optimization contract, selects L-reductions explicitly for APX-hardness, and provides a dependency-backed transfer/composition proof. It claims neither a unique literature convention nor APX-hardness/completeness for any specific target. The complete six-attempt log, search outcomes, and alternatives are in `batch-17.coverage.json`. The other four source records remain full-text stamped.

## Existing proof routes and inherited published issue

The 18 original A items and 3 original B items remain. The original routes still cover maximal-matching vertex cover, weighted greedy set cover, random/conditional-expectation Max-Cut, metric-TSP double-tree, PCP-to-gap-Max-3SAT, the clause-literal consistency graph, L-reductions, and the exact-hardness counterexample. The three hardness items continue to carry the conservative Axiom of Choice dependency because the current published PCP proof route reaches `thm-algebraic-embedding-extension` through the spectral-gap chain; this published proof-cost issue was already recorded in the initial notes and is not changed here.

## Work boundary

Only this batch's `pages.json`, `coverage.json`, `notes.md`, and this scope-repair note were changed. No item/page content, shared plan, plan-spec, unified dependency ledger, readiness/scope receipt, published item, engine state, or other batch was edited. No workers were launched or retried.

## Step 3b authoring record (appended at handoff, 2026-09-30)

All 27 assigned items are authored, checked and decided; the pair report with the full evidence is
`research/frontier-37-owner-30-step3b-pair-approximation-algorithms-and-gap-reductions.md`.

- Item order followed the dispatch's dependency-level order exactly (level 0 through level 5),
  one item at a time, with a `tools/precheck.mts` pass after each item.
- Final gate battery: precheck 19 checked / 0 failing (8 definitions n/a); rendercheck OK for all
  27 items and both pages; content-policy 0/0; `proof-contract --strict` 27/27 with 0 errors and
  0 warnings (101 citations, 107 steps, 216 boundary dispositions); item-dependency-levels
  clean (808 items, max level 31); validate-plan OK; coverage-checklist 36 results, 0/0;
  prosecheck 0 errors / 0 warnings on this pair; fwdcheck/depcheck show no finding for any
  batch-17 item; extcheck OK; all 27 item decisions closed at confidence 1.
- Repairs made while authoring: URL typo in `thm-random-cut-has-expected-half-the-edges`; added
  `def-finite-simple-graph` dep to `thm-maximal-matching-is-a-two-approximation-for-vertex-cover`;
  added the harmonic dependency to `def-greedy-set-cover`; added the explicit max-cut convention
  paragraph to `def-optimization-problem-and-approximation-ratio` (no item in the library defined
  `OPT_MaxCut`); made the declared-but-unused facts `[F4]`/`[F5]` of
  `lem-pcp-verifier-reduces-to-gap-max-three-sat` and `[F2]` of
  `thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp` cited at their actual uses;
  trimmed over-claiming fact restatements in `lem-gap-three-sat-reduces-to-gap-independent-set`
  and `fs-exact-np-hardness-implies-no-constant-approximation`; joined a multiline display in
  `def-l-reduction`; clarified the closing sentence of `ex-greedy-set-cover-charging-bound`;
  canonicalised `ex-l-reductions-transfer-apx-hardness` step labels.
- Manifest `deps` equal file frontmatter `deps` for all 27 items; the 28 external supplier IDs are
  all published. `research/frontier-37-owner-30-batch-17.cross-batch-dependencies.json` remains
  `[]` (no cross-batch dependency: published suppliers plus in-batch items only).
- Open owner obligation: the dependency-ledger refresh (`node tools/frontier-dependency-ledger.mjs
  refresh --run frontier-37-owner-30`) is blocked by the frontmatter of
  `items/def-modular-specht-form-and-radical-quotient.md` (batch 23 pair, invalid YAML escape at
  line 26), which this pair must not edit; route to that pair's owner. The Step 3a plan-spec
  follow-up (root to add `trees-forests-and-spanning-trees` and
  `eulerian-and-hamiltonian-graphs` to the plan-spec A-page entry) also remains root-owned.
- Axiom of Choice: carried by the three PCP-hardness items only, with the assumption stated in each
  Statement and the exact use (the published Zorn-based PCP supplier route) recorded in each item.
