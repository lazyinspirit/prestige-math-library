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
label: step8-close-f-1

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
  "group": "f",
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
      "output": "ORDINARY 0 [lem-minkowski-functional-is-sublinear] no signals\nORDINARY 2 [lem-balanced-gauge-is-a-seminorm] 2:boundary-sensitive language\nORDINARY 2 [lem-open-convex-set-recovered-from-its-gauge] 2:analytic limiting/completeness language\nCRITICAL 8 [thm-separation-of-an-open-convex-set-and-a-point] 2:6 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [thm-separation-of-disjoint-convex-sets-one-open] 2:boundary-sensitive language\nHIGH 7 [thm-strong-separation-of-closed-and-compact-convex-sets] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cor-closed-convex-set-is-an-intersection-of-closed-half-spaces] 2:boundary-sensitive language\nMODERATE 3 [thm-geometric-hahn-banach-for-subspaces] 2:4 declared dependencies; 1:2 cited facts\nORDINARY 0 [cor-annihilator-detects-closure] no signals\nHIGH 5 [cor-density-characterised-by-annihilator-zero] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [cor-finite-dimensional-subspaces-are-complemented] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim\nCRITICAL 8 [cor-finite-codimensional-subspaces-are-complemented] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nHIGH 7 [thm-closed-hyperplanes-are-kernels-of-nonzero-functionals] 2:4 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [thm-mazur-weak-and-norm-closure-of-convex-sets] 2:4 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [ex-gauges-of-norm-balls-and-ellipsoids] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nMODERATE 3 [cex-two-closed-convex-sets-need-not-be-strongly-separated] 2:5 declared dependencies; 1:2 cited facts\nORDINARY 0 [ex-distance-to-a-subspace-via-annihilating-functionals] no signals\nORDINARY 2 [lem-c-zero-is-a-closed-subspace-of-ell-infinity] 2:boundary-sensitive language\nHIGH 5 [lem-uncountable-almost-disjoint-family-on-natural-numbers] 2:5 declared dependencies; 1:3 cited facts; 2:induction, recursion, or minimality\nCRITICAL 11 [lem-quotient-by-c-zero-has-no-countable-separating-family] 2:6 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-c-zero-is-not-complemented-in-ell-infinity] 2:6 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-a-closed-uncomplemented-subspace] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [lem-local-solvability-of-the-augmented-characteristic-ode] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [lem-quasilinear-solution-lifts-to-characteristics] no signals\nORDINARY 0 [lem-characteristic-strip-compatibility] no signals\nORDINARY 0 [lem-characteristic-strip-jacobian-at-the-initial-surface] no signals\nMODERATE 4 [thm-local-quasilinear-cauchy-problem-by-characteristics] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [lem-characteristic-solution-satisfies-the-quasilinear-pde] no signals\nORDINARY 2 [lem-burgers-slope-obeys-a-riccati-law-along-characteristics] 2:boundary-sensitive language\nHIGH 6 [thm-inviscid-burgers-characteristic-formula-and-first-crossing-time] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cor-burgers-classical-solution-persists-for-monotone-data] 2:boundary-sensitive language\nORDINARY 2 [thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing] 2:boundary-sensitive language\nMODERATE 4 [lem-envelope-stationarity-implies-the-hamilton-jacobi-equation] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [lem-charpit-flow-preserves-the-pde-constraint] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [lem-charpit-contact-compatibility-is-preserved] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi] no signals\nHIGH 5 [thm-local-fully-nonlinear-cauchy-problem-by-charpit] 3:7 declared dependencies; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [ex-semilinear-characteristics-with-logistic-growth] 2:boundary-sensitive language\nORDINARY 0 [ex-inviscid-burgers-rarefying-data] no signals\nORDINARY 0 [ex-inviscid-burgers-gradient-catastrophe] no signals\nORDINARY 0 [cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up] no signals\nMODERATE 4 [ex-clairaut-complete-integral-and-envelope] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [ex-eikonal-cones-are-not-classical-at-the-vertex] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [cex-characteristic-initial-data-for-a-fully-nonlinear-equation] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [ex-cauchy-kovalevskaya-normal-form] no signals\nORDINARY 2 [ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time] 2:boundary-sensitive language\nORDINARY 2 [ex-smooth-nonanalytic-transport-data-give-a-smooth-nonanalytic-solution] 2:analytic limiting/completeness language\nORDINARY 0 [lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear] no signals\nORDINARY 0 [prop-the-exterior-derivative-is-local] no signals\nORDINARY 2 [prop-exterior-derivative-of-a-function-is-its-differential] 2:boundary-sensitive language\nHIGH 5 [thm-local-coordinate-formula-for-the-exterior-derivative] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-the-exterior-derivative-is-a-graded-derivation] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-the-exterior-derivative-squares-to-zero] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-existence-and-uniqueness-of-the-exterior-derivative] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [prop-the-exterior-derivative-commutes-with-restriction] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [thm-the-exterior-derivative-commutes-with-pullback] no signals\nORDINARY 0 [cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms] no signals\nORDINARY 2 [prop-the-exterior-derivative-does-not-enlarge-support] 2:boundary-sensitive language\nMODERATE 4 [lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields] 2:boundary-sensitive language\nORDINARY 0 [thm-lie-derivative-is-a-derivation-of-the-tensor-algebra] no signals\nORDINARY 0 [prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor] no signals\nHIGH 5 [prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation] 2:boundary-sensitive language\nHIGH 5 [thm-cartans-magic-formula] 2:6 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cor-lie-derivative-commutes-with-the-exterior-derivative] 2:boundary-sensitive language\nORDINARY 2 [prop-cartan-commutator-identities] 2:4 declared dependencies\nMODERATE 3 [prop-lie-derivatives-are-natural-for-related-vector-fields] 2:4 declared dependencies; 1:2 cited facts\nORDINARY 2 [thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow] 2:4 declared dependencies\nORDINARY 2 [cor-a-closed-form-is-flow-invariant-when-its-contraction-is-exactly-zero] 2:boundary-sensitive language\nORDINARY 2 [lem-annihilator-ideal-of-a-distribution-is-frame-independent] 2:boundary-sensitive language\nHIGH 5 [thm-pfaffian-frobenius-criterion] 2:4 declared dependencies; 3:biconditional / both-direction claim\nHIGH 6 [cor-codimension-one-frobenius-criterion] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 0 [fs-the-exterior-derivative-is-c-infinity-linear] no signals\nORDINARY 0 [fs-the-lie-derivative-is-c-infinity-linear-in-the-vector-field] no signals\nORDINARY 0 [fs-the-exterior-derivative-depends-on-a-riemannian-metric] no signals\nORDINARY 2 [fs-every-closed-differential-form-is-globally-exact] 2:boundary-sensitive language\nORDINARY 0 [fs-lie-derivative-and-interior-product-commute-for-all-vector-fields] no signals\nHIGH 5 [fs-alpha-wedge-d-alpha-vanishes-for-every-one-form] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 0 [fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported] no signals\nORDINARY 2 [ex-exterior-derivatives-of-coordinate-one-forms] 2:boundary-sensitive language\nORDINARY 0 [ex-the-euclidean-area-form-is-closed] no signals\nORDINARY 2 [ex-the-angular-one-form-on-the-punctured-plane-is-closed] 2:boundary-sensitive language\nORDINARY 2 [ex-the-angular-one-form-has-no-global-potential] 2:boundary-sensitive language\nORDINARY 0 [ex-curl-and-divergence-encoded-by-the-exterior-derivative] no signals\nORDINARY 0 [ex-lie-derivative-of-the-euclidean-metric-under-dilations] no signals\nORDINARY 0 [ex-lie-derivative-of-an-area-form-and-planar-divergence] no signals\nORDINARY 0 [ex-cartans-formula-for-a-coordinate-vector-field] no signals\nHIGH 5 [ex-a-contact-form-on-three-space] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 7 [ex-an-integrable-pfaffian-equation-with-a-local-first-integral] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [cex-a-nonproper-pullback-destroys-compact-support] no signals\nORDINARY 0 [ex-time-dependent-pullback-differentiation-for-a-translation] no signals\nrisk-report: 15 error(s), 704 item(s) routed\nERROR risk-review-missing [thm-separation-of-an-open-convex-set-and-a-point]: thm-separation-of-an-open-convex-set-and-a-point is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-local-coordinate-formula-for-the-exterior-derivative]: thm-local-coordinate-formula-for-the-exterior-derivative is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-the-exterior-derivative-is-a-graded-derivation]: thm-the-exterior-derivative-is-a-graded-derivation is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor]: prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-minkowski-functional-is-sublinear",
        "lem-balanced-gauge-is-a-seminorm",
        "lem-open-convex-set-recovered-from-its-gauge",
        "thm-separation-of-an-open-convex-set-and-a-point",
        "thm-separation-of-disjoint-convex-sets-one-open",
        "thm-strong-separation-of-closed-and-compact-convex-sets",
        "cor-closed-convex-set-is-an-intersection-of-closed-half-spaces",
        "thm-geometric-hahn-banach-for-subspaces",
        "cor-annihilator-detects-closure",
        "cor-density-characterised-by-annihilator-zero",
        "cor-finite-dimensional-subspaces-are-complemented",
        "cor-finite-codimensional-subspaces-are-complemented",
        "thm-closed-hyperplanes-are-kernels-of-nonzero-functionals",
        "thm-mazur-weak-and-norm-closure-of-convex-sets",
        "ex-gauges-of-norm-balls-and-ellipsoids",
        "cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm",
        "cex-two-closed-convex-sets-need-not-be-strongly-separated",
        "ex-distance-to-a-subspace-via-annihilating-functionals",
        "lem-c-zero-is-a-closed-subspace-of-ell-infinity",
        "lem-uncountable-almost-disjoint-family-on-natural-numbers",
        "lem-quotient-by-c-zero-has-no-countable-separating-family",
        "thm-c-zero-is-not-complemented-in-ell-infinity",
        "ex-a-closed-uncomplemented-subspace",
        "lem-local-solvability-of-the-augmented-characteristic-ode",
        "lem-quasilinear-solution-lifts-to-characteristics",
        "lem-characteristic-strip-compatibility",
        "lem-characteristic-strip-jacobian-at-the-initial-surface",
        "thm-local-quasilinear-cauchy-problem-by-characteristics",
        "lem-characteristic-solution-satisfies-the-quasilinear-pde",
        "lem-burgers-slope-obeys-a-riccati-law-along-characteristics",
        "thm-inviscid-burgers-characteristic-formula-and-first-crossing-time",
        "cor-burgers-classical-solution-persists-for-monotone-data",
        "thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing",
        "lem-envelope-stationarity-implies-the-hamilton-jacobi-equation",
        "lem-charpit-flow-preserves-the-pde-constraint",
        "lem-charpit-contact-compatibility-is-preserved",
        "lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi",
        "thm-local-fully-nonlinear-cauchy-problem-by-charpit",
        "ex-semilinear-characteristics-with-logistic-growth",
        "ex-inviscid-burgers-rarefying-data",
        "ex-inviscid-burgers-gradient-catastrophe",
        "cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up",
        "ex-clairaut-complete-integral-and-envelope",
        "ex-eikonal-cones-are-not-classical-at-the-vertex",
        "cex-characteristic-initial-data-for-a-fully-nonlinear-equation",
        "ex-cauchy-kovalevskaya-normal-form",
        "ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time",
        "ex-smooth-nonanalytic-transport-data-give-a-smooth-nonanalytic-solution",
        "lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear",
        "prop-the-exterior-derivative-is-local",
        "prop-exterior-derivative-of-a-function-is-its-differential",
        "thm-local-coordinate-formula-for-the-exterior-derivative",
        "thm-the-exterior-derivative-is-a-graded-derivation",
        "thm-the-exterior-derivative-squares-to-zero",
        "thm-existence-and-uniqueness-of-the-exterior-derivative",
        "prop-the-exterior-derivative-commutes-with-restriction",
        "thm-the-exterior-derivative-commutes-with-pullback",
        "cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms",
        "prop-the-exterior-derivative-does-not-enlarge-support",
        "lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined",
        "prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields",
        "thm-lie-derivative-is-a-derivation-of-the-tensor-algebra",
        "prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor",
        "prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor",
        "prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes",
        "prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation",
        "thm-cartans-magic-formula",
        "cor-lie-derivative-commutes-with-the-exterior-derivative",
        "prop-cartan-commutator-identities",
        "prop-lie-derivatives-are-natural-for-related-vector-fields",
        "thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow",
        "cor-a-closed-form-is-flow-invariant-when-its-contraction-is-exactly-zero",
        "lem-annihilator-ideal-of-a-distribution-is-frame-independent",
        "thm-pfaffian-frobenius-criterion",
        "cor-codimension-one-frobenius-criterion",
        "prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields",
        "fs-the-exterior-derivative-is-c-infinity-linear",
        "fs-the-lie-derivative-is-c-infinity-linear-in-the-vector-field",
        "fs-the-exterior-derivative-depends-on-a-riemannian-metric",
        "fs-every-closed-differential-form-is-globally-exact",
        "fs-lie-derivative-and-interior-product-commute-for-all-vector-fields",
        "fs-alpha-wedge-d-alpha-vanishes-for-every-one-form",
        "fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported",
        "ex-exterior-derivatives-of-coordinate-one-forms",
        "ex-the-euclidean-area-form-is-closed",
        "ex-the-angular-one-form-on-the-punctured-plane-is-closed",
        "ex-the-angular-one-form-has-no-global-potential",
        "ex-curl-and-divergence-encoded-by-the-exterior-derivative",
        "ex-lie-derivative-of-the-euclidean-metric-under-dilations",
        "ex-lie-derivative-of-an-area-form-and-planar-divergence",
        "ex-cartans-formula-for-a-coordinate-vector-field",
        "ex-a-contact-form-on-three-space",
        "ex-an-integrable-pfaffian-equation-with-a-local-first-integral",
        "cex-a-nonproper-pullback-destroys-compact-support",
        "ex-time-dependent-pullback-differentiation-for-a-translation"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 5632 rows over 1 contract file(s); 4633 marked not_applicable\n\nTEMPLATE REUSE — 25 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Steps 2.1–5.1: finite face maxima and least natural depths need no global choice; small simplices including vertices have depth zero; repeated faces/cancellatio…\"\n    items: thm-cover-small-inclusion-is-a-chain-homotopy-equivalence\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Step 1.1 uses the supplied basepoint, excluding empty X; steps 3.1–4.1 check n=0, n=-1, lower degrees, the point, and G=0.\"\n    items: cor-suspension-isomorphism-in-reduced-singular-homology\n\n  6 rows · axes: empty, endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–4.1 handle finite short-input exceptions, endmarkers, invalid configuration names, exact reachability equivalence, and both co-class inclusions.\"\n    items: thm-immerman-szelepcsenyi-nl-equals-conl\n\n  5 rows · axes: empty, endpoints, iff-forward, iff-reverse, one\n    \"The refutation uses the fixed nontrivial finite groups V=C_2 x C_2 and A=C_2; no variable family, endpoint, or biconditional branch is asserted.\"\n    items: fs-the-universal-coefficient-short-exact-sequence-splits-naturally\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution calculation in 1.1; right exactness and H0 in 1.2; horseshoe kernel and converse in 2.1–3.1. Zero tensor functors are exact. DC and supplied res…\"\n    items: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution forward argument in 1.1, natural Tor0 and cokernel calculation in 1.2, left-variable LES and converse in 2.1–3.1. Zero tensor functors are exact…\"\n    items: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes\n\n  5 rows · axes: degenerate, empty, endpoints, iff-forward, iff-reverse\n    \"This explicit positive-integer finite-complex calculation has no additional empty branch.\"\n    items: ex-the-tensor-double-complex-in-low-degrees\n\n  5 rows · axes: empty, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1 and 2.1 account for malformed inputs, empty source, zero unary padding, and both independently hypothesized translations.\"\n    items: lem-padding-transfers-time-bounds\n\n  5 rows · axes: endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–5.1 include n=0, early halting, boundary head positions, and exact configuration induction in both acceptance directions.\"\n    items: lem-polynomial-time-computations-have-logspace-uniform-circuits\n\n  4 rows · axes: degenerate, empty, one, zero\n    \"Step 1.1 includes the zero space/empty direct sum and negative virtual classes; step 2.1 preserves zero, multiplication, and the unit [k].\"\n    items: ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces\n\n  4 rows · axes: degenerate, empty, nonempty-choice, zero\n    \"Suprema in N union infinity are determined by finite upper bounds; sup empty=0 handles the zero ring. DC and supplied resolutions on both hands permit the crite…\"\n    items: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric\n\n  4 rows · axes: degenerate, empty, endpoints, zero\n    \"Step 3.1 covers empty overlap/cover members, G=0, degree zero, and terminal zero maps; the inclusion square in step 2.1 holds in every degree.\"\n    items: thm-naturality-of-singular-mayer-vietoris\n\n  … 13 further cluster(s); use --json for all\n\nCONTRADICTED DISPOSITIONS — 2 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\nUPHELD BY REVIEW — 7 row(s) an Alpha read and kept, with reasons on the record:\nEvery line above is a candidate for a human read, not a verdict.\n",
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
      "id": "lem-minkowski-functional-is-sublinear",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-balanced-gauge-is-a-seminorm",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-open-convex-set-recovered-from-its-gauge",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-separation-of-an-open-convex-set-and-a-point",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-separation-of-disjoint-convex-sets-one-open",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-strong-separation-of-closed-and-compact-convex-sets",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-closed-convex-set-is-an-intersection-of-closed-half-spaces",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-geometric-hahn-banach-for-subspaces",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-annihilator-detects-closure",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-density-characterised-by-annihilator-zero",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-finite-dimensional-subspaces-are-complemented",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-finite-codimensional-subspaces-are-complemented",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-closed-hyperplanes-are-kernels-of-nonzero-functionals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-mazur-weak-and-norm-closure-of-convex-sets",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-gauges-of-norm-balls-and-ellipsoids",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-two-closed-convex-sets-need-not-be-strongly-separated",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-distance-to-a-subspace-via-annihilating-functionals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-c-zero-is-a-closed-subspace-of-ell-infinity",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-uncountable-almost-disjoint-family-on-natural-numbers",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-quotient-by-c-zero-has-no-countable-separating-family",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-c-zero-is-not-complemented-in-ell-infinity",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-a-closed-uncomplemented-subspace",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-local-solvability-of-the-augmented-characteristic-ode",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-quasilinear-solution-lifts-to-characteristics",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-characteristic-strip-compatibility",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-characteristic-strip-jacobian-at-the-initial-surface",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-local-quasilinear-cauchy-problem-by-characteristics",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-characteristic-solution-satisfies-the-quasilinear-pde",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-burgers-slope-obeys-a-riccati-law-along-characteristics",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-inviscid-burgers-characteristic-formula-and-first-crossing-time",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-burgers-classical-solution-persists-for-monotone-data",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-envelope-stationarity-implies-the-hamilton-jacobi-equation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-charpit-flow-preserves-the-pde-constraint",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-charpit-contact-compatibility-is-preserved",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-local-fully-nonlinear-cauchy-problem-by-charpit",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-semilinear-characteristics-with-logistic-growth",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-inviscid-burgers-rarefying-data",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-inviscid-burgers-gradient-catastrophe",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-clairaut-complete-integral-and-envelope",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-eikonal-cones-are-not-classical-at-the-vertex",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-characteristic-initial-data-for-a-fully-nonlinear-equation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-cauchy-kovalevskaya-normal-form",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-smooth-nonanalytic-transport-data-give-a-smooth-nonanalytic-solution",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-the-exterior-derivative-is-local",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-exterior-derivative-of-a-function-is-its-differential",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-local-coordinate-formula-for-the-exterior-derivative",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-the-exterior-derivative-is-a-graded-derivation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-the-exterior-derivative-squares-to-zero",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-existence-and-uniqueness-of-the-exterior-derivative",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-the-exterior-derivative-commutes-with-restriction",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-the-exterior-derivative-commutes-with-pullback",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-the-exterior-derivative-does-not-enlarge-support",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-lie-derivative-is-a-derivation-of-the-tensor-algebra",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-cartans-magic-formula",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-lie-derivative-commutes-with-the-exterior-derivative",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-cartan-commutator-identities",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-lie-derivatives-are-natural-for-related-vector-fields",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-a-closed-form-is-flow-invariant-when-its-contraction-is-exactly-zero",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-annihilator-ideal-of-a-distribution-is-frame-independent",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-pfaffian-frobenius-criterion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-codimension-one-frobenius-criterion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-the-exterior-derivative-is-c-infinity-linear",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-the-lie-derivative-is-c-infinity-linear-in-the-vector-field",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-the-exterior-derivative-depends-on-a-riemannian-metric",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-every-closed-differential-form-is-globally-exact",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-lie-derivative-and-interior-product-commute-for-all-vector-fields",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-alpha-wedge-d-alpha-vanishes-for-every-one-form",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-exterior-derivatives-of-coordinate-one-forms",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-the-euclidean-area-form-is-closed",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-the-angular-one-form-on-the-punctured-plane-is-closed",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-the-angular-one-form-has-no-global-potential",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-curl-and-divergence-encoded-by-the-exterior-derivative",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-lie-derivative-of-the-euclidean-metric-under-dilations",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-lie-derivative-of-an-area-form-and-planar-divergence",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-cartans-formula-for-a-coordinate-vector-field",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-a-contact-form-on-three-space",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-an-integrable-pfaffian-equation-with-a-local-first-integral",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-a-nonproper-pullback-destroys-compact-support",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-time-dependent-pullback-differentiation-for-a-translation",
      "scope": "run",
      "owner": "f"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-minkowski-functional-is-sublinear",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-balanced-gauge-is-a-seminorm",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-open-convex-set-recovered-from-its-gauge",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-separation-of-an-open-convex-set-and-a-point",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-separation-of-disjoint-convex-sets-one-open",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-strong-separation-of-closed-and-compact-convex-sets",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-closed-convex-set-is-an-intersection-of-closed-half-spaces",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-geometric-hahn-banach-for-subspaces",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-annihilator-detects-closure",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-density-characterised-by-annihilator-zero",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-finite-dimensional-subspaces-are-complemented",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-finite-codimensional-subspaces-are-complemented",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-closed-hyperplanes-are-kernels-of-nonzero-functionals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-mazur-weak-and-norm-closure-of-convex-sets",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-gauges-of-norm-balls-and-ellipsoids",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-two-closed-convex-sets-need-not-be-strongly-separated",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-distance-to-a-subspace-via-annihilating-functionals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-c-zero-is-a-closed-subspace-of-ell-infinity",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-uncountable-almost-disjoint-family-on-natural-numbers",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-quotient-by-c-zero-has-no-countable-separating-family",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-c-zero-is-not-complemented-in-ell-infinity",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-a-closed-uncomplemented-subspace",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-local-solvability-of-the-augmented-characteristic-ode",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-quasilinear-solution-lifts-to-characteristics",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-characteristic-strip-compatibility",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-characteristic-strip-jacobian-at-the-initial-surface",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-local-quasilinear-cauchy-problem-by-characteristics",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-characteristic-solution-satisfies-the-quasilinear-pde",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-burgers-slope-obeys-a-riccati-law-along-characteristics",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-inviscid-burgers-characteristic-formula-and-first-crossing-time",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-burgers-classical-solution-persists-for-monotone-data",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-envelope-stationarity-implies-the-hamilton-jacobi-equation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-charpit-flow-preserves-the-pde-constraint",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-charpit-contact-compatibility-is-preserved",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-local-fully-nonlinear-cauchy-problem-by-charpit",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-semilinear-characteristics-with-logistic-growth",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-inviscid-burgers-rarefying-data",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-inviscid-burgers-gradient-catastrophe",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-clairaut-complete-integral-and-envelope",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-eikonal-cones-are-not-classical-at-the-vertex",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-characteristic-initial-data-for-a-fully-nonlinear-equation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-cauchy-kovalevskaya-normal-form",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-smooth-nonanalytic-transport-data-give-a-smooth-nonanalytic-solution",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-the-exterior-derivative-is-local",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-exterior-derivative-of-a-function-is-its-differential",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-local-coordinate-formula-for-the-exterior-derivative",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-the-exterior-derivative-is-a-graded-derivation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-the-exterior-derivative-squares-to-zero",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-existence-and-uniqueness-of-the-exterior-derivative",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-the-exterior-derivative-commutes-with-restriction",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-the-exterior-derivative-commutes-with-pullback",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-the-exterior-derivative-does-not-enlarge-support",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-lie-derivative-is-a-derivation-of-the-tensor-algebra",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-cartans-magic-formula",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-lie-derivative-commutes-with-the-exterior-derivative",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-cartan-commutator-identities",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-lie-derivatives-are-natural-for-related-vector-fields",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-a-closed-form-is-flow-invariant-when-its-contraction-is-exactly-zero",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-annihilator-ideal-of-a-distribution-is-frame-independent",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-pfaffian-frobenius-criterion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-codimension-one-frobenius-criterion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-the-exterior-derivative-is-c-infinity-linear",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-the-lie-derivative-is-c-infinity-linear-in-the-vector-field",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-the-exterior-derivative-depends-on-a-riemannian-metric",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-every-closed-differential-form-is-globally-exact",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-lie-derivative-and-interior-product-commute-for-all-vector-fields",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-alpha-wedge-d-alpha-vanishes-for-every-one-form",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-exterior-derivatives-of-coordinate-one-forms",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-the-euclidean-area-form-is-closed",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-the-angular-one-form-on-the-punctured-plane-is-closed",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-the-angular-one-form-has-no-global-potential",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-curl-and-divergence-encoded-by-the-exterior-derivative",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-lie-derivative-of-the-euclidean-metric-under-dilations",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-lie-derivative-of-an-area-form-and-planar-divergence",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-cartans-formula-for-a-coordinate-vector-field",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-a-contact-form-on-three-space",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-an-integrable-pfaffian-equation-with-a-local-first-integral",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-a-nonproper-pullback-destroys-compact-support",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-time-dependent-pullback-differentiation-for-a-translation",
      "scope": "run",
      "owner": "f"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **f**, run `frontier-31a`

You are the group Alpha for batches **3**, **16**, **17**: 3 A/B pair(s), 6 page(s), 115 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 3 | `geometric-hahn-banach-and-convex-separation` | A | functional-analysis | 288.055 | `the-analytic-hahn-banach-theorem-examples` |
| 3 | `geometric-hahn-banach-and-convex-separation-examples` | B | functional-analysis | 288.056 | `geometric-hahn-banach-and-convex-separation` |
| 16 | `quasilinear-characteristics-and-cauchy-kovalevskaya` | A | pde | 458.001 | `partial-differential-equations-and-characteristics-examples`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `inverse-and-implicit-function-theorems` |
| 16 | `quasilinear-characteristics-and-cauchy-kovalevskaya-examples` | B | pde | 458.002 | `quasilinear-characteristics-and-cauchy-kovalevskaya` |
| 17 | `the-exterior-derivative-and-cartan-calculus` | A | differential-geometry | 465 | `vector-fields-flows-and-lie-derivatives`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `tensor-fields-exterior-algebra-and-differential-forms` |
| 17 | `the-exterior-derivative-and-cartan-calculus-examples` | B | differential-geometry | 466 | `the-exterior-derivative-and-cartan-calculus` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `geometric-hahn-banach-and-convex-separation` — Geometric Hahn Banach and Convex Separation (19 item(s))

- `def-absorbing-balanced-and-absolutely-convex-set` · definition — Absorbing, balanced, and absolutely convex sets
- `def-minkowski-functional` · definition — Minkowski functional of an absorbing set
- `lem-minkowski-functional-is-sublinear` · lemma — The gauge of a convex absorbing set is sublinear
- `lem-balanced-gauge-is-a-seminorm` · lemma — The gauge of an absolutely convex absorbing set is a seminorm
- `lem-open-convex-set-recovered-from-its-gauge` · lemma — An open convex neighbourhood is recovered from its gauge
- `def-weak-and-strict-separation` · definition — Weak, strict, and strong separation
- `thm-separation-of-an-open-convex-set-and-a-point` · theorem — Separate a point from an open convex set
- `thm-separation-of-disjoint-convex-sets-one-open` · theorem — Separation of disjoint convex sets when one is open
- `thm-strong-separation-of-closed-and-compact-convex-sets` · theorem — Strong separation of a closed and a compact convex set
- `cor-closed-convex-set-is-an-intersection-of-closed-half-spaces` · corollary — A closed convex set is an intersection of closed half-spaces
- `def-continuous-annihilator-of-a-subspace` · definition — Continuous annihilator of a linear subspace
- `thm-geometric-hahn-banach-for-subspaces` · theorem — Geometric Hahn–Banach theorem for subspaces
- `cor-annihilator-detects-closure` · corollary — The annihilator detects the closure of a subspace
- `cor-density-characterised-by-annihilator-zero` · corollary — Density is characterized by a zero annihilator
- `cor-finite-dimensional-subspaces-are-complemented` · corollary — Finite-dimensional subspaces are complemented
- `cor-finite-codimensional-subspaces-are-complemented` · corollary — Closed finite-codimensional subspaces are complemented
- `def-linear-hyperplane` · definition — Linear hyperplane
- `thm-closed-hyperplanes-are-kernels-of-nonzero-functionals` · theorem — Closed hyperplanes are kernels of nonzero functionals
- `thm-mazur-weak-and-norm-closure-of-convex-sets` · theorem — Mazur theorem: weak and norm closure agree for convex sets

### `geometric-hahn-banach-and-convex-separation-examples` — Geometric Hahn Banach and Convex Separation Examples (11 item(s))

- `ex-gauges-of-norm-balls-and-ellipsoids` · example — Gauges of norm balls and finite-dimensional ellipsoids
- `cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm` · counterexample — A gauge of a nonbalanced set need not be a seminorm
- `cex-two-closed-convex-sets-need-not-be-strongly-separated` · counterexample — Two closed convex sets can have no strong separator
- `ex-distance-to-a-subspace-via-annihilating-functionals` · example — Distance to a subspace via annihilating functionals
- `def-c-zero-and-ell-infinity` · definition — The sequence spaces c_0 and ell-infinity
- `lem-c-zero-is-a-closed-subspace-of-ell-infinity` · lemma — c_0 is a closed subspace of ell-infinity
- `lem-uncountable-almost-disjoint-family-on-natural-numbers` · lemma — An uncountable almost-disjoint family of subsets of the naturals
- `lem-quotient-by-c-zero-has-no-countable-separating-family` · lemma — The quotient ell-infinity/c_0 has no countable separating family
- `thm-c-zero-is-not-complemented-in-ell-infinity` · theorem — c_0 is not complemented in ell-infinity
- `ex-a-closed-uncomplemented-subspace` · example — A closed uncomplemented subspace
- `rem-two-results-called-mazurs-lemma` · remark — Two results called Mazur’s lemma

### `quasilinear-characteristics-and-cauchy-kovalevskaya` — Quasilinear Characteristics and Cauchy Kovalevskaya (23 item(s))

- `def-semilinear-and-quasilinear-first-order-cauchy-problems` · definition — Semilinear and quasilinear first-order Cauchy problems on a parametrised hypersurface
- `def-augmented-characteristic-system-for-a-quasilinear-pde` · definition — The augmented characteristic system for a quasilinear first-order PDE
- `lem-local-solvability-of-the-augmented-characteristic-ode` · lemma — Local solvability and smooth parameter dependence for the augmented characteristic ODE
- `lem-quasilinear-solution-lifts-to-characteristics` · lemma — A classical quasilinear solution lifts to an augmented characteristic
- `lem-characteristic-strip-compatibility` · lemma — Compatibility of a quasilinear Cauchy strip with tangential derivatives
- `lem-characteristic-strip-jacobian-at-the-initial-surface` · lemma — The characteristic-strip projection has the prescribed nonzero Jacobian initially
- `thm-local-quasilinear-cauchy-problem-by-characteristics` · theorem — Local quasilinear characteristic graph construction
- `lem-characteristic-solution-satisfies-the-quasilinear-pde` · lemma — The inverse-projected characteristic graph satisfies the quasilinear PDE
- `def-characteristic-crossing-and-caustic-for-first-order-pde` · definition — Characteristic crossing and caustic for a first-order PDE
- `lem-burgers-slope-obeys-a-riccati-law-along-characteristics` · lemma — The slope in inviscid Burgers flow obeys a Riccati law along characteristics
- `thm-inviscid-burgers-characteristic-formula-and-first-crossing-time` · theorem — Inviscid Burgers characteristic formula and first crossing time
- `cor-burgers-classical-solution-persists-for-monotone-data` · corollary — Monotone inviscid Burgers data have no forward characteristic crossing
- `thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing` · theorem — Uniqueness of a classical quasilinear solution before characteristic crossing
- `def-fully-nonlinear-first-order-pde-and-complete-integral` · definition — Fully nonlinear first-order PDEs and complete integrals
- `lem-envelope-stationarity-implies-the-hamilton-jacobi-equation` · lemma — A nondegenerate stationary envelope of a complete integral solves the Hamilton–Jacobi equation
- `def-lagrange-charpit-characteristic-system` · definition — The Lagrange–Charpit characteristic system
- `lem-charpit-flow-preserves-the-pde-constraint` · lemma — The Lagrange–Charpit flow preserves the fully nonlinear PDE constraint
- `lem-charpit-contact-compatibility-is-preserved` · lemma — The Lagrange–Charpit flow preserves contact compatibility
- `lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi` · lemma — The Charpit momentum equation follows by differentiating Hamilton–Jacobi
- `thm-local-fully-nonlinear-cauchy-problem-by-charpit` · theorem — Local fully nonlinear Cauchy problem by Lagrange–Charpit characteristics
- `rem-characteristics-do-not-select-a-post-crossing-weak-solution` · remark — Characteristics do not select a post-crossing weak solution
- `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem` · remark — Cauchy–Kovalevskaya theorem for a noncharacteristic analytic Cauchy problem
- `rem-cauchy-kovalevskaya-proof-boundary` · remark — The Cauchy–Kovalevskaya proof boundary

### `quasilinear-characteristics-and-cauchy-kovalevskaya-examples` — Quasilinear Characteristics and Cauchy Kovalevskaya — Examples (10 item(s))

- `ex-semilinear-characteristics-with-logistic-growth` · example — Semilinear characteristics with logistic growth
- `ex-inviscid-burgers-rarefying-data` · example — Rarefying inviscid Burgers data
- `ex-inviscid-burgers-gradient-catastrophe` · example — Inviscid Burgers gradient catastrophe
- `cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up` · counterexample — Quasilinear characteristics can cross before the lifted ODE blows up
- `ex-clairaut-complete-integral-and-envelope` · example — Clairaut complete integral and its nondegenerate stationary envelope
- `ex-eikonal-cones-are-not-classical-at-the-vertex` · example — Eikonal cones are not classical at the vertex
- `cex-characteristic-initial-data-for-a-fully-nonlinear-equation` · counterexample — Characteristic initial data need not determine a fully nonlinear solution
- `ex-cauchy-kovalevskaya-normal-form` · example — Cauchy–Kovalevskaya normal form with analytic data
- `ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time` · example — Quadratic Hamilton–Jacobi data produce an explicit caustic time
- `ex-smooth-nonanalytic-transport-data-give-a-smooth-nonanalytic-solution` · example — Smooth nonanalytic transport data give a smooth nonanalytic solution

### `the-exterior-derivative-and-cartan-calculus` — The Exterior Derivative and Cartan Calculus (40 item(s))

- `def-graded-derivation-of-the-algebra-of-differential-forms` · definition — A graded derivation of the algebra of differential forms
- `def-exterior-derivative-by-the-invariant-vector-field-formula` · definition — The exterior derivative by the invariant vector-field formula
- `lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear` · lemma — The invariant exterior-derivative formula is $C^\infty$-multilinear
- `prop-the-exterior-derivative-is-local` · proposition — The exterior derivative is local
- `prop-exterior-derivative-of-a-function-is-its-differential` · proposition — The exterior derivative of a function is its differential
- `thm-local-coordinate-formula-for-the-exterior-derivative` · theorem — The local coordinate formula for the exterior derivative
- `thm-the-exterior-derivative-is-a-graded-derivation` · theorem — The exterior derivative is a graded derivation
- `thm-the-exterior-derivative-squares-to-zero` · theorem — The exterior derivative squares to zero
- `thm-existence-and-uniqueness-of-the-exterior-derivative` · theorem — Existence and uniqueness of the exterior derivative
- `prop-the-exterior-derivative-commutes-with-restriction` · proposition — The exterior derivative commutes with restriction
- `thm-the-exterior-derivative-commutes-with-pullback` · theorem — The exterior derivative commutes with pullback
- `cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms` · corollary — Pullback carries closed forms to closed forms and exact forms to exact forms
- `prop-the-exterior-derivative-does-not-enlarge-support` · proposition — The exterior derivative does not enlarge support
- `def-lie-derivative-of-a-tensor-field` · definition — The Lie derivative of a tensor field
- `lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined` · lemma — The flow definition of tensor Lie derivative is local and well-defined
- `prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields` · proposition — Tensor Lie derivative agrees with $X$ on functions and bracket on vector fields
- `thm-lie-derivative-is-a-derivation-of-the-tensor-algebra` · theorem — The Lie derivative is a derivation of the tensor algebra
- `prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor` · proposition — The coordinate formula for the Lie derivative of a covariant tensor
- `prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor` · proposition — The coordinate formula for the Lie derivative of a contravariant tensor
- `prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes` · proposition — A tensor field is flow-invariant exactly when its Lie derivative vanishes
- `def-lie-derivative-of-a-differential-form` · definition — The Lie derivative of a differential form
- `prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation` · proposition — Lie derivative of forms is a degree-zero graded derivation
- `thm-cartans-magic-formula` · theorem — Cartan's magic formula
- `cor-lie-derivative-commutes-with-the-exterior-derivative` · corollary — Lie derivative commutes with the exterior derivative
- `prop-cartan-commutator-identities` · proposition — Cartan commutator identities
- `prop-lie-derivatives-are-natural-for-related-vector-fields` · proposition — Lie derivatives are natural for related vector fields
- `thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow` · theorem — Differentiation of a pulled-back form along a time-dependent flow
- `cor-a-closed-form-is-flow-invariant-when-its-contraction-is-exactly-zero` · corollary — A closed form is flow-invariant when its contraction is zero
- `def-differential-ideal-in-the-algebra-of-forms` · definition — A differential ideal in the algebra of forms
- `lem-annihilator-ideal-of-a-distribution-is-frame-independent` · lemma — The annihilator ideal of a distribution is frame-independent
- `thm-pfaffian-frobenius-criterion` · theorem — The Pfaffian Frobenius criterion
- `cor-codimension-one-frobenius-criterion` · corollary — The codimension-one Frobenius criterion
- `prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields` · proposition — Closed constant-rank one-forms define integrable hyperplane fields
- `fs-the-exterior-derivative-is-c-infinity-linear` · false-statement — The exterior derivative is $C^\infty$-linear
- `fs-the-lie-derivative-is-c-infinity-linear-in-the-vector-field` · false-statement — The Lie derivative is $C^\infty$-linear in the vector field
- `fs-the-exterior-derivative-depends-on-a-riemannian-metric` · false-statement — The exterior derivative depends on a Riemannian metric
- `fs-every-closed-differential-form-is-globally-exact` · false-statement — Every closed differential form is globally exact
- `fs-lie-derivative-and-interior-product-commute-for-all-vector-fields` · false-statement — Lie derivative and interior product commute for all vector fields
- `fs-alpha-wedge-d-alpha-vanishes-for-every-one-form` · false-statement — $\alpha\wedge d\alpha$ vanishes for every one-form
- `fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported` · false-statement — Pullback of a compactly supported form is always compactly supported

### `the-exterior-derivative-and-cartan-calculus-examples` — The Exterior Derivative and Cartan Calculus — Examples (12 item(s))

- `ex-exterior-derivatives-of-coordinate-one-forms` · example — Exterior derivatives of coordinate one-forms
- `ex-the-euclidean-area-form-is-closed` · example — The Euclidean area form is closed
- `ex-the-angular-one-form-on-the-punctured-plane-is-closed` · example — The angular one-form on the punctured plane is closed
- `ex-the-angular-one-form-has-no-global-potential` · example — The angular one-form has no global potential
- `ex-curl-and-divergence-encoded-by-the-exterior-derivative` · example — Curl and divergence encoded by the exterior derivative
- `ex-lie-derivative-of-the-euclidean-metric-under-dilations` · example — Lie derivative of the Euclidean metric under dilations
- `ex-lie-derivative-of-an-area-form-and-planar-divergence` · example — Lie derivative of an area form and planar divergence
- `ex-cartans-formula-for-a-coordinate-vector-field` · example — Cartan's formula for a coordinate vector field
- `ex-a-contact-form-on-three-space` · example — A contact form on three-space
- `ex-an-integrable-pfaffian-equation-with-a-local-first-integral` · example — An integrable Pfaffian equation with a local first integral
- `cex-a-nonproper-pullback-destroys-compact-support` · counterexample — A nonproper pullback destroys compact support
- `ex-time-dependent-pullback-differentiation-for-a-translation` · example — Time-dependent pullback differentiation for a translation

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

1 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-f3bbac48ab5d393d545f858b · `def-semilinear-and-quasilinear-first-order-cauchy-problems`** (from group f, would-be-fatal) — The definition says only that a,b are smooth on an open set in R^n times R, but never requires the initial graph (gamma(y),phi(y))—even near the point under discussion—to lie in that coefficient domain. Thus allowed data can make both a(gamma(y),phi(y)) and b(gamma(y),phi(y)) undefined, so the displayed Cauchy problem and every ensuing initial characteristic system are not defined as written.

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
