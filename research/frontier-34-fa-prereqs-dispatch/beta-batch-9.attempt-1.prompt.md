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
citations, and truncated passages are not evidence. Missing full text is a
blocker.

For each A page, use at least two independent treatments, including a textbook,
monograph, or full lecture-note set. Record each source's URL, exact locator,
relevant headings or named results, and support. Give every harvested result a
disposition. Link included or inline results to item IDs; give deferred results
a valid destination and out-of-scope results a specific reason.

Fetch-verify every source. Prefer another live or archived copy of the same
text. A different treatment must be read and reharvested with new locators and
contents; retain `original_url`. Never remove mathematics to clear a source
check.

Record exact changes, evidence, dependency paths, checks, and blockers in the
named artifact. Report only checks you ran. After a handoff or context reset,
reread the current scaffold, dependencies, sources, and open obligations.


---

# This dispatch

run: frontier-34-fa-prereqs
role: beta
label: batch-9
covers: 9

# Batch 9 of run `frontier-34-fa-prereqs` — Distributions Test Functions and Differentiation · Tempered Distributions and the Fourier Transform

2 A/B pairs in functional-analysis. Own only these pairs.

## `distributions-test-functions-and-differentiation`

| | |
|---|---|
| A page | `distributions-test-functions-and-differentiation` · order **288.093** · `functional-analysis` |
| B page | `distributions-test-functions-and-differentiation-examples` |
| title | Distributions Test Functions and Differentiation |
| requires | `schwartz-space-and-the-plancherel-theorem-examples` |
| design | `research/plan-fourier-analysis-track.md` L115 (id mention, not a heading — locate the section yourself)<br>`research/plan-functional-analysis-track.md` L52 (id mention, not a heading — locate the section yourself) |

Read every listed design location. Record which one controls and why.

Read the complete design section and preserve its scope, conventions, warnings, and proof route. This generated file contains no mathematical review.

Compare the design with `research/plan-spec.json`. The current plan controls this run; record every conflict in the batch notes.

## `tempered-distributions-and-the-fourier-transform`

| | |
|---|---|
| A page | `tempered-distributions-and-the-fourier-transform` · order **288.095** · `functional-analysis` |
| B page | `tempered-distributions-and-the-fourier-transform-examples` |
| title | Tempered Distributions and the Fourier Transform |
| requires | `distributions-test-functions-and-differentiation-examples` |
| design | `research/plan-functional-analysis-track.md` L1806 |

Read the complete design section and preserve its scope, conventions, warnings, and proof route. This generated file contains no mathematical review.

Compare the design with `research/plan-spec.json`. The current plan controls this run; record every conflict in the batch notes.
