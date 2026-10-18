---
id: lem-crouzeix-raviart-continuous-poincare
kind: lemma
title: A choice-free Poincare bound on a slab-bounded domain
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-tonelli-and-fubini-for-completed-product-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 3, Sobolev spaces
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap03.pdf
      locator: "§3.2, Poincare–Steklov inequality for zero-boundary functions, and its proof by the fundamental theorem of calculus."
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations, Chapter 3
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: "§3.10, Theorems 3.17–3.18 and their proofs, printed pp. 64–66."
---

## Statement

Let $\Omega\subset\mathbb R^d$ be open and satisfy
$a<x\cdot e<b$ for a unit vector $e$ and all $x\in\Omega$, with $a<b$.
Then every $v\in H^1_0(\Omega)$ satisfies
$$\|v\|_{L^2(\Omega)}\le(b-a)\|\nabla v\|_{L^2(\Omega)}.$$
The argument uses Countable Choice only through the stated product-measure
interface; it does not use the Axiom of Choice.

## Facts & Assumptions

**Given:** Countable Choice, an open domain contained in the slab $a<x\cdot e<b$, and $v\in H^1_0(\Omega)$, where $H^1_0$ is the $W^{1,2}$-closure of $C_c^\infty(\Omega)$.

[F1] The vector-valued fundamental theorem of calculus applies to smooth functions on a compact interval. ([[cor-vector-valued-ftc-and-lipschitz-bound]])

[F2] Countable Choice gives Tonelli/Fubini for nonnegative integrands on the Euclidean product spaces used below. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-countable-choice]])

[F3] Orthogonal coordinate changes preserve Lebesgue measure. ([[thm-integrals-are-invariant-under-measure-preserving-maps]])

## Proof
1.1 First let $\varphi\in C_c^\infty(\Omega)$ and extend it by zero to $\mathbb R^d$. Write $x=x_\perp+te$ with $x_\perp\perp e$. For fixed $x_\perp$ and $a<t<b$, the fundamental theorem [F1] gives $\varphi(x_\perp+te)=\int_a^t\partial_e\varphi(x_\perp+se)\,ds$, since the zero extension vanishes at $t=a$. Cauchy–Schwarz yields $|\varphi(x_\perp+te)|^2\le(b-a)\int_a^b|\partial_e\varphi(x_\perp+se)|^2\,ds$. [F1, given, algebra]

2.1 Integrate step 1.1 over $t\in(a,b)$ and $x_\perp\in e^\perp$. Tonelli [F2] and the orthogonal change of variables [F3] give $\|\varphi\|_{L^2(\Omega)}^2\le(b-a)^2\|\partial_e\varphi\|_{L^2(\Omega)}^2\le(b-a)^2\|\nabla\varphi\|_{L^2(\Omega)}^2$. [F2, F3, step 1.1, algebra]

3.1 By definition of $H^1_0(\Omega)$ there are $\varphi_n\in C_c^\infty(\Omega)$ converging to $v$ in $H^1(\Omega)$. Both $L^2$ norms in step 2.1 converge under this convergence, so passing to the limit proves the statement. [given, step 2.1, algebra] ∎