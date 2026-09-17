# phase-2-remaining-27 — Step 5b lead Alpha (cross-batch audit and closure)

Role: `5b-lead`, covers all 15 batches. Outputs: this report,
`research/phase-2-remaining-27-5b-verdicts.jsonl`, the two impact receipts and
the ledger rows named below. Date of the audit: 2026-09-17.

## 1. What was computed

`node tools/cross-group-edges.mjs list --run phase-2-remaining-27` (stage
`5b-edges`, executed 23:04 local) produced:

| list | count | note |
|---|---|---|
| cross-batch edges | 926 | 923 distinct `(from,to)` pairs; 3 pairs appear twice because the target is in both `deps` and `justified_by` |
| forward references | 15 | item-level `forward_refs` declarations reaching 5b |
| post-5a structural changes | 0 | at list time; the 10 items edited in this audit are listed as changes on re-derivation |

Edge groups: a→a 276, c→c 195, e→c 242, d→c 71, d→d 60, c→b 38, b→b 22,
a→c 12, b→c 7, d→b 2, a→e 1. Distinct citing items 277, distinct targets 164.

## 2. The edge audit — how each citation was read

For every one of the 926 listed edges I read the citing use in the current
citing item (section, line, surrounding sentence) together with the current
statement of the target, and judged the citation against that exact statement:

* 863 edges have one or more body wikilinks to the target. I read each citing
  occurrence in context (Facts row, Statement, Example, Remark or proof step)
  and compared the claim made there with the target's current Statement /
  Definition (and the target's numbered clauses where the use is load-bearing).
  Where the rendered snippet was not enough to see the use in full I opened the
  citing item at that point (`/tmp/usectx.mjs`-style lookups; e.g. edges 11, 19,
  24–25, 29, 36–37, 42).
* 63 edges have no body wikilink to the target at all: the target is a declared
  prerequisite used implicitly (the ambient Hilbert/Banach space, the stopping
  time convention, the root-system conventions, the orthogonal complement,
  the single-valuedness of a spectrum, …). I made a second pass over these 63,
  reading the citing item's statement/definition and the target's statement, and
  recorded for each what the item's own text uses it for.

Result: **923 accurate verdicts, 0 repairs, 0 strikes** — no cross-batch
citation required a change. Notes are recorded per edge in
`research/phase-2-remaining-27-5b-verdicts.jsonl` with the current
`from_sha256` / `to_sha256` of the citing and target carrier files. Two notes
that turned out to overstate a detail on first writing were corrected before
assembly (edge 11: the stopping-time definition explicitly assumes no
completeness of the filtration; edge 223 was missing and was written).

## 2a. Migration / merge inputs

This run has no `research/phase-2-remaining-27-checkpoint-import.json`, no
`research/phase-2-remaining-27-merge-import.json` and no
`research/phase-2-remaining-27-step7-published-repairs.jsonl` (checked before the
audit; the run was authored in place), so there is no imported source-review
evidence and no published-repair handoff to preserve or re-adjudicate here.

## 3. Forward references — decisions and the repair applied

All 15 declared forward references point (by design) at items on **later plan
pages** (the `…-examples` pages and the Gelfand-theory examples page). Every one
of them occurs **only in `## Remarks` / `## Remark`**: they are orientation-only
pointers, carrying no logical weight. Two gates bear on them and only one
outcome satisfies both:

* `tools/fwdcheck.mjs` requires every body link to a later page to be declared
  in `forward_refs` (`forward-undeclared` otherwise — verified by experiment on
  `def-holomorphic-functional-calculus`);
* `tools/cross-group-edges.mjs check` requires the declaration to be closed at
  5b (`forward-still-declared`), and page re-ordering that would make the
  citations point backwards is an owner-only reading-order change.

The closure applied to each of the ten items is therefore: delete the
`forward_refs:` line, keep the pointer but name the example **by ID** instead of
hyperlinking it, and add one "**Reading order**" bullet to Remarks recording the
situation and the owner-only rehoming that would restore the links (this is the
same resolution the `phase-2-next-21` Step 5b used for its own forward
pointers). The remark prose and every mathematical sentence are otherwise
untouched; the involved uses ("the spectrum is taken in B(X)", "the unilateral
shift shows that ab=1 need not give ba=1", "spectra may shrink in a larger
algebra", "the operator example is the special case A=B(X)", ...) remain in
place with the item named by ID.

The 15 forward verdicts are `lemmas-added`: the cited material exists (authored
in this run) and the citation is closed, with one closed `5b-cross` ledger row
per pair (`p2r27-5b-fwd-…`, class `accuracy`, subclass `citation-inflated`,
severity `nonfatal`, location `frontmatter`, disposition `narrowed`, evidence =
the item, the target and the work list). After the edit:
`node tools/fwdcheck.mjs` reports OK (no forward link remains anywhere in the
repo), and `node tools/cross-group-edges.mjs check` reports **0 errors**.

## 4. The ten edited carriers

| item | batch | forward declaration(s) closed |
|---|---|---|
| def-holomorphic-functional-calculus | 4 | ex-bounded-operators-form-a-noncommutative-banach-algebra |
| def-invertible-element-and-general-linear-group-of-a-banach-algebra | 4 | ex-spectrum-of-the-unilateral-shift; ex-unitization-of-a-nonunital-banach-algebra |
| def-riesz-spectral-projection | 4 | ex-riesz-projection-for-a-matrix-with-separated-spectrum |
| def-spectral-radius | 4 | cex-norm-need-not-equal-spectral-radius |
| def-spectrum-and-resolvent-set-in-a-banach-algebra | 4 | cex-spectrum-can-shrink-in-a-larger-banach-algebra; ex-bounded-operators-form-a-noncommutative-banach-algebra; ex-unitization-of-a-nonunital-banach-algebra |
| def-unital-banach-algebra | 4 | ex-bounded-operators-form-a-noncommutative-banach-algebra; ex-continuous-functions-form-a-commutative-banach-algebra |
| rem-raw-versus-usual-filtration-in-the-strong-markov-theorem | 7 | cex-strong-markov-fails-at-a-nonstopping-random-time |
| thm-gelfand-mazur | 4 | cex-spectrum-can-shrink-in-a-larger-banach-algebra; ex-maximal-ideal-space-of-the-disc-algebra |
| thm-polynomial-spectral-mapping | 4 | cex-spectrum-can-shrink-in-a-larger-banach-algebra |
| thm-spectrum-as-character-values | 4 | cex-gelfand-transform-of-a-banach-algebra-need-not-be-isometric |

Each edited item is recorded by a `kind:"item"` change verdict with its current
composite carrier hash (`cross-group-edges.mjs carrier`) and verdict `accepted`
(the change is exactly the recorded forward closure; the defect ownership sits
on the forward rows). Proof-bearing items were re-run through
`node tools/tsx-run.mjs tools/precheck.mts` after the edit: **0 failing**. No
contract row, manifest row, provenance block or risk_review was invalidated: the
edits touch `forward_refs` and a Remark bullet only, and the 5a risk_reviews for
the HIGH/CRITICAL items among these ten remain about exactly the statements and
proofs that are still on disk (`risk-report --require-reviewed`: 0 errors over
all 962 contracted items).

## 5. Impact windows (both closed with receipts)

**(a) `pre-author → post-5a`** — receipt `research/phase-2-remaining-27-impact.json`.
Computed: 4,100 changed interfaces, 17,750 affected items. The changed set
decomposes, verifiably, as:

* **1,032 additions** — this run's authored items (verified: absent at
  `87ee9eb6c^`, present now);
* **3,067 modifications whose surface text is identical modulo whitespace** to
  the pre-author blob (`87ee9eb6c^`) — the owner's repo-wide reflow commit
  `87ee9eb6c` ("Adopt the canonical precheck step numbering…", message: step
  labels and bracketed step references only, no mathematical change). For each
  item I compared the item-surface normalisation (frontmatter minus
  `verification`, body minus Scratch/Proof/Refutation/Counterexample/
  Verification, all whitespace collapsed) between the two blobs: identical.
* **1 modification that also moves text**: `lem-finite-lower-central-coordinate-systems-exist`
  lost its trailing `## Source notes` section (the locator moved into the
  frontmatter `sources.references[0].locator`). Statement, Facts and Proof are
  unchanged.

Every one of the 17,750 dispositions names the changed supplier(s) reaching the
item, the channel (direct `deps`/`justified_by`/wikilink citation, or the
declared-deps chain for transitive consumers) and the classification of the
delta; run-authored suppliers additionally name the batch and the group
adjudication file. Statuses: 17,684 `still-licensed`, 66 `not-load-bearing`
(the 66 are reached only through a non-load-bearing wikilink/forward/external
mention — no `deps`/`justified_by` path). The receipt's reviewer field states
the attribution, currency (frozen post-5a snapshots) and coverage limits
honestly. Validation:
`node tools/impact-audit.mjs --touches research/phase-2-remaining-27-touches.json --from pre-author --to post-5a --receipt research/phase-2-remaining-27-impact.json` → **0 errors**.

**(b) `post-5a → current`** — receipt `research/phase-2-remaining-27-impact-5b.json`.
Computed: 10 changed interfaces (the items in §4), 132 affected items. Every
disposition records that the supplier's only post-5a change is the forward
closure (no statement/Fact/Proof text), verified from disk. Statuses: 130
`still-licensed`, 2 `not-load-bearing`. Validation:
`node tools/impact-audit.mjs --touches research/phase-2-remaining-27-touches.json --from post-5a --current --receipt research/phase-2-remaining-27-impact-5b.json` → **0 errors**.

**Decision record.** The obligation-level decision record is
`research/phase-2-remaining-27-alpha-5b-decisions.json` (9 decisions plus the two
unresolved owner items); the per-obligation rows are the verdicts file
(964 rows: 923 edges, 15 forwards, 10 item changes, 16 gate outcomes).

**Limits recorded in the receipts.** (i) The pre-author window's out-of-run
reach includes unpublished work from other runs; for those items the disposition
rests on the whitespace-identity proof of the supplier delta, not on a re-proof.
(ii) Three run items (`ex-classical-root-systems-in-euclidean-coordinates`,
`ex-diagonal-cartan-subalgebra-and-roots-of-sl-n`,
`ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups`) consume run-authored
items but are absent from all 15 batch manifests, so they have **no reader or
refuter coverage**; their dispositions say so explicitly. They are part of
blocker B1 below.

## 6. Ledger work

* **Defect ledger** (`research/defect-ledger.jsonl`): 31 `5b-cross` rows appended
  (`tools/defect-ledger.mjs append`): 15 closed rows for the forward closures
  (disposition `narrowed`, each referenced by exactly one forward verdict) and 16
  rows recording the audit-manifest gate defects (disposition
  `nonfatal-recorded`, unrepaired, each referenced by exactly one gate verdict).
  `defect-ledger.mjs validate --run phase-2-remaining-27` → 0 errors over 244
  rows for this run; the generated view was re-rendered in the same transaction.
* **Frontier dependency ledger** (`research/phase-2-remaining-27-cross-batch-dependencies.json`
  via the per-batch inputs): four edges had no review row — the two item edges
  `cor-atkinson-in-calkin-algebra-language → def-compact-linear-operator` and
  `→ thm-atkinson` (batch 4), both read in this audit, and two batch-13 page
  prerequisites (`real-forms-and-real-semisimple-lie-algebras{,-examples}` →
  the corresponding `…-examples` pages), verified as satisfied plan-order
  prerequisites with zero item-level deps onto the supplier pages. The review
  rows were added to the owning input files and
  `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27
  --require-reviewed` succeeds (961 edges, all reviewed).
* **Coverage bookkeeping**: one stale `alternative` row in
  `research/phase-2-remaining-27-batch-4.coverage.json` named a dependency the
  alternative item does not declare; the row now lists that item's actual
  declared deps. `coverage-checklist` passes for all 15 batches.
* **Published content**: no published item was edited and no published item was
  found defective in the audited interfaces, so
  `research/published-consumer-supplier-ledger.md` gains no new defect row; the
  A-P/U queues are unchanged by this audit. (The three catalogue remarks and
  three homeless items of §7 are drafts, not published items; they are reported
  to the owner rather than entered as published debt.)

## 7. Remaining blockers — owner decisions required

Two classes of `tools/audit-manifest.mjs` defect survive this audit
(16 defects, exit 1). Both are outside the 5b repair authority in this task
(page/reading-order changes, and published/scope decisions):

**B1 — three run-authored items have no page home (13 unresolved consumer
deps).** `ex-classical-root-systems-in-euclidean-coordinates`,
`ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` and
`ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups` were authored by
this run (frontmatter `pipeline_run: phase-2-remaining-27`, mtime
2026-09-17 03:33) and the b-leaf plan/cleanup reports
(the plan report's move table rows 16–17 and 46–47, at
`research/phase-2-remaining-27-bleaf-plan-report.md` lines 90–91 and 120–121,
and the move list at `…-bleaf-cleanup-report.md` lines 62, 68–70, 128–130) record their
intended MOVE out of the B examples pages onto the A pages
(`root-systems-dynkin-diagrams-and-cartan-killing-classification` and
`cartan-subalgebras-and-root-space-decompositions`). The move was applied to the
items' own frontmatter and the B lists, but the three items are in **no**
`plan-spec.json` page, **no** batch manifest and **no** `library/…` page, so 13
consumers (batches 11 and 13) now depend on items the gate cannot resolve:
`ex-root-space-brackets-for-matrix-units`, `ex-the-root-sl-two-triple-inside-sl-n`,
`ex-root-strings-in-type-a-two`, `ex-regular-and-singular-diagonal-elements-of-sl-n`,
`ex-the-killing-form-identifies-roots-with-coroot-directions`,
`ex-simple-roots-and-fundamental-weights-of-a-n`,
`ex-weyl-group-of-a-n-is-the-symmetric-group`,
`ex-dynkin-diagram-duality-of-b-n-and-c-n`, `ex-low-rank-dynkin-coincidences`,
`prop-restricted-root-systems-may-be-nonreduced` (twice),
`ex-restricted-roots-of-sl-n-r`, `ex-vogan-diagrams-for-real-forms-of-sl-three-c`.
Owner decision required: authorise the page/manifest/plan change that homes the
three items (the b-leaf reports give the intended pages), or direct another
disposition. Attempted closure: I checked the plan, all 15 manifests, the
library pages and the b-leaf reports; there is no page slot to fill without a
reading-order change, which this task does not authorise.

**B2 — three batch-4 items cite draft catalogue remarks by `external_refs`.**
`rem-nagata-cp-theorem-remains-topological` → `rem-nagata-theorem-cp`,
`rem-linear-dugundji-extension-remains-topological` → `rem-dugundji-extension-linear`,
`rem-gerlits-nagy-remains-selection-principle-theory` → `rem-gerlits-nagy`.
The three targets exist on disk as session-origin, `proved_here: false` remarks
(draft, on the `not-proved-here` catalogue pages, e.g.
`library/not-proved-here/deferred-functional-analysis.md`) — exactly what
`external_refs` requires per SCHEMA — but they are neither published nor part of
this run's manifests, and `audit-manifest` counts only published or in-run
items, so it reports them unresolved. Owner decision required: publish/cover
those catalogue remarks (published content is read-only here), or record the
citation explicitly as acceptable.

## 8. Gate battery status at hand-off (all commands run from the repo root)

Green: `cross-group-edges check` (0 errors, 926 edges / 15 forwards / 948 verdict
rows), both `impact-audit` receipts (0 errors), `precheck` (16,024 checked, 0
failing), `depcheck` (OK; advisory `cited-not-in-deps` warnings pre-exist),
`fwdcheck` (OK), `rendercheck` (OK), `prosecheck` (OK), `depsource` (OK),
`pathcheck` (0 errors), `splice-plan --verify` (54 pages agree), `manifest-integrity`
(no scope drift), `content-policy` items (0 errors), `extcheck` (OK),
`validate-plan` (OK), `step5-scope check --phase final` (1,029 items routed, 0
errors), `step5-scope check-escalations` (no escalations),
`auditor-created-items certify --step 5` (16 certified), `coverage-checklist`
(all 15 batches), `url-sweep --fail-on-dead` (68/68 live, 73 citation decisions),
`merge-proof-contracts`/`proof-contract --strict`/`finite-smoke`/
`risk-report --require-reviewed`/`boundary-audit`/`citation-fidelity`/
`gate-liveness` (0 errors), `defect-ledger validate` (0 errors),
`frontier-dependency-ledger refresh --require-reviewed` (OK).

Red: `audit-manifest` — 16 defects, B1 (13) and B2 (3) above. Per the workflow
this is an owner hold; I have not cleared it or claimed closure.

## 9. Honest limits of this audit

* The edge verdicts are a reading of the citing use against the supplier's
  current statement, not an independent re-proof of the citing items; the
  underlying items carry their own 5a reader/refuter/adjudication evidence.
* The pre-author window's out-of-run consumers (16,731 of 17,750) were
  dispositioned through the supplier-delta classification and the dependency
  channel, not by re-reading each consumer in full; the receipt says so.
* The forward closures deliberately trade a hyperlink for an ID mention in ten
  Remarks. That is a small richness loss; the alternative (rehoming the example
  items earlier in the reading order) is an owner decision, and each edited item
  now records that trade-off in its own Remarks.
* The `url-sweep` run covers the 15 coverage files of this run and reported 5
  documented source drops out of 73 citation decisions, all recorded in those
  coverage artifacts; the sweeps' URL results are a link check, not source
  reading.
