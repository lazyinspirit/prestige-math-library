# Type-H missing BvM: complete conjugate proof route (research only)

Date: 2026-10-15. No live item, manifest, contract, readiness, hash, test or native state changes made.

## Sources actually read

Downloaded full PDFs and extracted full text under `bayesian-computational-statistics-62-owner-bvm-type-h-sources/`:

- Castillo–Nickl arXiv:1310.2484, printed pp.23–28 read in full, including §5.4. The Type-H shift argument is explicitly omitted on p27; finite-dimensional BvM is delegated to Castillo–Rousseau on p28. Therefore this source alone is not a local proof.
- Castillo arXiv:1304.1761, §4.4, printed pp.25–28 read in full, and Lemma11 printed p33. This is the actual deferred shift proof. It gives the simplex map ζ_k=ω_k exp(-tγ_k/√n)/Σω_j exp(-tγ_j/√n), the transformed Dirichlet density factor, and bounds its effect. Lemma11 itself delegates the elementary Jacobian calculation. We do not rely on that omission: the direct conjugate proof below needs neither this shift nor a contraction supplier.
- Current definition `def-type-s-and-h-multiscale-density-priors`, example `ex-type-s-and-h-density-prior-contracts`, `lem-m0w-finite-projection-and-tail-bvm-criterion`, `thm-projected-empirical-process-clt-in-m0w`, both batch19/20 round0 reports, and actual local Dirichlet/Gamma suppliers listed below were read.

## Exact claim and convention

Use original Type-H assumptions: α∈(1/2,1], f0∈C^α, 0<ρ0≤f0≤D0, m_n=2^{L_n}, either original j_n or ell_n cutoff, and c1*m_n^{-a}≤a_k≤c2. Retain every assumption (the proof actually needs only a_k>0 and a_k≤c2). Assume full AC, already needed by the actual normalized-Gamma supplier and the bridge-law suppliers. In the Haar basis, histogram at mesh 2^{-L_n} has scaling coordinate1 and detail levels l<L_n; source1310 p25 and 1304 pp25–26 use exactly this convention. Define H_n as that Haar projection and h_n=H_nP_n, the empirical histogram. Then posterior law of √n(f-h_n) converges in BL on M0(w) to the f0-Brownian bridge coefficient law for every original admissible w.

Important exact definition clarification: the current opening sentence inherits a regular wavelet basis for *all* families, but Type H must say explicitly 'For type H use the Haar basis, with scaling function1 and detail ψ_lk=2^{l/2}(1_left−1_right), l≥0; the histogram space at mesh2^{-L_n} consists of scaling and levels l<L_n.' Type S retains its regular wavelets. `def-multiscale-coefficient-space-m0w` should allow this Haar indexing convention too. This is a source-convention correction, not restriction of original source hypotheses. Affected existing consumers are the Type-H branch of `lem-type-s-h-prior-draws-are-l2-densities`, the prior-contract example, generic CDF/diameter applications, and their page prose. No general-wavelet Type-H theorem should be claimed without a separate basis-transfer proof. The source itself has no such claim.

## Smallest substantial suppliers

1. A Gamma representation/concentration lemma (possibly combine with finite-dimensional limit below): finite positive-parameter Dirichlet vectors are normalized independent Gamma variables, and weighted centered Gamma sums satisfy the Bernstein inequality derived below. Existing actual representation proof is `thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure` step6.1; applying its stated finite-partition interface to a finite discrete space supplies representation. `lem-dirichlet-aggregation-under-coarsening` proves the same use and the Gamma mgf. Can instead give the same finite change-of-variables argument locally to avoid dependence on the large DP construction.
2. Type-H posterior multiscale BvM theorem containing its two elementary branches (finite-dimensional Gamma limit and multiscale Bernstein tails). Existing projection/tail criterion supplies the final glue. A separate generic finite-dimensional Dirichlet BvM lemma is useful if proof size warrants it, but not logically necessary.

Other actual suppliers: `thm-dirichlet-multinomial-conjugate-update` (or directly multiply full density likelihood m^n∏ω_k^{N_k} by simplex prior; data likelihood constant cancels); `def-gamma-distribution-shape-rate`, `lem-gamma-density-normalization`; finite product/change-of-variable theorem; scalar IID CLT and vector Slutsky; finite-dimensional BL metrizability; Markov and finite union bounds. Original full AC explicitly covers these dependencies. Shared Gaussian bridge existence remains parent-owned; existing empirical CLT takes this Borel law as given rather than constructing it.

## Detailed proof, all difficult estimates supplied

Write m=m_n, A=Σa_k≤c2m, β_k=N_k+a_k, B=n+A. Original α>1/2 implies m/√n→0 and m log n/n→0 for both cutoffs. The posterior is Dirichlet(β). Realize it by independent Z_k~Gamma(β_k,1), S=ΣZ_k, ω_k=Z_k/S. For any cell-constant q write Q(q)=Σβ_k q_k/B, T(q)=Σq_k(Z_k−β_k). Exactly

    √n(Σω_kq_k−Q(q)) = (√n/S) T(q−Q(q)).

Here Q is the posterior mean histogram measure.

### Gamma Bernstein inequality

For independent Gamma(β_k,1), Euler substitution gives E exp(uZ_k)=(1−u)^{-β_k}, u<1. If |q_k|≤b and V=Σβ_kq_k², then for |λ|b<1,

    log E exp(λT(q)) = Σβ_k[−log(1−λq_k)−λq_k]
      ≤ λ²V/[2(1−|λ|b)].

This follows by the convergent logarithm power series: Σ_{r≥2}|x|^r/r≤x²/[2(1−|x|)]. Apply exponential Markov at λ=x/(V+bx) to obtain

    Pr(|T(q)|>x) ≤ 2 exp[−x²/(2(V+bx))].

In particular with q=1, S~Gamma(B,1), E S=B, Var S=B, and Pr(S<B/2)≤4/B by Chebyshev (this probability is conditional on data and B deterministic).

### A data event and posterior coordinate tails

Let E_n={max_k N_k≤C n/m}, with C>D0+1 fixed sufficiently large. Each N_k has Bin(n,p0,k), p0,k≤D0/m. Its mgf is (1−p+p exp t)^n≤exp(np(exp t−1)). For a fixed positive t, exponential Markov gives Pr(N_k>Cn/m)≤exp(−c n/m), for suitable C,c>0. Union bound gives Pr(E_n^c)≤m exp(−c n/m)→0. On E_n and for n large, β_k≤C'n/m, B≤2n, and Q has density mβ_k/B bounded by C'. For a Haar ψ=ψ_lk with l<L_n, put q=ψ−Qψ. Then |q|≤2*2^{l/2} and

    Σβ_k q_k² = B Var_Q ψ ≤ B Qψ² ≤ C'B ≤ C''n,

because ψ is orthonormal and Q has bounded density. On S≥B/2 the exact representation gives |√n(ωψ−Qψ)|≤2|T(q)|/√n. Hence for every x>0, conditional on data in E_n,

    Π(|√n(fψ−Qψ)|>x |X)
      ≤ 4/B + 2 exp[−c x²/(1+2^{l/2}x/√n)].

For a union over coordinates do NOT repeat the 4/B term: first remove the single event {S<B/2}, then union-bound only the exponential terms.

Take x=K√(l+1). For every fixed K>0, uniformly l<L_n, the Bernstein correction is at most CK√(m(L_n+1)/n)=o(1). Therefore for all sufficiently large n (depending on K),

    Π(max_{J<l<L_n,k}|√n(f−Q)ψ_lk|/√(l+1)>K |X)
      ≤4/B + Σ_{l>J}2^{l+1}exp(−c'K²(l+1)).

Choose a fixed K with c'K²>2log2. The series tail tends to0 as J→∞. For any ε>0, admissibility gives K√(l+1)≤εw_l eventually. Thus posterior M(w) tails about Q vanish in the required iterated limit, uniformly over E_n. Above L_n both posterior f and Q are histograms and all Haar detail coefficients are exactly0.

### Replacing Q by the empirical histogram

For any Haar ψ, empirical coefficient pψ=P_nψ and

    √n(Qψ−P_nψ) = √n/B [Σa_kψ_k−A P_nψ].

Since (1/m)Σ|ψ_k|=∫|ψ|=2^{-l/2}, we have |Σa_kψ_k|≤c2m2^{-l/2}≤c2m. On E_n the empirical histogram density is ≤C, hence |P_nψ|≤C∫|ψ|≤C. Therefore the absolute displayed shift is ≤C m/√n→0 uniformly over l,k (scaling coefficient shift is exactly0). Since w_l≥1, the complete M(w) norm of this deterministic conditional shift tends to0 on E_n. This proves posterior tails about h_n. No truth-bias/contraction condition is used here.

### Finite-dimensional posterior limit (one fully local route)

Fix a dyadic coarse partition into r cells fine enough to make all the finitely many desired Haar functions constant. Aggregate Z over those r cells. Their independent Gamma shapes b_{nj} are the corresponding sums of β_k. Since A/n→0 and by the finite IID weak law for coarse counts, b_{nj}/n→p_j=P0(coarsecell_j)>0 in P0-probability. It suffices to prove convergence for every deterministic subsequence of data along which these ratios converge; the subsequence principle then gives convergence in probability. On such a data sequence write b_{nj}=d_{nj}+δ_{nj}, d=floor b, 0≤δ<1. A Gamma(b,1) variable is a sum of d independent Gamma(1,1) variables and an independent Gamma(δ,1) residual (residual0 if δ=0). This follows from the Gamma mgf and exponential-transform uniqueness, exactly as the local aggregation supplier's step2.1–3.1. Gamma(1,1) variables have mean1 and variance1 by differentiating their mgf. Scalar IID CLT yields

    (Gamma(b_{nj},1)−b_{nj})/√n ⇒ N(0,p_j).

Indeed d_{nj}→∞, d_{nj}/n→p_j, and the residual centered variance is δ_{nj}/n≤1/n, so Chebyshev removes it. There are finitely many independent coordinates. Their joint characteristic function factors, yielding independent coordinate normal limits by the finite-dimensional Cramér–Wold/characteristic-function convergence theorem; alternatively apply the vector IID CLT to a fixed vector of independent Exp(1) sequences and handle unequal deterministic lengths by the variance bound for their o(n) terminal blocks. This last alternative uses only existing multivariate IID CLT: take lengths floor(np_j), and variance of the discrepancy is |d_{nj}−floor(np_j)|/n→0. Then the normalized-Gamma identity and S/n→1 give

    √n(ω_j−b_{nj}/B) ⇒ U_j−p_jΣ_h U_h,
    Cov = diag(p)−pp^T.

This is an explicit algebraic Slutsky use: write √n(ω_j−b_j/B)=(n/S)[(Z_j−b_j)/√n−(b_j/B)(S−B)/√n]. The empirical coarse counts differ from b_j/B by at most C A/n, hence their √n difference tends0 because A/√n→0. Applying the fixed linear map taking coarse masses to the finitely many Haar coefficients yields exactly covariance P0[(ψ−P0ψ)(ψ'−P0ψ')]. Finite-dimensional weak convergence is BL convergence by the actual local Polish-space metric supplier. All coordinates including scaling1 are handled; scaling fluctuation is identically0.

### Final application

Posterior draws and h_n are finite Haar series, hence define Borel laws on M0(w). Finite-dimensional convergence and the preceding posterior-tail estimates invoke `lem-m0w-finite-projection-and-tail-bvm-criterion`, giving the claimed BL BvM about h_n. The source's 'projected empirical' center is precisely this histogram under its Haar l<L_n convention. The original smoothness and both cutoff assumptions remain in the theorem; they are also what the companion empirical CLT uses to center at f0. No citation has replaced any mathematical step.

## True remaining integration obligations

- Parent must supply/verify existence of the Borel bridge law if the intended theorem does not take it as input. Current empirical CLT only assumes that law; it does not prove existence.
- Precisely integrate the Haar convention in definition/space/prior-density supplier/example/pages and inspect all their consumers. This is a genuine original Definition clarification and cannot be silently omitted.
- Author finite Gamma concentration and/or finite Dirichlet CLT as substantial suppliers if the final theorem would otherwise become too long. The proof route above is mathematically complete but not yet an item-format proof/contract.
