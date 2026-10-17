---
id: ex-two-node-gauss-legendre-exact-through-degree-three
kind: example
title: The two-node Gauss–Legendre rule is exact through degree three
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - def-gauss-moment-data
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - def-gauss-quadrature-rule
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - lem-gauss-monic-three-term-recurrence
  - thm-jacobi-matrix-spectrum-equals-gauss-nodes
  - thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-borel-sets-are-lebesgue-measurable
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - lem-derivative-of-a-power
  - def-countable-choice
  - def-gauss-moment-data
  - def-subspace-topology-top
  - def-metric-topology
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Example

Assume the Axiom of Countable Choice and take Lebesgue measure restricted to
the relative Borel sets of $[-1,1]$. Its relative support is all of $[-1,1]$,
so it gives order-three moment data for $m=2$. The moments are
$\mu_0=2$, $\mu_1=0$, $\mu_2=2/3$, and $\mu_3=0$. The monic orthogonal
polynomials through degree two are $p_0=1$, $p_1=X$, and
$p_2=X^2-1/3$. Thus the Gaussian nodes are
$x_1=-1/\sqrt3$ and $x_2=1/\sqrt3$.

The Jacobi matrix is
$$ J_2=\begin{pmatrix}0&1/\sqrt3\\1/\sqrt3&0\end{pmatrix}. $$
Its unit eigenvectors $(1,-1)/\sqrt2$ and $(1,1)/\sqrt2$ give weights
$w_1=w_2=\mu_0/2=1$. Therefore
$$ Q_2(f)=f(-1/\sqrt3)+f(1/\sqrt3) $$
is exact for every real polynomial of degree at most three.

## Facts & Assumptions

**Given:** Countable choice and Lebesgue measure on $[-1,1]$ restricted to
relative Borel sets.

[A1] [[def-countable-choice]]: the Axiom of Countable Choice is assumed for
the Lebesgue measure and Riemann–Lebesgue results used in this example.

[F1] [[def-countable-choice]],
[[thm-lebesgue-measure-is-a-complete-measure]], and
[[thm-borel-sets-are-lebesgue-measurable]]: under countable choice, the
restriction is a positive measure on the relative Borel sets.

[F2] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: a closed interval has
measure its length; every positive-length subinterval of $[-1,1]$ has positive
measure.

[F3] [[thm-continuous-implies-integrable]], [[thm-ftc-second-part]],
[[lem-derivative-of-a-power]], and
[[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]:
under countable choice, the Lebesgue moments of $1,x,x^2,x^3$ equal their
ordinary integrals, which can be evaluated by polynomial primitives.

[F4] [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]]: checking the
orthogonality equations identifies the monic polynomials uniquely.

[F5] [[lem-gauss-monic-three-term-recurrence]]: the normalized recurrence
coefficients form the displayed symmetric Jacobi matrix.

[F6] [[thm-jacobi-matrix-spectrum-equals-gauss-nodes]]: its eigenvalues are
the Gaussian nodes.

[F7] [[thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared]]:
a unit eigenvector at a node gives weight $\mu_0$ times the square of its
first coordinate.

[F8] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]:
the two-node rule is exact through degree $3$.

[F9] [[def-subspace-topology-top]] and [[def-metric-topology]]: every relative
open neighborhood contains the intersection of $[-1,1]$ with an open metric
ball about its point.

## Proof

1.1 For $x\in[-1,1]$, [F9] gives an $\varepsilon>0$ such that $(x-\varepsilon,x+\varepsilon)\cap[-1,1]$ lies in any chosen relative open neighborhood $U$ of $x$. Choose a closed interval $I$ of positive length inside that intersection, using a one-sided interval when $x$ is an endpoint. Then $I$ is relative Borel and [F2] gives $\mu(I)>0$. Since $U=I\sqcup(U\setminus I)$ and both sets are relative Borel, countable additivity and nonnegativity from [F1] imply $\mu(U)\ge\mu(I)>0$. Thus every $x$ lies in the relative support, which has at least three points. [A1, F1, F2, F9, choose, algebra]

1.2 The functions $1,x,x^2,x^3$ are continuous, hence Riemann integrable by [F3]. Their primitives $x,x^2/2,x^3/3,x^4/4$, evaluated at $-1$ and $1$, give respectively $2,0,2/3,0$. The Riemann–Lebesgue equality in [F3] gives the stated moment values. [A1, F3, algebra]

2.1 The monic polynomials $1$ and $X$ are orthogonal in the required degrees: $\int x\,d\mu=0$. The monic polynomial $X^2-1/3$ is orthogonal to $1$ because $\mu_2-(1/3)\mu_0=0$, and to $X$ because $\mu_3-(1/3)\mu_1=0$. Uniqueness [F4] identifies $p_0,p_1,p_2$ as stated. Its roots are $\pm1/\sqrt3$. [F3, F4, step 1.2, algebra]

2.2 Here $h_0=\mu_0=2$, $h_1=\int x^2\,d\mu=2/3$, and both recurrence diagonal entries are zero by the odd moments. Hence $\beta_1=h_1/h_0=1/3$, and [F5] gives the displayed $J_2$. Direct multiplication shows its two displayed unit eigenvectors have eigenvalues $-1/\sqrt3$ and $1/\sqrt3$; [F6] identifies those as the Gaussian nodes. [F3, F5, step 1.2, algebra]

3.1 For either unit eigenvector, the first-coordinate square is $1/2$. Applying [F7] with $\mu_0=2$ gives each weight as $1$. Exactness through degree three is [F8], proving the stated rule. [F7, F8, step 1.2, step 2.2, algebra] ∎
