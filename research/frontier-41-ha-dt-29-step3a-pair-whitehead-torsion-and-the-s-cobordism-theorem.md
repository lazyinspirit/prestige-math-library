# Step 3a scope review — Whitehead Torsion and the S Cobordism Theorem

- Run: `frontier-41-ha-dt-29` (role alpha, label
  `step3a-pair-whitehead-torsion-and-the-s-cobordism-theorem-7dd64f51daf8a046`; batch 16 owns this pair)
- A page: `whitehead-torsion-and-the-s-cobordism-theorem` (order 563, differential-topology, DT-24)
- B page: `whitehead-torsion-and-the-s-cobordism-theorem-examples` (order 564)
- Scope decision for the A page: **sufficient**
- This report judges scope only — whether the planned definitions, results and examples cover the
  intended subject. It is not item or proof approval, writes no item approval and no owner record, and
  edits no scaffold. The B page is covered by the one A-page decision.

## Pair reviewed

| page | kind | order | items | decision |
| --- | --- | ---: | ---: | --- |
| `whitehead-torsion-and-the-s-cobordism-theorem` | A | 563 | 22 | **sufficient** |
| `whitehead-torsion-and-the-s-cobordism-theorem-examples` | B | 564 | 4 | companion, covered by the A decision |

A inventory (22, manifest order):
`def-based-handle-chain-complex-over-the-fundamental-group-ring`,
`lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring`,
`lem-relative-handle-complex-torsion-agrees-with-the-inclusion`,
`def-whitehead-torsion-of-an-h-cobordism`,
`lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`,
`thm-whitehead-torsion-of-an-h-cobordism-is-well-defined`,
`lem-product-h-cobordisms-have-zero-whitehead-torsion`,
`lem-h-cobordisms-admit-two-index-normal-form-presentations`,
`lem-group-ring-modification-lemma-for-embedded-spheres`,
`lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels`,
`lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy`,
`lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves`,
`lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex`,
`lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence`,
`thm-vanishing-torsion-implies-product-cobordism`,
`thm-smooth-s-cobordism-theorem`,
`cor-h-cobordism-theorem-when-the-whitehead-group-vanishes`,
`lem-whitehead-classes-are-represented-by-invertible-matrices`,
`prop-realization-of-whitehead-torsion-by-h-cobordisms`,
`rem-simple-homotopy-and-the-vanishing-criterion-are-at-owned`,
`rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign`,
`rem-whitehead-group-construction-remains-at-owned`.

B inventory (4, manifest order):
`ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction`,
`ex-a-group-ring-handle-matrix-and-its-torsion-class`,
`ex-handle-slides-change-the-matrix-but-not-whitehead-torsion`,
`cex-ordinary-acyclicity-over-z-does-not-detect-group-ring-torsion`.

## Design reconciliation

The controlling prose is `research/plan-differential-topology-track.md`: the DT-24 summary row
(line 53), the detailed §DT-24 block (lines 1250–1294), the exact `requires` row of §12.4
(line 2240), the §8 per-pair source row (line 1674), the §9.4 heading rows H116–H120
(lines 1828–1832), the §12.5 DT-24 sharpening (lines 2351–2353), the §12.6 disposition
(DT-21–DT-24 retained) and the §12.1 leaf invariant.

1. **Inventory.** All 14 designed A items are present under the same ids (design items 1–14 map to
   manifest items 1, 2, 6, 8, 9, 11, 14, 15, 16, 19, 20, 21, 22 and the renamed criterion item
   `thm-smooth-s-cobordism-theorem`). The 8 further A items are hard-proof-closure lemmas, each
   consumed inside the pair: the torsion/inclusion comparison (design item 3's premise), the two-index
   normal form, the group-ring modification and coefficient-pairing lemmas, the group-labelled homology
   lemma, the contractible-relative-complex criterion, the vanishing-torsion sufficiency theorem and the
   matrix-representation lemma. All 4 designed B items that survive the owner resolution are present
   under the same ids.
2. **Owner-held narrowing, already decided.** The design's item 5 (well-definedness of the torsion) and
   the intrinsic `τ(W,M_0)` of the source are **deferred**: the classical arbitrary-structure
   independence needs a smooth-triangulation/common-subdivision or Cerf-theoretic input absent from the
   local closure (Ranicki Example 8.13(i) warns of exactly this; Lück's (2.14) invokes Theorem 2.1(5),
   Chapman; Davis–Kirk §11.4 states it without proof). The deferred rows are recorded as `deferred`
   with `destination: owner-decision` in `research/frontier-41-ha-dt-29-batch-16.coverage.json`
   (A-page row "Intrinsic well-definedness …", B-page row "A realized nonzero Whitehead class implies
   nonproduct only under intrinsic torsion invariance"). The retained theorem is the sound
   presentation-relative criterion: product rel $M_0$ iff *some* finite handle presentation $H$ has
   $\tau_H(W,M_0)=0$; the definition is indexed by $H$; the design's duplicate criterion row and the
   B nonproduct counterexample were removed with it. This decision is recorded in
   `research/frontier-41-ha-dt-29-batch-16.notes.md` §"Current owner resolution (2026-10-04)" and in
   `research/frontier-41-ha-dt-29-supervision.md` lines 104 and 120 ("the presentation-relative iff,
   with intrinsic arbitrary-structure invariance explicitly deferred"; "no A/B pair is added"), and the
   Step-1 record for `thm-smooth-s-cobordism-theorem` carries `"owner": true` with the same resolution.
   I found no owner scope record for this page under `research/*step3a-owner*` and did not write one.
3. **Stale design clauses resolved in favour of the current run state.** The §DT-24 "Publication gate"
   paragraph says AT-22/AT-23 "remain unpublished"; both are published (`status: published`, audited
   2026-09-27) and are used as published suppliers. This is the supersession the owner direction already
   authorises (§12 supersedes historical unspliced-status paragraphs).
4. **Dimension and range conventions.** The pair consistently works with $W^{n+1}$, boundary $M_0^n$,
   $n\ge5$ (`dim W = n+1 ≥ 6`), normal-form index $2\le q\le n-2$, which matches Lück's $2\le q\le n-3$
   in his convention (`dim W = n ≥ 6`) and Ranicki's $2\le i\le m-2$ with boundary dimension $m$; the
   normal-form item and the sufficiency theorem carry the correct dimension hypotheses. The boundary
   dimension can be chosen in the interior of the range for $n\ge6$, but the stated items cover the full
   range and the $n=5$ case (see Prerequisites, flagged finding 1).
5. **Intended role in the library.** The pair is the DT-24 endpoint of the handle/Morse spine: it
   consumes `the-smooth-h-cobordism-theorem` (batch 15, order 561), the published AT-22
   `simple-homotopy-whitehead-groups-and-torsion` and the published AT-23
   `local-coefficients-twisted-homology-and-duality`, and no other in-run page and no B-page item
   depends on it (checked across all 30 batch manifests; §12.6 confirms DT-32's DT-24 cone was removed).
   Its examples page is a genuine dependency leaf (B `requires` = the A page only, §12.1).

## Source coverage

`research/frontier-41-ha-dt-29-batch-16.coverage.json` records three independent full treatments with
exact locators, all fetch-stamped:

- W. Lück, *A Basic Introduction to Surgery Theory*, Ch. 1 §§1.1–1.5 and Ch. 2 §§2.1–2.3,
  printed pp. 1–37; stamp `sha256_16 ff8ccb8809443404`, 1,474,199 bytes, 197 PDF pages.
- A. Ranicki, *Algebraic and Geometric Surgery*, Ch. 8 §§8.1–8.2, printed pp. 170–185; stamp
  `sha256_16 f8b74a58e58f4fb9`, 1,939,688 bytes, 374 PDF pages.
- J. F. Davis and P. Kirk, *Lecture Notes in Algebraic Topology*, §11.4, printed pp. 343–346, used only
  to locate the deferred stronger intrinsic input; stamp `sha256_16 0441b5c1059cac27`, 382 PDF pages.

91 harvested results are disposed 13 A-page `included`, 4 B-page `included`, 4 `inline` (published
AT-22 material consumed without redefinition), 2 `deferred` (one per page, both `destination:
owner-decision`) and 2 `out-of-scope` (Reidemeister torsion / lens-space classification, with specific
reasons and no in-pair destination). Every designed result is anchored: based handle complex to Lück
§§1.2–1.4 and Ranicki Def. 8.14/Prop. 8.17; comparison to Ranicki Prop. 8.19 and Lück (2.14); explicit
contraction to Ranicki Prop. 8.30 and Lück §1.4; normal form to Lück Lem. 1.21/1.24 and Ranicki
Prop. 8.31/8.32; group-ring modification and homology lemmas to Lück Lem. 1.22–1.23 and Ranicki
Cor. 7.30; diagonalization and Whitney realization to Lück Lem. 1.27(1) and Ranicki Thm. 8.33;
sufficiency and criterion to Ranicki §§8.2; vanishing-Whitehead corollary to Lück Rem. 1.28 and
Ranicki Thm. 8.34; realization to Lück Lem. 1.27(2) and Ranicki Prop. 8.22; opposite-boundary duality
to Lück Lem. 2.16(2); ownership seam to Lück Ch. 2 §§2.1–2.3. The 8 closure items are not themselves
harvested source results; each carries Lück/Ranicki locators in its manifest `sources` field, and the
B items carry the same two treatments.

Checks (run on the unchanged current files):

- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-16.coverage.json --require-destination`
  → `2 page(s), 91 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-16.coverage.json`
  → `5/5 source(s) fetch-verified` (no stamp written). I independently re-downloaded Lück and Ranicki:
  byte counts and page counts equal the stamps exactly, and I read Lück Theorem 1.1 and Lemmas 1.21–1.24,
  1.27, 1.28 (printed pp. 2, 12–20) and Ranicki 8.18–8.22, 8.28–8.33 (printed pp. 182–185) directly.

## Prerequisites

Checked against the whole run's manifests (30 batches, 883 in-run items) and the published `items/`
tree:

- The 26 pair items carry 89 distinct `deps` targets: 38 published on-disk items (every one
  `status: published`) and 51 in-run scaffold items. None is missing, none is a draft, and all in-run
  suppliers lie on earlier pages of the same run: batch 1 `handle-decompositions-duality-and-rearrangement`
  (order 527), batch 3 `handle-cancellation-slides-and-elementary-moves` (533), batch 4
  `morse-inequalities-and-the-handle-chain-complex` (535), batch 14
  `the-whitney-trick-and-surgery-below-the-middle-dimension` (559) and batch 15
  `the-smooth-h-cobordism-theorem` (561). The page `requires` array equals §12.4 exactly; the B page
  requires only the A page.
- The consumed published suppliers exist with compatible statements: AT-22 defines the contraction
  torsion of a finite based free contractible complex via the odd/even parity map, $K_1$/$\mathrm{Wh}$,
  torsion of a finite-CW homotopy equivalence, the fixed-complex independence theorem, the
  composition/pairs/based-exact-sequence formulas and the unit class $[1-t^2-t^3]\ne0$ in
  $\mathrm{Wh}(C_5)$; AT-23 defines the right action $c\cdot g=g^{-1}c$ on universal-cover chains. I
  verified the algebraic core of the B example independently: $u=1-t^2-t^3$ has inverse
  $1-t-t^{-1}$ in $\mathbb Z[C_5]$.
- **No prerequisite of the planned statements is absent from both the published library and the current
  scaffold** in the sense of a missing supplier claim for the stated definitions/results. Three
  frontier-level risks and one minor instance issue were found and are flagged below with exact
  evidence; they concern proof tools and statement wording, not the coverage of the intended subject.

### Flagged finding 1 (unmet prerequisite candidate, proof tool — confirmed absence, uncertain consumption)

The consuming items `lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy`
(item 10, stated for $2\le q\le n-2$), `lem-h-cobordisms-admit-two-index-normal-form-presentations`
(item 7), `lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex` (item 12),
`prop-realization-of-whitehead-torsion-by-h-cobordisms` (item 18) and, through them,
`thm-vanishing-torsion-implies-product-cobordism` (item 14) isotop an embedded $S^q$ off transverse
belt spheres $S^{n-q}$ in the $n$-dimensional level $\partial_1W_q$. For $q=n-2$ the isotoped sphere
has dimension $\ge3$ while the fixed transverse sphere has dimension $2$. The run's whole scaffold
contains exactly two Whitney-trick theorems: `thm-high-dimensional-whitney-trick` (both sheets
dimension $\ge3$) and `thm-whitney-trick-in-the-two-dimensional-borderline-case`, which assumes the
**fixed** sheet satisfies $s\ge3$ and allows only the **isotoped** sheet to have dimension $2$, i.e.
it covers the $(2,\ge3)$ pattern, not the $(\ge3,2)$ pattern. No published library item supplies a
Whitney trick (grep over `items/` finds none). The batch-14 remark
`rem-nonsimply-connected-whitney-tricks-carry-group-ring-and-whitney-disk-obstructions` acknowledges
that "in the codimension-two borderline [the clean disk] requires the complement fundamental-group
hypothesis", but the stated borderline theorem does not cover this orientation of the two sheets.

Source evidence: Lück's revised treatment (later Bonn handout/book version of Chapter 2) records, after
the Whitney-trick step of his Homology Lemma, "For the application of the Whitney trick we need the
assumption $n-1\ge5$ **and when $q=2$ or $q=n-3$ an additional assumption on fundamental groups** …
In our situation it turns out that this requirement is always fulfilled, a subtlety explained in the
book by Scorpan [pages 51–53] in dimensions $(n-1)\ge5$." In the pair's convention his top index
$q=n-3$ (his $\dim W=n$) is exactly our $q=n-2$. The fetch-stamped 2004 ICTP text (the cited locator,
printed p. 15) does not record this qualification; only "we need the assumption $n-1\ge5$" is printed
there, so the run's source basis for the top-index subcase is a proof whose known subtlety was later
corrected by the author.

Recommended owner action (owner decides; no scaffold edit made): either add a symmetric
borderline Whitney item covering the $(\ge3,2)$ pattern with the complement fundamental-group
hypothesis (Scorpan pp. 51–53), or record in the affected items' strategies that the top index is
handled by dualising the presentation (as the source's Normal-Form proof does) or by fixing the
normal-form index at $q=2$ in the final sufficiency theorem. The author should also record the source
qualification in the batch notes.

### Flagged finding 2 (hypothesis/convention consistency, uncertainty)

The normal-form item (7) and the geometric items assume oriented handle cores and oriented intersection
numbers, while the definition (3), sufficiency (14), criterion (15) and corollary (16) carry no
orientability hypothesis (batch 1's triad and batch 15's h-cobordism are explicitly orientation-free).
Lück's 2004 Theorem 1.1 requires "$M_0$ closed connected oriented" (verified at printed p. 2, PDF p. 8
of the stamped PDF); Ranicki's Theorem 1.11/Definition 1.8 and Lück's later handout state the theorem
without orientability (Ranicki defines the s-cobordism via simple homotopy equivalences of the
inclusions). So the orientation-free form has a checked authoritative basis, but the pair's own local
route is written with orientations. I did not verify Ranicki's full Chapter 8 proof of the
orientation-free statement. Recommend the Step-3b author reconcile conventions explicitly — either
add the orientation hypothesis where the local intersection-matrix proof needs it, or cite/adopt the
orientation-free route — rather than leaving the mismatch implicit. This is not by itself a scope
change.

### Flagged finding 3 (statement instance without local support, minor)

The corollary `cor-h-cobordism-theorem-when-the-whitehead-group-vanishes` illustrates its hypothesis
with "for instance if $\pi$ is trivial, free, free abelian, or a finite group in a class with vanishing
Whitehead group". The cited locators (Lück Remark 1.28, Ranicki Theorem 8.34) supply only the trivial
group instance; neither the published library nor the run scaffold contains a computation of
$\mathrm{Wh}(F)$ or $\mathrm{Wh}(\mathbb Z^k)$. Recommend trimming the parenthetical to the supported
instance, or adding a cited remark item for the free/free-abelian computations (Bass–Heller–Swan-type
input), at the owner's discretion.

### Minor observation (no action expected)

The B example `ex-a-group-ring-handle-matrix-and-its-torsion-class` instantiates the realization
proposition over "a closed $n$-manifold with fundamental group $C_5$". The published lens-space example
exists, and $L(5,1)\times S^{n-3}$ supplies the instance for $n\ge5$; the author should construct it
inline (or check an existing product-$\pi_1$ item) rather than leave the instance implicit.

## Scope conclusion

The planned definitions (based handle complex, presentation-indexed torsion, matrix representation),
results (explicit contraction, comparison with the inclusion torsion, well-definedness for fixed
presentation and listed moves, normal form, modification/homology lemmas, algebraic diagonalization,
group-labelled Whitney realization, sufficiency, presentation-relative s-cobordism criterion,
vanishing-Whitehead corollary, realization, opposite-boundary duality, ownership seams) and examples
(simply connected case, $C_5$ class computation, slide invariance, augmented-acyclicity
counterexample) adequately cover the intended subject within the owner-approved, explicitly recorded
presentation-relative scope. The classical intrinsic presentation-independence claim, its nonproduct
consequence and the B counterexample built on them are deferred by an owner decision recorded in three
places, with the source limitation documented — I treat that as an owner-held scope decision, not a
reviewer's omission. The flagged findings above are the only unresolved items; none is a missing
definition, result or example of the subject.

## Records reviewed

- `research/frontier-41-ha-dt-29-batch-16.pages.json` (all 26 current A/B item contracts, deps, sources)
- `research/frontier-41-ha-dt-29-batch-16.coverage.json` (91 harvested results, fetch stamps, deferred rows)
- `research/frontier-41-ha-dt-29-batch-16.notes.md` (owner resolution; conflicts; inventory)
- `research/frontier-41-ha-dt-29-batch-16.cross-batch-dependencies.json` and the run-level dependency ledger
- `research/plan-differential-topology-track.md` DT-24 block (lines 1250–1294), §8 row (1674),
  §9.4 H116–H120 (1828–1832), §12.1–§12.6 (2022–2454)
- `research/plan-spec.json` pages 1206–1207; `research/frontier-41-ha-dt-29-alpha-step1-drift.md` (DT-24
  verdict `no-drift`) and `research/frontier-41-ha-dt-29-drift-evidence.json`
- `research/frontier-41-ha-dt-29-owner-authoring-direction.md`,
  `research/frontier-41-ha-dt-29-supervision.md` (lines 104, 120),
  `research/frontier-41-ha-dt-29-step1-owner-gate-pass.json` and the 26 Step-1 records
  `research/frontier-41-ha-dt-29-step1-<item>.json` (all `ready`, one `owner: true`)
- Published suppliers: `library/algebraic-topology/simple-homotopy-whitehead-groups-and-torsion.md`,
  `library/algebraic-topology/local-coefficients-twisted-homology-and-duality.md`, the 38 consumed
  published item files, `items/ex-the-whitehead-group-of-the-trivial-group-is-zero.md`,
  `items/ex-cellular-homology-of-a-lens-space.md`
- In-run supplier manifests for batches 1, 3, 4, 14, 15 (orders 527, 533, 535, 559, 561)
- Authoritative sources: Lück, *A Basic Introduction to Surgery Theory* (downloaded; byte-identical to
  the stamp) printed pp. 2, 12–20; Ranicki, *Algebraic and Geometric Surgery* (downloaded;
  byte-identical) printed pp. 170–185; Lück's later Bonn handout "Cobordism theory and the
  s-cobordism theorem" (Lemma 2.35 referee correction; Scorpan pp. 51–53 cited there)

## Checks run

- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-16.pages.json` → 26 items, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-16.coverage.json --require-destination`
  → 2 pages, 91 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-16.coverage.json`
  → 5/5 fetch-verified, 5/5 resolved.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` → 883 items, 60 pages, max level 23, exit 0.
- `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json`
  → 883 scoped items, 0 errors, 0 warnings (the single-batch invocation reports cross-batch
  `batch-dependency-missing` errors by design and was not used as evidence).
- Independent dependency resolution over all 30 manifests and `items/`: 89 distinct `deps` targets,
  38 published + 51 in-run, 0 missing.
