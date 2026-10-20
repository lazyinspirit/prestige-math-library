---
id: thm-conditional-flow-matching-gradient-identity
kind: theorem
title: Conditional and marginal flow-matching objectives differ by a constant
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-probability-path-and-velocity-field
  - lem-conditional-mixture-is-a-probability-path
  - lem-conditional-to-marginal-continuity-equation
  - def-euclidean-inner-product
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - cor-mean-value-theorem
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - cor-cauchy-schwarz-for-random-variables
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
axiom_use: No choice principle is used; the endpoint law and reference measure are supplied.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §3.2 Theorem 2 and Appendix A"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Peter Holderrieth and Ezra Erives, Introduction to Flow Matching and Diffusion Models, §3.3 Theorem 12 and direct proof"
      url: "https://arxiv.org/html/2506.02070"
---

## Statement

Let $d,q\ge1$, let $\lambda$ be a sigma-finite measure on the Borel subsets of $\mathbb R^d$, let $\pi$ be a Borel probability measure on $\mathbb R^d$, and let $\rho$ be a conditional probability-density path relative to $(\lambda,\pi)$ and $u^c$ a jointly measurable vector field. Set
$$p_t(x):=\int_{\mathbb R^d}\rho_t(x\mid x_1)\,\pi(dx_1),\qquad J_t(x):=\int_{\mathbb R^d}\rho_t(x\mid x_1)u^c_t(x\mid x_1)\,\pi(dx_1).$$
Assume $0<p_t(x)<\infty$ and $J_t(x)$ is finite on $[0,1]\times\mathbb R^d$, and define $u^m_t(x):=J_t(x)/p_t(x)$. Suppose that for $\pi$-almost every $x_1$, $\rho$ and each component of $\rho u^c$ are continuously differentiable in $(t,x)$ and satisfy $\partial_t\rho_t+\operatorname{div}_x(\rho_tu^c_t)=0$ on $(0,1)\times\mathbb R^d$. This classical coordinate equation is a separate algebraic hypothesis, not a measure-transport convention for general $\lambda$. Suppose also that for every compact $K\subset(0,1)\times\mathbb R^d$ there is a nonnegative $G_K\in L^1(\pi)$ that bounds on $K$, for $\pi$-almost every $x_1$, the absolute values of $\rho_t(x\mid x_1)$, $\partial_t\rho_t(x\mid x_1)$, each component of $\rho_tu^c_t$, and each corresponding spatial flux derivative.

Let $\Theta\subseteq\mathbb R^q$ be open, and let $v:\,[0,1]\times\mathbb R^d\times\Theta\to\mathbb R^d$ be jointly measurable and continuously differentiable in $\theta$, with jointly measurable parameter derivative. Define
$$\mathcal L_C(\theta):=\int_0^1\!\int_{\mathbb R^d}\!\int_{\mathbb R^d} \rho_t(x\mid x_1)\|v(t,x;\theta)-u^c_t(x\mid x_1)\|_2^2\,\pi(dx_1)\lambda(dx)\,dt,$$
and
$$\mathcal L_M(\theta):=\int_0^1\!\int_{\mathbb R^d} p_t(x)\|v(t,x;\theta)-u^m_t(x)\|_2^2\,\lambda(dx)\,dt.$$
Assume $\mathcal L_C(\theta)$ and $\mathcal L_M(\theta)$ are finite for every $\theta\in\Theta$, and define
$$C:=\int_0^1\!\int_{\mathbb R^d}\!\int_{\mathbb R^d} \rho_t(x\mid x_1)\|u^c_t(x\mid x_1)-u^m_t(x)\|_2^2\,\pi(dx_1)\lambda(dx)\,dt,$$
and assume $C<\infty$. For every compact $H\subset\Theta$ and coordinate $j$, suppose there are nonnegative integrable majorants $G^C_{H,j}$ on $dt\,\lambda(dx)\,\pi(dx_1)$ and $G^M_{H,j}$ on $dt\,\lambda(dx)$ such that for every $\theta\in H$, outside fixed null sets,
$$2\rho_t(x\mid x_1)\left|\left\langle\partial_{\theta_j}v(t,x;\theta),v(t,x;\theta)-u^c_t(x\mid x_1)\right\rangle\right|\le G^C_{H,j}(t,x,x_1),$$
and
$$2p_t(x)\left|\left\langle\partial_{\theta_j}v(t,x;\theta),v(t,x;\theta)-u^m_t(x)\right\rangle\right|\le G^M_{H,j}(t,x).$$
Then both objectives are finite and continuously differentiable on $\Theta$, and $\mathcal L_C(\theta)=\mathcal L_M(\theta)+C$. In particular, $C$ is independent of $\theta$ and $\nabla_\theta\mathcal L_C(\theta)=\nabla_\theta\mathcal L_M(\theta)$. Under the stated classical coordinate PDE and local domination, $(p,u^m)$ also satisfies $\partial_tp+\operatorname{div}_x(pu^m)=0$ on $(0,1)\times\mathbb R^d$. Uniform boundedness of $u^c,u^m,v,D_\theta v$ on compact parameter neighborhoods is a sufficient special case of the integrability and derivative-majorant assumptions above.

## Statement references

[Lipman et al., §3.2 Theorem 2 and Appendix A proof](https://arxiv.org/html/2210.02747)

[Holderrieth and Erives, §3.3 Theorem 12 and complete direct proof](https://arxiv.org/html/2506.02070)

## Facts & Assumptions

**Given:** The sigma-finite Borel measure $\lambda$, endpoint probability measure $\pi$, conditional probability path $(\rho,u^c)$, finite positive marginal density and finite flux, local endpoint domination, open parameter domain $\Theta$, parameter-regular vector field $v$, finite loss and variance integrals, and the integrable derivative majorants in the Statement.

[F1] [[def-probability-path-and-velocity-field]] supplies the normalized measurable density path and its mixture $p_t=\int\rho_t(\cdot\mid x_1)\,d\pi$. The classical coordinate PDE and C1 density/flux regularity are separate Statement hypotheses.

[F2] [[lem-conditional-mixture-is-a-probability-path]]: integrating a conditional density normalized for $\pi$-almost every endpoint gives a measurable mixture density of $\lambda$-integral one at each time.

[F3] [[lem-conditional-to-marginal-continuity-equation]]: the stated local $L^1(\pi)$ bounds permit the conditional time and flux derivatives to pass through the endpoint integral and imply $\partial_tp+\operatorname{div}_x(pu^m)=0$.

[F4] [[def-euclidean-inner-product]]: $\|a\|_2^2=\langle a,a\rangle$ and the Euclidean inner product is bilinear.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: an $L^1$ function on a product of sigma-finite measure spaces may be integrated in either order, with equality of the iterated integrals.

[F6] [[cor-mean-value-theorem]]: a differentiable real function on an interval has each difference quotient equal to a derivative at an intermediate point.

[F7] [[thm-dominated-convergence]]: pointwise convergence under one integrable majorant permits passage of the limit through the integral.

[F8] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on $L^1$.

[F9] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle a,b\rangle|\le\|a\|_2\|b\|_2$ for Euclidean vectors.

[F10] [[cor-cauchy-schwarz-for-random-variables]]: square-integrable scalar functions $U,V$ on a probability space satisfy $\int|UV|\le(\int U^2)^{1/2}(\int V^2)^{1/2}$.

[F14] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for a nonnegative product-measurable function on sigma-finite spaces, its section integrals are measurable and either iterated integral equals the product integral.

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1] and the mixture normalization result [F2], each $p_t$ is a probability density with respect to $\lambda$. Positivity makes $u^m=J/p$ well-defined on the open time interval. The hypotheses on $G_K$ are exactly the local domination assumptions of [F3], so the explicitly assumed classical coordinate equation passes to the marginal and $\partial_tp+\operatorname{div}_x(pu^m)=0$. [given, F1, F2, F3]

1.2 Let $Q$ be the measure on time, state, and endpoint variables with density $\rho_t(x\mid x_1)$ relative to $dt\,\lambda(dx)\,\pi(dx_1)$. Product measurability from [F1], conditional normalization, and Tonelli [F14] show that $Q$ has total mass one and that its time-state marginal has density $p_t(x)$ relative to $dt\,\lambda(dx)$. In particular, Tonelli gives $\mathcal L_M(\theta)=\int\|v-u^m\|_2^2\,dQ$, so the finite marginal loss makes $v-u^m$ square-integrable under $Q$. The same identity gives $C=\int\|u^c-u^m\|_2^2\,dQ$, so $u^c-u^m$ is square-integrable under $Q$. By Euclidean Cauchy–Schwarz [F9] and random-variable Cauchy–Schwarz [F10], their inner-product term is integrable. At every $t,x$ where the integrals are defined, the definition of $J_t$ and $u^m_t$ gives $$\int_{\mathbb R^d}\rho_t(x\mid x_1)\bigl(u^c_t(x\mid x_1)-u^m_t(x)\bigr)\,\pi(dx_1)=J_t(x)-p_t(x)u^m_t(x)=0.$$ Expanding $v-u^c=(v-u^m)+(u^m-u^c)$ by bilinearity [F4], integrating first over $x_1$, and using Fubini [F5] for the integrable cross term gives $$\mathcal L_C(\theta)=\mathcal L_M(\theta)+\int_0^1\!\int\!\int\rho_t(x\mid x_1)\|u^c_t(x\mid x_1)-u^m_t(x)\|_2^2\,\pi(dx_1)\lambda(dx)dt.$$ The last integral is independent of $\theta$ and is the finite constant $C$ defined in the Statement. [given, F1, F2, F4, F5, F8, F9, F10, F14, algebra]

1.3 Fix $\theta_0\in\Theta$ and choose a compact parameter ball $H\subset\Theta$ whose interior contains $\theta_0$. For any $\theta\in\operatorname{int}H$, fix $w$ to be either $u^c_t(x\mid x_1)$ or $u^m_t(x)$ and put $a_\theta:=v(t,x;\theta)-w$. For sufficiently small nonzero $\varepsilon$ with $\theta+\varepsilon e_j\in H$, bilinearity and symmetry [F4] give $$\|a_{\theta+\varepsilon e_j}\|_2^2-\|a_\theta\|_2^2=\langle a_{\theta+\varepsilon e_j}-a_\theta,a_{\theta+\varepsilon e_j}+a_\theta\rangle.$$ Dividing by $\varepsilon$ and taking the limit, differentiability of $v$ yields $$\partial_{\theta_j}\|v(t,x;\theta)-w\|_2^2=2\langle\partial_{\theta_j}v(t,x;\theta),v(t,x;\theta)-w\rangle.$$ The functions $G^C_{H,j}$ and $G^M_{H,j}$ dominate the weighted derivatives on $H$. For a sequence of nonzero increments tending to zero in coordinate $j$, the mean value theorem [F6] bounds the weighted difference quotients by the same majorants; the pointwise quotients converge to the displayed derivatives. Dominated convergence [F7] therefore differentiates both objectives under their integrals. Applying the same domination to convergent parameter sequences shows the derivative integrals are continuous in $\theta$, so both objectives are $C^1$. [given, F2, F4, F5, F6, F7]

2.1 Step 1.2 proves $\mathcal L_C(\theta)=\mathcal L_M(\theta)+C$ for every $\theta$, with one finite constant independent of $\theta$. Both sides are differentiable by step 1.3, so differentiating this identity gives $\nabla_\theta\mathcal L_C(\theta)=\nabla_\theta\mathcal L_M(\theta)$. [step 1.2, step 1.3, algebra] ∎

## Source notes

Lipman et al. state Theorem 2 under positive marginal density and give the Appendix A argument using squared-norm expansion, the mixture density, the marginal conditional-average formula, and Fubini; they explicitly assume sufficient decay and bounded $u_t,v_t,\nabla_\theta v_t$. Holderrieth and Erives give the complete direct expansion in §3.3, Theorem 12, including the parameter-independent squared-error term. This item states exact integrability and dominated-derivative hypotheses, of which bounded fields on compact parameter neighborhoods are a sufficient case, and gives a local endpoint majorant for the marginal continuity equation. Thus no informal tail-decay phrase is needed: the proof uses absolute integrability and no integration by parts at spatial infinity. It makes no optimizer, training-convergence, or sample-quality claim.
