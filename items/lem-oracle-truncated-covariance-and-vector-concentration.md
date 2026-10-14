---
id: lem-oracle-truncated-covariance-and-vector-concentration
kind: lemma
title: Oracle-truncated covariance and vector concentration under finite matrix variance
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - lem-bounded-independent-matrix-bernstein-via-trace-exponential
  - def-covariance-matrix-of-a-random-vector
  - def-matrix-variance-of-a-random-vector
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-independent-random-elements
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: All matrix constructions are finite dimensional and no choice axiom is required.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Stanislav Minsker and Xiaohan Wei, Estimation of the Covariance Structure of Heavy-Tailed Distributions, §§5.3–5.5"
      url: "https://arxiv.org/pdf/1708.00502"
    - title: "Joel A. Tropp, An Introduction to Matrix Concentration Inequalities, §§6.6–6.7"
      url: "https://arxiv.org/pdf/1501.01571"
proof_strategy: direct
---

## Statement

Let $Z_1,\ldots,Z_m$ be independent copies of a centered random vector $Z\in\mathbb R^p$, $p,m\ge1$, with nonzero covariance $\Sigma=\mathbb E ZZ^T$ and finite fourth moment. Write
$$T=\operatorname{tr}\Sigma,\qquad\sigma_0^2=\left\|\mathbb E[\|Z\|_2^2ZZ^T]\right\|_{\rm op}.$$
For $\beta>1$, $\sigma\ge\sigma_0$, and $t=\beta/m$, set
$$\theta=\frac{\sqrt t}{\sigma},\qquad R=\frac1\theta,\qquad w(z)=\min\left\{1,\frac{R}{\|z\|_2^2}\right\},\qquad w(0)=1,$$
$$S=\frac1m\sum_{i=1}^m w(Z_i)Z_iZ_i^T,\qquad V=\frac1m\sum_{i=1}^m w(Z_i)Z_i.$$
Then there are events $E_S,E_V$ such that
$$\mathbb P(E_S^c)\le pe^{-\beta},\qquad\mathbb P(E_V^c)\le\frac{p+1}{2}e^{-\beta},$$
and on the respective events
$$\|S-\Sigma\|_{\rm op}\le\left(2+\frac{\log2}{\beta}\right)\sigma\sqrt t<\frac{27}{10}\sigma\sqrt t,$$
$$\|V\|_2\le\sigma_0\sqrt\theta+2\sqrt{Tt}+\frac{8t}{3\sqrt\theta}.$$
The same $S$ also has the sharper-radius, larger-failure alternative
$$\mathbb P\left\{\|S-\Sigma\|_{\rm op}>\left(\sqrt2+\frac23+\frac14\right)\sigma\sqrt t\right\}\le2pe^{-\beta}.$$
No independence between these events and a statistic formed from the same sample is asserted or needed.

## Facts & Assumptions

**Given:** The independent vectors and finite-moment assumptions in the statement. Covariance and matrix variance have the meanings in [[def-covariance-matrix-of-a-random-vector]] and [[def-matrix-variance-of-a-random-vector]]. The fourth moment makes every matrix and scalar expectation used below finite.

[F1] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] supplies spectral calculus for real symmetric matrices. For $A=zz^T$, $A^2=\|z\|_2^2zz^T$, and the sole possibly nonzero eigenvalue of $A$ is $\|z\|_2^2$. Semidefinite order is tested on quadratic forms and is preserved by expectation.

[F2] [[lem-bounded-independent-matrix-bernstein-via-trace-exponential]]: for independent centered Hermitian $q\times q$ matrices $B_i$ with $\|B_i\|\le R_0$ and $\|\mathbb EB_i^2\|\le v$, one has $\mathbb E\operatorname{tr}\exp(s\sum_iB_i)\le q\exp(ms^2v/[2(1-sR_0/3)])$ for $0<s<3/R_0$. It also proves the associated fixed-parameter one-sided Chernoff bound and the explicit one-sided radius $\sqrt{2mvb}+2R_0b/3$ with failure $qe^{-b}$; the two-sided failure is $2qe^{-b}$.

[F3] Cauchy–Schwarz in [[thm-cauchy-schwarz-in-an-inner-product-space]], applied to square-integrable scalar random variables with inner product $\mathbb E(UW)$, gives $|\mathbb E(UW)|^2\le\mathbb E U^2\mathbb E W^2$. This expectation inner product may be read on the quotient by almost-sure equality. Independence is as in [[def-independent-random-elements]] and is preserved under deterministic measurable transformations, by taking preimages of the defining independent events.

## Proof

**Proof technique:** direct.

1.1 Put $A=ZZ^T$ and $A_\theta=w(Z)ZZ^T$. The weight is a Borel function, including its declared value at zero, so all transformations used here preserve the independence of the samples by [F3]. The rank-one spectral calculus gives $0\preceq A_\theta\preceq RI$ and $A_\theta^2\preceq A^2$. For a scalar $x\ge0$, $(x-R)_+\le x^2/(4R)$: the inequality is immediate for $x\le R$, and for $x\ge R$ it is equivalent to $(x-2R)^2\ge0$. Applying it to the eigenvalues of $A$ proves $0\preceq A-A_\theta\preceq\theta A^2/4$. Therefore $0\preceq\Sigma-\mathbb E A_\theta\preceq\theta\mathbb EA^2/4$ and $\|\Sigma-\mathbb E A_\theta\|_{\rm op}\le\theta\sigma_0^2/4$. Nonzero covariance also implies $\sigma_0>0$: a positive variance in some unit direction forces $\mathbb E[\|Z\|^2\langle Z,v\rangle^2]\ge\mathbb E\langle Z,v\rangle^4>0$. Thus the displayed thresholds are well-defined. [given, F1, F3, algebra]

1.2 Put $Y=w(Z)Z$. Its norm is at most $1/\sqrt\theta$: for $\|Z\|\le\sqrt R$ use $\|Y\|\le\sqrt R$, and otherwise use $\|Y\|=R/\|Z\|\le\sqrt R$. Since $\mathbb EZ=0$, $\mathbb EY=-\mathbb E[(1-w(Z))Z]$. For a unit vector $v$, apply [F3] to $U=\|Z\|\langle Z,v\rangle$ and $W=(1-w(Z))/\|Z\|$, assigning $W=0$ at zero. Then $\mathbb EU^2\le\sigma_0^2$ by matrix variance, and $W^2\le\theta$ pointwise: it vanishes on $\|Z\|^2\le R$, and elsewhere is at most $1/\|Z\|^2\le1/R$. Thus $|\langle\mathbb EY,v\rangle|\le\sigma_0\sqrt\theta$. Taking the Euclidean dual supremum proves $\|\mathbb EY\|\le\sigma_0\sqrt\theta$. [given, F1, F3, algebra]

2.1 Set $B_i=A_{\theta,i}-\mathbb E A_\theta$. Since both matrices subtracted lie between $0$ and $RI$, $-RI\preceq B_i\preceq RI$, whence $\|B_i\|_{\rm op}\le R$. Expanding the square and taking expectations, without any commutativity requirement, gives $\mathbb E B_i^2=\mathbb EA_\theta^2-(\mathbb EA_\theta)^2\preceq\mathbb EA^2$. The left side is positive semidefinite; hence its norm is at most $\sigma_0^2$. The matrices $B_i$ are independent and centered. [F1, step 1.1, algebra]

2.2 For a vector $y\in\mathbb R^p$ define its symmetric dilation $D(y)=\begin{pmatrix}0&y^T\\y&0\end{pmatrix}$ of size $p+1$. Its square is $\operatorname{diag}(\|y\|_2^2,yy^T)$; its nonzero eigenvalues when $y\ne0$ are $\|y\|_2$ and $-\|y\|_2$, as is checked on the span of $(1,0)$ and $(0,y/\|y\|)$. It vanishes on the orthogonal complement, so $\lambda_{\max}(D(y))=\|D(y)\|_{\rm op}=\|y\|_2$, also at zero. For $C_i=D(Y_i-\mathbb EY)$, step 1.2 gives $\|C_i\|\le2/\sqrt\theta$. The square identity gives $\mathbb E C_i^2=\operatorname{diag}(\mathbb E\|Y-\mathbb EY\|^2,\mathbb E[(Y-\mathbb EY)(Y-\mathbb EY)^T])$. Its norm is at most $\mathbb E\|Y-\mathbb EY\|^2\le\mathbb E\|Y\|^2\le\mathbb E\|Z\|^2=T$; for the lower block, test a unit vector and bound its squared scalar projection by the squared norm. The $C_i$ are independent centered symmetric matrices. [F1, step 1.1, step 1.2, construct, algebra]

3.1 Let $b=\beta+\log2$ and use [F2] with the fixed Chernoff parameter $s=\theta$; it is admissible since $\theta R=1<3$. Its exponent bound is $3m\theta^2\sigma_0^2/4$. Consequently, for $u=3m\theta\sigma_0^2/4+b/\theta$, the one-sided failure is at most $pe^{-b}$; apply the same statement to $-B_i$ and take a union to obtain $\mathbb P\{\|S-\mathbb EA_\theta\|_{\rm op}>3\theta\sigma_0^2/4+b/(m\theta)\}\le2pe^{-b}=pe^{-\beta}$. Adding the bias from step 1.1 and using $\sigma_0\le\sigma$ yields $\theta\sigma_0^2+b/(m\theta)\le(2+(\log2)/\beta)\sigma\sqrt t$. Define $E_S$ by this bound. Finally $\log2<7/10$ since the first four nonnegative terms of $e^{7/10}$ sum to $1+7/10+49/200+343/6000>2$; since $\beta>1$, the claimed strict bound by $27/10$ follows. [F2, step 1.1, step 2.1, choose, algebra]

3.2 For the alternative radius, apply the two-sided explicit form in [F2] to the same $B_i$, now with confidence parameter $\beta$. After division by $m$ its radius is $\sqrt{2\sigma_0^2\beta/m}+2R\beta/(3m)$. Adding the bias $\theta\sigma_0^2/4$ and substituting $R=1/\theta$, $\theta=\sqrt t/\sigma$, and $\sigma_0\le\sigma$, gives the displayed radius $(\sqrt2+2/3+1/4)\sigma\sqrt t$ with failure at most $2pe^{-\beta}$. [F2, step 1.1, step 2.1, algebra]

4.1 Apply the one-sided explicit Bernstein bound [F2] to $C_i$ with dimension $p+1$, bound $R_0=2/\sqrt\theta$, variance bound $v=T$ and confidence $b=\beta+\log2$. Since $\lambda_{\max}(\sum_i C_i)=\|\sum_i(Y_i-\mathbb EY)\|$, division by $m$ gives $\|V-\mathbb EY\|\le\sqrt{2Tb/m}+4b/(3m\sqrt\theta)$ outside probability $(p+1)e^{-b}=(p+1)e^{-\beta}/2$. Because $\log2<1<\beta$, one has $b<2\beta$, and the radius is at most $2\sqrt{Tt}+8t/(3\sqrt\theta)$. Adding step 1.2 proves the stated vector bound and defines $E_V$. The two events were obtained from the original independent observations without conditioning on any other statistic. Together with steps 3.1 and 3.2 this proves every asserted conclusion. [F2, step 3.1, step 3.2, step 1.2, step 2.2, algebra] ∎
