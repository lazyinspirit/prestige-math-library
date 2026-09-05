# frontier-30 · Beta · batch-9 notes — `enriched-categories`

Run `frontier-30`, batch `9`, one A/B pair, category `category-theory`.
Author: Beta. Session date: Saturday, September 5, 2026 AEST.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-30-batch-9.pages.json`
- `research/frontier-30-batch-9.coverage.json`
- this file

Per the batch brief, I did not edit workflow state, published content, another
batch artifact, or `proof-contracts`.

---

## 1. Control files read

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-30-dispatch/beta-batch-9.prompt.md`, the seed manifest
`research/frontier-30-batch-9.pages.json`, the live scope ledger
`research/frontier-30-scope-ledger.json`, the controlling design blocks in
`research/plan-category-theory-track.md`, and the live plan entry in
`research/plan-spec.json`.

I also read the upstream published category-theory pages this scaffold depends
on, the prior `frontier-18` coverage rows that defer material into
`enriched-categories`, and the actual source material reachable in this runner:

- Kelly's reprint table of contents and chapter text through the same-text
  Scribd mirror, together with the existing exact-url TAC fetch receipt already
  stored on disk.
- Riehl's `cathtpy.pdf` in the web reader.
- Cruttwell's thesis PDF in the web reader.
- Bayeh-Hess-Karpova-Kedziorek-Riehl-Shipley `arXiv:1401.3651` in the web
  reader.

## 2. Which design text controlled

Three design loci were named for this pair:

- `research/plan-category-theory-track.md:2858-2961`
- `research/plan-category-theory-track.md:2962-2986`
- `research/plan-category-theory-track.md:3798-3855`

I treated them as a layered control set rather than as competing drafts.

- The block at `2858-2961` controls the page scope, order inside the A-page
  spine, the hypothesis ladder, the traps, and the item inventory.
- The immediately following block at `2962-2986` controls the B-page examples
  and the source shortlist/traps tied specifically to `MA-17`.
- The later block at `3798-3855` is the controlling amendment for the coverage
  harvest, because it supplies the exact Kelly/Riehl/Cruttwell heading
  inventories and the intended dispositions source by source.

There is no mathematical conflict among those three loci. The later block adds
source-harvest specificity but does not revoke the 43-item A-page plan.

## 3. Design against spec

There is a live design-vs-spec conflict on direct prerequisites for this batch.

- The design block for `MA-17` names the direct prerequisite set
  `closed-monoidal-categories-and-the-internal-hom`,
  `braided-and-symmetric-monoidal-categories`,
  `strictification-and-mac-lanes-coherence-theorem`,
  `preadditive-and-additive-categories-and-biproducts`,
  `ends-coends-and-weighted-limits`, and
  `universal-properties-and-the-yoneda-lemma`.
- The live spec and the generated batch prompt instead give the single direct
  `requires` edge
  `duality-and-rigidity-in-monoidal-categories-examples`.

Per the dispatch, I did not settle that conflict locally. I kept the spec's
direct `requires` entry in `research/frontier-30-batch-9.pages.json` and
recorded the drift here.

Important closure fact: the live spec's transitive prerequisite closure from
`enriched-categories` already reaches all six of the design's named earlier
pages, so the scaffold can still depend on their published item-level content
without creating an undeclared-prerequisite edge once the batch manifest is
spliced into the plan.

Order, ids, companion ids, title, and category agree between design and spec:

- `365.033` / `365.034`
- `enriched-categories`
- `enriched-categories-examples`
- `category-theory`

## 4. Scaffold shape

- `enriched-categories` (A): **43 items**
- `enriched-categories-examples` (B): **15 items**

The A page stays below the hard `60`-item ceiling, so no split is proposed.

The scaffold keeps the full design spine, including the free-enriched-category
2-adjunction, the conical-limit obstruction, the change-of-base block, and the
enriched density theorem. I did not trim those away to make the page look
lighter.

## 5. Upstream closure carried into this batch

The earlier `ends-coends-and-weighted-limits` scaffold explicitly deferred
several Kelly results to this page, and I preserved that handoff instead of
silently dropping it:

- extranaturality and its comparison with dinaturality
- the cotensor lemma used in Kelly's alternate Fubini proof
- the enriched three-term continuity identities
- the cartesian-closed constant-unit reformulation of conical limits
- the closure-of-the-unit remark in the conservative-base discussion

Not all of those became local scaffold items. The page's design already narrows
the local scope:

- the square form of enriched naturality is included
- the general extraordinary-naturality calculus is still deferred as an
  unclaimed later seam
- the cartesian-closed constant-unit reformulation is recorded in coverage but
  left out of the local scaffold because the page deliberately defines conical
  limits through free enriched categories instead

## 6. Source set actually recorded

The coverage ledger records four independent treatments:

1. G. M. Kelly, *Basic Concepts of Enriched Category Theory*
   `https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf`
2. Emily Riehl, *Categorical Homotopy Theory*
   `https://emilyriehl.github.io/files/cathtpy.pdf`
3. Geoffrey Cruttwell, *Normed Spaces and the Change of Base for Enriched Categories*
   `https://www.reluctantm.com/gcruttw/publications/thesis4.pdf`
4. Bayeh-Hess-Karpova-Kedziorek-Riehl-Shipley,
   *Left-Induced Model Structures and Diagram Categories*
   `https://arxiv.org/pdf/1401.3651`

This satisfies the standing source rule:

- two independent treatments
- more than one qualifying primary treatment (`monograph`, `textbook`)
- exact HTTP(S) URLs
- exact locators
- source-heading or named-result dispositions for every harvested row

### Kelly / TAC handling

Kelly is the page's primary treatment. The design named the official TAC PDF,
which already carries an earlier exact-url byte/hash receipt elsewhere in the
repo.

What happened in this dispatch and fix pass:

- the local shell fetcher could not resolve `tac.mta.ca`
- the web reader would not reliably render the TAC PDF directly
- the same 143-page TAC reprint text was readable through the live Scribd HTML
  view, with contents and Chapter 1-3 headings matching the TAC reprint listing

So the coverage now records the live same-text Scribd URL as the active source,
preserves the TAC PDF as `original_url` provenance, and keeps the same section
inventory and harvest on that verified 143-page reprint text.

### Item-40 support

The design marks the enriched adjoint functor theorem as the place where the
accessible enriched-adjunction literature matters. I therefore added the
Bayeh-Hess-Karpova-Kedziorek-Riehl-Shipley appendix as an explicit fourth source
row, because its Definition A.3 states exactly the ordinary-adjunction plus
tensor/cotensor preservation equivalence the page needs for item `40`.

## 7. Route and dependency choices

### Hypothesis discipline

The page follows the design's Kelly-first hypothesis ladder instead of
flattening everything to "closed symmetric monoidal" up front.

- Items `1`-`8` keep the merely monoidal hypothesis.
- The reminder about symmetry/closedness/completeness is scaffolded as a real
  remark, not left implicit.
- The self-enrichment, representable, weighted-limit, and enriched-adjunction
  items are the ones that actually carry the stronger hypotheses.

### Item 14 is no longer a live contingency

The design notes that the Ab-enrichment theorem would be contingent if the
tensor-product-of-abelian-groups seam were still missing from the library. On
current disk that contingency is closed:

- `items/thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product.md`
  exists and is published.
- The live plan's transitive prerequisite closure also reaches
  `tensor-products-of-modules`.

So item `14` is scaffolded as an active theorem, not as a dropped seam.

### False-statement support

The B page carries the seven design false statements plus the eight named
worked examples/counterexamples. I did not move the false statements back onto
the A page because under the schema they belong on the examples page.

For `fs-a-monoidal-category-carries-at-most-one-symmetry`, I kept the false
statement with only the published symmetric-monoidal definition as an external
dependency. The intended proof witness is Kelly's graded-modules example, and
the authoring pass will have to write that example self-containedly inside the
false statement unless a better already-published local carrier appears before
step 5.

### Metric example remains authoring-sensitive

I kept `ex-a-metric-space-as-an-enriched-category` because the design wants the
Lawvere example on the B page, but the notes preserve the exact caveat: the
authoring pass must verify that the published metric material supports the
chosen formulation cleanly. If not, the example is dropped with a recorded
reason rather than stretched into the wrong theorem.

## 8. Fetch verification and source-liveness handling

Local network fetches from this runner are DNS-blocked.

I verified that mechanically before editing by running

```bash
node tools/source-fetch-check.mjs --coverage /tmp/frontier-30-batch-9-source-probe.coverage.json --stamp --force
```

against a temporary probe coverage file containing the four candidate source
URLs. Every host failed with `EAI_AGAIN`.

Because of that runner-local constraint, this batch uses the same two accepted
receipt forms already present elsewhere in the repo:

- reused exact-url byte/hash receipts copied unchanged from earlier coverage
  files when the identical source URL was already stamped (`Kelly`, `Riehl`)
- honest manual receipts of the form
  `fetch_verified: { at, kind, pages?, verified_via: "web-open", note }`
  after re-opening the full text in the web reader (`Cruttwell`, `Bayeh`)

I did not fabricate a byte count or SHA for the two sources that lacked a prior
exact-url stamp.

## 9. Validation

Commands run after writing the scaffold:

```bash
node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-30-batch-9.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-30-batch-9.coverage.json","utf8")); console.log("json-parse: ok")'
node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-9.coverage.json
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-9.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json
node -e 'const fs=require("node:fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-30-batch-9.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-30-batch-9-spliced-plan.json", JSON.stringify(plan, null, 2) + "\n");'
node tools/validate-plan.mjs /tmp/frontier-30-batch-9-spliced-plan.json
node tools/url-sweep.mjs --coverage research/frontier-30-batch-9.coverage.json --out /tmp/frontier-30-batch-9.url-sweep.json --recover --fail-on-dead
git diff --check -- research/frontier-30-batch-9.pages.json research/frontier-30-batch-9.coverage.json research/frontier-30-batch-9.notes.md
```

Results are recorded after the commands were actually run on the live bytes in
this dispatch.

## Step-5 authoring

Authored on the in-flight batch scope:

- A page `library/category-theory/enriched-categories.md`
- B page `library/category-theory/enriched-categories-examples.md`
- all `43` planned A-page items
- all `15` planned B-page items
- `research/frontier-30-batch-9.proof-contracts.json`

Authoring route kept the scaffolded scope intact. No batch-9 item id was
dropped or renamed, no page split was introduced, and the unresolved
design-versus-spec direct-`requires` drift recorded above was left unchanged.

Provenance rationale:

- the basic enriched-category, change-of-base, cotensor, and Yoneda items were
  tagged `literature-derived` where the authored statement directly follows the
  harvested Kelly / Riehl / Cruttwell / Bayeh rows;
- explanatory worked examples and the Lawvere-metric packaging were tagged
  `ai-altered` only where the batch writes a sourced instance in the library's
  local notation rather than copying a source statement verbatim;
- every proof-bearing item remains `status: draft`, carries a live
  `proof_strategy`, and has no new `verification.judge` stamp.

Narrowed or scoped claims kept explicit during authoring:

- `thm-strong-enriched-yoneda-lemma-as-a-particular-end` was written only for
  the particular end named in the design; it does not claim a whole large-source
  enriched functor category.
- `rem-the-commutative-monoid-case` remains a remark rather than a promoted
  theorem, matching the scaffold note that this batch did not harvest a direct
  enriched-source carrier for the full semiadditive / `CMon` equivalence.
- `ex-a-metric-space-as-an-enriched-category` was kept in the Lawvere form over
  `([0,\infty],\ge,+,0)`, which is the batch's intended sourced formulation.

Blockers:

- none discovered during Step 5 on the authored batch scope.

Checks actually run after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts $(scope items from research/frontier-30-batch-9.proof-contracts.json)`
  Result: `41 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-30-batch-9.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 41/41 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-30-batch-9.pages.json`
  Result: `content-policy: 58 scoped item(s), 0 error(s), 0 warning(s)`.
- spliced-plan validation on `/tmp/frontier-30-batch-9-spliced-plan.json`
  Result: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 746 page(s) with item lists.`

Green on the batch-local bytes:

- JSON parse:
  `json-parse: ok`
- `coverage-checklist --require-destination`:
  `coverage-checklist: 1 page(s), 74 harvested result(s), 0 error(s), 0 warning(s)`
- `source-fetch-check` in receipt-check mode:
  `source-fetch-check: 4/4 source(s) fetch-verified`
- batch-local `content-policy --manifest-only research/frontier-30-batch-9.pages.json`:
  `content-policy: 58 scoped item(s), 0 error(s), 0 warning(s)`
- overlay `validate-plan` on `/tmp/frontier-30-batch-9-spliced-plan.json`:
  exit `0`, ending with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 700 page(s) with item lists.`
- `git diff --check`:
  clean

Run-wide but not batch-local:

- whole-run `content-policy --manifest-only research/frontier-30-batch-*.pages.json`
  now passes on current bytes:
  `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.

Shell-side liveness blocker:

- `url-sweep` exited `1` with
  `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-30-batch-9.url-sweep.json`

Exact failures:

- `https://arxiv.org/pdf/1401.3651` -> `curl: (6) Could not resolve host: arxiv.org`
- `https://emilyriehl.github.io/files/cathtpy.pdf` -> `curl: (6) Could not resolve host: emilyriehl.github.io`
- `https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf` -> `curl: (6) Could not resolve host: tac.mta.ca`
- `https://www.reluctantm.com/gcruttw/publications/thesis4.pdf` -> `curl: (6) Could not resolve host: www.reluctantm.com`

This is a runner-local DNS failure, not a source-selection failure:

- the coverage file already carries valid `fetch_verified` receipts for all four
  sources
- the web reader reopened the full texts for `Riehl`, `Cruttwell`, and
  `Bayeh`, and the Kelly section inventory was rechecked against the same-text
  reprint mirror

## 10. Known limits to preserve into step 5

- The direct-prerequisite drift between design and spec is unresolved by design
  and stays visible here; step 5 must not silently rewrite it.
- Kelly's general extraordinary-naturality calculus remains a deferred seam.
  Only the square reformulation needed for ordinary enriched naturality is
  scaffolded locally.
- The metric-space example is still contingent on the step-5 source/proof check
  described above.
- The change-of-base block stops exactly where the design says it stops: this
  page proves the induced enriched-category and 2-functor constructions, then
  denies the deeper 2-categorical change-of-base theory rather than bluffing it.

## Step-3 fix pass

- `none (batch 9)`: The alpha-e findings table names only `E11-1`, which is
  batch-11-specific. Disposition: no batch-9 finding id required a scaffold
  repair, so I kept `research/frontier-30-batch-9.pages.json` unchanged.
  Evidence: `research/frontier-30-alpha-e-step3-scaffold-review.md` marks
  `enriched-categories` sufficient, lists no batch-9 finding id, and the
  current manifest still counts `43` A-page items and `15` B-page items.
  Changed scaffold record: `research/frontier-30-batch-9.pages.json` unchanged.
- `none (URL discipline repair)`: Under the dispatch's recover-before-replace
  rule, I repaired the Kelly source row in
  `research/frontier-30-batch-9.coverage.json` so the active `url` is the live
  same-text Scribd HTML view and the official TAC PDF is preserved as
  `original_url`. Evidence: the Scribd copy opens as the 143-page TAC reprint
  with contents lines 161-193 naming Chapters 1-3 exactly as harvested, while
  the TAC reprint landing page still identifies the same official PDF path.
  Changed scaffold record: Kelly source row in
  `research/frontier-30-batch-9.coverage.json`.
- `validators`: `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-9.coverage.json`
  passed `coverage-checklist: 1 page(s), 74 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-9.coverage.json`
  passed `source-fetch-check: 4/4 source(s) fetch-verified`.
  `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  passed `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
  The spliced-plan check `node tools/validate-plan.mjs /tmp/frontier-30-batch-9-spliced-plan.json`
  passed with no cycles, forward references, B-page dependencies, or unresolved
  ids.
