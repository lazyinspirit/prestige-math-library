---
category: real-analysis
status: published
parts:
  - part: building-the-reals
    title: "Building the real numbers"
    pages:
      - construction-of-r-via-cauchy-sequences
      - construction-of-r-via-dedekind-cuts
      - foundations-of-the-real-numbers
  - part: order-and-countability
    title: "Order, suprema and countability"
    pages:
      - suprema-and-infima
      - roots-and-rational-powers
      - countability-and-uncountability
  - part: sequences-and-completeness
    title: "Sequences and completeness"
    pages:
      - sequences-and-limits
      - monotone-sequences-and-cauchy-completeness
      - limsup-and-subsequential-limits
      - formal-laurent-series-field
      - equivalent-forms-of-completeness
  - part: series
    title: "Series"
    pages:
      - series-and-nonnegative-tests
      - absolute-convergence-and-rearrangement
  - part: topology-of-the-line
    title: "Topology of the line"
    pages:
      - topology-of-r
      - cantor-set-baire-and-measure-zero
  - part: limits-and-continuity
    title: "Limits and continuity"
    pages:
      - limits-of-real-functions
      - continuity-ivt-evt-and-uniform-continuity
      - monotone-functions-and-discontinuities
  - part: differentiation
    title: "Differentiation"
    pages:
      - the-derivative-and-mean-value-theorems
      - darboux-lhopital-and-taylor
      - convexity
  - part: the-riemann-integral
    title: "The Riemann integral"
    pages:
      - the-riemann-integral
      - properties-of-the-integral-and-the-working-ftc
      - the-gauge-integral-and-cousins-lemma
      - improper-integrals
      - bounded-variation-and-riemann-stieltjes
  - part: sequences-of-functions
    title: "Sequences of functions and power series"
    pages:
      - uniform-convergence-of-functions
      - approximation-and-compactness-in-ck
      - power-series-and-real-analytic-functions
  - part: classical-functions
    title: "The classical functions"
    pages:
      - the-exponential-function
      - the-logarithm-and-general-powers
      - sine-cosine-and-the-definition-of-pi
      - fundamental-trigonometric-identities
      - further-trigonometric-identities-and-inverses
      - the-integral-logarithm-and-its-characterisations
      - trigonometric-and-oscillatory-examples-in-several-variables
  - part: several-variables
    title: "Several variables"
    pages:
      - rn-as-a-normed-space
      - the-total-derivative
      - mixed-partials-taylor-and-extrema
      - inverse-and-implicit-function-theorems
      - the-riemann-integral-in-rn-and-jordan-content
      - fubini-and-change-of-variables
      - the-inverse-function-theorem-completed
      - improper-and-parameter-dependent-multiple-integrals
      - convex-and-semicontinuous-functions-on-rn
      - picard-lindelof-and-first-order-odes
      - regular-surfaces-and-surface-integrals
      - constant-rank-submersions-and-regular-level-sets
  - part: curves-and-the-fundamental-theorems
    title: "Curves and the fundamental theorems"
    pages:
      - arc-length-and-rectifiable-curves
      - the-fundamental-theorems-of-calculus
      - line-integrals-and-the-gradient-theorem
      - pi-the-equivalent-characterizations
      - the-complex-exponential-and-eulers-formula
      - trigonometric-and-oscillatory-examples-in-one-variable
      - areas-of-elementary-plane-figures
      - the-real-gamma-and-beta-functions
      - volumes-of-elementary-solids-and-solids-of-revolution
---

## building-the-reals

Analysis needs a field where every bounded set has a least upper bound, and the rationals are not
one. Two constructions supply it, one by Cauchy sequences of rationals and one by Dedekind cuts,
and both arrive at a totally ordered field with the least upper bound property. The axioms are then
stated on their own, so the rest of the subject can quote them without carrying either
construction.

## order-and-countability

The supremum is how completeness gets used, so it is worth the epsilon characterisations and the
behaviour under inclusion, translation, scaling and sums. Roots and rational powers are the first
things completeness produces that the rationals cannot. Countability separates the sets that can be
listed from those that cannot, and it is what makes the line uncountable.

## sequences-and-completeness

A sequence converges when its terms eventually stay within any prescribed distance of a limit, and
the theorems that follow are the working tools of the subject: the algebra of limits, monotone
convergence, Bolzano-Weierstrass, and the equivalence of convergence with the Cauchy condition.
Upper and lower limits give every bounded sequence a pair of limits, whether or not it converges.
The formal Laurent series field is Cauchy complete without having the least upper bound property,
which is why the two forms of completeness are proved equivalent rather than assumed to be the same.

## series

A series is the limit of its partial sums, so every test is a theorem about sequences. Comparison,
condensation, ratio, root and integral tests settle the nonnegative case, where convergence is a
question about growth. Absolute convergence is then separated from conditional convergence, and the
separation is sharp: rearranging a conditionally convergent series changes what it sums to.

## topology-of-the-line

Open, closed, compact and connected sets let the theorems about functions be stated about the sets
they act on rather than about intervals. Compactness is proved in the form used later, and
connectedness is what makes the intermediate value theorem an argument about sets. The Cantor set,
Baire category and measure zero give two ways for a set to be small, and they do not agree.

## limits-and-continuity

Continuity is defined for a function on a subset of the line, then made usable by the sequential
criterion, the algebra of continuous functions, and the description by preimages of open sets. The
theorems continuity exists for follow: the intermediate value theorem, the extreme value theorem,
the image of a compact set, and uniform continuity where the domain forces it. Monotone functions
close the part, with a full description of the sets on which a function can fail to be continuous.

## differentiation

The derivative is a limit of difference quotients, and the mean value theorems are what turn local
information about it into global statements about the function. Rolle, the mean value theorem and
its Cauchy form come first, then Darboux's theorem, L'Hopital's rule and Taylor's theorem with
remainder. Convexity is characterised by the three slope inequality, and through it by monotonicity
of the derivative and the sign of the second derivative.

## the-riemann-integral

Upper and lower Darboux sums define Riemann integrability and yield its linearity, additivity,
order properties, standard integrable classes, and the fundamental theorem of calculus.
Improper integrals extend integration to unbounded functions and intervals, while
Riemann-Stieltjes integration uses integrators of bounded variation. Gauge integration replaces
a uniform mesh bound by a positive radius depending on the tag; Cousin's lemma guarantees fine
tagged partitions. The Henstock-Kurzweil integral contains the Riemann integral, satisfies a
Cauchy criterion, subinterval additivity, and the Saks-Henstock estimate, and integrates every
derivative to its endpoint increment. Its compact and noncompact forms support integration by
parts, substitution, comparison tests, and Hake extension across a finite missing endpoint.

## sequences-of-functions

Pointwise convergence of functions preserves neither continuity nor the integral, and uniform
convergence is the hypothesis that repairs both. It is set up with the supremum metric, then applied
in the space of continuous functions on a compact set, where Arzela-Ascoli describes the compact
families and Stone-Weierstrass the dense subalgebras. Power series are the case where uniform
convergence is available on every compact subset of the disc of convergence, which is what makes
term by term differentiation legitimate.

## classical-functions

The exponential, logarithm, sine and cosine are defined by their power series, so every identity is
proved rather than read off a picture. The exponential yields its addition law, derivative and
range, and pi comes from the zeros of the cosine, not from geometry. The trigonometric identities,
the inverse functions and the integral logarithm follow, and the characterisations an informal
treatment assumes are proved equivalent. In several variables they split a Cartesian expression
into radial and angular parts, and the standard pathologies follow: line limits without a limit, a
circle defeating the vector-valued mean value equality, agreeing mixed partials, differentiability
with unbounded or discontinuous partials, uniform boundedness without equicontinuity, an exact
solid of revolution, and non-injective spherical coordinates.

## several-variables

Norms give limits in $\mathbb R^n$; total derivatives give the chain rule, mixed partials,
Taylor formulas, extrema and inverse and implicit functions, refined by higher regularity,
regular loci, local diffeomorphisms and orientation. Jordan integration, Fubini and change
of variables extend by compact exhaustion to improper integrals; domination permits
parameter limits and differentiation, polar coordinates the Gaussian integral. Convexity
runs through epigraphs, Jensen, local Lipschitz bounds, separation, subgradients, Hessians
and semicontinuous extrema; Volterra, Picard, Gronwall, maximal solutions, Euler polygons
and Osgood settle first-order equations. Rank semicontinuity gives the constant-rank normal
form, hence submersions, immersions, regular level sets, tangent kernels and Lagrange
multipliers; the first fundamental form and Gram determinant give area, scalar integrals
and flux for graphs and surfaces of revolution.

## curves-and-the-fundamental-theorems

Path length, the supremum of inscribed polygonal lengths, is bounded variation made geometric.
Fundamental theorems handle exceptional sets and one-sided derivatives; line integrals, the
gradient theorem and differentiation under the integral sign extend path calculus. Jordan content
gives translation-invariant area, the disc formula $\pi r^2$, base-height and determinant formulas
for parallelograms and triangles, and triangulation and shoelace formulas for polygons; slicing
between continuous graphs extends it to volume, with disc, washer and shell formulas, cones and
balls in every dimension by Cavalieri. Power-series trigonometry ties the characterizations of
$\pi$ to the complex exponential, produces the Weierstrass function and, with the Riemann-Lebesgue
lemma, controls oscillation; Euler's Gamma and Beta integrals give factorial interpolation,
Bohr-Mollerup, $\Gamma(1/2)$, Stirling's constant and the unit-ball volume.
