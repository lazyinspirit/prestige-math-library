---
id: ex-cm-math-evidence-exact-versus-linear-variance
kind: example
title: "Exact variance against propagated variance for a nonlinear observation map"
status: published
origin: pipeline
domain: mathematics
deps: [cor-cm-linearization-error-bounds, def-cm-covariance-matrix-of-a-random-vector, def-expectation-on-a-finite-probability-space, def-finite-probability-space-and-event, def-moments-variance-and-covariance, lem-cm-linearized-propagation-of-covariance, lem-derivative-of-a-power, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
dependency_roles:
  cor-cm-linearization-error-bounds: mathematical-premise
  def-cm-covariance-matrix-of-a-random-vector: mathematical-premise
  def-expectation-on-a-finite-probability-space: mathematical-premise
  def-finite-probability-space-and-event: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  lem-cm-linearized-propagation-of-covariance: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces: mathematical-premise
dependency_level: 3
proof_strategy: direct computation
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clause 5.1.2, note to equation (10), on higher-order terms when the nonlinearity of the model function is significant"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
verification:
  precheck: pass
---

## Example

Let $\Omega=\{\omega_0,\omega_1,\omega_2\}$ carry the weights
$w(\omega_0)=1/2$, $w(\omega_1)=w(\omega_2)=1/4$, let
$$Y:\Omega\longrightarrow\mathbb R,\qquad Y(\omega_0)=0,\quad Y(\omega_1)=1,\quad Y(\omega_2)=3,$$
and let $h(y):=y^2$ on the open convex set $U=(-1,4)$, which contains the
three values of $Y$. Then $h$ is $C^2$ with constant Hessian $H_h(x)=(2)$ and
operator norm $B=2$, the mean is $\mu=E[Y]=1\in U$, and
$$E[Y^2]=\frac52,\qquad \operatorname{Var}(Y)=\frac32,\qquad E[Y^4]=\frac{41}{2},\qquad \operatorname{Var}(h(Y)) =\frac{41}{2}-\Bigl(\frac52\Bigr)^2=\frac{57}{4}.$$
The linearization $T(y)=h(1)+h'(1)(y-1)=1+2(y-1)$ has variance
$$h'(1)^2\operatorname{Var}(Y)=4\cdot\frac32=6 =\frac{24}{4}\neq\frac{57}{4}=\operatorname{Var}(h(Y)),$$
so the propagated variance is not the exact variance of $h(Y)$. The
linearization error $R=h(Y)-T(Y)=(Y-1)^2$ satisfies
$$E[R]=\frac32=\frac{B}{2}E\bigl[(Y-1)^2\bigr],\qquad E\bigl[R^2\bigr]=\frac92=\frac{B^2}{4}E\bigl[(Y-1)^4\bigr],$$
so both displayed bounds of
[[cor-cm-linearization-error-bounds]] are attained in this example. The
example contains no measured quantity and asserts no physical model.

## Facts & Assumptions

**Given:** The finite weighted set $(\Omega,w)$ and the random variable $Y$ displayed in the Example; the function $h(y)=y^2$ on $U=(-1,4)$.

[L1] The finite probability space $(\Omega,w)$ determines a probability measure $\mathbb P$ on $(\Omega,\mathcal P(\Omega))$ with $\mathbb P(A)=\sum_{\omega\in A}w(\omega)$, and expectations of finite-valued random variables computed by the finite weighted sum agree with their expectations as random variables on that probability space. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]], [[def-expectation-on-a-finite-probability-space]], [[def-finite-probability-space-and-event]])

[L2] If $h:U\to\mathbb R$ is $C^2$ on the open convex set $U$, $\lVert H_h(x)\rVert\le B$ on $U$, $X$ takes values in $U$ with $E[X]=\mu\in U$ and $E\lvert X-\mu\rvert^2<+\infty$, then the linearization error $R=h(X)-h(\mu)-h'(\mu)(X-\mu)$ satisfies $\lvert E[R]\rvert\le E\lvert R\rvert\le\frac{B}{2}E\lvert X-\mu\rvert^2$, and $E[R^2]\le\frac{B^2}{4}E\lvert X-\mu\rvert^4$ when the fourth moment is finite. ([[cor-cm-linearization-error-bounds]])

[L3] For a square-integrable random variable $X$ with mean $\mu$, the covariance matrix of the one-dimensional random vector $(X)$ is the $1\times1$ matrix $(\operatorname{Var}(X))$, and the linearization $x\mapsto h(\mu)+h'(\mu)(x-\mu)$ has covariance matrix $h'(\mu)^2\operatorname{Var}(X)$. ([[def-cm-covariance-matrix-of-a-random-vector]], [[lem-cm-linearized-propagation-of-covariance]])

[L4] The derivative of $h(y)=y^2$ is $h'(y)=2y$, and variance is $\operatorname{Var}(X)=E[X^2]-E[X]^2$ for square-integrable $X$. ([[lem-derivative-of-a-power]], [[def-moments-variance-and-covariance]])

## Verification

**Proof technique:** direct computation on a finite probability space.

1.1 By [L1] the weights make $(\Omega,w)$ a probability space and the expectations below are the finite weighted sums of [[def-expectation-on-a-finite-probability-space]]: $$E[Y]=\frac12\cdot0+\frac14\cdot1+\frac14\cdot3=1,\qquad E[Y^2]=\frac14\cdot1+\frac14\cdot9=\frac52,$$ $$E[Y^4]=\frac14\cdot1+\frac14\cdot81=\frac{82}{4}=\frac{41}{2},\qquad E\bigl[(Y-1)^2\bigr]=\frac12\cdot1+\frac14\cdot0+\frac14\cdot4=\frac32,$$ and $E[(Y-1)^4]=\frac12\cdot1+\frac14\cdot0+\frac14\cdot16=\frac12+4=\frac92$. [given, L1, algebra]

1.2 The function $h(y)=y^2$ is $C^2$ on the open convex set $U=(-1,4)$, with $h'(y)=2y$, so $h(1)=1$ and $h'(1)=2$; its Hessian is the constant matrix $(2)$, of operator norm $B=2$ by [L3] and [L4], and the values $0,1,3$ of $Y$ and the mean $\mu=1$ all lie in $U$. [given, L3, L4, algebra]

2.1 By [L4], $\operatorname{Var}(Y)=E[Y^2]-E[Y]^2=\frac52-1=\frac32$ and $\operatorname{Var}(h(Y))=E[Y^4]-E[Y^2]^2=\frac{41}{2}-\frac{25}{4}=\frac{82-25}{4}=\frac{57}{4}$. [step 1.1, L4, algebra]

2.2 The linearization error is $R=h(Y)-1-2(Y-1)=Y^2-2Y+1=(Y-1)^2$. [step 1.2, algebra]

3.1 By [L3] the propagated covariance is $h'(1)^2\operatorname{Var}(Y)=4\cdot\frac32=6=\frac{24}{4}$, while step 2.1 gives $\operatorname{Var}(h(Y))=\frac{57}{4}$; these differ, so the propagated covariance is not the exact variance of $h(Y)$ in this model. [step 1.2, step 2.1, L3, algebra]

4.1 With $B=2$ and the moments of step 1.1, the bounds of [L2] read $\frac{B}{2}E[(Y-1)^2]=1\cdot\frac32=\frac32$ and $\frac{B^2}{4}E[(Y-1)^4]=1\cdot\frac92=\frac92$; since $R^2=(Y-1)^4$ by step 2.2, one has $E[R]=\frac32$ and $E[R^2]=\frac92$, so both bounds are attained. [step 1.1, step 2.2, L2, algebra] ∎
