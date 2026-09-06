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
label: step8-close-h-1

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
  "group": "h",
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
      "output": "ORDINARY 0 [lem-finite-coordinate-cylinders-form-a-pi-system] no signals\nORDINARY 2 [lem-finite-coordinate-cylinder-sets-form-an-algebra] 2:boundary-sensitive language\nORDINARY 2 [lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined] 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 9 [lem-countable-product-cylinder-premeasure-is-countably-additive] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-countable-product-of-probability-spaces] 3:7 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [cor-coordinate-random-elements-on-a-countable-product-are-independent] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-countable-independent-copies-exist] 2:5 declared dependencies; 1:2 cited facts\nORDINARY 0 [lem-finite-products-of-standard-borel-spaces-are-standard-borel] no signals\nCRITICAL 10 [thm-borel-probability-measures-on-polish-spaces-are-inner-regular] 3:15 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 11 [thm-kolmogorov-extension-for-standard-borel-coordinate-spaces] 3:12 declared dependencies; 2:8 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cor-arbitrary-product-measure-for-standard-borel-probability-spaces] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [cor-canonical-process-realizes-consistent-finite-dimensional-laws] 2:boundary-sensitive language\nMODERATE 3 [thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions] 2:4 declared dependencies; 1:2 cited facts\nCRITICAL 10 [lem-cylinder-sigma-events-depend-on-countably-many-coordinates] 2:4 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [ex-infinite-coin-toss-space] 2:4 declared dependencies\nHIGH 5 [ex-iid-sequence-with-a-prescribed-law] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-independent-but-not-identically-distributed-coordinate-sequence] no signals\nORDINARY 0 [ex-canonical-random-walk-from-product-increments] no signals\nORDINARY 0 [ex-uncountable-bernoulli-coordinate-process] no signals\nORDINARY 2 [cex-modification-need-not-be-indistinguishable] 2:boundary-sensitive language\nORDINARY 2 [cex-consistent-marginals-alone-do-not-specify-joint-laws] 2:boundary-sensitive language\nMODERATE 4 [cex-a-noncylinder-path-functional-may-fail-measurability] 2:4 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set] 3:7 declared dependencies; 1:3 cited facts\nHIGH 5 [lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [lem-no-property-star-outcome-forces-a-small-structural-block-partition] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 11 [lem-integral-geometric-layers-have-rounded-cutoff-bounds] 2:6 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 1 [lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades] 1:3 cited facts\nCRITICAL 9 [lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade] 3:9 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [lem-successive-small-integral-geometric-layers-contradict-a-large-x-part] 2:6 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-the-structural-comb-partition-criterion-implies-property-star] 3:12 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-a-large-y-part-in-a-structural-comb-partition] 2:boundary-sensitive language\nORDINARY 2 [ex-a-wide-transversal-in-four-structural-comb-partitions] 2:boundary-sensitive language\nHIGH 5 [ex-integral-geometric-layers-for-fourteen-ordered-blocks] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cex-omitting-cross-block-purity-breaks-the-transversal-conclusion] 1:2 cited facts; 2:boundary-sensitive language\nrisk-report: 15 error(s), 704 item(s) routed",
      "named_ids": [
        "lem-finite-coordinate-cylinders-form-a-pi-system",
        "lem-finite-coordinate-cylinder-sets-form-an-algebra",
        "lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined",
        "lem-countable-product-cylinder-premeasure-is-countably-additive",
        "thm-countable-product-of-probability-spaces",
        "cor-coordinate-random-elements-on-a-countable-product-are-independent",
        "cor-countable-independent-copies-exist",
        "lem-finite-products-of-standard-borel-spaces-are-standard-borel",
        "thm-borel-probability-measures-on-polish-spaces-are-inner-regular",
        "thm-kolmogorov-extension-for-standard-borel-coordinate-spaces",
        "cor-arbitrary-product-measure-for-standard-borel-probability-spaces",
        "cor-canonical-process-realizes-consistent-finite-dimensional-laws",
        "thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions",
        "lem-cylinder-sigma-events-depend-on-countably-many-coordinates",
        "ex-infinite-coin-toss-space",
        "ex-iid-sequence-with-a-prescribed-law",
        "ex-independent-but-not-identically-distributed-coordinate-sequence",
        "ex-canonical-random-walk-from-product-increments",
        "ex-uncountable-bernoulli-coordinate-process",
        "cex-modification-need-not-be-indistinguishable",
        "cex-consistent-marginals-alone-do-not-specify-joint-laws",
        "cex-a-noncylinder-path-functional-may-fail-measurability",
        "lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set",
        "lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade",
        "lem-no-property-star-outcome-forces-a-small-structural-block-partition",
        "lem-integral-geometric-layers-have-rounded-cutoff-bounds",
        "lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades",
        "lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade",
        "lem-successive-small-integral-geometric-layers-contradict-a-large-x-part",
        "thm-the-structural-comb-partition-criterion-implies-property-star",
        "ex-a-large-y-part-in-a-structural-comb-partition",
        "ex-a-wide-transversal-in-four-structural-comb-partitions",
        "ex-integral-geometric-layers-for-fourteen-ordered-blocks",
        "cex-omitting-cross-block-purity-breaks-the-transversal-conclusion"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 5632 rows over 1 contract file(s); 4633 marked not_applicable\n\nTEMPLATE REUSE — 25 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Steps 2.1–5.1: finite face maxima and least natural depths need no global choice; small simplices including vertices have depth zero; repeated faces/cancellatio…\"\n    items: thm-cover-small-inclusion-is-a-chain-homotopy-equivalence\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Step 1.1 uses the supplied basepoint, excluding empty X; steps 3.1–4.1 check n=0, n=-1, lower degrees, the point, and G=0.\"\n    items: cor-suspension-isomorphism-in-reduced-singular-homology\n\n  6 rows · axes: empty, endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–4.1 handle finite short-input exceptions, endmarkers, invalid configuration names, exact reachability equivalence, and both co-class inclusions.\"\n    items: thm-immerman-szelepcsenyi-nl-equals-conl\n\n  5 rows · axes: empty, endpoints, iff-forward, iff-reverse, one\n    \"The refutation uses the fixed nontrivial finite groups V=C_2 x C_2 and A=C_2; no variable family, endpoint, or biconditional branch is asserted.\"\n    items: fs-the-universal-coefficient-short-exact-sequence-splits-naturally\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution calculation in 1.1; right exactness and H0 in 1.2; horseshoe kernel and converse in 2.1–3.1. Zero tensor functors are exact. DC and supplied res…\"\n    items: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution forward argument in 1.1, natural Tor0 and cokernel calculation in 1.2, left-variable LES and converse in 2.1–3.1. Zero tensor functors are exact…\"\n    items: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes\n\n  5 rows · axes: degenerate, empty, endpoints, iff-forward, iff-reverse\n    \"This explicit positive-integer finite-complex calculation has no additional empty branch.\"\n    items: ex-the-tensor-double-complex-in-low-degrees\n\n  5 rows · axes: empty, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1 and 2.1 account for malformed inputs, empty source, zero unary padding, and both independently hypothesized translations.\"\n    items: lem-padding-transfers-time-bounds\n\n  5 rows · axes: endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–5.1 include n=0, early halting, boundary head positions, and exact configuration induction in both acceptance directions.\"\n    items: lem-polynomial-time-computations-have-logspace-uniform-circuits\n\n  4 rows · axes: degenerate, empty, one, zero\n    \"Step 1.1 includes the zero space/empty direct sum and negative virtual classes; step 2.1 preserves zero, multiplication, and the unit [k].\"\n    items: ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces\n\n  4 rows · axes: degenerate, empty, nonempty-choice, zero\n    \"Suprema in N union infinity are determined by finite upper bounds; sup empty=0 handles the zero ring. DC and supplied resolutions on both hands permit the crite…\"\n    items: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric\n\n  4 rows · axes: degenerate, empty, endpoints, zero\n    \"Step 3.1 covers empty overlap/cover members, G=0, degree zero, and terminal zero maps; the inclusion square in step 2.1 holds in every degree.\"\n    items: thm-naturality-of-singular-mayer-vietoris\n\n  … 13 further cluster(s); use --json for all\n\nCONTRADICTED DISPOSITIONS — 2 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\nUPHELD BY REVIEW — 7 row(s) an Alpha read and kept, with reasons on the record:\n  cor-countable-independent-copies-exist  [empty]  by alpha-contract-audit-8: The independent family is a sequence indexed by the natural numbers, so its index set is fixed and nonempty; no empty-fa\nEvery line above is a candidate for a human read, not a verdict.\n",
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
      "id": "lem-finite-coordinate-cylinders-form-a-pi-system",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-finite-coordinate-cylinder-sets-form-an-algebra",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-countable-product-cylinder-premeasure-is-countably-additive",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "thm-countable-product-of-probability-spaces",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cor-coordinate-random-elements-on-a-countable-product-are-independent",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cor-countable-independent-copies-exist",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-finite-products-of-standard-borel-spaces-are-standard-borel",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "thm-borel-probability-measures-on-polish-spaces-are-inner-regular",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "thm-kolmogorov-extension-for-standard-borel-coordinate-spaces",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cor-arbitrary-product-measure-for-standard-borel-probability-spaces",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cor-canonical-process-realizes-consistent-finite-dimensional-laws",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-cylinder-sigma-events-depend-on-countably-many-coordinates",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-infinite-coin-toss-space",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-iid-sequence-with-a-prescribed-law",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-independent-but-not-identically-distributed-coordinate-sequence",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-canonical-random-walk-from-product-increments",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-uncountable-bernoulli-coordinate-process",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cex-modification-need-not-be-indistinguishable",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cex-consistent-marginals-alone-do-not-specify-joint-laws",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cex-a-noncylinder-path-functional-may-fail-measurability",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-no-property-star-outcome-forces-a-small-structural-block-partition",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-integral-geometric-layers-have-rounded-cutoff-bounds",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-successive-small-integral-geometric-layers-contradict-a-large-x-part",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "thm-the-structural-comb-partition-criterion-implies-property-star",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-a-large-y-part-in-a-structural-comb-partition",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-a-wide-transversal-in-four-structural-comb-partitions",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-integral-geometric-layers-for-fourteen-ordered-blocks",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cex-omitting-cross-block-purity-breaks-the-transversal-conclusion",
      "scope": "run",
      "owner": "h"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-finite-coordinate-cylinders-form-a-pi-system",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-finite-coordinate-cylinder-sets-form-an-algebra",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-countable-product-cylinder-premeasure-is-countably-additive",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "thm-countable-product-of-probability-spaces",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cor-coordinate-random-elements-on-a-countable-product-are-independent",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cor-countable-independent-copies-exist",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-finite-products-of-standard-borel-spaces-are-standard-borel",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "thm-borel-probability-measures-on-polish-spaces-are-inner-regular",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "thm-kolmogorov-extension-for-standard-borel-coordinate-spaces",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cor-arbitrary-product-measure-for-standard-borel-probability-spaces",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cor-canonical-process-realizes-consistent-finite-dimensional-laws",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-cylinder-sigma-events-depend-on-countably-many-coordinates",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-infinite-coin-toss-space",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-iid-sequence-with-a-prescribed-law",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-independent-but-not-identically-distributed-coordinate-sequence",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-canonical-random-walk-from-product-increments",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-uncountable-bernoulli-coordinate-process",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cex-modification-need-not-be-indistinguishable",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cex-consistent-marginals-alone-do-not-specify-joint-laws",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cex-a-noncylinder-path-functional-may-fail-measurability",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-no-property-star-outcome-forces-a-small-structural-block-partition",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-integral-geometric-layers-have-rounded-cutoff-bounds",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "lem-successive-small-integral-geometric-layers-contradict-a-large-x-part",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "thm-the-structural-comb-partition-criterion-implies-property-star",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-a-large-y-part-in-a-structural-comb-partition",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-a-wide-transversal-in-four-structural-comb-partitions",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "ex-integral-geometric-layers-for-fourteen-ordered-blocks",
      "scope": "run",
      "owner": "h"
    },
    {
      "id": "cex-omitting-cross-block-purity-breaks-the-transversal-conclusion",
      "scope": "run",
      "owner": "h"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **h**, run `frontier-31a`

You are the group Alpha for batches **4**, **15**: 2 A/B pair(s), 4 page(s), 43 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-h-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 4 | `infinite-product-measures-and-kolmogorov-extension` | A | probability | 288.101 | `independence-borel-cantelli-and-zero-one-laws-examples`, `complete-metrizability-and-baire` |
| 4 | `infinite-product-measures-and-kolmogorov-extension-examples` | B | probability | 288.102 | `infinite-product-measures-and-kolmogorov-extension` |
| 15 | `the-structural-criterion-for-property-star` | A | combinatorics | 433 | `property-star-and-comb-outcomes` |
| 15 | `the-structural-criterion-for-property-star-examples` | B | combinatorics | 434 | `the-structural-criterion-for-property-star` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `infinite-product-measures-and-kolmogorov-extension` — Infinite Product Measures and Kolmogorov Extension (21 item(s))

- `def-coordinate-maps-and-cylinder-sigma-algebra` · definition — Coordinate maps, finite-coordinate cylinders, and the cylinder $\sigma$-algebra
- `lem-finite-coordinate-cylinders-form-a-pi-system` · lemma — Finite-coordinate cylinders form a $\pi$-system
- `lem-finite-coordinate-cylinder-sets-form-an-algebra` · lemma — Finite-coordinate cylinder sets form an algebra
- `def-consistent-family-of-finite-dimensional-distributions` · definition — A consistent family of finite-dimensional distributions
- `lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined` · lemma — Consistent finite-dimensional laws define a well-defined finitely additive cylinder law
- `lem-countable-product-cylinder-premeasure-is-countably-additive` · lemma — The countable-product cylinder premeasure is countably additive
- `thm-countable-product-of-probability-spaces` · theorem — Assuming countable and dependent choice, countable products of arbitrary probability spaces
- `cor-coordinate-random-elements-on-a-countable-product-are-independent` · corollary — Coordinate random elements of a countable product are independent
- `cor-countable-independent-copies-exist` · corollary — Countably many independent copies of a prescribed law exist
- `def-stochastic-process-and-finite-dimensional-distributions` · definition — Stochastic processes and their finite-dimensional distributions
- `def-law-modification-and-indistinguishability-of-processes` · definition — Process law, modification, and indistinguishability
- `def-standard-borel-space` · definition — Standard Borel spaces
- `lem-finite-products-of-standard-borel-spaces-are-standard-borel` · lemma — Finite products of standard Borel spaces are standard Borel
- `thm-borel-probability-measures-on-polish-spaces-are-inner-regular` · theorem — Assuming countable choice, Borel probability measures on Polish spaces are inner regular
- `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` · theorem — Assuming the Axiom of Choice, Kolmogorov extension for arbitrary families of standard Borel coordinate spaces
- `cor-arbitrary-product-measure-for-standard-borel-probability-spaces` · corollary — Arbitrary products of standard Borel probability spaces
- `cor-canonical-process-realizes-consistent-finite-dimensional-laws` · corollary — The canonical coordinate process realizes consistent finite-dimensional laws
- `thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions` · theorem — Finite-dimensional distributions determine a process law on the cylinder sigma-algebra
- `lem-cylinder-sigma-events-depend-on-countably-many-coordinates` · lemma — Assuming countable choice, cylinder-measurable events depend on only countably many coordinates
- `rem-cylinder-sigma-algebra-versus-full-product-power-set` · remark — The cylinder sigma-algebra need not be the full path-space power set
- `rem-kolmogorov-extension-state-space-boundary` · remark — State-space and index-set boundaries of the two extension routes

### `infinite-product-measures-and-kolmogorov-extension-examples` — Infinite Product Measures and Kolmogorov Extension — Examples (8 item(s))

- `ex-infinite-coin-toss-space` · example — The infinite fair-coin-toss space
- `ex-iid-sequence-with-a-prescribed-law` · example — An i.i.d. sequence with a prescribed law
- `ex-independent-but-not-identically-distributed-coordinate-sequence` · example — Independent but non-identically distributed coordinates
- `ex-canonical-random-walk-from-product-increments` · example — A canonical random walk from product increments
- `ex-uncountable-bernoulli-coordinate-process` · example — An uncountable Bernoulli coordinate process
- `cex-modification-need-not-be-indistinguishable` · counterexample — A modification need not be indistinguishable
- `cex-consistent-marginals-alone-do-not-specify-joint-laws` · counterexample — One-dimensional marginals alone do not specify a joint law
- `cex-a-noncylinder-path-functional-may-fail-measurability` · counterexample — A noncylinder path functional may fail to be measurable

### `the-structural-criterion-for-property-star` — The Structural Criterion for Property (*) (10 item(s))

- `def-structural-comb-partition-hypothesis` · definition — The structural comb-partition hypothesis
- `lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set` · lemma — A large Y-part in a structural comb partition yields the clique-or-stable-set outcome
- `lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade` · lemma — A transversal of wide structural blocks yields the pure blockade outcome
- `lem-no-property-star-outcome-forces-a-small-structural-block-partition` · lemma — Failure of the first and third property-(*) outcomes forces one small-block structural partition
- `def-integral-geometric-layers-of-a-decreasing-block-partition` · definition — Integral geometric layers of a decreasing block partition
- `lem-integral-geometric-layers-have-rounded-cutoff-bounds` · lemma — Integral geometric layers exist, cover the partition, and retain the required cutoff bounds
- `lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades` · lemma — Homogeneous sets in pure-blockade patterns lift to complete or anticomplete blockades
- `lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade` · lemma — A wide integral geometric layer forces the complete-or-anticomplete property-(*) blockade
- `lem-successive-small-integral-geometric-layers-contradict-a-large-x-part` · lemma — Successive small integral geometric layers contradict a large X-part
- `thm-the-structural-comb-partition-criterion-implies-property-star` · theorem — The structural comb-partition criterion implies property (*)

### `the-structural-criterion-for-property-star-examples` — The Structural Criterion for Property (*) — Examples (4 item(s))

- `ex-a-large-y-part-in-a-structural-comb-partition` · example — A large Y-part in a structural comb partition
- `ex-a-wide-transversal-in-four-structural-comb-partitions` · example — A wide transversal in four structural comb partitions
- `ex-integral-geometric-layers-for-fourteen-ordered-blocks` · example — Integral geometric layers for fourteen ordered blocks
- `cex-omitting-cross-block-purity-breaks-the-transversal-conclusion` · counterexample — Omitting cross-block purity breaks the transversal conclusion

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-35bd272d56c5d8470dbbb80f · `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`** (from group h, gap-a-reader-closes) — Proof 2.1 says that, after replacing each nonempty closed-ball cover member by a point of K_0 and “doubling the radius,” it obtains a finite net. If y and the selected centre p both lie in a closed ball of radius delta, the triangle inequality gives d(y,p)<=2 delta, whereas a net uses an open ball and requires a strict bound. Choosing the original scale strictly below the requested net radius, or using a larger radius, closes this, but the written inference is not valid as stated.
- **s8a-9bc2614340836ba932fd9836 · `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`** (from group h, gap-a-reader-closes) — Proof 2.1 invokes successive convergent-subsequence extraction and a diagonal limit from the compact finite-coordinate bases, but its cited facts establish only finite products being standard Borel and inner regularity. It does not state or cite the needed compact-metric sequential compactness/diagonal argument, nor explicitly transport those compact bases to compatible Polish product presentations. This is the central compactness step in the asserted continuity-at-empty-set proof.
- **s8a-7ee11d610f1a1f5ac356d7f1 · `ex-a-large-y-part-in-a-structural-comb-partition`** (from group h, gap-a-reader-closes) — Verification 1.1 says [F1] yields a clique or stable set of size at least (16/2)^(1/2)=sqrt(8). But [F1] cites the large-Y lemma whose stated conclusion is only at least w^(c/2), which here is 2. The stronger sqrt(8) bound appears in that lemma's proof, not its Statement, and this example supplies no separate Erdős–Hajnal fact from which to derive it.

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
