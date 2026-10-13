---
id: thm-nrqm-intervals-sine-on-completeness
aliases: [nrqm-intervals-and-contacts-sine-on-completeness]
kind: theorem
domain: mathematics
title: "Completeness of the Dirichlet sine system on an interval"
status: published
origin: pipeline
dependency_level: 1
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, thm-trigonometric-system-is-complete-in-l-two-of-the-torus, lem-trigonometric-characters-are-orthonormal, def-fourier-coefficients-and-trigonometric-polynomials, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-derivatives, thm-ftc-second-part, thm-quarter-turn-values-and-shift-formulas, thm-linear-change-of-variables-for-lebesgue-measure, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-monotone-convergence-for-the-integral, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-completion-measurable-functions-have-base-measurable-representatives, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  thm-trigonometric-system-is-complete-in-l-two-of-the-torus: mathematical-premise
  lem-trigonometric-characters-are-orthonormal: mathematical-premise
  def-fourier-coefficients-and-trigonometric-polynomials: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  thm-completion-measurable-functions-have-base-measurable-representatives: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.7 pp. 84-85 (Sobolev background only; the sine completeness proof uses the exact torus suppliers)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.6 pp. 231-233 (one-dimensional Dirichlet eigenfunction expansion and completeness of the sine system)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $0<L<\infty$ and let
$L^2(0,L;\mathbb C)$ be as in [[def-nrqm-intervals-hilbert-sobolev-spaces]].
Define, for $n\ge1$,
$e_n(x):=\sqrt{\frac2L}\,\sin\!\Bigl(\frac{n\pi x}{L}\Bigr),\qquad x\in[0,L].$
Then $(e_n)_{n\ge1}$ is an orthonormal family and a complete orthonormal
family (Hilbert basis) of $L^2(0,L;\mathbb C)$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]):
$\langle e_n,e_m\rangle=\delta_{nm},\qquad
\overline{\operatorname{span}}\{e_n:n\ge1\}=L^2(0,L;\mathbb C).$

## Facts & Assumptions

**Given:** $0<L<\infty$; the functions $e_n$; the $2L$-periodic characters $\xi_n(x):=e^{i\pi nx/L}$ for $n\in\mathbb Z$.

[F1] The characters $e_k$, $k\in\mathbb Z$, of [[def-fourier-coefficients-and-trigonometric-polynomials]] form an orthonormal basis of $L^2(\mathbb T;\mathbb C)$ for the one-dimensional torus $\mathbb T=\mathbb R/\mathbb Z$ with its normalized Haar measure ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[lem-trigonometric-characters-are-orthonormal]], [[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]]).

[F2] For an orthonormal family $(e_i)_{i\in I}$ in a Hilbert space $H$, the family is complete if and only if the only vector orthogonal to every $e_i$ is $0$; equivalently the closed span is $H$ and $\|x\|^2=\sum_i|\langle x,e_i\rangle|^2$ for every $x$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F3] Sine and cosine addition formulas give $2\sin a\sin b=\cos(a-b)-\cos(a+b)$; the derivatives are $\sin'=\cos$, $\cos'=-\sin$; the second fundamental theorem gives $\int_c^d\cos(\lambda t)\,dt=\lambda^{-1}(\sin(\lambda d)-\sin(\lambda c))$ for $\lambda\ne0$; and $\sin(k\pi)=0$, $\cos(k\pi)=(-1)^k$ for $k\in\mathbb Z$ ([[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-derivatives]], [[thm-ftc-second-part]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F4] For $\phi(t)=2Lt-L$, affine scaling and translation invariance of Lebesgue measure give $\lambda_1(\phi^{-1}(E))=(2L)^{-1}\lambda_1(E)$ for each Lebesgue-measurable $E\subseteq\mathbb R$ ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]). The resulting integral identity $\int_0^1H(2Lt-L)\,dt=(2L)^{-1}\int_{-L}^LH(x)\,dx$ holds first for indicators and simple functions, then for nonnegative measurable $H$ by increasing simple approximation and monotone convergence, and then for integrable complex $H$ by decomposing real and imaginary parts ([[thm-monotone-convergence-for-the-integral]]).

[F5] Lebesgue measure on $\mathbb R$ is the completion of its Borel restriction, and every real Lebesgue-measurable function has a Borel representative equal to it almost everywhere under Countable Choice ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-completion-measurable-functions-have-base-measurable-representatives]]). Apply this to both components to choose a Borel representative of a complex class.

[F6] $L^2(0,L;\mathbb C)$ is a complex Hilbert space with $\langle f,g\rangle=\int_0^Lf\overline g$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-nrqm-intervals-hilbert-sobolev-spaces]]); a complex class in $L^2$ has real and imaginary parts in $L^2$ and $\langle f,e_n\rangle=\langle\operatorname{Re}f,e_n\rangle+i\langle\operatorname{Im}f,e_n\rangle$ when $e_n$ is real-valued.

## Proof

1.1 [Orthonormality] For $n,m\ge1$, [F3] gives $2\sin(n\pi x/L)\sin(m\pi x/L)=\cos((n-m)\pi x/L)-\cos((n+m)\pi x/L)$. If $n\ne m$, then $n-m\ne0$ and $n+m\ne0$, and by [F3] $\int_0^L\cos\!\Bigl(\frac{k\pi x}{L}\Bigr)dx =\frac{L}{k\pi}\bigl(\sin(k\pi)-\sin0\bigr)=0\qquad(k\ne0),$ so $\langle e_n,e_m\rangle=0$. If $n=m$, the first cosine is $1$ and $\int_0^L(1-\cos(2n\pi x/L))dx=L$, so $\langle e_n,e_n\rangle =(2/L)\cdot(L/2)=1$. Hence $(e_n)$ is orthonormal. [F3, F6, algebra]

1.2 [Reduction to real-valued $f$] Let $f\in L^2(0,L;\mathbb C)$ satisfy $\langle f,e_n\rangle=0$ for all $n\ge1$. By [F6] write $f=f_1+if_2$ with real-valued $f_1,f_2\in L^2$; since each $e_n$ is real-valued, $0=\langle f,e_n\rangle=\langle f_1,e_n\rangle +i\langle f_2,e_n\rangle$, so both real parts have vanishing sine coefficients. It suffices to prove $f_1=f_2=0$; hence assume from now on that $f$ is real-valued with $\int_0^Lf(x)\sin(n\pi x/L)dx=0$ for all $n\ge1$. [F6, algebra]

2.1 [Odd extension] Define $g:(-L,L)\to\mathbb R$ by $g(x)=f(x)$ for $x\in(0,L)$, $g(x)=-f(-x)$ for $x\in(-L,0)$, and $g(0)=0$. Then $g$ is measurable, odd, and $\int_{-L}^{L}|g|^2=2\int_0^L|f|^2<\infty$, so $g\in L^2(-L,L)$ with exactly the same class as the odd extension. For every $n\in\mathbb Z$, $\int_{-L}^{L}g(x)e^{-i\pi nx/L}dx=0 .$ Indeed, writing $e^{-i\pi nx/L}=\cos(n\pi x/L)-i\sin(n\pi x/L)$, the product $g\cos(n\pi x/L)$ is odd, so its integral vanishes, while $g\sin(n\pi x/L)$ is even, so its integral equals $2\int_0^Lf(x)\sin(n\pi x/L)dx$, which is $0$ for $n\ge1$ by hypothesis and also for $n\le-1$ by oddness of sine; for $n=0$ the sine factor vanishes. [step 1.2, F3, algebra]

3.1 [Transport to the torus] By [F5], choose a Borel representative of the real-valued class $g$ and assign any values at the endpoints $\pm L$, which does not change its $L^2$ class. Define $G:\mathbb T\to\mathbb C$ using the unique representative $t\in[0,1)$ of each torus point by $G([t]):=g(2Lt-L)$. The representative map $[t]\mapsto t\in[0,1)$ is Borel: the quotient map restricts to a homeomorphism from $(0,1)$ onto $\mathbb T\setminus\{[0]\}$, and the remaining singleton is Borel; hence $G$ is measurable. The affine integral identity [F4] gives [step 2.1, F1, F4, F5, algebra]
$$\int_{\mathbb T}|G|^2dm_{\mathbb T}=\frac1{2L}\int_{-L}^L|g(x)|^2dx<\infty.$$
For $k\in\mathbb Z$, the substitution $x=2Lt-L$ gives $e^{-2\pi ikt}=e^{-i\pi k}e^{-i\pi kx/L}=(-1)^ke^{-i\pi kx/L}$; hence
$$\widehat G(k)=\frac{(-1)^k}{2L}\int_{-L}^Lg(x)e^{-i\pi kx/L}dx=0$$
by step 2.1. The harmless phase factor is retained explicitly. [step 2.1, F1, F3, F4, algebra]

4.1 [Conclusion] By [F1] the characters form an orthonormal basis of $L^2(\mathbb T)$, so by [F2] a vector with all Fourier coefficients zero is zero: $G=0$ in $L^2(\mathbb T;\mathbb C)$. Since $\varphi(t)=2Lt-L$ transports the fundamental interval onto $[-L,L)$ and the norm identity in step 3.1 is exact, $g=0$ almost everywhere on $(-L,L)$, hence $f=0$ almost everywhere on $(0,L)$. Therefore no nonzero class is orthogonal to all $e_n$, and [F2] makes $(e_n)_{n\ge1}$ complete. With step 1.1 this proves the statement. [step 1.1, step 3.1, F1, F2] ∎
