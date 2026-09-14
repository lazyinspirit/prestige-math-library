# Phase 2 next 18 — beta batch 3 construction evidence

Status: **PARTIALLY READY / OWNER RECONCILIATION REQUIRED**. All 50 owned
items have fresh non-owner Step 1 outcomes bound to the current manifest and
dependency hashes: 31 `ready` and 19 `escalated`. The escalations are exactly
the Thom/Gysin branch that reaches same-run Batch 4 vector-bundle suppliers,
which are scaffolded but not published. This is construction evidence, not
independent mathematical approval; Step 3 and owner/operator reconciliation
remain necessary. No published item, shared plan, engine state, selected pair,
or verdict was edited.

## Instructions, run evidence, and controlling designs

Read in full: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`,
`briefs/beta-scaffold.md`, the dispatch task, planning notes, alpha drift and
prerequisite evidence, active `.autopilot/phase-2-next-18` status, the owned
manifest and current coverage, the frontier dependency ledger, and the
relevant complete statements/proofs of every actual published supplier used.
Run state was checked from `.autopilot/` and git, not from a concluded RESUME
file.

For `the-serre-spectral-sequence-and-applications`, both dispatched locators
belong to the complete **AT-14** section beginning at
`research/plan-algebraic-topology-track.md` line 1959; the B inventory begins at
line 1990. The entire AT-14 section controls the mathematical scope and route:
base-skeletal filtration, local systems, E1/d1 computation, actual convergence,
edge/transgression interfaces, cohomological multiplicativity, and applications.

For `leray-hirsch-thom-isomorphism-and-gysin-sequences`, both locators belong
to complete **AT-18** beginning at line 2157; the B inventory begins at line
2189. The entire AT-18 section controls: finite global fiber bases,
filtered-map rather than extension-splitting Leray–Hirsch, trivial Thom first,
Mayer–Vietoris gluing, fiberwise normalization, Thom products, and pair-sequence
Gysin.

## Current-plan conflicts

The current `research/plan-spec.json` controls page metadata and prerequisite
edges. Its page IDs, titles, orders, categories, and companions agree with the
dispatch. Conflicts recorded:

- AT-14 lists only obstruction theory, spectral sequences, and double-complex
  convergence as page requirements. The current plan additionally requires
  singular cohomology, cup/cap products, fibrations, and local coefficients.
  Those added current-plan edges are preserved and are all used by actual item
  proofs.
- AT-18's old design edge to generalized cohomology is absent from the current
  plan. The current plan instead requires cup/cap products, the Serre page, and
  topological vector bundles in addition to orientations. The current plan
  controls; no generalized-cohomology item appears on a proof path.
- Both current plan objects have `items: []`, whereas AT-14 and AT-18 specify
  the A/B inventories. This is a pre-materialization representation conflict,
  not permission to delete the designed scope. The inventories were
  materialized here.
- AT-18 listed the Leray–Hirsch theorem before its two proof prerequisites.
  Construction order was corrected to the global-basis lemma, filtered-lifting
  lemma, then theorem, without changing the selected result.

## Mathematical and dependency audit

The published fiber-transport local-system lemma is correctly restricted to
Hurewicz fibrations. Applying it directly to an arbitrary Serre fibration would
be inadequate. A new local prerequisite,
`lem-serre-fibration-replacement-preserves-fiber-homology-transport`, now uses
the canonical mapping-path Hurewicz replacement, proves the strict-fiber map a
weak equivalence using the Serre lifting property, and applies the published
choice-free weak-homotopy invariance of integral singular homology. This keeps
the theorem genuinely about Serre fibrations without assuming a continuous
path-lifting function.

The E1 relative-cell comparison explicitly uses pullback to a characteristic
disk, fiber-homotopy triviality of the replacement over that disk, excision,
and the relative product-chain equivalence. The d1 lemma carries incidence
signs and the actual local-system transports, not a constant-coefficient
shortcut. First-quadrant support gives finite filtration on each diagonal, so
the abutment is actual filtered singular (co)homology.

Hatcher's multiplicative discussion explicitly leaves a bracketed missing
argument that every later differential is a derivation. That source gap is
closed locally by
`lem-multiplicative-filtered-cochains-induce-products-on-all-spectral-sequence-pages`,
using the published Z_r/B_r subquotient calculus, cochain Leibniz rule, and
induction through E_{r+1}=H(E_r). The Serre multiplicativity theorem therefore
does not cite the incomplete printed argument as if it were complete.

Edge maps are restricted to the normalized finite-abutment axes. Transgression
is defined only on surviving subquotients and is compared with the relative
connector. The spherical Gysin sequence defines its class as a transgression;
it does not depend forward on AT-19. The loop-space example deliberately states
only additive homology, because no Pontryagin-product supplier is on the page.
The extension counterexample was tightened after the dependency audit.  It now
uses the actual mapping-path fibration of `BZ→BC_n`, whose total space is
homotopy equivalent to `BZ`; the homotopy exact sequence identifies the strict
fiber, and degree-one Hurewicz identifies the fiber edge with
`nZ→Z`.  Thus the stated `0⊂nZ⊂Z` is the actual convergent filtration.  It no
longer presents `BC_n→BZ→BC_n` as a strict fibration.

The finiteness theorem was also corrected to a commutative-PID statement.  Its
E2 terms are controlled by the homological universal-coefficient sequence
`H_p(B;H_q(F;R))`, not by an irrelevant topological Künneth sequence or a
cohomological UCT.  The rational Eilenberg–Mac Lane computation no longer leans
on that finiteness theorem: the homotopy exact sequence identifies each
path-fibration fiber, and exactness of the resulting rational Koszul complex
gives the polynomial/exterior alternation.

Leray–Hirsch uses a finite homogeneous global restricting basis. This both
trivializes monodromy and gives a concrete filtered map. The published
finite-filtered isomorphism lemma lifts that map, so collapse is never treated
as a choice of splitting.

The Thom branch begins with metric disk/sphere pairs and the trivial bundle.
The general theorem follows the mandated two-open Mayer–Vietoris and finite-cover
gluing route. Fiberwise normalization precedes existence. A new local
`def-thom-euler-class-of-an-oriented-vector-bundle` is placed before Gysin and
defines `s^*j^*u`; this prevents a forward dependency on AT-19 while preserving
the later comparison destination. The sphere-bundle Gysin theorem derives
cup-by-Euler from the pair sequence and separately compares it with the Serre
transgression convention.

No defective published item lies on a ready owned proof path. The Hurewicz
scope is correct and was bridged locally; Hatcher's omitted derivation argument
is a source limitation rather than a library publication defect. No canonical
published-defect ledger repair is requested.

The escalated Thom branch has an additional draft-contract issue that must be
reconciled before authoring, independently of its unpublished Batch 4 inputs.
`def-r-oriented-vector-bundle-and-orientation-local-system` asserts the
top-relative-cohomology generator for an arbitrary coefficient ring `R`, but
its current direct supplier
`lem-local-coordinate-cup-products-generate-top-relative-cohomology` assumes
AC and covers only `R=Z` or `F2`.  Consequently it is inadequate for that
general-`R` claim.  A repair must either add a prior local disk-pair cohomology
lemma for arbitrary `R` (the preferred scope-preserving repair, by an explicit
finite disk-pair cochain calculation), or explicitly restrict and propagate
the coefficient/AC contract through every Thom consumer.  The already recorded
escalations were not overwritten.  This is a defect in the owned unpublished
scaffold, not a published-library defect.

## Choice ledger

- The homological Serre construction, its naturality, edge/transgression
  interface, Wang sequence, finiteness theorem, and odd-sphere loop-homology
  computation are choice-free.  Naturality assumes the base map is already
  cellular, so the AC-dependent arbitrary-cell cellular-approximation theorem
  was removed rather than silently consumed.
- The cohomological Serre theorem states AC and depends on
  `def-axiom-of-choice`; the exact use is the published arbitrary-CW cellular
  cochain comparison.  Multiplicativity, the cohomological collapse clause,
  the spherical Gysin calculation, the rational Eilenberg–Mac Lane theorem,
  the CP-infinity/Hopf examples, and Leray–Hirsch propagate that assumption.
- The classifying-space extension counterexample states AC because
  `cor-classifying-space-of-a-discrete-group-is-a-k-g-one` uses it.  The
  rational Eilenberg–Mac Lane computation also records the AC uses in model
  existence/uniqueness and UCT.  The Hopf examples record the bundle-fibration,
  UCT, and cohomological-Serre uses.
- Leray–Hirsch uses a supplied finite basis, so it makes no hidden simultaneous
  choice or arbitrary splitting.  Its AC assumption is inherited only from
  the current cohomological Serre supplier.
- `thm-thom-isomorphism-for-oriented-vector-bundles` states AC and depends on
  `def-axiom-of-choice`. Its exact use is inherited from Batch 4's numerable
  bundle-metric theorem: AC supplies the partition/numerating-chart choices.
  Batch 4 preserves the choice-free branch when a numerating chart family is
  supplied as data. Finite Mayer–Vietoris gluing itself is choice-free.
- No incompatible choice principle is combined with AC. No Recorded result is
  used to prove a replacement, and this algebraic-topology closure has no path
  from Foundations to `deferred-set-theory-beyond-choice`.

## Full-text source evidence

Coverage records 32 harvested results with dispositions and exact destinations
for both deferred characteristic-class topics. All five source entries were
verified from full PDFs; every original URL succeeded and no recovery retry,
drop, waiver, or owner source escalation applies:

- Hatcher, *Algebraic Topology*, Chapter 5: 117 pages, SHA-256 prefix
  `d65a738385f4d060`.
- Miller, MIT 18.906 notes: 162 pages, prefix `6fb68a6d53af20b4`;
  Lectures 24–30 and 33–35 were read at the recorded locators.
- May, *A Concise Course in Algebraic Topology*: 251 pages, prefix
  `6724f02748ed1f2f`.
- Hatcher, *Vector Bundles and K-Theory*: 124 pages, prefix
  `04282b30dfa63051`.

## Cross-batch dependency escalation

The owned consumer input records one page edge and seven item edges from AT-18 to
same-run Batch 4. Exact suppliers are:
`def-real-and-complex-topological-vector-bundle`,
`thm-numerable-vector-bundles-admit-bundle-metrics`,
`def-pullback-vector-bundle-and-pullback-section`,
`def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles`,
`def-vector-bundle-map-section-subbundle-and-isomorphism`, and
`prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism`.
Their complete current manifest statements and strategies were read; directions
and hypotheses match the consumers, including AC on metric existence. They are
all `open` because none is published. The required placement is Batch 4 AT-15,
before AT-18's first metric Thom-space definition. The canonical frontier
ledger was refreshed and deduplicated.

The unpublished Batch 4 chain is sufficient by itself to escalate all 19
Thom/Gysin items.  The general-`R` orientation-local-system supplier mismatch
recorded above is an additional local repair obligation inside that already
escalated set.  The 26 Serre items, three Leray–Hirsch A items, the corrected
PID product-bundle example, and the non-global-basis counterexample are ready.
An owner may reconcile the 19 only after Batch 4's supplier items are
independently reviewed and made available and the local coefficient-contract
gap is repaired; a scaffold or ready record is not publication.

## Checks actually executed

- Owned `manifest-deps`: 50 items, 0 normalized, 0 errors.
- Owned manifest policy alone: 7 expected missing-target errors for same-run
  Batch 4 suppliers; after joining the current Batch 4 manifest, 103 scoped
  items, 0 errors, 0 warnings. The join validates shape/order only and was not
  treated as publication.
- Coverage with destination checking: 2 A pages, 32 harvested results, 0
  errors, 0 warnings.
- `source-fetch-check --stamp`: 5/5 source entries full-text verified and 5/5
  resolved, 0 documented drops.
- `extcheck`: repository result 18,490 items, 165 recorded-not-proved and 55
  existing published consequences resting on them; all were pre-existing and
  unrelated to this batch. The tool's final verdict was OK.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: success;
  declared page order is acyclic and consistent, with no item cycle, forward
  reference, B-page dependency, or unresolved ID among the 1,098 pages carrying
  item lists. It reports 521 planned pages without item lists.
- Fresh owned outcomes: 50/50 exist and match current item/dependency hashes;
  31 ready, 19 non-owner escalated, 0 missing or stale ready decisions.  The
  19 escalations remain owner work.  Whole-run decision check remains open
  because this and other batches have owner work or missing records.

No page split or new prerequisite pair is requested. Owner/operator
reconciliation and the full engine gate follow construction.
