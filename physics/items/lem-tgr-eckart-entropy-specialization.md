---
id: lem-tgr-eckart-entropy-specialization
kind: lemma
title: Heat and viscous entropy specialization
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
  - def-tgr-local-fluid-state
  - lem-tgr-local-gibbs-euler
  - lem-tgr-dissipative-entropy-identity
  - lem-tgr-fluid-frame-projection
  - lem-tgr-spatial-shear-properties
  - def-countable-choice
dependency_roles:
  def-tgr-local-fluid-state: mathematical-premise
  lem-tgr-local-gibbs-euler: mathematical-premise
  lem-tgr-dissipative-entropy-identity: mathematical-premise
  lem-tgr-fluid-frame-projection: mathematical-premise
  lem-tgr-spatial-shear-properties: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1, full lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; §§4.3 and 5.2–5.4, PDF pp. 16–20, for the local first law and perfect-fluid stress projection used as the baseline."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2, full article"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "Full 25-page PDF; §§3–4.1, PDF pp. 7–13, for dissipative stress and entropy-current context. Its conformal zero-charge scope is not imported into the local proof."
---

## Statement

Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, let $O\subseteq M$ be nonempty and open, and let $u$ be a smooth future unit timelike vector field on $O$. Use the metric-compatible torsion-free connection $\nabla$ and a smooth local state map $(v,\sigma_p):O\to X$ with $X\subset(0,\infty)\times\mathbb R$ open and $e\in C^\infty(X)$, as in [[def-tgr-local-fluid-state]]. Thus $n=v^{-1}>0$, $s=n\sigma_p$, $\epsilon=ne$, $T=e_{\sigma_p}$, $p=-e_v$, and $\mu=e+pv-T\sigma_p$; assume $T>0$ on $O$ and the Gibbs and Euler identities of [[lem-tgr-local-gibbs-euler]]. Use the convention $x^0=ct$ with $c>0$ in $\mathrm{m\,s^{-1}}$.

Define $\Delta^a{}_b=\delta^a{}_b+u^a u_b$, $\Delta^{ab}=g^{ac}\Delta^b{}_c$, $\Delta_{ab}=g_{ab}+u_a u_b$, $D=u^a\nabla_a$, $\theta=\nabla_a u^a$, and $a^b=D u^b$. Let $\sigma_{ab}$ be the shear defined in [[lem-tgr-spatial-shear-properties]]: the spatially projected symmetrized derivative of $u$, minus $\theta\Delta_{ab}/3$, with averaged symmetrization. That lemma proves $\sigma$ symmetric, spatial, trace-free, and of nonnegative squared norm. Let $\kappa,\eta,\zeta_{\rm b}\in C^\infty(O)$ be pointwise nonnegative, with SI units $\mathrm{W\,m^{-1}K^{-1}}$, $\mathrm{Pa\,s}$ and $\mathrm{Pa\,s}$, respectively. Put
$$
X^a=\Delta^{ab}(\nabla_bT+Ta_b),\qquad q^a=-\kappa X^a,\qquad Q^a=q^a/c,
$$
so $q$ is the physical heat flux and $Q$ is its geometric stress component. Set the particle-diffusion current $V^a=0$, the bulk correction $\Pi=-\zeta_{\rm b}c\theta$, and the symmetric spatial trace-free stress $\pi^{ab}=-2\eta c\sigma^{ab}$. Suppose $\nabla_aJ^a=0$ for $J^a=nu^a$, and suppose the symmetric stress
$$
\mathsf T^{ab}=\epsilon u^au^b+(p+\Pi)\Delta^{ab}+u^aQ^b+Q^au^b+\pi^{ab}
$$
satisfies $\nabla_a\mathsf T^{ab}=f^b$ with zero local power $u_bf^b=0$. Then for $S^a=su^a+Q^a/T$ the exact entropy-production identity is
$$
\nabla_aS^a=\frac{\kappa}{cT^2}X^aX_a+\frac{2\eta c}{T}\sigma^{ab}\sigma_{ab}+\frac{\zeta_{\rm b}c}{T}\theta^2\ge0.
$$
The conclusion is a conditional identity for the stated smooth fields and closure; it asserts neither existence nor causality, stability, or empirical applicability of an evolution.

## Facts & Assumptions
**Given:** The Lorentzian and state data above, the stated stress and particle balances, zero particle diffusion, zero local power, and the three specified first-order constitutive assignments.

[A1] The geometry and local-state supplier chain carries Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]); no stronger choice principle is assumed.

[F1] [[def-tgr-local-fluid-state]]: a $C^2$ state map on a nonempty open set defines $n=v^{-1}$, $s=n\sigma_p$, $\epsilon=ne$, $T=e_{\sigma_p}$, $p=-e_v$, and $\mu=e+pv-T\sigma_p$; it fixes $x^0=ct$ and the geometric flux convention $q=cQ$.

[F2] [[lem-tgr-local-gibbs-euler]]: under its open-domain and $C^2$ hypotheses, $d\epsilon=T\,ds+\mu\,dn$ and $\epsilon+p=Ts+\mu n$. These are identities for the stated state function and its state map; the smooth hypotheses here satisfy the supplier's $C^2$ requirements.

[F3] [[lem-tgr-dissipative-entropy-identity]]: for the displayed stress/current decomposition and balances, $S^a=su^a+Q^a/T-\mu V^a/T$ obeys
$$\nabla_aS^a=-\frac{\Pi\theta+\pi^{ab}\sigma_{ab}}{T}-\frac{Q^a(\nabla_aT+Ta_a)}{T^2}-V^a\nabla_a(\mu/T)-\frac{u_bf^b}{T}.$$
The zero-diffusion and zero-local-power hypotheses here specialize precisely this identity.

[F4] [[lem-tgr-fluid-frame-projection]]: $\Delta$ is the orthogonal projection onto $u^\perp$, so projected vectors are spatial. Only its pointwise orthogonal-projection convention is used here.

[F5] [[lem-tgr-spatial-shear-properties]]: the displayed shear is symmetric, spatial in both indices, trace-free, and has nonnegative squared norm; the metric on $u^\perp$ is positive definite.

## Proof
1.1 [F1] fixes the state and $q=cQ$ convention, while [F2] supplies the Gibbs and Euler identities required by [F3]. By [F5], the closure $\pi^{ab}=-2\eta c\sigma^{ab}$ is symmetric, spatial and trace-free, so it satisfies [F3]'s stress hypotheses; $Q$ is spatial by [F4], and $V=0$. Since $u_bf^b=0$, the remaining balance hypotheses of [F3] also hold. Its entropy current reduces to $S^a=su^a+Q^a/T$. Because $Q$ is spatial, $Q^a(\nabla_aT+Ta_a)=Q^aX_a$, and therefore $$\nabla_aS^a=-\frac{\Pi\theta}{T}-\frac{\pi^{ab}\sigma_{ab}}{T}-\frac{Q^aX_a}{T^2}.$$ [A1, F1, F2, F3, F4, F5, given, algebra]

2.1 From $Q^a=-\kappa X^a/c$, $\Pi=-\zeta_{\rm b}c\theta$, and $\pi^{ab}=-2\eta c\sigma^{ab}$, the three terms in step 1.1 become, respectively, $\zeta_{\rm b}c\theta^2/T$, $2\eta c\sigma^{ab}\sigma_{ab}/T$, and $\kappa X^aX_a/(cT^2)$. The vector $X$ is spatial by [F4], so [F5]'s positive-definite rest metric gives $X^aX_a\ge0$; the same fact in [F5] gives $\sigma^{ab}\sigma_{ab}\ge0$. Since $c,T>0$ and the coefficient functions are nonnegative, their sum is the stated identity and is nonnegative. [step 1.1, F4, F5, algebra] ∎
