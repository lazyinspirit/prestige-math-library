---
id: ex-amsgrad-constant-beta-outside-decaying-schedule
kind: example
title: Constant first-moment weight is outside the proved square-root regret schedule
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-amsgrad
  - lem-adaptive-moment-updates-well-defined
  - thm-amsgrad-online-convex-regret
  - def-euclidean-inner-product
  - thm-of-square-roots
  - def-ordered-field
  - lem-of-sign-rules
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-convex-subset-of-euclidean-space
  - thm-of-archimedean
  - def-abs-value
  - lem-of-abs-value
  - def-metric-continuity
  - lem-real-line-is-a-metric-space
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - def-subgradient-and-subdifferential
  - def-interval
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "Theorem 4 and Corollary 1, explicit decreasing first-moment schedule, PDF pp. 5–6."
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.6.1 online adaptive-potential bounds, PDF pp. 114–116."
---

## Example

Let $F=[-1,1]$, $x_1=0$, $\ell_t(x)=x$, $g_t=1$, $\alpha_t=1/\sqrt t$, $\beta_{1,t}=1/4$ for every round, and $\beta_2=1/2$. The hypotheses of the AMSGrad regret inequality hold, but the second, first-moment correction term in its displayed bound is at least $4T^{3/2}/9$ for $T\ge2$. This shows that the bound does not give an $O(\sqrt T)$ guarantee for this constant schedule; it gives no lower bound on the algorithm's actual regret.

## Example references

[[thm-amsgrad-online-convex-regret]]: gives the regret inequality and states the geometric and reciprocal first-moment schedules for its $O(\sqrt T)$ consequence.

[[def-interval]]: $[-1,1]$ is the closed interval used as the feasible domain.

[[alg-amsgrad]]: defines the raw moment recurrence used to calculate the correction term.

[Reddi, Kale, and Kumar, Theorem 4 and Corollary 1](https://arxiv.org/pdf/1904.09237)

## Facts & Assumptions

**Given:** The domain, losses, gradients, and parameters in the Example.

[F1] [[alg-amsgrad]]: $v_0=0$ and $v_t=\beta_2v_{t-1}+(1-\beta_2)g_t^2$, with $\widehat v_t=\max\{\widehat v_{t-1},v_t\}$.

[F2] [[thm-amsgrad-online-convex-regret]]: under its stated domain, loss, gradient, and parameter hypotheses, the second correction term is
$$\frac{D_\infty^2}{(1-\beta_1)^2}\sum_{t=1}^T\frac{\beta_{1,t}\sqrt{\widehat v_t}}{\alpha_t}.$$

[F3] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]] and [[def-convex-subset-of-euclidean-space]]: convexity means $f((1-\theta)x+\theta y)\le(1-\theta)f(x)+\theta f(y)$ on a convex set, for $\theta\in[0,1]$.

[F4] [[def-abs-value]], [[lem-of-abs-value]], [[def-metric-continuity]], and [[lem-real-line-is-a-metric-space]]: continuity on $\mathbb R$ is checked with the usual distance $|x-y|$ and the $\varepsilon$-$\delta$ criterion.

[F5] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a nonempty closed bounded subset of $\mathbb R$ is compact.

[F6] [[def-subgradient-and-subdifferential]]: $g\in\partial f(x)$ when $f(y)\ge f(x)+g(y-x)$ for all $y$ in the domain.

[F7] [[thm-of-archimedean]]: the positive integers are unbounded, so the growth estimates below are unbounded as $T$ increases.

[F8] [[def-ordered-field]] and [[lem-of-sign-rules]]: nonnegative coefficients preserve interval bounds under weighted sums.

[F9] [[def-interval]]: $[-1,1]$ is the closed interval with endpoints $-1$ and $1$.

## Verification

**Given:** The one-dimensional online run in the Example.

1.1 The interval $[-1,1]$ is nonempty, closed, and bounded by [F9], hence compact by [F5]. For $x,y\in[-1,1]$ and $\theta\in[0,1]$, [F8] gives $-1\le(1-\theta)x+\theta y\le1$, so the domain is convex. Also $\ell_t((1-\theta)x+\theta y)=(1-\theta)\ell_t(x)+\theta\ell_t(y)$, so each loss is convex by [F3]. Since $|\ell_t(x)-\ell_t(y)|=|x-y|$, choosing $\delta=\eta$ in [F4] proves continuity for every tolerance $\eta>0$. The gradient $g_t=1$ is a subgradient because $\ell_t(y)=\ell_t(x)+(y-x)$ by [F6], and $\gamma=\beta_1/\sqrt{\beta_2}=\sqrt2/4<1$. Thus the hypotheses for [F2] hold. Iterating [F1] gives $v_t=1-2^{-t}$, which is nondecreasing, so $\widehat v_t=v_t\ge1/2$ for every $t\ge1$. [F1, F2, F3, F4, F5, F6, F8, F9, given, induction, algebra]

2.1 Here $\alpha_t=1/\sqrt t$ and $\beta_{1,t}=1/4$. The second term in [F2] is therefore at least $$\frac{4}{(3/4)^2}\sum_{t=1}^T\frac{1}{4\sqrt2}\sqrt t=\frac{16}{9\sqrt2}\sum_{t=1}^T\sqrt t.$$ For $T\ge2$, at least $T/2$ indices satisfy $t\ge T/2$, so $\sum_{t=1}^T\sqrt t\ge T^{3/2}/(2\sqrt2)$. The correction term is at least $4T^{3/2}/9$. [F2, F4, step 1.1, given, algebra]

3.1 The constant schedule is neither $\beta_{1,t}=\beta_1\lambda^{t-1}$ with $\lambda<1$ nor $\beta_{1,t}=\beta_1/t$. Since the theorem's upper-bound expression contains this positive term, that expression cannot be $O(\sqrt T)$ for this schedule: dividing its lower bound by $\sqrt T$ gives $4T/9$, which is unbounded by [F7]. The computation concerns the stated bound only and gives no lower bound on actual regret. [F2, F7, step 2.1, given, algebra] ∎