---
id: cex-sir-l2-bound-from-conditional-means-is-false
kind: counterexample
title: Conditional future means alone do not bound finite-particle SIR error
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-fixed-level-sir-splitting
  - alg-sequential-importance-resampling
  - def-nested-rare-event-levels
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "The cited general SIR procedure is stated under AC; the finite two-state counterexample itself is choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
---

## Statement refuted

The following proposed implication is false as stated. For every finite-level full-resampling SIR event model with positive finite prefix normalizers, define
$
Q_{p,L}1(x_p)=\mathbb E\!\left[\prod_{j=p+1}^L G_j(X_j)\mid X_p=x_p\right],\quad
h_{p,L}=\frac{Q_{p,L}1}{Z_L/Z_p},\quad
\eta_p=\text{the normalized level-}p\text{ law}.
$
If $\int h_{p,L}^2\,d\eta_p\le B$ for all $p<L$, the asserted finite-particle bound is
$
\mathbb E[(\widehat Z_L-Z_L)^2]\le Z_L^2\left[\left(1+\frac{B-1}{N}\right)^L-1\right].
$

## Facts & Assumptions

**Given:** The two-state probability space $\Omega=\{0,1\}$ with uniform law $P$; $A_0=A_1=\Omega$, $A_2=\{0\}$; $L=2$; and $N\ge1$.

[A1] [[def-axiom-of-choice]]: AC is inherited through the general SIR supplier; the finite model and its calculations require no additional choice.

[F1] [[def-nested-rare-event-levels]]: $p_\ell=P(A_\ell)/P(A_{\ell-1})$ and $\pi_\ell=P(\,\cdot\mid A_\ell)$.

[F2] [[alg-fixed-level-sir-splitting]]: The SIR potentials are event indicators, the level-one mutation is $K_1$, and the estimator is the product of average incremental weights under full multinomial resampling.

[F3] [[alg-sequential-importance-resampling]]: With proposal kernels equal to target transitions, incremental Radon–Nikodym weights are one; the normalizer update multiplies the previous estimate by the sample mean of the next potential.

## Counterexample

1.1 Here $p_1=1$, $p_2=1/2$, $Z_0=Z_1=1$, $Z_2=1/2$, and $\eta_0=\eta_1=P$. Use $M_1$ equal to the identity and choose the level-one mutation $K_1(x,\cdot)=P(\cdot)$. This refresh kernel is supported on $A_1=\Omega$ and leaves $\pi_1=P$ invariant, so it satisfies the contract's mutation hypotheses. [A1, F1, F2, given]

1.2 For $p=0$, the future event probability $Q_{0,2}1(x_0)$ is $1/2$ for every state because the refresh is independent of $x_0$; for $p=1$, $Q_{1,2}1(x_1)=K_1\mathbf1_{A_2}(x_1)=1/2$ for every state. Both normalizers $Z_2/Z_p$ equal $1/2$. Thus $h_{0,2}=h_{1,2}=1$, each $\eta_p$-second moment is $1$, and $B=1$ satisfies the stated condition. [F1, F2, given, algebra]

2.1 Since $G_1\equiv1$, the first resampling weights are equal. The refresh mutation ignores the resampled ancestors, so $X_2^1,\ldots,X_2^N$ are IID with law $P$. By [F3], $\widehat Z_2=N^{-1}\sum_{i=1}^N\mathbf1_{\{X_2^i=0\}}$, hence $\mathbb E[(\widehat Z_2-Z_2)^2]=\operatorname{Var}(\widehat Z_2)=1/(4N)$. [F2, F3, step 1.1, algebra]

3.1 With $B=1$, the proposed right-hand side is $Z_2^2[(1+(B-1)/N)^2-1]=0$, contradicting the strictly positive error $1/(4N)$ in step 2.1. Therefore the proposed implication is false. [step 2.1, step 1.2, algebra] ∎
