# Original Taubes existence: complete construction under development

This is one mathematical working proof, not an acceptance or a replacement of
the original item. The target is the entire statement of
lem-taubes-positive-definite-instanton-existence: the given smooth metric,
the given charge-minus-one bundle, and an irreducible self-dual connection.
No flat neighborhood is assumed. Full AC is used for the existing compact
elliptic, heat, Sobolev, and finite CW interfaces. The construction below is
to receive one independent review as a whole, including the bundle comparison
and the regularity of the constructed solution.

Actual reading: Walpuski, Gauge Theory, PDF131–133, full section5.16; Matsuo,
2020 Tokyo gluing lectures, PDF80–86 extracted and PDF87–137 visually read;
the full current library heat-parametrix and compact elliptic Green-inverse
proofs. Walpuski explicitly leaves the model inverse estimate unproved and
assumes a flat ball. Matsuo explains the Green-weight gradient estimate and
leaves some contraction/regularity details as exercises. Neither omission is
used as a supplied proof here. The original Taubes1982 paper was not obtained
and no reading of it is claimed.

Actual caches: /tmp/root-walpuski-gauge-theory.pdf, SHA
0cd5dfbbc746f682ef51965ab6349101de81df7f39b556c0910661dc34c8d4f6;
/tmp/root-hirose-taubes-gluing-slides.pdf (the filename is historical; the
author is Shinichiroh Matsuo), SHA
ed21a1cf4d74edda4826b328673b0ad2ad9ddf6b80d51a59063cfa02eba8d575.

## 1. The scalar Green weight, including its construction

Let X be the fixed closed connected Riemannian four-manifold. Write
L=Delta+1 with positive scalar Laplacian. Apply the actual geometric Dirac
heat construction to the de Rham Clifford module, Clifford action
c(v)=v wedge minus contraction. Its square on scalar forms is Delta.
The published differentiated heat-parametrix proof gives, for 0<t<=1,
a finite Gaussian parametrix plus a uniform O(t) kernel remainder. On the
scalar block the coefficients are bounded on the fixed normal neighborhood;
therefore

    |K_t(x,y)| <= C t^(-2) exp(-d(x,y)^2/(4t)) + C.

For t>=1, write the heat operator as the composition of its fixed positive
time smoothing kernels and the L2-contractive middle semigroup. This bounds
its kernel uniformly. Thus

    G(x,y) = integral_0^infinity exp(-t) K_t(x,y) dt

converges off the diagonal, is smooth there by the differentiated parametrix,
and satisfies 0<=G(x,y)<=C(1+d(x,y)^(-2)). Positivity follows directly from
the heat maximum principle: apply the equation to nonnegative smooth data,
add epsilon exp(t), and use the first nonpositive minimum contradiction;
then approximate positive test functions. Symmetry follows from the spectral
selfadjoint heat operator. Its integral in either variable is one, because
the heat operator fixes constants. Integrating the spectral identity shows
G is the actual inverse of Delta+1 on smooth functions. These arguments use
the supplied heat construction, not an unproved kernel representation.

For any bundle-valued measurable f put

    |f|_sharp = sup_x integral_X G(x,y)|f(y)| dy,
    |f|_B = |f|_sharp + |f|_2.

The completion B of smooth sections in this norm embeds in L2 and L1:
symmetry, Fubini and the unit integral give |f|_1<=Vol(X)|f|_sharp.
If a sequence converges in B and in L2, the Green integrals of the absolute
difference tend uniformly to zero, so this definition agrees with the
measurable representative. No point evaluation of an L2 class is used.
The kernel bound also gives

    sup_x integral_{d(x,y)<r} G(x,y)dy <= C r^2.

## 2. A uniform correction estimate from an actual spectral gap

Consider a smooth SU2 connection A on any fixed smooth bundle. On adjoint
anti-self-dual two-forms let P_A=d_A^- (d_A^-)^*. Use the exact formal adjoints.
The covariant differentiation calculation is

    2P_A = nabla_A^* nabla_A + R_g + T(F_A^-),

where R_g=s/3-2W^- and T is a fixed algebraic adjoint action. It follows by
expanding d_A and its adjoint in an oriented orthonormal frame, commuting
two covariant derivatives, and splitting the two-form coefficient into its
plus and minus parts; the plus part cancels on the anti-self-dual summand.
In particular |T(F)xi|<=C|F||xi|. The sign and the factor two agree with
the d^* plus sqrt(2)d^- Clifford module already used for the accepted index.

Assume for a family of A that

    <P_A xi,xi> >= c |xi|_2^2,
    |F_A|_2 <= Lambda,
    |F_A^-|_sharp + |F_A^-|_2 <= epsilon,

with fixed c>0,Lambda and epsilon sufficiently small. The compact elliptic
Green-inverse theorem supplies the actual smooth inverse of P_A; no uniform
coefficient bounds on A are asserted. Let xi=P_A^(-1)f, initially for smooth f.

For u_delta=(|xi|^2+delta^2)^(1/2), differentiation and the metric connection
identity give the weak Kato inequality; passing delta down to zero yields

    (Delta+1)|xi| <= C|f| + C|xi| + C|F_A^-||xi|.

Apply positive G. Split G|xi| into the ball of fixed radius r and its
complement. The first term is at most Cr^2|xi|_infinity and the other at most
C_r|xi|_2. Choose r and then epsilon to absorb these supremum terms. Hence

    |xi|_infinity <= C |f|_sharp + C |xi|_2.

The spectral gap and the equation give

    c |xi|_2^2 <= <f,xi> <= |f|_1 |xi|_infinity
                       <= Vol(X)|f|_sharp |xi|_infinity.

Substitution and the scalar quadratic inequality in sqrt(|xi|_infinity)
prove |xi|_infinity<=C|f|_sharp, uniformly in A.

The metric-compatible product identity

    Delta |xi|^2 = 2 Re<nabla_A^*nabla_A xi,xi> - 2|nabla_A xi|^2

can now be integrated against G. The term G(Delta+1)|xi|^2 is exactly
|xi(x)|^2 and has the favorable sign when moved to the other side. The
Weitzenbock formula and the bound on the algebraic curvature term give

    | |nabla_A xi|^2 |_sharp <= C |f|_sharp^2.

For completeness one also needs an L4 estimate, not merely a weighted
Morrey bound. Set H=|nabla_A^2 xi|_2 and v=|xi|_infinity. Covariant integration
by parts gives

    |nabla_A xi|_4^2 <= C v H.

Indeed integrate the divergence of |nabla_A xi|^2 nabla_A xi paired with xi;
its absolute value is at most C v integral |nabla_A xi|^2|nabla_A^2 xi|,
and cancel one factor |nabla_A xi|_4^2. The zero case needs no division.
Commuting covariant derivatives in the integral of the squared Hessian gives

    H^2 <= C|nabla_A^*nabla_A xi|_2^2
           + C(1+Lambda)|nabla_A xi|_4^2
           + C Lambda v H + C v^2.

There is no derivative-of-curvature bound here: a derivative on F in the
commutation identity is integrated once onto xi or nabla_A xi, giving exactly
F*nabla_A xi*nabla_A xi or F*xi*nabla_A^2 xi. The fixed metric curvature and
its derivatives have bounded coefficients. The equation bounds the first
term by C(|f|_2+v)^2, since |F_A^-|_2 is bounded. The preceding interpolation
and Young's inequality therefore give

    H <= C(|f|_2+|f|_sharp),
    |nabla_A xi|_4^2 <= C |f|_sharp (|f|_2+|f|_sharp).

Put Q_A f=(d_A^-)^*P_A^(-1)f. This is a pointwise contraction of nabla_A xi.
Weighted Cauchy-Schwarz and ordinary Holder now prove the actual bilinear
estimate

    | (Q_A f wedge Q_A h)^- |_B <= C |f|_B |h|_B.

The constant is uniform under the three displayed hypotheses. The L2 part
uses the L4 bound; it is not inferred from the weighted estimate alone.

## 3. Actual fixed point and smoothness of its connection

Let E=F_A^- and solve in B the equation

    f = -E - (Q_A f wedge Q_A f)^-.

The preceding estimate makes its right side a contraction on the closed
ball |f|_B<=2|E|_B once |E|_B is sufficiently small. Products extend by
the same estimate from smooth sections to B; thus the fixed point exists
in that actual completed space. With xi=P_A^(-1)f and a=Q_A f one has

    F_(A+a)^- = 0,
    |xi|_infinity <= C|E|_B,   |a|_4 <= C|E|_B.

For each fixed smooth A, the compact elliptic estimates give xi in H2 and
a in H1, because f is in L2; no uniform bound for this particular ordinary
H2 inverse is required. The L-infinity convergence estimate makes xi a
continuous representative, since it is the uniform limit of smooth inverse
images of B-approximants.

Here is the needed regularity rather than a citation to a smooth-input gauge
theorem. The exact identities are

    d_A^-a = -E-(a wedge a)^-,
    d_A^*a = (d_A^- d_A)^*xi = T_A xi,
    (d_A^-)^*xi = a,

with T_A a smooth zeroth-order coefficient determined by E. On a small normal
ball the first two equations have the constant Euclidean Coulomb-ASD principal
system plus arbitrarily small smooth principal coefficients. The background
A has arbitrarily small L4 norm after shrinking; so does a. The actual
simultaneous Y2/Y3 contraction and mollifier commutator proof from the accepted
curved weak-regularity supplier applies with the additional bounded forcing
T_A xi. It gives a in W1,3 and L12, then in W1,6. The third equation is an
injective elliptic first-order system: include zero in the scalar component
of the same square Clifford operator. Its local constant inverse and the same
small-principal commutator estimate give xi in W1,6. Differentiating these
coupled equations and applying those estimates inductively gives both forms
in Wm,6 for every m. At each stage a is bounded and products have the stated
Sobolev order. Thus A+a is a smooth connection on the original smooth bundle,
not just a weak connection on a new unclassified bundle.

## 4. The almost self-dual family for the given metric

Choose oriented normal coordinates at p, so g_ij=delta_ij+O(r^2). In the
orientation of the original item use the BPST form obtained from the usual
anti-self-dual form by quaternionic conjugation:

    I_lambda = Im(q d conjugate(q))/(lambda^2+|q|^2).

Multiplication and differentiation of the quaternion basis give self-dual
Euclidean curvature, with

    |F_(I_lambda)|^2 = 48 lambda^4/(lambda^2+r^2)^4.

Its integral is 8pi^2: in polar coordinates the integral of
lambda^4/(lambda^2+r^2)^4 is pi^2/6. Its curvature values at zero span su2.
In its singular gauge its potential is bounded by C lambda^2/r^3 outside
the scale lambda. Fix a sufficiently small coordinate radius rho, independent
of lambda. Cut off THIS singular-gauge potential on rho<r<2rho to zero,
and use the regular BPST frame inside. The transition on the overlap is the
fixed quaternionic unit map; this constructs one smooth bundle P' independent
of lambda and actual smooth connections A_lambda. Multiplication of a regular
gauge potential by a cutoff is not asserted to commute with a gauge change.
Outside the ball these connections equal the product connection.

Since pi_(minus,g)-pi_(minus,e)=O(r^2), the error in the inner ball satisfies

    |F_(A_lambda)^-| <= C lambda^2/(lambda^2+r^2).

On the fixed cutoff annulus it is O_rho(lambda^2). Consequently

    |F_(A_lambda)^-|_2 <= C lambda^2 sqrt(1+|log lambda|),
    |F_(A_lambda)^-|_sharp <= C lambda^2(1+|log lambda|),
    |F_(A_lambda)|_2 <= C.

For the middle estimate use G<=C(1+d^(-2)). If |x|<=2lambda, split at
4lambda and integrate r^(-1) on the outer shells. Otherwise split into
|x-y|<|x|/2, |y|<2|x| outside that set, and |y|>=2|x|. The first two
integrals are O(lambda^2); the last is at most
C lambda^2 integral_(lambda)^rho dr/r. Metric volumes are uniformly comparable
to Euclidean ones. This proves the supremum bound at every x, not only at p.
Thus the error tends to zero in B for the actual original metric.

## 5. Uniform spectral gap without a hidden inverse assumption

The Weitzenbock formula, the scalar Sobolev inequality applied using Kato,
and the small L2 error absorb the curvature term and give

    |nabla_(A_lambda) xi|_2^2 <= C(<P_(A_lambda)xi,xi>+|xi|_2^2).

Suppose no uniform positive spectral gap exists as lambda tends to zero.
Choose |xi_n|_2=1 with |(d_(A_lambda_n)^-)^*xi_n|_2 tending to zero. The
displayed estimate and Kato give a uniform L4 bound for xi_n. Therefore
their L2 mass in any ball of radius r is at most Cr^2. On compact subsets
off p, the outer trivializations have A_lambda_n tending smoothly to zero;
local H1 bounds, Rellich and a diagonal give a strongly locally L2 limiting
ordinary adjoint-valued anti-self-dual two-form xi. It satisfies d^*xi=0.
The small-ball mass bound implies |xi|_2=1 and no lost L2 mass. Weak lower
semicontinuity gives finite H1 norm off p. Cut off near p: the derivative
error is bounded by the L4 norm on its shrinking annulus times the bounded
L4 norm of the cutoff gradient, and tends to zero. Thus xi extends as an
H1 form on X and the equation holds globally. Anti-self-duality gives dxi=0;
the actual Hodge theorem makes it harmonic. There are no such forms since
b_minus(X)=0. This contradicts |xi|_2=1 and proves the required gap for all
sufficiently small lambda. Steps2–3 now apply and construct smooth solutions
A_lambda+a_lambda with |a_lambda|_4 tending to zero.

## 6. Irreducibility and the specified bundle

If a sequence of these solutions were reducible, it would have unit parallel
adjoint sections u_lambda. Pull back to the scale-lambda unit ball. On that
ball A_lambda is the fixed BPST connection I_1 and the L4 norm of the pulled
back correction tends to zero. Hence

    |nabla_(I_1)u_lambda|_4 <= C|a_lambda|_4 -> 0.

A bounded sequence with |u_lambda|=1 is bounded in W1,4 in this fixed smooth
frame and has a strongly L4 convergent subsequence. Its limit is an I_1-parallel
unit adjoint section. Commuting its derivatives at zero makes it commute
with every curvature value of I_1, which span su2. The only such element is
zero, a contradiction. Thus all sufficiently small members are irreducible.

The bundle P' has second Chern number minus one. Indeed it is fixed for all
lambda; Chern–Weil and the explicit BPST integral show its Chern integral
tends to minus one, and that integral is an integer independent of lambda.
The self-dual sign is exactly E=-8pi^2 c2. Finally compare P' with the bundle
P in the original statement, rather than claiming a new bundle suffices.
A finite smooth triangulation of X, viewed as its actual four-dimensional CW
decomposition, permits trivializations of any SU2
bundle over its three-skeleton: the obstructions are pi0,pi1,pi2 of SU2=S3,
all zero. The remaining clutching degrees on its oriented four-cells form
a four-cochain. Changing a three-cell trivialization changes it by its cellular
coboundary. This is a complete obstruction: equal cochains permit extension
of an isomorphism over every four-cell, because degree classifies maps S3 to
S3. Here is the general characteristic-class comparison, rather than an
inference from the BPST example. Associate to P its defining complex rank-two
bundle E, regarded as an oriented real four-plane bundle. The SU2 action on
unit vectors is free and transitive, so P is its unit S3-bundle. A section over
the three-skeleton extends over a four-cell precisely when the boundary
unit-vector map has degree zero. Under the Thom definition of the Euler
class, its relative value on that cell is exactly this degree: trivialize E
over the cell, extend the boundary section to a vector-valued map, perturb
in its interior to finitely many transverse zeros, and apply the boundary
degree formula to the complement of disjoint oriented zero-balls. The sum
of these local degrees is the relative pullback of the oriented Thom class.
Consequently the obstruction cocycle is Euler(E_R), with coherent cell
orientations, not just a class calibrated on a single example. The published
top-Chern/Euler theorem identifies Euler(E_R)=c2(E). Changing the three-cell
section changes this cocycle by its cellular coboundary, exactly as above.
The explicit BPST calculation fixes the shared Chern-Weil sign convention.
Since H^4(X;Z)=Z
for a closed connected oriented four-manifold, equality of the Chern numbers
makes the obstruction cochains cohomologous. Adjust the three-cell
trivializations and extend the bundle isomorphism. A continuous isomorphism
can be made smooth: view its SU2 maps as unit quaternionic sections in the
bundle of quaternionic linear homomorphisms, approximate in smooth finite
charts using a partition of unity, and normalize; uniform approximation
keeps the quaternionic norm nonzero. Transfer the constructed smooth
irreducible connection along this smooth isomorphism to P. This gives the
full original conclusion, once all invoked cellular/Sobolev interfaces and
the covariant estimates above have passed the independent complete review.

## Actual remaining author obligations before a review freeze

Supply precise current item references for the finite CW model, sphere degree
classification, compact Sobolev/Rellich and the de Rham heat-module interface.
Expand the finite covariant Weitzenbock/Hessian commutation calculations enough
to fix every sign and bounded coefficient. Check the local coupled weak
regularity against the exact accepted curved proof. Then split the substantial
Green-weight correction and BPST/bundle construction into the minimal necessary
actual prerequisite sources and assemble the original donor. No mathematical
acceptance, original source replacement, metadata or gate credit is claimed
by this working development.
