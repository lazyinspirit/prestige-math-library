---
id: thm-nrqm-orbital-and-spin-sphere-onb
aliases: [nrqm-orbital-and-spin-sphere-onb]
kind: theorem
domain: mathematics
title: "Sphere ONB"
status: draft
origin: pipeline
dependency_level: 3
deps: [thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-weighted-angular-completeness, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, def-polar-surface-measure-on-the-unit-sphere, lem-trigonometric-characters-are-orthonormal, cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions, lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, cor-cauchy-schwarz-inequality-for-l-two, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-complex-exponential, def-countable-choice]
dependency_roles:
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-weighted-angular-completeness: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  lem-trigonometric-characters-are-orthonormal: mathematical-premise
  cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions: mathematical-premise
  lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text, Chapter 5, printed pp. 77-83 (Theorem 5.12: L2(S) is the orthogonal direct sum of the spaces of spherical harmonics)"
      url: "https://www.axler.net/HFT.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §14.30 'Spherical and Spheroidal Harmonics' (surface harmonics Y(l,m) and their orthonormality and completeness)"
      url: "https://dlmf.nist.gov/14.30"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $\sigma$ be the polar surface measure on
$S^2$ ([[def-polar-surface-measure-on-the-unit-sphere]]) and let $(Y_{lm})_{l\ge0,\ -l\le m\le l}$ be the
functions of [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] ([[def-complex-exponential]]).
Then $(Y_{lm})$ is a complete orthonormal family of the complex Hilbert space $L^2(S^2,\sigma)$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-l-p-space-as-a-quotient-by-null-functions]]):
the family is orthonormal, and if $F\in L^2(S^2,\sigma)$ satisfies
$\int_{S^2}F\overline{Y_{lm}}\,d\sigma=0$ for all $l\ge0$ and $-l\le m\le l$, then $F=0$ almost everywhere.
Consequently every $F$ has the expansion
$$F=\sum_{l=0}^\infty\sum_{m=-l}^{l}\langle F,Y_{lm}\rangle Y_{lm},\qquad \|F\|^2=\sum_{l,m}|\langle F,Y_{lm}\rangle|^2,$$
with $\langle F,Y_{lm}\rangle=\int_{S^2}F\overline{Y_{lm}}\,d\sigma$ and finite-subset-net convergence
([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

## Facts & Assumptions

**Given:** the measure $\sigma$ on $S^2$; the functions $Y_{lm}=b_{lm}w_{l|m|}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$ with the convention $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$; a function $F\in L^2(S^2,\sigma)$.

[F1] Orthonormality of the family $(Y_{lm})$ in $L^2(S^2,\sigma)$ ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] (d)).

[F2] Angle coordinates: $\int_{S^2}G\,d\sigma=\int_{(0,\pi)\times(0,2\pi)}G(\Phi(\theta,\varphi))\sin\theta\,d(\theta,\varphi)$ for $G\in L^1$, with $\Phi(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ ([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]).

[F3] Weighted completeness: for each $k\in\mathbb N$, if $h\in L^2((-1,1),dt)$ satisfies $\int_{-1}^1h(t)w_{lk}(t)\,dt=0$ for all $l\ge k$, then $h=0$ a.e. ([[thm-nrqm-orbital-and-spin-weighted-angular-completeness]] (b)).

[F4] The characters $e_k(\varphi)=e^{ik\varphi}$, $k\in\mathbb Z$, are orthonormal in $L^2((0,2\pi),d\varphi)$, and their linear span is dense: trigonometric polynomials are uniformly dense in the continuous periodic functions ([[cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions]]), and continuous functions on $[0,2\pi]$ with equal endpoint values are dense in $L^2((0,2\pi))$ ([[lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]], [[lem-trigonometric-characters-are-orthonormal]]); hence if $h\in L^2((0,2\pi))$ has $\int_0^{2\pi}h(\varphi)e^{-ik\varphi}\,d\varphi=0$ for every $k\in\mathbb Z$, then $h=0$ a.e.

[F5] Tonelli's and Fubini's theorems identify the rectangle integral in [F2] with iterated integrals, for nonnegative and for $L^1$ integrands ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] If $\int_{S^2}|F|^2\,d\sigma<\infty$, then by [F2] and [F5] the iterated integral $\int_0^\pi\int_0^{2\pi}|F(\Phi(\theta,\varphi))|^2\sin\theta\,d\varphi\,d\theta$ is finite, so for almost every $\theta$ the function $\varphi\mapsto F(\Phi(\theta,\varphi))$ lies in $L^2((0,2\pi))$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F7] $|\int g\overline h|\le\|g\|_2\|h\|_2$ and vanishing of all pairings against a dense family forces vanishing ([[cor-cauchy-schwarz-inequality-for-l-two]]).



## Proof

1.1 [Completeness: Fourier coefficients along the circles] Suppose $F\in L^2(S^2,\sigma)$ is orthogonal to every $Y_{lm}$, and for $k\in\mathbb Z$ and $\theta\in(0,\pi)$ define $G_k(\theta):=\frac1{\sqrt{2\pi}}\int_0^{2\pi}F(\Phi(\theta,\varphi))e^{-ik\varphi}\,d\varphi$; by [F6] and Cauchy–Schwarz [F7] each $G_k$ is defined for almost every $\theta$, and $\int_0^\pi|G_k(\theta)|^2\sin\theta\,d\theta\le\int_0^\pi\int_0^{2\pi}|F(\Phi(\theta,\varphi))|^2\,d\varphi\,\sin\theta\,d\theta<\infty$, so $G_k\in L^2(\sin\theta\,d\theta)$ and, after the reparametrisation $t=\cos\theta$, $G_k\in L^2((-1,1),dt)$. For $l\ge k\ge0$, [F2] and [F5] compute $\langle F,Y_{lk}\rangle=b_{lk}\int_0^\pi G_k(\theta)w_{lk}(\cos\theta)\sin\theta\,d\theta=b_{lk}\int_{-1}^1G_k(t)w_{lk}(t)\,dt$; hence $\int_{-1}^1G_k(t)w_{lk}(t)\,dt=0$ for every $l\ge k$, and by [F3] $G_k=0$ almost everywhere for every $k\ge0$. For $k<0$ write $m:=-k>0$; the convention gives $\overline{Y_{l,-m}}=(-1)^mY_{lm}$, so orthogonality of $F$ to $Y_{l,-m}$ gives $0=(-1)^m\int_{S^2}F\,Y_{lm}\,d\sigma$, whose rectangle form is $b_{lm}\int_0^\pi G_{-m}(\theta)w_{lm}(\cos\theta)\sin\theta\,d\theta$ with $0\le m\le l$; by [F3] again, $G_{-m}=G_k=0$ almost everywhere. So all circle Fourier coefficients of $F$ vanish for almost every $\theta$. [given, F2, F3, F5, F6, F7, algebra]

2.1 [Completeness: vanishing on the spheres] By [F4] applied to the $L^2((0,2\pi))$-function $\varphi\mapsto F(\Phi(\theta,\varphi))$, which exists for almost every $\theta$ by [F6] and has all Fourier coefficients zero by step 1.1, one has $F(\Phi(\theta,\varphi))=0$ for almost every $\varphi$ and almost every $\theta$; hence $F\circ\Phi=0$ almost everywhere on the rectangle, and by [F2] (which for the nonnegative function $|F|$ identifies $\int_{S^2}|F|\,d\sigma$ with the rectangle integral) $F=0$ almost everywhere on $S^2$. [step 1.1, F2, F4, F6, algebra]

3.1 [The expansion] By [F1] the family is orthonormal, and by steps 1.1 and 2.1 it is complete; the expansion, Parseval identity and coefficient formula are the Hilbert-basis statements of [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]] and [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], with finite-subset-net convergence. [step 2.1, F1, F7, algebra] ∎
