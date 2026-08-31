# frontier-26 · Beta · batch-8 notes — `star-expansions-and-erdos-hajnal` and `iterative-sparsification-and-the-five-vertex-path`

Run `frontier-26`, batch `8`, two A/B pairs, category `combinatorics`.
Author: Beta. Session date: Sunday, August 30, 2026.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-26-batch-8.pages.json`
- `research/frontier-26-batch-8.coverage.json`
- this file

Per the batch brief, I did not edit workflow state, published content, another
batch artifact, or `proof-contracts`.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-26-dispatch/beta-batch-8.prompt.md`, the seed manifest
`research/frontier-26-batch-8.pages.json`, the controlling design material in
`research/plan-combinatorics-and-categories.md`, and the live plan entries in
`research/plan-spec.json`.

I also checked the live autopilot state with:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

On current disk, that reported `frontier-26` running on Sunday, August 30,
2026, with:

- stage `1-drift` complete
- stage `1-scaffold` at `3/11` covered
- batch `8` still in flight

## 2. Controlling design and design/spec drift

### Controlling design material

The generated prompt cites line `3908` for page `417/418` and line `3909` for
page `419/420`, but the binding guidance is wider than those row mentions
alone. I treated the following as controlling together:

- `§16.2`, rows `417/418` and `419/420`
- `§16.3`, especially the note that the `C_5` and star-expansion proofs stay
  separate, and the warning that the `P_5` source owns its two iteration chains
- `§16.4`, which maps source theorems `1.6` and `1.9` to pages `419` and `417`
- `§16.5`, the source-and-correction ledger

### Design/spec drift

For both owned pairs, the design rows and `research/plan-spec.json` agree on:

- page ids
- companion ids
- titles
- orders `417/418` and `419/420`
- category `combinatorics`
- prerequisite page ids

So there is **no design-vs-spec drift to adjudicate locally** for this batch.

### Source-side numbering drift, recorded but not adjudicated

Two numbering mismatches matter for later authoring:

1. The design row for page `417` says "theorem `1.9`". In the 2026
   Huang-Ju-Zhou overview (`2606.06258v2`), Theorem `1.9` is indeed the
   star-expansion four-family theorem. In the primary `5-hole` paper
   (`2102.04994v1`), the corresponding star-expansion theorem is source
   `6.1/6.8`, while source `1.9` is the **later** cycle-plus-forest-complement
   consequence.
2. The design row for page `419` says the full `P_5/co-P_5` theorem is `1.6`.
   That matches the 2026 overview source. In the primary Nguyen-Scott-Seymour
   paper, the Erdős-Hajnal endpoint is source `1.2` and the polynomial Rödl
   endpoint is source `1.5`; in the arXiv `v2` HTML used here, the internal
   proof chain is also renumbered one section later than in `v1`.

I therefore followed the **statements and section routes**, not the bare theorem
numbers, when building the scaffold.

## 3. Scaffold shape and split check

The scaffold now has:

- `star-expansions-and-erdos-hajnal` (A): **16 items**
- `star-expansions-and-erdos-hajnal-examples` (B): **5 items**
- `iterative-sparsification-and-the-five-vertex-path` (A): **22 items**
- `iterative-sparsification-and-the-five-vertex-path-examples` (B): **4 items**

Both A pages are well below the `60`-item split threshold, so **no split is
proposed**.

## 4. Route choices

### `star-expansions-and-erdos-hajnal`

The A page follows the source route:

1. define star expansion
2. keep the rainbow-forest blockade theorem explicit, because page `413`
   deferred source `6.3` here and source `6.6/6.7/6.8` genuinely need it
3. expose the few-induced-copies-to-bounded-degree corollary
4. carry the blockade chain `6.6 -> 6.7 -> 6.8`
5. specialize to the star-expansion of `P_4`
6. take the `C_6` and `C_7` consequences honestly through explicit induced-copy
   lemmas
7. prove the source `1.9` cycle-plus-forest-complement theorem as a separate
   later theorem
8. close with the hatted-five-cycle theorem

Important local decisions:

- I **reused** the already-authored cograph-pattern and rooted-comb machinery
  from pages `413` and `415` rather than duplicating those claims under new ids.
- I kept source `7.4` **deferred** to
  `erdos-hajnal-for-the-e-graph-and-bird`, because the design assigns the
  final `1.10/1.11` deductions there, not on page `417`.
- I kept the finite witness "the star-expansion of `K_3` contains the hatted
  five-cycle" as its own A-page lemma, because the later hat theorem may not
  lean on a B-page example.

### `iterative-sparsification-and-the-five-vertex-path`

The A page is arranged around the paper's two iteration chains, exactly as the
design warns:

1. define niceness
2. build the sparse `P_5` and sparse `\\overline{P_5}` preliminaries
3. expose the first iterative sparsification chain through the pure-or-sparse
   polynomial blockade theorem
4. expose the layout/maximality chain proving that `P_5` is nice
5. expose the second semisparse/completion chain through the polynomial
   restricted-set-or-blockade theorem
6. use the already-authored blockade-to-restricted-subgraph theorem as the last
   established input
7. conclude the polynomial Rödl theorem and then the Erdős-Hajnal theorem

Important local decisions:

- I did **not** re-scaffold the specialized comb lemma that appears in the
  Nguyen-Scott-Seymour proof, because page `415` already proves a stronger
  bipartite comb theorem and page `419` officially requires page `415`.
- I did **not** duplicate the already-authored theorem
  `thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs`.
  The page now builds the source-specific machinery up to that theorem and then
  uses it as established library content.
- I left source `Theorem 3.3` out of scope. It is a legitimate general theorem
  about forest complements, but it is not load-bearing in the `P_5` proof route
  once the page defines niceness and proves `P_5` nice directly.

## 5. Source set actually recorded

### For `star-expansions-and-erdos-hajnal`

I recorded four verified source rows:

1. Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl,
   *Erdős-Hajnal for graphs with no 5-hole*:
   `https://arxiv.org/html/2102.04994v1`
2. Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl,
   *Pure pairs. I. Trees and linear anticomplete pairs*:
   `https://arxiv.org/pdf/1809.00919`
3. Shenwei Huang, Yiao Ju, and Yidong Zhou,
   *Erdős-Hajnal beyond the five-vertex path*:
   `https://arxiv.org/html/2606.06258v2`
4. Tung H. Nguyen,
   *Notes on Recent Work on the Erdős-Hajnal Conjecture*:
   `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`

This satisfies the standing source rule:

- independent primary treatment
- an additional independent paper treatment
- a full lecture-note treatment with harvestable section structure

What each source is doing:

- `2102.04994v1` is the primary source for the star-expansion theorem, its
  blockade chain, the cycle-plus-forest-complement theorem, and the hat result.
- `1809.00919` is the theorem-bearing upstream source for the rainbow-forest
  blockade input that `2102.04994v1` only states and uses.
- `2606.06258v2` is the independent later treatment that explicitly restates
  the page boundary the design cares about: Theorem `1.9`, the `C_6/C_7`
  consequence, and the hat consequence.
- Nguyen's notes are the qualifying lecture-note treatment. They do **not**
  supply the star-expansion proofs themselves; they supply the independent
  solved-five-vertex and Rödl-context read that the design source family sits
  inside.

### For `iterative-sparsification-and-the-five-vertex-path`

I recorded three verified source rows:

1. Tung Nguyen, Alex Scott, and Paul Seymour,
   *Induced subgraph density. VII. The five-vertex path*:
   `https://arxiv.org/html/2312.15333v2`
2. Shenwei Huang, Yiao Ju, and Yidong Zhou,
   *Erdős-Hajnal beyond the five-vertex path*:
   `https://arxiv.org/html/2606.06258v2`
3. Tung H. Nguyen,
   *Notes on Recent Work on the Erdős-Hajnal Conjecture*:
   `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`

This again satisfies the standing source rule:

- independent primary treatment
- independent later treatment
- qualifying lecture-note treatment

What each source is doing:

- `2312.15333v2` carries the whole iterative sparsification chain itself.
- `2606.06258v2` gives the later high-level route statement: the first half of
  the proof makes `P_5` nice, the second half proves polynomial Rödl, and the
  resulting Erdős-Hajnal theorem appears there as source `1.6`.
- Nguyen's notes provide the independent lecture-note treatment for the solved
  prime-five-vertex inventory and the earlier Rödl input that the proof chain
  repeatedly uses.

## 6. Known limits and step-5 risks

- The star-expansion page's heaviest proof is the source `6.6/6.7/6.8` blockade
  chain. The block-packing inequalities and width bookkeeping need to stay
  explicit in authoring; compressing them into prose would make the route
  uncheckable.
- The hatted-five-cycle theorem uses a triangle-free pattern-graph estimate in
  its final step. The scaffold keeps that estimate inline in the theorem
  strategy rather than minting a separate Ramsey item; step `5` should either
  cite the exact earlier Ramsey theorem already on disk or write the short local
  argument there.
- The Nguyen-Scott-Seymour source was read in arXiv `v2`, whose internal
  numbering differs from `v1`. Step `5` should not mix the two numberings inside
  one authored proof.
- Page `419` deliberately reuses the already-authored blockade theorem
  `thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs`.
  Re-authoring that same claim locally under a new id would violate the
  duplicate-claim rule.

## 7. Validator results

I ran the scaffold-stage checks on Sunday, August 30, 2026.

- `node -e 'JSON.parse(...)'` on `research/frontier-26-batch-8.pages.json`
  -> `pages-json: ok`

- `node -e 'JSON.parse(...)'` on `research/frontier-26-batch-8.coverage.json`
  -> `coverage-json: ok`

- `node tools/coverage-checklist.mjs research/frontier-26-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 63 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  -> `content-policy: 440 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed and ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.`
  The visible diagnostics before that tail were the repository's standing
  run-wide `redundant-prereq` warnings outside this batch.

- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-8.coverage.json --stamp`
  -> `source-fetch-check: 7/7 source(s) fetch-verified (0 newly stamped)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-8.coverage.json`
  -> `source-fetch-check: 7/7 source(s) fetch-verified`

- `node tools/url-sweep.mjs --coverage research/frontier-26-batch-8.coverage.json --out /tmp/frontier-26-batch-8-url-liveness.json --recover --fail-on-dead`
  -> `url-sweep: 0/5 live; 5 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-26-batch-8-url-liveness.json`
  with shell-side DNS failures on:
  - `https://arxiv.org/html/2102.04994v1`
  - `https://arxiv.org/html/2312.15333v2`
  - `https://arxiv.org/html/2606.06258v2`
  - `https://arxiv.org/pdf/1809.00919`
  - `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`

  Each failed with `curl: (6) Could not resolve host`.

- `git diff --check`
  -> clean

## 8. Interpretation of the remaining blocker

The scaffold and coverage gates are green, and the exact-URL fetch receipts are
present for every recorded source. The only remaining red validator is
`url-sweep`, and on current disk it is a transport-only failure in the shell
environment rather than a source-selection defect:

- the same URLs were opened and read through the web reader during this
  dispatch
- `source-fetch-check` passed both with and without `--stamp`
- `url-sweep` failed at DNS resolution before it could test archive recovery or
  justify a real re-source

So the current batch state is:

- mathematically scaffolded
- source-backed with exact receipts
- **not transport-clean under `url-sweep` in this shell session**

If shell DNS access clears, the next action is simply to rerun:

```bash
node tools/url-sweep.mjs --coverage research/frontier-26-batch-8.coverage.json --out /tmp/frontier-26-batch-8-url-liveness.json --recover --fail-on-dead
```

## Step-3 fix pass

Date: Monday, August 31, 2026.

- Stable review file checked:
  `research/frontier-26-alpha-d-step3-scaffold-review.md`.

- Finding ids for batch 8: **none issued** in the stable review file.
  The only group-`d` finding is `D10-1`, and Alpha assigns it to batch `10`
  page `context-free-pumping-ogden-and-parsing`, not to either batch-8 page.

- Disposition:
  accepted as already sufficient on current bytes; no batch-8 pushback was
  needed and no new manifest or coverage repair was required in this pass.

- Evidence reread and rerun in this pass:
  the controlling combinatorics design block at
  `research/plan-combinatorics-and-categories.md:3904-3941`; the live
  `research/frontier-26-batch-8.pages.json`,
  `research/frontier-26-batch-8.coverage.json`, and
  `research/frontier-26-alpha-d-step3-scaffold-review.md`; and the current URL
  liveness ledger `research/frontier-26-url-liveness.json`, which still records
  `200` status for all five batch-8 source URLs:
  `https://arxiv.org/html/2102.04994v1`,
  `https://arxiv.org/html/2312.15333v2`,
  `https://arxiv.org/html/2606.06258v2`,
  `https://arxiv.org/pdf/1809.00919`, and
  `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`.
  I also reopened those same five URLs in the web reader on Monday, August 31,
  2026 and confirmed that each still resolves to the recorded document family.

- Validator results on current bytes:
  `node tools/coverage-checklist.mjs research/frontier-26-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 63 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  -> `content-policy: 441 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-8.coverage.json`
  -> `source-fetch-check: 7/7 source(s) fetch-verified`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, ending with `OK`, with only the standing repo-wide
  `redundant-prereq` advisories.

- Changed scaffold record:
  no additional edit in `research/frontier-26-batch-8.pages.json`;
  no additional edit in `research/frontier-26-batch-8.coverage.json`;
  appended this Step-3 fix-pass receipt in
  `research/frontier-26-batch-8.notes.md`.

## Step-5 authoring

Date: Sunday, August 30, 2026.

- Authored page files:
  `library/combinatorics/star-expansions-and-erdos-hajnal.md`,
  `library/combinatorics/star-expansions-and-erdos-hajnal-examples.md`,
  `library/combinatorics/iterative-sparsification-and-the-five-vertex-path.md`,
  `library/combinatorics/iterative-sparsification-and-the-five-vertex-path-examples.md`.

- Authored A-page item ids:
  `def-star-expansion-of-a-graph`,
  `thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest`,
  `cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree`,
  `thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement`,
  `thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest`,
  `thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property`,
  `cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property`,
  `lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven`,
  `cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property`,
  `cor-the-seven-cycle-and-its-complement-have-the-erdos-hajnal-property`,
  `thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property`,
  `lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle`,
  `thm-a-cycle-and-a-forest-complement-have-the-erdos-hajnal-property`,
  `lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components`,
  `lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle`,
  `thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property`,
  `def-nice-graph`,
  `lem-small-anticonnected-components-yield-a-complete-blockade`,
  `lem-a-dense-bipartite-side-has-a-small-hitting-set`,
  `lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade`,
  `lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair`,
  `lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade`,
  `lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair`,
  `lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade`,
  `lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs`,
  `thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade`,
  `lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks`,
  `lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse`,
  `thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade`,
  `thm-the-five-vertex-path-is-nice`,
  `lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations`,
  `lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade`,
  `lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set`,
  `lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph`,
  `lem-the-minimal-sparsity-parameter-drops-below-the-target`,
  `thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade`,
  `thm-the-five-vertex-path-has-the-polynomial-rodl-property`,
  `cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property`.

- Authored B-page item ids:
  `ex-the-star-expansion-of-the-four-vertex-path`,
  `ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-five-cycle`,
  `ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-six-cycle`,
  `ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-seven-cycle`,
  `ex-the-star-expansion-of-k-three-contains-the-hatted-five-cycle`,
  `ex-two-large-anticonnected-components-give-a-complete-two-blockade`,
  `ex-a-sparse-p-five-free-graph-with-an-anticomplete-two-blockade`,
  `ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five`,
  `ex-a-layout-with-a-single-wrong-decided-pair`.

- Proof-contract artifact authored:
  `research/frontier-26-batch-8.proof-contracts.json`.

- Provenance rationale:
  star-expansion and `P_5` route statements taken directly from the harvested
  primary papers are tagged `literature-derived`;
  several internal blockade and layout formulations are intentionally weakened
  or normalized for local proof packaging and are tagged `ai-altered`;
  every local proof and verification written in this pass is tagged
  `ai-generated`;
  both definitions carry `proof: not-applicable`.

- Narrowed claims kept intentionally:
  `thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest`
  is stated as the explicit pure-pattern realization needed downstream rather
  than the source's full width-normalized coherence theorem;
  `thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement`,
  `thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest`,
  and the `P_5` iterative lemmas package the source numerics qualitatively as
  existential polynomial-width or linear-size outcomes instead of reproducing
  every exact exponent;
  these weakenings are source-faithful and sufficient for the in-batch
  downstream deductions actually authored here.

- Dropped claims:
  none from the batch manifest.

- Blockers:
  none encountered in authoring;
  the main work was canonical precheck normalization of proof-row numbering and
  single-line step formatting, which was applied before the final rerun.

- Validation results on authored bytes:
  `node tools/tsx-run.mjs tools/precheck.mts <batch-8 item files>`
  -> `45 checked, 0 failing — all clean`.
  `node -e "JSON.parse(...)" research/frontier-26-batch-8.proof-contracts.json`
  -> `proof-contracts-json: ok`.
  `node tools/content-policy.mjs research/frontier-26-batch-8.pages.json`
  -> `content-policy: 47 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed and ended with `OK`, with only the repository's standing
  `redundant-prereq` advisories outside this batch.
