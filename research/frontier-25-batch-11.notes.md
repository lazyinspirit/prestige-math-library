# frontier-25 batch 11 notes - beta scaffold

Owned pair:

- `turing-machines-configurations-and-computation` / `turing-machines-configurations-and-computation-examples`

Artifacts written in this dispatch:

- `research/frontier-25-batch-11.pages.json`
- `research/frontier-25-batch-11.coverage.json`
- this file

Session date: Sunday, August 30, 2026.

## Design against spec

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`research/frontier-25-beta-11.task.md`, `research/plan-spec.json`, and the
assigned design block in
[research/plan-computability-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-computability-theory-track.md:472).

The task's two design references, lines `472` and `496`, are not competing
amendments. Line `496` is the B-page subheading inside the same `TC-9` design
section, so I treated the full block at lines `472-504` as the controlling
design text.

The design and the current spec agree on:

- page id
- companion page id
- page title
- order
- category
- declared prerequisite pages

Step 3 later exposed one additional published prerequisite that is not named in
either the design block or the current `research/plan-spec.json`: the item
`lem-acceptance-is-configuration-reachability` uses the already-published
directed-path definition
`def-directed-walk-trail-path-cycle-and-strong-connectivity`, whose live home
page is `eulerian-and-hamiltonian-graphs`. The batch manifest therefore keeps
that extra backward prerequisite explicitly even though it is a local closure
repair rather than a design-vs-spec alignment row.

## Item census and split check

- A page `turing-machines-configurations-and-computation`: `16` items
- B page `turing-machines-configurations-and-computation-examples`: `3` items

No A page is close to the `60`-item split gate, so no split is needed.

## Route choices

The scaffold keeps the design's route and proof trap:

1. fix one deterministic one-tape model before talking about computations,
2. define configurations and the one-step relation before any language or
   function semantics,
3. separate halting, rejecting, and diverging runs explicitly,
4. introduce nondeterministic and multitape variants only as variants here,
5. state valid-history decidability without prematurely encoding machines,
6. convert acceptance into configuration reachability only after the graph
   object itself exists.

Important choices:

- I used a **right-infinite one-tape convention** and represented tape contents
  by finite-support functions on `N`. The head starts at the leftmost input
  cell, and a left move from cell `0` leaves the head at `0`. This is the
  cleanest common convention across the modern sources actually read, and it
  matches the track's next-page theorem that one-way and two-way tapes are only
  variant models.
- I made **accept and reject states explicit in the base machine definition**
  even though some sources halt by leaving `δ` undefined. The page needs the
  acceptance/rejection/divergence trichotomy on its own terms, so the dedicated
  halting-state convention is load-bearing here.
- I did **not** adopt Turing's original narrower use of the word
  `configuration` for the pair "state plus scanned symbol." The scaffold uses
  the later full configuration notion: state, head position, and complete
  finite tape data. Without that change, the configuration graph and
  computation-history proposition would be impossible to state cleanly.
- I stated `prop-valid-computation-histories-are-decidable` only for a
  **fixed machine and fixed input**. The uniform history language over variable
  machine codes belongs to `robust-machine-models-and-universal-computation`,
  because effective encodings of Turing machines are introduced there, not on
  page `597`.
- I kept `def-configuration-graph` **without Savage's acyclicity hypothesis**.
  Savage's section only needs graphs for machines already known to halt on all
  inputs; this page cannot adopt that restriction because its scope explicitly
  includes divergence and looping nondeterministic branches.
- I used the B-page reachability example to also witness why
  `fs-nondeterministic-acceptance-requires-every-branch-to-halt` is false, so
  I did not add a fourth B-page item beyond the design.

## Conventions and dependency notes

- **Machine/code/function separation.** The page keeps the design's trap in
  view: a machine, a configuration, a computation, a recognized language, and a
  computed partial function are distinct objects. This is why the page defines
  each explicitly instead of folding them into one omnibus item.
- **Configuration graph convention.** The graph is parameterized by a machine
  and an input. Its vertices are configurations and its directed edges are
  one-step moves. I intentionally treat reachability, not acyclicity, as the
  invariant this page owns.
- **Computed partial function convention.** I tied machine-computed partial
  functions to the earlier page's effective-encoding vocabulary rather than to
  a special unary-number convention. The Open Logic unary examples were useful
  source support, but they are not the ambient convention of this track.
- **Published external dependency.** The reachability lemma uses the already
  published directed-path item `def-directed-walk-trail-path-cycle-and-strong-connectivity`
  to avoid silently re-defining directed paths inside the computation page.

## Source set actually read

I read and verified these live sources in the web reader on Sunday,
August 30, 2026:

1. A. M. Turing, *On Computable Numbers, with an Application to the
   Entscheidungsproblem*, via a live HTML transcription at
   `https://studylib.net/doc/28158899/turing-paper-1936`.
2. John E. Savage, *Models of Computation: Exploring the Power of Computing*,
   Chapter 5:
   `https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf`.
3. Richard Zach, *Sets, Logic, Computation: An Open Introduction to
   Metalogic*:
   `https://slc.openlogicproject.org/slc-screen.pdf`.
4. Michael Sipser, MIT 18.404J lecture notes, Lecture 10:
   `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/a48f01c5374e72ee4f68a70bc0e38583_MIT18_404f20_lec10.pdf`.

Two independent modern treatments back the scaffold in full: Savage's textbook
chapter and the Open Logic textbook chapter. Turing's 1936 paper is the
required eligible primary treatment, and Sipser's Lecture 10 is the focused
support for the computation-history proposition.

What each source is doing in the scaffold:

- Turing supplies the historical machine/tape/move setup and the earliest
  complete-configuration viewpoint, while also forcing the notes to explain why
  the modern full-configuration convention is the right one for this page.
- Savage is the main source for the deterministic model, recognized versus
  decidable languages, partial function computation, multitape and
  nondeterministic variants, and configuration graphs.
- Open Logic supplies the clean one-way tape convention, the explicit one-step
  configuration relation, run/halting/output semantics, and the dedicated
  accept/reject-state comparison used in the false statement about rejection.
- Sipser Lecture 10 is the exact source for encoded computation histories and
  the local checks needed to state that valid histories are decidable.

## Known limits and step-5 risks

- The fixed-machine restriction on
  `prop-valid-computation-histories-are-decidable` is deliberate. If step 5
  tries to quantify over machine descriptions there, it will smuggle in the
  next page's encoding machinery and break dependency closure.
- `def-multitape-and-nondeterministic-machines` is intentionally only a
  **definition item** on this page. The corresponding simulation theorems,
  time-overhead statements, and model-equivalence claims are all deferred to
  `robust-machine-models-and-universal-computation`.
- The shell in this dispatch may still be unable to resolve external hosts, so
  the mechanical fetch/liveness validators below may fail even though every
  cited URL was opened and read in the web channel before I recorded it.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-11.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-11.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-11.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-25-batch-11.coverage.json --out /tmp/frontier-25-batch-11-url-liveness.json --recover --fail-on-dead
```

Results are appended below after execution.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-11.coverage.json`
  passed on Sunday, August 30, 2026:
  `coverage-checklist: 1 page(s), 58 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  passed:
  `content-policy: 19 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Sunday, August 30, 2026. The visible output ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.`
  It then printed the standard informational note that `753` planned pages
  still carry no item list.

- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-11.coverage.json --stamp`
  failed for all four source URLs with the same resolver-side error `ENOTFOUND`:
  - `https://studylib.net/doc/28158899/turing-paper-1936`
  - `https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf`
  - `https://slc.openlogicproject.org/slc-screen.pdf`
  - `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/a48f01c5374e72ee4f68a70bc0e38583_MIT18_404f20_lec10.pdf`
  The summary line was:
  `source-fetch-check: 0/4 source(s) fetch-verified (0 newly stamped), 4 FAILED`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-11.coverage.json`
  then failed, correctly, because no `fetch_verified` stamps exist after the
  resolver failure. The summary line was:
  `source-fetch-check: 0/4 source(s) fetch-verified, 4 FAILED`.

- `node tools/url-sweep.mjs --coverage research/frontier-25-batch-11.coverage.json --out /tmp/frontier-25-batch-11-url-liveness.json --recover --fail-on-dead`
  failed `0/4` live on the same shell-wide DNS blocker:
  `curl: (6) Could not resolve host` for every host, `0` recoverable snapshots,
  receipt written to `/tmp/frontier-25-batch-11-url-liveness.json`.
  Its generic per-row line `re-sourcing is justified here` is not a real
  mathematical source finding in this dispatch, because the failure mode was
  uniform transport failure across every cited host.

- `git diff --check`
  passed cleanly after the scaffold edits.

What was still verified despite the shell-side source-gate blocker:

- Every recorded URL was actually opened and read in the web reader on Sunday,
  August 30, 2026 before I wrote its locator and harvest rows.
- I did not fabricate any `fetch_verified` stamps.
- The fetch and liveness failures are resolver-wide in this shell, not evidence
  that any one of the four source documents is dead or mismatched.

## Step-3 fix pass

- `D11-1` — accepted in substance; the manifest repair already stands on the
  current bytes. Evidence: `lem-acceptance-is-configuration-reachability` in
  `research/frontier-25-batch-11.pages.json` depends on
  `def-directed-walk-trail-path-cycle-and-strong-connectivity`, whose live home
  in `research/plan-spec.json` is `eulerian-and-hamiltonian-graphs` at order
  `211`, not `graphs-walks-and-connectivity`. Changed scaffold record:
  `research/frontier-25-batch-11.pages.json` retained the extra backward
  prerequisite `eulerian-and-hamiltonian-graphs`.
- `D11-1` — pushback on one alpha-review evidence sentence only. Evidence: the
  current local `research/plan-spec.json` still lists only
  `formal-languages-encodings-and-decision-problems` and
  `graphs-walks-and-connectivity` in page `597`'s `requires`, so this is not a
  pure spec-alignment repair on today's bytes. Changed scaffold record: this
  notes file now records the repair as a local dependency-closure requirement
  rather than as design-vs-spec agreement.
- Additional source repair — restored the eligible primary treatment
  `https://studylib.net/doc/28158899/turing-paper-1936` to
  `research/frontier-25-batch-11.coverage.json` after re-reading the live HTML
  transcription in the web reader on Sunday, August 30, 2026. Evidence: the
  live coverage artifact had dropped Turing and listed only Savage, Open Logic,
  and Sipser, which did not satisfy this dispatch's primary-source harvest
  requirement. Changed scaffold record:
  `research/frontier-25-batch-11.coverage.json` now carries Turing's exact
  locator, harvested result rows, and honest `fetch_verified` provenance marked
  `verified_via: web-open`.
- Required validators rerun on the repaired files:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-11.coverage.json`
  -> `coverage-checklist: 1 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)`.
- Required validators rerun on the repaired files:
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`.
- Required validators rerun on the repaired files:
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass; final lines report `OK` with no page-order, item-cycle,
  forward-reference, B-page-dependency, or unresolved-id failure, followed only
  by the standard note that `753` planned pages still lack item lists.

## Step-5 authoring

On Sunday, August 30, 2026, I authored both owned page files:

- `library/computability-theory/turing-machines-configurations-and-computation.md`
- `library/computability-theory/turing-machines-configurations-and-computation-examples.md`

I also authored all 19 owned item files and the required batch contract
artifact `research/frontier-25-batch-11.proof-contracts.json`.

### Authored ids

- A page `turing-machines-configurations-and-computation`:
  `def-deterministic-one-tape-turing-machine`,
  `def-tape-finite-support-convention`,
  `def-turing-machine-configuration`,
  `def-one-step-configuration-relation`,
  `lem-deterministic-nonhalting-configurations-have-unique-successors`,
  `def-initial-accepting-and-rejecting-configurations`,
  `def-halting-computation-and-divergence`,
  `def-language-recognized-and-decided`,
  `def-partial-function-computed-by-a-machine`,
  `def-multitape-and-nondeterministic-machines`,
  `def-nondeterministic-accepting-computation`,
  `prop-valid-computation-histories-are-decidable`,
  `def-configuration-graph`,
  `lem-acceptance-is-configuration-reachability`,
  `fs-rejection-is-divergence`,
  `fs-nondeterministic-acceptance-requires-every-branch-to-halt`.
- B page `turing-machines-configurations-and-computation-examples`:
  `ex-valid-computation-histories-are-decidable`,
  `ex-acceptance-is-configuration-reachability`,
  `cex-rejection-is-divergence`.

### Provenance rationale

- I kept the standard base-machine, configuration, computation, language, and
  variant-model items as `provenance.statement: literature-derived`; this
  includes the deterministic machine definition, configurations, the one-step
  relation, recognized versus decided languages, multitape/nondeterministic
  variants, and the unique-successor lemma.
- I tagged the page-local convention packaging as `ai-altered` where the
  library needed a precise route choice not stated in one source's exact words:
  the finite-support tape convention, the halting/output convention, the
  encoded partial-function interface, the non-finite configuration-graph
  definition, the fixed-machine computation-history proposition, the
  reachability lemma, and the two pedagogical false statements.
- I used `ai-generated` only on the two B-page examples and the B-page
  counterexample, with the required `generation.role` fields present. No
  `ai-generated` statement is a dependency target.

### Narrowed or dropped claims

- No planned batch-11 item id was dropped.
- No page was split.
- `prop-valid-computation-histories-are-decidable` stayed intentionally narrow:
  fixed machine, fixed input, and encoded history checking only. I did not
  widen it to a uniform machine-code language, because that would import the
  next page's machine-encoding machinery.
- `def-configuration-graph` was written explicitly as a directed graph in the
  ordered-pair-arc sense without any finiteness claim. This keeps the
  reachability route honest on looping machines instead of inheriting a
  finite-digraph convention that the item does not satisfy.

### Blockers

- No authoring blocker remains on the current bytes.

### Checks run after authoring

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-deterministic-nonhalting-configurations-have-unique-successors.md items/prop-valid-computation-histories-are-decidable.md items/lem-acceptance-is-configuration-reachability.md items/fs-rejection-is-divergence.md items/fs-nondeterministic-acceptance-requires-every-branch-to-halt.md items/ex-valid-computation-histories-are-decidable.md items/ex-acceptance-is-configuration-reachability.md items/cex-rejection-is-divergence.md`
  -> `8 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-25-batch-11.pages.json`
  -> `content-policy: 19 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json | tail -n 5`
  -> final lines: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.` and the standard note that `727` planned pages still carry no item list.
- `node tools/proof-contract.mjs research/frontier-25-batch-11.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 1 warning(s), 8/8 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-25-batch-11.proof-contracts.json --items-dir items --fail-on-missing-quote`
  -> `16 citation(s) over 8 authored item(s)`, `QUOTE NOT FOUND — none`, `WIDENING CANDIDATES — none found by the three detectors`.
- `node tools/boundary-audit.mjs research/frontier-25-batch-11.proof-contracts.json --items-dir items --fail-on-contradicted`
  -> `64 rows`, `39 marked not_applicable`, `TEMPLATE REUSE — none at or above 3 members`, `CONTRADICTED DISPOSITIONS — none found by the three detectors`.
- `git diff --check`
  -> passed cleanly.

### Contract note

- The only remaining proof-contract warning is `shotgun-bracket` on
  `lem-acceptance-is-configuration-reachability` step `1.2`: the step cites
  all four declared facts at once because it packages the full reverse
  implication in one line. The strict gate still passes, and the contract,
  citation, and boundary audits now all match the final on-disk proof steps.
