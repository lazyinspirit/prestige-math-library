---
id: ex-projection-onto-constants-is-the-mean
kind: example
title: Projection onto the constants is the mean
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-orthogonal-projection, ex-standard-inner-products-on-kn-ell-two-and-l-two, cor-finite-dimensional-subspaces-are-closed, cor-cauchy-schwarz-inequality-for-l-two, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3 and §5.3.1"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lectures 15–16"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Example

Assume the Axiom of Countable Choice. Let $(X,\mathcal A,\mu)$ be a measure space with $0<\mu(X)<\infty$, let $\mathbb K$ be $\mathbb R$ or $\mathbb C$, and let $M\subseteq L^2(\mu;\mathbb K)$ be the one-dimensional subspace of classes of constant functions, spanned by $\mathbf 1$ with $\langle[f],[\mathbf 1]\rangle=\int_Xf\,d\mu$. Then $M$ is closed and the Hilbert projection of $[f]$ onto $M$ is

$$P_M[f]=\Bigl(\frac{1}{\mu(X)}\int_Xf\,d\mu\Bigr)\,[\mathbf 1] ,$$

the mean of $f$; in particular $P_M[f]$ is the unique constant $c$ with $\int_X(f-c)\,d\mu=0$.

## Facts & Assumptions

[A1] $L^2(\mu;\mathbb K)$ with the pairing $\langle[f],[g]\rangle=\int f\overline g$ is a Hilbert space under countable choice, and the constants form a finite-dimensional, hence closed, subspace ([[ex-standard-inner-products-on-kn-ell-two-and-l-two]], [[cor-finite-dimensional-subspaces-are-closed]]).

[A2] Cauchy–Schwarz bounds $\bigl|\int f\overline g\bigr|\le\|f\|_2\|g\|_2$; in particular $\int_Xf\,d\mu=\langle[f],[\mathbf 1]\rangle$ is finite when $\mu(X)<\infty$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[A3] The Hilbert projection is characterised by $P_M[f]\in M$ and $[f]-P_M[f]\in M^\perp$ ([[def-hilbert-orthogonal-projection]]).

[A4] Countable Choice is the standing choice hypothesis ([[def-countable-choice]]), while existence and uniqueness of the projection onto a closed subspace are supplied by the Hilbert-projection interface ([[def-hilbert-orthogonal-projection]]).

## Verification

**Proof technique:** direct.

**Given:** Countable Choice, a measure space with $0<\mu(X)<\infty$, a class $[f]\in L^2(\mu;\mathbb K)$ and the constants $M=\operatorname{span}\{[\mathbf 1]\}$.

1.1 The integral $\int_Xf\,d\mu$ is finite by [A2], the constant $\mu(X)$ is finite and positive, and $M$ is a closed one-dimensional subspace by [A1]. [A1, A2, A4]

2.1 Put $c_0=\mu(X)^{-1}\int_Xf\,d\mu$ and $m=c_0[\mathbf 1]$; then $m\in M$ and $\langle[f]-m,[\mathbf 1]\rangle=\int_X(f-c_0)\,d\mu=\int_Xf\,d\mu-c_0\mu(X)=0$, so $[f]-m\in M^\perp$. [step 1.1, A3, algebra]

3.1 By the characterisation of the Hilbert projection, $P_M[f]=m=\bigl(\mu(X)^{-1}\int_Xf\,d\mu\bigr)[\mathbf 1]$; conversely, any constant $c$ with $\int_X(f-c)\,d\mu=0$ has $[f]-c[\mathbf 1]\in M^\perp$, so $c=c_0$ by uniqueness of the projection, and for a probability measure the constant is the mean of $f$. [step 2.1, A3] ∎
