> The dispatch supplies batch `<i>`.

# Post-recheck scaffold repair — batch `<i>`, `numerical-analysis-48-2026-10-16`

Read `research/numerical-analysis-48-2026-10-16-scaffold-closure.json` and take only `work[]` entries
whose pages belong to batch `<i>`. Resolve each finding in this batch's
manifest, coverage, and notes, or rebut it with exact mathematical and source
evidence. Add every missing definition, lemma, theorem, and backward dependency.

Apply `briefs/beta-scaffold.md`'s Phase-2 boundary. Rebut page-only published
debt with the actual proof-dependency evidence and retain it for the consumer
ledger. Do not repeatedly rewrite a scaffold to fix unrelated published items.
Actual inadequate suppliers still need a local replacement or authorized repair.

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

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
