# Real Analysis series — my own draft (pre-merge)

## Existing published foundation (reusable, do not re-derive)
- `construction-of-the-natural-numbers` (foundations): Peano, ZFC ω, induction,
  recursion, N arithmetic/order, well-ordering, strong induction, categoricity.
- `construction-of-r-via-cauchy-sequences`, `construction-of-r-via-dedekind-cuts`.
- `foundations-of-the-real-numbers`: field/ordered field/Archimedean/complete
  ordered field, abs value, triangle ineq, sqrt existence, Q dense, uniqueness of
  the complete ordered field, equivalence of the two constructions.

Gaps in the existing foundation that the new series must supply early:
sup/inf toolkit, n-th roots (only square roots exist today), rational powers,
countability, Bernoulli/binomial, nested intervals.

## Page ordering (dependency-forced)

1  Sequences and Limits in R
2  Infinite Series of Real Numbers
3  Topology of R, Limits and Continuity
4  Differentiation of Real Functions
5  The Riemann Integral on R
6  Metric Spaces, R^n, and Vector-Valued Functions
7  Sequences and Series of Functions; Power Series
8  The Exponential and the Logarithm            [req 3]
9  Pi, Arc Length, and the Trigonometric Functions [req 4]
10 The Complex Exponential and Euler's Formula  [req 5]
11 Differentiation in R^m -> R^n
12 The Riemann Integral in R^m
13 The Fundamental Theorems of Calculus         [req 6]

Each is a PAIR: `A` = definitions + theorems + false statements,
`B` = examples + counterexamples (+ the supporting constructions they need).

## Structural decisions

- **B pages are leaves.** Nothing depends on a B page, so a B page may cite any
  A page, including a later one. No prerequisite cycles.
- **`fs` items live on A pages and are self-contained** (they construct whatever
  they need from A-page and earlier material). `ex`/`cex` live on B pages.
- **B page section 4** holds the auxiliary `def`/`lem` items that build the
  example objects (Cantor set, Thomae, Volterra, spline oscillator, ...), so the
  page renders both sections.
- **Trig-free oscillator.** Pairs 4-7 need `x^2 sin(1/x)`-style examples before
  trig exists. Substitute a C^k periodic polynomial spline (`def-hermite-wave`,
  built from `t^2(3-2t)` Hermite pieces); the classical sin/cos forms are
  revisited on 9B once trig is available.
- **FTC is split** (see decision D1): the working FTC for continuous integrands
  is proved on 5A because the integral definition of log (8A) and arc length
  (9A) need it; pair 13 is the definitive/sharpest treatment.

## Circularity hazards designed around
1. sin/cos by power series -> pi := 2 * first positive zero of cos -> arc length
   independently (sup of inscribed polygons) -> unit circle has speed 1 ->
   circumference/diameter = pi. Never define trig via arc length first.
2. log := integral of 1/t uses only integer powers; exp := its inverse; a^x :=
   exp(x log a); only then d/dx x^r = r x^{r-1} for real r.
3. p-series for rational p in pair 2 (condensation + n-th roots); real p
   completed on 8A.
4. Riemann integrability of continuous functions needs Heine-Cantor (pair 3).
5. Change of variables in R^m needs the inverse function theorem (pair 11).
6. Area of unit disc via 1-D integral on 9A; Jordan-content version on 12A.
7. Wallis/Basel/Stirling are downstream characterizations of pi, not definitions.
# Item lists, pairs 1-7 (my draft)

## PAIR 1 — Sequences and Limits in R

### 1A definitions
sup/inf; bounded above/below; n-th root; integer power; rational power;
sequence; limit of a sequence; bounded sequence; monotone sequence;
subsequence; subsequential limit; Cauchy sequence in R; limsup/liminf;
divergence to +-infinity; extended real line; nested interval; contractive
sequence; equinumerous; finite/countable/uncountable; cardinality order.

### 1A theorems
sup uniqueness; epsilon-characterization of sup; inf = -sup(-S); monotonicity of
sup under inclusion; sup of sum/scalar multiple; existence+uniqueness of n-th
roots; rational power well defined; laws of rational exponents; Bernoulli
inequality; binomial theorem; AM-GM.
Limit uniqueness; convergent => bounded; algebra of limits; order limit theorem;
squeeze; limit of |a_n| and of sqrt(a_n); monotone convergence theorem;
subsequences of a convergent sequence converge to the same limit; every sequence
has a monotone subsequence; Bolzano-Weierstrass; Cauchy criterion in R; limsup
characterization; converges iff limsup = liminf; limsup is the largest
subsequential limit; set of subsequential limits is closed; subadditivity of
limsup; nested interval property; ratio criterion for a_n -> 0; Cesaro means;
Stolz-Cesaro; a^{1/n} -> 1 and n^{1/n} -> 1; contractive => convergent.
Countability: subsets/countable unions of countable sets; Z and Q are countable;
R is uncountable; every interval is uncountable; irrationals are uncountable and
dense; Cantor's theorem on power sets.

### 1A false statements
every bounded sequence converges; if a_n b_n converges then both converge; one
convergent subsequence forces convergence; |a_{n+1} - a_n| -> 0 implies Cauchy;
the sup of a bounded set belongs to it; nested nonempty open intervals have a
common point; limsup(a+b) = limsup a + limsup b.

### 1B supporting constructions
Babylonian/Newton sequence for sqrt 2; the sequence (1 + 1/n)^n; an enumeration
of Q; the Cantor diagonal construction.

### 1B examples / counterexamples
1/n -> 0; r^n -> 0 for |r|<1; sqrt(n+1) - sqrt(n) -> 0; Babylonian sequence
converges to sqrt 2 monotonically; (1+1/n)^n is increasing and bounded by 3
(its limit is named e on 8A); n^{1/n} -> 1; a sequence whose subsequential
limits are all of R; limsup/liminf of (-1)^n (1 + 1/n); explicit Cantor
diagonal argument.
(-1)^n bounded not convergent; sqrt(n) has null consecutive differences but is
not Cauchy; product converges while factors diverge; sup not attained;
intersection of (0,1/n) is empty; intersection of [n, infinity) is empty;
limsup of a sum is strictly smaller; divergent + divergent = convergent; a
Cauchy sequence of rationals with no rational limit; Q is dense but proper.

---

## PAIR 2 — Infinite Series of Real Numbers

### 2A definitions
partial sums; convergence/sum of a series; nonnegative series; absolute and
conditional convergence; alternating series; rearrangement; Cauchy product;
double series; infinite product and its convergence; grouping; decimal
expansion.

### 2A theorems
linearity; n-th term test; Cauchy criterion for series; geometric series;
telescoping series; nonnegative series converge iff partial sums bounded;
comparison test; limit comparison test; Cauchy condensation; p-series (rational
p; real p deferred to 8A); ratio test (limsup/liminf form); root test;
root test is strictly stronger than ratio; Raabe's test; Abel summation by
parts; Dirichlet test; Abel test; alternating series test with error estimate;
absolute convergence implies convergence; rearrangement invariance for absolutely
convergent series; Riemann rearrangement theorem; Cauchy product of absolutely
convergent series; Mertens' theorem; Fubini for absolutely convergent double
series; grouping preserves convergence; product converges iff the series of logs
/ the series of a_n converges; existence and uniqueness of decimal expansions.
(Integral test is stated on 5A, cross-referenced here.)

### 2A false statements
a_n -> 0 implies convergence; the ratio test decides every series; every
convergent series may be rearranged freely; the Cauchy product of two convergent
series converges; alternating with null terms always converges (monotonicity is
needed); comparison test without nonnegativity; sum a_n converges implies sum
a_n^2 converges; termwise product of convergent series converges.

### 2B supporting constructions
the alternating harmonic series; the standard rearrangement achieving a
prescribed sum; the double array with unequal iterated sums; the series
2^{-n+(-1)^n}.

### 2B examples / counterexamples
harmonic series diverges; alternating harmonic converges conditionally;
sum 1/n^2 converges (value deferred to 9A); geometric and telescoping
evaluations; condensation applied to the p-series; a series where the root test
works and the ratio test fails; explicit rearrangement of the alternating
harmonic series to an arbitrary prescribed sum; the classical rearrangement to
(3/2) log 2; sum 1/n! converges and is bounded by 3.
Cauchy product of sum (-1)^n/sqrt(n+1) with itself diverges; null terms with a
divergent series; a non-monotone alternating series with null terms that
diverges; a convergent series whose square diverges; a double series whose two
iterated sums differ; Dirichlet test fails without bounded partial sums.

---

## PAIR 3 — Topology of R, Limits and Continuity

### 3A definitions
neighbourhood; open and closed subsets of R; interior, closure, boundary; limit
point and isolated point; dense set; open cover; compact (cover) and
sequentially compact; connected; perfect set; nowhere dense, meager, G-delta and
F-sigma; set of measure zero.
Limit of a function; one-sided limits; limits at infinity; infinite limits;
continuity at a point and on a set; uniform continuity; Lipschitz and Holder
continuity; monotone function; classification of discontinuities (removable,
jump, essential); oscillation of a function at a point; additive function.

### 3A theorems
complements, unions and intersections; closure characterization; closed iff
contains its limit points; Q is dense; structure of open subsets of R (countable
disjoint union of open intervals); Heine-Borel in R; compact iff sequentially
compact in R; compact implies closed and bounded; connected subsets of R are
exactly the intervals; a nonempty perfect set is uncountable; Baire category
theorem in R; countable sets have measure zero; countable unions of null sets
are null.
Sequential criterion for limits; uniqueness; algebra of limits; squeeze; limit
iff both one-sided limits agree; composition of limits with correct hypotheses.
Sequential criterion for continuity; algebra and composition of continuous
functions; preimage-of-open characterization; continuous image of a compact set
is compact; extreme value theorem; boundedness theorem; intermediate value
theorem; continuous image of an interval is an interval; existence of roots;
one-dimensional fixed point theorem; Heine-Cantor; uniformly continuous maps
send Cauchy sequences to Cauchy sequences; unique uniformly continuous extension
from a dense subset; Lipschitz implies uniformly continuous implies continuous;
monotone functions have one-sided limits everywhere; a monotone function has at
most countably many discontinuities; a continuous injection on an interval is
strictly monotone; the inverse of a continuous strictly monotone function on an
interval is continuous; the set of continuity points is a G-delta;
Cauchy's functional equation (a continuous, or monotone, or locally bounded,
additive function is linear).

### 3A false statements
there is a function continuous exactly at the rationals; the Darboux property
implies continuity; the extreme value theorem holds on open intervals; every
continuous function is uniformly continuous; lim g(f(x)) = g(lim f(x)) whenever
both sides exist; the continuous image of a closed set is closed; a continuous
bijection of subsets of R has continuous inverse; a monotone function can have
uncountably many discontinuities.

### 3B supporting constructions
Dirichlet function; Thomae's (popcorn) function; the Cantor middle-thirds set
and its properties; a fat (Smith-Volterra) Cantor set; the distance-to-Z
function psi and psi(1/x); a monotone function with a jump at every rational;
a Hamel basis (flagged as using the axiom of choice).

### 3B examples / counterexamples
polynomials and rational functions are continuous; sqrt is uniformly continuous
on [0, infinity); 1/x is not uniformly continuous on (0,1]; x^2 is not uniformly
continuous on R; psi(1/x) has no limit at 0; x psi(1/x) is continuous at 0;
Dirichlet is nowhere continuous; Thomae is continuous exactly at the irrationals;
x times Dirichlet is continuous exactly at 0; a monotone function with a dense
set of jumps; the Cantor set is compact, perfect, uncountable, nowhere dense and
null; the Cantor function is continuous, monotone and surjective.
A continuous function on an open interval with no maximum; the product of two
uniformly continuous functions need not be uniformly continuous; the continuous
image of a closed set need not be closed; a Darboux function that is not
continuous; the IVT fails over Q; a failure of the naive composition-of-limits
law; a discontinuous additive function; a pointwise supremum of continuous
functions that is discontinuous; a closed bounded subset of Q that is not
compact.

---

## PAIR 4 — Differentiation of Real Functions

### 4A definitions
derivative at a point; differentiable on a set; one-sided derivatives; higher
derivatives; the classes C^k and C^infinity; local and global extrema; critical
point; Taylor polynomial; Taylor series; real-analytic (definition only, theory
on 7A); convex and concave functions; inflection point; differential / linear
approximation.

### 4A theorems
differentiable implies continuous; algebra of derivatives; chain rule;
derivative of x^r for integer and rational r; derivative iff both one-sided
derivatives agree; derivative of an inverse function; interior extremum theorem
(Fermat); Rolle; mean value theorem; Cauchy mean value theorem; zero derivative
implies constant; sign of the derivative and monotonicity; strict monotonicity
criterion; Darboux's theorem; a derivative has no jump discontinuity;
L'Hopital's rule (0/0 and infinity/infinity, all one- and two-sided cases);
Leibniz formula for the n-th derivative of a product; Taylor's theorem with
Lagrange, Cauchy and Peano remainders (integral remainder on 5A); a function is
Lipschitz iff its derivative is bounded; convex functions are continuous on the
interior and have one-sided derivatives; convex iff the derivative is monotone;
convex iff the second derivative is nonnegative; Jensen's inequality;
second-derivative test.

### 4A false statements
the derivative of a differentiable function is continuous; the mean value
theorem holds for vector-valued functions; strictly increasing implies a
strictly positive derivative; a vanishing derivative implies a local extremum;
the second-derivative test is conclusive at every critical point; Rolle's
theorem holds without continuity at the endpoints; L'Hopital's rule applies
whenever the quotient is indeterminate.
(The C^infinity-but-not-analytic and nowhere-differentiable false statements
live on 8A and 7A respectively, where the constructions exist.)

### 4B supporting constructions
`def-hermite-wave`: a C^1 (and a C^k) periodic polynomial spline built from
Hermite pieces t^2(3 - 2t), the trig-free oscillator; x^{k+1}|x|.

### 4B examples / counterexamples
|x| is not differentiable at 0; x^2 w(1/x) is differentiable everywhere with a
derivative discontinuous at 0; the cube root has a vertical tangent; x^3 is
strictly increasing with a vanishing derivative; x|x| is C^1 but not C^2;
x^{k+1}|x| is C^k but not C^{k+1} (the requested "k-times but not (k+1)-times
differentiable" family); a derivative with the Darboux property that is not
continuous; explicit Taylor error bounds; Newton's method converges.
The MVT fails without continuity at the endpoints; Rolle fails over Q;
L'Hopital fails when the quotient of derivatives has no limit; sqrt is
differentiable but not Lipschitz on (0,1]; a differentiable function with
unbounded derivative on a bounded interval; |x| is convex but not
differentiable; the second-derivative test is inconclusive for x^4; Jensen
fails without convexity.

---

## PAIR 5 — The Riemann Integral on R

### 5A definitions
partition, refinement, mesh; upper and lower Darboux sums; upper and lower
integrals; Darboux integrable; Riemann sum, tagged partition, Riemann
integrable; oscillation; measure zero (recalled from 3A); improper integrals of
the first and second kind and their absolute convergence; bounded variation and
total variation; Riemann-Stieltjes integral.

### 5A theorems
refinement inequalities; every lower sum is at most every upper sum; Riemann's
epsilon-criterion; equivalence of the Darboux and Riemann definitions;
continuous implies integrable; monotone implies integrable; linearity;
additivity over subintervals; monotonicity; the triangle inequality for
integrals; integrable implies bounded; a product of integrable functions is
integrable; a continuous function of an integrable function is integrable; first
and second mean value theorems for integrals; Lebesgue's criterion (Riemann
integrable iff bounded and the discontinuity set is null); if f is continuous,
nonnegative and has zero integral then f is identically zero.
FTC for continuous integrands, both parts (the working version); integration by
parts; substitution; the integral test for series; comparison test for improper
integrals; Cauchy criterion for improper integrals; Jordan decomposition of a BV
function; BV functions are closed under sums and products; Taylor's theorem with
the integral remainder; existence of the Riemann-Stieltjes integral for a
continuous integrand against a BV integrator; Riemann-Stieltjes integration by
parts; reduction of Riemann-Stieltjes to Riemann when the integrator is C^1.

### 5A false statements
Riemann integrable implies continuous; zero integral implies the zero function;
pointwise convergence suffices to interchange limit and integral; a composition
of Riemann integrable functions is Riemann integrable; a convergent improper
integral forces the integrand to tend to zero; bounded variation is the same as
continuity.
(Volterra's "every derivative is integrable" is refuted on 13A.)

### 5B supporting constructions
the indicator of a fat Cantor set; the Cantor function (if not built on 3B); a
piecewise-linear alternating bump train (trig-free analogue of sin x / x).

### 5B examples / counterexamples
the integral of x^2 computed from the definition; Thomae's function is
integrable with integral zero; a monotone function with dense discontinuities is
integrable; the Cantor function is continuous, BV, and its derivative vanishes
almost everywhere; the integral test applied to the p-series; a Riemann-Stieltjes
integral against a step integrator recovers a finite sum.
Dirichlet's function is not Riemann integrable; the indicator of a fat Cantor
set is not Riemann integrable although its discontinuity set is nowhere dense;
a composition of integrable functions that is not integrable; spike functions
converging pointwise to 0 with integral 1; indicators of finite subsets of Q
converging pointwise to a non-integrable limit; a conditionally convergent
improper integral; a convergent improper integral with a non-null integrand;
a continuous function that is not of bounded variation.

---

## PAIR 6 — Metric Spaces, R^n, and Vector-Valued Functions

### 6A definitions
metric space and open ball; norm and normed space; inner product; the Euclidean
norm on R^n; open and closed sets, interior/closure/boundary and limit points in
a metric space; convergence and Cauchy sequences; complete metric space;
compact, sequentially compact, totally bounded; connected and path-connected;
separable; contraction; curve/path; componentwise limit, derivative and integral
of a vector-valued function; operator norm of a linear map.

### 6A theorems
Cauchy-Schwarz; the norm triangle inequality; all norms on R^n are equivalent;
componentwise characterization of convergence; R^n is complete;
Bolzano-Weierstrass in R^n; compact iff sequentially compact iff complete and
totally bounded; Heine-Borel in R^n; characterizations of continuity in metric
spaces; continuous image of a compact set is compact; extreme value theorem and
Heine-Cantor in metric spaces; continuous image of a connected set is connected;
path-connected implies connected; a connected open subset of R^n is
path-connected; Cantor's intersection theorem; Baire category theorem for
complete metric spaces; Banach fixed point theorem; R^n is separable; linear
maps on R^n are continuous and bounded; the mean value inequality for
vector-valued functions.

### 6A false statements
closed and bounded implies compact in every metric space; a continuous bijection
is a homeomorphism; connected implies path-connected; Cauchy implies convergent
in every metric space; all norms are equivalent in infinite dimensions; the
closed unit ball of C[0,1] is compact; the mean value equality holds for
vector-valued functions.

### 6B supporting constructions
the discrete metric; the sup metric on C[0,1]; the space l^2; a trig-free
topologist's sine curve built from psi.

### 6B examples / counterexamples
properties of the discrete metric; an application of Banach's fixed point
theorem; Heine-Borel applied in R^n; a trig-free topologist's sine curve is
connected but not path-connected; two disjoint closed sets at distance zero; Q
is not a G-delta subset of R (Baire).
The closed unit ball of C[0,1] and of l^2 is not compact; nested closed sets
with empty intersection in an incomplete space; a contraction on an incomplete
space without a fixed point; inequivalent norms on a space of polynomials; a
continuous bijection with discontinuous inverse; the mean value equality fails
for t -> (t^2, t^3).

---

## PAIR 7 — Sequences and Series of Functions; Power Series

### 7A definitions
pointwise and uniform convergence; the sup norm; uniformly Cauchy;
equicontinuous and uniformly bounded families; power series; radius of
convergence; real-analytic function.

### 7A theorems
uniform Cauchy criterion; uniform convergence iff the sup norm of the difference
is null; a uniform limit of continuous functions is continuous; interchange of
uniform limits and integrals; the derivative theorem (f_n' -> g uniformly and
f_n convergent at one point imply f_n -> f uniformly with f' = g); Dini's
theorem; the Weierstrass M-test; uniform Dirichlet and Abel tests; C(K) with the
sup norm is complete; Arzela-Ascoli; the Weierstrass approximation theorem via
Bernstein polynomials; the Stone-Weierstrass theorem; Cauchy-Hadamard; a power
series converges uniformly on compact subsets of its interval of convergence;
term-by-term differentiation and integration; a power series is C^infinity on
its interval of convergence; uniqueness of power series coefficients; the
coefficients are the Taylor coefficients; Abel's limit theorem; real-analytic
functions are C^infinity and are locally given by their Taylor series; the
identity theorem for analytic functions.

### 7A false statements
a pointwise limit of continuous functions is continuous; pointwise convergence
permits interchanging limit and integral; uniform convergence of f_n implies
convergence of f_n'; every continuous function is differentiable somewhere
(refuted by the Weierstrass function, constructed here); a power series
converges at every endpoint of its interval of convergence; the M-test is
necessary for uniform convergence; the converse of Abel's theorem holds.

### 7B supporting constructions
x^n on [0,1]; the spike family n x (1 - x)^n; the (trig-free) Weierstrass
nowhere-differentiable function built from the C^0 spline wave.

### 7B examples / counterexamples
x^n converges pointwise but not uniformly on [0,1]; uniform convergence of a
geometric series; a nowhere-differentiable continuous function; Dini's theorem
applied; explicit Bernstein approximation; radius-of-convergence computations;
boundary behaviour of sum x^n/n and sum x^n/n^2; Abel's theorem applied to the
alternating harmonic series; an equicontinuous family.
Spikes with integral 1 converging pointwise to 0; Dini fails without
monotonicity and without compactness; Arzela-Ascoli fails without
equicontinuity; a pointwise bounded family that is not uniformly bounded; the
converse of Abel's theorem fails.
# Item lists, pairs 8-13 (my draft)

## PAIR 8 — The Exponential and the Logarithm   [requirement 3]

### 8A opening remark
`rem-exponential-roadmap`: states the six definitions, the dependency order, and
the exact circularity hazards (no use of x^r for irrational r before it is
defined; the integral of 1/t uses only the integer power t^{-1}).

### 8A definitions (the six routes)
E1 power series  exp x = sum x^n / n!
E2 limit         exp x = lim (1 + x/n)^n
E3 the unique solution of y' = y, y(0) = 1
E4 the inverse of L(x) = integral from 1 to x of dt/t
E5 sup over rationals: for a > 1, a^x = sup { a^q : q rational, q < x }
E6 the unique continuous f with f(x+y) = f(x) f(y) and f'(0) = 1
plus: the number e; a^x for a > 0; log as the inverse of exp; log as the
integral of 1/t; log by its power series; log_a; general power x^alpha;
hyperbolic functions.

### 8A theorems
Route A: the exponential series has infinite radius; the addition formula via
the Cauchy product; exp is positive and never zero; exp(-x) = 1/exp x;
exp' = exp; exp is C^infinity and real-analytic; exp is strictly increasing;
exp x -> infinity and exp(-x) -> 0; exp is a bijection of R onto (0, infinity);
exp dominates every polynomial.
Route B: uniqueness of the solution of y' = y with y(0) = 1, hence E3 = E1.
Route C: (1 + x/n)^n increases to exp x, hence E2 = E1.
Route D: L(x) = integral 1..x dt/t is well defined, strictly increasing, C^1
with L' = 1/x, satisfies L(xy) = L(x) + L(y), and is a bijection onto R; its
inverse satisfies y' = y and y(0) = 1, hence E4 = E3.
Route E: Cauchy's functional equation (from 3A) gives the characterization; a
continuous, or monotone, or locally bounded, nonzero solution of
f(x+y) = f(x)f(y) is exp(cx), hence E6 = E1.
Route F: exp(p/q) is the algebraic q-th root of e^p, so exp extends rational
powers of e; the sup definition E5 agrees with exp, using the uniformly
continuous extension theorem from 3A.
`thm-all-definitions-of-exp-equivalent` (landmark) ties E1-E6.

Logarithm: log is well defined as the inverse of exp and is continuous and
differentiable; the log laws including log(x^r) = r log x for real r;
log' = 1/x; the limits of log at 0 and infinity; log grows slower than every
positive power; the power series of log(1+x) on (-1, 1] with the value at 1 by
Abel's theorem; log x = lim n (x^{1/n} - 1); the functional characterization of
log; `thm-all-definitions-of-log-equivalent` (landmark).

General powers: a^x = exp(x log a) is well defined; the laws of exponents for
real exponents; `thm-power-agrees-with-rational-exponent` (the theorem the user
asked for: a^{p/q} in the new sense is the old algebraic q-th root of a^p);
continuity, strict monotonicity and differentiability of a^x and of x^alpha;
d/dx a^x = a^x log a and d/dx x^alpha = alpha x^{alpha - 1}; change of base;
log_a agrees with the rational-exponent intuition; the general binomial series;
convexity of exp; AM-GM in general form; Young, Holder and Minkowski
inequalities; the p-series for real p (completing pair 2); hyperbolic functions,
their identities, derivatives and inverses; e is irrational.
`rem-e-transcendental` (statement with reference).

### 8A false statements
every C^infinity function equals its Taylor series (refuted here by the
e^{-1/x^2} bump); a^x for irrational x means repeated multiplication;
log(x + y) = log x + log y; the power rule for arbitrary real exponents follows
from the rational case by algebra alone; exp is dominated by some polynomial;
every additive function is linear (no regularity hypothesis); log extends
continuously to 0; a^x is a continuous real function for negative a.

### 8B supporting constructions
the bump function e^{-1/x^2}; a C^infinity function with compact support; a
C^infinity partition of unity on R; a Hamel-basis solution of the multiplicative
functional equation.

### 8B examples / counterexamples
2 < e < 3 with an explicit error bound from the series; exp outgrows every
polynomial; the smooth non-analytic bump whose Taylor series at 0 is identically
zero; a smooth compactly supported bump; 2^{sqrt 2} computed by the sup
definition and by exp(sqrt 2 log 2), agreeing; the alternating harmonic series
equals log 2; (1 + 1/n)^n -> e; AM-GM and Young applied; a comparison table of
growth rates log n, n^alpha, a^n, n!.
A discontinuous solution of f(x+y) = f(x) f(y); the log series diverges at
x = -1; exp is not uniformly continuous on R; x^x has limit 1 at 0+ although
both "0^0 heuristics" disagree.

---

## PAIR 9 — Pi, Arc Length, and the Trigonometric Functions   [requirement 4]

### 9A definitions
sin and cos by their power series; tan, cot, sec, csc; pi as twice the smallest
positive zero of cos; the inverse trigonometric functions; curve/path in R^2;
inscribed polygon and its length; rectifiable curve; arc length; the unit
circle; the circumference of a circle; the area of a disc; Wallis' product.

### 9A theorems, trigonometric core
the sine and cosine series converge everywhere; sin' = cos and cos' = -sin;
the Pythagorean identity; the addition formulas; the ODE characterization
(y'' = -y with given initial data has a unique solution); cos has a positive
zero, and a smallest one, which defines pi; the values of sin and cos at
multiples of pi/2; 2pi is the fundamental period of sin and cos; the intervals
of monotonicity, the zero sets, and the ranges; the properties of tan (period pi,
derivative sec^2, bijection of (-pi/2, pi/2) onto R).

### 9A theorems, the identity catalogue
even/odd; cofunction (shift by pi/2); addition and subtraction for sin, cos and
tan; double angle; triple angle; half angle; power reduction; product-to-sum;
sum-to-product; multiple-angle (de Moivre in real form) and the Chebyshev
polynomials; the tangent half-angle (Weierstrass) substitution identities;
Lagrange's identity for sum cos(k theta) and sum sin(k theta) (the Dirichlet
kernel); the law of sines; the law of cosines; the derivatives and the power
series of the inverse trigonometric functions; arctan x = integral 0..x
dt/(1+t^2); the Leibniz series pi/4 = 1 - 1/3 + 1/5 - ... by Abel's theorem.

### 9A theorems, arc length
arc length as the supremum of inscribed polygon lengths is well defined; it is
invariant under monotone reparametrization; it is additive over subdivision; it
is invariant under translations and rotations and scales by |lambda| under
dilation by lambda (the key lemma); a curve is rectifiable iff its components
are of bounded variation; for a C^1 curve the length equals the integral of the
speed; lower semicontinuity of length under uniform convergence.

### 9A theorems, the equivalent definitions of pi
t -> (cos t, sin t) is a bijection of [0, 2pi) onto the unit circle; it has unit
speed, so arc length from 0 to t equals t; the circumference of the circle of
radius r is 2 pi r; **the ratio of circumference to diameter is the same
constant for every circle, and it equals pi** (proved from the scaling lemma, no
calculus required); the area of the disc of radius r is pi r^2, via
2 integral -1..1 sqrt(1 - x^2) dx; pi = 4 integral 0..1 dt/(1 + t^2); Wallis'
product; the Basel sum 1/n^2 = pi^2/6; pi is the period of exp on the imaginary
axis (proved on 10A, cross-referenced); `thm-all-definitions-of-pi-equivalent`
(landmark); pi is irrational (Niven); Stirling's formula via Wallis;
`rem-pi-transcendental` (statement with reference); the Gaussian integral
(deferred to 12A, cross-referenced).

### 9A false statements
pi is defined by measuring circles; any sequence of polygonal approximations
converging uniformly to a curve has lengths converging to its length (the
"pi = 4" staircase paradox); every continuous curve is rectifiable; the
trigonometric functions can only be defined via triangles; arcsin is a
two-sided inverse of sin on all of R; the circumference-to-diameter ratio
depends on the circle; sin and cos have some period smaller than 2pi.

### 9B supporting constructions
the graph of x sin(1/x) on (0,1]; the Koch snowflake; the staircase
approximation to a quarter circle; Niven's integral.

### 9B examples / counterexamples
the classical oscillation examples restated: x sin(1/x) continuous but not
differentiable at 0, x^2 sin(1/x) differentiable with discontinuous derivative
(the classical forms of the 4B spline examples); the classical Weierstrass
function sum a^n cos(b^n pi x); the arc length of a parabola and of a catenary;
the arc length of a circle computed three ways; Machin's formula; numerical
Leibniz, Wallis and Basel evaluations; identity verification worked examples;
the area of the disc computed by substitution; Niven's proof that pi is
irrational, worked.
The staircase paradox worked out (length 4 approximations to a quarter circle of
length pi/2); the graph of x sin(1/x) is a continuous non-rectifiable curve; the
Koch snowflake has infinite length; tan is unbounded on a bounded interval;
sin(x^2) is not uniformly continuous; arcsin(sin x) is not x.

---

## PAIR 10 — The Complex Exponential and Euler's Formula   [requirement 5]

### 10A definitions
C as R^2 with its field structure; conjugate and modulus; convergence and
Cauchy sequences in C; complex series and absolute convergence; complex power
series and radius of convergence; the complex exponential, sine and cosine;
polar form and argument; roots of unity; the principal branch of the complex
logarithm; complex powers.

### 10A theorems
C is a field; it is not orderable; the modulus is a norm and C is complete;
Bolzano-Weierstrass in C; absolute convergence implies convergence; Mertens'
theorem in C; Cauchy-Hadamard in C and continuity of the sum; the complex
exponential series converges everywhere; the addition formula; it extends the
real exponential; termwise differentiation; the complex sine and cosine extend
the real ones; **Euler's formula** e^{i theta} = cos theta + i sin theta
(landmark); **Euler's identity** e^{i pi} + 1 = 0 (corollary, landmark);
|e^{i theta}| = 1 and the imaginary axis maps onto the unit circle; the kernel
of exp is 2 pi i Z, so pi is characterized as half the fundamental period
(the missing definition of pi from 9A); exp: C -> C\{0} is surjective; polar
decomposition; de Moivre; the n-th roots of a complex number and the roots of
unity; the sum of the n-th roots of unity is zero; properties of the principal
logarithm; complex powers are multivalued; cos(iz) = cosh z and the trig /
hyperbolic dictionary; all the trigonometric identities re-derived from Euler's
formula; the fundamental theorem of algebra (via the extreme value theorem and
the minimum-modulus argument).

### 10A false statements
C is an ordered field; the complex logarithm is single-valued; exp is injective
on C; (z^a)^b = z^{ab} for complex powers; |sin z| <= 1 on C; |e^z| = 1 for all
z; every complex power series converges on the closed disc.

### 10B supporting constructions
the geometric picture of the n-th roots of unity; the Dirichlet kernel.

### 10B examples / counterexamples
Euler's identity evaluated; de Moivre computations; the fifth roots of unity;
i^i is a real number; log(-1) is multivalued; sum of cosines via a geometric
series (the Dirichlet kernel); trigonometric identities derived from Euler's
formula; exp maps horizontal and vertical lines to rays and circles; the
fundamental theorem of algebra applied; radius-of-convergence computations in C.
sin is unbounded on the imaginary axis; the 1 = e^{2 pi i} power-law paradox
worked out; a power series convergent nowhere on its boundary circle.

---

## PAIR 11 — Differentiation in R^m -> R^n

### 11A definitions
partial and directional derivatives; the total (Frechet) derivative; the
Jacobian matrix; the gradient; C^k and C^infinity in several variables;
multi-index notation; the Hessian; critical point; diffeomorphism; line
integral (if not deferred to 13A).

### 11A theorems
uniqueness of the total derivative; differentiable implies continuous;
differentiable implies all directional derivatives exist and are given by the
derivative; the Jacobian represents the derivative; continuous partials imply
differentiability; the chain rule; linearity and product rules; the gradient
gives the direction of steepest ascent; the mean value theorem for scalar-valued
functions of several variables; the mean value inequality in general;
Clairaut-Schwarz equality of mixed partials; Taylor's theorem in several
variables with remainder; the second-derivative (Hessian) test; a vanishing
derivative on a connected open set implies constancy; the inverse function
theorem (landmark, proved via the Banach fixed point theorem); the implicit
function theorem (landmark); the rank theorem; Lagrange multipliers.

### 11A false statements
the existence of all partial derivatives implies differentiability; it implies
continuity; mixed partials are always equal; the existence of all directional
derivatives implies differentiability; a nowhere-singular Jacobian implies
global injectivity; the mean value equality holds for vector-valued functions;
the Hessian test classifies every critical point.

### 11B supporting constructions
xy/(x^2+y^2); x^3 y/(x^6 + y^2); xy(x^2 - y^2)/(x^2 + y^2); the monkey saddle;
the polar coordinate map.

### 11B examples / counterexamples
Jacobian and chain-rule computations; polar coordinates form a local
diffeomorphism; the implicit function theorem applied to the circle; Lagrange
multipliers applied; Hessian classification of saddles and minima.
Partials exist but the function is discontinuous; all directional derivatives
exist yet the function is discontinuous; unequal mixed partials; differentiable
but not C^1; the exponential/polar map has a nonvanishing Jacobian yet is not
globally injective; Lagrange multipliers fail at a degenerate constraint point;
the Hessian test is inconclusive for the monkey saddle; no global minimum on a
noncompact set.

---

## PAIR 12 — The Riemann Integral in R^m

### 12A definitions
rectangles and their partitions; Darboux sums and the Riemann integral over a
rectangle; Jordan inner and outer content; Jordan measurable set; the integral
over a Jordan measurable set; sets of measure zero and of content zero in R^n;
type I and type II regions; improper multiple integrals.

### 12A theorems
Riemann's criterion in R^n; continuous functions on a rectangle are integrable;
a bounded set is Jordan measurable iff its boundary has content zero;
Lebesgue's criterion in R^n; linearity, additivity and monotonicity; the mean
value theorem for multiple integrals; the graph of a continuous function has
content zero; Fubini's theorem for the Riemann integral (with the correct
hypotheses on the iterated integrals); Fubini over type I and type II regions;
the change of variables theorem (landmark); the linear change of variables and
the determinant; polar, cylindrical and spherical coordinates; the volume of the
n-ball; the Gaussian integral equals sqrt(pi) (closing the loop with pair 9).

### 12A false statements
iterated integrals always exist and agree; every bounded set is Jordan
measurable; the change of variables theorem holds without injectivity; Jordan
content is countably additive; every set of measure zero has content zero.

### 12B supporting constructions
(x^2 - y^2)/(x^2 + y^2)^2 on the unit square; the rationals in the unit square;
a fat Cantor set crossed with an interval.

### 12B examples / counterexamples
integrals over rectangles computed from the definition; Fubini applied; polar
change of variables; the Gaussian integral computed; the volume of the n-ball;
the area of the disc recomputed as Jordan content (closing 9A's deferred item);
the Cantor set has content zero.
Iterated integrals that differ; a function whose iterated integrals agree but
which is not integrable; the rationals in the unit square are not Jordan
measurable; a fat Cantor product set with positive-content boundary; change of
variables fails for a non-injective substitution.

---

## PAIR 13 — The Fundamental Theorems of Calculus   [requirement 6]

### 13A opening remark
`rem-ftc-roadmap`: there are two theorems, not one, and the interest is entirely
in how far the hypotheses can be weakened; the working version from 5A is
recalled and then sharpened.

### 13A definitions
antiderivative / primitive; absolutely continuous function; line integral of a
vector field; conservative vector field; exact and closed differential form;
simply connected and star-shaped domains.

### 13A theorems
**FTC I, sharp form**: for f Riemann integrable, F(x) = integral a..x f is
Lipschitz (hence uniformly continuous and of bounded variation), and
F'(x0) = f(x0) at every point of continuity of f; F is differentiable almost
everywhere. Corollary: the 5A version for continuous f.
two antiderivatives on an interval differ by a constant.
**FTC II, sharp form** (landmark): if f is differentiable on [a,b] and f' is
Riemann integrable, then the integral of f' is f(b) - f(a); continuity of f' is
not required.
FTC II with finitely many exceptional points; FTC II with countably many
exceptional points; the lemma that a function continuous on [a,b] with vanishing
derivative off a countable set is constant.
the FTC for the Riemann-Stieltjes integral; integration by parts under the
weakest hypotheses; the change of variables / substitution theorem under the
weakest hypotheses; Leibniz's rule for differentiating under the integral sign,
including variable limits.
absolutely continuous implies bounded variation; the statement of the FTC for
absolutely continuous functions and of Lebesgue's differentiation theorem for
monotone functions (scope decision D5: state with references, or prove the
Riemann-level parts only).
**the gradient theorem** (FTC for line integrals in R^m, landmark);
path-independence iff conservative iff the field is a gradient; the Poincare
lemma on star-shaped domains (closed implies exact); Green's theorem in the
plane as the two-dimensional FTC (scope decision D5); the arc-length function
s(t) = integral of the speed satisfies s' = speed, closing the loop with pair 9;
`rem-stokes-outlook`.

### 13A false statements
every derivative is Riemann integrable (refuted here by Volterra's function);
every continuous function has an elementary antiderivative; almost-everywhere
differentiability suffices for FTC II (refuted by the Cantor function);
FTC I makes F differentiable everywhere; substitution is valid without
injectivity or monotonicity; differentiation under the integral sign is always
valid; a curl-free field on any domain is conservative.

### 13B supporting constructions
Volterra's function (built on a fat Cantor set); the Cantor function; the angle
form dtheta on the punctured plane.

### 13B examples / counterexamples
Volterra's function: differentiable everywhere with bounded derivative whose
derivative is not Riemann integrable (the centrepiece);
the Cantor function: continuous, increasing, derivative zero almost everywhere,
integral of the derivative is 0 not 1;
an f with f' Riemann integrable but discontinuous, where FTC II still applies;
FTC computations; the Feynman trick (differentiating under the integral sign)
applied; the gradient theorem applied; Green's theorem used to compute an area;
arc length computed via the FTC; an improper integral evaluated via the FTC.
The angle form on the punctured plane is closed but not exact (a non-conservative
curl-free field, tying the argument function and pi back in);
Leibniz's rule fails without a domination hypothesis;
substitution fails for a non-injective substitution.
