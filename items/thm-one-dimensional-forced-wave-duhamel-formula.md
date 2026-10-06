---
id: thm-one-dimensional-forced-wave-duhamel-formula
kind: theorem
title: "The forced one-dimensional wave formula over the characteristic triangle"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
proof_strategy: direct
deps: [thm-dalembert-formula, lem-derivative-of-an-integral-with-moving-endpoints, lem-general-solution-of-the-one-dimensional-wave-equation, thm-algebra-of-derivatives, cor-primitives-of-a-continuous-function, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.5.1, printed pp. 60–61, d'Alembert formula (2.5.4) with the characteristic triangle $\\Delta(x,t)$"
    - title: "Per Kristen Jakobsen, An Introduction to Partial Differential Equations (arXiv:1901.03022)"
      url: "https://arxiv.org/pdf/1901.03022"
      locator: "§10.3.1, printed p. 142, (336)–(343): Duhamel construction and the explicit triangle integral"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #10: Introduction to the Wave Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ccd4ae63858e855c18c96ce96a797b9b_MIT18_152F11_lec_10.pdf"
      locator: "§4, printed pp. 4–5: the same one-dimensional Cauchy data with speed $c$"
---


## Statement

Let $c>0$, $u_0\in C^2(\mathbb R)$, $u_1\in C^1(\mathbb R)$ and let $f$ be of class $C^1$ on $\mathbb R\times[0,\infty)$, so that $f$, $\partial_xf$ and $\partial_tf$ are continuous. Then
$$u(x,t)=\frac12\bigl(u_0(x-ct)+u_0(x+ct)\bigr)+\frac{1}{2c}\int_{x-ct}^{x+ct}u_1(y)\,dy+\frac{1}{2c}\int_0^t\int_{x-c(t-s)}^{x+c(t-s)}f(y,s)\,dy\,ds$$
is the unique classical solution of $u_{tt}=c^2u_{xx}+f$ with $u(\cdot,0)=u_0$, $u_t(\cdot,0)=u_1$. The source integral is over the backward characteristic triangle with vertex $(x,t)$: $0\le s\le t$, $|y-x|\le c(t-s)$, and its coefficient is $1/(2c)$.

## Facts & Assumptions

**Given:** a speed $c>0$, data $u_0\in C^2(\mathbb R)$, $u_1\in C^1(\mathbb R)$, a source $f\in C^1(\mathbb R\times[0,\infty))$, and the displayed function $u$.

[F1] Let $\alpha,\beta\in C^1(I)$ with $\alpha<\beta$ and let $F$ be continuous on $I\times J$ with continuous $\partial_tF$, where $J$ contains the closure of the union of the intervals $[\alpha(t),\beta(t)]$. Then $G(t)=\int_{\alpha(t)}^{\beta(t)}F(t,y)\,dy$ is $C^1$ with $G'(t)=F(t,\beta(t))\beta'(t)-F(t,\alpha(t))\alpha'(t)+\int_{\alpha(t)}^{\beta(t)}\partial_tF(t,y)\,dy$ ([[lem-derivative-of-an-integral-with-moving-endpoints]]).

[F2] For continuous $\varphi$, the function $x\mapsto\int_{a(x)}^{b(x)}\varphi$ has derivative $\varphi(b(x))b'(x)-\varphi(a(x))a'(x)$; more generally the primitive of a continuous function is recovered by evaluation at the endpoints ([[cor-primitives-of-a-continuous-function]]).

[F3] With data $u_0,u_1$ the homogeneous d'Alembert expression is the unique $C^2$ solution of $u_{tt}=c^2u_{xx}$ with those data ([[thm-dalembert-formula]]).

[F4] Sums, products, constant multiples of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]).

## Proof

1.1 The source term. Extend $f(y,s)$ to $s<0$ by $f(y,0)$; its value and first spatial derivative remain continuous. Define $\Phi(x,t,s):=\int_{x-c(t-s)}^{x+c(t-s)}f(y,s)\,dy$ as an oriented integral, also when $t<s$. Primitives [F2] give $\Phi_t=c[f(x+c(t-s),s)+f(x-c(t-s),s)]$ and $\Phi_x=f(x+c(t-s),s)-f(x-c(t-s),s)$ on an open rectangle in $(t,s)$, including $s=t$. Since $\Phi(x,t,t)=0$, [F1] gives $D_t=\frac12\int_0^t[f(x+c(t-s),s)+f(x-c(t-s),s)]ds$ for $D=(2c)^{-1}\int_0^t\Phi\,ds$. The compact-rectangle theorem [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] permits spatial differentiation under this fixed $s$-integral. Thus $D_x=(2c)^{-1}\int_0^t[f(x+c(t-s),s)-f(x-c(t-s),s)]ds$ and $D_{xx}=(2c)^{-1}\int_0^t[f_x(x+c(t-s),s)-f_x(x-c(t-s),s)]ds$. [F1, F2, F4, algebra]

2.1 Equation and regularity. Differentiating $D_t$ by [F1] gives $D_{tt}=f(x,t)+\frac c2\int_0^t[f_x(x+c(t-s),s)-f_x(x-c(t-s),s)]ds=f+c^2D_{xx}$. The chain rule [[thm-chain-rule-for-total-derivatives]] gives the displayed integrand derivatives; differentiation of $D_t$ in $x$ gives $D_{tx}=\frac12\int_0^t[f_x(x+c(t-s),s)+f_x(x-c(t-s),s)]ds$, also equal to $D_{xt}$ by differentiating $D_x$. All these derivatives are continuous because their integrands are continuous on local compact rectangles. At zero, $D,D_x,D_t,D_{xx},D_{xt}$ tend to zero and $D_{tt}\to f(x,0)$ locally uniformly, proving the asserted $C^2$ regularity up to the initial time. [F1, F4, step 1.1, algebra]

3.1 Data and uniqueness. At $t=0$ the source integral vanishes, so $u(\cdot,0)=u_0$ and $u_t(\cdot,0)=u_1$ are exactly the statements of [F3] for the homogeneous part. If $v$ is any classical solution of the forced problem with the same data, then $w:=u-v$ is $C^2$ with $w_{tt}=c^2w_{xx}$ and zero data, so $w=0$ by the uniqueness clause of [F3]; hence $u$ is the unique classical solution. [F3, step 1.1, step 2.1, algebra]

4.1 The double integral runs over $0\le s\le t$ and $|y-x|\le c(t-s)$, the backward characteristic triangle with vertex $(x,t)$, and its coefficient is $1/(2c)$; this completes the identification of the displayed solution. [given] ∎
