# Reader 21 — batch 21, frontier-38-owner-30

Both assigned pages and all 40 assigned items were opened and their current mathematical bodies reviewed independently. The local items were followed in supplier order; external prerequisite statements were checked while tracing the claims. This report is review evidence, not a judge stamp or publication certification.

## Page verdicts

- `level-one-modular-forms-and-the-j-invariant` (A): repaired. No residual confirmed mathematical defect found in the reviewed claims. Summary now distinguishes two elliptic classes, states the nonnegative-even weight range, and attributes the discriminant product to the actual E2/logarithmic-derivative argument rather than claiming it was derived here from the triple product.
- `level-one-modular-forms-and-the-j-invariant-examples` (B): hold for the Step 5b lead’s prose correction. The item arguments were repaired, but the summary identifies Gamma(2) itself as torsion-free and free. Under this batch’s explicit SL2 definition it contains -I. B-page prose was left unchanged.

## Assigned inventory

Opened page: `library/complex-analysis/level-one-modular-forms-and-the-j-invariant.md` (A).

- `items/def-modular-group-action-on-the-upper-half-plane.md` — source locator correction only.
- `items/lem-modular-group-reduction-to-the-standard-domain.md` — mathematical repair; source locator correction.
- `items/thm-standard-fundamental-domain-for-the-modular-group.md` — reviewed, unchanged.
- `items/lem-modular-quotient-local-charts.md` — mathematical repair; source locator correction.
- `items/lem-level-one-cusp-chart-and-compactness.md` — source locator correction only.
- `items/def-compactified-level-one-modular-curve.md` — mathematical repair; source locator correction.
- `items/thm-q-expansion-principle-at-the-cusp.md` — source locator correction only.
- `items/def-level-one-modular-form-and-cusp-form.md` — source locator correction only.
- `items/lem-lattice-eisenstein-sums-converge.md` — mathematical repair; source locator correction.
- `items/def-divisor-power-sums-sigma-k.md` — source locator correction only.
- `items/def-level-one-eisenstein-series.md` — source locator correction only.
- `items/lem-lipschitz-formula-for-the-lattice-sum.md` — source locator correction only.
- `items/thm-eisenstein-series-are-modular-forms.md` — mathematical repair; source locator correction.
- `items/lem-valence-boundary-arc-computation.md` — mathematical repair; source locator correction.
- `items/thm-level-one-valence-formula.md` — source locator correction only.
- `items/cor-zeros-of-e4-and-e6-at-the-elliptic-points.md` — source locator correction only.
- `items/cor-dimension-of-level-one-modular-forms.md` — source locator correction only.
- `items/lem-e2-transformation-law.md` — source locator correction only.
- `items/lem-discriminant-is-a-nonvanishing-cusp-form.md` — source locator correction only.
- `items/def-modular-discriminant-and-j-invariant.md` — source locator correction only.
- `items/thm-ring-of-level-one-modular-forms.md` — source locator correction only.
- `items/thm-j-invariant-classifies-complex-tori.md` — source locator correction only.
- `items/thm-j-uniformizes-the-level-one-modular-curve.md` — mathematical repair; source locator correction.
- `items/thm-jacobi-theta-triple-product.md` — mathematical repair; source locator correction.
- `items/lem-jacobi-product-formula-for-the-discriminant.md` — mathematical repair; source locator correction.
- `items/cor-integrality-of-the-j-invariant-fourier-coefficients.md` — mathematical repair; source locator correction.
- `items/lem-jacobi-theta-transformation-laws.md` — reviewed, unchanged.

Opened page: `library/complex-analysis/level-one-modular-forms-and-the-j-invariant-examples.md` (B).

- `items/ex-standard-fundamental-domain-tessellation.md` — mathematical repair; source locator correction.
- `items/ex-elliptic-points-of-the-modular-group.md` — mathematical repair; source locator correction.
- `items/ex-first-fourier-coefficients-of-e4-e6-delta-and-j.md` — mathematical repair; source locator correction.
- `items/ex-no-nonzero-odd-weight-level-one-modular-forms.md` — source locator correction only.
- `items/ex-square-and-hexagonal-tori-and-their-j-invariants.md` — source locator correction only.
- `items/def-principal-congruence-subgroup-gamma-2.md` — source locator correction only.
- `items/lem-gamma-2-is-torsion-free-and-has-no-elliptic-points.md` — mathematical repair; source locator correction.
- `items/def-modular-lambda-function.md` — source locator correction only.
- `items/lem-lambda-transformation-laws.md` — mathematical repair; source locator correction.
- `items/lem-lambda-fibres-are-gamma-2-orbits.md` — source locator correction only.
- `items/lem-weierstrass-j-invariant-of-the-legendre-normal-form.md` — mathematical repair; source locator correction.
- `items/ex-modular-lambda-biholomorphism-onto-the-slit-plane.md` — mathematical repair; source locator correction.
- `items/fs-level-one-e2-is-a-weight-two-modular-form.md` — source locator correction only.

## Mathematical repairs and evidence

- `lem-modular-quotient-local-charts`: Proof 3.1: the map from the quotient into the complex disc is the chart; its inverse has the wrong domain. Corrected chart direction. Evidence: def-riemann-surface-and-holomorphic-atlas and the explicit z^nu construction.
- `def-compactified-level-one-modular-curve`: Definition: H* has the cusp-neighbourhood topology, not the orbit quotient topology. H* is not a Riemann surface, so “the quotient map is holomorphic” now explicitly means its restriction from H, together with the q-chart. Evidence: the two assigned chart lemmas and the published definition of holomorphic surface maps.
- `lem-modular-group-reduction-to-the-standard-domain`: F3: removed the unused convergence assertion for sum j^-2, whose cited bounded-partial-sums theorem did not assert that convergence. The inversion inequality remains unchanged.
- `lem-lattice-eisenstein-sums-converge`: F3: stated explicitly that the real double-series supplier applies to real and imaginary parts of a complex family. The existing absolute-sum majorant verifies its hypothesis.
- `lem-valence-boundary-arc-computation`: Statement and Proof 1.1–2.1: removed the unjustified global-log equality; differentiated the multiplicative transformation law. Corrected the missing minus sign in A=-k integral_L dτ/τ, the clockwise boundary orientation, and paired cuts at boundary zeros. Evidence: S reverses the half-arc; integral_L dτ/τ=iπ/2-2πi/3, giving A=πik/6. This repairs an incorrect computation, not merely a short omitted step.
- `thm-eisenstein-series-are-modular-forms`: F4, dependency list and final proof sentence: the authored unconditional statement had used a published theorem explicitly assuming countable choice. Replaced that inference with the complete local cotangent/Bernoulli coefficient derivation and its absolute double-sum bound. Evidence: the actual published zeta theorem Statement begins “Assume countable choice”; the local positive-even calculation needs only the cotangent expansion, Bernoulli definition and absolutely convergent series. No stated Eisenstein conclusion was weakened.
- `thm-j-uniformizes-the-level-one-modular-curve`: Statement, F4 and Proof 1.1/4.1: quotient charts are not local inverses at elliptic centres, and ramification is not confined to three representatives. Added invariant-Taylor descent, the full modular orbits, and local-degree invariance under gamma using pi∘gamma=pi. Replaced the unrelated compact-image citation in F4 with the actual local-index fact. Evidence: quotient local charts and the local normal-form theorem; i+1 is an immediate witness to the old “remaining points” error.
- `thm-jacobi-theta-triple-product`: Proof 1.2: derivative of the factor containing exp(-2πiz) has the negative sign. Corrected the displayed ± derivative; its nonvanishing and the simple-zero conclusion are unchanged.
- `lem-jacobi-product-formula-for-the-discriminant`: Statement, Given, dependencies and Proof 4.1: removed stale inherited countable-choice qualifications after repairing the Eisenstein supplier locally. The logarithmic-derivative argument and its summable product majorant are unchanged.
- `cor-integrality-of-the-j-invariant-fourier-coefficients`: Statement, F4, dependencies and Proof 2.1/3.1: removed the stale inherited choice qualification and its unused fact/tag. Evidence: reciprocal coefficients satisfy b_n=-sum_{r=1}^n p_r b_{n-r}, a finite integer recursion.
- `ex-standard-fundamental-domain-tessellation`: Example and Verification 1.2/2.1: explicitly allowed disjoint tiles. Replaced incidence reasoning that assumed unequal representatives even at fixed points; used the actual neighbours S,T±1 and geodesic convexity. Replaced the false assertion that finitely many nonincident tiles exist with a compact-set argument: c≠0 and gamma z in K imply Im z≤1/min_K Im, reducing to the supplier’s compact-set finiteness; c=0 leaves finitely many translations.
- `ex-elliptic-points-of-the-modular-group`: F2 and Verification 2.1: removed the assertion that omega and omega+1 are the only preimages of their class and that the three representatives alone are ramified. The full two modular orbits have indices 2 and 3. Evidence: pi∘gamma=pi and the assigned repaired uniformization theorem.
- `ex-first-fourier-coefficients-of-e4-e6-delta-and-j`: Example, Given, A1, dependencies and tags: removed the stale inherited choice condition. The finite coefficient arithmetic is unchanged and was independently checked with exact rational convolution.
- `lem-gamma-2-is-torsion-free-and-has-no-elliptic-points`: F2 and Proof 1.1–2.1: the old proof confused trace with the dilation multiplier sum and even wrote “four times the trace”=2a+2d. Used (tr gamma)^2=2+2cos(theta)<4, even integral trace, and the determinant mod 4 contradiction. Then finite ambient stabilisers imply freeness modulo ±I. Evidence: opened thm-classification-mobius-transformations (the trace-square invariant), fundamental-domain stabilisers, and Gamma(2)’s congruences.
- `lem-lambda-transformation-laws`: Statement and Proof 2.1: replaced “exactly six values” by six rational expressions that may coincide. Evidence: lambda(i)=1/2 gives the orbit {1/2,2,-1}; the six substitutions remain distinct as rational functions and still define the S3 quotient.
- `lem-weierstrass-j-invariant-of-the-legendre-normal-form`: F1–F3, dependencies and Proof 2.1: distinguished lattice discriminant D_Lambda from normalised Delta; corrected Y=2y instead of y=2Y; gave the explicit square-root scaling x=e2+du, Y=2h^3v, h^2=d. The ratio is unchanged because centred coefficients scale by d^-2,d^-3. Derived zeta(4),zeta(6) from the repaired Eisenstein Fourier computation rather than its conditional published supplier. Evidence: the opened Weierstrass differential equation, distinct branch values, square-root theorem, and exact polynomial calculation 4A^3+27B^2=-lambda^2(lambda-1)^2.
- `ex-modular-lambda-biholomorphism-onto-the-slit-plane`: F2 and Verification 2.1/2.2/3.2: corrected the rational equation’s leading coefficient to D(u)=u^2(u-1)^2 and proved the product factorisation for all parameters, including coincident roots, by rational identities. Corrected the two boundary substitutions: both vertical edges give x/(x-1)<0, both semicircles give 1/x>1. Corrected centre-to-strip distance wording and supplied the weak inverse height inequality for an interior-to-boundary pair. Evidence: T has an involutive substitution, L+=TST and L-=L+^-1; the exact degree-six factorisation includes repeated factors at u=1/2,-1,2.

No item was withdrawn, deleted, judged, stamped, published, or moved. All in-flight claims remain available to the lead. Material repairs were followed through their assigned consumers: elliptic degrees, discriminant/integrality coefficients, level-two freeness, the rational substitution action and the lambda slit-plane construction.

## Source corrections

The current source locators below replace inaccurate theorem numbers, page ranges, normalization labels or claims that a source contains an argument it does not give. References retained solely for background are now labelled as such. In particular Milne uses weight 2k and a differently indexed Bernoulli convention; Zagier’s unnormalised lattice sum is half this batch’s G_k; McMullen’s J is j/1728.

Authoritative text actually retrieved and relevant passages read:

- [Milne, Modular Functions and Modular Forms](https://www.jmilne.org/math/CourseNotes/MF.pdf): quotient and cusp construction pp. 27–28, 35–37; modular forms and invariant pp. 48–50; valence Example 4.13 and special zeros/dimensions p. 54; even-zeta calculation and Fourier/product formulas pp. 55–58; lattice homothety classification in the “Elliptic curves over C” subsection p. 123. Proposition 4.12 is the valence identity; Theorem 4.9 is a dimension theorem.
- [Zagier, Elliptic Modular Forms and Their Applications](https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf): definitions/domain pp. 3–7; Proposition 2 and complete boundary argument pp. 9–10; its dimension corollaries p. 11; Proposition 4 p. 15; Proposition 5 and complete Fourier argument pp. 16–17; Proposition 6 and complete regularisation proof pp. 19–20; Proposition 7 and the product/nonvanishing/j discussion pp. 21–22.
- [McMullen, Advanced Complex Analysis](https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf): pp. 94–98, especially Theorems 5.29–5.33 and the labelled lambda/rational quotient; pp. 101–104, especially Corollaries 5.35–5.40, Theorem 5.42 and j=1728J. The torsion-free wording is interpreted in the effective projective group. I did not adopt the source’s erroneous sentence g3(rho)=0 on p. 103; its own theorem uses the correct g2(rho)=0.
- [Stein–Shakarchi, Complex Analysis](https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf): complete product quotient/normalization argument pp. 285–289 and complete Gaussian-Poisson/analytic-continuation argument pp. 290–291 (Theorem 1.6 and Corollaries 1.7–1.8).

All four PDFs were eventually downloaded and extracted with PyMuPDF. Initial raw Milne/McMullen requests returned HTTP 406/403; a browser User-Agent with a query parameter succeeded on the next attempt. Initial pdftotext extraction failed because that executable is absent. The web PDF tool also successfully opened all four sources. No failed fetch was represented as source reading.

`lem-modular-quotient-local-charts`:
- C. T. McMullen: `Ch. 5, the quotient Y(1) and its orbifold points, printed pp. 92-96.` → `Section 5.3, Theorem 5.26 and the level-two discussion, printed pp. 93–96: orbifold background; the full chart proof is local.`.
- J. S. Milne: `Ch. 2, Propositions 2.5–2.7 and Examples 2.19–2.20, printed pp. 27–28 and 35–36; complete quotient-chart argument.` → `Proposition 2.5, Corollary 2.6 and Proposition 2.7, printed pp. 27–28; Examples 2.19–2.20 and the quotient charts, pp. 35–37.`.

`def-compactified-level-one-modular-curve`:
- C. T. McMullen: `Ch. 5, the modular curve X(1) and its cusp, printed pp. 95-97.` → `Section 5.3, printed pp. 97–98: the open modular quotient and its invariant J; compactification is supplied by Milne pp. 35–37.`.
- J. S. Milne: `Ch. 2 and Ch. 4, the cusps and the curve X(1), printed pp. 25-28 and 48-50.` → `Examples 2.19–2.20, Proposition 2.21 and the construction of X(Gamma), printed pp. 35–37.`.

`lem-valence-boundary-arc-computation`:
- J. S. Milne: `The proof of Theorem 4.9 (valence formula), printed pp. 52-53.` → `Proposition 4.12 and Example 4.13, printed pp. 53-54: the valence identity (with weight 2k in Milne).`.
- D. Zagier: `The proof of Theorem 3, printed pp. 12-14.` → `Proposition 2 and its proof, printed pp. 9-10: the boundary integral and its arc contribution.`.

`thm-eisenstein-series-are-modular-forms`:
- D. Zagier: `Proposition 5 and its proof, printed pp. 15-17; equation (14) for the coefficients.` → `Proposition 5 and its complete proof, printed pp. 16–17; equation (13) gives the Fourier coefficients and equation (14) is the cotangent identity.`.
- J. S. Milne: `Proposition 4.16 and Theorem 4.20, printed pp. 54-56.` → `Proposition 4.7, p. 50; Propositions 4.18 and 4.20, pp. 55–57. Milne uses weight 2k and a different Bernoulli indexing.`.

`thm-j-uniformizes-the-level-one-modular-curve`:
- C. T. McMullen: `Ch. 5, j as a biholomorphism X(1) -> C-hat and the local degrees, printed pp. 100-104.` → `Theorem 5.33 and the properness argument, printed pp. 97–98; Theorem 5.42, p. 103.`.
- D. Zagier: `§2.4, j as the Hauptmodul, printed pp. 20-23.` → `Corollary 2 to Proposition 2, printed p. 11, and the explicit j quotient, p. 22.`.

`lem-gamma-2-is-torsion-free-and-has-no-elliptic-points`:
- C. T. McMullen: `Ch. 5, the level-two group is free on two generators, printed pp. 95-96.` → `The trace/parity argument and Theorem 5.29, printed p. 96; torsion-freeness is interpreted modulo the scalar kernel.`.
- J. S. Milne: `Example 4.2 and the discussion of Gamma(2), printed pp. 48-49.` → `Example 4.2, printed p. 48: level-two quotient background, not the torsion-free proof.`.

`lem-lambda-transformation-laws`:
- J. S. Milne: `Ch. 3, the half-period values and Ch. 4, the lambda function, printed pp. 44-47 and 48-50.` → `Chapter 3, printed pp. 43–47: Weierstrass and cubic background. The lambda-specific substitutions are proved locally and discussed in McMullen pp. 94–96.`.

`lem-weierstrass-j-invariant-of-the-legendre-normal-form`:
- C. T. McMullen: `Ch. 5, the Legendre form and the j-invariant of a lattice, printed pp. 94-98.` → `Section 5.3, printed pp. 95 and 97: the rational invariant F(lambda); Theorem 5.42, p. 103, and j=1728J, p. 104.`.
- J. S. Milne: `Ch. 3-4, the invariants g2, g3, Delta and j, printed pp. 43-50.` → `Chapter 3, printed pp. 46–47: g2,g3 and the lattice discriminant; Remark 4.4, p. 49; Propositions 4.18 and 4.20, pp. 55–57.`.

`ex-modular-lambda-biholomorphism-onto-the-slit-plane`:
- C. T. McMullen: `Ch. 5, Theorems 5.29-5.31 and the lambda quotient and triangle arguments, printed pp. 94-98.` → `Theorems 5.29–5.31 and Corollary 5.32, printed p. 96; the S3 rational quotient on pp. 94–95 and 97.`.
- J. S. Milne: `Ch. 4, the lambda function and its domain, printed pp. 48-50.` → `Chapter 2, printed pp. 35–37, and Example 4.2, p. 48: quotient-chart and level-two background. The slit quadrilateral is supplied by McMullen and the local proof.`.

`cor-integrality-of-the-j-invariant-fourier-coefficients`:
- C. T. McMullen: `Ch. 5, j = q^{-1}+744+196884q+..., with integral coefficients, printed p. 105.` → `The j Fourier expansion with integral coefficients, printed p. 104 (following Theorem 5.42).`.

`ex-first-fourier-coefficients-of-e4-e6-delta-and-j`:
- D. Zagier: `Equation (14) and the tau-table following equation (24), printed pp. 16-17 and 22.` → `Proposition 5 and the E4,E6 examples, printed pp. 16–17; the j expansion and equation (24), p. 22.`.

`def-modular-group-action-on-the-upper-half-plane`:
- D. Zagier: `§1, 'The modular group', printed pp. 5-6: SL(2,Z), its action on H and the generators S,T.` → `Sections 1.1–1.2, printed pp. 3 and 5–6: the action, the quotient by scalars, and S,T.`.

`lem-level-one-cusp-chart-and-compactness`:
- C. T. McMullen: `Ch. 5, cusps, the q-chart and compactness of X(1), printed pp. 95-97.` → `Section 5.3, printed pp. 97–98: properness at the cusp of J; the explicit compactification and q-chart are in Milne pp. 35–36.`.
- J. S. Milne: `Ch. 2, Example 2.20 and the compactification construction, printed pp. 35–37; q-chart and compactness.` → `Example 2.20 and Proposition 2.21 with their surrounding construction, printed pp. 35–36: the q-chart, cusp topology and compactness.`.

`thm-q-expansion-principle-at-the-cusp`:
- D. Zagier: `Equation (3) and the paragraph after it, printed pp. 7-8: Fourier expansion and ord at infinity.` → `Equation (3), printed p. 5, and the cusp coordinate discussion, p. 9.`.
- C. T. McMullen: `Ch. 5, 'Cusps and the q-expansion', printed p. 95.` → `Section 5.4, printed pp. 98–99 and 103–104: boundedness at infinity and the Fourier parameter q; the full analytic descent is proved locally.`.

`def-level-one-modular-form-and-cusp-form`:
- D. Zagier: `§1, Definition of modular forms and cusp forms, equations (1)-(4), printed pp. 6-8.` → `Section 1.1, equations (2)–(3), printed pp. 4–5; equation (4), p. 6.`.
- J. S. Milne: `Ch. 4, 'Modular functions and modular forms', printed pp. 48-50.` → `Definition 4.5 and the cusp condition, printed p. 49.`.
- C. T. McMullen: `Ch. 5, 'Modular forms', printed pp. 99-101.` → `Section 5.4, printed pp. 98–99: weight 2k, boundedness at infinity and cusp forms.`.

`def-divisor-power-sums-sigma-k`:
- J. S. Milne: `'The Fourier coefficients of the Eisenstein series', Proposition 4.20, printed p. 55: sigma_{2k-1}(n) coefficients.` → `The Fourier coefficients of G_k and Proposition 4.20, printed pp. 56–57 (Milne uses exponent 2k).`.

`def-level-one-eisenstein-series`:
- J. S. Milne: `Proposition 4.7 and 4.16, printed pp. 50 and 54-55: G_k and the normalised forms; the weight-two case is treated separately.` → `Proposition 4.7, printed p. 50, and Proposition 4.20, pp. 56–57: the lattice sum of exponent 2k and its Fourier coefficients; E2 is supplied by Zagier.`.
- D. Zagier: `Equations (11)-(12) and (17), printed pp. 15, 18-19: the three normalisations and the weight-two E2.` → `Equations (11)–(12), printed pp. 14–15, and equation (17), p. 19. Zagier uses half the unnormalised lattice sum used here.`.

`lem-lipschitz-formula-for-the-lattice-sum`:
- J. S. Milne: `The proof of Proposition 4.20, printed pp. 55-56: z cot z and the reciprocal-power expansion.` → `The proof of Proposition 4.20, printed pp. 56–57: differentiated cotangent and reciprocal-power sums.`.
- C. T. McMullen: `Ch. 5, 'The q-expansion of the Weierstrass function', printed pp. 100-102: the Laurent series and the q-expansion input.` → `Section 5.2, printed pp. 91–92: cotangent as the singly periodic model; the Lipschitz identity is in Milne pp. 56–57.`.

`thm-level-one-valence-formula`:
- J. S. Milne: `Theorem 4.9 and its proof, printed pp. 52-53.` → `Proposition 4.12 and Example 4.13, printed pp. 53–54: the valence identity for weight 2k.`.
- D. Zagier: `Theorem 3 and its proof, printed pp. 12-14.` → `Proposition 2 and its full boundary-integral proof, printed pp. 9–10.`.
- C. T. McMullen: `Ch. 5, the valence formula, printed pp. 97-99.` → `Section 5.4, printed pp. 100–102: the related algebraic count using S3-invariant differentials; the boundary proof is in Zagier pp. 9–10.`.

`cor-zeros-of-e4-and-e6-at-the-elliptic-points`:
- J. S. Milne: `Exercise 4.15 and the discussion of E4, E6, printed pp. 54-56.` → `Example 4.15, printed p. 54: simple zeros of G2 at rho and G3 at i in Milne’s weight-2k notation.`.
- D. Zagier: `Equation (14) and the discussion following it, printed pp. 16-17.` → `Proposition 2, printed pp. 9–10, and the expansions of E4,E6, p. 17: ingredients for the local deduction.`.

`cor-dimension-of-level-one-modular-forms`:
- D. Zagier: `Theorem 3 and the dimension formula, printed pp. 12-16.` → `Corollary 1 to Proposition 2, printed pp. 10–11, and the corollary to Proposition 4, p. 15.`.
- J. S. Milne: `Theorem 4.9 and Corollary 4.12, printed pp. 52-53.` → `Theorem 4.9, printed pp. 51–53; Example 4.14 and Proposition 4.16, pp. 54–55.`.
- C. T. McMullen: `Ch. 5, the dimension count for modular forms, printed pp. 98-100.` → `Corollary 5.36, printed p. 102 (weight 2k convention).`.

`lem-e2-transformation-law`:
- C. T. McMullen: `The quasimodular remark on the regularised Eisenstein series, printed p. 102.` → `Section 5.4, printed pp. 98–104: background on modular forms. These notes do not supply the E2 regularisation law; that argument is Zagier Proposition 6.`.

`lem-discriminant-is-a-nonvanishing-cusp-form`:
- J. S. Milne: `Proposition 4.18 and Theorem 4.21(2), printed pp. 55-58.` → `Example 4.15 and Proposition 4.16(c), printed pp. 54–55; the discriminant expansion and Theorem 4.21, p. 57.`.
- D. Zagier: `§2.3-§2.4, the definition and nonvanishing of Delta, printed pp. 18-21.` → `Proposition 7 and equation (23), printed p. 21; the valence-based nonvanishing argument, p. 22.`.
- C. T. McMullen: `Ch. 5, the discriminant form, printed pp. 99-101.` → `Section 5.4, printed pp. 101–103: the unique weight-12 cusp form and its nonvanishing.`.

`def-modular-discriminant-and-j-invariant`:
- C. T. McMullen: `Ch. 5, the j-invariant as a modular function, printed pp. 100-102.` → `Section 5.4, Theorem 5.42, printed pp. 103–104: J=g2^3/(g2^3-27g3^2) and j=1728J.`.

`thm-ring-of-level-one-modular-forms`:
- D. Zagier: `Theorem 2 and its proof, printed pp. 11-14.` → `Proposition 4 and its proof, printed p. 15; the alternative induction using Delta, pp. 21–22.`.
- J. S. Milne: `Theorem 4.9 and Corollary 4.10, printed pp. 52-53.` → `Proposition 4.16(c)–(d) and its proof, printed pp. 54–55.`.
- C. T. McMullen: `Ch. 5, the structure of the ring of modular forms, printed pp. 99-101.` → `Corollaries 5.37–5.40, printed p. 102.`.

`thm-j-invariant-classifies-complex-tori`:
- J. S. Milne: `Ch. 4, the bijection between lattices up to homothety and j-values, printed pp. 48-58.` → `Remark 4.4, printed p. 49, and the lattice-homothety classification in Elliptic curves over C, pp. 123–124.`.
- C. T. McMullen: `Ch. 5, the classification of complex tori by j, printed pp. 100-104.` → `Theorems 5.26 and 5.33, printed pp. 93 and 97–98; Theorem 5.42 and j=1728J, pp. 103–104.`.

`ex-no-nonzero-odd-weight-level-one-modular-forms`:
- D. Zagier: `§1, the remark that odd-weight forms vanish, printed p. 8.` → `Section 1.2, printed p. 5: -I forces every odd-weight form to vanish.`.
- J. S. Milne: `Ch. 4, the parity remark after the definition of modular forms, printed p. 48.` → `Definition 4.5, printed p. 49: the weight-2k convention; the odd-weight assertion is in Zagier p. 5.`.

`ex-square-and-hexagonal-tori-and-their-j-invariants`:
- C. T. McMullen: `The discussion of square and hexagonal/CM examples, printed pp. 94-95 and 103.` → `Section 5.3, printed pp. 94–95: special cross-ratio orbits; Theorem 5.42, p. 103: J(i)=1 and J(rho)=0. Use j=1728J from p. 104.`.
- D. Zagier: `The remark on complex multiplication and special j-values, printed pp. 22-23.` → `Proposition 2, printed pp. 9–10, and the normalised j formula, p. 22: ingredients for the special-value deduction.`.

`def-principal-congruence-subgroup-gamma-2`:
- J. S. Milne: `Example 2.23 and Example 4.2, printed pp. 37-38 and 48-49: the index of Gamma(N), the level-two group.` → `Congruence subgroups and reduction surjectivity, printed p. 28; Example 4.2, p. 48: index six and level-two cusps.`.

`def-modular-lambda-function`:
- C. T. McMullen: `Ch. 5, the definition of lambda via the cross-ratio of the critical values, printed pp. 94-95.` → `Section 5.3, printed p. 95: the labelled half-period cross-ratio lambda=(e3-e2)/(e1-e2).`.
- D. Zagier: `The theta-quotient description of lambda in §2.4/various exercises, printed pp. 19-23.` → `Section 1.1, printed p. 4: lattices and complex-torus moduli background. This is not a theta-quotient formula for lambda.`.

`lem-lambda-fibres-are-gamma-2-orbits`:
- C. T. McMullen: `Ch. 5, lambda as a bijection Y(2) -> C minus {0,1}, printed pp. 95-98.` → `Theorem 5.30 and its proof, printed p. 96: lambda gives a holomorphic bijection of the level-two quotient.`.
- J. S. Milne: `Ch. 4, the lattice and j-invariant classification, printed pp. 48-52.` → `Chapter 3, printed pp. 46–47: the Weierstrass cubic and lattice scaling background; the labelled fibre argument is local.`.

`fs-level-one-e2-is-a-weight-two-modular-form`:
- D. Zagier: `Equation (17) and the surrounding discussion of E2 and its completion, printed pp. 18-19.` → `Equation (17), Proposition 6 and equation (21), printed pp. 19–20: E2 and its nonholomorphic completion.`.
- C. T. McMullen: `The quasimodular remark on the regularised Eisenstein series, printed p. 102.` → `Section 5.4, printed pp. 98–104: modular-form background; the E2 correction and completion are supplied by Zagier Proposition 6.`.

## Contracts

Updated `research/frontier-38-owner-30-batch-21.proof-contracts.json`. Regenerated exact supplier quotes and step derivations for all 32 proof-bearing assigned entries; eight definitions have no proof steps and were correctly skipped. Corrected 25 boundary worksheets, including false assertions that the weight-12 exponent pair is unique, that the interior discriminant zero sum is one, that J_Leg(1)=0, that the imaginary axis is fixed pointwise by S, and the stale choice and boundary-substitution claims. The regeneration uses current statements as exact quotes; mathematical support was assessed from the opened targets and local arguments, not inferred from a mechanical contract pass.

## Uneditable finding and blocker

`library/complex-analysis/level-one-modular-forms-and-the-j-invariant-examples.md`, lines 37–40, especially line 39: “Gamma(2) is torsion-free and acts freely.” Under `def-principal-congruence-subgroup-gamma-2`, Gamma(2) is a subgroup of SL2(Z), contains -I, and -I has order two and fixes every tau. Both properties hold for bar-Gamma(2)=Gamma(2)/{±I}, not this defined Gamma(2). The index statement should likewise name its projective image when saying “in the modular group.” Defect: false-claim, fatal as an unqualified page claim. This is the single uneditable finding returned. The blocker is the B-page edit authority; no unresolved mathematical proof uncertainty is being hidden behind it.

## Validation

- Reflow and precheck were run for every one of the 38 changed item paths. Every command exited zero; reflow reported unchanged. Definitions appropriately had zero proof sections checked. Two final fact/citation edits were followed by fresh reflow/precheck for their respective items.
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-21.proof-contracts.json --strict`: 0 errors, 0 warnings, 40/40 items checked. The first attempt exposed a newly introduced thm/def ID typo, a repeated citation and missing worksheet anchors; all were corrected before the passing run.
- `node tools/rendercheck.mjs` with all 38 explicit changed paths: exit zero; every YAML frontmatter and math span parsed.
- After the last item edit and formatter, one batched `node tools/proof-layout.mjs` call with all 38 explicit changed paths: exit zero, **38 items, 102 steps, 0 defects**.
- Exact rational arithmetic independently verified the Legendre denominator polynomial and qj coefficients 1,744,196884,21493760. The rational fibre polynomial matched coefficient-by-coefficient at six test parameters including the repeated-root cases 1/2,-1,2; this bounded check is not the proof of the rational identity, whose general argument is in the repaired item. An initial SymPy attempt failed because SymPy is unavailable; the successful check used only Python’s Fraction.
- Focused changed-item dependency existence and stale-judge scan: clean. No `verification.judge` record remains in a changed item. No global workflow gate or independent audit was run.

## External opened inventory and coverage limits

The following external supplier files were opened to retrieve definitions/statements or the relevant clauses. Their proofs were not all read, and their complete published dependency closures were not independently re-audited. Some broad retrievals were truncated; relevant nonroutine claims were subsequently read in bounded excerpts. Half-period fibre proof sections, the Möbius classification proof, the zeta supplier proof, and the Weierstrass-cubic argument were inspected where used; routine algebra/topology/series suppliers were checked at their interfaces. This is an opened inventory, not a claim of whole-item audits.

- `items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md` — used definition/statement clauses; no blanket proof certification.
- `items/cor-contour-integral-of-a-constant-is-an-endpoint-increment.md` — used definition/statement clauses; no blanket proof certification.
- `items/cor-determinant-of-an-inverse.md` — used definition/statement clauses; no blanket proof certification.
- `items/cor-entire-biholomorphisms-are-affine.md` — used definition/statement clauses; no blanket proof certification.
- `items/cor-general-linear-group-is-a-group.md` — used definition/statement clauses; no blanket proof certification.
- `items/cor-injective-holomorphic-derivative-nonzero.md` — used definition/statement clauses; no blanket proof certification.
- `items/cor-locally-uniformly-convergent-holomorphic-series.md` — used definition/statement clauses; no blanket proof certification.
- `items/cor-order-of-a-quotient-group.md` — used definition/statement clauses; no blanket proof certification.
- `items/cor-principal-logarithm-is-holomorphic-on-the-slit-plane.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-absolute-and-conditional-convergence.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-bernoulli-numbers-by-their-generating-function.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-biholomorphic-map.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-compact-space.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-complex-analytic-function.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-complex-conjugate-real-imaginary-part-and-modulus.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-complex-contours-reversal-concatenation-and-closedness.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-complex-differentiability-holomorphic-and-entire.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-complex-lattice-and-complex-torus.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-complex-logarithms-principal-logarithm-and-complex-powers.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-complex-metric-convergence-and-continuity.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-complex-series-power-series-and-absolute-convergence.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-complex-trigonometric-and-hyperbolic-functions.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-congruence-modulo-an-integer.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-continuous-map-top.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-countable-choice.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-covering-map-and-evenly-covered-neighbourhoods.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-covering-space-action.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-cross-ratio-riemann-sphere.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-deck-transformation-and-deck-group.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-divides-in-z.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-finite-sum.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-free-group-action.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-generated-subgroup.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-group-action.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-group-homomorphism.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-group-isomorphism-and-automorphism.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-hausdorff-space.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-holomorphic-and-meromorphic-map-of-riemann-surfaces.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-homeomorphism-and-open-maps.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-integer-power.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-integers.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-integers-modulo-n.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-invertible-matrix-and-general-linear-group.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-kernel-and-image-of-a-linear-map.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-kernel-and-image-of-group-homomorphism.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-logarithmic-derivative-meromorphic-function.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-matrix-product-and-identity-matrix.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-meromorphic-function-complex-domain.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-mobius-transformation.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-normal-convergence-of-holomorphic-products.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-normal-subgroup.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-orbit-and-stabilizer.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-order-in-a-group.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-order-of-zero-holomorphic-function.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-quotient-group.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-quotient-topology.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-ramification-index-and-branch-value.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-rank-and-nullity.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-riemann-surface-and-holomorphic-atlas.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-riemann-zeta-function.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-schwartz-space-and-its-seminorms.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-series.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-tangent-cotangent-secant-cosecant.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-unit-disc-upper-half-plane-and-blaschke-factor.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-vector-space.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-weierstrass-elliptic-p-function.md` — used definition/statement clauses; no blanket proof certification.
- `items/def-weighted-zero-and-pole-counts-on-cycle.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-absolute-convergence-implies-convergence.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-binomial-theorem-over-complex-numbers.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-cauchy-product-of-absolutely-convergent-complex-series.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-center-is-normal.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-complex-conjugation-and-modulus-laws.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-divisor-bound.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-geometric-sequence-null.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-group-power-laws.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-homeomorphism-criteria.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-int-bounded-above-has-greatest.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-integer-part.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-logarithmic-derivative-order-residue.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-nonzero-derivative-gives-local-biholomorphism.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-of-abs-value.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-stabilizer-is-a-subgroup.md` — used definition/statement clauses; no blanket proof certification.
- `items/lem-weierstrass-p-degree-two-and-half-periods.md` — used definition/statement clauses; no blanket proof certification.
- `items/prop-canonical-quotient-map.md` — used definition/statement clauses; no blanket proof certification.
- `items/prop-deck-transformations-are-determined-by-one-point-and-act-freely.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-absolute-convergence-of-complex-series.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-algebra-of-complex-derivatives.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-argument-principle-null-homologous-cycle.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-bezout-identity.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-chain-rule-for-complex-derivatives.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-classification-mobius-transformations.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-compact-subset-of-a-hausdorff-space-is-closed.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-compactness-under-continuous-maps.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-complex-exponential-addition-and-real-extension.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-complex-exponential-is-entire-with-derivative-itself.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-complex-power-series-converge-locally-uniformly.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-complex-torus-quotient-is-well-defined.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-complex-torus-weierstrass-cubic-isomorphism.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-complex-trigonometric-and-hyperbolic-power-series.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-continuity-characterisations-top.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-continuous-image-of-a-connected-space.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-convex-subsets-have-trivial-fundamental-group.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-covering-space-lifting-criterion.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-cross-ratio-mobius-invariant.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-determinant-multiplicative.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-differentiation-under-dominated-improper-multiple-integrals.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-direct-comparison-test.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-double-series-fubini.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-elliptic-cubic-chord-tangent-group-law.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-every-complex-number-has-a-square-root.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-exponential-beats-every-polynomial.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-extreme-value-metric.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-first-isomorphism-theorem-groups.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-ftc-second-part.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-geometric-series.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-group-actions-correspond-to-homomorphisms.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-heine-borel-rn.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-holomorphic-if-and-only-if-analytic.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-identity-theorem-holomorphic-functions.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-intermediate-value.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-isolated-zeros-holomorphic-function.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-kernel-and-fibres-of-complex-exponential.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-laurent-coefficient-formula-and-uniqueness.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-linear-kernel-image-and-injectivity.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-liouville-bounded-entire-function.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-local-normal-form-holomorphic-map.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-local-normal-form-holomorphic-map-riemann-surfaces.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-mittag-leffler-expansion-of-pi-cotangent.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-mobius-group-and-projective-linear-identification.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-mobius-transformations-biholomorphic-sphere.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-nonnegative-series-bounded-partial-sums.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-normal-convergence-of-holomorphic-products.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-orbit-map-of-a-covering-space-action-is-a-covering.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-orbits-partition-the-set.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-p-series-rational.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-poisson-summation-for-schwartz-functions.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-proper-holomorphic-map-riemann-surfaces-has-degree.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-quotient-group-laws.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-quotient-universal-property.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-rank-nullity.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-ratio-test.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-real-square-matrix-invertible-iff-determinant-nonzero.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-removable-singularity-characterizations.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-special-values-of-riemann-zeta-at-integers.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-subgroups-of-cyclic-groups-are-cyclic.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-taylor-expansion-holomorphic-function.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-three-point-transitivity-mobius-transformations.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-weierstrass-convergence-holomorphic-functions.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-weierstrass-lattice-discriminant-is-nonzero.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-weierstrass-m-test-for-complex-function-series.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-weierstrass-p-differential-equation.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-weierstrass-p-normal-convergence-and-periodicity.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-zero-complex-derivative-on-a-domain-implies-constant.md` — used definition/statement clauses; no blanket proof certification.
- `items/thm-zero-order-factorization-holomorphic-function.md` — used definition/statement clauses; no blanket proof certification.

The independently reviewed local mathematics has no remaining confirmed item defect. Review order was topological for the assigned local items; external statement checks occurred during claim tracing rather than a separate topological traversal of the entire published closure. Scope and coverage limitations remain explicit here and in the JSON. No other batch, B-page prose, published item, or plan-spec was edited.

## Changed item hashes at handoff

- `lem-modular-quotient-local-charts`: `2098bd891b476896430dd6712c55c852aa8f54c6ed0241f9402db9065e07fb1e`.
- `def-compactified-level-one-modular-curve`: `27a44e715f7e755bdec148ae6c2c880984e4ae7b269af9c799c7d1fc9490dee3`.
- `lem-valence-boundary-arc-computation`: `5714cfaa3408bfe5df14da438b7e459e2e9df4101560435443434a48bd602ae3`.
- `thm-eisenstein-series-are-modular-forms`: `762816afa0455b4d8d18c88623e31f93bf7537e8aba5dff29af19c2e02bfc6f0`.
- `thm-j-uniformizes-the-level-one-modular-curve`: `f5e3ed40d5296775951abe21eb74ad08148fd9b7c289fac972b623f35538e3e2`.
- `thm-jacobi-theta-triple-product`: `db6d0c83c65ed0d082dce90fd0dc2f1c307566537541b697f075b2c5e7d336dd`.
- `ex-elliptic-points-of-the-modular-group`: `01d0344dd50bb8ac77a007dc795947558f132f10d332337e08f596960580322c`.
- `ex-standard-fundamental-domain-tessellation`: `f3ad9f8f0182f53343a84b6c09f7f5705c8d9e9cfe34c5fa167e98270a760b1c`.
- `lem-gamma-2-is-torsion-free-and-has-no-elliptic-points`: `bbdb32a78bc53566e020734c6f7ca2116214344fd61b982374f67e16edef01da`.
- `lem-lambda-transformation-laws`: `a0ef5e4efce52e4863f3a38bd7432b40a9655bef4393ed8a6b2181822828110a`.
- `lem-weierstrass-j-invariant-of-the-legendre-normal-form`: `2e188cf9c6a1cf3a26d206ddac93eec27e02e23a5c82d19e71e87ccfc52ca0dc`.
- `ex-modular-lambda-biholomorphism-onto-the-slit-plane`: `4e3c494d2070e6cf33998b35bd5f0ff1f65fe0aba42610709044c6ae4b6084b5`.
- `lem-jacobi-product-formula-for-the-discriminant`: `82c76676193ca07896e48fb629483fbaf5d40169d03bbaa28852cb6a4dc772be`.
- `cor-integrality-of-the-j-invariant-fourier-coefficients`: `be59a90ccbca95caefcfed92ac16e256ea513d868ed5ba0125a53f65dd3b8014`.
- `ex-first-fourier-coefficients-of-e4-e6-delta-and-j`: `5789a2b2c596e784c09eaf13ce5ad350e1b9042ee583927e79c4519ac2fdebed`.
- `lem-modular-group-reduction-to-the-standard-domain`: `ec46a62d1c83717eb0e6ceebbe53a7cf938fc9c7ad2f91f17e3602c124061227`.
- `lem-lattice-eisenstein-sums-converge`: `a23eef68cde5eaeb399c4ca16981f2786174c3db2effd5f79136676e6c44527c`.
- `def-modular-group-action-on-the-upper-half-plane`: `836357dc0635f790faafaf5df0a419c4eb28183b6217492e4fa4ab9201318d77`.
- `lem-level-one-cusp-chart-and-compactness`: `c2f485d0764812e7bacbf84c7dc7e430056b836ab17cff8009cec6f9751693f3`.
- `thm-q-expansion-principle-at-the-cusp`: `cf9e6e81db61fa1fb1ba1de7e3c98ed95800a09f739c49be5ef9284261a28558`.
- `def-level-one-modular-form-and-cusp-form`: `993bc16af512ce3a0f4aee76ff15ba227de7754645bc00abe5ae4e23ddac770e`.
- `def-divisor-power-sums-sigma-k`: `d04137cf25055d93e49dd994b1cc356bc7a6e34b7f70f8c785b18bc30e31a334`.
- `def-level-one-eisenstein-series`: `cf8c12b215b09436563e1be5f5502276d02005f1533b9e0a481f50366b0ed5cb`.
- `lem-lipschitz-formula-for-the-lattice-sum`: `aeeb2aff509ce1b54bebff7bc42c21539e66f5289015855ec1b598690a1e4031`.
- `thm-level-one-valence-formula`: `6150688a0d3f046db44cf1375dc75cd123b76778f3b0b27731c4aa3b3f560042`.
- `cor-zeros-of-e4-and-e6-at-the-elliptic-points`: `27a17aa1ebc16ae6d7976e4d2f9906f8a9d4ade13e9a86510051217e36b73145`.
- `cor-dimension-of-level-one-modular-forms`: `22208e4290137b755bde34d795601c8c4eec8b3ce1b4c436b81aa95bc08ef300`.
- `lem-e2-transformation-law`: `ebb8c141dcda42019fa9d473d233de97d661fbca076349f5b15e730a58b56e74`.
- `lem-discriminant-is-a-nonvanishing-cusp-form`: `51292a9b476f336aacb3e790fedf6691d78412b520d7e97e6b60265b2ee70c6d`.
- `def-modular-discriminant-and-j-invariant`: `78cbb74038c38afc7d187833a360618820efe9db82228a6621fb23e482c3408d`.
- `thm-ring-of-level-one-modular-forms`: `48ce242707c57da691d631cbf4feb5c47240c7d7886c566288af0723fe19e6e0`.
- `thm-j-invariant-classifies-complex-tori`: `283402d44b11a6b065abb32b00ab308499292ce1dbb27603d53e27bda134688b`.
- `ex-no-nonzero-odd-weight-level-one-modular-forms`: `8328dd046f6eca685db72bc12f14504638dd4965aa9196ffd5cdfdcdeb18d272`.
- `ex-square-and-hexagonal-tori-and-their-j-invariants`: `5efe7b54e341c972d80a46aea3cc15214734cfa2212ce41c43e2404e25a2f23c`.
- `def-principal-congruence-subgroup-gamma-2`: `6aee35a2beb5c3a0050144f8306abd6bd189b71a3605635ca1997addea0f5b2e`.
- `def-modular-lambda-function`: `886dfac9a4509d1e4bae4ebb37a36487df586296b9aea60965b3a530e8967baa`.
- `lem-lambda-fibres-are-gamma-2-orbits`: `c49aa2fc930b893013902dc8fef37c7fa36aa3c89f167530eed94ea9f8d4a8c7`.
- `fs-level-one-e2-is-a-weight-two-modular-form`: `18cdbba45600754f54dfb36b44bd4a7b02d6ddb46d6512e6d931ae8e8673649b`.
