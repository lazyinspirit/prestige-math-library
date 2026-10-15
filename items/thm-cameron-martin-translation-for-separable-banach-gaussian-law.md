---
id: thm-cameron-martin-translation-for-separable-banach-gaussian-law
kind: theorem
title: "Cameron–Martin translation formula for a separable Banach Gaussian"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-banach-gaussian-covariance-operator-and-rkhs
  - thm-banach-gaussian-covariance-rkhs-is-well-defined
  - lem-separable-banach-has-countable-norming-family
  - lem-countable-norming-family-determines-borel-laws
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-characteristic-function-of-a-multivariate-normal-law
  - def-axiom-of-choice
  - def-hahn-banach-extension-principle-relative
  - def-countable-choice
  - thm-hahn-banach-dominated-extension
  - cor-cauchy-schwarz-for-random-variables
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC supplies HB for the countable norming family; countable choice selects that family. The isonormal map is obtained by completion and requires no additional basis choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Theorem 3.1.5 and complete proof, source PDF pp. 34–36."
    - title: "M. Hairer, An Introduction to Stochastic PDEs"
      url: "https://www.hairer.org/notes/SPDEs_Course.pdf"
      locator: "Theorem 4.44 and proof, Cameron–Martin translation formula."
---

## Statement

Assume AC and countable choice. Let $W$ be a centered Borel Gaussian random
element in a real separable
Banach space $B$, with law $\mu$ and covariance RKHS $H\subseteq B$. For
$h\in H$, let $z_h$ be the $L^2(\mu)$-limit of the coordinate functions
$\ell(x)$ representing a sequence of classes $[\ell]\to i^{-1}h$ in the
completion $H$. The limit has a Borel-measurable version and does not depend
on the approximating sequence. If $\mu_h$ denotes the law of $W+h$, then
$$\frac{d\mu_h}{d\mu}(x) =\exp\!\left(z_h(x)-\frac12\|h\|_H^2\right).$$
In particular, $\mu_h$ and $\mu$ are equivalent. If $h=C\ell$ for
$\ell\in B^*$, then $z_h(x)=\ell(x)$ $\mu$-almost surely and
$\|h\|_H^2=E[\ell(W)^2]$; these formulas are independent of the choice of
representative $\ell$.

## Facts & Assumptions

[A1] AC and countable choice are the explicit Gaussian-construction and countable-coordinate assumptions ([[def-axiom-of-choice]], [[def-countable-choice]]).

[A2] Under AC, the real dominated-extension theorem supplies the Hahn–Banach principle HB used by the dual-norming interface ([[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F1] The quotient completion $H$ embeds injectively into $B$, and $\ell(iu)=\langle u,[\ell]\rangle_H$ ([[thm-banach-gaussian-covariance-rkhs-is-well-defined]]).

[F2] Finite families of continuous coordinates of $W$ are multivariate Gaussian, with characteristic function determined by their covariance ([[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-multivariate-normal-law]]).

[F3] Countable norming coordinates determine Borel laws on $B$ ([[lem-separable-banach-has-countable-norming-family]], [[lem-countable-norming-family-determines-borel-laws]]).

[F4] The standard normal density is $(2\pi)^{-1/2}e^{-x^2/2}$ and its characteristic function is $e^{-t^2/2}$ ([[def-standard-normal-and-normal-laws]], [[lem-characteristic-function-of-a-multivariate-normal-law]]).

[F5] For square-integrable real random variables, $E|XY|\le(E X^2)^{1/2}(E Y^2)^{1/2}$ ([[cor-cauchy-schwarz-for-random-variables]]).

[F6] $L^2(\mu)$ over the Borel probability space $(B,\mathcal B(B),\mu)$ is complete, and its elements are classes of Borel-measurable functions ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

## Proof


**Given:** AC, countable choice, a centered Borel Gaussian random element $W$ in $B$, its law $\mu$, covariance RKHS $H$, and an arbitrary $h=i(u)\in H$.

1.1 On the dense quotient $B^*/N\subset H$, define $J([\ell])=\ell(\cdot)$ as an element of $L^2(\mu)$. The definition of the inner product makes $J$ an isometry, so it extends to an isometry $J:H\to L^2(\mu)$ by completeness [F6]. Let $z_h=J(u)$ and choose $[\ell_n]\to u$ in the quotient completion; put $Z_n=\ell_n(W)$. Since $L^2(\mu)$ is formed from Borel-measurable functions on $(B,\mathcal B(B),\mu)$, choose a Borel-measurable representative $z_h$ of its class. Approximation in $L^2$ gives uniqueness up to $\mu$-null sets, with $\|Z_n-z_h\|_2\to0$. For fixed $\ell_1,\ldots,\ell_m\in B^*$, set $Y_n=(Z_n,\ell_1(W),\ldots,\ell_m(W))$ and $Y=(z_h,\ell_1(W),\ldots,\ell_m(W))$. Each $Y_n$ is centered multivariate Gaussian by [F2]. Cauchy–Schwarz [F5] gives $E|Z_n-z_h|\le\|Z_n-z_h\|_2\to0$, $|E[Z_n\ell_j(W)]-E[z_h\ell_j(W)]|\le\|Z_n-z_h\|_2\|\ell_j(W)\|_2\to0$, and $|E[Z_n^2]-E[z_h^2]|\le\|Z_n-z_h\|_2(\|Z_n\|_2+\|z_h\|_2)\to0$. Thus their covariance matrices $\Sigma_n$ converge entrywise to the positive-semidefinite covariance matrix $\Sigma$ of $Y$. For each $t=(s,t_1,\ldots,t_m)$, $|E e^{it\cdot Y_n}-E e^{it\cdot Y}|\le |s|E|Z_n-z_h|\to0$. By [F2], $E e^{it\cdot Y_n}=e^{-t^\mathsf T\Sigma_n t/2}$, so the characteristic function of $Y$ is $e^{-t^\mathsf T\Sigma t/2}$, the characteristic function of $N(0,\Sigma)$. Uniqueness in [F2] proves that $Y$ is jointly Gaussian. Finally, its mixed covariances satisfy $\operatorname{Cov}(z_h,\ell_j(W))=\lim_n\langle[\ell_n],[\ell_j]\rangle_H=\langle u,[\ell_j]\rangle_H=\ell_j(h)$ by [F1]. [A1, F1, F2, F5, F6, given, construct, algebra]

2.1 Choose a countable norming family $(\ell_j)_{j\ge1}$ for $B$ using [A1, A2], and put $D=\exp(z_h-\|h\|_H^2/2)$. By [F2], for every finite subvector $L=(\ell_1(W),\ldots,\ell_m(W))$, the joint vector $(z_h,L)$ is a linear image of a finite standard Gaussian vector. For one standard coordinate $G$ and real $u,v$, completing the square in [F4]'s density gives $E e^{(u+iv)G}=e^{u^2/2}\int e^{ivy}(2\pi)^{-1/2}e^{-(y-u)^2/2}\,dy=e^{(u+iv)^2/2}$. Multiplying these identities over the independent standard coordinates and using the covariances from step 1.1 gives $E_\mu[e^{it\cdot L}D] =\exp\!\left(-\tfrac12 t^\mathsf T\operatorname{Cov}(L)t+i\sum_{j=1}^m t_j\ell_j(h)\right).$ At $t=0$ this also gives $E_\mu D=1$. Since $z_h$ is finite almost surely, $D>0$ almost surely, so $D\,d\mu$ is a probability equivalent to $\mu$. The displayed function is the characteristic function of $L+(\ell_1(h),\ldots,\ell_m(h))$. Thus $D\,d\mu$ and the law $\mu_h$ of $W+h$ have the same finite-dimensional pushforwards under a countable norming family. [A1, A2, F2, F3, F4, step 1.1, algebra]

3.1 By [F3], equality of those pushforwards implies $D\,d\mu=\mu_h$ on all Borel sets, proving the Radon–Nikodym identity. Positivity of $D$ gives equivalence. If $h=C\ell$, then $u=[\ell]$ and $J(u)=\ell(\cdot)$; if $C\ell=C\ell'$, the well-definedness theorem gives $[\ell]=[\ell']$, so both the scalar representative and its variance agree almost surely. [A1, A2, F1, F3, step 2.1] ∎

