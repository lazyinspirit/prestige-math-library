# frontier-20 · Beta-8 · batch notes — `set-partitions-stirling-numbers-and-exponential-generating-functions` and `blockades-combs-and-pattern-graphs`

## 1. Scope, design control, and owned artifacts

This batch owns two A/B pairs:

- `set-partitions-stirling-numbers-and-exponential-generating-functions` /
  `set-partitions-stirling-numbers-and-exponential-generating-functions-examples`
  at orders `199` and `200`
- `blockades-combs-and-pattern-graphs` /
  `blockades-combs-and-pattern-graphs-examples`
  at orders `407` and `408`

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch task
`research/frontier-20-beta-8.task.md`, and the design material in
`research/plan-combinatorics-and-categories.md`.

For the set-partitions page, I read both design locations:

- the original track block at lines `1596-1638`
- the later enriched amendment at lines `4775-4825`

I treated the **later enriched amendment as controlling** for scaffold shape,
because it is the later explicit anchor block for the same page and it
deliberately reopens scope that the older track block had dropped:

- the labelled half of the symbolic method
- Dobinski's formula
- involution numbers
- ordered Bell numbers
- Lah numbers
- Touchard's congruence

I did **not** settle the design/spec conflict in-place. I recorded it here and
followed `research/plan-spec.json`, exactly as the task requires:

- the older design block still says order `181`; the spec and batch task say
  order `199`
- the older design block names only the low prerequisites
  `lattice-paths-and-catalan-numbers` and
  `inclusion-exclusion-and-the-pigeonhole-principle`
- the live spec and batch task add
  `combinatorial-classes-and-the-symbolic-method`,
  `permutation-statistics-inversions-and-eulerian-numbers`, and
  `the-exponential-function`

For the blockades page, the design row at line `3903` and the current spec
agree on:

- page id
- title
- order
- category
- companion page
- prerequisite page

Artifacts written by this dispatch:

- `research/frontier-20-batch-8.pages.json`
- `research/frontier-20-batch-8.coverage.json`
- this file

I did not edit plan structure, published library content, workflow state, or
another batch artifact.

## 2. Scaffold shape

### `set-partitions-stirling-numbers-and-exponential-generating-functions`

The A page has **21 items** and the B page has **13 items**, matching the
design table's target exactly. No split is needed.

The A page is organized in four clusters:

- **Conventions and well-definedness (items 1-8).**
  Notation/sign conventions, finiteness of set partitions, the two Stirling
  definitions, rising factorials, EGFs over a $\\mathbb{Q}$-algebra, and the
  labelled symbolic constructors.
- **Finite Stirling identities (items 9-14).**
  Second-kind recurrence, Bell recurrence, the inclusion-exclusion/surjection
  formula, the falling-factorial expansion, the first-kind recurrence plus the
  rising-factorial expansion, and the signed inversion theorem.
- **Labelled-EGF calculus (items 15-18).**
  The labelled symbolic-method rules, the vertical EGFs for the two Stirling
  triangles, and the exponential formula giving the Bell-number EGF.
- **Analytic and enrichment tail (items 19-21).**
  Dobinski, the standard labelled specializations (involutions, ordered Bell,
  no-singleton partitions), Lah numbers, and Touchard's congruence.

The B page keeps the examples concrete:

- partitions of `[4]`
- `S(4,2)` by three routes
- the Stirling-matrix inversion through size `4`
- ordered Bell versus Bell
- involutions, Lah numbers, no-singleton partitions
- three false statements and two counterexamples from the design

### `blockades-combs-and-pattern-graphs`

The A page has **11 items** and the B page has **9 items**. No split is needed.

The A page is intentionally narrow and follows the design row exactly:

- **Vocabulary core (items 1-6).**
  Ordered blockade conventions; blockade length and width; pure, complete,
  anticomplete, weakly sparse, and directional sparse blockades; combs;
  pattern graphs; sparse orientations.
- **Theorem 2.3 support spine (items 7-10).**
  A targeted $P_4$-free pattern-graph homogeneous-set lemma; the induced
  complete/anticomplete subblockade lemma; the maximal-pattern enlargement
  lemma; then the theorem that polynomially large complete/anticomplete
  blockades force polynomially large restricted induced subgraphs.
- **Theorem 2.6 spine (item 11).**
  The iterative sparse-pair extraction theorem yielding a long directional
  sparse blockade.

The key design adjustment here is that I introduced the **smallest honest
intermediate pattern-graph lemmas** needed to support theorem 2.3, while still
leaving the full cograph/perfect-pattern theory to the much later page
`cographs-perfect-patterns-and-pure-pairs` at order `413`.

The B page verifies:

- concrete blockades and their widths
- a pure blockade that is neither complete nor anticomplete
- a comb
- a pattern graph
- a sparse orientation
- the directional-versus-weak-sparsity distinction

## 3. Source choices and harvest decisions

### Set-partitions pair

I used six independent sources in the coverage artifact:

1. **Flajolet–Sedgewick, _Analytic Combinatorics — Symbolic Combinatorics_**
   (`FlSe02.pdf`), as the main labelled-structures treatment.
2. **Wilf, _generatingfunctionology_**, as the second full-text EGF treatment
   with explicit set-partition, permutation-cycle, and involution sections.
3. **MIT 18.212 lecture 11**, as the cleanest opened treatment of the
   change-of-basis / inversion viewpoint.
4. **Hurst–Schultz, _An elementary (number theory) proof of Touchard's
   congruence_**, for the exact Touchard statement and proof route.
5. **Bogart, _Combinatorics Through Guided Discovery_**, for the Lah-number
   ordered-block interpretation.
6. **MathWorld, Dobiński's Formula**, for an explicit live statement of the
   Dobinski identity and its standard derivation pattern.

Two source-scope choices matter here:

- I kept the MIT lecture note's **rook-placement** and
  **noncrossing/nonnesting** material out of scope. Both are mathematically
  legitimate, but neither is part of the designed labelled-EGF/Stirling spine,
  and importing them would enlarge the page for no downstream need.
- I kept **Dobinski** as the page's only deliberately analytic item. The notes
  and sources agree that the derivation is not purely formal, so the scaffold
  explicitly routes it through `thm-double-series-fubini` and the real
  exponential page rather than pretending it lives inside `R[[x]]`.

### Blockades pair

I used four independent treatments:

1. **Tung Nguyen, _Notes on Recent Work on the Erdős–Hajnal Conjecture_**, as
   the eligible lecture-note treatment for blockade length/width and the
   directional `x`-sparse / `x`-dense blockade convention.
2. **Nguyen–Scott–Seymour, _Induced subgraph density. VII. The five-vertex
   path_**, via the arXiv HTML full text, for the exact blockade vocabulary and
   theorem `7.4`.
3. **Chudnovsky–Scott–Seymour–Spirkl, _Erdős–Hajnal for graphs with no
   5-hole_**, for the explicit `§5 BLOCKADES` terminology and the pattern-graph
   viewpoint.
4. **Huang–Ju–Zhou, _Erdős-Hajnal beyond the five-vertex path_**, via the
   verified arXiv HTML full text, for the comb definition, the exact statement
   of Lemma `2.8`, and the gateway sparse-blockade route.

The important harvest decisions are:

- `5 Using a comb` in the Nguyen–Scott–Seymour paper is **deferred** to
  `iterative-restriction-and-comb-extraction-lemmas`, because that later page
  owns Lemmas `2.4-2.5` and `2.7-2.10`.
- The verified Huang–Ju–Zhou read does **not** support a separate source-own
  `Lemma 5.3` row. I kept only the parenthetical attribution inside
  `Lemma 2.8` and did not reintroduce any preview-only deferment.

### Current source-depth note

The set-partitions pair has the textbook / lecture-note depth the standing
brief asks for. After the step-3 fix pass, the blockades pair now also has an
eligible non-paper primary treatment on disk: Nguyen's Princeton lecture notes
cover blockade length, width, and the directional sparse-blockade convention.

I am **not** claiming that the lecture notes replace the paper sources for the
comb, pattern-graph, or gateway-theorem rows. Those items remain attached to
the papers that actually state them; the repair here is narrower and honest:
it clears the page-level primary-source gap without fabricating non-paper
support for results the note does not contain.

## 4. Expected validator targets

Per the frontier-20 beta-batch brief, the in-scope gates for this fix pass are:

- `node tools/coverage-checklist.mjs research/frontier-20-batch-8.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-{1..10}.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`

### Actual results run on Wednesday, August 26, 2026

- `node tools/coverage-checklist.mjs research/frontier-20-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 32 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs research/frontier-20-batch-1.pages.json research/frontier-20-batch-2.pages.json research/frontier-20-batch-3.pages.json research/frontier-20-batch-4.pages.json research/frontier-20-batch-5.pages.json research/frontier-20-batch-6.pages.json research/frontier-20-batch-7.pages.json research/frontier-20-batch-8.pages.json research/frontier-20-batch-9.pages.json research/frontier-20-batch-10.pages.json --manifest-only`
  -> `content-policy: 486 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with warnings only**. The validator ended with `OK`; the visible
  output remained the run-wide `redundant-prereq` warning class, with no
  batch-8-specific unresolved-id, forward-reference, or cycle failure.

I did **not** rerun `source-fetch-check --stamp` or `url-sweep` in this fix
pass. The workspace DNS-resolution failure recorded in §§5-6 is unchanged, and
the dispatch required the three gates above rather than a second transport-only
rerun.

## 5. Interpretation of the failed URL gates

These are **transport failures in the workspace sandbox**, not source-selection
or harvest-structure failures:

- the same URLs were opened and read through the web tool during this dispatch;
- `coverage-checklist`, `content-policy`, and `validate-plan` all passed after
  the batch-local manifest/coverage fixes;
- both failing URL tools stopped at DNS resolution (`EAI_AGAIN` / `curl: (6)`)
  before any content validation, archive recovery, or source-substitution logic
  could do real work.

So the current blocker is precise:

**No local fetch stamps and no local liveness receipts can be minted from this
workspace session on August 26, 2026 because the sandbox cannot resolve the
source hosts.**

If that clears, the next action is simple and local:

1. rerun `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-8.coverage.json --stamp`
2. rerun `node tools/url-sweep.mjs --coverage research/frontier-20-batch-8.coverage.json --out /tmp/frontier-20-batch-8-url-liveness.json --recover --fail-on-dead`

No re-sourcing is justified yet from the mathematics I actually read. The
`url-sweep` text saying "re-sourcing is justified here" is its generic response
to an unresolved host with no archived copy, not evidence that the harvested
documents are mathematically dead.

## 6. Reharvest 1 on Wednesday, August 26, 2026

This reharvest repaired the three dead preview-only source rows in
`research/frontier-20-batch-8.coverage.json`. I preserved the dead URLs as
`original_url` provenance and replaced each with a verified same-document live
URL, so this was URL recovery rather than cross-document re-sourcing.

- Dead `https://www.researchgate.net/publication/45854828_An_elementary_number_theory_proof_of_Touchard%27s_congruence`
  -> live same-document `https://arxiv.org/pdf/0906.0696`
  -> affected result `Corollary 1.5 (Touchard's Congruence)`
  -> carried item `cor-touchards-congruence-for-bell-numbers`
  -> exact verified locator `PDF pp. 1-2: §1 Introduction, Theorem 1.4, and Corollary 1.5.`

- Dead `https://londmathsoc.onlinelibrary.wiley.com/doi/abs/10.1112/plms.12504`
  -> live same-document `https://arxiv.org/html/2102.04994v1`
  -> affected results `5 Blockades` and the cograph pure-pair sentence immediately preceding Theorem 5.1
  -> carried items `def-pattern-graph-of-a-pure-blockade` and `lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades`
  -> exact verified locator `§5 Blockades, arXiv HTML lines 319-322, stopping before Theorem 5.1.`

- Dead `https://www.researchgate.net/publication/406039308_Erdos-Hajnal_beyond_the_five-vertex_path`
  -> live same-document `https://arxiv.org/html/2606.06258v2`
  -> affected results `an (\ell,w)-comb in a graph`, `the ordered definition of an x-sparse blockade`, and the theorem row backing the sparse-blockade extraction item
  -> carried items `def-comb-in-a-graph`, `def-sparse-orientation-of-a-blockade`, and `thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades`
  -> exact verified locator `§2 opening definitions, arXiv HTML lines 213-225, and §2.2 Lemmas 2.3 and 2.8, lines 277-317.`

One source-row fidelity correction mattered mathematically:

- The old preview-based row had backed
  `thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades` with `Lemma 2.6`.
  The verified arXiv text shows the actual matching source-own result is
  `Lemma 2.8 (contained in Lemma 5.3 of Nguyen-Scott-Seymour [14])`.
  I corrected the harvest to that statement. No scaffold item id, dependency,
  page split, or proof-route constraint changed; only the source match became
  faithful.

- The old preview-based deferred row named `Lemma 5.3` as if it were a
  source-own result in Huang-Ju-Zhou. The verified arXiv document does not
  carry a source-own `Lemma 5.3` in the repaired read range; the only verified
  `5.3` reference there is the parenthetical attribution inside `Lemma 2.8`.
  I therefore did **not** carry the old preview-only `Lemma 5.3` row forward.
  This is a fidelity repair, not a source-gate clearance. The earlier note in
  §3 that treated `Lemma 5.3` as a deferred Huang-Ju-Zhou harvest row is
  superseded by this verified read.

I also reused the existing exact `fetch_verified` receipt for
`https://arxiv.org/html/2606.06258v2` from
`research/frontier-19-batch-10.coverage.json`, because it is byte-for-byte the
same source URL already stamped elsewhere in the repository. I did not invent
new receipts for the other two repaired URLs.

### Reharvest validator reruns

- `node tools/coverage-checklist.mjs research/frontier-20-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 29 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-8.coverage.json --stamp`
  -> `source-fetch-check: 7/9 source(s) fetch-verified (0 newly stamped), 2 FAILED`
  -> the only failing URLs are the two newly repaired same-document URLs
     `https://arxiv.org/pdf/0906.0696` and
     `https://arxiv.org/html/2102.04994v1`, both with `EAI_AGAIN`

- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-8.coverage.json --out /tmp/frontier-20-batch-8-url-liveness-reharvest.json --recover --fail-on-dead`
  -> `url-sweep: 0/9 live; 9 failed; 0 recoverable from the archive; 0 suspect`
  -> every failure was `curl: (6) Could not resolve host`
  -> the batch-local artifact is `/tmp/frontier-20-batch-8-url-liveness-reharvest.json`

- `node tools/source-backing.mjs --coverage research/frontier-20-batch-8.coverage.json --liveness /tmp/frontier-20-batch-8-url-liveness-reharvest.json`
  -> fails mechanically on 20 authored results, because the batch-local sweep
     marked every host unresolved
  -> this does **not** indicate fresh mathematical orphaning after the reharvest;
     it is the direct consequence of the same DNS-resolution failure that made
     `url-sweep` report `0/9 live`

So the batch-local mathematical repair is complete, the destination-required
coverage gate is green, and the remaining red gates are the transport-liveness
ones only.

## Step-3 fix pass

- `49b5f5be7047cac6701264b38cfd690c003b7a3789b470e228f138bf5ce699e3`
  disposition: `stands`.
  evidence: Flajolet–Sedgewick II.4's alignment branch still has no consumer on
  the 21-item enriched CB-7 route, and the controlling later amendment did not
  reopen that branch.
  changed scaffold record: none.

- `ccc37723720e582b3f8c17a78fda9505337f71f7c9888a9fe533adcf11f4e86d`
  disposition: `stands`.
  evidence: MIT Theorem 6 is still the rook-placement branch; the A page still
  lands exactly on the enriched 21-item target and no new in-closure consumer
  for Ferrers-board material appeared.
  changed scaffold record: none.

- `384b182ca4b92ed85890011a82f4ab228f83ae855bc7404f2687f5374a4c6021`
  disposition: `stands`.
  evidence: MIT Theorem 10 remains the noncrossing/nonnesting branch, which
  still belongs with later Catalan/pattern-partition material rather than the
  current Stirling/EGF route.
  changed scaffold record: none.

- `6eb24a1c5162539676f08d015375a9e0675e7ae2855c5fb5de4767a784f98af8`
  disposition: `stands`.
  evidence: Nguyen–Scott–Seymour §5 still maps exactly to plan-spec page `423`
  `iterative-restriction-and-comb-extraction-lemmas`; page `407` still owns
  only blockade vocabulary plus the gateway lemmas.
  changed scaffold record: none.

- `coverage-no-primary-source [blockades-combs-and-pattern-graphs]`
  disposition: `applied`.
  evidence: I read Tung H. Nguyen, *Notes on Recent Work on the Erdős–Hajnal
  Conjecture*, §3, PDF p. 8, where the note defines blockades as ordered
  sequences with length and width and gives the directional `x`-sparse /
  `x`-dense blockade convention before Theorem 3.4.
  changed scaffold record:
  `research/frontier-20-batch-8.coverage.json` now includes that source as a
  `lecture-notes` row for `blockades-combs-and-pattern-graphs`, and this note
  now records the narrowed repair honestly.

## Step-5 authoring

Authored ids on Wednesday, August 26, 2026:

- `set-partitions-stirling-numbers-and-exponential-generating-functions`
  A-page items:
  `rem-stirling-number-and-egf-conventions`,
  `def-set-partition-and-block`,
  `lem-set-partitions-of-a-finite-set-are-finite`,
  `def-stirling-second-kind-and-bell-number`,
  `def-signed-and-signless-stirling-first-kind`,
  `def-rising-factorial`,
  `def-exponential-generating-function-over-a-q-algebra`,
  `def-labelled-classes-and-basic-labelled-constructions`,
  `thm-stirling-second-kind-recurrence`,
  `cor-bell-number-binomial-recurrence`,
  `thm-stirling-second-kind-inclusion-exclusion-formula`,
  `thm-powers-expand-in-the-falling-factorial-basis`,
  `thm-signless-first-kind-recurrence-and-rising-factorial-expansion`,
  `thm-signed-stirling-inversion`,
  `thm-labelled-symbolic-method-rules-for-exponential-generating-functions`,
  `thm-vertical-egfs-for-the-stirling-triangles`,
  `thm-exponential-formula-for-set-partitions-and-bell-numbers`,
  `cor-dobinski-formula-for-bell-numbers`,
  `cor-standard-specializations-of-the-labelled-symbolic-method`,
  `thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials`,
  `cor-touchards-congruence-for-bell-numbers`.

- `set-partitions-stirling-numbers-and-exponential-generating-functions`
  B-page items:
  `ex-set-partitions-of-four-by-block-count`,
  `ex-s-four-two-computed-by-recurrence-formula-and-listing`,
  `ex-stirling-triangles-invert-up-to-four`,
  `ex-ordered-bell-versus-bell-at-three`,
  `ex-involutions-of-four-and-their-cycle-decomposition`,
  `ex-lah-number-l-four-two`,
  `ex-set-partitions-of-four-with-no-singletons`,
  `ex-singleton-block-families-have-egf-exp-x`,
  `fs-bell-numbers-count-ordered-set-partitions`,
  `fs-stirling-second-kind-counts-surjections`,
  `fs-exponential-generating-functions-multiply-without-labelled-product-hypothesis`,
  `cex-set-partitions-with-the-same-block-sizes-can-be-distinct`,
  `cex-the-second-kind-inclusion-exclusion-formula-does-not-count-permutations-by-cycles`.

- `blockades-combs-and-pattern-graphs` A-page items:
  `rem-blockade-conventions-and-order`,
  `def-blockade-length-and-width`,
  `def-complete-anticomplete-pure-and-x-sparse-blockades`,
  `def-comb-in-a-graph`,
  `def-pattern-graph-of-a-pure-blockade`,
  `def-sparse-orientation-of-a-blockade`,
  `lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets`,
  `lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades`,
  `lem-maximal-pattern-pure-blockades-force-many-blocks`,
  `thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs`,
  `thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades`.

- `blockades-combs-and-pattern-graphs` B-page items:
  `ex-a-three-block-blockade-and-its-width`,
  `ex-pure-but-not-complete-blockade`,
  `ex-a-three-tooth-comb`,
  `ex-pattern-graph-of-a-pure-blockade`,
  `ex-a-sparse-orientation-of-four-blocks`,
  `fs-every-pure-blockade-is-complete-or-anticomplete`,
  `fs-blockade-order-never-matters-for-x-sparsity`,
  `cex-weak-sparsity-does-not-imply-directional-sparsity`,
  `cex-a-comb-fails-when-a-tooth-sees-a-foreign-block`.

- Page files:
  `library/combinatorics/set-partitions-stirling-numbers-and-exponential-generating-functions.md`,
  `library/combinatorics/set-partitions-stirling-numbers-and-exponential-generating-functions-examples.md`,
  `library/combinatorics/blockades-combs-and-pattern-graphs.md`,
  `library/combinatorics/blockades-combs-and-pattern-graphs-examples.md`.

- Proof-contract artifact:
  `research/frontier-20-batch-8.proof-contracts.json`.

Provenance rationale:

- I tagged the source-owned set-partition, Stirling, Bell, EGF, Dobinski, Lah,
  and Touchard statements as `literature-derived`, with local proofs mostly
  `ai-generated` because the written proofs are local rewrites rather than
  copied source proofs.
- I tagged the page-local packaging items
  `lem-set-partitions-of-a-finite-set-are-finite`,
  `rem-blockade-conventions-and-order`,
  `def-sparse-orientation-of-a-blockade`,
  `lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades`,
  and `lem-maximal-pattern-pure-blockades-force-many-blocks`
  as `ai-altered`, since they are honest local restatements or decompositions of
  source routes rather than source-own theorem statements.
- I kept the ordinary examples and the blockade examples as
  `provenance.statement: ai-generated` with `generation.role: example`, and I
  made them non-proof-bearing (`verification.precheck: n/a`) because they are
  concrete worked specimens rather than standalone proof obligations.
- I tagged the counterexamples as `ai-generated` with
  `generation.role: counterexample`, and the false statements as `ai-altered`,
  because false-statement items are not allowed to use the generated-statement
  role.

Post-audit repair notes on Wednesday, August 26, 2026:

- I restricted both Stirling recurrences to `k >= 1`, so neither theorem now
  mentions an undefined negative index.
- I repaired the signed-inversion proof so both matrix identities now come from
  the falling-factorial expansion first, and only then from triangular-matrix
  invertibility; the sequence `iff` now states its coefficient ring.
- I rewrote the Lah item so the theorem proves the counting formula and the
  rising-to-falling expansion on natural arguments directly, instead of naming a
  coefficient formula without proof.
- I repaired the Dobinski proof by routing coefficient comparison through the
  library's real power-series coefficient theorem, rather than treating the
  formal Bell EGF as an unlicensed analytic identity.
- I tightened the blockade definitions to require nonempty blocks and positive
  widths, fixed the comb definition so each tooth must see its own block even
  when `\ell = 1`, and corrected the sparse-blockade lower-bound estimate from
  the source-lemma proof.
- I removed the two false-statement dependencies on AI-generated examples and
  inlined those witness counts directly in the proof text.

Narrowed or dropped claims:

- I did **not** widen `thm-powers-expand-in-the-falling-factorial-basis` to a
  polynomial-ring identity. I stated the expansion on natural-number arguments,
  which is exactly what the local counting proof establishes and is all the
  inversion theorem needs.
- I did **not** add verification sections to the ordinary example items. That
  kept the proof-contract scope restricted to the actual proof-bearing items.

Blockers and residual risk:

- The set-partitions pair closed cleanly on local proofs and the required gates.
- The blockade pair still has one substantive blocker rather than a gate
  failure: `lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets`
  still uses the source-owned cograph pure-pair decomposition sentence as its
  internal structural input. I did not find an in-scope local proof of that
  structural fact from the currently published graph-module pages alone, and I
  did not fabricate one. So the theorem chain
  `lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets` ->
  `lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades` ->
  `thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs`
  remains mathematically contingent on that sourced cograph step.

Checks run on Wednesday, August 26, 2026 after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts $(node -e "...batch-8 item paths...")`
  -> `28 checked, 0 failing — all clean`
- `node tools/proof-contract.mjs research/frontier-20-batch-8.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 28/28 item(s) checked`
- `node tools/content-policy.mjs research/frontier-20-batch-8.pages.json`
  -> `content-policy: 54 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/rendercheck.mjs ...batch-8 items/pages...`
  -> render-clean on the authored batch files after the display-math repair pass
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the standing repository-wide `redundant-prereq` advisories.
