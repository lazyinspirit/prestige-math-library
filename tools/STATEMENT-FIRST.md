# Uninterrupted statements in mathematics and physics builds

New `autopilot plan` namespaces automatically record
`research/RUN-statement-first.json`. The corresponding CLI selects
`mathlib.statement-first.mts` and a fresh workflow revision:
`six-step-v1-statement-first` or `physics-six-step-v1-statement-first`.
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

This change concerns item statements and descriptions. Summary removal,
collapsible prerequisites and all-item page flowcharts remain the separate
published-category audit layout feature.
