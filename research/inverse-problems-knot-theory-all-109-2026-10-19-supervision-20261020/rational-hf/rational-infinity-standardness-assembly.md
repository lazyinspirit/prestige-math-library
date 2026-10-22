# Infinity standardness: actual induction and sector bookkeeping

This is a new consumer assembly of the completed surgery, uniform winding,
and fixed-label operations. Those constructions are used directly, without
another review. The integral-homology-sphere ±1-surgery ordering is being
authored by the separate topology owner and is an explicit input below,
not a consequence silently added to the accepted Kirby interface.

Put R=F₂[U,U⁻¹] and K=F₂((U)). Absolute rational gradings make infinity
homology of a torsion Spin-c summand free over R: a homogeneous Laurent
annihilator is a monomial and hence a unit. Its rank equals its dimension
after tensoring with K. Finite generation follows from the finite pointed
diagram. The base case S³ is the single Laurent generator of degree zero.

## The Euler rank in each rational-sphere Spin-c summand

Here is a finite diagram calculation which supplies the needed nonzero
Euler rank, without assuming infinity standardness. A genus-g Heegaard
diagram gives a balanced presentation of π₁(Y): the one-handle generators
are a₁,…,a_g, and the other attaching curves give relators r₁,…,r_g.
Let H=H₁(Y;Z), which is finite, and evaluate its Fox Jacobian in Z[H].
Each entry is the signed sum of crossings of that attaching curve with
the corresponding meridian disk; its group element is the prefix of the
attaching word at that crossing. In the determinant expansion, the choices
of one crossing in every row and column are exactly the intersection
generators of the two product tori. The sign is their local intersection
sign. The product of the prefixes labels their affine H-valued Spin-c
class: changing one crossing to another traces the α and β arcs of their
difference cycle, exactly the generator-assignment rule. A change of the
reference generator translates every label by one common element of H.

For any nontrivial complex character χ of H, Fox's identity gives

    Σ_j χ(∂r_i/∂a_j)(χ(a_j)−1)=χ(r_i)−1=0.

At least one χ(a_j)−1 is nonzero. Hence the evaluated Jacobian has a
nonzero null vector and determinant zero. At the trivial character it is
the ordinary abelian relation matrix, whose determinant is ±|H|. Fourier
inversion on the finite abelian group H therefore gives

    det J = ±Σ_(h∈H) h.

Both sides have integral coefficients, so equality over C[H] proves the
integral equality. Choose the common intersection orientation to take the
positive sign. The signed generator count is thus one in each Spin-c
summand. The differential is odd, so its Euler rank over R, or over K,
is also one:

    rank HF∞_even(Y,t) − rank HF∞_odd(Y,t) = 1.

Here even/odd means the intersection-sign parity with this positive
normalization, not reduction of a rational grading to an integer without
choosing its fractional origin.

## Integral homology spheres: the exact map in the cone cancellation

Let Y₁ be ±1 surgery on a knot in an integral homology sphere Y, and
let Y₀ be its zero surgery. The winding construction gives the torsion
sector of CF∞(Y₀) as a cone C of R₀→L₀, with R₀ quasi-isomorphic to
CF∞(Y), and with L₀ quasi-isomorphic to R₀ by the inward winding map.
Retain the actual triangle map C→CF∞(Y): there are no counted triangles
from L₀, while on R₀ it is the already constructed small-triangle
quasi-isomorphism q. The other non-torsion Spin-c sectors of Y₀ are
acyclic after tensoring with K. Indeed their inward/outward maps are
isomorphisms and differ in relative degree by 2n≠0; their cone matrix
becomes 1+U^|n|A with constant invertible A, which is invertible over K.

The completed surgery triangle identifies CF∞(Y₁)⊗K with the mapping
cone of this C→CF∞(Y) map, up to the irrelevant shift. In that mapping
cone, L₀ is a subcomplex and the quotient is Cone(q), which is acyclic.
The long exact sequence therefore identifies its homology with H(L₀).
Consequently infinity rank is preserved under this individual ±1 surgery.
This uses the actual quotient map q; dimensions in an unlabelled cyclic
exact sequence would not determine this conclusion.

An explicit ±1-surgery sequence through integral homology spheres now
propagates rank one from S³. This is exactly the topology induction input
being constructed by `/root/grid_original_review`. Until its proof is
supplied, this paragraph remains a conditional assembly rather than an
assertion that the stronger ordering was already accepted. Once supplied,
freeness and the Euler rank calculation above give the standard rank-one
infinity module in every integral homology-sphere case.

## Rational induction: a decreasing, specified complexity

Assume the integral-sphere base has been obtained. Induct on the positive
integer |H₁(Y;Z)|, simultaneously for every Spin-c structure of every
rational homology sphere with smaller order. Choose a knot representing a
nonzero homology class in Y. Its exterior Z has a primitive rational
longitude ℓ on its boundary torus, and the meridian m has a=m·ℓ>0
after orientation choices. Write H₁(Z)=Z⊕T. For a nonlongitudinal slope h,
the filling kills a class with nonzero free coordinate, and

    |H₁(Y_h)| = c |h·ℓ|

for one positive integer c independent of h: choose a basis of the torus
with ℓ as one vector, and compute the order of (Z⊕T)/<h>. Thus a smaller
positive value of h·ℓ gives strictly smaller order.

If a>1, use the Euclidean algorithm to write m=h₁+h₂, with primitive
h₁,h₂, h₁·h₂=1, and 0<h_i·ℓ<a. Explicitly choose a vector v with
m·v=1 and replace it by v+km until its longitude coordinate lies between
0 and a; the other vector is m−v, with orientation adjusted to the stated
intersection convention. The boundary case in which that coordinate is
zero is moved to the neighbouring Euclidean pair. The two fillings have
smaller homology order and their infinity modules are standard by induction.

In the surgery triad on these slopes the map between the two smaller
fillings is odd for the intersection-sign parities. This is a local
orientation calculation: take h₁=(1,0), h₂=(0,1) in an oriented boundary
basis, so the longitude lies in the quadrant making both h_i·ℓ positive.
The three filling curves are the horizontal, vertical and their oriented
smoothed sum. The canonical small corner changes the ordered tangent
orientation once; the auxiliary Hamiltonian-translate factors do not.
Normalizing the determinant signs of the two relation matrices positively
therefore makes this map odd. The neighbouring maps in the completed
triangle have the complementary parities. Since both smaller modules are
supported in even parity, exactness forces every odd-parity group of Y_m
to vanish. Its Euler rank is one in each individual Spin-c summand by the
Fox computation, so each such summand has rank one. This step uses neither
a nonzero summed map nor a rank hypothesis for Y_m.

## The divisibility case a=1

Here the longitudinal filling Y_ℓ has b₁=1. Let d be the order of the
image of ℓ in T, equivalently the integral divisibility of the rational
longitude. Since the original knot is homologically nontrivial in Y_m,
d>1: its core is represented by ℓ, and a multiple of ℓ can equal a
multiple of m in H₁(Z) only with zero multiple of m, by its nonzero free
coordinate. Thus

    |Tors H₁(Y_ℓ)| = |T|/d < |H₁(Y_m)|.

Choose a knot J in Y_ℓ representing a primitive free generator. In its
exterior the meridian is zero in H₁: the boundary map from H₂(Y_ℓ)
evaluates once on J. Filling to kill that free generator therefore gives
a rational homology sphere Y′ of order |Tors H₁(Y_ℓ)|. All its Spin-c
infinity modules are standard by the strict induction hypothesis.

Fix the target structure t on Y_m. Extend its restriction on Z over the
longitudinal filling, and choose a non-torsion extension s_n with positive
divisibility 2n. Such extensions exist in an unbounded arithmetic progression:
their Chern classes differ by twice the dual of the filling core. Apply
the winding decomposition first using the primitive knot J. There is one
cyclic branch and its comparison module is the rank-one infinity module
of Y′. Its connecting map is, up to invertible monomials,

    1+U^n : R→R.

The kernel is zero and the cokernel has F₂-dimension n. Hence
dim_F₂ HF∞(Y_ℓ,s_n)=n.

Now apply the finite-label winding construction using the original filling
Y_m. Its d branches are joined by inward and outward infinity
isomorphisms, so all branch modules have the same rank r, including the
branch with outgoing structure t. Eliminate d−1 branches using those
isomorphisms. The remaining cone is

    1+U^n A : R^r→R^r,

where A is a constant invertible matrix after homogeneous bases and fixed
U shifts. The total exponent n is the evaluation of c₁(s_n)/2 on the
primitive periodic surface: following the whole branch cycle crosses that
surface once, rather than dividing the exponent by d. Its determinant
has nonzero constant term and leading term U^(nr) det A. Thus the map is
injective over R and its cokernel has F₂-dimension nr, by Smith normal
form over F₂[U] and invariance under inverting U. Comparing with the
primitive-knot calculation gives nr=n and hence r=1. In particular the
desired individual t summand on Y_m is standard.

The two comparisons concern the same physical (Y_ℓ,s_n), and the smaller
Y′ is used only through the strict homology-order induction. The unknown
rank r of Y_m is not inserted into its own proof. Full Spin-c labels are
kept on the branch with t; no assertion that all restrictions are the same
structure is required.

The rational argument above therefore completes standardness *once* the
new integral-sphere ±1-surgery ordering is available. It is kept separate
from the later rational-cobordism quotient/image assembly, which still has
to identify the actual incoming class at each handle stage.
