---
id: lem-rpm-charge-gauge-boundary
kind: lemma
title: "Gauge boundary term and kinetic/canonical momentum"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - thm-clairaut-schwarz-mixed-partials
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-implies-integrable
  - def-gr-smooth-lorentzian-objects
  - def-countable-choice
  - thm-ftc-second-part
dependency_roles:
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-ftc-second-part: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 lecture-note excerpt"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
      locator: "Author-hosted Chapter 1 excerpt; §1.1 fixed-endpoint Euler–Lagrange variation and §1.2.3, equation (1.20), printed pp. 8–28. Equation (1.20) uses the interaction sign -q A_mu dx^mu; this library adopts +q A(U) with its own electromagnetic tensor convention, so the source is contextual and does not supply the library sign or curved-background assumption. The cited section gives action context only; the local gauge-boundary identity is proved in this item."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/pdf/1102.0529v3"
      locator: "Author manuscript, arXiv v3, §18.1, equations (18.3)–(18.7), printed pp. 96–97: the proper-length particle action, electromagnetic interaction e∫A_mu dz^mu, reparameterization invariance, and the Lorentz-force equation. The source varies a coupled field-particle system and warns that its point-particle equation is only formal because the self-field is singular on the worldline; it is cited as context, not as a derivation of this prescribed smooth external-field model."
verification: {}
---

## Statement

Let $M$ be a smooth Hausdorff second-countable four-manifold without boundary and $O\subseteq M$ open. Adopt $\mathrm{AC}_\omega$ of [[def-countable-choice]] for the tangent-bundle structure used in [[def-gr-smooth-lorentzian-objects]]. On $O$, let $g$ be a $C^2$ symmetric nondegenerate covariant two-tensor of signature $(-,+,+,+)$ and $N$ a $C^1$ tangent vector field with $g(N,N)<0$. Here $C^k$ means that all chart components have continuous derivatives through order $k$. A tangent vector $v$ is future timelike when $g(v,v)<0$ and $g(v,N)<0$, as in that supplier; these definitions apply at the stated finite regularity. Let $A$ be a $C^2$ one-form on $O$ and $F=dA$, where $(dA)_{ab}=\partial_aA_b-\partial_bA_a$. Let $\chi\in C^3(O,\mathbb R)$ and set $A^\chi:=A+d\chi$. For $a<b$, any $C^2$ future-timelike curve segment $z:[a,b]\to O$ parameterized by proper time $\tau$ so $g(z',z')=-c^2$ for $c>0$, define its four-velocity by $U:=dz/d\tau=z'$, and $U^\flat:=g(U,\cdot)$. All constants in this mathematical lemma are real scaling parameters, without an asserted physical unit. For constants $m>0$ and $q\in\mathbb R$ and the functional

$$S_A[z]=-mc\int_a^b\sqrt{-g(z',z') }\,d\tau+q\int_a^b A(z')\,d\tau,$$

the field strength is unchanged, $dA^\chi=dA$, and

$$S_{A^\chi}[z]-S_A[z]=q\bigl(\chi(z(b))-\chi(z(a))\bigr).$$

The same action formula and boundary identity apply to any $C^2$ future-timelike curve on $[a,b]$ with an arbitrary parameter: replace $\tau$ by that parameter and use its velocity in the integrands. For $\epsilon_0>0$, a fixed-endpoint variation is a jointly $C^2$ map $Z:(-\epsilon_0,\epsilon_0)\times[a,b]\to O$, extending to a neighbourhood of the closed interval, with $Z(0,\cdot)=z$, fixed endpoint values, and future-timelike parameter velocities; its members need not retain proper-time normalization. Stationarity means vanishing of the action derivative at $\epsilon=0$ for every such variation. Thus the difference is constant over every fixed-endpoint variation, so stationarity and the kinetic covector $p:=mU^\flat$ are gauge invariant. If the local covector $\pi_A:=p+qA$ is defined, then $\pi_{A^\chi}=\pi_A+q\,d\chi$. These are local statements on $O$; they assert no global exactness of $F$.

## Facts & Assumptions

**Given:** The manifold, open domain, Lorentzian metric, time orientation and countable-choice hypothesis specified above; a $C^2$ one-form; a $C^3$ scalar $\chi$; a nondegenerate segment $[a,b]$ with $a<b$; a $C^2$ future-timelike curve parameterized by proper time; constants $m>0$, $q\in\mathbb R$, $c>0$; and fixed endpoints for the variations under consideration.

[A1] [[def-countable-choice]]: assume $\mathrm{AC}_\omega$ for the supplied tangent-bundle structure.

[F4] [[def-gr-smooth-lorentzian-objects]]: on a smooth four-manifold, a Lorentzian metric has signature $(-,+,+,+)$; relative to a timelike orientation field $N$, a future-timelike tangent $v$ satisfies $g(v,v)<0$ and $g(v,N)<0$. The Statement explicitly uses these pointwise definitions at finite regularity.

[F1] [[thm-clairaut-schwarz-mixed-partials]]: for a $C^2$ scalar function on an open Euclidean set, every pair of coordinate mixed second partial derivatives commutes.

[F2] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable Euclidean maps, $D(f\circ z)=Df(z)\circ Dz$; apply in charts to $\chi\circ z$. The resulting scalar derivative is continuous, hence integrable on $[a,b]$ by [[thm-continuous-implies-integrable]].

[F3] [[thm-ftc-second-part]]: for a continuously differentiable scalar function on a compact interval, the integral of its derivative is the difference of its endpoint values.

## Proof

**Proof technique:** direct.

1.1 In any chart, $F^\chi_{ab}=\partial_a(A_b+\partial_b\chi)-\partial_b(A_a+\partial_a\chi)=F_{ab}+\partial_a\partial_b\chi-\partial_b\partial_a\chi=F_{ab}$ by [F1]; hence $dA^\chi=dA$. [given, A1, F1, F4, algebra]

1.2 By the chain rule [F2], $d\chi(U)=\frac{d}{d\tau}\chi(z(\tau))$. Its derivative is continuous on the closed interval (with one-sided endpoint derivatives), so [F2] and [F3] give $q\int_a^b d\chi(U)\,d\tau=q[\chi(z(b))-\chi(z(a))]$, which is the stated action difference. [given, F2, F3]

2.1 For a fixed-endpoint variation, $z_\epsilon(a)$ and $z_\epsilon(b)$ are constant in $\epsilon$, so the action difference in step 1.2 has zero $\epsilon$-derivative; hence the first variations agree and stationarity is unchanged. The free kinetic covector $p=mU^\flat$ is unchanged, while $\pi_{A^\chi}=p+q(A+d\chi)=\pi_A+q\,d\chi$. No step assumes that a closed two-form has a global potential. [step 1.1, step 1.2, algebra] ∎
