---
id: thm-gauss-circle-error-bound-one-third-epsilon
kind: theorem
title: "The squared-radius Gauss circle error is Oε(x^(1/3+ε))"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-gauss-circle-error-term, def-two-square-representation-function, thm-divisor-function-subpolynomial-bound, thm-poisson-summation-for-a-full-rank-lattice, def-countable-choice, thm-two-square-representation-count, def-integer-order-bessel-series, lem-bessel-integral-representations-and-scaled-range, lem-voronoi-circle-angular-measure, thm-polar-coordinates-formula-for-lebesgue-measure, def-fourier-transform-on-l-one-of-rn, def-schwartz-space-and-its-seminorms, thm-fourier-transform-converts-convolution-to-products, thm-linear-change-of-variables-for-lebesgue-measure, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, thm-linearity-of-the-lebesgue-integral-on-l-one, lem-voronoi-j1-square-root-decay, lem-schwartz-cutoffs-from-the-standard-smooth-step, thm-differentiation-under-the-integral-sign, cor-volume-of-a-radius-r-n-ball]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Summation Formulas, from Poisson and Voronoi to the Present"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§6, formulas (6.3)–(6.13) and the complete proof of (6.2)"
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3: The Voronoï Summation Formula"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "§1, the two-square Bessel normalization and Chapter 3 §2 divisor estimate"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. For every real $\varepsilon>0$ there is a constant $C_\varepsilon>0$ such that for every real $X>1$, the squared-radius Gauss circle error
$$P(X):=\#\{(a,b)\in\mathbb Z^2:a^2+b^2\le X\}-\pi X$$
satisfies
$$|P(X)|\le C_\varepsilon X^{1/3+\varepsilon}.$$
Here the disk has radius $\sqrt X$, the lattice points are ordered pairs with signs counted, and the origin is included.

## Statement references

[Miller and Schmid, §6, formulas (6.3)–(6.13)](https://arxiv.org/pdf/math/0304187v1)

[Ivić, Chapter 3, §1, the two-square Bessel normalization](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a real $X>1$, and a real $\varepsilon>0$.

[A1] [[def-countable-choice]]: Countable Choice is assumed; it is the explicit choice hypothesis in the Poisson theorem and the convolution transform theorem.

[F1] [[def-gauss-circle-error-term]]: $P(X)=1+\sum_{1\le n\le X}r_2(n)-\pi X$, with $r_2(0)=1$ recording the origin.

[F2] [[def-two-square-representation-function]]: for $n\ge1$, $r_2(n)$ counts ordered integer pairs $(a,b)$ with $a^2+b^2=n$.

[F3] [[thm-poisson-summation-for-a-full-rank-lattice]]: under Countable Choice, a Schwartz function $G$ on $\mathbb R^2$ satisfies $\sum_{z\in\mathbb Z^2}G(z)=\sum_{\xi\in\mathbb Z^2}\widehat G(\xi)$, with absolute convergence.

[F4] [[def-fourier-transform-on-l-one-of-rn]]: $\widehat G(\xi)=\int_{\mathbb R^2}G(y)e^{-2\pi i y\cdot\xi}\,dy$.

[F5] [[thm-fourier-transform-converts-convolution-to-products]]: under Countable Choice, for $L^1$ functions on $\mathbb R^2$, $\widehat{f*g}=\widehat f\,\widehat g$.

[F6] [[thm-polar-coordinates-formula-for-lebesgue-measure]] and [[lem-voronoi-circle-angular-measure]]: polar integration on $\mathbb R^2$ uses $r\,dr$ and the unit-circle measure equals angular Lebesgue measure on $[0,2\pi)$.

[F7] [[lem-bessel-integral-representations-and-scaled-range]] and [[lem-voronoi-j1-square-root-decay]]: the angular integral of $e^{-2\pi i r|\xi|\cos\theta}$ is $2\pi J_0(2\pi r|\xi|)$, $(tJ_1(t))'=tJ_0(t)$, and $|J_1(t)|\le C t^{-1/2}$ for $t\ge1$.

[F8] [[thm-two-square-representation-count]]: $r_2(n)=4(d_1(n)-d_3(n))$, where $d_1,d_3$ count divisor subsets; hence $0\le r_2(n)\le4d(n)$.

[F9] [[thm-divisor-function-subpolynomial-bound]]: for every $\eta>0$, $d(n)\le C_\eta n^\eta$ for positive integers $n$.

[F10] [[lem-schwartz-cutoffs-from-the-standard-smooth-step]] and [[cor-volume-of-a-radius-r-n-ball]]: a smooth nonnegative cutoff supported in a disk and equal to one on a smaller disk exists, and disks of positive radius have finite positive area.

[F11] [[def-schwartz-space-and-its-seminorms]] and [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]: a smooth compactly supported function is Schwartz and its Fourier transform is Schwartz.

[F12] [[thm-linear-change-of-variables-for-lebesgue-measure]] and [[thm-differentiation-under-the-integral-sign]]: invertible linear substitutions transform Lebesgue measure by the absolute determinant, and a smooth compactly supported convolution kernel may be differentiated under its integral.

[F13] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the complex Lebesgue integral is linear and is evaluated componentwise on real and imaginary parts.

## Proof

1.1 Choose a nonnegative smooth radial function $\Phi$ supported in the unit disk with $\int_{\mathbb R^2}\Phi=1$. Such a function is obtained by taking a smooth scalar cutoff equal to one near $0$ and supported where $|y|<1$, composing it with $|y|^2$, and dividing by its finite positive integral, using [F10]. Let $\delta:=X^{-1/6}$, let $\Phi_\delta(y):=\delta^{-2}\Phi(y/\delta)$, let $\chi_X$ be the indicator of the disk $|y|\le\sqrt X$, and put $F_X:=\chi_X*\Phi_\delta$. By [F12], $F_X$ is smooth; it is compactly supported and $0\le F_X\le1$. Both convolution factors are rotation-invariant, so changing variables by a rotation in the convolution integral shows that $F_X$ is radial. Since $\Phi_\delta$ has integral one and support in $|y|\le\delta$, $F_X(y)=1$ for $|y|\le\sqrt X-\delta$ and $F_X(y)=0$ for $|y|\ge\sqrt X+\delta$. [A1, F10, F12, given, choose]

2.1 For $\xi\ne0$, polar integration [F6] applied to the real and imaginary parts, with the complex integral combined by [F13], reduces the disk transform to $\int_0^{\sqrt X}r\,dr$ times the angular integral. The imaginary angular part cancels under $\theta\mapsto2\pi-\theta$. For $t=2\pi r|\xi|$, the real angular integral is
$$\int_0^{2\pi}\cos(t\cos\theta)\,d\theta =2\int_0^\pi\cos(t\cos\theta)\,d\theta =2\int_0^\pi\cos(t\sin\theta)\,d\theta =2\pi J_0(t),$$
where the second equality is the shift $\theta\mapsto\theta-\pi/2$ followed by evenness, and the last equality is [F7]. Therefore polar integration gives
$$\widehat{\chi_X}(\xi)=2\pi\int_0^{\sqrt X}rJ_0(2\pi r|\xi|)\,dr =\frac{\sqrt X}{|\xi|}J_1(2\pi\sqrt X|\xi|).$$
Indeed, with $t=2\pi r|\xi|$, the derivative identity $(tJ_1(t))'=tJ_0(t)$ evaluates the radial integral; at $\xi=0$, direct area gives $\widehat{\chi_X}(0)=\pi X$. The linear substitution in [F12] gives $\widehat{\Phi_\delta}(\xi)=\widehat\Phi(\delta\xi)$. Since $\Phi$ is rotation-invariant, the same measure-preserving substitution for each rotation shows that $\widehat\Phi$ is radial; write this value as $\psi(\delta|\xi|)$. Then $|\psi(u)|\le1$ from $\Phi\ge0$ and unit integral, and [F11] gives $|\psi(u)|\le C u^{-1}$ for $u\ge1$. By [F5], $\widehat F_X(\xi)=\widehat{\chi_X}(\xi)\widehat{\Phi_\delta}(\xi)$. [F5, F6, F7, F11, F12, F13, step 1.1, given, algebra]

3.1 Apply [F3] to $F_X$. Grouping both lattice sums by squared radius yields
$$\sum_{z\in\mathbb Z^2}F_X(z)=\pi X+\sqrt X\sum_{n=1}^\infty\frac{r_2(n)}{\sqrt n}J_1(2\pi\sqrt{nX})\psi(\delta\sqrt n).$$
The regrouping is valid because [F3] gives absolute convergence and [F2] counts the lattice vectors at each positive squared radius. By step 1.1, the difference between $\#\{z\in\mathbb Z^2:|z|\le\sqrt X\}$ and $\sum_zF_X(z)$ has absolute value at most
$$B_1:=\sum_{(\sqrt X-\delta)^2\le n\le(\sqrt X+\delta)^2}r_2(n).$$
Because $X>1$, $\delta<\sqrt X$; the interval for $n$ therefore has positive lower endpoint, length $4\sqrt X\delta=4X^{1/3}$, and upper endpoint at most $4X$. It contains at most $4X^{1/3}+1$ integers. Choose $\eta:=\min(\varepsilon,1/8)$. By [F8]–[F9], each summand is at most $C_\eta X^\eta$, so $B_1\le C_\varepsilon X^{1/3+\eta}$. [F2, F3, F8, F9, step 1.1, step 2.1, given, algebra]

4.1 Since $2\pi\sqrt{nX}\ge1$, [F7] and [F8]–[F9] bound the absolute $n$th term of the nonzero-frequency series in step 3.1 by
$$C_\eta X^{1/4}n^{-3/4+\eta}|\psi(\delta\sqrt n)|.$$
For $n\le\delta^{-2}=X^{1/3}$, $|\psi|\le1$ and
$$\sum_{n\le M}n^{-3/4+\eta}\le1+\int_1^M x^{-3/4+\eta}\,dx\le C_\eta M^{1/4+\eta},$$
because $-3/4+\eta<0$ and the summand is decreasing. Thus this low-frequency part is at most $C_\eta X^{1/4}(X^{1/3})^{1/4+\eta}=C_\eta X^{1/3+\eta/3}$. [F7, F8, F9, step 3.1, given, algebra]

5.1 If $n>\delta^{-2}$, then $\delta\sqrt n>1$ and [F11] gives $|\psi(\delta\sqrt n)|\le C\delta^{-1}n^{-1/2}=CX^{1/6}n^{-1/2}$. Hence the remaining part is at most
$$C_\eta X^{5/12}\sum_{n>X^{1/3}}n^{-5/4+\eta} \le C_\eta X^{5/12}(X^{1/3})^{-1/4+\eta} =C_\eta X^{1/3+\eta/3},$$
where the tail estimate follows by integrating the decreasing function $x^{-5/4+\eta}$, since $\eta\le1/8<1/4$. [F11, step 3.1, step 4.1, given, algebra]

6.1 The count difference in step 3.1 is bounded by $B_1$, and the absolute Poisson remainder is the sum of the low- and high-frequency bounds from steps 4.1 and 5.1. Since $\eta\le\varepsilon$, each is $O_\varepsilon(X^{1/3+\varepsilon})$. Substituting the definition of $P(X)$ from [F1] proves the stated estimate. [F1, step 3.1, step 4.1, step 5.1, given, algebra] ∎
