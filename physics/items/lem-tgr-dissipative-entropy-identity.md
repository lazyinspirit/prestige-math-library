---
id: lem-tgr-dissipative-entropy-identity
kind: lemma
title: "Frame-qualified dissipative entropy cancellation"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-tgr-local-fluid-state
  - lem-tgr-local-gibbs-euler
  - def-gr-smooth-lorentzian-objects
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-countable-choice
dependency_roles:
  def-tgr-local-fluid-state: mathematical-premise
  lem-tgr-local-gibbs-euler: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
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
      locator: "PDF pp. 16–20, §§4.3 and 5.2–5.4: local Gibbs identity and the perfect-stress energy projection used as the baseline."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "PDF pp. 7–13, §§3–4.1: dissipative stress decomposition and entropy-current divergence for its stated conformal, zero-charge scope."
---

## Statement

Let $(M,g,N)$, $u$, $\nabla$, and the fixed-composition state be as in
[[def-tgr-local-fluid-state]] and [[lem-tgr-local-gibbs-euler]], with
$g(u,u)=-1$, $n>0$, and $T>0$. Define
$\Delta^{ab}=g^{ab}+u^au^b$, $\Delta_{ab}=g_{ab}+u_au_b$,
$\Delta_a{}^b=\delta_a{}^b+u_au^b$, and $D=u^a\nabla_a$,
$\theta=\nabla_a u^a$, $a^b=u^a\nabla_a u^b$, and the spatial symmetric
trace-free shear

$$\sigma_{ab}=\Delta_a{}^c\Delta_b{}^d\nabla_{(c}u_{d)} -\frac{\theta}{3}\Delta_{ab},$$

where parentheses denote the averaged symmetric part. Suppose smooth fields
$\Pi$, $Q^a$, $V^a$, and $\pi^{ab}$ obey $u_aQ^a=u_aV^a=0$,
$u_a\pi^{ab}=0$, and $\pi^{ab}$ is symmetric with $g_{ab}\pi^{ab}=0$. Set

$$T^{ab}=\epsilon u^au^b+(p+\Pi)\Delta^{ab} +u^aQ^b+Q^au^b+\pi^{ab},\qquad J^a=nu^a+V^a.$$

If $\nabla_aT^{ab}=f^b$ and $\nabla_aJ^a=0$, the vector field

$$S^a=su^a+\frac{Q^a}{T}-\frac{\mu V^a}{T}$$

satisfies the exact identity

$$\nabla_aS^a=-\frac{\Pi\theta+\pi^{ab}\sigma_{ab}}{T} -\frac{Q^a(\nabla_aT+Ta_a)}{T^2} -V^a\nabla_a\!\left(\frac{\mu}{T}\right)-\frac{u_bf^b}{T}.$$

This identity applies to the stated smooth fields and conventions; it does not
select a constitutive law or assert that any such fields solve an evolution
problem.

## Facts & Assumptions

**Given:** A nonempty open set $O$ and the smooth Lorentzian data of
[[def-tgr-local-fluid-state]], a $C^2$ state map into a nonempty open state
domain, the thermodynamic identities of [[lem-tgr-local-gibbs-euler]], and the
stress and particle balances displayed in the Statement.

[A1] The spacetime and tensor construction assumes Countable Choice
$\mathrm{AC}_\omega$ ([[def-countable-choice]]); no stronger choice principle is
used.

[F1] [[def-tgr-local-fluid-state]] (current batch-53 draft): on a nonempty open
set $O$, the observer field is smooth and future unit timelike; a local state
has a nonempty open domain $X\subset(0,\infty)\times\mathbb R$, a specified
$e\in C^2(X)$, and a $C^2$ state map $(v,\sigma_p):O\to X$. It defines
$n=v^{-1}>0$, $s=n\sigma_p$, $\epsilon=ne$, $T=e_{\sigma_p}$,
$p=-e_v$, $H=e+pv$, $h=\epsilon+p=nH$, and $\mu=H-T\sigma_p$.

[F2] [[lem-tgr-local-gibbs-euler]] (current batch-53 draft): under the stated
nonempty open-domain and $C^2$ hypotheses, it gives
$d\epsilon=T\,ds+\mu\,dn$ and $\epsilon+p=Ts+\mu n$. Applying the first
identity to the state map along $D$ gives the directional identity used below.
This use is conditional on the current draft carrier.

[F3] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: the induced
tensor derivative satisfies the product rule, $\nabla g=0$, and contraction
commutes with differentiation.

[F4] In the SI convention of [F1], $u$ and $\Delta$ are dimensionless,
$D,\theta,a,\sigma$ have inverse-length components,
$\epsilon,p,\Pi,Q,\pi$ have units Pa, $n,V$ have units $\mathrm{marker\,m^{-3}}$,
$s$ has units $\mathrm{J\,K^{-1}m^{-3}}$, $T$ has units K, and $\mu$ has units
J per marker. The force density $f$ has units $\mathrm{N\,m^{-3}}$, the
physical heat flux is $q=cQ$, and $c$ has units $\mathrm{m\,s^{-1}}$.

[A2] Define $\Delta^{ab}=g^{ab}+u^au^b$, $D=u^a\nabla_a$,
$\theta=\nabla_a u^a$, and $a^b=u^a\nabla_a u^b$. The stress decomposition,
spatial symmetries, and balance equations are exactly those in the Statement.

## Proof

1.1 From metric compatibility,
$\nabla_a\Delta^{ab}=\theta u^b+a^b$ and $u_b\nabla_a u^b=0$. The perfect
energy term contracts as
$u_b\nabla_a(\epsilon u^au^b)=-D\epsilon-\epsilon\theta$; the isotropic
pressure term contributes $-(p+\Pi)\theta$. Orthogonality and the product
rule give
$u_b\nabla_a(u^aQ^b)=-Q^ba_b$ and
$u_b\nabla_a(Q^au^b)=-\nabla_aQ^a$. Finally
$u_b\nabla_a\pi^{ab}=-\pi^{ab}\nabla_a u_b=-\pi^{ab}\sigma_{ab}$:
the spatial symmetric trace-free tensor $\pi$ annihilates the antisymmetric
part of $\nabla u$ and its isotropic spatial trace. Thus the stress balance is
$$D\epsilon+h\theta+\Pi\theta+\nabla_aQ^a+Q^aa_a +\pi^{ab}\sigma_{ab}=-u_bf^b.$$
[A1, A2, F1, F3, algebra]

2.1 The particle balance gives
$Dn+n\theta=-\nabla_aV^a$. By [F2],
$$D\epsilon+h\theta=T(Ds+s\theta)+\mu(Dn+n\theta) =T\nabla_a(su^a)-\mu\nabla_aV^a.$$
Substitution in step 1.1 yields
$$T\nabla_a(su^a)=-\Pi\theta-\pi^{ab}\sigma_{ab} -\nabla_aQ^a-Q^aa_a+\mu\nabla_aV^a-u_bf^b.$$
[A2, F2, step 1.1, algebra]

3.1 By the definition $S^a=su^a+Q^a/T-\mu V^a/T$, its divergence is
$\nabla_a(su^a)+\nabla_a(Q^a/T)-\nabla_a(\mu V^a/T)$: the last derivative is
subtracted. The product rule gives
$$\nabla_a\!\left(\frac{Q^a}{T}\right)=\frac{\nabla_aQ^a}{T}-\frac{Q^a\nabla_aT}{T^2},\qquad \nabla_a\!\left(\frac{\mu V^a}{T}\right)=\frac{\mu}{T}\nabla_aV^a+V^a\nabla_a\!\left(\frac{\mu}{T}\right).$$
Substituting these expressions and step 2.1 gives
$$\nabla_aS^a=\frac{-\Pi\theta-\pi^{ab}\sigma_{ab}-\nabla_aQ^a-Q^aa_a+\mu\nabla_aV^a-u_bf^b}{T}+\frac{\nabla_aQ^a}{T}-\frac{Q^a\nabla_aT}{T^2}-\frac{\mu\nabla_aV^a}{T}-V^a\nabla_a\!\left(\frac{\mu}{T}\right).$$
The $\nabla_aQ^a/T$ and $\mu\nabla_aV^a/T$ terms cancel with the displayed
opposite-sign terms. The remaining heat terms combine as
$-Q^a\nabla_aT/T^2-Q^aa_a/T=-Q^a(\nabla_aT+Ta_a)/T^2$, proving the stated
identity. Since $Q,V$ are spatial, only the rest-space projections of the
corresponding gradients contribute. [step 2.1, A2, algebra] ∎
