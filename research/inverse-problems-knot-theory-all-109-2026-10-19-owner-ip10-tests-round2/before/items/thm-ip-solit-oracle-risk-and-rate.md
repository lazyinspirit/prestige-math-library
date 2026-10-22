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
  - lem-ip-gaussian-series-norm-tail-and-fourth-moment
  - thm-monotone-convergence-for-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
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
$$Y_x(g)=\langle Tx,g\rangle_Y+\sigma Z(g),\qquad g\in Y,$$
where $\sigma>0$ is known and $Z:Y\to L^2(\Omega)$ is centered and linear with covariance $\mathbb E[Z(g)Z(h)]=\langle g,h\rangle_Y$, and has independent standard-normal values on every finite orthonormal tuple.

Let $\varphi:[0,\infty)\to[0,\infty)$ be continuous and strictly increasing with $\varphi(0)=0$. Assume $u\mapsto u\varphi^{-1}(\sqrt{u})$ is convex for $0\le u\le\varphi(\lambda_1)^2$, where $\varphi^{-1}$ is the inverse on the range of $\varphi$. For $\rho>0$, define the source ball
$$\mathcal W_\varphi(\rho):=\{\varphi(A)w:w\in X,\ \|w\|_X\le\rho\}.$$
Assume $x\in\mathcal W_\varphi(\rho)$. Let $q_\alpha:[0,\lambda_1]\to[0,\infty)$ be an ordered filter indexed by $\alpha\in\mathcal A\subset(0,\infty)$, with $0$ an accumulation point of $\mathcal A$, such that for finite $C_q',C_\varphi>0$ and every $t\in[0,\lambda_1]$ and $\alpha\in\mathcal A$,
$$0\le\alpha q_\alpha(t)\le C_q',\qquad 0\le tq_\alpha(t)\le1,$$
$q_\alpha(t)\le q_{\widetilde\alpha}(t)$ whenever $\widetilde\alpha<\alpha$, and
$$\sup_{0\le t\le\lambda_1}\varphi(t)(1-tq_\alpha(t))\le C_\varphi\varphi(\alpha).$$

Define $\Sigma(t):=\#\{j:\lambda_j\ge t\}$. Assume there is a continuous $S:(0,\lambda_1]\to[0,\infty)$ with $\liminf_{\alpha\downarrow0}S(\alpha)/\Sigma(\alpha)>0$, $\alpha S(\alpha)\to0$, and
$$\alpha^{-1}\int_0^\alpha\Sigma(t)\,dt\le C_SS(\alpha)$$
for some $C_S>0$ for every candidate $\alpha\in\mathcal A\cap(0,\lambda_1]$.

Let $\alpha_0>\alpha_1>\cdots$ be candidates in $\mathcal A\cap(0,\lambda_1]$, with the initial candidate $\alpha_0$ fixed independently of $\sigma$, and set
$$v_m:=\sigma^2\sum_{j\ge1}\lambda_jq_{\alpha_m}(\lambda_j)^2,$$
and assume $v_0>0$ and $1<\theta_1\le v_m/v_{m-1}\le\theta_2<\infty$ for $m\ge1$. Set $m_{\max}:=\min\{m\in\mathbb N_0:v_m\ge1\}$. Fix a positive singular system $(s_j,v_j,u_j)$ with $Tv_j=s_ju_j$ and $\lambda_j=s_j^2$, set $\theta_j=\langle x,v_j\rangle_X$ and $\xi_j=Z(u_j)$, and define $\widehat x_m$ as the $L^2(\Omega;X)$ limit with coordinates
$$\langle\widehat x_m,v_j\rangle_X=\lambda_jq_{\alpha_m}(\lambda_j)\theta_j+\sigma s_jq_{\alpha_m}(\lambda_j)\xi_j.$$
For $m_1<m_2$, define the pairwise variance
$$v_{m_1,m_2}:=\sigma^2\sum_{j\ge1}\lambda_j\bigl(q_{\alpha_{m_2}}(\lambda_j)-q_{\alpha_{m_1}}(\lambda_j)\bigr)^2.$$
Let $G_{m_1,m_2}:=(\widehat x_{m_2}-\mathbb E\widehat x_{m_2})-(\widehat x_{m_1}-\mathbb E\widehat x_{m_1})$ be the centered estimator difference, and for $a>0$ set
$$z_{m_1,m_2}(a):=\inf\{z\ge0:\mathbb P(\|G_{m_1,m_2}\|_X/\sigma>z)\le e^{-a}\}.$$
For fixed $\beta,\gamma>0$, define $\eta_{m_1,m_2}:=\sigma z_{m_1,m_2}(2(1+\gamma)\log(v_{m_1+1}/v_0))+\beta\sqrt{v_{m_1,m_2}}$ for $m_1<m_2$. Let $\widehat m$ be the smallest $m_1\in\{0,\ldots,m_{\max}\}$ such that $\|\widehat x_{m_1}-\widehat x_{m_2}\|_X\le\eta_{m_1,m_2}$ for every $m_2$ with $m_1<m_2\le m_{\max}$, and set $\widehat\alpha=\alpha_{\widehat m}$. Define $m_*$ as the smallest $m$ for which every pair $m\le m_1<m_2\le m_{\max}$ satisfies
$$\|\mathbb E\widehat x_{m_1}-\mathbb E\widehat x_{m_2}\|_X^2\le\beta^2v_{m_1,m_2},$$
and put $\mathcal R_{m_*}:=\mathbb E\|\widehat x_{m_*}-x\|_X^2$. Write $M:=m_{\max}$, $k:=m_*$, $b_m:=\|\mathbb E\widehat x_m-x\|_X$, and $R_m:=b_m^2+v_m$, so $R_k=\mathcal R_{m_*}$. Put $D_0:=0$, and for $k\ge1$ put
$$D_k:=(1+\beta)\sqrt{v_k}+\sqrt{4(1+\gamma)u_k\log(v_k/v_0)},\qquad u_m:=\sigma^2\sup_j\lambda_jq_{\alpha_m}(\lambda_j)^2.$$
If $k<M$, define
$$p_m:=\min\{1,(M-m+1)(v_0/v_m)^{2(1+\gamma)}\}\quad(k<m\le M),\qquad P_k:=\min\{1,(M-k)(v_0/v_{k+1})^{2(1+\gamma)}\},$$
$$A_k:=\sqrt3\sum_{m=k+1}^M v_m\sqrt{p_m},\qquad B_k:=2\sqrt3 R_k(v_0/v_k)^{1+\gamma}\sum_{m=k+1}^M\sqrt{M-m+1}(v_k/v_m)^\gamma.$$
If $k=M$, set $P_k=A_k=B_k=0$. Then the unchanged pairwise-quantile selector satisfies the finite oracle inequality
$$\mathbb E\|\widehat x_{\widehat m}-x\|_X^2\le(\sqrt{R_k}+D_k)^2+\min\{(b_k\sqrt{P_k}+\sqrt{A_k})^2,B_k\}.$$
In particular, put
$$\delta:=\frac1{2(1+\gamma)},\qquad K:=\frac{\theta_1}{\theta_1-1}+\frac1{1-\theta_1^{-\gamma}},\qquad W_M:=\begin{cases}v_0M^\delta,&M\ge1,\\0,&M=0.\end{cases}$$
Then $A_k\le\sqrt3 K W_M$ and
$$B_k\le\frac{2\sqrt3\sqrt M}{\theta_1^\gamma-1}(v_0/v_k)^{1+\gamma}R_k,$$
and a rate-oriented consequence is
$$\mathbb E\|\widehat x_{\widehat m}-x\|_X^2\le(\sqrt{R_k}+D_k)^2+2b_k^2+2\sqrt3 K W_M.$$
When $M=0$ the selected index is identically zero and its risk is exactly $R_0$. When $k=0$, the first term in both displayed oracle bounds is $R_0$ because $D_0=0$; when $k=M$, the late-selection term vanishes. The bounds retain the pairwise quantiles in the stated rule.

For the rate conclusions as $\sigma^2\downarrow0$, assume additionally that $\lambda_1\le e^{-1}$. In both rate regimes let $\varphi(t)=t^\nu(-\log t)^{-\tau}$ for $t\in(0,\lambda_1]$, extend it by $\varphi(0)=0$, take the natural logarithm, and assume the displayed $\varphi$ satisfies the index-function, convexity, and filter-qualification hypotheses above; here either $\nu>0,\tau\in\mathbb R$ or $\nu=0,\tau>0$.

If $\lambda_j\asymp j^{-a}$ with $a>1$, $S(\alpha)\asymp\alpha^{-1/a}$, and $v_m\ge c_v\sigma^2S(\alpha_m)/\alpha_m$ for some $c_v>0$, then for some constant $C>0$,
$$\sup_{x\in\mathcal W_\varphi(\rho)}\mathbb E\|\widehat x_{\widehat m}-x\|_X^2\le C(\sigma^2)^{\frac{2\nu}{2\nu+1/a+1}}(-\log\sigma^2)^{-\frac{2\tau(1+1/a)}{2\nu+1+1/a}}.$$
If instead $\lambda_j\asymp j^{-a}e^{-bj^\vartheta}$ with $a\in\mathbb R$, $b>0$, and $0<\vartheta\le\tfrac12$, assume also $S(\alpha)\asymp(-\log\alpha)^{1/\vartheta}$ and $v_m\ge c_v\sigma^2S(\alpha_m)/((-\log\alpha_m)\alpha_m)$ for some $c_v>0$; then for some $C>0$,
$$\sup_{x\in\mathcal W_\varphi(\rho)}\mathbb E\|\widehat x_{\widehat m}-x\|_X^2\le C(\sigma^2)^{\frac{2\nu}{2\nu+1}}(-\log\sigma^2)^{\frac{2\nu/\vartheta-2\tau}{2\nu+1}}.$$
The severe-rate assertion requires exactly $0<\vartheta\le\tfrac12$; the source does not establish adaptive-minimax optimality of the polynomial-smoothness severe rate. For spectral cut-off filters, the uniform geometric-variance candidate condition may fail when $\vartheta>1$. When $\nu=0$, both displayed rates simplify to $(-\log\sigma^2)^{-2\tau}$.

## Statement references

[[lem-ip-gaussian-series-norm-tail-and-fourth-moment|Gaussian series norm tails and fourth moments]]

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

**Given:** Countable Choice, the weak experiment, all ordered-filter, source, surrogate, grid and selector hypotheses in the Statement, and the additional stated hypotheses when a rate is asserted.

[A1] [[def-countable-choice]] supplies the fixed countable spectral coordinates; the finite minima and the explicit integer choices below require no further choice.

[F1] [[lem-ip-solit-filter-risk-decomposition-and-monotone-bias]] gives $R_m=b_m^2+v_m$, nonincreasing $b_m$, the pairwise bias bound $b_{a,b}\le b_a$, and $v_{a,b}\le v_b$ for $a<b$.

[F2] [[alg-ip-solit-parameter-choice]] supplies the unchanged pairwise-quantile acceptance rule and the smallest accepted index. The last candidate is always accepted.

[F3] [[lem-ip-gaussian-series-norm-tail-and-fourth-moment]] gives $\mathbb E\|G\|^4\le3(\mathbb E\|G\|^2)^2$, the norm-quantile bound $Q(t)\le\sqrt v+\sqrt{2ut}$, and the upper-tail inequality at that quantile for the given countable Gaussian coordinates.

[F4] [[def-ip-ordered-filter-grid-and-source-index]] gives the nonnegative coordinate ordering, the geometric variance ratios, and source qualification. [[def-ip-index-source-ball]] and [[def-compact-spectral-filter-and-qualification]] identify the source multipliers.

[F5] [[thm-monotone-convergence-for-the-integral]] permits summation and integration of the nonnegative coordinate terms.

## Proof

1.1 Work in the supplied singular coordinates, and write $f_m=\mathbb E\widehat x_m$, $\varepsilon_m=\widehat x_m-f_m$, and $b_{a,b}=\|f_b-f_a\|_X$. By [F1] all these variables have finite second moments and $R_m=b_m^2+v_m$. The finite comparison conditions are measurable, and [F2] ensures an accepted index exists. Thus $\widehat m$ is a measurable finite-valued index. Fix $k=m_*$; its defining condition gives $b_{a,b}\le\beta\sqrt{v_{a,b}}$ whenever $k\le a<b\le M$. [given, A1, F1, F2, algebra]

1.2 For later use, qualification gives $b_m^2\le\rho^2C_\varphi^2\varphi(\alpha_m)^2$. The filter bounds give $\lambda q_\alpha(\lambda)^2\le C_q'/\alpha$ and $\lambda q_\alpha(\lambda)^2\le(C_q')^2\lambda/\alpha^2$. With $C=\max\{C_q',(C_q')^2\}$, splitting eigenvalues at $\alpha$ and summing nonnegative terms therefore gives $$V_{T,q}(\alpha):=\sum_j\lambda_jq_\alpha(\lambda_j)^2\le\frac C{\alpha^2}\left(\alpha\Sigma(\alpha)+\sum_{\lambda_j<\alpha}\lambda_j\right)=\frac C{\alpha^2}\int_0^\alpha\Sigma(t)\,dt\le CC_SS(\alpha)/\alpha.$$ The equality follows by integrating each indicator $1_{\{t\le\lambda_j\}}$; [F5] justifies the interchange. Further $u_m\le C_q'\sigma^2/\alpha_m$, since $\lambda_jq_{\alpha_m}(\lambda_j)\le1$. [given, F4, F5, algebra]

2.1 The centered difference $G_{a,b}$ has coordinate variances $\sigma^2\lambda_j(q_{\alpha_b}(\lambda_j)-q_{\alpha_a}(\lambda_j))^2$. By nonnegative coordinate ordering their sum and supremum satisfy $v_{a,b}\le v_b$ and $u_{a,b}\le u_b$. Applying [F3] to their squared weights gives $$\sigma z_{a,b}(t)\le\sqrt{v_{a,b}}+\sqrt{2u_{a,b}t},\qquad \mathbb E\|\varepsilon_m\|^4\le3v_m^2.$$ Also the probability of exceeding the actual pairwise quantile is at most $e^{-t}$, including a degenerate difference. These are statements about the supplied normal sequence; no new infinite product law or general Gaussian concentration theorem is needed. [F1, F3, F4, step 1.1, algebra]

2.2 For the rates let $s=\sigma^2\downarrow0$ and $L=\log(1/s)$. The initial variance is $v_0=sV_{T,q}(\alpha_0)$ with a fixed positive factor, and the geometric lower ratio implies $M\le1+\log(1/v_0)/\log\theta_1=O(L)$. In the mild case put $D=2\nu+1+1/a$, $t=s^{1/D}L^{2\tau/D}$ and $r=s^{2\nu/D}L^{-2\tau(1+1/a)/D}$. In the severe case put $p=1/\vartheta\ge2$, $D=2\nu+1$, $t=s^{1/D}L^{(2\tau+p)/D}$ and $r=s^{2\nu/D}L^{(2\nu p-2\tau)/D}$. In either case $\log(1/t)\asymp L$, $r\to0$, $r/s\to\infty$, and direct substitution gives $\varphi(t)^2\asymp sS(t)/t\asymp r$. All implicit constants in the rest of the argument are independent of the truth in the fixed source ball and of sufficiently small $s$. [given, F4, step 1.2, algebra]

3.1 On $\{\widehat m\le k\}$, acceptance gives $\|\widehat x_{\widehat m}-\widehat x_k\|\le\eta_{\widehat m,k}$ when $\widehat m<k$, and the difference is zero when equality holds. For $m<k$, $x_m=2(1+\gamma)\log(v_{m+1}/v_0)\le2(1+\gamma)\log(v_k/v_0)$, so step 2.1 bounds every $\eta_{m,k}$ by $D_k$. The triangle inequality in mean square consequently bounds the early-selection contribution by $(\sqrt{R_k}+D_k)^2$. For $k=0$, this uses the identically zero difference and hence $D_0=0$. [F2, step 1.1, step 2.1, algebra]

3.2 For $m>k$, the event $\{\widehat m=m\}$ implies rejection of $m-1$. Its oracle bias bound from step 1.1 shows that a rejecting comparison with $\ell\ge m$ must satisfy $\|G_{m-1,\ell}\|>\sigma z_{m-1,\ell}(x_{m-1})$. The union bound over $M-m+1$ such comparisons and the quantile-tail property from step 2.1 therefore give $\mathbb P(\widehat m=m)\le p_m$. Similarly $\{\widehat m>k\}$ implies rejection of $k$, so $\mathbb P(\widehat m>k)\le P_k$. Here $e^{-x_{m-1}}=(v_0/v_m)^{2(1+\gamma)}$ exactly. [F2, step 1.1, step 2.1, algebra]

3.3 Let $j$ be the first candidate with $v_j\ge r$. For small $s$, $v_0<r<1$, so this index exists and $r\le v_j\le\theta_2r$. Step 1.2 implies $r\le CsS(\alpha_j)/\alpha_j$. First $\alpha_j\to0$: otherwise a subsequence bounded away from zero has bounded $S(\alpha_j)/\alpha_j$, contradicting $r/s\to\infty$. In the mild case the function $S(\alpha)/\alpha$ is comparable to $\alpha^{-1-1/a}$, so the last inequality and $r\asymp st^{-1-1/a}$ give $\alpha_j\le C't$. In the severe case it is comparable to $h(\alpha)=\alpha^{-1}(\log(1/\alpha))^p$. For any fixed $A>1$, $h(At)/h(t)\to1/A$ as $t\downarrow0$; since $h$ is decreasing for small positive arguments, choosing $A$ larger than the fixed comparison constant gives the same conclusion $\alpha_j\le C't$. Qualification and $\varphi(C't)^2\asymp\varphi(t)^2$ now give $b_j^2\le C''r$. [given, step 1.2, step 2.2, algebra, choose]

4.1 Cauchy–Schwarz and step 2.1 give $\mathbb E[\|\varepsilon_m\|^2 1_{\{\widehat m=m\}}]\le\sqrt3v_m\sqrt{p_m}$. Summing gives a late selected-noise second moment at most $A_k$. By [F1], the corresponding selected bias has mean-square norm at most $b_k\sqrt{P_k}$. The mean-square triangle inequality thus bounds the late risk by $(b_k\sqrt{P_k}+\sqrt{A_k})^2$. Alternatively, $\|\varepsilon_m+f_m-x\|^2\le2\|\varepsilon_m\|^2+2b_k^2$ and $p_m\le\sqrt{p_m}$ give a late risk bound $2\sqrt3\sum_{m>k}(v_m+b_k^2)\sqrt{p_m}$. Since $v_m+b_k^2\le(v_m/v_k)R_k$, dropping the minimum in $p_m$ yields exactly $B_k$. Together with step 3.1 these prove the first finite oracle inequality. If $k=M$, both late sums are empty. [F1, step 3.1, step 3.2, step 2.1, algebra]

4.2 Put $c_\beta=\beta^2(\sqrt{\theta_1}-1)^2>0$ and choose a fixed nonnegative integer $J$ with $\theta_1^J\ge C''/c_\beta$. For small $s$, $\theta_2^{J+1}r<1$, so the infinite candidate sequence has $\ell=j+J<M$, $v_\ell\le\theta_2^{J+1}r$, and $b_\ell^2\le C''r\le c_\beta v_\ell$. For every $\ell\le a<b$, monotone bias gives $b_{a,b}^2\le b_a^2\le c_\beta v_a$. The reverse triangle inequality for the square-summable noise coefficient vectors gives $v_{a,b}\ge(\sqrt{v_b}-\sqrt{v_a})^2\ge(\sqrt{\theta_1}-1)^2v_a$. Thus $b_{a,b}^2\le\beta^2v_{a,b}$ and $k\le\ell$. If $k<\ell$, the oracle property implies $\mathbb E\|\widehat x_k-\widehat x_\ell\|^2\le(1+\beta^2)v_{k,\ell}\le(1+\beta^2)v_\ell$. Hence $R_k\le2(1+\beta^2)v_\ell+2R_\ell\le Cr$; the case $k=\ell$ is immediate. In particular $v_k\le Cr$ and $\log(v_k/v_0)\le CL$. [F1, F4, step 1.1, step 2.2, step 3.3, algebra, choose]

5.1 Suppose $M\ge1$ and put $w=v_0M^\delta$. For $f(v)=v\min\{1,\sqrt M(v_0/v)^{1+\gamma}\}$ one has $f(v)=v$ for $v\le w$ and $f(v)=w^{1+\gamma}v^{-\gamma}$ for $v>w$. The geometric variance lower ratio gives $\sum_{v_m\le w}v_m\le\theta_1w/(\theta_1-1)$ and $\sum_{v_m>w}v_m^{-\gamma}\le w^{-\gamma}/(1-\theta_1^{-\gamma})$, by summing the backward and forward geometric series from the respective last and first indices. Thus $A_k\le\sqrt3Kw$. Also $v_m/v_k\ge\theta_1^{m-k}$ and $\sqrt{M-m+1}\le\sqrt M$ in the definition of $B_k$ prove its stated simpler bound. The inequality $(a+b)^2\le2a^2+2b^2$ applied to the first late alternative in step 4.1 gives the rate-oriented oracle bound. If $M=0$, the only index is zero, its risk equals $R_0$, and all late sums vanish as stipulated. [F4, step 4.1, algebra]

5.2 In the mild case the stated lower variance bound gives $v_k\ge cs\alpha_k^{-1-1/a}$. Combined with step 4.2 and $r\asymp st^{-1-1/a}$, this yields $\alpha_k\ge c't$. Therefore step 1.2 gives $u_k\log(v_k/v_0)\le CsL/t=o(r)$, because $Lt^{1/a}\to0$. It follows that $D_k^2\le C(v_k+u_k\log(v_k/v_0))\le Cr$ for $k\ge1$, while $D_0=0$ handles $k=0$. [given, step 1.2, step 2.2, step 4.2, algebra]

5.3 In the severe case put $H=\log(1/t)\asymp L$. If $\alpha_k\ge t$, then $\alpha_k\ge t/H$ for small $s$. If $\alpha_k<t$, the lower variance bound and $S(\alpha)\asymp(\log(1/\alpha))^p$ give $cs\alpha_k^{-1}H^{p-1}\le v_k\le Cr\le Cs t^{-1}H^p$, so again $\alpha_k\ge c't/H$. Hence $u_k\log(v_k/v_0)\le CsHL/t\le CsH^2/t\le CsH^p/t\asymp Cr$, using exactly $p\ge2$. Consequently $D_k^2\le Cr$ in this case also, with $D_0=0$ as before. [given, step 1.2, step 2.2, step 4.2, algebra]

6.1 By step 2.2, $W_M=O(sL^\delta)=o(r)$: when $\nu>0$, $r/s$ has a strictly positive power of $1/s$ multiplied by a fixed logarithmic power; when $\nu=0$ and $\tau>0$, $r=L^{-2\tau}$. The rate-oriented oracle bound from step 5.1, together with $R_k\le Cr$, $b_k^2\le R_k$ and the two rate estimates just proved, therefore gives the asserted uniform risk upper bound $Cr$ in each regime. Substituting the explicit expressions for $r$ from step 2.2 gives exactly the two displayed rates and their $\nu=0$ specializations. The severe proof uses $\vartheta\le1/2$ at step 5.3 and asserts only the stated upper rate, preserving the given qualification and grid hypotheses. This completes both the finite oracle and rate conclusions. [step 5.1, step 2.2, step 4.2, step 5.2, step 5.3, algebra] ∎

## Remarks

The finite oracle bound accounts explicitly for the number of pairwise comparisons. Its proof and the rate argument above use the specified pairwise selector throughout. The source's sharper displayed oracle constants are not used as a premise.
