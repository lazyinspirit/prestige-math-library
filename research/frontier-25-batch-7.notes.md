# frontier-25 · Beta · batch-7 notes — `chain-homotopy-and-the-homotopy-category`

Run `frontier-25`, batch `7`, one A/B pair, category `homological-algebra`.
Author: Beta. Session date: Sunday, August 30, 2026.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-25-batch-7.pages.json`
- `research/frontier-25-batch-7.coverage.json`
- this file

Per `research/frontier-25-beta-batch.task.md`, I did not edit workflow state,
published content, another batch artifact, or any step-5 authoring file.

## 1. Control files and live batch context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
`research/frontier-25-beta-7.task.md`, the dispatch prompt
`research/frontier-25-dispatch/beta-batch-7.prompt.md`, the seed manifest
`research/frontier-25-batch-7.pages.json`, the drift note
`research/frontier-25-alpha-step0-drift.md`, and the cited design anchors in
`research/plan-homological-algebra-track.md`.

The repo instructions in `AGENTS.md` say the canonical run-state authority is
`tools/autopilot/` and not any stale `*RESUME.md` file. I therefore treated the
current batch skeleton on disk plus the live `.autopilot/` directory as the
only durable state relevant to this scaffold pass.

## 2. Controlling design and design/spec drift

### Controlling design material

The generated task cites two locations in the same track file:

- `research/plan-homological-algebra-track.md:601`
- `research/plan-homological-algebra-track.md:735`

I treated the HA-2 block beginning at line `601` as the controlling design.
The later match at line `735` is not a rival page design; it is the B-page
subsection inside the same HA-2 block. The controlling instructions preserved
from that block are:

- homotopy comes before the quotient category
- the null-homotopic ideal and representative-independent composition are
  explicit proof obligations before `K(A)` is defined
- acyclic and contractible are kept separate
- the shift sign `(-1)^k` is nonnegotiable
- the split criteria are stated with their actual splitting hypotheses rather
  than smuggled in from acyclicity
- forward references remain `NONE`

### Design/spec drift

The design and the live spec disagree on the direct page prerequisite:

- HA-2 design: `chain-complexes-and-homology`
- live `research/plan-spec.json` and seed manifest:
  `chain-complexes-and-homology-examples`

Per the dispatch, I did not adjudicate that inside the batch. I kept the live
spec edge in the manifest and recorded the disagreement here. This matches the
existing stage-0 drift receipt in `research/frontier-25-alpha-step0-drift.md`,
which records this page as `VERDICT: no-drift` because the current declared
closure already contains the design's actual suppliers.

There is no competing design order statement to compare against the spec. The
live spec places:

- A page `chain-homotopy-and-the-homotopy-category` at order `365.039`
- B page `chain-homotopy-and-the-homotopy-category-examples` at order `365.04`

## 3. Scaffold shape and dependency choices

The scaffold now has:

- `chain-homotopy-and-the-homotopy-category` (A): **40 items**
- `chain-homotopy-and-the-homotopy-category-examples` (B): **8 items**

The A page is below the 60-item split threshold, so no split is proposed.

### Main structural decisions

- I kept the design's 35 ordinary A-page items plus all 5 planned `fs-` items,
  for the intended total of 40.
- I did not add extra local projective/injective definitions: the live closure
  already reaches the published page
  `subobject-lattices-generators-and-the-grothendieck-axioms`, so those terms
  can be depended on honestly.
- I kept the Hom-complex construction under an explicit existence hypothesis.
  The notes and coverage both record that step-5 authoring may need a bounded
  or finitely supported restriction if the ambient category does not admit the
  required products.
- I recorded the Hom-complex and shift well-definedness obligations directly in
  the manifest with `justified_by` only where that metadata matches the schema:
  `def-hom-complex-of-chain-complexes` by
  `lem-the-hom-complex-differential-squares-to-zero`, and
  `def-shift-of-a-chain-complex` by
  `lem-the-shifted-differential-squares-to-zero`.

### Why `def-homotopy-category-of-chain-complexes` has no `justified_by`

The design prose says item `17` is the well-definedness obligation for item
`18`. I preserved that mathematically by making item `17` the immediately
preceding lemma and item `18` depend on it. I did **not** encode item `17` as
`justified_by` metadata on item `18`, because the on-disk schema uses
`justified_by` for later lemmas that themselves depend on the definition they
justify. Here the representative-independence lemma is about the quotient data
from item `16`, not about an already-defined `K(A)` object.

## 4. Source set actually recorded

I recorded five source rows across three independent treatments:

1. Weibel chapter PDF:
   `https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf`
2. Rotman HTML book view:
   `https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html`
3. Stacks Section 12.14:
   `https://stacks.math.columbia.edu/tag/0119`
4. Stacks Section 12.16:
   `https://stacks.math.columbia.edu/tag/09MF`
5. Stacks Section 13.8:
   `https://stacks.math.columbia.edu/tag/05RN`

This satisfies the standing source rule:

- at least two independent treatments
- at least one textbook
- an eligible primary treatment

### Why this source mix

- Weibel is the primary textbook treatment for chain homotopy, null homotopy,
  the quotient category, and the shift convention.
- Rotman is the independent textbook control on degree conventions, homotopy,
  contractibility, and homotopy invariance of homology.
- The Stacks sections give open, live control on the shift functor, graded-map
  conventions, and the formal definition of `K(A)` in the general additive
  setting.

### Same-text URL choices

The design names Stacks chapter-level PDF locators. For this scaffold I used
the live section-tag URLs instead, because they are the same treatment in a
more precise and easier-to-verify HTML form. No mathematical scope changed from
that choice.

## 5. Source verification and fetch-receipt handling

I re-opened every recorded URL in the web reader on Sunday, August 30, 2026 and
checked that the quoted locator ranges match the live text.

### Receipt shape used in the coverage ledger

- For Weibel's exact MIT chapter-PDF URL, I reused the existing exact-URL
  `fetch_verified` block already present on disk in
  `research/frontier-24-batch-8.coverage.json`.
- For Rotman and the three Stacks tag URLs, the coverage ledger carries
  minimal manual `fetch_verified` blocks of the established repo shape:
  `{at, kind}` only.

I chose that conservative shape because earlier batch notes in this repo show
the shell environment commonly fails DNS resolution for external academic URLs,
while the web reader can still open the same documents. I did not fabricate
byte counts or hashes that I could not verify in this runner.

## 6. Harvest and disposition decisions

### Earlier material explicitly harvested as already published

The Weibel and Stacks rows deliberately harvest some HA-1 material and mark it
`already-published`, not ignored:

- `Ch(A)` is additive
- exactness in `Ch(A)` is degreewise
- bounded/bounded-above/bounded-below complexes

That keeps the ledger honest about what was read while preserving the current
page boundary.

### Deferred source results

I deferred exactly the results whose live planned home already exists:

- double complexes, the sign trick, and total complexes ->
  `double-complexes-exact-couples-and-convergence`
- truncations and the bounded homotopy-category variants ->
  `derived-categories`

I did not defer anything to a made-up page id.

### Out-of-scope source results

I kept three source results as explicit `out-of-scope` declines:

- Weibel's finitely generated free abelian-group strengthening of the split
  criterion
- Weibel's comparison of a split complex with its zero-differential homology
  complex
- Weibel's and Rotman's broader "what else is true about K(A)?" prompts beyond
  the designed scope of this page

Each row has a page-specific reason instead of boilerplate.

### Canonical scaffold rows

The coverage ledger uses a nonempty `canonical` block for the items that are
mathematically standard obligations of HA-2 but are not cleanly named as a
single source heading:

- the Hom-complex differential calculation
- the `H^0 Hom` identification
- the quotient-functor factorization theorem for homology
- the dual injective split criterion
- all five false statements
- all eight B-page example/counterexample items

This keeps the scaffold source-grounded without falsely attributing those items
to headings that do not actually state them in that exact form.

## 7. Known limits before step 5

- Item `def-hom-complex-of-chain-complexes` remains stated with the explicit
  product-existence hypothesis from the design. If step 5 specializes the page
  to a context without those products, the author must narrow the statement
  honestly rather than pretending the product exists.
- The page does **not** build a separate theorem that `K(A)` is nonabelian or
  triangulated. Those belong with the later cone/triangle and derived-category
  pages, not here.
- The bounded homotopy categories `K^+`, `K^-`, and `K^b` are harvested and
  explicitly deferred rather than silently omitted.

## 8. Validator runs

I ran the scaffold-stage checks on Sunday, August 30, 2026.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-7.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-1.pages.json research/frontier-25-batch-2.pages.json research/frontier-25-batch-3.pages.json research/frontier-25-batch-4.pages.json research/frontier-25-batch-5.pages.json research/frontier-25-batch-6.pages.json research/frontier-25-batch-7.pages.json research/frontier-25-batch-8.pages.json research/frontier-25-batch-9.pages.json research/frontier-25-batch-10.pages.json research/frontier-25-batch-11.pages.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-7.coverage.json`
- `node tools/url-sweep.mjs --coverage research/frontier-25-batch-7.coverage.json --out /tmp/frontier-25-batch-7-url-liveness.json --recover --fail-on-dead --timeout-ms 3000 --concurrency 1`
- `node tools/validate-plan.mjs /tmp/frontier-25-batch-7-spliced-plan.json`
- `git diff --check`

The `validate-plan` run used a temporary spliced copy of `research/plan-spec.json`
whose batch-7 page entries were replaced with the scaffolded entries from
`research/frontier-25-batch-7.pages.json`, so the item graph being validated was
the actual scaffold and not the empty base-plan placeholders.

## 9. Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-7.coverage.json`
  -> `coverage-checklist: 1 page(s), 75 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 242 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-7.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`

- `node tools/validate-plan.mjs /tmp/frontier-25-batch-7-spliced-plan.json`
  -> **pass with run-wide warnings only**. The tool ended `OK`; the visible
  warnings were the standing run-wide `redundant-prereq` advisories, and there
  was no batch-7-specific unresolved id, page-cycle, forward-reference, or
  B-page-leaf failure.

- `git diff --check`
  -> clean

- `node tools/url-sweep.mjs --coverage research/frontier-25-batch-7.coverage.json --out /tmp/frontier-25-batch-7-url-liveness.json --recover --fail-on-dead --timeout-ms 3000 --concurrency 1`
  -> `url-sweep: 0/5 live; 5 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-25-batch-7-url-liveness.json`

  Every failure was a shell-side DNS error, not a contradictory web-reader
  result:

  - `curl: (6) Could not resolve host: dokumen.pub`
  - `curl: (6) Could not resolve host: math.mit.edu`
  - `curl: (6) Could not resolve host: stacks.math.columbia.edu`

  I had already re-opened those same URLs successfully in the web reader on
  Sunday, August 30, 2026 before writing the ledger. So the remaining blocker
  is the shell transport layer for `url-sweep`, not a harvested same-text
  mismatch inside the coverage file.

## 10. Readiness

The scaffold artifacts themselves are internally consistent:

- manifest item graph: pass
- coverage harvest contract: pass
- manifest-only content policy: pass
- fetch-receipt presence gate: pass

The only red gate is the shell-side liveness sweep, and its failures are all
DNS resolution failures in this runner. No additional scaffold repair inside the
authorized files can make that shell transport succeed without changing the
environment outside batch ownership, so the exact blocker is now recorded here.

## Step-3 fix pass

Reviewing Alpha: group `c`, report
`research/frontier-25-alpha-c-step3-scaffold-review.md`.

- Batch-7 finding ids: none assigned. Disposition: accepted as a no-op fix
  pass; no pushback and no scaffold repair were needed on the current bytes.
  Evidence: the group-`c` review marks
  `chain-homotopy-and-the-homotopy-category` as `sufficient`, and its findings
  table contains only `C6-1` for batch `6`; the machine half
  `research/frontier-25-alpha-c-step3-verdicts.json` likewise records batch `7`
  as `sufficient`. Changed scaffold record:
  `research/frontier-25-batch-7.pages.json` and
  `research/frontier-25-batch-7.coverage.json` remain unchanged; this notes
  file now records the no-op fix pass explicitly.

- Source verification for this fix pass: I re-opened all `5` recorded HTTP(S)
  URLs from `research/frontier-25-batch-7.coverage.json` in the web reader on
  Sunday, August 30, 2026 and checked them against the ledger's exact locators.
  Evidence: the Weibel PDF still contains Section `1.2` through Translation
  `1.2.8` and Section `1.4` from Definition `1.4.1` through Exercise `1.4.5`;
  Rotman still exposes Section `6.1` lines `2328-2406`, from the map-of-degree
  definition through Exercise `6.6`; and the Stacks tag pages `0119`, `09MF`,
  and `05RN` still expose the recorded shift, graded-object, and homotopy-
  category definitions at the cited HTML line ranges. Changed scaffold record:
  none; no URL recovery, `original_url` rewrite, re-harvest, or coverage-row
  edit was needed.

- Required validators rerun on Sunday, August 30, 2026:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-7.coverage.json`
  -> `coverage-checklist: 1 page(s), 75 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-1.pages.json research/frontier-25-batch-2.pages.json research/frontier-25-batch-3.pages.json research/frontier-25-batch-4.pages.json research/frontier-25-batch-5.pages.json research/frontier-25-batch-6.pages.json research/frontier-25-batch-7.pages.json research/frontier-25-batch-8.pages.json research/frontier-25-batch-9.pages.json research/frontier-25-batch-10.pages.json research/frontier-25-batch-11.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-7.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`.
  `node tools/validate-plan.mjs /private/tmp/frontier-25-batch-7-spliced-plan.json`
  -> pass, ending with `OK — declared page order is acyclic and consistent; no
  item-level cycles, forward references, B-page dependencies, or unresolved
  ids among the 542 page(s) with item lists.` The preceding diagnostics were
  only the standing repository-wide `redundant-prereq` advisories outside batch
  `7`. Changed scaffold record: this notes file now records the validator
  reruns; the batch manifest and coverage artifacts remain unchanged.

## Step-5 authoring

Authoring date: Sunday, August 30, 2026.

### Authored pages

- `library/homological-algebra/chain-homotopy-and-the-homotopy-category.md`
- `library/homological-algebra/chain-homotopy-and-the-homotopy-category-examples.md`

### Authored item ids

- A-page ordinary items: `def-graded-morphism-of-chain-complexes`, `def-hom-complex-of-chain-complexes`, `lem-the-hom-complex-differential-squares-to-zero`, `prop-zero-cocycles-in-the-hom-complex-are-chain-maps`, `def-chain-homotopy`, `def-null-homotopic-chain-map`, `prop-chain-homotopy-is-an-equivalence-relation`, `lem-chain-homotopy-is-compatible-with-addition-and-composition`, `prop-null-homotopic-maps-form-a-two-sided-additive-ideal`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `cor-null-homotopic-maps-induce-zero-on-homology`, `def-chain-homotopy-equivalence`, `def-contractible-complex`, `thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism`, `cor-a-contractible-complex-is-acyclic`, `def-homotopy-classes-of-chain-maps`, `lem-composition-of-homotopy-classes-is-well-defined`, `def-homotopy-category-of-chain-complexes`, `thm-the-homotopy-category-is-additive`, `prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive`, `thm-homology-factors-uniquely-through-the-homotopy-category`, `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category`, `thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex`, `def-shift-of-a-chain-complex`, `lem-the-shifted-differential-squares-to-zero`, `def-shift-of-a-chain-map-and-chain-homotopy`, `thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories`, `prop-homology-of-a-shift-is-shifted-homology`, `prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms`, `def-suspension-and-desuspension-of-a-chain-complex`, `lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible`, `thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split`, `thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split`, `prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes`, `prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence`
- A-page false statements: `fs-chain-homotopic-maps-are-equal-as-chain-maps`, `fs-every-acyclic-complex-is-contractible`, `fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence`, `fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities`, `fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign`
- B-page examples/counterexamples: `ex-a-contracting-homotopy-for-the-two-term-identity-complex`, `ex-two-homotopic-maps-with-different-components`, `ex-the-hom-complex-of-two-two-term-complexes`, `ex-a-split-exact-complex-and-its-contraction`, `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension`, `cex-a-quasi-isomorphism-with-no-homotopy-inverse`, `ex-shifting-a-three-term-complex-with-all-signs`, `ex-homotopy-classes-as-h-zero-of-a-hom-complex`

### Provenance rationale

- I kept the foundational A-page definitions, lemmas, propositions, theorems, and corollaries `literature-derived` at the statement level because each is a standard sourced obligation already harvested in Weibel, Rotman, or Stacks.
- I tagged the page-local worked examples and most companion witnesses `ai-altered`: they instantiate the sourced mathematics concretely in `\mathbf{Ab}` but the exact chosen presentations are local to this batch rather than verbatim named source results.
- I tagged `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension` as `literature-derived` because Weibel explicitly uses the nonsplit-extension witness.
- I tagged all five `fs-` statements as `ai-altered`, not `ai-generated`, because `false-statement` is not an allowed generated-statement kind under `SCHEMA.md`, while the exact warning phrasing is still a local authoring formulation rather than a quoted source sentence.

### Narrowed or dropped claims

- None. I kept the scaffolded batch-7 claim set intact.

### Authoring repairs applied before the final reruns

- Initial `precheck` failed every proof-bearing item with `untagged-steps` because the first draft used wrapped multi-line proof rows. I applied the canonical repo repair with `node tools/tsx-run.mjs tools/reflow.mts ...` over the 37 proof-bearing files, then reran `precheck` to a clean pass.
- `proof-contract --strict` found one real citation-use mismatch in `prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms`; I repaired the proof step to cite the declared shift-autoequivalence fact and regenerated that contract entry.
- `rendercheck` found one real KaTeX defect in `fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign`; I removed the stray brace in the displayed equation and reran the touched checks.
- `citecheck` on the two equivalence-relation propositions still gives the standing heuristic `order-axioms` warnings because the prose contains the words `reflexivity` and `transitivity`. I triaged these as false heuristics: neither proof uses order-theoretic axioms, and adding a fake dependency would have been dishonest.

### Proof-contract artifact

- Wrote `research/frontier-25-batch-7.proof-contracts.json` for the 37 proof-bearing items, then regenerated its citation and derivation rows from the authored facts and proof steps with `node tools/regen-contract-entries.mjs ...` so the stored quotes and step maps match current disk.

### Validators actually run after authoring

- `node tools/tsx-run.mjs tools/precheck.mts <37 proof-bearing batch-7 items>` -> `37 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-25-batch-7.pages.json` -> `content-policy: 48 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/proof-contract.mjs research/frontier-25-batch-7.proof-contracts.json --strict` -> `proof-contract: 0 error(s), 0 warning(s), 37/37 item(s) checked`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.` The visible diagnostics were only the standing repository-wide `redundant-prereq` advisories outside batch `7`.
- `node tools/rendercheck.mjs <48 batch-7 item files> <2 batch-7 page files>` -> `OK — 50 file(s) ... every math span parses under the real KaTeX, and every frontmatter block parses under the renderer's YAML parser.`
- `git diff --check` -> clean

### Blockers

- None inside the authorized Step-5 scope.
