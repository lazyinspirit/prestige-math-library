# Phase 2 next 17 — batch 10 Step-1 notes

Role: beta. Scope is exactly the two assigned A/B pairs at orders 620.2/620.4
and 626.2/626.4. The run's pre-existing manifest and coverage derive from the
`phase-2-next-15` batch-9 scaffold and include the later owner-retained SAT
prerequisite correction and owner-resolved source-drop record. I retained those
artifacts unchanged in this dispatch. No published item, shared plan, engine
state, verdict, or selected pair was edited.

## Controlling plan and design comparison

I read the complete design sections in
`research/plan-computability-theory-track.md` (the sections beginning at lines
3235 and 3279), the four current `research/plan-spec.json` page records, the
dispatch, `research/phase-2-next-17-prerequisite-audit.md`, and
`research/phase-2-next-17-alpha-step1-drift.md`. The current plan controls these
differences:

- The design gives the SAT A page only
  `effective-numberings-reductions-resources-and-randomness` and
  `turing-machines-configurations-and-computation`. The current plan also
  requires `resource-bounds-and-machine-invariance`. This is a substantive
  correction: the PSPACE/NPSPACE definition and configuration-count/TQBF branch
  use its DSPACE/NSPACE, worst-case-space, and asymptotic-invariance contracts.
  The imported manifest retains the added edge.
- Both design B titles use an em dash before `Examples`; the current plan uses a
  colon. The imported manifest uses the current-plan titles.
- The SAT B design omits a `companion` field while the current plan supplies
  `sat-tableaux-and-quantified-space-completeness`; the imported manifest uses
  that current-plan companion link.
- All four current-plan `items` arrays are empty, whereas the mathematical
  design gives the nonempty 9/3/7/2 inventories. This is a plan granularity
  gap, not permission to erase the designed inventory: `validate-plan` treats
  an empty plan list as page-level-only, and the run prerequisite audit
  explicitly directs workers to preserve the completed imported objects. The
  21 designed items were therefore retained unchanged.

Orders, page IDs, kinds, categories, A/B pairings, the nondeterministic A
prerequisites, and both B-to-A prerequisite edges otherwise agree.

## Construction order and outcomes

The existing inventory was audited once in its stated prerequisite order and
not regenerated. Fresh non-owner readiness records were then written in this
order:

1. SAT syntax and encoding; bounded tableaux; tableau correctness; polynomial
   Tseitin/CNF construction; Cook--Levin; 3-SAT; PSPACE/NPSPACE; configuration
   counting; TQBF completeness; then the three B examples.
2. Shortest nondeterministic acceptance time and exact clocks; linear two-tape
   display verification; prefix universal simulation; quantitative
   self-reference; cutoffs/unions; the recursive-unary diagonal bound; the
   recursive-padding separation theorem; then the two B examples.

All 21 outcomes are `ready`. Each record contains its exact manifest `deps`
array and a current item/dependency hash. No prior current-run ready record was
overwritten and no `--owner` option was used.

For the polynomial/logarithmic example, the exact Step-3 instantiation is the
one in the manifest and source-resolution alternative:
`T_k(n)=Theta((n+1)^k)` and
`a(n)=max(n,ceil((n+1)^k/log_2(n+2)))`. Thus
`a(n+1)=o(T_k(n))`, giving a language in the former class and outside the
latter. A shorthand sentence in that item's readiness reason transposed the
two illustrative functions; the manifest statement/proof strategy, coverage
alternative, dependencies, and readiness conclusion are the controlling and
correct records. The Step-1 tool forbids a worker from overwriting a closed
ready record, so this note records the correction for owner reconciliation.

## Dependency, convention, and axiom audit

The 21 manifest dependency arrays were checked against the actual statements
and proof strategies, not page membership. Their external transitive closure
contains 95 existing items, all published. The direct proofs/contracts read
include:

- total polynomial-time many-one reductions with the direction
  `x in L iff f(x) in K`, polynomial verifiers, and explicit malformed-input
  behavior;
- semi-infinite, left-clamped Turing tapes; configurations; one-step,
  initial, accepting, and halting interfaces; the proved multitape-to-one-tape
  simulation and quadratic bound;
- all-branch-halting DTIME/NTIME and all-tapes visited-cell DSPACE/NSPACE,
  worst-case bounds, uniform asymptotic comparison, and machine
  constructibility;
- finite-branching nondeterministic acceptance, effective prefix-free machine
  encodings and decoding, s-m-n, and Kleene's fixed-point theorem.

No local consumer precedes its supplier. No dependency is missing, circular,
forward, or merely justified by publication status. The SAT page reaches the
robust machine-model page transitively through its declared prerequisites. The
nondeterministic theorem does not consume `thm-nondeterministic-time-hierarchy`
or any other result it is intended to replace. Its hard route keeps shortest
accepting time separate from all-branch halting, proves the SFM two-tape
display/action simulation, obtains quantitative overhead from a concrete
prefix compiler rather than from extensional recursion alone, handles fixed
machine constants and short inputs, proves the recursive unary diagonal lemma,
and commissions both recursive-padding inductions with the shifted condition
`a(n+1)=o(T(n))`.

For space, a configuration uses `O(S(n)+log n)` bits and hence there are
`2^{O(S(n)+log n)}` configurations. In PSPACE the polynomial bound may be
enlarged to dominate `n`, yielding the simplified polynomial exponent used by
TQBF hardness. TQBF membership uses depth-first recursive evaluation; hardness
uses the alternating midpoint recurrence with quantified reuse, not the
exponentially duplicated naive recurrence.

All constructions here are effective and finite. No use of AC was found or is
needed. The closure has no prerequisite path to
`deferred-set-theory-beyond-choice`; no Recorded result is used as proof.

## Source evidence and dispositions

The SAT page has two independent treatments (one author-hosted book and a
complete lecture-note sequence):

- Arora--Barak, *Computational Complexity: A Modern Approach*, complete
  relevant arguments in section 2.3, printed pages 44--50 (PDF 59--65), and
  section 4.3, printed pages 79--82 (PDF 94--98).
- Kabanets, CMPT 710 lectures 7 and 8 (complete lectures) for Cook--Levin and
  3-SAT, and lectures 12 and 13 (complete relevant PSPACE/TQBF continuation)
  for the quantified reachability proof.

The nondeterministic page records the complete relevant SFM route (definitions,
Lemmas 1--6, Theorem 4, and Corollary 4.1, pages 147--155) plus independent
full lecture-note treatments by Kabanets (Lecture 10, complete) and Vadhan
(Lecture 6, complete). The original ResearchGate SFM URL had one initial HTTP
403 and five recorded HTTP-403 retries. It was not retried in this dispatch.
The imported owner decision drops only that URL as fetch backing, with
`confidence: certain`; it retains every mathematical obligation and gives a
complete local alternative argument and dependency list for each of the nine
affected items. Step 3 must author and independently judge those arguments.

The coverage lists 49 harvested results. Every one is disposed as an included
or inline named item, a published prerequisite, or a specifically justified
out-of-scope result; there is no unassigned harvest. The fetch check reports
7/8 sources fetch-verified and 8/8 resolved, the eighth being the documented
owner drop. `--stamp` added no new stamp because all accessible sources already
had full-body verification receipts. The relevant PDF text and the complete
short lecture files were inspected; HTTP status and search snippets were not
treated as mathematical evidence.

## Published defects and planned repair suppliers

These are existing published consumer defects, not blockers for constructing
the new suppliers. Each planned supplier below is currently only manifest-ready
and remains unpublished until later workflow stages.

| Published consumer | Exact defective prerequisite/use | Planned supplier and repair |
|---|---|---|
| `cor-clique-is-np-complete` | Directly depends on draft `thm-three-sat-is-np-complete` at L2 and uses it for NP-hardness. | After publication, repoint to `thm-three-sat-completeness-interface`; preserve the certificate and reduction-composition proof. |
| `cor-hamiltonian-path-and-cycle-are-np-complete` | Directly depends on draft `thm-three-sat-is-np-complete` at L3 and uses it for each hardness chain. | Repoint to `thm-three-sat-completeness-interface`; preserve the four explicit reductions and boundary cases. |
| `thm-circuit-sat-is-np-complete` | Directly depends on draft `thm-cook-levin-sat-is-np-complete` at L2. | Repoint to `thm-cook-levin-sat-completeness-interface`; retain the gate induction and explicitly map malformed formula strings to a fixed unsatisfiable circuit. |
| `cor-l-is-properly-contained-in-pspace` | Directly depends on draft `def-pspace-and-npspace`; its proof invokes PSPACE without an explicit linked fact line. | Repoint to `def-polynomial-space-and-nondeterministic-polynomial-space` and make the class inclusion citation explicit. |
| `cor-ph-complete-language-forces-collapse` | Directly depends on draft `thm-tqbf-is-pspace-complete` at F3 and uses it in step 2.1. | Repoint to `thm-tqbf-pspace-completeness-interface`; preserve the finite-level collapse argument. |
| `thm-nondeterministic-time-hierarchy` | Directly depends on draft `def-time-and-space-constructible-function`, and step 2.1 imports the external SFM separation theorem rather than proving it. | Use published `def-machine-time-and-space-constructibility` for the clock interface and `thm-nondeterministic-recursive-padding-separation` for the hard separation; preserve the local clock-convention translation. |

The canonical published-consumer supplier ledger already records these defects.
No unrelated published consumer was changed, and none of the defective items is
an actual prerequisite of the new scaffold.

## Cross-batch input

`research/phase-2-next-17-batch-10.cross-batch-dependencies.json` remains the
empty array. The two A pages use only published earlier-page suppliers, and each
B page uses only its own paired A page. There is no new same-run prerequisite
pair or later-batch consumer dependency to add to
`briefs/tasks/frontier-dependency-ledger.md`; that shared ledger was not edited.

## Mechanical checks

- Batch coverage: 2 A pages, 49 harvested results, 0 errors, 0 warnings.
- Batch manifest dependencies: 21 items, 0 missing/normalized, 0 errors.
- Whole-run manifest dependencies (final rerun): 478 items, 0
  missing/normalized, 0 errors.
- Plan validation: pass; declared page order is acyclic and consistent, with no
  item-level cycle, forward reference, B-page dependency, or unresolved ID
  among pages whose item lists are present.
- External-reference check: pass; its repository-wide report has 55 pre-existing
  warnings about Recorded material, none in this batch or its proof closure.
- Source fetch check with `--stamp`: 7/8 fetch-verified, 8/8 resolved, 0 newly
  stamped, with one documented owner drop.
- Whole-run manifest-only content policy (final rerun): failed on three missing
  prerequisite declarations outside this scope. Batch 7 has two errors on
  `thm-regular-value-formula-for-degree` (missing
  `def-fundamental-class-of-a-compact-oriented-manifold` and
  `def-degree-of-a-map-between-oriented-closed-manifolds`) and one on
  `prop-degree-is-multiplicative-under-composition` (missing
  `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology`). None
  names a batch-10 item. Earlier concurrent batch-8 errors cleared before this
  final rerun; this worker did not alter either batch.

Unresolved batch-10 mathematical uncertainty: none. The documented readiness
reason transposition above remains an owner-reconciliation clerical issue, not
a defect in the manifest proof strategy or coverage argument.
