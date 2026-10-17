---
id: lem-logarithmic-norm-bounds-the-matrix-exponential
kind: lemma
title: "The logarithmic norm bounds forward and reverse matrix exponentials"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - cor-finite-dimensional-normed-spaces-are-banach
  - cor-exponential-is-a-bijection-onto-positive-reals
  - cor-mean-value-theorem
  - def-logarithmic-norm-for-complex-matrices
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - lem-exponential-series-of-a-bounded-operator
  - lem-logarithmic-norm-is-real-and-variational
  - thm-derivative-of-exponential
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, What Is the Logarithmic Norm?"
      url: "https://nhigham.com/2022/01/18/what-is-the-logarithmic-norm/"
      locator: "Theorem 3 and Theorem 6, formula (4), with the displayed growth-bound proof."
---

## Statement

For $A\in M_n(\mathbb C)$, $n\ge1$, and $\tau\ge0$,

$$\|e^{\tau A}\|_2\le e^{\tau\mu_2(A)}.$$

Consequently, for $t\le0$, $\|e^{tA}\|_2\le e^{|t|\mu_2(-A)}$. No normality, spectral stability, or sign assumption on $\mu_2(A)$ is required.

## Facts & Assumptions

**Given:** $A\in M_n(\mathbb C)$, $n\ge1$, and $\tau\ge0$.

[F1] [[lem-logarithmic-norm-is-real-and-variational]]: $\operatorname{Re}\langle Ax,x\rangle\le\mu_2(A)\|x\|_2^2$ for all $x\in\mathbb C^n$, and $\mu_2(A)\in\mathbb R$.

[F2] [[lem-exponential-series-of-a-bounded-operator]]: on a Banach space, $y(t)=e^{tA}x$ is differentiable with $y'(t)=Ay(t)$.

[F3] [[cor-finite-dimensional-normed-spaces-are-banach]]: the finite-dimensional normed space $\mathbb C^n$ is complete.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|T\|_2=\max_{\|x\|_2=1}\|Tx\|_2$ for a finite-dimensional endomorphism.

[F5] [[thm-derivative-of-exponential]]: the scalar real exponential satisfies $(e^x)'=e^x$.

[F6] [[cor-mean-value-theorem]]: a real function continuous on a closed interval and differentiable on its interior satisfies the mean-value identity at some interior point.

[F7] [[cor-exponential-is-a-bijection-onto-positive-reals]]: $e^r>0$ for every $r\in\mathbb R$.

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\mathbb C^n$ and set $y(t):=e^{tA}x$ and $q(t):=\|y(t)\|_2^2$. By [F2] and [F3], $y'(t)=Ay(t)$. If $\Delta_h:=y(t+h)-y(t)$, differentiability gives $\Delta_h/h\to Ay(t)$; expanding the inner product gives $q(t+h)-q(t)=2\operatorname{Re}\langle\Delta_h,y(t)\rangle+\|\Delta_h\|_2^2$, so $q'(t)=2\operatorname{Re}\langle Ay(t),y(t)\rangle$. [given, F2, F3, algebra]

2.1 By [F1], $q'(t)\le2\mu_2(A)q(t)$. Put $a(t):=e^{-2\mu_2(A)t}$ and $g(t):=a(t)q(t)$. By [F5], $a'(t)=-2\mu_2(A)a(t)$: when $\mu_2(A)\ne0$, write its difference quotient as $(-2\mu_2(A))e^{-2\mu_2(A)t}\bigl(e^{-2\mu_2(A)h}-1\bigr)/(-2\mu_2(A)h)$ and use $(e^r)'|_{r=0}=1$; when $\mu_2(A)=0$, $a$ is constant. The identity $\frac{a(t+h)q(t+h)-a(t)q(t)}h=a(t+h)\frac{q(t+h)-q(t)}h+q(t)\frac{a(t+h)-a(t)}h$ and the resulting limits give $g'(t)=a(t)(q'(t)-2\mu_2(A)q(t))\le0$. [step 1.1, F1, F5, algebra]

3.1 If $t=0$, the desired vector inequality is equality. If $t>0$, [F6] applied to $g$ on $[0,t]$ and step 2.1 give $g(t)\le g(0)=\|x\|_2^2$. By [F7], $e^{2\mu_2(A)t}>0$; multiplying and taking nonnegative square roots yields $\|e^{tA}x\|_2\le e^{t\mu_2(A)}\|x\|_2$. [step 2.1, F6, F7, algebra]

4.1 Taking the maximum over unit vectors $x$ and using [F4] proves $\|e^{\tau A}\|_2\le e^{\tau\mu_2(A)}$. For $t\le0$, apply the proved inequality to $-A$ at time $|t|$; termwise equality of the exponential series gives $e^{|t|(-A)}=e^{tA}$, proving the reverse-time claim. [step 3.1, F2, F4, algebra] ∎
