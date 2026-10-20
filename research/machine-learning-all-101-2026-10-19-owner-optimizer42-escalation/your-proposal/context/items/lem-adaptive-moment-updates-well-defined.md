---
id: lem-adaptive-moment-updates-well-defined
kind: lemma
title: RMSProp, Adam, and AMSGrad moment updates are well-defined
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - alg-rmsprop
  - alg-adam
  - alg-amsgrad
  - thm-induction-principle
  - def-natural-numbers
  - def-euclidean-inner-product
  - lem-finite-sum-laws
  - lem-of-square-monotone
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-of-square-roots
  - lem-of-square-positive
  - lem-of-zero-mult
  - def-ordered-field
  - lem-of-sign-rules
  - def-max-min
  - lem-finite-set-has-max
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning"
      url: "https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf"
      locator: "RMSprop coordinatewise recurrence, PDF pp. 65–66."
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "§2 Algorithm 1, §4 Algorithm 2, and Appendix F regularized update."

---

## Statement

For every finite admissible run of the RMSProp, uncorrected Adam, or uncorrected AMSGrad procedures defined on this page, all moment coordinates are finite and nonnegative. Every denominator specified by the procedure is positive. For AMSGrad, a zero historical-maximum coordinate has zero current and previous first moments, and the raw second moment is positive whenever its historical maximum is positive; the zero-ratio convention is therefore consistent. Each weighted minimization over the compact feasible set attains a minimum.

## Statement references

[[alg-rmsprop]]: defines the exponential second-moment recurrence and positive stabilizer.

[[alg-adam]]: defines the uncorrected scalar moment recurrences, admissible denominators, and clipping update.

[[alg-amsgrad]]: defines the raw-moment recurrence, historical maximum, zero-coordinate convention, and compact-set minimization.

[Reddi, Kale, and Kumar, adaptive-moment procedures](https://arxiv.org/pdf/1904.09237)

[Bottou, Curtis, and Nocedal, RMSprop recurrence](https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf)

## Facts & Assumptions

**Given:** Finite gradient inputs for the three procedures, their parameter ranges and initial zero moments, and the admissibility conditions in their Definitions.

[F1] [[alg-rmsprop]]: $r_0=0$ and $r_{t,i}=\rho r_{t-1,i}+(1-\rho)g_{t,i}^2$, with $0\le\rho<1$ and $\epsilon>0$.

[F2] [[alg-adam]]: $m_0=v_0=0$, $v_t=\beta_2v_{t-1}+(1-\beta_2)g_t^2$, and each used radicand $v_t+\epsilon$ is positive.

[F3] [[alg-amsgrad]]: $m_0=v_0=\widehat v_0=0$, $\beta_2\in(0,1)$, $v_{t,i}=\beta_2v_{t-1,i}+(1-\beta_2)g_{t,i}^2$, and $\widehat v_{t,i}=\max\{\widehat v_{t-1,i},v_{t,i}\}$.

[F4] [[thm-induction-principle]]: a property true at the initial index and preserved at each finite successor holds at every finite round.

[F5] [[lem-of-square-positive]], [[lem-of-zero-mult]], and [[lem-of-sign-rules]]: coordinate squares are nonnegative, and nonnegative coefficients preserve nonnegativity under sums and products.

[F6] [[thm-of-square-roots]]: each nonnegative real has a unique nonnegative square root.

[F7] [[def-max-min]] and [[lem-finite-set-has-max]]: every two-element set of real numbers has a maximum.

[F8] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a compact subset of $\mathbb R^d$ is bounded, and a continuous real-valued function on a nonempty compact subset attains its minimum.

[F9] [[def-euclidean-inner-product]], [[lem-finite-sum-laws]], [[lem-of-square-monotone]], and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|x_i-z_i|\le\|x-z\|_2$, the Euclidean norm satisfies the triangle inequality, and finite sums of nonnegative terms remain nonnegative.

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 For each procedure, induction over its finite horizon shows that every moment is a finite real and each second moment is nonnegative. The initial moments are zero. At a successor round, each recurrence is a finite sum of products of finite reals by [F1]–[F3] and [F9]; the coefficients $\rho,1-\rho,\beta_2,1-\beta_2$ are nonnegative, and each squared gradient is nonnegative by [F5], so the next second moment remains nonnegative. [F1, F2, F3, F4, F5, F9, given, induction, algebra]

2.1 For RMSProp, [F6] supplies $\sqrt{r_{t,i}}\ge0$, so $\sqrt{r_{t,i}}+\epsilon>0$ by [F1]. For Adam, [F6] supplies $\sqrt{v_t+\epsilon}$ because $v_t\ge0$ and $\epsilon\ge0$; its positivity is the explicit admissibility condition in [F2]. Thus each stated quotient has a positive denominator. [F1, F2, F6, step 1.1, given, algebra]

2.2 In AMSGrad, both entries in each maximum are finite and nonnegative by [F3], [F5], and step 1.1. The maximum exists by [F7] and is nonnegative. If $\widehat v_{t,i}=0$, then $\widehat v_{t-1,i}=v_{t,i}=0$. Since $\beta_2>0$, $1-\beta_2>0$, and both summands defining $v_{t,i}$ are nonnegative, $v_{t-1,i}=0$ and $g_{t,i}=0$. Repeating this argument back to time zero gives every earlier $g_{s,i}=0$; the first-moment recurrence then gives $m_{t,i}=m_{t-1,i}=0$. Conversely, if $\widehat v_{t,i}>0$, some $v_{s,i}>0$ for $s\le t$, and then $v_{u+1,i}\ge\beta_2v_{u,i}>0$ for each $u\ge s$, so $v_{t,i}>0$. The zero-ratio convention in [F3] is therefore consistent with the recurrence. [F3, F5, F7, step 1.1, given, induction, algebra]

3.1 Fix a round and its finite vector $y$ and nonnegative weights $q_i=\sqrt{\widehat v_{t,i}}$. Since $F$ is compact, [F8] bounds $\|x\|_2$ by some $B$ for $x\in F$. For $x,z\in F$, coordinatewise expansion and [F9] give $$\left|\sum_i q_i(x_i-y_i)^2-\sum_i q_i(z_i-y_i)^2\right|\le\|x-z\|_2\sum_i q_i(2B+2\|y\|_2).$$ Thus the objective is continuous on $F$. Since $F$ is nonempty and compact, [F8] gives a minimizer. The objective can be constant along zero-weight coordinates, so allowing any minimizer is necessary and sufficient. This proves the remaining well-definedness claim. [F3, F8, F9, step 2.2, given, algebra] ∎

