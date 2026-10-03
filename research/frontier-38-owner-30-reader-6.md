# Reader 6 — batch 6, frontier-38-owner-30

Independent Step 5a review of the current authored carriers. Both pages and all 28 assigned items were opened, with suppliers before consumers. The 104 original external direct-dependency Statement/Definition interfaces were opened before assigned proofs; the additional complex-completeness supplier was opened before using it in repairs. This is a mathematical reader report, not a judgment, audit stamp, publication decision, or gate certification.

Read CLAUDE.md fully, README.md, SCHEMA.md, WORKFLOW.md, briefs/reader.md and the exact batch manifest. The disk status command identified the active run at Step 5a; it was checked again during work. No rendered bundle path was supplied or identified in the scoped current-artifact search, so current Markdown and exact source passages were used. The manifest and old proof contracts were evidence only. Oversized initial outputs were continued at the missing sections; they were not treated as evidence of absence.

## Opened pages and verdicts

| Page | Reader verdict |
| --- | --- |
| `library/fourier-analysis/fourier-restriction-and-the-stein-tomas-theorem.md` | Repaired. The endpoint proof now has a positive-measure TT* interface, justified duality and endpoint range, and correct geometric and source conventions. The summary now describes a separate multidimensional stationary-phase argument, finite graph localization rather than the Knapp computation as the transfer mechanism, and a paraboloid Strichartz comparison. No unresolved defect found in the reviewed current content. |
| `library/fourier-analysis/fourier-restriction-and-the-stein-tomas-theorem-examples.md` | Assigned items repaired. B-page prose was opened and checked but not edited. Its cap scales, normal-direction flat obstruction and circle exponents agree with the repaired items. No unresolved prose defect found. |

## Edits and mathematical evidence

All edits are confined to the 28 assigned draft items, the assigned A-page prose, this batch's proof contracts and the task report/findings. No item was withdrawn, no published carrier or other batch was edited, and no plan or verification judgment was changed or created. Source locators were corrected throughout the assigned batch; unusable Wolff references and unrelated Tao locators were replaced by retrieved, relevant primary teaching sources. PyYAML serialization changed frontmatter formatting as well as these fields.

| Item | Repair and evidence |
| --- | --- |
| `def-euclidean-hypersurface-normal-shape-operator-and-curvature` | Fixed the domain of a **local** unit normal to a relatively open subset; explicitly set n≥2 and named the graph/localization well-definedness supplier in `justified_by`. Datar's shape and curvature definitions are different numbered definitions; both are now located correctly. |
| `lem-fourier-pairing-for-a-finite-measure-and-schwartz-data` | Corrected the absolute-integral bound for q(z,ω)=e^(2πiz·ω)F(x−z): it is exactly ||F||₁|μ|(Rⁿ), without the spurious factor ||Fhat||∞. Added the precise Schwartz-transform supplier and explained complex-measure Fubini by absolute-integral approximation. The published positive-measure Fubini theorem alone does not literally have a complex product measure as its hypothesis. |
| `lem-unit-sphere-is-lebesgue-null` | Replaced inaccurate external locators. The existing complete polar-coordinate proof is retained; its exceptional radius has zero one-dimensional measure. |
| `lem-sphere-finite-graph-charts-and-surface-density` | Fixed parameter coordinates after inserting the i-th graph coordinate (there are n−1 parameters). Corrected the n=2 conclusion: the Hessian is −ε(1−|y|²)^(-3/2), not the constant −ε. The earlier determinant calculation supplies the evidence. |
| `lem-van-der-corput-oscillatory-integral-estimate` | Replaced the invalid cutoff/induction argument. The old k=2 proof produced a term independent of λ and then called it O(λ^-1/2); it also assumed a derivative bound on a whole interval from a hypothesis only on disconnected support. The new proof establishes interval bounds by monotone Stieltjes integration and threshold induction, then integrates against bounded primitives on components of {a≠0}. It gives the stronger amplitude bound Ck λ^(-1/k)||a′||₁. The pure-phase interval is explicitly bounded, avoiding an undefined integral over arbitrary unbounded J. Removed the unused AC/DC integration supplier and corrected the overbroad variation assertion. Precheck's canonical renumbering was adopted. |
| `lem-smooth-euclidean-hypersurface-graph-and-localization` | Made the n≥2 convention explicit and corrected/qualified geometric source locators. The local inverse bootstrap, graph construction, Weingarten derivation and finite bump localization were checked and retained. |
| `def-fourier-restriction-and-adjoint-extension-operators` | Corrected the source locator to the actual restriction/extension section; mathematical definitions were checked and retained. |
| `lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase` | Corrected the title to refer to a compactly supported **amplitude**, not phase. Quantitative constants now include support diameter and localization radius, as the source's uniformity paragraph requires. Clarified λ>0 in the nonstationary bound and the gradient lower bound on the amplitude support. Its dyadic-annulus proof and centered derivative estimates were checked; incorrect one-dimensional Tao theorem locators were replaced by the actual multidimensional lemmas. |
| `lem-spherical-cap-and-dual-slab-scales` | Treated δ=1 correctly: C₁ is the closed upper hemisphere, not the whole sphere, and its equator is omitted only after a chart/Tonelli nullity argument. Removed the false strict inequality 1−δ²>0 at that endpoint. The displayed integral is interpreted on the open parameter ball at δ=1. The two-sided scales, diameter and exact box volume remain valid. |
| `lem-restriction-and-extension-estimates-are-dual` | Replaced circular use of the Lp norm-duality formula before Eg∈Lp′ was known. Fubini directly proves the pairing for every g∈L²(σ); compact norm tests and monotone convergence establish Eg integrability. This removes the unsupported passage from continuous surface functions to ambient Schwartz restrictions and the surface-density supplier requiring DC. Corrected the conclusion from an ambient Hilbert L² adjoint to the actual Lp–Lp′/surface-L² adjoint pairing. Added complex completeness for dense extension. |
| `lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph` | Corrected the Datar locator: Example 8.2.2 concerns induced metrics, not the graph shape operator. The local computation GA=D²h/b and the determinant formula were checked and retained. |
| `lem-stationary-phase-decay-for-spherical-surface-measure` | Fixed the rotated integral and the nonpolar chart phase: it is the surviving last parameter coordinate, not εyi. Added an explicit polar cutoff/add-and-subtract bump treatment when the critical point is not interior to an amplitude's support. Corrected the factor needed to pass from |ξ|^-a to (1+|ξ|)^-a and the source locator. |
| `lem-cap-wave-packet-has-dual-tube-concentration` | The stated tube uses a tangential Euclidean **ball**, so it is a cylinder, not a coordinate box. The proof now states the inscribed box with tangential half-width divided by √(n−1). The phase coherence estimate itself is valid and retained. |
| `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform` | Restricted the norm identity to finite **positive** Borel measures. For μ=−δ₀ and Fhat(0)≠0 the old complex-measure equality has a negative right side and positive left side. Integral brackets are explicitly absolutely convergent pairings, with no false ambient L² membership assertion. Hölder is used when the convolution norm is finite; the infinite-norm case is automatic. Direct surface consumers all use positive σ and were checked. |
| `lem-localized-curved-patch-measure-transform-decay` | Corrected external locators. Checked finite critical-point localization, parameter-uniform inverse-Hessian bounds, add/subtract bump treatment, and the general intrinsically compact-support clause; the proof was retained. |
| `thm-knapp-necessary-condition-for-spherical-ltwo-restriction` | The coordinate box is now inside the cylinder, using c=1/(100√(n−1)). Corrected the scale constant and stated p,q∈[1,∞]. Treated q=∞ and p=1 separately; at p=∞, compact smooth tests against cap extension imply an impossible L¹ extension bound. The finite-p duality supplier is no longer applied at infinity. |
| `lem-compact-curved-hypersurface-finite-graph-cover` | Corrected geometric source locators. Checked that local normal reversal preserves nonvanishing and that its proof can be used with local normals; the compact corollary's proof uses the local construction rather than assuming the lemma's extra global-normal hypothesis. |
| `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds` | Corrected the false comment that K(·,t) need not be L²: for fixed t its smooth compactly supported Fourier symbol makes K Schwartz. Made Fubini's absolute-integral bound explicit and justified compatibility on the finite simple interpolation core by simultaneous L¹/L² smooth approximations. Corrected the locator's L∞→L∞ typo to the actual L¹→L∞ dispersive route. |
| `rem-the-general-fourier-restriction-problem` | Replaced unavailable/unrelated source references by exact retrieved conjecture and status passages. Corrected the dimension-two attribution to Fefferman and Zygmund. The remark stays recorded and non-load-bearing. |
| `lem-stein-tomas-tt-star-bound-from-fractional-integration` | Corrected the kernel comparison at the diagonal: the published Riesz kernel has value zero there, so comparison is off the single null diagonal point. Added Fubini and the Schwartz slice-norm decay that makes Minkowski's norm integral finite before applying it. The one-dimensional HLS order, strict exponent range and conjugacy were checked. |
| `thm-stein-tomas-spherical-restriction-theorem` | Removed incorrect interpolation powers and reversed endpoint weights; integrated the elementary Lq/Lq₀/L∞ inequality directly. Handled p=1 by its own transform bound and dense extension. Corrected ambient L²-adjoint terminology and explained rigid graph-coordinate transfers. Removed the false contract assertion that sphere chart Hessians are constantly ±I; only their values at the poles are ±I. |
| `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature` | Added the p=1 density/completeness argument and rigid-motion norm transfers. Corrected the endpoint interpolation interface and source locations. No global normal hypothesis was introduced. |
| `rem-restriction-estimates-and-the-missing-strichartz-interface` | Removed the false assertion that the spherical theorem is the homogeneous Schrödinger estimate. Recorded the paraboloid interface, exact admissibility equation, p>2 and Schwartz-data hypotheses of Williams's nonendpoint theorem. Updated `external_dependency.exact_statement`; no endpoint PDE theorem is claimed. |
| `cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise` | Propagated Countable Choice and n≥2 into the displayed claim and corrected source location. Checked the explicit null-set representative witness. |
| `ex-knapp-cap-and-tube-volume-calculation` | Restricted c so the slab lies in the concentration cylinder; propagated Countable Choice/n≥2. Reversed the erroneous power inequality: the lower extension power must be bounded by the input power. Kept the exact slab volume and the q=∞ lower bound. |
| `cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay` | Propagated Countable Choice/n≥2; removed the unsupported distributional-transform aside. Added a smooth nonzero compact density to meet the actual localized-decay hypothesis (the sinc indicator is not smooth), a positive-measure tangential ball/Tonelli argument for finite-q failure, and a compact smooth hypersurface with a flat patch to test the compact corollary as well. |
| `ex-circle-stein-tomas-exponents` | Propagated Countable Choice into the example/Given and corrected the source locator. Verified 6/5, 6, conjugacy and 2/3 directly. |
| `cex-knapp-rules-out-extension-below-the-tomas-exponent` | Restricted the exponent to 1≤q<q₀ and declared Countable Choice. Used an actual inscribed coordinate box and a correct explicit inequality constant rather than the old inaccurate equality “up to constants.” Treated the p=∞ conclusion through the repaired Knapp theorem. |

The affected proof contracts were updated with current exact supplier sections, current proof rows and inputs, corrected endpoint/choice/geometric boundaries, and current citation uses. Incorrect historical proof rows were not retained as evidence. The two definitions and two recorded remarks retain no proof-row contract. No `verification.judge` record remains on any assigned item (there was no need to create a judgment).

## Retrieved source evidence

- [Tao, Lecture Notes 8](https://www.math.ucla.edu/~tao/247b.1.07w/notes8.pdf): complete Lemmas 2.4–2.5 and their proofs, printed p.5, resolve the interval threshold induction; Lemmas 3.1–3.3 and the uniformity/derivative discussion, pp.9–12, resolve stationary phase and the dependence on support diameter; the complete sphere argument, §4 pp.12–13, gives graph density and decay. Section 5, p.14, identifies the null-set support of spherical averages. The notes do not contain the claimed Knapp computation at the old locators.
- [Williams, Notes on harmonic analysis](https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf): Lemma 11.2 and its complete proof, pp.70–71; Proposition 11.3 and its complete proof, p.71; the complete endpoint proof, §11.3 pp.72–73, equations (11.10)–(11.17). These were read through the final fractional-integration exponent calculation. Definition 11.5 and Theorem 11.6, p.74, provide the recorded nonendpoint PDE hypotheses; formula (11.21) identifies paraboloid extension. The PDE theorem is recorded rather than independently reproved.
- [Merz, Some notes on restriction theory](https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf): §1 p.4 covers the equivalence-class obstruction; §2 pp.5–7 covers duality; the complete spherical Knapp calculation in §3.2 p.8 yields the necessary exponents; Conjecture 3.2 p.8 states the L∞-density conjecture; Proposition 3.5 and its proof in §3.4 p.10 address flat patches. The local proofs correct technical gaps rather than treating these notes as verdicts.
- [Datar, Riemannian geometry lectures](https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf): Definition 14.2.1 and Corollary 14.2.2, p.104, fix the shape/Weingarten sign; Example 14.2.4, p.105, relates the second fundamental form to a level-set Hessian; Definition 14.2.7 and Remark 14.2.8, p.106, fix curvature and normal reversal. Example 8.2.2 is about induced metrics and cannot serve as the claimed graph-shape locator.
- [Lebl, Basic Analysis II §8.5](https://www.jirka.org/ra/html/sec_svinvfuncthm.html): Theorem 8.5.1 gives the inverse derivative formula. The finite adjugate smooth bootstrap was checked locally; it was not falsely attributed as a separately stated theorem in that section.
- [Hunter, PDE notes](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf): §1.10.2 pp.14–16 gives the Gram density and partition patching; §1.10.3 p.16 gives the graph normal/density. The full relevant surface passage was opened. The former §1.10.1 “polar/null slice” attribution was inaccurate and was removed.
- [Jaming–Iosevich–Mayeli](https://arxiv.org/pdf/2502.13786): §4, Conjecture 4.1 and its following paragraph, p.16, provide the spherical conjecture, dimension-two attribution and higher-dimensional open-status statement; Theorem 4.2 p.17 states the L² line. This supports the recorded orientation; no proof of the open conjecture is invented.

The original Wolff URL failed twice; its personal.math UBC alternative failed once, a Rochester search hit opened as HTML rather than the PDF, and the editor's PDF link failed. No Wolff full-text reading is claimed. After these attempts, relevant retrieved alternatives were used and the unusable exact locators removed from assigned items. No uncertainty in the repaired local arguments was left dependent on that unavailable PDF.

## Validation

- Reflow ran over all 28 changed item paths; no paragraph changes were needed. It was rerun on the last two edited proofs.
- Precheck: all 24 proof-bearing items pass; the two definitions and two recorded remarks are not applicable. One canonical step renumbering in van der Corput was adopted, then checked again.
- Strict batch proof-contract check: **28/28**, zero errors and warnings. A source theorem number accidentally parsed as a local step was rewritten in the contract prose; the final check passed.
- Rendering: **30 files** (all 28 assigned items and both pages), no YAML, wikilink-in-math or KaTeX defects in the check. After the final source-locator correction, rendering was repeated on all 28 changed items and passed; both unchanged B prose and repaired A prose had passed the earlier 30-file run.
- After the final item edit and formatter, the required final batched `node tools/proof-layout.mjs items/<id>.md ...` command covered all **28 changed paths, 114 proof steps, zero defects**. No item was edited afterward.

## Remaining findings, blockers and limits

No uneditable defect was confirmed or remains suspected in the assigned pages/items or the supplier interfaces actually used. No withdrawal is proposed. There is no review blocker.

This review opened dependency interfaces and the proofs needed for the assigned arguments; it is not a fresh recursive audit of every published proof in the foundational transitive closure. It does not prove the general restriction conjecture or audit the full Strichartz theorem. Current open-status evidence comes from the retrieved primary paper/notes, not a claim to have surveyed all research through the review date. All tool passes above are local format/contract checks and are not independent mathematical acceptance.

## Opened item inventory (dependency order)

- `items/def-euclidean-hypersurface-normal-shape-operator-and-curvature.md`
- `items/lem-fourier-pairing-for-a-finite-measure-and-schwartz-data.md`
- `items/lem-unit-sphere-is-lebesgue-null.md`
- `items/lem-sphere-finite-graph-charts-and-surface-density.md`
- `items/lem-van-der-corput-oscillatory-integral-estimate.md`
- `items/lem-smooth-euclidean-hypersurface-graph-and-localization.md`
- `items/def-fourier-restriction-and-adjoint-extension-operators.md`
- `items/lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase.md`
- `items/lem-spherical-cap-and-dual-slab-scales.md`
- `items/lem-restriction-and-extension-estimates-are-dual.md`
- `items/lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph.md`
- `items/lem-stationary-phase-decay-for-spherical-surface-measure.md`
- `items/lem-cap-wave-packet-has-dual-tube-concentration.md`
- `items/lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform.md`
- `items/lem-localized-curved-patch-measure-transform-decay.md`
- `items/thm-knapp-necessary-condition-for-spherical-ltwo-restriction.md`
- `items/lem-compact-curved-hypersurface-finite-graph-cover.md`
- `items/lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds.md`
- `items/rem-the-general-fourier-restriction-problem.md`
- `items/lem-stein-tomas-tt-star-bound-from-fractional-integration.md`
- `items/thm-stein-tomas-spherical-restriction-theorem.md`
- `items/cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature.md`
- `items/rem-restriction-estimates-and-the-missing-strichartz-interface.md`
- `items/cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise.md`
- `items/ex-knapp-cap-and-tube-volume-calculation.md`
- `items/cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay.md`
- `items/ex-circle-stein-tomas-exponents.md`
- `items/cex-knapp-rules-out-extension-below-the-tomas-exponent.md`

## External dependency interfaces opened

The following original 104 external suppliers were opened at their Statement/Definition interfaces.

- `items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md`
- `items/cor-determinant-is-alternating-multilinear-in-the-rows.md`
- `items/cor-determinant-vanishes-with-a-zero-or-repeated-column.md`
- `items/cor-finite-nonnegative-integral-implies-finite-almost-everywhere.md`
- `items/cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime.md`
- `items/cor-multivariable-taylor-formula-with-peano-remainder.md`
- `items/cor-newton-leibniz-with-finitely-many-exceptional-points.md`
- `items/cor-real-spectral-theorem-for-self-adjoint-endomorphisms.md`
- `items/cor-riemann-stieltjes-agrees-with-riemann.md`
- `items/cor-riemann-stieltjes-existence-bv-continuous.md`
- `items/cor-riemann-stieltjes-integral-bound.md`
- `items/cor-schwartz-convolution-and-product-transform-laws.md`
- `items/cor-second-order-taylor-expansion-with-the-hessian.md`
- `items/cor-sine-and-cosine-are-one-lipschitz.md`
- `items/cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover.md`
- `items/cor-trigonometric-parity-and-pythagorean-identity.md`
- `items/cor-volume-of-a-radius-r-n-ball.md`
- `items/def-adjoint-of-a-linear-map-between-inner-product-spaces.md`
- `items/def-bounded-variation-and-total-variation.md`
- `items/def-ck-and-multi-index-notation-in-several-variables.md`
- `items/def-complex-l-two-inner-product.md`
- `items/def-complex-lp-and-euclidean-test-function-conventions.md`
- `items/def-complex-measure.md`
- `items/def-conjugate-exponents.md`
- `items/def-convolution-of-two-functions-on-rn.md`
- `items/def-countable-choice.md`
- `items/def-determinant-of-a-linear-operator.md`
- `items/def-embedded-submanifold-and-slice-chart.md`
- `items/def-integral-over-a-measurable-set.md`
- `items/def-integration-against-a-signed-or-complex-measure.md`
- `items/def-jacobian-matrix-and-gradient.md`
- `items/def-multivariable-taylor-polynomial.md`
- `items/def-nonnegative-lebesgue-integral.md`
- `items/def-partition-of-unity-subordinate-to-a-cover.md`
- `items/def-polar-surface-measure-on-the-unit-sphere.md`
- `items/def-radon-measure-on-an-lch-space.md`
- `items/def-riesz-potential-of-order-alpha.md`
- `items/def-schwartz-space-and-its-seminorms.md`
- `items/def-smooth-manifold.md`
- `items/def-smooth-partition-of-unity-subordinate-to-an-open-cover.md`
- `items/def-surface-integral-on-a-compact-c-one-hypersurface.md`
- `items/def-total-derivative-in-euclidean-space.md`
- `items/lem-cauchy-reals-archimedean.md`
- `items/lem-complex-lp-duality-from-real-lp-duality.md`
- `items/lem-euclidean-chart-measure-agrees-with-polar-surface-measure.md`
- `items/lem-power-laws.md`
- `items/lem-riesz-thorin-bound-on-the-finite-simple-core.md`
- `items/lem-schwartz-cutoffs-from-the-standard-smooth-step.md`
- `items/lem-schwartz-functions-and-all-derivatives-are-integrable.md`
- `items/lem-schwartz-space-is-dense-in-l-two.md`
- `items/lem-surface-integral-is-independent-of-c-one-boundary-charts.md`
- `items/prop-countable-subsets-of-rn-are-lebesgue-null.md`
- `items/thm-algebra-of-derivatives.md`
- `items/thm-algebra-of-total-derivatives.md`
- `items/thm-arithmetic-and-lattice-operations-preserve-measurability.md`
- `items/thm-borel-products-of-euclidean-spaces-are-euclidean-borel.md`
- `items/thm-bounded-linear-operator-equivalences.md`
- `items/thm-c-c-infinity-rn-is-dense-in-l-p-of-rn.md`
- `items/thm-c-c-is-dense-in-l-p-for-radon-measures.md`
- `items/thm-chain-rule-for-total-derivatives.md`
- `items/thm-complex-holder-minkowski-and-the-quotient-norm.md`
- `items/thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation.md`
- `items/thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz.md`
- `items/thm-composition-with-borel-functions-preserves-measurability.md`
- `items/thm-continuous-preimages-of-borel-sets-are-borel.md`
- `items/thm-determinant-multiplicative.md`
- `items/thm-determinant-of-transpose.md`
- `items/thm-differentiation-under-the-integral-sign.md`
- `items/thm-dominated-convergence.md`
- `items/thm-euclidean-heine-borel-pseudocompactness-and-extreme-values.md`
- `items/thm-euclidean-implicit-function-theorem.md`
- `items/thm-euclidean-inverse-function-theorem.md`
- `items/thm-eulers-formula.md`
- `items/thm-extension-of-a-bounded-map-from-a-dense-subspace.md`
- `items/thm-fourier-inversion-on-schwartz-space.md`
- `items/thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions.md`
- `items/thm-fourier-transform-maps-schwartz-space-continuously-to-itself.md`
- `items/thm-fourier-transform-of-a-finite-complex-measure.md`
- `items/thm-fourier-translation-modulation-dilation-and-reflection-laws.md`
- `items/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces.md`
- `items/thm-hardy-littlewood-sobolev-fractional-integration.md`
- `items/thm-hausdorff-young-for-the-euclidean-fourier-transform.md`
- `items/thm-holder-inequality-for-integrals.md`
- `items/thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation.md`
- `items/thm-integration-by-parts-for-absolutely-continuous-functions.md`
- `items/thm-laplace-cofactor-expansion.md`
- `items/thm-lebesgue-measure-of-a-box-of-every-kind.md`
- `items/thm-linear-change-of-variables-for-lebesgue-measure.md`
- `items/thm-linearity-of-the-lebesgue-integral-on-l-one.md`
- `items/thm-minkowski-integral-inequality.md`
- `items/thm-monotone-convergence-for-the-integral.md`
- `items/thm-multivariable-taylor-formula-with-lagrange-remainder.md`
- `items/thm-newton-leibniz-with-interior-derivative.md`
- `items/thm-nonnegative-integral-zero-iff-zero-almost-everywhere.md`
- `items/thm-plancherel.md`
- `items/thm-polar-coordinates-formula-for-lebesgue-measure.md`
- `items/thm-riemann-stieltjes-c1-integrator-reduction.md`
- `items/thm-riemann-stieltjes-integration-by-parts.md`
- `items/thm-riemann-stieltjes-linearity-and-additivity.md`
- `items/thm-sine-cosine-zero-sets-and-fundamental-period.md`
- `items/thm-sylvesters-law-of-inertia.md`
- `items/thm-symmetry-of-higher-mixed-partials.md`
- `items/thm-tonelli-theorem-for-sigma-finite-product-spaces.md`
- `items/thm-total-variation-of-a-complex-measure-is-finite.md`

Additional supplier opened for the repairs: `items/thm-complex-lp-completeness-and-almost-everywhere-subsequences.md` (Statement and completeness argument). Its Countable Choice hypothesis is propagated.
