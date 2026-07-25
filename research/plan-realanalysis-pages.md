# Real Analysis track: short single-topic pages (working design)

Owner constraints: (1) pages come in A/B pairs, A = definitions + theorems +
false statements, B = examples + counterexamples; (2) each page SHORT and
dedicated to a well-defined topic; (3) ZERO circularity, mechanically verified.

Granularity target: **A page 12-25 items, B page 8-20 items.** (Published pages
today run 33-40, which the owner judged too long.)

## The circularity discipline

The whole stack is a STRICT LINEAR ORDER of pages. An item may cite only items on
its own page (earlier in the list) or on a strictly earlier page. A linear order
admits no cycles, so circularity is impossible by construction; the validator
(`validate-plan.mjs`) confirms no page cites a later one.

**One deliberate exception: B pages are leaves.** Nothing in the library depends
on an examples page, so a B page may cite forward. This matters exactly once, and
it is DECISION D-TRIG below.

## Already published; do not re-derive

`construction-of-the-natural-numbers` · `construction-of-r-via-cauchy-sequences`
· `construction-of-r-via-dedekind-cuts` · `foundations-of-the-real-numbers`
(field/ordered field/Archimedean/complete ordered field, abs value, triangle
inequality, SQUARE roots only, Q dense, uniqueness of the complete ordered field,
equivalence of the two constructions).

TO VERIFY before authoring RA-01: whether `def-complete-ordered-field` already
contains a usable definition of supremum, or whether standalone `def-supremum` /
`def-infimum` items are needed.

---

# The pages, in reading order

### Block I: the completeness toolkit

**RA-01 Suprema and Infima** <- published foundations
sup/inf, max/min, bounded sets; the epsilon-characterization of sup; inf as
-sup(-S); monotonicity under inclusion; sup of a sum, of a scalar multiple, of a
union; sup of a bounded function; sup over a product set; the approximation
property. B: computations, sup not attained, sup of an empty/unbounded set.

**RA-02 Roots, Rational Powers, and Classical Inequalities** <- RA-01
existence and uniqueness of n-th roots (generalizing the published square-root
theorem); rational powers; the laws of rational exponents; **Bernoulli's
inequality in full generality** (r >= 1 or r <= 0; reversed for 0 <= r <= 1; the
strengthened form with the floor(r/2)x^2 term); the binomial theorem; AM-GM;
Cauchy-Schwarz for finite sums. B: five proofs of Bernoulli, five of AM-GM
(induction, binomial, convexity, forward-backward, x <= e^{x-1} deferred).

**RA-03 Countability and the Uncountability of R** <- RA-01
equinumerosity, finite/countable/uncountable; countable unions and subsets;
Z and Q countable; Cantor's diagonal argument; R uncountable; every interval
uncountable; the irrationals are uncountable and dense; Cantor's power-set
theorem; Cantor-Schroder-Bernstein. B: an explicit enumeration of Q, the
diagonal construction, the algebraic numbers are countable.

### Block II: sequences

**RA-04 Sequences and Limits** <- RA-01
sequence, convergence, divergence, divergence to +-infinity, boundedness,
monotone; uniqueness of limits; convergent implies bounded; algebra of limits;
the order limit theorem; squeeze; |a_n| -> |a|. B: 1/n, r^n, sqrt(n+1)-sqrt(n),
the classical divergences.

**RA-05 Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness**
<- RA-04, RA-02
monotone convergence theorem; nested interval property; subsequences and
subsequential limits; the monotone-subsequence (peak/rising-sun) lemma;
**Bolzano-Weierstrass**; Cauchy sequences; Cauchy implies bounded; Cauchy with a
convergent subsequence converges; **the Cauchy criterion in R**; contractive
sequences. B: the Babylonian sequence for sqrt 2; a Cauchy sequence of rationals
with no rational limit; sqrt(n) with null consecutive differences is not Cauchy;
nested OPEN intervals with empty intersection.

**RA-06 limsup, liminf, and Subsequential Limits** <- RA-05
limsup/liminf; the extended real line; existence; convergence iff
limsup = liminf; limsup is the largest subsequential limit; the subsequential
limit set is closed; subadditivity; the **ratio-to-root inequality**
liminf(a_{n+1}/a_n) <= liminf a_n^{1/n} <= limsup a_n^{1/n} <= limsup(a_{n+1}/a_n)
(this is WHY the root test dominates the ratio test, and it belongs here, not in
the series block); standard limits n^{1/n} -> 1, p^{1/n} -> 1,
n^alpha/(1+p)^n -> 0, x^n/n! -> 0. B: a sequence whose subsequential limit set is
all of R*; the strict five-term liminf/limsup chain; 2 + sin(ln n) has ratio -> 1
and limit-point set [1,3] (uses trig: see D-TRIG); (-1)^n.

**RA-07 Equivalent Forms of Completeness** <- RA-05, RA-06
The five-way equivalence: least upper bound <=> monotone convergence +
Archimedean <=> nested intervals + Archimedean <=> Bolzano-Weierstrass <=>
Cauchy completeness + Archimedean. Cambridge IA proves five of these as separate
lemmas; Abbott's §2.6 epilogue does the same. Also **Cesaro means**,
**Stolz-Cesaro**, Silverman-Toeplitz and Toeplitz's lemma (they fit nowhere else
and are cheap here). B: **G&O Ch.1 item 11** in full: on a "closed interval" of a
non-complete ordered field, EVT, IVT, Rolle, MVT, uniform continuity and
"f' = 0 implies constant" ALL fail simultaneously. The single best motivation for
the completeness axiom in the literature. Plus: a Cauchy-complete but not
complete ordered field; an ordered field in which Q is not dense; a field ordered
in two distinct ways; a non-Archimedean ordered field.

### Block III: series

**RA-08 Series: Convergence and the Nonnegative Tests** <- RA-06
partial sums, convergence, tails; the n-th term test; the Cauchy criterion;
linearity; geometric and telescoping series; bounded partial sums for nonnegative
series; direct and limit comparison; **Cauchy condensation**; the p-series for
RATIONAL p (real p is completed on RA-27); ratio and root tests in limsup/liminf
form; root strictly dominates ratio (citing RA-06); Raabe, Bertrand, Gauss, and
**Kummer's test** as the common generalization (ratio/Raabe/Bertrand are the
cases zeta_n = 1, n, n log n); the **Abel-Dini theorem** (no slowest divergent
series, hence no universal comparison test). B: the harmonic series;
sum 1/(n log n) diverges and sum 1/(n(log n)^2) converges with ratio and root
both exactly 1; 2^{-n+(-1)^n} defeats the ratio test but not the root test;
n^{-1/2} and n^{-2} both have root limit 1 (L = 1 is genuinely inconclusive both
ways); the Bertrand family gives arbitrarily slowly convergent series.

**RA-09 Absolute and Conditional Convergence; Rearrangement; Products**
<- RA-08
absolute, conditional and unconditional convergence; rearrangement; **Abel
summation by parts**; **Dirichlet's test**; **Abel's test**; the alternating
series test with error bound; absolute implies convergent; **Dirichlet's
rearrangement theorem** (absolute implies unconditional); **the Riemann series
theorem**; unconditional <=> absolute in R; **Levy-Steinitz** (in R^d the
rearrangement sums form an affine subspace) and Sierpinski's refinement;
**Cauchy products** and **Mertens' theorem**; grouping; Fubini for double series;
infinite products with the sum p_n^2 criterion; decimal expansions as a theorem.
B: the alternating harmonic series rearranged to (3/2) log 2 and to any
prescribed real; the Cauchy product of sum (-1)^n/sqrt(n+1) with itself diverges;
in R^2 the rearrangement sums form a LINE, not the plane; a double array with
iterated sums 0 and -1; product(1 - 1/n) = 0 explains why 0 is excluded from
product convergence; product(1 + (-1)^n/sqrt n) diverges though the series
converges.

### Block IV: topology of R

**RA-10 Topology of R** <- RA-05, RA-03
open, closed, interior, closure, boundary, limit and isolated points, dense;
neighbourhoods; the **structure theorem for open subsets of R** (a countable
disjoint union of open intervals, an order-theoretic fact with no general
analogue); **Heine-Borel in R by bisection** (NOT as a corollary of Tychonoff);
compact implies closed and bounded and conversely; compact iff sequentially
compact; **connected subsets of R are exactly the intervals**; perfect sets; a
nonempty perfect set is uncountable. B: intersection of (-1/n, 1/n);
[0,1] cap Q is closed and bounded in Q and not compact; an open cover of (0,1)
with no finite subcover; a set neither open nor closed.

**RA-11 The Cantor Set, Baire Category, and Measure Zero in R** <- RA-10
nowhere dense, meager, residual, F-sigma, G-delta; measure zero; content zero;
**the Baire category theorem in R** (nested-interval proof); countable sets are
null; countable unions of null sets are null; content zero implies null and the
converse FAILS; the Cantor set (compact, perfect, uncountable, nowhere dense,
null, totally disconnected, homeomorphic to {0,1}^N); the **fat
(Smith-Volterra-Cantor) set** (nowhere dense, POSITIVE measure); the Cantor
function; Q is F-sigma and not G-delta. B: Q covered by intervals of total length
epsilon; the fat Cantor set's measure computed; two homeomorphic perfect nowhere
dense sets of which only one is null (measure is not a topological invariant);
two homeomorphic sets of different Baire category.

### Block V: continuity

**RA-12 Limits of Real Functions** <- RA-10, RA-04
cluster point; the epsilon-delta limit; one-sided limits; limits at and to
infinity; the **sequential (Heine) criterion**; uniqueness; algebra of limits;
order preservation; squeeze; local boundedness; two-sided iff both one-sided;
**composition of limits with the correct hypothesis**. B: psi(1/x) has no limit
at 0 (trig-free, using psi = dist(.,Z)); the precise composition failure
(f(u) = 0 for u != 0, f(0) = 1, g == 0: lim f = lim g = 0 but lim f(g(x)) = 1).

**RA-13 Continuity, IVT, EVT, and Uniform Continuity** <- RA-12
continuity at a point and on a set; the sequential criterion; algebra and
composition; the **preimage-of-open characterization**; continuous image of a
compact set; the boundedness theorem; **EVT**; **IVT** (by bisection); continuous
image of an interval is an interval; existence of k-th roots as a corollary; the
1-D fixed point theorem; uniform continuity; **Heine-Cantor**; uniform continuity
preserves Cauchy sequences; **the continuous extension theorem from a dense
subset** (RA-27 needs exactly this for a^x); Lipschitz, Holder, and the strict
hierarchy Lipschitz < alpha-Holder < uniformly continuous < continuous;
alpha-Holder with alpha > 1 on an interval forces constancy; **Rudin 4.20, the
sharp converse to Heine-Cantor** (on a noncompact E there is an unbounded
continuous function, a bounded one with no maximum, and if E is bounded a
continuous one that is not uniformly continuous: compactness is EXACTLY what is
needed). B: Dirichlet nowhere continuous; x times Dirichlet continuous at exactly
0; 1/x and x^2 not uniformly continuous; sqrt uniformly continuous but not
Lipschitz, exactly 1/2-Holder; x^beta separates every Holder class; the product
of two uniformly continuous functions need not be uniformly continuous; EVT fails
on (0,1) and on [0,infinity); the IVT fails over Q.

**RA-14 Monotone Functions, Discontinuities, and Continuity Sets**
<- RA-13, RA-11, RA-03
classification of discontinuities (removable, jump, essential; Rudin's first and
second kind); **oscillation** at a point, and continuity iff oscillation zero;
{osc >= eps} is closed; one-sided limits of monotone functions always exist;
monotone functions have only first-kind discontinuities; **Froda's theorem** (the
discontinuity set of a monotone function is countable) and the **prescribed-jump
converse**; a continuous injection on an interval is strictly monotone; **the
continuous-inverse theorem** (RA-27 and RA-32 need this for log and arcsin);
the **continuity set is G-delta and the discontinuity set F-sigma**; every
G-delta is realized; **corollary via Baire: no function is continuous exactly on
Q**; upper and lower semicontinuity, the level-set characterization, and the
semicontinuous EVT; Baire class one and its dense G-delta of continuity points;
**Cauchy's functional equation** with the full regularity list (continuity at a
single point [Darboux 1875] OR monotonicity on an interval OR boundedness above
or below on a set of positive measure OR Lebesgue measurability OR sign-constancy
OR non-dense graph). B: Thomae continuous exactly at the irrationals; a monotone
function discontinuous exactly on Q; Froda sharp (discontinuous exactly at
{1 - 1/k}); a Hamel-basis additive function (unbounded on every interval,
non-measurable, dense graph); f(m/n) = n is finite everywhere and locally
unbounded at every point; a bounded function with no relative extremum anywhere
and nowhere semicontinuous; 1_Q is not Baire class 1 but is Baire class 2 (the
Baire hierarchy is strict); the **Conway base-13 function** (Darboux, nowhere
continuous).

### Block VI: differentiation

**RA-15 The Derivative and the Mean Value Theorems** <- RA-13
the derivative; the little-o/linear-approximation form; **Caratheodory's
characterization** (f differentiable at c iff f(x) - f(c) = phi(x)(x - c) with
phi continuous at c), which makes the chain rule a one-liner; differentiable
implies continuous; algebra of derivatives; the general Leibniz rule; the chain
rule; the derivative of an inverse; Fermat's interior extremum theorem; Rolle;
**Cauchy's MVT proved FIRST, with the ordinary MVT as the case g(x) = x**
(Rudin's dependency order, adopted deliberately); zero derivative implies
constant; monotonicity from the sign of the derivative; bounded derivative
implies globally Lipschitz. B: |x| not differentiable at 0; x^3 strictly
increasing with vanishing derivative; the MVT fails without endpoint continuity;
Rolle fails over Q; **the vector-valued MVT failure**, deferred to RA-22.

**RA-16 Darboux, L'Hopital, and Taylor's Theorem** <- RA-15
higher derivatives; **C^k and C^infinity**; **Darboux's theorem** and its
memorable form "a derivative has no jump discontinuity"; a function with a jump
is not a derivative; partial converses (Darboux + injective / monotone /
Baire-1 implies continuous); **L'Hopital** in all forms (0/0, infinity/infinity,
finite and infinite points, one-sided); **Taylor's theorem with all five
remainders**: Lagrange, Cauchy, Peano, integral (deferred to RA-19), and
**Schlomilch-Roche** as the general form containing Lagrange (p = n) and Cauchy
(p = 1); higher-order Rolle; the second- and higher-derivative tests; **Borel's
theorem** (every formal power series is some C^infinity function's Taylor
series); **Dini derivates**. B: the Hermite-spline oscillator w, and
x^2 w(1/x) differentiable with discontinuous derivative; x^{k+1}|x| is C^k and
not C^{k+1} (the owner's "differentiable k times but not k+1" family);
x + 2x^2 w(1/x) has positive derivative at 0 and is monotone in no neighbourhood;
**Boas's pair** f = x + sin x cos x, g = e^{sin x}(x + sin x cos x) (L'Hopital's
conclusion is strictly one-directional); L'Hopital fails when g' vanishes near a;
f(x) = x^2(2 + sin(1/x)) has an absolute minimum at 0 although f' changes sign
infinitely often in every neighbourhood.

**RA-17 Convexity** <- RA-16
convex and concave functions; midpoint convexity; supporting lines; convex iff
the derivative is increasing iff f'' >= 0; convex implies continuous on the
interior; **convex implies differentiable off a countable set, with one-sided
derivatives everywhere**; Jensen's inequality; inflection points. B: |x| convex
and not differentiable; a **discontinuous midpoint-convex function** (midpoint
convexity without measurability does not give convexity); Jensen applied;
x^4 defeats the second-derivative test.

### Block VII: the Riemann integral

**RA-18 The Riemann Integral: Definition and Integrability** <- RA-13, RA-11
partition, refinement, mesh; tagged partitions and Riemann sums; upper and lower
Darboux sums and integrals; **the equivalence of the Darboux and Riemann
definitions**; **Riemann's criterion**; continuous implies integrable (needs
Heine-Cantor); monotone implies integrable; finitely and countably many
discontinuities; **Lebesgue's criterion** (bounded and null discontinuity set).
B: the integral of x^2 from the definition; Thomae is integrable with integral 0;
**Dirichlet is not integrable**; **the indicator of a fat Cantor set is not
integrable although its discontinuity set is nowhere dense** (the example that
forces the Lebesgue criterion); a Riemann-integrable function with an arbitrary
prescribed F-sigma null discontinuity set.

**RA-19 Properties of the Integral and the Working FTC** <- RA-18, RA-15
linearity, monotonicity, additivity over subintervals, |int f| <= int |f|;
integrability of |f|, of fg, of max and min; **composition: continuous after
integrable is integrable, and the order matters**; the first and second (Bonnet)
mean value theorems for integrals; **FTC for continuous integrands, both parts**
(the working version; RA-39 sharpens it); integration by parts; substitution;
**Taylor's integral remainder**; the integral test for series; **Arzela's bounded
convergence theorem (1885)**, the Riemann-integral analogue of dominated
convergence, essentially never taught. B: Bartle & Sherbert's motivating pair
H(x) = 2 sqrt x (H' unbounded, so H' is not Riemann integrable) and its partner;
a Riemann-integrable function with no primitive; **a function with a primitive
that is not Riemann integrable**; spikes with integral 1 converging pointwise
to 0; a composition of integrable functions that is not integrable.

**RA-20 Bounded Variation and the Riemann-Stieltjes Integral** <- RA-19
bounded variation, total variation, positive and negative variation; the
**Jordan decomposition**; BV is closed under sums and products; BV implies
Riemann integrable; the Riemann-Stieltjes integral (refinement and mesh
definitions); existence for a continuous integrand against a BV integrator;
**Rudin's existence ladder**; RS integration by parts; reduction to the Riemann
integral for a C^1 integrator; **Young's Holder condition for RS existence**
(f in C^{0,alpha}, g in C^{0,beta}, alpha + beta > 1); the inclusion chain
C^1 < Lipschitz < AC < continuous and BV. B: the Cantor function as an
integrator, with int 1 dC = 1 while C' = 0 a.e.; **RS additivity FAILS when f and
alpha share a discontinuity**; a continuous function that is not BV
(x psi(1/x)); a continuous monotone g and continuous f with
int f dg != int f g' dx.

**RA-21 Improper Integrals** <- RA-19
improper integrals of the first, second and mixed kinds; absolute versus
conditional convergence; the **Cauchy principal value**; the p-test; tail
invariance; comparison; the Cauchy criterion; **Dirichlet's and Abel's tests for
integrals** (from the second MVT); **Frullani's integral**. B: a divergent
improper integral with a finite principal value; **a convergent improper integral
whose positive continuous integrand does not tend to 0** (the integral analogue
of the n-th term test is FALSE); one whose integrand is unbounded in every tail;
1/sqrt x on (0,1].

### Block VIII: R^n and function spaces

**RA-22 R^n as a Normed Space; Vector-Valued Functions** <- RA-13, RA-15
inner product, Euclidean norm, the p-norms; **Cauchy-Schwarz**; the parallelogram
law; equivalent norms; componentwise convergence; completeness of R^n;
Bolzano-Weierstrass and **Heine-Borel in R^n by bisection**; **all norms on R^n
are equivalent**; the operator norm; linear maps are Lipschitz; componentwise
derivatives and integrals; **the mean value INEQUALITY**, with the equality
false. B: t -> (t^2, t^3) defeats the mean value equality; **f(x) = cos x +
i sin x on [0, 2pi]** is the crispest failure (forward-citing, see D-TRIG);
p-norm equivalence constants on R^2; xy/(x^2+y^2) is separately continuous and
not jointly continuous.

**RA-23 Sequences and Series of Functions; Uniform Convergence**
<- RA-22, RA-19
pointwise and uniform convergence; the sup metric; uniformly Cauchy; the uniform
Cauchy criterion; a uniform limit of continuous functions is continuous;
**interchange with the integral**; **the derivative theorem** (f_n' -> g
uniformly plus convergence at one point); **Dini's theorem**; the **Weierstrass
M-test**; uniform Dirichlet and Abel tests; C(K) with the sup norm is complete.
B: x^n on [0,1]; **the moving bump** n.1_{[1/n,2/n]} with integral 1 converging
pointwise to 0; **G&O Ch.7 item 12: sequences satisfying any THREE of Dini's four
hypotheses and failing** (the cleanest proof in the literature that a theorem's
hypotheses are independent); **Rudin 7.2** s_{m,n} = m/(m+n) (the prototype
interchange failure); **Rudin 7.4** lim_n (cos m! pi x)^{2n} -> Dirichlet, a
double limit of continuous functions that is not Riemann integrable
(forward-citing); f_n(x) = x/(1 + n^2 x^2) converges uniformly yet f_n'(0) = 1;
a sequence converging pointwise on R but uniformly on no interval.

**RA-24 Approximation and Compactness in C(K)** <- RA-23, RA-11
equicontinuity, uniform equicontinuity, pointwise and uniform boundedness;
**Arzela-Ascoli**; **the Weierstrass approximation theorem** via Bernstein
polynomials; **Stone-Weierstrass**, real and complex; the **Baire-category proof
that the generic continuous function is nowhere differentiable**; the explicit
**Weierstrass nowhere-differentiable function** (spline form, by the M-test).
B: the three-way separation of Arzela-Ascoli's hypotheses (**Rudin 7.21**
x^2/(x^2 + (1 - nx)^2) is uniformly bounded and not equicontinuous;
f_n == n is equicontinuous and not bounded; sin(sqrt(t + 4 n^2 pi^2)) is both,
on a NONCOMPACT domain, and fails: compactness of the domain is essential);
**Rudin 7.20** sin nx is pointwise bounded with no pointwise convergent
subsequence; **complex Stone-Weierstrass fails without self-adjointness**;
**Stieltjes' moment example** e^{-x^{1/4}} sin(x^{1/4}) (polynomials are not
dense on unbounded intervals).

**RA-25 Power Series and Real-Analytic Functions** <- RA-23, RA-09
formal power series; radius of convergence; **Cauchy-Hadamard**; absolute
convergence inside, divergence outside, uniform convergence on compact
subintervals but NOT on the open interval; term-by-term differentiation and
integration; C^infinity on the interior; the coefficient formula and the
**identity theorem**; **re-expansion about an interior point**; real-analytic
functions; analytic implies C^infinity with the converse false; **Abel's limit
theorem**; Tauber's theorem; **Frobenius** (Abel is strictly stronger than
Cesaro); products, quotients, reciprocals and compositions of power series;
the **unit criterion in R[[X]]** (invertible iff a_0 is); the binomial series
with **Abel's sharp endpoint dichotomy** (Re alpha > 0 absolute; -1 < Re alpha
<= 0 conditional except at -1; Re alpha <= -1 divergent). B: sum x^n/n^2,
sum x^n/n, sum x^n all have radius 1 with three different endpoint behaviours;
sum n! x^n converges at one point only; **the converse of Abel's theorem fails**;
a C^infinity function whose Maclaurin series converges everywhere and represents
it at one point only; one whose Maclaurin series converges at one point only
(Borel).

### Block IX: the elementary functions

**RA-26 The Exponential Function** <- RA-25, RA-09
`rem-exponential-roadmap` stating the routes and the circularity hazards.
**E1** power series; **E3** the IVP y' = y, y(0) = 1; **E2** the product limit
(1 + x/n)^n; **E6** the functional equation with regularity (citing RA-14's
Cauchy equation); **E11** Bartle & Sherbert's Picard iteration, whose iterates
ARE the partial sums. Theorems: infinite radius; the addition formula by the
Cauchy product; exp > 0 and never 0; exp' = exp; strictly increasing; a bijection
onto (0, infinity); **exp beats every polynomial**; the equivalence theorem
E1 = E2 = E3 = E6 = E11 (landmark). The number e: sum 1/n!, the error bound
0 < e - s_n < 1/(n! n), **e is irrational**, and the UG-appropriate members of the
sixteen known characterizations. B: 2 < e < 3 with an explicit bound; the
**e^{-1/x^2} bump**, C^infinity with Taylor series identically zero; a smooth
compactly supported bump and a partition of unity; a **discontinuous solution of
f(x+y) = f(x)f(y)**; (1 + x/n)^n -> e^x but NOT uniformly on R; a C^infinity
function analytic at no point.

**RA-27 The Logarithm, General Powers, and the Sup Definition** <- RA-26, RA-19
log as exp inverse; **E4**: L(x) = int_1^x dt/t is well defined (integer powers
only, so no circularity), strictly increasing, L' = 1/x, L(xy) = L(x) + L(y),
bijective onto R, and its inverse solves y' = y, so E4 = E3. **E7** Rudin's
sup-over-rationals a^x = sup{a^q : q rational, q < x} and **E8** Tao's
limit-over-rationals (DISTINCT constructions, both needing RA-13's dense-extension
theorem). **E10** Landau's log x = lim 2^n (x^{1/n} - 1), with no integral and no
series. Then: the log laws including log(x^r) = r log x for REAL r; the series
for log(1+x) on (-1,1] with the endpoint by Abel; a^x := exp(x log a);
**`thm-power-agrees-with-rational-exponent`** (the owner's explicit requirement:
a^{p/q} in the new sense is the old algebraic q-th root of a^p); the laws of real
exponents; d/dx a^x and d/dx x^alpha; change of base; log grows slower than every
positive power; **the p-series for real p, closing RA-08**; convexity of exp and
hence AM-GM, **Young, Holder, Minkowski**; hyperbolic functions with the full
identity and inverse-logarithm inventory. B: 2^{sqrt 2} by the sup definition and
by exp(sqrt 2 log 2), agreeing; the alternating harmonic series equals log 2;
growth-rate comparisons; x^x -> 1 as x -> 0+; the log series diverges at -1.

**RA-28 Sine, Cosine, and the Definition of pi** <- RA-26
sin and cos by power series; sin' = cos, cos' = -sin; the Pythagorean identity;
the addition formulas; the ODE characterization y'' = -y; **the existence of a
positive zero of cos**, by the alternating-series bound cos 2 < -1/3
(Rudin R&CA's proof, the cleanest; the other five routes are recorded as a
remark); the smallest positive zero; **pi := 2 x_0**; **the convention split**
(Tao's pi := inf{x > 0 : sin x = 0}, no factor 2) with the lemma reconciling them
via sin 2x = 2 sin x cos x; values at multiples of pi/2; **2pi is the fundamental
period**; monotonicity intervals, zero sets and ranges; tan, cot, sec, csc.
B: **Bartle & Sherbert's bound sqrt 2 < gamma < sqrt(6 - 2 sqrt 3)**, giving
2.828 < pi < 3.185; the classical x sin(1/x) and x^2 sin(1/x) restated (closing
the loop with RA-16's spline versions); **`fs-sin-x-over-x-by-sector-areas`**:
the standard calculus proof that lim sin x / x = 1 via sin theta < theta < tan
theta COMPARES SECTOR AREAS and is therefore circular (arXiv:1302.1167).

**RA-29 Arc Length and Rectifiable Curves** <- RA-20, RA-22
**a curve is a MAPPING, not a point set** (Rudin Def 6.26 verbatim: two curves
with the same range can have different lengths); inscribed polygons; length as a
supremum; rectifiability; monotonicity under refinement; **rectifiable iff the
components are BV**, with length equal to the total variation; additivity;
invariance under monotone reparametrization; **invariance under translation and
rotation, and scaling by lambda under dilation** (the lemma that makes RA-30
work); **length = int |gamma'| for C^1 curves** (Rudin 6.27); arc-length
(unit-speed) reparametrization; lower semicontinuity under uniform convergence.
B: the graph of x sin(1/x) is continuous and non-rectifiable; the **Koch
snowflake** (infinite length, Hausdorff dimension log 4 / log 3); a simple arc of
infinite length with a tangent at every point; one of infinite length between
every pair of its points; **the Schwarz lantern**: inscribed polyhedra do NOT
compute surface area, so the arc-length definition has no two-dimensional
analogue and the RA-30 scaling argument is a fact about length alone.

**RA-30 pi: the Equivalent Characterizations** <- RA-29, RA-28, RA-19
t -> (cos t, sin t) is a bijection of [0, 2pi) onto the unit circle with unit
speed, so arc length equals the parameter; the circumference of a circle of
radius r is 2 pi r; **the ratio of circumference to diameter is one constant for
every circle, and equals pi** (from the scaling lemma; no calculus, no geometry
assumed); the area of the disc is pi r^2 via 2 int_{-1}^{1} sqrt(1 - x^2);
**A = Cr/2 is what forces the SAME pi into both formulas**; pi = 4 int_0^1
dt/(1+t^2); **Wallis' product**; **the Basel sum**; Weierstrass's 1841 proposal
pi/2 = int dx/sqrt(1-x^2); **Archimedes' bounds** 3 + 10/71 < pi < 3 + 1/7; the
**isoperimetric characterization** 4 pi A <= L^2; Stirling via Wallis;
`thm-all-definitions-of-pi-equivalent` (landmark); **Niven's proof that pi is
irrational**; remarks on Lindemann's transcendence and on Gauss-Legendre AGM,
Ramanujan and Chudnovsky. B: the circumference computed three ways; the disc area
by substitution; Niven worked in full; the **"pi = 4" staircase paradox**;
numerical Wallis and Basel.

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

**RA-32 Further Trigonometric Identities and Inverse Functions**
<- RA-31, RA-14, RA-25
**Lagrange's identities and the Dirichlet and Fejer kernels**; sums of infinitely
many angles; **Hermite's cotangent identity**, finite products and roots of
unity (product sin(k pi/n) = n/2^{n-1}); linear fractional transformations
(f_alpha o f_beta = f_{alpha+beta}); triangle identities (laws of sines, cosines,
tangents, cotangents; Mollweide; Ptolemy; the projection formula) and the
**conditional identities** for alpha + beta + gamma = 180 degrees; identities
without variables; **Euler's sine product** and the **cotangent partial-fraction
expansion by the Herglotz trick** (elementary, so no complex analysis needed);
Bernoulli- and Euler-number series for tan and sec. The **inverse trigonometric
functions** via RA-14's continuous-inverse theorem, their derivatives, their
power series, arctan x = int_0^x dt/(1+t^2), and the **Leibniz series** by Abel.
B: Machin's formula; numerical Leibniz; arcsin(sin x) is not x; arcsin is not
differentiable at +-1; **tan is unbounded on a bounded interval**;
sin(x^2) is bounded and continuous and NOT uniformly continuous.

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

### Block X: several variables

**RA-34 The Total Derivative in R^m -> R^n** <- RA-22, RA-16
directional and partial derivatives; the **total (Frechet) derivative**;
uniqueness; differentiable implies continuous; the derivative computes all
directional derivatives; the Jacobian; **continuous partials imply
differentiability**; the chain rule; the gradient and steepest ascent; the mean
value inequality; a vanishing derivative on a connected open set implies
constancy. B: xy/(x^2+y^2) (partials exist, discontinuous); x^2 y/(x^4 + y^2)
(every straight-line limit is 0, no limit exists); **x^3/(x^2+y^2)** (all
directional derivatives exist, not differentiable); **y(x^2+y^2)/x** (all
directional derivatives vanish at 0, discontinuous on a whole line); a
differentiable function that is not C^1; Lebl's **angle function on a slit
annulus** (bounded derivative, not globally Lipschitz: convexity is essential in
the mean value inequality).

**RA-35 Mixed Partials, Taylor, and Extrema in Several Variables** <- RA-34
C^k in several variables; multi-index notation; the Hessian;
**Clairaut-Schwarz** via **Rudin's rectangle lemma 9.40**, plus the weaker
**Peano** and **Young** hypothesis sets as separate items; symmetry of D^2 f as a
bilinear map and of D^r f under any permutation; Taylor in several variables;
the Hessian test; Lagrange multipliers; **Morse's lemma**. B: **xy(x^2-y^2)/(x^2+
y^2)** has unequal mixed partials; **Peano's surface** (y - x^2)(y - 2x^2), where
every line through the origin restricts to a strict local minimum yet there is no
extremum, and its smooth refinement with e^{-1/x^2}; **a single critical point
that is a strict local but not global minimum** (true only for n >= 2);
the monkey saddle; Lagrange multipliers at a degenerate constraint.

**RA-36 The Inverse and Implicit Function Theorems** <- RA-35, RA-23
the contraction mapping theorem (Banach) in R^n; **the inverse function
theorem**; **the implicit function theorem**; the rank theorem; diffeomorphisms.
B: polar coordinates as a local diffeomorphism; the implicit function theorem on
the circle; **the complex squaring map (x^2 - y^2, 2xy)** has invertible
derivative everywhere and is globally 2-to-1 (the IFT is irreducibly local);
**x + 2x^2 w(1/x)** has f'(0) = 1 and is injective on no neighbourhood, so the
IFT genuinely needs C^1 and not mere differentiability; f(x,y) = (x, xy);
the **Jacobian conjecture** as a live open problem.

**RA-37 The Riemann Integral in R^m and Jordan Content** <- RA-18, RA-22
rectangles and partitions; Darboux sums and the integral over a rectangle;
Riemann's criterion in R^n; continuous implies integrable; measure zero versus
**content zero** in R^n; **Lebesgue's criterion in R^n**; Jordan inner and outer
content; **Jordan measurable iff the boundary has measure zero**; the integral
over a Jordan measurable set; graphs of continuous functions have content zero;
C^1 images of null sets are null. B: a bounded plane set without area; a compact
one; a bounded open set built from a fat Cantor set whose boundary has positive
measure; **Munkres calls Jordan measurable sets "rectifiable"**, a real citation
hazard.

**RA-38 Fubini and Change of Variables** <- RA-37, RA-36
**Fubini for the Riemann integral, stated with UPPER AND LOWER integrals**
because the sections of an integrable function need not be integrable (the
version students most often get wrong); Fubini over type I and II regions;
partitions of unity; **the change of variables theorem** via Rudin's
factorization into primitive maps and flips; the linear case and the determinant;
polar, cylindrical and spherical coordinates; the volume of the n-ball;
**the Gaussian integral = sqrt(pi)**, closing the loop with RA-30; improper
multiple integrals by exhaustion. B: **Lebl Ex. 10.2.1** (f integrable on the
square with a non-integrable section: exactly why upper and lower integrals are
needed); (x^2 - y^2)/(x^2 + y^2)^2 has iterated integrals pi/4 and -pi/4;
a nonnegative f with both iterated integrals 0 and no double integral;
1_diagonal under Lebesgue times counting measure (Tonelli needs sigma-finiteness);
**Sierpinski's CH example**; change of variables fails without injectivity;
**Gabriel's horn** (finite volume, infinite lateral surface).

### Block XI: the fundamental theorems

**RA-39 The Fundamental Theorems of Calculus** <- RA-19, RA-20, RA-11
`rem-ftc-roadmap`. **FTC I in three strengths**: continuous f; **Rudin's pointwise
form** (f Riemann integrable makes F Lipschitz, and F' = f at every point of
continuity of f); and the Lebesgue statement. **FTC II in five strengths**:
f in C^1; **the weakest standard form** (f differentiable with f' Riemann
integrable, no continuity of f' assumed); **Rudin 6.21 requires differentiability
on the CLOSED interval while Lebl 5.3.1 requires only continuity on [a,b] plus
differentiability on (a,b)**, and **Bartle & Sherbert state it with a finite
exceptional set** (three genuinely different theorems, three items);
**Botsko's theorem** (countable exceptional set, with continuity of F
indispensable); and the absolutely continuous / Lebesgue form as the sharp
characterization. Antiderivatives differ by a constant; integration by parts and
substitution under the weakest hypotheses; **Leibniz's rule** for differentiating
under the integral sign; **Banach-Zarecki** (AC iff continuous, BV, and Luzin (N));
**Cousin's lemma** and a remark on the Henstock-Kurzweil repair.
B: **Volterra's function** (differentiable with bounded derivative that is not
Riemann integrable, on a fat Cantor set) as the centrepiece; **the Cantor
function** (continuous, increasing, C' = 0 a.e., int C' = 0 != 1); F(x) =
x sin(1/x) showing exactly how much slack the strong form has over the corollary;
sgn on [-1,1] (F = |x| is not differentiable at 0); Thomae (F == 0 so F' != f on
a dense set); a Riemann-integrable function with no primitive on any interval;
two continuous functions with everywhere-identical extended derivatives that do
not differ by a constant; **int_0^infinity sin x / x = pi/2** exists improperly
but is not Lebesgue integrable.

**RA-40 Line Integrals and the Gradient Theorem** <- RA-39, RA-34, RA-29
line integrals; conservative fields; closed and exact forms; star-shaped and
simply connected domains; **the gradient theorem** (the FTC for line integrals);
path independence iff conservative iff a gradient; the **Poincare lemma** on
star-shaped domains; **Green's theorem**; the arc-length function satisfies
s' = ||gamma'||, closing the loop with RA-29; `rem-stokes-outlook`.
B: **the vortex field** P = -y/(x^2+y^2), Q = x/(x^2+y^2), closed and not exact
on the punctured plane with circulation 2 pi (where topology enters analysis);
a solenoidal field on a simply connected region with no vector potential;
Green's theorem used to compute an area; Leibniz's rule failing without
domination.

---

# Count

40 pairs = 80 pages. A pages average ~18 items, B pages ~12, so roughly
40 x 30 = **1,200 items** for real analysis alone.

# Decisions this design raises (for the owner, one at a time)

**D-TRIG.** Blocks VI-VIII (RA-15 through RA-25) come BEFORE trigonometry is
constructed, because sin and cos need power series, which need uniform
convergence, which needs the MVT. The classical counterexamples there
(x^2 sin(1/x), sin(nx), the Weierstrass function, cos x + i sin x) therefore
cannot be stated in their usual form at that point. Three options:
  (a) trig-free substitutes throughout (the Hermite spline w built from
      t^2(3 - 2t), and psi = dist(., Z)), with RA-28B restating the classical
      forms. Self-contained, but non-standard notation for a reader.
  (b) let the B pages forward-cite RA-28, since B pages are leaves and no cycle
      results. Standard notation, but a reader at RA-16B sees a prerequisite 12
      pages later.
  (c) BOTH: spline version on the A page's false statements (self-contained) and
      classical version on the B page (forward-citing). Shows the phenomenon does
      not depend on trigonometry. Costs roughly 8 extra items.
  My recommendation: (c).
  **SETTLED 2026-07-25: (c).** The PROVED item is always trig-free, so nothing
  early depends on anything late; beside it sits a `rem-` naming the classical
  trig form. Those remarks are the only forward citations in the whole stack.
  They are now WHITELISTED per page in `plan-spec.json` (`forwardRefs`), on
  exactly eight B pages — RA-04, RA-10, RA-12, RA-13, RA-15, RA-16, RA-18, RA-23
  — and `validate-plan.mjs` permits them there and nowhere else, reporting each
  one rather than hiding it. Any further forward citation is a hard error.

**D-MVT.** Adopt Rudin's ordering, proving Cauchy's MVT first and obtaining the
ordinary MVT as the case g(x) = x. The sweep flags this as "a real alternative
dependency graph, not a stylistic quirk". Cheaper and it shortens the
stratification. Recommend yes.

**D-SPLIT-INTEGRAL.** The working FTC (continuous integrands) sits on RA-19
because RA-27 (log as an integral) and RA-29 (arc length) both need it; RA-39 is
the definitive treatment. Unchanged from my earlier proposal, still needs sign-off.

**D-SCOPE.** State-with-reference rather than prove: Lebesgue's differentiation
theorem, the AC/Lebesgue FTC, Henstock-Kurzweil, Lindemann-Weierstrass
transcendence, the Jacobian conjecture, Gauss-Legendre AGM, Wiener's Tauberian
theorem, Morse's lemma (or prove it), Green's theorem (or prove it).
