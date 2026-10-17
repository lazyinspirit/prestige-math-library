---
id: thm-diagonal-adagrad-regret-bound
kind: theorem
title: Diagonal AdaGrad regret bound
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-diagonal-adagrad-online-regret
  - lem-diagonal-adagrad-one-step-regret-bound
  - def-subgradient-and-subdifferential
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-finite-sum
  - def-euclidean-inner-product
  - thm-of-square-roots
  - def-complete-ordered-field
  - cor-cauchy-reals-lub-complete
  - lem-finite-sum-laws
  - lem-of-square-positive
  - lem-of-zero-mult
  - lem-of-square-monotone
  - lem-of-sign-rules
  - lem-of-inverse-positive
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization, JMLR 12 (2011)"
      url: https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf
      locator: Section 2, Theorem 5, composite mirror-descent update, and the complete Appendix C proof of the diagonal cumulative-gradient inequality in Lemma 4.
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, complete monograph"
      url: https://arxiv.org/pdf/1405.4980
      locator: Sections 3.1–3.3, projection inequality and online-gradient telescoping.
---

## Statement

Use one-based coordinate labels $z_j:=z(j-1)$ for $1\le j\le d$, as in [[alg-diagonal-adagrad-online-regret]]. Let $C\subseteq\mathbb R^d$ be nonempty, closed, and convex, and suppose its coordinate diameters
$$D_j=\sup\{|x_j-u_j|:x,u\in C\}$$
are finite. Run diagonal AdaGrad [[alg-diagonal-adagrad-online-regret]] for $T\ge1$ rounds on convex losses $\ell_t:C\to\mathbb R$, with $g_t\in\partial\ell_t(x_t)$, step size $\eta>0$, and accumulator $s_{t,j}=\sqrt{\epsilon^2+\sum_{k=1}^t g_{k,j}^2}$ for $\epsilon>0$. For every comparator $u\in C$,

$$\sum_{t=1}^T(\ell_t(x_t)-\ell_t(u))\le\sum_{j=1}^d\left(\frac{D_j^2}{2\eta}+\eta\right)s_{T,j}.$$

## Facts & Assumptions

**Given:** The set, losses, subgradients, finite horizon, positive parameters, and update in the Statement.

[F1] [[alg-diagonal-adagrad-online-regret]]: $A_t=\operatorname{diag}(s_{t,1},\ldots,s_{t,d})$ and the update minimizes the stated diagonal quadratic objective.

[F2] [[lem-diagonal-adagrad-one-step-regret-bound]]: for each $u\in C$, $\langle g_t,x_t-u\rangle\le(\|x_t-u\|_{A_t}^2-\|x_{t+1}-u\|_{A_t}^2)/(2\eta)+(\eta/2)\|g_t\|_{A_t^{-1}}^2$.

[F3] [[def-subgradient-and-subdifferential]]: $g_t\in\partial\ell_t(x_t)$ means $\ell_t(u)\ge\ell_t(x_t)+\langle g_t,u-x_t\rangle$ for all $u\in C$.

[F4] [[def-finite-sum]]: finite sums obey their recursive addition and finite-sum algebra.

[F5] [[def-euclidean-inner-product]]: for diagonal $A_t$, $\|z\|_{A_t}^2=\sum_j s_{t,j}z_j^2$.

[F6] [[cor-cauchy-reals-lub-complete]] establishes completeness of the real field in the sense of [[def-complete-ordered-field]]: every nonempty set of reals bounded above has a real supremum. Since $C$ is nonempty, each coordinate-difference set contains $0$; the finite-diameter hypothesis makes it bounded above, so each $D_j$ exists.

[F7] [[lem-finite-sum-laws]]: finite sums are additive, monotone termwise, and telescope.

[F8] [[lem-of-square-positive]] makes every nonzero square positive; [[lem-of-zero-mult]] gives square zero for zero. Thus every square is nonnegative.

[F9] [[lem-of-square-monotone]]: squaring is monotone on nonnegative reals.

[F10] [[def-complete-ordered-field]], [[lem-of-sign-rules]], and [[lem-of-inverse-positive]]: order is total, and multiplication or division by a positive real preserves order.

[F11] [[thm-of-square-roots]]: each accumulator is the nonnegative root of its displayed radicand, so its square equals that radicand.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 Sum [F2] for $t=1,\ldots,T$. Finite-sum algebra [F4], [F7] telescopes each coordinate to $\sum_t\langle g_t,x_t-u\rangle\le(\|x_1-u\|_{A_1}^2+\sum_{t=2}^T\|x_t-u\|_{A_t-A_{t-1}}^2-\|x_{T+1}-u\|_{A_T}^2)/(2\eta)+(\eta/2)\sum_t\|g_t\|_{A_t^{-1}}^2$. The last metric term is nonnegative and may be dropped. [F2, F4, F5, F7, given, algebra]

2.1 Set $s_{0,j}=\epsilon$. By [F1], [F11], and the finite-sum recursion [F4], $s_{t,j}^2-s_{t-1,j}^2=g_{t,j}^2\ge0$ by [F8]. Both roots are nonnegative by [F11], so [F9] gives $s_{t,j}\ge s_{t-1,j}$, and $s_{t-1,j}>0$ follows from the positive accumulator in [F1]. Thus every metric increment in step 1.1 is nonnegative. Since $x_t,u\in C$, $|x_{t,j}-u_j|\le D_j$. [F5] then bounds the initial and metric-increment terms in step 1.1 by $\sum_jD_j^2s_{T,j}$: for each $j$, $s_{1,j}+\sum_{t=2}^T(s_{t,j}-s_{t-1,j})=s_{T,j}$ by [F7]. [F1, F4, F5, F6, F7, F8, F9, F11, step 1.1, given, algebra]

3.1 The accumulator identity and monotonicity from step 2.1 give $g_{t,j}^2/s_{t,j}=(s_{t,j}-s_{t-1,j})(s_{t,j}+s_{t-1,j})/s_{t,j}\le2(s_{t,j}-s_{t-1,j})$ by [F10]. Summing and telescoping by [F7] gives $\sum_t\|g_t\|_{A_t^{-1}}^2\le2\sum_j(s_{T,j}-\epsilon)\le2\sum_j s_{T,j}$. Substitute in step 1.1 and combine with step 2.1 to obtain the linearized-loss bound. [F1, F4, F5, F7, F10, step 1.1, step 2.1, given, algebra]

4.1 By [F3], each convex-loss difference satisfies $\ell_t(x_t)-\ell_t(u)\le\langle g_t,x_t-u\rangle$. Summing these inequalities using [F7] and applying step 3.1 proves the stated regret bound. [F3, F7, step 3.1, given, algebra] ∎
