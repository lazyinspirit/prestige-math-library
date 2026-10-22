# Actual matrix proof for the extra free-product K-one interface

Author `/root/top_free_abelian_torsion`, 2026-10-20. New research proof, not yet
independently reviewed or accepted. This is an argument for the extra interface,
not a conditional list. It uses the newly accepted countable-choice freeabelian
calculation as an input; no already repaired supplier was reopened or checked.

Fix finite r≥0, assume CC, and put C=Z[Z^r], A=C[a,a^{-1}], B=C[b,b^{-1}],
S=C[F(a,b)]. We prove that K_1(A)⊕K_1(B)→K_1(S) is surjective. Consequently
Wh(Z^r×F_2)=0. The proof uses only finite matrices and finitely generated
C-modules. It develops the free-product matrix reduction explicitly rather
than citing a generalized-free-product decomposition theorem.

## 1. The finite-alphabet nilpotence lemma

For a fixed finite alphabet I, let N_M(C,I) consist of finite C-modules M with
endomorphisms ν_i such that all products of some fixed length N vanish.
N can depend on the object. Let N_P(C,I) restrict underlying modules to finite
projectives. These are exact categories, with underlying-module exact sequences
respecting the endomorphisms. N_M is closed under kernels. N_P is closed under
kernels of admissible epimorphisms between its objects: the underlying
surjection onto a C-projective splits, so its kernel is C-projective. No
closure under kernels of arbitrary morphisms is asserted for N_P. Extensions
of objects with bounds N,N' have bound N+N'.

Every object of N_M has a finite N_P-resolution. Here is the full new cover
construction, rather than an assumption that nil endomorphisms lift through a
chosen projective cover. Take a finite free C-surjection F→M and a nilpotence
bound N. On the finite free module ⊕_{|w|<N}F, indexed by words in I, define
σ_i to prepend i to the word, or to give zero at length N. Map the w-summand
to M by ν_w composed with F→M. The maps intertwine σ_i and ν_i; the empty word
makes the map surjective. The kernel is a finite C-module because C is
noetherian, is invariant under the σ_i, and is jointly nilpotent. Its underlying
projective resolution length drops until it is projective. Thus the cover
construction terminates after the finite C-projective bound.

Here is the actual local proof of the C-projective bound used in that
termination; it is an additional premise proved here, not inferred from the
accepted K-group values. All polynomial/Laurent rings under consideration are
enumerated by finite coefficient/exponent codes. A specified countable
generating list over such a ring enumerates its module; its kernels inherit
enumerations by listing a represented element when it belongs to the kernel
and zero otherwise. A countably free module is projective under CC: lift the
countably many basis images through the given surjection by countable choice.
Summands are projective, and a countably generated projective is a summand of
a countably free module by splitting its countable free surjection.

For a subgroup H of ⊕_{n∈N}Ze_n, put H_n=H∩⊕_{i<n}Ze_i. The new-coordinate
map identifies H_{n+1}/H_n with an ideal d_nZ. When d_n>0 select the vector of
least integer code realizing that positive coordinate. It splits H_{n+1} as
H_n⊕Zv_n; when d_n=0 no vector is added. The resulting list is a basis of H
because every element has finite support. Thus every countably generated
Z-module has a length-one countably generated projective resolution, with no
arbitrary well-order or dependent choice.

Inductively suppose all countably generated modules over an enumerated ring D
have projective resolutions of length at most d with countably generated
terms. A countably generated D[t]-module M is countably generated over D by
t^jm_i. The sequence

0→D[t]⊗_D M→D[t]⊗_D M→M→0,

with first map t^j⊗m↦t^{j+1}⊗m−t^j⊗tm and last map t^j⊗m↦t^jm, is exact:
compare the greatest coefficient for injectivity, and reduce polynomial
tensors to constants for exactness in the middle. Induce a length-d
D-projective resolution of M to D[t] for the two induced terms. Lift the
first map between these resolutions using their projectivity and take its
mapping cone. This gives a length-at-most-d+1 countably generated projective
resolution of M. For any fixed finite number of variables, only finitely many
resolutions and lifts are chosen; the countably many basis choices in a lift
are exactly the use of CC already stated.

If S is a specified countable multiplicative set, a module generated over
S^{-1}D by m_i is generated over D by m_i/s. Localizing its bounded
D-resolution is exact and preserves its projective summand decompositions.
It follows that for the particular C=Z[Z^r], every countably generated module
has a projective resolution of length at most r+1 with countably generated
terms. This asserts nothing about uncountably generated modules.

The rings are noetherian: in adjoining a polynomial variable use stabilization
of the ideals of leading coefficients, choose finite polynomials realizing
those coefficients, reduce all greater degrees, and use finite generation of
the remaining bounded-degree coefficient submodule. Localized ideals are
generated by denominators cleared from finite generators of their contractions.
For a finite C-module take finite free surjections onto successive kernels,
which remain finite. After r+1 syzygies the last kernel is projective. Indeed
the pullback of two projective epimorphisms onto one module splits over both
sources and gives Schanuel's isomorphism H⊕P'≅H'⊕P. Iterating it against the
bounded countable projective resolution identifies the last kernel plus
projective summands with a projective module. The last kernel is therefore
projective and already finite.

The same argument gives the exact drop used in the nil cover. If P→M is a
projective epimorphism and M has a length-e projective resolution for e>0,
let L be its first kernel and Q_0 its first projective. For K=ker(P→M),
Schanuel gives K⊕Q_0≅L⊕P, where L has a length-at-most-e−1 resolution. Resolve
the right side; lift the inclusion of Q_0 through the degree-zero augmentation
and compose that augmentation with the projection onto Q_0. These split off
Q_0 as a degree-zero projective subcomplex, leaving a length-at-most-e−1
resolution of K. If e=0, split P→M directly. Thus iterating the nil covers
really does end in finite C-projectives under CC.

We now justify the Euler comparison inside the nil category, so that no lift
is being made solely from underlying C-projectivity. For a fixed common bound
N define Λ_N=C⟨z_i:i∈I⟩/(all words of length N). A jointly nilpotent object
with this bound is exactly a finite C-module with a Λ_N-module structure. The
truncated-word cover above is Λ_N⊗_C F, free of finite rank over Λ_N, and hence
projective in this bounded nil category. It is finite free over C as well.
Kernels inherit the same bound and remain finite over C. Repeating these
covers gives a Λ_N-free partial resolution of any prescribed finite length L.
Whenever L≥r+1, its last kernel is C-projective by the just-proved bound and
kernel drop, and so truncating there is a finite N_P-resolution.

Given any finite N_P-resolution R_*→M, choose N at least the nilpotence bounds
of all its finitely many objects. Choose such a truncated Λ_N-free resolution
P_*→M of length L at least both r+1 and the length of R_*. Lift the identity
to a comparison P_*→R_* through degrees below L using Λ_N-projectivity of
P_j, so every lift intertwines all nil operators. At the last degree, the
induced map lands in the last cycle of R_*; this is either zero if R_* has
smaller length, or is uniquely the image of its final term if its length is
L. Thus the final map also exists and is nil-equivariant without presuming
that P_L is Λ_N-projective. To compare two resolutions, take a common N and
L and use this same construction for both.

The comparison cones are finite, acyclic complexes whose terms are in N_P.
Their cycles are C-projective: starting from the degree-zero term, each cycle
sequence is a surjection onto the preceding projective cycle and splits as a
C-sequence; its kernel is C-projective and nil-invariant. Therefore these are
admissible exact sequences in N_P and their Euler sums telescope to zero.
This proves that χ(M), the Euler sum of any finite N_P-resolution, is
independent of resolution. For a short exact sequence of nil objects, choose
a common bound and compare a sufficiently long truncated Λ_N-free resolution
of the subobject with a finite resolution of the middle object as above. The
comparison cone resolves the quotient and gives χ(M'')=χ(M)−χ(M'). Hence χ is
additive and is inverse to K_0(N_P)→K_0(N_M). This proves that isomorphism
without a false arbitrary-kernel assertion or a nonequivariant comparison.

Let J^kM be the sum of images of words ν_w of length k. Its finite filtration
ends in zero, and each successive quotient has all endomorphisms zero. The
filtration with zero endomorphisms on the underlying module gives the same
sum. Consequently [(M,(ν_i))]=[(M,(0))] in K_0(N_M). Forgetting the structure
is therefore an isomorphism to G_0(C). The ordinary C-projective Euler
comparison is the same construction with the empty alphabet and gives
K_0(C)≅G_0(C). The commuting forgetful diagram consequently makes
K_0(N_P)→K_0(C) an isomorphism as well.

In any C-algebra T whose coefficients commute with C, choose elements t_i.
For an object of N_P, the matrix 1+Σν_it_i is invertible: its nonidentity
part has a power equal to zero by joint nilpotence. Extend by the identity
on a finite complement to make the underlying module free. Its stable K_1(T)
class is independent of complement. A short exact sequence splits on underlying
C-projectives; the matrices are then block triangular, proving additivity.
We obtain a homomorphism τ:K_0(N_P)→K_1(T). It is zero on objects with zero
endomorphisms, and hence is zero on every object. This proves:

If finite projective C-modules carry finitely many jointly nilpotent
endomorphisms ν_i, then [1+Σν_it_i]=0 in K_1(T).

## 2. Reduced words and the elementary inverse test

Use the constant-coefficient splittings A=C⊕A', B=C⊕B', with C-bases a^k,
b^k for k≠0 in A',B'. Normal forms in the free group give the C-bimodule
reduced-word decomposition of S. Let V consist of nonempty reduced words
whose last syllable is in A', and W those whose last syllable is in B'. Then

S=C⊕V⊕W,
V=A'⊕(W⊗_C A'),  W=B'⊕(V⊗_C B'),
AV⊂C⊕V,  BV⊂V,  AW⊂W,  BW⊂C⊕W.

Also S=(C⊕W)⊗_C A as a right A-module. All these descriptions have literal
bases of reduced words; their asserted direct sums and tensor embeddings
follow by concatenating syllables of different types. There is no appeal to a
basis theorem for arbitrary group rings.

Here is the additional inverse test needed later. Let P,Q be finite projective
C-modules, p:P→Q⊗A', q:Q→P⊗B'. Extend them over S and suppose
κ=1+p+q is an isomorphism of (P⊕Q)⊗S. Then their coefficient endomorphisms,
regarded as off-diagonal endomorphisms of P⊕Q and indexed by the syllables of
A',B' actually occurring, are jointly nilpotent.

To prove this, in the reduced-word expansion of (P⊕Q)⊗S call a component
allowed if it is constant, or if it is in P with first syllable in B', or
in Q with first syllable in A'. These components form a C-submodule H.
The map κ preserves H: p prefixes an A'-syllable to a P-word beginning in B',
and q prefixes a B'-syllable to a Q-word beginning in A'; neither product
contracts. On the quotient by H, the identity part of κ is the identity,
whereas p+q strictly lowers syllable length. Indeed a forbidden P-word starts
in A'. Prefixing p multiplies the two A-syllables: the A' part lands in allowed
Q, while the constant part removes the first syllable and leaves a forbidden
Q-word with one smaller length. The other case is identical. Thus κ is
injective on this quotient: a nonzero element of greatest finite length has
a nonzero greatest-length identity contribution, which lower-length terms
cannot cancel. Therefore κ^{-1} sends every constant vector into H.

Inside H, the nonidentity part T=p+q increases length exactly by one. For a
constant vector z, write κ^{-1}z=Σw_k by word length. The equation w+Tw=z
forces w_k=(-T)^kz successively. The inverse has finite support on a finite
set of C-generators of P⊕Q, so there is a common bound N with T^Nz=0 for all
such generators. Reduced alternating syllables are a C-basis, hence every
coefficient product of length N is zero. Products that do not alternate are
already zero because the maps are off-diagonal in the indicated directions.
Only finitely many coefficient maps occur: finite generators of P,Q have
finite support in A',B'. This proves the inverse test. Section 1 therefore
also proves [κ]=0 in K_1(S), after adding a finite complement if necessary.

## 3. Higman reduction to a matrix with two kinds of columns

Take g∈GL_m(S). Each entry is a finite sum of reduced syllable words. A product
uv of two nontrivial parts in an entry can be removed using a new identity
block: the elementary block operations turn diag(g,I) into

[[g-uv,u],[-v,I]].

Here choose u to carry the coefficient and the prefix of one syllable word,
and v to be its last syllable, using rectangular blocks supported on that one
entry if necessary. Both new words have shorter length; the number of words
of the former greatest length drops. Lexicographic induction on greatest
length and the number of words of that length reduces to an invertible matrix
T_A+T_B, whose entries are sums of elements of A and B. The process uses only
stabilization and elementary operations and therefore preserves the K_1 class.

Stabilize once more and perform elementary operations to obtain

M=[[T_A,-T_B],[I,I]]=(M_A,M_B),

where M_A=[[T_A],[I]] has entries in A and M_B=[[-T_B],[I]] has entries in B.
Explicitly, right-multiply diag(T_A+T_B,I) by [[I,0],[I,I]],
then left-multiply by [[I,−T_B],[0,I]]. This gives the displayed M. It is invertible and represents the original K_1 class. Write its inverse
as the stacked block rows N=(N^1;N^2). Thus

N^1M_A=I, N^1M_B=0, N^2M_A=0, N^2M_B=I.

Decompose N^i=N_C^i+N_V^i+N_W^i by the reduced-word decomposition and put

K=M_A N_C^1+M_A N_V^1+M_B N_V^2,
L=M_B N_C^2+M_B N_W^2+M_A N_W^1.

These are constant C-matrices: their sum is MN=I, the first has entries in
C⊕V, and the second in C⊕W, whose nonconstant summands are disjoint.
Furthermore

NK=(N_C^1+N_V^1;N_V^2).

Comparison of its constant, V and W parts, permissible since K is constant,
gives

N_C^1K=N_C^1, N_V^1K=N_V^1, N_W^1K=0,
N_C^2K=0, N_V^2K=N_V^2, N_W^2K=0.

Multiplying once more by K shows NK²=NK and hence K²=K. Since L=I−K, also
L²=L and KL=LK=0. Thus C^{2n}=P⊕Q, P=KC^{2n}, Q=LC^{2n}, are finite
projective C-modules. (Here n is the size after the first linearization.)

## 4. Constructing and checking the vertex projections

Split N_V^i=N_{A'}^i+N_{WA'}^i using V=A'⊕WA', and similarly split
N_W^i=N_{B'}^i+N_{VB'}^i. Define

E=M_A(N_C^1+N_{A'}^1),  F=M_B(N_C^2+N_{B'}^2).

Then E has entries in A and F in B. We claim

K−E∈Mat(A'), L−F∈Mat(B'),
E²=EK=E, KE=K, EM_A=M_A,
F²=FL=F, LF=L, FM_B=M_B.

Here are the verifications, including the intersection argument often needed
in this calculation. The formula for K yields

K−E=M_A N_{WA'}^1+M_B N_{WA'}^2+M_B N_{A'}^2.

Its terms lie in A'⊕WA', while K−E also lies in A. Thus it has entries in A'.
The decomposition of N^1M_A=I separates its A part from its WA'⊕W part and
gives (N_C^1+N_{A'}^1)M_A=I. This proves EM_A=M_A and E²=E. Extracting the
A'-part of N_V^1K=N_V^1 proves EK=E. The same reasoning gives the corresponding
facts for F. It remains to verify KE=K and LF=L.

Set H=M_B C^n⊕M W^{2n}, a C-submodule of (C⊕W)^{2n}. The direct sum claim
follows because M is invertible and C^n in its second input block is disjoint
from W^{2n}. The inclusion follows from the word relations in Section 2.
The definitions put Q=LC^{2n} inside H and put P=KC^{2n} inside
M_A C^n⊕M V^{2n}. Since

S^{2n}=M_A C^n⊕M_B C^n⊕M V^{2n}⊕M W^{2n},

we have P∩H=0 and hence C^{2n}∩H=Q. The formula for K−E shows that each of its
columns lies both in C^{2n}⊗A' and in H⊗A', within (C⊕W)^{2n}⊗A'. Tensoring
with A' preserves this intersection: A' is a direct sum of copies of C, so
this is just the componentwise intersection in a direct sum. Thus those
columns lie in Q⊗A'. The constant projection L fixes them, and K kills them.
It follows that KE=K(K−(K−E))=K. The other identity LF=L follows by swapping
A,B and K,L. This proves every displayed relation.

The relations also show that E and K have the same kernel, E has image
M_A S^n, F and L have the same kernel, and F has image M_B S^n. Therefore
κ=E+F is invertible: its image contains the independent summands M_A S^n and
M_B S^n, because κK=E and κL=F; if κz=0 the independent image summands give
Ez=Fz=0, and then Kz=Lz=0.

Put d=E−K and e=F−L. The relations imply

d=LdK,  e=KeL,

with entries of d in A' and of e in B'. Relative to P⊕Q they are precisely
maps p:P→Q⊗A', q:Q→P⊗B'. Also κ=I+d+e. The inverse test of Section 2 and the
finite-alphabet nilpotence lemma of Section 1 now prove

[κ]=0 in K_1(S).

This is an actual proof of the nil factor's disappearance; mere vanishing of
an abstract Nil group without the matrix decomposition would not suffice.

## 5. Factoring the remaining matrix into vertex matrices

Let Γ=(KM_A,LM_B). Then

κΓ=(EM_A,FM_B)=(M_A,M_B)=M.

The A-map KM_A:A^n→P⊗A is an isomorphism. Injectivity follows by applying E:
EKM_A=EM_A=M_A, which is injective. Its image is all KA^{2n}, since
KM_A A^n=KE A^{2n}=KA^{2n}. The other map LM_B:B^n→Q⊗B is an isomorphism
by the same argument.

The accepted freeabelian calculation gives K_0(C)=Z[C] and K_0(A)=Z[A].
It follows that P,Q have C-rank n, and are stably free. To make that last
point explicit, [P]=n[C] gives P⊕T≅C^n⊕T for a finite projective T; add its
finite complement T' to obtain P⊕C^s≅C^{n+s}. Do the same for Q and enlarge
s if needed. Add these identity summands to Γ. In C-bases of the now free
P⊕C^s and Q⊕C^s, the stabilized matrix Γ factors as a C-invertible change
of target basis followed by a block diagonal matrix over A and B. Domain
and target permutations are also C-invertible. Thus [Γ] belongs to the sum
of the images of K_1(A),K_1(B); the C-change-of-basis class is already in
either vertex image. Since [M]=[κ]+[Γ]=[Γ], this proves the claimed
surjectivity for every original matrix g.

Finally the accepted freeabelian calculation says K_1(A),K_1(B) are generated
by -1, the r central Laurent variables, and a or b respectively. Their
images in K_1(S) are all units ±g of Z[Z^r×F_2]. Surjectivity therefore makes
the quotient by these units zero. This is exactly Wh(Z^r×F_2)=0, for every
finite r, under the same CC assumption.

## Primary sources and actual extent of reading

A. J. Casson, “Whitehead groups of free products with amalgamation,” Lecture
Notes in Mathematics 342 (1973), pp.144–154; full volume PDF acquired from
https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/SLN342.pdf.
Actual reading: the entire Casson chapter, PDF pages157–167; crucial formulas
and the split-intersection argument on PDF163–166 were also visually inspected.
The local proof above specializes and rederives the matrix construction,
replaces the tensor-algebra theorem by a proved finite-alphabet nil argument,
and replaces the triple-group exact-sequence shortcut by explicit stable
freeness and vertex factorization. No full-volume reading claim is made.

F. Waldhausen, “Algebraic K-theory of generalized free products,” Parts I and II,
https://www.maths.ed.ac.uk/~v1ranick/papers/algkgen1.pdf and
https://www.maths.ed.ac.uk/~v1ranick/papers/algkgen2.pdf, both acquired complete.
Actual reading in this lane: portions of Part I §1 printed140–149 (normal forms, splitting
modules and nilpotence) and Part II §11 printed210–216 (decomposition statement
and its proof structure). The full Quillen-category machinery was not read or
used as a local supplier. The normal-word inverse test above supplies the
specific finite algebra step needed here instead.
