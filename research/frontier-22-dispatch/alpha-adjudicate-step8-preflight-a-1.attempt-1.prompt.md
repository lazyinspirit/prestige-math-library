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
group work, `research/frontier-22-alpha-groups.json` is the assignment: it permits at
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

run: frontier-22
role: alpha-adjudicate
label: step8-preflight-a-1

# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-22",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "a",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-use-not-supported [thm-lasker-noether-primary-decomposition]: L1 is not cited by declared use 1.1",
      "output": "proof-contract: 113 error(s), 1 warning(s), 332/332 item(s) checked\nERROR citation-use-not-supported [thm-lasker-noether-primary-decomposition]: L1 is not cited by declared use 1.1\nERROR citation-use-unmapped [thm-lasker-noether-primary-decomposition]: L1 is cited by 2.1 but the contract omits it\nERROR citation-use-not-supported [thm-lasker-noether-primary-decomposition]: L2 is not cited by declared use 1.1\nERROR citation-use-unmapped [thm-lasker-noether-primary-decomposition]: L2 is cited by 2.1 but the contract omits it\nERROR citation-use-not-supported [thm-lasker-noether-primary-decomposition]: L3 is not cited by declared use 3.1\nERROR citation-use-unmapped [thm-lasker-noether-primary-decomposition]: L3 is cited by 4.1 but the contract omits it\nERROR citation-use-not-supported [thm-lasker-noether-primary-decomposition]: L4 is not cited by declared use 4.1\nERROR citation-use-unmapped [thm-lasker-noether-primary-decomposition]: L4 is cited by 5.1 but the contract omits it\nERROR citation-use-not-supported [thm-lasker-noether-primary-decomposition]: L5 is not cited by declared use 4.1\nERROR citation-use-unmapped [thm-lasker-noether-primary-decomposition]: L5 is cited by 5.1 but the contract omits it\nERROR step-entry-input-omitted [thm-lasker-noether-primary-decomposition]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-omitted [thm-lasker-noether-primary-decomposition]: step-2-1 omits L2, cited by 2.1\nERROR step-entry-input-omitted [thm-lasker-noether-primary-decomposition]: step-4-1 omits L3, cited by 4.1\nERROR step-entry-input-omitted [thm-lasker-noether-primary-decomposition]: step-4-1 omits 2.1, cited by 4.1\nERROR step-entry-input-omitted [thm-lasker-noether-primary-decomposition]: step-5-1 omits 1.1, cited by 5.1\nERROR step-entry-input-omitted [thm-lasker-noether-primary-decomposition]: step-5-1 omits L4, cited by 5.1\nERROR step-entry-input-omitted [thm-lasker-noether-primary-decomposition]: step-5-1 omits L5, cited by 5.1\nERROR step-unmapped [thm-lasker-noether-primary-decomposition]: 6.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [thm-first-uniqueness-theorem-primary-decomposition]: L1 quote does not occur in lem-associated-primes-from-a-minimal-primary-decomposition's Statement\nERROR citation-quote-mismatch [thm-isolated-primary-components-are-unique]: L3 quote does not occur in lem-contraction-recovers-primary-component-after-localising-away-from-radical's Statement\nERROR citation-quote-mismatch [thm-second-uniqueness-theorem-primary-decomposition]: L3 quote does not occur in lem-contraction-recovers-primary-component-after-localising-away-from-radical's Statement\nERROR citation-quote-mismatch [cor-radical-ideals-as-intersections-of-minimal-primes-noetherian]: L1 quote does not occur in thm-lasker-noether-primary-decomposition's Statement\nERROR citation-use-not-supported [ex-annihilator-colon-ideals-in-a-cyclic-module]: L1 is not cited by declared use 3.1\nERROR citation-use-unmapped [ex-annihilator-colon-ideals-in-a-cyclic-module]: L1 is cited by 4.1 but the contract omits it\nERROR step-unmapped [ex-annihilator-colon-ideals-in-a-cyclic-module]: 4.1 has no derivation or routine-step contract\nERROR citation-use-not-supported [ex-redundant-primary-component-deletion]: L1 is not cited by declared use 1.1\nERROR citation-use-unmapped [ex-redundant-primary-component-deletion]: L1 is cited by 2.1 but the contract omits it\nERROR citation-use-not-supported [ex-redundant-primary-component-deletion]: L2 is not cited by declared use 2.1\nERROR citation-use-unmapped [ex-redundant-primary-component-deletion]: L2 is cited by 3.1 but the contract omits it\nERROR step-entry-input-omitted [ex-redundant-primary-component-deletion]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-step-missing [ex-redundant-primary-component-deletion]: derivations step-2-2 names missing 2.2\nERROR step-entry-input-omitted [ex-redundant-primary-component-deletion]: step-3-1 omits L2, cited by 3.1\nERROR step-entry-input-omitted [ex-redundant-primary-component-deletion]: step-3-1 omits 1.1, cited by 3.1\nERROR step-entry-input-step-missing [ex-redundant-primary-component-deletion]: step-3-1 names missing step 2.2\nERROR step-unmapped [ex-redundant-primary-component-deletion]: 3.2 has no derivation or routine-step contract\nERROR step-unmapped [ex-redundant-primary-component-deletion]: 4.1 has no derivation or routine-step contract\nERROR citation-use-not-supported [ex-embedded-component-varies-but-radical-does-not]: L1 is not cited by declared use 2.1\nERROR citation-use-unmapped [ex-embedded-component-varies-but-radical-does-not]: L1 is cited by 3.1 but the contract omits it\nERROR citation-use-not-supported [ex-embedded-component-varies-but-radical-does-not]: L2 is not cited by declared use 3.1\nERROR citation-use-unmapped [ex-embedded-component-varies-but-radical-does-not]: L2 is cited by 3.2 but the contract omits it\nERROR step-entry-input-omitted [ex-embedded-component-varies-but-radical-does-not]: step-3-1 omits L1, cited by 3.1\nERROR step-entry-input-omitted [ex-embedded-component-varies-but-radical-does-not]: step-4-1 omits 3.2, cited by 4.1\nERROR step-unmapped [ex-embedded-component-varies-but-radical-does-not]: 3.2 has no derivation or routine-step contract\nERROR citation-quote-mismatch [thm-adjacency-matrix-powers-count-walks]: F1 quote does not occur in def-adjacency-matrix-of-a-finite-simple-graph's Definition\nERROR citation-quote-mismatch [prop-spectrum-is-an-isomorphism-invariant]: F2 quote does not occur in def-adjacency-matrix-of-a-finite-simple-graph's Definition\nERROR citation-quote-mismatch [prop-spectrum-is-an-isomorphism-invariant]: F3 quote does not occur in def-graph-spectrum-spectral-radius-and-cospectrality's Definition\nERROR citation-quote-mismatch [thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric]: F2 quote does not occur in def-graph-spectrum-spectral-radius-and-cospectrality's Definition\nERROR citation-quote-mismatch [thm-spectral-radius-is-bounded-by-average-and-maximum-degree]: F2 quote does not occur in def-graph-spectrum-spectral-radius-and-cospectrality's Definition\nERROR citation-quote-mismatch [thm-laplacian-is-the-oriented-incidence-product]: F1 quote does not occur in def-oriented-incidence-matrix-of-a-graph's Definition\nERROR citation-quote-mismatch [thm-laplacian-is-the-oriented-incidence-product]: F2 quote does not occur in def-laplacian-matrix-of-a-finite-simple-graph's Definition\nERROR citation-quote-mismatch [thm-laplacian-is-positive-semidefinite-and-annihilates-ones]: F1 quote does not occur in def-oriented-incidence-matrix-of-a-graph's Definition\nERROR citation-quote-mismatch [thm-laplacian-kernel-dimension-counts-components]: F2 quote does not occur in def-laplacian-matrix-of-a-finite-simple-graph's Definition\nERROR citation-quote-mismatch [thm-laplacian-kernel-dimension-counts-components]: L2 quote does not occur in thm-laplacian-is-positive-semidefinite-and-annihilates-ones's Statement\nERROR citation-quote-mismatch [cor-algebraic-connectivity-characterises-connectedness]: F1 quote does not occur in def-algebraic-connectivity-of-a-graph's Definition\nERROR citation-source-not-in-fact [thm-binet-cauchy-formula]: F1 does not link [[def-determinant-of-a-square-matrix]]\nERROR citation-fact-uncontracted [thm-binet-cauchy-formula]: F1 -> thm-leibniz-determinant-is-alternating-multilinear-and-normalized needs an exact citation contract\nERROR citation-fact-uncontracted [thm-binet-cauchy-formula]: F2 -> def-ring-matrix-product-identity-and-transpose needs an exact citation contract\nERROR citation-fact-uncontracted [thm-binet-cauchy-formula]: F3 -> def-determinant-of-a-square-matrix needs an exact citation contract\nERROR step-entry-input-omitted [thm-binet-cauchy-formula]: step-1-1 omits F2, cited by 1.1\nERROR step-entry-input-omitted [thm-binet-cauchy-formula]: step-3-1 omits F3, cited by 3.1\nERROR citation-quote-mismatch [thm-spectrum-of-the-complete-graph]: F2 quote does not occur in def-graph-spectrum-spectral-radius-and-cospectrality's Definition\nERROR citation-quote-mismatch [thm-matrix-tree-theorem]: L3 quote does not occur in thm-binet-cauchy-formula's Statement\nERROR citation-quote-mismatch [cor-kirchhoff-eigenvalue-product-formula]: F1 quote does not occur in def-graph-spectrum-spectral-radius-and-cospectrality's Definition\nERROR citation-quote-mismatch [thm-spectral-gap-implies-connectivity-and-edge-expansion]: F1 quote does not occur in def-n-d-lambda-graph-and-expander's Definition\nERROR citation-quote-mismatch [thm-spectrum-of-the-cycle-graph]: F2 quote does not occur in def-graph-spectrum-spectral-radius-and-cospectrality's Definition\nERROR citation-quote-mismatch [thm-spectrum-of-the-complete-bipartite-graph]: F2 quote does not occur in def-graph-spectrum-spectral-radius-and-cospectrality's Definition\nERROR citation-quote-mismatch [thm-spectrum-of-the-petersen-graph]: F2 quote does not occur in def-graph-spectrum-spectral-radius-and-cospectrality's Definition\nERROR citation-quote-mismatch [cex-cospectral-graphs-need-not-be-isomorphic]: F1 quote does not occur in def-graph-spectrum-spectral-radius-and-cospectrality's Definition\nERROR citation-quote-mismatch [fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity]: F1 quote does not occur in def-algebraic-connectivity-of-a-graph's Definition\nERROR citation-quote-mismatch [thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module]: F1 quote does not occur in def-split-set-in-a-bull-free-graph's Definition\nERROR citation-use-unmapped [thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module]: F1 is cited by 2.1 but the contract omits it\nERROR citation-use-unmapped [thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module]: F2 is cited by 2.1 but the contract omits it\nERROR step-entry-input-omitted [thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module]: step-2-1 omits F1, cited by 2.1\nERROR step-entry-input-omitted [thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module]: step-2-1 omits F2, cited by 2.1\nERROR citation-quote-mismatch [thm-composite-bull-free-graphs-have-a-nontrivial-module]: F2 quote does not occur in def-split-set-in-a-bull-free-graph's Definition\nERROR citation-quote-mismatch [cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence]: L2 quote does not occur in thm-riesz-subsequence-theorem-for-convergence-in-measure's Statement\nERROR citation-quote-mismatch [cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space]: L1 quote does not occur in thm-riesz-subsequence-theorem-for-convergence-in-measure's Statement\nERROR citation-quote-mismatch [thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces]: L5 quote does not occur in thm-riesz-subsequence-theorem-for-convergence-in-measure's Statement\nERROR citation-quote-mismatch [ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence]: L1 quote does not occur in ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise's Example\nERROR citation-quote-mismatch [ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence]: L2 quote does not occur in thm-riesz-subsequence-theorem-for-convergence-in-measure's Statement\nERROR citation-source-not-in-fact [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: L3 does not link [[def-open-and-closed-in-r]]\nERROR citation-source-not-in-fact [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: L4 does not link [[lem-q-and-irrationals-dense-r]]\nERROR citation-use-not-supported [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: L4 is not cited by declared use 3.1\nERROR citation-use-unmapped [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: L4 is cited by 2.1 but the contract omits it\nERROR citation-fact-uncontracted [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: L3 -> prop-measure-monotonicity needs an exact citation contract\nERROR citation-fact-uncontracted [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: L4 -> def-open-and-closed-in-r needs an exact citation contract\nERROR citation-fact-uncontracted [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: L5 -> lem-q-and-irrationals-dense-r needs an exact citation contract\nERROR step-entry-input-omitted [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: step-2-1 omits L4, cited by 2.1\nERROR step-entry-input-omitted [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: step-3-1 omits L5, cited by 3.1\nERROR citation-quote-mismatch [thm-mobius-transformations-biholomorphic-sphere]: L1 quote does not occur in def-riemann-sphere-holomorphic-charts's Definition\nERROR citation-quote-mismatch [thm-real-cross-ratio-circline-characterization]: L1 quote does not occur in def-circline-and-reflection's Definition\nERROR citation-quote-mismatch [thm-mobius-preserves-circlines-and-reflections]: L2 quote does not occur in def-circline-and-reflection's Definition\nERROR citation-use-unmapped [thm-mobius-preserves-circlines-and-reflections]: L3 is cited by 3.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-mobius-preserves-circlines-and-reflections]: L4 -> thm-mobius-group-and-projective-linear-identification needs an exact citation contract\nERROR step-entry-input-omitted [thm-mobius-preserves-circlines-and-reflections]: step-3-1 omits L4, cited by 3.1\nERROR step-entry-input-omitted [thm-mobius-preserves-circlines-and-reflections]: step-3-1 omits L3, cited by 3.1\nERROR step-unmapped [thm-mobius-preserves-circlines-and-reflections]: 4.1 has no derivation or routine-step contract\nERROR step-unmapped [thm-mobius-preserves-circlines-and-reflections]: 5.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [ex-the-exhaustion-metric-on-the-unit-disc]: L1 quote does not occur in def-compact-exhaustion-metric-on-function-space's Definition\nERROR citation-source-not-in-fact [fs-arzela-ascoli-alone-proves-montel]: L1 does not link [[lem-locally-bounded-holomorphic-families-are-locally-equicontinuous]]\nERROR citation-use-unmapped [fs-arzela-ascoli-alone-proves-montel]: L1 is cited by 1.1 but the contract omits it\nERROR citation-source-not-in-fact [fs-arzela-ascoli-alone-proves-montel]: L1 does not link [[thm-montel-theorem-for-holomorphic-functions]]\nERROR citation-use-unmapped [fs-arzela-ascoli-alone-proves-montel]: L1 is cited by 1.1 but the contract omits it\nERROR citation-fact-uncontracted [fs-arzela-ascoli-alone-proves-montel]: L1 -> cor-ascoli-arzela-for-compact-metric-domains needs an exact citation contract\nERROR citation-fact-uncontracted [fs-arzela-ascoli-alone-proves-montel]: L2 -> lem-locally-bounded-holomorphic-families-are-locally-equicontinuous needs an exact citation contract\nERROR step-entry-input-omitted [fs-arzela-ascoli-alone-proves-montel]: step-1-1 omits L1, cited by 1.1\nERROR step-entry-input-omitted [fs-arzela-ascoli-alone-proves-montel]: step-2-1 omits L2, cited by 2.1\nERROR citation-quote-mismatch [thm-weierstrass-preparation-theorem]: L4 quote does not occur in def-weierstrass-polynomial's Definition\nERROR citation-quote-mismatch [thm-uniqueness-in-weierstrass-preparation]: L2 quote does not occur in def-weierstrass-polynomial's Definition\nERROR citation-quote-mismatch [thm-weierstrass-division-theorem]: L1 quote does not occur in def-weierstrass-polynomial's Definition\nERROR citation-quote-mismatch [lem-weierstrass-quotient-is-a-finite-module]: L1 quote does not occur in def-weierstrass-polynomial's Definition\nERROR citation-quote-mismatch [lem-prepared-factorizations-and-irreducibility]: L1 quote does not occur in def-weierstrass-polynomial's Definition\nERROR citation-quote-mismatch [fs-weierstrass-preparation-is-unique-without-the-unit-condition]: L2 quote does not occur in def-weierstrass-polynomial's Definition\nWARN shotgun-bracket [thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations]: 1.3 cites 4 of 8 declared facts while 2 other step(s) cite none — cite each fact at the step that uses it\n",
      "named_ids": [
        "thm-lasker-noether-primary-decomposition",
        "thm-first-uniqueness-theorem-primary-decomposition",
        "thm-isolated-primary-components-are-unique",
        "thm-second-uniqueness-theorem-primary-decomposition",
        "cor-radical-ideals-as-intersections-of-minimal-primes-noetherian",
        "ex-annihilator-colon-ideals-in-a-cyclic-module",
        "ex-redundant-primary-component-deletion",
        "ex-embedded-component-varies-but-radical-does-not",
        "thm-adjacency-matrix-powers-count-walks",
        "prop-spectrum-is-an-isomorphism-invariant",
        "thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric",
        "thm-spectral-radius-is-bounded-by-average-and-maximum-degree",
        "thm-laplacian-is-the-oriented-incidence-product",
        "thm-laplacian-is-positive-semidefinite-and-annihilates-ones",
        "thm-laplacian-kernel-dimension-counts-components",
        "cor-algebraic-connectivity-characterises-connectedness",
        "thm-binet-cauchy-formula",
        "def-determinant-of-a-square-matrix",
        "thm-spectrum-of-the-complete-graph",
        "thm-matrix-tree-theorem",
        "cor-kirchhoff-eigenvalue-product-formula",
        "thm-spectral-gap-implies-connectivity-and-edge-expansion",
        "thm-spectrum-of-the-cycle-graph",
        "thm-spectrum-of-the-complete-bipartite-graph",
        "thm-spectrum-of-the-petersen-graph",
        "cex-cospectral-graphs-need-not-be-isomorphic",
        "fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity",
        "thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module",
        "thm-composite-bull-free-graphs-have-a-nontrivial-module",
        "cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence",
        "cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space",
        "thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces",
        "ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence",
        "ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval",
        "def-open-and-closed-in-r",
        "lem-q-and-irrationals-dense-r",
        "thm-mobius-transformations-biholomorphic-sphere",
        "thm-real-cross-ratio-circline-characterization",
        "thm-mobius-preserves-circlines-and-reflections",
        "ex-the-exhaustion-metric-on-the-unit-disc",
        "fs-arzela-ascoli-alone-proves-montel",
        "lem-locally-bounded-holomorphic-families-are-locally-equicontinuous",
        "thm-montel-theorem-for-holomorphic-functions",
        "thm-weierstrass-preparation-theorem",
        "thm-uniqueness-in-weierstrass-preparation",
        "thm-weierstrass-division-theorem",
        "lem-weierstrass-quotient-is-a-finite-module",
        "lem-prepared-factorizations-and-irreducibility",
        "fs-weierstrass-preparation-is-unique-without-the-unit-condition",
        "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [thm-binet-cauchy-formula]: thm-binet-cauchy-formula is high risk and lacks a complete Alpha risk_review",
      "output": "CRITICAL 9 [lem-equivalent-hnn-presentation-with-associated-subgroups] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [lem-elementary-hnn-reductions-preserve-the-represented-element] 2:boundary-sensitive language\nCRITICAL 12 [thm-hnn-normal-form-theorem] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 5 [thm-brittons-lemma] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [cor-the-base-group-embeds-in-its-hnn-extension] 2:boundary-sensitive language\nORDINARY 0 [cor-the-stable-letter-has-infinite-order] no signals\nMODERATE 3 [prop-universal-property-of-an-hnn-extension] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 7 [prop-normal-form-for-an-ascending-hnn-extension] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate] no signals\nHIGH 7 [lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [thm-conjugacy-theorem-for-cyclically-reduced-hnn-words] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-the-base-group-may-collapse-in-an-hnn-extension] no signals\nORDINARY 1 [fs-every-word-containing-a-stable-letter-is-nontrivial] 1:2 cited facts\nMODERATE 3 [fs-hnn-normal-form-is-canonical-without-transversals] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-every-hnn-extension-is-an-ascending-hnn-extension] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-direct-product-a-times-z-as-an-hnn-extension] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-baumslag-solitar-groups-as-hnn-extensions] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-an-ascending-hnn-extension-from-doubling-the-integers] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [ex-britton-reduction-of-a-word-with-two-pins] 1:3 cited facts\nORDINARY 1 [ex-hnn-extension-realising-two-conjugate-subgroups] 1:2 cited facts\nORDINARY 1 [cex-a-stable-letter-word-that-is-not-britton-reduced] 1:2 cited facts\nHIGH 7 [thm-unique-reduced-path-characterisation-of-simplicial-trees] 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [lem-path-metric-on-a-tree-is-geodesic-and-integer-valued] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [lem-barycentric-subdivision-removes-edge-inversions] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 10 [thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [cor-translation-length-is-conjugacy-invariant-and-homogeneous] no signals\nMODERATE 3 [lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-ping-pong-for-hyperbolic-tree-automorphisms] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [fs-the-published-finite-tree-definition-already-covers-bass-serre-trees] no signals\nMODERATE 3 [fs-every-tree-action-is-without-edge-inversions] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-every-tree-automorphism-fixes-a-vertex] no signals\nMODERATE 3 [fs-translation-length-is-always-the-distance-from-an-arbitrary-basepoint] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-the-bi-infinite-line-and-its-translation-action] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-regular-cayley-trees-of-free-groups] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-an-edge-inversion-and-its-barycentric-subdivision] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [ex-a-finite-group-fixing-the-centre-of-a-tree] no signals\nORDINARY 0 [ex-elliptic-and-hyperbolic-automorphisms] no signals\nHIGH 5 [cex-the-quotient-of-a-tree-can-have-cycles] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-annihilator-of-a-cyclic-submodule] no signals\nHIGH 6 [lem-associated-prime-equivalent-cyclic-embedding] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [cor-associated-primes-of-a-cyclic-module-are-primes-of-element-annihilators-modulo-ideal] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-noetherian-ring-maximal-element-annihilator-exists] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [lem-maximal-element-annihilator-primality-step] 2:boundary-sensitive language\nORDINARY 1 [thm-existence-of-associated-primes] 1:3 cited facts\nHIGH 5 [cor-associated-primes-empty-iff-module-zero-noetherian] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [lem-associated-primes-exact-sequence-left-inclusion] 1:2 cited facts\nORDINARY 0 [lem-associated-primes-exact-sequence-right-bound] no signals\nORDINARY 1 [thm-associated-primes-in-a-short-exact-sequence] 1:2 cited facts\nHIGH 6 [lem-associated-prime-localises-forward] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction\nHIGH 6 [lem-associated-prime-localises-reverse-finite] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [thm-associated-primes-localise] 1:2 cited facts\nORDINARY 1 [lem-associated-primes-contained-in-support] 1:3 cited facts\nCRITICAL 10 [thm-prime-filtration-of-a-finite-module] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-minimal-support-primes-are-associated] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [cor-support-is-union-of-closures-of-associated-primes] 2:6 declared dependencies; 2:6 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 1 [thm-finiteness-of-associated-primes] 1:2 cited facts\nMODERATE 3 [lem-zero-divisor-annihilator-contained-in-associated-prime] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-zero-divisors-on-a-module] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-radical-of-a-primary-ideal-is-prime] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [lem-primary-submodule-zero-divisor-characterisation] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 13 [thm-primary-submodule-characterisations] 3:9 declared dependencies; 2:8 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 7 [lem-intersection-of-primary-submodules-with-same-radical] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-irreducible-submodule-is-primary-noetherian] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [lem-primary-decomposition-delete-redundant-components] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [lem-primary-decomposition-combine-equal-radicals] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 9 [thm-lasker-noether-primary-decomposition] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 10 [lem-associated-primes-from-a-minimal-primary-decomposition] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-first-uniqueness-theorem-primary-decomposition] 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 6 [lem-localisation-of-a-primary-submodule] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [lem-contraction-recovers-primary-component-after-localising-away-from-radical] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-isolated-primary-components-are-unique] 2:4 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality\nMODERATE 4 [lem-finite-prime-avoidance] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 11 [thm-second-uniqueness-theorem-primary-decomposition] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [cor-radical-ideals-as-intersections-of-minimal-primes-noetherian] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [ex-annihilator-colon-ideals-in-a-cyclic-module] 2:quotient or equivalence-class construction\nHIGH 5 [ex-primary-maximal-radical-test] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-primary-localisation-kills-a-component] 1:2 cited facts\nHIGH 7 [ex-redundant-primary-component-deletion] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 7 [ex-embedded-component-varies-but-radical-does-not] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-zero-module-associated-prime-boundary] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order] 2:boundary-sensitive language\nHIGH 5 [cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 4 [cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order] 2:6 declared dependencies; 2:6 cited facts\nMODERATE 3 [thm-augmentation-ideal-has-no-complement-when-char-k-divides-group-order] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order] 2:4 declared dependencies; 2:4 cited facts\nHIGH 5 [thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-sum-of-squares-formula-for-irreducible-degrees] 1:2 cited facts\nORDINARY 2 [lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices] 2:boundary-sensitive language\nORDINARY 1 [thm-class-sums-form-a-basis-of-the-center-of-k-g] 1:3 cited facts\nORDINARY 2 [cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes] 2:boundary-sensitive language\nHIGH 6 [thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nHIGH 6 [cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-the-complex-group-algebra-of-z-mod-three-is-c-times-c-times-c] 1:3 cited facts\nORDINARY 1 [ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c] 1:3 cited facts\nHIGH 7 [ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-regular-representation-of-z-mod-four-over-c-splits-into-four-characters] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [fs-maschkes-theorem-without-the-characteristic-hypothesis] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [fs-not-every-finite-dimensional-algebra-over-a-field-is-semisimple] 1:3 cited facts\nHIGH 5 [fs-decomposition-into-irreducible-subrepresentations-is-unique] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [fs-the-sum-of-the-irreducible-degrees-equals-the-group-order] 1:2 cited facts\nORDINARY 0 [fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r] no signals\nMODERATE 3 [thm-adjacency-matrix-powers-count-walks] 1:2 cited facts; 2:induction, recursion, or minimality\nORDINARY 1 [cor-trace-of-adjacency-power-counts-closed-walks] 1:2 cited facts\nMODERATE 4 [prop-spectrum-is-an-isomorphism-invariant] 2:4 declared dependencies; 2:4 cited facts\nHIGH 7 [thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim\nCRITICAL 8 [thm-spectral-radius-is-bounded-by-average-and-maximum-degree] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-laplacian-is-the-oriented-incidence-product] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-laplacian-is-positive-semidefinite-and-annihilates-ones] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-laplacian-kernel-dimension-counts-components] 2:5 declared dependencies; 2:5 cited facts\nMODERATE 4 [cor-algebraic-connectivity-characterises-connectedness] 1:2 cited facts; 3:biconditional / both-direction claim\nHIGH 6 [thm-binet-cauchy-formula] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 1:finite countermodel smoke test selected\nORDINARY 1 [thm-spectrum-of-the-complete-graph] 1:2 cited facts\nHIGH 6 [thm-matrix-tree-theorem] 3:7 declared dependencies; 2:5 cited facts; 1:finite countermodel smoke test selected\nHIGH 6 [cor-kirchhoff-eigenvalue-product-formula] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-cayley-formula-from-the-matrix-tree-theorem] 1:3 cited facts\nCRITICAL 8 [thm-spectral-gap-implies-connectivity-and-edge-expansion] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-spectrum-of-the-cycle-graph] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 1 [thm-spectrum-of-the-complete-bipartite-graph] 1:2 cited facts\nMODERATE 3 [thm-spectrum-of-the-petersen-graph] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-adjacency-spectrum-of-c-four] no signals\nORDINARY 0 [ex-laplacian-kernel-of-a-disconnected-graph] no signals\nORDINARY 1 [ex-k-four-has-sixteen-spanning-trees-by-kirchhoff] 1:2 cited facts\nORDINARY 0 [ex-spectrum-of-k-three-three] no signals\nORDINARY 1 [ex-petersen-graph-spectrum-from-the-two-subset-model] 1:2 cited facts\nHIGH 6 [cex-cospectral-graphs-need-not-be-isomorphic] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [fs-matrix-tree-theorem-needs-a-particular-cofactor] 2:boundary-sensitive language\nMODERATE 4 [prop-bull-free-graphs-are-complement-invariant] 1:3 cited facts; 3:biconditional / both-direction claim\nMODERATE 4 [prop-perfect-graphs-are-one-narrow] 2:4 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs] 3:8 declared dependencies; 2:9 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets] 2:5 declared dependencies; 2:5 cited facts\nHIGH 7 [thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-composite-bull-free-graphs-have-a-nontrivial-module] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-prime-bull-free-graphs-are-basic] 1:3 cited facts\nHIGH 5 [lem-basic-bull-free-hole-with-a-complete-outside-vertex] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex] 1:2 cited facts; 2:induction, recursion, or minimality\nHIGH 6 [thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-basic-bull-free-graphs-are-two-narrow] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [thm-alpha-narrowness-is-preserved-under-substitution] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-bull-free-graphs-are-two-narrow] 3:11 declared dependencies; 2:7 cited facts; 2:induction, recursion, or minimality\nMODERATE 4 [cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [ex-the-bull-graph-is-self-complementary] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cex-the-five-cycle-is-bull-free-but-not-perfect] 2:6 declared dependencies; 2:4 cited facts\nORDINARY 1 [ex-k-four-is-bull-free-with-a-nontrivial-module] 1:3 cited facts\nHIGH 6 [ex-the-five-cycle-is-not-one-narrow] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-every-bull-free-graph-is-perfect] no signals\nORDINARY 2 [fs-two-narrow-implies-one-narrow] 2:boundary-sensitive language\nHIGH 5 [thm-convergence-in-measure-limits-are-unique-almost-everywhere] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-l-one-convergence-implies-convergence-in-measure] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [fs-l-one-convergence-implies-almost-everywhere-convergence] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [fs-almost-everywhere-convergence-implies-convergence-in-measure-on-every-measure-space] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 14 [prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-riesz-subsequence-theorem-for-convergence-in-measure] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [fs-convergence-in-measure-implies-almost-everywhere-convergence] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 13 [thm-cauchy-in-measure-converges-in-measure] 3:8 declared dependencies; 2:8 cited facts; 1:7 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-egorovs-theorem] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [fs-egorovs-theorem-holds-on-every-measure-space] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [lem-simple-approximants-converge-uniformly-on-a-large-closed-set] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-lusins-theorem] 2:6 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cor-bounded-domain-lusin-core-can-be-chosen-compact] 1:2 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces] no signals\nCRITICAL 8 [prop-dominated-families-are-uniformly-integrable] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [fs-uniform-integrability-implies-domination-by-an-integrable-function] 2:boundary-sensitive language\nCRITICAL 13 [thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces] 3:10 declared dependencies; 2:8 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [cor-dominated-convergence-is-a-vitali-corollary] 3:10 declared dependencies; 2:10 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cex-indicators-of-unit-interval-translates-converge-almost-everywhere-but-not-in-measure] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cex-indicators-of-unit-interval-translates-show-egorov-needs-finite-measure] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-a-uniformly-integrable-family-with-no-integrable-majorant] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-stereographic-projection-riemann-sphere-homeomorphism] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [thm-chordal-metric-induces-sphere-topology] 2:boundary-sensitive language\nHIGH 5 [thm-mobius-group-and-projective-linear-identification] 2:4 declared dependencies; 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 1 [thm-mobius-transformations-biholomorphic-sphere] 1:2 cited facts\nHIGH 5 [thm-three-point-transitivity-mobius-transformations] 2:4 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [thm-cross-ratio-mobius-invariant] no signals\nHIGH 5 [thm-real-cross-ratio-circline-characterization] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [thm-mobius-preserves-circlines-and-reflections] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-meromorphic-functions-riemann-sphere-are-rational] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [thm-rational-map-fibre-count-degree] 2:4 declared dependencies\nMODERATE 3 [thm-biholomorphic-self-maps-riemann-sphere-are-mobius] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [cor-entire-biholomorphisms-are-affine] 2:6 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-automorphisms-punctured-plane] 3:7 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-classification-mobius-transformations] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-cayley-transform-biholomorphism-upper-half-plane-to-disc] 2:boundary-sensitive language\nMODERATE 4 [ex-mobius-transformation-from-three-point-correspondence] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [ex-classification-of-z-plus-one-two-z-and-one-over-z] no signals\nORDINARY 0 [ex-stereographic-projection-formulas-on-the-unit-sphere] no signals\nORDINARY 1 [ex-chordal-distance-formula-from-complex-coordinates] 1:2 cited facts\nORDINARY 0 [cex-e-to-z-is-meromorphic-on-c-but-not-on-the-riemann-sphere] no signals\nHIGH 5 [cex-exponential-is-a-holomorphic-surjection-of-c-onto-c-times-not-an-automorphism] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic] 2:quotient or equivalence-class construction\nORDINARY 0 [fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism] no signals\nORDINARY 0 [fs-a-mobius-map-with-three-fixed-points-may-be-nonidentity] no signals\nORDINARY 1 [fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism] 1:2 cited facts\nMODERATE 3 [fs-the-riemann-sphere-is-homeomorphic-to-the-complex-plane] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [lem-canonical-compact-exhaustion-of-a-plane-domain] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-compact-exhaustion-metric-characterizes-local-uniform-convergence] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cor-compact-open-topology-is-independent-of-exhaustion] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-completeness-of-continuous-functions-for-local-uniform-convergence] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cor-holomorphic-functions-are-closed-for-local-uniform-convergence] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 4 [lem-locally-bounded-holomorphic-families-are-locally-equicontinuous] 2:4 declared dependencies; 2:boundary-sensitive language\nCRITICAL 8 [thm-montel-theorem-for-holomorphic-functions] 2:6 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nORDINARY 2 [thm-normal-holomorphic-families-are-locally-bounded] 2:analytic limiting/completeness language\nHIGH 5 [thm-vitali-porter-convergence-theorem] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nORDINARY 2 [cor-derivative-operators-are-continuous-for-local-uniform-convergence] 2:analytic limiting/completeness language\nHIGH 7 [thm-chordal-limit-theorem-for-meromorphic-functions] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-chordal-arzela-ascoli-criterion-for-meromorphic-families] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nORDINARY 1 [ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane] 1:2 cited facts\nMODERATE 4 [ex-the-unit-ball-family-is-normal-on-any-domain] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [ex-diagonal-extraction-on-a-disc-for-montels-theorem] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [ex-the-exhaustion-metric-on-the-unit-disc] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-n-times-z-is-not-normal-near-zero] 2:boundary-sensitive language\nHIGH 7 [cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [fs-normality-means-sequential-limits-stay-inside-the-family] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [fs-arzela-ascoli-alone-proves-montel] 1:2 cited facts\nORDINARY 2 [fs-a-chordal-limit-of-holomorphic-functions-cannot-be-identically-infinity] 2:analytic limiting/completeness language\nCRITICAL 8 [lem-real-jacobian-determinant-of-a-complex-linear-map] 2:5 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [thm-holomorphic-inverse-function-theorem-several-variables] 2:6 declared dependencies; 2:5 cited facts\nCRITICAL 8 [thm-holomorphic-implicit-function-theorem] 2:4 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nHIGH 7 [thm-holomorphic-constant-rank-theorem] 3:7 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [prop-units-in-the-holomorphic-germ-ring] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-stability-of-slice-zero-count-under-holomorphic-parameters] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 11 [lem-holomorphic-power-sums-of-slice-zeros] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [lem-newton-identities-for-slice-roots] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 11 [thm-weierstrass-preparation-theorem] 3:11 declared dependencies; 2:10 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [thm-uniqueness-in-weierstrass-preparation] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 12 [thm-weierstrass-division-theorem] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 9 [lem-finite-modules-over-noetherian-rings-are-noetherian] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-weierstrass-quotient-is-a-finite-module] 1:3 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 11 [thm-holomorphic-germ-ring-is-noetherian] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 5 [lem-noetherian-domains-are-atomic] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [lem-gauss-lemma-over-a-ufd] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 9 [lem-prepared-factorizations-and-irreducibility] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 13 [thm-holomorphic-germ-ring-is-a-ufd] 3:10 declared dependencies; 2:10 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 7 [thm-zero-set-has-no-isolated-points-in-several-complex-variables] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-riemann-extension-across-hypersurface-zero-sets] 3:9 declared dependencies; 2:9 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-locally-bounded-meromorphic-poles-are-removable] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-z-one-squared-minus-z-two-prepares-to-z-two-minus-z-one-squared] 2:boundary-sensitive language\nORDINARY 2 [cex-z-one-z-two-is-not-regular-in-z-two-at-the-origin] 2:boundary-sensitive language\nORDINARY 1 [ex-a-shear-makes-z-one-z-two-regular-in-z-two] 1:2 cited facts\nMODERATE 4 [ex-weierstrass-division-of-z-one-by-z-two-squared-minus-z-one] 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-the-unit-circle-is-a-holomorphic-graph-near-zero-one] 2:boundary-sensitive language\nMODERATE 3 [cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective] 2:5 declared dependencies; 1:3 cited facts\nORDINARY 2 [fs-an-everywhere-invertible-complex-jacobian-forces-global-injectivity] 2:boundary-sensitive language\nMODERATE 3 [fs-the-holomorphic-inverse-function-theorem-is-global] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-every-germ-is-regular-in-the-last-variable-without-a-coordinate-change] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-weierstrass-preparation-is-unique-without-the-unit-condition] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero] 2:boundary-sensitive language\nMODERATE 3 [thm-the-join-of-subobjects-is-their-least-upper-bound] 1:3 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-the-meet-of-subobjects-is-their-pullback] 1:3 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-the-subobject-lattice-of-an-abelian-category-is-modular] 3:7 declared dependencies; 2:7 cited facts; 1:8 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [cex-a-subobject-lattice-need-not-be-distributive] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-second-isomorphism-theorem-in-an-abelian-category] 1:3 cited facts; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection] 1:3 cited facts; 3:biconditional / both-direction claim\nHIGH 6 [cor-inverse-image-preserves-meets-and-direct-image-preserves-joins] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 7 [thm-zassenhaus-butterfly-lemma-in-an-abelian-category] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-schreier-refinement-theorem-in-an-abelian-category] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-jordan-holder-theorem-in-an-abelian-category] 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [thm-length-is-additive-along-a-subobject] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [thm-objects-of-finite-length-form-an-abelian-subcategory] 1:3 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-a-locally-small-abelian-category-with-a-generator-is-well-powered] 1:3 cited facts\nCRITICAL 8 [cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied] 2:6 declared dependencies; 2:5 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-a-generator-detects-equality-of-subobjects] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [thm-ab5-implies-ab4] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-module-categories-are-grothendieck-categories] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-abelian-groups-satisfy-ab4-star] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [cex-abelian-groups-do-not-satisfy-ab5-star] 2:boundary-sensitive language\nMODERATE 3 [thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5] 1:2 cited facts\nORDINARY 1 [thm-projective-object-characterisations] 1:2 cited facts\nORDINARY 1 [thm-injective-object-characterisations] 1:3 cited facts\nHIGH 5 [thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [thm-a-direct-summand-of-a-projective-is-projective] no signals\nHIGH 7 [thm-module-categories-have-enough-projectives] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-a-projective-generator-detects-isomorphisms] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-the-subobject-lattice-of-an-abelian-category-is-distributive] no signals\nMODERATE 3 [fs-every-abelian-category-has-a-generator] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [fs-every-object-of-an-abelian-category-has-a-composition-series] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [fs-ab4-implies-ab5] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [fs-a-generator-is-the-same-thing-as-a-projective-generator] 1:3 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-jordan-holder-needs-a-finiteness-hypothesis-only-on-the-category] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 1 [ex-the-subobject-lattice-of-a-cyclic-group-of-order-twelve] 1:2 cited facts\nMODERATE 3 [ex-the-subobject-lattice-of-a-two-dimensional-vector-space] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [ex-the-galois-connection-of-images-and-preimages-for-a-module-homomorphism] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nHIGH 5 [ex-two-composition-series-of-a-module-refined] 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [ex-the-ring-as-a-generator-of-its-module-category] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [cex-an-abelian-category-with-no-nonzero-projective-object] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-a-directed-union-of-subgroups-meeting-a-fixed-subgroup] 1:2 cited facts\nHIGH 5 [ex-length-computed-for-a-finite-abelian-group] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [lem-induced-subgraphs-of-cographs-are-cographs] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 13 [thm-cographs-are-exactly-the-p-four-free-graphs] 3:13 declared dependencies; 2:13 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 10 [thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four] 3:7 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [lem-disjoint-union-of-perfect-graphs-is-perfect] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-complete-connection-of-perfect-graphs-is-perfect] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-cographs-are-perfect] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 4 [thm-perfect-graphs-satisfy-kappa-at-least-their-order] 2:5 declared dependencies; 2:4 cited facts\nMODERATE 4 [cor-perfect-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order] 2:4 declared dependencies; 2:4 cited facts\nCRITICAL 10 [thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations] 3:13 declared dependencies; 2:16 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [thm-pure-blockades-with-perfect-patterns-contain-large-homogeneous-subblockades] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical] 2:4 declared dependencies; 1:3 cited facts; 2:induction, recursion, or minimality\nCRITICAL 10 [thm-pure-blockades-with-cograph-patterns-have-additive-kappa] 3:9 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades] 3:14 declared dependencies; 2:11 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-four-cycle-is-a-cograph] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [ex-the-five-vertex-path-is-perfect-but-not-a-cograph] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [ex-a-two-block-pure-blockade-has-additive-kappa] 2:5 declared dependencies; 2:4 cited facts\nMODERATE 3 [ex-a-pure-blockade-with-perfect-but-not-cograph-pattern] 2:4 declared dependencies; 1:3 cited facts\nMODERATE 3 [ex-a-blockade-rainbow-copy-of-the-four-vertex-path] 1:3 cited facts; 2:boundary-sensitive language\nrisk-report: 2 error(s), 332 item(s) routed\nERROR risk-review-missing [thm-binet-cauchy-formula]: thm-binet-cauchy-formula is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-vitali-porter-convergence-theorem]: thm-vitali-porter-convergence-theorem is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-equivalent-hnn-presentation-with-associated-subgroups",
        "lem-elementary-hnn-reductions-preserve-the-represented-element",
        "thm-hnn-normal-form-theorem",
        "thm-brittons-lemma",
        "cor-the-base-group-embeds-in-its-hnn-extension",
        "cor-the-stable-letter-has-infinite-order",
        "prop-universal-property-of-an-hnn-extension",
        "prop-normal-form-for-an-ascending-hnn-extension",
        "lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word",
        "lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate",
        "lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy",
        "thm-conjugacy-theorem-for-cyclically-reduced-hnn-words",
        "fs-the-base-group-may-collapse-in-an-hnn-extension",
        "fs-every-word-containing-a-stable-letter-is-nontrivial",
        "fs-hnn-normal-form-is-canonical-without-transversals",
        "fs-every-hnn-extension-is-an-ascending-hnn-extension",
        "ex-the-direct-product-a-times-z-as-an-hnn-extension",
        "ex-baumslag-solitar-groups-as-hnn-extensions",
        "ex-an-ascending-hnn-extension-from-doubling-the-integers",
        "ex-britton-reduction-of-a-word-with-two-pins",
        "ex-hnn-extension-realising-two-conjugate-subgroups",
        "cex-a-stable-letter-word-that-is-not-britton-reduced",
        "thm-unique-reduced-path-characterisation-of-simplicial-trees",
        "lem-path-metric-on-a-tree-is-geodesic-and-integer-valued",
        "thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion",
        "lem-barycentric-subdivision-removes-edge-inversions",
        "lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions",
        "lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree",
        "thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms",
        "cor-translation-length-is-conjugacy-invariant-and-homogeneous",
        "lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision",
        "cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free",
        "thm-ping-pong-for-hyperbolic-tree-automorphisms",
        "fs-the-published-finite-tree-definition-already-covers-bass-serre-trees",
        "fs-every-tree-action-is-without-edge-inversions",
        "fs-every-tree-automorphism-fixes-a-vertex",
        "fs-translation-length-is-always-the-distance-from-an-arbitrary-basepoint",
        "fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree",
        "ex-the-bi-infinite-line-and-its-translation-action",
        "ex-regular-cayley-trees-of-free-groups",
        "ex-an-edge-inversion-and-its-barycentric-subdivision",
        "ex-a-finite-group-fixing-the-centre-of-a-tree",
        "ex-elliptic-and-hyperbolic-automorphisms",
        "cex-the-quotient-of-a-tree-can-have-cycles",
        "lem-annihilator-of-a-cyclic-submodule",
        "lem-associated-prime-equivalent-cyclic-embedding",
        "cor-associated-primes-of-a-cyclic-module-are-primes-of-element-annihilators-modulo-ideal",
        "lem-noetherian-ring-maximal-element-annihilator-exists",
        "lem-maximal-element-annihilator-primality-step",
        "thm-existence-of-associated-primes",
        "cor-associated-primes-empty-iff-module-zero-noetherian",
        "lem-associated-primes-exact-sequence-left-inclusion",
        "lem-associated-primes-exact-sequence-right-bound",
        "thm-associated-primes-in-a-short-exact-sequence",
        "lem-associated-prime-localises-forward",
        "lem-associated-prime-localises-reverse-finite",
        "thm-associated-primes-localise",
        "lem-associated-primes-contained-in-support",
        "thm-prime-filtration-of-a-finite-module",
        "thm-minimal-support-primes-are-associated",
        "cor-support-is-union-of-closures-of-associated-primes",
        "thm-finiteness-of-associated-primes",
        "lem-zero-divisor-annihilator-contained-in-associated-prime",
        "thm-zero-divisors-on-a-module",
        "thm-radical-of-a-primary-ideal-is-prime",
        "lem-primary-submodule-zero-divisor-characterisation",
        "thm-primary-submodule-characterisations",
        "lem-intersection-of-primary-submodules-with-same-radical",
        "lem-irreducible-submodule-is-primary-noetherian",
        "lem-primary-decomposition-delete-redundant-components",
        "lem-primary-decomposition-combine-equal-radicals",
        "thm-lasker-noether-primary-decomposition",
        "lem-associated-primes-from-a-minimal-primary-decomposition",
        "thm-first-uniqueness-theorem-primary-decomposition",
        "lem-localisation-of-a-primary-submodule",
        "lem-contraction-recovers-primary-component-after-localising-away-from-radical",
        "thm-isolated-primary-components-are-unique",
        "lem-finite-prime-avoidance",
        "thm-second-uniqueness-theorem-primary-decomposition",
        "cor-radical-ideals-as-intersections-of-minimal-primes-noetherian",
        "ex-annihilator-colon-ideals-in-a-cyclic-module",
        "ex-primary-maximal-radical-test",
        "ex-primary-localisation-kills-a-component",
        "ex-redundant-primary-component-deletion",
        "ex-embedded-component-varies-but-radical-does-not",
        "ex-zero-module-associated-prime-boundary",
        "thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order",
        "cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order",
        "cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order",
        "thm-augmentation-ideal-has-no-complement-when-char-k-divides-group-order",
        "cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order",
        "thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique",
        "thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field",
        "thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree",
        "cor-sum-of-squares-formula-for-irreducible-degrees",
        "lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices",
        "thm-class-sums-form-a-basis-of-the-center-of-k-g",
        "cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes",
        "thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order",
        "cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero",
        "ex-the-complex-group-algebra-of-z-mod-three-is-c-times-c-times-c",
        "ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c",
        "ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition",
        "ex-the-regular-representation-of-z-mod-four-over-c-splits-into-four-characters",
        "ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component",
        "fs-maschkes-theorem-without-the-characteristic-hypothesis",
        "fs-not-every-finite-dimensional-algebra-over-a-field-is-semisimple",
        "fs-decomposition-into-irreducible-subrepresentations-is-unique",
        "fs-the-sum-of-the-irreducible-degrees-equals-the-group-order",
        "fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r",
        "thm-adjacency-matrix-powers-count-walks",
        "cor-trace-of-adjacency-power-counts-closed-walks",
        "prop-spectrum-is-an-isomorphism-invariant",
        "thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric",
        "thm-spectral-radius-is-bounded-by-average-and-maximum-degree",
        "thm-laplacian-is-the-oriented-incidence-product",
        "thm-laplacian-is-positive-semidefinite-and-annihilates-ones",
        "thm-laplacian-kernel-dimension-counts-components",
        "cor-algebraic-connectivity-characterises-connectedness",
        "thm-binet-cauchy-formula",
        "thm-spectrum-of-the-complete-graph",
        "thm-matrix-tree-theorem",
        "cor-kirchhoff-eigenvalue-product-formula",
        "cor-cayley-formula-from-the-matrix-tree-theorem",
        "thm-spectral-gap-implies-connectivity-and-edge-expansion",
        "thm-spectrum-of-the-cycle-graph",
        "thm-spectrum-of-the-complete-bipartite-graph",
        "thm-spectrum-of-the-petersen-graph",
        "ex-adjacency-spectrum-of-c-four",
        "ex-laplacian-kernel-of-a-disconnected-graph",
        "ex-k-four-has-sixteen-spanning-trees-by-kirchhoff",
        "ex-spectrum-of-k-three-three",
        "ex-petersen-graph-spectrum-from-the-two-subset-model",
        "cex-cospectral-graphs-need-not-be-isomorphic",
        "fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity",
        "fs-matrix-tree-theorem-needs-a-particular-cofactor",
        "prop-bull-free-graphs-are-complement-invariant",
        "prop-perfect-graphs-are-one-narrow",
        "thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs",
        "cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets",
        "thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module",
        "thm-composite-bull-free-graphs-have-a-nontrivial-module",
        "cor-prime-bull-free-graphs-are-basic",
        "lem-basic-bull-free-hole-with-a-complete-outside-vertex",
        "lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex",
        "thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect",
        "thm-basic-bull-free-graphs-are-two-narrow",
        "thm-alpha-narrowness-is-preserved-under-substitution",
        "thm-bull-free-graphs-are-two-narrow",
        "cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter",
        "ex-the-bull-graph-is-self-complementary",
        "cex-the-five-cycle-is-bull-free-but-not-perfect",
        "ex-k-four-is-bull-free-with-a-nontrivial-module",
        "ex-the-five-cycle-is-not-one-narrow",
        "fs-every-bull-free-graph-is-perfect",
        "fs-two-narrow-implies-one-narrow",
        "thm-convergence-in-measure-limits-are-unique-almost-everywhere",
        "thm-l-one-convergence-implies-convergence-in-measure",
        "fs-l-one-convergence-implies-almost-everywhere-convergence",
        "thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure",
        "thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces",
        "fs-almost-everywhere-convergence-implies-convergence-in-measure-on-every-measure-space",
        "prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces",
        "thm-riesz-subsequence-theorem-for-convergence-in-measure",
        "cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence",
        "fs-convergence-in-measure-implies-almost-everywhere-convergence",
        "thm-cauchy-in-measure-converges-in-measure",
        "thm-egorovs-theorem",
        "fs-egorovs-theorem-holds-on-every-measure-space",
        "cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space",
        "lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set",
        "lem-simple-approximants-converge-uniformly-on-a-large-closed-set",
        "thm-lusins-theorem",
        "cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function",
        "cor-bounded-domain-lusin-core-can-be-chosen-compact",
        "fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set",
        "thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces",
        "prop-dominated-families-are-uniformly-integrable",
        "fs-uniform-integrability-implies-domination-by-an-integrable-function",
        "thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces",
        "cor-dominated-convergence-is-a-vitali-corollary",
        "ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise",
        "ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence",
        "cex-indicators-of-unit-interval-translates-converge-almost-everywhere-but-not-in-measure",
        "cex-indicators-of-unit-interval-translates-show-egorov-needs-finite-measure",
        "cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one",
        "ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval",
        "ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval",
        "ex-a-uniformly-integrable-family-with-no-integrable-majorant",
        "thm-stereographic-projection-riemann-sphere-homeomorphism",
        "thm-chordal-metric-induces-sphere-topology",
        "thm-mobius-group-and-projective-linear-identification",
        "thm-mobius-transformations-biholomorphic-sphere",
        "thm-three-point-transitivity-mobius-transformations",
        "thm-cross-ratio-mobius-invariant",
        "thm-real-cross-ratio-circline-characterization",
        "thm-mobius-preserves-circlines-and-reflections",
        "thm-meromorphic-functions-riemann-sphere-are-rational",
        "thm-rational-map-fibre-count-degree",
        "thm-biholomorphic-self-maps-riemann-sphere-are-mobius",
        "cor-entire-biholomorphisms-are-affine",
        "thm-automorphisms-punctured-plane",
        "thm-classification-mobius-transformations",
        "ex-cayley-transform-biholomorphism-upper-half-plane-to-disc",
        "ex-mobius-transformation-from-three-point-correspondence",
        "ex-classification-of-z-plus-one-two-z-and-one-over-z",
        "ex-stereographic-projection-formulas-on-the-unit-sphere",
        "ex-chordal-distance-formula-from-complex-coordinates",
        "cex-e-to-z-is-meromorphic-on-c-but-not-on-the-riemann-sphere",
        "cex-exponential-is-a-holomorphic-surjection-of-c-onto-c-times-not-an-automorphism",
        "cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic",
        "fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism",
        "fs-a-mobius-map-with-three-fixed-points-may-be-nonidentity",
        "fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism",
        "fs-the-riemann-sphere-is-homeomorphic-to-the-complex-plane",
        "lem-canonical-compact-exhaustion-of-a-plane-domain",
        "thm-compact-exhaustion-metric-characterizes-local-uniform-convergence",
        "cor-compact-open-topology-is-independent-of-exhaustion",
        "thm-completeness-of-continuous-functions-for-local-uniform-convergence",
        "cor-holomorphic-functions-are-closed-for-local-uniform-convergence",
        "lem-locally-bounded-holomorphic-families-are-locally-equicontinuous",
        "thm-montel-theorem-for-holomorphic-functions",
        "thm-normal-holomorphic-families-are-locally-bounded",
        "thm-vitali-porter-convergence-theorem",
        "cor-derivative-operators-are-continuous-for-local-uniform-convergence",
        "thm-chordal-limit-theorem-for-meromorphic-functions",
        "thm-chordal-arzela-ascoli-criterion-for-meromorphic-families",
        "ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane",
        "ex-the-unit-ball-family-is-normal-on-any-domain",
        "ex-diagonal-extraction-on-a-disc-for-montels-theorem",
        "ex-the-exhaustion-metric-on-the-unit-disc",
        "cex-n-times-z-is-not-normal-near-zero",
        "cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane",
        "fs-normality-means-sequential-limits-stay-inside-the-family",
        "fs-arzela-ascoli-alone-proves-montel",
        "fs-a-chordal-limit-of-holomorphic-functions-cannot-be-identically-infinity",
        "lem-real-jacobian-determinant-of-a-complex-linear-map",
        "thm-holomorphic-inverse-function-theorem-several-variables",
        "thm-holomorphic-implicit-function-theorem",
        "thm-holomorphic-constant-rank-theorem",
        "prop-units-in-the-holomorphic-germ-ring",
        "lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular",
        "lem-stability-of-slice-zero-count-under-holomorphic-parameters",
        "lem-holomorphic-power-sums-of-slice-zeros",
        "lem-newton-identities-for-slice-roots",
        "thm-weierstrass-preparation-theorem",
        "thm-uniqueness-in-weierstrass-preparation",
        "thm-weierstrass-division-theorem",
        "lem-finite-modules-over-noetherian-rings-are-noetherian",
        "lem-weierstrass-quotient-is-a-finite-module",
        "thm-holomorphic-germ-ring-is-noetherian",
        "lem-noetherian-domains-are-atomic",
        "lem-gauss-lemma-over-a-ufd",
        "lem-prepared-factorizations-and-irreducibility",
        "thm-holomorphic-germ-ring-is-a-ufd",
        "thm-zero-set-has-no-isolated-points-in-several-complex-variables",
        "thm-riemann-extension-across-hypersurface-zero-sets",
        "cor-locally-bounded-meromorphic-poles-are-removable",
        "ex-z-one-squared-minus-z-two-prepares-to-z-two-minus-z-one-squared",
        "cex-z-one-z-two-is-not-regular-in-z-two-at-the-origin",
        "ex-a-shear-makes-z-one-z-two-regular-in-z-two",
        "ex-weierstrass-division-of-z-one-by-z-two-squared-minus-z-one",
        "ex-the-unit-circle-is-a-holomorphic-graph-near-zero-one",
        "cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective",
        "fs-an-everywhere-invertible-complex-jacobian-forces-global-injectivity",
        "fs-the-holomorphic-inverse-function-theorem-is-global",
        "fs-every-germ-is-regular-in-the-last-variable-without-a-coordinate-change",
        "fs-weierstrass-preparation-is-unique-without-the-unit-condition",
        "fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero",
        "thm-the-join-of-subobjects-is-their-least-upper-bound",
        "thm-the-meet-of-subobjects-is-their-pullback",
        "thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice",
        "thm-the-subobject-lattice-of-an-abelian-category-is-modular",
        "cex-a-subobject-lattice-need-not-be-distributive",
        "thm-second-isomorphism-theorem-in-an-abelian-category",
        "thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection",
        "cor-inverse-image-preserves-meets-and-direct-image-preserves-joins",
        "cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism",
        "thm-zassenhaus-butterfly-lemma-in-an-abelian-category",
        "thm-schreier-refinement-theorem-in-an-abelian-category",
        "thm-jordan-holder-theorem-in-an-abelian-category",
        "thm-length-is-additive-along-a-subobject",
        "thm-objects-of-finite-length-form-an-abelian-subcategory",
        "thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree",
        "thm-a-locally-small-abelian-category-with-a-generator-is-well-powered",
        "cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied",
        "thm-a-generator-detects-equality-of-subobjects",
        "thm-ab5-implies-ab4",
        "thm-module-categories-are-grothendieck-categories",
        "thm-abelian-groups-satisfy-ab4-star",
        "cex-abelian-groups-do-not-satisfy-ab5-star",
        "thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star",
        "cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5",
        "thm-projective-object-characterisations",
        "thm-injective-object-characterisations",
        "thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective",
        "thm-a-direct-summand-of-a-projective-is-projective",
        "thm-module-categories-have-enough-projectives",
        "thm-a-projective-generator-detects-isomorphisms",
        "fs-the-subobject-lattice-of-an-abelian-category-is-distributive",
        "fs-every-abelian-category-has-a-generator",
        "fs-every-object-of-an-abelian-category-has-a-composition-series",
        "fs-ab4-implies-ab5",
        "fs-a-generator-is-the-same-thing-as-a-projective-generator",
        "fs-jordan-holder-needs-a-finiteness-hypothesis-only-on-the-category",
        "ex-the-subobject-lattice-of-a-cyclic-group-of-order-twelve",
        "ex-the-subobject-lattice-of-a-two-dimensional-vector-space",
        "ex-the-galois-connection-of-images-and-preimages-for-a-module-homomorphism",
        "ex-two-composition-series-of-a-module-refined",
        "ex-the-ring-as-a-generator-of-its-module-category",
        "cex-an-abelian-category-with-no-nonzero-projective-object",
        "ex-a-directed-union-of-subgroups-meeting-a-fixed-subgroup",
        "ex-length-computed-for-a-finite-abelian-group",
        "lem-induced-subgraphs-of-cographs-are-cographs",
        "thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement",
        "thm-cographs-are-exactly-the-p-four-free-graphs",
        "thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four",
        "lem-disjoint-union-of-perfect-graphs-is-perfect",
        "lem-complete-connection-of-perfect-graphs-is-perfect",
        "thm-cographs-are-perfect",
        "thm-perfect-graphs-satisfy-kappa-at-least-their-order",
        "cor-perfect-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order",
        "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations",
        "thm-pure-blockades-with-perfect-patterns-contain-large-homogeneous-subblockades",
        "prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical",
        "thm-pure-blockades-with-cograph-patterns-have-additive-kappa",
        "thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades",
        "ex-the-four-cycle-is-a-cograph",
        "ex-the-five-vertex-path-is-perfect-but-not-a-cograph",
        "ex-a-two-block-pure-blockade-has-additive-kappa",
        "ex-a-pure-blockade-with-perfect-but-not-cograph-pattern",
        "ex-a-blockade-rainbow-copy-of-the-four-vertex-path"
      ]
    },
    {
      "id": "citation-fidelity",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 954 citation(s) over 332 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 21.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  thm-isolated-primary-components-are-unique  [L3] -> lem-contraction-recovers-primary-component-after-localising-away-from-radical (searched: Statement)\n    quote: \"Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left $R$-module, let $Q \\subsetneq M$ be a $\\mathfrak p$-primary submodule, and let $S \\subseteq R$ be mul…\"\n\n  thm-second-uniqueness-theorem-primary-decomposition  [L3] -> lem-contraction-recovers-primary-component-after-localising-away-from-radical (searched: Statement)\n    quote: \"Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left $R$-module, let $Q \\subsetneq M$ be a $\\mathfrak p$-primary submodule, and let $S \\subseteq R$ be mul…\"\n\n  thm-adjacency-matrix-powers-count-walks  [F1] -> def-adjacency-matrix-of-a-finite-simple-graph (searched: Definition)\n    quote: \"Let $G=(V,E)$ be a finite simple graph and let $V=\\{v_1,\\dots,v_n\\}$ be an ordered listing of its vertices. The adjacency matrix of $G$ in that vertex order is the matrix $A(G)=(a_…\"\n\n  prop-spectrum-is-an-isomorphism-invariant  [F2] -> def-adjacency-matrix-of-a-finite-simple-graph (searched: Definition)\n    quote: \"Let $G=(V,E)$ be a finite simple graph and let $V=\\{v_1,\\dots,v_n\\}$ be an ordered listing of its vertices. The adjacency matrix of $G$ in that vertex order is the matrix $A(G)=(a_…\"\n\n  prop-spectrum-is-an-isomorphism-invariant  [F3] -> def-graph-spectrum-spectral-radius-and-cospectrality (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph and let $A(G)$ be an adjacency matrix of $G$ ([[def-adjacency-matrix-of-a-finite-simple-graph]]). Because $A(G)$ is real symmetric, the real spectr…\"\n\n  thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric  [F2] -> def-graph-spectrum-spectral-radius-and-cospectrality (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph and let $A(G)$ be an adjacency matrix of $G$ ([[def-adjacency-matrix-of-a-finite-simple-graph]]). Because $A(G)$ is real symmetric, the real spectr…\"\n\n  thm-spectral-radius-is-bounded-by-average-and-maximum-degree  [F2] -> def-graph-spectrum-spectral-radius-and-cospectrality (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph and let $A(G)$ be an adjacency matrix of $G$ ([[def-adjacency-matrix-of-a-finite-simple-graph]]). Because $A(G)$ is real symmetric, the real spectr…\"\n\n  thm-laplacian-is-the-oriented-incidence-product  [F1] -> def-oriented-incidence-matrix-of-a-graph (searched: Definition)\n    quote: \"Let $G=(V,E)$ be a finite simple graph with ordered vertices $V=\\{v_1,\\dots,v_n\\}$ and ordered edges $E=\\{e_1,\\dots,e_m\\}$. Choose, for each edge $e_j=\\{u,w\\}$, one endpoint as its…\"\n\n  thm-laplacian-is-the-oriented-incidence-product  [F2] -> def-laplacian-matrix-of-a-finite-simple-graph (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph with ordered vertex set $V(G)=\\{v_1,\\dots,v_n\\}$, adjacency matrix $A(G)$, and degrees $d_i=\\deg(v_i)$. The diagonal matrix $$D(G):=\\operatorname{d…\"\n\n  thm-laplacian-is-positive-semidefinite-and-annihilates-ones  [F1] -> def-oriented-incidence-matrix-of-a-graph (searched: Definition)\n    quote: \"Let $G=(V,E)$ be a finite simple graph with ordered vertices $V=\\{v_1,\\dots,v_n\\}$ and ordered edges $E=\\{e_1,\\dots,e_m\\}$. Choose, for each edge $e_j=\\{u,w\\}$, one endpoint as its…\"\n\n  thm-laplacian-kernel-dimension-counts-components  [F2] -> def-laplacian-matrix-of-a-finite-simple-graph (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph with ordered vertex set $V(G)=\\{v_1,\\dots,v_n\\}$, adjacency matrix $A(G)$, and degrees $d_i=\\deg(v_i)$. The diagonal matrix $$D(G):=\\operatorname{d…\"\n\n  thm-laplacian-kernel-dimension-counts-components  [L2] -> thm-laplacian-is-positive-semidefinite-and-annihilates-ones (searched: Statement)\n    quote: \"Let $L(G)$ be the Laplacian matrix of a finite simple graph $G$, and let $\\mathbf 1$ be the all-ones column vector of the same size. Then: 1. $x^{\\mathsf T}L(G)x\\ge0$ for every rea…\"\n\n  cor-algebraic-connectivity-characterises-connectedness  [F1] -> def-algebraic-connectivity-of-a-graph (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph with at least two vertices, and let $L(G)$ be its Laplacian matrix. Because $L(G)$ is real symmetric, its eigenvalues are real and may be listed in…\"\n\n  thm-spectrum-of-the-complete-graph  [F2] -> def-graph-spectrum-spectral-radius-and-cospectrality (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph and let $A(G)$ be an adjacency matrix of $G$ ([[def-adjacency-matrix-of-a-finite-simple-graph]]). Because $A(G)$ is real symmetric, the real spectr…\"\n\n  cor-kirchhoff-eigenvalue-product-formula  [F1] -> def-graph-spectrum-spectral-radius-and-cospectrality (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph and let $A(G)$ be an adjacency matrix of $G$ ([[def-adjacency-matrix-of-a-finite-simple-graph]]). Because $A(G)$ is real symmetric, the real spectr…\"\n\n  thm-spectrum-of-the-cycle-graph  [F2] -> def-graph-spectrum-spectral-radius-and-cospectrality (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph and let $A(G)$ be an adjacency matrix of $G$ ([[def-adjacency-matrix-of-a-finite-simple-graph]]). Because $A(G)$ is real symmetric, the real spectr…\"\n\n  thm-spectrum-of-the-complete-bipartite-graph  [F2] -> def-graph-spectrum-spectral-radius-and-cospectrality (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph and let $A(G)$ be an adjacency matrix of $G$ ([[def-adjacency-matrix-of-a-finite-simple-graph]]). Because $A(G)$ is real symmetric, the real spectr…\"\n\n  thm-spectrum-of-the-petersen-graph  [F2] -> def-graph-spectrum-spectral-radius-and-cospectrality (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph and let $A(G)$ be an adjacency matrix of $G$ ([[def-adjacency-matrix-of-a-finite-simple-graph]]). Because $A(G)$ is real symmetric, the real spectr…\"\n\n  cex-cospectral-graphs-need-not-be-isomorphic  [F1] -> def-graph-spectrum-spectral-radius-and-cospectrality (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph and let $A(G)$ be an adjacency matrix of $G$ ([[def-adjacency-matrix-of-a-finite-simple-graph]]). Because $A(G)$ is real symmetric, the real spectr…\"\n\n  fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity  [F1] -> def-algebraic-connectivity-of-a-graph (searched: Definition)\n    quote: \"Let $G$ be a finite simple graph with at least two vertices, and let $L(G)$ be its Laplacian matrix. Because $L(G)$ is real symmetric, its eigenvalues are real and may be listed in…\"\n\n  ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence  [L1] -> ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise (searched: Example)\n    quote: \"On $[0,1]$ with Lebesgue measure, define $$f_{2^k+j}:=\\chi_{I_{k,j}} \\qquad\\text{for } k \\ge 0,\\ 0 \\le j < 2^k,$$ where $I_{k,j}=[j2^{-k},(j+1)2^{-k})$ for $j<2^k-1$ and $I_{k,2^k-…\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": [
        "def-adjacency-matrix-of-a-finite-simple-graph"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-lasker-noether-primary-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-first-uniqueness-theorem-primary-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-isolated-primary-components-are-unique",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-second-uniqueness-theorem-primary-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-radical-ideals-as-intersections-of-minimal-primes-noetherian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-annihilator-colon-ideals-in-a-cyclic-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-redundant-primary-component-deletion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-embedded-component-varies-but-radical-does-not",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-adjacency-matrix-powers-count-walks",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-spectrum-is-an-isomorphism-invariant",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-spectral-radius-is-bounded-by-average-and-maximum-degree",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-laplacian-is-the-oriented-incidence-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-laplacian-is-positive-semidefinite-and-annihilates-ones",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-laplacian-kernel-dimension-counts-components",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-algebraic-connectivity-characterises-connectedness",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-binet-cauchy-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-determinant-of-a-square-matrix",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-spectrum-of-the-complete-graph",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-matrix-tree-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-kirchhoff-eigenvalue-product-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-spectral-gap-implies-connectivity-and-edge-expansion",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-spectrum-of-the-cycle-graph",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-spectrum-of-the-complete-bipartite-graph",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-spectrum-of-the-petersen-graph",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-cospectral-graphs-need-not-be-isomorphic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-composite-bull-free-graphs-have-a-nontrivial-module",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-open-and-closed-in-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-q-and-irrationals-dense-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-mobius-transformations-biholomorphic-sphere",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-real-cross-ratio-circline-characterization",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-mobius-preserves-circlines-and-reflections",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-exhaustion-metric-on-the-unit-disc",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-arzela-ascoli-alone-proves-montel",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-locally-bounded-holomorphic-families-are-locally-equicontinuous",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-montel-theorem-for-holomorphic-functions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-weierstrass-preparation-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-uniqueness-in-weierstrass-preparation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-weierstrass-division-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-weierstrass-quotient-is-a-finite-module",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-prepared-factorizations-and-irreducibility",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-weierstrass-preparation-is-unique-without-the-unit-condition",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-equivalent-hnn-presentation-with-associated-subgroups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-elementary-hnn-reductions-preserve-the-represented-element",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-hnn-normal-form-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-brittons-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-base-group-embeds-in-its-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-stable-letter-has-infinite-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-universal-property-of-an-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-normal-form-for-an-ascending-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-conjugacy-theorem-for-cyclically-reduced-hnn-words",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-base-group-may-collapse-in-an-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-word-containing-a-stable-letter-is-nontrivial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-hnn-normal-form-is-canonical-without-transversals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-hnn-extension-is-an-ascending-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-direct-product-a-times-z-as-an-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-baumslag-solitar-groups-as-hnn-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-ascending-hnn-extension-from-doubling-the-integers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-britton-reduction-of-a-word-with-two-pins",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-hnn-extension-realising-two-conjugate-subgroups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-stable-letter-word-that-is-not-britton-reduced",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-unique-reduced-path-characterisation-of-simplicial-trees",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-path-metric-on-a-tree-is-geodesic-and-integer-valued",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-barycentric-subdivision-removes-edge-inversions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-translation-length-is-conjugacy-invariant-and-homogeneous",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-ping-pong-for-hyperbolic-tree-automorphisms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-published-finite-tree-definition-already-covers-bass-serre-trees",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-tree-action-is-without-edge-inversions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-tree-automorphism-fixes-a-vertex",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-translation-length-is-always-the-distance-from-an-arbitrary-basepoint",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-bi-infinite-line-and-its-translation-action",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-regular-cayley-trees-of-free-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-edge-inversion-and-its-barycentric-subdivision",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-finite-group-fixing-the-centre-of-a-tree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-elliptic-and-hyperbolic-automorphisms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-quotient-of-a-tree-can-have-cycles",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-annihilator-of-a-cyclic-submodule",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-associated-prime-equivalent-cyclic-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-associated-primes-of-a-cyclic-module-are-primes-of-element-annihilators-modulo-ideal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-noetherian-ring-maximal-element-annihilator-exists",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-maximal-element-annihilator-primality-step",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-existence-of-associated-primes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-associated-primes-empty-iff-module-zero-noetherian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-associated-primes-exact-sequence-left-inclusion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-associated-primes-exact-sequence-right-bound",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-associated-primes-in-a-short-exact-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-associated-prime-localises-forward",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-associated-prime-localises-reverse-finite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-associated-primes-localise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-associated-primes-contained-in-support",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-prime-filtration-of-a-finite-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-minimal-support-primes-are-associated",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-support-is-union-of-closures-of-associated-primes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-finiteness-of-associated-primes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-zero-divisor-annihilator-contained-in-associated-prime",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-zero-divisors-on-a-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-radical-of-a-primary-ideal-is-prime",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-primary-submodule-zero-divisor-characterisation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-primary-submodule-characterisations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-intersection-of-primary-submodules-with-same-radical",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-irreducible-submodule-is-primary-noetherian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-primary-decomposition-delete-redundant-components",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-primary-decomposition-combine-equal-radicals",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-associated-primes-from-a-minimal-primary-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-localisation-of-a-primary-submodule",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-contraction-recovers-primary-component-after-localising-away-from-radical",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-finite-prime-avoidance",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-primary-maximal-radical-test",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-primary-localisation-kills-a-component",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-zero-module-associated-prime-boundary",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-augmentation-ideal-has-no-complement-when-char-k-divides-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-sum-of-squares-formula-for-irreducible-degrees",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-class-sums-form-a-basis-of-the-center-of-k-g",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-complex-group-algebra-of-z-mod-three-is-c-times-c-times-c",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-regular-representation-of-z-mod-four-over-c-splits-into-four-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-maschkes-theorem-without-the-characteristic-hypothesis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-not-every-finite-dimensional-algebra-over-a-field-is-semisimple",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-decomposition-into-irreducible-subrepresentations-is-unique",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-sum-of-the-irreducible-degrees-equals-the-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-trace-of-adjacency-power-counts-closed-walks",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-cayley-formula-from-the-matrix-tree-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-adjacency-spectrum-of-c-four",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-laplacian-kernel-of-a-disconnected-graph",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-k-four-has-sixteen-spanning-trees-by-kirchhoff",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-of-k-three-three",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-petersen-graph-spectrum-from-the-two-subset-model",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-matrix-tree-theorem-needs-a-particular-cofactor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-bull-free-graphs-are-complement-invariant",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-perfect-graphs-are-one-narrow",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-prime-bull-free-graphs-are-basic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-basic-bull-free-hole-with-a-complete-outside-vertex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-basic-bull-free-graphs-are-two-narrow",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-alpha-narrowness-is-preserved-under-substitution",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bull-free-graphs-are-two-narrow",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-bull-graph-is-self-complementary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-the-five-cycle-is-bull-free-but-not-perfect",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-k-four-is-bull-free-with-a-nontrivial-module",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-five-cycle-is-not-one-narrow",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-bull-free-graph-is-perfect",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-two-narrow-implies-one-narrow",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-convergence-in-measure-limits-are-unique-almost-everywhere",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-l-one-convergence-implies-convergence-in-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-l-one-convergence-implies-almost-everywhere-convergence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-almost-everywhere-convergence-implies-convergence-in-measure-on-every-measure-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-riesz-subsequence-theorem-for-convergence-in-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-convergence-in-measure-implies-almost-everywhere-convergence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-cauchy-in-measure-converges-in-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-egorovs-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-egorovs-theorem-holds-on-every-measure-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-simple-approximants-converge-uniformly-on-a-large-closed-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-lusins-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-bounded-domain-lusin-core-can-be-chosen-compact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-dominated-families-are-uniformly-integrable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-uniform-integrability-implies-domination-by-an-integrable-function",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-dominated-convergence-is-a-vitali-corollary",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-indicators-of-unit-interval-translates-converge-almost-everywhere-but-not-in-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-indicators-of-unit-interval-translates-show-egorov-needs-finite-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-uniformly-integrable-family-with-no-integrable-majorant",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-stereographic-projection-riemann-sphere-homeomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chordal-metric-induces-sphere-topology",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-mobius-group-and-projective-linear-identification",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-three-point-transitivity-mobius-transformations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cross-ratio-mobius-invariant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-meromorphic-functions-riemann-sphere-are-rational",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-rational-map-fibre-count-degree",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-biholomorphic-self-maps-riemann-sphere-are-mobius",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-entire-biholomorphisms-are-affine",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-automorphisms-punctured-plane",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-classification-mobius-transformations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-cayley-transform-biholomorphism-upper-half-plane-to-disc",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-mobius-transformation-from-three-point-correspondence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-classification-of-z-plus-one-two-z-and-one-over-z",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-stereographic-projection-formulas-on-the-unit-sphere",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-chordal-distance-formula-from-complex-coordinates",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-e-to-z-is-meromorphic-on-c-but-not-on-the-riemann-sphere",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-exponential-is-a-holomorphic-surjection-of-c-onto-c-times-not-an-automorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-a-mobius-map-with-three-fixed-points-may-be-nonidentity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-riemann-sphere-is-homeomorphic-to-the-complex-plane",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-canonical-compact-exhaustion-of-a-plane-domain",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-compact-exhaustion-metric-characterizes-local-uniform-convergence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-compact-open-topology-is-independent-of-exhaustion",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-completeness-of-continuous-functions-for-local-uniform-convergence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-holomorphic-functions-are-closed-for-local-uniform-convergence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-normal-holomorphic-families-are-locally-bounded",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-vitali-porter-convergence-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-derivative-operators-are-continuous-for-local-uniform-convergence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chordal-limit-theorem-for-meromorphic-functions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chordal-arzela-ascoli-criterion-for-meromorphic-families",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-unit-ball-family-is-normal-on-any-domain",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-diagonal-extraction-on-a-disc-for-montels-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-n-times-z-is-not-normal-near-zero",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-normality-means-sequential-limits-stay-inside-the-family",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-a-chordal-limit-of-holomorphic-functions-cannot-be-identically-infinity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-real-jacobian-determinant-of-a-complex-linear-map",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-holomorphic-inverse-function-theorem-several-variables",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-holomorphic-implicit-function-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-holomorphic-constant-rank-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-units-in-the-holomorphic-germ-ring",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-stability-of-slice-zero-count-under-holomorphic-parameters",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-holomorphic-power-sums-of-slice-zeros",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-newton-identities-for-slice-roots",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-finite-modules-over-noetherian-rings-are-noetherian",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-holomorphic-germ-ring-is-noetherian",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-noetherian-domains-are-atomic",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-gauss-lemma-over-a-ufd",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-holomorphic-germ-ring-is-a-ufd",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-zero-set-has-no-isolated-points-in-several-complex-variables",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-riemann-extension-across-hypersurface-zero-sets",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-locally-bounded-meromorphic-poles-are-removable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-z-one-squared-minus-z-two-prepares-to-z-two-minus-z-one-squared",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-z-one-z-two-is-not-regular-in-z-two-at-the-origin",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-shear-makes-z-one-z-two-regular-in-z-two",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-weierstrass-division-of-z-one-by-z-two-squared-minus-z-one",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-unit-circle-is-a-holomorphic-graph-near-zero-one",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-an-everywhere-invertible-complex-jacobian-forces-global-injectivity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-holomorphic-inverse-function-theorem-is-global",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-germ-is-regular-in-the-last-variable-without-a-coordinate-change",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-join-of-subobjects-is-their-least-upper-bound",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-meet-of-subobjects-is-their-pullback",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-subobject-lattice-of-an-abelian-category-is-modular",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-subobject-lattice-need-not-be-distributive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-second-isomorphism-theorem-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-inverse-image-preserves-meets-and-direct-image-preserves-joins",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-zassenhaus-butterfly-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-schreier-refinement-theorem-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-jordan-holder-theorem-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-length-is-additive-along-a-subobject",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-objects-of-finite-length-form-an-abelian-subcategory",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-locally-small-abelian-category-with-a-generator-is-well-powered",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-generator-detects-equality-of-subobjects",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-ab5-implies-ab4",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-module-categories-are-grothendieck-categories",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-abelian-groups-satisfy-ab4-star",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-abelian-groups-do-not-satisfy-ab5-star",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-projective-object-characterisations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-injective-object-characterisations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-direct-summand-of-a-projective-is-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-module-categories-have-enough-projectives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-projective-generator-detects-isomorphisms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-subobject-lattice-of-an-abelian-category-is-distributive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-abelian-category-has-a-generator",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-object-of-an-abelian-category-has-a-composition-series",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-ab4-implies-ab5",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-generator-is-the-same-thing-as-a-projective-generator",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-jordan-holder-needs-a-finiteness-hypothesis-only-on-the-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-subobject-lattice-of-a-cyclic-group-of-order-twelve",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-subobject-lattice-of-a-two-dimensional-vector-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-galois-connection-of-images-and-preimages-for-a-module-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-two-composition-series-of-a-module-refined",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-ring-as-a-generator-of-its-module-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-abelian-category-with-no-nonzero-projective-object",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-directed-union-of-subgroups-meeting-a-fixed-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-length-computed-for-a-finite-abelian-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-induced-subgraphs-of-cographs-are-cographs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-cographs-are-exactly-the-p-four-free-graphs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-disjoint-union-of-perfect-graphs-is-perfect",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-complete-connection-of-perfect-graphs-is-perfect",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-cographs-are-perfect",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-perfect-graphs-satisfy-kappa-at-least-their-order",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-perfect-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-pure-blockades-with-perfect-patterns-contain-large-homogeneous-subblockades",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-pure-blockades-with-cograph-patterns-have-additive-kappa",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-four-cycle-is-a-cograph",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-five-vertex-path-is-perfect-but-not-a-cograph",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-two-block-pure-blockade-has-additive-kappa",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-pure-blockade-with-perfect-but-not-cograph-pattern",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-blockade-rainbow-copy-of-the-four-vertex-path",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-adjacency-matrix-of-a-finite-simple-graph",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "def-determinant-of-a-square-matrix",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "def-open-and-closed-in-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-q-and-irrationals-dense-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-equivalent-hnn-presentation-with-associated-subgroups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-elementary-hnn-reductions-preserve-the-represented-element",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-hnn-normal-form-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-brittons-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-base-group-embeds-in-its-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-stable-letter-has-infinite-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-universal-property-of-an-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-normal-form-for-an-ascending-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-conjugacy-theorem-for-cyclically-reduced-hnn-words",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-base-group-may-collapse-in-an-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-word-containing-a-stable-letter-is-nontrivial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-hnn-normal-form-is-canonical-without-transversals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-hnn-extension-is-an-ascending-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-direct-product-a-times-z-as-an-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-baumslag-solitar-groups-as-hnn-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-ascending-hnn-extension-from-doubling-the-integers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-britton-reduction-of-a-word-with-two-pins",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-hnn-extension-realising-two-conjugate-subgroups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-stable-letter-word-that-is-not-britton-reduced",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-unique-reduced-path-characterisation-of-simplicial-trees",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-path-metric-on-a-tree-is-geodesic-and-integer-valued",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-barycentric-subdivision-removes-edge-inversions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-translation-length-is-conjugacy-invariant-and-homogeneous",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-ping-pong-for-hyperbolic-tree-automorphisms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-published-finite-tree-definition-already-covers-bass-serre-trees",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-tree-action-is-without-edge-inversions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-tree-automorphism-fixes-a-vertex",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-translation-length-is-always-the-distance-from-an-arbitrary-basepoint",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-bi-infinite-line-and-its-translation-action",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-regular-cayley-trees-of-free-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-edge-inversion-and-its-barycentric-subdivision",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-finite-group-fixing-the-centre-of-a-tree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-elliptic-and-hyperbolic-automorphisms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-quotient-of-a-tree-can-have-cycles",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-augmentation-ideal-has-no-complement-when-char-k-divides-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-sum-of-squares-formula-for-irreducible-degrees",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-class-sums-form-a-basis-of-the-center-of-k-g",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-complex-group-algebra-of-z-mod-three-is-c-times-c-times-c",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-regular-representation-of-z-mod-four-over-c-splits-into-four-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-maschkes-theorem-without-the-characteristic-hypothesis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-not-every-finite-dimensional-algebra-over-a-field-is-semisimple",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-decomposition-into-irreducible-subrepresentations-is-unique",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-sum-of-the-irreducible-degrees-equals-the-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-join-of-subobjects-is-their-least-upper-bound",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-meet-of-subobjects-is-their-pullback",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-subobject-lattice-of-an-abelian-category-is-modular",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-subobject-lattice-need-not-be-distributive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-second-isomorphism-theorem-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-inverse-image-preserves-meets-and-direct-image-preserves-joins",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-zassenhaus-butterfly-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-schreier-refinement-theorem-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-jordan-holder-theorem-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-length-is-additive-along-a-subobject",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-objects-of-finite-length-form-an-abelian-subcategory",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-locally-small-abelian-category-with-a-generator-is-well-powered",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-generator-detects-equality-of-subobjects",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-ab5-implies-ab4",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-module-categories-are-grothendieck-categories",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-abelian-groups-satisfy-ab4-star",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-abelian-groups-do-not-satisfy-ab5-star",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-projective-object-characterisations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-injective-object-characterisations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-direct-summand-of-a-projective-is-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-module-categories-have-enough-projectives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-projective-generator-detects-isomorphisms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-subobject-lattice-of-an-abelian-category-is-distributive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-abelian-category-has-a-generator",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-object-of-an-abelian-category-has-a-composition-series",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-ab4-implies-ab5",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-generator-is-the-same-thing-as-a-projective-generator",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-jordan-holder-needs-a-finiteness-hypothesis-only-on-the-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-subobject-lattice-of-a-cyclic-group-of-order-twelve",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-subobject-lattice-of-a-two-dimensional-vector-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-galois-connection-of-images-and-preimages-for-a-module-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-two-composition-series-of-a-module-refined",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-ring-as-a-generator-of-its-module-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-abelian-category-with-no-nonzero-projective-object",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-directed-union-of-subgroups-meeting-a-fixed-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-length-computed-for-a-finite-abelian-group",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 — group **a**, run `frontier-22`

You are the group Alpha for batches **1**, **3**, **8**: 4 A/B pair(s), 8 page(s), 151 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-22-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-22-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `hnn-extensions-and-brittons-lemma` | A | group-theory | 71.011 | `subgroups-of-free-groups-and-schreier-rewriting-examples`, `free-products-and-amalgamation` |
| 1 | `hnn-extensions-and-brittons-lemma-examples` | B | group-theory | 71.012 | `hnn-extensions-and-brittons-lemma` |
| 1 | `simplicial-trees-and-group-actions` | A | group-theory | 302.009 | `amenable-groups-and-folner-criteria-examples` |
| 1 | `simplicial-trees-and-group-actions-examples` | B | group-theory | 302.01 | `simplicial-trees-and-group-actions` |
| 3 | `maschkes-theorem-and-complete-reducibility` | A | abstract-algebra | 145 | `the-group-algebra-and-representations` |
| 3 | `maschkes-theorem-and-complete-reducibility-examples` | B | abstract-algebra | 146 | `maschkes-theorem-and-complete-reducibility` |
| 8 | `subobject-lattices-generators-and-the-grothendieck-axioms` | A | category-theory | 365.017 | `abelian-categories-examples`, `chains-antichains-sperner-and-dilworth` |
| 8 | `subobject-lattices-generators-and-the-grothendieck-axioms-examples` | B | category-theory | 365.018 | `subobject-lattices-generators-and-the-grothendieck-axioms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `hnn-extensions-and-brittons-lemma` — Hnn Extensions and Brittons Lemma (23 item(s))

- `def-hnn-extension-and-stable-letter` · definition — An HNN extension with its stable letter
- `lem-equivalent-hnn-presentation-with-associated-subgroups` · lemma — The edge-group presentation is equivalent to the associated-subgroup presentation
- `def-hnn-word-pin-and-britton-reduced-word` · definition — HNN words, pins, and Britton-reduced words
- `lem-elementary-hnn-reductions-preserve-the-represented-element` · lemma — Elementary HNN reductions preserve the represented element
- `def-choice-of-transversals-for-hnn-normal-forms` · definition — The transversal data used for HNN normal forms
- `thm-hnn-normal-form-theorem` · theorem — Normal forms in an HNN extension are unique relative to chosen transversals
- `thm-brittons-lemma` · theorem — Britton's lemma
- `cor-the-base-group-embeds-in-its-hnn-extension` · corollary — The base group embeds in its HNN extension
- `cor-the-stable-letter-has-infinite-order` · corollary — The stable letter has infinite order
- `def-associated-homomorphism-to-the-integers` · definition — The associated homomorphism from an HNN extension to the integers
- `prop-universal-property-of-an-hnn-extension` · proposition — The universal property of an HNN extension
- `def-ascending-hnn-extension` · definition — Ascending HNN extensions of injective endomorphisms
- `prop-normal-form-for-an-ascending-hnn-extension` · proposition — Ascending HNN extensions admit the one-sided normal form
- `rem-higman-neumann-neumann-embedding-theorem` · remark — Higman-Neumann-Neumann: every countable group embeds in a two-generator group
- `def-cyclically-britton-reduced-hnn-word` · definition — Cyclically Britton-reduced HNN words
- `lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word` · lemma — Every HNN conjugacy class contains a cyclically Britton-reduced representative
- `lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate` · lemma — Cyclic permutations of a cyclically Britton-reduced HNN word stay in the same conjugacy class
- `lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy` · lemma — Conjugacy between cyclically Britton-reduced HNN words reduces to base-group conjugacy after cyclic permutation
- `thm-conjugacy-theorem-for-cyclically-reduced-hnn-words` · theorem — Collins' conjugacy theorem for cyclically reduced HNN words
- `fs-the-base-group-may-collapse-in-an-hnn-extension` · false-statement — FALSE: the base group may collapse in an HNN extension
- `fs-every-word-containing-a-stable-letter-is-nontrivial` · false-statement — FALSE: every word containing a stable letter is nontrivial
- `fs-hnn-normal-form-is-canonical-without-transversals` · false-statement — FALSE: HNN normal form is canonical without choosing transversals
- `fs-every-hnn-extension-is-an-ascending-hnn-extension` · false-statement — FALSE: every HNN extension is an ascending HNN extension

### `hnn-extensions-and-brittons-lemma-examples` — Hnn Extensions and Brittons Lemma - Examples (6 item(s))

- `ex-the-direct-product-a-times-z-as-an-hnn-extension` · example — The direct product A x Z as an HNN extension
- `ex-baumslag-solitar-groups-as-hnn-extensions` · example — Baumslag-Solitar groups as HNN extensions
- `ex-an-ascending-hnn-extension-from-doubling-the-integers` · example — The doubling endomorphism of Z gives an ascending HNN extension
- `ex-britton-reduction-of-a-word-with-two-pins` · example — Britton reduction of a word with two pins
- `ex-hnn-extension-realising-two-conjugate-subgroups` · example — An HNN extension realising two conjugate subgroups
- `cex-a-stable-letter-word-that-is-not-britton-reduced` · counterexample — A word containing a stable letter need not be Britton-reduced

### `simplicial-trees-and-group-actions` — Simplicial Trees and Group Actions (25 item(s))

- `def-oriented-graph-with-edge-reversal` · definition — An oriented graph with edge reversal
- `def-simplicial-path-reduced-path-cycle-and-connectedness` · definition — Finite simplicial paths, reduced paths, cycles, and connectedness
- `def-simplicial-tree` · definition — A simplicial tree
- `thm-unique-reduced-path-characterisation-of-simplicial-trees` · theorem — A simplicial graph is a tree exactly when every two vertices are joined by a unique reduced path
- `def-simplicial-path-metric` · definition — The simplicial path metric on the vertices of a tree
- `lem-path-metric-on-a-tree-is-geodesic-and-integer-valued` · lemma — The path metric on a simplicial tree is geodesic and integer-valued
- `thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion` · theorem — Finite simplicial trees agree with the published finite-tree notion
- `def-graph-automorphism-and-group-action-on-a-simplicial-graph` · definition — Graph automorphisms and group actions on a simplicial graph
- `def-edge-inversion-and-action-without-inversions` · definition — Edge inversions and actions without inversions
- `lem-barycentric-subdivision-removes-edge-inversions` · lemma — Barycentric subdivision removes edge inversions while preserving tree actions
- `def-quotient-graph-of-an-action-without-inversions` · definition — The quotient graph of an action without inversions
- `lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions` · lemma — Vertex and edge stabilizers fit together by incidence inclusions
- `def-fixed-subtree-and-minimal-invariant-subtree` · definition — Fixed subtrees and minimal invariant subtrees
- `lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree` · lemma — The nonempty fixed-vertex set of a tree automorphism is a subtree
- `def-translation-length-of-a-tree-automorphism-without-inversions` · definition — The translation length of a tree automorphism without inversions
- `thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms` · theorem — A tree automorphism without inversions is elliptic or hyperbolic
- `cor-translation-length-is-conjugacy-invariant-and-homogeneous` · corollary — Translation length is conjugacy-invariant and homogeneous
- `lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision` · lemma — Finite groups acting on trees have a global fixed vertex after barycentric subdivision
- `cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free` · corollary — Groups acting freely without inversions on trees are torsion-free
- `thm-ping-pong-for-hyperbolic-tree-automorphisms` · theorem — Hyperbolic tree automorphisms satisfy a ping-pong criterion for freeness
- `fs-the-published-finite-tree-definition-already-covers-bass-serre-trees` · false-statement — FALSE: the published finite-tree definition already covers Bass-Serre trees
- `fs-every-tree-action-is-without-edge-inversions` · false-statement — FALSE: every tree action is without edge inversions
- `fs-every-tree-automorphism-fixes-a-vertex` · false-statement — FALSE: every tree automorphism fixes a vertex
- `fs-translation-length-is-always-the-distance-from-an-arbitrary-basepoint` · false-statement — FALSE: translation length is always the distance from an arbitrary basepoint
- `fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree` · false-statement — FALSE: a quotient of a tree by a group action is always a tree

### `simplicial-trees-and-group-actions-examples` — Simplicial Trees and Group Actions - Examples (6 item(s))

- `ex-the-bi-infinite-line-and-its-translation-action` · example — The bi-infinite line with its translation action
- `ex-regular-cayley-trees-of-free-groups` · example — Regular Cayley trees of free groups
- `ex-an-edge-inversion-and-its-barycentric-subdivision` · example — An edge inversion and its barycentric subdivision
- `ex-a-finite-group-fixing-the-centre-of-a-tree` · example — A finite group fixes the centre of a finite tree
- `ex-elliptic-and-hyperbolic-automorphisms` · example — Elliptic and hyperbolic automorphisms of simplicial trees
- `cex-the-quotient-of-a-tree-can-have-cycles` · counterexample — The quotient of a tree can have cycles

### `maschkes-theorem-and-complete-reducibility` — Maschke's Theorem, Complete Reducibility and the Structure of $k[G]$ (19 item(s))

- `def-completely-reducible-representation` · definition — A completely reducible representation as a finite direct sum of irreducible subrepresentations
- `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order` · theorem — Maschke's theorem for finite groups over fields whose characteristic does not divide $|G|$
- `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order` · corollary — If $\operatorname{char} k \nmid |G|$, every finite-dimensional representation of $G$ is completely reducible
- `cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order` · corollary — If $\operatorname{char} k \nmid |G|$, then $k[G]$ is a semisimple ring
- `thm-augmentation-ideal-has-no-complement-when-char-k-divides-group-order` · theorem — If $\operatorname{char} k \mid |G|$, the augmentation ideal of $k[G]$ has no $k[G]$-module complement in the regular representation
- `cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order` · corollary — If $\operatorname{char} k \mid |G|$, then $k[G]$ is not semisimple
- `def-isotypic-component-of-a-completely-reducible-representation` · definition — The isotypic component of a completely reducible representation
- `thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique` · theorem — The isotypic decomposition of a completely reducible representation is unique
- `rem-decomposition-into-irreducible-summands-need-not-be-unique` · remark — A decomposition into irreducible summands need not be unique even when the isotypic decomposition is
- `def-center-of-the-group-algebra` · definition — The center $Z(k[G])$ of the group algebra
- `def-class-sum-of-a-conjugacy-class-in-k-g` · definition — The class sum $\widehat C$ of a conjugacy class $C$
- `thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field` · theorem — If $k$ is algebraically closed and $\operatorname{char} k \nmid |G|$, then $k[G]\cong\prod_{i=1}^r M_{n_i}(k)$
- `thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree` · theorem — If $k$ is algebraically closed and $\operatorname{char} k \nmid |G|$, there are finitely many irreducible representations, and each occurs in the regular representation with multiplicity equal to its degree
- `cor-sum-of-squares-formula-for-irreducible-degrees` · corollary — If $k$ is algebraically closed and $\operatorname{char} k \nmid |G|$, then $\sum_i (\dim_k V_i)^2=|G|$
- `lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices` · lemma — The center of $M_n(k)$ consists of the scalar matrices
- `thm-class-sums-form-a-basis-of-the-center-of-k-g` · theorem — For a finite group, the class sums form a basis of $Z(k[G])$
- `cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes` · corollary — The dimension of $Z(k[G])$ is the number of conjugacy classes of $G$
- `thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order` · theorem — If $k$ is algebraically closed and $\operatorname{char} k \nmid |G|$, the number of irreducible representations of $G$ equals the number of conjugacy classes
- `cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero` · corollary — Over an algebraically closed field of characteristic $0$, every element of finite order acts diagonalisably in a finite-dimensional representation

### `maschkes-theorem-and-complete-reducibility-examples` — Maschke's Theorem, Complete Reducibility and the Structure of $k[G]$ — Examples (10 item(s))

- `ex-the-complex-group-algebra-of-z-mod-three-is-c-times-c-times-c` · example — $\mathbb C[\mathbb Z/3\mathbb Z]\cong\mathbb C\times\mathbb C\times\mathbb C$
- `ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c` · example — $\mathbb C[S_3]\cong\mathbb C\times\mathbb C\times M_2(\mathbb C)$
- `ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition` · example — $\mathbb C[Q_8]$ and $\mathbb C[\operatorname{Dih}(C_4)]$ both decompose as $\mathbb C^4\times M_2(\mathbb C)$
- `ex-the-regular-representation-of-z-mod-four-over-c-splits-into-four-characters` · example — The regular representation of $\mathbb Z/4\mathbb Z$ over $\mathbb C$ splits into its four characters
- `ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component` · example — The two-dimensional trivial representation of $C_2$ has many irreducible splittings but one isotypic component
- `fs-maschkes-theorem-without-the-characteristic-hypothesis` · false-statement — False statement: Maschke's theorem holds over every field
- `fs-not-every-finite-dimensional-algebra-over-a-field-is-semisimple` · false-statement — False statement: every finite-dimensional algebra over a field is semisimple
- `fs-decomposition-into-irreducible-subrepresentations-is-unique` · false-statement — False statement: a completely reducible representation has a unique decomposition into irreducible subrepresentations
- `fs-the-sum-of-the-irreducible-degrees-equals-the-group-order` · false-statement — False statement: the sum of the irreducible degrees equals $|G|$
- `fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r` · false-statement — False statement: a group with $r$ conjugacy classes has an irreducible representation of degree $r$

### `subobject-lattices-generators-and-the-grothendieck-axioms` — Subobject Lattices Generators and the Grothendieck Axioms (54 item(s))

- `def-modular-lattice` · definition — Modular lattice
- `def-the-join-of-subobjects-in-an-abelian-category` · definition — The join of two subobjects in an abelian category
- `thm-the-join-of-subobjects-is-their-least-upper-bound` · theorem — The join of two subobjects is their least upper bound
- `thm-the-meet-of-subobjects-is-their-pullback` · theorem — The meet of two subobjects is their pullback
- `thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice` · theorem — The subobjects of an object in an abelian category form a lattice
- `thm-the-subobject-lattice-of-an-abelian-category-is-modular` · theorem — The subobject lattice of an abelian category is modular
- `rem-the-published-modular-law-for-subgroups-is-the-instance` · remark — The published subgroup modular law is the group instance
- `cex-a-subobject-lattice-need-not-be-distributive` · counterexample — A subobject lattice of an abelian category need not be distributive
- `thm-second-isomorphism-theorem-in-an-abelian-category` · theorem — Second isomorphism theorem in an abelian category
- `def-the-direct-image-and-inverse-image-of-a-subobject` · definition — Direct and inverse image of a subobject
- `thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection` · theorem — Direct and inverse image of subobjects form a Galois connection
- `cor-inverse-image-preserves-meets-and-direct-image-preserves-joins` · corollary — Inverse image preserves meets and direct image preserves joins
- `cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism` · corollary — Kernel and image are inverse and direct images along a morphism
- `def-simple-object` · definition — Simple object
- `def-composition-series-and-composition-factors-of-an-object` · definition — Composition series and composition factors of an object
- `thm-zassenhaus-butterfly-lemma-in-an-abelian-category` · theorem — Zassenhaus butterfly lemma in an abelian category
- `thm-schreier-refinement-theorem-in-an-abelian-category` · theorem — Schreier refinement theorem in an abelian category
- `thm-jordan-holder-theorem-in-an-abelian-category` · theorem — Jordan-Hölder theorem in an abelian category
- `def-object-of-finite-length` · definition — Object of finite length
- `thm-length-is-additive-along-a-subobject` · theorem — Length is additive along a subobject
- `thm-objects-of-finite-length-form-an-abelian-subcategory` · theorem — Objects of finite length form an abelian subcategory
- `rem-the-published-group-development-is-the-instance` · remark — The published group composition-series development is the instance
- `def-generator-and-cogenerator-of-a-category` · definition — Generator and cogenerator of a category
- `def-the-axioms-ab3-and-ab3-star` · definition — The axioms AB3 and AB3*
- `thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree` · theorem — The cancellation and epimorphism descriptions of a generator agree
- `thm-a-locally-small-abelian-category-with-a-generator-is-well-powered` · theorem — A locally small abelian category with a generator is well-powered
- `rem-generator-separator-and-the-three-inequivalent-looking-definitions` · remark — Generator, separator, and the three inequivalent-looking definitions
- `cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied` · corollary — A cocomplete locally small abelian category with a generator satisfies the SAFT hypotheses dually, once representatives are supplied
- `thm-a-generator-detects-equality-of-subobjects` · theorem — A generator detects equality of subobjects
- `def-the-axioms-ab4-and-ab4-star` · definition — The axioms AB4 and AB4*
- `def-the-axioms-ab5-and-ab5-star` · definition — The axioms AB5 and AB5*
- `thm-ab5-implies-ab4` · theorem — AB5 implies AB4
- `def-grothendieck-category` · definition — Grothendieck category
- `thm-module-categories-are-grothendieck-categories` · theorem — Module categories are Grothendieck categories
- `thm-abelian-groups-satisfy-ab4-star` · theorem — Abelian groups satisfy AB4*
- `cex-abelian-groups-do-not-satisfy-ab5-star` · counterexample — Abelian groups do not satisfy AB5*
- `thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star` · theorem — A nonzero abelian category cannot satisfy both AB5 and AB5*
- `cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5` · counterexample — The opposite of abelian groups does not satisfy AB5
- `def-projective-object` · definition — Projective object
- `thm-projective-object-characterisations` · theorem — Characterisations of projective objects
- `def-injective-object` · definition — Injective object
- `thm-injective-object-characterisations` · theorem — Characterisations of injective objects
- `thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective` · theorem — A coproduct of projectives is projective, and a product of injectives is injective
- `thm-a-direct-summand-of-a-projective-is-projective` · theorem — A direct summand of a projective is projective
- `def-a-category-with-enough-projectives-and-with-enough-injectives` · definition — A category with enough projectives and enough injectives
- `thm-module-categories-have-enough-projectives` · theorem — Module categories have enough projectives
- `rem-module-categories-have-enough-injectives-is-already-published` · remark — Module categories have enough injectives is already published
- `thm-a-projective-generator-detects-isomorphisms` · theorem — A projective generator detects isomorphisms
- `fs-the-subobject-lattice-of-an-abelian-category-is-distributive` · false-statement — FALSE: the subobject lattice of an abelian category is distributive
- `fs-every-abelian-category-has-a-generator` · false-statement — FALSE: every abelian category has a generator
- `fs-every-object-of-an-abelian-category-has-a-composition-series` · false-statement — FALSE: every object of an abelian category has a composition series
- `fs-ab4-implies-ab5` · false-statement — FALSE: AB4 implies AB5
- `fs-a-generator-is-the-same-thing-as-a-projective-generator` · false-statement — FALSE: a generator is the same thing as a projective generator
- `fs-jordan-holder-needs-a-finiteness-hypothesis-only-on-the-category` · false-statement — FALSE: Jordan-Hölder needs only a finiteness hypothesis on the category

### `subobject-lattices-generators-and-the-grothendieck-axioms-examples` — Subobject Lattices Generators and the Grothendieck Axioms — Examples (8 item(s))

- `ex-the-subobject-lattice-of-a-cyclic-group-of-order-twelve` · example — The subobject lattice of a cyclic group of order twelve
- `ex-the-subobject-lattice-of-a-two-dimensional-vector-space` · example — The subobject lattice of a two-dimensional vector space
- `ex-the-galois-connection-of-images-and-preimages-for-a-module-homomorphism` · example — The Galois connection of images and preimages for a module homomorphism
- `ex-two-composition-series-of-a-module-refined` · example — Two composition series of a module refined
- `ex-the-ring-as-a-generator-of-its-module-category` · example — The ring as a generator of its module category
- `cex-an-abelian-category-with-no-nonzero-projective-object` · counterexample — The category of finite abelian groups has no nonzero projective object
- `ex-a-directed-union-of-subgroups-meeting-a-fixed-subgroup` · example — A directed union of subgroups meeting a fixed subgroup
- `ex-length-computed-for-a-finite-abelian-group` · example — Length computed for a finite abelian group

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
`research/frontier-22-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-22`

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
