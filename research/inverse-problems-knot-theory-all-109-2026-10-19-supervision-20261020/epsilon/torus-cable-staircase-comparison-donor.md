# Exact epsilon comparison of the three proposed staircases

This is a complete finite algebra calculation. It does not assert geometric admission of any staircase as a knot complex. In particular citations to L-space cabling or Alexander polynomials do not fill that gap.

Let S(h₁,v₁,…,h_r,v_r) have basis e₀,…,e₂r over F₂[U,U⁻¹], with d e₂k₊₁=U^{hₖ₊₁}e₂k+e₂k₊₂ and differential zero on even generators. Put A(e₀)=g=½Σ(hₖ+vₖ), M(e₀)=0, A(e₂k₊₁)=A(e₂k)-hₖ₊₁, A(e₂k₊₂)=A(e₂k₊₁)-vₖ₊₁, M(e₂k₊₁)=M(e₂k)-2hₖ₊₁+1, M(e₂k₊₂)=M(e₂k₊₁)-1, and place every e at i=0. All hₖ,vₖ are positive in the cases below. Then d has the required degree and filtration, d²=0, and its vertical differential pairs each odd generator with the following even generator, leaving e₀. Consequently τ(S)=g. The vertical complex splits as these explicit filtered boundary pairs plus e₀; there is no earlier-level representative of e₀, since no vertical boundary contains e₀.

Take A=S(1,1,1,1), B=S(1,3,2,2,3,1), and C=S(1,3,3,1). Distinguish their bases by a,b,c. In B*, write b_k for the dual basis. Its differential is the transpose, in particular d b₀=U b₁ and d b₂=b₁+U²b₃. The three vertical thresholds are 2,-6,4, so the tensor E=A⊗B*⊗C has threshold zero. Its vertical class is a₀b₀c₀, of Maslov degree and Alexander level zero.

In the northeast hook N₀(E), consider the Maslov-one chain

    q = U⁻¹ a₀ b₀ c₁ + a₀ b₂ c₁ + U⁻¹ a₁ b₂ c₂.

Its terms have (i,j)=(1,0),(0,3),(1,0), respectively, so all lie on the hook. Expand the three boundaries and discard terms outside i≥0,j≥0,min(i,j)=0:

    d_N(U⁻¹ a₀ b₀ c₁) = a₀ b₀ c₀ + a₀ b₁ c₁;
    d_N(a₀ b₂ c₁)     = a₀ b₁ c₁ + a₀ b₂ c₂;
    d_N(U⁻¹ a₁ b₂ c₂) = a₀ b₂ c₂.

For completeness, the extra U²b₃ terms contribute either i<0 or j<0. In the first equation U⁻¹a₀b₀c₂ has (1,-3). In the second, Ua₀b₂c₀ has i=-1, and U²a₀b₃c₁ has i=-2. In the third, U⁻¹a₂b₂c₂ has (1,-1), U⁻¹a₁b₁c₂ has (1,-3), and Ua₁b₃c₂ has i=-1. Thus all discarded terms really vanish in the hook, with no assumed cancellation. Adding the three displayed equations gives d_N q=a₀b₀c₀. Hence F₀(E)=0, and the already supplied two-hook trichotomy gives epsilon(E)=1.

The accompanying exact F₂ computation independently constructs the 175 R-basis tensor, all differential monomials, its 14-dimensional Maslov-zero and 23-dimensional Maslov-one northeast-hook pieces, and this bounding chain. It verifies d²=0 on all 175 R-basis generators and verifies the literal displayed hook boundary. This computation proves only this finite algebra assertion.

If actual normalized filtered equivalences CFK∞(T₂,₅)≃A, CFK∞(T₄,₅)≃B and CFK∞(T₂,₃;₂,₅)≃C are supplied, the already accepted connected-sum and reverse-mirror interfaces identify the original knot witness with E. Then the above calculation proves exactly τ=0 and epsilon=1 for that knot, without a separate Hom order/comparison lemma. Until those three geometric equivalences are actually constructed, this implication remains conditional and the original geometric witness remains unresolved.
