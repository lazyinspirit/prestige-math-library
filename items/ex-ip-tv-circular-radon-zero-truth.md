---
id: ex-ip-tv-circular-radon-zero-truth
kind: example
title: Circular Radon inversion at the zero truth
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-countable-choice
  - def-ip-tv-dual-source-certificate
  - def-ip-tv-functional-on-l2-distributional-variation
  - def-ip-tv-level-set-representatives-and-boundaries
  - def-polar-surface-measure-on-the-unit-sphere
  - def-real-and-complex-inner-product-space
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-tonelli-and-fubini-for-completed-product-measures
  - def-l-p-space-as-a-quotient-by-null-functions
  - lem-schwartz-space-is-dense-in-l-two
  - lem-complex-lp-completeness-density-and-inner-product
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-schwartz-space-and-its-seminorms
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on
        convergence of solutions of total variation regularized linear inverse
        problems, §5.1
      url: https://arxiv.org/pdf/1711.06495
      locator: §5.1, definition (41) and boundedness of the circular Radon transform
---

## Example

Assume Countable Choice. Let $\sigma$ be the surface measure on $S^1$ used in the polar-coordinate formula, let $\Sigma=S^1\times(0,2)$ with product measure $\sigma\times dt$, and for real Schwartz functions $u\in\mathcal S(\mathbb R^2;\mathbb R)$ define
$$(A_0u)(z,t)=t\int_{S^1}u(z+t\omega)\,d\sigma(\omega),\qquad z\in S^1,\quad 0<t<2.$$
The map $A_0$ has a unique bounded extension $A:L^2(\mathbb R^2;\mathbb R)\to L^2(\Sigma;\mathbb R)$. For full-space $TV_2$, exact datum $f=0$, zero truth $u^\dagger=0$, and certificate $p^\dagger=0$, the truth is a minimum-TV exact solution satisfying the source condition. For every sequence $\alpha_n>0$ tending to zero, $w_n=0$, and $u_n=0$, each $u_n$ is a global minimizer of the quadratic TV functional and all nonzero canonical level sets and boundaries of $u_n$ and $u^\dagger$ are empty; their measure and extended Hausdorff distances are zero.

## Example references

[[def-ip-tv-dual-source-certificate|A source certificate is a vector whose adjoint image is a TV subgradient.]]

[[def-ip-tv-functional-on-l2-distributional-variation|Full-space TV on L² is the extended distributional variation.]]

[[def-real-and-complex-inner-product-space|The real $L^2$ norm and pairing are defined by the integral.]]

[[def-polar-surface-measure-on-the-unit-sphere|The circle carries the surface measure used in polar integration.]]

[[def-l-p-space-as-a-quotient-by-null-functions|An $L^2$ element is an almost-everywhere equivalence class of measurable representatives.]]

[[def-schwartz-space-and-its-seminorms|Schwartz functions are smooth with all polynomially weighted derivatives bounded.]]

[[def-ip-tv-level-set-representatives-and-boundaries|Nonzero levels have canonical density-one representatives and ambient boundaries; equal empty boundaries have Hausdorff distance zero.]]

[Iglesias, Mercier, and Scherzer, *A note on convergence of solutions of total variation regularized linear inverse problems*, §5.1](https://arxiv.org/pdf/1711.06495)

## Facts & Assumptions

**Given:** The circle $S^1$, product data measure on $\Sigma$, the circular mean formula in the Statement, and the full-space functional $TV_2$.

[A1] Countable Choice is required by the polar-coordinate, completed-product integration, Schwartz-density, and $L^2$-completeness suppliers. ([[def-countable-choice]])

[F1] [[def-ip-tv-functional-on-l2-distributional-variation]]: $TV_2$ is the supremum of $\int u\operatorname{div}\varphi$ over compactly supported smooth vector fields with $\|\varphi\|_\infty\le1$, hence $TV_2\ge0$ and $TV_2(0)=0$.

[F2] [[def-ip-tv-dual-source-certificate]]: a source certificate for an exact minimum-TV truth is $p\in L^2(\Sigma)$ with $A^*p\in\partial TV_2(u^\dagger)$.

[F3] [[def-ip-tv-level-set-representatives-and-boundaries]]: the positive levels are density-one representatives of $\{u>t\}$, negative levels of $\{u<t\}$, and equal empty canonical boundaries have extended Hausdorff distance zero.

[F4] [[thm-polar-coordinates-formula-for-lebesgue-measure]] and [[thm-cauchy-schwarz-in-an-inner-product-space]]: $\sigma$ is finite and $|\int_{S^1}g\,d\sigma|^2\le\sigma(S^1)\int_{S^1}|g|^2\,d\sigma$.

[F5] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: for nonnegative measurable $h$, $\int_{\mathbb R^2}h(x)\,dx=\int_0^\infty\int_{S^1}h(r\omega)r\,d\sigma(\omega)\,dr$.

[F6] [[thm-tonelli-and-fubini-for-completed-product-measures]]: nonnegative measurable functions can be integrated in either order over the circle and Euclidean data variables.

[F7] [[lem-schwartz-space-is-dense-in-l-two]]: under Countable Choice, complex Schwartz classes are dense in complex $L^2(\mathbb R^2)$.

[F8] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]: under Countable Choice, real $L^2$ on every measure space is complete with its real integral inner product.

## Verification

**Proof technique:** direct operator bound followed by completion and zero-objective verification.

1.1 Put $S=\sigma(S^1)<\infty$. For each fixed $z\in S^1$, polar coordinates [F5] give $$\int_0^2\int_{S^1}|u(z+t\omega)|^2t\,d\sigma(\omega)\,dt=\int_{B(z,2)}|u(x)|^2\,dx<\infty,$$ so for almost every $t>0$ the circle section is square-integrable. Cauchy–Schwarz [F4] then gives $$|(A_0u)(z,t)|^2\le S t^2\int_{S^1}|u(z+t\omega)|^2\,d\sigma(\omega).$$ Integrating in $z,t$, using polar coordinates [F5] around each center and Tonelli [F6], yields $$\|A_0u\|_{L^2(\Sigma)}^2\le S\int_{S^1}\int_{|x-z|<2}|x-z||u(x)|^2\,dx\,d\sigma(z)\le2S^2\|u\|_{L^2(\mathbb R^2)}^2,$$ where $|x-z|<2$ and $\sigma(S^1)=S$. Thus $A_0$ is real-linear and bounded on real Schwartz functions with norm at most $\sqrt2S$. [A1, F4, F5, F6, given, algebra]

1.2 The zero vector $u^\dagger=0$ satisfies $Au^\dagger=f=0$ and $TV_2(u^\dagger)=0$. Since $TV_2\ge0$, it minimizes TV over the exact solution set, regardless of the kernel of $A$. Its adjoint certificate $p^\dagger=0$ satisfies $A^*p^\dagger=0\in\partial TV_2(0)$ because $TV_2(v)\ge0=TV_2(0)+\langle0,v\rangle$ for every $v\in L^2$. [F1, F2, given, algebra]

2.1 By [F7], real Schwartz functions are dense in real $L^2$: approximate a real function by complex Schwartz classes and take real parts, which cannot increase the $L^2$ error. By [F8], the target real $L^2(\Sigma)$ is complete. For any real $u\in L^2$, choose real Schwartz $u_k\to u$; step 1.1 makes $(A_0u_k)$ Cauchy, and its limit is independent of the approximating sequence by the same bound. This defines a bounded real-linear extension $A$ with $\|A\|\le\sqrt2S$. If another bounded extension agrees with $A_0$ on the dense Schwartz subspace, continuity forces equality on all of $L^2$. [A1, F7, F8, step 1.1, choose, construct]

3.1 For $w_n=0$, the regularized objective is $J_n(u)=\tfrac12\|Au\|_2^2+\alpha_nTV_2(u)\ge0$, and $J_n(0)=0$. Hence $u_n=0$ is a global minimizer for every $n$. If $t>0$, $\{u_n>t\}=\varnothing$; if $t<0$, $\{u_n<t\}=\varnothing$. The same holds for $u^\dagger$, so all canonical density-one sets and ambient boundaries agree as empty sets; symmetric-difference measures and the extended Hausdorff distances are zero. The noise ratio is $\|A^*\|\|w_n\|_2/\alpha_n=0<2\sqrt\pi$, so the full-space threshold is met. [F1, F3, given, algebra] ∎

