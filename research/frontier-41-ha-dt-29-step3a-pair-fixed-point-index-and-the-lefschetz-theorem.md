# Step 3a scope review — fixed-point-index-and-the-lefschetz-theorem

- Run: `frontier-41-ha-dt-29` (batch 8), role alpha, label
  `step3a-pair-fixed-point-index-and-the-lefschetz-theorem-8e42286f8572ef30`.
- A page: `fixed-point-index-and-the-lefschetz-theorem` (order 543, category
  `differential-topology`, 25 scaffold items).
- B page: `fixed-point-index-and-the-lefschetz-theorem-examples` (order 544,
  5 scaffold items); companion pointer A↔B is consistent in the manifest and
  in `plan-spec.json`.
- Decision: **sufficient** (non-owner review), recorded with
  `tools/step3-decisions.mjs record-scope` at the current pair content hash.
  Receipt: `research/frontier-41-ha-dt-29-step3a-review-fixed-point-index-and-the-lefschetz-theorem.json`;
  re-verify with `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-41-ha-dt-29-batch-8.pages.json` | A inventory (25 items) and B inventory (5 items) with every statement, strategy, `deps`, provenance and dependency level; page `requires`; companion pairing. Batch 8 contains only this pair. |
| `research/frontier-41-ha-dt-29-batch-8.coverage.json` | Four source records (Guillemin–Pollack, Stanford/Ionel–Lin, Wong, Hatcher) with locators, 47 harvested rows and dispositions, fetch stamps, and the documented Wong drop. |
| `research/frontier-41-ha-dt-29-batch-8.notes.md` | Step-1 construction record: inventory (16 design + 9 additions), nonorientable-route deviation, axiom bookkeeping, source stamps and the Wong drop, Step-3 caveats. |
| `research/frontier-41-ha-dt-29-batch-8.cross-batch-dependencies.json`; `research/frontier-41-ha-dt-29-cross-batch-dependencies.json` | 27 reviewed rows for batch 8 (26 verified item edges, 1 removed, 2 page rows); run-wide ledger 682 edges, 0 orphaned; no supplier edge leaves the pair. |
| `research/plan-differential-topology-track.md` §DT-14, lines 843–886 | Controlling prose design: 16 A items, 5 B items, source locators, `I−Df` sign convention, hard-proof closure (diagonal class, not homotopy invariance). |
| `research/plan-spec.json` rows 543/544 | Page identity, order, kind, category, companion, `requires`; empty item lists, so the batch manifest controls item order. Only the B page requires the A page. |
| `research/frontier-41-ha-dt-29-alpha-step1-drift.md` lines 49–56 | Drift verdict `no-drift`; closure includes intersection theory, vector-field index, transversality, degree, homology/cohomology, Poincaré duality and local coefficients. |
| `research/frontier-41-ha-dt-29-scope-ledger.json` | Both pages of this pair are owed by batch 8; no scope loss. |
| `research/frontier-41-ha-dt-29-owner-authoring-direction.md` | No DT-14-specific amendment; the §12 supersession and "do not rehome inherited definitions" clauses were checked and do not touch this pair. |
| In-run supplier pages (batch 2 order 531, batch 4 order 535, batch 7 order 541) | Statements of the 13 distinct cross-batch suppliers consumed by 26 verified item edges; all precede order 543, none is a B-only item, none is a forward reference. |
| Published suppliers: 82 `items/*.md` files on 31 `library/` pages, plus `node tools/depcheck.mjs --items-file` focused output | Existence, published status, and the three `published-unaudited` findings recorded below. |
| Re-fetched stamped sources this session: GP (`/tmp/GP.pdf`, sha256_16 `e4d815443ae77128`), Stanford `math215B.pdf` (`7ac76c813f493ed7`), Hatcher `AT.pdf` (`bebb3032bf9021b9`) | Locator re-verification at the exact bytes the coverage file stamped. |

## Inventory against the prose design

All 16 designed A items are present with their designed content and kinds; item 7
is renamed `lem-local-fixed-point-index-splits-under-perturbation` (splitting is
what the page uses, matching GP's Splitting Proposition), and item 10 is factored
into the transverse lemma plus the general theorem, which adds the perturbation
and orientation-double-cover reductions. All 5 designed B items are present, in
design order, with the design kinds. No designed claim was dropped or narrowed,
and the page adds no claim outside the design's subject.

- The 9 additions are local prerequisites of designed claims, each placed before
  its consumers: `lem-a-closed-discrete-subset-of-a-compact-space-is-finite`
  (finiteness of the fixed set for the index sum),
  `lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation`
  (transport along charts and covering projections),
  `lem-the-local-intersection-sign-of-the-graph-and-diagonal` (the determinant
  shear `sign det(I−Df_x)` in the DT-11/DT-12 orientation conventions),
  `lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points` (the
  transverse case), the four double-cover/transfer lemmas
  (`lem-the-orientable-double-cover-of-a-smooth-manifold`,
  `lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover`,
  `lem-fixed-point-sum-of-the-two-lifts-of-a-self-map`,
  `lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number`),
  and `rem-lefschetz-index-formula-recovers-poincare-hopf` (the design's promised
  derivation of Poincaré–Hopf from Lefschetz).
- Boundary clauses are preserved: smooth, boundaryless, `n≥1` for local indices;
  closed (compact, boundaryless) for global statements; isolated fixed points
  for the Lefschetz–Hopf formula, which is stated for possibly disconnected and
  possibly nonorientable manifolds; the topological theorem is stated for
  continuous self-maps of closed *smooth* manifolds, with no converse.
- The convention is `I−Df` throughout, with an explicit warning that the other
  ordering multiplies the value by `(−1)^n` (GP uses `df_x−I`); the design's
  hard-proof closure is followed (the trace equality is routed through the
  diagonal-class expansion, never through geometric homotopy invariance).
- Recorded design deviation (batch notes §2.2): the nonorientable case of
  `thm-lefschetz-hopf-index-formula` is proved by the orientation double cover
  plus the rational transfer instead of the design's AT-23 twisted-local-system
  route. The claim set is unchanged and the deviation is documented; this is a
  proof-route substitution, not a scope change.
- The plan's `requires` array for order 543 is preserved exactly as the plan has
  it (batch notes §2.1). The design additionally names
  `relative-homology-excision-and-mayer-vietoris` and
  `cw-complexes-and-cellular-homology`; both are published and are actually
  consumed transitively (`cor-homology-of-spheres` backs all four B examples
  that use sphere homology; `thm-cellular-homology-computes-singular-homology`,
  `def-euler-characteristic-of-a-finite-cw-complex`,
  `def-cw-complex-with-closure-finiteness-and-weak-topology` and
  `def-cell-attachment-by-a-characteristic-map` back the torus example). This is
  a readability widening for owner/Step-4, not a closure gap.

## Source coverage assessment

`node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-8.coverage.json --require-destination`
reports 2 pages, 47 harvested results, 0 errors, 0 warnings: 35 `included`
(30 source rows + 5 canonical rows), 2 `inline`, 9 `out-of-scope` and
1 `already-published` (Brouwer for the disk, homed on the published
`library/topology/applications-of-the-fundamental-group.md`). Every decline
carries a specific reason (surface classification, DT-11/DT-12 exercises, the
Lefschetz zeta function, the index axioms, Nielsen theory, the chain-level
polyhedral proof, transfer applications to lens spaces), and none of them
removes a designed claim from the pair.

`node tools/source-fetch-check.mjs --coverage …` reports 5/6 fetch-verified and
6/6 resolved (1 documented drop). I re-fetched the three live sources and
matched the stamped hashes, then re-read the load-bearing passages:

- GP, *Differential Topology*: pp. 119–120 (global `L(f)=I(Δ,graph f)`, the
  smooth Lefschetz theorem, homotopy invariance, `L(id)=χ`), pp. 120–122
  (Lefschetz fixed point ⇔ `df_x−I` invertible; local number `= sign det(df_x−I)`),
  pp. 126–127 (Splitting Proposition), pp. 134–137 (the tangent-family
  proposition `L_0(f_t)=ind_0(ξ)` and the normal-projection proof of
  Poincaré–Hopf). All match the coverage's locators and dispositions.
- Stanford Math 215B (Ionel, notes by Lin): pp. 51–52 Lemma 150 (Künneth
  diagonal splitting with the `(−1)^dim` sign), p. 54 `sign(x)=sign det(I−df)`,
  pp. 54–55 Theorem 155, Corollary 156, Examples 157–158, Remark 159.
- Hatcher, *Algebraic Topology*: pp. 321–322 §3.G (transfer `τ` = sum of the two
  lifts, `πτ=2`, `τπ=1+τ`, Proposition 3G.1), backing the double-cover/transfer
  lemmas; Chapter 0 pp. 5–6 and §3.3 pp. 234–235 back the torus CW structure and
  the orientation double cover (read and stamped at Step 1).

The design's Wong source is dropped as a fetch-gate source: the host serves an
incomplete TLS chain (I reproduced the failure independently — `curl` exit 60,
0 bytes), no alternate host or snapshot was found at Step 1, and one bounded
web search this session found none either. The document was read once at Step 1
with certificate verification disabled, and all six items it backed
(`def-local-fixed-point-index`, `thm-index-of-a-nondegenerate-fixed-point`,
`def-algebraic-lefschetz-number`, `thm-lefschetz-hopf-index-formula`,
`ex-degree-d-map-on-a-sphere-has-lefschetz-number-one-plus-minus-d`,
`cex-vanishing-lefschetz-number-allows-fixed-points`) have their content
independently in the two stamped treatments I re-read. This is an adequate
source basis, not an uncovered claim; the drop is recorded with per-item
`alternatives` in the coverage file.

## Role in the library

- Declared prerequisites: all 10 `requires` pages resolve — 8 are published
  (`oriented-and-mod-two-intersection-numbers`, `sard-theorem-and-transversality`,
  `the-de-rham-theorem-and-degree`, `singular-chains-and-singular-homology`,
  `singular-cohomology-and-coefficient-theorems`,
  `cup-cap-cross-products-and-cohomology-rings`,
  `orientations-poincare-lefschetz-and-alexander-duality`,
  `local-coefficients-twisted-homology-and-duality`) and 2 are scaffolded in
  this run at earlier orders (`intersection-pairings-self-intersection-and-euler-classes`,
  order 531; `vector-field-index-euler-characteristic-and-poincare-hopf`,
  order 541).
- Dependency closure: 278 declared dep references / 119 distinct ids — 82
  published items on 31 published pages, and 37 in-run scaffold items
  (10 on batch 7, 2 on batch 2, 1 on batch 4, 24 on this same page). Zero
  unresolved ids; no dependency lands on an in-run B-only item; no page or item
  outside the pair consumes any pair item (the only cross-page consumer edge is
  B→A); the 26 cross-batch item edges carry `verified` scaffold-level interface
  rows and their supplier pages (531/535/541) precede 543.
- Intended role: DT-14 is the differential-topology capstone on fixed-point
  indices and the Lefschetz theorem, converting the intersection-theoretic
  (DT-11/DT-12) and vector-field-index (DT-13) machinery into the local index,
  the Lefschetz–Hopf formula and the existence theorem, with the examples page
  as a leaf. No later page in this run requires it, consistent with the design's
  role as a terminal application page.

## Unmet prerequisites

No prerequisite is absent from both the published library and the current
scaffold: all 119 distinct dependency targets and all 10 `requires` pages
resolve (the automatic checks above give the exact counts). Two non-blocking
interface findings are recorded for the owner:

1. **Published audit receipts missing (exact finding, not an absent
   prerequisite).** The three published items consumed by
   `lem-the-local-intersection-sign-of-the-graph-and-diagonal` —
   `def-local-oriented-intersection-sign`, `def-oriented-intersection-number`,
   `thm-intersection-number-under-factor-interchange`, all homed on the
   published page `oriented-and-mod-two-intersection-numbers` (a declared
   `requires` page) — currently fail depcheck's hard rule. Evidence:
   `node tools/depcheck.mjs --items-file <those three ids>` returns exit 1 with
   `[published-unaudited] … status published but neither verification.audited
   nor verification.verified is set; no local repair receipt` for each of the
   three. Step 1 flagged the same debt (batch notes §7) with the repair strategy
   "add the missing audit/verification receipt through the owner's
   published-repair process", and the canonical
   `research/published-consumer-supplier-ledger.md` currently has no row for
   them. Recommended owner action: route the three through the published-repair
   audit process before the Step-3b repo-wide depcheck gate; no statement or
   proof change is implied by this finding.
2. **Declared-but-unconsumed prerequisite (batch notes §2.2).** After the
   double-cover substitution, `local-coefficients-twisted-homology-and-duality`
   is declared in `requires` but consumed by no item of this batch. The
   plan-faithful declaration was retained; the owner may keep it or record it
   as a route-annotation. No scaffold addition is requested.

## Uncertainty statement

I verified inventory, page identity, dependency resolution and availability,
source locators and content, the in-run consumer/supplier interfaces, and the
B-leaf shape. I read the complete DT-14 design section, all 30 scaffold
statements and strategies, the full coverage file, the batch notes, and the
load-bearing source passages listed above; I did not re-derive the 30 proof
strategies and did not audit the proofs of the 82 published or 13 in-run
suppliers (Step 3b/Step 5 work). The Wong drop limits that source to a
single non-gated reading, mitigated by the duplicated coverage in the stamped
treatments. Apart from the three missing audit receipts and the two interface
notes above, I found no omission and no unresolved dependency, so I name no
omission and propose no merger or enrichment.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and
examples cover the design's full DT-14 subject (local fixed-point index and its
determinant formula, splitting, geometric and algebraic Lefschetz numbers,
Lefschetz–Hopf in the orientable and nonorientable cases, homotopy invariance,
`L(id)=χ`, the Lefschetz fixed point theorem, the Poincaré–Hopf recovery, and
the five companion examples), the additions are source-backed prerequisites of
designed claims, the sources cover every clause at the promised locators, and
the pair's prerequisite closure and in-run interfaces are intact. Step 3b may
author against this scope; the published-repair routing in finding 1 is an
owner action outside this review.
