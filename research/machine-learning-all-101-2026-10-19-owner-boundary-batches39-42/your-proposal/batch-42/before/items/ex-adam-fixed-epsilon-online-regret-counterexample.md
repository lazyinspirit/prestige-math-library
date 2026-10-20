---
id: ex-adam-fixed-epsilon-online-regret-counterexample
kind: example
title: A fixed denominator regularizer does not prevent Adam's periodic regret example
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-adam
  - lem-adaptive-moment-updates-well-defined
  - thm-adam-online-regret-counterexample
  - thm-induction-principle
  - def-natural-numbers
  - def-euclidean-inner-product
  - thm-of-square-roots
  - def-ordered-field
  - lem-of-sign-rules
  - def-max-min
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-convex-subset-of-euclidean-space
  - def-interval
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "Appendix F fixed-epsilon Adam counterexample, PDF pp. 17–18."
---

## Example

Fix $\epsilon>0$. On $[-1,1]$, run the uncorrected scalar Adam update with $\alpha=1/10$, $\beta_1=0$, $\beta_2=1/45$, $x_1=1$, and denominator $\sqrt{v_t+\epsilon}$. Repeat the losses $\ell_{3k+1}(x)=3\sqrt\epsilon\,x$ and $\ell_{3k+2}(x)=\ell_{3k+3}(x)=-\sqrt\epsilon\,x$ for every integer $k\ge0$, feeding their slopes as the algorithm's gradients. The best-comparator regret has limit inferior average at least $2\sqrt\epsilon/3$.

## Example references

[[alg-adam]]: fixes the scalar update, inside-root denominator, and clipping convention.

[[def-interval]]: $[-1,1]$ is the closed interval used as the domain.

[[thm-adam-online-regret-counterexample]]: proves the positive-epsilon periodic construction and its average-regret lower bound.

[Reddi, Kale, and Kumar, Appendix F](https://arxiv.org/pdf/1904.09237)

## Facts & Assumptions

**Given:** The fixed positive $\epsilon$ and periodic losses in the Example.

[F1] [[alg-adam]]: the second moment is $v_t=\beta_2v_{t-1}+(1-\beta_2)g_t^2$, the denominator is $\sqrt{v_t+\epsilon}$, and the iterate is clipped to $[-1,1]$.

[F2] [[lem-adaptive-moment-updates-well-defined]]: the second moments stay finite and nonnegative; hence $v_t+\epsilon>0$ for this positive $\epsilon$.

[F3] [[thm-adam-online-regret-counterexample]]: for every $\epsilon>0$, the parameters $\alpha=1/10$, $\beta_1=0$, $\beta_2=1/45$, and the displayed period yield $\liminf_{T\to\infty}R_T/T\ge2\sqrt\epsilon/3$.

[F4] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]] and [[def-convex-subset-of-euclidean-space]]: $[-1,1]$ is convex and every displayed linear loss is convex on it.

## Verification

**Given:** $\epsilon>0$ and the stated scalar run.

1.1 Each gradient is finite, each second moment is nonnegative by [F1] and [F2], and the denominator is strictly positive because $\epsilon>0$. For $x,y\in[-1,1]$ and $\theta\in[0,1]$, every loss satisfies $\ell_t((1-\theta)x+\theta y)=(1-\theta)\ell_t(x)+\theta\ell_t(y)$, so it is convex by [F4]. Thus the stated run is admissible. [F1, F2, F4, given, algebra]

2.1 The positive-epsilon case of [F3] has exactly these parameters, initialization, denominator placement, clipping rule, and period of losses. Its conclusion gives the claimed limit inferior average regret. [F3, step 1.1, given] ∎
