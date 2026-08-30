# frontier-25 batch 10 notes - beta scaffold

Owned pairs:

- `nondeterministic-finite-automata-and-subset-construction` / `nondeterministic-finite-automata-and-subset-construction-examples`
- `pushdown-automata-and-context-free-languages` / `pushdown-automata-and-context-free-languages-examples`

Artifacts written in this dispatch:

- `research/frontier-25-batch-10.pages.json`
- `research/frontier-25-batch-10.coverage.json`
- this file

Session date: Sunday, August 30, 2026.

## Design against spec

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`,
`research/frontier-25-dispatch/beta-batch-10.prompt.md`,
`research/plan-spec.json`, the prerequisite scaffold manifests
`research/frontier-23-batch-10.pages.json` and
`research/frontier-24-batch-10.pages.json`, and the matched design blocks in
[research/plan-computability-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-computability-theory-track.md:251)
and
[research/plan-computability-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-computability-theory-track.md:396).

For both assigned A pages the second matched line is not a competing amendment:

- `nondeterministic-finite-automata-and-subset-construction`: line `274` is the
  B-page subheading inside the same `TC-3` section, so I treated the full block
  at lines `251-284` as the controlling design text.
- `pushdown-automata-and-context-free-languages`: line `420` is the B-page
  subheading inside the same `TC-7` section, so I treated the full block at
  lines `396-430` as the controlling design text.

For `nondeterministic-finite-automata-and-subset-construction`, the current
spec and the controlling design agree on:

- page id
- companion page id
- page title
- order
- category
- declared prerequisite pages

For `pushdown-automata-and-context-free-languages`, the current spec and the
controlling design agree on the page id, companion page id, page title, order,
and category, but not on the declared prerequisite pages. The controlling
`TC-7` design block still lists only
`context-free-grammars-and-normal-forms`, while the authoritative live spec for
page `593` also requires
`deterministic-finite-automata-and-regular-languages`. I therefore recorded the
drift and followed `research/plan-spec.json` exactly.

## Item census and split check

- A page `nondeterministic-finite-automata-and-subset-construction`: `15` items
- B page `nondeterministic-finite-automata-and-subset-construction-examples`: `3` items
- A page `pushdown-automata-and-context-free-languages`: `17` items
- B page `pushdown-automata-and-context-free-languages-examples`: `3` items

Neither A page is close to the `60`-item split ceiling, so no split is needed.

## Scaffold repairs

The NFA page can follow the design as written. The PDA page needed one real
deterministic-block repair.

### Repair 1 -- `intersection with regular languages` is not part of the repaired live page route

The `TC-7` design item
`prop-cfls-are-closed-under-intersection-with-regular-languages` is not
carried in the current scaffold. After the Step-3 review's D10-1 alignment
repair, page `593` does authoritatively require
`deterministic-finite-automata-and-regular-languages`, so omitting that theorem
is no longer a missing-prerequisite workaround.

I still did not restore the item, because the reviewed page is already
dependency-closed without spending it and the deterministic block's real
missing seam was the unambiguity-preserving fragment-grammar route. Reinstating
the regular-intersection theorem would enlarge the page beyond the source-backed
route the repaired scaffold actually uses.

I replaced that design slot with:

- `prop-pda-to-cfg-construction-preserves-unambiguity`

This proposition is genuinely needed by the deterministic section, is directly
backed by Gallier's `Proposition 6.18`, and is the item the repaired page route
actually depends on.

### Repair 2 -- the deterministic section needed the missing uniqueness lemma

Once the deterministic section is routed through Gallier's
`G is unambiguous iff M is unambiguous` clause, the page needs the explicit seam
that a DPDA has at most one computation on a fixed input. The design listed the
unambiguity conclusion but not this prerequisite.

I therefore added:

- `lem-dpdas-have-unique-computations`

This is not padding. It is the exact missing step that lets page `593` prove
`prop-deterministic-cfls-are-unambiguous` honestly.

### Repair 3 -- the original false statement needed a nonlocal separation proof

The design's false statement `fs-every-cfl-is-deterministic-context-free`
requires a concrete context-free language together with a proof that no DPDA
accepts it. Under the current page closure that is not an honest step-5 route:
Gallier and Kozen both name non-DCFL examples, but neither makes one locally
proved in the material this page otherwise owns.

I therefore replaced it, and the matching B-page counterexample, with the local
failure mode Kozen proves inside the complement theorem:

- `fs-swapping-dpda-accept-states-complements-the-language`
- `cex-swapping-dpda-accept-states-complements-the-language`

This keeps the deterministic-complement trap explicit without pretending that a
full CFL-versus-DCFL separation proof already lives on page `593`.

## Route choices

### TC-3 -- `nondeterministic-finite-automata-and-subset-construction`

I kept the design's intended route:

1. define NFAs with epsilon-moves, epsilon-closure, the extended transition
   function, and acceptance carefully enough that "some branch accepts" is part
   of the formal semantics,
2. show how every DFA embeds into the NFA model,
3. define the subset-construction DFA and prove its state invariant before the
   language-equivalence theorem,
4. isolate epsilon-elimination as its own theorem rather than burying it in the
   subset-construction proof, and
5. close with the standard NFA constructions for union, concatenation, and star,
   plus the exponential-state warning.

Important choices:

- I kept the exponential blowup proposition exactly on this page because
  Gallier's `Example 5` already frames it as the subset-construction complexity
  seam, not as later minimization theory.
- `lem-epsilon-closure-is-a-closure-operator` is a genuine prerequisite: the
  epsilon-elimination construction and the subset-state invariant both rely on
  idempotence, so leaving it implicit would make step 5 weaker than the page
  actually needs.
- I did not add a separate NFA-concatenation lemma for the extended transition.
  The subset invariant and the NFA operation theorem already cover the load-bearing
  recursion on words for this page.

### TC-7 -- `pushdown-automata-and-context-free-languages`

I kept the design's grammar/PDA equivalence route and repaired only the
deterministic block:

1. define PDAs, configurations, and the two acceptance modes before any
   equivalence claim,
2. prove final-state and empty-stack acceptance equivalent for general PDAs,
3. build the standard CFG-to-PDA construction directly from leftmost derivations,
4. define the fragment variables `[p,Z,q]` and use them in the explicit
   PDA-to-CFG construction,
5. conclude `PDA = CFL`,
6. define DPDAs with the endmarker convention made explicit,
7. prove the uniqueness lemma needed for the deterministic branch,
8. use the unambiguity-preserving fragment grammar to prove
   `DCFL => unambiguous`, and
9. keep Kozen's complement theorem together with the local counterexample to
   naive state swapping.

Important choices:

- I deliberately routed `prop-deterministic-cfls-are-unambiguous` through the
  explicit PDA-to-CFG construction already on this page, rather than through
  later parsing machinery that the plan does not yet own.
- I did not restore the `intersection with regular languages` item after D10-1
  aligned page `593` with the live spec. The reviewed page is already
  dependency-closed without it, and the repaired deterministic route spends the
  fragment-grammar unambiguity seam instead.
- The complement proposition stays, but its false-statement foil is now the
  precise local trap Kozen identifies: naive accept-state swapping fails because
  a DPDA may loop before consuming all input.

## Conventions and dependency notes

- **NFA acceptance is existential over branches.** The page never phrases
  nondeterministic rejection as "some branch rejects"; the semantics are "there
  exists an accepting branch" versus "all branches fail".
- **Epsilon is notation for a no-input move, not part of the alphabet.** The
  page keeps the alphabet as `Sigma` and treats `epsilon` only in the transition
  domain.
- **Subset states are epsilon-closed sets.** I followed Gallier and Watrous
  here rather than a presentation that waits to close only after each transition.
- **The PDA page uses explicit endmarker determinism.** That convention is
  load-bearing for the complement theorem and must survive into step 5.
- **The fragment-variable grammar is the authoring spine for PDA to CFG.** The
  page does not defer that theorem to a high-level existence argument.
- **No forward references are kept.** Every dependency is same-page or in the
  declared prerequisite closure.

## Source set actually read

I re-opened these live sources in the web reader on Sunday, August 30, 2026.

### NFA page sources

1. Jean Gallier and Jocelyn Quaintance, *Introduction to the Theory of
   Computation: Some Notes for CIS511*.
2. John Watrous, *Introduction to the Theory of Computing*, Lecture `3`.
3. John Watrous, *Introduction to the Theory of Computing*, Lecture `4`.

How they are used:

- Gallier is the primary treatment for the NFA definition, epsilon-closure,
  extended transition, subset construction, and the exponential-state example.
- Watrous Lecture `3` independently backs the NFA acceptance semantics and the
  subset-construction route.
- Watrous Lecture `4` supplies the explicit NFA constructions for union,
  concatenation, and star.

### PDA page sources

1. Jean Gallier and Jocelyn Quaintance, *Introduction to the Theory of
   Computation: Some Notes for CIS511*.
2. Dexter C. Kozen, *Automata and Computability*.

How they are used:

- Gallier is the primary treatment for PDA definitions, the acceptance-mode
  equivalence, CFG-to-PDA, PDA-to-CFG, and the unambiguity-preservation clause
  of the fragment grammar.
- Kozen supplies the deterministic PDA conventions, the complement-closure
  theorem, and the exact "naive accept-state swapping fails" trap that repairs
  the design's original false statement.

## Receipt handling

- For the Gallier HTML URL and Watrous Lecture `4` PDF I reused exact-url
  `fetch_verified` stamps already present elsewhere in the repository. I did not
  fabricate new byte hashes.
- For Watrous Lecture `3` and the Kozen textbook mirror there was no existing
  exact-url repo stamp and the shell cannot fetch network bodies in this runner:
  direct `node fetch(...)` tests on Sunday, August 30, 2026 failed with
  `ENOTFOUND` for both an official Waterloo PDF and the Kozen mirror.
- I therefore recorded minimal manual `fetch_verified` blocks that say only what
  I actually verified in the web reader on this date: the document kind, and for
  Watrous Lecture `3` the page count the reader exposed.

This matches the repository precedent in
`research/frontier-24-batch-7.notes.md`: reuse exact-url stamps when they
already exist, and otherwise record only the web-verified facts instead of
inventing byte-level metadata the shell cannot compute.

## Known limits and step-5 risks

- The PDA page no longer scaffolds `intersection with regular languages`. After
  D10-1, that omission is a route choice in the reviewed scaffold, not an
  unresolved prerequisite defect. If a later page genuinely needs that theorem
  in-library, the remedy is a deliberate run-level scope decision rather than

## Step-5 authoring

Authored page files:

- `library/computability-theory/nondeterministic-finite-automata-and-subset-construction.md`
- `library/computability-theory/nondeterministic-finite-automata-and-subset-construction-examples.md`
- `library/computability-theory/pushdown-automata-and-context-free-languages.md`
- `library/computability-theory/pushdown-automata-and-context-free-languages-examples.md`

Authored NFA-page item ids:

- `def-nfa-with-epsilon-moves`
- `def-epsilon-closure-of-a-state-set`
- `lem-epsilon-closure-is-a-closure-operator`
- `def-extended-nfa-transition`
- `def-nfa-acceptance-and-recognized-language`
- `prop-every-dfa-is-an-nfa`
- `def-subset-construction-dfa`
- `lem-subset-construction-state-invariant`
- `thm-subset-construction-preserves-language`
- `cor-dfas-and-nfas-recognize-the-same-languages`
- `thm-epsilon-elimination-for-nfas`
- `thm-nfa-constructions-for-union-concatenation-and-star`
- `prop-subset-construction-can-require-exponentially-many-states`
- `fs-an-nfa-accepts-only-if-every-branch-accepts`
- `fs-epsilon-is-an-input-symbol`
- `ex-every-dfa-is-an-nfa`
- `ex-subset-construction-can-require-exponentially-many-states`
- `cex-an-nfa-accepts-only-if-every-branch-accepts`

Authored PDA-page item ids:

- `def-nondeterministic-pushdown-automaton`
- `def-pda-configuration-and-step`
- `def-pda-acceptance-by-final-state`
- `def-pda-acceptance-by-empty-stack`
- `thm-final-state-and-empty-stack-acceptance-are-equivalent`
- `thm-cfg-to-pda-construction`
- `def-pda-computation-fragment-variable`
- `lem-pda-fragment-variables-compose`
- `thm-pda-to-cfg-construction`
- `thm-pdas-recognize-exactly-the-cfls`
- `def-deterministic-pda`
- `lem-dpdas-have-unique-computations`
- `prop-pda-to-cfg-construction-preserves-unambiguity`
- `prop-deterministic-cfls-are-unambiguous`
- `prop-deterministic-cfls-are-closed-under-complement`
- `fs-swapping-dpda-accept-states-complements-the-language`
- `fs-final-state-and-empty-stack-acceptance-are-literally-identical`
- `ex-cfg-to-pda-construction`
- `ex-a-n-b-n-is-deterministic-context-free-and-unambiguous`
- `cex-swapping-dpda-accept-states-complements-the-language`

Proof-contract/report artifact authored:

- `research/frontier-25-batch-10.proof-contracts.json`

Provenance rationale:

- All A-page statements were written as `literature-derived`. The source route
  remains Gallier plus Watrous for the NFA page, and Gallier plus Kozen for the
  PDA page.
- All local proofs, refutations, counterexamples, and verifications are
  `ai-generated`, because the final written arguments are local reconstructions
  rather than copied source proofs.
- The three B-page examples and two B-page counterexamples on the NFA/PDA
  example pages are `ai-generated` statements with the required `generation`
  roles, and none is used as a dependency target.
- Every authored page and item remains `status: draft`. No `verification.judge`
  block was created.

Narrowed or repaired claims carried from the reviewed scaffold into final
authoring:

- I kept the Step-3 repair that replaces the design's nonlocal CFL-vs-DCFL
  false statement with the local trap
  `fs-swapping-dpda-accept-states-complements-the-language` and its matching
  counterexample. The authored proof is exactly the one-state looping DPDA
  witness described in the scaffold notes.
- I kept the repaired deterministic PDA route through
  `lem-dpdas-have-unique-computations` and
  `prop-pda-to-cfg-construction-preserves-unambiguity`, because that is the
  local seam that makes `prop-deterministic-cfls-are-unambiguous` honest on
  page `593`.
- I did not reintroduce `intersection with regular languages`; the authored PDA
  page stays within the repaired reviewed route recorded above.

Checks run on Sunday, August 30, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts <27 proof-bearing batch items>` ->
  `27 checked, 0 failing`
- `node tools/content-policy.mjs research/frontier-25-batch-10.pages.json` ->
  `38 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> exit `0`; the live
  spec still prints many unrelated `redundant-prereq` warnings outside batch
  `10`, but the validator ends `OK`
- `node tools/proof-contract.mjs research/frontier-25-batch-10.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 27/27 item(s) checked`

Blockers:

- None inside the owned batch files after the final reruns.
  silently expanding page `593`.
- `prop-deterministic-cfls-are-closed-under-complement` is the hardest single
  step-5 proof on the batch. Its proof must keep Kozen's two normalizations
  explicit: endmarker tracking and spurious-loop elimination.
- `prop-deterministic-cfls-are-unambiguous` depends on the fragment grammar
  preserving unambiguity. Step 5 should not try to replace that route with an
  informal "deterministic means unambiguous" slogan.
- The shell-side URL liveness gate remains transport-blocked even for known-live
  sources. The coverage receipts are honest, but local `curl` and `fetch`
  validators will still report resolver failure from this environment.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/manifest-integrity.mjs --run frontier-25
node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-10.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-10.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-25-batch-10.coverage.json --out /tmp/frontier-25-batch-10-url-liveness.json --recover --fail-on-dead
node tools/source-backing.mjs --coverage research/frontier-25-batch-10.coverage.json --liveness /tmp/frontier-25-batch-10-url-liveness.json --reharvest-plan /tmp/frontier-25-batch-10-reharvest-plan.json
```

## Validation results

- `node tools/manifest-integrity.mjs --run frontier-25`
  passed on Sunday, August 30, 2026:
  `manifest-integrity: 28 page(s) owed, 28 in the manifests`
  with `no scope drift`.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-10.coverage.json`
  passed cleanly on Sunday, August 30, 2026:
  `coverage-checklist: 2 page(s), 85 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  passed:
  `content-policy: 369 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Sunday, August 30, 2026. The visible output included the
  repository's standing `redundant-prereq` warnings and, for this batch, the
  expected warning that page
  `nondeterministic-finite-automata-and-subset-construction` redundantly names
  `the-zfc-axioms-and-basic-set-constructions` directly even though it already
  reaches that page through
  `deterministic-finite-automata-and-regular-languages`. I did not "repair"
  that warning because the spec is authoritative and the dispatch forbids
  changing plan structure. The run still ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.`

- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-10.coverage.json`
  passed:
  `source-fetch-check: 5/5 source(s) fetch-verified`.

- `node tools/url-sweep.mjs --coverage research/frontier-25-batch-10.coverage.json --out /tmp/frontier-25-batch-10-url-liveness.json --recover --fail-on-dead`
  failed on all `4` unique source URLs in this shell:
  `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect`.
  The exact hosts were:
  - `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf`
  - `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.04.pdf`
  - `https://dokumen.pub/automata-and-computability-9781461218449-1461218446-q-2917785.html`
  - `https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html`

  Each failure was the same transport error:
  `curl: (6) Could not resolve host`.
  This matches the earlier `node fetch(...) -> ENOTFOUND` test on the same
  shell, so it is a resolver-wide local blocker, not evidence that four unrelated
  sources died simultaneously.

- `node tools/source-backing.mjs --coverage research/frontier-25-batch-10.coverage.json --liveness /tmp/frontier-25-batch-10-url-liveness.json --reharvest-plan /tmp/frontier-25-batch-10-reharvest-plan.json`
  then failed exactly because the liveness receipt marked every URL dead in the
  same resolver-blocked shell:
  `source-backing: 24 authored result(s) have no openable source left`.
  The generated work list is therefore not a real mathematical re-harvest plan;
  it is an artifact of the local DNS failure propagating into the backing gate.

- `node tools/prosecheck.mjs research/frontier-25-batch-10.notes.md --warnings`
  ended with warnings only after the validation-summary lines were appended:
  `1 file(s) checked. 0 error(s), 3 warning(s).`
  The warnings are the expected `count-in-prose` notices on the quoted validator
  summaries above, and the tool still ended with:
  `OK — no positional claim contradicts the spec.`

## Step-3 fix pass

- `D10-1` — applied, no pushback.
  Evidence: `research/frontier-25-alpha-d-step3-scaffold-review.md` records
  that page `593` underdeclared an already-authoritative backward prerequisite;
  `research/plan-spec.json` and `research/frontier-25-batch-10.pages.json`
  both now list
  `deterministic-finite-automata-and-regular-languages` in the `requires` list
  for `pushdown-automata-and-context-free-languages`.
  Changed scaffold record: I corrected this notes file so batch `10` no longer
  claims there is no design-versus-spec prerequisite drift on `TC-7`, no
  longer justifies omitting
  `prop-cfls-are-closed-under-intersection-with-regular-languages` as an
  unresolved closure defect, and instead records the repaired manifest alignment
  honestly. `research/frontier-25-batch-10.pages.json` already carried the
  repaired `requires` list, so no further manifest edit was needed.
  `research/frontier-25-batch-10.coverage.json` remained valid and unchanged.

- Validator reruns on Sunday, August 30, 2026:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-10.coverage.json`
  -> `coverage-checklist: 2 page(s), 85 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass with repository-wide `redundant-prereq` advisories only; final line:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.`
