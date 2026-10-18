---
id: lem-tgr-three-dimensional-radial-integration
kind: lemma
title: "Three-dimensional radial integration formula"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-tdmath-measure-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
dependency_roles:
  def-countable-choice: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, §§1.2 and 1.3"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

Assume Countable Choice. If $0\le a<b<\infty$ and $g:(0,\infty)\to[0,\infty]$ is Borel measurable, then
$$
\int_{\{x\in\mathbb R^3:a<\|x\|<b\}}g(\|x\|)\,d\lambda_3(x)=4\pi\int_a^b g(r)r^2\,dr.
$$
In particular, the open ball $\{x:\|x\|<R\}$ has Lebesgue volume $4\pi R^3/3$ for every $R>0$.

## Facts & Assumptions

**Given:** Countable Choice, $0\le a<b<\infty$, and nonnegative Borel $g$.

[A1] Countable Choice, [[def-countable-choice]], is the exact set-theoretic assumption of the change-of-variables supplier; no full Axiom of Choice is used.

[F1] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] and [[def-tdmath-measure-integral]]: the integrals are Lebesgue integrals.

[F2] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: a $C^1$ diffeomorphism between open subsets of $\mathbb R^3$ transforms a nonnegative Lebesgue integral by the absolute Jacobian determinant, under Countable Choice.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative integrals on sigma-finite product spaces may be evaluated as iterated integrals.

## Proof

**Given:** The data in the Statement.

1.1 On $U=(a,b)\times(0,\pi)\times(0,2\pi)$ define $\Phi(r,\theta,\varphi)=(r\sin\theta\cos\varphi,r\sin\theta\sin\varphi,r\cos\theta)$. It is a $C^1$ diffeomorphism onto the open spherical shell with the closed meridional half-plane $\{x_2=0,\ x_1\ge0\}$ removed, and $|\det D\Phi|=r^2\sin\theta$. That omitted half-plane is null: on each bounded box Tonelli reduces its measure to the zero one-dimensional measure of $\{0\}$, and countably many boxes cover it. Thus [F2] gives the integral as $\int_a^b\int_0^\pi\int_0^{2\pi}g(r)r^2\sin\theta\,d\varphi\,d\theta\,dr$. [A1, F1, F2, F3, algebra]

1.2 The angular integrals are $\int_0^{2\pi}d\varphi=2\pi$ and $\int_0^\pi\sin\theta\,d\theta=2$, so the preceding expression is $4\pi\int_a^b g(r)r^2\,dr$. Taking $g=1$ and $a=0$ gives the open-ball volume by $\int_0^Rr^2dr=R^3/3$; the origin is a null set. [step 1.1, algebra] ∎
