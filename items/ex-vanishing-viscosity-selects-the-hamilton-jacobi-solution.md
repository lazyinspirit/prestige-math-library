---
id: ex-vanishing-viscosity-selects-the-hamilton-jacobi-solution
kind: example
title: Vanishing viscosity selects the Hopf--Lax solution for bounded data
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hamilton-jacobi-cauchy-problem
- def-viscosity-subsolution-and-supersolution
- def-metric-uniform-continuity
- def-hopf-lax-operator
- def-legendre-transform-of-a-hamiltonian
- lem-hopf-lax-infima-localise
- thm-hopf-lax-dynamic-programming-semigroup
- def-heat-equation-heat-operator-and-cauchy-problem
- def-heat-kernel
- def-laplacian-of-a-c2-function
- def-total-derivative-in-euclidean-space
- thm-gaussian-integral
- thm-substitution-for-improper-integrals
- thm-dominated-convergence
- thm-derivative-of-exponential
- thm-chain-rule
- thm-algebra-of-derivatives
- thm-sine-and-cosine-derivatives
- cor-sine-and-cosine-are-one-lipschitz
- cor-trigonometric-parity-and-pythagorean-identity
- thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation
- cor-mean-value-theorem
- thm-logarithm-derivative-and-integral
- thm-fermat-for-euclidean-local-extrema
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1, Theorem 1.9 and its proof, printed p. 20 (vanishing-viscosity background). The sin Cole--Hopf family and the explicit error estimate are computed here.
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: 'Section 6: equation (6.1), Lemma 6.1, Remarks 6.2--6.4 and Theorem 6.5, printed pp. 34--35; these are stability background, not the explicit sin estimate.'
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 4, the vanishing-viscosity limit, printed pp. 12--14
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $u_0(x)=\sin x$ on $\mathbb R$, a bounded uniformly continuous datum, and
let $H(p)=p^2/2$. For $\varepsilon>0$ and $t>0$ define
$$u^\varepsilon(x,t)=-2\varepsilon\log\!\left[(4\pi\varepsilon t)^{-1/2}\int_{\mathbb R}\exp\!\left(-\frac{\sin y+(x-y)^2/(2t)}{2\varepsilon}\right)\,dy\right],$$
and set $u^\varepsilon(x,0)=\sin x$. Then $u^\varepsilon$ is a bounded classical
solution for $t>0$ of
$$u_t^\varepsilon+\tfrac12|u_x^\varepsilon|^2=\varepsilon u_{xx}^\varepsilon,$$
and it attains $u_0$ uniformly as $t\downarrow0$. The Hopf--Lax function
$$Q_tu_0(x):=\inf_{y\in\mathbb R}\Bigl\{\sin y+\frac{(x-y)^2}{2t}\Bigr\},\qquad Q_0u_0=u_0,$$
is a bounded uniformly continuous viscosity solution of
$u_t+\tfrac12|u_x|^2=0$ with initial trace $u_0$, and for every $T<\infty$ one
has
$$\sup_{x\in\mathbb R,\ 0\le t\le T}|u^\varepsilon(x,t)-Q_tu_0(x)|\le\max\left\{\varepsilon\log(1+T),\ 2\varepsilon\log\left(\sqrt{\frac{8}{\pi\varepsilon}}+\sqrt2\right)\right\}.$$
Both terms on the right tend to zero as $\varepsilon\downarrow0$. Thus the
viscous solutions converge uniformly on every finite time strip. The estimate
permits an $O(\varepsilon|\log\varepsilon|)$ error and does not assert a
uniform $O(\varepsilon)$ rate.

## Verification

**Given:** The datum $u_0(x)=\sin x$, the Hamiltonian $H(p)=p^2/2$ with Legendre transform $L(v)=v^2/2$, all displayed integrals interpreted as absolutely convergent improper integrals of continuous functions, the heat kernel $\Gamma(z,s)=(4\pi s)^{-1/2}e^{-z^2/(4s)}$ ([[def-heat-kernel]]), the viscous equations and the Hopf--Lax function $Q_tu_0$ ([[def-hopf-lax-operator]]).

[F1] $\sin'=\cos$, $|\cos|\le1$, $|\sin x-\sin y|\le|x-y|$, and $\sin$ is bounded ([[thm-sine-and-cosine-derivatives]], [[cor-sine-and-cosine-are-one-lipschitz]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[F2] The Gaussian integral and change of variable for improper integrals are [[thm-gaussian-integral]] and [[thm-substitution-for-improper-integrals]]. The logarithm derivative is $1/x$ for $x>0$ ([[thm-logarithm-derivative-and-integral]]), and the kernel is the explicit function of [[def-heat-kernel]]; the exponential derivative, chain and algebra rules are [[thm-derivative-of-exponential]], [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]. On a compact $(x,t)$-neighbourhood with $t>0$, every required kernel derivative is bounded by a fixed polynomial-times-Gaussian function of $y$, integrable by comparison with a Gaussian. On each compact $y$-interval its difference quotients converge uniformly; the mean value theorem bounds their tails by that same integrable majorant. Splitting into this interval and its tail justifies differentiation under the improper integral without a Lebesgue change-of-variable theorem or a choice assumption ([[cor-mean-value-theorem]]).

[F3] The quadratic conjugate is $L(v)=v^2/2$ by completing the square in [[def-legendre-transform-of-a-hamiltonian]]. For the bounded uniformly continuous datum $\sin$, the infimum is attained ([[lem-hopf-lax-infima-localise]]) and [[thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation]] supplies the viscosity solution, finite-strip bounded uniform continuity, initial trace and uniqueness. At a differentiable minimizer the derivative is zero by [[thm-fermat-for-euclidean-local-extrema]]. The semigroup is [[thm-hopf-lax-dynamic-programming-semigroup]].

**Proof technique:** Cole--Hopf representation, an approximate-identity bound, and the variational reduction of the limit.

1.1 The Cole--Hopf family solves the viscous equation. Write $W^\varepsilon(x,t):=\int_{\mathbb R}\Gamma(x-y,\varepsilon t)e^{-\sin y/(2\varepsilon)}\,dy$. The substitution $z=2\sqrt{\varepsilon t}r$ and $\int e^{-r^2}dr=\sqrt\pi$ show $\int\Gamma(z,\varepsilon t)dz=1$, and the same substitution with the Gaussian tail shows that $\Gamma(\cdot,\varepsilon t)$ is an approximate identity as $t\downarrow0$. Differentiating the kernel gives $\partial_t\Gamma(\cdot,\varepsilon t)=\varepsilon\partial_{xx}\Gamma(\cdot,\varepsilon t)$, so by [F2] $W^\varepsilon_t=\varepsilon W^\varepsilon_{xx}$, $W^\varepsilon>0$, and $u^\varepsilon=-2\varepsilon\log W^\varepsilon$ satisfies $u^\varepsilon_t=\varepsilon u^\varepsilon_{xx}-|u^\varepsilon_x|^2/2$, that is $u^\varepsilon_t+|u^\varepsilon_x|^2/2=\varepsilon u^\varepsilon_{xx}$, on $t>0$. The approximate identity applied to the bounded uniformly continuous function $e^{-\sin(\cdot)/(2\varepsilon)}$ gives $W^\varepsilon\to e^{-\sin x/(2\varepsilon)}$ uniformly as $t\downarrow0$, hence $u^\varepsilon(x,t)\to\sin x$ uniformly; and $-1\le u^\varepsilon\le1$ because $e^{-1/(2\varepsilon)}\le e^{-\sin y/(2\varepsilon)}\le e^{1/(2\varepsilon)}$ and the kernel has unit mass. [F1, F2, algebra]

1.2 Uniform comparison with Hopf--Lax. Fix $x$, $t>0$, put $g(y)=\sin y+(x-y)^2/(2t)$ and $m=\min g=Q_tu_0(x)$, and take one minimiser $y_*$. Then $-1\le m\le1$, $g'(y_*)=0$, and $g''(y)\le A:=1+1/t$. Applying the mean value theorem [F2] to $g'$ shows that the derivative of $g(y_*+r)-m-Ar^2/2$ is nonpositive for $r>0$ and nonnegative for $r<0$; a second application gives $g(y_*+r)\le m+Ar^2/2$. The full Gaussian integral therefore gives $W^\varepsilon(x,t)\ge e^{-m/(2\varepsilon)}/\sqrt{1+t}$, hence $u^\varepsilon-m\le\varepsilon\log(1+t)$. Conversely, $g-m\ge0$ everywhere, and $g-m\ge(x-y)^2/(2t)-2$. If $|y-x|\ge\sqrt{8t}$, the latter is at least $(x-y)^2/(4t)$. Splitting the integral at this radius and using [F2] bounds its normalized ratio by $$e^{m/(2\varepsilon)}W^\varepsilon(x,t)\le(4\pi\varepsilon t)^{-1/2}\left(2\sqrt{8t}+\int_{\mathbb R}e^{-(x-y)^2/(8\varepsilon t)}\,dy\right)=\sqrt{\frac8{\pi\varepsilon}}+\sqrt2.$$ Thus $u^\varepsilon-m\ge-2\varepsilon\log(\sqrt{8/(\pi\varepsilon)}+\sqrt2)$. These two bounds hold for every $x$ and $t>0$; at $t=0$ the functions agree. Taking their maximum for $0\le t\le T$ gives the stated absolute error bound. Its right-hand side tends to zero: writing $s=1/\varepsilon\ge1$, the integral formula for the logarithm in [F2] gives $\log s=\int_1^s dr/r\le\int_1^s dr/\sqrt r=2(\sqrt s-1)$, hence $(\log s)/s\to0$. [F1, F2, F3, algebra]

2.1 The limit is the viscosity solution. By [F3] the function $Q_tu_0$ is a viscosity solution of $u_t+|u_x|^2/2=0$; independently, since $u_0$ is 1-Lipschitz with $|u_0|\le1$, the bounds $u_0(x)-t/2\le Q_tu_0(x)\le u_0(x)$ hold (competitor $y=x$ and the Lipschitz bound for $\sin$), so $Q_tu_0$ has the initial trace $u_0$ and is bounded and uniformly continuous. The uniform estimate of step 1.2, whose right-hand side tends to zero, then gives locally uniform convergence of the viscous family to this viscosity solution without invoking a general vanishing-viscosity theorem and without a momentum-Lipschitz hypothesis. [step 1.1, step 1.2, F1, F3] ∎
