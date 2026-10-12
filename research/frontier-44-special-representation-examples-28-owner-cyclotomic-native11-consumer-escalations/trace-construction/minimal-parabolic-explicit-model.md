# Typed minimal-parabolic polynomial model and its four adjunction maps

**Native sign binding:** All source crossing/divided-difference formulas below use κ=−τ_native for every color pair, as proved and recorded in `native-sign-dictionary-pass1.md`; source operators must not be identified directly with native generators.

Run frontier-44-special-representation-examples-28; author /root/repair_klr_global_basis/cyclotomic_trace_construction. This supplies the explicit model/interface to the action helper's separately owned faithful minimal-parabolic transfer. It does not assume a one-dimensional Hom space or a generic cyclotomic Frobenius trace. Full source comparison is Webster §§1.2–1.3, pages12–19; the construction below uses the proved monic/NH polynomial model rather than a geometric Grassmannian theorem.

## Vertex and flag rings

Fix i and a dominant integral λ. For j≠i let Y_j=(y_{j,1},...,y_{j,m_j}) be spectator alphabets, and let C=⊗_{j≠i}k[Y_j]^{S_{m_j}}. Put A_ij=−〈h_i,α_j〉≥0 and t_ij=[u^{A_ij}]Q_ij(u,v), a unit independent of v by weighted homogeneity. Write q_ij=Q_ij/t_ij, monic in u. Take the standard initial monic polynomial a_i(u)=u^{λ_i}; or retain universal homogeneous monic coefficients for the ungraded deformation extension discussed below. Set

p_m(u)=a_i(u)∏_{j≠i}
∏_{s=1}^{m_j}q_ij(u,y_{j,s}),   N=deg_u p_m=λ_i+Σ_{j≠i}A_ij m_j.

Let r=m_i. Define c_r(u)=u^r-e_1u^{r-1}+...+(-1)^re_r. The vertex ring L_m is the coefficient ring for a monic factorization p_m=c_rb_{N-r}; equivalently it is C[e_1,...,e_r] modulo the coefficients beyond degreeN-r in the monic formal quotient p_m/c_r. For r>N set L_m=0. This is the monic partial-flag ring T_r(p_m), finite freeC of rank binom(N,r), by the universal rank-one model and its Artin/symmetric matrix proof. Its physical i-weight is h=N-2r.

The i flag ring is

B_m=L_m[z]/b_{N-r}(z).

It is free of rankN-r over L_m, with basis1,z,...,z^{N-r-1}. The target vertex L_{m+i} acts by adjoining the root z to the old i alphabet, e_a'↦e_a+z e_{a-1}; the remaining quotient factor becomes b/(u-z). Conversely B_m is a degree-r+1 monic splitting extension of L_{m+i}: choose the distinguished root z of c_{r+1}, and recover the old elementary functions recursively e_a=e_a'-z e_{a-1}. Thus B_m is free of rankr+1 over L_{m+i} with basis1,z,...,z^r. These descriptions are actual ring identities by monic division, not geometric notation.

Fix a color order with i last and set s_j(m)=−2d_jm_j+Σ_{ℓ>j}(−b_jℓ)m_ℓ. For j≠i, the j bimodule is C_m^j=L_m[y]{s_j(m)}, with source L_m action obvious and target L_{m+j} action appending y to Y_j and keeping the i alphabet. This is well defined because p_m/c_r is a polynomial, hence (p_m q_ij(u,y))/c_r is a polynomial of degreeN+A_ij-r. It is the precise graded spectator functor. The underlying polynomial ring retains its standard grading; the stated word shift makes both π and the reverse Q crossing have degree−b_ij. No j cyclotomic relation is imposed in this minimal-parabolic model.

## Four explicit cup/cap maps and degrees

For a monic extension D[z]/f(z), degree f=s, denote by τ_f the coefficient of z^{s-1} in the monic remainder. Its power-basis Gram matrix has zeros below the anti-diagonal and1 on it; its inverse is a finite triangular polynomial matrix. Let {z^a},{v_a} be its uniquely determined dual power bases. Thus τ_f is perfect and its Casimir is Σ_a v_a⊗z^a.

On B_m there are two such forms:

τ_old:B_m→L_m, degree−2d_i(N-r-1), from b_{N-r};

τ_new:B_m→L_{m+i}, degree−2d_i r, from c_{r+1}.

Choose the primitive nil-Hecke idempotent e_r=(-1)^{r(r-1)/2}∂_{w_r}X_1^{r-1}...X_{r-1}. Its graded matrix-Morita normalization sends the basic induction bimodule H_{r+1}e_r to the flag bimodule B_m{−2d_i r}; the right adjoint restriction becomes the reversed B_m. This shift is checked directly in the Artin matrix units: the row functional dual to the staircase has degree−2d_i r at the new step. Consequently take

F_i^model=B_m{−2d_i r} tensor_{L_m}−,

E_i^model=B_m tensor_{L_{m+i}}−.

For F⊣E, the counit on F E is τ_new(b_1b_2); the unit on E F is Σ_a v_a^new⊗z^a. Both have degree0: τ_new has degree−2d_i r and the tensor bimodule has the shift−2d_i r, while the Casimir has degree2d_i r. The two triangles are precisely Σ_a v_a τ_new(z^a b)=b and Σ_a τ_new(bv_a)z^a=b.

For E{t_i}⊣F use τ_old and its dual power bases instead. On the unshifted E F the second counit τ_old(b_1b_2) has degree

t_i=−2d_i(N-r-1)+2d_i r=−2d_i(N-2r-1).

The second unit on F E is Σ_a v_a^old⊗z^a and has degree−t_i. Restoring E{t_i} makes both maps degree0; the same two dual-basis identities prove both triangles. This exactly matches t_i(β)=−2d_i(〈h_i,Λ−β〉−1), and the word total is−2def.

Dots are multiplication by z. Their two mates coincide because both coefficient pairings are associative and commute with z. Same-color crossings are the divided-difference operators. Under the Artin matrix-Morita identification their cup/cap transport is the explicit matrix trace/relative trace calculation in `rank-one-universal-model.md`; the cyclic nil-Hecke relations, dot/cap commutation, curl expansions and bubble inversion are the coefficient identities of c_r b=p_m and c_r^{-1}c_r=1. In particular, the bubble coefficient sequences are the elementary/complete-symmetric inverse sequences; for all k>0, Σ_{a=0}^k(-1)^a e_a h_{k-a}=0, and at k=0 the value is1. No closed diagram or trace nondegeneracy on the generic KLR algebra is assumed.

The positive-coefficient flag forms correspond to the normalized rank-model second maps ε̂_r=(-1)^{N+1}ε_r used in `mixed-mates-residue-construction.md`: in the source formula ε_r(P)=D_r(P∏_{a≤r}(X_a-z)), the top power coefficient has sign(-1)^r(-1)^{N-r-1}=(-1)^{N+1}. Since N and h=N-2r have the same parity, the normalization is global by weight and does not depend on a choice of extremal string. Normalize the second unit by the inverse scalar, preserving both triangles and making degree-zero bubbles1.


The upward H_i of the FORMAL minimal-parabolic presentation is normalized projective restriction at INPUT vertexm: H_i(m)=E_i^basic(m){−d_i(1+h_m)}, h_m=N−2r. It must not be identified with the unshifted basic E above. The full first/second formal cup/cap degrees, mixed unshifted H_iG_j relation and canonical rho are checked in `graded-model-and-formal-h-dictionary-pass1.md`.

## All-downward crossings, including the exact mixed maps

Choose a total order of colors with i last. On polynomial flag bimodules use the usual KLR polynomial operators: a different-color crossing in one direction is the variable switch/quotient, the reverse is variable switch times Q; same-color crossings are divided differences. These are source crossing operators; native generators are their negatives for all color pairs. This preserves Q_ij(u,v)=Q_ji(v,u), and the two composites are multiplication by Q. The ordinary polynomial-operator identities establish idempotent/dot/far/quadratic relations. For a braid involving unequal outer colors, there is no correction. For equal outer colors, the difference is the divided difference of Q, exactly (Q(u,v)-Q(w,v))/(u-w), with the mixed-relation sign set by ∂=(s−1)/(u-v). Thus this is the full Q1–Q4 action, not a specially factored Q choice.

To check the operators descend to the i flag quotients, the only nontrivial pair is i,j. Write b=p_m/c_r. Applying i and then j gives the ring D_0=L_m[y,z]/b(z); applying j and then i gives D_1=L_m[y,z]/(b(z)q_ij(z,y)). Their natural maps are

π:D_1→D_0, monic remainder modulo b;

j:D_0→D_1, f↦Q_ij(z,y)f.

The second map is well defined because Q_ij b=t_ij bq. Their two composites are multiplication by Q, and their dot/crossing compatibility is literal polynomial multiplication. For several existing i strands the corresponding nil-Hecke algebra maps are π_r and j_r=∏_{a≤r}Q_ij(X_a,y), proved in the residue note. The j strand is moved through a block using only braid triples i,i,j or j,i,i, so their unequal-outer-color braid relation gives no extra correction.

## Mixed caps/units and their scalar

The first one-variable coefficient identity gives τ_{bq}(Qf)=t_ij τ_b(f) exactly. For complete existing i strings the full ordered-residue proof in `mixed-mates-residue-construction.md` gives

π_r ε̂_r^{p_mq}(Q_ij(X_{r+1},y) lift(z))=t_ij ε̂_r^{p_m}(z)

for every nil-Hecke element z, including coset crossings. The quotient and multiplier are ordinary mates through the supplied first adjunction: the mate/unit identity sends each dot-power unit column to the corresponding column, forcing π rather than an unspecified map. Taking dual power bases gives the mixed-unit identity. Reversing colors gives t_ji. Thus the two sideways-crossing composites are the indicated nonzero leading coefficients, and double mating a downward i,j crossing gives their quotient. With a diagram whose NE/SW strand is i and NW/SE strand is j, Webster's convention is t_ji/t_ij. The action helper's transfer must retain this ordered-strand dictionary in the actual first-strand quotient.

These identities also prove the sideways crossing is invertible in the model: its opposite mate scaled by t_ij^{-1} is its inverse. This verifies the mixed commutator/coherence premise needed by the faithful minimal-parabolic model theorem. It is a direct polynomial calculation, not an appeal to Hom dimension1.

## Scope of the transfer

The model maps above are concrete; their complete spectator/word shifts and the normalized formal H versus basic E distinction are specified in `graded-model-and-formal-h-dictionary-pass1.md` and supersede the earlier unshifted-spectator shorthand. The action helper owns the full diagram-normal-form faithfulness and quotient reconstruction showing that these identities hold in the actual generic cyclotomic algebra/category. That interface must not be replaced by rank-one object detection, which does not prove equality of arbitrary natural transformations. Once that coherent transfer is established, the generic trace reduction and diagonal symmetry adjustment in `proof-route-and-open-contract.md` apply with no characteristic, ADE, or specialized-Q restriction.

All monic-extension pairings, dual bases and residue identities survive arbitrary monic coefficient specialization as ungraded maps. Thus the rank-one deformation k[x]/(x(x-1)) is symmetric by the same construction and requires no nilpotence. Extending the whole generic symmetric conclusion to arbitrary monic cyclotomic polynomials requires the faithful quotient reconstruction with prescribed monic bubble coefficients; the model uses a_i(u) throughout and does not assert K_0=V_Λ for deformations. Internal grading, even trace degree and homogeneous categorical-action claims concern the standard homogeneous quotient (or the universal graded coefficient ring before ungraded specialization), not an arbitrary ungraded specialization.
