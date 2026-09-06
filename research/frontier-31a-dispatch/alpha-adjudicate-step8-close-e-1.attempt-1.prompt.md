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
group work, `research/frontier-31a-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
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

run: frontier-31a
role: alpha-adjudicate
label: step8-close-e-1

# Exact Step-8 repair envelope — 8-close, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-31a",
  "stage": "8-close",
  "round": 1,
  "mode": "close",
  "group": "e",
  "full_evidence": "research/frontier-31a-8-close-repair-evidence-1-3eaa01a3ee60a3c3d98f0f29f88985b1ecf8b5bb9ff764f0b01fc9fe68e01fe1.json",
  "full_evidence_sha256": "3eaa01a3ee60a3c3d98f0f29f88985b1ecf8b5bb9ff764f0b01fc9fe68e01fe1",
  "failures": [
    {
      "id": "splice-verify",
      "stage": "8-close",
      "why": "A licensed in-flight change is applied with: splice-plan --run frontier-31a --batch <i> --update",
      "output": "splice-plan: 14 page(s) where the plan and the batch manifest disagree\n  schur-multipliers-and-universal-central-extensions (frontier-31a-batch-1.pages.json): same ids, 1 item object(s) changed (fs-the-universal-coefficient-short-exact-sequence-splits-naturally) — re-splice to propagate\n  group-cohomology-as-a-derived-functor (frontier-31a-batch-10.pages.json): same ids, 1 item object(s) changed (def-restriction-and-corestriction-on-group-cohomology) — re-splice to propagate\n  relative-homology-excision-and-mayer-vietoris (frontier-31a-batch-12.pages.json): same ids, 3 item object(s) changed (thm-cover-small-inclusion-is-a-chain-homotopy-equivalence, thm-naturality-of-singular-mayer-vietoris, cor-suspension-isomorphism-in-reduced-singular-homology) — re-splice to propagate\n  the-structural-criterion-for-property-star-examples (frontier-31a-batch-15.pages.json): same ids, 1 item object(s) changed (ex-a-large-y-part-in-a-structural-comb-partition) — re-splice to propagate\n  the-exterior-derivative-and-cartan-calculus (frontier-31a-batch-17.pages.json): same ids, 2 item object(s) changed (thm-the-exterior-derivative-is-a-graded-derivation, prop-the-exterior-derivative-commutes-with-restriction) — re-splice to propagate\n  time-and-space-hierarchy-theorems (frontier-31a-batch-21.pages.json): same ids, 1 item object(s) changed (prop-hierarchy-theorems-do-not-separate-p-from-np) — re-splice to propagate\n  logarithmic-space-nl-and-reachability (frontier-31a-batch-22.pages.json): same ids, 1 item object(s) changed (thm-immerman-szelepcsenyi-nl-equals-conl) — re-splice to propagate\n  geometric-hahn-banach-and-convex-separation (frontier-31a-batch-3.pages.json): same ids, 2 item object(s) changed (def-continuous-annihilator-of-a-subspace, def-linear-hyperplane) — re-splice to propagate\n  infinite-product-measures-and-kolmogorov-extension-examples (frontier-31a-batch-4.pages.json): same ids, 1 item object(s) changed (ex-iid-sequence-with-a-prescribed-law) — re-splice to propagate\n  ext-and-balanced-resolutions (frontier-31a-batch-8.pages.json): same ids, 5 item object(s) changed (prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable, thm-long-exact-ext-sequence-in-the-first-variable, prop-the-two-ext-long-exact-sequences-agree-under-balance, …) — re-splice to propagate\n  yoneda-extensions-and-homological-dimension (frontier-31a-batch-8.pages.json): same ids, 3 item object(s) changed (cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set, thm-yoneda-product-is-associative-and-unital, thm-higher-yoneda-ext-agrees-with-derived-ext) — re-splice to propagate\n  yoneda-extensions-and-homological-dimension-examples (frontier-31a-batch-8.pages.json): same ids, 1 item object(s) changed (ex-baer-sum-of-two-extensions-of-cyclic-groups) — re-splice to propagate\n  tor-flatness-and-global-dimension (frontier-31a-batch-9.pages.json): same ids, 4 item object(s) changed (thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic, thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes, thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes, …) — re-splice to propagate\n  universal-coefficients-and-kunneth-theorems (frontier-31a-batch-9.pages.json): same ids, 2 item object(s) changed (thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally, lem-the-kunneth-tor-map) — re-splice to propagate\nA licensed in-flight change is applied with: splice-plan --run frontier-31a --batch <i> --update\n",
      "named_ids": []
    },
    {
      "id": "proof-contract",
      "stage": "8-close",
      "why": "ERROR citation-quote-mismatch [thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two]: L2 quote does not occur in thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally's Statement",
      "output": "proof-contract: 151 error(s), 0 warning(s), 704/704 item(s) checked",
      "named_ids": []
    },
    {
      "id": "risk-report",
      "stage": "8-close",
      "why": "ERROR risk-review-missing [fs-the-universal-coefficient-short-exact-sequence-splits-naturally]: fs-the-universal-coefficient-short-exact-sequence-splits-naturally is high risk and lacks a complete Alpha risk_review",
      "output": "ORDINARY 2 [thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant] 2:boundary-sensitive language\nMODERATE 4 [cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-absolutely-continuous-functions-have-integrable-derivatives] 2:5 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [thm-absolutely-continuous-functions-have-luzin-property-n] 2:4 declared dependencies; 2:boundary-sensitive language\nHIGH 6 [lem-luzin-property-n-gives-an-integral-growth-estimate] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-banach-zarecki-characterisation-of-absolute-continuity] 3:9 declared dependencies; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nHIGH 6 [thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity] 2:6 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous] 2:boundary-sensitive language\nMODERATE 4 [thm-integration-by-parts-for-absolutely-continuous-functions] 2:5 declared dependencies; 2:boundary-sensitive language\nHIGH 7 [thm-change-of-variables-for-an-increasing-absolutely-continuous-function] 3:8 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition] 3:7 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-total-variation-function-of-an-absolutely-continuous-function] 2:6 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-lipschitz-characterisation-within-absolutely-continuous-functions] 2:4 declared dependencies; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nORDINARY 0 [thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous] no signals\nORDINARY 0 [thm-an-absolutely-continuous-function-after-a-monotone-lipschitz-function-is-absolutely-continuous] no signals\nMODERATE 4 [cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous] 2:6 declared dependencies; 2:analytic limiting/completeness language\nORDINARY 2 [fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous] 2:boundary-sensitive language\nORDINARY 2 [fs-continuity-almost-everywhere-differentiability-and-an-integrable-derivative-imply-newton-leibniz] 2:boundary-sensitive language\nORDINARY 0 [fs-absolute-continuity-is-preserved-under-composition] no signals\nORDINARY 0 [fs-every-absolutely-continuous-function-is-lipschitz] no signals\nORDINARY 2 [fs-luzin-property-n-implies-absolute-continuity] 2:boundary-sensitive language\nORDINARY 2 [cex-x-squared-sine-one-over-x-squared-is-differentiable-everywhere-but-not-absolutely-continuous] 2:quotient or equivalence-class construction\nHIGH 6 [ex-integration-by-parts-for-absolutely-continuous-functions] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set] 2:5 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-the-cantor-function-fails-luzin-property-n] 2:boundary-sensitive language\nORDINARY 0 [cex-the-classical-composition-of-absolutely-continuous-functions-is-not-absolutely-continuous] no signals\nORDINARY 2 [cex-luzin-property-n-does-not-imply-absolute-continuity] 2:boundary-sensitive language\nORDINARY 2 [lem-absolutely-summable-fourier-coefficients-give-uniform-convergence] 2:analytic limiting/completeness language\nORDINARY 2 [thm-wiener-algebra-is-a-banach-algebra] 2:analytic limiting/completeness language\nORDINARY 2 [lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz] 2:analytic limiting/completeness language\nMODERATE 4 [lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [lem-holder-fourier-coefficients-have-weighted-ltwo-decay] 2:analytic limiting/completeness language\nMODERATE 3 [thm-bernstein-absolute-convergence-theorem] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 0 [lem-fourier-coefficients-of-a-periodic-weak-derivative] no signals\nHIGH 5 [cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-wiener-lemma-for-absolutely-convergent-fourier-series] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [cor-holomorphic-functional-calculus-in-the-wiener-algebra] 3:7 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-a-trigonometric-polynomial-in-the-wiener-algebra] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-an-absolutely-convergent-non-smooth-fourier-series] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [cex-continuity-does-not-imply-absolute-fourier-convergence] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [cex-the-bernstein-holder-one-half-endpoint-can-fail] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cex-wiener-inversion-needs-nonvanishing] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-dirichlet-character-primitive-induction] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 7 [thm-induced-dirichlet-l-finite-euler-factors] 1:2 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [lem-primitive-gauss-sum-twist] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-primitive-gauss-sum-norm] 2:quotient or equivalence-class construction\nMODERATE 4 [lem-fourier-transform-of-a-gaussian] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [thm-dirac-comb-is-fourier-invariant] 2:analytic limiting/completeness language\nMODERATE 3 [thm-twisted-poisson-summation] 1:2 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 11 [thm-primitive-dirichlet-l-analytic-continuation] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [thm-primitive-dirichlet-l-functional-equation] 2:5 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-dirichlet-l-root-number-unit-modulus] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [cor-dirichlet-l-trivial-zeros] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [ex-primitive-ancestors-of-small-characters] 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-finite-euler-factors-under-character-induction] 2:quotient or equivalence-class construction\nHIGH 5 [ex-gauss-sum-for-chi-four] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-even-and-odd-character-theta-kernels] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-trivial-zeros-of-a-dirichlet-l-function] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [cex-a-character-modulus-need-not-be-its-conductor] 1:2 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 0 [cex-gauss-sum-sign-is-not-canonical-without-conventions] no signals\nHIGH 7 [cor-algebraic-integer-minimal-polynomial-criterion] 3:biconditional / both-direction claim; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 2 [thm-clearing-denominators-for-an-algebraic-number] 2:induction, recursion, or minimality\nMODERATE 3 [cor-trace-and-norm-of-an-algebraic-integer] 1:2 cited facts; 2:induction, recursion, or minimality\nHIGH 7 [thm-ring-of-integers-free-of-rank-degree] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-orders-have-integral-bases-and-finite-index] 2:4 declared dependencies; 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 0 [lem-discriminant-change-of-basis] no signals\nORDINARY 1 [thm-discriminant-as-an-embedding-determinant] 1:2 cited facts\nHIGH 5 [thm-number-field-discriminant-is-well-defined-and-nonzero] 2:4 declared dependencies; 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [thm-power-basis-discriminant-is-polynomial-discriminant] 2:induction, recursion, or minimality\nMODERATE 3 [cor-order-index-discriminant-formula] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [cor-squarefree-power-basis-discriminant-gives-ring-of-integers] 2:analytic limiting/completeness language\nORDINARY 2 [thm-ring-of-integers-of-a-quadratic-field] 2:analytic limiting/completeness language\nORDINARY 2 [cor-discriminant-of-a-quadratic-field] 2:analytic limiting/completeness language\nHIGH 6 [cor-ring-of-integers-is-a-dedekind-domain] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 4 [ex-ring-of-integers-of-q] 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 5 [ex-gaussian-and-eisenstein-integer-bases] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [ex-ring-of-integers-of-q-sqrt-five] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [ex-pure-cubic-power-basis] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nMODERATE 3 [ex-nonmaximal-quadratic-order] 1:3 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [ex-index-obstructs-naive-polynomial-factorization] 1:2 cited facts; 2:quotient or equivalence-class construction\nrisk-report: 15 error(s), 704 item(s) routed",
      "named_ids": [
        "thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant",
        "cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous",
        "thm-absolutely-continuous-functions-have-integrable-derivatives",
        "thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions",
        "thm-absolutely-continuous-functions-have-luzin-property-n",
        "lem-luzin-property-n-gives-an-integral-growth-estimate",
        "thm-banach-zarecki-characterisation-of-absolute-continuity",
        "thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity",
        "lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous",
        "thm-integration-by-parts-for-absolutely-continuous-functions",
        "thm-change-of-variables-for-an-increasing-absolutely-continuous-function",
        "lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition",
        "thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis",
        "thm-total-variation-function-of-an-absolutely-continuous-function",
        "thm-lipschitz-characterisation-within-absolutely-continuous-functions",
        "thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous",
        "thm-an-absolutely-continuous-function-after-a-monotone-lipschitz-function-is-absolutely-continuous",
        "cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous",
        "fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous",
        "fs-continuity-almost-everywhere-differentiability-and-an-integrable-derivative-imply-newton-leibniz",
        "fs-absolute-continuity-is-preserved-under-composition",
        "fs-every-absolutely-continuous-function-is-lipschitz",
        "fs-luzin-property-n-implies-absolute-continuity",
        "cex-x-squared-sine-one-over-x-squared-is-differentiable-everywhere-but-not-absolutely-continuous",
        "ex-integration-by-parts-for-absolutely-continuous-functions",
        "ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set",
        "cex-the-cantor-function-fails-luzin-property-n",
        "cex-the-classical-composition-of-absolutely-continuous-functions-is-not-absolutely-continuous",
        "cex-luzin-property-n-does-not-imply-absolute-continuity",
        "lem-absolutely-summable-fourier-coefficients-give-uniform-convergence",
        "thm-wiener-algebra-is-a-banach-algebra",
        "lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz",
        "lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions",
        "lem-holder-fourier-coefficients-have-weighted-ltwo-decay",
        "thm-bernstein-absolute-convergence-theorem",
        "lem-fourier-coefficients-of-a-periodic-weak-derivative",
        "cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series",
        "thm-wiener-lemma-for-absolutely-convergent-fourier-series",
        "cor-holomorphic-functional-calculus-in-the-wiener-algebra",
        "ex-a-trigonometric-polynomial-in-the-wiener-algebra",
        "ex-an-absolutely-convergent-non-smooth-fourier-series",
        "cex-continuity-does-not-imply-absolute-fourier-convergence",
        "cex-the-bernstein-holder-one-half-endpoint-can-fail",
        "cex-wiener-inversion-needs-nonvanishing",
        "thm-dirichlet-character-primitive-induction",
        "thm-induced-dirichlet-l-finite-euler-factors",
        "lem-primitive-gauss-sum-twist",
        "thm-primitive-gauss-sum-norm",
        "lem-fourier-transform-of-a-gaussian",
        "thm-dirac-comb-is-fourier-invariant",
        "thm-twisted-poisson-summation",
        "thm-primitive-dirichlet-l-analytic-continuation",
        "thm-primitive-dirichlet-l-functional-equation",
        "cor-dirichlet-l-root-number-unit-modulus",
        "cor-dirichlet-l-trivial-zeros",
        "ex-primitive-ancestors-of-small-characters",
        "ex-finite-euler-factors-under-character-induction",
        "ex-gauss-sum-for-chi-four",
        "ex-even-and-odd-character-theta-kernels",
        "ex-trivial-zeros-of-a-dirichlet-l-function",
        "cex-a-character-modulus-need-not-be-its-conductor",
        "cex-gauss-sum-sign-is-not-canonical-without-conventions",
        "cor-algebraic-integer-minimal-polynomial-criterion",
        "thm-clearing-denominators-for-an-algebraic-number",
        "cor-trace-and-norm-of-an-algebraic-integer",
        "thm-ring-of-integers-free-of-rank-degree",
        "thm-orders-have-integral-bases-and-finite-index",
        "lem-discriminant-change-of-basis",
        "thm-discriminant-as-an-embedding-determinant",
        "thm-number-field-discriminant-is-well-defined-and-nonzero",
        "thm-power-basis-discriminant-is-polynomial-discriminant",
        "cor-order-index-discriminant-formula",
        "cor-squarefree-power-basis-discriminant-gives-ring-of-integers",
        "thm-ring-of-integers-of-a-quadratic-field",
        "cor-discriminant-of-a-quadratic-field",
        "cor-ring-of-integers-is-a-dedekind-domain",
        "ex-ring-of-integers-of-q",
        "ex-gaussian-and-eisenstein-integer-bases",
        "ex-ring-of-integers-of-q-sqrt-five",
        "ex-pure-cubic-power-basis",
        "ex-nonmaximal-quadratic-order",
        "ex-index-obstructs-naive-polynomial-factorization"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 5632 rows over 1 contract file(s); 4633 marked not_applicable\n\nTEMPLATE REUSE — 25 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Steps 2.1–5.1: finite face maxima and least natural depths need no global choice; small simplices including vertices have depth zero; repeated faces/cancellatio…\"\n    items: thm-cover-small-inclusion-is-a-chain-homotopy-equivalence\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Step 1.1 uses the supplied basepoint, excluding empty X; steps 3.1–4.1 check n=0, n=-1, lower degrees, the point, and G=0.\"\n    items: cor-suspension-isomorphism-in-reduced-singular-homology\n\n  6 rows · axes: empty, endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–4.1 handle finite short-input exceptions, endmarkers, invalid configuration names, exact reachability equivalence, and both co-class inclusions.\"\n    items: thm-immerman-szelepcsenyi-nl-equals-conl\n\n  5 rows · axes: empty, endpoints, iff-forward, iff-reverse, one\n    \"The refutation uses the fixed nontrivial finite groups V=C_2 x C_2 and A=C_2; no variable family, endpoint, or biconditional branch is asserted.\"\n    items: fs-the-universal-coefficient-short-exact-sequence-splits-naturally\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution calculation in 1.1; right exactness and H0 in 1.2; horseshoe kernel and converse in 2.1–3.1. Zero tensor functors are exact. DC and supplied res…\"\n    items: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution forward argument in 1.1, natural Tor0 and cokernel calculation in 1.2, left-variable LES and converse in 2.1–3.1. Zero tensor functors are exact…\"\n    items: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes\n\n  5 rows · axes: degenerate, empty, endpoints, iff-forward, iff-reverse\n    \"This explicit positive-integer finite-complex calculation has no additional empty branch.\"\n    items: ex-the-tensor-double-complex-in-low-degrees\n\n  5 rows · axes: empty, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1 and 2.1 account for malformed inputs, empty source, zero unary padding, and both independently hypothesized translations.\"\n    items: lem-padding-transfers-time-bounds\n\n  5 rows · axes: endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–5.1 include n=0, early halting, boundary head positions, and exact configuration induction in both acceptance directions.\"\n    items: lem-polynomial-time-computations-have-logspace-uniform-circuits\n\n  4 rows · axes: degenerate, empty, one, zero\n    \"Step 1.1 includes the zero space/empty direct sum and negative virtual classes; step 2.1 preserves zero, multiplication, and the unit [k].\"\n    items: ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces\n\n  4 rows · axes: degenerate, empty, nonempty-choice, zero\n    \"Suprema in N union infinity are determined by finite upper bounds; sup empty=0 handles the zero ring. DC and supplied resolutions on both hands permit the crite…\"\n    items: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric\n\n  4 rows · axes: degenerate, empty, endpoints, zero\n    \"Step 3.1 covers empty overlap/cover members, G=0, degree zero, and terminal zero maps; the inclusion square in step 2.1 holds in every degree.\"\n    items: thm-naturality-of-singular-mayer-vietoris\n\n  … 13 further cluster(s); use --json for all\n\nCONTRADICTED DISPOSITIONS — 2 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\nUPHELD BY REVIEW — 7 row(s) an Alpha read and kept, with reasons on the record:\n  cor-holomorphic-functional-calculus-in-the-wiener-algebra  [zero]  by alpha-contract-audit-8: The denominator flagged in step 2.1 is the fixed complex constant 2 pi i, which is nonzero; no variable denominator appr\n  lem-primitive-gauss-sum-twist  [empty]  by alpha-contract-audit-8: A Dirichlet character modulus is positive, so the residue classes modulo q form a nonempty finite set; the displayed sum\n  thm-dirac-comb-is-fourier-invariant  [empty]  by alpha-contract-audit-8: Both displayed sums are indexed by the fixed nonempty set of integers; the summability issue is convergence, not an empt\n  thm-twisted-poisson-summation  [empty]  by alpha-contract-audit-8: The displayed sums are indexed by the fixed nonempty set of integers, so the detector sees aggregate notation without an\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "citation-fidelity",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 421 citation(s) over 704 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 1.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-absolutely-continuous-functions-have-integrable-derivatives",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-absolutely-continuous-functions-have-luzin-property-n",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-luzin-property-n-gives-an-integral-growth-estimate",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-banach-zarecki-characterisation-of-absolute-continuity",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-integration-by-parts-for-absolutely-continuous-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-change-of-variables-for-an-increasing-absolutely-continuous-function",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-total-variation-function-of-an-absolutely-continuous-function",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-lipschitz-characterisation-within-absolutely-continuous-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-an-absolutely-continuous-function-after-a-monotone-lipschitz-function-is-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-continuity-almost-everywhere-differentiability-and-an-integrable-derivative-imply-newton-leibniz",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-absolute-continuity-is-preserved-under-composition",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-absolutely-continuous-function-is-lipschitz",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-luzin-property-n-implies-absolute-continuity",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-x-squared-sine-one-over-x-squared-is-differentiable-everywhere-but-not-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-integration-by-parts-for-absolutely-continuous-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-cantor-function-fails-luzin-property-n",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-classical-composition-of-absolutely-continuous-functions-is-not-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-luzin-property-n-does-not-imply-absolute-continuity",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-absolutely-summable-fourier-coefficients-give-uniform-convergence",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-wiener-algebra-is-a-banach-algebra",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-holder-fourier-coefficients-have-weighted-ltwo-decay",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-bernstein-absolute-convergence-theorem",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-fourier-coefficients-of-a-periodic-weak-derivative",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-wiener-lemma-for-absolutely-convergent-fourier-series",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-holomorphic-functional-calculus-in-the-wiener-algebra",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-trigonometric-polynomial-in-the-wiener-algebra",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-an-absolutely-convergent-non-smooth-fourier-series",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-continuity-does-not-imply-absolute-fourier-convergence",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-bernstein-holder-one-half-endpoint-can-fail",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-wiener-inversion-needs-nonvanishing",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-dirichlet-character-primitive-induction",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-induced-dirichlet-l-finite-euler-factors",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-primitive-gauss-sum-twist",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-primitive-gauss-sum-norm",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-fourier-transform-of-a-gaussian",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-dirac-comb-is-fourier-invariant",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-twisted-poisson-summation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-primitive-dirichlet-l-analytic-continuation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-primitive-dirichlet-l-functional-equation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-dirichlet-l-root-number-unit-modulus",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-dirichlet-l-trivial-zeros",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-primitive-ancestors-of-small-characters",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-finite-euler-factors-under-character-induction",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-gauss-sum-for-chi-four",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-even-and-odd-character-theta-kernels",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-trivial-zeros-of-a-dirichlet-l-function",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-a-character-modulus-need-not-be-its-conductor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-gauss-sum-sign-is-not-canonical-without-conventions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-algebraic-integer-minimal-polynomial-criterion",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-clearing-denominators-for-an-algebraic-number",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-trace-and-norm-of-an-algebraic-integer",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-ring-of-integers-free-of-rank-degree",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-orders-have-integral-bases-and-finite-index",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-discriminant-change-of-basis",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-discriminant-as-an-embedding-determinant",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-number-field-discriminant-is-well-defined-and-nonzero",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-power-basis-discriminant-is-polynomial-discriminant",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-order-index-discriminant-formula",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-squarefree-power-basis-discriminant-gives-ring-of-integers",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-ring-of-integers-of-a-quadratic-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-discriminant-of-a-quadratic-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-ring-of-integers-is-a-dedekind-domain",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-ring-of-integers-of-q",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-gaussian-and-eisenstein-integer-bases",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-ring-of-integers-of-q-sqrt-five",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-pure-cubic-power-basis",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-nonmaximal-quadratic-order",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-index-obstructs-naive-polynomial-factorization",
      "scope": "run",
      "owner": "e"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-absolutely-continuous-functions-have-integrable-derivatives",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-absolutely-continuous-functions-have-luzin-property-n",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-luzin-property-n-gives-an-integral-growth-estimate",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-banach-zarecki-characterisation-of-absolute-continuity",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-integration-by-parts-for-absolutely-continuous-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-change-of-variables-for-an-increasing-absolutely-continuous-function",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-total-variation-function-of-an-absolutely-continuous-function",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-lipschitz-characterisation-within-absolutely-continuous-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-an-absolutely-continuous-function-after-a-monotone-lipschitz-function-is-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-continuity-almost-everywhere-differentiability-and-an-integrable-derivative-imply-newton-leibniz",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-absolute-continuity-is-preserved-under-composition",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-absolutely-continuous-function-is-lipschitz",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-luzin-property-n-implies-absolute-continuity",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-x-squared-sine-one-over-x-squared-is-differentiable-everywhere-but-not-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-integration-by-parts-for-absolutely-continuous-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-cantor-function-fails-luzin-property-n",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-classical-composition-of-absolutely-continuous-functions-is-not-absolutely-continuous",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-luzin-property-n-does-not-imply-absolute-continuity",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-absolutely-summable-fourier-coefficients-give-uniform-convergence",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-wiener-algebra-is-a-banach-algebra",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-holder-fourier-coefficients-have-weighted-ltwo-decay",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-bernstein-absolute-convergence-theorem",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-fourier-coefficients-of-a-periodic-weak-derivative",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-wiener-lemma-for-absolutely-convergent-fourier-series",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-holomorphic-functional-calculus-in-the-wiener-algebra",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-trigonometric-polynomial-in-the-wiener-algebra",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-an-absolutely-convergent-non-smooth-fourier-series",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-continuity-does-not-imply-absolute-fourier-convergence",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-bernstein-holder-one-half-endpoint-can-fail",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-wiener-inversion-needs-nonvanishing",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-dirichlet-character-primitive-induction",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-induced-dirichlet-l-finite-euler-factors",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-primitive-gauss-sum-twist",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-primitive-gauss-sum-norm",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-fourier-transform-of-a-gaussian",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-dirac-comb-is-fourier-invariant",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-twisted-poisson-summation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-primitive-dirichlet-l-analytic-continuation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-primitive-dirichlet-l-functional-equation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-dirichlet-l-root-number-unit-modulus",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-dirichlet-l-trivial-zeros",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-primitive-ancestors-of-small-characters",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-finite-euler-factors-under-character-induction",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-gauss-sum-for-chi-four",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-even-and-odd-character-theta-kernels",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-trivial-zeros-of-a-dirichlet-l-function",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-a-character-modulus-need-not-be-its-conductor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-gauss-sum-sign-is-not-canonical-without-conventions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-algebraic-integer-minimal-polynomial-criterion",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-clearing-denominators-for-an-algebraic-number",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-trace-and-norm-of-an-algebraic-integer",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-ring-of-integers-free-of-rank-degree",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-orders-have-integral-bases-and-finite-index",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-discriminant-change-of-basis",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-discriminant-as-an-embedding-determinant",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-number-field-discriminant-is-well-defined-and-nonzero",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-power-basis-discriminant-is-polynomial-discriminant",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-order-index-discriminant-formula",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-squarefree-power-basis-discriminant-gives-ring-of-integers",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-ring-of-integers-of-a-quadratic-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-discriminant-of-a-quadratic-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-ring-of-integers-is-a-dedekind-domain",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-ring-of-integers-of-q",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-gaussian-and-eisenstein-integer-bases",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-ring-of-integers-of-q-sqrt-five",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-pure-cubic-power-basis",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-nonmaximal-quadratic-order",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-index-obstructs-naive-polynomial-factorization",
      "scope": "run",
      "owner": "e"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **e**, run `frontier-31a`

You are the group Alpha for batches **2**, **5**, **6**: 4 A/B pair(s), 8 page(s), 103 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-e-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | A | measure-theory | 288.037 | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples`, `the-gauge-integral-and-cousins-lemma` |
| 2 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples` | B | measure-theory | 288.038 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` |
| 5 | `absolute-convergence-and-the-wiener-algebra` | A | fourier-analysis | 288.1401 | `fejer-and-poisson-summability-of-fourier-series-examples` |
| 5 | `absolute-convergence-and-the-wiener-algebra-examples` | B | fourier-analysis | 288.14012 | `absolute-convergence-and-the-wiener-algebra` |
| 6 | `primitive-dirichlet-l-functions-and-functional-equations` | A | number-theory | 348.011 | `dirichlet-characters-l-functions-and-primes-in-progressions-examples` |
| 6 | `primitive-dirichlet-l-functions-and-functional-equations-examples` | B | number-theory | 348.012 | `primitive-dirichlet-l-functions-and-functional-equations` |
| 6 | `number-fields-rings-of-integers-and-discriminants` | A | number-theory | 365.911 | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` |
| 6 | `number-fields-rings-of-integers-and-discriminants-examples` | B | number-theory | 365.912 | `number-fields-rings-of-integers-and-discriminants` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` — Absolute Continuity and the Sharp Fundamental Theorem of Calculus (30 item(s))

- `def-luzin-property-n-on-a-compact-interval` · definition
- `def-indefinite-lebesgue-integral-on-a-compact-interval` · definition
- `def-total-variation-function-on-a-compact-interval` · definition
- `rem-absolute-continuity-conventions-and-hierarchy-agreement` · remark
- `thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant` · theorem
- `cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous` · corollary
- `thm-absolutely-continuous-functions-have-integrable-derivatives` · theorem
- `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions` · theorem
- `rem-sharp-and-classical-fundamental-theorems-of-calculus-agreement` · remark
- `thm-absolutely-continuous-functions-have-luzin-property-n` · theorem
- `lem-luzin-property-n-gives-an-integral-growth-estimate` · lemma
- `thm-banach-zarecki-characterisation-of-absolute-continuity` · theorem
- `thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity` · theorem
- `lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous` · lemma
- `thm-integration-by-parts-for-absolutely-continuous-functions` · theorem
- `thm-change-of-variables-for-an-increasing-absolutely-continuous-function` · theorem
- `lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition` · lemma
- `thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis` · theorem
- `thm-total-variation-function-of-an-absolutely-continuous-function` · theorem
- `thm-lipschitz-characterisation-within-absolutely-continuous-functions` · theorem
- `thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous` · theorem
- `thm-an-absolutely-continuous-function-after-a-monotone-lipschitz-function-is-absolutely-continuous` · theorem
- `cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous` · counterexample
- `rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval` · remark
- `fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous` · false-statement
- `fs-continuity-almost-everywhere-differentiability-and-an-integrable-derivative-imply-newton-leibniz` · false-statement
- `fs-absolute-continuity-is-preserved-under-composition` · false-statement
- `fs-every-absolutely-continuous-function-is-lipschitz` · false-statement
- `fs-luzin-property-n-implies-absolute-continuity` · false-statement
- `rem-bounded-derivative-design-correction` · remark

### `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples` — Absolute Continuity and the Sharp Fundamental Theorem of Calculus — Examples (6 item(s))

- `cex-x-squared-sine-one-over-x-squared-is-differentiable-everywhere-but-not-absolutely-continuous` · counterexample
- `ex-integration-by-parts-for-absolutely-continuous-functions` · example
- `ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set` · example
- `cex-the-cantor-function-fails-luzin-property-n` · counterexample
- `cex-the-classical-composition-of-absolutely-continuous-functions-is-not-absolutely-continuous` · counterexample
- `cex-luzin-property-n-does-not-imply-absolute-continuity` · counterexample

### `absolute-convergence-and-the-wiener-algebra` — Absolute Convergence and the Wiener Algebra (12 item(s))

- `def-wiener-algebra-of-the-circle` · definition — The Wiener algebra of the circle
- `lem-absolutely-summable-fourier-coefficients-give-uniform-convergence` · lemma — Absolutely summable Fourier coefficients give uniform convergence
- `thm-wiener-algebra-is-a-banach-algebra` · theorem — The Wiener algebra is a unital commutative Banach algebra
- `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz` · lemma — Weighted ell-2 decay implies absolute convergence
- `lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions` · lemma — A dyadic Fourier-coefficient square-sum bound for Hölder functions
- `lem-holder-fourier-coefficients-have-weighted-ltwo-decay` · lemma — Hölder Fourier coefficients have subcritical weighted ell-2 decay
- `thm-bernstein-absolute-convergence-theorem` · theorem — Bernstein's absolute-convergence theorem
- `def-periodic-ltwo-weak-derivative` · definition — Periodic L2 weak derivative on the circle
- `lem-fourier-coefficients-of-a-periodic-weak-derivative` · lemma — Fourier coefficients of a periodic weak derivative
- `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series` · corollary — One ell-2 weak derivative implies an absolutely convergent Fourier series
- `thm-wiener-lemma-for-absolutely-convergent-fourier-series` · theorem — Wiener's lemma for absolutely convergent Fourier series
- `cor-holomorphic-functional-calculus-in-the-wiener-algebra` · corollary — Holomorphic functional calculus in the Wiener algebra

### `absolute-convergence-and-the-wiener-algebra-examples` — Absolute Convergence and the Wiener Algebra — Examples (5 item(s))

- `ex-a-trigonometric-polynomial-in-the-wiener-algebra` · example — A trigonometric polynomial in the Wiener algebra
- `ex-an-absolutely-convergent-non-smooth-fourier-series` · example — An absolutely convergent Fourier series that is not twice continuously differentiable
- `cex-continuity-does-not-imply-absolute-fourier-convergence` · counterexample — Continuity does not imply absolute Fourier convergence
- `cex-the-bernstein-holder-one-half-endpoint-can-fail` · counterexample — The Bernstein Hölder-one-half endpoint can fail
- `cex-wiener-inversion-needs-nonvanishing` · counterexample — Wiener inversion needs nonvanishing

### `primitive-dirichlet-l-functions-and-functional-equations` — Primitive Dirichlet L Functions and Functional Equations (16 item(s))

- `def-induced-dirichlet-character` · definition — A Dirichlet character modulo q induced by a character modulo a divisor d of q
- `def-primitive-dirichlet-character-and-conductor` · definition — Primitive Dirichlet characters and the conductor as their least inducing modulus
- `thm-dirichlet-character-primitive-induction` · theorem — Every Dirichlet character is induced by a unique primitive character of conductor dividing its modulus
- `thm-induced-dirichlet-l-finite-euler-factors` · theorem — The L-function of an induced character differs from its primitive ancestor by the omitted finite Euler factors for Re(s) > 1
- `def-gauss-sum-dirichlet-character` · definition — The Gauss sum tau(chi) with e(x) = exp(2 pi i x)
- `lem-primitive-gauss-sum-twist` · lemma — For primitive chi modulo q, the additive twist sum equals conjugate(chi)(m) tau(chi)
- `thm-primitive-gauss-sum-norm` · theorem — A primitive Dirichlet character chi modulo q satisfies |tau(chi)| squared = q
- `def-parity-dirichlet-character` · definition — Parity a of a Dirichlet character, defined by chi(-1) = (-1)^a
- `lem-fourier-transform-of-a-gaussian` · lemma — Fourier transform of a Gaussian for hat f(xi) = integral f(x)e(-x xi) dx
- `thm-dirac-comb-is-fourier-invariant` · theorem — Poisson summation from Fourier invariance of the integer Dirac comb
- `thm-twisted-poisson-summation` · theorem — Twisted Poisson summation for a primitive Dirichlet character
- `def-completed-dirichlet-l-function` · definition — The completed primitive Dirichlet L-function Lambda(s, chi)
- `thm-primitive-dirichlet-l-analytic-continuation` · theorem — Analytic continuation of Lambda(s, chi) for primitive characters, with the q = 1 zeta exception
- `thm-primitive-dirichlet-l-functional-equation` · theorem — Functional equation Lambda(s, chi) = epsilon(chi) Lambda(1-s, conjugate chi) for primitive characters
- `cor-dirichlet-l-root-number-unit-modulus` · corollary — The primitive Dirichlet root number epsilon(chi) has modulus one
- `cor-dirichlet-l-trivial-zeros` · corollary — Parity-forced trivial zeros of a primitive nonprincipal Dirichlet L-function, including the s = 0 qualification

### `primitive-dirichlet-l-functions-and-functional-equations-examples` — Primitive Dirichlet L Functions and Functional Equations — Examples (7 item(s))

- `ex-primitive-ancestors-of-small-characters` · example — Primitive ancestors and conductors of small Dirichlet characters
- `ex-finite-euler-factors-under-character-induction` · example — Finite Euler factors for a character induced from modulus 4 to modulus 12
- `ex-gauss-sum-for-chi-four` · example — The Gauss sum of the primitive odd character modulo 4
- `ex-even-and-odd-character-theta-kernels` · example — Even and odd theta kernels for the principal character modulo 1 and chi_4
- `ex-trivial-zeros-of-a-dirichlet-l-function` · example — The negative odd trivial zeros of the beta function L(s, chi_4)
- `cex-a-character-modulus-need-not-be-its-conductor` · counterexample — The character modulo 12 induced by chi_4 has conductor 4, not 12
- `cex-gauss-sum-sign-is-not-canonical-without-conventions` · counterexample — Changing e(x) to exp(-2 pi i x) conjugates the displayed Gauss-sum phase

### `number-fields-rings-of-integers-and-discriminants` — Number Fields Rings of Integers and Discriminants (20 item(s))

- `def-number-field` · definition — A number field as a finite extension of the rational field
- `def-ring-of-integers-of-a-number-field` · definition — The ring of integers O_K as the integral closure of Z in a number field
- `cor-algebraic-integer-minimal-polynomial-criterion` · corollary — An element of a number field is integral over Z exactly when its monic minimal polynomial lies in Z[x]
- `thm-clearing-denominators-for-an-algebraic-number` · theorem — Every element of a number field becomes an algebraic integer after multiplication by a nonzero integer
- `cor-trace-and-norm-of-an-algebraic-integer` · corollary — The trace and norm of an algebraic integer are integers
- `def-order-in-a-number-field` · definition — An order in a number field as a full-rank Z-subring of O_K
- `def-integral-basis-and-power-integral-basis` · definition — Integral bases and power integral bases of an order
- `thm-ring-of-integers-free-of-rank-degree` · theorem — O_K is a free Z-module of rank [K:Q]
- `thm-orders-have-integral-bases-and-finite-index` · theorem — Every order has an integral basis and finite index in O_K
- `def-archimedean-embeddings-and-number-field-signature` · definition — Real and complex embeddings and the signature (r_1,r_2) of a number field
- `def-discriminant-of-a-number-field-basis-and-order` · definition — Discriminant of an ordered Q-basis, an order, and a number field
- `lem-discriminant-change-of-basis` · lemma — Discriminants transform by the square of the change-of-basis determinant
- `thm-discriminant-as-an-embedding-determinant` · theorem — The basis discriminant equals the square of the determinant of the full embedding matrix
- `thm-number-field-discriminant-is-well-defined-and-nonzero` · theorem — The discriminant of a number field is a well-defined nonzero integer
- `thm-power-basis-discriminant-is-polynomial-discriminant` · theorem — The discriminant of the power basis equals the discriminant of the minimal polynomial
- `cor-order-index-discriminant-formula` · corollary — For an order A, disc(A) = [O_K:A] squared disc(K)
- `cor-squarefree-power-basis-discriminant-gives-ring-of-integers` · corollary — A power order with squarefree discriminant is the full ring of integers
- `thm-ring-of-integers-of-a-quadratic-field` · theorem — The ring of integers of Q(sqrt d) for squarefree d not equal to 1
- `cor-discriminant-of-a-quadratic-field` · corollary — The discriminant of Q(sqrt d) for squarefree d not equal to 1
- `cor-ring-of-integers-is-a-dedekind-domain` · corollary — The ring of integers of a number field is a Dedekind domain

### `number-fields-rings-of-integers-and-discriminants-examples` — Number Fields Rings of Integers and Discriminants — Examples (7 item(s))

- `ex-ring-of-integers-of-q` · example — The ring of integers and discriminant of Q
- `ex-gaussian-and-eisenstein-integer-bases` · example — Integral bases and discriminants of the Gaussian and Eisenstein integers
- `ex-ring-of-integers-of-q-sqrt-five` · example — The integral basis and discriminant of Q(sqrt 5)
- `ex-pure-cubic-power-basis` · example — A pure cubic field whose displayed power order is certified maximal by a squarefree discriminant
- `ex-nonmaximal-quadratic-order` · example — The nonmaximal quadratic order Z[sqrt 5] inside O_Q(sqrt 5)
- `ex-index-obstructs-naive-polynomial-factorization` · example — Index 2 explains why factorisation modulo 2 in Z[sqrt 5] is not a factorisation statement for O_Q(sqrt 5)
- `rem-nonmonogenic-number-field-source-obligation` · remark — A fully proved nonmonogenic number-field example remains a sourced authoring obligation

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

2 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-d3ba59ea03a61aa6b75f590c · `def-integral-basis-and-power-integral-basis`** (from group e, would-be-fatal) — The definition first defines an integral basis of an arbitrary order, then says a power integral basis is $(1,\alpha,\ldots,\alpha^{n-1})$, “equivalently $\mathcal O_K=\mathbb Z[\alpha]$.” That equivalence is false for a power basis of a nonmaximal order: for example, $\mathbb Z[\sqrt5]$ has basis $(1,\sqrt5)$ but is properly contained in $\mathcal O_{\mathbb Q(\sqrt5)}=\mathbb Z[(1+\sqrt5)/2]$.
- **s8a-2158c569e504a804e4753b4e · `thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant`** (from group e, gap-a-reader-closes) — Step 1.1 obtains a finite Vitali subfamily only for derivative-zero points, but step 2.1 immediately invokes AC for increments over an unspecified “null exceptional remainder.” The proof needs the standard construction of a short interval cover of the non-differentiability set together with the finite Vitali complement, and an explicit telescoping decomposition of $F(t)-F(s)$.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-31a-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-31a`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
