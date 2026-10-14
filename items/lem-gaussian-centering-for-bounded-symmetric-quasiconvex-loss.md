---
id: lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss
kind: lemma
title: A centered Gaussian minimizes bounded symmetric quasi-convex loss
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - thm-brunn-minkowski-for-compact-convex-sets
  - lem-boundary-of-convex-set-is-lebesgue-null
  - def-multivariate-normal-law
  - def-euclidean-inner-product
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-heine-borel-rn
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §4, PDF pp. 16–17
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
    - title: "Jan van Neerven, γ-Radonifying operators: A Survey, §8, Lemma 8.1 and Theorem 8.2 (Anderson), printed p. 29"
      url: https://maths.anu.edu.au/files/CMAproc44-vanNeerven-href.pdf
---

## Statement

Assume AC. Let $X\sim N_d(m,\Sigma)$ with positive-definite covariance
$\Sigma$. Let $L:\mathbb R^d\to[0,M]$ be Borel measurable and symmetric,
$L(-x)=L(x)$, and quasi-convex, meaning each sublevel set
$\{x:L(x)\le t\}$ is convex. Then for every $a\in\mathbb R^d$,
$$E L(X-a)\ge E L(X-m).$$
Thus the Gaussian center $m$ minimizes expected loss. The result includes
quasi-convex losses whose sublevel sets are not closed.

## Facts & Assumptions

**Given:** AC; a finite-dimensional nondegenerate Gaussian vector; and a
bounded Borel measurable symmetric loss with convex sublevel sets.

[A1] [[def-axiom-of-choice]]: AC is assumed for the finite-dimensional
multivariate normal construction and characteristic laws used here.

[F1] [[thm-brunn-minkowski-for-compact-convex-sets]]: For nonempty compact
convex $U,V\subset\mathbb R^d$,
$$\lambda_d(U+V)^{1/d}\ge \lambda_d(U)^{1/d}+\lambda_d(V)^{1/d}.$$

[F2] [[lem-boundary-of-convex-set-is-lebesgue-null]]: A convex set and its
closure differ only by a Lebesgue-null boundary; lower-dimensional convex
sets are null.

[F3] [[def-multivariate-normal-law]],
[[def-standard-normal-and-normal-laws]], and
[[lem-normal-density-has-total-mass-one]]: A nondegenerate Gaussian is an
invertible affine image of a standard Gaussian vector with density
$(2\pi)^{-d/2}e^{-\|z\|_2^2/2}$. The Euclidean norm is the one in
[[def-euclidean-inner-product]].

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: Nonnegative
measurable integrands may be integrated in either order.

[F5] [[thm-linear-change-of-variables-for-lebesgue-measure]]: An invertible
linear map scales Lebesgue measure by the absolute determinant. In particular,
reflection $x\mapsto -x$ preserves volume and scaling by $1/2$ multiplies it by
$2^{-d}$. Thus the unweighted inequality in [F1], applied to $U,V$, gives
$$\lambda_d((U+V)/2)^{1/d}\ge \frac{\lambda_d(U)^{1/d}+\lambda_d(V)^{1/d}}2.$$

[F6] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]:
Translation preserves Lebesgue measure; accordingly, translating the variable
in a Lebesgue integral does not change the integral after the integrand is
translated.

[F7] [[thm-heine-borel-rn]]: Closed bounded subsets of $\mathbb R^d$ are
compact. Thus intersections of the closed set $C$ with the closed balls used
below are compact and measurable.

## Proof

**Proof technique:** prove the Gaussian shift inequality for convex level
sets by Brunn–Minkowski, then integrate their indicators.

1.1 First let $C\subseteq\mathbb R^d$ be closed, symmetric, and convex. For each radius $r>0$ and shift $v$, put $U=C\cap(v+\overline B(0,r)),\qquad V=C\cap(-v+\overline B(0,r)).$ They are compact convex sets by [F7], and $V=-U$, so they have equal volume by [F5]. For $u\in U$ and $w\in V$, symmetry and convexity put $(u+w)/2$ in $C$, while $u-v$ and $w+v$ lie in the radius-$r$ ball, so $\|(u+w)/2\|_2=\|(u-v+w+v)/2\|_2\le r$. Thus $(U+V)/2\subseteq C\cap\overline B(0,r)$. This sets up the Brunn–Minkowski comparison. [F5, F7, given, algebra]

2.1 If $U$ has positive volume, [F1] and its derived weighted form [F5] give $\lambda_d(C\cap\overline B(0,r))\ge \lambda_d((U+V)/2)\ge\lambda_d(U),$ since $\lambda_d(V)=\lambda_d(U)$. If $U$ has zero volume the same inequality follows from nonnegativity. Therefore $\lambda_d(C\cap(v+\overline B(0,r))) \le\lambda_d(C\cap\overline B(0,r)).$ This is the required shifted-volume inequality. [F1, F5, step 1.1, algebra]

3.1 Let $Z\sim N_d(0,I_d)$. Its density is a positive constant times $e^{-\|z\|_2^2/2}$. For any shift $v$, translation invariance [F6] and symmetry of $C$ (using the reflection in [F5]) give $P(Z\in C+v)=c_d\int_C e^{-\|z+v\|_2^2/2}dz=c_d\int_C e^{-\|z-v\|_2^2/2}dz$, where $c_d>0$ is the normalizing constant. The identity $e^{-\|z-v\|_2^2/2}=\int_0^\infty e^{-t}\mathbf1_{\{\|z-v\|_2^2/2\le t\}}dt$ and [F4] express the latter integral as $c_d\int_0^\infty e^{-t}\lambda_d(C\cap(v+\overline B(0,\sqrt{2t})))dt.$ By step 2.1, this is at most the same expression at shift zero. Hence $P(Z\in C+v)\le P(Z\in C)$. This proves the Gaussian shift inequality. [F3, F4, F5, F6, step 2.1, algebra]

4.1 If $C$ is convex, symmetric, but not closed, replace it by $\overline C$. The difference is contained in $\partial C$, which is null by [F2]; its translate is also null by [F6]. Thus the probability inequality in step 3.1 holds for every convex symmetric Borel set. If $C$ has empty interior, [F2] makes both probabilities zero, which also covers this boundary case. [F2, F6, step 3.1, given]

5.1 Write $X=m+AZ$ with $A=\Sigma^{1/2}$ invertible. For any symmetric convex Borel set $C$, the event $X-a\in C$ is $Z\in A^{-1}C+A^{-1}(a-m)$. The set $A^{-1}C$ is again symmetric convex, so step 4.1 gives $P(X-a\in C)\le P(X-m\in C).$ Apply this to every sublevel set $C_t=\{x:L(x)\le t\}$. This gives the comparison for each loss sublevel. [A1, F2, F3, step 4.1, algebra]

6.1 For any random variable $Y$ with $0\le Y\le M$, $EY=\int_0^M P(Y>t)dt$, by [F4]. Step 5.1 says $P(L(X-a)\le t)\le P(L(X-m)\le t)$ for each $t$, hence the corresponding tail probabilities are ordered in the reverse direction. Integrating them gives $E L(X-a)\ge E L(X-m)$. This proves the statement without requiring closed loss sublevels. [F4, step 5.1, given, algebra] ∎

