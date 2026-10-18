# Topological quantum computing: mathematical scaffold

Status: expanded draft scaffold, 2026-10-16. This section adds QC25–QC27 to
the existing finite-dimensional QC track. It proposes mathematics only. The
category and braid data below do not assert that a material realizes an anyon
model or that a proposed Hamiltonian is experimentally available.

## Fusion spaces and categorical coherence (QC25)

The root library already defines tensor/multitensor categories, fusion and
multifusion categories, braided monoidal categories, braidings, and ribbon
structures. QC25 uses those exact definitions. The root `fusion category`
contract is finite semisimple and rigid with simple unit; it does not carry a
positive inner product. QC25 therefore adds an explicit unitary structure: a
conjugate-linear involution `dagger` on each morphism space, compatible with
composition and tensor product, positive on `f† f`, with finite-dimensional
Hilbert morphism spaces and unitary associator, unit constraints, duality maps,
and (when supplied) braiding. This is an additional hypothesis, not a
consequence of an algebraic representation.

For simple charge labels `a,b,c`, define the finite fusion multiplicity
`N_ab^c = dim Hom(a⊗b,c)` and the fusion space `V_ab^c = Hom(a⊗b,c)` with its
unitary-category inner product. Fix an ordered list of charges and a final
total charge. A fusion-tree basis is the orthonormal basis obtained by choosing
one intermediate simple label at each internal edge and one orthonormal basis
vector in each multiplicity space. Induction on the tree gives the dimension
as the sum, over admissible labelings, of the products of their multiplicities;
the proof begins with one charge and uses the direct-sum decomposition of each
tensor product. It does not assume all fusion multiplicities are one.

The associator induces a unitary change of basis
`F^{abc}_d : ⊕_e V_ab^e⊗V_ec^d → ⊕_f V_bc^f⊗V_af^d`.
The braiding induces `R^{ab}_c : V_ab^c → V_ba^c`. Their exact coherence
proofs use the categorical axioms, not a numerical guess at F/R entries. For
four objects the associator axiom is the following equality of maps from
`((A⊗B)⊗C)⊗D` to `A⊗(B⊗(C⊗D))`:
`α_{A,B,C⊗D}∘α_{A⊗B,C,D} =
(id_A⊗α_{B,C,D})∘α_{A,B⊗C,D}∘(α_{A,B,C}⊗id_D)`.
For three objects, the two braiding hexagons are the equalities
`c_{A,B⊗C} = α⁻¹_{B,C,A}∘(id_B⊗c_{A,C})∘α_{B,A,C}∘(c_{A,B}⊗id_C)∘α⁻¹_{A,B,C}`
and
`c_{A⊗B,C} = α_{C,A,B}∘(c_{A,C}⊗id_B)∘α⁻¹_{A,C,B}∘(id_A⊗c_{B,C})∘α_{A,B,C}`.
These are exactly the root monoidal associator and `def-braiding`
assumptions, with the displayed source/target parenthesizations. Choose
orthonormal bases in every multiplicity space and insert the semisimple
decompositions between these maps. The coordinate matrices of the two sides
are therefore equal block matrices; each block entry is the finite sum over
all intermediate simple labels and multiplicity indices. This derives the
matrix pentagon and both matrix hexagons without suppressing multiplicities.
Unitarity of the `F` and `R` matrices follows because the maps whose
coordinates they are are unitary.

For a fixed parenthesized tensor product, define each adjacent braid
generator by a specified `c` map conjugated by the indicated associators. The
local three-strand Artin equation is the equality of these two explicit maps
from `((A⊗B)⊗C)` to `((C⊗B)⊗A)`:
`(c_{B,C}⊗id_A)∘α⁻¹_{B,C,A}∘(id_B⊗c_{A,C})∘α_{B,A,C}∘(c_{A,B}⊗id_C)`
and
`α⁻¹_{C,B,A}∘(id_C⊗c_{A,B})∘α_{C,A,B}∘(c_{A,C}⊗id_B)∘α⁻¹_{A,C,B}∘(id_A⊗c_{B,C})∘α_{A,B,C}`.
Substituting the displayed hexagon identities and applying naturality gives
equality; the pentagon identifies the parenthesization routes used in this
substitution. Generators on disjoint pairs commute by bifunctoriality and
interchange of tensor-product maps. Thus these explicitly fixed-tree
operators satisfy the Artin presentation and define a unitary braid-group
representation. Their matrices are obtained by inserting the semisimple
summands and multiplying the resulting F/R blocks, with every label and
multiplicity index retained. No assertion about arbitrary recoupling paths is
needed beyond the displayed pentagon axiom. This proof uses the category's
stated associator/braiding axioms; it does not assume arbitrary algebraic
R-matrices or infer positivity from Yang–Baxter alone. In the Fibonacci
gate-density proofs below, the needed Artin relations are also verified
directly from their explicit path projectors.

Gauge choices are basis choices in every `V_ab^c`. If the source and target
fusion-tree bases change by unitaries `G_L` and `G_R`, then the recoupling
matrix changes to `F' = G_R^{-1} F G_L`; for an exchange map the formula is
`R' = G_{ba}^{c,-1} R G_{ab}^c`. Applying these changes at every internal edge
conjugates the full braid action by the induced fusion-tree basis unitary.
Thus matrix entries depend on gauge, while the representation up to unitary
equivalence and all probabilities transformed with the state and measurement
bases do not. This is proved by composing the basis-change matrices on each
tree; the internal factors cancel in each braid generator.

The root ribbon definition supplies a twist and dual compatibility. For a
simple object `a`, QC25 defines its topological spin as the scalar by which the
twist acts on `a`; scalarity follows from simplicity. A unitary ribbon fusion
category is called modular here when its only transparent objects (those with
identity double braiding against every object) are direct sums of the tensor
unit. Modularity is recorded as a useful nondegeneracy condition; it is not
required merely to define a unitary braid action.

The two small models use fixed chiral conventions, not unspecified “quantum
group parameters.” In the Fibonacci fusion sector, the labels are `1, τ`,
`τ⊗τ = 1⊕τ`, and the nontrivial recoupling block is
`F^{τττ}_τ = [[φ⁻¹, φ⁻¹ᐟ²],[φ⁻¹ᐟ²,−φ⁻¹]]`, where
`φ=(1+√5)/2`. The exchange eigenvalues are
`R^{ττ}_1=e^(−4πi/5)` and `R^{ττ}_τ=−e^(−2πi/5)=e^(3πi/5)` in the convention
used by Nayak et al. The identity `φ⁻²+φ⁻¹=1` proves `F²=I`; both `R` entries
have modulus one. Use the strict unit gauge: every `F` or `R` coordinate
involving `1` is the unique identity map. The only remaining associator
coordinates are `F^{τττ}_1=1` and the displayed `F^{τττ}_τ=F`.
Put `u=φ⁻¹`, `v=φ⁻¹ᐟ²`, so `u²+u=1` and `v²=u`.

Here is the full nontrivial pentagon check for four `τ` inputs. In the five
trees `(((ττ)τ)τ)`, `((τ(ττ))τ)`, `(τ((ττ)τ))`,
`τ(τ(ττ))`, and `(ττ)(ττ)`, order each admissible path basis
lexicographically by its two internal labels. For total charge `1`, the five
associator maps along the pentagon, in order, are `A₁=F`, `A₂=I`, `A₃=F`,
`A₄=I`, `A₅=I`; thus `A₅A₄=I=A₃A₂A₁` by `F²=I`. For total charge `τ`,

define
`A₁=A₃=[[u,0,v],[0,1,0],[v,0,−u]]`,
`A₂=A₄=[[1,0,0],[0,u,v],[0,v,−u]]`, and
`A₅=[[0,1,0],[u,0,v],[v,0,−u]]`.
Direct multiplication gives both pentagon composites as
`[[0,u,v],[u,u,−uv],[v,−uv,u²]]`; every entry equality uses only
`u²+u=1` and `v²=u`. If any of the four inputs is `1`, the pentagon reduces
to the unit constraint. This checks every Fibonacci pentagon sector rather
than leaving coherence as a prospective table exercise.

For the two hexagons, all cases with a unit input reduce to the unit
constraints. With three `τ` inputs and total charge `1`, the fusion space is
one-dimensional and both equations reduce to `R^{ττ}_1=(R^{ττ}_τ)^2`, which
holds for the chosen phases. With total charge `τ`, set
`D=diag(R^{ττ}_1,R^{ττ}_τ)`, `B₂=FDF`, and `E=diag(1,R^{ττ}_τ)`. In the
fixed left-tree bases the two hexagons are exactly
`B₂D=EF` and `DB₂=FE`. Multiplication verifies them from
`R^{ττ}_1=(R^{ττ}_τ)^2` and
`(R^{ττ}_τ)^2(R^{ττ}_τ−1)=φ`, together with `u²+u=1`, `v²=u`; the latter
phase identity follows directly from `R^{ττ}_τ=e^{3πi/5}`. Thus the finite
Fibonacci F/R data used by the braid model satisfy every pentagon and
hexagon sector. Their positive inner products and unit-modulus R entries
supply unitarity.

The three-`τ`, total-`τ` fusion space is two-dimensional.

The Ising example is the fixed `1, ψ, σ` fusion sector with
`σ⊗σ=1⊕ψ`, `σ⊗ψ=σ`, and `ψ⊗ψ=1`. In the three-`σ`, total-`σ` space the
intermediate-channel basis is `{1,ψ}`, `F^{σσσ}_σ=2^(-1/2)[[1,1],[1,−1]]`,
and `R^{σσ}_1=e^(−iπ/8)`, `R^{σσ}_ψ=e^(3iπ/8)`. These are Ising-category
phases; the `SU(2)_2` theory has different overall Abelian phases. QC25 claims
only the displayed fusion-sector data and verifies the corresponding braid
matrices directly. A full table of every Ising associator is not a premise for these displayed
sector calculations; no all-label Ising F/R table or global Ising ribbon
coherence claim is used below.

## Braid gates, phase, and density (QC26)

For a unitary braided fusion category, each fixed-list, fixed-total-charge
fusion space is a finite Hilbert space. In a chosen parenthesization, an
adjacent exchange is the `R` map in the local channel basis, conjugated by the
specified `F` changes into that basis. QC25 derives the coordinate pentagon
and both hexagons from the root associator and braiding axioms; the explicit
three-strand composites there prove the adjacent Artin relation, while
bifunctoriality proves distant commutation. Thus this fixed-tree construction
is an honest unitary representation `ρ:B_n→U(V)`. A projective gate is its
class in `PU(V)=U(V)/U(1)`. A scalar is ignorable only for an isolated
fixed-sector computation: a controlled braid or a coherent superposition of
total-charge sectors can turn that scalar into a relative phase. The exact
root global-phase and controlled-phase theorems are the relevant QC suppliers.

For three Ising `σ` anyons of total `σ`, the matrices are
`B₁=diag(R_1,R_ψ)` and `B₂=F B₁ F`. Since `R_ψ/R_1=i` and
`F=2^(−1/2)[[1,1],[1,−1]]`, after quotienting the common phase the two
projective generators are π/2 rotations about Pauli axes; direct conjugation
sends each Pauli matrix to a Pauli matrix. This proves the single-qubit
Clifford restriction in the displayed sector.

For the standard multi-anyon Ising/Majorana realization, take `2m` Majorana
operators satisfying `γ_j†=γ_j`, `γ_j²=I`, and
`γ_jγ_k=−γ_kγ_j` for `j≠k`, on the `2^m`-dimensional fermionic Fock space.
The total parity `Π=i^mγ_1⋯γ_{2m}` is a Hermitian involution, so either parity
eigenspace has dimension `2^(m−1)`, matching the fusion space of `2m` `σ`
anyons with fixed total charge `1` or `ψ`. The adjacent-pair channel
projectors are
`Q_1(j)=(I−iγ_jγ_(j+1))/2` and `Q_ψ(j)=(I+iγ_jγ_(j+1))/2`. They are
orthogonal and sum to `I`. The physical exchange is
`R_1Q_1(j)+R_ψQ_ψ(j)=e^(iπ/8)U_j`, where
`U_j=e^(−πγ_jγ_(j+1)/4)`; the scalar is common, and the relative channel
eigenvalue is `R_ψ/R_1=i`. The displayed three-anyon Hadamard `F` gives the
same two-channel projector change of basis, with squared overlap `1/2`; the
other local blocks are one-dimensional. Therefore these pair projectors and
exchanges reproduce the Ising braid action on each fixed-parity fusion space
(up to the explicitly displayed common scalar).

Direct conjugation gives
`U_jγ_jU_j†=γ_(j+1)` and
`U_jγ_(j+1)U_j†=−γ_j`, while every other `γ_k` is fixed. Thus braids send
even Majorana monomials to signed even monomials. To identify the encoded Pauli
group, use a Jordan–Wigner realization
`γ_(2k−1)=Z_1⋯Z_(k−1)X_k`,
`γ_(2k)=Z_1⋯Z_(k−1)Y_k`. On a fixed-parity sector the operators
`Z̄_k=iγ_(2k−1)γ_(2k)` and
`X̄_k=∏_{l=k}^{m−1}(iγ_(2l)γ_(2l+1))` for `1≤k<m` are, up to signs,
`Z_k` and `X_kX_m`. They are canonical Pauli pairs on the `m−1` logical
qubits. Every even Majorana monomial is generated by these pairs modulo the
fixed total-parity relation and scalar phases: in binary notation, even
subsets of the `2m` Majorana indices modulo the all-indices parity vector
have dimension `2m−2`, exactly the `2(m−1)` independent logical Pauli
coordinates. Signed permutations of the γ's therefore normalize this logical
Pauli group. The braid image lies in the finite projective Clifford group and
is not dense in the full multi-qubit unitary group. Measurement, magic-state
injection, or another nonbraiding resource changes the model and must be
charged separately. This proof is for the stated Majorana realization; it
does not presume an unproved all-label Ising F/R table.

For Fibonacci, write `r=R_τ/R_1=e^(−3πi/5)` and remove the common scalar from
`B₁`, giving `D=diag(1,r)` and `B₂=FDF`. With `a=φ⁻¹`, `b=φ⁻¹ᐟ²`, the
recoupling matrix has `a²+b²=1`. Expanding `B₂` and both sides of
`D B₂ D=B₂ D B₂` reduces the braid relation to
`r+r⁻¹=−φ⁻¹`, which follows from `2cos(3π/5)=−φ⁻¹`. The relative eigenvalue
`r` has order ten, and `B₁,B₂` do not commute because `F` has nonzero
off-diagonal entries and `D` has distinct eigenvalues.

The single-qubit density proof is local and does not invoke the general
Freedman–Larsen–Wang classification theorem. Put `C=B₁B₂⁻¹`. Direct expansion
using `F²=I` and `|F_11|²=φ⁻²` gives `det C=1` and
`tr(C)=r+r⁻¹+(2−r−r⁻¹)φ⁻²=φ⁻²`. The number `φ⁻²` has minimal polynomial
`x²−3x+1`; its conjugate `φ²` is greater than two. If `C` had finite order,
its trace would be a sum of two roots of unity, all of whose algebraic
conjugates lie in `[-2,2]`. Therefore `C` has infinite order. Its powers are
dense in the circle subgroup about its rotation axis by the published
irrational-rotation lemma. Conjugating by `B₁` gives a second circle. The two
axes differ: if `B₁` normalized the first circle, its order-ten rotation could
not reverse the axis and would belong to the circle, hence commute with `C`,
contrary to the explicit matrices. The Lie algebra of the closure therefore
contains two nonparallel axes and their nonzero bracket, which spans
`so(3)`. Invoke the published Cartan closed-subgroup and Lie-subalgebra
suppliers under their explicit `AC_ω` hypothesis; they make the closure a Lie
subgroup and its tangent algebra bracket-closed. Full Lie-algebra dimension
makes it open in connected `SO(3)`, hence all of
`SO(3)`. Since `PU(2)≅SO(3)`, the braid image is dense in `PU(2)`.

This proves projective single-qubit density on the three-`τ`, total-`τ`
sector. For an encoded two-qubit gate use six `τ` anyons of total charge `1`.
The left-associated fusion-path basis has five states. Pair the anyons as
`(1,2),(3,4),(5,6)`: the four charge strings with an even number of `τ`
labels form the computational subspace `C⁴`, while the all-`τ` string is a
one-dimensional leakage sector. Let `P` be the orthogonal projection onto
`C⁴`. For a normalized representative `V`, define logical block error relative
to `U` as `||PVP-UP||` and leakage amplitude as `||(I-P)VP||`; these are
different quantities. If the physical braid is `zV`, its phase-insensitive
logical block error is `inf_{|w|=1}||P(zV)P-wUP||`; the leakage amplitude is
phase invariant. The stated δ bound is for the normalized representative;
for the physical braid it is the same bound after matching the known scalar
phase. The projective operator metric on unitaries is
`d_P([V],[W])=inf_{|z|=1}||V-zW||`.

Here is a local exact density proof for this five-dimensional representation.
Write `r=R_τ/R_1=e^(−3πi/5)` and remove the same `R_1` scalar from each braid
generator, obtaining the valid unitary representation
`B_i=rI+(1-r)P_i`, where `P_i` projects onto the channel in which the
exchanged pair fuses to `1`. This per-generator scalar is a finite-order
one-dimensional character; it changes no projective gate and is recorded
whenever the braid is controlled. In the path basis, encode `1` by `0`, `τ`
by `1`, put `d_0=1,d_1=φ`, and let `E_i=φP_i`. Its entries are zero unless
two paths agree except possibly at coordinate `i` and both have
`x_(i−1)=x_(i+1)=a`; in that case
`(E_i)_(x,y)=sqrt(d_(x_i)d_(y_i))/d_a`. This is exactly the squared-first-
column projector from the stated Fibonacci `F` matrix. When `a=τ` the local
projector block in channel order `(1,τ)` is
`[[φ⁻²,φ⁻³ᐟ²],[φ⁻³ᐟ²,φ⁻¹]]`; when `a=1` it is `[1]`. Multiplication and
`φ⁻²+φ⁻¹=1` give `P_i²=P_i`, `P_iP_(i+1)P_i=φ⁻²P_i`, and commutation at
separation at least two. Since `P_i` is an orthogonal projection and `|r|=1`,
each `B_i` is unitary. For adjacent projections `P,Q` with
`PQP=φ⁻²P` and `QPQ=φ⁻²Q`, direct expansion gives
`(rI+(1-r)P)(rI+(1-r)Q)(rI+(1-r)P) − (P↔Q)` equal to
`(1-r)[r+φ⁻²(1-r)²](P−Q)=0`; the last equality follows from
`r+r⁻¹=−φ⁻¹`. The distant commutation relations and these adjacent relations
are exactly the Artin presentation of `B₆`, so the matrices define a unitary
braid representation independently of a physical realization.

For transparency, the five allowed paths `(x_0,…,x_6)` are
`0101010, 0101110, 0110110, 0111010, 0111110`. The initial pair-charge
encoding above is one 4D code subspace; the density result below applies to
any chosen 4D subspace of this 5D space. In particular, the triple encoding
with the first three and last three τ anyons each fusing to τ is another 4D
subspace with a one-dimensional complement; no equality of these two code
subspaces is assumed. Put
`C=B_1B_2⁻¹` and `X=C−C⁻¹`. The first three anyons have total charge `1` on
one path, where `C=1`, or total charge `τ` on a two-dimensional block with
multiplicity two. On that block `det C=1` and `tr C=φ⁻²`; hence the spectrum
on the full space is `1,e^(iθ),e^(−iθ)` with the latter two eigenvalues each
of multiplicity two and `2cos θ=φ⁻²`. In the two-dimensional block, direct
multiplication gives
`tr C=r+r⁻¹+(2-r-r⁻¹)φ⁻²=φ⁻²`. If `e^(iθ)` were a root of unity, every
algebraic conjugate of its trace `e^(iθ)+e^(−iθ)` would lie in `[-2,2]`; the
conjugate `φ²>2` rules this out. Thus `θ/(2π)` is irrational and powers of
`C` are dense in the circle
`diag(1,e^(it),e^(it),e^(−it),e^(−it))`, and its Lie tangent is proportional
to `X`.

The remaining Lie-algebra rank is an exact algebraic calculation, not a
floating-point rank test. For `Ad_i(Y)=B_iYB_i⁻¹` and `[Y,Z]=YZ−ZY`, form the
following 24 traceless skew-Hermitian matrices in order:

`Y0=X`; `Y1=Ad_1(Y0)`, `Y2=Ad_2(Y0)`, `Y3=Ad_3(Y0)`;
`Y4=[Y3,Y0]`, `Y5=[Y3,Y1]`, `Y6=[Y3,Y2]`;
`Y7=Ad_3(Y1)`, `Y8=Ad_3(Y2)`, `Y9=Ad_2(Y3)`, `Y10=Ad_4(Y3)`;
`Y11=Ad_2(Y4)`, `Y12=Ad_4(Y4)`, `Y13=Ad_4(Y5)`, `Y14=Ad_4(Y6)`;
`Y15=[Y10,Y3]`, `Y16=[Y10,Y4]`, `Y17=[Y10,Y5]`, `Y18=[Y10,Y6]`;
`Y19=[Y10,Y7]`, `Y20=[Y10,Y8]`, `Y21=[Y10,Y9]`,
`Y22=[Y12,Y0]`, `Y23=[Y12,Y1]`.
To certify independence, use `K=Q(r,s)` with `r` the chosen primitive tenth
root, `φ=1-r-r⁻¹`, and `s=√φ`. The ring `Z[r,s]` has the presentation
`Z[x,y]/(x⁴−x³+x²−x+1, y²−(1-x-x⁻¹))`, with `x⁻¹=x⁹`. This presentation
has no hidden relations: `Q(r)` has degree four and real subfield `Q(√5)`;
`φ` has norm `−1` in that real quadratic field, so it is not a square there.
If `u²=φ` in `Q(r)`, complex conjugation gives `ū=±u`; the plus case puts
`u` in `Q(√5)` and contradicts the norm, while the minus case makes `u²`
negative at the chosen embedding where `φ>0`. Thus `s²-φ` is irreducible over
`Q(r)`, the tower degree is eight, and the displayed monic relations span
the full coefficient ring. All denominators used in `E_i`, `B_i⁻¹`, and the
certificate are units `φ,r`; complex conjugation fixes `φ,s` and sends `r`
to `r⁻¹`. Evaluate the coefficient ring modulo 31 by `r↦15`, `φ↦19`, and
`s↦9`. The defining relations hold: `Φ₁₀(15)=0`, `19=1-15-15⁻¹` with
`15⁻¹=29`, and `9²=19`. The images of `φ,r` are nonzero. In any coefficient
expression involving complex conjugation, first replace `r` by `r⁻¹` in the
coefficient field, then evaluate that coefficient at `29`; no involution on
`F_31` is asserted or needed. Thus every coefficient and denominator in the
selected minor has a well-defined specialization. The determinant of the 24-by-24
matrix whose rows are the row-major entries of `Y0,…,Y23` in positions
`(1,1),…,(5,4)` is `17 mod 31`. Therefore its algebraic determinant is
nonzero, so these matrices are linearly independent over `C`. They lie in
`su(5)`, whose real dimension is 24, and hence span `su(5)`.

Let `H_1` be the closure of the normalized total-charge-1 braid image in
`U(5)`. The circle above puts `X` in `Lie(H_1)`; conjugation by each `B_i`
and Lie-bracket closure put every `Y_j` there. Thus `su(5)⊂Lie(H_1)`. The
path formula gives `tr(P_1)=⋯=tr(P_5)=2`; each is a projection, so its rank is
two and `det B_i=r³`. The determinant image is finite. The identity component
of `H_1` lies in `SU(5)` and has Lie algebra exactly `su(5)`; by Cartan's
closed-subgroup theorem under `AC_ω` it is open in `SU(5)`. The spectral
theorem gives connectedness of `SU(5)`, so this identity component is all of
`SU(5)`.

The same construction gives a second, eight-dimensional total-charge-τ
block. Its eight allowed paths `(x_0,…,x_6)` are
`0101011, 0101101, 0101111, 0110101, 0110111, 0111011, 0111101, 0111111`.
Use the identical `E_i` formula and normalized generators. Now
`tr(P_i)=3`, so `rank(P_i)=3` and `det(B_i)=r⁵`. For `C=B_1B_2⁻¹`, the
first-three-charge-1 sector contributes eigenvalue `1` with multiplicity two;
the first-three-charge-τ sector contributes `e^(iθ),e^(−iθ)` each with
multiplicity three, where `2cos θ=φ⁻²`. The same Galois argument makes
`θ/(2π)` irrational. The 5D and 8D blocks have the same `θ`, so powers of
the simultaneous pair `(C_1,C_τ)` are dense in the one-parameter subgroup
whose parameter `t` is shared by both blocks. Its tangent pair is a nonzero
real multiple of `(X_1,X_τ)`, where `X_a=C_a−C_a⁻¹`; hence this pair belongs
to the joint Lie algebra.

For an exact `su(8)` rank certificate, start with `Z₀=X`. Perform the
following deterministic selection entirely over `F_31`: repeatedly scan
`Ad_i(Z_j)=B_iZ_jB_i⁻¹` for `j` in current list order and `i=1,…,5`, appending
an element exactly when its specialized row vector is independent of the
previous rows; then, using the resulting snapshot, scan commutators
`[Z_j,Z_i]` in lexicographic order `j>i`, again appending exactly when the
specialized row is independent. Stop when a full round adds none. This fixed
algorithm selects 63 word expressions, whose exact complex lifts are
traceless skew-Hermitian. In the same well-defined `F_31` specialization, the
63-by-63 minor of row-major positions `(1,1),…,(8,7)` is `22 mod 31`, as
reproduced by `b6-su8-lie-rank-certificate.py`. This proves exact complex
independence and hence spanning of `su(8)`. Each selected 8D word expression lifts by the same adjoint/commutator recipe
to a pair of matrices in the joint braid closure's Lie algebra; these lifted
pairs project onto `su(8)`. The explicit 5D words likewise lift to pairs
projecting onto `su(5)`. Thus both projections of the joint Lie algebra are
surjective; no claim that the two separately listed matrix bases are equal is
needed.

Let `H` be the closure of the normalized joint braid image in `U(5)×U(8)`.
Its determinant image is finite, generated by `(r³,r⁵)`, so
`Lie(H)⊂su(5)⊕su(8)`. The projected Lie algebra is a subdirect sum of the two
simple real algebras. Here is the needed product argument. The complexification
of `su(n)` is `sl_n(C)`: a traceless complex matrix decomposes uniquely as
`X+iY` with `X,Y∈su(n)`. To prove `sl_n(C)` simple, take a nonzero ideal
`J` and a nonzero `A∈J`. If `A` has an off-diagonal entry, choose a traceless
diagonal `D` whose ordered differences `D_ii−D_jj` are all distinct; a
polynomial in `ad_D` isolates a nonzero scalar multiple of that matrix unit
inside `J`. If `A` is diagonal, it is non-scalar because it is nonzero and
traceless, and bracketing with a suitable matrix unit gives an off-diagonal
unit in `J`. Brackets of `E_ij` with matrix units generate all off-diagonal
units and `[E_ij,E_ji]=E_ii−E_jj` generates all traceless diagonals. Thus
`J=sl_n(C)`. Complexifying a real ideal of `su(n)` now shows it is zero or
all of `su(n)`, so `su(5)` and `su(8)` are real simple. Their dimensions 24
and 63 show they are not isomorphic. For a subdirect Lie algebra `g⊂g_1⊕g_2`, the sets
`k_1={x:(x,0)∈g}` and `k_2={y:(0,y)∈g}` are ideals. Simplicity makes each
zero or its whole factor. If either is whole, `g` is the product; otherwise
both are zero and `g` is the graph of an isomorphism, impossible here. Hence
`Lie(H)=su(5)⊕su(8)`. Cartan's theorem under `AC_ω` makes the identity
component an open full-dimensional subgroup of connected `SU(5)×SU(8)`, so
it equals that product. Thus one normalized B₆ word can approximate any
specified pair of determinant-one targets in both total-charge sectors.
The same Lie-rank proof applies to the physical categorical image: multiplying
each generator by the scalar `R_1` leaves `C` (exponent sum zero) and every
adjoint action unchanged, while the physical determinant image is still
finite because `R_1` and `r` are roots of unity. Hence its identity component
also contains `SU(5)×SU(8)`.

The original categorical braid on the direct sum of charge-1 and charge-τ
blocks differs from the normalized word by the same scalar `R_1^k`, where `k`
is exponent sum. This is one common phase on the full six-anyon fusion space,
including both charge blocks and every spectator multiplicity. It does not
change uncontrolled code probabilities or leakage, but it is relative under
coherent control and must be tracked. The finite joint compiler below searches
the normalized representation and returns this scalar as phase metadata.

This simultaneous density proves scalable encoded universality with a stated
code. For `n≥1` triples of τ anyons, fix each triple to total charge τ and
the whole register to a charge `c` with `V(τ^n→c)≠0`. Fusion-tree
reassociation gives the code-space factorization
`H_code≅(C²)^⊗n⊗V(τ^n→c)`; the second factor is a spectator fusion space, not
an extra computational qubit. A braid on one triple acts as its 2D total-τ
matrix tensored with identity on the spectators.

For two adjacent triples, their combined charge is `a∈{1,τ}`. In
`V(τ⁶→1)`, the computational subspace where both triples have charge τ is
`C⁴` and its complement is one-dimensional. In `V(τ⁶→τ)` the same
computational block is `C⁴` and the complement is four-dimensional. For any
`U∈U(4)`, set `λ=(det U)⁻¹` and choose determinant-one targets
`T_1=U⊕λ∈SU(5)` and `T_τ=U⊕diag(λ,1,1,1)∈SU(8)`. Joint density supplies a
single normalized braid whose error in each block is at most `δ`. Its logical
block error and leakage amplitude are at most `δ` in both charge sectors.
Identify the computational bases in both sectors by the same ordered pair of
three-anyon fusion paths, one for each local qubit; the final total-charge
label changes only the complementary fusion coordinate. This fixes the common
`U∈U(4)` target without an implicit basis change.

For `n≥2`, the full `3n`-anyon fusion space at total charge `c` has, after a
unitary fusion-tree reassociation, the local six-strand decomposition
`⊕_{a=1,τ}V(τ⁶→a)⊗V(a⊗τ^(3n−6)→c)`. For `n=1`, the corresponding local
decomposition is the one-triple split
`⊕_{a=1,τ}V(τ³→a)⊗V(a⊗τ^(3n−3)→c)`. In either formula, a zero-dimensional
factor is simply omitted. The spectator factor includes every remaining
physical fusion path, including the internal 2D multiplicities of spectator
triples. By naturality of tensor product, a local braid acts as
`⊕_a ρ_a(b)⊗I`. For `n≥2`, define the global ideal two-qubit gate
`W(U)=⊕_a T_a⊗I_{V(a⊗τ^(3n−6)→c)}` on the whole fixed-charge space. It is
unitary and preserves the triple code, where it is exactly `U` on the chosen
adjacent pair and identity on all spectators. Since tensoring with identity
and taking orthogonal direct sums preserve the maximum operator-norm error,
the braid is within `δ` of `W(U)` on the entire ambient space, even on states
with prior leakage. Its logical block error and leakage are therefore each at
most `δ` uniformly in all spectator sectors.

For a one-qubit target on triple `j`, use the same fusion-tree reassociation
to split its strands by local total charge `b∈{1,τ}`. The computational
subspace lies in `V(τ³→τ)≅C²`. Replace any `U(2)` factor in the QSD output by
its determinant-one representative; the removed scalar is global for this
uncontrolled circuit and is retained as phase metadata. Compile that
`SU(2)` target there by the established single-qubit density. Extend the target
to the full global space by taking the actual compiled lifted-braid action on
the local total-1 summand
`V(τ³→1)⊗V(1⊗τ^(3n−3)→c)` and the ideal `SU(2)` target tensored with identity
on the spectators in the local total-τ summand. This braid-dependent extension is
unitary, preserves the full triple code, and differs from the physical braid
by at most `δ` on the whole ambient space: the total-1 blocks agree exactly,
and the total-τ blocks have the single-qubit approximation error. This
explicit extension makes the telescoping estimate valid after previous
leakage; density on the total-τ sector alone is not used as a claim of
density on the total-1 sector.

The arbitrary-size conclusion follows by compiling an exact finite QSD
decomposition using the above one- and two-qubit constructions. Allocate
local tolerances `δ_j` with `Σδ_j≤ε`. Every ideal extension preserves the code
and implements its QSD gate there up to the stored one-qubit scalar. Unitary
telescoping bounds the full ambient operator error by `ε`; for the code
projector `P_code`, this gives
`inf_{|z|=1}||P_code V P_code−z U P_code||≤ε` and
`||(I−P_code)VP_code||≤ε`, uniformly on the spectator fusion factor. The
scalar is harmless only for uncontrolled fixed-charge computation and must
be corrected under coherent control. The root QSD theorem
supplies a gate-count bound for its abstract one-/two-qubit decomposition,
not a numerical decomposition-time or finite-precision bound; the braid
search adds no useful length bound. Successive encoded SWAP targets, each
itself a `U(4)` target, bring any chosen pair of logical wires together. No
exact leakage-free entangling braid is required.

This density proof is an existence theorem for approximation; it supplies no
efficient joint `SU(5)×SU(8)` word-length bound. Exhaustive enumeration with
certified matrix-norm bounds terminates for a target given by a Cauchy name,
since density gives a strict-`ε` word, but its cost has no useful bound here.
The published root Solovay–Kitaev compiler covers `SU(2)` only. A polynomial
or polylogarithmic joint fixed-dimension compilation claim requires a
separately proved compiler for simultaneous `SU(5)×SU(8)` targets and is not
inferred from density.

## Toric code (QC27)

Fix `L≥3`. The periodic square cellulation has vertices and faces indexed by
`(i,j)∈(Z/LZ)^2`, one horizontal and one vertical edge from each vertex, and
one qubit per edge, so `n=2L²`. Define
`A_v=∏_{e incident to v}X_e` and `B_p=∏_{e on ∂p}Z_e`. A star and a plaquette
overlap in zero or two edges, so `A_v B_p=B_p A_v`; equal-type checks commute.
The two global relations are `∏_v A_v=I` and `∏_p B_p=I`. A local binary
incidence proof shows there are no further relations: the vertex-edge and
face-edge boundary maps have ranks `L²−1` each. The common +1 eigenspace is a
stabilizer code of rank `2L²−2`, hence dimension
`2^(2L²−(2L²−2))=4`, which encodes two logical qubits.

A violated star is an `e` excitation and a violated plaquette is an `m`
excitation. A `Z` string on a primal path anticommutes only with the two end
stars; an `X` string on a dual path anticommutes only with the two end
plaquettes. When a primal and dual string cross once, their Pauli products
anticommute. Thus taking `e` around `m` contributes phase `−1`. Noncontractible
primal/dual loops are logical Pauli operators; the two independent homology
directions give two anticommuting Pauli pairs. A noncontractible loop has
minimum weight `L`, while every contractible loop is a product of plaquette
or star checks. The stabilizer distance is therefore `L`, and the existing
published distance-to-recovery theorem proves exact correction of Pauli errors
of weight `t` whenever `2t<L`.

For any Pauli supported inside a contractible disk whose complement is
connected, commuting with every check forces its primal/dual support chains to
be cycles. The disk contains no noncontractible cycle, so each chain is a
boundary and the Pauli is a stabilizer up to phase. Hence its compression to
the code is scalar. Expanding an arbitrary local operator in the finite Pauli
basis proves exact local indistinguishability under this region hypothesis.
This proof is the mathematical protection statement; it does not assert
stability under arbitrary perturbations of a material Hamiltonian.

The finite commuting Hamiltonian
`H=−J_e∑_v A_v−J_m∑_p B_p`, with `J_e,J_m>0`, has the same four-dimensional
ground space. The two global parity relations force excitations to occur in
pairs. Every violated check costs `2J_e` or `2J_m`; open strings attain a
two-defect pair, so the exact gap is `4 min(J_e,J_m)`. Extending a noncontractible
logical string of the cheaper species one edge at a time keeps at most two
endpoint defects, so the energy barrier is at most `4 min(J_e,J_m)` (and is
`4J` in the equal-coupling model), independently of `L`. This rules out a growing energy barrier for
this two-dimensional code. It does not prove a thermal lifetime, a
self-correcting-memory theorem, or a positive-temperature phase.

## Physical realization boundary

The exact category braid representation and the finite toric-code calculation
are mathematical structures. A physical braid implementation additionally
assumes a realized 2+1-dimensional phase, localized quasiparticles, a
finite-dimensional low-energy fusion band, controlled exchanges, and a gap
that stays open along the exchange path. An adiabatic estimate also needs a
`C²` finite-dimensional Hamiltonian path, a constant-rank isolated spectral
band, a positive minimum gap, and derivative bounds. Locality, low temperature,
separation compared with correlation length, absence of stray quasiparticles,
and suppression of tunnelling must be stated in a physical error model; they
are not consequences of `F`, `R`, a Yang–Baxter equation, or the toric-code
stabilizer algebra. No topological-phase existence or robustness statement is
used as a premise. The algorithmic adiabatic interface and its JRS error bound
are handled forward in QA37.

## Page and item route

QC25 owns the unitary-category, fusion-space, `F/R`, coherence, gauge, twist,
and modularity interfaces. QC26 owns projective gates, fixed-charge encodings,
Ising restrictions, the proved Fibonacci single-qubit density result, and
the unresolved six-anyon density proof with its approximate logical/leakage
consequences. QC27 owns the exact periodic
toric-code construction, excitations, strings, logical algebra, distance,
local indistinguishability, gap, and energy barrier. Each B companion contains
finite worked matrices or lattice checks and is a logical leaf. The exact
inventories and page prerequisites are in `../pages.json` and
`../proposed-items.json`.
