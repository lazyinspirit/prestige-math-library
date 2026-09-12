# Phase 2 next 17 — Step 3a scope review, group c

Run: `phase-2-next-17`  
Dispatch: `step3a-c-d705289c2e6d07a0`  
Batch: 4  
Review type: scope only; no item or proof approvals

## Decision

| A page | A/B inventory | Scope decision |
| --- | ---: | --- |
| `grothendieck-spectral-sequences-and-computations` | 39 / 9 | `sufficient` |

The pair adequately fills its role as the final homological-algebra spectral-
sequence pair. Its A page covers Cartan--Eilenberg data, existence and finite
totalisation; hyperderived functors, independence, both hypercohomology
spectral sequences and edge maps; the acyclicity criterion and complete
Grothendieck composition package, including naturality, the five-term sequence,
collapse criteria and the dual form; UCT, Kunneth, Hyper-Tor and both bounded
variances of Hyper-Ext; the LHS construction and low-degree sequence; and an
explicit protocol separating page computation, convergence, filtration and
extension problems. The extra finite-biproduct lemma is a necessary local
bridge for the arbitrary-abelian-category totalisation and enriches rather than
displaces the 38 A items promised by the prose design.

The B page tests all of the pair's main uses: two-row and exact-functor
collapse, the composite five-term sequence, integer UCT and PID Kunneth,
split-extension LHS without falsely asserting collapse, noncanonical
reconstruction, identical E2 pages with different later differentials, and a
complete computation record. Thus the page is not merely an abstract theorem
catalogue and does not suppress the abutment filtration or extension problem.

The stated boundaries are coherent. Unbounded K-injective theory, sheaf/Leray
applications, change-of-rings calculations, and finite-dimension refinements
need machinery assigned to later derived-category, geometric, or ring-theoretic
work; none is required for this bounded first-quadrant pair. The page still
supplies the LHS interface needed by later group-cohomology consumers and is
the final homological-algebra anchor in the current plan. Batch 4 has no
in-run cross-batch dependency edge.

## Evidence and consistency

I compared the current manifest, coverage ledger, construction notes, HA-17
prose, canonical plan entries, scope ledger, drift record, Step-1 decisions,
and dependency records. The owner-reconciled additions of `derived-categories`,
the earlier `def-dependent-choice` interface, and the local definitions of the
LHS low-degree arrows are present. There is no current owner Step-3a decision;
all 48 Step-1 records are non-owner `ready` records.

Coverage maps 28 harvested results from complete relevant portions of Weibel
Chapters 5 and 6, Sharifi Section 4.3, and the Stacks Project derived and Ext
sections, with explicit destinations or justified exclusions. I independently
read the complete Stacks arguments at Tags `015I`, `015J`, `015M`, and `015N`
and the complete bounded Ext statements at Tags `07AA` and `0AVG`; they confirm
the scaffold's Cartan--Eilenberg, acyclicity, convergence, boundedness, and
variance coverage. The prose also lists Rotman, Rutgers, and
Hilton--Stammbach as controls; their absence from this run's coverage ledger is
not a subject-scope omission because the recorded full treatments already
cover every promised family with independent sources.

Mechanical checks are clean: 48 manifest items have explicit dependencies;
the coverage checklist reports 28 harvested results with zero errors or
warnings; and canonical plan validation reports acyclic, consistent declared
page order with no unresolved IDs for populated pages. The published
dependency-metadata and page/item-status defects listed in the construction
notes remain later reconciliation work. They do not remove a definition,
result, or example from this pair, and this scope verdict does not approve
their proofs or metadata.
