# Frontier 8 batch 2 — Beta Steps 1–2 notes

Scope: exactly two A/B pairs:

- fundamental-trigonometric-identities / fundamental-trigonometric-identities-examples
- the-complex-exponential-and-eulers-formula / the-complex-exponential-and-eulers-formula-examples

No item, library page, or plan-spec entry is authored here. The sibling pages
manifest is the scope of record. The sibling proof-contract file is the
machine-readable Step-5 obligation map. B pages are leaves.

## 1. Applyable prose-scaffold amendments

### 1.1 Replace RA-31 in research/plan-realanalysis-pages.md

Exact old text:

~~~
**RA-31 Fundamental Trigonometric Identities** <- RA-28
Pythagorean; parity; cofunction; supplementary; **reflection in 3pi/4 and in pi**
(two categories my draft missed); shift and periodicity; addition and subtraction
for all six functions; double, triple and general multiple angle; **de Moivre in
real form**; **Chebyshev polynomials** (cos n theta = T_n(cos theta),
sin((n+1) theta) = U_n(cos theta) sin theta, the recurrence, orthogonality with
weight 1/sqrt(1-x^2), and T_n/2^{n-1} as the minimax monic polynomial); half
angle; power reduction; product-to-sum; sum-to-product; the **tangent half-angle
(Weierstrass) substitution**; linear combination / harmonic addition.
B: worked verifications; Morrie's law; the values at 18, 36 and 72 degrees.
~~~

Exact new text:

~~~
**RA-31 Fundamental Trigonometric Identities** <- RA-28

requires: sine-cosine-and-the-definition-of-pi; finite-counting-and-binomial-coefficients.

DEFS: real polynomial, degree, leading coefficient and monic normalization;
Chebyshev polynomials T_n and U_n by recurrence.

THMS: the Pythagorean and parity identities for all six trigonometric
functions, always on their natural domains; cofunction, supplementary,
reflection, shift and periodicity identities (including the 3pi/4 evaluations
as substitutions, not as a competing primitive rule); sine and cosine
subtraction; addition and subtraction for tangent, cotangent, secant and
cosecant with every denominator condition displayed; double-angle,
power-reduction, triple-angle and signed half-angle identities;
product-to-sum and sum-to-product; the tangent-half-angle rational
parametrization; parametrization of the unit circle; harmonic addition;
polynomial factor-at-a-root and a root bound; Chebyshev degree, leading
coefficient and extreme-value facts; Chebyshev and binomial real multiple-angle
formulas; T_n/2^(n-1) is the minimax monic polynomial on [-1,1] for n >= 1.

B: a worked pi/12 verification; Morrie's law; the exact values at 18, 36 and
72 degrees; the first Chebyshev polynomials; a counterexample to an unsigned
half-angle formula; and a counterexample showing that the tangent addition
formula is false when its denominator/domain condition is omitted.

DEFER: Chebyshev orthogonality is deferred until the required improper-integral
machinery is on the spine. The differential Weierstrass substitution is
deferred to RA-32; this page proves only the rational parametrization.
~~~

### 1.2 Replace RA-33 in research/plan-realanalysis-pages.md

Exact old text:

~~~
**RA-33 The Complex Exponential and Euler's Formula** <- RA-28, RA-25
C as R^2; modulus, conjugate; completeness of C; complex series and
Cauchy-Hadamard in C; the complex exponential; the addition formula; it extends
the real exponential; termwise differentiation; **Euler's formula** (four
proofs); **Euler's identity**; |e^{i theta}| = 1; **ker exp = 2 pi i Z**, which
supplies the last characterization of pi (half the fundamental period of exp on
the imaginary axis); exp maps C onto C minus 0; polar form; de Moivre; n-th roots
and roots of unity, which sum to 0; the **exact sequence 0 -> Z -> R -> T -> 0**;
the principal logarithm; **no continuous logarithm exists on all of C minus 0**
(a winding obstruction); complex powers are multivalued; the trig/hyperbolic
dictionary; **the fundamental theorem of algebra** by the minimum-modulus
argument. B: i^i is real; log(-1) is multivalued; the fifth roots of unity;
sin is unbounded on the imaginary axis; **(z^a)^b != z^{ab}**; the
1 = e^{2 pi i} paradox; **the functional-equation characterization FAILS over C**,
witnessed by f(x + iy) = e^x(cos 2y + i sin 2y); **the integral definition of log
fails over C** (path dependence, valid only mod 2 pi i).
~~~

Exact new text:

~~~
**RA-33 The Complex Exponential and Euler's Formula** <- RA-28, RA-31, RA-25

requires: sine-cosine-and-the-definition-of-pi;
fundamental-trigonometric-identities; the-logarithm-and-general-powers;
completeness-and-uniform-continuity; rn-as-a-normed-space;
compactness-in-metric-spaces.

DEFS: C as R^2 with arithmetic and real embedding; complex integer powers;
conjugate, real and imaginary parts and modulus; the Euclidean metric,
convergence, Cauchy sequences and continuity; complex series, absolute
convergence, power series and radius; exp by its power series; complex
logarithms, the principal argument and principal logarithm, and principal and
multivalued powers; complex trigonometric and hyperbolic functions; complex
polynomials, degree, leading coefficient and monic normalization.

THMS: C is a field and complete; conjugation and modulus laws; the complex
binomial theorem; absolute convergence and rearrangement; Cauchy-Hadamard and
the absolutely convergent Cauchy product; convergence of exp everywhere;
exp(z+w)=exp(z)exp(w) and agreement with the real exponential; Euler's formula
by the power-series proof; Cartesian form, Euler's identity and modulus;
kernel and fibres of exp; unique principal polar form; surjectivity onto the
punctured plane; complex de Moivre; n-th roots and roots of unity and their
sum; classification of all logarithms; no continuous logarithm on all of the
punctured plane; the trigonometric/hyperbolic dictionary; and the fundamental
theorem of algebra by the minimum-modulus argument, with growth, attainment
and d'Alembert descent as explicit lemmas.

B: all values of i^i; all logarithms of -1; fifth roots of unity; complex sine
on the imaginary axis; failure of the principal-power exponent law; the
1=exp(2pi i) logarithm paradox; a continuous multiplicative map C -> C^x that
is not the standard exponential; and the complex geometric power series.

DEFER: termwise complex differentiation (no complex derivative is yet defined);
three alternative proofs of Euler's formula; exact-sequence terminology; path
integrals and path-dependence of logarithms. These are not used by any retained
claim.
~~~

## 2. Step-5 authoring instructions and convention lock

### 2.1 Trigonometric page

- Every quotient identity is stated only on the intersection of the natural
  domains of both sides. The tangent addition formula also displays the
  nonzero denominator after rational simplification.
- Half-angle square-root identities include the sign selected by the quadrant;
  no unsigned global identity is asserted.
- The tangent-half-angle item is the algebraic parametrization
  t = tan(theta/2). It is not yet the differential substitution used in
  integration.
- Real polynomials are finite coefficient families. The zero polynomial has no
  degree or leading coefficient; monic is defined only for a nonzero
  polynomial.
- T_0=1, T_1=x, U_0=1, U_1=2x. The recurrence is part of the definition.
  Multiple-angle statements specify their n=0 and n=1 edge cases.
- The minimax theorem has n >= 1 and compares monic real polynomials of exact
  degree n on [-1,1]. The normalized extremizer is 2^(1-n)T_n and the sharp
  norm is 2^(1-n). Alternation points and the root-count contradiction must be
  explicit.
- The unit-circle parametrization is surjective with a unique parameter in
  [0,2pi). Endpoint conventions may not silently identify 0 and 2pi.
- The real-polynomial root-count bound is proved by factor-at-a-root induction;
  it is not an existence theorem and does not presuppose the fundamental
  theorem of algebra.

### 2.2 Complex-exponential page

- C is literally R^2. All completeness, convergence and continuity claims are
  reduced to the already published Euclidean facts.
- Complex natural and integer powers are defined locally before complex power
  series. This avoids treating the published real-power definition as
  polymorphic.
- The complex binomial theorem is proved locally by induction before it is used
  in the Cauchy-product proof of exp(z+w).
- Every finite complex sum is an initial-segment sum obtained by reading
  `def-monoid-finite-product` additively in the additive commutative monoid of
  the complex field. Consecutive splitting and permutation invariance come
  from the exact earlier `thm-generalised-associativity`; no arbitrary-finite-set
  summation result from the later incidence-algebra page is cited.
- Absolute convergence is convergence of the real series of moduli. Complex
  rearrangement and grouping claims are proved coordinatewise or through the
  published R^2 theorem.
- For the complex Cauchy product, prove the finite coordinate expansion inline.
  Bound its modulus by the real Cauchy product of the two modulus sequences,
  use `cor-cauchy-product-absolute` and `thm-direct-comparison-test` for absolute
  convergence, and compute the real and imaginary sums from the four real
  Cauchy products using `lem-series-linearity` and componentwise convergence.
- For the roots-of-unity sum, use the explicit list indexed by `n`, prove the
  cyclic successor map is a permutation, invoke the exact permutation clause
  of `thm-generalised-associativity` read additively, and then cancel
  `zeta-1`; do not cite arbitrary finite-set reindexing.
- Arg takes values in (-pi,pi]. Principal Log is defined on C minus {0}; it is
  continuous on the usual slit plane, not across the nonpositive real axis.
  The no-global-continuous-log theorem concerns any continuous right inverse of
  exp on the whole punctured plane.
- exp has kernel 2pi i Z. Polar form uses r>0 and unique principal argument.
  The n-th-root theorem assumes n>=1; the root-sum corollary assumes n>=2.
- Principal powers and multivalued powers are kept distinct. The B-page power
  counterexample must name which convention is being refuted.
- The fundamental theorem of algebra is the minimum-modulus proof: polynomial
  growth gives a global minimizer; the first nonzero local term gives a
  descent direction if the minimum value is nonzero. No Liouville theorem,
  complex differentiation, compactification, or path integration is imported.
- For minimum-modulus attainment, choose a closed disk outside which
  `|p(z)|>|p(0)|`; prove it is a nonempty closed bounded subset of
  `C=R^2`, apply `thm-heine-borel-rn`, and then apply
  `thm-extreme-value-metric` to the continuous real-valued modulus. The later
  Euclidean-topology omnibus theorem is forbidden here.
- The definition def-complex-exponential is justified by
  lem-complex-exponential-series-converges-everywhere. Definitions that merely
  package already-defined operations do not receive spurious justified_by
  links.

## 3. Web source ledger

Every URL below was opened during Step 1. These sources ground the mathematical
claims and the planned statement packaging; they are not substitutes for
declared item dependencies.

- NIST DLMF, Trigonometric Identities:
  https://dlmf.nist.gov/4.21
- NIST DLMF, Chebyshev definitions and basic data:
  https://dlmf.nist.gov/18.3
- NIST DLMF, Chebyshev recurrences:
  https://dlmf.nist.gov/18.9
- NIST DLMF, explicit Chebyshev representations and special values:
  https://dlmf.nist.gov/18.5
- NIST DLMF, Chebyshev extremal/minimax properties:
  https://dlmf.nist.gov/18.38
- NIST DLMF, complex trigonometric functions:
  https://dlmf.nist.gov/4.14
- J. Lebl, Complex Numbers:
  https://www.jirka.org/ra/html/sec_complexnums.html
- J. Lebl, Complex Exponential, Trigonometric Functions, and Polar Form:
  https://www.jirka.org/ra/html/sec_complexexp.html
- J. Lebl, Fundamental Theorem of Algebra:
  https://www.jirka.org/ra/html/sec_fundalgeb.html
- complexanalysis.org, The Complex Exponential Function:
  https://complexanalysis.org/web/sec_exponential-function.html
- complexanalysis.org, Complex Exponents:
  https://complexanalysis.org/web/sec_complex-exponents.html
- M. Hutchings, Math 185 homework 2 (nonexistence of a global logarithm and
  computations such as i^i):
  https://math.berkeley.edu/~hutching/teach/185-2016/hw2.pdf

DLMF is the primary source for the trigonometric/Chebyshev formulas. Lebl is
the principal source for the complex field, exponential, logarithm, roots, and
minimum-modulus FTA proof. The other two complex-analysis sources corroborate
branch and multivalued-power conventions.

## 4. Expected authorship ledger

The following is the Step-2 expected provenance. Step 5 must write the same
classification into item frontmatter and must preserve the source ledger.

### 4.1 literature-derived definitions

These are standard definitions adapted only to the library's notation. Their
proof field is not applicable.

- def-real-polynomial-degree-leading-coefficient-and-monic (definition; fundamental-trigonometric-identities)
- def-chebyshev-polynomials-first-and-second-kind (definition; fundamental-trigonometric-identities)
- def-complex-numbers-and-arithmetic (definition; the-complex-exponential-and-eulers-formula)
- def-complex-integer-powers (definition; the-complex-exponential-and-eulers-formula)
- def-complex-conjugate-real-imaginary-part-and-modulus (definition; the-complex-exponential-and-eulers-formula)
- def-complex-metric-convergence-and-continuity (definition; the-complex-exponential-and-eulers-formula)
- def-complex-series-power-series-and-absolute-convergence (definition; the-complex-exponential-and-eulers-formula)
- def-complex-exponential (definition; the-complex-exponential-and-eulers-formula)
- def-complex-logarithms-principal-logarithm-and-complex-powers (definition; the-complex-exponential-and-eulers-formula)
- def-complex-trigonometric-and-hyperbolic-functions (definition; the-complex-exponential-and-eulers-formula)
- def-complex-polynomial-degree-and-monic (definition; the-complex-exponential-and-eulers-formula)

### 4.2 ai-altered, source-backed statements

Every item below packages a standard source-backed fact to exact local domains,
edge cases, and dependency seams. Expected proof provenance is ai-altered when
the cited source contains the proof shape and ai-generated only for the local
assembly details; the author must choose and record the narrower truthful
value at Step 5. No item in this group may be labelled literature-derived
unless its final wording and proof are actually traced clause-by-clause.

- thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions (theorem; fundamental-trigonometric-identities)
- thm-cofunction-supplementary-and-reflection-identities (theorem; fundamental-trigonometric-identities)
- thm-sine-and-cosine-subtraction-formulas (theorem; fundamental-trigonometric-identities)
- thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant (theorem; fundamental-trigonometric-identities)
- thm-double-angle-and-power-reduction-identities (theorem; fundamental-trigonometric-identities)
- thm-triple-angle-identities (theorem; fundamental-trigonometric-identities)
- thm-half-angle-identities-with-sign-conditions (theorem; fundamental-trigonometric-identities)
- thm-product-to-sum-and-sum-to-product-identities (theorem; fundamental-trigonometric-identities)
- thm-tangent-half-angle-rational-parametrization (theorem; fundamental-trigonometric-identities)
- thm-sine-and-cosine-parametrize-the-unit-circle (theorem; fundamental-trigonometric-identities)
- cor-harmonic-addition-formula (corollary; fundamental-trigonometric-identities)
- lem-real-polynomial-factor-at-a-root (lemma; fundamental-trigonometric-identities)
- thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots (theorem; fundamental-trigonometric-identities)
- lem-chebyshev-degree-leading-coefficients-and-extreme-values (lemma; fundamental-trigonometric-identities)
- thm-chebyshev-multiple-angle-identities (theorem; fundamental-trigonometric-identities)
- thm-real-de-moivre-binomial-multiple-angle-formulas (theorem; fundamental-trigonometric-identities)
- thm-chebyshev-minimax-monic-polynomial (theorem; fundamental-trigonometric-identities)
- ex-morries-law (example; fundamental-trigonometric-identities-examples)
- ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees (example; fundamental-trigonometric-identities-examples)
- ex-first-chebyshev-polynomials (example; fundamental-trigonometric-identities-examples)
- thm-complex-numbers-form-a-field (theorem; the-complex-exponential-and-eulers-formula)
- lem-binomial-theorem-over-complex-numbers (lemma; the-complex-exponential-and-eulers-formula)
- lem-complex-conjugation-and-modulus-laws (lemma; the-complex-exponential-and-eulers-formula)
- thm-complex-plane-is-complete (theorem; the-complex-exponential-and-eulers-formula)
- thm-absolute-convergence-of-complex-series (theorem; the-complex-exponential-and-eulers-formula)
- thm-cauchy-hadamard-for-complex-power-series (theorem; the-complex-exponential-and-eulers-formula)
- lem-cauchy-product-of-absolutely-convergent-complex-series (lemma; the-complex-exponential-and-eulers-formula)
- lem-complex-exponential-series-converges-everywhere (lemma; the-complex-exponential-and-eulers-formula)
- thm-complex-exponential-addition-and-real-extension (theorem; the-complex-exponential-and-eulers-formula)
- thm-eulers-formula (theorem; the-complex-exponential-and-eulers-formula)
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity (corollary; the-complex-exponential-and-eulers-formula)
- thm-kernel-and-fibres-of-complex-exponential (theorem; the-complex-exponential-and-eulers-formula)
- thm-polar-form-with-unique-principal-argument (theorem; the-complex-exponential-and-eulers-formula)
- thm-complex-exponential-surjects-onto-the-punctured-plane (theorem; the-complex-exponential-and-eulers-formula)
- cor-complex-de-moivre-formula (corollary; the-complex-exponential-and-eulers-formula)
- thm-complex-nth-roots-and-roots-of-unity (theorem; the-complex-exponential-and-eulers-formula)
- cor-sum-of-roots-of-unity (corollary; the-complex-exponential-and-eulers-formula)
- thm-classification-of-complex-logarithms (theorem; the-complex-exponential-and-eulers-formula)
- thm-no-continuous-logarithm-on-the-punctured-complex-plane (theorem; the-complex-exponential-and-eulers-formula)
- thm-complex-trigonometric-hyperbolic-dictionary (theorem; the-complex-exponential-and-eulers-formula)
- lem-complex-polynomial-growth-and-minimum-modulus (lemma; the-complex-exponential-and-eulers-formula)
- lem-dalembert-minimum-modulus-descent (lemma; the-complex-exponential-and-eulers-formula)
- thm-fundamental-theorem-of-algebra-minimum-modulus-proof (theorem; the-complex-exponential-and-eulers-formula)
- ex-all-values-of-i-to-the-i (example; the-complex-exponential-and-eulers-formula-examples)
- ex-all-complex-logarithms-of-minus-one (example; the-complex-exponential-and-eulers-formula-examples)
- ex-fifth-roots-of-unity (example; the-complex-exponential-and-eulers-formula-examples)
- ex-complex-sine-is-unbounded-on-the-imaginary-axis (example; the-complex-exponential-and-eulers-formula-examples)
- cex-principal-complex-powers-exponent-law (counterexample; the-complex-exponential-and-eulers-formula-examples)
- ex-one-equals-exp-two-pi-i-logarithm-paradox (example; the-complex-exponential-and-eulers-formula-examples)
- ex-complex-geometric-power-series (example; the-complex-exponential-and-eulers-formula-examples)

### 4.3 ai-generated, non-load-bearing finite witnesses

These examples/counterexamples are local generated witnesses. Their role is
diagnostic only: no A-page theorem and no later page dependency may cite them.
Step 5 must record ai-generated for both statement and proof and retain a
direct substitution/truth check.

- ex-trigonometric-identities-worked-at-pi-over-twelve (example; fundamental-trigonometric-identities-examples)
- cex-unsigned-half-angle-formula (counterexample; fundamental-trigonometric-identities-examples)
- cex-tangent-addition-formula-without-domain (counterexample; fundamental-trigonometric-identities-examples)
- cex-complex-continuous-multiplicative-map-not-the-standard-exponential (counterexample; the-complex-exponential-and-eulers-formula-examples)

Generation roles:

- ex-trigonometric-identities-worked-at-pi-over-twelve: arithmetic witness for
  several A-page identities.
- cex-unsigned-half-angle-formula: a quadrant witness showing the missing sign.
- cex-tangent-addition-formula-without-domain: a denominator/domain witness.
- cex-complex-continuous-multiplicative-map-not-the-standard-exponential: the
  explicit map from the prose scaffold, checked directly from the real
  addition formulas.

## 5. Published dependency ledger

A full disk read was performed for every published external target, including
frontmatter and its exact Statement or Definition section. All are status
published; no target has provenance.statement = ai-generated. Internal
dependencies are earlier in this manifest.

### 5.1 Source-checked ai-altered published targets

These require the source-checked route rather than an authorship label alone:

- cor-trigonometric-parity-and-pythagorean-identity
- def-natural-logarithm
- def-pi-via-first-positive-cosine-zero
- def-sine-and-cosine-by-power-series
- def-tangent-cotangent-secant-cosecant
- thm-natural-logarithm-laws
- thm-quarter-turn-values-and-shift-formulas
- thm-sine-and-cosine-addition-formulas
- thm-sine-cosine-signs-monotonicity-and-ranges
- thm-sine-cosine-zero-sets-and-fundamental-period

Their exact trigonometric/logarithmic clauses were compared with the DLMF and
Lebl sources listed in section 3.

### 5.2 Exact-section-reviewed legacy/unclassified published targets

These were accepted by exact section review plus established mathematical
knowledge. Complex/vector/completeness claims were additionally compared with
Lebl; Chebyshev-specific claims use DLMF.

- cor-exponential-reciprocal-and-positivity
- def-binomial-coefficient
- def-canonical-natural
- def-cauchy-in-metric
- def-factorial-and-falling-factorial
- def-field
- def-finite-sum
- def-integer-power
- def-integers
- def-limsup-liminf
- def-metric-continuity
- def-metric-convergence
- def-metric-space
- def-monoid-finite-product
- def-p-norms-on-rn
- def-real-exponential-function-and-e
- def-real-numbers
- def-real-power-series-and-radius-of-convergence
- def-series
- def-series-of-vectors-and-rearrangement
- lem-exponential-series-has-infinite-radius
- lem-finite-sum-laws
- lem-limsup-epsilon-characterisation
- lem-nat-embeds-int
- lem-p-norms-are-norms-and-induce-the-published-metrics
- lem-series-linearity
- lem-power-difference-factorisation
- cor-cauchy-product-absolute
- thm-absolute-convergence-in-rn
- thm-algebra-of-continuous-functions
- thm-pascals-rule
- thm-binomial-theorem
- thm-componentwise-convergence-and-completeness
- thm-componentwise-limits-and-continuity
- thm-direct-comparison-test
- thm-exponential-is-strictly-increasing
- thm-exponential-limits-and-range
- thm-extreme-value-metric
- thm-generalised-associativity
- thm-heine-borel-rn
- thm-extreme-value-r
- thm-geometric-series
- thm-grouping-of-series
- thm-induction-principle
- thm-intermediate-value
- thm-nth-roots-exist
- thm-of-archimedean
- thm-of-square-roots
- thm-reals-ordered-field
- thm-recursion
- thm-root-test

No external fallback dependency is needed. No dependency points to another
frontier batch. The only cross-pair seam inside this batch is the intentional
RA-33 page requirement on the RA-31 A page.

## 6. Proof closure, boundaries, and risk notes

### 6.1 High-risk proof obligations

- Natural domains: every identity involving tan, cot, sec or csc must prove
  equality only after verifying all displayed denominators are nonzero.
- Half angles: derive the square formula first, then justify the sign from the
  stated interval/quadrant.
- Unit circle: prove existence and the half-open uniqueness convention
  separately.
- Chebyshev minimax: establish degree and leading coefficient first; use the
  n+1 alternating extrema to force at least n sign-change roots for the
  difference, contradicting its degree at most n-1 under a strictly smaller
  norm.
- Complex Cauchy product: absolute convergence licenses the double-series
  regrouping. The real-only Cauchy-product definition is deliberately not used
  as though it were polymorphic.
- exp addition: the local complex binomial lemma licenses the coefficient
  identity. Agreement with real exp is a separate clause.
- Euler formula: regroup the absolutely convergent power series coordinatewise;
  do not invoke the formula to prove a prerequisite used in its own proof.
- Kernel/fibres: use Cartesian form, positivity of real exp, and the published
  real sine/cosine zero sets. Check both inclusions.
- No continuous logarithm: evaluate a hypothetical branch around
  theta -> exp(i theta), use continuity plus the discrete kernel to force the
  integer lift constant, then compare endpoints.
- FTA: isolate the least nonzero coefficient after translation, choose an
  explicit phase cancelling its leading direction, control the higher-order
  remainder, and obtain a strict local decrease.

### 6.2 Boundary matrix

- n=0: Chebyshev base cases and multiple-angle formulas are explicit.
- n=1: minimax and root formulas are checked separately where a general
  root-count or geometric-sum argument degenerates.
- n>=2: root-of-unity sum only.
- z=0: excluded from polar form and logarithms; included in exp and
  polynomial statements.
- zero polynomial: excluded from degree, leading coefficient and monic.
- endpoints: [0,2pi) for unique angle, (-pi,pi] for Arg, [-1,1] for minimax.
- empty/nonempty choice: every minimizer claim first proves nonempty compact
  sublevel containment; no choice from an empty family occurs.
- iff claims: quotient-domain identities, kernel/fibre classification, and
  Chebyshev equality cases must prove both applicable directions.

### 6.3 Finite smoke checks

No retained theorem is a finite graph/group/counting classification of the
kind supported by the repository smoke-test convention, so proof contracts
use empty finite_smoke arrays. The B-page numerical examples are proof items,
not substitutes for A-page proofs. At Step 5 their direct computations must be
written as numbered derivations.

## 7. Dropped and rescoped source requests

- Chebyshev orthogonality is dropped from this batch because the required
  improper-integral/weighted-inner-product seam is not yet published.
- The Weierstrass substitution is retained only as a rational parametrization;
  its differential integration form is deferred to RA-32.
- Reflection in 3pi/4 is covered as a consequence/evaluation within the
  cofunction-supplementary-reflection theorem, not minted as a mysterious
  second reflection operation.
- Complex termwise differentiation is dropped because complex derivatives are
  not defined on this spine.
- Euler's formula has one complete power-series proof. The three requested
  alternatives would duplicate the result or import unavailable machinery.
- Exact-sequence notation is dropped; the concrete kernel/fibre theorem
  preserves the mathematical content needed here.
- Path dependence of the complex logarithm is deferred with path integration.
  The elementary no-global-continuous-log theorem is retained.
- FTA is retained, but only through the elementary minimum-modulus proof.

## 8. Collision, capacity, and closure report

- Four pages: orders 185, 186, 189, 190.
- Item counts: 19, 6, 32, 8 (65 total).
- All 65 item IDs are unique.
- No planned item ID collides with items/ or research/plan-spec.json.
- Every dependency is either an earlier item in the same A page, an item on the
  earlier A page in this batch, or a published external item.
- B pages depend only on their A page at page level and are leaves.
- A pages remain below the 40-item cap; B pages remain below the 30-item cap.
- The manifest makes no item, library-page, or plan-spec mutation.

## 9. Step-2 disposition

The four-page manifest is ready for the orchestrator's Step 3. Step 5 must
synchronize each planned internal-source quote in the proof-contract file to
the exact authored Statement/Definition text, keep every numbered derivation
step represented exactly once, and rerun the strict proof-contract gate after
the item files exist.

## 10. Step-3.5 dependency-closure repair

The Step-4 dependency gate exposed two scaffold defects before authoring.

1. `lem-binomial-theorem-over-complex-numbers`,
   `lem-cauchy-product-of-absolutely-convergent-complex-series`, and
   `cor-sum-of-roots-of-unity` cited
   `lem-finite-sum-reindexing-and-fubini`, whose home page has order 203 and is
   later than this page at order 189. The citation has been removed from every
   affected item and contract. Initial-segment complex sums now use the exact
   earlier `def-monoid-finite-product` and the consecutive-splitting and
   permutation clauses of `thm-generalised-associativity`, both on the
   published order-24 monoid page. The contracts require the author to write
   the actual shift, cyclic permutation, and componentwise grouping arguments
   inline. The complex Cauchy product no longer cites the real double-series
   theorem either: it reduces to four instances of the published real
   `cor-cauchy-product-absolute`, with `thm-direct-comparison-test` controlling
   the modulus series and `lem-series-linearity` recombining coordinates.
2. `lem-complex-polynomial-growth-and-minimum-modulus` cited
   `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, whose home
   page has order 257. It now cites the published order-120
   `thm-heine-borel-rn` and `thm-extreme-value-metric`, plus the earlier
   componentwise-continuity theorem. The complex A page now declares
   `compactness-in-metric-spaces` in `requires`. Its proof contract separately
   requires proof that the chosen disk is nonempty, closed, and bounded before
   Heine--Borel, and proof that the modulus of the polynomial is continuous
   before the metric extreme-value theorem.

These changes introduce no forward reference, no external fallback, and no
dependency on another Frontier 8 batch. They change only the scaffold,
proof-contract, and notes artifacts; no item, library page, or plan-spec entry
was authored or edited by this repair.

## 11. Step-5 authoring record

Beta authored all 65 scoped items and the four matching draft page compositions.
The 11 definitions retain `literature-derived` statements with
`not-applicable` proof provenance. The 50 source-backed claims, proofs, and
verifications retain `ai-altered` component provenance: they follow the DLMF
or Lebl treatments in section 3, while their local domain qualifications,
dependency seams, and phase-stratified proofs are authored for this library.
The four local diagnostic witnesses listed in section 4.3 retain
`ai-generated` statement and proof provenance and their prescribed generation
roles; direct substitution was used for each witness. No generated statement is
a dependency target.

During authoring, the Chebyshev degree lemma was narrowed to its recurrence
consequences; the alternating-extrema clause now follows from the earlier
multiple-angle theorem, which is an explicit minimax dependency together with
the intermediate-value theorem. This removes an otherwise forward proof route.
The complex-exponential definition now names its `justified_by` convergence
lemma, and the logarithm definition no longer states the later classification
theorem as a definition. The punctured-plane logarithm proof explicitly
declares the exponential addition law it uses. No external fallback or
published-dependency repair was needed.

Final scoped gates: `reflow` unchanged; `precheck` passes for all 54
proof-bearing items; strict proof contract passes 54/54; `content-policy`
passes 65/65; scoped `rendercheck`, `prosecheck`, and `citecheck` pass. The
global dependency gate has no Batch-2 error, but currently reports five
unrelated YAML-title escapes in other in-flight item files.
