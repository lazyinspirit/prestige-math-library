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
group work, `research/frontier-26-alpha-groups.json` is the assignment: it permits at
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

run: frontier-26
role: alpha-adjudicate
label: step8-preflight-a-1

# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-26",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "a",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-quote-mismatch [thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise]: L1 quote does not occur in prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector's Statement",
      "output": "proof-contract: 171 error(s), 2 warning(s), 352/352 item(s) checked\nERROR citation-quote-mismatch [thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise]: L1 quote does not occur in prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector's Statement\nERROR citation-quote-mismatch [thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]: L1 quote does not occur in prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector's Statement\nERROR citation-quote-mismatch [prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance]: L1 quote does not occur in thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization's Statement\nERROR citation-quote-mismatch [prop-ritz-residual-formula-for-an-arnoldi-ritz-pair]: L1 quote does not occur in thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization's Statement\nERROR citation-quote-mismatch [thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem]: L1 quote does not occur in thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization's Statement\nERROR citation-quote-mismatch [prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual]: L1 quote does not occur in prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector's Statement\nERROR citation-quote-mismatch [ex-arnoldi-factorization-by-hand-for-a-three-step-krylov-chain]: L1 quote does not occur in thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization's Statement\nERROR citation-quote-mismatch [prop-matrix-differentials-obey-sum-product-and-adjoint-rules]: F1 quote does not occur in def-real-frechet-derivative-on-real-and-complex-matrix-spaces's Definition\nERROR citation-quote-mismatch [prop-differentials-of-trace-and-frobenius-linear-functionals]: F1 quote does not occur in def-real-frechet-derivative-on-real-and-complex-matrix-spaces's Definition\nERROR citation-quote-mismatch [prop-simple-eigenvalues-admit-left-right-normalization]: F1 quote does not occur in def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue's Definition\nERROR citation-quote-mismatch [prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x]: F1 quote does not occur in def-condition-number-of-a-simple-eigenvalue's Definition\nERROR citation-quote-mismatch [thm-holder-inequality-for-integrals]: L2 quote does not occur in def-calligraphic-l-p-on-a-measure-space's Definition\nERROR citation-quote-mismatch [thm-equality-case-in-holder-inequality]: L4 quote does not occur in def-calligraphic-l-p-on-a-measure-space's Definition\nERROR citation-quote-mismatch [thm-generalized-holder-inequality-for-products]: L3 quote does not occur in def-calligraphic-l-p-on-a-measure-space's Definition\nERROR citation-quote-mismatch [thm-minkowski-inequality-for-integrals]: L2 quote does not occur in def-calligraphic-l-p-on-a-measure-space's Definition\nERROR citation-quote-mismatch [thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one]: L1 quote does not occur in def-calligraphic-l-p-on-a-measure-space's Definition\nERROR citation-quote-mismatch [thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]: L3 quote does not occur in def-calligraphic-l-p-on-a-measure-space's Definition\nERROR citation-quote-mismatch [thm-lyapunov-interpolation-inequality-for-l-p-norms]: L3 quote does not occur in def-calligraphic-l-p-on-a-measure-space's Definition\nERROR citation-quote-mismatch [thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions]: L2 quote does not occur in def-calligraphic-l-p-on-a-measure-space's Definition\nERROR citation-quote-mismatch [ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership]: L1 quote does not occur in def-calligraphic-l-p-on-a-measure-space's Definition\nERROR citation-quote-mismatch [cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions]: L2 quote does not occur in def-calligraphic-l-p-on-a-measure-space's Definition\nERROR citation-quote-mismatch [cor-single-valued-continuation-on-simply-connected-domains]: L1 quote does not occur in thm-monodromy-theorem's Statement\nERROR citation-quote-mismatch [thm-the-module-endofunctor-category-is-strict-monoidal]: L1 quote does not occur in def-the-category-of-right-module-endofunctors's Definition\nERROR citation-quote-mismatch [thm-mac-lane-strictification]: L1 quote does not occur in def-the-category-of-right-module-endofunctors's Definition\nERROR citation-use-step-missing [fs-every-diagram-in-a-monoidal-category-commutes]: L1 names missing step 1.2\nERROR citation-use-unmapped [fs-every-diagram-in-a-monoidal-category-commutes]: L1 is cited by 3.1 but the contract omits it\nERROR citation-fact-uncontracted [fs-every-diagram-in-a-monoidal-category-commutes]: L2 -> thm-a-category-with-finite-products-is-monoidal needs an exact citation contract\nERROR step-entry-input-omitted [fs-every-diagram-in-a-monoidal-category-commutes]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-step-missing [fs-every-diagram-in-a-monoidal-category-commutes]: derivations step-1-2 names missing 1.2\nERROR step-entry-input-step-missing [fs-every-diagram-in-a-monoidal-category-commutes]: step-2-1 names missing step 1.2\nERROR step-unmapped [fs-every-diagram-in-a-monoidal-category-commutes]: 3.1 has no derivation or routine-step contract\nERROR citation-use-not-supported [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: L1 is not cited by declared use 1.1\nERROR citation-use-unmapped [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: L1 is cited by 3.1 but the contract omits it\nERROR citation-quote-mismatch [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: L2 quote does not occur in rem-strictification-gives-equivalence-and-never-isomorphism's Remark\nERROR citation-use-step-missing [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: L2 names missing step 1.2\nERROR citation-use-unmapped [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: L2 is cited by 1.1 but the contract omits it\nERROR citation-fact-uncontracted [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: L3 -> thm-a-category-with-finite-products-is-monoidal needs an exact citation contract\nERROR step-entry-input-omitted [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: step-1-1 omits L3, cited by 1.1\nERROR step-entry-step-missing [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: derivations step-1-2 names missing 1.2\nERROR step-entry-input-step-missing [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: step-2-1 names missing step 1.2\nERROR step-unmapped [fs-every-monoidal-category-is-isomorphic-to-a-strict-one]: 3.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one]: L2 quote does not occur in rem-strictification-gives-equivalence-and-never-isomorphism's Remark\nERROR citation-quote-mismatch [fs-strictification-requires-the-axiom-of-choice]: L1 quote does not occur in rem-the-choice-cost-of-strictification's Remark\nERROR citation-quote-mismatch [thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible]: L5 quote does not occur in prop-cones-preserve-chain-homotopy-equivalences-of-arrows's Statement\nERROR citation-use-unmapped [prop-cones-preserve-chain-homotopy-equivalences-of-arrows]: L1 is cited by 3.1 but the contract omits it\nERROR citation-use-unmapped [prop-cones-preserve-chain-homotopy-equivalences-of-arrows]: L2 is cited by 2.1 but the contract omits it\nERROR step-entry-input-omitted [prop-cones-preserve-chain-homotopy-equivalences-of-arrows]: step-2-1 omits L2, cited by 2.1\nERROR step-unmapped [prop-cones-preserve-chain-homotopy-equivalences-of-arrows]: 3.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows]: L2 quote does not occur in prop-cones-preserve-chain-homotopy-equivalences-of-arrows's Statement\nERROR citation-source-not-in-fact [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: L1 does not link [[thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations]]\nERROR citation-use-step-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: L1 names missing step 4.1\nERROR citation-use-unmapped [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: L1 is cited by 2.1 but the contract omits it\nERROR citation-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: L2 is not a fact in thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: L3 is not a fact in thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: L4 is not a fact in thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: L5 is not a fact in thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: L6 is not a fact in thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property\nERROR step-entry-input-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: step-1-1 names missing fact L2\nERROR step-entry-step-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: derivations step-1-2 names missing 1.2\nERROR step-entry-input-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: step-1-2 names missing fact L3\nERROR step-entry-input-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: step-1-2 names missing fact L4\nERROR step-entry-input-omitted [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: step-2-1 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-step-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: step-2-1 names missing step 1.2\nERROR step-entry-input-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: step-2-1 names missing fact L5\nERROR step-entry-step-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: derivations step-3-1 names missing 3.1\nERROR step-entry-input-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: step-3-1 names missing fact L5\nERROR step-entry-input-fact-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: step-3-1 names missing fact L6\nERROR step-entry-step-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: derivations step-4-1 names missing 4.1\nERROR step-entry-input-step-missing [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]: step-4-1 names missing step 3.1\nERROR citation-quote-mismatch [lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven]: L1 quote does not occur in def-star-expansion-of-a-graph's Definition\nERROR citation-source-not-in-fact [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: L1 does not link [[thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations]]\nERROR citation-use-step-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: L1 names missing step 3.1\nERROR citation-use-unmapped [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: L1 is cited by 2.1 but the contract omits it\nERROR citation-fact-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: L2 is not a fact in thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: L3 is not a fact in thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: L4 is not a fact in thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: L5 is not a fact in thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property\nERROR step-entry-input-omitted [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: step-1-1 omits 7.2, cited by 1.1\nERROR step-entry-input-fact-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: step-1-1 names missing fact L2\nERROR step-entry-step-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: derivations step-1-2 names missing 1.2\nERROR step-entry-input-fact-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: step-1-2 names missing fact L3\nERROR step-entry-input-fact-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: step-1-2 names missing fact L4\nERROR step-entry-input-omitted [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: step-2-1 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-step-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: step-2-1 names missing step 1.2\nERROR step-entry-input-fact-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: step-2-1 names missing fact L5\nERROR step-entry-step-missing [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]: derivations step-3-1 names missing 3.1\nERROR citation-quote-mismatch [lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle]: L1 quote does not occur in def-star-expansion-of-a-graph's Definition\nERROR citation-quote-mismatch [lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle]: L1 quote does not occur in def-star-expansion-of-a-graph's Definition\nERROR citation-source-not-in-fact [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: L1 does not link [[thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations]]\nERROR citation-use-step-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: L1 names missing step 4.1\nERROR citation-use-unmapped [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: L1 is cited by 2.1 but the contract omits it\nERROR citation-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: L2 is not a fact in thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: L3 is not a fact in thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: L4 is not a fact in thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: L5 is not a fact in thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: L6 is not a fact in thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property\nERROR citation-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: L7 is not a fact in thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property\nERROR step-entry-input-omitted [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: step-1-1 omits 8.1, cited by 1.1\nERROR step-entry-input-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: step-1-1 names missing fact L2\nERROR step-entry-input-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: step-1-1 names missing fact L3\nERROR step-entry-input-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: step-1-1 names missing fact L4\nERROR step-entry-input-omitted [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: step-2-1 names missing fact L5\nERROR step-entry-input-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: step-2-1 names missing fact L6\nERROR step-entry-step-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: derivations step-3-1 names missing 3.1\nERROR step-entry-input-fact-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: step-3-1 names missing fact L7\nERROR step-entry-step-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: derivations step-4-1 names missing 4.1\nERROR step-entry-input-step-missing [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property]: step-4-1 names missing step 3.1\nERROR citation-quote-mismatch [ex-the-star-expansion-of-the-four-vertex-path]: L1 quote does not occur in def-star-expansion-of-a-graph's Definition\nERROR citation-quote-mismatch [ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-five-cycle]: L1 quote does not occur in def-star-expansion-of-a-graph's Definition\nERROR citation-quote-mismatch [ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-six-cycle]: L1 quote does not occur in def-star-expansion-of-a-graph's Definition\nERROR citation-quote-mismatch [ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-seven-cycle]: L1 quote does not occur in def-star-expansion-of-a-graph's Definition\nERROR step-entry-input-omitted [lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade]: step-1-1 omits 4.4, cited by 1.1\nERROR step-entry-input-omitted [lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-step-missing [lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade]: derivations step-3-1 names missing 3.1\nERROR citation-source-not-in-fact [lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade]: L1 does not link [[lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair]]\nERROR citation-quote-mismatch [lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade]: L1 quote does not occur in lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair's Statement\nERROR step-entry-input-omitted [lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade]: step-1-1 omits 5.3, cited by 1.1\nERROR step-entry-step-missing [lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade]: derivations step-3-1 names missing 3.1\nERROR step-entry-input-omitted [lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks]: step-1-1 omits L1, cited by 1.1\nERROR citation-quote-mismatch [lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse]: L1 quote does not occur in lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks's Statement\nERROR citation-use-not-supported [lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse]: L1 is not cited by declared use 2.1\nERROR citation-source-not-in-fact [lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse]: L2 does not link [[thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade]]\nERROR citation-quote-mismatch [lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse]: L2 quote does not occur in thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade's Statement\nERROR citation-source-not-in-fact [thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade]: L1 does not link [[lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks]]\nERROR citation-quote-mismatch [thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade]: L1 quote does not occur in lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks's Statement\nERROR citation-fact-missing [thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade]: L2 is not a fact in thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade\nERROR step-entry-input-omitted [thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade]: step-1-1 omits 6.1, cited by 1.1\nERROR step-entry-input-fact-missing [thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade]: step-2-1 names missing fact L2\nERROR step-entry-step-missing [thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade]: derivations step-3-1 names missing 3.1\nERROR citation-quote-mismatch [thm-the-five-vertex-path-is-nice]: L1 quote does not occur in thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade's Statement\nERROR citation-quote-mismatch [thm-the-five-vertex-path-is-nice]: L2 quote does not occur in thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade's Statement\nERROR citation-quote-mismatch [thm-the-five-vertex-path-is-nice]: L3 quote does not occur in def-nice-graph's Definition\nERROR citation-quote-mismatch [lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set]: L2 quote does not occur in lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade's Statement\nERROR citation-source-not-in-fact [lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph]: L1 does not link [[lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set]]\nERROR step-entry-input-omitted [lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph]: step-1-1 omits 7.2, cited by 1.1\nERROR step-entry-step-missing [lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph]: derivations step-3-1 names missing 3.1\nERROR citation-source-not-in-fact [lem-the-minimal-sparsity-parameter-drops-below-the-target]: L1 does not link [[lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph]]\nERROR step-entry-input-omitted [lem-the-minimal-sparsity-parameter-drops-below-the-target]: step-1-1 omits 7.3, cited by 1.1\nERROR citation-source-not-in-fact [thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade]: L1 does not link [[lem-the-minimal-sparsity-parameter-drops-below-the-target]]\nERROR citation-use-unmapped [thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade]: L1 is cited by 1.1 but the contract omits it\nERROR step-entry-input-omitted [thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade]: step-1-1 omits 7.3, cited by 1.1\nERROR step-entry-input-omitted [thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade]: step-1-1 omits L1, cited by 1.1\nERROR citation-use-unmapped [thm-the-five-vertex-path-has-the-polynomial-rodl-property]: L1 is cited by 2.1 but the contract omits it\nERROR step-entry-input-omitted [thm-the-five-vertex-path-has-the-polynomial-rodl-property]: step-2-1 omits L1, cited by 2.1\nERROR citation-quote-mismatch [thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]: L1 quote does not occur in def-vector-subbundle's Definition\nERROR citation-quote-mismatch [prop-orthogonal-complements-of-subbundles-are-smooth-subbundles]: L1 quote does not occur in def-vector-subbundle's Definition\nERROR citation-fact-uncontracted [prop-normal-and-conormal-bundles-are-smooth-vector-bundles]: L0 -> thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure needs an exact citation contract\nERROR citation-fact-uncontracted [prop-normal-and-conormal-bundles-are-smooth-vector-bundles]: L0 -> thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure needs an exact citation contract\nERROR step-entry-input-omitted [prop-normal-and-conormal-bundles-are-smooth-vector-bundles]: step-1-1 omits L0, cited by 1.1\nERROR step-entry-input-omitted [prop-normal-and-conormal-bundles-are-smooth-vector-bundles]: step-2-1 omits L0, cited by 2.1\nERROR citation-fact-uncontracted [prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]: L0 -> prop-normal-and-conormal-bundles-are-smooth-vector-bundles needs an exact citation contract\nERROR step-entry-input-omitted [prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]: step-1-1 omits L0, cited by 1.1\nERROR citation-quote-mismatch [fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle]: L1 quote does not occur in def-vector-subbundle's Definition\nERROR citation-quote-mismatch [fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric]: L1 quote does not occur in def-normal-and-conormal-bundles-of-an-embedded-submanifold's Definition\nERROR citation-fact-uncontracted [ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial]: L3 -> prop-tangent-space-of-a-regular-level-set-is-the-kernel needs an exact citation contract\nERROR step-entry-input-omitted [ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial]: step-1-1 omits L3, cited by 1.1\nERROR citation-quote-mismatch [lem-state-elimination-preserves-path-language]: L1 quote does not occur in def-generalized-nfa's Definition\nERROR citation-quote-mismatch [thm-dfa-to-regular-expression]: L1 quote does not occur in def-generalized-nfa's Definition\nERROR citation-quote-mismatch [lem-machine-encoding-is-injective-and-decodable]: L1 quote does not occur in def-effective-encoding-of-turing-machines's Definition\nERROR citation-source-not-in-fact [lem-machine-encoding-is-injective-and-decodable]: L2 does not link [[lem-finite-tuples-admit-effective-prefix-free-encodings]]\nERROR citation-fact-uncontracted [lem-machine-encoding-is-injective-and-decodable]: L2 -> def-effective-encoding-of-turing-machines needs an exact citation contract\nERROR step-entry-input-omitted [thm-stay-put-moves-can-be-eliminated]: step-4-1 omits 1.1, cited by 4.1\nERROR step-entry-input-omitted [thm-one-way-and-two-way-tapes-are-equivalent]: step-3-1 omits 1.2, cited by 3.1\nERROR citation-quote-mismatch [thm-existence-of-a-universal-turing-machine]: L1 quote does not occur in def-universal-turing-machine's Definition\nERROR citation-quote-mismatch [thm-existence-of-a-universal-turing-machine]: L3 quote does not occur in lem-step-by-step-interpreter-for-machine-codes's Statement\nERROR citation-quote-mismatch [cor-effective-enumeration-of-turing-machines]: L1 quote does not occur in def-effective-encoding-of-turing-machines's Definition\nERROR citation-quote-mismatch [fs-universality-decides-halting]: L1 quote does not occur in def-universal-turing-machine's Definition\nWARN shotgun-bracket [thm-equality-case-in-minkowski-inequality]: 1.3 cites 4 of 4 declared facts while 2 other step(s) cite none — cite each fact at the step that uses it\nWARN shotgun-bracket [thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric]: 1.1 cites 4 of 7 declared facts while 3 other step(s) cite none — cite each fact at the step that uses it\n",
      "named_ids": [
        "thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise",
        "thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization",
        "prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance",
        "prop-ritz-residual-formula-for-an-arnoldi-ritz-pair",
        "thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem",
        "prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual",
        "ex-arnoldi-factorization-by-hand-for-a-three-step-krylov-chain",
        "prop-matrix-differentials-obey-sum-product-and-adjoint-rules",
        "prop-differentials-of-trace-and-frobenius-linear-functionals",
        "prop-simple-eigenvalues-admit-left-right-normalization",
        "prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x",
        "thm-holder-inequality-for-integrals",
        "thm-equality-case-in-holder-inequality",
        "thm-generalized-holder-inequality-for-products",
        "thm-minkowski-inequality-for-integrals",
        "thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one",
        "thm-finite-measure-l-r-includes-into-l-p-for-p-less-r",
        "thm-lyapunov-interpolation-inequality-for-l-p-norms",
        "thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions",
        "ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership",
        "cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions",
        "cor-single-valued-continuation-on-simply-connected-domains",
        "thm-the-module-endofunctor-category-is-strict-monoidal",
        "thm-mac-lane-strictification",
        "fs-every-diagram-in-a-monoidal-category-commutes",
        "fs-every-monoidal-category-is-isomorphic-to-a-strict-one",
        "fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one",
        "fs-strictification-requires-the-axiom-of-choice",
        "thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible",
        "prop-cones-preserve-chain-homotopy-equivalences-of-arrows",
        "prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows",
        "thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property",
        "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations",
        "lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven",
        "thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property",
        "lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle",
        "lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle",
        "thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property",
        "ex-the-star-expansion-of-the-four-vertex-path",
        "ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-five-cycle",
        "ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-six-cycle",
        "ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-seven-cycle",
        "lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade",
        "lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade",
        "lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair",
        "lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks",
        "lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse",
        "thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade",
        "thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade",
        "thm-the-five-vertex-path-is-nice",
        "lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set",
        "lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph",
        "lem-the-minimal-sparsity-parameter-drops-below-the-target",
        "thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade",
        "thm-the-five-vertex-path-has-the-polynomial-rodl-property",
        "thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle",
        "prop-orthogonal-complements-of-subbundles-are-smooth-subbundles",
        "prop-normal-and-conormal-bundles-are-smooth-vector-bundles",
        "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle",
        "fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle",
        "fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric",
        "ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial",
        "lem-state-elimination-preserves-path-language",
        "thm-dfa-to-regular-expression",
        "lem-machine-encoding-is-injective-and-decodable",
        "lem-finite-tuples-admit-effective-prefix-free-encodings",
        "thm-stay-put-moves-can-be-eliminated",
        "thm-one-way-and-two-way-tapes-are-equivalent",
        "thm-existence-of-a-universal-turing-machine",
        "cor-effective-enumeration-of-turing-machines",
        "fs-universality-decides-halting",
        "thm-equality-case-in-minkowski-inequality",
        "thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [ex-semilocal-dedekind-domain-is-a-pid]: ex-semilocal-dedekind-domain-is-a-pid is high risk and lacks a complete Alpha risk_review",
      "output": "HIGH 5 [lem-dedekind-localisation-at-nonzero-prime-is-dvr] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [lem-local-dvr-condition-implies-global-normality] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-local-dvr-condition-implies-dimension-one] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 13 [thm-local-characterisation-of-dedekind-domains] 3:8 declared dependencies; 2:8 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-localisation-of-a-dedekind-domain] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [lem-trace-pairing-for-a-finite-separable-extension] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [thm-finite-integral-closure-in-a-finite-separable-extension] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 3 [lem-fractional-ideal-operations-well-defined] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-invertible-ideal-characterisations] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-nonzero-ideals-in-dedekind-domains-are-invertible] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nCRITICAL 11 [lem-finite-support-of-ideal-valuations] 3:7 declared dependencies; 2:7 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-unique-factorisation-of-ideals-in-dedekind-domains] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [cor-ideal-divisibility-reverses-inclusion-dedekind] 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nCRITICAL 9 [cor-ideals-in-a-dedekind-domain-are-two-generated] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [lem-ideal-class-group-well-defined] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-principal-divisor-exact-sequence] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 12 [thm-dedekind-pid-class-group-characterisation] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [lem-rank-one-projective-embedded-as-a-fractional-ideal] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-invertible-ideals-and-rank-one-projective-modules] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [thm-ideal-class-group-is-the-picard-group] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [lem-finite-torsionfree-modules-over-dedekind-domains-are-projective] 2:6 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [lem-rank-one-summand-of-a-finite-projective-dedekind-module] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [thm-finite-torsionfree-modules-over-dedekind-domains] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [thm-submodules-of-projectives-over-dedekind-domains] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [ex-pid-as-dedekind-domain] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [ex-semilocal-dedekind-domain-is-a-pid] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-fractional-ideal-in-the-integers] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-ideal-inverse-computation] 1:2 cited facts\nHIGH 5 [ex-steinitz-class-rank-two-module] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [ex-dedekind-localisation-is-dvr] 1:2 cited facts\nMODERATE 4 [ex-two-generators-for-a-dedekind-ideal] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [ex-divisor-of-a-fractional-ideal] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [ex-nondedekind-ideal-not-invertible] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector] 2:boundary-sensitive language\nHIGH 5 [thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [prop-ritz-residual-formula-for-an-arnoldi-ritz-pair] 1:2 cited facts\nMODERATE 3 [thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-gmres-minimizes-the-residual-over-the-affine-krylov-space] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cor-unrestarted-gmres-residual-norms-are-nonincreasing] 2:boundary-sensitive language\nMODERATE 3 [prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor] 2:boundary-sensitive language\nMODERATE 3 [prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-a-krylov-chain-with-early-stabilisation-and-its-relative-minimal-polynomial] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [ex-arnoldi-factorization-by-hand-for-a-three-step-krylov-chain] 2:boundary-sensitive language\nORDINARY 2 [ex-lucky-arnoldi-breakdown-on-an-invariant-krylov-space] 2:boundary-sensitive language\nORDINARY 2 [ex-a-ritz-pair-and-its-residual-from-a-small-arnoldi-run] 2:boundary-sensitive language\nORDINARY 2 [ex-gmres-on-a-small-nonsymmetric-system] 2:boundary-sensitive language\nORDINARY 2 [cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning] 2:boundary-sensitive language\nORDINARY 2 [ex-restarted-gmres-versus-full-gmres-on-the-same-system] 2:boundary-sensitive language\nORDINARY 1 [ex-matrix-free-gmres-for-a-sparse-operator] 1:2 cited facts\nORDINARY 2 [prop-matrix-differentials-obey-sum-product-and-adjoint-rules] 2:boundary-sensitive language\nORDINARY 0 [thm-derivative-of-matrix-inversion] no signals\nMODERATE 4 [thm-determinant-differential-and-jacobis-formula] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [prop-differentials-of-trace-and-frobenius-linear-functionals] no signals\nORDINARY 1 [prop-gradient-of-a-quadratic-matrix-form] 1:2 cited facts\nORDINARY 0 [thm-gradient-and-hessian-of-the-frobenius-least-squares-functional] no signals\nORDINARY 2 [prop-simple-eigenvalues-admit-left-right-normalization] 2:boundary-sensitive language\nORDINARY 2 [prop-simple-spectral-projector-is-scale-invariant] 2:boundary-sensitive language\nMODERATE 4 [prop-reduced-resolvent-identities-for-a-simple-eigenvalue] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x] no signals\nHIGH 5 [prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [thm-derivative-of-the-simple-spectral-projector] no signals\nORDINARY 1 [thm-gauge-fixed-simple-eigenvector-derivative-formula] 1:2 cited facts\nHIGH 5 [cor-hermitian-simple-eigenpair-derivative-simplifications] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-directional-derivative-of-a-simple-positive-singular-value] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting] no signals\nORDINARY 0 [cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing] no signals\nORDINARY 2 [ex-the-inverse-derivative-of-a-two-by-two-matrix] 2:boundary-sensitive language\nMODERATE 4 [ex-determinant-differential-at-an-invertible-and-a-singular-matrix] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [ex-the-gradient-and-hessian-of-a-small-least-squares-functional] 2:boundary-sensitive language\nORDINARY 2 [ex-simple-nonnormal-eigenvalue-derivative-uses-left-and-right-eigenvectors] 2:boundary-sensitive language\nORDINARY 2 [ex-a-hermitian-simple-eigenvalue-derivative-is-a-rayleigh-quotient-direction] 2:quotient or equivalence-class construction\nMODERATE 3 [ex-two-gauge-choices-give-different-eigenvector-derivatives] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-a-jordan-block-splits-by-a-square-root-perturbation] no signals\nORDINARY 2 [ex-the-directional-derivative-of-a-simple-singular-value] 2:boundary-sensitive language\nORDINARY 2 [cex-an-eigenvector-branch-cannot-stay-differentiable-through-a-symmetric-crossing] 2:boundary-sensitive language\nCRITICAL 12 [thm-holder-inequality-for-integrals] 3:9 declared dependencies; 2:8 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-equality-case-in-holder-inequality] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-generalized-holder-inequality-for-products] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-cauchy-schwarz-inequality-for-l-two] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-minkowski-inequality-for-integrals] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-equality-case-in-minkowski-inequality] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [prop-essential-supremum-is-attained-as-the-least-essential-bound] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 12 [prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class] 3:8 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 12 [thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 12 [thm-riesz-fischer-completeness-of-l-p] 3:10 declared dependencies; 2:9 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 12 [cor-l-p-convergence-implies-convergence-in-measure] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [thm-finite-measure-l-r-includes-into-l-p-for-p-less-r] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-ell-p-includes-into-ell-r-for-p-less-r] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-lyapunov-interpolation-inequality-for-l-p-norms] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-parallelogram-law-in-l-two] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nCRITICAL 15 [thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric] 3:12 declared dependencies; 2:12 cited facts; 1:7 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-k-to-the-minus-a-membership-in-ell-p] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [ex-finite-counting-measure-on-n-points-recovers-rn-p-norms] 2:6 declared dependencies; 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [ex-proportional-functions-realise-the-equality-case-of-holder] no signals\nORDINARY 2 [ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum] 2:analytic limiting/completeness language\nORDINARY 0 [ex-the-parallelogram-law-on-two-indicator-functions-in-l-two] no signals\nMODERATE 3 [cex-l-one-not-subset-l-two-on-the-line] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-l-two-not-subset-l-one-on-the-line] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-half-norm-fails-the-triangle-inequality-on-two-indicators] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [fs-the-essential-supremum-equals-the-pointwise-supremum] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [fs-l-one-half-with-its-p-functional-is-a-normed-space] 1:2 cited facts\nHIGH 5 [fs-holder-equality-forces-the-functions-themselves-to-be-proportional] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-holomorphic-germs-at-a-point-form-a-local-ring] 1:3 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [lem-refinement-of-analytic-continuation-chains] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-end-germ-of-path-continuation-is-independent-of-the-chain] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [thm-uniqueness-of-analytic-continuation] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-monodromy-theorem] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [cor-single-valued-continuation-on-simply-connected-domains] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 7 [lem-germ-neighborhoods-form-a-riemann-surface-basis] 2:6 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nORDINARY 1 [thm-germ-projection-is-a-local-biholomorphism] 1:2 cited facts\nHIGH 6 [thm-riemann-surface-of-the-logarithm] 2:6 declared dependencies; 1:3 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nHIGH 6 [thm-riemann-surface-of-an-nth-root] 1:3 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-circle-of-convergence-contains-a-singular-point] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-pringsheim-theorem] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-square-root-continuation-around-the-origin-changes-sign] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-helicoid-model-of-the-logarithm-surface] 2:quotient or equivalence-class construction\nORDINARY 0 [ex-two-sheeted-model-of-the-square-root-surface] no signals\nCRITICAL 8 [ex-the-geometric-series-has-only-one-singular-boundary-point] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [fs-every-holomorphic-function-on-a-domain-continues-past-its-boundary] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [fs-continuation-along-same-endpoint-paths-always-agrees] 2:boundary-sensitive language\nMODERATE 3 [fs-the-riemann-surface-of-a-multivalued-function-is-always-a-subset-of-c-squared] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [fs-every-boundary-point-of-a-radius-one-power-series-is-singular] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [lem-harmonic-sum-asymptotic] 2:5 declared dependencies; 2:analytic limiting/completeness language\nORDINARY 2 [thm-dirichlet-hyperbola-method] 2:boundary-sensitive language\nORDINARY 0 [thm-divisor-counting-summatory-estimate] no signals\nHIGH 6 [lem-summatory-logarithm-asymptotic] 2:6 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [cor-average-order-of-divisor-counting-function] no signals\nORDINARY 2 [thm-divisor-sum-summatory-estimate] 2:boundary-sensitive language\nORDINARY 0 [cor-average-order-of-divisor-sum-function] no signals\nHIGH 5 [thm-euler-totient-summatory-estimate] 3:7 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [cor-average-order-of-euler-totient] no signals\nORDINARY 2 [thm-coprime-pair-counting-asymptotic] 2:boundary-sensitive language\nORDINARY 0 [cor-asymptotic-density-of-coprime-pairs] no signals\nMODERATE 4 [lem-normalized-two-square-count-is-multiplicative] 2:4 declared dependencies; 2:boundary-sensitive language\nHIGH 6 [thm-two-square-representation-count] 2:6 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [cor-average-order-of-two-square-representations] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [ex-dirichlet-hyperbola-lattice-decomposition] no signals\nMODERATE 4 [ex-divisor-summatory-error-table] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-the-category-of-binary-words-is-monoidal] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [thm-the-module-endofunctor-category-is-strict-monoidal] 1:2 cited facts\nHIGH 5 [thm-mac-lane-strictification] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps\nHIGH 6 [thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-mac-lane-coherence-in-the-canonical-map-form] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [thm-unbracketed-tensor-strings-are-well-defined-expressions] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [thm-the-monoid-object-axioms-may-be-written-without-associators] 1:3 cited facts\nCRITICAL 10 [thm-the-word-category-is-the-free-monoidal-category-on-one-generator] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [cor-coherence-follows-from-freeness] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [fs-every-diagram-in-a-monoidal-category-commutes] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-every-monoidal-category-is-isomorphic-to-a-strict-one] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal] 2:boundary-sensitive language\nMODERATE 4 [fs-strictification-requires-the-axiom-of-choice] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [ex-the-two-routes-around-the-pentagon-are-equal] 2:boundary-sensitive language\nORDINARY 2 [ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product] 2:boundary-sensitive language\nMODERATE 3 [ex-the-word-category-on-words-of-length-three] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-strictification-of-a-cartesian-monoidal-category-computed] 1:2 cited facts\nMODERATE 3 [cex-two-formally-distinct-words-that-become-the-same-object] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-a-monoid-object-written-with-and-without-associators] 1:2 cited facts\nMODERATE 3 [lem-the-mapping-cone-differential-squares-to-zero] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-the-cone-of-an-identity-map-is-contractible] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-isomorphic-chain-maps-have-isomorphic-cones] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones] 1:2 cited facts\nORDINARY 1 [prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes] 1:2 cited facts\nMODERATE 3 [lem-homotopic-maps-have-chain-isomorphic-mapping-cones] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 9 [thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible] 2:6 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [lem-the-mapping-cylinder-differential-squares-to-zero] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-the-mapping-cylinder-factors-a-chain-map] 2:6 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-the-target-is-a-strong-deformation-retract-of-the-mapping-cylinder] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence] no signals\nHIGH 5 [prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone] 2:4 declared dependencies; 1:3 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [prop-cones-preserve-chain-homotopy-equivalences-of-arrows] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-the-three-cone-calculation-for-a-composite-chain-map] 2:5 declared dependencies; 1:3 cited facts\nHIGH 5 [prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category] 2:6 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category] 1:2 cited facts\nMODERATE 3 [prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism] 2:4 declared dependencies; 1:3 cited facts\nMODERATE 4 [prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences] 2:6 declared dependencies; 2:4 cited facts\nMODERATE 4 [prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 1 [cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms] 1:3 cited facts\nMODERATE 3 [fs-the-mapping-cone-differential-needs-no-minus-sign] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [fs-an-acyclic-mapping-cone-is-contractible] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [fs-the-mapping-cylinder-factorization-is-a-model-category-factorization] no signals\nMODERATE 3 [ex-the-cone-of-multiplication-by-m-on-the-integers] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-cone-of-zero-and-of-the-identity] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-a-quasi-isomorphism-detected-by-an-acyclic-cone] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [cex-an-acyclic-noncontractible-cone] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes] 1:2 cited facts\nORDINARY 1 [ex-relative-homology-of-a-map-between-stalk-complexes] 1:2 cited facts\nORDINARY 1 [ex-the-three-cone-calculation-for-a-composite] 1:2 cited facts\nMODERATE 3 [cex-a-degreewise-split-cone-sequence-with-no-chain-splitting] 2:4 declared dependencies; 1:2 cited facts\nHIGH 5 [thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree] 2:5 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement] 2:6 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property] 3:8 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property] no signals\nORDINARY 0 [lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven] no signals\nMODERATE 4 [cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property] 2:4 declared dependencies; 1:3 cited facts; 1:finite countermodel smoke test selected\nMODERATE 3 [cor-the-seven-cycle-and-its-complement-have-the-erdos-hajnal-property] 2:4 declared dependencies; 1:3 cited facts\nORDINARY 2 [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property] 2:6 declared dependencies\nORDINARY 0 [lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle] no signals\nMODERATE 3 [thm-a-cycle-and-a-forest-complement-have-the-erdos-hajnal-property] 2:5 declared dependencies; 1:3 cited facts\nMODERATE 4 [lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components] 2:5 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle] no signals\nHIGH 5 [thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property] 3:8 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [ex-the-star-expansion-of-the-four-vertex-path] no signals\nORDINARY 0 [ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-five-cycle] no signals\nORDINARY 0 [ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-six-cycle] no signals\nORDINARY 0 [ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-seven-cycle] no signals\nORDINARY 0 [ex-the-star-expansion-of-k-three-contains-the-hatted-five-cycle] no signals\nMODERATE 4 [lem-small-anticonnected-components-yield-a-complete-blockade] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [lem-a-dense-bipartite-side-has-a-small-hitting-set] no signals\nORDINARY 2 [lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair] 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 8 [lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs] 2:5 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade] 2:6 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks] no signals\nORDINARY 2 [lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse] 2:5 declared dependencies\nMODERATE 4 [thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade] 2:6 declared dependencies; 2:analytic limiting/completeness language\nMODERATE 3 [thm-the-five-vertex-path-is-nice] 2:4 declared dependencies; 1:3 cited facts\nHIGH 6 [lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set] 2:4 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [lem-the-minimal-sparsity-parameter-drops-below-the-target] 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nHIGH 6 [thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [thm-the-five-vertex-path-has-the-polynomial-rodl-property] 1:2 cited facts\nORDINARY 1 [cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property] 1:2 cited facts\nORDINARY 2 [ex-two-large-anticonnected-components-give-a-complete-two-blockade] 2:boundary-sensitive language\nORDINARY 0 [ex-a-sparse-p-five-free-graph-with-an-anticomplete-two-blockade] no signals\nORDINARY 0 [ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five] no signals\nMODERATE 4 [ex-a-layout-with-a-single-wrong-decided-pair] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [prop-a-vector-bundle-projection-is-a-surjective-submersion] 2:4 declared dependencies; 1:2 cited facts\nORDINARY 2 [lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities] 2:boundary-sensitive language\nHIGH 7 [thm-vector-bundle-construction-from-a-smooth-cocycle] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [prop-isomorphic-cocycles-define-isomorphic-vector-bundles] 2:quotient or equivalence-class construction\nMODERATE 3 [prop-the-zero-section-is-a-smooth-embedding] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r] no signals\nHIGH 5 [prop-local-frames-and-local-trivializations-are-equivalent-data] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame] 3:biconditional / both-direction claim\nHIGH 6 [prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components] 2:4 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [prop-smooth-sections-form-a-module-over-smooth-functions] 1:2 cited facts\nMODERATE 4 [lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [lem-locally-finite-linear-combinations-of-sections-are-smooth] 2:4 declared dependencies; 1:2 cited facts\nCRITICAL 8 [prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices] 2:4 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 8 [prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-the-pullback-fibre-product-is-a-smooth-vector-bundle] 2:4 declared dependencies; 1:2 cited facts\nORDINARY 1 [prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism] 1:2 cited facts\nORDINARY 0 [thm-whitney-sums-are-smooth-vector-bundles] no signals\nHIGH 5 [thm-dual-and-hom-transition-functions-define-smooth-bundles] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle] 2:4 declared dependencies; 1:2 cited facts\nMODERATE 4 [thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map] 2:quotient or equivalence-class construction\nMODERATE 3 [thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric] 2:5 declared dependencies; 1:2 cited facts\nMODERATE 3 [prop-orthogonal-complements-of-subbundles-are-smooth-subbundles] 2:5 declared dependencies; 1:2 cited facts\nMODERATE 3 [cor-every-vector-subbundle-has-a-smooth-complement] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [cor-every-short-exact-sequence-of-smooth-vector-bundles-splits] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 7 [prop-normal-and-conormal-bundles-are-smooth-vector-bundles] 3:7 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 8 [prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [cor-every-smooth-manifold-admits-a-riemannian-metric] 1:2 cited facts\nHIGH 7 [prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [fs-every-vector-bundle-is-globally-trivial] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 0 [fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth] no signals\nHIGH 5 [fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting] no signals\nMODERATE 3 [fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 0 [fs-the-pullback-bundle-is-the-set-theoretic-inverse-image-of-the-total-space] no signals\nORDINARY 0 [ex-the-trivial-line-bundle-and-its-sections-as-functions] no signals\nMODERATE 3 [ex-the-mobius-line-bundle-from-a-transition-function] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-the-tautological-line-bundle-over-real-projective-space] no signals\nORDINARY 1 [ex-the-tangent-and-cotangent-bundles-as-vector-bundles] 1:2 cited facts\nCRITICAL 8 [ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-the-tangent-bundle-of-the-circle-is-trivial] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-the-graph-of-a-bundle-map-as-a-subbundle-of-a-whitney-sum] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cex-a-rank-jumping-kernel-is-not-a-vector-subbundle] 2:boundary-sensitive language\nHIGH 7 [lem-denotation-is-structurally-well-defined] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 9 [thm-regular-expression-to-epsilon-nfa] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [lem-state-elimination-preserves-path-language] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-dfa-to-regular-expression] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 9 [thm-kleenes-theorem] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 8 [thm-closure-under-homomorphic-image] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [thm-closure-under-inverse-homomorphism] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [thm-closure-under-left-and-right-quotient] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nHIGH 7 [thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nMODERATE 3 [fs-regular-expression-syntax-is-its-denoted-language] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [fs-state-elimination-has-a-unique-output-expression] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [ex-regular-expression-to-epsilon-nfa] 2:boundary-sensitive language\nORDINARY 0 [ex-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable] no signals\nORDINARY 0 [cex-regular-expression-syntax-is-its-denoted-language] no signals\nHIGH 5 [lem-height-and-yield-bound-for-cnf-trees] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [thm-pumping-lemma-for-context-free-languages] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [thm-ogdens-lemma] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-cfls-are-not-closed-under-intersection] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-cfls-are-not-closed-under-complement] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-cfls-are-closed-under-reversal] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [lem-cyk-table-invariant] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [thm-cyk-membership-algorithm] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-cfl-membership-is-decidable] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-cfg-emptiness-and-finiteness-are-decidable] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-the-cfl-pumping-lemma-characterizes-cfls] 1:2 cited facts\nMODERATE 3 [fs-cyk-needs-no-normal-form-preprocessing] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-cfg-equivalence-is-decidable-by-normalization] no signals\nORDINARY 2 [ex-pumping-lemma-for-context-free-languages] 2:boundary-sensitive language\nORDINARY 2 [ex-cfg-emptiness-and-finiteness-are-decidable] 2:boundary-sensitive language\nMODERATE 3 [cex-the-cfl-pumping-lemma-characterizes-cfls] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [lem-machine-encoding-is-injective-and-decodable] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-stay-put-moves-can-be-eliminated] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [thm-one-way-and-two-way-tapes-are-equivalent] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 11 [thm-multitape-machines-have-one-tape-simulations] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nMODERATE 4 [lem-multitape-simulation-has-quadratic-time-overhead] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-nondeterministic-and-deterministic-recognizability-agree] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-ram-register-and-turing-computability-agree] 2:4 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 10 [lem-step-by-step-interpreter-for-machine-codes] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-existence-of-a-universal-turing-machine] 2:4 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [cor-effective-enumeration-of-turing-machines] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-universality-decides-halting] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-stay-put-moves-can-be-eliminated] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-effective-enumeration-of-turing-machines] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cex-universality-decides-halting] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nrisk-report: 2 error(s), 352 item(s) routed\nERROR risk-review-missing [ex-semilocal-dedekind-domain-is-a-pid]: ex-semilocal-dedekind-domain-is-a-pid is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade]: lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-dedekind-localisation-at-nonzero-prime-is-dvr",
        "lem-local-dvr-condition-implies-global-normality",
        "lem-local-dvr-condition-implies-dimension-one",
        "thm-local-characterisation-of-dedekind-domains",
        "thm-localisation-of-a-dedekind-domain",
        "lem-trace-pairing-for-a-finite-separable-extension",
        "thm-finite-integral-closure-in-a-finite-separable-extension",
        "cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension",
        "lem-fractional-ideal-operations-well-defined",
        "thm-invertible-ideal-characterisations",
        "thm-nonzero-ideals-in-dedekind-domains-are-invertible",
        "lem-finite-support-of-ideal-valuations",
        "thm-unique-factorisation-of-ideals-in-dedekind-domains",
        "cor-ideal-divisibility-reverses-inclusion-dedekind",
        "cor-ideals-in-a-dedekind-domain-are-two-generated",
        "lem-ideal-class-group-well-defined",
        "thm-principal-divisor-exact-sequence",
        "thm-dedekind-pid-class-group-characterisation",
        "lem-rank-one-projective-embedded-as-a-fractional-ideal",
        "thm-invertible-ideals-and-rank-one-projective-modules",
        "thm-ideal-class-group-is-the-picard-group",
        "lem-finite-torsionfree-modules-over-dedekind-domains-are-projective",
        "lem-rank-one-summand-of-a-finite-projective-dedekind-module",
        "thm-finite-torsionfree-modules-over-dedekind-domains",
        "thm-submodules-of-projectives-over-dedekind-domains",
        "ex-pid-as-dedekind-domain",
        "ex-semilocal-dedekind-domain-is-a-pid",
        "ex-fractional-ideal-in-the-integers",
        "ex-ideal-inverse-computation",
        "ex-steinitz-class-rank-two-module",
        "ex-dedekind-localisation-is-dvr",
        "ex-two-generators-for-a-dedekind-ideal",
        "ex-divisor-of-a-fractional-ideal",
        "ex-nondedekind-ideal-not-invertible",
        "prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector",
        "thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise",
        "cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade",
        "thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization",
        "prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance",
        "prop-ritz-residual-formula-for-an-arnoldi-ritz-pair",
        "thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem",
        "cor-gmres-minimizes-the-residual-over-the-affine-krylov-space",
        "cor-unrestarted-gmres-residual-norms-are-nonincreasing",
        "prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual",
        "thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic",
        "prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor",
        "prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination",
        "ex-a-krylov-chain-with-early-stabilisation-and-its-relative-minimal-polynomial",
        "ex-arnoldi-factorization-by-hand-for-a-three-step-krylov-chain",
        "ex-lucky-arnoldi-breakdown-on-an-invariant-krylov-space",
        "ex-a-ritz-pair-and-its-residual-from-a-small-arnoldi-run",
        "ex-gmres-on-a-small-nonsymmetric-system",
        "cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning",
        "ex-restarted-gmres-versus-full-gmres-on-the-same-system",
        "ex-matrix-free-gmres-for-a-sparse-operator",
        "prop-matrix-differentials-obey-sum-product-and-adjoint-rules",
        "thm-derivative-of-matrix-inversion",
        "thm-determinant-differential-and-jacobis-formula",
        "prop-differentials-of-trace-and-frobenius-linear-functionals",
        "prop-gradient-of-a-quadratic-matrix-form",
        "thm-gradient-and-hessian-of-the-frobenius-least-squares-functional",
        "prop-simple-eigenvalues-admit-left-right-normalization",
        "prop-simple-spectral-projector-is-scale-invariant",
        "prop-reduced-resolvent-identities-for-a-simple-eigenvalue",
        "thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing",
        "thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x",
        "prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x",
        "thm-derivative-of-the-simple-spectral-projector",
        "thm-gauge-fixed-simple-eigenvector-derivative-formula",
        "cor-hermitian-simple-eigenpair-derivative-simplifications",
        "thm-directional-derivative-of-a-simple-positive-singular-value",
        "cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting",
        "cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing",
        "ex-the-inverse-derivative-of-a-two-by-two-matrix",
        "ex-determinant-differential-at-an-invertible-and-a-singular-matrix",
        "ex-the-gradient-and-hessian-of-a-small-least-squares-functional",
        "ex-simple-nonnormal-eigenvalue-derivative-uses-left-and-right-eigenvectors",
        "ex-a-hermitian-simple-eigenvalue-derivative-is-a-rayleigh-quotient-direction",
        "ex-two-gauge-choices-give-different-eigenvector-derivatives",
        "ex-a-jordan-block-splits-by-a-square-root-perturbation",
        "ex-the-directional-derivative-of-a-simple-singular-value",
        "cex-an-eigenvector-branch-cannot-stay-differentiable-through-a-symmetric-crossing",
        "thm-holder-inequality-for-integrals",
        "thm-equality-case-in-holder-inequality",
        "thm-generalized-holder-inequality-for-products",
        "cor-cauchy-schwarz-inequality-for-l-two",
        "thm-minkowski-inequality-for-integrals",
        "thm-equality-case-in-minkowski-inequality",
        "prop-essential-supremum-is-attained-as-the-least-essential-bound",
        "thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one",
        "prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class",
        "thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space",
        "thm-riesz-fischer-completeness-of-l-p",
        "cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences",
        "cor-l-p-convergence-implies-convergence-in-measure",
        "thm-finite-measure-l-r-includes-into-l-p-for-p-less-r",
        "thm-ell-p-includes-into-ell-r-for-p-less-r",
        "thm-lyapunov-interpolation-inequality-for-l-p-norms",
        "thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions",
        "thm-parallelogram-law-in-l-two",
        "prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one",
        "thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric",
        "thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one",
        "ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership",
        "ex-k-to-the-minus-a-membership-in-ell-p",
        "ex-finite-counting-measure-on-n-points-recovers-rn-p-norms",
        "ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one",
        "ex-proportional-functions-realise-the-equality-case-of-holder",
        "ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum",
        "ex-the-parallelogram-law-on-two-indicator-functions-in-l-two",
        "cex-l-one-not-subset-l-two-on-the-line",
        "cex-l-two-not-subset-l-one-on-the-line",
        "cex-half-norm-fails-the-triangle-inequality-on-two-indicators",
        "cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm",
        "cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions",
        "fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r",
        "fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm",
        "fs-the-essential-supremum-equals-the-pointwise-supremum",
        "fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere",
        "fs-l-one-half-with-its-p-functional-is-a-normed-space",
        "fs-holder-equality-forces-the-functions-themselves-to-be-proportional",
        "thm-holomorphic-germs-at-a-point-form-a-local-ring",
        "lem-refinement-of-analytic-continuation-chains",
        "thm-end-germ-of-path-continuation-is-independent-of-the-chain",
        "thm-uniqueness-of-analytic-continuation",
        "thm-monodromy-theorem",
        "cor-single-valued-continuation-on-simply-connected-domains",
        "lem-germ-neighborhoods-form-a-riemann-surface-basis",
        "thm-germ-projection-is-a-local-biholomorphism",
        "thm-riemann-surface-of-the-logarithm",
        "thm-riemann-surface-of-an-nth-root",
        "thm-circle-of-convergence-contains-a-singular-point",
        "thm-pringsheim-theorem",
        "thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary",
        "ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i",
        "ex-square-root-continuation-around-the-origin-changes-sign",
        "ex-helicoid-model-of-the-logarithm-surface",
        "ex-two-sheeted-model-of-the-square-root-surface",
        "ex-the-geometric-series-has-only-one-singular-boundary-point",
        "cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary",
        "cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one",
        "fs-every-holomorphic-function-on-a-domain-continues-past-its-boundary",
        "fs-continuation-along-same-endpoint-paths-always-agrees",
        "fs-the-riemann-surface-of-a-multivalued-function-is-always-a-subset-of-c-squared",
        "fs-every-boundary-point-of-a-radius-one-power-series-is-singular",
        "lem-harmonic-sum-asymptotic",
        "thm-dirichlet-hyperbola-method",
        "thm-divisor-counting-summatory-estimate",
        "lem-summatory-logarithm-asymptotic",
        "cor-average-order-of-divisor-counting-function",
        "thm-divisor-sum-summatory-estimate",
        "cor-average-order-of-divisor-sum-function",
        "thm-euler-totient-summatory-estimate",
        "cor-average-order-of-euler-totient",
        "thm-coprime-pair-counting-asymptotic",
        "cor-asymptotic-density-of-coprime-pairs",
        "lem-normalized-two-square-count-is-multiplicative",
        "thm-two-square-representation-count",
        "cor-average-order-of-two-square-representations",
        "ex-dirichlet-hyperbola-lattice-decomposition",
        "ex-divisor-summatory-error-table",
        "thm-the-category-of-binary-words-is-monoidal",
        "thm-the-module-endofunctor-category-is-strict-monoidal",
        "thm-mac-lane-strictification",
        "thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence",
        "thm-mac-lane-coherence-in-the-canonical-map-form",
        "thm-unbracketed-tensor-strings-are-well-defined-expressions",
        "thm-the-monoid-object-axioms-may-be-written-without-associators",
        "thm-the-word-category-is-the-free-monoidal-category-on-one-generator",
        "cor-coherence-follows-from-freeness",
        "fs-every-diagram-in-a-monoidal-category-commutes",
        "fs-every-monoidal-category-is-isomorphic-to-a-strict-one",
        "fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one",
        "fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal",
        "fs-strictification-requires-the-axiom-of-choice",
        "ex-the-two-routes-around-the-pentagon-are-equal",
        "ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product",
        "ex-the-word-category-on-words-of-length-three",
        "ex-strictification-of-a-cartesian-monoidal-category-computed",
        "cex-two-formally-distinct-words-that-become-the-same-object",
        "ex-a-monoid-object-written-with-and-without-associators",
        "lem-the-mapping-cone-differential-squares-to-zero",
        "thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact",
        "prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift",
        "thm-the-cone-of-an-identity-map-is-contractible",
        "prop-isomorphic-chain-maps-have-isomorphic-cones",
        "thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones",
        "prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes",
        "lem-homotopic-maps-have-chain-isomorphic-mapping-cones",
        "thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic",
        "thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible",
        "lem-the-mapping-cylinder-differential-squares-to-zero",
        "thm-the-mapping-cylinder-factors-a-chain-map",
        "prop-the-target-is-a-strong-deformation-retract-of-the-mapping-cylinder",
        "cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence",
        "prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone",
        "prop-cones-preserve-chain-homotopy-equivalences-of-arrows",
        "lem-the-three-cone-calculation-for-a-composite-chain-map",
        "prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category",
        "prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category",
        "prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism",
        "prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences",
        "prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows",
        "cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms",
        "fs-the-mapping-cone-differential-needs-no-minus-sign",
        "fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting",
        "fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data",
        "fs-an-acyclic-mapping-cone-is-contractible",
        "fs-the-mapping-cylinder-factorization-is-a-model-category-factorization",
        "ex-the-cone-of-multiplication-by-m-on-the-integers",
        "ex-the-cone-of-zero-and-of-the-identity",
        "ex-a-quasi-isomorphism-detected-by-an-acyclic-cone",
        "cex-an-acyclic-noncontractible-cone",
        "ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes",
        "ex-relative-homology-of-a-map-between-stalk-complexes",
        "ex-the-three-cone-calculation-for-a-composite",
        "cex-a-degreewise-split-cone-sequence-with-no-chain-splitting",
        "thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest",
        "cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree",
        "thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement",
        "thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest",
        "thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property",
        "cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property",
        "lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven",
        "cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property",
        "cor-the-seven-cycle-and-its-complement-have-the-erdos-hajnal-property",
        "thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property",
        "lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle",
        "thm-a-cycle-and-a-forest-complement-have-the-erdos-hajnal-property",
        "lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components",
        "lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle",
        "thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property",
        "ex-the-star-expansion-of-the-four-vertex-path",
        "ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-five-cycle",
        "ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-six-cycle",
        "ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-seven-cycle",
        "ex-the-star-expansion-of-k-three-contains-the-hatted-five-cycle",
        "lem-small-anticonnected-components-yield-a-complete-blockade",
        "lem-a-dense-bipartite-side-has-a-small-hitting-set",
        "lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade",
        "lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair",
        "lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade",
        "lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair",
        "lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade",
        "lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs",
        "thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade",
        "lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks",
        "lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse",
        "thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade",
        "thm-the-five-vertex-path-is-nice",
        "lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations",
        "lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade",
        "lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set",
        "lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph",
        "lem-the-minimal-sparsity-parameter-drops-below-the-target",
        "thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade",
        "thm-the-five-vertex-path-has-the-polynomial-rodl-property",
        "cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property",
        "ex-two-large-anticonnected-components-give-a-complete-two-blockade",
        "ex-a-sparse-p-five-free-graph-with-an-anticomplete-two-blockade",
        "ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five",
        "ex-a-layout-with-a-single-wrong-decided-pair",
        "prop-a-vector-bundle-projection-is-a-surjective-submersion",
        "lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities",
        "thm-vector-bundle-construction-from-a-smooth-cocycle",
        "prop-isomorphic-cocycles-define-isomorphic-vector-bundles",
        "prop-the-zero-section-is-a-smooth-embedding",
        "prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r",
        "prop-local-frames-and-local-trivializations-are-equivalent-data",
        "cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame",
        "prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components",
        "prop-smooth-sections-form-a-module-over-smooth-functions",
        "lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section",
        "lem-locally-finite-linear-combinations-of-sections-are-smooth",
        "prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices",
        "prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism",
        "prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles",
        "thm-the-pullback-fibre-product-is-a-smooth-vector-bundle",
        "prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism",
        "thm-whitney-sums-are-smooth-vector-bundles",
        "thm-dual-and-hom-transition-functions-define-smooth-bundles",
        "prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps",
        "prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle",
        "thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle",
        "prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map",
        "thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric",
        "prop-orthogonal-complements-of-subbundles-are-smooth-subbundles",
        "cor-every-vector-subbundle-has-a-smooth-complement",
        "cor-every-short-exact-sequence-of-smooth-vector-bundles-splits",
        "prop-normal-and-conormal-bundles-are-smooth-vector-bundles",
        "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle",
        "cor-every-smooth-manifold-admits-a-riemannian-metric",
        "prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set",
        "fs-every-vector-bundle-is-globally-trivial",
        "fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth",
        "fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle",
        "fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting",
        "fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric",
        "fs-the-pullback-bundle-is-the-set-theoretic-inverse-image-of-the-total-space",
        "ex-the-trivial-line-bundle-and-its-sections-as-functions",
        "ex-the-mobius-line-bundle-from-a-transition-function",
        "ex-the-tautological-line-bundle-over-real-projective-space",
        "ex-the-tangent-and-cotangent-bundles-as-vector-bundles",
        "ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial",
        "ex-the-tangent-bundle-of-the-circle-is-trivial",
        "ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover",
        "ex-the-graph-of-a-bundle-map-as-a-subbundle-of-a-whitney-sum",
        "cex-a-rank-jumping-kernel-is-not-a-vector-subbundle",
        "lem-denotation-is-structurally-well-defined",
        "thm-regular-expression-to-epsilon-nfa",
        "lem-state-elimination-preserves-path-language",
        "thm-dfa-to-regular-expression",
        "thm-kleenes-theorem",
        "thm-closure-under-homomorphic-image",
        "thm-closure-under-inverse-homomorphism",
        "thm-closure-under-left-and-right-quotient",
        "thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable",
        "fs-regular-expression-syntax-is-its-denoted-language",
        "fs-state-elimination-has-a-unique-output-expression",
        "ex-regular-expression-to-epsilon-nfa",
        "ex-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable",
        "cex-regular-expression-syntax-is-its-denoted-language",
        "lem-height-and-yield-bound-for-cnf-trees",
        "thm-pumping-lemma-for-context-free-languages",
        "thm-ogdens-lemma",
        "thm-cfls-are-not-closed-under-intersection",
        "cor-cfls-are-not-closed-under-complement",
        "thm-cfls-are-closed-under-reversal",
        "lem-cyk-table-invariant",
        "thm-cyk-membership-algorithm",
        "cor-cfl-membership-is-decidable",
        "thm-cfg-emptiness-and-finiteness-are-decidable",
        "fs-the-cfl-pumping-lemma-characterizes-cfls",
        "fs-cyk-needs-no-normal-form-preprocessing",
        "fs-cfg-equivalence-is-decidable-by-normalization",
        "ex-pumping-lemma-for-context-free-languages",
        "ex-cfg-emptiness-and-finiteness-are-decidable",
        "cex-the-cfl-pumping-lemma-characterizes-cfls",
        "lem-machine-encoding-is-injective-and-decodable",
        "thm-stay-put-moves-can-be-eliminated",
        "thm-one-way-and-two-way-tapes-are-equivalent",
        "thm-multitape-machines-have-one-tape-simulations",
        "lem-multitape-simulation-has-quadratic-time-overhead",
        "thm-nondeterministic-and-deterministic-recognizability-agree",
        "thm-ram-register-and-turing-computability-agree",
        "lem-step-by-step-interpreter-for-machine-codes",
        "thm-existence-of-a-universal-turing-machine",
        "cor-effective-enumeration-of-turing-machines",
        "fs-universality-decides-halting",
        "ex-stay-put-moves-can-be-eliminated",
        "ex-effective-enumeration-of-turing-machines",
        "cex-universality-decides-halting"
      ]
    },
    {
      "id": "citation-fidelity",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 786 citation(s) over 352 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 5.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  prop-matrix-differentials-obey-sum-product-and-adjoint-rules  [F1] -> def-real-frechet-derivative-on-real-and-complex-matrix-spaces (searched: Definition)\n    quote: \"Let $U$ be an open subset of a real matrix space $\\mathbb R^{m\\times n}$ or of a complex matrix space $\\mathbb C^{m\\times n}$ viewed as a real vector space, and let $F:U\\to W$ take…\"\n\n  prop-differentials-of-trace-and-frobenius-linear-functionals  [F1] -> def-real-frechet-derivative-on-real-and-complex-matrix-spaces (searched: Definition)\n    quote: \"Let $U$ be an open subset of a real matrix space $\\mathbb R^{m\\times n}$ or of a complex matrix space $\\mathbb C^{m\\times n}$ viewed as a real vector space, and let $F:U\\to W$ take…\"\n\n  prop-simple-eigenvalues-admit-left-right-normalization  [F1] -> def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue (searched: Definition)\n    quote: \"Let $\\lambda$ be a simple eigenvalue of a square matrix $A$. A nonzero vector $x$ is a right eigenvector for $\\lambda$ if $$Ax=\\lambda x.$$ A nonzero vector $y$ is a left eigenvect…\"\n\n  lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse  [L2] -> thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade (searched: Statement)\n    quote: \"There exists $d\\ge 40$ such that for every $x\\in(0,2^{-d})$ and every $\\overline{P_5}$-free graph $G$ with $|V(G)|\\ge x^{-d}$, there exists $k\\in[2,x^{-1}]$ and either 1. a pure $(…\"\n\n  thm-the-five-vertex-path-is-nice  [L1] -> thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade (searched: Statement)\n    quote: \"There exists $d\\ge 40$ such that for every $x\\in(0,2^{-d})$ and every $\\overline{P_5}$-free graph $G$ with $|V(G)|\\ge x^{-d}$, there exists $k\\in[2,x^{-1}]$ and either 1. a pure $(…\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-ritz-residual-formula-for-an-arnoldi-ritz-pair",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-arnoldi-factorization-by-hand-for-a-three-step-krylov-chain",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-matrix-differentials-obey-sum-product-and-adjoint-rules",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-differentials-of-trace-and-frobenius-linear-functionals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-simple-eigenvalues-admit-left-right-normalization",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-holder-inequality-for-integrals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-equality-case-in-holder-inequality",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-generalized-holder-inequality-for-products",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-minkowski-inequality-for-integrals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-finite-measure-l-r-includes-into-l-p-for-p-less-r",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-lyapunov-interpolation-inequality-for-l-p-norms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-single-valued-continuation-on-simply-connected-domains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-module-endofunctor-category-is-strict-monoidal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-mac-lane-strictification",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-diagram-in-a-monoidal-category-commutes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-monoidal-category-is-isomorphic-to-a-strict-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-strictification-requires-the-axiom-of-choice",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-cones-preserve-chain-homotopy-equivalences-of-arrows",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-star-expansion-of-the-four-vertex-path",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-five-cycle",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-six-cycle",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-seven-cycle",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-five-vertex-path-is-nice",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-minimal-sparsity-parameter-drops-below-the-target",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-five-vertex-path-has-the-polynomial-rodl-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-orthogonal-complements-of-subbundles-are-smooth-subbundles",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-normal-and-conormal-bundles-are-smooth-vector-bundles",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-state-elimination-preserves-path-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-dfa-to-regular-expression",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-machine-encoding-is-injective-and-decodable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-finite-tuples-admit-effective-prefix-free-encodings",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-stay-put-moves-can-be-eliminated",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-one-way-and-two-way-tapes-are-equivalent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-existence-of-a-universal-turing-machine",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-effective-enumeration-of-turing-machines",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-universality-decides-halting",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-equality-case-in-minkowski-inequality",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-dedekind-localisation-at-nonzero-prime-is-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-local-dvr-condition-implies-global-normality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-local-dvr-condition-implies-dimension-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-local-characterisation-of-dedekind-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-localisation-of-a-dedekind-domain",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-trace-pairing-for-a-finite-separable-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-integral-closure-in-a-finite-separable-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-fractional-ideal-operations-well-defined",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-invertible-ideal-characterisations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nonzero-ideals-in-dedekind-domains-are-invertible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-support-of-ideal-valuations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-unique-factorisation-of-ideals-in-dedekind-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-ideal-divisibility-reverses-inclusion-dedekind",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-ideals-in-a-dedekind-domain-are-two-generated",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-ideal-class-group-well-defined",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-principal-divisor-exact-sequence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dedekind-pid-class-group-characterisation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rank-one-projective-embedded-as-a-fractional-ideal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-invertible-ideals-and-rank-one-projective-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-ideal-class-group-is-the-picard-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-torsionfree-modules-over-dedekind-domains-are-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rank-one-summand-of-a-finite-projective-dedekind-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-torsionfree-modules-over-dedekind-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-submodules-of-projectives-over-dedekind-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-pid-as-dedekind-domain",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-semilocal-dedekind-domain-is-a-pid",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-fractional-ideal-in-the-integers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-ideal-inverse-computation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-steinitz-class-rank-two-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dedekind-localisation-is-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-two-generators-for-a-dedekind-ideal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-divisor-of-a-fractional-ideal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-nondedekind-ideal-not-invertible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-gmres-minimizes-the-residual-over-the-affine-krylov-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-unrestarted-gmres-residual-norms-are-nonincreasing",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-krylov-chain-with-early-stabilisation-and-its-relative-minimal-polynomial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-lucky-arnoldi-breakdown-on-an-invariant-krylov-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-ritz-pair-and-its-residual-from-a-small-arnoldi-run",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-gmres-on-a-small-nonsymmetric-system",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-restarted-gmres-versus-full-gmres-on-the-same-system",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-matrix-free-gmres-for-a-sparse-operator",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-derivative-of-matrix-inversion",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-determinant-differential-and-jacobis-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-gradient-of-a-quadratic-matrix-form",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gradient-and-hessian-of-the-frobenius-least-squares-functional",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-simple-spectral-projector-is-scale-invariant",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-reduced-resolvent-identities-for-a-simple-eigenvalue",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-derivative-of-the-simple-spectral-projector",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gauge-fixed-simple-eigenvector-derivative-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-hermitian-simple-eigenpair-derivative-simplifications",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-directional-derivative-of-a-simple-positive-singular-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-inverse-derivative-of-a-two-by-two-matrix",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-determinant-differential-at-an-invertible-and-a-singular-matrix",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-gradient-and-hessian-of-a-small-least-squares-functional",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-simple-nonnormal-eigenvalue-derivative-uses-left-and-right-eigenvectors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-hermitian-simple-eigenvalue-derivative-is-a-rayleigh-quotient-direction",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-two-gauge-choices-give-different-eigenvector-derivatives",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-jordan-block-splits-by-a-square-root-perturbation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-directional-derivative-of-a-simple-singular-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-an-eigenvector-branch-cannot-stay-differentiable-through-a-symmetric-crossing",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-cauchy-schwarz-inequality-for-l-two",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-essential-supremum-is-attained-as-the-least-essential-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riesz-fischer-completeness-of-l-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-l-p-convergence-implies-convergence-in-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-ell-p-includes-into-ell-r-for-p-less-r",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-parallelogram-law-in-l-two",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-k-to-the-minus-a-membership-in-ell-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-finite-counting-measure-on-n-points-recovers-rn-p-norms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-proportional-functions-realise-the-equality-case-of-holder",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-parallelogram-law-on-two-indicator-functions-in-l-two",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-l-one-not-subset-l-two-on-the-line",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-l-two-not-subset-l-one-on-the-line",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-half-norm-fails-the-triangle-inequality-on-two-indicators",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-essential-supremum-equals-the-pointwise-supremum",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-l-one-half-with-its-p-functional-is-a-normed-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-holder-equality-forces-the-functions-themselves-to-be-proportional",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-holomorphic-germs-at-a-point-form-a-local-ring",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-refinement-of-analytic-continuation-chains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-end-germ-of-path-continuation-is-independent-of-the-chain",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-uniqueness-of-analytic-continuation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-monodromy-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-germ-neighborhoods-form-a-riemann-surface-basis",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-germ-projection-is-a-local-biholomorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riemann-surface-of-the-logarithm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riemann-surface-of-an-nth-root",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-circle-of-convergence-contains-a-singular-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-pringsheim-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-square-root-continuation-around-the-origin-changes-sign",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-helicoid-model-of-the-logarithm-surface",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-two-sheeted-model-of-the-square-root-surface",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-geometric-series-has-only-one-singular-boundary-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-holomorphic-function-on-a-domain-continues-past-its-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-continuation-along-same-endpoint-paths-always-agrees",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-riemann-surface-of-a-multivalued-function-is-always-a-subset-of-c-squared",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-boundary-point-of-a-radius-one-power-series-is-singular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-harmonic-sum-asymptotic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dirichlet-hyperbola-method",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-divisor-counting-summatory-estimate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-summatory-logarithm-asymptotic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-average-order-of-divisor-counting-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-divisor-sum-summatory-estimate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-average-order-of-divisor-sum-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-euler-totient-summatory-estimate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-average-order-of-euler-totient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-coprime-pair-counting-asymptotic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-asymptotic-density-of-coprime-pairs",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-normalized-two-square-count-is-multiplicative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-two-square-representation-count",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-average-order-of-two-square-representations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dirichlet-hyperbola-lattice-decomposition",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-divisor-summatory-error-table",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-category-of-binary-words-is-monoidal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-mac-lane-coherence-in-the-canonical-map-form",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-unbracketed-tensor-strings-are-well-defined-expressions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-monoid-object-axioms-may-be-written-without-associators",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-word-category-is-the-free-monoidal-category-on-one-generator",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-coherence-follows-from-freeness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-two-routes-around-the-pentagon-are-equal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-word-category-on-words-of-length-three",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-strictification-of-a-cartesian-monoidal-category-computed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-two-formally-distinct-words-that-become-the-same-object",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-monoid-object-written-with-and-without-associators",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-mapping-cone-differential-squares-to-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-cone-of-an-identity-map-is-contractible",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-isomorphic-chain-maps-have-isomorphic-cones",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-homotopic-maps-have-chain-isomorphic-mapping-cones",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-mapping-cylinder-differential-squares-to-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-mapping-cylinder-factors-a-chain-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-target-is-a-strong-deformation-retract-of-the-mapping-cylinder",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-three-cone-calculation-for-a-composite-chain-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-mapping-cone-differential-needs-no-minus-sign",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-acyclic-mapping-cone-is-contractible",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-mapping-cylinder-factorization-is-a-model-category-factorization",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-cone-of-multiplication-by-m-on-the-integers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-cone-of-zero-and-of-the-identity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-quasi-isomorphism-detected-by-an-acyclic-cone",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-an-acyclic-noncontractible-cone",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-relative-homology-of-a-map-between-stalk-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-three-cone-calculation-for-a-composite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-degreewise-split-cone-sequence-with-no-chain-splitting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-seven-cycle-and-its-complement-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-cycle-and-a-forest-complement-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-star-expansion-of-k-three-contains-the-hatted-five-cycle",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-small-anticonnected-components-yield-a-complete-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-dense-bipartite-side-has-a-small-hitting-set",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-two-large-anticonnected-components-give-a-complete-two-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-sparse-p-five-free-graph-with-an-anticomplete-two-blockade",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-layout-with-a-single-wrong-decided-pair",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-a-vector-bundle-projection-is-a-surjective-submersion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-vector-bundle-construction-from-a-smooth-cocycle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-isomorphic-cocycles-define-isomorphic-vector-bundles",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-zero-section-is-a-smooth-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-local-frames-and-local-trivializations-are-equivalent-data",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-smooth-sections-form-a-module-over-smooth-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-locally-finite-linear-combinations-of-sections-are-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-pullback-fibre-product-is-a-smooth-vector-bundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-whitney-sums-are-smooth-vector-bundles",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-dual-and-hom-transition-functions-define-smooth-bundles",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-vector-subbundle-has-a-smooth-complement",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-short-exact-sequence-of-smooth-vector-bundles-splits",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-smooth-manifold-admits-a-riemannian-metric",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-vector-bundle-is-globally-trivial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-pullback-bundle-is-the-set-theoretic-inverse-image-of-the-total-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-trivial-line-bundle-and-its-sections-as-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-mobius-line-bundle-from-a-transition-function",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tautological-line-bundle-over-real-projective-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-and-cotangent-bundles-as-vector-bundles",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-bundle-of-the-circle-is-trivial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-graph-of-a-bundle-map-as-a-subbundle-of-a-whitney-sum",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-rank-jumping-kernel-is-not-a-vector-subbundle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-denotation-is-structurally-well-defined",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-regular-expression-to-epsilon-nfa",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-kleenes-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-closure-under-homomorphic-image",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-closure-under-inverse-homomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-closure-under-left-and-right-quotient",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-regular-expression-syntax-is-its-denoted-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-state-elimination-has-a-unique-output-expression",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-regular-expression-to-epsilon-nfa",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-regular-expression-syntax-is-its-denoted-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-height-and-yield-bound-for-cnf-trees",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-pumping-lemma-for-context-free-languages",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-ogdens-lemma",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cfls-are-not-closed-under-intersection",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-cfls-are-not-closed-under-complement",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cfls-are-closed-under-reversal",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-cyk-table-invariant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cyk-membership-algorithm",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-cfl-membership-is-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cfg-emptiness-and-finiteness-are-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-cfl-pumping-lemma-characterizes-cfls",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-cyk-needs-no-normal-form-preprocessing",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-cfg-equivalence-is-decidable-by-normalization",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-pumping-lemma-for-context-free-languages",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-cfg-emptiness-and-finiteness-are-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-the-cfl-pumping-lemma-characterizes-cfls",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-multitape-machines-have-one-tape-simulations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-multitape-simulation-has-quadratic-time-overhead",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-nondeterministic-and-deterministic-recognizability-agree",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-ram-register-and-turing-computability-agree",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-step-by-step-interpreter-for-machine-codes",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-stay-put-moves-can-be-eliminated",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-effective-enumeration-of-turing-machines",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-universality-decides-halting",
      "scope": "run",
      "owner": "d"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-finite-tuples-admit-effective-prefix-free-encodings",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-dedekind-localisation-at-nonzero-prime-is-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-local-dvr-condition-implies-global-normality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-local-dvr-condition-implies-dimension-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-local-characterisation-of-dedekind-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-localisation-of-a-dedekind-domain",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-trace-pairing-for-a-finite-separable-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-integral-closure-in-a-finite-separable-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-fractional-ideal-operations-well-defined",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-invertible-ideal-characterisations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nonzero-ideals-in-dedekind-domains-are-invertible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-support-of-ideal-valuations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-unique-factorisation-of-ideals-in-dedekind-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-ideal-divisibility-reverses-inclusion-dedekind",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-ideals-in-a-dedekind-domain-are-two-generated",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-ideal-class-group-well-defined",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-principal-divisor-exact-sequence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dedekind-pid-class-group-characterisation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rank-one-projective-embedded-as-a-fractional-ideal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-invertible-ideals-and-rank-one-projective-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-ideal-class-group-is-the-picard-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-torsionfree-modules-over-dedekind-domains-are-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rank-one-summand-of-a-finite-projective-dedekind-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-torsionfree-modules-over-dedekind-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-submodules-of-projectives-over-dedekind-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-pid-as-dedekind-domain",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-semilocal-dedekind-domain-is-a-pid",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-fractional-ideal-in-the-integers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-ideal-inverse-computation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-steinitz-class-rank-two-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dedekind-localisation-is-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-two-generators-for-a-dedekind-ideal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-divisor-of-a-fractional-ideal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-nondedekind-ideal-not-invertible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-harmonic-sum-asymptotic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dirichlet-hyperbola-method",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-divisor-counting-summatory-estimate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-summatory-logarithm-asymptotic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-average-order-of-divisor-counting-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-divisor-sum-summatory-estimate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-average-order-of-divisor-sum-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-euler-totient-summatory-estimate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-average-order-of-euler-totient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-coprime-pair-counting-asymptotic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-asymptotic-density-of-coprime-pairs",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-normalized-two-square-count-is-multiplicative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-two-square-representation-count",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-average-order-of-two-square-representations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dirichlet-hyperbola-lattice-decomposition",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-divisor-summatory-error-table",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 — group **a**, run `frontier-26`

You are the group Alpha for batches **1**, **5**: 2 A/B pair(s), 4 page(s), 61 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-26-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-26-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `dedekind-domains-and-ideal-classes` | A | commutative-algebra | 111.017 | `valuation-rings-and-discrete-valuation-rings-examples`, `solvability-by-radicals-and-kummer-theory` |
| 1 | `dedekind-domains-and-ideal-classes-examples` | B | commutative-algebra | 111.018 | `dedekind-domains-and-ideal-classes` |
| 5 | `average-orders-divisor-sums-and-representation-counts` | A | number-theory | 348.003 | `sums-of-two-squares`, `arithmetic-functions-and-dirichlet-convolution-examples` |
| 5 | `average-orders-divisor-sums-and-representation-counts-examples` | B | number-theory | 348.004 | `average-orders-divisor-sums-and-representation-counts` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dedekind-domains-and-ideal-classes` — Dedekind Domains and Ideal Classes (33 item(s))

- `def-dedekind-domain` · definition — Dedekind domains
- `lem-dedekind-localisation-at-nonzero-prime-is-dvr` · lemma — Localizing a Dedekind domain at a nonzero prime gives a DVR
- `lem-local-dvr-condition-implies-global-normality` · lemma — Local DVRs at the nonzero primes force global normality
- `lem-local-dvr-condition-implies-dimension-one` · lemma — Local DVRs at the nonzero primes force dimension one
- `thm-local-characterisation-of-dedekind-domains` · theorem — Equivalent local characterizations of Dedekind domains
- `thm-localisation-of-a-dedekind-domain` · theorem — A localization of a Dedekind domain is Dedekind or a field
- `lem-trace-pairing-for-a-finite-separable-extension` · lemma — The trace pairing in a finite separable extension is nondegenerate
- `thm-finite-integral-closure-in-a-finite-separable-extension` · theorem — Finite separable integral closures over normal Noetherian domains are module-finite
- `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension` · corollary — The integral closure of a Dedekind domain in a finite separable extension is Dedekind
- `rem-separability-is-essential-for-finite-integral-closure` · remark — Why the finite-separable hypothesis is retained in the integral-closure theorem
- `def-fractional-ideal` · definition — Fractional ideals
- `def-product-and-colon-of-fractional-ideals` · definition — Products, colons, and inverse candidates for fractional ideals
- `lem-fractional-ideal-operations-well-defined` · lemma — The basic operations on fractional ideals are well defined
- `def-invertible-fractional-ideal` · definition — Invertible fractional ideals
- `thm-invertible-ideal-characterisations` · theorem — Equivalent characterizations of invertible fractional ideals
- `thm-nonzero-ideals-in-dedekind-domains-are-invertible` · theorem — Every nonzero fractional ideal of a Dedekind domain is invertible
- `def-prime-ideal-valuations-on-fractional-ideals` · definition — Prime-ideal valuations on fractional ideals
- `lem-finite-support-of-ideal-valuations` · lemma — Prime-ideal valuations of a fractional ideal have finite support and add under products
- `thm-unique-factorisation-of-ideals-in-dedekind-domains` · theorem — Unique factorization of nonzero fractional ideals into prime powers
- `cor-ideal-divisibility-reverses-inclusion-dedekind` · corollary — For Dedekind ideals, divisibility reverses inclusion
- `cor-ideals-in-a-dedekind-domain-are-two-generated` · corollary — Every nonzero ideal in a Dedekind domain is generated by two elements
- `def-ideal-class-group-of-a-domain` · definition — The ideal class group
- `lem-ideal-class-group-well-defined` · lemma — The ideal class group quotient is well defined
- `def-divisor-group-of-a-dedekind-domain` · definition — The divisor group of a Dedekind domain
- `thm-principal-divisor-exact-sequence` · theorem — The principal-divisor exact sequence for a Dedekind domain
- `thm-dedekind-pid-class-group-characterisation` · theorem — A Dedekind domain is a PID exactly when its class group is trivial
- `lem-rank-one-projective-embedded-as-a-fractional-ideal` · lemma — A finite rank-one projective module embeds as a fractional ideal
- `thm-invertible-ideals-and-rank-one-projective-modules` · theorem — Invertible fractional ideals are exactly the rank-one projective modules
- `thm-ideal-class-group-is-the-picard-group` · theorem — The ideal class group is the Picard group of rank-one projectives
- `lem-finite-torsionfree-modules-over-dedekind-domains-are-projective` · lemma — Finite torsion-free modules over Dedekind domains are projective
- `lem-rank-one-summand-of-a-finite-projective-dedekind-module` · lemma — A nonzero finite projective module over a Dedekind domain splits off a rank-one summand
- `thm-finite-torsionfree-modules-over-dedekind-domains` · theorem — Finite torsion-free modules over Dedekind domains have Steinitz form
- `thm-submodules-of-projectives-over-dedekind-domains` · theorem — Submodules of projective modules over Dedekind domains are projective

### `dedekind-domains-and-ideal-classes-examples` — Dedekind Domains and Ideal Classes — Examples (9 item(s))

- `ex-pid-as-dedekind-domain` · example — Every nonfield PID is a Dedekind domain with trivial class group
- `ex-semilocal-dedekind-domain-is-a-pid` · example — A semilocal Dedekind domain is a PID
- `ex-fractional-ideal-in-the-integers` · example — A fractional ideal of the integers with positive and negative prime exponents
- `ex-ideal-inverse-computation` · example — Computing an inverse fractional ideal explicitly
- `ex-steinitz-class-rank-two-module` · example — A rank-two module and its Steinitz class
- `ex-dedekind-localisation-is-dvr` · example — Localizing a Dedekind domain at a nonzero prime
- `ex-two-generators-for-a-dedekind-ideal` · example — Constructing two generators for a Dedekind ideal
- `ex-divisor-of-a-fractional-ideal` · example — The divisor and class of a fractional ideal
- `ex-nondedekind-ideal-not-invertible` · example — A noninvertible ideal in a singular one-dimensional domain

### `average-orders-divisor-sums-and-representation-counts` — Average Orders Divisor Sums and Representation Counts (17 item(s))

- `def-summatory-function-and-average-order` · definition — Summatory functions and average orders
- `def-euler-mascheroni-constant` · definition — The Euler-Mascheroni constant
- `lem-harmonic-sum-asymptotic` · lemma — The harmonic sum is log x plus gamma plus O(1/x)
- `thm-dirichlet-hyperbola-method` · theorem — Dirichlet's hyperbola method for summatory convolutions
- `thm-divisor-counting-summatory-estimate` · theorem — The summatory divisor-counting function is x log x plus (2 gamma - 1)x plus O(sqrt x)
- `lem-summatory-logarithm-asymptotic` · lemma — The summatory logarithm is x log x minus x plus O(log x)
- `cor-average-order-of-divisor-counting-function` · corollary — The average order of tau is log n
- `thm-divisor-sum-summatory-estimate` · theorem — The summatory divisor-sum function is pi squared over 12 times x squared plus O(x log x)
- `cor-average-order-of-divisor-sum-function` · corollary — The average order of sigma is (pi squared over 6)n
- `thm-euler-totient-summatory-estimate` · theorem — The summatory totient function is 3 over pi squared times x squared plus O(x log x)
- `cor-average-order-of-euler-totient` · corollary — The average order of Euler's totient is 6n over pi squared
- `thm-coprime-pair-counting-asymptotic` · theorem — Ordered coprime pairs in a box have asymptotic density 6 over pi squared
- `cor-asymptotic-density-of-coprime-pairs` · corollary — The proportion of pairs in {1,...,n}^2 that are coprime tends to 6 over pi squared
- `def-two-square-representation-function` · definition — The two-square representation function r_2
- `lem-normalized-two-square-count-is-multiplicative` · lemma — The normalized two-square count is multiplicative with the expected prime-power values
- `thm-two-square-representation-count` · theorem — The divisor formula for the two-square representation count
- `cor-average-order-of-two-square-representations` · corollary — The average order of the two-square representation count is pi

### `average-orders-divisor-sums-and-representation-counts-examples` — Average Orders Divisor Sums and Representation Counts — Examples (2 item(s))

- `ex-dirichlet-hyperbola-lattice-decomposition` · example — A small lattice decomposition for Dirichlet's hyperbola method
- `ex-divisor-summatory-error-table` · example — The divisor summatory estimate through several small values

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
`research/frontier-26-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-26`

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
