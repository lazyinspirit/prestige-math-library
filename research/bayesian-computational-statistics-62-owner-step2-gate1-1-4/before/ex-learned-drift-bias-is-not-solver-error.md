---
id: ex-learned-drift-bias-is-not-solver-error
kind: example
title: "A learned-drift bias that persists after solver error vanishes"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - thm-euler-maruyama-strong-rate-for-square-integrable-initial-data
  - alg-euler-maruyama
  - def-d-dimensional-brownian-motion
  - lem-characteristic-function-of-a-normal-law
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Work on a complete filtered probability space whose filtration is
right-continuous and contains all $P$-null subsets of $\mathcal F$ in
$\mathcal F_0$. Let $W$ be an adapted standard one-dimensional Brownian motion
whose increments after time $s$ are independent of $\mathcal F_s$. Compare the
target equation $dX_t=dW_t$, $X_0=0$, on $[0,1]$ with a learned
equation $d\widehat X_t=(\pi/2)dt+dW_t$, $\widehat X_0=0$. For the bounded
Lipschitz payoff $\varphi(x)=\cos x$, the Euler solver is exact at the
terminal grid point for the learned equation, while the learned drift creates
a nonzero bias relative to the target law that is independent of $h$.

## Facts & Assumptions

**Given:** AC; the complete usual filtered Brownian setup above; $T=1$; the $\mathcal F_0$-measurable initial values $X_0=\widehat X_0=0$; $h=1/N$; the target and learned equations in the Example; and $\varphi(x)=\cos x$.

[F1] A one-dimensional standard Brownian motion has $W_1\sim N(0,1)$. [[def-d-dimensional-brownian-motion]]

[F2] If $Z\sim N(m,v)$, its characteristic function is $\mathbb E e^{itZ}=\exp(imt-vt^2/2)$. [[lem-characteristic-function-of-a-normal-law]]

[F3] The Euler–Maruyama recursion uses $Y_{k+1}=Y_k+b(t_k,Y_k)h+\sigma(t_k,Y_k)\Delta W_k$. [[alg-euler-maruyama]]

[F4] Under global Lipschitz, linear-growth, half-Hölder time and square-integrable initial-value hypotheses, the Euler strong supremum error tends to zero at root-mean-square rate $O(h^{1/2})$. [[thm-euler-maruyama-strong-rate-for-square-integrable-initial-data]]

[A1] AC is stated because the Brownian and normal characteristic-function interfaces in [F1]–[F2] assume it. [[def-axiom-of-choice]]

## Verification


1.1 The target equation has terminal value $X_1=W_1$. By [F1]–[F2], $\mathbb E\cos(X_1)=\operatorname{Re}\mathbb E e^{iW_1}=e^{-1/2}.$ The learned Euler recursion is $\widehat Y_{k+1}=\widehat Y_k+(\pi/2)h+\Delta W_k$. Summing its $N$ increments gives $\widehat Y_N=\frac\pi2 Nh+\sum_{k=0}^{N-1}\Delta W_k=\frac\pi2+W_1,$ which is exactly $\widehat X_1$ for every $h=1/N$. Thus the discretization error relative to the learned equation is zero. [F1, F3, given, algebra]

2.1 By [F2] and the addition formula, $\mathbb E\cos(\widehat X_1) =\operatorname{Re}\left(e^{i\pi/2}\mathbb E e^{iW_1}\right)=0.$ Therefore the absolute expectation bias relative to the target is $|0-e^{-1/2}|=e^{-1/2}>0$ for every step size, so it persists as $h\to0$. The solver theorem [F4] controls error to the learned SDE solution; it supplies no bound on the difference between the learned and target drifts. AC is inherited through [A1]. [A1, F2, F4, step 1.1, algebra] ∎
