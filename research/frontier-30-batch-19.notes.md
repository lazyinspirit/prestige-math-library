# frontier-30 batch 19 notes - beta scaffold

Owned pairs:

- `post-correspondence-and-language-undecidability` /
  `post-correspondence-and-language-undecidability-examples`
- `acceptable-numberings-smn-and-the-recursion-theorem` /
  `acceptable-numberings-smn-and-the-recursion-theorem-examples`

Artifacts written in this dispatch:

- `research/frontier-30-batch-19.pages.json`
- `research/frontier-30-batch-19.coverage.json`
- this file

Session date: Saturday, September 5, 2026 (AEST).

## Design against spec

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`research/frontier-30-dispatch/beta-batch-19.prompt.md`,
`research/plan-spec.json`, and the matched design locations in
`research/plan-computability-theory-track.md`.

For `post-correspondence-and-language-undecidability`, the two cited lines are
not competing amendments:

- line `650` starts the full `TC-14` block;
- line `673` is the B-page subheading inside that same `TC-14` block.

I therefore treated the full `TC-14` block starting at line `650` as
controlling, with line `673` read as part of the same design rather than as a
rival source.

For `acceptable-numberings-smn-and-the-recursion-theorem`, line `721` starts
the full `TC-16` block, so that block is the controlling design text.

There is one live Step-3 closure repair and one Step-3 fix-pass order repair
to record for this batch.

- Beta's original manifest matched the spec/design prerequisite lists.
- On the current Saturday, September 5, 2026 bytes,
  `thm-proper-inclusions-in-the-chomsky-hierarchy` also depends on
  `thm-pumping-lemma-for-regular-languages`, whose home page is
  `myhill-nerode-theory-and-dfa-minimization` at order `589`.
- Step 3 therefore adds that backward prerequisite to
  `post-correspondence-and-language-undecidability` in the manifest.

Apart from that repair, the current spec and the controlling design still agree
on:

- page id
- companion page id where one is declared
- title
- order
- category
- declared prerequisite pages

## Item census and split check

- A page `post-correspondence-and-language-undecidability`: `15` items
- B page `post-correspondence-and-language-undecidability-examples`: `3` items
- A page `acceptable-numberings-smn-and-the-recursion-theorem`: `16` items
- B page `acceptable-numberings-smn-and-the-recursion-theorem-examples`: `3` items

Neither A page is close to the `60`-item split ceiling, so no split is needed.

## Route choices

### TC-14 -- `post-correspondence-and-language-undecidability`

I kept the design spine and made the following choices explicit.

1. The undecidability route begins with modified PCP via computation histories,
   then transfers to ordinary PCP, then pushes PCP into grammar problems.
2. CFG intersection-emptiness is proved through the standard paired top/bottom
   grammar construction from PCP, not by importing a not-yet-authored global
   language-problem wrapper.
3. CFG universality follows the computation-history route directly from machine
   acceptance, matching Sipser's lecture-10 seam rather than forcing it through
   PCP.
4. CFG ambiguity is kept as the distinct PCP reduction using two derivation
   branches with reversed index suffixes.
5. The Chomsky-hierarchy item is not just a definition dump: it closes the page
   by packaging the proper containments that earlier pages have prepared.

Important local choices:

- I recorded the standard false-statement trap exactly as the design names it:
  PCP never permits reordering symbols inside a single domino.
- I kept `thm-cfg-equivalence-is-undecidable` in the design's item slot even
  though the cleanest proof route is the standard reduction from universality.
  The design text lists equivalence before universality even though the stated
  strategy reduces universality to equivalence, so the Step-3 fix pass repairs
  the local order by placing `thm-cfg-universality-is-undecidable` first in the
  manifest while keeping the same proof route and item inventory.
- I used page-level `canonical` coverage rows for the PCP-to-intersection and
  universality-to-equivalence seams because the live sources I could verify
  today did not package those exact reductions under their own headings.

### TC-16 -- `acceptable-numberings-smn-and-the-recursion-theorem`

I followed the design literally and kept the recursion-theory block modular.

1. start from abstract numberings of partial computable functions;
2. distinguish universal from acceptable numberings before proving the full
   `s-m-n` family;
3. keep effective specialization as its own corollary;
4. isolate the diagonal self-reference construction as the intermediate lemma
   between `s-m-n` and Kleene's recursion theorem;
5. separate the parameterized recursion theorem from the base fixed-point
   theorem; and
6. close with productive/creative sets, Myhill, and the acceptable-numbering
   intertranslation result.

Important local choices:

- I defined `acceptable` at a level that leaves the full `s^m_n` family to the
  actual `thm-smn-parameter-theorem`, instead of making the theorem vacuous by
  baking the whole statement into the definition item.
- `prop-fixed-machine-coding-is-acceptable` is routed through the fixed machine
  coding and previously published normal-form machinery, not through a separate
  universal-program page.
- I used page-level `canonical` coverage rows for the computable-program-
  transformer definition and for the diagonal fixed-point lemma, because the
  live sources isolate the surrounding theorems more clearly than those two
  exact intermediate packaging decisions.

## Dependency notes

- **Machine/history seams are already on disk.** TC-14 reuses the published
  computation-history definitions and the decidable-history checker instead of
  rebuilding them locally.
- **Grammar-problem seams are already named.**
  `thm-pumping-lemma-for-regular-languages`,
  `def-cfg-equivalence-and-ambiguity-problems`, `cor-cfl-membership-is-decidable`,
  `thm-cfg-emptiness-and-finiteness-are-decidable`,
  `thm-cfls-are-not-closed-under-intersection`, and
  `thm-decidable-languages-are-closed-under-boolean-operations` are the key
  earlier interfaces for TC-14.
- **Recursion-theory seams are already prepared.** TC-16 reuses
  `def-kleene-t-predicate-and-output-function`, `thm-kleene-normal-form`,
  `thm-partial-recursive-iff-turing-computable`,
  `def-natural-number-coding-of-finite-sequences`, and the fixed machine
  encoding items.
- **No B-page item is load-bearing.** Every A-page dependency closes using only
  earlier published items or earlier items from the same A page.

## Sources actually read

I re-opened the following live sources in the web reader while preparing this
scaffold.

### TC-14 sources

1. John Watrous, *Introduction to the Theory of Computing*:
   `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf`
2. MIT OpenCourseWare, *Lecture 10: Computation History Method*:
   `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/lecture-10-computation-history-method/`
3. Doug Baldwin, *Ambiguity of CFGs is Undecidable*:
   `https://tildesites.geneseo.edu/~baldwin/math304/spring2016/0413cfg.php`

### TC-16 sources

1. Robert I. Soare, *Turing Computability: Theory and Applications*:
   `https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory`
2. Lawrence S. Moss, *Invitation to Computability and Recursion*, `The s-m-n Theorem`:
   `https://lmoss.github.io/onesharp/more_programs/smn.html`
3. Lawrence S. Moss, *Invitation to Computability and Recursion*, `The Recursion Theorem`:
   `https://lmoss.github.io/onesharp/recThm/recursion_theorem.html`
4. Richard Zach, *Incompleteness and Computability*:
   `https://ic.openlogicproject.org/ic-screen.pdf`

Why this source stack is enough:

- Watrous is the independent lecture-note backbone for the hierarchy,
  ambiguity basics, decidability baselines, and reduction framework.
- MIT OCW lecture 10 is the live primary computation-history source for the
  `PCP` / `ALL_CFG` seam.
- Baldwin supplies the explicit PCP-to-ambiguity construction under its own
  lecture heading.
- Soare is the main textbook treatment for acceptable numberings, recursion,
  productive and creative sets, and Myhill.
- Moss supplies a second independent textbook treatment of `s-m-n` and the
  recursion theorem at the level of actual self-reference constructions.
- Open Logic gives an additional textbook treatment of `s-m-n` and universal
  partial computable functions in standard numbering language.

## URL discipline and fetch receipts

Every URL recorded in `research/frontier-30-batch-19.coverage.json` was opened
through the web reader while preparing this scaffold.

Runner-local shell networking is restricted in this workspace, so I could not
honestly mint shell-side byte-count or hash receipts. Following the same
truthful convention already used by recent frontier batches, the coverage file
carries manual `fetch_verified` receipts marked `verified_via: web-open` with
the exact URL, the document kind, and the visible page count where the reader
exposed one.

I did not invent curl receipts, byte counts, or hashes that the shell could
not actually obtain.

## Published dependencies opened on disk

I opened the published pages or items actually carrying the reused interfaces:

- `library/computability-theory/computable-reductions-and-rices-theorem.md`
- `library/computability-theory/context-free-pumping-ogden-and-parsing.md`
- `library/computability-theory/primitive-recursive-and-partial-computable-functions.md`
- `items/def-effective-encoding-of-turing-machines.md`
- `items/lem-machine-encoding-is-injective-and-decodable.md`
- `items/def-cfg-equivalence-and-ambiguity-problems.md`
- `items/thm-pumping-lemma-for-regular-languages.md`
- `items/def-halting-computation-and-divergence.md`
- `items/prop-valid-computation-histories-are-decidable.md`
- `items/thm-decidable-languages-are-closed-under-boolean-operations.md`

This is enough for the scaffold's declared proof routes.

## Known limits and step-5 risks

- The controlling TC-14 design text still lists
  `thm-cfg-equivalence-is-undecidable` before
  `thm-cfg-universality-is-undecidable`, but the current scaffold repairs that
  inconsistency locally. Step 5 should preserve the repaired order and keep the
  universality-to-equivalence seam explicit rather than silently collapsing the
  two grammar problems.
- `thm-cfg-universality-is-undecidable` must keep the invalid-history grammar
  construction explicit. If the authoring pass says only "by computation
  histories" without naming what the grammar recognizes, the proof will look
  circular.
- `thm-cfg-ambiguity-is-undecidable` must keep the reversed tile-index suffixes
  visible. Without them, the grammar can become accidentally ambiguous for the
  wrong reason.
- `thm-proper-inclusions-in-the-chomsky-hierarchy` must keep the witness
  languages separate by containment: one witness for regular versus context-
  free, one for context-free versus decidable, and `A_TM` for decidable versus
  c.e.
- `prop-fixed-machine-coding-is-acceptable` must be explicit about where the
  universal evaluator and hard-wiring operation come from in the chosen coding.
- `lem-self-reference-construction-from-smn` is the technical hinge of TC-16.
  If the authoring pass jumps straight from `s-m-n` to the recursion theorem,
  the fixed-point argument will look like magic rather than a computable index
  construction.
- `thm-nonhalting-is-productive-and-halting-is-creative` must keep the
  diagonalized c.e. subset and the productive witness distinct; otherwise the
  proof collapses the set being diagonalized against with the witness produced
  outside it.
- `fs-program-indices-are-unique` should be refuted extensionally, not by
  cosmetic differences between source texts. The page's whole point is that
  acceptable numberings separate syntax from computed function.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-30-batch-19.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-30-batch-19.coverage.json","utf8")); console.log("json-parse: ok")'
node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-19.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-19.pages.json
```

## Step-3 fix pass

Reviewed `research/frontier-30-alpha-f-step3-scaffold-review.md` on Saturday,
September 5, 2026, then rechecked batch `19` against the live TC-14 / TC-16
design blocks, the current batch manifest and coverage, the recorded source
URLs, and an overlay `validate-plan` run spliced from the current
`research/plan-spec.json`.

- `B19-1` — disposition: `stands`; the earlier closure repair is already
  present on current bytes. Evidence: the A-page `requires` list in
  `research/frontier-30-batch-19.pages.json` already includes
  `myhill-nerode-theory-and-dfa-minimization`, which is the published home page
  of `thm-pumping-lemma-for-regular-languages`, so
  `thm-proper-inclusions-in-the-chomsky-hierarchy` no longer reaches outside
  the declared prerequisite closure. Changed scaffold record: no new `B19-1`
  manifest or coverage edit in this pass.
- `B19-2` — disposition: `repaired`. Evidence: before the edit, the overlay
  validator reported
  `[intra-order] post-correspondence-and-language-undecidability: thm-cfg-equivalence-is-undecidable depends on thm-cfg-universality-is-undecidable, which appears LATER on the same page`.
  The controlling TC-14 block also labels its list "in dependency order", so
  preserving the design text's local misordering would leave the scaffold
  mechanically invalid. I therefore moved
  `thm-cfg-universality-is-undecidable` ahead of
  `thm-cfg-equivalence-is-undecidable` in
  `research/frontier-30-batch-19.pages.json` without changing either item's
  deps or stated proof route. Changed scaffold record: reordered those two
  TC-14 A-page items in `research/frontier-30-batch-19.pages.json`.

Source verification for this fix pass:

- I re-opened all seven recorded source URLs through the web reader on
  Saturday, September 5, 2026: Watrous, MIT OCW Lecture 10, Baldwin, Soare on
  Scribd, both Moss pages, and the Open Logic PDF.
- All seven sources still resolve at the recorded URLs and remain consistent
  with the harvested locators and dispositions in
  `research/frontier-30-batch-19.coverage.json`.
- No alternate URL recovery, archive substitution, or coverage rewrite was
  required, so `research/frontier-30-batch-19.coverage.json` stays unchanged.

Validator rerun on Saturday, September 5, 2026:

- `node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-30-batch-19.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-30-batch-19.coverage.json","utf8")); console.log("json-parse: ok")'`
  -> `json-parse: ok`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-19.coverage.json`
  -> `coverage-checklist: 2 page(s), 46 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  -> `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-19.coverage.json`
  -> `source-fetch-check: 7/7 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`
- `node -e 'const fs=require("node:fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-30-batch-19.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-30-batch-19-spliced-plan.json", JSON.stringify(plan, null, 2) + "\\n"); console.log("spliced-plan: ok")'`
  -> `spliced-plan: ok`.
- `node tools/validate-plan.mjs /tmp/frontier-30-batch-19-spliced-plan.json`
  -> pass, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 702 page(s) with item lists.`
- `git diff --check -- research/frontier-30-batch-19.pages.json research/frontier-30-batch-19.notes.md`
  -> clean.
- Changed scaffold record: reordered `thm-cfg-universality-is-undecidable`
  ahead of `thm-cfg-equivalence-is-undecidable` in
  `research/frontier-30-batch-19.pages.json`.
- Changed scaffold record: appended this Step-3 fix-pass receipt in
  `research/frontier-30-batch-19.notes.md`.

## Step-5 authoring

Authoring date: Saturday, September 5, 2026 (AEST).

Authored page files:

- `library/computability-theory/post-correspondence-and-language-undecidability.md`
- `library/computability-theory/post-correspondence-and-language-undecidability-examples.md`
- `library/computability-theory/acceptable-numberings-smn-and-the-recursion-theorem.md`
- `library/computability-theory/acceptable-numberings-smn-and-the-recursion-theorem-examples.md`

Authored item ids:

- TC-14 A page:
  `def-post-correspondence-problem`,
  `def-modified-post-correspondence-problem`,
  `lem-computation-history-domino-encoding`,
  `thm-modified-pcp-is-undecidable`,
  `lem-modified-pcp-reduces-to-pcp`,
  `thm-post-correspondence-is-undecidable`,
  `prop-post-correspondence-is-recognizable`,
  `thm-cfg-intersection-emptiness-is-undecidable`,
  `thm-cfg-universality-is-undecidable`,
  `thm-cfg-equivalence-is-undecidable`,
  `thm-cfg-ambiguity-is-undecidable`,
  `def-chomsky-hierarchy`,
  `thm-proper-inclusions-in-the-chomsky-hierarchy`,
  `fs-pcp-allows-symbol-reordering-within-dominoes`,
  `fs-two-decidable-cfls-have-decidable-intersection-emptiness`.
- TC-14 B page:
  `ex-modified-pcp-is-undecidable`,
  `ex-proper-inclusions-in-the-chomsky-hierarchy`,
  `cex-pcp-allows-symbol-reordering-within-dominoes`.
- TC-16 A page:
  `def-numbering-of-partial-computable-functions`,
  `def-universal-and-acceptable-numbering`,
  `prop-fixed-machine-coding-is-acceptable`,
  `def-parameter-specialization-function`,
  `thm-smn-parameter-theorem`,
  `cor-effective-program-specialization`,
  `def-computable-program-transformer`,
  `lem-self-reference-construction-from-smn`,
  `thm-kleenes-second-recursion-theorem`,
  `thm-recursion-theorem-with-parameters`,
  `def-productive-and-creative-set`,
  `thm-nonhalting-is-productive-and-halting-is-creative`,
  `thm-myhill-isomorphism-theorem-for-creative-sets`,
  `prop-acceptable-numberings-are-computably-intertranslatable`,
  `fs-recursion-theorem-needs-source-file-access`,
  `fs-program-indices-are-unique`.
- TC-16 B page:
  `ex-smn-parameter-theorem`,
  `ex-acceptable-numberings-are-computably-intertranslatable`,
  `cex-recursion-theorem-needs-source-file-access`.

Proof-contract output:

- Created `research/frontier-30-batch-19.proof-contracts.json`.
- Ran `regen-contract-entries` against all 29 proof-bearing batch ids after the
  final precheck-clean text was on disk.

Provenance rationale actually used:

- Source-backed definitions, lemmas, propositions, theorems, and corollaries
  on the two A pages were tagged `statement: literature-derived`.
- Their local proofs and refutations were tagged `proof: ai-generated`.
- The six B-page examples and counterexamples were intentionally fresh local
  witnesses tagged `statement: ai-generated`, `proof: ai-generated`, with the
  required `generation.role` set to `example` or `counterexample`.
- The two false statements on each A page remain source-backed traps, so they
  were tagged `statement: ai-altered`, not `ai-generated`.

Authoring-time dependency tightenings:

- `thm-proper-inclusions-in-the-chomsky-hierarchy` now also declares
  `thm-machine-acceptance-is-undecidable`, because the strictness of
  decidable versus c.e. is proved with the explicit nondecidability of
  `A_{TM}`.
- `thm-myhill-isomorphism-theorem-for-creative-sets` now also declares
  `thm-recursion-theorem-with-parameters`, because the written reduction from
  `K` into an arbitrary creative set uses the uniform fixed-point construction
  rather than only the nonparametric fixed-point theorem.

Narrowed or dropped claims:

- None. I kept the full scaffolded item inventory for both A/B pairs.

Blockers:

- None remaining in batch-local authoring scope.

Focused validator record on Saturday, September 5, 2026 (AEST):

- `node tools/tsx-run.mjs tools/precheck.mts <all 37 batch item files>`
  -> pass, ending `29 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-30-batch-19.pages.json`
  -> `content-policy: 37 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-19.proof-contracts.json <29 proof-bearing ids>`
  -> final rerun completed with no skips after adding explicit fact rows to the
  six example/counterexample items.
- `node tools/proof-contract.mjs research/frontier-30-batch-19.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 29/29 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-19.proof-contracts.json --fail-on-missing-quote`
  -> `citation-fidelity: 60 citation(s) over 29 authored item(s)` and no
  missing quotes or widening candidates.
- `node tools/boundary-audit.mjs research/frontier-30-batch-19.proof-contracts.json --fail-on-contradicted --fail-on-template`
  -> `boundary-audit: 232 rows over 1 contract file(s); 209 marked not_applicable`
  and no contradicted dispositions or template cluster at threshold.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 746 page(s) with item lists.`
- `node -e '...splice frontier-30-batch-19 pages into /tmp/frontier-30-batch-19-spliced-plan.json...'`
  -> `spliced-plan: ok`.
- `node tools/validate-plan.mjs /tmp/frontier-30-batch-19-spliced-plan.json`
  -> pass, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 746 page(s) with item lists.`
- `git diff --check -- items library/computability-theory research/frontier-30-batch-19.proof-contracts.json research/frontier-30-batch-19.notes.md`
  -> clean.
