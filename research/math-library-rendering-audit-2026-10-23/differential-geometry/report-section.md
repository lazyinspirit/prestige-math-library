## Differential Geometry

Completed visual review of **1596 items across 66 pages**, with **2328 image tiles**. Findings: 32 confirmed, 1 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/differential-geometry/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/differential-geometry/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/differential-geometry/category-review-receipt.json).

### Confirmed rendering defects

#### differential-geometry / confirmed 001: `def-compactly-supported-differential-form`

- Location: **Definition layout**; source lines 25.
- Pages: `integration-of-forms-and-the-general-stokes-theorem`.
- Visible defect: The source uses a display-math line, but the preview HTML emits it as an inline KaTeX span within the definition paragraph. In the standalone tile the expression starts after “define” and wraps across the next line; the expression tail, including the compact-support condition, is visible before the following prose. The HTML contains the full expression, so no formula omission or clipping is confirmed. The prose after it reaches the screenshot right edge.
- Future repair: Preserve display-math block layout in the preview HTML so this long definition is visually separated from the prose. No content recovery is needed.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/def-compactly-supported-differential-form--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/def-compactly-supported-differential-form.md).

Exact frozen source lines:

```text
25: $$\operatorname{supp}\omega=\overline{\{p\in M:\omega_p\neq0\}}^{\,M},\qquad \Omega_c^k(M)=\{\omega\in\Omega^k(M):\operatorname{supp}\omega\text{ is compact}\}.$$
```

#### differential-geometry / confirmed 002: `fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p`

- Location: **Title**; source lines 4.
- Pages: `vector-fields-flows-and-lie-derivatives`.
- Visible defect: Raw ASCII subscript and bracket notation is shown in the title (X_p, Y_p, [X,Y]_p), rather than typeset math.
- Future repair: Typeset the point and bracket notation in the title using the supported math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p.md).

Exact frozen source lines:

```text
4: title: "FALSE: the point values X_p and Y_p determine the bracket value [X,Y]_p"
```

#### differential-geometry / confirmed 003: `lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor`

- Location: **Title**; source lines 4.
- Pages: `spin-geometry-dirac-and-index-theory`.
- Visible defect: Characteristic class and cohomology group appear as plain w2 and H1 in the title, without mathematical subscripts/superscripts.
- Future repair: Typeset the characteristic class and cohomology group in the title with their intended indices.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor.md).

Exact frozen source lines:

```text
4: title: "Spin structures exist exactly when w2 vanishes and then form an H1 torsor"
```

#### differential-geometry / confirmed 004: `fs-the-distance-from-p-is-smooth-on-m-minus-p`

- Location: **Title**; source lines 4.
- Pages: `jacobi-fields-conjugate-points-and-the-cut-locus`.
- Visible defect: The title expresses the domain as plain “m minus p”, losing the intended manifold-minus-point notation and mathematical typography visible in the statement.
- Future repair: Set the title’s manifold and puncture notation in supported math delimiters (for example, M\setminus\{p\}).
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/fs-the-distance-from-p-is-smooth-on-m-minus-p--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/fs-the-distance-from-p-is-smooth-on-m-minus-p.md).

Exact frozen source lines:

```text
4: title: The distance from p is smooth on m minus p
```

#### differential-geometry / confirmed 005: `def-hh-cochain-complex-and-gerstenhaber-bracket`

- Location: **Definition**; source lines 35, 36.
- Pages: `formal-deformation-quantization-and-hochschild-control`.
- Visible defect: The displayed differential is merged into adjacent prose: the first term follows the preceding definition inline, and the summation and final term split across prose lines. The inline statement at line 35 also collides with the beginning of the display formula. The standalone original-resolution tile confirms this is present in the capture itself, not a multi-tile artifact.
- Future repair: Put the differential in a dedicated display block with explicit line breaks/alignment; keep the preceding sentence and following prose outside the math block.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/def-hh-cochain-complex-and-gerstenhaber-bracket--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/def-hh-cochain-complex-and-gerstenhaber-bracket.md).

Exact frozen source lines:

```text
35: The Hochschild differential $\delta:C^p\to C^{p+1}$ is
36: $$\begin{aligned} (\delta\phi)(a_1,\ldots,a_{p+1})={}&a_1\phi(a_2,\ldots,a_{p+1})\\ &+\sum_{i=1}^{p}(-1)^i\phi(a_1,\ldots,a_{i-1},a_i a_{i+1},a_{i+2},\ldots,a_{p+1})\\ &+(-1)^{p+1}\phi(a_1,\ldots,a_p)a_{p+1}. \end{aligned}$$
```

#### differential-geometry / confirmed 006: `cor-a-flat-closed-oriented-surface-has-euler-characteristic-zero`

- Location: **Proof**; source lines 54.
- Pages: `the-gauss-bonnet-theorem-for-riemannian-surfaces`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/cor-a-flat-closed-oriented-surface-has-euler-characteristic-zero--01.png), [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/cor-a-flat-closed-oriented-surface-has-euler-characteristic-zero--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/cor-a-flat-closed-oriented-surface-has-euler-characteristic-zero.md).

Exact frozen source lines:

```text
54: **Proof technique:** insert the identically vanishing curvature into the global identity and divide by $2\pi$.
```

#### differential-geometry / confirmed 007: `ex-distance-hessian-and-laplacian-in-space-forms`

- Location: **Proof**; source lines 120.
- Pages: `riemannian-comparison-theorems-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-distance-hessian-and-laplacian-in-space-forms--01.png), [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-distance-hessian-and-laplacian-in-space-forms--02.png), [tile 03](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-distance-hessian-and-laplacian-in-space-forms--03.png), [tile 04](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-distance-hessian-and-laplacian-in-space-forms--04.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-distance-hessian-and-laplacian-in-space-forms.md).

Exact frozen source lines:

```text
120: **Proof technique:** direct: since the sectional curvature is identically $k$, both the one-sided curvature hypotheses of the Hessian comparison hold, so the two inequalities collapse to the single normal-Hessian identity; adding the known vanishing on the radial direction gives the full tensor $\operatorname{ct}_k(r)(g-dr\otimes dr)$; tracing it in the orthogonal decomposition $T_qM=N\oplus\mathbb R\operatorname{grad}r$ gives the Laplacian, and tracing the constant-curvature tensor gives the Ricci equality that identifies the space form as an equality case of both comparison theorems.
```

#### differential-geometry / confirmed 008: `ex-projective-plane-total-curvature-from-a-hemisphere-identification`

- Location: **Verification**; source lines 97.
- Pages: `the-gauss-bonnet-theorem-for-riemannian-surfaces-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-projective-plane-total-curvature-from-a-hemisphere-identification--01.png), [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-projective-plane-total-curvature-from-a-hemisphere-identification--02.png), [tile 03](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-projective-plane-total-curvature-from-a-hemisphere-identification--03.png), [tile 04](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-projective-plane-total-curvature-from-a-hemisphere-identification--04.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-projective-plane-total-curvature-from-a-hemisphere-identification.md).

Exact frozen source lines:

```text
97: **Proof technique:** build the quotient charts, push the round metric forward to a metric making $\pi$ a local isometry, compute $K$ and the area in one chart while proving that the omitted equatorial circle is null, and conclude with the nonorientable Gauss-Bonnet theorem.
```

#### differential-geometry / confirmed 009: `fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model`

- Location: **Refutation**; source lines 73.
- Pages: `riemannian-comparison-theorems`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model--01.png), [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model--02.png), [tile 03](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model--03.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model.md).

Exact frozen source lines:

```text
73: **Proof technique:** direct: exhibit the octant triangle with vertices $e_1,e_2,e_3$ on the unit round sphere at $k=0$, compute its actual angles as $\pi/2$ from orthonormality of the basis, compute the Euclidean comparison angles from the model cosine law and the $k=0$ angle sum $\pi$, and observe that $\pi/2>\pi/3$.
```

#### differential-geometry / confirmed 010: `cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth`

- Location: **Proof technique banner**; source lines 66.
- Pages: `riemannian-comparison-theorems`.
- Visible defect: The CSS uppercase technique banner displays inline math delimiters and LaTeX commands literally instead of typesetting them.
- Future repair: Keep technique banner text plain prose or route its math through the normal math renderer.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth.md).

Exact frozen source lines:

```text
66: **Proof technique:** direct: specialise the Bishop upper bound to $k=0$, where $\operatorname{Ric}\ge0=(n-1)\cdot0\cdot g$, and evaluate the integral defining the flat model volume.
```

#### differential-geometry / confirmed 011: `ex-conjugate-antipodes-on-the-round-sphere`

- Location: **Proof technique banner**; source lines 108.
- Pages: `jacobi-fields-conjugate-points-and-the-cut-locus-examples`.
- Visible defect: The CSS uppercase technique banner displays inline math delimiters and LaTeX commands literally instead of typesetting them.
- Future repair: Keep technique banner text plain prose or route its math through the normal math renderer.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-conjugate-antipodes-on-the-round-sphere--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-conjugate-antipodes-on-the-round-sphere.md).

Exact frozen source lines:

```text
108: **Proof technique:** locate the antipode as the cut-time endpoint, solve the scalar Jacobi equation in constant positive curvature, bound the endpoint-vanishing space by an initial-derivative injection into $v^\perp$, and match it with the $n-1$ normal zero modes.
```

#### differential-geometry / confirmed 012: `ex-metric-independence-of-total-curvature-on-a-deformed-sphere`

- Location: **Proof technique banner**; source lines 74.
- Pages: `the-gauss-bonnet-theorem-for-riemannian-surfaces-examples`.
- Visible defect: The CSS uppercase technique banner displays inline math delimiters and LaTeX commands literally instead of typesetting them.
- Future repair: Keep technique banner text plain prose or route its math through the normal math renderer.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-metric-independence-of-total-curvature-on-a-deformed-sphere--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-metric-independence-of-total-curvature-on-a-deformed-sphere.md).

Exact frozen source lines:

```text
74: **Proof technique:** obtain the total curvature $4\pi$ for every metric from metric independence and the round sphere, then compute the spheroid metric explicitly to exhibit nonconstant pointwise curvature.
```

#### differential-geometry / confirmed 013: `thm-cut-time-is-positive-and-continuous`

- Location: **Proof technique banner**; source lines 99.
- Pages: `jacobi-fields-conjugate-points-and-the-cut-locus`.
- Visible defect: The CSS uppercase technique banner displays inline math delimiters and LaTeX commands literally instead of typesetting them.
- Future repair: Keep technique banner text plain prose or route its math through the normal math renderer.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-cut-time-is-positive-and-continuous--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/thm-cut-time-is-positive-and-continuous.md).

Exact frozen source lines:

```text
99: **Proof technique:** minimizing times are read off as distance equalities; upper semicontinuity contradicts minimality at a fixed later time, and lower semicontinuity uses local invertibility of $\exp_p$ plus the two-minimizer alternative at a hypothetical drop.
```

#### differential-geometry / confirmed 014: `thm-relative-volume-density-comparison`

- Location: **Proof technique banner**; source lines 86.
- Pages: `riemannian-comparison-theorems`.
- Visible defect: The CSS uppercase technique banner displays inline math delimiters and LaTeX commands literally instead of typesetting them.
- Future repair: Keep technique banner text plain prose or route its math through the normal math renderer.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-relative-volume-density-comparison--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/thm-relative-volume-density-comparison.md).

Exact frozen source lines:

```text
86: **Proof technique:** direct: write the logarithm of the relative density as $\log J_p(t,v)-(n-1)\log\operatorname{sn}_k(t)$, differentiate with the logarithmic-derivative identity, bound the trace of the Riccati operator by the traced Riccati inequality and the scalar comparison with the model, and integrate from the common initial value one.
```

#### differential-geometry / confirmed 015: `fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field`

- Location: **Title**; source lines 4.
- Pages: `vector-fields-flows-and-lie-derivatives`.
- Visible defect: The rendered title displays the literal caret notation C^infty rather than a superscript infinity, making the mathematical notation visibly malformed.
- Future repair: Write the title as C∞ in plain Unicode text, or use a title format that supports math rendering such as $C^\infty$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field.md).

Exact frozen source lines:

```text
4: title: "FALSE: the Lie bracket is C^infty-linear in each vector-field entry"
```

#### differential-geometry / confirmed 016: `ex-hyperbolic-geodesic-triangle-area-defect`

- Location: **Verification**; source lines 67.
- Pages: `the-gauss-bonnet-theorem-for-riemannian-surfaces-examples`.
- Visible defect: The proof technique banner contains inline LaTeX $K\equiv-1$. The CSS uppercase technique banner renders the $...$ source literally instead of typesetting it.
- Future repair: Render inline math inside the proof-technique banner, or keep the banner text free of inline mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-hyperbolic-geodesic-triangle-area-defect--01.png), [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-hyperbolic-geodesic-triangle-area-defect--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-hyperbolic-geodesic-triangle-area-defect.md).

Exact frozen source lines:

```text
67: **Proof technique:** exhibit a global positive orthonormal frame, compute its connection form and curvature by the structure equation, then insert $K\equiv-1$ into the geodesic-triangle formula.
```

#### differential-geometry / confirmed 017: `ex-model-jacobi-fields-in-positive-zero-and-negative-curvature`

- Location: **Verification**; source lines 82.
- Pages: `riemannian-comparison-theorems-examples`.
- Visible defect: The proof technique banner contains inline LaTeX for the model field and Jacobi equation. The CSS uppercase technique banner renders the $...$ source literally instead of typesetting it.
- Future repair: Render inline math inside the proof-technique banner, or keep the banner text free of inline mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-model-jacobi-fields-in-positive-zero-and-negative-curvature--01.png), [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-model-jacobi-fields-in-positive-zero-and-negative-curvature--02.png), [tile 03](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-model-jacobi-fields-in-positive-zero-and-negative-curvature--03.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-model-jacobi-fields-in-positive-zero-and-negative-curvature.md).

Exact frozen source lines:

```text
82: **Proof technique:** direct: the curvature of a constant-curvature manifold acts as $k$ times the identity on normal vectors, so the explicit field $\operatorname{sn}_k(t)P_tE$ satisfies the Jacobi equation with the prescribed initial data, and uniqueness identifies it with $A(t)E$; the three signs are then read off the comparison functions.
```

#### differential-geometry / confirmed 018: `thm-index-lemma`

- Location: **Proof**; source lines 176.
- Pages: `jacobi-fields-conjugate-points-and-the-cut-locus`.
- Visible defect: The proof technique banner contains inline LaTeX for the index-form identity. The CSS uppercase technique banner renders the $...$ source literally instead of typesetting it.
- Future repair: Render inline math inside the proof-technique banner, or keep the banner text free of inline mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-index-lemma--01.png), [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-index-lemma--02.png), [tile 03](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-index-lemma--03.png), [tile 04](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-index-lemma--04.png), [tile 05](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-index-lemma--05.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/thm-index-lemma.md).

Exact frozen source lines:

```text
176: **Proof technique:** the Jacobi matrix of the fixed initial point is invertible exactly because there is no conjugate instant; the difference $V-J$ is expanded in the Jacobi basis and the integrand identity $\langle D_tW,D_tW\rangle-\operatorname{Rm}(W,T,T,W)=\langle Af',Af'\rangle+\varphi'$ turns the index form at both vanishing endpoints into $\int\langle Af',Af'\rangle$; the equality case then forces the coefficients of $W$ to be constant and hence $W=0$.
```

#### differential-geometry / confirmed 019: `thm-zero-th-de-rham-cohomology-is-locally-constant-functions`

- Location: **Facts & Assumptions**; source lines 32.
- Pages: `the-de-rham-complex-homotopy-and-mayer-vietoris`.
- Visible defect: The rendered Facts & Assumptions prose exposes raw item identifiers where a readable reference title should appear: def-closed-and-exact-differential-forms; def-cohomology-object-of-a-cochain-complex.
- Future repair: Replace each plain item identifier in the prose with its display title or a properly resolved wikilink.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-zero-th-de-rham-cohomology-is-locally-constant-functions--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/thm-zero-th-de-rham-cohomology-is-locally-constant-functions.md).

Exact frozen source lines:

```text
32: [F1] [[def-de-rham-cohomology]]: The real **de Rham cohomology** is $H^k_{\mathrm{dR}}(M)=Z^k(M)/B^k(M)$, with $Z^k,B^k$ as in def-closed-and-exact-differential-forms. This is def-cohomology-object-of-a-cochain-complex in real vector spaces. Only a closed form $\omega$ represents a class $[\omega]$. For closed forms $\omega,\omega\prime$, equality $[\omega]=[\omega\prime]$ means precisely $\omega\prime-\omega=d\eta$ for some $(k-1)$-form $\eta$. Addition and real scalar multiplication are induced by those of forms. All groups on the empty manifold are zero.
```

#### differential-geometry / confirmed 020: `lem-divergence-form-identity`

- Location: **Facts & Assumptions**; source lines 31.
- Pages: `integration-of-forms-and-the-general-stokes-theorem`.
- Visible defect: The rendered Facts & Assumptions prose exposes raw item identifiers where a readable reference title should appear: lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary; prop-divergence-is-well-defined-and-has-the-coordinate-formula.
- Future repair: Replace each plain item identifier in the prose with its display title or a properly resolved wikilink.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/lem-divergence-form-identity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/lem-divergence-form-identity.md).

Exact frozen source lines:

```text
31: [F1] [[def-divergence-relative-to-a-volume-form]]: Let $\mu$ be a positive volume form and $X$ a smooth vector field on a smooth oriented manifold, with boundary allowed. The **divergence relative to $\mu$** is the smooth scalar function determined by $$\mathcal L_X\mu=(\operatorname{div}_\mu X)\mu.$$ At a boundary point use the local-extension Lie derivative of lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary. The nonzero top form spans each top exterior-power fiber, so the scalar is unique. Smooth existence and its coordinate formula are discharged by prop-divergence-is-well-defined-and-has-the-coordinate-formula.
```

#### differential-geometry / confirmed 021: `ex-volume-density-in-polar-coordinates`

- Location: **Facts & Assumptions**; source lines 32.
- Pages: `riemannian-metrics-length-distance-and-volume-examples`.
- Visible defect: The rendered Facts & Assumptions prose exposes raw item identifiers where a readable reference title should appear: prop-coordinate-criterion-for-a-riemannian-metric; def-density-bundle-and-smooth-density; lem-the-riemannian-volume-density-is-coordinate-independent.
- Future repair: Replace each plain item identifier in the prose with its display title or a properly resolved wikilink.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-volume-density-in-polar-coordinates--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-volume-density-in-polar-coordinates.md).

Exact frozen source lines:

```text
32: [F1] [[def-riemannian-volume-density]]: The **Riemannian volume density** is $\mu_g=\sqrt{\det G_x}\,|dx^1\cdots dx^n|$ in coordinates. The matrix is that of prop-coordinate-criterion-for-a-riemannian-metric, so its determinant is positive and smooth. The density frames and their absolute-Jacobian law are def-density-bundle-and-smooth-density. In dimension zero take the empty determinant to be one, giving weight one at every point, independently of orientation. The compatibility of these local formulas is proved in lem-the-riemannian-volume-density-is-coordinate-independent.
```

#### differential-geometry / confirmed 022: `thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms`

- Location: **Facts & Assumptions**; source lines 34.
- Pages: `riemannian-metrics-length-distance-and-volume`.
- Visible defect: The rendered Facts & Assumptions prose exposes raw item identifiers where a readable reference title should appear: thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms.
- Future repair: Replace each plain item identifier in the prose with its display title or a properly resolved wikilink.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms.md).

Exact frozen source lines:

```text
34: [F1] [[def-musical-isomorphisms]]: The **musical maps** for $g$ are $v^\flat=g(v,\cdot)$ and its pointwise inverse $\alpha^\sharp$, characterized by $g(\alpha^\sharp,v)=\alpha(v)$ for all $v$. For the metric in def-riemannian-metric-and-riemannian-manifold, $v^\flat=0$ forces $g(v,v)=0$ and hence $v=0$. Thus $\flat$ is injective between equal-dimensional fibres and bijective; this gives the pointwise inverse. Smooth inverse bundle maps are proved in thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms. On a zero fibre both are the unique map.
```

#### differential-geometry / confirmed 023: `ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity`

- Location: **Verification**; source lines 87.
- Pages: `riemannian-comparison-theorems-examples`.
- Visible defect: TECHNIQUE · DIRECT: ... $\EXP_P$ ... $K=0$ ... $\PI_1(T^N)$ ...
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/research/math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity.md).

Exact frozen source lines:

```text
87: **Proof technique:** direct: the quotient charts make $q$ a local isometry from the complete Euclidean space, so the completeness/covering theorem makes $q$ a covering map and the torus complete; the constant coordinate metric kills all curvature; straight lines are the geodesics, so $\exp$ is a translated quotient map and is noninjective; a lift of the standard loop through the covering proves that the loop is essential.
```

#### differential-geometry / confirmed 024: `ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity`

- Location: **Verification**; source lines 99.
- Pages: `riemannian-comparison-theorems-examples`.
- Visible defect: The rendered conclusion ends visibly with “∎ ## Source locator”; the next source line begins the locator paragraph.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/differential-geometry/research/math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity--03.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity.md).

Exact frozen source lines:

```text
99: 4.1 Conclusion, and the hypotheses of Cartan–Hadamard. [F3, F7, step 2.1, step 3.1, step 3.2] By step 1.1 the torus is complete, by step 2.1 it has $K=0\le0$, and it is a connected boundaryless Riemannian manifold; by step 3.2 it is not simply connected. It therefore satisfies every hypothesis of [[thm-cartan-hadamard]] except simple connectedness, and by step 3.1 the conclusion of that theorem — injectivity of $\exp_p$ — fails at every point. Hence simple connectedness cannot be omitted from Cartan–Hadamard. The failure is exactly the deck-group phenomenon: for every $p$ the fibre of $\exp_p$ over $p$ is the lattice $\mathbb Z^n$ of step 3.1 translations, and the covering $q$ of step 1.1 is nontrivial precisely because the deck translations are nontrivial. Boundary cases: the word "constant curvature $0$" is two-plane curvature, so it is asserted only for $n\ge2$ as in the statement; the vector $z=e_1$ used in step 3.1 is nonzero exactly because $n\ge1$; the case $v=0$ of step 2.2 is the constant geodesic through $[x]$, and $0$ and $z$ are distinct vectors with the same image, so the failure of injectivity is not an artefact of a degenerate vector. No choice beyond the inherited [A1] is used: the lattice, the charts, the loop and the homotopy argument are all explicit. [F3, F7, step 2.1, step 3.1, step 3.2] ∎
```

#### differential-geometry / confirmed 025: `lem-local-length-comparison-for-a-conjugate-free-geodesic`

- Location: **Proof**; source lines 212.
- Pages: `jacobi-fields-conjugate-points-and-the-cut-locus`.
- Visible defect: Uppercase banner shows literal $\exp_p$, $C^1$, $\sqrt{r^2+\sigma^2}$ and other formula delimiters.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/research/math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/lem-local-length-comparison-for-a-conjugate-free-geodesic--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/lem-local-length-comparison-for-a-conjugate-free-geodesic.md).

Exact frozen source lines:

```text
212: **Proof technique:** the segment is covered by finitely many tangent balls on which $\exp_p$ is a diffeomorphism; a nearby curve is pulled back to a piecewise $C^1$ curve $\varphi$ with $\exp_p\circ\varphi=\bar\gamma$; the smoothed radius $\sqrt{r^2+\sigma^2}$ with $r=|\varphi|_g$ satisfies the pointwise Gauss-lemma bound $|\bar\gamma'|_g\ge|(\sqrt{r^2+\sigma^2})'|$, and Newton--Leibniz on the strips gives $L_g(\bar\gamma)\ge\sqrt{|X|_g^2+\sigma^2}-\sigma\uparrow|X|_g$. Equality forces $r$ to be nondecreasing, the spherical part of $\varphi'$ to vanish and the direction $\varphi/r$ to be the constant direction of $X$; then $\bar\gamma=\gamma\circ\tau$ with $\tau$ the radial reparametrization, and conversely [F15].
```

#### differential-geometry / confirmed 026: `lem-second-countable-smooth-manifolds-have-cw-homotopy-type`

- Location: **Proof**; source lines 143.
- Pages: `chern-weil-theory-and-characteristic-forms`.
- Visible defect: The proof conclusion displays “∎ ## Remarks” as text.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 05](math-library-rendering-audit-2026-10-23/differential-geometry/research/math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/lem-second-countable-smooth-manifolds-have-cw-homotopy-type--05.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/lem-second-countable-smooth-manifolds-have-cw-homotopy-type.md).

Exact frozen source lines:

```text
143: 7.1 Step 2.1 establishes paracompactness; steps 1.3 and 2.2 establish weak Hausdorffness and compact generation, while Hausdorffness is assumed. Steps 5.1 and 6.1 establish CW homotopy type in the boundaryless and boundary cases, and step 2.5 establishes numerability. Together with step 1.1, all AC-dependent supplier hypotheses are met, proving the statement. [step 1.1, step 2.1, step 1.3, step 2.2, step 5.1, step 6.1, step 2.5] ∎ ## Remarks
```

#### differential-geometry / confirmed 027: `thm-rauch-comparison-theorem-second-form`

- Location: **Proof**; source lines 97.
- Pages: `riemannian-comparison-theorems`.
- Visible defect: Uppercase banner shows literal $y''+R_\gamma y=0$, $\operatorname{id}$, $\lambda\operatorname{id}$ and $f_k$.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/research/math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-rauch-comparison-theorem-second-form--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/thm-rauch-comparison-theorem-second-form.md).

Exact frozen source lines:

```text
97: **Proof technique:** direct: transport the given field to the normal space at $\gamma(0)$, exhibit the tensor equation $y''+R_\gamma y=0$ with initial data $\operatorname{id},\lambda\operatorname{id}$, and apply the in-run Riccati comparison for scalar initial shape against the scalar model $f_k$.
```

#### differential-geometry / confirmed 028: `ex-cut-locus-on-a-flat-rectangular-torus-from-the-dirichlet-cell`

- Location: **Proof**; source lines 153.
- Pages: `jacobi-fields-conjugate-points-and-the-cut-locus-examples`.
- Visible defect: The proof ends visibly with “QED ## Source locator”.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 05](math-library-rendering-audit-2026-10-23/differential-geometry/research/math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-cut-locus-on-a-flat-rectangular-torus-from-the-dirichlet-cell--05.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-cut-locus-on-a-flat-rectangular-torus-from-the-dirichlet-cell.md).

Exact frozen source lines:

```text
153: 8.1 The torus is nonempty and two-dimensional; $a,b>0$ rule out a collapsed period. The zero tangent vector is included in $C_p$ but is not a unit direction. Directions with one zero coordinate are covered by omitting that coordinate's quotient from the minimum in step 5.1. The cut-time supremum is over $t>0$, its endpoint $\tau(u)$ is included and minimizing, and every later time fails strictly. The two set equalities in step 6.1 were proved in both directions. The only choice assumption is [A1] through geodesic uniqueness, Hopf--Rinow [F14] and the cut interfaces [F15, F16]; coordinate rounding is determined by [F2], path lifts are unique from a specified start, and no full AC or family selection is used. No other dimension or iff claim is made. [A1, F2, F12, F14, F15, F16, step 2.1, step 3.2, step 4.2, step 5.1, step 6.1, step 7.1] QED ## Source locator
```

#### differential-geometry / confirmed 029: `ex-a-vector-field-with-finite-time-escape`

- Location: **Item body**; source lines 4.
- Pages: `vector-fields-flows-and-lie-derivatives-examples`.
- Visible defect: The title renders the literal ASCII text “x^2 d/dx” in the large card heading, while the statement renders the vector field as math. Optional typography issue; the formula is understandable.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/research/math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-a-vector-field-with-finite-time-escape--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-a-vector-field-with-finite-time-escape.md).

Exact frozen source lines:

```text
4: title: "The vector field x^2 d/dx has finite-time escape"
```

#### differential-geometry / confirmed 030: `ex-gauss-bonnet-for-a-spherical-cap`

- Location: **Verification**; source lines 77.
- Pages: `the-gauss-bonnet-theorem-for-riemannian-surfaces-examples`.
- Visible defect: The CSS uppercase technique banner displays `$2\pi`/`$2\pi\chi(D)$` and TeX command text rather than typesetting the math. Uppercase banner styling itself is expected.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/research/math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/ex-gauss-bonnet-for-a-spherical-cap--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/ex-gauss-bonnet-for-a-spherical-cap.md).

Exact frozen source lines:

```text
77: **Proof technique:** compute the round metric, connection form and curvature in the polar chart, integrate over the cap, compute the geodesic curvature of the positively oriented latitude circle, and identify the constant $2\pi$ with $2\pi\chi(D)$ through an explicit finite triangulation of the cap.
```

#### differential-geometry / confirmed 031: `thm-hessian-comparison-for-distance-under-sectional-curvature-bounds`

- Location: **Proof**; source lines 103.
- Pages: `riemannian-comparison-theorems`.
- Visible defect: The CSS uppercase technique banner displays source delimiters and commands such as `$r$`, `\operatorname`, `\mathrm`, and `\operatorname` in the banner instead of typeset math.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/research/math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-hessian-comparison-for-distance-under-sectional-curvature-bounds--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/thm-hessian-comparison-for-distance-under-sectional-curvature-bounds.md).

Exact frozen source lines:

```text
103: **Proof technique:** direct: identify the Hessian of $r$ at $q$ with the transported radial Riccati operator $S(t_0)$ through the published radial-Jacobi formula, compare the extreme eigenvalues of $S$ with the scalar model $\operatorname{ct}_k$ by a Dini-derivative comparison whose matched asymptotics at $t=0$ are the singular behaviour $t^{-1}\operatorname{id}+O(t)$ of the Riccati operator, and translate the resulting Loewner inequalities back to the Hessian.
```

#### differential-geometry / confirmed 032: `thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound`

- Location: **Proof**; source lines 88.
- Pages: `riemannian-comparison-theorems`.
- Visible defect: The CSS uppercase technique banner displays raw `$\Delta_gr(q)$`, `$h(t_0)$`, and `$a\prime+a^2$` source rather than typeset math.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/differential-geometry/research/math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound.md).

Exact frozen source lines:

```text
88: **Proof technique:** direct: identify $\Delta_gr(q)$ with the trace $h(t_0)$ of the radial Riccati operator, use the trace Riccati inequality of the page to reduce to the scalar inequality $a'+a^2\le-k$ for $a=h/(n-1)$, and compare $a$ with the model $\operatorname{ct}_k$ by the integrating-factor argument with matched asymptotics at $t=0$.
```

### Optional typography

#### differential-geometry / typography 001: `fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n`

- Location: **Item body**; source lines 4.
- Pages: `whitney-embedding-tubular-neighbourhoods-and-approximation`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-geometry/screenshots/fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-geometry/snapshots/fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n.md).

Exact frozen source lines:

```text
4: title: "FALSE: every proper embedding of an n-manifold lands in R^n"
```

