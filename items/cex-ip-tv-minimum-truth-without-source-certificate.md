---
id: cex-ip-tv-minimum-truth-without-source-certificate
kind: counterexample
title: A minimum-TV truth can lack an L² source certificate
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-tv-dual-source-certificate
  - def-ip-spatial-bv-and-distributional-tv
  - def-ip-boundary-tv-conventions
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-calligraphic-l-p-on-a-measure-space
  - def-real-and-complex-inner-product-space
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-lebesgue-measure-is-a-radon-measure-on-rn
  - def-countable-choice
  - lem-ip-vector-radon-variation-is-radon
  - thm-dominated-convergence
  - thm-integrable-simple-functions-are-dense-in-l-one
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Antonin Chambolle, Vincent Duval, Gabriel Peyré, and Clarice Poon,
        Geometric properties of solutions to the total variation denoising
        problem, §§1.3 and 7
      url: https://arxiv.org/pdf/1602.00087
      locator: §7, limitations of L² source certificates for nonsmooth TV solutions
---

## Statement refuted

Assume Countable Choice. The claim that every minimum-TV exact truth in a two-dimensional Neumann model has an $L^2$ source certificate is false. Let $\Omega=(-1,1)^2$, let $X=Y=L^2(\Omega;\mathbb R)$, let $A:X\to Y$ be the identity, let $f=u^\dagger$ with $u^\dagger(x_1,x_2)=|x_1|$, and let the regularizer be the Neumann total variation $R(u)=|Du|(\Omega)$ on $BV(\Omega)\cap L^2(\Omega)$ and $R(u)=+\infty$ otherwise. The exact equation $Au=f$ has the unique solution $u^\dagger$, so it is a minimum-TV exact truth. Nevertheless, there is no $p\in L^2(\Omega;\mathbb R)$ such that $A^*p=p\in\partial R(u^\dagger)$, where $p\in\partial R(u^\dagger)$ means $R(v)\ge R(u^\dagger)+\int_\Omega p(v-u^\dagger)\,dx$ for every $v\in L^2(\Omega;\mathbb R)$.

## Statement references

[[def-ip-tv-dual-source-certificate|A dual source certificate is an L² vector whose adjoint image is a TV subgradient.]]

[[def-ip-boundary-tv-conventions|Neumann TV counts the distributional derivative inside the open domain.]]

[[def-ip-spatial-bv-and-distributional-tv|BV, distributional derivatives, and total variation.]]

[Chambolle, Duval, Peyré, and Poon, *Geometric properties of solutions to the total variation denoising problem*, §§1.3 and 7](https://arxiv.org/pdf/1602.00087)

## Facts & Assumptions

**Given:** $\Omega=(-1,1)^2$, $X=Y=L^2(\Omega;\mathbb R)$, $A=I$, $u^\dagger(x_1,x_2)=|x_1|$, $f=u^\dagger$, and $R=TV_N$ as specified in the Statement.

[F1] [[def-ip-spatial-bv-and-distributional-tv]]: $Du$ is the vector of distributional derivatives and $TV(u;\Omega)$ is the partition variation $|Du|(\Omega)$.

[F2] [[def-ip-boundary-tv-conventions]]: in the Neumann convention, $R(u)=TV(u;\Omega)$ for $u\in BV(\Omega)$.

[F3] [[def-ip-banach-convex-subgradient-and-dual-pairing]]: $p\in\partial R(u)$ exactly when $R(v)\ge R(u)+\langle p,v-u\rangle_{L^2}$ for every $v\in L^2(\Omega)$.

[F4] [[def-real-and-complex-inner-product-space]]: the real $L^2$ inner product is $\langle p,v\rangle=\int_\Omega pv\,dx$; Cauchy–Schwarz bounds its absolute value by $\|p\|_2\|v\|_2$. ([[thm-cauchy-schwarz-in-an-inner-product-space]])

[F5] [[thm-tonelli-and-fubini-for-completed-product-measures]]: integrable functions on this rectangle may be integrated by iterated one-dimensional integration.

[F6] [[thm-lebesgue-measure-is-a-radon-measure-on-rn]]: Lebesgue measure on $\mathbb R^2$ is Radon; an integrable density gives a finite Radon measure on the bounded domain.

[F7] [[lem-ip-vector-radon-variation-is-radon]]: the partition variation of a finite vector Radon measure is a finite positive Radon measure.

[F8] [[thm-dominated-convergence]]: pointwise convergence almost everywhere under an integrable majorant permits convergence of integrals; it applies to the difference quotients bounded by $|\nabla\varphi|$.

[F9] [[thm-integrable-simple-functions-are-dense-in-l-one]]: every real integrable function admits integrable finite-valued simple approximants in $L^1$; apply it separately to the two coordinates of a vector-valued density.

## Counterexample

**Proof technique:** direct directional-derivative contradiction.

For any integrable real vector density $g=(g_1,g_2)$ and $\varepsilon>0$, apply [F9] to each coordinate with $L^1$ error less than $\varepsilon/2$ and refine the two finite partitions in common. The resulting finite-valued vector simple function $s$ satisfies $\|g-s\|_{L^1}<\varepsilon$, since the Euclidean pointwise norm is at most the sum of the absolute coordinate errors. Thus the vector approximation used in step 1.2 follows from the scalar supplier coordinatewise. The dominated-convergence supplier [F8] also applies there: the difference quotients are bounded by the integrable function $|\nabla\varphi|$.

1.1 The function $u^\dagger=|x_1|$ is bounded on the bounded Lipschitz domain $\Omega$, hence belongs to $L^2(\Omega)$. Fubini and one-dimensional integration by parts show that its distributional gradient is $Du^\dagger=\operatorname{sgn}(x_1)e_1\,dx$: for every compactly supported smooth vector field $\varphi$, the $x_1$ derivative pairing is $-\int |x_1|\partial_1\varphi=\int\operatorname{sgn}(x_1)\varphi_1$, and the $x_2$ derivative pairing vanishes. This bounded density defines a finite vector Radon measure by [F6], so $u^\dagger\in BV(\Omega)$. Since $A=I$, its Hilbert adjoint is also $I$. The equation $Au=f$ forces $u=f=u^\dagger$, so $u^\dagger$ is the unique exact solution and therefore minimizes $R$ among exact solutions. [F1, F2, F5, F6, given, algebra]

1.2 For $\varphi\in C_c^\infty(\Omega;\mathbb R)$ and $t\in\mathbb R$, the distributional gradient of $u^\dagger+t\varphi$ has density $g_t=\operatorname{sgn}(x_1)e_1+t\nabla\varphi$. For any integrable vector density $g$, its partition variation mass is $\int|g|$: every partition gives $\sum_j|\int_{B_j}g|\le\int|g|$; conversely, for $\varepsilon>0$ choose a finite-valued measurable simple function $s=\sum_{k=1}^N c_k\mathbf1_{B_k}$ with $\|g-s\|_1<\varepsilon$, where the disjoint $B_k$ partition the set and $s=0$ off their union. Then this partition gives $\sum_k|\int_{B_k}g|\ge\sum_k|c_k||B_k|-\|g-s\|_1=\|s\|_1-\|g-s\|_1\ge\|g\|_1-2\varepsilon$. Taking arbitrary $\varepsilon$ proves the formula. Consequently $$R(u^\dagger+t\varphi)=\int_\Omega|\operatorname{sgn}(x_1)e_1+t\nabla\varphi|\,dx.$$ For almost every $x$, the vector $q=\operatorname{sgn}(x_1)e_1$ has norm one and $\lim_{t\downarrow0}(|q+t h|-|q|)/t=q\cdot h$. The quotient is bounded in absolute value by $|h|$, by the reverse triangle inequality. Dominated convergence with $h=\nabla\varphi$ therefore yields the one-sided derivative $$L(\varphi):=\lim_{t\downarrow0}\frac{R(u^\dagger+t\varphi)-R(u^\dagger)}{t}=\int_\Omega\operatorname{sgn}(x_1)\partial_1\varphi\,dx=-2\int_{-1}^1\varphi(0,x_2)\,dx_2,$$ where the last equality is integration by parts on $(-1,0)$ and $(0,1)$; compact support removes the endpoint terms. Replacing $\varphi$ by $-\varphi$ gives directional derivative $-L(\varphi)$. [F1, F2, F5, F6, F7, F8, F9, given, algebra]

2.1 Suppose a certificate $p\in L^2(\Omega)$ existed. The subgradient inequality [F3] applied to $u^\dagger+t\varphi$ for $t>0$, divided by $t$ and passed to the limit in step 1.2, gives $\int_\Omega p\varphi\le L(\varphi)$. Applying the same inequality to $u^\dagger-t\varphi$ gives $-\int_\Omega p\varphi\le-L(\varphi)$. Thus $\int_\Omega p\varphi=L(\varphi)$ for every compactly supported smooth $\varphi$. [F3, step 1.2, given]

3.1 Choose $\eta,\psi\in C_c^\infty((-1,1))$ with $\eta(0)=1$ and $\int_{-1}^1\psi\ne0$, and for $0<\varepsilon<1$ set $\varphi_\varepsilon(x_1,x_2)=\eta(x_1/\varepsilon)\psi(x_2)$. Then $\varphi_\varepsilon\in C_c^\infty(\Omega)$ and $\|\varphi_\varepsilon\|_2=\sqrt{\varepsilon}\,\|\eta\|_2\|\psi\|_2\to0$. But step 2.1 and the formula in step 1.2 give $\int_\Omega p\varphi_\varepsilon=-2\int_{-1}^1\psi(x_2)\,dx_2$, a fixed nonzero number, whereas Cauchy–Schwarz [F4] forces these integrals to tend to zero. This contradiction proves that no $L^2$ source certificate exists. [F4, step 1.2, step 2.1, choose, algebra] ∎

