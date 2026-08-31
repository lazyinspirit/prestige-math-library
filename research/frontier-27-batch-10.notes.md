# frontier-27 batch 10 notes - beta scaffold

Owned pairs:

- `primitive-recursive-and-partial-computable-functions` /
  `primitive-recursive-and-partial-computable-functions-examples`
- `resource-bounds-and-machine-invariance` /
  `resource-bounds-and-machine-invariance-examples`

Artifacts written in this dispatch:

- `research/frontier-27-batch-10.pages.json`
- `research/frontier-27-batch-10.coverage.json`
- this file

Session date: Monday, August 31, 2026.

## Design against spec

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`,
`research/frontier-27-beta-10.task.md`, `research/plan-spec.json`, and the
matched design references in
[research/plan-computability-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-computability-theory-track.md:685)
and
[research/plan-computability-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-computability-theory-track.md:837).

For both assigned A pages the second matched line is not a competing amendment:

- `primitive-recursive-and-partial-computable-functions`: line `709` is the
  B-page subheading inside the same `TC-15` block, so I treated the full block
  at lines `685-716` as the controlling design text.
- `resource-bounds-and-machine-invariance`: line `859` is the B-page
  subheading inside the same `TC-19` block, so I treated the full block at
  lines `837-864` as the controlling design text.

For both assigned A pages, the current spec and the controlling design agree on:

- page id
- companion page id
- page title
- order
- category
- declared prerequisite pages

I recorded no design-vs-spec drift for this batch. The manifest follows
`research/plan-spec.json` exactly.

## Item census and split check

- A page `primitive-recursive-and-partial-computable-functions`: `16` items
- B page `primitive-recursive-and-partial-computable-functions-examples`: `3` items
- A page `resource-bounds-and-machine-invariance`: `14` items
- B page `resource-bounds-and-machine-invariance-examples`: `3` items

Neither A page is close to the `60`-item split gate, so no split is needed.

## Route choices

### TC-15 -- `primitive-recursive-and-partial-computable-functions`

I kept the design's item spine and made one dependency repair inside that
spine.

1. define the initial arithmetic functions and the two closure schemes first,
2. package primitive recursive functions before spending them on arithmetic and
   bounded quantification,
3. introduce finite-sequence coding before the T-predicate,
4. isolate the one-step Turing-update coding as its own primitive-recursive
   lemma,
5. use that lemma to define Kleene's `T` and `U`, prove normal form, and then
   compare partial recursiveness with Turing computability, and
6. close with lambda-definability and the two standard traps about totality and
   primitive recursiveness.

Important choices:

- I did **not** route sequence coding through prime factorization. The obvious
  prime-power code would make `thm-sequence-length-and-coordinate-functions-are-primitive-recursive`
  rest on `thm-fundamental-theorem-of-arithmetic`, which is not one of the
  page's declared prerequisites. Instead I used the already-published effective
  tuple-encoding machinery from
  `formal-languages-encodings-and-decision-problems`, which the current library
  already relies on for machine coding one page earlier in the same track.
- This is a real scaffold repair, not page padding. The design only commits the
  page to a natural-number coding of finite sequences; it does not force a
  prime-power convention. The repaired route preserves the design's purpose
  while avoiding an undeclared number-theory dependency.
- I kept `prop-ackermann-is-total-computable-but-not-primitive-recursive`
  exactly where the design places it. The computability side is routed through
  the already-established machine notion of a computed partial function, not
  through later normal-form machinery, so no forward reference is needed.
- I kept the machine/code/computation/function distinction explicit all the way
  through `lem-turing-step-coding-is-primitive-recursive`,
  `def-kleene-t-predicate-and-output-function`, and
  `thm-partial-recursive-iff-turing-computable`. The design's stated proof trap
  is real here.
- I did not add an `s-m-n` item. The Open Logic computability chapter mentions
  it immediately after normal form, but the design explicitly sends it to the
  next page `acceptable-numberings-smn-and-the-recursion-theorem`, so the
  harvest defers it there.

### TC-19 -- `resource-bounds-and-machine-invariance`

I kept the design's route without structural repair:

1. define worst-case time and space cost before any class notation,
2. fix the asymptotic comparison and constructibility conventions up front,
3. define `DTIME`, `NTIME`, `DSPACE`, and `NSPACE`,
4. separate the cheap structural lemmas from the simulation theorems,
5. keep the single-tape slowdown and single-tape space preservation distinct,
6. isolate the `O(T log T)` universal-simulation theorem before claiming model
   invariance, and
7. close with the clocked-machine lemma and the encoding-invariance
   proposition.

Important choices:

- I kept `lem-time-at-least-input-length-permits-complete-input-reading` as its
  own item. The design warns that every bound must be stated quantitatively; the
  line between "has enough time to see the whole input" and "therefore uses at
  most that much space" is one of the exact places where sloppier expositions
  hide assumptions.
- `thm-multitape-to-single-tape-time-simulation` is explicitly the *quadratic*
  slowdown theorem already prepared by the previous page's
  `lem-multitape-simulation-has-quadratic-time-overhead`. I did not silently
  strengthen it to the `T log T` two-tape theorem, because the design wants the
  standard single-tape slowdown and the efficient universal simulator as two
  distinct quantitative statements.
- `thm-universal-simulation-with-logarithmic-overhead` is the place where the
  efficient `T log T` simulation lives. It is then spent in
  `prop-polynomial-time-and-space-are-model-invariant`; this is why the page
  depends on logarithms and general powers.
- I kept `prop-polynomially-related-encodings-preserve-polynomial-classes`
  downstream of `lem-clocked-machine-construction`. Without the clocking lemma,
  the proposition would wave its hands over a translated simulation budget
  instead of actually constructing one.
- I did not author a hierarchy theorem item on this page. Watrous and Blais both
  discuss time hierarchy here, but the design for TC-19 is about resource
  conventions, quantitative simulation, and invariance, not about strict class
  separations.

## Conventions and dependency notes

- **Sequence coding repair.** Finite sequences of naturals are coded via the
  published effective finite-tuple encoding machinery, not by prime powers.
  This keeps the page dependency-closed against its live prerequisite closure.
- **Machine/code/computation/function separation.** In TC-15, codes are coded
  syntax, computations are finite coded histories, and functions are extensional
  input-output objects. The page never identifies these.
- **Universal simulation is quantitative.** In TC-19, "model invariant" never
  means identical step counts. It means simulation overhead stays within the
  claimed asymptotic class.
- **Constructibility is load-bearing.** The page does not treat
  time-constructibility as philosophical window dressing. It is what allows the
  clocked simulator and the efficient-universal proof scheme to write down the
  bound they are supposed to enforce.
- **No forward references are kept.** The `s-m-n` and hierarchy-theorem seams
  are recorded in coverage as deferred or out-of-scope rather than pulled
  forward.

## Source set actually read

I re-opened these live sources in the web reader on Monday, August 31, 2026.

### TC-15 sources

1. Jeremy Avigad and Richard Zach, Open Logic Project chapter
   `Recursive Functions`:
   `https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf`
2. Jeremy Avigad and Richard Zach, Open Logic Project chapter
   `Lambda Definability`:
   `https://builds.openlogicproject.org/content/lambda-calculus/lambda-definability/lambda-definability.pdf`
3. Richard Zach, Open Logic Project chapter `Computability Theory`:
   `https://builds.openlogicproject.org/content/computability/computability-theory/computability-theory.pdf`
4. Klaus Sutner, CDM notes `Primitive Recursion`:
   `https://www.cs.cmu.edu/~cdm/resources/00-primrec.pdf`
5. Klaus Sutner, CDM notes `Coding Functions`:
   `https://www.cs.cmu.edu/~cdm/resources/02-coding.pdf`
6. Klaus Sutner, CDM notes `Other Models`:
   `https://www.cs.cmu.edu/~cdm/resources/20-models.pdf`
7. A. M. Turing, *On Computable Numbers, with an Application to the
   Entscheidungsproblem*, live full-text transcript preserving the original
   Oxford facsimile provenance:
   `https://studylib.net/doc/28158899/turing-paper-1936`
   original URL:
   `https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf`

Two independent modern treatments back the scaffold in full: the Open Logic
chapters and Sutner's CMU note set. Turing 1936 is the required primary
treatment for the lambda-definability/computability equivalence seam.

What each source is doing:

- The Open Logic recursive-functions chapter is the main source for the initial
  functions, composition, primitive recursion, sequence coding, partial
  recursion, and the Ackermann separation.
- The Open Logic lambda chapter is the main source for the two directions of
  lambda-definability versus recursion and for the fixpoint convention used in
  the example.
- The Open Logic computability-theory chapter is the exact source for Kleene
  normal form and for the `T`/`U` slogan.
- Sutner's `Primitive Recursion`, `Coding Functions`, and `Other Models` notes
  independently back the arithmetic, sequence-coding, mu-recursive, and
  comparison claims.
- Turing 1936 is used narrowly and honestly: only for the appendix equivalence
  seam between effective calculability and lambda-definability/computability.

### TC-19 sources

1. John Watrous, *Introduction to the Theory of Computing*, Lecture `19`:
   `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.19.pdf`
2. Sanjeev Arora and Boaz Barak, *Computational Complexity: A Modern
   Approach*:
   `https://theory.cs.princeton.edu/complexity/book.pdf`
3. Eric Blais, `Models of Computation`, page `7. Time Complexity`:
   `https://cs.uwaterloo.ca/~eblais/cs365/w25/time`
4. Eric Blais, `Models of Computation`, page `17. Space Complexity`:
   `https://cs.uwaterloo.ca/~eblais/cs365/w25/space`
5. Julian Panetta, `ECS 120 Theory of Computation: Asymptotic analysis (cont'd)
   and time complexity`:
   `https://www.cs.ucdavis.edu/~doty/ecs120slides/05c_Asymptotic_analysis-contd-TimeIntro-deck.html`

Two independent modern treatments back the scaffold in full: Watrous together
with Blais's Waterloo notes, and Arora-Barak's textbook. Panetta is used
narrowly for the reasonable-encoding formulation of the final invariance
proposition.

What each source is doing:

- Watrous is the focused source for worst-case running time, `DTIME`, and
  time-constructibility.
- Arora-Barak is the main source for robustness, constructibility conventions,
  universal simulation with logarithmic overhead, and the direct `DTIME ⊆
  SPACE` observation.
- Blais supplies the clean motivation for multitape complexity classes, the
  polynomial-robustness discussion, and the explicit time-space inclusion
  theorem.
- Panetta is used only for the reasonable-encoding slogan behind
  `prop-polynomially-related-encodings-preserve-polynomial-classes`; the
  quantitative simulation work stays on Watrous, Arora-Barak, and Blais.

Every source in `research/frontier-27-batch-10.coverage.json` carries an honest
manual `fetch_verified` receipt marked `verified_via: web-open`. I did not
invent byte-level stamps that the network-restricted shell could not obtain.

## Known limits and step-5 risks

- The repaired finite-sequence code in TC-15 must stay tied to the effective
  tuple encoding route. If step 5 silently switches to prime-power coding, the
  page will pick up undeclared arithmetic baggage.
- `prop-ackermann-is-total-computable-but-not-primitive-recursive` should keep
  the computability half constructive and machine-level. If step 5 only quotes
  "Ackermann is recursive" without giving the local route, the page will become
  source-backed but not dependency-closed.
- `thm-partial-recursive-iff-turing-computable` should preserve the distinction
  between an arithmetized computation history and a machine code. Collapsing
  those objects is exactly the design's stated proof trap.
- In TC-19, the quadratic one-tape slowdown and the `T log T` efficient
  universal simulation must remain separate items. Merging them would lose the
  page's quantitative structure.

## Step-5 authoring

Artifacts authored in this step:

- `library/computability-theory/primitive-recursive-and-partial-computable-functions.md`
- `library/computability-theory/primitive-recursive-and-partial-computable-functions-examples.md`
- `library/computability-theory/resource-bounds-and-machine-invariance.md`
- `library/computability-theory/resource-bounds-and-machine-invariance-examples.md`
- `research/frontier-27-batch-10.proof-contracts.json`

Authored item ids:

- TC-15 A page: `def-initial-arithmetic-functions`, `def-composition-and-primitive-recursion-schemes`, `def-primitive-recursive-function`, `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive`, `def-natural-number-coding-of-finite-sequences`, `thm-sequence-length-and-coordinate-functions-are-primitive-recursive`, `def-mu-minimization-and-partial-recursive-function`, `prop-ackermann-is-total-computable-but-not-primitive-recursive`, `lem-turing-step-coding-is-primitive-recursive`, `def-kleene-t-predicate-and-output-function`, `thm-kleene-normal-form`, `thm-partial-recursive-iff-turing-computable`, `def-lambda-term-beta-reduction-and-represented-function`, `thm-lambda-definable-iff-partial-recursive`, `fs-every-total-computable-function-is-primitive-recursive`, `fs-mu-minimization-is-always-total`
- TC-15 B page: `ex-sequence-length-and-coordinate-functions-are-primitive-recursive`, `ex-lambda-definable-iff-partial-recursive`, `cex-every-total-computable-function-is-primitive-recursive`
- TC-19 A page: `def-worst-case-time-and-space-complexity`, `def-asymptotic-resource-comparison`, `def-time-and-space-constructible-function`, `def-dtime-ntime-dspace-and-nspace`, `lem-time-at-least-input-length-permits-complete-input-reading`, `lem-time-bounds-imply-space-bounds`, `thm-multitape-to-single-tape-time-simulation`, `thm-multitape-to-single-tape-space-simulation`, `thm-universal-simulation-with-logarithmic-overhead`, `prop-polynomial-time-and-space-are-model-invariant`, `lem-clocked-machine-construction`, `prop-polynomially-related-encodings-preserve-polynomial-classes`, `fs-model-invariance-means-equal-step-counts`, `fs-time-bounds-never-need-constructibility`
- TC-19 B page: `ex-time-bounds-imply-space-bounds`, `ex-polynomially-related-encodings-preserve-polynomial-classes`, `cex-model-invariance-means-equal-step-counts`

Provenance rationale actually used:

- Definitions and the standard comparison theorems are tagged `literature-derived` at statement level because the page route follows the source-backed classical presentation in the batch coverage.
- Examples and counterexamples authored for the B pages are tagged `ai-generated` with the required `generation.role`, because they are new local witnesses built from already established page results.
- `prop-polynomially-related-encodings-preserve-polynomial-classes` is tagged `ai-altered` at statement level because I narrowed the raw slogan to the mathematically honest version with polynomial-time and polynomial-space translators on valid codes.

Narrowed or repaired claims:

- `prop-polynomially-related-encodings-preserve-polynomial-classes`: narrowed the statement to require polynomial-time and polynomial-space translators between valid codes in both directions. Polynomial length comparison alone is not enough to transfer complexity classes honestly.
- `thm-universal-simulation-with-logarithmic-overhead`: stated the `O(T log T)` result for a deterministic multitape universal simulator with the universal behavior from the earlier coding definition, rather than overclaiming that same bound for the one-tape universal machine definition.
- `def-natural-number-coding-of-finite-sequences` and `thm-sequence-length-and-coordinate-functions-are-primitive-recursive`: kept the scaffolded sequence-coding route on the binary tuple-encoding track recorded above, not a prime-power code that would import undeclared arithmetic dependencies.

Dropped claims: none.

Blockers: none in the authored batch files. The repo-wide `validate-plan` run still emits the standing out-of-batch `redundant-prereq` advisories already present elsewhere, but no batch-10-specific plan error.

Checks actually run on Monday, August 31, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts` on all 25 proof-bearing batch items
  - result after adopting canonical repairs: all 25 passed
- `node tools/regen-contract-entries.mjs research/frontier-27-batch-10.proof-contracts.json ...`
  - result: regenerated all 25 batch contract entries from on-disk item text
- `node tools/proof-contract.mjs research/frontier-27-batch-10.proof-contracts.json --strict`
  - result: `0 error(s), 0 warning(s), 25/25 item(s) checked`
- `node tools/content-policy.mjs research/frontier-27-batch-10.pages.json`
  - result: `36 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: passed for the batch changes; only the repo's standing out-of-batch `redundant-prereq` advisories remain
- `prop-polynomial-time-and-space-are-model-invariant` depends on a real
  logarithm-vs-polynomial estimate. If step 5 writes "clearly polynomial" with
  no inequality, it will undershoot the reason this page explicitly requires
  `the-logarithm-and-general-powers`.
- `prop-polynomially-related-encodings-preserve-polynomial-classes` should stay
  tied to the explicit polynomial-blowup statement recorded in coverage, not to
  a hand-wavy appeal to `reasonable` encodings.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-10.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-10.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-10.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-27-batch-10.coverage.json --out /tmp/frontier-27-batch-10-url-liveness.json --recover --fail-on-dead
git diff --check
```

Results are appended below after execution.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-10.coverage.json`
  passed on Monday, August 31, 2026:
  `coverage-checklist: 2 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  passed:
  `content-policy: 95 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Monday, August 31, 2026. The final verdict line was:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.`
  It also printed the repository's standing informational note that `699`
  planned pages still carry no item list, together with many out-of-batch
  `redundant-prereq` advisories unrelated to batch `10`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-10.coverage.json --stamp`
  passed:
  `source-fetch-check: 12/12 source(s) fetch-verified (0 newly stamped)`.
  This did not create local byte-level stamps; it accepted the already-written
  honest `verified_via: web-open` receipts.

- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-10.coverage.json`
  passed:
  `source-fetch-check: 12/12 source(s) fetch-verified`.

- `node tools/url-sweep.mjs --coverage research/frontier-27-batch-10.coverage.json --out /tmp/frontier-27-batch-10-url-liveness.json --recover --fail-on-dead`
  did not return in this runner. A first direct run hung without emitting
  stdout or creating `/tmp/frontier-27-batch-10-url-liveness.json`; I then
  reran it under `timeout 30s`, and that second run exited `124` after the
  timeout with the same behavior.

  This is evidence of an environment-level transport block, not of dead or
  mismatched source URLs:

  - all `12` recorded HTTP(S) source URLs had already been opened and checked in
    the web reader earlier on Monday, August 31, 2026,
  - both `source-fetch-check` commands accepted every recorded
    `fetch_verified` receipt, and
  - the sweep never reached the point of writing its report file, so it did not
    produce per-URL liveness verdicts to adjudicate.

  I therefore left the live reader-verified URLs in place and recorded the
  exact shell blocker here instead of re-sourcing good citations.

- `git diff --check`
  passed cleanly after the scaffold edits.

## Reharvest 1 -- Monday, August 31, 2026

I handled the lone batch-10 `work[]` row in
`research/frontier-27-reharvest-plan.json`:
`resource-bounds-and-machine-invariance` /
`prop-polynomially-related-encodings-preserve-polynomial-classes`.

### Dead/orphaned row and same-document check

- The orphaned harvested result was the Hartmanis-Stearns row
  `The investigation of how a change of representation affects complexity classes`
  at
  `https://www.researchgate.net/publication/242506038_On_the_Computational_Complexity_of_Algorithms`.
- I reopened that exact ResearchGate public full-text HTML URL in the web reader
  on Monday, August 31, 2026. The same-document URL is still live, so no
  alternate live URL or archive recovery was needed.
- Re-reading the cited span showed the real claim is narrower and different:
  the Introduction says the paper investigates how a change in the **abstract
  machine model** might affect complexity classes. That supports the historical
  machine-model seam, not polynomially related input encodings.
- I therefore kept Hartmanis-Stearns in coverage only for
  `def-worst-case-time-and-space-complexity` and
  `prop-polynomial-time-and-space-are-model-invariant`, and removed the
  misattributed encoding-invariance row.

### Replacement source and affected result

- Additional source read for this reharvest:
  Julian Panetta, *ECS 120 Theory of Computation: Asymptotic analysis (cont'd)
  and time complexity*,
  `https://www.cs.ucdavis.edu/~doty/ecs120slides/05c_Asymptotic_analysis-contd-TimeIntro-deck.html`.
- Verified locator: deck sections `Robustness of the definition of P` and
  `Invariance to "reasonable" input encodings`, HTML lines `147-160`, read in
  full.
- Replacement harvested result now recorded in coverage:
  `If the encoding blowup factors are polynomial both ways, each encoding yields the same definition of P`
  -> `prop-polynomially-related-encodings-preserve-polynomial-classes`.
- I also recorded the companion line
  `Any "reasonable" input encoding also does not change the class P`
  as inline support for the same item.

### Claim constraint

- No claim constraint changed. The proposition remains the design's
  polynomial-time / polynomial-space encoding-invariance claim.
- This reharvest only moves the **explicit** encoding-invariance evidence to a
  source that actually states it. The polynomial-space half still depends on
  the batch's existing route through
  `def-instance-size-under-an-encoding`,
  `prop-polynomially-related-encodings-preserve-polynomial-size`, and
  `lem-clocked-machine-construction`.

### Validation rerun

- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-10.coverage.json`
  passed:
  `coverage-checklist: 2 page(s), 66 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-backing.mjs --coverage research/frontier-27-batch-10.coverage.json --liveness research/frontier-27-url-liveness.json`
  passed:
  `source-backing: 21 authored result(s) across 1 file(s), every one still backed by an openable source`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-10.coverage.json --stamp`
  passed:
  `source-fetch-check: 13/13 source(s) fetch-verified (0 newly stamped)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-10.coverage.json`
  passed:
  `source-fetch-check: 13/13 source(s) fetch-verified`.
- `timeout 45s node tools/url-sweep.mjs --coverage research/frontier-27-batch-10.coverage.json --out /tmp/frontier-27-batch-10-url-liveness.reharvest-1-b10.json --recover --fail-on-dead`
  exited `124` without stdout and did not create the requested `/tmp` report
  file. In this runner that is still a transport-level blocker on fresh
  liveness regeneration, not evidence that the repaired sources are dead.
- `git diff --check -- research/frontier-27-batch-10.coverage.json research/frontier-27-batch-10.notes.md`
  passed cleanly after the reharvest edits.

## Step-3 fix pass

### Alpha review direct-repair section `Batch 10 — primitive-recursive-and-partial-computable-functions`

Finding id: none stated in `research/frontier-27-alpha-d-step3-scaffold-review.md`; I used the direct-repair subsection title as the stable finding handle for this receipt.

Disposition: accepted as already applied on current bytes. The TC-15 carrier trio was present in `research/frontier-27-batch-10.coverage.json`, so I did not splice new scaffold items or coverage carriers in this pass.

Evidence: the current coverage file still carries canonical `included` rows for `lem-turing-step-coding-is-primitive-recursive`, `fs-every-total-computable-function-is-primitive-recursive`, and `fs-mu-minimization-is-always-total`; `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-10.coverage.json` now reports `coverage-checklist: 2 page(s), 71 harvested result(s), 0 error(s), 0 warning(s)`.

Changed scaffold record: this notes file only.

### Alpha review direct-repair section `Batch 10 — resource-bounds-and-machine-invariance`

Finding id: none stated in `research/frontier-27-alpha-d-step3-scaffold-review.md`; I used the direct-repair subsection title as the stable finding handle for this receipt.

Disposition: accepted on the carrier side and repaired on the source-verification side. The six TC-19 canonical carriers were already present, so I left them unchanged; during this pass I repaired the TC-15 primary-source row to a live alternate full-text copy of the same Turing paper because the recorded Oxford facsimile URL timed out in the web reader.

Evidence: the current coverage file still carries canonical `included` rows for `def-asymptotic-resource-comparison`, `lem-time-at-least-input-length-permits-complete-input-reading`, `thm-multitape-to-single-tape-space-simulation`, `lem-clocked-machine-construction`, `fs-model-invariance-means-equal-step-counts`, and `fs-time-bounds-never-need-constructibility`; `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-10.coverage.json` reports `source-fetch-check: 12/12 source(s) fetch-verified`; and the live alternate Turing copy opened in the web reader at the appendix locator `Added 28 August, 1936. APPENDIX. Computabiliiy and effective calculability`, lines `1622-1665`.

Changed scaffold record: `research/frontier-27-batch-10.coverage.json` source row for Turing 1936, and this notes file.

### Validators rerun on Monday, August 31, 2026

- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-10.coverage.json`
  Result: `coverage-checklist: 2 page(s), 71 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  Result: `content-policy: 449 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: final verdict `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.` The command also emitted the standing note that `699` planned pages still carry no item list and the repository's usual out-of-batch `redundant-prereq` advisories.
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-10.coverage.json`
  Result: `source-fetch-check: 12/12 source(s) fetch-verified`.
