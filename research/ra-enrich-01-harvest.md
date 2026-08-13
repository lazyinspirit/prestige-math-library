# Real-analysis source harvest (`ra-enrich-01`)

Date: 2026-08-13  
Run: phase 1a, plan only

## Harvest protocol

I obtained full-text access to four reputable textbooks (Hunter, Trench, Lebl,
and Lee), then read the exact ranges below rather than relying on search
snippets. I also read two sets of MIT lecture notes, an OpenStax textbook
section, and Saito's UC Davis Fourier notes. Every section or named-result
heading in the stated ranges has a disposition:

- **included** — planned as a phase-1 item, with its proposed id;
- **inline** — planned inside a named phase-1 item rather than as a separate
  item;
- **already-published** — the exact published library item is named;
- **deferred** — assigned to a named phase-2 pair or another track, with the
  reason;
- **out-of-scope** — not analysis content for this commission, with the reason.

Phase-2 material is marked “deferred” because this dispatch may propose but may
not build a new pair.

## 1. John K. Hunter, `An Introduction to Real Analysis`

- Full text: [official UC Davis PDF](https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf)
- Bibliographic status: university-hosted graduate/advanced-undergraduate
  textbook.
- Full text obtained: yes, 307 pages.
- Range read: Chapter 10, §§10.7.1–10.7.2, pp. 200–203, from “Taylor's theorem
  and power series” through Example 10.33.

| Source heading or named result | Disposition |
|---|---|
| §10.7 “Smooth versus analytic functions” | **inline** in `def-taylor-and-maclaurin-series`: smoothness alone neither asserts convergence of the Taylor series nor equality with the function. |
| §10.7.1 “Taylor's theorem and power series” | **included** across `def-taylor-and-maclaurin-series` and `thm-taylor-series-representation-by-remainder`. |
| Definition 10.27 (\(C^k\), \(C^\infty\)) | **already-published:** `def-higher-derivatives-and-smoothness`. |
| Taylor polynomial and Taylor theorem with remainder (discussion immediately following Definition 10.27) | **already-published:** `def-taylor-polynomial-and-remainder`, `thm-taylor-schlomilch-roche-remainder`, `cor-taylor-lagrange-and-cauchy-remainders`, and `cor-taylor-remainder-bound`. |
| Definition 10.28 (analytic function) | **already-published:** `def-real-analytic-function`. |
| §10.7.2 “Smooth nonanalytic functions” | **included** in `cex-smooth-function-not-equal-to-its-maclaurin-series`. |
| Proposition 10.29 (the one-sided flat function \(e^{-1/x}\)) | **already-published:** `ex-flat-exponential-function`. |
| Corollary 10.30 (a smooth function need not be analytic) | **already-published:** the conclusion is already in `ex-flat-exponential-function`; the canonical symmetric version is separately **included** as `cex-smooth-function-not-equal-to-its-maclaurin-series` because the owner named it and it makes failure away from both sides of \(0\) explicit. |
| Example 10.31 (\(e^{-1/x^2}\) off \(0\), \(0\) at \(0\)) | **included:** `cex-smooth-function-not-equal-to-its-maclaurin-series`. |
| Definition 10.32 (compact support) | **already-published:** `def-support-and-compactly-supported-riemann-integral-in-rn`. |
| Example 10.33 (smooth compactly supported bump) | **already-published:** `ex-smooth-compactly-supported-bump`. |

## 2. William F. Trench, `Introduction to Real Analysis`

- Full text: [Wikimedia-hosted complete PDF](https://upload.wikimedia.org/wikipedia/commons/0/07/Introduction_to_Real_Analysis.pdf);
  [author/publisher record at Trinity University](https://digitalcommons.trinity.edu/mono/7/).
- Bibliographic status: originally published by Pearson Education; later
  released open access and approved by the AIM Open Textbook Initiative.
- Full text obtained: yes, 587 pages.
- Ranges read:
  - §4.5 “Power Series,” pp. 265–267, from the paragraph introducing the
    Taylor/Maclaurin series through the complete generalized-binomial identity
    \((1+x)^q=\sum_{n\ge0}\binom qn x^n\) on \((-1,1)\);
  - Exercise 4.3.14, p. 230 (Euler's constant sequence).

| Source heading or named result | Disposition |
|---|---|
| §4.5 “Power Series” (selected Taylor-series range) | **included** across `def-taylor-and-maclaurin-series` and `thm-taylor-series-representation-by-remainder`; the earlier general power-series results in this section are **already-published** on `power-series-and-real-analytic-functions`. |
| “Taylor series of \(f\) about \(x_0\)” (displayed definition) | **included:** `def-taylor-and-maclaurin-series`. |
| “Maclaurin series” (the \(x_0=0\) name) | **included:** `def-taylor-and-maclaurin-series`. |
| Equality \(f(x)=T_n(x)+R_n(x)\), and \(f\) equals its Taylor series iff \(R_n(x)\to0\) | **included:** `thm-taylor-series-representation-by-remainder`. |
| The flat \(e^{-1/x^2}\) example | **included:** `cex-smooth-function-not-equal-to-its-maclaurin-series`. |
| The uniform Taylor-convergence theorem immediately following the remainder criterion | **included:** `thm-taylor-series-representation-by-remainder`; the uniform conclusion is part of the planned statement, not an unreviewed aside. |
| The sine and cosine Maclaurin examples in this range | **included:** `thm-standard-maclaurin-expansions`, using the already-published defining series `def-sine-and-cosine-by-power-series`. |
| The exponential Maclaurin example in this range | **included:** `thm-standard-maclaurin-expansions`, using `def-real-exponential-function-and-e`. |
| The generalized-binomial example and complete \((-1,1)\) identity in this range | **included:** `thm-standard-maclaurin-expansions` for real exponent and \(\lvert x\rvert<1\); endpoint classification is **deferred** because it varies with the exponent and is not needed for the naming gap. |
| Exercise 4.3.14 (show \(\gamma_n=1+1/2+\cdots+1/n-\log n\) converges and \(0<\gamma<1\)) | **included:** `thm-euler-mascheroni-constant-and-harmonic-asymptotic`. |

## 3. Jiří Lebl, `Basic Analysis I & II`

- Full text: [author-hosted HTML and PDF editions](https://www.jirka.org/ra/).
- Bibliographic status: author-hosted, peer-used open textbooks with stable
  numbered statements.
- Full text obtained: yes, both volumes.
- Ranges read:
  - Volume II, §11.4.3 “The unit circle and polar coordinates,” complete
    subsection (exercises excluded);
  - Volume I/II web edition, §6.3 “Picard's theorem,” §§6.3.1–6.3.3, through
    Remark 6.3.7 (exercises excluded);
  - Volume II, §11.8 “Fourier series,” §§11.8.1–11.8.6 through Theorem 11.8.13
    (end exercises excluded).

### §11.4.3 The unit circle and polar coordinates

| Source heading or named result | Disposition |
|---|---|
| §11.4.3 “The unit circle and polar coordinates” | **included** across `def-radian-angle-by-unit-circle-arc-length` and `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`. |
| The unit-circle arc-length computation \(\int_0^{2\pi}\lvert i e^{it}\rvert\,dt=2\pi\) and the statement that \(e^{it}\) parametrizes by arc length | **included:** `def-radian-angle-by-unit-circle-arc-length`, translated to the library's real-coordinate path and existing speed-integral theorem. |
| The conclusion that the analytic sine/cosine definitions agree with their standard geometric definitions | **included:** `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`, with the right-triangle ratios made explicit. |
| Polar representation and the displayed product/integer-power formulas | **already-published:** `thm-polar-form-with-unique-principal-argument` and `cor-complex-de-moivre-formula`. |

### §6.3 Picard's theorem

| Source heading or named result | Disposition |
|---|---|
| §6.3 “Picard's theorem” | **deferred — phase-2 `Picard–Lindelöf and First-Order ODEs` pair:** existence, uniqueness, integral-equation formulation, and examples form a dependency chain too large for one existing-page item. |
| §6.3.1 “First order ordinary differential equation” | **deferred** to that pair's A page: it supplies the IVP and solution definitions and the equivalent integral equation. |
| §6.3.2 “The theorem” | **deferred** to that pair's A page. |
| Definition 6.3.1 (sequential continuity for maps on \(\mathbb R^2\)) | **already-published:** the metric/sequential continuity machinery is on `rn-as-a-normed-space` and `the-total-derivative`; the pair should use the library's existing convention, not re-mint this definition. |
| Theorem 6.3.2 (local existence and uniqueness under continuity and a Lipschitz condition in the dependent variable) | **deferred** to the phase-2 ODE A page. |
| §6.3.3 “Examples” | **deferred** to the phase-2 ODE B page. |
| Example 6.3.3 (\(y'=y\), Picard iterates and exponential) | **already-published:** `thm-picard-iterates-for-exponential`; it may be cross-referenced by the future pair. |
| Example 6.3.4 (\(y'=y^2\), finite-time blow-up) | **deferred** to the phase-2 ODE B page as the obstruction to global existence. |
| Example 6.3.5 (square-root right-hand side, nonuniqueness without Lipschitz) | **deferred** to the phase-2 ODE B page. |
| Example 6.3.6 (Dirichlet-type discontinuous right-hand side, no differentiable solution) | **deferred** to the phase-2 ODE B page as the continuity-hypothesis boundary. |
| Remark 6.3.7 (weak/integral solutions) | **deferred to the measure track:** the Carathéodory/absolutely-continuous solution theory needs Lebesgue integration and a.e. derivatives. |

### §11.8 Fourier series

| Source heading or named result | Disposition |
|---|---|
| §11.8 “Fourier series” and §11.8.1 “Trigonometric polynomials” | **deferred — phase-2 `Fourier Series and Fejér Summation` pair:** periodic-function and trigonometric-polynomial definitions begin that A page. |
| Proposition 11.8.1 (symmetry of coefficients for real-valued functions) | **deferred** to the Fourier A page, inline with coefficient definitions. |
| Proposition 11.8.2 (linear independence/uniqueness of trigonometric coefficients) | **deferred** to the Fourier A page. |
| Example 11.8.3 (square/absolute-value wave) | **deferred** to the Fourier B page. |
| §11.8.2 “Fourier series” | **deferred** to the Fourier A page. |
| Proposition 11.8.4 (coefficient decay \(O(n^{-\alpha})\), \(\alpha>1\), gives absolute/uniform convergence) | **deferred** to the Fourier A page. |
| Proposition 11.8.5 (stronger decay permits termwise differentiation) | **deferred** to the Fourier A page; it consumes the already-published uniform derivative theorem. |
| §11.8.3 “Orthonormal systems” and Definition 11.8.7 | **deferred** to the Fourier A page only in the finite/Riemann inner-product form needed for Bessel; abstract Hilbert bases remain functional-analysis work. |
| Remark 11.8.6 (finite-dimensional inner-product analogy) | **inline** with that Riemann inner-product setup; no separate item is needed. |
| Theorem 11.8.8 (Fourier partial sum is the best quadratic approximation) | **deferred** to the Fourier A page. |
| Theorem 11.8.9 (Bessel inequality) | **deferred** to the Fourier A page. |
| §11.8.4 “The Dirichlet kernel and approximate delta functions” and its displayed kernel formula | **deferred** to the Fourier A page. |
| §11.8.5 “Localization” | **deferred** to the Fourier A page. |
| Theorem 11.8.10 (pointwise convergence under a Lipschitz hypothesis) | **deferred** to the Fourier A page. |
| Corollary 11.8.11 (convergence to \(f(x)\) when \(f\) is continuous piecewise smooth near \(x\)) | **deferred** to the Fourier A page; jump-midpoint convergence comes instead from the separate Saito source below. |
| Corollary 11.8.12 (localization) | **deferred** to the Fourier A page. |
| §11.8.6 “Parseval's theorem” and Theorem 11.8.13 (Parseval/\(L^2\) convergence) | **deferred to measure/functional analysis:** although Lebl proves a Riemann-integrable version, the full \(L^2\) theory belongs with completion and Riesz–Fischer; the future real-analysis pair should retain only the finite Bessel identity/inequality it proves in Riemann scope. |

## 4. OpenStax, `Algebra and Trigonometry 2e`

- Full text:
  - [§7.2 Right Triangle Trigonometry](https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-2-right-triangle-trigonometry)
  - [§7.3 Unit Circle](https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-3-unit-circle)
- Bibliographic status: peer-reviewed open textbook published by OpenStax,
  Rice University.
- Range read: §7.2 from the section opening through the first “How To” under
  “Using Right Triangles to Evaluate Trigonometric Functions”; §7.3 from the
  section opening through “The Sine and Cosine Functions.”

| Source heading or named result | Disposition |
|---|---|
| §7.2 “Right Triangle Trigonometry” | **included:** `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`. |
| “Using Right Triangles to Evaluate Trigonometric Functions” | **included:** the exact opposite/hypotenuse and adjacent/hypotenuse conclusion of that theorem. |
| First “How To: Given the side lengths of a right triangle, evaluate the six trigonometric functions...” | **inline** in the same item's geometric interpretation; only sine and cosine are retained because the other four are already analytic quotients in `def-tangent-cotangent-secant-cosecant`. |
| §7.3 “The Unit Circle” | **included:** `def-radian-angle-by-unit-circle-arc-length`. |
| “Finding Trigonometric Functions Using the Unit Circle” | **included** across the radian definition and right-triangle bridge. |
| “The Unit Circle” (arc length on a unit circle equals radian measure) | **included:** `def-radian-angle-by-unit-circle-arc-length`. |
| “Defining Sine and Cosine Functions from the Unit Circle” | **included:** `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`, but in the library's logically opposite direction: analytic sine/cosine are already defined, and the theorem proves that their unit-circle coordinates recover the geometric convention. |
| “The Sine and Cosine Functions” | **already-published:** `def-sine-and-cosine-by-power-series`, `thm-sine-and-cosine-derivatives`, and `thm-sine-cosine-zero-sets-and-fundamental-period`; only the geometric identification is new. |

## 5. John M. Lee, `Introduction to Smooth Manifolds`, 2nd ed.

- Full text: [university-hosted complete PDF](https://math.berkeley.edu/~jchaidez/materials/reu/lee_smooth_manifolds.pdf).
- Bibliographic status: Springer Graduate Texts in Mathematics 218.
- Full text obtained: yes.
- Ranges read: Chapter 4, “The Rank Theorem,” pp. 81–84, Theorem 4.12 through
  Theorem 4.14; Chapter 5, “Level Sets,” pp. 105–108, Theorem 5.12 through
  Example 5.17.

| Source heading or named result | Disposition |
|---|---|
| Chapter 4 “The Rank Theorem” | **deferred — phase-2 `Constant-Rank Normal Forms and Regular Level Sets` pair:** rank, local coordinates, and level sets require a coherent sequence, not one add-on theorem. |
| Theorem 4.12 (Rank Theorem) | **deferred** to that pair's A page, specialized faithfully to open subsets of Euclidean spaces. |
| Corollary 4.13 (local linear form iff locally constant rank) | **deferred** to that A page. |
| Theorem 4.14 (Global Rank Theorem) | **out-of-scope for this pair:** its manifold-wide injectivity/quotient conclusions require topology of manifolds not established in the real-analysis track. |
| Chapter 5 “Level Sets” | **deferred** to the phase-2 rank A/B pair. |
| Theorem 5.12 (constant-rank level sets are embedded submanifolds) | **deferred** in a Euclidean regular-level-set form; general manifold language is out of scope. |
| Corollary 5.13 (submersion level sets) | **deferred** to the A page. |
| Definitions of regular point and regular value | **deferred** as prerequisite definitions on the A page. |
| Corollary 5.14 (Regular Level Set Theorem) | **deferred** to the A page. |
| Example 5.15 (sphere as a regular level set) | **deferred** to the B page. |
| Proposition 5.16 (local level-set characterization of embedded submanifolds) | **out-of-scope:** its converse is naturally a manifold theorem and is not needed for the Euclidean normal form. |
| Example 5.17 (surfaces of revolution) | **deferred** to the B page in Euclidean form. |

## 6. MIT OpenCourseWare 18.100C, Lecture 23 summary

- Full text: [official one-page lecture summary PDF](https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/381efa3847b9801fc7a7bfe520018bd7_MIT18_100CF12_l23sum.pdf).
- Bibliographic status: MIT OpenCourseWare lecture notes.
- Range read: complete document, p. 1.

| Source heading or named result | Disposition |
|---|---|
| “Taylor series can behave badly for general smooth functions” | **included:** `def-taylor-and-maclaurin-series` (warning) and `cex-smooth-function-not-equal-to-its-maclaurin-series`. |
| Definitions of \(\exp,\sin,\cos\) by power series | **already-published:** `def-real-exponential-function-and-e` and `def-sine-and-cosine-by-power-series`; identified as Maclaurin series in `thm-standard-maclaurin-expansions`. |
| Lemma 23.1 (positive zero defining \(\pi\)) | **already-published:** `thm-cosine-has-a-smallest-positive-zero` and `def-pi-via-first-positive-cosine-zero`. |
| Lemma 23.2 (periodicity) | **already-published:** `thm-sine-cosine-zero-sets-and-fundamental-period` and `thm-kernel-and-fibres-of-complex-exponential`. |
| Definition of logarithm | **already-published:** `def-natural-logarithm`. |
| Lemma 23.3 (logarithm derivative) | **already-published:** `thm-logarithm-derivative-and-integral`. |
| Theorem 23.4 (series for \(\log(1+x)\)) | **already-published:** `thm-log-one-plus-x-power-series`; named as a Maclaurin series in `thm-standard-maclaurin-expansions`. |

## 7. Bjorn Poonen, MIT 18.02 Fall 2021 lecture notes

- Full text: [author-hosted complete PDF](https://math.mit.edu/~poonen/02/notes.pdf).
- Bibliographic status: MIT multivariable-calculus lecture notes.
- Exact blocks read: §17.3 through Problem 17.5 (pp. 116–117); §17.4 through
  Problem 17.6 and the openings of §§17.5 and 17.7 through Example 17.8
  (pp. 117–121); §§18.4–18.8 through Example 18.10 plus §18.9 through
  Question 18.12 (pp. 125–129); §§19.1–19.3 through Problem 19.3
  (pp. 131–133); §§20.1–20.2 through Theorem 20.2 (pp. 138–141); and the
  opening of §21 (pp. 141–142). The two-dimensional Green theorem was checked
  against the library's published theorem; §21 was read only to mark the
  manifold-level boundary.

| Source heading or named result | Disposition |
|---|---|
| §17.3 “Parametrized surfaces in general” | **deferred — phase-2 `Surface Integrals, the Divergence Theorem, and Stokes’ Theorem` pair:** definition and regularity go on the A page. |
| Problem 17.5 (cone regularity) | **deferred** to the B page as a parametrization singularity example. |
| §17.4 “Surface area” | **deferred** to the A page. |
| §17.4.1 “Surface area of a hemisphere” / Problem 17.6 | **deferred** to the B page. |
| §17.5 “Surface integrals” | **deferred** to the A page. |
| §17.7 “Flux” | **deferred** to the A page. |
| §§17.7.1–17.7.2 (physical meaning and computation of flux) | **deferred**: computation to the A page; physical interpretation to the B-page notes. |
| Example 17.8 (flux through a cylinder) | **deferred** to the B page. |
| §18 “The divergence theorem” | **deferred** to the phase-2 surface A page. |
| §18.4 “Closed surfaces” and Definition 18.7 | **deferred** to the A-page orientation/boundary definitions. |
| Question 18.8 (examples/nonexamples of closed surfaces) | **deferred** selectively to the B page; it supplies boundary cases for the definition. |
| §18.5 and Theorem 18.9 (divergence/Gauss theorem) | **deferred** to the A page, with hypotheses narrowed to the class proved from Riemann/Jordan machinery. |
| §§18.6–18.7 (physical and box-decomposition explanations) | **inline** in the future theorem's notes/proof roadmap. |
| §18.8 “Extended divergence theorem” and Example 18.10 (spherical shell) | **deferred**: finite boundary-component version to the A page; shell computation to B. |
| §18.9 (gravitation), Lemma 18.11, and Question 18.12 | **deferred** selectively to B; the inverse-square field away from the origin is a useful singularity boundary example, while Newton's physical law itself is out of mathematical scope. |
| §19.1 “Curves bounding surfaces” | **deferred** to A-page boundary-orientation definitions. |
| §19.2 and Theorem 19.1 (Stokes) with Remark 19.2 (orientation sign) | **deferred** to the A page. |
| §19.3 and Problem 19.3 (cylindrical-surface example) | **deferred** to B. |
| §20.1, Theorem 20.1 (Green's theorem as Stokes in 2D), and §20.1.3 (area application) | **already-published:** `thm-greens-theorem-for-finite-unions-of-elementary-regions` and its supporting boundary/gluing lemmas; `cor-area-as-a-line-integral-for-elementary-regions` supplies the area application. |
| §20.2 and Theorem 20.2 (Green's flux form as 2D divergence) | **deferred** as an inline corollary/relationship on the future A page; the underlying Green theorem is already published. |
| §21 “Generalized Stokes' theorem” | **deferred to differential geometry:** differential forms on manifolds are explicitly outside this Euclidean real-analysis pair; the proposed pair stops at classical surface Stokes and divergence. |

## 8. Naoki Saito, “A Brief Introduction to Fourier Analysis on the Circle”

- Full text: [official UC Davis PDF](https://www.math.ucdavis.edu/~saito/courses/129/fs.pdf).
- Bibliographic status: UC Davis course notes.
- Range read: complete short note, pp. 1–7, through Theorem 5.

| Source heading or named result | Disposition |
|---|---|
| “A Brief History of Fourier Series” | **deferred** to the phase-2 Fourier pair's roadmap note; historical claims will not be dependencies. |
| Theorem 1 (Dirichlet convergence for piecewise-smooth periodic functions) | **deferred** to the Fourier A page, cross-checked with Lebl Corollary 11.8.11. |
| Theorem 2 (du Bois-Reymond continuous divergence example) | **already recorded but not published as a page item:** `rem-du-bois-reymond-divergent-fourier` is a deferred source note; activate it only in the future Fourier B-page build. |
| Theorem 3 (a weaker Fejér-type assertion in the notes) | **out-of-scope as a source dependency:** its wording is less precise than Theorem 4 for the planned purpose, so the plan does not rely on it. |
| Definitions of absolute and uniform convergence | **already-published:** `def-pointwise-uniform-and-uniformly-cauchy-convergence` and `def-absolute-and-conditional-convergence`. |
| Theorem 4 (Fejér: uniform convergence of Cesàro means for continuous periodic functions) | **deferred** to the Fourier A page; this is the central positive theorem of the proposed pair. |
| Theorem 5 (smoothness implies Fourier-coefficient decay) | **deferred** to the Fourier A page, consistent with Lebl Propositions 11.8.4–11.8.5. |

## Harvest conclusions

1. The two textbook ranges on Taylor theory agree on the essential distinction:
   the Taylor series is a formal series determined by the derivatives, and
   equality with the function requires control of the remainder.
2. The exact owner-named symmetric counterexample is standard and independently
   supported by Hunter and Trench, while the corpus currently publishes only
   the related one-sided version.
3. The OpenStax geometric convention can be connected without changing the
   library's analytic definitions: the speed-integral theorem proves that the
   analytic unit-circle parameter is radian arc length, after which the
   right-triangle ratios are coordinate identities.
4. The proposed phase-2 subjects are not speculative filler. Each is a coherent
   textbook section whose prerequisite chain is too large for one existing-page
   item, and each has a natural insertion point in the published order.
