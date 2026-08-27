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
group work, `research/frontier-20-alpha-groups.json` is the assignment: it permits at
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

run: frontier-20
role: alpha-adjudicate
label: step8-preflight-c-1

# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-20",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "c",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-quote-mismatch [thm-stieltjes-interval-set-function-is-a-premeasure]: L1 quote does not occur in prop-stieltjes-interval-set-function-is-finitely-additive's Statement",
      "output": "proof-contract: 91 error(s), 0 warning(s), 393/393 item(s) checked\nERROR citation-quote-mismatch [thm-stieltjes-interval-set-function-is-a-premeasure]: L1 quote does not occur in prop-stieltjes-interval-set-function-is-finitely-additive's Statement\nERROR citation-fact-uncontracted [fs-lebesgue-stieltjes-measures-have-zero-point-masses]: L2 -> thm-existence-of-the-lebesgue-stieltjes-measure needs an exact citation contract\nERROR step-entry-input-omitted [fs-lebesgue-stieltjes-measures-have-zero-point-masses]: step-1-1 omits L2, cited by 1.1\nERROR citation-quote-mismatch [lem-well-definedness-of-the-simple-integral]: L1 quote does not occur in def-integral-of-a-nonnegative-simple-function's Definition\nERROR citation-quote-mismatch [prop-basic-properties-of-the-nonnegative-simple-integral]: L2 quote does not occur in def-integral-of-a-nonnegative-simple-function's Definition\nERROR citation-quote-mismatch [prop-the-nonnegative-integral-agrees-with-the-simple-integral]: L3 quote does not occur in def-integral-of-a-nonnegative-simple-function's Definition\nERROR citation-quote-mismatch [thm-simple-indefinite-integral-is-a-measure]: L1 quote does not occur in def-integral-over-a-measurable-set's Definition\nERROR citation-quote-mismatch [thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]: L1 quote does not occur in def-integral-over-a-measurable-set's Definition\nERROR citation-quote-mismatch [thm-integration-against-a-density]: L1 quote does not occur in def-measure-with-density's Definition\nERROR citation-quote-mismatch [cor-integral-over-a-null-set-vanishes]: L2 quote does not occur in def-integral-over-a-measurable-set's Definition\nERROR citation-quote-mismatch [thm-absolute-continuity-of-the-integral]: L2 quote does not occur in def-integral-over-a-measurable-set's Definition\nERROR citation-source-not-in-fact [ex-counting-measure-integral-is-a-series]: L3 does not link [[cor-beppo-levi-theorem]]\nERROR citation-undeclared-dependency [ex-counting-measure-integral-is-a-series]: L3 cites cor-beppo-levi-theorem, which is absent from deps/justified_by/forward_refs\nERROR citation-use-unmapped [ex-counting-measure-integral-is-a-series]: L3 is cited by 1.1 but the contract omits it\nERROR citation-fact-uncontracted [ex-counting-measure-integral-is-a-series]: L3 -> prop-the-nonnegative-integral-agrees-with-the-simple-integral needs an exact citation contract\nERROR citation-fact-uncontracted [ex-counting-measure-integral-is-a-series]: L3 -> thm-monotone-convergence-for-the-integral needs an exact citation contract\nERROR step-entry-input-omitted [ex-counting-measure-integral-is-a-series]: step-1-1 omits L3, cited by 1.1\nERROR citation-quote-mismatch [thm-onan-scott-classification-of-finite-primitive-groups]: L1 quote does not occur in def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types's Definition\nERROR citation-quote-mismatch [lem-continued-fraction-convergent-recurrence]: F1 quote does not occur in def-regular-continued-fraction's Definition\nERROR citation-quote-mismatch [lem-continued-fraction-convergent-recurrence]: F1 quote does not occur in def-convergents-of-regular-continued-fraction's Definition\nERROR citation-quote-mismatch [lem-continued-fraction-determinant-identity]: F1 quote does not occur in def-convergents-of-regular-continued-fraction's Definition\nERROR citation-quote-mismatch [lem-continued-fraction-complete-quotient-formula]: F1 quote does not occur in def-continued-fraction-complete-quotients's Definition\nERROR citation-fact-uncontracted [thm-convergence-of-infinite-regular-continued-fractions]: F3 -> cor-cauchy-reals-lub-complete needs an exact citation contract\nERROR citation-fact-uncontracted [thm-convergence-of-infinite-regular-continued-fractions]: F3 -> def-complete-ordered-field needs an exact citation contract\nERROR step-entry-input-omitted [thm-convergence-of-infinite-regular-continued-fractions]: step-3-1 omits F3, cited by 3.1\nERROR citation-quote-mismatch [thm-rational-continued-fraction-termination]: F3 quote does not occur in def-continued-fraction-complete-quotients's Definition\nERROR citation-source-not-in-fact [lem-continued-fraction-error-bound]: F1 does not link [[thm-continued-fraction-algorithm-for-real-numbers]]\nERROR citation-fact-uncontracted [lem-continued-fraction-error-bound]: F1 -> lem-continued-fraction-complete-quotient-formula needs an exact citation contract\nERROR citation-quote-mismatch [thm-continued-fraction-convergents-are-best-approximations]: F2 quote does not occur in def-continued-fraction-complete-quotients's Definition\nERROR citation-quote-mismatch [thm-continued-fraction-convergents-are-best-approximations]: F4 quote does not occur in def-convergents-of-regular-continued-fraction's Definition\nERROR citation-quote-mismatch [thm-legendre-continued-fraction-criterion]: F1 quote does not occur in def-convergents-of-regular-continued-fraction's Definition\nERROR citation-use-not-supported [thm-legendre-continued-fraction-criterion]: F1 is not cited by declared use 1.1\nERROR citation-use-unmapped [thm-legendre-continued-fraction-criterion]: F1 is cited by 1.2 but the contract omits it\nERROR citation-fact-uncontracted [thm-legendre-continued-fraction-criterion]: F3 -> def-continued-fraction-complete-quotients needs an exact citation contract\nERROR step-entry-input-omitted [thm-legendre-continued-fraction-criterion]: step-1-1 omits F3, cited by 1.1\nERROR step-entry-input-omitted [thm-legendre-continued-fraction-criterion]: step-2-1 omits 1.2, cited by 2.1\nERROR step-unmapped [thm-legendre-continued-fraction-criterion]: 1.2 has no derivation or routine-step contract\nERROR citation-quote-mismatch [lem-periodic-continued-fraction-is-quadratic]: F3 quote does not occur in def-convergents-of-regular-continued-fraction's Definition\nERROR citation-quote-mismatch [lem-quadratic-irrational-complete-quotients-are-finite-state]: F6 quote does not occur in def-convergents-of-regular-continued-fraction's Definition\nERROR citation-quote-mismatch [thm-lagrange-periodic-continued-fraction-theorem]: F3 quote does not occur in def-continued-fraction-complete-quotients's Definition\nERROR citation-fact-uncontracted [ex-continued-fraction-of-square-root-two]: F3 -> def-continued-fraction-complete-quotients needs an exact citation contract\nERROR step-entry-input-omitted [ex-continued-fraction-of-square-root-two]: step-1-1 omits F3, cited by 1.1\nERROR citation-quote-mismatch [ex-continued-fraction-of-square-root-fourteen]: F1 quote does not occur in def-continued-fraction-complete-quotients's Definition\nERROR citation-fact-uncontracted [ex-golden-ratio-as-a-periodic-continued-fraction]: F2 -> thm-convergence-of-infinite-regular-continued-fractions needs an exact citation contract\nERROR step-entry-input-omitted [ex-golden-ratio-as-a-periodic-continued-fraction]: step-1-1 omits F2, cited by 1.1\nERROR step-entry-input-omitted [ex-best-rational-approximations-to-pi]: step-2-1 omits L1, cited by 2.1\nERROR citation-quote-mismatch [ex-a-negative-real-continued-fraction]: F1 quote does not occur in def-continued-fraction-complete-quotients's Definition\nERROR citation-quote-mismatch [lem-radical-of-an-intersection]: L1 quote does not occur in lem-radical-is-an-ideal's Statement\nERROR citation-quote-mismatch [lem-vanishing-sets-detect-radicals]: L2 quote does not occur in lem-radical-is-an-ideal's Statement\nERROR citation-quote-mismatch [thm-noetherian-ring-has-finitely-many-minimal-primes]: L1 quote does not occur in lem-radical-is-an-ideal's Statement\nERROR citation-fact-uncontracted [cor-dobinski-formula-for-bell-numbers]: F1 -> thm-powers-expand-in-the-falling-factorial-basis needs an exact citation contract\nERROR citation-fact-uncontracted [cor-dobinski-formula-for-bell-numbers]: F2 -> def-factorial-and-falling-factorial needs an exact citation contract\nERROR citation-fact-uncontracted [cor-dobinski-formula-for-bell-numbers]: F3 -> def-real-exponential-function-and-e needs an exact citation contract\nERROR citation-fact-uncontracted [cor-dobinski-formula-for-bell-numbers]: F3 -> cor-exponential-reciprocal-and-positivity needs an exact citation contract\nERROR citation-fact-uncontracted [cor-dobinski-formula-for-bell-numbers]: F4 -> def-stirling-second-kind-and-bell-number needs an exact citation contract\nERROR step-entry-input-omitted [cor-dobinski-formula-for-bell-numbers]: step-1-1 omits F2, cited by 1.1\nERROR step-entry-input-omitted [cor-dobinski-formula-for-bell-numbers]: step-1-1 omits F3, cited by 1.1\nERROR step-entry-input-omitted [cor-dobinski-formula-for-bell-numbers]: step-2-1 omits F1, cited by 2.1\nERROR step-entry-input-omitted [cor-dobinski-formula-for-bell-numbers]: step-2-1 omits F4, cited by 2.1\nERROR step-entry-input-omitted [cor-dobinski-formula-for-bell-numbers]: step-3-1 omits F3, cited by 3.1\nERROR step-entry-input-omitted [cor-dobinski-formula-for-bell-numbers]: step-3-1 omits F1, cited by 3.1\nERROR citation-quote-mismatch [thm-biproduct-data-characterisation-without-addition]: L1 quote does not occur in def-biproduct's Definition\nERROR citation-quote-mismatch [prop-the-empty-biproduct-is-a-zero-object]: L1 quote does not occur in def-biproduct's Definition\nERROR citation-quote-mismatch [prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism]: L1 quote does not occur in def-biproduct's Definition\nERROR citation-quote-mismatch [thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]: L1 quote does not occur in thm-biproduct-data-characterisation-without-addition's Statement\nERROR citation-quote-mismatch [thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]: L1 quote does not occur in thm-biproduct-data-characterisation-without-addition's Statement\nERROR citation-fact-uncontracted [thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse]: L3 -> thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique needs an exact citation contract\nERROR step-entry-input-omitted [thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse]: step-1-1 omits L3, cited by 1.1\nERROR citation-quote-mismatch [cor-additive-categories-are-closed-under-passage-to-the-opposite]: L2 quote does not occur in def-additive-category's Definition\nERROR citation-quote-mismatch [thm-morphisms-between-finite-biproducts-correspond-to-matrices]: L1 quote does not occur in def-additive-category's Definition\nERROR citation-quote-mismatch [thm-the-matrix-category-over-a-ring-is-additive]: L1 quote does not occur in def-additive-category's Definition\nERROR citation-quote-mismatch [thm-the-matrix-category-over-a-ring-is-additive]: L2 quote does not occur in def-the-additive-category-of-matrices-over-a-ring's Definition\nERROR citation-quote-mismatch [thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules]: L1 quote does not occur in def-the-additive-category-of-matrices-over-a-ring's Definition\nERROR citation-quote-mismatch [thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits]: L1 quote does not occur in def-additive-category's Definition\nERROR citation-quote-mismatch [thm-an-additive-functor-preserves-finite-biproducts]: L1 quote does not occur in def-additive-category's Definition\nERROR citation-quote-mismatch [thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]: L2 quote does not occur in def-additive-category's Definition\nERROR citation-use-not-supported [thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]: L2 is not cited by declared use 2.1\nERROR citation-use-unmapped [thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]: L2 is cited by 1.3 but the contract omits it\nERROR citation-fact-uncontracted [thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]: L4 -> thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique needs an exact citation contract\nERROR step-entry-input-omitted [thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]: step-2-1 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]: step-2-1 omits 1.3, cited by 2.1\nERROR step-entry-step-missing [thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]: derivations step-3-1 names missing 3.1\nERROR step-unmapped [thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]: 1.3 has no derivation or routine-step contract\nERROR citation-quote-mismatch [thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels]: L1 quote does not occur in def-additive-category's Definition\nERROR citation-quote-mismatch [thm-an-additive-category-with-kernels-is-idempotent-complete]: L1 quote does not occur in def-additive-category's Definition\nERROR citation-quote-mismatch [fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen]: L1 quote does not occur in def-additive-category's Definition\nERROR citation-quote-mismatch [fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts]: L1 quote does not occur in def-biproduct's Definition\nERROR citation-quote-mismatch [ex-abelian-groups-modules-and-vector-spaces-are-additive]: L1 quote does not occur in def-additive-category's Definition\nERROR citation-quote-mismatch [ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices]: L2 quote does not occur in def-the-additive-category-of-matrices-over-a-ring's Definition\nERROR citation-quote-mismatch [ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules]: L1 quote does not occur in thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules's Statement\nERROR citation-quote-mismatch [ex-additive-functors-out-of-the-matrix-category]: L2 quote does not occur in thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules's Statement\n",
      "named_ids": [
        "thm-stieltjes-interval-set-function-is-a-premeasure",
        "fs-lebesgue-stieltjes-measures-have-zero-point-masses",
        "lem-well-definedness-of-the-simple-integral",
        "prop-basic-properties-of-the-nonnegative-simple-integral",
        "prop-the-nonnegative-integral-agrees-with-the-simple-integral",
        "thm-simple-indefinite-integral-is-a-measure",
        "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure",
        "thm-integration-against-a-density",
        "cor-integral-over-a-null-set-vanishes",
        "thm-absolute-continuity-of-the-integral",
        "ex-counting-measure-integral-is-a-series",
        "cor-beppo-levi-theorem",
        "thm-onan-scott-classification-of-finite-primitive-groups",
        "lem-continued-fraction-convergent-recurrence",
        "lem-continued-fraction-determinant-identity",
        "lem-continued-fraction-complete-quotient-formula",
        "thm-convergence-of-infinite-regular-continued-fractions",
        "thm-rational-continued-fraction-termination",
        "lem-continued-fraction-error-bound",
        "thm-continued-fraction-algorithm-for-real-numbers",
        "thm-continued-fraction-convergents-are-best-approximations",
        "thm-legendre-continued-fraction-criterion",
        "lem-periodic-continued-fraction-is-quadratic",
        "lem-quadratic-irrational-complete-quotients-are-finite-state",
        "thm-lagrange-periodic-continued-fraction-theorem",
        "ex-continued-fraction-of-square-root-two",
        "ex-continued-fraction-of-square-root-fourteen",
        "ex-golden-ratio-as-a-periodic-continued-fraction",
        "ex-best-rational-approximations-to-pi",
        "ex-a-negative-real-continued-fraction",
        "lem-radical-of-an-intersection",
        "lem-vanishing-sets-detect-radicals",
        "thm-noetherian-ring-has-finitely-many-minimal-primes",
        "cor-dobinski-formula-for-bell-numbers",
        "thm-biproduct-data-characterisation-without-addition",
        "prop-the-empty-biproduct-is-a-zero-object",
        "prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism",
        "thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids",
        "thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation",
        "thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse",
        "cor-additive-categories-are-closed-under-passage-to-the-opposite",
        "thm-morphisms-between-finite-biproducts-correspond-to-matrices",
        "thm-the-matrix-category-over-a-ring-is-additive",
        "thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules",
        "thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits",
        "thm-an-additive-functor-preserves-finite-biproducts",
        "thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts",
        "thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels",
        "thm-an-additive-category-with-kernels-is-idempotent-complete",
        "fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen",
        "fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts",
        "ex-abelian-groups-modules-and-vector-spaces-are-additive",
        "ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices",
        "ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules",
        "ex-additive-functors-out-of-the-matrix-category"
      ]
    },
    {
      "id": "finite-smoke",
      "stage": "8-preflight",
      "why": "ERROR smoke-assertion-mismatch [thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules]: matrix-ring-laws-mod-n's assertion excerpt is not present in thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free",
      "output": "PASS [thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication] matrix-ring-laws-mod-n: determinant multiplicativity and associativity held in 720 products, moduli through 6, 2x2\nPASS [thm-the-matrix-category-over-a-ring-is-additive] matrix-ring-laws-mod-n: determinant multiplicativity and associativity held in 720 products, moduli through 6, 2x2\nfinite-smoke: 1 error(s), 2 check(s) over 3/393 item(s) carrying obligations\nERROR smoke-assertion-mismatch [thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules]: matrix-ring-laws-mod-n's assertion excerpt is not present in thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules\n",
      "named_ids": [
        "thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication",
        "thm-the-matrix-category-over-a-ring-is-additive",
        "thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [ex-radical-intersection-computation]: ex-radical-intersection-computation is high risk and lacks a complete Alpha risk_review",
      "output": "MODERATE 4 [prop-stieltjes-interval-set-function-is-finitely-additive] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-stieltjes-interval-set-function-is-a-premeasure] 2:4 declared dependencies; 1:2 cited facts; 1:8 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [thm-existence-of-the-lebesgue-stieltjes-measure] 2:5 declared dependencies; 2:4 cited facts\nMODERATE 3 [thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 11 [thm-lebesgue-stieltjes-correspondence-with-distribution-functions] 2:5 declared dependencies; 1:3 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures] 2:6 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nHIGH 6 [thm-lebesgue-stieltjes-measures-are-regular-on-r] 3:9 declared dependencies; 2:7 cited facts; 1:8 numbered proof steps\nMODERATE 3 [cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity] 2:4 declared dependencies; 1:3 cited facts\nHIGH 6 [prop-cantor-measure-is-a-singular-atomless-probability-measure] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-finite-borel-measure-on-r-is-atomic-plus-atomless] 2:6 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-every-increasing-function-defines-a-lebesgue-stieltjes-measure] 2:boundary-sensitive language\nMODERATE 3 [fs-lebesgue-stieltjes-measures-have-zero-point-masses] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [fs-every-borel-measure-on-r-is-finite-on-compact-sets] 1:2 cited facts\nORDINARY 2 [fs-every-atomless-borel-measure-on-r-has-a-density] 2:boundary-sensitive language\nMODERATE 3 [ex-the-identity-function-generates-lebesgue-measure] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-one-jump-function-generates-a-dirac-mass-at-zero] no signals\nHIGH 5 [ex-a-step-function-generates-a-finite-atomic-measure] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-two-normalizations-give-the-same-lebesgue-stieltjes-measure] no signals\nORDINARY 2 [ex-interval-formulas-for-a-function-with-one-jump] 2:boundary-sensitive language\nORDINARY 0 [ex-cantor-measure-is-concentrated-on-the-cantor-set] no signals\nORDINARY 1 [ex-arctangent-generates-a-borel-probability-measure] 1:2 cited facts\nORDINARY 0 [cex-right-continuity-is-necessary-for-lebesgue-stieltjes-measures] no signals\nORDINARY 2 [cex-cantor-measure-is-atomless-but-not-absolutely-continuous] 2:boundary-sensitive language\nHIGH 5 [prop-indicator-function-is-measurable-iff-its-set-is-measurable] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [thm-generating-family-criterion-for-measurable-functions] 2:boundary-sensitive language\nMODERATE 3 [thm-threshold-characterisations-of-real-and-extended-real-measurability] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [cor-continuous-functions-are-borel-measurable] no signals\nORDINARY 2 [thm-monotone-real-functions-are-borel-measurable] 2:boundary-sensitive language\nORDINARY 1 [thm-coordinatewise-measurability-into-r-n] 1:3 cited facts\nORDINARY 0 [thm-composition-with-borel-functions-preserves-measurability] no signals\nMODERATE 4 [thm-arithmetic-and-lattice-operations-preserve-measurability] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nCRITICAL 8 [thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 3 [thm-nonnegative-measurable-functions-admit-increasing-simple-approximations] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-measurable-functions-admit-dominated-simple-approximations] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-ae-equality-preserves-measurability-on-complete-spaces] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-completion-measurable-functions-have-base-measurable-representatives] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-doob-dynkin-lemma] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-measurable-level-sets-do-not-imply-measurability] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-absolute-value-measurable-does-not-imply-measurability] 1:2 cited facts\nHIGH 6 [fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable] 1:3 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nHIGH 6 [fs-ae-equality-with-a-measurable-function-does-not-imply-measurability] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 4 [fs-composing-a-lebesgue-measurable-function-with-a-continuous-map-need-not-preserve-measurability] 1:2 cited facts; 3:biconditional / both-direction claim\nHIGH 5 [fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-indicator-functions-are-measurable] 3:biconditional / both-direction claim\nORDINARY 0 [ex-a-simple-function-and-its-canonical-representation] no signals\nMODERATE 4 [ex-dirichlet-function-is-borel-and-nowhere-continuous] 1:3 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [ex-cantor-function-is-borel-measurable] 1:2 cited facts\nORDINARY 0 [ex-dyadic-simple-approximations-to-x-squared-on-zero-two] no signals\nORDINARY 2 [ex-sigma-of-an-indicator-function] 2:boundary-sensitive language\nORDINARY 2 [ex-sigma-of-a-two-step-simple-function] 2:boundary-sensitive language\nHIGH 6 [ex-a-lebesgue-measurable-function-that-is-not-borel] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [cex-an-uncountable-supremum-of-indicators-need-not-be-measurable] 1:3 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nORDINARY 0 [cex-a-continuous-preimage-can-break-lebesgue-measurability] no signals\nHIGH 6 [cex-ae-equality-can-fail-on-an-incomplete-space] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-a-function-can-have-measurable-level-sets-without-being-measurable] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [prop-closure-properties-of-measurable-functions-used-by-the-integral] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-increasing-simple-approximation-of-a-nonnegative-measurable-function] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [lem-well-definedness-of-the-simple-integral] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 5 [prop-basic-properties-of-the-nonnegative-simple-integral] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [prop-the-nonnegative-integral-agrees-with-the-simple-integral] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-simple-indefinite-integral-is-a-measure] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [prop-order-and-scalar-rules-for-the-nonnegative-integral] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-monotone-convergence-for-the-integral] 3:8 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [cor-additivity-of-the-nonnegative-lebesgue-integral] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [cor-beppo-levi-theorem] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-indefinite-integral-of-a-nonnegative-function-is-a-measure] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-integration-against-a-density] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-fatou-lemma] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [cor-reverse-fatou-lemma-under-an-integrable-majorant] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-nonnegative-integral-zero-iff-zero-almost-everywhere] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-finite-nonnegative-integral-implies-finite-almost-everywhere] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [cor-integral-over-a-null-set-vanishes] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-almost-everywhere-monotone-convergence] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [thm-chebyshev-markov-inequality-for-the-integral] 2:analytic limiting/completeness language\nHIGH 6 [thm-linearity-of-the-lebesgue-integral-on-l-one] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-the-lebesgue-integral-respects-almost-everywhere-equality] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-integral-triangle-inequality] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-dominated-convergence] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [cor-bounded-convergence-on-a-finite-measure-space] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-integrable-simple-functions-are-dense-in-l-one] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [thm-absolute-continuity-of-the-integral] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [prop-indefinite-integral-of-an-integrable-function-is-countably-additive] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [thm-continuity-under-the-integral-sign] 2:analytic limiting/completeness language\nHIGH 7 [thm-differentiation-under-the-integral-sign] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-jensens-integral-inequality] 2:6 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [fs-monotone-convergence-without-monotonicity] 2:analytic limiting/completeness language\nORDINARY 0 [fs-fatou-lemma-is-always-an-equality] no signals\nMODERATE 4 [fs-dominated-convergence-without-a-dominating-function] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [fs-zero-integral-forces-everywhere-zero] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-pointwise-limits-of-integrable-functions-are-integrable] 1:3 cited facts; 2:analytic limiting/completeness language\nMODERATE 4 [fs-linearity-without-the-integrability-hypothesis] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [fs-jensens-inequality-on-an-infinite-measure-space] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [ex-counting-measure-integral-is-a-series] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [ex-exponential-integral-by-monotone-truncation] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [ex-x-to-the-minus-one-half-is-unbounded-but-integrable] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [ex-dirac-integral-is-evaluation-at-a-point] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-differentiating-the-laplace-sine-integral-under-the-integral-sign] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-jensen-yields-weighted-am-gm] 2:analytic limiting/completeness language\nHIGH 5 [cex-fatou-can-be-strict-and-domination-can-fail-simultaneously] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-mass-escapes-to-infinity-under-pointwise-convergence] 2:analytic limiting/completeness language\nORDINARY 2 [cex-uniform-convergence-does-not-force-integral-convergence-on-an-infinite-measure-space] 2:analytic limiting/completeness language\nMODERATE 4 [cex-decreasing-convergence-without-an-integrable-start-does-not-preserve-the-integral] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [cex-linearity-can-fail-without-integrability] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cex-jensen-can-fail-without-probability-normalization] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-harmonic-majorant-characterization-of-plane-subharmonicity] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-c-two-characterization-of-plane-subharmonicity] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 9 [thm-plane-subharmonic-functions-are-locally-integrable] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 6 [thm-log-modulus-of-a-holomorphic-function-is-subharmonic] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cor-modulus-powers-of-holomorphic-functions-are-subharmonic] 2:boundary-sensitive language\nMODERATE 3 [lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-decreasing-limit-theorem-for-plane-subharmonic-functions] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-upper-envelope-theorem-for-plane-subharmonic-functions] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [thm-maximum-principle-for-plane-subharmonic-functions] 2:boundary-sensitive language\nMODERATE 3 [lem-gluing-lemma-for-plane-subharmonic-functions] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 11 [thm-poisson-modification-preserves-subharmonicity-and-majorizes] 3:7 declared dependencies; 2:7 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-perron-family-is-nonempty-and-bounded] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-perron-envelope-is-harmonic] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-barrier-characterization-of-regular-boundary-points] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-perron-solves-dirichlet-on-regular-plane-domains] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-exterior-disc-and-exterior-cone-points-are-regular] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-local-subharmonic-peak-function-globalizes] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-weak-local-subharmonic-peak-function-implies-regularity] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-boundary-point-whose-complementary-component-contains-another-point-is-regular] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 2 [thm-nonsingleton-boundary-component-is-regular] 2:boundary-sensitive language\nORDINARY 2 [cor-simply-connected-proper-plane-domains-are-regular] 2:boundary-sensitive language\nHIGH 7 [thm-conformal-transport-of-plane-dirichlet-solutions] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [ex-basic-plane-subharmonic-functions] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-poisson-modification-of-a-radial-quadratic-on-a-disc] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-perron-solution-on-an-annulus-with-radial-data] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-a-square-corner-has-an-explicit-barrier] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-every-bounded-plane-domain-has-a-dirichlet-solution] 2:boundary-sensitive language\nMODERATE 3 [fs-the-perron-envelope-always-attains-the-boundary-data] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-a-subharmonic-function-can-attain-an-interior-maximum] no signals\nMODERATE 3 [fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 4 [lem-distinct-minimal-normal-subgroups-centralize-one-another] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple] 2:induction, recursion, or minimality\nHIGH 6 [thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [prop-socle-is-characteristic-and-admits-a-direct-product-decomposition] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive] 2:induction, recursion, or minimality\nHIGH 5 [lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [prop-unique-abelian-minimal-normal-subgroup-gives-affine-type] 2:6 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nORDINARY 0 [lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses] no signals\nHIGH 6 [thm-onan-scott-classification-of-finite-primitive-groups] 2:6 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [prop-two-transitive-groups-have-affine-or-almost-simple-socle-type] 2:4 declared dependencies\nMODERATE 3 [fs-the-socle-is-always-a-single-simple-group] 1:2 cited facts; 2:induction, recursion, or minimality\nHIGH 7 [fs-every-primitive-group-has-a-unique-minimal-normal-subgroup] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-onan-scott-is-the-classification-of-finite-simple-groups] 2:boundary-sensitive language\nORDINARY 2 [fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups] 2:boundary-sensitive language\nMODERATE 4 [ex-affine-type-agl-one-p] 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-almost-simple-type-from-an-alternating-group] no signals\nMODERATE 4 [ex-simple-diagonal-action] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-product-action-wreath-product] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-two-regular-minimal-normal-subgroups] 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nHIGH 6 [ex-socle-of-a-finite-solvable-primitive-group] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [cex-transitive-does-not-force-minimal-normal-subgroups-transitive] 2:induction, recursion, or minimality\nORDINARY 0 [prop-cayley-trees-are-zero-hyperbolic] no signals\nMODERATE 4 [thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [lem-thin-quadrilaterals-in-a-hyperbolic-space] no signals\nHIGH 6 [thm-morse-stability-of-quasi-geodesics] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces] 2:boundary-sensitive language\nMODERATE 3 [thm-hyperbolic-group-definition-is-independent-of-finite-generating-set] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-finite-and-free-groups-are-hyperbolic] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [thm-hyperbolic-groups-admit-finite-dehn-presentations] no signals\nORDINARY 2 [cor-hyperbolic-groups-have-solvable-word-problem] 2:boundary-sensitive language\nHIGH 7 [thm-linear-isoperimetric-characterisation-of-hyperbolic-groups] 2:4 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 0 [thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups] no signals\nORDINARY 0 [thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted] no signals\nORDINARY 2 [thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic] 2:quotient or equivalence-class construction\nORDINARY 0 [cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic] no signals\nMODERATE 4 [thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences] no signals\nHIGH 6 [thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup] no signals\nORDINARY 2 [fs-the-same-delta-works-after-every-change-of-generating-set] 2:boundary-sensitive language\nORDINARY 0 [fs-every-abelian-group-is-hyperbolic] no signals\nORDINARY 2 [fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics] 2:boundary-sensitive language\nMODERATE 4 [fs-the-boundary-definition-needs-no-properness-or-equivalence-check] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-a-tree-is-zero-hyperbolic] 2:boundary-sensitive language\nORDINARY 0 [ex-the-hyperbolic-plane-is-hyperbolic] no signals\nORDINARY 2 [ex-free-groups-and-their-cantor-boundaries] 2:boundary-sensitive language\nMODERATE 3 [ex-surface-groups-as-hyperbolic-groups] 2:4 declared dependencies; 1:3 cited facts\nORDINARY 2 [ex-a-small-cancellation-hyperbolic-group] 2:boundary-sensitive language\nORDINARY 0 [cex-z-squared-is-not-hyperbolic] no signals\nORDINARY 0 [cex-product-of-two-infinite-groups-need-not-be-hyperbolic] no signals\nCRITICAL 9 [lem-continued-fraction-convergent-recurrence] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 7 [lem-continued-fraction-determinant-identity] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nMODERATE 3 [cor-continued-fraction-convergents-are-reduced] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [lem-continued-fraction-complete-quotient-formula] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 13 [thm-convergence-of-infinite-regular-continued-fractions] 2:6 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [thm-continued-fraction-algorithm-for-real-numbers] 2:4 declared dependencies; 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-rational-continued-fraction-termination] 2:4 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-normalized-finite-continued-fraction-uniqueness] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 9 [lem-continued-fraction-error-bound] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-continued-fraction-convergents-are-best-approximations] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-legendre-continued-fraction-criterion] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-periodic-continued-fraction-is-quadratic] 2:6 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [lem-quadratic-irrational-complete-quotients-are-finite-state] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [thm-lagrange-periodic-continued-fraction-theorem] 2:5 declared dependencies; 1:3 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-two-finite-continued-fractions-for-a-rational] 2:boundary-sensitive language\nHIGH 5 [ex-continued-fraction-and-extended-euclid] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 9 [ex-continued-fraction-of-square-root-two] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [ex-continued-fraction-of-square-root-fourteen] 2:quotient or equivalence-class construction\nMODERATE 3 [ex-golden-ratio-as-a-periodic-continued-fraction] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [ex-best-rational-approximations-to-pi] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [cex-an-excellent-approximation-at-the-legendre-boundary] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [ex-a-negative-real-continued-fraction] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-radical-membership-by-a-power] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [lem-radical-is-an-ideal] 1:2 cited facts\nORDINARY 0 [lem-radical-of-an-intersection] no signals\nORDINARY 1 [lem-radical-of-a-product] 1:2 cited facts\nCRITICAL 8 [lem-radical-commutes-with-quotient-correspondence] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-radical-commutes-with-localisation] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [cor-reduced-quotient-by-the-nilradical] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-prime-containing-a-multiplicative-set-disjoint-ideal] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [cor-prime-containing-an-ideal-avoiding-an-element] 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [lem-radical-intersection-proof-forward-inclusion] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-radical-intersection-proof-separating-prime] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-radical-as-intersection-of-primes] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [cor-nilradical-as-intersection-of-primes] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [cor-ring-reduced-iff-zero-is-an-intersection-of-primes] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [lem-vanishing-set-reverses-inclusions] 2:boundary-sensitive language\nORDINARY 2 [lem-vanishing-set-of-an-arbitrary-sum] 2:boundary-sensitive language\nORDINARY 1 [lem-vanishing-set-of-a-finite-product] 1:2 cited facts\nORDINARY 1 [lem-vanishing-set-identities] 1:3 cited facts\nHIGH 6 [lem-vanishing-sets-detect-radicals] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [lem-distinguished-subset-identities] 2:boundary-sensitive language\nCRITICAL 8 [lem-distinguished-subset-cover-detects-radical] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [lem-spectrum-map-respects-composition-and-identities] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [lem-spectrum-map-preimage-of-vanishing-set] 1:2 cited facts\nORDINARY 1 [thm-prime-spectrum-map-by-contraction] 1:2 cited facts\nMODERATE 3 [lem-primes-of-a-quotient-are-primes-over-the-kernel] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [thm-prime-spectrum-of-a-quotient-bijection] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-primes-of-a-localisation-avoid-the-multiplicative-set] no signals\nORDINARY 1 [cor-primes-of-a-prime-local-ring] 1:2 cited facts\nORDINARY 1 [cor-primes-of-a-principal-localisation] 1:2 cited facts\nORDINARY 1 [thm-prime-spectrum-of-a-localisation-bijection] 1:2 cited facts\nHIGH 5 [cor-prime-spectrum-insensitive-to-nilpotents] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 7 [lem-minimal-prime-over-an-ideal-exists] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [lem-noetherian-minimal-primes-induction-split] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [thm-nilradical-of-a-noetherian-ring-is-nilpotent] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [cor-radical-ideal-has-finitely-many-minimal-primes-noetherian] 1:3 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-noetherian-ring-has-finitely-many-minimal-primes] 1:3 cited facts; 3:biconditional / both-direction claim; 2:induction, recursion, or minimality\nMODERATE 3 [lem-height-equals-local-dimension] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 7 [cor-dimension-of-a-quotient-as-chains-above-an-ideal] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 15 [ex-prime-sets-of-a-field-and-the-integers] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [ex-prime-spectrum-set-of-a-product-ring] 2:boundary-sensitive language\nMODERATE 3 [ex-prime-spectrum-set-of-dual-numbers] 1:2 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 9 [ex-prime-ideals-of-a-node] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 1 [ex-distinguished-subset-and-localisation-primes] 1:2 cited facts\nHIGH 5 [ex-radical-intersection-computation] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 3 [ex-radical-of-a-product-and-intersection] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-separating-prime-for-a-missing-radical-element] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [ex-spectrum-of-a-zero-ring-empty] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-primes-in-a-prime-localisation] no signals\nMODERATE 4 [ex-noetherian-nilradical-common-exponent] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-nilradical-need-not-be-nilpotent-nonnoetherian] 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-odd-degree-real-polynomial-has-a-real-root] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [cor-irreducible-real-polynomial-has-degree-one-or-even-degree] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra] 2:4 declared dependencies; 2:4 cited facts\nHIGH 5 [lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root] 1:3 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 10 [prop-algebraically-closed-splitting-and-finite-extension-criteria] 3:7 declared dependencies; 2:7 cited facts; 3:biconditional / both-direction claim; 2:induction, recursion, or minimality\nCRITICAL 14 [thm-the-complex-numbers-are-algebraically-closed] 3:15 declared dependencies; 2:15 cited facts; 2:10 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [cor-every-complex-polynomial-splits-into-linear-factors] 1:2 cited facts\nORDINARY 1 [cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals] 1:3 cited facts\nCRITICAL 8 [cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q] 3:7 declared dependencies; 2:7 cited facts; 3:biconditional / both-direction claim\nORDINARY 2 [lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs] 2:boundary-sensitive language\nMODERATE 3 [cor-irreducible-real-polynomials-have-degree-one-or-two] 1:3 cited facts; 2:induction, recursion, or minimality\nMODERATE 3 [cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [ex-x-cubed-minus-two-over-r-and-c] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-x-four-plus-one-factors-into-two-real-quadratics] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-x-fifth-minus-x-minus-one-has-a-real-root] 2:boundary-sensitive language\nCRITICAL 11 [ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals] 3:12 declared dependencies; 2:12 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [fs-every-real-polynomial-has-a-real-root] 2:boundary-sensitive language\nMODERATE 3 [fs-the-real-numbers-are-algebraically-closed] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-every-irreducible-real-polynomial-has-degree-one] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals] 1:3 cited facts\nORDINARY 2 [lem-set-partitions-of-a-finite-set-are-finite] 2:boundary-sensitive language\nORDINARY 2 [thm-stirling-second-kind-recurrence] 2:boundary-sensitive language\nORDINARY 2 [cor-bell-number-binomial-recurrence] 2:boundary-sensitive language\nORDINARY 1 [thm-stirling-second-kind-inclusion-exclusion-formula] 1:2 cited facts\nORDINARY 0 [thm-powers-expand-in-the-falling-factorial-basis] no signals\nHIGH 5 [thm-signless-first-kind-recurrence-and-rising-factorial-expansion] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [thm-signed-stirling-inversion] 1:2 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 10 [thm-labelled-symbolic-method-rules-for-exponential-generating-functions] 2:5 declared dependencies; 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [thm-vertical-egfs-for-the-stirling-triangles] 2:boundary-sensitive language\nORDINARY 1 [thm-exponential-formula-for-set-partitions-and-bell-numbers] 1:2 cited facts\nHIGH 6 [cor-dobinski-formula-for-bell-numbers] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [cor-standard-specializations-of-the-labelled-symbolic-method] 2:boundary-sensitive language\nMODERATE 3 [thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cor-touchards-congruence-for-bell-numbers] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [fs-bell-numbers-count-ordered-set-partitions] no signals\nORDINARY 0 [fs-stirling-second-kind-counts-surjections] no signals\nORDINARY 2 [fs-exponential-generating-functions-multiply-without-labelled-product-hypothesis] 2:boundary-sensitive language\nORDINARY 0 [cex-set-partitions-with-the-same-block-sizes-can-be-distinct] no signals\nORDINARY 2 [cex-the-second-kind-inclusion-exclusion-formula-does-not-count-permutations-by-cycles] 2:boundary-sensitive language\nMODERATE 4 [lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades] no signals\nORDINARY 0 [lem-maximal-pattern-pure-blockades-force-many-blocks] no signals\nHIGH 6 [thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades] 2:boundary-sensitive language\nORDINARY 0 [fs-every-pure-blockade-is-complete-or-anticomplete] no signals\nORDINARY 2 [fs-blockade-order-never-matters-for-x-sparsity] 2:boundary-sensitive language\nORDINARY 0 [cex-weak-sparsity-does-not-imply-directional-sparsity] no signals\nORDINARY 0 [cex-a-comb-fails-when-a-tooth-sees-a-foreign-block] no signals\nHIGH 7 [lem-holomorphic-dependence-of-slice-laurent-coefficients] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 12 [thm-hartogs-figure-extension] 3:8 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-hartogs-figure-obstruction-to-domain-of-holomorphy] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [thm-removability-of-a-puncture-in-several-complex-variables] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [cor-no-isolated-holomorphic-singularities-in-several-complex-variables] no signals\nCRITICAL 8 [lem-bounded-punctured-slice-has-holomorphic-parameter-extension] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-riemann-extension-across-a-coordinate-hyperplane] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 13 [lem-local-boundedness-of-separately-holomorphic-functions] 3:15 declared dependencies; 2:15 cited facts; 2:16 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nMODERATE 3 [thm-hartogs-separate-holomorphy] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [lem-local-hartogs-extension-across-polydisc-shells] 2:6 declared dependencies; 2:6 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-propagation-and-gluing-of-hartogs-extensions] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-hartogs-extension-across-compact-holes] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-punctured-domain-functions-must-be-unbounded] no signals\nMODERATE 3 [fs-one-variable-isolated-singularity-theory-has-a-several-variable-analogue] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-every-domain-in-c-two-is-a-domain-of-holomorphy] no signals\nORDINARY 0 [fs-separate-holomorphy-can-fail-to-imply-local-boundedness] no signals\nORDINARY 0 [ex-hartogs-figure-in-modulus-coordinates] no signals\nORDINARY 2 [ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure] 2:boundary-sensitive language\nORDINARY 2 [ex-z-one-over-one-minus-z-one-z-two-extends-across-the-punctured-bidisc] 2:boundary-sensitive language\nMODERATE 3 [ex-bidisc-minus-the-origin-is-not-a-domain-of-holomorphy] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-one-over-z-has-a-nonremovable-puncture-in-one-variable] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy] 2:boundary-sensitive language\nHIGH 6 [thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-an-additive-functor-preserves-zero-morphisms] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-the-opposite-of-a-preadditive-category-is-preadditive] 1:2 cited facts\nMODERATE 3 [prop-a-small-product-of-preadditive-categories-is-preadditive] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [prop-additive-functors-and-natural-transformations-form-a-preadditive-category] 2:4 declared dependencies; 2:4 cited facts\nHIGH 6 [thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-biproduct-data-characterisation-without-addition] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [prop-the-empty-biproduct-is-a-zero-object] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse] 1:3 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-additive-categories-are-closed-under-passage-to-the-opposite] 1:2 cited facts\nMODERATE 3 [thm-morphisms-between-finite-biproducts-correspond-to-matrices] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication] 2:boundary-sensitive language; 1:finite countermodel smoke test selected\nMODERATE 3 [cor-the-biproduct-of-morphisms-is-the-diagonal-matrix] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cex-an-infinite-coproduct-need-not-agree-with-the-infinite-product] 1:2 cited facts\nMODERATE 4 [thm-the-matrix-category-over-a-ring-is-additive] 1:2 cited facts; 2:boundary-sensitive language; 1:finite countermodel smoke test selected\nHIGH 6 [thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules] 3:7 declared dependencies; 2:7 cited facts; 1:finite countermodel smoke test selected\nHIGH 6 [thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference] 1:2 cited facts\nHIGH 6 [thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category] 2:boundary-sensitive language\nHIGH 6 [thm-an-additive-functor-preserves-finite-biproducts] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 1 [cor-a-functor-between-additive-categories-preserving-finite-products-is-additive] 1:2 cited facts\nMODERATE 3 [cor-any-adjoint-between-additive-categories-is-additive] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nMODERATE 3 [prop-an-additive-functor-preserves-split-biproduct-diagrams] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-hom-functors-on-a-preadditive-category-are-left-exact] 1:3 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [cex-a-covariant-hom-functor-on-an-additive-category-need-not-preserve-cokernels] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 9 [thm-an-additive-category-with-kernels-is-idempotent-complete] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 9 [thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen] 1:2 cited facts\nORDINARY 1 [fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts] 1:2 cited facts\nORDINARY 2 [fs-a-functor-preserving-zero-morphisms-is-additive] 2:boundary-sensitive language\nMODERATE 3 [fs-a-preadditive-category-with-a-zero-object-has-binary-biproducts] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-every-idempotent-splits] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-the-biproduct-of-two-abelian-groups-computed-as-a-matrix-calculus] 1:2 cited facts\nORDINARY 1 [ex-abelian-groups-modules-and-vector-spaces-are-additive] 1:3 cited facts\nHIGH 5 [ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 0 [cex-pointed-sets-are-not-additive] no signals\nMODERATE 3 [cex-commutative-monoids-are-semiadditive-and-not-additive] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-additive-functors-out-of-the-matrix-category] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-a-preadditive-category-with-two-objects-and-a-nonzero-hom-group] 2:boundary-sensitive language\nrisk-report: 2 error(s), 393 item(s) routed\nERROR risk-review-missing [ex-radical-intersection-computation]: ex-radical-intersection-computation is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [cor-dobinski-formula-for-bell-numbers]: cor-dobinski-formula-for-bell-numbers is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "prop-stieltjes-interval-set-function-is-finitely-additive",
        "thm-stieltjes-interval-set-function-is-a-premeasure",
        "thm-existence-of-the-lebesgue-stieltjes-measure",
        "thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r",
        "thm-lebesgue-stieltjes-correspondence-with-distribution-functions",
        "thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures",
        "thm-lebesgue-stieltjes-measures-are-regular-on-r",
        "cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity",
        "prop-cantor-measure-is-a-singular-atomless-probability-measure",
        "thm-finite-borel-measure-on-r-is-atomic-plus-atomless",
        "fs-every-increasing-function-defines-a-lebesgue-stieltjes-measure",
        "fs-lebesgue-stieltjes-measures-have-zero-point-masses",
        "fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization",
        "fs-every-borel-measure-on-r-is-finite-on-compact-sets",
        "fs-every-atomless-borel-measure-on-r-has-a-density",
        "ex-the-identity-function-generates-lebesgue-measure",
        "ex-one-jump-function-generates-a-dirac-mass-at-zero",
        "ex-a-step-function-generates-a-finite-atomic-measure",
        "ex-two-normalizations-give-the-same-lebesgue-stieltjes-measure",
        "ex-interval-formulas-for-a-function-with-one-jump",
        "ex-cantor-measure-is-concentrated-on-the-cantor-set",
        "ex-arctangent-generates-a-borel-probability-measure",
        "cex-right-continuity-is-necessary-for-lebesgue-stieltjes-measures",
        "cex-cantor-measure-is-atomless-but-not-absolutely-continuous",
        "prop-indicator-function-is-measurable-iff-its-set-is-measurable",
        "thm-generating-family-criterion-for-measurable-functions",
        "thm-threshold-characterisations-of-real-and-extended-real-measurability",
        "cor-continuous-functions-are-borel-measurable",
        "thm-monotone-real-functions-are-borel-measurable",
        "thm-coordinatewise-measurability-into-r-n",
        "thm-composition-with-borel-functions-preserves-measurability",
        "thm-arithmetic-and-lattice-operations-preserve-measurability",
        "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable",
        "thm-nonnegative-measurable-functions-admit-increasing-simple-approximations",
        "cor-measurable-functions-admit-dominated-simple-approximations",
        "thm-ae-equality-preserves-measurability-on-complete-spaces",
        "thm-completion-measurable-functions-have-base-measurable-representatives",
        "thm-doob-dynkin-lemma",
        "fs-measurable-level-sets-do-not-imply-measurability",
        "fs-absolute-value-measurable-does-not-imply-measurability",
        "fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable",
        "fs-ae-equality-with-a-measurable-function-does-not-imply-measurability",
        "fs-composing-a-lebesgue-measurable-function-with-a-continuous-map-need-not-preserve-measurability",
        "fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae",
        "ex-indicator-functions-are-measurable",
        "ex-a-simple-function-and-its-canonical-representation",
        "ex-dirichlet-function-is-borel-and-nowhere-continuous",
        "ex-cantor-function-is-borel-measurable",
        "ex-dyadic-simple-approximations-to-x-squared-on-zero-two",
        "ex-sigma-of-an-indicator-function",
        "ex-sigma-of-a-two-step-simple-function",
        "ex-a-lebesgue-measurable-function-that-is-not-borel",
        "cex-an-uncountable-supremum-of-indicators-need-not-be-measurable",
        "cex-a-continuous-preimage-can-break-lebesgue-measurability",
        "cex-ae-equality-can-fail-on-an-incomplete-space",
        "cex-a-function-can-have-measurable-level-sets-without-being-measurable",
        "prop-closure-properties-of-measurable-functions-used-by-the-integral",
        "thm-increasing-simple-approximation-of-a-nonnegative-measurable-function",
        "lem-well-definedness-of-the-simple-integral",
        "prop-basic-properties-of-the-nonnegative-simple-integral",
        "prop-the-nonnegative-integral-agrees-with-the-simple-integral",
        "thm-simple-indefinite-integral-is-a-measure",
        "prop-order-and-scalar-rules-for-the-nonnegative-integral",
        "thm-monotone-convergence-for-the-integral",
        "cor-additivity-of-the-nonnegative-lebesgue-integral",
        "cor-beppo-levi-theorem",
        "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure",
        "thm-integration-against-a-density",
        "thm-fatou-lemma",
        "cor-reverse-fatou-lemma-under-an-integrable-majorant",
        "thm-nonnegative-integral-zero-iff-zero-almost-everywhere",
        "cor-finite-nonnegative-integral-implies-finite-almost-everywhere",
        "cor-integral-over-a-null-set-vanishes",
        "cor-almost-everywhere-monotone-convergence",
        "thm-chebyshev-markov-inequality-for-the-integral",
        "thm-linearity-of-the-lebesgue-integral-on-l-one",
        "thm-the-lebesgue-integral-respects-almost-everywhere-equality",
        "thm-integral-triangle-inequality",
        "thm-dominated-convergence",
        "cor-bounded-convergence-on-a-finite-measure-space",
        "thm-integrable-simple-functions-are-dense-in-l-one",
        "thm-absolute-continuity-of-the-integral",
        "prop-indefinite-integral-of-an-integrable-function-is-countably-additive",
        "thm-continuity-under-the-integral-sign",
        "thm-differentiation-under-the-integral-sign",
        "thm-jensens-integral-inequality",
        "fs-monotone-convergence-without-monotonicity",
        "fs-fatou-lemma-is-always-an-equality",
        "fs-dominated-convergence-without-a-dominating-function",
        "fs-zero-integral-forces-everywhere-zero",
        "fs-pointwise-limits-of-integrable-functions-are-integrable",
        "fs-linearity-without-the-integrability-hypothesis",
        "fs-jensens-inequality-on-an-infinite-measure-space",
        "ex-counting-measure-integral-is-a-series",
        "cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral",
        "ex-exponential-integral-by-monotone-truncation",
        "ex-x-to-the-minus-one-half-is-unbounded-but-integrable",
        "ex-dirac-integral-is-evaluation-at-a-point",
        "ex-differentiating-the-laplace-sine-integral-under-the-integral-sign",
        "ex-jensen-yields-weighted-am-gm",
        "cex-fatou-can-be-strict-and-domination-can-fail-simultaneously",
        "cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable",
        "cex-mass-escapes-to-infinity-under-pointwise-convergence",
        "cex-uniform-convergence-does-not-force-integral-convergence-on-an-infinite-measure-space",
        "cex-decreasing-convergence-without-an-integrable-start-does-not-preserve-the-integral",
        "cex-linearity-can-fail-without-integrability",
        "cex-jensen-can-fail-without-probability-normalization",
        "lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined",
        "thm-harmonic-majorant-characterization-of-plane-subharmonicity",
        "thm-c-two-characterization-of-plane-subharmonicity",
        "thm-plane-subharmonic-functions-are-locally-integrable",
        "thm-log-modulus-of-a-holomorphic-function-is-subharmonic",
        "cor-modulus-powers-of-holomorphic-functions-are-subharmonic",
        "lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity",
        "thm-decreasing-limit-theorem-for-plane-subharmonic-functions",
        "thm-upper-envelope-theorem-for-plane-subharmonic-functions",
        "thm-maximum-principle-for-plane-subharmonic-functions",
        "lem-gluing-lemma-for-plane-subharmonic-functions",
        "thm-poisson-modification-preserves-subharmonicity-and-majorizes",
        "lem-perron-family-is-nonempty-and-bounded",
        "thm-perron-envelope-is-harmonic",
        "thm-barrier-characterization-of-regular-boundary-points",
        "thm-perron-solves-dirichlet-on-regular-plane-domains",
        "thm-exterior-disc-and-exterior-cone-points-are-regular",
        "lem-local-subharmonic-peak-function-globalizes",
        "lem-weak-local-subharmonic-peak-function-implies-regularity",
        "lem-boundary-point-whose-complementary-component-contains-another-point-is-regular",
        "thm-nonsingleton-boundary-component-is-regular",
        "cor-simply-connected-proper-plane-domains-are-regular",
        "thm-conformal-transport-of-plane-dirichlet-solutions",
        "ex-basic-plane-subharmonic-functions",
        "ex-poisson-modification-of-a-radial-quadratic-on-a-disc",
        "ex-perron-solution-on-an-annulus-with-radial-data",
        "ex-a-square-corner-has-an-explicit-barrier",
        "cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum",
        "fs-every-bounded-plane-domain-has-a-dirichlet-solution",
        "fs-the-perron-envelope-always-attains-the-boundary-data",
        "fs-a-subharmonic-function-can-attain-an-interior-maximum",
        "fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic",
        "lem-distinct-minimal-normal-subgroups-centralize-one-another",
        "lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple",
        "thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups",
        "prop-socle-is-characteristic-and-admits-a-direct-product-decomposition",
        "thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive",
        "lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular",
        "cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups",
        "prop-unique-abelian-minimal-normal-subgroup-gives-affine-type",
        "lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses",
        "thm-onan-scott-classification-of-finite-primitive-groups",
        "prop-two-transitive-groups-have-affine-or-almost-simple-socle-type",
        "fs-the-socle-is-always-a-single-simple-group",
        "fs-every-primitive-group-has-a-unique-minimal-normal-subgroup",
        "fs-onan-scott-is-the-classification-of-finite-simple-groups",
        "fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups",
        "ex-affine-type-agl-one-p",
        "ex-almost-simple-type-from-an-alternating-group",
        "ex-simple-diagonal-action",
        "ex-product-action-wreath-product",
        "ex-two-regular-minimal-normal-subgroups",
        "ex-socle-of-a-finite-solvable-primitive-group",
        "cex-transitive-does-not-force-minimal-normal-subgroups-transitive",
        "prop-cayley-trees-are-zero-hyperbolic",
        "thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants",
        "lem-thin-quadrilaterals-in-a-hyperbolic-space",
        "thm-morse-stability-of-quasi-geodesics",
        "thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces",
        "thm-hyperbolic-group-definition-is-independent-of-finite-generating-set",
        "prop-finite-and-free-groups-are-hyperbolic",
        "prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic",
        "thm-hyperbolic-groups-admit-finite-dehn-presentations",
        "cor-hyperbolic-groups-have-solvable-word-problem",
        "thm-linear-isoperimetric-characterisation-of-hyperbolic-groups",
        "thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups",
        "thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted",
        "thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic",
        "cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic",
        "thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups",
        "thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup",
        "lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences",
        "thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant",
        "fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup",
        "fs-the-same-delta-works-after-every-change-of-generating-set",
        "fs-every-abelian-group-is-hyperbolic",
        "fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics",
        "fs-the-boundary-definition-needs-no-properness-or-equivalence-check",
        "ex-a-tree-is-zero-hyperbolic",
        "ex-the-hyperbolic-plane-is-hyperbolic",
        "ex-free-groups-and-their-cantor-boundaries",
        "ex-surface-groups-as-hyperbolic-groups",
        "ex-a-small-cancellation-hyperbolic-group",
        "cex-z-squared-is-not-hyperbolic",
        "cex-product-of-two-infinite-groups-need-not-be-hyperbolic",
        "lem-continued-fraction-convergent-recurrence",
        "lem-continued-fraction-determinant-identity",
        "cor-continued-fraction-convergents-are-reduced",
        "lem-continued-fraction-complete-quotient-formula",
        "thm-convergence-of-infinite-regular-continued-fractions",
        "thm-continued-fraction-algorithm-for-real-numbers",
        "thm-rational-continued-fraction-termination",
        "thm-normalized-finite-continued-fraction-uniqueness",
        "lem-continued-fraction-error-bound",
        "thm-continued-fraction-convergents-are-best-approximations",
        "thm-legendre-continued-fraction-criterion",
        "lem-periodic-continued-fraction-is-quadratic",
        "lem-quadratic-irrational-complete-quotients-are-finite-state",
        "thm-lagrange-periodic-continued-fraction-theorem",
        "ex-two-finite-continued-fractions-for-a-rational",
        "ex-continued-fraction-and-extended-euclid",
        "ex-continued-fraction-of-square-root-two",
        "ex-continued-fraction-of-square-root-fourteen",
        "ex-golden-ratio-as-a-periodic-continued-fraction",
        "ex-best-rational-approximations-to-pi",
        "cex-an-excellent-approximation-at-the-legendre-boundary",
        "ex-a-negative-real-continued-fraction",
        "lem-radical-membership-by-a-power",
        "lem-radical-is-an-ideal",
        "lem-radical-of-an-intersection",
        "lem-radical-of-a-product",
        "lem-radical-commutes-with-quotient-correspondence",
        "lem-radical-commutes-with-localisation",
        "cor-reduced-quotient-by-the-nilradical",
        "lem-prime-containing-a-multiplicative-set-disjoint-ideal",
        "cor-prime-containing-an-ideal-avoiding-an-element",
        "lem-radical-intersection-proof-forward-inclusion",
        "lem-radical-intersection-proof-separating-prime",
        "thm-radical-as-intersection-of-primes",
        "cor-nilradical-as-intersection-of-primes",
        "cor-ring-reduced-iff-zero-is-an-intersection-of-primes",
        "lem-vanishing-set-reverses-inclusions",
        "lem-vanishing-set-of-an-arbitrary-sum",
        "lem-vanishing-set-of-a-finite-product",
        "lem-vanishing-set-identities",
        "lem-vanishing-sets-detect-radicals",
        "lem-distinguished-subset-identities",
        "lem-distinguished-subset-cover-detects-radical",
        "lem-spectrum-map-respects-composition-and-identities",
        "lem-spectrum-map-preimage-of-vanishing-set",
        "thm-prime-spectrum-map-by-contraction",
        "lem-primes-of-a-quotient-are-primes-over-the-kernel",
        "thm-prime-spectrum-of-a-quotient-bijection",
        "lem-primes-of-a-localisation-avoid-the-multiplicative-set",
        "cor-primes-of-a-prime-local-ring",
        "cor-primes-of-a-principal-localisation",
        "thm-prime-spectrum-of-a-localisation-bijection",
        "cor-prime-spectrum-insensitive-to-nilpotents",
        "lem-minimal-prime-over-an-ideal-exists",
        "lem-noetherian-minimal-primes-induction-split",
        "thm-nilradical-of-a-noetherian-ring-is-nilpotent",
        "cor-radical-ideal-has-finitely-many-minimal-primes-noetherian",
        "thm-noetherian-ring-has-finitely-many-minimal-primes",
        "lem-height-equals-local-dimension",
        "cor-dimension-of-a-quotient-as-chains-above-an-ideal",
        "ex-prime-sets-of-a-field-and-the-integers",
        "ex-prime-spectrum-set-of-a-product-ring",
        "ex-prime-spectrum-set-of-dual-numbers",
        "ex-prime-ideals-of-a-node",
        "ex-distinguished-subset-and-localisation-primes",
        "ex-radical-intersection-computation",
        "ex-radical-of-a-product-and-intersection",
        "ex-separating-prime-for-a-missing-radical-element",
        "ex-spectrum-of-a-zero-ring-empty",
        "ex-primes-in-a-prime-localisation",
        "ex-noetherian-nilradical-common-exponent",
        "ex-nilradical-need-not-be-nilpotent-nonnoetherian",
        "thm-odd-degree-real-polynomial-has-a-real-root",
        "cor-irreducible-real-polynomial-has-degree-one-or-even-degree",
        "lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra",
        "lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root",
        "prop-algebraically-closed-splitting-and-finite-extension-criteria",
        "thm-the-complex-numbers-are-algebraically-closed",
        "cor-every-complex-polynomial-splits-into-linear-factors",
        "cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals",
        "cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q",
        "lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs",
        "cor-irreducible-real-polynomials-have-degree-one-or-two",
        "cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors",
        "thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity",
        "ex-x-cubed-minus-two-over-r-and-c",
        "ex-x-four-plus-one-factors-into-two-real-quadratics",
        "ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c",
        "ex-x-fifth-minus-x-minus-one-has-a-real-root",
        "ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals",
        "fs-every-real-polynomial-has-a-real-root",
        "fs-the-real-numbers-are-algebraically-closed",
        "fs-every-irreducible-real-polynomial-has-degree-one",
        "fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals",
        "lem-set-partitions-of-a-finite-set-are-finite",
        "thm-stirling-second-kind-recurrence",
        "cor-bell-number-binomial-recurrence",
        "thm-stirling-second-kind-inclusion-exclusion-formula",
        "thm-powers-expand-in-the-falling-factorial-basis",
        "thm-signless-first-kind-recurrence-and-rising-factorial-expansion",
        "thm-signed-stirling-inversion",
        "thm-labelled-symbolic-method-rules-for-exponential-generating-functions",
        "thm-vertical-egfs-for-the-stirling-triangles",
        "thm-exponential-formula-for-set-partitions-and-bell-numbers",
        "cor-dobinski-formula-for-bell-numbers",
        "cor-standard-specializations-of-the-labelled-symbolic-method",
        "thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials",
        "cor-touchards-congruence-for-bell-numbers",
        "fs-bell-numbers-count-ordered-set-partitions",
        "fs-stirling-second-kind-counts-surjections",
        "fs-exponential-generating-functions-multiply-without-labelled-product-hypothesis",
        "cex-set-partitions-with-the-same-block-sizes-can-be-distinct",
        "cex-the-second-kind-inclusion-exclusion-formula-does-not-count-permutations-by-cycles",
        "lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets",
        "lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades",
        "lem-maximal-pattern-pure-blockades-force-many-blocks",
        "thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs",
        "thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades",
        "fs-every-pure-blockade-is-complete-or-anticomplete",
        "fs-blockade-order-never-matters-for-x-sparsity",
        "cex-weak-sparsity-does-not-imply-directional-sparsity",
        "cex-a-comb-fails-when-a-tooth-sees-a-foreign-block",
        "lem-holomorphic-dependence-of-slice-laurent-coefficients",
        "lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure",
        "thm-hartogs-figure-extension",
        "cor-hartogs-figure-obstruction-to-domain-of-holomorphy",
        "thm-removability-of-a-puncture-in-several-complex-variables",
        "cor-no-isolated-holomorphic-singularities-in-several-complex-variables",
        "lem-bounded-punctured-slice-has-holomorphic-parameter-extension",
        "thm-riemann-extension-across-a-coordinate-hyperplane",
        "lem-local-boundedness-of-separately-holomorphic-functions",
        "thm-hartogs-separate-holomorphy",
        "lem-local-hartogs-extension-across-polydisc-shells",
        "lem-propagation-and-gluing-of-hartogs-extensions",
        "thm-hartogs-extension-across-compact-holes",
        "fs-punctured-domain-functions-must-be-unbounded",
        "fs-one-variable-isolated-singularity-theory-has-a-several-variable-analogue",
        "fs-every-domain-in-c-two-is-a-domain-of-holomorphy",
        "fs-separate-holomorphy-can-fail-to-imply-local-boundedness",
        "ex-hartogs-figure-in-modulus-coordinates",
        "ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure",
        "ex-z-one-over-one-minus-z-one-z-two-extends-across-the-punctured-bidisc",
        "ex-bidisc-minus-the-origin-is-not-a-domain-of-holomorphy",
        "cex-one-over-z-has-a-nonremovable-puncture-in-one-variable",
        "cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy",
        "thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring",
        "thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules",
        "prop-an-additive-functor-preserves-zero-morphisms",
        "thm-the-opposite-of-a-preadditive-category-is-preadditive",
        "prop-a-small-product-of-preadditive-categories-is-preadditive",
        "prop-additive-functors-and-natural-transformations-form-a-preadditive-category",
        "thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal",
        "prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group",
        "cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense",
        "thm-biproduct-data-characterisation-without-addition",
        "prop-the-empty-biproduct-is-a-zero-object",
        "prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism",
        "thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids",
        "thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique",
        "cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument",
        "thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation",
        "thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse",
        "thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct",
        "cor-additive-categories-are-closed-under-passage-to-the-opposite",
        "thm-morphisms-between-finite-biproducts-correspond-to-matrices",
        "thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication",
        "cor-the-biproduct-of-morphisms-is-the-diagonal-matrix",
        "cex-an-infinite-coproduct-need-not-agree-with-the-infinite-product",
        "thm-the-matrix-category-over-a-ring-is-additive",
        "thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules",
        "thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference",
        "cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference",
        "thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits",
        "thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero",
        "cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero",
        "cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category",
        "thm-an-additive-functor-preserves-finite-biproducts",
        "thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts",
        "cor-a-functor-between-additive-categories-preserving-finite-products-is-additive",
        "cor-any-adjoint-between-additive-categories-is-additive",
        "thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels",
        "prop-an-additive-functor-preserves-split-biproduct-diagrams",
        "thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups",
        "cor-hom-functors-on-a-preadditive-category-are-left-exact",
        "cex-a-covariant-hom-functor-on-an-additive-category-need-not-preserve-cokernels",
        "thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism",
        "thm-an-additive-category-with-kernels-is-idempotent-complete",
        "thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal",
        "fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen",
        "fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts",
        "fs-a-functor-preserving-zero-morphisms-is-additive",
        "fs-a-preadditive-category-with-a-zero-object-has-binary-biproducts",
        "fs-every-idempotent-splits",
        "ex-the-biproduct-of-two-abelian-groups-computed-as-a-matrix-calculus",
        "ex-abelian-groups-modules-and-vector-spaces-are-additive",
        "ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices",
        "ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules",
        "cex-pointed-sets-are-not-additive",
        "cex-commutative-monoids-are-semiadditive-and-not-additive",
        "ex-additive-functors-out-of-the-matrix-category",
        "ex-a-preadditive-category-with-two-objects-and-a-nonzero-hom-group"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 3144 rows over 1 contract file(s); 2541 marked not_applicable\n\nTEMPLATE REUSE — none at or above 3 members.\n\nCONTRADICTED DISPOSITIONS — 1 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\n  cor-dobinski-formula-for-bell-numbers  [zero]\n    the proof divides by a symbolic denominator (\\ell!) — the zero case is a real obligation unless a hypothesis excludes it\n    row says: \"The claim Dobinski's formula expresses the Bell numbers as $B_n=e^{-1}\\\\sum_{\\\\ell\\\\ge0}\\\\ell^n/\\\\ell!$ (dobinski formula for bell numbers) …\"\n\nUPHELD BY REVIEW — 13 row(s) an Alpha read and kept, with reasons on the record:\n  fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable  [empty]  by contract-audit-1: This false-statement item disproves a universal claim by one explicit uncountable family of measurable indicator functio\n  cor-beppo-levi-theorem  [empty]  by contract-audit-1: The detector keys on the partial-sum notation Σ_{k<n}, but this item studies one fixed sequence indexed by N. The only e\n  thm-convergence-of-infinite-regular-continued-fractions  [zero]  by contract-audit-1: The detector keys on symbolic denominators in steps 2.2 and 3.2, but step 1.1 proves q_0=1 and q_n>0 for every later con\n  lem-continued-fraction-error-bound  [zero]  by contract-audit-1: The only flagged denominators are q_n and α_{n+1}q_n+q_{n-1}. Steps 2.1 and 3.1 use q_{n+1}>q_n>0, so the zero-denominat\n  thm-continued-fraction-convergents-are-best-approximations  [zero]  by contract-audit-1: This row is about zero denominators, not the separate n=0 boundary repaired on Wednesday, August 26, 2026. The current S\n  thm-legendre-continued-fraction-criterion  [zero]  by contract-audit-1: The current Given already takes a reduced rational r/s with s>0, and fact F1 makes the convergent denominators strictly \n  ex-two-finite-continued-fractions-for-a-rational  [zero]  by contract-audit-1: The displayed denominators 1+1/2, 1+2/3, and 1+1/1 are fixed positive numbers in the concrete 8/5 computation. The detec\n  ex-continued-fraction-and-extended-euclid  [zero]  by contract-audit-1: The displayed denominators 2+1/1 and 1+1/3 are fixed positive numbers in the explicit 37/11 computation. No symbolic den\n  ex-continued-fraction-of-square-root-two  [zero]  by contract-audit-1: The flagged denominator 2+1/2 is a fixed positive value in the explicit periodic expansion of sqrt(2). There is no free \n  ex-best-rational-approximations-to-pi  [zero]  by contract-audit-1: The flagged denominator 2·113^2 is a fixed positive integer in the explicit 355/113 error computation. This example has \n  cex-an-excellent-approximation-at-the-legendre-boundary  [zero]  by contract-audit-1: The denominators 7(10+7√2) and 4·7^2 are fixed positive values in the concrete 3/4 witness. The counterexample does not \n  lem-maximal-pattern-pure-blockades-force-many-blocks  [empty]  by contract-audit-1: The contradiction starts from a maximal pure blockade whose total a-mass is at least |G|^{1/a}; that witness is already \n  lem-maximal-pattern-pure-blockades-force-many-blocks  [zero]  by contract-audit-1: The only flagged denominator is k^a, and step 1.1 chooses k in [2, ε^{-1}] while the Statement assumes a≥1 and ε∈(0,1/2)\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "citation-fidelity",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 878 citation(s) over 393 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 17.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  thm-stieltjes-interval-set-function-is-a-premeasure  [L1] -> prop-stieltjes-interval-set-function-is-finitely-additive (searched: Statement)\n    quote: \"Let $F : \\mathbb{R} \\to \\mathbb{R}$ be nondecreasing and let $\\mu_{0,F}$ be the set function of [[def-lebesgue-stieltjes-interval-set-function]]. Then the value of $\\mu_{0,F}(E)$ i…\"\n\n  lem-well-definedness-of-the-simple-integral  [L1] -> def-integral-of-a-nonnegative-simple-function (searched: Definition)\n    quote: \"Let $s=\\sum_{j=1}^m c_j\\chi_{E_j}$ be a nonnegative simple measurable function ([[def-nonnegative-simple-measurable-function]]) on a measure space $(X,\\mathcal A,\\mu)$ with $c_j\\ge…\"\n\n  prop-basic-properties-of-the-nonnegative-simple-integral  [L2] -> def-integral-of-a-nonnegative-simple-function (searched: Definition)\n    quote: \"Let $s=\\sum_{j=1}^m c_j\\chi_{E_j}$ be a nonnegative simple measurable function ([[def-nonnegative-simple-measurable-function]]) on a measure space $(X,\\mathcal A,\\mu)$ with $c_j\\ge…\"\n\n  prop-the-nonnegative-integral-agrees-with-the-simple-integral  [L3] -> def-integral-of-a-nonnegative-simple-function (searched: Definition)\n    quote: \"Let $s=\\sum_{j=1}^m c_j\\chi_{E_j}$ be a nonnegative simple measurable function ([[def-nonnegative-simple-measurable-function]]) on a measure space $(X,\\mathcal A,\\mu)$ with $c_j\\ge…\"\n\n  thm-simple-indefinite-integral-is-a-measure  [L1] -> def-integral-over-a-measurable-set (searched: Definition)\n    quote: \"Let $f:X\\to[0,+\\infty]$ be measurable and let $E$ be measurable. Since [[prop-closure-properties-of-measurable-functions-used-by-the-integral]] implies that $f\\chi_E$ is measurable…\"\n\n  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure  [L1] -> def-integral-over-a-measurable-set (searched: Definition)\n    quote: \"Let $f:X\\to[0,+\\infty]$ be measurable and let $E$ be measurable. Since [[prop-closure-properties-of-measurable-functions-used-by-the-integral]] implies that $f\\chi_E$ is measurable…\"\n\n  thm-integration-against-a-density  [L1] -> def-measure-with-density (searched: Definition)\n    quote: \"Let $f:X\\to[0,+\\infty]$ be measurable. The measure with density $f$ relative to $\\mu$ is the measure $$f\\,d\\mu:\\mathcal A\\to[0,+\\infty],\\qquad (f\\,d\\mu)(A):=\\int_A f\\,d\\mu,$$ whose…\"\n\n  cor-integral-over-a-null-set-vanishes  [L2] -> def-integral-over-a-measurable-set (searched: Definition)\n    quote: \"Let $f:X\\to[0,+\\infty]$ be measurable and let $E$ be measurable. Since [[prop-closure-properties-of-measurable-functions-used-by-the-integral]] implies that $f\\chi_E$ is measurable…\"\n\n  thm-absolute-continuity-of-the-integral  [L2] -> def-integral-over-a-measurable-set (searched: Definition)\n    quote: \"Let $f:X\\to[0,+\\infty]$ be measurable and let $E$ be measurable. Since [[prop-closure-properties-of-measurable-functions-used-by-the-integral]] implies that $f\\chi_E$ is measurable…\"\n\n  thm-biproduct-data-characterisation-without-addition  [L1] -> def-biproduct (searched: Definition)\n    quote: \"A finite family $(A_i)_{i\\in I}$ in a category has a biproduct when both its coproduct and its product exist and the canonical morphism from the coproduct to the product is an isom…\"\n\n  prop-the-empty-biproduct-is-a-zero-object  [L1] -> def-biproduct (searched: Definition)\n    quote: \"A finite family $(A_i)_{i\\in I}$ in a category has a biproduct when both its coproduct and its product exist and the canonical morphism from the coproduct to the product is an isom…\"\n\n  prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism  [L1] -> def-biproduct (searched: Definition)\n    quote: \"A finite family $(A_i)_{i\\in I}$ in a category has a biproduct when both its coproduct and its product exist and the canonical morphism from the coproduct to the product is an isom…\"\n\n  thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids  [L1] -> thm-biproduct-data-characterisation-without-addition (searched: Statement)\n    quote: \"Let a category with zero morphisms contain a finite family $(A_i)_{i\\in I}$, an object $B$, injections $\\iota_i:A_i\\to B$, and projections $p_i:B\\to A_i$. Then $B$ is a biproduct o…\"\n\n  thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation  [L1] -> thm-biproduct-data-characterisation-without-addition (searched: Statement)\n    quote: \"Let a category with zero morphisms contain a finite family $(A_i)_{i\\in I}$, an object $B$, injections $\\iota_i:A_i\\to B$, and projections $p_i:B\\to A_i$. Then $B$ is a biproduct o…\"\n\n  fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts  [L1] -> def-biproduct (searched: Definition)\n    quote: \"A finite family $(A_i)_{i\\in I}$ in a category has a biproduct when both its coproduct and its product exist and the canonical morphism from the coproduct to the product is an isom…\"\n\n  ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules  [L1] -> thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules (searched: Statement)\n    quote: \"For every ring $R$, the functor $$K:\\mathbf{Mat}_R\\to R\\text{-}\\mathbf{Mod},\\qquad n\\mapsto R^n,$$ sending an $m\\times n$ matrix to the induced homomorphism $R^n\\to R^m$, is fully …\"\n\n  ex-additive-functors-out-of-the-matrix-category  [L2] -> thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules (searched: Statement)\n    quote: \"For every ring $R$, the functor $$K:\\mathbf{Mat}_R\\to R\\text{-}\\mathbf{Mod},\\qquad n\\mapsto R^n,$$ sending an $m\\times n$ matrix to the induced homomorphism $R^n\\to R^m$, is fully …\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": [
        "def-lebesgue-stieltjes-interval-set-function",
        "def-nonnegative-simple-measurable-function",
        "prop-closure-properties-of-measurable-functions-used-by-the-integral"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-stieltjes-interval-set-function-is-a-premeasure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-lebesgue-stieltjes-measures-have-zero-point-masses",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-well-definedness-of-the-simple-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-basic-properties-of-the-nonnegative-simple-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-nonnegative-integral-agrees-with-the-simple-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-simple-indefinite-integral-is-a-measure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-integration-against-a-density",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-integral-over-a-null-set-vanishes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-absolute-continuity-of-the-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-counting-measure-integral-is-a-series",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-beppo-levi-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-onan-scott-classification-of-finite-primitive-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-continued-fraction-convergent-recurrence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-continued-fraction-determinant-identity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-continued-fraction-complete-quotient-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-convergence-of-infinite-regular-continued-fractions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-rational-continued-fraction-termination",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-continued-fraction-error-bound",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-continued-fraction-algorithm-for-real-numbers",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-continued-fraction-convergents-are-best-approximations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-legendre-continued-fraction-criterion",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-periodic-continued-fraction-is-quadratic",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-quadratic-irrational-complete-quotients-are-finite-state",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-lagrange-periodic-continued-fraction-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-continued-fraction-of-square-root-two",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-continued-fraction-of-square-root-fourteen",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-golden-ratio-as-a-periodic-continued-fraction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-best-rational-approximations-to-pi",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-negative-real-continued-fraction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-radical-of-an-intersection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-vanishing-sets-detect-radicals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-noetherian-ring-has-finitely-many-minimal-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-dobinski-formula-for-bell-numbers",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-biproduct-data-characterisation-without-addition",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-the-empty-biproduct-is-a-zero-object",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-additive-categories-are-closed-under-passage-to-the-opposite",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-morphisms-between-finite-biproducts-correspond-to-matrices",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-matrix-category-over-a-ring-is-additive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-an-additive-functor-preserves-finite-biproducts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-an-additive-category-with-kernels-is-idempotent-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-abelian-groups-modules-and-vector-spaces-are-additive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-additive-functors-out-of-the-matrix-category",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-stieltjes-interval-set-function-is-finitely-additive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-existence-of-the-lebesgue-stieltjes-measure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-lebesgue-stieltjes-correspondence-with-distribution-functions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-lebesgue-stieltjes-measures-are-regular-on-r",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-cantor-measure-is-a-singular-atomless-probability-measure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-borel-measure-on-r-is-atomic-plus-atomless",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-increasing-function-defines-a-lebesgue-stieltjes-measure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-borel-measure-on-r-is-finite-on-compact-sets",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-atomless-borel-measure-on-r-has-a-density",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-identity-function-generates-lebesgue-measure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-one-jump-function-generates-a-dirac-mass-at-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-step-function-generates-a-finite-atomic-measure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-two-normalizations-give-the-same-lebesgue-stieltjes-measure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-interval-formulas-for-a-function-with-one-jump",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-cantor-measure-is-concentrated-on-the-cantor-set",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-arctangent-generates-a-borel-probability-measure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-right-continuity-is-necessary-for-lebesgue-stieltjes-measures",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-cantor-measure-is-atomless-but-not-absolutely-continuous",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-indicator-function-is-measurable-iff-its-set-is-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-generating-family-criterion-for-measurable-functions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-threshold-characterisations-of-real-and-extended-real-measurability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-continuous-functions-are-borel-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-monotone-real-functions-are-borel-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-coordinatewise-measurability-into-r-n",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-composition-with-borel-functions-preserves-measurability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-arithmetic-and-lattice-operations-preserve-measurability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nonnegative-measurable-functions-admit-increasing-simple-approximations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-measurable-functions-admit-dominated-simple-approximations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-ae-equality-preserves-measurability-on-complete-spaces",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-measurable-functions-have-base-measurable-representatives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-doob-dynkin-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-measurable-level-sets-do-not-imply-measurability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-absolute-value-measurable-does-not-imply-measurability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-ae-equality-with-a-measurable-function-does-not-imply-measurability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-composing-a-lebesgue-measurable-function-with-a-continuous-map-need-not-preserve-measurability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-indicator-functions-are-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-simple-function-and-its-canonical-representation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dirichlet-function-is-borel-and-nowhere-continuous",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-cantor-function-is-borel-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dyadic-simple-approximations-to-x-squared-on-zero-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-sigma-of-an-indicator-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-sigma-of-a-two-step-simple-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-lebesgue-measurable-function-that-is-not-borel",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-uncountable-supremum-of-indicators-need-not-be-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-continuous-preimage-can-break-lebesgue-measurability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-ae-equality-can-fail-on-an-incomplete-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-function-can-have-measurable-level-sets-without-being-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-closure-properties-of-measurable-functions-used-by-the-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-increasing-simple-approximation-of-a-nonnegative-measurable-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-order-and-scalar-rules-for-the-nonnegative-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-monotone-convergence-for-the-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-additivity-of-the-nonnegative-lebesgue-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-fatou-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-reverse-fatou-lemma-under-an-integrable-majorant",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nonnegative-integral-zero-iff-zero-almost-everywhere",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-finite-nonnegative-integral-implies-finite-almost-everywhere",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-almost-everywhere-monotone-convergence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-chebyshev-markov-inequality-for-the-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-linearity-of-the-lebesgue-integral-on-l-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-lebesgue-integral-respects-almost-everywhere-equality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-integral-triangle-inequality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dominated-convergence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-bounded-convergence-on-a-finite-measure-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-integrable-simple-functions-are-dense-in-l-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-indefinite-integral-of-an-integrable-function-is-countably-additive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-continuity-under-the-integral-sign",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-differentiation-under-the-integral-sign",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-jensens-integral-inequality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-monotone-convergence-without-monotonicity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-fatou-lemma-is-always-an-equality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-dominated-convergence-without-a-dominating-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-zero-integral-forces-everywhere-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-pointwise-limits-of-integrable-functions-are-integrable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-linearity-without-the-integrability-hypothesis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-jensens-inequality-on-an-infinite-measure-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-exponential-integral-by-monotone-truncation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-x-to-the-minus-one-half-is-unbounded-but-integrable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dirac-integral-is-evaluation-at-a-point",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-differentiating-the-laplace-sine-integral-under-the-integral-sign",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-jensen-yields-weighted-am-gm",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-fatou-can-be-strict-and-domination-can-fail-simultaneously",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-mass-escapes-to-infinity-under-pointwise-convergence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-uniform-convergence-does-not-force-integral-convergence-on-an-infinite-measure-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-decreasing-convergence-without-an-integrable-start-does-not-preserve-the-integral",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-linearity-can-fail-without-integrability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-jensen-can-fail-without-probability-normalization",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-harmonic-majorant-characterization-of-plane-subharmonicity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-c-two-characterization-of-plane-subharmonicity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-plane-subharmonic-functions-are-locally-integrable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-log-modulus-of-a-holomorphic-function-is-subharmonic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-modulus-powers-of-holomorphic-functions-are-subharmonic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-decreasing-limit-theorem-for-plane-subharmonic-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-upper-envelope-theorem-for-plane-subharmonic-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-maximum-principle-for-plane-subharmonic-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-gluing-lemma-for-plane-subharmonic-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-poisson-modification-preserves-subharmonicity-and-majorizes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-perron-family-is-nonempty-and-bounded",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-perron-envelope-is-harmonic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-barrier-characterization-of-regular-boundary-points",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-perron-solves-dirichlet-on-regular-plane-domains",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-exterior-disc-and-exterior-cone-points-are-regular",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-local-subharmonic-peak-function-globalizes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-weak-local-subharmonic-peak-function-implies-regularity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-boundary-point-whose-complementary-component-contains-another-point-is-regular",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-nonsingleton-boundary-component-is-regular",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-simply-connected-proper-plane-domains-are-regular",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-conformal-transport-of-plane-dirichlet-solutions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-basic-plane-subharmonic-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-poisson-modification-of-a-radial-quadratic-on-a-disc",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-perron-solution-on-an-annulus-with-radial-data",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-square-corner-has-an-explicit-barrier",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-bounded-plane-domain-has-a-dirichlet-solution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-perron-envelope-always-attains-the-boundary-data",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-subharmonic-function-can-attain-an-interior-maximum",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-distinct-minimal-normal-subgroups-centralize-one-another",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-socle-is-characteristic-and-admits-a-direct-product-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-unique-abelian-minimal-normal-subgroup-gives-affine-type",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-two-transitive-groups-have-affine-or-almost-simple-socle-type",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-socle-is-always-a-single-simple-group",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-primitive-group-has-a-unique-minimal-normal-subgroup",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-onan-scott-is-the-classification-of-finite-simple-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-affine-type-agl-one-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-almost-simple-type-from-an-alternating-group",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-simple-diagonal-action",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-product-action-wreath-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-two-regular-minimal-normal-subgroups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-socle-of-a-finite-solvable-primitive-group",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-transitive-does-not-force-minimal-normal-subgroups-transitive",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-cayley-trees-are-zero-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-thin-quadrilaterals-in-a-hyperbolic-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-morse-stability-of-quasi-geodesics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hyperbolic-group-definition-is-independent-of-finite-generating-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-finite-and-free-groups-are-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hyperbolic-groups-admit-finite-dehn-presentations",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-hyperbolic-groups-have-solvable-word-problem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-linear-isoperimetric-characterisation-of-hyperbolic-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-same-delta-works-after-every-change-of-generating-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-abelian-group-is-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-boundary-definition-needs-no-properness-or-equivalence-check",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-tree-is-zero-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-hyperbolic-plane-is-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-free-groups-and-their-cantor-boundaries",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-surface-groups-as-hyperbolic-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-small-cancellation-hyperbolic-group",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-z-squared-is-not-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-product-of-two-infinite-groups-need-not-be-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-continued-fraction-convergents-are-reduced",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-normalized-finite-continued-fraction-uniqueness",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-two-finite-continued-fractions-for-a-rational",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-continued-fraction-and-extended-euclid",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-an-excellent-approximation-at-the-legendre-boundary",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-radical-membership-by-a-power",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-is-an-ideal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-of-a-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-commutes-with-quotient-correspondence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-commutes-with-localisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-reduced-quotient-by-the-nilradical",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-prime-containing-a-multiplicative-set-disjoint-ideal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-prime-containing-an-ideal-avoiding-an-element",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-intersection-proof-forward-inclusion",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-intersection-proof-separating-prime",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-radical-as-intersection-of-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-nilradical-as-intersection-of-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-ring-reduced-iff-zero-is-an-intersection-of-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-vanishing-set-reverses-inclusions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-vanishing-set-of-an-arbitrary-sum",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-vanishing-set-of-a-finite-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-vanishing-set-identities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-distinguished-subset-identities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-distinguished-subset-cover-detects-radical",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-spectrum-map-respects-composition-and-identities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-spectrum-map-preimage-of-vanishing-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-prime-spectrum-map-by-contraction",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-primes-of-a-quotient-are-primes-over-the-kernel",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-prime-spectrum-of-a-quotient-bijection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-primes-of-a-localisation-avoid-the-multiplicative-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-primes-of-a-prime-local-ring",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-primes-of-a-principal-localisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-prime-spectrum-of-a-localisation-bijection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-prime-spectrum-insensitive-to-nilpotents",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-minimal-prime-over-an-ideal-exists",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-noetherian-minimal-primes-induction-split",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-nilradical-of-a-noetherian-ring-is-nilpotent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-radical-ideal-has-finitely-many-minimal-primes-noetherian",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-height-equals-local-dimension",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-dimension-of-a-quotient-as-chains-above-an-ideal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-prime-sets-of-a-field-and-the-integers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-prime-spectrum-set-of-a-product-ring",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-prime-spectrum-set-of-dual-numbers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-prime-ideals-of-a-node",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-distinguished-subset-and-localisation-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-radical-intersection-computation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-radical-of-a-product-and-intersection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-separating-prime-for-a-missing-radical-element",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-of-a-zero-ring-empty",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-primes-in-a-prime-localisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-noetherian-nilradical-common-exponent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-nilradical-need-not-be-nilpotent-nonnoetherian",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-odd-degree-real-polynomial-has-a-real-root",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-irreducible-real-polynomial-has-degree-one-or-even-degree",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-algebraically-closed-splitting-and-finite-extension-criteria",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-complex-numbers-are-algebraically-closed",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-every-complex-polynomial-splits-into-linear-factors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-irreducible-real-polynomials-have-degree-one-or-two",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-cubed-minus-two-over-r-and-c",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-four-plus-one-factors-into-two-real-quadratics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-fifth-minus-x-minus-one-has-a-real-root",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-real-polynomial-has-a-real-root",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-real-numbers-are-algebraically-closed",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-irreducible-real-polynomial-has-degree-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-set-partitions-of-a-finite-set-are-finite",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-stirling-second-kind-recurrence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-bell-number-binomial-recurrence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-stirling-second-kind-inclusion-exclusion-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-powers-expand-in-the-falling-factorial-basis",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-signless-first-kind-recurrence-and-rising-factorial-expansion",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-signed-stirling-inversion",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-labelled-symbolic-method-rules-for-exponential-generating-functions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-vertical-egfs-for-the-stirling-triangles",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-exponential-formula-for-set-partitions-and-bell-numbers",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-standard-specializations-of-the-labelled-symbolic-method",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-touchards-congruence-for-bell-numbers",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-bell-numbers-count-ordered-set-partitions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-stirling-second-kind-counts-surjections",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-exponential-generating-functions-multiply-without-labelled-product-hypothesis",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-set-partitions-with-the-same-block-sizes-can-be-distinct",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-the-second-kind-inclusion-exclusion-formula-does-not-count-permutations-by-cycles",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-maximal-pattern-pure-blockades-force-many-blocks",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-pure-blockade-is-complete-or-anticomplete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-blockade-order-never-matters-for-x-sparsity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-weak-sparsity-does-not-imply-directional-sparsity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-comb-fails-when-a-tooth-sees-a-foreign-block",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-holomorphic-dependence-of-slice-laurent-coefficients",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-hartogs-figure-extension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-hartogs-figure-obstruction-to-domain-of-holomorphy",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-removability-of-a-puncture-in-several-complex-variables",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-no-isolated-holomorphic-singularities-in-several-complex-variables",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-bounded-punctured-slice-has-holomorphic-parameter-extension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-riemann-extension-across-a-coordinate-hyperplane",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-local-boundedness-of-separately-holomorphic-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-hartogs-separate-holomorphy",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-local-hartogs-extension-across-polydisc-shells",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-propagation-and-gluing-of-hartogs-extensions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-hartogs-extension-across-compact-holes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-punctured-domain-functions-must-be-unbounded",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-one-variable-isolated-singularity-theory-has-a-several-variable-analogue",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-domain-in-c-two-is-a-domain-of-holomorphy",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-separate-holomorphy-can-fail-to-imply-local-boundedness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-hartogs-figure-in-modulus-coordinates",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-z-one-over-one-minus-z-one-z-two-extends-across-the-punctured-bidisc",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-bidisc-minus-the-origin-is-not-a-domain-of-holomorphy",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-one-over-z-has-a-nonremovable-puncture-in-one-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-an-additive-functor-preserves-zero-morphisms",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-opposite-of-a-preadditive-category-is-preadditive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-a-small-product-of-preadditive-categories-is-preadditive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-additive-functors-and-natural-transformations-form-a-preadditive-category",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-biproduct-of-morphisms-is-the-diagonal-matrix",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-an-infinite-coproduct-need-not-agree-with-the-infinite-product",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-a-functor-between-additive-categories-preserving-finite-products-is-additive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-any-adjoint-between-additive-categories-is-additive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-an-additive-functor-preserves-split-biproduct-diagrams",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-hom-functors-on-a-preadditive-category-are-left-exact",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-covariant-hom-functor-on-an-additive-category-need-not-preserve-cokernels",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-a-functor-preserving-zero-morphisms-is-additive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-a-preadditive-category-with-a-zero-object-has-binary-biproducts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-idempotent-splits",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-biproduct-of-two-abelian-groups-computed-as-a-matrix-calculus",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-pointed-sets-are-not-additive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-commutative-monoids-are-semiadditive-and-not-additive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-preadditive-category-with-two-objects-and-a-nonzero-hom-group",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-lebesgue-stieltjes-interval-set-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-nonnegative-simple-measurable-function",
      "scope": "run",
      "owner": "a"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-onan-scott-classification-of-finite-primitive-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-of-an-intersection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-vanishing-sets-detect-radicals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-noetherian-ring-has-finitely-many-minimal-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-distinct-minimal-normal-subgroups-centralize-one-another",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-socle-is-characteristic-and-admits-a-direct-product-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-unique-abelian-minimal-normal-subgroup-gives-affine-type",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-two-transitive-groups-have-affine-or-almost-simple-socle-type",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-socle-is-always-a-single-simple-group",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-primitive-group-has-a-unique-minimal-normal-subgroup",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-onan-scott-is-the-classification-of-finite-simple-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-affine-type-agl-one-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-almost-simple-type-from-an-alternating-group",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-simple-diagonal-action",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-product-action-wreath-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-two-regular-minimal-normal-subgroups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-socle-of-a-finite-solvable-primitive-group",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-transitive-does-not-force-minimal-normal-subgroups-transitive",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-cayley-trees-are-zero-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-thin-quadrilaterals-in-a-hyperbolic-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-morse-stability-of-quasi-geodesics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hyperbolic-group-definition-is-independent-of-finite-generating-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-finite-and-free-groups-are-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hyperbolic-groups-admit-finite-dehn-presentations",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-hyperbolic-groups-have-solvable-word-problem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-linear-isoperimetric-characterisation-of-hyperbolic-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-same-delta-works-after-every-change-of-generating-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-abelian-group-is-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-boundary-definition-needs-no-properness-or-equivalence-check",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-tree-is-zero-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-hyperbolic-plane-is-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-free-groups-and-their-cantor-boundaries",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-surface-groups-as-hyperbolic-groups",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-small-cancellation-hyperbolic-group",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-z-squared-is-not-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-product-of-two-infinite-groups-need-not-be-hyperbolic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-membership-by-a-power",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-is-an-ideal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-of-a-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-commutes-with-quotient-correspondence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-commutes-with-localisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-reduced-quotient-by-the-nilradical",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-prime-containing-a-multiplicative-set-disjoint-ideal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-prime-containing-an-ideal-avoiding-an-element",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-intersection-proof-forward-inclusion",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-radical-intersection-proof-separating-prime",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-radical-as-intersection-of-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-nilradical-as-intersection-of-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-ring-reduced-iff-zero-is-an-intersection-of-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-vanishing-set-reverses-inclusions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-vanishing-set-of-an-arbitrary-sum",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-vanishing-set-of-a-finite-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-vanishing-set-identities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-distinguished-subset-identities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-distinguished-subset-cover-detects-radical",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-spectrum-map-respects-composition-and-identities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-spectrum-map-preimage-of-vanishing-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-prime-spectrum-map-by-contraction",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-primes-of-a-quotient-are-primes-over-the-kernel",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-prime-spectrum-of-a-quotient-bijection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-primes-of-a-localisation-avoid-the-multiplicative-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-primes-of-a-prime-local-ring",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-primes-of-a-principal-localisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-prime-spectrum-of-a-localisation-bijection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-prime-spectrum-insensitive-to-nilpotents",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-minimal-prime-over-an-ideal-exists",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-noetherian-minimal-primes-induction-split",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-nilradical-of-a-noetherian-ring-is-nilpotent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-radical-ideal-has-finitely-many-minimal-primes-noetherian",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-height-equals-local-dimension",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-dimension-of-a-quotient-as-chains-above-an-ideal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-prime-sets-of-a-field-and-the-integers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-prime-spectrum-set-of-a-product-ring",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-prime-spectrum-set-of-dual-numbers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-prime-ideals-of-a-node",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-distinguished-subset-and-localisation-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-radical-intersection-computation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-radical-of-a-product-and-intersection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-separating-prime-for-a-missing-radical-element",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-of-a-zero-ring-empty",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-primes-in-a-prime-localisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-noetherian-nilradical-common-exponent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-nilradical-need-not-be-nilpotent-nonnoetherian",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-odd-degree-real-polynomial-has-a-real-root",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-irreducible-real-polynomial-has-degree-one-or-even-degree",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-algebraically-closed-splitting-and-finite-extension-criteria",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-complex-numbers-are-algebraically-closed",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-every-complex-polynomial-splits-into-linear-factors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-irreducible-real-polynomials-have-degree-one-or-two",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-cubed-minus-two-over-r-and-c",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-four-plus-one-factors-into-two-real-quadratics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-fifth-minus-x-minus-one-has-a-real-root",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-real-polynomial-has-a-real-root",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-real-numbers-are-algebraically-closed",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-irreducible-real-polynomial-has-degree-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 — group **c**, run `frontier-20`

You are the group Alpha for batches **4**, **6**, **7**: 4 A/B pair(s), 8 page(s), 145 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-20-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-20-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `socles-and-the-onan-scott-landscape` | A | group-theory | 71.007 | `blocks-primitivity-and-multiple-transitivity-examples` |
| 4 | `socles-and-the-onan-scott-landscape-examples` | B | group-theory | 71.008 | `socles-and-the-onan-scott-landscape` |
| 4 | `hyperbolic-spaces-and-hyperbolic-groups` | A | group-theory | 302.005 | `geometric-actions-svarc-milnor-and-growth-examples`, `sylow-theorems-and-nilpotent-groups` |
| 4 | `hyperbolic-spaces-and-hyperbolic-groups-examples` | B | group-theory | 302.006 | `hyperbolic-spaces-and-hyperbolic-groups` |
| 6 | `prime-spectra-and-radicals` | A | commutative-algebra | 111.005 | `localisation-of-modules-and-support-examples`, `algebraic-extensions-degree-and-finite-fields` |
| 6 | `prime-spectra-and-radicals-examples` | B | commutative-algebra | 111.006 | `prime-spectra-and-radicals` |
| 7 | `the-fundamental-theorem-of-algebra` | A | abstract-algebra | 139 | `solvability-by-radicals-and-kummer-theory`, `sylow-theorems-and-nilpotent-groups`, `continuity-ivt-evt-and-uniform-continuity` |
| 7 | `the-fundamental-theorem-of-algebra-examples` | B | abstract-algebra | 140 | `the-fundamental-theorem-of-algebra` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `socles-and-the-onan-scott-landscape` — Socles and the Onan Scott Landscape (21 item(s))

- `def-minimal-normal-subgroup-and-socle` · definition — Minimal normal subgroups and the socle of a finite group
- `lem-distinct-minimal-normal-subgroups-centralize-one-another` · lemma — Distinct minimal normal subgroups centralize one another
- `lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple` · lemma — Minimal normal subgroups of finite groups are characteristically simple
- `thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups` · theorem — Finite characteristically simple groups are direct products of isomorphic simple groups
- `prop-socle-is-characteristic-and-admits-a-direct-product-decomposition` · proposition — The socle is characteristic and decomposes as a direct product of minimal normal subgroups
- `thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive` · theorem — Minimal normal subgroups of faithful primitive groups are transitive
- `lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular` · lemma — Two distinct minimal normal subgroups of a primitive group are regular
- `cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups` · corollary — A finite primitive group has at most two minimal normal subgroups
- `prop-unique-abelian-minimal-normal-subgroup-gives-affine-type` · proposition — A unique abelian minimal normal subgroup gives affine type
- `def-almost-simple-finite-group` · definition — Almost simple finite groups
- `def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types` · definition — Affine, almost simple, diagonal, product action, and twisted wreath types
- `lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses` · lemma — Product-action wreath products are primitive under the standard hypotheses
- `rem-onan-scott-eight-type-and-five-type-conventions` · remark — This page uses the coarse five-type O'Nan-Scott convention
- `thm-onan-scott-classification-of-finite-primitive-groups` · theorem — The O'Nan-Scott classification of finite primitive groups
- `rem-cfsg-refinements-of-the-onan-scott-reduction` · remark — CFSG enters later refinements of the O'Nan-Scott reduction
- `prop-two-transitive-groups-have-affine-or-almost-simple-socle-type` · proposition — Finite 2-transitive groups have affine or almost simple socle type
- `rem-algorithmic-role-of-onan-scott` · remark — The O'Nan-Scott theorem reduces finite primitive-group questions to socle types
- `fs-the-socle-is-always-a-single-simple-group` · false-statement — FALSE: the socle is always a single simple group
- `fs-every-primitive-group-has-a-unique-minimal-normal-subgroup` · false-statement — FALSE: every primitive group has a unique minimal normal subgroup
- `fs-onan-scott-is-the-classification-of-finite-simple-groups` · false-statement — FALSE: the O'Nan-Scott theorem is the classification of finite simple groups
- `fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups` · false-statement — FALSE: the O'Nan-Scott theorem requires the classification of finite simple groups

### `socles-and-the-onan-scott-landscape-examples` — Socles and the Onan Scott Landscape — Examples (7 item(s))

- `ex-affine-type-agl-one-p` · example — The natural action of AGL(1,p) is affine type
- `ex-almost-simple-type-from-an-alternating-group` · example — The natural action of A_n is almost simple type
- `ex-simple-diagonal-action` · example — A simple diagonal action
- `ex-product-action-wreath-product` · example — A primitive product-action wreath product
- `ex-two-regular-minimal-normal-subgroups` · example — A primitive group with two regular minimal normal subgroups
- `ex-socle-of-a-finite-solvable-primitive-group` · example — The socle of a finite solvable primitive group is elementary abelian and regular
- `cex-transitive-does-not-force-minimal-normal-subgroups-transitive` · counterexample — A transitive imprimitive action can have a nontransitive minimal normal subgroup

### `hyperbolic-spaces-and-hyperbolic-groups` — Hyperbolic Spaces and Hyperbolic Groups (31 item(s))

- `def-geodesic-segment-triangle-and-geodesic-metric-space` · definition — Geodesic segments, geodesic triangles, and geodesic metric spaces
- `def-delta-slim-geodesic-triangle-and-hyperbolic-space` · definition — Delta-slim triangles and hyperbolic spaces
- `prop-cayley-trees-are-zero-hyperbolic` · proposition — Cayley trees are 0-hyperbolic
- `def-gromov-product` · definition — The Gromov product based at a point
- `thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants` · theorem — Slim triangles, the Gromov product, and the four-point condition are equivalent up to constants
- `lem-thin-quadrilaterals-in-a-hyperbolic-space` · lemma — Hyperbolic spaces have thin geodesic quadrilaterals
- `thm-morse-stability-of-quasi-geodesics` · theorem — Morse stability of quasi-geodesics
- `thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces` · theorem — Hyperbolicity is a quasi-isometry invariant of geodesic spaces
- `def-hyperbolic-group` · definition — Hyperbolic groups
- `thm-hyperbolic-group-definition-is-independent-of-finite-generating-set` · theorem — Hyperbolicity of a finitely generated group is independent of the finite generating set
- `prop-finite-and-free-groups-are-hyperbolic` · proposition — Finite groups and free groups are hyperbolic
- `prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic` · proposition — Free abelian groups of rank at least two are not hyperbolic
- `thm-hyperbolic-groups-admit-finite-dehn-presentations` · theorem — Hyperbolic groups admit finite Dehn presentations
- `cor-hyperbolic-groups-have-solvable-word-problem` · corollary — Hyperbolic groups have solvable word problem
- `thm-linear-isoperimetric-characterisation-of-hyperbolic-groups` · theorem — Linear isoperimetric characterisation of hyperbolic groups
- `thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups` · theorem — Finite C'(1/6) presentations define hyperbolic groups
- `thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted` · theorem — Infinite-order elements of hyperbolic groups are undistorted
- `thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic` · theorem — The centralizer of an infinite-order element in a hyperbolic group is virtually cyclic
- `cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic` · corollary — Abelian subgroups of hyperbolic groups are virtually cyclic
- `thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups` · theorem — Finite subgroups of a hyperbolic group have uniformly bounded order
- `def-elementary-and-non-elementary-hyperbolic-groups` · definition — Elementary and non-elementary hyperbolic groups
- `thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup` · theorem — Non-elementary hyperbolic groups contain a rank-two free subgroup
- `def-gromov-boundary-by-asymptotic-sequences` · definition — The Gromov boundary via asymptotic sequences
- `lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences` · lemma — Asymptoticity of Gromov sequences is an equivalence relation
- `def-boundary-topology-by-gromov-products` · definition — The boundary topology defined by Gromov products
- `thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant` · theorem — The boundary topology is well defined and quasi-isometry invariant
- `fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup` · false-statement — FALSE: a hyperbolic group is just a group with a hyperbolic-plane subgroup
- `fs-the-same-delta-works-after-every-change-of-generating-set` · false-statement — FALSE: the same delta works after every finite change of generating set
- `fs-every-abelian-group-is-hyperbolic` · false-statement — FALSE: every abelian group is hyperbolic
- `fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics` · false-statement — FALSE: all quasi-geodesics in all metric spaces stay uniformly close to geodesics
- `fs-the-boundary-definition-needs-no-properness-or-equivalence-check` · false-statement — FALSE: the Gromov boundary definition needs no properness or equivalence check

### `hyperbolic-spaces-and-hyperbolic-groups-examples` — Hyperbolic Spaces and Hyperbolic Groups — Examples (7 item(s))

- `ex-a-tree-is-zero-hyperbolic` · example — Every tree is 0-hyperbolic
- `ex-the-hyperbolic-plane-is-hyperbolic` · example — The hyperbolic plane is hyperbolic
- `ex-free-groups-and-their-cantor-boundaries` · example — Free groups have Cantor-set boundaries
- `ex-surface-groups-as-hyperbolic-groups` · example — Closed surface groups are hyperbolic
- `ex-a-small-cancellation-hyperbolic-group` · example — A small-cancellation presentation gives a hyperbolic group
- `cex-z-squared-is-not-hyperbolic` · counterexample — Z^2 is not hyperbolic
- `cex-product-of-two-infinite-groups-need-not-be-hyperbolic` · counterexample — A product of two infinite groups need not be hyperbolic

### `prime-spectra-and-radicals` — Prime Spectra and Radicals (44 item(s))

- `def-radical-of-an-ideal` · definition — The radical of an ideal
- `lem-radical-membership-by-a-power` · lemma — Radical membership via positive powers
- `lem-radical-is-an-ideal` · lemma — The radical of an ideal is an ideal
- `lem-radical-of-an-intersection` · lemma — The radical of a finite intersection
- `lem-radical-of-a-product` · lemma — The radical of a product of ideals
- `def-nilradical-and-reduced-ring` · definition — The nilradical and reduced rings
- `lem-radical-commutes-with-quotient-correspondence` · lemma — Radicals and quotient correspondence
- `lem-radical-commutes-with-localisation` · lemma — Radicals commute with localization
- `cor-reduced-quotient-by-the-nilradical` · corollary — The reduced quotient by the nilradical
- `lem-prime-containing-a-multiplicative-set-disjoint-ideal` · lemma — A prime containing an ideal and avoiding a multiplicative set
- `cor-prime-containing-an-ideal-avoiding-an-element` · corollary — Separating an element from an ideal by a prime
- `lem-radical-intersection-proof-forward-inclusion` · lemma — Primes containing an ideal contain its radical
- `lem-radical-intersection-proof-separating-prime` · lemma — A separating prime for an element outside a radical
- `thm-radical-as-intersection-of-primes` · theorem — The radical of an ideal is the intersection of the prime ideals containing it
- `cor-nilradical-as-intersection-of-primes` · corollary — The nilradical is the intersection of all prime ideals
- `cor-ring-reduced-iff-zero-is-an-intersection-of-primes` · corollary — A ring is reduced exactly when zero is an intersection of primes
- `def-prime-spectrum-and-vanishing-sets` · definition — The prime spectrum and vanishing sets
- `def-krull-dimension-of-a-ring` · definition — Krull dimension of a nonzero ring
- `def-height-of-a-prime-ideal` · definition — The height of a prime ideal
- `lem-vanishing-set-reverses-inclusions` · lemma — Vanishing sets reverse inclusions
- `lem-vanishing-set-of-an-arbitrary-sum` · lemma — Vanishing sets of arbitrary sums
- `lem-vanishing-set-of-a-finite-product` · lemma — Vanishing sets of finite products
- `lem-vanishing-set-identities` · lemma — Vanishing-set identities
- `lem-vanishing-sets-detect-radicals` · lemma — Vanishing sets detect radicals
- `def-principal-distinguished-subset-of-spectrum` · definition — Principal distinguished subsets of the prime spectrum
- `lem-distinguished-subset-identities` · lemma — Distinguished-subset identities
- `lem-distinguished-subset-cover-detects-radical` · lemma — Distinguished-subset covers detect radicals
- `lem-spectrum-map-respects-composition-and-identities` · lemma — The spectrum map respects composition and identities
- `lem-spectrum-map-preimage-of-vanishing-set` · lemma — The spectrum map pulls back vanishing sets
- `thm-prime-spectrum-map-by-contraction` · theorem — A ring map induces a contraction map on prime spectra
- `lem-primes-of-a-quotient-are-primes-over-the-kernel` · lemma — Primes of a quotient lie over the kernel
- `thm-prime-spectrum-of-a-quotient-bijection` · theorem — Prime ideals of a quotient ring are exactly the prime ideals containing the ideal
- `lem-primes-of-a-localisation-avoid-the-multiplicative-set` · lemma — Primes of a localization avoid the denominator set
- `cor-primes-of-a-prime-local-ring` · corollary — Primes of a localization at a prime
- `cor-primes-of-a-principal-localisation` · corollary — Primes of a principal localization
- `thm-prime-spectrum-of-a-localisation-bijection` · theorem — Prime ideals of a localization are exactly the primes disjoint from the denominator set
- `cor-prime-spectrum-insensitive-to-nilpotents` · corollary — Passing to the reduced quotient does not change the prime spectrum
- `lem-minimal-prime-over-an-ideal-exists` · lemma — Minimal primes over a proper ideal exist
- `lem-noetherian-minimal-primes-induction-split` · lemma — The Noetherian minimal-prime induction split
- `thm-nilradical-of-a-noetherian-ring-is-nilpotent` · theorem — The nilradical of a Noetherian ring is nilpotent
- `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian` · corollary — A radical ideal in a Noetherian ring is a finite intersection of minimal primes
- `thm-noetherian-ring-has-finitely-many-minimal-primes` · theorem — A Noetherian ring has finitely many minimal prime ideals
- `lem-height-equals-local-dimension` · lemma — Height equals local dimension
- `cor-dimension-of-a-quotient-as-chains-above-an-ideal` · corollary — Dimension of a quotient via chains above an ideal

### `prime-spectra-and-radicals-examples` — Prime Spectra and Radicals - Examples (12 item(s))

- `ex-prime-sets-of-a-field-and-the-integers` · example — The prime ideals of a field and of the integers
- `ex-prime-spectrum-set-of-a-product-ring` · example — Every prime ideal of a product ring comes from one factor
- `ex-prime-spectrum-set-of-dual-numbers` · example — Dual numbers and their reduced quotient have the same prime set
- `ex-prime-ideals-of-a-node` · example — Minimal and maximal primes of the node ring
- `ex-distinguished-subset-and-localisation-primes` · example — The distinguished subset D(x) matches the primes of the localization at x
- `ex-radical-intersection-computation` · example — Computing sqrt((x^2,xy)) from its containing primes
- `ex-radical-of-a-product-and-intersection` · example — A radical of a product and intersection computation
- `ex-separating-prime-for-a-missing-radical-element` · example — A separating prime for an element outside a radical
- `ex-spectrum-of-a-zero-ring-empty` · example — The zero ring has empty prime spectrum
- `ex-primes-in-a-prime-localisation` · example — Primes inside a localization at a prime
- `ex-noetherian-nilradical-common-exponent` · example — A common nilpotence exponent in a Noetherian quotient
- `ex-nilradical-need-not-be-nilpotent-nonnoetherian` · example — A non-Noetherian nilradical need not be nilpotent

### `the-fundamental-theorem-of-algebra` — The Fundamental Theorem of Algebra (13 item(s))

- `thm-odd-degree-real-polynomial-has-a-real-root` · theorem — Every odd-degree real polynomial has a real root
- `cor-irreducible-real-polynomial-has-degree-one-or-even-degree` · corollary — An irreducible polynomial over $\mathbb R$ has degree $1$ or an even degree
- `lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra` · lemma — To prove the fundamental theorem of algebra, it suffices to split every real polynomial over $\mathbb C$
- `lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root` · lemma — A quadratic extension in characteristic not $2$ is obtained by adjoining a square root
- `prop-algebraically-closed-splitting-and-finite-extension-criteria` · proposition — A field is algebraically closed exactly when every nonconstant polynomial splits, equivalently when it has no nontrivial finite extension
- `thm-the-complex-numbers-are-algebraically-closed` · theorem — The complex numbers are algebraically closed
- `cor-every-complex-polynomial-splits-into-linear-factors` · corollary — Every nonconstant polynomial in $\mathbb C[x]$ splits into linear factors
- `cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals` · corollary — The complex numbers form an algebraic closure of $\mathbb R$
- `cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q` · corollary — The algebraic numbers in $\mathbb C$ form an algebraic closure of $\mathbb Q$
- `lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs` · lemma — A nonreal root of a real polynomial comes with its complex conjugate
- `cor-irreducible-real-polynomials-have-degree-one-or-two` · corollary — An irreducible polynomial in $\mathbb R[x]$ has degree $1$ or $2$
- `cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors` · corollary — Every real polynomial factors into linear and irreducible quadratic factors
- `thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity` · theorem — A complex polynomial of degree $n$ has exactly $n$ roots counted with multiplicity

### `the-fundamental-theorem-of-algebra-examples` — The Fundamental Theorem of Algebra: Examples and Counterexamples (10 item(s))

- `ex-x-cubed-minus-two-over-r-and-c` · example — $x^3-2$ over $\mathbb R$ and over $\mathbb C$
- `ex-x-four-plus-one-factors-into-two-real-quadratics` · example — $x^4+1$ factors over $\mathbb R$ into two irreducible quadratics
- `ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c` · example — $x^2+1$ is irreducible over $\mathbb R$ and split over $\mathbb C$
- `ex-x-fifth-minus-x-minus-one-has-a-real-root` · example — $x^5-x-1$ has a real root
- `ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals` · example — $x^5-6x+3$ over $\mathbb Q$ is not solvable by radicals
- `fs-every-real-polynomial-has-a-real-root` · false-statement — FALSE: every polynomial with real coefficients has a real root
- `fs-the-real-numbers-are-algebraically-closed` · false-statement — FALSE: the real numbers are algebraically closed
- `fs-every-irreducible-real-polynomial-has-degree-one` · false-statement — FALSE: every irreducible polynomial in $\mathbb R[x]$ has degree $1$
- `fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals` · false-statement — FALSE: every irreducible quintic over $\mathbb Q$ is insoluble by radicals
- `rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra` · remark — The Artin and minimum-modulus proofs of the fundamental theorem of algebra use different machinery

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
`research/frontier-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-20`

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
