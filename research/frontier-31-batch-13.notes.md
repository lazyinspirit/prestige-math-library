# frontier-31 · Beta · batch-13 notes — `the-structural-criterion-for-property-star`

Run `frontier-31`, batch `13`, one combinatorics A/B pair. This scaffold changes only the task-authorised batch manifest, this coverage harvest, and these notes.

## Control and plan check

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the batch task, the batch manifest, the design block `research/plan-combinatorics-and-categories.md:3893-3995`, the corresponding `research/plan-spec.json` entries, the live prerequisite page and its eight item interfaces, and the source passages recorded in the coverage file.

The design table gives `433/434`, the A/B ids in the task, and the scope “Lemma 5.1/1.14: partitions, pattern lifting, geometric layers and contradiction.” The plan and task likewise give A order `433`, B order `434`, category `combinatorics`, and the sole A prerequisite `property-star-and-comb-outcomes`. There is no design-versus-plan drift to adjudicate.

The scaffold has six A items and two B items, so the A page is below the 60-item split ceiling.

## Source reading and support

Two independent full treatments were fetch-verified through the web reader and recorded with exact locators and every harvested heading/result in `research/frontier-31-batch-13.coverage.json`:

1. Huang–Ju–Zhou, *Erdős-Hajnal beyond the five-vertex path*, arXiv v2, Section 5, HTML lines 856–915. This is the primary source for the precise structural criterion, its three branches, Claims 5.1.1–5.1.2, and the final contradiction.
2. Nguyen, *Notes on Recent Work on the Erdős–Hajnal Conjecture*, a 21-page lecture-note set, Section 5 on PDF pages 15–17. Its table of contents and source-owned section hierarchy are harvestable; its iterative-sparsification and blockade route independently checks the surrounding technique and supports the already-published interfaces used by the prerequisite page.

The coverage ledger records source-specific out-of-scope decisions for the notes' bigraph/VC-dimension results rather than using them as undifferentiated citations. No URL was retained without a successful full-text web open.

## Item spine, dependencies, and proof route

| id | exact planned claim | direct dependencies and rationale |
|---|---|---|
| `def-comb-block-decomposition-criterion` | Names the universal partition hypothesis in Lemma 5.1: each relevant comb block has an F1-free Y part and a pure F2-patterned X part with vertexwise cross-block purity. | Comb, pure-blockade, pure-pattern, family-free, and finite-family Erdős–Hajnal interfaces state every term used in the criterion. |
| `lem-a-large-y-part-gives-the-first-property-star-outcome` | An F1-free part of order at least `w/2` supplies a clique or stable set of order at least `w^(c/2)`. | The criterion supplies F1-freeness; the published Erdős–Hajnal definition supplies exponent `c`; the published clique/stable interface states the outcome. |
| `lem-transversal-large-pure-blocks-give-the-third-property-star-outcome` | If every decomposition has a block of size at least `w/(2 ell)`, one from each comb block forms the third pure-blockade outcome. | The criterion gives vertexwise purity in both directions. The proof explicitly derives uniform pairwise adjacency from those two directional conditions; `2 ell <= ell^2` gives the prescribed width. |
| `def-integral-geometric-layers-of-a-size-ordered-pure-blockade` | Defines layers using `m_k=min(t,ceil(ell^(k/2)))`, not nonintegral block indices. | Published blockade and pure-blockade definitions make the ordered layer construction meaningful. |
| `lem-integral-geometric-layers-force-a-blockade-or-a-small-union` | A nonsmall layer pattern lifts to the second property (*) blockade; otherwise the integral layers sum to less than `w/2`. | The layer definition gives actual integer blocks. An F2 Erdős–Hajnal homogeneous set lifts through the pure pattern. The ceiling-tail bound is proved locally. |
| `thm-structural-comb-decomposition-implies-property-star` | The structural criterion implies property (*), with `c_1=c_3=c/2` and `c_2=5/c`. | Combines the two branch lemmas and the integral layer alternative under the published definition of property (*). |

The B page contains only two non-load-bearing checks: a finite four-tooth local partition and a nonsquare-base (`ell=5`) layer computation. The first must give every edge/nonedge needed for its comb, pure-block, pattern, and special-vertex claims; it does **not** claim the global criterion from one finite configuration. The second exposes every rounded cutoff and tail coefficient.

## Conventions and source repair

- Graphs are finite, simple, and undirected; the prior page's comb, blockade, pure-pair, family-free, and property (*) conventions are reused unchanged.
- `c` is the minimum of chosen positive Erdős–Hajnal constants for `F1` and `F2`; the theorem uses `c_1=c_3=c/2` and `c_2=5/c`.
- A vertex being pure to a block does not by itself make two blocks pure. The transversal proof must invoke the structural clause once in each direction: rows and columns of the bipartite adjacency matrix are both constant, hence the entire matrix is constant.
- The source writes layer endpoints such as `ell^(k/2)` as block indices. This scaffold repairs that nonintegral notation with `m_k=min(t,ceil(ell^(k/2)))`, `m_0=0`, and `q=ceil(log_(sqrt ell)t)`. With `r=sqrt ell>=2`, the proof must retain the explicit estimate
  `ceil(r)/(2r^2) + sum_{k>=1} ((r^(k+1)-r^k+1)/r^(5k)) <= 3/8 + 1/15 + 1/31 < 1/2`.
  Thus the correction is not a cosmetic reindexing: it closes the integer-index gap while preserving the source conclusion.

## Known limits and next action

This page proves only the abstract structural criterion. Establishing that co-E-free or co-Bird-free graphs satisfy its partition hypothesis belongs to later pages `co-e-free-comb-structure` and `co-bird-free-comb-structure`; no later result is pulled backward here.

No unresolved mathematical or source blocker remains at scaffold stage. The coverage checker emits one non-blocking low-yield warning (three of twelve harvested results create new scaffolded items): this is intentional, because the other Nguyen Section 5 results are either already-published prerequisite interfaces or source-specific VC-dimension/bigraph results outside this page's criterion. They must remain harvested with their individual dispositions rather than be turned into padding.

## Validation record

- JSON parse: PASS (both batch JSON files, 2026-09-05).
- `node tools/coverage-checklist.mjs --require-destination research/frontier-31-batch-13.coverage.json`: PASS — 1 page, 12 harvested results, 0 errors, and the intentional low-yield warning described above.
- `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-13.pages.json`: PASS — 8 scoped items, 0 errors, 0 warnings.
- Manifest integrity check: PASS — all 8 item objects carry an explicit `deps` array and their ids are unique.
- `node tools/validate-plan.mjs /tmp/frontier-31-batch-13-spliced-plan.json`, using a temporary plan with only these two manifest records substituted: PASS — no item cycles, forward references, B dependencies, or unresolved ids among 748 pages. Its pre-existing repository-wide redundant-prerequisite notices remain warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-13.coverage.json`: PASS — 2/2 sources fetch-verified.
- `node tools/url-sweep.mjs --coverage research/frontier-31-batch-13.coverage.json --out /tmp/frontier-31-batch-13-url-liveness.json --recover --fail-on-dead --timeout-ms 5000 --concurrency 1`: the local curl resolver could not resolve `arxiv.org` or `web.math.princeton.edu` (0/2), including archive lookups. This is an environment DNS limitation, not evidence that the URLs are dead: both full documents had already opened in the web reader and their manual verification receipts remain in the coverage ledger. Do not replace either verified source solely from this failed local sweep.
- `git diff --check -- ...`: PASS. Because these three batch files are new and therefore not in the ordinary index diff, `git diff --no-index --check /dev/null <each-file>` also passed for each, with no whitespace diagnostics.

Batch 13 is ready for the next autopilot transition, subject only to the environment-level URL-sweep DNS observation above.
