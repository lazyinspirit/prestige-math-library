# Step 3a scope review — pair `pontryagin-thom-and-framed-cobordism`

- Run: `frontier-41-ha-dt-29` (stage `3a-scope`), dispatch label
  `step3a-pair-pontryagin-thom-and-framed-cobordism-aef7bf06c39539e2`
- Role: alpha (scope reviewer only — not owner, not item author)
- A page: `pontryagin-thom-and-framed-cobordism` (batch 9, order 549,
  `differential-topology`; 20 items: 6 definitions, 10 lemmas, 1 proposition,
  2 theorems, 1 remark)
- B page: `pontryagin-thom-and-framed-cobordism-examples` (batch 9, order 550;
  5 items: 4 examples, 1 counterexample)
- Decision: **`sufficient`**
- Date: 2026-10-06.

This report decides scope only. It is not an item approval, not a proof
judgement, and not an owner record. No scaffold, manifest, coverage, plan or
library file was edited.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-differential-topology-track.md`
DT-17 (lines 970–1008), summary row line 46, binding `requires` array §12.4
line 2233. Registry `research/plan-spec.json`; scope ledger
`research/frontier-41-ha-dt-29-scope-ledger.json`; scaffold
`research/frontier-41-ha-dt-29-batch-9.pages.json`; coverage
`research/frontier-41-ha-dt-29-batch-9.coverage.json`; batch notes
`research/frontier-41-ha-dt-29-batch-9.notes.md`.

Intended subject: framings of a normal bundle, framed cobordism of embedded
submanifolds and its equivalence-relation/group structure, the
Pontryagin–Thom collapse and the reverse regular-preimage construction, the
fixed-codimension correspondence, equatorial stabilization of framed
submanifolds, the stable Pontryagin–Thom theorem $\Omega^{\mathrm{fr}}_d
\cong \pi_d^s$, and the normal/stable-normal/tangential framing distinction.

Intended role: supplier of the framed-cobordism and Pontryagin–Thom layer for
`the-hopf-degree-theorem` (batch 10) — which consumes the general-ambient
framed-cobordism definitions, the collapse of a framed neat cobordism, and the
regular-preimage machinery for its zero-dimensional classification and
injectivity argument — and for
`characteristic-numbers-and-cobordism-obstructions` (batch 11), whose
universal Pontryagin–Thom theorem consumes the framed neat-cobordism collapse.
The B page requires only its A page.

Consumer evidence: `research/frontier-41-ha-dt-29-cross-batch-dependencies.json`
records 27 edges touching batch 9, all outgoing — 24 item edges into batch 10,
1 item edge into batch 11
(`thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism`
← `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism`), and the two page
`requires` edges. There is no incoming edge. Every supplier id named in those
edges exists on the current A page. No owner page-specific direction exists:
`research/frontier-41-ha-dt-29-owner-authoring-direction.md` touches only the
AT support pair and DT-19. No page-specific owner decision or scope receipt
existed for this page when this review was recorded.

## 2. Design-to-manifest mapping

All 15 designed A rows and all 5 designed B rows are present with the designed
kinds and roles. Five prerequisite rows were added on the A page.

| design row (DT-17) | manifest item | note |
|---|---|---|
| A1 framing | `def-framing-of-a-normal-bundle` | rank-$0$, empty and metric-free quotient conventions added |
| A2 framed cobordism | `def-framed-cobordism-of-embedded-submanifolds` | end collars part of the data (DT-15 Definition 1.19 style); boundary signs literal |
| A3 equivalence relation | `lem-framed-cobordism-is-an-equivalence-relation` | cylinder/reflection/gluing, all declared |
| A4 framing identifies Thom target | `prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product` | $k=0$ and $N=\varnothing$ included |
| A5 PT map | `def-pontryagin-thom-map-of-a-framed-submanifold` | forward correspondence |
| A6 tube independence | `lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy` | forward well-definedness |
| A7 collapse of a framed cobordism | `lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps` | supplied by the added item 7 below |
| A8 framed regular preimage | `def-framed-regular-preimage-of-a-map-to-a-sphere` | reverse correspondence; standard orientation of $S^k$ fixed |
| A9 regular-value choice | `lem-regular-value-choice-does-not-change-the-framed-cobordism-class` | route reordered: the homotopy-with-common-regular-value lemma (item 11) is proved first; Milnor's Lemma 2 is absorbed into the rotation argument |
| A10 homotopic maps give cobordant preimages | `lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages` | restated with a common regular value, as the proof route requires |
| A11 preimage after collapse recovers $N$ | `lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold` | one inverse check |
| A12 collapse after preimage is homotopic to $f$ | `lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map` | other inverse check |
| A13 fixed-codimension theorem | `thm-pontryagin-thom-correspondence-in-fixed-codimension` | stated for $S^n$, $n\ge k\ge1$, exactly as designed |
| A14 stable Pontryagin–Thom | `thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems` | group isomorphism $\Omega^{\mathrm{fr}}_d\to\pi_d^s$ |
| A15 normal vs stable vs tangential framings | `rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data` | prevents the silent equivalence |
| B1 framed zero-manifolds | `ex-framed-zero-manifolds-and-signed-points` | signed count, prepares batch 10 |
| B2 standard framed equator | `ex-pontryagin-thom-map-of-the-standard-framed-equator` | **restated**: the canonically framed equator is framed null-cobordant (Freed Exercise 5.34), so the design's "suspension generator" claim is false as planned; the example keeps the design's suspension content by verifying $\sigma\leftrightarrow E$ on the trivial class, and the added B5 exhibits a nonzero class |
| B3 framed unknot generator | `ex-framed-links-represent-elements-of-pi-three-of-s-two` | $\pi_3(S^2)\cong\mathbb Z$ via the Hopf fibration long exact sequence, no Hopf-invariant theory |
| B4 framing is load-bearing | `cex-changing-a-framing-can-change-the-pontryagin-thom-class` | minted as `cex-`, matching the design's intent |
| B5 stabilization of a framed point | `ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map` | added; finite check of the design's item 14 compatibility |

Five rows were added to the A page, each the interface of the design's own
proof route (all confirmed against the sources in §3):

1. `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism` — design item 7
   requires collapsing a framed cobordism in $X\times I$; the published DT-16
   collapse definition covers only compact boundaryless submanifolds in a
   boundaryless ambient, while Freed's proof works with neat submanifolds in
   $[0,1]\times M$ (Freed Definition 3.1 and Lecture 3 proof).
2. `lem-positively-oriented-bases-are-path-connected` — Milnor's Lemma 1 input
   for the change of positive basis; the library has no published
   connectedness statement for $\mathrm{GL}^+(k,\mathbb R)$.
3. `lem-based-and-free-homotopy-classes-of-sphere-maps-agree` — needed to
   state the fixed-codimension theorem with $\pi_n(S^k)$ rather than free
   homotopy classes; Freed Lemma 4.16 supplies the argument.
4. `def-stabilized-framed-cobordism-colimit` — realizes the stabilization
   colimit that the design's item 14 uses without a home (Freed (4.42),
   Proposition 5.21; Ranicki Definition 6.16), including the group structure
   under disjoint union.
5. `lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map`
   — the equatorial-stabilization/suspension compatibility item 14 needs
   (Freed (4.43) prepends $\partial/\partial x_1$); the design promised it only
   inside the stable theorem, and B-page items cannot be A-page dependencies.

No designed item is dropped or weakened, and no item was added that leaves the
commissioned subject "Pontryagin–Thom and framed cobordism".

## 3. Source coverage and verification

The coverage file gives the A page four sources with item-level dispositions;
`node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-9.coverage.json
--json` rerun today reports 1 page, 63 harvested results, 0 errors, 0 warnings.
The B items are dispositioned inside the same A-page block through the Freed
5.25–5.26/5.30–5.35, Ranicki 6.9/6.18/6.20 and Milnor Problem-17 rows.

I re-fetched three of the four cited full texts and reproduced the recorded
stamps exactly:

- Daniel S. Freed, *Bordism: Old and New* — 7,243,524 bytes, sha256 prefix
  `ddecb72e0c9197c6`. Read: Definition 2.31, (2.32)–(2.34), Theorems 2.35 and
  2.37, Definition 3.1 (neat submanifolds), Theorem 3.9 and Lemma 3.12,
  Exercises 3.14–3.16, Lemma 4.16, (4.42)–(4.43), Theorem 4.44 and Exercise
  4.46, (5.15)–(5.19), Proposition 5.19, (5.20)–(5.22), (5.24), (5.25)–(5.26),
  (5.30)–(5.35) and Exercise 5.34.
- John Milnor, *Topology from the Differentiable Viewpoint* — 1,654,205 bytes,
  sha256 prefix `2c3b7412deda8aa9`. Read Chapter 7: framing and framed
  cobordism definitions, Product Neighborhood Theorem, Theorems A–C,
  Lemmas 1–4, the Hopf-theorem remark and the union operation (Problem 17).
- Andrew Ranicki, *Algebraic and Geometric Surgery* — 3,627,372 bytes, sha256
  prefix `fe5e07eb7448953e`. Read Definitions 6.11–6.12, 6.14, 6.16, Theorem
  6.17, Proposition 6.18, Remark 6.19 and Example 6.20, plus constructions
  6.8/6.10.

Scope-level confirmations: Freed Definition 2.31 (framing = trivialization of
the normal bundle) matches item 1; Freed Exercise 5.34 confirms the B2
restatement (the normally framed equatorial sphere bounds the ball and is
null bordant); Ranicki Theorem 6.17 and Freed (5.22) are exactly the stable
statement of item 19; the $(5.24)$ ring structure (Ranicki's product in
Definition 6.16) is deliberately not minted, and no batch-10/11 item consumes a
multiplicative framed structure.

One coverage nuance, not an omission: Freed Theorem 2.35 and Ranicki 6.10 are
stated for a general compact $M$ (respectively $[N,T(\eta)]$), while item 16
packages the $S^n$ case, which is exactly what the design's item 13 promises.
The constructions, both well-definedness statements and both inverse checks
(items 5–14) are nevertheless stated for a general closed ambient $X$, and the
general-$N$ packing is homed on the batch-11 page; no consumer needs a
general-$X$ bijection theorem from this pair.

Not re-fetched by me: Milnor–Munkres, *Differential Topology* (recorded stamp
1,009,234 bytes, `92004c65b2154b87`); its Chapter III §3.5–3.16 content reaches
this pair through the published DT-15/DT-16 supplier items, whose statements I
did read. This is recorded as residual uncertainty, not as an unread source
being load-bearing.

## 4. Dependency and prerequisite review

- All 25 batch-9 readiness records are `ready`;
  `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` (rerun
  today) reports 883 items, 883 ready, closed.
- Direct dependency classification over all 25 records: 67 published library
  items and 21 in-batch edges; **no dependency id lies outside the published
  library and this batch** — no missing id, no planned-only id, no dependency
  on another run batch.
- All seven declared `requires` pages are published library pages and each is
  actually consumed: DT-15 (5 items), DT-16 (12), Sard (3), Whitney/tubular
  (3), higher homotopy (8), spectra/stable (7), and
  `hurewicz-whitehead-freudenthal-and-cw-approximation` transitively through
  `thm-freudenthal-suspension-theorem` (homed there) used by
  `lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres` used
  by item 19.
- Consumer supply check: every batch-9 item id declared by a batch-10/11
  record exists on this A page; the general-$X$ interface items (2, 3, 5, 7,
  8, 9, 11, 12, 13, 14) are exactly the ones the Hopf page consumes.
- Confirmed unmet prerequisites: **none**.
- Evidence-state flags (not scope omissions): 17 published direct dependencies
  carry only judge/precheck markers and are flagged by repo-wide
  `node tools/depcheck.mjs` as `published-unaudited` (833 such rows repo-wide,
  pre-existing and not introduced here). Two of the 17,
  `lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms`
  (used by items 7 and 11) and
  `lem-collar-gluing-and-corner-smoothing-give-transitivity` (used by item 3),
  have only `verification.precheck` and no judge or audit marker at all.
  Recommended owner action: record the already-completed frontier-38 Step-5
  evidence as an `audited`/`verified` marker; no statement or proof change is
  proposed, and this does not make the scope insufficient.

## 5. Mechanical checks rerun 2026-10-06

| Check | Result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-9.pages.json` | 25 items, 0 normalized, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-9.pages.json` | 25 scoped items, 0 errors, 0 warnings |
| `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-9.coverage.json --json` | 1 page, 63 harvested results, 0 errors, 0 warnings |
| `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` | 883 items, 883 ready, closed |
| `node tools/depcheck.mjs` (repo-wide) | 833 pre-existing `published-unaudited` rows; no missing/unresolved dependency anywhere in this pair's closure; the other classes (150 cited-not-in-deps, 141 multi-home, 1 orphan) touch nothing here |
| `research/frontier-41-ha-dt-29-cross-batch-dependencies.json` | batch 9 is a pure supplier (27 outgoing edges, 0 incoming) |
| Owner/scope receipts for this page | none existed before this review; no owner decision to respect |

## 6. Scope assessment, considered and declined

The planned definitions (framing, framed cobordism, PT map, framed regular
preimage, stabilized colimit), results (equivalence relation, tube
independence, both well-definedness lemmas, both inverse checks, the
fixed-codimension bijection, the stabilization compatibility and the stable
theorem) and examples (zero-manifolds, equator, framed unknot, framing
counterexample, stabilization) cover the intended subject, instantiate the
design's items, and leave no planned consumer unsupplied. Considered and
declined as non-defects:

- the general-$X$ bijection packaging (§3) — components present, no consumer;
- the sharp stable range (Freed Theorem 4.44/Exercise 4.46) and the noncompact
  failure (Exercise 3.15) — recorded boundaries with named destinations;
- the framed ring structure (5.24) — not commissioned, not consumed;
- a bijection claim for $k=0$ or $k>n$ — degenerate; rank-zero and empty
  conventions are kept in items 1 and 4;
- the general classification of framed 1-manifolds in $S^m$ — the design's B3
  promises only the basic representative.

Unresolved uncertainty: proof contents were not checked (out of Step 3a
scope); the Milnor–Munkres scan was not re-fetched by me (§3). No published
mathematical defect was found in the pair's dependency closure.

## 7. Decision

Scope decision for the A page (and hence the pair): **`sufficient`**, recorded
through
`node tools/step3-decisions.mjs record-scope --run frontier-41-ha-dt-29
--page pontryagin-thom-and-framed-cobordism --decision sufficient`.
Receipt: `research/frontier-41-ha-dt-29-step3a-review-pontryagin-thom-and-framed-cobordism.json`.
