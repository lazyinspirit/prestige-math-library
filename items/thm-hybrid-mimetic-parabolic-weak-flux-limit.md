---
id: thm-hybrid-mimetic-parabolic-weak-flux-limit
kind: theorem
title: "Computed hybrid mimetic states and numerical fluxes converge to monotone
  diffusion"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    lem-hybrid-mimetic-backward-euler-energy-and-compactness,
    lem-fv-conforming-companion-and-test-recovery,
    def-pe12-monotone-diffusion-flux,
    lem-pe12-minty-identification,
    lem-pe12-evolution-energy-chain-rule,
    lem-mimetic-fv-parabolic-limit-identification,
    thm-holder-inequality-for-integrals,
    def-axiom-of-choice,
    thm-reflexivity-of-lp-for-one-less-p-less-infinity,
    cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence,
    thm-c-c-infinity-rn-is-dense-in-l-p-of-rn
  ]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
axiom_use: "Assume the Axiom of Choice for Sobolev compactness, weak
  subsequences and Bochner integration."
sources:
  references:
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations:
        introduction to and review of modern methods, 2014"
      url: https://arxiv.org/pdf/1407.1567
      locator: "Complete 38-page PDF retrieved and extracted; inspected section 1.2
        and sections 4–4.1. The explicit companion construction and parabolic
        proof are supplied locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Under exactly the hypotheses of [[lem-hybrid-mimetic-backward-euler-energy-and-compactness]], the computed cell states converge, along a subsequence, to a weak evolution solution $u$ of $u_t-\operatorname{div}(a(x,\nabla u))=f$, $u(0)=u_0$, in the sense of [[def-pe12-monotone-diffusion-flux]]. In addition to the strong state convergences in that lemma, the actual constitutive fields
$$q_h(t,x)=a(x,G_KU_h^n)\quad(t\in(t_{n-1},t_n],\ x\in K)$$
converge weakly in $L^{p'}(Q)$ to $a(x,\nabla u)$, and
$$\int_Qq_h\cdot G_h\overline U_h\longrightarrow\int_Qa(x,\nabla u)\cdot\nabla u,\qquad \sum_n\tau_n S_{h,p}(U_h^n)^p\longrightarrow0.$$
The final cell states converge strongly to $u(T)$ in $H$.

This includes convergence of a physical reconstruction of the actual numerical face fluxes. Let $r_{K,F}=x_F-x_K$, $s_{K,F}^n=\alpha_{0,K}|F|d_{K,F}^{1-p}\psi_p(\rho_{K,F}(U_h^n))$, $b_K^n=b_K(G_KU_h^n)$, and $c_K^n=|K|^{-1}\sum_Fs_{K,F}^nr_{K,F}$. On the physical pyramid $P_{K,F}$ with vertex $x_K$ and base $\overline F$ set
$$q_h^{\rm num}=b_K^n-c_K^n+\frac{s_{K,F}^n}{|F|}n_{K,F}.$$
Then $-|F|q_h^{\rm num}|_{P_{K,F}}\cdot n_{K,F}=Q_{K,F}^{\rm nl}(U_h^n)$ exactly, $q_h^{\rm num}-b_h\to0$ strongly in $L^{p'}(Q)$, with $b_h|_K=b_K^n$, and $q_h^{\rm num}\rightharpoonup a(x,\nabla u)$ in $L^{p'}(Q)$. No strong convergence of $G_h\overline U_h$ is inferred from mere monotonicity.

Finally the hypotheses of [[lem-mimetic-fv-parabolic-limit-identification]] can be supplied on this same subsequence by conforming limit recovery: take $w_h=u$ and $\widetilde q_h=a(x,\nabla w_h)=a(x,\nabla u)$. These are post-limit conforming functions, distinct from the computed companions $E_h\overline U_h$, constitutive fields $q_h$, and numerical fluxes $q_h^{\rm num}$. The computed convergence assertion above is established independently of this recovery observation.

## Facts & Assumptions

**Given:** AC and exactly the mesh, stabilization, time, exponent, flux, data and initialization hypotheses in the energy/compactness lemma.

[F1] [[lem-hybrid-mimetic-backward-euler-energy-and-compactness]] proves step existence, uniform energy and dual-time-derivative bounds, strong cell-state convergence in $L^r(H)$ for every finite $r$ and in $L^p(Q)$, and weak $G_h\overline U_h\rightharpoonup\nabla u$ with $u\in L^p(V)\cap L^\infty(H)$.

[F2] [[lem-fv-conforming-companion-and-test-recovery]] gives bounded mean tests, $G_hI_h\varphi\to\nabla\varphi$ uniformly and $S_{h,p}(I_h\varphi)=O(h)$ for smooth compactly supported spatial tests. [[def-pe12-monotone-diffusion-flux]] gives growth and pointwise monotonicity.

[F3] [[lem-pe12-evolution-energy-chain-rule]] gives a continuous $H$ representative and the exact energy identity for a $V$-valued limit with derivative in $L^{p'}(V^*)$. [[lem-pe12-minty-identification]] identifies a weak constitutive-field limit from the weak gradients and the flux-energy limsup.

[F4] [[lem-mimetic-fv-parabolic-limit-identification]] applies to bounded open domains, conforming reconstructions and its explicitly stated residual/limsup hypotheses. Hölder estimates used below are [[thm-holder-inequality-for-integrals]].

[F5] [[thm-reflexivity-of-lp-for-one-less-p-less-infinity]] and [[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]] supply weak subsequences of bounded $L^r$ fields for $1<r<\infty$ under AC (coordinatewise for vector fields).

[F6] Assuming Countable Choice, $C_c^\infty(\mathbb R^{d+1})$ is dense in $L^p(\mathbb R^{d+1})$. Extending functions on $Q$ by zero and restricting smooth approximants shows that their restrictions are dense in $L^p(Q;\mathbb R^d)$, coordinatewise ([[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]]). AC supplies Countable Choice by restricting its choice-function assertion to countable families ([[def-axiom-of-choice]]).

## Proof

1.1 Use [F1] to extract the strong cell-state and weak-gradient subsequence. Growth gives $\|q_h\|_{L^{p'}(Q)}\le C(\|g\|_{L^{p'}(Q)}+\|G_h\overline U_h\|_{L^p(Q)}^{p-1})$, so reflexive weak compactness gives $q_h\rightharpoonup q$ along a further subsequence. The cell averages $b_h$ have the same weak limit: for a smooth vector test $\phi$, $\int(q_h-b_h)\cdot\phi=\sum_{n,K}\int_{I_n\times K}q_h\cdot(\phi-\phi_K)$, whose absolute value is $O(h)\|q_h\|_{p'}\|\nabla_x\phi\|_\infty$. The averages are bounded by Jensen, and [F6] extends this identification from smooth tests to all dual tests. [F1, F2, F4, F5, F6, given, algebra]


2.1 Let $\varphi\in C_c^\infty([0,T)\times\Omega)$. In each step test by $I_h\varphi(t_{n-1})$ and sum after multiplying by $\tau_n$. The gradient part equals $\sum_n\int_{I_n\times\Omega}q_h\cdot G_hI_h\varphi(t_{n-1})$, and replacing the last factor by $\nabla\varphi(t,x)$ costs $O(h+\delta_h)\|q_h\|_{p'}$, by smoothness and [F2]. Weighted Hölder bounds the entire stabilization part by $C\|S_{h,p}(\overline U_h)\|_{L^p}^{p-1}\|S_{h,p}(I_h\varphi(t_{n-1}))\|_{L^p}=O(h)$. Since the test cell values are exact means, discrete summation by parts in the mass term is exact. In fact the summed mass term equals $-\int_Q\Pi_h\overline U_h\partial_t\varphi-\int_\Omega\Pi_hU_h^0\varphi(0)$ exactly, since $\varphi(T)=0$ and the increment $\varphi(t_n)-\varphi(t_{n-1})$ equals its time-derivative integral on each interval. The load converges to $\int_Qf\varphi$: because its cell/time means pair exactly with a cell/time constant test, replacing that test by $\varphi$ costs $O(h+\delta_h)\|f\|_{p'}$. Consequently the actual computed fields satisfy $$-\int_Q\Pi_h\overline U_h\partial_t\varphi+\int_Qq_h\cdot\nabla\varphi-\int_Qf\varphi-\int_\Omega u_0\varphi(0)\longrightarrow0.$$ Passing to the limit gives the corresponding identity with $u,q$. This proves vanishing smooth-test residuals directly from the scheme. [F1, F2, F4, step 1.1, algebra]


3.1 The limiting identity gives $u'=f+\operatorname{div}q\in L^{p'}(0,T;V^*)$, since $|\int fz-q\cdot\nabla z|\le(C_P\|f\|_{p'}+\|q\|_{p'})\|z\|_V$. Density of smooth compactly supported functions in $V$ extends the derivative identity to all $V$ tests. Together with [F1], [F3] gives $u\in C([0,T];H)$. Scalar integration by parts in the limiting identity with tests $\theta(t)z(x)$ identifies $(u(0),z)_H=(u_0,z)_H$ for every smooth compactly supported $z$, hence $u(0)=u_0$. Its energy identity before flux identification is $$\frac12\|u(T)\|_H^2-\frac12\|u_0\|_H^2=\int_Qfu-\int_Qq\cdot\nabla u.$$ [F1, F3, F4, step 2.1, algebra]


4.1 The affine interpolated scalar pairings $(\widehat{\Pi_hU_h}(t),z)_H$ for $z\in V$ have uniformly bounded $L^{p'}$ derivatives and uniform $H$ bounds by [F1]. They are equicontinuous with modulus $C_z|t-s|^{1/p}$, and their distance from the piecewise constant pairings is at most $C_z\delta_h^{1/p}$. Strong time-integrated state convergence identifies their uniform limit as $(u(t),z)_H$; finite-grid compactness followed by uniqueness of this limit justifies taking the uniform limit. At $T$ their values are $(\Pi_hU_h^{N_h},z)_H$. Density of $V$ in $H$ and the uniform terminal bound give $\Pi_hU_h^{N_h}\rightharpoonup u(T)$ in $H$. In particular $\|u(T)\|_H^2\le\liminf_h\|\Pi_hU_h^{N_h}\|_H^2$. [F1, F3, step 3.1, algebra]


5.1 Testing each step by its own state and summing gives the exact identity $$\frac12\|\Pi_hU_h^{N_h}\|_H^2+\frac12\sum_n\|\Pi_h(U_h^n-U_h^{n-1})\|_H^2+\int_Qq_h\cdot G_h\overline U_h+\sum_{n,K,F}\tau_n\alpha_{0,K}|F|d_{K,F}^{1-p}|\rho_{K,F}(U_h^n)|^p=\frac12\|\Pi_hU_h^0\|_H^2+\int_Qf\Pi_h\overline U_h.$$ The load equality uses that the state is constant on each space-time cell. Its limit is $\int fu$ by strong $L^p(Q)$ convergence. The initial norms converge strongly, and all the jump and stabilization terms are nonnegative. Step 4.1 and the energy identity in step 3.1 therefore give $\limsup_h\int_Qq_h\cdot G_h\overline U_h\le\int_Qq\cdot\nabla u$. Thus [F3] applies to the actual computed $G_h\overline U_h$ and $q_h=a(x,G_h\overline U_h)$, yielding $q=a(x,\nabla u)$ almost everywhere. Steps 2.1–3.1 now give exactly the claimed weak evolution solution. [F1, F2, F3, step 1.1, step 3.1, step 4.1, algebra]


6.1 Pointwise monotonicity compared with the fixed field $\nabla u$ gives $0\le\int_Q(q_h-a(x,\nabla u))\cdot(G_h\overline U_h-\nabla u)$. Expanding and passing through the three weakly linear terms gives $\liminf_h\int q_h\cdot G_h\overline U_h\ge\int q\cdot\nabla u$, because $q=a(x,\nabla u)$. Together with step 5.1 this proves energy convergence. In the exact discrete identity of step 5.1 the right side converges, the flux term now converges, and the terminal norm has the stated lower bound. Hence the sum of the nonnegative jump and stabilization terms tends to zero, and the terminal norms converge to $\|u(T)\|_H$. Weak terminal convergence plus convergence of norms in the real Hilbert space gives strong terminal convergence. The lower bound $\alpha_{0,K}\ge\underline\alpha$ proves $\sum_n\tau_nS_{h,p}(U_h^n)^p\to0$. [F2, F3, step 4.1, step 5.1, algebra]


7.1 For a local face basis, $G_K\phi_{K,F}=|F|n_{K,F}/|K|$ and $\rho_{K,E}(\phi_{K,F})=\mathbf1_{E=F}-(|F|/|K|)n_{K,F}\cdot r_{K,E}$. Substitution into the defined spatial form gives $Q_{K,F}^{\rm nl}=-|F|(b_K-c_K)\cdot n_{K,F}-s_{K,F}$, exactly the stated normal trace of $q_h^{\rm num}$. Pyramid volumes are $|F|\operatorname{dist}(x_K,\operatorname{aff}F)/d\asymp |F|h$, by the shape-regular fan geometry. Since $d_{K,F}\asymp h$, weighted finite-sum Hölder and the bounded face count give $$\int_Q|q_h^{\rm num}-b_h|^{p'}\le C\sum_{n,K,F}\tau_n|F|h^{1-p}|\rho_{K,F}(U_h^n)|^p\le C\sum_n\tau_n S_{h,p}(U_h^n)^p.$$ Indeed the $s_{K,F}/|F|$ term contributes $|F|h(h^{1-p}|\rho|^{p-1})^{p'}=|F|h^{1-p}|\rho|^p$, and $c_K=|K|^{-1}\sum_Fs_{K,F}r_{K,F}$ has the same bound after summing its cell volume. Step 6.1 proves strong vanishing of this difference. Step 1.1 gives $b_h\rightharpoonup q$, so the full numerical reconstruction converges weakly to the asserted physical flux. It need not be continuous across internal pyramid interfaces; the result asserts exactly its physical face normal values and its $L^{p'}$ weak convergence. [F1, F2, step 1.1, step 6.1, algebra]


8.1 The weak evolution solution already established above belongs to $L^p(V)\cap L^\infty(H)$. Set $w_h=u$ on the extracted sequence and $\widetilde q_h=a(x,\nabla u)$. Strong computed-state convergence in [F1] gives $\|\Pi_h\overline U_h-w_h\|_{L^p(H)}\to0$. The conforming gradients and recovery fluxes are constant sequences, so their weak convergence and flux-energy limsup are equalities. Define the old lemma's residual using these recovery fluxes. Subtracting the exact weak equation for $u$ leaves just $-\int_Q(\Pi_h\overline U_h-u)\partial_t\varphi$, which tends to zero. Thus every old conditional hypothesis is fulfilled on the bounded open domain. This is an existential limit recovery, not a claim that the computed companion gradients converge strongly or that its nonlinear flux equals the numerical flux; steps 1.1–7.1 supplied the actual scheme closure first. [F1, F4, step 2.1, step 5.1, step 6.1, step 7.1, construct, algebra] ∎

