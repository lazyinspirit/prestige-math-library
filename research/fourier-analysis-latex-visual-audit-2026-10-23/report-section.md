## Fourier Analysis

Completed visual review of **442 items across 44 pages**, with **1019 image tiles**. Findings: 66 confirmed, 21 typography. Evidence: [manifest](fourier-analysis-latex-visual-audit-2026-10-23/manifest.json), [coverage](fourier-analysis-latex-visual-audit-2026-10-23/combined-coverage.json), [receipt](fourier-analysis-latex-visual-audit-2026-10-23/category-review-receipt.json).

### Confirmed rendering defects

#### fourier-analysis / confirmed 001: `cor-sobolev-duality-from-the-fourier-pairing`

- Location: **frontmatter title**; source lines 4.
- Pages: `fourier-multipliers-and-sobolev-characterisations`.
- Visible defect: The SSR title prints the exponent braces and caret literally as “H^{s}” and “H^{-s}”; body formulas render normally.
- Future repair: Use inline math delimiters in the title (for example, “Conjugate duality of $H^s$ and $H^{-s}$”) or a plain typographic rendering that does not expose TeX braces.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cor-sobolev-duality-from-the-fourier-pairing--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/cor-sobolev-duality-from-the-fourier-pairing.md).

Exact frozen source lines:

```text
4: title: "Conjugate duality of H^s and H^{-s}"
```

#### fourier-analysis / confirmed 002: `lem-carleson-single-tree-estimate`

- Location: **Statement**; source lines 27.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: The statement visibly exposes ASCII comparison operators and unformatted variables/subscripts instead of a typeset estimate.
- Future repair: Put the complete estimate in math delimiters and use \le, subscripts and named operators, e.g. a properly typeset density/size bound.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-single-tree-estimate--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-carleson-single-tree-estimate.md).

Exact frozen source lines:

```text
27: Assume AC. For a finite tree T the absolute bilinear tile contribution is <=C density(T) size(T)|I_T|, for |g|<=1_E.
```

#### fourier-analysis / confirmed 003: `lem-carleson-single-tree-estimate`

- Location: **Proof**; source lines 53, 55, 59, 61, 63, 65, 67, 69, 71.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: Several inline mathematical tokens in the proof are outside math delimiters, so Greek variables, inequalities, lengths, and powers are printed as ASCII prose throughout the proof tiles.
- Future repair: Restore inline math delimiters around the raw variables and relations, using symbols such as $\delta$, $\sigma$, $j\le r$, $\ell$, and $d=\operatorname{dist}(J,J_0)$; check each listed proof line in the renderer.
- Image evidence: [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-single-tree-estimate--02.png), [tile 03](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-single-tree-estimate--03.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-carleson-single-tree-estimate.md).

Exact frozen source lines:

```text
53: 1.1 The proof establishes the stronger sum of absolute tile contributions. Choose complex numbers $\varepsilon_s$ of modulus one so that $\varepsilon_sa_s\langle\mathbf1_{\omega_{s,+}}(N)\phi_s,g\rangle$ is nonnegative real, taking $\varepsilon_s=1$ for a zero product. Finite sesquilinearity bounds that sum by $\int_E|\sum_s\varepsilon_sa_s\mathbf1_{\omega_{s,+}}(N(x))\phi_s(x)|dx$. Write $b_s=\varepsilon_sa_s$. Empty T and sigma=0 give zero. If delta=0, exponent20 packet decay bounds the integral of $|\phi_s|$ on $E\cap N^{-1}(\omega_{s,+})$ by $C\sqrt{|I_s|}\delta=0$ for each s, so all contributions vanish. Hence assume delta,sigma>0. Singletons give $|b_s|\le\sigma\sqrt{|I_s|}$. A possible member s=t contributes at most $C\sigma L\int_{E\cap N^{-1}(\omega_t)}\chi_{J_0}\le C\sigma\delta L$, by packet decay with exponent20. Remove this one member. Each remaining tile has its top frequency contained in exactly one half of its frequency interval. Split them into the strict plus and strict minus trees according as that half is right or left, retaining the same top t and the bounds delta,sigma. [F1, F2, F5, given]
55: 1.2 We record a kernel bound. If $K_r$ satisfies $|K_r(z)|\le C r^{-1}(1+|z|/r)^{-20}$ and h is Schwartz, then for every interval J of length j<=r and every x,y in J, $|(K_r*h)(x)|\le C Mh(y)$. Indeed $|x-y|\le r$ makes the displayed weight at x comparable to that at y. On $|z-y|<r$ its integral against |h| is bounded by twice the centered average times a constant. On the annulus $2^nr\le|z-y|<2^{n+1}r$, it is at most $C2^{-19n}Mh(y)$, using the centered interval of radius $2^{n+1}r$. The geometric sum proves the bound uniformly in x,y,r. [F4]
59: 2.2 For the strict plus subtree put $H=\sum_{s\in U}b_s\phi_s$, a Schwartz function. Then $\|H\|_2\le C\sigma\sqrt L$. Here are the needed orthogonality details. Lower frequency halves at unequal scales are disjoint: if nested, the full smaller frequency interval lies in the larger lower half, whereas the common top lies in its upper half. Plancherel kills those Gram entries. At equal frequency and spatial scale l, packet decay gives $|\langle\phi_s,\phi_{s'}\rangle|\le C(1+|c(I_s)-c(I_{s'})|/l)^{-20}$: extract the center-distance factor from the product of exponent40 decay bounds by the triangle inequality, and integrate the remaining normalized exponent20 weight, whose integral is2/19. The row and column sums over the length-l spatial lattice are bounded by $C\sum_{n\in\mathbb Z}(1+|n|)^{-20}$. Using $2|b_sb_{s'}|\le|b_s|^2+|b_{s'}|^2$ proves $\|H\|_2^2\le C\sum_s|b_s|^2\le C\sigma^2L$, the last bound being the defining plus-tree size inequality. [F1, F2, F3, F5, step 1.1]
61: 3.1 On each J split the signed tile sum into small tiles $|I_s|\le4j$ and large tiles $|I_s|\ge8j$. These are all the possibilities because lengths are dyadic. The integral of the absolute small sum is at most $$C\sigma\delta\sum_{s\in U:\,|I_s|\le4j}|I_s|\bigl(1+\operatorname{dist}(I_s,J)/|I_s|\bigr)^{-20}.$$ To see this for each tile of length l, exponent40 packet decay and the singleton bound give $|b_s\phi_s(x)|\le C\sigma l\chi_{I_s}(x)(1+|x-c(I_s)|/l)^{-20}$. Take the supremum of the last factor on J and integrate over $E\cap N^{-1}(\omega_{s,+})$, a subset of the full-frequency set controlled by delta. At a fixed scale l, there is at most one possible frequency for each spatial interval, the unique ancestor of the top frequency of length1/l. The spatial intervals thus form a subset of the length-l dyadic lattice inside $J_0$. If l<=j, goodness and aligned dyadic endpoints put these intervals outside 3J, at distance at least j from J. Summing the displayed weights over that lattice gives at most $Cl\sum_{n\ge j/l}(1+n)^{-20}\le Cj(l/j)^{20}$ by integral comparison. For l=2j or4j, the full lattice sum is at most Cl<=Cj, with no separation needed. Summing dyadic l<=4j bounds the displayed spatial sum by Cj. [F1, F2, step 1.1, step 2.1]
63: 3.2 Let $G_J=E\cap J\cap\bigcup_{s\in U:\,|I_s|\ge8j}N^{-1}(\omega_{s,+})$, the support of the large sum on E. Then $m(G_J)\le C\delta j$. If there is no large tile the claim is immediate. Otherwise 8j<=L. For the witness s' in step 2.1, let v have spatial interval the dyadic ancestor of $I_{s'}$ of length4j and frequency the dyadic ancestor of the top frequency of length1/(4j). Then v is a tile above s', so its weighted density integral is at most delta. The center of its spatial interval is within Cj of J, because $I_{s'}\subseteq3J^p$ and its ancestor has length4j. Hence $\chi_{I_v}\ge c/j$ on J for an absolute c>0. Every large tile frequency is contained in $\omega_v$, since its length is at most1/(8j) and it also contains the top frequency. This gives $G_J\subseteq E\cap J\cap N^{-1}(\omega_v)$ and proves the measure bound. Moreover 8j<=L and the witness geometry in step 2.1 place all such J in one fixed enlargement of $J_0$. Thus their total length is at most CL and $\sum_Jm(G_J)\le C\delta L$. The use of 4j for the density witness is essential: the witness in 3 times the parent need not have length at most j. [F1, F2, step 2.1]
65: 3.3 We construct exact smooth scale projections for this plus subtree. For each dyadic r<=L, let $\Omega_r=[\alpha_r,\alpha_r+1/r)$ be the unique dyadic ancestor of the top frequency of length1/r. Set $\Theta(v)=\psi((v-1/2)/5)$. The exact plateau a=1/9 and support b=1/8 in F2 give $\Theta=1$ on [0,1] and $\Theta=0$ outside [-1/8,9/8]. Its inverse Fourier transform is $k(x)=5e^{\pi ix}\phi(5x)$, as follows by substituting $v=5u+1/2$ in the absolutely convergent inverse integral. Thus the inverse transform of $\Theta(r(\xi-\alpha_r))$ is $K_r(x)=r^{-1}e^{2\pi i\alpha_rx}k(x/r)$, bounded by $Cr^{-1}(1+|x|/r)^{-20}$. For any member with $|I_s|\ge r$, its Fourier support lies in $\Omega_r$, so this multiplier is one on its support. If $|I_s|<r$, its full frequency is a proper ancestor of $\Omega_r$ and its lower packet support is separated from its upper half by at least $1/(8|I_s|)\ge1/(4r)$. Since the top, hence $\Omega_r$, lies in that upper half, the enlargement of $\Omega_r$ by1/(8r) on each side misses that packet support. The multiplier is therefore zero there. By F6 and F7, $$K_r*H=\sum_{s\in U:\,|I_s|\ge r}b_s\phi_s$$ everywhere, not merely as an unspecified truncation estimate. [F2, F6, F7, step 2.2]
67: 4.1 The small terms sum to at most $C\sigma\delta L$ over all J. For dist(J,J_0)<L this follows from the Cj bound and the total-length bound in step 2.1. For d=dist(J,J_0)>=L, each scale l<=L has total spatial length at most L, so its contribution to the spatial sum of step 3.1 is at most $L(1+d/l)^{-20}$. Summing the dyadic scales gives $CL(L/d)^{20}$. For $2^kL\le d<2^{k+1}L$, step 2.1 gives $j\ge2^kL/6$ and j<2^{k+2}L. The disjoint J in this shell lie in an interval of length $C2^kL$, so their number is bounded by an absolute constant. Summing $CL2^{-20k}$ for k>=0 completes the estimate. Countable sums of these nonnegative integrals are justified by F8 applied to finite unions of the disjoint J. [F8, step 2.1, step 3.1]
69: 4.2 For each x, the upper frequency halves of a strict plus tree form a nested family, with all tiles at a fixed spatial scale having the same frequency. If N(x) belongs to an upper half, it belongs to all the larger upper halves in this family. Thus the activated spatial scales form an initial segment of the scales present in U. Let tau(x) be their largest spatial length, setting it to zero when none is active. Every strict member has length at most L/2, so 2tau(x)<=L whenever tau(x)>0. On J, if tau(x)>=8j, the large sum equals the scale block $8j\le|I_s|\le\tau(x)$, which by step 3.3 is $((K_{8j}-K_{2\tau(x)})*H)(x)$. If tau(x)<8j the large sum is zero. Both kernel scales are at least j. Step 1.2 therefore bounds the magnitude of the large sum, for x in E intersect J, by $C\mathbf1_{G_J}(x)\inf_{y\in J}MH(y)$. Denote that infimum by q_J; it is an ordinary fixed nonnegative number, not a measurability assertion about uncountably selected points. By F4 and step 3.2, $$\sum_Jm(G_J)q_J^2\le C\delta\sum_Jj q_J^2\le C\delta\int_{\mathbb R}(MH)^2\le C\delta\|H\|_2^2.$$ The middle inequality holds because $MH(y)\ge q_J$ on each disjoint J. Countable sums are again obtained from F8; alternatively the inequalities first hold for any finite subfamily. [F2, F4, F8, step 1.2, step 3.2, step 3.3]
71: 5.1 For the strict minus subtree, upper frequency halves at unequal scales are disjoint. If two were nested, the full smaller interval would lie in the larger upper half, but the top frequency is required to lie in its lower half. At a fixed x, the selector N(x) therefore activates at most one spatial scale. At that scale, $|b_s\phi_s(x)|\le C\sigma(1+|x-c(I_s)|/|I_s|)^{-20}$ and the sum over the spatial lattice is at most $C\sigma$, uniformly in x. The large sum on J consequently has magnitude at most $C\sigma\mathbf1_{G_J}$ on E. Its integrals sum to $C\sigma\delta L$ by step 3.2. Together with step 4.1 this proves the bound for the minus subtree. [F2, step 1.1, step 4.1, step 3.2]
```

#### fourier-analysis / confirmed 004: `thm-a-infinity-power-decay-characterisation`

- Location: **frontmatter title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The SSR title exposes the underscore as “A_infinity” rather than rendering the standard $A_\infty$ notation.
- Future repair: Write the title with inline math, for example “The $A_\infty$ power-decay characterisation”.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-a-infinity-power-decay-characterisation--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-a-infinity-power-decay-characterisation.md).

Exact frozen source lines:

```text
4: title: The A_infinity power-decay characterisation
```

#### fourier-analysis / confirmed 005: `thm-fourier-partial-sums-converge-in-periodic-lp`

- Location: **frontmatter title / Facts & Assumptions reference labels**; source lines 4, 60, 62.
- Pages: `hilbert-and-riesz-transforms`.
- Visible defect: The title and reference labels expose baseline “Lp” and literal “<=” notation; the theorem formulas themselves render correctly.
- Future repair: Use math formatting in the title and explicit wiki-link labels, such as $L^p$ and $1\le p<\infty$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-fourier-partial-sums-converge-in-periodic-lp--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-fourier-partial-sums-converge-in-periodic-lp.md).

Exact frozen source lines:

```text
4: title: "Periodic Fourier partial sums converge in the strict Lp range"
60: [F4] For $g\in L^p(\mathbb T;\mathbb C)$ and $1\le p<\infty$ the Cesaro means satisfy $\sigma_Mg=g*F_M$, are trigonometric polynomials, and $\|\sigma_Mg-g\|_p\to0$; hence trigonometric polynomials are dense in $L^p(\mathbb T;\mathbb C)$. For a trigonometric polynomial $P$ one has $S_NP=P$ whenever $N\ge\deg P$. [[thm-fejer-convergence-in-lp]] [[def-cesaro-and-abel-means-of-a-fourier-series]]
62: [F5] For every $1<p<\infty$ one has $C_p:=\sup_{N\ge0}\|S_N\|_{L^p\to L^p}<\infty$. [[lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp]]
```

#### fourier-analysis / confirmed 006: `lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds`

- Location: **Facts & Assumptions**; source lines 57.
- Pages: `hilbert-and-riesz-transforms`.
- Visible defect: The linked theorem title is rendered as the literal reference label “Polar coordinates decompose Lebesgue measure into r^{n-1} dr d sigma”, exposing TeX-style exponent punctuation and ASCII sigma.
- Future repair: Supply an explicit math-formatted wiki-link label, or update the referenced item title to render $r^{n-1}\,dr\,d\sigma$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds.md).

Exact frozen source lines:

```text
57: [F6] Polar coordinates: for $n\ge1$ and every Borel $h:\mathbb R^n\to[0,\infty]$, $\int_{\mathbb R^n}h\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}h(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$, and $\sigma$ is a finite Borel measure on $S^{n-1}$. [[thm-polar-coordinates-formula-for-lebesgue-measure]]
```

#### fourier-analysis / confirmed 007: `ex-riesz-transform-as-a-standard-calderon-zygmund-operator`

- Location: **Facts & Assumptions**; source lines 57.
- Pages: `calderon-zygmund-decomposition-and-singular-integrals-examples`.
- Visible defect: The linked theorem title is rendered as the literal reference label “Polar coordinates decompose Lebesgue measure into r^{n-1} dr d sigma”, exposing TeX-style exponent punctuation and ASCII sigma.
- Future repair: Supply an explicit math-formatted wiki-link label, or update the referenced item title to render $r^{n-1}\,dr\,d\sigma$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/ex-riesz-transform-as-a-standard-calderon-zygmund-operator--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/ex-riesz-transform-as-a-standard-calderon-zygmund-operator.md).

Exact frozen source lines:

```text
57: [F4] A Calderón–Zygmund kernel is a measurable $k$ on $\mathbb R^n\setminus\{0\}$, locally integrable there, with finite annular constant and finite Hörmander constant; a pointwise bound $|k|\le c|\cdot|^{-n}$ implies the annular condition with $A_1=c|S^{n-1}|\log2$; a Calderón–Zygmund operator is an $L^2$-bounded linear operator satisfying the off-support kernel representation for compactly supported $L^2$ inputs ([[def-calderon-zygmund-kernel-and-principal-value-operator]], [[def-standard-holder-calderon-zygmund-kernel]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]). Polar coordinates give $\int_{|x|\ge a}|x|^{-n-1}dx=|S^{n-1}|/a$ for $a>0$.
```

#### fourier-analysis / confirmed 008: `def-muckenhoupt-a-infinity-class`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The item heading displays the literal underscore in A_infinity instead of a typeset infinity subscript.
- Future repair: Typeset the notation in the title, for example with $A_\infty$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/def-muckenhoupt-a-infinity-class--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/def-muckenhoupt-a-infinity-class.md).

Exact frozen source lines:

```text
4: title: The Muckenhoupt A_infinity class
```

#### fourier-analysis / confirmed 009: `def-weight-and-weighted-lp-space`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The item heading displays the caret literally in L^p(w), although the body renders this notation as mathematics.
- Future repair: Mark the title notation as math, for example $L^p(w)$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/def-weight-and-weighted-lp-space--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/def-weight-and-weighted-lp-space.md).

Exact frozen source lines:

```text
4: title: Weights, their associated measures, and the spaces L^p(w)
```

#### fourier-analysis / confirmed 010: `lem-a-infinity-weights-satisfy-power-decay`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The item heading displays the literal underscore in A_infinity.
- Future repair: Typeset the notation in the title, for example with $A_\infty$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-a-infinity-weights-satisfy-power-decay--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-a-infinity-weights-satisfy-power-decay.md).

Exact frozen source lines:

```text
4: title: A_infinity weights satisfy power decay
```

#### fourier-analysis / confirmed 011: `lem-carleson-size-selection`

- Location: **Statement**; source lines 27.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: The whole mathematical statement is shown as raw ASCII: sigma>0, <=, sigma^(-2), and ||f||_2^2; no math typesetting is applied. Tile 2 also visibly contains unmarked formula tokens in the proof; those are itemized as a separate Proof finding.
- Future repair: Rewrite the statement with proper math delimiters and notation, such as $\sigma>0$, $\le$, and $\|f\|_2^2$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-size-selection--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-carleson-size-selection.md).

Exact frozen source lines:

```text
27: Assume AC. For a finite family of size sigma>0, choose trees with total top length <=C sigma^(-2)||f||_2^2, leaving size <=sigma/2.
```

#### fourier-analysis / confirmed 012: `lem-carleson-size-selection`

- Location: **Proof**; source lines 57.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: The proof line visibly leaks raw ASCII formula notation in prose: l<=|J|, m=|J|/l, k=0, m-1, j>=0, and C|J|. These fragments are not typeset as mathematics.
- Future repair: Wrap the inline formulas in math delimiters and use standard symbols such as $\ell\le |J|$, $m=|J|/\ell$, $k=0,\ldots,m-1$, and $j\ge0$.
- Image evidence: [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-size-selection--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-carleson-size-selection.md).

Exact frozen source lines:

```text
57: 5.1 Singleton trees in F1 give $|a_s|\le\sigma\sqrt{|I_s|}$. Combining this with step 1.2 bounds an oriented unequal-frequency Gram term by $C\sigma^2|I_s||I_{s'}|\chi_{I_s}(c(I_{s'}))$. Thus step 4.1 bounds all such terms by $$C\sigma^2\sum_U\sum_{s\in U}|I_s|\int_{\mathbb R\setminus I_U}\chi_{I_s}(x)\,dx.$$ For a fixed top interval J and a fixed scale l<=|J|, at most one frequency interval can occur above a given spatial interval of that scale: it must be the unique dyadic ancestor of the top frequency of length 1/l. Thus the spatial intervals at that scale form a subset of the dyadic subintervals of J. Write $m=|J|/l$ and index the full list from k=0 to m-1. Direct integration on the two exterior half-lines bounds $$l\int_{\mathbb R\setminus J}\chi_{I_k}(x)\,dx\le Cl\bigl((1+k)^{-19}+(1+m-1-k)^{-19}\bigr).$$ Indeed the exact two denominators are $1+k+1/2$ and $1+m-k-1/2$, with factor $l/19$. The sum over k is at most Cl by integral comparison with $x^{-19}$. Summing over the dyadic scales $l=|J|2^{-j}$, j>=0, gives at most C|J| by the geometric sum. The oriented contribution is consequently at most $C\sigma^2L$; its conjugate orientation satisfies the same bound. [F1, F2, step 1.2, step 4.1]
```

#### fourier-analysis / confirmed 013: `thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points`

- Location: **Title**; source lines 4.
- Pages: `fejer-and-poisson-summability-of-fourier-series`.
- Visible defect: The heading displays the literal caret in L^p instead of a rendered superscript.
- Future repair: Typeset the title notation as $L^p$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points.md).

Exact frozen source lines:

```text
4: title: "Abel means converge in L^p, uniformly, and at Lebesgue points"
```

#### fourier-analysis / confirmed 014: `thm-fejer-convergence-in-lp`

- Location: **Title**; source lines 4.
- Pages: `fejer-and-poisson-summability-of-fourier-series`.
- Visible defect: The heading displays raw L^p and <= / infinity notation.
- Future repair: Typeset the title formula, for example $L^p$ for $1\le p<\infty$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-fejer-convergence-in-lp--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-fejer-convergence-in-lp.md).

Exact frozen source lines:

```text
4: title: "Fejer means converge in L^p for 1 <= p < infinity"
```

#### fourier-analysis / confirmed 015: `thm-carleson-hunt-maximal-inequality-on-the-torus`

- Location: **Statement**; source lines 27.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: The displayed claim appears as raw ASCII, including 1<p<infinity, sup_{N>=0}, Lp(T), and <=, making the theorem statement difficult to read.
- Future repair: Put the statement in math mode and use standard notation such as $1<p<\infty$ and $\|\sup_{N\ge0}|S_Nf|\|_{L^p(\mathbb T)}\le C_p\|f\|_{L^p(\mathbb T)}$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-carleson-hunt-maximal-inequality-on-the-torus--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-carleson-hunt-maximal-inequality-on-the-torus.md).

Exact frozen source lines:

```text
27: Assume AC. For every 1<p<infinity, ||sup_{N>=0}|S_N f|||_{Lp(T)}<=C_p||f||_{Lp(T)} for all complex f in Lp(T), with normalized measure.
```

#### fourier-analysis / confirmed 016: `thm-carleson-hunt-maximal-inequality-on-the-torus`

- Location: **Facts & Assumptions**; source lines 31, 33, 37.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: Several mathematical conditions and space/type labels in the Facts section are rendered as run-together plain text, including every1<q<infinity, at1<r<p<s<infinity, strong(p,p), and Lp(T).
- Future repair: Wrap the formulas and type labels in math delimiters and add spacing around prose/math boundaries.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-carleson-hunt-maximal-inequality-on-the-torus--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-carleson-hunt-maximal-inequality-on-the-torus.md).

Exact frozen source lines:

```text
31: [F1] The finite models are uniformly restricted weak type (q,q) for every1<q<infinity [[lem-hunt-exceptional-set-and-distribution-estimates]].
33: [F2] Restricted weak bounds at1<r<p<s<infinity give uniform strong(p,p) finite-model bounds [[lem-carleson-restricted-weak-interpolation]].
37: [F4] Real-line bounds on Schwartz inputs imply the symmetric partial-sum maximal bound on normalized Lp(T), including all complex inputs and the infinite supremum [[lem-carleson-real-line-to-torus-transfer]].
```

#### fourier-analysis / confirmed 017: `thm-carleson-hunt-maximal-inequality-on-the-torus`

- Location: **Proof**; source lines 45, 47, 51.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: Proof prose contains raw formulas and missing text/math spacing, including exponent1<p<infinity, so1<r<p<s<infinity, strong(p,p), and Lp.
- Future repair: Typeset the inline formulas and separate them from surrounding prose with spaces.
- Image evidence: [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-carleson-hunt-maximal-inequality-on-the-torus--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-carleson-hunt-maximal-inequality-on-the-torus.md).

Exact frozen source lines:

```text
45: **Given:** An arbitrary exponent1<p<infinity and a complex class f in $L^p(\mathbb T)$ with the normalized measure and coefficients of F5.
47: 1.1 Choose $r=(p+1)/2$ and s=2p, so1<r<p<s<infinity. Apply F1 at r and s, then F2. The resulting finite-model strong(p,p) constant B_p depends only on p and the fixed packet, not on the finite family or measurable selector. [F1, F2, given]
51: 3.1 Apply F4 at the chosen p. It gives a finite constant $C_p$, depending only on p and the real-line bound $D_p$, such that $\|\sup_{N\ge0}|S_Nf|\|_{L^p(\mathbb T)}\le C_p\|f\|_{L^p(\mathbb T)}$ with precisely the coefficients and normalized measure in F5. The countable supremum is measurable, and the estimate holds for the actual partial sums of every complex Lp representative class; changing the representative does not change any coefficient. The case f=0 and the cutoff N=0 are included by F4. The argument uses no p=1 or p=infinity assertion. AC is inherited exactly through F6 and its suppliers. [F4, F5, F6, step 2.1] ∎
```

#### fourier-analysis / confirmed 018: `thm-radix-two-fft-correctness`

- Location: **Proof technique banner**; source lines 66.
- Pages: `finite-fourier-analysis-and-the-fast-fourier-transform`.
- Visible defect: The banner prints the literal `$M$` rather than typesetting the variable. Root's renderer check traced this to ItemBody ProofBlock inserting `technique[1]` as plain React text; uppercase CSS accounts for M. The source uses `induction on $m$`, so this is renderer delimiter leakage, not a source mismatch.
- Future repair: Render the technique banner's inline math instead of inserting it as plain text; the uppercase display styling can remain.
- Image evidence: [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-radix-two-fft-correctness--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-radix-two-fft-correctness.md).

Exact frozen source lines:

```text
66: **Proof technique:** induction on $m$.
```

#### fourier-analysis / confirmed 019: `def-muckenhoupt-a-p-and-a-one-weights`

- Location: **title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The title renders the underscores in A_p and A_1 literally, unlike the formatted math in the Definition body.
- Future repair: Format the class names as math, for example $A_p$ and $A_1$, in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/def-muckenhoupt-a-p-and-a-one-weights--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/def-muckenhoupt-a-p-and-a-one-weights.md).

Exact frozen source lines:

```text
4: title: Muckenhoupt A_p and A_1 weights
```

#### fourier-analysis / confirmed 020: `lem-a-one-cube-average-and-maximal-function-forms-agree`

- Location: **title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The title displays A_1 with a literal underscore; the Statement body renders the same notation as math.
- Future repair: Format A_1 as math in the title, for example $A_1$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-a-one-cube-average-and-maximal-function-forms-agree--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-a-one-cube-average-and-maximal-function-forms-agree.md).

Exact frozen source lines:

```text
4: title: The two defining forms of A_1 agree
```

#### fourier-analysis / confirmed 021: `lem-lca-scalar-unitization-character-space-and-spectrum`

- Location: **title**; source lines 4.
- Pages: `bochner-inversion-and-plancherel-on-lca-groups`.
- Visible defect: The title renders L^1 with a literal caret and digit instead of a superscript; the Statement renders the notation correctly.
- Future repair: Format L^1 as math in the title, for example $L^1$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-lca-scalar-unitization-character-space-and-spectrum--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-lca-scalar-unitization-character-space-and-spectrum.md).

Exact frozen source lines:

```text
4: title: "Scalar unitisation of L^1 of an LCA group: characters, spectrum and identity criterion"
```

#### fourier-analysis / confirmed 022: `lem-weighted-maximal-weak-bound-for-a-one`

- Location: **title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The title displays A_1 with a literal underscore; the Statement renders the class notation as math.
- Future repair: Format A_1 as math in the title, for example $A_1$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-weighted-maximal-weak-bound-for-a-one--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-weighted-maximal-weak-bound-for-a-one.md).

Exact frozen source lines:

```text
4: title: Weighted weak (1,1) bound for the maximal function under A_1
```

#### fourier-analysis / confirmed 023: `thm-gibbs-overshoot-at-a-piecewise-c-one-jump`

- Location: **title**; source lines 4.
- Pages: `fejer-and-poisson-summability-of-fourier-series`.
- Visible defect: The title displays C^1 with a literal caret; the Statement renders C^1 as math.
- Future repair: Format C^1 as math in the title, for example $C^1$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-gibbs-overshoot-at-a-piecewise-c-one-jump--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-gibbs-overshoot-at-a-piecewise-c-one-jump.md).

Exact frozen source lines:

```text
4: title: "Gibbs overshoot at a piecewise C^1 jump"
```

#### fourier-analysis / confirmed 024: `cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions`

- Location: **Title**; source lines 4.
- Pages: `bochner-inversion-and-plancherel-on-lca-groups-examples`.
- Visible defect: The item heading visibly prints the literal L^1 instead of a typeset exponent.
- Future repair: Change the title notation to $L^1$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions.md).

Exact frozen source lines:

```text
4: title: LCA Fourier inversion is not an everywhere statement for arbitrary L^1 functions
```

#### fourier-analysis / confirmed 025: `lem-a-p-distribution-decay-from-maximal-cubes`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The item heading visibly prints A_p with a literal underscore and p, rather than a subscript.
- Future repair: Change the title notation to $A_p$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-a-p-distribution-decay-from-maximal-cubes--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-a-p-distribution-decay-from-maximal-cubes.md).

Exact frozen source lines:

```text
4: title: Distribution decay from maximal cubes for A_p weights
```

#### fourier-analysis / confirmed 026: `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual`

- Location: **Title**; source lines 4.
- Pages: `pontryagin-duality-for-locally-compact-abelian-groups`.
- Visible defect: The item heading visibly prints the literal L^2 instead of a typeset exponent.
- Future repair: Change the title notation to $L^2$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-lca-transform-range-is-dense-in-ltwo-of-the-dual--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-lca-transform-range-is-dense-in-ltwo-of-the-dual.md).

Exact frozen source lines:

```text
4: title: The Plancherel transform range is dense in L^2 of the dual
```

#### fourier-analysis / confirmed 027: `lem-fourier-pairing-for-a-finite-measure-and-schwartz-data`

- Location: **Proof**; source lines 77.
- Pages: `fourier-restriction-and-the-stein-tomas-theorem`.
- Visible defect: The Proof technique banner prints the dollar signs and backslashes literally in the mathematical spans.
- Future repair: Remove inline math delimiters from the plain-text technique metadata or render that field through the math-aware Markdown path.
- Image evidence: [tile 03](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-fourier-pairing-for-a-finite-measure-and-schwartz-data--03.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-fourier-pairing-for-a-finite-measure-and-schwartz-data.md).

Exact frozen source lines:

```text
77: **Proof technique:** direct; the pairing identity is Fubini applied to the product $\mathbb R^n\times\mathbb R^n$ against $\lambda_n\times\mu$, the conjugation identity is the published transform law, and the convolution identity substitutes the translation law into the defining integral.
```

#### fourier-analysis / confirmed 028: `thm-reverse-holder-self-improvement-for-a-p-weights`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The item heading visibly prints A_p with a literal underscore and p, rather than a subscript.
- Future repair: Change the title notation to $A_p$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-reverse-holder-self-improvement-for-a-p-weights--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-reverse-holder-self-improvement-for-a-p-weights.md).

Exact frozen source lines:

```text
4: title: Reverse Holder self-improvement for A_p weights
```

#### fourier-analysis / confirmed 029: `cor-hilbert-transform-is-bounded-on-lp`

- Location: **Title**; source lines 6.
- Pages: `calderon-zygmund-decomposition-and-singular-integrals`.
- Visible defect: The title displays “Lp” as ordinary baseline text, with no superscript p.
- Future repair: Write the title notation as $L^p$ so the exponent renders as mathematics.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cor-hilbert-transform-is-bounded-on-lp--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/cor-hilbert-transform-is-bounded-on-lp.md).

Exact frozen source lines:

```text
6: title: "The Hilbert transform is bounded on Lp"
```

#### fourier-analysis / confirmed 030: `cor-piecewise-c-one-fourier-series-converges-to-midpoint-values`

- Location: **Title**; source lines 4.
- Pages: `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`.
- Visible defect: The title displays the caret sequence “C^1” literally instead of a superscript 1.
- Future repair: Write the title notation as $C^1$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cor-piecewise-c-one-fourier-series-converges-to-midpoint-values--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/cor-piecewise-c-one-fourier-series-converges-to-midpoint-values.md).

Exact frozen source lines:

```text
4: title: "Piecewise C^1 Fourier series converges to midpoint values"
```

#### fourier-analysis / confirmed 031: `ex-john-nirenberg-tail-integration`

- Location: **Title**; source lines 4.
- Pages: `bmo-john-nirenberg-and-h1-duality-examples`.
- Visible defect: The title displays “Lq” as ordinary baseline text, with no superscript q.
- Future repair: Write the title notation as $L^q$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/ex-john-nirenberg-tail-integration--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/ex-john-nirenberg-tail-integration.md).

Exact frozen source lines:

```text
4: title: "Integrating the John-Nirenberg tail recovers the Lq oscillation bound"
```

#### fourier-analysis / confirmed 032: `lem-a-p-dual-weight-and-nesting-properties`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The title displays “A_p” literally, including the underscore, instead of a subscript p.
- Future repair: Write the title notation as $A_p$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-a-p-dual-weight-and-nesting-properties--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-a-p-dual-weight-and-nesting-properties.md).

Exact frozen source lines:

```text
4: title: Duality and nesting of the A_p classes
```

#### fourier-analysis / confirmed 033: `lem-bessel-potentials-shift-sobolev-order-isometrically`

- Location: **Proof technique**; source lines 126.
- Pages: `fourier-multipliers-and-sobolev-characterisations`.
- Visible defect: The proof-technique line displays the inline-math delimiters and LaTeX commands literally (for example, `$H^\SIGMA\CONG\MATHCAL W_\SIGMA$`) instead of rendering the expression.
- Future repair: Use the renderer’s math-enabled field for this note or rewrite the identification in plain prose.
- Image evidence: [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-bessel-potentials-shift-sobolev-order-isometrically--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-bessel-potentials-shift-sobolev-order-isometrically.md).

Exact frozen source lines:

```text
126: **Proof technique:** transport the two Fourier multipliers through the canonical identifications $H^\sigma\cong\mathcal W_\sigma$ and compare the resulting frequency weights.
```

#### fourier-analysis / confirmed 034: `lem-stationary-phase-decay-for-spherical-surface-measure`

- Location: **Proof technique**; source lines 66.
- Pages: `fourier-restriction-and-the-stein-tomas-theorem`.
- Visible defect: The proof-technique line displays the dollar delimiters around $(n-1)/2$ literally instead of formatting the exponent as math.
- Future repair: Use a math-enabled renderer for the proof-technique line or write the exponent in plain prose.
- Image evidence: [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-stationary-phase-decay-for-spherical-surface-measure--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-stationary-phase-decay-for-spherical-surface-measure.md).

Exact frozen source lines:

```text
66: **Proof technique:** direct; rotate to the preferred axis, split the sphere with the finite graph partition, and apply the non-stationary and stationary alternatives of the stationary-phase lemma to each chart, with the polar caps contributing the exponent $(n-1)/2$.
```

#### fourier-analysis / confirmed 035: `lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds`

- Location: **Title**; source lines 4.
- Pages: `littlewood-paley-theory-and-square-functions`.
- Visible defect: The title displays “Lp” as ordinary baseline text, with no superscript p.
- Future repair: Write the title notation as $L^p$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds.md).

Exact frozen source lines:

```text
4: title: "Random signed dyadic sums have uniform Mihlin and Lp multiplier bounds"
```

#### fourier-analysis / confirmed 036: `thm-bmo-defines-a-bounded-functional-on-hone`

- Location: **Title**; source lines 4.
- Pages: `bmo-john-nirenberg-and-h1-duality`.
- Visible defect: The title displays “H1” as ordinary baseline text, with no superscript 1.
- Future repair: Write the title notation as $H^1$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-bmo-defines-a-bounded-functional-on-hone--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-bmo-defines-a-bounded-functional-on-hone.md).

Exact frozen source lines:

```text
4: title: "BMO classes define bounded functionals on H1"
```

#### fourier-analysis / confirmed 037: `cex-power-weight-fails-at-both-a-p-endpoints`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates-examples`.
- Visible defect: The rendered title displays the underscore literally as “A_p” rather than a subscripted p.
- Future repair: Use a rendered display form such as Aₚ in the title, or spell out the notation in words.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cex-power-weight-fails-at-both-a-p-endpoints--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cex-power-weight-fails-at-both-a-p-endpoints--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/cex-power-weight-fails-at-both-a-p-endpoints.md).

Exact frozen source lines:

```text
4: title: A power weight fails at both A_p endpoints
```

#### fourier-analysis / confirmed 038: `cor-a-p-classes-are-open-in-the-exponent`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The rendered title displays “A_p” with a literal underscore.
- Future repair: Use a rendered display form such as Aₚ in the title, or spell out the notation in words.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cor-a-p-classes-are-open-in-the-exponent--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cor-a-p-classes-are-open-in-the-exponent--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/cor-a-p-classes-are-open-in-the-exponent.md).

Exact frozen source lines:

```text
4: title: The A_p classes are open in the exponent
```

#### fourier-analysis / confirmed 039: `def-dyadic-cube-in-rn-all-generations`

- Location: **Title**; source lines 4.
- Pages: `calderon-zygmund-decomposition-and-singular-integrals`.
- Visible defect: The title and linked definition label display “R^n” with a literal caret instead of a superscript n.
- Future repair: Change the display title to ℝⁿ or another renderer-safe notation; the linked label will then inherit the corrected display title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/def-dyadic-cube-in-rn-all-generations--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/def-dyadic-cube-in-rn-all-generations--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/def-dyadic-cube-in-rn-all-generations.md).

Exact frozen source lines:

```text
4: title: "Dyadic cubes of all generations in R^n"
```

#### fourier-analysis / confirmed 040: `lem-a-p-weighted-average-comparison-and-density-to-mass`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The rendered title displays “A_p” with the underscore literally.
- Future repair: Use Aₚ or spell out the notation in the display title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-a-p-weighted-average-comparison-and-density-to-mass--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-a-p-weighted-average-comparison-and-density-to-mass--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-a-p-weighted-average-comparison-and-density-to-mass.md).

Exact frozen source lines:

```text
4: title: Weighted average comparison and the density-to-mass estimate for A_p weights
```

#### fourier-analysis / confirmed 041: `lem-maximal-dyadic-cubes-at-height-lambda`

- Location: **Statement; Facts & Assumptions**; source lines 47, 58.
- Pages: `calderon-zygmund-decomposition-and-singular-integrals`.
- Visible defect: Both rendered references inherit the supplier title and visibly show “R^n” with a literal caret.
- Future repair: Correct the linked supplier’s display title to ℝⁿ or a worded form; the reference labels will then render cleanly.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-maximal-dyadic-cubes-at-height-lambda--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-maximal-dyadic-cubes-at-height-lambda--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-maximal-dyadic-cubes-at-height-lambda.md).

Exact frozen source lines:

```text
47: all-generations cubes of [[def-dyadic-cube-in-rn-all-generations]]. The dyadic
58: **Given:** $f\in L^1(\mathbb R^n)$ and $\lambda>0$; a dyadic cube $Q$ of generation $k$ with centre-related index $m$; the all-generations dyadic grid of [[def-dyadic-cube-in-rn-all-generations]]; two dyadic cubes $Q,Q'$ of generations $k'\ge k$.
```

#### fourier-analysis / confirmed 042: `lem-position-derivative-commutator-estimate`

- Location: **Proof technique**; source lines 92.
- Pages: `uncertainty-principles-for-fourier-analysis`.
- Visible defect: The technique caption shows the dollar delimiters and raw “L^2” string instead of typeset mathematics.
- Future repair: Write L² as Unicode in this caption or change the renderer to typeset math in the technique label.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-position-derivative-commutator-estimate--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-position-derivative-commutator-estimate--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-position-derivative-commutator-estimate.md).

Exact frozen source lines:

```text
92: **Proof technique:** cutoff integration by parts, followed by vanishing $L^2$ tails.
```

#### fourier-analysis / confirmed 043: `lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase`

- Location: **Proof technique**; source lines 83.
- Pages: `fourier-restriction-and-the-stein-tomas-theorem`.
- Visible defect: The technique caption displays raw dollar delimiters and TeX commands instead of typeset λ⁻¹, |x|⁻², and d/2.
- Future repair: Use Unicode mathematical notation in the caption or enable math rendering for the technique label.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase--02.png), [tile 03](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase--03.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase.md).

Exact frozen source lines:

```text
83: **Proof technique:** direct; localize with cutoffs, gain $\lambda^{-1}$ per integration by parts against the phase gradient, and balance the gain against the $|x|^{-2}$ loss and the annulus volume to obtain the exponent $d/2$.
```

#### fourier-analysis / confirmed 044: `lem-unit-sphere-is-lebesgue-null`

- Location: **Proof technique**; source lines 68.
- Pages: `fourier-restriction-and-the-stein-tomas-theorem`.
- Visible defect: The technique caption displays the dollar delimiters around “r=1” literally.
- Future repair: Use r = 1 in words or change the renderer to typeset math in the technique label.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-unit-sphere-is-lebesgue-null--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-unit-sphere-is-lebesgue-null--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-unit-sphere-is-lebesgue-null.md).

Exact frozen source lines:

```text
68: **Proof technique:** direct; evaluate the polar-coordinate formula at the indicator of the sphere and observe that the inner integral is supported on the single null radius $r=1$.
```

#### fourier-analysis / confirmed 045: `thm-hardy-littlewood-maximal-operator-characterises-a-p`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The rendered title displays “A_p” with a literal underscore.
- Future repair: Use Aₚ or spell out the notation in the display title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-hardy-littlewood-maximal-operator-characterises-a-p--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-hardy-littlewood-maximal-operator-characterises-a-p--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-hardy-littlewood-maximal-operator-characterises-a-p.md).

Exact frozen source lines:

```text
4: title: The Hardy-Littlewood maximal operator characterises A_p
```

#### fourier-analysis / confirmed 046: `def-dyadic-cube-in-rn-all-generations`

- Location: **Definition**; source lines 55.
- Pages: `calderon-zygmund-decomposition-and-singular-integrals`.
- Visible defect: The linked definition label displays “R^n” with a literal caret instead of a superscript n.
- Future repair: Correct the linked item’s display title to ℝⁿ or another renderer-safe notation; its reference label will then render cleanly.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/def-dyadic-cube-in-rn-all-generations--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/def-dyadic-cube-in-rn-all-generations--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/def-dyadic-cube-in-rn-all-generations.md).

Exact frozen source lines:

```text
55: measure-theoretic convention [[def-dyadic-cube-in-rn]], whose generation index is
```

#### fourier-analysis / confirmed 047: `cor-bmo-lp-oscillation-norms-are-equivalent`

- Location: **title**; source lines 4.
- Pages: `bmo-john-nirenberg-and-h1-duality`.
- Visible defect: The item heading displays “Lq” in baseline text, so the exponent is not typeset and the space is visually ambiguous.
- Future repair: Format the space as $L^q$ in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cor-bmo-lp-oscillation-norms-are-equivalent--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/cor-bmo-lp-oscillation-norms-are-equivalent.md).

Exact frozen source lines:

```text
4: title: "BMO oscillation norms in Lq are equivalent"
```

#### fourier-analysis / confirmed 048: `ex-a-one-power-weight-range`

- Location: **title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates-examples`.
- Visible defect: The item heading visibly includes the literal underscore in “A_1” instead of a subscript.
- Future repair: Format the class as $A_1$ in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/ex-a-one-power-weight-range--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/ex-a-one-power-weight-range.md).

Exact frozen source lines:

```text
4: title: The A_1 range of a power weight
```

#### fourier-analysis / confirmed 049: `ex-power-weight-a-p-range`

- Location: **title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates-examples`.
- Visible defect: The item heading visibly includes the literal underscore in “A_p” instead of a subscript.
- Future repair: Format the class as $A_p$ in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/ex-power-weight-a-p-range--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/ex-power-weight-a-p-range.md).

Exact frozen source lines:

```text
4: title: The A_p range of a power weight
```

#### fourier-analysis / confirmed 050: `lem-a-p-weights-are-doubling`

- Location: **title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The item heading displays the literal underscore in “A_p” rather than a subscript.
- Future repair: Format the class as $A_p$ in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-a-p-weights-are-doubling--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-a-p-weights-are-doubling.md).

Exact frozen source lines:

```text
4: title: A_p weights are doubling
```

#### fourier-analysis / confirmed 051: `lem-finite-atomic-sums-are-dense-in-hone`

- Location: **title**; source lines 4.
- Pages: `bmo-john-nirenberg-and-h1-duality`.
- Visible defect: The item heading displays “H1” in baseline text rather than the Hardy-space exponent.
- Future repair: Format the space as $H^1$ in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-finite-atomic-sums-are-dense-in-hone--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-finite-atomic-sums-are-dense-in-hone.md).

Exact frozen source lines:

```text
4: title: "Finite atomic sums are dense in H1"
```

#### fourier-analysis / confirmed 052: `lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp`

- Location: **title**; source lines 4.
- Pages: `hilbert-and-riesz-transforms`.
- Visible defect: The item heading displays “Lp” in baseline text rather than the exponent notation.
- Future repair: Format the space as $L^p$ in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp.md).

Exact frozen source lines:

```text
4: title: "Uniform Lp bounds for periodic Fourier partial sums"
```

#### fourier-analysis / confirmed 053: `thm-hardy-littlewood-sobolev-fractional-integration`

- Location: **Proof technique**; source lines 84.
- Pages: `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality`.
- Visible defect: The proof-technique banner visibly exposes dollar delimiters and TeX fragments (for example, “$$q$”/“$L^q$”) as literal uppercase text instead of typesetting them.
- Future repair: Rewrite the banner without inline math delimiters, or render its math through the same math-aware path as item sections.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-hardy-littlewood-sobolev-fractional-integration--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-hardy-littlewood-sobolev-fractional-integration.md).

Exact frozen source lines:

```text
84: **Proof technique:** direct; the exponent algebra fixes $q$; Tonelli makes the integral measurable; the maximal bound makes $Mf$ finite almost everywhere and Hedberg converts that into almost-everywhere absolute convergence and an $L^q$ estimate; classes, linearity and the dense smooth core are then handled separately.
```

#### fourier-analysis / confirmed 054: `lem-carleson-real-line-to-torus-transfer`

- Location: **Statement; Facts & Assumptions; Proof**; source lines 27, 33, 39, 55, 57, 59.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: Mathematical notation appears as ordinary raw ASCII words/operators in the rendered item (Lp, inequalities, phi/psi, a_k, epsilon, and >=), with no math styling. Repeated across Statement, facts, and proof, making the formulas read as plain text.
- Future repair: Wrap the mathematical spans in inline math delimiters and use the intended Greek letters/subscripts and comparison symbols; retain prose outside the delimiters.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-real-line-to-torus-transfer--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-real-line-to-torus-transfer--02.png), [tile 03](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-real-line-to-torus-transfer--03.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-carleson-real-line-to-torus-transfer.md).

Exact frozen source lines:

```text
27: Assume AC. Uniform real-line Carleson Lp bounds for 1<p<infinity imply the symmetric Fourier partial-sum maximal Lp bound on T with normalized Haar measure.
33: [F2] The fixed nonzero Schwartz packet phi has transform psi supported in [-1/8,1/8] [[def-carleson-tiles-wave-packets-and-tile-order]].
39: [F5] Under countable choice, Fejer means converge in complex Lp(T) for1<=p<infinity [[thm-fejer-convergence-in-lp]].
55: **Given:** Fix 1<p<infinity and suppose $\|C_{\mathbb R}u\|_{L^p(\mathbb R)}\le D_p\|u\|_{L^p(\mathbb R)}$ for every Schwartz u. This weaker Schwartz-input hypothesis suffices for the asserted transfer.
57: 1.1 Let $P(x)=\sum_{|k|\le m}a_ke^{2\pi ikx}$ be a trigonometric polynomial. Its Fourier coefficients are a_k: the integral of $e^{2\pi i(k-j)t}$ on [0,1] is one for k=j and zero otherwise, by direct integration for the nonzero integer k-j. For 0<epsilon<1 put $u_\varepsilon(x)=\phi(\varepsilon x)P(x)$, a Schwartz function: the derivatives of P are bounded and the scaled phi and all its derivatives decay to every order, so the Leibniz formula proves every Schwartz seminorm finite. Direct substitution in the absolutely convergent Fourier integral gives $$\widehat{u_\varepsilon}(\xi)=\sum_{|k|\le m}a_k\varepsilon^{-1}\psi((\xi-k)/\varepsilon).$$ The kth summand is supported in $[k-\varepsilon/8,k+\varepsilon/8]$. Thus for every integer N>=0 the interval $[-N-1/2,N+1/2]$ contains exactly the entire summands with |k|<=N and misses the other ones. F4 then gives the exact identity $$T_{N+1/2}u_\varepsilon(x)-T_{-N-1/2}u_\varepsilon(x)=\phi(\varepsilon x)S_NP(x).$$ The half-integer cutoffs avoid every endpoint frequency; no half-weight term occurs. [F1, F2, F3, F4, given]
59: 1.2 We prove the precise periodic averaging limit used below. Let w be continuous, nonnegative and bounded by $C(1+|x|)^{-2}$, and let G be continuous and one-periodic. Then $$\varepsilon\int_{\mathbb R}w(\varepsilon x)G(x)dx\longrightarrow\Bigl(\int_{\mathbb R}w\Bigr)\int_0^1G(t)dt.$$ Decomposing the line into n+[0,1) and substituting gives the left side as $\int_0^1G(t)R_\varepsilon(t)dt$, where $R_\varepsilon(t)=\varepsilon\sum_{n\in\mathbb Z}w(\varepsilon(n+t))$. This rearrangement is absolute: $|G|$ is bounded, $\int w<\infty$, and F8 followed by F9 applies. These Riemann sums converge uniformly for t in [0,1] to $\int w$. To verify uniformity, partition the line into cells $[\varepsilon(n+t),\varepsilon(n+t+1))$. For cells meeting [-R,R], the difference between the left-endpoint sum and the integral is at most $(2R+2)\omega_R(\varepsilon)$, where $\omega_R$ is the modulus of continuity of w on [-R-1,R+1], and 0<epsilon<=1. For the remaining cells the sum and integral of the decay majorant are at most C/(1+R), uniformly in t and epsilon, by comparison of the monotone tails of $(1+|x|)^{-2}$ with their integrals. First choose R large and then epsilon small. The resulting uniform convergence allows integration against bounded G and proves the displayed limit. [F8, F9]
```

#### fourier-analysis / confirmed 055: `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero`

- Location: **Proof technique display**; source lines 51.
- Pages: `uncertainty-principles-for-fourier-analysis`.
- Visible defect: The proof-technique header renders the source as “INDUCTION ON $N$”, exposing the literal dollar delimiters and uppercasing the variable instead of typesetting the math. The source text is correct; the renderer inserts it as plain text.
- Future repair: Render proof-technique strings with the intended math handling (or strip delimiters and preserve the variable case) so inline math is not shown literally.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-separately-holomorphic-vanishing-on-a-real-box-is-zero--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-separately-holomorphic-vanishing-on-a-real-box-is-zero--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-separately-holomorphic-vanishing-on-a-real-box-is-zero.md).

Exact frozen source lines:

```text
51: **Proof technique:** induction on $n$.
```

#### fourier-analysis / confirmed 056: `lem-carleson-restricted-weak-interpolation`

- Location: **Statement; Proof (Given and numbered steps)**; source lines 27, 45, 47, 49, 51, 53, 55, 57.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: The statement and proof show mathematical operators and inequalities as literal inline text (for example “1<r<p<s<infinity”, “lambda>0”, and identifiers such as “N_q”), rather than rendered math. The formulas enclosed in math delimiters render normally, so this is a source-delimiting inconsistency.
- Future repair: Wrap mathematical expressions in the affected prose in inline math delimiters, preserving surrounding words and punctuation.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-restricted-weak-interpolation--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-restricted-weak-interpolation--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-carleson-restricted-weak-interpolation.md).

Exact frozen source lines:

```text
27: Assume AC. If the uniformly linearised finite model operators are restricted weak type (r,r) and (s,s), with 1<r<p<s<infinity, they are strong type (p,p), uniformly in the selector and finite family.
45: **Given:** $1<r<p<s<\infty$ and a finite model A. Restricted weak type means that there are constants $K_r,K_s$ independent of A such that for q=r,s, every measurable E with finite measure and every lambda>0 satisfies $m\{|A\mathbf1_E|>\lambda\}\le K_q^q\lambda^{-q}m(E)$. This interpretation uses only characteristic inputs; the stronger convention allowing bounded supported inputs also suffices.
47: 1.1 For q>1 define the testing functional $N_q(h)=\sup_B m(B)^{-1+1/q}\int_B|h|$, where the supremum is over measurable B of finite positive measure. It is homogeneous and subadditive by the integral triangle inequality. If $m\{|h|>t\}\le(K/t)^q$, F1 with exponent one, applied on B, gives $\int_B|h|\le\int_0^\infty\min(m(B),(K/t)^q)dt=\frac q{q-1}K m(B)^{1-1/q}$. For K>0 split the integral at $t=K m(B)^{-1/q}$; for K=0 every positive level set is null and the bound is zero. Thus $N_q(h)\le q'K$, where $q'=q/(q-1)$. Conversely, if $N_q(h)=D<\infty$, apply the definition to $B=\{|h|>t\}\cap[-R,R]$. When its measure is positive, $t m(B)^{1/q}\le D$; when zero the same measure bound holds. Increasing R gives $m\{|h|>t\}\le(D/t)^q$. This proves both comparisons even if the original level set could have infinite measure. [F1, F2, given]
49: 2.1 If u is a nonnegative simple function with $0\le u\le a\mathbf1_E$, list its finitely many positive values in increasing order. It is the sum of their successive nonnegative differences times the indicators of the corresponding superlevel sets. Each such set lies in E and the differences sum to at most a. Linearity and step 1.1 therefore give $N_q(Au)\le q'K_q a m(E)^{1/q}$ for q=r,s. A complex simple u with $|u|\le a\mathbf1_E$ is the sum of the positive and negative real parts and i times the positive and negative imaginary parts, each bounded by $a\mathbf1_E$. Hence $N_q(Au)\le4q'K_q a m(E)^{1/q}$. The same result is zero for null E because its indicator has zero output almost everywhere by the assumed restricted bound and linearity of the finite coefficient formula. [F3, step 1.1, given]
51: 3.1 Let f be a complex simple function supported on a set of finite measure. Put $E_k=\{2^k<|f|\le2^{k+1}\}$, $m_k=m(E_k)$ and $f_k=f\mathbf1_{E_k}$. There are only finitely many nonempty E_k, they are disjoint, and $f=\sum_k f_k$ almost everywhere. For each integer n, split $f=f^{\rm high}_n+f^{\rm low}_n$ by summing over k>=n and k<n respectively. Subadditivity of the testing functional and step 2.1 give $N_r(Af^{\rm high}_n)\le C_r\sum_{k\ge n}2^k m_k^{1/r}$ and $N_s(Af^{\rm low}_n)\le C_s\sum_{k<n}2^k m_k^{1/s}$, with $C_q=8q'K_q$. Since $|Af|>2^n$ implies that one of the two pieces has magnitude greater than $2^{n-1}$, the converse comparison in step 1.1 bounds its level-set measure by $$m\{|Af|>2^n\}\le(2C_r)^r2^{-nr}\Bigl(\sum_{k\ge n}2^k m_k^{1/r}\Bigr)^r+(2C_s)^s2^{-ns}\Bigl(\sum_{k<n}2^k m_k^{1/s}\Bigr)^s.$$ [F3, step 1.1, step 2.1]
53: 4.1 Set $b_k=2^{pk}m_k$. The sum over n of $2^{np}$ times the first term in step 3.1, apart from its constant, is $$\sum_{n\in\mathbb Z}\Bigl(\sum_{j\ge0}2^{-(p-r)j/r}b_{n+j}^{1/r}\Bigr)^r.$$ For nonnegative numbers x_j and summable nonnegative weights w_j, finite Hölder gives $(\sum_j w_jx_j)^r\le(\sum_jw_j)^{r-1}\sum_jw_jx_j^r$. Here $w_j=2^{-(p-r)j/r}$ has finite sum W_r because p>r. Applying this inequality, then summing over n, bounds the display by $W_r^r\sum_k b_k$. One may first use finite sets of n,j and then increase them: every summand is nonnegative and each shifted sum of the finitely supported b is at most $\sum_k b_k$. Likewise the second term gives $$\sum_{n\in\mathbb Z}\Bigl(\sum_{j\ge1}2^{-(s-p)j/s}b_{n-j}^{1/s}\Bigr)^s\le W_s^s\sum_k b_k,$$ where $W_s=\sum_{j\ge1}2^{-(s-p)j/s}<\infty$ since s>p. These are two explicit geometric sums, not an interpolation theorem used as an undeclared supplier. [F4, step 3.1]
55: 5.1 Apply F1 to Af and split the positive t-axis into $[2^n,2^{n+1})$. Monotonicity of its level-set measure yields $\|Af\|_p^p\le(2^p-1)\sum_n2^{np}m\{|Af|>2^n\}$. The nonnegative sum is valid whether or not finiteness is known initially. Steps 3.1 and 4.1 bound it by $C\sum_k2^{pk}m_k\le C\int|f|^p$, because $|f|>2^k$ on E_k. Thus the strong bound is established for every finite-support simple f, with C depending only on r,p,s and the two restricted constants, not on the finite family or selector. [F1, step 3.1, step 4.1]
57: 6.1 For general $f\in L^p(\mathbb R)$, the same finite model formula makes sense: each packet belongs to $L^{p'}$ and $L^p$ by its Schwartz decay, so F4 makes the coefficients absolute. More explicitly an exponent M with Mp>1 and Mp'>1 gives integrable powers of the packet bound. For every integer $j\ge1$ define $Q_j(t)=\operatorname{sgn}(t)\lfloor j\min(|t|,j)\rfloor/j$, with $\operatorname{sgn}(0)=0$, and put $f_j=\mathbf1_{[-j,j]}(Q_j(\operatorname{Re}f)+iQ_j(\operatorname{Im}f))$. Each component of $f_j$ takes only the $2j^2+1$ values $k/j$ with $|k|\le j^2$, so $f_j$ is a simple measurable function supported on a finite-measure set. Componentwise rounding toward zero gives $|f_j|\le|f|$, while $f_j\to f$ almost everywhere. Hence $|f_j-f|^p\le2^p|f|^p$, and F5 gives $\|f_j-f\|_p\to0$. Hölder gives convergence of every packet coefficient; more strongly, the triangle inequality and selector bound give $$\|Af_j-Af\|_p\le\sum_{u\in S}\|\phi_u\|_p\|\phi_u\|_{p'}\|f_j-f\|_p\longrightarrow0.$$ This finite auxiliary sum may depend on S; it is used only to identify the limit, not in the uniform estimate. Pass to the limit in step 5.1 using Minkowski's norm continuity to obtain the stated uniform strong bound. Empty finite families, zero simple functions and zero endpoint constants are covered without division by them. The strict inequalities r<p<s are exactly what makes the two geometric weights summable; no endpoint weak-to-strong inference is made. AC is inherited as identified in F6. This conditional interpolation proof does not assume that the Hunt restricted estimates have already been proved. [F3, F4, F5, F6, step 5.1] ∎
```

#### fourier-analysis / confirmed 057: `lem-wave-packet-model-dominates-the-linearised-carleson-operator`

- Location: **Statement**; source lines 27, 33.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: The exponent-bearing operator names and type parameters appear as raw text (“L2”, “Lp”, “(p,p)”), while surrounding displayed inequalities and expressions render as math.
- Future repair: Set the type parameters and L-space notation in the statement as inline math, or rewrite the phrases in words.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-wave-packet-model-dominates-the-linearised-carleson-operator--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-wave-packet-model-dominates-the-linearised-carleson-operator--02.png), [tile 03](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-wave-packet-model-dominates-the-linearised-carleson-operator--03.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-wave-packet-model-dominates-the-linearised-carleson-operator.md).

Exact frozen source lines:

```text
27: Assume AC and let $1<p<\infty$. If every finite linearised tile model has strong type (p,p) bound B, uniformly in its finite family and measurable selector, then for Schwartz input
33: where psi is the exact fixed packet transform. This transfers in particular weak L2 and every strong Lp bound needed for the real-line Carleson theorem. No pointwise bound by one unaveraged model is asserted.
```

#### fourier-analysis / confirmed 058: `lem-power-decay-implies-a-p-membership`

- Location: **Title**; source lines 4.
- Pages: `muckenhoupt-weights-and-weighted-estimates`.
- Visible defect: The title renders the underscore literally as “A_p”. The body’s A_p notation is correctly rendered inside math delimiters.
- Future repair: Use a math-aware title form if supported, or phrase the title as “some Muckenhoupt A-p class” to avoid a literal underscore.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-power-decay-implies-a-p-membership--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-power-decay-implies-a-p-membership--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-power-decay-implies-a-p-membership.md).

Exact frozen source lines:

```text
4: title: Power decay implies membership in some A_p
```

#### fourier-analysis / confirmed 059: `thm-littlewood-paley-square-function-equivalence-on-lp`

- Location: **Title**; source lines 4.
- Pages: `littlewood-paley-theory-and-square-functions`.
- Visible defect: The title renders the exponent and comparison as raw text (“Lp for 1<p<infinity”), unlike the properly typeset p-range in the Statement below.
- Future repair: Use a math-aware title if supported, or use a prose title such as “Littlewood-Paley square-function equivalence for finite p above one”.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-littlewood-paley-square-function-equivalence-on-lp--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-littlewood-paley-square-function-equivalence-on-lp--02.png), [tile 03](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-littlewood-paley-square-function-equivalence-on-lp--03.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-littlewood-paley-square-function-equivalence-on-lp.md).

Exact frozen source lines:

```text
4: title: "Littlewood-Paley square-function equivalence on Lp for 1<p<infinity"
```

#### fourier-analysis / confirmed 060: `rem-gibbs-phenomenon`

- Location: **Unheaded remark body; linked reference label**; source lines 23.
- Pages: `fejer-and-poisson-summability-of-fourier-series`.
- Visible defect: The rendered link label exposes the caret in “C^1” instead of a superscript. Other surrounding inline math in the same remark is typeset.
- Future repair: Use a math-aware link label such as a KaTeX-capable C¹ label, or rewrite it as “continuously differentiable jump”.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/rem-gibbs-phenomenon--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/rem-gibbs-phenomenon--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/rem-gibbs-phenomenon.md).

Exact frozen source lines:

```text
23: [[thm-gibbs-overshoot-at-a-piecewise-c-one-jump]]. By contrast,
```

#### fourier-analysis / confirmed 061: `ex-negative-sobolev-order-containing-a-dirac-mass`

- Location: **Proof technique**; source lines 119.
- Pages: `fourier-multipliers-and-sobolev-characterisations-examples`.
- Visible defect: The app displays the literal dollar delimiters around `$p$` in the plain-text Proof technique line; it does not typeset p as math.
- Future repair: Use plain prose (“a real p-series”) in this non-math-rendered technique field, or update the renderer to typeset math there.
- Image evidence: [tile 03](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/ex-negative-sobolev-order-containing-a-dirac-mass--03.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/ex-negative-sobolev-order-containing-a-dirac-mass.md).

Exact frozen source lines:

```text
119: **Proof technique:** reduce the membership to the finiteness of a radial integral, bracket that integral between blocks of a real $p$-series, and read off the threshold and its strict endpoint.
```

#### fourier-analysis / confirmed 062: `lem-lca-lone-convolution-is-a-commutative-banach-star-algebra`

- Location: **Title**; source lines 4.
- Pages: `bochner-inversion-and-plancherel-on-lca-groups`.
- Visible defect: The title is shown as literal `L^1`, with the caret and exponent digit rather than a typeset superscript.
- Future repair: Spell out “L one” or use a title-rendering convention that typesets the exponent.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-lca-lone-convolution-is-a-commutative-banach-star-algebra--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-lca-lone-convolution-is-a-commutative-banach-star-algebra.md).

Exact frozen source lines:

```text
4: title: L^1 of an LCA group is a commutative Banach star algebra under convolution
```

#### fourier-analysis / confirmed 063: `lem-hilbert-transform-has-signum-fourier-multiplier`

- Location: **Title**; source lines 4.
- Pages: `hilbert-and-riesz-transforms`.
- Visible defect: The title displays `pv(1/(pi x))` as raw ASCII notation, not a rendered principal-value expression.
- Future repair: Use plain-language title wording, or a renderer-supported math title such as a properly delimited principal-value expression.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-hilbert-transform-has-signum-fourier-multiplier--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-hilbert-transform-has-signum-fourier-multiplier.md).

Exact frozen source lines:

```text
4: title: "The Hilbert transform is the tempered convolution with pv(1/(pi x)) and has signum Fourier multiplier"
```

#### fourier-analysis / confirmed 064: `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`

- Location: **Title**; source lines 4.
- Pages: `fourier-multipliers-and-sobolev-characterisations`.
- Visible defect: The heading shows literal braces and caret syntax in `W^{k,2}` and `H^k`; the title math is not typeset.
- Future repair: Spell the spaces out in the title or use a math-aware title format.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces.md).

Exact frozen source lines:

```text
4: title: "Integer-order W^{k,2} and H^k agree with equivalent norms"
```

#### fourier-analysis / confirmed 065: `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`

- Location: **Proof technique**; source lines 171.
- Pages: `fourier-multipliers-and-sobolev-characterisations`.
- Visible defect: The technique text is displayed as plain text, with the literal `$...$` delimiters and backslash commands (`\sum`, `\alpha`, `\le`, `\langle`, etc.) visible.
- Future repair: Move the formulas into a renderer-supported section or write the technique field without LaTeX delimiters and commands.
- Image evidence: [tile 03](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces--03.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces.md).

Exact frozen source lines:

```text
171: **Proof technique:** compare the derivative-sum weight with the bracket weight and transfer the weighted tempered-distribution characterization. Throughout, $P_k(\xi)=\sum_{|\alpha|\le k}(2\pi)^{2|\alpha|}|\xi^\alpha|^2$ and $w_k(\xi)=\langle\xi\rangle^k$.
```

#### fourier-analysis / confirmed 066: `thm-marcel-riesz-conjugate-function-theorem`

- Location: **Facts & Assumptions**; source lines 66.
- Pages: `hilbert-and-riesz-transforms`.
- Visible defect: The linked result title is displayed literally as “Fejer means converge in L^p for 1 <= p < infinity,” exposing raw caret and comparison notation in the citation label.
- Future repair: Revise the linked item title to prose (“…for finite p”) or make the title renderer math-aware.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-marcel-riesz-conjugate-function-theorem--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-marcel-riesz-conjugate-function-theorem--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-marcel-riesz-conjugate-function-theorem.md).

Exact frozen source lines:

```text
66: [F5] Cesàro means: $\sigma_Nf=f*F_N$; for $1\le p<\infty$ and $f\in L^p(T;\mathbb C)$ one has $\|\sigma_Nf-f\|_p\to0$; for continuous one-periodic $f$ one has $\sup_x|\sigma_Nf(x)-f(x)|\to0$. [[def-cesaro-and-abel-means-of-a-fourier-series]] [[thm-fejer-convergence-in-lp]] [[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]
```

### Optional typography

#### fourier-analysis / typography 001: `lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded`

- Location: **frontmatter title**; source lines 4.
- Pages: `littlewood-paley-theory-and-square-functions`.
- Visible defect: The title displays “Lp” on the baseline instead of a superscript p; statement and proof math render correctly.
- Future repair: Format the title as “uniformly $L^p$-bounded”.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded.md).

Exact frozen source lines:

```text
4: title: "Dyadic pieces are uniformly Mihlin multipliers and uniformly Lp-bounded"
```

#### fourier-analysis / typography 002: `lem-hilbert-transform-is-skew-adjoint-on-ltwo`

- Location: **frontmatter title**; source lines 4.
- Pages: `hilbert-and-riesz-transforms`.
- Visible defect: The title displays “L2” on the baseline, unlike the typeset $L^2$ notation in the statement.
- Future repair: Use inline math for $L^2$ in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-hilbert-transform-is-skew-adjoint-on-ltwo--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-hilbert-transform-is-skew-adjoint-on-ltwo.md).

Exact frozen source lines:

```text
4: title: "The Hilbert transform is skew-adjoint on L2"
```

#### fourier-analysis / typography 003: `lem-ltwo-almost-orthogonality-of-dyadic-pieces`

- Location: **frontmatter title**; source lines 4.
- Pages: `littlewood-paley-theory-and-square-functions`.
- Visible defect: The title displays “L2” on the baseline instead of a superscript 2.
- Future repair: Use inline math for $L^2$ in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-ltwo-almost-orthogonality-of-dyadic-pieces--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-ltwo-almost-orthogonality-of-dyadic-pieces.md).

Exact frozen source lines:

```text
4: title: "L2 almost orthogonality of the dyadic pieces"
```

#### fourier-analysis / typography 004: `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp`

- Location: **frontmatter title**; source lines 4.
- Pages: `calderon-zygmund-decomposition-and-singular-integrals`.
- Visible defect: The title displays “Lp” on the baseline while the theorem statement uses typeset $L^p$.
- Future repair: Use inline math for $L^p$ in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-calderon-zygmund-singular-integrals-are-bounded-on-lp--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-calderon-zygmund-singular-integrals-are-bounded-on-lp.md).

Exact frozen source lines:

```text
4: title: "Calderón–Zygmund operators are bounded on Lp"
```

#### fourier-analysis / typography 005: `rem-hilbert-and-riesz-transform-endpoint-map`

- Location: **Statement**; source lines 35, 38.
- Pages: `hilbert-and-riesz-transforms`.
- Visible defect: The rendered reference titles say “L2 isometry” and “L2 contractions” with the exponent on the baseline.
- Future repair: Use explicit math-formatted reference labels with $L^2$, or format the referenced item titles.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/rem-hilbert-and-riesz-transform-endpoint-map--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/rem-hilbert-and-riesz-transform-endpoint-map.md).

Exact frozen source lines:

```text
35: [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]]
38: [[cor-riesz-transforms-are-ltwo-bounded]] gives the Euclidean $L^2$ contractions
```

#### fourier-analysis / typography 006: `thm-maximal-truncations-are-weak-one-one-and-strong-lp`

- Location: **Title**; source lines 4.
- Pages: `calderon-zygmund-decomposition-and-singular-integrals`.
- Visible defect: The heading uses plain “Lp” in a mathematical title, where the body uses typeset $L^p$ notation.
- Future repair: Optional typography: typeset this as $L^p$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-maximal-truncations-are-weak-one-one-and-strong-lp--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-maximal-truncations-are-weak-one-one-and-strong-lp.md).

Exact frozen source lines:

```text
4: id: thm-maximal-truncations-are-weak-one-one-and-strong-lp
```

#### fourier-analysis / typography 007: `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds`

- Location: **title**; source lines 4.
- Pages: `fourier-restriction-and-the-stein-tomas-theorem`.
- Visible defect: The title displays L2 on the baseline, while the body uses L^2 notation.
- Future repair: Format L^2 as math in the title, for example $L^2$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds.md).

Exact frozen source lines:

```text
4: title: 'Graph-patch extension family: dispersive and L2 slice bounds'
```

#### fourier-analysis / typography 008: `thm-carleson-maximal-operator-is-strong-ltwo`

- Location: **title**; source lines 4.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: The title spells out the exponent as “ltwo,” so the space notation is not presented as math.
- Future repair: Use a formatted space name in the title, such as strong $L^2$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-carleson-maximal-operator-is-strong-ltwo--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-carleson-maximal-operator-is-strong-ltwo.md).

Exact frozen source lines:

```text
4: title: "Carleson maximal operator is strong ltwo"
```

#### fourier-analysis / typography 009: `thm-carleson-maximal-operator-is-strong-ltwo`

- Location: **Statement**; source lines 27.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: The Statement renders L2(R) as plain baseline text; the same body uses formatted math elsewhere only sparingly.
- Future repair: Format the function space as $L^2(\mathbb R)$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-carleson-maximal-operator-is-strong-ltwo--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-carleson-maximal-operator-is-strong-ltwo.md).

Exact frozen source lines:

```text
27: Assume AC. The one-sided real-line Carleson maximal operator extends boundedly to complex L2(R).
```

#### fourier-analysis / typography 010: `thm-real-hone-bmo-duality`

- Location: **title**; source lines 4.
- Pages: `bmo-john-nirenberg-and-h1-duality`.
- Visible defect: The title displays H1 on the baseline while the Statement uses formatted H^1.
- Future repair: Format H^1 in the title, for example $H^1$–BMO.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-real-hone-bmo-duality--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-real-hone-bmo-duality.md).

Exact frozen source lines:

```text
4: title: "Real H1-BMO duality"
```

#### fourier-analysis / typography 011: `cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity`

- Location: **Title**; source lines 4.
- Pages: `hilbert-and-riesz-transforms`.
- Visible defect: The heading uses plain L2 where the surrounding statement uses typeset L^2.
- Future repair: For consistent mathematical typography, set the title as The Hilbert transform is an $L^2$ isometry and squares to minus the identity.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity.md).

Exact frozen source lines:

```text
4: title: "The Hilbert transform is an L2 isometry and squares to minus the identity"
```

#### fourier-analysis / typography 012: `lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality`

- Location: **Title**; source lines 4.
- Pages: `calderon-zygmund-decomposition-and-singular-integrals`.
- Visible defect: The heading uses plain Lp for the function-space notation.
- Future repair: Set the title notation as $L^p$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality.md).

Exact frozen source lines:

```text
4: title: "The Lp range: interpolation below two and adjoint duality above two"
```

#### fourier-analysis / typography 013: `lem-hone-functional-has-compatible-local-ltwo-representatives`

- Location: **Title**; source lines 4.
- Pages: `bmo-john-nirenberg-and-h1-duality`.
- Visible defect: The heading uses plain H1 and L2 for the function-space notation.
- Future repair: Set the title notation as $H^1$ and $L^2$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-hone-functional-has-compatible-local-ltwo-representatives--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-hone-functional-has-compatible-local-ltwo-representatives.md).

Exact frozen source lines:

```text
4: title: "Bounded H1 functionals have compatible local L2 representatives"
```

#### fourier-analysis / typography 014: `lem-ltwo-fourier-multiplier-bound`

- Location: **Title**; source lines 4.
- Pages: `fourier-multipliers-and-sobolev-characterisations`.
- Visible defect: The heading uses plain L2 for the function-space notation.
- Future repair: Set the title notation as $L^2$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-ltwo-fourier-multiplier-bound--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-ltwo-fourier-multiplier-bound.md).

Exact frozen source lines:

```text
4: title: Exact L2 Fourier multiplier norm
```

#### fourier-analysis / typography 015: `thm-lacunary-lp-norm-equivalence`

- Location: **Title**; source lines 4.
- Pages: `lacunary-fourier-series-and-sidon-sets`.
- Visible defect: The heading prints L-p with a hyphen rather than the usual function-space notation.
- Future repair: Set the title notation as $L^p$.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/thm-lacunary-lp-norm-equivalence--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/thm-lacunary-lp-norm-equivalence.md).

Exact frozen source lines:

```text
4: title: "L-p norm equivalence for finite Hadamard-lacunary sums"
```

#### fourier-analysis / typography 016: `cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone`

- Location: **Statement refuted**; source lines 31.
- Pages: `real-hardy-spaces-maximal-functions-and-atoms-examples`.
- Visible defect: The linked display title breaks the sentence into three visual lines: the opening parenthesis remains after “Choice,” the link title occupies its own line, and the closing “).” drops to a third line. The mathematical text itself renders correctly.
- Future repair: Move the linked reference to a following references paragraph or use a shorter inline label so the sentence does not break around a parenthetical title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone.md).

Exact frozen source lines:

```text
31: Assume Countable Choice ([[def-countable-choice]]). The claim refuted is that the size and compact support of an $L^1$ function
```

#### fourier-analysis / typography 017: `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding`

- Location: **Statement refuted**; source lines 41.
- Pages: `finite-fourier-analysis-and-the-fast-fourier-transform-examples`.
- Visible defect: The full linked item title is inserted into the middle of the statement and wraps to a separate line between “of” and “has”; formula glyphs around it render correctly.
- Future repair: Move the definition link to a following references paragraph or use a short in-sentence label.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding.md).

Exact frozen source lines:

```text
41: **False claim:** for every $N\ge1$ and all $f,g\in\mathbb C^{\mathbb Z/N}$ with coefficient lists $u_i:=f([i]_N)$ and $v_j:=g([j]_N)$, the cyclic convolution $f*g$ of [[def-cyclic-convolution-on-z-mod-n]] has the **linear convolution values** $(f*g)([k])=\sum_{i+j=k}u_iv_j$ for every $k=0,\dots,N-1$; that is, no coefficient of the product ever wraps around.
```

#### fourier-analysis / typography 018: `def-periodic-ltwo-weak-derivative`

- Location: **Title**; source lines 4.
- Pages: `absolute-convergence-and-the-wiener-algebra`.
- Visible defect: The rendered title displays “L2” on the baseline instead of the conventional superscript notation L².
- Future repair: Use L² in the display title or spell out the space in words.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/def-periodic-ltwo-weak-derivative--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/def-periodic-ltwo-weak-derivative--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/def-periodic-ltwo-weak-derivative.md).

Exact frozen source lines:

```text
4: title: "Periodic L2 weak derivative on the circle"
```

#### fourier-analysis / typography 019: `lem-linfinity-bmo-functions-dualise-hone-boundedly`

- Location: **Title**; source lines 4.
- Pages: `bmo-john-nirenberg-and-h1-duality`.
- Visible defect: The rendered title displays “H1” on the baseline instead of H¹.
- Future repair: Use H¹ in the display title or spell out the space in words.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-linfinity-bmo-functions-dualise-hone-boundedly--01.png), [tile 02](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-linfinity-bmo-functions-dualise-hone-boundedly--02.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-linfinity-bmo-functions-dualise-hone-boundedly.md).

Exact frozen source lines:

```text
4: title: "Bounded BMO functions dualise H1 boundedly"
```

#### fourier-analysis / typography 020: `lem-carleson-forest-summation-gives-restricted-weak-ltwo`

- Location: **title**; source lines 4.
- Pages: `carleson-hunt-time-frequency-theorem`.
- Visible defect: The heading renders the space label as the unexplained word “ltwo”; the mathematical target is not visually clear.
- Future repair: Use a readable label such as “restricted weak $L^2$”.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-carleson-forest-summation-gives-restricted-weak-ltwo--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-carleson-forest-summation-gives-restricted-weak-ltwo.md).

Exact frozen source lines:

```text
4: title: "Carleson forest summation gives restricted weak ltwo"
```

#### fourier-analysis / typography 021: `lem-singular-kernel-sine-integral-under-countable-choice`

- Location: **Title**; source lines 4.
- Pages: `hilbert-and-riesz-transforms`.
- Visible defect: The title uses readable ASCII `pi/2` rather than a rendered or Unicode pi fraction; this is a display-style issue, not malformed body math.
- Future repair: Use “π/2” or “one half of pi” in the title.
- Image evidence: [tile 01](fourier-analysis-latex-visual-audit-2026-10-23/screenshots/lem-singular-kernel-sine-integral-under-countable-choice--01.png); [frozen source](fourier-analysis-latex-visual-audit-2026-10-23/snapshots/lem-singular-kernel-sine-integral-under-countable-choice.md).

Exact frozen source lines:

```text
4: title: "The sine integral under Countable Choice: uniform bounds and the value pi/2"
```

