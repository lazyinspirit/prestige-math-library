---
id: ex-tgrmath-cattaneo-damped-mode
kind: example
title: "Damped Cattaneo Fourier mode"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-tgr-cattaneo-stability-causality]
dependency_roles:
  lem-tgr-cattaneo-stability-causality: mathematical-premise
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "N. Andersson and G. L. Comer, Variational multifluid dynamics and causal heat conductivity, arXiv:0908.1707v1"
      url: "https://arxiv.org/pdf/0908.1707"
      locator: "Full paper; §4 equations (4.9)–(4.12), constant-parameter Cattaneo mode equations."
    - title: "N. Andersson and G. L. Comer, Heat conduction in rotating relativistic stars, arXiv:1804.01520v1"
      url: "https://arxiv.org/pdf/1804.01520"
      locator: "Full paper; §2.1, equations (1)–(3), the relaxation equation and telegrapher equation."
---

## Example

Choose $C,\kappa,\tau,T_0,L>0$ and an integer $n\ge1$. Set $k:=2\pi n/L$ and assume $k^2>C/(4\tau\kappa)$. Let $\Theta\in\mathbb R$ with $0<|\Theta|<T_0$ and

$$\omega:=\sqrt{\frac{\kappa k^2}{C\tau}-\frac{1}{4\tau^2}},\qquad \phi(t):=\Theta e^{-t/(2\tau)}\cos(\omega t).$$

On $\mathbb T_L^3$, let $e_1=(1,0,0)$ be the first standard basis vector of $\mathbb R^3$ and define

$$\theta(t,x):=\phi(t)\cos(kx_1),\qquad q(t,x):=-\frac{C}{k}\phi'(t)\sin(kx_1)e_1.$$

This is a nonzero, smooth, spatially periodic solution for every $t\in\mathbb R$ of the linear Cattaneo subsystem

$$C\theta_t+\operatorname{div}q=0,\qquad \tau q_t+q=-\kappa\nabla\theta.$$

Under the conventional SI interpretation of [F1], $L$ is measured in m, $k$ in m$^{-1}$, $\omega$ in s$^{-1}$, and $\Theta,\phi,\theta,T_0$ in K; the units of $C,\kappa,\tau,q$ are those stated in [F1]. These unit labels do not assert a material realization.

For $t\ge0$, the proxy field $T_0+\theta$ remains positive, and its oscillation envelope decays as $e^{-t/(2\tau)}$. The physical-temperature interpretation is limited to the interval where $T_0+\theta>0$.

## Facts & Assumptions

**Given:** The positive parameters, integer $n$, wave number $k$, strict underdamping condition, and real amplitude $\Theta$ with $0<|\Theta|<T_0$ in the Example.

[F1] [[lem-tgr-cattaneo-stability-causality]] defines the fixed-coefficient Cattaneo system and its effective entropy and quadratic Lyapunov identities. The current carrier is draft; the explicit mode below is checked directly against the displayed PDE.

## Verification

1.1 The strict inequality makes $\omega>0$, and $\phi(t)=\operatorname{Re}(\Theta e^{(-1/(2\tau)+i\omega)t})$ solves $\tau\phi''+\phi'+(\kappa k^2/C)\phi=0$, since $-1/(2\tau)\pm i\omega$ are the roots of $\tau\lambda^2+\lambda+\kappa k^2/C=0$. [given, algebra]

2.1 Differentiating $q$ in $x_1$ gives $\operatorname{div}q=-C\phi'(t)\cos(kx_1)$, so $C\theta_t+\operatorname{div}q=0$. Also $\tau q_t+q=-\frac{C}{k}(\tau\phi''+\phi')\sin(kx_1)e_1=\kappa k\phi\sin(kx_1)e_1=-\kappa\nabla\theta$, where step 1.1 supplies the second equality and $\nabla\theta=-k\phi\sin(kx_1)e_1$. Thus both PDE hold. [given, step 1.1, algebra]

3.1 The fields are smooth and periodic because $k=2\pi n/L$ and $\phi$ is smooth; $\Theta\ne0$ makes the mode nonzero. For $t\ge0$, $|\theta(t,x)|\le|\Theta|e^{-t/(2\tau)}<T_0$, so $T_0+\theta>0$. The mode's amplitude decays with the displayed exponential envelope. The entropy-production and Lyapunov identities are the exact identities of [F1], applied to this verified solution. [given, F1, step 2.1] ∎
