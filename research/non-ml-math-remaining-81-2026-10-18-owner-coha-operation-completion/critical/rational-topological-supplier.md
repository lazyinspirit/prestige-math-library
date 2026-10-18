# Rational vanishing cycles: local geometric and coefficient proof proposal

Isolated proposal, revised after owner confirmation that PA24 does not require
mixed Hodge enrichment. This does not change canonical sources or native state.
Use rational coefficients and ordinary constructible analytic sheaves, retaining
the actual positive-loop monodromy. No MHM foundation is required by this route.

## 1. A proved cofinal Milnor-neighborhood helper

**Claim.** Let X be a smooth affine complex variety, f:X→C regular, p∈f^{-1}(0),
and let A be constructible for a finite complex algebraic Whitney stratification
S. There is a cofinal family of open neighborhoods of p of the form

    N = X∩B_ε(a)∩f^{-1}(T_δ),
    T_δ={z:|Re z|<δ, |Im z|<δ},

such that on the corresponding closed ball, f is a proper stratified
submersion over T_δ\{0}, including its sphere boundary. Consequently its
restriction over either open half-rectangle Re z>0 or Re z<0 admits
stratum-preserving fibre transport, and these transports compute cohomology
with A. Centres a need not equal p. Allowing generic centres is essential to
the proof; no unsupported assertion about a fixed sphere centre is made.

**Proof.** Embed the affine X as a closed subset of C^M. Treat a stratum S on
which f is nonconstant. Its critical values are finite: the critical locus is
algebraic of finite type, and df=0 on each of its irreducible components
forces f constant there in characteristic zero. Thus, after removing finitely
many nonzero values, f|S is submersive over a punctured disc about zero.

Form the *closed relative conormal*

    C_S = closure{(x,ξ): x∈S, f(x)≠0, df|TS≠0,
                         ξ|T_xS ∈ C·df_x} ⊂ C^M×(C^M)^*.

If dim S=s, the fibre in covectors has dimension M-s+1, so each component of
C_S that is the closure of this locus has dimension M+1. Its base projection
has f nonconstant. Therefore the closed subset

    Λ_S=C_S∩{f(x)=0}

has dimension at most M: it is a proper closed subset of each such component.
Taking closure includes limits whose base leaves S. This is deliberate.
Identify covectors with their coefficient vectors in the chosen coordinates.
On Λ_S×overline{Λ_S}, consider the algebraic map

    F(x,ξ,y,η)=(x-η, y-ξ) ∈ C^M×C^M.

The domain has dimension at most 2M. For a dominant irreducible component,
the generic-fibre dimension theorem gives zero-dimensional, hence finite,
fibres over a nonempty Zariski open; for a nondominant component remove the
proper closed image closure. There are finitely many components. Thus there
is a nonempty complex Zariski open O such that all fibres over O are finite.
The real diagonal a↦(a,bar a) meets O densely in every real open subset: a
nonzero polynomial in (a,b) becomes a nonzero polynomial in real coordinates
(x,y) after (a,b)=(x+iy,x-iy), an invertible complex-linear substitution. A
nonzero polynomial cannot vanish on a real open box. This is the same
algebraic real-diagonal argument as the actual published generic-distance
exhaustion supplier, proof step3.1.

Choose a in that dense set, arbitrarily close to p, and do this simultaneously
for the finitely many strata S. The following set is then finite:

    E_a={x∈X∩f^{-1}(0): (x,bar x-bar a)∈Λ_S for some S}.

Indeed each such x gives the point
(x,bar x-bar a,bar x,x-a) in the finite fibre F^{-1}(a,bar a).
Choose ε>|p-a| avoiding the finitely many distances |x-a| for x∈E_a.
One can make the resulting ball arbitrarily small: inside a prescribed
B_R(p), choose |a-p|<R/4 and ε∈(R/3,R/2) avoiding these finite numbers.
Then p is in the ball and its closure is contained in B_R(p).

There is δ>0 for which there are NO critical points of f on the sphere
boundary over 0<|f|<δ. Otherwise choose x_j∈S∩∂B_ε(a) with f(x_j)≠0,
f(x_j)→0 and df restricted to T_xj(S∩sphere) not onto C. Compactness and
finitely many strata give a convergent subsequence x_j→x_0∈X∩sphere∩f^{-1}(0)
in one S. The elementary real-linear rank criterion for a complex-linear
df on T_xjS says that boundary rank failure implies

    bar x_j-bar a ∈ N^*_{S,x_j}+C·df_{x_j}.

To verify the criterion, let ℓ=d|x-a|²|TS and consider (Re df,Im df) on
the real vector space TS. If df is onto, its restriction to ker ℓ fails to
be onto exactly when ℓ is a real linear combination of Re df and Im df;
identifying real covectors with real parts of complex covectors gives the
displayed inclusion. Nontransversality of the sphere to S is included by
the zero combination. Hence (x_j,bar x_j-bar a)∈C_S, and its limit lies in
Λ_S. It follows that x_0∈E_a, contradicting the choice of ε. Shrink δ also
to exclude all nonzero stratum critical values and the nonzero constant
values of constant strata. Strata on which f=0 do not meet the punctured tube.

Intersecting the Whitney stratification with the interior and transverse
sphere over this punctured tube gives a finite Whitney stratification. The
boundary restrictions of f are submersions by the rank criterion, and the
interior restrictions are submersions by the excluded critical values.
The map on X∩closed B_ε(a)∩f^{-1}(T_δ\{0}) is proper over the punctured
rectangle: a compact subset of the base has compact inverse image in the
closed bounded algebraic X. Apply the actual canonical controlled-
stratified-submersion theorem, whose proof constructs complete controlled
lifts over compact base paths. They preserve the sphere stratum and hence
its interior. This gives the asserted fibre transports. On a contractible
half-rectangle, use fixed ordered coordinate paths and these lifts to
trivialize. Constructible coefficients are transported too: on a local
product their restriction is a pullback, by the coefficient reconstruction
argument in the finite-conical-cochain supplier, proof step2.2. Glue the
interval transports and reverse them to obtain inverse coefficient maps.
This proves the claim for every sufficiently small selected ball. ∎

**Actual local canonical inputs read in full.**
`lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions`
(the dimension/real-diagonal argument, not an inference of relative fibre
control from its statement),
`lem-controlled-stratified-submersions-have-continuous-local-trivializations`,
`thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods`,
`lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`.
The generic-fibre and zero-dimensional-finiteness facts are exactly the
facts already declared and proved in that distance-exhaustion supplier.
This proof gives the missing Milnor-box step that Massey1.2 refers to as the
“standard Milnor fibration argument”; it does not assume Thom a_f.

## 2. Sector deformation and the actual TS isomorphism

Write V_f A=i_f^*RΓ_{Re f≤0}A, with i_f:f^{-1}(0)→X. For f on X and g on Y,
put P={Re f≤0}, Q={Re g≤0}, Z={Re(f+g)≤0}, and m:f^{-1}(0)×g^{-1}(0)→X×Y.
There is a natural support-inclusion map

    m*RΓ_{P×Q}(A⊠B) → m*RΓ_Z(A⊠B).                    (TS-support)

We now prove that it is an isomorphism, not merely a natural map.

At a point (p,q), take the product of neighborhoods supplied in §1. The
stalks are colimits over this cofinal product system. Set
Θ=(Re f,Re g), C={u≤0,v≤0}, D={u+v≤0}. By the localization triangles and
the identity map on A⊠B, TS-support is an isomorphism on that stalk if the
restriction map from the complement of Θ^{-1}(C) to the complement of
Θ^{-1}(D) induces an isomorphism on neighborhood hypercohomology.

Here is the actual planar deformation. In the quadrant u>0,v<0 put

    H_t(u,v)=(u,(1-t)v+t max(v,-u/2));

in u<0,v>0 use the exchanged formula; in the northeast quadrant and its
positive boundary axes use the identity. These formulas agree continuously
on their overlaps in C^c. At t=1 they send C^c into D^c. Every intermediate
map sends D^c into D^c, because the positive coordinate is fixed and the
negative coordinate only increases. Thus inclusion D^c→C^c is a homotopy
equivalence. The part being moved lies entirely in the two opposite-sign
quadrants, so neither coordinate passes through zero. Absolute coordinate
values do not increase, so the deformation stays in the same real rectangle.
Leave both imaginary parts of f and g fixed.

The transports from §1 lift these real-coordinate paths to the product
Milnor neighborhood, preserving all sphere boundaries, input strata and
coefficients. The lifts are continuous in the parameter and have the
coefficient comparisons of §1. The lift of the planar homotopy therefore
makes the two restriction maps inverse up to a constructible-cochain
homotopy. Finite product cochain models justify this at the complex level,
not just as a numerical equality of Betti numbers. Passing to the stalk
colimit proves TS-support is an isomorphism.

For clarity, the other ingredient is a *proved formal* support-Künneth
isomorphism. For closed inclusions i:P→X,j:Q→Y,l:P×Q→X×Y, the canonical
six-functor duality, external product and base-change comparisons give

    i!A ⊠ j!B ≅ l!(A⊠B),
    i_*i!A ⊠ j_*j!B ≅ l_*l!(A⊠B).

The first identity follows from i!=D i*D, the product duality formula and
ordinary inverse-image product comparison; equivalently transpose the
external tensor of the closed adjunctions. The second uses closed proper
base change and projection formula. Since RΓ_P=i_*i!, this is

    RΓ_P A ⊠ RΓ_Q B ≅ RΓ_{P×Q}(A⊠B).

Combining it with TS-support and restriction gives the actual normalized
Thom–Sebastiani isomorphism

    V_f A ⊠ V_g B ≅ k*V_{f+g}(A⊠B),
    k:f^{-1}(0)×g^{-1}(0)→(f+g)^{-1}(0).

All support calculations are made in the ambient analytic sheaf category,
where the canonical support-and-trace calculus applies to locally compact
spaces and arbitrary closed supports. In particular P,Q,Z need not be
complex algebraic subsets. Only the resulting vanishing-cycle coefficients
are used in the algebraically constructible equivariant setting.

For three or more functions, both iterated TS maps are the local-support
map induced by the same inclusion ∏{Re f_i≤0}⊂{Re Σf_i≤0}. The canonical
support-Künneth maps and inclusion-of-support maps compose, so all
associativity/pentagon identities hold in the dg sheaf model. The zero
function on a point gives V_0 Q=Q and the support inclusion is identity,
which proves both unit identities.

Replace each function by e^{-iθ}f and use the same Milnor discs, which are
independent of θ. The support maps are natural in this continuous angular
family. The θ-path from0 to2π is positive-loop monodromy. On the external
product it is simultaneous transport on the two factors, hence T_f⊗T_g.
Thus the TS isomorphism intertwines T_{f+g} with T_f⊗T_g, including the
full nonsemisimple monodromy; no diagonalizability is assumed.

This reconstructs Massey math/9908101, Lemmas1.1–1.2, Props1.3–1.4 and
§1.5, with the previously implicit Milnor-box step proved in §1 above.
The entire eight-page source, including its monodromy proof, was read.

## 3. Proper and smooth coefficient operations from the same support model

For proper p:E→T and h=f p, the localization triangle for Re f≤0 and
ordinary proper base change for its open complement give

    V_f Rp_* A ≅ Rp_* V_h A.

Indeed the first two terms of the localization triangles commute with
Rp_*, and restriction to f=0 does by proper base change, so the third term
does too. The comparison is defined on the actual localization triangles,
therefore it commutes with composition, units and Cartesian pasting.
Apply it to Q_T→Rp_*Q_E to get

    V_f Q_T → Rp_*V_h Q_E.

Duality gives Rp_*D_E(V_h Q_E)→D_T(V_f Q_T). This is the proper critical
pushforward. Closed incidence restriction has a morphism, not a false
coefficient isomorphism.

For smooth s:E→B, smooth product charts identify h=f s with the pullback
function and identify the local support pair with a contractible complex
ball times the base support pair. Ordinary product cochains give

    s*V_f A ≅ V_h s*A.

These charts and comparisons glue because their maps are inverse-image
maps of the localization triangles, not chosen unrelated isomorphisms.
Using D_E s*=s!D_B gives the oriented smooth operation on dual critical
coefficients. Affine fibrations give homotopy-invariance isomorphisms:
their fibres have ordinary cochain Q and compact-support cochain
Q[-2e], with positive complex orientation. The Levi/parabolic affine map
is inverted exactly as in the ordinary quotient-stack bridge.

Composition of proper coefficient maps is the image under V of composition
of units; smooth base change sends the same unit to the pulled-back unit,
and its dual is the required proper/smooth critical base-change map.
The support maps commute with TS because external tensor of sections and
restriction of their supports commute with both those units. Therefore
these operations and their orientation shifts obey the full flag/pasting
coherence needed in critical CoHA, rather than assuming that coherence as
an arbitrary input datum.

## 4. Normalized duality: explicit half-space proof

The relevant complete source is Massey0908.2799, all six pages read. Here
is its formal proof using the actual canonical support calculus.
For two closed sets Z_+,Z_- covering X with intersection L, write their
inclusions j_± and let m:L→X. The localization triangles give

    m* j_{+*}j_+! A ≅ (L→Z_-)! j_-* A.                (*)

To check (*), apply j_{+*}j_+! to the localization triangle of Z_-.
The unwanted open-complement term is unchanged by support in Z_+, since
X\Z_-⊂Z_+, and becomes zero after m*, since L is disjoint from that
open complement. The remaining term is exactly the right-hand side by
closed proper base change. This proves (*) by a natural map, not by a
noncanonical stalk identification.

Apply it to Z_±={±Re f≤0}. Duality exchanges the right-hand ! restriction
with * and interchanges the two half-space local-support descriptions.
On L={Re f=0}, the support of the resulting complex is locally contained
in f=0 near that fibre: at a point f=it≠0, the stratified submersion product
from §1 makes its half-space local-support stalk zero. Locally there are
no other stratum critical values. Thus restriction from L to f=0 is both
ordinary and exceptional restriction on this support. Explicitly, for a
closed inclusion q whose intersection with a complex's support is open
and closed relative to that support, q!→q* is an isomorphism; factor the
complex through its closed support and use open=exceptional restriction
there. Consequently duality gives

    D(V_f A) ≅ V_f^{π}(D A),

where the superscript means the opposite half-space. Rotate back through
the specified half-turn to identify V_f^{π} with V_f. This gives the
natural normalized duality comparison D V_f≅V_f D. The same support and
adjunction maps make it compatible with proper operations and smooth
orientations. For a complex N-dimensional smooth X,

    D_X(V_f Q_X) ≅ V_f Q_X[2N].

No shift beyond[2N] occurs. On the standard Milnor relative-pair model,
H^k(V_f Q)_p=tilde H^{k-1}(F_{f,p}); for f=0 on a point it is Q in degree0.

The monodromy convention on the dual coefficient must be specified rather
than obscured: the Verdier-dual local system has contragredient transport,
so the group DΦ is endowed with D(T^{-1}). This is the dual monodromy
that makes evaluation invariant. The product on dual compact-support
cohomology commutes with it because TS intertwines simultaneous transport.
Identifying DΦ with Φ[2N] uses the above specified half-turn comparison;
one must transport the automorphism through that comparison, not replace
automatically the contragredient by an unexamined scalar convention.

## 5. All critical values and stack-normalized realized algebra

For a polynomial trace f_d, Crit(f_d) has finitely many irreducible components,
and f_d is constant on each, hence there are finitely many critical values.
Define Φ_{d,z}=V_{f_d-z}Q. Support is contained in Crit(f_d)∩f_d^{-1}(z):
at a noncritical point the holomorphic submersion chart makes the half-space
relative complex zero. The finite union of critical-value pieces is disjoint
and each piece is closed and open relative to that support. For f+g-z the
critical support is Crit(f)×Crit(g) at total value z, so restriction to its
finite disjoint value pieces gives the canonical direct sum of the TS
isomorphisms for z1+z2=z. This proves the all-values decomposition; arbitrary
nonhomogeneous potentials and nonzero critical values are included.

On M_d=[Rep(d)/G_d], define rational intrinsic groups

    C_n(d,z)=H^{-n}(M_d,D Φ_{d,z})=H_c^n(M_d,Φ_{d,z})^∨.

Finite frame models use the shift2dim U_N. Thus, under the original
variety-normalized equivariant BM convention,

    C_n(d,z)=H_{n+2dim G_d}^{BM,G_d}(Rep(d);Φ_{d,z}).

For E_{a,b}, TS identifies q*(Φ_a⊠Φ_b) with its intrinsic vanishing-cycle
coefficient. Smooth pullback has degree2r with
r=Σ_{h:i→j}b_i a_j−Σ_i a_i b_i=−χ_Q(b,a); proper coefficient pushforward
has degree0. Their composite is the realized rational critical CoHA product.
The three-step flag comparison of the ordinary quotient-stack bridge applies
with these coefficients because §2–§3 prove the required TS and operation
identities. The degree equality follows from bilinearity ofχ. The zero
representation and V_0 Q=Q give the two-sided unit. Loops, repeated arrows,
zero coordinates and the empty quiver satisfy exactly the same proof.

## 6. Algebraic constructibility from the actual canonical principalization

This closes the earlier draft's explicitly recorded constructibility obligation
for the STANDARD constant-input coefficients; it does not assume that finite
stalk cohomology alone implies algebraic constructibility.

Let f:X→C be regular on smooth finite-type X. Treat each connected component;
if f is identically zero its V is identity, and if constant nonzero its V at
zero vanishes. Otherwise apply the actual canonical principalization theorem
to the coherent nonzero ideal(f). Its full proof and the marked-ideal
resolution proof were read: every centre is in the controlled support, hence
over f^{-1}(0). Each blowup is an isomorphism off that support, as seen on
the standard Rees-algebra charts. Thus the composite

    π:Xtilde→X

is proper, is an isomorphism over U=X\f^{-1}(0), has smooth Xtilde, and
fπ has SNC zero divisor. This uses precisely the total-transform clause of
`thm-principalization-of-ideals`; it does not claim that resolving X alone
resolves f. The smooth X and nonzero-on-components hypotheses have been
checked.

Construct nearby cycles in the ambient derived category of analytic sheaves
using the universal cover exp:C→C*. Let j:U→X and ν:Utilde→U be its pullback
by f. Put

    Ψ_f A = i* R(jν)_* ν* j*A,   i:f^{-1}(0)→X.

This definition initially lives in the unbounded analytic derived category;
bounded constructibility will be proved, not assumed. There is a natural
map i*A→Ψ_f A from the ordinary adjunction unit. Proper base change for
π and the open/universal-cover pullback squares, followed by composition
of ordinary direct images, gives

    Ψ_f Rπ_*Q_Xtilde ≅ Rπ0_* Ψ_{fπ}Q_Xtilde.       (NC-proper)

No nearby-cycle theorem is needed for this exchange: expand the definition,
base-change the proper π past ν* and j*, compose its ordinary pushforward
with R(jν)_*, and finally base-change past i*. The analytic proper-support
calculus already supplies every such proper exchange for locally compact
spaces with the actual finite fibre-dimensional bounds. Also the unit
Q_X→Rπ_*Q_Xtilde is an isomorphism on U. Since Ψ depends only on j*A,

    Ψ_f Q_X ≅ Rπ0_* Ψ_{fπ} Q_Xtilde.

We now COMPUTE the upstairs object. Near an SNC point, holomorphic
coordinates have

    fπ=u(z) z_1^{m_1}...z_r^{m_r},   m_i≥1, u≠0.

The holomorphic implicit function theorem applied to v^{m_1}=u gives a
local nonzero root. Replacing z_1 by v(z)z_1 is an invertible coordinate
change after shrinking (its derivative in the normal coordinate at the
SNC stratum is nonzero). Thus reduce to the displayed monomial with u=1.
For small nonzero t in a polydisc, use polar coordinates on its first r
coordinates. The radial equations, with s_i=-log|z_i|, are

    s_i>L_i,    Σ_i m_i s_i=-log|t|.

They form an open convex simplex, hence a contractible space, once t is
small enough. The angular equation is

    ∏_i e^{i m_i θ_i}=t/|t|.

Its fibre is a disjoint union of m=gcd(m_i) copies of(S¹)^{r-1}.
For verification, the primitive integer row(m_i/m) extends to a matrix
in GL_r(Z) by the Euclidean algorithm; the induced torus automorphism
reduces the character to(z_1,...,z_r)↦z_1^m. The remaining coordinates
are a tangential polydisc. The normal Milnor fibre therefore has a finite
cellular model with at most m·2^{r-1} cells, in degrees0 throughr-1.
All comparisons are local product comparisons, so this is the actual
nearby coefficient complex along the algebraic SNC stratum, not merely
a calculation of individual stalk dimensions. Changes of SNC coordinates
transport this finite fibre complex, giving locally constant cohomology
of finite rank along the finitely many connected algebraic SNC strata.
This proves bounded algebraic constructibility of Ψ_{fπ}Q_Xtilde, with
cohomology in degrees0,...,dim X-1 where the nearby fibre is nonempty.

The canonical constructible proper-pushforward theorem, applied to the
algebraic proper map π0, now proves bounded ALGEBRAIC constructibility
of Ψ_fQ_X. Its properness and separated finite-type hypotheses hold because
π is a composite of projective blowups. This invokes a proved canonical
supplier on its actual domain, not a claim about an arbitrary analytic
pushforward.

It remains to identify the half-space construction V with the nearby cone.
Let U_+=f^{-1}{Re z>0}. Choose the lift of the positive half-plane to the
universal cover whose imaginary logarithm lies in(-π/2,π/2). Restriction
to this lift gives a NATURAL map from Ψ_fA to i*Rj_{+*}j_+*A. On each
Milnor neighborhood in §1, the positive half-rectangle is contractible and
its fibre transports identify its cochain complex with that of the Milnor
fibre, so this restriction map is an isomorphism on every stalk. It is
therefore an isomorphism of complexes. The localization triangle for
{Re f≤0} is

    RΓ_{Re f≤0}A → A → Rj_{+*}j_+*A → .

Restricting it to f=0 and using the preceding natural comparison proves

    V_f A ≅ Cone(i*A→Ψ_f A)[-1].

Consequently V_fQ_X is bounded algebraically constructible. This is the
exact standard coefficient needed on every smooth quiver/flag/frame chart.
The construction is natural for smooth pullback and proper comparison by
§3. Constant Tate-free shifts, external products and ordinary duality stay
in the same canonical constructible category. The generic coherent coefficient datum remains available independently;
the following dévissage also establishes full constructibility for arbitrary
bounded algebraically constructible inputs.

**Extension to arbitrary bounded algebraically constructible inputs.**
The same route proves full constructibility of V_fA, not only the standard
constant-input case. By the finite algebraic-stratum filtration, open/closed
localization and bounded truncation triangles, it suffices to treat A=j!L,
where j:S→X is a smooth locally closed algebraic stratum and L is a
finite-rank local system on S. In this reduction, first take a cohomology
local system on S and its degree shift; the finite truncation triangles
recover bounded complexes and the finite closed-stratum filtration recovers
A. The functors V and Ψ are derived functors with their actual triangles,
so this dévissage applies to the complexes and comparison maps.

Let Z=closure(S), and resolve Z by the actual canonical resolution theorem.
S is open in Z and smooth, hence lies in its smooth locus; the resolution
is an isomorphism there. On the smooth resolution principalize the product
of the ideal of the closed boundary and the nonzero pullback function f.
Its total support is SNC by the principalization theorem, and the centres
are supported on that boundary or on f=0 by the marked-ideal support clause.
Thus the resulting proper map π:Y→Z is an isomorphism over S\f^{-1}(0).
A component on which f is identically zero contributes no nearby cycles
and is handled directly by V=i*A, so it is excluded from the nonzero-ideal
principalization input. The inverse image of S\f^{-1}(0) is the complement
of a union of components of this SNC divisor. Pull L back on this open
set and extend it by zero to Y, obtaining B. On f≠0, proper base change
identifies Rπ_*B with j!L: over S it is the isomorphic coefficient, and
over Z\S its fibre coefficient is zero. Therefore the universal-cover
formula and NC-proper give

    Ψ_f(j!L)=Rπ0_* Ψ_{fπ} B.

Locally on Y, fπ is the same monomial as above, and B is the extension
by zero of a finite-rank local system from the complement of selected
coordinate hyperplanes. On a sufficiently small tangential coordinate
ball, this sheaf is pulled back from the NORMAL coordinate polydisc:
local systems there are classified by transport around the finitely many
punctured normal coordinates, with commuting invertible matrices, and
tangential contraction contributes no additional loop. Their restriction
and extension-by-zero maps are the same in that tangential product. The
nearby normal fibre has the explicit torus/open-simplex model already
computed, together with the extra coordinate-divisor boundary faces.
Triangulate the finite torus and the closed simplex/boundary pair; the
local system contributes a finite cellular coefficient complex with the
specified commuting matrices. Extension by zero is represented by the
relative boundary complex on the marked faces, using the canonical
open/closed support triangle. This gives bounded finite cochain models
which are constant in the tangential ball and natural under its
restrictions. Hence Ψ_{fπ}B is bounded and locally constant of finite
rank on each algebraic SNC stratum. Canonical algebraic proper
constructibility and finite dévissage now prove bounded algebraic
constructibility of Ψ_fA and V_fA for every bounded algebraically
constructible A. No quasi-unipotence or Hodge condition on L was used.

**Uniform bounds.** The local Milnor fibre of a smooth n-dimensional chart
has a finite model of real dimension at most2n, by §1 and the canonical
finite-cochain supplier. The relative complex for V consequently has
bounded amplitude, for example[-1,2n+1] is a uniform safe bound for a
constant input on such a chart. A sharper bound is not needed. Along the
finite SNC-stratum/proper-pushforward construction all stalk groups are
finite-dimensional and there are finitely many algebraic strata; thus all
bounds can be chosen uniformly. On an additional smooth frame factor,
the coefficient is the pullback of the SAME V_fQ_X by §3; its UNshifted
ordinary cohomological amplitude is consequently the same as downstairs,
independent of the growing frame dimension. Duality shifts on that frame
are explicitly normalized below, rather than being mistaken for a uniform
unshifted bound on D of the growing-dimensional variety.

## 7. Equivariant descent and stabilization for these coefficients

Let G be one of the actual quiver groups, a block parabolic or a block
Levi, acting on a smooth X and preserving f. The action mapG×X→X and
projectionG×X→X are smooth. The coefficient comparisons of §3 give

    act* V_fQ_X ≅ V_{f∘act}Q_{G×X}
                 = V_{f∘pr}Q_{G×X} ≅ pr*V_fQ_X.

Their identity and cocycle laws hold because all maps are the inverse-image
maps of the same local-support triangle. Thus V_fQ_X has an actual
Cartesian action-nerve coefficient structure. By §6 its ordinary coefficient
is bounded algebraically constructible, so it lies in the proved canonical
equivariant constructible model. The monodromy automorphism commutes with
this descent structure because the comparisons are natural in the angular
family from §2.

On each frame quotient X_N=X×_G U_N, the descended coefficient is the
ordinary normalized V_{f_N}Q_XN: pull back to X×U_N and use smooth
commutation, then the faithful principal-bundle descent comparison. This
also checks all parabolic/Levi models, rather than presuming that their
group changes preserve unrelated choices of coefficients.

The degreewise frame stabilization proof for the parent ordinary bridge
applies to THESE coefficients. Its product-frame maps pull the coefficient
back from the fixed X-factor. On a contractible local base chart, the
actual finite cochain complex of the auxiliary Stiefel fibre is tensored
with the fixed coefficient complex. If that fibre has cochain Q in degree0
and vanishing reduced cohomology through c_N, tensoring with a bounded
coefficient complex whose amplitude has width w gives a quasi-isomorphism
through degree c_N-w. The width w is independent of N by the preceding
paragraph and §6. No local-system twisting in the frame fibre occurs,
because the coefficient is that pullback. Compact-support comparison is
the Verdier dual of the same comparison, with the orientation shift of
the fibre; hence the correction2dim U_N cancels exactly the growing
auxiliary dimension. The canonical finite-resolution equivariant supplier
proves c_N→∞ for its Stiefel models, so every fixed degree stabilizes.
The proof also identifies the comparison maps, including their product
cocycle, since they are the same unit maps on the common product model.

It follows that the intrinsic primary definition

    C_n([X/G],f)=H^{-n}([X/G],D V_fQ)

is defined degreewise, has the frame normalization stated in §5, and is
compatible with proper maps, affine smooth maps, their inverses and
monodromy. One does not take a single unrestricted dual of the whole
infinite-dimensional equivariant graded space. On EACH finite model,
canonical Verdier duality identifies RΓ(DΦ) with the linear dual of
RΓ_c(Φ). The relevant cohomology groups are finite-dimensional by §6 and
the canonical finite-cochain supplier. Applying this degreewise and then
the stabilized frame comparisons proves the displayed H_c^n-dual formula
in §5 with precisely its correction; it is a consequence, not an
independent unproved definition.

## 8. First-review repair record and limitations

The parent requested an explicit check of sphere Whitney transversality:
§1's rank criterion includes ℓ=0, so the selected sphere is transverse to
EVERY input stratum over the punctured tube, and the interior/sphere
Whitney restriction used by the controlled-lift theorem is valid.

The parent also requested that duality and stabilization have a verified
ambient domain. Sections6–7 provide this inside the ORIGINAL canonical
bounded algebraically constructible category for all standard quiver
coefficients, using canonical principalization and the explicit monomial
nearby model. Full locally compact analytic sheaf operations are used
only for the temporary half-space supports and universal-cover expansion,
where the actual support-calculus supplier applies. No blanket duality
involutivity assertion for arbitrary analytic sheaves has been introduced.

No MHM enrichment, independent native review, readiness or gate completion
is claimed. The richer rational realized critical CoHA is the target;
standard-coefficient constructibility, actual TS isomorphism and coherent
operations now have explicit proposed proofs for scientific review.
