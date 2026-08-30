# frontier-24 batch 10 notes - beta scaffold

Owned pairs:

- `deterministic-finite-automata-and-regular-languages` / `deterministic-finite-automata-and-regular-languages-examples`
- `context-free-grammars-and-normal-forms` / `context-free-grammars-and-normal-forms-examples`

Artifacts written in this dispatch:

- `research/frontier-24-batch-10.pages.json`
- `research/frontier-24-batch-10.coverage.json`
- this file

Session date: Saturday, August 29, 2026.

## Design against spec

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`,
`research/frontier-24-dispatch/beta-batch-10.prompt.md`,
`research/plan-spec.json`, the frontier-23 scaffold for page `581`, and the
matched design blocks in
[research/plan-computability-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-computability-theory-track.md:216)
and
[research/plan-computability-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-computability-theory-track.md:358).

For both assigned A pages the two matched design locations are not competing
amendments:

- `deterministic-finite-automata-and-regular-languages`: line `239` is the
  B-page subheading inside the same `TC-2` section, so I treated the full block
  at lines `216-250` as the controlling design text.
- `context-free-grammars-and-normal-forms`: line `384` is the B-page
  subheading inside the same `TC-6` section, so I treated the full block at
  lines `358-395` as the controlling design text.

In both cases the current spec and the controlling design agree on:

- page id
- companion page id
- page title
- order
- category
- declared prerequisite pages

So there is no design-vs-spec drift to settle locally, and I followed
`research/plan-spec.json` exactly.

## Item census and split check

- A page `deterministic-finite-automata-and-regular-languages`: `16` items
- B page `deterministic-finite-automata-and-regular-languages-examples`: `3` items
- A page `context-free-grammars-and-normal-forms`: `20` items
- B page `context-free-grammars-and-normal-forms-examples`: `3` items

Neither A page is close to the `60`-item split ceiling, so no split is needed.

## Scaffold repairs

Two design items were not honestly authorable as written at these page orders.

### Repair 1 -- the published prefix automaton is not already a DFA

The `TC-2` design item
`prop-published-prefix-automata-are-dfas` conflicts with the currently published
item `def-prefix-automaton-for-a-finite-forbidden-factor-set`.

That published item:

- gives a finite state set and a start state,
- describes transitions only for letters that keep the word factor-avoiding, and
- has no accepting set at all.

So under the `TC-2` definition of a DFA as a quintuple with a **total**
transition function, the published prefix automaton is not literally a DFA yet.
The missing structure is exactly the sink-state seam that the design's own false
statement warns about.

I therefore repaired the scaffold by replacing the invalid proposition with:

- `prop-published-prefix-automata-extend-to-factor-avoidance-dfas`

and replaced the matching B-page example with:

- `ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa`

This keeps the intended connection to the published combinatorics automaton while
making the totality issue explicit instead of papering over it.

### Repair 2 -- the design's ambiguity counterexample needs later machinery

The `TC-6` design item `fs-every-cfl-is-unambiguous` cannot be refuted honestly
at order `591` with the declared page closure.

Under the same page's own definition, refuting that statement requires an
**inherently ambiguous** context-free language, not merely an ambiguous grammar.
The design does not scaffold any theorem proving a language inherently ambiguous,
and the standard examples require later non-context-free or undecidability
machinery that this page does not yet own.

I therefore replaced it with the locally refutable distinction the sources
actually support here:

- `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`
- `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`

The witness is the standard arithmetic-expression language, which has both an
ambiguous grammar and an unambiguous precedence grammar.

### Repair 3 -- page 583 needed an explicit complement-construction seam

The stock `TC-2` list had union/intersection product construction and a Boolean
closure corollary, but it had no explicit scaffold item for the load-bearing
fact that complementing the **accepting set** of a total DFA complements the
recognized language. Folding that into the corollary would leave the sink-state
and graph-complement traps under-explained.

I therefore added:

- `thm-complementing-accept-states-complements-the-language`

and made the Boolean-closure corollary depend on it.

### Repair 4 -- page 591 needed the two local GNF rewrite lemmas

Gallier gives `Proposition 6.6` for Greibach normal form, but immediately
defers the clean proof to the least-fixed-point route in section `6.9`. That route
would force undeclared order-theoretic machinery into page `591`, which is not
allowed by the current spec closure.

To keep the theorem locally authorable, I added the two real proof steps from
the DePaul lecture notes:

- `lem-gnf-substitution-step-preserves-language`
- `lem-gnf-left-recursion-elimination-preserves-language`

The resulting GNF theorem now has an honest constructive proof route from CNF,
using only grammar-level transformations already on this page.

## Route choices

### TC-2 -- `deterministic-finite-automata-and-regular-languages`

I kept the design's intended route and made its totality trap explicit:

1. define DFAs, the extended transition function, acceptance, and regular
   languages over the fixed ambient alphabet from page `581`,
2. prove the recursive well-definedness and concatenation law for `delta^*`
   before any product construction,
3. build closure under union, intersection, complement, and difference by
   explicit DFA constructions,
4. record reachable states and the language-preserving trim operation, and
5. bridge the published prefix-state machine to a genuine DFA by adjoining the
   missing sink state instead of pretending the current published object already
   satisfies totality.

Important choices:

- `prop-every-finite-language-is-regular` is kept as a direct finite-prefix-trie
  construction rather than postponed to regular expressions. The page has the
  finite-set prerequisite already, and the proposition is genuinely useful before
  the regex page exists.
- Complement is phrased as complement **inside the fixed alphabet** `Sigma^*`,
  matching the convention established on page `581`.
- I did not change the design's second false statement. The graph-complement
  warning is local and authorable once the complement-by-accepting-set theorem
  is made explicit.

### TC-6 -- `context-free-grammars-and-normal-forms`

I kept the design's grammar-first route and repaired only the parts that were
not locally authorable:

1. define CFGs, derivations, leftmost/rightmost derivations, parse trees, and
   ambiguity carefully enough that syntax, derivations, and tree objects stay
   separate,
2. make the tree-address convention explicit through the published
   finite-sequence-tree page that explains the otherwise surprising
   `ramsey-theory` prerequisite,
3. build useless-symbol, epsilon-rule, and unit-rule elimination before any
   normal-form theorem,
4. prove CNF with the explicit epsilon exception,
5. prove GNF by constructive local rewrites rather than by importing Gallier's
   later least-fixed-point machinery, and
6. close with the four closure constructions the design names: union,
   concatenation, star, and homomorphism.

Important choices:

- I kept `def-ambiguity-and-inherent-ambiguity`, but changed the false statement
  to the grammar-vs-language distinction the page can actually witness.
- I did **not** add reversal, inverse homomorphism, or intersection-with-regular
  to the main theorem list. Those facts are standard, but the design chose a
  narrower closure block and the later PDA page explicitly owns
  intersection-with-regular-languages.
- The homomorphism part of the closure theorem uses the page-581 convention
  `h : Sigma -> Delta^*`, not the more restrictive one-letter replacement
  classroom shorthand. That keeps the theorem aligned with the earlier language
  page and avoids a silent convention change.

## Conventions and dependency notes

- **Fixed ambient alphabets remain load-bearing.** DFA complements and Boolean
  operations are always taken inside one fixed `Sigma^*`, not inside "all binary
  strings" or a language class without an ambient alphabet.
- **`delta^*` must be proved before it is used.** The product constructions and
  reachable-state definition both rely on the recursive extension of `delta`,
  so page `583` now carries that well-definedness seam explicitly.
- **The prefix-automaton bridge is a repair, not a new convention.** The
  published combinatorics automaton remains valid for counting words avoiding
  forbidden factors; page `583` simply adds the missing sink and accepting-set
  structure needed to treat it as a language recognizer.
- **Parse trees use ordered finite-sequence addresses.** That is why page `591`
  legitimately depends on the published tree-of-finite-sequences convention from
  the `ramsey-theory` page.
- **Ambiguity lives at two levels.** A grammar can be ambiguous even when the
  language is not inherently ambiguous. That distinction is the point of the
  repaired false statement and counterexample.
- **The CNF epsilon exception is structural, not cosmetic.** The start symbol
  carrying the unique allowed epsilon-production must stay off all right-hand
  sides, so the exception cannot be suppressed without changing the theorem.

## Source set actually read

I opened and read these live sources through the web reader on Saturday,
August 29, 2026:

### TC-2 sources

1. Jean Gallier and Jocelyn Quaintance, *Introduction to the Theory of
   Computation: Some Notes for CIS511*.
2. John Watrous, *Introduction to the Theory of Computing*, Lecture `2`.
3. John Watrous, *Introduction to the Theory of Computing*, Lecture `4`.

How they are used:

- Gallier is the primary treatment for the DFA core: the quintuple definition,
  `delta^*`, recognized language, regular-language definition, reachable states,
  and the product construction for union/intersection/difference.
- Watrous Lecture `2` independently backs the DFA, acceptance, and regular
  language conventions.
- Watrous Lecture `4` supplies the explicit complement-of-a-DFA theorem and an
  independent product-construction discussion.

### TC-6 sources

1. Jean Gallier and Jocelyn Quaintance, *Introduction to the Theory of
   Computation: Some Notes for CIS511*.
2. John Watrous, *Introduction to the Theory of Computing*, Lecture `7`.
3. John Watrous, *Introduction to the Theory of Computing*, Lecture `8`.
4. John Watrous, *Introduction to the Theory of Computing*, Lecture `9`.
5. Alfred V. Aho, *COMS W3261 CS Theory*, Lecture `11: Properties of CFL's`.
6. *CSC444 CFLs and PDAs* lecture note from DePaul.

How they are used:

- Gallier is the primary treatment for CFG definitions, derivations, ambiguity,
  parse trees, CNF, useless-symbol elimination, and the existence statement for
  GNF.
- Watrous Lectures `7-9` independently back the CFG definitions, parse-tree and
  ambiguity vocabulary, CNF statement, and closure under union/concatenation/star.

## Step-5 authoring

Authored pages:

- `deterministic-finite-automata-and-regular-languages`
- `deterministic-finite-automata-and-regular-languages-examples`
- `context-free-grammars-and-normal-forms`
- `context-free-grammars-and-normal-forms-examples`

Authored item ids:

- DFA page items: `def-deterministic-finite-automaton`, `def-extended-dfa-transition-function`, `thm-existence-and-uniqueness-of-extended-dfa-transition`, `lem-extended-dfa-transition-respects-concatenation`, `def-dfa-acceptance-and-recognized-language`, `def-regular-language-by-dfa-recognition`, `prop-every-finite-language-is-regular`, `thm-product-dfa-for-union-and-intersection`, `thm-complementing-accept-states-complements-the-language`, `cor-regular-languages-are-closed-under-boolean-operations`, `thm-dfa-for-language-difference`, `def-reachable-dfa-state`, `lem-removing-unreachable-states-preserves-language`, `prop-published-prefix-automata-extend-to-factor-avoidance-dfas`, `fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality`, `fs-complementing-a-dfa-complements-its-transition-graph`
- DFA examples: `ex-extended-dfa-transition-respects-concatenation`, `ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa`, `cex-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality`
- CFG page items: `def-context-free-grammar`, `def-one-step-and-reflexive-transitive-derivation`, `def-language-generated-by-a-cfg`, `def-leftmost-and-rightmost-derivation`, `def-parse-tree-and-yield`, `thm-derivation-parse-tree-correspondence`, `def-ambiguity-and-inherent-ambiguity`, `def-nullable-generating-and-reachable-variable`, `thm-elimination-of-useless-symbols`, `thm-elimination-of-epsilon-productions`, `thm-elimination-of-unit-productions`, `def-chomsky-normal-form`, `thm-chomsky-normal-form`, `def-greibach-normal-form`, `lem-gnf-substitution-step-preserves-language`, `lem-gnf-left-recursion-elimination-preserves-language`, `thm-greibach-normal-form`, `thm-cfl-closure-under-union-concatenation-star-and-homomorphism`, `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`, `fs-cnf-preserves-epsilon-without-an-exception`
- CFG examples: `ex-elimination-of-useless-symbols`, `ex-cfl-closure-under-union-concatenation-star-and-homomorphism`, `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`

Proof-contract artifact:

- `research/frontier-24-batch-10.proof-contracts.json`

Provenance rationale:

- Definitions and standard theorem statements sourced directly from the harvested TC-2 and TC-6 materials were tagged `literature-derived` for the statement component.
- The repaired bridge item `prop-published-prefix-automata-extend-to-factor-avoidance-dfas` remained `ai-altered` on the statement component because it refines a published library seam rather than reproducing a source statement verbatim.
- Examples and counterexamples were tagged `ai-generated` on the statement component with the required `generation.role`, and no generated statement was used as a dependency target.
- Proof components were tagged `ai-generated` exactly where this run supplied the local proof or verification text; definitions kept `proof: not-applicable`.

Narrowed or dropped claims:

- None beyond the scaffold repairs already recorded above. Step 5 authored the repaired batch-10 claims as scaffolded and did not further narrow or drop any item.

Canonical precheck repair applied:

- `precheck` initially requested canonical phase renumbering on `21` proof-bearing items. I adopted those exact numbering repairs without changing the mathematical content, then reran `precheck` to a clean pass.

Checks run on the authored batch:

- `node tools/tsx-run.mjs tools/precheck.mts $(jq -r '.[] | .items[].id' research/frontier-24-batch-10.pages.json | sed 's#^#items/#; s#$#.md#')` — pass, `28` checked, `0` failing after canonical repair
- `node tools/validate-plan.mjs research/plan-spec.json` — pass on the live plan; only the standing repo-wide `redundant-prereq` notices remained, including the known non-blocking notice on `deterministic-finite-automata-and-regular-languages`
- `node tools/content-policy.mjs research/frontier-24-batch-10.pages.json` — pass, `42` scoped item(s), `0` error(s), `0` warning(s)
- `node tools/proof-contract.mjs research/frontier-24-batch-10.proof-contracts.json --strict` — pass, `0` error(s), `0` warning(s), `28/28` item(s) checked

Blockers:

- none
- Aho is the explicit independent source for homomorphism closure and the
  broader closure table, which lets the coverage ledger record the deliberate
  out-of-scope choices rather than inventing them.
- The DePaul note is the constructive GNF route the design did not spell out:
  it gives the substitution lemma, the immediate-left-recursion elimination
  lemma, and the ordered-variable CNF-to-GNF sketch that make the page `591`
  theorem locally authorable.

## Coverage boundaries I kept explicit

- I did not treat a source's casual mention of an inherently ambiguous language
  as proof that the page may use that language as a local counterexample.
- I did not promote closure under reversal or inverse homomorphism into page
  `591` just because Aho lists them. They are recorded in coverage with explicit
  out-of-scope reasons.
- I did not move CFL intersection with regular languages onto page `591`. The
  design already homes that on
  `pushdown-automata-and-context-free-languages`, and the coverage ledger
  preserves that destination.
- I did not treat Gallier's fixed-point proof route for GNF as locally usable
  evidence for step `5` authoring. The page scaffold stays within grammar-level
  transformations already available at order `591`.

## Known limits and step-5 cautions

- This workspace has restricted shell networking, so I cannot promise that
  `source-fetch-check --stamp` or `url-sweep` will succeed locally even though
  every recorded source URL was actually opened in the web reader before being
  added to the coverage file.
- The longest step-5 proof risk is still `thm-greibach-normal-form`. It is now
  locally decomposed and source-backed, but it remains the page's heaviest
  constructive proof.
- The repaired ambiguity counterexample must stay at the grammar-versus-language
  level. If step `5` drifts back toward proving inherent ambiguity of a specific
  language on page `591`, that is a scope defect.
- The prefix-automaton bridge on page `583` must keep the sink-state addition
  explicit. Writing the result as if the published item already had a total
  transition function would reintroduce the very defect this scaffold fixes.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-24-batch-10.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-10.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-10.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-24-batch-10.coverage.json --out /tmp/frontier-24-batch-10-url-liveness.json --recover --fail-on-dead
```

Results are appended below after execution.

## Validation results

- `node -e 'JSON.parse(...)'` on `research/frontier-24-batch-10.pages.json`
  passed:
  `pages-json: ok`.

- `node -e 'JSON.parse(...)'` on `research/frontier-24-batch-10.coverage.json`
  passed:
  `coverage-json: ok`.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-24-batch-10.coverage.json`
  passed on Saturday, August 29, 2026:
  `coverage-checklist: 2 page(s), 85 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  passed:
  `content-policy: 450 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Saturday, August 29, 2026. The visible output remained the
  repository-wide `redundant-prereq` advisories and ended with:
  `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 512 page(s) with item lists.`

- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-10.coverage.json --stamp`
  failed for all `9` recorded source rows with resolver errors `ENOTFOUND`:
  - `https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html`
  - `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.02.pdf`
  - `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.04.pdf`
  - `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.07.pdf`
  - `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.08.pdf`
  - `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.09.pdf`
  - `https://www.cs.columbia.edu/~aho/cs3261/Lectures/L11-Properties_of_CFLs.html`
  - `https://condor.depaul.edu/glancast/444class/docs/lecOct23.html`

- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-10.coverage.json`
  then failed, correctly, because no `fetch_verified` stamps exist after the
  resolver failure:
  `source-fetch-check: 0/9 source(s) fetch-verified, 9 FAILED`.

- `node tools/url-sweep.mjs --coverage research/frontier-24-batch-10.coverage.json --out /tmp/frontier-24-batch-10-url-liveness.json --recover --fail-on-dead`
  failed `0/8` live on the same shell-wide DNS blocker:
  `url-sweep: 0/8 live; 8 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-24-batch-10-url-liveness.json`.
  The sweep deduplicated the shared Gallier URL across the two A pages, so it
  reported `8` distinct URLs rather than `9` source rows. Every failure was a
  `curl: (6) Could not resolve host` error, not a per-source mathematical
  mismatch.

What was still verified despite the shell-side source-gate blocker:

- Every recorded source URL in `research/frontier-24-batch-10.coverage.json`
  was actually opened in the web reader on Saturday, August 29, 2026 before I
  wrote its locator and harvest rows.
- I did not fabricate any `fetch_verified` stamps.
- The fetch and liveness failures are resolver-wide in this shell, not evidence
  that any one of the recorded documents is dead or mismatched.

Orchestrator resolution on Saturday, August 29, 2026:

- `source-fetch-check --stamp` passed from the network-enabled parent with
  `9/9 source(s) fetch-verified (9 newly stamped)`.
- `url-sweep --recover --fail-on-dead` passed for all eight unique URLs with
  zero failures, recoveries, or suspects.

The batch-10 fetch and liveness blocker is resolved.

## Step-3 fix pass

No batch-10 finding ids were issued in
`research/frontier-24-alpha-d-step3-scaffold-review.md`. The review marks both
owned A pages `sufficient`, and
`research/frontier-24-alpha-d-step3-verdicts.json` matches that verdict. Its
TC-2 prose count is stale at `15` A items, but the same review explicitly
approves the added complement seam and does not identify a batch-10 repair row.

| finding id | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| none | no Alpha-issued batch-10 finding to apply or push back on; accepted the sufficient verdict and repaired two unlabeled coverage carriers found during the fix-pass audit | `research/frontier-24-alpha-d-step3-scaffold-review.md` issues no finding ids and ends both page reviews with `Verdict: sufficient`; `research/frontier-24-alpha-d-step3-verdicts.json` marks `deterministic-finite-automata-and-regular-languages` and `context-free-grammars-and-normal-forms` as `sufficient`; a manifest-to-coverage alignment check on the live batch found two A-page items without carriers, `lem-extended-dfa-transition-respects-concatenation` and `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`, so this pass added canonical `included` rows for them. | `research/frontier-24-batch-10.coverage.json` now carries canonical rows for `lem-extended-dfa-transition-respects-concatenation` under `deterministic-finite-automata-and-regular-languages` and `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` under `context-free-grammars-and-normal-forms`; `research/frontier-24-batch-10.notes.md` records the repair. |

Targeted alignment check after the repair:

- `deterministic-finite-automata-and-regular-languages`: `missing: []`
- `context-free-grammars-and-normal-forms`: `missing: []`

Source verification for this fix pass:

- I re-opened the eight unique recorded source URLs through the web reader on
  Saturday, August 29, 2026: Gallier's live HTML notes, Watrous Lectures
  `2`, `4`, `7`, `8`, and `9`, Aho Lecture `11`, and the DePaul GNF note.
- The live documents still match the recorded locators and harvested headings,
  so no URL repair, archive recovery, or re-sourcing was needed.
- The existing `fetch_verified` stamps in
  `research/frontier-24-batch-10.coverage.json` remain valid for the current
  source set.

Validator rerun on Saturday, August 29, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-24-batch-10.coverage.json`
  -> `coverage-checklist: 2 page(s), 87 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  -> `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-10.coverage.json`
  -> `source-fetch-check: 9/9 source(s) fetch-verified`
