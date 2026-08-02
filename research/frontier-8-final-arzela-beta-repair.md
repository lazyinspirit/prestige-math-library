# Frontier 8 Beta repair: Arzelà--Ascoli choice scope

## Scope

This repair changes only `items/thm-arzela-ascoli-for-real-ck.md` and its contract entry in `research/frontier-8-proof-contracts.json`. The dedicated item snapshot `pre-final-arzela-repair` already existed before this repair; no additional snapshot was taken.

## Source and current-context evidence

The target's dependency `[[thm-metric-compactness-equivalences]]` has the title "For a metric space, compact, countably compact, limit point compact, sequentially compact, and complete together with totally bounded are all equivalent, given countable choice and dependent choice." Its Statement begins: "**Assume the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom of Dependent Choice ([[def-dependent-choice]]).** Let $(X,d)$ be a metric space..." The pre-repair proof contract already preserved that exact source clause for fact L3, used at steps 1.2 and 2.1.

Before this repair, the target's title and Statement made the equivalence claim without those axioms; its Given line omitted them, while L3 referred only to "the stated choice principles." The proof itself and its dependency declarations were unchanged.

## Correction and provenance

The title, Statement, and Given line now explicitly assume Countable Choice and Dependent Choice. L3 now names those axioms rather than relying on an absent prior statement. The contract records `given` among the inputs to steps 1.2 and 2.1, the two steps that invoke L3. No proof step, dependency, page, or cited source was changed.

Because the reader-facing Statement was materially narrowed to state the choice scope supplied by the in-library dependency, `provenance.statement` changes from `literature-derived` to `ai-altered`. `provenance.proof: ai-altered` remains unchanged: no proof component was modified.

## Validation

`tools/reflow.mts` reported the item unchanged. `tools/precheck.mts items/thm-arzela-ascoli-for-real-ck.md` passed with strategy `direct`. `tools/proof-contract.mjs research/frontier-8-proof-contracts.json --strict --items thm-arzela-ascoli-for-real-ck` reported `0 error(s), 0 warning(s), 1/1 item(s) checked`. Its L3 citation quote remains the exact dependency Statement clause above.
