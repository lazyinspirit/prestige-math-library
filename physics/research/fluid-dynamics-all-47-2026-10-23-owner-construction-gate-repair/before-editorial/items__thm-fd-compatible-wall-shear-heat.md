---
id: thm-fd-compatible-wall-shear-heat
kind: theorem
title: "Global compatible no-slip shear evolution"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  - def-fd-flat-channel-domains
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-countable-choice
dependency_roles:
  def-fd-flat-channel-domains: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2, §§3.2.1–3.2.3"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $L_1,L_2,h,\nu>0$ and let $\Omega=(\mathbb R/L_1\mathbb Z)\times(0,h)\times(\mathbb R/L_2\mathbb Z)$ with periodic coordinates $x,z$ and no-slip walls $y=0,h$. Use product Lebesgue measure $dx\,dy\,dz$, with the quotient coordinates carrying their period-length measures. Suppose $F\in C^\infty([0,h])$ has a smooth odd $2h$-periodic extension to the real line. For $n\ge1$, define $b_n=(2/h)\int_0^hF(y)\sin(n\pi y/h)\,dy$ and
$$V(t,y)=\sum_{n=1}^\infty b_n e^{-\nu(n\pi/h)^2t}\sin(n\pi y/h),\qquad t\ge0.$$
Then $u(t,x,y,z)=(V(t,y),0,0)$ is a global smooth real solution, unique among all smooth velocity solutions with the same initial data, of the incompressible periodic-channel system $u_t+u\cdot\nabla u+\nabla\pi=\nu\Delta u$, $\operatorname{div}u=0$, $u|_{y=0,h}=0$, $u(0)=(F(y),0,0)$, with mean-zero pressure $\pi=0$. The same sine series defines a smooth $2h$-periodic function of $y$ on the full real line. For every $t\ge0$, $\|u(t)\|_{L^2(\Omega)}\le e^{-\nu(\pi/h)^2t}\|u(0)\|_{L^2(\Omega)}$. This theorem concerns the shear solution and smooth uniqueness for the same full-flow data; it gives no global regularity theorem for perturbed three-dimensional flows.

## Statement references

[[def-fd-flat-channel-domains]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice and the channel, viscosity, profile, and exact model system in the Statement.

[F1] The periodic flat channel has product Euclidean metric, periodic side coordinates, boundary faces $y=0,h$, and no-slip trace $u=0$ there ([[def-fd-flat-channel-domains]]).

[F2] Under Countable Choice, Fourier synthesis and Parseval hold on the normalized torus; rescaling $x=\pi y/h$ identifies the normalized circle of period $2h$, and odd functions synthesize through the sine basis ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[A1] Countable Choice is inherited from the Fourier-basis statement used to identify the odd Fourier series with the initial profile; no additional choice principle is spent ([[def-countable-choice]]).

[A2] The incompressible channel equation and no-slip wall law displayed in the Statement are the mathematical system being solved; no empirical fluid behavior is assumed.

## Proof

**Proof technique:** Odd Fourier synthesis of the one-dimensional heat equation, followed by direct substitution and smooth difference-energy uniqueness.

1.1 Let $\widetilde F$ be the stated smooth odd $2h$-periodic extension. Repeated integration by parts on the circle, with no boundary term because the integrands and derivatives are periodic, shows its Fourier coefficients decay faster than every inverse power of $n$. By [F2] and oddness, the sine coefficients are exactly $b_n$ and the sine series equals $F$ in $L^2(0,h)$; since both are continuous, the equality holds pointwise. Countable Choice [A1] is the Fourier-basis theorem's stated inherited assumption. [given, F2, A1, algebra]

2.1 For nonnegative integers $p,q$, the $(p,q)$ time/space derivative of the $n$th term in $V$ is bounded uniformly for $t\ge0$ and $0\le y\le h$ by $|b_n|\nu^p(n\pi/h)^{2p+q}$. The rapid coefficient decay from step 1.1 makes these bounds summable by choosing a decay power larger than $2p+q+1$. Thus every differentiated series converges uniformly on $[0,\infty)\times[0,h]$, so termwise differentiation is valid to all orders. Each term satisfies $V_t=\nu V_{yy}$ and vanishes at $y=0,h$, while step 1.1 gives $V(0,y)=F(y)$. [step 1.1, algebra]

3.1 The field $u=(V(y),0,0)$ is divergence-free because its first component is independent of $x$ and its other components vanish. Its convective derivative is $u\cdot\nabla u=V\partial_xu=0$ and $\Delta u=(V_{yy},0,0)$. Therefore step 2.1 gives the full system [A2] with constant pressure $\pi=0$ and the stated wall and initial traces. The pressure is mean-zero. [given, step 2.1, A2, algebra]

4.1 Let $u$ be this solution and $v$ any other smooth solution with the same data and mean-zero pressure; put $w=v-u$. Subtraction gives $w_t+v\cdot\nabla w+w\cdot\nabla u+\nabla(\pi_v-\pi_u)=\nu\Delta w$. Dot with $w$ and integrate on $\Omega$. Periodic side integrals cancel; the transport term is $\int v\cdot\nabla(|w|^2/2)=0$ because $\operatorname{div}v=0$ and $v\cdot n=0$ on the walls; pressure contributes $-\int(\pi_v-\pi_u)\operatorname{div}w=0$; integration by parts gives $-\nu\|\nabla w\|_2^2$ since $w=0$ on the walls. The remaining term is bounded by $\|\nabla u\|_\infty\|w\|_2^2$, so $z'= (\|w\|_2^2)'\le2\|\nabla u\|_\infty z$. Since $z(0)=0$, multiplying by $e^{-2\int_0^t\|\nabla u(s)\|_\infty ds}$ proves $z=0$. [given, step 3.1, F1, algebra]

5.1 Parseval on the odd extension yields $\|V(t)\|_{L^2(0,h)}^2=(h/2)\sum_{n\ge1}|b_n|^2e^{-2\nu(n\pi/h)^2t}\le e^{-2\nu(\pi/h)^2t}\|F\|_{L^2(0,h)}^2$. Multiplying by the finite periodic side area $L_1L_2$ and taking square roots proves the asserted decay. The preceding steps establish global smooth existence, full-flow smooth uniqueness for the data, and the bound. [step 2.1, step 3.1, step 4.1, F2] ∎

## Proof references

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.2.1–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)
