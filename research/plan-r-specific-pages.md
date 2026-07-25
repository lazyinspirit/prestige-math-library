# The R-specific topology / metric pages — my draft

Owner decision: build these AND the general topology track. These pages prove
things with **R-native tools** (order completeness, sup/inf, bisection, nested
intervals, monotonicity), which is the standard undergraduate route. The topology
track proves the general statements with metric/topological tools. Distinct ids,
distinct proofs, both published; the general page is NOT a prerequisite of these.

Design rule for deciding which route an R-item takes:
- If the R proof is genuinely different and more illuminating (Heine-Borel by
  bisection vs by total boundedness), author a FULL proof here.
- If the R statement is literally the general one with X = R and the proof would
  be a transcription, author it as a `cor-` citing the general theorem.
- Anything using the ORDER of R (sup, monotone, intervals, IVT, Darboux) has no
  general analogue and lives ONLY here.

---

## RA3. Topology of R   (A/B)      [was the first half of old pair 3]

### RA3-A definitions
neighbourhood and punctured neighbourhood; open and closed subsets of R;
interior, closure, boundary, exterior; limit point, isolated point, adherent
point; dense; nowhere dense; meager and residual; F-sigma and G-delta; open
cover and subcover; compact (cover definition); sequentially compact; connected;
perfect set; Cantor set; set of measure zero; content zero; the Cantor function;
oscillation of a function at a point.

### RA3-A theorems  (all proved R-natively)
- arbitrary unions and finite intersections of opens; the closed-set dual.
- a set is open iff every point is interior; closed iff it contains its limit
  points; closure = set union limit points; closure is the smallest closed
  superset; boundary = closure minus interior.
- **structure theorem for open subsets of R**: every open U is a countable
  disjoint union of open intervals (proved via the component-of-x construction
  and picking a rational in each; there is no general-topology analogue).
- density of Q and of the irrationals; every nonempty open set is uncountable.
- **Heine-Borel in R, by bisection**: [a,b] is compact. Author the classical
  bisection/least-upper-bound proof, NOT the Tychonoff corollary.
- compact => closed and bounded; closed and bounded => compact; compact iff
  sequentially compact in R (via Bolzano-Weierstrass from RA1).
- **connected subsets of R are exactly the intervals** (order-theoretic, R-only).
- a nonempty perfect subset of R is uncountable (Cantor's nested-interval proof).
- **Baire category theorem in R** (nested-interval proof, not the general
  complete-metric proof).
- countable sets have measure zero; countable unions of null sets are null;
  a set of content zero is null; **the converse fails** (Q in [0,1]).
- the Cantor set: compact, perfect, uncountable, nowhere dense, measure zero,
  totally disconnected, homeomorphic to {0,1}^N.
- the fat (Smith-Volterra) Cantor set: compact, nowhere dense, POSITIVE measure.
- the Cantor function is continuous, monotone, surjective, and constant off a
  null set.
- Q is F-sigma and not G-delta; the irrationals are G-delta and not F-sigma.

### RA3-A false statements
an arbitrary intersection of open sets is open; a set is either open or closed;
the boundary of a set is always nowhere dense; a nowhere dense set has measure
zero (refuted by the fat Cantor set); a measure-zero set is nowhere dense
(refuted by Q); every closed set is the closure of its interior; the Cantor set
is countable because we removed countably many intervals; Q is a G-delta.

### RA3-B
Constructions: the Cantor middle-thirds set; the fat Cantor set; the Cantor
function; a nowhere dense closed set of positive measure; an enumeration of Q
with shrinking intervals.
Examples: the structure theorem applied to an explicit open set; the Cantor set
worked out in ternary; the fat Cantor set's measure computed; Q covered by
intervals of total length epsilon (the striking one); Baire applied.
Counterexamples: intersection of (-1/n,1/n); [0,1] cap Q is closed and bounded in
Q and not compact; a nowhere dense set of positive measure; a dense measure-zero
set; a set that is neither open nor closed; an open cover of (0,1) with no finite
subcover.

---

## RA4. Limits and Continuity of Real Functions   (A/B)   [second half of old pair 3]

### RA4-A definitions
limit of a function at a point (epsilon-delta); one-sided limits; limits at
+-infinity; infinite limits; limsup and liminf of a function at a point;
continuity at a point; continuity on a set; uniform continuity; Lipschitz;
Holder; contraction; monotone and strictly monotone functions; classification of
discontinuities (removable, jump, essential); oscillation; the Darboux property;
additive function; convex function (definition here, theory on RA5).

### RA4-A theorems
- sequential criterion for function limits; uniqueness; algebra of limits;
  squeeze; a limit exists iff both one-sided limits exist and agree;
  **composition of limits with the correct hypothesis** (continuity of the outer
  function at the limit point, or injectivity near the point).
- sequential criterion for continuity; algebra and composition of continuous
  functions; **preimage-of-open characterization** (as a `cor-` of the general
  metric theorem, or proved directly, decide at authoring time).
- continuous image of a compact set is compact; **extreme value theorem**;
  boundedness theorem.
- **intermediate value theorem** (bisection proof, R-native); the continuous
  image of an interval is an interval; existence of n-th roots as a corollary;
  a continuous f: [a,b] -> [a,b] has a fixed point.
- **Heine-Cantor in R**: continuous on a compact set implies uniformly
  continuous.
- uniformly continuous maps send Cauchy sequences to Cauchy sequences;
  **the uniformly continuous extension theorem from a dense subset** (this is
  the one page 8A needs for a^x = sup over rationals).
- Lipschitz => uniformly continuous => continuous, both strict.
- a uniformly continuous function on a bounded set is bounded; a continuous
  function on a bounded set need not be.
- **monotone functions have one-sided limits at every point**, so all their
  discontinuities are jumps; **a monotone function has at most countably many
  discontinuities**; a monotone function on [a,b] is Riemann integrable
  (forward pointer to RA6).
- **a continuous injection on an interval is strictly monotone**; **the inverse
  of a continuous strictly monotone function on an interval is continuous**
  (needed for log, arcsin, arctan).
- the set of continuity points of any f: R -> R is a G-delta; **hence there is no
  function continuous exactly on Q** (uses Baire from RA3).
- oscillation characterizes continuity: f is continuous at x iff osc(f,x) = 0;
  {x : osc(f,x) >= eps} is closed.
- **Cauchy's functional equation**: an additive f that is continuous at a point,
  OR monotone on an interval, OR bounded above or below on an interval, OR
  Lebesgue measurable, OR has non-dense graph, is linear. (The full regularity
  list from the sweep. The measurable case is stated; the Solovay remark is
  routed to F1.)
- the three companion Cauchy equations: f(x+y)=f(x)f(y), f(xy)=f(x)+f(y),
  f(xy)=f(x)f(y), and their solutions under regularity. (These set up page 8A.)

### RA4-A false statements
there is a function continuous exactly at the rationals; the Darboux property
implies continuity; the EVT holds on open or unbounded intervals; every
continuous function is uniformly continuous; lim g(f(x)) = g(lim f(x)) whenever
both sides exist; a continuous bijection of subsets of R has continuous inverse;
a monotone function can have uncountably many discontinuities; every additive
function is linear (no regularity); a function with a removable discontinuity at
every point of a dense set exists.

### RA4-B
Constructions: Dirichlet's function; Thomae's popcorn function; psi = dist(.,Z)
and psi(1/x) (the trig-free oscillator, shared with RA5); a monotone function
with a jump at every rational; a Hamel basis (flagged AC, cites F1).
Examples: polynomials and rational functions; sqrt is uniformly continuous on
[0,infinity); x psi(1/x) is continuous at 0; Thomae is continuous exactly at the
irrationals; x times Dirichlet is continuous exactly at 0; a monotone function
with a dense jump set; IVT applied to prove a root exists; the extension theorem
applied.
Counterexamples: Dirichlet is nowhere continuous; 1/x is not uniformly continuous
on (0,1]; x^2 is not uniformly continuous on R; the product of two uniformly
continuous functions need not be uniformly continuous; psi(1/x) has no limit at
0; a continuous function on (0,1) with no maximum; the IVT fails over Q; the
naive composition-of-limits law fails; a discontinuous additive function; a
pointwise sup of continuous functions that is discontinuous; a continuous
bijection [0,1) -> R/Z with discontinuous inverse (phrased without trig, via the
quotient, cross-linking to T3).

---

## RA7. R^n as a Metric and Normed Space; Vector-Valued Functions   (A/B)
[replaces old pair 6; the general metric-space theory now lives in T1]

### RA7-A definitions
the Euclidean inner product and norm on R^n; the p-norms and the sup norm;
equivalent norms; open balls, open and closed subsets of R^n; convergence;
Cauchy sequences; the operator norm of a linear map; a curve/path in R^n;
componentwise limit, derivative and integral of a vector-valued function;
convexity in R^n; the standard basis and coordinates.

### RA7-A theorems
- **Cauchy-Schwarz** and the triangle inequality; the parallelogram law;
  polarization.
- componentwise characterization of convergence; **R^n is complete**.
- **Bolzano-Weierstrass in R^n** (componentwise, via nested subsequence
  extraction: an R-native proof, not the general totally-bounded one).
- **Heine-Borel in R^n**: closed + bounded <=> compact, proved via the box
  [-M,M]^n and repeated bisection (R-native; T5 re-proves it from Tychonoff).
- **all norms on R^n are equivalent** (via compactness of the unit sphere in the
  Euclidean norm plus continuity of an arbitrary norm).
- linear maps R^n -> R^m are continuous, indeed Lipschitz, with the operator norm
  as the best constant; the operator norm is a norm; submultiplicativity.
- continuous images of compact sets; EVT for real-valued functions on compact
  subsets of R^n; Heine-Cantor in R^n.
- connected open subsets of R^n are path-connected, indeed polygonally connected.
- componentwise differentiation and integration of vector-valued functions of one
  variable; **the mean value INEQUALITY** |f(b)-f(a)| <= sup|f'| (b-a), with the
  explicit note that the mean value EQUALITY is false for n >= 2.
- the fundamental theorem of calculus componentwise for vector-valued functions.
- convexity: a convex set is connected; the segment characterization.

### RA7-A false statements
the mean value equality holds for vector-valued functions; all norms on an
infinite-dimensional space are equivalent; closed and bounded implies compact in
every normed space; a componentwise-continuous function of several variables is
continuous (this is the multivariable trap, proved false here and again on RA13);
the operator norm equals the largest entry of the matrix; every connected subset
of R^n is path-connected (true for OPEN sets only).

### RA7-B
Examples: the p-norms compared on R^2 with the explicit equivalence constants;
Cauchy-Schwarz equality case; Heine-Borel applied; the operator norm of a 2x2
matrix computed; a polygonally connected open set.
Counterexamples: t -> (t^2, t^3) defeats the mean value equality; the closed unit
ball of an infinite-dimensional normed space is not compact (cites T1's Riesz
lemma); inequivalent norms on polynomials; a connected but not path-connected
subset of R^2 (the trig-free topologist's sine curve, cites T4); xy/(x^2+y^2)
is separately continuous and not continuous.
