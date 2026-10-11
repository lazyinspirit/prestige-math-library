# Step 3a refuter

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

- Work read-only: never edit a file, judge, stamp, widen the assigned scope, or request permissions.
- Read the task and `research/frontier-44-special-representation-examples-28-six-step-step3-scope-50.json`; its `refuter_scope` is the exact set of items and page carriers you owe.
- Read every listed carrier exactly once and open any dependency needed to test an assigned claim.
- Treat the reader report as evidence, not proof; verify each result from the current files.
- Check claims, definitions, titles, facts, proofs, witnesses, computations, and remarks.
- Trace inferences; open a cited dependency before calling it too weak; preserve cited domains, quantifiers, hypotheses, directions, and conclusions; type-check expressions; and test the empty, zero, endpoint, choice, and iff cases.
- Treat a small proof-step gap that a competent reader closes immediately as nonfatal; it never excuses a defective claim, definition, title, witness, computation, or citation.
- Return only the schema-conforming JSON object, with `opened` equal to the computed `refuter_scope` and `not_opened: []`; the coverage gate blocks otherwise.
- Report in `flagged` only concrete in-scope defects, each with its exact location, defect class, evidence, and severity; `flagged: []` is the correct result of a complete skeptical read with no concrete defect.
- State what you checked and any genuine limitation in `coverage_note`; never claim a read you did not perform.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


---

# This dispatch

run: frontier-44-special-representation-examples-28-six-step
role: refuter
label: refute-50-coverage-correction-1
covers: 50
output: research/frontier-44-special-representation-examples-28-six-step-refute-50.json

# Step 3a refuter — batch `50`, run `frontier-44-special-representation-examples-28-six-step`

- This dispatch owns exactly one batch: `50`, as listed in `covers:`.
- Read `research/frontier-44-special-representation-examples-28-six-step-step3-scope-50.json`; its `refuter_scope` is the exact list of item and page carriers you owe.
- Read `research/frontier-44-special-representation-examples-28-six-step-reader-50.md` and `research/frontier-44-special-representation-examples-28-six-step-reader-findings-50.json` for context, then verify every result from the current files.
- The computed scope also includes another batch's draft producer named by a valid `in-run-dependency` reader finding. Open it as read-only work, distinguish the historical reader observation from its current proof, and flag only a defect actually present in the current carrier. The original reader obligation remains owed to Alpha even when the current source is repaired.
- Open every scoped carrier exactly once and any dependency needed to test an assigned claim.
- Follow `briefs/refuter.md`; the role is read-only and returns evidence only.
- Return only the schema-conforming JSON for `research/frontier-44-special-representation-examples-28-six-step-refute-50.json`.
- Set `batch` to the bare batch id `50`, `opened` to every scoped id exactly once, and `not_opened` to `[]`; a partial partition blocks the collect stage.
- Report in `flagged` only concrete in-scope defects, each with its exact location, defect class, evidence, and severity; an empty `flagged` array is the correct result of a complete read with no defect.
- State what you checked and any genuine limitation in `coverage_note`.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


## Native one-shot coverage correction — exact current batch50

The prior genuine completed report opened35of36assigned subjects and omitted lem-graded-algebra-isomorphism-transports-the-graded-module-category. Original report and truncated diagnostic tail remain preserved. This fresh native read-only assignment must actually open and examine the complete CURRENT36subjectscope below; never add an unread ID or claim old observations are new reading. Apply normal refuter obligations, report actual mathematical/metadata findings without repairs, and make opened/not_opened exactly partition assigned IDs. External suppliers are context, not extra assigned opened subjects. Do not narrow claims, fabricate reading, change source or edit historical reports/receipts. Original native profile/schema/resultArtifact retained.

- ariki-categorification-and-graded-decomposition-numbers — library/special-topics-in-representation-theory/ariki-categorification-and-graded-decomposition-numbers.md
- ariki-categorification-and-graded-decomposition-numbers-examples — library/special-topics-in-representation-theory/ariki-categorification-and-graded-decomposition-numbers-examples.md
- cex-specializing-v-to-one-forgets-graded-decomposition-information — items/cex-specializing-v-to-one-forgets-graded-decomposition-information.md
- cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading — items/cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading.md
- cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group — items/cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group.md
- def-graded-adjustment-polynomials-in-positive-characteristic — items/def-graded-adjustment-polynomials-in-positive-characteristic.md
- def-graded-cartan-pairing-between-projectives-and-modules — items/def-graded-cartan-pairing-between-projectives-and-modules.md
- def-graded-module-and-projective-grothendieck-groups-for-klr-towers — items/def-graded-module-and-projective-grothendieck-groups-for-klr-towers.md
- def-graded-specht-module-by-homogeneous-standard-tableaux — items/def-graded-specht-module-by-homogeneous-standard-tableaux.md
- def-integral-form-of-the-cyclotomic-hecke-klr-block — items/def-integral-form-of-the-cyclotomic-hecke-klr-block.md
- def-nondegenerate-root-of-unity-level-one-hecke-regime — items/def-nondegenerate-root-of-unity-level-one-hecke-regime.md
- def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum — items/def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum.md
- def-tableau-domination-order-garnir-tableaux-and-bricks — items/def-tableau-domination-order-garnir-tableaux-and-bricks.md
- ex-projective-versus-simple-grothendieck-classes-in-a-small-block — items/ex-projective-versus-simple-grothendieck-classes-in-a-small-block.md
- lem-degree-and-codegree-of-standard-tableaux — items/lem-degree-and-codegree-of-standard-tableaux.md
- lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels — items/lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels.md
- lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower — items/lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower.md
- lem-generic-cyclotomic-type-a-support-is-bounded-by-rank — items/lem-generic-cyclotomic-type-a-support-is-bounded-by-rank.md
- lem-generic-nondegenerate-local-inverse-tables — items/lem-generic-nondegenerate-local-inverse-tables.md
- lem-graded-algebra-isomorphism-transports-the-graded-module-category — items/lem-graded-algebra-isomorphism-transports-the-graded-module-category.md
- lem-integer-color-degenerate-hecke-klr-local-inverse-tables — items/lem-integer-color-degenerate-hecke-klr-local-inverse-tables.md
- lem-integer-cyclic-presentation-descends-the-simple-head-generator-line — items/lem-integer-cyclic-presentation-descends-the-simple-head-generator-line.md
- lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree — items/lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree.md
- lem-rational-garnir-annihilator-lines-present-the-specified-specht-generator — items/lem-rational-garnir-annihilator-lines-present-the-specified-specht-generator.md
- lem-reduction-of-characteristic-zero-simple-modules-modulo-p — items/lem-reduction-of-characteristic-zero-simple-modules-modulo-p.md
- lem-standard-fock-vectors-expand-in-the-upper-global-basis — items/lem-standard-fock-vectors-expand-in-the-upper-global-basis.md
- prop-qg8-categorification-transports-across-the-hecke-klr-bridge — items/prop-qg8-categorification-transports-across-the-hecke-klr-bridge.md
- prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux — items/prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux.md
- thm-ariki-canonical-basis-theorem-in-characteristic-zero — items/thm-ariki-canonical-basis-theorem-in-characteristic-zero.md
- thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero — items/thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero.md
- thm-graded-specht-classes-realize-standard-fock-vectors — items/thm-graded-specht-classes-realize-standard-fock-vectors.md
- thm-graded-specht-heads-classify-the-graded-simple-modules — items/thm-graded-specht-heads-classify-the-graded-simple-modules.md
- thm-graded-specht-module-has-homogeneous-tableau-basis — items/thm-graded-specht-module-has-homogeneous-tableau-basis.md
- thm-graded-specht-restriction-has-the-removable-node-filtration — items/thm-graded-specht-restriction-has-the-removable-node-filtration.md
- thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment — items/thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment.md
- thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations — items/thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations.md


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
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
