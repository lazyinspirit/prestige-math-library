---
id: lem-cft-positive-energy-diffeomorphism-stress-field
kind: lemma
title: Stress field from a continuous positive-energy diffeomorphism representation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
deps:
  - def-cft-2d-conformal-net-on-circle
  - def-axiom-of-choice
  - thm-unbounded-borel-functional-calculus
dependency_roles:
  def-cft-2d-conformal-net-on-circle: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Carpi--Kawahigashi--Longo--Weiner, From Vertex Operator Algebras to Conformal Nets and Back, positive-energy and stress conventions; the proof here includes differentiation and integration"
      url: https://arxiv.org/pdf/1503.01260
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/lem-cft-positive-energy-diffeomorphism-stress-field.md
dependency_level: 1
---

## Statement

Let $U$ be a strongly continuous projective unitary representation of $\mathrm{Diff}^+(S^1)$ extending a genuine positive-energy unitary Möbius representation, with $U(r_t)=e^{itL_0}$ and finite-dimensional rotation eigenspaces. Let $\Omega$ be a Möbius-invariant unit vector. Write $H_n=\ker(L_0-nI)$ for $n\ge0$ and $H_{\mathrm{fin}}=\operatorname{span}_{\mathrm{alg}}\{H_n:n\ge0\}$, as in the conformal-net definition; set $H^\infty=\bigcap_{k\ge0}D((1+L_0)^k)$. A real smooth vector field on $S^1$ is written $X_f=f(\theta)\partial_\theta$, where $f:\mathbb R/2\pi\mathbb Z\to\mathbb R$ is smooth. Use $\widehat f_n=(2\pi)^{-1}\int_{-\pi}^{\pi}f(\theta)e^{-in\theta}\,d\theta$ and define $T(f)=\sum_{n\in\mathbb Z}\widehat f_nL_n$ on $H^\infty$. On $H_{\mathrm{fin}}$ there are modes $L_n$ extending the Möbius modes, and for $v\in H_k$, $w\in H_{k-n}$ the finite-dimensional-block adjoint relation is $\langle L_nv,w\rangle=\langle v,L_{-n}w\rangle$, written $L_n^\dagger=L_{-n}$. They satisfy $[L_m,L_n]=(m-n)L_{m+n}+c(m^3-m)\delta_{m+n,0}/12$ for some $c\ge0$, and $\|L_nv\|\le C_c(1+|n|)^{3/2}\|(1+L_0)v\|$. Here essentially self-adjoint means that the closure of the densely defined symmetric operator is self-adjoint. For a smooth time-dependent coefficient $f_t(\theta)$ on a compact time interval, its flow $\theta_{t,s}$ solves $\partial_t\theta_{t,s}=f_t(\theta_{t,s})$ with $\theta_{s,s}(\theta)=\theta$; the unitary propagator is the solution on $H^\infty$ of $\partial_tW(t,s)=iT(f_t)W(t,s)$, $W(s,s)=I$. The generators in this statement are shown to have the common invariant core $H^\infty$.

The weight-two quasi-primary vector $\omega=L_{-2}\Omega$ has creative translation-covariant field $\sum_nL_nz^{-n-2}$, local with itself with exponent four. For a closed densely defined operator $T$ and a concrete von Neumann algebra $M$, affiliation means that every unitary $u\in M'$ maps $D(T)$ onto itself and satisfies $uT\xi=Tu\xi$ for $\xi\in D(T)$. If the representation acts covariantly on a net and every diffeomorphism equal to the identity on $I$ fixes $\mathcal A(I)$ pointwise, then $T(f)$ for real $f$ supported in $I$ is affiliated with $\mathcal A(I')'$. Haag duality means $\mathcal A(I')=\mathcal A(I)'$ for every interval $I$; if it has separately been proved, $T(f)$ is affiliated with $\mathcal A(I)$.

## Statement references

[[def-cft-2d-conformal-net-on-circle]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[F1] The net and choice suppliers have their exact declared mathematical scope; the argument below reconstructs the additional claim locally. The unbounded Borel functional calculus supplies the spectral projections and resolvents used for $L_0$ cutoffs and self-adjoint generators. [[def-cft-2d-conformal-net-on-circle]], [[def-axiom-of-choice]], [[thm-unbounded-borel-functional-calculus]].

## Proof

**Given:** Exactly the data and hypotheses in the Statement. All Hilbert inner products are linear in the first argument. Put $D=H_{\mathrm{fin}}$ and $N=1+L_0$.

1.1 For each n≥1, the real vector fields 1, cos(nθ), sin(nθ) generate a three-dimensional local Lie subgroup $G_n$, the local n-fold Möbius group. Its flows are ordinary global smooth circle flows. The restricted projective representation admits a smooth local multiplier after continuous rephasing, as follows; this fact need not be imported as a projective differentiation theorem. [given, F1, algebra]

2.1 Choose a continuous local unitary representative near the identity by requiring its nonzero matrix coefficient on one fixed unit vector to be positive. The resulting local multiplier has a continuous real logarithm c(g,h), zero when either argument is the identity. On a sufficiently small connected product neighborhood, associativity gives the exact real cocycle identity c(g,h)+c(gh,k)=c(h,k)+c(g,hk); a possible integer multiple of 2π is zero by continuity at the identity. Choose a smooth compactly supported density φ on a still smaller base-group neighborhood with integral one. Write δb(g,h)=b(g)+b(h)−b(gh). Set b(g)=∫c(g,k)φ(k)dk. The cocycle identity gives [given, F1, step 1.1, algebra]

3.1 c'(g,h):=c(g,h)−δb(g,h)=∫[c(g,hk)−c(g,k)]φ(k)dk. [given, F1, step 2.1, algebra]

4.1 Changing variables $l=hk$ makes c' smooth in h, with every h derivative continuous in g, because derivatives fall on the translated smooth density. Next put $b_L(g)=∫c'(k,g)φ(k)dk$. Applying the same cocycle identity on the other side gives [given, F1, step 3.1, algebra]

5.1 $c''(g,h):=c'(g,h)−δb_L(g,h)=∫c'(kg,h)φ(k)dk−b_L(h)$. [given, F1, step 4.1, algebra]

6.1 Changing variables l=kg makes the first term smooth in g, and the first regularization permits arbitrary h derivatives under the integral. Thus c'' is jointly smooth. Supports and group neighborhoods can be nested so every displayed product remains in the original cocycle neighborhood. Haar Jacobians under right translation, if present, are smooth and are included in the translated density. This gives a finite-dimensional smooth local central extension with multiplication (g,z)(h,w)=(gh,zw exp(ic''(g,h))) and a continuous genuine local unitary representation. [given, F1, step 5.1, algebra]

7.1 Here local Gårding smoothing has a direct proof. Integrate the local representation against a compact smooth density supported in its multiplication neighborhood. Translation of the resulting vector is obtained by translating the smooth density, so differentiation falls on that density and gives smooth orbit vectors of every order. Approximate-identity densities show these vectors are dense. Lie brackets on them follow by differentiating the smooth local group law. The central Lie cocycle of sl2 splits explicitly: if lifts H,E,F obey [H,E]=2E+aZ, [H,F]=−2F+bZ, [E,F]=H+cZ, replace E by E+aZ/2, F by F−bZ/2, H by H+cZ. Thus no semisimple Lie-cohomology classification is needed. [given, F1, step 6.1, algebra]

8.1 For $k\ge0$, the strong integral $P_k=(2\pi)^{-1}\int_0^{2\pi}e^{-ikt}U(r_t)\,dt$ is the spectral projection onto $H_k$, by the integer rotation spectrum in the net definition. Rotation projection preserves $G_n$-smooth vectors: conjugation of $G_n$ by rotations is a smooth automorphism, and differentiation under the compact rotation integral is valid for each finite family of derivatives. Since $G_n$-smooth vectors are dense by step 7.1, their projections are dense in $H_k$; being a linear subspace of the finite-dimensional $H_k$ it equals $H_k$. Consequently $D$ consists of $G_n$-smooth vectors for every $n$. Choose the nonzero rotation-weight infinitesimal generators $L_{\pm n}$ so that $L_n^*=L_{-n}$ on $D$ and $[L_0,L_n]=-nL_n$. Such weight components have no scalar phase ambiguity. The rotation component is fixed to the already normalized $L_0$. Differentiating this subgroup gives, on $D$, [given, F1, step 7.1, algebra]

9.1 $[L_n,L_{−n}]=2nL0+a_n$ I, [given, F1, step 8.1, algebra]

10.1 for a real scalar $a_n$. Energy positivity gives $L_nΩ=0$ for $n>0$ and hence $a_n=||L_{−n}Ω||²≥0$. At $n=1$, the given genuine vacuum Möbius representation gives $a_1=0$. This paragraph has not asserted any bracket involving distinct absolute mode numbers. [given, F1, step 9.1, algebra]

11.1 Put $E=L_n/n$, $F=L_{−n}/n$ and $K=L0/n+a_n/(2n²)$. Then [E,F]=2K, [K,E]=−E, [K,F]=F, EΩ=0, KΩ=hΩ, where $h=a_n/(2n²)$. The norm recursion gives $||F^rΩ||²=r!(2h)(2h+1)…(2h+r−1)$. For $|q|<1$ the series exp(iqF)Ω therefore converges in norm, since its squared norm is the binomial series $(1−q²)^{(−2h)}$. Direct differentiation using these three brackets shows that [given, F1, step 10.1, algebra]

12.1 v(t)=cosh(nt/2)^(−2h) exp(i tanh(nt/2)F)Ω [given, F1, step 11.1, algebra]

13.1 solves $v'(t)=i(L_n+L_{−n})v(t)/2$ with v(0)=Ω. Termwise differentiation is valid on compact intervals where $|\operatorname{tanh}(nt/2)|<1$, by the same norm-series bounds with polynomial factors in r. The finite-subgroup unitary solution is unique. Taking the vacuum coefficient yields [given, F1, step 12.1, algebra]

14.1 $|\langle Ω,\operatorname{exp}(it(L_n+L_{−n})/2)Ω\rangle |=\operatorname{cosh}(nt/2)^{(−a_n/n²)}$. [given, F1, step 13.1, algebra]

15.1 This also covers $h=0$, when FΩ=0 and the coefficient is one. The operator exponent implements, projectively, the flow of cos(nθ)∂θ, with this fixed normalization of Fourier modes. [given, F1, step 14.1, algebra]

16.1 Suppose the sequence $a_n$ had no polynomial bound. Choose $n_j→∞$ with $a_{(n_j)}≥n_j^{(2j)}$ and put $t_j=a_{(n_j)}^{(−1/2)}$. Then $t_j$ $\operatorname{cos}(n_jθ)$ tends to zero in every smooth seminorm, since $t_j$ $n_j^r≤n_j^{(r−j)}$. Its time-one flows tend to the identity in the smooth Diff topology by the circle ODE and its differentiated equations. Projective strong continuity forces the modulus of their vacuum matrix coefficients to tend to one. However $n_j$ $t_j→0$ and log cosh $x=x²/2+O(x⁴)$, so the displayed coefficient tends to exp(−1/8), a contradiction. Therefore there exist finite C,p with $a_n≤C(1+n)^p$ for all n≥1. No central cocycle classification or mixed differentiation was used. [given, F1, step 15.1, algebra]

17.1 Let $q_n(k)=||L_n:H_k→H_{(k−n)}||²$, zero if the target is absent. On finite-dimensional energy spaces, adjointness and the subgroup bracket imply $q_n(k)≤q_n(k−n)+2n(k−n)+a_n$ for k≥n, and $q_n(k)=0$ for $k<n$. Iterating gives $q_n(k)≤(k/n)(2nk+a_n)$. The adjoint mode satisfies $||L_{−n} v_k||²=||L_n v_k||²+(2nk+a_n)||v_k||²$. Thus for a polynomial $C_n$ in 1+n, independent of k, [given, F1, step 16.1, algebra]

18.1 $||L_{±n} v||≤C_n ||Nv||$,   v∈D. [given, F1, step 17.1, algebra]

19.1 Orthogonality of distinct output energies justifies the estimate for finite sums of energy vectors. Choose $C_n≤C(1+|n|)^P$ after enlarging the exponent and constant. The operators extend continuously from the graph norm of N into H and preserve $H^∞=\bigcap_s D(N^s)$. [given, F1, step 18.1, algebra]

20.1 For a smooth complex function f(θ)=Σ $f_n$ exp(inθ), define T(f)=Σ $f_n$ $L_n$ on $H^∞$. For every integer s≥0, [given, F1, step 19.1, algebra]

21.1 $||T(f)v||_s≤C \sum _n |f_n|(1+|n|)^{(P+s)} ||v||_{(s+1)}$, [given, F1, step 20.1, algebra]

22.1 where $||v||_s=||N^s v||$. Moreover $Q_s(f):=[N^s,T(f)]N^{(−s)}$ is bounded on H, with [given, F1, step 21.1, algebra]

23.1 $||Q_s(f)||≤C_s \sum _n |f_n|(1+|n|)^{(P+s)}$. [given, F1, step 22.1, algebra]

24.1 Indeed on $H_k$ the extra factor in its n-th block is $|(1+k−n)^s−(1+k)^s|/(1+k)^s$. The mean-value inequality bounds this by $s|n|(1+|n|)^{(s−1)}/(1+k)$, whenever the output energy exists. This cancels the factor 1+k in the mode estimate. Each n-th block is one weighted shift, whose norm is the supremum of its block norms; summing their norms proves the assertion. Smooth f makes both sums finite. For real f the adjoint relation makes T(f) symmetric. These estimates are obtained before asserting the mixed Virasoro bracket. [given, F1, step 23.1, algebra]

25.1 Let f(t,θ) be real, smooth in t and θ on a compact t interval. Use spectral cutoffs $P_R$ of L0 and solve the bounded self-adjoint equations $v_R'=iP_R T(f(t))P_R v_R$. Since $P_R$ commutes with N, differentiation and the bound for $Q_s$ yield [given, F1, step 24.1, algebra]

26.1 $||v_R(t)||_s≤\operatorname{exp}(∫||Q_s(f(τ))||dτ)||v_R(0)||_s$, [given, F1, step 25.1, algebra]

27.1 uniformly in R. For smooth v, the cutoff error has the explicit bound $||(P_R T(f)P_R−T(f))v||_s≤C_f (1+R)^{(−1)}||v||_{(s+2)}$: put one factor of N on each omitted high-energy projection and use the preceding mapping estimate. Duhamel's formula and the uniform bound at order s+2 show that the cutoff propagators are Cauchy in every $H^s$ on $H^∞$. Their limits are inverse to the corresponding backward limits and preserve norm on H, hence are unitary. They preserve $H^∞$, solve the equation there, and are the unique such solutions, since the norm of the difference of two solutions has derivative zero. Duhamel also proves continuous dependence on f in smooth seminorms. [given, F1, step 26.1, algebra]

28.1 For autonomous f, uniqueness gives a strongly continuous unitary group $W_f(t)$. Its self-adjoint generator extends T(f). The domain $H^∞$ is a core: it is invariant under $W_f$ and $W_f(t)v$ is continuous in every Sobolev norm. If φ is a compact smooth time function, $W_f(φ)v=∫φ(t)W_f(t)v$ dt lies in $H^∞$ for $v∈H^∞$, and its generator image is obtained by differentiating φ. Approximate an arbitrary Hilbert vector by $H^∞$ vectors, apply the bounded operators $W_f(φ)$ and $W_f(φ')$, and then use approximate-identity φ on any vector in the generator domain. This gives graph-norm density of $H^∞$ in that domain. Thus T(f) is essentially self-adjoint on $H^∞$, and likewise on D by spectral cutoff convergence in the graph norm. No Virasoro bracket has entered. [given, F1, step 27.1, algebra]

29.1 For a finite real Fourier sum $f=\sum _{(j=1)}^r f^j$, each $f^j$ is a constant or a sine/cosine single mode. The corresponding single-mode $W_{(f^j)}$ is already the subgroup implementer, projectively. The product $(\prod_j W_{(f^j)}(t/m))$^m converges strongly to $W_f(t)$. One can verify this directly on $H^∞$: the one-step difference is $O((t/m)²)||v||_2$ by expanding each evolution once with an integral remainder and using the mapping bounds; the uniform Sobolev Grönwall estimate bounds all intervening products, and telescoping gives $O(1/m)||v||_2$ on bounded t intervals. The same finite product of circle flows converges in every $C^r$ norm to the flow of f: the first-order ODE splitting error is O((t/m)²) in $C^r$ on a compact time interval, controlled by finitely many higher derivatives, and telescoping with the differentiated ODE bounds gives O(1/m). Strong projective continuity identifies $W_f(t)$ with $U(flow_f(t))$, modulo phase. [given, F1, step 28.1, algebra]

30.1 For arbitrary smooth real f, real Fourier partial sums converge in every smooth seminorm. Duhamel and the Sobolev estimates give $W_{(f_j)}(t)v→W_f(t)v$, while the smooth flow ODE gives $flow_{(f_j)}(t)→flow_f(t)$. Hence the same projective identity holds for every real smooth f. For smooth time-dependent f, time-ordered products with f frozen on each subinterval converge to the propagator just constructed by the same Duhamel estimate, and their circle-flow products converge to the time-dependent flow. Therefore that propagator implements U of the time-dependent flow, modulo phase. [given, F1, step 29.1, algebra]

31.1 In a neighborhood of the identity diffeomorphism choose a periodic real lift $g_h(θ)=θ+h(θ)$, with $||h'||∞<1/2$. The path $g_{(t,h)}=id+t h$ has right velocity $f_{(t,h)}=h$ composed with $g_{(t,h)}^{(−1)}$. This is smooth in t, θ, and any finite family of smooth parameters in h; derivatives of its inverse are controlled by differentiating $g_{(t,h)}∘g_{(t,h)}^{(−1)}=id$ and using the uniform positive lower bound on 1+t h'. Its propagator gives a local representative of $U(g_h)$. [given, F1, step 30.1, algebra]

32.1 All finite parameter derivatives of this representative exist on $H^∞$ and are continuous in its Sobolev topology. The first derivative is the Duhamel integral with insertion iT(∂f); higher derivatives are sums of iterated Duhamel integrals with the corresponding derivatives of f. Each insertion loses one finite Sobolev order and all intervals are compact, so the estimates above justify differentiation, limits, and integrals on $H^∞$. Arbitrarily high input Sobolev order is available. Fix the scalar phase locally by making $\langle Ω,U(g_h)Ω\rangle $ positive; this coefficient is nonzero near the identity, and the phase adjustment is smooth by the preceding parameter differentiability. This proves the needed smooth projective action on $H^∞$ rather than assuming it. [given, F1, step 31.1, algebra]

33.1 Differentiate the actual two-parameter group composition identity for these local representatives. Its scalar multiplier is smooth (evaluate on Ω), so its second differential is scalar. The resulting infinitesimal commutator agrees with the Lie bracket of circle vector fields modulo scalars. With $U(r_t)=\operatorname{exp}(itL0)$, Fourier modes are normalized so that the noncentral term is $[L_m,L_n]=(m−n)L_{(m+n)}$, and rotation covariance fixes $[L0,L_n]=−nL_n$ exactly. A possible scalar term in a mixed bracket has energy degree −m−n; it must therefore vanish if m+n≠0. At $m+n=0$ it is the previously obtained $a_m$. The usual Jacobi identity for operators on the invariant $H^∞$ now applies and yields [given, F1, step 32.1, algebra]

34.1 $(m−n)a_{(m+n)}=(m+2n)a_m−(2m+n)a_n$. [given, F1, step 33.1, algebra]

35.1 Here $a_{−m}=−a_m$, $a_0=0$ and $a_1=0$. Taking $n=1$ and m≥2 gives $(m−1)a_{(m+1)}=(m+2)a_m$. Consequently $a_m=(a_2/6)(m³−m)$ for all integers m. Put $c=2a_2≥0$. This is precisely [given, F1, step 34.1, algebra]

36.1 $[L_m,L_n]=(m−n)L_{(m+n)}+(c/12)(m³−m)δ_{(m+n,0)}$ I. [given, F1, step 35.1, algebra]

37.1 The sign convention can equivalently be fixed by checking $m=0$ and the given Möbius brackets. Repeating the preceding linear-energy estimate with $a_n=c(n³−n)/12$ gives the standard uniform bound $||L_n v||≤C_c(1+|n|)^{(3/2)}||Nv||$. Every step preceding the differentiated group identity used only the less precise polynomial bound obtained from strong continuity. [given, F1, step 36.1, algebra]

38.1 Define the formal stress field $S(z)=\sum _m$ $L_m$ $z^{(−m−2)}$ on D and $ω=L_{−2}Ω$. Positive energy kills $L_mΩ$ for $m>0$, the vacuum Möbius condition kills $L_{−1}Ω$ and L0Ω, and the Virasoro relation gives L0ω=2ω, L1ω=0. Also $L_{−r−2}Ω=(1/r!)L_{−1}^rω$, by induction using $[L_{−1},L_{−r−2}]=(r+1)L_{−r−3}$. Thus $S(z)Ω=\operatorname{exp}(zL_{−1})ω$. Translation covariance follows by reindexing $[L_{−1},L_m]=−(m+1)L_{(m−1)}$. The full Virasoro bracket gives the formal delta identity $[S(z),S(w)]=∂_w S(w)δ(z,w)+2S(w)∂_wδ(z,w)+(c/12)∂_w³δ(z,w)$, so $(z−w)^4[S(z),S(w)]=0$. The field is vectorwise lower truncated by its energy shift, and its modes satisfy the proved energy bound. [given, F1, step 37.1, algebra]

39.1 Under the stated local diffeomorphism axiom, a real f supported in I has its flow equal to the identity on I', so every exp(it closure(T(f))) commutes with A(I') and lies in A(I')'. Thus closure(T(f)) is affiliated with A(I')': its spectral measure is in this algebra, or equivalently every commutant unitary preserves its generator domain and commutes there. Only after separately proving Haag duality may this be replaced by A(I). For complex f use the real and imaginary components on the common H^∞ core. Before duality this supplies commutation with FJ fields affiliated with the opposite local algebra. After duality, disjoint supported real stress smearings strongly commute through the two commuting local algebras. No local affiliation follows from interval covariance alone; this paragraph uses the local-implementation axiom explicitly. [given, F1, step 38.1, algebra]

40.1 The identification of these stress smearings with the actual local Fredenhagen–Jörß field for ω further uses its specified Tomita/PCT conventions and the common-core gluing interface. This component supplies the actual quasi-primary ω, its creative series, energy bounds, local affiliation, and the complete Virasoro/self-locality identities needed there. It does not silently assume a full FJ identification or that local net generation alone equals algebraic mode-word spanning. [given, F1, step 39.1, algebra] ∎

