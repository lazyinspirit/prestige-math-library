# Scaffold contract

The task defines scope, writable files, outputs, and checks. Read it with
`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned designs, the current plan,
and the owned evidence. Write only authorized files. Do not modify published
content or request broader access.

## Dependencies

A scaffold is ready only when every claim can be proved from its hypotheses and
earlier local results. Audit the complete transitive closure of page `requires`
and item `deps` through the plan, all run manifests, and published items. For
each dependency, verify its exact statement, hypotheses, direction,
conventions, axiom strength, and use in the proposed proof. A resolving ID is
not enough. There must be no missing, circular, forward, or inadequate
dependency.

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

run: phase-2-wave-1
role: beta
label: scaffold-fix-1-b6
covers: 6

> The dispatch supplies batch `6`.

# Post-recheck scaffold repair — batch `6`, `phase-2-wave-1`

Read `research/phase-2-wave-1-scaffold-closure.json` and take only `work[]` entries
whose pages belong to batch `6`. Resolve each finding in this batch's
manifest, coverage, and notes, or rebut it with exact mathematical and source
evidence. Add every missing definition, lemma, theorem, and backward dependency.

If closure requires a new A/B pair, specify it completely and keep the consumer
blocked until the authorized plan writer adds it to the prose scaffold and
plan. Every added item needs a coverage disposition and either a verified
source/locator or a complete alternative under the documented source-drop
contract in `briefs/beta-scaffold.md`.

Append `## Scaffold-fix round` to the batch notes with each finding ID,
disposition, evidence, change, and remaining blocker. Run the batch coverage
checklist, whole-run `manifest-deps`, manifest-only content policy,
`validate-plan`, `extcheck`, and affected source checks. Do not edit shared plan
files, items, published pages, or another batch.
