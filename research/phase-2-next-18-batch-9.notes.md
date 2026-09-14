# Phase 2 next 18 — Step 1 batch 9 notes

## Owned scope and result

This batch owns only the assigned Foundations pairs at orders 705/706 and
711/712. The manifest contains 50 items in prerequisite order:

- `prikry-forcing-and-gitiks-singular-cardinal-model`: 20 A items and three B
  items;
- `minimal-walks-oscillation-and-l-and-s-spaces`: 24 A items and three B
  items.

Every item has a stable unused ID, an explicit `deps` array, a statement, a
proof strategy and provenance. B items are consumers only. All 50 items have
current Step-1 records: 37 are `ready`, 13 are `escalated`, and none is missing
or stale. An outcome was recorded before advancing to the next item. These
records are construction evidence, not publication or Step-3 mathematical
approval.

No published content, shared plan, engine state, selected pair or verdict was
edited. The only shared artifact touched was the mechanically generated
same-frontier ledger, refreshed from the owned consumer-batch input as required
by `briefs/tasks/frontier-dependency-ledger.md`.

## Design and current-plan comparison

The complete SET-26 and SET-29 sections of
`research/plan-set-theory-completion-track.md` were compared with the four
current entries in `research/plan-spec.json`, the dispatch and the active run
evidence. IDs, titles, orders, categories, companions and every page-level
`requires` entry agree. The current plan entries have empty item arrays: that
is their pre-materialization state and not a reviewed competing inventory. The
detailed design inventories were therefore realized locally without changing
the plan. There is no page-metadata conflict.

There is one cross-design overlap requiring owner reconciliation. SET-27 and
SET-29 both request “PFA implies no S-spaces” and a supercompact consistency
conclusion. The current plan places SET-27 at order 707 and makes it a direct
prerequisite of SET-29 at order 711. This scaffold keeps SET-29's required
specialized topology route, but consumes SET-27's exact generic machinery:

- `thm-pfa-implies-the-simple-ideal-dichotomy` consumes
  `def-proper-forcing-axiom`,
  `def-countable-model-generic-master-condition-and-proper-poset`, and
  `lem-proper-master-condition-characterizations` from batch 6;
- `cor-supercompact-consistency-of-no-s-spaces` consumes
  `cor-formal-consistency-of-pfa-from-a-supercompact` from batch 6.

The local theorem is not inferred from `thm-pfa-implies-p-ideal-dichotomy`:
an arbitrary ideal generated modulo finite by `omega_1` members need not be a
P-ideal. Its proof strategy instead gives Abraham's two-form proper/ccc forcing
argument. The four exact item edges and two declared page edges are recorded
open in the owned cross-batch input; the same-run suppliers are scaffolded, not
published. No selected pair or shared plan was changed to resolve the overlap.

## Full-text source evidence

Seven source records support 36 harvested results, every one disposed as
included/inline, deferred to a named page, or out of scope for a specific
reason. Both A pages have at least two independent full treatments, including
a monograph or full lecture-note set.

- Asaf Karagila, *Forcing lecture notes*, complete §9.2, printed pp.43–45:
  Definition 9.9, Theorem 9.10 and Lemmas 9.11–9.12 were read with their proofs.
- Johannes Philipp Schürz, *Gitik's model or a model of ZF where all
  uncountable cardinals are singular*, all 21 pages: §§1–3, Lemmas 1–17 and the
  final theorem were inspected, including the places where the exposition
  explicitly abbreviates or delegates class-forcing arguments.
- Ioanna Dimitriou, *Symmetric Models, Singular Cardinal Patterns, and
  Indiscernibles*, Chapter 2 §5, pp.56–71: the complete bounded set-sized Gitik
  factorization, Prikry, approximation and singularization arguments were read.
- Justin Tatch Moore, *A solution to the L space problem*, all 27 pages, with
  §§2, 4, 5 and 7 checked proof by proof for the minimal-walk, oscillation and
  topology chain.
- Joan E. Hart and Kenneth Kunen, *Ultra Strong S-Spaces*, §§1–4 through
  Corollary 4.18: the ordered fundamental-space, nice-refinement and CH
  hereditary-separability construction was read.
- Uri Abraham, *Three applications of ideal dichotomy*, all 12 slides, with
  slides 1–4 supplying the complete concise topology-to-ideal/no-S-space
  reduction.
- Uri Abraham, *Lecture notes on the P-ideal dichotomy*, the complete
  web-rendered notes were inspected, but the original and mirror full-text
  retrievals could not be mechanically stamped.

The Abraham notes retain the required history. After the initial Paperzz 403,
five genuine retries covered the original HTTPS and HTTP hosts, two alternate
mirror paths and archive recovery; none returned a full body. The coverage
record has `source_resolution.status: dropped`, `decided_by:
step-1-scaffolder`, `confidence: certain`, all searches and attempts, and an
alternative for every affected item. The replacement is the complete local
two-form forcing argument from the explicit PFA/master-condition dependencies,
together with Abraham's accessible official slides for the topology
application. No P-ideal premise is inserted and no result is weakened. The
other six source records have verified full-text stamps.

## Mathematical and transitive-dependency audit

### Prikry and Gitik

- Ordinary Prikry forcing uses the library's stronger-below convention. The
  local Rowbottom lemma owns simultaneous finite-arity homogeneity, the Prikry
  property keeps the stem fixed, and the bounded-name fusion uses fewer than
  `kappa` intersections. The preservation proof separates “no new bounded
  subsets” below `kappa` from the `kappa^+` chain-condition argument above it.
  The explicit B counterexample records that Prikry forcing is not ccc.
- The Gitik definitions isolate coordinate filters, finite stems, trees,
  restrictions, amalgamation and finite-support symmetric names before their
  consumers. Dimitriou validates these mechanisms on bounded intervals. That
  does not justify the proper-class extension or the conclusion for every
  ordinal.
- Schürz states the expanded proper-class forcing theorem but delegates the
  definability recursion for the extra ground, generic and well-order
  predicates to Shoenfield/Zarach. The ordinary published set-forcing theorem
  is not an adequate substitute. This blocks the full `ZF^- + Collection`
  verification.
- Schürz also states, without the necessary coordinate-by-coordinate proof,
  that every set of the intermediate class extension becomes countable. The
  missing repair must code an arbitrary supported set name by a later
  `omega`-surjection, not extrapolate from a bounded interval.
- The Power Set/Replacement proof needs the complete strong-compactness
  decision-pattern homogenization underlying Schürz's terse Lemmas 13–17.
  Dimitriou proves the bounded analogue only. The all-limit-ordinals theorem
  separately needs the class-wide interval argument. These are defective
  actual prerequisites of the downstream Gitik conclusions, so all dependent
  items are escalated.
- The final relative-consistency claim is not certified merely by invoking a
  countable transitive ground. A repair must either supply a complete
  authoritative proper-class proof matching the expanded language or give a
  finite-fragment proof compiler/reflection argument that derives the formal
  consistency implication from the stated theory. Its current record is
  escalated.

### Minimal walks and L/S spaces

- Moore's definitions of the lower trace, `rho_1`, coherent finite-to-one
  functions and oscillation are introduced before the block and coloring
  lemmas. The topology then uses exactly those finite-pattern statements. Its
  zero-dimensional regularity, nonseparability, no-cross-injection lemma and
  hereditary Lindelöf argument are separate contracts rather than conclusions
  inferred from page membership.
- The S-space definition follows the current library convention: regular
  Hausdorff, hereditarily separable and not Lindelöf. The manifest explains why
  the alternate “not hereditarily Lindelöf” convention has the same existence
  content without silently changing the definition.
- Hart–Kunen's CH construction keeps ordered fundamental spaces, nice
  refinements, non-Lindelöfness and the CH scheduling argument separate.
- Abraham's topology reduction first extracts a right-separated subspace and
  its closed-neighbourhood ideal. The local simple dichotomy's inside and
  outside alternatives each contradict hereditary separability. This proof is
  complete, but its exact PFA/master-condition inputs are current-run batch-6
  scaffolds; the theorem and its three downstream conclusions are therefore
  escalated until those edges are published or otherwise reconciled.
- The ZFC L-space branch, the CH (hence `V=L`) S-space branch and the PFA
  nonexistence branch remain logically separate. No incompatible axioms are
  combined.

Published prerequisite statements and the proof portions actually used were
read for normal measures, fine ultrafilters/strong compactness, forcing
decision and truth, symmetric-name interpretation, cardinals/cofinality,
elementary submodels, regularity, separability and Lindelöfness. All dependency
directions and well-definedness uses were checked. The owned manifest has no
missing, circular or forward dependency and no dependency on either Recorded
replacement target. A direct scan found no dependency on
`deferred-set-theory-beyond-choice`; neither pair reaches it through the
introduced local graph.

## Axiom-of-choice boundary

The ordinary forcing and topology constructions are explicitly external ZFC
arguments. `def-axiom-of-choice` is declared where it supplies uniform
measure-one selections, fusion choices, Delta-system thinning, cardinal
arithmetic, model chains or recursive schedules. Strong compactness,
supercompactness, CH and PFA remain separately named hypotheses.

The Gitik symmetric-model conclusion itself is ZF. Ground-model choice used to
select filters and homogeneous trees is not imported into `NG`; the deduction
from “every limit ordinal has cofinality `omega`” to “every uncountable cardinal
is singular” is choice-free inside that model. The L-space result is ZFC; CH
gives the positive S-space branch and PFA gives the incompatible negative
branch. The branches are never conjoined.

## Published targets and repair ledger evidence

No defective published item is used as an actual prerequisite. The two
published targets are nevertheless incomplete Recorded remarks and should be
reconciled canonically after their suppliers pass review:

| Published item | Exact evidence | Planned suppliers, publication state and repair |
|---|---|---|
| `rem-gitik-all-uncountable-cardinals-singular` | Published with `proved_here: false`; it gives only the phrase “iterated Prikry-style forcing” and explicitly says that the forcing, large-cardinal and symmetric-model machinery is absent. Its direct dependency is the Feferman–Levy remark, not a proof of Gitik's theorem. | The local chain culminates in `thm-gitik-relative-consistency-from-strongly-compact-cardinals`. Fifteen ordinary/local Gitik items are ready, but the eight class-forcing/symmetric-model conclusions listed below are escalated. Do not replace the Recorded remark until the proper-class theorem, arbitrary-set coding, support homogenization, ZF verification and formal consistency transfer are repaired. |
| `rem-l-spaces-and-s-spaces` | Published with `proved_here: false`; it states the Moore/PFA/CH picture but explicitly says neither construction is carried out. | The Moore minimal-walk/oscillation chain and Hart–Kunen CH construction are ready. The specialized PFA no-S-space and consistency chain remains scaffolded and escalated because its batch-6 inputs are unpublished. Once those edges close, `thm-l-and-s-space-existence-is-asymmetric` replaces the Recorded summary. |

Neither Recorded item appears in any `deps` array, so unrelated debt in those
remarks does not block the independent ready suppliers.

## Readiness and exact escalations

The eight Gitik escalations are:

- `thm-gitik-expanded-proper-class-forcing-theorem`;
- `thm-gitik-intermediate-model-zf-minus-power-set`;
- `thm-gitik-intermediate-model-makes-every-set-countable`;
- `lem-gitik-strong-compact-support-homogenization`;
- `thm-gitik-symmetric-submodel-satisfies-zf`;
- `thm-gitik-every-limit-ordinal-has-cofinality-omega`;
- `cor-gitik-every-uncountable-cardinal-is-singular`;
- `thm-gitik-relative-consistency-from-strongly-compact-cardinals`.

The five PFA-dependent escalations are:

- `thm-pfa-implies-the-simple-ideal-dichotomy`;
- `thm-pfa-implies-there-are-no-s-spaces`;
- `cor-supercompact-consistency-of-no-s-spaces`;
- `thm-l-and-s-space-existence-is-asymmetric`;
- `fs-l-space-and-s-space-existence-are-dual-zfc-theorems`.

Every escalation record names its exact blocker and examined dependencies. No
escalation was overwritten. The remaining 37 records are current and ready.

## Consumer-batch dependency input

`research/phase-2-next-18-batch-9.cross-batch-dependencies.json` contains six
open rows: the declared page edge from the Gitik page to batch 7's symmetric
collapse page; the declared page edge from the L/S page to batch 6's proper
forcing page; and the four exact batch-6 item suppliers listed in the design
comparison above. The Gitik page edge is methodological only: no
Feferman–Levy-specific support lemma is falsely used to prove Gitik's class
support theorem. The unified ledger was refreshed successfully from all
consumer-batch inputs. This tool has a `refresh` command rather than a separate
`check` subcommand.

## Verification snapshot

Whole-run counts are snapshots because sibling batches were still writing
while the audit ran.

| Check | Actual result |
|---|---|
| Owned coverage | `coverage-checklist --require-destination`: 2 pages, 36 harvested results, 0 errors, 0 warnings. |
| Owned sources | `source-fetch-check`: 6/7 fetch-stamped, 7/7 resolved, one documented certain drop with complete alternatives. |
| Owned readiness | 50 current records: 37 ready, 13 escalated, 0 stale and 0 missing. |
| Whole-run dependencies | `manifest-deps`: 531 items, 0 normalized, 0 errors. |
| Whole-run manifest policy | `content-policy --manifest-only`: 531 scoped items, 0 errors, 0 warnings. |
| Published dependency graph | `depcheck --quiet`: exit 0; 269 pre-existing multi-home/cited-not-in-deps warnings, then no cycles, all references resolved and no draft items on published pages. |
| Current plan | `validate-plan research/plan-spec.json`: exit 0; 521 unrelated pages still have only page-level validation because their planned item arrays are empty. |
| Drift review | 18 pages reviewed, no spec edits, no blocked edges; every same-category requirement met the run's ordering threshold. |
| Published external-reference audit | `extcheck`: exit 0. It retains pre-existing unrelated `unproved-on-published` diagnostics and confirms every Recorded statement is a cited remark with no proof and every consequence is marked. |
| Step-1 run gate | Open as designed: this batch contributes the 13 explicit escalations above, and the run-wide output also contains missing or escalated sibling-batch records. No owned readiness record is stale or missing. |
| Frontier ledger | `frontier-dependency-ledger refresh --run phase-2-next-18`: completed successfully; the six owned edges remain open for later reconciliation. |

The scaffold is therefore complete with honest escalations. Step 3 and owner
reconciliation must decide the Gitik proper-class gaps, the duplicate SET-27 /
SET-29 placement, and the unpublished same-run PFA suppliers before publication.
