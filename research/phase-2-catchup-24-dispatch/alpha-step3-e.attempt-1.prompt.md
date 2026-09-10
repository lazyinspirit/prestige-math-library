# Scaffold contract

The task defines scope, writable files, outputs, and checks. Read it with
`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned designs, the current plan,
and the owned evidence. Write only authorized files. Do not modify published
content or request broader access.

## Dependencies

A scaffold is ready only when every claim can be proved from its hypotheses and
earlier local results. Check page `requires` for structural closure and legal
order. Audit the actual transitive proof prerequisites of every owned item
through the plan, run manifests and published items, including `deps`,
well-definedness obligations and load-bearing body references. Sharing a
prerequisite page does not make every item on that page a proof dependency. For
each actual dependency, verify its exact statement, hypotheses, direction,
conventions, axiom strength, and use in the proposed proof. A resolving ID is
not enough. There must be no missing, circular, forward, or inadequate
dependency.

During Phase 2, defects in published consumers being supplied by this frontier
are Phase-3 debt, not blockers on their suppliers. Record those defects, exact
planned suppliers and repair strategies in the published-consumer-supplier
ledger; batch writers without ledger access record them in their owned notes
for reconciliation. A published defect blocks an owned item only when its
proposed proof actually uses the defective result or affected clause. Give the
exact item path and mathematical use; then supply an adequate local proof or
reroute to an adequate prerequisite. Do not assume that unused declared edges
are harmless: justify their removal against the proof. Do not require a
semantic audit of all co-resident published items to clear a supplier pair.
This distinction never waives structural gates or the Foundations boundary below.

Add every needed definition, lemma, or theorem in proof order. The owner
authorizes new prerequisite A/B pairs when closure requires them. Add each pair
to the authorized prose scaffold and plan. If those files are not writable,
record its title, category, placement, prerequisites, and A/B item inventories
as a fatal finding. The consumer remains blocked until the pair is added. Never
drop or weaken useful mathematics to pass a check. Split an A page above the
plan limit; never pad.
Use stable, unused, correctly prefixed item IDs and explicit `deps` arrays,
including `deps: []`.

No Foundations page or item may directly or transitively reach
`deferred-set-theory-beyond-choice` or any item recorded there through
`requires`, `deps`, `justified_by`, or load-bearing `forward_refs`. The
catalogue is a target ledger, never a supplier. `external_refs` may provide
orientation only. Prove replacements from earlier local machinery. Every
violation is fatal and unpublishable.

## Sources

Search the web for every piece of mathematics unfamiliar to you and verify it
against authoritative sources before using or approving it. This includes
definitions, results, dependencies, examples, counterexamples, proof routes,
and scope decisions. Prefer primary papers, author-hosted books or notes, and
official references. Read the complete relevant text. Abstracts, snippets,
citations, and truncated passages are not full-text evidence.

Unless a documented drop below makes them unavailable, use at least two
independent treatments per A page, including a textbook,
monograph, or full lecture-note set. Record each source's URL, exact locator,
relevant headings or named results, and support. Give every harvested result a
disposition. Link included or inline results to item IDs; give deferred results
a valid destination and out-of-scope results a specific reason.

Verify every URL serves the complete relevant text, not merely HTTP 200 or a
PDF-shaped file. Run `source-fetch-check --stamp`; inspect the actual text.
After failure, search author/institutional copies and complete archives
autonomously, retrying recovery five times after the initial failure. Record
real attempts; do not invent failures or treat a temporary network outage as
proof of open-web absence. Stop retrying once the text is recovered.
Reuse recorded fetch attempts; five retries do not mean five agent dispatches.

If the original is genuinely unavailable on the open web, find an alternate
proof yourself or in accessible authoritative literature. Preserve every
result, hypothesis and dependency; add needed lemmas. Read and reharvest any
replacement treatment with its own locators. If you are not 100% confident in
the alternative mathematics, set `source_resolution.status: owner-escalation`,
keep the batch blocked, and report the URL, searches and exact uncertainty to
the owner. Never manufacture confidence or a read/fetch stamp.

Otherwise drop the original as proof backing, retaining its source record and
result dispositions as history. Add `source_resolution` with:

- `status: dropped`, `decided_by: step-1-scaffolder`, `confidence: certain`;
- `reason`, `search_summary`, `searches: [{query, outcome}]`;
- `attempts: [{url, at, outcome}]`: initial failure plus five recovery retries;
- `alternatives: [{item, argument, deps}]`: a complete alternate argument for
  every included/inline result, with exact earlier dependency IDs.

Keep replacement URLs in separate active source records and align arguments
and dependencies with the manifest. Do not invent headings or locators for
unread text. Valid drops waive the unavailable original and any source-count
shortfall, not scope, provenance, dependency or review checks. Step 3
independently adjudicates these arguments.

Record exact changes, evidence, dependency paths, checks, and blockers in the
named artifact. Report only checks you ran. After a handoff or context reset,
reread the current scaffold, dependencies, sources, and open obligations.

# Frontier dependency bookkeeping

Step-3 reviewers and subsequent scaffold repairers also follow
`briefs/tasks/frontier-dependency-ledger.md`. Record and maintain cross-batch
dependencies without changing other batches or expanding repair authority.


---

# This dispatch

run: phase-2-catchup-24
role: alpha
label: step3-e
covers: 10, 11

> The dispatch supplies the group label and batches.

# Step 3 — scaffold review

Also follow `briefs/tasks/frontier-dependency-ledger.md`: identify and record all
same-frontier cross-batch dependencies for your consumer batches.

Independently audit every assigned A/B pair from its manifest, coverage, notes,
design, current plan, published prerequisites, and source text. Verify every
claim, proof route, source disposition, and transitive dependency path. Review
the B page as part of the pair. Do not edit batch scaffold files; send every
defect to the owning Beta.

Apply the Phase-2 supplier/Phase-3 consumer boundary in `briefs/beta-scaffold.md`.
For each published-proof blocker, identify an owned item, its actual dependency
path and the affected premise used. Page membership or an unaudited page-wide
item count is not such evidence. Preserve unrelated published debt in the
consumer ledger or owned review notes; do not make it a supplier verdict failure.

Original full text is not always available on the open web. Read each
`source_resolution` decision and independently check its alternative argument,
hypotheses and dependencies. Consult accessible authoritative sources for
unfamiliar mathematics. Accept a sound, complete alternative without demanding
the missing original or two accessible treatments. A source drop must never
drop a result. Soundness overrides original-source availability; confidence
alone is not evidence. Name actual proof gaps and retain owner escalations
until the uncertainty is resolved.

For each gap, name the exact claim or dependency path and required repair.
Require added definitions, lemmas, or theorems when they close the gap. If a
new prerequisite A/B pair is needed, specify its title, category, placement,
prerequisites, item inventory, and prose-scaffold destination. The affected
pair remains `insufficient` until the addition exists in the scaffold and plan.

Run `node tools/scope-decisions.mjs refresh --run phase-2-catchup-24 --group <your-group>`.
Resolve every pending row in
`research/phase-2-catchup-24-alpha-<your-group>-scope-decisions.json` as `stands` or
`owner-decision` with current evidence, then run its `check` command.
Run whole-run `manifest-deps`, `validate-plan`, and `extcheck`.

Write `research/phase-2-catchup-24-alpha-<your-group>-step3-scaffold-review.md` and
`research/phase-2-catchup-24-alpha-<your-group>-step3-verdicts.json`. The verdict file has
one pair verdict keyed by A-page ID. Use `sufficient` only when both pages have
complete and adequate prerequisites. Otherwise use `insufficient` with a
nonempty `missing` list of exact defects, repairs, dependency paths, and sources
where applicable. Route shared prose-scaffold and plan edits to one authorized
writer; they cannot be waived.
