# frontier-28 · Beta · batch notes — `inverse-limits-and-noetherian-completion`

## 1. Scope, order, and owned artifacts

This batch owns the A/B pair
`inverse-limits-and-noetherian-completion` /
`inverse-limits-and-noetherian-completion-examples`
at orders `111.025` and `111.026`.

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`,
`research/frontier-28-beta-3.task.md`,
`research/frontier-28-dispatch/beta-batch-3.prompt.md`,
the CA-13 design block in `research/plan-commutative-algebra-track.md`
beginning at line `1118`, and the live page rows in `research/plan-spec.json`.
I also read the exact source ranges recorded in
`research/frontier-28-batch-3.coverage.json`.

Artifacts written by this dispatch:

- `research/frontier-28-batch-3.pages.json`
- `research/frontier-28-batch-3.coverage.json`
- this file

No plan structure, published content, workflow state, or another batch's
artifacts were edited.

## 2. Design/spec drift and source-locator drift

### The page order agrees, but the prerequisite declaration does not

The design and the live plan spec agree on:

- page id
- companion page
- title
- category
- order `111.025`

They do **not** agree on prerequisites:

- the generated task and `research/plan-spec.json` give the A page the direct
  page prerequisite `flatness-and-faithful-flatness-examples`;
- the CA-13 design text instead says the page requires `CA-2`, `CA-11`,
  `CA-12`, and the published exact-sequence/tensor pages.

Per the batch contract, I did **not** adjudicate that conflict locally. The
manifest keeps the spec's page-level `requires` field unchanged, and this note
records the mismatch for the drift machinery.

### The live Altman-Kleiman URL uses earlier local numbering than the design cites

The controlling design cites later-section numbers such as `(22.36)`,
`(22.54)`, and `(22.69)`. The live exact URL
`https://web.mit.edu/18.705/www/13Ed.pdf`, re-opened on Monday, August 31,
2026, is the 2013 MIT `13Ed` text whose corresponding completion material is
numbered through `(22.31)` in the main chapter.

I therefore kept the authors/text/source, but the coverage artifact records the
actual live locators I read, such as `(22.24)` for faithful flatness and
`(22.28)` for complete Nakayama, instead of copying the design's stale local
numbering verbatim.

## 3. Scaffold shape

The A page has **21 items**. The B page has **7 items**. The A page is well
below the 60-item split ceiling, so no split is proposed.

The A page breaks into six proof clusters:

- filtration, adic topology, inverse systems, and the inverse-limit universal
  property;
- left exactness and the countable Mittag-Leffler exactness repair;
- separatedness, completion, the completion kernel, and the completion
  universal property;
- exactness, tensor comparison, and flatness of Noetherian completion;
- faithful flatness, Noetherianity, and the local-ring completion theorem;
- finite-module completeness, complete Nakayama, and the final
  dimension/Hilbert-Samuel comparison

The B page follows the design table exactly:

- `ex-p-adic-integers-as-an-inverse-limit`
- `ex-adic-completion-of-the-integers`
- `ex-equivalent-adic-filtrations`
- `ex-completion-not-exact-without-finiteness`
- `ex-completion-of-a-domain-not-a-domain`
- `ex-iterated-adic-completions`
- `ex-semilocal-adic-completion`

## 4. Design decisions preserved

### No formal power series on the A page

The design is explicit that formal power series are not defined or used in this
low pair. I therefore kept the A-page completion route entirely in terms of
inverse limits of quotient modules. The Altman-Kleiman formal-power-series
example was read and dispositioned, but it stays out of scope here.

### “Complete” includes separated, and no Cauchy-sequence quotient is introduced

The design's proof-strategy block explicitly says that the canonical completion
map and all comparison maps are checked independently of residue
representatives, and that no Cauchy-sequence quotient is introduced. I reflected
that directly in the scaffold:

- `def-separated-and-complete-filtered-module` defines completeness by the
  canonical map to the inverse limit of filtered quotients;
- `thm-kernel-and-universal-property-of-adic-completion` is the item that
  exposes the kernel/intersection seam and the compatible-family universal
  property.

### The derived $\\varprojlim^1$ obstruction stays out of scope

The design wants the ordinary countable Mittag-Leffler exactness theorem, not a
detour through derived inverse-limit notation. The scaffold therefore includes:

- `def-mittag-leffler-inverse-system`
- `thm-exactness-of-inverse-limits-under-mittag-leffler`

and marks the source rows whose only added payload is $\\varprojlim^1$ notation
as `out-of-scope`.

### Flatness is proved by the ideal criterion, not by Tor

The design's chosen route is exactness/tensor comparison first, then flatness by
the ideal criterion. I preserved that order:

- `thm-completion-is-exact-on-finite-modules`
- `thm-completion-as-extension-of-scalars`
- `cor-completion-commutes-with-finite-quotients-and-submodules`
- `thm-flatness-of-noetherian-completion`

No Tor item is imported or minted here.

### Faithful flatness keeps the Jacobson-radical hypothesis explicit

The A page does **not** claim that every adic completion map is faithfully
flat. The theorem is exactly
`thm-faithful-flatness-of-jacobson-adic-completion`, and the notes/coverage make
the Jacobson-radical hypothesis explicit because the design treats it as
load-bearing.

## 5. Dependency rationale and known limits

### A local reorder was necessary to keep the page dependency-valid

The design table lists `def-separated-and-complete-filtered-module` before the
inverse-system definition it uses. In the manifest I moved the inverse-system
definition and its universal-property theorem earlier, so the completion
definitions are dependency-closed on the page itself.

This is a local dependency repair, not a design/spec adjudication: the
mathematical route is unchanged, but the item list now respects the validator's
same-page order rule.

### Group-a Step-3 dependency repair

By Tuesday, September 1, 2026, group `a` had also scaffolded batch `2`, so the
remaining CA-11 / CA-12 bridges no longer needed to stay implicit in strategy
prose. The page-level prerequisite remains the live spec value
`flatness-and-faithful-flatness-examples`, but the manifest now records the
load-bearing cross-batch item deps explicitly:

- `thm-completion-is-exact-on-finite-modules` now depends on
  `thm-artin-rees-lemma` and
  `cor-induced-and-intrinsic-adic-filtrations-are-equivalent`.
- `thm-faithful-flatness-of-jacobson-adic-completion` now depends on
  `thm-faithfully-flat-ring-map-characterisations`.
- `thm-finite-modules-over-complete-noetherian-rings-are-complete` now depends
  on `thm-krull-intersection-theorem`.
- `thm-completion-preserves-dimension-and-hilbert-samuel-data` now depends on
  `def-hilbert-samuel-multiplicity` and
  `thm-hilbert-samuel-dimension-theorem`.

This closes the only backward-prerequisite seam that was specific to the
earlier scaffold timing rather than to the intended CA-13 route.

### The GT-17 supplier example stays comparison-only

The design's first B-page row says `ex-p-adic-integers-as-an-inverse-limit`
should cite the GT-17 supplier and prove only the canonical agreement with the
completion object used here. I preserved that exact shape. Because the batch-1
group-theory manifest is likewise still unscaffolded, the example's `deps` stay
inside CA-13 and its strategy records the GT-17 supplier role instead of adding
an unresolved cross-batch item dep.

### Source stack and URL discipline

I used six exact source URLs:

1. `https://web.mit.edu/18.705/www/13Ed.pdf`
2. `https://www.jmilne.org/math/xnotes/CA.pdf`
3. `https://stacks.math.columbia.edu/tag/0594`
4. `https://stacks.math.columbia.edu/tag/03C9`
5. `https://stacks.math.columbia.edu/tag/00M9`
6. `https://stacks.math.columbia.edu/tag/0BNH`

This satisfies the standing source rule with two independent primary
treatments:

- Altman-Kleiman is a textbook-style primary source with a harvestable table of
  contents;
- Milne is an independent full lecture-note treatment with a harvestable table
  of contents;
- Stacks provides the independent section-by-section check for the exact
  inverse-limit and completion statements.

On Monday, August 31, 2026, I re-opened all six exact URLs in the web reader.
For the two PDFs, I reused exact-url `fetch_verified` receipts already on disk
from `research/frontier-23-batch-3.coverage.json`. For the four Stacks section
URLs, no exact-url receipt already existed in `research/`, so I used the
accepted minimal manual `fetch_verified` shape with `verified_via: web-open`.

## 6. Validation

Checks run on Monday, August 31, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-28-batch-3.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-28-batch-3.coverage.json','utf8')); console.log('json-parse: ok')"`
- `node tools/coverage-checklist.mjs research/frontier-28-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-3.coverage.json --stamp`
- `timeout 30s node tools/url-sweep.mjs --coverage research/frontier-28-batch-3.coverage.json --out /tmp/frontier-28-batch-3-url-liveness.json --recover --fail-on-dead --timeout-ms 4000`
- `node tools/prosecheck.mjs research/frontier-28-batch-3.notes.md --warnings`
- `git diff --check -- research/frontier-28-batch-3.pages.json research/frontier-28-batch-3.coverage.json research/frontier-28-batch-3.notes.md`

Results:

- JSON parsing: **pass** — `json-parse: ok`.
- Coverage checklist: **pass** — `coverage-checklist: 1 page(s), 83 harvested result(s), 0 error(s), 0 warning(s)`.
- Whole-run manifest-only content policy: **pass** — `content-policy: 196 scoped item(s), 0 error(s), 0 warning(s)`.
- `validate-plan`: **pass**. Final receipt:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.
  NOTE: 671 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `source-fetch-check --stamp`: **pass** — `source-fetch-check: 6/6 source(s) fetch-verified (0 newly stamped)`.
- `prosecheck`: **warnings only** — 2 expected `count-in-prose` warnings from the item totals; no positional contradiction against the live spec.
- `git diff --check`: **pass** — no output.

### Remaining blocker

- `url-sweep --recover --fail-on-dead --timeout-ms 4000`: **not green in this shell**.
  The initial unbounded run stalled without emitting a summary, so I interrupted
  it. The timeout-bounded rerun exited with status `124` after `30s` and did
  **not** create `/tmp/frontier-28-batch-3-url-liveness.json`, so there is no
  tool-produced liveness ledger to quote here.

Because all six exact URLs were re-opened in the web reader on Monday,
August 31, 2026, and `source-fetch-check` passed on the stored exact-URL
receipts, I did **not** re-source or drop any harvested result. The transport
failure is shell-local, but it remains the only outstanding validator blocker in
this batch notes file.

## Step-3 fix pass

On Tuesday, September 1, 2026 I re-read
`research/frontier-28-alpha-a-step3-scaffold-review.md` for the stable Step-3
findings that apply to batch `3`, the controlling CA-13 design block in
`research/plan-commutative-algebra-track.md`, the live
`research/plan-spec.json` rows for the owned A/B pair, the current batch-3
`pages` and `coverage` files, and the current batch-3 rows in
`research/frontier-28-alpha-a-scope-decisions.json`. I also re-opened each of
the six recorded source `url` values in
`research/frontier-28-batch-3.coverage.json` through the web-research channel
to confirm that the current harvest still points at live, source-matching URLs.

- Finding id: none assigned in the alpha review for this batch-local repair;
  the stable finding is the direct repair row under
  `### Batch 3 — inverse-limits-and-noetherian-completion`.
  Disposition: `accepted`; the alpha finding stands.
  Evidence: the current `research/frontier-28-batch-3.pages.json` already
  carries the exact backward-prerequisite repair the alpha review required:
  `thm-completion-is-exact-on-finite-modules` depends on
  `thm-artin-rees-lemma` and
  `cor-induced-and-intrinsic-adic-filtrations-are-equivalent`;
  `thm-faithful-flatness-of-jacobson-adic-completion` depends on
  `thm-faithfully-flat-ring-map-characterisations`;
  `thm-finite-modules-over-complete-noetherian-rings-are-complete` depends on
  `thm-krull-intersection-theorem`; and
  `thm-completion-preserves-dimension-and-hilbert-samuel-data` depends on
  `def-hilbert-samuel-multiplicity` and
  `thm-hilbert-samuel-dimension-theorem`. The six recorded source URLs also
  re-opened successfully on current bytes:
  `https://web.mit.edu/18.705/www/13Ed.pdf`,
  `https://www.jmilne.org/math/xnotes/CA.pdf`,
  `https://stacks.math.columbia.edu/tag/0594`,
  `https://stacks.math.columbia.edu/tag/03C9`,
  `https://stacks.math.columbia.edu/tag/00M9`, and
  `https://stacks.math.columbia.edu/tag/0BNH`.
  Changed scaffold record: no new `pages.json` or `coverage.json` edit was
  needed in this pass because the repaired manifest state and fetch-verified
  source harvest were already present on current disk; this notes section is
  the only batch-3 scaffold change in the fix pass.

Validator reruns on Tuesday, September 1, 2026:

- `node tools/coverage-checklist.mjs research/frontier-28-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-3.coverage.json`

Results:

- Coverage checklist: `coverage-checklist: 1 page(s), 83 harvested result(s),
  0 error(s), 0 warning(s)`.
- Whole-run manifest-only content policy:
  `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`.
- `source-fetch-check`: `source-fetch-check: 6/6 source(s) fetch-verified`.
- `validate-plan`: passed on the current bytes, ending with the standard
  terminal `OK` line and only the standing repository-wide
  `redundant-prereq` advisories:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.
  NOTE: 671 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

## Step-5 authoring

On Tuesday, September 1, 2026 I authored the owned A/B page pair directly at:

- `library/commutative-algebra/inverse-limits-and-noetherian-completion.md`
- `library/commutative-algebra/inverse-limits-and-noetherian-completion-examples.md`

I also authored the in-scope draft item files for all 28 planned ids:

- A page: `def-filtration-and-adic-filtration`, `def-adic-topology-on-a-module`,
  `def-inverse-system-and-inverse-limit-of-modules`,
  `thm-universal-property-of-an-inverse-limit-of-modules`,
  `thm-inverse-limits-are-left-exact`, `def-mittag-leffler-inverse-system`,
  `thm-exactness-of-inverse-limits-under-mittag-leffler`,
  `def-separated-and-complete-filtered-module`,
  `def-adic-completion-of-a-module`,
  `thm-kernel-and-universal-property-of-adic-completion`,
  `prop-units-in-an-adically-complete-ring`,
  `thm-completion-is-exact-on-finite-modules`,
  `thm-completion-as-extension-of-scalars`,
  `cor-completion-commutes-with-finite-quotients-and-submodules`,
  `thm-flatness-of-noetherian-completion`,
  `thm-faithful-flatness-of-jacobson-adic-completion`,
  `thm-noetherianity-of-adic-completion`,
  `thm-completion-of-a-noetherian-local-ring`,
  `thm-finite-modules-over-complete-noetherian-rings-are-complete`,
  `thm-complete-nakayama-lemma`,
  `thm-completion-preserves-dimension-and-hilbert-samuel-data`.
- B page: `ex-p-adic-integers-as-an-inverse-limit`,
  `ex-adic-completion-of-the-integers`, `ex-equivalent-adic-filtrations`,
  `ex-completion-not-exact-without-finiteness`,
  `ex-completion-of-a-domain-not-a-domain`,
  `ex-iterated-adic-completions`, `ex-semilocal-adic-completion`.

I wrote `research/frontier-28-batch-3.proof-contracts.json` and then
regenerated its `citations` and `derivations` from the final on-disk items via
`node tools/regen-contract-entries.mjs ...`, so the contract rows now match the
precheck-clean step numbering exactly.

Provenance rationale:

- Every definition and theorem/example claim in this batch remains
  `provenance.statement: literature-derived`, matching the batch coverage and
  the design's source-backed scope.
- Definition proofs remain `not-applicable`.
- Proof-bearing items use `provenance.proof: ai-altered` because the written
  proofs are fresh library prose derived from the cited sources rather than
  copied source proofs.

Narrowed or dropped claims:

- None of the planned batch-3 ids were dropped.
- The A-page route stayed on inverse limits, Artin-Rees consequences, tensor
  comparison, and the ideal criterion, exactly as designed; no Tor or
  formal-power-series theorem was introduced on the A page.
- The one place formal power series appear is the B-page pathology
  `ex-completion-of-a-domain-not-a-domain`, where the completed ring itself is
  the subject of the example. That notation is isolated to the example and is
  not used as an A-page dependency.

Authoring-local repairs made during validation:

- I converted all proof-bearing items to the canonical one-paragraph phase
  format required by `precheck`, adopting the checker's step renumberings where
  it repaired ordering.
- I added a small number of missing dependency declarations surfaced by
  `proof-contract --strict`, and I removed two unused fact rows
  (`ex-p-adic-integers-as-an-inverse-limit`'s old `L1` and
  `ex-semilocal-adic-completion`'s old `L2`) so the citation contracts matched
  the proofs actually written.

Checks run on Tuesday, September 1, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts` on the 22 proof-bearing batch-3 items
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/content-policy.mjs research/frontier-28-batch-3.pages.json`
- additional validation: `node tools/proof-contract.mjs research/frontier-28-batch-3.proof-contracts.json --strict`
- hygiene: `git diff --check -- items library/commutative-algebra research/frontier-28-batch-3.proof-contracts.json research/frontier-28-batch-3.notes.md`

Results:

- `precheck`: pass — `22 checked, 0 failing — all clean`.
- `validate-plan`: pass on current bytes, ending with the standard `OK` line and
  only the standing repository-wide `redundant-prereq` advisories.
- item-scoped `content-policy`: pass — `28 scoped item(s), 0 error(s), 0 warning(s)`.
- `proof-contract --strict`: pass — `0 error(s), 0 warning(s), 22/22 item(s) checked`.
- `git diff --check`: pass — no output.

Blockers:

- None in this Step-5 authoring pass.
