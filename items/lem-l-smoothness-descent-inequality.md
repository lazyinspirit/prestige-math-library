---
id: lem-l-smoothness-descent-inequality
kind: lemma
title: "Descent inequality for a Lipschitz gradient"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-lipschitz-holder-contraction
  - def-euclidean-inner-product
  - thm-chain-rule-for-total-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-mean-value-theorem
  - cor-archimedean-reciprocal
  - lem-finite-sum-laws
  - thm-induction-principle
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §9.3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $f:\mathbb R^n\to\mathbb R$ be continuously differentiable and suppose $\nabla f$ is Lipschitz with constant $L\ge0$ in the Euclidean norm. Then
$$f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+\frac{L}{2}\|y-x\|_2^2\qquad(x,y\in\mathbb R^n).$$

## Facts & Assumptions

**Given:** The continuously differentiable function and Lipschitz-gradient bound in the Statement.

[F1] [[cor-mean-value-theorem]]: a scalar function continuous on a closed interval and differentiable in its interior has an interior point where its derivative is the endpoint difference divided by the interval length.

[F2] [[thm-chain-rule-for-total-derivatives]]: along a differentiable line $s\mapsto x+sd$, the derivative of $f(x+sd)$ is $\langle\nabla f(x+sd),d\rangle$.

[F3] [[def-lipschitz-holder-contraction]]: Lipschitz constant $L$ means $\|\nabla f(u)-\nabla f(v)\|_2\le L\|u-v\|_2$ for every $u,v$.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F5] [[cor-archimedean-reciprocal]]: for every $\varepsilon>0$ there is $N\ge1$ with $1/N<\varepsilon$.

[F6] [[lem-finite-sum-laws]]: finite sums obey recursion, additivity and scaling.

[F7] [[thm-induction-principle]]: a property true at $0$ and inherited by successors holds for every natural.

## Proof

1.1 Put $d=y-x$. If $d=0$ the inequality is equality. Otherwise define $\phi(s)=f(x+sd)$ on $[0,1]$. By [F2] and continuity of $\nabla f$, $\phi$ is continuous on $[0,1]$, differentiable on $(0,1)$, and $\phi'(s)=\langle\nabla f(x+sd),d\rangle$. [given, F2]

1.2 For an arbitrary natural $N\ge1$, partition $[0,1]$ at $j/N$. Applying [F1] on each subinterval gives $\xi_j\in(j/N,(j+1)/N)$ with $\phi((j+1)/N)-\phi(j/N)=\phi'(\xi_j)/N$. Telescoping and subtracting $\phi'(0)$ yields $$f(y)-f(x)-\langle\nabla f(x),d\rangle=\frac1N\sum_{j=0}^{N-1}(\phi'(\xi_j)-\phi'(0))\le\frac{L\|d\|_2^2}{N^2}\sum_{j=0}^{N-1}(j+1)=\frac{L}{2}(1+1/N)\|d\|_2^2,$$ because [F3] and [F4] give $|\phi'(s)-\phi'(0)|\le Ls\|d\|_2^2$ and $\xi_j<(j+1)/N$. To evaluate the finite sum for every natural $N$, its value is $N(N+1)/2$: at $N=0$ both sides are zero, and the recursion [F6] adds $N+1$ when $N$ is increased by one, giving $(N+1)(N+2)/2$. [F7] proves this identity by induction. Only finitely many mean-value points are used for each fixed $N$. [given, F1, F2, F3, F4, F6, F7, algebra, induction]

2.1 The left side of the bound in step 1.2 is independent of $N$. Suppose it exceeded $L\|d\|_2^2/2$ by $\delta>0$. For $L\|d\|_2^2>0$, [F5] lets us choose $N$ with $1/N<2\delta/(L\|d\|_2^2)$, making the right side in step 1.2 strictly smaller than the left side, a contradiction. If $L\|d\|_2^2=0$, step 1.2 already gives the desired bound. [F5, step 1.2, assume-hyp, algebra] ∎
