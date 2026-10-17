---
id: lem-chebyshev-polynomials-orthogonal-in-arcsine-weight
kind: lemma
title: "Chebyshev polynomials are orthogonal for the arcsine weight"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-chebyshev-arcsine-weighted-l2-pairing, def-chebyshev-polynomials-first-and-second-kind, thm-chebyshev-multiple-angle-identities, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-ftc-second-part, thm-linearity-of-the-integral, cor-weierstrass-approximation-on-a-closed-interval, thm-heine-borel-r, thm-extreme-value-r, thm-monotonicity-of-the-integral, def-pi-via-first-positive-cosine-zero, thm-chain-rule, cor-differentiable-implies-continuous, thm-composition-of-continuous-functions, thm-algebra-of-continuous-functions, thm-continuous-implies-integrable]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; the proof uses finite trigonometric identities and uniform polynomial approximation."
verification:
  precheck: pending
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §1.3"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 15–16 / PDF pp. 21–22; Chebyshev polynomials and orthogonality under the arcsine weight."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 259–264 (complete book PDF); cosine representation and Chebyshev orthogonality."
---

## Statement

Under the pairing of [[def-chebyshev-arcsine-weighted-l2-pairing]],
$$\langle T_m,T_n\rangle_C= \begin{cases} \pi,&m=n=0,\\ \pi/2,&m=n\ge1,\\ 0,&m\ne n. \end{cases}$$
The polynomials $T_0,T_1,\ldots$ form a basis of the real polynomial space, and the pairing is positive definite on continuous real functions on $[-1,1]$. If a continuous real function $h$ satisfies $\langle h,T_n\rangle_C=0$ for every $n\ge0$, then $h=0$ on $[-1,1]$.

## Facts & Assumptions

**Given:** Natural numbers $m,n$, the Chebyshev polynomials $T_k$, and the arcsine-weighted pairing.

[F1] [[def-chebyshev-arcsine-weighted-l2-pairing]]: $\langle f,g\rangle_C=\int_0^\pi f(\cos\theta)g(\cos\theta)\,d\theta$.

[F2] [[thm-chebyshev-multiple-angle-identities]]: $T_k(\cos\theta)=\cos(k\theta)$ for every natural $k$ and real $\theta$.

[F3] [[thm-sine-and-cosine-addition-formulas]]: $2\cos u\cos v=\cos(u+v)+\cos(u-v)$.

[F4] [[thm-sine-and-cosine-derivatives]] and [[thm-chain-rule]] give $(\sin(k\theta)/k)'=\cos(k\theta)$ for nonzero integer $k$. The interval is nondegenerate since $0<\pi$ by [[def-pi-via-first-positive-cosine-zero]], and each cosine integrand is continuous, hence integrable by [[cor-differentiable-implies-continuous]] and [[thm-continuous-implies-integrable]]. The second fundamental theorem [[thm-ftc-second-part]] therefore gives $\int_0^\pi\cos(k\theta)\,d\theta=(\sin(k\pi)-\sin0)/k$.

[F10] [[thm-linearity-of-the-integral]]: integrals of finite sums and scalar multiples of integrable functions are the corresponding sums and scalar multiples; in particular it gives the integral bilinearity used in steps 1.1, 3.1, and 4.1.

[F5] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin\pi=0$ and $\sin(x+\pi)=-\sin x$, so $\sin(k\pi)=0$ for every integer $k$; [[cor-trigonometric-parity-and-pythagorean-identity]]: cosine is even.

[F6] [[def-chebyshev-polynomials-first-and-second-kind]]: $T_0=1$, $T_1=X$, and $T_{n+1}=2XT_n-T_{n-1}$ for $n\ge1$.

[F7] [[cor-weierstrass-approximation-on-a-closed-interval]]: every continuous real function on $[-1,1]$ is a uniform limit of polynomials.

[F8] [[thm-heine-borel-r]] and [[thm-extreme-value-r]]: a continuous real function on $[-1,1]$ is bounded.

[F9] [[thm-composition-of-continuous-functions]] and [[thm-algebra-of-continuous-functions]] make the integrands in steps 3.1 and 4.1 continuous; [[thm-continuous-implies-integrable]] makes them integrable on $[0,\pi]$, and [[thm-monotonicity-of-the-integral]] passes pointwise lower and upper bounds to their integrals.

## Proof
1.1 By [F1]–[F2], $\langle T_m,T_n\rangle_C=\int_0^\pi\cos(m\theta)\cos(n\theta)\,d\theta$. If $m\ne n$, [F3], cosine parity [F5], and $\sin(k\pi)=0$ from [F5] make the integral of each nonzero-frequency cosine vanish by [F4]. If $m=n\ge1$, [F3] gives $\frac12(1+\cos(2m\theta))$, whose integral is $\pi/2$. If $m=n=0$, the integrand is $1$ and its integral is $\pi$. Linearity [F10] passes from the product-to-sum identity to these integrals. [F1, F2, F3, F4, F5, F10, algebra]

2.1 The recurrence [F6] shows inductively that $T_n$ has degree $n$ and nonzero leading coefficient: this holds for $T_0,T_1$, and the leading term of $2XT_n$ cannot cancel with the lower-degree $T_{n-1}$. Eliminating the leading term of any polynomial successively proves that $T_0,T_1,\ldots$ span all polynomials; their distinct degrees also give linear independence. Step 1.1 gives positive squared norms and pairwise orthogonality. [F6, step 1.1, algebra, induction]

3.1 Suppose continuous $h$ pairs to zero with every $T_n$. By step 2.1 it pairs to zero with every polynomial. Fix $\varepsilon>0$ and choose a polynomial $q$ with $\|q-h\|_\infty<\varepsilon$ by [F7]. The bound $M=\|h\|_\infty<\infty$ follows from [F8]. The pointwise bounds $-M\varepsilon\le h(\cos\theta)(h-q)(\cos\theta)\le M\varepsilon$ and [F9] give $0\le\langle h,h\rangle_C=\langle h,h-q\rangle_C\le\pi M\varepsilon$, where the equality uses bilinearity [F10]. The lower inequality uses the nonnegative integrand $h(\cos\theta)^2$ and [F9]. Since this holds for every $\varepsilon>0$, $\langle h,h\rangle_C=0$. If $h(x_0)\ne0$ at some $x_0\in[-1,1]$, choose $\theta_0\in[0,\pi]$ with $\cos\theta_0=x_0$; continuity makes $h(\cos\theta)^2$ bounded below by a positive constant on a one-sided neighborhood if $\theta_0$ is an endpoint, or a two-sided neighborhood otherwise. [F9] then gives a positive integral, contradicting zero norm. Therefore $h=0$. [F1, F7, F8, F9, F10, step 2.1, choose, algebra]

4.1 For any continuous $h$, if $\langle h,h\rangle_C=0$ but $h(\cos\theta_0)\ne0$ at some $\theta_0\in[0,\pi]$, continuity gives a one-sided interval at an endpoint, or a two-sided interval in the interior, on which $h(\cos\theta)^2$ is bounded below by a positive number. [F9] makes its integral positive, a contradiction. Thus $h(\cos\theta)=0$ for every $\theta$, and cosine maps $[0,\pi]$ onto $[-1,1]$, so $h=0$. Symmetry and bilinearity follow from the integral definition [F1] and linearity [F10], proving positive definiteness. [F1, F9, F10, given, algebra] ∎
