# frontier-22 batch 4 notes - beta scaffold

Owned pairs:

- `algebraic-and-spectral-graph-theory` / `algebraic-and-spectral-graph-theory-examples`
- `bull-free-graphs-and-the-erdos-hajnal-property` / `bull-free-graphs-and-the-erdos-hajnal-property-examples`

Artifacts written in this dispatch:

- `research/frontier-22-batch-4.pages.json`
- `research/frontier-22-batch-4.coverage.json`
- this file

Session date: Friday, August 28, 2026.

## Design against spec

I read the batch task, `research/plan-spec.json`, the GT-7 design section at
`research/plan-combinatorics-and-categories.md` lines 2376ff, the row for
`411/412` around line 3905 together with `§16.3` and `§16.5`, and the live
published prerequisite pages on disk.

### `algebraic-and-spectral-graph-theory`

The design and the current spec do **not** agree on order metadata:

- the detailed GT-7 prose still says order `209`
- the live spec says order `227`
- the design prose also still refers to `the-spectral-theorem-and-singular-value-decomposition`
  as order `131`, while the live spec places it at `141`

Per dispatch instructions I did not adjudicate that drift locally. I kept the
spec's page id, order, companion, and `requires`, and recorded the mismatch
here.

One design check resolves cleanly on disk: the GT-7 prose says to verify
whether Cauchy-Binet already exists. It does **not**. There is no published
`thm-cauchy-binet-formula` item, so the scaffold mints it locally and uses that
route for Kirchhoff.

The other GT-7 seam resolves the other way: Courant-Fischer and Cauchy
interlacing are already published on
`the-spectral-theorem-and-singular-value-decomposition`, so the graph page does
not re-mint them. They are recorded in coverage as already-published seams.

### `bull-free-graphs-and-the-erdos-hajnal-property`

The row `411/412` agrees with the live spec on page id, companion, title,
order, category, and declared `requires`.

The material problem is not design-vs-spec metadata but **reading order** on
disk:

- `bull-free-graphs-and-the-erdos-hajnal-property` is order `411`
- `cographs-perfect-patterns-and-pure-pairs`, the live page that is supposed to
  own perfect-graph material, is later at order `413`
- there is no published earlier `def-perfect-graph`, weak perfect graph theorem,
  strong perfect graph theorem, or perfect-substitution theorem on disk

But Chudnovsky-Safra's bull proof genuinely uses perfect induced subgraphs and
those three perfect-graph facts. I therefore surfaced them explicitly as local
boundary items:

- `def-perfect-graph-for-the-bull-route`
- `rem-weak-perfect-graph-theorem-for-the-bull-route`
- `rem-strong-perfect-graph-theorem-for-the-bull-route`
- `rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route`

The suffix is deliberate: batch 9's later page `413` already scaffolds the
global `def-perfect-graph`, so the bull page uses route-local boundary ids
instead of silently colliding with that later ownership.

That is an honest scaffold-level repair of the missing prerequisites. It is
also the batch's main step-5 blocker: without a drift decision or a sourced
recorded-theorem strategy for those perfect-graph facts, the bull proof cannot
be fully internalized at order `411`.

## Item census and split check

- A page `algebraic-and-spectral-graph-theory`: `24` items
- B page `algebraic-and-spectral-graph-theory-examples`: `8` items
- A page `bull-free-graphs-and-the-erdos-hajnal-property`: `25` items
- B page `bull-free-graphs-and-the-erdos-hajnal-property-examples`: `6` items

No A page is close to the `60`-item split gate, so no split is needed.

## Route choices

### `algebraic-and-spectral-graph-theory`

The page is now graph-specific rather than a duplicate of the already-published
linear-algebra spectral page.

The chosen spine is:

1. adjacency matrix, spectrum, cospectrality, walk counting, and spectral
   invariance
2. bipartiteness from spectral symmetry
3. oriented incidence matrices and the ordinary Laplacian
4. positive semidefiniteness, the zero eigenspace, and algebraic connectivity
5. Cauchy-Binet and Kirchhoff
6. Cayley's formula as a second proof
7. the `(n,d,lambda)` spectral-gap language and the basic cut-expansion
   consequence
8. canonical spectrum calculations for `K_n`, `C_n`, `K_{m,n}`, and the
   Petersen graph

Important decisions:

- I did **not** re-mint Courant-Fischer, Rayleigh, interlacing, or Gershgorin.
  Those are already published and appear in coverage as seams rather than as
  duplicate items.
- I **did** mint `thm-binet-cauchy-formula`, because the graph page needs it
  for Kirchhoff and there is no published item to cite.
- I kept the complete-graph, cycle, complete-bipartite, and Petersen spectra as
  page-owned computations because the GT-7 design explicitly wants those family
  calculations on this pair.
- I recorded the design's Hoffman/friendship/Cheeger branch explicitly in
  coverage rather than silently dropping it. The current page defers Hoffman and
  friendship to `owner-decision` and keeps Cheeger out of scope, because the
  present route already closes the core adjacency/Laplacian/tree dictionary
  without opening a second extremal or normalized-Laplacian package.

### `bull-free-graphs-and-the-erdos-hajnal-property`

The page follows the Chudnovsky-Safra narrow/basic/composite route, but
translated into the library's published module/substitution language.

The chosen spine is:

1. bull, bull-free, holes/antiholes, perfect graphs, good functions, and
   alpha-narrowness
2. narrowness implies a large perfect induced subgraph, hence a large clique or
   stable set
3. basic/composite bull-free graphs and split sets
4. a split set with both complete and anticomplete outside vertices yields a
   nontrivial module
5. every composite bull-free graph has a nontrivial module, hence every prime
   bull-free graph is basic
6. the two structural lemmas for basic graphs
7. one of the neighborhood side graphs is perfect
8. every basic bull-free graph is `2`-narrow
9. alpha-narrowness is preserved under substitution
10. every bull-free graph is `2`-narrow, hence has Erdős-Hajnal exponent `1/4`

Important decisions:

- I translated the source's "homogeneous set" decomposition into the existing
  module language on page `397`, because the design amendment for the 393-442
  block says the extension should reserve `module` for that notion.
- I kept `thm-alpha-narrowness-is-preserved-under-substitution` as a separate
  theorem. The survey names it explicitly, and it is the load-bearing inductive
  step that lets the final theorem use the already-published prime/substitution
  machinery rather than hiding the decomposition step in prose.
- I did **not** scaffold the weighted LP covering lemma `2.2` as its own item.
  It is real mathematics, but the present page only needs the constant-weight
  perfect-subgraph consequence to recover the `1/4` exponent. The full covering
  theorem is recorded in coverage as intentionally out of scope, not omitted.
- I also recorded the best-possible-up-to-`sqrt(log n)` construction only as a
  deferred survey result, because its proof depends on Kim's triangle-free
  Ramsey lower bound and is not part of the page's dependency spine.

## Source set actually read

### For `algebraic-and-spectral-graph-theory`

I harvested from these sources:

1. Richard P. Stanley, *Enumerative Combinatorics, Volume 1*.
2. O. Pikhurko, *Algebraic Methods in Combinatorics*.
3. Richard P. Stanley, MIT 18.314 handout *The Matrix-Tree Theorem*.

What each source is doing:

- Stanley supplies the adjacency-power walk dictionary and the closed-walk
  trace seam.
- Pikhurko supplies the spectral-gap / expander side and the cut-expansion
  estimate.
- The MIT 18.314 handout supplies Binet-Cauchy, the Laplacian-incidence
  identity, Kirchhoff, the eigenvalue product form, and the complete-graph
  specialisation that yields Cayley.

### For `bull-free-graphs-and-the-erdos-hajnal-property`

I harvested from these sources:

1. Maria Chudnovsky, *The Erdős-Hajnal Conjecture—A Survey*.
2. Maria Chudnovsky and Shmuel Safra, *The Erdős-Hajnal conjecture for bull-free
   graphs*.
3. Maria Chudnovsky, *The structure of bull-free graphs III—global structure*
   (Princeton-hosted manuscript, 62 pp.).
4. Shenwei Huang, Yiao Ju, and Yidong Zhou, *Erdős-Hajnal beyond the five-vertex
   path*.

What each source is doing:

- The survey supplies the page's modern route summary: bull theorem,
  alpha-narrowness, and substitution preservation, while also forcing explicit
  dispositions for the neighboring C5 and path-antipath theorems.
- The Chudnovsky-Safra paper is the actual structural proof source for split
  sets, composite graphs, the two basic lemmas, the perfect-side theorem, and
  the narrowness induction.
- The Princeton-hosted `bulls3.pdf` manuscript is the qualifying
  monograph-length structural treatment for this pair. Its Sections 2-4 provide
  a harvestable table of contents for bull-free complement invariance,
  substitution, and the global prime/basic structural reduction, without
  pretending to be the page's direct source for the good-function and
  alpha-narrowness calculations.
- The 2026 arXiv paper is the current program placement source required by
  `§16.5`; it confirms how the bull theorem sits among the later five- and
  six-vertex results and lets the harvest honestly route those adjacent results
  to their later pages.

### Reharvest repair for the Chudnovsky-Safra source

- First dead source: `https://paperzz.com/doc/7281034/the-erd%CB%9Dos-hajnal-conjecture-for-bull-free-graphs`
  returned `403` in `research/frontier-22-url-liveness.json` on Friday, August
  28, 2026.
- First same-document recovery used:
  `https://scispace.com/pdf/the-erdos-hajnal-conjecture-for-bull-free-graphs-1hswo0dv83.pdf`.
- Current dead source as named by `research/frontier-22-reharvest-plan.json`
  and the merged `research/frontier-22-url-liveness.json`:
  `https://scispace.com/pdf/the-erdos-hajnal-conjecture-for-bull-free-graphs-1hswo0dv83.pdf`
  with HTTP `403`.
- I checked same-document recovery before considering any different treatment.
  Maria Chudnovsky's Princeton publications page
  `https://web.math.princeton.edu/~mchudnov/publications.html` links the same
  13-page article at
  `https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf`.
- Provenance action: the coverage row now cites the Princeton PDF and keeps the
  scaffold-pass Paperzz mirror as `original_url`. The superseded SciSpace
  recovery from the first reharvest remains recorded here in the notes because
  the coverage schema carries only one `original_url`.
- On the current bytes, that exact Princeton PDF URL is also fetch-verified in
  `research/frontier-22-batch-4.coverage.json` at
  `2026-08-28T01:12:10.710Z`.
- Affected orphaned item-backed results: `def-bull-graph`,
  `def-bull-free-graph`, `def-basic-and-composite-bull-free-graphs`,
  `thm-composite-bull-free-graphs-have-a-nontrivial-module`,
  `rem-weak-perfect-graph-theorem-for-the-bull-route`,
  `rem-strong-perfect-graph-theorem-for-the-bull-route`,
  `def-split-set-in-a-bull-free-graph`,
  `thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module`,
  `lem-basic-bull-free-hole-with-a-complete-outside-vertex`,
  `lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex`,
  `thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect`,
  `thm-basic-bull-free-graphs-are-two-narrow`, and
  `rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route`.
- Changed claim constraint: none. This is a same-document URL repair, not a
  mathematical re-sourcing, so the bull page keeps the same route, the same
  dispositions, and the same local perfect-graph boundary items.

## Known limits and blockers

- The shell in this runner still has no DNS resolution. A fresh repo-local
  `source-fetch-check --stamp` or `url-sweep` therefore remains transport
  blocked with resolver errors such as `EAI_AGAIN` and `Could not resolve
  host`.
- That transport issue is no longer a batch-4 scaffold blocker on the current
  bytes. `research/frontier-22-batch-4.coverage.json` now carries `7/7`
  `fetch_verified` records: the six fully stamped rows already on disk plus a
  metadata-only web verification for
  `https://web.math.princeton.edu/~mchudnov/bulls3.pdf` at
  `2026-08-28T01:57:36Z` (`pdf`, sixty-two pages).
- The run-level liveness snapshot `research/frontier-22-url-liveness.json`
  predates the added `bulls3.pdf` source row, so any later
  `source-backing`/`url-sweep` refresh must happen outside this batch-local fix
  pass.
- The bull page's perfect-graph boundary package remains an explicit local
  bridge across live orders `411` and `413`, not a hidden missing dependency.
  Alpha finding `C4-2` accepted that manifest repair.
- No further batch-local blocker remains at scaffold stage.

## Validation

- `node tools/coverage-checklist.mjs --require-destination research/frontier-22-batch-4.coverage.json`
  returned
  `coverage-checklist: 2 page(s), 80 harvested result(s), 0 error(s), 0 warning(s)`
  on Friday, August 28, 2026.

- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-4.coverage.json`
  returned `source-fetch-check: 7/7 source(s) fetch-verified` on Friday,
  August 28, 2026.

- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-*.pages.json`
  returned `content-policy: 425 scoped item(s), 0 error(s), 0 warning(s)` on
  Friday, August 28, 2026.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Friday, August 28, 2026, ending with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 460 page(s) with item lists.`
  The live output still includes repository-wide `redundant-prereq` notes
  outside this batch.

- `node tools/prosecheck.mjs research/frontier-22-batch-4.notes.md --warnings`
  returned `1 file(s) checked. 0 error(s), 3 warning(s).` on Friday, August 28,
  2026. All three are the same heuristic `count-in-prose` warning, triggered by
  the exact command-output counts quoted in this validation section; the same
  run ends with `OK — no positional claim contradicts the spec.`

## Step-3 fix pass

### `C4-1`

Disposition:

- accepted as already repaired on the current bytes; no further manifest edit
  was needed in this pass

Evidence:

- The stable finding in `research/frontier-22-alpha-c-step3-scaffold-review.md`
  is accurate, but the live `research/frontier-22-batch-4.pages.json` already
  carries the repair it describes: page
  `algebraic-and-spectral-graph-theory` now requires
  `linear-recurrences-and-rational-generating-functions`, and
  `thm-spectral-gap-implies-connectivity-and-edge-expansion` already depends on
  `def-rayleigh-quotient` and
  `thm-courant-fischer-min-max-principle`.
- The required batch-local validators still pass on those current bytes.

Changed scaffold record:

- none in this pass; `research/frontier-22-batch-4.pages.json` already carried
  the C4-1 repair when this dispatch opened

### `C4-2`

Disposition:

- accepted as already repaired on the current bytes; no further manifest edit
  was needed in this pass

Evidence:

- `cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets` in
  `research/frontier-22-batch-4.pages.json` already depends on
  `def-perfect-graph-for-the-bull-route` and
  `thm-clique-independence-chromatic-bounds`, exactly as the alpha repair
  required.
- The bull page's local perfect-graph boundary package therefore remains
  explicit rather than hidden, and the required batch-local validators still
  pass.

Changed scaffold record:

- none in this pass; `research/frontier-22-batch-4.pages.json` already carried
  the C4-2 repair when this dispatch opened

### `C4-3`

Disposition:

- applied with a narrow pushback on the alpha note's exact framing: the review
  correctly identified a missing qualifying source form, but the pair-level rule
  does not require one textbook/monograph/full-note source to single-handedly
  carry every later narrowness step. The repair is to add a qualifying
  structural treatment while keeping the direct good-function and
  alpha-narrowness harvest on `EHbullfree.pdf`.

Evidence:

- On Friday, August 28, 2026, I opened
  `https://web.math.princeton.edu/~mchudnov/bulls3.pdf` through the web reader
  and verified that it is a full 62-page PDF with harvestable Sections 2-4 and
  named Theorems 4.1 and 4.2.
- Those sections now appear in
  `research/frontier-22-batch-4.coverage.json` as a new
  `kind: "monograph"` source row backing the structural side of the page:
  bull-free complement invariance, substitution, and the global reduction from
  bull-free graphs to the prime/basic cases.
- The existing Princeton `EHbullfree.pdf` row still carries the split-set,
  perfect-graph, basic-graph narrowness, substitution-preservation, and
  exponent-`1/4` harvest. The repair therefore cures the source-form defect
  without relabeling the survey or the paper.
- The required validators pass after the coverage refresh.

Changed scaffold record:

- `research/frontier-22-batch-4.coverage.json`, page
  `bull-free-graphs-and-the-erdos-hajnal-property`: added source row
  `https://web.math.princeton.edu/~mchudnov/bulls3.pdf` with six harvested
  headings/results and a `fetch_verified` record
- `research/frontier-22-batch-4.notes.md`: updated the bull-page source notes,
  current blockers/validation summary, and this Step-3 fix-pass record

## Step-5 authoring

Session date: Friday, August 28, 2026.

Authored page files:

- `library/combinatorics/algebraic-and-spectral-graph-theory.md`
- `library/combinatorics/algebraic-and-spectral-graph-theory-examples.md`
- `library/combinatorics/bull-free-graphs-and-the-erdos-hajnal-property.md`
- `library/combinatorics/bull-free-graphs-and-the-erdos-hajnal-property-examples.md`

Authored ids by page:

### `algebraic-and-spectral-graph-theory`

`def-adjacency-matrix-of-a-finite-simple-graph`,
`def-graph-spectrum-spectral-radius-and-cospectrality`,
`thm-adjacency-matrix-powers-count-walks`,
`cor-trace-of-adjacency-power-counts-closed-walks`,
`prop-spectrum-is-an-isomorphism-invariant`,
`thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric`,
`thm-spectral-radius-is-bounded-by-average-and-maximum-degree`,
`def-oriented-incidence-matrix-of-a-graph`,
`def-laplacian-matrix-of-a-finite-simple-graph`,
`thm-laplacian-is-the-oriented-incidence-product`,
`thm-laplacian-is-positive-semidefinite-and-annihilates-ones`,
`thm-laplacian-kernel-dimension-counts-components`,
`def-algebraic-connectivity-of-a-graph`,
`cor-algebraic-connectivity-characterises-connectedness`,
`thm-binet-cauchy-formula`,
`thm-spectrum-of-the-complete-graph`,
`thm-matrix-tree-theorem`,
`cor-kirchhoff-eigenvalue-product-formula`,
`cor-cayley-formula-from-the-matrix-tree-theorem`,
`def-n-d-lambda-graph-and-expander`,
`thm-spectral-gap-implies-connectivity-and-edge-expansion`,
`thm-spectrum-of-the-cycle-graph`,
`thm-spectrum-of-the-complete-bipartite-graph`,
`thm-spectrum-of-the-petersen-graph`

### `algebraic-and-spectral-graph-theory-examples`

`ex-adjacency-spectrum-of-c-four`,
`ex-laplacian-kernel-of-a-disconnected-graph`,
`ex-k-four-has-sixteen-spanning-trees-by-kirchhoff`,
`ex-spectrum-of-k-three-three`,
`ex-petersen-graph-spectrum-from-the-two-subset-model`,
`cex-cospectral-graphs-need-not-be-isomorphic`,
`fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity`,
`fs-matrix-tree-theorem-needs-a-particular-cofactor`

### `bull-free-graphs-and-the-erdos-hajnal-property`

`def-bull-graph`,
`def-bull-free-graph`,
`prop-bull-free-graphs-are-complement-invariant`,
`def-hole-antihole-and-odd-hole`,
`def-perfect-graph-for-the-bull-route`,
`rem-weak-perfect-graph-theorem-for-the-bull-route`,
`rem-strong-perfect-graph-theorem-for-the-bull-route`,
`def-good-function-on-a-graph`,
`def-alpha-narrow-graph`,
`prop-perfect-graphs-are-one-narrow`,
`thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs`,
`cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets`,
`def-basic-and-composite-bull-free-graphs`,
`def-split-set-in-a-bull-free-graph`,
`thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module`,
`thm-composite-bull-free-graphs-have-a-nontrivial-module`,
`cor-prime-bull-free-graphs-are-basic`,
`lem-basic-bull-free-hole-with-a-complete-outside-vertex`,
`lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex`,
`rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route`,
`thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect`,
`thm-basic-bull-free-graphs-are-two-narrow`,
`thm-alpha-narrowness-is-preserved-under-substitution`,
`thm-bull-free-graphs-are-two-narrow`,
`cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter`

### `bull-free-graphs-and-the-erdos-hajnal-property-examples`

`ex-the-bull-graph-is-self-complementary`,
`cex-the-five-cycle-is-bull-free-but-not-perfect`,
`ex-k-four-is-bull-free-with-a-nontrivial-module`,
`ex-the-five-cycle-is-not-one-narrow`,
`fs-every-bull-free-graph-is-perfect`,
`fs-two-narrow-implies-one-narrow`

Provenance rationale:

- Marked source-owned definitions and theorem statements `literature-derived`
  where the authored claim matches the harvested source route directly:
  adjacency/Laplacian/Kirchhoff items from Stanley and Pikhurko, and the
  bull-free structural/narrowness route from Chudnovsky-Safra, the survey, and
  `bulls3.pdf`.
- Marked route-local generalisations, witness formulations, and false-converse
  statements `ai-altered`: the alpha-narrow perfect-subgraph and
  clique-or-stable-set abstractions, the route-local perfect-graph bridge ids,
  the cospectral and $C_5$ witness items, and the false statements derived from
  the proved theorems.
- Kept every dependency target out of `provenance.statement: ai-generated`.
  The batch writes no generated statement that another item depends on.
- Recorded only the perfect-graph bridge theorems as `proved_here: false`:
  `rem-weak-perfect-graph-theorem-for-the-bull-route`,
  `rem-strong-perfect-graph-theorem-for-the-bull-route`, and
  `rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route`.
  Each now carries a truthful `external_dependency` record and no stale judge
  stamp.

Narrowed or clarified claims:

- `def-algebraic-connectivity-of-a-graph` and
  `cor-algebraic-connectivity-characterises-connectedness` are written only for
  graphs with at least two vertices. This avoids the false singleton reading,
  since $K_1$ is connected but has no second Laplacian eigenvalue.
- `thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs` and
  `cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets` are written for
  nonempty graphs. The constant-good-function argument uses a maximum perfect
  subgraph order $K\ge1$ and should not pretend to cover the null graph without
  a separate branch.
- No planned id was dropped. The scaffolded Hoffman/friendship/Cheeger branch
  on the spectral page remains deferred or out of scope in
  `research/frontier-22-batch-4.coverage.json`, exactly as recorded at scaffold
  stage; I did not quietly reintroduce it through the authored page.

Authoring-time dependency and contract repairs:

- Added the honest supporting deps that the written proofs actually use:
  `def-oriented-incidence-matrix-of-a-graph` on
  `thm-laplacian-is-positive-semidefinite-and-annihilates-ones`,
  `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` on the Laplacian
  multiplicity and algebraic-connectivity items,
  `def-good-function-on-a-graph` on the one-narrow and perfect-subgraph items,
  `def-bull-graph` on the $C_5$ counterexample, and
  `def-module-of-a-graph` / `def-substitution-of-a-graph-for-a-vertex` on
  `thm-bull-free-graphs-are-two-narrow`.
- The batch proof-contract file is now present and synchronized with the final
  proofs at `research/frontier-22-batch-4.proof-contracts.json`.

Blockers and retained caveats:

- No batch-local Step-5 authoring blocker remains.
- The GT-7 design-vs-spec order drift recorded above remains unresolved here by
  instruction; I continued to author against the live spec.
- The bull-page perfect-graph bridge remains deliberately external rather than
  reconstructed locally. That is now an explicit recorded-not-proved boundary,
  not a hidden missing dependency.

Validation on the final authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-4 item files...`
  returned `46 checked, 0 failing — all clean` on Friday, August 28, 2026.
- `node tools/content-policy.mjs research/frontier-22-batch-4.pages.json`
  returned `content-policy: 63 scoped item(s), 0 error(s), 0 warning(s)` on
  Friday, August 28, 2026.
- `node tools/validate-plan.mjs research/plan-spec.json` exited `0` on Friday,
  August 28, 2026, ending with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 484 page(s) with item lists.`
  The run still prints repository-wide `redundant-prereq` notes outside batch 4.
- `node tools/proof-contract.mjs research/frontier-22-batch-4.proof-contracts.json --strict`
  returned `proof-contract: 0 error(s), 0 warning(s), 46/46 item(s) checked` on
  Friday, August 28, 2026.
