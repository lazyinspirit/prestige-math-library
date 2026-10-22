---
id: ex-ip-point-source-distributional-limit
kind: example
title: A point source as a distributional Radon limit
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
aliases: []
deps:
  - def-ip-2d-radon-transform
  - cor-change-of-variables-for-compactly-supported-functions
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-multidimensional-integral-properties
  - thm-riemann-fubini-on-product-rectangles
justified_by: []
forward_refs: []
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
  references: []
---

## Example

Let $\eta(u)=0$ for $u\le0$ and $\eta(u)=e^{-1/u}$ for $u>0$, set $\psi(x)=\eta(1-|x|^2)$ on $\mathbb R^2$, let $J=\int_{\mathbb R^2}\psi(x)\,dx$, and define $\phi=J^{-1}\psi$. For $\varepsilon>0$ put $\phi_\varepsilon(x)=\varepsilon^{-2}\phi(x/\varepsilon)$. The functions $\phi_\varepsilon$ are radial smooth unit-mass point-source approximations. For $\rho(s)=\int_{\mathbb R}\phi(s\theta+t\theta^\perp)\,dt$, which is independent of $\theta$, their full line data satisfy
$$R\phi_\varepsilon(\theta,s)=\varepsilon^{-1}\rho(s/\varepsilon).$$
For each fixed $\theta\in S^1$ and every test function $h\in C_c^\infty(\mathbb R)$, the offset distributions converge to the point mass:
$$\lim_{\varepsilon\downarrow0}\int_{\mathbb R}R\phi_\varepsilon(\theta,s)h(s)\,ds=h(0).$$
Thus the point-source sinogram is $\delta_0(s)$ in the offset variable, for every line normal.

## Facts & Assumptions

**Given:** The functions $\eta$, $\psi$, $\phi$, and $\phi_\varepsilon$ in the Example, with $J$ to be shown positive and finite.

[F1] [[def-ip-2d-radon-transform]]: $Rf(\theta,s)=\int_{\mathbb R}f(s\theta+t\theta^\perp)\,dt$.

[F2] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: continuous functions on compact Jordan sets are Riemann integrable.

[F3] [[thm-multidimensional-integral-properties]]: the Riemann integral is monotone and additive across coordinate cuts, and linear on integrable functions.

[F4] [[thm-riemann-fubini-on-product-rectangles]]: an integrable function on a product rectangle has equal product and iterated Riemann integrals when its sections are integrable.

[F5] [[cor-change-of-variables-for-compactly-supported-functions]]: compactly supported Riemann integrals obey the change-of-variables formula for an injective $C^1$ diffeomorphism with its absolute Jacobian.

## Verification

1.1 For $u>0$, repeated differentiation gives $\eta^{(k)}(u)=P_k(1/u)e^{-1/u}$ for a polynomial $P_k$. The exponential-series bound $e^v\ge v^{m+1}/(m+1)!$ for $v>0$ shows that each such expression and its difference quotient tend to $0$ as $u\downarrow0$; induction on $k$ proves that the zero extension is smooth. Hence $\psi$ is smooth, nonnegative, vanishes for $|x|\ge1$, and is positive near $x=0$. [given, algebra]

2.1 By [F2], $\psi$ is Riemann integrable on a bounding rectangle; $0\le\psi\le1$ and its support lies in $[-1,1]^2$, so [F3] gives $J<\infty$. On $[-1/4,1/4]^2$ one has $1-|x|^2\ge7/8$, hence $\psi\ge e^{-8/7}$; monotonicity in [F3] gives $J\ge e^{-8/7}/4>0$. Thus $\phi$ is defined, radial, smooth, compactly supported, nonnegative, and has integral one. Applying [F5] to $x=\varepsilon y$ gives $\int_{\mathbb R^2}\phi_\varepsilon(x)\,dx=\varepsilon^{-2}\varepsilon^2\int_{\mathbb R^2}\phi(y)\,dy=1$ for every $\varepsilon>0$. [given, F2, F3, F5, step 1.1]

3.1 The scaling $t=\varepsilon u$ in the line integral [F1] gives $R\phi_\varepsilon(\theta,s)=\varepsilon^{-1}\rho(s/\varepsilon)$. Radiality gives $\phi(s\theta+t\theta^\perp)=J^{-1}\eta(1-s^2-t^2)$, so $\rho$ is independent of $\theta$ and vanishes for $|s|>1$. It is continuous: for $s'\to s$, $$|\rho(s')-\rho(s)|\le2\sup_{|t|\le1}|\phi(s'\theta+t\theta^\perp)-\phi(s\theta+t\theta^\perp)|\longrightarrow0,$$ since $\phi$ is uniformly continuous. Thus $\rho$ is compactly supported and Riemann integrable by [F2]. Riemann-Fubini [F4] and the orthogonal change of variables $(s,t)\mapsto s\theta+t\theta^\perp$, whose absolute Jacobian is $1$, give $\int_{\mathbb R}\rho(s)\,ds=\int_{\mathbb R^2}\phi(x)\,dx=1$. [F1, F2, F4, F5, step 2.1]

4.1 By step 3.1, $\rho$ is continuous and supported on $[-1,1]$, so $R\phi_\varepsilon(\theta,\cdot)h$ is compactly supported and continuous. If $h$ is complex-valued, apply [F2] and the compact-support change of variables [F5] separately to its real and imaginary parts; thus with $s=\varepsilon u$ we get $\int_{\mathbb R}R\phi_\varepsilon(\theta,s)h(s)\,ds=\int_{-1}^{1}\rho(u)h(\varepsilon u)\,du$. Uniform continuity of $h$ on $[-1,1]$ implies $\sup_{|u|\le1}|h(\varepsilon u)-h(0)|\to0$. Since $\rho\ge0$ and $\int\rho=1$ by step 3.1, the integral tends to $h(0)$. [given, F2, F5, step 3.1, algebra]

5.1 The functional $h\mapsto h(0)$ is the point mass $\delta_0$ by definition of the Dirac distribution. Step 4.1 proves the asserted distributional limit for every fixed normal $\theta$. [step 4.1] ∎
