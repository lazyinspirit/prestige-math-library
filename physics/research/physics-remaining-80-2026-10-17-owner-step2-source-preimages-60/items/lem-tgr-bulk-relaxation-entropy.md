---
id: lem-tgr-bulk-relaxation-entropy
kind: lemma
title: Corrected bulk relaxation and exact extended entropy
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
  - def-countable-choice
  - lem-tgr-dissipative-entropy-identity
  - lem-tgr-perfect-fluid-projection
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-tgr-dissipative-entropy-identity: mathematical-premise
  lem-tgr-perfect-fluid-projection: mathematical-premise
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "PDF pp. 16–20, §§4.3 and 5.2–5.4: local Gibbs variables and perfect-stress balance conventions; the corrected bulk law is proved locally here."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "PDF pp. 7–13, §§3–4.2: non-equilibrium entropy-current and bulk-viscosity context; the specific corrected law and variable-coefficient identity here are separately stipulated and proved."
---

## Statement

Use the smooth $(-,+,+,+)$ Lorentzian data, local state, and conventions of [[lem-tgr-perfect-fluid-projection]] and [[lem-tgr-dissipative-entropy-identity]], with $n>0$, $T>0$, $c>0$, $x^0=ct$, and smooth future unit $u$. Assume positive $C^1$ coefficients $\zeta$ and $\tau$, set $\beta=\tau/\zeta$, and let $\Pi$ be a smooth scalar. In the bulk-only branch take

$$T^{ab}=\epsilon u^au^b+(p+\Pi)\Delta^{ab},\qquad J^a=nu^a,\qquad \nabla_aT^{ab}=0,\qquad \nabla_aJ^a=0,$$

where $\Delta^{ab}=g^{ab}+u^au^b$, $D=u^a\nabla_a$, $\theta=\nabla_au^a$, and $a^b_{\rm acc}=Du^b$. Adopt the corrected relaxation law

$$\beta D\Pi+\frac{\Pi}{\zeta c}=-\theta-\frac{T\Pi}{2}\nabla_a\!\left(\frac{\beta u^a}{T}\right)$$

and the extended entropy current $S^a=[s-\beta\Pi^2/(2T)]u^a$. Then the stress and particle equations imply

$$D\epsilon+(h+\Pi)\theta=0,\qquad (h+\Pi)a^b_{\rm acc}+\Delta^{ba}\nabla_a(p+\Pi)=0,\qquad Dn+n\theta=0,$$

and every actual smooth solution of the stated corrected law satisfies

$$\nabla_aS^a=\frac{\Pi^2}{\zeta cT}\ge0.$$

Here $\beta$ has units $\mathrm{Pa^{-1}}$, $\Pi,\epsilon,p,h$ have units Pa, $D,\theta,a_{\rm acc}$ have inverse-length components, and the correction $\beta\Pi^2/(2T)$ has the units of entropy density. The law is an explicit model assumption; dropping its derivative term does not yield the stated sign identity in general.

There is an exact homogeneous solution on Minkowski space: for constant state, $u=(1,0,0,0)$, constant positive $\zeta,\tau,T$, and $\Pi(t)=\Pi_0e^{-t/\tau}$, the stress and particle balances and the corrected law hold, with strict entropy production wherever $\Pi(t)\ne0$. This witness is not a general nonlinear existence theorem.

## Facts & Assumptions

**Given:** The smooth state and metric data specified above, positive $C^1$ coefficients $\zeta,\tau$, bulk scalar $\Pi$, the displayed stress and particle balances, and the displayed corrected relaxation law. All derivatives are classical; no solution existence is assumed beyond any particular smooth field set under discussion.

[A1] Countable choice $\mathrm{AC}_\omega$ is the only choice strength in the geometric supplier chain ([[def-countable-choice]]).

[F1] [[lem-tgr-perfect-fluid-projection]] (current batch-55 draft): for a smooth fixed-composition state and arbitrary smooth force $f$, the perfect stress $T_0^{ab}=\epsilon u^au^b+p\Delta^{ab}$ and $J^a=nu^a$ satisfy $D\epsilon+h\theta=-u_bf^b$, $ha^b_{\rm acc}+\Delta^{ba}\nabla_ap=\Delta^b{}_cf^c$, and $\nabla_aJ^a=0\iff Dn+n\theta=0$. Its Step 1 readiness is escalated because upstream state/Gibbs hashes are stale.

[F2] [[lem-tgr-dissipative-entropy-identity]] (current batch-55 draft): for the smooth dissipative stress with bulk pressure $\Pi$, zero heat flux, zero particle diffusion, zero shear, force $f=0$, and $\nabla_aJ^a=0$, the entropy current $su$ obeys $\nabla_a(su^a)=-\Pi\theta/T$. Its proof body is complete conditional on the same current state/Gibbs interfaces; Step 1 readiness is escalated for their stale hashes.

## Proof

1.1 Put $T_0^{ab}=\epsilon u^au^b+p\Delta^{ab}$ and define $f^b:=\nabla_aT_0^{ab}=-\nabla_a(\Pi\Delta^{ab})$. Since $\nabla g=0$, $\nabla_a\Delta^{ab}=\theta u^b+a^b_{\rm acc}$, so $\nabla_a(\Pi\Delta^{ab})=\Delta^{ba}\nabla_a\Pi+\Pi(\theta u^b+a^b_{\rm acc})$. Apply [F1] to $T_0$ with this force: contracting the force term with $u_b$ yields $D\epsilon+h\theta=-\Pi\theta$, while its spatial projection gives $ha^b_{\rm acc}+\Delta^{ba}\nabla_ap=-\Delta^{ba}\nabla_a\Pi-\Pi a^b_{\rm acc}$. The particle balance is unchanged. Rearrangement gives the three projected equations in the Statement. [A1, F1, given, algebra]

1.2 Apply [F2] to the full bulk-only stress and particle balance with zero force; it gives $\nabla_a(su^a)=-\Pi\theta/T$. Product differentiation of the correction gives $\nabla_a[(\beta\Pi^2/(2T))u^a]=\beta\Pi D\Pi/T+(\Pi^2/2)\nabla_a(\beta u^a/T)$. Therefore $\nabla_aS^a=-(\Pi/T)[\theta+\beta D\Pi+(T\Pi/2)\nabla_a(\beta u^a/T)]$. The corrected law makes the bracket $-\Pi/(\zeta c)$, proving $\nabla_aS^a=\Pi^2/(\zeta cT)\ge0$ because $\zeta,c,T>0$. [A1, F2, given, algebra]

2.1 For the homogeneous witness, constant $n,\sigma_p,T,\epsilon,p,u$ give $\nabla_aJ^a=0$ and $\nabla_aT^{a0}=0$, $\nabla_aT^{ai}=\partial_i(p+\Pi)=0$. Also $D\Pi=c^{-1}\partial_t\Pi=-\Pi/(c\tau)$, $\theta=0$, and $\nabla_a(\beta u^a/T)=0$, so the two terms on the left of the corrected law cancel and its right side vanishes. The entropy formula in step 1.2 is strict when $\Pi_0\ne0$. If a chosen near-equilibrium domain bounds $|\Pi|$, any sufficiently small $|\Pi_0|$ remains in it for $t\ge0$. [given, step 1.2, algebra] ∎
