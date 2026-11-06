---
id: thm-cft-r5-liouville-sphere-four-point-bootstrap
kind: theorem
title: Probabilistic/bootstrap equality for Liouville four-point functions in a proved domain
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: mathematics
library: mathematics
deps:
  - def-cft-r5-liouville-probabilistic-sphere-model
  - def-virasoro-highest-weight-module
  - def-cft-r5-liouville-dozz-constant
  - def-cft-r5-liouville-spherical-conformal-blocks
  - def-cft-r5-liouville-radial-hamiltonian-data
  - thm-cft-r5-radial-liouville-poisson-spectral-resolution
  - lem-cft-r5-liouville-charged-ward-and-radial-overlaps
  - thm-cft-r5-probabilistic-dozz-three-point-identity
dependency_roles:
  def-cft-r5-liouville-probabilistic-sphere-model: mathematical-premise
  def-virasoro-highest-weight-module: mathematical-premise
  def-cft-r5-liouville-dozz-constant: mathematical-premise
  def-cft-r5-liouville-spherical-conformal-blocks: mathematical-premise
  def-cft-r5-liouville-radial-hamiltonian-data: mathematical-premise
  thm-cft-r5-radial-liouville-poisson-spectral-resolution: mathematical-premise
  lem-cft-r5-liouville-charged-ward-and-radial-overlaps: mathematical-premise
  thm-cft-r5-probabilistic-dozz-three-point-identity: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Colin Guillarmou, Antti Kupiainen, Rémi Rhodes, Vincent Vargas, Conformal Bootstrap in Liouville Theory, arXiv:2005.11530v1"
      url: https://arxiv.org/pdf/2005.11530v1
      locator: "Theorem 1.1, PDF p. 7; proof §4, PDF pp. 64–67; spectral theorem §1.3 and Theorem 3.22; Ward identity Proposition 1.10 and §§5–6."
    - title: "Rémi Rhodes and Vincent Vargas, Lecture notes on Gaussian multiplicative chaos and Liouville Quantum Gravity, arXiv:1602.07323v1"
      url: https://arxiv.org/pdf/1602.07323
      locator: "§2.2 and §3.4 for the probabilistic GMC and sphere-correlation conventions; these notes do not prove the four-point bootstrap identity."
    - title: "Antti Kupiainen, Rémi Rhodes, and Vincent Vargas, Integrability of Liouville theory: proof of the DOZZ formula, arXiv:1707.08785"
      url: https://arxiv.org/pdf/1707.08785
      locator: "§2.3, Theorem 2.4 (probabilistic three-point/DOZZ identity); §5.2 opening of its proof. The proof continues through §§5–11 and is reconstructed by the declared local probabilistic DOZZ supplier."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the probabilistic Liouville sphere correlation, DOZZ structure constant, and spherical Virasoro blocks defined earlier on this page, let $0<\gamma<\sqrt2$, $\mu>0$, $Q=2/\gamma+\gamma/2$, and let $\alpha_1,\ldots,\alpha_4\in\mathbb R$ satisfy $\alpha_i<Q$, $\alpha_1+\alpha_2>Q$, and $\alpha_3+\alpha_4>Q$. For distinct sphere insertions $(0,z,1,\infty)$ with $0<|z|<1$, the published Liouville theorem asserts

$$\left\langle V_{\alpha_1}(0)V_{\alpha_2}(z)V_{\alpha_3}(1)V_{\alpha_4}(\infty)\right\rangle_{\gamma,\mu}=\frac{1}{8\pi}\int_0^\infty C^{\mathrm{DOZZ}}_{\gamma,\mu}(\alpha_1,\alpha_2,Q-iP)C^{\mathrm{DOZZ}}_{\gamma,\mu}(\alpha_3,\alpha_4,Q+iP)|z|^{2(\Delta_{Q+iP}-\Delta_{\alpha_1}-\Delta_{\alpha_2})}|F_P(z)|^2\,dP.$$

The equality is restricted to this sphere four-point domain. It makes no assertion for $\gamma\ge\sqrt2$, either pair sum at or below $Q$, other insertion counts, or higher-genus surfaces.

## Statement references

[[def-cft-r5-liouville-probabilistic-sphere-model]]

[[def-cft-r5-liouville-dozz-constant]]

[[def-cft-r5-liouville-spherical-conformal-blocks]]

[[def-virasoro-highest-weight-module]]

## Facts & Assumptions

**Given:** Exactly the full real-charge and coordinate hypotheses in the unchanged Statement.

[F1] [[def-cft-r5-liouville-probabilistic-sphere-model]]: the actual dc-normalized sphere correlation, weights and Seiberg conditions.

[F2] [[def-virasoro-highest-weight-module]]: the highest-vector and Virasoro descendant convention.

[F3] [[def-cft-r5-liouville-dozz-constant]]: the exact defined DOZZ candidate with its positive-base power.

[F4] [[def-cft-r5-liouville-spherical-conformal-blocks]]: the real Shapovalov matrices, ordered descendant vectors and formal coefficients $β_{n}(P)$.

[F5] [[def-cft-r5-liouville-radial-hamiltonian-data]]: the corrected conditional disk interaction and the exact radial initial core.

[F6] [[thm-cft-r5-radial-liouville-poisson-spectral-resolution]]: the actual complete incoming-amplitude-one spectral resolution over $P>0$, measure dP/(2π), and positive finite-level Gram matrices outside a countable exception set.

[F7] [[lem-cft-r5-liouville-charged-ward-and-radial-overlaps]]: actual charged correlations, Möbius covariance, strict-interior reflected factorization, weighted disk vectors and all finite-descendant Ward overlaps.

[F8] [[thm-cft-r5-probabilistic-dozz-three-point-identity]]: the full actual probabilistic DOZZ three-point identity and primary boundary coefficient $p_{ab}(P)=D(a,b,Q−iP)/2$, including rational parameters.

## Proof

1.1 **Notation.** Put $a_{i}=α_{i}, d_{i}=Δ_{α_{i}}, A=d₁+d₂, B=d₃+d₄$ and $h(P)=(Q^{2}+P^{2})/4$. The pair-sum and individual upper bounds imply $0<a_{i}<Q$. No conditional source input is added to the Statement. [F1, F2, F3, F4, F5, F6, F7, F8, construct, algebra]

2.1 **A1. Choose the seam strictly between the insertions.** Fix $|z|<R<1$, put $w=z/R$ and $r=R$. Möbius scaling with the usual insertion-at-infinity normalization gives [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, construct, algebra]

3.1 $C(0,z,1,∞)=R^{-2(d₁+d₂+d₃−d₄)} C(0,z/R,1/R,∞)$. [F1, F2, F3, F4, F5, F6, F7, F8, step 2.1, construct, algebra]

4.1 The exact reflected conditional factorization at exterior radius 1/R gives [F1, F2, F3, F4, F5, F6, F7, F8, step 3.1, construct, algebra]

5.1 $C(0,z,1,∞)=R^{2(B−A)} ⟨U_{a₁,a₂}(0,w),U_{a₄,a₃}(0,r)⟩_{H}$. (19) [F1, F2, F3, F4, F5, F6, F7, F8, step 4.1, construct, algebra]

6.1 Both vectors are strictly interior. In particular no passage of U(0,r) to $r=1$ is involved. This is a change of seam in the same correlation, not a restriction of its Statement or an extra limit assumption. [F1, F2, F3, F4, F5, F6, F7, F8, step 5.1, construct, algebra]

7.1 **A2. Actual positive Gram matrices and two Parseval majorants.** At a nonexceptional P, the oscillator polynomials $Q_{P,\nu }$ at each chiral level form a basis of their finite-dimensional Gaussian space, by the actual descendant-to-oscillator transformation in F6. For every nonzero coefficient vector $x$, $x^*G_n(P)x$ is exactly $||\sum _{\nu } x_{\nu } Q_{P,\nu }||^{2}$ and is strictly positive. Gaussian integration by parts gives $L_{n}^*=L_{-n}$; commuting positive modes to the highest vector identifies this Gram matrix with the real symmetric Shapovalov matrix of F4 with highest norm one. It is not assigned a positive sign by the formal block definition. The transformation determinant is a nonzero polynomial at each level, so the union of its finite real-P zero sets over levels is null. F6's complete positive oscillator resolution transports through these finite basis changes, inserting $G_{n}^{-1}$ in each chiral factor and retaining dP/(2pi). Sphere-to-vector factorization is separately supplied by F7's actual Markov/reflection construction; neither positivity argument assumes the bootstrap formula being proved. [F1, F2, F3, F4, F5, F6, F7, F8, step 6.1, construct, algebra]

8.1 Let $v_{12,n}$ and $v_{43,n}$ denote the real descendant vectors defined in the actual block Definition, and write [F1, F2, F3, F4, F5, F6, F7, F8, step 7.1, construct, algebra]

9.1 $q_{12,n}=v_{12,n}^{T}G_{n}^{-1}v_{12,n}≥0, q_{43,n}=v_{43,n}^{T}G_{n}^{-1}v_{43,n}≥0, β_{n}=v_{12,n}^{T}G_{n}^{-1}v_{43,n}$. [F1, F2, F3, F4, F5, F6, F7, F8, step 8.1, construct, algebra]

10.1 Positive-matrix Cauchy–Schwarz gives $|\beta_n|\le\sqrt{q_{12,n}q_{43,n}}$. Put [F1, F2, F3, F4, F5, F6, F7, F8, step 9.1, construct, algebra]

11.1 $A_{12}(t,P)=\sum _{n≥0}q_{12,n}(P)t^{2n}, A_{43}(t,P)=\sum _{n≥0}q_{43,n}(P)t^{2n}$. [F1, F2, F3, F4, F5, F6, F7, F8, step 10.1, construct, algebra]

12.1 These are initially monotone extended-valued series. The primary $p_{a,b}(P)$ is nonzero for almost every P independently of DOZZ. To see this, use the level-zero analytic Poisson family and its FK pairing. At real internal charge u with $2Q−a−b<u<Q$, the actual three-point GMC formula is finite and strictly positive (its zero-mode Gamma factor and positive charged chaos inverse moment are positive). Thus this analytic primary family is not identically zero. The exact spectral interface (S8), followed by (S4), continues it meromorphically through each positive-real P interval away from the discrete oscillator thresholds; part S5 of [F6] excludes real nonthreshold poles. Pairing with the exponentially weighted U preserves this local holomorphy, choosing the weight smaller than a+b−Q. Zeros on each such interval are isolated unless the analytic function vanishes identically, which is excluded by connected continuation to that real Seiberg interval. Countably many compact intervals and thresholds therefore give a measure-zero zero/exception set. This uses analytic uniqueness, not a conjectured nonzero scattering coefficient. [F1, F2, F3, F4, F5, F6, F7, F8, step 11.1, construct, algebra]

13.1 The positive spectral resolution of $||U_{12}(w)||^{2}$, after inserting the finite-level Ward identities, gives by monotone convergence [F1, F2, F3, F4, F5, F6, F7, F8, step 12.1, construct, algebra]

14.1 $\int _{0}^∞ |p_{12}(P)|^{2} |w|^{4(h−A)} A_{12}(|w|,P)^{2} dP/(2π)=||U_{12}(w)||^{2}$, (20) [F1, F2, F3, F4, F5, F6, F7, F8, step 13.1, construct, algebra]

15.1 and analogously [F1, F2, F3, F4, F5, F6, F7, F8, step 14.1, construct, algebra]

16.1 $\int _{0}^∞ |p_{43}(P)|^{2} R^{4(h−B)} A_{43}(R,P)^{2} dP/(2π)=||U_{43}(R)||^{2}$. (21) [F1, F2, F3, F4, F5, F6, F7, F8, step 15.1, construct, algebra]

17.1 The squares in (20) are finite-dimensional norm contractions before they are infinite series. On a rectangular left/right cutoff $(n,\widetilde n)\le K$, the Ward coordinates of U have the tensor vector $v_{12,n} \otimes  v_{12,\widetilde n}$, and its inverse tensor Gram contraction is the nonnegative product $q_{12,n}q_{12,\widetilde n}$. Summing gives $(\sum _{n\le K}q_{12,n}|w|^{2n})^{2}$. These cutoff diagonal spectral integrals are nonnegative. The total-level cutoff $n+\widetilde n\le K$ is contained in that rectangle, which is contained in $n+\widetilde n\le 2K$; thus their monotone limits agree with the complete positive resolution in F6. The same applies to U43. Both norms are finite by the actual strict-interior reflected/weighted vector construction in F7, not by a formal assertion of reflection positivity in the sphere Definition. This proves the exact two Parseval majorants used for every later interchange. [F1, F2, F3, F4, F5, F6, F7, F8, step 16.1, construct, algebra]

18.1 Thus the functions [F1, F2, F3, F4, F5, F6, F7, F8, step 17.1, construct, algebra]

19.1 $f(P)=|p_{12}(P)||w|^{2(h−A)} A_{12}(|w|,P), g(P)=|p_{43}(P)|R^{2(h−B)} A_{43}(R,P)$ [F1, F2, F3, F4, F5, F6, F7, F8, step 18.1, construct, algebra]

20.1 belong to L²(dP/(2π)), with the usual convention that the weighted sum is defined as its monotone limit even where a primary coefficient vanishes. Hence fg is integrable. This is the actual spectral domination, obtained before identifying the primary function. [F1, F2, F3, F4, F5, F6, F7, F8, step 19.1, construct, algebra]

21.1 **A3. Absolute block sums and all exchanges.** Where both unweighted A-series are finite, weighted Cauchy–Schwarz in the level index gives [F1, F2, F3, F4, F5, F6, F7, F8, step 20.1, construct, algebra]

22.1 $\sum _{n} |β_{n}(P)||z|^{n} =\sum _{n} |β_{n}(P)||w|^{n} R^{n} \le\sqrt{A_{12}(|w|,P) A_{43}(R,P)}$. (22) [F1, F2, F3, F4, F5, F6, F7, F8, step 21.1, construct, algebra]

23.1 The absolute double descendant sum is bounded by $A_{12}(|w|,P)A_{43}(R,P)$. After multiplication by the primary factors and the radial powers, its majorant is precisely fg. Thus Tonelli applied to the absolute scalar terms and dominated convergence justify, together, arbitrary exhaustion of descendant levels, removing the finite P cutoffs, and factoring the two chiral series. The matrices and vectors are real, so $β_{n}$ is real and the second chiral factor is the conjugate of the first. The result is $|F_{P}(z)|^{2}$. [F1, F2, F3, F4, F5, F6, F7, F8, step 22.1, construct, algebra]

24.1 Precisely, (20) controls pA, rather than A alone; the analytic nonvanishing argument in part A2 shows p≠0 almost everywhere, so (20)–(22) already imply convergence of the ordinary unweighted block series for almost every P. No probabilistic DOZZ theorem is needed for this convergence step. To obtain convergence on the whole disk on a common full-measure P set, apply this argument on countably many choices of positive $|w|,R<1$ with product tending to 1. Every $|z|<1$ is smaller than some such product; coefficients are independent of R and the upper bound gives absolute convergence there. For each of these countably many radius choices the convergence failures form a null set by (20)–(22). Their countable union, together with the Gram and primary-zero exceptions, is null; choose any values for the integrand there, since the Lebesgue integral is unchanged by modifying a null set. [F1, F2, F3, F4, F5, F6, F7, F8, step 23.1, construct, algebra]

25.1 For any finite terms in the resolution, the radial factors in (19) multiply to [F1, F2, F3, F4, F5, F6, F7, F8, step 24.1, construct, algebra]

26.1 $R^{2(B−A)} |z/R|^{2(h−A)} R^{2(h−B)}=|z|^{2(h−A)}$. [F1, F2, F3, F4, F5, F6, F7, F8, step 25.1, construct, algebra]

27.1 Equal-level contractions contribute $(z/R)^{n}R^{n}=z^{n}$ and its antiholomorphic conjugate. Therefore the fully justified spectral identity is [F1, F2, F3, F4, F5, F6, F7, F8, step 26.1, construct, algebra]

28.1 $C(0,z,1,∞) = 1/(2π)\int _{0}^∞ p_{12}(P)\overline{p_{43}(P)} |z|^{2(h(P)−A)}|F_{P}(z)|^{2}$ dP. (23) [F1, F2, F3, F4, F5, F6, F7, F8, step 27.1, construct, algebra]

29.1 The orientation of the bra/ket is the one in the actual bootstrap A2. It fixes $p_{12}$ at Q−iP and its conjugate at Q+iP, rather than guessing a reflection coefficient. Cauchy–Schwarz also bounds the absolute integral by [F1, F2, F3, F4, F5, F6, F7, F8, step 28.1, construct, algebra]

30.1 $R^{2(B−A)} ||U_{12}(z/R)|| ||U_{43}(R)||$. [F1, F2, F3, F4, F5, F6, F7, F8, step 29.1, construct, algebra]

31.1 This proves the required integrability locally for each z and each admissible R, independently of any pointwise asymptotic estimate for DOZZ. It also shows that the final expression is independent of the choice of seam. The domination can also be made uniform on every compact annulus $δ≤|z|≤r_{0}<1$. Choose $r_{0}<R<1$ and $t=r_{0}/R$. Monotonicity gives $A_{12}(|z|/R,P)≤A_{12}(t,P)$, and, since h(P)≥Q²/4, the ratio $(|z|/(Rt))^{2(h(P)−A)}$ is bounded above by a constant depending only on δ,r₀,A,Q. The same fixed Parseval functions at t and R therefore dominate the absolute integrands throughout that annulus. This justifies locally uniform integral limits and prevents a hidden dependence of the null set or majorant on the chosen z. [F1, F2, F3, F4, F5, F6, F7, F8, step 30.1, construct, algebra]

32.1 **A4. Exact primary normalization from the completed probabilistic theorem.** The probabilistic primary uses the actual sphere zero-mode measure dc. The completed probabilistic DOZZ theorem and the primary identification in [F8] supply [F1, F2, F3, F4, F5, F6, F7, F8, step 31.1, construct, algebra]

33.1 $p_{a,b}(P)=\tfrac12 C^{\mathrm{DOZZ}}_{γ,μ}(a,b,Q−iP)$ (24) [F1, F2, F3, F4, F5, F6, F7, F8, step 32.1, construct, algebra]

34.1 and its boundary continuation in this external pair-sum domain. The factor 1/2 is required: the KRV three-point measure uses 2dc and yields $C_{\mathrm{DOZZ}}$, whereas this source uses dc. The spectral supplier integrates **$P>0$ only**, with its reflected incoming/outgoing wave already encoded in each scattering state, and incoming amplitude one. Its resolution measure is dP/(2π); it is not a full-real-line integral to be divided again by two. Therefore (23) and (24) give [F1, F2, F3, F4, F5, F6, F7, F8, step 33.1, construct, algebra]

35.1 $(1/(2π))·(1/2)·(1/2)=1/(8π)$, [F1, F2, F3, F4, F5, F6, F7, F8, step 34.1, construct, algebra]

36.1 exactly the public prefactor. The second factor is $C_{\mathrm{DOZZ}}(a₄,a₃,Q+iP)=C_{\mathrm{DOZZ}}(a₃,a₄,Q+iP)$ by symmetry. No external physical normalization or further reflection multiplier is inserted. [F1, F2, F3, F4, F5, F6, F7, F8, step 35.1, construct, algebra]

37.1 The actual BPZ/fusion, reflected/dual shifts and uniqueness construction are now completed in that separate theorem. Equation (24) is consequently a derived primary interface, not a pending assumption. The present argument and that theorem together supply the full unchanged bootstrap claim; [F1, F2, F3, F4, F5, F6, F7, F8, step 36.1, construct, algebra]

38.1 **A5. The nonvanishing needed to identify ordinary blocks.** This is an elementary property of the explicitly defined special function, not a probabilistic DOZZ identification. On $0<Re u<Q$ the defining integral gives $\Upsilon(u)=\exp(\text{holomorphic integral})$, so Υ has no zero there. Its two real shifts move any nonreal u into that strip in finitely many steps; the shift coefficients are finite and nonzero at nonreal arguments. One can check the latter directly from Euler's product $1/Γ(u)=u e^{γ_{E}u}\prod _{n≥1}(1+u/n)e^{-u/n}$: its locally uniformly convergent product has zeros only at $u=0,−1,…$ and no others. For completeness its finite-product limit follows by integrating B(u,N+1) by parts to get N!/[u(u+1)…(u+N)], then substituting $t=v/N$ in its beta integral to obtain $N^{u} B(u,N+1)→Γ(u)$ for $Re u>0$ by domination. Expanding $\log (1+u/n)−u/n=O_{K}(n^{-2})$ and using convergence of $\sum _{n≤N}1/n−\log  N$ yields the locally uniformly convergent displayed reciprocal product and its continuation. Thus Υ(u) is nonzero for every nonreal u, without requiring a full enumeration of its real zeros. [F1, F2, F3, F4, F5, F6, F7, F8, step 37.1, construct, algebra]

39.1 For real a,b∈(0,Q), $Υ(a),Υ(b)>0$. At the third charge Q−iP, $P>0$, its argument is nonreal. All four denominator arguments in the DOZZ expression have imaginary part ±P/2 and are therefore nonzero and finite under Υ. Finally Υ'(0)≠0: in the first shift relation let u→0; $ℓ(γu/2)(γ/2)^{1−γu}∼1/u$, while Υ(γ/2) is strictly positive by its strip integral, so Υ(u)∼uΥ(γ/2). The positive real base in the DOZZ power is nonzero because $0<γ^{2}/4<1$. Consequently $C_{\mathrm{DOZZ}}(a,b,Q−iP)$ is finite and nonzero for every $P>0$, This agrees with, but is not needed for, the almost-everywhere analytic nonvanishing used in part A2. [F1, F2, F3, F4, F5, F6, F7, F8, step 38.1, construct, algebra] ∎
