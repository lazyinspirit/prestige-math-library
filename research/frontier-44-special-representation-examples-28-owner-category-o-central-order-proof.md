# Algebraic antidominant central order: independent proof reconstruction

Run: frontier-44-special-representation-examples-28, batch13.
Status: argument under focused mathematical review; no readiness record or
independent audit has been fabricated. This proof uses the local projective
construction in the sibling owner proof note, not the universal-Verma
ad-g-finite endomorphism theorem. Every localization below is at an actual
height-one prime of R=Sym(h)_(0).

We use the published PBW/highest-weight/Casimir/Verma-embedding and
Shapovalov-radical arguments, plus the local finite-free projective/Hom
construction. Fiebig arxiv math/0305378 §§3.1–3.3 supplies the motivating
rank-one congruence order and height-one intersection route. Its imported
quiver relation h=h_alpha is not being taken as an unproved prerequisite:
Casimir eigenvalues below replace that step.

## 1. The antidominant flag has every standard once

Let v=lambda+rho, lambda dominant regular integral, and a=w0 dot lambda.
The most-singular block at -rho has only one simple and one Verma; BGG
reciprocity and enough projectives make it semisimple. Translate its simple
with E=L(v) and project to the lambda block. The resulting Q is projective
and injective by exact biadjunction. Its Verma factors have highest weights
-rho+nu, with nu an E-weight. The factors in the selected central character
are precisely nu=xv, x in W, each an extremal weight of multiplicity one.
Thus Q has a flag consisting of each Delta(x dot lambda) exactly once.

Adjunction in the opposite direction identifies
Hom(Q,L(a)) with Hom(L(-rho),pr_{-rho}(E* tensor M(a))). Only the highest
E*-weight -w0v survives this projection, with multiplicity one, so this Hom
space is one-dimensional. The simple L(a)=M(a) is a quotient of Q, and the
projective cover P(a) splits off Q (lift through its essential cover and split
using projectivity). By the Verma embedding criterion, M(a) embeds in every
Delta(x dot lambda), so [Delta(x dot lambda):L(a)]>=1. BGG reciprocity makes
each standard multiplicity in P(a) at least one. It is at most one because
P(a) is a summand of the once-each flag of Q. Therefore all are exactly one,
and the complementary flag has length zero; Q=P(a).

The same argument works for dominant singular integral nu with v=nu+rho:
retain the distinct extremal weights Wv, labelled by W/W_nu. The
antidominant Verma is simple also on chamber walls: its shifted highest weight
pairs nonpositively with every positive simple root, whereas a proper singular
weight lowered by nonzero beta would require
2(a+rho,beta)=(beta,beta)>0, impossible. The antidominant Verma embeds in each
standard of the orbit by the singular version of the same Verma embedding
criterion. Thus the singular antidominant projective also has every distinct
standard exactly once.

By the local projective construction, the lift P_R has the identical finite
Verma flag and arbitrary Hom base change. End(P_R) is finite free over R.
Over K=Frac(R), the flag factors are simple with distinct central characters,
so P_K is their direct sum and End(P_K)=K^W (singular: K^{W/W_nu}).
This embeds End(P_R) in that tuple algebra.

## 2. The height-one residual categories are one-label or two-label

Let p be a height-one prime, T=R_p, and k=Frac(R/p). Its tautological weight
tau is the generic point of the corresponding prime divisor. For labels
x dot lambda and y dot lambda, equality of residual central characters is
equality of the W-orbits of xv+tau and yv+tau. Invariant polynomials separate
finite W-orbits over any characteristic-zero field by finite interpolation
and averaging. If xv+tau=w(yv+tau), comparison of the constant and linear
parts modulo p shows xv=wyv and tau=w tau in k. Since v is regular,
w=xy^{-1}. A nonidentity W-element can fix the generic point of a divisor
only when its fixed subspace is a hyperplane, so it is a reflection and p is
the corresponding root-coroot linear prime. (An orthogonal finite-W element
with a codimension-one fixed subspace has its remaining eigenvalue -1.)
Thus at a nonroot prime all residual characters are distinct. At a root prime
p=(tau(alpha^vee)), the equal-character classes are precisely {x,s_alpha x}.
For singular v, some classes are singletons because s_alpha xv=xv; the others
are pairs of distinct cosets. The comparison still holds: a divisor equation
has zero constant term, so xv=wyv, and w fixes its generic point.

All residual simples in the deformed relative-weight category have highest
weights nu+tau with nu complex. Their central characters determine the same
classes: if a transformed weight w(xv+tau)-rho is again nu+tau for constant
nu, then w tau=tau in k. Thus there are no additional residual relative-weight
labels in these components. Highest-weight classification and the
Harish-Chandra calculation commute with the characteristic-zero scalar
extension: their PBW equations and finite weight-space kernels commute with
field extension; the split Cartan has the same root data. No algebraic closure
is needed for highest-weight lines, whose endomorphisms are the residue field.

The finite central polynomial/resultant argument used for Q_R now separates
these residual classes over T and supplies actual projectors of P_T. Since
Hom base change holds for the constructed projective, these components and
their residual fibers remain projective in the relevant truncated categories.
Each component has exactly the one or two Verma factors assigned above.

## 3. A pair's upper Verma has length two and lower Verma is simple

In a pair choose relative highest weights b=s_alpha dot a=a-n alpha with
n=<a+rho,alpha^vee> a positive integer, choosing alpha positive and the upper
label a. Over k, put A=a+tau and B=b+tau. A has only the one positive
Shapovalov-factor hyperplane, since every other root linear form in tau is
nonzero in k. The symbolic version of the published generic-radical proof
applies without a countable-set choice: for a possible lowered singular
weight A-gamma, Casimir requires
2(A+rho,gamma)=(gamma,gamma).
Its coefficient in the generic hyperplane parameter vanishes only if gamma
is proportional to alpha; its constant term then forces gamma=n alpha.
For B the shifted alpha pairing is -n, so no positive gamma is possible.
Therefore M(B) is simple.

The Shapovalov determinant factor at n alpha makes the radical of M(A)
nonzero. A minimum-height radical weight is singular and must be B. Its
Verma map from M(B) is injective; the space of such maps is one-dimensional.
Every vector in the radical's B-weight is singular because there is no radical
weight above it, so that weight space is exactly one-dimensional. If the
radical modulo M(B) were nonzero, its minimum-height singular weight would
again have to be B by the same Casimir argument, but that quotient has zero
B-weight. Thus the radical is exactly M(B) and M(A) has length two.
This is the actual PBW/Casimir proof of the generic-radical item transported
to the function field of the hyperplane, rather than an invocation of a
complex closed-point theorem outside its hypotheses.

## 4. The rank-one endomorphism order is the congruence order

The pair projective over T has a Verma flag with Delta_T(a) and Delta_T(b)
once each. The canonical maximal-weight submodule is Delta_T(a), so there is
an exact sequence 0->Delta_T(a)->P_T->Delta_T(b)->0. Its residual fiber
cannot split: if it did, its projective summand M(B) would be projective,
but dualizing the nonsplit length-two M(A) gives a nonsplit exact sequence
0->L(A)->dM(A)->L(B)=M(B)->0. Restricted duality is exact, fixes simple
highest-weight modules and preserves nonsplitting, proving M(B) nonprojective.
The field version of maximal-weight Verma-flag peeling shows any nontrivial
projective decomposition of this two-factor object would be that impossible
split. Hence its residual fiber is indecomposable and the standard extension
is nonsplit.

Any endomorphism f preserves the canonical Delta_T(a), and acts on it and on
the quotient Delta_T(b) by scalars u_a,u_b in T. If u_a-u_b were nonzero
modulo p, the residual polynomial projector (f-u_b)/(u_a-u_b), using
(f-u_a)(f-u_b)=0, would split the residual standard extension. Therefore
u_a congruent u_b mod p. End(P_T) embeds into T^2 after generic splitting,
so its order is contained in {(u_a,u_b):u_a=u_b mod tau(alpha^vee)}.

The quadratic Casimir eigenvalues on the two generic standards differ by
2n(alpha,tau)=n(alpha,alpha) tau(alpha^vee). The coefficient is a nonzero
complex scalar, hence a unit of the DVR. The identity gives (1,1); subtracting
one scalar eigenvalue from the Casimir and dividing by this unit gives
(tau(alpha^vee),0). These generate the full congruence order as a T-module,
and both are central-action endomorphisms. Thus the order is exactly that
congruence order and central action is surjective on it. For singleton
components the order is T, generated by the identity. Central polynomial
projectors separating different residual classes allow these generators to
be chosen independently on every component.

## 5. The invariant tensor order has the same localizations

Let B=R tensor_{R^W}R with right R structure. Polynomial invariant freeness
makes B finite free of rank |W|; localization at the origin preserves this
freeness. The invariant subring of R equals the origin localization of S^W:
averaging, or multiplying the finitely many conjugates of a denominator,
clears invariant fractions with denominator a unit at0.

Embed B into K^W by f tensor r -> (f(x^{-1}tau)r)_x. Generically the W-orbit
is free; finite interpolation gives all tuple coordinates, so this is an
isomorphism after extension to K. It is injective already over R by freeness.
At a nonroot height-one prime all these orbit points are distinct modulo p;
choose a linear f separating their finitely many residue values. Its
annihilating polynomial has linear factors with pairwise-unit differences,
so the CRT projectors in B_T split each branch. Thus B_T=T^W.

At a root prime there are pairs of coincident orbit points and no others.
Choose a linear f separating the different pairs modulo p; group its full
orbit polynomial into those pair factors. Their resultants are units, so
CRT isolates each pair in B_T. Every evaluation difference within the pair
is divisible by tau(alpha^vee), including for localized polynomials whose
denominators are units at0. Conversely choose a linear h with
h(x^{-1}alpha) nonzero. The two evaluations of h differ by a nonzero scalar
multiple of tau(alpha^vee). With the pair projector and the diagonal right-T
scalars, this supplies (tau(alpha^vee),0), so the pair component of B_T is
the full congruence order. This proves the exact integral order without
using a generic dimension count to assert surjectivity.

For a stabilizer H=W_nu take H-invariants on the first factor. Reynolds
averaging identifies B^H=R^H tensor_{R^W}R, which is finite projective and
hence finite free as a right R-module. Its tuples are constant on the
appropriate right H-cosets. Taking invariants of the proved local orders
produces precisely the pair/singleton orders for W/H. Thus the same order
calculation holds in the singular case.

## 6. Global equality of integral orders

Both End(P_R) and B (or B^H) are finite free R-submodules in the same generic
tuple algebra, and sections2–5 prove equality of their localizations at every
height-one prime. A finite free R-module is the intersection of its height-one
localizations in its fraction-field extension: in a basis this is the statement
that a rational function with no pole at any irreducible polynomial belongs
to the polynomial local ring R. Hence the two orders are equal globally.
The canonical generic map therefore identifies End(P_R) with B (or B^H).
This is a complete integral comparison, not a inference from only the generic
and closed fibers.

## 7. Shifted central action is onto and has the displayed kernel

Let H be the stabilizer of v=nu+rho. Under the tuple identification, z tensor r
acts by HC_rho(z)(xv+tau)r=HC_rho(z)(v+x^{-1}tau)r. Thus the action is the map
z tensor r -> HC_rho(z)(v+tau) tensor r into B^H, which is H-invariant in
the first factor. Its kernel is exactly the kernel of this tensor map, since
the tuple embedding is injective.

The closed right fiber of B^H is C^H. For any desired class in C^H, choose an
H-invariant polynomial h(tau) representing it (average a representative) and
an integer N greater than the highest nonzero coinvariant polynomial degree.
At the distinct orbit points Wv prescribe jets of order N: jet h(X-v) at v
and zero jets at all other points. The powers of their distinct maximal
ideals are comaximal, so ordinary polynomial CRT gives a polynomial q with
these jets. Set p(X)=(1/|H|) sum_{w in W} q(w^(-1)X), i.e. use the unnormalized
sum divided by |H|, or multiply the normalized Reynolds average by |W|/|H|.
The resulting W-invariant p has Taylor expansion p(v+tau)=h(tau) modulo
(tau)^N: the summands for w outside H have zero jets, and each of the |H|
summands for w in H has jet h(w^(-1)tau)=h(tau). The error is zero in the
coinvariant quotient. Harish-Chandra surjectivity realizes p by a z in Z,
proving shifted-central image onto C^H. This treats regular and singular
weights uniformly, without an unproved appeal to Luna's slice theorem.

The image of Z tensor R is an R-submodule of the finite free target B^H;
its cokernel is finitely generated and its closed fiber is zero. Nakayama
therefore proves surjectivity over R itself. The action map and shifted
Harish-Chandra tensor map have identical kernels and are both surjective.
Specializing the right factor and applying projective Hom base change proves
the closed-fiber Endomorphismensatz End P_antidominant=C^H.

## 8. Current interfaces

This note proves the central order and ordinary/singular closed fibers using
the constructive local projective interface. The dictionary note supplies the
actual dominant-facet translation counts and adjunction proof: translation out
sends the singular antidominant projective to the regular one, and onto sends
it to |H| copies of the singular projective. Under the shifted HC maps the
out-translation End map is the invariant-order inclusion, as checked on generic
branches. No fixed unshifted central element is asserted unchanged by tensoring.

The all-T universal-family theorem has a separate Duflo/isotypic finite-kernel
proof. Reduction-of-Hom, reduced indecomposability and individual standard ranks
are proved in the dictionary note. This central-order proof does not establish
those interfaces by a dimension count. Readiness awaits root stable guard.
