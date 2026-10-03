# frontier-38-owner-30 — batch 13 scaffold notes

## Scope and authority

- Owned pair: `smooth-cobordism-relations-groups-and-rings` (A, order 545) and
  `smooth-cobordism-relations-groups-and-rings-examples` (B, order 546),
  differential topology; design section DT-15 of
  `research/plan-differential-topology-track.md` (L887 ff.). The batch manifest
  carries 19 A items and five B items; all 24 have current Step-1 `ready`
  records written in dependency order (levels 0 to 9). A readiness record
  states that an item has a complete proof strategy and adequate met
  prerequisites; it is not independent mathematical approval.
- `research/frontier-38-owner-30-owner-authoring-direction.md` exists and was
  read before construction. It is binding; it preserves this pair's scope and
  adds no pair-specific instruction for 545/546, so the design route is used
  together with the current plan, and every conflict is recorded below.
- Read for this scaffold: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
  `briefs/beta-scaffold.md`, the DT-15 design section, `research/plan-spec.json`
  (orders 545/546), the coverage of the published supplier pages, and the
  owner direction. No published content, shared plan, engine state or verdict
  was edited. Writes are limited to the batch manifest, coverage, these notes,
  the batch cross-batch-dependency input (empty) and the 24 Step-1 readiness
  records.

## Design and plan reconciliation

- **Inventory.** The design's DT-15 lists 15 A items and five B items in a fixed
  order. The current plan's entries for these two pages carry empty `items`
  arrays, so the manifest adopts the design inventory verbatim in the design
  order and fills in statements, proof strategies, dependencies and sources.
  Nothing was dropped or weakened.
- **Four local prerequisites were added before their consumers** (the design
  route cannot be stated without them, and no published item supplies them):
  `def-stiefel-whitney-number-of-a-closed-manifold` and
  `def-pontryagin-number-of-a-closed-oriented-manifold` (the design's items 13
  and 14 use these numbers but no published item defines them), plus
  `lem-fundamental-class-of-a-boundary-pushes-forward-to-zero` and
  `lem-boundary-stable-tangent-splits-off-a-trivial-line` (the two geometric
  facts the design assigns to the proofs of items 13–14 and also needed by the
  zero-dimensional computation). The four are inserted so that every consumer
  follows them; the relative order of the design's own items is unchanged.
- **Corner caveat on the design's product-boundary formula.** The design's item
  11 states
  `\partial(W\times V)=(\partial W)\times V\sqcup(-1)^{\dim W}W\times\partial V`
  without a hypothesis. The published
  `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary`
  proves exactly this only when at most one of the two boundaries is nonempty
  and explicitly excludes the corner case. The scaffolded lemma therefore
  states the corner-free case and records the exclusion; the ring
  well-definedness in the design's item 12 is proved with the corner-free
  glued bordism `(W_1\times M_2)\cup_{M_1'\times M_2}(M_1'\times W_2)` instead
  of a product-of-cobordisms with corners, so no corner-smoothing machinery is
  invented or assumed.
- **"Requires" conflict (plan controls).** The design's DT-15 paragraph names
  DT-11 (`oriented-and-mod-two-intersection-numbers`) "for intersection-based
  invariants". The plan's `requires` for order 545 omits it, and no item of
  this pair uses an intersection number, so the plan controls and no DT-11
  dependency is scaffolded. Recorded as a resolved conflict.
- **Sources.** The design cites F Lectures 1–2 (pp. 5–24), MS Ch. 17
  (pp. 199–204), W §§8.1–8.2 (pp. 237–247) and Ranicki Ch. 6
  (electronic pp. 109–125). All four were retrieved as full text and read; URL
  substitutions and failure history are below. The design's citation of MS
  Ch. 17 is extended to the pages actually needed (Section 4 pp. 50–54 for the
  Stiefel–Whitney numbers and Theorem 4.9, and Section 16 pp. 183–187 for the
  Pontryagin numbers and boundary vanishing), since the design's item 13
  ("boundary Stiefel–Whitney numbers vanish") is proved in MS Section 4 and
  the design's item 14 points at Section 16.

## Inventory, order and in-run dependency levels

A page (19 items, manifest order): 0 `def-unoriented-smooth-cobordism-of-closed-manifolds`;
1 `def-oriented-smooth-cobordism`; 2 `lem-cylinders-give-reflexivity-of-cobordism`;
2 `lem-reversing-a-cobordism-gives-symmetry`;
3 `lem-collar-gluing-and-corner-smoothing-give-transitivity`;
4 `thm-smooth-cobordism-is-an-equivalence-relation`;
5 `def-null-cobordant-closed-manifold`;
6 `def-unoriented-and-oriented-bordism-groups`;
7 `thm-disjoint-union-makes-bordism-classes-abelian-groups`;
0 `lem-fundamental-class-of-a-boundary-pushes-forward-to-zero`;
8 `prop-zero-dimensional-bordism-groups`;
0 `lem-product-boundary-formula-for-oriented-manifolds`;
8 `thm-cartesian-product-makes-bordism-a-graded-ring`;
0 `def-stiefel-whitney-number-of-a-closed-manifold`;
0 `def-pontryagin-number-of-a-closed-oriented-manifold`;
0 `lem-boundary-stable-tangent-splits-off-a-trivial-line`;
7 `prop-boundaries-have-zero-stiefel-whitney-numbers`;
7 `prop-oriented-boundaries-have-zero-pontryagin-numbers`;
7 `rem-bordism-groups-here-are-geometric-not-generalized-homology-constructions`.

B page (five items): 6 `ex-a-circle-is-the-boundary-of-a-disk`;
9 `ex-two-unoriented-points-bound-an-interval`;
9 `ex-signed-points-give-the-oriented-zero-bordism-invariant`;
8 `ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles`;
8 `cex-real-projective-two-space-is-not-unoriented-null-cobordant`.
All labels are recomputed from in-run `deps` only; published suppliers do not
raise a level. No cycle, no same-page forward edge, no published B-only
dependency target; every published `deps` target resolves to a file in
`items/`.

## Prerequisite and dependency verification

- The statements and proofs of every published supplier named in a scaffolded
  `deps` array were read, together with the in-batch items they feed. The
  published spine used here is: the smooth-manifold and boundary page
  (`def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary`,
  `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold`,
  `def-smooth-collar-of-a-manifold-boundary`, `thm-collar-neighborhood-theorem`,
  `def-induced-boundary-orientation`,
  `prop-boundary-orientation-is-independent-of-the-outward-vector-field`,
  `def-inward-outward-and-boundary-tangent-vectors`,
  `prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane`,
  `thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary`,
  `thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary`,
  `prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane`,
  `thm-the-double-has-a-well-defined-smooth-structure`,
  `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`,
  `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds`,
  `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary`);
  the algebraic-topology duality page (`def-fundamental-class-of-a-compact-oriented-manifold`,
  `def-relative-fundamental-class-and-boundary-orientation`,
  `thm-long-exact-sequence-of-a-pair-in-singular-homology`,
  `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`,
  `cor-poincare-duality-gives-a-nonsingular-cup-pairing`,
  `prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise`,
  `def-kronecker-evaluation-pairing`,
  `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`);
  the Stiefel–Whitney page (`def-stiefel-whitney-classes-from-the-projective-bundle-relation`,
  `thm-naturality-of-stiefel-whitney-classes`,
  `thm-whitney-sum-formula-for-stiefel-whitney-classes`,
  `thm-mod-two-real-projective-bundle-theorem`,
  `prop-first-stiefel-whitney-class-classifies-orientability`,
  `def-real-projective-bundle-and-tautological-line`,
  `def-tautological-degree-one-class-on-a-real-projective-bundle`);
  the Pontryagin page (`def-pontryagin-classes-by-complexification`,
  `thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes`);
  and the quotient/dual bundles of `smooth-vector-bundles-and-sections`
  (`def-restriction-of-a-vector-bundle`,
  `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles`,
  `def-quotient-vector-bundle-by-a-subbundle`).
- **Hypotheses, direction and axiom strength checked.** (i) The Stiefel–Whitney
  and Pontryagin class suppliers require an admissible base (paracompact
  Hausdorff CGWH of CW homotopy type) and assume AC; the number definitions
  and the two boundary-vanishing propositions therefore assume AC and identify
  its use as exactly the class construction, via the published
  `lem-second-countable-smooth-manifolds-have-cw-homotopy-type`, which
  certifies that every closed smooth manifold is an admissible base and that
  its smooth bundles are numerable. (ii) The stable tangent splitting uses a
  global inward normal field, which is published only under `AC_\omega`
  (`def-countable-choice`); that lemma therefore assumes `AC_\omega` and
  identifies the use. Items 13–14 assume AC, which implies `AC_\omega`.
  (iii) The boundary-pushforward lemma, the zero-dimensional computation, the
  relation and group laws, the ring theorem and the product-boundary lemma are
  choice-free: gluing uses the collars carried by the bordism data. No item
  reaches a Recorded-not-proved result and there is no Foundations path.
- **Boundary signs recomputed, not copied.** The oriented convention is fixed
  once (outward-normal-first, incoming face `-M_0`, outgoing face `M_1`) and
  used consistently in reflexivity, symmetry, transitivity, the group inverse
  `M\sqcup(-M)=\partial(M\times[0,1])`, the product formula sign
  `(-1)^{\dim W}`, and the transposition sign `(-1)^{mn}` for graded
  commutativity. The design's warning "recompute from outward-normal-first"
  is followed in the statements and strategies.
- **Zero-dimensional groups, choice-free route.** Instead of Freed's
  classification of compact one-manifolds, the scaffold proves the parity and
  signed-count invariants from the boundary-pushforward lemma together with
  the published zero-th homology computation, and proves completeness by
  explicit intervals and cylinders. This keeps the result choice-free and
  removes a dependency on an unbuilt classification theorem.
- **Counterexample route.** The counterexample is scaffolded with the refuted
  claim as its statement ("RP^2 is null-cobordant", i.e. not every closed
  surface bounds) and the disproof in its strategy, matching the `cex-`
  convention. The design asks for the nonvanishing Stiefel–Whitney
  number of `RP^2`. The scaffold uses `w_1^2[RP^2]=1`: `RP^2` is non-orientable
  (published smooth example), so `w_1(T RP^2)` is the nonzero class
  `x` in `H^1(RP^2;F_2)`; the projective-bundle theorem for the trivial rank-3
  bundle over a point gives `H^*(RP^2;F_2)=F_2[x]/(x^3)`; Poincaré duality over
  `F_2` makes the cup pairing `H^1\times H^1\to H^2` nonsingular, so
  `\langle x^2,[RP^2]\rangle=1`. This is the MS p.51 computation (`w_1(P^n)`
  and `w_1^n[P^n]` nonzero for even `n`) and avoids an Euler-sequence
  computation of the tangent bundle that no published item supplies.
- **Cross-page dependency finding (record for the ledger).** The two number
  definitions and the counterexample consume the published
  `lem-second-countable-smooth-manifolds-have-cw-homotopy-type`, whose home page
  is `chern-weil-theory-and-characteristic-forms`. That page is outside the
  transitive closure of this page's declared `requires`
  (`manifolds-with-boundary-collars-and-orientations`,
  `orientations-poincare-lefschetz-and-alexander-duality`,
  `stiefel-whitney-and-euler-classes-by-universal-constructions`,
  `chern-and-pontryagin-classes-by-splitting-and-complexification`).
  `validate-plan` checks only *planned* item targets, so a published target
  outside the closure is not mechanically flagged, but the page-level edge is
  a real reading-order dependency and should be reconciled at Step 4 (either a
  `requires` edge to `chern-weil-theory-and-characteristic-forms` or an owner
  decision that the admissibility lemma be treated as part of the
  characteristic-class interface). Without it the class-construction
  hypotheses on a closed manifold would not be discharged. There are no
  in-run cross-batch edges: every other dependency is published, so the batch
  cross-batch-dependency input is `[]`.

## Source record and harvest

Full texts were downloaded and read, then fetch-verified by
`source-fetch-check --stamp`:

| Treatment | Kind | Locator actually inspected | Stamp |
|---|---|---|---|
| [Freed, *Bordism: Old and New*](https://people.math.harvard.edu/~dafr/bordism.pdf) | lecture-notes | Lectures 1–2, printed pp. 5–24: Definition 1.19, Definition 1.22, Lemma 1.25, Lemma 1.30, Propositions 1.31–1.32, Definition 1.33/(1.35), (2.16)–(2.24) | 7,243,524 B, 208 pp., `sha256_16 ddecb72e0c9197c6` |
| [Milnor–Stasheff, *Characteristic Classes*](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf) | textbook | §4 Stiefel–Whitney numbers, p. 51 example and Theorems 4.9–4.10 (pp. 50–54); §16 Pontryagin numbers and boundary vanishing (pp. 183–187); §17 oriented cobordism, Lemmas 17.2–17.3 and the graded ring (pp. 199–204) | 13,204,109 B, 326 pp., `sha256_16 e5a712237dd7959a` |
| [Wall, *Differential Topology*](https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf) | textbook | Chapter 8, §8.1 pp. 239–243 and §8.2 pp. 243–247: group structure, inverse, products, Theorem 8.2.11, the boundary conventions on p. 246 | 3,365,978 B, 354 pp., `sha256_16 e79dfa03bd1aa8a3` |
| [Ranicki, *Algebraic and Geometric Surgery*](https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro) | monograph | Chapter 6, §§6.1–6.3, electronic pp. 109–119: Definitions 6.22/6.24, Theorems 6.23/6.25, the number formulas and Remark 6.26 | 3,627,372 B, 333 pp., `sha256_16 fe5e07eb7448953e` |

`research/frontier-38-owner-30-batch-13.coverage.json` disposes 48 harvested
results: 26 `included`, one `inline`, three `already-published`, and 18
declined with individual reasons (corner/exact-sequence techniques, the
rational and signature-theoretic structure of the oriented bordism ring, the
Thom spectrum identifications and framed cobordism, and the hard Thom
converse). The deferred rows name real destinations
(`thom-spaces-normal-data-and-collapse-maps`,
`pontryagin-thom-and-framed-cobordism`,
`spectra-and-stable-homotopy-groups`,
`characteristic-numbers-and-cobordism-obstructions`); no
`source_resolution` drop or escalation was needed.

**Retrieval history (preserved).** The design's MS host
(`people.math.rochester.edu/.../milnor-stasheff2.pdf`) failed to connect
(no route to host within 135 s). The Ranicki-archive mirror
(`maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf`) delivered the full 13.2 MB
text on a manual resume (HTTP 206) but timed out four times at the tool's
default 90 s deadline; the final `webhomes.maths.ed.ac.uk` host fetched and
stamped the same text with a 420 s per-fetch deadline. The exact attempt list
is in the coverage entry. Wall's design URL
(`people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf`)
returned HTTP 404; the Auckland mirror serves the full text and is stamped.
Freed's and Ranicki's URLs were live on the first attempt.

## Choice, published defects and uncertainties

- Choice: AC is declared in the two number definitions and the two
  boundary-vanishing propositions (class construction only, inherited through
  the published Stiefel–Whitney, Pontryagin and admissibility suppliers);
  `AC_\omega` is declared in the stable-tangent splitting (global inward
  field). The relation, group, ring, Ω₀ and example items are choice-free, and
  the notes and statements say so.
- No defective actual prerequisite was found among the published items this
  pair consumes; the only finding is the page-closure observation above, which
  is a declaration/scope matter rather than a mathematical defect.
- Unresolved uncertainty for Step 3/5: (i) the pair-of-pants example is a
  constructed regular region in the plane, and its three-boundary-circle
  orientation bookkeeping must be written out and reviewed; (ii) the
  admissibility step in the two number definitions should be checked against
  the exact hypotheses of the class suppliers; (iii) the oriented sign
  conventions (product formula, group inverse, transposition sign) should get
  an explicit review pass. None of these is a known defect.

## Checks and remaining run-level work

| Check | Actual result |
|---|---|
| `coverage-checklist` batch 13 with `--require-destination` | exit 0; 1 page, 48 harvested results, 0 errors, 0 warnings |
| `source-fetch-check --stamp` then check mode | exit 0; 4/4 sources fetch-verified (1 stamped with the 420 s deadline after earlier timeouts), 4/4 resolved |
| `url-sweep` on batch 13 coverage (temp out path) | exit 0; 4/4 live, 4 citation decisions, 0 drops |
| `source-backing` on batch 13 coverage | exit 0; 14 authored results, every one still backed |
| `manifest-deps.mjs` batch 13 / whole run | exit 0; 24 / 752 items, 0 missing or malformed `deps` |
| `content-policy.mjs --manifest-only` batch 13 | exit 0; 24 scoped items, 0 errors, 0 warnings; the whole-run invocation over all 30 manifests passes with 752 scoped items, 0 errors, 0 warnings |
| `item-dependency-levels.mjs check --run` | exit 1 at final check (6 errors) all from `peter-weyl-theory-for-general-compact-groups`, `intersection-products-on-smooth-projective-surfaces` and `point-blowup-resolution-on-arbitrary-regular-surfaces` still-empty inventories; 0 errors touch batch 13, whose 24 labels match the computed levels |
| `step1-decisions.mjs check --run` | exit 1 at final check; 752 run items, 751 ready, 6 open rows (all three other still-empty pairs); 0 open rows touch batch 13 — all 24 records current |
| `drift-review-check.mjs --run` | exit 0; 30 pages reviewed, no blocked edges |
| `frontier-dependency-ledger.mjs refresh --run` | exit 1: "Cross-batch review incomplete: supply every batch input and review every declared edge" — batch 13's own input `research/frontier-38-owner-30-batch-13.cross-batch-dependencies.json` is present and is `[]` (no in-run cross-batch edge); batches 11, 26 and 27 had not yet supplied their inputs at check time. Re-run after those land |
| `validate-plan.mjs research/plan-spec.json` | exit 0; the plan still carries empty item lists for 545/546 until the Step-4 splice, so this batch introduces no plan edge yet |
| `extcheck.mjs` / `fwdcheck.mjs` | no recorded-not-proved or forward reference is introduced by this batch |

Step 3 must author the 24 items as written (especially the glue charts, the
boundary pushforward argument, the product sign computations and the `RP^2`
computation), and should write the two number definitions' admissibility step
in full. Step 4 must splice the manifest into the plan and reconcile the
`chern-weil-theory-and-characteristic-forms` admissibility edge recorded above.
The whole-run Step-1 gates currently fail only on other batches' unfinished
units; batch 13 itself is clean.

## Owner-held Step 3 gate repair, heat lane

The Stiefel–Whitney Definition uses exponent-weighted formal degree even when a class vanishes, instead of the false homogeneous-membership iff. Its two consumers require degree n explicitly and remain sound. Product-bordism gluing now orients the second piece by (-1)^m times the product orientation. Eight reverse-boundary rows have specific arguments. General-J PT bijections and arbitrary-class representability are explicitly outside the selected interface scope; no current Thom-page deferral remains.

Exact decisions, source hashes, consumers and focused checks are in `frontier-38-owner-30-step3-gate-repair-heat-decisions.json` and the matching report. This lane provides mathematical repair evidence, not central certification or an owner decision.
