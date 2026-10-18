# Isolated Geck review: final algebraic supplier chain

Date: 2026-10-18. Owner: `/root/math81_frobenius`; isolated reviewer:
`geck_basic_set_source`. Research only; no canonical changes or historical
receipts have been altered.

## Exact source and scope

Actually read Geck, *Modular Representations of Hecke Algebras*,
arXiv:math/0511548v2, PDF pp15–17 and 20–36, including Theorem 6.6 and its
proof; also Lusztig, *Hecke algebras with unequal parameters*, §§18.3 and
18.8–18.12, the cited proofs of the J machinery. Existing local sources are
in `research/physics-algebras-planning-2026-10-17/sources/05-hecke/`.
The historical source register's read range stopped at p21; that entry does
not authenticate a historical reading of Theorem 6.6. This review read the
later pages directly.

PA39 claim 3 is “Relate unequal-parameter cells to modular basic sets only
in finite Weyl settings where the theorem applies.” Its explicit obligation
is specialization field, parameter, Schur-element conditions, and source
proof status. A1×A1 identity decomposition is an example, not the general
supplier.

Theorem 6.6 has the standing hypotheses P2–P8 and P15′ from §5.2, finite
Weyl W, integral weight L, and characteristic zero or L-good characteristic.
It does not assert those P properties for arbitrary unequal finite Weyl
weights. The notes explicitly give asymptotic B_n, b>(n−1)a>0, and B_n
with b=0,a>0 (type-D reduction), alongside equal parameters. Zero weights
need Remark 5.9's conventions. Later type-B results give other basic-set
existence cases; these notes are not a current census of known regimes.
The conditional theorem is the strongest general finite-Weyl cell-theoretic
statement sourced by Theorem 6.6.

A=Z[v,v^{-1}], θ(v)=u∈k×, ξ=u². Geck's S_s satisfy
(S_s−v^{2L(s)})(S_s+1)=0. The normalized T_s=v^{−L(s)}S_s satisfy
(T_s−v^{L(s)})(T_s+v^{−L(s)})=0. Thus the specialized multiplicative
parameter is ξ^{L(s)}, not an arbitrary independent unit tuple.
Schur elements have lowest term f_E v^{−2α_E}; L-good means θ(f_E)≠0
for every E. The theorem allows θ(c_E)=0. Requiring θ(c_E)≠0 for all E
would restrict it to the semisimple identity-matrix case.

## Source proof omissions

Geck Theorems5.3–5.4 cite Lusztig §§18.3,18.9–10 rather than printing the
J-associativity, φ, and bimodule proofs. Lusztig does print the coefficient
identities. His §18.10 action and Geck's starred action differ by diagonal
signs; transport them coherently. Proposition5.8 sketches the leading-Schur
argument. Proposition6.1 invokes a symmetric-algebra Schur criterion and
Tits deformation. Theorem6.6's splitting paragraph refers to [32]Thm3.5
and Schur indices. Proposition6.7 explicitly omits the decomposition-map
and reciprocity proofs, referring to [29],[30],[48]. Copying Geck's printed
proof would leave local supplier gaps.

The following final proof fills the splitting and reciprocity gaps without
asserting that the right action on a-layer equals right multiplication by φ.

## Previously proved data needed by this final argument

The integrating owner must prove locally:

1. Finite free H, split generic algebra, generic labels E∈Irr_Q(W), trace.
2. Weighted KL/dagger bases, a, γ, D, n_d, exact P2–P8/P15′ hypotheses.
   Ideals I_i=span{C_w^†:a(w)≥i}, I_0=H, I_{N+1}=0.
3. J, φ:H→J_A, and B_i=I_i/I_{i+1} as (J_A,H)-bimodules; the left H
   action is restriction through φ. The starred formula shows J^jB_i=0
   for j≠i, where J=⊕J^i is the a-graded ideal decomposition. The B_i are
   finite free on their displayed KL classes.
4. J_Q split with simples E^♠, Schur elements f_E, and support degree α_E;
   good-characteristic specialization J_k split with simples V_E, preserving
   dimensions and degrees. Stable integral models are supplied as needed.
5. Generic φ is an isomorphism, pulling E^♠ back to E_v. This follows from
   nilpotence of ker φ (it lowers the I-filtration), generic semisimplicity,
   and equal dimensions.

A useful complete integral proof for item4: let O be a DVR and Λ an O-order
with perfect symmetrizing pairing τ=Σ_E f_E^{-1}tr_E in a split fraction
algebra. Assume every f_E is a unit. Choose full stable lattices L_E and
embed Λ into Γ=⊕End_O(L_E). Such lattices exist by replacing any full L by
ΛL. The trace-dual Γ*=Γ because f_E are units; hence Γ⊂Λ*=Λ⊂Γ. Therefore
Λ=Γ and its special fibre is split semisimple with exactly these integral
models. This handles all blocks at once without assuming integral central
idempotents. Do not apply this DVR lattice argument over an unspecified
coefficient ring without proving its hypotheses.

## Complete splitting argument

Write H=H_k and J=J_k. For a simple H-module M let a_M be the largest a(w)
with C_w^†M≠0; it exists since C_1^†=1. Put a=a_M and T(M)=B_a⊗_H M.
The map π:T(M)→M, [f]⊗m↦fm, is well-defined, H-linear and nonzero, hence
surjective. If x=Σ_i[f_i]⊗m_i∈kerπ and g∈I_a, tensor balancing gives
 g x=Σ_i[g f_i]⊗m_i=[g]⊗Σ_i f_i m_i=0.
Thus I_a kills kerπ. Every simple factor M′ of kerπ has a_{M′}<a, so
[*T(M):M]=1. Every J-simple factor V_E of T(M) has α_E=a, by homogeneous
support.

Decompose T(M)=⊕_E V_E^{m_E}, since J is split. Multiplicity one implies
exactly one E with m_E>0 has M as a factor of *V_E; for it both m_E and
[*V_E:M] equal1. Call it E(M). All other factors of *V_{E(M)} have smaller
a. Therefore α_{E(M)}=a_M, and E(M)=E(M′) implies M=M′: unequal a-values
force unequal degrees, and at the same degree *V_{E(M)} has only M.

For the omitted splitting step, D=End_H(M) is a finite-dimensional division
k-algebra. The action 1⊗d commutes with J and preserves every isotypic
component of T(M). The E(M)-component has multiplicity one, giving a
unital homomorphism D→End_J(V_{E(M)})=k. Its kernel is zero since D is a
division algebra. Thus D=k. Finite-dimensional density now yields
H/Ann(M)=End_k(M), so every simple is absolutely simple. H is split.
No Schur-index theorem, perfect-field assumption, or right-φ identity is
needed.

## Reduction and exact reciprocity without a right-φ identity

Take a complete DVR O with fraction field F and residue k, compatible
injective A→O, generic H_F split. The good-Schur argument gives
J_O=⊕End_O(L_E). Restrict L_E through φ. Its generic fibre is E_v and
its residue is *V_E. Thus d_{E,M}=[*V_E:M], with the following complete compatibility proof.
After the splitting argument above, choose for each simple M a primitive
idempotent e_M of H_k whose projective has top M. Lift it to an idempotent
ê_M of H_O. For every stable free O-lattice L affording the same generic
simple E, exactness of e_M gives
 [k⊗L:M]=dim_k e_M(k⊗L)=rank_O ê_M L=dim_F ê_M E_F.
The last expression is independent of L. Hence stable-lattice reductions
have identical composition multiplicities, without using positive-
characteristic trace arguments. For the definition's chosen A_p model,
A_p maps into O: every denominator outside kerθ has nonzero residue and
therefore is a unit. Base-changing that model gives one such stable
O-lattice; its reduction is the original specialized model. The J_O lattice
is another such lattice, so the equality with [*V_E:M] follows. This
argument requires the A_p integral model promised by the definition. If
that existence is itself not a proved local supplier, define decomposition
numbers through stable DVR lattices using this independence proof; do not
silently assert Du–Parshall–Scott integral-model existence.

It follows from P4 that d_{E,M}>0 implies a_M≤α_E. Indeed choose w with
a(w)=a_M and C_w^†M≠0. It acts nontrivially on *V_E, so some nonzero
h_{w,d,z} term of φ(C_w^†) acts on V_E. Then a(z)=α_E, and P4 gives
a(w)≤a(z).

Let e∈H_k be primitive, with P=H_ke the projective cover of M. Since H_k
is split, eM has dimension1 and eM′=0 for every other simple M′. Lift e
to an idempotent ê∈H_O, using complete-DVR Newton lifting. Exactness of
X↦eX and the direct-summand lattice êL_E give
 dim_F ê(F⊗L_E)=dim_k e(k⊗L_E)=d_{E,M}.
Filter P_O=H_Oê by I_iê. Its layer is B_{i,O}ê, since right multiplication
by an idempotent is exact. This layer is O-free, its reduction is B_{i,k}e,
and it is a J_O-module since right H commutes with left J.
The integral matrix-algebra decomposition of J_O preserves each simple
multiplicity between generic and special fibres. In the generic fibre,
restriction by φ identifies J-simple E with Hecke-simple E_v. Only layer
i=α_E can contain it. Additivity along the filtration shows that its
multiplicity there is its multiplicity in H_Fê. The split regular-bimodule
identity H_F=⊕_E E_v⊗E_v* shows the latter is dim_F êE_v=d_{E,M}. Hence
 multiplicity of V_E in B_{i,k}e = δ_{i,α_E}d_{E,M}.
This is precisely the required reciprocity equality. The proof uses only
commutation of the right H and left J actions, not φ=φ′ or an unidentified
right multiplication formula.

One can first run this modular-system argument over
k_0=Frac(imageθ). In the nonsemisimple case the Schur-factorization and
L-good supplier imply θ(v) is a root of unity; then k_0 is a number field
or finite field. For a number field use O=k_0[[t]], v↦θ(v)+t. For finite
k_0 use the ring of integers of the unramified p-adic extension with
residue k_0 and choose a lift of θ(v) transcendental over Q. Such lifts
exist because the residue ball is uncountable whereas algebraic elements
over Q are countable. Then A→O is injective, residue equals θ, and H_F
is a scalar extension of the split Q(v)-algebra. Full-Schur nonvanishing
handles the semisimple branch separately. Once H_{k_0} is split, scalar
extension to arbitrary k/k_0 preserves simple labels and composition
multiplicities: tensor its split semisimple quotient and use nilpotence of
the radical. Do not assume existence of a DVR with arbitrary residue k
without constructing it or supplying the appropriate lemma.

## Completing canonical basic-set strictness

Let b=min{i:B_{i,k}e≠0}. Earlier layers vanish, so P=I_be and P surjects
onto P^b=B_{b,k}e. This nonzero quotient has simple head M with multiplicity one,
since the head of its projective cover P is exactly M. Hence it is
indecomposable: two nonzero direct summands would give a head with at least
two simple summands (even if both were isomorphic to M). As a J-module it is a sum of V_E, with every summand also an
H-submodule. Therefore P^b is one V_{E_1}, once. Reciprocity gives
 d_{E_1,M}=1, α_{E_1}=b.
The a-inequality gives a_M≤b. If d_{E,M}>0 and α_E=a_M, reciprocity puts
V_E in layer α_E, so α_E≥b. Thus b=a_M and E=E_1. Such E exists because
E(M) has that degree and multiplicity1. Consequently
 d_{E,M}>0 ⇒ E=E(M) or α_E>a_M.
Together with injectivity of M↦E(M), d_{E(M),M}=1, and
 a_M=min{α_E:d_{E,M}>0}, these are exactly Geck Definition4.13's canonical
basic-set axioms.

## Remaining owner obligations

This final chain does not prove the J construction, leading-Schur identity,
or validity of P axioms in any unnamed regime. Those remain explicit
owner suppliers. It fills the final splitting and reciprocity obligations
constructively. In particular, some θ(c_E)=0 must be allowed in the desired
nonsemisimple modular theorem while θ(f_E)≠0 remains essential.
