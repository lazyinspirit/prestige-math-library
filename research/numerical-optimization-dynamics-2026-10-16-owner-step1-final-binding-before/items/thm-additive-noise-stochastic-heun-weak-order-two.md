---
id: thm-additive-noise-stochastic-heun-weak-order-two
kind: theorem
title: "Weak order two for additive-noise stochastic Heun"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-additive-noise-stochastic-heun-scheme
  - lem-additive-heun-one-step-weak-expansion
  - def-continuous-brownian-ito-process
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. Tretyakov, Lecture Notes for a Mini-Course on Numerical Methods for SDEs, Theorem 7.1 and Section 7.3, PDF pp. 39-42"
      url: "https://www.math.chalmers.se/~cohend/MT2016/LNminicourseSDEv1.pdf"
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Theorem 14.5.2 and Section 15.1, printed pp. 474-480 and 485-487"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
---

## Statement

Assume AC and the Brownian filtration conventions in [[def-continuous-brownian-ito-process]]. Consider $dX_t=b(X_t)dt+\sigma dW_t$ on $[0,T]$, where $b\in C_b^6(\mathbb R;\mathbb R)$, $\sigma\in\mathbb R$ is constant, and $X_0=x_0\in\mathbb R$ is deterministic. For $t\le T$ and $x\in\mathbb R$, let $X^{t,x}$ denote the solution of the same SDE started from $x$ at time $t$. Let $\phi:\mathbb R\to\mathbb R$ have a bounded classical backward solution $u(t,x)=\mathbb E[\phi(X_T^{t,x})]$ with $u(T,x)=\phi(x)$, $u_t+Lu=0$, $L=b\partial_x+\frac12\sigma^2\partial_{xx}$, and all mixed derivatives $\partial_t^r\partial_x^j u$ for $0\le r\le3$ and $0\le j\le6$ continuous and bounded. On a uniform grid $h=T/N\le1$, initialize $Y_0=x_0$ and apply the additive-noise stochastic Heun update in [[def-additive-noise-stochastic-heun-scheme]]. There is a constant $C_T$, independent of $h$, such that
$$\left|\mathbb E\phi(Y_N)-\mathbb E\phi(X_T)\right|\le C_T h^2.$$
This is weak order two, meaning the expectation error is bounded by a constant times $h^2$ for the stated payoff class. The claim is specific to constant additive diffusion; no multiplicative-noise order-two result is asserted.

## Facts & Assumptions

**Given:** AC; the scalar additive-noise SDE, deterministic initial value $x_0$, drift and constant diffusion assumptions; the backward solution and derivative bounds; and the uniform grid of the Statement.

[L1] [[def-additive-noise-stochastic-heun-scheme]]: $Z=Y+b(Y)h+\sigma\Delta W$ and $Y^+=Y+\frac h2(b(Y)+b(Z))+\sigma\Delta W$.

[L2] [[lem-additive-heun-one-step-weak-expansion]]: for every starting time/state, the expectation of $u(t+h,Y^+)-u(t,Y)$ over one Brownian increment has absolute value at most $Ch^3$, uniformly in the starting state.

[F1] [[def-continuous-brownian-ito-process]]: each next Brownian increment is independent of the current filtration and has its stated normal law.

[A1] [[def-axiom-of-choice]]: AC is inherited through the Brownian interface [F1]; the telescoping argument uses no further choice.

## Proof

**Given:** The assumptions above.

1.1 For each $n$, the numerical value $Y_n$ is $\mathcal F_{t_n}$-measurable by induction from the update [L1]. The next increment $\Delta W_n$ is independent of $\mathcal F_{t_n}$ by [F1]. Therefore the joint law of $(Y_n,\Delta W_n)$ is the product of the law of $Y_n$ and $N(0,h)$; integrating the uniform one-step bound [L2] against the law of $Y_n$ gives
$$\left|\mathbb E u(t_{n+1},Y_{n+1})-\mathbb E u(t_n,Y_n)\right|\le Ch^3.$$
[F1, L1, L2, given]

2.1 Sum the inequalities in step 1.1 over $n=0,\ldots,N-1$. The intermediate expectations telescope, so
$$\left|\mathbb E u(T,Y_N)-\mathbb E u(0,Y_0)\right|\le NCh^3=C_T h^2,$$
because $Nh=T$. [step 1.1, algebra]

2.2 The terminal condition gives $u(T,Y_N)=\phi(Y_N)$. Since $Y_0=x_0$ and $u(0,x_0)$ is the expectation of $\phi$ for the exact SDE started at $(0,x_0)$, $\mathbb E u(0,Y_0)=u(0,x_0)=\mathbb E\phi(X_T)$. Substituting these identities into step 2.1 yields the claimed weak error. The argument uses only the admitted additive-noise backward solution and makes no inference for state-dependent diffusion. [A1, step 2.1, given] ∎
