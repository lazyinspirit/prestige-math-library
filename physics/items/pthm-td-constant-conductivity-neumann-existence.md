---
id: pthm-td-constant-conductivity-neumann-existence
kind: physics-theorem
title: Constant-conductivity heat evolution on an insulated rectangle
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
physical_scope: Existence and uniqueness for the three-dimensional rigid Fourier heat model with constant positive volumetric heat capacity and scalar conductivity, homogeneous Neumann walls, and even-periodic uniformly regular positive initial data; no general rough-data or arbitrary-domain PDE claim is made.
deps:
  - def-td-rectangular-local-equilibrium-fields
  - post-td-local-energy-balance
  - post-td-fourier-conductivity
  - def-countable-choice
  - cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions
  - def-ck-and-multi-index-notation-in-several-variables
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-heat-cauchy-solution-for-bounded-continuous-data
  - thm-newton-leibniz-with-interior-derivative
dependency_roles:
  def-td-rectangular-local-equilibrium-fields: formulation-prerequisite
  post-td-local-energy-balance: physical-assumption
  post-td-fourier-conductivity: physical-assumption
  def-countable-choice: mathematical-premise
  cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-heat-kernel: mathematical-premise
  lem-heat-kernel-normalisation-scaling-and-derivatives: mathematical-premise
  lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-heat-cauchy-solution-for-bounded-continuous-data: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations, §5.1
      url: https://www.math.ucdavis.edu/~hunter/pdes/ch5.pdf
      locator: Official chapter PDF retrieved; §5.1, Theorem 5.5 and the heat-kernel representation.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume Countable Choice. Let $L_i>0$ be lengths measured in metres, set $\Omega=\prod_{i=1}^3(0,L_i)$, and take the open temperature interval $\mathcal T=(0,\infty)$ with temperatures measured in kelvins. Fix a constant volumetric heat capacity $c>0$ in $\mathrm{J\,m^{-3}\,K^{-1}}$, a constant scalar conductivity $k>0$ in $\mathrm{W\,m^{-1}\,K^{-1}}$, and an arbitrary reference energy density $u_\star$ in $\mathrm{J\,m^{-3}}$. Define $u:\mathcal T\to\mathbb R$ by $u(\theta)=u_\star+c\theta$, so $u'(\theta)=c$, and define $K:\overline\Omega\times\mathcal T\to\mathbb R^{3\times3}$ by $K(x,\theta)=kI_3$ as in [[post-td-fourier-conductivity]]. Put $a=k/c$ in $\mathrm{m^2\,s^{-1}}$.

Let $g:\mathbb R^3\to\mathcal T$ be $C^2$ and satisfy, for every $i\in\{1,2,3\}$ and $x\in\mathbb R^3$,
$$g(x_1,\ldots,-x_i,\ldots,x_3)=g(x_1,\ldots,x_i,\ldots,x_3),\qquad g(x_1,\ldots,x_i+2L_i,\ldots,x_3)=g(x_1,\ldots,x_i,\ldots,x_3).$$
Assume every coordinate derivative $D^\alpha g$ with $|\alpha|\le2$ is bounded and uniformly continuous, and that $0<T_{\min}\le g(y)\le T_{\max}<\infty$ for all $y$, with these bounds measured in kelvins.

For $x\in\overline\Omega$ and $t>0$ define
$$T(x,t)=\int_{\mathbb R^3}\Gamma(x-y,at)g(y)\,dy,\qquad \Gamma(z,\theta)=(4\pi\theta)^{-3/2}e^{-|z|^2/(4\theta)},$$
and set $T(x,0)=g(x)$. Here $y$ is measured in metres, $\theta=at$ in the kernel has units $\mathrm{m^2}$, and the normalized kernel $\Gamma(\cdot,at)$ has units $\mathrm{m^{-3}}$, so the integral has units of kelvins. Also $\nabla T=(\partial_{x_1}T,\partial_{x_2}T,\partial_{x_3}T)$, $\Delta T:=\sum_{i=1}^3\partial_{x_i}^2T$, and on a face with outward unit normal $n$, $\partial_nT:=n\cdot\nabla T$. For every finite $\tau>0$, this is the unique function $T$ continuous on $\overline\Omega\times[0,\tau]$ whose first time derivative for $t>0$ and spatial derivatives through order two extend continuously to $\overline\Omega\times[0,\tau]$, solving $c\partial_tT=k\Delta T$ on $\Omega\times(0,\tau]$, with $\partial_nT=0$ on each face and the given initial value. The time derivative at $t=0$ is interpreted from the right. The field satisfies $T_{\min}\le T(x,t)\le T_{\max}$ for all $t\ge0$, its spatial derivatives through order two are continuous to $t=0$, and its right time derivative there is $a\Delta g$.

On $I=(0,\infty)$, set $j_Q(x,t)=-k\nabla T(x,t)$. Then $(T,u,j_Q,K)$ is a field record of [[def-td-rectangular-local-equilibrium-fields]] satisfying [[post-td-local-energy-balance]] and [[post-td-fourier-conductivity]], so the solution is global in time for this restricted physical continuum model.

## Facts & Assumptions

**Given:** Countable Choice and the geometric, caloric, conductivity, and initial-profile data specified in the Statement.

[A1] [[def-countable-choice]]: for every sequence of nonempty sets there is a function selecting one element from each set. Countable Choice is the only choice principle assumed here.

[A2] The stated energy-density map is $u(\theta)=u_\star+c\theta$ on $\mathcal T=(0,\infty)$, so its heat capacity is the constant $u'(\theta)=c>0$ on the full temperature range.

[A3] [[post-td-local-energy-balance]]: $\partial_tu+\operatorname{div}j_Q=0$ and $j_Q\cdot n=0$ on each insulated face.

[A4] [[post-td-fourier-conductivity]]: $j_Q=-K\nabla T$; the constant scalar case is $K=kI_3$.

[F1] [[thm-heat-cauchy-solution-for-bounded-continuous-data]]: assuming Countable Choice, convolution of a bounded uniformly continuous $g:\mathbb R^3\to\mathbb R$ with the Gaussian heat kernel gives a bounded function, smooth for positive time, solving $U_\theta=\Delta U$, and converging locally uniformly to $g$ as $\theta\downarrow0$.

[F2] [[lem-heat-kernel-normalisation-scaling-and-derivatives]]: $\Gamma(z,\theta)>0$, has unit integral, and its derivatives have Gaussian tail bounds; $\Gamma(\cdot,\theta)$ is an $L^1$ approximate identity as $\theta\downarrow0$.

[F3] [[lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time]]: for bounded data the heat convolution is smooth for positive time, derivatives pass through its integral, and $U_\theta=\Delta U$.

[F4] [[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]]: convolution by an $L^1$ approximate identity converges uniformly on every compact set for bounded continuous data.

[F5] [[def-td-rectangular-local-equilibrium-fields]]: $T,u,c,j_Q,K$ have the domains, regularity classes, Euclidean derivatives, and SI units stated in its Definition.

[F6] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: translation preserves Lebesgue measure.

[F7] [[thm-linear-change-of-variables-for-lebesgue-measure]]: under Countable Choice, an invertible linear map changes Lebesgue measure by the absolute determinant of its matrix.

[F8] [[thm-newton-leibniz-with-interior-derivative]]: a continuous function on a closed interval with an integrable interior derivative has endpoint increment equal to the derivative integral.

[F9] [[def-heat-kernel]]: for $\theta>0$, $\Gamma(z,\theta)=(4\pi\theta)^{-3/2}\exp(-|z|^2/(4\theta))$ on $\mathbb R^3$.

[F10] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: absolutely integrable functions on sigma-finite product measure spaces have equal iterated and product integrals.

[F11] [[def-ck-and-multi-index-notation-in-several-variables]]: $C^k$ means that every coordinate derivative through order $k$ exists and is continuous on the open domain.



## Proof


1.1 The assumptions on $g$ make it bounded and uniformly continuous, so [F1] applies. Write $U(x,\theta)=\Gamma_\theta*g(x)$ and set $T(x,t)=U(x,at)$. The chain rule gives $\partial_tT=aU_\theta(x,at)=a\Delta U(x,at)=a\Delta T$ for $t>0$; [F1] also gives the formula, smoothness, and local uniform initial convergence. Since $k=ac$, this is $c\partial_tT=k\Delta T$. With $u'(T)=c$, $u_t=cT_t$, and $j_Q=-k\nabla T$ from [A3, A4], the same equality gives $\partial_tu+\operatorname{div}j_Q=c\partial_tT-k\Delta T=0$. [A1, A2, A3, A4, F1, given, algebra]

1.2 Positivity and unit mass in [F2] imply $T_{\min}\int\Gamma\le T(x,t)\le T_{\max}\int\Gamma$, hence $T_{\min}\le T\le T_{\max}$. Translation by $2L_i$ in the convolution variable preserves $g$ and Lebesgue measure by [F6], so $T$ is $2L_i$-periodic in $x_i$. Reflection $y_i\mapsto-y_i$ preserves Lebesgue measure by [F7] because its matrix has determinant of absolute value one; evenness of the kernel [F9] and of $g$ then makes $T$ even in each coordinate. For $t>0$, evenness gives $\partial_{x_i}T=0$ on the face $x_i=0$; periodicity gives $\partial_{x_i}T=\partial_{x_i}T$ at opposite faces $x_i=-L_i,L_i$, while evenness makes these two values negatives, so both vanish. The same boundary derivative holds at $t=0$ for $g$, and [A4] gives $j_Q\cdot n=0$ on every face. [F1, F2, F5, F6, F7, F9, A4, given, algebra]

1.3 By [F11], the stated $C^2$ hypothesis gives continuous derivatives through spatial order two. For $|\alpha|\le2$ and $t>0$, differentiating under the integral and then integrating by parts in each coordinate gives $D^\alpha T(x,t)=\int\Gamma(x-y,at)D^\alpha g(y)\,dy$. The products of kernel derivatives with bounded derivatives of $g$ are absolutely integrable by the Gaussian bound [F2], so [F10] licenses the iterated integrals; on each finite coordinate interval Newton–Leibniz [F8] gives the integration-by-parts identity, and the boundary terms vanish as the interval expands because of the Gaussian tails. Each $D^\alpha g$ is bounded and continuous, so [F4] makes this expression converge uniformly on $\overline\Omega$ to $D^\alpha g$ as $t\downarrow0$. Thus the spatial derivatives through order two extend continuously to the initial time. [F2, F3, F4, F8, F10, F11, given, algebra]

2.1 For $t>0$, the heat equation and the same integration-by-parts argument give $\partial_tT(x,t)=a\int\Gamma(x-y,at)\Delta g(y)\,dy$. By [F4] this converges uniformly on $\overline\Omega$ to $a\Delta g(x)$. For $0<\varepsilon<t$, [F8] gives $T(x,t)-T(x,\varepsilon)=\int_\varepsilon^t\partial_sT(x,s)\,ds$. Letting $\varepsilon\downarrow0$ is valid uniformly in $x$ by step 1.1 and the uniform limit just established; consequently $T(x,t)-g(x)=\int_0^t\partial_sT(x,s)\,ds$, and dividing by $t$ proves the right derivative $\partial_tT(x,0)=a\Delta g(x)$. [F1, F3, F4, F8, step 1.1, step 1.3]

3.1 For uniqueness, let $T_1,T_2$ be two solutions in the stated regularity class and set $w=T_1-T_2$. Then $w_t=a\Delta w$, $\partial_nw=0$, and $w(\cdot,0)=0$. At each fixed time, $w$ and its spatial derivatives through order two are continuous on the compact rectangle, so the integrands $w\,\partial_i^2w$ and $|\partial_iw|^2$ are bounded and hence $L^1$ for the finite Lebesgue product measure. Apply [F10] successively in the three coordinate factors to identify the rectangle integrals with the iterated one-dimensional integrals. The product rule and [F8] then give $\int_0^{L_i}w\,\partial_i^2w=[w\partial_iw]_0^{L_i}-\int_0^{L_i}|\partial_iw|^2$. The boundary terms vanish by the homogeneous Neumann condition, so $E'(t)=2a\int_\Omega w\Delta w=-2a\int_\Omega|\nabla w|^2\le0$. Thus $E(0)=0$ and $E(t)\ge0$ imply $E(t)=0$; continuity of $w$ gives $w=0$ everywhere. The formula therefore gives the unique solution in the stated class. [F5, F8, F10, step 1.2, step 1.3, step 2.1, algebra] ∎
