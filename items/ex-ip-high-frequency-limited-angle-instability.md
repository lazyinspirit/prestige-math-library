---
id: ex-ip-high-frequency-limited-angle-instability
kind: example
title: Rapid oscillations make limited-angle data smaller than every power
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-visible-covector-for-limited-angle-data
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - prop-ip-limited-angle-data-no-holder-stability
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.5.1, pp. 34–35: limited-angle visible covectors and missing directions."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–5: line-normal Fourier geometry; the quantitative oscillatory estimate is proved locally."
---

## Example

Assume the Axiom of Countable Choice. Take $\Omega=B_2(0)$, $K=\overline B_1(0)$, $\Theta=\{\theta\in S^1:|\theta_1|<1/2\}$, and $v=(1,0)$. Write $\theta^\perp=(-\theta_2,\theta_1)$ and define $R_\Theta u(\theta,s)=\int_{\mathbb R}u(s\theta+t\theta^\perp)\,dt$ for $\theta\in\Theta$, $s\in\mathbb R$. Give the data space $D=L^2(\Theta\times\mathbb R,d\theta\,ds)$ the norm $\|g\|_D=(\int_\Theta\int_{\mathbb R}|g(\theta,s)|^2\,ds\,d\theta)^{1/2}$, with arc-length measure $d\theta$ and Lebesgue measure $ds$, and define $\|u\|_{H^1}=(\|u\|_2^2+\|\partial_1u\|_2^2+\|\partial_2u\|_2^2)^{1/2}$ using Lebesgue measure on $\mathbb R^2$. Then $\Theta$ is open and antipodally symmetric, its complement contains open horizontal arcs, and $\inf_{\theta\in\Theta}|v\cdot\theta^\perp|=\sqrt3/2$. For every $M>0$, the class of smooth functions supported in $K$ with $H^1$ norm at most $M$ has no uniform Hölder stability estimate from the restricted Radon data. More explicitly, choose a real bump $\psi\in C_c^\infty(B_1(0))$ with $\|\psi\|_2=1$, set $\lambda_M=M/[2(1+\|\nabla\psi\|_2+2\pi)]$, and let $u_N(x)=\lambda_MN^{-1}e^{2\pi iNx_1}\psi(x)$ for integers $N\ge1$. These functions have the same compact support, satisfy $\|u_N\|_{H^1}\le M$ and $\|u_N\|_2=\lambda_MN^{-1}$, while for every integer $m\ge1$ there is $C_m<\infty$ with $\|R_\Theta u_N\|_D\le C_mN^{-m-1}$.

## Example references

[[def-ip-visible-covector-for-limited-angle-data|Line-normal and blind-direction conventions]]

[[prop-ip-limited-angle-data-no-holder-stability|High-frequency modulation and the no-Hölder estimate]]

[Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography, §1.5.1](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf)

[Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the stated domain $\Omega$, fixed support $K$, measured normals $\Theta$, direction $v$, and bump $\psi$.

[F1] [[def-ip-visible-covector-for-limited-angle-data]]: $\theta^\perp=(-\theta_2,\theta_1)$ is the unit line tangent, so for $v=(1,0)$ one has $|v\cdot\theta^\perp|=|\theta_2|$.

[F2] [[lem-smooth-bump-between-concentric-euclidean-balls]]: a smooth bump supported in $B_1(0)$ and equal to one on a smaller ball exists.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: a nondegenerate box has strictly positive Lebesgue measure, so a bump equal to one on a ball has positive $L^2$ norm and can be normalized.

[F4] [[prop-ip-limited-angle-data-no-holder-stability]]: if a fixed-support bump is normalized in $L^2$ and $|v\cdot\theta^\perp|$ is uniformly bounded below on $\Theta$, its modulations $u_N=\lambda N^{-1}e^{2\pi iNv\cdot x}\psi$ have $H^1$ norm bounded by $\lambda(1+\|\nabla\psi\|_2+2\pi)$ and restricted data bounded by $C_mN^{-m-1}$ for every $m$; this is the proposition's proved integration-by-parts estimate.

[A1] [[def-countable-choice]]: Countable Choice is used in the box-measure supplier [F3] and in [F4]'s Lebesgue change-of-variables and integration-by-parts estimates.

## Verification

**Proof technique:** direct.

1.1 The set $\Theta$ is the inverse image of the open interval $(-1/2,1/2)$ under the continuous coordinate map $\theta\mapsto\theta_1$, so it is open; changing $\theta$ to $-\theta$ preserves $|\theta_1|$, so it is antipodally symmetric. Its complement contains arcs around $(1,0)$ and $(-1,0)$. For every $\theta\in\Theta$, $|\theta_2|=\sqrt{1-\theta_1^2}>\sqrt3/2$, hence the infimum is at least $\sqrt3/2$; approaching either boundary $|\theta_1|=1/2$ shows the infimum is exactly $\sqrt3/2$. By [F1] this is $\inf_{\theta\in\Theta}|v\cdot\theta^\perp|$. [F1, given, algebra]

1.2 A translated or rescaled bump from [F2] has compact support in $B_1(0)$ and equals one on a smaller ball. That inner ball contains a nondegenerate box, which has positive measure by [F3]; compact support makes its $L^2$ norm finite, and the plateau makes the norm positive. Divide by this norm to obtain the required real $\psi$ with $\|\psi\|_2=1$. Since $K=\overline B_1(0)$ lies inside $\Omega=B_2(0)$, its support is contained in the fixed set $K$. [A1, F2, F3, given, construct]

2.1 The formula in the Example is the modulation family in [F4]. The chosen $\lambda_M$ satisfies $\lambda_M(1+\|\nabla\psi\|_2+2\pi)=M/2\le M$, and the geometric verification in step 1.1 supplies the positive lower bound required there. Thus the family has the stated fixed support, $H^1$ and $L^2$ bounds, and rapid restricted-data decay. [F4, A1, step 1.1, step 1.2, algebra]

3.1 If a uniform Hölder estimate with exponent $\alpha>0$ and constant $C\ge0$ held on the fixed-support class, choose an integer $m\ge1$ with $\alpha(m+1)>1$. Step 2.1 would imply $\lambda_MN^{-1}\le C(C_mN^{-m-1})^\alpha$, so $\lambda_M\le CC_m^\alpha N^{1-\alpha(m+1)}\to0$, contradicting $\lambda_M>0$. Therefore no such estimate holds. [step 2.1, algebra] ∎
