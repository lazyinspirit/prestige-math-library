# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/phase-2-remaining-27-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-remaining-27
role: alpha-adjudicate
label: step7-preflight-c-1
covers: 1, 2, 5

# Step 7 preflight repair — group c

Run: `phase-2-remaining-27`. Batches: 1, 2, 5.

## Why this dispatch exists

The Step-7 preflight battery holds on the failures below. Each is a record or a structure left stale by the Step-7 repairs: the mathematics is settled and licensed (all 700 rejections adjudicated; `step7-guard` reports every edit licensed).

## Owned failures

### `cex-a-compact-operator-can-have-nondense-range`

- proof-contract: ERROR citation-quote-mismatch [cex-a-compact-operator-can-have-nondense-range]: A1 quote does not occur in def-square-summable-family-on-an-arbitrary-index-set's Definition

### `cex-a-quasinilpotent-operator-need-not-be-zero`

- proof-contract: ERROR citation-quote-mismatch [cex-a-quasinilpotent-operator-need-not-be-zero]: A3 quote does not occur in thm-hilbert-adjoint-properties's Statement

### `cex-compactness-is-not-preserved-by-strong-operator-limits`

- proof-contract: ERROR citation-quote-mismatch [cex-compactness-is-not-preserved-by-strong-operator-limits]: A1 quote does not occur in def-square-summable-family-on-an-arbitrary-index-set's Definition

### `cor-separable-infinite-dimensional-hilbert-space-is-ell-two`

- proof-contract: ERROR citation-quote-mismatch [cor-separable-infinite-dimensional-hilbert-space-is-ell-two]: A6 quote does not occur in def-square-summable-family-on-an-arbitrary-index-set's Definition

### `cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions`

- proof-contract: ERROR citation-quote-mismatch [cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions]: A1 quote does not occur in def-the-one-dimensional-torus-and-normalized-haar-integral's Definition
- proof-contract: ERROR citation-quote-mismatch [cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions]: A1 quote does not occur in lem-finite-tori-are-compact-hausdorff-character-spaces's Statement
- proof-contract: ERROR citation-quote-mismatch [cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions]: A4 quote does not occur in lem-finite-tori-are-compact-hausdorff-character-spaces's Statement

### `ex-polar-decomposition-of-the-unilateral-shift`

- proof-contract: ERROR citation-quote-mismatch [ex-polar-decomposition-of-the-unilateral-shift]: A2 quote does not occur in thm-hilbert-adjoint-properties's Statement

### `lem-bounded-hilbert-operators-form-a-c-star-algebra`

- proof-contract: ERROR citation-quote-mismatch [lem-bounded-hilbert-operators-form-a-c-star-algebra]: A4 quote does not occur in thm-hilbert-adjoint-properties's Statement

### `lem-continuous-functional-calculus-produces-a-regular-pvm`

- proof-contract: ERROR citation-quote-mismatch [lem-continuous-functional-calculus-produces-a-regular-pvm]: A3 quote does not occur in thm-hilbert-adjoint-properties's Statement

### `lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori`

- proof-contract: ERROR citation-quote-mismatch [lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]: A2 quote does not occur in def-the-one-dimensional-torus-and-normalized-haar-integral's Definition
- proof-contract: ERROR citation-quote-mismatch [lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]: A4 quote does not occur in def-the-one-dimensional-torus-and-normalized-haar-integral's Definition

### `lem-only-countably-many-fourier-coefficients-are-nonzero`

- proof-contract: ERROR citation-quote-mismatch [lem-only-countably-many-fourier-coefficients-are-nonzero]: A1 quote does not occur in def-square-summable-family-on-an-arbitrary-index-set's Definition
- proof-contract: ERROR citation-quote-mismatch [lem-only-countably-many-fourier-coefficients-are-nonzero]: A6 quote does not occur in def-square-summable-family-on-an-arbitrary-index-set's Definition

### `lem-polynomial-calculus-is-isometric-for-self-adjoint-operators`

- proof-contract: ERROR citation-quote-mismatch [lem-polynomial-calculus-is-isometric-for-self-adjoint-operators]: A4 quote does not occur in thm-hilbert-adjoint-properties's Statement

### `lem-range-of-identity-minus-compact-is-closed`

- boundary-audit [one]: the row credits step 7.1, which does not occur in the proof
- proof-contract: ERROR boundary-evidence-step-missing [lem-range-of-identity-minus-compact-is-closed]: one names missing step 7.1

### `lem-simple-pvm-integral-is-representation-independent`

- boundary-audit [empty]: the row credits step 1.3, which does not occur in the proof
- proof-contract: ERROR boundary-evidence-step-missing [lem-simple-pvm-integral-is-representation-independent]: empty names missing step 1.3

### `lem-spectral-permanence-for-unital-c-star-subalgebras`

- boundary-audit [degenerate]: the row credits step 2.2, which does not occur in the proof
- boundary-audit [zero]: the row credits step 2.2, which does not occur in the proof
- proof-contract: ERROR boundary-evidence-step-missing [lem-spectral-permanence-for-unital-c-star-subalgebras]: degenerate names missing step 2.2
- proof-contract: ERROR boundary-evidence-step-missing [lem-spectral-permanence-for-unital-c-star-subalgebras]: zero names missing step 2.2

### `lem-spectrum-of-a-self-adjoint-operator-is-real`

- proof-contract: ERROR citation-quote-mismatch [lem-spectrum-of-a-self-adjoint-operator-is-real]: A2 quote does not occur in thm-hilbert-adjoint-properties's Statement

### `lem-two-dimensional-numerical-range-is-convex`

- risk-report: ERROR risk-review-missing [lem-two-dimensional-numerical-range-is-convex]: lem-two-dimensional-numerical-range-is-convex is high risk and lacks a complete Alpha risk_review

### `thm-bessel-inequality-for-an-arbitrary-orthonormal-family`

- proof-contract: ERROR citation-quote-mismatch [thm-bessel-inequality-for-an-arbitrary-orthonormal-family]: A2 quote does not occur in def-square-summable-family-on-an-arbitrary-index-set's Definition
- proof-contract: ERROR citation-quote-mismatch [thm-bessel-inequality-for-an-arbitrary-orthonormal-family]: A3 quote does not occur in def-square-summable-family-on-an-arbitrary-index-set's Definition

### `thm-bounded-borel-pvm-integral`

- proof-contract: ERROR citation-undeclared-dependency [thm-bounded-borel-pvm-integral]: A3 cites def-projection-valued-measure, which is absent from deps/justified_by/forward_refs

### `thm-continuous-functional-calculus-properties`

- proof-contract: ERROR citation-quote-mismatch [thm-continuous-functional-calculus-properties]: A4 quote does not occur in thm-hilbert-adjoint-properties's Statement
- proof-contract: ERROR citation-quote-mismatch [thm-continuous-functional-calculus-properties]: A5 quote does not occur in thm-hilbert-adjoint-properties's Statement

### `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`

- proof-contract: ERROR citation-quote-mismatch [thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]: A5 quote does not occur in def-square-summable-family-on-an-arbitrary-index-set's Definition

### `thm-parseval-identity-for-fourier-series`

- proof-contract: ERROR citation-quote-mismatch [thm-parseval-identity-for-fourier-series]: A4 quote does not occur in def-square-summable-family-on-an-arbitrary-index-set's Definition
- proof-contract: ERROR citation-quote-mismatch [thm-parseval-identity-for-fourier-series]: A5 quote does not occur in def-square-summable-family-on-an-arbitrary-index-set's Definition

## Your job

- Work only these items; write only inside your own group.
- Re-read each item, its proof contract, its cited clauses and its source locators before deciding anything.
- Fix each failure at its cause:
  - `proof-contract` / `finite-smoke`: refresh the contract entry (`node tools/regen-contract-entries.mjs research/<batch>.proof-contracts.json <id>`), then fix any genuine inconsistency between the item's Facts, its proof steps and that entry — the item text if the text is wrong.
  - `risk-report`: after reading the item, record a specific complete `risk_review` in its batch contract about the current text.
  - `boundary-audit`: repair the contradicted row against the current proof, or record `reviewed: {upheld: true, by, reason}` with a concrete item-specific reason (>= 40 characters) when the detector is a false positive.
  - `depcheck` `b-leaf-content`: the supplier lives only on a B/examples page, which must be a leaf. Home the supplier on its companion A page too (multi-home is legal: add it to that page's item list in the owning batch manifest and the plan), or re-point the consumer to a legal supplier. Never drop a load-bearing dependency.
  - `depcheck` / `fwdcheck` cycles: break the cycle at the edge that is not load-bearing, after checking which citation carries the argument; record the reason in the item's Remarks.
  - `fwdcheck` `forward-undeclared`: cite an earlier supplier, or declare the forward reference in `forward_refs`. A cycle must be broken, not declared.
- After any item edit: `node tools/tsx-run.mjs tools/precheck.mts <file>`, refresh its contract entry, and record a content repair in the defect ledger with exact pre/post `itemHashGuard` digests.
- Never approve or re-issue an item you could not verify; report the blocker.
- Do not edit shared files beyond the owning batch manifest/contract, the sanctioned plan tool, the defect ledger, and your report.

## Report

Write `research/phase-2-remaining-27-alpha-c-step7-preflight-repair.md`: per item the failure, the cause, the repair (or why the detector is a false positive), the tools/hashes used, and any blocker.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
