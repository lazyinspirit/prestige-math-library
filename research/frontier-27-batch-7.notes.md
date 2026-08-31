# frontier-27 · Beta · batch-7 notes — `small-graph-erdos-hajnal-consequences` · `iterative-restriction-and-comb-extraction-lemmas`

Run `frontier-27`, batch `7`, two A/B pairs, category `combinatorics`.
Author: Beta. Session date: Monday, August 31, 2026.

Artifacts owned by this dispatch:

- `research/frontier-27-batch-7.pages.json`
- `research/frontier-27-batch-7.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or any plan structure outside batch `7`.

## 1. Control files and live run context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
prompt `research/frontier-27-dispatch/beta-batch-7.prompt.md`, the seed
manifest `research/frontier-27-batch-7.pages.json`, the step-0 receipt
`research/frontier-27-step0-notes.md`, the cited design block in
`research/plan-combinatorics-and-categories.md`, and the source/correction
ledger in `§16.5` of that design file.

Per `AGENTS.md`, I also checked the live controller rather than trusting older
resume prose:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`
  recomputed from disk and reported **run `frontier-23`** at author stage as of
  Thursday, August 28, 2026, not `frontier-27`.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-27-batch-7.pages.json research/frontier-27-dispatch/beta-batch-7.prompt.md`
  showed only older autopilot history and no batch-local frontier-27 override on
  disk.

I treated that as workflow-state context to record here, not as a batch-local
repair target. The explicit dispatch, the on-disk frontier-27 batch skeleton,
and the no-workflow-edits rule together mean the right move is to proceed on the
named batch artifacts and leave `.autopilot/` alone.

## 2. Design, drift, and explicit corrections

### Controlling design material

The dispatch points to the pair rows at:

- `research/plan-combinatorics-and-categories.md:3910`
- `research/plan-combinatorics-and-categories.md:3911`

Those rows are only the pair table, so the controlling instructions beyond the
one-line scope are the surrounding global design text in `§16.1-§16.5`. The
important preserved decisions for this batch are:

- B pages check the named figures by finite adjacency data rather than by prose
  paraphrase.
- Later pages in the six-vertex extension route must not be left without names
  for `E`, `Bird`, `co-E`, `co-Bird`, `H^+/H^-`, or `H_0,\dots,H_5`.
- The correction ledger in `§16.5` is normative whenever the target paper's
  printed text is incomplete or slightly wrong.

### Design-vs-spec drift

There is no order or prerequisite drift to adjudicate inside this batch:

- page `421/422` matches the spec at order `421/422` with requires
  `star-expansions-and-erdos-hajnal`,
  `iterative-sparsification-and-the-five-vertex-path`
- page `423/424` matches the spec at order `423/424` with requires
  `iterative-sparsification-and-the-five-vertex-path`

### Explicit source corrections applied

I carried forward three corrections from the design ledger:

- Lemma `2.7`'s first size outcome needs the missing `|G|` factor.
- Theorem `1.7` needs its complement notation restored.
- The upstream `GT-1` amendment moving the bull / `E` / `Bird` edge-list
  definitions earlier is still not on disk, so page `421` now carries local
  fallback definition items for `E`, `co-E`, `Bird`, and `co-Bird` instead of
  leaving later pages without graph names.

## 3. Scaffold shape and route choices

The scaffold now has:

- `small-graph-erdos-hajnal-consequences` (A): **13 items**
- `small-graph-erdos-hajnal-consequences-examples` (B): **6 items**
- `iterative-restriction-and-comb-extraction-lemmas` (A): **5 items**
- `iterative-restriction-and-comb-extraction-lemmas-examples` (B): **4 items**

No A page is close to the 60-item split gate, so no split is proposed.

### Page 421

Important decisions:

- I added direct single-graph corollaries for `P_4` and the bull, so the later
  five-vertex and six-vertex consequences do not have to keep unpacking earlier
  class theorems.
- I classified the prime five-vertex graphs directly from a fifth-vertex-over-
  `P_4` case split instead of importing the broader Habib-Paul extension
  theorem, because the page only needs the five-vertex inventory.
- I used the source-local names `left/right six-vertex prime H-graph`, because
  the papers draw those graphs but do not give them stable standard names.
- I added `H^+/H^-` and `H_0,\dots,H_5` definition items now because later pages
  `425` and `437` need those graphs before the final `E` / `Bird` theorems
  exist.
- I also added `cor-the-h-zero-graph-has-the-erdos-hajnal-property`, because
  the later proof of Lemma `6.3` starts from that fact.

### Page 423

Important decisions:

- I did **not** duplicate source Lemmas `2.4`, `2.5`, or `2.8`. They are
  already authored earlier in the run under the ids:
  - `thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs`
  - `thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade`
  - `thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades`
- I added `def-leaf-reducible-finite-family` on page `423`, because Lemma `2.7`
  uses the term and page `425` comes later in the reading order.
- I added the generalized Claim `5.2.1` lemma, because Lemma `2.10` genuinely
  needs the sparse-pair extraction **before** the old `\overline{P_5}`-specific
  purification step, and the source proof does not use the omitted
  `\overline{P_5}`-free hypothesis there.
- I kept Lemma `2.9` as one direct multiplicative iteration item rather than
  exploding it into bookkeeping remarks or padded corollaries.

## 4. Source set actually read

### For `small-graph-erdos-hajnal-consequences`

I recorded four verified sources:

1. `https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf`
2. `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`
3. `https://arxiv.org/pdf/2307.06455`
4. `https://arxiv.org/pdf/2606.06258v2`

What each source is doing:

- Chudnovsky's survey anchors the `P_4`, bull, and prime-five-vertex inventory.
- Nguyen's notes are the pair's qualifying lecture-note treatment and
  independently restate the small-graph and first six-vertex context.
- `Induced subgraph density. IV` provides the two six-vertex prime figures in
  class `H` and the broader theorem containing them.
- `Erdős-Hajnal beyond the five-vertex path` provides the current small-graph
  consequence paragraph, Figure 2's relabelling of the two six-vertex graphs,
  the `E` / `Bird` / complement figures, the `H^+/H^-` paragraph, and the
  `H_0,H_1,H_5` chain.

### For `iterative-restriction-and-comb-extraction-lemmas`

I recorded five verified sources:

1. `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`
2. `https://arxiv.org/pdf/2606.06258v2`
3. `https://arxiv.org/html/2312.15333v2`
4. `https://arxiv.org/pdf/2307.06455`
5. `https://arxiv.org/pdf/2312.15572`

What each source is doing:

- Nguyen's notes satisfy the lecture-note requirement and expose the iterative
  sparsification route as a coherent sectioned story.
- The target paper gives the exact batch scope: leaf-reducibility, Lemmas
  `2.4`, `2.5`, `2.7`-`2.10`, and the correction points.
- The `P_5` paper supplies the earlier Theorem `6.1`, Theorem `7.4`, Lemma
  `5.2`, Claim `5.2.1`, and Lemma `5.3` that the target paper is abstracting.
- The leaf-extension paper supplies Lemma `5.1`, which underlies the
  leaf-reducible sparse lemma.
- The bounded-VC paper supplies Lemma `3.2`, the source for the multiplicative
  iteration lemma.

## 5. URL handling and normalization choices

### Reused exact-url receipts

I reused exact-url `fetch_verified` data already present elsewhere in the repo
for:

- `EHsurvey.pdf`
- `ehnotes.pdf`
- `arxiv.org/pdf/2307.06455`
- `arxiv.org/pdf/2606.06258v2`
- `arxiv.org/html/2312.15333v2`

### Manual receipt

`https://arxiv.org/pdf/2312.15572` had no exact-url repo receipt. I reopened it
in the web reader on Monday, August 31, 2026 and recorded the minimal manual
receipt I could honestly verify from that read:

- `{"at":"2026-08-31T07:23:09Z","kind":"pdf","pages":12}`

Every retained coverage row is tied to source text or figures I actually
re-opened during this pass.

### Lemma 2.7 normalization

The target paper prints Lemma `2.7` as a one-line family statement, but the
cited supplier Lemma `5.1` is an ordered-graph small-parameter lemma. The
scaffold therefore plans the proof honestly:

- use the supplier lemma in the regime it really proves,
- use the reduced family's virality directly outside that threshold, and
- keep the corrected `|G|` factor explicit.

I did **not** silently treat the supplier as proving more than it states.

## 6. Known limits and step-5 risks

- The missing upstream `GT-1` edge-list move means page `421` now holds local
  fallback figure definitions. If the lead later repairs `GT-1`, reconcile the
  homes with aliases or a directed migration rather than publishing two
  competing canonical figure ids.
- The left/right six-vertex prime graphs still have only source-local names. If
  the owner later wants conventional names, change them via aliases, not by
  replacing the current ids.
- Lemma `2.7` will need the most care at authoring time: the printed target
  theorem compresses an ordered-graph source lemma, a virality conversion, and
  the corrected size factor into one line.
- Page `423` intentionally omits the note-after-`2.8` anti-complete variant as a
  separate item because no later page in this run depends on it. If a later
  author wants that exact variant, they should either cite page `407`'s stronger
  sparse-or-complete theorem or add the tiny corollary then.

## 7. Validator checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-7.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-7.coverage.json
node tools/validate-plan.mjs /tmp/frontier-27-batch-7-spliced-plan.json
git diff --check -- research/frontier-27-batch-7.pages.json research/frontier-27-batch-7.coverage.json research/frontier-27-batch-7.notes.md
```

Validation results are appended below after execution.

## 8. Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-7.coverage.json`
  completed on Monday, August 31, 2026 with one warning and no errors:
  `coverage-checklist: 2 page(s), 59 harvested result(s), 0 error(s), 1 warning(s)`.
  The warning is:
  `coverage-low-yield [iterative-restriction-and-comb-extraction-lemmas]: 7/23 harvested results scaffolded`.
  I kept it, because page `423` deliberately avoids duplicating source Lemmas
  `2.4`, `2.5`, and `2.8`, which are already authored earlier in the run.

- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  passed:
  `content-policy: 449 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-7.coverage.json`
  passed:
  `source-fetch-check: 9/9 source(s) fetch-verified`.

- A local Node splice wrote the batch-aware temporary plan to:
  `/tmp/frontier-27-batch-7-spliced-plan.json`.

- `node tools/validate-plan.mjs /tmp/frontier-27-batch-7-spliced-plan.json`
  passed on the updated splice. The visible output still contains the
  repository-wide `redundant-prereq` notes outside this batch, and ends with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 598 page(s) with item lists.`

- `git diff --check -- research/frontier-27-batch-7.pages.json research/frontier-27-batch-7.coverage.json research/frontier-27-batch-7.notes.md`
  passed with no whitespace or patch-format errors.

## Step-3 fix pass

Run on Monday, August 31, 2026, against Alpha group `d`'s stable review file
`research/frontier-27-alpha-d-step3-scaffold-review.md`.

- Finding id: none issued for batch `7` page
  `small-graph-erdos-hajnal-consequences` in the stable review file.
  Disposition: accepted as `sufficient`; no pushback and no further manifest or
  coverage edit was needed in this pass.
  Evidence: the stable review's verdict row says page `421` still matches the
  small-graph design boundary, its deferred later-route results still land on
  exact current pages `409`, `437`, and `441`, and every current A-page item
  has a coverage carrier. The live scaffold still reflects that boundary:
  `research/frontier-27-batch-7.pages.json` keeps only the through-five-vertex
  inventory, the two prime six-vertex `H` figures, the `E` / Bird figure
  definitions, `H^+` / `H^-`, `H_0,\dots,H_5`, and the local `H_0`
  consequence; `research/frontier-27-batch-7.coverage.json` still carries the
  corresponding included and deferred rows with the same destinations.
  Changed scaffold record: no additional edit in
  `research/frontier-27-batch-7.pages.json` or
  `research/frontier-27-batch-7.coverage.json`; this notes file only.

- Finding id: none issued for batch `7` page
  `iterative-restriction-and-comb-extraction-lemmas` in the stable review file.
  Disposition: accepted as `sufficient`; no pushback and no further manifest or
  coverage edit was needed in this pass.
  Evidence: the stable review's verdict row says the page-423
  `coverage-low-yield` warning is explained by deliberate reuse of the
  already-published carriers for source Lemmas `2.4`, `2.5`, and `2.8`, with
  the current local items plus the canonical Claim `5.2.1` bridge closing the
  reusable authoring route. The live canonical section of
  `research/frontier-27-batch-7.coverage.json` still records `Claim 5.2.1 with
  the unused co-P_5-free hypothesis removed` as the included carrier for
  `lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair`,
  while the harvested rows for Lemmas `2.4`, `2.5`, and `2.8` remain marked
  `already-published`. The rerun
  `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-7.coverage.json`
  returned the same expected warning and no errors:
  `coverage-checklist: 2 page(s), 59 harvested result(s), 0 error(s), 1 warning(s)`.
  Changed scaffold record: no additional edit in
  `research/frontier-27-batch-7.pages.json` or
  `research/frontier-27-batch-7.coverage.json`; this notes file only.

- Current validator and source-verification evidence.
  Disposition: recorded.
  Evidence: I reopened the six unique recorded source URLs in the web reader on
  Monday, August 31, 2026:
  `https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf`,
  `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`,
  `https://arxiv.org/pdf/2307.06455`,
  `https://arxiv.org/pdf/2606.06258v2`,
  `https://arxiv.org/html/2312.15333v2`,
  and `https://arxiv.org/pdf/2312.15572`.
  On current bytes:
  `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-7.coverage.json`
  -> `source-fetch-check: 9/9 source(s) fetch-verified`;
  `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  -> `content-policy: 449 scoped item(s), 0 error(s), 0 warning(s)`;
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, ending with the normal `OK` success line and only the standing
  repo-wide `redundant-prereq` advisories;
  `node tools/validate-plan.mjs /tmp/frontier-27-batch-7-spliced-plan.json`
  -> exit `0`, ending with `OK — declared page order is acyclic and
  consistent; no item-level cycles, forward references, B-page dependencies,
  or unresolved ids among the 598 page(s) with item lists.`
  Shell-side liveness remains environment-blocked rather than content-blocked:
  `node tools/url-sweep.mjs --coverage research/frontier-27-batch-7.coverage.json --out /tmp/frontier-27-batch-7-url-liveness.json --recover --fail-on-dead`
  exited `1` with `url-sweep: 0/6 live; 6 failed; 0 recoverable from the
  archive; 0 suspect`, and every failure was a DNS error of the form
  `curl: (6) Could not resolve host`.
  Changed scaffold record: this notes section only.

## Step-5 authoring

Authoring date: Monday, August 31, 2026.

- Authored the A page `small-graph-erdos-hajnal-consequences`, the B page
  `small-graph-erdos-hajnal-consequences-examples`, the A page
  `iterative-restriction-and-comb-extraction-lemmas`, the B page
  `iterative-restriction-and-comb-extraction-lemmas-examples`, all 28 planned
  batch items, and the batch contract artifact
  `research/frontier-27-batch-7.proof-contracts.json`.
- A-page authored ids:
  `cor-the-four-vertex-path-has-the-erdos-hajnal-property`,
  `thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property`,
  `cor-the-bull-graph-has-the-erdos-hajnal-property`,
  `lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement`,
  `thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property`,
  `def-left-six-vertex-prime-h-graph`,
  `def-right-six-vertex-prime-h-graph`,
  `cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property`,
  `def-e-graph-and-co-e-graph`,
  `def-bird-graph-and-co-bird-graph`,
  `def-h-plus-and-h-minus-for-two-special-vertices`,
  `def-h-zero-through-h-five`,
  `cor-the-h-zero-graph-has-the-erdos-hajnal-property`,
  `def-leaf-reducible-finite-family`,
  `lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair`,
  `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph`,
  `lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold`,
  `lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair`.
- B-page authored ids:
  `ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull`,
  `ex-the-right-six-vertex-prime-h-graph-is-the-complement-of-the-left-one-and-is-prime`,
  `ex-the-e-graph-and-co-e-graph-by-adjacency`,
  `ex-the-bird-graph-and-co-bird-graph-by-adjacency`,
  `ex-h-zero-is-the-five-wheel`,
  `ex-h-one-and-h-five-arise-by-the-prescribed-leaf-attachments`,
  `ex-the-five-vertex-path-is-leaf-reducible`,
  `ex-a-nearly-covered-sparse-pair-at-small-parameters`,
  `ex-a-numeric-run-of-the-lemma-two-nine-iteration`,
  `ex-a-four-tooth-comb-with-an-external-complete-vertex`.

### Provenance rationale

- I tagged the finite graph inventories, the named six-vertex figures, and the
  direct small-graph Erdős-Hajnal consequences as `literature-derived` where
  the authored statement matches the retained survey or paper result up to the
  library's notation.
- I tagged the generalized Claim `5.2.1` carrier, the leaf-reducible
  consequence lemma, the comb-outcome lemma, and the numeric/example packaging
  items as `ai-altered` where the library statement deliberately normalizes the
  source to the route this run actually uses.
- I tagged every local proof and verification as `ai-generated`; the proof text
  is new on-disk derivation, not quoted source prose.
- No batch-7 statement uses `ai-generated`, so no authored dependency violates
  the schema rule against generated dependency targets.

### Narrowed or adjusted claims

- I kept the canonical Step-3 normalization of Claim `5.2.1`: the new item
  `lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair`
  removes the unused `\overline{P_5}`-free hypothesis and proves exactly the
  graph-class-free sparse-pair conclusion later pages consume.
- For `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph`,
  I routed the proof through the current library's leaf-deletion-to-virality
  theorem and the finite-family Erdős-Hajnal/polynomial-Rödl equivalence, so
  the second outcome is forced on $\mathcal F$ itself after a leaf-reducible
  witness is fixed. That keeps the item honest on current library dependencies
  instead of treating an $\mathcal F$-free graph as automatically
  $\mathcal F'$-free or importing the ordered-graph supplier theorem as an
  unproved local fact.
- For `lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair`,
  the upper comb-length bound is written as `\lceil x^{-2}\rceil`, matching the
  library's existing hitting-set lemma. I did not claim the sharper source
  upper bound without a local carrier proving it.
- No planned item id was dropped, and no forward reference was introduced.

### Canonical precheck repair applied

- The first `precheck` pass failed on all 21 proof-bearing items because the
  authored proof rows used wrapped paragraphs and a few display blocks. I
  adopted the canonical repair by flattening every numbered proof row to a
  single tagged line and, where the checker required it, adopting its preferred
  phase ordering for the prime-five classification and the two longer iterative
  lemmas. No claim changed in that repair; only the stored proof-row format and
  numbering changed.

### Blockers

- None at Step 5 on current bytes.

### Checks run on current bytes

- `node tools/tsx-run.mjs tools/precheck.mts $(node - <<'NODE' ...batch-7 item paths... NODE)`
  Result after the canonical repair: `21 checked, 0 failing — all clean`.
- `node tools/regen-contract-entries.mjs research/frontier-27-batch-7.proof-contracts.json $(node -e "const d=require('./research/frontier-27-batch-7.proof-contracts.json'); console.log(d.scope.join(' '));")`
  Result: `research/frontier-27-batch-7.proof-contracts.json: regenerated 21, skipped 0`.
- `node tools/proof-contract.mjs research/frontier-27-batch-7.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 3 warning(s), 21/21 item(s) checked`.
  The warnings are the nonfatal `shotgun-bracket` notices on
  `thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property`,
  `lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement`,
  and `thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property`;
  I left them because the current case-split proofs are truthful and the gate
  remains strict-clean.
- `node tools/content-policy.mjs research/frontier-27-batch-7.pages.json`
  Result: `content-policy: 28 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs /tmp/frontier-27-batch-7-spliced-plan.json`
  Result: exit `0`, ending with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 598 page(s) with item lists.`
  The visible output still includes only the repository's standing
  `redundant-prereq` advisories outside this batch.
- `git diff --check -- research/frontier-27-batch-7.proof-contracts.json research/frontier-27-batch-7.notes.md ...batch-7 item/page files...`
  Result: clean.
