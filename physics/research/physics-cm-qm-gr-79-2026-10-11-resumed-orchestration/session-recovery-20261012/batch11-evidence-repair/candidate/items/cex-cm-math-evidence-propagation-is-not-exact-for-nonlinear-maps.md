---
id: cex-cm-math-evidence-propagation-is-not-exact-for-nonlinear-maps
kind: counterexample
title: "The propagated covariance is not the exact covariance of a nonlinear observation map"
status: draft
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
dependency_level: 2
proof_strategy: direct computation
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clause 5.1.2, note to equation (10), on the first-order character of the propagated variance"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "L. Wasserman, All of Statistics: A Concise Course in Statistical Inference (Springer, 2004), Section 5.5 on the delta method as an approximation; full text copy at the cited URL"
      url: "https://egrcc.github.io/docs/math/all-of-statistics.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "if $U\subseteq\mathbb R$ is open and convex, $h:U\to\mathbb R$
is $C^2$, $X:\Omega\to U$ is square-integrable with $E[X]=\mu\in U$, and
$\Sigma$ is its covariance matrix, then
$\operatorname{Cov}(h(X))=Dh(\mu)\Sigma Dh(\mu)^{\mathsf T}$, that is,
$\operatorname{Var}(h(X))=h'(\mu)^2\operatorname{Var}(X)$"
([[lem-cm-linearized-propagation-of-covariance]]).

## Facts & Assumptions

**Given:** The finite weighted set $\Omega=\{\omega_0,\omega_1,\omega_2\}$ with $w(\omega_0)=1/2$, $w(\omega_1)=w(\omega_2)=1/4$; the random variable $Y$ with $Y(\omega_0)=0$, $Y(\omega_1)=1$, $Y(\omega_2)=3$; and the function $h(y)=y^3$ on the open convex set $U=(-1,4)$.

[L1] On a finite probability space, expectations are the finite weighted sums of [[def-expectation-on-a-finite-probability-space]], and the finite model determines the probability measure $\mathbb P(A)=\sum_{\omega\in A}w(\omega)$ whose integral expectations agree with those sums. ([[def-finite-probability-space-and-event]], [[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

[L2] For a square-integrable random variable $X$ with mean $\mu$, the covariance of the linearization $x\mapsto h(\mu)+h'(\mu)(x-\mu)$ is $h'(\mu)^2\operatorname{Var}(X)$ whenever $h$ is differentiable at $\mu$; the derivative of $y^3$ is $3y^2$; and $\operatorname{Var}(Z)=E[Z^2]-E[Z]^2$. ([[lem-cm-linearized-propagation-of-covariance]], [[def-cm-covariance-matrix-of-a-random-vector]], [[lem-derivative-of-a-power]], [[def-moments-variance-and-covariance]])

[L3] If $h:U\to\mathbb R$ is $C^2$ on open convex $U$, $\lVert H_h(x)\rVert\le B$ on $U$, $X$ takes values in $U$ with $E[X]=\mu\in U$ and finite second moment, then the linearization error satisfies $\lvert E[R]\rvert\le E\lvert R\rvert\le\frac{B}{2}E\lvert X-\mu\rvert^2$ and $E[R^2]\le\frac{B^2}{4}E\lvert X-\mu\rvert^4$ when the fourth moment is finite. ([[cor-cm-linearization-error-bounds]])

## Counterexample

1.1 By [L1] the finite weighted set is a probability space and the expectations below are its finite weighted sums: $E[Y]=\frac12\cdot0+\frac14\cdot1+\frac14\cdot3=1$, $E[Y^2]=\frac14+\frac94=\frac52$, and hence $\operatorname{Var}(Y)=\frac52-1=\frac32$ by [L2]. [given, L1, L2, algebra]

2.1 The function $h(y)=y^3$ is $C^2$ on $U=(-1,4)$, with $h'(y)=3y^2$, so $h'(1)=3$ and the propagated variance is $h'(1)^2\operatorname{Var}(Y)=9\cdot\frac32=\frac{27}{2}$. [step 1.1, given, L2, algebra]

2.2 The exact moments of $h(Y)=Y^3$ are $E[Y^3]=\frac14\cdot1+\frac14\cdot27=7$ and $E[Y^6]=\frac14\cdot1+\frac14\cdot729=\frac{730}{4}=\frac{365}{2}$, so $\operatorname{Var}(h(Y))=\frac{365}{2}-7^2=\frac{365}{2}-\frac{98}{2}=\frac{267}{2}$. [step 1.1, given, L1, L2, algebra]

3.1 Steps 2.1 and 2.2 give propagated value $\frac{27}{2}$ and exact variance $\frac{267}{2}$; these are unequal, so the refuted identity fails under the stated hypotheses. [step 2.1, step 2.2, algebra]

4.1 The comparison does not contradict [L3]: on $U=(-1,4)$ the second derivative of $h$ is $6y$, of absolute value at most $24$, so $B=24$ is admissible, and the linearization error $R=Y^3-1-3(Y-1)=Y^3-3Y+2$ satisfies $R=2,0,20$ at $Y=0,1,3$, giving $E[R]=6\le\frac{24}{2}\cdot\frac32=18$ and $E[R^2]=102\le\frac{24^2}{4}\cdot\frac92=648$, both bounds of [L3] holding strictly. [step 1.1, step 3.1, given, L3, algebra]

5.1 The hypotheses of the refuted statement hold, the propagated covariance $\frac{27}{2}$ differs from the exact variance $\frac{267}{2}$, and the remainder bounds of [L3] remain satisfied; hence the propagated covariance controls the actual covariance only through those bounds. [step 3.1, step 4.1] ∎

## Remarks

This witness is a genuine failure of *equality*, not of the domination bounds
of [[cor-cm-linearization-error-bounds]]: the bounds hold strictly here. A
consumer that reports the propagated covariance as an uncertainty of
$h(Y)$ must carry the remainder qualification with it.
