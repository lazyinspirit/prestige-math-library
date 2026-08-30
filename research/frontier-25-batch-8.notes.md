# frontier-25 · Beta · batch-8 notes — `the-five-cycle-and-erdos-hajnal`

Run `frontier-25`, batch `8`, one A/B pair, category `combinatorics`.
Author: Beta. Session date: August 30, 2026.

Artifacts owned by this dispatch:

- `research/frontier-25-batch-8.pages.json`
- `research/frontier-25-batch-8.coverage.json`
- this file

I did not edit plan structure, workflow state, published library content, or
another batch artifact.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
`research/frontier-25-beta-8.task.md`, the dispatch prompt
`research/frontier-25-dispatch/beta-batch-8.prompt.md`, the seed manifest
`research/frontier-25-batch-8.pages.json`, and the controlling design material
in `research/plan-combinatorics-and-categories.md`.

I also checked the live autopilot state with:

- `node tools/autopilot/bin/autopilot.mts status`

At the time of that check, `frontier-25` was running with stage `1-drift`
still in flight and stage `1-scaffold` not yet credited with any batch
coverage.

## 2. Controlling design and design/spec drift

### Controlling design material

The generated task points at line `3907`, which is the `16.2` row for
`415/416`, but the controlling design for this pair is wider than that one row.
I treated the following design material as binding together:

- `§16.2` row `415/416`, which assigns the pair and says the page owns the full
  `C_5` Erdős-Hajnal theorem and its comb/blockade recurrence
- `§16.3`, which explicitly says the `C_5` and star-expansion proofs must stay
  separate so the cograph/perfect-pattern and pure-pair machinery does not get
  duplicated across the two pages
- `§16.5`, which names the exact source family to read and the correction
  ledger that future scaffold work must respect

The resulting route choice is:

- page `415` keeps the paper's separate Section `4` proof of the `C_5` theorem
- it internalizes the two missing technical inputs from Sections `2` and `3`
  because otherwise the proof would rest on an unestablished source theorem
- it does **not** absorb the later Section `6` star-expansion consequences,
  which remain the responsibility of page `417`

### Design/spec drift

For this pair, the design row and `research/plan-spec.json` agree on:

- A page id `the-five-cycle-and-erdos-hajnal`
- B page id `the-five-cycle-and-erdos-hajnal-examples`
- orders `415/416`
- category `combinatorics`
- prerequisite pages
  `cographs-perfect-patterns-and-pure-pairs` and
  `bull-free-graphs-and-the-erdos-hajnal-property`

So there is **no design-vs-spec drift** to adjudicate locally.

### Source-side numbering drift, recorded but not adjudicated

The design prose calls the `C_5` theorem "Theorem `1.5`". In the live source I
read on August 30, 2026, `https://arxiv.org/html/2102.04994v1` numbers the
`C_5` theorem as `1.4`, while `1.5` is the forest/complement result. I treated
the theorem statement and the section route as authoritative and recorded this
numbering mismatch here so later authoring does not chase the wrong theorem
number.

## 3. Scaffold shape and page decisions

The scaffold now has:

- `the-five-cycle-and-erdos-hajnal` (A): **9 items**
- `the-five-cycle-and-erdos-hajnal-examples` (B): **4 items**

The A page is far below the `60`-item split threshold, so no split is needed.

The A-page spine is:

1. the paper's bipartite comb lemma, with its internal layer estimate exposed
   as a separate lemma because the proof genuinely uses it
2. the rooted stable-tooth comb configuration extracted from the key
   `tau`-critical theorem
3. the deterministic size-trimming lemma and the resulting bounded-degree
   Rödl corollary
4. the local five-cycle witness lemma for a cross-edge between two comb blocks
5. the polynomial `kappa` theorem for `C_5`-free graphs and the closing
   Erdős-Hajnal corollary

The B page stays narrow:

- one clean rooted-comb example
- one explicit cross-edge example producing an induced `C_5`
- one counterexample and one false statement separating the bare comb
  definition from the extra anticomplete-block conclusion used in the A-page
  proof

## 4. Source set actually read

I recorded two independent treatments:

1. Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl,
   *Erdős-Hajnal for graphs with no 5-hole*:
   `https://arxiv.org/html/2102.04994v1`
2. Tung H. Nguyen,
   *Notes on Recent Work on the Erdős-Hajnal Conjecture*:
   `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`

This satisfies the standing source rule:

- two independent treatments
- an eligible primary treatment
- a full lecture-note treatment with harvestable section structure

### What each source is doing in the scaffold

- The primary `5`-hole paper is the source for every newly scaffolded A-page
  item: the bipartite comb theorem, the key `tau`-critical comb theorem, the
  deterministic prescribed-size lemma, the bounded-degree Rödl corollary, and
  the direct `C_5` proof.
- Nguyen's notes are the independent lecture-note check on the route. They
  confirm the solved-five-vertex context, restate Rödl in a modern notes
  format, and explicitly sketch the density-to-maximum-degree passage that page
  `415` isolates as its own corollary.
- I also re-read Chudnovsky's survey for context on August 30, 2026, but did
  not keep it in the coverage ledger because the two recorded rows already
  satisfy the source gate and the survey did not add a separate scaffolded item
  beyond that contextual placement.

## 5. Local scaffold decisions

### Decision 1 — page 415 owns Sections 2-4, not Sections 5-8

The design row mentions the comb/blockade recurrence, but the source itself
states in Section `4` that the `C_5` theorem has an easier separate proof than
the stronger material later in the paper. I followed that separation exactly:

- page `415` internalizes the two technical ingredients needed to make the
  direct proof self-contained
- page `417` remains responsible for the star-expansion route and its later
  consequences

### Decision 2 — the internal claim in Theorem 2.1 is a real scaffold item

The proof of source theorem `2.1` is not honest without its layer estimate.
That estimate is not just rhetorical bookkeeping: it is the only route from the
backwards "good tooth" argument to the global geometric-series bound on `|B|`.
So I scaffolded it as:

- `lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears`

instead of hiding it inside the theorem strategy.

### Decision 3 — the rooted comb data gets its own definition

The output of source theorem `3.1` is not merely a comb. It is a comb with:

- stable teeth
- an extra root vertex adjacent to all teeth
- that same root anticomplete to every block

Since the final `C_5` witness check uses exactly that extra structure, I
introduced `def-rooted-stable-tooth-comb` rather than repeating the same long
configuration sentence in every later statement.

### Decision 4 — the page proves the polynomial `kappa` theorem first

The source proof runs in the `kappa(G)=alpha(G)omega(G)` formulation. Because
page `413` already proved the equivalence between the `kappa`, cograph,
perfect-subgraph, and Erdős-Hajnal formulations, the clean scaffold is:

- first prove `thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound`
- then close with `cor-the-five-cycle-has-the-erdos-hajnal-property`

That keeps the contradiction proof aligned with the source instead of forcing an
unnatural direct homogeneous-set formulation mid-proof.

## 6. Known limits and step-5 risks

- The heaviest authored item will be
  `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb`.
  Its proof needs the `X_i`, `A_i`, `C_i`, and `D_i` bookkeeping kept sharply
  separated; if those sets are compressed in authoring, the contradiction no
  longer reads.
- The page deliberately does **not** absorb Section `5` blockades or the later
  star-expansion theorems. If a later pass tries to enrich page `415` with
  those results, that would contradict the design's explicit split-page choice.
- The false-statement example on the B page depends on keeping the distinction
  between a bare comb and a rooted stable-tooth comb explicit. If later
  authoring silently bakes anticomplete blocks into the definition of a comb,
  it will erase the point of that counterexample and break alignment with the
  paper.

## 7. Validator checklist

Commands required by the batch brief:

```bash
node tools/coverage-checklist.mjs research/frontier-25-batch-8.coverage.json --require-destination
node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-8.coverage.json --stamp
node tools/url-sweep.mjs --coverage research/frontier-25-batch-8.coverage.json --out /tmp/frontier-25-batch-8-url-liveness.json --recover --fail-on-dead
```

Results are appended below after execution.

## 8. Validator results

### Actual results run on August 30, 2026

- `node -e 'JSON.parse(...)'` on `research/frontier-25-batch-8.pages.json`
  -> `pages-json: ok`

- `node -e 'JSON.parse(...)'` on `research/frontier-25-batch-8.coverage.json`
  -> `coverage-json: ok`

- `node tools/coverage-checklist.mjs research/frontier-25-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 14 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 59 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> ended `OK` with the repository-wide `redundant-prereq` warning stream only.
  Final lines:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.`

- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-8.coverage.json --stamp`
  -> `source-fetch-check: 2/2 source(s) fetch-verified (0 newly stamped)`

- `node tools/url-sweep.mjs --coverage research/frontier-25-batch-8.coverage.json --out /tmp/frontier-25-batch-8-url-liveness.json --recover --fail-on-dead`
  -> failed mechanically:
  `url-sweep: 0/2 live; 2 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-25-batch-8-url-liveness.json`
  with:
  - `curl: (6) Could not resolve host: arxiv.org`
  - `curl: (6) Could not resolve host: web.math.princeton.edu`

## 9. Interpretation of the remaining source blocker

The scaffold gates that inspect the manifest and the harvest **passed**. The
only remaining red gate is `url-sweep`, and the evidence shows it is a
transport failure in the workspace shell rather than a dead-source finding:

- both recorded URLs were opened successfully through the web reader on August
  30, 2026 before the ledger was finalized
- `source-fetch-check --stamp` passed because the exact URLs already carried
  matching repository fetch receipts
- `coverage-checklist`, `content-policy`, and `validate-plan` all passed on the
  final bytes
- `url-sweep` failed at DNS resolution, not at HTTP retrieval, archive
  mismatch, or wrong-document verification

So the exact blocker is:

**The local shell on August 30, 2026 cannot resolve `arxiv.org` or
`web.math.princeton.edu`, so `url-sweep` cannot mint a live liveness receipt
even though the exact URLs are readable and already fetch-verified.**

I therefore did **not** re-source these rows. The recorded documents are still
the right documents for this scaffold; the unresolved issue is shell-side
liveness receipt generation, not mathematical source selection.

## Step-3 fix pass

Run date for this pass: Sunday, August 30, 2026.

Stable review input used on the current bytes:

- `research/frontier-25-alpha-c-step3-scaffold-review.md` is the authoritative
  Step-3 review for batch `8`.
- The only numbered group-`c` finding is `C6-1`, and Alpha assigns it to batch
  `6` page `monoidal-categories-and-monoidal-functors`.
- The same review separately marks batch `8`
  `the-five-cycle-and-erdos-hajnal` as `sufficient`, saying that the direct
  Section `4` route is scaffolded deeply enough and that the scope cuts are
  honest.

- Finding `C6-1` disposition: pushed back as non-applicable to batch `8`.
  Evidence: Alpha's numbered defect is page-specific to batch `6`'s missing
  Mac Lane `1963` source, while the batch-8 review paragraph raises no batch-8
  defect id and instead upholds the current `C_5` scaffold. Changed scaffold
  record: none in `research/frontier-25-batch-8.pages.json` or
  `research/frontier-25-batch-8.coverage.json`; this fix pass changes only this
  notes file.

Source verification for this fix pass:

- I re-opened `https://arxiv.org/html/2102.04994v1` in the web reader on
  Sunday, August 30, 2026 and re-checked the exact harvested locator ranges:
  the introduction's four equivalent Erdős-Hajnal formulations at HTML lines
  `109-129`; Section `2` and Theorem `2.1` at lines `130-192`; Section `3` and
  Theorem `3.1` at lines `193-281`; and Section `4` with Theorems `4.2-4.4` at
  lines `282-318`. The source-side numbering drift recorded earlier still
  stands on the live document: the `C_5` theorem is numbered `1.4`, not `1.5`.
- I re-opened `https://web.math.princeton.edu/~tunghn/ehnotes.pdf` in the web
  reader on Sunday, August 30, 2026 and re-checked the exact harvested ranges:
  PDF pp. `1-3` still contain the solved prime-five-vertex bullet list with
  `C_5` credited to Chudnovsky-Scott-Seymour-Spirkl and Theorem `1.3` (Rödl)
  with its proof-sketch passage; PDF pp. `7-8` still contain Conjecture `3.2`
  and Theorem `3.4`, matching the two recorded out-of-scope dispositions.
- Changed scaffold record: none; both live URLs still resolve to the harvested
  documents at the recorded locator ranges, so no URL recovery, `original_url`
  rewrite, or coverage-row rewrite was warranted.

Validator rerun on current bytes:

- `node -e "JSON.parse(...)"` on `research/frontier-25-batch-8.pages.json`
  -> `pages-json: ok`
- `node -e "JSON.parse(...)"` on `research/frontier-25-batch-8.coverage.json`
  -> `coverage-json: ok`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 14 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-8.coverage.json`
  -> `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> ended `OK` on the current bytes with only the repository's standing
  out-of-batch `redundant-prereq` advisories.

## Step-5 authoring

Run date for this pass: Sunday, August 30, 2026.

Authored draft pages:

- `library/combinatorics/the-five-cycle-and-erdos-hajnal.md`
- `library/combinatorics/the-five-cycle-and-erdos-hajnal-examples.md`

Authored draft items:

- `lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears`
- `thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side`
- `def-rooted-stable-tooth-comb`
- `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb`
- `lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree`
- `cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree`
- `lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle`
- `thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound`
- `cor-the-five-cycle-has-the-erdos-hajnal-property`
- `ex-a-rooted-stable-tooth-comb-with-two-teeth`
- `ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle`
- `cex-a-comb-can-have-an-edge-between-two-blocks`
- `fs-every-comb-has-pairwise-anticomplete-blocks`

Authored batch proof-contract artifact:

- `research/frontier-25-batch-8.proof-contracts.json`

Provenance rationale used on the final bytes:

- The source theorems and the final Erdős-Hajnal corollary stay
  `literature-derived` when the local statement matches the source route
  materially.
- The extracted layer lemma, the rooted stable-tooth comb definition, the
  cross-edge-to-$C_5$ lemma, the corrected sparse-subgraph lemma, the
  sharpened bounded-degree Rödl corollary, and the small witness/counterexample
  items are marked `ai-altered`, because they package or correct source
  material into the library's local item granularity rather than reproducing a
  source theorem verbatim.
- All local proofs and verifications authored in this pass are
  `provenance.proof: ai-generated`.
- Every page and item authored here remains `status: draft`, and no
  `verification.judge` record was written onto new or materially changed
  content.

Narrowed or corrected claim shapes on purpose:

- `lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree`
  does **not** keep the source theorem's literal strict bound. The source
  statement/proof pair for theorem `4.2` is not honest at `m=1`, and the
  averaging argument supports the uniform bound
  `max degree <= 4 epsilon (m-1)` for `m >= 1`. I authored that corrected
  version and then propagated the resulting constant bookkeeping into
  `cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree`
  by using the edge-density parameter `epsilon/8`.
- `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb`
  is written in the monotone `tau_0` form, because the proof really establishes
  the theorem for every sufficiently small positive `tau`, and the final
  $C_5$ contradiction needs that honest shrink-to-smaller-`tau` step.

Dropped claims:

- None.

Blockers:

- None at Step 5.

Validators actually run on the final bytes:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears.md items/thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side.md items/thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb.md items/lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree.md items/cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree.md items/lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle.md items/thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound.md items/cor-the-five-cycle-has-the-erdos-hajnal-property.md items/ex-a-rooted-stable-tooth-comb-with-two-teeth.md items/ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle.md items/cex-a-comb-can-have-an-edge-between-two-blocks.md items/fs-every-comb-has-pairwise-anticomplete-blocks.md`
  -> `12 checked, 0 failing — all clean`
- `node tools/proof-contract.mjs research/frontier-25-batch-8.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 12/12 item(s) checked`
- `node tools/content-policy.mjs research/frontier-25-batch-8.pages.json`
  -> `content-policy: 13 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> final lines:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.`
  `NOTE: 727 planned page(s) carry no item list yet (marked * above). Their reading order is guaranteed; their item dependencies are not yet asserted, so re-run this after writing each page's items.`
