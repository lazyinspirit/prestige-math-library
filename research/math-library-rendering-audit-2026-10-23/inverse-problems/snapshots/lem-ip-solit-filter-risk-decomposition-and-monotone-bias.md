---
id: lem-ip-solit-filter-risk-decomposition-and-monotone-bias
kind: lemma
title: Risk decomposition and monotone bias for ordered spectral filters
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-ordered-filter-grid-and-source-index
  - def-ip-gaussian-sequence-inverse-model
  - thm-singular-value-decomposition-for-compact-operators
  - def-ip-isonormal-white-noise-experiment
  - thm-ip-white-noise-spectral-sequence-representation
  - def-countable-choice
  - thm-monotone-convergence-for-the-integral
  - thm-chebyshev-markov-inequality-for-the-integral
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice supplies the fixed compact singular system through the Gaussian sequence model; all series and risk calculations below are conditional on that fixed countable basis and use no further choice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Housen Li and Frank Werner, Adaptive minimax optimality in statistical inverse problems via SOLIT, Lemma 3.6 and §§3.1.1–3.2.1"
      url: https://arxiv.org/pdf/2304.10356
    - title: "Christian Clason, Regularization of Inverse Problems, complete lecture notes, Chapter 5 §5.1"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement
Assume Countable Choice and the positive-noise Gaussian sequence model with $\sigma>0$, a fixed complete positive singular system $(s_j,v_j,u_j)$ for an injective compact Hilbert–Schmidt operator $T:X\to Y$, and a truth with coordinates $\theta_j=\langle x,v_j\rangle_X$ in $\ell^2$. Write $\lambda_j=s_j^2$ and let $\xi_j$ be the independent standard-normal noise coordinates. Let $q_\alpha$ be nonnegative and satisfy $0\le\lambda_jq_{\alpha_m}(\lambda_j)\le1$, $q_{\alpha_m}(\lambda_j)\le C_q'/\alpha_m$, and $q_{\alpha_{m_1}}(\lambda_j)\le q_{\alpha_{m_2}}(\lambda_j)$ whenever $m_1<m_2$. For each candidate $m$, form the finite sums
$$
X_{m,N}:=\sum_{j=1}^N\bigl(\lambda_jq_{\alpha_m}(\lambda_j)\theta_j+\sigma s_jq_{\alpha_m}(\lambda_j)\xi_j\bigr)v_j.
$$
The conclusion below includes the existence of their limit $\widehat x_m$ in $L^2(\Omega;X)$. Put $f_m:=\mathbb E\widehat x_m$, $B_m:=\|f_m-x\|_X$, and $v_m:=\mathbb E\|\widehat x_m-f_m\|_X^2$. Then $\widehat x_m$ is a measurable $X$-valued random element with finite second moment and
$$
\mathbb E\|\widehat x_m-x\|_X^2=B_m^2+v_m,\qquad v_m=\sigma^2\sum_{j\ge1}\lambda_jq_{\alpha_m}(\lambda_j)^2.
$$
If $m_1<m_2$, then $B_{m_2}\le B_{m_1}$, $\|f_{m_2}-f_{m_1}\|_X\le B_{m_1}$, and
$$
v_{m_1,m_2}:=\mathbb E\| (\widehat x_{m_2}-f_{m_2})-(\widehat x_{m_1}-f_{m_1})\|_X^2=\sigma^2\sum_{j\ge1}\lambda_j\bigl(q_{\alpha_{m_2}}(\lambda_j)-q_{\alpha_{m_1}}(\lambda_j)\bigr)^2\le v_{m_2}.
$$

## Statement references

[[def-ip-ordered-filter-grid-and-source-index|The ordered-filter bounds and candidate-grid ordering]]

[[def-ip-gaussian-sequence-inverse-model|The Gaussian sequence coordinate law]]

[[thm-ip-white-noise-spectral-sequence-representation|Independent standard-normal singular coordinates]]

[Li and Werner, *Adaptive minimax optimality in statistical inverse problems via SOLIT*, Lemma 3.6 and §§3.1.1–3.2.1](https://arxiv.org/pdf/2304.10356)

[Clason, *Regularization of Inverse Problems*, complete lecture notes, Chapter 5 §5.1](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the experiment and hypotheses in the Statement, a fixed complete positive singular system $(s_j,v_j,u_j)$ with $\lambda_j=s_j^2$, and a fixed candidate $m$ or pair $m_1<m_2$.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the SVD coordinate model; after its fixed countable basis is supplied, the proof below makes no further selections.

[F1] [[def-ip-gaussian-sequence-inverse-model]]: In the positive-noise sequence experiment, $Z_j=\theta_j+\sigma s_j^{-1}\xi_j$ with independent $\xi_j\sim N(0,1)$, and $\theta=(\theta_j)\in\ell^2$.

[F2] [[thm-singular-value-decomposition-for-compact-operators]]: The fixed positive singular vectors form complete orthonormal bases on the minimum-norm parameter space and the closure of the range, with $Tv_j=s_ju_j$ and $T^*Tv_j=\lambda_jv_j$.

[F3] [[def-ip-ordered-filter-grid-and-source-index]]: For each candidate $0\le\lambda_jq_{\alpha_m}(\lambda_j)\le1$; if $m_1<m_2$, then $q_{\alpha_{m_1}}(\lambda_j)\le q_{\alpha_{m_2}}(\lambda_j)$; and $q_{\alpha_m}(\lambda_j)\le C_q'/\alpha_m$.


[F4] [[def-ip-isonormal-white-noise-experiment]]: The Gaussian coordinates are centered with variance one and independent on every finite orthonormal tuple.

[F5] [[thm-monotone-convergence-for-the-integral]] permits passing increasing limits of nonnegative coordinate-square sums through the expectation.

[F6] [[thm-chebyshev-markov-inequality-for-the-integral]] bounds the probability that a nonnegative random variable is at least a positive level by its expectation divided by that level.

## Proof
1.1 Put $c_j:=\lambda_jq_{\alpha_m}(\lambda_j)\theta_j$ and $d_j:=\sigma s_jq_{\alpha_m}(\lambda_j)$. By [F3], $|c_j|\le|\theta_j|$, so $(c_j)_j\in\ell^2$. Also $q_{\alpha_m}(\lambda_j)\le C_q'/\alpha_m$ and $\sum_j\lambda_j<\infty$ by [F2], so $\sum_jd_j^2=\sigma^2\sum_j\lambda_jq_{\alpha_m}(\lambda_j)^2<\infty$. The partial sums of $Q:=\sum_jd_j^2\xi_j^2$ increase, and [F5] gives $\mathbb EQ=\sum_jd_j^2<\infty$. For each integer $r\ge1$, [F6] gives $\mathbb P(Q\ge r)\le\mathbb EQ/r$; since $\{Q=+\infty\}\subseteq\{Q\ge r\}$ for every $r$, $Q<\infty$ almost surely. Thus on a measurable event of probability one the coordinate series $\sum_j(c_j+d_j\xi_j)v_j$ converges in $X$; define its pointwise limit there and set it to zero on the null complement. The finite partial sums are measurable, and their pointwise limit on this event, extended by zero, is measurable because $X$ is separable. By Parseval and [F5], for each $N$, $\mathbb E\|\widehat x_m-X_{m,N}\|_X^2=\sum_{j>N}\mathbb E(c_j+d_j\xi_j)^2=\sum_{j>N}c_j^2+\sum_{j>N}d_j^2$, where [F4] gives $\mathbb E\xi_j=0$ and $\mathbb E\xi_j^2=1$. Both deterministic and noise tails tend to zero, so this constructed measurable pointwise limit is the $L^2(\Omega;X)$ limit. In particular it has finite second moment. [given, A1, F1, F2, F3, F4, F5, F6, algebra]

2.1 For $m_1<m_2$, [F3] gives $0\le1-\lambda_jq_{\alpha_{m_2}}(\lambda_j)\le1-\lambda_jq_{\alpha_{m_1}}(\lambda_j)$. Squaring these nonnegative terms and summing against $\theta_j^2$ gives $B_{m_2}^2\le B_{m_1}^2$. Moreover, $f_{m_2}-f_{m_1}$ has coordinate $\lambda_j(q_{\alpha_{m_2}}-q_{\alpha_{m_1}})\theta_j$, whose multiplier equals $(1-\lambda_jq_{\alpha_{m_1}})-(1-\lambda_jq_{\alpha_{m_2}})$ and lies between zero and $1-\lambda_jq_{\alpha_{m_1}}$; coordinatewise comparison therefore yields $\|f_{m_2}-f_{m_1}\|_X\le B_{m_1}$. [F1, F2, F3, step 1.1, algebra]

2.2 Subtracting $x$ in each singular coordinate gives deterministic bias coefficient $-(1-\lambda_jq_{\alpha_m}(\lambda_j))\theta_j$ and centered noise coefficient $\sigma s_jq_{\alpha_m}(\lambda_j)\xi_j$. Since $\mathbb E\xi_j=0$ and $\mathbb E\xi_j^2=1$ by [F1] and [F4], summing the coordinate second moments and using monotone convergence gives $\mathbb E\|\widehat x_m-x\|_X^2=\sum_j(1-\lambda_jq_{\alpha_m}(\lambda_j))^2\theta_j^2+\sigma^2\sum_j\lambda_jq_{\alpha_m}(\lambda_j)^2=B_m^2+v_m$. [F1, F2, F4, step 1.1, algebra]

3.1 The centered pairwise noise difference has coordinate variance $\sigma^2\lambda_j(q_{\alpha_{m_2}}(\lambda_j)-q_{\alpha_{m_1}}(\lambda_j))^2$. By [F3], each difference lies between zero and $q_{\alpha_{m_2}}(\lambda_j)$; summing its squared value against $\sigma^2\lambda_j$ proves $v_{m_1,m_2}\le v_{m_2}$. [F2, F3, F4, step 1.1, algebra] ∎
## Remarks

The $L^2$-limit definition is needed because white noise is not an $Y$-valued observation in infinite dimension. The estimator itself is $X$-valued because its filtered noise covariance has finite trace.
