# Wave 3 topology Audit-Beta findings

## Context-continuity checkpoint

- **Substage:** A1/A2 evidence collection; mathematical reading is complete and dependency-source verification is in progress.
- **Artifacts:** this findings file has been opened; the provenance ledger and proof-contract artifact have not yet been emitted.
- **Completed checks:** all 36 in-scope item files and both published page files were read in full; all 53 cross-batch dependency edges were enumerated; all 20 wave-3 targets and all 33 later-wave targets were read at their current on-disk text; every scoped proof/refutation/verification was read; the connectedness convention traps (empty space and singletons, connected/path-connected/totally disconnected, ambient versus subspace clopen sets, components versus quasi-components) were checked against the mathematical text. One definite missing load-bearing dependency has been isolated in the convex-subsets example, and citation-step precision issues in the zigzag proof are under final classification. No repair has been applied.
- **Constraints preserved:** only the three authorized wave-3 topology audit artifacts may be written; no item or page file has been modified; no shared git-state command has been run.
- **Exact next action:** finish inspecting the source clauses of the remaining earlier-wave dependency targets, determine the exact proof-bearing set under the repository contract, verify candidate source URLs through model-side web access, then write and mechanically validate all 36 provenance rows, the complete proof contracts, the classed proposals, and the final coverage statement.

## A1 result

The itemized determination is `research/audit/wave3-topology.provenance.jsonl`.
It has exactly one row for each of the 36 manifest items and no extra row.

| component | determination | count |
| --- | --- | ---: |
| statement | `ai-altered` with `semantic-source` evidence | 36 |
| proof | `ai-altered` | 17 |
| proof | `ai-generated` | 12 |
| proof | `not-applicable` | 7 |

No statement received `ai-generated`, `literature-derived`, or an
`established-knowledge` waiver. The constructions and formulations are all
recoverable semantic restatements of established topology; none supplied the
positive evidence of genuine novelty required for an `ai-generated` statement.
Proof provenance was determined independently: a proof was `ai-altered` when
the located source supplied its argument in substance and `ai-generated` when
the library's local decomposition was its own checkable derivation.

The ledger contains 65 URL occurrences, 21 distinct URLs. Every distinct URL
recorded there was successfully retrieved through the model-side web route and
returned HTTP 200. This was the verification route actually used; no negative
inference was made from shell DNS, and the unavailable MIT personal-page URL
encountered during search was excluded rather than recorded.

## A2 result and contract coverage

The manifest contains 29 proof-bearing items: 16 proofs, five refutations, five
verifications, and three counterexamples. The A0 figure of 26 omits exactly the
three files whose proof section is headed `Counterexample`; D1 and the contract
definition expressly include counterexamples. The proof-contract scope is
therefore 29, not 26. The A0 batch count should be regenerated with all four
section markers; this is an orchestrator-record correction, not a library-item
repair.

`research/audit/wave3-topology.proof-contracts.json` is valid JSON and contains:

- 29 scoped ids and 29 contracts;
- 217 derivation entries, one for each numbered proof/refutation/verification/
  counterexample step;
- 345 direct fact-source citation entries with exact on-disk source clauses;
- 232 boundary dispositions, exactly the eight required cases for each item;
- 29 `pending_alpha` risk reviews. `risk-report.mjs` routes all 29 items to an
  independent Alpha proof-refuter (22 critical and seven high risk).

`finite-smoke.mjs` passes with zero applicable finite checks. The strict
proof-contract gate checks all 29 items and reports eight errors, all caused by
five fact labels that are cited only in Remarks and by no numbered proof step.
Those errors are deliberately preserved in the faithful A2 contract and are
the subject of proposal B3 below; there are no missing contracts, missing
numbered steps, quote mismatches, or boundary errors.

## A3 repair proposals — not applied

### B1 — class (b), missing load-bearing dependency and source link

**Item:** `ex-convex-subsets-of-rn-are-path-connected`.

Fact A5 and step 1.2 use absolute homogeneity and the triangle inequality for
the published $\ell^1$, Euclidean, and maximum functions. The item cites
`def-p-norms-on-rn`, but that definition says expressly that normhood and the
identification of the induced metrics are proved in
`lem-p-norms-are-norms-and-induce-the-published-metrics` and "are not assumed
here." The latter id is absent from the item's `deps` and from A5. The
mathematical conclusion is true; the licensing chain is incomplete.

**Proposed smallest A4 repair:** add
`lem-p-norms-are-norms-and-induce-the-published-metrics` to `deps` and cite it
in claim 2 and A5 alongside the definitions. Do not alter the statement or the
derivation.

### B2 — class (b), wrong step and omitted inputs

**Item:** `lem-the-oscillating-zigzag-curve`, step 6.3.

The step says that $\pi_0[V]$ is connected "by [A4] and step 3.1." Step 3.1
establishes continuity of the graph map $g$ and does not license continuity of
$\pi_0|_V$. The relevant facts are A3 (the projections are continuous), A2
(restrictions of continuous maps are continuous), and A4 (a continuous real
image of a connected space is order-convex). The terminal input tag likewise
omits A2 and A3.

**Proposed smallest A4 repair:** replace the prose attribution to step 3.1 with
`[A2, A3, A4]`, and change the terminal tag to
`[step 5.2, step 1.5, step 4.3, A2, A3, A4]`. No mathematical claim changes.

### B3 — class (b), five proof-fact entries used only by Remarks

The following facts have no using numbered proof step, producing the eight
strict `citation-uses` errors (some facts have two direct sources):

| item | unused fact | direct source entries |
| --- | --- | ---: |
| `fs-a-connected-space-is-path-connected` | L3 | 1 |
| `fs-the-closure-of-a-path-connected-set-is-path-connected` | L3 | 2 |
| `fs-a-connected-space-is-locally-connected` | L3 | 2 |
| `fs-an-intersection-of-connected-sets-is-connected` | A6 | 2 |
| `ex-the-oscillating-zigzag-curve-computed` | A6 | 1 |

Each label appears only in a Remark. Adding an artificial proof use would
misstate the derivation.

**Proposed smallest A4 repair:** remove each last, unused entry from `Facts &
Assumptions` and replace its Remark-level `[L3]` or `[A6]` occurrence with the
same direct wikilink(s). This preserves every mathematical assertion and its
reader-visible source while restoring the proof-fact contract. Refresh the
contracts after the approved edit.

### C1 — class (c), bulk provenance retag

**Items:** all 36 ids in the manifest, individually enumerated in the provenance
ledger.

All are fully untagged legacy items. On A3 approval, add the exact statement and
proof labels from each ledger row and merge the row's verified URLs into
`sources.references`, preserving existing references. This is one bulk
pure-retag pass. No mathematical text, dependency, verification record, or
page-order change is proposed under C1.

There is no class (a) falsehood and no class (d) debatable-restatement proposal
for an in-scope topology item.

## Cross-batch published-claim decay noticed in passing

`ex-the-long-line-in-the-connectedness-hierarchy` uses the correct core clause
of `def-cofinal-subset-of-an-ordinal`: for every $x$ there is a member of the
subset at least $x$. Its proof independently supplies a strict upper bound, so
the topology item is sound.

The current target text nevertheless contains an external class-(a) defect:
after correctly defining noncofinality by a **strict** upper bound, it calls
this equivalent to the existence of $\xi\in\alpha$ satisfying
$\eta\le\xi$ for all $\eta\in C$. At a successor
$\alpha=\delta+1$, the set $C=\{\delta\}$ is cofinal but satisfies the latter
condition with $\xi=\delta$. This belongs to the concurrent foundations batch,
not to a topology A4 edit, and is escalated to the orchestrator/Alpha for that
batch.

## Triage and convention audit

- The opening sentence of `lem-the-oscillating-zigzag-curve` step 1.1 says
  "$f$ is continuous" before that step proves only the two-piece local
  restrictions; step 2.1 immediately completes global continuity using the
  open-cover clause. The closure is explicit and local in under 30 seconds, so
  the binding triage rule treats this as nonfatal and no repair is proposed.
- The empty space is intentionally connected under this library's definition,
  and every singleton is connected. The source record notes the competing
  empty-space convention rather than silently mixing it in.
- Every use of "clopen" was checked in its actual ambient or subspace topology.
  Connected, path-connected, locally connected, locally path-connected, and
  totally disconnected were not conflated.
- Component and quasicomponent inclusions, and the example where they differ,
  use the library's stated definitions in the correct direction.
- The other 52 cross-batch edges are semantically licensed by their current
  targets. Missing provenance on a concurrent or later target was not charged
  as a defect of a topology item.

## Explicit coverage statement

Every mathematical-content item in the 36-item manifest was read in full,
including both page summaries and all Remarks. Every numbered step in all 29
proof-bearing items was read and mapped exactly once. Every dependency citation
in all 36 items was read against the current target text. This includes all 53
cross-batch edges: all 20 wave-3 targets and all 33 not-yet-audited later-wave
targets (18 in `monotone-sequences-and-cauchy-completeness`, 12 in
`topology-of-r`, two in `rn-as-a-normed-space`, and one in
`sequences-and-limits`). There is no coverage exception.

At the close of A2, no A4 repair, item edit, page edit, or shared git-state
operation had been performed.

## A4 continuity checkpoint — 2026-08-04

The binding A3 adjudication has now been applied on disk. All 36 manifest items
carry the individually approved class-(c) provenance labels and reader-visible
references from `wave3-topology.provenance.jsonl`; no legacy `authorship` field
was present. The approved class-(b) repairs B1, B2 and B3 are also applied to
their seven items. Because those seven edits change text visible to a judge,
their stale pre-repair `verification.verified` and `verification.judge` records
were removed; `verification.precheck: pass` remains, and no replacement audit
certification was written by Beta. No `audited` key existed on those items.

The merged proof contract has been updated for B1's added A5 citation, B2's
correct A2/A3/A4 use at step 6.3, and removal of the five Remark-only Facts.
It parses as JSON. Required formatter, precheck, strict-contract and repository
gates remain to be run. No `touchlog snap` command has been run.

The required A4 URL recheck could not confirm the WVU `node-9.html` page: both
HTTPS and HTTP attempts timed out. The sibling `node-11.html` page did resolve
and remains in the three applicable local-connectedness source records.
`node-9.html` was replaced, before being written to an item, by John C. Mayer's
retrievable UAB *Components* notes (`https://people.cas.uab.edu/~jcmayer/Components.pdf`),
whose Proposition 3.9 states that every quasicomponent is a union of components.

## A4 applied-repair record

The binding authority for every edit below is `research/audit/wave3-A3.md`.
Nothing declined there was applied.

### B1 — class (b), licensing dependency and citation added

**Item:** `ex-convex-subsets-of-rn-are-path-connected`.

- **Old frontmatter:** `deps` contained `def-p-norms-on-rn` but omitted
  `lem-p-norms-are-norms-and-induce-the-published-metrics`.
- **New frontmatter:** the lemma id is present immediately after
  `def-p-norms-on-rn`; no other dependency was changed.
- **Old A5 citation tail:**
  `[[def-norm-and-normed-space]], [[def-p-norms-on-rn]], [[def-metric-ball]], [[lem-metrics-on-rn]]`.
- **New A5 citation tail:**
  `[[def-norm-and-normed-space]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-metric-ball]], [[lem-metrics-on-rn]]`.

The source is the dependency text on disk. `def-p-norms-on-rn` says normhood
and identification with the published metrics are proved in that lemma and are
“not assumed here”; the cited lemma's Statement proves normhood for
$\lVert\cdot\rVert_p$ and $\lVert\cdot\rVert_\infty$ and gives the exact
$d_1,d_2,d_\infty$ dictionary. The Statement and straight-line derivation of
the repaired item were not changed.

### B2 — class (b), wrong step attribution replaced

**Item:** `lem-the-oscillating-zigzag-curve`, step 6.3.

- **Old text:** “$\pi_0[V]$ is a connected subset of $\mathbb{R}$ by [A4] and
  step 3.1”; terminal tag
  `[step 5.2, step 1.5, step 4.3, A4]`.
- **New text:** “$\pi_0[V]$ is a connected subset of $\mathbb{R}$ by
  [A2, A3, A4]”; terminal tag
  `[step 5.2, step 1.5, step 4.3, A2, A3, A4]`.

The written-out licensing chain is: A3 makes the product projection $\pi_0$
continuous; A2 makes its restriction to the connected subspace $V$
continuous; A4 makes the real image $\pi_0[V]$ connected and hence
order-convex. Step 3.1 proves continuity of $g$, not of $\pi_0|_V$, so it was
removed from this attribution. The claim itself and the rest of its derivation
were not changed.

### B3 — class (b), five Remark-only Facts removed

No numbered proof step used any of these Facts. Each Fact paragraph was deleted
and only its Remark-level tag was replaced by its existing direct dependency
link(s):

| item | old Fact and old Remark tag | new Remark text source |
|---|---|---|
| `fs-a-connected-space-is-path-connected` | L3: “Every path-connected space is connected”; `[L3]` | `[[thm-path-connected-implies-connected]]` |
| `fs-the-closure-of-a-path-connected-set-is-path-connected` | L3: connectedness is preserved between $A$ and $\overline A$; `[L3]` | `[[thm-closure-of-a-connected-set]]`, with `[[def-connected-space]]` |
| `fs-a-connected-space-is-locally-connected` | L3: local connectedness iff components of open subspaces are open, with the clopen consequence; `[L3]` | `[[thm-locally-connected-iff-components-of-open-sets-are-open]]` and `[[def-connected-component-and-quasicomponent]]` |
| `fs-an-intersection-of-connected-sets-is-connected` | A6: path-connected sets are connected; `[A6]` | `[[thm-path-connected-implies-connected]]` and `[[def-path-connected]]` |
| `ex-the-oscillating-zigzag-curve-computed` | A6: closure of a connected set is connected; `[A6]` | `[[thm-closure-of-a-connected-set]]` |

This is citation cleanup, not a new proof use. The five refutations/verifications
are otherwise unchanged.

### C1 — class (c), all 36 individual provenance decisions applied

The old state was the same for every row: no two-axis `provenance` block, no
legacy `authorship` field, and only the pre-existing reference list. The new
state is the exact two-axis decision below, with every missing URL from the
corresponding evidence row merged into `sources.references`. Existing
references, ids, ordering, Statements and proofs were preserved except for the
seven separately approved class-(b) repairs above. The complete individual
rationale and exact URL list remain in the matching line of
`wave3-topology.provenance.jsonl`.

| item | new `statement` | new `proof` | individualized semantic-source basis | A4 class |
|---|---|---|---|---|
| `def-order-topology-on-a-linearly-ordered-set` | `ai-altered` | `not-applicable` | UAB topology notes; order-topology reference | (c) |
| `def-connected-space` | `ai-altered` | `not-applicable` | connected-space reference; Stacks 004R, with the convention delta recorded | (c) |
| `thm-connectedness-characterisations` | `ai-altered` | `ai-altered` | connected-space equivalences | (c) |
| `lem-connected-subsets-and-separated-sets` | `ai-altered` | `ai-altered` | separated-set characterization | (c) |
| `cor-connected-subsets-of-the-line` | `ai-altered` | `ai-generated` | connected subsets of $\mathbb R$; UAB notes | (c) |
| `thm-continuous-image-of-a-connected-space` | `ai-altered` | `ai-altered` | Stacks 004R continuous-image theorem | (c) |
| `cor-intermediate-value-theorem-topological` | `ai-altered` | `ai-altered` | continuous images and real intervals | (c) |
| `thm-unions-of-connected-sets` | `ai-altered` | `ai-altered` | Stacks 004R and connected-space union theorem | (c) |
| `thm-closure-of-a-connected-set` | `ai-altered` | `ai-altered` | Stacks 004T closure theorem | (c) |
| `thm-product-of-connected-spaces` | `ai-altered` | `ai-generated` | Bankston notes; general-topology product theorem | (c) |
| `def-connected-component-and-quasicomponent` | `ai-altered` | `not-applicable` | Stacks 004R; component/quasicomponent references | (c) |
| `thm-components-partition-and-are-closed` | `ai-altered` | `ai-altered` | Stacks 004T component theorem | (c) |
| `thm-quasicomponents-contain-components` | `ai-altered` | `ai-altered` | Stacks 004R; Mayer's UAB *Components* notes | (c) |
| `def-path-connected` | `ai-altered` | `not-applicable` | connected-space reference; Bankston notes | (c) |
| `def-locally-connected` | `ai-altered` | `not-applicable` | WVU §3.4 (`node-11`); Bankston notes | (c) |
| `thm-locally-connected-iff-components-of-open-sets-are-open` | `ai-altered` | `ai-altered` | WVU §3.4 (`node-11`); Bankston notes | (c) |
| `thm-path-connected-implies-connected` | `ai-altered` | `ai-altered` | Conrad notes; connected-space reference | (c) |
| `thm-connected-and-locally-path-connected-implies-path-connected` | `ai-altered` | `ai-altered` | Bankston notes; WVU §3.4 (`node-11`) | (c) |
| `thm-a-linear-continuum-is-connected` | `ai-altered` | `ai-altered` | UAB topology notes | (c) |
| `def-the-long-line` | `ai-altered` | `not-applicable` | MIT long-line notes; long-line reference | (c) |
| `thm-the-long-line-is-a-connected-linear-continuum` | `ai-altered` | `ai-generated` | MIT long-line notes | (c) |
| `lem-the-oscillating-zigzag-curve` | `ai-altered` | `ai-generated` | Conrad notes; topologist's-sine-curve pattern | (b), (c) |
| `rem-connectedness-conventions` | `ai-altered` | `not-applicable` | connected-space reference; Stacks 004R | (c) |
| `fs-a-connected-space-is-path-connected` | `ai-altered` | `ai-generated` | Conrad notes; topologist's-sine-curve reference | (b), (c) |
| `fs-the-closure-of-a-path-connected-set-is-path-connected` | `ai-altered` | `ai-generated` | Conrad notes; topologist's-sine-curve reference | (b), (c) |
| `fs-a-connected-space-is-locally-connected` | `ai-altered` | `ai-generated` | Bankston notes; topologist's-sine-curve reference | (b), (c) |
| `fs-an-intersection-of-connected-sets-is-connected` | `ai-altered` | `ai-generated` | connected-space intersection counterexample record | (b), (c) |
| `fs-a-totally-disconnected-space-is-discrete` | `ai-altered` | `ai-generated` | connected/totally-disconnected references | (c) |
| `ex-convex-subsets-of-rn-are-path-connected` | `ai-altered` | `ai-altered` | connected/convex references; Bankston notes | (b), (c) |
| `ex-connectedness-of-the-standard-topologies` | `ai-altered` | `ai-generated` | particular/excluded-point, cocountable and cofinite references | (c) |
| `ex-the-oscillating-zigzag-curve-computed` | `ai-altered` | `ai-generated` | Conrad notes; topologist's-sine-curve reference | (b), (c) |
| `ex-the-rationals-are-totally-disconnected-and-not-discrete` | `ai-altered` | `ai-altered` | connected/totally-disconnected references | (c) |
| `cex-components-differ-from-quasicomponents` | `ai-altered` | `ai-altered` | Stacks 004R; locally-connected-space counterexample pattern | (c) |
| `ex-the-long-line-in-the-connectedness-hierarchy` | `ai-altered` | `ai-generated` | MIT long-line notes; long-line reference | (c) |
| `cex-a-path-connected-space-that-is-not-locally-connected` | `ai-altered` | `ai-altered` | Conrad's comb-space treatment | (c) |
| `cex-the-box-topology-disconnects-a-product-of-connected-spaces` | `ai-altered` | `ai-altered` | box-topology reference; Maguire lecture 20 | (c) |

### Verification-record disposition

The 29 pure-retag items retain exactly their pre-A4 `verification.verified`,
`verification.judge` and/or `verification.audited` state. For the seven
materially changed items — B1, B2, and the five B3 items — the pre-repair
Fable `verification.verified` record and GLM `verification.judge` block were
stale for the changed judge-visible text and were removed. None had an
`audited` key. Only `verification.precheck: pass` remains. A6, not Beta, owns
the replacement `verification.verified` record with `scope: published-audit`
and `delegated_by: owner`.

### Proof-contract refresh and local gates

`wave3-topology.proof-contracts.json` now:

- adds the normhood lemma as an A5 source used by B1 step 1.2;
- maps B2 step 6.3 to A2, A3 and A4 and adds step 6.3 to each corresponding
  citation-use list; and
- removes the eight source records belonging to the five deleted Remark-only
  Facts.

Validation results after the final edits:

- `reflow.mts`: all 29 proof-bearing items unchanged;
- `precheck.mts`: 29 checked, 0 failing;
- `proof-contract.mjs --strict`: 29/29 checked, 0 errors, 0 warnings;
- `finite-smoke.mjs`: 0 errors (no bounded checks declared);
- `content-policy.mjs --audit`: 36 scoped, 0 errors, 0 warnings;
- targeted `citecheck`: 36 scanned, clean;
- targeted `rendercheck`: 36 scanned, clean;
- targeted strict `prosecheck`: seven material items, clean;
- repository-wide `fwdcheck`: clean;
- repository-wide `extcheck`: no errors (its pre-existing published-unproved
  warnings remain); and
- repository-wide `depcheck`: expected temporary failure because all material
  A4 repairs lack an independent current audit stamp. It lists the seven
  topology items above plus material repairs owned by concurrent batches; A6
  is the prescribed clearing step. Its unrelated legacy warnings were not
  changed.

### Intentionally untouched

No item in the 36-item topology manifest is byte-for-byte untouched because A3
approved class-(c) retagging for every one. Mathematical text is untouched in
the 29 class-(c)-only items. In particular,
`ex-the-long-line-in-the-connectedness-hierarchy` received only its approved
frontmatter/reference retag; its correct cofinality argument was not changed.

`def-cofinal-subset-of-an-ordinal` is outside this batch and was left entirely
untouched, as required; its class-(a) repair belongs to the concurrent
foundations Beta. No A-page prose was changed because A3 approved no topology
page-prose repair. No declined proposal, id, reading order, or deletion was
applied, and no snapshot or shared git-state mutation was run.
