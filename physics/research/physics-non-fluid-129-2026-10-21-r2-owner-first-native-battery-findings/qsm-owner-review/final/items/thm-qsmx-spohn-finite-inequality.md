---
id: thm-qsmx-spohn-finite-inequality
kind: theorem
title: Stationary finite quantum semigroups decrease relative entropy
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsm-dt-channel-definition
  - thm-qsmx-cmi-and-channel-dpi
  - lem-qsm-matrix-state-calculus
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
  thm-qsmx-cmi-and-channel-dpi: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Chapter 5, Theorem 5.35 and proof"
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication full text, Theorem 11.8.1 statement"
      url: https://arxiv.org/pdf/1106.1445v8
verification:
  precheck: pass
---

## Statement

Let $d\geq1$ and let $\mathcal L:M_d(\mathbb C)\to M_d(\mathbb C)$ be complex-linear. Define $T_t:=e^{t\mathcal L}:=\sum_{n=0}^{\infty}t^n\mathcal L^n/n!$ for $t\geq0$, and assume that each $T_t$ is completely positive and trace-preserving; the exponential gives $T_{t+s}=T_t\circ T_s$. Let $\sigma=\sigma^*>0$ satisfy $\operatorname{Tr}\sigma=1$ and $T_t(\sigma)=\sigma$ for every $t\geq0$. For a density matrix $\rho$, define the finite quantum relative entropy

$$D(\rho\|\sigma):=\operatorname{Tr}(\rho\log\rho)-\operatorname{Tr}(\rho\log\sigma),$$

using the natural logarithm, the finite spectral logarithm on the support of $\rho$, and $0\log0:=0$. Since $\sigma$ is positive definite, $D(\rho\|\sigma)$ is finite for every density $\rho$. Then $t\mapsto D(T_t\rho\|\sigma)$ is nonincreasing on $[0,\infty)$. If $t$ is interpreted as seconds, $\mathcal L$ has units seconds$^{-1}$; the statement is mathematical and asserts no physical applicability. At every $t\geq0$ for which $\rho_t:=T_t\rho$ is positive definite, its derivative exists (as a right derivative at $t=0$) and

$$\frac{d}{dt}D(\rho_t\|\sigma)=\operatorname{Tr}\!\left(\mathcal L(\rho_t)(\log\rho_t-\log\sigma)\right)\leq0.$$

At singular $\rho_t$ this logarithmic derivative is not asserted; the extended-real upper right Dini derivative is at most zero. No detailed-balance assumption, strict decay, unique stationary state, or convergence to $\sigma$ is asserted.

## Statement references

[[thm-qsmx-cmi-and-channel-dpi]]

[[def-qsm-dt-channel-definition]]

[[lem-qsm-matrix-state-calculus]]

## Facts & Assumptions

**Given:** The finite-dimensional exponential semigroup, channel property, faithful stationary density $\sigma$, and density $\rho$ in the Statement. The relative entropy convention and natural logarithms are as displayed there.

[A1] [[thm-qsmx-cmi-and-channel-dpi]] (current batch-101 draft; authoring readiness is ready, independent proof review remains pending): for a finite channel $\Phi$ and positive semidefinite $X,Y$, $D(\Phi(X)\| \Phi(Y))\leq D(X\|Y)$, with the support-sensitive finite-dimensional relative entropy convention.

[F1] [[def-qsm-dt-channel-definition]]: complete positivity means positivity is preserved by every finite ancilla amplification, and trace preservation means traces agree on every matrix input; a finite channel is a complex-linear map with both properties.

[F2] [[lem-qsm-matrix-state-calculus]]: every finite Hermitian matrix has an orthonormal eigenbasis, and spectral functions and finite trace are basis-independent.

## Proof

1.1 The linear map $\mathcal L$ acts on a finite-dimensional normed space, so its exponential series converges absolutely in operator norm, uniformly on bounded time intervals. For $u,v\geq0$, the Cauchy product and binomial theorem give $T_uT_v=\sum_{k=0}^{\infty}\left(\sum_{m+n=k}\frac{u^m v^n}{m!n!}\right)\mathcal L^k=\sum_{k=0}^{\infty}\frac{(u+v)^k}{k!}\mathcal L^k=T_{u+v}$. Now let $0\leq s\leq t$ and put $u=t-s$, $v=s$. The map $T_{t-s}$ is a finite channel by the hypothesis and [F1], and it fixes $\sigma$ by stationarity. Apply [A1] to $X=T_s\rho$ and $Y=\sigma$; these are positive semidefinite, and therefore $D(T_t\rho\|\sigma)\leq D(T_s\rho\|\sigma)$. This proves global monotonicity, including singular initial densities, because $\sigma>0$ makes every displayed relative entropy finite. [given, A1, F1, algebra]

1.2 For $x>0$ and $R>0$, direct integration gives $\int_0^R((1+s)^{-1}-(x+s)^{-1})\,ds=\log x+\log(1+R)-\log(x+R)$, which tends to $\log x$ as $R\to\infty$. Applying this scalar identity to each eigenvalue using [F2] yields $\log A=\int_0^\infty((1+s)^{-1}I-(A+sI)^{-1})\,ds$ for positive definite $A$. Write $X=\dot A(u)$. Differentiating $(A+sI)(A+sI)^{-1}=I$ gives $\frac{d}{du}(A+sI)^{-1}=-(A+sI)^{-1}X(A+sI)^{-1}$, so $\frac{d}{du}\log A=\int_0^\infty(A+sI)^{-1}X(A+sI)^{-1}\,ds$. Differentiation under this integral is justified locally when the least eigenvalue of $A$ is bounded below by $m>0$, because the integrand norm is at most $\|X\|(m+s)^{-2}$ and this bound is integrable. The product rule gives $\frac{d}{du}\operatorname{Tr}(A\log A)=\operatorname{Tr}(X\log A)+\int_0^\infty\operatorname{Tr}(A(A+sI)^{-1}X(A+sI)^{-1})\,ds$. Diagonalize $A$ with eigenvalues $\lambda_j>0$; the integral is $\sum_j X_{jj}\int_0^\infty\lambda_j(\lambda_j+s)^{-2}\,ds=\sum_jX_{jj}=\operatorname{Tr}X$. Hence $\frac{d}{du}\operatorname{Tr}(A\log A)=\operatorname{Tr}(X(\log A+I))$. [given, F2, algebra]

2.1 For $f(t):=D(T_t\rho\|\sigma)$, every quotient $(f(t+h)-f(t))/h$ with $h>0$ is nonpositive by step 1.1. Thus $D^+f(t):=\limsup_{h\downarrow0}(f(t+h)-f(t))/h\leq0$ as an extended-real upper right Dini derivative, without inserting $\log\rho_t$ when $\rho_t$ is singular. [step 1.1, algebra]

3.1 If $\rho_t>0$, continuity gives a positive-definite neighborhood. The derivative series $\sum_{n\geq1}nt^{n-1}\mathcal L^n/n!$ converges uniformly in operator norm on compact time intervals, so termwise differentiation gives $\dot\rho_t=\mathcal L(\rho_t)$. Trace preservation implies $\operatorname{Tr}\dot\rho_t=0$, by differentiating $\operatorname{Tr}(T_t\rho)=\operatorname{Tr}\rho$. Apply step 1.2 to $A=\rho_t$ and differentiate the linear term $-\operatorname{Tr}(\rho_t\log\sigma)$ to obtain the displayed derivative formula. Its sign is nonpositive because the same function is nonincreasing by step 1.1. [given, F1, F2, step 1.1, step 1.2, algebra] ∎
