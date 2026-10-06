# Step 3a scope review — foliation-holonomy-and-the-holonomy-groupoid

- Run: `frontier-41-ha-dt-29` (batch 21), role alpha, label
  `step3a-pair-foliation-holonomy-and-the-holonomy-groupoid-f52466ba596ee74e`.
- A page: `foliation-holonomy-and-the-holonomy-groupoid` (order 573, category
  `differential-topology`, 23 scaffold items).
- B page: `foliation-holonomy-and-the-holonomy-groupoid-examples` (order 574,
  6 scaffold items); companion pointers A↔B agree in the batch manifest and in
  `plan-spec.json`. Batch 21 contains only this pair, so no sibling-pair content
  is touched.
- Decision: **sufficient** (non-owner scope review), recorded with
  `tools/step3-decisions.mjs record-scope` at the current pair content hash.
  Receipt:
  `research/frontier-41-ha-dt-29-step3a-review-foliation-holonomy-and-the-holonomy-groupoid.json`;
  re-verify with
  `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope`.
  No prior scope receipt or report existed for this pair.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, it edits
  no scaffold, item, plan row or owner record, and the only files written are
  this report and the review receipt.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-41-ha-dt-29-batch-21.pages.json` | A inventory (23 items) and B inventory (6 items) with every statement, strategy, `deps`, provenance, dependency level, page `requires`, and companion pairing. |
| `research/frontier-41-ha-dt-29-batch-21.coverage.json` | Four source records (Moerdijk–Mrčun; Calegari; Meinrenken; Leiden), the MMF drop record, and per-result alternative arguments (13 A + 6 B). |
| `research/frontier-41-ha-dt-29-batch-21.notes.md` | Step-1 construction record: design reconciliation, the 7 added prerequisite items with justification, interface choices, source ledger, dependency accounting, escalations 1–6, ACω audit, and the owner-local readiness repair of the nontransverse-pullback witness. |
| `research/plan-differential-topology-track.md` | Controlling prose design: DT-29 lines 1455–1494; harvest rows H137–H141, lines 1854–1858; §8 source register rows MMF (235), L (236), MIT (237), CC (238); deliberate scope boundary lines 1908–1912. |
| `research/plan-spec.json` rows 573/574 | Page identity, order, kind, category, companion, `requires`; item arrays are empty for scaffolded pages, so the batch manifest controls item order. |
| `research/frontier-41-ha-dt-29-alpha-step1-drift.md` lines 55–59 | Drift verdict `no-drift` for this page; declared closure contains the foliation/Frobenius, transversality, flow, quotient, covering-space and fundamental-group foundations; non-Hausdorff caveat retained. |
| `research/frontier-41-ha-dt-29-scope-ledger.json` | Both pages of this pair are owed by batch 21; no scope loss. |
| `research/frontier-41-ha-dt-29-owner-authoring-direction.md` | No DT-29-specific clause (its DT clauses concern the AT support pair and DT-19's inherited definitions). No owner scope record exists for this page. |
| `research/frontier-41-ha-dt-29-cross-batch-dependencies.json` (+ batch-22/23 inputs) | 58 supplier-batch-21 item edges (49 `verified`, 9 `open` scaffold-level rows, all consumed by batch 23) and two verified page edges (batches 22 and 23 consume the A page). |
| Published suppliers (sampled statements) | `def-leaf-of-a-regular-foliation`, `thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds`, `thm-regular-foliations-and-integrable-distributions-correspond`, `lem-overlapping-plaques-through-a-point-have-compatible-germs`, `def-plaque-of-a-flat-chart`, `def-covering-space-action`, `thm-orbit-map-of-a-covering-space-action-is-a-covering`, `def-deck-transformation-and-deck-group`, `prop-deck-transformations-are-determined-by-one-point-and-act-freely` — hypothesis/interface checks. |
| Re-fetched sources this session | Meinrenken `Groupoids.pdf` (99 pp., `/tmp/f41b21-men.pdf`), Leiden `foliation_notes.pdf` (53 pp., `/tmp/f41b21-leiden.pdf`), Calegari `oupbook.pdf` (371 pp., `/tmp/f41b21-calegari.pdf`), read at the recorded locators (below). |

## Inventory against the prose design

All 16 designed A items are present with the designed kinds and proof roles:
local transversal; holonomy-germ construction; chart-chain independence;
leafwise-homotopy invariance; concatenation and reversal; holonomy
representation and group; holonomy cover; monodromy and holonomy groupoids;
isotropy identification; pullback, quotient and suspension constructions; the
germ and non-Hausdorff remarks. All 6 designed B items are present in design
order with the designed `For` roles: density versus holonomy (Kronecker torus);
nontrivial finite holonomy (Möbius band); suspension of a circle diffeomorphism;
higher-dimensional flat-bundle suspension; transversality-essential pullback
counterexample; monodromy ≠ holonomy counterexample. No designed claim was
dropped or narrowed.

The manifest adds seven items ahead of their consumers, each a prerequisite of a
designed claim or a well-definedness certificate of a page definition (batch
notes §2): `def-leafwise-path-and-leafwise-homotopy` (the design's "path in a
leaf" was undefined on the page), `def-germ-of-a-local-diffeomorphism-at-a-point`
and `lem-germs-of-local-diffeomorphisms-form-a-group` (the design's germs of
transverse diffeomorphisms had no published carrier; the lemma is the
definition's `justified_by`), `lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action`
(used by the holonomy-cover and suspension constructions),
`lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists` (the
design gives only the definition; existence must be proved),
`lem-holonomy-classes-form-a-groupoid-congruence` (`justified_by` of the
holonomy-groupoid definition), and `def-map-transverse-to-a-regular-foliation`
(the pullback hypothesis had no carrier). All are inside the design's subject;
none introduces a claim outside it.

Scope-level clause checks (statements read against the sources):

- The holonomy germ is defined for a leafwise path between local transversals
  through chart-wise plaque transports, with chart-chain independence, homotopy
  invariance and concatenation/reversal as separate items — exactly the
  structure of Meinrenken §2.2 (Def. 2.6 transport; Def. 2.7–2.8 groups and
  groupoids), Leiden §2.1 (Def./Lem. 2.3; Prop. 2.4(1)–(3); Def. 2.5) and
  Calegari §4.2 (printed pp. 141–142; Thm. 4.4).
- The holonomy representation's change-of-transversal conjugacy, intrinsic
  kernel and holonomy-group image match Leiden Def. 2.5 + Prop. 2.4(3) and
  Meinrenken Def. 2.7(b).
- The holonomy cover is stated through the kernel of the representation with an
  existence-and-uniqueness lemma — a faithful expansion of the design's
  "covering corresponding to the kernel".
- The monodromy and holonomy groupoids are set-theoretic, with the natural map
  Mon→Hol and isotropy ≅ holonomy group; the smooth/étale structure is
  deliberately recorded, not constructed, in the non-Hausdorff remark. This
  matches the design's H139 row and its scope boundary (line 1910: "only
  elementary monodromy/holonomy groupoids were needed").
- The pullback proposition keeps transversality as a hypothesis; the quotient
  proposition is stated for a covering-space action of a discrete group (the
  design's "under the stated regularity"); the suspension is the
  universal-cover flat-bundle construction, with the holonomy germ of a base
  loop equal to ρ([γ])⁻¹ — a sign recomputed here from the displayed action
  convention and consistent with the sources' transport convention.
- The design's deliberate exclusions (étale/Lie-groupoid theory, Haefliger
  classifying spaces, foliation C*-algebras, Molino theory; lines 1908–1912)
  are preserved; nothing in this pair depends on them.

Recorded interface choice (batch notes §2, escalation 1): the quotient item is
the discrete covering-space form; a general free-proper Lie-group action would
need the quotient-manifold/slice theorem, whose carrier is outside this page's
declared closure. Consumer check: the only consumers
(`def-finite-holonomy-normal-model`, `ex-finite-holonomy-mobius-normal-model`,
`prop-mapping-torus-foliations-realize-global-reeb-stable-examples`,
`prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf`) use
finite-group or ℤ actions, for which the covering-space form suffices.

## Source coverage assessment

`node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-21.coverage.json --require-destination`
reports 2 pages, 131 harvested results, 0 errors, 0 warnings. Every item-level
reference URL in the manifest is one of the four coverage source URLs (checked
programmatically).

The design's first-named treatment, Moerdijk–Mrčun, could not be retrieved
(paywalled; the drop record holds the initial failure plus five recovery retries
and three searches) and is dropped with `decided_by: step-1-scaffolder`. The
design's §8 itself counts Leiden as MMF-derived corroboration, not independent;
the scaffold therefore rests on Calegari and Meinrenken as the two independent
treatments, with Leiden corroborating, and attaches one alternative argument per
design result (13 A + 6 B) to the accessible treatments.

Independent re-reads this session, at the coverage's locators:

- **Meinrenken**, *Lie Groupoids and Lie Algebroids*, PDF pp. 10–14: §2
  foliation groupoids, foliation charts and plaques; Def. 2.6 foliation
  paths/transversals and holonomy of a leaf path; §2.2 Def. 2.7 monodromy group
  π₁(L,m) and holonomy group as its quotient by trivially holonomic loops;
  Def. 2.8 monodromy and holonomy groupoids; Prop. 2.9 non-Hausdorff manifolds;
  Remark 2.10 independence of the two Hausdorff failures; Examples 2.2–2.4
  (mapping torus, associated bundle/suspension, Kronecker torus). This directly
  backs the pair's core items and the non-Hausdorff remark.
- **Leiden notes**, printed pp. 11–14: Def. 2.1 germs of local diffeomorphisms
  and the group Diff_x(M); Def. 2.2 transversal; Def./Lem. 2.3 single-chart
  transport then finite chart chains; Prop. 2.4 concatenation, homotopy
  invariance, change-of-transversal conjugacy; Def. 2.5 holonomy group; Ex. 2.7
  simply connected leaves; Ex. 2.8 Möbius band (middle leaf ℤ/2, all others
  trivial). Printed pp. 19–20: Def. 3.15 monodromy/holonomy groupoids, Prop.
  3.16 étale, Prop. 3.17 natural map, orbits and isotropy.
- **Calegari**, printed pp. 140–142: §4.2 foliated bundles, holonomy transport
  along chart chains, homotopy invariance on relative classes, Thm. 4.4
  transport as a homomorphism to the groupoid of germs, and the Reeb-stability
  passage (a DT-30 consumer).

The coverage's locators match the pages actually read. I did not re-read
Calegari §4.3 or Leiden §3.3 in full; those parts back only the corroborating
flat-bundle/groupoid background, for which the sampled sections already match
the manifest.

Flagged for Step 3b (item-level, not scope):

1. `cex-nontransverse-pullback-of-a-foliation-can-change-rank` records
   provenance `ai-altered` with empty reference locators: the witness was
   rebuilt as direct arithmetic by the documented owner-local readiness repair
   (f(t)=(0,t²) into the horizontal foliation of ℝ²; rank jumps at 0). The pair
   scope is unchanged, but the item's source treatment must be audited against
   the design's literature-derived expectation.
2. `rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff` is
   `proved_here: false` and needs its `external_dependency` record authored
   (batch notes §6.3: source URL = the Meinrenken notes, exact statement, local
   proof attempt, necessity) or it fails policy in Step 3b.

## Role in the library

- Declared prerequisites: all six `requires` pages are published:
  `distributions-integral-manifolds-and-the-frobenius-theorem`,
  `sard-theorem-and-transversality`, `vector-fields-flows-and-lie-derivatives`
  (differential-geometry) and `subspaces-products-and-quotients`,
  `covering-spaces-and-lifting`, `the-fundamental-group` (topology). The B page
  requires only the A page.
- Dependency accounting: 207 declared dep references over 84 distinct ids — 63
  published items and 21 in-pair items (20 on the A page, 1 on the B page). The
  full transitive closure from the pair's 29 items reaches 1219 distinct ids (29
  pair + 1190 published); zero are missing from `items/`, the run manifests and
  `plan-spec.json`, and zero are plan-only (unbuilt elsewhere). No dependency
  lands on a B-only item: the B page is a consumer leaf (0 external consumers;
  its only internal edge is item 6 → item 2).
- Intended role and consumers: DT-29 supplies the holonomy machinery consumed by
  DT-30 `reeb-stability-and-global-foliation-constructions` (order 575) and
  DT-31 `codimension-one-foliations-and-secondary-classes` (order 577); both
  consume the A page (verified page edges). 58 item edges name this batch as
  supplier (49 `verified` scaffold-level interface rows; 9 `open` rows belong to
  batch-23 consumers and are ordinary later-stage authoring/cross-proof duties,
  not scope defects). The 14 distinct supplier items actually consumed are all
  present in the current manifest, and no consumer needs content outside the
  page's scope.

## Unmet prerequisites

No prerequisite is absent from both the published library and the current
scaffold: the 1219-node transitive closure resolves entirely to published items
plus the pair itself (0 missing, 0 plan-only), and all six `requires` pages are
published. Four non-blocking findings are recorded; none is an omission from the
planned scope.

1. **General free-proper quotient foliation not scaffolded (documented
   restriction).** The design's item name says "free proper"; the scaffolded
   statement is the covering-space action of a discrete group. Evidence: manifest
   statement and batch notes escalation 1; the general form needs the
   quotient-manifold/slice theorem outside the page's closure. Checked against
   all 58 edges: no consumer needs the general form. Recommended owner action:
   none required for scope; keep the recorded boundary, or open a plan amendment
   if a future pair needs the slice-theorem form.
2. **MMF full text unread.** The design's primary treatment could not be
   retrieved; the drop is documented with per-result alternatives to two
   independent, fetch-verified treatments. Recommended owner action: none
   required; item-level MMF locators remain a plan-reconciliation option, not a
   mathematical gap.
3. **Item 23 recorded, not proved**
   (`rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff`). Consuming
   item: the remark itself; required recorded claim: monodromy and holonomy
   groupoids can be non-Hausdorff and the two failures are independent
   (Meinrenken Prop. 2.9 and Remark 2.10, Exercises 2.2–2.4; Leiden §3.2 for
   the groupoid construction). The claim is recorded from a read source; Step 3b
   must author the `external_dependency` record. This is a known 3b obligation,
   not a missing prerequisite.
4. **Counterexample provenance and groupoid-carrier interface notes.**
   `cex-nontransverse-pullback-of-a-foliation-can-change-rank` has
   `ai-altered` provenance with empty locators (see above), and the two groupoid
   definitions do not declare the published groupoid carrier
   `def-isomorphism-groupoid-and-connected-category` (it exists but is outside
   the page's `requires` closure; the statements specify the structure
   directly). Uncertainty: the second is a convention/declaration question for
   the Step-3b item audit, not a missing claim.

## Uncertainty statement

I verified page identity and companion pairing, the full inventory against the
design, statement-level scope fidelity for the core items, source coverage and
locators (including independent re-reads of the load-bearing passages in all
three accessible treatments), dependency resolution and closure,
consumer/supplier interfaces, and the B-leaf shape. I did not re-derive the 29
proof strategies and did not audit any published or in-run supplier proof (Step
3b/Step 5 work); I did not re-read Calegari §4.3 or Leiden §3.3 in full; and no
one in this run has read Moerdijk–Mrčun, whose locators remain design history.
Within those limits I found no omission, no scope narrowing that any consumer
depends on, and no unresolved prerequisite, so I propose no merger and no
enrichment.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and
examples cover the design's DT-29 subject (holonomy germs with chain-independence,
homotopy-invariance and concatenation certificates; holonomy representation,
group and cover; monodromy and holonomy groupoids with the isotropy
identification; pullback, quotient and suspension constructions with the
suspended-holonomy computation; the germ and non-Hausdorff boundary remarks; the
six companion examples), the seven additions are source-backed prerequisites of
designed claims, the sources cover every design result at the promised locators
with the MMF drop documented, and the pair's prerequisite closure and in-run
interfaces are intact. Step 3b may author against this scope; the item-level
flags above are 3b obligations, and any later change to a pair statement
invalidates this receipt hash.
