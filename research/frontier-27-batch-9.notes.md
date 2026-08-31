# frontier-27 · Beta · batch-9 notes — computability-theory

Run `frontier-27`, batch `9`, two A/B pairs, category `computability-theory`.
Author: Beta. Session date: Monday, August 31, 2026.

Artifacts owned by this batch:
`research/frontier-27-batch-9.pages.json`,
`research/frontier-27-batch-9.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design locations opened:

- `research/plan-computability-theory-track.md` lines `322-348`
- `research/plan-computability-theory-track.md` lines `544-569`

Controlling design call:

- For `myhill-nerode-theory-and-dfa-minimization`, the controlling design is the
  single TC-5 block at lines `322-348`. The generated task's second location at
  line `346` is only the B-page subheading inside that same block, not a
  competing redesign.
- For `decidable-recognizable-and-enumerable-languages`, the controlling design
  is the single TC-11 block at lines `544-569`. The generated task's second
  location at line `567` is likewise just the B-page subheading within the same
  block.

Shape after scaffolding:

- `myhill-nerode-theory-and-dfa-minimization` (A): **16 items**
- `myhill-nerode-theory-and-dfa-minimization-examples` (B): **3 items**
- `decidable-recognizable-and-enumerable-languages` (A): **15 items**
- `decidable-recognizable-and-enumerable-languages-examples` (B): **3 items**

Neither A page is close to the `60`-item split ceiling, so no split is needed.

## 2. Design-vs-spec drift I did not settle

None for this batch.

- The generated task, the controlling design blocks, the existing batch
  manifest, and `research/plan-spec.json` agree on orders `589/590` and
  `601/602`.
- They also agree on the page ids, titles, categories, companions, and declared
  `requires` lists for both pairs.

## 3. Local scaffold decisions

### Decision 1 — the Myhill page keeps the state-side quotient route explicit

I kept the design's order:

1. right languages of DFA states,
2. state equivalence and the quotient DFA,
3. Nerode equivalence on words,
4. the Myhill-Nerode characterization,
5. canonical minimality and uniqueness, then
6. the algorithmic and pumping applications.

That keeps the quotient well-definedness burden explicit before the page starts
talking about canonical minimal automata.

### Decision 2 — minimality and uniqueness are separated

- `cor-nerode-classes-give-the-canonical-minimal-dfa` carries the lower-bound
  and one-state-per-class content.
- `thm-minimal-dfa-is-unique-up-to-pointed-isomorphism` then handles start-state
  preserving uniqueness after spending the earlier reachable-state pruning fact.

I did not collapse these into a single overpacked theorem.

### Decision 3 — distinguishing words are explicit because both later branches spend them

`def-distinguishing-word` is a real item, not just notation hidden in a proof,
because both of these later items genuinely need it:

- `thm-table-filling-minimization-algorithm`
- `cor-distinguishable-prefix-nonregularity-criterion`

### Decision 4 — the two pumping traps are routed differently on purpose

- `fs-the-pumping-lemma-characterizes-regular-languages` uses the classical
  pumpable-but-nonregular witness language `G = {ww^Rv : w,v in {0,1}^+, w
  nonempty}`.
- `fs-pumping-quantifiers-may-be-reordered` instead attacks the quantifier-order
  misuse directly, using the "one bad choice does not refute regularity" trap
  rather than minting a second near-duplicate nonregular witness.

### Decision 5 — the decidable page fixes the terminology seam explicitly

I kept the language/set/function vocabulary split consistent across the page:

- `computable` means `total partial-computable`
- `recognizable` means language-semantic `semidecidable`
- `computably enumerable` means empty or the range of a total computable
  function

This matches the design's machine/code/function separation warning.

### Decision 6 — dovetailing uses one concrete schedule

The track-level choice-strength ledger says dovetailing must use a concrete
pairing/schedule. I therefore fixed `def-dovetailing-schedule` to the explicit
stage-sum schedule and made
`lem-dovetailing-reaches-every-finite-stage` state the exact finite-stage
coverage property that later proofs spend.

### Decision 7 — `fs-every-countable-language-is-decidable` is refuted locally, not by importing HALT

The obvious later witness would have been a halting-style language, but that
would have made this page depend on the next one. I therefore routed the false
statement through a local diagonal argument:

- countably many deciders,
- countably many binary strings in length-lex order,
- diagonal language `D = {w_n : M_n rejects w_n}`.

That keeps the page dependency-closed and avoids silently borrowing page `603`.

## 4. Source choices and harvest boundaries

Only the A pages owe a coverage ledger.

### 4.1 Myhill--Nerode pair

Sources actually harvested:

1. Jean Gallier and Jocelyn Quaintance,
   *Introduction to the Theory of Computation: Some Notes for CIS511*  
   URL:
   `https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html`
2. Eric Blais, *Models of Computation, 20. Nonregular Languages*  
   URL: `https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular`

Why only these two:

- Gallier is the primary treatment for right-invariant relations, minimal DFA
  construction, state equivalence, the table-filling algorithm, and the pumping
  lemma's quantified negation.
- Blais independently backs the pumping lemma, the Nerode relation, the exact
  Myhill-Nerode equivalence statement, and the state-complexity reading of the
  theorem.
- The pair's route is already closed by those two independent treatments, so a
  third harvested source was not necessary.

Canonical carrier boundaries:

- `def-distinguishing-word` is carried canonically because the harvested sources
  use indistinguishability witnesses throughout but do not isolate
  "distinguishing word" as its own heading.
- `cex-the-pumping-lemma-characterizes-regular-languages` is also carried
  canonically because the harvested sources explicitly say that the pumping
  lemma is not a characterization, but they do not give a full formal proof of
  the exact witness language `G` chosen for this scaffold.

### 4.2 Decidable / recognizable / enumerable pair

Sources actually harvested:

1. Jean Gallier and Jocelyn Quaintance,
   *Introduction to the Theory of Computation: Some Notes for CIS511*  
   URL:
   `https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html`
2. John Watrous, *Introduction to the Theory of Computing*, Lecture 17  
   URL: `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.17.pdf`
3. John Watrous, *Introduction to the Theory of Computing*, Lecture 18  
   URL: `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf`

How they divide the work:

- Watrous is the qualifying primary treatment: the official Waterloo lecture
  note set gives the dovetailing trick, the language/complement decidability
  theorem, the recognizable-language closure proofs, and the
  recognizable-versus-range characterization.
- Gallier is the independent second treatment and carries the c.e./domain/range
  equivalence package, the injective-enumeration normal form, and the classical
  terminology seam between computable, c.e., and recursive.

Canonical carrier boundaries:

- `def-computable-and-partial-computable-function` is carried canonically
  because the harvested sources use the notion heavily but the exact library
  packaging as "partial computable vs total computable" is a local definitional
  seam.
- `prop-machine-descriptions-form-a-decidable-language` and its example are
  canonical because they are immediate consequences of the already-published
  machine encoding/decoder page rather than a separately headed theorem in the
  newly harvested sources.
- `fs-recognizable-means-total`, `cex-recognizable-means-total`, and
  `fs-every-countable-language-is-decidable` are canonical because the page
  needs concrete local witnesses: a looping recognizer for `{0}` and a local
  diagonal language against the list of deciders.

## 5. Validation results

The first coverage-checklist pass found one batch-local ledger mistake:

- I had marked Watrous Lecture 18 `Theorem 18.7` as `already-published`, but the
  earlier robustness theorem it matches is not yet published on disk.
- I repaired that row to `deferred` back to
  `robust-machine-models-and-universal-computation`.
- The rerun then passed cleanly.

Checks run on Monday, August 31, 2026:

- `node -e "JSON.parse(...pages...); console.log('pages-json: ok')"`  
  Result: `pages-json: ok`
- `node -e "JSON.parse(...coverage...); console.log('coverage-json: ok')"`  
  Result: `coverage-json: ok`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-9.coverage.json`  
  Result: `coverage-checklist: 2 page(s), 75 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`  
  Result: `content-policy: 382 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-9.coverage.json`  
  Result: `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`  
  Exit: `0`  
  Visible result: only the repository's standing `redundant-prereq` advisories,
  ending with  
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.`
- `node tools/validate-plan.mjs /tmp/frontier-27-batch-9-overlay-plan.json`  
  Exit: `0`  
  Visible result: the same standing `redundant-prereq` advisories, ending with  
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 598 page(s) with item lists.`

That overlay check matters: it validates the live spec with batch `9` injected,
so the new item-level dependencies were actually checked now rather than left to
the later splice step.

## 6. URL verification and known limits

All five recorded source URLs were opened directly in the web reader on Monday,
August 31, 2026, and each coverage row carries an honest manual
`fetch_verified` record reflecting that web-open verification.

Shell-side liveness check:

- `node tools/url-sweep.mjs --coverage research/frontier-27-batch-9.coverage.json --out /tmp/frontier-27-batch-9-url-liveness.json --recover --fail-on-dead`
  exited `1` with:
  `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-27-batch-9-url-liveness.json`

Exact failures:

- `https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular`
- `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.17.pdf`
- `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf`
- `https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html`

All four failures were shell-side DNS resolution failures:
`curl: (6) Could not resolve host`.

What that does and does not mean:

- It does **not** show a mathematical mismatch or dead citation in the recorded
  web content; I directly opened all five source URLs in the web reader before
  finalizing the coverage file.
- It **does** mean this sandbox cannot prove URL liveness by shell `curl`, so
  the durable receipt `/tmp/frontier-27-batch-9-url-liveness.json` stays red in
  this runner.

Step-5 cautions:

- `thm-table-filling-minimization-algorithm`,
  `thm-recognizable-iff-enumerable`, and
  `thm-infinite-ce-sets-have-computable-injective-enumerations`
  are the heaviest constructive proofs in batch scope.
- `cex-the-pumping-lemma-characterizes-regular-languages` must keep both halves
  explicit at author time: the pumpability witness and the infinite
  distinguishability witness for the same language `G`.
- `fs-every-countable-language-is-decidable` must stay on its local diagonal
  route. Replacing it with a halting-problem citation would violate this
  page's dependency boundary.

## Step-3 fix pass

Run on Monday, August 31, 2026, against Alpha group `d`'s stable review file
`research/frontier-27-alpha-d-step3-scaffold-review.md`.

- Finding id: none issued for batch `9` in the stable review file.
  Disposition: accepted as already applied on current bytes; no pushback and no
  further manifest or coverage edit was needed in this pass.
  Evidence: the batch-9 direct-repair paragraph in the stable review says
  `research/frontier-27-batch-9.coverage.json` had lacked a direct carrier for
  `thm-decidable-languages-are-closed-under-boolean-operations`. The live
  canonical section now includes `Deciders for a language and its complement
  combine to decide unions, intersections, and the remaining boolean
  operations` with disposition `included` for that exact item, and a current
  manifest-to-coverage audit reports `missing=0` for both owned A pages:
  `myhill-nerode-theory-and-dfa-minimization` and
  `decidable-recognizable-and-enumerable-languages`.
  Changed scaffold record: no additional edit in
  `research/frontier-27-batch-9.pages.json` or
  `research/frontier-27-batch-9.coverage.json`; this notes file only.

- Current validator and source-verification evidence.
  Disposition: recorded.
  Evidence: I reopened the four unique recorded source URLs in the web reader
  on Monday, August 31, 2026; the duplicated Gallier URL is reused across both
  A-page harvests, which is why `source-fetch-check` counts five source
  entries. On current bytes:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-9.coverage.json`
  -> `coverage-checklist: 2 page(s), 76 harvested result(s), 0 error(s), 0 warning(s)`;
  `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  -> `content-policy: 449 scoped item(s), 0 error(s), 0 warning(s)`;
  `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-9.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`;
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, ending with `OK`, with only the standing repo-wide
  `redundant-prereq` advisories.
  Changed scaffold record: this notes section only.

## Step-5 authoring

Run on Monday, August 31, 2026.

Authored page files:

- `library/computability-theory/myhill-nerode-theory-and-dfa-minimization.md`
- `library/computability-theory/myhill-nerode-theory-and-dfa-minimization-examples.md`
- `library/computability-theory/decidable-recognizable-and-enumerable-languages.md`
- `library/computability-theory/decidable-recognizable-and-enumerable-languages-examples.md`

Authored item ids:

- `def-right-language-and-equivalent-dfa-states`
- `lem-state-equivalence-is-a-right-congruence`
- `def-quotient-dfa-by-state-equivalence`
- `lem-quotient-dfa-is-well-defined-and-equivalent`
- `def-nerode-equivalence`
- `lem-nerode-equivalence-is-a-right-congruence`
- `lem-dfa-states-refine-nerode-classes`
- `thm-myhill-nerode-characterization`
- `cor-nerode-classes-give-the-canonical-minimal-dfa`
- `thm-minimal-dfa-is-unique-up-to-pointed-isomorphism`
- `def-distinguishing-word`
- `thm-table-filling-minimization-algorithm`
- `thm-pumping-lemma-for-regular-languages`
- `cor-distinguishable-prefix-nonregularity-criterion`
- `fs-the-pumping-lemma-characterizes-regular-languages`
- `fs-pumping-quantifiers-may-be-reordered`
- `ex-quotient-dfa-is-well-defined-and-equivalent`
- `ex-distinguishable-prefix-nonregularity-criterion`
- `cex-the-pumping-lemma-characterizes-regular-languages`
- `def-computable-and-partial-computable-function`
- `def-decidable-and-recognizable-language`
- `def-computably-enumerable-set`
- `thm-recognizable-iff-enumerable`
- `thm-decidable-iff-language-and-complement-are-recognizable`
- `thm-recognizable-languages-are-closed-under-union-and-intersection`
- `thm-decidable-languages-are-closed-under-boolean-operations`
- `def-dovetailing-schedule`
- `lem-dovetailing-reaches-every-finite-stage`
- `thm-domains-and-ranges-of-partial-computable-functions-are-ce`
- `thm-every-ce-set-is-a-domain`
- `thm-infinite-ce-sets-have-computable-injective-enumerations`
- `prop-machine-descriptions-form-a-decidable-language`
- `fs-recognizable-means-total`
- `fs-every-countable-language-is-decidable`
- `ex-decidable-iff-language-and-complement-are-recognizable`
- `ex-machine-descriptions-form-a-decidable-language`
- `cex-recognizable-means-total`

Proof-contract output:

- Authored `research/frontier-27-batch-9.proof-contracts.json`.
- Scope written: `29` proof-bearing items.
- Citation and derivation rows were regenerated from current item text with
  `node tools/regen-contract-entries.mjs ...` after the final precheck repairs,
  so the contract step map matches the stored proof numbering on disk.

Provenance rationale actually used:

- Source-backed definitional and theorem items that directly package the
  harvested Myhill--Nerode, pumping, dovetailing, recognizability, and c.e.
  equivalences stayed `literature-derived` for their statements.
- Local packaging seams that are real mathematical content but not quoted as
  standalone source headings were marked `ai-altered`:
  `def-distinguishing-word`,
  `def-computable-and-partial-computable-function`,
  `def-dovetailing-schedule`,
  `lem-dovetailing-reaches-every-finite-stage`,
  `thm-decidable-languages-are-closed-under-boolean-operations`,
  `prop-machine-descriptions-form-a-decidable-language`,
  `fs-recognizable-means-total`,
  `fs-every-countable-language-is-decidable`,
  `fs-the-pumping-lemma-characterizes-regular-languages`, and
  `fs-pumping-quantifiers-may-be-reordered`.
- Only B-page witness items were marked `ai-generated`, with legal generation
  roles:
  `cex-the-pumping-lemma-characterizes-regular-languages`,
  `ex-decidable-iff-language-and-complement-are-recognizable`,
  `ex-machine-descriptions-form-a-decidable-language`, and
  `cex-recognizable-means-total`.
- No `ai-generated` statement is a dependency target.

Material authoring adjustments made inside batch scope:

- Added the missing dependency links
  `def-right-language-and-equivalent-dfa-states` and
  `def-equivalence-relation` to
  `def-quotient-dfa-by-state-equivalence`, because its written definition cites
  both.
- Added the missing dependency link
  `def-effective-encoding-of-turing-machines` to
  `ex-machine-descriptions-form-a-decidable-language`, because the example body
  names the chosen machine code.
- Normalized all authored batch-9 item frontmatter `deps` fields to inline
  array form `deps: [...]`. This was not a mathematical change: it was required
  because `tools/proof-contract.mjs` currently parses only the inline list form
  for `deps`/`justified_by`/`forward_refs`, while the batch item-mode
  `content-policy` gate had already passed on the multiline YAML lists.
- Removed one stale unused fact line from
  `fs-the-pumping-lemma-characterizes-regular-languages` after contract
  regeneration surfaced that the proof never actually cited it.

Canonical precheck repair actually applied:

- The first full batch precheck pass failed on nineteen items, almost entirely
  because the checker wanted its canonical phase grouping rather than the looser
  multi-line step layout that the shared contract parser also accepts.
- I adopted the printed canonical repairs, chiefly:
  moving some `2.1` and `3.1` steps into the checker-preferred `1.2` / `1.3`
  buckets,
  flattening a handful of multi-line displayed proof steps into single tagged
  step lines, and
  rerunning precheck only after the final stored numbering matched the repaired
  proof order.
- No claim was narrowed or dropped during that repair. The mathematics stayed
  the same; only the phase-format representation changed.

Narrowed or dropped claims:

- None.

Blockers:

- None at Step 5 authoring close.

Checks run on Monday, August 31, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts <all 37 batch-9 item files>`
  -> `29 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-27-batch-9.pages.json`
  -> `content-policy: 37 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, including
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`
- `node tools/validate-plan.mjs /tmp/frontier-27-batch-9-overlay-plan.json`
  -> exit `0`, ending with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`
- `node tools/proof-contract.mjs research/frontier-27-batch-9.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 29/29 item(s) checked`
- `git diff --check -- items library/computability-theory research/frontier-27-batch-9.pages.json research/frontier-27-batch-9.proof-contracts.json research/frontier-27-batch-9.notes.md`
  -> exit `0`
