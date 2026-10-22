---
id: prop-ip-limited-angle-data-no-holder-stability
kind: proposition
title: Limited-angle inversion has no Hölder modulus on a fixed-support H1 ball
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-visible-covector-for-limited-angle-data
  - def-ip-schwartz-radon-transform
  - lem-ip-limited-angle-radon-data-is-l2-on-compact-support
  - lem-smooth-bump-between-concentric-euclidean-balls
  - cor-cauchy-schwarz-inequality-for-l-two
  - cor-c-one-change-of-variables-for-l-one-functions
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-sine-and-cosine-derivatives
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–5: line-normal data and Fourier-slice convention."
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.3.2 and §1.5.1, pp. 13–14 and 34–35: restricted-angle geometry and visible directions."
---

## Statement

Assume the Axiom of Countable Choice. Let $\Omega\subset\mathbb R^2$ be a bounded open set containing a closed ball $K=\overline B_R(x_0)$ of positive radius, and let $\Theta\subset S^1$ be a nonempty open antipodally symmetric set. Write $\theta^\perp=(-\theta_2,\theta_1)$ and, for a Schwartz function $g$, define $R_{\mathcal S}g(\theta,s)=\int_{\mathbb R}g(s\theta+t\theta^\perp)\,dt$; use the same integral for smooth functions supported in $K$. Suppose a unit vector $v\in S^1$ satisfies $c:=\inf_{\theta\in\Theta}|v\cdot\theta^\perp|>0$. For each smooth complex function $u$ supported in $K$, define $\|u\|_{H^1}:=(\|u\|_2^2+\|\partial_1u\|_2^2+\|\partial_2u\|_2^2)^{1/2}$ using Lebesgue measure on $\mathbb R^2$, and set $\|R_\Theta u\|_D:=(\int_\Theta\int_{\mathbb R}|R_{\mathcal S}u(\theta,s)|^2\,ds\,d\theta)^{1/2}$, where $ds$ is Lebesgue measure and $d\theta$ is arc-length measure. For every $M>0$ there are $a_M>0$, functions $u_N\in C_c^\infty(\operatorname{int}K;\mathbb C)$ for all integers $N\ge1$, and constants $C_m>0$ for all integers $m\ge1$, such that all $u_N$ have one fixed compact support and $\|u_N\|_{H^1}\le M$, $\|u_N\|_2=a_MN^{-1}$, and $\|R_\Theta u_N\|_D\le C_mN^{-m-1}$. Consequently, for every fixed $M>0$, no $\alpha>0$ and $C\ge0$ satisfy $\|u\|_2\le C\|R_\Theta u\|_D^\alpha$ for every smooth $u$ supported in $K$ with $\|u\|_{H^1}\le M$.

## Statement references

[[def-ip-visible-covector-for-limited-angle-data|Line-normal and blind-direction convention]]

[[lem-ip-limited-angle-radon-data-is-l2-on-compact-support|Finite restricted-data norm on compact support]]

[Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography, §§1.3.2 and 1.5.1](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $\Omega$, $K$, $\Theta$, $v$, $c>0$, and the definitions and hypotheses in the Statement.

[F1] [[def-ip-visible-covector-for-limited-angle-data]]: $\theta$ is the unit line normal and $\theta^\perp=(-\theta_2,\theta_1)$ is the line tangent direction.

[F2] [[def-ip-schwartz-radon-transform]]: $R_{\mathcal S}u(\theta,s)=\int_{\mathbb R}u(s\theta+t\theta^\perp)\,dt$.

[F3] [[lem-smooth-bump-between-concentric-euclidean-balls]]: for $0<r<R$, a smooth function equal to one on the closed radius-$r$ ball and supported in the open radius-$R$ ball exists.

[F4] [[cor-cauchy-schwarz-inequality-for-l-two]]: the integral of a product is bounded by the product of the two $L^2$ norms.

[F5] [[cor-c-one-change-of-variables-for-l-one-functions]]: under Countable Choice, a $C^1$ diffeomorphism changes an $L^1$ Lebesgue integral by the absolute Jacobian determinant.

[F6] [[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]: under Countable Choice, complex $C^1$ functions on a finite interval satisfy $\int u'v=[uv]-\int uv'$.

[F7] [[thm-algebra-of-derivatives]]: the product of differentiable real functions satisfies the product rule; the complex-valued formula follows by applying it to real and imaginary parts.

[F8] [[thm-chain-rule-for-total-derivatives]]: composing a smooth function with an affine line map differentiates by applying its differential to the line direction.

[F9] [[thm-sine-and-cosine-derivatives]]: differentiating $\cos(at)+i\sin(at)$ gives $ia(\cos(at)+i\sin(at))$ by the real chain rule.

[F10] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: every nondegenerate box has positive Lebesgue measure equal to the product of its side lengths.

[F11] [[lem-ip-limited-angle-radon-data-is-l2-on-compact-support]]: for every smooth input with fixed compact support, the restricted data have finite $L^2(\Theta\times\mathbb R)$ norm.

[A1] [[def-countable-choice]]: Countable Choice is used by the box-measure supplier [F10], L2 data bound [F11], Lebesgue change-of-variables [F5], and complex integration-by-parts [F6] suppliers.

## Proof

1.1 Choose $0<r<R$ and apply [F3] to obtain a bump supported in $B_R(x_0)$ and equal to one on a smaller ball; translation of the concentric bump places it inside $K$. Its $L^2$ norm is finite and positive because it is bounded with compact support and equals one on a ball containing a nondegenerate box, whose measure is positive by [F10]. Rescale it to a real-valued $\psi$ with $\|\psi\|_2=1$. Choose $\lambda>0$ so that $\lambda(1+\|\nabla\psi\|_2+2\pi)\le M$, and put $u_N(x)=\lambda N^{-1}e^{2\pi iNv\cdot x}\psi(x)$. Then all supports equal $\operatorname{supp}\psi\Subset\operatorname{int}K$ and $\|u_N\|_2=\lambda N^{-1}$. By [F7]–[F9], $\partial_j u_N=\lambda N^{-1}e^{2\pi iNv\cdot x}(\partial_j\psi+2\pi iNv_j\psi)$, so $\|\nabla u_N\|_2\le\lambda N^{-1}\|\nabla\psi\|_2+2\pi\lambda\|v\|\,\|\psi\|_2\le\lambda(\|\nabla\psi\|_2+2\pi)$. Therefore $\|u_N\|_{H^1}\le M$; set $a_M=\lambda$. [A1, F3, F7, F8, F9, F10, given, construct, algebra]

1.2 Put $a=v\cdot\theta^\perp$, so $|a|\ge c>0$. The line formula gives $R_{\mathcal S}u_N(\theta,s)=\lambda N^{-1}e^{2\pi iNs(v\cdot\theta)}\int_{\mathbb R}e^{2\pi iNat}\psi(s\theta+t\theta^\perp)\,dt$. For each integer $m\ge1$, integrate the last integral by parts $m$ times over an interval containing the support of its integrand. The boundary terms vanish because $\psi$ and all its derivatives vanish near the endpoints. Applying [F6] repeatedly gives $\left|\int_{\mathbb R}e^{2\pi iNat}\psi(s\theta+t\theta^\perp)\,dt\right|\le(2\pi N|a|)^{-m}\int_{\mathbb R}|(\theta^\perp\cdot\nabla)^m\psi(s\theta+t\theta^\perp)|\,dt$. [F1, F2, F6, F8, F9, A1, given, construct]

2.1 Let $D=\operatorname{diam}(\operatorname{supp}\psi)$. The set of $t$ values on a fixed line meeting this support has measure at most $D$. Cauchy--Schwarz [F4] bounds the square of the last integral in step 1.2 by $D\int_{\mathbb R}|(\theta^\perp\cdot\nabla)^m\psi(s\theta+t\theta^\perp)|^2\,dt$. Integrate in $s$ and apply [F5] to the orthogonal change of variables $(s,t)\mapsto s\theta+t\theta^\perp$, whose absolute Jacobian is one. Expanding $(\theta^\perp\cdot\nabla)^m$ gives an $L^2$ bound independent of $\theta$, since there are finitely many derivatives and all coefficients are bounded by one. Since $|a|\ge c$ and $|\Theta|\le2\pi$, step 1.2 yields a finite constant $C_m>0$, independent of $N$, with $\|R_\Theta u_N\|_D\le C_mN^{-m-1}$. [F4, F5, A1, step 1.2, algebra]

3.1 Fix $\alpha>0$ and choose an integer $m\ge1$ with $\alpha(m+1)>1$. The square-integrability bound [F11] makes the data norm finite for every member of the fixed-support class. If a uniform Hölder estimate with constant $C\ge0$ held on the class in the Statement, steps 1.1 and 2.1 would give $\lambda N^{-1}\le C(C_mN^{-m-1})^\alpha$ for every $N\ge1$. Multiplication by $N$ makes the right side $CC_m^\alpha N^{1-\alpha(m+1)}$, which tends to zero as $N\to\infty$, contradicting $\lambda>0$. Therefore no such estimate exists. [A1, F11, step 1.1, step 2.1, algebra] ∎
