---
id: lem-ip-tweedie-mmse-jacobian-and-prox-potential
kind: lemma
title: "Tweedie identity, positive Jacobian, and the MMSE proximal potential"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-learned-reconstruction-estimator
  - def-euclidean-inner-product
  - def-probability-measure
  - def-ck-and-multi-index-notation-in-several-variables
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - thm-derivative-of-exponential
  - thm-logarithm-derivative-and-integral
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - def-ck-euclidean-maps-and-diffeomorphisms
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - cor-mean-value-theorem
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "The local Gaussian-kernel, moment, Jacobian, and potential arguments use no choice axiom. The IP-46 learned-estimator definition states no choice use. The AC- and Countable-Choice-dependent Hilbert posterior-mean proposition is not used; the pointwise finite-posterior-risk identity is proved directly here."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xiaojian Xu, Yu Sun, Jiaming Liu, Brendt Wohlberg, and Ulugbek S. Kamilov, Provable Convergence of Plug-and-Play Priors with MMSE Denoisers, IEEE Signal Processing Letters 27 (2020), arXiv:2005.07685"
      url: "https://arxiv.org/pdf/2005.07685"
      locator: "§2, Assumption 1 and equation (8); Appendix A.1, equations (9)–(12), complete proof."
    - title: "Rémi Gribonval and Mila Nikolova, On Bayesian Estimation and Proximity Operators, Applied and Computational Harmonic Analysis 50 (2021), 49–72, arXiv:1807.04021"
      url: "https://arxiv.org/pdf/1807.04021"
      locator: "§2.1, Corollary 2; §2.5.1 and Appendix A.4, complete Gaussian MMSE proximity argument."
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, Foundations and Trends in Optimization 1(3) (2014)"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
      locator: "§1.1, pp. 124–125: the standard definition is restricted to closed proper convex penalties; the nonconvex identity here is proved locally."
---

## Statement

Let $n\ge1$, let $\mu$ be a Borel probability measure on $\mathbb R^n$ that is not concentrated on any affine hyperplane, and let $\sigma,\gamma>0$. Put
$$\rho_\sigma(w)=\exp\!\left(-\frac{\|w\|_2^2}{2\sigma^2}\right),\qquad p_\sigma(z)=\int_{\mathbb R^n}\rho_\sigma(z-u)\,\mu(du),$$
and define the normalized posterior measure and its mean by
$$\nu_{\sigma,z}(E)=\frac{\int_E\rho_\sigma(z-u)\,\mu(du)}{p_\sigma(z)}\quad(E\in\mathcal B(\mathbb R^n)),\qquad D_\sigma(z)=\int_{\mathbb R^n}u\,\nu_{\sigma,z}(du).$$
The omitted normalizing constant of the $N(0,\sigma^2I)$ likelihood is independent of $u$ and cancels in $\nu_{\sigma,z}$. Writing $U(u)=u$ for the identity random vector under $\nu_{\sigma,z}$, its covariance matrix is
$$\operatorname{Cov}_{\nu_{\sigma,z}}(U)=\int_{\mathbb R^n}(u-D_\sigma(z))(u-D_\sigma(z))^{\mathsf T}\,\nu_{\sigma,z}(du).$$
Then $p_\sigma$ is positive and smooth, each $\nu_{\sigma,z}$ has finite second moment, and $D_\sigma(z)$ uniquely minimizes the posterior squared-error risk $a\mapsto\int\|u-a\|_2^2\,\nu_{\sigma,z}(du)$. Moreover, $D_\sigma$ is smooth and
$$J D_\sigma(z)=\sigma^{-2}\operatorname{Cov}_{\nu_{\sigma,z}}(U)$$
is symmetric positive definite. Hence $D_\sigma$ is injective with open image $X_\sigma=D_\sigma(\mathbb R^n)$ and smooth inverse on $X_\sigma$. Put $q_\sigma=-\log p_\sigma$ and, for $x\in X_\sigma$, define
$$h_{\sigma,\gamma}(x)=-\frac{\|x-D_\sigma^{-1}(x)\|_2^2}{2\gamma}+\frac{\sigma^2}{\gamma}q_\sigma(D_\sigma^{-1}(x));$$
set $h_{\sigma,\gamma}(x)=+\infty$ outside $X_\sigma$. The restriction of $h_{\sigma,\gamma}$ to $X_\sigma$ is smooth. For any extended-real $h:\mathbb R^n\to\mathbb R\cup\{+\infty\}$, define
$$\operatorname{prox}^{\mathrm{glob}}_{\gamma h}(z)=\operatorname*{arg\,min}_{x\in\mathbb R^n}\left\{\frac12\|x-z\|_2^2+\gamma h(x)\right\},$$
where the argmin is the set of global minimizers and $h$ need not be convex. Then
$$D_\sigma(z)=z+\sigma^2\nabla\log p_\sigma(z)=z-\sigma^2\nabla q_\sigma(z),\qquad \operatorname{prox}^{\mathrm{glob}}_{\gamma h_{\sigma,\gamma}}(z)=\{D_\sigma(z)\}\quad(z\in\mathbb R^n).$$

## Statement references

[[def-ip-learned-reconstruction-estimator]]

## Facts & Assumptions

**Given:** The integer $n\ge1$, a Borel probability $\mu$ not concentrated on an affine hyperplane, and $\sigma,\gamma>0$, with $\rho_\sigma,p_\sigma,\nu_{\sigma,z},D_\sigma,q_\sigma$ and $h_{\sigma,\gamma}$ as in the Statement.

[F1] [[def-euclidean-inner-product]]: on $\mathbb R^n$, $\langle x,y\rangle=\sum_{k<n}x_ky_k$ and $\|x\|_2=\sqrt{\langle x,x\rangle}$.

[F2] [[def-probability-measure]]: $\mu$ is a measure on its Borel sigma-algebra with total mass $\mu(\mathbb R^n)=1$.

[F3] [[thm-differentiation-under-the-integral-sign]]: if an integrand is integrable for each parameter, its parameter derivative is measurable, and that derivative has one integrable majorant on an open interval, then the integral is differentiable and its derivative is the integral of the derivative.

[F4] [[thm-dominated-convergence]]: almost-everywhere convergence under one integrable majorant permits passage of the limit through the integral.

[F5] [[thm-derivative-of-exponential]]: the real exponential is smooth and $\exp'=\exp$.

[F6] [[thm-logarithm-derivative-and-integral]]: for $r>0$, $\log$ is differentiable with $\log'(r)=1/r$.

[F7] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable Euclidean maps, the total derivative of a composite is the composite of the total derivatives.

[F8] [[thm-algebra-of-derivatives]]: sums, products, scalar multiples, and quotients obey their derivative formulas wherever their denominators are nonzero.

[F9] [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]: finite componentwise sums, products, scalar multiples, and composites of $C^k$ Euclidean maps are $C^k$.

[F10] [[def-ck-euclidean-maps-and-diffeomorphisms]]: a Euclidean map is smooth when it is $C^k$ for every finite $k$.

[F11] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]: in positive-dimensional Euclidean space, a smooth map with invertible derivative at a point restricts to a smooth diffeomorphism between open neighborhoods; this theorem uses no choice axiom.

[F12] [[cor-mean-value-theorem]]: a continuous scalar function on a closed interval, differentiable in its interior, has an interior derivative equal to its endpoint difference divided by interval length.

[F13] [[def-ck-and-multi-index-notation-in-several-variables]]: a multi-index is an element $\alpha\in\mathbb N^n$, and $\partial^\alpha$ is the corresponding iterated coordinate derivative.

## Proof

1.1 Since $0<\rho_\sigma(z-u)\le1$, $p_\sigma(z)\le1$. For fixed $z$, the measurable sets $E_k=\{u:\rho_\sigma(z-u)\ge1/k\}$, $k\ge1$, cover $\mathbb R^n$. By [F2] and countable subadditivity, some $E_k$ has positive $\mu$-measure; hence $p_\sigma(z)\ge\mu(E_k)/k>0$. For $j=1,2$, the function $u\mapsto\|u\|_2^j\rho_\sigma(z-u)$ is bounded because a polynomial factor is dominated at infinity by the Gaussian exponential, so its $\mu$-integral is finite. Thus $\nu_{\sigma,z}$ is a probability measure with finite second moment and $D_\sigma(z)$ is well-defined. [given, F1, F2, algebra]

2.1 Let $\alpha\in\mathbb N^n$ be a multi-index as in [F13]. At order zero, $\partial^\alpha\rho_\sigma=\rho_\sigma$. If $\partial^\alpha\rho_\sigma(w)=P(w)\rho_\sigma(w)$ for a polynomial $P$, then $\partial_j(P(w)\rho_\sigma(w))=(\partial_jP(w)-w_jP(w)/\sigma^2)\rho_\sigma(w)$, again a polynomial times $\rho_\sigma$. Induction on $|\alpha|$ proves the stated form for every finite derivative. On each compact set of $z$ values, both $|\partial^\alpha\rho_\sigma(z-u)|$ and $|u_i\partial^\alpha\rho_\sigma(z-u)|$ are bounded uniformly in $u$, since every polynomial times the Gaussian tends to zero at infinity. Apply [F3] coordinate by coordinate to $p_\sigma$ and to each numerator $N_i(z)=\int u_i\rho_\sigma(z-u)\,\mu(du)$; the uniform bounds supply an integrable majorant and [F4] justifies passage of each derivative limit through the integral. The same bounds for derivatives of order $|\alpha|+1$ give a uniform bound $M$ for the first derivatives of each resulting derivative on any compact ball $K$. For $z,w\in K$, apply [F12] to that derivative along $z+t(w-z)$, $0\le t\le1$, to obtain a difference bound $\sqrt n M\|z-w\|_2$; thus each resulting derivative is continuous. Iterating over $\alpha$ makes $p_\sigma$ and every $N_i$ smooth. Since $p_\sigma>0$, the reciprocal $r(s)=1/s$ is smooth on $(0,\infty)$: its first derivative is $-r(s)^2$ by the difference quotient, and repeated use of [F8] shows every higher derivative is a polynomial in $r$. Thus [F9] makes $D_\sigma=(N_i/p_\sigma)_{i<n}$ smooth; [F6], [F8], and positivity of $p_\sigma$ also make $q_\sigma=-\log p_\sigma$ smooth. [F2, F3, F4, F5, F6, F8, F9, F10, F12, F13, step 1.1]

3.1 For $a\in\mathbb R^n$, expand $u-a=(u-D_\sigma(z))+(D_\sigma(z)-a)$ and integrate. The cross term vanishes because $\int(u-D_\sigma(z))\,\nu_{\sigma,z}(du)=0$, giving $$\int\|u-a\|_2^2\,\nu_{\sigma,z}(du)=\int\|u-D_\sigma(z)\|_2^2\,\nu_{\sigma,z}(du)+\|a-D_\sigma(z)\|_2^2.$$ Thus $D_\sigma(z)$ is the unique posterior squared-error minimizer. Differentiating $N_i/p_\sigma$ using [F3], [F5], [F7], [F8], and [F9] gives $$\partial_jD_{\sigma,i}(z)=\frac1{\sigma^2}\left(\int u_i u_j\,\nu_{\sigma,z}(du)-D_{\sigma,i}(z)D_{\sigma,j}(z)\right),$$ because the terms containing $z_j$ cancel. This is exactly the stated symmetric covariance formula. [F1, F3, F5, F7, F8, F9, step 1.1, step 2.1, algebra]

3.2 For each coordinate $j$, $\partial_j\rho_\sigma(z-u)=(u_j-z_j)\rho_\sigma(z-u)/\sigma^2$. Differentiating under the integral by [F3] and using step 1.1 gives $\nabla p_\sigma(z)=p_\sigma(z)(D_\sigma(z)-z)/\sigma^2$. Since $p_\sigma(z)>0$, [F6] gives $\nabla\log p_\sigma=\nabla p_\sigma/p_\sigma$, proving both Tweedie identities in the Statement. [F3, F5, F6, F7, step 1.1, step 2.1]

4.1 For nonzero $v\in\mathbb R^n$, $$v^{\mathsf T}J D_\sigma(z)v=\sigma^{-2}\int\langle v,u-D_\sigma(z)\rangle^2\,\nu_{\sigma,z}(du).$$ If this were zero, then for each $k\ge1$ the set where $|\langle v,u-D_\sigma(z)\rangle|\ge1/k$ would have $\nu_{\sigma,z}$-measure zero; their union is the complement of the affine hyperplane $\{u:\langle v,u\rangle=\langle v,D_\sigma(z)\rangle\}$. Hence that hyperplane has full $\nu_{\sigma,z}$-measure. The density $\rho_\sigma(z-u)/p_\sigma(z)$ is strictly positive, so $\nu_{\sigma,z}$ and $\mu$ have the same null sets: if $\nu_{\sigma,z}(E)=0$, then each set $E\cap\{\rho_\sigma(z-u)/p_\sigma(z)\ge1/k\}$ has zero $\mu$-measure, and these sets cover $E$. Thus the hyperplane has full $\mu$-measure, contradicting the hypothesis. Therefore $J D_\sigma(z)$ is positive definite. [given, F1, step 1.1, step 3.1]

4.2 Fix $z$ and write $$\Psi_z(u)=\frac12\|D_\sigma(u)-z\|_2^2-\frac12\|D_\sigma(u)-u\|_2^2+\sigma^2q_\sigma(u).$$ By the definition of $h_{\sigma,\gamma}$, this equals $\frac12\|D_\sigma(u)-z\|_2^2+\gamma h_{\sigma,\gamma}(D_\sigma(u))$. Differentiate using [F7] and the symmetry of $J D_\sigma$ from step 3.1: $$\nabla\Psi_z(u)=J D_\sigma(u)(D_\sigma(u)-z)-(J D_\sigma(u)-I)(D_\sigma(u)-u)+\sigma^2\nabla q_\sigma(u)=J D_\sigma(u)(u-z),$$ where the last equality uses $D_\sigma(u)-u=-\sigma^2\nabla q_\sigma(u)$ from step 3.2. [F1, F7, step 3.1, step 3.2]

5.1 If $z\ne w$, put $v=w-z$ and $\psi(t)=\langle D_\sigma(z+tv),v\rangle$ on $[0,1]$. By [F7] and step 4.1, $\psi'(t)=v^{\mathsf T}J D_\sigma(z+tv)v>0$. The mean-value theorem [F12] yields $\langle D_\sigma(w)-D_\sigma(z),w-z\rangle>0$, so $D_\sigma(w)\ne D_\sigma(z)$ and $D_\sigma$ is injective. [F1, F7, F12, step 4.1]

6.1 At every $z$, the derivative $J D_\sigma(z)$ is invertible by step 4.1. Apply [F11] at each $z$: every point has an open neighborhood mapped diffeomorphically onto an open neighborhood. Their images cover $X_\sigma$, so $X_\sigma$ is open. Injectivity from step 5.1 makes the local inverse maps agree on overlaps, giving the global inverse $D_\sigma^{-1}:X_\sigma\to\mathbb R^n$, which is smooth. Since $q_\sigma$ is smooth by step 2.1, the formula in the Statement makes $h_{\sigma,\gamma}$ smooth on $X_\sigma$. [F9, F10, F11, step 2.1, step 4.1, step 5.1]

7.1 For any $v\ne0$, let $\chi(t)=\Psi_z(z+tv)$ on $[0,1]$. Step 4.2 gives $\chi'(t)=t\,v^{\mathsf T}J D_\sigma(z+tv)v>0$ for every $t\in(0,1]$ by step 4.1. By [F12], $\Psi_z(z+v)>\Psi_z(z)$. Thus $u=z$ is the unique global minimizer of $\Psi_z$. Every $x\in X_\sigma$ has a unique form $D_\sigma(u)$ by step 6.1, while $h_{\sigma,\gamma}=+\infty$ outside $X_\sigma$; consequently $D_\sigma(z)$ is the unique global minimizer of $\frac12\|x-z\|_2^2+\gamma h_{\sigma,\gamma}(x)$ over all $x\in\mathbb R^n$. [F12, step 4.1, step 6.1, step 4.2] ∎
