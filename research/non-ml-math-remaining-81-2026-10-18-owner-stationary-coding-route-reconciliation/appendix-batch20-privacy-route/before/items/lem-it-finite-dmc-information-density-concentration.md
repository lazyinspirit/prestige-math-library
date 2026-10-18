---
id: lem-it-finite-dmc-information-density-concentration
kind: lemma
title: "Information-density concentration for a fixed finite DMC input law"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic, def-it-finite-mutual-information, def-it-information-units-and-logarithm-base, def-natural-logarithm]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all random variables have finite support."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 12"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_12.pdf
      locator: "PDF pp. 1–2: information-density threshold and memoryless single-letterization."
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF pp. 23-8–23-10: finite DMC information quantities and the auxiliary-channel convention."
---

## Statement

Let $W(y\mid u)$ be a finite DMC and let $P_U$ be any fixed input probability vector. Let $P_Y(y)=\sum_uP_U(u)W(y\mid u)$. On the joint support $P_U(u)W(y\mid u)>0$, define

$$J(u,y):=\ln\frac{W(y\mid u)}{P_Y(y)},\qquad I:=I(U;Y),\qquad \sigma^2:=\sum_{u,y:P_U(u)W(y\mid u)>0}P_U(u)W(y\mid u)(J(u,y)-I)^2.$$

For IID pairs $(U_i,Y_i)\sim P_UW$, write $S_n=\sum_{i=1}^nJ(U_i,Y_i)$ and $B:=\max(0,\max_{P_U(u)W(y\mid u)>0}J(u,y))$. Then $J$ is bounded and $\mathbb E[J]=I$. For every $\delta>0$,

$$\Pr\left[\left|\frac{S_n}{n}-I\right|\ge\delta\right]\le\frac{\sigma^2}{n\delta^2}.$$

For every $\gamma>0$ there is a $\rho\in(0,1)$, depending only on $(P_U,W,\gamma)$, such that

$$\Pr[S_n>n(I+\gamma)]\le\rho^n.$$

## Facts & Assumptions

**Given:** For each blocklength $n$, the joint law is $P_{U^n,Y^n}(u^n,y^n)=\prod_{i=1}^nP_U(u_i)W(y_i\mid u_i)$ for a finite DMC $W$ and input probability vector $P_U$.

[F1] [[def-discrete-memoryless-channel]]: for the input word $u^n$, the output law is $W^n(y^n\mid u^n)=\prod_{i=1}^nW(y_i\mid u_i)$.

[F2] [[def-it-finite-mutual-information]]: $I(U;Y)=\sum_{u,y:P_U(u)W(y\mid u)>0}P_U(u)W(y\mid u)\ln\frac{W(y\mid u)}{P_Y(y)}$.

[F3] [[def-it-information-units-and-logarithm-base]]: unmarked logarithms are natural, so the information quantities are in nats.

[F4] [[def-natural-logarithm]]: $e^t$ is the exponential whose inverse on $(0,\infty)$ is the natural logarithm.

## Proof

1.1 If $P_U(u)W(y\mid u)>0$, then $P_Y(y)\ge P_U(u)W(y\mid u)>0$. Hence every displayed logarithm is finite; because the joint support is finite, $J$ is bounded and $B<\infty$. The unmarked logarithm uses nats by [F3]. [given, F1, F3, construct]

2.1 The expectation $\mathbb E[J(U,Y)]$ is the finite sum in [F2], so it equals $I$. Independence and the common product law in [F1] give $\mathbb E[S_n]=nI$ and $\mathbb E[(S_n-nI)^2]=n\sigma^2$: the cross terms vanish because each centered summand has mean zero, and each diagonal term has second moment $\sigma^2$. For the nonnegative variable $(S_n-nI)^2$, the pointwise inequality $\mathbf 1\{(S_n-nI)^2\ge n^2\delta^2\}\le (S_n-nI)^2/(n^2\delta^2)$ gives the Chebyshev bound after taking expectations. [F1, F2, given, step 1.1, algebra]

3.1 Fix $\gamma>0$ and define $\phi(t):=\mathbb E[e^{t(J-I-\gamma)}]$. Finite support makes $\phi$ differentiable at zero, with $\phi(0)=1$ and $\phi'(0)=\mathbb E[J-I-\gamma]=-\gamma<0$. By the definition of derivative, some sufficiently small $t>0$ has $0<\rho:=\phi(t)<1$. [F4, step 2.1, choose, algebra]

4.1 The event $S_n>n(I+\gamma)$ implies $e^{t\sum_i(J(U_i,Y_i)-I-\gamma)}>1$. Its indicator is therefore at most that nonnegative exponential. Independence of the IID pairs gives $\Pr[S_n>n(I+\gamma)]\le\mathbb E\left[e^{t\sum_i(J(U_i,Y_i)-I-\gamma)}\right]=\phi(t)^n=\rho^n.$ This proves the exponential tail. [step 3.1, algebra] ∎
