---
title: Real HUM operator for the trajectory linearization
status: draft
research_item: def-se-real-hum
dependency_level: 14
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 19: ` Proof of Theorem 1.4, Sw and Gw `; PDF p. 20: ` Gw is defined accordingly `

## Prerequisites

- [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution)
- [def-se-hum-map](item-def-se-hum-map)
- [def-se-linearized-pair](item-def-se-linearized-pair)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [lem-se-real-evolution-duhamel-bound](item-lem-se-real-evolution-duhamel-bound)
- [lem-se-real-hilbert-dualization](item-lem-se-real-hilbert-dualization)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Definition

Assume the Axiom of Choice and hypotheses (H) and (W) of [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution). Thus $T>0$, $\Omega$ is the smooth connected exterior of the compact nontrapping obstacle, $\lambda\in\mathbb R\setminus\{0\}$, and the reference trajectory $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ satisfies the equation specified in (W). Let $\varphi$ be the real control cutoff in [def-se-linearized-pair](item-def-se-linearized-pair). For $s\in\{1,2\}$ put $\sigma=-s$, $E=H_D^s(\Omega)$ and $F=H_D^\sigma(\Omega)$. These complex Hilbert spaces are regarded as real Hilbert spaces, with real part of the respective complex inner product. Set $\Lambda_s=(I-\Delta_D)^s:E\to F$ as in [def-se-hum-map](item-def-se-hum-map).

Let $P(t,r):E\to E$ be the homogeneous forward or backward evolution of the first system in [def-se-linearized-pair](item-def-se-linearized-pair), and let $U(t):F\to F$ be the evolution from time zero of its real-duality adjoint system. For $v_0\in F$, define $v(t)=U(t)v_0$ and $h_{v_0}(t)=-i\Lambda_s^{-1}(\varphi v(t))$. Let $z_{v_0}\in C([0,T];E)$ be the unique mild solution of the controlled first system with terminal value $z_{v_0}(T)=0$. Define $S_w:F\to E$ by $S_wv_0=z_{v_0}(0)$.

If $S_w$ is a bijection with bounded inverse, define the real-linear exact-control selection $G_w:E\times E\to C([0,T];E)$ by $G_w(x_0,x_T)=h_{v_0}$, where $v_0=S_w^{-1}(x_0-P(0,T)x_T)$. Here $C([0,T];E)$ means norm-continuous paths with the supremum norm. The inverse hypothesis is part of this definition of $G_w$; it is not asserted by the definition of $S_w$.

## Definition references

[prop-se-perturbed-evolution](item-prop-se-perturbed-evolution)

[def-se-hum-map](item-def-se-hum-map)

[def-se-linearized-pair](item-def-se-linearized-pair)

[lem-se-real-hilbert-dualization](item-lem-se-real-hilbert-dualization)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Justification

The geometry, trajectory, two equations and propagators are those of [def-se-linearized-pair](item-def-se-linearized-pair) and [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution). The latter supplies bounded real-linear homogeneous evolutions on $E$ and $F$, including their inverse evolution identities. The full Choice assumption is retained from that evolution result. By [lem-se-real-hilbert-dualization](item-lem-se-real-hilbert-dualization), realification gives real Hilbert spaces with the original norms; no complex linearity of the perturbed evolutions is assumed.

By [def-se-hum-map](item-def-se-hum-map), $\Lambda_s^{-1}:F\to E$ is bounded. The cutoff acts boundedly on $F$ by [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers), and $t\mapsto U(t)v_0$ is continuous in $F$. Hence $h_{v_0}\in C([0,T];E)$, with a norm bounded by a constant times $\|v_0\|_F$. The meaning of this continuous-path space is fixed by [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

The inhomogeneous mild solution is given by $z(t)=P(t,T)z(T)+\int_T^t P(t,r)(-i\varphi h(r))\,dr$, with an oriented Bochner integral. The bounded multiplier and the real evolution construction in [lem-se-real-evolution-duhamel-bound](item-lem-se-real-evolution-duhamel-bound) give existence, uniqueness and a uniform bound for continuous $E$-valued controls. In particular, $S_w$ is a well-defined bounded real-linear map. The factor $-i$ remains inside $P(t,r)$; a real-linear evolution need not commute with multiplication by $i$.

Under the additional bounded-inverse hypothesis, let $y=x_0-P(0,T)x_T$ and $v_0=S_w^{-1}y$. The backward solution associated with $h_{v_0}$ starts at $y$ and ends at zero. Adding the homogeneous solution $P(t,0)P(0,T)x_T$ gives a controlled solution starting at $x_0$ and ending at $x_T$, by the evolution identities. Thus the displayed $G_w$ selects a control steering the two endpoints. Its real linearity and boundedness follow by composition of the bounded real-linear maps in its definition. This argument does not establish the bounded-inverse hypothesis.

## Source notes

The original article supplies the constructions and notation on PDF pages 19–20. It is cited for attribution; the well-definedness argument uses the stated mathematical suppliers.
