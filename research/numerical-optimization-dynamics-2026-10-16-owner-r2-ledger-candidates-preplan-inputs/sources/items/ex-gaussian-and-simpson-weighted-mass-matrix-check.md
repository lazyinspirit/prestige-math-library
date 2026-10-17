---
id: ex-gaussian-and-simpson-weighted-mass-matrix-check
kind: example
title: "Gaussian and Simpson mass assembly give distinct exact and approximate checks"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: spectral-collocation-and-galerkin-methods-examples
dependency_level: 10
deps: [def-countable-choice, def-gauss-moment-data, thm-monic-gauss-orthogonal-polynomials-exist-uniquely, def-gauss-quadrature-rule, thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-measure-of-a-box-of-every-kind, thm-continuous-implies-integrable, thm-ftc-second-part, lem-derivative-of-a-power, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-subspace-topology-top, def-metric-topology, thm-gaussian-orthogonal-polynomial-galerkin-mass-matrix-exact, alg-gaussian-orthogonal-polynomial-galerkin-mass-matrix, def-legendre-polynomial-family-and-l2-pairing, lem-legendre-weighted-derivative-orthogonality-and-norm, def-chebyshev-arcsine-weighted-l2-pairing, lem-chebyshev-polynomials-orthogonal-in-arcsine-weight, alg-chebyshev-composite-simpson-weighted-mass-matrix, thm-composite-simpson-error-for-chebyshev-weighted-mass-matrix, thm-quarter-turn-values-and-shift-formulas, thm-chebyshev-multiple-angle-identities]
proof_strategy: direct
axiom_use: "Countable Choice is used for Lebesgue interval measure and Riemann–Lebesgue agreement in the locally verified two-node Gaussian instance. The Simpson calculation is choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
      locator: "§2.1 on positive-measure Gaussian quadrature; two-node Gauss–Legendre rule."
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, §7.2"
      url: "https://artowen.su.domains/mc/Ch-quadrature.pdf"
      locator: "Chapter 7, §7.2; composite Simpson rule and fourth-derivative error bound."
generation:
  role: example
---

## Example

Assume Countable Choice for the Lebesgue measure construction. For the degree-one monic Legendre basis $P_0=1,P_1=x$ on $[-1,1]$, the two-node Gaussian mass matrix is $\operatorname{diag}(2,2/3)$. For the Chebyshev arcsine pairing, composite Simpson with two panels gives
$$
M^S=\begin{pmatrix}\pi&0\\0&\pi/3\end{pmatrix},\qquad
G=\begin{pmatrix}\pi&0\\0&\pi/2\end{pmatrix}.
$$
The Simpson error in the $(1,1)$ entry is $\pi/6$ and satisfies the itemwise error estimate.

## Facts & Assumptions

**Given:** Countable Choice, Lebesgue measure on $[-1,1]$, its two-node Gauss–Legendre rule, and the Chebyshev pairing sampled by two-panel composite Simpson.

[A1] [[def-countable-choice]]: Countable Choice is assumed for the Lebesgue measure construction and Riemann–Lebesgue agreement used in the local two-node Gaussian calculation.

[F1] [[def-gauss-moment-data]], [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]], [[def-gauss-quadrature-rule]], and [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: valid order-three moment data for $m=2$ give the unique monic orthogonal polynomial, its two root nodes, cardinal-integral weights, and exactness through degree three.

[F2] [[lem-legendre-weighted-derivative-orthogonality-and-norm]]: $\int_{-1}^1P_0^2=2$, $\int_{-1}^1P_0P_1=0$, and $\int_{-1}^1P_1^2=2/3$.

[F3] [[alg-gaussian-orthogonal-polynomial-galerkin-mass-matrix]] and [[thm-gaussian-orthogonal-polynomial-galerkin-mass-matrix-exact]]: the mass entries are Gaussian sums and equal the corresponding exact polynomial integrals.

[F4] [[def-chebyshev-arcsine-weighted-l2-pairing]]: $G_{ij}=\int_0^\pi T_i(\cos\theta)T_j(\cos\theta)\,d\theta$ for $i,j\in\{0,1\}$.

[F5] [[alg-chebyshev-composite-simpson-weighted-mass-matrix]]: for two panels, $M^S_{ij}=\frac\pi6(g_{ij}(0)+4g_{ij}(\pi/2)+g_{ij}(\pi))$.

[F6] [[thm-composite-simpson-error-for-chebyshev-weighted-mass-matrix]]: $|G_{ij}-M^S_{ij}|\le\pi h^4(i+j)^4/180$ for even panel count and $h=\pi/M$.

[F7] [[lem-chebyshev-polynomials-orthogonal-in-arcsine-weight]]: the exact mass matrix for $T_0,T_1$ is $\operatorname{diag}(\pi,\pi/2)$.

[F8] [[thm-quarter-turn-values-and-shift-formulas]]: $\cos0=1$, $\cos(\pi/2)=0$, and $\cos\pi=-1$.

[F9] [[thm-chebyshev-multiple-angle-identities]]: $T_i(\cos\theta)=\cos(i\theta)$ for $i=0,1$.

[F10] [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-borel-sets-are-lebesgue-measurable]], and [[thm-lebesgue-measure-of-a-box-of-every-kind]]: under Countable Choice, restriction to the relative Borel sets of $[-1,1]$ is a positive measure, interval measure equals length, and positive-length intervals have positive measure. [[def-subspace-topology-top]] and [[def-metric-topology]] identify relative neighborhoods with intersections of open real neighborhoods.

[F11] [[thm-continuous-implies-integrable]], [[lem-derivative-of-a-power]], [[thm-ftc-second-part]], and [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: continuous polynomial integrands on $[-1,1]$ are integrable, their ordinary integrals are evaluated by polynomial primitives, and under Countable Choice those values equal the Lebesgue integrals.

[F12] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: finite linear combinations of integrable polynomial functions may be integrated termwise.

## Proof

1.1 Under [A1], let $\mu$ be Lebesgue measure restricted to the relative Borel sets of $[-1,1]$. It is a positive measure with total mass $2$ by [F10]. Every relative open neighborhood of a point of $[-1,1]$ contains a positive-length interval, including a one-sided interval at either endpoint, so [F10] and measure monotonicity give that neighborhood positive measure. Thus the relative support is all of $[-1,1]$, containing at least three points. Every $|x|^k$ for $0\le k\le3$ is continuous and bounded on $[-1,1]$, so [F11] gives its integrability. These are exactly the order-three, $m=2$ moment-data conditions in [F1]. The primitives $x,x^2/2,x^3/3,x^4/4$ give moments $\mu_0=2,\mu_1=0,\mu_2=2/3,\mu_3=0$ by [F11]. [A1, F1, F10, F11, algebra]

1.2 By [F9], $g_{00}=1$, $g_{01}=\cos\theta$, and $g_{11}=\cos^2\theta$. Substitution of the quarter-turn values [F8] into [F5] gives $M^S_{00}=\pi$, $M^S_{01}=0$, and $M^S_{11}=\pi/3$. The exact mass matrix is $G=\operatorname{diag}(\pi,\pi/2)$ by [F7]. [F4, F5, F7, F8, F9, algebra]

2.1 The monic polynomial $p_2(x)=x^2-1/3$ is orthogonal to $1$ and $x$, since $\mu_2-\mu_0/3=0$ and $\mu_3-\mu_1/3=0$ by step 1.1 and [F12]. Finite linearity extends this to every polynomial of degree below two, so uniqueness in [F1] identifies $p_2$ with the Gaussian orthogonal polynomial. Its nodes are $x_1=-1/\sqrt3$ and $x_2=1/\sqrt3$. Their cardinal polynomials are $\ell_1(x)=(1-\sqrt3x)/2$ and $\ell_2(x)=(1+\sqrt3x)/2$, so [F12] and the first two moments give $w_1=w_2=1$. The rule Definition and exactness theorem in [F1] therefore give $Q_2(f)=f(-1/\sqrt3)+f(1/\sqrt3)$, exact for degrees through three. [F1, F12, step 1.1, algebra]

3.1 The Gaussian sum for the basis $1,x$ is $\begin{pmatrix}1&-1/\sqrt3\\1&1/\sqrt3\end{pmatrix}^{\!T} \begin{pmatrix}1&0\\0&1\end{pmatrix} \begin{pmatrix}1&-1/\sqrt3\\1&1/\sqrt3\end{pmatrix} =\begin{pmatrix}2&0\\0&2/3\end{pmatrix}.$ The entries agree with exact integrals by [F2], as also asserted by [F3]. [A1, F1, F2, F3, step 2.1, algebra]

4.1 The only nonzero entry error is $|G_{11}-M^S_{11}|=\pi/6$. The Simpson theorem [F6] applies with $M=2$, $h=\pi/2$, and $i=j=1$, and gives its bound $\pi^5/180$. Therefore the displayed finite calculation matches the general entrywise estimate. [F6, step 1.2, algebra] ∎
