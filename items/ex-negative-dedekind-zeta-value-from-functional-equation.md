---
id: ex-negative-dedekind-zeta-value-from-functional-equation
kind: example
title: "Normalized Negative Zeta Value for the Rational Field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-number-field
  - def-dedekind-zeta-function
  - def-riemann-zeta-function
  - cor-rational-algebraic-integers-are-integers
  - thm-riemann-zeta-meromorphic-continuation
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-identity-theorem-holomorphic-functions
  - thm-special-values-of-riemann-zeta-at-integers
  - def-order-of-zero-holomorphic-function
  - def-discriminant-of-a-number-field-basis-and-order
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
      locator: "Lecture 11 §3 for $\\zeta(2)=\\pi^2/6$ and Lecture 12 §7 for the functional equation yielding $\\zeta(-1)=-1/12$."
    - title: "Armand Borel, Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers"
      url: "https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf"
      locator: "§6.4, printed p. 633, the normalization $c'_m=c_m\\pi^{-d_m}$."
verification: {}
---

## Example

Assume the Axiom of Choice. It implies Countable Choice. For $K=\mathbb Q$ and $m=1$, the Dedekind and Riemann zeta functions agree by analytic continuation, the zero order is $d_1^0=0$, and

$$c'_1=|\zeta_{\mathbb Q}(-1)|=\frac1{12},\qquad R'_{1,\mathbb Q}=\zeta_{\mathbb Q}(2)\pi^{-2}=\frac16.$$

Hence $c'_1/R'_{1,\mathbb Q}=1/2$.

## Example references

[[thm-special-values-of-riemann-zeta-at-integers]]

[[def-order-of-zero-holomorphic-function]]

[K. Chandrasekharan, *Lectures on the Riemann Zeta-Function*, Lectures 11–12](https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf)

## Facts & Assumptions

**Given:** AC and the field $K=\mathbb Q$.

[A1] [[def-axiom-of-choice]]: the Dedekind-zeta continuation supplier below assumes AC.

[A2] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies Countable Choice, the axiom required by the Riemann special-values theorem.

[A3] [[def-countable-choice]]: Countable Choice is the axiom assumed by the Riemann special-values theorem.

[F1] [[cor-rational-algebraic-integers-are-integers]]: a rational algebraic integer is an integer, so $\mathcal O_{\mathbb Q}=\mathbb Z$.

[F2] [[def-dedekind-zeta-function]]: $\zeta_{\mathbb Q}$ is the Dirichlet series over nonzero integral ideals of $\mathbb Z$.

[F3] [[def-riemann-zeta-function]]: $\zeta(s)=\sum_{n\ge1}n^{-s}$ for $\operatorname{Re}(s)>1$.

[F4] [[thm-riemann-zeta-meromorphic-continuation]]: the Riemann series has a meromorphic continuation to $\mathbb C$.

[F5] [[thm-identity-theorem-holomorphic-functions]]: two holomorphic functions on a connected complex domain that agree on a nonempty open subset agree throughout that domain.

[F6] [[thm-special-values-of-riemann-zeta-at-integers]]: under Countable Choice, $\zeta(2)=\pi^2/6$ and $\zeta(-1)=-1/12$.

[F7] [[def-order-of-zero-holomorphic-function]]: if a holomorphic function is nonzero at a point, its order there is $0$.

[F8] [[def-discriminant-of-a-number-field-basis-and-order]]: the discriminant of the basis $\{1\}$ of $\mathbb Q$ is the determinant of the one-by-one trace matrix.

[F9] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]: under AC, $\zeta_K$ is meromorphic on $\mathbb C$ with no pole except at $s=1$.

## Proof

1.1 By [F1], $\mathcal O_{\mathbb Q}=\mathbb Z$. Every nonzero ideal $I\subseteq\mathbb Z$ has a least positive member $n$; division with remainder shows each $a\in I$ is a multiple of $n$, so $I=n\mathbb Z$. The quotient has $n$ residue classes. Thus the Dedekind zeta series is $\sum_{n\ge1}n^{-s}$ for $\operatorname{Re}(s)>1$, which is the Riemann zeta series by [F2,F3]. [F1, F2, F3, given, construct, algebra]

2.1 By [A1,F9], $\zeta_{\mathbb Q}$ is meromorphic with no pole off $1$; [A2,A3] supply the countable-choice branch for the Riemann continuation [F4]. On the connected domain $\mathbb C\setminus\{1\}$, both continuations are holomorphic and agree on $\operatorname{Re}(s)>1$, by step 1.1. Applying [F5] on that domain gives $\zeta_{\mathbb Q}(-1)=\zeta(-1)$ and $\zeta_{\mathbb Q}(2)=\zeta(2)$. [A1, A2, A3, F4, F5, F9, step 1.1]

3.1 From [F6], $\zeta_{\mathbb Q}(-1)=-1/12\ne0$, hence [F7] gives $d_1^0=0$ and $c'_1=1/12$. The trace of $1$ over $\mathbb Q$ is $1$, so [F8] gives $D_{\mathbb Q}=1$. Also [F6] gives $R'_{1,\mathbb Q}=1^{1/2}(\pi^2/6)\pi^{-1\cdot(1+1)}=1/6$. Dividing yields $c'_1/R'_{1,\mathbb Q}=1/2$. [A2, A3, F6, F7, F8, step 2.1, given, algebra] ∎
