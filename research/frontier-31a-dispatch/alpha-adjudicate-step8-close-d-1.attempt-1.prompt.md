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
label: step8-close-d-1

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
  "group": "d",
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
      "output": "HIGH 6 [lem-bounded-quantifiers-preserve-primitive-recursiveness] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [thm-sigma-one-sets-are-exactly-ce-sets] 2:4 declared dependencies; 3:biconditional / both-direction claim\nHIGH 5 [cor-delta-one-sets-are-exactly-decidable] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [lem-prenex-normalization-preserves-level] 2:boundary-sensitive language\nHIGH 6 [thm-halting-is-sigma-one-complete] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 7 [thm-totality-is-pi-two-complete] 2:5 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [lem-oracle-computation-has-a-finite-query-witness] 2:induction, recursion, or minimality\nHIGH 7 [thm-posts-theorem] 2:4 declared dependencies; 3:biconditional / both-direction claim; 2:induction, recursion, or minimality\nMODERATE 3 [lem-diagonal-set-at-each-level] 3:biconditional / both-direction claim\nORDINARY 0 [thm-arithmetical-hierarchy-is-strict] no signals\nHIGH 6 [thm-shoenfield-limit-lemma] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [fs-sigma-n-and-pi-n-are-disjoint] no signals\nORDINARY 2 [fs-limit-computable-has-a-known-stabilization-stage] 2:analytic limiting/completeness language\nHIGH 7 [ex-sigma-one-sets-are-exactly-ce-sets] 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [ex-shoenfield-limit-lemma] 2:analytic limiting/completeness language\nORDINARY 2 [cex-sigma-n-and-pi-n-are-disjoint] 2:boundary-sensitive language\nMODERATE 4 [lem-effective-enumeration-of-clocked-machines] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [lem-time-diagonal-language-respects-its-budget] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [thm-deterministic-time-hierarchy] no signals\nORDINARY 0 [cor-p-is-properly-contained-in-exp] no signals\nHIGH 5 [thm-nondeterministic-time-hierarchy] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [lem-space-bounded-universal-simulation] 2:boundary-sensitive language\nORDINARY 0 [lem-space-diagonal-machine-halts] no signals\nMODERATE 4 [thm-deterministic-space-hierarchy] 2:4 declared dependencies; 2:analytic limiting/completeness language\nHIGH 6 [lem-read-only-workspace-universal-simulation] 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 0 [lem-read-only-workspace-diagonal-machine-halts] no signals\nORDINARY 2 [thm-read-only-workspace-space-hierarchy] 2:5 declared dependencies\nORDINARY 0 [lem-read-only-workspace-simulates-in-all-tapes-space] no signals\nORDINARY 0 [cor-l-is-properly-contained-in-pspace] no signals\nORDINARY 0 [lem-padding-transfers-time-bounds] no signals\nORDINARY 0 [thm-gap-and-union-theorems-for-complexity-bounds] no signals\nMODERATE 4 [prop-hierarchy-theorems-do-not-separate-p-from-np] 2:5 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [fs-unrestricted-diagonalization-respects-any-bound] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-time-diagonal-language-respects-its-budget] 2:boundary-sensitive language\nORDINARY 2 [ex-hierarchy-theorems-do-not-separate-p-from-np] 2:boundary-sensitive language\nMODERATE 4 [cex-unrestricted-diagonalization-respects-any-bound] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [lem-logspace-machines-have-polynomially-many-configurations] 2:boundary-sensitive language\nHIGH 5 [lem-logspace-reductions-compose] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [thm-directed-st-connectivity-is-nl-complete] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-read-only-input-savitch-simulation] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [thm-nl-is-contained-in-dspace-log-squared-n] 1:2 cited facts\nORDINARY 0 [lem-reachability-count-is-verifiable-in-nl] no signals\nHIGH 5 [lem-nonreachability-has-an-inductive-counting-certificate] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-immerman-szelepcsenyi-nl-equals-conl] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [cor-nspace-is-closed-under-complement-above-logspace] no signals\nMODERATE 4 [lem-polynomial-time-computations-have-logspace-uniform-circuits] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [thm-circuit-value-is-p-complete] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-nl-equals-conl-follows-by-state-swapping] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-logspace-reductions-compose] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-circuit-value-is-p-complete] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-nl-equals-conl-follows-by-state-swapping] 1:2 cited facts; 2:boundary-sensitive language\nrisk-report: 15 error(s), 704 item(s) routed",
      "named_ids": [
        "lem-bounded-quantifiers-preserve-primitive-recursiveness",
        "thm-sigma-one-sets-are-exactly-ce-sets",
        "cor-delta-one-sets-are-exactly-decidable",
        "lem-prenex-normalization-preserves-level",
        "thm-halting-is-sigma-one-complete",
        "thm-totality-is-pi-two-complete",
        "lem-oracle-computation-has-a-finite-query-witness",
        "thm-posts-theorem",
        "lem-diagonal-set-at-each-level",
        "thm-arithmetical-hierarchy-is-strict",
        "thm-shoenfield-limit-lemma",
        "fs-sigma-n-and-pi-n-are-disjoint",
        "fs-limit-computable-has-a-known-stabilization-stage",
        "ex-sigma-one-sets-are-exactly-ce-sets",
        "ex-shoenfield-limit-lemma",
        "cex-sigma-n-and-pi-n-are-disjoint",
        "lem-effective-enumeration-of-clocked-machines",
        "lem-time-diagonal-language-respects-its-budget",
        "thm-deterministic-time-hierarchy",
        "cor-p-is-properly-contained-in-exp",
        "thm-nondeterministic-time-hierarchy",
        "lem-space-bounded-universal-simulation",
        "lem-space-diagonal-machine-halts",
        "thm-deterministic-space-hierarchy",
        "lem-read-only-workspace-universal-simulation",
        "lem-read-only-workspace-diagonal-machine-halts",
        "thm-read-only-workspace-space-hierarchy",
        "lem-read-only-workspace-simulates-in-all-tapes-space",
        "cor-l-is-properly-contained-in-pspace",
        "lem-padding-transfers-time-bounds",
        "thm-gap-and-union-theorems-for-complexity-bounds",
        "prop-hierarchy-theorems-do-not-separate-p-from-np",
        "fs-unrestricted-diagonalization-respects-any-bound",
        "ex-time-diagonal-language-respects-its-budget",
        "ex-hierarchy-theorems-do-not-separate-p-from-np",
        "cex-unrestricted-diagonalization-respects-any-bound",
        "lem-logspace-machines-have-polynomially-many-configurations",
        "lem-logspace-reductions-compose",
        "thm-directed-st-connectivity-is-nl-complete",
        "thm-read-only-input-savitch-simulation",
        "thm-nl-is-contained-in-dspace-log-squared-n",
        "lem-reachability-count-is-verifiable-in-nl",
        "lem-nonreachability-has-an-inductive-counting-certificate",
        "thm-immerman-szelepcsenyi-nl-equals-conl",
        "cor-nspace-is-closed-under-complement-above-logspace",
        "lem-polynomial-time-computations-have-logspace-uniform-circuits",
        "thm-circuit-value-is-p-complete",
        "fs-nl-equals-conl-follows-by-state-swapping",
        "ex-logspace-reductions-compose",
        "ex-circuit-value-is-p-complete",
        "cex-nl-equals-conl-follows-by-state-swapping"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 5632 rows over 1 contract file(s); 4633 marked not_applicable\n\nTEMPLATE REUSE — 25 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Steps 2.1–5.1: finite face maxima and least natural depths need no global choice; small simplices including vertices have depth zero; repeated faces/cancellatio…\"\n    items: thm-cover-small-inclusion-is-a-chain-homotopy-equivalence\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Step 1.1 uses the supplied basepoint, excluding empty X; steps 3.1–4.1 check n=0, n=-1, lower degrees, the point, and G=0.\"\n    items: cor-suspension-isomorphism-in-reduced-singular-homology\n\n  6 rows · axes: empty, endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–4.1 handle finite short-input exceptions, endmarkers, invalid configuration names, exact reachability equivalence, and both co-class inclusions.\"\n    items: thm-immerman-szelepcsenyi-nl-equals-conl\n\n  5 rows · axes: empty, endpoints, iff-forward, iff-reverse, one\n    \"The refutation uses the fixed nontrivial finite groups V=C_2 x C_2 and A=C_2; no variable family, endpoint, or biconditional branch is asserted.\"\n    items: fs-the-universal-coefficient-short-exact-sequence-splits-naturally\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution calculation in 1.1; right exactness and H0 in 1.2; horseshoe kernel and converse in 2.1–3.1. Zero tensor functors are exact. DC and supplied res…\"\n    items: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution forward argument in 1.1, natural Tor0 and cokernel calculation in 1.2, left-variable LES and converse in 2.1–3.1. Zero tensor functors are exact…\"\n    items: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes\n\n  5 rows · axes: degenerate, empty, endpoints, iff-forward, iff-reverse\n    \"This explicit positive-integer finite-complex calculation has no additional empty branch.\"\n    items: ex-the-tensor-double-complex-in-low-degrees\n\n  5 rows · axes: empty, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1 and 2.1 account for malformed inputs, empty source, zero unary padding, and both independently hypothesized translations.\"\n    items: lem-padding-transfers-time-bounds\n\n  5 rows · axes: endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–5.1 include n=0, early halting, boundary head positions, and exact configuration induction in both acceptance directions.\"\n    items: lem-polynomial-time-computations-have-logspace-uniform-circuits\n\n  4 rows · axes: degenerate, empty, one, zero\n    \"Step 1.1 includes the zero space/empty direct sum and negative virtual classes; step 2.1 preserves zero, multiplication, and the unit [k].\"\n    items: ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces\n\n  4 rows · axes: degenerate, empty, nonempty-choice, zero\n    \"Suprema in N union infinity are determined by finite upper bounds; sup empty=0 handles the zero ring. DC and supplied resolutions on both hands permit the crite…\"\n    items: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric\n\n  4 rows · axes: degenerate, empty, endpoints, zero\n    \"Step 3.1 covers empty overlap/cover members, G=0, degree zero, and terminal zero maps; the inclusion square in step 2.1 holds in every degree.\"\n    items: thm-naturality-of-singular-mayer-vietoris\n\n  … 13 further cluster(s); use --json for all\n\nCONTRADICTED DISPOSITIONS — 2 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\nUPHELD BY REVIEW — 7 row(s) an Alpha read and kept, with reasons on the record:\n  thm-gap-and-union-theorems-for-complexity-bounds  [empty]  by alpha-contract-audit-8: The displayed union is indexed by all natural numbers, a fixed nonempty index set; the detector sees a union symbol but \n  lem-polynomial-time-computations-have-logspace-uniform-circuits  [empty]  by alpha-contract-audit-8: The circuit family is indexed by input lengths and the proof constructs each indexed circuit; the word family does not i\n\nEvery line above is a candidate for a human read, not a verdict.\n",
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
      "id": "lem-bounded-quantifiers-preserve-primitive-recursiveness",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-sigma-one-sets-are-exactly-ce-sets",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-delta-one-sets-are-exactly-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-prenex-normalization-preserves-level",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-halting-is-sigma-one-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-totality-is-pi-two-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-oracle-computation-has-a-finite-query-witness",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-posts-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-diagonal-set-at-each-level",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-arithmetical-hierarchy-is-strict",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-shoenfield-limit-lemma",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-sigma-n-and-pi-n-are-disjoint",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-limit-computable-has-a-known-stabilization-stage",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-sigma-one-sets-are-exactly-ce-sets",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-shoenfield-limit-lemma",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-sigma-n-and-pi-n-are-disjoint",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-effective-enumeration-of-clocked-machines",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-time-diagonal-language-respects-its-budget",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-deterministic-time-hierarchy",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-p-is-properly-contained-in-exp",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-nondeterministic-time-hierarchy",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-space-bounded-universal-simulation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-space-diagonal-machine-halts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-deterministic-space-hierarchy",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-read-only-workspace-universal-simulation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-read-only-workspace-diagonal-machine-halts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-read-only-workspace-space-hierarchy",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-read-only-workspace-simulates-in-all-tapes-space",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-l-is-properly-contained-in-pspace",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-padding-transfers-time-bounds",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-gap-and-union-theorems-for-complexity-bounds",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-hierarchy-theorems-do-not-separate-p-from-np",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-unrestricted-diagonalization-respects-any-bound",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-time-diagonal-language-respects-its-budget",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-hierarchy-theorems-do-not-separate-p-from-np",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-unrestricted-diagonalization-respects-any-bound",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-logspace-machines-have-polynomially-many-configurations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-logspace-reductions-compose",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-directed-st-connectivity-is-nl-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-read-only-input-savitch-simulation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-nl-is-contained-in-dspace-log-squared-n",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-reachability-count-is-verifiable-in-nl",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-nonreachability-has-an-inductive-counting-certificate",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-immerman-szelepcsenyi-nl-equals-conl",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-nspace-is-closed-under-complement-above-logspace",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-polynomial-time-computations-have-logspace-uniform-circuits",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-circuit-value-is-p-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-nl-equals-conl-follows-by-state-swapping",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-logspace-reductions-compose",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-circuit-value-is-p-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-nl-equals-conl-follows-by-state-swapping",
      "scope": "run",
      "owner": "d"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-bounded-quantifiers-preserve-primitive-recursiveness",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-sigma-one-sets-are-exactly-ce-sets",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-delta-one-sets-are-exactly-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-prenex-normalization-preserves-level",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-halting-is-sigma-one-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-totality-is-pi-two-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-oracle-computation-has-a-finite-query-witness",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-posts-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-diagonal-set-at-each-level",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-arithmetical-hierarchy-is-strict",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-shoenfield-limit-lemma",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-sigma-n-and-pi-n-are-disjoint",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-limit-computable-has-a-known-stabilization-stage",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-sigma-one-sets-are-exactly-ce-sets",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-shoenfield-limit-lemma",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-sigma-n-and-pi-n-are-disjoint",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-effective-enumeration-of-clocked-machines",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-time-diagonal-language-respects-its-budget",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-deterministic-time-hierarchy",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-p-is-properly-contained-in-exp",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-nondeterministic-time-hierarchy",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-space-bounded-universal-simulation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-space-diagonal-machine-halts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-deterministic-space-hierarchy",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-read-only-workspace-universal-simulation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-read-only-workspace-diagonal-machine-halts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-read-only-workspace-space-hierarchy",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-read-only-workspace-simulates-in-all-tapes-space",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-l-is-properly-contained-in-pspace",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-padding-transfers-time-bounds",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-gap-and-union-theorems-for-complexity-bounds",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-hierarchy-theorems-do-not-separate-p-from-np",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-unrestricted-diagonalization-respects-any-bound",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-time-diagonal-language-respects-its-budget",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-hierarchy-theorems-do-not-separate-p-from-np",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-unrestricted-diagonalization-respects-any-bound",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-logspace-machines-have-polynomially-many-configurations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-logspace-reductions-compose",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-directed-st-connectivity-is-nl-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-read-only-input-savitch-simulation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-nl-is-contained-in-dspace-log-squared-n",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-reachability-count-is-verifiable-in-nl",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-nonreachability-has-an-inductive-counting-certificate",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-immerman-szelepcsenyi-nl-equals-conl",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-nspace-is-closed-under-complement-above-logspace",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-polynomial-time-computations-have-logspace-uniform-circuits",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-circuit-value-is-p-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-nl-equals-conl-follows-by-state-swapping",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-logspace-reductions-compose",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-circuit-value-is-p-complete",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-nl-equals-conl-follows-by-state-swapping",
      "scope": "run",
      "owner": "d"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **d**, run `frontier-31a`

You are the group Alpha for batches **21**, **22**: 3 A/B pair(s), 6 page(s), 66 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 21 | `the-arithmetical-hierarchy-and-posts-theorem` | A | computability-theory | 613 | `acceptable-numberings-smn-and-the-recursion-theorem` |
| 21 | `the-arithmetical-hierarchy-and-posts-theorem-examples` | B | computability-theory | 614 | `the-arithmetical-hierarchy-and-posts-theorem` |
| 21 | `time-and-space-hierarchy-theorems` | A | computability-theory | 627 | `space-complexity-savitch-and-tqbf`, `diagonalization-and-the-halting-problem` |
| 21 | `time-and-space-hierarchy-theorems-examples` | B | computability-theory | 628 | `time-and-space-hierarchy-theorems` |
| 22 | `logarithmic-space-nl-and-reachability` | A | computability-theory | 629 | `time-and-space-hierarchy-theorems` |
| 22 | `logarithmic-space-nl-and-reachability-examples` | B | computability-theory | 630 | `logarithmic-space-nl-and-reachability` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-arithmetical-hierarchy-and-posts-theorem` — The Arithmetical Hierarchy and Post's Theorem (18 item(s))

- `def-bounded-arithmetic-formula` · definition — Bounded arithmetic formulas
- `def-sigma-n-pi-n-and-delta-n-sets` · definition — The classes Sigma_n^0, Pi_n^0, and Delta_n^0
- `lem-bounded-quantifiers-preserve-primitive-recursiveness` · lemma — Bounded quantifiers preserve primitive recursiveness
- `thm-sigma-one-sets-are-exactly-ce-sets` · theorem — Sigma_1^0 sets are exactly the computably enumerable sets
- `cor-delta-one-sets-are-exactly-decidable` · corollary — Delta_1^0 sets are exactly the decidable sets
- `lem-prenex-normalization-preserves-level` · lemma — Prenex normalization preserves the arithmetical level
- `def-arithmetical-level-completeness` · definition — Completeness at an arithmetical level
- `thm-halting-is-sigma-one-complete` · theorem — The halting set is Sigma_1^0-complete
- `thm-totality-is-pi-two-complete` · theorem — The totality set is Pi_2^0-complete
- `def-relative-computability-and-enumerability` · definition — Relative computability and relative enumerability
- `lem-oracle-computation-has-a-finite-query-witness` · lemma — An oracle computation has a finite query witness
- `thm-posts-theorem` · theorem — Post's theorem
- `lem-diagonal-set-at-each-level` · lemma — A diagonal set at each arithmetical level
- `thm-arithmetical-hierarchy-is-strict` · theorem — The arithmetical hierarchy is strict
- `def-limit-computable-function` · definition — Limit-computable functions
- `thm-shoenfield-limit-lemma` · theorem — Shoenfield's limit lemma
- `fs-sigma-n-and-pi-n-are-disjoint` · false-statement — False: Sigma_n^0 and Pi_n^0 are disjoint
- `fs-limit-computable-has-a-known-stabilization-stage` · false-statement — False: a limit-computable function has a known stabilization stage

### `the-arithmetical-hierarchy-and-posts-theorem-examples` — The Arithmetical Hierarchy and Post's Theorem: Examples and Counterexamples (3 item(s))

- `ex-sigma-one-sets-are-exactly-ce-sets` · example — Reading a c.e. definition as a Sigma_1^0 formula
- `ex-shoenfield-limit-lemma` · example — A limit approximation computed from the halting oracle
- `cex-sigma-n-and-pi-n-are-disjoint` · counterexample — A set lying in both Sigma_n^0 and Pi_n^0

### `time-and-space-hierarchy-theorems` — Time and Space Hierarchy Theorems (20 item(s))

- `def-efficient-universal-simulation-with-clock` · definition — An efficient universal simulation with a clock
- `lem-effective-enumeration-of-clocked-machines` · lemma — Effective enumeration of clocked machines
- `lem-time-diagonal-language-respects-its-budget` · lemma — The time-diagonal language respects its budget
- `thm-deterministic-time-hierarchy` · theorem — The deterministic time hierarchy theorem
- `cor-p-is-properly-contained-in-exp` · corollary — P is properly contained in EXP
- `thm-nondeterministic-time-hierarchy` · theorem — The nondeterministic time hierarchy theorem
- `lem-space-bounded-universal-simulation` · lemma — Space-bounded universal simulation
- `lem-space-diagonal-machine-halts` · lemma — The space-diagonal machine halts
- `thm-deterministic-space-hierarchy` · theorem — The deterministic space hierarchy theorem
- `def-read-only-input-workspace-classes` · definition — Read-only-input work-space classes and constructibility
- `lem-read-only-workspace-universal-simulation` · lemma — Universal simulation preserves read-only work space up to constants
- `lem-read-only-workspace-diagonal-machine-halts` · lemma — The read-only-workspace diagonal machine halts
- `thm-read-only-workspace-space-hierarchy` · theorem — The read-only-workspace space hierarchy theorem
- `lem-read-only-workspace-simulates-in-all-tapes-space` · lemma — Read-only work space becomes all-tapes space after charging input
- `cor-l-is-properly-contained-in-pspace` · corollary — L is properly contained in PSPACE
- `def-language-padding` · definition — Language padding
- `lem-padding-transfers-time-bounds` · lemma — Padding transfers time bounds
- `thm-gap-and-union-theorems-for-complexity-bounds` · theorem — Gap and union theorems for abstract complexity bounds
- `prop-hierarchy-theorems-do-not-separate-p-from-np` · proposition — Hierarchy theorems do not separate P from NP
- `fs-unrestricted-diagonalization-respects-any-bound` · false-statement — False: unrestricted diagonalization respects any resource bound

### `time-and-space-hierarchy-theorems-examples` — Time and Space Hierarchy Theorems: Examples and Counterexamples (3 item(s))

- `ex-time-diagonal-language-respects-its-budget` · example — Budgeting a time-diagonal language
- `ex-hierarchy-theorems-do-not-separate-p-from-np` · example — Why a hierarchy separation is not a P versus NP separation
- `cex-unrestricted-diagonalization-respects-any-bound` · counterexample — Overhead breaks an unrestricted diagonalization claim

### `logarithmic-space-nl-and-reachability` — Logarithmic Space, NL, and Reachability (19 item(s))

- `def-read-only-input-logspace-machine` · definition — A read-only-input logarithmic-space machine
- `def-l-and-nl` · definition — The classes L and NL
- `lem-logspace-machines-have-polynomially-many-configurations` · lemma — Logspace machines have polynomially many configurations
- `def-logspace-many-one-reduction` · definition — Logspace many-one reduction
- `lem-logspace-reductions-compose` · lemma — Logspace many-one reductions compose
- `def-directed-st-connectivity` · definition — Directed s-t connectivity
- `thm-directed-st-connectivity-is-nl-complete` · theorem — Directed s-t connectivity is NL-complete
- `thm-read-only-input-savitch-simulation` · theorem — Savitch simulation into read-only-input deterministic work space
- `thm-nl-is-contained-in-dspace-log-squared-n` · theorem — NL is contained in read-only-input DWORKSPACE(log-squared n)
- `def-inductive-reachable-vertex-count` · definition — Inductive counts of reachable vertices
- `lem-reachability-count-is-verifiable-in-nl` · lemma — A reachable-vertex count is verifiable in NL
- `lem-nonreachability-has-an-inductive-counting-certificate` · lemma — Nonreachability has an inductive counting certificate
- `thm-immerman-szelepcsenyi-nl-equals-conl` · theorem — Immerman-Szelepcsényi theorem: NL equals coNL
- `cor-nspace-is-closed-under-complement-above-logspace` · corollary — Read-only-input nondeterministic work space is closed under complement above logarithmic space
- `def-logspace-uniform-circuit-family` · definition — A logspace-uniform Boolean circuit family
- `def-p-complete-under-logspace-reductions` · definition — P-completeness under logspace reductions
- `lem-polynomial-time-computations-have-logspace-uniform-circuits` · lemma — Polynomial-time computations have logspace-uniform circuit families
- `thm-circuit-value-is-p-complete` · theorem — Circuit Value is P-complete
- `fs-nl-equals-conl-follows-by-state-swapping` · false-statement — NL equals coNL follows by swapping accepting and rejecting states

### `logarithmic-space-nl-and-reachability-examples` — Logarithmic Space, NL, and Reachability: Examples and Counterexamples (3 item(s))

- `ex-logspace-reductions-compose` · example — Composing two logspace reductions through a virtual tape
- `ex-circuit-value-is-p-complete` · example — A small computation tableau compiled to Circuit Value
- `cex-nl-equals-conl-follows-by-state-swapping` · counterexample — A nondeterministic branch tree where state swapping is not complementing

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

2 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-b2ea65ee34516cd9fc3478bb · `lem-prenex-normalization-preserves-level`** (from group d, would-be-fatal) — The statement says that “finite Boolean combinations” of formulas from one class remain prenexable in that same Σ_n^0 or Π_n^0 class, but Boolean combinations ordinarily include negation. Negating a Σ₁^0 formula for a nondecidable c.e. set produces a Π₁^0 formula that need not be Σ₁^0. The proof only establishes closure under conjunction and disjunction. The claim needs a positive-Boolean-combination restriction or a changed conclusion.
- **s8a-0bf94c696b55731353150df2 · `def-efficient-universal-simulation-with-clock`** (from group d, would-be-fatal) — The definition gives the fixed simulator space bound as O(S+log b), although it says U_b first decodes the self-delimiting pair ⟨M,x⟩ and rejects malformed encodings. Under the page’s all-tapes convention, decoding/retaining an encoded input of total length n generally costs an O(n) term; the later lemma correctly states O(n+S). As written the definition omits that term and is stronger than the later simulation interface supports.

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
