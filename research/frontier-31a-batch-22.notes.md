# frontier-31a batch 22 notes — beta scaffold

## Scope, design, and split decision

The current task owns `logarithmic-space-nl-and-reachability` (A, order 629)
and its B companion (order 630). I read both matching track locations:
`research/plan-computability-theory-track.md` lines 1055--1077 are the TC-25
A-page block, and line 1078 begins the immediately following B-page heading.
They are one contiguous design, not competing amendments; I treated that block
as controlling. The current `research/plan-spec.json` agrees on orders,
category, companion, and direct prerequisites
`space-complexity-savitch-and-tqbf` and `graphs-walks-and-connectivity`.
There is no design/spec drift to adjudicate here.

The design lists 17 A items. The scaffold has 18 because
`lem-polynomial-time-computations-have-logspace-uniform-circuits` is the
indispensable construction behind the Circuit Value hardness proof: asserting
that a P-machine has a polynomial circuit without proving a logspace emitter
would leave the reduction unsupported. This is a bridge lemma, not padding.
The B page has the specified three examples/counterexamples. Eighteen is below
the 60-item ceiling, so no split is needed.

## Conventions and dependency closure

- `def-dtime-ntime-dspace-and-nspace` supplies the multitape, all-branches
  halting convention and its all-tapes DSPACE/NSPACE meanings. The earlier,
  in-run `def-read-only-input-workspace-classes` (TC-24, order 627) separately
  defines `DWORKSPACE(s)` by charging only read/write work cells. This page
  uses that earlier interface for L and the Savitch conclusion; it does not
  rename the all-tapes class.
- STCON is directed reachability in an explicitly encoded finite digraph, with
  its source and target included in the input. A nondeterministic accepting
  computation may be shortened to a simple configuration path after the
  polynomial configuration bound is proved.
- A logspace many-one reduction is deterministic and produces a
  polynomial-length output by a write-only stream / bit-recomputation
  convention. Composition simulates the later transducer on a virtual first
  output tape; it never stores that output.
- The inductive count is $c_i=|C_i|$, where $C_i$ contains vertices reachable
  from the source by a directed walk of length at most $i$. The proof must
  certify only positive bounded paths and use a verified count to make the
  necessary negative conclusion.
- Circuit encodings are topologically ordered finite Boolean DAGs with a fixed
  finite gate basis and concrete input constants. Uniformity means that SIZE,
  TYPE, and predecessor/wire queries are answered by a deterministic logspace
  transducer. The Circuit Value reduction streams the circuit encoding.

Every item has an explicit `deps` array. All planned edges point to an earlier
same-page item or an item on one of the declared prerequisite pages; no A item
depends on the B page and no forward reference is planned. I opened the
published interfaces for the resource-class definition, Savitch's theorem, and
the directed-graph/path conventions. The central dependency choices are:

| Item(s) | Exact planned claim and proof route | Dependency rationale |
| --- | --- | --- |
| `def-read-only-input-logspace-machine`, `def-l-and-nl` | Define the model, then L and NL, with L identified with the earlier `DWORKSPACE(log n)` convention. | The earlier TC-24 interface makes the read-only-input work-space accounting explicit; the published resource definition remains the distinct all-tapes convention. |
| `lem-logspace-machines-have-polynomially-many-configurations` | Count control, input-head position, work contents, and work-head positions; remove loops from an accepting computation. | It is the finite-size bound needed by the STCON configuration graph. |
| `def-logspace-many-one-reduction`, `lem-logspace-reductions-compose` | Define bitwise polynomial-output reductions, then prove virtual-tape composition and L/NL closure. | The class definition is an explicit dependency of the closure claim. |
| `def-directed-st-connectivity`, `thm-directed-st-connectivity-is-nl-complete` | Define STCON, prove membership by bounded path guessing, and hardness by a logspace-emitted configuration graph. | Earlier graph language, the count lemma, L/NL, and reduction definition supply every used interface. |
| `thm-read-only-input-savitch-simulation`, `thm-nl-is-contained-in-dspace-log-squared-n` | Simulate a local NL machine by midpoint reachability, then conclude $mathrm{NL}\subseteq\mathrm{DWORKSPACE}(\log^2 n)$. | TC-24 defines the local deterministic target class; configuration counting and the local simulation supply the proof without importing the incompatible all-tapes Savitch theorem. |
| `def-inductive-reachable-vertex-count`, `lem-reachability-count-is-verifiable-in-nl`, `lem-nonreachability-has-an-inductive-counting-certificate` | Define $c_i$, verify claimed reachable counts, then induct over counts to certify nonreachability. | This is the positive-witness route needed before the complement theorem. |
| `thm-immerman-szelepcsenyi-nl-equals-conl`, `cor-nspace-is-closed-under-complement-above-logspace` | Obtain complement-STCON in NL, transfer through logspace reductions, state the general constructible-space form, then extract its corollary. | The theorem depends on the full STCON, virtual-input, and count-certificate spine. |
| `def-logspace-uniform-circuit-family`, `def-p-complete-under-logspace-reductions`, `lem-polynomial-time-computations-have-logspace-uniform-circuits`, `thm-circuit-value-is-p-complete` | Define uniform encodings and P-completeness; unroll local tableau updates into a logspace-uniform circuit; then prove Circuit Value membership and hardness. | The bridge lemma closes the exact reduction gap between a P-machine and an emitted circuit. |
| `fs-nl-equals-conl-follows-by-state-swapping` and the three B items | Refute terminal-state swapping by a mixed-branch tree; work virtual composition and circuit compilation concretely. | Each uses the immediately preceding A result, and B remains a leaf. |

## Sources read and harvest

The complete per-heading harvest, exact locators, dispositions, and source
verification records are in
`research/frontier-31a-batch-22.coverage.json`.

1. Sanjeev Arora and Boaz Barak, *Computational Complexity: A Modern
   Approach*, textbook, <https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf>.
   I opened the exact full 562-page PDF and read the source's table of
   contents, §3.1's read-only-input/work-tape accounting and constructibility
   remark, §3.2, §3.3.1, §3.4 with both subsections and Corollary 3.19, §6.1
   through Theorem 6.7, and §6.5.2 through Theorem 6.27. It supplies the
   primary treatment with a harvestable table of contents, the local space
   convention, Savitch recursion, virtual-tape argument, configuration graph
   encoding, counting proof, uniformity construction, and Circuit Value theorem.
2. Madhu Sudan and Yong Wook Kwon, *CS 221 Computational Complexity, Lecture
   5: Space and Nondeterminism*, lecture notes,
   <https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf>.
   I opened the exact complete five-page PDF and read pp. 1--3 through the
   inductive-counting conclusion. It independently treats PATH, Savitch's
   log-squared bound, $N_k$, and Lemmas 8--9 for NL=coNL.

Both live URLs were fetch-verified through the PDF reader on 2026-09-05. The
coverage's verification records deliberately claim no local byte hash: a
subsequent repository fetch-stamp attempt must either produce its normal
hash/byte stamp or preserve the documented terminal DNS failure without
falsifying the full-PDF verification.

## Known limits and next action

- Under the library's all-tapes definition, the local simulation gives
  $\mathrm{DSPACE}(n+\log^2 n)$ after charging the input; the retained sharp
  statement is $\mathrm{NL}\subseteq\mathrm{DWORKSPACE}(\log^2 n)$. Neither
  statement gives L=NL.
- Swapping nondeterministic terminal states recognizes an existentially
  rejecting branch, not the complement language. The inductive count proof
  must retain its soundness condition at every $i$.
- The general complement closure requires the exact space-constructibility
  and logarithmic lower-bound qualification. It may not be inferred from the
  NL-only title alone.
- Circuit Value hardness needs a logspace procedure for the full circuit
  encoding, not only a polynomial-size existence statement; the bridge lemma
  is therefore mandatory.

Next action: run the task validators, including source fetch stamping/liveness,
and record their exact outcomes here. No items or library pages are authored in
this scaffold step.

## Validation checkpoint

- `node tools/manifest-deps.mjs research/frontier-31a-batch-22.pages.json`:
  `21 item(s), 0 normalized, 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination
  research/frontier-31a-batch-22.coverage.json`: `1 page(s), 29 harvested
  result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only
  research/frontier-31a-batch-22.pages.json`: `21 scoped item(s), 0 error(s),
  0 warning(s)`.
- The manifest's 21 ids are unique and unused, and every declared dependency
  resolves either to an earlier planned item or to an existing item on disk.
- `node tools/validate-plan.mjs research/plan-spec.json` passes. Its advisory
  redundant-prerequisite warning for this page is pre-existing plan-level
  information; the task prohibits changing the plan structure.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-31a-batch-22.coverage.json` accepts the two full-PDF
  browser-verification records. A forced terminal fetch-stamp attempt on the
  exact URLs returned `EAI_AGAIN` for both hostnames, without replacing either
  source or harvest row. The exact PDFs remain independently fetch-verified in
  the web reader; the failure is this shell's DNS, not a failed source read.
- `node tools/url-sweep.mjs --coverage
  research/frontier-31a-batch-22.coverage.json --out
  /tmp/frontier-31a-batch-22-url-liveness.json --recover --fail-on-dead`
  likewise reports `0/2 live` only because `curl` cannot resolve either
  hostname; no archive was discoverable from that DNS-disabled probe. Its
  temporary report was not added to the repository. The source URLs were
  retained because the exact documents were opened successfully through the
  independent web fetcher.
- `git diff --check -- research/frontier-31a-batch-22.pages.json
  research/frontier-31a-batch-22.coverage.json
  research/frontier-31a-batch-22.notes.md`: clean.

The scaffold itself is ready for the later splice/authoring stages. A
network-enabled fetch-stamp rerun remains a mechanical follow-up, not a reason
to alter the verified source text, its locators, or this source-grounded scope.

## Step-3 fix pass

Finding `TC-25 / missing[0]` in
`research/frontier-31a-alpha-d-step3-verdicts.json` is **applied**. The
review correctly found that `thm-savitchs-theorem` is an all-tapes-NSPACE result
and cannot discharge a claim about the page's uncharged read-only-input,
work-tape NL model.

I re-read the exact primary source at
<https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf>: contents
pp. 4--6, §3.3.1 / Theorem 3.12 at PDF pp. 87--88 (printed pp. 72--73), and
§3.4.2 / Theorem 3.18 and Corollary 3.19 at PDF pp. 93--95 (printed pp.
78--80). The source's Savitch proof encodes configurations, bounds their
number by $2^{O(S(n))}$, and uses midpoint recursion in $O(S(n)^2)$ space;
its Corollary 3.19 requires a space-constructible $S(n)>\log n$. I also
re-read the independent Harvard Lecture 5, pp. 1--3, whose Theorem 3 gives the
log-squared-space PATH specialization and whose §3 gives the inductive-counting
route for NL=coNL. Both recorded HTTPS PDF URLs were opened as complete PDFs
in the source reader on 2026-09-05.

Changed scaffold records:

- `research/frontier-31a-batch-22.pages.json` adds
  `thm-read-only-input-savitch-simulation` immediately before
  `thm-nl-is-contained-in-dspace-log-squared-n`. Its explicit dependencies
  are `def-read-only-input-logspace-machine` and
  `lem-logspace-machines-have-polynomially-many-configurations`; the NL
  specialization now depends on that local theorem and no longer on
  `thm-savitchs-theorem`.
- The same manifest makes the general complement transfer explicit in the
  proof strategy for `thm-immerman-szelepcsenyi-nl-equals-conl` and names its
  corollary as a read-only-input, writable-work-space result. The qualification
  is: space-constructible $s(n)>\log n$, with the input-head position charged
  to the $O(s(n))$ configuration description but not to writable work space.
  No statement now silently identifies that local model with the prerequisite
  page's all-tapes `NSPACE`.
- `research/frontier-31a-batch-22.coverage.json` now records the complete
  §3.3.1 range and gives the source's `3.3.1 Savitch's theorem / Theorem 3.12`
  an `included` disposition carried by
  `thm-read-only-input-savitch-simulation`. The existing harvested Theorem
  3.18 and Corollary 3.19 continue to carry the NL=coNL and qualified
  complement-closure results respectively.

The A page now has 19 items and its B page still has 3, well below the
60-item split threshold. Every manifest item has an explicit `deps` array;
the new local theorem preserves backwards-only A-page dependency order, and
the B page remains a leaf. The required validator pass completes this Step-3
repair; no batch-owned authoring or plan changes are pending.

Validation outcomes:

- `node tools/manifest-deps.mjs research/frontier-31a-batch-22.pages.json`:
  `22 item(s), 0 normalized, 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination
  research/frontier-31a-batch-22.coverage.json`: `1 page(s), 30 harvested
  result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-31a-batch-22.coverage.json`: `2/2 source(s)
  fetch-verified`.
- `node tools/content-policy.mjs --manifest-only
  research/frontier-31a-batch-*.pages.json`: `906 scoped item(s), 0 error(s),
  0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed with the
  repository's pre-existing redundant-prerequisite advisories only; its final
  result reports no cycles, forward references, B-page dependencies, or
  unresolved ids.

## Scaffold-fix round

Finding `logarithmic-space-nl-and-reachability.missing[0]` from
`research/frontier-31a-scaffold-closure.json` is **applied**. The prior local
simulation was sound, but its dependent item still used the library's
all-tapes `DSPACE(\log^2 n)` label even though the input cells were deliberately
uncharged. That conclusion did not follow from
`def-dtime-ntime-dspace-and-nspace`.

I re-read the exact primary PDF at
<https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf>, now also
including §3.1, PDF pp. 78--79 (printed pp. 63--64): Definition 3.1 and
Figure 3.1 explicitly exclude nonblank cells on the read-only input tape from
the bound, while Remark 3.2 explains the $S(n)>\log n$ condition. I re-read
§3.3.1 / Theorem 3.12 at PDF pp. 87--88 (printed pp. 72--73), including its
configuration bound and midpoint recursion. The independent complete Harvard
Lecture 5 PDF at
<https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf>,
pp. 1--2, independently states the log-squared-space PATH specialization and
describes its input/memory-tape setup. Both exact HTTPS URLs were fetch-verified
through the PDF reader on 2026-09-05.

I did not mint a duplicate local-class definition: the earlier in-run A page
`time-and-space-hierarchy-theorems` (order 627) already scaffolds the unused,
unique `def-read-only-input-workspace-classes`, which defines
`DWORKSPACE(s)` with this convention. In-run dependencies are permitted and
the provider page precedes this page, so the repaired batch now depends on that
interface instead. This preserves the design's TC-25 item inventory while
making the convention a genuine dependency.

Changes in this batch:

- `def-l-and-nl` explicitly uses the TC-24 local interface and identifies L
  with `DWORKSPACE(\log n)`; `thm-read-only-input-savitch-simulation` and
  `thm-immerman-szelepcsenyi-nl-equals-conl` now also depend on it.
- `thm-nl-is-contained-in-dspace-log-squared-n` now has the exact claim
  `NL ⊆ DWORKSPACE(log-squared n)`. The stable planned ID remains unchanged;
  its title and proof strategy distinguish this valid local conclusion from
  the all-tapes consequence `DSPACE(n + log-squared n)`.
- The coverage locator now includes Arora--Barak §3.1, and its harvested
  Definition 3.1/Figure 3.1 and Remark 3.2 are concretely `inline` in the
  local-class and constructibility uses. No harvested result was removed.

The A page remains at 19 items and the B page at 3; no split is required. All
updated dependencies point to an earlier planned A-page item, and no item
depends on a B page. Validation outcomes follow this record.

- `node tools/manifest-deps.mjs research/frontier-31a-batch-22.pages.json`:
  `22 item(s), 0 normalized, 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination
  research/frontier-31a-batch-22.coverage.json`: `1 page(s), 32 harvested
  result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only
  research/frontier-31a-batch-*.pages.json`: `908 scoped item(s), 0 error(s),
  0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-31a-batch-22.coverage.json`: `2/2 source(s)
  fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed with the
  existing plan-level redundant-prerequisite advisories only; it reports no
  cycles, forward references, B-page dependencies, or unresolved item ids.

Final local check: both JSON artifacts parse; the repaired claim is exactly
`NL is contained in read-only-input DWORKSPACE(log-squared n)`, its local-class
dependency is present, the A/B counts are 19/3, and these three owned artifacts
have no trailing whitespace. There is no unresolved obligation in this batch's
closure finding. The next action is for the later authoring stage to materialize
the declared TC-24 interface before using this TC-25 result; no plan, item, or
library edit is part of this repair.

## Step-5 authoring

No batch-22 item or page was authored. The repository's live autopilot state,
checked with `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status
--repo .` on 2026-09-05, is `frontier-23`, not `frontier-31a`; its active
authoring batches do not include batch 22. More importantly, none of the 22
planned item files exists in `items/`, and the exact prerequisite
`def-read-only-input-workspace-classes` is also absent. It is only a generated
manifest entry in batch 21, not a resolvable dependency target. In particular,
the local `DWORKSPACE` interface required by `def-l-and-nl`,
`thm-read-only-input-savitch-simulation`,
`thm-nl-is-contained-in-dspace-log-squared-n`, and
`thm-immerman-szelepcsenyi-nl-equals-conl` cannot honestly be cited.

I did not substitute the incompatible published all-tapes `DSPACE`/`NSPACE`
interface, alter batch 21, create a recorded-not-proved fallback, or create an
empty proof-contract report that would falsely omit the batch's proof-bearing
items. The required output
`research/frontier-31a-batch-22.proof-contracts.json` consequently remains
absent.

Checks run, with their factual outcomes:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 22 explicit
  `items/ID.md` paths stopped at the first absent path,
  `items/def-read-only-input-logspace-machine.md` (`ENOENT`).
- `node tools/validate-plan.mjs` without an argument printed its required
  `plan-spec.json` usage; the task's literal command is not a valid invocation
  of the current tool. The valid current invocation,
  `node tools/validate-plan.mjs research/plan-spec.json`, passed: it reported
  an acyclic declared order with no item-level cycles, forward references,
  B-page dependencies, or unresolved ids among its 800 item-listed pages;
  its many redundant-prerequisite notices are plan-wide advisories.
- `node tools/content-policy.mjs research/frontier-31a-batch-22.pages.json`
  reported 22 scoped-item-missing errors, one for every planned item.
- `node tools/proof-contract.mjs
  research/frontier-31a-batch-22.proof-contracts.json --strict` reported that
  the required contract file is absent.

Blocker: resume this dispatch only after `frontier-31a` is the active run and
the preceding batch has materialized
`items/def-read-only-input-workspace-classes.md`; then re-read that exact
dependency statement and author the declared A/B items with their contracts.

### Recovery verification

On 2026-09-05 I rechecked the current workspace and the two exact coverage
sources. Arora--Barak §3.1 explicitly excludes the read-only input tape from
the charged cells, and §3.3.1 supplies the configuration-graph midpoint
simulation; the Harvard notes likewise separate the input, certificate, and
memory tapes. These sources support the planned local convention but cannot
make a planned item into a resolvable library dependency.

`items/def-read-only-input-workspace-classes.md` is still absent, although
batch 21's manifest declares it. Consequently the four declared dependencies
from this batch to that id remain unresolved:
`def-l-and-nl`, `thm-read-only-input-savitch-simulation`,
`thm-nl-is-contained-in-dspace-log-squared-n`, and
`thm-immerman-szelepcsenyi-nl-equals-conl`. No batch-22 item, page, or proof
contract was created, and no other batch was modified.

Focused checks rerun in this recovery verification:

- The required explicit-path `precheck` invocation stops with `ENOENT` at
  `items/def-read-only-input-logspace-machine.md` because the batch has no
  authored item files.
- Literal `node tools/validate-plan.mjs` exits with its required
  `plan-spec.json` usage. The valid current invocation with
  `research/plan-spec.json` exits 0 and reports no declared-order cycles,
  forward references, B-page dependencies, or unresolved IDs among pages with
  item lists.
- `content-policy` reports 22 `scope-item-missing` errors, one per planned
  batch item. Strict `proof-contract` reports its required output file absent.

Next action remains to materialize the exact batch-21 local-class definition;
only then can this batch be authored using resolvable dependencies and a
truthful proof-contract scope.

## Step-5 authoring

Authored all 22 declared ids, all with `status: draft`, and composed the two
draft pages at `library/computability-theory/logarithmic-space-nl-and-reachability.md`
and `library/computability-theory/logarithmic-space-nl-and-reachability-examples.md`.
The 19 A-page ids are `def-read-only-input-logspace-machine`, `def-l-and-nl`,
`lem-logspace-machines-have-polynomially-many-configurations`,
`def-logspace-many-one-reduction`, `lem-logspace-reductions-compose`,
`def-directed-st-connectivity`, `thm-directed-st-connectivity-is-nl-complete`,
`thm-read-only-input-savitch-simulation`,
`thm-nl-is-contained-in-dspace-log-squared-n`,
`def-inductive-reachable-vertex-count`,
`lem-reachability-count-is-verifiable-in-nl`,
`lem-nonreachability-has-an-inductive-counting-certificate`,
`thm-immerman-szelepcsenyi-nl-equals-conl`,
`cor-nspace-is-closed-under-complement-above-logspace`,
`def-logspace-uniform-circuit-family`,
`def-p-complete-under-logspace-reductions`,
`lem-polynomial-time-computations-have-logspace-uniform-circuits`,
`thm-circuit-value-is-p-complete`, and
`fs-nl-equals-conl-follows-by-state-swapping`; the B-page ids are
`ex-logspace-reductions-compose`, `ex-circuit-value-is-p-complete`, and
`cex-nl-equals-conl-follows-by-state-swapping`.

All statements are literature-derived from the two covered treatments and all
local proofs/verification/refutations are AI-generated; the seven definitions
correctly mark their proofs not-applicable. The recovered
`def-read-only-input-workspace-classes` is now a resolvable draft interface,
so the local Savitch conclusion is stated narrowly as
$\mathrm{NL}\subseteq\mathrm{DWORKSPACE}(\log^2(n+2))$. The qualified
general complement result is likewise expressed as read-only-input
`NWORKSPACE`, under work-space constructibility and the logarithmic address
floor. No claim of all-tapes $\mathrm{DSPACE}(\log^2 n)$ or of
$\mathrm L=\mathrm{NL}$ was made.

The controlling mathematical sources were re-opened at the coverage locators:
Arora--Barak §§3.1--3.4 and 6.1/6.5.2, and Harvard CS 221 Lecture 5 §§2--3.
The proof-contract report is
`research/frontier-31a-batch-22.proof-contracts.json`; it records exact
dependency quotations, step uses, and every boundary disposition for all 15
proof-bearing items.

The task/design prerequisite line names `space-complexity-savitch-and-tqbf`
and `graphs-walks-and-connectivity`, whereas the current plan specification
and batch manifest record `time-and-space-hierarchy-theorems`. This is a
design/spec disagreement. Per dispatch instruction I did not adjudicate or
edit either structure; the valid plan check used `research/plan-spec.json`,
and the authored item edges use only resolvable exact dependencies.

Focused validation results after canonical precheck numbering repairs:

- Explicit-path `node tools/tsx-run.mjs tools/precheck.mts` passed all 15
  proof-bearing items (`15 checked, 0 failing`); definitions are correctly
  `precheck: n/a`.
- `node tools/content-policy.mjs research/frontier-31a-batch-22.pages.json`:
  `22 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs
  research/frontier-31a-batch-22.proof-contracts.json --strict`:
  `15/15 item(s) checked`, with `0 error(s), 0 warning(s)`.
- Literal `node tools/validate-plan.mjs` remains a current-tool usage error
  because it requires an explicit plan path. The valid invocation
  `node tools/validate-plan.mjs research/plan-spec.json` passed: declared
  page order is acyclic, with no item-level cycles, forward references,
  B-page dependencies, or unresolved ids among listed pages; it emitted only
  repository-wide existing redundant-prerequisite advisories.

No claims were dropped. No authoring blocker remains for batch 22.
