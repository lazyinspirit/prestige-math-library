# Critical coefficient realization: initial enrichment exploration

**Superseded scope diagnosis.** Root confirmed that approved PA24 requires
the realized rational monodromic constructible package, not mixed Hodge
enrichment. The current proof proposal is
[rational-topological-supplier.md](rational-topological-supplier.md), with
[exact integration contracts](canonical-helper-proposal.md). The MHM-only
local-foundation obligation described at the end of this initial exploration
is therefore not a blocker for the approved rational construction. The
restriction-isomorphism counterexample and grading defects remain valid.

Scope: Batch 55 scientific escalation; proposal only. No canonical item, page,
contract, manifest, runtime state, native history or gate has been changed.
The ordinary quotient-stack Borel–Moore bridge and every consumer integration
remain with the parent owner. This document gives the actual critical
construction and the precise foundational boundary; it is not native readiness.

## Confirmed defects that must be repaired before realization

1. The current coefficient datum is ambiguous about the coefficient on the
extension stack. If it means the inverse image of the total representation
coefficient, its required Thom–Sebastiani isomorphism is false. Take the
quiver with vertices 1,2, arrows x:1→2 and y:2→1, W=yx,
a=(1,0), b=(0,1). The representation space for a+b is A² with f=xy;
the extension atlas is {x=0}, with y free. The individual endpoint potentials
and the restricted potential are zero. The normalized vanishing cycles of
f=xy are supported at (0,0), whereas the normalized vanishing cycles of
f|{x=0}=0 are the constant coefficient on the whole line. At y≠0 the
former inverse image is zero and the latter is nonzero. Neither shifts nor
orientations repair an isomorphism between them. What exists is a natural
morphism in the direction needed after duality, described below.

2. The current isolated-point normalization “reduced H^0 in degree zero” is
that of the *unshifted* usual vanishing-cycle functor. The exact standard
monodromic functor used for critical CoHA realizes φ_f[-1], and its zero
function is the identity. For a Milnor fibre F_x its constant-coefficient
stalk has H^k=tilde H^{k-1}(F_x). For x² on A¹, reduced H^0 is in degree
one. On a point, the zero function has coefficient Q, giving the unit. These
conventions must be stated together; they cannot be replaced silently by
φ_f and an unchanged unit. If one uses perverse constant coefficients
Q_X[dim X], the Milnor degree is shifted again by dim X; specify this
rather than mixing conventions.

3. The ordinary supplier uses variety-normalized equivariant dualizing
objects. The claimed relative-stack dimension shift requires intrinsic
stack homology. Write g=dim G. On a smooth quotient [X/G], the intrinsic
critical groups below equal H_{n+2g}^{BM,G}(X;Φ) after forgetting Tate
structures, with Φ the exact monodromic coefficient. The original ordinary
H_n^{BM,G}(X;Φ) cannot retain the claimed shift -2χ(b,a).

## Standard realization and exact interface

Let Q be any finite quiver, including loops and multiple arrows, and W a
finite algebraic potential. Put M_d=[Rep_Q(d)/G_d], f_d=Tr(W)_d, and
D_d=dim Rep_Q(d)-dim G_d=-χ_Q(d,d). All quiver representation and
extension atlases are smooth. Use the exact monodromic vanishing-cycle
functor V_f=φ_f^{mon}; its rational realization is the usual φ_f[-1].
For each z let Φ_{d,z}=V_{f_d-z} Q_{M_d}. Define

    C_n(d,z) = H^{-n}(M_d, D_{M_d} Φ_{d,z})
             = (H_c^n(M_d, Φ_{d,z}))^∨.

Here D is Verdier duality, not tensor duality. These are degreewise duals of
finite-dimensional groups, not the unrestricted dual of a graded direct
sum. The stack notation abbreviates the finite approximations below and
does not assert a new full six-functor formalism for arbitrary Artin stacks.
For a smooth chart X of dimension N, V_f commutes with duality and with
Tate/constant twists, so D_X(V_f Q_X)=V_f Q_X[2N](N). Thus the rational
variety-chart formula ω_X⊗Φ is valid for these *specific* constant-input
vanishing cycles. It is not a formula for arbitrary coefficient objects.

The proper/smooth interface is as follows, where a is the subobject, b the
quotient and r=-χ_Q(b,a). Write E=E_{a,b}, B=M_a×M_b, T=M_{a+b}.
The functions satisfy f_E=q*(f_a+f_b)=p*f_{a+b}.

* Thom–Sebastiani followed by smooth pullback gives an isomorphism
  q*(Φ_{a,z1} ⊠ Φ_{b,z2}) ≅ V_{f_E-(z1+z2)}Q_E on the indicated
  value-pair summand. This is the intrinsic coefficient of f_E, not p*Φ_T.
* There is a canonical proper coefficient morphism

      Φ_{a+b,z} → Rp_* V_{f_E-z}Q_E.

  It is obtained by applying V_{f_{a+b}-z} to the ordinary unit
  Q_T→Rp_*Q_E, then using commutation of V with proper direct image.
  Its Verdier dual is

      Rp_*D_E(V_{f_E-z}Q_E) → D_T Φ_{a+b,z}.

  This is the map for proper pushforward; no restriction isomorphism is
  asserted or used. Factorization into the incidence closed immersion and
  the flag projection gives exactly Davison's ζ ε followed by δ. There is
  no use of ε^{-1} or of the integral-identity theorem.
* Smooth orientation and the displayed coefficient isomorphism yield
  q^!: C_n(B)→C_{n+2r}(E)(-r). Proper pushforward then has degree zero.
  Equivalently this is a morphism C_n(B)(r)→C_{n+2r}(E) of mixed Hodge
  structures. Omitting Tate structures gives degree +2r=-2χ_Q(b,a).
  An unshifted morphism in the category of mixed Hodge structures must
  retain the twist; the original phrase “no Tate twists” is only a rational
  grading convention and cannot describe the full Hodge realization.

Multiplication on C=⊕_{d,z} C_*(d,z) is this smooth pullback followed by
proper coefficient pushforward. This is the standard untwisted (unregraded)
critical algebra. Optional half-Tate virtual regrading gives the familiar
Euler-twisted monoidal presentation; it is not needed for the integer-degree
construction, nor is any half-Tate object or arbitrary orientation datum
needed here.

## Proof of the realization and its coherence

### A. Finite quotient models, normalization and change of groups

For a group G occurring here (a product of GL groups, a block parabolic,
or a Levi subgroup), embed G into K=∏GL_{d_i}. Let U_N be the product of
surjection spaces Hom_surj(C^N,C^{d_i}) inside its ambient vector space,
with K acting by postcomposition. For sufficiently large N it is free;
write t_N=dim U_N. On every smooth G-variety X used in the correspondence,
X_N=X×_G U_N is a smooth finite-type variety of dimension

    dim X_N=dim X-dim G+t_N.

The bundles are Zariski locally trivial: for GL this follows by choosing
invertible minors; parabolic quotients are relative flag varieties, and the
Levi-to-parabolic quotient is the affine space of block upper-right
matrices. Thus all the particular associated quotients exist as varieties.
The function f induces f_N on X_N; on U_N×X its vanishing cycles are the
pullback of V_f Q_X, since both projections are smooth. The compactly
supported approximation is

    H_c^k([X/G],V_f Q) = stable H^{k+2t_N}_c(X_N,V_{f_N}Q)(t_N).

Its dual is C_k. The correction uses t_N, rather than t_N-dim G.
Consequently for f=0 it agrees with intrinsic stack homology, and on the
rational realization it is the group's dimension regrading of the existing
variety-normalized BM supplier. The same correction is used at every
corner of any diagram represented with this U_N.

For proper p, use its incidence/flag model over the total-dimension
K-frame approximation. Both the closed incidence inclusion and the flag
projection are proper on the finite models, so the proper coefficient
morphism and its dual exist in the ordinary monodromic MHM categories.
For q, factor its stack presentation using L=G_a×G_b⊂P:

    [Rep(a,b)/L] → [Rep(a,b)/P] → [Rep(a)×Rep(b)/L].

The first map is an affine fibration of relative dimension
u=Σ_i a_i b_i; the map from the first space to the last is an affine
fibration of relative dimension e=Σ_{h:i→j} b_i a_j. Their pullback maps
are isomorphisms in critical homology by homotopy invariance, so composing
the latter pullback with the inverse of the former gives q^! with relative
shift e-u. This constructs the nonrepresentable smooth operation needed
here without assuming one for arbitrary stack maps.

Comparison between U_N and another model uses their product: the maps
from the product model are associated vector-bundle/open-approximation
maps. The complements have codimension tending to infinity. For each
fixed cohomological degree, compact-support duality and the localization
triangle give the stable comparison, and smooth homotopy invariance cancels
the additional t_N shift. All operations are maps of the same localization
triangles on the product models. Consequently the identifications commute
with p_*, affine pullbacks and their inverses, external products and
monodromy. This is precisely the degreewise approximation used in
Davison–Meinhardt §2.2 (Proposition 2.17, Definition 2.20 and Remark 2.21),
not an inference from mere freeness of an arbitrary topological model.

### B. Proper coefficient morphisms compose and base-change

For composable proper maps X→Y→Z of these finite models with functions
pulled back from Z, the unit for the composite is the composite of units
Q_Z→Rg_*Q_Y→Rg_*Rf_*Q_X. Apply V, and then the proper direct-image
comparison. Naturality of that comparison identifies the result with the
composite coefficient morphism. Duality gives composition of critical
pushforward, including the identity case. Smooth base change of that unit
is the unit of the pulled-back proper map, because the base-change
isomorphism is its adjunction mate. Smooth commutation of vanishing cycles
then identifies the two coefficient morphisms. Duality and complex smooth
orientation give the corresponding proper/smooth identity in critical
homology. The construction with units and their mates also gives the
Cartesian pasting identity: paste two squares, expand the composite unit,
and cancel the intervening unit/counit by the triangle identities. This
argument is inside the coefficient functor formalism; it does not infer a
derived MHM equality solely from equality of underlying constructible
complexes. Group-change comparisons in A preserve those same units and
counits, so the identity survives passage to the degreewise stable limit.

### C. Thom–Sebastiani associativity, the unit, and compatibility

On the underlying sheaf model, set H_f={Re(f)≤0}. The normalized
vanishing cycles are RΓ_{H_f}(-)|_{f=0}. The TS map is induced by the
inclusion H_f×H_g⊂H_{f+g}. For three functions, both iterated TS maps
are the map of local-support complexes for

    H_f×H_g×H_h ⊂ H_{f+g+h}.

Indeed composition of inclusions of supports gives composition of their
local-cohomology maps; the tensor associator is the ordinary complex
associator. This proves the pentagon for every number of factors by the
same inclusion-of-supports argument. The zero function on a point gives
Q and its support inclusion is the identity, so both unit laws follow.
The maps preserve positive-loop monodromy: rotating the common phase
before or after a support inclusion gives the same inclusion, and the
monodromy on the product is the tensor product of monodromies.

These sheaf maps are the rational realizations of the MHM TS maps, not
just abstract isomorphisms: Schürmann's full Appendix A, Proposition A.2,
identifies them by deformation to the normal cone, specialization,
addition of the normal-line coordinates and the displayed local-support
comparison. At the level of perverse coefficients, exactness of V and
biexactness of the monodromic external product place the two TS composites
in an abelian category on which realization is faithful. Hence the
associativity and unit equalities hold there too, and extend functorially
to the derived construction. Compatibility with smooth pullback follows
by pulling back the same support inclusions. Compatibility with proper
coefficient maps follows from their definition by units: apply the natural
TS transformation to Q_T→Rp_*Q_E and use proper external-product base
change. The naturality square is the required square. Thus there is no
assumption that arbitrary closed restriction commutes with V. This is the
same unit/natural-transformation mechanism made explicit in B.

### D. Orientations and their coherence

For a smooth complex d-fold, ω=Q(d)[2d], and the orientation is the
positive complex orientation. For a vector bundle, use the Thom class
whose fibre integral is +1. For successive bundles, wedge the oriented
complex fibre bases in the displayed subobject-first order; the real
ranks are even, so concatenating these bases gives the composite Thom
class without a sign. The bundle determinant identity is associative.
For L⊂P, the affine-fibration correction is the inverse orientation of
the u-dimensional fibre; its composition with the e-dimensional bundle
orientation is the virtual orientation of dimension e-u. This makes the
relative dimension, cohomological shift and Tate twist agree.
The duality/vanishing-cycle comparison has the same orientation as the
support model by Schürmann Proposition A.1 and its pairing diagram.
There is one fixed global smooth critical chart in every dimension and
its explicitly compatible frame charts; no gluing of unrelated critical
charts or 3-Calabi–Yau orientation-data existence theorem is being used.

### E. All values, loops, flags and associativity

A regular function on a finite-type smooth complex variety has finitely
many critical values: on each irreducible component of its critical locus,
df=0 implies that the restriction of f is constant (in characteristic
zero, a nonconstant rational function has nonzero differential), and
there are finitely many such components. Take S_d=C if desired; every
noncritical summand vanishes. The support of V_{f+g-z} lies on
Crit(f)×Crit(g). This support is the finite disjoint union of the closed
pieces with f=z1, g=z2, z1+z2=z. They are open and closed relative to the
support, so its coefficient splits canonically. Apply TS on each such
piece after translating f and g by their respective values. This proves
the needed all-values TS identification, rather than discarding nonzero
critical values or assuming a homogeneous potential. It is the explicit
version of φ_f^{mon,fib}=⊕_z φ_{f-z}^{mon} in
Davison–Meinhardt's paragraph following Assumption 2.14.

For three dimension vectors, both iterated correspondences parametrize
flags 0⊂A⊂A+B⊂A+B+C. Their coefficient is the normalized vanishing
cycles of the sum of the three diagonal trace functions, by block-matrix
trace additivity. Their smooth orientations concatenate precisely as in
D, TS agrees by C, and proper/smooth base change and composition agree
by B. Thus the two products are the single pull-push map through this
flag stack. The degrees agree because

    χ(b,a)+χ(c,a+b)=χ(c,b)+χ(b+c,a).

The Tate twists agree by the same equality. The zero representation has
zero function and coefficient Q, and its endpoint correspondences are
identities, giving the two-sided unit. No step excludes loops or repeated
arrows: e counts each arrow, including loops, and the entire argument is
block-matrix/flag geometry. Empty vertex sets, zero coordinates and zero
potential are included by the point and rank-zero conventions.

## Exact mathematical status and smallest local supplier obligation

The arguments above provide an explicit realization from the standard
monodromic MHM operations, rather than conditional associativity from an
invented coefficient datum. They identify the false restriction-isomorphism
interface and the necessary grading repairs. They do NOT constitute a new
proof of Saito's entire MHM theory. The repository currently has a proved
constructible-sheaf six-functor supplier, but no canonical MHM/monodromic
MHM supplier carrying Proposition 2.13, its proper/smooth naturality and
finite-approximation construction. The smallest remaining local chain is
therefore an actual foundational supplier for these standard coefficient
operations and their coherent natural transformations (or an explicit
accepted policy permitting the corresponding external theorems as inputs),
then the realization lemma above, then corrected consumers. Citing the
published CoHA theorem alone would not fill that local supplier obligation.
No canonical drain, independent review, native initial coverage or
mathematical readiness has been asserted here.
