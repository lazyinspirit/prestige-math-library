# Library-wide dependency audit — 2026-09-08

## Objective

Audit every included category's published A/B pairs and repair its prose
scaffold so future proof-bearing items have complete, earlier, mathematically
adequate prerequisite support. Published pages and items are strictly read-only,
including published items with unmet or unpublished dependencies; record those
defects for later repair after their dependencies are published. Add definitions,
lemmas, or A/B pairs to prose rather than hiding, weakening, or deleting
mathematics. Reconcile cross-category edges in `research/plan-spec.json`,
integrate repaired planned pairs into future frontiers, validate the complete
plan, and leave the active workflow paused.

Owner phases:

1. repair all prose scaffolds;
2. build all and only unpublished A/B pairs in the prerequisite closure of
   published consumer repairs;
3. repair the published consumers after that closure is published.

The supplier-to-consumer record is maintained in
`research/published-consumer-supplier-ledger.md` as each category finishes.

For unfamiliar mathematics, consult authoritative full text, preferring
primary sources. Missing full text remains a blocker. In `foundations`, no
dependency, well-definedness justification, or load-bearing forward reference
may reach `deferred-set-theory-beyond-choice` directly or transitively.

## Excluded categories

- `braid-groups`
- `homological-algebra`
- `kazhdan-lusztig-theory`
- `not-proved-here`
- `quantum-groups-and-crystal-bases`

## Three-category waves

- [x] Wave 1: `differential-geometry`, `fourier-analysis`, `pde`
- [x] Wave 2: `functional-analysis`, `differential-topology`, `measure-theory`
- [x] Wave 3: `abstract-algebra`, `algebraic-geometry`, `algebraic-topology`
  (all audited and reconciled)
- [x] Wave 4: `category-theory`, `combinatorics`, `commutative-algebra`
  (all audited and reconciled)
- [x] Wave 5: `complex-analysis`, `computability-theory`, `foundations`
  (all audited and reconciled)
- [x] Wave 6: `group-theory`, `lie-theory`, `linear-algebra`
  (all audited and reconciled)
- [x] Wave 7: `number-theory`, `probability`, `real-analysis`
  (all audited and reconciled)
- [x] Wave 8: `representation-theory`, `scheme-theory`, `topology`
  (all audited and reconciled)

## Current workflow

- Run: `frontier-34-fa-prereqs`
- State directory: `.autopilot/frontier-34-fa-prereqs`
- Required terminal state for this audit: paused
- Last verified state: paused, Step 1 scaffold 9/9 covered, nothing in flight
- Source-fetch recovery: network resolution recovered; 43/48 completed-batch
  sources stamped. Five sources still require authoritative replacements or a
  successful full-text fetch.

## Reconciliation checklist

- [x] Collect every agent's prose changes and exact proposed page/item edges.
- [x] Record published-item dependency defects without modifying published
  pages or items; defer their repair until all dependencies are published.
- [x] Resolve duplicate suppliers, forward edges, cycles, axiom-strength leaks,
  convention mismatches, and cross-category ownership.
- [x] Add or reorder planned A/B pairs in the prose scaffolds and
  `research/plan-spec.json`.
- [x] Run plan validation, dependency checks, content-policy checks, and scoped
  proof/render/source checks required by the changed files.
- [x] Integrate all buildable repaired pairs into future frontier order.
- [x] Confirm the workflow remains paused and await owner instruction.

Plan-integration checkpoint: 65 audit-added A/B pairs (130 empty page shells)
are registered across 18 included categories with strictly earlier A-page
prerequisites and singleton B requirements. Twenty-six are direct Phase-2
roots; the other 39 are planned-only or enter only through a root's prerequisite
closure. The plan validates at 1,616 pages with 719 empty planned pages. Exact
items remain in the binding scaffolds for workflow hydration. Computability's
five, Algebraic Geometry's two, Complex Analysis's twenty, Group Theory's new
low-degree pair, and Foundations' two replacement pairs are registered. No
included empty A page requires a B page; the three remaining violations are in
excluded Homological Algebra. The Foundations replacements have zero path to
`deferred-set-theory-beyond-choice`. Published item content and page files
remain unchanged.

Final integration verification: relative to `HEAD`, the plan adds 130 empty
page shells and removes none. No existing `items` array changed. The 223
existing-record changes are limited to `requires` and/or `order`; the only 14
nonempty records changed are seven published Complex Analysis A/B pairs whose
plan order moved, with their requirements and items unchanged. No file under
`items/`, `library/`, or `generated/` changed. `validate-plan`, `depcheck`,
`prosecheck`, and `git diff --check` pass. The workflow is paused with nothing
in flight.

The Group Theory SC source gate is closed: the complete proof of the classical
small-cancellation torsion theorem and its relator-power lemma was retrieved and
read in Lyndon--Schupp, Chapter V, §10, pp. 281--282. SC-7--SC-9 are no longer
source-blocked.

Phase-2 contract correction: Group Theory's three former HA item-root claims
are withdrawn. The registered replacement is the single GT-owned pair
`group-homology-transfer-and-low-degree-exact-sequences` / `-examples` at
365.0721/.0722, with 15 A items and three B leaves. Its prerequisites exclude
published GT-21 and instead use the earlier extensions A page, so its closure
does not inherit GT-21's live edge to the empty HA-17 B page. No Homological
Algebra scaffold change is part of this audit.

Two Functional Analysis source gates are also closed. John Roe's complete
*Lectures on Analysis*, Propositions 13.5--13.6, supplies the square-integrable
kernel/Hilbert--Schmidt route; Kostenko's complete *Trace Ideals with
Applications*, §§3.1--3.5, supplies the Weyl--Horn, determinant, and Lidskii
proof chain. The corresponding planned pairs remain dependency-ordered build
units, not source-blocked exceptions.

## Landing reconciliation log

- DG/Fourier/PDE: added PDE-1CK and PDE-2D, reconciled Fourier's PDE-owned
  Sobolev inputs, and moved RG-18 to 506.1/506.2 before DG-33.
- FA/DT/Measure: added FA-15a for published DT-4; added DG-38 and AT-21/AT-22
  for planned DT consumers; split the impossible early interpolation proposal
  into MT-16c at 288.0321/.0322 and MT-CA-1 at 288.078121/.078122; changed all
  affected consumers to A-page suppliers. MT-CA-1 now mints a new
  finite-simple-core lemma in Phase 2; Phase 3 moves the existing stable
  Riesz--Thorin theorem after it, avoiding both a duplicate ID and a forward
  dependency.
- Abstract Algebra: added the 144.2/.4 finite-averaging supplier, recorded its
  11 direct and 166 transitive published consumers, found no consumer in the
  six previously repaired scaffolds, and queued four A-for-B cutovers for the
  Number Theory, Group Theory, and Commutative Algebra audits.
- Algebraic Geometry: recorded all 32 published-to-draft edges through AV-1/AV-2,
  the complete AV-1--AV-4 published impact maps, and the defective Scheme
  closed-immersion supplier cone. Added three Commutative Algebra-owned pairs
  for normalization finiteness, algebraic Zariski Main, and homogeneous
  resultants/intersection length. None is consumed by an earlier repaired
  scaffold; their planned consumers are AV-7/AV-8 and their ownership is queued
  for the Commutative Algebra audit.
- Category Theory: all content is published, so there is no Phase-2 supplier.
  Recorded 17 A-for-B page cutovers, three same-page order repairs, and the
  singleton recorded-not-proved consumer repair. No earlier repaired scaffold
  adds a cross-category item edge.
- Algebraic Topology: added AT-24 as a Phase-2 root for two direct and 60
  transitive published consumers; recorded exact planned-item edges. Adopted
  AT-21/AT-23/AT-22 for planned consumers only, moved AT-22 to
  366.0401/.0402 to avoid Algebraic Geometry, and replaced every descriptive
  AT token in Differential Topology with audited page ids.
- Commutative Algebra: audited all 18 published pairs; recorded 19 B-for-A
  cutovers, CA-11's within-page reorder, and the CA-11/CA-12 duplicate-home
  repairs. Rehoming published `def-dependent-choice` to the earlier
  countability page closes four live CA forward edges; its incorrect
  real-valued `def-sequence` dependency becomes `def-function`, and Abstract
  Algebra declares its existing semantic use. The central ledger records five
  semantic direct consumers and 139 additional transitive published items.
  The strengthened 8/3 normalization, 11/3 algebraic Zariski Main, and 10/4
  resultant/intersection-length inventories now control the earlier Algebraic
  Geometry proposal; all 29 A items have zero published consumers.
- Combinatorics: audited all 49 published pairs and confirmed every B page and
  B-only item is a leaf. Added the Phase-2 quantitative induced-density pair
  at 408.1/.2, the planned-only finite-abelian-character pair at 222.1/.2, and
  exact Phase-3 local repairs for Skolem, plane duality, weak perfection, and
  substitution. The central ledger contains every direct and transitive
  published impact set. The Strong Perfect Graph Theorem remains a genuine
  blocker; rows 441/442 are frozen. Category Theory already owns the
  historical CT sections and accessible-category denial; Abstract Algebra and
  Algebraic Geometry now record their zero-ambiguity ownership seams.
- Complex Analysis: audited all 27 published pairs (54 pages, 886 items).
  Phase 2 is empty: every published defect has a published supplier or a local
  Phase-3 repair. All 20 enrichment pairs and the new topology compact-surface
  pair have zero published consumers. The topology, AG, AT, DG, MT, FA, PDE,
  algebra, and commutative-algebra seams are reconciled in their owner
  scaffolds and the central ledger.
- Computability Theory: audited 33 published and four planned pairs. There are
  55 draft supplier items on ten already-published A pages, closing 55 live
  edges from 47 published consumers to 29 direct roots; the central ledger
  contains all exact maps. The earlier Phase-2 label is withdrawn because
  pair-only Phase 2 cannot modify or hydrate those pages. The scaffold needs a
  compliant new-pair supplier design or an explicit owner change to the phase
  boundary. All 106 other planned A/repair suppliers have zero published
  impact; no recorded/deferred-choice path exists.
- Foundations/Set Theory: audited 402 published memberships across 22 pages.
  Its published YAML graph has zero Recorded-Not-Proved closure, but exact
  prose-level catalogue laundering repairs are recorded. Three SET completion
  items are Phase-2 roots for published FA/open-problem consumers; 19 other
  targets have zero published impact. The ledger also records all 83 direct
  consumers and the reproducible 3,522-item reverse closure of the published
  Dependent Choice rehome, plus the continuum B-to-A supplier repair.
- Linear Algebra: audited all 22 published pairs (44 pages, 749 items). It has
  no Phase-2 or planned-only supplier. Recorded 16 same-page proof-order
  repairs, 17 exact B-to-B edge removals, one missing body-link dependency,
  39 outside page consumers, and exact metadata resynchronization. The
  Computability/Combinatorics seam needs no new Linear Algebra item.
- Lie Theory: audited RL-1--4 (eight published pages, 138 items) and all 11
  planned pairs. One Lie-owned A/B pair and the DG-30/DG-32 pairs are Phase-2
  suppliers for exact published Lie impact cones; 219 other future items have
  zero published impact. Four Shapovalov lemmas are Phase-3-only local repairs,
  and the arbitrary-positive-root Verma specialization remains source-blocked.
  DG, AG, Combinatorics, and finite-group Representation Theory seams are
  recorded in the ledger and owner scaffolds where already audited.
- Number Theory: audited 24 published pairs (672 items) and NT-22--24. It has
  no Phase-2 root; all 81 planned items have explicit zero published impact.
  Recorded 24 A-for-B cutovers, three same-page order repairs, and 14 B-to-B
  edge removals. The Minkowski proof chain is strengthened; Kronecker--Weber
  is excluded because its live item is not proved here. CA, Combinatorics,
  Group Theory, Abstract Algebra, and Complex Analysis seams are reconciled or
  queued with the active owner.
- Group Theory: audited all 23 published pairs and 842 items. Five GT-owned
  pairs are Phase-2 suppliers with exact published impact cones; the former
  three HA-owned item-root claims are withdrawn. Their 21 B items have zero
  consumers. Recorded 24 A-for-B
  cutovers, nine forward-edge repairs, and recorded-result isolation. Small-
  cancellation torsion, O'Nan--Scott, generalized-Fitting/components, and
  finite-torsion hyperbolic claims remain source-blocked or non-supplying.
- Probability Theory: audited PT-1--5 (ten published pages, 166 items) and all
  empty PT-6--22 pages. It has no Phase-2 root; the standard-Borel pair and all
  planned additions have zero published impact. Exact Phase-3 cycles, body
  link, B-leaf, page-edge, metadata, and DC closures are in the ledger. PT-8,
  PT-17, and PT-11 retain explicit FA, MT, and source-detail holds.
- Real Analysis: audited the complete published block and canonical completion
  track. It has no Phase-2 or planned-only supplier. The ledger records three
  missing B shells, two recorded-result defects, DC rehome, 13 B-page moves,
  57 B suppliers/81 edges, 93 body-link dispositions, and exact impact cones.
  Measure, FA, PDE, DG, Complex Analysis, Foundations, and Topology seams are
  reconciled or queued with their owner.
- Representation Theory of Groups: audited all 30 pairs, eight published pages,
  73 published items, and their 775-item closure. The new five-item Galois
  descent A page is the sole RG Phase-2 root; it has two direct and nine total
  published consumers. All 492 RG-5--RG-30 items and the three new B leaves
  have zero published impact. Group, FA, Fourier, Lie, and Probability seams
  are reconciled, including the FA-owned measurable-Hilbert-field pair and the
  removal of the accidental RL-15 B-page edge.
- Scheme Theory: audited AV-9--AV-26, including ten published pages, 209
  published items, and their 869-item closure. It has no Scheme-owned Phase-2
  root. The sole published-to-draft edge is AG AV-1
  `def-affine-algebraic-set` into two published Scheme items already included
  in AV-1's exact 105-item cone. All 534 amended AV-14--AV-26 items have zero
  published impact. The ledger records the B-leaf, ordering, ownership, and
  metadata repairs; AG, Algebra, Complex Analysis, CA, and DG seams are
  reconciled.
- Topology: audited all 60 published pages and 922 distinct items. It has zero
  Phase-2 root. The ledger records all 27 B suppliers/34 direct edges, three
  local metrization suppliers and their complete published cones, eight
  deferred-catalogue cutovers, 14 forward-order repairs, ten body-link repairs,
  and the item-level zero-impact compact-surface pair. Foundations, Real
  Analysis, Probability, Group Theory, Algebraic Topology, Complex Analysis,
  Category Theory, Differential Geometry, and Measure Theory seams are
  reconciled.

## Mechanical baseline

`node tools/depcheck.mjs --quiet` currently resolves every reference and finds
no cycles or draft items on published pages, but emits 474 warnings requiring
semantic classification. `node tools/extcheck.mjs` finds 63 published items
resting directly or transitively on recorded-not-proved material. They are
read-only findings, concentrated in category theory (1), combinatorics (19),
differential geometry (2), Fourier analysis (4), functional analysis (5), group
theory (16), measure theory (4), PDE (1), real analysis (2), and topology (9).

The current plan also has 15 published pages whose declared `requires` include
an empty/unpublished planned page. These edges are audit findings, not authority
to modify published content. Each category agent must determine the earlier
supplier pair(s) that future frontiers need.

A direct item-status scan finds 86 published-to-draft dependency edges: 71
published consumers and 46 draft suppliers. They occur in algebraic geometry
(32 edges), computability theory (53), and scheme theory (1). This is a small,
high-value future publication queue; publishing the 46 supplier items first is
cheaper than touching the 71 consumers now.

Page status and item status are not aligned everywhere: 1,034 draft-status
items are listed by page-status `published` pages across 15 categories. Do not
mistake the 86 direct edges for the whole public-page audit pool, and do not
change these statuses during this scaffold audit. Category agents must separate
real dependency defects from status/metadata inconsistencies for later work.

## Cheap future repair strategy for published content

Do not reread 15,000 items as one undifferentiated pool. Build a stable defect
queue from existing graph evidence, then spend semantic-review effort only on
the affected dependency cones:

1. Seed the queue with unresolved/cyclic/forward edges, published-to-unpublished
   page edges, recorded-not-proved closure, homeless suppliers, citation/deps
   mismatches, and agent-confirmed inadequate interfaces.
2. Collapse findings by missing or inadequate supplier. Rank suppliers by the
   number and risk of downstream consumers; one earlier supplier repair may
   close hundreds of findings.
3. Add and publish prerequisite A/B pairs in topological order. Keep all current
   published consumers read-only until their entire prerequisite cone is
   published.
4. After a supplier cone is published, open one small connected consumer batch.
   Recheck exact hypotheses, direction, conventions, axiom strength, and proof
   use; amend only the affected published items and their impact closure.
5. Recompute the graph after every batch. Remove findings only when both the
   mechanical edge and semantic supplier-interface check pass.

This makes the unit of work a shared supplier cone rather than an individual
consumer and avoids repeated review of unchanged proofs.
