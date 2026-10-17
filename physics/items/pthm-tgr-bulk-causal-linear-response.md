---
id: pthm-tgr-bulk-causal-linear-response
kind: physics-theorem
title: "Causal stable bulk-relaxation linear response"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 9
proof_strategy: direct
deps:
  - post-tgr-linearized-material-model
  - lem-tgr-bulk-linear-causality
  - def-countable-choice
dependency_roles:
  post-tgr-linearized-material-model: physical-assumption
  lem-tgr-bulk-linear-causality: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Adiabatic bulk-only first variations about the specified uniform Minkowski rest state with h0,T0,a_s,zeta,tau positive and a_s+zeta/(tau h0)<=1; linear evolution only, not nonlinear or curved-spacetime existence or empirical applicability."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.2–4.3 and 5.1–5.4"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page lecture-note PDF; PDF pp. 14–19: perfect-fluid state and balance conventions. The bulk relaxation system is an additional restricted constitutive model."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2 (2010), §§3.1 and 4.1"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "Full 25-page paper; PDF pp. 8–11: second-order bulk transport parameters, high-frequency characteristic-speed conditions, and non-equilibrium entropy-current context. Its shear and zero-charge assumptions are not imported."
    - title: "Dirk H. Rischke, Microscopic Foundations of Relativistic Fluid Dynamics, lecture notes (May 2022), §§1.4.2–1.5 and 2.5.4"
      url: "https://itp.uni-frankfurt.de/~drischke/Skript_Hydro.pdf"
      locator: "Full 148-page lecture-note PDF; PDF pp. 20–27 and 52–53: bulk relaxation and entropy-current structure, plus model-specific causality and stability analysis. The exact variable-coefficient law here is separately stipulated and its linear evolution is established by the mathematical supplier."
---

## Statement

Assume the adiabatic bulk-only linear branch of [[post-tgr-linearized-material-model]] on its prescribed Minkowski background, with $h_0,T_0,c,a_s,\zeta_0,\tau_0>0$, the Axiom of Countable Choice $\mathrm{AC}_\omega$, and

$$a_s+\frac{\zeta_0}{\tau_0h_0}\le1.$$

For every initial datum $U_0=(r_0,w_0,\widehat\Pi_0)\in\mathcal S(\mathbb R^3;\mathbb R^5)$ or $U_0\in C^\infty(\mathbb T_L^3;\mathbb R^5)$ with $L>0$, the Cauchy problem $U(0,\cdot)=U_0$ for the system

$$r_t+c h_0\operatorname{div}w=0,\qquad w_t+\frac{c}{h_0}\nabla(a_s r+\widehat\Pi)=0,\qquad \tau_0\widehat\Pi_t+\widehat\Pi=-\zeta_0c\operatorname{div}w$$

has a unique global smooth solution on the corresponding space-time domain and is contractive in its positive quadratic energy and weighted Sobolev norms. Its energy density

$$\mathcal E_{\rm bulk}=\frac12\left[\frac{a_s}{h_0}r^2+h_0|w|^2+\frac{\tau_0}{\zeta_0}\widehat\Pi^2\right]$$

satisfies $\partial_t\mathcal E_{\rm bulk}+\operatorname{div}[c(a_s r+\widehat\Pi)w]=-\widehat\Pi^2/\zeta_0$. For each Sobolev exponent $q\ge0$, its weighted Sobolev norm is nonincreasing for $t\ge0$. The characteristic speeds, meaning eigenvalues of the principal matrix in a unit spatial direction, are $0$ and $\pm c\sqrt{a_s+\zeta_0/(\tau_0h_0)}$. Finite propagation means that if initial data vanish on a ball of radius $R$, then at time $t$ they vanish on the concentric ball of radius $R-v_{\rm bulk}t$ whenever $0\le t<R/v_{\rm bulk}$, where $v_{\rm bulk}=c\sqrt{a_s+\zeta_0/(\tau_0h_0)}$; on $\mathbb T_L^3$ use geodesic balls. Hence propagation is bounded by $c$ under the stated inequality. Equality at the causal threshold is allowed. Energy contraction does not assert decay of every mode. The result is conditional on the adopted linear model; it is not a nonlinear or curved-spacetime existence claim or an empirical conclusion.

## Facts & Assumptions

**Given:** The physical time and spatial coordinates $(t,\mathbf x)$, the adiabatic bulk-only branch, and the state and transport parameters and units specified in [[post-tgr-linearized-material-model]].

[A1] $h_0,T_0,c,a_s,\zeta_0,\tau_0>0$ and $a_s+\zeta_0/(\tau_0h_0)\le1$. Positivity makes the displayed energy positive definite; the upper bound is the additional causal-branch assumption.

[A2] Assume $\mathrm{AC}_\omega$: for every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets there is a function $f$ with $f(n)\in X_n$ for every $n$ ([[def-countable-choice]]). This is the exact choice strength used by the mathematical supplier proof; no stronger choice principle is assumed.

[F1] [[post-tgr-linearized-material-model]]: the bulk branch has $e\in C^2(X)$, $n_0,T_0,h_0>0$, $a_s=e_{vv}/(n_0h_0)>0$, $\delta\sigma_p=0$, constant $\zeta_0,\tau_0>0$, and adopts the displayed three-equation system about $u_0=(1,0,0,0)$ and $\Pi_0=0$. In particular $e_{vv}>0$ follows from the response identity and these strict inequalities; [A1] supplies the additional causal inequality. Put $U=(r,w,\widehat\Pi):\mathbb R\times\mathbb R^3\to\mathbb R^5$.

[F2] [[lem-tgr-bulk-linear-causality]] (current batch-56 mathematical draft): under its exact state and adiabatic hypotheses, $n_0,T_0,h_0,e_{vv},c,\zeta_0,\tau_0>0$, $a_s=e_{vv}/(n_0h_0)>0$, the corrected bulk-model interface, and [A2], its complete conditional proof gives the positive energy identity, unique global smooth solutions for $U_0\in\mathcal S(\mathbb R^3;\mathbb R^5)$ or $C^\infty(\mathbb T_L^3;\mathbb R^5)$, and weighted Sobolev contraction $\|U(t)\|_{H^q_M}\le\|U_0\|_{H^q_M}$ for every $q\ge0$. Here $M=\operatorname{diag}(a_s/h_0,h_0I_3,\tau_0/\zeta_0)$, where $I_3$ is the $3\times3$ identity; on $\mathbb R^3$ the Fourier transform is $\widehat U(\xi)=\int_{\mathbb R^3}e^{-2\pi i\mathbf x\cdot\xi}U(\mathbf x)\,d\mathbf x$ and $\|U\|_{H^q_M}^2=\int_{\mathbb R^3}(1+|\xi|^2)^q\widehat U(\xi)^*M\widehat U(\xi)\,d\xi$. On the torus, $\widehat U_k=L^{-3}\int_{[0,L]^3}U(\mathbf x)e^{-2\pi i\mathbf k\cdot\mathbf x/L}\,d\mathbf x$ and $\|U\|_{H^q_M}^2=\sum_{k\in\mathbb Z^3}(1+|\mathbf k/L|^2)^q\widehat U_k^*M\widehat U_k$. It gives characteristic speeds $0,\pm v_{\rm bulk}$ and the ball-shrinking finite-propagation property stated above. The positive-response, zero-reference-bulk-pressure, data-class and countable-choice hypotheses here match that exact mathematical interface.

## Proof

1.1 By [F1] the physical bulk branch is exactly the displayed constant-coefficient system, with the mathematical supplier's $\Pi$ identified as the first variation $\widehat\Pi$ and with the same $c,h_0,a_s,\zeta_0,\tau_0$. Hypothesis [A1] supplies its positivity and causal-parameter conditions. [A1, F1, given, algebra]

2.1 Apply [F2] under [A2] to this identical system and matching state, parameter, and data hypotheses. It yields the stated energy density and dissipation identity, unique global smooth solutions for both data classes, contraction, characteristic speeds, and finite propagation at $c\sqrt{a_s+\zeta_0/(\tau_0h_0)}$. [A1, A2, F2, step 1.1]

3.1 Since $a_s+\zeta_0/(\tau_0h_0)\le1$ and $c>0$, its nonnegative square root is at most $1$, so the propagation speed is at most $c$. Equality holds when the parameter sum is $1$. The result is a conditional model deduction under [A2] and does not imply decay of neutral modes. [A1, A2, F2, step 2.1, algebra] ∎
