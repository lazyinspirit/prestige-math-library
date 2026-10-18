# Rank-one ribbon and all-rank centralizer construction — isolated proposal

This is a construction proposal, not an acceptance, live-run repair, gate, or metadata update. Only this `proposals/ribbon/` directory is edited. The actual batch62 and batch78 canonical carriers remain under their owners. Read against `isolated-proposal.md`: the coefficient of the divided-power R-series must **multiply** `[r]!`, the full toral-binomial weight character must be supplied, and the coproduct here is the Sawin coproduct, not the inverse-K coproduct of library68.

The current pivotal-ribbon carrier contains two mathematically false interfaces. They require explicit correction, not an assertion that its missing computation has passed:

* With the chosen pivot K the fundamental quantum dimension is +delta, but its self-duality Frobenius–Schur sign is **−1**. Any invariant self-duality cup and cap satisfying the two snakes have planar circle **−delta**. Ordinary positive-loop *unoriented pivotal* TL cannot be equivalent with its given pivotal structure.
* The boundary projector has a nonzero image on the unreduced tensor power: its image is Delta(ell−1). Therefore the original map into ordinary End_U(V^n) cannot descend through the boundary ideal. The descended target is End in the negligible quotient, equivalently a chosen realization on the retained direct summands.

The strongest correct conversion preserves positive-loop TL **algebras**, the full all-rank Jones kernel, positive K-pivotal traces, every ell>=3, the quantum braiding and twists, and framed ribbon closures. Its categorical presentation is TL(−delta), re-pivotalized by tensor parity. Details follow.

## 1. Fundamental module, invariant duality, and the unavoidable sign

Write q=exp(pi i/ell), s=exp(pi i/(2ell)), q=s^2, delta=q+q^−1, ell>=3. In the ordered basis (+,−),

    K=diag(q,q^−1), E=[[0,1],[0,0]], F=[[0,0],[1,0]].

The coproduct is Delta(E)=E tensor K+1 tensor E and Delta(F)=F tensor 1+K^−1 tensor F. The invariant maps w:1→V tensor V and b:V tensor V→1 are

    w(1)=+−−q^−1(−+),
    b(+−)=−q, b(−+)=1, b(++)=b(−−)=0.

They are intertwiners for E,F,K. They also preserve integral weights and all toral binomial characters. For divided powers r>=ell the tensor-square action is zero when ell>=3: the weight shift is 2r>4. For 2<=r<ell, the divided powers are ordinary powers divided by the nonzero [r]!, so invariance follows from E,F invariance. This also covers ell=3. Thus these are morphisms in the actual divided-power/full-weight category, not just small-quantum-group morphisms.

Both snakes are identities. For example, `(id tensor b)(w tensor id)` sends + to b(−,+)+=+ and − to `−q^−1 b(+,−)−=−`; the other snake is identical with the factors reversed. But b(w)=−q−q^−1=−delta. Every invariant vector is a scalar multiple of w (solve the weight-zero E equation), and every invariant functional is a scalar multiple of b. The snakes force the two scalars to have product one. Therefore their loop remains −delta; rescaling cannot change it.

The actual pivot j is K: for the ordinary left dual, `j_V(x)(f)=f(Kx)`. The invariant bilinear form is B=[[0,−q],[1,0]]. Its pivotal transpose satisfies

    b(y,Kx)=−b(x,y), equivalently K B^t=−B.

This proves FS_K(V)=−1. It is compatible with `Tr(K)=delta`: the self-dual planar circle and the K-pivotal closure are different closures. Equating them was the defect. At ell=3, delta=1 and the same argument still forces loop −1, so there is no exceptional repair by the smallest root.

Set e=wb and U=−e. In (++,+−,−+,−−) order,

    U=[[0,0,0,0],[0,q,−1,0],[0,−1,q^−1,0],[0,0,0,0]].

Thus U^2=delta U. The two snakes give e_i e_(i+1) e_i=e_i, hence U_i U_(i+1) U_i=U_i; disjoint generators commute. All U_i commute with the divided-power/full-weight action because w and b are genuine morphisms. Consequently the positive-loop TL algebra map exists at every rank. Here P0=U/delta is exactly the invariant-channel projector. Its complement P2=1−U/delta is the highest-weight-two projector before semisimplification.

## 2. Actual R, Drinfeld map, twists, and the Hecke orientation

Use the corrected series

    R=D sum_r q^(r(r+1)/2)(1−q^−2)^r [r]! E^(r) tensor F^(r),
    D|_(M_m tensor N_n)=s^(mn).

On V tensor V only r=0,1 occur, giving `R=D(1+(q−q^−1)E tensor F)`. Hence c=flip R is

    c=s 1−s^−1 U=s 1+s^−1 e.

It acts by s on P2 and by −s^−3 on P0. The fact that P0 is the trivial channel is proved above, not inferred from a Hecke quadratic. The actual Hecke element specified in the library is

    T=q U−1=−s c^−1.

Its eigenvalues are **−1 on highest weight 2** and **q^2 on the trivial channel**. Thus it is a scalar multiple of the **inverse** quantum crossing. Assigning q^2 to the highest-weight-two channel, or identifying T with a scalar multiple of c, is incorrect in this convention.

For completeness the Drinfeld calculation is finite. On the ordinary dual basis the weights are (−1,+1), E_dual=−(E K^−1)^t and F_dual=−(K F)^t. Substitute these into the same D and r=1 R formula and evaluate

    u_V=(ev_V tensor id)(c_(V,V*) tensor id)(id tensor coev_(V*)).

The two diagonal entries are s^−1 and `s^−1−(q−q^−1)q^−1s^−1=s^−5`. Consequently

    u_V=diag(s^−1,s^−5), theta_V=u_V^−1 K=s^3 id.

On Delta(a), a<=ell−1, its highest vector occurs in V^a as +^a. Each elementary crossing there acts by s. Balancing, iterated over a tensor factors, gives

    theta_a=(theta_V)^a s^(a(a−1))=s^(a(a+2)) id.

This proves theta_0=1 and theta_2=s^8=q^4; it uses the actual R on the highest vector and the already proved scalar endomorphism property of these simple modules. The two balancing ratios are theta_2/theta_1^2=s^2 and theta_0/theta_1^2=s^−6, exactly the two eigenvalues of c^2. At ell=3 the p2/Delta(2) channel is negligible, so only the trivial channel remains in the quotient. The prequotient theta_2 computation is still valid, but must not be called a retained-channel computation.

`matrix-check.py` verifies the above fundamental assertions symbolically over Q(s), including invariance, both snakes, the negative loop, FS, R-intertwining, the TL relations on V^3, Yang–Baxter, the four cup/cap slide identities below, both channels, T=−s c^−1, the Hecke quadratic, u, and the twist. It also checks the corrected r=2 coefficient on V^2 tensor V^2 against the four elementary block crossings. Its 21 checks are diagnostic evidence, not a replacement for the proof below.

### 2a. Tensor identities for the corrected finite R on tensor powers

Here is a local proof that the corrected Sawin expression, evaluated on tensor powers, is the block crossing built from c. It does not cite the source's unexpanded “standard calculation.” Work first over Q(s), q=s^2, and set t=q^−2. In ordinary powers the nilpotent series is

    f(Z)=sum_(r>=0) a_r Z^r,
    a_r=q^(r(r−1)/2)(q−q^−1)^r/[r]!
       =(q−q^−1)^r/(r)!_t,
    (r)!_t=product_(j=1)^r (1+t+...+t^(j−1)).

If AB=q^2 BA, the elementary q-binomial induction gives

    (A+B)^r=sum_(i+j=r) binom(r,i)_t A^i B^j,
    f(A+B)=f(A)f(B).

Indeed BA=t AB; multiplying the displayed ordered expansion by A+B gives the Gaussian recurrence, with the r=0 case as base. Dividing its coefficient by (r)!_t gives 1/((i)!_t (j)!_t), proving the second identity coefficient by coefficient. All uses below are on bounded-weight modules so each applied series is finite.

Write R_ij=D_ij f(E_i F_j). Toral weight evaluation gives `D_ij E_i D_ij^−1=E_i K_j`, `D_ij F_j D_ij^−1=K_i^−1 F_j`, and the other two analogous formulas with E/F interchanged. Thus

    (Delta tensor id)R
      =D13 D23 f((E1 K2+E2)F3)
      =D13 D23 f(E1 K2 F3) f(E2 F3)
      =R13 R23.

For the middle equality take A=E1 K2 F3 and B=E2 F3; AB=q^2 BA. For the last equality move D23 past the nilpotent part of R13, using `D23^−1 F3 D23=K2 F3`. Likewise

    (id tensor Delta)R
      =D12 D13 f(E1(F2+K2^−1 F3))
      =D12 D13 f(E1 K2^−1 F3) f(E1 F2)
      =R13 R12.

Here A=E1 K2^−1 F3 and B=E1 F2 obey AB=q^2 BA, and `D12^−1 E1 D12=E1 K2^−1` gives the last equality. The identities for the toral D factors follow simply from addition of integral weights.

These generic identities specialize to **every** root under consideration on V^m tensor V^n. To justify specialization without a forbidden division, rewrite each term as

    q^(r(r+1)/2)(1−q^−2)^r [r]! E^(r) tensor F^(r).

Its coefficient is Laurent integral, and divided powers act Laurent integrally on the tensor lattices, by the integral coproduct. D acts by integral powers s^(mn). There are only finitely many possible r on each fixed tensor power, by its finite weight range. Therefore the tensor identities are equalities of Laurent-polynomial matrices and remain equalities after specialization. In particular the vanishing of [r]! for r>=ell is multiplication by zero, not division. Starting with the proved R_(V,V), these two identities inductively identify the corrected finite R_(V^m,V^n) with the ordered product of elementary R crossings defining the block braid. Their flips therefore give exactly the block braiding constructed in section5.

This proves the required R interface on every tensor power and every tilting summand thereof. It does not claim a PBW/completed-universal-R theorem for arbitrary modules outside that generated category. When the parent's tilting classification identifies all tiltings with such summands, it applies to the whole category needed here. On summands the formula restricts naturally: divided-power intertwiners preserve each E^(r),F^(r) and integral weight, hence also every R term and D. No odd-ell hypothesis appears.

## 3. All-rank diagram kernel and retained path matrix units

This section supplies the path construction needed here, rather than delegating it to an example or assuming the escalated theta/path theorem. It needs only diagram relations, the already stated Jones–Wenzl recursion, and its partial-trace identity, whose local proofs must be sound in the eventual integration. It does not use a general root fusion theorem.

First work in ordinary positive-loop TL diagrams. Put k=ell−2, d_a=[a+1]_q for 0<=a<=k, and d_(−1)=d_(k+1)=0. All d_a are strictly positive and `delta d_a=d_(a−1)+d_(a+1)`. The projectors p_a exist through a=k+1=ell−1: all recursion denominators [1],...,[ell−1] are nonzero. Only the next recursion would divide by [ell]; it is never used.

For 1<=a<=k put f=p_a tensor 1, X=f U_a f. Let

    alpha_a=(p_a tensor 1)(1_(a−1) tensor cup)p_(a−1),
    beta_a=p_(a−1)(1_(a−1) tensor cap)(p_a tensor 1),
    lambda_a=[a+1]/[a].

Then alpha_a beta_a=X. Indeed, insert the two cups/caps to obtain U_a, and delete p_(a−1) next to p_a by absorption. The other composite is the right partial trace of p_a in its p_(a−1) corner, so

    beta_a alpha_a=lambda_a p_(a−1).

This is exactly the supplied partial-trace identity, with denominator [a], not [a+1] or [ell]. Thus X^2=lambda_a X. The JW recursion gives

    f=p_(a+1)+lambda_a^−1 alpha_a beta_a.

The two terms are orthogonal because p_(a+1) kills the joining turnback. Inclusion alpha_a and retraction lambda_a^−1 beta_a identify the second term with p_(a−1); the first is p_(a+1) with its tautological inclusion/retraction. For a=0 there is only the up summand p1.

Let I be the tensor ideal generated by p_(k+1). In the quotient, at a=k the first term is **deleted before any normalization**, and

    p_k tensor 1=lambda_k^−1 alpha_k beta_k.

Here lambda_k=[ell−1]/[ell−2] is nonzero. This proves the boundary split with no 0/0 convention. For ell=3, k=1 and this is precisely `1_(V tensor V)=U/delta` in the quotient; there is no retained p2 summand.

Inductively choose for each retained path p=(0,a1,...,an) inclusions i_p:p_(an)→n and retractions r_p:n→p_(an), starting at the unit and using the up/down maps just constructed. They satisfy

    r_p i_q=0 (p!=q), r_p i_p=p_(an), sum_p i_p r_p=1_n mod I.

Here is the complete induction: tensor the rank-n identity by 1; split each summand p_a tensor 1 by the preceding formula; cross-composites of its up and down terms vanish by turnback annihilation, equal terms have composite identity by beta alpha=lambda p; cross-composites from different rank-n parents vanish by the inductive r_p i_q=0. The boundary leaves only the down term. These are all possibilities, so orthogonality, normalization, and completeness follow simultaneously at rank n+1.

For retained a,b, the corner Hom(p_a,p_b) is zero if a!=b and is C p_a if a=b. To see this, expand in planar matchings. If a>b, any matching has a cap at its a-boundary; choose an innermost cap, whose adjacent cap kills p_a. If b>a use an innermost cup against p_b. If a=b, every matching except the all-through identity has such a cap or cup. The all-through term survives with scalar coefficient. The corner is nonzero because its closure is d_a>0, and every element of I has zero closure pairing: p_(k+1) has one-dimensional corner and trace [ell]=0, and partial trace proves tensor-ideal negligibility. This argument also proves that taking the quotient creates no extra identifications in these corners.

For paths p,q with the same endpoint a define E_(p,q)=i_p r_q. The preceding identities give

    E_(p,q) E_(r,t)=delta_(q,r) E_(p,t),
    Tr(E_(p,q))=delta_(p,q) d_a.

They span: insert the complete identity decomposition on both sides of any morphism and use the corner calculation. They are independent: multiply a putative linear relation by r_p and i_q, obtaining its coefficient times nonzero p_a. This proves at every n

    TL_n/I_n = direct_sum_a Mat_(number of retained n-paths to a)(C).

The notation I_n here equals the ordinary two-sided ideal generated by p_(k+1) tensor 1_(n−k−1) for n>=k+1, and is zero below the boundary. One may justify the tensor-ideal/intersection identification directly while doing the induction: every discarded boundary summand factors through p_(k+1) at the first forbidden step; tensoring and conjugating it leaves a two-sided multiple of the embedded projector at the current rank. In diagram form, straighten its k+1 through strands and place the remaining strands to the right; turnbacks against the projector give zero, and all other cups/caps are absorbed into the left/right multiplying diagrams. Conversely every such multiple is a tensor-ideal element. Below rank k+1 any diagram factoring through the boundary projector has an innermost cap or cup against it and vanishes. Thus the identity-decomposition induction has discarded exactly the stated I_n, not a potentially larger unproved ideal.

On each block the trace pairing is d_a times the ordinary matrix trace pairing. It is nondegenerate because d_a>0; concretely E_(q,p) detects the coefficient of E_(p,q). Since I_n is already negligible, this proves

    I_n = rad(Tr_n(xy)) = rad(delta^−n Tr_n(xy)).

It proves the entire image/kernel assertion for diagram algebras at all ranks. It is not a dimension guess, a low-rank check, a Jacobson-radical assertion about the unreduced algebra, or a reliance on a cited recoupling theorem. The all-trivalent theta formula is unnecessary for this fundamental-edge path proof; its separate general claim is not certified here.

## 4. Transport of path blocks into the divided-power category

Use the actual rigid tensor functor from TL(−delta), sending its cup to w, cap to b, and its generator e_i to w_i b_i. Its existence follows directly from the two snakes and b(w)=−delta: any planar matching is built from these maps, and the defining planar relations hold. The algebra isomorphism

    TL_n(+delta) → TL_n(−delta), U_i→−e_i

preserves the JW projectors. In TL(−delta) the recursion quantum integers are `(-1)^(a−1)[a]`, so the ratio in the down split is −lambda_a. To obtain the positive-algebra path normalization in the quantum category, use the same alpha and replace beta by −beta; then alpha beta=X_positive and beta alpha=lambda_a p_(a−1). No positive-loop pivotal functor has been assumed. This sign transport is what makes the algebra path units and their K-traces agree.

For 0<=a<=ell−1, the image of p_a on V^a is Delta(a). Here is a proof directly at the root. The local matrix U imposes the coefficient equation `coefficient(−+)=q coefficient(+−)` for any fixed surrounding word. In the subspace with j minus signs, all binary words are connected by adjacent swaps. Their inversion number inv(word), counting a minus sign before a plus sign, increases by one when +− is replaced by −+. Hence the simultaneous kernel of all U_i has exactly one basis vector in that weight, namely `z_j=sum_(words with j minuses) q^inv(word) word`. Every coefficient is nonzero and these relations are consistent because the displayed z_j solves them. The common kernel consequently has dimension a+1, with basis z_0,...,z_a. JW annihilation puts im(p_a) inside this common kernel. Conversely p_a has identity coefficient one and all other terms are nonempty U-words, so it acts identically on the common kernel. Thus im(p_a) is precisely that kernel, of dimension a+1. All p_a coefficients are defined since [1],...,[a] are nonzero.

The vector +^a is fixed by p_a, and its divided-power string is an image of Delta(a) by the highest-weight relations. It is nonzero in all a+1 positions: repeated coproduct gives F^(j)(+^a) as a sum over distinct j-subsets with Laurent-monomial coefficients, so there is no cancellation within a basis coefficient. Since a<ell, Delta(a) is simple: its weights are distinct K eigenvalues, and E,F connect adjacent basis elements by nonzero [1],...,[a]. Thus the string image is a copy of Delta(a), and the rank computation exhausts the projector image. This also proves End(Delta(a))=C and Hom(Delta(a),Delta(b))=0 for distinct a,b in this range, in the full divided-power category. The additional toral characters do not change these conclusions; all constructed maps preserve their integral weights and come from integral intertwiner identities.

The boundary image Delta(ell−1) is nonzero and simple but has K-quantum dimension [ell]=0. Every endomorphism is scalar, so all its endomorphism traces vanish: its identity is negligible. It follows from partial trace that the whole tensor ideal it generates is negligible. This is the exact reason boundary terms may be removed in the quantum quotient. Zero quantum dimension alone would not have sufficed without the scalar-endomorphism calculation.

Transport the normalized path splitting into the quotient. It decomposes V^n as

    V^n = direct_sum_(retained paths p) Delta(endpoint(p))

there. Different retained labels remain nonisomorphic and simple: a quotient cannot create a morphism between them, and their scalar identities survive because [a+1]!=0. Therefore the transported E_(p,q) span the **entire** quotient centralizer, and are independent. The same K-trace gives weights d_a. Hence

    TL_n(+delta)/I_n ≅ End_(T/N)(V^n)

and the kernel of the composite TL_n→End_T(V^n)→End_(T/N)(V^n) is exactly I_n. In particular a TL element is killed if and only if its image is negligible, if and only if all positive closure-trace pairings vanish. This establishes the desired negligible-kernel comparison without first assuming the general tilting-quotient semisimplicity theorem.

If one chooses in the original tilting decomposition the direct sum R_n of the retained Delta(a) copies, this is also End_U(R_n). Composites through discarded negligible summands act by negligible endomorphisms on R_n and hence vanish, since its weighted matrix trace pairing is nondegenerate. Thus projecting to R_n respects multiplication. This realization depends on the chosen splitting, whereas End_(T/N)(V^n) is canonical. The map into unreduced End_U(V^n) itself does not kill p_(ell−1).

The rigid additive idempotent-complete **tensor-generated** quotient is therefore fully identified, on objects and all Hom spaces. For unequal tensor degrees the same completeness and corner argument applies; odd parity differences give zero Hom and even differences give the common endpoint blocks. For the entire tilting quotient, use the tilting classification supplier being constructed by the parent: every indecomposable T(a) occurs in V^a, since this tensor power is tilting and its unique weight-a highest vector forces one T(a) summand. Thus its Karoubi additive tensor closure is the entire tilting category. This last sentence explicitly needs the parent's classification/tensor-stability proof; the present centralizer proof neither claims to replace nor circularly assumes that general supplier.

## 5. Coherent global ribbon comparison and framed closure

Let C be the additive Karoubi envelope of TL(−delta), quotient by the boundary projector. Its canonical planar pivotal structure j0 has dimensions

    dim_j0(p_a)=(-1)^a [a+1].

Define the monoidal parity automorphism epsilon on a tensor degree n by `epsilon_n=(-1)^n id`. It is natural because Hom(m,n)=0 for m−n odd; it descends to summands, giving epsilon_(p_a)=(-1)^a. It is monoidal, survives the negligible quotient, and satisfies epsilon_(X*)=(epsilon_X)*. Re-pivotalize by

    j=epsilon j0.

Then dim_j(p_a)=[a+1], and j is spherical: each simple block has the same nonzero scalar dimension on left and right, and additivity proves the assertion on every object/morphism. On the generating self-dual object j0 corresponds to the ordinary planar symmetric self-duality, while the K-pivotal transpose of b is −b, as calculated in section1. Hence the functor sends epsilon j0 precisely to the target pivot K on V. Monoidality and naturality imply equality on all tensor powers, direct sums, and summands. This is a global pivotal comparison, not just equality of two dimensions.

Construct, rather than assume, the braiding as follows. Put `c=s 1+s^−1 e` on adjacent strands and use the ordered crossing of all m strands past all n strands for c_(m,n). The TL relations give its inverse `s^−1 1+s e`. In the Yang–Baxter expansion the coefficient of e1−e2 is `s+s^−1(−delta)+s^−3=0`, and all remaining terms cancel, so Yang–Baxter holds.

Cup/cap naturality is explicit. Put W1=w tensor id, W2=id tensor w and C1=c tensor id, C2=id tensor c. The snakes give e1 W1=−delta W1, e2 W1=W2, e1 W2=W1. Therefore

    C1 C2 W1=(s^2−delta+s^−2)W1+W2=W2,
    C2 C1 W2=W1.

Reflection of these same algebraic identities gives the cap equations. Altogether the four slide identities are

    C1 C2 (w tensor id)=id tensor w,
    C2 C1 (id tensor w)=w tensor id,
    (id tensor b) C1 C2=b tensor id,
    (b tensor id) C2 C1=id tensor b.

Every diagram morphism is generated by cups, caps and identities, so these equations prove naturality with every TL morphism. Naturality passes to direct sums, idempotent summands and the negligible quotient. The block-braid definition gives both hexagons by partitioning the block being crossed; Yang–Baxter identifies the resulting ordered words when necessary. Section4's fullness then gives naturality with **every** quantum intertwiner in the tensor-generated quotient, without assuming any general quasitriangular theorem. Finally section2a proves that this constructed braiding is exactly the corrected Sawin R evaluated on all tensor powers and their summands. Thus the comparison with that chosen R is established rather than imported from an unproved ribbon-category assertion.

With j0 the bracket twist is theta0_V=−s^3: expansion of the one-strand curl gives `s(−s^2−s^−2)+s^−1=−s^3`. Since theta=u^−1 j, replacing j0 by epsilon j0 replaces theta0 by epsilon theta0. Thus for the corrected pivotal structure

    theta_V=+s^3, theta_(p_a)=s^(a(a+2)).

The second formula follows either from balancing on the highest tensor component as in section2 or from `theta0_(p_a)=(-1)^a s^(a(a+2))` and parity. The twist respects duals because epsilon does, so the re-pivotalized category remains ribbon. The functor preserves braiding and pivotal structure, hence preserves theta=u^−1 j globally. The exact cup b,w still has loop −delta: re-pivotalization changes the **pivotal closing operation**, not that scalar composite. A positively framed unknot evaluated by the ribbon/pivotal trace has value +delta, and the elementary framing twist has value +s^3 on V. This is the precise, coherent replacement for the false demand that the very same self-duality cup and cap both obey the snakes and have planar loop +delta.

Every framed colored tangle evaluation obtained from this ribbon structure is preserved: the functor preserves evaluations, coevaluations, crossings, twists, and their composites. In particular all framed closures agree, not merely the two-channel balancing ratios. If the cited free framed-tangle existence/uniqueness supplier uses AC_omega, retain that exact axiom branch in the canonical consumer; the finite calculations and path proof here use no choice principle.

## 6. Integration contract and limits

The canonical theorem can retain the all-rank positive-loop algebra centralizer and all ribbon consequences, but must state the categorical convention explicitly: **TL(−delta) with parity-modified pivotal structure**, whose positive-loop endomorphism algebras are identified by U=−e. Its Hecke conversion is T=−s c^−1, with q^2 on the trivial channel. The highest-weight-two channel is retained only for ell>=4. The boundary kernel is the kernel after passage to the quantum negligible quotient, not the kernel of the unreduced representation.

This proposal relies on correct local diagram JW recursion/partial trace, the corrected rank-one ribbon category construction, and (only to extend the tensor-generated equivalence to all tiltings) the parent's tensor-stability/classification supplier. It does not certify the still-escalated general theta formula or the full broad tilting proof. No statement about the odd-ell-only general library68 category is used, and no oddness restriction has entered any argument. The only divisions in the root path construction are by [a] and [a+1] for a<=ell−2, and by delta; these are nonzero for every ell>=3.
