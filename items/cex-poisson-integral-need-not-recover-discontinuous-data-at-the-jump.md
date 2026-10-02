---
id: cex-poisson-integral-need-not-recover-discontinuous-data-at-the-jump
kind: counterexample
title: The disc Poisson integral can miss the assigned value at a jump
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-poisson-kernel-on-the-disc, lem-poisson-kernel-properties-on-the-disc]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Per Kristen Jakobsen, An Introduction to Partial Differential Equations (2019)"
      url: "https://arxiv.org/pdf/1901.03022"
      locator: "§11.1.4, printed pp. 193–194, Heaviside boundary datum and explicit arctangent Poisson extension"
    - title: "Leon Simon, Lectures on PDE (2015 rough draft)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 4, printed pp. 36–37, ball Poisson formula and boundary recovery for continuous data"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed p. 50, boundary recovery at continuity points"
---

## Statement refuted

Let $g:\partial\mathbb D\to\{0,1\}$ be $g(e^{it})=1$ for $0<t<\pi$ and $g(e^{it})=0$ for $\pi\le t\le2\pi$, so that $g(1)=0$. For $0\le r<1$ define its bounded-data Poisson integral by $U_g(r)=(2\pi)^{-1}\int_0^{2\pi}P_r(t)g(e^{it})\,dt$. Then $U_g(r)=1/2$ for every $r$, so $U_g(r)\to1/2\ne g(1)$ as $r\uparrow1$.

## Facts & Assumptions

**Given:** the unit circle boundary datum $g$ above and the disc Poisson kernel.

[F1] For $z=re^{i\phi}\in\mathbb D$ and $t\in\mathbb R$ the Poisson kernel of the unit disc is $P(z,e^{it})=(1-|z|^2)/|e^{it}-z|^2$; writing $z=re^{i\phi}$ with $0\le r<1$ gives $P(z,e^{it})=P_r(t-\phi)$ with $P_r(\theta)=(1-r^2)/(1-2r\cos\theta+r^2)$ ([[def-poisson-kernel-on-the-disc]]).

[F2] For $0\le r<1$ the kernel $P_r(\theta)=(1-r^2)/(1-2r\cos\theta+r^2)$ satisfies $P_r(\theta)>0$ for every $\theta$ and $(2\pi)^{-1}\int_0^{2\pi}P_r(\theta)\,d\theta=1$ ([[lem-poisson-kernel-properties-on-the-disc]]).

## Counterexample

**Proof technique:** direct.

1.1 Define $g(e^{it}):=1$ for $0<t<\pi$, $g(e^{it}):=0$ for $\pi\le t\le2\pi$, and $U_g(r):=(2\pi)^{-1}\int_0^{2\pi}P_r(t)g(e^{it})\,dt$ for $0\le r<1$, with $P_r$ as in [F1]; this integral is finite because $g$ is bounded and the kernel is continuous on the compact circle. Since $g(e^{it})$ vanishes on $[\pi,2\pi]$ and equals one on $(0,\pi)$, $U_g(r)=(2\pi)^{-1}\int_0^{\pi}P_r(t)\,dt$. Also $g(1)=g(e^{i0})=0$, because $0$ is not an interior point of $(0,\pi)$. [given, F1, F2]

2.1 Reflection symmetry. For every $t$ we have $\cos(2\pi-t)=\cos t$, so [F1] gives $P_r(2\pi-t)=P_r(t)$; the substitution $t\mapsto2\pi-t$ maps $(0,\pi)$ onto $(\pi,2\pi)$ and preserves the Lebesgue measure. Hence $\int_0^{\pi}P_r(t)\,dt=\int_{\pi}^{2\pi}P_r(t)\,dt$. [given, step 1.1, F1, algebra]

3.1 Normalization. By [F2], $(2\pi)^{-1}\int_0^{2\pi}P_r(\theta)\,d\theta=1$; splitting the integral at $\pi$ and using step 2.1, $1=2\cdot(2\pi)^{-1}\int_0^{\pi}P_r(t)\,dt$. Therefore $U_g(r)=(2\pi)^{-1}\int_0^{\pi}P_r(t)\,dt=1/2$ for every $0\le r<1$. [step 1.1, step 2.1, F2, algebra]

4.1 Failure at the jump. The value $U_g(r)=1/2$ is independent of $r$, so $U_g(r)\to1/2$ as $r\uparrow1$, while the datum assigns $g(1)=0$ at the boundary point $e^{i0}=1$; thus the Poisson integral of a bounded boundary function need not recover the assigned value at a discontinuity, and only continuity of the datum at the point would force it. [step 1.1, step 3.1, F1] ∎
