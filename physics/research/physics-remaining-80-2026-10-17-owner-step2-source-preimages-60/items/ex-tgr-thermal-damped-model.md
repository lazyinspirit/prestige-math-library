---
id: ex-tgr-thermal-damped-model
kind: example
title: "Supported thermal finite-speed damped mode"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
proof_strategy: direct
deps:
  - pthm-tgr-cattaneo-thermal-properties
dependency_roles:
  pthm-tgr-cattaneo-thermal-properties: physical-result
physical_scope: "An explicitly verified underdamped periodic solution of the supported-rest Cattaneo linear subsystem; its forward-time positive-temperature interpretation holds for sufficiently small amplitude inside the chosen near-equilibrium domain. No observation or material-specific coefficient is reported."
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "N. Andersson and G. L. Comer, Variational multifluid dynamics and causal heat conductivity, arXiv:0908.1707v1 (2009), §4, equations (4.2)–(4.12)"
      url: "https://arxiv.org/pdf/0908.1707"
      locator: "Full 15-page paper; PDF pp. 5–7: the constant-parameter near-equilibrium Cattaneo model as context; the specific Fourier mode here is verified locally."
    - title: "S. K. Lander and N. Andersson, Heat conduction in rotating relativistic stars, arXiv:1804.01520 (2018), §2.1"
      url: "https://arxiv.org/pdf/1804.01520"
      locator: "Full 13-page paper; PDF pp. 1–2: the phenomenological relaxation term and telegrapher equation; it does not report the constructed mode or its amplitude."
    - title: "MIT OpenCourseWare, 2.57 Nano-to-Macro Transport Processes, complete 2004 lecture notes, Lecture 21"
      url: "https://ocw.mit.edu/courses/2-57-nano-to-macro-transport-processes-spring-2012/2e4ecaa5cf55f03bcefbc8ccce79aed6_MIT2_57S12_lec_notes_2004.pdf"
      locator: "Full 177-page course notes; Lecture 21, PDF pp. 153–154: rigid-conductor Cattaneo law and hyperbolic equation as model context; this example adds no empirical claim."
---

## Example

Choose $C,\kappa,\tau,T_0,L>0$, an integer $n\geq1$, and set $k:=2\pi n/L$. Assume $k^2>C/(4\tau\kappa)$ and define

$$\Omega:=\sqrt{\frac{\kappa k^2}{C\tau}-\frac{1}{4\tau^2}}>0,\qquad \phi(t):=A e^{-t/(2\tau)}\cos(\Omega t).$$

On $\mathbb T_L^3$, let $e_1=(1,0,0)$ and put

$$\vartheta(t,x):=\phi(t)\cos(kx_1),\qquad q(t,x):=-\frac{C}{k}\phi'(t)\sin(kx_1)e_1.$$

For every real amplitude $A$, these fields are smooth on $\mathbb R\times\mathbb T_L^3$ and solve the supported-rest Cattaneo linear subsystem. For a nonzero amplitude chosen sufficiently small, $T_0+\vartheta$ stays positive for all $t\geq0$, and the state $(\vartheta,q)$ stays in the postulate's declared open near-equilibrium neighborhood. The temperature-departure envelope decays as $e^{-t/(2\tau)}$. This is a constructed model solution, not a reported observation; its physical interpretation is restricted to forward times inside that neighborhood.

## Facts & Assumptions

**Given:** $C,\kappa,\tau,T_0,L>0$, integer $n\geq1$, $k=2\pi n/L$, $k^2>C/(4\tau\kappa)$, and the supported-rest equations of [[pthm-tgr-cattaneo-thermal-properties]]. Let $D$ be the open state neighborhood selected in the underlying postulate.

[F1] [[pthm-tgr-cattaneo-thermal-properties]]: the linear subsystem is $C\vartheta_t+\operatorname{div}q=0$, $\tau q_t+q=-\kappa\nabla\vartheta$.

[F2] [[pthm-tgr-cattaneo-thermal-properties]]: eliminating $q$ gives $\tau\vartheta_{tt}+\vartheta_t-(\kappa/C)\Delta\vartheta=0$.

[F3] [[pthm-tgr-cattaneo-thermal-properties]]: its physical interpretation is restricted to times when $(\vartheta,q)\in D$, the postulate's declared state neighborhood.

## Verification

1.1 The assumed strict inequality gives $\Omega>0$. Write $\phi(t)=e^{-t/(2\tau)}y(t)$ with $y(t)=A\cos(\Omega t)$. Differentiation yields $\phi''+\tau^{-1}\phi'+(\kappa k^2/(C\tau))\phi=e^{-t/(2\tau)}[y''+\Omega^2 y]=0$, because $y''=-\Omega^2y$ and $\Omega^2=\kappa k^2/(C\tau)-1/(4\tau^2)$. Thus $\phi$ solves the one-mode telegrapher equation from [F2]. [given, F2, algebra]

1.2 Differentiating the displayed temperature field in time gives $C\vartheta_t=C\phi'(t)\cos(kx_1)$, while differentiating the first component of $q$ in space gives $\operatorname{div}q=-C\phi'(t)\cos(kx_1)$. Their sum is zero, so the thermal-energy balance in [F1] holds pointwise. [given, F1, algebra]

2.1 The flux satisfies $\tau q_t+q=-(C/k)(\tau\phi''+\phi')\sin(kx_1)e_1$. The mode equation in step 1.1 is equivalent to $-(C/k)(\tau\phi''+\phi')=\kappa k\phi$. Since $\nabla\vartheta=-k\phi\sin(kx_1)e_1$, this equals $-\kappa\nabla\vartheta$, proving the Cattaneo relation in [F1] pointwise. [given, F1, step 1.1, algebra]

3.1 For $t\geq0$, $|\vartheta(t,x)|\leq |A|e^{-t/(2\tau)}\leq|A|$, and $|\phi'(t)|\leq |A|e^{-t/(2\tau)}(1/(2\tau)+\Omega)$, so $|q(t,x)|\leq(C/k)|A|(1/(2\tau)+\Omega)$. Because $D$ in [F3] is open and contains $(0,0)$, choose $\delta_T,\delta_q>0$ with $(-\delta_T,\delta_T)\times\{q:|q|<\delta_q\}\subseteq D$; then any nonzero $A$ satisfying $|A|<\min(T_0,\delta_T)$ and $(C/k)|A|(1/(2\tau)+\Omega)<\delta_q$ keeps the entire forward solution in $D$ and gives $T_0+\vartheta\geq T_0-|A|>0$. [given, F3, algebra] ∎
