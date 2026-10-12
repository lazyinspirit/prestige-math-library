# Singular and genuine parabolic category O: local proof reconstruction

Run frontier-44-special-representation-examples-28, batch15. Assigned owner
scaffold repair/review, not an independent authored-item audit. Original18
contracts/decisions,4 carriers and2 native receipts are preserved in the native
baseline. Current metadata has root's one added parabolic-subgroups prerequisite;
no identity/order/pair expansion is proposed.

## 1. Source categories and confirmed exact defects

Libedinsky–Williamson, complete28-page PDF, §§2.4–2.7 was independently read:
M is spherical induced from H_s→v^-1; N is antispherical induced from H_s→-v.
Mazorchuk–Stroppel, complete35-page published PDF, §2.3 defines p-PRESENTABLE
objects through projectives indexed by longest coset representatives. Its
Theorem3.1 equates that category with a singular block; Lemma7.6/Theorem7.7
categorify the SPHERICAL module for that properly stratified category. These
are not the locally p-finite parabolic category O. Ko–Mazorchuk–Mrden,
complete34-page PDF, §§3.1,3.4,4.1–4.2 distinguishes genuine locally p-finite O^p,
whose principal-block simples are shortest LEFT coset representatives, and
imports Koszul duality in its homological theorem. Neither import is needed
for the ordinary multiplicities below. Chen Lecture9 complete7-page body was
read; its most-singular exercise concerns the BIG antidominant projective,
not every projective. Ordinary/finite Levi Weyl characters are supplied by
the proved published Weyl-character theorem, not a claimed parabolic equivalence.

Native ready defects: the reflector used sum instead of intersection; ordinary
standard/costandard Ext was restricted without proof; a generalized standard
was alleged to embed in its costandard (its canonical image is simple); projective
flags were never proved; reductive Levi was conflated with semisimple Levi
against the radical. The spherical formula and unspecified fixed integral block
were incorrect for regular parabolic O. Wall translation asserted every
projective had every standard, and its B example read rows instead of columns
for BGG. Singular m_{w^-1,y^-1} and the claimed antispherical mirror were wrong.
The Hecke action/bar proofs also had explicit length/arithmetic/inverse errors.

## 2. Levi structure and positive radical grading

Put h_J=span{H_j:j∈J}, z_J={h:α_j(h)=0 for all j∈J}. The finite-type Cartan
principal submatrix is nonsingular because its symmetrized Gram matrix is
positive definite. Thus h=h_J⊕z_J. Set
s_J=h_J⊕⊕_{α∈Φ_J}g_α, l_J=s_J⊕z_J, and
u_J=⊕_{β∈Φ^+\Φ_J^+}g_β, v_J=⊕_{β∈Φ^-\Φ_J^-}g_β.
For alpha in Phi_J its Killing-dual, and hence coroot, lies in h_J by linearity of the Killing-dual root expansion. Opposite root brackets therefore lie in h_J. Root brackets make s_J,l_J,u_J,p_J=l_J⊕u_J and v_J Lie subalgebras, with
u_J ideal in p_J and l_J stabilizing u_J and v_J.

The INTRINSIC Killing form of s_J on h_J is Σ_{α∈Φ_J}α(h)α(h'); on the real
coroot span this is positive definite since the roots span its dual. Weight
orthogonality pairs only opposite root spaces; invariance and a root sl2 triple
give K(e_α,f_α)=K(H_α,H_α)/2≠0. Hence this Killing form is nondegenerate,
and the actual Cartan criterion proves s_J semisimple. The centralizer z_J
commutes with s_J, so l_J is reductive and has root system Φ_J and Weyl group W_J.

Choose ζ with α_j(ζ)=0 for j∈J and α_i(ζ)=1 for i∉J. Positive radical roots
have positive integral ζ-degree; negative outside roots have negative degree;
Levi roots have degree0. Thus u_J is nilpotent by its positive grading.
Its nilradical equality requires more than saying l_J is reductive. A nilpotent
ideal I in p_J projects to an ideal of l_J, whose projection into semisimple s_J
is zero. If its remaining image contains nonzero h∈z_J, lift h to x=h+a, a∈u_J.
Some outside simple root has α_i(h)≠0. In the ζ-grading, ad x is upper triangular
with diagonal ad h and has that nonzero eigenvalue. Its corresponding generalized
eigenspace lies in im(ad x)⊂I; hence ad x on I has a nonzero eigenvalue, impossible
for a nilpotent I. So I⊂u_J. Also rad(p_J)=z_J⊕u_J: this is a solvable ideal with
semisimple quotient s_J. Therefore l_J is the REDUCTIVE complement to nilradical,
whereas s_J is the semisimple Levi factor in the published radical-based Definition.
The cases J=empty and J=all have s_J=0 or u_J=v_J=0 as appropriate.

## 3. Local finiteness, standards, Serre closure and duality

Finite l_J modules with h-semisimple action split into center-weight spaces and
then finite simple s_J modules by actual Weyl complete reducibility. Its finite
simples E(η) are parametrized by η integral dominant on J; center acts by η|z_J.
Inflate E to p by u=0. PBW gives Δ^J(η)=U(v_J)⊗E(η). Each bounded negative
ζ-degree piece is finite dimensional and Levi-stable; positive u raises ζ-weight
and hence lowers this degree after PBW reordering, annihilating E at degree0.
Thus these finite pieces are p-stable. This proves p-local finiteness directly.
The natural ordinary Verma surjection shows Δ^J belongs to O and has unique
simple head L(η), one-dimensional top, finite length, and only lower factors.

Inside O, p-local finiteness is equivalent to local nilpotence of every f_j,j∈J.
Necessity uses finite h-weight support of a finite p-module. Conversely a cyclic
Levi submodule is an O-module for s_J: finite center weights, h-semisimplicity,
and local n_J^+-finiteness are inherited. Its finite composition series has
integrable simples, which are finite dimensional by the proved highest-weight
classification; hence it is finite dimensional. Then U(p)m=U(l)U(u)m is finite
because U(u)m is finite in O and each of its finitely many generators is Levi-finite.
Local nilpotence passes through subobjects, quotients and extensions, proving
Serre closure. This proof does not assume extensions of local-finite modules
are automatically local finite for an arbitrary algebra.

A simple highest weight lies in O^p iff its highest weight is J-dominant integral:
necessity is finite Levi highest-weight classification; sufficiency is its quotient
of Δ^J. In any p-finite quotient of Δ(η), the highest vector generates the finite
Levi simple E(η), and u kills it and its Levi span. The induced universal property
forces factorization through Δ^J(η). This is the largest p-finite quotient.
Restricted duality preserves O^p: a locally finite semisimple Levi representation
with finite h-weight spaces is an algebraic direct sum of finite Levi simples
(using an increasing sequence of finite Levi submodules and finite complete reducibility); PBW and finitely many g-generators give a countable spanning list. Its successive finite Levi spans exhaust M; finite complete reducibility splits each inclusion, giving the stated direct sum without importing an infinite semisimplicity theorem. Every weight meets only finitely many summands by finite weight dimension, so its restricted dual is the direct sum of the finite restricted duals. Thus ∇^J(η)=DΔ^J(η) is p-finite and its simple socle is L(η).
It is a submodule of ordinary DΔ(η), not generally a quotient.

## 4. Reflector, projective covers and actual generalized-standard flags

For finite-length M, take a kernel K of MINIMAL length among kernels with M/K
p-finite (zero quotient is allowed). If K' is any other such kernel, M/(K∩K')
embeds in the finite product M/K⊕M/K', hence is p-finite. Minimality gives K⊂K'.
Therefore K is the intersection of all these kernels and gives the largest quotient
L_p M. This is a functor left adjoint to exact inclusion; it is right exact and
sends ordinary projectives to parabolic projectives. The quotient L_p P(η) maps
onto L(η) and this map is essential: the preimage in ordinary P(η) of any subobject
surjecting to L(η) is all of P(η). Thus it is the parabolic projective cover.

Flags require an independent construction. Fix an integral central-character block
and its finite dot orbit bounded by its dot-dominant κ. The actual dominant-orbit bound applied to κ+ρ gives every orbit label<=κ; finite length and the central-character orbit theorem give every object of this block all weights<=κ. Thus its ζ-weights are<=κ(ζ), including singular integral blocks. For a Levi simple E(η)
from a target label, N=κ(ζ)−η(ζ) is a nonnegative integer. Form the finite p-module
B_N(E)=U(p)⊗_{U(l)}E modulo all u-PBW degrees>N. The cutoff is p-stable. This
module represents Hom_l(E,-) on p-finite modules whose ζ-weights are≤κ(ζ): every
excluded positive monomial kills a map's image of E. Hom_l(E,-) is exact here:
lift its finitely many generators through an epimorphism inside a finite Levi
submodule and use finite complete reducibility to split. Induce and project to
the chosen central block: Q(E)=pr_χ(U(g)⊗_p B_N(E)). PBW induction and block
projection are exact, so Q is projective in that parabolic block.

The radical-degree filtration of B_N has finite semisimple Levi slices, on which
u acts by0. Its induced factors are finite direct sums of generalized Vermas.
Projection retains a finite generalized-standard flag. These Q cover every simple,
since its highest Levi E maps into that simple. For a constructed parabolic cover,
a lifted Q→P^p hitting its simple head is onto by essentiality and splits by
projectivity. Hence every projective cover is a summand of a finite sum of Q's.

For a maximal flag label η, the canonical trace U(g)X^η is
Δ^J(η)⊗X^η, with generalized-standard quotient. Prove this by induction on the
original flag. A last non-η quotient has zero η weight; a last η quotient splits
by lifting its top weight, which is highest, whose Levi span is E(η) and whose
u-action vanishes. Every endomorphism preserves this trace, and its projector
acts on the finite multiplicity space. The quotient has a shorter flag; induction
proves direct summands retain generalized-standard flags. This supplies the missing
projective flags without applying a merely right-exact reflector to ordinary flags.

## 5. Generalized Hom/Ext and BGG, without an alleged standard inclusion

Hom(Δ^J(η),DΔ^J(ξ)) injects into Hom(Δ(η),DΔ(ξ)) by the ordinary quotient and
costandard submodule maps. Thus it is0 unless η=ξ and at most1 then. For equal
labels the nonzero map Δ^J→L(η)→DΔ^J gives dimension1; its image is simple.
For an extension0→DΔ^J(ξ)→X→Δ^J(η)→0, if η is not strictly below ξ, X has no
weight strictly above η. Lift the top η vector: it is highest, its Levi span is
E(η), and u annihilates it, so it induces a section of the standard quotient.
If η<ξ, dualizing reduces to the first case. This includes incomparable labels.
Therefore Ext1 inside O^p vanishes; no restriction of ordinary Ext is presumed.

For a generalized-standard flag of P^p, induction using this Hom/Ext vanishing
identifies its Δ^J(ξ) multiplicity with dim Hom(P^p,∇^J(ξ)). Projectivity and a
composition series compute this dimension as [∇^J(ξ):L(η)]=[Δ^J(ξ):L(η)] because
simple restricted duals are fixed. This proves BGG reciprocity. The standard
support is ξ≥η and diagonal1. Removing the maximal higher traces gives the cover's
surjection to Δ^J(η) with higher-standard-filtered kernel, the highest-weight axiom.
Duality supplies enough injectives. Simple/standard Grothendieck bases and character
injectivity follow from their finite unitriangular highest-weight matrix.

## 6. Genuine regular parabolic multiplicities by finite Levi Weyl cancellation

Fix dominant regular integral λ and x,y∈^J W. Exactly these y have y·λ
J-dominant integral. Put ρ_J=half the sum of positive Levi roots. Since
(ρ_g−ρ_J)(H_j)=0, W_J fixes ρ_g−ρ_J and
u(ξ+ρ_J)−ρ_J=u(ξ+ρ_g)−ρ_g. Apply the proved finite Weyl character formula to
s_J, retaining the center twist ξ|z_J. Multiplying by the outside PBW denominator
gives the exact identity in the completed character ring:
chΔ^J(ξ)=Σ_{u∈W_J}(-1)^ℓ(u) chΔ(u·ξ).
No resolution, singular/parabolic equivalence or Koszul duality is imported.

Finite highest terms prove injectivity of characters on the Grothendieck group.
Comparing ordinary simple coefficients using the proved regular KL theorem gives
[Δ^J(y·λ):L(x·λ)]=Σ_u(-1)^ℓu P_{uy,x}(1)=n_{y,x}(1).
BGG gives the same projective-standard multiplicity. Non-parabolic simple
coefficients vanish because the left module belongs to the Serre category.
This is ANTISPHERICAL. Its matrix N=(n_{y,x}(1)) is upper unitriangular. Hence
chL(x·λ)=Σ_{y≥x}(N^-1)_{x,y}chΔ^J(y·λ), where the inverse is the finite signed
chain sum of products of n(1), not ordinary Mobius in general. The categorical
highest-weight theorem retains arbitrary integral blocks; this regular KL formula
does not claim the same matrix for singular-parabolic blocks.

For the native longest-left labels relative to λ_anti=w0·λ, write Δ^J(wJ y·λ_anti).
Its dominant label is iota(y)=wJ y w0∈^J W. This reverses order, so its coefficient
is n_{iota(y),iota(x)}(1), and its character inverse is the same matrix reindexed.
All weights carry an explicit dot-baseweight; no untyped permutation is a weight.

## 7. Singular translation, big projective and correct spherical dictionary

Facet weight exclusion gives TΔ_w=Δ'_w. Finite-dimensional restricted duality fixes E; finite tensor-weight duality gives D(E tensor M)=E tensor DM and blocks are dual-stable. Thus restricted-duality compatibility gives
T∇_w=∇'_w. Exactness gives Δ'_w→TL_w→∇'_w. If TL_w is nonzero, its image is
nonzero in the one-dimensional Hom(Δ'_w,∇'_w) and is the simple L'_w. For a
nonminimal w in W/W_J, a proper Verma embedding Δ_{ws}→Δ_w with ws<w,
s∈J, translates to a nonzero map between identical Vermas, hence an isomorphism;
nonzero follows by exactness preserving this injection. Therefore TL_w=0. A
composition series of Δ_w for minimal w must account for L'_w; among its coset
only this minimal w can survive, so TL_w=L'_w. This proves the exact survival
matrix, without claiming every quotient of a simple-head Verma is simple.

The most-singular Δ(-ρ)=L(-ρ) is projective by its top-weight functor and is
injective by duality; its one-simple block is semisimple. Translate it to the
antidominant singular μ using E highest w0(μ+ρ). Norm/extremal weights give one
standard for each DISTINCT orbit label, once. The translate Q is projective-injective.
Reverse adjunction computes Hom(Q,L(μ))=1: E* has highest weight -(μ+ρ), which
is the sole weight giving the projected most-singular Verma in E*Δ(μ).
Thus P(μ) occurs in Q. Every singular Δ(y·μ) contains the simple Δ(μ) by the BGG
embedding criterion; reciprocity forces every standard in P(μ) at least once.
The Q flag has each once, so Q=P(μ) and all these multiplicities are1. Other
projectives need not contain all standards; the native universal ≥1 clause is false.

Exact T and the regular KL theorem give [Δ(y·μ):L(w·μ)]=P_{yw0,ww0}(1) for
minimal right representatives y,w. To express this in the fixed LEFT spherical
module use k(w)=wJ w^-1 w0∈^J W. Its validity follows by reversing left descents
with w0 after changing minimum to maximum by wJ. Then
m_{k(y),k(w)}=p_{y^-1w0,w^-1w0}=p_{w0y,w0w}=p_{yw0,ww0}.
The first equality is spherical reduction, the second simultaneous inversion,
and the third longest-conjugation invariance: the Hecke automorphism
H_s→H_{w0 s w0} preserves bar and triangularity, so ordinary KL uniqueness proves
this symmetry. Thus singular blocks are spherical, not an antispherical mirror.

## 8. Hecke supplier proofs and the two small-category matrices

H is free as LEFT H_J on H_y,y∈^J W by unique length-additive factorization;
tensoring gives both standard bases. In type A, minimality says entries from
each contiguous J-block occur in ascending order. Swapping adjacent positions
can break this only for neighboring entries a,a+1 of one block; then xs_j=s_a x,
s_a∈J and xs_j>x. Thus the nonminimal branch has H_xH_s=H_{xs}=H_rH_x, giving
n_xC_s=(-v+v)n_x=0 and m_xC_s=(v^-1+v)m_x. Ordinary bar has leading H_x,
not H_x^-1, and Laurent lower terms. Their coset minima stay below x, proving
triangular induced bar.

For antispherical reduction, Φ(underlineH_x) has coefficients
Σ_u(-v)^ℓu p_{uy,x}; every lower supported term has uy<x, since x,y are minimal
and in distinct cosets. Hence all lower coefficients lie in vZ[v] directly,
and uniqueness identifies this with D_x. For spherical reduction let
C_J=Σ_u∈WJ v^{ℓwJ−ℓu}H_u. Pairing u with us or su gives left/right H_s eigenvalue
v^-1. Bar preserves these equations and top coefficient1, so C_J is bar-fixed,
and ordinary KL uniqueness identifies it with underlineH_wJ. The map
1⊗h→C_Jh identifies M with the eigen-subspace C_JH. Ordinary underlineH_wJx
has these left eigenvalues by the ordinary KL descent multiplication formula.
Comparing top coefficients on C_JH_y gives exactly p_{wJ y,wJ x}; bar and
triangularity identify it with C_x. The ordinary coefficient degree bound then
gives parity ℓx−ℓy and exponent at most that length difference in both families;
for the antispherical formula ℓuy=ℓu+ℓy. Thus the shifted coefficients are
polynomials in q=v^-2. This well-definedness is proved by the reduction, not an
unstated parity clause of the existence theorem.

For sl3,J={s1}, the regular genuine parabolic standard/simple matrix on
^J W=(e,s2,s2s1) is N=[[1,1,0],[0,1,1],[0,0,1]], with inverse
[[1,-1,1],[0,1,-1],[0,0,1]]. The singular antidominant block on right minima
(e,s2,s1s2) has A=[[1,0,0],[1,1,0],[1,1,1]], with inverse
[[1,0,0],[-1,1,0],[0,-1,1]]. Both true examples are retained distinctly.
The singular projective flags are COLUMNS of A: P(μ) has all3 standards,
P(s2·μ) has the last2, and P(s1s2·μ) has just the last standard. The existing
counterexample remains n_e,s2s1=0≠m_e,s2s1=v²; it does not establish that an
opposite convention changes the category's coefficient family.


Final order-support check:
The required coset order comparison is proved by subwords: if y<=x are minimal, prefix a fixed reduced wJ to a subword expression to get wJ y<=wJ x. Conversely a subword of wJ x with product wJ y splits into a J-word followed by a subword z of x. Parabolic projection sends that product and z to the same minimum y; length-additive factorization gives y<=z, and deletion reduces z within the x-subword, so z<=x. Thus y<=x iff wJ y<=wJ x, proving the triangular support of the spherical candidate. Right multiplication by global w0 reverses Bruhat covers because it sends length ell(a) to ell(w0)-ell(a) and keeps the same left reflection; hence it reverses the full order. This proves the order-reversing iota and k dictionaries used below, with no unproved label-mirror assertion.
