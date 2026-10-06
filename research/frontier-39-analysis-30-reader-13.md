# Reader 13 — frontier-39-analysis-30, batch 13

Independent review completed on both assigned pages and all 30 assigned item bodies. Twenty-eight assigned items and A-page prose were repaired. This is a reader report, not a mathematical judgment, publication approval or recursive audit of every foundational proof.

## Repairs and mathematical evidence

- Hölder definition: the smooth slit-rectangle witness extends and is invalid; globally Hölder functions (k=0) always extend. Replace by piecewise constants on two components for k>=1 and correct the local/bounded-class comparison.
- Elliptic-operator definition: a.e. ellipticity does not license freezing at an arbitrary exceptional point. Qualify the remark by continuity.
- Cancellation lemma: replace the pointwise angular lower bound, take a containing radius greater than 1, and supply cancellation for the uniform truncated-test bound.
- Lp interpolation: the averaged derivative identity needs a sign(t) factor; the multiplier rescaling also misses i.
- Interior Poisson regularity: the Riesz sign and division at frequency zero are invalid, particularly in dimension two; use growing smooth cutoffs and the whole-space estimate, then compact-support approximation. Use L1, rather than an unavailable L2 bound, for the harmonic remainder.
- Interior Schauder: the first application is conditional on Hessian Hölder regularity; apply it only after the Campanato bootstrap.
- Boundary Schauder: Wang Theorem 1' (p.3) and Simon Lecture 12 Theorem 2' (pp.134–135) are a priori results. Read Gilbarg–Trudinger Lemma 6.18, complete proof, and Theorem 6.19 (p.111) at https://djvu.online/file/jxRRleAzbYjsl; these supply the missing regularity upgrade. Retain an explicit quoted input, accurately attributed, followed by the a priori estimate.
- Weak global W2p: Haller-Dintelmann Theorem 19.7 is on printed p.148; its full proof runs through p.155, not pp.147–149. The source statement and complete proof have been read. Correct the locator and add the declared AC dependency.
- Injectivity corollary: the improved constant depends on the operator's separation from a kernel, not just coefficient upper bounds. Correct the closed-subspace topology and cite Sobolev completeness.
- Global Schauder solvability: explicitly pass the Hessian Hölder bound to the compactness limit before using injectivity; correct the zeroth-order sign illustration.
- Non-Dini example: correct the antiderivative sign and the unjustified exact modulus assertion.
- Endpoint example: correct the angular resonance explanation and the claimed improving constant as alpha tends to 1.
- Sector example: supply a nonvanishing Hessian calculation and correct the convex-corner boundedness claim and radial exponent.
- Jump example: correct the scaled seminorm factor and the claim that a sign function is the distributional derivative of a Heaviside function.
- One-dimensional continuity example: open Fourier convergence suppliers, prove coefficient decay for the odd extension (including endpoint jumps), and qualify uniformity by positive distance from resonance.
- Comparison remark: boundedness alone on an infinite-volume domain does not give Lp membership.

## Opened inventory

Pages: `library/pde/schauder-and-lp-elliptic-estimates.md` (A), `library/pde/schauder-and-lp-elliptic-estimates-examples.md` (B).

Assigned items (full bodies, including facts, proofs and remarks):

- `items/cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives.md`
- `items/cex-boundary-w-two-p-regularity-needs-c-one-one-type-control.md`
- `items/cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates.md`
- `items/cex-freezing-coefficients-cannot-absorb-a-fixed-large-oscillation-on-arbitrarily-small-balls.md`
- `items/cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one.md`
- `items/cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate.md`
- `items/cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large.md`
- `items/def-holder-spaces-c-k-alpha-and-their-scaled-norms.md`
- `items/def-uniformly-elliptic-nondivergence-operator.md`
- `items/ex-method-of-continuity-for-a-constant-coefficient-path.md`
- `items/ex-riesz-transform-formula-for-second-laplacian-derivatives.md`
- `items/ex-schauder-scaling-on-a-quadratic-poisson-solution.md`
- `items/lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms.md`
- `items/lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials.md`
- `items/lem-cutoff-commutator-for-local-w-two-p-estimates.md`
- `items/lem-freezing-coefficients-and-schauder-error-estimate.md`
- `items/lem-holder-interpolation-with-an-epsilon-loss.md`
- `items/lem-interior-w-two-p-regularity-for-the-laplacian.md`
- `items/lem-lp-interpolation-absorbs-lower-order-derivatives.md`
- `items/rem-schauder-and-sobolev-estimates-are-different-scales.md`
- `items/thm-boundary-schauder-estimate-for-the-dirichlet-problem.md`
- `items/thm-global-schauder-estimate-and-classical-dirichlet-solvability.md`
- `items/thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian.md`
- `items/thm-global-w-two-p-dirichlet-estimate.md`
- `items/thm-global-w-two-p-estimate-for-the-laplacian-on-rn.md`
- `items/thm-holder-spaces-on-bounded-domains-are-banach-spaces.md`
- `items/thm-interior-schauder-estimate-for-uniformly-elliptic-equations.md`
- `items/thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations.md`
- `items/thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators.md`
- `items/thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian.md`

Direct suppliers (used Definition/Statement interfaces opened; complete proofs read for the Newtonian classical regularity and Poisson interior estimate, bounded potential, CZ definitions, Riesz Lp theorem, and the trace-lifting/form-bound pair):

- `items/cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn.md`
- `items/cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting.md`
- `items/cor-locally-integrable-weakly-harmonic-functions-are-smooth.md`
- `items/cor-mean-value-theorem.md`
- `items/cor-real-and-euclidean-vector-valued-ascoli-arzela.md`
- `items/cor-riesz-transforms-are-bounded-on-lp.md`
- `items/cor-riesz-transforms-are-ltwo-bounded.md`
- `items/def-axiom-of-choice.md`
- `items/def-ball-average-operator-on-r-n.md`
- `items/def-banach-space.md`
- `items/def-bounded-c-k-domain-and-boundary-charts.md`
- `items/def-bounded-c-one-domain-boundary-charts-and-outward-normal.md`
- `items/def-bounded-linear-operator.md`
- `items/def-calderon-zygmund-kernel-and-principal-value-operator.md`
- `items/def-ck-and-multi-index-notation-in-several-variables.md`
- `items/def-complete-metric-space.md`
- `items/def-countable-choice.md`
- `items/def-distributional-derivative.md`
- `items/def-euclidean-spheres-and-closed-balls.md`
- `items/def-laplace-fundamental-solution-with-positive-minus-laplacian-sign.md`
- `items/def-laplacian-of-a-c2-function.md`
- `items/def-local-holder-and-c-two-alpha-norms-on-euclidean-balls.md`
- `items/def-lp-fourier-multiplier-and-multiplier-norm.md`
- `items/def-metric-convergence.md`
- `items/def-mihlin-symbol-with-more-than-half-dimension-derivatives.md`
- `items/def-newtonian-potential.md`
- `items/def-operator-norm.md`
- `items/def-real-power.md`
- `items/def-riesz-transforms-on-euclidean-space.md`
- `items/def-sobolev-extension-domain-and-extension-operator.md`
- `items/def-sobolev-space-wkp-and-its-norm.md`
- `items/def-space-of-bounded-linear-operators.md`
- `items/def-standard-holder-calderon-zygmund-kernel.md`
- `items/def-translation-invariant-fourier-multiplier-on-schwartz-space.md`
- `items/def-weak-dirichlet-solution-for-a-divergence-form-operator.md`
- `items/def-wkp-zero-as-a-sobolev-closure.md`
- `items/lem-classical-derivatives-are-weak-derivatives.md`
- `items/lem-composition-operator-norm-inequality.md`
- `items/lem-euclidean-chart-measure-agrees-with-polar-surface-measure.md`
- `items/lem-ltwo-fourier-multiplier-bound.md`
- `items/lem-neumann-series-and-small-perturbations-of-bounded-inverses.md`
- `items/lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data.md`
- `items/lem-smooth-bump-between-concentric-euclidean-balls.md`
- `items/lem-sobolev-trace-agrees-with-continuous-boundary-values.md`
- `items/lem-weak-derivatives-are-unique-almost-everywhere.md`
- `items/lem-weak-stability-of-sobolev-derivatives.md`
- `items/thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant.md`
- `items/thm-algebra-of-derivatives.md`
- `items/thm-arzela-ascoli-for-real-ck.md`
- `items/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions.md`
- `items/thm-chain-rule-for-total-derivatives.md`
- `items/thm-complete-subspace-iff-closed.md`
- `items/thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign.md`
- `items/thm-differentiation-under-the-integral-sign.md`
- `items/thm-distributional-differentiation-is-continuous-and-commutes.md`
- `items/thm-distributions-supported-at-one-point.md`
- `items/thm-divergence-theorem-for-bounded-c-one-euclidean-domains.md`
- `items/thm-dominated-convergence.md`
- `items/thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem.md`
- `items/thm-extension-theorem-for-bounded-smooth-domains.md`
- `items/thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions.md`
- `items/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms.md`
- `items/thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions.md`
- `items/thm-fubini-over-a-region-between-continuous-graphs.md`
- `items/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces.md`
- `items/thm-harmonic-functions-are-real-analytic.md`
- `items/thm-higher-order-sobolev-embedding.md`
- `items/thm-holder-inequality-for-integrals.md`
- `items/thm-interior-derivative-estimates-for-harmonic-functions.md`
- `items/thm-interior-estimate-for-poisson-equation-with-holder-data.md`
- `items/thm-kernel-of-the-trace-is-w-one-p-zero.md`
- `items/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant.md`
- `items/thm-locally-integrable-functions-embed-in-distributions.md`
- `items/thm-logarithm-derivative-and-integral.md`
- `items/thm-lp-trace-operator-on-a-bounded-c-one-domain.md`
- `items/thm-meyers-serrin-density-on-an-arbitrary-open-set.md`
- `items/thm-mihlin-fourier-multiplier-theorem.md`
- `items/thm-morrey-rellich-compactness-for-p-greater-than-n.md`
- `items/thm-newton-leibniz-with-a-countable-exceptional-set.md`
- `items/thm-newtonian-potential-for-holder-data-is-classical.md`
- `items/thm-newtonian-potential-solves-poisson-distributionally.md`
- `items/thm-plancherel.md`
- `items/thm-polar-coordinates-formula-for-lebesgue-measure.md`
- `items/thm-real-power-continuity-and-derivatives.md`
- `items/thm-rellich-kondrachov-at-the-critical-source-exponent.md`
- `items/thm-rellich-kondrachov-for-p-less-than-n.md`
- `items/thm-uniform-cauchy-criterion-real-functions.md`
- `items/thm-uniform-derivative-limit-on-a-closed-interval.md`
- `items/thm-uniform-limit-continuous-complex-functions.md`
- `items/thm-uniform-limit-continuous-real-functions.md`
- `items/thm-weak-maximum-principle-for-the-laplacian.md`
- `items/thm-young-convolution-inequality.md`
- `items/thm-young-inequality-real-exponents.md`

Additional interfaces opened: `thm-symmetry-of-higher-mixed-partials`, `thm-sobolev-spaces-are-banach-spaces`, `thm-dini-pointwise-convergence-criterion-for-fourier-series`, `thm-l-two-fourier-series-converges-in-mean-square`, `thm-trace-estimate-on-the-half-space`, `thm-smooth-up-to-the-boundary-density-on-smooth-domains`, `thm-acl-characterisation-of-w-one-p`, `thm-w-one-infinity-functions-have-lipschitz-representatives`, `lem-elliptic-form-is-well-defined-and-bounded`.

## Edited carriers

- `items/cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives.md`
- `items/cex-boundary-w-two-p-regularity-needs-c-one-one-type-control.md`
- `items/cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates.md`
- `items/cex-freezing-coefficients-cannot-absorb-a-fixed-large-oscillation-on-arbitrarily-small-balls.md`
- `items/cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one.md`
- `items/cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate.md`
- `items/def-holder-spaces-c-k-alpha-and-their-scaled-norms.md`
- `items/def-uniformly-elliptic-nondivergence-operator.md`
- `items/ex-method-of-continuity-for-a-constant-coefficient-path.md`
- `items/ex-riesz-transform-formula-for-second-laplacian-derivatives.md`
- `items/ex-schauder-scaling-on-a-quadratic-poisson-solution.md`
- `items/lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms.md`
- `items/lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials.md`
- `items/lem-freezing-coefficients-and-schauder-error-estimate.md`
- `items/lem-holder-interpolation-with-an-epsilon-loss.md`
- `items/lem-interior-w-two-p-regularity-for-the-laplacian.md`
- `items/lem-lp-interpolation-absorbs-lower-order-derivatives.md`
- `items/rem-schauder-and-sobolev-estimates-are-different-scales.md`
- `items/thm-boundary-schauder-estimate-for-the-dirichlet-problem.md`
- `items/thm-global-schauder-estimate-and-classical-dirichlet-solvability.md`
- `items/thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian.md`
- `items/thm-global-w-two-p-dirichlet-estimate.md`
- `items/thm-global-w-two-p-estimate-for-the-laplacian-on-rn.md`
- `items/thm-holder-spaces-on-bounded-domains-are-banach-spaces.md`
- `items/thm-interior-schauder-estimate-for-uniformly-elliptic-equations.md`
- `items/thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations.md`
- `items/thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators.md`
- `items/thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian.md`

The A-page summary was updated to identify the quoted boundary inputs and their choice assumptions. B-page prose was read without alteration.

Validation checkpoint: reflow/precheck were run on all changed carriers. An initial path-extraction typo selected one nonexistent path, and the interior Schauder precheck initially rejected a forward step mention; both were corrected. Final per-item checks are being completed; no mathematical judgment or certification was recorded.

Final validation: all 28 changed item carriers received successful reflow and precheck checks (definitions/remark have no proof rows). Stale judge subrecords were removed where present; none remains on a changed carrier. The final batched command `node tools/proof-layout.mjs items/cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives.md items/cex-boundary-w-two-p-regularity-needs-c-one-one-type-control.md items/cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates.md items/cex-freezing-coefficients-cannot-absorb-a-fixed-large-oscillation-on-arbitrarily-small-balls.md items/cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one.md items/cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate.md items/def-holder-spaces-c-k-alpha-and-their-scaled-norms.md items/def-uniformly-elliptic-nondivergence-operator.md items/ex-method-of-continuity-for-a-constant-coefficient-path.md items/ex-riesz-transform-formula-for-second-laplacian-derivatives.md items/ex-schauder-scaling-on-a-quadratic-poisson-solution.md items/lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms.md items/lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials.md items/lem-freezing-coefficients-and-schauder-error-estimate.md items/lem-holder-interpolation-with-an-epsilon-loss.md items/lem-interior-w-two-p-regularity-for-the-laplacian.md items/lem-lp-interpolation-absorbs-lower-order-derivatives.md items/rem-schauder-and-sobolev-estimates-are-different-scales.md items/thm-boundary-schauder-estimate-for-the-dirichlet-problem.md items/thm-global-schauder-estimate-and-classical-dirichlet-solvability.md items/thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian.md items/thm-global-w-two-p-dirichlet-estimate.md items/thm-global-w-two-p-estimate-for-the-laplacian-on-rn.md items/thm-holder-spaces-on-bounded-domains-are-banach-spaces.md items/thm-interior-schauder-estimate-for-uniformly-elliptic-equations.md items/thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations.md items/thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators.md items/thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian.md` exited 0.

Layout output:

```text
proof-layout: 28 items, 139 steps, 0 defects

```

## Additional repairs and their evidence

- `lem-holder-interpolation-with-an-epsilon-loss`: the inward-frame stencil proof is retained; its Taylor/forward-difference and coordinate-change uses now explicitly cite Newton–Leibniz, the total chain rule and mixed-partial symmetry. The finite stencils and inward segment estimates were checked directly.
- `lem-freezing-coefficients-and-schauder-error-estimate`: require finite dimensionless coefficient bounds for the uniform quantitative constant. `thm-interior-schauder-estimate-for-uniformly-elliptic-equations` states the needed finite coefficient seminorms and uses the finite forcing norm on the compact bootstrap region, rather than presuming a local class has a finite global norm.
- `lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms`: justify rotation to the tangent graph with the regular-level graph supplier and the derivative formula; shrink to a compact cube contained in the original base and chart neighborhood. This closes the graph/cube mismatch and bounds all chart norms.
- `thm-global-w-two-p-dirichlet-estimate`: the half-space trace and extension suppliers now license smooth boundary approximation, tangential trace differentiation, and odd-reflection compatibility through second order. The real Lipschitz-to-Sobolev converse licenses graph-gradient weak derivatives; smoothing the graph proves the weak chain rule. Add the corresponding AC premise and dependencies. Wang's Schauder theorem is no longer misidentified as an Lp source.
- `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`: correct the type of the trace of g, supply the McShane modulus calculation and the smooth compact-data potential derivation. These close explicit prerequisites without a new weak-to-strong assumption.
- `thm-global-schauder-estimate-and-classical-dirichlet-solvability`: explain the boundary-extension Banach subspace on a smooth domain and preserve the uniform Hessian seminorm in the C2 limit before applying injectivity. Use maximum-principle uniqueness componentwise for complex functions.
- `thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian`: the quoted resolvent threshold is allowed to depend on each fixed exponent, matching the finite-exponent bootstrap. Complex energy uniqueness tests with the conjugate. The AC dependency and corrected complete-proof locator are explicit.
- `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations`: its interpolation fact now explicitly includes the doubled-ball form used in its proof.
- `cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates`: the coefficient modulus r^beta is itself Dini and VMO. Correct the remark that previously exempted every such variant; this example refutes C2,alpha regularity under those weaker coefficient classes, while saying nothing against their distinct Sobolev conclusions.
- `ex-schauder-scaling-on-a-quadratic-poisson-solution`: retain the n=1 computation, distinguish it from the n>=2 supplier application, declare the inherited Countable Choice assumption, and call the open-ball endpoint quantity a supremum.
- `ex-riesz-transform-formula-for-second-laplacian-derivatives`: put the inherited Countable Choice premise in the example statement.
- `thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators`: correct the remark on where affine dependence is used: both the open and closed parameter arguments use it.
- `lem-interior-w-two-p-regularity-for-the-laplacian`: complete the growing-cutoff limit with the integral monotone-convergence supplier and scalar Lp completeness for the fixed-support approximation. The corrected harmonic-remainder estimate includes the finite-volume factor. There is no unsupported Lp-to-L2 bound.
- The corrected Lp interpolation display uses a sufficiently large Cp after raising sums to the power p; no sharp numeric coefficient is claimed. The imaginary unit in the symbol rescaling and the signed one-dimensional weight are preserved.
- The injectivity corollary uses the Sobolev completeness supplier in the Cauchy step. Its constant is explicitly allowed to depend on the particular operator. A sequence of zeroth-order coefficients approaching a Dirichlet eigenvalue shows why coefficient upper bounds alone cannot control the inverse.

## Contracts and sources

The batch proof-contract file was updated: citations and derivations for all 27 proof-bearing assigned items were regenerated from current text, including unchanged consumers whose supplier interfaces changed; the three non-proof entries were retained, with the Holder witness boundary clause updated. The two strengthened choice boundary clauses were updated explicitly. This updates evidence and does not certify the contracts.

Selected authoritative passages actually consulted:

- Wang, https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf, Theorem 1, equations (1.2)–(1.4) and complete proof, pp.1–2; boundary Theorem 1' and its reflection argument, p.3. The boundary hypothesis already includes C2 up to the flat face.
- Simon, https://math.stanford.edu/~lms/lecs-on-pde.pdf, Lecture 12 boundary Lemma 2, Theorems 1', 2', and global Theorem 3 with its proof, printed pp.133–136. These are a priori inputs; some local proofs are left as exercises in the source, and no solution of those exercises is claimed here.
- Gilbarg–Trudinger, https://djvu.online/file/jxRRleAzbYjsl, Lemma 6.18 with its complete proof and Theorem 6.19, printed p.111. This supplies the boundary upgrade before the a priori estimate, without a sign restriction on c. The item explicitly labels it a quoted literature input.
- Haller-Dintelmann, https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/PDESkriptWiSe22.pdf, Theorem 19.7 with complete proof, printed pp.148–155, and the preceding half-space Proposition 19.4, pp.145–146. The shifted argument here uses the Laplacian specialization and fixed, finitely many exponents. General mixed coefficients require the normalization explained in the local reflection proof; raw odd reflection does not preserve arbitrary mixed normal/tangential terms.
- Schikorra, https://sites.pitt.edu/~armin/pde2022/pde.pdf, Theorems 8.28 and 8.30, including the complete approximation proof, printed pp.151–153. The source assumes a smooth boundary; its statement alone is not used to expand the current domain hypothesis.

Other bibliography entries and inherited author annotations saying “read in full” are not claims of source reading by this reader.

## Uneditable defects and current source handling

Two standalone supplier statements in current-run batch 4 omit the Axiom of Choice that their own Given blocks assume and their proofs use. They are outside this reader's edit scope. The assigned consumers already assume AC, so this does not invalidate those consumer applications under their stated hypotheses. It does leave the supplier statements stronger than the supplied proofs. Closure requires adding the assumption to the standalone statements, or supplying proofs under the weaker declared assumptions.

- `thm-w-one-infinity-functions-have-lipschitz-representatives`: Statement opening, versus Facts & Assumptions Given and F3 and the sequential selection/ACL interfaces. Consumer: `thm-global-w-two-p-dirichlet-estimate`, current proof fact F7. The observed complex Frobenius/operator-norm error was corrected by another writer during this review; no historical complex error is returned as current. No pre-reader bytes are claimed to have been observed.
- `thm-higher-order-sobolev-embedding`: Statement opening, versus Facts & Assumptions Given and F5. Consumer: `cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large`, proof fact F2. The current statement's W^{k,p} extension-domain qualification was checked, and the remaining concern is the omitted choice premise.

The trace-lifting supplier's H1 form bound was checked against the complete current `lem-elliptic-form-is-well-defined-and-bounded`: that lemma explicitly proves the same bound on all H1, so the lifting application is licensed. No finding is returned for that tentative concern.

## Page verdicts and limitations

- A-page `schauder-and-lp-elliptic-estimates`: local mathematical defects repaired; the quantitative finite-norm and choice qualifications are now explicit. The boundary upgrade and shifted solvability remain accurately quoted literature inputs, not newly supplied local proofs. The two standalone supplier statement defects above require the other batch's attention; the assigned consumers satisfy the proof's AC premise.
- B-page `schauder-and-lp-elliptic-estimates-examples`: all eight examples were read and their computations, witnesses and endpoint remarks checked. Confirmed item defects were repaired. The page prose itself has no remaining confirmed defect and was not edited.

No local repair blocker or proposed withdrawal remains. Coverage includes current assigned bodies and used direct supplier interfaces. Core supplier chains were read before their consumers; some elementary direct interfaces were supplemented after the first pass and before closing repairs. This is not a recursive proof audit of all 93 original direct suppliers' foundational closures or an audit of every bibliography entry. Supplier files were changing during the review; findings are bound to the last current raw bytes inspected, never to a stored pre-reader fingerprint. Reflow, precheck and layout are format checks, not mathematical judgments.

## Final source bindings

`thm-w-one-infinity-functions-have-lipschitz-representatives`: current raw SHA-256 `100ef737f206259cc13fd9dafa174c5edefae3b2ad47ba5729de66eb0ccb8523`; Statement begins at line 27; producer batch 4; consumer `thm-global-w-two-p-dirichlet-estimate`.

`thm-higher-order-sobolev-embedding`: current raw SHA-256 `3854a4106c434c4ab551dad14c76686bce13f8f1108754e32d73efa19f55b323`; Statement begins at line 24; producer batch 4; consumer `cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large`.
