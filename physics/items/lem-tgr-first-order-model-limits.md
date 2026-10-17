---
id: lem-tgr-first-order-model-limits
kind: lemma
title: "Positive first-order residual and actual instability/tail counterexamples"
status: published
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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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
Assume the stress and particle balances $\nabla_aT^{ab}=f^b$ and
$\nabla_aJ^a=0$. Let $c>0$, $T>0$, and let $\eta,\zeta,\kappa,L\ge0$. Impose

$$\Pi=-\zeta c\theta,\quad \pi^{ab}=-2\eta c\sigma^{ab},\quad Q^a=-\frac{\kappa}{c}\Delta^{ab}(\nabla_bT+Ta_b),\quad V^a=-L\Delta^{ab}\nabla_b(\mu/T).$$

On any branch with no rest-frame work, $u_bf^b=0$ (including the isolated case
$f^b=0$), the entropy identity reduces to

$$\nabla_aS^a= \frac{\zeta c\theta^2+2\eta c\,\sigma^{ab}\sigma_{ab}}{T} +\frac{\kappa}{cT^2}\Delta^{ab}(\nabla_aT+Ta_a)(\nabla_bT+Ta_b) +L\Delta^{ab}\nabla_a(\mu/T)\nabla_b(\mu/T)\ge0.$$

This sign condition alone implies neither finite propagation nor linear
stability, as the following two conditional model calculations show.

1. **Supported fixed-rest Fourier branch.** Let $M=\mathbb R^4$ have Minkowski
metric $g=\operatorname{diag}(-1,1,1,1)$, choose $N=(1,0,0,0)$ as time
orientation, and write $x^0=ct$. On the positive-time field domain
$O=\{(x^0,\mathbf x):x^0>0,\ \mathbf x\in\mathbb R^3\}$ set
$u=(1,0,0,0)$. Set $V=\Pi=\pi=0$ and $\eta=\zeta=L=0$, and maintain the
fixed rest field with external support
$f^0=0$, $f^i=\partial_i p+c^{-1}\partial_tQ^i$, hence $u_bf^b=0$ even if
$f^i$ is nonzero. On a fixed-volume state slice
$v=v_0$, let $T=T_0+\vartheta$ and
$\epsilon=\epsilon_0+C\vartheta$, where $T_0,C>0$ are constant and the
temperature coordinate is valid on an interval $[T_0,T_0+\delta]$ contained in
the material-state domain for some $\delta>0$. With constant $\kappa>0$, set
$q=cQ=-\kappa\nabla\vartheta$. For any
$\vartheta_0\in C_c^\infty(\mathbb R^3)$ satisfying
$0\le\vartheta_0\le\delta$ and $\vartheta_0\not\equiv0$, the heat solution
$\vartheta(\mathbf x,t):=\int_{\mathbb R^3}\Gamma(\mathbf x-\mathbf y,\kappa t/C)
\vartheta_0(\mathbf y)\,d\mathbf y$ for $t>0$ has initial boundary trace
$\vartheta_0$ locally uniformly as $t\downarrow0^+$ and is strictly positive
at every $\mathbf x\in\mathbb R^3$ for every $t>0$. Hence no finite speed $v$ satisfies
$\operatorname{supp}\vartheta(\cdot,t)\subseteq
\operatorname{supp}\vartheta_0+\overline B_{vt}(0)$ for all $t>0$.

2. **Homogeneous Eckart linearization.** On the same Minkowski spacetime take
$f=0$ and a homogeneous rest state with $n_0,T_0>0$,
$h_0=\epsilon_0+p_0>0$, and $\kappa>0$. Set the density and temperature
perturbations to zero, $\delta n=\delta T=0$, take $V=0$, and impose no spatial
gradients. Let $\mathbf w:(0,\infty)\to\mathbb R^3$ be the first-order spatial
perturbation of $u$. The linearized first-order heat and momentum equations are
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

[A2] For the supported fixed-rest branch, $M=\mathbb R^4$ has Minkowski metric
$g=\operatorname{diag}(-1,1,1,1)$, $x^0=ct$, the field domain is $t>0$,
$\mathbf x\in\mathbb R^3$, and $u=(1,0,0,0)$. With
$V=\Pi=\pi=0$ and $\eta=\zeta=L=0$, the external support is specified by
$f^0=0$ and $f^i=\partial_i p+c^{-1}\partial_tQ^i$. On a fixed-volume state
slice $v=v_0$, $T=e_{\sigma_p}$ is a valid coordinate and
$(\partial\epsilon/\partial T)_{v_0}=C>0$ is constant on an interval
$[T_0,T_0+\delta]$ inside the material-state domain, so
$\epsilon=\epsilon_0+C(T-T_0)$ there. Here $T_0,\delta,\kappa>0$ and
$\vartheta_0\in C_c^\infty(\mathbb R^3)$ satisfies
$0\le\vartheta_0\le\delta$ and $\vartheta_0\not\equiv0$.

[A3] In the entropy-sign branch assume $u_bf^b=0$. This includes the isolated
case $f^b=0$; in the supported fixed-rest branch of [A2], $u_bf^b=-f^0=0$
although the spatial support force may be nonzero.

[A4] In the homogeneous Eckart linearization, $f=0$, the background is
constant with $n_0,T_0>0$, $h_0=\epsilon_0+p_0>0$, and $\kappa>0$;
$\delta n=\delta T=0$, $V=0$, and all spatial gradients vanish. In SI, $C$ has
units $\mathrm{J\,m^{-3}K^{-1}}$, $\kappa$ has units
$\mathrm{W\,m^{-1}K^{-1}}$, $q$ has units $\mathrm{W\,m^{-2}}$, $h_0$ has
units Pa, $\lambda$ has units $\mathrm{s^{-1}}$, $\eta,\zeta$ have units
$\mathrm{Pa\,s}$, $L$ has units $\mathrm{marker^2\,K\,J^{-1}m^{-2}}$, and
$Q,\Pi,\pi$ have units Pa; $c$ has units $\mathrm{m\,s^{-1}}$.

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

1.1 Substitute the first-order laws into [F1] under the no-work assumption
$u_bf^b=0$ of [A3]. They give
$-\Pi\theta/T=\zeta c\theta^2/T$,
$-\pi^{ab}\sigma_{ab}/T=2\eta c\,\sigma^{ab}\sigma_{ab}/T$,
$-Q^a(\nabla_aT+Ta_a)/T^2=
\kappa\Delta^{ab}(\nabla_aT+Ta_a)(\nabla_bT+Ta_b)/(cT^2)$, and
$-V^a\nabla_a(\mu/T)=L\Delta^{ab}\nabla_a(\mu/T)\nabla_b(\mu/T)$.
The rest-space metric induced by $\Delta$ is positive definite by [F5]; with
$T,c>0$ and nonnegative coefficients every summand is nonnegative, proving
the stated residual inequality. [A1, F1, F5, F6, given, algebra]

1.2 In Minkowski coordinates, $T^{00}=\epsilon$ and $T^{i0}=Q^i$ for the
fixed-rest stress of [A2]. The temporal balance $\nabla_aT^{a0}=f^0=0$ is
$c^{-1}\partial_t\epsilon+\partial_iQ^i=0$. The spatial components are
$\nabla_aT^{ai}=c^{-1}\partial_tQ^i+\partial_i p=f^i$, as required by [A2].
Using $\epsilon=\epsilon_0+C\vartheta$ and $q=cQ=-\kappa\nabla\vartheta$,
the temporal balance becomes $C\partial_t\vartheta+\nabla\cdot q=0$, or
$C\partial_t\vartheta-\kappa\Delta\vartheta=0$. Put $a_h=\kappa/C>0$ and
$U(\mathbf x,\tau)=\int_{\mathbb R^3}\Gamma(\mathbf x-\mathbf y,\tau)
\vartheta_0(\mathbf y)\,d\mathbf y$. The smooth compactly supported datum in
[A2] is bounded and uniformly continuous, so [F4] gives a smooth solution of
$U_\tau=\Delta U$ for $\tau>0$ with initial trace $\vartheta_0$ locally
uniformly. Then $\vartheta(\mathbf x,t)=U(\mathbf x,a_ht)$ solves the fixed-rest
equation and has the stated boundary trace. Kernel positivity [F2] and
$\vartheta_0\ge0$ give $\vartheta\ge0$. The unit integral from [F3] and
$\vartheta_0\le\delta$ give
$$\vartheta(\mathbf x,t)\le\delta\int_{\mathbb R^3}\Gamma(\mathbf x-\mathbf y,a_ht)\,d\mathbf y=\delta,$$
so the temperature remains in the specified state interval. [A1, A2, F2, F3, F4, F6, algebra]

1.3 Write $u^0=1+O(|\mathbf w|^2)$ and $u^i=w^i+O(|\mathbf w|^2)$ in the
homogeneous rest perturbation of [A4]. With $x^0=ct$,
$a^i=u^a\nabla_a u^i=c^{-1}\dot w^i$ to first order, so the first-order
acceleration heat law gives $Q^i=-\kappa T_0\dot w^i/c^2$. In
$\nabla_aT^{ai}=0$, the linearized mixed component is
$T^{0i}=h_0w^i+Q^i$: the perfect part contributes $h_0w^i$, the term
$u^0Q^i$ contributes $Q^i$, and $Q^0u^i$ is second order. All spatial
derivatives vanish, so $\partial_0T^{0i}=0$ gives
$h_0\dot w^i/c+\dot Q^i/c=0$. Multiplication by $c$ gives
$h_0\dot w^i+\dot Q^i=0$, the stated homogeneous linearized momentum equation.
[A4, F1, algebra]

2.1 Since $\vartheta_0$ is continuous, nonnegative, and nonzero, it is bounded
below by a positive constant on some closed ball of positive radius. For every
fixed $\mathbf x$ and $t>0$, the continuous kernel
$\Gamma(\mathbf x-\mathbf y,a_ht)$ has a positive minimum on that ball by
[F2], so the convolution from step 1.2 is strictly positive. Thus
$\operatorname{supp}\vartheta(\cdot,t)=\mathbb R^3$. For any finite $v\ge0$,
$\operatorname{supp}\vartheta_0+\overline B_{vt}(0)$ is bounded at each fixed
$t>0$ because $\operatorname{supp}\vartheta_0$ is compact; it cannot contain
$\operatorname{supp}\vartheta(\cdot,t)$. This proves the claimed failure of
finite propagation. [F2, step 1.2, algebra]

3.1 Let $\alpha=\kappa T_0/c^2>0$. Substitution of
$Q^i=-\alpha\dot w^i$ into the equation of step 1.3 gives
$\ddot w^i=(h_0/\alpha)\dot w^i=\lambda\dot w^i$. For any
$\mathbf w_*\ne0$, $w^i(t)=w_*^i e^{\lambda t}$ satisfies this equation because
$\ddot w^i=\lambda^2w^i=\lambda\dot w^i$. Since $\lambda>0$, its norm grows
exponentially. This proves a linearly growing mode without asserting that the
linearized solution remains within the regime of a nonlinear material model.
[step 1.3, A4, algebra] ∎
