---
id: cex-saga-linear-factor-fails-under-standard-initialization
kind: counterexample
title: The assigned SAGA Lyapunov factor fails under standard initialization
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-saga-finite-sum-method
  - def-strong-convex-composite-objective
  - def-lipschitz-holder-contraction
  - def-euclidean-inner-product
  - def-complete-ordered-field
  - lem-finite-sum-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Aaron Defazio, Francis Bach, and Simon Lacoste-Julien, SAGA: A Fast Incremental Gradient Method With Support for Non-Strongly Convex Composite Objectives, NeurIPS 2014"
      url: https://proceedings.neurips.cc/paper_files/paper/2014/file/937964195d6fb3a55cd7cc578165f058-Paper.pdf
      locator: §2, SAGA algorithm initialization, estimator, update, and table replacement.
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018)"
      url: https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf
      locator: §5.3.2, Algorithm 5.2 and the stored-gradient SAGA update.
---

## Statement refuted

For the SAGA iterates and table in [[alg-saga-finite-sum-method]], with step size $\eta>0$ and a minimizer $x^*$ of $F=n^{-1}\sum_i f_i$, write $V_k=\|x_k-x^*\|_2^2$, $S_k=n^{-1}\sum_{i=1}^n\|\alpha_i^k-\nabla f_i(x^*)\|_2^2$, and $\mathcal L_k=V_k+7\eta^2nS_k$.

The contract-required one-step bound $\mathbb E[\mathcal L_{k+1}]\le(1-\mu\eta)\mathbb E[\mathcal L_k]$ need not hold for the prescribed SAGA initialization, even when $\eta\le\min\{1/(3L),\mu/(13L^2)\}$. The following finite instance has $n=100$, $L=\mu=1$, $x_0=1$, and $\eta=1/13$, but $\mathcal L_1/\mathcal L_0=844/869>12/13=1-\mu\eta$.

## Facts & Assumptions

**Given:** $d=1$, $n=100$, $f_i(x)=x^2/2$ for every $i$, the standard SAGA initialization $x_0=1$, $\alpha_i^0=f_i'(x_0)$, and $\eta=1/13$.

[F1] [[alg-saga-finite-sum-method]]: initialize $\alpha_i^0=\nabla f_i(x_0)$; at each step form $v_k=\nabla f_{I_k}(x_k)-\alpha_{I_k}^k+\bar\alpha_k$, set $x_{k+1}=x_k-\eta v_k$, then replace the selected table entry using the pre-update point.

[F2] [[def-strong-convex-composite-objective]]: $1$-strong convexity is the strong-Jensen inequality with decrement $\tfrac12\theta(1-\theta)|x-y|^2$.

[F3] [[def-lipschitz-holder-contraction]]: a $1$-Lipschitz gradient satisfies $|f_i'(x)-f_i'(y)|\le|x-y|$.

[F4] [[def-euclidean-inner-product]]: in one dimension $\|x\|_2^2=x^2$.

[F5] [[def-complete-ordered-field]]: rational inequalities are preserved by multiplication by positive denominators.

[F6] [[lem-finite-sum-laws]]: a finite average of identical component functions equals that common function.

## Counterexample

1.1 Each $f_i'(x)=x$, so [F3] holds with $L=1$. For $z=(1-\theta)x+\theta y$, direct expansion gives $(1-\theta)f_i(x)+\theta f_i(y)-f_i(z)=\tfrac12\theta(1-\theta)(x-y)^2$; hence [F2] holds with $\mu=1$. The finite-sum scaling law [F6] gives $F(x)=x^2/2$, so $x^*=0$ is stationary. The step size satisfies $1/13\le1/3$ and $1/13=\mu/(13L^2)$. [F2, F3, F4, F6, given, algebra]

1.2 By [F1], every initial table entry and its mean equal $1$. For any sampled index, $v_0=f_{I_0}'(1)-1+1=1$, so $x_1=1-1/13=12/13$. The replacement stores $f_{I_0}'(x_0)=1$, leaving the whole table unchanged. Therefore $V_0=1$, $V_1=(12/13)^2=144/169$, and $S_0=S_1=1$. [F1, given, algebra]

2.1 With $\mathcal L_k=V_k+7\eta^2nS_k$, [F4] gives $\mathcal L_0=1+700/169=869/169$ and $\mathcal L_1=144/169+700/169=844/169$. Thus $\mathcal L_1/\mathcal L_0=844/869$. Since $13\cdot844=10972>10428=12\cdot869$ by [F5], this ratio is greater than $12/13=1-\mu\eta$. The sampled update is deterministic because all components are identical, so the same strict failure holds for the expected Lyapunov values. [F4, F5, step 1.2, given, algebra] ∎
