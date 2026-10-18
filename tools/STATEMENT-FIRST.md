# Uninterrupted statements in mathematics and physics builds

New `autopilot plan` namespaces automatically record
`research/RUN-statement-first.json`. The corresponding CLI selects
`mathlib.compact.mts` and a fresh workflow revision:
`six-step-v1-compact` or `physics-six-step-v1-compact`. The policy also records
`page_layout: compact-v1`; earlier statement-first markers without that field
retain `mathlib.statement-first.mts` and their original revision.
Use the usual engine commands and a fresh state directory inside its workspace.
Mathematics runs at the repository root; physics runs inside `physics/`.

Every item's statement, definition, formulation or example description is complete
without inline hyperlinks. This includes lemmas, propositions, corollaries,
examples, counterexamples, remarks, algorithms, open problems, physics theorems,
thought experiments, postulates and reported experiment descriptions. Preserve
all mathematical hypotheses, attribution and physical/empirical qualifications.
Links follow the complete section, each on one source line in its own paragraph:

```markdown
## Example

A complete description with the mathematical objects explicitly identified.

## Example references

[[def-relevant-object|Relevant objects]]

[source](https://example.org/source)
```

Use `<original heading> references`; `Statement refuted` uses
`Statement references`. Proofs, refutations, verifications, counterexample proof
arguments and Facts & Assumptions keep necessary proof citations. A one-line
source reference can wrap naturally in the browser. The policy does not remove
sources, dependency edges or assumptions and does not authorize changing claims
or published status. Existing consumer-review duties apply to interface changes.

The new table composes the actual native stages. It decorates existing primary,
refresh and repair briefs and appends `statement-first` to existing authored
content gate batteries, including the actual final validation battery. No extra
LLM stage, model change, counter reset or closeout transaction is introduced.
The checker parses full Markdown (including reference-style links), checks every
manifest subject regardless of draft/published status, rejects empty selections,
and never expands to unrelated suppliers or edits source files. Imported physics
suppliers are read-only context and cannot become editorial authoring subjects.
Semantic completeness, faithful reference preservation and claim strength remain
substantive reviewer duties; the checker establishes structure, not equivalence.

For an already opted-in run, the mechanical checker can be invoked explicitly:

```bash
node tools/statement-first-check.mjs --run RUN --domain math
# From physics/:
node tools/statement-first-check.mjs --run RUN --domain physics
```

Existing legacy run namespaces, including their `plan --force` and frontier
appends, retain their original policy. Appends to new policy-marked runs inherit
that policy, with their pre-authoring drift joins exempt from item-body checks. No active state, generated prompt, manifest, source,
controller or engine configuration is migrated, restarted or reloaded. New
plans using an existing explicit run-local stage configuration retain that choice;
a conflicting explicit table on a policy-marked run fails instead of silently
changing it. Do not manually attach this marker or revision to a running workflow.
A malformed marker or revision mismatch fails closed.

For newly planned runs, A/B pages have no summary body. Author and repair briefs
explicitly prohibit generating summaries. At the drained initial construction
join, code requires an already empty body and adds `page_layout: compact-v1`,
without touching item files, inventories, status or other metadata. Authors write
frontmatter-only pages from the start; scaffold narrative remains planning input
and is never copied into the page body. There is no summary-generation or
summary-deletion pass. Nonempty authored bodies fail rather than being silently
removed. Preparation happens before Step-1 gates and later review snapshots; it does not rewrite reviewed
pages at later gates. A scoped `page-layout` check accompanies the authored-content
batteries and rejects restored summaries or lost flags. Empty/malformed scopes
fail closed. Category overviews and pathway briefs remain.

The application snapshot parser carries the flag for both collections. Its reader
uses a native closed `details` disclosure for prerequisites, omits the summary
and renumbers subsequent sections. No LLM or client state is needed. Existing
unmarked pages retain their display. The flag does not change flowchart selection;
all-item flowcharts remain the separate published-category audit feature. The
application renderer change needs an ordinary application release.

The mechanical tool may be invoked only on an opted-in run's exact A/B manifests:
`node tools/page-layout.mjs prepare --run RUN --domain math` (or `physics` from
that workspace). Use `check` for read-only validation. Do not prepare a live legacy
run or manually retrofit a marker. Later substantive repair retains the native
review/hash/recertification duties; this tool never supplies acceptance evidence.
