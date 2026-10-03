# Step 3a scope review — pair `character-groups-and-elementary-lca-duals`

- Run: `frontier-38-owner-30` (stage `3a-scope`), dispatch label
  `step3a-pair-character-groups-and-elementary-lca-duals-00622543d0143e4a`.
- Role: alpha scope reviewer (not owner, not item author).
- A page: `character-groups-and-elementary-lca-duals` (batch 10, order
  510.06501, category `fourier-analysis`, 13 items: 1 definition, 10 lemmas,
  2 theorems; dependency levels 0-4).
- B page: `character-groups-and-elementary-lca-duals-examples` (batch 10,
  order 510.06502, `requires` only the A page, 4 examples; levels 4-5).
- Decision: **`sufficient`**, recorded with the prescribed `record-scope`
  command.
- Date: 2026-10-03.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, coverage, item,
design, plan or engine artifact was edited; the only writes are this report
and the scope receipt.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-fourier-analysis-track.md` FR-15,
lines 1008-1040 (A/B page ids and `requires` 1012-1015; the seven designed A
rows 1026-1032; the companion sentence 1033-1039), with the track summary row
45 ("compact-open character groups, joint evaluation, and concrete duals"),
the placement/requires row 76, and the per-pair source matrix row 325.

The design fixes a deliberately elementary, inversion-free foundation: the
character group with the compact-open topology, its topological-group
structure, joint continuity of evaluation, pullback/quotient functoriality,
local compactness of the dual, the two available one-way compact/discrete
implications, products and discrete direct sums, and four concrete dual
computations. It is explicitly separated from Fourier inversion and
Pontryagin biduality (FR-16 proves Bochner/inversion first, FR-17 proves
biduality from inversion), removes the circular compact-group Peter-Weyl
route, and states four design warnings: no unrestricted compact-open claim;
the equicontinuity/compactness lemmas must be written locally rather than
citing Arzela-Ascoli by name alone; the correct product topologies must be
recorded; and the multiplicative-circle character convention (groups
additive, characters multiplicative) must be fixed.

Plan record: `research/plan-spec.json` orders 510.06501/.06502, category
`fourier-analysis`, A `requires` = [`uniform-spaces`,
`subspaces-products-and-quotients`,
`fourier-multipliers-and-sobolev-characterisations`,
`haar-measure-existence-and-uniqueness`, `ascoli-arzela`], B `requires` = [A
page]; both planned item arrays are still empty (unspliced), so
`research/frontier-38-owner-30-batch-10.pages.json` is the inventory of
record. The `ascoli-arzela` edge is this pair's Step-1 drift application
(`research/frontier-38-owner-30-alpha-step1-drift.md` lines 24-32); the
manifest's `requires` equals the plan verbatim.

Role and consumers. The A page is a foundation for the planned Bochner pair
(510.06503), duality pair (510.06505), finite-Fourier pair (510.06507) and
Poisson pair (510.06509), and it has one real in-run consumer, the Peter-Weyl
pair (batch 11, order 510.073). That obligation is item-level and reviewed in
`research/frontier-38-owner-30-cross-batch-dependencies.json`:
`ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` depends
on exactly three batch-10 A items
(`lem-unit-circle-is-a-compact-metrizable-topological-group`,
`def-pontryagin-dual-and-compact-open-topology`,
`thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`),
each ledger row `verified` against the batch-10 scaffold; the consumer uses
the circle/torus identification, the notation of the dual, and only clause
(1) of the compact/discrete theorem, and all three items state exactly those
clauses. Batch 10 declares no outgoing cross-batch edge
(`...batch-10.cross-batch-dependencies.json` is `[]`); the drift review
required supplier-before-consumer authoring for this in-run edge, which the
scope ledger permits (`allow_in_run_dependencies: true`).

## 2. Design-to-manifest mapping

All seven designed A rows are present, in design order, with the designed ids
and kinds:

| design row (line) | designed item | manifest |
|---|---|---|
| 1 (1026) | `def-pontryagin-dual-and-compact-open-topology` (def) | present, item 4 |
| 2 (1027) | `lem-compact-open-character-group-operations-are-continuous` | present, item 5 |
| 3 (1028) | `lem-character-evaluation-pairing-is-jointly-continuous` | present, item 6 |
| 4 (1029) | `lem-dual-homomorphisms-are-continuous-and-functorial` | present, item 8 |
| 5 (1030) | `thm-dual-of-an-lca-group-is-locally-compact-abelian` | present, item 11 |
| 6 (1031) | `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals` | present, item 12 |
| 7 (1032) | `lem-duals-of-finite-products-and-discrete-direct-sums` | present, item 13 |

Six further A items are the local supports authorized by the binding owner
direction ("put a complete local prerequisite item on the consuming page";
`research/frontier-38-owner-30-owner-authoring-direction.md`, "Local
prerequisite construction") and each is consumed:

| added item | role | consumed by |
|---|---|---|
| `lem-unit-circle-is-a-compact-metrizable-topological-group` (item 1) | fixes the multiplicative circle and its isomorphism with the published torus | items 4, 5, 6, 12, 13; all four B examples |
| `lem-compact-open-topology-on-a-discrete-domain-is-pointwise` (item 2) | compact-open = pointwise on discrete domains | items 12, 13; B `ex-pontryagin-dual-of-the-integers-is-the-circle`, `ex-pontryagin-dual-of-a-finite-cyclic-group` |
| `lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup` (item 3) | arc contains no nontrivial subgroup | item 12 |
| `lem-pointwise-limits-of-characters-are-characters` (item 7) | characterhood closed under pointwise/equicontinuous limits | item 10 |
| `lem-continuous-characters-of-the-real-line-are-exponentials` (item 9) | characters of the line | B `ex-pontryagin-dual-of-euclidean-space` |
| `lem-dual-identity-neighbourhood-is-compact` (item 10) | compact identity neighbourhood via equicontinuity + Ascoli | item 11 |

The design's warnings are honoured in the statements: item 8 states part (a)
for pullbacks along arbitrary continuous homomorphisms plus part (b) for the
quotient/annihilator case and adds "No stronger claim is made for pullbacks
along non-proper maps"; item 13 states the discrete-direct-sum half and
explicitly disclaims a direct sum carrying the subspace topology of a product
of non-discrete factors; item 10 writes the shrinking-neighbourhood
equicontinuity estimate and the closedness argument locally while citing the
published general-domain Ascoli sufficiency and compact-target corollary as
suppliers; item 12 proves the two one-way implications and no iff; the four
B items are exactly the four designed computations, and the cyclic example is
stated for the presented group `Z/NZ` under `k -> (x -> e^{2 pi i k x/N})`
with no generator choice for an abstract cyclic group, as the design demands.

Choice accounting is complete and consistent: every statement that assumes
the Axiom of Choice names `def-axiom-of-choice` among its `deps`
(items 8, 10, 11, 12, 13) and the countable-choice B example names
`def-countable-choice`; all other items are choice-free, matching the design's
"licenses RG-18 Haar measure" and the scaffold notes' accounting.

## 3. Source coverage

Three independent full treatments were fetched, stamped and re-verified in
this review: the recovered local PDFs are byte-identical in size and share
the recorded SHA-256 prefixes, and I read the cited sections in the recovered
text.

| source | fetch stamp (recorded = re-verified) | what I checked |
|---|---|---|
| Dikranjan, *Introduction to Topological Groups* (Udine/Madrid 2007), 69 pp. | 748 893 bytes, sha16 `84ab8177b9bc461c` | §§7.1-7.3 (pp. 46-52): `G*`, `W(K,U)` and the compact-open topology; Example 7.1; Theorem 7.2(a)-(f); Lemma 7.5 and Example 7.7 (`Z`-, `T`-, `R`-duals); Lemma 7.12; Proposition 7.13; Theorem 7.14 (both halves) — all match the coverage rows |
| Loomis, *Introduction to Abstract Harmonic Analysis*, Ch. VII | 8 691 521 bytes, sha16 `05a32c7db1e616af` | 34A (characters into modulus-one complex numbers, joint continuity), 34D (product of characters, dual is LCA), 35A (finite products), 35B (quotient dual = annihilator), 35C/35D/35E (dual computations) — all present and matching |
| Einsiedler-Ward, *Ergodic Theory with a View Towards Number Theory*, Appendix C | 1 024 475 bytes, sha16 `c8e8b3e47226ca27` | C.1 (quotient/open map/group structure), C.3: Theorem C.6 (dual of LCA is LCA; the dense-separating-subgroup half correctly deferred), Lemma C.7 (compact/discrete duality), Theorem C.13 (annihilator, `(G/H)^ = H-perp`; the remaining exactness identities correctly deferred), Example C.14(1)-(2) — all present and matching |

Coverage rows: 66 harvested results (A page 54: 29 `included`, 7 `inline`,
3 `already-published`, 9 `deferred`, 6 `out-of-scope`; B page 12: 10
`included`, 1 `deferred`, 1 `out-of-scope`). Every deferral names a
plan-spec destination (`pontryagin-duality-for-locally-compact-abelian-groups`
or `bochner-inversion-and-plancherel-on-lca-groups`), and every out-of-scope
row carries its own reason consistent with the design boundary (p-adic/
Prufer duals, closed-subgroup classification, L1/Gelfand character space,
separation of points, inversion and biduality, compact-product direct sum).
No unread or unverified source is load-bearing: every included/inline row is
carried by at least one of the three verified treatments plus the local
proofs.

The design-cited Koerner, *Topological Groups* notes are a documented drop:
the coverage records a TLS failure (`UNABLE_TO_VERIFY_LEAF_SIGNATURE`) on all
host-path variants, five retrieval attempts, two searches and an alternative
argument with declared dependencies for each inline result. I re-attempted
the design URL once in this review (`curl` fails with the same certificate
error) and ran one web search; no accessible body was found. The Step-1
drift review, by contrast, cites "actual §9, Lemma 9.3, p. 22", says the
notes state the needed topology results without full proofs, and records the
design's "Ko §§6-9, pp. 14-21" locators as stale for the fetched edition. I
could not reproduce either access in this session; this is an unresolved
record-level discrepancy about the auxiliary source, not a mathematical gap:
the drift review itself directs that the polar/equicontinuity steps be
written locally, and item 10 does exactly that, with all content carried by
the three verified treatments. The owner direction explicitly does not
require a second locator when one authoritative treatment is fully
reproduced locally with its prerequisites proved.

## 4. Dependency and unmet-prerequisite checks

All five declared page-level `requires` are published and earlier in the
reading order: `subspaces-products-and-quotients` (order 251),
`uniform-spaces` (279), `ascoli-arzela` (285),
`fourier-multipliers-and-sobolev-characterisations` (458.02601),
`haar-measure-existence-and-uniqueness` (506.1). Only `ascoli-arzela` is
load-bearing at item level (item 10 cites
`thm-ascoli-arzela-sufficiency` and
`cor-equicontinuous-families-into-a-compact-metric-target`, and item 11
consumes item 10); the other three
edges are inert but published, so no unmet prerequisite arises. The plan
validator flags only advisory `redundant-prereq` notes on this page
(`subspaces-products-and-quotients` is reachable through four other
suppliers).

Item dependency audit: the 17 items declare 78 distinct direct dependencies;
10 are in-batch A items and 68 are external, and every one of the 68 exists
on disk with `status: published` (0 missing, 0 draft, no `justified_by`, no
`forward_refs`, no B-page supplier). `node tools/manifest-deps.mjs` reports
17 items, 0 errors. `extcheck` reports 40 global `unproved-on-published`
advisories; none intersects this pair's closure. The in-batch graph is
acyclic, `item-dependency-levels check --run frontier-38-owner-30` exits 0
(804 items, maximum level 16, no batch-10 row), and all 804 run items have
closed Step-1 `ready` records.

Consumed-interface check against the planned downstream pages: FR-16 items 3
and 7 take joint evaluation from item 6 and its compact/tail arguments from
item 6 plus the LCA dual (item 11); FR-16 item 12 needs Haar on the dual, for
which item 11 supplies local compactness; FR-17 items 7 and 14 take "FR-15
one-way compact/discrete results" (item 12) and FR-17 item 16 takes
"FR-15 functoriality" (item 8(a)); FR-17's separation, extension, inversion
and biduality items are deliberately supplied by that pair and FR-16, not
here. FR-18/FR-19 take the A page as a reading-order interface. Every claim
the design promises to these consumers is present in the scaffold.

Checks re-run on the current files for this review:
`manifest-integrity` 60/60 pages, no scope drift; `coverage-checklist
--require-destination` 2 pages, 66 harvested, 0 errors/0 warnings;
`content-policy --manifest-only` 17 items, 0/0; `manifest-deps` 0 errors;
`item-dependency-levels` exit 0; `step1-decisions check` 804/804 ready,
closed; `step3-decisions check --phase scope` names this page (review
required, as dispatched); `validate-plan` exit 0 with the noted
redundant-prereq advisories only; `extcheck` OK.

**Confirmed unmet prerequisites: none. Uncertainty: none material.** The
only unresolved item is the auxiliary-source record discrepancy in §3, which
does not change any claim or dependency.

## 5. Observations for the owner (no decision change)

1. **Koerner record discrepancy (record-level).** The scaffolder's coverage
   records a total retrieval failure while the Step-1 drift review cites
   Koerner §9 Lemma 9.3, p. 22, and calls the design's locator range stale.
   I could reproduce neither access. No claim depends on the notes (all
   content is carried by Dikranjan/Loomis/Einsiedler-Ward and local proofs),
   so no action is needed for this scope decision; a one-line reconciliation
   in a future coverage refresh would remove the inconsistency.
2. **Dikranjan Theorem 7.14 row granularity.** The A-page coverage row lists
   both halves of 7.14 (discrete direct sums; compact products) as `inline`
   against `lem-duals-of-finite-products-and-discrete-direct-sums`, but the
   item states only the discrete-sum half (with its disclaimer); the
   compact-product half is neither itemised on FR-15-FR-17 nor consumed, and
   the B-page row already records it as outside the pair. A future coverage
   refresh could split the row to mark the compact-product half `deferred`
   to the duality pair. No scope change.
3. **Overlap with a planned FR-17 item.** Item 8(b) states the
   quotient-dual/annihilator isomorphism that FR-17's design lists as its own
   item 11 (`thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator`).
   When FR-17 is scaffolded it should reuse/cite this statement (or the owner
   should record the duplication deliberately); nothing on FR-15 needs to
   change now.
4. **Inert declared page edges.** `uniform-spaces`, the FR-6 page and Haar
   are declared on the page but not consumed by any item; all are published,
   so this is a plan-hygiene note (the same situation the batch notes already
   recorded), not a gap.
5. **No merger or enrichment is proposed.** The four companion examples are
   exactly the design's B inventory, and every candidate addition (compact
   products, closed-subgroup duals, separation of points, extension) is
   deliberately owned by the two later pairs or outside the commissioned
   scope.

## 6. Scope judgement

`sufficient`. All seven designed A rows and all four designed B leaves are
implemented with matching ids and kinds; the six additional A items are
locally justified supports under the binding owner direction and each is
consumed; the design's four warnings (no unrestricted compact-open claim,
local equicontinuity/compactness work, correct product topologies, character
convention) are visible in the statements; three independent full treatments
were fetch-verified by byte count and SHA-256 and their cited content checked
against the recovered texts; all declared prerequisite pages and all 68
external item dependencies are published, with no confirmed unmet
prerequisite; the in-run Peter-Weyl consumer's three item-level dependencies
are all supplied by scaffolded items; and the deferrals (inversion,
biduality, exactness, separation of points, compact-product duality) match
the design's declared boundary. The observations in §5 are record-level or
future-page hygiene and need no action for this decision.

## 7. Evidence index

- Design: `research/plan-fourier-analysis-track.md` lines 1008-1040 (ids,
  requires, seven rows, companion), row 45, row 76, source-matrix row 325;
  FR-16 design 1042ff for the downstream interface.
- Plan: `research/plan-spec.json` rows 510.06501/.06502 (empty items) and the
  five prerequisite ids; `research/frontier-38-owner-30-planning-notes.md`
  (batch 10 row, design pointer L1008).
- Scaffold inputs: `research/frontier-38-owner-30-batch-10.pages.json`
  (13 A + 4 B contracts), `...batch-10.coverage.json` (66 rows, three
  stamped treatments, Koerner drop record),
  `...batch-10.cross-batch-dependencies.json` (`[]`),
  `...batch-10.notes.md`, the 17
  `...step1-<item>.json` readiness records,
  `...cross-batch-dependencies.json` (three batch-11 consumer rows,
  `verified`), `...-scope-ledger.json` (both pages, batch 10),
  `...step1-blockers.json` (unit 27 only).
- Step-1 drift: `research/frontier-38-owner-30-alpha-step1-drift.md` lines
  24-32 (drift-applied, ascoli-arzela edge; Koerner locator correction).
- Owner direction: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (local prerequisite construction; source-release clause).
- Sources (re-verified stamps): Dikranjan
  `http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf` (748 893 bytes,
  sha16 `84ab8177b9bc461c`, §§7.1-7.3); Loomis
  `https://people.math.harvard.edu/~shlomo/212a/loomis.pdf` (8 691 521
  bytes, sha16 `05a32c7db1e616af`, Ch. VII §§34-35); Einsiedler-Ward
  `https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf` (1 024 475
  bytes, sha16 `c8e8b3e47226ca27`, Appendix C.1/C.3).
- Checks run in this review: `manifest-deps`, `coverage-checklist
  --require-destination`, `content-policy --manifest-only`,
  `manifest-integrity --run`, `item-dependency-levels check --run`,
  `step1-decisions check --run`, `step3-decisions check --phase scope`,
  `validate-plan`, `extcheck`, plus a direct dependency-status scan (68/68
  published), an AC-annotation scan, an in-run consumer scan, and the
  source-stamp byte/SHA re-verification.

## 8. Not done (out of role)

No item approval or refutation, no proof-level verification of the 17 items,
no owner record, and no ledger, scaffold, manifest, coverage, prose, plan or
engine edit. Step 3b and Step 5 own proof correctness and item evidence.
