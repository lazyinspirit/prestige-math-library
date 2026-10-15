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
  - thm-chain-rule
  - thm-ftc-second-part
dependency_roles:
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-ftc-second-part: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 lecture-note excerpt"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
      locator: "Complete 55-page Chapter 1 excerpt; §1.1 fixed-endpoint Euler–Lagrange variation and §1.2.3, especially equation (1.21), printed pp. 8–28. The curved local variation is proved from inspected mathematical suppliers."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/html/1102.0529v3"
      locator: "Complete author manuscript, arXiv v3, §5.2.1: curved charged-particle interaction/action and worldline equation, with the singular self-field limitation kept separate from the prescribed external-field model."
verification: {}
---

## Statement

Let $O$ be a potential domain with a $C^2$ metric $g$, a $C^2$ one-form $A$, and $F=dA$. Let $\chi\in C^3(O,\mathbb R)$ and set $A^\chi:=A+d\chi$. For $a<b$, any $C^2$ future-timelike curve segment $z:[a,b]\to O$ parameterized by proper time $\tau$ so $g(z',z')=-c^2$ for $c>0$, constants $m>0$ and $q\in\mathbb R$, and the functional

$$S_A[z]=-mc\int_a^b\sqrt{-g(z',z') }\,d\tau+q\int_a^b A(z')\,d\tau,$$

the field strength is unchanged, $dA^\chi=dA$, and

$$S_{A^\chi}[z]-S_A[z]=q\bigl(\chi(z(b))-\chi(z(a))\bigr).$$

Thus the difference is constant over every fixed-endpoint variation, so stationarity and the kinetic covector $p:=mU^\flat$ are gauge invariant. If the local covector $\pi_A:=p+qA$ is defined, then $\pi_{A^\chi}=\pi_A+q\,d\chi$. These are local statements on $O$; they assert no global exactness of $F$.

## Facts & Assumptions

**Given:** A $C^2$ metric and one-form on a potential domain; a $C^3$ scalar $\chi$; a nondegenerate segment $[a,b]$ with $a<b$; a $C^2$ future-timelike curve parameterized by proper time; constants $m>0$, $q\in\mathbb R$, $c>0$; and fixed endpoints for the variations under consideration.

[F1] [[thm-clairaut-schwarz-mixed-partials]]: for a $C^2$ scalar function on an open Euclidean set, every pair of coordinate mixed second partial derivatives commutes.

[F2] [[thm-chain-rule]]: differentiating a composition of differentiable real functions gives $(f\circ g)'=(f'\circ g)g'$ under its stated limit-point hypotheses.

[F3] [[thm-ftc-second-part]]: for a continuously differentiable scalar function on a compact interval, the integral of its derivative is the difference of its endpoint values.

## Proof

**Proof technique:** direct.

1.1 In any chart, $F^\chi_{ab}=\partial_a(A_b+\partial_b\chi)-\partial_b(A_a+\partial_a\chi)=F_{ab}+\partial_a\partial_b\chi-\partial_b\partial_a\chi=F_{ab}$ by [F1]; hence $dA^\chi=dA$. [given, F1, algebra]

1.2 By the chain rule [F2], $d\chi(U)=\frac{d}{d\tau}\chi(z(\tau))$. Applying [F3] gives $q\int_a^b d\chi(U)\,d\tau=q[\chi(z(b))-\chi(z(a))]$, which is the stated action difference. [given, F2, F3]

2.1 For a fixed-endpoint variation, $z_\epsilon(a)$ and $z_\epsilon(b)$ are constant in $\epsilon$, so the action difference in step 1.2 has zero $\epsilon$-derivative; hence the first variations agree and stationarity is unchanged. The free kinetic covector $p=mU^\flat$ is unchanged, while $\pi_{A^\chi}=p+q(A+d\chi)=\pi_A+q\,d\chi$. No step assumes that a closed two-form has a global potential. [step 1.1, step 1.2, algebra] ∎
