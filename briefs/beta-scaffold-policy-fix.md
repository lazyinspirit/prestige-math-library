# Step 1 — scaffold repair

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

Repair only reported subjects in `research/<run>-batch-<i>.pages.json` and its
coverage and notes.

Read the current batch findings and source-recovery notes. Repair incomplete
coverage by reading the complete relevant sources, completing required
contracts, and assigning honest result dispositions. Follow the scaffold
contract's recovery and alternative-proof rules. Never turn an unresolved
source or proof into a confident verdict merely to pass coverage.

Treat dependency failures as mathematical defects. Add every needed definition,
lemma, theorem, or backward dependency. Remove a dependency only when the exact
claim and proof route do not use it. If closure requires a new A/B pair, specify
it completely and keep the consumer blocked until an authorized writer adds it
to the prose scaffold and plan. Update source coverage for every changed claim.
Do not edit shared plan files, items, published pages, another batch, or workflow
state.

Run the batch coverage checklist, whole-run `manifest-deps`, manifest-only
content policy, `validate-plan`, `extcheck`, and affected source checks.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
