# Finite based kernel duality and the dimension-15 boundary lagrangian

New unit, 2026-10-21. Author /root/top_free_abelian_torsion. Draft for
independent review. This does not assert an entire surgery exact sequence,
an L-group calculation, or a higher-dimensional consequence of a dimension-7
module.

## Exact finite-dimensional scope

Assume CC and let R=Z[Z^d], with a supplied finite coordinate generating set,
any finite d. Its involution sends each group element g to g^-1. All manifolds
and degree-one data here are ORIENTED, as in the actual torus/product
application. Boundary coefficient systems are pulled back from R over the
CONNECTED target Y; R is not replaced by the group ring of each boundary
component. In particular boundary fundamental groups need not equal pi1(Y).

Let phi:(N,M)->(Y,X), M=boundary N, be an actual degree-one map of compact
collared oriented manifold pairs, with N,Y connected and of dimension 15.
The source N is an ACTUAL DIFF manifold, M has its induced smooth structure,
and the supplied collar is smooth. The target need not be smooth.
A finite CW pair model with its actual cellular comparison and cap maps can
instead be supplied for the target, provided its local-coefficient duality
is supplied. In the actual instance Y is a compact manifold/product.
Suppose pi_0(M)->pi_0(X) is a BIJECTION, N->Y is 7-connected,
and each corresponding connected map M_i->X_i is 7-connected. This is
global boundary 7-connectivity, not just a condition on each source
component without a component bijection. Also suppose

    K_7(N,M;R)=ker[H_7(N,M;R)->H_7(Y,X;R)]=0.

There are finite based free kernel chain complexes E_M,E_N,E_rel, natural
up to finite chain homotopy, and an actual degreewise based exact sequence
0->E_M->E_N->E_rel->0. Their homology is the kernel homology K. It is
concentrated respectively in degrees 7,7,8. The three nonzero modules are
finitely generated projective and explicitly stably free. Put

    L=K_8(N,M), K=K_7(M), H=K_7(N).

There is a split, preferred-stably-based exact sequence

    0 -> L --partial--> K --i--> H -> 0.              (A)

An actual finite free chain comparison induces a simple isomorphism

    U:L -> H^* = Hom_R(H,R)                          (B)

with the conjugate right-module convention. The kernel intersection pairing
on K satisfies

    lambda(partial l,z)= +/- U(l)(i z).              (C)

The sign is the fixed cap/boundary orientation sign; absorb it into U.
Consequently partial L is a direct-summand self-annihilator of K. After a
finite compatible free stabilization, bases can be chosen so (A) is based
and (B) is simple. All comparisons and stabilizations are actual finite
matrices and chain homotopies; these assertions do not follow merely by
quoting K0 or Wh values.

For the GEOMETRIC lagrangian assertion also supply the actual normal datum:
a bundle nu over Y and stable trivialization B of TN plus phi*nu, with its
boundary product convention. The quadratic refinement mu is the usual
signed group-labelled double-point sum of the corresponding normally framed
7-sphere immersions in M^14. Then lambda and mu vanish on partial L. Thus L
is a based lagrangian in the exact sense needed for Wall5.7/5.6. A stabilized
finite basis is realized by FINITE LABELLED FAMILIES of normally framed
boundary-sphere immersions and by framed punctured-8-sphere nullbordisms of
their boundary cycles. When M is disconnected a basis vector need not be a
single sphere in one component. No assertion that those punctured spheres
represent the prescribed relative class l itself is necessary or made.

The even-dimensional counterpart used before this bordism step is included:
for a degree-one 7-connected map from an actual compact oriented DIFF
14-manifold, with its smooth boundary collar, to a compact oriented
14-manifold (or supplied finite Poincare target), with
boundary equivalence as supplied, the middle kernel is finite stably based
projective and its cap/intersection duality is simple. These are the same
chain constructions below with dimension 14. An embedded middle basis and
the subsequent surgeries are separate declared Whitney/surgery operations;
they are not claimed from abstract bases alone.

## Actual reading and declared inputs

Full primary acquired previously by another owner, newly read here:
Wall, Surgery on Compact Manifolds, second edition, Chapter2 printed21--30
(PDF33--42), including full proofs2.1--2.6; Theorem5.6/Lemma5.7 and proofs,
printed50--53/PDF62--65; the relative-immersion setup1.3 and its proof,
printed13--14/PDF25--26, with the adjacent explanation printed12--15.
Durable full source is sibling
renewed-relative-tangent-germ/sources/low-connectivity-primary/
wall-surgery-compact-second-edition.pdf and .txt. No other Wall chapter is
claimed read for this unit.

Only Statements/Definitions, no accepted Proof bodies, were consulted for:

* compact-collared local-coefficient Lefschetz duality in ZF;
* involutive twisted chain duals realizing local coefficient systems;
* cellular chains with local coefficients and based universal-cover chains;
* finite relative cellular approximation (choice-free clause);
* the choice-free relative Hurewicz comparison with a supplied weak CW model;
* finite relative triangulation of compact corners, whose Statement expressly
  dispenses with its ambient AC hypothesis, and its whole-star definition;
* composition/sum formulas for Whitehead torsion, including its finite
  based exact-complex algebraic clause;
* the previously adopted free-abelian integral group-ring K/Wh Statement;
* formal immersion extension over a subcritical handle: under CC, full
  source-m columns, k<n, compact formal data genuine on an OPEN source
  neighborhood of the previous compact source are integrated RELATIVE to
  that source and relative parameters. This is the spatial-relative clause,
  not a miscast closed-source or parameter-only Smale--Hirsch assertion.

No whole homology-of-homotopy-fibers identification, arbitrary-module global
resolution, or unspecified preferred-basis geometric theorem is an input.

## 1. Actual finite local-coefficient chains and cap maps

Choose finite compatible CW pairs from the declared finite manifold
triangulation interface, or use supplied finite models and comparisons.
Compatible subdivisions are allowed; retain actual protected subcomplexes
where required. Finite cellular approximation gives the chain maps of phi.
Order and orient the cells and select ONE lift/target whisker for each.
This is a finite tuple of choices. The induced R-local cellular chains of
N,M,Y,X and their pairs are finite free right R-modules on these cells.
At a boundary component the lift is in the PULLBACK of the target cover;
it need not be a component's universal cover. Matrices record actual signed
incidence labels in pi1(Y), with the right deck convention c.g=T_(g^-1)c.
This prevents a duplicate group-ring factor or a change of coefficients at
the boundary.

Use a finite fundamental relative cycle, a cellular diagonal approximation,
and the cellular/singular comparisons to define the cap chain maps. All
choices are finite and all changes are cellular chain homotopies. The
involution converts the dual right R module as in the declared local-system
interface. Write D_m C for the regraded dual: (D_m C)_i=Hom_R(C_(m-i),R),
with the conjugate module action and the standard regrading sign in the
cochain differential. Signs are fixed by the front-face cap convention.
They may change an oriented basis vector by -1, which is among the allowed
simple basis units. The resulting chain maps include

    d_N:D_m C(N) -> C(N,M),
    d_Y:D_m C(Y) -> C(Y,X),

and the reverse absolute/relative cap maps. They are homology isomorphisms
by the ZF local-coefficient Lefschetz Statement. Their mapping cones are
bounded acyclic finite free complexes. Such a complex is contractible:
split the surjection onto its lowest free term and continue upwards through
its projective cycles, a finite induction. This provides actual chain
homotopy inverses, not only homology isomorphisms.

Naturality is valid with these transported coefficients. On a lifted
singular simplex the front-face cap formula multiplies the edge transport
labels in their path order. Applying phi gives the same transported labels
and faces, so the usual cap/projection formula holds before passing to
homology. A change to cellular diagonals introduces only the finite cellular
homotopy. Degree one therefore gives the CHAIN-HOMOTOPY relation

    phi_rel d_N (D_m phi_abs) ~= d_Y.                (1)

The analogous relation holds with absolute/relative interchanged and on
M->X. This also proves the coefficient-compatible splitting assertions:
cap, pullback, and inverse cap give a homotopy right inverse (umkehr) for
each forward cellular chain map. They are not claimed to be ordinary
geometric sections of the original map.

## 2. A finite FREE strict kernel, with an explicit chain section

Here is a model which avoids replacing a chain kernel by an unproved
projective/free object. For any finite free chain map f:A->B set

    D(B)_i=B_i plus B_(i+1),
    d(x,y)=(d_B x, x-d_B y),
    h(x,y)=(y,0).

Then dh+hd=1, so D(B) is contractible. Projection q(x,y)=x is a chain map
and is chain-nullhomotopic by k(x,y)=y. On A'=A plus D(B) define

    p(a,x,y)=f(a)+x.

It is a degreewise surjective chain map. Its kernel is explicitly

    E(f)_i=A_i plus B_(i+1),
    d_E(a,y)=(d_A a,-f(a)-d_B y),
    j_E(a,y)=(a,-f(a),y).                            (2)

Thus it is FINITE FREE with the displayed cell bases, not just projective.
The degreewise change from (a,x,y) to ((a,y),f(a)+x) is triangular with
unit diagonal, up to a basis permutation. It gives a degreewise based
exact sequence 0->E(f)->A'->B->0.

Let s:B->A' be the homotopy umkehr from Section1, and choose H with
id_B-p s=dH+Hd. The graded lift sigma(b)=(0,b,0) is explicit. Put
T=sigma H and

    s'=s+dT+Td.

It is a CHAIN map and p s'=id_B. Thus A'=E(f) direct-sum s'(B) as chain
complexes, with projection P=1-s'p. This gives actual finite matrices for
the section, projection, and comparison. Their number may depend on the
finite input; no uniform algorithm or Gaussian elimination over R is
assumed.

Apply (2) to the three maps on boundary, absolute, and relative chains.
Since the construction uses direct sums and the original cellular exact
sequences, there is an actual degreewise based exact sequence

    0 -> E_M -> E_N -> E_rel -> 0.                  (3)

The projections p split on homology by degree-one duality, so H_i E(f) is
exactly ker[H_i A->H_i B], in every degree. No assertion about all homology
of a homotopy fiber is being used. The construction is natural for strictly
commutative cellular pair diagrams; cellular homotopies give the usual
explicit homotopy changes of its matrices.

## 3. Actual chain kernel duality

Denote the absolute and relative maps by f and g. Add the contractible
D(B) terms as above and extend d_N by zero on their duals, followed by
inclusion into the relative enlarged complex. This is still a chain
homotopy equivalence d'_N:D_m A'_abs->A'_rel. Contractible summands are
being added, not additional geometric homology.

Choose the strict section s'_g so its homotopy class is the cap umkehr
from (1). Naturality then says

    d'_N D_m p_f ~= s'_g d_Y.                      (4)

The dual of 0->E_f->A'_abs->B_abs->0 is split by the dual of s'_f.
Let k:D_m E_f->D_m A'_abs be that actual chain section of restriction.
Define the finite chain map

    U_chain=P_g d'_N k : D_m E_f -> E_g.            (5)

To prove it is an equivalence rather than merely write a matrix, use the
two split exact rows

    0 -> D_m B_abs -> D_m A'_abs -> D_m E_f -> 0,
    0 -> B_rel    -> A'_rel     -> E_g     -> 0.

Their left vertical is d_Y and their middle vertical is d'_N. The left
square commutes up to (4). Rectify it: on the direct summand D_m B_abs
replace the middle map by s'_g d_Y, leaving it unchanged on k(D_m E_f).
The alteration is chain homotopic to zero by (4), extended via the split
projection onto D_m B_abs. Hence this new middle map remains an equivalence
and makes the left square strict. Its quotient is (5). The exact homology
sequences show (5) is a homology isomorphism. Its bounded finite FREE cone
is contractible by the finite splitting argument in Section1. This earns
an ACTUAL finite free chain homotopy equivalence

    D_m E_N ~= E_rel.                              (6)

Boundary duality similarly gives D_14 E_M~=E_M. Reversing the cap roles gives
the converse of (6). Applying Hom or the appropriately twisted tensor with
any coefficient module preserves these equivalences and contractions.
There is no non-flat tensor inference from a mere homology isomorphism.

R has Wh(Z^d)=0 by the adopted exact algebra Statement. Consequently these
actual equivalences have zero Whitehead torsion with respect to the
specified cell/stabilization bases. This establishes SIMPLE kernel duality
for this exact coefficient ring. Wh=0 is used ONLY AFTER the finite maps,
sections and contractions have been constructed. It does not construct them.

## 4. Concentration, projectivity, explicit stable bases, based sequence

Connectivity and the first relative Hurewicz comparison applied to the
mapping-cylinder CW pairs give H_i E_N=H_i E_M=0 for i<7. Induced R boundary
coefficients cause no problem in that first degree: the lower universal
chain complex is split contractible, so tensoring its first cokernel gives
the same first nonzero homology. From (3) and the extra assumption,
H_i E_rel=0 for i<=7. A bounded free complex acyclic below a degree has its
lower truncated part split contractible; this follows by the same finite
induction through projective cycles. It follows for ALL coefficients that
its cohomology vanishes in those lower degrees as well.

Use (6). Since E_rel is split acyclic through7, H_i E_N=0 for i>=8.
Since E_N is split acyclic through6, H_i E_rel=0 for i>=9. Boundary dimension14
duality similarly kills H_i E_M for i>=8. Thus the only homology is as
stated in degrees7,7,8. The same split-truncation and (6), now with arbitrary
coefficients, show

    H^8(E_N;Q)=H^8(E_M;Q)=H^9(E_rel;Q)=0

for EVERY R-module Q. This is the projectivity input, not a conclusion
from homology concentration alone.

For completeness the finite algebra is as follows. If C is bounded finite
free, acyclic below r, split its lower truncation to get a projective cycle
module Z_r. Let B_r be its boundaries. The cocycle d:C_(r+1)->B_r is a
coboundary because H^(r+1)(C;B_r)=0. Thus some a:C_r->B_r satisfies
ad=d, and a|Z_r is a retraction of B_r. Hence

    Z_r=B_r direct-sum H_r(C)

and H_r(C) is finitely generated projective. Split the remaining finite
acyclic upper complex. Every term now has its actual decomposition into
boundary summands, the homology summand (in degree r), and the preceding
boundary summand. Pair these summands in even/odd degrees to obtain the
explicit Euler isomorphism

    H_r(C) plus direct_sum_(i not congruent r mod2) C_i
       ~= direct_sum_(i congruent r mod2) C_i.      (7)

All terms on the right and the stabilizing term on the left have supplied
finite free bases. Thus (7) is an actual stable basis, not just a K0 equality.
The splittings construct the actual contraction of the complement and a
comparison H_r(C)[r]~=C. Negative initial degrees of E(f) merely shift this
finite parity calculation and create no unbounded induction.

Define a preferred stable basis by requiring this finite comparison to have
zero Whitehead torsion. Any finite basis change is an invertible matrix;
Wh(R)=0 makes the requirement independent up to the allowed simple stable
changes. The degreewise based sequence (3) now has exact homology
sequence (A). Projectivity of H splits (A) by lifting finitely many stable
basis elements, then using its projective summand projection. The finite
based-exact-complex torsion formula applied to the split complexes and
their contractions shows that (A) is based. Equivalently choose a stable
basis of L and lift a stable basis of H: their concatenation is a preferred
stable basis of K. This conclusion also follows directly here from Wh=0,
but the exact sequence and its actual lifts have already been constructed.

To make these actual free bases compatibly, choose s so L plus R^s and
H plus R^s are both free. Then K plus R^(2s) is their direct sum, and
stabilize (A) by the split sequence 0->R^s->R^(2s)->R^s->0. This is the
algebraic hyperbolic stabilization. Its realization by normal trace handle
additions belongs to the separate normal-surgery supplier. If an actual
transition matrix must be realized, the Wh=0 assertion means, by the
definition of stable elementary equivalence, that after finitely many
stabilizing identity blocks it is a finite product of elementary matrices,
basis signs/permutations, and group-unit changes. Select that FINITE word;
no Laurent-ring Gaussian elimination is assumed. The individual handle
slides/orientation/lift operations are then the declared geometric supplier,
not an unproved assertion that a module basis is already a handle basis.

Finally (6) and the projective concentrated comparison give (B), including
its preferred stable basis and actual finite matrix representative.

## 5. Boundary adjunction, self-annihilator, and relative signs

The chain boundary formula for cap with [N,M] implies that the boundary
of its cap is, up to its fixed degree sign, cap on M with the restricted
cochain. With alpha the kernel cohomology class corresponding by (6) to
l in L, its restriction to M is dual to partial l. Hence for z in K,

    lambda(partial l,z)= +/- <alpha, i z>.

Changing alpha by a pulled-back target cohomology class evaluates to zero
on the kernel i z, so this is well-defined on kernel/cokernel classes.
Under the concentrated chain comparisons its evaluation is exactly (C).
This is also valid for the disconnected boundary with its R whiskers;
its orientations are the actual signed boundary orientations.

Since H is finite projective, its R-valued dual separates points: embed
H as a direct summand of a finite free module and use its coordinate
functionals. By (B), vanishing of lambda(partial L,z) is equivalent to
iz=0. Exactness of (A) gives z in partial L. Thus partial L equals its
annihilator and is a direct summand. On M the middle kernel pairing is
nonsingular by the same concentrated boundary cap chain equivalence.
This proves the bilinear lagrangian assertions with actual based modules;
no rank or field argument replaces them.

## 6. Finite normally framed boundary representatives and nullbordisms

We now earn the quadratic isotropy, not merely the annihilator assertion.
Only the boundary of l matters. Write z=partial l. A boundary component
map M_i->X_i is 7-connected. Apply the choice-free FIRST relative Hurewicz
comparison to its simply connected lifted mapping-cylinder pair: its
pi_8 classes generate its first relative homology. After inducing to R,
the same first cokernel still computes H_8, since all lower chain terms
split contractibly. Degree-one splitting identifies it with K_7(M_i;R).
Consequently z is represented by a FINITE sum of labelled boundary maps
S^7->M_i, each equipped with its target nullhomotopy in X_i and a whisker
to the common Y basepoint. Coefficients are finite group-ring sums; they
may be represented by repeated/orientation-reversed spheres and group
whiskers. Only finitely many lifts/components are involved.

The stable tangent marking of each parameter S^7 is the BOUNDING one:
TS^7 plus its radial line is identified with epsilon^8 by its standard
round embedding in R^8. Orientation reversal changes the parameter and
its bounding marking together. The restriction of B to M uses the given
smooth N-collar, so TN|M=TM plus its collar line. Pull B back to a sphere
j and trivialize j*phi*nu using its specified target nullhomotopy and a
fixed frame at the end of its whisker. Comparing this trivialization with
the bounding tangent marking gives an actual stable bundle isomorphism

    TS^7 plus epsilon^7 plus epsilon^a
        -> j*TM plus epsilon^a.                    (S)

The collar line in B and the radial line in the bounding marking are
paired with the boundary orientation convention; they are not silently
discarded as arbitrary tangent vectors. The resulting stable class (S)
is exactly the normal-map marking specified by B and this nullhomotopy.
Use cancellation of stabilization of this RANK14 isomorphism, not a
chosen tangent frame of the sphere: the fibers SO(r+1)/SO(r)=S^r for
r>=14 have no obstruction in dimensions at most 7 or for the relative
homotopies used here. Thus (S) gives an actual isomorphism
TS^7 plus epsilon^7 -> j*TM. Restrict it to TS^7 and integrate the resulting
formal immersion by the finite procedure below. Transporting the seven
normal columns along the formal homotopy gives an actual normally framed
immersion whose stabilized derivative-plus-normal is homotopic to (S).
Retain that specific homotopy as part of its finite data. These are the
framings computing the prescribed lambda and mu, not independently
chosen stable trivializations of TM.

Their whiskered classes map to pi_8(N->Y). That group is isomorphic to
K_7(N;R): this is again the FIRST relative Hurewicz isomorphism, since
N->Y is 7-connected and induces the pi1 isomorphism. The sum maps to iz=0,
so its sum is zero in pi_8(N->Y), equivalently in pi_7 of its path-model
homotopy fiber. This uses no higher homotopy-fiber homology comparison.
A finite sum in pi_7 is represented by connected sum with thin constant
necks. A nullhomotopy of that sum, and the standard 8-dimensional pair of
pants splitting those necks, give a map

    u:T^8 -> N,   u(boundary T) -> M,

where T is S^8 with finitely many open 8-balls removed. It bounds exactly
the chosen finite labelled boundary-sphere cycle. The homotopy-fiber map
also supplies a target nullhomotopy of phi u to its finite whisker tree;
on each boundary component it is the specified X_i nullhomotopy followed
by that whisker. This is the precise relative bundle data. We do NOT need,
and do not assert, that [T,boundary T] maps to the originally prescribed l.
It is a nullbordism of its boundary cycle, which is sufficient below.

Here are the formal and relative immersion details at their actual
dimensions. Use the standard source pair of pants and caps in the preceding
homotopy-fiber construction: T is a round closed 8-ball with finitely many
disjoint round open 8-balls removed, after choosing one puncture as the
outer one. Its coordinate tangent marking is the derivative of this
embedding into R^8. On EVERY boundary sphere its restriction is the
bounding marking TS^7 plus the signed collar line used in (S). Indeed both
maps send a tangent vector to its derivative in R^8 and the line vector
to the signed radial normal; the outer/inner signs are the ordinary
boundary orientation signs. If parameters of the original spheres are
changed to these boundary parameters, pull back their maps, nullhomotopies
and markings together. Thus no extension of a prescribed adapted tangent
FRAME over T is being asserted.

Choose a frame of nu at the root of the finite whisker tree. The specified
homotopy of phi u into that tree trivializes u*phi*nu by pullback and
homotopy transport, compatibly with all the boundary nullhomotopies.
Together with the pulled-back ACTUAL B this gives a stable trivialization
of u*TN. Compare it with the coordinate tangent marking of TT plus the
seven constant normal coordinates. The result is an actual stable bundle
ISOMORPHISM

    Psi: TT plus epsilon^7 plus epsilon^a
              -> u*TN plus epsilon^a.             (T)

Here a is a finite common stabilization; adding constant coordinates
makes all the finitely many stable identifications have this same size.
This construction uses B itself and the supplied nullhomotopy, not an
unrelated stable trivialization of u*TN.

On a boundary product collar the required unstabilized isomorphism is

    (v,t,w) -> dj(v) + t*(inward collar vector) + normal_j(w),

where the signed source collar coordinate is chosen to map inward in N.
Equivalently use outward source normal mapped to outward N normal. On
an incoming bordism face the supplied normal-map convention uses the
inward normal along that face: reverse this line when comparing with the
induced boundary orientation of N, and reverse the corresponding source
line at the same time. The outgoing face uses the outward convention.
These fixed line signs leave the given normal seven-frame unchanged; the
trace B remains literally the supplied product on incoming and side germs.
The boundary orientation convention identifies its tangential restriction
with (S). The normal frames and the retained integration homotopy in the
sphere step therefore give an explicit stable homotopy from Psi on that
collar to this derivative-plus-normal isomorphism. All boundary components
use the restrictions of the SAME target nullhomotopy and coordinate
source marking just described. In particular the comparison is compatible
on every component, rather than merely asserting that two trivial bundles
are isomorphic. Extend each of these finite homotopies over a slightly
larger source collar with a cutoff. This modifies (T) so that it is
LITERALLY that derivative-plus-normal map on a smaller genuine open
collar, without changing its stable B class. This also explains why the
quadratic refinement has not been changed by an arbitrary boundary
framing adjustment.

Cancel epsilon^a on the RANK15 bundle isomorphism (T), relative to that
smaller collar. The actual finite obstruction problem is for the
inclusion of rank15 isomorphisms in stable isomorphisms, whose successive
sphere fibers are SO(r+1)/SO(r)=S^r, r>=15. These spheres are
14-connected. Thus extension and the required homotopy relative to the
boundary collar over the finite 8-dimensional pair have zero obstructions.
Finite relative cellular lifting gives an actual

    TT plus epsilon^7 -> u*TN,

with exactly the prescribed derivative and normal seven-frame on the
collar and with stabilization homotopic to (T) there. Restricting this
ISOMORPHISM to TT supplies the formal eight-column immersion and its
normal seven-frame. This does not require any global parallelization of
TT adapted to the boundary tangents or collar normals.

Before integration make u a proper smooth map with a prescribed product
boundary collar. Attach the inward N-collar to each given boundary immersion;
on the rest push any boundary hits a positive distance inward using that
collar, with a source cutoff zero on the fixed smaller boundary germ.
Finite relative smooth approximation in source/target chart patches then
makes the interior map smooth, preserving that germ and its target
nullhomotopy up to the specified relative homotopy. This does not change
the boundary cycle. Remove an outer HALF of that fixed source collar to
obtain compact T_0. Its whole remaining map and its attaching collar now
lie in int(N), a BOUNDARYLESS smooth target. The interface below is applied
to T_0 and int(N); it is not applied illegally to a target with boundary.
The outer fixed product collar is restored afterward, so the final
immersion is proper in N and has no extra interior hits of M.

Use this actual bundle isomorphism to give TT->u*TN its formal
8-column immersion, with its normal 7-frame and the genuine prescribed
boundary collar. After the preceding proper smoothing, transport the
isomorphism along that relative homotopy of u, fixed on this collar.
Take a finite relative handle decomposition of T_0 starting
with that genuine collar in int(N). EVERY source handle index is <=8<15. The literal CC
subcritical-handle immersion Statement therefore integrates these data
relative to the collar; the cocore is still a SOURCE factor. Formal
continuation through the finite remaining handles uses homotopy extension
of the bundle monomorphism data, or its stipulated attaching germ
fibration. The homotopy of tangent injections transports the normal frame
in its rank7 complement; use a metric orthogonal projection connection
along that interval if an explicit transport is wanted. After restoring the outer fixed collar, T is an
actual proper normally framed immersion in N^15, with the original boundary
immersions fixed. The homotopy transports its target nullhomotopy and B.
This is the spatial-relative argument, not an invocation of a closed-source
parameter theorem for a boundary problem. For the initial S^7 immersions
use exactly the same finite argument with source7 and target14.

## 7. Arc cancellation of lambda and mu

Choose the finite immersed punctured spheres generically, with transverse
boundary intersections and self-intersections, preserving their product
boundary germs. This can be done with FINITE Sard parameters. For distinct
points of a compact immersed source, first choose a uniform neighborhood
of the diagonal where local injectivity prevents double points. Its
complement is compact. Finitely many pairs of disjoint source chart patches
cover it; target coordinate bump parameters at one point make the pair
evaluation submersive there. Sard applied to the inverse image of the
target diagonal selects one transverse finite parameter. Near the boundary
use the already transverse product collar and perturb only off a smaller
fixed collar. The same argument covers the finitely many pairs of different
immersions. It preserves the regular-homotopy normal framing. No Whitney
move or surgery is used for this genericity.

Two immersed 8-manifolds in N^15 have a compact transverse 1-dimensional
intersection. Its boundary is precisely the intersections of their boundary
7-spheres in M^14, because of the actual product collar. Each interval has
two endpoints with opposite oriented intersection signs; circles have none.
Lift the two branches using their homotopy-fiber whiskers. Along an interval
the deck/group label g is constant, since it is locally constant with
values in the discrete deck group. Thus its endpoints cancel with the
SAME R coefficient. Summing intervals proves lambda(z,z')=0.

For self-intersections use the off-diagonal double-point 1-manifold of T.
Choose an order of the two branches along each interval. The two ends
again have the same ordered group label and opposite boundary signs.
If their comparison with the chosen boundary ordering reverses one order,
the two labels differ by the usual (-1)^7 conjugation; that is exactly the
relation in the quadratic target R/{a-(-1)^7 bar(a)}. Thus the two endpoints
cancel in that quotient. Closed double-point circles give no boundary
term, even if their branches exchange. The rank7 framing of T restricts
to the prescribed normal framing of its boundary, so no unrecorded Euler
or framing correction is inserted. Therefore mu(z)=0. This proves the
quadratic lagrangian assertion for each z=partial l.

For a finite stabilized preferred basis of L carry out these constructions
for all its images; a finite labelled family in each boundary component
is the geometric representative actually earned. A single embedded middle
sphere for each basis vector, or killing a hyperbolic basis by surgery,
requires the separate middle-dimensional embedding/Whitney interface.
The present unit supplies precisely the finite based duality and boundary
lagrangian input, including its normally framed nullbordism mechanism.

## 8. Choice and dependency boundary

All chain complexes and matrix homotopies are finite over the countable
ring R. The lower/upper splittings, contractions, Euler comparisons and
basis words are finite tuples. Projectivity is derived with the particular
module B_r; no full-choice lifting of arbitrary families is assumed.
The cap and CW interfaces used above have explicit choice-free finite or
ZF clauses. Normal framing reduction has finitely many cells. Relative
immersion and finite handle interfaces are expressly CC. Finite lifts,
whiskers, nullhomotopies, punctures and generic parameters add no choice
beyond CC. For a prescribed countable list of these compact problems,
CC selects their COMPLETE finite witnesses, not an adaptive dependent
infinite construction.

No K0 value is used as a replacement for the chain comparisons. Wh=0 is
used only to identify the simple stable basis classes of comparisons which
have actually been constructed. There is no unproved general L-theory,
noncompact duality, low-dimensional embedding theorem, or exact surgery
sequence hidden in this unit. The normal-surgery and index-elimination
owners retain their separate geometry and same-bordism B transport.
