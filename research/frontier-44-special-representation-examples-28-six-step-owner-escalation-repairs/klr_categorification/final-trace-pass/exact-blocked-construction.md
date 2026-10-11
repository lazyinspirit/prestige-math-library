# Exact second-adjunction and trace construction boundary

Final retained bounded pass on the same biadjunction/trace escalations. No source acquisition, historical counter reset or independent acceptance. The exclusive source scope is the two IDs in `input-guards.json`. Jump and canonical-extraction sources now belong to their new owners and were not edited. Neither trace source was edited: the actual missing supplier maps below are not established, and adding a conditional source paragraph would not close them.

## Actual cyclotomic bimodules and the missing isomorphism

Fix A=R^Lambda(beta), B=R^Lambda(beta+alpha_i), e=e(beta,i), X=Be (B,A), Y=eB (A,B), h=<h_i,Lambda-beta> and t=2d_i(1-h). Basic induction is X tensor_A -, and basic restriction is Y tensor_B -. The ordinary adjunction F dashv E is already actual: its unit sends a to ae in eBe=Y tensor_B X, and its counit X tensor_A Y -> B is multiplication.

To construct the second adjunction E{t} dashv F on ALL modules one needs an actual A-bimodule functional

    T:eBe -> A, homogeneous of degree t,

and a finite homogeneous element

    C=sum_alpha x_alpha tensor_A y_alpha in X tensor_A Y,
    deg(x_alpha)+deg(y_alpha)=-t,

such that, for all x in X, y in Y and b in B,

    x=sum_alpha x_alpha T(y_alpha x),
    y=sum_alpha T(y x_alpha)y_alpha,
    b C=C b.

The last equation uses the left B-action on X and right B-action on Y. These identities give the explicit second unit b |-> bC in (X tensor_A Y){t} and counit (y tensor_B x) |-> T(yx) from (Y tensor_B X){t} to A. The first two displayed identities ARE the two triangles, including their degrees. Equivalently the actual homogeneous pairing map

    X{t} -> HOM_A(Y,A), x |-> (y |-> T(yx))

must be an isomorphism of (B,A)-bimodules. Here HOM_A is left-A-linear Hom; the right A-action is multiplication on its values and the left B-action is precomposition with the right B-action on Y. This typing cannot be replaced by a scalar trace on a commutative flag coefficient ring.

Current projectivity proves X is finite right-A-projective and Y finite left-A-projective. The categorical commutator gives split maps between EF and FE with finite identity summands. Neither supplier currently defines T or C above, proves this particular pairing map is a bimodule isomorphism, or gives the old-crossing cyclicity needed for T to be A-bilinear. Their completed monic polynomial comparison cannot be treated as an already transported flag counit.

## Exact monic model dual bases, with both triangles

There is a concrete construction in each monic coefficient extension, with no factorial denominator. Let D be a commutative coefficient ring, f(z)=z^m+c_(m-1)z^(m-1)+...+c_0 monic, H=D[z]/f, and tau:H->D the coefficient of z^(m-1) in the monic remainder. Define d_j(w) by

    (f(z)-f(w))/(z-w)=sum_(j=0)^(m-1) z^j d_j(w).

Then tau(z^k d_j(z))=delta_(k,j) for 0<=k,j<m. One direct proof is polynomial interpolation at the generic distinct roots over the universal integral coefficient ring: tau(g)=sum_a g(z_a)/f'(z_a), and d_j(z_a) is the coefficient of z^j in f(z)/(z-z_a). Thus the matrix of these coefficients is the inverse of the power evaluation matrix. Both sides of the duality identities are polynomial in the universal coefficients by monic remainder division; the generic-root proof proves these polynomial identities integrally, and arbitrary base change yields the identities over D without a discriminant inverse. This is an identity proof, not an assertion that generic freeness survives specialization.

Consequently C_f=sum_j z^j tensor_D d_j(z) is a Casimir: (z tensor1-1tensor z)C_f=f(z)tensor1-1tensor f(z)=0 in H tensor_D H, so it commutes with H; dual-basis identities give both triangles. For a graded f with deg z=2d, tau has degree -2d(m-1), C_f has degree 2d(m-1).

Apply this separately to the old flag extension of degree m=N-r and the new flag extension of degree r+1. In the proposed Morita flag model F=H{-2dr}, E=H. Tau_new has degree -2dr and gives F dashv E; tau_old has degree -2d(N-r-1), and t-2dr=-2d(N-r-1) for h=N-2r, giving E{t} dashv F. The two explicitly defined Casimirs supply the correctly shifted model units and both model triangles. This completes the dual-power-basis algebra, but not its transport to X,Y,T,C: the model owner's required Artin-Morita identification of these coefficient traces/crossing transfers with the actual cyclotomic maps remains open.

## Refreshed formal sign dictionary and what it does not supply

The diagram owner reports a source-derived final dictionary from cached Cautis–Lauda (2.22)/(2.24), reflected as required by Webster: the two opposite cancellation sums have LITERAL a+b+c=-2 and a leading -identity; the single endocurl sums retain a+b=-1 with opposite plus/minus orientations. At h=1,p(u)=u the corrected double equation gives 0=-id+id, fixing the previous vacuum obstruction. The diagram owner still reports that full Definition installation is pending and cap-off remains a conditional proposal. The flag rho comparison/inverses and integral relative-cap bridge remain unconstructed. These source-derived sign formulas alone are not the missing actual T/C maps or an ideal-intersection proof. No formula here assumes that globally negating a crossing changes the quadratic relation.

For the ordered mixed mate one must transport the SAME T/C maps through the i,j spectator flags and calculate the two closures. The remaining exact target is

    closure(tau_r e(nu) a)=(t_ji/t_ij) closure(a tau_r e(nu)),
    a in e(nu)R^Lambda(beta)e(s_r nu),

with bottom adjacent colors (i,j), i strand SW to NE, and t_ij the nonzero u^(-a_ij) coefficient of Q_ij. The coefficient-extension calculation must identify the normalized relative cap with the actual transported T, not just prove existence of some perfect relative form. A monic residue cancellation formula for an unspecified relative form cannot identify either ordered mate or its normalization.

## Exact downstream perfect-trace assembly once T/C really exist

This part does not require geometric or crystal assertions. For a word nu of root weight beta, composition of the actual second adjunctions would give E_nu{t_beta} dashv F_nu dashv E_nu with

    t_beta=sum_r 2d_(nu_r)(1-<h_(nu_r),Lambda-gamma_(r-1)>)
          =(beta,beta)-2(Lambda,beta)=-2def_Lambda(beta).

Let P_nu=Be(nu) and let epsilon_nu:e(nu)Be(nu)->k be the composite second counit. Define the actual raw functional, if those counits have been supplied, by

    tau(a)=sum_nu epsilon_nu(e(nu) a e(nu)).

For any finite graded B-module M the composed second adjunction identifies HOM_B(M,P_nu) with D(e(nu)M){-t_beta}, sending f to the functional m |-> epsilon_nu(e(nu) f(m)). Summing over the FINITE word set yields HOM_B(M,B) ~= DM{-t_beta}. At M=B, the endomorphism x |-> xa therefore maps to b |-> tau(ba). Hence a |-> tau(-a) is a graded linear isomorphism B -> DB{-t_beta}. This proves perfectness on every corner, including off-diagonal paired corners; one does not infer perfectness merely because some diagram closure is nonzero.

The diagonal rescaling for the ordered mate ratio can be completely explicit. Fix a total order on the finite color support and put

    c_nu=product_(a<b,nu_a>nu_b) t_(nu_b,nu_a)/t_(nu_a,nu_b).

For an adjacent bottom pair (i,j), this gives c_(s_r nu)/c_nu=t_ij/t_ji, both when adding and when removing an inversion. Equal-color swaps leave c unchanged. Products are intrinsic inversion products, so Coxeter square/far/three-strand moves cause no path ambiguity. All c_nu are invertible degree-zero field scalars. With c=sum_nu c_nu e(nu), define tr(a)=tau(ca). For p=tau_r e(nu) and a in the opposite corner, the stated mixed ratio gives

    tr(pa)=c_(s_r nu)(t_ji/t_ij)tau(ap)=c_nu tau(ap)=tr(ap).

Dot/idempotent/equal-color ratios are 1; off-diagonal terms have zero trace. Thus generator cyclicity implies tr(xy)=tr(yx) for all products. Since left multiplication by c is invertible, the preceding perfect pairing stays perfect. The degree is t_beta. This would give DB ~= B{t_beta} as B-bimodules and, by finite-projective evaluation, D_psi P ~= P^#{t_beta}. For monic deformations the same identities would apply with shifts forgotten ONLY after the actual monic T/C and mixed-mate transport are supplied.

The trace source's finite-dimensionality/nilpotence/root-string part is separately supported by its annihilator supplier. The downstream trace construction above is a complete algebraic consequence of an actual coherent second adjunction and exact ordered mate ratio. It is not a construction of those missing premises and therefore cannot close either current full carrier.

## Root metadata proposals and final disposition

- `lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates`: keep full risk/review open. Proof 2.1 still needs actual T/C (equivalently the typed pairing isomorphism) and their Morita/cap-off transport; 3.1 still needs actual normalized relative caps and the ordered mate ratio. Do not close the hold from corrected formal cancellation indices or the categorical commutator. No Statement, contract interface or manifest change proposed.
- `thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric`: keep full risk/review open at its coherent-biadjunction supplier. Root may retain this explicit word-trace/inversion-weight construction as derivation evidence; it does not warrant marking the trace carrier complete. No Statement, contract interface or manifest change proposed.

No item edit occurred, so there is no new final formatting/rendering/layout result to claim. Existing ordinary passes in the initial handoff remain historical local checks. Final bindings record current supplier bytes and the two unchanged exclusive carriers; no unrelated or whole-corpus validation was attempted.
