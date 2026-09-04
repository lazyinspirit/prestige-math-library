# frontier-29 batch 19 notes - beta scaffold

Owned pairs:

- `space-complexity-savitch-and-tqbf` /
  `space-complexity-savitch-and-tqbf-examples`
- `randomized-complexity-and-amplification` /
  `randomized-complexity-and-amplification-examples`

Artifacts written in this dispatch:

- `research/frontier-29-batch-19.pages.json`
- `research/frontier-29-batch-19.coverage.json`
- this file

Session date: Tuesday, September 1, 2026 (AEST).

## Design against spec

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`research/frontier-29-beta-19.task.md`, `research/plan-spec.json`, and the
matched design locations in `research/plan-computability-theory-track.md`.

For `space-complexity-savitch-and-tqbf`, the cited line `981` is the start of
the full `TC-23` block, so that block is the controlling design text.

For `randomized-complexity-and-amplification`, the two cited lines are not
competing amendments:

- line `1162` starts the full `TC-28` block;
- line `1187` is the B-page subheading inside that same block.

I therefore treated the full `TC-28` block starting at line `1162` as
controlling, with line `1187` read as part of the same design rather than as a
rival source.

There is no design-vs-spec drift to record for this batch. For both pairs the
current spec and the controlling design agree on:

- page id
- companion page id
- title
- order
- category
- declared prerequisite pages

The frontier-29 step-0 drift note already marks both pages `no-drift`, and my
own read matched that result.

## Item census and split check

- A page `space-complexity-savitch-and-tqbf`: `17` items
- B page `space-complexity-savitch-and-tqbf-examples`: `3` items
- A page `randomized-complexity-and-amplification`: `17` items
- B page `randomized-complexity-and-amplification-examples`: `3` items

Neither A page is close to the `60`-item split ceiling, so no split is needed.

## Route choices

### TC-23 -- `space-complexity-savitch-and-tqbf`

I kept the design spine and made two route choices explicit.

1. Savitch is built through a local bounded-reachability recursion, not by
   importing the draft on-disk `def-configuration-graph` item.
2. TQBF membership, the reachability-formula construction, the
   quantifier-reuse size lemma, and PSPACE-completeness stay as separate items.
3. The QBF game comes before alternation, and `AP = PSPACE` is proved through
   TQBF plus alternating game semantics rather than by hiding the connection in
   prose.
4. The false statement attacks the exact design trap: Savitch does not store
   the whole graph.

Important local choices:

- I did **not** depend on the draft `def-configuration-graph` or the draft
  `lem-acceptance-is-configuration-reachability` items already on disk. The
  scaffold instead phrases the recursive reachability algorithm directly on
  finite digraphs and then applies it to the implicit configuration digraph of
  a space-bounded machine.
- I also did **not** add a separate `PSPACE-complete` definition item. The
  page already has the reduction framework from the prerequisite page, so the
  completeness format is carried inline by
  `thm-tqbf-is-pspace-complete`.
- `Claim 5.11` from Arora-Barak, about bounded alternation and `Sigma_i^p`,
  is recorded in coverage and deferred to
  `the-polynomial-hierarchy-and-relativization`, because TC-23 only needs
  unlimited alternation and the `AP = PSPACE` seam.

### TC-28 -- `randomized-complexity-and-amplification`

I followed the design literally and kept the probabilistic page modular.

1. define PTMs and the five classes `RP`, `coRP`, `ZPP`, `BPP`, `PP` first;
2. separate the weaker Chebyshev majority estimate from the stronger Chernoff
   amplification result;
3. keep one-sided RP amplification distinct from BPP majority amplification;
4. place Adleman before the algebraic miniatures, then handle pairwise
   independent hashing, Freivalds, PIT, and Schwartz-Zippel in that order; and
5. close with the two exact traps named by the design: randomness reuse and the
   missing bounded-error gap in `PP`.

Important local choices:

- I did **not** add a standalone `P/poly` definition item. There is no
  published on-disk `P/poly` item to depend on, and the design did not allocate
  one here. The authoring pass must therefore state the nonuniform circuit or
  advice meaning inline inside `thm-adleman-bpp-is-contained-in-p-poly`.
- I kept `def-pairwise-independent-hash-family` abstract and then specialized it
  to affine maps over a finite field in the next lemma. That lets the page reuse
  published finite-field infrastructure instead of rebuilding field theory
  locally.
- I used the published finite-probability page for Chebyshev, Bernoulli and
  binomial moments, independence, and variance additivity; and the published
  algebra pages for finite fields, polynomial roots, and matrix multiplication.
- I deliberately left `BPP subseteq Sigma_2 cap Pi_2` out of the scaffold even
  though Blais's page covers it. That theorem belongs to the polynomial-
  hierarchy discussion, not to the designed TC-28 endpoint.

## Dependency notes

- **Directed reachability is local.** The published graph page is excellent for
  finite undirected graphs and also provides the digraph variant item, but it
  does not carry a ready-made directed-path recursion theorem. So the Savitch
  spine defines that recursion locally instead of smuggling in a non-item.
- **Machine-resource seams are published.** TC-23 reuses the published machine
  and resource interfaces from `resource-bounds-and-machine-invariance`,
  especially the space-cost convention and the `DSPACE`/`NSPACE` notation.
- **Probability seams are published.** TC-28 reuses the published finite
  probability interfaces for indicators, independence, variance, Bernoulli and
  binomial variables, Markov, and Chebyshev.
- **Algebraic seams are mostly published.** TC-28 reuses
  `polynomial-rings-and-roots`, `def-matrix-space`, and
  `def-matrix-product-and-identity-matrix` for Freivalds and
  Schwartz-Zippel. The hash-family lemma keeps the phrase "finite field" in the
  item statement, but its actual proof dependency is only the ordinary field
  interface together with uniform choice over a finite family, which avoids a
  new page-level algebra prerequisite.
- **No forward references are used.** Every B-page item depends only on A-page
  items from its own pair or on earlier published items.
- **`PP` stays local.** The page defines `PP` directly from acceptance
  probabilities and does not depend on the later `#P` page for its meaning.

## Sources actually read

I re-opened the following live sources in the web reader while preparing this
scaffold.

### TC-23 sources

1. Sanjeev Arora and Boaz Barak, *Computational Complexity: A Modern Approach*:
   `https://theory.cs.princeton.edu/complexity/book.pdf`
2. Eric Blais, *Models of Computation*, page `17. Space Complexity`:
   `https://cs.uwaterloo.ca/~eblais/cs365/w25/space`

### TC-28 sources

1. Sanjeev Arora and Boaz Barak, *Computational Complexity: A Modern Approach*:
   `https://theory.cs.princeton.edu/complexity/book.pdf`
2. Eric Blais, *Models of Computation*, page `14. Randomized Computation`:
   `https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic`
3. Eric Blais, *Models of Computation*, page `15. P vs. BPP`:
   `https://cs.uwaterloo.ca/~eblais/cs365/w25/P-and-BPP`
4. Jiri Matousek, *Thirty-three Miniatures: Mathematical and Algorithmic
   Applications of Linear Algebra*:
   `https://kam.mff.cuni.cz/~matousek/stml-53-matousek-1.pdf`

Why this source stack is enough:

- Arora-Barak is the textbook / primary-treatment backbone for both pages.
- Blais `17. Space Complexity` independently backs the PSPACE, TQBF-in-PSPACE,
  STCON, Savitch, and `PSPACE = NPSPACE` route.
- Blais `14. Randomized Computation` independently backs PTMs, BPP, the
  amplification story, and the displayed Chernoff-Hoeffding inequality.
- Blais `15. P vs. BPP` independently backs Adleman and the PIT problem
  statement.
- Matousek gives an independent full textbook treatment of Freivalds'
  algorithm and its repetition paragraph.

What each source is doing:

- Arora-Barak is the only source in this batch that covers `AP = PSPACE` and
  `PP` directly, and it also supplies the pairwise-independent finite-field hash
  construction.
- Blais `17` gives the cleanest source-side STCON recursion and the space-first
  explanation of Savitch.
- Blais `14` gives the cleanest source-side amplification narrative, including
  the Bernoulli-trial concentration step.
- Blais `15` supplies the exact nonuniform-circuit proof pattern and the PIT
  language statement.
- Matousek supplies the compact matrix-product verifier that the complexity page
  needs without importing a broader interactive-proof framework.

## URL discipline and fetch receipts

Every URL recorded in `research/frontier-29-batch-19.coverage.json` was opened
through the web reader while preparing this scaffold.

Runner-local shell networking is still restricted in this workspace, so I could
not honestly mint fresh shell-side byte-count or hash receipts. Following the
same truthful convention already used by recent frontier batches, the coverage
file carries manual `fetch_verified` receipts marked `verified_via: web-open`
with the exact URL, the document kind, and the visible page count where the
reader exposed one.

I did not invent curl receipts, byte counts, or hashes that the shell could not
actually obtain.

## Published dependencies opened on disk

I opened the published pages or items actually carrying the reused interfaces:

- `library/computability-theory/p-np-conp-and-polynomial-reductions.md`
- `library/computability-theory/resource-bounds-and-machine-invariance.md`
- `library/combinatorics/graphs-walks-and-connectivity.md`
- `library/combinatorics/finite-probability-spaces-and-random-variables.md`
- `library/abstract-algebra/polynomial-rings-and-roots.md`
- `items/def-matrix-space.md`
- `items/def-matrix-product-and-identity-matrix.md`
- `items/def-field.md`

This is enough for the scaffold's declared proof routes.

## Known limits and step-5 risks

- `thm-savitchs-theorem` must keep the midpoint recursion explicit. If the
  authoring pass casually says "search the configuration graph" without making
  the space reuse visible, it will recreate the exact false statement the page
  closes with.
- `thm-tqbf-is-pspace-complete` must keep the quantifier-reuse size estimate
  explicit. The naive recursive reachability formula doubles in size, and the
  whole point of item `11` is to stop that mistake from being buried.
- `thm-ap-equals-pspace` should preserve both inclusions separately. TQBF gives
  the clean `PSPACE subseteq AP` route; depth-first evaluation of the
  alternating tree gives `AP subseteq PSPACE`.
- `lem-chernoff-bound-for-bernoulli-trials` is the proof-density high point of
  TC-28. The authored proof should spend published exponential identities
  honestly, not present the concentration bound as if it were immediate from the
  finite-probability page alone.
- `thm-adleman-bpp-is-contained-in-p-poly` must spell out the nonuniform
  meaning of `P/poly` inline, because no published on-disk item currently owns
  that definition.
- `thm-freivalds-matrix-product-verification`,
  `thm-rp-one-sided-amplification`, and
  `fs-reusing-random-bits-amplifies-success` all depend on fresh independent
  randomness between trials. That independence must remain explicit at authoring
  time.
- `fs-pp-has-bounded-error-away-from-one-half` must keep the threshold exactly
  at `1/2` in the authored statement. If the authoring pass silently inserts a
  fixed constant gap, it will change the class being defined.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-19.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-19.coverage.json","utf8")); console.log("json-parse: ok")'
node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-19.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-29-batch-19.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-19.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-19.coverage.json
node -e 'const fs=require("node:fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-29-batch-19.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-29-batch-19-spliced-plan.json", JSON.stringify(plan, null, 2) + "\n");'
node tools/validate-plan.mjs /tmp/frontier-29-batch-19-spliced-plan.json
node tools/url-sweep.mjs --coverage research/frontier-29-batch-19.coverage.json --out /tmp/frontier-29-batch-19-url-liveness.json --recover --fail-on-dead
git diff --check -- research/frontier-29-batch-19.pages.json research/frontier-29-batch-19.coverage.json research/frontier-29-batch-19.notes.md
```

Results are appended below after execution.

## Validation results

- `node -e 'JSON.parse(...); console.log("json-parse: ok")'`
  passed on Tuesday, September 1, 2026 (AEST):
  `json-parse: ok`.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-19.coverage.json`
  passed:
  `coverage-checklist: 2 page(s), 62 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-19.pages.json`
  passed:
  `content-policy: 40 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-19.coverage.json --stamp`
  passed:
  `source-fetch-check: 6/6 source(s) fetch-verified (0 newly stamped)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-19.coverage.json`
  passed:
  `source-fetch-check: 6/6 source(s) fetch-verified`.

- temp-spliced plan validation on the refreshed overlay:
  `node tools/validate-plan.mjs /tmp/frontier-29-batch-19-spliced-plan.json`
  passed with the final success tail:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 654 page(s) with item lists.`
  It also printed the standard note that `639` planned pages still carry no
  item list yet, plus the repository's standing unrelated
  `redundant-prereq` warnings outside this batch.

- `node tools/url-sweep.mjs --coverage research/frontier-29-batch-19.coverage.json --out /tmp/frontier-29-batch-19-url-liveness.json --recover --fail-on-dead`
  failed in the shell environment:
  `url-sweep: 0/5 live; 5 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-29-batch-19-url-liveness.json`.
  The emitted failures were all runner-local DNS errors:
  `Could not resolve host: cs.uwaterloo.ca`,
  `Could not resolve host: kam.mff.cuni.cz`, and
  `Could not resolve host: theory.cs.princeton.edu`.
  Because the exact same URLs were re-opened in the web reader while preparing
  the scaffold, I treated this as a shell transport failure, not as evidence
  that any recorded source URL is dead or mismatched.

- `git diff --check -- research/frontier-29-batch-19.pages.json research/frontier-29-batch-19.coverage.json research/frontier-29-batch-19.notes.md`
  returned cleanly with no whitespace or patch-format errors.

## Step-3 fix pass

Date checked: Wednesday, September 2, 2026 (AEST).

- `G19-1` — accepted; no pushback.
  Evidence: the current coverage ledger already carries the missing canonical
  carrier for the closing false statement at
  `research/frontier-29-batch-19.coverage.json` lines `172`-`177`, with item
  `fs-savitch-stores-the-whole-configuration-graph` attached to the statement
  that Savitch's recursion does not materialize the full configuration graph.
  The batch checklist run on Wednesday, September 2, 2026 (AEST) passed with
  `coverage-checklist: 2 page(s), 67 harvested result(s), 0 error(s), 0 warning(s)`,
  and `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-19.coverage.json`
  also passed with `source-fetch-check: 6/6 source(s) fetch-verified`.
  Changed scaffold record: `research/frontier-29-batch-19.coverage.json`,
  page `space-complexity-savitch-and-tqbf`, `canonical[0]`.

- `G19-2` — accepted; no pushback.
  Evidence: the current coverage ledger already carries the four missing
  canonical carriers at `research/frontier-29-batch-19.coverage.json` lines
  `417`-`436`, namely
  `lem-majority-error-bound-from-chebyshev`,
  `thm-bpp-amplification-to-inverse-polynomial-error`,
  `thm-schwartz-zippel-lemma`, and
  `fs-pp-has-bounded-error-away-from-one-half`. I re-opened the recorded live
  source URLs for this pair in the web reader on Wednesday, September 2, 2026
  (AEST):
  `https://theory.cs.princeton.edu/complexity/book.pdf`,
  `https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic`,
  `https://cs.uwaterloo.ca/~eblais/cs365/w25/P-and-BPP`, and
  `https://kam.mff.cuni.cz/~matousek/stml-53-matousek-1.pdf`.
  The same Wednesday validator run passed with
  `coverage-checklist: 2 page(s), 67 harvested result(s), 0 error(s), 0 warning(s)`
  and `source-fetch-check: 6/6 source(s) fetch-verified`.
  Changed scaffold record: `research/frontier-29-batch-19.coverage.json`,
  page `randomized-complexity-and-amplification`, `canonical[0..3]`.

- Validator summary on the current bytes:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-19.coverage.json`
  passed with `0` errors and `0` warnings;
  `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed with `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`;
  and `node tools/validate-plan.mjs research/plan-spec.json` ended with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.`

## Step-5 authoring

Date authored: Wednesday, September 2, 2026 (AEST).

Authored A/B pages:

- `space-complexity-savitch-and-tqbf`
- `space-complexity-savitch-and-tqbf-examples`
- `randomized-complexity-and-amplification`
- `randomized-complexity-and-amplification-examples`

Authored item ids:

- TC-23 A page:
  `def-pspace-and-npspace`,
  `lem-space-bounded-machines-have-exponentially-many-configurations`,
  `def-bounded-reachability-recursion`,
  `lem-bounded-reachability-recursion-is-correct`,
  `lem-bounded-reachability-uses-logarithmic-recursion-depth`,
  `thm-savitchs-theorem`,
  `cor-pspace-equals-npspace-and-is-closed-under-complement`,
  `def-quantified-boolean-formula-and-tqbf`,
  `prop-tqbf-is-in-pspace`,
  `def-reachable-configuration-formula`,
  `lem-quantifier-reuse-keeps-reachability-formulas-polynomial`,
  `thm-tqbf-is-pspace-complete`,
  `def-quantified-formula-game`,
  `thm-tqbf-truth-iff-existential-player-has-a-winning-strategy`,
  `def-alternating-polynomial-time`,
  `thm-ap-equals-pspace`,
  `fs-savitch-stores-the-whole-configuration-graph`.
- TC-23 B page:
  `ex-bounded-reachability-recursion-is-correct`,
  `ex-ap-equals-pspace`,
  `cex-savitch-stores-the-whole-configuration-graph`.
- TC-28 A page:
  `def-probabilistic-polynomial-time-machine`,
  `def-rp-corp-zpp-bpp-and-pp`,
  `thm-zpp-equals-rp-intersection-corp`,
  `lem-majority-error-bound-from-chebyshev`,
  `thm-bpp-amplification-to-inverse-polynomial-error`,
  `lem-chernoff-bound-for-bernoulli-trials`,
  `thm-bpp-amplification-to-exponentially-small-error`,
  `thm-rp-one-sided-amplification`,
  `thm-adleman-bpp-is-contained-in-p-poly`,
  `def-pairwise-independent-hash-family`,
  `lem-affine-finite-field-hashes-are-pairwise-independent`,
  `thm-freivalds-matrix-product-verification`,
  `def-polynomial-identity-testing`,
  `thm-schwartz-zippel-lemma`,
  `cor-pit-is-in-corp`,
  `fs-reusing-random-bits-amplifies-success`,
  `fs-pp-has-bounded-error-away-from-one-half`.
- TC-28 B page:
  `ex-majority-error-bound-from-chebyshev`,
  `ex-pit-is-in-corp`,
  `cex-reusing-random-bits-amplifies-success`.

Proof-contract artifact written:

- `research/frontier-29-batch-19.proof-contracts.json`

Provenance rationale actually used:

- Definitions and source-backed theorem/lemma/proposition items were tagged
  `statement: literature-derived`.
- The two closing false statements on each A page were tagged
  `statement: ai-altered`, because they are local cautionary formulations built
  to isolate the source-backed proof traps rather than quoted source theorems.
- The B-page examples and counterexamples were tagged
  `statement: ai-generated` with the required `generation.role`
  (`example` or `counterexample`).
- All locally written proofs, verifications, refutations, and counterexamples
  were tagged `proof: ai-generated`.

Truthfulness / scope-tightening decisions applied during authoring:

- `thm-zpp-equals-rp-intersection-corp` now cites `[[thm-markov-inequality]]`
  explicitly, because the ZPP-to-RP/coRP direction as authored uses a runtime
  cutoff and Markov's inequality.
- `cor-pit-is-in-corp` is stated with the explicit representation assumptions
  the authored proof actually uses: polynomial-time evaluation and a
  polynomial-time computable finite sample set `S` with `|S| >= 2d`.

Narrowed claims:

- none beyond the PIT/coRP statement's explicit evaluation/sample-set
  assumptions, which were added to keep the coRP claim honest on the authored
  proof route and to avoid overclaiming a field-agnostic representation model.

Dropped claims:

- none.

Blockers:

- none.

Checks actually run on the authored bytes:

- Focused precheck over the 30 proof-bearing batch items:
  `node tools/tsx-run.mjs tools/precheck.mts ...`
  -> `30 checked, 0 failing — all clean`.
- Strict proof-contract check:
  `node tools/proof-contract.mjs research/frontier-29-batch-19.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 30/30 item(s) checked`.
- Item-scoped content policy:
  `node tools/content-policy.mjs research/frontier-29-batch-19.pages.json`
  -> `content-policy: 40 scoped item(s), 0 error(s), 0 warning(s)`.
- Spliced plan validation:
  created `/tmp/frontier-29-batch-19-spliced-plan.json` by overlaying
  `research/frontier-29-batch-19.pages.json` onto `research/plan-spec.json`,
  then ran
  `node tools/validate-plan.mjs /tmp/frontier-29-batch-19-spliced-plan.json`
  -> final success tail:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`
  The validator also printed the repository's standing unrelated
  `redundant-prereq` warnings outside this batch.
- Whitespace / patch-format check:
  `git diff --check -- items library/computability-theory research/frontier-29-batch-19.proof-contracts.json research/frontier-29-batch-19.notes.md`
  -> clean.
