# frontier-29 · Beta · batch-15 notes — `generalized-niceness-and-reduction-outcomes`

Run `frontier-29`, batch `15`, one A/B pair, category `combinatorics`.
Author: Beta. Session date: Wednesday, September 2, 2026.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-29-batch-15.pages.json`
- `research/frontier-29-batch-15.coverage.json`
- this file

Per the batch brief, I edited only those three scaffold artifacts.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-29-dispatch/beta-batch-15.prompt.md`, the generated task
`research/frontier-29-beta-15.task.md`, the seed manifest
`research/frontier-29-batch-15.pages.json`, the controlling design material in
`research/plan-combinatorics-and-categories.md`, the live plan entries in
`research/plan-spec.json`, the published prerequisite pages
`library/combinatorics/leaf-reducibility-and-wonderful-families.md`,
`library/combinatorics/blockades-combs-and-pattern-graphs.md`, and
`library/combinatorics/iterative-sparsification-and-the-five-vertex-path.md`,
and the specific published items reused by this scaffold.

I also checked the live autopilot state with:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

On current disk, that command reports **`frontier-23`** in stage `5-author`,
not `frontier-29`. Because workflow state is out of scope and the dispatch
explicitly assigns `frontier-29`, I edited only the three
`research/frontier-29-batch-15.*` scaffold artifacts and did not try to steer
`.autopilot/`.

## 2. Controlling design and design/spec drift

### Controlling design material

For this pair the controlling design block is the combinatorics Section `16`
table row at lines `3912-3914`, together with the route constraints in
`16.3-16.5` at lines `3981-3991`.

### Design/spec drift recorded, not adjudicated

There is **no order or prerequisite drift** for this batch:

- the design table gives `427/428`
- `research/plan-spec.json` gives `427/428`
- both name `leaf-reducibility-and-wonderful-families` as the A-page
  prerequisite

I therefore followed the spec without any local adjudication note beyond this
confirmation.

## 3. Scaffold shape and split check

The scaffold now has:

- `generalized-niceness-and-reduction-outcomes` (A): **10 items**
- `generalized-niceness-and-reduction-outcomes-examples` (B): **3 items**

The A page is below the `60`-item split threshold, so **no split is proposed**.

## 4. Route choices

The A page follows the design instruction literally: generalized niceness first,
then the Section `3` reduction lemmas, split by outcome and by scale.

The scaffolded route is:

1. define generalized niceness for finite forbidden families
2. add the missing blockade-thinning bridge from source Lemma `2.6`
3. isolate the hard branch of Lemma `3.1` into
   `complete/weakly-sparse blockade -> complete subblockade or anticonnected
   thinning`, then
   `wonderful anticonnected blockade -> restricted subgraph or large
   anticomplete pair`
4. package those with the complement-sparse leaf-reducible branch as
   `lem-generalized-niceness-yields-four-reduction-outcomes`
5. add the missing anti-complete variant of source Lemma `2.8` and use it to
   author the three-outcome `cy`-restricted reduction of source Lemma `3.2`
6. add the missing restricted analogue of source Lemma `2.9`, author source
   Claim `3.3.1` as a separate helper, and then finish source Lemma `3.3`

Important local decisions:

- I did **not** collapse Lemmas `3.1-3.3` into three monolithic page items.
  The design explicitly says "decomposed by outcome and scale", and the
  published library does not already expose the exact bridge variants this
  section uses.
- I also did **not** mint a later-page Erdos-Hajnal conclusion here. The next
  pair `from-generalized-niceness-to-erdos-hajnal` owns source Lemmas
  `3.4-3.5/1.12`, and this scaffold stops where source Lemma `3.3` stops.

## 5. Missing bridge variants built locally

Three exact source variants needed by Section `3` are not currently exposed on
disk as published items, even though nearby source relatives are:

1. **Source Lemma 2.6 is not exposed as an item on current disk.**
   The current library has the later local-to-global blockade theorem
   `thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade`, but not the
   equal-subblock thinning step that converts weak sparsity to directional
   sparsity. I therefore scaffolded
   `lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity`.

2. **The anti-complete variant after source Lemma 2.8 is not exposed on disk.**
   The library already has
   `thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades`, matching the
   named statement of source Lemma `2.8`, but source line `318` immediately
   notes that the same proof works with `anti-complete` in place of `x-sparse`.
   Source Lemma `3.2` uses exactly that variant, so I scaffolded
   `cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade`.

3. **The restricted analogue of source Lemma 2.9 is not exposed on disk.**
   The library already has the sparse version
   `lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold`, but
   source Lemma `3.3` needs the same minimal-parameter iteration with
   `restricted` in place of `sparse`. I therefore scaffolded
   `lem-iterated-restricted-sparsification-reaches-the-target-scale`, using
   Nguyen's lecture notes as an independent treatment of the restricted form.

These are not plan-structure edits; they are batch-local closure repairs needed
to keep the page self-contained under the standing rule.

## 6. Source set actually recorded

I recorded three verified source rows for the A page:

1. Huang-Ju-Zhou, *Erdos-Hajnal beyond the five-vertex path*:
   `https://arxiv.org/html/2606.06258v2`
2. Nguyen-Scott-Seymour, *Induced subgraph density. VII. The five-vertex path*:
   `https://arxiv.org/html/2312.15333v2`
3. Tung H. Nguyen, *Notes on Recent Work on the Erdos-Hajnal Conjecture*:
   `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`

This satisfies the standing source rule:

- a direct primary paper treatment of the exact Section `3` lemmas
- an independent earlier paper treatment of the P5-specific analogue and the
  source's cited internal subroutines
- a full lecture-note treatment with section headings for the restricted
  iterative-sparsification pattern

What each source is doing:

- **Huang-Ju-Zhou** is the direct source for the generalized nice definition,
  Lemmas `3.1-3.3`, Claim `3.3.1`, source Lemma `2.6`, and the source note
  after Lemma `2.8` that licenses the anti-complete variant.
- **Nguyen-Scott-Seymour (P5)** supplies the earlier local-to-global blockade
  theorem and the exact P5 analogue of the three reduction stages, especially
  Claim `7.1.1`, Claim `7.1.2`, Lemmas `7.1-7.3`, and Theorem `7.4`.
- **Nguyen's lecture notes** supply an independent full-notes treatment of the
  restricted iterative-sparsification lemma in the exact style used by source
  Lemma `3.3`.

## 7. Source correction and convention notes

Two source-side issues matter here.

1. **The design's recorded Lemma 3.1 typo is real.**
   In the design ledger, line `3991` says "Lemma 3.1's D,D_i should be B,B_i".
   I verified that in the design-named target source
   `https://arxiv.org/html/2606.06258v2`, lines `424-431` still write
   `V(G)\setminus V(\mathcal B)` and then `Let Y be the set of vertices in D
   that is anti-complete to D_i`, where `D` is undefined and the surrounding
   proof has already switched to the refined blocks `B_i`.

   I also checked the current latest arXiv HTML version on **August 31, 2026**
   (`v3`), and the same local typo still persists there. The scaffold therefore
   follows the corrected reading the design already mandated:
   the final pair is built from the refined blocks `B_i`, and `Y` lies outside
   the refined blockade rather than inside an undefined `D`.

2. **The page keeps the design's blockade conventions.**
   A blockade is ordered, weak sparsity is symmetric, directional sparsity is
   not, and all graphs are finite, simple, and undirected. I reused the
   published convention items and did not mint a second convention remark here.

## 8. Fetch verification and source-liveness handling

Local network fetches from this runner are restricted, so I did not obtain local
byte stamps with `source-fetch-check --stamp`. Instead, I re-opened every
recorded source in the web reader and wrote durable manual receipts of the form

`fetch_verified: { at, kind, verified_via: "web-open", note }`.

That shape is already used elsewhere in this repo and is sufficient for the
scaffold-stage `source-fetch-check` gate that only verifies the presence of a
receipt.

The actual liveness and fetch gates were still run locally after the edit; their
results are recorded below.

## 9. Validator results

Green after the scaffold edit:

- `node -e "JSON.parse(...pages.json); JSON.parse(...coverage.json)"` ->
  `json-parse: ok`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-15.coverage.json` ->
  `coverage-checklist: 1 page(s), 30 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-15.coverage.json` ->
  `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json` ->
  `content-policy: 593 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` ->
  final line `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.`

Blocked locally:

- `node tools/url-sweep.mjs --coverage research/frontier-29-batch-15.coverage.json --out /tmp/frontier-29-batch-15.url-sweep.json --recover --fail-on-dead` ->
  `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect`

Exact failure mode on this runner:

- `https://arxiv.org/html/2312.15333v2` -> `curl: (6) Could not resolve host: arxiv.org`
- `https://arxiv.org/html/2606.06258v2` -> `curl: (6) Could not resolve host: arxiv.org`
- `https://web.math.princeton.edu/~tunghn/ehnotes.pdf` -> `curl: (6) Could not resolve host: web.math.princeton.edu`

This is a **local DNS/network blocker**, not a source-selection blocker:
all three URLs were re-opened successfully in the web reader during this
dispatch, and their manual `fetch_verified` receipts remain accurate. No
batch-local citation swap is justified from the local `url-sweep` failure
alone.

## Step-3 fix pass

Fix pass run on Wednesday, September 2, 2026 (Australia/Sydney local time)
against the current batch-15 scaffold bytes and the stable review in
`research/frontier-29-alpha-f-step3-scaffold-review.md`.

- Finding id: none issued for batch `15`.
  Disposition: accepted as a no-op fix pass; I did not alter the batch-15
  manifest or coverage harvest.
  Evidence: the stable group-`f` review marks
  `generalized-niceness-and-reduction-outcomes` as `sufficient`, says the
  current manifest already follows the design route literally, and states that
  the three missing bridge variants are now local and that the bounded-VC rows
  are honest exclusions rather than missing prerequisites.
  Changed scaffold record: `research/frontier-29-batch-15.notes.md` only.
  `research/frontier-29-batch-15.pages.json` and
  `research/frontier-29-batch-15.coverage.json` were re-read unchanged, and I
  re-opened the three recorded sources during this fix pass, so no URL
  recovery, harvest rewrite, dependency repair, or disposition change was
  required.

Validator recheck on Wednesday, September 2, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-15.coverage.json`
  -> `coverage-checklist: 1 page(s), 30 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-15.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  -> `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> ended in `OK`; the printed diagnostics were only the repository's
  standing out-of-batch `redundant-prereq` advisories
- `git diff --check -- research/frontier-29-batch-15.pages.json research/frontier-29-batch-15.coverage.json research/frontier-29-batch-15.notes.md`
  -> passed

## Step-5 authoring

Authoring run completed on Wednesday, September 2, 2026 (Australia/Sydney
local time) for batch `15` only.

Authored pages:

- `library/combinatorics/generalized-niceness-and-reduction-outcomes.md`
- `library/combinatorics/generalized-niceness-and-reduction-outcomes-examples.md`

Authored items:

- `def-generalized-nice-finite-family`
- `lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity`
- `lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning`
- `lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair`
- `lem-generalized-niceness-yields-four-reduction-outcomes`
- `cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade`
- `lem-cy-restricted-generalized-niceness-yields-three-outcomes`
- `lem-iterated-restricted-sparsification-reaches-the-target-scale`
- `lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph`
- `lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade`
- `ex-thinning-a-four-block-weakly-sparse-blockade-to-directional-sparse-subblocks`
- `ex-a-large-almost-pure-pair-extends-an-anticomplete-blockade`
- `ex-a-numeric-run-of-the-lemma-three-three-exponent-choice`

Proof-contract output authored:

- `research/frontier-29-batch-15.proof-contracts.json`

Provenance rationale kept on disk:

- The generalized-nice definition and the Section `3` reduction lemmas remain
  `literature-derived` at statement level because they follow the cited
  Huang-Ju-Zhou route directly.
- The two blockade bridge lemmas and the wonderful-blockade bridge are tagged
  `ai-altered` where the on-disk statement localizes the source claim to the
  exact form used later in this batch.
- The three B-page checks are tagged `ai-generated` with
  `generation.role: example`, and none is used as a dependency target.
- Every authored page and item remains `status: draft`; no judge stamp was
  added.

Narrowed or localized claims:

- `lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair`
  carries the explicit support bound `|V(\mathcal B)|<= y|G|`. This is the
  exact quantitative branch used inside
  `lem-generalized-niceness-yields-four-reduction-outcomes`, so I kept that
  dependence honest instead of silently claiming a larger theorem than the page
  uses.

Dropped claims:

- none

Blockers:

- none within batch `15`

Checks run on the authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity.md items/lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning.md items/lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair.md items/lem-generalized-niceness-yields-four-reduction-outcomes.md items/cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade.md items/lem-cy-restricted-generalized-niceness-yields-three-outcomes.md items/lem-iterated-restricted-sparsification-reaches-the-target-scale.md items/lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph.md items/lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade.md items/ex-thinning-a-four-block-weakly-sparse-blockade-to-directional-sparse-subblocks.md items/ex-a-large-almost-pure-pair-extends-an-anticomplete-blockade.md items/ex-a-numeric-run-of-the-lemma-three-three-exponent-choice.md`
  -> `12 checked, 0 failing -- all clean`
- `node tools/rendercheck.mjs items/def-generalized-nice-finite-family.md items/lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity.md items/lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning.md items/lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair.md items/lem-generalized-niceness-yields-four-reduction-outcomes.md items/cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade.md items/lem-cy-restricted-generalized-niceness-yields-three-outcomes.md items/lem-iterated-restricted-sparsification-reaches-the-target-scale.md items/lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph.md items/lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade.md items/ex-thinning-a-four-block-weakly-sparse-blockade-to-directional-sparse-subblocks.md items/ex-a-large-almost-pure-pair-extends-an-anticomplete-blockade.md items/ex-a-numeric-run-of-the-lemma-three-three-exponent-choice.md library/combinatorics/generalized-niceness-and-reduction-outcomes.md library/combinatorics/generalized-niceness-and-reduction-outcomes-examples.md`
  -> `OK -- 15 file(s)`
- `node tools/content-policy.mjs research/frontier-29-batch-15.pages.json`
  -> `content-policy: 13 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/proof-contract.mjs research/frontier-29-batch-15.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 12/12 item(s) checked`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> ended in `OK`; the printed diagnostics were only the repository's
  standing out-of-batch `redundant-prereq` advisories
