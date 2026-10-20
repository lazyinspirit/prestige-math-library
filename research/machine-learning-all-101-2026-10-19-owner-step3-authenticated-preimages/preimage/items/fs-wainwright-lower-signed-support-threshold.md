---
id: fs-wainwright-lower-signed-support-threshold
kind: false-statement
title: The Cmax-only Wainwright lower signed-support threshold can predict failure when Lasso succeeds
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-linear-regression-objectives
  - lem-gaussian-sample-covariance-operator-concentration
  - lem-chi-square-degree-ratio
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-independent-random-elements-have-product-joint-law
  - cor-markov-inequality-for-random-variables
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is explicitly assumed for the finite-dimensional Gaussian constructions and inherited concentration suppliers. Conditional Gaussian calculations use fixed matrices and measurable projectors; no random basis selection, DC, or countable choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Recovery of Sparsity, 2006, Theorem 1(a), §3.1, §3.4, and Appendix D.6"
      url: "https://arxiv.org/pdf/math/0605740"
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Sparsity Recovery Using L1-Constrained Quadratic Programming (Lasso), 2009, §IV.A"
      url: "https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf"
---

## Statement

Assume the Axiom of Choice. Wainwright's planned lower-threshold claim is the following: along a sequence of real Gaussian linear models with $S=\{j:\beta_j^*\ne0\}$, $s=|S|$, $N=p-s$, $s,n-s,N\to\infty$, and independent observations
$$y_i=x_i^{\mathsf T}\beta^*+w_i,\qquad x_i\sim N_p(0,\Sigma),\quad w_i\sim N(0,\sigma^2),$$
where $X$ has rows $x_i^{\mathsf T}$, $y=(y_i)$, design and noise are independent, there is no separate intercept, and $\Sigma$ has unit diagonal. Suppose constants $C_{\min}>0$, $C_{\max}<\infty$, $D_{\max}<\infty$, and $0<\epsilon\le1$ satisfy
$$\lambda_{\min}(\Sigma_{SS})\ge C_{\min},\qquad \lambda_{\max}(\Sigma)\le C_{\max},\qquad \|(\Sigma_{SS})^{-1}\|_\infty\le D_{\max},\qquad \|\Sigma_{S^cS}(\Sigma_{SS})^{-1}\|_\infty\le1-\epsilon,$$
with $\|M\|_\infty=\max_i\sum_j|M_{ij}|$. Define
$$\theta_\ell=\frac{\bigl(\sqrt{C_{\max}}-\sqrt{C_{\max}-1/C_{\max}}\bigr)^2}{C_{\max}(2-\epsilon)^2}.$$
For every fixed $\nu>0$ and every positive non-increasing sequence $\lambda_n$, if $n<2(\theta_\ell-\nu)s\log N+s+1$, then the probability that there exists an optimizer with $\operatorname{sgn}(\widehat\beta)=\operatorname{sgn}(\beta^*)$ for $\|y-X\beta\|_2^2/(2n)+\lambda_n\|\beta\|_1$ tends to zero.

## Statement references

[Wainwright 2006, Theorem 1(a)](https://arxiv.org/pdf/math/0605740)

[Wainwright 2009, §IV.A, revised lower-threshold interface](https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf)

## Facts & Assumptions

**Given:** The Gaussian model, covariance hypotheses, exact loss normalization, success event, and claimed lower implication in the Statement.

[F1] For an iid standard-Gaussian matrix of dimension $d=o(n)$, its Gram matrix divided by $n$ converges in operator norm to identity ([[lem-gaussian-sample-covariance-operator-concentration]]).

[F2] A sum of $q$ independent squared standard normals divided by $n$ converges in probability to one if $q/n\to1$ and $n\to\infty$ ([[lem-chi-square-degree-ratio]]).

[F3] Under AC, a centered Gaussian vector with covariance $C\succeq0$ can be realized as $C^{1/2}G$ for a vector of independent standard normals ([[def-multivariate-normal-law]]).

[F4] A nondegenerate multivariate normal has its usual Gaussian density; in particular the density with identity covariance factors into independent standard-normal densities ([[thm-nondegenerate-multivariate-normal-law-has-density]], [[thm-independent-random-elements-have-product-joint-law]]).

[F5] A standard normal has density $(2\pi)^{-1/2}e^{-x^2/2}$ ([[def-standard-normal-and-normal-laws]]). Completing the square gives $\mathbb E e^{tU}=e^{v t^2/2}$ for $U\sim N(0,v)$; applying Markov to $e^{tU}$ with $t=1/v$, and likewise to $e^{-tU}$, yields $\mathbb P(|U|\ge1)\le2e^{-1/(2v)}$ when $v>0$ ([[cor-markov-inequality-for-random-variables]]). For $v=0$ the probability is zero.

[F6] The Lasso objective is $F(\beta)=\|y-X\beta\|_2^2/(2n)+\lambda\|\beta\|_1$ ([[def-linear-regression-objectives]]).

[A1] AC is assumed for the finite Gaussian constructions and suppliers ([[def-axiom-of-choice]]).

## Refutation

1.1 Fix $\delta=\epsilon=10^{-6}$, $c=(1-\epsilon)/2$, $a=1/1000$, and $\nu=1/100000$. For integers $N\ge2$ tending to infinity set $$s=N^3,\qquad p=s+N,\qquad n=s+\lceil a s\log N\rceil,\qquad S=\{1,\ldots,s\},\qquad \lambda_n=1.$$ In each observation let the first $2N$ active coordinates consist of independent pairs $(U_j,V_j)$, $1\le j\le N$, each with covariance $$B=\begin{pmatrix}1&-(1-\delta)\\-(1-\delta)&1\end{pmatrix},$$ and let the other $s-2N$ active coordinates be independent standard normals, independent of these pairs. Take independent standard normals $Z_j$, independent also of all active variables, and define the inactive coordinates by $$T_j=c(U_j-V_j)+\sqrt r Z_j,\qquad r=1-(1-\epsilon)^2(1-\delta/2).$$ Take independent observations and independent standard-normal noise $w_i$; set $\beta_i^*=n$ on $S$ and zero off $S$. These finite Gaussian constructions define the model in the Statement, with $\sigma^2=1$ and no intercept. [A1, F3, F4, given, construct]

2.1 The eigenvalues of $B$ are $\delta$ and $2-\delta$, and each row of $B^{-1}$ has absolute sum $1/\delta$. Thus $C_{\min}=\delta$ and $D_{\max}=1/\delta$ work. Each inactive coordinate regresses on its pair with coefficients $(c,-c)$, so $\|\Sigma_{S^cS}\Sigma_{SS}^{-1}\|_\infty=2c=1-\epsilon$. Its variance is one by the definition of $r$, and $0<r<2\epsilon+\delta/2<3\cdot10^{-6}$. The full covariance, after reordering, is a direct sum of positive-definite three-dimensional covariance blocks and singleton identity blocks: each triple is an invertible linear image of $(U_j,V_j,Z_j)$ because $r>0$. Every triple has trace three, so every eigenvalue is at most three. Consequently $C_{\max}=3$ bounds the maximum eigenvalue of the full covariance, and all its diagonal entries are one. [step 1.1, algebra]

3.1 For these constants, $$\sqrt3-\sqrt{8/3}=\frac{1/3}{\sqrt3+\sqrt{8/3}}>\frac1{12},\qquad 3(2-\epsilon)^2<12,$$ so the precise claimed constant satisfies $\theta_\ell>1/1728$ and $2(\theta_\ell-\nu)>2(1/1728-1/100000)>a$. Since $\lceil a s\log N\rceil\le a s\log N+1$, the claimed failure inequality $n<2(\theta_\ell-\nu)s\log N+s+1$ holds. Also $s,n-s,N\to\infty$ and $s/n\to0$. The constant penalty is positive and non-increasing. The lower claim puts no restriction on $\rho_n=n$. [given, step 1.1, step 2.1, algebra]

4.1 Write $X_S=Z\Sigma_{SS}^{1/2}$, with $Z$ an $n\times s$ iid standard-Gaussian matrix, and put $G=X_S^{\mathsf T}X_S$ and $A=G/n$. By [F1] and $s/n\to0$, with probability tending to one the minimum eigenvalue of $A$ is at least $\delta/2$ and $\|A^{-1}\|_{\mathrm{op}}\le2/\delta$. On this event define $$\widehat\beta_S=n\mathbf1+\eta-A^{-1}\mathbf1,\qquad \eta=A^{-1}X_S^{\mathsf T}w/n,\qquad \widehat\beta_{S^c}=0.$$ The shrinkage term satisfies $\|A^{-1}\mathbf1\|_\infty\le2\sqrt{s}/\delta=o(n)$. Conditional on $X_S$, $\eta$ is centered Gaussian with covariance $A^{-1}/n$, so [F5] and a finite union bound give $$\mathbb P(\|\eta\|_\infty\ge1\mid X_S)\le2s e^{-n\delta/4}\longrightarrow0$$ uniformly on the spectral event. Thus every active candidate coordinate is positive with probability tending to one. [F1, F3, F5, step 2.1, step 3.1, construct, algebra]

4.2 Put $b=\mathbf1_s$ and $T=b^{\mathsf T}\Sigma_{SS}^{-1}b=s-2N+2N/\delta$, so $T/s\to1$. To compute $Q=b^{\mathsf T}G^{-1}b$, put $v=\Sigma_{SS}^{-1/2}b$ and choose a fixed orthogonal matrix with first column $v/\|v\|_2$. Orthogonal invariance and [F4] make the rotated columns of $Z$, written $[h,H]$, mutually independent standard-Gaussian columns. They have full column rank almost surely: condition successively on earlier columns; for each fixed proper column subspace, projection onto any fixed nonzero normal vector has a continuous normal law, so a new standard-Gaussian column belongs to that subspace with probability zero. For full-rank $H$ put $$P_H=H(H^{\mathsf T}H)^{-1}H^{\mathsf T},\qquad D=h^{\mathsf T}(I-P_H)h.$$ Block elimination in the Gram matrix of $[h,H]$ gives exactly $Q=T/D$. For each fixed full-rank $H$, the projector $I-P_H$ has rank $n-s+1$, so orthogonal invariance gives the conditional law $D\sim\chi^2_{n-s+1}$. This conditional law is the same for every such $H$; the projector is a measurable function of $H$, and no random basis is selected. Since $(n-s+1)/n\to1$, [F2] gives $D/n\to1$ in probability, and therefore $Q/(s/n)\to1$ in probability. [A1, F2, F3, F4, step 1.1, step 2.1, step 3.1, algebra, choose]

5.1 Let $P=X_SG^{-1}X_S^{\mathsf T}$. The candidate residual is $$u=y-X_S\widehat\beta_S=(I-P)w+nX_SG^{-1}b,\qquad X_S^{\mathsf T}u/n=b.$$ Its two displayed summands are orthogonal. For inactive column $j$, the construction gives $X_j=X_S a_j+\sqrt r z_j$, where $a_j$ has entries $(c,-c)$ on its pair and zero elsewhere, and the $z_j$ are mutually independent standard-Gaussian vectors independent of $X_S,w$. Because $a_j^{\mathsf T}b=0$, the dual variables $$V_j=X_j^{\mathsf T}u/n=\sqrt r z_j^{\mathsf T}u/n$$ are, conditional on $X_S,w$, independent centered normals of common variance $$rM,\qquad M=\|u\|_2^2/n^2=Q+\|(I-P)w\|_2^2/n^2.$$ By [F2], $\|w\|_2^2/n\to1$ in probability. Since the second term is at most $\|w\|_2^2/n^2$, step 4.2 and $s\to\infty$ show $\mathbb P(M\le4s/n)\to1$. This event depends only on $X_S,w$ and is independent of all inactive residual vectors. [F2, F3, F4, step 1.1, step 4.1, step 4.2, algebra]

6.1 On the event $M\le4s/n$, since $n\ge a s\log N$ and $r<3\cdot10^{-6}$, $$rM\le\frac{4r}{a\log N}<\frac{3}{250\log N}.$$ Applying [F5] and a finite union bound conditionally on $X_S,w$ yields the uniform bound $$\mathbb P\!\left(\max_{1\le j\le N}|V_j|\ge1\,\middle|\,X_S,w\right)\le2N\exp\!\left(-\frac1{2rM}\right)\le2N^{1-125/3}\longrightarrow0.$$ Removing the conditioning and adding the probability of $M>4s/n$ proves $\max_j|V_j|<1$ with probability tending to one. Intersecting with the event in step 4.1 preserves probability tending to one and gives both active sign correctness and inactive dual feasibility. [F5, step 1.1, step 2.1, step 4.1, step 5.1, algebra]

7.1 On this intersection put $z=X^{\mathsf T}u/n$. It equals one on $S$ and satisfies $|z_j|<1$ off $S$. Since the candidate is positive on $S$ and zero off $S$, the scalar inequality $|\widehat\beta_i+h_i|-|\widehat\beta_i|\ge z_i h_i$ holds for every coordinate and every real $h_i$. For every $h\in\mathbb R^p$, expand [F6], with $\lambda_n=1$, to obtain $$F(\widehat\beta+h)-F(\widehat\beta)=\frac{\|Xh\|_2^2}{2n}-h^{\mathsf T}X^{\mathsf T}u/n+\|\widehat\beta+h\|_1-\|\widehat\beta\|_1\ge0.$$ Thus this candidate is an optimizer with $\operatorname{sgn}(\widehat\beta)=\operatorname{sgn}(\beta^*)$. Its existence has probability tending to one, whereas step 3.1 meets the exact hypotheses that predict probability tending to zero. This refutes the stated lower implication. [F6, step 1.1, step 3.1, step 4.1, step 5.1, step 6.1, algebra] ∎

## Source notes

This refutes the conclusion itself, independently of the erroneous inverse-block identity in the 2006 Appendix D.6. The construction uses $s/(p-s)\to\infty$, which the stated source and planned hypotheses permit; it does not refute a theorem with an additional dimensional restriction. The 2009 journal article's equation (27) defines $\rho_\ell(C)=\frac12\min_{i\ne j}(C_{ii}+C_{jj}-2C_{ij})$, a minimum pairwise increment-variance parameter, not a least eigenvalue. Its revised threshold interface is distinct and is not substituted for the claim refuted here.
