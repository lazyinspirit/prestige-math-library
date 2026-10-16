# Superseded working derivation

The actual two new lemma carriers and the ModFKV/Tang theorem proofs now supersede this working draft. Its intermediate numerical bounds and unresolved annotations are historical derivation notes, not current repair blockers or acceptance evidence.

# QA34 direct proof draft — not an acceptance receipt

Prepared by quantum_dequantization_escalation while native batch 58 retains its source write lease. No existing source/manifest/contract/readiness file is changed here. This draft records a replacement proof route, not an assertion that the current items have been repaired or checked.

## Source inspection

Read Tang v3 cached text, complete sections 4.2–4.3 and Appendix A through Lemma A.2 (lines 560–790 and 1090–1295). Tang explicitly defers its FKV estimates, cites martingale concentration for confidence, and only sketches the geometric refinement. Read the complete cached 15-page FKV author manuscript. Its text extraction corrupts many mathematical glyphs; use the PDF for any exact formula quotation. It is dated October 22, 1998, whereas Tang cites the later FKV04 treatment. The argument below therefore derives the needed estimates independently instead of claiming to import exact FKV04 lemmas from that manuscript.

## Supplier 1: exponential Frobenius Gram concentration

Let X be a finite-support random vector with ||X||²=L deterministically. For independent copies X_1,...,X_q put Z=q⁻¹Σ X_j X_jᵀ and H=E XXᵀ. Then E||Z-H||_F²≤L²/q by expanding the centered independent summands. Consequently E||Z-H||_F≤L/√q by scalar Cauchy–Schwarz. The real function f=||Z-H||_F changes by at most 2L/q when one sample is replaced. For completeness, the bounded-differences proof is as follows. Reveal samples successively and form the Doob conditional-expectation martingale of f. Conditional on the earlier samples, each martingale difference is centered and lies in an interval of length at most 2L/q: averaging future samples preserves the coordinate oscillation bound. A centered variable Y in an interval of length c satisfies E exp(sY)≤exp(s²c²/8). Indeed, for h(s)=log E exp(sY), h(0)=h'(0)=0 and h''(s) is the variance under exponentially tilted weights, bounded by c²/4: for a variable T∈[a,b], Var(T)≤E[(T-(a+b)/2)²]≤c²/4. Twice integrating gives the mgf inequality. Conditional iteration and exponential Markov therefore give P(f-Ef≥u)≤exp[-qu²/(2L²)]. In particular

P(||Z-H||_F > L(1+√(2 log(2/δ)))/√q) ≤ δ/2.

Apply this first to normalized sampled rows of A with L=F² and then, conditional on S, to normalized sampled columns of S. Every row of S has norm F/√q, so ||S||_F=F exactly. The column mixture is F(j)=||S_{*,j}||²/F², hence every sampled normalized column has norm F/√q and ||W||_F=F exactly. Thus a finite union bound yields both ||AᵀA-SᵀS||_F≤tF² and ||SSᵀ-WWᵀ||_F≤tF² with probability ≥1-δ when

q ≥ t⁻²(1+√(2 log(2/δ)))².

The conditional bound is uniform in S and needs no independence between the two failure events. No dimension-dependent net or unproved matrix martingale result is used.

## Supplier 2: deterministic two-sketch threshold-band estimate

Write H=AᵀA, G=SᵀS, B=SSᵀ, C=WWᵀ; assume the two Gram errors above. Let a=σ², K=F²/a≥1, and assume tK≤1/2. Let U consist of the k orthonormal eigenvectors of C with eigenvalues >a; Σ is the positive square-root diagonal of those eigenvalues. Put V=SᵀUΣ⁻¹ and M=VVᵀ. Since tr C=F², k<K (and in particular k≤K).

If k>0, T=UᵀBU is positive definite because T≥Σ²-tF²I≥(a-tF²)I. Thus P=SᵀU T⁻¹UᵀS is the orthogonal projection onto range(V). Moreover VᵀV-I=Σ⁻¹Uᵀ(B-C)UΣ⁻¹, so ||VᵀV-I||_F≤tK. By diagonalizing VᵀV, the nonzero eigenvalues of M-P are those of VᵀV-I; hence ||M-P||_F≤tK. This also shows singular values of V belong to [√(1-tK),√(1+tK)]. For k=0 use P=M=0 and the same conclusions with empty matrices.

For k>0, set Z=UᵀB²U. The identity Z-T²=UᵀB(I-UUᵀ)BU≥0 gives tr(PG)=tr(ZT⁻¹)≥tr T≥Σ_{j≤k}λ_j(C)-√k tF². The eigenvalues of H and C, padded by zeros as needed, differ coordinatewise by ≤2tF². Here the variational characterization λ_j(J)=max_dim E=j min_{x∈E,||x||=1}xᵀJx follows directly from an orthonormal eigenbasis (intersect E with the span of eigenvectors numbered j onward); it implies the operator-norm perturbation bound. H and G are compared first; G and B have the same positive eigenvalues by the SVD; B and C are compared second. Likewise sums of the k largest eigenvalues of two same-sized Hermitian matrices differ by ≤√k times their Frobenius distance: maximize tr(QJ) over rank-k orthogonal projections and use |tr(Q(J-J'))|≤||Q||_F||J-J'||_F. Thus

Δ:=Σ_{j≤k}λ_j(H)-tr(PH) ≤3√k tF².

This is nonnegative by the same variational formula. The bound is also true for k=0.

The eigenvalue comparison and selection rule give λ_k(H)>a-2tF² when k>0 and λ_{k+1}(H)≤a+2tF² whenever that index exists. Work in an eigenbasis of H, put p_j=〈e_j,Pe_j〉∈[0,1], Σp_j=k. Expanding Δ with pivot a gives

Δ=Σ_{j≤k}(λ_j-a)(1-p_j)+Σ_{j>k}(a-λ_j)p_j.

Negative summands have total absolute value at most 4ktF²: each coefficient has magnitude ≤2tF², Σ_{j≤k}(1-p_j)≤k, Σ_{j>k}p_j≤k. Therefore, writing J_+={j:λ_j≥a(1+η)²}, J_-={j:λ_j<a(1-η)²}, all positive outside-band penalties obey

E:=Σ_{J_+}(λ_j-a)(1-p_j)+Σ_{J_-}(a-λ_j)p_j ≤Δ+4ktF²≤7KtF².

The first inequality remains valid even when J_+ contains j>k or J_- contains j≤k: in those cases λ_j is within 2tF² of a, and moving its pivot contribution to the opposite side costs at most 2tF² per coordinate; more safely, derive E directly from tr[(Q_a-P)(H-aI)], where Q_a projects onto eigenvalues ≥a. Its difference from Δ is the sum of |λ_j-a| on indices between k and rank(Q_a), bounded by 2tF² times that number≤2tF² max(k,rank(Q_a)). This requires a bound on rank(Q_a) if k=0. **Unresolved detail: replace the preceding 4k estimate by 4(K+1)tF², using tr H=F² and a-2tF²≥a/2 to bound all crossing indices by 2K. Then E≤11KtF² uniformly.** Do not promote the numerical bound 7 until this detail is finalized.

Let P_1,P_2,P_3 be the high, band, low spectral projections. The outside mass L=tr[P_1(I-P)]+tr(P_3P) is at most E/(ηa), since both outside gaps are at least ηa. Let R=P_2PP_2 on the band space, and let Q be its spectral projector for eigenvalues ≥1/2. It is a projection contained in the band. As 0≤R≤I,

||P_2P-Q||_F²=Σ_r min(r,1-r)≤2Σ_r r(1-r)=2||P_2P(I-P_2)||_F²≤2L.

The last inequality uses ||P_2PP_1||_F≤||(I-P)P_1||_F and ||P_2PP_3||_F≤||PP_3||_F. The high contribution to ||A(P-P_1-Q)||_F² is Σ_{J_+}λ_j(1-p_j)≤(2/η)E, the low contribution is ≤aL, and the band contribution is ≤4a·2L. Therefore

||A(P-P_1-Q)||_F²≤11E/η.

This handles η=1 (empty strictly-low positive spectrum, but nullspace allowed), both band endpoint conventions, empty band, k=0, rank deficiency, and repeated eigenvalues. Finally ||A(M-P)||_F≤F tK. Taking t=ηε²/(1000K²), after resolving the crossing-count detail, yields ||AM-A(P_1+Q)||_F≤εF with room in the constants. The sample bound is O(K⁴/(η²ε⁴) log(2/δ)). A sufficiently large explicit universal coefficient gives the prescribed q. It is important to use log(2/δ), not log(1/δ), uniformly for δ→1 and integer q≥1.

## Tang refinement route, still being developed

On the successful sketch event, V has singular values in [√(1-tK),√(1+tK)]. Write z=A_i SᵀUΣ⁻¹, so D_i=zVᵀ. At stage l estimate the q entries of A_iSᵀ using the proved scalar estimator with α_l=2⁻ˡ/√K and a summable failure allocation proportional to δ·2⁻ˡ/q. Then ||z_hat-z||≤2⁻ˡ||A_i||. The explicit coefficient vector z_hat has computable norm; no full row norm or Gram B needs to be computed. Stop when ||z_hat||≥(1+32/ε)2⁻ˡ||A_i||. On the simultaneous estimator-good event this guarantees relative output-vector error O(ε), and if D_i≠0 it is reached after O(log(||A_i||/(ε||D_i||))) stages. Geometric costs sum to the last stage and give the desired squared row ratio up to logs. The vector to sample is z_hatΣ⁻¹UᵀS. Its cancellation factor is ≤2K, so use the finite rejection sampler with a certified bound from the successful-sketch event and a separate δ budget. Need precise unconditional failure semantics: certification of near-isometry is a probabilistic event, not a computable input certificate; on a bad sketch it may return INVALID or the schedule may fail to stop if the realized target row is zero. The retained theorem must explicitly state the nonzero realized-row admissibility condition and give a total procedure/failure interpretation without conditioning away sketch failure.
