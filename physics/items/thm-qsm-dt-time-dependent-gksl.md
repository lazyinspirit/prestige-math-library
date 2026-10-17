---
id: thm-qsm-dt-time-dependent-gksl
kind: theorem
title: Continuous finite GKSL channel propagators
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-qsm-dt-channel-definition
  - def-qsm-dt-gksl-definition
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-cm-integral-and-ftc-for-continuous-normed-space-curves
  - thm-qsm-dt-channel-duality
  - thm-qsm-dt-gksl-sufficient
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
  def-qsm-dt-gksl-definition: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  lem-cm-integral-and-ftc-for-continuous-normed-space-curves: mathematical-premise
  thm-qsm-dt-channel-duality: mathematical-premise
  thm-qsm-dt-gksl-sufficient: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 21, §21.1
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.2.1–2.2.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
---

## Statement

Let $I=[s_0,s_1]\subset\mathbb R$ be a compact time interval in seconds, $d\geq1$, $H:I\to M_d(\mathbb C)$ continuous with $H(t)=H(t)^*$ in joules, and $L_a:I\to M_d(\mathbb C)$ continuous with finite $a=1,\ldots,m$ in ${\rm s}^{-1/2}$. At each $t\in I$, form $\mathcal L_t$ by [[def-qsm-dt-gksl-definition]]. For every $s\leq t$ in $I$, the propagator $\Lambda(t,s)$ solving

$$\partial_t\Lambda(t,s)=\mathcal L_t\circ\Lambda(t,s),\qquad \Lambda(s,s)=\operatorname{id},$$

exists uniquely and is a finite channel. No semigroup law is asserted when $t\mapsto\mathcal L_t$ varies.

## Facts & Assumptions

**Given:** A compact interval $I$, continuous finite matrices $H(t),L_a(t)$ with the stated units, and the induced finite-dimensional norm on linear maps.

[F1] [[def-qsm-dt-gksl-definition]]: each fixed $\mathcal L_t$ has finite GKSL form.

[F2] [[thm-qsm-dt-gksl-sufficient]]: for finite dimension $d\ge1$ and each fixed $u$, $e^{\tau\mathcal L_u}$, defined by the operator-norm series, is a channel for every $\tau\geq0$.

[F3] [[thm-qsm-dt-channel-duality]]: compositions and norm limits of finite channels are channels.

[F4] [[def-qsm-dt-channel-definition]]: a finite channel is completely positive and trace-preserving.

[F5] [[cor-finite-dimensional-normed-spaces-are-banach]]: every finite-dimensional normed space over $\mathbb R$ or $\mathbb C$ is complete.

[F6] [[lem-cm-integral-and-ftc-for-continuous-normed-space-curves]]: a continuous curve into a complete normed real vector space has a norm-Riemann integral with the usual norm bound, additive intervals, and an indefinite integral differentiable to the original curve.

## Proof




1.1 Let $\mathcal E=\operatorname{End}_{\mathbb C}(M_d(\mathbb C))$ with the induced map norm. It has finite complex dimension $d^4$, so it is complete as a real normed space by [F5]. Set $M:=\sup_{u\in I}\|\mathcal L_u\|<\infty$. For fixed $s$, define $D_0(t)=I$ and recursively $D_n(t)=\int_s^t\mathcal L_uD_{n-1}(u)\,du$ for $n\geq1$, using [F6]. Induction with the integral norm bound gives $\|D_n(t)\|\leq M^n(t-s)^n/n!$; hence $\sum_{n=0}^{\infty}D_n(t)$ converges uniformly on $[s,s_1]$. Calling its sum $\Lambda(t,s)$, uniform convergence and boundedness of $\mathcal L_u$ allow passage through the integral, giving $\Lambda(t,s)=I+\int_s^t\mathcal L_u\Lambda(u,s)\,du$. Also $\|\Lambda(u,s)\|\leq e^{M(u-s)}$. [given, F1, F5, F6, construct, algebra]

1.2 Let $t_j=s+j(t-s)/n$ be a uniform partition of $[s,t]$ and freeze $\mathcal L_u$ to $\mathcal L_{t_j}$ on each interval $[t_j,t_{j+1})$. The resulting propagator is the time-ordered composition $e^{(t-t_{n-1})\mathcal L_{t_{n-1}}}\circ\cdots\circ e^{(t_1-t_0)\mathcal L_{t_0}}$. Each factor is a channel by [F2], and the composition is a channel by [F3]. [given, F2, F3, algebra]

2.1 By the fundamental theorem [F6], the integral equation in step 1.1 is differentiable and satisfies $\partial_t\Lambda(t,s)=\mathcal L_t\circ\Lambda(t,s)$, with $\Lambda(s,s)=I$. If another solution differs by $D$, then $D(t)=\int_s^t\mathcal L_uD(u)\,du$. With $C=\sup_{u\in[s,s_1]}\|D(u)\|<\infty$, repeated application of the integral norm bound gives $\|D(t)\|\leq C M^n(t-s)^n/n!$ for every $n\geq0$. This tends to zero, proving uniqueness. [step 1.1, F6, algebra]

3.1 Let $\delta_n=\sup_{u\in[s,t]}\|\mathcal L^{(n)}_u-\mathcal L_u\|$; uniform continuity gives $\delta_n\to0$. Subtract the integral equations for the frozen propagator $\Lambda_n$ and $\Lambda$. For $s\leq u\leq t$, the norm difference is bounded by $M\int_s^u\|\Lambda_n(v,s)-\Lambda(v,s)\|\,dv+\delta_n(t-s)e^{M(t-s)}$, using the bound in step 1.1. Iterating this scalar integral inequality yields $\|\Lambda_n(t,s)-\Lambda(t,s)\|\leq\delta_n(t-s)e^{2M(t-s)}\to0$. The channel set is closed under this norm limit by [F3], so $\Lambda(t,s)$ is a channel. For $s=t$ it is $I$, also a channel. [step 1.1, step 1.2, F3, F4, F6, algebra] ∎

