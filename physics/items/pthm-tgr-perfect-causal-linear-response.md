---
id: pthm-tgr-perfect-causal-linear-response
kind: physics-theorem
title: "Causal stable perfect-material linear response"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 9
proof_strategy: direct
deps:
  - post-tgr-linearized-material-model
  - lem-tgr-perfect-linear-causality
  - def-countable-choice
dependency_roles:
  post-tgr-linearized-material-model: physical-assumption
  lem-tgr-perfect-linear-causality: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Adiabatic perfect-material first variations about the specified uniform Minkowski rest state with h0>0 and 0<a_s<=1; linear global evolution only, not nonlinear or curved-spacetime fluid existence or empirical applicability."
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
      locator: "Full 37-page lecture-note PDF; PDF pp. 14–19: perfect-fluid stress and local balance projections. It does not establish a linear PDE existence theorem."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2 (2010), §3.1"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "Full 25-page paper; PDF p. 8: small perturbations around a uniform state and model-specific dispersion/propagation speeds, not finite-propagation existence for this branch."
    - title: "Dirk H. Rischke, Microscopic Foundations of Relativistic Fluid Dynamics, lecture notes (May 2022), §2.5.4"
      url: "https://itp.uni-frankfurt.de/~drischke/Skript_Hydro.pdf"
      locator: "Full 148-page lecture-note PDF; PDF pp. 52–53: model-specific causality and stability analysis for transient fluid equations; the local theorem supplies the exact perfect branch used here."
---

## Statement

Assume the adiabatic perfect-material linear branch of [[post-tgr-linearized-material-model]] on its prescribed Minkowski background, with $c>0$, $h_0>0$, and $0<a_s\le1$, and assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. For every initial datum $U_0=(r_0,w_0)\in\mathcal S(\mathbb R^3;\mathbb R^4)$ or $U_0\in C^\infty(\mathbb T_L^3;\mathbb R^4)$ with $L>0$, the Cauchy problem $U(0,\cdot)=U_0$ for the system

$$r_t+c h_0\operatorname{div}w=0,\qquad w_t+\frac{c a_s}{h_0}\nabla r=0$$

has a unique global smooth solution on the corresponding space-time domain, contractive in the positive quadratic energy and its weighted Sobolev norms. Its energy density

$$\mathcal E_{\rm pf}=\frac12\left[\frac{a_s}{h_0}r^2+h_0|w|^2\right]$$

satisfies $\partial_t\mathcal E_{\rm pf}+\operatorname{div}(c a_s r w)=0$. For each Sobolev exponent $q\ge0$, its weighted Sobolev norm is nonincreasing for $t\ge0$. The characteristic speeds, meaning eigenvalues of the principal matrix in a unit spatial direction, are $0$ and $\pm c\sqrt{a_s}$. Finite propagation means that if initial data vanish on a ball of radius $R$, then at time $t$ they vanish on the concentric ball of radius $R-c\sqrt{a_s}\,t$ whenever $0\le t<R/(c\sqrt{a_s})$; on $\mathbb T_L^3$ use geodesic balls. Thus the exact linear propagation speed is $c\sqrt{a_s}\le c$. Equality is permitted at $a_s=1$. This is a conditional model deduction and makes no claim about nonlinear or curved-spacetime evolution, or about nature beyond the adopted model.

## Facts & Assumptions

**Given:** The physical time and spatial coordinates $(t,\mathbf x)$, the adiabatic perfect branch, and its state parameters and units as specified in [[post-tgr-linearized-material-model]].

[A1] $c>0$, $h_0>0$, and $0<a_s\le1$. The strict lower bound is required for the positive definite energy; the upper bound is the additional causal-branch hypothesis.

[A2] Assume $\mathrm{AC}_\omega$: for every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets there is a function $f$ with $f(n)\in X_n$ for every $n$ ([[def-countable-choice]]). This is the exact choice strength used by the mathematical supplier proof; no stronger choice principle is assumed.

[F1] [[post-tgr-linearized-material-model]]: the perfect branch uses $e\in C^2(X)$, $n_0,T_0,h_0>0$, $a_s=e_{vv}/(n_0h_0)>0$, and $\delta\sigma_p=0$, and adopts the displayed perfect system. In particular $e_{vv}>0$ follows from the response identity and these strict inequalities; [A1] supplies the additional upper bound $a_s\le1$. Put $U=(r,w):\mathbb R\times\mathbb R^3\to\mathbb R^4$.

[F2] [[lem-tgr-perfect-linear-causality]] (current batch-56 mathematical draft): under its exact state and adiabatic hypotheses, $c>0$, $a_s=e_{vv}/(n_0h_0)\in(0,1]$, and [A2], the complete conditional proof supplies the same constant-coefficient system's positive energy, unique global smooth solutions for $U_0\in\mathcal S(\mathbb R^3;\mathbb R^4)$ or $C^\infty(\mathbb T_L^3;\mathbb R^4)$, and contraction $\|U(t)\|_{H^q_M}\le\|U_0\|_{H^q_M}$ for each $q\ge0$. On $\mathbb R^3$, $M=\operatorname{diag}(a_s/h_0,h_0I_3)$ (where $I_3$ is the $3\times3$ identity), $\widehat U(\xi)=\int_{\mathbb R^3}e^{-2\pi i\mathbf x\cdot\xi}U(\mathbf x)\,d\mathbf x$, and $\|U\|_{H^q_M}^2=\int_{\mathbb R^3}(1+|\xi|^2)^q\widehat U(\xi)^*M\widehat U(\xi)\,d\xi$. On the torus, $\widehat U_k=L^{-3}\int_{[0,L]^3}U(\mathbf x)e^{-2\pi i\mathbf k\cdot\mathbf x/L}\,d\mathbf x$ and $\|U\|_{H^q_M}^2=\sum_{k\in\mathbb Z^3}(1+|\mathbf k/L|^2)^q\widehat U_k^*M\widehat U_k$. It gives speeds $0,\pm c\sqrt{a_s}$ and the ball-shrinking finite-propagation property stated above. The state, response, data-class and countable-choice hypotheses here match that exact mathematical interface.

## Proof

1.1 By [F1] the physical model's perfect branch is exactly the displayed constant-coefficient system, with $U=(r,w)$, physical time $t$, and the same constants $c,h_0,a_s$. Hypothesis [A1] supplies the parameter restrictions required for the positive-energy causal branch. [A1, F1, given, algebra]

2.1 Apply [F2] under [A2] to this identical system and matching state, parameter, and data hypotheses. It yields the stated energy density and flux identity, unique global smooth solutions for both specified data classes, contraction in the stated norms, characteristic speeds $0,\pm c\sqrt{a_s}$, and finite propagation at $c\sqrt{a_s}$. [A1, A2, F2, step 1.1]

3.1 Since $0<a_s\le1$ and $c>0$, multiplication by $c$ and monotonicity of the nonnegative square root give $c\sqrt{a_s}\le c$, with equality when $a_s=1$. The conclusion is therefore causal relative to the specified Minkowski reference cone and remains conditional on the adopted model, [A2], and current mathematical supplier. [A1, A2, F2, step 2.1, algebra] ∎
