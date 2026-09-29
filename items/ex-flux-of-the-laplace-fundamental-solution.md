---
id: ex-flux-of-the-laplace-fundamental-solution
kind: example
title: Flux normalization on every centered sphere
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.6.1 equations (2.14)–(2.15), printed p. 33 (PDF p. 39)"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026 complete lecture notes)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.1 definition and flux-normalization remark, printed pp. 12–13 (PDF pp. 14–15); the flux assertion is assigned as an exercise-class verification"
deps:
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-countable-choice
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-directional-and-partial-derivatives
  - thm-real-power-continuity-and-derivatives
  - thm-logarithm-derivative-and-integral
  - cor-volume-of-the-unit-n-ball
  - thm-real-gamma-functional-equation
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-algebra-of-derivatives
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-heine-borel-rn
proof_strategy: direct
---

## Statement

Assume Countable Choice and $n\ge2$. For every $r>0$, with the outward normal of $B_r(0)$,
$$-\int_{\partial B_r}\partial_\nu\Phi\,dS=1;$$
the same calculation works for the logarithmic $n=2$ kernel.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $n\ge2$, let $r>0$, and use the normalized kernel $\Phi$.

[A1] Countable Choice is written $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It is used through the kernel, sphere-measure, surface-integration, and positive-finite-ball interfaces cited below; the calculation requires no full Axiom of Choice.

[F1] With $\omega_{n-1}=|S^{n-1}|>0$, the kernel is $\Phi_n(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$ and $\Phi_2(x)=-(2\pi)^{-1}\log|x|$ for $x\ne0$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] The chart surface measure scales by $R^{n-1}$ under $\omega\mapsto a+R\omega$, and $|S^{n-1}|=n|B_1|$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F3] On a compact embedded $C^1$ hypersurface, $\int_S1_A\,dS$ defines its surface area measure for Borel $A$, and signed integrands with finite absolute integral are integrated by subtracting their positive and negative parts ([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F4] The Lebesgue integral is complex-linear on $L^1(\mu)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F5] The directional derivative $D_vf(a)$ is the derivative at zero of $t\mapsto f(a+tv)$ ([[def-directional-and-partial-derivatives]]); here $\partial_\nu\Phi(x)$ denotes $D_{\nu(x)}\Phi(x)$ on the sphere, where $\Phi$ is smooth in a neighborhood of each point.

[F6] For $s>0$, $(s^\alpha)'=\alpha s^{\alpha-1}$ for every real $\alpha$ ([[thm-real-power-continuity-and-derivatives]]).

[F7] For $s>0$, $\log'(s)=1/s$ ([[thm-logarithm-derivative-and-integral]]).

[F8] For every integer $n\ge1$, $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$ ([[cor-volume-of-the-unit-n-ball]]).

[F9] For $s>0$, $\Gamma(s+1)=s\Gamma(s)$ and $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]).

[F10] Every Euclidean ball of positive radius has positive finite Lebesgue measure under Countable Choice ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F11] Differentiable real functions obey the product rule ([[thm-algebra-of-derivatives]]).

[F12] A Euclidean map is $C^k$ when each component is $C^k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F13] Finite componentwise sums and products of $C^k$ Euclidean maps are $C^k$, and composites of composable $C^k$ maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F14] In $\mathbb R^n$, closed and bounded sets are compact ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 For $n\ge3$, put $q_n(s)=s^{2-n}/((n-2)\omega_{n-1})$ for $s>0$. By [F6], $$q_n'(s)=\frac{2-n}{(n-2)\omega_{n-1}}s^{1-n}=-\frac{1}{\omega_{n-1}s^{n-1}}.$$ For $n=2$, put $q_2(s)=-(2\pi)^{-1}\log s$ for $s>0$. By [F2], [F8] and [F9], $\omega_1=|S^1|=2|B_1|=2V_2(1)=2\pi$, and [F7] gives $$q_2'(s)=-\frac{1}{2\pi s}=-\frac{1}{\omega_1s}.$$ Thus in both cases $$q_n'(s)=-\frac{1}{\omega_{n-1}s^{n-1}}\qquad(s>0).$$ [A1, F1, F2, F6, F7, F8, F9, algebra]

1.2 The sphere $S_r=\partial B_r(0)$ is nonempty because $(r,0,\ldots,0)\in S_r$. It is closed and bounded, hence compact by [F14]. At each $x\in S_r$, some coordinate is nonzero; take the least index $j$ with $x_j\ne0$. Near $x$, the sphere is the graph of $$x_j=\operatorname{sgn}(x_j)\sqrt{r^2-\sum_{k\ne j}x_k^2}.$$ Its radicand is positive near the projected point; the inner polynomial and positive-base square-root are $C^1$ by [F6], [F12] and [F13]. These graph charts cover $S_r$, have rank $n-1$, and their coordinate transitions are $C^1$ by [F13], giving $S_r$ the compact embedded $C^1$ hypersurface structure used by [F3]. Every tangent vector is the velocity of a differentiable curve in the sphere. Differentiating $\sum_k\gamma_k(t)^2=r^2$ at $x$ by [F11] shows the tangent plane is contained in $x^\perp$; its dimension is $n-1$ by the chart rank, so it equals $x^\perp$. The unit normal candidates are $\pm\omega$ for $x=r\omega$, $|\omega|=1$. Since $x+t\omega=(r+t)\omega$ is outside the ball and $x-t\omega=(r-t)\omega$ is inside for $0<t<r$, the outward unit normal is $\nu(x)=\omega$. [F3, F6, F11, F12, F13, F14, given, algebra]

1.3 By [F2] and [F3], $$\int_{S_r}1\,dS=r^{n-1}\int_{S^{n-1}}1\,dS=\omega_{n-1}r^{n-1}.$$ This is finite: [F2] gives $\omega_{n-1}=n|B_1|$, and [F10] gives $|B_1|<\infty$. Thus constant functions are integrable on $S_r$. [A1, F2, F3, F10]

2.1 For $x=r\omega\in S_r$, the line in direction $\nu(x)=\omega$ satisfies $x+t\omega=(r+t)\omega$ near $t=0$. By [F5] and step 1.1, $$\partial_\nu\Phi(x)=D_\omega\Phi(x)=\lim_{t\to0}\frac{q_n(r+t)-q_n(r)}t=q_n'(r)=-\frac1{\omega_{n-1}r^{n-1}}.$$ The derivative is taken on a neighborhood of each sphere point and does not evaluate the singular kernel at the pole. [F1, F5, step 1.1, step 1.2, algebra]

3.1 By [F4], steps 1.3 and 2.1 give $$-\int_{S_r}\partial_\nu\Phi\,dS=-q_n'(r)\int_{S_r}1\,dS=\frac{1}{\omega_{n-1}r^{n-1}}\,\omega_{n-1}r^{n-1}=1.$$ This uses only the stated $\mathrm{AC}_\omega$ convention in the surface-integration interface [F3]. [A1, F3, F4, step 1.3, step 2.1, algebra]

4.1 For $0<r<R$, take $0<t<\min(r,R-r)$. At $x=r\omega$, $x-t\omega=(r-t)\omega$ lies in the excised hole, while $x+t\omega=(r+t)\omega$ lies in the annulus. Thus its outward normal at the inner boundary is $-\omega$. Hence $\partial_{\nu_{\rm inner}}\Phi(r\omega)=D_{-\omega}\Phi(r\omega)=-q_n'(r)=1/(\omega_{n-1}r^{n-1})$. Using the same area and integrability calculation as in step 1.3 and linearity [F4], this contextual inner-boundary calculation gives negative flux $-1$. [A1, F4, step 1.2, step 1.3, step 2.1, algebra] ∎

## Source notes

Hunter §2.6.1, equation (2.14), printed p. 33 (PDF p. 39), computes the radial derivative, and equation (2.15) states $-\int_{\partial B_r}D\Gamma\cdot\nu\,dS=1$ with the same sign as $\Phi$. Hunter notes that the flux is independent of $r$ by the divergence theorem and harmonicity on the annulus; this proof instead derives the radial derivative and multiplies by the chart surface area. Schmidt §2.1, printed p. 12 (PDF p. 14), defines $F=-\Phi$; its printed p. 13 (PDF p. 15) says $\int_{S_r}\nu\cdot\nabla F\,dH^{n-1}=1$ and explicitly assigns that normalization as an exercise-class verification. This is a sign-convention comparison, not the proof used here. On the inner boundary of an excised annulus the normal is $-\omega$, so its negative flux is $-1$.
