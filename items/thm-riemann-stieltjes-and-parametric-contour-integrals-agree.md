---
id: thm-riemann-stieltjes-and-parametric-contour-integrals-agree
kind: theorem
title: "For piecewise-C1 contours the Riemann–Stieltjes integral agrees with the parametric complex integral and the published real line integrals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-riemann-stieltjes-c1-integrator-reduction, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-vector-valued-derivative-and-integral, cor-piecewise-c1-paths-have-additive-speed-integral-length, thm-continuous-implies-integrable, cor-arc-length-accumulation-derivative-is-speed]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, §6.2"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be piecewise-$C^1$ and let $f$ be continuous on its trace. Then
$$\int_\gamma f(z)\,dz=\sum_j\int_{t_j}^{t_{j+1}}f(\gamma(t))\gamma'_j(t)\,dt,$$
and
$$\int_\gamma |f(z)|\,|dz|=\sum_j\int_{t_j}^{t_{j+1}}|f(\gamma(t))|\,|\gamma'_j(t)|\,dt.$$
The real and imaginary parts of the first display are the published vector line integrals of $(u,-v)$ and $(v,u)$, while the second is the published scalar line integral.

## Facts & Assumptions

**Given:** A piecewise-$C^1$ contour $\gamma=x+iy$, a continuous $f=u+iv$, and an admissible partition $(t_j)$.

[L1] Let $f:[a,b]\to\mathbb R$ be Riemann integrable. Suppose $\alpha$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $\alpha'$ extends continuously to $[a,b]$. Then $f$ is Riemann–Stieltjes integrable with respect to $\alpha$ and $\int_a^b f\,d\alpha=\int_a^b f(x)\alpha'(x)\,dx$ ([[thm-riemann-stieltjes-c1-integrator-reduction]]).

[L2] The published scalar and vector line integrals are the sums of $\int f(\gamma)|\gamma'|$ and $\int\langle F(\gamma),\gamma'\rangle$ over the smooth pieces ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L3] A piecewise-$C^1$ path has length equal to the sum of the speed integrals, with corners and singleton intervals allowed ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L4] Vector-valued derivatives and integrals are defined componentwise ([[def-vector-valued-derivative-and-integral]]).

[L5] Let $a<b$ be reals and let $f:[a,b]\to\mathbb R$ be continuous. Then $f$ is bounded and Riemann integrable on $[a,b]$ ([[thm-continuous-implies-integrable]]).

[L6] Let $a<b$ and let $\gamma:[a,b]\to\mathbb R^n$ be $C^1$, and set $s_\gamma(t):=L_{[a,t]}(\gamma|_{[a,t]})$. Then $s_\gamma$ is differentiable on $[a,b]$ in the relative sense and $s_\gamma'(t)=\lVert\gamma'(t)\rVert_2$, the values at $a$ and $b$ being the relative one-sided derivatives ([[cor-arc-length-accumulation-derivative-is-speed]]).

## Proof

**Proof technique:** direct.

1.1 On a nondegenerate smooth piece $[t_j,t_{j+1}]$ the integrands $u(\gamma(t))$ and $v(\gamma(t))$ are continuous, being composites of the continuous $f$ with the continuous $\gamma$, so [L5] makes each of the four component integrands Riemann integrable; the integrators $x_j,y_j$ are $C^1$ on the piece, hence continuous with continuously extending derivative. The hypotheses of [L1] therefore hold, and applying [L1] to the four component Stieltjes integrals and recombining gives $\int f(\gamma(t))(x'_j(t)+iy'_j(t))\,dt=\int f(\gamma(t))\gamma'_j(t)\,dt$. [L1, L4, L5, algebra]

1.2 On the same piece the arc-length integrator is $s_{\gamma_j}$, which by [L6] is differentiable with $s_{\gamma_j}'(t)=|\gamma'_j(t)|$, continuous because $\gamma_j$ is $C^1$; and $|f(\gamma(t))|$ is continuous, hence Riemann integrable by [L5]. So [L1] applies with $\alpha=s_{\gamma_j}$ and yields $\int|f(\gamma)|\,ds_{\gamma_j}=\int|f(\gamma(t))|\,|\gamma'_j(t)|\,dt$; summing over pieces and using [L3] to identify the total arc length gives the absolute-integral formula, which is the scalar line integral in [L2]. [L1, L2, L3, L5, L6]

2.1 The real and imaginary parts in step 1.1 are exactly the vector line integrals of $(u,-v)$ and $(v,u)$ from [L2]. This uses the published real construction in a numbered step, with its piecewise-$C^1$ hypothesis unchanged. [step 1.1, L2]

3.1 Summing the identities over the pieces proves both displays. No equality of one-sided derivatives at corners is needed, and zero-speed pieces contribute $0$. [step 1.1, step 2.1, step 1.2] ∎
