---
id: lem-coordinate-block-smoothness-descent-model
kind: lemma
title: "Coordinate-block smoothness descent model"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-finite-sum
  - cor-mean-value-theorem
  - thm-chain-rule-for-total-derivatives
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - thm-gradient-represents-directional-derivatives-and-steepest-ascent
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-induction-principle
  - lem-finite-sum-laws
  - lem-finite-choice
  - cor-archimedean-reciprocal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §3.2"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, §3.2"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Statement

Let $f:\mathbb R^d\to\mathbb R$ be continuously differentiable, let $B_i$ be one block of a finite coordinate partition, and let $U_i$ be its coordinate insertion map. Suppose $L_i>0$ satisfies $\|\nabla_i f(x+U_i h)-\nabla_i f(x)\|_2\le L_i\|h\|_2$ for every $x,h$. Then
$$f(x+U_i h)\le f(x)+\langle\nabla_i f(x),h\rangle+\frac{L_i}{2}\|h\|_2^2.$$

## Facts & Assumptions

**Given:** The function, block and Lipschitz bound in the Statement.

[F1] [[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]] and [[lem-finite-sum-laws]]: identify block label $j\in\{1,\ldots,d\}$ with standard coordinate $j-1$ and order each block increasingly; then $\nabla_i f(x)$ is the corresponding restriction of $\nabla f(x)$ and $\langle\nabla f(x),U_i h\rangle=\langle\nabla_i f(x),h\rangle$ by the finite-coordinate definition of the Euclidean inner product and finite-sum splitting.

[F2] [[def-c-one-map-and-local-inverse]]: continuously differentiable means totally differentiable at every point, with continuous derivative entries.

[F3] [[thm-chain-rule-for-total-derivatives]]: along a differentiable curve, the derivative of the composition is the derivative of the outer function applied to the curve derivative.

[F4] [[thm-gradient-represents-directional-derivatives-and-steepest-ascent]]: for a totally differentiable scalar function, the directional derivative in direction $v$ is $\langle\nabla f,v\rangle$.

[F5] [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]: a totally differentiable function is continuous at each point.

[F6] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable in its interior, its endpoint difference is its derivative at an interior point times the interval length.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F8] [[thm-induction-principle]]: an identity that holds at zero and is preserved at successors holds for every natural number.

[F9] [[def-finite-sum]] and [[lem-finite-sum-laws]]: finite sums satisfy the zero base case, successor recursion, additivity, telescoping, scaling, and the constant-sum law.

[F10] [[cor-archimedean-reciprocal]]: for every $\eta>0$ there is an integer $N\ge1$ with $1/N<\eta$.

[F11] [[lem-finite-choice]]: a finite indexed list of nonempty witness sets has a choice function in ZF.

## Proof

1.1 If $h=0$ the claim is equality. Otherwise set $\phi(t)=f(x+tU_i h)$ on $[0,1]$. By [F2] and [F3], $\phi$ is totally differentiable at every point of $[0,1]$, so [F5] makes it continuous there; [F3] and [F4] give $\phi'(t)=\langle\nabla_i f(x+tU_i h),h\rangle$. Hence the Lipschitz hypothesis and [F7] give $|\phi'(t)-\phi'(0)|\le L_i t\|h\|_2^2$. [given, F1, F2, F3, F4, F5, F7]

2.1 Fix $N\ge1$ and apply [F6] on each interval $[j/N,(j+1)/N]$. Each mean-value witness set is nonempty, so [F11] selects $c_j\in(j/N,(j+1)/N)$ simultaneously for the finite list $j<N$, with $\phi((j+1)/N)-\phi(j/N)=\phi'(c_j)/N$. By [F9], summing and telescoping gives $\phi(1)-\phi(0)-\phi'(0)=\frac1N\sum_{j<N}(\phi'(c_j)-\phi'(0))\le\frac{L_i\|h\|_2^2}{N^2}\sum_{j<N}(j+1)$. To evaluate the last sum, set $T_N=\sum_{j<N}(j+1)$; [F9] gives $T_0=0$ and $T_{N+1}=T_N+(N+1)$, and [F8] proves $T_N=N(N+1)/2$ by the base case and the algebraic successor identity $N(N+1)/2+(N+1)=(N+1)(N+2)/2$. Thus the upper bound is $\frac{L_i}{2}(1+\frac1N)\|h\|_2^2$. [F6, F8, F9, F11, step 1.1, algebra]

3.1 The left side of step 2.1 is independent of $N$. If it exceeded $L_i\|h\|_2^2/2$ by $\delta>0$ and $L_i\|h\|_2^2>0$, choose $N$ with $1/N<2\delta/(L_i\|h\|_2^2)$ by [F10]; step 2.1 would then give a strict smaller upper bound, a contradiction. If $L_i\|h\|_2^2=0$, step 2.1 already gives the result. Substituting $\phi(1)-\phi(0)=f(x+U_i h)-f(x)$ and $\phi'(0)=\langle\nabla_i f(x),h\rangle$ proves the inequality. [F10, step 2.1, assume-contra, algebra, discharge-contradiction] ∎

