---
id: cor-bivariate-normal-full-conditional-kernels
kind: corollary
title: Proper full conditionals of a nondegenerate bivariate normal law
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-gibbs-density-formula-supplies-full-conditional-kernels
  - def-gibbs-full-conditional-kernel
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 12"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "Assume AC for the multivariate-normal density theorem and for the countable-choice change-of-variables theorem. The normalized conditional-kernel event identities themselves use the choice-free branch of the conditional-density results."
---

## Statement

Assume AC. Let $m_X,m_Y\in\mathbb R$, let $\sigma_X,\sigma_Y>0$, and let $-1<r<1$. Put
$$\Sigma=\begin{pmatrix}\sigma_X^2&r\sigma_X\sigma_Y\\r\sigma_X\sigma_Y&\sigma_Y^2\end{pmatrix},\qquad \pi=N_2\bigl((m_X,m_Y),\Sigma\bigr).$$
Then proper full conditional kernels of $X$ given $Y=y$ and of $Y$ given $X=x$, at every real conditioning value, are
$$X\mid Y=y\sim N\!\left(m_X+r\frac{\sigma_X}{\sigma_Y}(y-m_Y),\,\sigma_X^2(1-r^2)\right),\qquad Y\mid X=x\sim N\!\left(m_Y+r\frac{\sigma_Y}{\sigma_X}(x-m_X),\,\sigma_Y^2(1-r^2)\right).$$
Both conditional variances are strictly positive. The singular cases $|r|=1$ are not included.

## Facts & Assumptions

**Given:** AC, the real parameters and strict inequalities in the Statement, and the target law $\pi$.

[A1] AC implies countable choice, which is the choice assumption required by the nonnegative change-of-variables theorem. [[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

[F1] A multivariate normal law has the specified mean and covariance matrix, under the library's projection-law convention. [[def-multivariate-normal-law]].

[F2] For a positive-definite covariance matrix, $N_2$ has density $(2\pi)^{-1}\det(\Sigma)^{-1/2}\exp[-\tfrac12(z-m)^T\Sigma^{-1}(z-m)]$. [[thm-nondegenerate-multivariate-normal-law-has-density]].

[F3] Product Lebesgue measure on $\mathbb R\times\mathbb R$ agrees with Euclidean Lebesgue measure on Borel sets. [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]].

[F4] Under countable choice, a $C^1$ diffeomorphism obeys change of variables for every nonnegative Lebesgue-measurable integrand. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]].

[F5] The standard normal has density $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$, and $N(a,s^2)$ is the law of $t\mapsto a+st$ for $s>0$. [[def-standard-normal-and-normal-laws]].

[F6] Multiplication of a nonnegative integrand by a positive finite scalar multiplies its integral by that scalar. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[F7] A joint density with a supplied probability filler yields an everywhere probability full-conditional kernel, with the conditional event identities. [[cor-gibbs-density-formula-supplies-full-conditional-kernels]].

[F8] Proper full conditional means a pointwise probability kernel satisfying the block conditional event identity. [[def-gibbs-full-conditional-kernel]].

## Proof

**Given:** The hypotheses in the Statement and facts [A1], [F1]–[F8].

1.1 Write $u=(x-m_X)/\sigma_X$ and $v=(y-m_Y)/\sigma_Y$. The quadratic form of $\Sigma$ is $(a,b)\Sigma(a,b)^T=(\sigma_Xa+r\sigma_Yb)^2+(1-r^2)\sigma_Y^2b^2$, so it is positive for every nonzero $(a,b)$; also $\det\Sigma=\sigma_X^2\sigma_Y^2(1-r^2)>0$. Its inverse is $\Sigma^{-1}=\frac1{\sigma_X^2\sigma_Y^2(1-r^2)}\begin{pmatrix}\sigma_Y^2&-r\sigma_X\sigma_Y\\-r\sigma_X\sigma_Y&\sigma_X^2\end{pmatrix}$. Thus [F2] applies. Substitution into its density formula, using [F3] to identify the product reference measure, gives $p(x,y)=\frac{1}{2\pi\sigma_X\sigma_Y\sqrt{1-r^2}}\exp[-\frac{u^2-2ruv+v^2}{2(1-r^2)}]$. The covariance convention in [F1] fixes the parameters used here. [A1, F1, F2, F3, algebra]

2.1 Set $s_X=\sigma_X\sqrt{1-r^2}$, $s_Y=\sigma_Y\sqrt{1-r^2}$, $a(y)=m_X+r\sigma_Xv$, and $b(x)=m_Y+r\sigma_Yu$. For $s>0$ write $g_{c,s}(t)=s^{-1}\phi((t-c)/s)$. The identities $u^2-2ruv+v^2=(u-rv)^2+(1-r^2)v^2=(v-ru)^2+(1-r^2)u^2$ therefore give both factorizations $p(x,y)=g_{m_Y,\sigma_Y}(y)g_{a(y),s_X}(x)=g_{m_X,\sigma_X}(x)g_{b(x),s_Y}(y)$. Expanding each squared term verifies the exponents, and multiplying the factors verifies the prefactors. [F2, step 1.1, algebra]

3.1 For any $c\in\mathbb R$, $s>0$, and Borel set $A\subseteq\mathbb R$, the diffeomorphism $T(t)=c+st$ in [F4] gives $\int_A g_{c,s}(z)\,dz=\int_{T^{-1}(A)}\phi(t)\,dt=N(c,s^2)(A)$ by [F5]. Thus each $g_{c,s}$ is a probability density. Applying [F6] to the first factorization in step 2.1 yields $m_Y(y)=\int p(x,y)\,dx=g_{m_Y,\sigma_Y}(y)$; the second factorization gives $m_X(x)=\int p(x,y)\,dy=g_{m_X,\sigma_X}(x)$. These marginal densities are finite and strictly positive at every real argument. [A1, F4, F5, F6, step 2.1]

4.1 Apply [F7] to $p$ with Lebesgue reference measures and, for each updated coordinate, the supplied filler $N(0,1)$ from [F5]. Since both marginal densities in step 3.1 are finite and positive everywhere, the density formula is used on every conditioning fibre. For measurable $A\subseteq\mathbb R$, the first conditional kernel is $K_X(y,A)=\frac{\int_Ap(x,y)\,dx}{m_Y(y)}=\int_Ag_{a(y),s_X}(x)\,dx=N(a(y),s_X^2)(A)$, using the factorization in step 2.1 and density identification in step 3.1. Exchanging coordinates gives $K_Y(x,A)=N(b(x),s_Y^2)(A)$. By [F7] these are probability kernels satisfying the conditional event identities; [F8] identifies them as proper full conditionals at every conditioning value. The proof makes no assertion at the excluded singular endpoints. [F5, F7, F8, step 2.1, step 3.1, algebra] ∎
