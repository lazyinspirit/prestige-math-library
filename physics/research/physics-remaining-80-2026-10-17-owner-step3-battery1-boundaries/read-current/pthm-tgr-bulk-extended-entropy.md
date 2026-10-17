---
id: pthm-tgr-bulk-extended-entropy
kind: physics-theorem
title: Exact entropy identity in the selected bulk branch
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
proof_strategy: direct
deps:
  - post-tgr-bulk-relaxation-model
  - lem-tgr-bulk-relaxation-entropy
  - def-tgr-local-fluid-state
  - def-tgr-framework-units
  - def-countable-choice
dependency_roles:
  post-tgr-bulk-relaxation-model: physical-assumption
  lem-tgr-bulk-relaxation-entropy: mathematical-premise
  def-tgr-local-fluid-state: mathematical-premise
  def-tgr-framework-units: formulation-prerequisite
  def-countable-choice: mathematical-premise
justified_by: []
physical_scope: "Pointwise extended-entropy identity for actual sufficiently regular solutions of the selected near-equilibrium bulk-only branch, plus one explicitly checked homogeneous Minkowski solution; no general nonlinear existence, causality, stability, universal material, or empirical claim."
provenance:
  statement: literature-derived
  proof: ai-generated
empirical_premises: []
sources:
  references:
    - title: "Dirk H. Rischke, Microscopic Foundations of Relativistic Fluid Dynamics, lecture notes (May 2022), §1.5"
      url: "https://itp.uni-frankfurt.de/~drischke/Skript_Hydro.pdf"
      locator: "Full 148-page lecture notes; §1.5, PDF pp. 25–27, equations (1.128)–(1.139), for the second-order entropy-current correction, coefficient relation and corrected relaxation structure."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version 2015), §IX.4.5"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; §IX.4.5, PDF pp. 159–160 (printed pp. 151–152), for second-order entropy-current corrections and relaxation-type equations. The local exact identity is established conditionally from its mathematical supplier."
    - title: "Paul Romatschke, New Developments in Relativistic Viscous Hydrodynamics, arXiv:0906.4787v2 (2010), §4.1"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "Full 25-page paper; §4.1, PDF pp. 10–14, for restricted conformal zero-charge entropy-current context, not a universal bulk law or empirical result."
---

## Statement

On a nonempty open region of the smooth $(-,+,+,+)$ Lorentzian model of [[post-tgr-bulk-relaxation-model]], assume an actual solution of its source-free stress and particle balances and corrected relaxation law. Use the state maps and units of [[def-tgr-local-fluid-state]] and [[def-tgr-framework-units]], with smooth future unit observer congruence $u$ (the frame, not a chart or tetrad), $\Delta^{ab}=g^{ab}+u^au^b$, $D=u^a\nabla_a$, $\theta=\nabla_a u^a$, $n,T,c>0$, positive $C^1$ coefficient fields $\zeta,\tau$, and $\beta=\tau/\zeta$. The state function and map are $C^2$ and $u$ is smooth as in [[def-tgr-local-fluid-state]]; take $\Pi$ smooth as required by [[lem-tgr-bulk-relaxation-entropy]], with the positive coefficients $C^1$ as in the postulate. Thus the displayed stress and current and $S^a$ are $C^1$; require the balances and corrected law to hold pointwise. The solution remains in the application's declared open near-equilibrium regime. With
$$\mathsf T^{ab}=\varepsilon u^au^b+(p+\Pi)\Delta^{ab},\qquad J^a=nu^a,\qquad S^a=\left(s-\frac{\beta\Pi^2}{2T}\right)u^a,$$
the exact pointwise identity is
$$\nabla_aS^a=\frac{\Pi^2}{\zeta cT}\geq0.$$
This is conditional on an actual solution and does not assert general solution existence.

There is also an explicit homogeneous solution under the additional application condition that the declared open regime contains constant zero-gradient reference data with $\Pi=0$. Let the selected material's state domain contain $(v_0,\sigma_0)$ with $n_0=1/v_0>0$ and $T_0=e_{\sigma_p}(v_0,\sigma_0)>0$, and let the regime contain those constant state data. On $M=\mathbb R^4$ with global length coordinates $(x^0,x^1,x^2,x^3)=(ct,x^1,x^2,x^3)$, Minkowski metric $g=-(dx^0)^2+\sum_{i=1}^3(dx^i)^2$, and future direction $\partial_{x^0}$, choose constant positive $\zeta_0,\tau_0$ and set $u=\partial_{x^0}$. For some $\delta>0$ seconds take the open region $O=(-c\delta,\infty)\times\mathbb R^3$, put $t=x^0/c$, and define
$$\Pi(t)=\Pi_0e^{-t/\tau_0},\qquad t> -\delta.$$
Choose $\Pi_0$ sufficiently small that the full field and first-derivative data stay in the declared regime throughout $O$. Then the source-free balances and corrected law hold, and the entropy production is strictly positive at every finite $t\geq0$ when $\Pi_0\ne0$, and zero when $\Pi_0=0$.

The argument is a conditional model deduction, not an observation or a general nonlinear existence, causality, or stability theorem. No empirical premise is used.

## Facts & Assumptions

**Given:** An actual solution of the selected bulk-only constitutive postulate on its declared near-equilibrium regime, the $C^2$ state data and smooth $u$ of [[def-tgr-local-fluid-state]], smooth $\Pi$, positive $n,T,c,\zeta,\tau$ with $\zeta,\tau\in C^1$, and the $x^0=ct$ conventions.

[A1] The geometric and tensor construction in the mathematical supplier chain assumes exactly countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]); no stronger choice principle is assumed.

[A2] For the explicit witness, the selected material state domain contains a point $(v_0,\sigma_0)$ with $v_0>0$ and $T_0=e_{\sigma_p}(v_0,\sigma_0)>0$, and the application's open regime contains its constant zero-gradient reference data at $\Pi=0$.

[F1] [[post-tgr-bulk-relaxation-model]]: the selected branch adopts $\mathsf T^{ab}=\varepsilon u^au^b+(p+\Pi)\Delta^{ab}$, $J^a=nu^a$, source-free balances, $S^a=[s-\beta\Pi^2/(2T)]u^a$, and $\beta D\Pi+\Pi/(\zeta c)=-\theta-(T\Pi/2)\nabla_a(\beta u^a/T)$, with positive $C^1$ $\zeta,\tau$ and an application-declared near-equilibrium regime.

[F2] [[lem-tgr-bulk-relaxation-entropy]] (current batch-56 mathematical carrier): under smooth $(-,+,+,+)$ state and Lorentzian data, source-free bulk-only balances, $n,T,c>0$, positive $C^1$ $\zeta,\tau$, $\beta=\tau/\zeta$, and the exact corrected law in [F1], every actual smooth solution satisfies $\nabla_aS^a=\Pi^2/(\zeta cT)\geq0$. Its proof is conditional on its current mathematical suppliers.

[F3] [[def-tgr-local-fluid-state]]: on a nonempty open set, a $C^2$ state map into $X\subset(0,\infty)\times\mathbb R$ and $e\in C^2(X)$ define $n=v^{-1}$, $s=n\sigma_p$, $\varepsilon=ne$, $T=e_{\sigma_p}$, and $p=-e_v$; $u$ is a smooth future unit timelike observer congruence, and the frame is not identified with a chart or tetrad.

[F4] [[def-tgr-framework-units]]: with length coordinates $x^0=ct$, $c$ has units m s$^{-1}$, $\Pi$ has units Pa, $D$ and $\theta$ have units m$^{-1}$, $\nabla_aS^a$ has units J K$^{-1}$ m$^{-4}$, and $c\nabla_aS^a$ is the physical production rate per volume.

## Proof

1.1 The actual solution in the Statement satisfies every input in [F2]: [F1] supplies the same source-free bulk-only stress and current, positive $C^1$ coefficients, entropy current, and corrected law, while the given solution is smooth and remains in the declared regime. The mathematical proof chain carries exactly [A1]. Applying [F2] yields $\nabla_aS^a=\Pi^2/(\zeta cT)$; since $\Pi^2\geq0$ and $\zeta,c,T>0$, this is nonnegative. [given, A1, F1, F2]

1.2 For the witness, the constant state gives constant $n_0,\varepsilon_0,p_0,T_0,s_0$. In the stated Minkowski coordinates, $u^0=1$, $u^i=0$, $\Delta^{00}=\Delta^{0i}=0$, and $\Delta^{ij}=\delta^{ij}$. Thus $J^0=n_0$, $J^i=0$, $\mathsf T^{00}=\varepsilon_0$, $\mathsf T^{0i}=0$, and $\mathsf T^{ij}=(p_0+\Pi(t))\delta^{ij}$. Since the only nonconstant component depends on time and occurs in spatial slots, $\nabla_aJ^a=0$, $\nabla_a\mathsf T^{a0}=\partial_{x^0}\varepsilon_0=0$, and $\nabla_a\mathsf T^{ai}=\partial_{x^j}[(p_0+\Pi(t))\delta^{ji}]=0$ for $i=1,2,3$. [given, A2, F1, F3, F4, algebra]

2.1 In SI length coordinates, $[\Pi]=\mathrm{Pa}$ and $[\zeta cT]=\mathrm{Pa\,s}\,\mathrm{m\,s^{-1}}\,\mathrm K=\mathrm{Pa\,m\,K}$, so $[\Pi^2/(\zeta cT)]=\mathrm{Pa\,m^{-1}\,K^{-1}}=\mathrm{J\,K^{-1}\,m^{-4}}$, in agreement with [F4]. Multiplication by $c$ gives J K$^{-1}$ m$^{-3}$ s$^{-1}$. [step 1.1, F1, F4, algebra]

2.2 Here $\theta=0$, $\nabla_a(\beta u^a/T_0)=0$, and $D\Pi=\partial_{x^0}\Pi=c^{-1}\partial_t\Pi=-\Pi/(c\tau_0)$. Therefore the left side of the corrected law is $-(\tau_0/\zeta_0)\Pi/(c\tau_0)+\Pi/(\zeta_0c)=0$, matching its right side. For fixed $\delta$, $|\Pi(t)|$ and $|D\Pi(t)|$ are bounded on $t> -\delta$ by $|\Pi_0|e^{\delta/\tau_0}$ and $|\Pi_0|e^{\delta/\tau_0}/(c\tau_0)$; taking $|\Pi_0|$ sufficiently small keeps all field and first-derivative data in the stated open regime. [step 1.2, given, A2, F1, algebra]

3.1 Steps 1.2 and 2.2 verify that the specified fields are an actual smooth solution in the model regime. Applying the conditional identity from step 1.1 pointwise gives $\nabla_aS^a=\Pi(t)^2/(\zeta_0cT_0)=\Pi_0^2e^{-2t/\tau_0}/(\zeta_0cT_0)$. Its denominator is positive, hence production is zero for $\Pi_0=0$ and strictly positive for every finite $t\geq0$ when $\Pi_0\ne0$. [step 1.1, step 1.2, step 2.2, A2, F1, F3, algebra] ∎
