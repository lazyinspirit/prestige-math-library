# Frontier 32, Batch 11 — beta scaffold notes

## Scope and design lock

- Owned artifacts: `research/frontier-32-batch-11.pages.json`,
  `research/frontier-32-batch-11.coverage.json`, and this note.  No workflow,
  plan, published page, or other batch artifact was changed.
- Design read in full: `research/plan-algebraic-geometry-track.md`, AV-4,
  beginning at L260.  The design’s 25 A items and 8 B items are all present;
  A has 25 items, so the over-60 split rule does not apply.
- `research/plan-spec.json` supplies order 366.047/366.048 and the concrete
  requirements `projective-algebraic-sets-projective-morphisms-and-cones-examples`
  and `exterior-powers-orientation-and-hodge-duality`.
- Drift recorded, not adjudicated: the design describes the prerequisite
  context as “AV-2, AV-3, multilinear/exterior algebra”, while the spec names
  only the concrete projective-examples and exterior-powers pairs.  The design
  gives no competing numeric order.  The manifest retains the spec exactly,
  as required; no plan structure was altered.

## Conventions and limits carried into every item

- Work over one fixed algebraically closed field `k`; an affine or projective
  **variety** retains the library’s nonempty irreducible meaning.  Products of
  arbitrary algebraic sets may be empty, but products of the stated varieties
  are nonempty varieties.
- `P(V)` parametrizes one-dimensional subspaces; the Segre target is ordered
  by the indicated pair of indices, and the Veronese target by a fixed ordering
  of all degree-`d` monomials (`d >= 1`).  Plucker coordinates are the ordered
  basis-wedge coordinates, modulo the determinant change of basis.
- “Closed graph” is not asserted for every classical prevariety: the theorem
  is for a morphism whose target is projective (hence separated in this
  classical setting) **and whose ambient classical product has been
  constructed**.  This is the qualification in Milne Corollary 5.28 and is
  necessary in light of MIT’s doubled-origin example; it does not silently
  construct an arbitrary mixed affine-projective product.
- “Base change” is the pullback universal property **when the classical
  pullback exists**; this batch constructs the affine/projective cases it
  needs.  It does not claim arbitrary classical or scheme fibre products.
- The Plucker theorem proves the point-set/projective closed-image statement
  through charts and relations.  In this pre-AV-6 page, “smooth” in the
  Grassmannian corollary is discharged directly by the explicit cover by
  affine-space charts and regular transition maps; it does not invoke the
  later local-ring or scheme-morphism smoothness theories.  The page does not
  promise the scheme-theoretic Plucker ideal or arbitrary-base functor-of-points
  theory.

## Re-harvested sources and URL status

| key | independent treatment read | exact locator read | use |
| --- | --- | --- | --- |
| M | J. S. Milne, *Algebraic Geometry*, Version 6.10 (2024), [PDF](https://www.jmilne.org/math/CourseNotes/AG.pdf) | contents PDF pp. 2-4; §§5g-5i, printed pp. 106-115 / PDF pp. 105-114; §6i, printed pp. 142-146 / PDF pp. 141-145; §6m, printed pp. 149-152 / PDF pp. 148-151 | primary course-note treatment of products, graph/separation, fibre products, Veronese/Segre, and Grassmannians |
| MIT | MIT 18.725, *Algebraic Geometry* lecture notes, [PDF](https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf) | contents PDF p. 1; Lecture 4 Grassmannian portion, PDF pp. 11-13; Lecture 7 Products through separatedness, PDF pp. 19-22 | independent lecture-note treatment of product topology, tensor products, Segre, Grassmannians, and separatedness |

Both URLs were opened as complete PDFs in the web reader on 2026-09-06
(231 and 63 PDF pages respectively).  Runner-local Node fetching failed, so
the coverage records the successful reader verification and deliberately has
no invented byte hash.  Both live source URLs therefore remain the verified
recorded URLs; no source replacement or provenance `original_url` is needed.
The full source-heading harvest and each disposition are in
`research/frontier-32-batch-11.coverage.json`.

## Dependency-closed item register

Every item has an explicit `deps` array in the page manifest.  The table gives
the exact proposed claim and the proof route; the bracketed dependencies are
the substantive local spine, while the manifest records the full checked list
including inherited coordinate and algebra interfaces.

| item | proposed claim and proof route | dependencies / source grounding |
| --- | --- | --- |
| `def-product-varieties-universal-property` | Define the product projections and universal mapping property, including the empty-algebraic-set and point-factor cases. | inherited categorical products and affine/projective algebraic-set definitions; M §5g, MIT Lecture 7/Definition 5 |
| `thm-affine-variety-product-coordinate-ring` | For affine varieties, construct `X ×_k Y` from `k[X] ⊗_k k[Y]` through the classical affine algebraic-set duality and prove the universal property; do not invoke the later scheme/`Spec` product route. | `cor-affine-algebraic-set-coordinate-duality-complete`, prior affine anti-equivalence, tensor coproduct, and prime-coordinate-ring interfaces; M Example 5.16, (5.17), Proposition 5.20; MIT Products/Example 8/Lemma 15 |
| `lem-affine-product-topology-not-product-topology` | The product Zariski topology is generally strictly finer than the topological product; fibres still have their expected algebraic form. | affine product theorem and `def-product-topology`; M §5g; MIT Remark 10 and Remark 12 |
| `def-segre-map` | Define `([x],[y]) ↦ [x_i y_j]` with its bihomogeneous convention. | product and projective-coordinate interfaces; M “The Segre map” |
| `lem-segre-map-well-defined-injective` | Rescaling is harmless and a nonzero row/column recovers the two factors. | Segre definition and inherited projective-coordinate lemma; M §6i |
| `thm-segre-image-rank-one-minors` | The image is exactly the nonzero projective rank-one matrix locus, cut out by all `2×2` minors. | Segre lemma and projective closed-embedding interface; M 6.26; MIT “The Segre embedding” |
| `cor-projective-variety-product-exists` | Nonempty projective varieties have a product that is a projective variety. | product definition plus Segre closed image; M §5g and §6i |
| `def-veronese-map` | Define the degree-`d` monomial map. | projective-coordinate interfaces; M 6.23 |
| `lem-veronese-map-well-defined-closed-immersion` | Prove rescaling, chart inverse, and closed image using monomial binomials. | Veronese definition and inherited coordinate/closed-embedding interfaces; M 6.23 |
| `cor-homogeneous-polynomial-becomes-hyperplane-section` | A degree-`d` form becomes a linear form after the degree-`d` Veronese. | Veronese immersion and projective-hypersurface definition; M 6.24 |
| `def-grassmannian-subspaces` | Define `Gr(r,V)`, including `r=0` and `r=dim V`. | inherited vector-space, subspace, and dimension definitions; M §6m; MIT Example 4 |
| `def-plucker-coordinates` | Define the basis-wedge projective class and its coordinates. | Grassmannian and exterior-power/determinant interfaces; M Remark 6.34 |
| `lem-plucker-map-well-defined-injective` | Determinant change of basis gives well-definedness; wedge annihilation recovers the subspace. | Plucker definition and exterior algebra laws; M Proposition 6.29; MIT Lecture 4 |
| `thm-plucker-image-closed` | The decomposable locus satisfies Plucker relations and is closed in projective exterior space. | Plucker lemma, exterior laws, inherited closed-embedding theorem; M Proposition 6.29 and its second proof; MIT Theorem 4.1/Lemma 6 |
| `lem-grassmannian-standard-affine-charts` | A nonzero Plucker minor yields an affine `r(n-r)` chart with compatible overlaps. | Plucker closed image; M Remark 6.31; MIT Example 4 |
| `cor-grassmannian-smooth-irreducible-dimension` | The chart cover proves smoothness in the elementary local-affine-chart sense, irreducibility, and dimension `r(n-r)`. | standard chart lemma; M Remarks 6.32-6.33 |
| `def-incidence-correspondence-varieties` | Define point-subspace and containment loci with their two projections. | products and Grassmannians; supported by the product/projective models in M §§5g,6m |
| `lem-incidence-locus-is-closed` | Containment is a closed bilinear/minor condition in the product model. | incidence definition, Segre, Plucker; MIT Lemma 16 |
| `thm-graph-closed-for-classical-variety-morphism` | In an already-constructed classical product, if the target is projective, the graph is the inverse image of its closed diagonal. | projective product/Segre closedness; M Corollaries 5.27-5.28; MIT Separatedness, Lemmas 17-18, Corollary 12 |
| `lem-diagonal-affine-variety-cut-out-by-coordinate-differences` | In an affine product the diagonal is defined by `x_i⊗1 - 1⊗x_i`. | affine product-coordinate-ring theorem; M §5h/§5i context |
| `def-base-change-classical-varieties` | Define `X ×_S T` by its pullback universal property where the classical pullback is constructed. | product definition and affine/projective models; M §5i and Notes 5.32 |
| `lem-fibre-as-base-change-to-point-classical` | For a closed `k`-point, the fibre is base change and on affine charts is cut out by the point ideal. | base-change definition and inherited fibre definition; M Example 5.31 |
| `thm-multihomogeneous-map-to-projective-space` | Same-bidegree forms with no common zero define a projective morphism from a product. | product/Segre/projective-coordinate interfaces; M §6i supplies the homogeneous-map route |
| `cor-segre-veronese-embedding` | Compose the two Veronese maps with Segre to obtain the closed bidegree `(a,b)` embedding. | multihomogeneous-map theorem, Veronese, Segre; M 6.23 and 6.26 |
| `rem-products-need-scheme-fibre-products` | Explain why reduced classical constructions do not replace scheme fibre products. | affine product and restricted base-change definition; M Aside 5.34; MIT Example 9 |
| `ex-segre-p1-times-p1-quadric` | Compute the one-quadric image of `P1×P1`. | Segre theorem and projective-product corollary; M 6.26 |
| `ex-quadratic-veronese-conic` | Compute the quadratic Veronese conic and its hyperplane pullback. | Veronese lemma and hyperplane corollary; M 6.23-6.24 |
| `ex-grassmannian-lines-in-projective-three-space` | Identify `Gr(2,4)` with the Klein quadric. | Plucker closed-image theorem; M Example 6.30; MIT Example 5 |
| `ex-grassmannian-boundary-r-zero-n` | Verify both boundary Grassmannians are points and the out-of-range cases `r<0` or `r>dim V` are empty. | Grassmannian definition; direct convention check, with no load-bearing downstream use |
| `cex-zariski-product-topology-too-coarse` | Work out the diagonal counterexample in `A1×A1`. | topology lemma and product topology definition; MIT Remark 10 |
| `ex-incidence-point-hyperplane` | Write `Σa_i x_i=0` and describe its two projection fibres. | incidence-closed lemma and Plucker coordinates; standard bilinear specialization of MIT Lemma 16 |
| `cex-tensor-product-of-domains-not-domain` | Give a nonclosed-field tensor product with zero divisors. | affine-product theorem and scheme-fibre-product remark; M Remark 5.18 |
| `ex-segre-veronese-bidegree-two-three` | Enumerate one bidegree `(2,3)` map and factor it through Veronese then Segre. | Segre-Veronese corollary and multihomogeneous-map theorem; direct non-load-bearing coordinate instance |

The two direct-coordinate B examples (`ex-grassmannian-boundary-r-zero-n` and
`ex-segre-veronese-bidegree-two-three`) are not premises of any other item;
they are kept only because the design requires them, not used to manufacture
support for a theorem.

## Dependency rationale and authoring order

1. Build the affine product and topology warning before using products as an
   ambient construction.
2. Establish Segre, then use it to model projective products and to provide
   the closed product ambient space for incidence and multihomogeneous maps.
3. Treat Veronese independently, then combine it with Segre only after both
   closed-embedding routes have been established.
4. Develop Grassmannian definition → Plucker coordinates → injection/closed
   image → affine charts → geometry.  No Grassmannian item depends on a B
   example.
5. Put incidence, graph, affine diagonal, and restricted base change after
   their product models.  The graph proof deliberately does not depend on the
   later-listed affine-diagonal lemma, avoiding a forward dependency.
6. Keep every B item a leaf depending only on A items.  All 33 dependencies
   are backward within the pair or target already-established library items.

## Known limits and next author action

- Before prose authoring, re-open the cited source passage for the item being
  written; this scaffold is a navigation and dependency record, not a source
  substitute.
- The author must prove the general Plucker relation characterization rather
  than merely naming the relation, and must make the closedness proof’s chart
  argument explicit.
- The author must retain the constructed-product and projective-target/
  separatedness hypotheses in the graph theorem, the elementary local-chart
  convention for this early use of “smooth”, and the “when it exists” qualifier
  in the classical base-change definition.  Removing any of these would
  overstate the sourced result.
- `rem-products-need-scheme-fibre-products` is a boundary marker, not a
  forward citation to a schemes page.
- Validator record, run 2026-09-06:
  - `node tools/manifest-deps.mjs research/frontier-32-batch-11.pages.json`:
    33 items, 0 normalized, 0 errors.
  - `node tools/content-policy.mjs --manifest-only research/frontier-32-batch-11.pages.json`:
    33 scoped items, 0 errors, 0 warnings.
  - `node tools/coverage-checklist.mjs research/frontier-32-batch-11.coverage.json --require-destination`:
    1 page, 50 harvested results, 0 errors, 0 warnings.
  - `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-11.coverage.json`:
    2/2 sources fetch-verified.
  - `node tools/validate-plan.mjs research/plan-spec.json`: exit 0.  It reports
    existing repository-wide redundant-prerequisite warnings, but confirms no
    page-order, item-cycle, forward-reference, B-page-dependency, or unresolved
    item-id error among pages carrying item lists.
  - `git diff --check` over the three owned files: clean.

## Step-3 fix pass

- **Finding register.** The stable finding table in
  `research/frontier-32-alpha-f-step3-scaffold-review.md` contains only
  `F12-1`, for Batch 12's
  `schemes-subschemes-and-morphisms-locally-of-finite-type`.  It is not a
  Batch-11 finding and is therefore out of this task's authorised scope; no
  Batch-11 scaffold record was changed for it.  The review gives this pair the
  explicit verdict **sufficient** and assigns it no other finding id.
- **Review's unnumbered Batch-11 repair — retained, no further change.** The
  current `thm-affine-variety-product-coordinate-ring` record takes its route
  through `cor-affine-algebraic-set-coordinate-duality-complete`, the affine
  anti-equivalence, the tensor coproduct property, and the
  prime-coordinate-ring criterion; it has no scheme or `Spec` dependency.
  The current `ex-grassmannian-boundary-r-zero-n` record explicitly includes
  `Gr(r,V)=emptyset` for `r<0` or `r>dim V`.  These are exactly the two
  Batch-11 corrections described under “Direct repairs applied” in the review.
  Changed scaffold record: none in this pass—the repaired manifest entries
  were already present and remain dependency-closed.
- **Source recheck.** Both recorded URLs were opened again as their complete
  PDFs: Milne, *Algebraic Geometry*, Version 6.10 (231 pages), at
  https://www.jmilne.org/math/CourseNotes/AG.pdf, and MIT 18.725 (63 pages),
  at
  https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf.
  The recheck covered the harvest's stated Milne ranges §§5g--5i, §6i, and
  §6m, and MIT Lecture 4's Grassmannian portion and Lecture 7's product and
  separatedness portion.  The existing exact locators, 50 result
  dispositions, and two fetch-verification records remain faithful; no source
  repair or replacement was warranted.
- **Validation, 2026-09-06.**
  `manifest-deps` passes for this manifest (33 items, 0 normalizations, 0
  errors); `coverage-checklist --require-destination` passes (1 A page, 50
  harvested results, 0 errors/warnings); and `source-fetch-check` check mode
  accepts both recorded full-text verification records (2/2).  Whole-run
  `content-policy --manifest-only research/frontier-32-batch-*.pages.json`
  passes (676 scoped items, 0 errors/warnings).  `validate-plan.mjs
  research/plan-spec.json --repo . --max-items 60` exits successfully: the
  plan has no page-order, item-cycle, forward-reference, B-page-dependency, or
  unresolved-id error; its repository-wide redundant-prerequisite messages are
  advisory and do not name this batch.

Next action: author from the retained 25-A/8-B scaffold, reopening the mapped
source passage for each proof; no Step-3 repair obligation remains for Batch 11.

## Step-5 authoring

- Authored all planned draft items: A-page `def-product-varieties-universal-property`, `thm-affine-variety-product-coordinate-ring`, `lem-affine-product-topology-not-product-topology`, `def-segre-map`, `lem-segre-map-well-defined-injective`, `thm-segre-image-rank-one-minors`, `cor-projective-variety-product-exists`, `def-veronese-map`, `lem-veronese-map-well-defined-closed-immersion`, `cor-homogeneous-polynomial-becomes-hyperplane-section`, `def-grassmannian-subspaces`, `def-plucker-coordinates`, `lem-plucker-map-well-defined-injective`, `thm-plucker-image-closed`, `lem-grassmannian-standard-affine-charts`, `cor-grassmannian-smooth-irreducible-dimension`, `def-incidence-correspondence-varieties`, `lem-incidence-locus-is-closed`, `thm-graph-closed-for-classical-variety-morphism`, `lem-diagonal-affine-variety-cut-out-by-coordinate-differences`, `def-base-change-classical-varieties`, `lem-fibre-as-base-change-to-point-classical`, `thm-multihomogeneous-map-to-projective-space`, `cor-segre-veronese-embedding`, and `rem-products-need-scheme-fibre-products`; B-page `ex-segre-p1-times-p1-quadric`, `ex-quadratic-veronese-conic`, `ex-grassmannian-lines-in-projective-three-space`, `ex-grassmannian-boundary-r-zero-n`, `cex-zariski-product-topology-too-coarse`, `ex-incidence-point-hyperplane`, `cex-tensor-product-of-domains-not-domain`, and `ex-segre-veronese-bidegree-two-three`.
- Wrote the two owned pages directly under `library/algebraic-geometry/` and created `research/frontier-32-batch-11.proof-contracts.json`. All items/pages remain `draft`; all planned statement provenance is retained, with generated boundary and bidegree examples carrying the required generation records. Source-backed statements cite the harvested Milne §§5g--5i, 6i, 6m and MIT Lectures 4 and 7 locators. The 19 phase-format proofs have contracts with mapped proof rows and all eight boundary dispositions.
- Preserved the design limits: the graph theorem requires a constructed classical product and projective target; base change is only a constructed classical pullback; the Grassmannian smoothness claim uses affine charts rather than later scheme theory; Plucker closedness is proved through its standard charts and quadratic relations. No planned claim was dropped. The six examples and two counterexamples use local coordinate calculations; counterexample proofs are marked `ai-altered` because their Counterexample sections are proof-bearing under the schema.
- Checks run after the provenance repair: `node tools/tsx-run.mjs tools/precheck.mts` with all 33 explicit item paths: 19 phase-format items checked, 0 failing; `node tools/validate-plan.mjs research/plan-spec.json`: exit 0, with the plan reporting no item cycles, forward references, B-page dependencies, or unresolved IDs among listed pages; `node tools/content-policy.mjs research/frontier-32-batch-11.pages.json`: 33 scoped items, 0 errors, 0 warnings; `node tools/proof-contract.mjs research/frontier-32-batch-11.proof-contracts.json --strict`: 19/19 checked, 0 errors, 0 warnings. A whole-repository `depcheck --quiet` still reports unrelated historical corpus errors; its only Batch-11 findings were the six example proof-provenance values, repaired before the focused reruns.
- Blockers: none for this batch.
