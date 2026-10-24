---
id: cex-adam-periodic-linear-losses-force-divergence
kind: counterexample
title: Adam diverges on a periodic bounded-gradient loss sequence
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-adam-update
  - thm-induction-principle
  - def-complete-ordered-field
  - cor-cauchy-reals-lub-complete
  - thm-of-square-roots
  - def-natural-numbers
  - def-integer-power
  - lem-of-square-monotone
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - thm-of-archimedean
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond, ICLR 2018"
      url: https://arxiv.org/pdf/1904.09237
      locator: Section 2, Theorem 1; Appendix F, Theorem 6, which treats an epsilon-denominator projected variant.
    - title: "Diederik P. Kingma and Jimmy Ba, Adam: A Method for Stochastic Optimization, ICLR 2015"
      url: https://arxiv.org/pdf/1412.6980
      locator: Section 2, Algorithm 1 and bias-correction equations (2)–(5).
---

## Statement refuted

The claim that bounded gradients alone keep every bias-corrected Adam iterate bounded is false, even in one dimension with fixed parameters beta_1=0, beta_2=1/2, eta=1, and epsilon=1/100.

## Facts & Assumptions

**Given:** Adam is initialized at x_1=m_0=v_0=0 and is fed the finite prefixes of the periodic loss sequence

$$
\ell_{3k+1}(x)=\frac52x,\qquad \ell_{3k+2}(x)=\ell_{3k+3}(x)=-x\quad(k\ge0).
$$

Each finite prefix is a convex loss sequence and every gradient has magnitude at most 5/2.

[F1] [[alg-adam-update]]: Adam uses m_t=beta_1m_{t-1}+(1-beta_1)g_t, v_t=beta_2v_{t-1}+(1-beta_2)g_t^2, bias corrections, and x_{t+1}=x_t-eta mhat_t/(sqrt(vhat_t)+epsilon).

[F2] [[thm-induction-principle]]: a property true at zero and inherited by each successor holds for every natural index.

[F3] [[cor-cauchy-reals-lub-complete]] establishes that the real field is complete in the sense of [[def-complete-ordered-field]]. In particular it is an ordered field, so order is preserved by addition and multiplication by nonnegative numbers; the completeness hypotheses of [F4] and [F8] hold.

[F4] [[thm-of-square-roots]]: each nonnegative real has a unique nonnegative square root.

[F5] [[def-natural-numbers]]: time and cycle indices are natural numbers.

[F6] [[def-integer-power]]: beta^t is the integer power of beta at natural time t.

[F7] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: convexity means the segment inequality for function values.

[F8] [[thm-of-archimedean]]: for every real $M$ there is a natural $r$ with $r>M$.

[F9] [[lem-of-square-monotone]]: on nonnegative reals, $a^2<b^2$ implies $a<b$.

## Counterexample

1.1 The losses are affine, hence convex by direct substitution in [F7]. With $\beta_2=1/2$, define $h_k=v_{3k+1}$, $u_k=v_{3k+2}$, and $w_k=v_{3k+3}$. Substituting the three gradients in [F1] gives $h_0=25/8$, $u_k=h_k/2+1/2$, $w_k=h_k/4+3/4$, and $h_{k+1}=h_k/8+7/2$. The formula $h_k=4-7/8^{k+1}$ holds at $k=0$ because $4-7/8=25/8$; substitution proves the successor formula, so [F2] gives it for every $k$. It yields $h_k<4$ and $u_k<5/2$, $w_k<7/4$. Also $h_{k+1}-h_k=(7/8)(4-h_k)>0$, so for $k\ge2$, $h_k\ge h_2=4-7/512>3.98$, where $7/512<1/50$. [F1, F2, F3, F5, F6, F7, given, algebra, induction]

2.1 Let $a_k,b_k,c_k>0$ be the magnitudes of the three Adam updates in cycle $k$, so the cycle change is $-a_k+b_k+c_k$. For $k\ge2$, step 1.1 gives $\widehat v_{3k+1}\ge h_k>3.98>(1.99)^2$, $\widehat v_{3k+2}\le(5/2)/(1-2^{-8})=128/51<(8/5)^2$, and $\widehat v_{3k+3}<(7/4)/(1-2^{-9})=896/511<(7/5)^2$. Since all quantities are nonnegative, [F9] gives the corresponding square-root comparisons. Since $\beta_1=0$, $\widehat m_t=g_t$; with $\epsilon=1/100$ the update magnitudes satisfy $a_k<(5/2)/(1.99+0.01)=5/4$, $b_k>1/(8/5+1/100)=100/161$, and $c_k>1/(7/5+1/100)=100/141$. Exact arithmetic gives $100/161+100/141-5/4=7295/90804>0$, so every such cycle increases $x$ by at least this amount. [F1, F3, F4, F5, F6, F9, step 1.1, given, algebra]

3.1 Put $X_k=x_{3k+1}$. For every $k\ge2$, step 2.1 gives $X_{k+1}\ge X_k+\delta$, where $\delta=7295/90804>0$. Induction gives $X_{2+r}\ge X_2+r\delta$ for each integer $r\ge0$. Given any real bound $M$, [F8] supplies an integer $r>(M-X_2)/\delta$ ; hence $X_{2+r}>M$. Thus the terminal subsequence is unbounded above, disproving boundedness from bounded gradients alone. [F2, F3, F5, F8, step 2.1, given, algebra, induction] ∎

## Remarks

The drift calculation concerns the unprojected Adam update defined in [[alg-adam-update]] on R; no lower-bounded fixed objective or bounded feasible set is assumed. It refutes a blanket bounded-iterate guarantee from bounded gradients alone and makes no claim about Adam on a fixed strongly convex objective.
