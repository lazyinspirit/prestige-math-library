---
id: lem-chebyshev-cardinal-polynomial-formulas
kind: lemma
title: "Trigonometric formulas for Chebyshev cardinal polynomials"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - lem-cardinal-lagrange-interpolation-and-operator-norm
  - def-chebyshev-polynomials-first-and-second-kind
  - thm-chebyshev-multiple-angle-identities
  - lem-chebyshev-degree-leading-coefficients-and-extreme-values
  - thm-chain-rule
  - thm-sine-and-cosine-derivatives
  - thm-algebra-of-derivatives
  - lem-derivative-of-a-power
  - lem-real-polynomial-factor-at-a-root
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chs. 2–5"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Ch. 2, printed pp. 8–12; Ch. 3, pp. 14–15; Ch. 5, pp. 34–37"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Polynomial interpolation"
      url: "https://fncbook.com/polyinterp/"
      locator: "Complete article, Definition 2.1.1 and §2.1.1"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $n\geq1$, $0\leq\theta\leq\pi$, and choose $j$ so
$\theta\ne\theta_j^{R,n}$. Then
$$|\ell_{j,n}^{R}(\cos\theta)| =\frac{|\cos((n+1)\theta)|\sin\theta_j^{R,n}} {(n+1)|\cos\theta-\cos\theta_j^{R,n}|}.$$
For the Lobatto family, put $c_j=1/2$ for $j=0,n$ and $c_j=1$
otherwise. If $\theta\ne\theta_j^{L,n}$, then
$$|\ell_{j,n}^{L}(\cos\theta)| =\frac{c_j|\sin\theta\,\sin(n\theta)|} {n|\cos\theta-\cos\theta_j^{L,n}|}.$$

## Facts & Assumptions
**Given:** $n\geq1$, $0\leq\theta\leq\pi$, and one of the node families.

[F1] [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]] defines the nodes and cardinal polynomials.

[F2] [[lem-cardinal-lagrange-interpolation-and-operator-norm]]: these nodes are distinct and their cardinal polynomials are the unique degree-at-most-$n$ polynomials with the cardinal values.

[F3] [[thm-chebyshev-multiple-angle-identities]]: $T_m(\cos\theta)=\cos(m\theta)$ and $U_m(\cos\theta)\sin\theta=\sin((m+1)\theta)$.

[F4] [[def-chebyshev-polynomials-first-and-second-kind]] and [[lem-chebyshev-degree-leading-coefficients-and-extreme-values]]: $T_m$ and $U_m$ have degree $m$ for $m\geq1$; $U_0=1$ has degree $0$.

[F5] [[thm-chain-rule]], [[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]], and [[lem-derivative-of-a-power]]: polynomial functions and sine/cosine are differentiable, and the chain and product rules compute their derivatives.

[F6] [[lem-real-polynomial-factor-at-a-root]]: a polynomial that vanishes at $a$ factors as $(x-a)q(x)$.

[F7] [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], and [[thm-sine-and-cosine-derivatives]]: $\sin\theta>0$ for $0<\theta<\pi$, while $\sin0=\sin\pi=0$ and $\cos\pi=-1$.

## Proof

1.1 Put $N=n+1$ and $\theta_j=(2j+1)\pi/(2N)$. By [F3], $T_N(\cos\theta_j)=0$. Differentiating $T_N(\cos\theta)=\cos(N\theta)$ using [F4]–[F5] gives $\sin\theta\,T_N'(\cos\theta)=N\sin(N\theta)$, hence $T_N'(\cos\theta_j)=N(-1)^j/\sin\theta_j\ne0$ by [F7]. [given, F3, F4, F5, F7, algebra]

1.2 Set $\omega_n(x)=(x^2-1)U_{n-1}(x)$. By [F3], $\omega_n(\cos\theta)=-\sin\theta\sin(n\theta)$, so it vanishes at every Lobatto node; its degree is $n+1$ by [F4]. For an interior node $\theta_j=j\pi/n$, differentiating this identity gives $-\sin\theta_j\,\omega_n'(x_j)=-n\sin\theta_j(-1)^j$, hence $\omega_n'(x_j)=n(-1)^j$ by [F7]. [given, F3, F4, F5, F7, algebra]

1.3 Differentiating $U_{n-1}(\cos\theta)\sin\theta=\sin(n\theta)$ at $\theta=0,\pi$ gives $U_{n-1}(1)=n$ and $U_{n-1}(-1)=(-1)^{n-1}n$ by [F7]. The product rule then gives $\omega_n'(1)=2n$ and $\omega_n'(-1)=2n(-1)^n$, so at every Lobatto node $\omega_n'(x_j)=n(-1)^j/c_j$. [given, F3, F4, F5, F7, algebra]

2.1 By [F6], $T_N(x)/(x-x_j)$ is a polynomial. Writing $T_N=(x-x_j)Q_j$ and differentiating gives $Q_j(x_j)=T_N'(x_j)$; at every other node $Q_j$ vanishes. Therefore $Q_j/T_N'(x_j)$ is a degree-at-most-$n$ cardinal polynomial, which equals $\ell_{j,n}^R$ by uniqueness [F2]. Substitution of $x=\cos\theta$ and [F3] gives the first formula. [given, F1, F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 By [F6], write $\omega_n(x)=(x-x_j)Q_j(x)$ with $Q_j$ a polynomial. Differentiating this factorization gives $Q_j(x_j)=\omega_n'(x_j)$; at every other Lobatto node $Q_j$ vanishes because $\omega_n$ does. Thus $Q_j/\omega_n'(x_j)$ is a degree-at-most-$n$ cardinal polynomial, hence $\ell_{j,n}^L$ by [F2]. Substitution of $\omega_n(\cos\theta)=-\sin\theta\sin(n\theta)$ and $|\omega_n'(x_j)|=n/c_j$ gives the second formula. [given, F1, F2, F3, F4, F6, step 1.2, step 1.3, algebra] ∎
