---
id: prop-emg-xs-kn-dyonic-flux
kind: proposition
title: Dyonic Kerr-Newman parameters and conserved electric/magnetic flux
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - def-emg-xs-kn-full-sphere-exterior
  - thm-emg-xs-kn-verification
  - lem-emg-xs-duality
  - thm-stokes-theorem-for-smooth-singular-chains
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
dependency_roles:
  thm-emg-xs-kn-verification: mathematical-premise
  lem-emg-xs-duality: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-emg-xs-kn-full-sphere-exterior: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): the KN metric, Maxwell field and direct Newman-Penrose verification"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113), printed pp. 201-203 (PDF pp. 207-209): the dyonic RN field and finite-charge context"
physical_scope: null
---


## Statement

Let $M,a,q\in\mathbb R$ and choose an auxiliary length $\ell_*>0$. Use the
full-sphere exterior extension
[[def-emg-xs-kn-full-sphere-exterior]] with parameters $(M,a,q)$ on an annulus
$r\in(R_0,R_1)\subset(0,\infty)$ where $\Delta>0$. For example, take
$R_0=4|M|+\ell_*$. For every $r>R_0$, $1-2M/r>1/2$ and
$(a^2+q^2)/r^2\ge0$, so $\Delta/r^2>1/2$. For constant
$\beta\in\mathbb R$,
the dual-rotated field $\mathcal F_\beta=\cos\beta\,\mathcal F+
\sin\beta\,\star_g\mathcal F$ has flux parameters
$$q_e=q\cos\beta,\qquad q_m=q\sin\beta.$$
The metric depends on these two parameters only through
$q_e^2+q_m^2=q^2$. The unrotated electric field has zero magnetic sphere flux
and electric sphere flux $4\pi q$. Flux conservation is asserted only between
finite homologous exterior spheres; no quantization or noncompact side-flux
claim is made.

## Facts & Assumptions

**Given:** The electric KN datum, its source-free field equations, a full
sphere $S_r$ in an exterior annulus, and a constant duality angle $\beta$.

[F1] [[thm-emg-xs-kn-verification]]: the electric KN equations hold on every
pole-free chart and on the full-sphere exterior extension.

[F2] [[lem-emg-xs-duality]]: a constant dual rotation preserves the source-free
Maxwell equations and the tensor $Q_{ab}$.

[F3] [[def-emg-xs-kn-full-sphere-exterior]]: on $r>R_0>4|M|$ the metric and
potential extend smoothly across both poles; $\lambda=X\,dY-Y\,dX$ is the
global form agreeing with $\sin^2\theta\,d\phi$ away from the poles.

[F5] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a finite smooth
singular chain $c$ and smooth form $\eta$, $\int_c d\eta=\int_{\partial c}\eta$;
the chain integral is additive and its boundary is the signed face chain.

[F4] [[thm-continuous-implies-integrable]] makes a continuous real integrand on a compact interval Riemann integrable. [[thm-ftc-second-part]] evaluates its integral as $G(b)-G(a)$ when it is the derivative of a differentiable primitive $G$.

[A1] $R_0=4|M|+\ell_*$ with $\ell_*>0$, so $r>R_0$ implies $\Delta>0$.
The rational Boyer-Lindquist formulas are used only on $0<\theta<\pi$;
the global fields at the poles are those of [F3].

## Proof


1.1 On the sphere let $X=\sin\theta\cos\phi$ and $Y=\sin\theta\sin\phi$. Then $\lambda=X\,dY-Y\,dX=\sin^2\theta\,d\phi$ away from the poles, and [F3] proves this is a global smooth one-form. At a fixed $(x^0,r)$, represent $S_r$ by the oriented radial projections of the eight octahedral faces; each projection extends smoothly to a neighborhood of its face, shared edges cancel, and the resulting finite smooth singular two-chain has zero boundary. The global potential $\bar{\mathcal A}=-qr\Sigma^{-1}(dx^0-a\lambda)$ is smooth since $\Sigma>0$. Hence $\bar{\mathcal F}=d\bar{\mathcal A}$ and [F5] gives $\int_{S_r}\bar{\mathcal F}=\int_{\partial S_r}\bar{\mathcal A}=0$. [F1, F3, F5, A1, construct, algebra]

1.2 For the explicit unit-sphere parametrization $s(\theta,\phi)=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$, direct differentiation gives $s\cdot(s_\theta\times s_\phi)=\sin\theta$. Thus its outward area form pulls back to $\sin\theta\,d\theta\wedge d\phi$. By [F4], the continuous sine density is integrable and its primitive $-\cos\theta$ evaluates each polar integral. Integrating on $\delta\le\theta\le\pi-\delta$, $0\le\phi\le2\pi$ gives $4\pi\cos\delta$; the two caps have total area $4\pi(1-\cos\delta)$ by the same bounded polar density, tending to zero. Hence $\int_{S^2}\omega=4\pi$. In the oriented $(x^0,r,\theta,\phi)$ coordinates, direct raising of $\mathcal F_{r0}=q(r^2-a^2y^2)/\Sigma^2$ and $\mathcal F_{r\phi}=-a\sin^2\theta\,\mathcal F_{r0}$ with the KN inverse metric gives $$(\star_g\mathcal F)_{\theta\phi} =\frac{q(r^2+a^2)(r^2-a^2y^2)\sin\theta}{\Sigma^2} =q\sin\theta+O(r^{-2})\sin\theta,$$ The numerator factor minus $\Sigma^2$ is $a^2r^2(1-3y^2)-a^4y^2(1+y^2)$, whose absolute value is at most $2a^2r^2+2a^4$ for $|y|\le1$. Since $\Sigma^2\ge r^4$, the remainder is uniformly $O(r^{-2})$ on the sphere. Hence $\lim_{r\to\infty}(4\pi)^{-1}\int_{S_r}\star_g\mathcal F=q$. [F1, F4, A1, algebra]

2.1 For $R_0<r_1<r_2$, in the fixed-$x^0$ slice of step 1.1, take the product of each of the same eight projected triangular faces with $[r_1,r_2]$. Each triangular prism splits into three tetrahedra; their oriented sum is a finite smooth singular three-chain $\mathcal C$, internal faces cancel, and its boundary is $S_{r_2}-S_{r_1}$. By steps 1.1-1.2 and [F1], $d(\star_g\mathcal F)=0$ on this shell. Stokes [F5] therefore gives $$\int_{S_{r_2}}\star_g\mathcal F-\int_{S_{r_1}}\star_g\mathcal F=\int_{\partial\mathcal C}\star_g\mathcal F=\int_\mathcal C d(\star_g\mathcal F)=0.$$ Step 1.2 identifies the common value as $4\pi q$. [F1, F3, F5, A1, step 1.1, step 1.2, construct, algebra]

3.1 The fluxes of $\mathcal F_\beta$ satisfy $\star_g\mathcal F_\beta=\cos\beta\,\star_g\mathcal F-\sin\beta\,\mathcal F$ by [F2]. Dividing the two sphere integrals by $4\pi$ and using steps 1.1 and 2.1 gives $q_e=q\cos\beta$ and $q_m=q\sin\beta$. [F2, step 1.1, step 2.1, algebra]

4.1 The metric function $\Delta=r^2-2Mr+a^2+q^2$ is unchanged because $q_e^2+q_m^2=q^2(\cos^2\beta+\sin^2\beta)=q^2$. The stress tensor is unchanged by [F2], so the same metric satisfies the dyonic geometric electrovac equations. This is a classical flux normalization; no integrality condition follows. [F1, F2, step 3.1, algebra] ∎

## Remarks

The asymptotic limit is used only to evaluate the electric flux constant on a
finite exterior sphere. It is not an assertion of charge conservation on an
arbitrary noncompact region.

