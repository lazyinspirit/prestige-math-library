# frontier-30 · Beta · batch-14 notes — `from-generalized-niceness-to-erdos-hajnal` · `property-star-and-comb-outcomes`

Run `frontier-30`, batch `14`, two A/B pairs, category `combinatorics`.
Author: Beta. Session date: Saturday, September 5, 2026 (Australia/Sydney
local time).

Artifacts owned by this batch at scaffold stage:

- `research/frontier-30-batch-14.pages.json`
- `research/frontier-30-batch-14.coverage.json`
- this file

Per the batch brief, I edited only those three scaffold artifacts.

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-30-dispatch/beta-batch-14.prompt.md`, the generated task
`research/frontier-30-beta-14.task.md`, the seed manifest
`research/frontier-30-batch-14.pages.json`, the run step-0 note
`research/frontier-30-step0-notes.md`, the controlling design material in
`research/plan-combinatorics-and-categories.md`, the live plan entries in
`research/plan-spec.json`, the published prerequisite pages
`library/combinatorics/generalized-niceness-and-reduction-outcomes.md`,
`library/combinatorics/iterative-restriction-and-comb-extraction-lemmas.md`,
`library/combinatorics/leaf-reducibility-and-wonderful-families.md`,
`library/combinatorics/blockades-combs-and-pattern-graphs.md`,
`library/combinatorics/iterative-sparsification-and-the-five-vertex-path.md`,
and the specific published items reused by this scaffold.

I also checked the live controller from disk rather than trusting any old
resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reports live run `frontier-23` at stage `5-author`.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-30-batch-14.pages.json research/frontier-30-dispatch/beta-batch-14.prompt.md research/frontier-30-beta-14.task.md`
  shows only standing historical autopilot commits and no batch-local workflow
  override on disk.

That is context to record, not something this batch is allowed to repair.

## 2. Controlling design and design/spec drift

### Controlling design material

For this batch the controlling design block is combinatorics Section `16` in
`research/plan-combinatorics-and-categories.md`, especially:

- the table rows at lines `3914-3915`
- the item-level route constraints in `16.3` and `16.4`
- the explicit source-correction note at line `3991`

### Design-vs-spec drift

There is **no order or prerequisite drift** on current disk for either pair:

- the design gives `429/430` for `from-generalized-niceness-to-erdos-hajnal`
  and `431/432` for `property-star-and-comb-outcomes`
- `research/plan-spec.json` and the seed manifest give the same orders
- both design and spec name
  `generalized-niceness-and-reduction-outcomes` as the A-page prerequisite for
  both A pages

I therefore followed the spec without any local adjudication.

## 3. Scaffold shape and split check

The scaffold now has:

- `from-generalized-niceness-to-erdos-hajnal` (A): **3 items**
- `from-generalized-niceness-to-erdos-hajnal-examples` (B): **3 items**
- `property-star-and-comb-outcomes` (A): **8 items**
- `property-star-and-comb-outcomes-examples` (B): **4 items**

Both A pages are far below the `60`-item split threshold, so **no split is
proposed**.

## 4. Route choices

### Page 429 — from generalized niceness to Erdős-Hajnal

The design says this page owns Rödl initialization and Lemmas `3.4-3.5/1.12`,
not the earlier Section `3` reductions. I kept that literally.

The route is:

1. reuse page `427` for generalized niceness and the constant-scale
   restricted-set / blockade / clique-stable alternative
2. add one new Rödl-initialization lemma for source Lemma `3.4`
3. expose source Claim `3.5.1` as its own item, because it is the load-bearing
   hypothesis check for the published blockade-to-restricted theorem
4. end with the actual Erdős-Hajnal theorem item for leaf-reducible wonderful
   generalized nice families

Important non-choices:

- I did **not** re-mint page `427` material from source Lemmas `3.1-3.3`.
- I did **not** collapse Claim `3.5.1` into prose. The design explicitly asks
  these reduction pages to expose the intermediate termination and comparison
  claims they genuinely use.

### Page 431 — property (*) and comb outcomes

The design says this page owns property `(*)`, the comb alternatives, and
Lemmas `4.1-4.5/1.13`. I kept the page focused exactly there and did not pull
forward Section `5`.

The route is:

1. define property `(*)` explicitly
2. author the five-outcome restricted comb lemma (`4.1`)
3. author the long `x`-sparse-or-complete blockade upgrade (`4.2`)
4. keep Claim `4.3.1` explicit, since it is the exact iterative-sparsification
   hypothesis check
5. author the constant-scale four-outcome theorem (`4.3`)
6. add the Rödl-initialized version that removes the constant-scale assumption
   (`4.4`)
7. keep Claim `4.5.1` explicit, since it is the local pure-or-sparse blockade
   hypothesis needed for the published local-to-global blockade theorem
8. end with the generalized-niceness theorem (`4.5/1.13`)

Important non-choices:

- I did **not** move the structural criterion `5.1/1.14` onto this page. The
  design assigns that to the next A/B pair.
- I did **not** downgrade Claims `4.3.1` and `4.5.1` to inline prose. They are
  exactly the kind of exponent-transfer claims the design says to expose.

## 5. Source set actually recorded

I recorded three verified open sources and harvested them where each page
actually uses them:

1. `https://arxiv.org/html/2606.06258v2`
   Shenwei Huang, Yiao Ju, and Yidong Zhou,
   *Erdős-Hajnal beyond the five-vertex path*
2. `https://arxiv.org/html/2312.15333v2`
   Tung Nguyen, Alex Scott, and Paul Seymour,
   *Induced subgraph density. VII. The five-vertex path*
3. `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`
   Tung H. Nguyen, *Notes on Recent Work on the Erdős-Hajnal Conjecture*

This satisfies the standing source rule on current disk:

- the Huang-Ju-Zhou paper is the direct primary treatment for both A pages
- Nguyen-Scott-Seymour gives the earlier independent P5 treatment that the
  Huang-Ju-Zhou reductions generalize from
- Nguyen's notes are the required TOC-bearing lecture-note treatment for the
  iterative-sparsification and blockade-to-Erdős-Hajnal mechanisms

### Source roles by page

#### Page 429

- Huang-Ju-Zhou is the direct source for Lemma `1.12`, Lemma `3.4`,
  Claim `3.5.1`, and Lemma `3.5`.
- Nguyen-Scott-Seymour supplies the exact earlier blockade-to-restricted
  theorem (`7.4`) and the closing P5 argument pattern that Lemma `3.5`
  generalizes.
- Nguyen's notes supply the Rödl theorem as the initialization input and the
  general "restricted-set or complete/anticomplete blockade implies
  Erdős-Hajnal" mechanism in Lemma `5.4`.

#### Page 431

- Huang-Ju-Zhou is the direct source for the property `(*)` definition,
  Lemma `1.13`, Lemmas `4.1-4.5`, and Claims `4.3.1` and `4.5.1`.
- Nguyen-Scott-Seymour supplies the earlier sparse-comb exit (`5.2`), the
  local-to-global blockade theorem (`6.1`), and the P5 analogues of the
  blockade / anticomplete-pair / restricted-set iterative step (`7.1-7.3`).
- Nguyen's notes supply the lecture-note versions of the iterative
  restricted-sparsification lemma (`5.3`) and the final
  restricted-or-blockade-to-Erdős-Hajnal lemma (`5.4`).

## 6. Source corrections and known limits

Two source-correction points from the design are live for this batch.

1. **The Lemma 4.5 fourth-outcome variable is still wrong in the source.**
   On the design-named source URL
   `https://arxiv.org/html/2606.06258v2`, the statement of Lemma `4.5` still
   says `F has an ε^{c_7}`-restricted induced subgraph ...` even though the
   quantified ambient graph is `G`. I verified that the current latest arXiv
   HTML version on disk-date Friday, September 4, 2026,
   `https://arxiv.org/html/2606.06258v3`, still carries the same `F` typo in
   lines `786-788`. The scaffold follows the corrected reading recorded by the
   design: the quantified graph in that outcome is `G`.

2. **The earlier Section 3 `D, D_i` typo is not re-opened locally.**
   The design warns that Lemma `3.1` should use the refined blocks `B, B_i`.
   That seam is already handled on the published prerequisite page
   `generalized-niceness-and-reduction-outcomes`, and page `429` reuses those
   published corrected items instead of duplicating the typo here.

Further source-side limit:

- runner-local DNS is unavailable, so local URL liveness probes fail even when
  the exact URLs open in the web reader. I therefore wrote honest manual
  `fetch_verified` receipts after re-opening each exact URL in the web tool and
  recorded the local `url-sweep` failure separately below.

## 7. Validator results

Green after the scaffold edit:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-30-batch-14.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-30-batch-14.coverage.json','utf8'))"`
-  -> `json-parse: ok`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-14.coverage.json`
-  -> `coverage-checklist: 2 page(s), 25 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-14.coverage.json`
-  -> `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
-  -> `content-policy: 214 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
-  -> ended in `OK`; the printed diagnostics were only the repository's standing out-of-batch `redundant-prereq` advisories
- `git diff --check -- research/frontier-30-batch-14.pages.json research/frontier-30-batch-14.coverage.json research/frontier-30-batch-14.notes.md`
-  -> passed

Blocked locally:

- `node tools/url-sweep.mjs --coverage research/frontier-30-batch-14.coverage.json --out /tmp/frontier-30-batch-14.url-sweep.json --recover --fail-on-dead`
-  -> `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-30-batch-14.url-sweep.json`

Exact failure mode on this runner:

- `https://arxiv.org/html/2312.15333v2` -> `curl: (6) Could not resolve host: arxiv.org`
- `https://arxiv.org/html/2606.06258v2` -> `curl: (6) Could not resolve host: arxiv.org`
- `https://web.math.princeton.edu/~tunghn/ehnotes.pdf` -> `curl: (6) Could not resolve host: web.math.princeton.edu`

This is a **local DNS/network blocker**, not a source-selection blocker. All
three exact URLs were re-opened successfully in the web reader during this
dispatch, and their manual `fetch_verified` receipts remain accurate. No
batch-local citation swap is justified from the local `url-sweep` failure
alone.

## Step-3 fix pass

- `batch-14` review findings — disposition: no scaffold change. Evidence:
  `research/frontier-30-alpha-g-step3-scaffold-review.md` marks both
  `from-generalized-niceness-to-erdos-hajnal` and
  `property-star-and-comb-outcomes` as `sufficient` and says "The current
  scaffold is authorable as written." `research/frontier-30-alpha-g-step3-verdicts.json`
  also records `sufficient` for both batch-14 A pages. The only numbered
  finding in the group-`g` review is `G18-1`, which belongs to batch `18` and
  is out of scope for this dispatch. Changed scaffold record:
  `research/frontier-30-batch-14.pages.json` unchanged,
  `research/frontier-30-batch-14.coverage.json` unchanged,
  `research/frontier-30-batch-14.notes.md` appended with this Step-3 receipt.
- validator rerun on Saturday, September 5, 2026 (Australia/Sydney local time)
  — `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-14.coverage.json`
  -> `coverage-checklist: 2 page(s), 25 harvested result(s), 0 error(s), 0 warning(s)`;
  `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-14.coverage.json`
  -> `source-fetch-check: 6/6 source(s) fetch-verified`;
  `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  -> `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`;
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK` with only the repository's standing out-of-batch `redundant-prereq`
  advisories.

## Step-5 authoring

- Authored page files:
  `library/combinatorics/from-generalized-niceness-to-erdos-hajnal.md`,
  `library/combinatorics/from-generalized-niceness-to-erdos-hajnal-examples.md`,
  `library/combinatorics/property-star-and-comb-outcomes.md`,
  `library/combinatorics/property-star-and-comb-outcomes-examples.md`.
- Authored A-page items:
  `lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set`,
  `lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades`,
  `thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property`,
  `def-property-star-for-a-finite-family`,
  `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes`,
  `lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome`,
  `lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph`,
  `lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives`,
  `lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem`,
  `lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade`,
  `thm-property-star-and-leaf-reducibility-imply-generalized-niceness`.
- Authored B-page items:
  `ex-the-lemma-three-five-parameter-choice-on-a-large-graph`,
  `ex-a-complete-four-blockade-gives-a-four-vertex-clique`,
  `ex-a-large-epsilon-restricted-induced-subgraph-gives-a-polynomial-clique-or-stable-set`,
  `ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star`,
  `ex-the-third-outcome-of-property-star-gives-a-pure-four-blockade`,
  `ex-the-square-root-rescaling-in-lemma-four-four`,
  `ex-the-epsilon-to-five-d-substitution-in-lemma-four-five-one`.
- Authored contract artifact:
  `research/frontier-30-batch-14.proof-contracts.json`.

- Provenance rationale:
  all new A-page statements are `literature-derived` from the Huang-Ju-Zhou
  reduction route and the already-published P5 carriers it reuses;
  all new B-page statements are `ai-generated` examples with
  `generation.role: example`;
  all local proofs and verifications are `ai-generated`;
  every authored page and item remains `status: draft`.
- Truthful route adjustment:
  page `429` does not cite the published
  `cor-a-restricted-set-contains-a-large-stable-set-or-clique`, because its
  statement provenance is `ai-generated` and strict `proof-contract` forbids
  citing that as an authority. The sparse-set termination steps are written
  directly from
  `lem-greedy-colouring-bound`,
  `thm-clique-independence-chromatic-bounds`,
  `lem-restrictedness-is-complement-invariant`, and
  `lem-complement-swaps-cliques-and-stable-sets`.
- Narrowed or dropped claims:
  none. The scaffolded ids and page routes remained intact.
- Mechanical proof-format repair applied:
  `precheck` requires each numbered proof row to be a single tagged line, so
  the initial multi-line proof paragraphs were rewritten into the canonical
  one-line step form before the contract artifact was generated.
- Contract-sync repair applied:
  after the first strict contract pass, I removed two linked Facts that no
  longer had step-level citations, added the missing dependency
  `lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set`
  to the final Erdős-Hajnal theorem, and rewrote four example proof lines to
  remove source labels like `Lemma 3.5` and `Lemma 4.4` from proof-step prose
  so the contract parser would not misread them as local step references.
- Blockers:
  none inside batch-14 authoring scope.

- Checks run on Friday, September 4, 2026:
  `node tools/tsx-run.mjs tools/precheck.mts <17 batch-14 proof-bearing item files>`
  -> `17 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-30-batch-14.pages.json`
  -> `content-policy: 18 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`; only the repository's standing out-of-batch `redundant-prereq`
  advisories were printed.
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-14.proof-contracts.json <17 scoped ids>`
  -> `research/frontier-30-batch-14.proof-contracts.json: regenerated 17, skipped 0`.
- `node tools/proof-contract.mjs research/frontier-30-batch-14.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 17/17 item(s) checked`.
- `node tools/boundary-audit.mjs research/frontier-30-batch-14.proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template`
  -> `TEMPLATE REUSE — none at or above 3 members`; `CONTRADICTED DISPOSITIONS — none found by the three detectors`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-14.proof-contracts.json --items-dir items --fail-on-missing-quote`
  -> `citation-fidelity: 46 citation(s) over 17 authored item(s)`; no missing quotes and no widening candidates.
- `git diff --check -- items library/combinatorics research/frontier-30-batch-14.proof-contracts.json research/frontier-30-batch-14.notes.md`
  -> clean.
