---
id: lem-tgr-first-order-model-limits
kind: lemma
title: "Positive first-order residual and actual instability/tail counterexamples"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-tgr-dissipative-entropy-identity
  - def-tgr-local-fluid-state
  - def-gr-smooth-lorentzian-objects
  - thm-heat-cauchy-solution-for-bounded-continuous-data
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - def-countable-choice
dependency_roles:
  lem-tgr-dissipative-entropy-identity: mathematical-premise
  def-tgr-local-fluid-state: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-heat-cauchy-solution-for-bounded-continuous-data: mathematical-premise
  def-heat-kernel: mathematical-premise
  lem-heat-kernel-normalisation-scaling-and-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Eric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "PDF pp. 16–20, §§4.3 and 5.2–5.4: perfect-fluid state and balance conventions; the dissipative examples here are proved locally."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "PDF pp. 7–13, §§3–4.1: first-order viscous constitutive context and an entropy-current analysis for a conformal zero-charge model; the tail and Eckart-mode arguments here are independent."
---

## Statement

Use the smooth state, frame, and dissipative stress/particle decomposition of
[[def-tgr-local-fluid-state]] and [[lem-tgr-dissipative-entropy-identity]].
Let $c>0$, $T>0$, and let $\eta,\zeta,\kappa,L\ge 0$. In the isolated
first-order branch impose

$$\Pi=-\zeta c\theta,\quad \pi^{ab}=-2\eta c\sigma^{ab},\quad Q^a=-\frac{\kappa}{c}\Delta^{ab}(\nabla_bT+Ta_b),\quad V^a=-L\Delta^{ab}\nabla_b(\mu/T).$$

Then the entropy identity reduces to

$$\nabla_aS^a= \frac{\zeta c\theta^2+2\eta c\,\sigma^{ab}\sigma_{ab}}{T} +\frac{\kappa}{cT^2}\Delta^{ab}(\nabla_aT+Ta_a)(\nabla_bT+Ta_b) +L\Delta^{ab}\nabla_a(\mu/T)\nabla_b(\mu/T)\ge0.$$

This sign condition alone implies neither finite propagation nor linear
stability, as the following two conditional model calculations show.

1. **Fixed-rest Fourier branch.** In Minkowski coordinates $(ct,\mathbf x)$ let
$u=(1,0,0,0)$ be maintained by an external support with $f^0=0$ and
$f^i=\partial_i p+c^{-1}\partial_tQ^i$. This is the spatial component of the
stress balance for the fixed-rest stress, so the support holds $u$ fixed and
does no rest-frame work. Set $V=\Pi=\pi=0$ and $\eta=\zeta=L=0$. On a fixed
material state slice let
$T=T_0+\vartheta$, $T_0>0$, $\epsilon=\epsilon_0+C\vartheta$ with constant
$C>0$, and $q=cQ=-\kappa\nabla\vartheta$ with $\kappa>0$. Choose
$0<\delta$ so $[T_0,T_0+\delta]$ lies in the state domain, and set
$\vartheta_0(\mathbf x)=\delta\max(1-|\mathbf x|,0)$. The energy equation
is $C\partial_t\vartheta+\nabla\cdot q=0$. The heat solution
$\vartheta(\mathbf x,t)$ is strictly positive for every $\mathbf x\in\mathbb R^3$
and every $t>0$. Thus no finite speed $v$ has
$\operatorname{supp}\vartheta(\cdot,t)\subseteq
\operatorname{supp}\vartheta_0+\overline B_{vt}(0)$ for all $t>0$.

2. **Homogeneous Eckart linearization.** In the no-force branch $f=0$ and a
homogeneous Minkowski rest state with $T_0>0$, $h_0=\epsilon_0+p_0>0$,
$\kappa>0$, and zero number diffusion
$V=0$, let $\mathbf w(t)$ be the first-order spatial perturbation of $u$,
with no spatial gradients and no temperature perturbation. The linearized
first-order heat and momentum equations are
$Q^i=-(\kappa T_0/c^2)\dot w^i$ and
$h_0\dot{\mathbf w}+\dot{\mathbf Q}=0$. Hence for
$\lambda=h_0c^2/(\kappa T_0)>0$, every nonzero constant vector $\mathbf w_*$ gives
the growing linearized mode $\mathbf w(t)=\mathbf w_*e^{\lambda t}$.
This is a statement about the linearized equations, not a nonlinear solution
claim.

The results are conditional mathematical deductions from the displayed model
equations. They do not establish a constitutive law for nature, a nonlinear
existence theorem, or a general instability theorem.

## Facts & Assumptions

**Given:** Countable Choice; a nonempty open spacetime domain with the smooth
Lorentzian frame and $C^2$ local state specified by
[[def-tgr-local-fluid-state]], with $n,T>0$; and the model equations and
constants stated above.

[A1] Countable Choice $\mathrm{AC}_\omega$ is assumed where the heat-kernel
and Lorentzian suppliers require it ([[def-countable-choice]]).

[F1] [[lem-tgr-dissipative-entropy-identity]]: for the displayed stress and
particle balances,
$$\nabla_aS^a=-\frac{\Pi\theta+\pi^{ab}\sigma_{ab}}T -\frac{Q^a(\nabla_aT+Ta_a)}{T^2} -V^a\nabla_a(\mu/T)-\frac{u_bf^b}{T}.$$
This is the current batch-55 conditional draft; its tgr-mc01 input hashes are
stale, so its use remains conditional.

[F2] [[def-heat-kernel]]: for $\tau>0$,
$\Gamma(\mathbf x,\tau)=(4\pi\tau)^{-3/2}
\exp(-|\mathbf x|^2/(4\tau))$, which is strictly positive.

[F3] [[lem-heat-kernel-normalisation-scaling-and-derivatives]]: assuming Countable
Choice, $\Gamma(\cdot,\tau)>0$ and has unit integral for every $\tau>0$.

[F4] [[thm-heat-cauchy-solution-for-bounded-continuous-data]]: assuming Countable
Choice, for bounded uniformly continuous $\vartheta_0:\mathbb R^3\to\mathbb R$,
the convolution $\int\Gamma(\mathbf x-\mathbf y,\tau)\vartheta_0(\mathbf y)\,d\mathbf y$
is smooth for $\tau>0$, solves $U_\tau=\Delta U$, is bounded, and recovers
$\vartheta_0$ locally uniformly at $\tau=0$; it also obeys
$\|U(\cdot,\tau)\|_\infty\le\|\vartheta_0\|_\infty$.

[A2] In the fixed-rest branch, $f^0=0$ and
$f^i=\partial_i p+c^{-1}\partial_tQ^i$, so the displayed stress balance holds
with $u=(1,0,0,0)$ and the support does no rest-frame work. Set
$V=\Pi=\pi=0$, $\eta=\zeta=L=0$, and choose $\delta>0$ so the temperature
interval parameterizes a fixed-volume state slice inside the local state domain.
Along the slice $T=e_{\sigma_p}$ is a valid coordinate and
$(\partial\epsilon/\partial T)_v=C>0$, so
$\epsilon=\epsilon_0+C(T-T_0)$. The constants $C,\kappa,T_0$ are positive.
In SI, $C$ has units $\mathrm{J\,m^{-3}K^{-1}}$,
$\kappa$ has units $\mathrm{W\,m^{-1}K^{-1}}$, $q$ has units
$\mathrm{W\,m^{-2}}$, $h_0$ has units Pa, $\lambda$ has units
$\mathrm{s^{-1}}$, $\eta,\zeta$ have units $\mathrm{Pa\,s}$, $L$ has units
$\mathrm{marker^2\,K\,J^{-1}m^{-2}}$, and $Q,\Pi,\pi$ have units Pa; $c$ has units
$\mathrm{m\,s^{-1}}$. In the
homogeneous Eckart linearization, $f=0$, the background is constant,
$h_0,T_0,\kappa>0$, $V=0$, and all spatial gradients vanish.

[F5] [[def-gr-smooth-lorentzian-objects]]: in signature $(-,+,+,+)$, the
orthogonal complement of a unit timelike vector has positive-definite metric;
this supplies the sign of the projected quadratic terms.

[F6] [[def-tgr-local-fluid-state]] (current batch-53 draft): on a nonempty open
set $O$, a local state is specified by $e\in C^2(X)$ on nonempty open
$X\subset(0,\infty)\times\mathbb R$ and a $C^2$ state map
$(v,\sigma_p):O\to X$. It defines $n=v^{-1}$, $s=n\sigma_p$,
$\epsilon=ne$, $T=e_{\sigma_p}$, $p=-e_v$, $H=e+pv$, and $\mu=H-T\sigma_p$.
The convention has signature $(-,+,+,+)$ and $x^0=ct$, with $c$ in
$\mathrm{m\,s^{-1}}$.

## Proof

1.1 Substitute the first-order laws into [F1] with $f=0$. They give
$-\Pi\theta/T=\zeta c\theta^2/T$,
$-\pi^{ab}\sigma_{ab}/T=2\eta c\,\sigma^{ab}\sigma_{ab}/T$,
$-Q^a(\nabla_aT+Ta_a)/T^2=
\kappa\Delta^{ab}(\nabla_aT+Ta_a)(\nabla_bT+Ta_b)/(cT^2)$, and
$-V^a\nabla_a(\mu/T)=L\Delta^{ab}\nabla_a(\mu/T)\nabla_b(\mu/T)$.
The rest-space metric induced by $\Delta$ is positive definite by [F5]; with
$T,c>0$ and nonnegative coefficients every summand is nonnegative, proving
the stated residual inequality. [A1, F1, F5, F6, given, algebra]

1.2 Put $a_h=\kappa/C>0$. The fixed-rest energy equation and Fourier law in
[A2] give $C\partial_t\vartheta-\kappa\Delta\vartheta=0$. The datum
$\vartheta_0(\mathbf x)=\delta\max(1-|\mathbf x|,0)$ is nonnegative, nonzero,
compactly supported, and Lipschitz, hence bounded and uniformly continuous.
By [F4], $U(\mathbf x,\tau)=\int\Gamma(\mathbf x-\mathbf y,\tau)
\vartheta_0(\mathbf y)\,d\mathbf y$ solves $U_\tau=\Delta U$ for $\tau>0$.
Therefore $\vartheta(\mathbf x,t)=U(\mathbf x,a_ht)$ solves the fixed-rest
equation. [A1, A2, F2, F4, F6, algebra]

1.3 Write $u^0=1+O(|\mathbf w|^2)$ and $u^i=w^i+O(|\mathbf w|^2)$ in the
homogeneous rest perturbation. With $x^0=ct$,
$a^i=u^a\nabla_a u^i=c^{-1}\dot w^i$ to first order, so the first-order
acceleration heat law gives $Q^i=-\kappa T_0\dot w^i/c^2$. In
$\nabla_aT^{ai}=0$, the linearized mixed component is
$T^{0i}=h_0w^i+Q^i$: the perfect part contributes $h_0w^i$, the term
$u^0Q^i$ contributes $Q^i$, and $Q^0u^i$ is second order. All spatial
derivatives vanish, so $\partial_0T^{0i}=0$ gives
$h_0\dot w^i/c+\dot Q^i/c=0$. Multiplication by $c$ gives
$h_0\dot w^i+\dot Q^i=0$, the stated homogeneous linearized momentum equation.
[A2, F1, algebra]

2.1 The datum in step 1.2 is positive on the open unit ball. For any fixed
$\mathbf x$ and $t>0$, the continuous kernel
$\Gamma(\mathbf x-\mathbf y,a_ht)$ has a positive minimum on a smaller closed
ball inside that unit ball, while $\vartheta_0$ has a positive lower bound
there. Its integral is therefore strictly positive. For any finite $v\ge0$,
the set $\operatorname{supp}\vartheta_0+\overline B_{vt}(0)$ is bounded at
fixed $t$, so a point outside it still has positive solution value. This
contradicts every finite-propagation bound. [F3, step 1.2, algebra]

3.1 Let $\alpha=\kappa T_0/c^2>0$. Substitution of
$Q^i=-\alpha\dot w^i$ into the equation of step 1.3 gives
$\ddot w^i=(h_0/\alpha)\dot w^i=\lambda\dot w^i$. For any
$\mathbf w_*\ne0$, $w^i(t)=w_*^i e^{\lambda t}$ satisfies this equation because
$\ddot w^i=\lambda^2w^i=\lambda\dot w^i$. Since $\lambda>0$, its norm grows
exponentially. This proves a linearly growing mode without asserting that the
linearized solution remains within the regime of a nonlinear material model.
[step 1.3, A2, algebra] ∎
