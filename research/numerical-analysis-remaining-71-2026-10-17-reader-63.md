# Reader report — batch 63

Run `numerical-analysis-remaining-71-2026-10-17`; reader assignment `63`.

## Inventory opened

Pages:

- A page: `library/numerical-pdes-and-spatial-discretization/curved-mesh-geometry-and-conservative-mesh-transfer.md`
- B page: `library/numerical-pdes-and-spatial-discretization/curved-mesh-geometry-and-conservative-mesh-transfer-examples.md`

Assigned A items, read in dependency order:

- `def-intersection-volume-conservative-remapping`, `def-isoparametric-curved-cell-map`, `lem-h2-zero-boundary-p1-interpolant-conforming`
- `def-curved-domain-geometry-approximation`, `lem-curved-p1-interpolation-scaling`, `lem-isoparametric-pullback-and-surface-metric`, `thm-overlap-remap-l2-projection-conservation-positivity`
- `lem-curved-boundary-lift-residual`, `lem-isoparametric-cofactor-normal-perturbation`, `lem-isoparametric-laplace-tensor-defect`, `lem-parabolic-domain-map-approximation`, `thm-overlap-remap-error-from-approximation-and-geometry`
- `lem-curved-nvb-closure-preserves-matching-traces`, `thm-curved-isoparametric-strang-error-bound`
- `alg-certified-convex-polygon-overlap`, `thm-certified-polygon-overlap-correctness`, `alg-delaunay-seeded-curved-uniform-nvb-refinement`, `thm-curved-uniform-nvb-quality-and-termination`

Assigned B items:

- `ex-inverted-isoparametric-map-detection`, `ex-isoparametric-unit-disk-mesh`, `ex-conservative-transfer-between-moving-curved-meshes`, `ex-parabolic-curved-domain-linear-geometry-approximation`, `cex-delaunay-tetrahedral-sliver`

Opened direct suppliers and additional suppliers needed to check their stated interfaces:

- Measure and Sobolev: `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-axiom-of-choice`, `def-countable-choice`, `def-sobolev-space-wkp-and-its-norm`, `def-wkp-zero-as-a-sobolev-closure`, `def-elementary-set-in-rn`, `def-half-open-box`, `def-measure`, `thm-elementary-volume-is-well-defined`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-holder-inequality-for-integrals`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`.
- Affine and curved finite elements: `def-matching-affine-simplicial-meshes`, `lem-affine-pullback-weak-derivatives-and-scaling`, `lem-shape-regular-affine-simplex-scaling`, `thm-local-finite-element-interpolation-estimates`, `thm-lagrange-point-evaluation-threshold-on-reference-simplex`, `lem-c-k-boundary-flattening-preserves-wkp-locally`, `lem-affine-simplex-gauss-green-formula`, `lem-oriented-facet-cancellation-on-matching-meshes`, `thm-chain-rule-for-differentials-of-smooth-maps`, `thm-chain-rule-for-total-derivatives`, `lem-smooth-bump-between-concentric-euclidean-balls`, `lem-weak-leibniz-rule-with-a-smooth-factor`, `thm-reference-simplex-sobolev-extension`, `thm-higher-order-sobolev-embedding`, `thm-extension-theorem-for-bounded-smooth-domains`, `lem-zero-extension-from-w-one-p-zero`, `thm-trace-estimate-on-the-half-space`, `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`, `thm-zero-boundary-piecewise-polynomials-in-w10p`.
- Variational crime and AFEM/NVB: `def-hk-and-hk-zero-notation`, `def-variational-crime-error-framework`, `lem-w-one-two-is-a-hilbert-space`, `thm-first-strang-lemma-for-conforming-perturbed-galerkin`, `def-afem-nvb-labelled-triangulation-family`, `alg-dorfler-marking-and-conforming-nvb-refinement`, `lem-afem-nvb-conforming-closure-and-cumulative-counting`, `lem-afem-nvb-shape-regularity-and-three-generation-properties`.
- Delaunay and certified predicates: `def-indexed-geometric-site-set`, `def-planar-delaunay-voronoi-structures`, `def-three-dimensional-delaunay-and-weighted-regular-lower-hull`, `def-lexicographic-lift-tie-break`, `lem-voronoi-vertex-empty-circle`, `def-certified-geometric-predicate-determinants`, `alg-certified-dyadic-geometric-predicate`, `alg-floating-filter-for-geometric-determinants`, `alg-exact-dyadic-determinant-sign`, `lem-lifted-determinant-sign-matches-sphere-side`, `thm-certified-dyadic-geometric-predicate-sound-and-terminates`, `thm-floating-filter-sign-is-exact`, `lem-dyadic-determinant-integer-clearance-preserves-sign`, `lem-large-delaunay-supertriangle-exists`, `lem-lifted-power-sphere-determinant-identity`, `thm-lexicographic-lift-tie-break-consistent`, `lem-lifted-flip-potential-decreases`, `lem-lower-lifted-facets-cover-the-convex-hull`, `alg-incremental-planar-delaunay-edge-flips`, `thm-incremental-planar-delaunay-correctness-and-termination`.
- Also read: `def-elementary-set-in-rn`, `lem-isoparametric-pullback-and-surface-metric` and the assigned remapping/geometry suppliers listed above. The batch proof-contract file was opened as evidence and updated for the repaired item and its direct consumer.

## Repairs and evidence

1. In `items/lem-curved-boundary-lift-residual.md`, the former boxes `[-1+1/n,1-1/n)^2` and `[-1,1)^2` did not use the repository's half-open convention `(a,b]` from `def-half-open-box`, so the cited elementary-volume facts did not establish their measurability or measure. I replaced them with `(-1+1/n,1-1/n]^2` and `(-1,1]^2`. I also specified a finite matching affine triangular mesh and cellwise `C^1` maps on closed cells, then added the affine-simplex Gauss–Green and oriented-facet-cancellation suppliers for the weak-gradient argument. The only in-batch direct consumer, `thm-curved-isoparametric-strang-error-bound`, already assumes a matching triangular mesh and was checked against the repaired hypotheses. The batch proof contract was refreshed for the new dependencies, argument, and consumer citation.

2. In `items/ex-isoparametric-unit-disk-mesh.md`, I specified the sector parameter rectangle as `[-1,1]×[0,1]` with coordinates `(t,s)`. The existing proof uses exactly these bounds at its boundary and coverage steps; the construction now states its full domain.

Validation after the final item edits: `reflow.mts` completed for both changed item paths (one item was already reflowed); `precheck.mts` passed for both; the required single batched `proof-layout.mjs` run reported `2 items, 7 steps, 0 defects`. Neither changed item had a `verification.judge` record to remove.

## Uneditable dependency findings

- `def-afem-nvb-labelled-triangulation-family`, Definition first paragraph: the sentence ends “...a complete common facet. with labels on its edges...”. This is ill-formed prose in an uneditable current-run supplier; correct the sentence boundary/capitalization. It does not change the otherwise stated labeling convention. Assigned consumer whose dependency closure reaches it: `alg-delaunay-seeded-curved-uniform-nvb-refinement`. Current source SHA-256 at split: `c375eea3f5e688d09a96038b7ae27ddea1584559f6308706024181b184794dcd`.
- `alg-dorfler-marking-and-conforming-nvb-refinement`, Definition pending-leaf loop: it chooses the pending leaf with least stable identifier, then replaces split leaves by children, but gives no identifier rule for those generated children. The order required by later loop iterations is therefore not defined from the stated input. Add a deterministic child-ID rule or an explicit stable order covering every descendant cell. Assigned consumer: `alg-delaunay-seeded-curved-uniform-nvb-refinement`. Current source SHA-256 at split: `b30cf9d3933b0961155349636f9d7b0eda44df3f852aa5b2afae6672d049e078`.

## Page verdicts

- `curved-mesh-geometry-and-conservative-mesh-transfer`: the assigned mathematical items and summary are sound after the boundary-lift repair. The page's seeded refinement result still needs the two current-run AFEM/NVB dependency fixes above before its complete algorithm path is fully specified.
- `curved-mesh-geometry-and-conservative-mesh-transfer-examples`: pass after the sector-domain clarification; the remaining overlap, inverted-map, parabolic-map, and tetrahedral-sliver calculations checked out.

## Sources and blocker

For the NVB chain and cumulative-complexity argument, I read the relevant sections of Bonito, Canuto, Nochetto, and Veeser, *Adaptive Finite Element Methods* (2024), §§8.1.1–8.1.3, especially the recursive refinement and allocation arguments, [source PDF](https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf). For planar Delaunay insertion, edge legalization, and the enclosing-triangle caveat, I read David Mount, *CMSC 754 Computational Geometry*, Lecture 13, pp. 79–83, [lecture notes](https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf). The remaining finite geometry and matrix estimates were checked directly from the displayed formulas and their opened local supplier statements.

No batch-local blocker. The run status was `running`, with no item in flight; the run-wide stage report showed no current blocker.
