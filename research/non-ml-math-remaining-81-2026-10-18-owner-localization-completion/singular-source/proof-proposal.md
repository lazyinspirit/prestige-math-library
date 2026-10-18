# Singular-parabolic supplier proof proposal (isolated; no canonical acceptance)

This is a concrete local reconstruction of Kashiwara §§7.7–8.3. It preserves complex antidominance: `<κ,β∨> ∉ {1,2,…}` for every positive root β, rather than imposing real antidominance. Assume ρ integral (pass to the simply connected cover, without changing the varieties), and assume Φκ={β:<κ,β∨>=0} has simple system J=Δ∩Φκ. No derived equivalence is asserted.

The current statements' disclaimer paragraphs should eventually disappear only after owner integration and review. There are two additional supplier obligations beyond their present dependency lists: the exact associated-bundle construction below, and the elementary singular-Verma embedding/partial-parabolic descent calculation below. Merely repairing the rank-one lemma does not make current theorem step 3.1 a proof.

## 1. Correct the partial pullback contract

Put A=A^α_{κ−ρ}, whose pullback TDO is D_{κ−ρ}. The ordinary inverse image p^†N is O_X⊗_{p^{-1}O_Y}p^{-1}N equipped with the pulled-back differential action, not D_{P1}⊠N. On a product chart it is O_{P1}⊠N; relative vector fields act by differentiation on the O factor. It can equivalently be defined using the differential transfer bimodule. Tensor by L=O_X(ρ), which restricts to O_{P1}(−1), shifts the TDO to Dκ.

The construction is intrinsic: first-order differential operators act by the Leibniz rule on tensor products, with the vertical action prescribed as above. The chain rule verifies compatibility on chart changes. Its gluing cocycle is the given TDO cocycle; one must not choose independent trivializations and silently discard this cocycle. Since p_*O_X=O_Y and R^{>0}p_*O_X=0, the evaluation map p^†p_*T→T, when an isomorphism locally, is intrinsic and hence descends. This is precisely how the rank-one classification below glues.

## 2. A complete rank-one calculation

Let X=P1, L=O(−1), D0=Diff(L), and D=DX. Morita untwisting identifies the left D0-module E=D0⊗_O L (right O action on D0) with L⊗_O D. Evaluation on 1 is a surjection E→L. Let K be its kernel. Locally in coordinate x, K=L⊗D∂x: write a differential operator in normal order and its value on 1 is its order-zero coefficient. Its order-one part is canonically L⊗T_X=O(1). Indeed vector fields intrinsically annihilate 1, so this identification has no choice of coordinate or connection. PBW gives K=D0·K_{≤1}. The two standard global sections of O(1) therefore generate K as D0-module. Because Γ(L)=0, every global section of E belongs to K, and conversely the two generators belong to Γ(E). Consequently

    E / D0 Γ(E) = L.                                      (R)

This proves the formerly missing universal quotient without a citation or an ambiguous induced map.

For completeness the source's induced map is also explicit. Write sl2 generators e,f,h, and M(a)=U(sl2)⊗_b C_a, with highest vector v_a. On C_{−1}⊗C² let u_+,u_- have weights 0,−2, with e u_-=u_+. The b-map to M(0) given by u_+↦0 and u_-↦f v_0 exists, since e f v_0=h v_0=0. Induction and the tensor identity give

    M(−1)⊗C² → M(0) → C → 0.

Its image is U f v_0, the kernel of the augmentation: PBW gives M(0)=C[f]v_0, and the augmentation kills precisely fC[f]v_0. Associated-bundle descent gives D0⊗C²→E→L→0. The first map generates exactly the same K computed above (its first-order symbol realizes H0(O(1))). Thus (R) is also the explicit content of Kashiwara (7.7.1).

If Q is quasicoherent D0 and ΓQ=0, untwist T=L^{-1}⊗Q to an ordinary D-module. Regular antidominant D-affinity at parameter −ρ makes T globally generated. Thus some direct sum D^{(I)} surjects onto T, and E^{(I)} surjects onto Q. Its global sections map to zero, so (R) gives L^{(I)}↠Q. Untwisting gives O^{(I)}↠T. Exactness of global sections for ordinary D shows that H=ker(O^{(I)}→T) has global sections a vector subspace W⊂C^{(I)}; generation and the unit isomorphism identify H=O⊗W. Hence T=O⊗V and Q=L⊗V, canonically V=Γ(L^{-1}Q). The sl2 action on V is trivial. For coherent Q the dimension is finite: on either affine chart Q is generated over D0 by finitely many elements, each involving finitely many V components, and differential operators do not create additional components.

The use of quasicoherent D-affinity here is legitimate if its proved carrier already allows it. If only the coherent version is retained, add the elementary extension: a quasicoherent D-module is a filtered union of coherent D-submodules (D is locally noetherian; use finitely many generators over a finite affine cover); cohomology on a projective separated variety commutes with filtered colimits by its finite affine Čech cover. Generation extends by taking the union of the coherent generators.

## 3. Relative classification, vanishing, coherence and descent

Over an affine base U, write the TDO as D0⊠A_U. Push a module Q along the affine projection P1×U→P1 and forget the base action. This retains its D0 action. The preceding argument applies, and is natural in all commuting operators, giving

    Q = L⊠N,   N=pr_*(L^{-1}Q),

whenever pr_*Q=0. The commuting A_U action becomes the A_U action on N. This is an isomorphism of product differential modules, not just of sheaves. Conversely L⊠N has zero direct image because H0(L)=0. The same affine-projection argument and singular antidominant rank-one vanishing give R^q pr_*Q=0 for q>0 for every Q, not just kernel objects.

N is coherent over A_U when Q is coherent over the product ring. Choose finite differential generators of Q on the two affine fiber charts. Each is a finite sum of polynomial/localized-polynomial coefficients times elements of N. Let N0 be the A_U-submodule generated by those finitely many components. Product differential operators preserve O⊠N0; therefore the chosen generators force O⊠N0=O⊠N and evaluation at a fiber point forces N0=N. Local noetherianity of A_U then gives coherence. This argument also handles noncommutative A_U without pretending Q is coherent over D0 alone.

On chart overlaps the canonical evaluation p^†p_*(L^{-1}Q)→L^{-1}Q is the same map, so the local isomorphisms glue, with the A twisting prescribed in §1. Uniqueness follows from p_*p^†N=N. This proves all of Proposition 8.2.1, including the missing converse. Higher-direct-image vanishing also makes each kernel ker p_* stable under coherent subobjects, quotients and extensions.

## 4. The exact associated-bundle helper (not ordinary localization)

For a twisted (g,B)-module H of twist κ+ρ, C_{κ+ρ}⊗H is a rational B-module; its infinitesimal B action is κ+ρ plus the g action restricted to b. Define E_X(H)=G×^B(C_{κ+ρ}⊗H), understood as a quasicoherent associated bundle, possibly of infinite rank. On a local section of G→X this is O_X⊗H, so it is exact. Its differential action is obtained as follows. The G-equivariant bundle has infinitesimal action β; transport the g action on H fiberwise to obtain the O-linear action γ. Set differential action a=β−γ. Then [a(A),f]=A_X(f), [a(A),a(A')]=a([A,A']), and at isotropy its scalar twist is κ+ρ. These identities follow by expanding the commutators, using [β(A),γ(A')]=γ([A,A']). Thus it is a Dκ-module. This proves the required functor directly.

For a finite-dimensional rational G-module V the map [g,h⊗v]↦[g,h]⊗gv proves E_X(H⊗V)=E_X(H)⊗V, compatibly with differential actions. PBW on local sections identifies E_X(U⊗_b C_{−κ−ρ})=Dκ and E_X(U⊗_b C_{−κ})=Dκ⊗O_X(ρ)=E. If H integrates from twisted B to twisted Pα, C_κ⊗H is a rational Pα-module and defines a module N on Xα over A^α_{κ−ρ}; the same construction on local sections gives E_X(H)=O_X(ρ)⊗pα^†N. This is partial-parabolic descent, with the same ordinary inverse image as §1.

## 5. The fixed Verma chain and its parabolic quotients

Choose a reduced expression w_J=s_{α_N}⋯s_{α_1} for the longest element of W_J. Put μ0=ρ, μj=s_{α_j}μ_{j−1}, and m_j=<μ_{j−1},α_j∨>∈Z_{>0}. Put H_j=M(−κ−ρ+μj). In H_{j−1}, f_{α_j}^{m_j}v is highest of weight −κ−ρ+μj: the sl2 formula e f^m v=m(a−m+1)f^{m−1}v gives zero because a=m−1, and the other simple positive generators commute with fα. This induces H_j→H_{j−1}; it is injective by PBW since multiplication by fα^m has injective associated graded map in the polynomial algebra S(n^-). Thus H_N⊂⋯⊂H_0.

The quotient H_{j−1}/H_j is locally finite and integrable for the α_j sl2: it is the parabolic induced module from the (m_j)-dimensional sl2 module of highest weight m_j−1, with the other positive root spaces acting trivially. PBW proves this identification, since both quotients have the same n^-outside⊗span(1,fα,…,fα^{m_j−1}) basis. The α sl2 acts locally finitely on n^-outside by the adjoint action, hence on its enveloping algebra, proving integrability on the induced module. Tensoring Cκ shifts its highest weight to μ_{j−1}−ρ, an integral weight, and κ vanishes on α_j∨. It therefore integrates to Pα_j (on the simply connected cover). All transition actions satisfy the twisted compatibility. By §4,

    E_{j−1}/E_j = O_X(ρ)⊗pα_j^†N_j,  E_j=E_X(H_j).

Every quotient is in ker pα_j*. E0=E is coherent; exactness and noetherianity make each E_j coherent.

## 6. Central-character separation and final global generation

Let V be the irreducible finite-dimensional G-module with highest weight ρ. The extremal μN weight has multiplicity one. Let V' be the sum of weight spaces Vξ for which μN−ξ∉Q_+. This is B-stable: raising a weight cannot move it into the downset of μN. In V''=V/V', all weights satisfy μN−ξ∈Q_+, and C_{μN} is a B-submodule.

For ξ≠μN occurring in V'', the infinitesimal characters χ_{−κ+ξ} and χ_{−κ+μN} differ. Here is the full separation proof. Equality implies κ−ξ∈W(κ−μN)=W(κ−ρ). Thus some w satisfies w(κ−ξ)=κ−ρ, or κ−wκ=ρ−wξ∈Q_+. Complex antidominance gives κ−wκ∉Q_+\{0}, so wκ=κ and w∈Wκ=W_J. It follows ξ∈W_Jρ=W_JμN. Since μN is strictly antidominant for Φκ, every element of this orbit differs from μN by a nonnegative sum of roots of Φκ. Thus ξ−μN∈Q_+. But μN−ξ∈Q_+ by construction, so ξ=μN, a contradiction. The only prerequisite here is the proved finite-Weyl antidominance criterion κ−wκ∉Q_+\{0}; it must hold for complex κ, exactly as stated.

Induce C_{−κ−ρ}⊗V'' from b. A B-weight filtration gives a finite filtration by Vermas M(−κ−ρ+ξ), with central characters χ_{−κ+ξ}. The distinguished Verma H_N is a submodule, and no other factor has its character. A central polynomial projector splits it off: choose z in Z(Ug) whose value at the distinguished character differs from every other character (a generic finite linear combination separates them). Powers of ∏(z−c_i) kill the remaining finite filtered quotient, while a power of (z−c_0) kills the distinguished generalized block. Bézout gives complementary idempotent operators, so projection onto the distinguished block is a surjection onto H_N and is identity there. Thus

    M(−κ−ρ)⊗V ≅ Ind_b^g(C_{−κ−ρ}⊗V) ↠ H_N.

The tensor identity is u⊗(c⊗v)↦Σ(u_(1)⊗c)⊗u_(2)v, with inverse using the antipode; direct expansion of the coproduct checks it respects the b-relations. Applying the exact functor §4 gives Dκ⊗V↠E_N. Therefore E_N is globally generated. This is the substantive argument missing from the current theorem proof.

## 7. The universal quotient and the filtration for arbitrary M

For coherent M with ΓM=0, κ−ρ is regular antidominant: integral nonpositive root pairings become strictly negative, while nonintegral pairings remain nonintegral after subtracting the positive integer <ρ,β∨>. Regular localization hence globally generates O_X(−ρ)⊗M. Coherence and quasicompactness select finitely many generating sections, giving E^n↠M. Every section of E maps to zero, so this factors through Q^n↠M, where Q=E/DκΓ(E).

Because E_N is globally generated and embeds in E, its image is in DκΓ(E). Therefore E/E_N↠Q. The images Q_j of E_j in Q give Q=Q0⊃⋯⊃QN=0, with Q_{j−1}/Qj a coherent quotient of E_{j−1}/E_j, hence in ker pα_j*. Take direct sums n times and their images in M to obtain M=M0⊃⋯⊃MN=0 with the same property. This sequence depends only on J and the chosen reduced word, not on M. Zero quotients are allowed. Conversely each projection-zero factor has zero global sections, and exact antidominant Γ gives ΓM=0.

## Status and integration limits

The mathematical chain above supplies the converse without weakening its hypotheses. It is a proof proposal, not a gate result or acceptance stamp. The parent must bind current supplier contracts and author the exact bundle/descent and Verma-PBW helpers locally; the present theorem's existing deps do not supply them merely by naming Borel–Weil or the rank-one kernel. In particular, do not substitute ordinary localization for E_X, and do not import all of Kashiwara §4.10 by citation. The explicit formulas in §§4–5 above are the needed local proof.

No genuine open mathematical problem was found. The main remaining integration risks are convention checking (κ+ρ TDO versus κ−ρ partial TDO) and ensuring the available finite-Weyl separation supplier really proves complex antidominance. The pullback correction is essential; with D_{P1}⊠N instead of O_{P1}⊠N the kernel statement is false.
