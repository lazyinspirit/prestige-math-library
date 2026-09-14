# Phase 2 next 18 — beta batch 6 construction evidence

Status: **PARTIALLY READY / OWNER RECONCILIATION REQUIRED**. The owned
manifest has 52 items: 47 have current non-owner `ready` records and five have
non-owner `escalated` records. The escalations are confined to the deep
PFA-to-PID/no-S-space proof and the arithmetized proof-compiler needed for the
formal relative-consistency corollary. These records establish Step-1
construction readiness only; they are not mathematical approval, publication,
or the Step-3 review.

No published content, shared plan, engine state, selected pair, or verdict was
edited. The only derived shared artifact touched was the run's unified
cross-batch dependency ledger, refreshed mechanically from the per-batch input
files as required by `briefs/tasks/frontier-dependency-ledger.md`.

## Scope, instructions, and inventory

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`,
`briefs/beta-scaffold.md`, the dispatch, the active
`.autopilot/phase-2-next-18/state.json`, the alpha drift/current-plan evidence,
the frontier dependency ledger, and the complete controlling design sections
in `research/plan-set-theory-completion-track.md`. Run state was taken from
`.autopilot/` and git, not from any concluded `RESUME.md`.

Owned pages only:

- SET-17 A, `suslin-trees-lines-algebras-and-independence`: 22 items;
- SET-17 B, `suslin-trees-lines-algebras-and-independence-examples`: 5 items;
- SET-27 A, `proper-forcing-countable-support-iterations-and-pfa`: 20 items;
- SET-27 B, `proper-forcing-countable-support-iterations-and-pfa-examples`: 5
  items.

Every item has an explicit statement, dependency array, proof strategy,
axiom-base annotation, provenance, and source reference. Items were constructed
and recorded in prerequisite order. Existing readiness records were preserved
except where the final source audit corrected the tree-to-line construction:
Monk's `B(T,prec)` uses maximal branches of countable limit length, not
impossible cofinal branches of a Suslin tree. That item and its ready downstream
consumers were rechecked and re-recorded with current hashes.
The same audit also corrected the Baumgartner B-page example: Karagila Theorem
8.13 adds the range of a generic normal function as a club in `omega_1`; it does
not add a club subset of an arbitrary stationary set (the latter forcing can
destroy the complement's stationarity and fail properness).

## Current-plan and design conflicts

`research/plan-spec.json` controls this run. Its page IDs, titles, categories,
orders, companions, and declared `requires` arrays agree with the dispatch and
the SET-17/SET-27 dependency table. The plan objects have empty `items` arrays;
that is the documented pre-materialization state, so the complete prose-design
inventories were placed in the owned manifest rather than treating the empty
arrays as mathematical review.

Two conflicts/overlaps require owner reconciliation:

1. SET-27 explicitly requires “PFA consequences for trees” and its constructed
   corollary `cor-pfa-implies-ma-aleph-one-and-suslin-hypothesis` needs the
   SET-17 suppliers `thm-ma-aleph-one-eliminates-suslin-trees` and
   `thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras`. SET-17 precedes
   SET-27 and is owned by this same batch, so the item chain is neither forward
   nor cross-batch, but SET-17 is not listed in SET-27's current page-level
   `requires`. I did not alter the plan or page metadata. Exact placement is
   SET-17 A before SET-27 A; the two B inventories remain consumers only.

2. The prose design assigns “PFA implies no S-spaces” and “formal consistency
   from a supercompact” to both SET-27 and SET-29, while the canonical target
   table assigns the clauses of `rem-l-spaces-and-s-spaces` to SET-29. The
   current Batch-9 scaffold confirms the overlap. SET-27's exact A chain is
   `def-p-ideals-pid-pseudointersection-number-and-s-spaces` ->
   `thm-pfa-implies-p-ideal-dichotomy` plus
   `lem-pfa-raises-the-pseudointersection-number` ->
   `thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces` ->
   `cor-pfa-implies-no-s-spaces`; its formal chain is
   `thm-a-supercompact-cardinal-can-be-forced-to-give-pfa` ->
   `lem-formal-pfa-iteration-verification-compiler` ->
   `cor-formal-consistency-of-pfa-from-a-supercompact`. SET-29's current A
   overlap is `def-simple-dichotomy-for-omega-one-generated-ideals` ->
   `thm-pfa-implies-the-simple-ideal-dichotomy` plus
   `lem-regular-nonhereditarily-lindelof-space-yields-ideal-witness` ->
   `thm-pfa-implies-there-are-no-s-spaces` ->
   `cor-supercompact-consistency-of-no-s-spaces`; that last item already names
   SET-27's formal-consistency corollary. Neither B inventory duplicates these
   claims. The clean owner-level placement is for SET-27 to supply the general
   PFA/PID and formal-PFA machinery and for SET-29 to retain its minimal-walk,
   L-space, CH S-space, and specialized topology application, consuming the
   earlier SET-27 results. I did not rewrite Batch 9, add a selected pair, or
   treat its scaffold as published.

## Mathematical and transitive-dependency audit

### Suslin trees, lines, and algebras

- The line convention is the library's strong one. The construction first
  normalizes and splits the tree, orders its maximal branches at their first
  difference, proves ccc and local nonseparability, and only then takes the
  Dedekind completion and removes endpoints. A final rereading of Monk Theorem
  9.13 caught and removed the erroneous phrase “cofinal branches”; a Suslin
  tree has none.
- The reverse direction first quotients a Suslin line by its separable convex
  pieces, then performs the nested-interval recursion. Countability of levels,
  absence of a cofinal branch, and absence of an uncountable antichain are each
  separate proof obligations.
- The algebra direction does not appeal to the earlier Recorded Kurepa remark.
  The regular-open direction proves countable distributivity from the actual
  tree forcing, and the converse constructs refining maximal antichains before
  extracting a Suslin tree.
- The ccc-square failure uses the normal splitting refinement. MA eliminates
  Suslin trees through the published finite specialization forcing and its
  dense-domain lemma. The positive and negative SH branches are conditional
  formal consistency implications; neither asserts absolute independence.

### Proper forcing, iterations, and PFA

- Properness is stated using predensity below a master condition, not the false
  demand that one condition lie in every dense set. The equivalence with
  `M[G] cap V=M` is proved using maximal antichains and forced ordinal names.
- Stationary preservation chooses `M` with `M cap omega_1` in the ground
  stationary set and uses the master condition to put that ordinal into the
  interpreted club. Ccc and countably closed forcings are proved proper by
  distinct arguments.
- The countable-support iteration route isolates the proper-iteration master
  lemma and treats successors, countable-cofinality fusion, and
  uncountable-cofinality bounded-model limits separately. Karagila states the
  preservation theorem and Cummings uses it as an interface; the manifest
  therefore supplies the local master-condition proof strategy instead of
  pretending either source prints the missing general proof.
- PFA is fixed at `omega_1` dense sets. The implication to MA uses that ccc
  forcings are proper; SH then uses the already constructed SET-17 Kurepa
  equivalence. The pseudointersection-number argument uses its explicit
  sigma-centered forcing.
- The supercompact construction distinguishes Laver preparation from
  Laver-function prediction. Cummings's reflection argument makes Cohen and
  Levy-collapse stages occur unboundedly often; properness preserves
  `omega_1`, the size/`kappa`-cc argument preserves `kappa`, and the anticipated
  proper forcing gives the factorization used to reflect a PFA filter. No claim
  that arbitrary proper forcing preserves supercompactness is made.

All declared direct published prerequisites used by this batch were found with
`status: published`; their full statements and the proof portions used here
were inspected for hypotheses, direction, forcing convention, and axiom cost.
A local DFS over the 52 owned items plus all 18,490 published item `deps` found
zero missing dependency paths, zero cycles, and zero paths into
`deferred-set-theory-beyond-choice`. No Recorded result is used to prove its
replacement, and no defective actual published prerequisite was found.

## Choice ledger

The construction is in ZFC where the design requires it, with
`def-axiom-of-choice` explicit on load-bearing paths. In SET-17 AC is used for
normal/splitting choices, extending nodes to maximal branches, choosing local
successor orders, maximal disjoint interval families, the `omega_1` interval
recursion, Boolean maximal antichains, and forcing generics/bookkeeping. The
formal consistency conclusions retain their external metatheoretic
antecedents.

In SET-27 AC supplies countable elementary models and enumerations, recursive
master-condition/name choices, countable-support bookkeeping, generalized
delta-system thinning, and ultrapower/Laver selections. PFA, PID, and
supercompactness are named additional hypotheses rather than consequences of
AC. The Laver-preparation remark preserves the directed-closed branch and does
not merge it with the incompatible class of arbitrary proper forcings. No
choice-free result is routed through an AC-only supplier without saying so.

## Full-text source evidence

Coverage records 51 harvested results with an explicit disposition for each.
Five page-source entries (four unique URLs) were full-text fetched, stamped,
and inspected:

- J. Donald Monk, *Set theory following Jech*: Lemma 9.12 and Theorems
  9.13–9.18, pp. 65–75; Theorem 15.38 and Propositions/Lemmas 15.43–15.45,
  pp. 273–278; Theorems 16.35 and 16.37–16.38, pp. 331–333.
- Asaf Karagila, *Forcing & Symmetric Extensions*: Definition 4.21 and
  Theorems 4.22–4.25, pp. 24–25; Proposition 7.4 and Theorem 7.10, pp. 34–37;
  Chapter 8, pp. 38–42.
- James Cummings, *Iterated Forcing and Elementary Embeddings*: Chapter 24,
  pp. 97–101, including the complete displayed supercompact-to-PFA argument.
- Stevo Todorcevic, *Forcing with a coherent Souslin tree*: Sections 2, 4,
  and 7 at pp. 2–3, 6–8, and 20–22.

Each A page has at least two independent authoritative treatments, including a
book or complete lecture-note/monograph treatment. All recorded source URLs
resolved and passed the full-text fetch gate. No source was dropped and no
`source_resolution` waiver applies. The one-page Brech abstract was inspected
as recovery evidence but was not counted as an active coverage source; its
insufficiency is part of the S-space escalation.

## Item escalations

- `thm-pfa-implies-p-ideal-dichotomy`: the retrieved full treatments support
  the theorem and route but cite rather than print the exact side-condition
  forcing and complete master-condition proof.
- `thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces`: Todorcevic gives
  the setup and part of the topology argument, but the complete second-PID-
  alternative argument was not recovered; the Brech file is only an abstract.
- `cor-pfa-implies-no-s-spaces`: depends on both preceding escalated suppliers.
- `lem-formal-pfa-iteration-verification-compiler`: the semantic forcing proof
  does not by itself provide the claimed PA-verifiable uniform proof-code
  constructors.
- `cor-formal-consistency-of-pfa-from-a-supercompact`: depends on that formal
  compiler.

The semantic theorem `thm-a-supercompact-cardinal-can-be-forced-to-give-pfa`
is ready; the escalation is specifically the stronger arithmetized compiler.
No escalation was overwritten.

## Cross-batch dependency input

`research/phase-2-next-18-batch-6.cross-batch-dependencies.json` is `[]`:
this batch consumes no same-run supplier owned by another batch. SET-27's use
of SET-17 is internal to this batch and ordered backward. Batch 9's consumption
of SET-27 is producer-side information, not a consumer edge owned by Batch 6;
it is nevertheless recorded above for owner reconciliation. The unified ledger
was refreshed and deduplicated successfully, and its strict
`--require-reviewed` gate passed after all batch inputs became available.

## Checks actually executed

Owned batch:

- `manifest-deps`: 52 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 52 scoped items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 2 A pages, 51 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check`: 5/5 page-source entries fetch-verified and resolved, 0
  documented drops; URL sweep found all four unique URLs live and source
  backing found all 23 checked item-source references backed.
- Readiness: 52/52 owned records exist; all 47 `ready` records match the current
  manifest/dependency hashes, and the five non-owner escalation records were
  retained without overwrite. There are 0 missing or stale ready records.
- Explicit transitive Foundations audit: 0 missing paths, 0 cycles, and 0 paths
  to `deferred-set-theory-beyond-choice`.

Whole run as observed at completion:

- `manifest-deps research/phase-2-next-18-batch-*.pages.json`: 531 items, 0
  normalized, 0 errors.
- Whole-run `content-policy --manifest-only`: 531 scoped items, 0 errors, 0
  warnings.
- `manifest-integrity --run phase-2-next-18`: all 36 owed pages present, no
  scope drift.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: success;
  declared page order is acyclic and consistent, with no item-level cycles,
  forward references, B-page dependencies, or unresolved IDs among 1,098 pages
  carrying item lists. It reports 521 planned pages whose item lists remain
  empty and unrelated redundant-prerequisite warnings.
- `extcheck`: 18,490 items, 165 recorded-not-proved, 55 existing published
  consequences resting on them, and final verdict OK. None is an actual
  prerequisite defect for this batch.
- The whole-run readiness gate remains open because other batches still have
  missing/escalated work and because these five escalations require owner
  action. Owner/operator reconciliation and the full engine gate follow this
  construction step.
