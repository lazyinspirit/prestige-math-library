---
id: lem-waring-singular-integral-converges-and-evaluates
kind: lemma
title: "Evaluation and absolute convergence of the Waring singular integral"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-real-power
  - def-waring-singular-series-and-singular-integral
  - def-countable-choice
  - thm-real-beta-gamma-identity
  - thm-real-gamma-functional-equation
  - thm-l-one-fourier-inversion
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound
  - thm-fourier-transform-converts-convolution-to-products
  - thm-integration-by-parts
  - thm-ftc-second-part
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-nonnegative-improper-multiple-integral-by-exhaustion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.1, singular-integral evaluation, printed pp. 37–39"
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§1, equation (1.11), singular-integral constant"
---

## Statement

Assume countable choice. Let $k\ge2$ and $s>2k$ be integers, and put $v_k(\beta)=\int_0^1 e(\beta x^k)\,dx$ with $e(t)=\exp(2\pi i t)$. Then $\int_{\mathbb R}v_k(\beta)^s e(-\beta)\,d\beta$ converges absolutely and equals
$$\frac{\Gamma(1+1/k)^s}{\Gamma(s/k)}.$$
Here $\Gamma(u)=\int_0^\infty t^{u-1}\exp(-t)dt$ for $u>0$ is the Euler gamma function.

## Statement references

[Assing, §6.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

[Wooley, §1, equation (1.11)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

## Facts & Assumptions

**Given:** Integers $k\ge2$, $s>2k$, and $e(t)=\exp(2\pi i t)$.

[A1] Countable choice is assumed for the $L^1$ Fourier inversion and convolution theorems used below ([[def-countable-choice]]).

[F1] For $p,q>0$, $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ ([[thm-real-beta-gamma-identity]]).

[F2] For $u>0$, $\Gamma(u+1)=u\Gamma(u)$ ([[thm-real-gamma-functional-equation]]).

[F3] Under countable choice, if $f\in L^1(\mathbb R)$ and its Fourier transform is in $L^1$, then its inverse transform equals $f$ at every Lebesgue point of $f$ ([[thm-l-one-fourier-inversion]]).

[F4] Dominated convergence applies to pointwise convergent integrands with a single integrable majorant ([[thm-dominated-convergence]]).

[F5] Nonnegative iterated integrals may be exchanged by Tonelli, and convolution of $L^1$ functions exists almost everywhere and remains in $L^1$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound]]).

[F6] With Fourier convention $\widehat f(\xi)=\int_{\mathbb R}f(y)e(-\xi y)\,dy$, $L^1$ convolution transforms to a product ([[thm-fourier-transform-converts-convolution-to-products]]).

[F7] Linear changes of variables preserve integrals on compact Jordan domains, and nonnegative improper multiple integrals are limits over compact exhaustions ([[thm-change-of-variables-for-compact-jordan-sets]], [[thm-nonnegative-improper-multiple-integral-by-exhaustion]]).

[F8] Integration by parts applies to continuously differentiable functions on compact intervals ([[thm-integration-by-parts]], [[thm-ftc-second-part]]).

## Proof

**Proof technique:** Fourier inversion at a continuity point.

1.1 Put $\alpha=1/k$. For $|\beta|\ge1$, the substitution $u=|\beta|x^k$ gives
$$v_k(\beta)=\frac{|\beta|^{-\alpha}}{k}\int_0^{|\beta|}e(\pm u)u^{\alpha-1}\,du,$$
where the sign is that of $\beta$. The integral on $[0,1]$ is bounded because $\alpha>0$; on $[1,T]$, [F8] bounds it uniformly in $T$ because $u^{\alpha-1}\to0$ and $\int_1^\infty u^{\alpha-2}du<\infty$. Thus $|v_k(\beta)|\le C_k\min(1,|\beta|^{-1/k})$, and since $s/k>2$, the defining integral is absolutely convergent. [F8, given, algebra]

1.2 Define $w(y)=k^{-1}y^{\alpha-1}$ for $0<y<1$ and $w(y)=0$ otherwise. Substitution $y=x^k$ shows $w\in L^1(\mathbb R)$ and $\widehat w(\xi)=v_k(-\xi)$. Let $f_s$ be the representative of the $s$-fold convolution given by
$$f_s(t)=\int_{\mathbb R^{s-1}}w(y_1)\cdots w(y_{s-1})w\!\left(t-\sum_{i=1}^{s-1}y_i\right)dy_1\cdots dy_{s-1}$$
where finite, and set it to $0$ at points where this integral is infinite. Tonelli and [F5] show this is an $L^1$ representative of the convolution class. [F5, given]

2.1 For $t$ near $1$, the convolution integral and the linear substitution $y_i=tu_i$ express
$$f_s(t)=k^{-s}t^{s\alpha-1}\int_{\substack{u_i>0,\\u_1+\cdots+u_s=1}}\left(\prod_{i=1}^s u_i^{\alpha-1}\right)\left(\prod_{i=1}^s\mathbf1_{u_i<1/t}\right)du_1\cdots du_{s-1},$$
where $u_s=1-\sum_{i<s}u_i$. The simplex weight is integrable: repeated use of [F1] gives
$$\int_{u_i>0,\,\sum u_i=1}\prod_{i=1}^s u_i^{\alpha-1}du_1\cdots du_{s-1}=\frac{\Gamma(\alpha)^s}{\Gamma(s\alpha)}.$$
For completeness, separating $u_1=u$ and rescaling the remaining $s-1$ coordinates by $1-u$ gives the recursion $I_s=B(\alpha,(s-1)\alpha)I_{s-1}$ with $I_1=1$, which yields the displayed value. [F1, F5, F7]

2.2 As $t\to1$, each indicator in step 2.1 tends to $1$ at every interior point of the simplex, and the integrable simplex weight from step 2.1 dominates the integrand. By [F4], $f_s$ is continuous at $1$, and its value there is $f_s(1)=k^{-s}\Gamma(1/k)^s/\Gamma(s/k)$. [F4, step 2.1]

3.1 The transform of $f_s$ is $\widehat w(\xi)^s=v_k(-\xi)^s$ by repeated application of [F6]. Step 1.1 shows this transform is integrable. Since $f_s$ is continuous at $1$, that point is a Lebesgue point; applying [F3] and changing variables $\beta=-\xi$ gives
$$\int_{\mathbb R}v_k(\beta)^s e(-\beta)\,d\beta=f_s(1)=k^{-s}\frac{\Gamma(1/k)^s}{\Gamma(s/k)}.$$
By [F2], $k^{-1}\Gamma(1/k)=\Gamma(1+1/k)$, so this equals the claimed gamma quotient. [A1, F2, F3, F6, step 1.1, step 2.2] ∎
