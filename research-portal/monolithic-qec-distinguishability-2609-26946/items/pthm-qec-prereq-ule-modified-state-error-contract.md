---
id: pthm-qec-prereq-ule-modified-state-error-contract
kind: physics-theorem
domain: physics
title: ULE residual bound and the modified-state distinction
status: draft
origin: session
deps:
  - pthm-qec-prereq-ule-jump-and-lamb-contract
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - lem-qec-author-4e9f1886ce3e-remote-preparation-limit
  - lem-qec-author-4e9f1886ce3e-ule-envelope-moments
  - lem-qec-author-4e9f1886ce3e-ule-modification-bound
  - lem-qec-author-4e9f1886ce3e-ule-modification-derivative
  - lem-qec-author-4e9f1886ce3e-ule-residual-composition
dependency_roles:
  pthm-qec-prereq-ule-jump-and-lamb-contract: physical-result
  def-qec-prereq-stationary-spectrum-kernel-contract: mathematical-premise
  lem-qec-author-4e9f1886ce3e-remote-preparation-limit: mathematical-premise
  lem-qec-author-4e9f1886ce3e-ule-envelope-moments: mathematical-premise
  lem-qec-author-4e9f1886ce3e-ule-modification-bound: mathematical-premise
  lem-qec-author-4e9f1886ce3e-ule-modification-derivative: mathematical-premise
  lem-qec-author-4e9f1886ce3e-ule-residual-composition: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Universal Lindblad equation for open quantum systems
      url: https://arxiv.org/pdf/2004.01469
      locator: PDF pp. 18–22, Appendix A, Eqs. (A21), (A25), (A31), (A35)–(A41),
        Appendix B, Eq. (B2); pp. 23–26, Appendix C, Eqs. (C1)–(C22), (C27),
        (C29)–(C31)
      statement: Under the same independent stationary Gaussian finite-channel
        remote-past preparation model, Appendix C states that the modified
        interaction-picture state has spectral-norm distance at most
        $\Gamma\tau$ from the exact reduced state at all times and ULE
        differential residual at most $2\Gamma^2\tau$. Equations (C7)–(C9)
        define the modification and distance bound; (C17)–(C22) and the
        conclusion on p.25 give the residual; (C23)–(C31) identify the ULE
        generator. Appendix A6 separately retains the finite-preparation BR tail
        $\Gamma\tau/(t-t_0)$.
      hypotheses: "Exactly the independent ULE model of the jump-construction
        supplier: finite-dimensional bounded system, finitely many normalized
        Hermitian system couplings, centered stationary Gaussian bath,
        factorized preparation in the remote-past source formulation, finite
        nonzero kernel zeroth moment and finite first moment, small Γτ for the
        approximation regime. No universal convergence or uniqueness of
        preparation families is asserted."
      reading_limits: Read the Appendix A speed, residual and preparation statements
        and all of Appendix C (PDF pp.23–26), inspecting PDF page images 23–25
        for the definitions and bounds. The exact original target agrees with
        the source statement under its remote-past preparation formulation. The
        microscopic Gaussian expansion is imported, not independently
        reconstructed. The source does not supply a general existence or
        uniqueness theorem for a remote-past reduced-state limit; none is
        claimed here. No simulations or article-specific bath applicability were
        verified.
    - title: "Erratum: Universal Lindblad equation for open quantum systems"
      url: https://journals.aps.org/prb/pdf/10.1103/PhysRevB.104.119901
      locator: PDF p.1, opening paragraph and corrected expressions (4)–(6)
      statement: The erratum corrects the adjoint jump expression and Lamb-kernel
        formulas, and explicitly states that the corrections do not affect the
        ULE derivation or its error bounds.
      hypotheses: The same independent ULE source model; use the corrected adjoint and
        Lamb conventions.
      reading_limits: Read both pages of the erratum text and inspected its first-page
        image. No independent numerical verification of its simulation
        corrections is claimed.
physical_scope: Conditional finite-dimensional Gaussian system–bath model with
  the source remote-past preparation formulation. No existence theorem for
  limiting preparation families or unchanged finite-preparation residual
  constant is asserted.
external_input: true
dependency_level: 5
---

## Statement

Under the independent ULE hypotheses define $\Gamma=4\gamma(\int\|g(t)\|_{2,1}dt)^2$ and $\tau_B=\int|t|\|g(t)\|_{2,1}dt/\int\|g(t)\|_{2,1}dt$. The source constructs a modified interaction-picture state within spectral-norm distance $\Gamma\tau_B$ of the exact reduced state; its ULE differential equation has residual bounded by $2\Gamma^2\tau_B$. Small $\Gamma\tau_B$ controls this approximation. A residual bound is not an all-time uniform bound between two trajectories obtained by dropping the residual.

## Facts & Assumptions

[F1] Retain exactly the independent ULE model and its remote-past preparation scope. [[pthm-qec-prereq-ule-jump-and-lamb-contract]]

[F2] Use the original spectral-kernel convention and finite moments. [[def-qec-prereq-stationary-spectrum-kernel-contract]]

[F3] Finite preparation retains its tail; only the residual budget tends to its remote-boundary value. [[lem-qec-author-4e9f1886ce3e-remote-preparation-limit]]

[F4] The scalar envelope has mass Γ/2 and first moment at most Γτ. [[lem-qec-author-4e9f1886ce3e-ule-envelope-moments]]

[F5] The quadrant modification has norm at most Γτ and generator marginals at most Γ/2. [[lem-qec-author-4e9f1886ce3e-ule-modification-bound]]

[F6] Continuous marginals give the derivative identity L−B. [[lem-qec-author-4e9f1886ce3e-ule-modification-derivative]]

[F7] The analytical modification gives residual R+Γ²τ, in particular 2Γ²τ when R=Γ²τ. [[lem-qec-author-4e9f1886ce3e-ule-residual-composition]]

## External input

Imported contract 1: Under the same stationary Gaussian, finite normalized coupling, finite kernel-moment and remote-past preparation model as the jump supplier, Appendix C constructs $\sigma=(I+M)\rho$ with $M(t)=\int_t^\infty ds\int_{-\infty}^t du[\mathcal G(s,u)-\mathcal G(u,s)]$, using the map kernel in (C2),(C4). It proves $\|\sigma-\rho\|\leq\Gamma\tau$ and $\dot\sigma=L\sigma+\eta$, $\|\eta\|\leq2\Gamma^2\tau$, where $L=\int\mathcal G(s,t)ds$ is the ULE generator. The source envelope is $q(v)=4\gamma k(-v)\int_{-\infty}^v k(-w)dw$, with $k(v)=\|g(v)\|_{2,1}$ and $\|\mathcal G(t,s)\|\leq q(t-s)$. Exact source: [Nathan–Rudner](https://arxiv.org/pdf/2004.01469), PDF p.23 opening and (C1)–(C8); p.24 (C9)–(C22); p.25 residual conclusion; pp.25–26 (C23)–(C31). The microscopic bath-to-map interface and the remote-past BR input are imported rather than reconstructed.

Imported contract 2: The [erratum](https://journals.aps.org/prb/pdf/10.1103/PhysRevB.104.119901), PDF p.1 opening paragraph, states that its corrections do not affect the ULE derivation or error bounds. Corrections (4)–(6) fix the adjoint jump and Lamb conventions used for the generator identification.

## Source notes

The approved Statement is preserved verbatim. The five local analytical lemmas explicate the finite-preparation budget, envelope moments, modification norm, derivative identity and residual composition; they do not assert that any arbitrary preparation family converges. In particular, the source's remote-past idealization is retained as the imported contract's applicability condition. Appendix A6's tail estimate alone is not a proof of existence or uniqueness of a limiting exact state, and no additional $C^1$ convergence premise is silently imposed on the imported statement. The finite-preparation composition instead retains a residual budget $2\Gamma^2\tau+\Gamma\tau/(t-t_0)$ when the same analytical interface applies; the smaller constant is not asserted unchanged at finite $t_0$. The source calls its auxiliary operator a modified density matrix; these estimates use only its operator distance and residual and do not add positivity or trace-normalization claims. No defect in the article under study is asserted.
