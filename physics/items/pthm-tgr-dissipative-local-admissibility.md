---
id: pthm-tgr-dissipative-local-admissibility
kind: physics-theorem
title: Conditional gradient-model entropy production
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 8
proof_strategy: direct
deps:
  - post-tgr-first-order-dissipation
  - lem-tgr-dissipative-entropy-identity
  - post-tgr-local-entropy-admissibility
  - def-tgr-local-fluid-state
  - def-tgr-framework-units
  - lem-gr-observer-projection-decomposition
  - def-countable-choice
dependency_roles:
  post-tgr-first-order-dissipation: physical-assumption
  lem-tgr-dissipative-entropy-identity: mathematical-premise
  post-tgr-local-entropy-admissibility: physical-assumption
  def-tgr-local-fluid-state: mathematical-premise
  def-tgr-framework-units: formulation-prerequisite
  lem-gr-observer-projection-decomposition: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
physical_scope: "Pointwise entropy identity for actual sufficiently regular source-free solutions of the selected first-order gradient branch inside its declared local-equilibrium and future-current-timelike regime; no solution existence, causality, stability, global entropy, or empirical claim."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.3 and 5.2–5.4"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; local Gibbs variables and perfect-fluid stress projections, PDF pp. 16–20; the general dissipative entropy identity is taken conditionally from its exact local mathematical supplier."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version 2015), §§IX.4.3–IX.4.4"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; §§IX.4.3–IX.4.4, PDF pp. 156–158 (printed pp. 148–150), for the arbitrary-frame entropy identity and first-order bulk/shear/diffusion closures. Equation (IX.44c)'s diffusion sign conflicts with the same source's entropy formula in its stated convention; the local sign follows instead from direct substitution into the exact mathematical identity."
    - title: "Dirk H. Rischke, Microscopic Foundations of Relativistic Fluid Dynamics, lecture notes (May 2022), §1.3.4"
      url: "https://itp.uni-frankfurt.de/~drischke/Skript_Hydro.pdf"
      locator: "Full 148-page lecture notes; §1.3.4, PDF pp. 17–18, for first-order constitutive closures and quadratic entropy production; the local proof fixes its own signature, frame, SI, and marker conventions."
    - title: "Paul Romatschke, New Developments in Relativistic Viscous Hydrodynamics, arXiv:0906.4787v2 (2010), §§3–4.1"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "Full 25-page paper; §3, PDF pp. 7–9, and §4.1, PDF pp. 10–14; its conformal zero-charge scope is not generalized here."
---

## Statement

Let $O$ be a nonempty open region of a smooth time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, with its metric-compatible torsion-free connection. Use the $C^2$ state map $(v,\sigma_p):O\to X$ and the associated $n=v^{-1}$, $s=n\sigma_p$, $T=e_{\sigma_p}$, $p=-e_v$, and $\mu=e+pv-T\sigma_p$ of [[def-tgr-local-fluid-state]], with $n,T>0$ and the fixed-composition branch adopted by [[post-tgr-first-order-dissipation]]. The frame is the smooth future unit timelike observer congruence $u$ of that definition, not a chart or tetrad. Define $\Delta^{ab}=g^{ab}+u^au^b$, $\theta=\nabla_a u^a$, and $a_b=u^c\nabla_cu_b$. Let $\sigma_{ab}$ be the spatial symmetric trace-free part of $\nabla_{(a}u_{b)}$, namely $\Delta_a{}^c\Delta_b{}^d\nabla_{(c}u_{d)}-(\theta/3)\Delta_{ab}$, where parentheses denote averaged symmetrization. Let the fields in [[post-tgr-first-order-dissipation]] satisfy its source-free stress and particle balances, closures, and declared applicability regime, including the separately required future-timelike condition on $J$. The observer congruence is smooth and the state function and map are $C^2$ as in [[def-tgr-local-fluid-state]]. To match the exact hypotheses of [[lem-tgr-dissipative-entropy-identity]], assume $\Pi$, $Q^a$, $V^a$, and $\pi^{ab}$ are smooth on $O$; the transport coefficients remain $C^1$ as in the postulate. The balances and entropy-current divergence are then classical pointwise expressions. Put
$$Y_a=\nabla_aT+Ta_a,\qquad Z_a=\nabla_a\!\left(\frac{\mu}{T}\right),\qquad a_b=u^c\nabla_cu_b.$$
Then the entropy current $S^a=su^a+Q^a/T-\mu V^a/T$ has the exact pointwise divergence
$$\nabla_aS^a=\frac{\zeta c\theta^2+2\eta c\,\sigma^{ab}\sigma_{ab}}{T}+\frac{\kappa}{cT^2}\Delta^{ab}Y_aY_b+L\Delta^{ab}Z_aZ_b\geq0,$$
where $\theta=\nabla_a u^a$, $\Delta^{ab}=g^{ab}+u^au^b$, and $\sigma_{ab}$ is the spatial symmetric trace-free shear defined in the postulate. Thus this selected branch satisfies the adopted local entropy-current admissibility condition of [[post-tgr-local-entropy-admissibility]]. With length coordinates $x^0=ct$, the divergence has units J K$^{-1}$ m$^{-4}$ and $c\nabla_aS^a$ is the physical production rate per volume in J K$^{-1}$ m$^{-3}$ s$^{-1}$.

This is a conditional model deduction for a sufficiently regular solution already supplied in the declared regime. It does not assert that the model has a solution, that the constitutive law describes nature, or that the branch is causal, linearly stable, or globally entropy-increasing. It uses no empirical premise.

## Facts & Assumptions

**Given:** A nonempty open set $O$, a $C^2$ fixed-composition local state with $n,T>0$, a smooth future unit observer congruence $u$, and an actual solution in the postulate's declared regime with the pointwise source-free balances and closures. The dissipative fields $\Pi,Q^a,V^a,\pi^{ab}$ are smooth, as required by [F1].

[A1] The geometric and tensor-bundle construction in the mathematical supplier chain assumes countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]); no stronger choice principle is used.

[F1] [[lem-tgr-dissipative-entropy-identity]]: for the stated smooth $(-,+,+,+)$ fields, spatial heat and diffusion currents, and symmetric spatial trace-free shear, the source balances imply the exact entropy divergence identity with the force term $-u_bf^b/T$.

[F2] [[post-tgr-first-order-dissipation]]: the adopted closures are $\Pi=-\zeta c\theta$, $\pi^{ab}=-2\eta c\sigma^{ab}$, $Q^a=-(\kappa/c)\Delta^{ab}Y_b$, and $V^a=-L\Delta^{ab}Z_b$, with $\zeta,\eta,\kappa,L\in C^1$ nonnegative, $T,c>0$, source-free balances, and the separately required future-timelike current condition.

[F3] [[post-tgr-local-entropy-admissibility]]: for the separately specified smooth current and declared regime, the adopted local admissibility criterion is $\nabla_aS^a\geq0$.

[F4] [[def-tgr-local-fluid-state]]: a $C^2$ state map into a nonempty open domain with $e\in C^2$ defines $n=v^{-1}$, $s=n\sigma_p$, $T=e_{\sigma_p}$, $p=-e_v$, and $\mu=e+pv-T\sigma_p$; the observer field is smooth, future unit timelike, and $\Delta$ projects onto its positive rest space.

[F5] [[def-tgr-framework-units]]: in length coordinates $x^0=ct$, $S^a$ has components J K$^{-1}$ m$^{-3}$, $\nabla_aS^a$ has units J K$^{-1}$ m$^{-4}$, and $c\nabla_aS^a$ is the physical entropy production rate per volume.

[F6] [[lem-gr-observer-projection-decomposition]]: at each point the orthogonal complement $u^\perp$ has dimension three, the restricted metric is positive definite, and the observer projection is orthogonal with the stated projection identity.

## Proof

1.1 The balances in [F2] are those of [F1] with $f^b=0$. By [F4], $\Delta$ is the orthogonal projector onto $u^\perp$; hence the closures make $Q$ and $V$ spatial. The defining projection in $\sigma$ makes it symmetric and spatial, and its trace is $\Delta^{cd}\nabla_{(c}u_{d)}-(\theta/3)\Delta^{ab}\Delta_{ab}=\theta-(\theta/3)3=0$, since $u^cu^d\nabla_cu_d=\tfrac12u^c\nabla_c(g(u,u))=0$. Thus $\pi=-2\eta c\sigma$ is also symmetric, spatial, and trace-free. The state, observer, and regularity hypotheses of [F1] are supplied by [F2], [F4], and the given actual solution. Applying [F1] therefore gives
$$\nabla_aS^a=-\frac{\Pi\theta+\pi^{ab}\sigma_{ab}}{T}-\frac{Q^aY_a}{T^2}-V^aZ_a.$$.
[given, A1, F1, F2, F4, F6]

2.1 Substitute the closures of [F2] term by term: $-\Pi\theta/T=\zeta c\theta^2/T$, $-\pi^{ab}\sigma_{ab}/T=2\eta c\sigma^{ab}\sigma_{ab}/T$, $-Q^aY_a/T^2=\kappa\Delta^{ab}Y_aY_b/(cT^2)$, and $-V^aZ_a=L\Delta^{ab}Z_aZ_b$. This yields the displayed equality. [step 1.1, F2, algebra]

3.1 For a covector $W_a$, let $w^a=g^{ab}W_b$. Then $\Delta^{ab}W_aW_b=g_{ab}w^aw^b+(u^aW_a)^2=g(w,w)+g(w,u)^2=g(\Delta w,\Delta w)$ by the projection identity in [F6]. Since $\Delta w\in u^\perp$ and $g$ is positive definite there, this quadratic form is nonnegative. The finite-dimensional positive rest space has an orthonormal basis by Gram–Schmidt; as $\sigma_{ab}$ is symmetric and spatial, $\sigma^{ab}\sigma_{ab}$ is the sum of the nine squared spatial components. Hence every term in step 2.1 is nonnegative by [F2] and $T,c>0$. By [F3] the selected branch meets the adopted criterion. [step 2.1, F2, F3, F6, algebra]

4.1 By [F2], $[\zeta]=[\eta]=\mathrm{Pa\,s}$, $[\kappa]=\mathrm{W\,m^{-1}\,K^{-1}}$, and $[L]=\mathrm{marker^2\,K\,J^{-1}\,m^{-2}}$; $[\theta]=[\sigma]=[a]=\mathrm{m^{-1}}$, $[Y]=\mathrm{K\,m^{-1}}$, and $[Z]=\mathrm{J\,marker^{-1}\,K^{-1}\,m^{-1}}$. Each term in step 2.1 therefore has units J K$^{-1}$ m$^{-4}$; [F5] identifies $c\nabla_aS^a$ as the physical rate per volume in J K$^{-1}$ m$^{-3}$ s$^{-1}$. [step 2.1, F2, F5] ∎
