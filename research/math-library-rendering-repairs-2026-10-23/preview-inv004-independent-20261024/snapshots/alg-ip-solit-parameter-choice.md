---
id: alg-ip-solit-parameter-choice
kind: algorithm
title: SOLIT parameter choice on a geometric-variance grid
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-ordered-filter-grid-and-source-index
  - lem-ip-solit-filter-risk-decomposition-and-monotone-bias
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-isonormal-white-noise-experiment
  - thm-ip-white-noise-spectral-sequence-representation
  - def-countable-choice
justified_by:
  - thm-ip-solit-oracle-risk-and-rate
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "Countable Choice is inherited through the fixed SVD coordinates in the sequence model; the finite selector search and minimum-index choice are otherwise choice-free."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "Housen Li and Frank Werner, Adaptive minimax optimality in statistical inverse problems via SOLIT, §§3.2.1–3.2.2"
      url: https://arxiv.org/pdf/2304.10356
    - title: "Vladimir Spokoiny and Niklas Willrich, Bootstrap tuning in ordered model selection, §§2.1–2.4"
      url: https://arxiv.org/pdf/1507.05034
---

## Definition

Assume Countable Choice. Let $T:X\to Y$ be an injective compact Hilbert–Schmidt operator of infinite rank between separable real Hilbert spaces, let $S=T^*T$, and let $(s_j,v_j,u_j)$ be a fixed positive singular system with $\lambda_j=s_j^2$. Let $Z$ be a real isonormal Gaussian process on $Y$, meaning that $g\mapsto Z(g)$ is linear into $L^2$, is centered, has covariance $\mathbb E[Z(g)Z(h)]=\langle g,h\rangle_Y$, and has independent standard-normal values on every finite orthonormal tuple. In the weak observation experiment $Y_x(g)=\langle Tx,g\rangle_Y+\sigma Z(g)$ with known noise standard deviation $\sigma>0$, use the ordered filter $q_\alpha$, the geometric-variance candidates $\alpha_0>\cdots>\alpha_{m_{\max}}$, and variances $v_m=\sigma^2\sum_j\lambda_jq_{\alpha_m}(\lambda_j)^2$ from the preceding definition. For each candidate index $m$, the regularized estimator $\widehat x_m$ is the $L^2$ limit of its finite singular-coordinate sums; its $j$th coordinate is $\lambda_jq_{\alpha_m}(\lambda_j)\theta_j+\sigma s_jq_{\alpha_m}(\lambda_j)\xi_j$, where $\theta_j=\langle x,v_j\rangle_X$ and $\xi_j=Z(u_j)$.

Take as input the observed sequence $y=(y_j)_{j\ge1}$, where $y_j:=Y_x(u_j)$. For each candidate $m$ and each $N=1,2,\ldots$, compute
$$
\widehat x_{m,N}^{\mathrm{obs}}:=\sum_{j=1}^N s_jq_{\alpha_m}(\lambda_j)y_jv_j.
$$
If these partial sums converge in $X$, define $\widehat x_m(y)$ to be their limit; otherwise set $\widehat x_m(y)=0_X$. This specifies an $X$-valued output for every input sequence. The quantities $v_{m_1,m_2}$ and $z_{m_1,m_2}(x)$ are determined by the known operator, filter, noise level and Gaussian coordinate law.

For $0\le m_1<m_2\le m_{\max}$, set
$$
v_{m_1,m_2}:=\sigma^2\sum_{j\ge1}\lambda_j\bigl(q_{\alpha_{m_2}}(\lambda_j)-q_{\alpha_{m_1}}(\lambda_j)\bigr)^2
$$
and let $N_{m_1,m_2}$ be the norm of the centered estimator difference divided by $\sigma$. For $x>0$, define its upper quantile by
$$
z_{m_1,m_2}(x):=\inf\{z\ge0:\mathbb P(N_{m_1,m_2}>z)\le e^{-x}\}.
$$
Given fixed $\beta>0$ and $\gamma>0$, for $0\le m<m_{\max}$ put $x_m:=2(1+\gamma)\log(v_{m+1}/v_0)$, and for each pair $m_1<m_2$ put $\eta_{m_1,m_2}:=\sigma z_{m_1,m_2}(x_{m_1})+\beta\sqrt{v_{m_1,m_2}}$. Accept an index $m_1$ exactly when $\|\widehat x_{m_1}(y)-\widehat x_{m_2}(y)\|_X\le\eta_{m_1,m_2}$ for every $m_2$ with $m_1<m_2\le m_{\max}$, and output the smallest accepted index $\widehat m$ and parameter $\widehat\alpha=\alpha_{\widehat m}$. For $m_1=m_{\max}$, accept without comparisons, including when $m_{\max}=0$. This rule uses only the observed sequence, the known operator and filter, the noise level, the fixed candidate grid, and $\beta,\gamma$; it does not use $x$ or its source index $\varphi$.

## Definition references

[[def-ip-ordered-filter-grid-and-source-index|Ordered filters, source conditions, and candidate-grid variance]]

[[def-ip-gaussian-sequence-inverse-model|The positive-noise SVD sequence experiment]]

[[def-ip-isonormal-white-noise-experiment|The weak isonormal observation process]]

[[thm-ip-white-noise-spectral-sequence-representation|Independent Gaussian coordinates of white noise]]

[[lem-ip-solit-filter-risk-decomposition-and-monotone-bias|Well-definedness and bias–variance properties of the regularized estimators]]

[Li and Werner, *Adaptive minimax optimality in statistical inverse problems via SOLIT*, §§3.2.1–3.2.2](https://arxiv.org/pdf/2304.10356)

[Spokoiny and Willrich, *Bootstrap tuning in ordered model selection*, §§2.1–2.4](https://arxiv.org/pdf/1507.05034)

## Rule diagram

The arrows show the order of the finite procedure: form the regularized estimates, compare each candidate with every finer one using the two-index threshold, then return the smallest candidate that passes all of its comparisons. The diagram illustrates the algorithm only; the proofs of its properties use the coordinate definitions and inequalities.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={draw,rounded corners,align=center,text width=6cm,minimum height=0.9cm}]
  \node (data) at (0,0) {observations $y_j=Y_x(u_j)$};
  \node (est) at (0,-1.5) {observed-data partial sums $\widehat x_{m,N}$};
  \node (tests) at (0,-3) {all finer-index two-index tests};
  \node (choose) at (0,-4.5) {smallest accepted index $\widehat m$};
  \draw[->] (data) -- (est);
  \draw[->] (est) -- (tests);
  \draw[->] (tests) -- (choose);
\end{tikzpicture}
```

## Remarks

The constant $\gamma$ controls the strength of the noise quantiles, while $\beta$ controls the bias tolerance. The quantile definition remains meaningful when a pairwise Gaussian difference is degenerate; then its upper quantile is zero.
