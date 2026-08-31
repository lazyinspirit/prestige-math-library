# frontier-26 batch 11 notes - beta scaffold

Owned pair:

- `robust-machine-models-and-universal-computation` /
  `robust-machine-models-and-universal-computation-examples`

Artifacts written in this dispatch:

- `research/frontier-26-batch-11.pages.json`
- `research/frontier-26-batch-11.coverage.json`
- this file

Session date: Sunday, August 30, 2026.

## Design against spec

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`,
`research/frontier-26-beta-11.task.md`, `research/plan-spec.json`, and the
matched design references in
[research/plan-computability-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-computability-theory-track.md:508).

The two design matches are not competing amendments. Line `508` starts the full
`TC-10` design block for this page. Line `532` is the later `TC-11` prerequisite
line that names `robust-machine-models-and-universal-computation` as the page
that `decidable-recognizable-and-enumerable-languages` depends on. I therefore
treated the `TC-10` block at lines `508-530` as the controlling design text.

The controlling design block and the current spec agree on:

- page id
- companion page id
- page title
- order
- category
- declared prerequisite page

I recorded no design-vs-spec drift for this batch. The manifest follows the
spec's `requires` field exactly.

## Item census and split check

- A page `robust-machine-models-and-universal-computation`: `16` items
- B page `robust-machine-models-and-universal-computation-examples`: `3` items

No A page is close to the `60`-item split gate, so no split is needed.

## Route choices

The scaffold keeps the design's route and proof trap:

1. fix a concrete machine-coding convention before talking about universality;
2. normalize stay-put behavior before comparing tape conventions or multitape
   machines;
3. separate model-equivalence theorems from the one quantitative statement, so
   the quadratic bound stays local to its own lemma;
4. prove nondeterministic recognizability equivalence before moving to
   RAM/register equivalence and the Church-Turing discussion;
5. define the universal machine relative to the chosen coding, not as a coding-
   free slogan;
6. record the Church-Turing thesis as a definition plus a remark, not as a
   theorem.

Important choices:

- The machine encoding is a coding of the already-fixed deterministic one-tape
  model from page `597`. I did not define a universal machine for an unfixed
  "arbitrary machine description," because the interpreter lemma and the
  universal-machine theorem both need one concrete coding scheme.
- `thm-stay-put-moves-can-be-eliminated` is written as a general fixed-tape
  normalization theorem, not merely as a one-tape curiosity. That lets the
  later multitape simulation theorem absorb sources that allow stay-put head
  moves without changing the page's baseline library convention.
- `thm-one-way-and-two-way-tapes-are-equivalent` is about computational power,
  not complexity preservation. The only time statement on the page is the
  explicit quadratic-overhead lemma for the standard multitape-to-one-tape
  simulation.
- `thm-nondeterministic-and-deterministic-recognizability-agree` is kept at the
  recognizability level. I did not import any later complexity interpretation
  of nondeterminism.
- `def-random-access-and-register-machine-programs` is intentionally about
  unbounded natural-number memory and finite instruction lists. It does not
  smuggle in unit-cost complexity claims, because this page is about
  computability robustness rather than machine-cost models.
- `def-church-turing-thesis` and
  `rem-model-equivalence-supports-but-does-not-prove-the-thesis` stay honest
  about the seam between formal equivalence theorems and the informal notion of
  "effective procedure." The page supports the thesis with equivalence
  evidence; it does not prove the thesis.
- `fs-universality-decides-halting` is refuted by a direct looping-machine
  counterexample, not by a full halting-problem diagonal argument. The
  undecidability theorem belongs later.

## Conventions and dependency notes

- **Machine/code/computation/function separation.** I kept the design's trap
  explicit: machines, their codes, their configurations, their computations,
  and the partial functions or languages they induce are distinct objects. That
  is why the page needs both the coding items and the universal-machine items.
- **Chosen coding convention.** The coding is fixed at the page level and is
  used uniformly in the interpreter lemma, the universal-machine definition,
  the existence theorem, and the machine-enumeration corollary.
- **Universality is relative to coding.** I did not define a universal machine
  "for all descriptions at once." The definition and theorem both stay relative
  to `def-effective-encoding-of-turing-machines`.
- **Enumerators deferred.** Sipser's enumerator theorem is real source content,
  but it is the exact front door to the next page
  `decidable-recognizable-and-enumerable-languages`, so the coverage harvest
  defers it there rather than collapsing the page boundary now.
- **No extra page prerequisite introduced.** The new page depends only on page
  `597` at the plan level. The remaining named item dependencies are older
  fundamentals already upstream of that page and do not create a new local
  design-vs-spec closure issue of the kind batch 11 had in run `frontier-25`.

## Source set actually read

I read and verified these live sources in the web reader on Sunday,
August 30, 2026:

1. A. M. Turing, *On Computable Numbers, with an Application to the
   Entscheidungsproblem*, Oxford-hosted facsimile:
   `https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf`
2. Richard Zach, *Sets, Logic, Computation: An Open Introduction to
   Metalogic*:
   `https://slc.openlogicproject.org/slc-screen.pdf`
3. Michael Sipser, MIT 18.404J lecture notes, Lecture 6:
   `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/7405f6112c8ca7242e1edd9a021c1e63_MIT18_404f20_lec6.pdf`
4. Jean Gallier and Jocelyn Quaintance, *Notes on Formal Languages, Automata,
   Computability, and Complexity*, live HTML rendering:
   `https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html`
5. Charles Brubaker and Lance Fortnow, Udacity lesson notes
   `Church-Turing Thesis`:
   `https://s3.amazonaws.com/content.udacity-data.com/courses/gt-cs6505/churchturing.html`

Two independent modern treatments back the scaffold in full: Open Logic's
textbook treatment and the Gallier/Quaintance notes, with Sipser and the
Udacity lesson supplying the machine-variant and RAM-simulation details. Turing
1936 is the required primary treatment.

What each source is doing in the scaffold:

- Turing supplies the primary-source case for the universal machine, the
  complete-configuration point of view, and the historical justification seam
  behind the Church-Turing thesis.
- Open Logic supplies the clean index/decoding route for machine descriptions,
  the theorem-level universal-machine statement, and the explicit textbook
  Church-Turing definition.
- Sipser supplies the modern variant-equivalence statements for multitape and
  nondeterministic recognizability and clean notation for encodings.
- Gallier/Quaintance supply the RAM-to-Turing and Turing-to-RAM equivalence
  theorems, plus the stored-program viewpoint via universal RAM programs.
- Udacity supplies the explicit stay-put elimination macro, the two-way tape
  and RAM equivalence discussion, and the multitape-simulation overhead seam.

Every source in `research/frontier-26-batch-11.coverage.json` now carries an
honest manual `fetch_verified` receipt marked `verified_via: web-open`. I did
not fabricate byte counts or hashes that the network-restricted shell could not
obtain.

## Known limits and step-5 risks

- `lem-multitape-simulation-has-quadratic-time-overhead` must stay tied to the
  standard block-and-marker simulation. A stronger asymptotic claim would
  require a different simulator and different source support.
- `thm-nondeterministic-and-deterministic-recognizability-agree` should be
  authored as a recognizability theorem via deterministic exploration of the
  computation tree. It should not drift into complexity language.
- `def-random-access-and-register-machine-programs` needs one precise model
  family at authoring time. If step 5 mixes several RAM conventions without
  fixing one syntax, `thm-ram-register-and-turing-computability-agree` will
  become under-specified.
- `thm-existence-of-a-universal-turing-machine` depends on the chosen coding.
  If the coding changes after the interpreter lemma is written, the universal-
  machine proof will have to be rewritten, not patched.
- `fs-universality-decides-halting` should be kept weaker than the full halting
  problem. The refutation only needs one divergent machine/input pair.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-11.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-11.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-11.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-26-batch-11.coverage.json --out /tmp/frontier-26-batch-11-url-liveness.json --recover --fail-on-dead
git diff --check
```

Results are appended below after execution.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-11.coverage.json`
  passed on Sunday, August 30, 2026:
  `coverage-checklist: 1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  passed:
  `content-policy: 132 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Sunday, August 30, 2026. The final verdict line was:
  `OK - declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.`
  It also printed the standard informational note that `727` planned pages still
  carry no item list.

- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-11.coverage.json --stamp`
  passed:
  `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`.
  This did not create local byte-level stamps; it accepted the already-written
  honest `verified_via: web-open` receipts.

- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-11.coverage.json`
  passed:
  `source-fetch-check: 5/5 source(s) fetch-verified`.

- `node tools/url-sweep.mjs --coverage research/frontier-26-batch-11.coverage.json --out /tmp/frontier-26-batch-11-url-liveness.json --recover --fail-on-dead`
  failed uniformly in this runner:
  `url-sweep: 0/5 live; 5 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-26-batch-11-url-liveness.json`.
  Each row failed with the same transport error `curl: (6) Could not resolve host`
  on `dokumen.pub`, `ocw.mit.edu`, `s3.amazonaws.com`,
  `slc.openlogicproject.org`, and `www.cs.ox.ac.uk`. Because every cited source
  was independently opened in the web reader earlier on Sunday, August 30, 2026,
  this is evidence of the shell's DNS restriction, not evidence that any one of
  the recorded URLs is dead or mismatched. I therefore did not replace live
  reader-verified citations with different sources merely to satisfy a transport-
  blocked shell gate.

- `git diff --check`
  passed cleanly after the scaffold edits.

## Step-3 fix pass

Run date for this pass: Sunday, August 30, 2026. The governing alpha review is
`research/frontier-26-alpha-d-step3-scaffold-review.md`.

| finding id | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| none assigned for batch `11` | batch `11` stands on current bytes; no page or coverage repair required | The alpha review table marks `robust-machine-models-and-universal-computation` (batch `11`) as `sufficient`, and the batch-11 page review says the TC-10 route, the primary/textbook/note source stack, and the three deferrals to `decidable-recognizable-and-enumerable-languages` all close on current bytes. | `research/frontier-26-batch-11.notes.md` |
| `D10-1` | explicit pushback as out-of-scope for batch `11`; no local repair permitted | The only numbered alpha finding targets `context-free-pumping-ogden-and-parsing` in batch `10`, and the same review states that the only live defect in group `d` is that batch-10 source-sufficiency gap. Editing `research/frontier-26-batch-11.pages.json` or `research/frontier-26-batch-11.coverage.json` to answer `D10-1` would violate this dispatch's batch-only scope. | `research/frontier-26-batch-11.notes.md` |

Source verification for this fix pass on Sunday, August 30, 2026:

- I re-opened all `5` recorded batch-11 HTTP(S) source URLs in the web reader
  and checked them against the stored locators in
  `research/frontier-26-batch-11.coverage.json`: the Oxford facsimile of
  Turing 1936, the Open Logic textbook PDF, the MIT Lecture 6 PDF, the
  Gallier/Quaintance HTML notes, and the Udacity Church-Turing lesson notes.
- The recorded locators and harvested sections still match those live source
  texts, including Turing's sections `1`, `2`, `6`, `7`, and `9`; Open Logic's
  Definition `14.22`, Definition `15.2`, and Theorem `15.3`; Sipser's
  multitape and nondeterministic recognizability statements; Gallier's Theorems
  `8.2` and `8.3` plus Proposition `9.5`; and Udacity's multitape simulation
  and RAM-equivalence sections.
- No URL recovery, archive substitution, or re-sourcing was needed.

Validator rerun for this fix pass on Sunday, August 30, 2026:

## Step-5 authoring

Run date for this authoring pass: Monday, August 31, 2026 (AEST).

Artifacts authored in batch `11`:

- Pages:
  - `library/computability-theory/robust-machine-models-and-universal-computation.md`
  - `library/computability-theory/robust-machine-models-and-universal-computation-examples.md`
- A-page items:
  - `def-effective-encoding-of-turing-machines`
  - `lem-machine-encoding-is-injective-and-decodable`
  - `thm-stay-put-moves-can-be-eliminated`
  - `thm-one-way-and-two-way-tapes-are-equivalent`
  - `thm-multitape-machines-have-one-tape-simulations`
  - `lem-multitape-simulation-has-quadratic-time-overhead`
  - `thm-nondeterministic-and-deterministic-recognizability-agree`
  - `def-random-access-and-register-machine-programs`
  - `thm-ram-register-and-turing-computability-agree`
  - `def-universal-turing-machine`
  - `lem-step-by-step-interpreter-for-machine-codes`
  - `thm-existence-of-a-universal-turing-machine`
  - `cor-effective-enumeration-of-turing-machines`
  - `def-church-turing-thesis`
  - `rem-model-equivalence-supports-but-does-not-prove-the-thesis`
  - `fs-universality-decides-halting`
- B-page items:
  - `ex-stay-put-moves-can-be-eliminated`
  - `ex-effective-enumeration-of-turing-machines`
  - `cex-universality-decides-halting`
- Contract output:
  - `research/frontier-26-batch-11.proof-contracts.json`

Provenance rationale used:

- Source-defined model and thesis items were kept `literature-derived` where the
  statement is a standard sourced definition or theorem form:
  `def-effective-encoding-of-turing-machines`,
  `lem-machine-encoding-is-injective-and-decodable`,
  `thm-one-way-and-two-way-tapes-are-equivalent`,
  `thm-multitape-machines-have-one-tape-simulations`,
  `thm-nondeterministic-and-deterministic-recognizability-agree`,
  `thm-ram-register-and-turing-computability-agree`,
  `def-universal-turing-machine`,
  `thm-existence-of-a-universal-turing-machine`,
  and `def-church-turing-thesis`.
- Page-local formulations or decompositions that sharpened a standard source
  route without claiming a new dependency target were tagged `ai-altered` for
  the statement:
  `thm-stay-put-moves-can-be-eliminated`,
  `lem-multitape-simulation-has-quadratic-time-overhead`,
  `def-random-access-and-register-machine-programs`,
  `lem-step-by-step-interpreter-for-machine-codes`,
  `cor-effective-enumeration-of-turing-machines`,
  `rem-model-equivalence-supports-but-does-not-prove-the-thesis`,
  and `fs-universality-decides-halting`.
- The three B-page witness items are genuinely local examples/counterexamples,
  so they were tagged `ai-generated` with the required `generation.role`
  records and were not used as dependency targets.
- Every authored proof-bearing item remains `status: draft`, carries no
  `verification.judge`, and now has a matching proof-contract entry in
  `research/frontier-26-batch-11.proof-contracts.json`.

Narrowed or dropped claims:

- No planned item was dropped.
- I kept `thm-multitape-machines-have-one-tape-simulations` at deterministic
  fixed multitape machines, matching the dependency route already planned for
  recognizability and partial-function transfer.
- I kept `lem-multitape-simulation-has-quadratic-time-overhead` tied to the
  standard block-and-marker simulator and stated the bound as
  $O((|w|+t)^2)$ for a fixed source machine, rather than widening it to other
  simulators or complexity models.
- I kept `fs-universality-decides-halting` at the intended weaker seam:
  universality does not by itself yield a halting decider. I did not import the
  later diagonal undecidability theorem.

Canonical precheck repair applied before rerun:

- I adopted the exact phase-order repairs requested by `tools/precheck.mts` in
  six proofs:
  `lem-machine-encoding-is-injective-and-decodable`,
  `thm-one-way-and-two-way-tapes-are-equivalent`,
  `thm-multitape-machines-have-one-tape-simulations`,
  `thm-nondeterministic-and-deterministic-recognizability-agree`,
  `thm-ram-register-and-turing-computability-agree`,
  and `lem-step-by-step-interpreter-for-machine-codes`.
- After creating the proof-contract file, I also converted the batch-11 `deps`
  frontmatter to flow-style YAML lists so `tools/proof-contract.mjs` could read
  the declared dependencies it audits. This was a parser-compatibility repair,
  not a mathematical change.

Checks run on Monday, August 31, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts items/def-effective-encoding-of-turing-machines.md items/lem-machine-encoding-is-injective-and-decodable.md items/thm-stay-put-moves-can-be-eliminated.md items/thm-one-way-and-two-way-tapes-are-equivalent.md items/thm-multitape-machines-have-one-tape-simulations.md items/lem-multitape-simulation-has-quadratic-time-overhead.md items/thm-nondeterministic-and-deterministic-recognizability-agree.md items/def-random-access-and-register-machine-programs.md items/thm-ram-register-and-turing-computability-agree.md items/def-universal-turing-machine.md items/lem-step-by-step-interpreter-for-machine-codes.md items/thm-existence-of-a-universal-turing-machine.md items/cor-effective-enumeration-of-turing-machines.md items/def-church-turing-thesis.md items/rem-model-equivalence-supports-but-does-not-prove-the-thesis.md items/fs-universality-decides-halting.md items/ex-stay-put-moves-can-be-eliminated.md items/ex-effective-enumeration-of-turing-machines.md items/cex-universality-decides-halting.md`
  final rerun passed:
  `14 checked, 0 failing — all clean`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  passed with final verdict:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.`
- `node tools/content-policy.mjs research/frontier-26-batch-11.pages.json`
  passed:
  `content-policy: 19 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/regen-contract-entries.mjs research/frontier-26-batch-11.proof-contracts.json ...`
  passed:
  `research/frontier-26-batch-11.proof-contracts.json: regenerated 14, skipped 0`.
- `node tools/proof-contract.mjs research/frontier-26-batch-11.proof-contracts.json --strict`
  passed:
  `proof-contract: 0 error(s), 0 warning(s), 14/14 item(s) checked`.
- `git diff --check -- ...batch-11 authored files...`
  passed with no output.

Blockers:

- None in batch `11` after the authoring and validator reruns.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-11.coverage.json`
  -> `coverage-checklist: 1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  -> `content-policy: 441 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-11.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing note that `727` planned pages
     still carry no item list and no batch-11 cycle, forward-reference,
     B-page-dependency, or unresolved-id failure on current bytes
