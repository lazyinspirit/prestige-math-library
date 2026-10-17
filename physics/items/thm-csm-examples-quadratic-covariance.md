---
id: thm-csm-examples-quadratic-covariance
kind: theorem
title: "Gaussian covariance for positive quadratic forms and a boundary counterexample"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-csm-examples-gamma-gaussian-tools
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - lem-riemann-lebesgue-comparison-for-distribution-test-integrands
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  lem-csm-examples-gamma-gaussian-tools: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables (Advanced Calculus), §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "David Tong, Statistical Physics, §2.2.1, equipartition of quadratic degrees of freedom"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]]. Let $n\ge1$, let $K\in\mathbb R^{n\times n}$ be symmetric positive definite, and let $\beta>0$. For $x\in\mathbb R^n$ put $H(x)=\tfrac12x^{\mathsf T}Kx$, and use the Euclidean Lebesgue measure $\lambda_n$ to define the density $Z^{-1}e^{-\beta H(x)}$. Then

$$Z=\int_{\mathbb R^n}e^{-\beta H(x)}dx=\left(\frac{2\pi}{\beta}\right)^{n/2}(\det K)^{-1/2},\quad \mathbb E[x]=0,\quad \mathbb E[xx^{\mathsf T}]=\beta^{-1}K^{-1},\quad \mathbb E[H]=\frac{n}{2\beta}.$$

Positive definiteness and $\beta>0$ are essential for this normalized full-space Gaussian. The unrestricted identity $\mathbb E[x\,H'(x)]=\beta^{-1}$ is false without a boundary hypothesis: on $[-L,L]$ with $L>0$ and $H\equiv0$, the normalized expectation on the left is $0$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge1$, symmetric positive-definite $K$, $\beta>0$, and $H(x)=\tfrac12x^{\mathsf T}Kx$ on $\mathbb R^n$.

[F1] [[lem-csm-examples-gamma-gaussian-tools]]: for $a>0$, $\int_{\mathbb R}e^{-ax^2}dx=\sqrt{\pi/a}$, odd Gaussian moments vanish, and the second moment is $\sqrt\pi/(2a^{3/2})$.

[F2] Under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism transforms nonnegative Lebesgue integrals by its absolute Jacobian ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F3] Under $\mathrm{AC}_\omega$, Euclidean Lebesgue measure is the finite product of one-dimensional Lebesgue measures on Borel rectangles, and each box has measure equal to the product of its side lengths ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]); each factor is sigma-finite. Tonelli factors nonnegative products, and Fubini factors absolutely integrable signed products ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] The Gaussian integrals and moments in [F1] are improper Riemann integrals. On bounded intervals they agree with Lebesgue integrals under $\mathrm{AC}_\omega$, and monotone convergence passes their nonnegative truncations to $\mathbb R$ ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[thm-monotone-convergence-for-the-integral]]).

## Proof
1.1 We construct $R$ with $K=R^{\mathsf T}R$ by induction on $n$. For $n=1$, take $R=\sqrt{K_{11}}>0$. For $n>1$, write $K=\begin{pmatrix}a&b^{\mathsf T}\\b&C\end{pmatrix}$; positive definiteness gives $a>0$ and $S:=C-bb^{\mathsf T}/a$ positive definite, since $y^{\mathsf T}Sy=(-b^{\mathsf T}y/a,y)^{\mathsf T}K(-b^{\mathsf T}y/a,y)>0$ for $y\ne0$. By induction $S=R_1^{\mathsf T}R_1$; then $R=\begin{pmatrix}\sqrt a&b^{\mathsf T}/\sqrt a\\0&R_1\end{pmatrix}$ satisfies $R^{\mathsf T}R=K$. Its diagonal entries are positive, so $\det R>0$; taking determinants gives $\det K=(\det R)^2$ and therefore $\det R=\sqrt{\det K}$. [given, construct, algebra]

2.1 Put $T(x)=Rx$. This is a $C^1$ diffeomorphism of $\mathbb R^n$ with $|\det DT|=\det R$. Since $H(x)=|Rx|^2/2$, [F2] gives $$Z=(\det R)^{-1}\int_{\mathbb R^n}e^{-\beta|y|^2/2}\,d\lambda_n(y).$$ By [F3], $\lambda_n$ is the finite product of $n$ sigma-finite one-dimensional Lebesgue measures; Tonelli and the factorization $e^{-\beta|y|^2/2}=\prod_i e^{-\beta y_i^2/2}$ give the integral as $I_0(\beta/2)^n$. By [F1] and [F4], $I_0(\beta/2)=\sqrt{2\pi/\beta}$. Hence $$Z=(2\pi/\beta)^{n/2}(\det K)^{-1/2},$$ which is finite and positive. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 Let $Y$ have the normalized density proportional to $e^{-\beta|y|^2/2}$ with respect to $\lambda_n$. For each $i$, [F3] and Tonelli factor the nonnegative second-moment integral into $I_1(\beta/2)I_0(\beta/2)^{n-1}$, while the normalizer is $I_0(\beta/2)^n$; [F1] gives $\mathbb E[Y_i^2]=I_1(\beta/2)/I_0(\beta/2)=1/\beta$. Also $\int |y_i|e^{-\beta|y|^2/2}d\lambda_n<\infty$, since $|y_i|\le1+y_i^2$ and the same Tonelli factorization makes both integrals finite. For $i\ne j$, $|y_iy_j|\le(y_i^2+y_j^2)/2$, so the cross moments are absolutely integrable. Fubini [F3] factors these signed moments; the one-dimensional first and odd moments vanish by [F1]. Thus $\mathbb E[Y]=0$ and $\mathbb E[YY^{\mathsf T}]=\beta^{-1}I$. [F1, F3, step 2.1, algebra]

4.1 By [F2], the normalized law of $X$ is the pullback of the law of $Y$ under $x=R^{-1}y$. The absolute integrability established in step 3.1 permits the same change of variables for signed first and second moments by applying [F2] to their positive and negative parts. Hence $\mathbb E[X]=0$ and $$\mathbb E[XX^{\mathsf T}]=R^{-1}(\beta^{-1}I)R^{-\mathsf T}=\beta^{-1}(R^{\mathsf T}R)^{-1}=\beta^{-1}K^{-1}.$$ Since $H(X)=|Y|^2/2$, summing the diagonal second moments gives $\mathbb E[H]=n/(2\beta)$. [F2, step 1.1, step 3.1, algebra]

5.1 For the stated boundary counterexample, the density on $[-L,L]$ is the constant $(2L)^{-1}$ because $H=0$ and the normalizing integral is $2L$ by [F3]. Since $H'(x)=0$ everywhere, $\mathbb E[xH'(x)]=0\ne\beta^{-1}$ for $\beta>0$. [given, F3, algebra] ∎

## Remarks

If $K$ has a nonzero kernel, the integrand is constant along an unbounded kernel direction and $Z=\infty$; if $\beta\le0$, the full-space integral also diverges. The theorem does not assert a named-degree-of-freedom equipartition rule on arbitrary domains or for discrete variables.
