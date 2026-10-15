---
id: ex-td-diffusive-infinite-propagation
kind: example
title: The rectangular Fourier model has instantaneous spatial support
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
physical_scope: A mathematical support property of the constant-coefficient Fourier heat model on an insulated rectangle; it is not an observation or a claim about finite-speed physical signals.
deps:
  - pthm-td-constant-conductivity-neumann-existence
  - def-countable-choice
dependency_roles:
  pthm-td-constant-conductivity-neumann-existence: physical-result
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Statistical Mechanics, §6.5, heat conduction"
      url: https://batch.libretexts.org/print/Letter/Finished/phys-32579/Full.pdf
      locator: Chapter 6, §6.5, Fourier heat equation
    - title: John K. Hunter, Notes on Partial Differential Equations, §5.1
      url: https://www.math.ucdavis.edu/~hunter/pdes/ch5.pdf
      locator: Official chapter PDF retrieved; §5.1, Theorem 5.5 and heat-kernel representation.
---

## Statement

Assume Countable Choice as in [[pthm-td-constant-conductivity-neumann-existence]]. Let $L_i>0$ be lengths in metres and $\Omega=\prod_{i=1}^3(0,L_i)$. Let $c>0$ be a constant volumetric heat capacity in $\mathrm{J\,m^{-3}\,K^{-1}}$, $k>0$ a constant scalar conductivity in $\mathrm{W\,m^{-1}\,K^{-1}}$, and $u_\star$ an arbitrary reference energy density in $\mathrm{J\,m^{-3}}$, with $u(\theta)=u_\star+c\theta$ as in [[pthm-td-constant-conductivity-neumann-existence]]. Choose $x_c=(L_1/2,L_2/2,L_3/2)$ and a radius $r$ in metres with $0<r<\frac12\min_iL_i$, and let $T_b,\epsilon>0$ be temperatures in kelvins. Define on $\overline\Omega$
$$\phi(x)=\begin{cases}(1-|x-x_c|^2/r^2)^3,&|x-x_c|<r,\\0,&|x-x_c|\ge r.\end{cases}$$
For $L>0$, define the even periodic fold $\rho_L:\mathbb R\to[0,L]$ by $\rho_L(s)=s-2nL$ for $2nL\le s\le(2n+1)L$ and $\rho_L(s)=(2n+2)L-s$ for $(2n+1)L\le s\le(2n+2)L$, $n\in\mathbb Z$. Put $\phi_{\rm per}(x)=\phi(\rho_{L_1}(x_1),\rho_{L_2}(x_2),\rho_{L_3}(x_3))$ and take $g=T_b+\epsilon\phi_{\rm per}$. In the constant-$c,k$ insulated Fourier model, the heat-kernel solution satisfies
$$T(x,t)-T_b=\epsilon\int_{\mathbb R^3}\Gamma(x-y,(k/c)t)\phi_{\rm per}(y)\,dy>0$$
for every interior $x\in\Omega$ and every $t>0$, although the initial perturbation is supported in the compact ball $\overline B(x_c,r)\subset\Omega$. Thus the adopted diffusion model has no finite propagation speed for this temperature perturbation.

## Facts & Assumptions

**Given:** Countable Choice; lengths $L_i$ and radius $r$ in metres; the constants $c,k,u_\star,T_b,\epsilon$ with the units and hypotheses in the Statement; and the centre $x_c$ and profile $\phi$ defined there.

[A1] Countable Choice is the explicit hypothesis carried by the heat-evolution supplier [[def-countable-choice]].

[F1] [[pthm-td-constant-conductivity-neumann-existence]]: under Countable Choice and the stated constant positive $c,k$, a $C^2$ initial field $g:\mathbb R^3\to(0,\infty)$ that is even in each coordinate and $2L_i$-periodic in coordinate $i$, with every coordinate derivative through order two bounded and uniformly continuous and bounds $0<T_{\min}\le g\le T_{\max}<\infty$, has the stated insulated Gaussian-convolution solution. The Gaussian is strictly positive and has unit mass.

## Example

The cutoff $\phi$ is dimensionless, so $\epsilon$ and $T_b$ are in kelvins. The perturbation is a constructed model profile, not measured data. It is zero outside a ball at $t=0$ and is nonzero throughout the body for every positive time under the adopted Fourier equation.

## Verification


1.1 Inside the ball write $h(x)=1-|x-x_c|^2/r^2$, so $\phi=h^3$. On the sphere $h=0$, the first derivatives $3h^2\partial_i h$ and second derivatives $6h(\partial_i h)(\partial_j h)+3h^2\partial_i\partial_jh$ tend to zero; outside the ball they are zero. Hence $\phi$ is $C^2$ and nonnegative, and it is identically zero in a neighborhood of every face because $r<\frac12\min_iL_i$. The reflected periodic extension is therefore $C^2$, bounded with bounded uniformly continuous derivatives through order two (by continuity and periodicity), and positive on the original open ball. [given, algebra]

2.1 The initial field $g=T_b+\epsilon\phi_{\rm per}$ satisfies $0<T_b\le g\le T_b+\epsilon$ and all the derivative and even-periodic hypotheses of [F1]. Unit mass of the Gaussian gives $T(x,t)-T_b=\epsilon\int\Gamma(x-y,(k/c)t)\phi_{\rm per}(y)\,dy$. For $t>0$ and any $x\in\Omega$, the Gaussian $\Gamma(x-y,(k/c)t)$ is strictly positive on the ball. Choose a smaller closed ball on which the continuous $\phi_{\rm per}$ has a positive minimum; the Gaussian also has a positive minimum there. Its integral over that ball is positive, so the convolution in [F1] gives $T(x,t)-T_b>0$. [A1, F1, step 1.1, algebra]

3.1 At $t=0$, $\phi_{\rm per}$ restricted to $\Omega$ vanishes outside $\overline B(x_c,r)$, a proper compact subset of the rectangle, while step 2.1 shows the positive-time perturbation is nonzero at every interior point. This is instantaneous support growth in the specified diffusion model only. [step 1.1, step 2.1, given] ∎
