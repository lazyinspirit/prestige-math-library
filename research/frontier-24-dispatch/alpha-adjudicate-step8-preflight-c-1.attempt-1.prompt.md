# Alpha

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
group work, `research/frontier-24-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

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
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
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

run: frontier-24
role: alpha-adjudicate
label: step8-preflight-c-1

# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-24",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "c",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-quote-mismatch [thm-normalised-lu-and-ldu-factorisations-are-unique]: L1 quote does not occur in def-normalised-lu-factorisation's Definition",
      "output": "proof-contract: 136 error(s), 0 warning(s), 398/398 item(s) checked\nERROR citation-quote-mismatch [thm-normalised-lu-and-ldu-factorisations-are-unique]: L1 quote does not occur in def-normalised-lu-factorisation's Definition\nERROR citation-quote-mismatch [thm-normalised-lu-and-ldu-factorisations-are-unique]: L1 quote does not occur in def-ldu-factorisation's Definition\nERROR citation-quote-mismatch [thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero]: L1 quote does not occur in def-normalised-lu-factorisation's Definition\nERROR citation-quote-mismatch [thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors]: L1 quote does not occur in def-normalised-lu-factorisation's Definition\nERROR citation-quote-mismatch [thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity]: L1 quote does not occur in def-permutation-matrix-partial-pivoting-and-pivot-growth's Definition\nERROR citation-quote-mismatch [thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity]: L2 quote does not occur in thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors's Statement\nERROR citation-quote-mismatch [thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound]: L1 quote does not occur in def-permutation-matrix-partial-pivoting-and-pivot-growth's Definition\nERROR citation-quote-mismatch [thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]: L1 quote does not occur in def-cholesky-factorisation-with-positive-diagonal's Definition\nERROR citation-quote-mismatch [thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost]: L3 quote does not occur in def-cholesky-factorisation-with-positive-diagonal's Definition\nERROR citation-quote-mismatch [thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]: L1 quote does not occur in def-real-and-complex-givens-transformations's Definition\nERROR citation-quote-mismatch [ex-plu-factorisation-by-hand]: L1 quote does not occur in def-permutation-matrix-partial-pivoting-and-pivot-growth's Definition\nERROR citation-quote-mismatch [ex-ldu-factorisation-and-its-unique-diagonal-pivots]: L1 quote does not occur in def-ldu-factorisation's Definition\nERROR citation-quote-mismatch [ex-sparse-gaussian-elimination-can-create-fill-in]: L1 quote does not occur in def-permutation-matrix-partial-pivoting-and-pivot-growth's Definition\nERROR citation-quote-mismatch [prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures]: L3 quote does not occur in def-signed-measure's Definition\nERROR citation-quote-mismatch [lem-finite-signed-measure-sets-have-only-finite-subset-values]: L1 quote does not occur in def-signed-measure's Definition\nERROR citation-quote-mismatch [prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity]: L2 quote does not occur in def-signed-measure's Definition\nERROR citation-quote-mismatch [fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity]: L1 quote does not occur in def-signed-measure's Definition\nERROR citation-quote-mismatch [fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure]: L2 quote does not occur in def-signed-measure's Definition\nERROR citation-use-step-missing [thm-short-five-lemma-in-an-abelian-category]: L2 names missing step 1.2\nERROR citation-use-step-missing [thm-short-five-lemma-in-an-abelian-category]: L2 names missing step 2.2\nERROR citation-use-step-missing [thm-short-five-lemma-in-an-abelian-category]: L3 names missing step 1.2\nERROR citation-use-step-missing [thm-short-five-lemma-in-an-abelian-category]: L3 names missing step 2.2\nERROR citation-source-not-in-fact [thm-short-five-lemma-in-an-abelian-category]: L4 does not link [[thm-chasing-rule-the-subtraction-surrogate]]\nERROR citation-undeclared-dependency [thm-short-five-lemma-in-an-abelian-category]: L4 cites thm-chasing-rule-the-subtraction-surrogate, which is absent from deps/justified_by/forward_refs\nERROR citation-use-step-missing [thm-short-five-lemma-in-an-abelian-category]: L4 names missing step 1.2\nERROR citation-use-unmapped [thm-short-five-lemma-in-an-abelian-category]: L4 is cited by 2.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-short-five-lemma-in-an-abelian-category]: L4 -> def-equivalence-of-members needs an exact citation contract\nERROR citation-fact-uncontracted [thm-short-five-lemma-in-an-abelian-category]: L4 -> thm-member-equivalence-is-transitive needs an exact citation contract\nERROR citation-fact-uncontracted [thm-short-five-lemma-in-an-abelian-category]: L4 -> def-abelian-category needs an exact citation contract\nERROR citation-fact-uncontracted [thm-short-five-lemma-in-an-abelian-category]: L5 -> thm-the-opposite-of-an-abelian-category-is-abelian needs an exact citation contract\nERROR citation-fact-uncontracted [thm-short-five-lemma-in-an-abelian-category]: L5 -> thm-an-abelian-category-is-balanced needs an exact citation contract\nERROR step-entry-step-missing [thm-short-five-lemma-in-an-abelian-category]: derivations step-1-2 names missing 1.2\nERROR step-entry-input-omitted [thm-short-five-lemma-in-an-abelian-category]: step-2-1 omits L4, cited by 2.1\nERROR step-entry-step-missing [thm-short-five-lemma-in-an-abelian-category]: derivations step-2-2 names missing 2.2\nERROR step-entry-input-step-missing [thm-short-five-lemma-in-an-abelian-category]: step-2-2 names missing step 1.2\nERROR step-entry-input-step-missing [thm-short-five-lemma-in-an-abelian-category]: step-2-2 names missing step 1.2\nERROR step-entry-input-omitted [thm-short-five-lemma-in-an-abelian-category]: step-3-1 omits 1.1, cited by 3.1\nERROR step-entry-input-omitted [thm-short-five-lemma-in-an-abelian-category]: step-3-1 omits L5, cited by 3.1\nERROR step-entry-input-step-missing [thm-short-five-lemma-in-an-abelian-category]: step-3-1 names missing step 2.2\nERROR step-entry-input-step-missing [thm-short-five-lemma-in-an-abelian-category]: step-3-1 names missing step 2.2\nERROR step-unmapped [thm-short-five-lemma-in-an-abelian-category]: 4.1 has no derivation or routine-step contract\nERROR citation-source-not-in-fact [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: L1 does not link [[thm-snake-lemma-under-the-weaker-stacks-hypotheses]]\nERROR citation-undeclared-dependency [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: L1 cites thm-snake-lemma-under-the-weaker-stacks-hypotheses, which is absent from deps/justified_by/forward_refs\nERROR citation-use-unmapped [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: L1 is cited by 2.1 but the contract omits it\nERROR citation-use-not-supported [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: L2 is not cited by declared use 1.1\nERROR citation-use-unmapped [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: L2 is cited by 3.1 but the contract omits it\nERROR citation-fact-uncontracted [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: L1 -> thm-snake-lemma-in-an-abelian-category needs an exact citation contract\nERROR citation-fact-uncontracted [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: L3 -> def-abelian-category needs an exact citation contract\nERROR step-entry-input-omitted [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: step-1-1 omits L3, cited by 1.1\nERROR step-entry-input-omitted [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-omitted [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: step-2-1 omits L3, cited by 2.1\nERROR step-entry-input-omitted [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: step-3-1 omits L2, cited by 3.1\nERROR citation-source-not-in-fact [thm-four-lemma-in-an-abelian-category]: L4 does not link [[thm-chasing-rule-the-subtraction-surrogate]]\nERROR citation-undeclared-dependency [thm-four-lemma-in-an-abelian-category]: L4 cites thm-chasing-rule-the-subtraction-surrogate, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [thm-four-lemma-in-an-abelian-category]: L4 -> def-equivalence-of-members needs an exact citation contract\nERROR citation-fact-uncontracted [thm-four-lemma-in-an-abelian-category]: L4 -> thm-member-equivalence-is-transitive needs an exact citation contract\nERROR citation-fact-uncontracted [thm-four-lemma-in-an-abelian-category]: L4 -> def-abelian-category needs an exact citation contract\nERROR citation-source-not-in-fact [thm-weak-four-lemma-with-the-exactness-hypotheses-named]: L4 does not link [[thm-chasing-rule-the-subtraction-surrogate]]\nERROR citation-undeclared-dependency [thm-weak-four-lemma-with-the-exactness-hypotheses-named]: L4 cites thm-chasing-rule-the-subtraction-surrogate, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [thm-weak-four-lemma-with-the-exactness-hypotheses-named]: L4 -> def-equivalence-of-members needs an exact citation contract\nERROR citation-fact-uncontracted [thm-weak-four-lemma-with-the-exactness-hypotheses-named]: L4 -> thm-member-equivalence-is-transitive needs an exact citation contract\nERROR citation-fact-uncontracted [thm-weak-four-lemma-with-the-exactness-hypotheses-named]: L4 -> def-abelian-category needs an exact citation contract\nERROR citation-use-not-supported [thm-nine-lemma-in-an-abelian-category]: L1 is not cited by declared use 2.1\nERROR citation-use-not-supported [thm-nine-lemma-in-an-abelian-category]: L2 is not cited by declared use 2.1\nERROR citation-use-unmapped [thm-nine-lemma-in-an-abelian-category]: L2 is cited by 3.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-nine-lemma-in-an-abelian-category]: L3 -> thm-degenerate-exactness-criteria needs an exact citation contract\nERROR citation-fact-uncontracted [thm-nine-lemma-in-an-abelian-category]: L3 -> thm-chasing-rule-monicity-by-member-cancellation needs an exact citation contract\nERROR citation-fact-uncontracted [thm-nine-lemma-in-an-abelian-category]: L3 -> thm-chasing-rule-epimorphy-detected-by-members needs an exact citation contract\nERROR citation-fact-uncontracted [thm-nine-lemma-in-an-abelian-category]: L3 -> thm-chasing-rule-exactness-detected-by-members needs an exact citation contract\nERROR citation-fact-uncontracted [thm-nine-lemma-in-an-abelian-category]: L4 -> def-equivalence-of-members needs an exact citation contract\nERROR citation-fact-uncontracted [thm-nine-lemma-in-an-abelian-category]: L4 -> thm-member-equivalence-is-transitive needs an exact citation contract\nERROR citation-fact-uncontracted [thm-nine-lemma-in-an-abelian-category]: L4 -> def-abelian-category needs an exact citation contract\nERROR step-entry-input-omitted [thm-nine-lemma-in-an-abelian-category]: step-2-1 omits L4, cited by 2.1\nERROR step-entry-input-omitted [thm-nine-lemma-in-an-abelian-category]: step-2-1 omits L3, cited by 2.1\nERROR step-entry-input-omitted [thm-nine-lemma-in-an-abelian-category]: step-3-1 omits 1.1, cited by 3.1\nERROR step-entry-input-omitted [thm-nine-lemma-in-an-abelian-category]: step-3-1 omits L2, cited by 3.1\nERROR citation-source-not-in-fact [thm-nine-lemma-variants-by-which-rows-are-assumed-exact]: L3 does not link [[thm-chasing-rule-the-subtraction-surrogate]]\nERROR citation-undeclared-dependency [thm-nine-lemma-variants-by-which-rows-are-assumed-exact]: L3 cites thm-chasing-rule-the-subtraction-surrogate, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [thm-nine-lemma-variants-by-which-rows-are-assumed-exact]: L3 -> def-equivalence-of-members needs an exact citation contract\nERROR citation-fact-uncontracted [thm-nine-lemma-variants-by-which-rows-are-assumed-exact]: L3 -> thm-member-equivalence-is-transitive needs an exact citation contract\nERROR citation-fact-uncontracted [thm-nine-lemma-variants-by-which-rows-are-assumed-exact]: L3 -> def-abelian-category needs an exact citation contract\nERROR citation-source-not-in-fact [thm-sharp-nine-lemma]: L4 does not link [[thm-chasing-rule-the-subtraction-surrogate]]\nERROR citation-undeclared-dependency [thm-sharp-nine-lemma]: L4 cites thm-chasing-rule-the-subtraction-surrogate, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [thm-sharp-nine-lemma]: L4 -> def-equivalence-of-members needs an exact citation contract\nERROR citation-fact-uncontracted [thm-sharp-nine-lemma]: L4 -> thm-member-equivalence-is-transitive needs an exact citation contract\nERROR citation-fact-uncontracted [thm-sharp-nine-lemma]: L4 -> def-abelian-category needs an exact citation contract\nERROR citation-use-unmapped [thm-symmetric-nine-lemma]: L2 is cited by 1.1 but the contract omits it\nERROR step-entry-input-omitted [thm-symmetric-nine-lemma]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [thm-symmetric-nine-lemma]: step-2-1 omits L3, cited by 2.1\nERROR step-entry-input-omitted [lem-chart-bump-at-a-point-with-prescribed-support]: step-1-1 omits A1, cited by 1.1\nERROR step-entry-input-omitted [lem-chart-bump-at-a-point-with-prescribed-support]: step-2-1 omits A1, cited by 2.1\nERROR citation-use-not-supported [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: L1 is not cited by declared use 2.1\nERROR citation-use-unmapped [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: L1 is cited by 3.1 but the contract omits it\nERROR citation-use-not-supported [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: L2 is not cited by declared use 2.1\nERROR citation-use-unmapped [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: L2 is cited by 3.1 but the contract omits it\nERROR citation-use-not-supported [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: L3 is not cited by declared use 2.1\nERROR citation-use-unmapped [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: L3 is cited by 3.1 but the contract omits it\nERROR citation-use-not-supported [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: L3 is not cited by declared use 2.1\nERROR citation-use-unmapped [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: L3 is cited by 3.1 but the contract omits it\nERROR step-entry-input-omitted [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: step-3-1 omits L3, cited by 3.1\nERROR step-entry-input-omitted [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: step-3-1 omits L2, cited by 3.1\nERROR step-entry-input-omitted [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: step-3-1 omits L1, cited by 3.1\nERROR step-entry-input-omitted [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: step-4-1 omits 2.1, cited by 4.1\nERROR step-unmapped [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]: 5.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation]: F1 quote does not occur in def-contact-equivalence-of-smooth-curves-at-a-point's Definition\nERROR citation-quote-mismatch [lem-curve-velocity-depends-only-on-the-contact-class]: F2 quote does not occur in def-contact-equivalence-of-smooth-curves-at-a-point's Definition\nERROR citation-quote-mismatch [thm-coordinate-formula-for-the-differential-of-a-function]: F1 quote does not occur in def-differential-of-a-smooth-real-valued-function's Definition\nERROR citation-use-not-supported [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: L1 is not cited by declared use 2.1\nERROR citation-use-unmapped [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: L1 is cited by 1.1 but the contract omits it\nERROR citation-use-unmapped [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: L1 is cited by 3.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: L2 -> thm-second-countable-implies-lindelof needs an exact citation contract\nERROR citation-fact-uncontracted [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: F3 -> def-smooth-manifold needs an exact citation contract\nERROR step-entry-input-omitted [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: step-1-1 omits L1, cited by 1.1\nERROR step-entry-input-omitted [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: step-2-1 omits F3, cited by 2.1\nERROR step-entry-input-omitted [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: step-3-1 omits L1, cited by 3.1\nERROR step-entry-input-omitted [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: step-3-1 omits 1.1, cited by 3.1\nERROR step-entry-input-omitted [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: step-3-1 omits 2.2, cited by 3.1\nERROR step-unmapped [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: 2.2 has no derivation or routine-step contract\nERROR citation-quote-mismatch [thm-coordinate-differentials-form-the-dual-cotangent-basis]: F1 quote does not occur in def-differential-of-a-smooth-real-valued-function's Definition\nERROR citation-use-not-supported [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: L2 is not cited by declared use 2.1\nERROR citation-use-unmapped [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: L2 is cited by 1.1 but the contract omits it\nERROR citation-use-unmapped [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: L2 is cited by 3.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: L3 -> thm-second-countable-implies-lindelof needs an exact citation contract\nERROR citation-fact-uncontracted [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: F2 -> def-smooth-manifold needs an exact citation contract\nERROR step-entry-input-omitted [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: step-2-1 omits F2, cited by 2.1\nERROR step-entry-input-omitted [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: step-3-1 omits L2, cited by 3.1\nERROR step-entry-input-omitted [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: step-3-1 omits 1.1, cited by 3.1\nERROR step-entry-input-omitted [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: step-3-1 omits 2.2, cited by 3.1\nERROR step-unmapped [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: 2.2 has no derivation or routine-step contract\nERROR citation-use-unmapped [ex-the-tangent-space-of-the-sphere-from-curve-velocities]: L1 is cited by 2.1 but the contract omits it\nERROR step-entry-input-omitted [ex-the-tangent-space-of-the-sphere-from-curve-velocities]: step-2-1 omits L1, cited by 2.1\nERROR citation-fact-uncontracted [ex-the-tangent-bundle-of-the-circle-is-a-cylinder]: L2 -> thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors needs an exact citation contract\nERROR step-entry-input-omitted [ex-the-tangent-bundle-of-the-circle-is-a-cylinder]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [ex-the-tangent-bundle-of-the-circle-is-a-cylinder]: step-2-1 omits L2, cited by 2.1\nERROR citation-quote-mismatch [ex-extended-dfa-transition-respects-concatenation]: L2 quote does not occur in def-dfa-acceptance-and-recognized-language's Definition\n",
      "named_ids": [
        "thm-normalised-lu-and-ldu-factorisations-are-unique",
        "thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero",
        "thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors",
        "thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity",
        "thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound",
        "thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique",
        "thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost",
        "thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries",
        "ex-plu-factorisation-by-hand",
        "ex-ldu-factorisation-and-its-unique-diagonal-pivots",
        "ex-sparse-gaussian-elimination-can-create-fill-in",
        "prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures",
        "lem-finite-signed-measure-sets-have-only-finite-subset-values",
        "prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity",
        "fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity",
        "fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure",
        "thm-short-five-lemma-in-an-abelian-category",
        "thm-chasing-rule-the-subtraction-surrogate",
        "cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake",
        "thm-snake-lemma-under-the-weaker-stacks-hypotheses",
        "thm-four-lemma-in-an-abelian-category",
        "thm-weak-four-lemma-with-the-exactness-hypotheses-named",
        "thm-nine-lemma-in-an-abelian-category",
        "thm-nine-lemma-variants-by-which-rows-are-assumed-exact",
        "thm-sharp-nine-lemma",
        "thm-symmetric-nine-lemma",
        "lem-chart-bump-at-a-point-with-prescribed-support",
        "lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking",
        "lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation",
        "lem-curve-velocity-depends-only-on-the-contact-class",
        "thm-coordinate-formula-for-the-differential-of-a-function",
        "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
        "thm-coordinate-differentials-form-the-dual-cotangent-basis",
        "thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
        "ex-the-tangent-space-of-the-sphere-from-curve-velocities",
        "ex-the-tangent-bundle-of-the-circle-is-a-cylinder",
        "ex-extended-dfa-transition-respects-concatenation"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [thm-zero-divisor-theorem-on-plane-domains]: thm-zero-divisor-theorem-on-plane-domains is critical risk and lacks a complete Alpha risk_review",
      "output": "MODERATE 3 [lem-maximal-algebraically-independent-subset-is-a-transcendence-basis] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-transcendence-basis-exchange] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [cor-transcendence-degree-tower-additivity] 1:2 cited facts\nMODERATE 4 [lem-noether-normalisation-nonzero-polynomial-made-monic] 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 4 [lem-noether-normalisation-finite-field-exponent-substitution] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [lem-noether-normalisation-one-relation-reduction] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 13 [lem-noether-normalisation-inductive-integrality] 2:5 declared dependencies; 2:5 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 5 [cor-noether-normalisation-module-finiteness] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 7 [cor-noether-normalisation-dimension-lower-bound] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 1 [lem-zariski-lemma-one-variable-localisation-not-finite] 1:2 cited facts\nORDINARY 2 [lem-zariski-lemma-localised-polynomial-ring-not-field] 2:boundary-sensitive language\nHIGH 7 [lem-zariski-lemma-transcendence-basis-reduction] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-field-finite-type-over-a-field-is-a-finite-extension] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nCRITICAL 10 [lem-evaluation-ideal-is-maximal] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 7 [cor-weak-nullstellensatz-algebraically-closed-coordinate-form] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus] 2:boundary-sensitive language\nHIGH 5 [lem-rabinowitsch-unit-ideal-consequence] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [lem-rabinowitsch-substitution-clears-denominators] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-strong-nullstellensatz-two-inclusions] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [lem-affine-algebra-points-as-k-algebra-maps] 2:quotient or equivalence-class construction\nHIGH 6 [cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-vanishing-ideal-is-radical] no signals\nMODERATE 3 [lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [cor-affine-radical-ideal-point-separation] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-jacobson-ring-prime-as-intersection-of-maximals] 3:biconditional / both-direction claim\nHIGH 6 [lem-finite-type-jacobson-residue-extension] 2:5 declared dependencies; 2:5 cited facts; 2:quotient or equivalence-class construction\nHIGH 7 [cor-affine-closed-points-detect-radicals] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [ex-transcendence-basis-and-algebraic-remainder] no signals\nHIGH 7 [ex-noether-normalisation-triangular-change] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 0 [ex-noether-normalisation-finite-field-weight-choice] no signals\nORDINARY 2 [ex-zariski-lemma-denominator-obstruction] 2:boundary-sensitive language\nMODERATE 3 [ex-weak-nullstellensatz-over-real-numbers] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-strong-nullstellensatz-nonradical-ideal] 2:boundary-sensitive language\nMODERATE 3 [ex-rabinowitsch-identity-explicit] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [prop-induced-module-decomposes-over-a-left-transversal] 1:3 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [cor-dimension-of-an-induced-finite-dimensional-representation] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-frobenius-formula-for-induced-characters] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules] 1:3 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [cor-frobenius-reciprocity-for-complex-characters] 1:3 cited facts; 2:induction, recursion, or minimality\nHIGH 5 [thm-transitivity-of-induction-for-finite-groups] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings] 2:5 declared dependencies; 2:5 cited facts; 2:induction, recursion, or minimality\nMODERATE 3 [cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction] 1:3 cited facts; 2:induction, recursion, or minimality\nMODERATE 3 [thm-mackey-double-coset-formula-for-restricting-an-induced-character] 1:3 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-mackeys-irreducibility-criterion-for-finite-groups] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [prop-class-sums-act-by-central-character-scalars] 1:3 cited facts\nMODERATE 3 [thm-central-characters-are-algebraic-integers] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 12 [thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order] 3:7 declared dependencies; 2:7 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 12 [thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [cor-a-finite-group-with-an-irreducible-complex-character-of-degree-greater-than-one-is-nonabelian] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant] 1:3 cited facts; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 6 [thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nCRITICAL 13 [thm-burnsides-p-a-q-b-theorem] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters] 1:2 cited facts; 2:induction, recursion, or minimality\nCRITICAL 10 [ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 5 [ex-frobenius-reciprocity-for-the-two-preceding-s-three-inductions] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [fs-an-induced-irreducible-complex-character-is-always-irreducible] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [fs-induction-followed-by-restriction-is-the-identity-on-complex-representations] 1:2 cited facts; 2:induction, recursion, or minimality\nORDINARY 0 [fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible] no signals\nORDINARY 0 [fs-every-divisor-of-the-group-order-is-an-irreducible-character-degree] no signals\nHIGH 6 [thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [thm-normalised-lu-and-ldu-factorisations-are-unique] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-block-lu-factorisation-via-an-invertible-leading-block] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:induction, recursion, or minimality\nHIGH 5 [thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 9 [thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 14 [thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 1:finite countermodel smoke test selected\nHIGH 6 [thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number] 2:6 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [cex-invertible-matrix-can-fail-unpivoted-lu-at-the-first-pivot] 3:biconditional / both-direction claim\nORDINARY 1 [ex-plu-factorisation-by-hand] 1:2 cited facts\nORDINARY 1 [ex-ldu-factorisation-and-its-unique-diagonal-pivots] 1:2 cited facts\nORDINARY 1 [ex-block-lu-factorisation-and-a-schur-complement-solve] 1:2 cited facts\nMODERATE 4 [ex-cholesky-factorisation-and-solve] 1:2 cited facts; 3:biconditional / both-direction claim\nHIGH 5 [cex-indefinite-and-semidefinite-matrices-fail-positive-diagonal-cholesky] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 0 [ex-householder-qr-factorisation-by-hand] no signals\nMODERATE 3 [ex-givens-qr-on-a-sparse-matrix] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-reduced-qr-least-squares-versus-normal-equations] no signals\nORDINARY 2 [ex-sparse-gaussian-elimination-can-create-fill-in] 2:boundary-sensitive language\nMODERATE 3 [prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [lem-finite-signed-measure-sets-have-only-finite-subset-values] 2:boundary-sensitive language\nCRITICAL 9 [prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nHIGH 7 [lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-hahn-decomposition-for-signed-measures] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-jordan-decomposition-for-signed-measures] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [thm-continuity-from-below-and-above-for-signed-measures] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-jordan-parts-and-total-variation-formulas-for-signed-measures] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 7 [thm-total-variation-of-a-complex-measure-is-finite] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-total-variation-is-a-measure] 2:4 declared dependencies; 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 7 [prop-simple-integrals-are-bounded-by-total-variation] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-l-one-functions-admit-dominated-complex-simple-approximations] 2:6 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 3 [thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation] 3:12 declared dependencies; 2:8 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-finite-total-variation-signed-measures-form-a-real-normed-space] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-finite-total-variation-signed-measures-are-complete] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-an-atomic-signed-measure-on-z-has-total-variation-three] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 1 [ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form] 1:2 cited facts\nORDINARY 2 [ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi] 2:boundary-sensitive language\nMODERATE 4 [cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [cex-total-variation-can-exceed-the-absolute-value-of-the-set-value] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity] 2:boundary-sensitive language\nORDINARY 2 [fs-a-hahn-decomposition-is-unique] 2:boundary-sensitive language\nHIGH 5 [fs-total-variation-always-equals-the-absolute-value-of-the-set-value] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-finite-values-and-finite-additivity-force-finite-total-variation] 2:boundary-sensitive language\nORDINARY 2 [fs-finite-partitions-always-suffice-for-complex-total-variation] 2:boundary-sensitive language\nHIGH 5 [lem-riemann-map-extremal-family-is-nonempty] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-riemann-map-extremal-derivatives-are-positive-and-bounded] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [lem-riemann-map-extremal-derivative-is-attained] 2:6 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-riemann-map-extremizer-is-univalent] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [lem-riemann-map-extremizer-is-surjective] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-riemann-mapping-theorem] 3:7 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [cor-uniqueness-of-the-normalized-riemann-map] 1:3 cited facts\nCRITICAL 8 [thm-area-theorem-for-exterior-univalent-functions] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-bieberbach-second-coefficient-bound] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [thm-koebe-one-quarter-theorem] no signals\nMODERATE 3 [thm-koebe-distortion-theorem] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-koebe-growth-theorem] 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nMODERATE 3 [cor-quarter-disc-inclusion-for-univalent-functions] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-normalized-riemann-map-for-the-upper-half-plane-at-i] 1:2 cited facts\nORDINARY 2 [ex-normalized-riemann-map-for-a-horizontal-strip] 2:4 declared dependencies\nORDINARY 2 [ex-normalized-riemann-map-for-a-sector-with-branch-choice] 2:4 declared dependencies\nMODERATE 4 [ex-normalized-riemann-map-for-the-slit-plane] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [ex-the-unit-disc-extremal-problem-is-solved-by-the-identity] no signals\nORDINARY 2 [ex-koebe-function-realizes-the-quarter-disc-bound] 2:boundary-sensitive language\nMODERATE 3 [cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-riemann-map-is-unique-without-normalization] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [fs-conformal-equivalence-preserves-euclidean-area] no signals\nORDINARY 0 [lem-bloch-rescaling-at-an-almost-maximal-derivative] no signals\nHIGH 5 [lem-quantitative-univalence-from-controlled-derivative] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-bloch-theorem] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [thm-landau-theorem] 2:boundary-sensitive language\nHIGH 5 [lem-holomorphic-logarithms-for-two-omitted-values] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [thm-schottky-theorem] 3:7 declared dependencies; 2:7 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [thm-montel-caratheodory-theorem] 2:6 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-little-picard-theorem] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [lem-two-omitted-values-rule-out-an-essential-singularity] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [thm-great-picard-theorem] 2:boundary-sensitive language\nMODERATE 3 [cor-meromorphic-little-picard-theorem] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-meromorphic-great-picard-theorem] 1:3 cited facts\nORDINARY 0 [ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four] no signals\nORDINARY 2 [ex-schottky-bound-for-a-map-with-center-value-one-half] 2:boundary-sensitive language\nHIGH 5 [ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-exp-one-over-z-shows-great-picard-is-sharp] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-little-picard-needs-a-boundedness-hypothesis] 2:boundary-sensitive language\nORDINARY 2 [fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value] 2:boundary-sensitive language\nCRITICAL 8 [lem-grid-cycle-for-runge-approximation] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-cauchy-riemann-sums-give-rational-approximation] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [lem-runge-pole-pushing-lemma] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-runge-approximation-with-prescribed-poles] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cor-runge-polynomial-approximation] 2:boundary-sensitive language\nHIGH 5 [thm-runge-approximation-on-plane-domains] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-mittag-leffler-theorem-on-the-plane] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-mittag-leffler-theorem-on-plane-domains] 1:3 cited facts\nCRITICAL 8 [thm-mittag-leffler-expansion-of-pi-cotangent] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cor-partial-fraction-expansion-of-pi-squared-cosecant-squared] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-zero-divisor-theorem-on-plane-domains] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [cor-meromorphic-functions-on-a-domain-form-a-field] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-one-over-z-not-polynomially-approximable-on-unit-circle] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [ex-pole-pushing-along-three-discs] 2:boundary-sensitive language\nORDINARY 0 [ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared] no signals\nORDINARY 2 [ex-mittag-leffler-function-with-double-poles-at-the-integers] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [fs-runge-gives-polynomial-approximation-on-any-compact-set] 2:boundary-sensitive language\nORDINARY 2 [cex-annulus-needs-a-pole-in-each-bounded-complementary-component] 2:analytic limiting/completeness language\nORDINARY 2 [fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts] 2:analytic limiting/completeness language\nMODERATE 4 [lem-gamma-integral-converges-locally-uniformly] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-euler-gamma-function-is-holomorphic] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [thm-complex-gamma-restricts-to-the-real-gamma-function] 2:4 declared dependencies; 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [thm-gamma-functional-equation] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cor-gamma-factorial-values] 2:analytic limiting/completeness language\nORDINARY 1 [thm-gamma-meromorphic-continuation] 1:2 cited facts\nMODERATE 3 [thm-euler-limit-formula-for-gamma] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-gamma-weierstrass-product] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cor-gamma-function-has-no-zeros] 2:boundary-sensitive language\nMODERATE 3 [thm-euler-reflection-formula] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-gamma-one-half-value] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-beta-gamma-identity] 3:8 declared dependencies; 2:8 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [thm-gauss-multiplication-formula] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 0 [thm-legendre-duplication-formula] no signals\nHIGH 5 [thm-stirling-formula-gamma] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-hankel-representation-for-reciprocal-gamma] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma] 1:2 cited facts\nMODERATE 3 [ex-gamma-values-at-half-integers-and-negative-half-integers] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-residue-of-gamma-at-minus-two] no signals\nMODERATE 3 [ex-beta-one-half-one-half-equals-pi] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-reflection-formula-at-one-half] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-stirling-approximation-to-ten-factorial] 1:2 cited facts\nORDINARY 0 [cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values] no signals\nORDINARY 0 [fs-gamma-is-entire] no signals\nHIGH 7 [thm-short-five-lemma-in-an-abelian-category] 3:9 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible] 1:2 cited facts\nHIGH 5 [thm-short-five-lemma-by-pullback-without-members] 2:5 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps\nCRITICAL 10 [thm-the-connecting-morphism-exists-and-is-unique] 3:8 declared dependencies; 2:7 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [thm-snake-lemma-in-an-abelian-category] 3:7 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [thm-snake-lemma-under-the-weaker-stacks-hypotheses] 3:9 declared dependencies; 2:8 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nORDINARY 1 [thm-naturality-of-the-connecting-morphism] 1:2 cited facts\nORDINARY 1 [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake] 1:3 cited facts\nHIGH 6 [thm-four-lemma-in-an-abelian-category] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-weak-four-lemma-with-the-exactness-hypotheses-named] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nORDINARY 0 [thm-sharp-five-lemma-in-an-abelian-category] no signals\nMODERATE 3 [thm-five-lemma-in-an-abelian-category] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-half-nine-lemma] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-nine-lemma-in-an-abelian-category] 3:9 declared dependencies; 2:9 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 8 [thm-nine-lemma-variants-by-which-rows-are-assumed-exact] 3:8 declared dependencies; 2:8 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nHIGH 7 [thm-sharp-nine-lemma] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-symmetric-nine-lemma] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-the-nine-lemma-follows-from-the-snake-lemma] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [thm-the-splitting-lemma-follows-from-the-nine-lemma] 1:2 cited facts\nHIGH 6 [thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma] 2:5 declared dependencies; 2:5 cited facts; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-the-pullback-and-pushout-theorems] 2:5 declared dependencies; 2:5 cited facts\nHIGH 6 [thm-the-diagram-lemmas-hold-in-the-opposite-category] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-an-exact-functor-transports-every-diagram-lemma] 3:9 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-five-lemma-for-a-morphism-of-long-exact-sequences] 1:2 cited facts\nMODERATE 3 [fs-the-connecting-morphism-depends-on-the-choices-made-in-its-construction] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-the-five-lemma-needs-only-that-the-two-middle-maps-are-monic] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-the-middle-nine-lemma-holds-without-assuming-the-composite-is-zero] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-the-snake-lemma-is-just-a-pair-of-short-exact-kernel-and-cokernel-rows] 1:3 cited facts\nORDINARY 0 [fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem] no signals\nORDINARY 1 [ex-the-published-module-five-lemma-as-an-instance] 1:2 cited facts\nORDINARY 1 [ex-the-published-module-snake-lemma-as-an-instance] 1:2 cited facts\nMODERATE 3 [ex-the-published-module-four-lemma-as-an-instance] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups] 1:3 cited facts\nHIGH 5 [ex-the-snake-lemma-applied-to-multiplication-by-an-integer] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [cex-a-snake-configuration-whose-kernel-row-is-not-short-exact] 1:3 cited facts\nORDINARY 1 [ex-the-short-five-lemma-chased-with-members] 1:2 cited facts\nHIGH 5 [lem-the-boundary-subobject-factors-through-the-cycle-subobject] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 2 [prop-identities-and-composites-of-chain-maps-are-chain-maps] 2:boundary-sensitive language\nHIGH 6 [lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-a-chain-map-induces-a-well-defined-map-on-homology] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [prop-homology-respects-identities-and-composition] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 6 [thm-homology-is-an-additive-functor] 2:6 declared dependencies; 2:6 cited facts; 2:quotient or equivalence-class construction\nORDINARY 1 [prop-isomorphisms-of-complexes-are-quasi-isomorphisms] 1:2 cited facts\nHIGH 6 [prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 7 [lem-the-differential-descends-to-a-quotient-complex] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [lem-the-kernel-of-a-chain-map-is-computed-degreewise] 1:2 cited facts\nMODERATE 3 [lem-the-cokernel-of-a-chain-map-is-computed-degreewise] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 1 [prop-images-and-coimages-of-chain-maps-are-computed-degreewise] 1:3 cited facts\nMODERATE 3 [thm-the-category-of-complexes-in-an-additive-category-is-additive] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-the-category-of-complexes-in-an-abelian-category-is-abelian] 2:5 declared dependencies; 2:5 cited facts\nHIGH 6 [cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim\nCRITICAL 10 [prop-a-subcomplex-is-the-kernel-of-its-quotient-map] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-the-first-isomorphism-theorem-for-complexes] 1:3 cited facts; 2:quotient or equivalence-class construction\nORDINARY 1 [prop-finite-biproducts-of-complexes-are-computed-degreewise] 1:2 cited facts\nHIGH 5 [prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-an-exact-functor-commutes-with-homology] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative] 1:3 cited facts\nCRITICAL 9 [thm-euler-poincare-formula-for-finite-free-complexes] 3:13 declared dependencies; 2:12 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-any-sequence-of-morphisms-is-a-chain-complex] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-a-chain-map-is-determined-by-its-maps-on-homology] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [fs-an-additive-functor-commutes-with-homology] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [ex-the-zero-differential-complex-has-homology-equal-to-each-term] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [ex-a-two-term-complex-and-its-kernel-and-cokernel-homology] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [ex-the-multiplication-by-m-complex-computes-a-cyclic-group] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-an-exact-short-sequence-as-an-acyclic-three-term-complex] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-a-split-exact-complex-contracts-degree-by-degree] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-a-chain-map-computed-on-cycles-boundaries-and-homology] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [cex-a-quasi-isomorphism-that-is-not-an-isomorphism-of-complexes] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-two-distinct-chain-maps-inducing-the-same-homology-map] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-a-subcomplex-and-its-quotient-complex] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-euler-poincare-for-a-finite-complex] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-exponential-decay-dominates-every-inverse-power] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-the-standard-flat-function-is-smooth-and-flat-at-zero] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [lem-smooth-bump-between-concentric-euclidean-balls] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [lem-euclidean-bump-for-a-compact-set-inside-an-open-set] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [lem-chart-bump-at-a-point-with-prescribed-support] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [lem-manifold-bump-for-a-compact-set-inside-an-open-set] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [lem-locally-finite-families-of-supports-have-locally-finite-cozero-families] no signals\nMODERATE 3 [thm-a-locally-finite-sum-of-smooth-functions-is-smooth] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [lem-normalizing-a-locally-finite-positive-smooth-family] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking] 2:5 declared dependencies; 2:4 cited facts\nMODERATE 4 [thm-smooth-partitions-of-unity-exist-on-manifolds] 2:5 declared dependencies; 2:4 cited facts\nORDINARY 0 [cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover] no signals\nMODERATE 3 [thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [cor-smooth-functions-separate-points-from-closed-sets] 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [lem-smooth-extension-from-a-closed-neighbourhood] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [lem-every-manifold-has-a-compact-exhaustion] no signals\nORDINARY 1 [thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function] 1:3 cited facts\nHIGH 6 [cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cor-every-open-subset-of-a-manifold-is-the-cozero-set-of-a-smooth-function] 2:boundary-sensitive language\nORDINARY 1 [prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains] 1:2 cited facts\nHIGH 5 [fs-the-piecewise-function-exp-minus-one-over-t-is-analytic-at-zero] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [fs-every-continuous-partition-of-unity-on-a-smooth-manifold-is-smooth] no signals\nORDINARY 0 [fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth] no signals\nORDINARY 2 [fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff] 2:boundary-sensitive language\nORDINARY 0 [fs-every-smooth-manifold-is-compact] no signals\nORDINARY 0 [fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums] no signals\nORDINARY 2 [ex-the-standard-compactly-supported-bump-on-the-line] 2:boundary-sensitive language\nORDINARY 0 [ex-a-radial-bump-on-euclidean-space] no signals\nORDINARY 2 [ex-a-two-function-smooth-partition-on-the-circle] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces] no signals\nORDINARY 0 [ex-a-proper-smooth-exhaustion-of-euclidean-space] no signals\nORDINARY 2 [ex-a-proper-smooth-exhaustion-of-the-open-unit-ball] 2:boundary-sensitive language\nORDINARY 2 [ex-a-smooth-function-with-a-prescribed-closed-zero-set] 2:boundary-sensitive language\nORDINARY 0 [cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous] no signals\nORDINARY 2 [cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth] 2:boundary-sensitive language\nORDINARY 0 [lem-equality-near-a-point-is-an-equivalence-relation-on-local-smooth-functions] no signals\nMODERATE 3 [lem-algebra-operations-on-smooth-germs-are-representative-independent] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [lem-a-derivation-annihilates-constant-germs] no signals\nMODERATE 3 [lem-coordinate-derivations-are-well-defined-derivations] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [lem-first-order-hadamard-factorization-near-a-point] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-coordinate-derivations-form-a-basis-of-the-tangent-space] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [cor-the-tangent-space-of-an-n-manifold-has-dimension-n] no signals\nORDINARY 0 [thm-change-of-coordinate-formula-for-tangent-bases] no signals\nMODERATE 3 [lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [lem-curve-velocity-depends-only-on-the-contact-class] 1:3 cited facts\nMODERATE 3 [thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors] 2:4 declared dependencies; 1:2 cited facts\nORDINARY 0 [cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve] no signals\nORDINARY 1 [lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ] 1:2 cited facts\nMODERATE 3 [lem-the-differential-sends-derivations-to-derivations-and-is-linear] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [thm-coordinate-formula-for-the-differential] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-the-differential-sends-curve-velocities-to-composite-curve-velocities] 1:2 cited facts\nORDINARY 0 [thm-chain-rule-for-differentials-of-smooth-maps] no signals\nORDINARY 0 [cor-the-differential-of-a-diffeomorphism-is-an-isomorphism] no signals\nORDINARY 1 [thm-coordinate-formula-for-the-differential-of-a-function] 1:2 cited facts\nMODERATE 3 [prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses] 1:3 cited facts\nHIGH 6 [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 2 [prop-the-tangent-bundle-projection-and-zero-section-are-smooth] 2:boundary-sensitive language\nORDINARY 1 [thm-the-global-differential-of-a-smooth-map-is-smooth] 1:3 cited facts\nMODERATE 3 [prop-the-tangent-bundle-construction-is-functorial] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-coordinate-differentials-form-the-dual-cotangent-basis] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian] 1:3 cited facts\nHIGH 6 [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-cotangent-pullback-is-contravariantly-functorial] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-canonical-tangent-and-cotangent-splittings-for-products] 2:5 declared dependencies; 2:4 cited facts\nORDINARY 0 [fs-a-tangent-vector-at-p-is-a-vector-whose-tail-is-drawn-at-p] no signals\nORDINARY 2 [fs-the-tangent-space-is-defined-only-after-embedding-the-manifold-in-euclidean-space] 2:boundary-sensitive language\nORDINARY 0 [fs-every-linear-functional-on-smooth-germs-is-a-tangent-vector] no signals\nORDINARY 0 [fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple] no signals\nORDINARY 1 [fs-the-differential-of-a-smooth-map-is-its-jacobian-matrix] 1:2 cited facts\nORDINARY 0 [fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle] no signals\nORDINARY 1 [ex-the-tangent-space-of-euclidean-space] 1:2 cited facts\nORDINARY 0 [ex-tangent-basis-change-between-cartesian-and-polar-coordinates] no signals\nORDINARY 2 [ex-the-differential-of-a-map-between-spheres-in-stereographic-coordinates] 2:boundary-sensitive language\nORDINARY 0 [ex-the-tangent-space-of-the-sphere-from-curve-velocities] no signals\nMODERATE 3 [ex-the-tangent-bundle-of-the-circle-is-a-cylinder] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-the-tangent-bundle-of-euclidean-space-is-trivial] 2:boundary-sensitive language\nORDINARY 2 [ex-the-cotangent-pullback-of-a-coordinate-one-form] 2:boundary-sensitive language\nORDINARY 2 [ex-the-differential-of-a-constant-map-is-zero] 2:boundary-sensitive language\nORDINARY 0 [cex-polar-coordinates-do-not-give-a-chart-at-the-origin] no signals\nORDINARY 0 [cex-a-chart-dependent-coordinate-vector-is-not-an-intrinsic-tangent-vector] no signals\nHIGH 6 [thm-existence-and-uniqueness-of-extended-dfa-transition] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [lem-extended-dfa-transition-respects-concatenation] 2:induction, recursion, or minimality\nMODERATE 4 [prop-every-finite-language-is-regular] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [thm-product-dfa-for-union-and-intersection] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [thm-complementing-accept-states-complements-the-language] 1:2 cited facts\nORDINARY 1 [cor-regular-languages-are-closed-under-boolean-operations] 1:3 cited facts\nMODERATE 3 [thm-dfa-for-language-difference] 2:4 declared dependencies; 1:3 cited facts\nMODERATE 4 [lem-removing-unreachable-states-preserves-language] 1:2 cited facts; 3:biconditional / both-direction claim\nHIGH 5 [prop-published-prefix-automata-extend-to-factor-avoidance-dfas] 2:4 declared dependencies; 1:3 cited facts; 2:induction, recursion, or minimality\nORDINARY 2 [fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality] 2:boundary-sensitive language\nMODERATE 3 [fs-complementing-a-dfa-complements-its-transition-graph] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-extended-dfa-transition-respects-concatenation] 1:2 cited facts\nORDINARY 0 [ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa] no signals\nORDINARY 2 [cex-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality] 2:boundary-sensitive language\nCRITICAL 10 [thm-derivation-parse-tree-correspondence] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [thm-elimination-of-useless-symbols] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-elimination-of-epsilon-productions] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-elimination-of-unit-productions] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [thm-chomsky-normal-form] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-gnf-substitution-step-preserves-language] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-gnf-left-recursion-elimination-preserves-language] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-greibach-normal-form] 2:4 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality\nORDINARY 1 [thm-cfl-closure-under-union-concatenation-star-and-homomorphism] 1:2 cited facts\nMODERATE 4 [fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [fs-cnf-preserves-epsilon-without-an-exception] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-elimination-of-useless-symbols] 2:boundary-sensitive language\nORDINARY 2 [ex-cfl-closure-under-union-concatenation-star-and-homomorphism] 2:boundary-sensitive language\nMODERATE 4 [cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nrisk-report: 5 error(s), 398 item(s) routed\nERROR risk-review-missing [thm-zero-divisor-theorem-on-plane-domains]: thm-zero-divisor-theorem-on-plane-domains is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-gamma-weierstrass-product]: thm-gamma-weierstrass-product is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-nine-lemma-in-an-abelian-category]: thm-nine-lemma-in-an-abelian-category is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-maximal-algebraically-independent-subset-is-a-transcendence-basis",
        "lem-transcendence-basis-exchange",
        "cor-transcendence-degree-tower-additivity",
        "lem-noether-normalisation-nonzero-polynomial-made-monic",
        "lem-noether-normalisation-finite-field-exponent-substitution",
        "lem-noether-normalisation-one-relation-reduction",
        "lem-noether-normalisation-inductive-integrality",
        "cor-noether-normalisation-module-finiteness",
        "cor-noether-normalisation-dimension-lower-bound",
        "lem-zariski-lemma-one-variable-localisation-not-finite",
        "lem-zariski-lemma-localised-polynomial-ring-not-field",
        "lem-zariski-lemma-transcendence-basis-reduction",
        "cor-field-finite-type-over-a-field-is-a-finite-extension",
        "lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite",
        "lem-evaluation-ideal-is-maximal",
        "cor-weak-nullstellensatz-algebraically-closed-coordinate-form",
        "lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus",
        "lem-rabinowitsch-unit-ideal-consequence",
        "lem-rabinowitsch-substitution-clears-denominators",
        "cor-strong-nullstellensatz-two-inclusions",
        "lem-affine-algebra-points-as-k-algebra-maps",
        "cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field",
        "lem-vanishing-ideal-is-radical",
        "lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical",
        "cor-affine-radical-ideal-point-separation",
        "lem-jacobson-ring-prime-as-intersection-of-maximals",
        "lem-finite-type-jacobson-residue-extension",
        "cor-affine-closed-points-detect-radicals",
        "ex-transcendence-basis-and-algebraic-remainder",
        "ex-noether-normalisation-triangular-change",
        "ex-noether-normalisation-finite-field-weight-choice",
        "ex-zariski-lemma-denominator-obstruction",
        "ex-weak-nullstellensatz-over-real-numbers",
        "ex-strong-nullstellensatz-nonradical-ideal",
        "ex-rabinowitsch-identity-explicit",
        "prop-induced-module-decomposes-over-a-left-transversal",
        "cor-dimension-of-an-induced-finite-dimensional-representation",
        "thm-frobenius-formula-for-induced-characters",
        "thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets",
        "thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules",
        "cor-frobenius-reciprocity-for-complex-characters",
        "thm-transitivity-of-induction-for-finite-groups",
        "prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings",
        "cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction",
        "thm-mackey-double-coset-formula-for-restricting-an-induced-character",
        "thm-mackeys-irreducibility-criterion-for-finite-groups",
        "prop-class-sums-act-by-central-character-scalars",
        "thm-central-characters-are-algebraic-integers",
        "thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order",
        "thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center",
        "cor-a-finite-group-with-an-irreducible-complex-character-of-degree-greater-than-one-is-nonabelian",
        "lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant",
        "thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action",
        "thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup",
        "thm-burnsides-p-a-q-b-theorem",
        "ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character",
        "ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters",
        "ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character",
        "ex-frobenius-reciprocity-for-the-two-preceding-s-three-inductions",
        "ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence",
        "fs-an-induced-irreducible-complex-character-is-always-irreducible",
        "fs-induction-followed-by-restriction-is-the-identity-on-complex-representations",
        "fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible",
        "fs-every-divisor-of-the-group-order-is-an-irreducible-character-degree",
        "thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost",
        "thm-normalised-lu-and-ldu-factorisations-are-unique",
        "thm-block-lu-factorisation-via-an-invertible-leading-block",
        "thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero",
        "thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors",
        "thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity",
        "thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound",
        "thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique",
        "thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots",
        "thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost",
        "thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries",
        "thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts",
        "thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model",
        "thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block",
        "thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number",
        "cex-invertible-matrix-can-fail-unpivoted-lu-at-the-first-pivot",
        "ex-plu-factorisation-by-hand",
        "ex-ldu-factorisation-and-its-unique-diagonal-pivots",
        "ex-block-lu-factorisation-and-a-schur-complement-solve",
        "ex-cholesky-factorisation-and-solve",
        "cex-indefinite-and-semidefinite-matrices-fail-positive-diagonal-cholesky",
        "ex-householder-qr-factorisation-by-hand",
        "ex-givens-qr-on-a-sparse-matrix",
        "ex-reduced-qr-least-squares-versus-normal-equations",
        "ex-sparse-gaussian-elimination-can-create-fill-in",
        "prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures",
        "prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation",
        "lem-finite-signed-measure-sets-have-only-finite-subset-values",
        "prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity",
        "lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass",
        "thm-hahn-decomposition-for-signed-measures",
        "thm-jordan-decomposition-for-signed-measures",
        "thm-continuity-from-below-and-above-for-signed-measures",
        "prop-jordan-parts-and-total-variation-formulas-for-signed-measures",
        "thm-total-variation-of-a-complex-measure-is-finite",
        "thm-total-variation-is-a-measure",
        "prop-simple-integrals-are-bounded-by-total-variation",
        "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
        "thm-l-one-functions-admit-dominated-complex-simple-approximations",
        "thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation",
        "thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation",
        "thm-finite-total-variation-signed-measures-form-a-real-normed-space",
        "thm-finite-total-variation-signed-measures-are-complete",
        "thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data",
        "ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition",
        "ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions",
        "ex-an-atomic-signed-measure-on-z-has-total-variation-three",
        "ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form",
        "ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi",
        "cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure",
        "cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition",
        "cex-total-variation-can-exceed-the-absolute-value-of-the-set-value",
        "cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation",
        "fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity",
        "fs-a-hahn-decomposition-is-unique",
        "fs-total-variation-always-equals-the-absolute-value-of-the-set-value",
        "fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure",
        "fs-finite-values-and-finite-additivity-force-finite-total-variation",
        "fs-finite-partitions-always-suffice-for-complex-total-variation",
        "lem-riemann-map-extremal-family-is-nonempty",
        "lem-riemann-map-extremal-derivatives-are-positive-and-bounded",
        "lem-riemann-map-extremal-derivative-is-attained",
        "lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent",
        "lem-riemann-map-extremizer-is-univalent",
        "lem-riemann-map-extremizer-is-surjective",
        "thm-riemann-mapping-theorem",
        "cor-uniqueness-of-the-normalized-riemann-map",
        "thm-area-theorem-for-exterior-univalent-functions",
        "cor-bieberbach-second-coefficient-bound",
        "thm-koebe-one-quarter-theorem",
        "thm-koebe-distortion-theorem",
        "thm-koebe-growth-theorem",
        "cor-quarter-disc-inclusion-for-univalent-functions",
        "ex-normalized-riemann-map-for-the-upper-half-plane-at-i",
        "ex-normalized-riemann-map-for-a-horizontal-strip",
        "ex-normalized-riemann-map-for-a-sector-with-branch-choice",
        "ex-normalized-riemann-map-for-the-slit-plane",
        "ex-the-unit-disc-extremal-problem-is-solved-by-the-identity",
        "ex-koebe-function-realizes-the-quarter-disc-bound",
        "cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist",
        "fs-riemann-map-is-unique-without-normalization",
        "fs-conformal-equivalence-preserves-euclidean-area",
        "lem-bloch-rescaling-at-an-almost-maximal-derivative",
        "lem-quantitative-univalence-from-controlled-derivative",
        "thm-bloch-theorem",
        "thm-landau-theorem",
        "lem-holomorphic-logarithms-for-two-omitted-values",
        "thm-schottky-theorem",
        "thm-montel-caratheodory-theorem",
        "thm-little-picard-theorem",
        "lem-two-omitted-values-rule-out-an-essential-singularity",
        "thm-great-picard-theorem",
        "cor-meromorphic-little-picard-theorem",
        "cor-meromorphic-great-picard-theorem",
        "ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four",
        "ex-schottky-bound-for-a-map-with-center-value-one-half",
        "ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp",
        "ex-exp-one-over-z-shows-great-picard-is-sharp",
        "cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values",
        "fs-little-picard-needs-a-boundedness-hypothesis",
        "fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value",
        "lem-grid-cycle-for-runge-approximation",
        "lem-cauchy-riemann-sums-give-rational-approximation",
        "lem-runge-pole-pushing-lemma",
        "thm-runge-approximation-with-prescribed-poles",
        "cor-runge-polynomial-approximation",
        "thm-runge-approximation-on-plane-domains",
        "thm-mittag-leffler-theorem-on-the-plane",
        "thm-mittag-leffler-theorem-on-plane-domains",
        "thm-mittag-leffler-expansion-of-pi-cotangent",
        "cor-partial-fraction-expansion-of-pi-squared-cosecant-squared",
        "thm-zero-divisor-theorem-on-plane-domains",
        "cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients",
        "cor-meromorphic-functions-on-a-domain-form-a-field",
        "ex-one-over-z-not-polynomially-approximable-on-unit-circle",
        "ex-pole-pushing-along-three-discs",
        "ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared",
        "ex-mittag-leffler-function-with-double-poles-at-the-integers",
        "fs-runge-gives-polynomial-approximation-on-any-compact-set",
        "cex-annulus-needs-a-pole-in-each-bounded-complementary-component",
        "fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts",
        "lem-gamma-integral-converges-locally-uniformly",
        "thm-euler-gamma-function-is-holomorphic",
        "thm-complex-gamma-restricts-to-the-real-gamma-function",
        "thm-gamma-functional-equation",
        "cor-gamma-factorial-values",
        "thm-gamma-meromorphic-continuation",
        "thm-euler-limit-formula-for-gamma",
        "thm-gamma-weierstrass-product",
        "cor-gamma-function-has-no-zeros",
        "thm-euler-reflection-formula",
        "cor-gamma-one-half-value",
        "thm-beta-gamma-identity",
        "thm-gauss-multiplication-formula",
        "thm-legendre-duplication-formula",
        "thm-stirling-formula-gamma",
        "thm-hankel-representation-for-reciprocal-gamma",
        "fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma",
        "ex-gamma-values-at-half-integers-and-negative-half-integers",
        "ex-residue-of-gamma-at-minus-two",
        "ex-beta-one-half-one-half-equals-pi",
        "ex-reflection-formula-at-one-half",
        "ex-stirling-approximation-to-ten-factorial",
        "cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values",
        "fs-gamma-is-entire",
        "thm-short-five-lemma-in-an-abelian-category",
        "cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible",
        "thm-short-five-lemma-by-pullback-without-members",
        "thm-the-connecting-morphism-exists-and-is-unique",
        "thm-snake-lemma-in-an-abelian-category",
        "thm-snake-lemma-under-the-weaker-stacks-hypotheses",
        "thm-naturality-of-the-connecting-morphism",
        "cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake",
        "thm-four-lemma-in-an-abelian-category",
        "thm-weak-four-lemma-with-the-exactness-hypotheses-named",
        "thm-sharp-five-lemma-in-an-abelian-category",
        "thm-five-lemma-in-an-abelian-category",
        "lem-half-nine-lemma",
        "thm-nine-lemma-in-an-abelian-category",
        "thm-nine-lemma-variants-by-which-rows-are-assumed-exact",
        "thm-sharp-nine-lemma",
        "thm-symmetric-nine-lemma",
        "thm-the-nine-lemma-follows-from-the-snake-lemma",
        "thm-the-splitting-lemma-follows-from-the-nine-lemma",
        "thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma",
        "thm-the-pullback-and-pushout-theorems",
        "thm-the-diagram-lemmas-hold-in-the-opposite-category",
        "thm-an-exact-functor-transports-every-diagram-lemma",
        "thm-five-lemma-for-a-morphism-of-long-exact-sequences",
        "fs-the-connecting-morphism-depends-on-the-choices-made-in-its-construction",
        "fs-the-five-lemma-needs-only-that-the-two-middle-maps-are-monic",
        "fs-the-middle-nine-lemma-holds-without-assuming-the-composite-is-zero",
        "fs-the-snake-lemma-is-just-a-pair-of-short-exact-kernel-and-cokernel-rows",
        "fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem",
        "ex-the-published-module-five-lemma-as-an-instance",
        "ex-the-published-module-snake-lemma-as-an-instance",
        "ex-the-published-module-four-lemma-as-an-instance",
        "ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups",
        "ex-the-snake-lemma-applied-to-multiplication-by-an-integer",
        "ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups",
        "cex-a-snake-configuration-whose-kernel-row-is-not-short-exact",
        "ex-the-short-five-lemma-chased-with-members",
        "lem-the-boundary-subobject-factors-through-the-cycle-subobject",
        "thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero",
        "prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees",
        "prop-identities-and-composites-of-chain-maps-are-chain-maps",
        "lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries",
        "thm-a-chain-map-induces-a-well-defined-map-on-homology",
        "prop-homology-respects-identities-and-composition",
        "thm-homology-is-an-additive-functor",
        "prop-isomorphisms-of-complexes-are-quasi-isomorphisms",
        "prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is",
        "lem-the-differential-descends-to-a-quotient-complex",
        "lem-the-kernel-of-a-chain-map-is-computed-degreewise",
        "lem-the-cokernel-of-a-chain-map-is-computed-degreewise",
        "prop-images-and-coimages-of-chain-maps-are-computed-degreewise",
        "thm-the-category-of-complexes-in-an-additive-category-is-additive",
        "thm-the-category-of-complexes-in-an-abelian-category-is-abelian",
        "cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise",
        "prop-a-subcomplex-is-the-kernel-of-its-quotient-map",
        "thm-the-first-isomorphism-theorem-for-complexes",
        "prop-finite-biproducts-of-complexes-are-computed-degreewise",
        "prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials",
        "prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps",
        "thm-an-exact-functor-commutes-with-homology",
        "cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative",
        "thm-euler-poincare-formula-for-finite-free-complexes",
        "fs-any-sequence-of-morphisms-is-a-chain-complex",
        "fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles",
        "fs-a-chain-map-is-determined-by-its-maps-on-homology",
        "fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes",
        "fs-an-additive-functor-commutes-with-homology",
        "fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category",
        "ex-the-zero-differential-complex-has-homology-equal-to-each-term",
        "ex-a-two-term-complex-and-its-kernel-and-cokernel-homology",
        "ex-the-multiplication-by-m-complex-computes-a-cyclic-group",
        "ex-an-exact-short-sequence-as-an-acyclic-three-term-complex",
        "ex-a-split-exact-complex-contracts-degree-by-degree",
        "ex-a-chain-map-computed-on-cycles-boundaries-and-homology",
        "cex-a-quasi-isomorphism-that-is-not-an-isomorphism-of-complexes",
        "cex-two-distinct-chain-maps-inducing-the-same-homology-map",
        "ex-a-subcomplex-and-its-quotient-complex",
        "ex-euler-poincare-for-a-finite-complex",
        "lem-exponential-decay-dominates-every-inverse-power",
        "thm-the-standard-flat-function-is-smooth-and-flat-at-zero",
        "lem-smooth-bump-between-concentric-euclidean-balls",
        "lem-euclidean-bump-for-a-compact-set-inside-an-open-set",
        "lem-chart-bump-at-a-point-with-prescribed-support",
        "lem-manifold-bump-for-a-compact-set-inside-an-open-set",
        "lem-locally-finite-families-of-supports-have-locally-finite-cozero-families",
        "thm-a-locally-finite-sum-of-smooth-functions-is-smooth",
        "lem-normalizing-a-locally-finite-positive-smooth-family",
        "lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it",
        "lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking",
        "thm-smooth-partitions-of-unity-exist-on-manifolds",
        "cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover",
        "thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set",
        "cor-smooth-functions-separate-points-from-closed-sets",
        "lem-smooth-extension-from-a-closed-neighbourhood",
        "thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity",
        "lem-every-manifold-has-a-compact-exhaustion",
        "thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function",
        "cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function",
        "cor-every-open-subset-of-a-manifold-is-the-cozero-set-of-a-smooth-function",
        "prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains",
        "fs-the-piecewise-function-exp-minus-one-over-t-is-analytic-at-zero",
        "fs-every-continuous-partition-of-unity-on-a-smooth-manifold-is-smooth",
        "fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth",
        "fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff",
        "fs-every-smooth-manifold-is-compact",
        "fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums",
        "ex-the-standard-compactly-supported-bump-on-the-line",
        "ex-a-radial-bump-on-euclidean-space",
        "ex-a-two-function-smooth-partition-on-the-circle",
        "ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces",
        "ex-a-proper-smooth-exhaustion-of-euclidean-space",
        "ex-a-proper-smooth-exhaustion-of-the-open-unit-ball",
        "ex-a-smooth-function-with-a-prescribed-closed-zero-set",
        "cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous",
        "cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth",
        "lem-equality-near-a-point-is-an-equivalence-relation-on-local-smooth-functions",
        "lem-algebra-operations-on-smooth-germs-are-representative-independent",
        "lem-a-derivation-annihilates-constant-germs",
        "lem-coordinate-derivations-are-well-defined-derivations",
        "lem-first-order-hadamard-factorization-near-a-point",
        "thm-coordinate-derivations-form-a-basis-of-the-tangent-space",
        "cor-the-tangent-space-of-an-n-manifold-has-dimension-n",
        "thm-change-of-coordinate-formula-for-tangent-bases",
        "lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation",
        "lem-curve-velocity-depends-only-on-the-contact-class",
        "thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors",
        "cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve",
        "lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ",
        "lem-the-differential-sends-derivations-to-derivations-and-is-linear",
        "thm-coordinate-formula-for-the-differential",
        "thm-the-differential-sends-curve-velocities-to-composite-curve-velocities",
        "thm-chain-rule-for-differentials-of-smooth-maps",
        "cor-the-differential-of-a-diffeomorphism-is-an-isomorphism",
        "thm-coordinate-formula-for-the-differential-of-a-function",
        "prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component",
        "lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses",
        "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
        "prop-the-tangent-bundle-projection-and-zero-section-are-smooth",
        "thm-the-global-differential-of-a-smooth-map-is-smooth",
        "prop-the-tangent-bundle-construction-is-functorial",
        "thm-coordinate-differentials-form-the-dual-cotangent-basis",
        "lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian",
        "thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
        "prop-cotangent-pullback-is-contravariantly-functorial",
        "thm-canonical-tangent-and-cotangent-splittings-for-products",
        "fs-a-tangent-vector-at-p-is-a-vector-whose-tail-is-drawn-at-p",
        "fs-the-tangent-space-is-defined-only-after-embedding-the-manifold-in-euclidean-space",
        "fs-every-linear-functional-on-smooth-germs-is-a-tangent-vector",
        "fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple",
        "fs-the-differential-of-a-smooth-map-is-its-jacobian-matrix",
        "fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle",
        "ex-the-tangent-space-of-euclidean-space",
        "ex-tangent-basis-change-between-cartesian-and-polar-coordinates",
        "ex-the-differential-of-a-map-between-spheres-in-stereographic-coordinates",
        "ex-the-tangent-space-of-the-sphere-from-curve-velocities",
        "ex-the-tangent-bundle-of-the-circle-is-a-cylinder",
        "ex-the-tangent-bundle-of-euclidean-space-is-trivial",
        "ex-the-cotangent-pullback-of-a-coordinate-one-form",
        "ex-the-differential-of-a-constant-map-is-zero",
        "cex-polar-coordinates-do-not-give-a-chart-at-the-origin",
        "cex-a-chart-dependent-coordinate-vector-is-not-an-intrinsic-tangent-vector",
        "thm-existence-and-uniqueness-of-extended-dfa-transition",
        "lem-extended-dfa-transition-respects-concatenation",
        "prop-every-finite-language-is-regular",
        "thm-product-dfa-for-union-and-intersection",
        "thm-complementing-accept-states-complements-the-language",
        "cor-regular-languages-are-closed-under-boolean-operations",
        "thm-dfa-for-language-difference",
        "lem-removing-unreachable-states-preserves-language",
        "prop-published-prefix-automata-extend-to-factor-avoidance-dfas",
        "fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality",
        "fs-complementing-a-dfa-complements-its-transition-graph",
        "ex-extended-dfa-transition-respects-concatenation",
        "ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa",
        "cex-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality",
        "thm-derivation-parse-tree-correspondence",
        "thm-elimination-of-useless-symbols",
        "thm-elimination-of-epsilon-productions",
        "thm-elimination-of-unit-productions",
        "thm-chomsky-normal-form",
        "lem-gnf-substitution-step-preserves-language",
        "lem-gnf-left-recursion-elimination-preserves-language",
        "thm-greibach-normal-form",
        "thm-cfl-closure-under-union-concatenation-star-and-homomorphism",
        "fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
        "fs-cnf-preserves-epsilon-without-an-exception",
        "ex-elimination-of-useless-symbols",
        "ex-cfl-closure-under-union-concatenation-star-and-homomorphism",
        "cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 3184 rows over 1 contract file(s); 2850 marked not_applicable\n\nTEMPLATE REUSE — none at or above 3 members.\n\nCONTRADICTED DISPOSITIONS — 1 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\n  thm-zero-divisor-theorem-on-plane-domains  [zero]\n    the proof divides by a symbolic denominator (z-p_j, d) — the zero case is a real obligation unless a hypothesis excludes it\n    row says: \"In Every discrete effective divisor on a plane domain is the zero divisor of a holomorphic function, no separate zero-value or zero-paramete…\"\n\nUPHELD BY REVIEW — 21 row(s) an Alpha read and kept, with reasons on the record:\n  lem-cauchy-riemann-sums-give-rational-approximation  [zero]  by contract-audit-1: The detector is inapplicable on current bytes. The only constant denominator is 2 pi i, which is nonzero, and the variab\n  lem-runge-pole-pushing-lemma  [zero]  by contract-audit-1: The detector is reading Laurent-expansion denominators without the geometric hypothesis that makes them safe. Step 2.1 f\n  thm-mittag-leffler-expansion-of-pi-cotangent  [empty]  by contract-audit-1: This candidate is a detector false positive. The theorem expands pi cotangent over the fixed integer index sets Z and {n\n  thm-mittag-leffler-expansion-of-pi-cotangent  [zero]  by contract-audit-1: The zero detector is inapplicable here. The statement begins with z notin Z, so z != 0 before the residue denominators 2\n  cor-partial-fraction-expansion-of-pi-squared-cosecant-squared  [empty]  by contract-audit-1: This candidate is a detector false positive. The corollary differentiates the already-fixed cotangent expansion termwise\n  ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared  [zero]  by contract-audit-1: The detector missed the standing hypothesis. This example assumes a notin iZ, which is exactly the condition excluding e\n  thm-euler-limit-formula-for-gamma  [zero]  by contract-audit-1: This detector hit is inapplicable on current bytes. The theorem explicitly excludes z = 0,-1,-2,..., which keeps every f\n  thm-gamma-weierstrass-product  [empty]  by contract-audit-1: This is a detector false positive. The Weierstrass product is taken over the fixed positive integers n >= 1, not over a \n  thm-gamma-weierstrass-product  [zero]  by contract-audit-1: The zero detector is inapplicable here. The denominators it saw are the harmonic and product indices k and n, both of wh\n  thm-euler-reflection-formula  [zero]  by contract-audit-1: This candidate is a detector false positive. The proof applies the product formulas only on C minus Z, where 1-z stays a\n  thm-gauss-multiplication-formula  [empty]  by contract-audit-1: The detector is inapplicable on current bytes. Gauss's multiplication formula assumes an integer m >= 1, which guarantee\n  thm-gauss-multiplication-formula  [zero]  by contract-audit-1: This detector hit is a false positive. The only free scalar denominator is m, and the theorem explicitly assumes m >= 1 \n  thm-stirling-formula-gamma  [zero]  by contract-audit-1: The zero detector is inapplicable here. The harmonic denominators n are positive integers, and step 4.1 proves the secto\n  lem-locally-finite-families-of-supports-have-locally-finite-cozero-families  [empty]  by contract-audit-1: The detector is inapplicable here. This lemma studies one given family (f_i)_{i in I}; step 1.1 reads local finiteness d\n  thm-a-locally-finite-sum-of-smooth-functions-is-smooth  [empty]  by contract-audit-1: This is a detector false positive. The theorem starts with one fixed family (f_i)_{i in I}, and step 1.1/2.1 convert the\n  lem-normalizing-a-locally-finite-positive-smooth-family  [empty]  by contract-audit-1: The detector is inapplicable on current bytes. This lemma assumes that for every p in M at least one g_i(p) is strictly \n  lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking  [empty]  by contract-audit-1: This candidate is a detector false positive. The lemma begins with a countable cover (U_n)_{n >= 1}; the index set is fi\n  lem-first-order-hadamard-factorization-near-a-point  [empty]  by contract-audit-1: The detector is inapplicable here. This lemma factors a smooth function along the fixed coordinate directions of R^n; th\n  thm-change-of-coordinate-formula-for-tangent-bases  [empty]  by contract-audit-1: This is a detector false positive. The theorem compares two coordinate bases at one point p, and the summation index j r\n  thm-coordinate-formula-for-the-differential  [empty]  by contract-audit-1: The detector is inapplicable on current bytes. The only family notation here is the finite coordinate list y^1,...,y^m a\n  thm-coordinate-formula-for-the-differential-of-a-function  [empty]  by contract-audit-1: This candidate is a detector false positive. The theorem expands df_p in one chosen coordinate coframe dx^i_p, and the i\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "citation-fidelity",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 968 citation(s) over 398 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 10.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  thm-normalised-lu-and-ldu-factorisations-are-unique  [L1] -> def-normalised-lu-factorisation (searched: Definition)\n    quote: \"Let $F$ be a field and let $A\\in M_n(F)$. A normalised LU factorisation of $A$ is a factorisation $$A=LU,$$ where $L\\in M_n(F)$ is lower triangular with diagonal entries all equal …\"\n\n  thm-normalised-lu-and-ldu-factorisations-are-unique  [L1] -> def-ldu-factorisation (searched: Definition)\n    quote: \"Let $F$ be a field and let $A\\in M_n(F)$. An LDU factorisation of $A$ is a factorisation $$A=LDU,$$ where $L$ is unit lower triangular, $D$ is diagonal, and $U$ is unit upper trian…\"\n\n  thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero  [L1] -> def-normalised-lu-factorisation (searched: Definition)\n    quote: \"Let $F$ be a field and let $A\\in M_n(F)$. A normalised LU factorisation of $A$ is a factorisation $$A=LU,$$ where $L\\in M_n(F)$ is lower triangular with diagonal entries all equal …\"\n\n  thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors  [L1] -> def-normalised-lu-factorisation (searched: Definition)\n    quote: \"Let $F$ be a field and let $A\\in M_n(F)$. A normalised LU factorisation of $A$ is a factorisation $$A=LU,$$ where $L\\in M_n(F)$ is lower triangular with diagonal entries all equal …\"\n\n  thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique  [L1] -> def-cholesky-factorisation-with-positive-diagonal (searched: Definition)\n    quote: \"Let $A\\in M_n(\\mathbb C)$; over $\\mathbb R$ the same definition uses transpose instead of conjugate transpose. The matrix $A$ is Hermitian positive definite if $A=A^*$ and $$x^*Ax>…\"\n\n  thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost  [L3] -> def-cholesky-factorisation-with-positive-diagonal (searched: Definition)\n    quote: \"Let $A\\in M_n(\\mathbb C)$; over $\\mathbb R$ the same definition uses transpose instead of conjugate transpose. The matrix $A$ is Hermitian positive definite if $A=A^*$ and $$x^*Ax>…\"\n\n  thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries  [L1] -> def-real-and-complex-givens-transformations (searched: Definition)\n    quote: \"Let $1\\le i<j\\le n$. A real Givens rotation in the $(i,j)$-plane is the identity matrix except on rows and columns $i,j$, where it has the $2\\times 2$ block $$\\begin{pmatrix}c&s\\\\-…\"\n\n  ex-ldu-factorisation-and-its-unique-diagonal-pivots  [L1] -> def-ldu-factorisation (searched: Definition)\n    quote: \"Let $F$ be a field and let $A\\in M_n(F)$. An LDU factorisation of $A$ is a factorisation $$A=LDU,$$ where $L$ is unit lower triangular, $D$ is diagonal, and $U$ is unit upper trian…\"\n\n  lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation  [F1] -> def-contact-equivalence-of-smooth-curves-at-a-point (searched: Definition)\n    quote: \"Let $\\gamma_1$ and $\\gamma_2$ be smooth curves defined near $0$ with $\\gamma_1(0)=\\gamma_2(0)=p\\in M$. They are contact equivalent at $p$ when, in one smooth chart $(U,x)$ around $…\"\n\n  lem-curve-velocity-depends-only-on-the-contact-class  [F2] -> def-contact-equivalence-of-smooth-curves-at-a-point (searched: Definition)\n    quote: \"Let $\\gamma_1$ and $\\gamma_2$ be smooth curves defined near $0$ with $\\gamma_1(0)=\\gamma_2(0)=p\\in M$. They are contact equivalent at $p$ when, in one smooth chart $(U,x)$ around $…\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nUPHELD BY REVIEW — 1 citation row(s) an Alpha read and kept, with reasons on the record:\n  thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model  [L2] -> lem-product-of-one-plus-deltas-gives-theta-n  by contract-audit-1: The cited lemma states the product estimate for n >= 1 factors, but this fact line is only used inside step 1.1 at an ac\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "defect-ledger",
      "stage": "8-preflight",
      "why": "ERROR confirmed_fatal on cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded",
      "output": "defect-ledger: 207 defect row(s) checked for frontier-24, 20 error(s)\nERROR confirmed_fatal on cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on cex-total-variation-can-exceed-the-absolute-value-of-the-set-value (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on def-principal-part-at-an-isolated-point (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on def-signed-measure (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on ex-pole-pushing-along-three-discs (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on fs-a-hahn-decomposition-is-unique (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on fs-finite-values-and-finite-additivity-force-finite-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on fs-total-variation-always-equals-the-absolute-value-of-the-set-value (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-riemann-map-extremal-family-is-nonempty (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-runge-pole-pushing-lemma (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-two-omitted-values-rule-out-an-essential-singularity (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on prop-simple-integrals-are-bounded-by-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-gamma-weierstrass-product (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-mittag-leffler-theorem-on-plane-domains (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-stirling-formula-gamma (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-total-variation-of-a-complex-measure-is-finite (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-zero-divisor-theorem-on-plane-domains (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-normalised-lu-and-ldu-factorisations-are-unique",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-plu-factorisation-by-hand",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ldu-factorisation-and-its-unique-diagonal-pivots",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-sparse-gaussian-elimination-can-create-fill-in",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-finite-signed-measure-sets-have-only-finite-subset-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-short-five-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-chasing-rule-the-subtraction-surrogate",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-snake-lemma-under-the-weaker-stacks-hypotheses",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-four-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-weak-four-lemma-with-the-exactness-hypotheses-named",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nine-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nine-lemma-variants-by-which-rows-are-assumed-exact",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-sharp-nine-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-symmetric-nine-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-chart-bump-at-a-point-with-prescribed-support",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-curve-velocity-depends-only-on-the-contact-class",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-coordinate-formula-for-the-differential-of-a-function",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-coordinate-differentials-form-the-dual-cotangent-basis",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-space-of-the-sphere-from-curve-velocities",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-bundle-of-the-circle-is-a-cylinder",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-extended-dfa-transition-respects-concatenation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-maximal-algebraically-independent-subset-is-a-transcendence-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-transcendence-basis-exchange",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-transcendence-degree-tower-additivity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-noether-normalisation-nonzero-polynomial-made-monic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-noether-normalisation-finite-field-exponent-substitution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-noether-normalisation-one-relation-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-noether-normalisation-inductive-integrality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-noether-normalisation-module-finiteness",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-noether-normalisation-dimension-lower-bound",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-zariski-lemma-one-variable-localisation-not-finite",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-zariski-lemma-localised-polynomial-ring-not-field",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-zariski-lemma-transcendence-basis-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-field-finite-type-over-a-field-is-a-finite-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-evaluation-ideal-is-maximal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-weak-nullstellensatz-algebraically-closed-coordinate-form",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rabinowitsch-unit-ideal-consequence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rabinowitsch-substitution-clears-denominators",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-strong-nullstellensatz-two-inclusions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-affine-algebra-points-as-k-algebra-maps",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-vanishing-ideal-is-radical",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-affine-radical-ideal-point-separation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-jacobson-ring-prime-as-intersection-of-maximals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-type-jacobson-residue-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-affine-closed-points-detect-radicals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-transcendence-basis-and-algebraic-remainder",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-noether-normalisation-triangular-change",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-noether-normalisation-finite-field-weight-choice",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-zariski-lemma-denominator-obstruction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-weak-nullstellensatz-over-real-numbers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-strong-nullstellensatz-nonradical-ideal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-rabinowitsch-identity-explicit",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-induced-module-decomposes-over-a-left-transversal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-dimension-of-an-induced-finite-dimensional-representation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-frobenius-formula-for-induced-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-frobenius-reciprocity-for-complex-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-transitivity-of-induction-for-finite-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-mackey-double-coset-formula-for-restricting-an-induced-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-mackeys-irreducibility-criterion-for-finite-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-class-sums-act-by-central-character-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-central-characters-are-algebraic-integers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-finite-group-with-an-irreducible-complex-character-of-degree-greater-than-one-is-nonabelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-burnsides-p-a-q-b-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-frobenius-reciprocity-for-the-two-preceding-s-three-inductions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-an-induced-irreducible-complex-character-is-always-irreducible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-induction-followed-by-restriction-is-the-identity-on-complex-representations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-divisor-of-the-group-order-is-an-irreducible-character-degree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-block-lu-factorisation-via-an-invertible-leading-block",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-invertible-matrix-can-fail-unpivoted-lu-at-the-first-pivot",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-block-lu-factorisation-and-a-schur-complement-solve",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-cholesky-factorisation-and-solve",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-indefinite-and-semidefinite-matrices-fail-positive-diagonal-cholesky",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-householder-qr-factorisation-by-hand",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-givens-qr-on-a-sparse-matrix",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-reduced-qr-least-squares-versus-normal-equations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hahn-decomposition-for-signed-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-jordan-decomposition-for-signed-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-continuity-from-below-and-above-for-signed-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-jordan-parts-and-total-variation-formulas-for-signed-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-of-a-complex-measure-is-finite",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-is-a-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-simple-integrals-are-bounded-by-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-l-one-functions-admit-dominated-complex-simple-approximations",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-finite-total-variation-signed-measures-form-a-real-normed-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-finite-total-variation-signed-measures-are-complete",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-an-atomic-signed-measure-on-z-has-total-variation-three",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-total-variation-can-exceed-the-absolute-value-of-the-set-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-hahn-decomposition-is-unique",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-total-variation-always-equals-the-absolute-value-of-the-set-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-finite-values-and-finite-additivity-force-finite-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-finite-partitions-always-suffice-for-complex-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremal-family-is-nonempty",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremal-derivatives-are-positive-and-bounded",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremal-derivative-is-attained",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremizer-is-univalent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremizer-is-surjective",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riemann-mapping-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-uniqueness-of-the-normalized-riemann-map",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-area-theorem-for-exterior-univalent-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-bieberbach-second-coefficient-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-koebe-one-quarter-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-koebe-distortion-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-koebe-growth-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-quarter-disc-inclusion-for-univalent-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-normalized-riemann-map-for-the-upper-half-plane-at-i",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-normalized-riemann-map-for-a-horizontal-strip",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-normalized-riemann-map-for-a-sector-with-branch-choice",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-normalized-riemann-map-for-the-slit-plane",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-unit-disc-extremal-problem-is-solved-by-the-identity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koebe-function-realizes-the-quarter-disc-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-riemann-map-is-unique-without-normalization",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-conformal-equivalence-preserves-euclidean-area",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-bloch-rescaling-at-an-almost-maximal-derivative",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-quantitative-univalence-from-controlled-derivative",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bloch-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-landau-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-holomorphic-logarithms-for-two-omitted-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-schottky-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-montel-caratheodory-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-little-picard-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-two-omitted-values-rule-out-an-essential-singularity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-great-picard-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-meromorphic-little-picard-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-meromorphic-great-picard-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-schottky-bound-for-a-map-with-center-value-one-half",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-exp-one-over-z-shows-great-picard-is-sharp",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-little-picard-needs-a-boundedness-hypothesis",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-grid-cycle-for-runge-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-cauchy-riemann-sums-give-rational-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-runge-pole-pushing-lemma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-runge-approximation-with-prescribed-poles",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-runge-polynomial-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-runge-approximation-on-plane-domains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-mittag-leffler-theorem-on-the-plane",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-mittag-leffler-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-mittag-leffler-expansion-of-pi-cotangent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-partial-fraction-expansion-of-pi-squared-cosecant-squared",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-zero-divisor-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-meromorphic-functions-on-a-domain-form-a-field",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-one-over-z-not-polynomially-approximable-on-unit-circle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-pole-pushing-along-three-discs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-mittag-leffler-function-with-double-poles-at-the-integers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-runge-gives-polynomial-approximation-on-any-compact-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-annulus-needs-a-pole-in-each-bounded-complementary-component",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-gamma-integral-converges-locally-uniformly",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-euler-gamma-function-is-holomorphic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complex-gamma-restricts-to-the-real-gamma-function",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gamma-functional-equation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-gamma-factorial-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gamma-meromorphic-continuation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-euler-limit-formula-for-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gamma-weierstrass-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-gamma-function-has-no-zeros",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-euler-reflection-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-gamma-one-half-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-beta-gamma-identity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gauss-multiplication-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-legendre-duplication-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-stirling-formula-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hankel-representation-for-reciprocal-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-gamma-values-at-half-integers-and-negative-half-integers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-residue-of-gamma-at-minus-two",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-beta-one-half-one-half-equals-pi",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-reflection-formula-at-one-half",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-stirling-approximation-to-ten-factorial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-gamma-is-entire",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-short-five-lemma-by-pullback-without-members",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-connecting-morphism-exists-and-is-unique",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-snake-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-naturality-of-the-connecting-morphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-sharp-five-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-five-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-half-nine-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-nine-lemma-follows-from-the-snake-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-splitting-lemma-follows-from-the-nine-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-pullback-and-pushout-theorems",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-diagram-lemmas-hold-in-the-opposite-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-exact-functor-transports-every-diagram-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-five-lemma-for-a-morphism-of-long-exact-sequences",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-connecting-morphism-depends-on-the-choices-made-in-its-construction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-five-lemma-needs-only-that-the-two-middle-maps-are-monic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-middle-nine-lemma-holds-without-assuming-the-composite-is-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-snake-lemma-is-just-a-pair-of-short-exact-kernel-and-cokernel-rows",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-published-module-five-lemma-as-an-instance",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-published-module-snake-lemma-as-an-instance",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-published-module-four-lemma-as-an-instance",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-snake-lemma-applied-to-multiplication-by-an-integer",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-snake-configuration-whose-kernel-row-is-not-short-exact",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-short-five-lemma-chased-with-members",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-the-boundary-subobject-factors-through-the-cycle-subobject",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-identities-and-composites-of-chain-maps-are-chain-maps",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-chain-map-induces-a-well-defined-map-on-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-homology-respects-identities-and-composition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-homology-is-an-additive-functor",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-isomorphisms-of-complexes-are-quasi-isomorphisms",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-differential-descends-to-a-quotient-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-kernel-of-a-chain-map-is-computed-degreewise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-cokernel-of-a-chain-map-is-computed-degreewise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-images-and-coimages-of-chain-maps-are-computed-degreewise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-category-of-complexes-in-an-additive-category-is-additive",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-category-of-complexes-in-an-abelian-category-is-abelian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-subcomplex-is-the-kernel-of-its-quotient-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-first-isomorphism-theorem-for-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-finite-biproducts-of-complexes-are-computed-degreewise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-an-exact-functor-commutes-with-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-euler-poincare-formula-for-finite-free-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-any-sequence-of-morphisms-is-a-chain-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-chain-map-is-determined-by-its-maps-on-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-additive-functor-commutes-with-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-zero-differential-complex-has-homology-equal-to-each-term",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-two-term-complex-and-its-kernel-and-cokernel-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-multiplication-by-m-complex-computes-a-cyclic-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-an-exact-short-sequence-as-an-acyclic-three-term-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-split-exact-complex-contracts-degree-by-degree",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-chain-map-computed-on-cycles-boundaries-and-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-quasi-isomorphism-that-is-not-an-isomorphism-of-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-two-distinct-chain-maps-inducing-the-same-homology-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-subcomplex-and-its-quotient-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-euler-poincare-for-a-finite-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-exponential-decay-dominates-every-inverse-power",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-standard-flat-function-is-smooth-and-flat-at-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-smooth-bump-between-concentric-euclidean-balls",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-euclidean-bump-for-a-compact-set-inside-an-open-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-manifold-bump-for-a-compact-set-inside-an-open-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-locally-finite-families-of-supports-have-locally-finite-cozero-families",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-locally-finite-sum-of-smooth-functions-is-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-normalizing-a-locally-finite-positive-smooth-family",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-smooth-partitions-of-unity-exist-on-manifolds",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-smooth-functions-separate-points-from-closed-sets",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-smooth-extension-from-a-closed-neighbourhood",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-every-manifold-has-a-compact-exhaustion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-open-subset-of-a-manifold-is-the-cozero-set-of-a-smooth-function",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-piecewise-function-exp-minus-one-over-t-is-analytic-at-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-continuous-partition-of-unity-on-a-smooth-manifold-is-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-smooth-manifold-is-compact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-standard-compactly-supported-bump-on-the-line",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-radial-bump-on-euclidean-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-two-function-smooth-partition-on-the-circle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-proper-smooth-exhaustion-of-euclidean-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-proper-smooth-exhaustion-of-the-open-unit-ball",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-smooth-function-with-a-prescribed-closed-zero-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-equality-near-a-point-is-an-equivalence-relation-on-local-smooth-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-algebra-operations-on-smooth-germs-are-representative-independent",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-derivation-annihilates-constant-germs",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-coordinate-derivations-are-well-defined-derivations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-first-order-hadamard-factorization-near-a-point",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-coordinate-derivations-form-a-basis-of-the-tangent-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-tangent-space-of-an-n-manifold-has-dimension-n",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-change-of-coordinate-formula-for-tangent-bases",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-differential-sends-derivations-to-derivations-and-is-linear",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-coordinate-formula-for-the-differential",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-differential-sends-curve-velocities-to-composite-curve-velocities",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-chain-rule-for-differentials-of-smooth-maps",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-differential-of-a-diffeomorphism-is-an-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-tangent-bundle-projection-and-zero-section-are-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-global-differential-of-a-smooth-map-is-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-tangent-bundle-construction-is-functorial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-cotangent-pullback-is-contravariantly-functorial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-canonical-tangent-and-cotangent-splittings-for-products",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-tangent-vector-at-p-is-a-vector-whose-tail-is-drawn-at-p",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-tangent-space-is-defined-only-after-embedding-the-manifold-in-euclidean-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-linear-functional-on-smooth-germs-is-a-tangent-vector",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-differential-of-a-smooth-map-is-its-jacobian-matrix",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-space-of-euclidean-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-tangent-basis-change-between-cartesian-and-polar-coordinates",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-differential-of-a-map-between-spheres-in-stereographic-coordinates",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-bundle-of-euclidean-space-is-trivial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-cotangent-pullback-of-a-coordinate-one-form",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-differential-of-a-constant-map-is-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-polar-coordinates-do-not-give-a-chart-at-the-origin",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-chart-dependent-coordinate-vector-is-not-an-intrinsic-tangent-vector",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-existence-and-uniqueness-of-extended-dfa-transition",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-extended-dfa-transition-respects-concatenation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-every-finite-language-is-regular",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-product-dfa-for-union-and-intersection",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-complementing-accept-states-complements-the-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-regular-languages-are-closed-under-boolean-operations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-dfa-for-language-difference",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-removing-unreachable-states-preserves-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-published-prefix-automata-extend-to-factor-avoidance-dfas",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-complementing-a-dfa-complements-its-transition-graph",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-derivation-parse-tree-correspondence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-elimination-of-useless-symbols",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-elimination-of-epsilon-productions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-elimination-of-unit-productions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chomsky-normal-form",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-gnf-substitution-step-preserves-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-gnf-left-recursion-elimination-preserves-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-greibach-normal-form",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cfl-closure-under-union-concatenation-star-and-homomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-cnf-preserves-epsilon-without-an-exception",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-elimination-of-useless-symbols",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-cfl-closure-under-union-concatenation-star-and-homomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
      "scope": "run",
      "owner": "d"
    }
  ],
  "assigned_items": [
    {
      "id": "prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-finite-signed-measure-sets-have-only-finite-subset-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-chasing-rule-the-subtraction-surrogate",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hahn-decomposition-for-signed-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-jordan-decomposition-for-signed-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-continuity-from-below-and-above-for-signed-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-jordan-parts-and-total-variation-formulas-for-signed-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-of-a-complex-measure-is-finite",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-is-a-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-simple-integrals-are-bounded-by-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-l-one-functions-admit-dominated-complex-simple-approximations",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-finite-total-variation-signed-measures-form-a-real-normed-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-finite-total-variation-signed-measures-are-complete",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-an-atomic-signed-measure-on-z-has-total-variation-three",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-total-variation-can-exceed-the-absolute-value-of-the-set-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-hahn-decomposition-is-unique",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-total-variation-always-equals-the-absolute-value-of-the-set-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-finite-values-and-finite-additivity-force-finite-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-finite-partitions-always-suffice-for-complex-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremal-family-is-nonempty",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremal-derivatives-are-positive-and-bounded",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremal-derivative-is-attained",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremizer-is-univalent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremizer-is-surjective",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riemann-mapping-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-uniqueness-of-the-normalized-riemann-map",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-area-theorem-for-exterior-univalent-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-bieberbach-second-coefficient-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-koebe-one-quarter-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-koebe-distortion-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-koebe-growth-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-quarter-disc-inclusion-for-univalent-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-normalized-riemann-map-for-the-upper-half-plane-at-i",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-normalized-riemann-map-for-a-horizontal-strip",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-normalized-riemann-map-for-a-sector-with-branch-choice",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-normalized-riemann-map-for-the-slit-plane",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-unit-disc-extremal-problem-is-solved-by-the-identity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koebe-function-realizes-the-quarter-disc-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-riemann-map-is-unique-without-normalization",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-conformal-equivalence-preserves-euclidean-area",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-bloch-rescaling-at-an-almost-maximal-derivative",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-quantitative-univalence-from-controlled-derivative",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bloch-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-landau-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-holomorphic-logarithms-for-two-omitted-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-schottky-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-montel-caratheodory-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-little-picard-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-two-omitted-values-rule-out-an-essential-singularity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-great-picard-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-meromorphic-little-picard-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-meromorphic-great-picard-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-schottky-bound-for-a-map-with-center-value-one-half",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-exp-one-over-z-shows-great-picard-is-sharp",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-little-picard-needs-a-boundedness-hypothesis",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-grid-cycle-for-runge-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-cauchy-riemann-sums-give-rational-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-runge-pole-pushing-lemma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-runge-approximation-with-prescribed-poles",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-runge-polynomial-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-runge-approximation-on-plane-domains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-mittag-leffler-theorem-on-the-plane",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-mittag-leffler-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-mittag-leffler-expansion-of-pi-cotangent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-partial-fraction-expansion-of-pi-squared-cosecant-squared",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-zero-divisor-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-meromorphic-functions-on-a-domain-form-a-field",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-one-over-z-not-polynomially-approximable-on-unit-circle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-pole-pushing-along-three-discs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-mittag-leffler-function-with-double-poles-at-the-integers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-runge-gives-polynomial-approximation-on-any-compact-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-annulus-needs-a-pole-in-each-bounded-complementary-component",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-gamma-integral-converges-locally-uniformly",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-euler-gamma-function-is-holomorphic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complex-gamma-restricts-to-the-real-gamma-function",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gamma-functional-equation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-gamma-factorial-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gamma-meromorphic-continuation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-euler-limit-formula-for-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gamma-weierstrass-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-gamma-function-has-no-zeros",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-euler-reflection-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-gamma-one-half-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-beta-gamma-identity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gauss-multiplication-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-legendre-duplication-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-stirling-formula-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hankel-representation-for-reciprocal-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-gamma-values-at-half-integers-and-negative-half-integers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-residue-of-gamma-at-minus-two",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-beta-one-half-one-half-equals-pi",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-reflection-formula-at-one-half",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-stirling-approximation-to-ten-factorial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-gamma-is-entire",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 — group **c**, run `frontier-24`

You are the group Alpha for batches **4**, **5**, **6**: 5 A/B pair(s), 10 page(s), 145 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-24-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-24-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `signed-and-complex-measures-hahn-and-jordan` | A | measure-theory | 288.023 | `product-measures-and-the-fubini-tonelli-theorems-examples` |
| 4 | `signed-and-complex-measures-hahn-and-jordan-examples` | B | measure-theory | 288.024 | `signed-and-complex-measures-hahn-and-jordan` |
| 5 | `the-riemann-mapping-theorem` | A | complex-analysis | 333 | `normal-families-and-montels-theorem`, `conformal-mapping-branches-and-the-schwarz-lemma`, `the-winding-number-and-the-global-cauchy-theorem` |
| 5 | `the-riemann-mapping-theorem-examples` | B | complex-analysis | 334 | `the-riemann-mapping-theorem` |
| 5 | `bloch-schottky-and-picard` | A | complex-analysis | 347 | `normal-families-and-montels-theorem`, `conformal-mapping-branches-and-the-schwarz-lemma`, `isolated-singularities-and-laurent-series`, `the-riemann-mapping-theorem` |
| 5 | `bloch-schottky-and-picard-examples` | B | complex-analysis | 348 | `bloch-schottky-and-picard` |
| 6 | `mittag-leffler-and-runges-theorem` | A | complex-analysis | 339 | `infinite-products-and-weierstrass-factorisation`, `the-riemann-sphere-and-mobius-transformations`, `the-residue-theorem` |
| 6 | `mittag-leffler-and-runges-theorem-examples` | B | complex-analysis | 340 | `mittag-leffler-and-runges-theorem` |
| 6 | `the-gamma-function` | A | complex-analysis | 343 | `infinite-products-and-weierstrass-factorisation`, `the-residue-theorem`, `improper-integrals`, `analyticity-liouville-and-morera`, `product-measures-and-the-fubini-tonelli-theorems` |
| 6 | `the-gamma-function-examples` | B | complex-analysis | 344 | `the-gamma-function` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `signed-and-complex-measures-hahn-and-jordan` — Signed and Complex Measures Hahn and Jordan (28 item(s))

- `def-signed-measure` · definition — A signed measure is countably additive and takes at most one infinite value
- `def-positive-negative-and-null-sets-for-a-signed-measure` · definition — Positive, negative, and null sets for a signed measure
- `def-complex-measure` · definition — A complex measure is a finite-valued countably additive set function
- `prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures` · proposition — The real and imaginary parts of a complex measure are finite signed measures, and nu = Re nu + i Im nu
- `def-total-variation-of-a-signed-or-complex-measure` · definition — The total variation |nu|(E) from countable measurable partitions
- `prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation` · proposition — A set is null for a signed measure exactly when its total variation is zero there
- `def-mutually-singular-measures` · definition — Mutual singularity for signed or complex measures
- `lem-finite-signed-measure-sets-have-only-finite-subset-values` · lemma — A subset of a set of finite signed measure also has finite signed measure
- `prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity` · proposition — If a disjoint union has finite signed measure, then the signed-measure series converges absolutely
- `lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass` · lemma — A set of positive finite signed measure contains a positive subset of at least the same mass
- `thm-hahn-decomposition-for-signed-measures` · theorem — Hahn decomposition for signed measures, unique up to total-variation-null sets
- `thm-jordan-decomposition-for-signed-measures` · theorem — Jordan decomposition of a signed measure into unique mutually singular positive parts
- `thm-continuity-from-below-and-above-for-signed-measures` · theorem — Continuity from below, and from above when one set has finite signed measure
- `prop-jordan-parts-and-total-variation-formulas-for-signed-measures` · proposition — For a signed measure, total variation is nu-plus plus nu-minus, finite partitions suffice, and nu-plus and nu-minus are extremal
- `thm-total-variation-of-a-complex-measure-is-finite` · theorem — Every complex measure has finite total variation
- `thm-total-variation-is-a-measure` · theorem — The total variation of a signed or complex measure is a positive measure
- `def-complex-simple-function` · definition — Complex simple functions as finite sums of measurable indicators
- `def-simple-integral-against-a-signed-or-complex-measure` · definition — The simple integral against a signed or complex measure
- `prop-simple-integrals-are-bounded-by-total-variation` · proposition — Simple integrals are bounded by total variation
- `thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals` · theorem — Total variation is the supremum of simple integrals over unit-bounded test functions
- `thm-l-one-functions-admit-dominated-complex-simple-approximations` · theorem — Every L^1 function admits dominated complex simple approximations
- `def-integration-against-a-signed-or-complex-measure` · definition — Integration against a signed or complex measure, and the class L^1(nu) = L^1(|nu|)
- `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation` · theorem — Integrals against signed or complex measures are bounded by total variation
- `thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation` · theorem — A complex L^1 density defines a complex measure whose total variation is |h| dmu
- `def-the-space-of-finite-total-variation-signed-measures` · definition — The class M(X, A) of signed measures with finite total variation and the quantity ||nu|| = |nu|(X)
- `thm-finite-total-variation-signed-measures-form-a-real-normed-space` · theorem — Finite-total-variation signed measures form a real normed space
- `thm-finite-total-variation-signed-measures-are-complete` · theorem — Finite-total-variation signed measures are complete in the total-variation norm
- `thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data` · theorem — A real L^1 density defines a finite signed measure with Hahn sets {f > 0} and {f <= 0}, Jordan parts f-plus dmu and f-minus dmu, and total variation |f| dmu

### `signed-and-complex-measures-hahn-and-jordan-examples` — Signed and Complex Measures Hahn and Jordan — Examples (15 item(s))

- `ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition` · example — For nu = delta_1 - delta_{-1}, the Hahn sets are {1} and {-1}, the Jordan parts are delta_1 and delta_{-1}, and ||nu|| = 2
- `ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions` · example — For nu(E) = int_E sin x d lambda on [0,2 pi], one Hahn decomposition is [0,pi] and (pi,2 pi], while the canonical density sets are {sin x > 0} and {sin x <= 0}
- `ex-an-atomic-signed-measure-on-z-has-total-variation-three` · example — The signed counting-measure density nu({k}) = (-1)^k 2^{-|k|} on Z has total variation 3
- `ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form` · example — On [0,1], mu_c - lambda is already the difference of mutually singular positive measures
- `ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi` · example — The complex measure dnu = e^{ix} d lambda on [0,2 pi] has total variation 2 pi
- `cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure` · counterexample — Finite partitions need not attain complex total variation
- `cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition` · counterexample — Moving the singleton {pi} changes a Hahn decomposition of sin x d lambda without changing its total-variation class
- `cex-total-variation-can-exceed-the-absolute-value-of-the-set-value` · counterexample — For nu = delta_1 - delta_{-1}, total variation of the whole set exceeds the absolute value of nu(X)
- `cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation` · counterexample — On the finite-cofinite sigma-algebra of N, a finite-valued finitely additive set function can have infinite total variation
- `fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity` · false-statement — FALSE: a signed measure may take both +infty and -infty
- `fs-a-hahn-decomposition-is-unique` · false-statement — FALSE: a Hahn decomposition is unique
- `fs-total-variation-always-equals-the-absolute-value-of-the-set-value` · false-statement — FALSE: for every signed measure and measurable E, |nu|(E) = |nu(E)|
- `fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure` · false-statement — FALSE: signed measures agreeing on a generating pi-system are always equal
- `fs-finite-values-and-finite-additivity-force-finite-total-variation` · false-statement — FALSE: a finite-valued finitely additive set function must have finite total variation
- `fs-finite-partitions-always-suffice-for-complex-total-variation` · false-statement — FALSE: finite partitions always suffice to compute the total variation of a complex measure

### `the-riemann-mapping-theorem` — The Riemann Mapping Theorem (18 item(s))

- `def-univalent-holomorphic-function` · definition — Univalent holomorphic functions
- `def-normalized-univalent-class` · definition — The normalized univalent class on the unit disc
- `def-riemann-map-extremal-family` · definition — The extremal family of disc-valued univalent maps fixing a basepoint
- `lem-riemann-map-extremal-family-is-nonempty` · lemma — A proper homologically simply connected plane domain has a bounded univalent competitor
- `lem-riemann-map-extremal-derivatives-are-positive-and-bounded` · lemma — The extremal derivatives are positive and have a finite supremum
- `lem-riemann-map-extremal-derivative-is-attained` · lemma — A maximizing sequence has a locally uniform limit with extremal derivative
- `lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent` · lemma — A nonconstant locally uniform limit of univalent functions is univalent
- `lem-riemann-map-extremizer-is-univalent` · lemma — The extremal limit is univalent
- `lem-riemann-map-extremizer-is-surjective` · lemma — An extremizer onto a proper subdomain of the disc can be enlarged
- `thm-riemann-mapping-theorem` · theorem — Every proper homologically simply connected plane domain is conformally equivalent to the unit disc
- `cor-uniqueness-of-the-normalized-riemann-map` · corollary — The normalized Riemann map is unique
- `thm-area-theorem-for-exterior-univalent-functions` · theorem — The area theorem for exterior univalent functions
- `cor-bieberbach-second-coefficient-bound` · corollary — The second coefficient of a normalized univalent function has modulus at most two
- `thm-koebe-one-quarter-theorem` · theorem — Every normalized univalent disc map contains the quarter disc
- `thm-koebe-distortion-theorem` · theorem — Koebe's distortion theorem
- `thm-koebe-growth-theorem` · theorem — Koebe's growth theorem
- `cor-quarter-disc-inclusion-for-univalent-functions` · corollary — A quarter-disc inclusion at every point of a univalent disc map
- `rem-choice-strength-of-the-riemann-mapping-proof` · remark — Choice strength used in the extremal proof of the Riemann mapping theorem

### `the-riemann-mapping-theorem-examples` — The Riemann Mapping Theorem — Examples (9 item(s))

- `ex-normalized-riemann-map-for-the-upper-half-plane-at-i` · example — The normalized Riemann map from the upper half-plane sending i to 0
- `ex-normalized-riemann-map-for-a-horizontal-strip` · example — A normalized Riemann map for a horizontal strip
- `ex-normalized-riemann-map-for-a-sector-with-branch-choice` · example — A normalized Riemann map for a sector with an explicit branch choice
- `ex-normalized-riemann-map-for-the-slit-plane` · example — A normalized Riemann map for the slit plane
- `ex-the-unit-disc-extremal-problem-is-solved-by-the-identity` · example — The extremal problem on the unit disc is solved by the identity map
- `ex-koebe-function-realizes-the-quarter-disc-bound` · example — The Koebe function shows the quarter-disc constant is sharp
- `cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist` · counterexample — The punctured disc is not biholomorphic to the unit disc
- `fs-riemann-map-is-unique-without-normalization` · false-statement — FALSE: the Riemann map is unique without normalization
- `fs-conformal-equivalence-preserves-euclidean-area` · false-statement — FALSE: a conformal equivalence preserves Euclidean area

### `bloch-schottky-and-picard` — Bloch, Schottky, and the Picard Theorems (16 item(s))

- `def-bloch-radius-and-bloch-constant` · definition — Bloch radii and the Bloch constant
- `def-landau-radius-and-landau-constant` · definition — Landau radii and the Landau constant
- `def-two-value-omitting-holomorphic-family` · definition — Families of holomorphic functions omitting two common finite values
- `lem-bloch-rescaling-at-an-almost-maximal-derivative` · lemma — Maximizing-point rescaling produces a normalized map with uniformly bounded derivative
- `lem-quantitative-univalence-from-controlled-derivative` · lemma — Controlled derivative oscillation forces injectivity on a fixed subdisc
- `thm-bloch-theorem` · theorem — Bloch's theorem
- `thm-landau-theorem` · theorem — Landau's theorem
- `lem-holomorphic-logarithms-for-two-omitted-values` · lemma — Disc functions omitting 0 and 1 admit holomorphic logarithms for f and 1-f
- `thm-schottky-theorem` · theorem — Schottky's theorem
- `thm-montel-caratheodory-theorem` · theorem — Families omitting two values are chordally normal
- `thm-little-picard-theorem` · theorem — Little Picard theorem
- `lem-two-omitted-values-rule-out-an-essential-singularity` · lemma — Two omitted finite values rule out an essential singularity
- `thm-great-picard-theorem` · theorem — Great Picard theorem
- `cor-meromorphic-little-picard-theorem` · corollary — A nonconstant meromorphic function on the plane omits at most two sphere values
- `cor-meromorphic-great-picard-theorem` · corollary — A meromorphic essential singularity omits at most two sphere values
- `rem-agreement-between-classical-and-nevanlinna-picard-theorems` · remark — Agreement between the classical and Nevanlinna proofs of Picard's theorems

### `bloch-schottky-and-picard-examples` — Bloch, Schottky, and the Picard Theorems — Examples (7 item(s))

- `ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four` · example — The elementary Bloch proof on this page yields the explicit lower bound 1/48
- `ex-schottky-bound-for-a-map-with-center-value-one-half` · example — Schottky's theorem applied to a disc map with center value 1/2
- `ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp` · example — The exponential function omits exactly zero and shows little Picard is sharp
- `ex-exp-one-over-z-shows-great-picard-is-sharp` · example — The function e^(1/z) omits zero and takes every nonzero value infinitely often near the origin
- `cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values` · counterexample — The exponential function omits 0 and infinity as a meromorphic map on the plane
- `fs-little-picard-needs-a-boundedness-hypothesis` · false-statement — FALSE: little Picard needs a boundedness hypothesis
- `fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value` · false-statement — FALSE: a nonconstant meromorphic function on the plane omits at most one sphere value

### `mittag-leffler-and-runges-theorem` — Mittag-Leffler and Runge's Theorem (18 item(s))

- `def-principal-part-at-an-isolated-point` · definition — The principal part at an isolated singularity
- `def-rational-approximation-with-a-runge-pole-set` · definition — Runge pole sets for rational approximation on a compact set
- `def-pole-pushing-along-a-chain-of-discs` · definition — Pole pushing along a chain of discs
- `lem-grid-cycle-for-runge-approximation` · lemma — A square-grid cycle enclosing a compact set
- `lem-cauchy-riemann-sums-give-rational-approximation` · lemma — Riemann sums of the Cauchy integral give rational approximation
- `lem-runge-pole-pushing-lemma` · lemma — Runge's pole-pushing lemma
- `thm-runge-approximation-with-prescribed-poles` · theorem — Runge approximation with a prescribed pole set
- `cor-runge-polynomial-approximation` · corollary — Runge polynomial approximation when the complement is connected
- `def-runge-approximation-on-a-plane-domain` · definition — Runge approximation on a plane domain
- `thm-runge-approximation-on-plane-domains` · theorem — Runge approximation on plane domains
- `thm-mittag-leffler-theorem-on-the-plane` · theorem — Mittag-Leffler on the complex plane
- `thm-mittag-leffler-theorem-on-plane-domains` · theorem — Mittag-Leffler on plane domains
- `thm-mittag-leffler-expansion-of-pi-cotangent` · theorem — The Mittag-Leffler expansion of pi cotangent
- `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared` · corollary — The partial-fraction expansion of pi-squared cosecant-squared
- `thm-zero-divisor-theorem-on-plane-domains` · theorem — Every discrete effective divisor on a plane domain is the zero divisor of a holomorphic function
- `cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients` · corollary — Every meromorphic function on a plane domain is a quotient of holomorphic functions
- `cor-meromorphic-functions-on-a-domain-form-a-field` · corollary — Meromorphic functions on a connected plane domain form a field
- `rem-choice-strength-of-runge-and-mittag-leffler` · remark — Choice bookkeeping for Runge and Mittag-Leffler

### `mittag-leffler-and-runges-theorem-examples` — Mittag-Leffler and Runge's Theorem — Examples (7 item(s))

- `ex-one-over-z-not-polynomially-approximable-on-unit-circle` · example — $1/z$ is not uniformly approximable by polynomials on the unit circle
- `ex-pole-pushing-along-three-discs` · example — Pole pushing along an explicit chain of three discs
- `ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared` · example — The cotangent expansion computes $\sum_{n\in\mathbb Z} 1/(n^2+a^2)$
- `ex-mittag-leffler-function-with-double-poles-at-the-integers` · example — A Mittag-Leffler function with double poles at the integers
- `fs-runge-gives-polynomial-approximation-on-any-compact-set` · false-statement — FALSE: Runge's theorem gives polynomial approximation on every compact set
- `cex-annulus-needs-a-pole-in-each-bounded-complementary-component` · counterexample — The annulus shows Runge approximation needs a pole in each bounded complementary component
- `fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts` · false-statement — FALSE: a meromorphic function always equals the naive sum of its principal parts

### `the-gamma-function` — The Gamma Function (20 item(s))

- `def-euler-gamma-function` · definition — Euler's Gamma function on the right half-plane
- `lem-gamma-integral-converges-locally-uniformly` · lemma — Euler's Gamma integral converges locally uniformly on the right half-plane
- `thm-euler-gamma-function-is-holomorphic` · theorem — Euler's Gamma function is holomorphic on the right half-plane
- `thm-complex-gamma-restricts-to-the-real-gamma-function` · theorem — The complex Gamma function restricts to the real Gamma function
- `thm-gamma-functional-equation` · theorem — The Gamma functional equation
- `cor-gamma-factorial-values` · corollary — Gamma at the positive integers
- `thm-gamma-meromorphic-continuation` · theorem — Meromorphic continuation of Gamma
- `thm-euler-limit-formula-for-gamma` · theorem — Euler's limit formula for Gamma
- `thm-gamma-weierstrass-product` · theorem — The Weierstrass product for reciprocal Gamma
- `cor-gamma-function-has-no-zeros` · corollary — Gamma has no zeros
- `thm-euler-reflection-formula` · theorem — Euler's reflection formula
- `cor-gamma-one-half-value` · corollary — The value of Gamma at one half
- `def-euler-beta-function` · definition — Euler's Beta function on the right half-planes
- `thm-beta-gamma-identity` · theorem — The Beta-Gamma identity
- `thm-gauss-multiplication-formula` · theorem — Gauss's multiplication formula
- `thm-legendre-duplication-formula` · theorem — Legendre's duplication formula
- `thm-stirling-formula-gamma` · theorem — Stirling's formula for Gamma
- `def-hankel-contour-and-power-branch` · definition — The Hankel contour and the principal power branch
- `thm-hankel-representation-for-reciprocal-gamma` · theorem — Hankel's representation for reciprocal Gamma
- `fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma` · false-statement — FALSE: the Gamma recurrence and factorial values characterize Gamma

### `the-gamma-function-examples` — The Gamma Function — Examples (7 item(s))

- `ex-gamma-values-at-half-integers-and-negative-half-integers` · example — Half-integer and negative-half-integer values of Gamma
- `ex-residue-of-gamma-at-minus-two` · example — The residue of Gamma at z=-2
- `ex-beta-one-half-one-half-equals-pi` · example — $B(1/2,1/2)=\pi$
- `ex-reflection-formula-at-one-half` · example — Checking the reflection formula at z=1/2
- `ex-stirling-approximation-to-ten-factorial` · example — Stirling's approximation for 10!
- `cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values` · counterexample — A periodic perturbation preserves the Gamma recurrence and factorial values
- `fs-gamma-is-entire` · false-statement — FALSE: the Gamma function is entire

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-24-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-24`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
