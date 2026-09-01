# frontier-28 · Beta · batch-11 notes — `diagonalization-and-the-halting-problem` and `p-np-conp-and-polynomial-reductions`

Run `frontier-28`, batch `11`, two A/B pairs, category
`computability-theory`. Author: Beta. Session date: Tuesday, September 1, 2026
(AEST).

Artifacts owned by this batch at scaffold stage:

- `research/frontier-28-batch-11.pages.json`
- `research/frontier-28-batch-11.coverage.json`
- this file

Per the dispatch and repo instructions, I did not edit workflow state,
published content, another batch artifact, `proof-contracts`, or `plan-spec`.

---

## 1. Control files and active-run context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-28-dispatch/beta-batch-11.prompt.md`, the seed manifest
`research/frontier-28-batch-11.pages.json`, the live plan
`research/plan-spec.json`, and the matched design material in
`research/plan-computability-theory-track.md`.

I also verified from disk that this repository has a live `.autopilot/` state
directory for `frontier-28` and did not use any `research/*RESUME.md` file as a
source of run truth. The helper command
`node --import tsx tools/autopilot/bin/autopilot.mts status --repo .` is not
usable in this sandbox because `tsx` is not available from the repo root here,
so the notes below rely on the readable `.autopilot/` state files and the batch
artifacts themselves rather than on that command's output.

## 2. Controlling design and design/spec drift

### `diagonalization-and-the-halting-problem`

The generated prompt cites lines `579` and `602`. These are not competing
design amendments:

- line `579` starts the `TC-12` A-page design block;
- line `602` is the B-page heading inside that same `TC-12` block.

So the controlling design material is the full `TC-12` block at lines
`579-612`, not line `602` taken in isolation.

### `p-np-conp-and-polynomial-reductions`

The generated prompt cites lines `871` and `896`. Again, these are not
competing amendments:

- line `871` starts the `TC-20` A-page design block;
- line `896` is the B-page heading inside that same `TC-20` block.

So the controlling design material is the full `TC-20` block at lines
`871-906`, not line `896` taken in isolation.

### Design/spec comparison

For both owned pairs, the controlling design blocks and
`research/plan-spec.json` agree on:

- page ids
- companion ids
- titles
- orders `603/604` and `619/620`
- category `computability-theory`
- declared prerequisite page ids

I recorded **no design-vs-spec drift** for this batch. The manifest follows the
spec's `requires` fields exactly.

## 3. Scaffold census and split check

The scaffold now has:

- `diagonalization-and-the-halting-problem` (A): `15` items
- `diagonalization-and-the-halting-problem-examples` (B): `3` items
- `p-np-conp-and-polynomial-reductions` (A): `17` items
- `p-np-conp-and-polynomial-reductions-examples` (B): `3` items

Both A pages are far below the `60`-item split threshold, so **no split is
required**.

## 4. Route choices

### `diagonalization-and-the-halting-problem`

I kept the design's route and trap structure:

1. acceptance problem first, before halting, so recognizability and
   diagonalization are separated cleanly;
2. one explicit diagonal-self-application lemma rather than hiding the
   contradiction inside the undecidability theorem;
3. halting after acceptance, by a total effective reduction from acceptance;
4. explicit nonrecognizability of nonhalting and then a clean existence theorem
   for unrecognizable languages;
5. busy beaver after undecidability, not as a disconnected anecdote;
6. totality and machine equivalence proved directly from halting/nonhalting,
   not postponed to Rice's theorem;
7. the two false statements aimed exactly at the design's conceptual traps.

Important local decisions:

- I kept the machine/code/computation/function separation explicit. The page
  talks about coded machine-input pairs, languages of codes, and a separate
  busy-beaver growth function; it does not blur those objects together.
- `thm-machine-equivalence-is-undecidable` is scaffolded as **language
  equivalence of recognizers**, not syntactic equality of machine descriptions
  and not full partial-function equality. That is the standard pre-Rice seam and
  it matches the page's language-focused closure.
- I chose a **step-count busy-beaver relative to the fixed machine coding**,
  rather than a raw state-count definition. That keeps the item dependency-closed
  on the library's already-published coding convention from page `599`.
- `thm-totality-is-not-recognizable` is planned by a direct reduction from the
  complement of halting. I did not use Rice's theorem or Rice-Shapiro here,
  because the next page owns both of those ideas.
- `fs-diagonalization-needs-literal-source-self-reading` is refuted via the
  already-published coding plus universal-simulation machinery. The point is
  precisely that self-application uses an **encoded description**, not a
  manuscript-reading fantasy.

### `p-np-conp-and-polynomial-reductions`

I kept the design's route:

1. define `P`, verifier balance, and `NP`;
2. prove the verifier and nondeterministic definitions agree before using
   certificate language elsewhere;
3. define `coNP` and the basic containment `P \\subseteq NP \\cap coNP`;
4. define polynomial-time many-one reductions and prove their closure/transfer
   properties before introducing completeness;
5. define NP-hardness/NP-completeness and isolate the standard consequence
   "NP-complete plus P implies P = NP";
6. separate generic NP search from the specific SAT self-reduction;
7. close with `EXP`, `NEXP`, and the `NP \\subseteq PSPACE \\subseteq EXP`
   containment picture;
8. end with exactly the two false statements the design requests.

Important local decisions:

- I kept `def-polynomial-time-many-one-reduction` strictly many-one. The SAT
  search item is the **only** Turing-reduction item on the page, and the notes
  flag that explicitly so step 5 does not quietly slide between reduction
  notions.
- `def-search-version-of-an-np-relation` stays generic. The SAT theorem is a
  worked self-reducibility instance, not a global collapse of search and
  decision for all NP relations.
- I did **not** pull Cook-Levin completeness material forward onto this page.
  The current page stops at the classes, the reduction framework, the generic
  consequence of completeness, and SAT self-reducibility.
- The page design has two deliberate seams that must be handled honestly at step
  5 rather than papered over in the scaffold:
  - `thm-sat-search-reduces-to-sat-decision` names SAT before page `621`
    introduces the library's main `def-boolean-formula-cnf-and-sat` item.
    The step-5 authoring must therefore define the minimal SAT vocabulary
    locally inside that theorem's statement/proof sketch rather than forward-
    referencing page `621`.
  - `prop-np-is-contained-in-pspace-and-pspace-in-exp` uses `PSPACE` without a
    separate dedicated definition item in the design inventory. The proposition
    must define `PSPACE := \\bigcup_k DSPACE(n^k)` inline when authored; I kept
    the design's item count and recorded that seam here instead of silently
    inventing a new item.

## 5. Source set actually recorded

### For `diagonalization-and-the-halting-problem`

I recorded five verified source rows:

1. A. M. Turing, *On Computable Numbers, with an Application to the
   Entscheidungsproblem*:
   `https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf`
2. Richard Zach, *Sets, Logic, Computation: An Open Introduction to
   Metalogic*:
   `https://slc.openlogicproject.org/slc-screen.pdf`
3. EECS 376 course notes, Part 6 `Computability`:
   `https://eecs376.github.io/notes/computability.html`
4. Stan Nelson, `Undecidable Problems`:
   `https://www.cs.rochester.edu/u/nelson/courses/csc_173/computability/undecidable.html`
5. Adam Yedidia and Scott Aaronson, *A Relatively Small Turing Machine Whose
   Behavior Is Independent of Set Theory*:
   `https://www.scottaaronson.com/busybeaver.pdf`

This satisfies the batch source rule:

- independent primary treatment: Turing `1936`
- textbook treatment with harvestable chapter structure: Open Logic
- independent modern notes for the acceptance/halting/totality/equivalence
  route
- an additional modern treatment for busy-beaver growth

What each source is doing:

- Turing supplies the primary diagonal/self-application route and the exact
  point that self-reference works through an encoded description.
- Open Logic supplies the halting-function and halting-problem definitions, the
  self-application function `s`, the diagonal lemma, and the halting
  unsolvability theorem.
- EECS 376 supplies the barber-language diagonal, the acceptance-language
  recognizability/undecidability route, the halting-language reduction, and the
  next-page Rice boundary.
- Rochester supplies the later totality/equivalence problem family and the
  semidecidability seam.
- Yedidia-Aaronson supplies a modern busy-beaver section that explicitly states
  the noncomputability and growth phenomena.

### For `p-np-conp-and-polynomial-reductions`

I recorded five verified source rows:

1. Stephen A. Cook, *The Complexity of Theorem-Proving Procedures*:
   `https://www.cs.toronto.edu/~sacook/homepage/1971.pdf`
2. Sanjeev Arora and Boaz Barak, *Computational Complexity: A Modern
   Approach*:
   `https://theory.cs.princeton.edu/complexity/book.pdf`
3. Michael Sipser, MIT 18.404J lecture 14 `P and NP, SAT, Poly-time
   Reducibility`:
   `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/45e2fd621349cfd7c9faf93a6ba134a3_MIT18_404f20_lec14.pdf`
4. Michael Sipser, MIT 18.404J lecture 17 `Space Complexity, PSPACE,

## Step-5 authoring

Authored page files:

- `library/computability-theory/diagonalization-and-the-halting-problem.md`
- `library/computability-theory/diagonalization-and-the-halting-problem-examples.md`
- `library/computability-theory/p-np-conp-and-polynomial-reductions.md`
- `library/computability-theory/p-np-conp-and-polynomial-reductions-examples.md`

Authored item ids:

- `def-turing-machine-acceptance-problem`
- `thm-machine-acceptance-is-recognizable`
- `lem-diagonal-self-application-machine`
- `thm-machine-acceptance-is-undecidable`
- `def-halting-problem`
- `thm-halting-is-recognizable-and-undecidable`
- `cor-nonhalting-is-not-recognizable`
- `thm-an-unrecognizable-language-exists`
- `def-busy-beaver-function`
- `thm-busy-beaver-dominates-every-total-computable-function`
- `cor-busy-beaver-is-not-computable`
- `thm-totality-is-not-recognizable`
- `thm-machine-equivalence-is-undecidable`
- `fs-undecidable-means-no-instance-can-be-answered`
- `fs-diagonalization-needs-literal-source-self-reading`
- `ex-diagonal-self-application-machine`
- `ex-machine-equivalence-is-undecidable`
- `cex-undecidable-means-no-instance-can-be-answered`
- `def-p`
- `def-polynomially-balanced-verifier`
- `def-np-by-verifiers`
- `thm-verifier-and-nondeterministic-definitions-of-np-agree`
- `def-conp`
- `prop-p-is-contained-in-np-intersection-conp`
- `def-polynomial-time-many-one-reduction`
- `lem-polynomial-reductions-compose`
- `thm-polynomial-reductions-transfer-p-np-and-conp-membership`
- `def-np-hard-and-np-complete`
- `prop-an-np-complete-language-in-p-implies-p-equals-np`
- `def-search-version-of-an-np-relation`
- `thm-sat-search-reduces-to-sat-decision`
- `def-exp-and-nexp`
- `prop-np-is-contained-in-pspace-and-pspace-in-exp`
- `fs-np-means-not-polynomial`
- `fs-np-complete-means-known-not-in-p`
- `ex-p-is-contained-in-np-intersection-conp`
- `ex-np-is-contained-in-pspace-and-pspace-in-exp`
- `cex-np-means-not-polynomial`

Provenance rationale actually used:

- Standard definitions and classical classification theorems that closely
  follow the harvested sources were tagged `literature-derived` for the
  statement and `ai-generated` for the written proof.
- Locally phrased examples, counterexamples, and false-statement formulations
  were tagged `ai-altered` for the statement and `ai-generated` for the proof.
- No authored batch-11 statement was tagged `ai-generated`, so no
  `generation.role` field was introduced and no generated statement became a
  dependency target.

Resolved authoring seams from Step 3:

- The diagonal-self-application lemma and its example use a fixed binary to
  `Sigma_2` recoding `x -> overline{x}` so the self-application input is
  type-correct under the library's machine/input alphabet convention; no claim
  was widened beyond that typed form.
- `thm-sat-search-reduces-to-sat-decision` defines the needed SAT vocabulary
  locally inside the item, exactly as the Step-3 review required, instead of
  creating a forward dependency on page `621`.
- `prop-np-is-contained-in-pspace-and-pspace-in-exp` defines
  `PSPACE := union_k DSPACE(n^k)` inline inside the statement rather than
  silently inventing a new scaffold item.

Narrowed or dropped claims:

- None. I kept the scaffolded inventory and titles intact.

Blockers:

- None in this batch after authoring.

Artifact written:

- `research/frontier-28-batch-11.proof-contracts.json`

Checks run on Tuesday, September 1, 2026 (AEST):

- `node tools/tsx-run.mjs tools/precheck.mts items/def-turing-machine-acceptance-problem.md ... items/cex-np-means-not-polynomial.md`
  -> `27 checked, 0 failing -- all clean`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed; the tool also printed existing repo-wide `redundant-prereq` notes outside batch 11
- `node tools/content-policy.mjs research/frontier-28-batch-11.pages.json`
  -> `content-policy: 38 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/regen-contract-entries.mjs research/frontier-28-batch-11.proof-contracts.json ...`
  -> `regenerated 27, skipped 0`
- `node tools/proof-contract.mjs research/frontier-28-batch-11.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 27/27 item(s) checked`
- `node tools/boundary-audit.mjs research/frontier-28-batch-11.proof-contracts.json --fail-on-contradicted --fail-on-template`
  -> no contradicted rows and no template clusters at or above the audit threshold
   Savitch's Theorem`:
   `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/9b025394d997750b3cd765c7a074881f_MIT18_404f20_lec17.pdf`
5. `P32: SAT self-reducibility`:
   `https://arashkermaniprojects.github.io/computibility_and_complexity/tools/p32-self-reducibility.html`

This satisfies the batch source rule:

- independent primary treatment: Cook `1971`
- textbook treatment with harvestable chapter structure: Arora-Barak
- independent lecture-note treatment for the class/reduction picture: MIT 18.404J
- direct search-to-decision source for the SAT self-reduction

What each source is doing:

- Cook supplies the historical nondeterministic-polynomial-time and
  polynomial-reducibility route, plus the original completeness consequence.
- Arora-Barak supplies the textbook NP definition/equivalence theorem, the Karp
  reduction and NP-completeness package, the decision-versus-search theorem and
  SAT self-reducibility remark, and the coNP/EXP/NEXP definitions.
- MIT lecture 14 supplies the clean undergraduate route for `P`, `NP`,
  certificates, SAT, and reduction transfer.
- MIT lecture 17 supplies `coNP`, `PSPACE`, and the time/space containment
  picture.
- The SAT self-reducibility page supplies the concrete variable-fixing oracle
  algorithm that makes theorem `13` honest rather than slogan-level.

Every source row in `research/frontier-28-batch-11.coverage.json` carries a
manual `fetch_verified` receipt marked `verified_via: web-open`. That is
intentional: this shell runner is DNS-restricted, so honest live-reader
verification is the available source receipt here.

## 6. Known limits and step-5 risks

- The totality theorem is intentionally stronger than the Rochester note's
  undecidability-only endpoint. Step 5 must keep the complement-of-halting
  reduction explicit so the nonrecognizability conclusion is genuinely proved
  locally.
- The busy-beaver items use the page's chosen code-based convention rather than
  a raw state-count convention. Step 5 must state that convention sharply and
  keep the domination proof tied to hard-wiring binary data into descriptions.
- The equivalence theorem is about extensional **language equivalence**. If step
  5 drifts into syntactic equivalence or full partial-function equivalence
  without redefining the problem, the proof and sources will no longer line up.
- The SAT search theorem must define enough SAT syntax locally to avoid a
  forward dependency on page `621`, but it must not reauthor the whole
  Cook-Levin page early.
- The `PSPACE` appearance on page `619` must be handled inline inside the final
  containment proposition. Adding a new unsourced scaffold item for `PSPACE`
  would change the design inventory; using the symbol without definition would
  violate the self-contained-scope rule.
- `thm-sat-search-reduces-to-sat-decision` is a **Turing** reduction theorem.
  Step 5 must not call it a many-one reduction.

## 7. Validator results

I ran the scaffold-stage checks on Tuesday, September 1, 2026 (AEST).

- `node -e 'JSON.parse(...)'` on `research/frontier-28-batch-11.pages.json`
  -> `pages-json: ok`

- `node -e 'JSON.parse(...)'` on `research/frontier-28-batch-11.coverage.json`
  -> `coverage-json: ok`

- The first `coverage-checklist` pass caught one batch-local ledger mistake:
  I had marked Turing section `7` as `already-published` against
  `lem-step-by-step-interpreter-for-machine-codes`, which exists on disk but is
  not a published item. I retagged that row as `inline` to
  `lem-diagonal-self-application-machine` and reran the gates below.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-11.coverage.json`
  -> `coverage-checklist: 2 page(s), 50 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 255 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed and ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`
  The visible diagnostics before that tail were the repository's standing
  run-wide `redundant-prereq` warnings outside this batch.

- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-11.coverage.json --stamp`
  -> `source-fetch-check: 10/10 source(s) fetch-verified (0 newly stamped)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-11.coverage.json`
  -> `source-fetch-check: 10/10 source(s) fetch-verified`

- `node tools/url-sweep.mjs --coverage research/frontier-28-batch-11.coverage.json --out /tmp/frontier-28-batch-11-url-liveness.json --recover --fail-on-dead`
  -> failed uniformly in this runner:
  `url-sweep: 0/10 live; 10 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-28-batch-11-url-liveness.json`
  Every row failed with the same transport error `curl: (6) Could not resolve
  host` on `arashkermaniprojects.github.io`, `eecs376.github.io`,
  `ocw.mit.edu`, `slc.openlogicproject.org`, `theory.cs.princeton.edu`,
  `www.cs.ox.ac.uk`, `www.cs.rochester.edu`, `www.cs.toronto.edu`, and
  `www.scottaaronson.com`. Because all ten sources were independently opened in
  the web reader on Tuesday, September 1, 2026 (AEST), this is evidence of the
  shell runner's DNS restriction, not evidence that the recorded URLs are dead
  or mismatched. I therefore did not replace reader-verified sources merely to
  satisfy a transport-blocked shell probe.

- `git diff --check`
  -> passed cleanly with no output.

## Step-3 fix pass

Applicable alpha finding ids:

- None for batch `11`. The only finding in
  `research/frontier-28-alpha-d-step3-scaffold-review.md` is `D9-1`, which is
  batch `9` only. I did not apply it here because this dispatch authorises only
  batch-11 scaffold files.

Batch-local source repair:

- changed scaffold record: `research/frontier-28-batch-11.coverage.json`
  disposition: repaired
  evidence: the live Open Logic PDF now places the relevant material at section
  `15.4` / web lines `10275-10336`, not at the older recorded `15.5-15.6` /
  `10264-10594` locator. I corrected the locator, renumbered `Definition 15.4`
  and `Definition 15.5`, added `Definition 15.6` as the diagonal self-
  application setup, and removed the unsupported recognizable-set rows.

- changed scaffold record: `research/frontier-28-batch-11.coverage.json`
  disposition: repaired
  evidence: the live EECS 376 note now has the used material at HTML lines
  `882-1038` and `1786-1834`; the earlier recorded `2588-2796` range no longer
  exists because the current live document is only `1886` lines long. I
  rewrote the locator and harvest rows to the current headings `The Barber
  Language`, `The Acceptance Language and Simulation`, `The Halting Problem`,
  and `Rice's theorem`.

- changed scaffold record: `research/frontier-28-batch-11.coverage.json`
  disposition: repaired
  evidence: the live Arora-Barak PDF is the `489`-page draft whose relevant
  Chapter `2` material sits at web lines `1964-2174` and `2735-2838`,
  including `Definition 2.1`, `Theorem 2.6`, `Definition 2.7`, `Theorem 2.8`,
  `Theorem 2.19`, `Remark 2.20`, `Definition 2.22`, and `Definition 2.24`. The
  older locator named a different section layout and recorded `724` pages, so I
  repaired both the locator and the harvested rows to the current source text.

- changed scaffold record: `research/frontier-28-batch-11.coverage.json`
  disposition: repaired
  evidence: I tightened the Rochester locator to exact current HTML lines
  `16-159` and remapped the `P32: SAT self-reducibility` commentary rows to
  `thm-sat-search-reduces-to-sat-decision`, which is the item that the live
  `Why it matters` and `Pitfalls` text actually supports.

- changed scaffold record: `research/frontier-28-batch-11.notes.md`
  disposition: repaired
  evidence: section `5` now describes the corrected source roles, and this
  fix-pass receipt records the live-fetch evidence and the no-op alpha-finding
  disposition for batch `11`.

Validator reruns on current bytes:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-11.coverage.json`
  -> `coverage-checklist: 2 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed and ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`
  The visible diagnostics before that tail were the repository's standing
  run-wide `redundant-prereq` warnings outside this batch.

- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-11.coverage.json`
  -> `source-fetch-check: 10/10 source(s) fetch-verified`

- `git diff --check -- research/frontier-28-batch-11.coverage.json research/frontier-28-batch-11.notes.md`
  -> passed cleanly with no output.
