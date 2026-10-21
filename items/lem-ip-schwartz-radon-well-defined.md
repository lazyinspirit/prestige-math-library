---
id: lem-ip-schwartz-radon-well-defined
kind: lemma
title: The Radon transform maps Schwartz functions to Schwartz offset data
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-schwartz-radon-transform
  - def-schwartz-space-and-its-seminorms
  - thm-chain-rule-for-total-derivatives
  - thm-differentiation-under-the-integral-sign
  - cor-mean-value-theorem
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–5: Radon transform on compactly supported smooth functions."
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.3.2, pp. 12–13: line-integral parameterization."
---

## Statement

For every $f\in\mathcal S(\mathbb R^2)$ and every $\theta\in S^1$, the defining line integral for $R_{\mathcal S}f(\theta,s)$ converges absolutely for every $s\in\mathbb R$, and $s\mapsto R_{\mathcal S}f(\theta,s)$ belongs to $\mathcal S(\mathbb R)$. For each pair of nonnegative integers $k,N$, its $k$th derivative is bounded by $C_{k,N}(1+|s|)^{-N}$ with a finite constant $C_{k,N}$ independent of $s$ and $\theta$.

## Facts & Assumptions

**Given:** $f\in\mathcal S(\mathbb R^2)$ and $\theta\in S^1$.

[F1] [[def-schwartz-space-and-its-seminorms]]: every seminorm $p_{\alpha\beta}(f)=\sup_x|x^\alpha\partial^\beta f(x)|$ is finite.

[F2] [[def-ip-schwartz-radon-transform]]: $R_{\mathcal S}f(\theta,s)=\int_{\mathbb R}f(s\theta+t\theta^\perp)\,dt$.

[F3] [[thm-differentiation-under-the-integral-sign]]: if each parameter slice is integrable, the integrand is differentiable in the parameter almost everywhere, its derivative is measurable, and the derivatives have one integrable majorant uniform in the parameter interval, then the integral is differentiable with derivative equal to the integral of the derivative.

[F4] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition of totally differentiable Euclidean maps is the composition of their derivatives.

[F5] [[cor-mean-value-theorem]]: for a real differentiable function on an interval, its increment equals an interior derivative times the interval length; apply to real and imaginary parts for complex functions.

## Proof

1.1 Fix a derivative multi-index $\beta$ and an integer $N\ge1$, and choose an integer $m\ge N$. Since $(1+|x|)^N\le(1+|x_1|)^m(1+|x_2|)^m$, expanding the right side and using the finite Schwartz seminorms in [F1] gives a finite $C_{\beta,N}(f)$ with $|\partial^\beta f(x)|\le C_{\beta,N}(f)(1+|x|)^{-N}$. For $x=s\theta+t\theta^\perp$, orthogonality gives $|x|=(s^2+t^2)^{1/2}\ge(|s|+|t|)/\sqrt2$, so the line integrand is bounded by a constant times $(1+|s|+|t|)^{-N}$. Taking $N>1$ makes this majorant integrable in $t$, proving absolute convergence. [given, F1, F2, algebra]

2.1 Let $D_\theta=\theta\cdot\nabla$. The chain rule [F4] gives $\partial_s^k f(s\theta+t\theta^\perp)=(D_\theta^k f)(s\theta+t\theta^\perp)$. Expanding $D_\theta^k$ gives finitely many partial derivatives with coefficients bounded uniformly for $\theta\in S^1$. For the target decay order $N$, apply step 1.1 with spatial decay order $N+2$ to each such derivative. Integrating $(1+|s|+|t|)^{-N-2}$ in $t$ gives $\left|\int_{\mathbb R}(D_\theta^k f)(s\theta+t\theta^\perp)\,dt\right|\le C'_{k,N}(1+|s|)^{-N-1}\le C'_{k,N}(1+|s|)^{-N}$, uniformly in $\theta$ and $s$. [F1, F2, F4, step 1.1, algebra]

3.1 Fix $s_0\in\mathbb R$ and a bounded open interval $I$ containing $s_0$. For each $k\ge0$, set $g_k(t,s)=(D_\theta^k f)(s\theta+t\theta^\perp)$. Every slice $g_k(\cdot,s)$ is integrable by step 1.1; it is differentiable in $s$ with derivative $g_{k+1}$ by [F4], and this derivative is measurable. Step 1.1 with spatial decay order $3$ bounds $|g_{k+1}(t,s)|\le C(1+|t|)^{-3}$ uniformly for $s\in I$, an integrable majorant. Thus [F3] proves $\frac{d}{ds}\int g_k(t,s)\,dt=\int g_{k+1}(t,s)\,dt$. To see each resulting derivative is continuous, if $s=s'$ the difference is zero; otherwise apply [F5] to real and imaginary parts on the segment joining $s$ and $s'$. The same majorant gives $|g_k(t,s)-g_k(t,s')|\le C|s-s'|(1+|t|)^{-3}$, and integration proves local continuity. Repeating for all $k$ and using the estimates in step 2.1 shows the offset function is Schwartz. [F3, F4, F5, step 1.1, step 2.1] ∎
