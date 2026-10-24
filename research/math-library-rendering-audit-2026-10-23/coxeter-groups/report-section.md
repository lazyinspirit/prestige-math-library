## Coxeter Groups

Completed visual review of **356 items across 66 pages**, with **1051 image tiles**. Findings: 32 confirmed, 5 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/coxeter-groups/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/coxeter-groups/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/coxeter-groups/category-review-receipt.json).

### Confirmed rendering defects

#### coxeter-groups / confirmed 001: `cex-cg-artin-positive-lift-is-not-a-homomorphism`

- Location: **frontmatter title**; source lines 4.
- Pages: `coxeter-artin-and-hecke-interfaces-examples`.
- Visible defect: The title renders b_w as literal ASCII with an underscore; the formulas in the item body render as mathematics.
- Future repair: Wrap b_w in the title’s math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/cex-cg-artin-positive-lift-is-not-a-homomorphism--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/cex-cg-artin-positive-lift-is-not-a-homomorphism.md).

Exact frozen source lines:

```text
4: title: "The positive lift b_w is not a monoid homomorphism"
```

#### coxeter-groups / confirmed 002: `lem-cg-double-coset-intersection-parabolic`

- Location: **frontmatter title**; source lines 4.
- Pages: `parabolic-subgroups-and-double-coset-geometry`.
- Visible defect: The title exposes ASCII underscores, the word “cap”, and caret notation instead of typesetting the parabolic intersection and double-coset representative notation.
- Future repair: Typeset the intersection and representative notation in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/lem-cg-double-coset-intersection-parabolic--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/lem-cg-double-coset-intersection-parabolic.md).

Exact frozen source lines:

```text
4: title: "The parabolic intersection W_I cap dW_Jd inverse for d in ^IW^J"
```

#### coxeter-groups / confirmed 003: `thm-cg-reduced-positive-section-and-length-additive-products`

- Location: **frontmatter title**; source lines 4.
- Pages: `coxeter-artin-and-hecke-interfaces`.
- Visible defect: The title renders b_w as literal ASCII with an underscore; the statement body typesets b_w correctly.
- Future repair: Wrap b_w in the title’s math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/thm-cg-reduced-positive-section-and-length-additive-products--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/thm-cg-reduced-positive-section-and-length-additive-products.md).

Exact frozen source lines:

```text
4: title: "The reduced positive section b_w, its length additivity, and the degree homomorphism"
```

#### coxeter-groups / confirmed 004: `ex-cg-right-angled-cube-davis-complex`

- Location: **Remarks**; source lines 204.
- Pages: `spherical-parabolic-cosets-and-the-davis-complex-examples`.
- Visible defect: The rendered remark exposes raw internal item slugs (including ex-cg-right-angled-cube-davis-complex and supplier IDs) instead of reader-facing linked titles.
- Future repair: Use reader-facing links or remove the workflow-only closeout remark from the published example.
- Image evidence: [tile 05](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-right-angled-cube-davis-complex--05.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-right-angled-cube-davis-complex.md).

Exact frozen source lines:

```text
204: The item remains escalated while these in-run suppliers require current decisions or audits. Consumer `ex-cg-right-angled-cube-davis-complex` uses `def-cg-spherical-nerve-coset-poset-and-davis-realization` in step 4.2; `lem-cg-spherical-coset-inclusion-and-intersection` in steps 2.2 and 3.1; `lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics` in steps 2.1, 3.1, and 4.1; and `thm-cg-davis-complex-cell-incidence-and-stabilizers` in steps 2.2, 4.1, and 4.2. Its cross-batch suppliers are `def-cg-coxeter-diagram-components-and-finite-type` (step 1.1); `lem-cg-diagram-products-and-invariant-form-comparison` (steps 1.1 and 2.1); `def-cg-real-coxeter-form-and-reflection`, `lem-cg-reflection-form-invariance-and-rank-two-orders`, and `def-cg-canonical-reflection-homomorphism` (step 2.1); `thm-hh-parabolic-minimal-representatives-and-length-additivity` and `def-hh-coxeter-matrix-word-group-and-length` (step 1.1); and `thm-cg-finite-chamber-tiling-and-coset-face-identification` (step 5.1). These supplier statements were inspected provisionally; keep each obligation open until its current Step-3 decision and this exact use are reconciled.
```

#### coxeter-groups / confirmed 005: `lem-cg-positive-span-of-transported-simple-roots`

- Location: **Facts & Assumptions**; source lines 74.
- Pages: `coxeter-euler-forms-and-sortable-chamber-cones`.
- Visible defect: The all-caps technique banner renders TeX-like source literally (`S\ELL(U)` in the banner) while mathematical prose and inline/display math below render. The body formula is a technique field, not a diagram.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/lem-cg-positive-span-of-transported-simple-roots--02.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/lem-cg-positive-span-of-transported-simple-roots.md).

Exact frozen source lines:

```text
74: 
```

#### coxeter-groups / confirmed 006: `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`

- Location: **Proof**; source lines 96.
- Pages: `finite-coxeter-invariants-and-coinvariant-gradings`.
- Visible defect: The all-caps technique banner exposes TeX-like source (`$S\NE\EMPTYSET$`) instead of typesetting it. Other display math in the body renders normally.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees--02.png), [tile 03](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees--03.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees.md).

Exact frozen source lines:

```text
96: **Proof technique:** At a regular Coxeter eigenvector the gradients of the basic invariants form a basis. Their covariance gives the degrees modulo $h$; a real-spectrum sum and the discriminant degree remove all possible multiples of $h$.
```

#### coxeter-groups / confirmed 007: `def-cg-bipartite-coxeter-element-and-root-recursion`

- Location: **Item body**; source lines 4.
- Pages: `bipartite-coxeter-elements-and-ordered-root-complexes`.
- Visible defect: The title displays `mu(a) = -2(c-1)^{-1}a` as literal ASCII formula notation, unlike rendered math in the ItemBody. This is a title rendering limitation/defect rather than a body math failure.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/def-cg-bipartite-coxeter-element-and-root-recursion--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/def-cg-bipartite-coxeter-element-and-root-recursion.md).

Exact frozen source lines:

```text
4: title: "The bipartite Coxeter element, its ordered prefix roots, and the conditional vector map mu(a) = -2(c-1)^{-1}a"
```

#### coxeter-groups / confirmed 008: `ex-cg-a3-sortable-subset-and-a-three-element-fiber`

- Location: **Proof**; source lines 102, 104, 108, 110, 114.
- Pages: `sortable-projections-and-finite-cambrian-lattices-examples`.
- Visible defect: In the original-resolution tiles, the arrays sit inline to the right of their lead-in prose, producing a crowded side-by-side layout instead of readable full-width tables; adjacent proof text wraps around the array. This is a presentation/layout defect, not a mathematical discrepancy.
- Future repair: Render each large array as display math or a semantic Markdown/HTML table, with a paragraph break before and after it.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber--02.png), [tile 03](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber--03.png), [tile 04](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber--04.png), [tile 05](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber--05.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber.md).

Exact frozen source lines:

```text
102: 1.2 For $d=c=s_1s_2s_3$, the first twelve scan records are $(w,P_c(w),B_c(w))$: $\begin{array}{c|c|c}e&\varnothing&\varnothing\\s_1&1&1\\s_2&2&2\\s_3&3&3\\s_1s_2&1,2&12\\s_1s_3&1,3&13\\s_2s_1&2,4&2\mid1\\s_2s_3&2,3&23\\s_3s_2&3,5&3\mid2\\s_1s_2s_1&1,2,4&12\mid1\\s_1s_2s_3&1,2,3&123\\s_1s_3s_2&1,3,5&13\mid2\end{array}$. [F1, F3, F4, algebra]
104: 1.3 The remaining twelve scan records for $c$ are $(w,P_c(w),B_c(w))$: $\begin{array}{c|c|c}s_2s_1s_3&2,3,4&23\mid1\\s_2s_3s_2&2,3,5&23\mid2\\s_3s_2s_1&3,5,7&3\mid2\mid1\\s_1s_2s_1s_3&1,2,3,4&123\mid1\\s_1s_2s_3s_2&1,2,3,5&123\mid2\\s_1s_3s_2s_1&1,3,5,7&13\mid2\mid1\\s_2s_1s_3s_2&2,3,4,5&23\mid12\\s_2s_3s_2s_1&2,3,5,7&23\mid2\mid1\\s_1s_2s_1s_3s_2&1,2,3,4,5&123\mid12\\s_1s_2s_3s_2s_1&1,2,3,5,7&123\mid2\mid1\\s_2s_1s_3s_2s_1&2,3,4,5,7&23\mid12\mid1\\w_0&1,2,3,4,5,7&123\mid12\mid1\end{array}$. [F1, F3, F4, algebra]
108: 1.5 For $d=c'=s_1s_3s_2$, the first twelve scan records are $(w,P_{c'}(w),B_{c'}(w))$: $\begin{array}{c|c|c}e&\varnothing&\varnothing\\s_1&1&1\\s_2&3&2\\s_3&2&3\\s_1s_2&1,3&12\\s_1s_3&1,2&13\\s_2s_3&3,5&2\mid3\\s_2s_1&3,4&2\mid1\\s_3s_2&2,3&23\\s_1s_2s_1&1,3,4&12\mid1\\s_1s_2s_3&1,3,5&12\mid3\\s_1s_3s_2&1,2,3&123\end{array}$. [F1, F3, F4, algebra]
110: 1.6 The remaining twelve scan records for $c'$ are $(w,P_{c'}(w),B_{c'}(w))$: $\begin{array}{c|c|c}s_2s_3s_2&2,3,5&23\mid3\\s_2s_1s_3&3,4,5&2\mid13\\s_1s_2s_1s_3&1,3,4,5&12\mid13\\s_1s_2s_3s_2&1,2,3,5&123\mid3\\s_2s_1s_3s_2&3,4,5,6&2\mid123\\s_1s_2s_1s_3s_2&1,3,4,5,6&12\mid123\\s_3s_2s_1&2,3,4&23\mid1\\s_2s_3s_2s_1&2,3,4,5&23\mid13\\s_1s_3s_2s_1&1,2,3,4&123\mid1\\s_1s_2s_3s_2s_1&1,2,3,4,5&123\mid13\\s_2s_1s_3s_2s_1&2,3,4,5,6&23\mid123\\w_0&1,2,3,4,5,6&123\mid123\end{array}$. [F1, F3, F4, algebra]
114: 1.8 Write $D_i$ for a descent branch of [F6] at initial letter $s_i$ and $A_i(v)$ for an ascent branch whose $W_{S\setminus\{s_i\}}$-prefix is $v$; after $D_i$ rotate the word to $s_ic s_i$, and after $A_i(v)$ restrict it by deleting the initial $s_i$. Recursing through all inputs gives these image fibers (the indicated traces end at the base $e$): $\begin{array}{c|l|l}\pi_c(w)&\pi_c^{-1}(\pi_c(w))&\text{trace}\\e&\{e\}&\text{base}\\s_1&\{s_1\}&D_1\\s_2&\{s_2,s_2s_1\}&A_1(s_2)D_2\\s_3&\{s_3,s_3s_2,s_3s_2s_1\}&A_1(s_3)A_2(s_3)D_3\text{ for }s_3;\ A_1(s_3s_2)A_2(s_3)D_3\text{ for the other two}\\s_1s_2&\{s_1s_2\}&D_1D_2\\s_1s_3&\{s_1s_3,s_1s_3s_2,s_1s_3s_2s_1\}&D_1A_2(s_3)D_3\\s_2s_3&\{s_2s_3,s_2s_1s_3,s_2s_1s_3s_2\}&A_1(s_2s_3)D_2D_3\\s_1s_2s_1&\{s_1s_2s_1\}&D_1D_2A_3(s_1)D_1\\s_1s_2s_3&\{s_1s_2s_3\}&D_1D_2D_3\\s_2s_3s_2&\{s_2s_3s_2,s_2s_3s_2s_1,s_2s_1s_3s_2s_1\}&A_1(s_2s_3s_2)D_2D_3D_2\\s_1s_2s_1s_3&\{s_1s_2s_1s_3\}&D_1D_2D_3D_1\\s_1s_2s_3s_2&\{s_1s_2s_3s_2,s_1s_2s_3s_2s_1\}&D_1D_2D_3A_1(s_2)D_2\\s_1s_2s_1s_3s_2&\{s_1s_2s_1s_3s_2\}&D_1D_2D_3D_1D_2\\w_0&\{w_0\}&D_1D_2D_3D_1D_2A_3(s_1)D_1\end{array}$. The fibers are disjoint and their sizes sum to $24$, so the table is exhaustive and proves (ii). [F1, F6, algebra]
```

#### coxeter-groups / confirmed 009: `ex-cg-link-edge-lengths-versus-dihedral-angles`

- Location: **title**; source lines 4.
- Pages: `spherical-simplex-metrics-angular-links-and-cones-examples`.
- Visible defect: Title renders the Coxeter type as literal I_2(m), with an unformatted underscore/subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-link-edge-lengths-versus-dihedral-angles--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-link-edge-lengths-versus-dihedral-angles.md).

Exact frozen source lines:

```text
4: title: "Link edge lengths versus dihedral mirror angles in type I_2(m)"
```

#### coxeter-groups / confirmed 010: `ex-cg-euler-and-skew-form-in-a3`

- Location: **title**; source lines 4.
- Pages: `coxeter-euler-forms-and-sortable-chamber-cones-examples`.
- Visible defect: Title displays c = s1s2s3 and A3 as raw ASCII mathematical notation, without subscripts.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-euler-and-skew-form-in-a3--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-euler-and-skew-form-in-a3.md).

Exact frozen source lines:

```text
4: title: "The Euler and skew forms of c = s1s2s3 in A3, and the orientation of its rank-two subsystems"
```

#### coxeter-groups / confirmed 011: `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3`

- Location: **title**; source lines 4.
- Pages: `coxeter-euler-forms-and-sortable-chamber-cones-examples`.
- Visible defect: Title displays s1s2 and A3 as raw ASCII mathematical notation, without subscripts.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3.md).

Exact frozen source lines:

```text
4: title: "All skips and the cone walls of the sortable element s1s2 in A3"
```

#### coxeter-groups / confirmed 012: `lem-cg-steinberg-bipartite-root-enumeration`

- Location: **title and internal reference title**; source lines 4, 40.
- Pages: `bipartite-coxeter-elements-and-ordered-root-complexes`.
- Visible defect: The title prints rho(c) - id as raw ASCII, and the internal reference for the defining item prints mu(a) = -2(c-1)^-1a literally rather than typesetting the inverse.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/lem-cg-steinberg-bipartite-root-enumeration--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/lem-cg-steinberg-bipartite-root-enumeration.md).

Exact frozen source lines:

```text
4: title: "The Coxeter plane, ordered-root enumeration, and invertibility of rho(c) - id"
40: Let $(W,S)$ be an irreducible finite-type Coxeter system with $|S|=n\ge2$, with bipartition $J\sqcup K=S$ and data $\alpha_1,\dots,\alpha_n$, $s_1,\dots,s_n$, $a,b,c=ab$, $h=\operatorname{ord}(c)$, $\beta_i,\rho_i,\mu_i$ and conditional map $\mu$ as in [[def-cg-bipartite-coxeter-element-and-root-recursion]]. Put $r:=|J|$, so $J=\{s_1,\dots,s_r\}$ and $K=\{s_{r+1},\dots,s_n\}$. Let $C_V:=\rho(c)\in\mathrm{GL}(V)$ denote the linear action of $c$, let $\mathcal C$ be the primal chamber in $V$ and $\mathcal C^\circ$ its interior, and let $H_\alpha=\{x\in V:B(x,\alpha)=0\}$ be the root hyperplanes ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[def-cg-finite-reflection-arrangement-and-spherical-chambers]]). Write $w_0$ for the longest element ([[thm-cg-finite-parabolic-longest-element-and-opposition]]). Then:
```

#### coxeter-groups / confirmed 013: `ex-cg-euler-and-skew-form-in-a3`

- Location: **proof-technique banner (optional typography)**; source lines 146.
- Pages: `coxeter-euler-forms-and-sortable-chamber-cones-examples`.
- Visible defect: The expected uppercase technique banner exposes raw $\omega$ delimiters/markup rather than typesetting the formula.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-euler-and-skew-form-in-a3--03.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-euler-and-skew-form-in-a3.md).

Exact frozen source lines:

```text
146: **Proof technique:** compute the Coxeter form entries, apply the triangular Euler-form definition to each word, and evaluate $\omega$ on the two root lists using bilinearity.
```

#### coxeter-groups / confirmed 014: `lem-cg-classical-coxeter-spectra-from-reflection-models`

- Location: **title**; source lines 4.
- Pages: `finite-coxeter-invariants-and-coinvariant-gradings`.
- Visible defect: The rendered title displays A_n, B_n, D_n and I_2(m) with literal underscores rather than mathematical subscripts. Confirmed in the standalone original tile.
- Future repair: Mark the type symbols as inline mathematics in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/lem-cg-classical-coxeter-spectra-from-reflection-models--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/lem-cg-classical-coxeter-spectra-from-reflection-models.md).

Exact frozen source lines:

```text
4: title: "The Coxeter elements of the classical types A_n, B_n, D_n and I_2(m): characteristic polynomials, orders and spectral exponents from their reflection models"
```

#### coxeter-groups / confirmed 015: `lem-cg-classical-coxeter-spectra-from-reflection-models`

- Location: **Statement**; source lines 30.
- Pages: `finite-coxeter-invariants-and-coinvariant-gradings`.
- Visible defect: The linked reference title is displayed inline as plain text and exposes raw ASCII `mu(a) = -2(c-1)^{-1}a`; the underscore and caret are not typeset. This is a reference-title leak from the linked item title.
- Future repair: Format the formula in the referenced item title as inline mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/lem-cg-classical-coxeter-spectra-from-reflection-models--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/lem-cg-classical-coxeter-spectra-from-reflection-models.md).

Exact frozen source lines:

```text
30: For each of the types $A_n$ $(n\ge1)$, $B_n$ $(n\ge2)$, $D_n$ $(n\ge4)$ and $I_2(m)$ $(m\ge3)$ take the irreducible Coxeter system $(W,S)$ of that type with the standard diagram numbering of [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1) (for $D_n$ the star with arms of $1,1,n-3$ edges; for $I_2(m)$ the two vertices joined by an edge of label $m$), let $\rho_{\mathbb C}:W\to\mathrm{GL}(V_{\mathbb C})$ be the complexified canonical reflection representation of [[lem-cg-complexification-satisfies-reflection-invariant-hypotheses]], and let $c\in W$ be the bipartite Coxeter element of [[def-cg-bipartite-coxeter-element-and-root-recursion]] (equivalently: the product, in the bipartite convention, of the two colour-class products of the tree $\Gamma$, each of which has commuting factors; for a path diagram the colour classes are the even- and odd-numbered vertices, and for $D_n$ the classes are determined by the distance from the branch node). Write $\zeta_h:=\exp(2\pi i/h)$ for $h\ge2$ and write $\zeta_h^r$ for the complex number $\exp(2\pi ir/h)$; call *spectral exponents* the multiset of residues $r\in\{1,\dots,h-1\}$ such that the eigenvalues of the operator are the numbers $\exp(2\pi ir/h)$, each with multiplicity. Then $\rho_{\mathbb C}(c)$ is diagonalisable ([[def-diagonalisable-endomorphism]]), has order $h$ equal to the Coxeter number displayed below, and has the displayed characteristic polynomial in $X=\lambda$ and spectral exponents:
```

#### coxeter-groups / confirmed 016: `thm-cg-bruhat-eulerian-intervals-and-mobius`

- Location: **Statement**; source lines 46.
- Pages: `bruhat-interval-labels-shellings-and-mobius-functions`.
- Visible defect: The linked reference title includes `W^I` in ordinary text and displays the caret literally rather than as a superscript. This is a reference-title leak from the linked item title.
- Future repair: Format W^I as inline mathematics in the referenced item title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/thm-cg-bruhat-eulerian-intervals-and-mobius--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/thm-cg-bruhat-eulerian-intervals-and-mobius.md).

Exact frozen source lines:

```text
46: **(iv) Scope.** The sign formula is proved for the full Bruhat order on $W$, that is for intervals $[u,v]\subseteq W$. It is not asserted for intervals of a proper parabolic quotient $W^I$ ([[thm-cg-bruhat-parabolic-projection-and-quotients]]): there the fullness of the interval is an additional hypothesis, and the companion page exhibits a quotient interval for which the sign formula fails.
```

#### coxeter-groups / confirmed 017: `thm-cg-sortable-projection-greatest-element-and-interval-fibers`

- Location: **title**; source lines 4.
- Pages: `sortable-projections-and-finite-cambrian-lattices`.
- Visible defect: The CSS-uppercase title banner displays the formula as raw ASCII, including underscore and subscript notation, instead of typesetting it. The item body formula in Statement line 57 is correctly rendered with MathMarkdown.
- Future repair: Typeset the formula in the title using the renderer-supported math notation or use a plain-language title without a formula.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/thm-cg-sortable-projection-greatest-element-and-interval-fibers--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/thm-cg-sortable-projection-greatest-element-and-interval-fibers.md).

Exact frozen source lines:

```text
4: title: The upper endpoint of a c-Cambrian fiber, interval fibers and the explicit formula u_c(w) = pi_{c^{-1}}(ww0)w0
```

#### coxeter-groups / confirmed 018: `ex-cg-cambrian-quotient-of-s3-and-two-orientations`

- Location: **Title**; source lines 4.
- Pages: `sortable-projections-and-finite-cambrian-lattices-examples`.
- Visible defect: Raw group notation in the display title.
- Future repair: Typeset the group symbol as math, for example $S_3$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-cambrian-quotient-of-s3-and-two-orientations--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-cambrian-quotient-of-s3-and-two-orientations.md).

Exact frozen source lines:

```text
4: title: "The c-Cambrian quotient of S3 for both orientations: fibers, endpoints and meet/join preservation"
```

#### coxeter-groups / confirmed 019: `ex-cg-s4-rank-three-interval-mobius-from-recurrence`

- Location: **Title**; source lines 4.
- Pages: `bruhat-interval-labels-shellings-and-mobius-functions-examples`.
- Visible defect: Raw group notation in the display title.
- Future repair: Typeset the group symbol as math, for example $S_4$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-s4-rank-three-interval-mobius-from-recurrence--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-s4-rank-three-interval-mobius-from-recurrence.md).

Exact frozen source lines:

```text
4: title: "The Möbius value of the rank-three interval [e,c] in S4 from the recurrence, with the parity and falling-chain checks"
```

#### coxeter-groups / confirmed 020: `thm-cg-bruhat-parabolic-projection-and-quotients`

- Location: **Title**; source lines 4.
- Pages: `bruhat-subword-order-and-lifting`.
- Visible defect: Raw exponent notation in the display title.
- Future repair: Typeset the parabolic quotient as math, for example $W^I$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/thm-cg-bruhat-parabolic-projection-and-quotients--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/thm-cg-bruhat-parabolic-projection-and-quotients.md).

Exact frozen source lines:

```text
4: title: "The minimal-coset projection onto W^I is order-preserving, and Bruhat order on the parabolic quotient W^I"
```

#### coxeter-groups / confirmed 021: `ex-cg-dihedral-noncrossing-interval-and-kreweras-complement`

- Location: **Verification technique banner**; source lines 72.
- Pages: `noncrossing-partition-lattices-and-kreweras-complements-examples`.
- Visible defect: Math inside the CSS uppercase technique banner is not passed through the math renderer.
- Future repair: Keep the banner's wording as plain text or render its math spans before applying uppercase styling.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-dihedral-noncrossing-interval-and-kreweras-complement--02.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-dihedral-noncrossing-interval-and-kreweras-complement.md).

Exact frozen source lines:

```text
72: **Proof technique:** use $c=st$ and the exact order $m$ to list all group elements and reflections, then apply the absolute-order length equality to those two element types.
```

#### coxeter-groups / confirmed 022: `ex-hh-finite-dihedral-reduced-words`

- Location: **Verification technique banner**; source lines 62.
- Pages: `coxeter-presentations-exchange-and-reduced-word-theorems-examples`.
- Visible defect: Math inside the CSS uppercase technique banner is not passed through the math renderer.
- Future repair: Keep the banner's wording as plain text or render its math spans before applying uppercase styling.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-hh-finite-dihedral-reduced-words--01.png), [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-hh-finite-dihedral-reduced-words--02.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-hh-finite-dihedral-reduced-words.md).

Exact frozen source lines:

```text
62: **Proof technique:** direct computation with the normal forms of the dihedral group, using the exact order of $st$ and the ambient reducedness of alternating words.
```

#### coxeter-groups / confirmed 023: `ex-cg-s4-rank-three-interval-mobius-from-recurrence`

- Location: **Verification technique banner**; source lines 75.
- Pages: `bruhat-interval-labels-shellings-and-mobius-functions-examples`.
- Visible defect: Math inside the CSS uppercase technique banner is not passed through the math renderer.
- Future repair: Keep the banner's wording as plain text or render its math spans before applying uppercase styling.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-s4-rank-three-interval-mobius-from-recurrence--03.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-s4-rank-three-interval-mobius-from-recurrence.md).

Exact frozen source lines:

```text
75: **Proof technique:** finite computation on the fixed reduced word $s_1s_2s_3$.
```

#### coxeter-groups / confirmed 024: `lem-cg-affine-alcove-separation-and-facet-types`

- Location: **ItemBody clipping**; source lines 33, 42.
- Pages: `affine-reflections-coroot-translations-and-alcoves`.
- Visible defect: Confirmed horizontal clipping in the standalone original screenshot; content is cut at the viewport edge.
- Future repair: Allow long prose/math rows to wrap or provide horizontal overflow access in the rendered ItemBody.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/lem-cg-affine-alcove-separation-and-facet-types--01.png), [tile 03](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/lem-cg-affine-alcove-separation-and-facet-types--03.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/lem-cg-affine-alcove-separation-and-facet-types.md).

Exact frozen source lines:

```text
33:       locator: "§2.2, Proposition 2.4 (PDF p. 4) states that the reflections in the walls of a fixed affine chamber generate the affine reflection group and act simply transitively on chambers. Its proof refers to a general argument in Lecture IX, §5.3 rather than giving the argument here; it is context only, and the local gallery and shortest-word arguments are proved in this item. §2.1 proves local finiteness and Lemma 2.1 gives convex open chambers. Corollary 2.2 (PDF p. 3) uses the valid 2^r bound for r walls; the superscript is lost in plain-text extraction."
42: ## Statement
```

#### coxeter-groups / confirmed 025: `def-cg-finite-reflection-arrangement-and-spherical-chambers`

- Location: **ItemBody clipping**; source lines 34, 44, 69.
- Pages: `finite-reflection-arrangements-and-spherical-coxeter-complexes`.
- Visible defect: Confirmed horizontal clipping in standalone original screenshot tiles.
- Future repair: Allow long prose/math rows to wrap or provide horizontal overflow access in the rendered ItemBody.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/def-cg-finite-reflection-arrangement-and-spherical-chambers--01.png), [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/def-cg-finite-reflection-arrangement-and-spherical-chambers--02.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/def-cg-finite-reflection-arrangement-and-spherical-chambers.md).

Exact frozen source lines:

```text
34: Let $(W,S)$ be a Coxeter system of finite type with $S$ finite, $n:=\lvert S\rvert$, and length
44: $C^\circ$ and its root hyperplanes $H_\alpha$
69: the kernel of the nonzero linear functional $B(\cdot,\alpha)$ and in particular contains $0$;
```

#### coxeter-groups / confirmed 026: `ex-cg-cambrian-quotient-of-s3-and-two-orientations`

- Location: **Internal reference title**; source lines 88, 92.
- Pages: `sortable-projections-and-finite-cambrian-lattices-examples`.
- Visible defect: A linked reference title containing raw underscore/caret notation appears as untypeset text inside the ItemBody.
- Future repair: Typeset mathematical notation in the referenced theorem title or supply a math-formatted link label.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-cambrian-quotient-of-s3-and-two-orientations--01.png), [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-cambrian-quotient-of-s3-and-two-orientations--02.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-cambrian-quotient-of-s3-and-two-orientations.md).

Exact frozen source lines:

```text
88: 
92: 
```

#### coxeter-groups / confirmed 027: `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric`

- Location: **ItemBody clipping**; source lines 58, 61, 62.
- Pages: `coxeter-polyhedral-gluings-and-intrinsic-metrics`.
- Visible defect: Confirmed horizontal clipping in the standalone original screenshot; content is cut at the viewport edge.
- Future repair: Allow long prose/math rows to wrap or provide horizontal overflow access in the rendered ItemBody.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric--01.png), [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric--02.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric.md).

Exact frozen source lines:

```text
58: **Chains and the chain metric candidate.** Write $d_p$ for the Euclidean metric on the affine span of $C_p$. Let $x,y\in X$. A **chain** from $x$ to $y$ is a finite sequence $x=x_0,x_1,\dots,x_m=y$ of points of $X$ such that for each $i\in\{1,\dots,m\}$ some cell contains both $x_{i-1}$ and $x_i$; for $m=0$ the chain is the one-term sequence $x$. Its **length** is
61: $$d(x,y):=\inf\bigl\{\,\ell(x_0,\dots,x_m):x_0,\dots,x_m\text{ is a chain from }x\text{ to }y\,\bigr\}.$$
62: Because $X$ is connected, every two points of $X$ are joined by a chain (this and the independence of $\ell$ from the chosen faces are proved in [[thm-cg-polyhedral-chain-metric-topology-and-properness]]), so the infimum is taken over a nonempty set of real numbers, and $0\le d(x,y)<\infty$. This finiteness follows from (H1) and the gluing data; it is not an additional hypothesis.
```

#### coxeter-groups / confirmed 028: `ex-cg-dihedral-noncrossing-interval-and-kreweras-complement`

- Location: **Title**; source lines 4.
- Pages: `noncrossing-partition-lattices-and-kreweras-complements-examples`.
- Visible defect: Raw group notation in the display title.
- Future repair: Typeset the label as math, for example $I_2(5)$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-dihedral-noncrossing-interval-and-kreweras-complement--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-dihedral-noncrossing-interval-and-kreweras-complement.md).

Exact frozen source lines:

```text
4: title: "The noncrossing interval of a dihedral group: a five-reflection claw for I2(5) and its complement"
```

#### coxeter-groups / confirmed 029: `thm-cg-finite-type-positive-definite-criterion`

- Location: **Verification technique banner**; source lines 91.
- Pages: `finite-coxeter-diagrams-and-complete-classification`.
- Visible defect: Math inside the CSS uppercase technique banner is not passed through the math renderer.
- Future repair: Keep the banner wording as plain text or render math spans before applying uppercase styling.
- Image evidence: [tile 04](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/thm-cg-finite-type-positive-definite-criterion--04.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/thm-cg-finite-type-positive-definite-criterion.md).

Exact frozen source lines:

```text
91: **Proof technique:** direct; positive definiteness makes $B$ an inner product, and finiteness is read off a compact orthogonal group and an isolated identity.
```

#### coxeter-groups / confirmed 030: `ex-cg-reflection-subgroups-parabolic-and-not`

- Location: **Verification / Proof technique**; source lines 101.
- Pages: `parabolic-subgroups-and-double-coset-geometry-examples`.
- Visible defect: The CSS-uppercase technique banner renders the LaTeX delimiters and formula literally as `IN $S_4$` instead of typesetting S₄.
- Future repair: Render technique text as math-aware content before uppercase styling, or phrase this technique without inline math.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-reflection-subgroups-parabolic-and-not--02.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-reflection-subgroups-parabolic-and-not.md).

Exact frozen source lines:

```text
101: **Proof technique:** direct finite computations in $S_4$ and reduced-word arithmetic in the infinite dihedral group.
```

#### coxeter-groups / confirmed 031: `ex-hh-minimal-representatives-for-s2-in-s3`

- Location: **Verification / Proof technique**; source lines 59.
- Pages: `coxeter-presentations-exchange-and-reduced-word-theorems-examples`.
- Visible defect: The CSS-uppercase technique banner exposes raw LaTeX delimiters and source (`$W$`, `$J=\{s_1\}$`) rather than typesetting the notation.
- Future repair: Render technique text as math-aware content before uppercase styling, or phrase this technique without inline math.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-hh-minimal-representatives-for-s2-in-s3--02.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-hh-minimal-representatives-for-s2-in-s3.md).

Exact frozen source lines:

```text
59: **Proof technique:** direct enumeration of the six elements of $W$, with the coset, minimality and additivity statements of the parabolic theorem applied to $J=\{s_1\}$.
```

#### coxeter-groups / confirmed 032: `thm-cg-double-coset-unique-minimum-and-normal-form`

- Location: **Proof / Proof technique**; source lines 107.
- Pages: `parabolic-subgroups-and-double-coset-geometry`.
- Visible defect: The CSS-uppercase technique banner exposes raw LaTeX delimiters and identifiers (`$W_I$`, `$W_J$`, `$W_K$`) instead of typesetting the math.
- Future repair: Render technique text as math-aware content before uppercase styling, or phrase this technique without inline math.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/thm-cg-double-coset-unique-minimum-and-normal-form--02.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/thm-cg-double-coset-unique-minimum-and-normal-form.md).

Exact frozen source lines:

```text
107: **Proof technique:** direct; existence by factoring inside $W_I$ and $W_J$, uniqueness by the intercoset intersection $W_K$, then the cardinality and necessity clauses.
```

### Optional typography

#### coxeter-groups / typography 001: `ex-cg-a3-sortable-subset-and-a-three-element-fiber`

- Location: **Item body**; source lines 4.
- Pages: `sortable-projections-and-finite-cambrian-lattices-examples`.
- Visible defect: Title uses unformatted ASCII for A3 and the generator product. It displays literally in the title; this is optional typography, not a content defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber--01.png), [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber--02.png), [tile 03](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber--03.png), [tile 04](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber--04.png), [tile 05](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber--05.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-a3-sortable-subset-and-a-three-element-fiber.md).

Exact frozen source lines:

```text
4: title: The c-sortable subset of A3 for c = s1s2s3, a three-element fiber, and the upper endpoint map
```

#### coxeter-groups / typography 002: `ex-cg-classical-poincare-products-by-insertion`

- Location: **Item body**; source lines 4.
- Pages: `coxeter-descents-poincare-polynomials-and-growth-examples`.
- Visible defect: Title uses literal ASCII Sn, Bn, Dn and omits accents in Poincare. Optional typography only.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-classical-poincare-products-by-insertion--01.png), [tile 02](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-classical-poincare-products-by-insertion--02.png), [tile 03](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-classical-poincare-products-by-insertion--03.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-classical-poincare-products-by-insertion.md).

Exact frozen source lines:

```text
4: title: "Poincare products for Sn, Bn and Dn by explicit insertion"
```

#### coxeter-groups / typography 003: `def-cg-brady-watt-ordered-spherical-root-complex`

- Location: **Item body**; source lines 4, 47.
- Pages: `bipartite-coxeter-elements-and-ordered-root-complexes`.
- Visible defect: These item-title link labels appear as raw ASCII formula text in the intentionally block-rendered wikilinks. They are source item titles rather than leaked raw wikilink syntax; optional title typography only.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/def-cg-brady-watt-ordered-spherical-root-complex--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/def-cg-brady-watt-ordered-spherical-root-complex.md).

Exact frozen source lines:

```text
4: title: "The Brady-Watt ordered root complex X(c), its subcomplexes X(sigma) and X(sigma,rho), and their positive-cone realizations"
47: $$c[F]:=\Bigl\{\sum_{v\in F}\lambda_vv:\lambda_v\ge0\Bigr\},\qquad c[\emptyset]:=\{0\}.$$
```

#### coxeter-groups / typography 004: `ex-cg-euler-and-skew-form-in-a3`

- Location: **Proof**; source lines 146.
- Pages: `coxeter-euler-forms-and-sortable-chamber-cones-examples`.
- Visible defect: Uppercase CSS technique banner shows raw math delimiters and omega command.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-euler-and-skew-form-in-a3--03.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-euler-and-skew-form-in-a3.md).

Exact frozen source lines:

```text
146: **Proof technique:** compute the Coxeter form entries, apply the triangular Euler-form definition to each word, and evaluate $\omega$ on the two root lists using bilinearity.
```

#### coxeter-groups / typography 005: `ex-cg-quadratic-hecke-normalizations-s-equals-q-t`

- Location: **title**; source lines 4.
- Pages: `coxeter-artin-and-hecke-interfaces-examples`.
- Visible defect: The title shows q^2 as a literal caret expression because the title does not delimit it as math; the complete ItemBody formulas use rendered mathematics. This is optional title typography, not a body-rendering defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/coxeter-groups/screenshots/ex-cg-quadratic-hecke-normalizations-s-equals-q-t--01.png); [frozen source](math-library-rendering-audit-2026-10-23/coxeter-groups/snapshots/ex-cg-quadratic-hecke-normalizations-s-equals-q-t.md).

Exact frozen source lines:

```text
4: title: "Quadratic Hecke normalizations: S=qT with Q=q^2, the opposite-sign form, and the Soergel-calculus and Kazhdan-Lusztig conversions"
```

