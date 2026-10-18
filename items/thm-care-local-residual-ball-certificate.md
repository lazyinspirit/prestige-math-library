---
id: thm-care-local-residual-ball-certificate
kind: theorem
title: "A CARE residual and Lyapunov margin certify a unique stabilizing root in
  a matrix ball"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-standard-continuous-and-discrete-riccati-equations
  - thm-care-stabilizing-psd-solution-and-value
  - def-frobenius-matrix-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-sylvester-unique-solvability-spectral-separation
  - thm-continuous-lyapunov-integral-and-positivity
  - cor-finite-dimensional-normed-spaces-are-banach
  - def-verified-linear-residual-certificate-data
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A
        Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node114.html"
      locator: "§6.2.2, square-completion value characterization"
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, CARE theorem and Newton methods"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $\widehat X=\widehat X^*$ be a CARE candidate, $\widehat A_c=A-G\widehat X$, and
$$\mathcal L(E)=\widehat A_c^*E+E\widehat A_c,\qquad F_c(X)=A^*X+XA-XGX+Q.$$
Assume $\widehat A_c$ is certified Hurwitz, $\mathcal L$ is invertible on Hermitian matrices, and outward-verified bounds satisfy
$$\kappa\ge\|\mathcal L^{-1}\|_{F\to F},\quad r\ge\|F_c(\widehat X)\|_F,\quad g\ge\|G\|_2,$$
with $\rho>0$ such that
$$\kappa(r+g\rho^2)\le\rho,\qquad 2\kappa g\rho<1.$$
Then there is exactly one Hermitian CARE root in the closed Frobenius ball $\|X-\widehat X\|_F\le\rho$.

If also a verified Hermitian $W\succ0$ and $\gamma>0$ satisfy
$$-(\widehat A_c^*W+W\widehat A_c)\succeq\gamma I,\qquad 2\|W\|_2g\rho<\gamma,$$
then that root is Hurwitz-stabilizing. Under the standard CARE hypotheses of [[thm-care-stabilizing-psd-solution-and-value]], it is the unique stabilizing positive-semidefinite solution.

## Facts & Assumptions

**Given:** The CARE data and matrix norms of [[def-standard-continuous-and-discrete-riccati-equations]], a Hermitian candidate, and the outward-verified constants in the Statement.

[F1] [[def-standard-continuous-and-discrete-riccati-equations]]: $F_c(X)=A^*X+XA-XGX+Q$ and $A_c(X)=A-GX$.

[F2] [[thm-sylvester-unique-solvability-spectral-separation]]: $E\mapsto \widehat A_c^*E+E\widehat A_c$ is invertible when $\sigma(\widehat A_c^*)\cap(-\sigma(\widehat A_c))=\varnothing$; this holds for Hurwitz $\widehat A_c$.

[F3] [[def-verified-linear-residual-certificate-data]]: verified certificate data are mathematical upper bounds; the definition does not claim how a computation establishes them.

[F4] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: a finite outward-rounded expression DAG encloses every exact node value.

[F5] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: the operator norm is bounded by the Frobenius norm and $\|AXB\|_F\le\|A\|_2\|X\|_F\|B\|_2$.

[F6] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: operator norms are submultiplicative.

[F7] [[thm-care-stabilizing-psd-solution-and-value]]: under continuous stabilizability and detectability the stabilizing Hermitian positive-semidefinite CARE solution is unique.

[F8] [[thm-continuous-lyapunov-integral-and-positivity]]: for Hurwitz $A_c$, the solution of $A_c^*Y+YA_c=-S$ is the convergent integral $Y=\int_0^\infty e^{tA_c^*}Se^{tA_c}\,dt$, and is positive semidefinite when $S\succeq0$.

[F9] [[cor-finite-dimensional-normed-spaces-are-banach]]: every finite-dimensional normed space is complete, so a Cauchy sequence in the Hermitian matrix ball converges there.

[A1] The numerical constants $\kappa,r,g,\gamma$ and $\|W\|_2$ are supplied as rigorous upper or lower bounds by the verifier; without valid enclosures this theorem gives no certificate.

## Proof

1.1 For Hermitian $E$, direct expansion gives $F_c(\widehat X+E)=F_c(\widehat X)+\mathcal L(E)-EGE.$ Thus the root equation is equivalent to $E=\mathcal T(E):=-\mathcal L^{-1}F_c(\widehat X)+\mathcal L^{-1}(EGE).$ [F1, F2, given, algebra]

2.1 By [F5], $\|EGE\|_F\le g\|E\|_F^2$. The assumptions give $\|\mathcal T(E)\|_F\le\kappa(r+g\rho^2)\le\rho$ on the closed ball. Also $EGE-FGF=(E-F)GE+FG(E-F),$ so [F5] gives $\|\mathcal T(E)-\mathcal T(F)\|_F\le2\kappa g\rho\|E-F\|_F$ there. The Hermitian matrices form a closed finite-dimensional normed space, complete by [F9]. Iterating $\mathcal T$ from zero gives successive differences bounded by a geometric sequence of ratio $2\kappa g\rho<1$, hence a Cauchy sequence. Its limit lies in the closed ball and is a fixed point by continuity. Any two fixed points have distance at most that ratio times their distance, so they coincide. [A1, F3, F4, F5, F9, step 1.1, algebra]

3.1 Let $X=\widehat X+E$ be this root. Its closed loop is $A_c(X)=\widehat A_c-GE$. Expanding, $A_c(X)^*W+WA_c(X)=\widehat A_c^*W+W\widehat A_c-EGW-WGE.$ By [F6] and [A1], $\|EGW+WGE\|_2\le2\|W\|_2g\rho<\gamma$. Hence the left side is negative definite. For any eigenpair $A_c(X)v=\lambda v$, $v\ne0$, this gives $2\operatorname{Re}(\lambda)v^*Wv<0$; since $W\succ0$, $\operatorname{Re}\lambda<0$. Thus the root is stabilizing. Its CARE identity also gives $A_c(X)^*X+XA_c(X)=-(Q+XGX).$ Here $Q+XGX\succeq0$ because $Q,G\succeq0$. Since $A_c(X)$ is Hurwitz, [F8] says the unique Lyapunov solution is its positive-semidefinite integral; uniqueness from [F2] identifies that solution with $X$. Thus $X\succeq0$, and [F7] identifies it with the unique stabilizing positive-semidefinite solution. [A1, F1, F2, F6, F7, F8, step 2.1, algebra] ∎
