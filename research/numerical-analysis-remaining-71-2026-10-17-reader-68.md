# Step 3a reader report — batch 68

Run: numerical-analysis-remaining-71-2026-10-17  
Role: reader-68

## Opened inventory

Assigned pages:

- **hp-finite-elements-and-spectral-element-methods** — library/numerical-pdes-and-spatial-discretization/hp-finite-elements-and-spectral-element-methods.md
- **hp-finite-elements-and-spectral-element-methods-examples** — library/numerical-pdes-and-spatial-discretization/hp-finite-elements-and-spectral-element-methods-examples.md

The A page's declared prerequisite pages were also opened:

- **spectral-collocation-and-galerkin-methods**
- **curved-mesh-geometry-and-conservative-mesh-transfer**

All 22 A-page items and all 4 B-page items were opened in dependency order:

- A: def-hp-integrated-legendre-projector, def-hp-variable-degree-spaces-on-matching-meshes, lem-legendre-gauss-lobatto-nodes-are-distinct, lem-reference-jacobi-weighted-endpoint-kernel, thm-hp-simplex-weighted-spectral-projection, lem-hp-triangle-degree-uniform-strong-edge-lift, lem-hp-unweighted-legendre-derivative-tail, lem-hp-analytic-polynomial-approximation-on-a-triangle, lem-hp-weighted-analytic-corner-pointwise-control, def-legendre-gauss-lobatto-rule-on-affine-boxes, lem-hp-corner-uniform-degree-dof-count, lem-variable-degree-polynomial-spaces-are-h1-conforming, thm-hp-analytic-p-convergence-on-fixed-tensor-mesh, thm-hp-reference-interval-integrated-legendre-projection, thm-hp-simplex-p-dependent-face-trace-inverse, thm-hp-triangle-unweighted-smooth-approximation, lem-hp-simplex-p-explicit-conforming-interpolant, thm-hp-galerkin-energy-error-on-fixed-mesh, thm-hp-gll-top-mode-and-puniform-energy-equivalence, thm-hp-corner-exponential-energy-convergence, thm-hp-galerkin-h-p-regularity-energy-bound, thm-hp-gll-strang-error-with-aliasing-defect.
- B: cex-hp-degree-independent-sipdg-penalty-loses-coercivity, ex-hp-analytic-p-refinement-on-a-fixed-box, ex-hp-gll-mass-top-mode-correction, ex-hp-reentrant-corner-h-versus-hp.

The Statements or Definitions of the 47 current direct prerequisite items were opened: cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, cor-finite-dimensional-subspaces-are-closed, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, cor-weierstrass-approximation-on-a-closed-interval, def-axiom-of-choice, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, def-l-one-approximate-identity-on-rn, def-legendre-polynomial-family-and-l2-pairing, def-legendre-weighted-sobolev-scale, def-matching-affine-simplicial-meshes, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, def-sobolev-space-wkp-and-its-norm, def-variational-crime-error-framework, def-weak-derivative-of-a-locally-integrable-function, def-wkp-zero-as-a-sobolev-closure, lem-legendre-weighted-derivative-orthogonality-and-norm, lem-shape-regular-affine-simplex-scaling, lem-smooth-bump-between-concentric-euclidean-balls, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, lem-smooth-density-on-reference-simplex, lem-taylor-lagrange-remainder-from-mean-value, prop-mollifier-families-are-l-one-approximate-identities, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-bramble-hilbert-on-reference-simplex, thm-cauchy-schwarz-in-an-inner-product-space, thm-cea-quasi-optimality-for-conforming-galerkin-approximations, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-first-strang-lemma-for-conforming-perturbed-galerkin, thm-ftc-second-part, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-l-one-approximate-identities-converge-in-l-p, thm-lagrange-point-evaluation-threshold-on-reference-simplex, thm-lebesgue-measure-of-a-box-of-every-kind, thm-legendre-weighted-projection-error-rate, thm-matching-continuous-piecewise-polynomials-are-wkp, thm-multivariable-taylor-formula-with-lagrange-remainder, thm-poincare-inequality-for-w-one-p-zero, thm-reference-simplex-sobolev-extension, thm-reference-simplex-trace-and-gauss-green, thm-riesz-fischer-completeness-of-l-p, thm-rolle, thm-sobolev-spaces-are-banach-spaces, and thm-zero-boundary-piecewise-polynomials-in-w10p. The Bramble–Hilbert uniqueness argument, matching-piecewise-polynomial argument, and zero-boundary approximation argument were opened where needed.

## Source review

For the weighted corner class, I opened He, Houston, Schwab, and Wihler, *Exponential Convergence of hp-ILGFEM*, v1, [arXiv:2404.18569](https://arxiv.org/pdf/2404.18569v1). Section 2.3, equation (12), Definition 1, and the preceding continuity assertion (PDF pp. 5–6) match the weighted Sobolev/factorial class used here. Section 4.1, equations (29)–(31) and Theorem 2 (PDF pp. 9–10) give the geometric-corner mesh and e^{-bN^{1/3}} context. That article invokes prior approximation results; the local pointwise estimates and layer construction in this batch are checked from their local proofs.

The local Jacobi endpoint kernel and simplex trace bound were checked directly in lem-reference-jacobi-weighted-endpoint-kernel and thm-hp-simplex-p-dependent-face-trace-inverse. The linked Warburton–Hesthaven EPFL PDF did not fetch through the browser; the [publisher record](https://doi.org/10.1016/S0045-7825(03)00294-9) confirms the article’s explicit hp trace-constant scope, while the bound used here is independently derived in the assigned proof.

## Repairs and evidence

- lem-hp-weighted-analytic-corner-pointwise-control, Statement: replaced the impossible closed-cell condition K⊂Ω with closed mesh triangles K⊂Ω̄ whose interiors lie in Ω, for both regular cells and corner caps. The matching-mesh definition uses closed simplices; this correction includes boundary-side cells required by the corner theorem. Its consumers thm-hp-corner-exponential-energy-convergence and ex-hp-reentrant-corner-h-versus-hp were reviewed, and their proof uses remain valid.
- thm-hp-analytic-p-convergence-on-fixed-tensor-mesh, dependencies, Facts, and step 4.1: added lem-variable-degree-polynomial-spaces-are-h1-conforming and used it to justify that matching tensor-box traces give the global H1 class required by the stated norm.
- thm-hp-reference-interval-integrated-legendre-projection, Statement, dependencies, Facts, and step 1.1: specified the canonical L2 realization of the coefficient completion. The proof now establishes it using the Legendre polynomial basis, Weierstrass density, C_c^∞((-1,1)) density in L2, and Riesz–Fischer completeness. This supplies the function-class prerequisite for the primitive and integrated projector.
- thm-hp-simplex-p-dependent-face-trace-inverse, Statement: changed “face” to “facet.” Its proof uses the opposite vertex and a facet-pyramid parameterization; it does not establish the displayed formula for lower-dimensional faces.
- lem-hp-simplex-p-explicit-conforming-interpolant, Facts and step 1.2: derived polynomial reproduction and right-endpoint preservation from exactness of the Legendre projection on P_{p_E-1} and orthogonality of its residual to constants. This justifies common vertex values before the local lift construction.
- thm-hp-galerkin-h-p-regularity-energy-bound, dependencies, Facts, and step 1.2: replaced the incomplete cutoff/mollification argument for H_0^1 membership with the published theorem for zero-boundary conforming piecewise polynomials on finite matching simplicial meshes.
- thm-hp-gll-strang-error-with-aliasing-defect, Statement, dependencies, and Facts: defined the discrete form explicitly as the sum of each cell’s GLL stiffness and mass forms, making the form defect in Strang’s estimate refer to a specified a_p.
- ex-hp-reentrant-corner-h-versus-hp, Verification step 3.1: restricted the divergent Hessian integral to the positive-angle sector contained in T̂, which is the domain needed for the fixed-degree lower bound.

Updated the batch proof-contract file for the changed derivations and added or refreshed source citation mirrors for the new hypotheses and corrected corner-cell statement. No changed item had a verification.judge record.

## Page verdicts

- hp-finite-elements-and-spectral-element-methods: pass after the item repairs. Its summary accurately limits the approximation and quadrature results to affine cells, identifies the curved-mesh framework separately, and does not claim H2 regularity on singular caps. No page prose edit was needed.
- hp-finite-elements-and-spectral-element-methods-examples: pass. The fixed-box estimate, GLL mass computation, SIPDG witness, local h^{2/3} lower bound, and global hp comparison agree with the reviewed items. No page prose edit was needed.

## Validation and blocker

For each of the eight changed items, reflow.mts reported unchanged formatting and precheck.mts passed. The final batched proof-layout check reported 8 items, 32 proof steps, 0 defects. No blocker remains.

The run remained active at the 3a-read stage with no process in flight. Batch 68 had not yet been recorded as covered when this report was written; no autopilot state or gate was changed.

## Uneditable defects

None found.

## Coverage note

The assigned pages, all 26 assigned items, the direct prerequisite item statements/definitions, and the relevant cited source sections listed above were reviewed. The complete Warburton–Hesthaven PDF was not retrieved; its local endpoint-kernel and simplex-trace derivations were checked directly, so no unresolved claim depends on the inaccessible PDF.
