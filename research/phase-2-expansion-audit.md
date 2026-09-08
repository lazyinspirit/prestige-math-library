# Phase 2 expansion audit — 2026-09-08

Status: expansion audit found unresolved proof and source gaps. Complete
retirement is not certified.

Follow-up four-track dependency reconciliation:
`research/four-track-cross-library-reconciliation-2026-09-08.md`. Its supplier
inventory distinguishes existing published HA repair issues from future-only
HA/BG/QG/KL scaffolds and does not promote prose-only items to published
prerequisites. The provisional Phase-2 count remains 142 unless a new
published-repair or recorded-retirement root is established.

Owner exception: `the-finite-simple-group-classification-landscape` and its
`-examples` companion are slated for owner deletion. Do not add proof suppliers
solely to retain that stub. Preserve both published files; check inbound
references from other pages before deletion. This exempts its CFSG and
Feit–Thompson recorded items, leaving 159 other recorded items to disposition.
The audit found no inbound item relations, body wikilinks, plan requirements,
or library prose references from outside the pair to its 30 items/pages.

The owner's completion target covers every recorded mathematical result,
including those with no published consumer. Phase 2 must supply the proofs and
their prerequisites; Phase 3 repairs published consumers. No published item or
page may be edited during this audit. Open conjectures retain accurately sourced
status and cannot be logical dependencies. Relabeling an unproved theorem as
orientation does not prove it or satisfy retirement.

## Reproducible structural census

Run `node research/audit-phase-2-closure.mjs`. This reads actual YAML with the
renderer parser, not only the plan or the validators' narrower list parsers.

- 1,616 planned pages; 900 page files; 897 published page headers.
- 15,416 items; 15,014 published item headers; 161 recorded items.
- The starting manifest has 122 unique pairs: 41 direct roots and 81 prerequisites.
- Every declared unpublished prerequisite of a published page, and both
  companions of every selected pair, is covered. No unresolved page ID.
- No selected supplier's page prerequisite closure reaches a recorded catalogue.
- The Tor pair is partially published: its B page is published, its A page is
  draft, but all 49 A/B items are published. It needs A-page release review,
  not authoring. Preserve all items and the published B page.
- Four selected Homological Algebra A pages require B pages. These edges need
  reconciliation with actual theorem suppliers, not blind normalization.
- 88 published-to-draft item edges target items on published page headers.
  None of those targets is itself homed on a selected pair. Page publication
  alone therefore cannot establish item readiness. The existing replacement
  and Phase-3 repair ledger must cover each edge.
- Two published items have no actual page home: the forest anticomplete-pair
  theorem and the leaf-deletion virality theorem. Page-only traversals omit
  them; the item census includes them.

The plan validator and depcheck pass structurally. Their success is not a
proof-adequacy certificate. `extcheck` reports 161 recorded items and 63 marked
consequences; its consequence mark also includes orientation references, so
this is not an exact count of load-bearing consumers.
The renderer-YAML item graph finds 52 distinct published, nominally proved
items reachable from recorded items through declared proof relations (51
outside the CFSG exception). This includes remarks and metadata refutations
that still need semantic classification. The exact per-root impacts are
emitted by the census script; do not substitute the 63-marker count for them.

The selected suppliers' inherited page closures contain 26 direct recorded
item edges and three published-to-draft item edges. These are exposure
warnings, not proof that each selected supplier consumes the defective item:
sharing a prerequisite page does not import every item on it. Authoring must
check the exact imported item closure against the repaired supplier graph.

## Confirmed retirement gap

The original Group Theory scaffold expressly excludes local proofs of
Gromov's growth theorem and Novikov–Boone/Adian–Rabin, among others. Removing
consumer edges or retaining these as non-load-bearing remarks cannot retire
the mathematical results. CFSG and Feit–Thompson on the owner-exempt stub
are not counted as missing proof obligations.

Authoritative source consulted: Stephen D. Smith's complete author-hosted
*CFSG—A User's Manual*, introductory theorem and Lecture 2,
<https://homepages.math.uic.edu/~smiths/talkv.pdf>. It identifies the
classification and explains its proof architecture; it is not a substitute
for a complete library proof or for its missing prerequisite scaffold.

## Completion gates

1. Inventory every `proved_here: false` item across all categories. Map every
   mathematical clause to an existing proved item or an exact planned proof
   destination; distinguish open or erroneous status claims.
2. Include every unpublished destination and both companions' prerequisite
   closure in Phase 2. Preserve already-published companions. Unresolved proof
   destinations remain explicit blockers, not empty pair shells counted as done.
3. Reconcile source hypotheses, axiom strength, definitions, and full proof
   routes. Every planned supplier must avoid its unrepaired published consumer
   and every recorded result, directly and transitively.
4. Track all published consumers at item level, including aliases, block YAML
   lists, `justified_by`, and load-bearing forward/body references. Reconcile
   the consumer impact ledger whenever a supplier changes.
5. At the Phase-2 boundary, all required supplier items must be published and
   proof-reviewed. Full-text gates and unresolved supplier mappings must be
   empty. A page shell or a published page header is insufficient.
6. Phase 3 must actually cut over and repair consumers, reconcile item homes,
   and retire the obsolete recorded entries without deleting mathematical
   obligations. Only after proof review and dependency checks may the library
   be certified self-contained.

## Reconciled findings and remaining work

The initial audit added twenty existing scaffolded pair obligations, bringing
the provisional inventory to 142: 41 direct roots, 17 retirement roots, and
84 prerequisites. They comprise twelve Set Theory destinations, the de Rham
endpoint and smooth-singular comparison, four Brauer-theory pairs, and the
stable-homotopy/local-coefficient suppliers omitted by the old AT page graph.
This count is not a final retirement total or a frontier-count guarantee.

Applied four HA A-only prerequisite contracts and fifteen unpublished AT
prerequisite arrays from their binding prose. Reconciled two AT requests with
the actual HA-11a planned theorem IDs. Corrected the plan-only exactness
definition to match the published `justified_by` relation, eliminating the
mixed-plan bootstrap. Removing the old HA chain exposed a genuine graded-ring
input of the projective-variety page; its plan now names the Rees A page
explicitly. No item or page content changed.

The earlier 52-pair increment also contains 49 pairs reached through nine
stale published placement/B-page edges rather than demonstrated item demand.
The literal page closure is retained pending Phase-3 cutovers. Do not schedule
those rows solely on that basis; independently justified retirement suppliers
remain required. Exact edges and proof obligations are in
`phase-2-expansion-consumer-audit.md` and `phase-2-expansion-math-audit.md`.

`recorded-retirement-ledger.json` inventories all 161 recorded items, their
direct declared consumers, and full published impact. Two records are
owner-exempt. Candidate proof pages are routing evidence, not final
clause-level certificates. The companion research report maps catalogue
families and distinguishes unresolved specialist proofs from local Phase-3
insertions and status claims. Unmapped atoms, Enflo's construction, everywhere
Kolmogorov divergence, the Strong Perfect Graph Theorem route, the remaining
group-theoretic results, and the source gates prevent retirement certification.

The source audit also found that the published leaf-deletion orphan imports
a leaf/co-leaf theorem as a stronger symmetric leaf/leaf statement. Its proof
and 23-item published impact are unsupported by that citation. The forest
orphan matches its external theorem but supplies no local proof and affects
two published items. Both routes are now blocked in the Combinatorics prose
until complete proof suppliers and correct hypotheses are established.

Next work: finish exact clause-to-item proof mapping; build source-backed
scaffolds for the remaining mathematical obligations; resolve the named source
gates; update the executable closure only after each new supplier is adequate.
The active first-wave scope remains fixed at twenty pairs.

Validation receipt: the reconciled plan validator, scoped prosecheck, and
`git diff --check` pass. The YAML-aware census confirms 142 unique manifest
rows, exact agreement with plan metadata, zero missing page prerequisites,
zero A-to-B dependencies among selected suppliers, zero catalogue pages in
their page closure, and no missing/stale recorded-ledger rows. All 51 mapped
candidate proof-page routes are either published or included in the manifest.
Depcheck exits successfully with 474 warnings, but its page-list parser has
the documented blind spot: the independent YAML review finds 345 draft items
on published page headers. None of these mechanical checks establishes proof
adequacy. `git diff --name-only -- items library` is empty.
