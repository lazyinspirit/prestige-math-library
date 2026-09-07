# frontier-33 batch 13 — scaffold checkpoint

Authorized outputs: this notes file and sibling .pages.json / .coverage.json only. No plan, workflow, published files, or other batches are edited. Read CLAUDE.md, README.md, SCHEMA.md, generated beta-13 task and full DG-14 design (lines 3482–3757).

## Plan and design decisions

Spec A/B orders 469/470 and full companion slug retained. Design DG-14 gives no numeric order locally; its B slug integration-and-stokes-examples differs. Design direct real-analysis prerequisites (fubini-and-change-of-variables, the-riemann-integral-in-rn-and-jordan-content, line-integrals-and-the-gradient-theorem) differ from spec direct requires; use spec, leave adjudication to drift. Its seam amendment requires classical agreement, not duplicate classical theorems.

Core route: compactly supported smooth forms, positive-dimensional Riemann integrals, finite signed sums in dimension zero, outward-normal-first. Artificial chart edges admit smooth zero extension; the true half-space face only gives a bounded Riemann integrand. Use published null criterion, not manifold Lebesgue integration. Compact support makes locally finite partition sums finite; AC_omega inherited from published partition theorem.

Necessary qualifications found while reading:
- For an arbitrary smooth top form, absolute value gives a continuous nonnegative density, not necessarily a smooth density at zeros (x dx gives |x||dx|). Nicolaescu Example 3.4.2(b) overstates smoothness. Lee Prop. 16.35(c) is pointwise; the smooth positive construction uses nonvanishing forms. Keep both signed smooth density correspondence and absolute value, explicitly distinct.
- Noncompact exact-integral vanishing requires a compactly supported primitive; compact support of d eta alone does not suffice. Retain the design id with an unambiguous title and statement.
- Positive upper-half-space charts alone cannot cover an oriented interval at its right endpoint: t=b-x reverses orientation. Use chart sign sigma in {+1,-1} for connected boundary charts (Lee (16.1), pp.404–405), with positive-chart formula as its sigma=+1 case. This repairs the design's positive-only wording without changing boundary convention or route. In dimension zero use determinant-line signs directly.
- Divergence on a manifold with boundary uses local Euclidean extensions and locality of Cartan's identity; arbitrary outward vector fields need not have a two-sided flow inside M.
- Embedded-submanifold integration requires compact support of the pullback itself; a nonproper embedding need not pull back compact support to compact support.
- Proposed zero-extension and inward-first false statements duplicate published claims: cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth and fs-the-boundary-orientation-is-given-by-inward-normal-first. Record reuse in coverage, mint neither.

## Source access checkpoint

Browser full PDF text read in bounded sections:
- Lee, Introduction to Smooth Manifolds, 2nd ed.: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf (726 PDF pages; printed page = PDF index minus 17). Integration section, Stokes proof, density construction, and relevant divergence statements; exact final read ranges and harvest belong in coverage.
- Merry, Differential Geometry (2021): https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf (406 PDF pages). Lecture 26 is PDF pages 213–220 in this version, not the design's 194–207. Read 26.1–26.17 including the complete local cube and global partition proofs. Adapt cubes to coordinate rectangles; do not import cubical homology into this page.
- Nicolaescu, Lectures on the Geometry of Manifolds, 3rd edition, 2020 author PDF: https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf (700 PDF pages). §3.4.1 printed pp.111–115 and §3.4.2 integration-isomorphism paragraph pp.120–121, including Example 3.4.14. Density proof uses Lebesgue coordinates: the scaffold replaces that base by the explicit published Riemann theorem, without borrowing unproved measure machinery.

Shell curl fails DNS for both ETH and Notre Dame; pdftotext is unavailable. Browser screenshots fail cache retrieval for Nicolaescu, but searchable full PDF text is accessible and the mathematics above was read there. Do not fabricate byte hashes or fetch stamps. Run actual fetch and liveness validators once the coverage exists and record their result.

## Current obligations

Scaffold objects and complete source dispositions are being prepared. Preserve all design mathematics with necessary qualifications and add only proof-essential intermediates / immediate harvested consequences. Check published dependency statements and aliases; verify whole-run manifest-only policy, explicit deps, coverage, plan, fetch and liveness. Next: finish bounded Lee passages, write dependency-ordered manifest and harvest, run validators.

### def-compactly-supported-differential-form

Claim/conventions: For a smooth k-form omega, supp omega is the closure in M of its nonzero locus; Omega_c^k(M) consists of forms with compact support, also when M has boundary.

Dependencies: def-smooth-differential-k-form, def-interior-closure-boundary-top, def-compactness-open-cover.

Proof/dependency rationale: Intrinsic zero section and topological closure; do not identify support with the unclosed nonzero locus.

Source: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf — Merry Definition 26.7, Lecture 26 p.2 / PDF p.214. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form

Claim/conventions: A locally finite family of closed supports meets a compact set K in only finitely many members, and all other members miss a neighborhood of K. Thus only finitely many rho_i omega are nonzero for compactly supported omega.

Dependencies: def-compactly-supported-differential-form, def-smooth-partition-of-unity-subordinate-to-an-open-cover.

Proof/dependency rationale: Cover K by finitely many neighborhoods witnessing local finiteness; take their union. This licenses all later sums and differentiation.

Source: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf — Merry Definition 26.11 and Lemma 26.12, PDF pp.215–216. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions

Claim/conventions: For n>=1, a smooth coefficient compactly supported in a relatively open chart domain in H^n={x_n>=0} has a bounded compactly supported Euclidean zero extension, smooth off the genuine face and Riemann integrable. Its integral is independent of bounding rectangle and auxiliary smooth extensions. Interior charts give smooth zero extensions everywhere.

Dependencies: def-compactly-supported-differential-form, cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary, lem-smooth-extension-from-a-closed-neighbourhood, thm-lebesgue-criterion-in-rn, def-null-and-content-zero-in-rn, cor-archimedean-reciprocal, lem-compactly-supported-riemann-integral-is-well-defined.

Proof/dependency rationale: Finite Euclidean localization glues smooth extensions near the compact coordinate support; cutoff across artificial edges only. In a bounding cube of radius R, cover the face by O((R/delta+1)^(n-1)) cubes of side 2delta, total volume tending to zero. Apply the published null criterion. Two extensions agree on H^n.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee integration of forms pp.402–404; explicit Riemann justification from cited published items. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### def-integral-of-an-oriented-chart-supported-top-form

Claim/conventions: For a compactly supported top form omega in a connected chart, write (phi^-1)^*omega=f dx^1 wedge ... wedge dx^n. Set its integral to sigma_phi times the Riemann integral of the zero-extended coefficient, where sigma_phi is the coordinate-frame orientation sign. For n=0 the chart is a point and the value is epsilon(p)omega(p).

Dependencies: lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions, def-oriented-smooth-manifold-and-oriented-chart, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-support-and-compactly-supported-riemann-integral-in-rn.

Proof/dependency rationale: The positive-chart case is the design formula. Negative charts are necessary at right interval endpoints; Lee p.405 explicitly explains this. Apply extension lemma before definition.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee (16.1), pp.404–406. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### lem-half-space-chart-transitions-extend-locally-to-side-preserving-diffeomorphisms

Claim/conventions: A smooth diffeomorphism between relatively open half-space sets extends near any face point to a Euclidean local diffeomorphism that maps each side of the face to the corresponding side.

Dependencies: thm-smooth-invariance-of-manifold-boundary, prop-chain-rule-for-smooth-half-space-maps, lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space, thm-euclidean-inverse-function-theorem.

Proof/dependency rationale: Inverse chain rule makes the derivative invertible. Tangential derivatives of the last component vanish on the face; the inward one-sided derivative is positive. Write the extended last component as t a(x,t) by the one-variable FTC, with a>0 after shrinking. Euclidean inverse theorem then supplies the extension and side equality. Needed before boundary change of variables.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.3, p.404, together with the exact published boundary chain rule and inverse theorem. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### thm-oriented-chart-integrals-are-coordinate-independent

Claim/conventions: The signed chart integral of a compactly supported top form is the same in any two charts containing its support, in all dimensions.

Dependencies: def-integral-of-an-oriented-chart-supported-top-form, lem-half-space-chart-transitions-extend-locally-to-side-preserving-diffeomorphisms, cor-change-of-variables-for-compactly-supported-functions, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form.

Proof/dependency rationale: The determinant in the pulled-back top coefficient and sigma factors cancel the absolute Jacobian. At the boundary localize finitely into the Euclidean extensions in the preceding lemma and use Riemann change of variables on the zero-extended integrands; no contribution from the null face. For n=0 compare determinant-line signs.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Propositions 16.3–16.4, pp.404–405; Merry Lemma 26.8. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold

Claim/conventions: For n>=1, choose a subordinate smooth partition of unity in signed connected boundary/interior charts and sum the chart integrals of rho_i omega. For n=0 define sum_p epsilon(p)omega(p), finite by compactness of a subset of a discrete manifold.

Dependencies: thm-oriented-chart-integrals-are-coordinate-independent, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary.

Proof/dependency rationale: Partition existence assumes AC_omega; each actual sum is finite. Zero dimensions use no positive-dimensional integral.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee (16.2) and zero-dimensional paragraph, pp.405–406; Merry Definitions 26.11 and 26.15. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement

Claim/conventions: The integral defined above is independent of the cover, coordinate maps, partition and refinement; for support in an open subset it equals the integral computed there.

Dependencies: def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form, thm-oriented-chart-integrals-are-coordinate-independent.

Proof/dependency rationale: Refine rho_i and sigma_j by products. The finite double sum consists of chart-supported integrands; coordinate independence identifies every term. Same proof proves locality.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.5, pp.405–406; Merry Lemma 26.12. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components

Claim/conventions: Integration is linear; the integral is the sum over disjoint oriented connected components, only finitely many meeting the compact support.

Dependencies: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement, thm-multidimensional-integral-properties.

Proof/dependency rationale: Use one common partition. Components are open because manifolds are locally path connected, so compactness reduces their open cover to finitely many; treat zero-manifold by finite sums.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(a), pp.407–408. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-reversing-orientation-negates-the-integral

Claim/conventions: Replacing the orientation on every component by its opposite negates the integral, including determinant-line signs in dimension zero.

Dependencies: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement.

Proof/dependency rationale: Every chart sign changes, as does every zero-dimensional point sign.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(b), pp.407–408. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-positive-compactly-supported-top-forms-have-positive-integral

Claim/conventions: A compactly supported smooth top form nonnegative on positive determinants has nonnegative integral, strictly positive if it is nonzero.

Dependencies: prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components, thm-multidimensional-integral-properties.

Proof/dependency rationale: A nonzero nonnegative coefficient is bounded below by a positive constant on a small rectangle or half-rectangle; chart sign converts to the positive coefficient. For n=0 use signed coefficients on positive rays.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(c), pp.407–408 (nonnegative version by the same proof). Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### thm-change-of-variables-for-oriented-manifold-diffeomorphisms

Claim/conventions: For a globally orientation-preserving diffeomorphism F:M->N and omega in Omega_c^n(N), integral_M F*omega=integral_N omega; global reversal inserts minus. For varying signs across components apply the formula componentwise.

Dependencies: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement, prop-reversing-orientation-negates-the-integral, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges.

Proof/dependency rationale: Pull back a subordinate partition and its charts. F^-1 maps compact sets to compact sets. Zero-dimensional case is a signed bijection of finite supports.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(d), pp.407–408. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-integration-over-an-oriented-embedded-submanifold

Claim/conventions: For an oriented embedded k-submanifold j:S->M and a smooth k-form omega such that j*omega is compactly supported on S, define integral_S omega intrinsically as integral_S j*omega. It is unchanged by orientation-preserving reparametrization.

Dependencies: thm-change-of-variables-for-oriented-manifold-diffeomorphisms, def-embedded-smooth-submanifold-with-boundary, def-pullback-of-a-differential-form.

Proof/dependency rationale: Compact support must be checked on S, not inferred for a nonproper inclusion. Pullback functoriality and change of variables give invariance.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee submanifold paragraph p.406. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-integration-of-top-forms-by-finite-parametrizations

Claim/conventions: Let omega be a compactly supported smooth top form on an oriented n-manifold, n>=1. Suppose finitely many bounded open Jordan domains D_i have smooth maps F_i from neighborhoods of their closures, restricting to orientation-preserving diffeomorphisms onto pairwise disjoint open W_i, and supp omega lies in the union of closures W_i. Then integral_M omega=sum_i integral_D_i F_i*omega.

Dependencies: prop-integration-over-an-oriented-embedded-submanifold, prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components, lem-c-one-images-of-content-zero-compact-sets-have-content-zero, lem-integral-additivity-over-a-content-zero-almost-partition, thm-change-of-variables-for-compact-jordan-sets.

Proof/dependency rationale: Localize by finitely many small charts extending across genuine faces. Boundary images have chartwise content zero by the published C1 null-image lemma; apply finite almost-partition additivity and Jordan change of variables. This legitimizes circle cuts and fundamental polygons without invoking a manifold-with-corners theorem.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.8 and proof, pp.408–409. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### def-one-density-on-a-finite-dimensional-real-vector-space

Claim/conventions: A real-valued function delta on ordered bases of an n-dimensional real vector space is a one-density if delta(v A)=abs(det A)delta(v); extend by zero to dependent n-tuples for n>=1. For n=0 it is a scalar on the empty basis. Real coefficients may be negative.

Dependencies: prop-the-top-exterior-power-is-one-dimensional.

Proof/dependency rationale: Separate the one-dimensional real density space from its nonnegative cone. No orientation is required.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee (16.18) and Proposition 16.35, pp.428–429. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-one-densities-form-a-one-dimensional-vector-space

Claim/conventions: Densities form a one-dimensional real vector space, determined by their value on any basis; the nonzero nonnegative densities form one canonical positive ray.

Dependencies: def-one-density-on-a-finite-dimensional-real-vector-space.

Proof/dependency rationale: Compare every basis to a fixed basis by a unique invertible matrix. This supplies the fiber for density-bundle gluing.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.35(a,b,d), pp.428–429. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### def-density-bundle-and-smooth-density

Claim/conventions: The density bundle has fiber D(T_pM), with local frame |dx^1...dx^n| and absolute-Jacobian transition law; a smooth density is a section with smooth local real coefficients. In dimension zero the bundle is canonically M times R.

Dependencies: prop-one-densities-form-a-one-dimensional-vector-space, thm-tensor-transition-laws-define-a-smooth-vector-bundle.

Proof/dependency rationale: Apply vector-bundle gluing to the positive nonzero absolute Jacobian cocycle. The proof that this gives a smooth line bundle is carried inline in the definition as its well-definedness explanation.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.36, pp.429–430; Nicolaescu Definition 3.4.1. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-the-absolute-value-of-a-top-form-is-a-density

Claim/conventions: Pointwise |omega| is a nonnegative continuous density, with |omega|=|-omega|. It is smooth wherever omega is nonvanishing; it need not be smooth at zeros (omega=x dx).

Dependencies: def-density-bundle-and-smooth-density.

Proof/dependency rationale: Use the determinant law and absolute value; |x| at zero is the regularity counterexample. This is not the linear signed correspondence below.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.35(c), p.428 and nonvanishing paragraph p.430; Nicolaescu Example 3.4.2(b) with corrected regularity. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-every-smooth-manifold-admits-a-positive-smooth-density

Claim/conventions: Every smooth manifold with or without boundary has a smooth positive density, regardless of orientability.

Dependencies: def-density-bundle-and-smooth-density, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary.

Proof/dependency rationale: Sum partition-weighted coordinate-frame densities. At least one weight is positive at every point and all coordinate densities are positive.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.37, p.430. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-density-pullback-under-local-diffeomorphisms

Claim/conventions: For a local diffeomorphism F of equal-dimensional manifolds, F*(f|dy|)=(f o F)|det DF||dx| is smooth for smooth f, commutes with composition, and respects scalar multiplication.

Dependencies: def-density-bundle-and-smooth-density.

Proof/dependency rationale: The determinant is nonzero, so its absolute value is smooth locally. Do not assert smoothness for arbitrary maps: F(x)=x^2 pulls |dy| back to 2|x||dx|.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Propositions 16.38 and 16.40, pp.430–431, with local-diffeomorphism qualification. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### def-integral-of-a-compactly-supported-smooth-density

Claim/conventions: Integrate chart coefficients of compactly supported smooth densities by Riemann integration and sum a partition, with no chart-orientation sign. In dimension zero sum scalar coefficients over finite support.

Dependencies: def-density-bundle-and-smooth-density, lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary.

Proof/dependency rationale: Use true-face Riemann extensions as for forms, and global partitions as before; independence is proved in the next theorem.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee density-integral construction pp.431–432; Nicolaescu Proposition 3.4.3. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### thm-density-integration-is-defined-without-an-orientation

Claim/conventions: Density integration is independent of charts and partition, linear, local, positive on nonzero nonnegative smooth compactly supported densities, and invariant under all diffeomorphisms. The finite-parametrization formula holds with absolute Jacobians.

Dependencies: def-integral-of-a-compactly-supported-smooth-density, prop-density-pullback-under-local-diffeomorphisms, thm-oriented-chart-integrals-are-coordinate-independent, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form, thm-multidimensional-integral-properties, prop-integration-of-top-forms-by-finite-parametrizations.

Proof/dependency rationale: Repeat the product-partition proof with absolute determinants; positivity follows on a small coordinate rectangle. For parametrizations repeat the null-boundary additivity proof, without choosing orientations.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Propositions 16.41–16.42 and Exercises 16.43–16.44, pp.431–432; Nicolaescu Proposition 3.4.3. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-on-an-oriented-manifold-top-forms-and-signed-densities-correspond

Claim/conventions: A chosen orientation gives a linear smooth line-bundle isomorphism omega=f dx -> sigma_phi f |dx|, independent of chart, preserving compact support and integral. At an oriented point send f to epsilon f. Reversing orientation negates this map.

Dependencies: thm-density-integration-is-defined-without-an-orientation, def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold.

Proof/dependency rationale: Positive determinant comparisons give gluing; signed charts cover n=1 endpoints. This map keeps the sign of coefficients and is not omega->|omega|.

Source: https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf — Nicolaescu §3.4.2, p.120, paragraph from the orientation isomorphism through the gluing formula. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### rem-lebesgue-extension-of-manifold-density-integration

Claim/conventions: This page constructs only compactly supported smooth density integrals. Measurable nonnegative and L1 density integration, and associated Radon measures, belong to the Lebesgue/change-of-variables and regular-measure development.

Dependencies: thm-density-integration-is-defined-without-an-orientation.

Proof/dependency rationale: Scope remark, no unproved measurable statement used as a dependency. Record the smooth compact-support restriction relative to Nicolaescu's Lebesgue coordinate construction.

Source: https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf — Nicolaescu Proposition 3.4.3(c), p.113. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary

Claim/conventions: The coordinate exterior derivative, pullback naturality, Leibniz rule, support containment and Cartan identity hold for smooth forms on manifolds with boundary. Lie derivatives for arbitrary smooth vector fields are defined by local extensions at boundary points.

Dependencies: cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary, lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space, thm-local-coordinate-formula-for-the-exterior-derivative, thm-the-exterior-derivative-commutes-with-pullback, thm-the-exterior-derivative-is-a-graded-derivation, thm-cartans-magic-formula, prop-the-exterior-derivative-does-not-enlarge-support.

Proof/dependency rationale: Use extensions and equality of all derivatives on the half-space. The usual local identities hold on extensions and restrict independently of choices; no two-sided boundary flow is required.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Stokes proof pp.412–414 and published extension/calculus dependencies. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### lem-euclidean-stokes-for-a-compactly-supported-form

Claim/conventions: For n>=1 and eta in Omega_c^(n-1)(R^n), integral_Rn d eta=0.

Dependencies: def-integral-of-an-oriented-chart-supported-top-form, lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary, cor-repeated-riemann-integrals-on-rectangles, thm-newton-leibniz-with-interior-derivative.

Proof/dependency rationale: Write eta=sum_i a_i dx^1 wedge ... omit dx^i ... wedge dx^n. The derivative contributes (-1)^(i-1) partial_i a_i. Integrate on a large rectangle and apply Fubini/FTC; all endpoint values vanish.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 proof pp.412–413; Merry Theorem 26.17. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### lem-half-space-stokes-for-a-compactly-supported-form

Claim/conventions: For n>=1, eta in Omega_c^(n-1)(H^n) satisfies integral_Hn d eta=integral_boundaryHn eta with outward-normal-first orientation.

Dependencies: lem-euclidean-stokes-for-a-compactly-supported-form, def-induced-boundary-orientation, def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold, prop-integration-over-an-oriented-embedded-submanifold.

Proof/dependency rationale: Using unsiged a_i omitted-coordinate coefficients, only i=n contributes: (-1)^n integral a_n(x prime,0). Since outward vector is -e_n, boundary standard-frame orientation sign is (-1)^n. For n=1 this is the negative signed endpoint value.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 proof, pp.412–413. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### lem-partition-localization-of-stokes

Claim/conventions: For compactly supported eta, eta=sum_i rho_i eta and d eta=sum_i d(rho_i eta), with finite relevant sums; the d rho_i wedge eta terms cancel. Boundary restrictions form the corresponding finite localization.

Dependencies: lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form, prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary.

Proof/dependency rationale: On a neighborhood of supp eta, sum d rho_i=d1=0; off that support eta and d eta vanish. Boundary restriction has compact support because the boundary is closed.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 proof p.414; Merry Theorem 26.16 proof PDF p.218. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### thm-general-stokes-theorem

Claim/conventions: For an oriented smooth n-manifold with boundary, n>=1, and eta in Omega_c^(n-1)(M), integral_M d eta=integral_boundaryM j*eta with outward-normal-first boundary orientation. Empty boundary contributes zero.

Dependencies: lem-half-space-stokes-for-a-compactly-supported-form, lem-partition-localization-of-stokes, thm-change-of-variables-for-oriented-manifold-diffeomorphisms, prop-integration-over-an-oriented-embedded-submanifold, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold.

Proof/dependency rationale: Apply local Euclidean or half-space formula to each partition summand. Signed charts and their induced boundary signs match on both sides. Compact boundary restriction and finite localization discharge convergence.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11, pp.411–414; Merry Theorem 26.16. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero

Claim/conventions: If M is oriented, boundaryless, dim M=n>=1 and eta in Omega_c^(n-1)(M), then integral_M d eta=0. In particular every exact top form has zero integral when M is compact.

Dependencies: thm-general-stokes-theorem.

Proof/dependency rationale: Apply Stokes with empty boundary. The compactness requirement is on eta: do not silently replace it by compactness of d eta.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Corollary 16.13, p.414 (compact-support version from Theorem 16.11). Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact

Claim/conventions: On a compact oriented boundaryless n-manifold, n>=1, a smooth top form with nonzero integral is not exact. In particular a positive volume form on a nonempty such manifold is not exact.

Dependencies: cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero, prop-positive-compactly-supported-top-forms-have-positive-integral.

Proof/dependency rationale: Contradict the preceding vanishing result; positivity supplies the volume-form case. Closed means compact without boundary.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Corollary 16.13; Merry Corollary 27.2 proof (nonexactness consequence without cohomology terminology). Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries

Claim/conventions: If M is oriented with boundary, n>=1, and eta in Omega_c^(n-1)(M) is closed, then integral_boundaryM eta=0. Compact M allows arbitrary smooth eta.

Dependencies: thm-general-stokes-theorem.

Proof/dependency rationale: Set d eta=0 in Stokes.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Corollary 16.14, p.414. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### cor-a-nonzero-period-obstructs-exactness-and-bounding

Claim/conventions: Let S be an oriented compact boundaryless embedded k-submanifold, k>=1, and omega a closed k-form on M. If integral_S omega is nonzero then omega is not exact on M and S is not the induced oriented boundary of a compact embedded (k+1)-submanifold in M.

Dependencies: cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero, cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries, prop-integration-over-an-oriented-embedded-submanifold, lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary.

Proof/dependency rationale: For exactness pull back a putative primitive to compact S and apply vanishing. For bounding apply closed-boundary integral to the proposed compact filling.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Corollary 16.15, pp.414–415. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### cor-fundamental-theorem-of-calculus-from-stokes

Claim/conventions: For [a,b] with increasing orientation and smooth f, the two signed boundary points give integral_[a,b] df=f(b)-f(a), agreeing with the published Riemann FTC.

Dependencies: thm-general-stokes-theorem, thm-newton-leibniz-with-interior-derivative.

Proof/dependency rationale: The determinant-line boundary signs are -1 and +1; coordinate df is f prime dx. This is an agreement result, not a replacement for the FTC dependency in the local proof.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Example 16.12, p.414. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### cor-greens-theorem-from-general-stokes

Claim/conventions: On the common smooth compact planar-region scope, d(P dx+Q dy)=(Q_x-P_y)dx wedge dy and d(P dy-Q dx)=(P_x+Q_y)dx wedge dy identify Stokes with published circulation and outward-flux Green formulas, using counterclockwise outer boundary and clockwise holes.

Dependencies: thm-general-stokes-theorem, cor-greens-theorem-in-circulation-form, cor-the-planar-divergence-theorem-flux-form-of-greens-theorem, prop-integration-of-top-forms-by-finite-parametrizations.

Proof/dependency rationale: Compute d and match outward-normal-first with positive tangent; tangent (dx,dy) gives outward flux P dy-Q dx. Cite classical statements on their published elementary scope; no assertion that corners are already smooth manifolds.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.17, p.415; classical items cited for both statements. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### cor-classical-three-dimensional-stokes-theorem

Claim/conventions: For a smooth oriented compact surface with boundary in R^3, alpha=F_1 dx+F_2 dy+F_3 dz has d alpha=i_(curl F)(dx wedge dy wedge dz). Its pullback gives the classical normal curl flux and boundary circulation. On the common smooth patch scope this equals the published classical Stokes theorem.

Dependencies: thm-general-stokes-theorem, prop-integration-over-an-oriented-embedded-submanifold, prop-integration-of-top-forms-by-finite-parametrizations, thm-the-classical-stokes-theorem-for-a-c2-surface-patch, def-divergence-and-curl-of-a-c1-vector-field.

Proof/dependency rationale: Expand both expressions and evaluate on oriented tangent vectors to get (curl F) dot (r_u cross r_v); pull alpha to boundary curves for F dot r prime. Euclidean inner product identification is explicit.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.34 proof, p.427. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### def-volume-form-on-an-oriented-manifold

Claim/conventions: A volume form is a nowhere-vanishing smooth top form positive on the chosen determinant ray. On an oriented zero-manifold this means epsilon(p)mu(p)>0.

Dependencies: def-oriented-smooth-manifold-and-oriented-chart, thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form.

Proof/dependency rationale: No Riemannian metric is chosen; positive global top forms exist by the published orientation criterion, with local signs reconciled to the specified orientation.

Source: https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf — Nicolaescu §3.4.2 orientation-isomorphism paragraph p.120; Lee Proposition 16.6(c). Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### def-divergence-relative-to-a-volume-form

Claim/conventions: For a smooth vector field X and a positive volume form mu, div_mu X is the unique smooth function with L_X mu=(div_mu X)mu. At a boundary use the local-extension Lie derivative.

Dependencies: def-volume-form-on-an-oriented-manifold, lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary.

Proof/dependency rationale: Top exterior power is one-dimensional and mu never vanishes, giving uniqueness; next result proves coordinate formula and smooth gluing.

Source: https://encyclopediaofmath.org/wiki/Divergence — Encyclopedia of Mathematics, Divergence, Comments paragraph beginning Let M be an n-dimensional manifold. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-divergence-is-well-defined-and-has-the-coordinate-formula

Claim/conventions: If mu=rho dx^1 wedge ... wedge dx^n with rho nowhere zero, then div_mu X=rho^-1 sum_i partial_i(rho X^i). This is a smooth globally defined function, including at the boundary. For n=0 X=0 and divergence is zero.

Dependencies: def-divergence-relative-to-a-volume-form, thm-local-coordinate-formula-for-the-exterior-derivative.

Proof/dependency rationale: Cartan identity and degree n+1 vanishing reduce to differentiating i_X mu. Uniqueness of the scalar quotient makes the formula coordinate independent. No normal-flow assumption.

Source: https://encyclopediaofmath.org/wiki/Divergence — EoM Divergence Comments; Lee defining divergence equation p.423; coordinate derivation from published Cartan formula. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-divergence-satisfies-the-product-rule

Claim/conventions: For smooth f and X, div_mu(fX)=df(X)+f div_mu X.

Dependencies: prop-divergence-is-well-defined-and-has-the-coordinate-formula.

Proof/dependency rationale: Expand partial_i(rho f X^i), divide by rho, and identify sum X^i partial_i f=df(X).

Source: https://encyclopediaofmath.org/wiki/Divergence — EoM Divergence Comments definition; direct algebraic consequence of the coordinate formula. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### lem-divergence-form-identity

Claim/conventions: For dim M=n>=1, d(i_X mu)=(div_mu X)mu.

Dependencies: def-divergence-relative-to-a-volume-form, lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary.

Proof/dependency rationale: Cartan identity and d mu=0 for degree reasons. At boundary restrict local extensions.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee divergence definition p.423; EoM Divergence Comments. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### thm-divergence-theorem-relative-to-a-volume-form

Claim/conventions: If M is oriented with boundary, dim M>=1, mu is a positive volume form and X is compactly supported, then integral_M (div_mu X)mu=integral_boundaryM i_X mu. If M is compact no support qualification on X is needed.

Dependencies: lem-divergence-form-identity, thm-general-stokes-theorem.

Proof/dependency rationale: Contraction has support contained in supp X; apply general Stokes. Normal-flux formula for a general Riemannian metric is reserved for DG-18.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.32 proof p.424, using arbitrary positive mu in the form identity. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### prop-general-stokes-agrees-with-classical-gauss-flux

Claim/conventions: For mu=dx wedge dy wedge dz, div_mu F is the published Euclidean divergence, and a surface parametrization pulls i_F mu back to (F dot (r_u cross r_v)) du wedge dv. Thus volume-form divergence agrees with published Gauss flux on the common smooth region scope.

Dependencies: thm-divergence-theorem-relative-to-a-volume-form, prop-integration-of-top-forms-by-finite-parametrizations, thm-the-divergence-theorem-for-an-elementary-solid-region, def-oriented-unit-normal-and-flux-of-a-surface-patch.

Proof/dependency rationale: Coordinate determinant evaluation matches scalar Riemann volume and oriented vector flux. Do not re-mint the classical divergence theorem or extend its piecewise regular scope silently.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Lemma 16.30 and Theorem 16.32, pp.423–424. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### fs-the-integral-of-a-top-form-is-defined-without-an-orientation

Claim/conventions: False assertion: a top form has a canonically signed integral without choosing an orientation.

Dependencies: prop-reversing-orientation-negates-the-integral, def-integral-of-an-oriented-chart-supported-top-form.

Proof/dependency rationale: Integrate dx on [0,1] with opposite orientations to get 1 and -1. Compare the orientation-free density integral.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(b) and Densities introduction pp.407, 428. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### fs-the-integral-of-a-form-is-the-sum-over-an-arbitrary-atlas-without-a-partition

Claim/conventions: False assertion: adding chart integrals over an arbitrary covering atlas integrates a top form once.

Dependencies: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement, prop-positive-compactly-supported-top-forms-have-positive-integral.

Proof/dependency rationale: Choose distinct overlapping charts and a nonzero nonnegative bump supported in their overlap: the unweighted sum is twice its positive integral.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.5 proof pp.405–406 (necessity of partition weights). Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### fs-the-integral-of-every-exact-form-on-every-manifold-is-zero

Claim/conventions: False assertion: every exact top form has zero total integral whenever that integral exists.

Dependencies: thm-general-stokes-theorem, cor-fundamental-theorem-of-calculus-from-stokes.

Proof/dependency rationale: On [0,1], dt=d(t) integrates to 1. On R choose a smooth transition F from 0 to 1 constant outside a compact interval; dF is compactly supported but integrates to 1, so compactness of the primitive matters.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 and Corollary 16.13 hypotheses, pp.411–414. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### fs-a-smooth-density-is-the-same-thing-as-a-top-form-on-a-nonorientable-manifold

Claim/conventions: False assertion: the canonical identification between top forms and densities exists without orientability.

Dependencies: def-density-bundle-and-smooth-density, prop-every-smooth-manifold-admits-a-positive-smooth-density, thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form.

Proof/dependency rationale: The density bundle has a positive smooth section on every manifold; a nowhere-zero top form would orient it. For the Mobius band the transition determinant changes sign while its absolute value does not.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.37 and following explanation, p.430. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### ex-integrating-a-compactly-supported-form-in-two-overlapping-charts

Claim/conventions: For f in C_c^infinity((-1,1)), use charts x and y=2x on overlapping domains containing its support, and weights rho,1-rho. The two coordinate integrals sum to integral f dx independently of rho.

Dependencies: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement, def-integral-of-an-oriented-chart-supported-top-form.

Proof/dependency rationale: The second coefficient is (1-rho(y/2))f(y/2)/2. Substitute and add; choose a smooth partition on a neighborhood of the support and extend by unused charts outside.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.5 proof pp.405–406. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### ex-orientation-reversal-under-reflection

Claim/conventions: For compactly supported f on R, reflection r(x)=-x gives integral r*(f dx)=-integral f dx but integral r*(f|dx|)=integral f|dx|.

Dependencies: thm-change-of-variables-for-oriented-manifold-diffeomorphisms, thm-density-integration-is-defined-without-an-orientation.

Proof/dependency rationale: Differentiate reflection and compare the negative determinant with its absolute value.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(d) and Proposition 16.42(c). Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### ex-integration-of-a-density-on-the-mobius-band

Claim/conventions: On the compact Mobius band (R times [-1,1])/((s,t)~(s+1,-t)), |ds dt| descends to a positive smooth density and its integral is 2.

Dependencies: thm-density-integration-is-defined-without-an-orientation, prop-density-pullback-under-local-diffeomorphisms.

Proof/dependency rationale: Give quotient charts directly; seam transition has absolute Jacobian 1. Apply density parametrization formula to (0,1) times (-1,1); seam and boundary images are null. Reprove sign transition inline; no B-page dependency.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.37 and Exercise 16.44; Nicolaescu Definition 3.4.1. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### ex-stokes-on-an-oriented-interval

Claim/conventions: For f(t)=t^2 on [0,1], integral df=1; boundary signs give f(1)-f(0)=1. The right endpoint chart u=1-t has negative orientation sign.

Dependencies: cor-fundamental-theorem-of-calculus-from-stokes, lem-half-space-stokes-for-a-compactly-supported-form.

Proof/dependency rationale: Evaluate the two point integrals explicitly, and check the local upper-half-line formula at each endpoint.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Example 16.12 and p.405 negative-chart explanation. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### ex-greens-theorem-on-a-planar-disk

Claim/conventions: On the unit disk, alpha=(-y dx+x dy)/2 satisfies d alpha=dx wedge dy, hence integral_boundary alpha=pi. For F=(x/2,y/2), its flux form is the same alpha.

Dependencies: cor-greens-theorem-from-general-stokes, prop-integration-of-top-forms-by-finite-parametrizations.

Proof/dependency rationale: Use polar parameterization for the area and circle boundary; verify counterclockwise orientation.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.17 and Example 16.16, p.415. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### ex-classical-stokes-on-an-oriented-graph-surface

Claim/conventions: For the upward graph z=x^2+y^2 over the unit disk and F=(-y/2,x/2,0), curl F=(0,0,1); both flux and boundary circulation equal pi.

Dependencies: cor-classical-three-dimensional-stokes-theorem, prop-integration-of-top-forms-by-finite-parametrizations.

Proof/dependency rationale: Evaluate r_x cross r_y=(-2x,-2y,1) and the boundary curve (cos t,sin t,1), with its induced increasing-angle orientation.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.34 proof, p.427 (explicit smooth graph specialization). Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### ex-divergence-theorem-on-a-euclidean-ball

Claim/conventions: For the unit ball and F=(x,y,z), div F=3 and the outward flux is 4pi; for F=(x,0,0), both integrals are 4pi/3.

Dependencies: prop-general-stokes-agrees-with-classical-gauss-flux, prop-integration-of-top-forms-by-finite-parametrizations.

Proof/dependency rationale: Use the radial sphere parametrization and pullback of i_F mu. Integrate the coordinate ball volume by published Fubini/polar formulas, or explicitly integrate elementary sections.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Example 16.9 pp.409–410; Nicolaescu Example 3.4.14 pp.120–121. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### ex-the-angular-form-has-period-two-pi

Claim/conventions: The angular form (-y dx+x dy)/(x^2+y^2) has oriented integral 2pi on the unit circle. Consequently that circle cannot bound a compact oriented smooth surface inside the punctured plane.

Dependencies: cor-a-nonzero-period-obstructs-exactness-and-bounding, prop-integration-of-top-forms-by-finite-parametrizations.

Proof/dependency rationale: Compute d omega=0 inline, pull back to theta on a cut circle, apply finite parametrization. Previously published no-potential proof is acknowledged, not re-minted; the new conclusion is the bounding obstruction and intrinsic integral.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Example 16.16 and Corollary 16.15, p.415. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### ex-exact-top-form-with-nonzero-integral-on-a-manifold-with-boundary

Claim/conventions: On the unit disk, dx wedge dy=d(x dy) has integral pi, equal to the integral of its primitive x dy on the circle. The primitive is not an exact one-form.

Dependencies: thm-general-stokes-theorem, prop-integration-of-top-forms-by-finite-parametrizations.

Proof/dependency rationale: Compute both integrals. Distinguish exact top form from its primitive: an exact (n-1)-form cannot have a nonzero integral on a compact boundary. This repairs the design's ambiguous exact-form-with-nonzero-boundary-integral example.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 and Corollary 16.14. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### cex-a-noncompactly-supported-form-with-divergent-chart-integral

Claim/conventions: The smooth top form dx on R has unbounded integrals 2R over [-R,R], so smoothness alone does not give a finite manifold integral.

Dependencies: def-integral-of-an-oriented-chart-supported-top-form.

Proof/dependency rationale: Evaluate the exhausting-interval integrals directly; this is not a definition of improper integration on arbitrary manifolds.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee p.407 paragraph on noncompactly supported forms and convergence. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### cex-opposite-boundary-orientation-gives-the-wrong-sign-in-stokes

Claim/conventions: For a smooth compactly supported f on [0,infinity) with f(0)=1, integral f prime=-1. Giving its endpoint positive rather than induced negative orientation would give +1 on the boundary.

Dependencies: lem-half-space-stokes-for-a-compactly-supported-form.

Proof/dependency rationale: Choose a smooth cutoff constant 1 near zero and apply one-variable FTC. This tests the analytic Stokes identity, supplementing the existing boundary-orientation false statement.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 proof pp.412–413. Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

### ex-change-of-variables-on-the-oriented-circle

Claim/conventions: For F(e^(it))=e^(i(t+a sin t)) with |a|<1, F is an orientation-preserving circle diffeomorphism; the standard angular form pulls back to (1+a cos t)dt and still integrates to 2pi.

Dependencies: thm-change-of-variables-for-oriented-manifold-diffeomorphisms, prop-integration-of-top-forms-by-finite-parametrizations.

Proof/dependency rationale: The increasing lift has derivative 1+a cos t>0 and shifts by 2pi under t->t+2pi, so its inverse descends. Integrate the explicit pullback.

Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(d), pp.407–408 (explicit circle specialization). Scaffold recorded; authoring proof and its validators remain Step 5 obligations.

## Manifest checkpoint complete

47 A items and 12 B items recorded. No split required at the 60-item cap. Every object has explicit deps. Next: exact harvest mapping, published dependency statement checks, all required validators.

## Dependency correction checkpoint

Read the published compact-space definition, ambient compactness lemma, and countable-cover vector-bundle cocycle theorem. Corrected the support dependency to `def-compact-space`, added ambient compactness to the local-finiteness lemma, FTC to the side-preserving transition lemma, and closed boundary to localization. The density bundle uses `thm-vector-bundle-construction-from-a-smooth-cocycle` with a countable atlas and the same half-space gluing argument. All claims and other dependencies remain as recorded above.

## Coverage checkpoint

Harvest recorded from Lee, Merry, Nicolaescu, and the supplementary Encyclopedia of Mathematics definition. Source headings are separated from canonical scaffold components; every included/inline row names its carrier. Deferred metric, Haar, and cohomology formulations name their planned destination. No source was replaced or result deleted to satisfy a gate. Source transport stamps remain an independent obligation.

## Final mathematical correction checkpoint

Re-read Lee Proposition 16.8 and its entire proof (printed pp.408–409). `prop-integration-of-top-forms-by-finite-parametrizations` uses maps on closed Jordan domains smooth up to their boundary **in target coordinates**; it does not require an M-valued extension across a genuine target boundary. Coordinate extensions suffice for the C1 null-image argument. This includes closed-disk parametrizations and carries into the density version. Dependencies unchanged. The Mobius example now explicitly supplies Hausdorffness, second countability, compactness and seam charts; the density/top-form false statement proves the central-loop sign obstruction inline rather than assuming a B-page fact.

## Validation and handoff — scaffold written; source gates BLOCKED

- `node tools/coverage-checklist.mjs --require-destination research/frontier-33-batch-13.coverage.json`: PASS, 1 A page, 139 harvest/canonical rows, zero errors or warnings. There are 47 A and 12 B items, all with explicit deps; no split required.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-13.pages.json`: PASS, 59 scoped items, zero errors or warnings.
- `node tools/manifest-deps.mjs research/frontier-33-batch-13.pages.json`: PASS, 59 items, zero normalization and errors. Whole-run invocation also passed at 787 items.
- Required whole-run `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json`: FAIL at the 786-item snapshot, solely `thm-kernel-range-annihilator-identities` depending on absent `def-weak-star-topology` and `thm-bipolar-closure-for-linear-subspaces`. These are outside batch 13; no other owner's artifact was edited. Other manifests are changing concurrently, so this is a recorded snapshot, not a claim about future run state.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS with pre-existing redundant-prerequisite warnings. Since the canonical plan does not yet carry this scaffold, additionally ran the same validator on `/tmp/frontier33-b13/projected-plan.json`, formed by substituting only these two page records into a temporary copy. PASS after the final mathematical correction: no cycles, forward references, B-page dependencies, unresolved ids, or page-size violation. Canonical plan was not modified.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-13.coverage.json --stamp --timeout-sec 15`: FAIL, all four URLs return local `EAI_AGAIN`; 0/4 stamps. No fabricated `fetch_verified` stamp or content hash was added.
- `node tools/url-sweep.mjs --coverage research/frontier-33-batch-13.coverage.json --out /tmp/frontier33-b13/url-liveness.json --recover --fail-on-dead --timeout-ms 5000`: FAIL, all four hosts fail local curl DNS resolution (code 6), zero recoveries. The output's generic “re-sourcing is justified” line does not establish that any document is unavailable: the browser successfully fetched and exposed their relevant text. Archive attempts share the local DNS restriction. Preserve the same-document URLs and all harvest rows; replacing texts would not repair local DNS.

Required next action: rerun fetch stamping and URL recovery/liveness from a runner with functioning DNS/network access, and rerun whole-run policy after its other-owner dependency repair. No permissions were requested. This batch is NOT declared ready while these required validators fail. Step 5 authoring and its proof/review gates remain future obligations; the present files are scaffolds, not published mathematics.

Final artifact hashes (before this notes entry; no independent review claimed):
- `frontier-33-batch-13.pages.json` SHA-256 `02f13e8f55d3af701e0fdb82519566173cc86e7bad5655c4990edae89b147c3f`
- `frontier-33-batch-13.coverage.json` SHA-256 `0dcf72e398dc4f37285292020a4927e148b3c077bd0986ff634d804ab4d6b545`

## Step-3 fix pass

- **Stable-review finding ids:** none for batch 13. The batch section of
  `research/frontier-33-alpha-d-step3-scaffold-review.md` says that no
  scaffold claim, item id, prerequisite, page order, or coverage record
  required repair, and gives
  `integration-of-forms-and-the-general-stokes-theorem` the verdict
  `sufficient`. Therefore there is no finding to apply or push back on.
  **Disposition:** no manifest or coverage amendment. **Changed scaffold
  record:** none (this checkpoint note is the only file changed in this pass).
- **Evidence rechecked:** the manifest still contains 47 A items and 12 B
  items, every one with an explicit `deps` array. The design/spec discrepancy
  remains the already-recorded historical B-page slug and direct-requirement
  difference; the current spec's orders 469/470 and companion slug remain in
  force. The source harvest still supplies concrete dispositions for all 139
  results. In particular, Lee Ch. 16, Theorem 16.11 and the density results
  through Proposition 16.42; Merry Lecture 26, Theorems 26.16--26.17; and
  Nicolaescu §3.4.1/Proposition 3.4.3 support the retained local-to-global,
  density, and partition-independence route. The Nicolaescu author-hosted
  source search also exposed the original current PDF and its §3.4 text;
  the recorded archive URL was independently fetch-verified below.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-33-batch-13.coverage.json`: PASS — 1 page, 139 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json`: PASS — 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS — no item-level cycle, forward reference, B-page dependency, or unresolved id; its redundant-prerequisite notices are non-failing and outside this batch's authorised files.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-13.coverage.json --timeout-sec 30`: PASS — 4/4 recorded sources fetch-verified. `node tools/source-backing.mjs --coverage research/frontier-33-batch-13.coverage.json --liveness research/frontier-33-url-liveness.json --require-verified`: PASS — all 34 checked source carriers remain backed by an openable source.
- **Current unchanged scaffold fingerprints:**
  `frontier-33-batch-13.pages.json` SHA-256
  `02f13e8f55d3af701e0fdb82519566173cc86e7bad5655c4990edae89b147c3f`;
  `frontier-33-batch-13.coverage.json` SHA-256
  `633a210f845dbf767d3d6c7768fff93493b535912c8e31d0604b1c96f0ba0db0`.

## Step-5 authoring

Scope: the 59 assigned items and two differential-geometry pages only. Required inputs and group-d review read. Existing independent review and source-fetch records preserved. Source passages reread from Lee Ch.16 (including complete chart/partition, parametrization and Stokes proofs), Merry Lecture 26 and Proposition 27.1/Corollary 27.2, and Nicolaescu §3.4 density passages; EoM Comments checked for the supplied-volume definition. The source qualifications recorded above remain in force. All authored content remains draft. No judge record is created. Per-item checkpoints follow; final validator results will be appended below.

### Authored def-compactly-supported-differential-form

Claim/conventions: Let $M$ be a smooth manifold, possibly with boundary, and $k\geq0$. For $\omega\in\Omega^k(M)$ define
$$\operatorname{supp}\omega=\overline{\{p\in M:\omega_p\neq0\}}^{\,M},\qquad \Omega_c^k(M)=\{\omega\in\Omega^k(M):\operatorname{supp}\omega\text{ is compact}\}.$$
The closure and compactness are in $M$, including its genuine boundary. Zero is the intrinsic zero of each exterior-power fiber, so this definition is independent of trivialization. The zero form has empty support.

Sources and locators: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf — Merry Definition 26.7, Lecture 26 p.2 / PDF p.214

Dependencies: def-smooth-differential-k-form, def-interior-closure-boundary-top, def-compact-space.

Disposition: draft authored; statement literature-derived; definition/scope text; no proof claim. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form

Claim/conventions: If $(C_i)_{i\in I}$ is a locally finite family of closed subsets of a manifold and $K$ is compact, only finitely many $C_i$ meet $K$. There is an open neighborhood of $K$ disjoint from all the other $C_i$. In particular, for a smooth partition of unity $(\rho_i)$ and $\omega\in\Omega_c^k(M)$, only finitely many $\rho_i\omega$ are nonzero.

Sources and locators: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf — Merry Definition 26.11 and Lemma 26.12, PDF pp.215–216

Dependencies: def-compactly-supported-differential-form, def-smooth-partition-of-unity-subordinate-to-an-open-cover, lem-compactness-of-a-subspace-is-ambient.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions

Claim/conventions: Let $n\geq1$, $H^n=\{x\in\mathbb R^n:x_n\geq0\}$, and let $U$ be relatively open in $H^n$. If $f$ is smooth on $U$ with compact support $K\subset U$, set $\widetilde f=f$ on $U$ and $\widetilde f=0$ on $\mathbb R^n\setminus U$. Then $\widetilde f$ is bounded, compactly supported, smooth away from $\{x_n=0\}$, and Riemann integrable. Its Euclidean integral is independent of the bounding rectangle and of any auxiliary smooth extension. For an interior chart $U\subset\mathbb R^n$, the zero extension is smooth everywhere.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee integration of forms pp.402–404; explicit Riemann justification from cited published items

Dependencies: def-compactly-supported-differential-form, cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary, lem-smooth-extension-from-a-closed-neighbourhood, thm-lebesgue-criterion-in-rn, def-null-and-content-zero-in-rn, cor-archimedean-reciprocal, lem-compactly-supported-riemann-integral-is-well-defined.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored def-integral-of-an-oriented-chart-supported-top-form

Claim/conventions: Let $M^n$ be oriented and $\omega$ a smooth top form with compact support contained in a connected chart $(U,\phi)$. For $n\geq1$ write
$$(\phi^{-1})^*\omega=f\,dx^1\wedge\cdots\wedge dx^n.$$
Let $\sigma_\phi\in\{1,-1\}$ be the sign of its coordinate frame relative to the chosen orientation. Define the chart integral by
$$I_\phi(\omega)=\sigma_\phi\int_{\mathbb R^n}\widetilde f(x)\,dx.$$
Here $\widetilde f$ is the Riemann-integrable zero extension, including across a genuine half-space face, as in [[lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions]]. For $n=0$, a connected chart is a point $p$, and set $I_p(\omega)=\varepsilon(p)\omega(p)$ using its determinant-line sign. Empty support gives zero. Negative charts are allowed: the upper-half-line chart $u=b-t$ at the right endpoint of an increasing interval has sign $-1$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee (16.1), pp.404–406

Dependencies: lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions, def-oriented-smooth-manifold-and-oriented-chart, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-support-and-compactly-supported-riemann-integral-in-rn.

Disposition: draft authored; statement literature-derived; definition/scope text; no proof claim. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored lem-half-space-chart-transitions-extend-locally-to-side-preserving-diffeomorphisms

Claim/conventions: Let $n\geq1$ and $G:U\to V$ be a smooth diffeomorphism between relatively open subsets of $H^n$. At every $p\in U\cap\{x_n=0\}$ there are Euclidean open neighborhoods $O$ of $p$ and $O'$ of $G(p)$ and a smooth diffeomorphism $\widehat G:O\to O'$ extending $G$ locally, such that $\widehat G$ maps the positive, zero, and negative sides of $x_n=0$ onto the corresponding sides in $O'$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.3, p.404, together with the exact published boundary chain rule and inverse theorem

Dependencies: thm-smooth-invariance-of-manifold-boundary, prop-chain-rule-for-smooth-half-space-maps, lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space, thm-euclidean-inverse-function-theorem, thm-newton-leibniz-with-interior-derivative.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored thm-oriented-chart-integrals-are-coordinate-independent

Claim/conventions: On an oriented smooth $n$-manifold, including $n=0$ and genuine boundary, a smooth top form with compact support contained in two connected charts has the same signed chart integral in both charts.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Propositions 16.3–16.4, pp.404–405; Merry Lemma 26.8

Dependencies: def-integral-of-an-oriented-chart-supported-top-form, lem-half-space-chart-transitions-extend-locally-to-side-preserving-diffeomorphisms, cor-change-of-variables-for-compactly-supported-functions, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold

Claim/conventions: Assume $\mathrm{AC}_\omega$. For an oriented smooth manifold $M^n$, possibly with boundary, and $\omega\in\Omega_c^n(M)$, choose a smooth partition $(\rho_i)$ subordinate to connected interior or boundary charts $(U_i,\phi_i)$. For $n\geq1$ set
$$\int_M\omega=\sum_i I_{\phi_i}(\rho_i\omega).$$
Each product has compact support in its chart and only finitely many are nonzero, by [[lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form]]. For $n=0$ set
$$\int_M\omega=\sum_{p\in\operatorname{supp}\omega}\varepsilon(p)\omega(p).$$
A zero-manifold is discrete; the singleton open cover of a compact subset has a finite subcover. Thus this sum too is finite. Empty support or empty $M$ gives zero. Independence of the choices is discharged by [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]].

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee (16.2) and zero-dimensional paragraph, pp.405–406; Merry Definitions 26.11 and 26.15

Dependencies: thm-oriented-chart-integrals-are-coordinate-independent, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary.

Disposition: draft authored; statement literature-derived; definition/scope text; no proof claim. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement

Claim/conventions: The compact-support integral on an oriented manifold is independent of the chart cover, coordinate maps, subordinate partition, and refinement. If $U\subset M$ is open and contains $\operatorname{supp}\omega$, with its restricted orientation, then $\int_U\omega|_U=\int_M\omega$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.5, pp.405–406; Merry Lemma 26.12

Dependencies: def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form, thm-oriented-chart-integrals-are-coordinate-independent.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components

Claim/conventions: For compactly supported smooth top forms $\omega,\eta$ on an oriented $M^n$ and $a,b\in\mathbb R$,
$$\int_M(a\omega+b\eta)=a\int_M\omega+b\int_M\eta.$$
Also $\int_M\omega=\sum_C\int_C\omega|_C$, where $C$ ranges over connected components with their restricted orientations; only finitely many meet $\operatorname{supp}\omega$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(a), pp.407–408

Dependencies: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement, thm-multidimensional-integral-properties.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-reversing-orientation-negates-the-integral

Claim/conventions: Let $-M$ have the opposite orientation on every component of an oriented smooth manifold $M$. For every compactly supported top form, $\int_{-M}\omega=-\int_M\omega$, in all dimensions.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(b), pp.407–408

Dependencies: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-positive-compactly-supported-top-forms-have-positive-integral

Claim/conventions: Let $\omega\in\Omega_c^n(M)$ be nonnegative on the positive determinant ray of an oriented smooth manifold. Then $\int_M\omega\geq0$, and $\omega\neq0$ implies $\int_M\omega>0$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(c), pp.407–408 (nonnegative version by the same proof)

Dependencies: prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components, thm-multidimensional-integral-properties.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored thm-change-of-variables-for-oriented-manifold-diffeomorphisms

Claim/conventions: Let $F:M\to N$ be a diffeomorphism of oriented smooth $n$-manifolds and $\omega\in\Omega_c^n(N)$. If $F$ preserves orientation everywhere, $\int_MF^*\omega=\int_N\omega$; if it reverses orientation everywhere, $\int_MF^*\omega=-\int_N\omega$. If the sign varies between components, apply the appropriate signed equality on each component and add.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(d), pp.407–408

Dependencies: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement, prop-reversing-orientation-negates-the-integral, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-integration-over-an-oriented-embedded-submanifold

Claim/conventions: Let $j:S\hookrightarrow M$ be an oriented embedded smooth $k$-submanifold, with boundary allowed. For a smooth $k$-form $\omega$ on $M$ such that $j^*\omega$ has compact support on $S$, define $\int_S\omega:=\int_Sj^*\omega$. If $F:T\to S$ is an orientation-preserving diffeomorphism, this equals $\int_T(jF)^*\omega$. Compact support is required on $S$ itself.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee submanifold paragraph p.406

Dependencies: thm-change-of-variables-for-oriented-manifold-diffeomorphisms, def-embedded-smooth-submanifold-with-boundary, def-pullback-of-a-differential-form.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-integration-of-top-forms-by-finite-parametrizations

Claim/conventions: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then
$$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$
An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.8 and proof, pp.408–409

Dependencies: prop-integration-over-an-oriented-embedded-submanifold, prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components, lem-c-one-images-of-content-zero-compact-sets-have-content-zero, lem-integral-additivity-over-a-content-zero-almost-partition, thm-change-of-variables-for-compact-jordan-sets.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored def-one-density-on-a-finite-dimensional-real-vector-space

Claim/conventions: For an $n$-dimensional real vector space $V$, a **one-density** is a real-valued function $\delta$ on ordered bases such that
$$\delta(vA)=|\det A|\,\delta(v)\qquad(A\in GL(n,\mathbb R)).$$
For $n\geq1$ extend its value by zero to dependent $n$-tuples. For $n=0$ it is an arbitrary real scalar on the empty basis (the empty determinant is one). Write $D(V)$ for these densities. Positive means strictly positive on every basis; nonnegative includes zero. Negative scalar multiples remain densities; positivity is extra structure on their one-dimensional real space.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee (16.18) and Proposition 16.35, pp.428–429

Dependencies: prop-the-top-exterior-power-is-one-dimensional.

Disposition: draft authored; statement literature-derived; definition/scope text; no proof claim. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-one-densities-form-a-one-dimensional-vector-space

Claim/conventions: The densities $D(V)$ form a one-dimensional real vector space under pointwise operations. Evaluation on any basis is a linear isomorphism $D(V)\to\mathbb R$. The nonzero nonnegative densities form a canonical positive ray.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.35(a,b,d), pp.428–429

Dependencies: def-one-density-on-a-finite-dimensional-real-vector-space.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored def-density-bundle-and-smooth-density

Claim/conventions: For a smooth manifold $M^n$, with boundary allowed, the **density bundle** is $DM=\coprod_{p\in M}D(T_pM)$. In coordinates $x$, let $|dx|=|dx^1\cdots dx^n|$ be the density taking value one on the coordinate frame. On overlaps,
$$|dy|=|\det D_x y|\,|dx|.$$
A smooth density is a section with smooth real coefficient in these frames. Its support is the closure of its nonzero locus. The absolute determinants are positive smooth transition functions and satisfy the cocycle identities by the chain rule. A countable atlas and [[thm-vector-bundle-construction-from-a-smooth-cocycle]] therefore give a smooth line bundle. For boundary charts the same gluing proof uses half-space product charts; smoothness of transitions follows from their local extensions, and Hausdorffness and second countability follow as for the supplied cocycle construction. The fibers are lines by [[prop-one-densities-form-a-one-dimensional-vector-space]]. When $n=0$ the empty frame trivializes $DM=M\times\mathbb R$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.36, pp.429–430; Nicolaescu Definition 3.4.1

Dependencies: prop-one-densities-form-a-one-dimensional-vector-space, thm-vector-bundle-construction-from-a-smooth-cocycle.

Disposition: draft authored; statement literature-derived; definition/scope text; no proof claim. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-the-absolute-value-of-a-top-form-is-a-density

Claim/conventions: For a smooth top form $\omega$ on $M$, pointwise absolute value defines a nonnegative continuous density $|\omega|$, with $|\omega|=|-\omega|$. It is smooth on the nonvanishing locus of $\omega$ but need not be smooth at its zeros.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.35(c), p.428 and nonvanishing paragraph p.430; Nicolaescu Example 3.4.2(b) with corrected regularity

Dependencies: def-density-bundle-and-smooth-density.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-every-smooth-manifold-admits-a-positive-smooth-density

Claim/conventions: Assuming $\mathrm{AC}_\omega$, every smooth manifold, with or without boundary, admits a smooth positive density.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.37, p.430

Dependencies: def-density-bundle-and-smooth-density, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-density-pullback-under-local-diffeomorphisms

Claim/conventions: For a local diffeomorphism $F:M^n\to N^n$, pullback of smooth densities is smooth and in coordinates satisfies
$$F^*(f|dy|)=(f\circ F)|\det DF|\,|dx|.$$
It is real-linear, obeys $F^*(a\delta)=(a\circ F)F^*\delta$ for smooth functions $a$ on $N$, and $(F\circ G)^*=G^*F^*$ for composable local diffeomorphisms.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Propositions 16.38 and 16.40, pp.430–431, with local-diffeomorphism qualification

Dependencies: def-density-bundle-and-smooth-density.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored def-integral-of-a-compactly-supported-smooth-density

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $\delta$ be a compactly supported smooth density on $M^n$, with boundary allowed. Choose a chart partition $(\rho_i)$ and write $\rho_i\delta=f_i|dx_i|$. For $n\geq1$ define
$$\int_M\delta=\sum_i\int_{\mathbb R^n}\widetilde f_i(x_i)\,dx_i.$$
The zero extensions are Riemann integrable, including at genuine faces, by [[lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions]]. The compact-support/local-finiteness argument of [[lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form]] applies to density supports as closed sets, so the sum is finite. For $n=0$ sum the scalar density values over the finite support, without orientation signs. Empty support gives zero. Choice independence is discharged by [[thm-density-integration-is-defined-without-an-orientation]].

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee density-integral construction pp.431–432; Nicolaescu Proposition 3.4.3

Dependencies: def-density-bundle-and-smooth-density, lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary.

Disposition: draft authored; statement literature-derived; definition/scope text; no proof claim. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored thm-density-integration-is-defined-without-an-orientation

Claim/conventions: Compactly supported smooth density integration is independent of charts and partition, linear, local, nonnegative on nonnegative densities and strictly positive for a nonzero nonnegative density. It is invariant under every diffeomorphism, without choosing an orientation. The finite-parametrization formula holds under the hypotheses of [[prop-integration-of-top-forms-by-finite-parametrizations]], with orientation preservation omitted and absolute Jacobians used.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Propositions 16.41–16.42 and Exercises 16.43–16.44, pp.431–432; Nicolaescu Proposition 3.4.3

Dependencies: def-integral-of-a-compactly-supported-smooth-density, prop-density-pullback-under-local-diffeomorphisms, thm-oriented-chart-integrals-are-coordinate-independent, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form, thm-multidimensional-integral-properties, prop-integration-of-top-forms-by-finite-parametrizations.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-on-an-oriented-manifold-top-forms-and-signed-densities-correspond

Claim/conventions: A chosen orientation on $M^n$ determines a smooth real-linear bundle isomorphism from top forms to signed densities. In a signed chart it is
$$J_o(f\,dx^1\wedge\cdots\wedge dx^n)=\sigma_\phi f\,|dx|.$$
For $n=0$ it sends $f(p)$ to $\varepsilon(p)f(p)$. It preserves support and, for compact support, the integral. Reversing orientation negates $J_o$.

Sources and locators: https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf — Nicolaescu §3.4.2, p.120, paragraph from the orientation isomorphism through the gluing formula

Dependencies: thm-density-integration-is-defined-without-an-orientation, def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored rem-lebesgue-extension-of-manifold-density-integration

Claim/conventions: The integration theory on this page is for compactly supported smooth densities, using Riemann integrals in positive-dimensional charts. General measurable nonnegative densities, $L^1$ densities, and associated Radon measures are outside the present construction. Those extensions belong to the separate Lebesgue change-of-variables and regular-measure development. No measurable integration or Radon-representation theorem is asserted or used here.

Sources and locators: https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf — Nicolaescu Proposition 3.4.3(c), p.113

Dependencies: thm-density-integration-is-defined-without-an-orientation.

Disposition: draft authored; statement ai-altered; definition/scope text; no proof claim. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary

Claim/conventions: On smooth manifolds with boundary, the coordinate exterior derivative, pullback naturality, graded Leibniz rule, support containment, and Cartan identity hold for smooth forms:
$$d(F^*\alpha)=F^*(d\alpha),\quad d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta,$$
$$\operatorname{supp}d\alpha\subseteq\operatorname{supp}\alpha,\qquad \mathcal L_X\alpha=d(\iota_X\alpha)+\iota_Xd\alpha.$$
For arbitrary smooth vector fields at boundary points, $\mathcal L_X$ is defined by local Euclidean extensions; a two-sided flow inside the manifold is not required.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Stokes proof pp.412–414 and published extension/calculus dependencies

Dependencies: cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary, lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space, thm-local-coordinate-formula-for-the-exterior-derivative, thm-the-exterior-derivative-commutes-with-pullback, thm-the-exterior-derivative-is-a-graded-derivation, thm-cartans-magic-formula, prop-the-exterior-derivative-does-not-enlarge-support.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored lem-euclidean-stokes-for-a-compactly-supported-form

Claim/conventions: For $n\geq1$ and $\eta\in\Omega_c^{n-1}(\mathbb R^n)$, with the standard orientation, $\int_{\mathbb R^n}d\eta=0$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 proof pp.412–413; Merry Theorem 26.17

Dependencies: def-integral-of-an-oriented-chart-supported-top-form, lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary, cor-repeated-riemann-integrals-on-rectangles, thm-newton-leibniz-with-interior-derivative.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored lem-half-space-stokes-for-a-compactly-supported-form

Claim/conventions: Give $H^n=\{x_n\geq0\}$ the standard orientation, $n\geq1$, and its face the outward-normal-first orientation. If $\eta\in\Omega_c^{n-1}(H^n)$ and $j:\partial H^n\hookrightarrow H^n$, then
$$\int_{H^n}d\eta=\int_{\partial H^n}j^*\eta.$$
With $\eta=\sum_i a_i\,dx^1\wedge\cdots\wedge\widehat{dx^i}\wedge\cdots\wedge dx^n$, both sides are $(-1)^n\int_{\mathbb R^{n-1}}a_n(x^{\prime},0)\,dx^{\prime}$ for $n>1$, and $-a_1(0)$ for $n=1$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 proof, pp.412–413

Dependencies: lem-euclidean-stokes-for-a-compactly-supported-form, def-induced-boundary-orientation, def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold, prop-integration-over-an-oriented-embedded-submanifold.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored lem-partition-localization-of-stokes

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $M^n$ be oriented with boundary, $n\geq1$, $\eta\in\Omega_c^{n-1}(M)$, and $(\rho_i)$ a smooth chart partition. Then
$$\eta=\sum_i\rho_i\eta,\qquad d\eta=\sum_i d(\rho_i\eta),\qquad \sum_i d\rho_i\wedge\eta=0,$$
with only finitely many nonzero form summands. Boundary restrictions have the corresponding finite localization and compact support, so these identities can be integrated termwise.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 proof p.414; Merry Theorem 26.16 proof PDF p.218

Dependencies: lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary, lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form, prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored thm-general-stokes-theorem

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation,
$$\int_M d\eta=\int_{\partial M}j^*\eta.$$
An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11, pp.411–414; Merry Theorem 26.16

Dependencies: lem-half-space-stokes-for-a-compactly-supported-form, lem-partition-localization-of-stokes, thm-change-of-variables-for-oriented-manifold-diffeomorphisms, prop-integration-over-an-oriented-embedded-submanifold, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero

Claim/conventions: If $M^n$ is oriented and boundaryless, $n\geq1$, and $\eta\in\Omega_c^{n-1}(M)$, then $\int_Md\eta=0$. In particular, on a compact such manifold every exact smooth top form has zero integral. The compact-support assumption is on the primitive $\eta$, not merely on $d\eta$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Corollary 16.13, p.414 (compact-support version from Theorem 16.11)

Dependencies: thm-general-stokes-theorem.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact

Claim/conventions: Let $M^n$ be compact, oriented, and boundaryless, $n\geq1$. A smooth top form $\omega$ with $\int_M\omega\neq0$ is not exact. In particular every positive smooth top form on a nonempty such $M$ is not exact.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Corollary 16.13; Merry Corollary 27.2 proof (nonexactness consequence without cohomology terminology)

Dependencies: cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero, prop-positive-compactly-supported-top-forms-have-positive-integral.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries

Claim/conventions: For oriented $M^n$ with boundary, $n\geq1$, if $\eta\in\Omega_c^{n-1}(M)$ is closed, then $\int_{\partial M}j^*\eta=0$. When $M$ is compact, no separate support assumption on the smooth closed form is needed.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Corollary 16.14, p.414

Dependencies: thm-general-stokes-theorem.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored cor-a-nonzero-period-obstructs-exactness-and-bounding

Claim/conventions: Let $S\hookrightarrow M$ be an oriented compact boundaryless embedded $k$-submanifold, $k\geq1$, and let $\omega$ be a closed smooth $k$-form on $M$. If $\int_S\omega\neq0$, then $\omega$ is not exact on $M$, and $S$ cannot be the induced oriented boundary of a compact embedded $(k+1)$-submanifold of $M$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Corollary 16.15, pp.414–415

Dependencies: cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero, cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries, prop-integration-over-an-oriented-embedded-submanifold, lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored cor-fundamental-theorem-of-calculus-from-stokes

Claim/conventions: For $a<b$, orient $[a,b]$ increasingly. Every smooth $f$ on this interval satisfies
$$\int_{[a,b]}df=f(b)-f(a),$$
where the boundary point signs are $-1$ at $a$ and $+1$ at $b$. This agrees with the Riemann fundamental theorem of calculus.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Example 16.12, p.414

Dependencies: thm-general-stokes-theorem, thm-newton-leibniz-with-interior-derivative.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored cor-greens-theorem-from-general-stokes

Claim/conventions: For a compact smooth planar region $D$ oriented by $dx\wedge dy$ and smooth $P,Q$ on a neighborhood, general Stokes gives
$$\int_{\partial D}(P\,dx+Q\,dy)=\int_D(Q_x-P_y)\,dx\,dy,$$
$$\int_{\partial D}(P\,dy-Q\,dx)=\int_D(P_x+Q_y)\,dx\,dy.$$
When $D$ also has the supplied finite elementary Green decomposition required by the classical results, these are exactly their circulation and outward-flux formulas. Outer boundary curves run counterclockwise and holes clockwise.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.17, p.415; classical items cited for both statements

Dependencies: thm-general-stokes-theorem, cor-greens-theorem-in-circulation-form, cor-the-planar-divergence-theorem-flux-form-of-greens-theorem, prop-integration-of-top-forms-by-finite-parametrizations.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored cor-classical-three-dimensional-stokes-theorem

Claim/conventions: Let $S\subset\mathbb R^3$ be a compact oriented smooth embedded surface with boundary, and let $F$ be smooth on an open neighborhood of $S$. Set $\alpha=F_xdx+F_ydy+F_zdz$ and $\mu=dx\wedge dy\wedge dz$. Then
$$d\alpha=\iota_{\operatorname{curl}F}\mu,\qquad \int_{\partial S}\alpha=\int_S\iota_{\operatorname{curl}F}\mu.$$
On an oriented parametrization $r(u,v)$ the latter integrand is $(\operatorname{curl}F)(r)\cdot(r_u\times r_v)\,du\wedge dv$; on a boundary curve it is $F(r)\cdot r^{\prime}\,dt$. On the common smooth patch scope this is the published classical Stokes theorem, using the standard Euclidean metric identification.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.34 proof, p.427

Dependencies: thm-general-stokes-theorem, prop-integration-over-an-oriented-embedded-submanifold, prop-integration-of-top-forms-by-finite-parametrizations, thm-the-classical-stokes-theorem-for-a-c2-surface-patch, def-divergence-and-curl-of-a-c1-vector-field.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored def-volume-form-on-an-oriented-manifold

Claim/conventions: On an oriented smooth $n$-manifold, a **positive volume form** is a nowhere-vanishing smooth top form $\mu$ that evaluates positively on the chosen determinant ray. In a signed chart $\mu=\rho\,dx^1\wedge\cdots\wedge dx^n$ this means $\sigma_\phi\rho>0$. In dimension zero it means $\varepsilon(p)\mu(p)>0$. No metric is part of the data. Under $\mathrm{AC}_\omega$ such a form exists by [[thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form]]: adjust the sign on each component to match the specified orientation.

Sources and locators: https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf — Nicolaescu §3.4.2 orientation-isomorphism paragraph p.120; Lee Proposition 16.6(c)

Dependencies: def-oriented-smooth-manifold-and-oriented-chart, thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form.

Disposition: draft authored; statement literature-derived; definition/scope text; no proof claim. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored def-divergence-relative-to-a-volume-form

Claim/conventions: Let $\mu$ be a positive volume form and $X$ a smooth vector field on a smooth oriented manifold, with boundary allowed. The **divergence relative to $\mu$** is the smooth scalar function determined by
$$\mathcal L_X\mu=(\operatorname{div}_\mu X)\mu.$$
At a boundary point use the local-extension Lie derivative of [[lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary]]. The nonzero top form spans each top exterior-power fiber, so the scalar is unique. Smooth existence and its coordinate formula are discharged by [[prop-divergence-is-well-defined-and-has-the-coordinate-formula]].

Sources and locators: https://encyclopediaofmath.org/wiki/Divergence — Encyclopedia of Mathematics, Divergence, Comments paragraph beginning Let M be an n-dimensional manifold

Dependencies: def-volume-form-on-an-oriented-manifold, lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary.

Disposition: draft authored; statement literature-derived; definition/scope text; no proof claim. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-divergence-is-well-defined-and-has-the-coordinate-formula

Claim/conventions: If $\mu=\rho\,dx^1\wedge\cdots\wedge dx^n$ with $\rho$ nowhere zero and $X=\sum_iX^i\partial_i$, then
$$\operatorname{div}_\mu X=\rho^{-1}\sum_{i=1}^n\partial_i(\rho X^i).$$
This defines a smooth global function, also at boundary points. In dimension zero $X=0$ and divergence is zero.

Sources and locators: https://encyclopediaofmath.org/wiki/Divergence — EoM Divergence Comments; Lee defining divergence equation p.423; coordinate derivation from published Cartan formula

Dependencies: def-divergence-relative-to-a-volume-form, thm-local-coordinate-formula-for-the-exterior-derivative.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-divergence-satisfies-the-product-rule

Claim/conventions: For a smooth scalar function $f$ and smooth vector field $X$,
$$\operatorname{div}_\mu(fX)=df(X)+f\operatorname{div}_\mu X.$$
The formula holds also on manifolds with boundary.

Sources and locators: https://encyclopediaofmath.org/wiki/Divergence — EoM Divergence Comments definition; direct algebraic consequence of the coordinate formula

Dependencies: prop-divergence-is-well-defined-and-has-the-coordinate-formula.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored lem-divergence-form-identity

Claim/conventions: For a positive volume form $\mu$ and smooth vector field $X$ on an oriented smooth $n$-manifold, $n\geq1$, with boundary allowed,
$$d(\iota_X\mu)=(\operatorname{div}_\mu X)\mu.$$
No tangency assumption on $X$ at the boundary is needed.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee divergence definition p.423; EoM Divergence Comments

Dependencies: def-divergence-relative-to-a-volume-form, lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored thm-divergence-theorem-relative-to-a-volume-form

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $M^n$ be oriented with boundary, $n\geq1$, let $\mu$ be a positive smooth volume form, and let $X$ be a compactly supported smooth vector field. Then
$$\int_M(\operatorname{div}_\mu X)\mu=\int_{\partial M}j^*(\iota_X\mu),$$
with outward-normal-first orientation. For compact $M$ every smooth $X$ is allowed.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.32 proof p.424, using arbitrary positive mu in the form identity

Dependencies: lem-divergence-form-identity, thm-general-stokes-theorem.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored prop-general-stokes-agrees-with-classical-gauss-flux

Claim/conventions: For $\mu=dx\wedge dy\wedge dz$ and a smooth Euclidean field $F$, the volume-form divergence is $\partial_xF_x+\partial_yF_y+\partial_zF_z$. For a surface parametrization $r(u,v)$,
$$r^*(\iota_F\mu)=\big(F(r)\cdot(r_u\times r_v)\big)\,du\wedge dv.$$
Consequently the volume-form divergence theorem agrees with the classical Gauss flux theorem on compact smooth regions that also admit the supplied elementary-solid presentation required by that classical theorem.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Lemma 16.30 and Theorem 16.32, pp.423–424

Dependencies: thm-divergence-theorem-relative-to-a-volume-form, prop-integration-of-top-forms-by-finite-parametrizations, thm-the-divergence-theorem-for-an-elementary-solid-region, def-oriented-unit-normal-and-flux-of-a-surface-patch.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored fs-the-integral-of-a-top-form-is-defined-without-an-orientation

Claim/conventions: False assertion: a smooth compactly supported top form has a canonical signed integral independent of any orientation choice.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(b) and Densities introduction pp.407, 428

Dependencies: prop-reversing-orientation-negates-the-integral, def-integral-of-an-oriented-chart-supported-top-form.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored fs-the-integral-of-a-form-is-the-sum-over-an-arbitrary-atlas-without-a-partition

Claim/conventions: False assertion: for an arbitrary covering atlas one may integrate a compactly supported top form by summing unweighted chart integrals, without partition weights.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.5 proof pp.405–406 (necessity of partition weights)

Dependencies: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement, prop-positive-compactly-supported-top-forms-have-positive-integral.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored fs-the-integral-of-every-exact-form-on-every-manifold-is-zero

Claim/conventions: False assertion: every exact smooth top form has zero total integral whenever that integral exists, on every manifold.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 and Corollary 16.13 hypotheses, pp.411–414

Dependencies: thm-general-stokes-theorem, cor-fundamental-theorem-of-calculus-from-stokes.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored fs-a-smooth-density-is-the-same-thing-as-a-top-form-on-a-nonorientable-manifold

Claim/conventions: False assertion: the smooth density bundle and the top-form bundle have a canonical identification even on a nonorientable manifold.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.37 and following explanation, p.430

Dependencies: def-density-bundle-and-smooth-density, prop-every-smooth-manifold-admits-a-positive-smooth-density, thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored ex-integrating-a-compactly-supported-form-in-two-overlapping-charts

Claim/conventions: Let $f\in C_c^\infty((-1,1))$. Use the increasing charts $x$ and $y=2x$ on overlapping domains containing its support. For smooth weights $\rho,1-\rho$ with $0\leq\rho\leq1$ on a neighborhood of the support, the two weighted chart integrals sum to $\int f(x)dx$, independently of $\rho$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.5 proof pp.405–406

Dependencies: thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement, def-integral-of-an-oriented-chart-supported-top-form.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored ex-orientation-reversal-under-reflection

Claim/conventions: For $f\in C_c^\infty(\mathbb R)$ and reflection $r(x)=-x$, with the increasing orientation,
$$\int_{\mathbb R}r^*(f\,dx)=-\int_{\mathbb R}f\,dx,\qquad \int_{\mathbb R}r^*(f\,|dx|)=\int_{\mathbb R}f\,|dx|.$$
Densities retain the sign of $f$; the absolute value here belongs to the coordinate density.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(d) and Proposition 16.42(c)

Dependencies: thm-change-of-variables-for-oriented-manifold-diffeomorphisms, thm-density-integration-is-defined-without-an-orientation.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored ex-integration-of-a-density-on-the-mobius-band

Claim/conventions: On the compact Möbius band
$$B=(\mathbb R\times[-1,1])/\langle T\rangle,\qquad T(s,t)=(s+1,-t),$$
the density $|ds\,dt|$ descends to a smooth positive density $\delta$, and $\int_B\delta=2$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.37 and Exercise 16.44; Nicolaescu Definition 3.4.1

Dependencies: thm-density-integration-is-defined-without-an-orientation, prop-density-pullback-under-local-diffeomorphisms.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored ex-stokes-on-an-oriented-interval

Claim/conventions: For $f(t)=t^2$ on the increasingly oriented interval $[0,1]$,
$$\int_{[0,1]}df=1= f(1)-f(0).$$
The right endpoint chart $u=1-t$ is negative; its chart sign must be retained in the upper-half-line calculation.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Example 16.12 and p.405 negative-chart explanation

Dependencies: cor-fundamental-theorem-of-calculus-from-stokes, lem-half-space-stokes-for-a-compactly-supported-form.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored ex-greens-theorem-on-a-planar-disk

Claim/conventions: On the unit disk with orientation $dx\wedge dy$, let $\alpha=(-y\,dx+x\,dy)/2$ and $F=(x/2,y/2)$. Then $d\alpha=dx\wedge dy$ and the boundary circulation and outward flux both equal $\pi$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.17 and Example 16.16, p.415

Dependencies: cor-greens-theorem-from-general-stokes, prop-integration-of-top-forms-by-finite-parametrizations.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored ex-classical-stokes-on-an-oriented-graph-surface

Claim/conventions: Let $S$ be the graph $z=x^2+y^2$ over the closed unit disk, with upward orientation, and let $F=(-y/2,x/2,0)$. Then $\operatorname{curl}F=(0,0,1)$, its upward curl flux over $S$ is $\pi$, and its induced boundary circulation is also $\pi$.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.34 proof, p.427 (explicit smooth graph specialization)

Dependencies: cor-classical-three-dimensional-stokes-theorem, prop-integration-of-top-forms-by-finite-parametrizations.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored ex-divergence-theorem-on-a-euclidean-ball

Claim/conventions: For the closed unit ball $B^3$ oriented by $dx\wedge dy\wedge dz$, the field $F=(x,y,z)$ has divergence 3 and outward flux $4\pi$. The field $G=(x,0,0)$ has divergence 1 and outward flux $4\pi/3$. In each case the volume integral equals the flux.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Example 16.9 pp.409–410; Nicolaescu Example 3.4.14 pp.120–121

Dependencies: prop-general-stokes-agrees-with-classical-gauss-flux, prop-integration-of-top-forms-by-finite-parametrizations.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored ex-the-angular-form-has-period-two-pi

Claim/conventions: On $\mathbb R^2\setminus\{0\}$ let
$$\omega=\frac{-y\,dx+x\,dy}{x^2+y^2}.$$
Its integral over the counterclockwise unit circle is $2\pi$. Therefore that circle cannot be the induced oriented boundary of a compact oriented embedded smooth surface contained in the punctured plane; the form is also not exact there.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Example 16.16 and Corollary 16.15, p.415

Dependencies: cor-a-nonzero-period-obstructs-exactness-and-bounding, prop-integration-of-top-forms-by-finite-parametrizations.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored ex-exact-top-form-with-nonzero-integral-on-a-manifold-with-boundary

Claim/conventions: On the oriented closed unit disk $D$,
$$dx\wedge dy=d(x\,dy),\qquad \int_Ddx\wedge dy=\pi=\int_{\partial D}x\,dy.$$
Thus an exact top form can have nonzero integral on a manifold with boundary. Its primitive $x\,dy$ is not itself an exact one-form.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 and Corollary 16.14

Dependencies: thm-general-stokes-theorem, prop-integration-of-top-forms-by-finite-parametrizations.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored cex-a-noncompactly-supported-form-with-divergent-chart-integral

Claim/conventions: False assertion: smoothness alone guarantees a finite integral of a top form on an oriented manifold, without a compact-support or convergence condition.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee p.407 paragraph on noncompactly supported forms and convergence

Dependencies: def-integral-of-an-oriented-chart-supported-top-form.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored cex-opposite-boundary-orientation-gives-the-wrong-sign-in-stokes

Claim/conventions: False assertion: Stokes on the standard oriented half-line remains valid if its boundary point is assigned the positive sign instead of its induced negative sign.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Theorem 16.11 proof pp.412–413

Dependencies: lem-half-space-stokes-for-a-compactly-supported-form.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

### Authored ex-change-of-variables-on-the-oriented-circle

Claim/conventions: Fix $a\in\mathbb R$ with $|a|<1$. The map $F(e^{it})=e^{i(t+a\sin t)}$ is an orientation-preserving smooth circle diffeomorphism. For the standard angular form $\omega$ on the unit circle,
$$F^*\omega=(1+a\cos t)dt,\qquad \int_{S^1}F^*\omega=2\pi=\int_{S^1}\omega,$$
where t denotes the angle on each cut chart.

Sources and locators: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee Proposition 16.6(d), pp.407–408 (explicit circle specialization)

Dependencies: thm-change-of-variables-for-oriented-manifold-diffeomorphisms, prop-integration-of-top-forms-by-finite-parametrizations.

Disposition: draft authored; statement ai-altered; proof independently adapted from the cited route, with exact dependency quotations and step/boundary contract. No claim dropped. Focused validators pending; next action: continue batch authoring, then run and repair the required checks.

Both planned pages written at library/differential-geometry/ with all 59 assigned ids, status draft. No page category or plan structure changed. All proof-bearing items have initial exact-citation, proof-step and boundary worksheets; the forthcoming focused checks will validate their syntax.

### Step-5 completion and factual validation record

Authored all 47 A-page items and 12 B-page items listed individually above and in `frontier-33-batch-13.pages.json`. Wrote both pages directly under `library/differential-geometry/`. Every one of the 59 items and both pages remains `status: draft`; no judge, publication, audit, or permission action was taken. The existing manifest, coverage, independent review, exact-hash records, plan, and workflow state were preserved.

Provenance rationale: the eight definitions retain literature-derived statements with explicit conventions and no supplied proof; the scope remark has an altered statement and no mathematical proof claim. The remaining 50 statements/proofs are adaptations of the cited source results, examples, or their explicitly identified specializations, with the Riemann analytic bridge and boundary details written locally. Every sourced statement remains within its cited domain; none is tagged as a generated dependency target. The proof-contract output covers exactly these 50 proof-bearing items, contains exact current dependency-section quotations, maps every fact use and every numbered proof row, and gives all eight boundary-axis dispositions. The proof contracts were created fresh because the required output did not previously exist.

Retained qualifications and decisions: compact support is on the primitive in exact-integral vanishing; compact support on an embedded submanifold is an explicit pullback hypothesis; the boundary chart sign is retained, including the right endpoint of an interval; density pullback smoothness is stated for local diffeomorphisms; absolute values of top forms are continuous and only automatically smooth away from zeros. Finite parametrization uses compact nonsingular interior pieces and bounded-error null collars, so singular boundary Jacobians are never put into the published compact-Jordan substitution theorem. The density version explicitly adapts this proof locally rather than applying an oriented global conclusion to a nonorientable manifold. Classical Green, surface Stokes, and Gauss comparisons retain their supplied elementary presentation hypotheses. The interval agreement states `a<b` explicitly; no degenerate interval is treated as a one-manifold. No scaffold item was dropped, no new item was added, and no planned mathematical claim was removed.

Source evidence for this authoring pass: Lee's complete printed pp.402–409 chart/partition and finite-parametrization arguments, pp.411–415 Stokes proof and consequences, pp.423–424 divergence and p.427 surface identity, and pp.428–432 density construction were read using the browser PDF and the same-document local text at `/tmp/lee-smooth-manifolds.txt`. Merry's Definition 26.7 through global Stokes 26.16, the complete local cube proof 26.17, and the opening Lecture 27 vanishing/nonexactness arguments were read in the browser PDF. Nicolaescu's complete Proposition 3.4.3 construction/independence/locality proof, absolute-density discussion, printed p.120 orientation isomorphism, and Example 3.4.14 through its p.121 computation were read from the author-hosted PDF; the coverage's independent archive/fetch evidence was not rewritten. EoM's divergence Comments were checked at their recorded URL. These source comparisons are mathematical reading evidence, not new transport or review stamps.

Actual checks:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 59 explicit `items/ID.md` arguments expanded from this batch's manifest: initial complete run checked 50 proof-bearing items and requested canonical phase renumbering for all 50. Applied the normative checker's exact step-number mapping to each proof and to its contract uses/derivations/boundary anchors. Rerun: **50 checked, 0 failing — all clean**. Definitions and the scope remark have no phase proof and were correctly skipped. An earlier buffered launcher attempt produced no diagnostic and was not treated as a pass.
- `node tools/validate-plan.mjs`: the literal no-argument invocation displayed usage; it was not a successful validation. Reran with the required plan-file argument, `node tools/validate-plan.mjs research/plan-spec.json`: **exit 0**, declared order acyclic and consistent; no item cycles, forward references, B-page dependency violations, or unresolved ids among the populated pages. Existing redundant-prerequisite notices are non-failing. This snapshot reported 892 populated pages and 463 planned pages with no item list.
- `node tools/content-policy.mjs research/frontier-33-batch-13.pages.json`: **59 scoped items, 0 errors, 0 warnings**, including the final rerun.
- `node tools/proof-contract.mjs research/frontier-33-batch-13.proof-contracts.json --strict`: **50/50 checked, 0 errors, 0 warnings**, after phase repair and final boundary-disposition review.
- Additional focused render check, with all 59 items and both page paths explicitly supplied: **61 files pass**, using the real KaTeX and renderer YAML parser. No delimiter, math-span, wikilink-in-math, or YAML errors.
- Additional repository-wide `node tools/depcheck.mjs --quiet`: initial run exposed a Unicode escape in this batch's examples-page title. Replaced escaped Unicode by literal Unicode in owned content; focused rendering and policy still pass. Final repository-wide check remains **exit 1 with 6 errors, all outside batch 13**: title-escape diagnostics on `library/combinatorics/co-bird-free-comb-structure-examples.md`, `library/lie-theory/category-o-finiteness-duality-and-blocks-examples.md`, and `library/probability/weak-laws-and-series-of-independent-random-variables-examples.md`; two unresolved `[[x,y]]` links in `items/ex-completion-regularity-invariance.md`; and one unresolved `[[x_1,\ldots,x_n]]` link in `items/ex-formal-power-series-ring-regular.md`. No diagnostic in that final output names a batch-13 item or page. No other batch was edited.

Batch-local authoring obligations and the four required checks are complete. No batch-local mathematical blocker remains. The six unrelated repository-wide dependency errors remain an external whole-run limitation; this report does not claim the repository-wide dependency gate passes. Independent review and publication remain owner/workflow actions after this authoring dispatch.

## Reharvest-2-b13 — same-document URL recovery

The assigned `research/frontier-33-reharvest-plan.json` currently has no
`work[]` row for batch 13 (indeed it contains zero rows), but the required
batch-local backing rerun against `research/frontier-33-url-liveness.json`
identified two lost carriers under the presently recorded archive URL:

- `def-integral-of-a-compactly-supported-smooth-density`, whose two harvested
  headings were `3.4 Integration on manifolds` and `3.4.1 Integration of
  1-densities`.
- `prop-on-an-oriented-manifold-top-forms-and-signed-densities-correspond`,
  whose harvested heading was the §3.4.2 orientation-isomorphism/integration
  paragraph.

**Dead/recovered source and provenance.** The reader-facing coverage URL had
been the Wayback snapshot
`https://web.archive.org/web/20221006171237if_/https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf`.
It returned an Internal Error in the full-text reader and has stored liveness
status 503. Before considering a different treatment, I opened the original
author-hosted URL
`https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf`. It yields the same complete
700-page third-edition document. The failed archive URL is retained as
`archived_fallback.snapshot`, and `original_url` remains the author URL; no
new treatment was substituted and no harvested row was deleted.

**Source text read.** In the direct Nicolaescu PDF, §3.4.1 *Integration of
1-densities* starts at printed p.111 (PDF p.128). Definition 3.4.1 is there;
Proposition 3.4.3 and its full construction, coordinate/partition
independence, diffeomorphism invariance, and locality proof occupy printed
pp.113–115 (PDF pp.130–132). The first paragraph of §3.4.2 *Orientability and
integration of differential forms*, printed p.120 (PDF p.137), gives the
orientation-dependent linear isomorphism from top forms to densities and its
positive-chart gluing formula. These are the existing sources' own headings
and exactly support the retained contents rows. The source uses Lebesgue
coordinates; the pre-existing scaffold constraint remains unchanged: its local
construction is realized through this batch's stated Riemann and boundary
dependencies. The signed orientation isomorphism remains distinct from the
nonlinear absolute-value map. No item ID, dependency, convention, or claim
constraint changed.

**Validators and transport record.**

- `node tools/coverage-checklist.mjs --require-destination research/frontier-33-batch-13.coverage.json` — PASS: 1 page, 139 harvested rows, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-13.coverage.json` — PASS: 4/4 recorded sources carry full-text fetch stamps. The forced fresh-stamp command with `--stamp --force --timeout-sec 60` could not resolve any of the four hosts (`EAI_AGAIN`), so it added no stamp and is not represented as a fresh byte fetch.
- `node tools/source-backing.mjs --coverage research/frontier-33-batch-13.coverage.json --liveness research/frontier-33-url-liveness.json --require-verified` — PASS: 34 authored results, all backed. A post-repair temporary reharvest plan checked the same 34 results and has `work: []`.
- `node tools/manifest-deps.mjs research/frontier-33-batch-13.pages.json` — PASS: 59 items, 0 normalized, 0 errors.
- A fresh `url-sweep --recover --fail-on-dead` against the repaired coverage was written only to `/tmp/frontier-33-reharvest-2-b13-url-liveness-after-recovery.json`; it failed 0/4 because this runner's `curl` cannot resolve *any* host (code 6), including the three unrelated sources. Its archive-search result is therefore not evidence that a same-document copy is absent. The direct full-text reader recovery above is the basis for the URL repair.
- The non-required batch `content-policy --manifest-only` check reports 59 pre-existing `batch-item-already-exists` errors because all scoped items are now present on disk. This reharvest has no authority to change the items or manifest, and the error is unrelated to source backing.

Current coverage SHA-256 after the recovery:
`449a2d329d2d9dfa24f6a7b6922009be4489eaf5b5d84bdded4b74a8736bd01f`.
Next action: no further batch-13 reharvest work is queued; a network-capable
runner may refresh liveness and byte stamps without changing the retained
source treatment.
