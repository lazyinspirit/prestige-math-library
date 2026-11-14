---
title: ULE jump construction under independent bath hypotheses
status: published
research_item: pthm-qec-prereq-ule-jump-and-lamb-contract
dependency_level: 4
sources:
  references:
    - title: Universal Lindblad equation for open quantum systems
      url: https://arxiv.org/pdf/2004.01469
      locator: PDF pp. 4–5, Sec. IIA1; pp. 9–10, Sec. IIIC–IVA, Eqs. (24)–(29),
        (32)–(33); pp. 16–18, Appendix A opening and A1–A2, Eqs. (A2)–(A3),
        signs following (A6), and (A9); p. 20, Appendix A4, defining expression
        in (A25); pp. 21–22, Appendix A6, (A38)–(A41); p. 22, Appendix B, (B2),
        unnumbered convolution identity immediately before (B4), and norm
        inequality (B4).
      statement: For a stationary Gaussian bath, finite normalized Hermitian
        couplings, factorized preparation in the remote past, and finite
        jump-kernel moments, the ULE has jumps (28), Lamb shift (29), and static
        jumps (33). Its kernel convention is
        $h(\omega)=\sqrt{J(\omega)/(2\pi)}$. At finite preparation time the BR
        tail in (A38) acting on the reduced density matrix has spectral norm at
        most $\Gamma\tau/(t-t_0)$ for $t>t_0$; this is negligible relative to
        $\Gamma^2\tau$ when $t-t_0\gg\Gamma^{-1}$. The integrand is specifically
        the Born superoperator defined in (A25), using the left/right
        multiplication maps (A2), signs ν_l=1 and ν_r=−1, and bath superoperator
        correlations (A9); its norm is the spectral-induced superoperator norm
        (A3).
      hypotheses: Finite-dimensional bounded system, finitely many Hermitian couplings
        of norm at most one; centered stationary Gaussian bath (higher
        correlation functions determined by Wick pairings of the two-point
        functions); initially factorized state at t0; remote-past formulation
        for the asymptotic ULE error contract; finite nonzero kernel zeroth
        moment and finite first moment; small dimensionless Γτ; static pointwise
        Fourier identities and principal-value existence where used.
      reading_limits: For this repair, read the retrieved PDF text of the Appendix A
        interaction-picture convention, left/right multiplication (A2),
        spectral-induced superoperator norm (A3), signs following (A6), bath
        superoperator correlations (A9), defining expression in (A25),
        finite-preparation tail (A38)–(A41), and Appendix B through (B11). Also
        read the coefficient and static-jump formulas (28)–(29), (32)–(33). The
        earlier source-review account of Gaussianity and remote-past preparation
        is retained; no fresh full microscopic derivation, model-specific
        Gaussianity verification, numerical replay, page-image inspection, or
        unchanged finite-preparation ULE residual constant is claimed. The tail
        estimate is imported directly, rather than inferred by applying the
        local strongly-measurable-tail lemma.
    - title: "Erratum: Universal Lindblad equation for open quantum systems"
      url: https://journals.aps.org/prb/pdf/10.1103/PhysRevB.104.119901
      locator: PDF p. 1, Corrected expressions (1), (2), (4), (5), (6)
      statement: The corrected static Lamb shift uses
        $f_{\alpha\beta}(E_l-E_m,E_n-E_l)$ and
        $f(E_1,E_2)=-2\pi\gamma\operatorname{PV}\int\omega^{-1}h(\omega-E_1)h(\omega+E_2)d\omega$;
        the time kernel is $h(u)h(-v)\operatorname{sgn}(u-v)$. The corrections
        do not change the ULE derivation or its error bounds.
      hypotheses: The same source model and Fourier convention as the original ULE
        paper; convergence or specified principal values of the expressions.
      reading_limits: For this repair, read the retrieved PDF text on both pages,
        including corrected expressions (1)–(2), (4)–(6) and the
        unchanged-derivation/error-bounds qualification. No page-image
        inspection, numerical replay, or independent verification of the
        simulation corrections is claimed.
external_input: true
---

## Prerequisites

- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)
- [lem-qec-author-42f4c98e5e20-ule-kernel-operators](item-lem-qec-author-42f4c98e5e20-ule-kernel-operators)
- [lem-qec-author-42f4c98e5e20-ule-bohr-reduction](item-lem-qec-author-42f4c98e5e20-ule-bohr-reduction)
- [lem-qec-author-42f4c98e5e20-ule-correlation-moment](item-lem-qec-author-42f4c98e5e20-ule-correlation-moment)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)
- [` Universal Lindblad equation for open quantum systems · PDF pp. 4–5, Sec. IIA1; pp. 9–10, Sec. IIIC–IVA, Eqs. (24)–(29), (32)–(33); pp. 16–18, Appendix A opening and A1–A2, Eqs. (A2)–(A3), signs following (A6), and (A9); p. 20, Appendix A4, defining expression in (A25); pp. 21–22, Appendix A6, (A38)–(A41); p. 22, Appendix B, (B2), unnumbered convolution identity immediately before (B4), and norm inequality (B4). `](https://arxiv.org/pdf/2004.01469)
- [` Erratum: Universal Lindblad equation for open quantum systems · PDF p. 1, Corrected expressions (1), (2), (4), (5), (6) `](https://journals.aps.org/prb/pdf/10.1103/PhysRevB.104.119901)


## Statement

Assume Countable Choice for the cited kernel-operator and static-jump constructions. For a finite-dimensional system, take $H=H_S(t)+H_B+\sqrt\gamma\sum_{\alpha=1}^nX_\alpha B_\alpha$, with Hermitian $X_\alpha,B_\alpha$, $\|X_\alpha\|\leq1$, $\gamma>0$, and units $\hbar=1$. Assume a centered stationary Gaussian bath: $[H_B,\rho_B]=0$, $\operatorname{Tr}(\rho_BB_\alpha)=0$, and bath correlation functions are determined by two-point correlations by Wick pairings. The preparation is $\rho_{SB}(t_0)=\rho_S(t_0)\otimes\rho_B$. For the ULE approximation use the source's remote-past formulation $t_0\to-\infty$, not arbitrary newly factorized preparation. Set $C_{\alpha\beta}(t-s)=\operatorname{Tr}_B(\widetilde B_\alpha(t)\widetilde B_\beta(s)\rho_B)$, with $\widetilde B_\alpha(t)=e^{iH_Bt}B_\alpha e^{-iH_Bt}$. Require the spectral and time-kernel regularity of the named kernel contract. Write its kernel as $h=g$, so $h(\omega)=\sqrt{J(\omega)/(2\pi)}$, $\Gamma=4\gamma(\int\|h(t)\|_{2,1}dt)^2$ and $\tau=\int|t|\|h(t)\|_{2,1}dt/\int\|h(t)\|_{2,1}dt$, and assume $\Gamma\tau\ll1$ as the weak Markov approximation regime.

With $U(t)$ the system propagator and $\widetilde X_\alpha(s)=U(s)^\dagger X_\alpha U(s)$, the imported ULE coefficients are $\widetilde L_\lambda(t)=\sqrt\gamma\sum_\alpha\int h_{\lambda\alpha}(t-s)\widetilde X_\alpha(s)ds$ and $\widetilde\Lambda(t)=\frac\gamma{2i}\sum_{\alpha\beta}\int\!\int\widetilde X_\alpha(s)\widetilde X_\beta(s')\phi_{\alpha\beta}(s-t,s'-t)ds\,ds'$, where $\phi(u,v)=h(u)h(-v)\operatorname{sgn}(u-v)$. These are the coefficients of a Lindblad-form approximation; this statement does not assert exact reduced dynamics satisfy a residual-free Lindblad equation.

For static $H_S|m\rangle=E_m|m\rangle$, assume the Fourier identities at the required Bohr frequencies and the principal values below exist. Then $L_\lambda=2\pi\sqrt\gamma\sum_{m,n,\alpha}h_{\lambda\alpha}(E_n-E_m)(X_\alpha)_{mn}|m\rangle\langle n|$. With the erratum's corrections, $\Lambda=\sum_{\alpha\beta,lmn}f_{\alpha\beta}(E_l-E_m,E_n-E_l)(X_\alpha)_{ml}(X_\beta)_{ln}|m\rangle\langle n|$, where $f(E_1,E_2)=-2\pi\gamma\operatorname{PV}\int_{-\infty}^{\infty}\omega^{-1}h(\omega-E_1)h(\omega+E_2)d\omega$.

For finite $t_0$ and $t>t_0$, the source separately bounds the BR preparation-tail correction acting on the reduced density matrix by $\|D_T(t)(\rho(t))\|\leq\Gamma\tau/(t-t_0)$, where the norm is the spectral operator norm and $D_T$ is the tail map defined in External input. For any $\varepsilon>0$, on an observation window $t\geq t_*>t_0$, the explicit sufficient condition $t_*-t_0\geq1/(\varepsilon\Gamma)$ ensures $\|D_T(t)(\rho(t))\|\leq\varepsilon\Gamma^2\tau$. This identifies a preparation condition; it does not transfer the source's exact remote-past ULE residual constant to finite preparation or provide an all-time trajectory error bound.

## Facts & Assumptions

[F1] Use the spectral matrix, principal-value definition and explicit convergence conditions. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F2] Use the kernel adjoint symmetry and rate identities in the source normalization. [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)

[F3] The operator convolutions exist and their Lamb operator is Hermitian. [lem-qec-author-42f4c98e5e20-ule-kernel-operators](item-lem-qec-author-42f4c98e5e20-ule-kernel-operators)

[F4] Static jumps reduce to the stated Bohr-frequency sum under pointwise inversion. [lem-qec-author-42f4c98e5e20-ule-bohr-reduction](item-lem-qec-author-42f4c98e5e20-ule-bohr-reduction)

[F5] The convolution correlation has first moment bounded by the normalized kernel moments. [lem-qec-author-42f4c98e5e20-ule-correlation-moment](item-lem-qec-author-42f4c98e5e20-ule-correlation-moment)

[F6] Use the density-matrix tail bound imported in External input 1, under that source model. For $\varepsilon>0$, $\Gamma>0$, $\tau\geq0$ and $t\geq t_*>t_0$ with $t_*-t_0\geq1/(\varepsilon\Gamma)$, it gives $\|D_T(t)(\rho(t))\|\leq\Gamma\tau/(t-t_0)\leq\Gamma\tau/(t_*-t_0)\leq\varepsilon\Gamma^2\tau$. This scalar comparison uses the imported bound directly and remains valid when $\tau=0$. [Universal Lindblad equation for open quantum systems](https://arxiv.org/pdf/2004.01469), Appendix A6, (A38)–(A41).

[F7] For the finite-dimensional system, $\rho_S(t_0)$ and the reduced $\rho(t)$ are density operators: non-negative endomorphisms with trace one. This finite-dimensional definition applies to the system states, without imposing a finite-dimensional restriction on the bath state $\rho_B$. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[A1] Assume Countable Choice for the kernel-operator construction in [F3] and the static Bohr reduction in [F4]. The imported microscopic model and its finite-preparation tail bound are retained under their stated hypotheses. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [lem-qec-author-42f4c98e5e20-ule-kernel-operators](item-lem-qec-author-42f4c98e5e20-ule-kernel-operators) [lem-qec-author-42f4c98e5e20-ule-bohr-reduction](item-lem-qec-author-42f4c98e5e20-ule-bohr-reduction)

## External input

Imported input 1: Nathan–Rudner's stationary Gaussian, normalized finite-channel model in its remote-past preparation formulation yields the coefficients (28)–(29) and static formula (33). Define $\Delta_B(t,s)$ by importing exactly the Born superoperator's defining expression in Appendix A4, Eq. (A25). The conventions included in this definition are left/right multiplication $\widehat A^l(M)=AM$, $\widehat A^r(M)=MA$ from (A2), $\nu_l=1$, $\nu_r=-1$ following (A6), and the bath superoperator correlations $J^{mn}_{\alpha\beta}(t-s)$ defined in (A9). The source's time-domain $J(t-s)$ is our $C(t-s)$, its system and bath operators in Appendix A are our interaction-picture $\widetilde X_\alpha$ and $\widetilde B_\alpha$, and its $g$ is our $h$. The definition retains the same system–bath model, normalized couplings, Gaussian correlations and factorized preparation hypotheses stated above; it does not infer this map from a norm bound. All superoperator norms here mean (A3), namely $\|T\|=\sup_{\|M\|\leq1}\|T(M)\|$ with spectral operator norms on matrices, and $\|A\|_{\mathrm{ent}}=\sum_{\alpha\beta}|A_{\alpha\beta}|$ is the source's entrywise norm. For finite $t_0$ and $t>t_0$, (A38) defines $D_T(t)=-\int_{-\infty}^{t_0}\Delta_B(t,s)ds$, and Appendix A6 gives $\|\Delta_B(t,s)\|\leq4\gamma\|C(t-s)\|_{\mathrm{ent}}$ and $\|D_T(t)(\rho(t))\|\leq\Gamma\tau/(t-t_0)$, the latter after (A41) using (B2). This imports the source-defined map and density-matrix estimate, including its existence in that model. The convolution identity immediately before (B4), the resulting norm inequality (B4), and moment relation (B2) apply in this model. Source: [Universal Lindblad equation for open quantum systems](https://arxiv.org/pdf/2004.01469), Sec. IIIC, (24)–(29), Sec. IVA, (33), Appendix A opening and A1–A2, (A2)–(A3), signs following (A6), (A9), Appendix A4, (A25), Appendix A6, (A38)–(A41), and Appendix B, (B2)–(B4). The microscopic derivation and finite-preparation tail bound are imported, not reconstructed here.

Imported input 2: The static Lamb formula and coefficient above use the corrected energy ordering, sign and coupling factor. Source: [Erratum](https://journals.aps.org/prb/pdf/10.1103/PhysRevB.104.119901), p. 1, corrected expressions (1)–(2), and the time-kernel correction (5). Principal-value existence remains an explicit hypothesis.

## Source notes

The four cited local lemmas establish kernel symmetry and rate identities, coefficient well-definedness, static evaluation and the correlation-moment estimate. The finite-preparation tail bound is imported directly from Appendix A6, and [F6] gives its scalar waiting-time consequence. They do not reconstruct the microscopic ULE derivation. The supplier and source use the same convention, $h(\omega)=g(\omega)=\sqrt{J(\omega)/(2\pi)}$; the new letter only distinguishes frequency and time-kernel notation in these intermediate lemmas. The static Lamb formula follows the independently read erratum. No Gaussianity, factorization, memory bound or weak-coupling regime for a particular photon model follows merely from its vocabulary or spectral cutoff.
