---
id: lem-it-awgn-feedback-estimation-covariance-update
kind: lemma
title: Gaussian feedback estimation-error covariance update
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-two-user-real-awgn-mac-feedback-code]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the calculation is finite-dimensional Gaussian conditioning.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 18, AWGN MAC with feedback
      url: https://arxiv.org/pdf/1001.3404v3
    - title: Amos Lapidoth and Michèle Wigger, On the AWGN MAC with Imperfect Feedback, Appendix C, perfect-feedback recursion
      url: https://www.isiweb.ee.ethz.ch/papers/docu/alap-mwig-2010-2.pdf
---

## Statement

Let $(X_1,X_2)$ be centered jointly Gaussian with variances $P_1,P_2>0$, correlation $\rho\in[0,1)$, and let $Z\sim N(0,N)$ be independent, $N>0$. Put $X=(X_1,X_2)^T$, $a=(1,1)^T$, $K=\begin{pmatrix}P_1&\rho\sqrt{P_1P_2}\\\rho\sqrt{P_1P_2}&P_2\end{pmatrix}$, $Y=a^TX+Z$, and $D=N+a^TKa$. The residual $X-\mathbb E[X\mid Y]$ is independent of $Y$ and has covariance $K-Kaa^TK/D$. In particular,
$$\operatorname{Var}(X_1\mid Y)=\frac{P_1[N+P_2(1-\rho^2)]}{D},\quad \operatorname{Var}(X_2\mid Y)=\frac{P_2[N+P_1(1-\rho^2)]}{D},$$
$$\operatorname{Cov}(X_1-\mathbb E[X_1\mid Y],X_2-\mathbb E[X_2\mid Y])=\frac{\rho\sqrt{P_1P_2}N-P_1P_2(1-\rho^2)}{D}.$$
After scaling the two errors to variances $P_1,P_2$ and reversing the sign of the second, their correlation is
$$\rho_{\rm new}=\frac{\sqrt{P_1P_2}(1-\rho^2)-\rho N}{\sqrt{[N+P_1(1-\rho^2)][N+P_2(1-\rho^2)]}}.$$

## Facts & Assumptions

**Given:** A centered jointly Gaussian pair with positive variances, a correlation $0\le\rho<1$, and independent Gaussian observation noise of variance $N>0$.

[F1] [[def-it-two-user-real-awgn-mac-feedback-code]]: the output is the sum of the two real inputs and independent Gaussian noise; feedback encoders may normalize causal estimation errors.

## Proof

1.1 Write $K=\begin{pmatrix}P_1&c\\c&P_2\end{pmatrix}$ with $c=\rho\sqrt{P_1P_2}$, $a=(1,1)^T$, and $D=N+a^TKa$. Set $R=X-(Ka/D)Y$. Then $\operatorname{Cov}(R,Y)=Ka-(Ka/D)D=0$. Since $(R,Y)$ is jointly Gaussian, this block-diagonal covariance makes its joint characteristic function factor, so $R$ and $Y$ are independent. Thus $\mathbb E[X\mid Y]=KaY/D$ and the residual covariance is $\operatorname{Cov}(R)=K-Kaa^TK/D$. [given, F1, algebra]

2.1 Since $Ka=(P_1+c,P_2+c)^T$ and $N+a^TKa=D$, subtracting the rank-one matrix gives diagonal entries $P_1[N+P_2(1-\rho^2)]/D$, $P_2[N+P_1(1-\rho^2)]/D$, and off-diagonal entry $[cN+c^2-P_1P_2]/D$. [step 1.1, algebra]

3.1 Dividing the off-diagonal covariance by the square root of the two diagonal variances and changing its sign yields the displayed $\rho_{\rm new}$; all denominators are positive because $N>0$. [step 2.1, algebra] ∎

