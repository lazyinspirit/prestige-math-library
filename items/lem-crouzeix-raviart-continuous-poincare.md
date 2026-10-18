---
id: lem-crouzeix-raviart-continuous-poincare
kind: lemma
title: A Poincare bound on a slab-bounded domain
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 3, Traces and Poincare inequalities
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap03.pdf
      locator: "§3.3, Lemma 3.27, printed p. 32: zero-boundary Poincare–Steklov inequality; Exercise 3.2, printed p. 35: the one-dimensional fundamental-theorem argument."
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations, Chapter 3
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: "§3.10, Theorems 3.17–3.18 and their proofs, printed pp. 64–66."
---

## Statement

Let $\Omega\subset\mathbb R^d$ be open and satisfy
$a<x\cdot e<b$ for a unit vector $e$ and all $x\in\Omega$, with $a<b$.
Then every $v\in H^1_0(\Omega)$ satisfies
$$\|v\|_{L^2(\Omega)}\le(b-a)\|\nabla v\|_{L^2(\Omega)}.$$
The argument assumes Countable Choice through the stated Sobolev,
product-measure, and affine change-of-variables interfaces; it does not use the
Axiom of Choice.

## Facts & Assumptions

**Given:** Countable Choice, an open domain contained in the slab $a<x\cdot e<b$, and $v\in H^1_0(\Omega)$, where $H^1_0$ is the $W^{1,2}$-closure of $C_c^\infty(\Omega)$.

[F1] The vector-valued fundamental theorem of calculus applies to smooth functions on a compact interval. ([[cor-vector-valued-ftc-and-lipschitz-bound]])

[F2] Countable Choice gives Tonelli/Fubini for nonnegative integrands on the Euclidean product spaces used below. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-countable-choice]])

[F3] For an orthogonal matrix $Q$, $Q^TQ=I$ and $|\det Q|=1$; the linear affine map $y\mapsto Qy$ is a $C^1$ diffeomorphism, so change of variables preserves integrals of nonnegative measurable functions. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[F4] Holder's inequality with exponents $2,2$ gives $|\int_I fg|\le\|f\|_{L^2(I)}\|g\|_{L^2(I)}$ and, in particular, $|\int_a^t g|^2\le(t-a)\int_a^t|g|^2$. ([[thm-holder-inequality-for-integrals]])

## Proof
1.1 First let $\varphi\in C_c^\infty(\Omega)$ and extend it by zero to $\mathbb R^d$. Write $x=x_\perp+te$ with $x_\perp\perp e$. For fixed $x_\perp$ and $a<t<b$, the fundamental theorem [F1] gives $\varphi(x_\perp+te)=\int_a^t\partial_e\varphi(x_\perp+se)\,ds$, since the zero extension vanishes at $t=a$. Holder's inequality [F4], applied on $(a,t)$ and then enlarged to $(a,b)$, yields $|\varphi(x_\perp+te)|^2\le(b-a)\int_a^b|\partial_e\varphi(x_\perp+se)|^2\,ds$. [F1, F4, given, algebra]

2.1 Integrate step 1.1 over $t\in(a,b)$ and $x_\perp\in e^\perp$. Choose an orthonormal basis of $e^\perp$ and let $Q$ have those basis vectors followed by $e$ as its columns. Then $T(y)=Qy$ sends $(y_\perp,t)$ to $x_\perp+te$; Tonelli [F2] and $Q^TQ=I$, $|\det Q|=1$ in [F3] give the coordinate integral over the slab. The zero extension of $\varphi$ and its derivative vanish off $\Omega$, so those slab integrals equal their integrals over $\Omega$. Thus $\|\varphi\|_{L^2(\Omega)}^2\le(b-a)^2\|\partial_e\varphi\|_{L^2(\Omega)}^2\le(b-a)^2\|\nabla\varphi\|_{L^2(\Omega)}^2$. [F2, F3, step 1.1, algebra]

3.1 Let $\delta>0$. By the closure definition of $H^1_0(\Omega)$, choose a single $\varphi\in C_c^\infty(\Omega)$ with $\|v-\varphi\|_{H^1}<\delta$. The $L^2$ triangle inequality follows by expanding $\|f+g\|_2^2$ and applying [F4] to the cross term; hence [F4] and step 2.1 give $\|v\|_2\le\|\varphi\|_2+\delta\le(b-a)\|\nabla\varphi\|_2+\delta\le(b-a)\|\nabla v\|_2+(b-a+1)\delta$. This holds for every $\delta>0$, so letting $\delta\downarrow0$ proves the statement without selecting a sequence of approximants. [F4, given, step 2.1, algebra] ∎
