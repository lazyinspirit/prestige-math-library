---
id: lem-rational-expression-derivative-recursion-correct
kind: lemma
title: "Symbolic derivative recursion for a rational expression DAG is correct"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - cor-mean-value-theorem
  - def-validated-residual-tube-certificate
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Walter Rudin, Principles of Mathematical Analysis, 3rd ed., Chapter 9"
      url: "https://archive.org/details/principlesofmath0000rudi"
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter III"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
---

## Statement

For a finite rational expression DAG of [[def-validated-residual-tube-certificate]], at every input point where each division denominator is nonzero, the DAG evaluates to a continuously differentiable function of time and state. The recursion assigning zero derivatives to constants, coordinate derivatives to inputs, sum/difference rules, the product rule, and
$$D(u/v)=\frac{vDu-uDv}{v^2}$$
for a division node computes its actual total derivative. On any open neighborhood where all denominators stay nonzero, the represented field is locally Lipschitz.

## Facts & Assumptions

**Given:** The finite acyclic rational expression DAG and an input point where all division denominators are nonzero.

[F1] [[def-validated-residual-tube-certificate]]: the only DAG operations are constants, input coordinates, addition, subtraction, multiplication, and division.

[F2] [[thm-algebra-of-derivatives]]: sums, differences, products, and quotients with nonzero denominator obey the ordinary derivative rules.

[F3] [[thm-chain-rule-for-total-derivatives]]: derivatives of differentiable compositions are obtained by composing their total derivatives.

[F4] [[cor-mean-value-theorem]]: a scalar differentiable function with derivative bounded by $M$ on an interval is $M$-Lipschitz there.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $\sum_{j=1}^n|h_j|\le\sqrt n\|h\|_2$ and finite-dimensional Euclidean norms obey the triangle inequality.

## Proof

1.1 Order the finite acyclic graph topologically. A constant node defines a constant smooth function with derivative zero; an input node is a coordinate projection with its coordinate derivative. Assume inductively that the parent nodes define $C^1$ functions with their assigned derivatives. [F1, construct, induction]

2.1 For an addition or subtraction node, [F2] gives the sum or difference of the parent derivatives. For a product node it gives $vDu+uDv$. For a division node, continuity of the denominator and its nonzero value give a neighborhood on which it remains nonzero; [F2] gives $(vDu-uDv)/v^2$. These rules produce continuous derivatives because the parent values and derivatives are continuous and division is taken away from zero. [F2, step 1.1, algebra]

3.1 Induction through the topological order proves that every node is $C^1$ with its recursively assigned derivative, so the root derivative is correct. Continuity and nonvanishing of the finitely many denominator functions give a ball around the input on which all denominators stay nonzero. Shrink it so every partial derivative of every root component is bounded in absolute value by a common finite $M$, using continuity at the center and the finite number of entries. For two points $u,v$ in this convex ball, apply [F4] to each scalar component along $v+s(u-v)$: its derivative has magnitude at most $M\sum_j|u_j-v_j|\le M\sqrt{d+1}\|u-v\|_2$ by [F5]. Combining the finitely many component bounds gives a Lipschitz constant for the root map. Thus the field is locally Lipschitz. [F1, F3, F4, F5, step 2.1, construct, induction] ∎
