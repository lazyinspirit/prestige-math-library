# Step 3a scope review — plane-curves-local-intersection-multiplicity-and-bezout

- Run: `frontier-40-geometry-braids-rep-27` (batch 1), role alpha, label
  `step3a-pair-plane-curves-local-intersection-multiplicity-and-bezout-14eb881310dfd218`.
- A page: `plane-curves-local-intersection-multiplicity-and-bezout` (order 366.063,
  algebraic-geometry, 31 items).
- B page: `plane-curves-local-intersection-multiplicity-and-bezout-examples`
  (order 366.064, 10 items); companion pointers agree A↔B.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`,
  non-owner review, at the current pair scope hash). Scope only: no item
  approval, no owner record, no scaffold, plan, manifest, coverage or page edit.

## Evidence read

- `research/frontier-40-geometry-braids-rep-27-batch-1.pages.json` (31 A + 10 B
  items with `deps`/`justified_by`/`forward_refs`/`sources`), its
  `.coverage.json`, `.notes.md`, `.cross-batch-dependencies.json` (owned input
  `[]`), and the 41 step-1 readiness records
  `research/frontier-40-geometry-braids-rep-27-step1-<item>.json`.
- Prose design: `research/plan-algebraic-geometry-track.md` AV-8 (heading L623,
  `requires` L625, 28-row A table L630, 10-row B table L663, boundary L678), the
  2026-09-30 supplier-correction entry at L2907, the source-range row at L2065
  and the supplier matrix at L3950; `research/plan-commutative-algebra-track.md`
  L4654/L4683; `research/published-consumer-supplier-ledger.md` L11155 and
  L11184–11188 (CA-21 supplies "resultant items and the global graded/length
  steps of Bézout" to AV-8 A).
- Plan: `research/plan-spec.json` rows 366.063/366.064 (empty item arrays; A
  requires the three published pages; A→B companion edge; B requires A only).
- Owner decisions:
  `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  ("Preserve each pair's complete promised claim scope"; required local helper
  items permitted; no pair-specific change or waiver for this pair). No owner
  scope receipt exists for this page and the run's 3a-scope stage is 0/27, so
  nothing overrides the design.
- Supplier statements read at item level: CA-21
  `thm-projective-plane-complete-intersection-total-length`,
  `cor-projective-plane-bezout-length-form`,
  `cor-no-common-component-projective-plane-intersection-is-zero-dimensional`,
  `lem-zero-dimensional-projective-scheme-has-finite-local-charts`,
  `lem-projective-standard-chart-prime-and-local-ring-correspondence`,
  `def-total-length-of-a-zero-dimensional-projective-scheme`,
  `def-projective-scheme-from-a-homogeneous-quotient`,
  `def-residue-field-scheme-point`; DVR/length items
  `thm-one-dimensional-regular-local-rings-are-dvrs`,
  `thm-dvr-ideal-and-module-length`.
- Source re-verification for this review: downloaded and text-extracted the
  archived Fulton *CurveBook* PDF (706,612 bytes, 129 pp., matching the
  coverage's fetch stamp) and read §3.3's Theorem 3 properties (1)–(7), both
  proofs and the two-part Lemma for property (5), plus §5.3's Bézout theorem
  and Corollaries 1–3. The coverage's property mapping and dispositions are
  faithful (Cor 1 inline in the tangent-cone inequality, Cor 3 =
  `thm-bezout-uniqueness-low-degree-interpolation`, Cor 2 out-of-scope with a
  written reason).
- Checks run here: `node tools/manifest-deps.mjs` on the batch manifest — 41
  items, 0 errors; `node tools/coverage-checklist.mjs ... --require-destination`
  — 1 A page, 41 harvested rows, 0 errors/0 warnings; a recursive scan of all
  335 pair dependency edges (`deps` + `justified_by` + `forward_refs`) — 200
  resolve to `items/*.md` with `status: published`, 135 to own-pair scaffold
  items, 0 missing, 0 planned-only, 0 other-batch in-run; page-requires closure
  check (below).

## Scope against the prose design

All 28 A identifiers of the AV-8 table are present in the manifest and none is
dropped or weakened; the manifest adds exactly three items beyond the table —
`lem-truncated-plane-local-length`, `lem-tangent-cone-ideal-containment`,
`lem-plane-syzygy-truncation-injectivity` (all `local_addition: true`) — which
are the truncation length count and the two halves of Fulton's Lemma in the
proof of property (5) (§3.3: (a) $I^t\subseteq(F,G)O$ for $t\ge m+n-1$;
(b) injectivity of the truncated multiplication map iff the tangent cones are
coprime). They factor the design's own route ("tangent-cone inequality by
passing to initial forms") and are required local helpers under the owner
direction. The heading's "31 items" against its own 28-row table is therefore
reconciled by construction: 28 promised ids + 3 bridges = 31, recorded in the
batch notes. All 10 B leaves are present unchanged.

Coverage of the promised route is complete: definitions of curves, multiplicity,
tangent cone/tangent lines; multiplicity one = smooth; local intersection
multiplicity by length; finiteness iff no local branch; invariance under
equations, charts and projective coordinates; symmetry, vanishing, additivity,
locality and adding multiples; the tangent-cone inequality with its equality
case; transversality; intersection with a line as a vanishing order; the
resultant interface and finiteness; the published global length $=de$ and its
local-to-global decomposition; Bézout; the meet corollary; the
line-meets-degree-$d$ corollary; flexes, bitangents and the flex order-three
criterion; linear systems; low-degree interpolation uniqueness; projective
coordinate invariance of the sum; the component-counting template; and the
hypotheses remark. The B page supplies transverse/tangent line–conic, cusp,
node, affine-deficit, algebraic-closure, distinct-point, common-component,
nine-point cubic and flex-cubic examples. The design's boundary paragraph
(L678: Plücker formulas, blowup resolution, genus formula) is respected: the
coverage's out-of-scope rows (Noether AF+BG, multiple-point bound, dual curve,
Hensel, the divisor/line-bundle Bézout proof, exercises) are exactly the
excluded or alternative-route material and each carries an item-specific
reason.

## Source coverage

Four fetch-verified treatments: Fulton (textbook, 129 pp.), Artin 18.721
(lecture notes, 216 pp.), MIT 18.725 L15–16 (lecture notes, 63 pp.) and
Gathmann §6.1–6.2 (lecture notes, 214 pp.); all four carry `fetch_verified`
stamps. All 41 harvested headings are disposed: 18 `included`, 11 `inline`,
12 `out-of-scope` with reasons. Independent treatments exist for each half
(Fulton + Artin for the curve/multiplicity/Bézout block; MIT 18.725 + Gathmann
for the length/global block). Coverage is A-page-only, which is the
coverage-checklist contract (it requires entries for A pages and accepts B
items as destinations); the B items carry their own two references each
(Fulton + Artin; the common-component counterexample cites Fulton). I found no
fabricated or shifted locator in the load-bearing rows I re-read against the
fetched Fulton text.

## Role in the library

The pair is the library's classical plane-curve local-intersection/Bézout page
(AV-8) and consumes exactly the published CA-21 seam the ledger records: CA-21
supplies the resultant items and the global graded/length steps; AV-8 supplies
the local steps and the local-to-global decomposition. Exactly one plan page
names the A page in `requires`:
`chow-groups-intersection-products-and-grothendieck-riemann-roch` (order 899,
batch 22); that batch's own cross-batch record marks it as a page-level reading
prerequisite with no item-level consumption, and batch 1's owned cross-batch
input is `[]`. The B page is a dependency leaf requiring only the A page. No
published page or item references any pair item id; the ledger's current open
A-P carriers (O'Nan–Scott; bull-free Berge perfection) are unrelated to this
pair's suppliers, and the 19 pair suppliers appearing in the ledger's
classification index all carry resolved/audited entries (e.g.
`thm-one-dimensional-regular-local-rings-are-dvrs`, authorized local repair
2026-09-23).

## Unmet prerequisites

None confirmed. The three declared page prerequisites
(`normal-varieties-normalization-and-zariskis-main-theorem` 366.061,
`homogeneous-resultants-and-projective-intersection-length` 366.0621,
`schemes-subschemes-and-morphisms-locally-of-finite-type` 366.055) are
published, earlier than 366.063, and their `requires` closure contains the
design's named AV-3/AV-5/AV-6, CA-11 and CA-21 pages. All 200 published item
suppliers used by the pair exist with `status: published`; the 135 in-pair
inputs are scaffolded on the same pair. The key supplier claims were read and
match their consuming items: the residue-degree-weighted length formula and its
algebraically closed specialization ($=de$), nonemptiness plus
zero-dimensional charts, total length $=de$, and the chart-prime/local-ring
correspondence.

One observation (not a gap): of the 15 published pages homing consumed items,
only `lattice-paths-and-catalan-numbers` (order 197) lies outside the closure
of the declared page `requires`; it supplies
`thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient`,
used by the local addition `lem-truncated-plane-local-length`. It is published
and far earlier, so it is not an unmet prerequisite; aligning the manifest
`requires` row with the consumed-home closure is a Step-4 splice/plan matter if
the owner wants it.

## Uncertainty and observations for the owner

1. **Item-level statement-precision observations, referred to Step 3b** (no
   scaffold edit made; scope is unaffected because the correct intended content
   is in scope):
   - `def-multiplicity-plane-curve-point`'s product formula
     `m_p(V(F_1F_2)) = m_p(V(F_1)) + m_p(V(F_2))` "when $F_1,F_2$ are
     square-free and both pass through $p$" needs the two forms to have no
     common factor: with $F_1=F_2=x_0$ (projective chart) the union is the line
     $V(x_0)$ with $m_p=1$, while the right side is 2.
   - `thm-intersection-multiplicity-basic-properties` (3) has the same issue for
     $V(G_1G_2)$: for $C=V(x_0)$ and $G_1=G_2=x_1$ at $p=[0:0:1]$ one gets
     $I_p(C,V(x_1))=1\neq2$, with all three values finite as the statement
     assumes.
   - the same theorem (4), "$I_p(C,D)=I_p(C,V(G+AF))$ for every form $A$",
     needs Fulton's degree condition $\deg A=\deg G-\deg F$ and care with the
     page's square-free-curve convention: $F=x$, $G=y^2+xy$, $A=3y+4x$ gives
     $G+AF=(y+2x)^2$, whose curve is the line $y+2x=0$ with $I_p=1$ while
     $I_p(C,D)=2$. The invariant object is the local ideal
     $(f,g)=(f,g+af)$.
2. **B item scope note.** The design asks `ex-two-plane-cubics-nine-points` to
   "note multiplicity changes under degeneration"; the scaffolded statement
   covers only the transverse nine-point computation (the node and cusp items
   carry the local degeneration phenomena). This is a purpose note, not a
   dropped result; the author can add it.
3. **Coverage granularity for combined rows.** Fulton §5.3 Corollary 1
   ($\sum m_P(F)m_P(G)\le de$) and Artin's bound on the number of intersection
   points are disposed `inline` without a dedicated item; both are immediate
   combinations of scaffolded results (local inequality + Bézout;
   `cor-pascal-bezout-obstruction-template` states the point-count bound) and
   no planned item consumes them. The Fulton §3.1 "node and ordinary multiple
   point" heading is mapped to `def-multiplicity-plane-curve-point`, which does
   not formalize those terms; the two B examples exhibit the relevant
   tangent-cone and branch data and no scaffolded claim depends on a formal
   node/cusp definition. Record granularity, not a scope gap.
4. **Design count.** The AV-8 heading says 31 A items while its table lists 28;
   the manifest's 31 = 28 + the three bridges (above). Reconciled and recorded;
   nothing is missing relative to the ids the design actually promises.
5. Proof correctness, statement-level fidelity and dependency minimality are
   **not** judged here (Step 3b/Step 5); the three bullets in item 1 are the
   only statement-level concerns I found, and they are hypothesis/wording
   repairs.

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject — the classical local intersection calculus of plane projective curves
(multiplicity, tangent cones, finite length, invariance and additivity, the
$m\cdot n$ inequality with its equality case) and Bézout's theorem with the
local-to-global length decomposition, its classical corollaries and worked
examples — at design breadth, with source backing for every design row and for
the three added local bridges, and with only the design's own excluded material
outside. Recorded: **sufficient**.
