---
id: thm-le-cam-third-lemma
kind: theorem
title: Le Cam's third lemma for a Gaussian likelihood-ratio limit
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-contiguous-sequences-of-measures
  - thm-mean-one-likelihood-ratio-limit-implies-contiguity
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - lem-characteristic-function-of-a-multivariate-normal-law
  - def-axiom-of-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-convergence-in-distribution-of-random-elements
  - thm-dominated-convergence
  - thm-independent-random-elements-have-product-joint-law
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 21, PDF pp. 14–19
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/21notes.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §§1.2–1.3
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Assume AC.

Let $P_n$ be probability measures and let $Q_n=L_nP_n$, where $L_n\ge0$ and
$E_{P_n}L_n=1$. Let $T_n$ take values in $\mathbb R^k$. Suppose under $P_n$
that $(T_n,L_n)\Rightarrow(T,e^Z)$, where $Z$ is normal with mean
$-\sigma^2/2$ and variance $\sigma^2$; the joint law of $(T,Z)$ need not be
Gaussian. Then under $Q_n$, $T_n$ converges in distribution to the probability
law determined by
$$E[f(T^{(Q)})]=E[e^Zf(T)]$$
for every bounded continuous $f$. In particular, $Q_n$ is contiguous with
respect to $P_n$. If $(T,Z)$ is jointly Gaussian with
$T\sim N_k(\mu,\Sigma)$ and $\operatorname{Cov}(T,Z)=\tau$, this tilted
law is $N_k(\mu+\tau,\Sigma)$, including singular $\Sigma$.

## Facts & Assumptions

**Given:** AC; the sequences of laws, mean-one densities, and joint convergence
above.

[A1] [[def-axiom-of-choice]]: AC supplies the standard-normal coordinate
representation and the finite-dimensional Gaussian law facts used in the
jointly Gaussian tilt calculation, and implies the Countable Choice premise
of the $C^1$ change-of-variables supplier used below.

[F1] [[thm-mean-one-likelihood-ratio-limit-implies-contiguity]]: If
$L_n\ge0$, $E_{P_n}L_n=1$, $L_n\Rightarrow L\ge0$, and $EL=1$, then
$L_nP_n$ is contiguous with respect to $P_n$.

[F2] [[def-multivariate-normal-law]],
[[lem-characteristic-function-of-a-multivariate-normal-law]],
[[def-standard-normal-and-normal-laws]], and
[[lem-normal-density-has-total-mass-one]]: A jointly Gaussian vector is an
affine image of independent standard normal coordinates, and its
characteristic function is determined by its mean and covariance. The
standard normal density is $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$.

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]:
Translation by $b$ on $\mathbb R^m$ is a $C^1$ diffeomorphism with Jacobian
one, so the change-of-variables formula applies to the positive and negative
parts of the bounded integrand in the Gaussian tilt calculation.

[F4] [[def-contiguous-sequences-of-measures]]: $Q_n\triangleleft P_n$ means
$P_n(A_n)\to0$ implies $Q_n(A_n)\to0$ for every measurable event sequence.

[F5] [[def-convergence-in-distribution-of-random-elements]] and
[[thm-dominated-convergence]]: Bounded continuous expectations converge
under weak convergence, and integrable majorants permit passage to limits.

[F6] [[thm-independent-random-elements-have-product-joint-law]],
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]], and
[[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]:
Independent coordinates have product joint law; repeated scalar integration
and the Borel product-Lebesgue identity identify its product density. AC
supplies the countable choice required by the last supplier.

## Proof

**Proof technique:** uniform integrability transfers expectations, then a
Gaussian exponential tilt computes the shifted limit.

1.1 If $\sigma>0$, write $Z=-\sigma^2/2+\sigma G$ with $G\sim N(0,1)$. Completing the square gives $E e^{\sigma G}=\int e^{\sigma x}\phi(x)dx =e^{\sigma^2/2}\int\phi(x-\sigma)dx=e^{\sigma^2/2},$ so $Ee^Z=1$. If $\sigma=0$, then $Z=0$ and the same equality holds. The hypothesis gives the joint likelihood-ratio convergence. [A1, F2, given, algebra]

2.1 For $M>0$, [F5] and step 1.1 give $E(L_n-M)_+=1-E(L_n\wedge M)\to1-E(e^Z\wedge M)=E(e^Z-M)_+$. Since $x\mathbf1_{\{x>2M\}}\le2(x-M)_+$, the limsup of the tail expectations is at most $2E(e^Z-M)_+\to0$ by dominated convergence [F5]. Each finite initial set of integrable $L_n$ has vanishing tails as well, so $(L_n)$ is uniformly integrable. For bounded continuous $f$ and $M>0$, the function $(t,\ell)\mapsto f(t)(\ell\wedge M)$ is bounded and continuous. Its expectations converge by [F5] and the given joint convergence; uniform integrability lets $M\to\infty$, giving $E_{Q_n}f(T_n)=E_{P_n}[L_nf(T_n)]\longrightarrow E[e^Zf(T)].$ The equality on the left follows from $Q_n=L_nP_n$, first for indicators and then for bounded measurable functions by simple approximation. Thus the right side is the distributional limit under $Q_n$. [F5, step 1.1, given, algebra]

3.1 Suppose $(T,Z)$ is jointly Gaussian. By [F2], represent its law as $T=\mu+BG$ and $Z=-\sigma^2/2+b^TG$, where $G$ has $m$ independent standard-normal coordinates, $BB^T=\Sigma$, $Bb=\tau$, and $b^Tb=\sigma^2$. By [F6] and the scalar density in [F2], $G$ has Borel density $\phi_m(g)=\prod_{j=1}^m(2\pi)^{-1/2}e^{-g_j^2/2}$ with respect to $m$-dimensional Lebesgue measure (the one-coordinate case uses the scalar law directly). Completing the square coordinatewise gives $e^{b^Tg-\|b\|^2/2}\phi_m(g)=\phi_m(g-b)$. Thus for every bounded continuous $f$, the translation change of variables justified by [F3] gives $E[e^Zf(T)]=\int_{\mathbb R^m}f(\mu+Bg)\phi_m(g-b)\,dg=\int_{\mathbb R^m}f(\mu+B(g+b))\phi_m(g)\,dg.$ The integrals are absolutely convergent because $f$ is bounded and the shifted Gaussian density integrates to one. The final integral is $E[f(\mu+Bb+BG)]$, so the tilted law from step 2.1 is the affine Gaussian law $N_k(\mu+\tau,\Sigma)$ by [F2]. No inverse of $\Sigma$ is used, and the argument includes singular $\Sigma$ and $b=0$. [A1, F2, F3, F6, step 2.1, algebra]

4.1 Contiguity is the first conclusion of [F1] under the present hypotheses; [F4] states its event-sequence meaning. [F1, F4, step 1.1] ∎
