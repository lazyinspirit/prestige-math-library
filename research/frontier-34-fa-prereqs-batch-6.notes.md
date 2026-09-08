# frontier-34-fa-prereqs — beta batch 6

**Disposition: BLOCKED / NOT READY FOR SPLICE OR AUTHORING.** The two inventories are reviewable proposals, not certificates of source or dependency closure. Missing supplier statements, unverified source bytes, and the semantic closure obligations below are fatal. No useful designed result was removed to make a check pass.

## Scope and controlling instructions

Read `CLAUDE.md` fully, then `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/tasks/beta-batch.md`, the generated batch task, the current four-page manifest, current plan, and owned evidence. The task authorizes writes only to this batch's `.pages.json`, `.coverage.json`, and `.notes.md`. Published content, other manifests, the prose designs and `research/plan-spec.json` were not edited. Temporary scripts and check outputs are in `/tmp`; durable findings are recorded here. No subagents were used.

Live-run evidence is `.autopilot/frontier-34-fa-prereqs/status.md`, which reports the running Step 1 scaffold dispatch with batches 1–9 in flight. The status file was read, not changed. HEAD was `12927d03a` (`plan: add frontier prerequisite scaffolds`), preceded by `63957468e` and `4501527a0`. No concluded RESUME file was treated as live-run authority. Other batches changed during this work; the final supplier snapshot supersedes the initial observation that all their inventories were empty.

Controlling design: `research/plan-functional-analysis-track.md`, full FA-18 and FA-19 sections (approximately lines 1324–1475), together with its conventions, source ledger and choice/scope warnings. The line-46 mention locates FA-18 through the track index; it is not itself a design section. Also read `research/plan-representation-theory-groups-track.md` §2 (approximately lines 111–152, including the line-146 mention): it explicitly treats Gelfand theory as an external FA supplier for the abelian comparison and assigns the FA development to the FA track. It therefore does not enlarge either pair into general representation theory.

The current plan controls orders and page requires. Kept exactly:

| Page | Order | Requires |
| --- | --- | --- |
| Gelfand A | 288.081 | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples`, `tychonoff-embedding-and-stone-cech` |
| Gelfand B | 288.082 | Gelfand A |
| Continuous calculus A | 288.083 | Gelfand B |
| Continuous calculus B | 288.084 | Continuous calculus A |

All four pages remain in `functional-analysis`, with their original companions. Design shorthand FA-13/17/18 is resolved through the plan's transitive requires, not by changing the explicit prerequisite lists.

## Changes and design conflicts

- Gelfand: all 28 designed A items and all 14 B items preserved. Added nine prerequisite items in proof order: the closed-ideal Banach quotient, evaluation characters on C(K), the exponential-growth scalar lemma for GKZ, extreme points of C(K)*, zero-set filters, their maximal-ideal correspondence, their Stone–Čech correspondence, Boolean-algebra/filter definitions, and Boolean-ultrafilter extension from compact products. Total A **37**, B **14**.
- Continuous calculus: all 20 numbered A items, the additional covariance remark, and all seven B items preserved. Added B(H)'s C*-identity, the polynomial isometry, spectral permanence, the character-space/operator-spectrum homeomorphism, and the two-dimensional numerical-range lemma. Total A **26**, B **7**.
- All **84** items have explicit arrays, including empty `deps`. New IDs were checked against the plan and published files by manifest-only content policy; that gate found missing dependencies, not ID collisions. A topological ordering check also verifies earlier local proof order. Both A inventories are below the plan's 60-item limit; no padding or split is needed.
- The design's claim that general Stone–Weierstrass is still an empty planned slot is stale. `thm-complex-stone-weierstrass-self-adjoint` is published and was read. It covers general compact Hausdorff spaces, not just the real compact-metric theorem. The current plan's `stone-weierstrass-general` inventory has 18 items.
- The design treats MT-20/RMK as planned. The current plan has 36 items there, and `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals` is published. Its complete statement and proof were read: finite regular complex measures represent bounded C0 functionals isometrically. Its real decomposition and variation machinery still need full transitive semantic verification for the extreme-point argument.
- The design's assertion that the published ultrafilter page proves the BPI equivalence is inaccurate. `thm-ultrafilter-lemma` assumes **AC** and proves set-filter extension with Zorn. Its weaker-choice/independence discussion is orientation, not a supplier. The added Boolean extension lemma instead assumes the published compact-Hausdorff Tychonoff/UFT interface and proves the Boolean bridge with finite Boolean assignments in `{0,1}^B`. No stronger equivalence or independence assertion is imported.
- The published LCH cutoff theorem explicitly assumes **DC**, and quotient completeness explicitly assumes **Countable Choice**. Indexing approximate units by all admissible functions avoids a simultaneous selection of bumps but does not erase the cutoff's DC cost. Gelfand–Kolmogorov's proposed Urysohn route likewise inherits that cost. Any BPI-only claim for that implementation remains blocked until an earlier weaker-cost replacement is proved; the designed theorem itself is retained.
- Positive square roots and polar decomposition have been moved after their actual calculus/partial-isometry inputs. General composition is after normal calculus, since complex-valued f(T) need not be self-adjoint. The proof uses polynomial approximation and continuous scalar roots, never Borel calculus or PVMs.
- `def-orthogonal-projection` resolves on disk but defines only a finite-dimensional projection. It is inadequate for arbitrary closed Hilbert subspaces. The manifest no longer uses that ID to justify infinite-dimensional projections: their definition is made inline from the still-missing closed-subspace Hilbert decomposition theorem.
- Nonzero unital algebras and nonzero Hilbert spaces are used for nonempty spectra. The zero-algebra/empty-space convention is explicitly separated. In particular the multiplier-norm formula on the zero algebra is not a norm on its algebraic unitization; its unitization is treated separately as C.

No additional A/B pair beyond the already planned prerequisites was found necessary: all newly isolated local machinery fits these two A pages. Missing Hilbert geometry and Banach-valued integration already have planned A/B homes. They must be completed by their authorized writers, not duplicated here. If further semantic auditing reveals a genuinely new pair, its full title/category/order/prerequisites and A/B inventory must be added by an authorized prose/plan writer before these consumers can advance.

## Critical proof interfaces

1. **Characters and ideals.** Complex, associative, unital Banach algebra with normalized nonzero identity. A character is initially algebraic; its value on an element is spectral, proving boundedness. Commutativity is required for principal proper ideals and the maximal-ideal/character correspondence. Quotient completeness plus Gelfand–Mazur needs the quotient to be a Banach division algebra. Character existence spends AC through the explicit maximal-ideal proof; Alaoglu proves compactness of the already specified character set, not existence.
2. **Gelfand isometry and surjectivity.** Normal spectral radius is proved by dyadic powers. Characters preserve * by the estimate on a+it for self-adjoint a; this avoids using the later real-spectrum calculus theorem. The Gelfand range is closed by isometry, self-adjoint, unital and point separating. Exactly those hypotheses fit published complex Stone–Weierstrass.
3. **GKZ.** The statement is for any complex unital Banach algebra, not just commutative ones. Boundedness must be proved rather than assumed. The scalar zero-free entire-function lemma and the commutator-square identity complete the noncommutative kernel-ideal argument. The entire logarithm and Banach exponential/series-product interfaces still need the final precise dependency audit.
4. **Banach–Stone.** Surjective linear isometry over the same real or complex scalar field, compact Hausdorff spaces, continuous sign/unimodular weight. The RMK/extreme-point route is retained. No Krein–Milman existence theorem is necessary; both directions of the dual-ball extreme-point characterization must be proved. Continuity of the recovered map is tested against all continuous functions; applying the inverse isometry proves that it is a homeomorphism.
5. **Gelfand–Kolmogorov.** Real C(X) includes unbounded continuous functions for Tychonoff X. The formula is `M_p={f : p in closure_betaX Z(f)}`. It is not evaluation at p of an arbitrary unbounded real-valued extension. Added z-filter machinery discharges the original paper's cited prerequisite instead of treating its citation as a local lemma. A stronger hull-kernel homeomorphism requires the explicitly mentioned closed-base verification.
6. **Nonunital theory.** Algebraic unitization first, faithful complete C*-multiplier norm next, then removal of the quotient character and the C0 identification. A generic sum norm on A⊕C is not the C*-norm. For arrows, proper means images of every approximate unit are approximate units. To restrict a map of compactifications and retain properness, verify that only infinity maps to infinity; mere restriction of a proper map does not prove this.
7. **Continuous calculus.** Verify B(H) is C* before applying the normal norm lemma. Self-adjoint polynomial isometry uses ambient polynomial spectral mapping. Williams's spectral-permanence proof precedes the normal calculus and avoids circularly using it. The normal character map is injective by density in T,T*, onto by character spectrum plus permanence. Holomorphic polynomials alone are not dense on a general complex spectrum.
8. **Order, square root and polar decomposition.** Off-real and negative-real resolvent estimates precede positivity equivalence. Scalar fourth roots prove positivity of the candidate square root without assuming an operator root theorem. Uniqueness uses commutation and positivity in the generated commutative algebra. Polar uniqueness includes `ker U=ker T`; its initial/final spaces are closure ran |T| and closure ran T.
9. **Numerical range.** Complex first-linear inner product. The norm estimate is not asserted over real Hilbert spaces. The two-dimensional compression proof maps rank-one projections to a real affine image of S², equal to the image of the ball because the map to R² has nonzero kernel. Convexity does not imply closedness; multiplication by t on L2[0,1] yields (0,1).
10. **Examples and boundaries.** Disc algebra polynomial density must be proved via radial dilation/Taylor approximation; ell1(Z) convolution needs absolute rearrangement and finite-support density. The discontinuous-projection counterexample uses explicit multiplication operators and does not presuppose PVM existence. Nagata, Gerlits–Nagy–Pytkeev and Dugundji remain non-load-bearing orientation with explicit `external_refs`, never `deps`. Wiener remains FR-3's application. Covariance positivity belongs to PT-9.

## Source evidence and fatal source obligations

The coverage file records each source's live/recovered URL, original URL where relevant, exact selected locators and individual named-result dispositions. Every included/inline result points to a local item. It deliberately does not inherit the design's claims of reading entire books or chapter ranges. Author-hosted notes and the original Gillman–Henriksen–Jerison paper were read through the web tool, including the full relevant proof text where indicated.

Recovery evidence:

- Shirbisheh is **Vahid**, not Ali. The retrieved 179-page v2 has §3.1 “The Gelfand transform”, §3.2 “The continuous functional calculus”, §3.3 the categorical duality, and §3.4 problems; the design's heading descriptions are not exact locators.
- Bühler–Salamon's ETH original returned HTTP 403 through the web tool. A full 452-page copy was recovered at the university-hosted URL in coverage; `original_url` is retained. Theorem 5.54, pp.252–256, was read, including the axiom-list and polynomial-definition gaps closed during final review. Its composition axiom initially has real-valued f; the general complex-valued case is supplied after normal calculus.
- Müger's old `functionalanalysis.pdf` URL failed. The author's homepage links `FA-notes.pdf`, a 268-page text. Its current numbered results and pagination were reharvested; stale design page numbers were not reused.
- The AMS URL for Gillman–Henriksen–Jerison failed; the full nine-page original paper was read from the indexed PDF copy in coverage. §2 Theorem 1 and complete proof at pp.448–449 supply the exact real-C(X) statement. The z-filter result cited inside that proof is isolated locally and remains subject to its own proof audit.
- The search for Garrido–Jaramillo's Banach–Stone survey found repository copies, but opening the full PDF failed. Neither a search snippet nor its abstract is claimed as proof evidence. Shalit's author-hosted §2 gives the weighted-composition theorem but leaves the extreme-point and continuity steps as exercises. **A complete independent source treatment of the extreme-point measure argument is still required.**
- The exact Nagata Cp topological-ring source remains **unverified**. The retrieved Nagata 1977 paper concerns different ring/covering properties and is not substituted for this theorem. The intended statement remains explicit in the manifest.
- Gabriyelyan–Osipov, Theorem 1.3, states the complete four-way Cp equivalence and attributes it to Gerlits, Nagy and Pytkeev. Its cover convention permits X as an omega-cover member and uses a p-sequence; reconcile this with the proper-cover/infinite-family convention in the orientation item. No proof of the equivalence is claimed here.
- Dugundji's original §4.3 and Theorem 5.1 support the explicit extension and the bounded scalar norm-continuous linear extender. **They do not by themselves certify the entire stronger compact-open operator formulation in the existing ledger, nor its metamathematical choice boundaries.** That scope/evidence gap is fatal; the intended statement is retained, not weakened to pass a check.

Corrections required when adapting source proofs: Shirbisheh Lemma 3.1.10's strict exponential bound conflicts with f(0)=1; use the correct non-strict bound. Its Proposition 3.1.35 nonunital proof cannot subtract a nonzero constant inside C0(X); the scaffold uses unital evaluation plus unitization. Corollary 3.2.3's commuting-elements assertion requires additional *-commutation/normality and is not a supplier. Proposition 3.1.42's restriction step needs the infinity-fiber check above. Tressl Lemma 4.1's composition must be chi∘phi, and its compactness proof uses the filter **generated** by the finite-intersection family. The 2×2 trace parametrization uses diagonal entries with opposite signs; the local derivation checks them directly.

All source URLs failed the repository's shell fetch with DNS errors (`EAI_AGAIN` / curl code 6). The web tool's successful full-text access is distinct evidence; no byte count, hash, page-count fetch stamp or recovered archive was fabricated. URL-sweep's “no archived snapshot” text reflects failed network attempts here, not a verified absence of archives. Sources and mathematical inventories were retained. **Source fetching remains a fatal external-state blocker.**

## Dependency-closure audit limits

The audit traversed current plan page requires, every research `*.pages.json` inventory, and published item frontmatter. All discovered `deps`, `justified_by` and `forward_refs` were traversed conservatively; an orientation forward reference is not automatically a proof premise. The finite-dimensional projection mismatch demonstrates why ID resolution alone is insufficient.

The graph enumeration is not a claim that thousands of ancestor statements and proofs were semantically verified. **Complete transitive statement/hypothesis/direction/choice-strength verification remains unfinished and is a fatal readiness obligation.** In particular, forward-reference paths outside the requires closure must be individually classified as orientation or load-bearing. Four library files outside this closure contain no usable frontmatter and were skipped by the temporary parser; no published item frontmatter was skipped after correcting the parser to split YAML only on delimiter lines.

Newly arrived FA-17 supplier rows were read: normalized complex nonzero unital algebra; two-sided spectrum; norm-convergent Neumann series; Liouville plus dual separation for nonempty spectrum; polynomial mapping including constants; spectral-radius root limit; normalized Gelfand–Mazur. These are appropriately directed interfaces but remain blocked drafts with incomplete source harvest and no published proofs. The Alaoglu row from batch 1 was also read: normed-space dual ball, sigma(X*,X), compact scalar product, UFT/BPI sufficient-cost intent with inherited-cost audit explicitly outstanding.

No owned page/item names the beyond-choice catalogue as a logical supplier. The conservative Foundations traversal found no path to its page items through the checked fields. `extcheck` independently reported no hard errors. This is a graph-level result, not a substitute for the remaining load-bearing-reference and semantic audit.

## Final graph snapshot

Enumerated **202** pages in the final B page's requires closure, **385** research manifests, and **15416** item frontmatter records. Seeding all inventoried items of those pages, rather than only the owned direct dependencies, reaches **4425** distinct item IDs through the conservative three-field traversal. There are **15** unresolved IDs in that snapshot. Historical same-page inventories were inspected as evidence, not treated as published proofs.

Missing paths (the first item may be a prerequisite-page inventory root):

- `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis` → `def-hilbert-space`.
- `def-extreme-point-and-face` → `def-locally-convex-topological-vector-space`.
- `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis` → `def-orthogonality-and-orthogonal-complement`.
- `lem-orthogonal-complement-of-an-eigenspace-is-invariant` → `def-self-adjoint-positive-unitary-and-normal-operator`.
- `thm-lidskii-for-trace-class-operators` → `lem-fa5-generalized-eigenspace-trace-decomposition`.
- `thm-lidskii-for-trace-class-operators` → `lem-fa5-quasinilpotent-trace-class-has-zero-trace`.
- `lem-spectrum-of-a-self-adjoint-operator-is-real` → `lem-kernel-range-orthogonality-for-hilbert-adjoints`.
- `lem-finite-bessel-inequality` → `lem-pythagorean-theorem-and-finite-orthogonal-sums`.
- `lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums` → `thm-cauchy-schwarz-in-an-inner-product-space`.
- `thm-parseval-equivalences-for-a-complete-orthonormal-family` → `thm-double-orthogonal-complement-is-closure`.
- `thm-singular-value-decomposition-for-compact-operators` → `thm-hilbert-adjoint-properties`.
- `thm-numerical-radius-is-an-equivalent-operator-norm` → `thm-jordan-von-neumann-polarization`.
- `cor-bauer-maximum-principle` → `thm-locally-convex-continuous-dual-separates-points`.
- `thm-krein-milman-closed-convex-hull-form` → `thm-locally-convex-strict-separation`.
- `thm-toeplitz-hausdorff` → `thm-orthogonal-decomposition-by-a-closed-subspace`.

Empty supplier page inventories after searching all manifests and published page frontmatter:

- `banach-valued-integration-and-the-radon-nikodym-property`.
- `banach-valued-integration-and-the-radon-nikodym-property-examples`.
- `hilbert-space-geometry-and-riesz-representation`.
- `hilbert-space-geometry-and-riesz-representation-examples`.

Direct unpublished interfaces and available draft homes:

- `def-hilbert-space`: **no supplier inventory found**.
- `def-self-adjoint-positive-unitary-and-normal-operator`: **no supplier inventory found**.
- `def-spectrum-and-resolvent-set-in-a-banach-algebra`: `research/frontier-34-fa-prereqs-batch-5.pages.json` → `banach-algebras-spectrum-and-holomorphic-functional-calculus`.
- `def-unital-banach-algebra`: `research/frontier-34-fa-prereqs-batch-5.pages.json` → `banach-algebras-spectrum-and-holomorphic-functional-calculus`.
- `lem-kernel-range-orthogonality-for-hilbert-adjoints`: **no supplier inventory found**.
- `lem-neumann-series`: `research/frontier-34-fa-prereqs-batch-5.pages.json` → `banach-algebras-spectrum-and-holomorphic-functional-calculus`.
- `thm-banach-alaoglu`: `research/frontier-34-fa-prereqs-batch-1.pages.json` → `banach-alaoglu-goldstine-and-krein-milman`.
- `thm-gelfand-mazur`: `research/frontier-34-fa-prereqs-batch-5.pages.json` → `banach-algebras-spectrum-and-holomorphic-functional-calculus`.
- `thm-hilbert-adjoint-properties`: **no supplier inventory found**.
- `thm-jordan-von-neumann-polarization`: **no supplier inventory found**.
- `thm-orthogonal-decomposition-by-a-closed-subspace`: **no supplier inventory found**.
- `thm-polynomial-spectral-mapping`: `research/frontier-34-fa-prereqs-batch-5.pages.json` → `banach-algebras-spectrum-and-holomorphic-functional-calculus`.
- `thm-spectral-radius-formula`: `research/frontier-34-fa-prereqs-batch-5.pages.json` → `banach-algebras-spectrum-and-holomorphic-functional-calculus`.
- `thm-spectrum-is-nonempty-compact-and-norm-bounded`: `research/frontier-34-fa-prereqs-batch-5.pages.json` → `banach-algebras-spectrum-and-holomorphic-functional-calculus`.

Foundations page roots checked against the forbidden catalogue item set: `cardinal-arithmetic-and-cofinality`, `filters-and-ultrafilters`, `order-zorn-and-the-axiom-of-choice`, `ordinal-arithmetic`, `ordinals-and-transfinite-recursion`, `relations-functions-and-quotients`, `the-zfc-axioms-and-basic-set-constructions`. No paths found in this conservative traversal.

The conservative traversal reaches 146 item homes outside the page requires closure, predominantly through legacy forward-reference orientation. These are **unclassified**, not asserted to be valid logical dependencies. Representative non-example paths requiring load-bearing review:

- `def-simple-polygonal-region-and-triangulation` → `thm-polygonal-jordan-curve` → `def-plane-region-and-frontier` (home `plane-graphs-euler-and-the-five-colour-theorem`).
- `def-simple-polygonal-region-and-triangulation` → `def-polygonal-arc-and-polygon` (home `plane-graphs-euler-and-the-five-colour-theorem`).
- `def-first-countable-top` → `ex-uncountable-cantor-cube-uniformizable-not-first-countable` → `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` → `def-uniformizable-space` → `def-separated-uniform-space` (home `uniform-spaces`).
- `def-first-countable-top` → `ex-uncountable-cantor-cube-uniformizable-not-first-countable` → `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` → `lem-entourage-and-uniform-cover-dictionary` → `def-uniform-cover-space` (home `uniform-spaces`).
- `def-first-countable-top` → `ex-uncountable-cantor-cube-uniformizable-not-first-countable` → `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` → `def-uniform-space-by-entourages` (home `uniform-spaces`).
- `def-first-countable-top` → `ex-uncountable-cantor-cube-uniformizable-not-first-countable` → `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` → `def-uniformizable-space` (home `uniform-spaces`).
- `def-first-countable-top` → `ex-uncountable-cantor-cube-uniformizable-not-first-countable` → `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` → `lem-entourage-and-uniform-cover-dictionary` (home `uniform-spaces`).
- `def-first-countable-top` → `ex-uncountable-cantor-cube-uniformizable-not-first-countable` → `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` → `lem-finite-star-refinement-for-compact-hausdorff-spaces` (home `uniform-spaces`).
- `def-simple-polygonal-region-and-triangulation` → `thm-polygonal-jordan-curve` → `lem-polygonal-crossing-parity-is-locally-constant` (home `plane-graphs-euler-and-the-five-colour-theorem`).
- `def-simple-polygonal-region-and-triangulation` → `thm-polygonal-jordan-curve` → `lem-polygonal-ray-general-position` (home `plane-graphs-euler-and-the-five-colour-theorem`).
- `def-first-countable-top` → `ex-uncountable-cantor-cube-uniformizable-not-first-countable` → `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` → `lem-symmetric-entourages-form-a-base` (home `uniform-spaces`).
- `def-first-countable-top` → `ex-uncountable-cantor-cube-uniformizable-not-first-countable` → `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` → `thm-compact-hausdorff-open-cover-uniformity` (home `uniform-spaces`).
- `def-first-countable-top` → `ex-uncountable-cantor-cube-uniformizable-not-first-countable` → `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` (home `uniform-spaces`).
- `def-simple-polygonal-region-and-triangulation` → `thm-polygonal-jordan-curve` (home `plane-graphs-euler-and-the-five-colour-theorem`).
- `def-first-countable-top` → `ex-uncountable-cantor-cube-uniformizable-not-first-countable` → `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` → `thm-uniformity-induces-a-topology` (home `uniform-spaces`).

Page-closure inventory evidence (counts include known historical manifest inventories and published page membership, not a publication/readiness verdict):

| Page | Known item IDs |
| --- | ---: |
| `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | 31 |
| `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples` | 6 |
| `absolute-convergence-and-rearrangement` | 26 |
| `analyticity-liouville-and-morera` | 22 |
| `approximation-and-compactness-in-ck` | 22 |
| `arc-length-and-rectifiable-curves` | 15 |
| `areas-of-elementary-plane-figures` | 15 |
| `banach-alaoglu-goldstine-and-krein-milman` | 16 |
| `banach-alaoglu-goldstine-and-krein-milman-examples` | 7 |
| `banach-algebras-spectrum-and-holomorphic-functional-calculus` | 30 |
| `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` | 9 |
| `banach-valued-integration-and-the-radon-nikodym-property` | 0 |
| `banach-valued-integration-and-the-radon-nikodym-property-examples` | 0 |
| `bounded-linear-operators-and-quotient-spaces` | 26 |
| `bounded-linear-operators-and-quotient-spaces-examples` | 8 |
| `bounded-variation-and-riemann-stieltjes` | 37 |
| `cantor-set-baire-and-measure-zero` | 24 |
| `cardinal-arithmetic-and-cofinality` | 26 |
| `chains-antichains-sperner-and-dilworth` | 32 |
| `compact-operators-and-riesz-schauder-theory` | 25 |
| `compact-operators-and-riesz-schauder-theory-examples` | 8 |
| `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | 26 |
| `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | 8 |
| `compactness` | 31 |
| `compactness-in-metric-spaces` | 26 |
| `completeness-and-uniform-continuity` | 24 |
| `complex-differentiability-and-cauchy-riemann` | 28 |
| `complex-power-series-and-analytic-functions` | 29 |
| `congruences-and-the-chinese-remainder-theorem` | 23 |
| `connectedness` | 28 |
| `construction-of-r-via-cauchy-sequences` | 37 |
| `construction-of-r-via-dedekind-cuts` | 36 |
| `construction-of-the-natural-numbers` | 34 |
| `continuity-ivt-evt-and-uniform-continuity` | 23 |
| `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | 26 |
| `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` | 7 |
| `contour-integration` | 21 |
| `convexity` | 19 |
| `cosets-and-lagranges-theorem` | 19 |
| `countability-and-uncountability` | 19 |
| `countability-axioms-and-cardinal-functions` | 35 |
| `cyclic-groups-and-direct-products` | 6 |
| `darboux-lhopital-and-taylor` | 20 |
| `density-separability-and-convolution-in-lp` | 35 |
| `density-separability-and-convolution-in-lp-examples` | 12 |
| `determinants-of-matrices-over-a-commutative-ring` | 24 |
| `diagonalisation-and-the-minimal-polynomial` | 26 |
| `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | 26 |
| `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples` | 7 |
| `divisibility-gcd-and-bezout` | 26 |
| `dual-spaces-adjoint-operators-and-annihilators` | 31 |
| `dual-spaces-adjoint-operators-and-annihilators-examples` | 10 |
| `dual-spaces-bilinear-forms-and-inertia` | 33 |
| `eigenvalues-eigenvectors-and-the-characteristic-polynomial` | 23 |
| `equivalent-forms-of-completeness` | 22 |
| `euclidean-domains-pids-and-unique-factorisation` | 7 |
| `eulerian-and-hamiltonian-graphs` | 22 |
| `extremal-graph-theory` | 20 |
| `field-extensions-and-the-complex-numbers` | 21 |
| `filters-and-ultrafilters` | 12 |
| `finite-counting-and-binomial-coefficients` | 26 |
| `finite-dimensional-normed-spaces-and-riesz-lemma` | 16 |
| `finite-dimensional-normed-spaces-and-riesz-lemma-examples` | 7 |
| `finite-probability-and-the-probabilistic-method` | 28 |
| `finite-probability-spaces-and-random-variables` | 37 |
| `formal-laurent-series-field` | 11 |
| `foundations-of-the-real-numbers` | 39 |
| `fubini-and-change-of-variables` | 25 |
| `function-space-topologies` | 24 |
| `fundamental-trigonometric-identities` | 19 |
| `further-trigonometric-identities-and-inverses` | 6 |
| `gaussian-elimination-and-row-reduction` | 29 |
| `gelfand-theory-and-commutative-c-star-algebras` | 37 |
| `gelfand-theory-and-commutative-c-star-algebras-examples` | 14 |
| `geometric-hahn-banach-and-convex-separation` | 21 |
| `geometric-hahn-banach-and-convex-separation-examples` | 11 |
| `goursat-and-cauchys-theorem-in-a-convex-domain` | 17 |
| `graph-colouring` | 6 |
| `graphs-walks-and-connectivity` | 37 |
| `group-actions-and-cayleys-theorem` | 37 |
| `group-homomorphisms-and-the-isomorphism-theorems` | 20 |
| `hausdorff-via-the-diagonal` | 15 |
| `hereditary-and-productive-separation` | 24 |
| `hilbert-space-geometry-and-riesz-representation` | 0 |
| `hilbert-space-geometry-and-riesz-representation-examples` | 0 |
| `ideals-and-quotient-rings` | 24 |
| `improper-and-parameter-dependent-multiple-integrals` | 15 |
| `improper-integrals` | 25 |
| `incidence-algebras-and-mobius-inversion` | 26 |
| `inclusion-exclusion-and-the-pigeonhole-principle` | 21 |
| `inner-product-spaces-and-orthogonality` | 34 |
| `inverse-and-implicit-function-theorems` | 5 |
| `lebesgue-measure-on-euclidean-space` | 55 |
| `lebesgue-measure-on-euclidean-space-examples` | 13 |
| `lebesgue-stieltjes-measures-and-distribution-functions` | 22 |
| `lebesgue-stieltjes-measures-and-distribution-functions-examples` | 9 |
| `limits-of-real-functions` | 21 |
| `limsup-and-subsequential-limits` | 23 |
| `line-integrals-and-the-gradient-theorem` | 31 |
| `linear-independence-bases-and-dimension` | 20 |
| `linear-maps-rank-nullity-and-quotient-spaces` | 7 |
| `matchings-covers-menger-and-network-flows` | 26 |
| `matrices-and-the-matrix-of-a-linear-map` | 32 |
| `measurable-functions-and-simple-approximation` | 28 |
| `measurable-functions-and-simple-approximation-examples` | 12 |
| `measures-and-their-basic-properties` | 50 |
| `measures-and-their-basic-properties-examples` | 9 |
| `metric-spaces` | 28 |
| `mixed-partials-taylor-and-extrema` | 21 |
| `modes-of-convergence-egorov-and-lusin` | 33 |
| `modes-of-convergence-egorov-and-lusin-examples` | 8 |
| `monoids-groups-and-subgroups` | 29 |
| `monotone-functions-and-discontinuities` | 32 |
| `monotone-sequences-and-cauchy-completeness` | 20 |
| `nets-and-filters` | 28 |
| `non-measurable-sets-and-the-cost-of-choice` | 21 |
| `non-measurable-sets-and-the-cost-of-choice-examples` | 11 |
| `normal-subgroups-and-quotient-groups` | 18 |
| `normed-and-banach-spaces` | 20 |
| `normed-and-banach-spaces-examples` | 9 |
| `order-zorn-and-the-axiom-of-choice` | 20 |
| `ordinal-arithmetic` | 28 |
| `ordinals-and-transfinite-recursion` | 22 |
| `orthonormal-bases-parseval-and-fourier-series` | 24 |
| `orthonormal-bases-parseval-and-fourier-series-examples` | 5 |
| `outer-measure-and-the-caratheodory-extension-theorem` | 35 |
| `outer-measure-and-the-caratheodory-extension-theorem-examples` | 8 |
| `partitions-of-unity-and-paracompactness` | 25 |
| `pi-the-equivalent-characterizations` | 16 |
| `polynomial-rings-and-roots` | 44 |
| `power-series-and-real-analytic-functions` | 32 |
| `primes-and-the-fundamental-theorem-of-arithmetic` | 18 |
| `product-measures-and-the-fubini-tonelli-theorems` | 39 |
| `product-measures-and-the-fubini-tonelli-theorems-examples` | 11 |
| `properties-of-the-integral-and-the-working-ftc` | 20 |
| `radon-measures-and-the-riesz-markov-kakutani-theorem` | 36 |
| `ramsey-theory` | 21 |
| `reflexivity-and-eberlein-smulian` | 25 |
| `reflexivity-and-eberlein-smulian-examples` | 6 |
| `relations-functions-and-quotients` | 39 |
| `rings-subrings-and-integral-domains` | 29 |
| `rn-as-a-normed-space` | 22 |
| `roots-and-rational-powers` | 22 |
| `schauder-bases-approximation-and-banach-space-pathologies` | 28 |
| `schauder-bases-approximation-and-banach-space-pathologies-examples` | 7 |
| `separation-axioms` | 28 |
| `sequences-and-limits` | 18 |
| `series-and-nonnegative-tests` | 25 |
| `sigma-algebras-and-borel-sets` | 45 |
| `sigma-algebras-and-borel-sets-examples` | 16 |
| `signed-and-complex-measures-hahn-and-jordan` | 28 |
| `signed-and-complex-measures-hahn-and-jordan-examples` | 15 |
| `sine-cosine-and-the-definition-of-pi` | 16 |
| `splitting-fields` | 18 |
| `stone-weierstrass-general` | 18 |
| `stone-weierstrass-general-examples` | 8 |
| `subspaces-products-and-quotients` | 24 |
| `suprema-and-infima` | 17 |
| `symmetric-groups-and-the-sign-homomorphism` | 14 |
| `the-analytic-hahn-banach-theorem` | 13 |
| `the-analytic-hahn-banach-theorem-examples` | 6 |
| `the-baire-principles-of-functional-analysis` | 16 |
| `the-baire-principles-of-functional-analysis-examples` | 5 |
| `the-complex-exponential-and-eulers-formula` | 32 |
| `the-derivative-and-mean-value-theorems` | 19 |
| `the-determinant-of-a-linear-operator` | 20 |
| `the-duality-of-lp-and-lq` | 15 |
| `the-duality-of-lp-and-lq-examples` | 6 |
| `the-exponential-function` | 19 |
| `the-fundamental-theorems-of-calculus` | 10 |
| `the-gauge-integral-and-cousins-lemma` | 18 |
| `the-identity-theorem-and-the-open-mapping-theorem` | 25 |
| `the-lebesgue-and-riemann-integrals-compared` | 6 |
| `the-lebesgue-and-riemann-integrals-compared-examples` | 6 |
| `the-lebesgue-integral-and-the-convergence-theorems` | 45 |
| `the-lebesgue-integral-and-the-convergence-theorems-examples` | 14 |
| `the-logarithm-and-general-powers` | 26 |
| `the-lp-spaces-holder-minkowski-and-riesz-fischer` | 33 |
| `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | 19 |
| `the-maximal-function-and-lebesgue-differentiation` | 25 |
| `the-maximal-function-and-lebesgue-differentiation-examples` | 9 |
| `the-radon-nikodym-theorem-and-lebesgue-decomposition` | 20 |
| `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | 15 |
| `the-real-gamma-and-beta-functions` | 25 |
| `the-riemann-integral` | 18 |
| `the-riemann-integral-in-rn-and-jordan-content` | 30 |
| `the-structure-of-finite-abelian-groups` | 27 |
| `the-topology-of-euclidean-space` | 23 |
| `the-total-derivative` | 17 |
| `the-winding-number-and-the-global-cauchy-theorem` | 42 |
| `the-zfc-axioms-and-basic-set-constructions` | 39 |
| `topological-spaces-and-continuity` | 26 |
| `topology-of-r` | 22 |
| `trees-forests-and-spanning-trees` | 27 |
| `triangularisation-and-jordan-canonical-form` | 36 |
| `tychonoff-embedding-and-stone-cech` | 12 |
| `uniform-convergence-of-functions` | 21 |
| `urysohn-lemma-and-tietze` | 13 |
| `vector-spaces-and-subspaces` | 17 |
| `volumes-of-elementary-solids-and-solids-of-revolution` | 15 |
| `weak-and-weak-star-topologies` | 24 |
| `weak-and-weak-star-topologies-examples` | 9 |

## Checks actually run

All commands ran from the repository root. No `--write` dependency normalization, splice, authoring, publication or plan mutation was run. Final source and manifest checks were repeated only after the owned artifact changed.

### Coverage

`node tools/coverage-checklist.mjs research/frontier-34-fa-prereqs-batch-6.coverage.json --require-destination`

Exit 0. coverage-checklist: 2 page(s), 113 harvested result(s), 0 error(s), 0 warning(s)
### Whole-run dependency arrays

`node tools/manifest-deps.mjs research/frontier-34-fa-prereqs-batch-*.pages.json`

Exit 0. manifest-deps: 560 item(s), 0 normalized, 0 error(s)
### Manifest-only content policy

`node tools/content-policy.mjs research/frontier-34-fa-prereqs-batch-6.pages.json --manifest-only`

Exit 1. content-policy: 84 scoped item(s), 29 error(s), 0 warning(s)
### Plan validation

`node tools/validate-plan.mjs research/plan-spec.json`

Exit 0. Exit 0; 952 warnings; validates existing inventoried plan, with 589 pages still lacking item lists. This does not validate the unspliced owned inventory.
### External dependency gate

`node tools/extcheck.mjs --quiet`

Exit 0. Exit 0; no hard errors; 63 warnings concerning already-published unproved-material cones.
### URL liveness and archive recovery

`node tools/url-sweep.mjs --coverage research/frontier-34-fa-prereqs-batch-6.coverage.json --out /tmp/fa6-liveness-final.json --recover --fail-on-dead --timeout-ms 5000`

Exit 1. url-sweep: 0/9 live; 9 failed; 0 recoverable from the archive; 0 suspect -> /tmp/fa6-liveness-final.json
### Source backing

`node tools/source-backing.mjs --coverage research/frontier-34-fa-prereqs-batch-6.coverage.json --liveness /tmp/fa6-liveness-final.json --require-verified`

Exit 1. source-backing: 57 authored result(s) have no openable source left
### Source byte fetch and stamping attempt

`node tools/source-fetch-check.mjs --coverage research/frontier-34-fa-prereqs-batch-6.coverage.json --stamp --timeout-sec 10`

Exit 1. source-fetch-check: 0/11 source(s) fetch-verified (0 newly stamped), 11 FAILED

`git diff --check --` restricted to the three authorized paths exited 0. These scaffold artifacts are untracked, so that command is not a whitespace/content validation of their full contents.

The local Python check found no same-page/non-earlier owned dependency edges and no cross-manifest other-home collisions; all 84 deps fields are arrays. It was run against the final manifest. The broader Python graph enumeration is described above and is not a semantic proof check.

### Exact content-policy failures

The batch-only gate cannot resolve sibling draft manifests. These failures must not be fixed by removing real dependencies; six Hilbert interfaces were genuinely absent across all manifests, while the FA-17 and Alaoglu drafts were found as described above.

```text
ERROR batch-dependency-missing [def-character-and-maximal-ideal-space]: def-character-and-maximal-ideal-space depends on def-unital-banach-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-characters-on-a-unital-banach-algebra-are-continuous]: thm-characters-on-a-unital-banach-algebra-are-continuous depends on def-spectrum-and-resolvent-set-in-a-banach-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-characters-on-a-unital-banach-algebra-are-continuous]: thm-characters-on-a-unital-banach-algebra-are-continuous depends on thm-spectrum-is-nonempty-compact-and-norm-bounded, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-closed-ideal-quotient-is-a-banach-algebra]: lem-closed-ideal-quotient-is-a-banach-algebra depends on def-unital-banach-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra]: thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra depends on lem-neumann-series, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra]: thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra depends on thm-gelfand-mazur, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-spectrum-as-character-values]: thm-spectrum-as-character-values depends on def-spectrum-and-resolvent-set-in-a-banach-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-maximal-ideal-space-is-compact-hausdorff]: thm-maximal-ideal-space-is-compact-hausdorff depends on thm-banach-alaoglu, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-c-star-algebra]: def-c-star-algebra depends on def-unital-banach-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-c-star-spectral-radius-equals-norm-for-normal-elements]: lem-c-star-spectral-radius-equals-norm-for-normal-elements depends on thm-spectral-radius-formula, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-gleason-kahane-zelazko]: thm-gleason-kahane-zelazko depends on def-unital-banach-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-gleason-kahane-zelazko]: thm-gleason-kahane-zelazko depends on lem-neumann-series, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bounded-hilbert-operators-form-a-c-star-algebra]: lem-bounded-hilbert-operators-form-a-c-star-algebra depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-spectrum-of-a-self-adjoint-operator-is-real]: lem-spectrum-of-a-self-adjoint-operator-is-real depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-spectrum-of-a-self-adjoint-operator-is-real]: lem-spectrum-of-a-self-adjoint-operator-is-real depends on lem-kernel-range-orthogonality-for-hilbert-adjoints, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-spectrum-of-a-self-adjoint-operator-is-real]: lem-spectrum-of-a-self-adjoint-operator-is-real depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-order-on-bounded-self-adjoint-operators]: def-order-on-bounded-self-adjoint-operators depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-c-star-algebra-generated-by-a-normal-operator]: def-c-star-algebra-generated-by-a-normal-operator depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-isometry-coisometry-and-partial-isometry]: def-isometry-coisometry-and-partial-isometry depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-isometry-coisometry-and-partial-isometry]: def-isometry-coisometry-and-partial-isometry depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-partial-isometry-characterizations]: thm-partial-isometry-characterizations depends on lem-kernel-range-orthogonality-for-hilbert-adjoints, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-partial-isometry-characterizations]: thm-partial-isometry-characterizations depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-numerical-range-and-numerical-radius]: def-numerical-range-and-numerical-radius depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-numerical-radius-is-an-equivalent-operator-norm]: thm-numerical-radius-is-an-equivalent-operator-norm depends on thm-jordan-von-neumann-polarization, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-polynomial-calculus-is-isometric-for-self-adjoint-operators]: lem-polynomial-calculus-is-isometric-for-self-adjoint-operators depends on thm-polynomial-spectral-mapping, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-polynomial-calculus-is-isometric-for-self-adjoint-operators]: lem-polynomial-calculus-is-isometric-for-self-adjoint-operators depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-absolute-value-of-a-bounded-operator]: def-absolute-value-of-a-bounded-operator depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-polar-decomposition-for-bounded-operators]: thm-polar-decomposition-for-bounded-operators depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-toeplitz-hausdorff]: thm-toeplitz-hausdorff depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk
content-policy: 84 scoped item(s), 29 error(s), 0 warning(s)
```

### Exact source-fetch failures

```text
ERROR fetch-check-dead: gelfand-theory-and-commutative-c-star-algebras: https://arxiv.org/pdf/1211.3404 — EAI_AGAIN
ERROR fetch-check-dead: gelfand-theory-and-commutative-c-star-algebras: https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf — EAI_AGAIN
ERROR fetch-check-dead: gelfand-theory-and-commutative-c-star-algebras: https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf — EAI_AGAIN
ERROR fetch-check-dead: gelfand-theory-and-commutative-c-star-algebras: https://scispace.com/pdf/on-a-theorem-of-gelfand-and-kolmogoroff-concerning-maximal-25sdibbtka.pdf — EAI_AGAIN
ERROR fetch-check-dead: gelfand-theory-and-commutative-c-star-algebras: https://oshalit.net.technion.ac.il/2012/11/28/advanced-analysis-notes-14-banach-spaces-application-the-stone-weierstrass-theorem-revisited-structure-of-ck/ — EAI_AGAIN
ERROR fetch-check-dead: gelfand-theory-and-commutative-c-star-algebras: https://arxiv.org/pdf/2004.05321 — EAI_AGAIN
ERROR fetch-check-dead: gelfand-theory-and-commutative-c-star-algebras: https://msp.org/pjm/1951/1-3/pjm-v1-n3-p04-s.pdf — EAI_AGAIN
ERROR fetch-check-dead: continuous-functional-calculus-for-self-adjoint-and-normal-operators: https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf — EAI_AGAIN
ERROR fetch-check-dead: continuous-functional-calculus-for-self-adjoint-and-normal-operators: https://arxiv.org/pdf/1211.3404 — EAI_AGAIN
ERROR fetch-check-dead: continuous-functional-calculus-for-self-adjoint-and-normal-operators: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf — EAI_AGAIN
ERROR fetch-check-dead: continuous-functional-calculus-for-self-adjoint-and-normal-operators: https://www.math.ru.nl/~mueger/FA-notes.pdf — EAI_AGAIN
source-fetch-check: 0/11 source(s) fetch-verified (0 newly stamped), 11 FAILED
```

### Backing failures by item

Every following failure is explained by unavailable shell URL verification; coverage retains the source-to-item mapping and full URLs. This does not waive the independent content/reading gaps.

```text
source-backing: 57 authored result(s) have no openable source left
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-minimal-c-star-unitization — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: def-algebraic-unitization-of-a-star-algebra — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: lem-closed-ideal-quotient-is-a-banach-algebra — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra — backed only by https://arxiv.org/pdf/1211.3404, https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: lem-zero-free-entire-function-of-exponential-type-is-an-exponential — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-gleason-kahane-zelazko — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-maximal-ideal-space-is-compact-hausdorff — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: def-gelfand-transform — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-gelfand-transform-is-a-contractive-unital-homomorphism — backed only by https://arxiv.org/pdf/1211.3404, https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: def-jacobson-radical-and-semisimple-commutative-banach-algebra — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: lem-characters-on-a-commutative-c-star-algebra-preserve-star — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: lem-c-star-spectral-radius-equals-norm-for-normal-elements — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-nonunital-commutative-gelfand-naimark — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-commutative-gelfand-naimark — backed only by https://arxiv.org/pdf/1211.3404, https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: def-approximate-unit-and-proper-c-star-morphism — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-every-commutative-c-star-algebra-has-an-approximate-unit — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-locally-compact-gelfand-duality — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-commutative-gelfand-duality — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-characters-on-a-unital-banach-algebra-are-continuous — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: def-character-and-maximal-ideal-space — backed only by https://arxiv.org/pdf/1211.3404, https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: def-c-star-algebra — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: lem-characters-of-continuous-functions-are-evaluations — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-kernel-of-the-gelfand-transform-is-the-radical — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: lem-boolean-ultrafilter-extension-from-compact-products — backed only by https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: def-boolean-algebra-and-boolean-ultrafilter-for-stone-duality — backed only by https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: ex-stone-duality-for-a-power-set-algebra — backed only by https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: def-stone-space-and-clopen-algebra — backed only by https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-stone-representation-for-boolean-algebras — backed only by https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-stone-duality — backed only by https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: def-zero-set-filter-and-zero-set-ultrafilter — backed only by https://scispace.com/pdf/on-a-theorem-of-gelfand-and-kolmogoroff-concerning-maximal-25sdibbtka.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-gelfand-kolmogorov-for-rings-of-continuous-functions — backed only by https://scispace.com/pdf/on-a-theorem-of-gelfand-and-kolmogoroff-concerning-maximal-25sdibbtka.pdf
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: thm-banach-stone — backed only by https://oshalit.net.technion.ac.il/2012/11/28/advanced-analysis-notes-14-banach-spaces-application-the-stone-weierstrass-theorem-revisited-structure-of-ck/
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: lem-extreme-points-of-the-dual-ball-of-c-of-k — backed only by https://oshalit.net.technion.ac.il/2012/11/28/advanced-analysis-notes-14-banach-spaces-application-the-stone-weierstrass-theorem-revisited-structure-of-ck/
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: ex-banach-stone-weighted-composition-isometries — backed only by https://oshalit.net.technion.ac.il/2012/11/28/advanced-analysis-notes-14-banach-spaces-application-the-stone-weierstrass-theorem-revisited-structure-of-ck/
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: rem-gerlits-nagy-remains-selection-principle-theory — backed only by https://arxiv.org/pdf/2004.05321
ERROR backing-lost: gelfand-theory-and-commutative-c-star-algebras: rem-linear-dugundji-extension-remains-topological — backed only by https://msp.org/pjm/1951/1-3/pjm-v1-n3-p04-s.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: def-c-star-algebra-generated-by-a-normal-operator — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: lem-spectral-permanence-for-unital-c-star-subalgebras — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf, https://arxiv.org/pdf/1211.3404
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: lem-character-space-of-generated-normal-algebra-is-operator-spectrum — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf, https://arxiv.org/pdf/1211.3404
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: thm-continuous-functional-calculus-for-bounded-normal-operators — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf, https://arxiv.org/pdf/1211.3404
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: thm-spectral-mapping-for-continuous-normal-functional-calculus — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: lem-spectrum-of-a-positive-operator-is-nonnegative — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: thm-positive-square-root — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: lem-bounded-hilbert-operators-form-a-c-star-algebra — backed only by https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: thm-continuous-functional-calculus-properties — backed only by https://arxiv.org/pdf/1211.3404
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: thm-continuous-functional-calculus-for-bounded-self-adjoint-operators — backed only by https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: lem-polynomial-calculus-is-isometric-for-self-adjoint-operators — backed only by https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: def-isometry-coisometry-and-partial-isometry — backed only by https://www.math.ru.nl/~mueger/FA-notes.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: thm-partial-isometry-characterizations — backed only by https://www.math.ru.nl/~mueger/FA-notes.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: def-numerical-range-and-numerical-radius — backed only by https://www.math.ru.nl/~mueger/FA-notes.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: thm-numerical-radius-is-an-equivalent-operator-norm — backed only by https://www.math.ru.nl/~mueger/FA-notes.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: cor-normal-operator-norm-equals-spectral-radius — backed only by https://www.math.ru.nl/~mueger/FA-notes.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: def-absolute-value-of-a-bounded-operator — backed only by https://www.math.ru.nl/~mueger/FA-notes.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: thm-polar-decomposition-for-bounded-operators — backed only by https://www.math.ru.nl/~mueger/FA-notes.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: lem-two-dimensional-numerical-range-is-convex — backed only by https://www.math.ru.nl/~mueger/FA-notes.pdf
ERROR backing-lost: continuous-functional-calculus-for-self-adjoint-and-normal-operators: thm-toeplitz-hausdorff — backed only by https://www.math.ru.nl/~mueger/FA-notes.pdf
```

## Handoff obligations

1. Obtain and read the missing Hilbert and other transitive supplier statements, including their complete dependencies and choice costs; re-audit new sibling manifests rather than relying on this snapshot.
2. Complete the full semantic audit of all required ancestors and classify the conservative forward-reference paths. The enumeration above is evidence of coverage, not approval.
3. Obtain successful byte/hash source stamps in an environment where the source hosts resolve. Re-run liveness, backing and fetch checks without retiring any mathematical result.
4. Close the named full-source gaps for Banach–Stone/extreme points, Nagata, and the stronger Dugundji claim; finish the remaining design bibliography harvest and exact example/auxiliary source matches.
5. Verify all local supporting arguments, especially the Boolean finite-assignment bridge, z-filter closed-base identities, unitization norm/zero convention, scalar GKZ lemma and automatic contractivity/holomorphic-calculus compatibility. Inherit actual axiom strengths; do not use the beyond-choice ledger as a supplier.
6. Only after these fatal obligations close may an authorized writer splice this inventory. No broader access is requested by this handoff.
