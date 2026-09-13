# Phase 2 next 21 — batch 9 scaffold notes

Run `phase-2-next-21`; beta batch 9. Owned pair:
`brauers-second-main-theorem` / `brauers-second-main-theorem-examples`.

## Controlling design and plan conflicts

Both dispatched design locations were read in their complete enclosing sections.
The RG-17 section of
`research/plan-representation-theory-groups-track.md` controls: that document
owns RG-1 through RG-30 and gives the complete RG-17 inventory, conventions,
warnings, proof route, source matrix, and harvest crosswalk. The occurrence in
§10.6 of `research/plan-differential-geometry-track.md` is only a cross-track
reconciliation warning for the following Haar-measure pair: it says RG-18 must
not retain the unrelated B-page placeholder
`brauers-second-main-theorem-examples` as a prerequisite. It supplies no RG-17
mathematical design and therefore does not control this pair.

The current `research/plan-spec.json` controls conflicts:

- The design uses the possessive “Brauer's”, whereas the current plan titles
  are `Brauers Second Main Theorem` and
  `Brauers Second Main Theorem — Examples`. The manifest preserves the plan
  titles; mathematical item titles preserve standard typography.
- The current plan's item arrays are empty placeholders. They do not erase the
  design's 11 A and 3 B items. All designed items were retained.
- The proof audit exposed five load-bearing interfaces that the design route
  uses but the four page prerequisites do not state in the required integral
  form. They were inserted locally before their consumers:
  `lem-block-idempotents-lift-uniquely-from-kh-to-oh`,
  `def-relative-projectivity-and-vertices-for-og-lattices`,
  `thm-krull-schmidt-for-og-lattices`,
  `thm-green-indecomposability-for-index-p-integral-induction`, and
  `lem-central-p-subgroups-lie-in-every-block-defect-group`.
  This is a dependency repair within the selected A page, not a change of
  selected pairs or page prerequisites.

Orders 510.063/510.064, category, companions, and the four A-page requirements
otherwise agree exactly. The final inventory is 16 A and 3 B items, safely
below the 60-item cap, so no page split is required.

## Construction and proof-dependency audit

The scaffold was built once in prerequisite order and each item received its
hash-bound Step-1 outcome before construction moved on. The final route is the
designed route: unique commuting p/p-prime parts; p-sections; the explicit
constituent/scalar formula for generalized decomposition numbers; existence and
uniqueness; Brauer subsections; integral relative projectivity and Green zeros;
Nagao's restriction decomposition; vanishing of its error traces; local block
projection; coefficient support; and the Second Main Theorem.

Important dependency checks and repairs:

- Generalized decomposition numbers are defined by the unconditional finite
  formula
  `sum_zeta n_(chi,zeta) lambda_(u,zeta) d_(zeta,phi)`.
  Maschke, Schur, diagonalizability, ordinary decomposition numbers, and the
  irreducible Brauer basis are declared. This avoids a circular forward
  well-definedness edge between the definition and its expansion theorem.
- Every local block `c` of `kC_G(u)` has `c^G` defined. Indeed `<u>` is central
  in `C_G(u)`, its Brauer map is the identity, and maximal Brauer support puts
  `<u>` in every defect group of `c`; centralizer containment then applies.
  The direction is always local-to-global block induction.
- The character argument needs O-free lattices, not merely the published
  finite-dimensional k-module vertex package. The local integral definition,
  block-lift lemma, lattice Krull-Schmidt theorem, and index-p Green theorem
  make that interface explicit.
- The first draft of the local block-lift and lattice Krull-Schmidt interfaces
  cited the published AC-stated Nakayama theorem and the DC-stated
  finite-length route. The final scaffold instead includes the finite
  determinant argument for centrality and the complete-local/Fitting/exchange
  argument for lattice Krull-Schmidt. The local relative-projectivity
  definition is also stated directly rather than importing the published
  arbitrary-module comparison. These first eight A-page items therefore keep
  their genuinely finite proofs choice-free.
- Green's zero argument does not infer that a summand has zero trace from
  cancellation in a larger induced module. Integral Mackey first factors every
  cyclic restriction through the index-p subgroup, Green indecomposability
  preserves the induced indecomposable summands, Krull-Schmidt selects whole
  terms, and Frobenius' formula then gives individual trace zero.
- Nagao's theorem explicitly declares the lifted block idempotents,
  centralizer-containment induction, local-corner/trace-ideal extraction,
  Higman's criterion, lattice Krull-Schmidt, and defect support. Craven's
  Theorem 2.17 is not silently treated as a consequence of page membership.
- The local projection lemma claims only vanishing for noncorresponding blocks;
  it does not assert a converse. The column corollary likewise does not claim
  that a permitted generalized-decomposition column is nonzero.
- The B page uses `S3` at `p=2`. Its nonidentity section has centralizer `C2`;
  that local algebra has one block, which induces to the principal S3 block.
  The defect-zero block therefore supplies a concrete empty-local-support case,
  and the ordinary character table independently confirms the predicted zero.

The actual statements and proofs used from the published prerequisites were
read, including the splitting modular system and stable lattices, Brauer
characters and their basis theorem, ordinary decomposition numbers and block
diagonality, block ideals and block membership, the Brauer homomorphism and
maximal-support characterization, centralizer-containment block induction,
Brauer First, relative projectivity/Higman/Mackey, Krull-Schmidt, and the S3
block/decomposition/character calculations. `manifest-deps` reports no missing,
unresolved, forward, or circular item edge. No actual prerequisite is Recorded,
draft, or inadequate after the local integral interfaces above. The
axiom-contract defects and impact candidates found during that audit are
recorded below rather than silently treated as choice-free suppliers.

## Choice and foundations ledger

The first eight A-page items are choice-free. In particular the block lift uses
a finite determinant calculation, the integral relative-projectivity
definition makes no arbitrary-index selection, and the lattice
Krull-Schmidt/Green route uses finite rank, completeness, and finite exchange.

The remaining eight A-page items and all three B-page items state `Assume AC`
and directly declare `def-axiom-of-choice`. This is conservative propagation of
the contracts actually available on the published prerequisite pages:

- central defect support and subsection well-definedness inherit AC through
  the published maximal-Brauer-support, block-induction, and
  centralizer-containment chains;
- the p-section vanishing and Nagao decomposition inherit it through the
  published relative-projectivity/Mackey, Higman, block-centre, and defect
  support chains;
- the trace, projection, Second Main Theorem, column corollary, and examples
  inherit it from those AC-stated local suppliers.

The new subgroup selections, decompositions, conjugacy calculations, and sums
are still finite; the explicit use of AC is to discharge the inherited
published supplier contracts, not to choose these finite data. A `deps` plus
`justified_by` traversal from all 19 owned roots reaches 718
local-plus-published nodes, with no missing or nonpublished target and no path
to `deferred-set-theory-beyond-choice`. Exactly the 11 AC-reaching roots above
declare `def-axiom-of-choice` directly. No Recorded replacement is consumed,
and incompatible-axiom branches elsewhere remain untouched.

## Sources inspected and recovery history

Four authoritative full PDFs were fetched, extracted, and inspected over the
complete relevant ranges. The owned coverage file records every harvested
named result as included, inline, already published, deferred to the companion,
or out of scope with a specific reason.

- Craven, *The Brauer Correspondence*: Chapter 1 §1.5, Chapter 2 §§2.1–2.5,
  and Chapter 3 §§3.1–3.3 (87 pages; 518601 bytes;
  `c8baed359312aced`). The design locator was expanded because the Nagao proof
  itself invokes the later G-algebra, relative-trace, Rosenberg, and Higman
  machinery. The relevant proofs were read, not only Theorems 2.18/2.22.
- Meierfrankenfeld, *MTH 912 Class Notes*: complete §§6.6–6.7, printed
  pp. 156–171 (174 pages; 1012420 bytes; `f36358a3e7ebac61`). The direct MSU URL
  returned a 212-byte Incapsula noindex body on the initial request and one
  direct retry. An archival full-PDF URL then succeeded, so recovery stopped;
  no five-retry exhaustion or source drop occurred. This is an independent
  central-idempotent proof rather than a duplicate of Nagao's route.
- Aschbacher–Kessar–Oliver, *Fusion Systems in Algebra and Topology*, Part IV
  §§4.2–4.4 and §5.1, especially Proposition 4.9, Example 4.25, and Theorems
  5.4–5.5 (326 pages; 2303202 bytes; `71cf6d43e2ebb65d`).
- Gyujin Oh, *Basic Modular Representation Theory*, §§3–4, especially Theorem
  4.1 and its endomorphism-ring proof (11 pages; 526887 bytes;
  `49ff42ac0c90a731`). This closes the index-p Green indecomposability step that
  the other treatments cite as deep background.

All four coverage URLs are currently live. No source has
`source_resolution.status: dropped`; therefore no dropped-source waiver or
alternative-proof record is applicable.

## Cross-batch and published-defect findings

The owned consumer dependency input is `[]`. Every external dependency is
already published, while all new suppliers are earlier items on this owned A
page and the B page depends only on this pair. No new prerequisite pair or
cross-batch edge was found. The unified frontier ledger was refreshed from the
owned input; it was not edited by hand.

Two published axiom-contract defects were found and are evidence for the
canonical published-consumer ledger; neither published item was edited here:

- `thm-nakayama-lemma` is published. Its title and statement say “Assume the
  Axiom of Choice”, and its proof consumes the AC-stated
  `thm-jacobson-radical-unit-characterisation`, but its `deps` omit
  `def-axiom-of-choice`. The exact supplier is the published
  `def-axiom-of-choice`. Recommended repair: add that dependency and propagate
  the contract to genuine consumers. Batch 9 no longer consumes this item: the
  local block-lift strategy supplies its finite determinant step.
- `thm-krull-schmidt-for-finite-dimensional-kg-modules` is published. Its
  statement is unconditional, but its proof cites
  `thm-composition-series-iff-noetherian-and-artinian`, whose title, statement,
  and dependencies explicitly use dependent choice and
  `def-axiom-of-choice`. Recommended repair: replace that overstrong supplier
  by the direct dimension-chain proof of finite length and retain the existing
  finite Fitting/exchange proof; alternatively state and propagate AC. Batch 9
  no longer consumes this theorem for integral Krull-Schmidt, but several
  published block interfaces below still reach it.

The following published items are therefore exact axiom-strength impact-review
candidates, not independently confirmed false mathematical claims:
`thm-defect-groups-are-maximal-brauer-support`,
`def-induced-block-from-a-subgroup`,
`lem-block-induction-exists-under-centralizer-containment`,
`lem-relative-projectivity-mackey-intersections-for-finite-modules`,
`thm-higman-criterion-for-relative-projectivity`,
`lem-block-centre-locality-and-trace-ideal-sums`,
`thm-brauer-first-main-theorem`, and
`ex-blocks-and-defect-groups-of-s3`. Each is published and is an actual Batch-9
prerequisite. Their finite clauses may admit choice-free repairs, but the
current declared closures reach an AC-stated supplier; the present scaffold
therefore propagates AC instead of claiming a stronger contract. The exact
available supplier is the already-published `def-axiom-of-choice`; the preferred
later repair is clause-level replacement by finite dimension/Fitting/Mackey
arguments wherever an audit confirms no arbitrary-index choice is used.

## Validation evidence

Final owned checks:

- coverage with destination enforcement: 1 A page, 45 harvested results,
  0 errors, 0 warnings;
- source fetch stamps: 4/4 fetch-verified and 4/4 resolved, with no drop;
- URL liveness: 4/4 live, 0 failed, 0 suspect; source backing: 11 authored
  results, all backed;
- manifest dependencies: 19 items, 0 normalized, 0 errors;
- manifest-only content policy: 19 items, 0 errors, 0 warnings;
- Step-1 readiness: 19/19 current and ready.

Whole-run checks at the end of construction:

- `manifest-deps`: 745 current items, 0 normalized, 0 errors;
- manifest-only content policy: 745 items, 0 errors, 0 warnings;
- plan validation: success; declared page order is acyclic and consistent,
  with no item-level cycles, forward references, B-page dependencies, or
  unresolved IDs among 1056 pages carrying inventories (563 planned pages
  still have empty item arrays);
- manifest integrity: all 42 owed pages present, 0 missing, 0 added;
- external-reference check: success; its 55 published recorded-not-proved
  warnings are pre-existing and none names or lies in this pair's dependency
  closure.

The full run's readiness gate remains open at 651/745 ready because other
batches contain 94 escalations; there are no missing records or empty manifest
pages. Batch 9 contributes no missing, stale, or escalated readiness decision.
Step 3 remains the independent mathematical review and approval stage.
