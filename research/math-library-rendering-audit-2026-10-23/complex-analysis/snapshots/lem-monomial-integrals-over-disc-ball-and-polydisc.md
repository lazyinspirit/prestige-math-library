---
id: lem-monomial-integrals-over-disc-ball-and-polydisc
kind: lemma
title: Weighted monomial integrals and monomial norms for the disc, ball and polydisc
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 0
proof_strategy: direct
deps:
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-borel-sigma-algebra
  - def-ck-and-multi-index-notation-in-several-variables
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-complex-integer-powers
  - def-countable-choice
  - def-factorial-and-falling-factorial
  - def-polar-surface-measure-on-the-unit-sphere
  - def-measurable-function-between-measurable-spaces
  - def-real-beta-integral
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - cor-real-gamma-positive-integer-values
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - rem-complex-euclidean-space-dictionary
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-induction-principle
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-monotone-convergence-for-the-integral
  - thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - thm-nth-roots-exist
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-real-beta-gamma-identity
  - thm-real-beta-integral-convergence
  - thm-substitution-for-improper-integrals
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: "§5.2, Exercise 5.2.9, printed p. 164 (PDF p. 164): asks for the complete orthogonal monomial system on the ball and points to coordinatewise polar integration; the exact norm constant is said to require the Beta function, which is evaluated locally here."
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: "§1, printed p. 3 (PDF p. 3): records the unit-ball volume $\\lambda(B)=\\pi^m/m!$ and poses the orthonormal monomial system as an exercise; the volume and monomial integrals are derived locally here."
---

## Facts & Assumptions

**Given:** An integer $m\ge1$, the Axiom of Countable Choice $\mathrm{AC}_\omega$, and a multi-index $\alpha=(\alpha_0,\ldots,\alpha_{m-1})\in\mathbb N^m$. Write $\alpha!:=\prod_{j<m}\alpha_j!$, $|\alpha|:=\sum_{j<m}\alpha_j$, and $z^\alpha:=\prod_{j<m}z_j^{\alpha_j}$ using the conventions of [[def-ck-and-multi-index-notation-in-several-variables]] and [[def-complex-integer-powers]].

For $d\ge1$, $\beta\in\mathbb N^d$ and $t\in\mathbb N$, write $I_d(\beta,t):=\int_{\mathbb B^d}|z^\beta|^2(1-|z|^2)^t\,d\lambda_{2d}(z)$.

[A1] The only choice principle assumed is $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It is required by the polar-coordinate, chart/polar surface, sigma-finiteness and product-Lebesgue suppliers below; no full Axiom of Choice or arbitrary-index selection is used.

[F1] The complex-real identification and Euclidean norm are those of [[rem-complex-euclidean-space-dictionary]], and the open unit ball $\mathbb B^m$ and open unit polydisc $\mathbb D^m$ are those of [[def-balls-and-polydiscs-in-complex-euclidean-space]].

[F2] For every nonnegative Borel function on $\mathbb R^n$, polar coordinates give $\int f\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}f(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$ ([[def-polar-surface-measure-on-the-unit-sphere]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] On each angular chart $X(\theta)=(\cos\theta,\sin\theta)$ of $S^1$, the derivative has norm $1$, so the surface density is $1$; summing a partition of unity over one full turn gives chart surface measure $\int_0^{2\pi}1\,d\theta=2\pi$. The chart surface measure equals the polar measure $\sigma$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F4] For $p,q>0$, the Euler Beta integral is $B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}\,dt$ and converges ([[def-real-beta-integral]], [[thm-real-beta-integral-convergence]]); change of variables is valid on the improper interval after compact truncation ([[thm-substitution-for-improper-integrals]]).

[F5] The Beta-Gamma identity is $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$, and $\Gamma(n+1)=n!$ for every $n\in\mathbb N$ ([[thm-real-beta-gamma-identity]], [[cor-real-gamma-positive-integer-values]], [[def-factorial-and-falling-factorial]]).

[F6] Nonnegative product-measurable functions satisfy Tonelli's iterated-integral identity on sigma-finite measure spaces; under $\mathrm{AC}_\omega$, product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel sets, and equality of these measures gives equality of nonnegative integrals by simple approximation and monotone convergence ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]], [[thm-monotone-convergence-for-the-integral]]).

[F7] In real coordinates the displayed integrands are nonnegative polynomials times indicators of open balls or polydiscs. Finite sums and products of coordinate polynomials are continuous by the $C^k$ algebra theorem; the preimage criterion makes continuous maps Borel measurable, and products of measurable functions remain measurable ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-borel-sigma-algebra]], [[def-measurable-function-between-measurable-spaces]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F8] A nonnegative real has a unique nonnegative square root ([[thm-nth-roots-exist]]).

[F10] Induction on the positive integer dimension is valid ([[thm-induction-principle]]).

[F9] Multi-indices, their factorials and lengths, and complex nonnegative integer powers have the conventions used in the statement ([[def-ck-and-multi-index-notation-in-several-variables]], [[def-factorial-and-falling-factorial]], [[def-complex-integer-powers]]).

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $m\ge1$, and let $\lambda_{2m}$ be Lebesgue measure under $\mathbb C^m\cong\mathbb R^{2m}$. For every $\alpha\in\mathbb N^m$ and every integer $s\ge0$,

$$\int_{\mathbb B^m}|z^\alpha|^2(1-|z|^2)^s\,d\lambda_{2m}(z)=\frac{\pi^m\alpha!\,s!}{(m+s+|\alpha|)!}.$$

In particular,

$$\int_{\mathbb B^m}|z^\alpha|^2\,d\lambda_{2m}(z)=\frac{\pi^m\alpha!}{(m+|\alpha|)!},\qquad \lambda_{2m}(\mathbb B^m)=\frac{\pi^m}{m!}.$$

For the unit polydisc and the one-dimensional disc,

$$\int_{\mathbb D^m}|z^\alpha|^2\,d\lambda_{2m}(z)=\frac{\pi^m}{\prod_{j<m}(\alpha_j+1)},\qquad \lambda_{2m}(\mathbb D^m)=\pi^m,$$

and for every integer $k\ge0$,

$$\int_{\mathbb D}|z|^{2k}\,d\lambda_2(z)=\frac{\pi}{k+1}.$$

## Proof

**Proof technique:** direct, using a one-variable polar integral and induction by slicing the ball.

**Given:** $m\ge1$, $\mathrm{AC}_\omega$, and $\alpha\in\mathbb N^m$; the indices in $z^\alpha$ use the zero-based convention in [F1] and [F9].

1.1 For integers $k,s\ge0$ and $\rho>0$, let $J_{k,s}(\rho):=\int_{|w|<\rho}|w|^{2k}(\rho^2-|w|^2)^s\,d\lambda_2(w)$. The integrand extended by zero outside the disc is nonnegative Borel by [F7]. By [F2] and [F3], $J_{k,s}(\rho)=2\pi\int_0^\rho r^{2k+1}(\rho^2-r^2)^s\,dr$. [A1, F2, F3, F7, given]

2.1 The substitution $t=(r/\rho)^2$ is increasing from $(0,\rho)$ onto $(0,1)$ and has $r\,dr=\rho^2dt/2$. Thus [F4] gives $J_{k,s}(\rho)=\pi\rho^{2(k+s+1)}B(k+1,s+1)$. [F4, step 1.1, given, algebra]

3.1 By [F5], $B(k+1,s+1)=\Gamma(k+1)\Gamma(s+1)/\Gamma(k+s+2)=k!s!/(k+s+1)!$. Hence $J_{k,s}(\rho)=\pi\rho^{2(k+s+1)}k!s!/(k+s+1)!$. [F5, step 2.1, given, algebra]

4.1 In dimension $m=1$, writing $\alpha=(k)$ and taking $\rho=1$ in step 3.1 gives $I_1((k),s)=\pi k!s!/(k+s+1)!$, the asserted formula. [F1, F9, step 3.1, given]

4.2 Fix $m\ge2$ and assume the ball formula in dimension $m-1$ for all multi-indices and nonnegative integer weights. Write $\alpha=(\alpha',k)$ and slice $\mathbb B^m\subseteq\mathbb C^{m-1}\times\mathbb C$ at $z'\in\mathbb B^{m-1}$; its last-coordinate slice is $|w|<\rho(z')$, where $\rho(z')=(1-|z'|^2)^{1/2}>0$ by [F8]. For $z'\notin\mathbb B^{m-1}$ the slice is empty. By Tonelli, product-Lebesgue agreement, and step 3.1, $I_m(\alpha,s)=\frac{\pi k!s!}{(k+s+1)!}I_{m-1}(\alpha',k+s+1)$. [A1, F1, F6, F7, F8, F9, step 3.1, given]

4.3 The unit polydisc is the product of $m$ unit discs and $|z^\alpha|^2=\prod_{j<m}|z_j|^{2\alpha_j}$. Repeated application of Tonelli and product-Lebesgue agreement, followed by step 3.1 with $s=0$ and $\rho=1$ in each coordinate, gives $\int_{\mathbb D^m}|z^\alpha|^2\,d\lambda_{2m}=\prod_{j<m}\pi/(\alpha_j+1)=\pi^m/\prod_{j<m}(\alpha_j+1)$. [A1, F1, F6, F7, F9, step 3.1, given]

5.1 Substitution of the induction hypothesis into step 4.2 gives $I_m(\alpha,s)=\frac{\pi k!s!}{(k+s+1)!}\cdot\frac{\pi^{m-1}\alpha'!(k+s+1)!}{(m+s+k+|\alpha'|)!}=\frac{\pi^m\alpha!s!}{(m+s+|\alpha|)!}$, since $\alpha!=\alpha'!k!$ and $|\alpha|=|\alpha'|+k$. The base case step 4.1 and this induction step prove the weighted ball formula in every positive dimension by [F10]. [F9, F10, step 4.1, step 4.2, given, algebra, discharge-induction]

6.1 Setting $s=0$ in the ball formula gives its unweighted monomial integral; setting also $\alpha=0$ gives $\lambda_{2m}(\mathbb B^m)=\pi^m/m!$. Setting $\alpha=0$ in step 4.3 gives $\lambda_{2m}(\mathbb D^m)=\pi^m$, and the case $m=1$, $s=0$, $\alpha=(k)$ in the ball formula gives the stated disc integral. [F9, step 5.1, step 4.3, given] ∎
