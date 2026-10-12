# Batch 35 — `compact-kahler-hodge-foundations` (order 1802) / `compact-kahler-hodge-foundations-examples` (order 1808)

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair, category
`complex-analysis`. Owner direction
(`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`) read first;
it requires the appended 21 prerequisite pairs to live in this same native run and preserves every
original claim and source obligation. Canonical plan: `research/plan-spec.json` orders 1802/1808 with
the 21-entry `requires` list reproduced verbatim in the manifest. Design: the "Compact Kahler Hodge
Foundations" section of `research/plan-klr-foundation-prerequisites.md`, its 13 carrier drafts under
`research/frontier-44-special-representation-examples-28-klr-foundation-hodge-drafts/`, and the
author packet `research/frontier-44-special-representation-examples-28-klr-foundation-hodge-packet.json`.

Scaffold written: **6 A items + 1 B item = 7**, all recorded `ready`. In-run dependency levels
2 (conventions), 8 (rational comparison), 8 (top integral), 3 (pointwise Lefschetz/Weil),
8 (Kähler commutators), 10 (Hodge theorem), 11 (B example) — computed by
`tools/item-dependency-levels.mjs`. No item was escalated, no page split was needed, both pages are
far below the 100-item cap. Only this batch's manifest, coverage, notes, cross-batch input and Step-1
readiness records were written; no published content, shared plan, engine state or verdict was edited.

## Design / plan comparison (every conflict recorded)

1. **Task locator drift, not a scope conflict.** The batch task cites the design at
   `research/plan-klr-foundation-prerequisites.md` **L365**. That line falls inside the preceding
   "Compact Laplace Type Operators And Hodge Representatives" section; the "Compact Kahler Hodge
   Foundations" section of the current 1523-line file begins at line **480**. The section was located
   by title and read in full (lines 480-536), together with the packet and every linked carrier draft.
2. **The plan controls.** The plan-spec inventory (6 A items, 1 B item, orders 1802/1808, the same
   `requires` list) matches the design's items and declared inputs item for item; no claim, source or
   route was dropped, narrowed or weakened. The other drafts in the same directory
   (`thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz`,
   `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties`,
   `lem-smooth-projective-analytification-has-rational-kahler-polarization`,
   `lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures`,
   `thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties`,
   `ex-primitive-one-forms-on-a-hermitian-two-plane`) are homed by the plan on the
   `projective-hodge-polarization-foundations` pair (batch 39) and were left untouched.

## Dependency corrections against the design's declared inputs

All added targets resolve inside the declared `requires` closure (`validate-plan --run` exit 0). Each
change repairs a missing or inadequate declaration; none changes a claim.

- **Conventions definition.** The carried contract fixed only `L`, `Λ`, `ε(k)`, the complex star and the
  Hodge-structure notions, but the later statements use complex-valued forms, the bigrading, `d=∂+∂̄`,
  the formal adjoints `∂*,∂̄*,d*`, `Λ` and the three Laplacians. Declared now:
  `def-complex-manifolds-and-holomorphic-vector-bundles` and
  `lem-formal-adjoints-of-differential-operators-exist-and-are-unique` (in-run batch 31, levels 0/1),
  `def-riemannian-hodge-star`, `def-smooth-differential-k-form`,
  `prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles` (published). The
  statement was extended accordingly (orientations and volume normalization, the `n=0` case, operator
  conventions). In-run level 2.
- **Pointwise Lefschetz/Weil lemma.** Substituted `cor-hodge-star-is-an-isometry-and-squares-to-a-sign`
  (the pointwise `⋆²` sign on `Λ^k V`) for the design's bundle-level `prop-hodge-star-squared-sign`,
  and added `def-hodge-star-on-an-oriented-inner-product-space` for the star notation. Same
  mathematical content at the interface the proof actually uses; the source caveat about Schnell's
  class-17 two-plane table typos is carried in the strategy and the signs are re-derived.
- **Kähler commutators.** The design declared `thm-general-stokes-theorem` (which assumes AC_ω) with no
  choice principle in `deps`; added `def-axiom-of-choice` and
  `thm-choice-implies-dependent-implies-countable-choice`, and added
  `lem-formal-adjoints-of-differential-operators-exist-and-are-unique` for the existence/uniqueness of
  `∂*,∂̄*` used in the statement. In-run level 8 (the level-7 batch-2 implication item is in-run).
- **Rational comparison and top integral.** Added
  `thm-choice-implies-dependent-implies-countable-choice` for the AC_ω-assuming suppliers
  (finite-CW model, de Rham theorem, smooth-singular comparison, partitions of unity). The design's
  `def-axiom-of-choice` was kept on both.
- **Hodge theorem.** Added `def-axiom-of-choice` and
  `thm-choice-implies-dependent-implies-countable-choice` (the Sobolev, Dolbeault, acyclicity and
  sheaf-cohomology suppliers assume AC, the acyclic-resolution theorem assumes DC), and
  `def-sheaf-cohomology-derived-global-sections` because the statement's `H^q(X,Ω_X^p)` is that derived
  functor. `Ω_X^p` is now defined inline as the kernel sheaf of `∂̄` on `A^{p,0}`.
- **B example.** Added `def-axiom-of-choice` and stated AC, matching the run precedent
  (`ex-compact-flat-torus-hodge-kernel-from-energy-and-coordinates` in batch 31): the verification
  consumes the AC-stated Hodge theorem and rational-comparison lemma even though the point computations
  are choice-free. Statement and proof are tagged `ai-generated` with `generation.role: example`: the
  exact one-point computation is not a heading of any fetched source, it is a direct instantiation of
  the fetched definitions (the packet's `literature-derived` tag was not reproducible verbatim).

## AC bookkeeping

Full AC is stated on the four items whose arguments consume it (rational comparison, top integral,
Kähler commutators, Hodge theorem) and on the B example; each declares `def-axiom-of-choice` and, where
only AC_ω or DC is consumed, `thm-choice-implies-dependent-implies-countable-choice`. The pointwise
Lefschetz/Weil lemma is choice-free (finite-dimensional linear algebra) and says so. The conventions
definition keeps the design's page-wide AC sentence and its `def-axiom-of-choice` declaration because
the plan and packet declare it; its `axiom_use` records precisely that the definitional content is
choice-free and that the declaration carries the page convention. If Step-3/5 reviewers prefer strict
SCHEMA minimality they may drop that sentence and dependency without affecting any item: every
AC-using item declares its own assumption, and the residuals are recorded below. No incompatible-axiom
branch is created; no Foundations item is reached and `deferred-set-theory-beyond-choice` is not on any
path.

## Source work (full text fetched, stamped and inspected)

`source-fetch-check --coverage … --stamp`: **9/9 source instances fetch-verified (9 newly stamped)**;
check mode `9/9 source(s) fetch-verified`, `9/9 resolved (0 documented drops)`. Six distinct sources;
every stamped hash matches the earlier author's `…-klr-foundation-hodge-sources/retrieval.json` for
Schnell classes 16-18, Demailly and Deligne, so the local full-text extracts read by this dispatch
correspond to exactly these bytes.

- **Schnell, Complex Manifolds MAT 545, Class 16** (8 pp.; bytes 611347, sha256_16 `8727bfa93cff39ab`):
  Lemma 16.1, Propositions 16.2/16.4, Definition 16.3; complete class inspected.
- **Schnell, Class 17** (4 pp.; 495589, `96158c7e4223ba2d`): Lefschetz decomposition, Lemma 17.1,
  Proposition 17.3 (Weil's identity with its two-plane proof), the Kähler identities proof.
- **Schnell, Class 18** (6 pp.; 820132, `6d47f864e9b01892`): Corollaries 18.1-18.4, Theorem 18.5
  (18.6) with proof, the sheaf `Ω^p_M`, Corollary 18.7, Proposition 18.12, cohomological Lefschetz.
- **Demailly, Complex Analytic and Differential Geometry** (book, 455 pp.; 3557990,
  `d7c7654a7417e832`): Chapter VI §5.1-5.3 ((5.1)-(5.17)) and §6.1 ((6.3)-(6.7)); §6.2 read for
  context and disposed out of scope.
- **Deligne, Théorie de Hodge II** (54 pp.; 5404038, `748edefb44fded8a`): (2.1.10)-(2.1.17) printed
  pp. 26-27, the compact-Kähler hypercohomology spectral sequence (2.2.1) printed p. 27, and
  (4.2.2)-(4.2.5) with Lemma (4.2.3) printed p. 44.
- **Hatcher, Algebraic Topology** (book, 560 pp.; 8121741, `bebb3032bf9021b9`): §3.1 printed
  pp. 190-197 (Lemma 3.1, Theorem 3.2, Corollaries 3.3-3.4, Theorem 3.5) and §3.3 printed pp. 241-243
  (Theorem 3.26, fundamental class). Extracted and inspected locally with `mutool`.

The stamp tool's page counter reports 16/8/12 pages for Schnell 16/17/18 where `mutool info` reports
8/4/6 for the identical hashes; the locators state the document's actual page counts. Coverage output:
**30 harvested results, 0 errors, 0 warnings**, every heading disposed. The only declines are on page
A: the `∂∂̄`-lemma, the Betti-number applications and the torsion corrections of Demailly §6.2
(`out-of-scope`, reasons given), and the cohomological Lefschetz decomposition (`deferred` to
`projective-hodge-polarization-foundations`) together with Deligne (4.2.2)-(4.2.5) (`deferred` to
`geometric-fixed-parts-and-gauss-manin-semisimplicity`). Both destinations are plan-spec pages.

## Cross-batch dependencies

`research/frontier-44-special-representation-examples-28-batch-35.cross-batch-dependencies.json`
has **9 reviewed rows**, one per declared cross-batch edge induced by this batch, all `verified` at
scaffold level: the page edge to `compact-laplace-type-operators-and-hodge-representatives` (batch 31);
item edges to `def-complex-manifolds-and-holomorphic-vector-bundles`,
`lem-formal-adjoints-of-differential-operators-exist-and-are-unique` and
`thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition` (batch 31); and
item edges from four of this batch's items to the published batch-2 item
`thm-choice-implies-dependent-implies-countable-choice`. The consumed contract of the Sobolev supplier
was read from the batch-31 manifest and is recorded verbatim in the row: its transitive closure
(`thm-elliptic-…` and the Sobolev/Rellich/Lax-Milgram items) is the principal residual risk of this
pair and is owed to Steps 3-6. The refreshed unified ledger
(`frontier-dependency-ledger.mjs refresh --run …`) lists batch 35 among `reviewed_batches`; every
consumer-35 edge carries a review row. Supplier-side expectation for the Step-8 reconciler: pages
`logarithmic-hodge-complexes-and-smooth-open-weights` (batch 38),
`projective-hodge-polarization-foundations` and its examples page (batch 39),
`geometric-fixed-parts-and-gauss-manin-semisimplicity` (batch 42) and
`proper-hyperresolutions-and-mixed-hodge-restriction-images` (batch 46) declare this page in
`requires`; their own writers own those rows.

## Published defects

None found. The two published `deps` of the conventions definition
(`def-complex-manifolds-and-holomorphic-vector-bundles`, `lem-formal-adjoints-…`) are in-run batch-31
scaffolds, not published. All other suppliers used here are published item files that were read on
disk and whose statements, hypotheses, directions and conventions match the uses
(`def-bigraded-complex-differential-forms`, `thm-d-dbar-decomposition-and-identities`,
`thm-dolbeault-lemma-polydisc`, `thm-hodge-star-exists-uniquely-…`,
`cor-hodge-star-is-an-isometry-and-squares-to-a-sign`,
`def-hodge-star-on-an-oriented-inner-product-space`, `def-riemannian-hodge-star`,
`prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles`,
`thm-general-stokes-theorem`, `thm-euclidean-inverse-function-theorem`,
`thm-holomorphic-inverse-function-theorem-several-variables`, `thm-morse-sard-for-euclidean-maps`,
`thm-excision-for-singular-homology`, `thm-monotone-convergence-for-the-integral`,
`thm-change-of-variables-for-oriented-manifold-diffeomorphisms`,
`thm-smooth-partitions-of-unity-exist-on-manifolds`,
`thm-smooth-singular-chains-compute-singular-homology`,
`def-fundamental-class-of-a-compact-oriented-manifold`,
`lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice`,
`thm-cellular-homology-computes-singular-homology`,
`thm-universal-coefficient-theorem-for-cohomology-over-a-pid`, `thm-de-rham-theorem`,
`def-sheaf-cohomology-derived-global-sections`, `thm-smooth-function-module-sheaves-are-acyclic`,
`thm-acyclic-resolution-theorem-for-right-derived-functors`,
`thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`,
`thm-choice-implies-dependent-implies-countable-choice`, `def-axiom-of-choice`). No repair was needed
and no defect row is entered for the canonical ledger. Source-level typographical slips in Schnell
class 17 (a duplicated two-plane table entry and a `k≤0` range) are recorded on the affected item and
were not carried into any claim.

## Findings belonging to other batches (reported, not repaired here)

- The residual `item-dependency-levels` and `step1-decisions` work lists consist of
  `empty scaffold inventory` rows for sibling batches whose scaffolding is still pending
  (11, 24, 25, 37-49); none involves a batch-35 item.
- The unified ledger remains `--require-reviewed`-incomplete only through those same pending batches
  (11, 24, 25, 37-49); batch 35 is reviewed.

## Checks (actual results at this writing)

- `node tools/manifest-deps.mjs research/…-batch-35.pages.json` — `7 item(s), 0 normalized, 0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — no label, shape or cycle error for any batch-35 item; remaining findings are `empty scaffold
  inventory` for pending sibling batches. Labels 2/8/8/3/8/10/11 equal the computed levels.
- `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` —
  `639 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/…-batch-35.coverage.json --require-destination` —
  `2 page(s), 30 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/…-batch-35.coverage.json --stamp` —
  `9/9 source(s) fetch-verified (9 newly stamped)`; check mode `9/9 source(s) fetch-verified`,
  `9/9 source(s) resolved (0 documented drops)`.
- `node tools/url-sweep.mjs --coverage research/…-batch-35.coverage.json --out /tmp/url-liveness-35.json --recover --fail-on-dead`
  — `6/6 live; 0 failed … 0 blocking`, exit 0 (scoped to this batch; output kept outside the run so
  the engine's own sweep is not pre-empted).
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  — exit 0, zero `ERROR` lines; the only batch-35 lines are pre-existing plan-level
  `redundant-prereq` advisories (`cw-complexes-and-cellular-homology` and `derived-functors` are
  reached through several declared prerequisites), preserved unchanged and recorded for the Step-4
  reconciler.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — `refreshed and deduplicated`; batch 35 has 9/9 reviewed consumer edges.
- External-reference boundary: at Step 1 the item-mode validators (`extcheck`, `fwdcheck`, `depcheck`,
  `precheck`, `rendercheck`) deliberately cannot resolve any manifest ID, because item files are
  authored only at Step 3; the 1-scaffold gate therefore runs `content-policy --manifest-only`, whose
  retired-external-record check passed above. A direct grep confirms no batch-35 manifest item declares
  `proved_here`, `external_refs`, `external_dependency`, `forward_refs` or `justified_by`.
- `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28` — after
  recording: 639 items, 638 ready, `closed: false`; the work list contains **zero** batch-35 rows
  (the remainder is the owner-escalated KLR item and the pending empty batches).

## Step-1 decisions

Recorded `ready`, one at a time in prerequisite order, with the examined dependency IDs and the
evidence above: `def-compact-kahler-manifold-and-hodge-polarization-conventions`;
`lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity`;
`lem-kahler-commutators-and-laplacian-type-preservation`;
`lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds`;
`lem-de-rham-top-integral-is-fundamental-class-evaluation`;
`thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms`;
`ex-hodge-and-polarization-of-a-point`. Owner/operator reconciliation and the engine's Step-1 gate
follow; a readiness record is not independent mathematical approval (Step 3 provides that review).

## Residual risks for the Step-3 author

- **In-run analytic supplier.** `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition`
  (batch 31) is scaffolded, not authored; its exact contract and transitive closure must be rechecked
  before the Hodge theorem is written, and any interface change reopens this consumer.
- **Normalization caveat.** The commutator strategy computes in Demailly's normalization
  (`ω=iΣdz∧dz̄`, `|dz|=1`) while the conventions item fixes `ω=Σe∧f` with `e,f` orthonormal; the four
  identities are involution-invariant under constant metric rescaling but the two normalizations must
  not be mixed inside one computation.
- **Degeneration argument.** The `E_1` degeneration must be written as the finite dimension count of
  the strategy (subquotient dimensions versus the abutment), not asserted from a cited degeneration
  theorem.
- **Star signs.** Schnell class 17's two-plane table has typographical slips; the signs of the Weil
  identity and the primitive-star formula are to be re-derived from the definition's star
  characterization.
- **AC minimality option.** See the AC-bookkeeping paragraph; dropping the conventions item's AC
  sentence and `def-axiom-of-choice` is safe if reviewers prefer SCHEMA-minimal declarations.

## Step 3b reconciliation notes (pair `compact-kahler-hodge-foundations`)

- **Batch-31 suppliers authored.** `def-complex-manifolds-and-holomorphic-vector-bundles`,
  `lem-formal-adjoints-of-differential-operators-exist-and-are-unique` and
  `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition`
  now exist on disk (`status: draft`); their statements were read and matched to the
  consuming facts/steps of items 1, 4 and 6, so those consumers' decisions were
  recorded as `repaired` rather than escalated.
- **Item 5 dependency substitution (reported for Step 4).** The plan's declared input
  `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` is unused at the proof
  interface: the field case actually applied is the published
  `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`. Added suppliers:
  `cor-homotopic-maps-induce-the-same-map-on-singular-homology`,
  `def-oriented-cellular-chain-group`, `def-cellular-homology`,
  `def-singular-simplex-and-singular-chain-group-with-coefficients`,
  `def-singular-cochain-complex-with-coefficients`, `def-singular-cohomology-with-coefficients`,
  `thm-associativity-of-balanced-tensor-products`,
  `def-singular-cup-product-on-cochains`,
  `prop-cup-product-is-natural-unital-and-associative`,
  `def-compact-kahler-manifold-and-hodge-polarization-conventions`.
  A finite-dimensional dual-basis argument is proven inline (the scaffold's
  `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism` sits on
  `morita-bicategories-and-projective-generators`, outside the page's `requires`
  closure, so it was dropped rather than adding a later page as a prerequisite).
- **Item 6 added suppliers.** Laplace-type/principal-symbol definition and the
  formal-adjoint lemma (batch 31), `thm-de-rham-theorem`, the spectral-sequence
  pages/abutment definitions and the next-page theorem, the pullback items,
  `def-complex-manifolds-and-holomorphic-vector-bundles` and `def-de-rham-cohomology`.
- **Numerical/independent checks.** The Kähler identities, `Delta_d = 2 Delta_partial
  = 2 Delta_dbar`, the mixed anticommutators, star commutation of `Delta_d` and the
  normal-coordinate flat identities were re-verified for `n=1,2,3` by the exact
  flat-model script `/tmp/ckh2/verify_kahler_flat.py`.
