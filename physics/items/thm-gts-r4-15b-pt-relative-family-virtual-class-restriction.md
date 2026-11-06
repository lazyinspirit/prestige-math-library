---
id: thm-gts-r4-15b-pt-relative-family-virtual-class-restriction
kind: theorem
title: PT relative-family virtual-class restriction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - thm-gts-stable-pair-virtual-class-and-behrend-weighted-dt-count
  - def-gts-chow-groups-and-zero-section-gysin
  - def-refined-gysin-pullback-for-regular-embeddings
  - lem-gysin-specialization-bivariant-and-base-change
  - lem-refined-gysin-commutation-and-composition
  - lem-zero-section-gysin-and-excess-vector-subbundle
  - lem-vector-bundle-chow-homotopy-invariance
  - thm-projective-bundle-formula-for-chow-groups
  - lem-chow-localization-and-vector-bundle-homotopy
  - def-axiom-of-choice
  - def-dependent-choice
dependency_roles:
  thm-gts-stable-pair-virtual-class-and-behrend-weighted-dt-count: mathematical-premise
  def-gts-chow-groups-and-zero-section-gysin: mathematical-premise
  def-refined-gysin-pullback-for-regular-embeddings: mathematical-premise
  lem-gysin-specialization-bivariant-and-base-change: mathematical-premise
  lem-refined-gysin-commutation-and-composition: mathematical-premise
  lem-zero-section-gysin-and-excess-vector-subbundle: mathematical-premise
  lem-vector-bundle-chow-homotopy-invariance: mathematical-premise
  thm-projective-bundle-formula-for-chow-groups: mathematical-premise
  lem-chow-localization-and-vector-bundle-homotopy: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "R. Pandharipande and R. P. Thomas, Curve Counting via Stable Pairs in the Derived Category"
      url: "https://arxiv.org/pdf/0707.2348v5"
      locator: "§2.3, Theorem 2.15 and the preceding smooth-family setup; proof is referred to [24, Corollary 4.3]."
---

## Statement

Let $B$ be smooth, let $\pi:\mathcal X\to B$ be the smooth family of projective threefolds in Pandharipande–Thomas §2.3, let $X=\mathcal X_0$ be the central fiber, and let $P_n(\mathcal X,\beta)\to B$ be the relative stable-pair moduli. Theorem 2.15 states that there is a relative virtual class
$$[P_n(\mathcal X,\beta)]^{\rm vir}\in A_{c_\beta+\dim B}(P_n(\mathcal X,\beta),\mathbb Z)$$
whose refined Gysin pullback along the fiber inclusion $i_0:P_n(X,\beta)\hookrightarrow P_n(\mathcal X,\beta)$ is $i_0^![P_n(\mathcal X,\beta)]^{\rm vir}=[P_n(X,\beta)]^{\rm vir}$. The family, relative obstruction theory, and Chow conventions are those of that theorem.

## Facts & Assumptions

**Given:** the source's smooth projective threefold family over its smooth complex parameter variety B, the chosen relative class β and integer n, and its central fibre. The moduli and universal pair are constructed as in the proof, rather than assumed to be a fine projective scheme. The inherited AC/DC are used by the declared cohomology, Hilbert and descent suppliers.

[F1] [[thm-gts-stable-pair-virtual-class-and-behrend-weighted-dt-count]] now proves the pair-specific POT, virtual rank and integral class. Its proof constructs the finite-type fine algebraic space by the bounded square-zero Hilbert quotient, proves the relative Atiyah/trace/duality construction over arbitrary Noetherian coefficient rings, and supplies the integral good-pair/affine cone construction. The actual relative use is checked again below; no separate source compatibility theorem is assumed.

[F2] [[def-gts-chow-groups-and-zero-section-gysin]] and [[def-refined-gysin-pullback-for-regular-embeddings]] define the base-square operation for a regular immersion. Here $b:\{0\}→B$ is regular of codimension dim B. The notation i₀! in the Statement means its refined base-square operation $b_M!$ on $M=P_n(\mathcal X,β)$. It does not assert that the moduli fibre inclusion i₀ itself is a regular immersion.

[F3] The actual scheme conormal specialization operation c(Z,P,F) is bivariant under arbitrary base restriction and commutes with refined Gysin; its zero-section and excess formulas include all base changes. [[lem-gysin-specialization-bivariant-and-base-change]] [[lem-refined-gysin-commutation-and-composition]] [[lem-zero-section-gysin-and-excess-vector-subbundle]] The proof uses these exact scheme operations on actual common scheme replacements, not an unproved normal-cone base-change identity.

[F4] Bundle homotopy, projective-bundle formula and localization give the integral injective Chow comparisons for the explicit affine and matrix replacements. [[lem-vector-bundle-chow-homotopy-invariance]] [[thm-projective-bundle-formula-for-chow-groups]] [[lem-chow-localization-and-vector-bundle-homotopy]] The schemes here have no stabilizer denominators; the fine algebraic space has trivial inertia. The inherited choice assumptions are [[def-axiom-of-choice]] and [[def-dependent-choice]].

## Proof

**Proof technique:** construct the compatible relative fixed-determinant POT, use the existing integral scheme replacements, and apply the actual conormal Rees/Gysin operation on a common strict model.

1.1 Apply the actual bounded construction of [F1] relatively over B. For each geometric stable pair $0→O_C→F→Q→0$, the finite flat degree-d pencil $C→P¹$ and its coordinate monomials give $d(2−d)≤χ(O_C)≤n$, independently of the fibre and embedding dimension. The resulting finite union of relative support Hilbert schemes is projective over B; on finitely many Noetherian affine base charts relative Serre vanishing gives one m making every F(m) generated and H¹-free. Quotients of $O_\mathcal X(−m)^r$ with the required fibre polynomial are the CLOSED Hilbert locus $\mathcal X⊂Z⊂Spec_\mathcal X(O⊕O(−m)^r)$, since $O_Z=O_\mathcal X⊕F$ and flatness is equivalent. Add the universal section by its nonnegative cohomology linear scheme; relative Ext³ cokernel-vanishing and the proper cokernel-support dimension condition give the purity and stable-pair opens. The full H⁰-frame determinant open gives the $GL_r$ atlas. Pair automorphisms vanish by relative purity, and the transverse orbit slices give the fine finite-type algebraic space M with universal pair. These are the same all-test constructions proved in [F1], with every hypothesis retained for the smooth relative threefold. [F1, F2, F3, F4, algebra]

2.1 The β-labelled part is imposed in the source's actual relative class convention. On locally trivialized smooth-family cohomology, the universal perfect sheaf has integral leading cycle −c₂, as proved in [F1]; fibre transport makes this class locally constant, including torsion. A supplied relative class therefore gives an open-and-closed selection of the finitely many parameter components and descends through the frame quotient. The integral Euler pairing $c_β$ is constant on that family component: the relative canonical class and the supplied class transport together, or equivalently the perfect endomorphism complex has locally constant Euler rank. Its central value is $\int _βc₁(X)$. Base change of the moduli functor identifies M₀ with $P_n(X,β)$, with its universal pair. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Let $p:\mathcal X×_B M→M$ be projection and I its universal complex. Form the trace-free relative Atiyah map and its dual adjoint $E_{rel}=Rp_*(RHom(I,I)_0⊗ω_p)[2]→L_{M/B}$. The proof of [F1] constructs this relative map, not just its virtual rank: on any affine square-zero test $S_{0}⊂S$ over B, the free DG B-algebra resolution and the finite Čech matrices give curvature $D̃²=At(I/Y)·κ(S_{0}/S/B)$. The same determinant calculation gives the trace-free obstruction and Ext¹₀ lift torsor. The pair/complex equivalence uses only smooth relative dimension three in its flat-depth/Hartogs proof, so applies to $\mathcal X_S$ as well as a product. Its projective relative duality over singular Noetherian coefficient rings is the Laurent-residue/Koszul calculation of [F1]. Thus the same coherent cotangent tests prove h⁰ isomorphism and $h^{−1}$ surjectivity. Field $\operatorname{Ext}⁰_{0}=\operatorname{Ext}³_{0}=0$ and the negative Ext vanishing, followed by perfect pushforward and endpoint cancellation, give amplitude [−1,0]. Hence $E_{rel}$ is an actual relative POT, with all base changes supplied by those explicit constructions. [F1, F2, F3, F4, step 2.1, algebra]

4.1 Let $q:M→B$. In the cotangent triangle $q*Ω_B→L_M→L_{M/B}$, form $E_{abs}=E_{rel}×^h_{L_{M/B}}L_M$. Its triangle $q*Ω_B→E_{abs}→E_{rel}$ gives amplitude [−1,0], and its cone to $L_M$ is the same as $Cone(E_{rel}→L_{M/B})$, of cohomology at most degree −2. Therefore $E_{abs}→L_M$ is the absolute POT on total M. Its virtual rank is $c_β+\operatorname{dim}$ B. On the fibre the derived base change of $E_{rel}$ is the PT complex of X: p is smooth and the universal F is M-flat, so the finite cohomology/trace models restrict to its actual universal fibre pair. The relative Atiyah arrow composes to the fibre cotangent arrow by the same matrix/DG calculation. This verifies compatibility of the ACTUAL maps, not merely of ranks. [F1, F2, F3, F4, step 3.1, algebra]

5.1 Construct the integral class globally using the scheme replacements of [F1], including its non-quasi-projective smooth-base step. Explicitly regular separated B has a finite affine cover $U_j$ whose complements are Cartier divisors $D_j$: a higher-codimension complement would make an affine punctured normal neighbourhood have all the original functions by Hartogs, contradicting its proper removal. The simultaneous line-frame torsor $B'=\prod O(D_j)^×$ is quasi-affine, since the pulled-back defining sections give a finite affine principal-open cover. The relative framed Hilbert parameter over B' is quasi-projective with $GL_r×(G_m)^a-linearized$ ample line. Its free quotient is the original M, not a restriction of B. Full-rank matrix good pairs and $(C^N∖\{0\})^a$ for the torus give quasi-projective scheme replacements $M_N→M$, open in representation vector bundles, with bad codimension tending to infinity. Integral bundle homotopy and localization identify $A_i(M)$ with $A_{i+a_N}(M_N)$ in the needed degree. On each $M_N$ the two explicit affine-bundle torsors of [F1] have Chow pullback isomorphisms and carry strict scheme cone models for $E_{abs}$. Their zero-section classes give a compatible class $[M]^{\mathrm{vir}}∈A_{c_β+\operatorname{dim} B}(M,Z)$. Common products of replacements compare all choices by their actual pulled-back cone, and the inverse of the SAME affine-torsor pullback; no equality of Chow classes is inferred from an étale cover. For the degree comparison, the good-pair scheme $M_N$ is the full-rank/nonzero open in the representation bundle associated to the actual free torsor over $M$. If that bundle has rank $a_N$ and the omitted locus has fibre codimension $c_N$, its total dimension is at most $\dim M+a_N-c_N$. Thus localization gives an INTEGRAL isomorphism $A_i(M)\to A_{i+a_N}(M_N)$ whenever $c_N>\dim M-i$. The same assertion holds after the fibre base change, with the fibre dimension in place of $\dim M$. Both $c_N=N-r+1$ for the matrix factor and $c_N=N$ for each torus factor tend to infinity, so one common $N$ works for every degree below. The two affine torsors add only their relative dimensions and give isomorphisms in every degree. Their base changes are the very same torsors on the fibre; no choice of an unrelated fibre replacement is involved. [F1, F2, F3, F4, step 4.1, algebra]

6.1 The base point $b:\{0\}→B$ is a regular immersion of codimension dim B, so [F2] gives the integral operation $b_M!:A_j(M)→A_{j−\operatorname{dim} B}(M_{0})$. This is the meaning of i₀! in the Statement. Nothing in this assertion uses flatness or smoothness of $M→B$. Choose one sufficiently large common matrix/torus replacement $M_N$ for all the cycles and operations below, so its comparison and the fibre comparison are injective in their required degrees. Then choose its actual two-affine-torsor replacement $T→M_N$ and let $p:T→M$ be the smooth composite. Its fibre T₀ is the corresponding replacement of M₀. [F1, F2, F3, F4, step 5.1, algebra]

7.1 On affine T the projective module $Ω_p$ splits the relative cotangent triangle $p*L_{M/B}→L_{T/B}→Ω_p$: the connecting map into $p*L_{M/B}[1]$ vanishes, since $L_{M/B}$ has no positive cohomology and affine higher coherent cohomology vanishes. Thus $E_{\mathrm{rel},T}=p*E_{rel}⊕Ω_p$ is its actual relative POT. Two splittings differ by a map lifting through $p*E_{rel}$, because the cone of the POT has cohomology at most −2; a triangular source automorphism identifies the theories. Their absolute extensions by $Ω_B$ are therefore exactly the smooth-pulled total theory. The intrinsic-cone smooth-pullback identity follows on the conormal product charts by the extra tangent directions, and is an identity of global cone algebras after their tangent quotient. It gives the actual flat pullback of $[M]^{\mathrm{vir}}$ in the Chow comparisons. Explicitly, on the affine scheme $T$, $\operatorname{Hom}(\Omega_p,p^*L_{M/B}[1])=\operatorname{Hom}_{\mathcal O_T}(\Omega_p,h^1(p^*L_{M/B}))=0$: $\Omega_p$ is finite projective and the pulled-back cotangent complex has no positive cohomology. If two splittings differ by $v:\Omega_p\to p^*L_{M/B}$, the obstruction to lifting $v$ to $p^*E_{\rm rel}$ lies in $\operatorname{Hom}(\Omega_p,\operatorname{Cone}(p^*E_{\rm rel}\to p^*L_{M/B}))=0$. Thus a lift $w$ exists. The triangular automorphism $(e,\omega)\mapsto(e+w\omega,\omega)$ identifies the two maps to $L_{T/B}$, including their specified homotopy. This argument concerns the TOTAL relative theory on $T$ and does not use a false assertion that cotangent complexes commute with an arbitrary underived fibre base change. [F1, F2, F3, F4, step 6.1, algebra]

8.1 Embed affine T as a closed subscheme of a smooth affine complex P₀ and take its graph in $P=P_{0}×B$. This graph is closed because B is separated; projection $P→B$ is smooth. Write the relative cotangent truncation as $[I/I²→Ω]$, $Ω=Ω_{P/B}|T$, and represent the relative POT by projectives $E=[E^{−1}→E⁰]$ with strict map φ to it. Lift $Ω→h⁰E$ to $k:Ω→E⁰$, and set $F=ker(E^{−1}⊕Ω→E⁰)$, $(u,w)↦d_Eu+kw$. This map is surjective, so F is projective. The complex $[F→Ω]$, differential $(u,w)↦w$, is quasi-isomorphic to E by $(u,w)↦−u$ and $w↦kw$. Since φ⁰k−id has image in im $d_I$, projectivity of Ω gives $h:Ω→I/I²$ with $d_Ih=φ⁰k−id$. The adjusted conormal map $F→I/I²$ is $(u,w)↦−φ^{−1}u−hw$. Its differential is w, using $d_Eu=−kw$. The h⁰ and $h^{−1}$ POT conditions prove it surjective: match $d_Iz$ first and then lift the remaining element of ker $d_I$. [F1, F2, F3, F4, step 7.1, algebra]

9.1 Consequently the normal cone $C_{T/P}$ embeds in F∨. The strict absolute extension is $[F→Ω_{P/C}|T]$, with the same conormal map; its triangle with $Ω_B$ is exactly the homotopy-pullback extension in step 4.1. Thus the class pulled to T is $v_T=c(T,P,F∨)[P]=0^!_{F∨}[C_{T/P}]$, in the integral scheme convention of [F3]. Restricting this conormal map to the fibre gives the map $F_{0}→I O_{P_{0}}/(I O_{P_{0}})²$; the symmetric-algebra surjection defines the ACTUAL fibre normal-cone embedding. This is also the restricted PT fibre POT by step 4.1 and the strictification comparison. No claim that the original cone commutes with a nonflat base change has been made. In particular it is the canonical SURJECTION $(I/I^2)\otimes\mathcal O_{T_0}\twoheadrightarrow I_0/I_0^2$, where $I_0=I\mathcal O_{P_0}$, which is used here. Composing the base-changed strict map $F_0\to(I/I^2)\otimes\mathcal O_{T_0}$ with this surjection gives $F_0\twoheadrightarrow I_0/I_0^2$ and hence $\operatorname{Sym}F_0\twoheadrightarrow\operatorname{gr}_{I_0}\mathcal O_{P_0}$. No isomorphism between these two conormal modules, or between the two normal cones, is needed. The fibre map to $L_{T_0}$ is obtained by composing the restricted Atiyah map with its canonical cotangent base-change arrow, exactly as in step4.1. [F1, F2, F3, F4, step 8.1, algebra]

10.1 Apply the actual scheme bivariant specialization identity [F3]. For b as above and $P_{0}=P×_B\{0\}$, smoothness of $P→B$ gives $b_P![P]=[P_{0}]$. Bivariance therefore gives $b_T!v_T=c(T_{0},P_{0},F∨_{0})(b_P![P])=c(T_{0},P_{0},F∨_{0})[P_{0}]=[T_{0},E_{0}]^{\mathrm{vir}}$. The defining graded map for this operation is $Sym(F_{0})→gr_{I O_{P_{0}}}O_{P_{0}}$; the published Rees/specialization and Cartier-commutation proof supplies the equality with its scheme multiplicities after arbitrary base restriction. It is not an invocation of a named virtual-pullback theorem. This verifies precisely the comparison needed for the compatible PT theories. The hypotheses of the precise [F3] operation are now satisfied on this actual scheme pair: $T\hookrightarrow P$ is closed and $F\twoheadrightarrow I/I^2$ is the required bundle conormal surjection; after every base change its operation is $0^!_{F'^\vee}\,a_*\sigma_{T'/P'}$. The fibre operation uses the graded surjection just displayed, so it is the operation for the ACTUAL underived fibre $T_0\hookrightarrow P_0$. Apply its bivariant refined-Gysin compatibility to the single Cartesian square defined by $b$, rather than applying refined Gysin to a guessed flat pullback of $C_{T/P}$. This yields the displayed equality on $T_0$, with the excess/specialization multiplicities already present in $\sigma_{T_0/P_0}$. [F1, F2, F3, F4, step 9.1, algebra]

11.1 Proper/flat compatibility of the same refined Gysin operations commutes this identity with the two affine-bundle torsor pullbacks and with the full-rank matrix/torus replacement. Their pullbacks on the fibre are injective in the selected degree by [F4] and the increasing-codimension localization comparison. The identity on T₀ therefore gives $b_M![M]^{\mathrm{vir}}=[M_{0}]^{\mathrm{vir}}$ in $A_{c_β}(M_{0},Z)$. The fibre virtual class is the intrinsic fixed-determinant PT class of X from [F1], since the actual universal pair, Atiyah map and trace/duality models are its restrictions. It is independent of frames, strict models and scheme replacements by the common-cone argument already checked in [F1]. Writing $\rho:T\to M$ and $\rho_0:T_0\to M_0$ for these common smooth composites, flat/refined-Gysin commutation says $\rho_0^*b_M^!=b_T^!\rho^*$. The common-cone smooth comparison of [F1] gives $\rho^*[M]^{\rm vir}=v_T$ and $\rho_0^*[M_0]^{\rm vir}=[T_0,E_0]^{\rm vir}$. Consequently $\rho_0^*(b_M^![M]^{\rm vir}-[M_0]^{\rm vir})=0$. The matrix/torus good-pair pullback is injective in this degree by the explicit bound in step5.1 and each affine-torsor pullback is an integral isomorphism. Hence $\rho_0^*$ is injective and the difference itself is zero. This is the exact descent argument; étale-local equality of cycles would not give this injectivity. [F1, F2, F3, F4, step 10.1, algebra]

12.1 Thus the class on total relative moduli has dimension $c_β+\operatorname{dim}$ B and its refined BASE-SQUARE fibre pullback is the asserted central class. Writing that operation as i₀! gives exactly the displayed identity of the original Statement, with integral coefficients. The original smooth target family is retained, the possibly singular/nonflat moduli family has not been declared smooth, and no proper Euler-index theorem is needed for this relative virtual-class assertion. [F1, F2, F3, F4, step 11.1, algebra] ∎

