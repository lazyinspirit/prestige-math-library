---
id: thm-ip-solit-oracle-risk-and-rate
kind: theorem
title: SOLIT oracle risk bound and spectral rates
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-ordered-filter-grid-and-source-index
  - alg-ip-solit-parameter-choice
  - lem-ip-solit-filter-risk-decomposition-and-monotone-bias
  - def-ip-index-source-ball
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-isonormal-white-noise-experiment
  - thm-ip-white-noise-spectral-sequence-representation
  - def-compact-spectral-filter-and-qualification
  - def-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: "Countable Choice is inherited through the fixed compact SVD and coefficient identification; no additional choice is used by the stated estimator or finite selector."
sources:
  references:
    - title: "Housen Li and Frank Werner, Adaptive minimax optimality in statistical inverse problems via SOLIT, Theorems 3.4, 3.8, 4.1 and 4.3"
      url: https://arxiv.org/pdf/2304.10356
    - title: "Vladimir Spokoiny and Niklas Willrich, Bootstrap tuning in ordered model selection, Theorem 2.3 and Appendix A"
      url: https://arxiv.org/pdf/1507.05034
    - title: "Christian Clason, Regularization of Inverse Problems, complete lecture notes, Chapter 5 §5.2"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
---

## Statement
Assume Countable Choice. Let $T:X\to Y$ be an injective compact Hilbert–Schmidt operator of infinite rank between separable real Hilbert spaces. Write $A:=T^*T$, and list its positive eigenvalues with multiplicity as $\lambda_1\ge\lambda_2\ge\cdots>0$, where $\lambda_1=\|A\|$ and $\sum_j\lambda_j<\infty$. Observe the weak Gaussian experiment
$$
Y_x(g)=\langle Tx,g\rangle_Y+\sigma Z(g),\qquad g\in Y,
$$
where $\sigma>0$ is known and $Z:Y\to L^2(\Omega)$ is centered and linear with covariance $\mathbb E[Z(g)Z(h)]=\langle g,h\rangle_Y$, and has independent standard-normal values on every finite orthonormal tuple.

Let $\varphi:[0,\infty)\to[0,\infty)$ be continuous and strictly increasing with $\varphi(0)=0$. Assume $u\mapsto u\varphi^{-1}(\sqrt{u})$ is convex for $0\le u\le\varphi(\lambda_1)^2$, where $\varphi^{-1}$ is the inverse on the range of $\varphi$. For $\rho>0$, define the source ball
$$
\mathcal W_\varphi(\rho):=\{\varphi(A)w:w\in X,\ \|w\|_X\le\rho\}.
$$
Assume $x\in\mathcal W_\varphi(\rho)$. Let $q_\alpha:[0,\lambda_1]\to[0,\infty)$ be an ordered filter indexed by $\alpha\in\mathcal A\subset(0,\infty)$, with $0$ an accumulation point of $\mathcal A$, such that for finite $C_q',C_\varphi>0$ and every $t\in[0,\lambda_1]$ and $\alpha\in\mathcal A$,
$$
0\le\alpha q_\alpha(t)\le C_q',\qquad 0\le tq_\alpha(t)\le1,
$$
$q_\alpha(t)\le q_{\widetilde\alpha}(t)$ whenever $\widetilde\alpha<\alpha$, and
$$
\sup_{0\le t\le\lambda_1}\varphi(t)(1-tq_\alpha(t))\le C_\varphi\varphi(\alpha).
$$

Define $\Sigma(t):=\#\{j:\lambda_j\ge t\}$. Assume there is a continuous $S:(0,\lambda_1]\to[0,\infty)$ with $\liminf_{\alpha\downarrow0}S(\alpha)/\Sigma(\alpha)>0$, $\alpha S(\alpha)\to0$, and
$$
\alpha^{-1}\int_0^\alpha\Sigma(t)\,dt\le C_SS(\alpha)
$$
for some $C_S>0$ for every candidate $\alpha\in\mathcal A\cap(0,\lambda_1]$.

Let $\alpha_0>\alpha_1>\cdots$ be candidates in $\mathcal A\cap(0,\lambda_1]$, with the initial candidate $\alpha_0$ fixed independently of $\sigma$, and set
$$
v_m:=\sigma^2\sum_{j\ge1}\lambda_jq_{\alpha_m}(\lambda_j)^2,
$$
and assume $v_0>0$ and $1<\theta_1\le v_m/v_{m-1}\le\theta_2<\infty$ for $m\ge1$. Set $m_{\max}:=\min\{m\in\mathbb N_0:v_m\ge1\}$. Fix a positive singular system $(s_j,v_j,u_j)$ with $Tv_j=s_ju_j$ and $\lambda_j=s_j^2$, set $\theta_j=\langle x,v_j\rangle_X$ and $\xi_j=Z(u_j)$, and define $\widehat x_m$ as the $L^2(\Omega;X)$ limit with coordinates
$$
\langle\widehat x_m,v_j\rangle_X=\lambda_jq_{\alpha_m}(\lambda_j)\theta_j+\sigma s_jq_{\alpha_m}(\lambda_j)\xi_j.
$$
For $m_1<m_2$, define the pairwise variance
$$
v_{m_1,m_2}:=\sigma^2\sum_{j\ge1}\lambda_j\bigl(q_{\alpha_{m_2}}(\lambda_j)-q_{\alpha_{m_1}}(\lambda_j)\bigr)^2.
$$
Let $G_{m_1,m_2}:=(\widehat x_{m_2}-\mathbb E\widehat x_{m_2})-(\widehat x_{m_1}-\mathbb E\widehat x_{m_1})$ be the centered estimator difference, and for $a>0$ set
$$
z_{m_1,m_2}(a):=\inf\{z\ge0:\mathbb P(\|G_{m_1,m_2}\|_X/\sigma>z)\le e^{-a}\}.
$$
For fixed $\beta,\gamma>0$, define $\eta_{m_1,m_2}:=\sigma z_{m_1,m_2}(2(1+\gamma)\log(v_{m_1+1}/v_0))+\beta\sqrt{v_{m_1,m_2}}$ for $m_1<m_2$. Let $\widehat m$ be the smallest $m_1\in\{0,\ldots,m_{\max}\}$ such that $\|\widehat x_{m_1}-\widehat x_{m_2}\|_X\le\eta_{m_1,m_2}$ for every $m_2$ with $m_1<m_2\le m_{\max}$, and set $\widehat\alpha=\alpha_{\widehat m}$. Define $m_*$ as the smallest $m$ for which every pair $m\le m_1<m_2\le m_{\max}$ satisfies
$$
\|\mathbb E\widehat x_{m_1}-\mathbb E\widehat x_{m_2}\|_X^2\le\beta^2v_{m_1,m_2},
$$
and put $\mathcal R_{m_*}:=\mathbb E\|\widehat x_{m_*}-x\|_X^2$. Then
$$
\mathbb E\|\widehat x_{\widehat m}-x\|_X^2\le C_{1,m_*}\mathcal R_{m_*}+\bigl(\sqrt{\mathcal R_{m_*}}+C_{2,m_*}\bigr)^2,
$$
where
$$
C_{1,m_*}=\frac{2\sqrt3}{\theta_1^\gamma-1}\left(\frac{v_0}{v_{m_*}}\right)^{1+\gamma},\qquad C_{2,m_*}=\beta\sqrt{v_{m_*}}+\sqrt{2u_{m_*}\left(2(1+\gamma)\log\frac{v_{m_*}}{v_0}+\log(1+m_{\max})\right)},
$$
and $u_m:=\sigma^2\sup_j\lambda_jq_{\alpha_m}(\lambda_j)^2$.

For the rate conclusions as $\sigma^2\downarrow0$, assume additionally that $\lambda_1\le e^{-1}$. In both rate regimes let $\varphi(t)=t^\nu(-\log t)^{-\tau}$ for $t\in(0,\lambda_1]$, extend it by $\varphi(0)=0$, take the natural logarithm, and assume the displayed $\varphi$ satisfies the index-function, convexity, and filter-qualification hypotheses above; here either $\nu>0,\tau\in\mathbb R$ or $\nu=0,\tau>0$.

If $\lambda_j\asymp j^{-a}$ with $a>1$, $S(\alpha)\asymp\alpha^{-1/a}$, and $v_m\ge c_v\sigma^2S(\alpha_m)/\alpha_m$ for some $c_v>0$, then for some constant $C>0$,
$$
\sup_{x\in\mathcal W_\varphi(\rho)}\mathbb E\|\widehat x_{\widehat m}-x\|_X^2\le C(\sigma^2)^{\frac{2\nu}{2\nu+1/a+1}}(-\log\sigma^2)^{-\frac{2\tau(1+1/a)}{2\nu+1+1/a}}.
$$
If instead $\lambda_j\asymp j^{-a}e^{-bj^\vartheta}$ with $a\in\mathbb R$, $b>0$, and $0<\vartheta\le\tfrac12$, assume also $S(\alpha)\asymp(-\log\alpha)^{1/\vartheta}$ and $v_m\ge c_v\sigma^2S(\alpha_m)/((-\log\alpha_m)\alpha_m)$ for some $c_v>0$; then for some $C>0$,
$$
\sup_{x\in\mathcal W_\varphi(\rho)}\mathbb E\|\widehat x_{\widehat m}-x\|_X^2\le C(\sigma^2)^{\frac{2\nu}{2\nu+1}}(-\log\sigma^2)^{\frac{2\nu/\vartheta-2\tau}{2\nu+1}}.
$$
The severe-rate assertion requires exactly $0<\vartheta\le\tfrac12$; the source does not establish adaptive-minimax optimality of the polynomial-smoothness severe rate. For spectral cut-off filters, the uniform geometric-variance candidate condition may fail when $\vartheta>1$. When $\nu=0$, both displayed rates simplify to $(-\log\sigma^2)^{-2\tau}$.

## Statement references

[[def-ip-ordered-filter-grid-and-source-index|Ordered filter, source index, qualification, and geometric-variance grid]]

[[alg-ip-solit-parameter-choice|The SOLIT selector and its two-index threshold]]

[[lem-ip-solit-filter-risk-decomposition-and-monotone-bias|Risk decomposition, monotone bias, and pairwise variance bound]]

[[def-ip-gaussian-sequence-inverse-model|The positive-noise sequence model and minimum-norm coordinates]]

[[def-ip-isonormal-white-noise-experiment|Weak Gaussian white-noise observations]]

[[thm-ip-white-noise-spectral-sequence-representation|Independent Gaussian coordinates of white noise]]

[Li and Werner, *Adaptive minimax optimality in statistical inverse problems via SOLIT*, Theorems 3.4, 3.8, 4.1 and 4.3](https://arxiv.org/pdf/2304.10356)

[Spokoiny and Willrich, *Bootstrap tuning in ordered model selection*, Theorem 2.3 and Appendix A](https://arxiv.org/pdf/1507.05034)

[Clason, *Regularization of Inverse Problems*, complete lecture notes, Chapter 5 §5.2](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

## Facts & Assumptions

**Given:** The weak white-noise experiment, the ordered spectral filter, a finite geometric-variance candidate set, the SOLIT selector, and the source and surrogate hypotheses stated above.

[A1] [[def-countable-choice]]: Countable Choice supplies the fixed countable compact singular-system coordinates; the finite candidate selector itself uses a least element of a nonempty finite set.

[F1] [[def-ip-gaussian-sequence-inverse-model]]: In the positive-noise singular coordinates, $Z_j=\theta_j+\sigma s_j^{-1}\xi_j$ with independent standard-normal $\xi_j$.

[F2] [[def-ip-ordered-filter-grid-and-source-index]]: The filter is nonnegative, $0\le t q_\alpha(t)\le1$, $\alpha q_\alpha(t)\le C_q'$, the source condition is $x=\varphi(T^*T)w$ with $\|w\|\le\rho$, and the candidate variances grow between $\theta_1$ and $\theta_2$.

[F3] [[alg-ip-solit-parameter-choice]]: The selector compares every candidate with all finer candidates using the centered pairwise Gaussian quantile plus $\beta\sqrt{v_{m_1,m_2}}$ and returns the smallest accepted index.

[F4] [[lem-ip-solit-filter-risk-decomposition-and-monotone-bias]]: The fixed-candidate risk is bias squared plus variance; the bias is nonincreasing in the candidate index and pairwise variance is bounded by the finer candidate's variance.

[F5] [[def-ip-index-source-ball]]: For $\psi(t)=\varphi(t^2)$, the source class $X_{\psi,\rho}(T)$ consists of vectors $\psi(|T|)w$ with $\|w\|\le\rho$; the compact spectral multiplier gives $\psi(|T|)=\varphi(T^*T)$ on each singular coordinate.

[F6] [[def-compact-spectral-filter-and-qualification]]: The spectral multiplier $\varphi(T^*T)$ acts as $\varphi(\lambda_j)$ on each singular coordinate, and qualification means the stated residual bound uniformly over the spectrum.

## Proof status

The statement and all rate hypotheses are transcribed from the cited source. The full expected-risk proof is not supplied locally: the source's proof of Theorem 3.4 verifies monotone bias and a geometric variance-ratio sum, then invokes Theorem B.1 and Proposition B.2 in the supplement to Spokoiny and Willrich (2019). The complete 2015 preprint proof of its related Theorem 2.3 uses a different multiplicity-calibration condition and does not by itself prove this exact SOLIT threshold inequality. This item remains escalated until that Gaussian maximal-risk step is proved locally or an exact current supplier is available.
