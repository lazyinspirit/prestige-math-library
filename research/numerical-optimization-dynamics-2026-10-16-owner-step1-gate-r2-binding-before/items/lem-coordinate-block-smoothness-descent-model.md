---
id: lem-coordinate-block-smoothness-descent-model
kind: lemma
title: "Coordinate-block smoothness descent model"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-finite-sum
  - cor-mean-value-theorem
  - thm-chain-rule-for-total-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-induction-principle
  - cor-archimedean-reciprocal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
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

[F1] [[def-euclidean-inner-product]]: the Euclidean inner product is bilinear, and the block gradient pairs with a block displacement using that inner product.

[F2] [[thm-chain-rule-for-total-derivatives]]: along a differentiable curve, the derivative of the composition is the derivative of the outer function applied to the curve derivative.

[F3] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable in its interior, its endpoint difference is its derivative at an interior point times the interval length.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F5] [[thm-induction-principle]]: an identity that holds at zero and is preserved at successors holds for every natural number.

[F6] [[def-finite-sum]]: finite sums are defined by their zero base case and successor recursion.

[F7] [[cor-archimedean-reciprocal]]: for every $\eta>0$ there is an integer $N\ge1$ with $1/N<\eta$.

## Proof

1.1 If $h=0$ the claim is equality. Otherwise set $\phi(t)=f(x+tU_i h)$ on $[0,1]$. By [F2], $\phi'(t)=\langle\nabla_i f(x+tU_i h),h\rangle$. Hence the Lipschitz hypothesis and [F4] give $|\phi'(t)-\phi'(0)|\le L_i t\|h\|_2^2$. [given, F1, F2, F4]

2.1 Fix $N\ge1$ and apply [F3] on each interval $[j/N,(j+1)/N]$. For some $c_j$ in that interval, $\phi((j+1)/N)-\phi(j/N)=\phi'(c_j)/N$. Summing and telescoping gives $\phi(1)-\phi(0)-\phi'(0)=\frac1N\sum_{j=0}^{N-1}(\phi'(c_j)-\phi'(0))\le\frac{L_i\|h\|_2^2}{N^2}\sum_{j=0}^{N-1}(j+1)=\frac{L_i}{2}(1+\frac1N)\|h\|_2^2$. The finite-sum identity $\sum_{j=0}^{N-1}(j+1)=N(N+1)/2$ holds at $N=0$ and is preserved by adding $N+1$, so [F5] applies. [F3, F5, F6, step 1.1, algebra]

3.1 The left side of step 2.1 is independent of $N$. If it exceeded $L_i\|h\|_2^2/2$ by $\delta>0$ and $L_i\|h\|_2^2>0$, choose $N$ with $1/N<2\delta/(L_i\|h\|_2^2)$ by [F7]; step 2.1 would then give a strict smaller upper bound, a contradiction. If $L_i\|h\|_2^2=0$, step 2.1 already gives the result. Substituting $\phi(1)-\phi(0)=f(x+U_i h)-f(x)$ and $\phi'(0)=\langle\nabla_i f(x),h\rangle$ proves the inequality. [F7, step 2.1, assume-contra, algebra, discharge-contradiction] ∎

