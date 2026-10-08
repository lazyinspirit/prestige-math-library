# Step 3a scope review — `weak-order-inversions-and-lattice-operations`

- Run: `frontier-42-coxeter-32`; role alpha; label
  `step3a-pair-weak-order-inversions-and-lattice-operations-749fbf8d190993eb`.
- Pair: A `weak-order-inversions-and-lattice-operations` / B
  `weak-order-inversions-and-lattice-operations-examples` (batch 23, orders
  1762 / 1763, category `coxeter-groups`, design label CG-18, companion
  pointers in both directions). Owned pair only; no scaffold, manifest, item,
  coverage, batch file or owner record was edited. Reviewed 2026-10-07.
- Decision: **sufficient**. All four CG-18 contracts are present with their
  designed claims and roles; the two documented local additions (prefix
  lemma, full-descent lemma) and the theorem's documented strengthening
  (BB Lemma 3.2.3 on joins of `J ⊆ S`) are each consumed by this page or by
  named in-run consumers; the B page delivers exactly the three designed
  tasks and is a dependency leaf. Three fetched sources cover the promised
  claims at the cited locators, re-verified today in the full texts. No
  merger or enrichment is required, and no unmet prerequisite was confirmed.

## Evidence read

- Prose design: `research/plan-coxeter-groups-track.md` §CG-18 (L434–448;
  requires L436; four A contracts L442–445; B companion L447). Native prose:
  `library/coxeter-groups/weak-order-inversions-and-lattice-operations.md`
  (27 lines) and `…-examples.md` (13 lines), both `status: draft` scaffolds.
- Manifests: `research/frontier-42-coxeter-32-batch-23.pages.json` (6 A + 3 B
  items; all statements and strategies read),
  `research/frontier-42-coxeter-32-batch-23.coverage.json` (1 page, 3 sources,
  36 rows), `…-batch-23.notes.md` (route decisions, dependency verification,
  reading limits), `…-batch-23.cross-batch-dependencies.json` (50 rows: 48
  item + 2 page), `research/plan-spec.json` entries 1762/1763 (empty item
  arrays, no design conflict), `…-scope-ledger.json` (pair owed, batch 23),
  `…-owner-scope.json` (this pair among the selected 30),
  `research/owner-publication-2026-10-07.json` (draft scaffolds retained;
  no math review claimed). No step-3a receipt for this page existed before
  this review.
- Sources re-read today from the fetched full texts: Björner–Brenti,
  *Combinatorics of Coxeter Groups* (author-hosted PDF, 4 320 702 bytes):
  §3.1–§3.2 through Lemma 3.2.3 — Prop. 3.1.2(ii)–(vi), Prop. 3.1.3 with
  proof, Cor. 3.1.4, Prop. 3.1.6 with proof, Thm. 3.2.1 with proof, the
  paragraph after it on bounded joins and the finite-lattice case, Lemma
  3.2.3 with proof, Figures 3.1 and 3.2 (printed pp. 66–72);
  Stembridge, *On the fully commutative elements…*: §1.3 (weak order as the
  transitive closure of the covers `w < ws`, the equivalence with reduced
  multiplication, the left order and `w ↦ w⁻¹`, Prop. 1.3 with proof);
  Reading–Speyer, *Cambrian fans* (arXiv:math/0606201v2): §2 (inversion
  sets `I(w) = {t : ℓ(tw) < ℓ(w)}`, uniqueness, the containment-induced
  weak order, the cover and prefix equivalences, and "the weak order is
  known to be a lattice when `W` is finite").
- Consumers (role check): plan L512 (CG-24 heaps) and L527 (CG-26 sortable)
  require this page; item-level users in the run are
  `thm-cg-parabolic-growth-factorization-and-rationality` (CG-20, uses the
  full-descent lemma), `thm-cg-fully-commutative-weak-intervals-are-
  distributive` with its two examples (CG-24), eight items of CG-26, and
  four items of CG-32 (`sortable-projections-and-finite-cambrian-lattices`,
  including `thm-cg-sortable-meet-join-closure-and-cambrian-quotient` and
  `def-cg-recursive-sortable-projection-and-cambrian-congruence`, which use
  the definition, the graded lemma, the prefix lemma and the theorem). All
  consumers are later batches; no B item is consumed anywhere.

## Inventory against the design, and the boundary

- A = 6 items. The four design contracts are present with their designed
  claims: `def-cg-left-right-weak-order-and-descents` (right/left orders by
  length-additive factorization; descent sets; intervals, covers, bounded
  subsets; meet/join by universal bound properties, with the explicit
  abstention clause (4)); `lem-cg-weak-order-is-a-graded-partial-order`
  (partial orders, covers `v = us`, finite graded intervals, the correctly
  oriented criterion `u ≤_R v ⟺ N(u⁻¹) ⊆ N(v⁻¹)` with `|N(w)| = ℓ(w)`,
  and the descent/root dictionary); `lem-cg-bounded-weak-order-join-
  construction` (binary meets, meets of nonempty subsets, joins of bounded
  subsets as meets of upper bounds); `thm-cg-weak-order-meet-semilattice-
  and-finite-lattice` (complete meet-semilattice, bounded joins, finite
  lattices with `w₀` and the empty-set conventions, the parabolic-join
  criterion of BB Lemma 3.2.3, and the infinite-dihedral obstruction).
  Two additions are documented as consumed: `lem-cg-weak-order-prefix-
  property-and-left-translation` (length identity, prefix property, left
  translation BB 3.1.2(vi), interval translation BB 3.1.6) is used by the
  graded lemma, the join lemma, both B computations and CG-24/CG-26/CG-32
  items; `lem-cg-full-descent-element-characterizes-finite-type` (root-
  theoretic route, avoiding an undeclared Bruhat dependency) is used by the
  theorem and by CG-20. The definition's claim of uniqueness of meets and
  joins cites antisymmetry from the graded lemma; the definition's
  `justified_by` records that designed justification.
- B = 3 items, exactly the design's three tasks: `ex-cg-s3-weak-order-meets-
  and-joins` (complete meet/join table of the `A₂` hexagon, the left/right
  asymmetry `s ≤_R st` but `s ≰_L st`, all six sets `N(w⁻¹)`, and the
  criterion on all 36 pairs); `ex-cg-infinite-dihedral-bounded-interval-
  and-missing-join` (unique alternating reduced expressions, lower intervals
  are chains, `{s,t}` incomparable and without an upper bound, exhibiting
  that boundedness cannot be dropped); `cex-cg-inversion-sets-do-not-
  compute-meets-and-joins` (the `A₂` union and intersection failures, plus
  the corrected containment formulation). The B page is a dependency leaf.
- Subject covered: both weak orders and their inversion isomorphism;
  descent/root dictionary; gradedness and cover description; the inversion-
  set criterion; meets of arbitrary nonempty subsets; joins exactly of
  bounded subsets; finite Coxeter groups and finite parabolics as lattices;
  the parabolic-join criterion; and the infinite-dihedral failure. The
  deliberate boundary (antiautomorphisms and the ortholattice, interval-
  growth corollaries, BB 3.2.4–3.2.7, Matsumoto/heaps/Cambrian material)
  is recorded in the coverage with reasons and, where the material lives
  elsewhere in this run (batches 2, 5, 12, 16, 28, 32), with the destination
  named. The coverage warning `coverage-low-yield` (13/36) is expected for
  a page whose sources are shared with sibling pairs.

## Prerequisites

- All 50 cross-batch edges (48 item rows over the 9 items, 2 page rows for
  the A page's `requires`) resolve. In-run suppliers live in batches 2
  (`def-hh-coxeter-matrix-word-group-and-length`, `thm-hh-parabolic-minimal-
  representatives-and-length-additivity`, `thm-hh-coxeter-exchange-
  deletion-and-faithfulness`, `lem-hh-dihedral-root-recurrence-and-root-
  sign`), 4 (`def-cg-real-coxeter-form-and-reflection`, `def-cg-canonical-
  reflection-homomorphism`), 7 (`def-cg-geometric-inversion-set`, `thm-cg-
  root-inversion-formulas-and-strong-exchange`, `thm-cg-root-length-
  criterion-and-faithfulness`, `thm-cg-root-sign-and-simple-reflection-
  positivity`), 10 (`def-cg-parabolic-quotient-and-two-sided-minima`,
  `thm-cg-parabolic-intersections-and-coset-factorization`) and 17
  (`thm-cg-finite-parabolic-longest-element-and-opposition`); all are
  present in the current run manifests and earlier in the run's order. Four
  order-theoretic suppliers are published items (`status: published`):
  `def-partial-order`, `def-poset-interval-and-finiteness-conditions`,
  `def-graded-poset-and-rank`, `def-lattice-distributive-lattice-and-order-
  ideal`; the two page-level published `requires` are
  `chains-antichains-sperner-and-dilworth` and
  `incidence-algebras-and-mobius-inversion` (both `status: published`).
- Clause-level checks made today in the current supplier statements: batch-2
  HH-11 (2) support/intrinsic parabolics, (3) `ℓ(w) = ℓ(w⁻¹)` and both
  length-additive transversal factorizations, (4) the type-`A` identification
  `W ≅ Sₙ` with `ℓ = inv`; exchange/deletion (1)–(3); the dihedral lemma
  (2), (3) with the `m = ∞` case and (4) "`st` has order exactly `m`,
  infinite when `m = ∞`"; batch-4 canonical reflection homomorphism (1)–(3);
  batch-7 geometric inversion set (2) (the two right-multiplication
  recursions), root-inversion formulas (1)–(2) (root–reflection dictionary,
  `|N(w)| = ℓ(w)`, prefix/suffix-root lists), root-sign (2) (`Φ = Φ₊ ⊔ Φ₋`,
  `Φ₋ = −Φ₊`, `V₊`), root-length criterion (used for faithfulness); batch-10
  parabolic quotient (2) descent sets and factorizations, parabolic
  intersections (2) `Φ_I = Φ ∩ V_I`; batch-17 longest elements (1)(i)–(v)
  and (2). Every `[[…]]` used in the 9 statements and strategies resolves
  and is declared in `deps`/`justified_by` (own scan: 0 unresolved, 0
  undeclared). The batch notes' flagged finite-poset caveat (`def-graded-
  poset-and-rank` applies to the finite intervals `[u,v]_R`, whose finiteness
  is proved by the graded lemma) is consistent with the published item's
  hypotheses.
- **No confirmed unmet prerequisite**: no claim used by these items is
  absent from both the published library and the current 32-batch scaffold.
  Residual uncertainty is limited to the fact that the in-run suppliers are
  themselves scaffolds; the clauses above were checked at statement level
  only, and their proofs are Step-3b authoring work.

## Independent finite re-check (own scripts, `/tmp`, 2026-10-07)

- `A₂`/`S₃` right weak order: the cover hexagon and the complete meet/join
  table of `ex-cg-s3-weak-order-meets-and-joins` reproduced exactly,
  including `st ∧ ts = 1`, `s ∨ t = w₀` and the empty-set conventions; the
  asymmetry `s ≤_R st` true but `s ≰_L st`, `t ≤_L st` true but `t ≰_R st`.
- The six sets `N(w⁻¹)` (∅, {α_s}, {α_t}, {α_s, α_s+α_t}, {α_t, α_s+α_t},
  Φ₊ for `1, s, t, st, ts, w₀`) reproduced with the root action of `A₂`
  under the run's left-action convention; the criterion
  `N(u⁻¹) ⊆ N(v⁻¹)` against the definition-based right order on all 36
  pairs gave 0 mismatches, and similarly `N(u) ⊆ N(v)` for `≤_L`.
- Both failures of the refuted equality in `cex-cg-inversion-sets-do-not-
  compute-meets-and-joins` reproduced (`N(w₀⁻¹) = Φ₊ ⊋ {α_s, α_t}`, and
  `∅ = N(1) ⊊ {α_s+α_t}`); the dihedral reasoning (unique alternating
  reduced words, `st` of infinite order, no common upper bound of `s,t`)
  follows from the batch-2 clause (4) and was checked by hand up to length
  seven.

## Minor record notes (non-blocking, not scope-affecting)

1. The counterexample item's BB locator says "Corollary 3.1.4 and the
   discussion following it, printed p. 68 (the maximal lower bound is not
   computed by intersecting inversion sets)". I could not locate such a
   remark in BB §3.1–§3.2: after Cor. 3.1.4 the text passes to Prop. 3.1.5,
   Prop. 3.1.6 and Cors. 3.1.7–3.1.8, and §3.2 proves the meet by a
   maximal-length common lower bound without discussing inversion-set
   intersections. The mathematical content of the item is correct (the
   failure follows immediately from Prop. 3.1.3 plus the `A₂` computation,
   and the item's Reading–Speyer row correctly describes the criterion as
   containment); the fix at 3b is a locator tidy, not a claim change.
2. The coverage file carries rows for the A page only (harvest convention,
   as in batch 10); the B items' sources (BB Figures 3.1/3.2, Stembridge
   §1.3) lie inside the A-page read ranges, so this is not a coverage gap.
   The B locator "Figure 3.2 … `S₃` as a subposet of the weak order of
   `S₄`" is accurate (the six-element hexagon is read off Figure 3.2,
   printed p. 67; Figure 3.1, printed p. 66, covers `I₂(4)` and `I₂(∞)`).
3. The definition item's `justified_by` names the later graded lemma — the
   designed definition-justification encoding (also used for the sibling
   CG-07 pair); the whole-run dependency-level check reported no cycle
   naming any batch-23 item.

## Uncertainty, honestly stated

- I re-read the load-bearing arguments of all three sources today (BB
  §3.1–§3.2 through Lemma 3.2.3, Stembridge §1.3, Reading–Speyer §2) and
  reproduced the finite content of the B page independently; I did not
  re-read the whole of the three books/papers, so a further relevant
  statement elsewhere in their unread ranges is not excluded (the coverage
  records the reading limits).
- This is a scope decision, not an item approval or a proof check. Every
  batch-23 item is still a scaffold awaiting Step-3b authoring; nothing here
  certifies a proof, and the statement-level supplier checks do not
  validate the supplier proofs.

## Next action

Scope receipt recorded with `tools/step3-decisions.mjs record-scope`
(decision `sufficient`) as
`research/frontier-42-coxeter-32-step3a-review-weak-order-inversions-and-lattice-operations.json`.
Owner: no scope amendment, merge or enrichment is needed for this pair;
Step-3b authoring may proceed on the current scaffold, with the locator tidy
of note 1 as an optional 3b edit. Report path:
`research/frontier-42-coxeter-32-step3a-pair-weak-order-inversions-and-lattice-operations.md`.
